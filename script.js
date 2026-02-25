/**
 * B-Classy Lifestyle - All Functionalities
 * (Slider, Search, and Cart)
 */

// --- 1. Automatic Background Image Slider ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    if (slides.length > 0) {
        // දැනට ඇති සියලුම slide වලින් 'active' class එක ඉවත් කරන්න
        slides.forEach(s => s.classList.remove('active'));
        
        // ඊළඟ slide එකේ අංකය ගණනය කරන්න
        slideIndex = (slideIndex + 1) % slides.length;
        
        // නව slide එක පෙන්වන්න
        slides[slideIndex].classList.add('active');
    }
}

// --- NEW: Category Navigation & Filtering Logic ---

// 1. Function to navigate to shop page with category filter
function navigateToCategory(category) {
    // Redirect to shop.html with a query parameter
    window.location.href = `shop.html?category=${encodeURIComponent(category)}`;
}

// 2. Function to view specific item details from small cards (New)
function viewItemDetail(title, price, imageSrc) {
    window.location.href = `product-detail.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&images=${encodeURIComponent(imageSrc)}`;
}

// 2. Logic to filter products on the Shop Page based on URL parameter
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');
    
    // Only run this if we are on the shop page and have a filter
    if (categoryFilter && document.querySelector('.shop-page-grid')) {
        // Update the header title
        const sectionHeader = document.querySelector('.section-header h2');
        if (sectionHeader) sectionHeader.textContent = `${categoryFilter} Collection`;
        
        const products = document.querySelectorAll('.shop-page-grid .product-card');
        
        products.forEach(card => {
            const title = card.querySelector('.title').textContent.toLowerCase();
            // Check if product title contains the category name (e.g., "Necklace")
            if (title.includes(categoryFilter.toLowerCase())) {
                card.style.display = 'block';
                card.style.animation = 'cardFadeInUp 0.5s ease forwards'; // Re-trigger animation
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// සෑම තත්පර 4කට වරක් රූපය ස්වයංක්‍රීයව මාරු වේ (4000ms = 4s)
setInterval(showSlides, 4000);

// bar-fisht//
const ticker = document.querySelector('.ticker-content');

if (ticker) {
    ticker.addEventListener('mouseover', () => {
        ticker.style.animationPlayState = 'paused';
    });
    
    ticker.addEventListener('mouseout', () => {
        ticker.style.animationPlayState = 'running';
    });
}

document.querySelectorAll('.hover-img').forEach(img => {
    // මවුස් එක රූපය මතට ගෙන ආ විට
    img.addEventListener('mouseover', function() {
        this.style.opacity = '0'; // ස්වල්පයකට අඳුරු කර
        setTimeout(() => {
            this.src = this.getAttribute('data-hover'); // දෙවැනි රූපය දමන්න
            this.style.opacity = '1';
        }, 200);
    });

    // මවුස් එක ඉවතට ගත් විට
    img.addEventListener('mouseout', function() {
        this.style.opacity = '0';
        setTimeout(() => {
            this.src = this.getAttribute('data-original'); // මුල් රූපය දමන්න
            this.style.opacity = '1';
        }, 200);
    });
});
document.querySelectorAll('.small-card').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.querySelector('img').style.transform = 'scale(1.1)';
    });
    card.addEventListener('touchend', function() {
        this.querySelector('img').style.transform = 'scale(1.0)';
    });
});

const reviews = [
    { text: "Highly recommended", name: "Ruchika subasinghe" },
    { text: "It's nice ❤️", name: "Spiretech Software Solutions" }
];

let testiIndex = 0;
let autoSlideInterval;

// Slide එක මාරු කරන ප්‍රධාන function එක
function showTestimonial(n) {
    const testiSlides = document.querySelectorAll('.testi-slide');
    if (testiSlides.length === 0) {
        return; // Testimonials නැති පිටු වලදී error එකක් ඒම නැවැත්වීම
    }
    
    // සියලුම slides වලින් active class එක අයින් කරන්න
    testiSlides.forEach(slide => slide.classList.remove('active'));
    
    // Index එක හරි විදිහට ගණනය කරන්න
    testiIndex = (n + testiSlides.length) % testiSlides.length;
    
    // අදාළ slide එකට active class එක ලබා දෙන්න
    testiSlides[testiIndex].classList.add('active');
}

// Button එක එබුවහම ක්‍රියාත්මක වන function එක
function moveSlide(n) {
    showTestimonial(testiIndex + n);
    resetAutoSlide(); // Button එක එබුවහම timer එක මුල ඉඳන් පටන් ගන්නවා
}

// Auto මාරු වෙන්න timer එකක් පටන් ගැනීම
function startAutoSlide() {
    if (document.querySelectorAll('.testi-slide').length > 0) {
        autoSlideInterval = setInterval(() => {
            showTestimonial(testiIndex + 1);
        }, 4000); // තත්පර 4කට වරක් මාරු වේ
    }
}

// Timer එක Reset කිරීම (Buttons එබූ විට)
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Page එක Load වෙද්දීම Timer එක පටන් ගන්න
startAutoSlide();

// --- NEW: Navbar scroll effect ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) { // After scrolling 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// --- NEW & IMPROVED: Scroll animations for elements ---
const animatedElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
// Hide preloader after page load
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.6s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
});

// Mock User Database (in a real app, this comes from a server)
// පරිශීලක දත්ත මතක තබා ගැනීමට localStorage භාවිතා කරයි
const users = JSON.parse(localStorage.getItem('burnixUsers')) || [
    // Test කිරීම සඳහා නියැදි පරිශීලකයෙක්
    { name: 'Test User', email: 'test@example.com', password: 'password123' },
    // Admin Account (මෙන්න Admin Account එක)
    { name: 'Admin', email: 'tharunimmi24@gmail.com', password: '200066', isAdmin: true }
];

function saveUsers() {
    // නව පරිශීලකයන් localStorage වෙත save කරයි
    localStorage.setItem('burnixUsers', JSON.stringify(users));
}

// --- NEW: Product Database & Rendering Logic ---
const initialProducts = [
    { id: 1, title: "New Stylish T-Shirt", price: "Rs. 2,500.00", image: "images/your-product-front.jpg", category: "Men", isNew: true },
    { id: 2, title: "Minimalist Black Pendant Necklace", price: "Rs. 1,750.00", image: "https://via.placeholder.com/400x500?text=Product+2+Front", category: "Jewelry" },
    { id: 3, title: "Silver Chain Bracelet", price: "Rs. 3,200.00", image: "https://via.placeholder.com/400x500?text=Product+3+Front", category: "Jewelry" },
    { id: 4, title: "Gold Plated Ring", price: "Rs. 1,500.00", image: "https://via.placeholder.com/400x500?text=Product+4+Front", category: "Jewelry" },
    { id: 5, title: "Classic Watch", price: "Rs. 5,500.00", image: "https://via.placeholder.com/400x500?text=Product+5+Front", category: "Men" },
    { id: 6, title: "Stylish Blouse", price: "Rs. 3,500.00", image: "images.jpg", category: "Women", isNew: true },
    { id: 7, title: "Elegant Dress", price: "Rs. 4,750.00", image: "download.jpg", category: "Women" },
    { id: 8, title: "Casual Skirt", price: "Rs. 2,200.00", image: "download (2).jpg", category: "Women" },
    { id: 9, title: "Handbag", price: "Rs. 3,000.00", image: "images.jpg", category: "Women" },
    { id: 10, title: "High Heels", price: "Rs. 4,500.00", image: "download (2).jpg", category: "Women" }
];

// Initialize Products in LocalStorage if empty
if (!localStorage.getItem('burnixProducts')) {
    localStorage.setItem('burnixProducts', JSON.stringify(initialProducts));
}

function renderProducts(containerId, filterCategory = 'All') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = JSON.parse(localStorage.getItem('burnixProducts')) || [];
    container.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        // Filter logic
        if (filterCategory !== 'All' && product.category !== filterCategory && filterCategory !== 'BestSeller') {
            return;
        }
        // For index page (Best Sellers), just show first 8 items for now
        if (filterCategory === 'BestSeller' && products.indexOf(product) > 7) return;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" class="img-front">
                <img src="${product.image}" class="img-back">
                ${product.isNew ? '<span class="badge">NEW</span>' : ''}
                <div class="add-to-cart-overlay">
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <p class="title">${product.title}</p>
                <p class="price">${product.price}</p>
                <p class="installment-text">
                    or 3 X <span>Rs ${(parseFloat(product.price.replace(/[^0-9.]/g, ''))/3).toFixed(2)}</span> with 
                    <span class="mintpay">mintpay</span> <span class="koko">KOKO</span>
                </p>
                <div class="color-options">
                    <span class="dot black active"></span><span class="dot silver"></span><span class="dot gold"></span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Re-apply edits after rendering products
    applyEdits();
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            // තිරයේ පළල 768px ට අඩු නම් පමණක් (Mobile)
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                
                // දැනට විවෘතව ඇති වෙනත් dropdown වසා දමන්න
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });

                // ක්ලික් කළ එක විවෘත කිරීම හෝ වැසීම
                dropdown.classList.toggle('active');
            }
        });
    });

    // 1. Handle Submenu Toggles (Mens/Womens)
    const submenuTitles = document.querySelectorAll('.submenu-title');
    submenuTitles.forEach(title => {
        title.addEventListener('click', () => {
            const parent = title.parentElement;
            parent.classList.toggle('active');
        });
    });
    
    // 2. Cleaned up Search and Cart Logic
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.querySelector('#search-overlay .close-btn'); // Close button for search
    const userBtn = document.getElementById('user-btn');
    const loginOverlay = document.getElementById('login-overlay');
    const closeLoginBtn = document.querySelector('#login-overlay .close-btn');
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.querySelector('#cart-drawer .close-btn'); // Close button for cart

    // --- නවීන Login/Register පද්ධතිය ---
    const loginFormEl = document.getElementById('loginForm');
    const registerFormEl = document.getElementById('registerForm');
    const userBtnEl = document.getElementById('user-btn');

    // Form එකේ පණිවිඩ පෙන්වීමේ function එක
    function showAuthMessage(form, message, isError = false) {
        const messageEl = form.querySelector('.auth-message');
        if (messageEl) {
            messageEl.textContent = message;
            messageEl.className = 'auth-message'; // පන්ති නාම නැවත සකසන්න
            messageEl.classList.add(isError ? 'error' : 'success');
        }
    }

    // Login වූ පසු navigation bar එක update කිරීම
    function updateNavOnLogin(user) {
        const initial = user.name.charAt(0).toUpperCase();
        userBtnEl.textContent = initial;
        userBtnEl.style.background = user.isAdmin ? '#d63031' : '#d4af37'; // Admin නම් රතු පාට, නැත්නම් රන් පාට
        userBtnEl.style.color = 'black';
        userBtnEl.style.borderRadius = '50%';
        userBtnEl.style.width = '30px';
        userBtnEl.style.height = '30px';
        userBtnEl.style.display = 'inline-flex';
        userBtnEl.style.alignItems = 'center';
        userBtnEl.style.justifyContent = 'center';
        userBtnEl.style.fontWeight = 'bold';
        userBtnEl.dataset.loggedIn = 'true';
        userBtnEl.title = `Logged in as ${user.name}. Click to logout.`;

        // --- NEW: Add Admin Panel Link if Admin ---
        if (user.isAdmin) {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && !document.getElementById('admin-nav-link')) {
                const li = document.createElement('li');
                li.id = 'admin-nav-link';
                li.innerHTML = '<a href="admin.html" style="color: #d63031; font-weight: bold;">ADMIN PANEL</a>';
                navLinks.appendChild(li);
            }
            
            // Also for mobile nav
            const mobileNav = document.querySelector('.mobile-nav-links');
            if (mobileNav && !document.getElementById('mobile-admin-link')) {
                const li = document.createElement('li');
                li.id = 'mobile-admin-link';
                li.innerHTML = '<a href="admin.html" style="color: #d63031;">ADMIN PANEL</a>';
                mobileNav.appendChild(li);
            }
        }
    }

    // Logout වූ පසු navigation bar එක update කිරීම
    function updateNavOnLogout() {
        userBtnEl.textContent = '👤';
        userBtnEl.style.background = 'none';
        userBtnEl.style.color = 'white';
        userBtnEl.style.width = 'auto';
        userBtnEl.style.height = 'auto';
        userBtnEl.dataset.loggedIn = 'false';
        userBtnEl.title = 'Login / Register';

        // --- NEW: Remove Admin Links ---
        const adminLink = document.getElementById('admin-nav-link');
        if (adminLink) adminLink.remove();
        
        const mobileAdminLink = document.getElementById('mobile-admin-link');
        if (mobileAdminLink) mobileAdminLink.remove();
    }

    // Login ක්‍රියාවලිය
    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            showAuthMessage(loginFormEl, 'Login successful! Welcome back.', false);
            localStorage.setItem('burnixLoggedInUser', JSON.stringify(user));
            updateNavOnLogin(user);
            setTimeout(() => {
                loginOverlay.classList.remove('open');
                loginFormEl.reset();
                loginFormEl.querySelector('.auth-message').className = 'auth-message';
            }, 1500);
        } else {
            showAuthMessage(loginFormEl, 'Invalid email or password. Please try again.', true);
        }
    }

    // Register ක්‍රියාවලිය
    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        if (users.some(u => u.email === email)) {
            showAuthMessage(registerFormEl, 'An account with this email already exists.', true);
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        saveUsers();

        showAuthMessage(registerFormEl, 'Registration successful! You are now logged in.', false);
        localStorage.setItem('burnixLoggedInUser', JSON.stringify(newUser));
        updateNavOnLogin(newUser);

        setTimeout(() => {
            loginOverlay.classList.remove('open');
            registerFormEl.reset();
            registerFormEl.querySelector('.auth-message').className = 'auth-message';
            document.querySelector('.register-form').classList.remove('active');
            document.querySelector('.login-form').classList.add('active');
        }, 2000);
    }

    // Logout ක්‍රියාවලිය
    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('burnixLoggedInUser');
            updateNavOnLogout();
        }
    }

    loginFormEl?.addEventListener('submit', handleLogin);
    registerFormEl?.addEventListener('submit', handleRegister);

    // --- CART FUNCTIONALITY START ---
    let cart = JSON.parse(localStorage.getItem('burnixCart')) || [];

    function updateCartTotal() {
        let total = 0;
        let selectedItemsCount = 0;
        let totalItemsCount = cart.length; // Total items for badge
        const checkboxes = document.querySelectorAll('.cart-item-checkbox:checked');
        checkboxes.forEach(checkbox => {
            const index = parseInt(checkbox.dataset.index, 10);
            const item = cart[index];
            if (item) {
                // Ensure price is a string, remove commas, and parse as Float
                let priceString = String(item.price).replace(/,/g, '');
                priceString = priceString.replace(/Rs\.?\s*/, ''); // Remove "Rs." and spaces

                let priceVal = parseFloat(priceString);

                if (isNaN(priceVal)) {
                    console.error(`Invalid price value encountered: ${item.price}.  Setting to 0.`);
                    priceVal = 0;  // Default to zero if parsing fails
                }

                selectedItemsCount++;
                total += priceVal;
            }
        });


        const totalEl = document.getElementById('cart-total');
        if (totalEl) {
            total = Math.max(0, total); // Ensure total is not negative
            // Daraz වැනි වෙබ් අඩවි වල මිල ගණන් පෙන්වන නවීන ක්‍රමයට සකස් කිරීම.
            // දශමස්ථාන අවශ්‍ය නම් පමණක් පෙන්වයි. (උදා: Rs. 2,500 or Rs. 2,500.50)
            const formattedTotal = total.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });
            
         // අගය වෙනස් වන විට පෙන්වන Animation එක සඳහා
            // Check if the content is actually changing to avoid re-triggering animation
            if (totalEl.textContent !== `Rs. ${formattedTotal}`) {
                totalEl.textContent = `Rs. ${formattedTotal}`;
                totalEl.classList.add('total-updated');
                totalEl.addEventListener('animationend', () => {
                    totalEl.classList.remove('total-updated');
                }, { once: true });
            }
        }

        // --- NEW: Update Cart Badge Count ---
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            let badge = cartBtn.querySelector('.cart-count-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.classList.add('cart-count-badge');
                cartBtn.appendChild(badge);
            }
            badge.textContent = totalItemsCount;
            badge.style.display = totalItemsCount > 0 ? 'flex' : 'none'; /* Flex භාවිතා කළේ අංකය මැදට ගැනීමටයි */
            
            // Animation එක නැවත පණ ගැන්වීමට (Re-trigger animation)
            badge.classList.remove('pop-anim');
            void badge.offsetWidth; // Trigger reflow
            badge.classList.add('pop-anim');
        }
    }

    function addCartEventListeners() {
        document.querySelectorAll('.cart-item-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', updateCartTotal);
        });
    }

    function updateCartUI() {
        const cartContent = document.querySelector('.cart-content');
        if (!cartContent) return;

        if (cart.length === 0) {
            cartContent.innerHTML = `
                <p>Your cart is empty</p>
                <button class="shop-btn" onclick="document.getElementById('cart-drawer').classList.remove('open')">CONTINUE SHOPPING</button>
            `;
        } else {
            let itemsHTML = '<div class="cart-items-scroll" style="max-height: 60vh; overflow-y: auto;">';
            
            cart.forEach((item, index) => {
                itemsHTML += `
                 <div class="cart-item" style="display: flex; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <input type="checkbox" class="cart-item-checkbox" data-index="${index}" checked style="margin-right: 10px; transform: scale(1.2); cursor: pointer;">
                    <a href="product-detail.html?title=${encodeURIComponent(item.title)}&price=${encodeURIComponent(item.price)}&images=${encodeURIComponent(item.image)}" style="text-decoration: none; color: inherit; display: flex; align-items: center; flex: 1;">
                        <img src="${item.image}" style="width: 60px; height: 75px; object-fit: cover; border-radius: 5px; margin-right: 10px;">
                        <div style="flex: 1; text-align: left;">
                            <h4 style="margin: 0; font-size: 14px; color: #333;">${item.title}</h4>
                            <p style="margin: 5px 0 0; font-size: 13px; color: #777;">${item.price}</p>
                        </div>
                    </a>
                    <button onclick="removeItemFromCart(${index})" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">&times;</button>
                </div>`;
            });
            
            itemsHTML += '</div>';
            const footerHTML = `
            <div class="cart-footer" style="margin-top: 15px; border-top: 2px solid #333; padding-top: 15px;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 15px; color: #000;">
                    <span>Selected Total:</span>
                    <span id="cart-total">Rs. 0.00</span>
                </div>
                <button class="buy-now-btn-cart" id="buyNowSelected" style="width: 100%;">BUY NOW</button>
            </div>
            `;
            cartContent.innerHTML = itemsHTML + footerHTML;

            addCartEventListeners();
            updateCartTotal(); // මුලින්ම total එක ගණනය කිරීම
        }
        localStorage.setItem('burnixCart', JSON.stringify(cart));

        const buyNowSelectedBtn = document.getElementById('buyNowSelected');
        buyNowSelectedBtn?.addEventListener('click', () => {
            const selectedItems = cart.filter((item, index) => {
                return document.querySelector(`.cart-item-checkbox[data-index="${index}"]`)?.checked;
            });

            if (selectedItems.length === 0) {
                alert('කරුණාකර මිලදී ගැනීමට අවශ්‍ය භාණ්ඩ තෝරන්න. (Please select items to buy.)');
                return;
            }

            sessionStorage.setItem('burnixCheckoutItems', JSON.stringify(selectedItems));
            window.location.href = 'checkout.html'; 
        });
    }

    window.removeItemFromCart = function(index) {
        cart.splice(index, 1);
        updateCartUI(); // item එකක් remove කළ පසු මුළු cart එකම නැවත render කිරීම
    };
    
    // Initial Load
    updateCartUI();
    // --- CART FUNCTIONALITY END ---

    // --- NEW: Listen for Cart Updates from Product Detail Page ---
    window.addEventListener('cartUpdated', () => {
        cart = JSON.parse(localStorage.getItem('burnixCart')) || [];
        updateCartUI();
        // Open cart drawer automatically to show the user
        const cartDrawer = document.getElementById('cart-drawer');
        if (cartDrawer) cartDrawer.classList.add('open');
    });

    // Open Search
    searchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.add('open');
    });

    // Close Search
    closeSearchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.remove('open');
    });

    // Open Login
    userBtnEl?.addEventListener('click', () => {
        const isLoggedIn = userBtnEl.dataset.loggedIn === 'true';
        if (isLoggedIn) {
            // Login වී ඇත්නම් Profile Page එකට යන්න
            window.location.href = 'profile.html';
        } else {
            loginOverlay?.classList.add('open'); // නැත්නම්, login overlay එක open කරන්න
        }
    });

    // Close Login
    closeLoginBtn?.addEventListener('click', () => {
        loginOverlay?.classList.remove('open');
    });

    // Open Cart
    cartBtn?.addEventListener('click', () => {
        cartDrawer?.classList.add('open');
    });

    // Close Cart
    closeCartBtn?.addEventListener('click', () => {
        cartDrawer?.classList.remove('open');
    });

    // Escape key to close overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if (searchOverlay?.classList.contains('open')) {
                searchOverlay.classList.remove('open');
            }
            if (cartDrawer?.classList.contains('open')) {
                cartDrawer.classList.remove('open');
            }
            if (loginOverlay?.classList.contains('open')) {
                loginOverlay.classList.remove('open');
            }
        }
    });

    // --- NEW: SEARCH BAR FUNCTIONALITY (Real-time Filter) ---
    const searchInput = document.querySelector('#search-overlay input');
    
    // 1. Create Results Container dynamically inside the overlay
    let searchResultsContainer = document.querySelector('.search-results-container');
    if (!searchResultsContainer && document.querySelector('.overlay-content')) {
        searchResultsContainer = document.createElement('div');
        searchResultsContainer.className = 'search-results-container';
        document.querySelector('.overlay-content').appendChild(searchResultsContainer);
    }

    // 2. Product Database (Mock Data - ඔබගේ වෙබ් අඩවියේ ඇති භාණ්ඩ මෙහි ඇතුළත් කර ඇත)
    const productsDB = [
        { title: "New Stylish T-Shirt", price: "Rs. 2,500.00", image: "images/your-product-front.jpg" },
        { title: "Minimalist Black Pendant Necklace", price: "Rs. 1,750.00", image: "https://via.placeholder.com/400x500?text=Product+2+Front" },
        { title: "Silver Chain Bracelet", price: "Rs. 3,200.00", image: "https://via.placeholder.com/400x500?text=Product+3+Front" },
        { title: "Gold Plated Ring", price: "Rs. 1,500.00", image: "https://via.placeholder.com/400x500?text=Product+4+Front" },
        { title: "Classic Watch", price: "Rs. 5,500.00", image: "https://via.placeholder.com/400x500?text=Product+5+Front" },
        { title: "Stylish Blouse", price: "Rs. 3,500.00", image: "https://via.placeholder.com/400x500?text=Womens+Product+1" },
        { title: "Elegant Dress", price: "Rs. 4,750.00", image: "https://via.placeholder.com/400x500?text=Womens+Product+2" },
        { title: "Casual Skirt", price: "Rs. 2,200.00", image: "https://via.placeholder.com/400x500?text=Womens+Product+3" },
        { title: "Handbag", price: "Rs. 3,000.00", image: "https://via.placeholder.com/400x500?text=Womens+Product+4" },
        { title: "High Heels", price: "Rs. 4,500.00", image: "https://via.placeholder.com/400x500?text=Womens+Product+5" }
    ];

    // 3. Real-time Filtering Logic
    searchInput?.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = ''; // Clear previous results

        if (searchTerm.length > 0) {
            // Filter products based on title
            const filteredProducts = productsDB.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );

            if (filteredProducts.length > 0) {
                // Render Results
                filteredProducts.forEach(product => {
                    const resultItem = document.createElement('a');
                    // Link to product detail page with parameters
                    resultItem.href = `product-detail.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&images=${encodeURIComponent(product.image)}`;
                    resultItem.className = 'search-result-item';
                    
                    resultItem.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" class="search-result-img">
                        <div class="search-result-title">${product.title}</div>
                        <div class="search-result-price">${product.price}</div>
                    `;
                    searchResultsContainer.appendChild(resultItem);
                });
            } else {
                searchResultsContainer.innerHTML = '<div class="no-results">No products found</div>';
            }
        }
    });

    // Clear search when closed
    closeSearchBtn?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (searchResultsContainer) searchResultsContainer.innerHTML = '';
    });

    // --- NEW: Login/Register Switch Logic ---
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const goToRegisterBtn = document.getElementById('go-to-register');
    const goToLoginBtn = document.getElementById('go-to-login');

    goToRegisterBtn?.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    goToLoginBtn?.addEventListener('click', () => {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // --- පිටුව load වන විට login තත්ත්වය පරීක්ෂා කිරීම ---
    function checkLoginStatus() {
        const loggedInUser = JSON.parse(localStorage.getItem('burnixLoggedInUser'));
        if (loggedInUser) {
            updateNavOnLogin(loggedInUser);
        } else {
            updateNavOnLogout();
        }
    }

    // 3. Handle Product Card Clicks to go to Detail Page
    // Ensuring click listeners are applied on all pages like Mens, Womens, etc.
    console.log("Applying product click listeners across all pages.");

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Click කළ හැකි ප්‍රදේශය වන්නේ product image එක ඇති කොටසයි. "Add to Cart" button එකද එහි අඩංගු වේ.
        const clickableArea = card.querySelector('.product-img'); 
        const addToCartBtn = card.querySelector('.add-to-cart-btn');

        // --- Add to Cart Button Logic ---
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent redirect to detail page
                e.preventDefault();

                const titleEl = card.querySelector('.title');
                const priceEl = card.querySelector('.price');
                const imgFrontEl = card.querySelector('.img-front');

                if (titleEl && priceEl && imgFrontEl) {
                    const item = {
                        title: titleEl.textContent.trim(),
                        price: priceEl.textContent.trim(),
                        image: imgFrontEl.src
                    };
                    cart.push(item);
                    updateCartUI();
                    cartDrawer?.classList.add('open'); // Open the cart drawer
                }
            });
        }

        if (clickableArea) {
            clickableArea.style.cursor = 'pointer'; // Click කළ හැකි බව පෙන්වීමට cursor එක වෙනස් කිරීම
            clickableArea.addEventListener('click', (e) => {
                
                e.preventDefault(); // default browser ක්‍රියාවන් නැවැත්වීම

                // 'card' එක ඇතුළෙන් product details ටික ලබාගැනීම
                const titleEl = card.querySelector('.title');
                const priceEl = card.querySelector('.price');
                const imgFrontEl = card.querySelector('.img-front');
                const imgBackEl = card.querySelector('.img-back');
                const colorDots = card.querySelectorAll('.color-options .dot');

                if (!titleEl || !priceEl || !imgFrontEl) {
                    console.error("Could not find product details in the card.", card);
                    return;
                }

                const title = titleEl.textContent.trim();
                const price = priceEl.textContent.trim();
                
                // Back image එක නැති වුණොත් error එකක් එන එක වළක්වන්න check එකක් දැම්මා
                const backImgSrc = imgBackEl ? imgBackEl.src : '';
                const imageUrls = [imgFrontEl.src, backImgSrc].filter(Boolean); // Front සහ Back images එකතු කරගැනීම
                
                const availableColors = Array.from(colorDots).map(dot => {
                    const colorClass = Array.from(dot.classList).find(c => c !== 'dot' && c !== 'active');
                    return colorClass;
                }).filter(Boolean);

                // query parameters සමඟ URL එක සකස් කරගැනීම (පින්තූර කිහිපයක් යැවීම)
                const url = `product-detail.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&images=${encodeURIComponent(imageUrls.join(','))}&colors=${availableColors.join(',')}`;

                // අලුත් product detail page එකට යොමු කිරීම
                window.location.href = url;
            });
        }
    });

    // --- NEW: Back to Top Button Logic ---
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- NEW: Highlight Active Menu Link ---
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // පිටුව load වෙද්දී login status එක check කරන්න
    checkLoginStatus();

    // --- Render Products based on Page ---
    renderProducts('shop-grid-all', 'All');       // For shop.html
    renderProducts('shop-grid-mens', 'Men');      // For mens.html
    renderProducts('shop-grid-womens', 'Women');  // For womens.html
    renderProducts('home-best-sellers', 'BestSeller'); // For index.html

    // Initialize Admin Edit Mode
    initAdminEditMode();

    // --- PROFILE PAGE LOGIC ---
    if (window.location.pathname.includes('profile.html')) {
        const profileForm = document.getElementById('profile-form');
        const logoutBtn = document.getElementById('logoutBtn');
        const user = JSON.parse(localStorage.getItem('burnixLoggedInUser'));

        if (!user) {
            window.location.href = 'index.html'; // Log වී නැත්නම් Home එකට යවන්න
        } else {
            // දත්ත පෙන්වන්න
            const pName = document.getElementById('profileName');
            const pEmail = document.getElementById('profileEmail');
            const pInit = document.getElementById('profile-initial');
            
            if (pName) pName.value = user.name;
            if (pEmail) pEmail.value = user.email;
            if (pInit) pInit.textContent = user.name.charAt(0).toUpperCase();

            // Save Changes (ගිණුම වෙනස් කිරීම)
            if (profileForm) {
                profileForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const newName = document.getElementById('profileName').value;
                    const newPass = document.getElementById('profilePassword').value;

                    // දත්ත යාවත්කාලීන කිරීම
                    user.name = newName;
                    if (newPass) user.password = newPass;

                    // ප්‍රධාන Users ලැයිස්තුව update කිරීම
                    const userIndex = users.findIndex(u => u.email === user.email);
                    if (userIndex !== -1) {
                        users[userIndex] = user;
                        saveUsers(); // LocalStorage update
                        localStorage.setItem('burnixLoggedInUser', JSON.stringify(user)); // Session update
                        alert('Profile updated successfully!');
                    }
                });
            }

            // Logout Button Logic
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    if (confirm('Are you sure you want to logout?')) {
                        localStorage.removeItem('burnixLoggedInUser');
                        updateNavOnLogout();
                        window.location.href = 'index.html';
                    }
                });
            }
        }
    }
});

// Function for Video Muting (as referenced in your HTML)
function toggleMute(event, videoId, btn) {
    event.preventDefault(); // නව සබැඳියට යාම නවත්වන්න
    event.stopPropagation(); // වෙනත් click events ක්‍රියාත්මක වීම නවත්වන්න

    const video = document.getElementById(videoId);
    
    if (video.muted) {
        video.muted = false;
        btn.innerText = '🔊';
    } else {
        video.muted = true;
        btn.innerText = '🔇';
    }
}

// --- ADMIN CMS: EDIT ANY PAGE FUNCTIONALITY ---

function initAdminEditMode() {
    // Check if logged in user is Admin
    const user = JSON.parse(localStorage.getItem('burnixLoggedInUser'));
    if (!user || !user.isAdmin) return;

    // Create Toggle Button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✏️ Edit Site';
    editBtn.id = 'admin-edit-toggle';
    document.body.appendChild(editBtn);

    editBtn.addEventListener('click', toggleEditMode);
    
    // Apply saved edits on load
    applyEdits();
}

let isEditMode = false;

function toggleEditMode() {
    isEditMode = !isEditMode;
    const btn = document.getElementById('admin-edit-toggle');
    
    if (isEditMode) {
        btn.innerHTML = '💾 Save Changes';
        btn.classList.add('active');
        document.body.classList.add('edit-mode-active');
        enableEditing();
    } else {
        btn.innerHTML = '✏️ Edit Site';
        btn.classList.remove('active');
        document.body.classList.remove('edit-mode-active');
        disableEditing();
        alert('Changes Saved Successfully!');
    }
}

function enableEditing() {
    // Make text editable
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, a, button, label, .title, .price');
    textElements.forEach(el => {
        el.contentEditable = "true";
        el.classList.add('editable-text');
        
        // Save on blur (when clicking away)
        el.addEventListener('blur', function() {
            saveEdit(this, 'text');
        });
    });

    // Make images editable
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.classList.add('editable-img');
        img.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation(); // Stop other clicks
            const newSrc = prompt("Enter new Image URL:", img.src);
            if (newSrc) {
                img.src = newSrc;
                saveEdit(img, 'image');
            }
        };
    });
}

function disableEditing() {
    const textElements = document.querySelectorAll('.editable-text');
    textElements.forEach(el => {
        el.contentEditable = "false";
        el.classList.remove('editable-text');
    });

    const images = document.querySelectorAll('.editable-img');
    images.forEach(img => {
        img.classList.remove('editable-img');
        img.onclick = null; // Remove click handler
    });
}

// Helper to generate a unique selector for an element
function getUniqueSelector(el) {
    if (el.id) return '#' + el.id;
    if (el === document.body) return 'body';
    let index = 1;
    let sibling = el;
    while ((sibling = sibling.previousElementSibling)) {
        if (sibling.tagName === el.tagName) index++;
    }
    return getUniqueSelector(el.parentElement) + ' > ' + el.tagName + ':nth-of-type(' + index + ')';
}

function saveEdit(element, type) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const selector = getUniqueSelector(element);
    const content = type === 'image' ? element.src : element.innerHTML;
    
    let allEdits = JSON.parse(localStorage.getItem('burnixSiteEdits')) || {};
    if (!allEdits[page]) allEdits[page] = {};
    
    allEdits[page][selector] = { type, content };
    localStorage.setItem('burnixSiteEdits', JSON.stringify(allEdits));
}

function applyEdits() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const allEdits = JSON.parse(localStorage.getItem('burnixSiteEdits')) || {};
    const pageEdits = allEdits[page];
    
    if (pageEdits) {
        for (const [selector, data] of Object.entries(pageEdits)) {
            const el = document.querySelector(selector);
            if (el) {
                if (data.type === 'image') {
                    el.src = data.content;
                } else {
                    el.innerHTML = data.content;
                }
            }
        }
    }
}
