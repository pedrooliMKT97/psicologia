document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INTRO ZOOM EFFECT ---
    const introOverlay = document.querySelector('.intro-overlay');
    const body = document.body;

    // Trava o scroll no início
    body.style.overflow = 'hidden';

    // Aguarda um pouco e inicia a animação
    setTimeout(() => {
        introOverlay.classList.add('active');
        body.style.overflow = ''; // Libera o scroll
    }, 1000); // 1 segundo parado com o logo antes de dar o zoom


    // --- 2. MENU MOBILE FULLSCREEN ---
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

    // Fecha o menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('open');
        });
    });


    // --- 3. REVEAL ON SCROLL ---
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
    reveal(); // Trigger inicial
});
