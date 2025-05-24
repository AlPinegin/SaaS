// JavaScript for AlPinegin landing page

document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.features, .about-us, .contact-us');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animatedSections.forEach(section => {
        scrollObserver.observe(section);
    });

    // Hero CTA button scroll functionality
    const ctaButton = document.querySelector('.cta-button');
    const contactSection = document.getElementById('contact-section');

    if (ctaButton && contactSection) {
        ctaButton.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
