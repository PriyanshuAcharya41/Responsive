document.addEventListener("DOMContentLoaded", function() {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.to(".background img", {
        y: "30%",
        ease: "none",
        scrollTrigger: {
            trigger: ".firstPage",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    });

    const toggleButton = document.querySelector('#btn');
    const mobileMenu = document.querySelector('#mobile-nav');

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-visible');
        });
    }
});