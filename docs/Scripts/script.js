document.addEventListener("DOMContentLoaded", () => {
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

function toggleMode() {
    const body = document.getElementById("body");
    const modeIcon = document.getElementById("mode-icon");

    if (body.classList.contains("lightmode")) {
        body.classList.remove("lightmode");
        localStorage.setItem("lightMode", "false");
        modeIcon.src = "Images/LightMode.svg";  
        console.log("Switched to dark mode");
    } else {
        body.classList.add("lightmode");
        localStorage.setItem("lightMode", "true");
        modeIcon.src = "Images/DarkMode.svg";  
        console.log("Switched to light mode");
    }
}


window.onload = function() {
    const lightModeEnabled = localStorage.getItem("lightMode") === "true";
    const modeIcon = document.getElementById("mode-icon");

    if (lightModeEnabled) {
        document.getElementById("body").classList.add("lightmode");
        modeIcon.src = "Images/DarkMode.svg";  
    } else {
        modeIcon.src = "Images/LightMode.svg";  
    }
};

