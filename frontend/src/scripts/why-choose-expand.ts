/** Fallback mở rộng khung ảnh khi sticky — cho trình duyệt không hỗ trợ animation-timeline: view() */
const PIN_TOLERANCE_PX = 8;

function getStickyTopPx(section: HTMLElement): number {
  const probe = document.createElement('div');
  probe.style.position = 'absolute';
  probe.style.visibility = 'hidden';
  probe.style.top = getComputedStyle(section).getPropertyValue('--why-choose-sticky-top').trim();
  section.appendChild(probe);
  const top = parseFloat(getComputedStyle(probe).top) || 74;
  probe.remove();
  return top;
}

function initWhyChooseExpand(section: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (CSS.supports('animation-timeline: view()')) return;

  const slides = section.querySelectorAll<HTMLElement>('.why-choose-slide');
  if (!slides.length) return;

  let stickyTop = getStickyTopPx(section);
  let ticking = false;

  const syncPinned = () => {
    ticking = false;
    slides.forEach((slide) => {
      const isPinned = slide.getBoundingClientRect().top <= stickyTop + PIN_TOLERANCE_PX;
      slide.classList.toggle('is-pinned', isPinned);
    });
  };

  const scheduleSync = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(syncPinned);
  };

  const onResize = () => {
    stickyTop = getStickyTopPx(section);
    scheduleSync();
  };

  window.addEventListener('scroll', scheduleSync, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  syncPinned();
}

document.querySelectorAll<HTMLElement>('.why-choose-section').forEach(initWhyChooseExpand);
