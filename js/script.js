document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a, footer a");
    const sections = document.querySelectorAll(".page");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Function to show the correct section
    function showPage(hash) {
        const links = document.querySelectorAll("nav a");
        const sections = document.querySelectorAll(".page");

        sections.forEach(section => {
            section.classList.remove("active");
            if (`#${section.id}` === hash) {
                section.classList.add("active");
                // Trigger animations for the home section
                if (section.id === "home") {
                    const fadeInElements = section.querySelectorAll('.fade-in');
                    fadeInElements.forEach(element => {
                        element.style.animationPlayState = 'running';
                    });
                }
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === hash) {
                link.classList.add("active");
            }
        });
    }

    // Event listener for navigation clicks
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const hash = this.getAttribute("href");
            history.pushState(null, null, hash);
            showPage(hash);
            // Hide the dropdown menu after clicking a link
            navLinks.classList.remove("active");
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Show home page initially
    showPage("#home");
});

// Fade in effect for elements
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('h3, .food-anxiety, p');

    function handleScroll() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "You're beautiful.",
        "You are enough.",
        "You are loved.",
        "You are strong.",
        "You matter.",
        "Recovery is possible.",
        "Take it one step at a time.",
        "You are worthy of love and acceptance.",
        "Recovery isn't linear, but it is possible.",
        "Be kind to the body that carries you.",
        "You matter.",
        "Keep going, you got this :)",
        "Let yourself heal."
    ];

    const messageContainer = document.getElementById("encouraging-messages");
    let currentMessageIndex = 0;

    function showMessage() {
        const message = document.createElement("div");
        message.className = "encouraging-message";
        message.textContent = messages[currentMessageIndex];

        messageContainer.appendChild(message);

        setTimeout(() => {
            message.classList.add("visible");
        }, 100);

        setTimeout(() => {
            message.classList.remove("visible");
            setTimeout(() => {
                messageContainer.removeChild(message);
            }, 500);
        }, 5000);

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    function startMessages() {
        showMessage();
        setInterval(showMessage, 7000);
    }

    const sections = document.querySelectorAll(".page");
    function handlePageChange() {
        const hash = window.location.hash || "#home"; // Default to #home if no hash is present
        if (hash === "#help") {
            startMessages();
        }
        showPage(hash); // Ensure the correct section is displayed
    }

    window.addEventListener("hashchange", handlePageChange);
    handlePageChange(); 
});

// Call handlePageChange on page load
document.addEventListener("DOMContentLoaded", function () {
    handlePageChange();
    window.addEventListener("hashchange", handlePageChange);
});