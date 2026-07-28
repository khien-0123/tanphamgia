/** Carousel hàng case study phụ — scroll-snap, không autoplay */
function initSecondaryCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('[data-carousel-viewport]');
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  if (!viewport || !track) return;

  const slides = [...track.querySelectorAll<HTMLElement>('[data-carousel-slide]')];
  if (slides.length < 3) return;

  const prevBtn = root.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-slider-next]');
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

    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
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

  const moveNext = () => {
    const step = getStep();
    const first = slides[0];
    if (!first || step <= 0) return;
    viewport.scrollBy({ left: step, behavior: 'smooth' });
    window.setTimeout(() => {
      track.append(first);
      slides.push(slides.shift()!);
      viewport.scrollBy({ left: -step, behavior: 'instant' as ScrollBehavior });
    }, 450);
  };

  const movePrevious = () => {
    const step = getStep();
    const last = slides[slides.length - 1];
    if (!last || step <= 0) return;
    track.prepend(last);
    slides.unshift(slides.pop()!);
    viewport.scrollBy({ left: step, behavior: 'instant' as ScrollBehavior });
    window.setTimeout(() => viewport.scrollBy({ left: -step, behavior: 'smooth' }), 20);
  };

  prevBtn?.addEventListener('click', movePrevious);
  nextBtn?.addEventListener('click', moveNext);

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
