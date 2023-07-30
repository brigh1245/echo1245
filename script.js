// Sample product data (you can replace this with your own data fetched from the server)
const productsData = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 }
];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.querySelector('.products');

    productsData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Function to add event listeners to "Add to Cart" buttons
function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const selectedProduct = productsData.find(product => product.id === parseInt(productId));
            addToCart(selectedProduct);
        });
    });
}

// Function to add a product to the cart
function addToCart(product) {
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;
    cartItemsList.appendChild(cartItem);

    const currentTotal = parseFloat(cartTotalElement.innerText);
    cartTotalElement.innerText = (currentTotal + product.price).toFixed(2);
}

// Function to handle the checkout process
function handleCheckout() {
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        // In a real-world application, you'd perform the actual checkout process here (e.g., sending data to the server).
        // You would also clear the cart and update the inventory accordingly.
    });
}

// Initialize the e-commerce website
function init() {
    displayProducts();
    setupAddToCartButtons();
    handleCheckout();
}

// Call the init function when the page loads
document.addEventListener('DOMContentLoaded', init);