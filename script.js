let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product added to cart!");
}
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-list");
    const totalEl = document.getElementById("total-price");
    list.innerHTML = "";
    cart.forEach(item => {
        list.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });
    totalEl.innerText = total;
}

function checkout() {
    alert("Thanks for your purchase! Total: $" + total);
    cart = [];
    total = 0;
    updateCartCount();
    toggleCart();
}
