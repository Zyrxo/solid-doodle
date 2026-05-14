// Vercel Speed Insights
import('https://esm.sh/@vercel/speed-insights').then(({ injectSpeedInsights }) => {
    injectSpeedInsights();
});

// Vercel Analytics
import('https://esm.sh/@vercel/analytics').then(({ inject }) => {
    inject();
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle (Simplified for demo)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    
    mobileBtn.addEventListener('click', () => {
        alert('Mobile menu clicked. In a real app, this would open a dropdown menu.');
        // Here you would typically toggle a class on .nav-links to show/hide them
    });

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
    
    // Trigger immediately for elements already in viewport (like Hero)
    setTimeout(() => {
        revealElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('active');
            }
        });
    }, 100);

    // 4. Portfolio Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-card.item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                // Show/Hide logic
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block';
                    // Re-trigger reveal animation
                    setTimeout(() => item.classList.add('active'), 50);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active');
                }
            });
        });
    });
});
