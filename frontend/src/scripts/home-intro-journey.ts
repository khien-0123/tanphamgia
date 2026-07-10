/** Slider journey giới thiệu — tick highlight + ảnh trượt vòng (clone đầu/cuối) */
const AUTO_INTERVAL_MS = 4500;
const FIRST_DELAY_MS = 1500;
const RESUME_DELAY_MS = 4000;
const SLIDE_MS = 800;

function initIntroJourney(root: HTMLElement) {
  const steps = root.querySelectorAll<HTMLElement>('[data-journey-step]');
  const track = root.querySelector<HTMLElement>('[data-journey-track]');
  const slides = track?.querySelectorAll<HTMLElement>('[data-journey-slide]');
  const media = root.querySelector<HTMLElement>('[data-journey-media]');
  const count = steps.length;

  if (count < 2 || !track || !slides || slides.length !== count + 2) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const trackCount = slides.length;
  const slideOffset = 100 / trackCount;

  let activeIndex = 0;
  let trackIndex = 1;
  let pendingSnapTrackIndex: number | null = null;
  let isInView = false;
  let isPaused = false;
  let isMediaHovered = false;
  let isAnimating = false;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;
  let unlockTimer: ReturnType<typeof setTimeout> | undefined;

  const logicalToTrack = (logicalIndex: number) => logicalIndex + 1;

  /** Chọn hướng ngắn nhất trên vòng — 5→1 đi tới, không kéo ngược qua 4,3,2 */
  const resolveTrackTarget = (fromLogical: number, toLogical: number) => {
    const forwardSteps = (toLogical - fromLogical + count) % count;
    const backwardSteps = (fromLogical - toLogical + count) % count;

    if (forwardSteps <= backwardSteps) {
      if (toLogical < fromLogical) return trackCount - 1;
      return logicalToTrack(toLogical);
    }

    if (toLogical > fromLogical) return 0;
    return logicalToTrack(toLogical);
  };

  const applyTrackPosition = (nextTrackIndex: number, animate: boolean) => {
    trackIndex = nextTrackIndex;
    const shouldAnimate = animate && !prefersReducedMotion;
    track.classList.toggle('is-journey-track-animating', shouldAnimate);
    track.style.transform = `translate3d(0, -${trackIndex * slideOffset}%, 0)`;
  };

  const clearUnlockTimer = () => {
    if (unlockTimer) {
      clearTimeout(unlockTimer);
      unlockTimer = undefined;
    }
    track.removeEventListener('transitionend', onTransitionEnd);
  };

  const onTransitionEnd = (event: TransitionEvent) => {
    if (event.target !== track || event.propertyName !== 'transform') return;

    if (pendingSnapTrackIndex !== null) {
      const snapTo = pendingSnapTrackIndex;
      pendingSnapTrackIndex = null;
      applyTrackPosition(snapTo, false);
    }

    clearUnlockTimer();
    unlockAnimation();
  };

  const unlockAnimation = () => {
    isAnimating = false;
    track.classList.remove('is-journey-track-animating');
  };

  const updateStepState = () => {
    steps.forEach((step, i) => {
      const isActive = i === activeIndex;
      step.classList.toggle('is-journey-active', isActive);

      const btn = step.querySelector<HTMLButtonElement>('button');
      if (btn) {
        if (isActive) btn.setAttribute('aria-current', 'step');
        else btn.removeAttribute('aria-current');
      }
    });
  };

  const setActive = (index: number, animate = false) => {
    const nextIndex = ((index % count) + count) % count;
    if (nextIndex === activeIndex) return;

    if (isAnimating) {
      clearUnlockTimer();
      unlockAnimation();
    }

    const fromLogical = activeIndex;
    const targetTrackIndex = resolveTrackTarget(fromLogical, nextIndex);

    pendingSnapTrackIndex = null;
    if (targetTrackIndex === trackCount - 1) {
      pendingSnapTrackIndex = logicalToTrack(nextIndex);
    } else if (targetTrackIndex === 0) {
      pendingSnapTrackIndex = logicalToTrack(nextIndex);
    }

    const shouldAnimate = animate && !prefersReducedMotion;
    isAnimating = shouldAnimate;
    activeIndex = nextIndex;
    updateStepState();
    applyTrackPosition(targetTrackIndex, shouldAnimate);

    if (!shouldAnimate) {
      if (pendingSnapTrackIndex !== null) {
        applyTrackPosition(pendingSnapTrackIndex, false);
        pendingSnapTrackIndex = null;
      }
      isAnimating = false;
      track.classList.remove('is-journey-track-animating');
      return;
    }

    track.addEventListener('transitionend', onTransitionEnd);
    unlockTimer = setTimeout(() => {
      if (pendingSnapTrackIndex !== null) {
        const snapTo = pendingSnapTrackIndex;
        pendingSnapTrackIndex = null;
        applyTrackPosition(snapTo, false);
      }
      clearUnlockTimer();
      unlockAnimation();
    }, SLIDE_MS + 80);
  };

  const stopAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (firstTimer) clearTimeout(firstTimer);
    autoTimer = undefined;
    firstTimer = undefined;
  };

  const canAutoPlay = () =>
    isInView && !isPaused && !isMediaHovered && !document.hidden && !prefersReducedMotion && !isAnimating;

  const advance = () => {
    if (!canAutoPlay()) return;
    setActive(activeIndex + 1, true);
  };

  const startAuto = () => {
    stopAuto();
    if (!canAutoPlay()) return;

    firstTimer = setTimeout(() => {
      if (!canAutoPlay()) return;
      advance();
      autoTimer = setInterval(advance, AUTO_INTERVAL_MS);
    }, FIRST_DELAY_MS);
  };

  const pauseAuto = () => {
    isPaused = true;
    stopAuto();
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isPaused = false;
      startAuto();
    }, RESUME_DELAY_MS);
  };

  steps.forEach((step) => {
    const btn = step.querySelector<HTMLButtonElement>('button');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const index = Number(step.dataset.stepIndex);
      if (Number.isNaN(index)) return;
      setActive(index, true);
      pauseAuto();
    });
  });

  if (media) {
    media.addEventListener('mouseenter', () => {
      isMediaHovered = true;
      stopAuto();
    });

    media.addEventListener('mouseleave', () => {
      isMediaHovered = false;
      startAuto();
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  const observeTarget = media ?? root;
  const observer = new IntersectionObserver(
    ([entry]) => {
      isInView = entry.isIntersecting;
      if (isInView) startAuto();
      else stopAuto();
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
  );

  observer.observe(observeTarget);

  applyTrackPosition(logicalToTrack(0), false);
  steps[0]?.classList.add('is-journey-active');

  const rect = observeTarget.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isInView = true;
    startAuto();
  }
}

document.querySelectorAll<HTMLElement>('[data-intro-journey]').forEach(initIntroJourney);
