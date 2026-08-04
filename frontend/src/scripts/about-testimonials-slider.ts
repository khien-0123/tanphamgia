/** Slider testimonial — tự chạy, tạm dừng khi hover / tương tác tay */
function initTestimonialsSlider(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-slider-track]');
  if (!track) return;

  const slides = track.querySelectorAll<HTMLElement>('[data-slider-slide]');
  const totalSets = 3;
  const count = slides.length / totalSets;

  if (!Number.isInteger(count) || count < 2) return;

  const useInstantScroll = window.matchMedia('(pointer: coarse)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let isJumping = false;
  let isAutoScrolling = false;
  let isUserInteracting = false;
  let isHovered = false;
  let isInView = false;
  let scrollTimer: ReturnType<typeof setTimeout> | undefined;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;
  let autoScrollFallback: ReturnType<typeof setTimeout> | undefined;

  const getStep = () => {
    const first = slides[0];
    const second = slides[1];
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
    const step = getStep();
    if (step <= 0) return;
    jumpTo(step * count);
  };

  const handleScrollEnd = () => {
    if (isJumping) return;

    const step = getStep();
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
    !reduceMotion &&
    isInView &&
    !isUserInteracting &&
    !isHovered &&
    !document.hidden &&
    !isJumping;

  const advanceNext = () => {
    if (isJumping || isAutoScrolling || !canAutoPlay()) return;

    const step = getStep();
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
      autoTimer = setInterval(advanceNext, 4000);
    }, 1200);
  };

  const pauseInteraction = () => {
    isUserInteracting = true;
    stopAuto();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isUserInteracting = false;
      startAuto();
    }, 5000);
  };

  alignToMiddleSet();

  const goTo = (direction: 1 | -1) => {
    const step = getStep();
    if (step <= 0 || isJumping || isAutoScrolling) return;
    pauseInteraction();
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

  root.addEventListener('mouseenter', () => {
    isHovered = true;
    stopAuto();
  });

  root.addEventListener('mouseleave', () => {
    isHovered = false;
    startAuto();
  });

  root.addEventListener('pointerdown', pauseInteraction);
  track.addEventListener('touchstart', pauseInteraction, { passive: true });
  track.addEventListener('focusin', pauseInteraction);
  track.addEventListener('focusout', () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isUserInteracting = false;
      startAuto();
    }, 400);
  });

  window.addEventListener('resize', alignToMiddleSet);
  window.addEventListener('pageshow', alignToMiddleSet);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      isInView = Boolean(entry?.isIntersecting);
      if (isInView) startAuto();
      else stopAuto();
    },
    { threshold: 0.15 },
  );

  observer.observe(root);

  const rect = root.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isInView = true;
    startAuto();
  }
}

document.querySelectorAll<HTMLElement>('[data-testimonials-slider]').forEach(initTestimonialsSlider);
