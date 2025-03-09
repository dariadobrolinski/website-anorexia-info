document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a, footer a");
    const sections = document.querySelectorAll(".page");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Function to show the correct section
    function showPage(hash) {
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
