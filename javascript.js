// GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.timeline()
            .to(".hero h1", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.3)
            .to(".hero p", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.5)
            .to(".cta", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.7);

        // Section title
        gsap.to(".section-title", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".section-title",
                start: "top 80%"
            }
        });

        // Project cards stagger animation
        gsap.utils.toArray(".project-card").forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Contact text
        gsap.utils.toArray("#contact p, #contact div").forEach((el, i) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: i * 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%"
                }
            });
        });

        // Parallax effect on hero background (subtle)
        gsap.to(".hero::before", {
            backgroundPosition: "50% 50%",
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });