document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation triggers using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in classes to sections and elements
    const elementsToAnimate = document.querySelectorAll('.section-title, .content-box, .kyoto-text p, .card, .feature-item, .entry-box, .info-table, .hero-content > *');
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in');
        // Add a slight delay based on index for children elements to create a staggered effect
        if (el.parentElement.classList.contains('cards') || el.parentElement.classList.contains('features-row')) {
             el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        }
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
});
