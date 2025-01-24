document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

function darkModeFunction() {
    const element = document.getElementById("body");
    
    if (element.classList.contains("darkmode")) {
        element.classList.remove("darkmode");
        localStorage.setItem("darkMode", "false");
        console.log("Switched to light mode");
    } else {
        element.classList.add("darkmode");
        localStorage.setItem("darkMode", "true");
        console.log("Switched to dark mode");
    }
}

window.onload = function() {

    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (darkModeEnabled) {
        document.getElementById("body").classList.add("darkmode");
    }
};
