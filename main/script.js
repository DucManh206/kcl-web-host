document.addEventListener("DOMContentLoaded", function () {
    // Check and apply dark mode from Local Storage
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    // Update image colors for dark mode
    updateImageColors();

    // Ensure the element with id 'toggleMode' is found
    const toggleModeButton = document.getElementById('toggleMode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', function () {
            toggleDarkMode();
        });
    }

    // Check screen width on page load
    checkScreenWidth();

    // Add event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Type text effect
    const typingText = document.getElementById("typing-text");
    const learnMoreBtnContainer = document.getElementById("learn-more-btn-container");

    const textToType = "Nhanh chóng, Tiện lợi, Trực quan";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 36);
        } else {
            // Show "Learn More" button when text is typed
            learnMoreBtnContainer.style.opacity = 1;
        }
    }

    // Start typing when the webpage is loaded
    typeText();
});

function toggleDarkMode() {
    // Toggle dark mode
    document.body.classList.toggle("dark-mode");

    // Save dark mode status to Local Storage
    var isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Update image colors for dark mode
    updateImageColors();
}

function updateImageColors() {
    // Update image colors based on dark mode
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
        var src = img.src;
        if (document.body.classList.contains("dark-mode")) {
            src = src.replace(".png", "-dark.png");
        } else {
            src = src.replace("-dark.png", ".png");
        }
        img.src = src;
    });
}

function checkScreenWidth() {
    var isMobile = window.innerWidth <= 768;
    var body = document.body;

    if (isMobile) {
        body.classList.add("mobile-view");
        body.classList.remove("desktop-view");
    } else {
        body.classList.remove("mobile-view");
        body.classList.add("desktop-view");
    }
}

function handleLearnMoreClick() {
    const contentSection = document.getElementById("content");
    const scroll = new SmoothScroll();
    scroll.animateScroll(contentSection, null, { easing: 'easeInOutQuart', speed: 2800 });
}