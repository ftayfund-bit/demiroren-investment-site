// Nav scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => { nav.classList.toggle('solid', window.scrollY > 60); }, { passive: true });

// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const siblings = e.target.closest('section, .writing-index, .article-body, .writing-index-inner')?.querySelectorAll('.reveal') || [e.target];
    const idx = Array.from(siblings).indexOf(e.target);
    setTimeout(() => e.target.classList.add('shown'), Math.min(idx, 5) * 120);
    obs.unobserve(e.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
