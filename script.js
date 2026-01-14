document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', reveal);
    reveal();

    // 3. FAQ Accordion Logic (NOVO)
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Fecha os outros se quiser (opcional)
            // accordions.forEach(item => { if(item !== this) item.classList.remove('active'); item.nextElementSibling.style.maxHeight = null; });

            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
