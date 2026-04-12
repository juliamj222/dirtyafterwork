// shared.js

const initializeApp = () => {
  const menuButton = document.getElementById("menu-toggle-btn");
  const navMenu = document.getElementById("main-menu");

  if (menuButton && navMenu) {
    if (!menuButton.hasAttribute("data-listeners-attached")) {
      const toggleMenu = () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        document.body.classList.toggle("nav-open");
        navMenu.classList.toggle("open");
        menuButton.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", !isExpanded);
      };

      menuButton.addEventListener("click", toggleMenu);
      navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          if (document.body.classList.contains("nav-open")) {
            toggleMenu();
          }
        });
      });
      menuButton.setAttribute("data-listeners-attached", "true");
    }
  }

  // --- UNIVERSAL MEDIA CONTROL (Audio & Video) ---
  const allMedia = document.querySelectorAll("audio, video");

  allMedia.forEach((media) => {
    if (!media.hasAttribute("data-listener-attached")) {
      media.addEventListener("play", (event) => {
        // When one starts, pause ALL others
        allMedia.forEach((otherMedia) => {
          if (otherMedia !== event.target && !otherMedia.paused) {
            otherMedia.pause();
          }
        });
      });
      media.setAttribute("data-listener-attached", "true");
    }
  });
};

window.addEventListener("pageshow", (event) => {
  initializeApp();
});
