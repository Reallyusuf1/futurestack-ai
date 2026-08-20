/**
 * =========================================================
 * FUTURESTACK AI
 * Main JavaScript
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       MOBILE NAVIGATION
    --------------------------------------------------------- */

    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileNavigation = document.querySelector("#mobile-navigation");
    const mobileLinks = document.querySelectorAll(
        "#mobile-navigation a"
    );

    if (!menuButton || !mobileNavigation) {
        return;
    }

    const openMenu = () => {
        mobileNavigation.classList.add("is-open");
        mobileNavigation.setAttribute("aria-hidden", "false");

        menuButton.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");

        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        mobileNavigation.classList.remove("is-open");
        mobileNavigation.setAttribute("aria-hidden", "true");

        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

        document.body.classList.remove("menu-open");
    };

    const toggleMenu = () => {
        const isOpen =
            mobileNavigation.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    /* Hamburger button */
    menuButton.addEventListener("click", toggleMenu);

    /* Close menu when a navigation link is selected */
    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    /* Close menu with Escape */
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            mobileNavigation.classList.contains("is-open")
        ) {
            closeMenu();
            menuButton.focus();
        }
    });

    /* Keep menu closed when switching back to desktop */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            closeMenu();
        }
    });

    /* Initial accessibility state */
    mobileNavigation.setAttribute("aria-hidden", "true");


    /* ---------------------------------------------------------
       SMOOTH SCROLL
    --------------------------------------------------------- */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#!"
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});
