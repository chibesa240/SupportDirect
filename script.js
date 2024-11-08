// script.js

function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Toggle between light and dark mode

    // Optionally, you can also store the mode in localStorage to persist the mode across page reloads
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth <= 768) {
        // Adjust animation code if needed
    } else {
        // Ensure animations run normally on larger screens
    }
});

// Load the theme from localStorage when the page loads
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// Parallax Effect on Scroll
document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;
    header.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});
