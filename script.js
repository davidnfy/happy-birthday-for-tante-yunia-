const loveContainer = document.querySelector('.love-container');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

// Fungsi animasi love jatuh
function createLove() {
  const love = document.createElement('div');
  love.classList.add('love');
  love.textContent = '💖';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.animationDuration = Math.random() * 3 + 3 + 's';
  love.style.fontSize = Math.random() * 15 + 15 + 'px';
  loveContainer.appendChild(love);

  setTimeout(() => love.remove(), 6000);
}
setInterval(createLove, 200);

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
