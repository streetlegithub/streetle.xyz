// Neon cyberpunk, 3D tilt, and custom cursor effects for streetle.xyz

// 3D tilt effect for social links and avatar
function add3DTilt(selector, maxTilt = 15) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dx = (x - centerX) / centerX;
      const dy = (y - centerY) / centerY;
      el.style.transform = `rotateY(${dx * maxTilt}deg) rotateX(${-dy * maxTilt}deg) scale(1.04)`;
      el.style.boxShadow = `0 8px 32px rgba(225,0,255,0.18), 0 1.5px 8px rgba(0,0,0,0.12)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  add3DTilt('.social-link', 18);
  add3DTilt('.hero-avatar', 12);
});

// Custom neon cursor
const cursor = document.createElement('div');
cursor.id = 'neon-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Animate cursor scale on click
window.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});
window.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});

// Change cursor on hover over clickable elements
const clickableSelectors = ['a', 'button', 'input[type="button"]', 'input[type="submit"]', 'label', '[role="button"]'];
document.addEventListener('mouseover', e => {
  if (clickableSelectors.some(sel => e.target.closest(sel))) {
    cursor.classList.add('hover');
  }
});
document.addEventListener('mouseout', e => {
  if (clickableSelectors.some(sel => e.target.closest(sel))) {
    cursor.classList.remove('hover');
  }
});
