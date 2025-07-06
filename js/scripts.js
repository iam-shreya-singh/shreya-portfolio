window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
 // Project hover effect to change background in proj section
    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.querySelector('#projects');

    projectCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            if (index === 0) {
                projectsSection.style.background = "linear-gradient(135deg, #00b4db, #0083b0)";
            } else if (index === 1) {
                projectsSection.style.background = "linear-gradient(135deg, #fc466b, #3f5efb)";
            } else if (index === 2) {
                projectsSection.style.background = "linear-gradient(135deg, #11998e, #38ef7d)";
            }
        });
        card.addEventListener('mouseleave', () => {
            projectsSection.style.background =
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/assets/img/hiker.jpg') center/cover no-repeat";
        });
    });

});