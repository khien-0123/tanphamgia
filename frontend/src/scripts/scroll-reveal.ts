/** Reveal nhẹ khi cuộn — fade-up, tôn trọng prefers-reduced-motion */
const STAGGER_MS = 80;
const STAGGER_MAX_MS = 400;

function initScrollReveal() {
  document.documentElement.classList.add('js-scroll-reveal-ready');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealTargets = document.querySelectorAll<HTMLElement>(
    '[data-reveal]:not(.is-revealed)',
  );

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((parent) => {
    const children = parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]:not(.is-revealed)');
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

  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    if (inView) {
      el.classList.add('is-revealed');
      return;
    }
    observer.observe(el);
  });
}

function bootScrollReveal() {
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootScrollReveal);
} else {
  bootScrollReveal();
}

document.addEventListener('astro:page-load', initScrollReveal);
document.addEventListener('astro:after-swap', initScrollReveal);
