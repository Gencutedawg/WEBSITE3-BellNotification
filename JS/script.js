const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');
const popupMessage = document.getElementById('_popupMessage');
const video = document.getElementById('myVideo');
const audio = document.getElementById('_audio');

button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')) || 0;

    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake');
    button.classList.add('active');

    popupMessage.classList.add('show');

    setTimeout(() => {
        popupMessage.classList.remove('show');
    }, 2000);

    video.muted = false; // Unmute the video
    audio.muted = false; // Unmute the audio
    video.play();
    audio.play();
});

bell.addEventListener('animationend', () => {
    bell.classList.remove('shake');
});