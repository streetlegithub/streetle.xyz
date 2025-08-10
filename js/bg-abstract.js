// Animated abstract rainbow gradient background for streetle.xyz

const canvas = document.createElement('canvas');
canvas.id = 'bg-abstract';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
canvas.width = w;
canvas.height = h;

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}
window.addEventListener('resize', resize);

// Abstract bouncing blobs
const blobs = Array.from({length: 8}).map((_,i) => ({
  // Allow blobs to start slightly off screen
  x: Math.random()*(w+300)-150,
  y: Math.random()*(h+300)-150,
  r: 260 + Math.random()*160, // much bigger
  dx: (Math.random()-0.5)*2.2,
  dy: (Math.random()-0.5)*2.2,
  // Pastel colors: lower saturation, higher lightness
  color: `hsl(${i*45}, 60%, 80%)`
}));

function animate() {
  ctx.clearRect(0,0,w,h);
  ctx.globalAlpha = 0.7;
  blobs.forEach((b,i) => {
    b.x += b.dx;
    b.y += b.dy;
    // Bounce off edges
  // Allow blobs to go 120px off each edge
  if(b.x-b.r < -120 && b.dx < 0) b.dx *= -1;
  if(b.x+b.r > w+120 && b.dx > 0) b.dx *= -1;
  if(b.y-b.r < -120 && b.dy < 0) b.dy *= -1;
  if(b.y+b.r > h+120 && b.dy > 0) b.dy *= -1;
    const grad = ctx.createRadialGradient(b.x, b.y, b.r*0.2, b.x, b.y, b.r);
    grad.addColorStop(0, b.color);
    grad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
    ctx.fillStyle = grad;
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
animate();
