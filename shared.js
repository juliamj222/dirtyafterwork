document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('main-menu');

    if (menuButton && navMenu) {
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
    }

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
