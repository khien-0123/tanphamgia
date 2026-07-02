/** Carousel transform vòng lặp — clone slide đầu/cuối để chuyển mượt */
export type LoopCarouselController = {
  total: number;
  getPosition: () => number;
  getLogicalIndex: () => number;
  advance: (delta: number, animate?: boolean) => void;
  snapTo: (position: number, animate?: boolean) => void;
  getSlideWidth: () => number;
};

type LoopCarouselOptions = {
  track: HTMLElement;
  viewport: HTMLElement;
  itemSelector: string;
};

export function initLoopCarousel({
  track,
  viewport,
  itemSelector,
}: LoopCarouselOptions): LoopCarouselController | null {
  if (track.dataset.carouselLoopReady === 'true') return null;
  track.dataset.carouselLoopReady = 'true';

  const originals = [...track.querySelectorAll<HTMLElement>(itemSelector)].filter(
    (el) => !el.dataset.carouselClone,
  );
  const total = originals.length;
  if (total < 2) return null;

  const firstClone = originals[0].cloneNode(true) as HTMLElement;
  const lastClone = originals[total - 1].cloneNode(true) as HTMLElement;

  for (const clone of [firstClone, lastClone]) {
    clone.setAttribute('aria-hidden', 'true');
    clone.dataset.carouselClone = 'true';
    clone.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
  }

  track.insertBefore(lastClone, originals[0]);
  track.appendChild(firstClone);

  let position = 1;

  const getSlides = () =>
    [...track.children].filter((el): el is HTMLElement => el instanceof HTMLElement);

  const slideWidth = () => Math.round(viewport.getBoundingClientRect().width) || 0;

  /** Gán chiều rộng slide theo pixel — tránh flex % sai trong grid */
  const syncSlideSizes = () => {
    const w = slideWidth();
    if (w <= 0) return false;

    getSlides().forEach((slide) => {
      slide.style.flex = `0 0 ${w}px`;
      slide.style.width = `${w}px`;
      slide.style.minWidth = `${w}px`;
      slide.style.maxWidth = `${w}px`;
    });

    return true;
  };

  const applyTransform = (animate: boolean) => {
    const w = slideWidth();
    if (w <= 0) return;

    track.style.transition = animate ? 'transform 0.45s ease' : 'none';
    track.style.transform = `translate3d(-${position * w}px, 0, 0)`;
  };

  const normalize = () => {
    if (position === 0) {
      position = total;
      applyTransform(false);
    } else if (position === total + 1) {
      position = 1;
      applyTransform(false);
    }
  };

  const align = () => {
    if (!syncSlideSizes()) return;
    applyTransform(false);
  };

  track.addEventListener('transitionend', (e) => {
    if (e.target !== track || e.propertyName !== 'transform') return;
    normalize();
  });

  const getLogicalIndex = () => {
    if (position <= 0) return total - 1;
    if (position >= total + 1) return 0;
    return position - 1;
  };

  const advance = (delta: number, animate = true) => {
    position += delta;
    applyTransform(animate);
  };

  const snapTo = (nextPosition: number, animate = true) => {
    position = nextPosition;
    applyTransform(animate);
  };

  const boot = () => {
    if (!syncSlideSizes()) {
      requestAnimationFrame(boot);
      return;
    }
    applyTransform(false);
  };

  boot();

  const resizeObserver = new ResizeObserver(() => align());
  resizeObserver.observe(viewport);

  return {
    total,
    getPosition: () => position,
    getLogicalIndex,
    advance,
    snapTo,
    getSlideWidth: slideWidth,
  };
}
