document.addEventListener('DOMContentLoaded', () => {
    
    // INTRO ZOOM
    const introOverlay = document.querySelector('.intro-overlay');
    const body = document.body;

    body.style.overflow = 'hidden';

    setTimeout(() => {
        introOverlay.classList.add('active');
        body.style.overflow = ''; 
    }, 1000);

    // MENU MOBILE
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenu = document.querySelector('.close-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    menuBtn.addEventListener('click', () => {
        mobileOverlay.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('open');
        });
    });

    // REVEAL ON SCROLL
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; 
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal(); 
});
