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
        console.log("Switched to dark mode");
    } else {
        body.classList.add("lightmode");
        localStorage.setItem("lightMode", "true");
        modeIcon.src = "Images/DarkMode.svg";
        console.log("Switched to light mode");
    }
}



// document.addEventListener("DOMContentLoaded", function() {
//     const buttons = document.querySelectorAll(".code-toggle");
//     let openSnippet = null;
//     let activeButton = null;

//     buttons.forEach(button => {
//         button.addEventListener("click", function() {
//             const targetId = this.getAttribute("data-target");
//             const targetSnippet = document.getElementById(targetId);

//             if (openSnippet && openSnippet !== targetSnippet) {
//                 openSnippet.style.display = "none";
//                 activeButton.classList.remove("active"); 
//             }

//             if (targetSnippet.style.display === "block") {
//                 targetSnippet.style.display = "none"; 
//                 this.classList.remove("active");
//                 openSnippet = null;
//                 activeButton = null;
//             } else {
//                 targetSnippet.style.display = "block";
//                 this.classList.add("active");
//                 openSnippet = targetSnippet;
//                 activeButton = this;
//             }
//         });
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const transitionOverlay = document.querySelector(".transition-overlay");

//     setTimeout(() => {
//         transitionOverlay.classList.remove("active");
//     }, 500); 

//     document.querySelectorAll("a").forEach(link => {
//         if (link.hostname === window.location.hostname) {
//             link.addEventListener("click", event => {
//                 event.preventDefault();
//                 transitionOverlay.classList.add("active");

//                 setTimeout(() => {
//                     window.location.href = link.href;
//                 }, 500); 
//             });
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll('.nav-links a').forEach(anchor => {
//         const href = anchor.getAttribute('href');

//         const isInternal = !href.startsWith('http://') && !href.startsWith('https://');

//         if (isInternal) {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetId = this.getAttribute('href');
//                 const targetElement = document.querySelector(targetId);
                
//                 if (targetElement) {
//                     targetElement.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             });
//         }
//     });
// });

// function toggleMode() {
//     const body = document.getElementById("body");
//     const modeIcon = document.getElementById("mode-icon");

//     if (body.classList.contains("lightmode")) {
//         body.classList.remove("lightmode");
//         localStorage.setItem("lightMode", "false");
//         modeIcon.src = "Images/LightMode.svg";  
//         console.log("Switched to dark mode");
//     } else {
//         body.classList.add("lightmode");
//         localStorage.setItem("lightMode", "true");
//         modeIcon.src = "Images/DarkMode.svg";  
//         console.log("Switched to light mode");
//     }
// }


// window.onload = function() {
//     const lightModeEnabled = localStorage.getItem("lightMode") === "true";
//     const modeIcon = document.getElementById("mode-icon");

//     if (lightModeEnabled) {
//         document.getElementById("body").classList.add("lightmode");
//         modeIcon.src = "Images/DarkMode.svg";  
//     } else {
//         modeIcon.src = "Images/LightMode.svg";  
//     }
// };

