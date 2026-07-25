/** Slider logo khách hàng mobile — vòng lặp vô hạn + tự chạy */
function initClientsSlider(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-slider-track]');
  if (!track) return;

  const pages = track.querySelectorAll<HTMLElement>('[data-slider-slide]');
  const totalSets = 3;
  const count = pages.length / totalSets;

  if (!Number.isInteger(count) || count < 2) return;

  const useInstantScroll = window.matchMedia('(pointer: coarse)').matches;

  let isJumping = false;
  let isAutoScrolling = false;
  let isUserInteracting = false;
  let isInView = false;
  let isPageScrolling = false;
  let scrollTimer: ReturnType<typeof setTimeout> | undefined;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;
  let pageScrollTimer: ReturnType<typeof setTimeout> | undefined;
  let autoScrollFallback: ReturnType<typeof setTimeout> | undefined;

  const getPageStep = () => {
    const first = pages[0];
    const second = pages[1];
    if (!first) return 0;
    if (second) return second.offsetLeft - first.offsetLeft;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return first.offsetWidth + gap;
  };

  const jumpTo = (left: number) => {
    isJumping = true;
    track.style.scrollSnapType = 'none';
    track.scrollLeft = left;
    requestAnimationFrame(() => {
      track.style.scrollSnapType = '';
      isJumping = false;
    });
  };

  const alignToMiddleSet = () => {
    const step = getPageStep();
    if (step <= 0) return;
    jumpTo(step * count);
  };

  const handleScrollEnd = () => {
    if (isJumping) return;

    const step = getPageStep();
    if (step <= 0) return;

    const index = Math.round(track.scrollLeft / step);

    if (index < count) {
      jumpTo(track.scrollLeft + step * count);
      return;
    }

    if (index >= count * 2) {
      jumpTo(track.scrollLeft - step * count);
    }
  };

  const scheduleScrollEnd = () => {
    if (isJumping || isAutoScrolling) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(handleScrollEnd, 80);
  };

  const clearAutoScrollFallback = () => {
    if (autoScrollFallback) clearTimeout(autoScrollFallback);
    autoScrollFallback = undefined;
  };

  const finishAutoScroll = () => {
    if (!isAutoScrolling) return;
    clearAutoScrollFallback();
    track.style.scrollSnapType = '';
    isAutoScrolling = false;
    handleScrollEnd();
  };

  const stopAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (firstTimer) clearTimeout(firstTimer);
    autoTimer = undefined;
    firstTimer = undefined;
  };

  const canAutoPlay = () =>
    isInView && !isPageScrolling && !isUserInteracting && !document.hidden && !isJumping;

  const advanceNext = () => {
    if (isJumping || isAutoScrolling || !canAutoPlay()) return;

    const step = getPageStep();
    if (step <= 0) return;

    isAutoScrolling = true;
    track.style.scrollSnapType = 'none';
    clearAutoScrollFallback();

    if (useInstantScroll) {
      track.scrollLeft += step;
      requestAnimationFrame(finishAutoScroll);
      return;
    }

    const onScrollEnd = () => {
      track.removeEventListener('scrollend', onScrollEnd);
      finishAutoScroll();
    };

    track.addEventListener('scrollend', onScrollEnd);
    autoScrollFallback = setTimeout(() => {
      track.removeEventListener('scrollend', onScrollEnd);
      finishAutoScroll();
    }, 800);

    track.scrollBy({ left: step, behavior: 'smooth' });
  };

  const startAuto = () => {
    stopAuto();
    if (!canAutoPlay()) return;

    firstTimer = setTimeout(() => {
      if (!canAutoPlay()) return;
      advanceNext();
      autoTimer = setInterval(advanceNext, 4500);
    }, 1800);
  };

  const pauseAuto = () => {
    isUserInteracting = true;
    stopAuto();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isUserInteracting = false;
      startAuto();
    }, 5000);
  };

  const onPageScroll = () => {
    isPageScrolling = true;
    stopAuto();
    clearTimeout(pageScrollTimer);
    pageScrollTimer = setTimeout(() => {
      isPageScrolling = false;
      startAuto();
    }, 200);
  };

  alignToMiddleSet();

  const goTo = (direction: 1 | -1) => {
    const step = getPageStep();
    if (step <= 0 || isJumping || isAutoScrolling) return;
    pauseAuto();
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  const prevBtn = root.querySelector<HTMLElement>('[data-slider-prev]');
  const nextBtn = root.querySelector<HTMLElement>('[data-slider-next]');
  prevBtn?.addEventListener('click', () => goTo(-1));
  nextBtn?.addEventListener('click', () => goTo(1));

  track.addEventListener('scroll', scheduleScrollEnd, { passive: true });
  track.addEventListener('scrollend', () => {
    if (!isAutoScrolling) handleScrollEnd();
  });
  track.addEventListener('touchstart', pauseAuto, { passive: true });
  window.addEventListener('resize', alignToMiddleSet);
  window.addEventListener('pageshow', alignToMiddleSet);
  window.addEventListener('scroll', onPageScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      isInView = entry.isIntersecting;
      if (isInView) startAuto();
      else stopAuto();
    },
    { threshold: 0.2 },
  );

  observer.observe(root);

  const rect = root.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isInView = true;
    startAuto();
  }
}

function bootClientsSlider() {
  document.querySelectorAll<HTMLElement>('[data-clients-slider]').forEach(initClientsSlider);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootClientsSlider);
} else {
  bootClientsSlider();
}

document.addEventListener('astro:page-load', bootClientsSlider);
