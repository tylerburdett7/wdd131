import recipes from './recipes.mjs';



function random(num) {
    return Math.floor(Math.random()*8);
}

function getRandomListEntry(list) {
    const listLength = list.length
    const randomNum = random(listLength)
    return list[randomNum]
}

function recipeTemplate(recipe) {
    const maxStars = 5;
    const filledStars = '⭐'.repeat(recipe.rating);
    const emptyStars = '☆'.repeat(maxStars - recipe.rating);

    return  `<div class="recipe-container">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-description-container">
            <div class="recipe-tag">
                <h2>${recipe.tags[0]}</h2>
            </div>
            <div class="recipe-title">
                <h1>${recipe.name}</h1>
            </div>
            <div class="rating">
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of ${maxStars} stars">
                    ${filledStars}${emptyStars}
                </span>
            </div>
            <div class="description">
                <p>${recipe.description}</p>
            </div>
        </div>
    </div>`
}

function filterRecipes(query) {
    // Use Array.filter to filter the recipes array
    const filtered = recipes.filter(recipe => {
        const inName = recipe.name.toLowerCase().includes(query);
        const inDescription = recipe.description.toLowerCase().includes(query);
        const inTags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const inIngredients = recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query));
        
        return inName || inDescription || inTags || inIngredients;
    });

    // Sort the filtered recipes alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const container = document.querySelector('.recipes-container')
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipeTemplate).join('')
	// Set the HTML strings as the innerHTML of our output element.
    container.innerHTML = recipesHTML
}

document.querySelector('#recipe-search').addEventListener('submit', searchHandler)

function searchHandler(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Get the search query and convert it to lowercase
    const query = document.querySelector('#search').value.toLowerCase();

    // Filter recipes based on the query
    const filteredRecipes = filterRecipes(query);

    // Render the filtered recipes to the page
    renderRecipes(filteredRecipes);

    // Clear the search input box
    document.querySelector('#search').value = '';
}


function init() {
    const recipe = getRandomListEntry(recipes)

    renderRecipes([recipe])
}

init()
