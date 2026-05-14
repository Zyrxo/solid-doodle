/* =========================================
   Smash King - Interactive JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Menu Toggle --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    /* --- Sticky Header on Scroll --- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Scroll Reveal Animations --- */
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();

    /* --- Active Nav Link Update on Scroll --- */
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for header
            const sectionId = current.getAttribute('id');
            const navElement = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            
            if(navElement) {
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navElement.classList.add('active');
                } else {
                    navElement.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);

    /* --- Newsletter Form Submission (Mock) --- */
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input.value) {
                alert('Grazie per esserti unito al club! Ti abbiamo inviato una sorpresa via email.');
                input.value = '';
            }
        });
    }

});
