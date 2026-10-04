
/* =========================================================
   TOLEN COUTURE — LUXURY WEBSITE SCRIPT
   Interactive Fairytale Experience
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =====================================================
       1. SMOOTH SCROLL
       ===================================================== */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* =====================================================
       2. HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector('[data-purpose="main-header"]');

    if (header) {
        const updateHeader = () => {
            if (window.scrollY > 30) {
                header.classList.add(
                    "shadow-sm",
                    "backdrop-blur-xl"
                );

                header.classList.remove("border-transparent");
            } else {
                header.classList.remove(
                    "shadow-sm",
                    "backdrop-blur-xl"
                );
            }
        };

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();
    }


    /* =====================================================
       3. REVEAL ELEMENTS ON SCROLL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        "section, article, [data-purpose='couture-seal']"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "tolen-visible"
                    );

                    observer.unobserve(entry.target);
                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {

            element.classList.add("tolen-reveal");

            revealObserver.observe(element);

        });
    }


    /* =====================================================
       4. PRODUCT HEART / FAVORITES
       ===================================================== */

    const favoriteButtons = document.querySelectorAll(
        'button[aria-label="أضيفي للمفضلة"]'
    );

    favoriteButtons.forEach((button) => {

        button.addEventListener("click", function () {

            const icon = this.querySelector("i");

            if (!icon) return;

            const isFavorite =
                icon.classList.contains("fa-solid");

            if (isFavorite) {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                this.classList.remove(
                    "bg-brand-blush"
                );

            } else {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                this.classList.add(
                    "bg-brand-blush"
                );

                createHeartBurst(this);
            }

        });

    });


    /* =====================================================
       5. HEART BURST EFFECT
       ===================================================== */

    function createHeartBurst(button) {

        const heart = document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "absolute";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.style.pointerEvents = "none";
        heart.style.color = "#A25946";
        heart.style.fontSize = "16px";
        heart.style.zIndex = "50";
        heart.style.animation =
            "tolenHeartBurst 700ms ease forwards";

        button.style.position = "relative";

        button.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 750);
    }


    /* =====================================================
       6. NEWSLETTER FORM
       ===================================================== */

    const newsletterForm = document.querySelector(
        '[data-purpose="newsletter-form"]'
    );

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const input =
                    newsletterForm.querySelector(
                        'input[type="email"]'
                    );

                if (!input) return;

                const email = input.value.trim();

                if (!email) return;

                showTolenMessage(
                    "شكرًا لانضمامكِ إلى عالم تولين ✨"
                );

                input.value = "";

            }
        );

    }


    /* =====================================================
       7. LUXURY TOAST MESSAGE
       ===================================================== */

    function showTolenMessage(message) {

        const existing =
            document.querySelector(".tolen-toast");

        if (existing) {
            existing.remove();
        }

        const toast = document.createElement("div");

        toast.className = "tolen-toast";

        toast.innerHTML = `
            <span class="tolen-toast-icon">✦</span>
            <span>${message}</span>
        `;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add("tolen-toast-visible");
        });

        setTimeout(() => {

            toast.classList.remove(
                "tolen-toast-visible"
            );

            setTimeout(() => {
                toast.remove();
            }, 400);

        }, 3500);
    }


    /* =====================================================
       8. HERO IMAGE PARALLAX
       ===================================================== */

    const hero = document.querySelector("#hero");

    const heroImage = hero
        ? hero.querySelector("img")
        : null;

    if (hero && heroImage) {

        const updateHeroParallax = () => {

            const rect =
                hero.getBoundingClientRect();

            const viewportHeight =
                window.innerHeight;

            if (
                rect.bottom < 0 ||
                rect.top > viewportHeight
            ) {
                return;
            }

            const progress =
                (viewportHeight - rect.top) /
                (viewportHeight + rect.height);

            const translate =
                Math.max(
                    -12,
                    Math.min(12, (progress - 0.5) * 18)
                );

            heroImage.style.transform =
                `scale(1.03) translateY(${translate}px)`;
        };

        window.addEventListener(
            "scroll",
            updateHeroParallax,
            { passive: true }
        );

        updateHeroParallax();
    }


    /* =====================================================
       9. PRODUCT IMAGE TILT
       ===================================================== */

    const productCards =
        document.querySelectorAll(
            '[data-purpose="product-card"]'
        );

    productCards.forEach((card) => {

        const imageBox =
            card.querySelector(".card-shimmer");

        if (!imageBox) return;

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            imageBox.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {

            imageBox.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(0deg)";

        });

    });


    /* =====================================================
       10. ACTIVE NAVIGATION
       ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            '[data-purpose="desktop-nav"] a[href^="#"]'
        );

    const sections = [];

    navigationLinks.forEach((link) => {

        const id =
            link.getAttribute("href");

        if (!id || id === "#") return;

        const section =
            document.querySelector(id);

        if (section) {
            sections.push({
                section,
                link
            });
        }

    });

    if ("IntersectionObserver" in window) {

        const navObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting)
                            return;

                        navigationLinks.forEach((link) => {
                            link.classList.remove(
                                "text-brand-terracotta",
                                "font-bold"
                            );

                            link.classList.add(
                                "text-brand-charcoal/80"
                            );
                        });

                        const active =
                            sections.find(
                                item =>
                                    item.section ===
                                    entry.target
                            );

                        if (active) {

                            active.link.classList.remove(
                                "text-brand-charcoal/80"
                            );

                            active.link.classList.add(
                                "text-brand-terracotta",
                                "font-bold"
                            );
                        }

                    });

                },
                {
                    threshold: 0.35
                }
            );

        sections.forEach(({ section }) => {
            navObserver.observe(section);
        });

    }


    /* =====================================================
       11. HERO CAROUSEL DOTS
       ===================================================== */

    const heroDots =
        document.querySelectorAll(
            "#hero > div > div.absolute.bottom-6 span"
        );

    heroDots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            heroDots.forEach((item) => {

                item.classList.remove(
                    "w-7",
                    "bg-white"
                );

                item.classList.add(
                    "w-2",
                    "bg-white/60"
                );

            });

            dot.classList.remove(
                "w-2",
                "bg-white/60"
            );

            dot.classList.add(
                "w-7",
                "bg-white"
            );

        });

    });


    /* =====================================================
       12. IMAGE LAZY LOADING
       ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach((image) => {

        if (!image.hasAttribute("loading")) {

            image.setAttribute(
                "loading",
                "lazy"
            );

        }

    });


    /* =====================================================
       13. DISABLE IMAGE DRAGGING
       ===================================================== */

    images.forEach((image) => {

        image.addEventListener(
            "dragstart",
            (event) => {
                event.preventDefault();
            }
        );

    });


    /* =====================================================
       14. FAIRY DUST CURSOR
       ===================================================== */

    let lastSparkleTime = 0;

    document.addEventListener("mousemove", (event) => {

        const now = Date.now();

        if (now - lastSparkleTime < 90) return;

        lastSparkleTime = now;

        if (window.innerWidth < 768) return;

        createCursorSparkle(
            event.clientX,
            event.clientY
        );

    });


    function createCursorSparkle(x, y) {

        const sparkle =
            document.createElement("span");

        sparkle.innerHTML = "✦";

        sparkle.className =
            "tolen-cursor-sparkle";

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }


    /* =====================================================
       15. REDUCE MOTION ACCESSIBILITY
       ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (prefersReducedMotion.matches) {

        document.documentElement.classList.add(
            "reduce-motion"
        );

    }


    /* =====================================================
       16. CONSOLE BRAND MESSAGE
       ===================================================== */

    console.log(
        "%c TOLEN COUTURE ✦ ",
        "color:#A25946;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c حكاية تُرتدى — Tolen Abaya Luxury Couture ",
        "color:#7C3F30;font-size:12px;"
    );

});
