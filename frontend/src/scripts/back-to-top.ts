/** Nút lên đầu trang — chỉ hiện sau khi cuộn qua hết hero */

let heroObserver: IntersectionObserver | null = null;
let scrollHandler: (() => void) | null = null;

function setBackToTopVisible(button: HTMLAnchorElement, visible: boolean) {
  button.classList.toggle('is-visible', visible);
  button.setAttribute('aria-hidden', visible ? 'false' : 'true');
  if (visible) {
    button.removeAttribute('tabindex');
  } else {
    button.setAttribute('tabindex', '-1');
  }
}

function isPastHero(hero: HTMLElement) {
  return hero.getBoundingClientRect().bottom <= 0;
}

function initBackToTop() {
  heroObserver?.disconnect();
  heroObserver = null;

  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
    scrollHandler = null;
  }

  const button = document.querySelector<HTMLAnchorElement>('[data-back-to-top]');
  if (!button) return;

  const hero = document.querySelector<HTMLElement>('[data-page-hero]');

  if (!hero) {
    scrollHandler = () => {
      setBackToTopVisible(button, window.scrollY > window.innerHeight);
    };
    scrollHandler();
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return;
  }

  const sync = () => {
    setBackToTopVisible(button, isPastHero(hero));
  };

  heroObserver = new IntersectionObserver(() => sync(), { threshold: 0 });
  heroObserver.observe(hero);
  sync();
}

function bootBackToTop() {
  initBackToTop();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootBackToTop);
} else {
  bootBackToTop();
}

document.addEventListener('astro:page-load', initBackToTop);
document.addEventListener('astro:after-swap', initBackToTop);
