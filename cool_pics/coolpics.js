document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-btn').addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('show');
    });
  });