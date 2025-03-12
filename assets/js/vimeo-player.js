document.addEventListener('DOMContentLoaded', () => {
    const players = {};

    // Initialisiere Vimeo-Player für jedes Video
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const videoId = wrapper.dataset.vimeoId;
        const player = new Vimeo.Player(wrapper, {
            id: videoId,
            background: true,
            muted: true,
            controls: false,
            responsive: true
        });

        const control = wrapper.querySelector('.video-control');
        players[videoId] = { player, control, isPlaying: false };

        // Event-Listener für Play/Pause Button
        control.addEventListener('click', () => {
            const playerData = players[videoId];
            
            if (playerData.isPlaying) {
                playerData.player.pause();
                playerData.control.classList.remove('playing');
                playerData.isPlaying = false;
            } else {
                playerData.player.play();
                playerData.control.classList.add('playing');
                playerData.isPlaying = true;
            }
        });

        // Event-Listener für Video-Ende
        player.on('ended', () => {
            const playerData = players[videoId];
            playerData.control.classList.remove('playing');
            playerData.isPlaying = false;
            player.setCurrentTime(0);
        });
    });
}); 