import { initLoopCarousel } from './loop-carousel';

/** Tự chạy carousel transform vòng lặp */
export type TransformCarouselController = {
  getPosition: () => number;
  advance: (delta: number, animate?: boolean) => void;
  snapTo: (position: number, animate?: boolean) => void;
  pauseAuto: () => void;
};

type AutoplayOptions = {
  root: HTMLElement;
  viewport: HTMLElement;
  track: HTMLElement;
  itemSelector: string;
  autoIntervalMs?: number;
  resumeAfterMs?: number;
  firstAdvanceMs?: number;
};

export function initTransformCarouselAutoplay({
  root,
  viewport,
  track,
  itemSelector,
  autoIntervalMs = 4000,
  resumeAfterMs = 4000,
  firstAdvanceMs = 1800,
}: AutoplayOptions): TransformCarouselController | null {
  if (root.dataset.carouselAutoplayReady === 'true') return null;

  const loop = initLoopCarousel({ track, viewport, itemSelector });
  if (!loop) return null;

  root.dataset.carouselAutoplayReady = 'true';

  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let firstTimer: ReturnType<typeof setTimeout> | undefined;
  let resumeTimer: ReturnType<typeof setTimeout> | undefined;
  let pageScrollTimer: ReturnType<typeof setTimeout> | undefined;
  let isInView = false;
  let isPageScrolling = false;
  let isUserPaused = false;

  const stopAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    if (firstTimer) clearTimeout(firstTimer);
    autoTimer = undefined;
    firstTimer = undefined;
  };

  const canAutoPlay = () =>
    isInView && !isPageScrolling && !isUserPaused && !document.hidden;

  const tick = () => {
    if (!canAutoPlay()) return;
    loop.advance(1);
  };

  const startAuto = () => {
    stopAuto();
    if (!canAutoPlay()) return;

    firstTimer = setTimeout(() => {
      if (!canAutoPlay()) return;
      tick();
      autoTimer = setInterval(tick, autoIntervalMs);
    }, firstAdvanceMs);
  };

  const pauseAuto = () => {
    isUserPaused = true;
    stopAuto();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isUserPaused = false;
      startAuto();
    }, resumeAfterMs);
  };

  const onPageScroll = () => {
    isPageScrolling = true;
    stopAuto();
    clearTimeout(pageScrollTimer);
    pageScrollTimer = setTimeout(() => {
      isPageScrolling = false;
      startAuto();
    }, 180);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      isInView = entry.isIntersecting;
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

  window.addEventListener('scroll', onPageScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  return {
    getPosition: loop.getPosition,
    advance: loop.advance,
    snapTo: loop.snapTo,
    pauseAuto,
  };
}
