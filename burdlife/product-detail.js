import products from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get the product name from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product'); // Assuming the URL will be like /product-detail.html?product=Happy%20Stick%20Man%20Tee

    // Find the product that matches the product name from the URL
    const product = products.find(p => p.product === productName);

    // If product is found, display its details
    if (product) {
        const productImageContainer = document.getElementById('product-image-container');
        const productNameElement = document.getElementById('product-name');
        const productPriceElement = document.getElementById('product-price');
        const productDescriptionElement = document.getElementById('product-description');

        // Set product details in the HTML
        productImageContainer.innerHTML = `<img id="product-image" src="${product.image}" alt="${product.product}">`;
        productNameElement.textContent = product.product;
        productPriceElement.textContent = product.price;
        productDescriptionElement.textContent = product.fullDescription || 'No description available.';

    } else {
        // If no product is found, show an error message
        document.getElementById('product-detail-container').innerHTML = '<p>Product not found!</p>';
    }
});
