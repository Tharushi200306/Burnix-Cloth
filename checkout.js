document.addEventListener('DOMContentLoaded', () => {
    const itemsList = document.getElementById('summary-items-list');
    const subtotalEl = document.getElementById('summary-subtotal');
    const shippingEl = document.getElementById('summary-shipping');
    const grandTotalEl = document.getElementById('summary-grand-total');
    const checkoutForm = document.getElementById('checkout-form');

    // 1. Load items from sessionStorage
    const checkoutItems = JSON.parse(sessionStorage.getItem('burnixCheckoutItems')) || [];

    if (checkoutItems.length === 0) {
        itemsList.innerHTML = '<p>Your cart is empty. Redirecting to home page...</p>';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
        return;
    }

    let subtotal = 0;

    // 2. Populate the summary list
    checkoutItems.forEach(item => {
        // Clean up price string: 'Rs. 2,500.00' -> 2500.00
        const priceString = String(item.price).replace(/Rs\.?\s*|,/g, '');
        const price = parseFloat(priceString);
        const quantity = parseInt(item.quantity || 1);
        const itemTotal = price * quantity;
        subtotal += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.classList.add('summary-item');
        itemElement.innerHTML = `
            <div class="summary-item-img">
                <img src="${item.image || (item.images && item.images.split(',')[0])}" alt="${item.title}">
                <span class="summary-item-qty">${quantity}</span>
            </div>
            <div class="summary-item-details">
                <p class="summary-item-title">${item.title}</p>
                <p class="summary-item-size-color">
                    ${item.size ? `Size: ${item.size}` : ''} 
                    ${item.color ? `Color: ${item.color}` : ''}
                </p>
            </div>
            <p class="summary-item-price">Rs. ${itemTotal.toLocaleString()}</p>
        `;
        itemsList.appendChild(itemElement);
    });

    // 3. Calculate and display totals
    const shippingCost = 350.00; // Example shipping cost
    const grandTotal = subtotal + shippingCost;

    subtotalEl.textContent = `Rs. ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    shippingEl.textContent = `Rs. ${shippingCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

    // --- NEW: Calculate Koko Installments ---
    const kokoInstallment = grandTotal / 3;
    const kokoMsgEl = document.getElementById('koko-installment-msg');
    if (kokoMsgEl) {
        kokoMsgEl.innerHTML = `Pay <strong>Rs. ${kokoInstallment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> in 3 interest-free installments.`;
    }

    // 4. Handle form submission
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const fullName = document.getElementById('fullName').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;

        const activePaymentMethod = document.querySelector('.payment-option.active')?.dataset.method;

        // Validate card details if card payment is selected
        if (activePaymentMethod === 'card') {
            const cardName = document.getElementById('cardName').value;
            const cardNumber = document.getElementById('cardNumber').value;
            const cardExpiry = document.getElementById('cardExpiry').value;
            const cardCVC = document.getElementById('cardCVC').value;
            if (!cardName || !cardNumber || !cardExpiry || !cardCVC) {
                alert('Please fill in all credit card details.');
                return; // Stop submission if card details are missing
            }
        }

        if (email && fullName && address && city && phone) {
            // --- NEW: Phone Number Validation ---
            // Validates Sri Lankan numbers: 07xxxxxxxx, 7xxxxxxxx, +947xxxxxxxx
            const phoneRegex = /^(?:0|94|\+94)?(?:7\d)\d{7}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                alert('Please enter a valid Sri Lankan phone number (e.g., 0771234567).');
                return;
            }

            const submitBtn = checkoutForm.querySelector('.place-order-btn');
            const originalBtnText = submitBtn.textContent;
            
            // 1. Show Processing State
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';

            // 2. Simulate Payment Processing Delay (2 seconds)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // 3. Generate Order ID
            const orderId = 'BC-' + Math.floor(100000 + Math.random() * 900000);
            
            // 4. Prepare WhatsApp Message
            let paymentStatus = 'Pending';
            if (activePaymentMethod === 'card') paymentStatus = 'PAID (Card)';
            else if (activePaymentMethod === 'koko') paymentStatus = 'PAID (Koko)';
            else if (activePaymentMethod === 'cod') paymentStatus = 'Cash On Delivery';
            else if (activePaymentMethod === 'bank') paymentStatus = 'Bank Deposit';

            let itemsText = checkoutItems.map(item => 
                `- ${item.title} (${item.size || 'N/A'}, ${item.color || 'N/A'}) x ${item.quantity}`
            ).join('%0a');

            const whatsappMsg = `*New Order: ${orderId}*%0a` +
                                `------------------%0a` +
                                `*Customer:* ${fullName}%0a` +
                                `*Phone:* ${phone}%0a` +
                                `*Address:* ${address}, ${city}%0a` +
                                `------------------%0a` +
                                `*Items:*%0a${itemsText}%0a` +
                                `------------------%0a` +
                                `*Total:* ${grandTotalEl.textContent}%0a` +
                                `*Payment:* ${paymentStatus}%0a` +
                                `------------------%0a` +
                                `Please confirm my order.`;

            // Admin Phone Number (Replace with your actual number)
            const adminPhone = '94771234567'; 
            const whatsappUrl = `https://wa.me/${adminPhone}?text=${whatsappMsg}`;

            // 5. Show Success Overlay
            showSuccess(orderId, whatsappUrl);
            
            // Reset Button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            function showSuccess(id, waUrl) {
                const overlay = document.getElementById('orderSuccessOverlay');
                const orderIdDisplay = document.getElementById('orderIdDisplay');
                const whatsappBtn = document.getElementById('whatsappBtn');
                const homeBtn = document.getElementById('homeBtn');

                orderIdDisplay.textContent = `Order ID: ${id}`;
                
                // Setup Buttons
                whatsappBtn.onclick = () => window.open(waUrl, '_blank');
                homeBtn.onclick = () => {
                    sessionStorage.removeItem('burnixCheckoutItems');
                    window.location.href = 'index.html';
                };

                overlay.classList.add('active');
            }
        } else {
            // Add shake effect to form if invalid
            checkoutForm.classList.add('shake');
            setTimeout(() => checkoutForm.classList.remove('shake'), 500);
            alert('Please fill out all required fields.');
        }
    });

    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    const bankDetails = document.getElementById('bank-details');
    const cardPaymentSection = document.getElementById('card-payment-section');
    const kokoPaymentSection = document.getElementById('koko-payment-section');
    const placeOrderBtn = document.querySelector('.place-order-btn');

    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (option.innerText.includes('(Coming Soon)')) {
                alert('This payment method is not yet available.');
                return;
            }

            paymentOptions.forEach(p => p.classList.remove('active'));
            option.classList.add('active');

            const method = option.dataset.method;

            // Toggle visibility based on the selected method
            bankDetails.style.display = (method === 'bank') ? 'block' : 'none';
            cardPaymentSection.style.display = (method === 'card') ? 'block' : 'none';
            kokoPaymentSection.style.display = (method === 'koko') ? 'block' : 'none';

            // Change button style for Koko
            if (method === 'koko') {
                placeOrderBtn.classList.add('koko-active');
            } else {
                placeOrderBtn.classList.remove('koko-active');
            }
        });
    });
});