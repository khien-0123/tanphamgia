/** Reveal từ từ trượt lên khi cuộn — một chiều, tôn trọng prefers-reduced-motion */

const STAGGER_MS = 120;
const STAGGER_MAX_MS = 600;

/** Section đặc biệt — không auto-gắn reveal (parallax, sticky scroll, v.v.) */
const SKIP_SECTION_SELECTOR = '[data-no-reveal], [data-intro-journey], .why-choose-section';

let revealObserver: IntersectionObserver | null = null;

function bindAutoReveal() {
  const roots = document.querySelectorAll<HTMLElement>('#page-main, body > main');

  roots.forEach((root) => {
    root.querySelectorAll<HTMLElement>(`section:not(${SKIP_SECTION_SELECTOR})`).forEach((section) => {
      const wrapper =
        section.querySelector<HTMLElement>(':scope > .max-w-container-max-width') ??
        section.querySelector<HTMLElement>(':scope > div');

      if (!wrapper) return;

      const hasRevealInside = section.querySelector('[data-reveal]');

      if (!hasRevealInside) {
        if (!wrapper.hasAttribute('data-reveal')) {
          wrapper.setAttribute('data-reveal', '');
        }
        return;
      }

      const candidates = [...wrapper.children].filter(
        (el): el is HTMLElement =>
          el instanceof HTMLElement &&
          !el.hasAttribute('data-no-reveal') &&
          !el.hasAttribute('data-reveal') &&
          !el.querySelector('[data-reveal]'),
      );

      if (candidates.length === 0) return;

      if (candidates.length >= 2 && !wrapper.hasAttribute('data-reveal-stagger')) {
        wrapper.setAttribute('data-reveal-stagger', '');
      }

      candidates.forEach((el) => {
        if (!el.hasAttribute('data-reveal')) {
          el.setAttribute('data-reveal', '');
        }
      });
    });
  });
}

function applyStaggerDelays() {
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((parent) => {
    const children = parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]');
    children.forEach((child, index) => {
      const delay = Math.min(index * STAGGER_MS, STAGGER_MAX_MS);
      child.style.setProperty('--reveal-delay', `${delay}ms`);
    });
  });
}

function revealElement(el: HTMLElement) {
  el.classList.add('is-revealed');
}

function initScrollReveal() {
  bindAutoReveal();
  applyStaggerDelays();

  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  document.documentElement.classList.add('js-scroll-reveal-ready');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 2 frame: paint trạng thái ẩn trước, rồi mới bật is-revealed để CSS transition chạy */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const revealTargets = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not(.is-revealed)',
      );

      if (prefersReducedMotion) {
        revealTargets.forEach((el) => revealElement(el));
        return;
      }

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            revealElement(el);
            revealObserver?.unobserve(el);
          });
        },
        { threshold: 0, rootMargin: '0px 0px 15% 0px' },
      );

      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
          revealElement(el);
          return;
        }

        revealObserver?.observe(el);
      });
    });
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
