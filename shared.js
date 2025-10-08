// shared.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('main-menu');

    // Check if the menu elements exist before adding listeners
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

            // Toggle classes for both the nav overlay and the button animation
            navMenu.classList.toggle('open');
            menuButton.classList.toggle('active'); // This line triggers the "X" animation

            menuButton.setAttribute('aria-expanded', !isExpanded);
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuButton.classList.remove('active'); // Remove "X" when a link is clicked
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Audio Control for Songs Page ---
    const audioPlayers = document.querySelectorAll('.single-audio-player');
    if (audioPlayers.length > 0) {
        audioPlayers.forEach(player => {
            player.addEventListener('play', (event) => {
                // Pause any other players that might be playing
                audioPlayers.forEach(otherPlayer => {
                    if (otherPlayer !== event.target && !otherPlayer.paused) {
                        otherPlayer.pause();
                    }
                });
            });
        });
    }
});
