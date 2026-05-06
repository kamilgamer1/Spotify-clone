let playButton = document.querySelector('.fa-play-circle');
let audio = new Audio('your-song-file.mp3');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.replace('fa-play-circle', 'fa-pause-circle');
    } else {
        audio.pause();
        playButton.classList.replace('fa-pause-circle', 'fa-play-circle');
    }
});
