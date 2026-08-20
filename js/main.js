/**
 * FutureStack AI
 * Main navigation interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileNavigation = document.querySelector("#mobile-navigation");

    if (!menuButton || !mobileNavigation) {
        return;
    }

    const mobileLinks = mobileNavigation.querySelectorAll("a");

    const setMenuState = (isOpen) => {
        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        mobileNavigation.classList.toggle(
            "active",
            isOpen
        );

        mobileNavigation.setAttribute(
            "aria-hidden",
            String(!isOpen)
        );
    };

    // Start with the menu closed
    setMenuState(false);

    // Toggle menu
    menuButton.addEventListener("click", () => {
        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        setMenuState(!isOpen);
    });

    // Close menu when a navigation link is clicked
    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });

    // Close menu when clicking outside it
    document.addEventListener("click", (event) => {
        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        if (
            isOpen &&
            !mobileNavigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            setMenuState(false);
        }
    });

    // Close mobile menu when returning to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            setMenuState(false);
        }
    });
});
