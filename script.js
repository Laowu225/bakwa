function checkout() {
    const customerName = prompt("Enter your name:");
    const customerAddress = prompt("Enter your address:");

    if (customerName && customerAddress) {
        // Prepare order details
        const orderDetails = cart.map(item => `${item.name}: $${item.price}`).join(', ');
        
        // Send email using EmailJS
        emailjs.send("your_service_id", "your_template_id", {
            customer_name: customerName,
            customer_address: customerAddress,
            order_details: orderDetails
        }).then(() => {
            alert(`Thank you, ${customerName}! Your order has been placed.`);
            console.log("Order Details Sent:", { customerName, customerAddress, cart });
            cart.length = 0;
            updateCart();
        }).catch(error => {
            alert("Failed to send order details. Please try again.");
            console.error("EmailJS Error:", error);
        });
    } else {
        alert("Please provide your details to complete the order.");
    }
}