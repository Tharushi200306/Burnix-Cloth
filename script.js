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

// සෑම තත්පර 4කට වරක් රූපය ස්වයංක්‍රීයව මාරු වේ (4000ms = 4s)
setInterval(showSlides, 4000);


// --- 2. Search Overlay Toggle ---
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');

if(searchBtn && searchOverlay) {
    searchBtn.onclick = function() {
        searchOverlay.classList.add('open');
        searchOverlay.style.width = "100%";
        searchOverlay.style.opacity = "1";
        searchOverlay.style.visibility = "visible";
    };
}

if(closeSearch && searchOverlay) {
    closeSearch.onclick = function() {
        searchOverlay.classList.remove('open');
        searchOverlay.style.width = "0";
        searchOverlay.style.opacity = "0";
        searchOverlay.style.visibility = "hidden";
    };
}

// --- 3. Side Cart Drawer Toggle (පැත්තෙන් එන කරත්තය) ---
const cartBtn = document.getElementById('cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const closeCart = document.getElementById('close-cart');

// Cart එක විවෘත කිරීමට
if (cartBtn && cartDrawer) {
    cartBtn.onclick = () => {
        cartDrawer.classList.add('open');
    };
}

// Cart එක වැසීමට
if (closeCart) {
    closeCart.onclick = () => {
        cartDrawer.classList.remove('open');
    };
}

// --- 4. අමතර පහසුව: Escape Key එක එබූ විට Overlay වැසීමට ---
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        if (searchOverlay) searchOverlay.classList.remove('open');
        if (cartDrawer) cartDrawer.classList.remove('open');
    }
});

// bar-fisht//
const ticker = document.querySelector('.ticker-content');

ticker.addEventListener('mouseover', () => {
    ticker.style.animationPlayState = 'paused';
});

ticker.addEventListener('mouseout', () => {
    ticker.style.animationPlayState = 'running';
});

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

function toggleMute() {
    const video = document.getElementById('mensVideo');
    video.muted = !video.muted;
}
const reviews = [
    { text: "Highly recommended", name: "Ruchika subasinghe" },
    { text: "It's nice ❤️", name: "Spiretech Software Solutions" }
];

let testiIndex = 0;
let autoSlideInterval;

// Slide එක මාරු කරන ප්‍රධාන function එක
function showTestimonial(n) {
    const testiSlides = document.querySelectorAll('.testi-slide');
    
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
    autoSlideInterval = setInterval(() => {
        showTestimonial(testiIndex + 1);
    }, 4000); // තත්පර 4කට වරක් මාරු වේ
}

// Timer එක Reset කිරීම (Buttons එබූ විට)
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Page එක Load වෙද්දීම Timer එක පටන් ගන්න
startAutoSlide();