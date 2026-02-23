document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const price = params.get('price');
    const imageStr = params.get('images');
    const colors = params.get('colors');

    const images = imageStr ? decodeURIComponent(imageStr).split(',') : [];

    // Text Details Populate
    document.getElementById('product-detail-title').textContent = title ? decodeURIComponent(title) : 'Product Title';
    document.getElementById('product-detail-price').textContent = price ? decodeURIComponent(price) : 'Rs. 0.00';

    // Image Gallery Logic
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsList = document.querySelector('.thumbnails-list');
    let currentImageIndex = 0;
    let imageSliderInterval;

    function showImage(index) {
        if (images.length === 0) return;
        currentImageIndex = (index + images.length) % images.length;

        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = images[currentImageIndex];
            mainImage.style.opacity = 1;
        }, 200);

        document.querySelectorAll('.thumbnail-img').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentImageIndex);
        });
    }

    if (images.length > 0) {
        mainImage.src = images[0];

        images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.classList.add('thumbnail-img');
            if (index === 0) thumb.classList.add('active');
            
            thumb.addEventListener('click', () => {
                showImage(index);
                if (window.innerWidth <= 768) {
                    clearInterval(imageSliderInterval);
                    startMobileSlider();
                }
            });
            thumbnailsList.appendChild(thumb);
        });

        document.querySelector('.gallery-nav.next').addEventListener('click', () => {
            showImage(currentImageIndex + 1);
            clearInterval(imageSliderInterval);
            startMobileSlider();
        });
        document.querySelector('.gallery-nav.prev').addEventListener('click', () => {
            showImage(currentImageIndex - 1);
            clearInterval(imageSliderInterval);
            startMobileSlider();
        });

        function startMobileSlider() {
            if (window.innerWidth <= 768) {
                imageSliderInterval = setInterval(() => {
                    showImage(currentImageIndex + 1);
                }, 4000); // තත්පර 4
            }
        }
        startMobileSlider();
    }

    // Color Logic
    const detailColors = document.getElementById('product-detail-colors');
    if (detailColors && colors) {
        detailColors.innerHTML = '';
        const colorArray = colors.split(',');
        if (colorArray.length > 0 && colorArray[0]) {
            colorArray.forEach((color, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot', color.trim());
                if (index === 0) dot.classList.add('active');
                detailColors.appendChild(dot);
            });
        } else {
            detailColors.parentElement.style.display = 'none';
        }
    }

    // --- New Quantity Selector Logic ---
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn?.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn?.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // --- Add to Cart Logic ---
    const addToCartBtn = document.querySelector('.add-to-cart-main-btn');
    addToCartBtn?.addEventListener('click', () => {
        const title = document.getElementById('product-detail-title').textContent;
        const price = document.getElementById('product-detail-price').textContent;
        const quantity = quantityInput.value;
        
        const selectedColorEl = document.querySelector('#product-detail-colors .dot.active');
        const colorClass = selectedColorEl ? Array.from(selectedColorEl.classList).find(c => c !== 'dot' && c !== 'active') : 'Not Selected';

        const selectedSizeEl = document.querySelector('.size-selector .size-btn.active');
        const size = selectedSizeEl ? selectedSizeEl.textContent : 'Not Selected';

        // Add click animation
        addToCartBtn.classList.add('clicked');
        // Remove the class after animation ends to allow re-triggering
        setTimeout(() => {
            addToCartBtn.classList.remove('clicked');
        }, 400); // Duration of the animation

        // Confirmation message
        alert(`"${title}" (Size: ${size}, Color: ${colorClass}, Qty: ${quantity}) has been added to your cart!`);

        // You can also log this to the console for debugging
        console.log('Added to cart:', { title, price, size, color: colorClass, quantity });
    });

    // --- Buy Now Button Logic ---
    const buyNowBtn = document.getElementById('buyNowBtn');
    buyNowBtn?.addEventListener('click', () => {
        alert("Redirecting to Checkout...");
        // Here you would typically redirect to a checkout page
        // window.location.href = 'checkout.html';
    });

    // --- Comments Logic ---
    const submitCommentBtn = document.getElementById('submitComment');
    const commentsList = document.getElementById('commentsList');
    const nameInput = document.getElementById('commentName');
    const textInput = document.getElementById('commentText');
    const photoInput = document.getElementById('commentPhoto');
    const photoPreview = document.getElementById('photoPreview');
    const thankYouOverlay = document.getElementById('thankYouOverlay');
    
    // Star Rating Logic
    const stars = document.querySelectorAll('.star-rating-input i');
    let currentRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.value);
            highlightStars(rating);
        });
    
        star.addEventListener('mouseout', () => {
            highlightStars(currentRating);
        });
    
        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.value);
            highlightStars(currentRating);
        });
    });
    
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('far'); // remove empty
                star.classList.add('fas'); // add solid
            } else {
                star.classList.remove('fas'); // remove solid
                star.classList.add('far'); // add empty
            }
        });
    }
    
    // Photo Preview Logic
    let photoDataUrl = null;
    photoInput?.addEventListener('change', () => {
        const file = photoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoDataUrl = e.target.result;
                photoPreview.src = photoDataUrl;
                photoPreview.classList.remove('photo-preview-hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    submitCommentBtn?.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text) {
            alert("Please enter your name and comment.");
            return;
        }
        if (currentRating === 0) {
            alert("Please select a star rating.");
            return;
        }

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('single-comment');

            // Create rating stars HTML
            let ratingHTML = '';
            for (let i = 0; i < 5; i++) {
                ratingHTML += i < currentRating ? '★' : '☆';
            }

            // Create image HTML if exists
            const imageHTML = photoDataUrl ? `<img src="${photoDataUrl}" alt="Comment photo" class="comment-photo">` : '';

            commentDiv.innerHTML = `
                <div class="comment-header"><strong>${name}</strong><span>Just now</span></div>
                <div class="comment-rating">${ratingHTML}</div>
                <p>${text}</p>
                ${imageHTML}
            `;
            commentsList.prepend(commentDiv);
            
            // Show Thank You animation
            thankYouOverlay.classList.add('show');
            setTimeout(() => {
                thankYouOverlay.classList.remove('show');
            }, 2500); // Hide after 2.5 seconds

            // Clear inputs
            nameInput.value = '';
            textInput.value = '';
            photoInput.value = ''; // Clear file input
            photoDataUrl = null;
            photoPreview.src = '';
            photoPreview.classList.add('photo-preview-hidden');
            currentRating = 0;
            highlightStars(0);
    });
});










































// Size Selection Logic
function selectSize(element) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}