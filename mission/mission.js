document.addEventListener("DOMContentLoaded", function(){
    const theme = document.getElementById("theme-select");
    const logo = document.getElementById("logo");
    
    theme.addEventListener("change", function() {
        const body = document.body;
        if (theme.value === "dark") {
            body.classList.add("dark");
            logo.src = "images/byui-logo_white.png";
        }
        else {
            body.classList.remove("dark");
            logo.src = "images/byui-logo_blue.webp";

        }
    });
});