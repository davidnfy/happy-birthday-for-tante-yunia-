const loveContainer = document.querySelector('.love-container');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

// Fungsi buat animasi love jatuh yang lebih ringan
function createLove() {
  if (document.querySelectorAll('.love').length > 25) return; // batasi jumlah di layar

  const love = document.createElement('div');
  love.classList.add('love');
  love.textContent = '💖';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.fontSize = Math.random() * 15 + 15 + 'px';
  love.style.opacity = 0.8;

  const duration = Math.random() * 3 + 3; // antara 3-6 detik
  love.style.animation = `fall ${duration}s linear forwards`;

  loveContainer.appendChild(love);

  // hapus setelah jatuh selesai
  setTimeout(() => love.remove(), duration * 1000);
}

// Jalankan animasi love jatuh secara teratur tapi ringan
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
