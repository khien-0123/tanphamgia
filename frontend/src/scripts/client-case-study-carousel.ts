/**
 * Case study listing — mobile: vuốt ngang peek + dots (không autoplay).
 * Desktop md+: giữ zigzag ảnh | chữ xếp dọc.
 */
function initClientCaseStudyCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-client-cs-track]');
  if (!track) return;

  const slides = [...track.querySelectorAll<HTMLElement>('[data-client-cs-slide]')];
  const dots = [...root.querySelectorAll<HTMLButtonElement>('[data-client-cs-dot]')];
  if (slides.length < 2 || dots.length !== slides.length) return;

  const mobileMq = window.matchMedia('(max-width: 767px)');
  let frame = 0;

  const activeIndex = () => {
    const left = track.scrollLeft;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const dist = Math.abs(slide.offsetLeft - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    return best;
  };

  const syncDots = () => {
    if (!mobileMq.matches) return;
    const index = activeIndex();
    dots.forEach((dot, i) => {
      const on = i === index;
      dot.setAttribute('aria-selected', on ? 'true' : 'false');
      dot.classList.toggle('is-active', on);
    });
  };

  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(syncDots);
  };

  track.addEventListener('scroll', onScroll, { passive: true });
  mobileMq.addEventListener('change', syncDots);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (!mobileMq.matches) return;
      const slide = slides[index];
      if (!slide) return;
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    });
  });

  syncDots();
}

document.querySelectorAll<HTMLElement>('[data-client-cs-carousel]').forEach(initClientCaseStudyCarousel);
