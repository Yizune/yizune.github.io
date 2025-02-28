document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".code-toggle");
    let openSnippet = null;
    let activeButton = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSnippet = document.getElementById(targetId);

            if (openSnippet && openSnippet !== targetSnippet) {
                openSnippet.style.display = "none";
                activeButton.classList.remove("active");
            }

            if (targetSnippet.style.display === "block") {
                targetSnippet.style.display = "none";
                this.classList.remove("active");
                openSnippet = null;
                activeButton = null;
            } else {
                targetSnippet.style.display = "block";
                this.classList.add("active");
                openSnippet = targetSnippet;
                activeButton = this;
            }
        });
    });

    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');

        if (href && href.startsWith('#')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        } else if (href && !href.startsWith('http')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.documentElement.style.scrollBehavior = 'smooth';

                setTimeout(() => {
                    window.location.href = href;
                }, 100); 
            });
        }
    });

    const body = document.getElementById("body");
    const modeIcon = document.getElementById("mode-icon");
    const lightModeEnabled = localStorage.getItem("lightMode") === "true";

    if (lightModeEnabled) {
        body.classList.add("lightmode");
        modeIcon.src = "Images/DarkMode.svg";
    } else {
        body.classList.remove("lightmode");
        modeIcon.src = "Images/LightMode.svg";
    }
});

function toggleMode() {
    const body = document.getElementById("body");
    const modeIcon = document.getElementById("mode-icon");

    if (body.classList.contains("lightmode")) {
        body.classList.remove("lightmode");
        localStorage.setItem("lightMode", "false");
        modeIcon.src = "Images/LightMode.svg";
    } else {
        body.classList.add("lightmode");
        localStorage.setItem("lightMode", "true");
        modeIcon.src = "Images/DarkMode.svg";
    }
}

function showWIPPopup() {
    alert("The game 'Brave Little One' is finished, the page is still in progress and it will be uploaded soon!");
}