/** Vuốt ngang carousel vòng lặp — không chặn vuốt dọc trang */
type CarouselSwipeOptions = {
  getPosition: () => number;
  advance: (delta: number, animate?: boolean) => void;
  snapTo: (position: number, animate?: boolean) => void;
  onHorizontalInteract?: () => void;
};

export function bindCarouselSwipe(
  viewport: HTMLElement,
  track: HTMLElement,
  options: CarouselSwipeOptions,
) {
  const LOCK_PX = 10;
  const COMMIT_RATIO = 0.18;
  const COMMIT_MIN_PX = 36;

  let startX = 0;
  let startY = 0;
  let startPosition = 0;
  let direction: 'horizontal' | 'vertical' | null = null;
  let didSwipe = false;

  const offsetPx = (dx: number) => {
    const width = viewport.getBoundingClientRect().width || 1;
    return -(startPosition * width) + dx;
  };

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startPosition = options.getPosition();
    direction = null;
    didSwipe = false;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;

    if (direction === null) {
      if (Math.abs(dx) < LOCK_PX && Math.abs(dy) < LOCK_PX) return;
      direction = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
    }

    if (direction === 'vertical') return;

    e.preventDefault();
    track.style.transition = 'none';
    track.style.transform = `translate3d(${offsetPx(dx)}px, 0, 0)`;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (direction !== 'horizontal') {
      direction = null;
      return;
    }

    options.onHorizontalInteract?.();

    const dx = e.changedTouches[0].clientX - startX;
    const width = viewport.getBoundingClientRect().width || 1;
    const threshold = Math.max(COMMIT_MIN_PX, width * COMMIT_RATIO);

    if (dx <= -threshold) {
      didSwipe = true;
      options.advance(1);
    } else if (dx >= threshold) {
      didSwipe = true;
      options.advance(-1);
    } else {
      options.snapTo(startPosition);
    }

    direction = null;
  };

  viewport.addEventListener('touchstart', onTouchStart, { passive: true });
  viewport.addEventListener('touchmove', onTouchMove, { passive: false });
  viewport.addEventListener('touchend', onTouchEnd, { passive: true });
  viewport.addEventListener('touchcancel', onTouchEnd, { passive: true });

  viewport.addEventListener(
    'click',
    (e) => {
      if (!didSwipe) return;
      e.preventDefault();
      e.stopPropagation();
      didSwipe = false;
    },
    true,
  );
}
