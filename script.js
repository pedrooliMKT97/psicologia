document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Scroll na Navbar (Muda de cor ao rolar)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animação "Reveal on Scroll" (Aparecer suavemente)
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        const windowHeight = window.innerHeight;
        // O elemento aparece quando está 150px acima da base da tela
        const elementVisible = 150; 

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Dispara a função ao rolar e ao carregar a página
    window.addEventListener('scroll', reveal);
    reveal(); 
});