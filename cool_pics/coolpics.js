document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-btn').addEventListener('click', function() {
        const nav = document.querySelector('header nav');
        nav.classList.toggle('show');
    });

    document.querySelector('.gallery').addEventListener('click', viewHandler);
  });

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}


function viewHandler(event) {
    console.log("Gallery clicked", event.target);
    // Get the element that was clicked
    const clickedElement = event.target;

    // Check if the clicked element is an image
    if (clickedElement.tagName === 'IMG') {
        // Get the image source from the clicked element
        const src = clickedElement.getAttribute('src');

        // Split the src to get the file name without the "-sm"
        const parts = src.split('-');

        // Create the new full-size image filename
        const fullSrc = `${parts[0]}-full.jpeg`;

        // Create the viewer HTML using viewerTemplate
        const viewerHTML = viewerTemplate(fullSrc, clickedElement.alt);

        // Insert the viewer HTML into the body
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        // Add a click listener to the close button to remove the viewer
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}



function closeViewer() {
    // Find the viewer element
    const viewer = document.querySelector('.viewer');

    // Remove the viewer element from the DOM
    if (viewer) {
        viewer.remove();
    }
}
