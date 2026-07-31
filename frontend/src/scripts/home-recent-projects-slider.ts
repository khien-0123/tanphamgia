const MOCKUP_AUTO_INTERVAL_MS = 3000;
const MOCKUP_FIRST_DELAY_MS = 2200;
const TOTAL_SETS = 3;

function initMockupProjectsSlider(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('[data-mockup-projects-viewport]');
  const track = root.querySelector<HTMLElement>('[data-mockup-projects-track]');
  if (!viewport || !track) return;

  const slides = [...track.querySelectorAll<HTMLElement>('[data-mockup-projects-slide]')];
  const dots = [...root.querySelectorAll<HTMLButtonElement>('[data-mockup-projects-dot]')];
  const count = slides.length / TOTAL_SETS;
  if (!Number.isInteger(count) || count < 2 || dots.length !== count) return;

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let isHovered = false;
  let isFocusWithin = false;
  let isInView = false;
  let isJumping = false;
  let isAutoScrolling = false;
  let isNavigating = false;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let scrollTimer: ReturnType<typeof setTimeout> | undefined;
  let autoScrollFallback: ReturnType<typeof setTimeout> | undefined;

  const getStep = () => slides[1]?.offsetLeft - slides[0]?.offsetLeft || 0;
  const normalizeIndex = (index: number) => ((index % count) + count) % count;
  const getSlideLeft = (rawIndex: number) => {
    const slide = slides[rawIndex];
    if (!slide) return 0;
    return slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
  };
  const getRawIndex = () => {
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let closestIndex = count + activeIndex;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      if (distance < closestDistance) {
        closestIndex = index;
        closestDistance = distance;
      }
    });

    return closestIndex;
  };

  const syncUi = (index = normalizeIndex(getRawIndex())) => {
    activeIndex = normalizeIndex(index);
    const previousIndex = normalizeIndex(activeIndex - 1);
    const nextIndex = normalizeIndex(activeIndex + 1);

    slides.forEach((slide) => {
      const logicalIndex = Number(slide.dataset.logicalIndex);
      const isCanonical = slide.dataset.canonical === 'true';
      const isActive = isCanonical && logicalIndex === activeIndex;
      const isPrevious = isCanonical && logicalIndex === previousIndex;
      const isNext = isCanonical && logicalIndex === nextIndex;
      slide.toggleAttribute('data-active', isActive);
      slide.toggleAttribute('data-prev', isPrevious);
      slide.toggleAttribute('data-next', isNext);
      if (isCanonical) slide.setAttribute('aria-current', isActive ? 'true' : 'false');
      else slide.removeAttribute('aria-current');
    });

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-selected', dotIndex === activeIndex ? 'true' : 'false');
    });
  };

  const jumpTo = (rawIndex: number) => {
    if (!slides[rawIndex]) return;

    isJumping = true;
    viewport.style.scrollSnapType = 'none';
    viewport.scrollLeft = Math.round(getSlideLeft(rawIndex));
    requestAnimationFrame(() => {
      viewport.style.scrollSnapType = '';
      isJumping = false;
      syncUi();
    });
  };

  const alignToMiddleSet = () => jumpTo(count + activeIndex);

  const handleScrollEnd = () => {
    if (isJumping) return;

    const rawIndex = getRawIndex();
    activeIndex = normalizeIndex(rawIndex);
    syncUi(activeIndex);

    if (rawIndex < count || rawIndex >= count * 2) {
      jumpTo(count + activeIndex);
    }
  };

  const clearAutoScrollFallback = () => {
    if (autoScrollFallback) clearTimeout(autoScrollFallback);
    autoScrollFallback = undefined;
  };

  const finishAutoScroll = () => {
    if (!isAutoScrolling) return;
    clearAutoScrollFallback();
    isAutoScrolling = false;
    handleScrollEnd();
  };

  const canAutoPlay = () =>
    isInView &&
    !isHovered &&
    !isFocusWithin &&
    !document.hidden &&
    !reducedMotionQuery.matches &&
    !isJumping &&
    !isAutoScrolling &&
    !isNavigating;

  const stopAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (firstTimer) clearTimeout(firstTimer);
    autoTimer = undefined;
    firstTimer = undefined;
  };

  const advanceNext = () => {
    if (!canAutoPlay()) return;

    const step = getStep();
    if (step <= 0) return;

    isAutoScrolling = true;
    activeIndex = normalizeIndex(activeIndex + 1);
    syncUi(activeIndex);

    const onScrollEnd = () => {
      viewport.removeEventListener('scrollend', onScrollEnd);
      finishAutoScroll();
    };

    viewport.addEventListener('scrollend', onScrollEnd);
    autoScrollFallback = setTimeout(() => {
      viewport.removeEventListener('scrollend', onScrollEnd);
      finishAutoScroll();
    }, 900);

    viewport.scrollBy({
      left: step,
      behavior: reducedMotionQuery.matches ? 'auto' : 'smooth',
    });
  };

  const startAuto = () => {
    stopAuto();
    if (!canAutoPlay()) return;

    firstTimer = setTimeout(() => {
      if (!canAutoPlay()) return;
      advanceNext();
      autoTimer = setInterval(advanceNext, MOCKUP_AUTO_INTERVAL_MS);
    }, MOCKUP_FIRST_DELAY_MS);
  };

  const goTo = (index: number, smooth = true) => {
    const step = getStep();
    if (step <= 0) return;

    stopAuto();
    isNavigating = true;
    activeIndex = normalizeIndex(index);
    syncUi(activeIndex);

    const finishNavigation = () => {
      if (!isNavigating) return;
      viewport.removeEventListener('scrollend', finishNavigation);
      clearTimeout(scrollTimer);
      isNavigating = false;
      handleScrollEnd();
      startAuto();
    };

    viewport.addEventListener('scrollend', finishNavigation, { once: true });
    scrollTimer = setTimeout(finishNavigation, smooth ? 900 : 0);
    viewport.scrollTo({
      left: Math.round(getSlideLeft(count + activeIndex)),
      behavior: smooth && !reducedMotionQuery.matches ? 'smooth' : 'auto',
    });
  };

  const videoButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-video-id]')];
  videoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const media = button.closest<HTMLElement>('.mockup-project-media');
      const player = media?.querySelector<HTMLElement>('[data-video-player]');
      const iframe = player?.querySelector<HTMLIFrameElement>('iframe');
      const videoId = button.dataset.videoId;
      if (!player || !iframe || !videoId) return;
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
      player.classList.remove('hidden');
      button.classList.add('hidden');
      player.querySelector<HTMLButtonElement>('[data-video-close]')?.focus();
      stopAuto();
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-video-close]').forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      const player = closeButton.closest<HTMLElement>('[data-video-player]');
      const media = closeButton.closest<HTMLElement>('.mockup-project-media');
      const iframe = player?.querySelector<HTMLIFrameElement>('iframe');
      const playButton = media?.querySelector<HTMLButtonElement>('[data-video-id]');
      if (!player || !iframe || !playButton) return;
      iframe.src = '';
      player.classList.add('hidden');
      playButton.classList.remove('hidden');
      playButton.focus();
      startAuto();
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goTo(index);
      startAuto();
    });
  });

  viewport.addEventListener(
    'scroll',
    () => {
      if (isJumping || isAutoScrolling || isNavigating) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScrollEnd, 80);
    },
    { passive: true },
  );

  viewport.addEventListener('scrollend', () => {
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

  root.addEventListener('focusin', () => {
    isFocusWithin = true;
    stopAuto();
  });

  root.addEventListener('focusout', (event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && root.contains(nextTarget)) return;
    isFocusWithin = false;
    startAuto();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  reducedMotionQuery.addEventListener('change', () => {
    if (reducedMotionQuery.matches) stopAuto();
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

  observer.observe(viewport);

  window.addEventListener('resize', alignToMiddleSet);
  window.addEventListener('pageshow', alignToMiddleSet);

  alignToMiddleSet();
  syncUi(0);
}

function initMockupProjectsSliders() {
  document
    .querySelectorAll<HTMLElement>('[data-mockup-projects-slider]')
    .forEach(initMockupProjectsSlider);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMockupProjectsSliders);
} else {
  initMockupProjectsSliders();
}

document.addEventListener('astro:page-load', initMockupProjectsSliders);
