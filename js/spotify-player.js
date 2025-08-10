// Animate the now-playing-label gradient background
document.addEventListener('DOMContentLoaded', function () {
  const label = document.querySelector('.now-playing-label');
  if (!label) return;

  // Use a more dynamic gradient for visible movement
  label.style.background = 'linear-gradient(120deg, #a259f7, #e1bfff, #6d28d9, #a259f7)';
  label.style.backgroundSize = '300% 300%';

  let pos = 0;
  function animateGradient() {
    pos += 0.5; // speed of animation
    if (pos > 300) pos = 0;
    label.style.backgroundPosition = `${pos}% 50%`;
    requestAnimationFrame(animateGradient);
  }
  animateGradient();
});
const workerUrl = 'https://spotify-worker.streetle.workers.dev';

async function fetchSpotifyNowPlaying() {
  const res = await fetch(workerUrl);
  if (!res.ok) throw new Error('Failed to fetch Spotify data');
  return res.json();
}

async function updateNowPlaying() {
  const player = document.getElementById('player');
  const status = document.getElementById('status');
  const albumArt = document.getElementById('album-art');
  const trackName = document.getElementById('track-name');
  const artistName = document.getElementById('artist-name');
  const contextLink = document.getElementById('context-link');

  try {
    const data = await fetchSpotifyNowPlaying();

    if (!data || !data.is_playing || !data.item) {
      player.style.display = 'none';
      status.style.display = 'block';
      return;
    }

    player.style.display = 'flex';
    status.style.display = 'none';

    const track = data.item;
    const artists = track.artists.map(a => a.name).join(', ');
    const title = track.name;
    const albumImages = track.album.images;
    const albumImageUrl = albumImages.length ? albumImages[0].url : '';
    const context = data.context;
    const contextName = context?.type === 'playlist' ? 'Playlist' : context?.type || '';
    const contextUrl = context?.external_urls?.spotify || '#';

    albumArt.src = albumImageUrl;
    albumArt.alt = `Album art for ${title}`;

    trackName.textContent = title;
    artistName.textContent = artists;
    contextLink.href = contextUrl;
    contextLink.textContent = contextName ? `Listening from ${contextName}` : '';
    contextLink.style.display = contextName ? 'inline' : 'none';

  } catch (err) {
    player.style.display = 'none';
    status.style.display = 'block';
    status.textContent = 'Error loading Spotify data.';
    console.error(err);
  }
}

updateNowPlaying();
setInterval(updateNowPlaying, 30000);
