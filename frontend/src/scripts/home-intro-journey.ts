/** Slider journey giới thiệu — tick highlight + ảnh trượt từ dưới lên */
const AUTO_INTERVAL_MS = 4500;
const FIRST_DELAY_MS = 1500;
const RESUME_DELAY_MS = 4000;
const SLIDE_MS = 950;

function initIntroJourney(root: HTMLElement) {
  const steps = root.querySelectorAll<HTMLElement>('[data-journey-step]');
  const track = root.querySelector<HTMLElement>('[data-journey-track]');
  const slides = track?.querySelectorAll<HTMLElement>('.intro-journey-slide');
  const media = root.querySelector<HTMLElement>('[data-journey-media]');
  const count = steps.length;

  if (count < 2 || !track || !slides || slides.length !== count) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slideOffset = 100 / count;

  let activeIndex = 0;
  let isInView = false;
  let isPaused = false;
  let isMediaHovered = false;
  let isAnimating = false;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;
  let unlockTimer: ReturnType<typeof setTimeout> | undefined;

  const applyTrackPosition = (index: number, animate: boolean) => {
    track.classList.toggle('is-journey-track-animating', animate && !prefersReducedMotion);
    track.style.transform = `translate3d(0, -${index * slideOffset}%, 0)`;
  };

  const unlockAnimation = () => {
    isAnimating = false;
    track.classList.remove('is-journey-track-animating');
  };

  const setActive = (index: number, animate = false) => {
    const nextIndex = ((index % count) + count) % count;
    if (nextIndex === activeIndex || isAnimating) return;

    isAnimating = animate && !prefersReducedMotion;
    activeIndex = nextIndex;

    steps.forEach((step, i) => {
      const isActive = i === activeIndex;
      step.classList.toggle('is-journey-active', isActive);

      const btn = step.querySelector<HTMLButtonElement>('button');
      if (btn) {
        if (isActive) btn.setAttribute('aria-current', 'step');
        else btn.removeAttribute('aria-current');
      }
    });

    applyTrackPosition(activeIndex, animate && !prefersReducedMotion);

    if (unlockTimer) clearTimeout(unlockTimer);

    if (!animate || prefersReducedMotion) {
      isAnimating = false;
      track.classList.remove('is-journey-track-animating');
      return;
    }

    unlockTimer = setTimeout(unlockAnimation, SLIDE_MS);
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
      setActive(index);
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

  applyTrackPosition(0, false);
  steps[0]?.classList.add('is-journey-active');

  const rect = observeTarget.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isInView = true;
    startAuto();
  }
}

document.querySelectorAll<HTMLElement>('[data-intro-journey]').forEach(initIntroJourney);
