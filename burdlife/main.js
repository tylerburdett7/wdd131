import products from './products.js';

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    const categorySelect = document.getElementById("sort-category"); // Correct ID

    // Function to display products based on selected category
    function displayProducts(filterCategory) {
        // Clear the current products in the grid
        productGrid.innerHTML = '';

        // If "All" category is selected, show all products
        const filteredProducts = filterCategory === 'all' 
            ? products 
            : products.filter(product => product.tags.includes(filterCategory));

        // Create product cards for the filtered products
        filteredProducts.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");

            // Create a link for each product card to open the product detail page
            const productLink = document.createElement('a');
            productLink.href = `product-detail.html?product=${encodeURIComponent(product.product)}`;

            // Add the product details inside the link
            productLink.innerHTML = `
                <img src="${product.image}" alt="${product.product}">
                <h1 class="product-title">${product.product}</h1>
                <h1 class="price">${product.price}</h1>
                <p class="product-description">${product.miniDescription}</p>
            `;

            // Append the link to the product card, and then the card to the grid
            productCard.appendChild(productLink);
            productGrid.appendChild(productCard);
        });
    }

    // Function to get the category from the URL query string
    function getCategoryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("category");
    }

    // Get the category from the URL (if available) or default to 'all'
    const categoryFromURL = getCategoryFromURL();
    const categoryToDisplay = categoryFromURL || 'all';

    // Display products based on the category from the URL or default to 'all'
    displayProducts(categoryToDisplay);

    // Set the dropdown's value to match the category displayed
    if (categorySelect) {
        categorySelect.value = categoryToDisplay;
    }

    // Event listener for the category dropdown (if present on this page)
    if (categorySelect) {
        categorySelect.addEventListener("change", (event) => {
            const selectedCategory = event.target.value;
            displayProducts(selectedCategory); // Update displayed products based on selected category
        });
    }
});
