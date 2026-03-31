// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Hero Entrance Animation
const tlHero = gsap.timeline();

tlHero.from('.hero-bg-accent', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
})
.from('.hero-tag', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=1")
.from('.hero h1', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.6")
.from('.hero p', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.8")
.from('.cta-group', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6")
.from('.hero-specialists', {
    opacity: 0,
    y: 10,
    duration: 1
}, "-=0.4")
.from('.image-wrapper', {
    clipPath: 'inset(0 0 0 100%)',
    duration: 1.4,
    ease: "power4.inOut"
}, "-=1.5")
.from('.hero-floating-card', {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=0.5");

// Text Rotation Logic
const words = ["SALUD", "VIDA", "BIENESTAR", "EQUILIBRIO"];
let currentIndex = 0;
const textElement = document.querySelector('.text-rotate');

function rotateText() {
    gsap.to(textElement, {
        y: -10,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            currentIndex = (currentIndex + 1) % words.length;
            textElement.textContent = words[currentIndex];
            gsap.fromTo(textElement, 
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 }
            );
        }
    });
}

setInterval(rotateText, 3000);

// Section Reveals
const sections = ['#about', '#services', '#reviews', '#contact'];

sections.forEach(section => {
    gsap.from(`${section} h2`, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Service Cards Stagger
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Obras Sociales Stagger
gsap.from('.logo-item', {
    scrollTrigger: {
        trigger: '.logos-container',
        start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

// WhatsApp Button Animation (Initial)
gsap.from('.whatsapp-float', {
    scale: 0,
    opacity: 0,
    delay: 2,
    duration: 1,
    ease: "elastic.out(1, 0.3)"
});

// Mobile Menu Logic
const menuBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon (bi-list vs bi-x)
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('bi-list', 'bi-x');
    } else {
        menuIcon.classList.replace('bi-x', 'bi-list');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.replace('bi-x', 'bi-list');
    });
});
