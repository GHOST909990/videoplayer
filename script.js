const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const muteBtn = document.getElementById("mute");
const volumeControl = document.getElementById("volume");
const fullscreenBtn = document.getElementById("fullscreen");

playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        video.pause();
        playPauseBtn.textContent = "▶️";
    }
});

video.addEventListener("timeupdate", () => {
    seekBar.value = (video.currentTime / video.duration) * 100;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
});

seekBar.addEventListener("input", () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

video.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(video.duration);
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

volumeControl.addEventListener("input", () => {
    video.volume = volumeControl.value;
});

fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
