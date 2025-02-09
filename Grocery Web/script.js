// Show alert when clicking Shop Now
function shopNow() {
    alert("Redirecting to the products page...");
}

// Sample products
const products = [
    { name: "Apples", price: "$2/kg", image: "apple.jpg" },
    { name: "Carrots", price: "$1.5/kg", image: "carrot.jpg" },
    { name: "Milk", price: "$3/L", image: "milk.jpg" }
];

// Load products dynamically
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: ${product.price}</p>
            <button onclick="Add to Cart('${product.name}')">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
});

// Function to add items to cart
function addToCart(productName) {
    alert(`${productName} added to cart!`);
}

//go to the login page
function goToLogin() {
    window.location.href = "login.html"; // Redirect to the login page
}