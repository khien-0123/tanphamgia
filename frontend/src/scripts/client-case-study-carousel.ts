/** Carousel hàng case study phụ — scroll-snap, không autoplay */
function initSecondaryCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('[data-carousel-viewport]');
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  if (!viewport || !track) return;

  const slides = [...track.querySelectorAll<HTMLElement>('[data-carousel-slide]')];
  if (slides.length < 3) return;

  const prevBtn = root.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-slider-next]');
  const dots = [...root.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]')];
  const desktopMq = window.matchMedia('(min-width: 768px)');

  const getVisibleCount = () => (desktopMq.matches ? 2 : 1);

  const getStep = () => {
    const first = slides[0];
    const second = slides[1];
    if (!first) return 0;
    if (second) return second.offsetLeft - first.offsetLeft;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return first.offsetWidth + gap;
  };

  const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

  const getActiveIndex = () => {
    const step = getStep();
    if (step <= 0) return 0;
    return Math.min(getMaxIndex(), Math.round(viewport.scrollLeft / step));
  };

  const syncUi = () => {
    const active = getActiveIndex();
    const max = getMaxIndex();

    dots.forEach((dot, index) => {
      const isActive = index === active;
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      dot.classList.toggle('w-6', isActive);
      dot.classList.toggle('w-2', !isActive);
      dot.classList.toggle('bg-accent-teal', isActive);
      dot.classList.toggle('bg-white/35', !isActive);
      dot.classList.toggle('hover:bg-white/55', !isActive);
    });

    if (prevBtn) prevBtn.disabled = active <= 0;
    if (nextBtn) nextBtn.disabled = active >= max;
  };

  const scrollToIndex = (index: number) => {
    const step = getStep();
    if (step <= 0) return;
    viewport.scrollTo({ left: Math.round(step * index), behavior: 'smooth' });
  };

  let scrollTimer: ReturnType<typeof setTimeout> | undefined;

  const scheduleSync = () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(syncUi, 80);
  };

  prevBtn?.addEventListener('click', () => {
    scrollToIndex(Math.max(0, getActiveIndex() - 1));
  });

  nextBtn?.addEventListener('click', () => {
    scrollToIndex(Math.min(getMaxIndex(), getActiveIndex() + 1));
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => scrollToIndex(index));
  });

  viewport.addEventListener('scroll', scheduleSync, { passive: true });
  viewport.addEventListener('scrollend', syncUi);
  window.addEventListener('resize', () => {
    scrollToIndex(Math.min(getActiveIndex(), getMaxIndex()));

    syncUi();
  });

  syncUi();
}

function bootSecondaryCarousel() {
  document
    .querySelectorAll<HTMLElement>('[data-client-case-secondary-carousel]')
    .forEach(initSecondaryCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSecondaryCarousel);
} else {
  bootSecondaryCarousel();
}

document.addEventListener('astro:page-load', bootSecondaryCarousel);
