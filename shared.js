// shared.js

// We'll wrap all our code in a function called initializeApp
const initializeApp = () => {
    const menuButton = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('main-menu');

    if (menuButton && navMenu) {
        // A flag to prevent adding listeners multiple times
        if (!menuButton.hasAttribute('data-listeners-attached')) {
            const toggleMenu = () => {
                const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
                
                document.body.classList.toggle('nav-open');
                navMenu.classList.toggle('open');
                menuButton.classList.toggle('active');
                
                menuButton.setAttribute('aria-expanded', !isExpanded);
            };

            menuButton.addEventListener('click', toggleMenu);
            
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (document.body.classList.contains('nav-open')) {
                        toggleMenu();
                    }
                });
            });

            menuButton.setAttribute('data-listeners-attached', 'true');
        }
    }

    // --- Audio Control for Songs Page ---
    const audioPlayers = document.querySelectorAll('.single-audio-player');
    if (audioPlayers.length > 0) {
        audioPlayers.forEach(player => {
            // Check if listener is already attached
            if (!player.hasAttribute('data-listener-attached')) {
                player.addEventListener('play', (event) => {
                    audioPlayers.forEach(otherPlayer => {
                        if (otherPlayer !== event.target && !otherPlayer.paused) {
                            otherPlayer.pause();
                        }
                    });
                });
                player.setAttribute('data-listener-attached', 'true');
            }
        });
    }
};

// Use the 'pageshow' event instead of 'DOMContentLoaded'.
// This event fires every time the page becomes visible.
window.addEventListener('pageshow', (event) => {
    initializeApp();
});
