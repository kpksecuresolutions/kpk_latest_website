// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.getElementById('navbar');

// Check if we're on a page with page-header (not home page)
const hasPageHeader = document.querySelector('.page-header');
if (hasPageHeader) {
    // On non-home pages, start with scrolled state
    navbar.classList.add('scrolled');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        // On home page, remove scrolled class when at top
        if (!hasPageHeader) {
            navbar.classList.remove('scrolled');
        }
    }
});

// ================================
// Mobile Menu Toggle
// ================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ================================
// Smooth Scroll for Anchor Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Intersection Observer for Fade-in Animations
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// ================================
// Contact Form Handler
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        // TODO: Replace with your Google Form URL
        const googleFormURL = 'YOUR_GOOGLE_FORM_URL_HERE';

        // For now, show alert (replace this with actual form submission)
        alert(`Thank you, ${name}! We have received your inquiry and will get back to you soon.\n\nNote: To make this form functional, replace 'YOUR_GOOGLE_FORM_URL_HERE' in script.js with your actual Google Form URL.`);

        // Uncomment below to open Google Form in new tab
        // window.open(googleFormURL, '_blank');

        // Reset form
        contactForm.reset();
    });
}

// ================================
// Service Cards Hover Effect Enhancement
// ================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s ease';
    });
});

// ================================
// Active Page Navigation Highlight
// ================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ================================
// Scroll to Top Button (Optional Enhancement)
// ================================
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scroll-based animations or effects here if needed
});

// ================================
// Form Validation Enhancement
// ================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '' && input.checkValidity()) {
            input.style.borderColor = '#28a745';
        } else if (!input.checkValidity() && input.value.trim() !== '') {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#E61E2A';
    });
});

// ================================
// Testimonials Auto-rotation (Optional)
// ================================
// Uncomment if you want testimonials to auto-rotate
/*
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.style.transform = index === currentTestimonial
            ? 'scale(1.05)'
            : 'scale(1)';
        card.style.opacity = index === currentTestimonial ? '1' : '0.7';
    });

    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

if (testimonialCards.length > 0) {
    setInterval(rotateTestimonials, 5000);
}
*/

console.log('KPK Secure Solutions - Website Loaded Successfully');
