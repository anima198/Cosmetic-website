
//navbar script.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");


    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.getAttribute("data-price");
            
            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - $${productPrice}`;
            cartItems.appendChild(cartItem);
        });
    });
});

//foorter script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Footer loaded successfully!");
});

