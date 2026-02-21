* {
   margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
}
body { background: linear-gradient(135deg, #0f172a, #020617);  color: white;overflow-x: hidden;line-height: 1.6;
}


/* Dropdown Styles */
.dropdown-content {display: none;position: absolute;background-color: white;min-width: 150px;box-shadow: 0px 8px 16px rgba(0,0,0,0.1);list-style: none;top: 100%;left: 0;
}

.dropdown-content li a {padding: 10px;display: block;font-weight: normal;
}

.dropdown:hover .dropdown-content {
    display: block;
}

/* Slider Styles */
.slider {position: relative;height: 100vh;width: 100%;overflow: hidden;
}
.content h1 {
    color: white;
    font-size: 50px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    text-align: center;
}

.no { color: #f00; } /* RED Color for 'NO' */
/* Search and Cart Overlays */
.overlay, .cart-drawer { height: 100%; width: 0; /* මුලින්ම නොපෙනී පවතී */ position: fixed; z-index: 2000; top: 0;
    right: 0;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s; /* Slide වන වේගය */
}
/* --- Overlays --- */
.overlay { position: fixed; top:0; left:0; width:0; height:100%; background:rgba(255,255,255,0.98); z-index:2000; transition:0.5s; overflow:hidden; }
.overlay.open { width:100%; }
.cart-drawer { position:fixed; top:0; right:0; width:0; height:100%; background:#fff; z-index:2000; transition:0.5s; color:#000; }
.cart-drawer.open { width:320px; }

.overlay-content {position: relative;top: 25%;width: 80%;margin: auto; text-align: center;
}

.overlay-content input { width: 100%;font-size: 30px;border: none;border-bottom: 2px solid black;outline: none; padding: 10px;
}

.close-btn { position: absolute; top: 20px; right: 45px; font-size: 40px; cursor: pointer;
}

.cart-content { padding: 50px 20px; text-align: center; }
.shop-btn {background: black; color: white; padding: 15px 30px; border: none; margin-top: 20px; cursor: pointer;
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

/* Navbar & Announcements */
.announcement-bar { background: #f8f8f8; text-align: center; padding: 10px; font-size: 13px; letter-spacing: 1px; }
/* --- Navbar Styles --- */
.navbar {display: flex;justify-content: space-between; align-items: center; padding: 15px 5%;  background: rgba(0, 0, 0, 0.9); position: sticky; top: 0;  z-index: 1000; transition: 0.3s;
}
/* Mobile එකේදී අකුරු පොඩි කරන්න */
@media (max-width: 768px) {
    .navbar {
       flex-direction: row; /* එක පෙළට තැබීමට */
        justify-content: space-between;
        padding: 10px 10px !important;
    }
    .brand-name {
        font-size: 20px;
    }
}
.nav-links { display: flex; list-style: none; }
.nav-links li { margin: 0 25px; position: relative; }
.nav-links a { text-decoration: none; color: #fff; font-weight: 500;font-size: 18px; /* අකුරු වල ප්‍රමාණය (Font Size) වැඩි කිරීම */
    text-transform: uppercase; /* සියලුම අකුරු Capital කිරීම */ }
.nav-icons span {
    font-size: 24px; /* Icons වල ප්‍රමාණය වැඩි කිරීම */
    margin-left: 25px;
    cursor: pointer;
}
.b{
 background-color: black;text-transform: uppercase;
}

/* Logo පින්තූරය වටකුරු (Circle) කිරීම */
.logo-link {display: flex; align-items: center; text-decoration: none; color: #fff;
}
.logo-text { display: flex; flex-direction: column;
}

.brand-name {font-size: 28px;font-weight: 800;letter-spacing: 1px;
}

.tagline {font-size: 14px; color: #666; letter-spacing: 2px;
}
.logo-img { width: 80px;  /* පින්තූරයේ පළල */ height: 80px; /* පින්තූරයේ උස */ border-radius: 50%; /* වටකුරු කිරීමට මෙය අත්‍යවශ්‍යයි */  object-fit: cover;  border: 2px solid #333; /* වටේට කුඩා ඉරක් */  margin-right: 5px;
}
/* Dropdown */
.submenu { display: none; position: absolute; background: #fff; top: 100%; min-width: 150px; box-shadow: 0 5px 10px rgba(0,0,0,0.1); list-style: none; padding: 10px; }
.dropdown:hover .submenu { display: block; }
.submenu li { padding: 5px 0; }

/* Product Hover Swap */
.product-img img { width: 100%; height: 100%; object-fit: cover; position: absolute; transition: 0.5s; }
.img-back { opacity: 0; }
.product-card:hover .img-back { opacity: 1; }
.product-card:hover .img-front { opacity: 0; }
.badge { position: absolute; top: 10px; right: 10px; background: #000; color: #fff; padding: 5px 10px; font-size: 10px; z-index: 10; }

/* Overlay & Cart Drawer */
.overlay, .cart-drawer { position: fixed; top: 0; right: 0; height: 100%; background: #fff; z-index: 2000; transition: 0.5s; }
.overlay { width: 100%; visibility: hidden; opacity: 0; display: flex; align-items: center; justify-content: center; }
.cart-drawer { width: 0; overflow: hidden; box-shadow: -5px 0 15px rgba(0,0,0,0.1); }
.overlay.open { visibility: visible; opacity: 1; }
.cart-drawer.open { width: 400px; }
.close-btn { font-size: 30px; cursor: pointer; position: absolute; top: 20px; right: 30px; }

/* Layout & Navbar */
body { margin: 0; font-family: sans-serif; overflow-x: hidden; }
.nav-links { display: flex; list-style: none; }
.nav-links li { margin: 0 15px; position: relative; }
.submenu { display: none; position: absolute; background: #fff; padding: 10px; box-shadow: 0 5px 10px rgba(0,0,0,0.1); }
.dropdown:hover .submenu { display: block; }

/* Slider Section */
.hero-slider { height: 70vh; position: relative;width: 100%;overflow: hidden; }
@media (max-width: 768px) {
   height: 100vh !important; /* Phone screen එකේ සම්පූර්ණ උස */
  }

.slide { position: absolute; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.5s ease-in-out; display: flex; align-items: center; justify-content: center; }
.slide.active { opacity: 1; }
.overlay-text h1 { color: white; font-size: 3rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
.red { color: red; }
/* Logo එක සහ Content එක හරියටම මැදට ගැනීම */
    .slide-content {position: absolute;
        top: 30%; /* උඩ සිට පරතරය - ඔයාට අවශ්‍ය පරිදි වෙනස් කරන්න */
        left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center;
    }
.slide-content h1 {
        font-size: 45px; /* "B CLASSY" අකුරු වල ප්‍රමාණය */
 letter-spacing: 5px;
        font-family: 'Oswald', serif; /* Image එකේ වගේ classy look එකක් ගන්න */ text-transform: uppercase;
    }

/* Product Grid & Hover Effect */
.img-container { position: relative; overflow: hidden; height: 350px; }
.img-container img { width: 100%; height: 100%; object-fit: cover; position: absolute; transition: 0.5s; }
.img-hover { opacity: 0; }
.product-card:hover .img-hover { opacity: 1; }
.product-card:hover .img-main { opacity: 0; }


/* Best Sellers මැදට සහ View All දකුණට */
.section-header {  display: flex;  justify-content: center; /* මාතෘකාව මැදට තබයි */  align-items: center; padding: 20px 50px;
    margin-top: 40px; position: relative; /* View All එක මෙයට සාපේක්ෂව දකුණට ගැනීමට */ width: 100%;
}

.section-header h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
}

.view-all {
    position: absolute; /* පේළියෙන් පිටතට ගෙන ස්ථානගත කිරීමට */
    right: 50px;       /* දකුණු කෙළවරේ සිට දුර */
    font-size: 14px;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #333;
    padding-bottom: 2px;
    font-weight: 500;
}


/* පින්තූර පේළියට පෙළගැස්වීම */
.product-grid {
    display: flex; /* පින්තූර පේළියට ගනී */
    flex-wrap: nowrap; /* පල්ලෙහාට වැටීම වළක්වයි */
    overflow-x: auto; /* පින්තූර වැඩි නම් එහාට මෙහාට scroll කළ හැක */
    gap: 20px; /* පින්තූර අතර ඉඩ ප්‍රමාණය */
    padding: 20px;
    scrollbar-width: none; /* Scroll bar එක නොපෙන්වීමට */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* පින්තූර කාඩ් එකේ ප්‍රමාණය */
.product-card {
    flex: 0 0 23%; /* පේළියකට පින්තූර 4ක් පමණ සිටින ලෙස (100 / 4 = 25%) */
    min-width: 250px;margin-bottom: 20px;text-align: center;width: 100%;background: rgba(255, 255, 255, 0.05);border-radius: 15px; padding: 15px;transition: 0.3s;
}
/* Mobile වලදී card එකේ size එක adjust කිරීම */
@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); /* පොඩි phone වලට cards 2ක් පෙන්වීමට */
        gap: 10px;
        padding: 10px;
    }
}
.product-img {
    position: relative;
    width: 100%;
    height: 320px; /* පින්තූර සියල්ල එකම උසකට ගැනීමට */
    background-color: #f5f5f5;
    margin-bottom: 15px;
    overflow: hidden;
}
.product-img img {
    width: 100%; /* කාඩ් එකේ පළලට අනුව පින්තූරය හැඩගැසේ */
    height: auto;
    display: block;
}
.navbar{
    background:black;
    color: #fff;
}
/* Product Info සැකසුම් */
.product-info {
    text-align: center;
    padding: 15px 0;
    font-family: 'Segoe UI', sans-serif;
}

.product-info .title {
    font-size: 15px;
    color: #dacece;
    margin-bottom: 5px;
}

.product-info .price {
    font-size: 17px;
    font-weight: bold;
    color: #e7dddd;
    margin-bottom: 8px;
}

/* Installment Text (Mintpay/Koko) */
.installment-text {
    font-size: 11px;
    color: #e8e0e0;
    margin-bottom: 12px;
}

.installment-text span {
    font-weight: bold;
    color: #dfd4d4;
}

.mintpay {
    background: #00d1e0; /* Mintpay වල නිල් පැහැය */
    color: white !important;
    padding: 1px 5px;
    border-radius: 3px;
    font-style: italic;
    font-size: 10px;
    margin: 0 2px;
}

.koko {
    color: #d4cddd !important; /* Koko වල දම් පැහැය */
    font-weight: 900 !important;
    font-size: 11px;
}

/* Color Options (රවුම් ටික) */
.color-options {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: 0.3s;
}

.dot.black { background-color: #e4dbdb; }
.dot.silver { background-color: #C0C0C0; }
.dot.gold { background-color: #D4AF37; }

/* දැනට තේරී ඇති පාට පෙන්වීමට (Active) */
.dot.active {
    outline: 1.5px solid #333;
    outline-offset: 2px;
}

.dot:hover {
    transform: scale(1.2);
}

/*bar -first*/
.ticker-wrapper {
    width: 100%;
    background-color: #f5e6d3;
    color: #333;
    overflow: hidden;
    padding: 10px 0;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #b08888;
    white-space: nowrap;
    position: relative;
    z-index: 2001;
}
.ticker-content {
    display: inline-block;
    padding-left: 100%;
    animation: ticker-move 30s linear infinite;
}


.ticker-content span {
    padding: 0 50px; /* Text dekak athara thiyena ida */
    text-transform: uppercase;
}

/* Animation eka */
@keyframes ticker-move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
/* Category Section Styling */
.category-container {
    display: flex;flex-wrap: wrap; /* අයිතම ඊළඟ පේළියට වැටීමට ඉඩ දෙයි */gap: 15px;padding: 20px;width: 100%;box-sizing: border-box;
}

.category-card {
    position: relative;flex: 1 1 calc(50% - 20px); /* Desktop එකේ 50% බැගින් දෙකයි */ min-width: 300px;
    overflow: hidden; /* Photo eka eliyata yana eka nawa ththanna */ aspect-ratio: 4 / 5; /* Photo eka lokuyata penna */ text-decoration: none;
}
@media (max-width: 600px) {
    .category-card {
        flex: 1 1 100%; /* Mobile එකේදී 100% (එකයි) */
    }
}
.category-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

/* Mouse eka uda yaddi saha Phone wala touch karaddi loku wenna */
.category-card:hover img, 
.category-card:active img {
    transform: scale(1.1);
}

/* Text Overlay */
.category-overlay {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    text-align: center;
    color: white;
    z-index: 2;
}

.category-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

.shop-link {
    font-size: 0.9rem;
    text-decoration: underline;
    text-underline-offset: 5px;
    letter-spacing: 1px;
}

/* Mobile Responsive - Phone ekedi photo deka yata yata enna */
@media (max-width: 768px) {
    .category-container {
        flex-direction: column;
    }
    
    .category-title {
        font-size: 1.5rem;
    }
}
.small-category-grid { display: grid; grid-template-columns: repeat(6, 1fr); /* Column 6k gawa ganna */ gap: 10px;  padding: 20px;
}

.small-card { text-decoration: none; text-align: center; overflow: hidden;
}

.small-card img { width: 100%; border-radius: 8px; /* Photo eka roud karanna */ display: block;
    transition: transform 0.4s ease; /* Zoom smooth wenna */
}

.small-card p { margin-top: 10px;font-size: 11px;color: #333;letter-spacing: 1px;font-weight: 500;
}

/* Mouse hover saha Touch zoom effect */
.small-card:hover img, 
.small-card:active img {
    transform: scale(1.1);
}

/* Mobile responsive - Phone ekedi row 2kata ho 3kata bedanna */
@media (max-width: 768px) {
    .small-category-grid {
        grid-template-columns: repeat(3, 1fr); /* Row ekaka photo 3k pennanna */
    }
}

@media (max-width: 480px) {
    .small-category-grid {
        grid-template-columns: repeat(2, 1fr); /* Podi phone wala photo 2k pennanna */
    }
}



/* Container holds both cards side-by-side */
.category-card { position: relative;  overflow: hidden;aspect-ratio: 4 / 5; /* Keeps a nice tall portrait shape */
    text-decoration: none; height: 500px; /* You can adjust or remove this if using aspect-ratio */
}

/* Video fills the card */
.category-video { position: absolute; top: 0; left: 0; width: 100%; /* Changed from 50% to 100% */ height: 100%;
    object-fit: cover;z-index: 1;transition: transform 0.6s ease;
}

/* Zoom effect on hover */
.category-card:hover .category-video {
    transform: scale(1.05);
}

.category-overlay { position: absolute; bottom: 40px; left: 0; width: 100%; text-align: center;color: white; z-index: 2;
    background: rgba(0, 0, 0, 0.1); /* Subtle dark tint to help text stand out */ padding: 20px 0;
}

/* Mobile: Stack them vertically */
@media (max-width: 768px) {
    .category-container {
        flex-direction: column;
    }
    .category-card {
        height: 400px;
    }
}

.mute-btn { position: absolute; top: 20px; right: 20px; z-index: 10; background: rgba(0,0,0,0.5); color: white; border: none;
    padding: 10px;  border-radius: 50%;  cursor: pointer;
}
.product-info { text-align: center; padding: 15px; font-family: 'Segoe UI', sans-serif; }
.product-info .title { font-size: 16px; color: #e6e1e1; margin-bottom: 5px; }
.product-info .price { font-size: 18px; font-weight: bold; color: #000; margin-bottom: 8px; }

.installment-text { font-size: 12px; color: #efe9e9; display: flex; align-items: center; justify-content: center; gap: 5px; }
.installment-text span { font-weight: bold; color: #ece1e1; }

/* Mintpay & Koko Badges */
.badge { padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 10px; text-transform: uppercase; }
.mintpay { background-color: #00d1ff; color: #fff; }
.koko { background-color: #5c2d91; color: #fff; }

.color-options { display: flex; justify-content: center; margin-top: 10px; }
.dot { width: 15px; height: 15px; border-radius: 50%; border: 1px solid #ddd; cursor: pointer; }
.dot.gold { background-color: #d4af37; }
.dot.active { outline: 2px solid #333; outline-offset: 2px; }
/* Testimonial Section Styles */
.testimonial-section {
    padding: 80px 20px;
    text-align: center;
    background: transparent; /* ඔයාගේ dark background එකට ගැලපෙන සේ */
}

.section-title {
    color: #fff;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 40px;
}

.slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.slider-box {
    width: 90%;margin: 0 auto;
    max-width: 800px;
    border: 4px solid #a7dda7;
    border-radius: 12px;
    padding: 40px 20px;
    background: rgb(214, 205, 222); height: auto; /* අකුරු වැඩි වුණොත් box එක auto ලොකු වේ */ 
}

.testi-slide { display: none; animation: fadeEffect 0.8s;}

.testi-slide.active { display: block;}

.quote { font-size: 80px; color: #fff; line-height: 1; display: block; margin-bottom: 10px;}

.review { font-size: 35px; color: #fff; margin-bottom: 20px;
}

.rating {color: #fff; margin-bottom: 15px; font-size: 30px;
}

.user-name { font-weight: bold; color: #fff; font-size: 28px; text-transform: capitalize;
}

.brand-link { color: #888; font-size: 16px; text-decoration: underline; display: block; margin-top: 5px;
}

.prev-btn, .next-btn { background: none; border: none; color: #fff; font-size: 30px; cursor: pointer;transition: 0.3s;
}

.prev-btn:hover, .next-btn:hover { color: #888; }

@keyframes fadeEffect {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* --- CLASSY UI ENHANCEMENTS --- */

/* 1. මුළු සයිට් එකේම අකුරු ලස්සන කරන්න (Google Fonts පාවිච්චි කිරීම වඩාත් සුදුසුයි) */
body {
    letter-spacing: 0.5px;
    line-height: 1.6;
}

/* 2. Navbar එක Glass Effect එකකට ගන්න */
.navbar {
    background: rgba(0, 0, 0, 0.85) !important; /* පොඩ්ඩක් විනිවිද පේන විදිහට */
    backdrop-filter: blur(10px); /* පිටුපස පින්තූර blur වෙන්න */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 50px !important;
}

/* 3. Product Cards වල පෙනුම (Shadow & Border) */
.product-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; /* කොන් රවුම් කරන්න */ padding: 15px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.product-card:hover {background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.2); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); transform: translateY(-10px);
}

/* 4. Product Image වලට Smooth Border Radius එකක් */
.product-img {
    border-radius: 12px;
}

/* 5. Buttons වල පෙනුම */
.shop-btn, .view-all {background: transparent !important; border: 1px solid #fff !important;color: #fff !important;padding: 10px 25px !important;text-transform: uppercase;
    font-size: 12px; letter-spacing: 2px; transition: 0.3s; border-radius: 50px; /* රවුම් Buttons */
}

.shop-btn:hover, .view-all:hover { background: #fff !important; color: #000 !important;
}

/* 6. Section Headers (Best Sellers වගේ තැන්) */
.section-header h2 {font-size: 38px;font-weight: 300; /* අකුරු ටිකක් හීනියට ලස්සනට */letter-spacing: 5px;margin-bottom: 30px;position: relative;
}

/* 7. Testimonial Box එක Glass look එකට */
.slider-box { background: rgba(255, 255, 255, 0.05) !important; backdrop-filter: blur(5px); border: 1px solid rgba(255, 255, 255, 0.1) !important; box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

/* 8. Small Category Grid Hover Effect */
.small-card {
    transition: 0.4s;
}
.small-card img {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
.small-card:hover img {
    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}
/* Slider එකේ ඇතුළත සැකසුම */

/* හැම slide එකක්ම එක මත එක තබා active එක විතරක් පෙන්වන්න */
.testi-slide {display: none; /* මුලින් හංගන්න */width: 100%;animation: slideIn 0.6s ease-in-out;
}

.testi-slide.active {
    display: block; /* active එක විතරක් පෙනෙයි */
}

/* Slide එක මාරු වෙද්දී එන animation එක */
@keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}

/* Buttons වලට Hover effect එකක් */
.prev-btn:hover, .next-btn:hover {background: rgba(255, 255, 255, 0.759);color: #fff;cursor: pointer;transition: 0.3s;
}
.features-container {display: flex;justify-content: space-around; /* අයිතම හතර අතර සමාන පරතරයක් තබයි */align-items: center;padding: 40px 20px;background-color: #fff; /* පසුබිම් වර්ණය */text-align: center;flex-wrap: wrap; /* Mobile වලදී එක යට එක වැටීමට */
}

.feature-item { flex: 1;min-width: 200px;padding: 10px;
}

.icon {font-size: 54px;margin-bottom: 10px;color: #333;
}

.feature-item h3 {font-size: 24px;letter-spacing: 1px;margin-bottom: 5px;text-transform: uppercase;font-weight: bold;
}

.feature-item p {font-size: 18px;color: #121010; font-weight: 600;
}
/* පොදු සැකසුම් */
.features-container { display: flex; flex-wrap: wrap; /* ඉඩ මදි වුණොත් ඊළඟ පේළියට වැටීමට */ justify-content: center; align-items: flex-start; padding: 40px 10px; background-color: #ffffff; gap: 20px; /* අයිටම් අතර පරතරය */
}

.feature-item {  text-align: center; padding: 15px; /* Laptop එකේදී අයිටම් 4ක් එක පෙළට පෙන්වීමට */ flex: 1 1 200px;  max-width: 250px;
}

.feature-item h3 { font-size: 14px; font-weight: bold; margin-top: 10px; letter-spacing: 1px; color: #333;
}

.feature-item p {  font-size: 12px;  color: #777;  margin-top: 5px;
}

/* --- Mobile (Phone) සඳහා වන වෙනස්කම් --- */
@media (max-width: 600px) {
    .feature-item {
        /* Phone එකේදී එක පේළියක අයිටම් 2ක් පෙන්වීමට (හෝ 100% දුන්නොත් එක බැගින්) */
        flex: 1 1 45%; 
        max-width: 50%;
        padding: 10px 5px;
    }
    .feature-item h3 {
        font-size: 12px; /* Phone එකේදී අකුරු තරමක් කුඩා කිරීමට */
    }
}
/* ඉතා කුඩා Phone සඳහා (Small Screens) */
@media (max-width: 400px) {
    .feature-item {
        flex: 1 1 100%; /* එක පේළියක එකක් පමණයි */
        max-width: 100%;
    }
}/* ================= HAMBURGER MENU ================= */

.navbar {
  position: relative;
}

/* Hide checkbox */
#menu-toggle {
  display: none;
}

/* Hamburger hidden desktop */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #000;
  margin: 4px 0;
  transition: 0.3s;
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    text-align: center;
    max-height: 0;
    overflow: hidden;
    transition: 0.4s ease;
    z-index: 999;
  }

  .nav-links li {
    margin: 15px 0;
  }

  /* When clicked */
  #menu-toggle:checked ~ .nav-links {
    max-height: 600px;
  }
}.footer-container {
    background-color: #f9f9f9; /* ලා පැහැති පසුබිම */
    padding: 40px 10% 20px 10%;
    font-family: sans-serif;
    color: #333;
    border-top: 1px solid #ddd;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* කුඩා screen වලදී යටට යාමට */
    gap: 30px;
}

.footer-section {
    flex: 1;
    min-width: 250px;
}

.footer-section h3 {
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    font-weight: bold;
}

.footer-section p {
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #666;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    text-decoration: none;
    color: #666;
    font-size: 13px;
    transition: 0.3s;
}

.footer-section ul li a:hover {
    color: #000;
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    font-size: 12px;
    color: #999;
    border-top: 1px solid #eee;
    padding-top: 20px;
}
.slide-content {
  opacity: 0;
  transform: translateY(50px) scale(0.95) rotateX(2deg);
  transition: all 1s ease-out;
}

.slide.active .slide-content {
  opacity: 1;
  transform: translateY(0) scale(1) rotateX(0deg);
}
.product-card:hover .img-back {
  opacity: 1;
  transform: scale(1.1);
  filter: brightness(1.1) blur(0.5px);
}

.product-card:hover .img-front {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(1px);
}
.shop-btn:hover, .view-all:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(255,255,255,0.4);
  background-color: #fff !important;
  color: #000 !important;
}

.dot:hover {
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(255,255,255,0.8);
}
/* ================= Preloader ================= */
#preloader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg, #0f172a, #020617);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
}

.preloader-content {
    text-align: center;
}

.preloader-logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    animation: logoFadeScale 1.5s ease-in-out infinite alternate;
}

.preloader-name {
    color: #fff;
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 2px 2px 12px rgba(0,0,0,0.6);
    animation: nameFade 5s ease-in-out infinite alternate;
}

/* Animations */
@keyframes logoFadeScale {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.1); }
}

@keyframes nameFade {
    0% { opacity: 0.5; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* ================= Responsive ================= */
@media (max-width: 1024px) { /* Tablet */
    .preloader-logo { width: 190px; height: 190px; }
    .preloader-name { font-size: 38px; letter-spacing: 4px; }
}

@media (max-width: 480px) { /* Phone */
    .preloader-logo { width: 100px; height: 100px; }
    .preloader-name { font-size: 22px; letter-spacing: 3px; }
}
