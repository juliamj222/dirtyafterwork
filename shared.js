// shared.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('main-menu');

    if (menuButton && navMenu) {
        const toggleMenu = () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle all necessary classes
            document.body.classList.toggle('nav-open');
            navMenu.classList.toggle('open');
            menuButton.classList.toggle('active');
            
            menuButton.setAttribute('aria-expanded', !isExpanded);
        };

        menuButton.addEventListener('click', toggleMenu);
        
        // Also close the menu if a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (document.body.classList.contains('nav-open')) {
                    toggleMenu();
                }
            });
        });
    }

    // --- Audio Control for Songs Page ---
    const audioPlayers = document.querySelectorAll('.single-audio-player');
    if (audioPlayers.length > 0) {
        audioPlayers.forEach(player => {
            player.addEventListener('play', (event) => {
                audioPlayers.forEach(otherPlayer => {
                    if (otherPlayer !== event.target && !otherPlayer.paused) {
                        otherPlayer.pause();
                    }
                });
            });
        });
    }
});
