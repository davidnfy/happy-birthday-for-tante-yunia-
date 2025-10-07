const loveContainer = document.querySelector('.love-container');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

// Love jatuh ringan
function createLove() {
  if (document.querySelectorAll('.love').length > 25) return;
  const love = document.createElement('div');
  love.classList.add('love');
  love.textContent = '💖';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.fontSize = Math.random() * 10 + 15 + 'px';
  love.style.animationDuration = Math.random() * 3 + 3 + 's';
  loveContainer.appendChild(love);
  setTimeout(() => love.remove(), 6000);
}
setInterval(createLove, 350);

// Musik tombol
musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = '⏸️ Jeda Musik';
  } else {
    music.pause();
    musicBtn.textContent = '🎵 Putar Musik';
  }
  isPlaying = !isPlaying;
});
