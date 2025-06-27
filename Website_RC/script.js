// Mobile Navigation
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
const closeMenu = document.querySelector(".close-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-overlay ul li a");

hamburgerMenu.addEventListener("click", () => {
    mobileNavOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileNavOverlay.classList.remove("active");
});

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNavOverlay.classList.remove("active");
    });
});

// Header Scroll Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Smooth Scrolling for Internal Links
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Form Submission (Basic example, can be expanded for actual backend integration)
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito! (Esta es una demostración, no hay backend real).");
    contactForm.reset();
});



// Registration Form Submission (Basic client-side validation)
const registerForm = document.querySelector("#register-page .auth-form");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const password = registerForm.querySelector("#password").value;
        const confirmPassword = registerForm.querySelector("#confirm-password").value;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        if (!registerForm.querySelector("#terms").checked) {
            alert("Debes aceptar los términos y condiciones.");
            return;
        }
        alert("Registro exitoso! (Funcionalidad de backend no implementada).");
        registerForm.reset();
        window.location.href = "login.html"; // Redirect to login page after successful registration
    });
}

// Login Form Submission (Basic client-side validation)
const loginForm = document.querySelector("#login-page .auth-form");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = loginForm.querySelector("#email").value;
        const password = loginForm.querySelector("#password").value;

        if (email === "test@example.com" && password === "password") { // Dummy credentials
            alert("Inicio de sesión exitoso! (Funcionalidad de backend no implementada).");
            window.location.href = "index.html"; // Redirect to home page after successful login
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
}

// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const parent = item.parentElement;
        parent.classList.toggle("active");
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('miVideoFondo');
    const containerHeight = videoContainer.offsetHeight;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        let newOpacity = 1 - (scrollPosition / containerHeight);
        if (newOpacity < 0) {
            newOpacity = 0;
        }
        videoContainer.style.opacity = newOpacity;
    });
});