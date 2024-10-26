const articles = [
    {
        id: 1,
        title: 'Harry Potter and the Sorcerers Stone',
        date: 'september 7th, 2022',
        description: "Harry Potter and the Sorcerer's Stone is an enchanting introduction to J.K. Rowling's magical world, where young Harry discovers he's a wizard and embarks on a journey filled with wonder, friendship, and danger. The book masterfully blends fantasy, mystery, and coming-of-age elements as Harry navigates life at Hogwarts School of Witchcraft and Wizardry, learns about his parents' tragic past, and faces the dark threat of Lord Voldemort. With vivid characters and imaginative settings, it captures readers of all ages, laying the foundation for an epic series.",
        imgSrc: 'images/harrypotter.jpg',
        imgAlt: 'Book cover for harry potter',
        ages: '9-12',
        genre: 'Fantasy',
        stars: '⭐️⭐️⭐️⭐️⭐️'
    },
    {
        id: 2,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 3,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

// Function to create a new book element
function createBookElement(article) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.innerHTML = `
        <h2>${article.date}</h2>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
    `;

    const bookInfoDiv = document.createElement('div');
    bookInfoDiv.classList.add('book-info');
    bookInfoDiv.innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
    `;

    bookDiv.appendChild(dateDiv);
    bookDiv.appendChild(bookInfoDiv);

    return bookDiv;
}

// Function to render all books
function renderBooks() {
    const booksContainer = document.querySelector('.books');
    articles.forEach(article => {
        const bookElement = createBookElement(article);
        booksContainer.appendChild(bookElement);
    });
}

// Call the renderBooks function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
});
