/** Reveal nhẹ khi cuộn — fade-up, tôn trọng prefers-reduced-motion */
const STAGGER_MS = 80;
const STAGGER_MAX_MS = 400;

function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // Gán delay stagger cho con trong [data-reveal-stagger]
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((parent) => {
    const children = parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]');
    children.forEach((child, index) => {
      const delay = Math.min(index * STAGGER_MS, STAGGER_MAX_MS);
      child.style.setProperty('--reveal-delay', `${delay}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );

  revealTargets.forEach((el) => observer.observe(el));
}

initScrollReveal();
