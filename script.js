// --- Scroll-based Navigation ---
const nav = document.querySelector('.nav');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id || entry.target.closest('[id]')?.id;
        if (id) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.nav-links a[href="#${id}"]`);
          if (link) link.classList.add('active');
        }
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.addEventListener('DOMContentLoaded', () => {
  // Observe sections for scroll animation
  document.querySelectorAll('.section, .fade-in').forEach(el => observer.observe(el));

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

// --- 3D Particle Background ---
const canvas = document.getElementById('bg-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 50;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.z = Math.random() * 400 - 200;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.speedZ = Math.random() * 0.3 + 0.1;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.z -= this.speedZ;
      if (this.z < -200) this.reset();
      this.x += this.speedX * (this.z + 200) / 400;
      this.y += this.speedY * (this.z + 200) / 400;
    }
    draw() {
      const scale = (this.z + 200) / 400;
      const x = canvas.width / 2 + (this.x - canvas.width / 2) * scale;
      const y = canvas.height / 2 + (this.y - canvas.height / 2) * scale;
      const size = Math.max(this.size * scale, 0.5);
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(184, 134, 44, ${this.opacity * scale})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}
