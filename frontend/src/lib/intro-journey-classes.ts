/** Class Tailwind cho HomeIntro journey (tick + ảnh trượt dọc) */

export const introJourneyStepClasses = [
  'flex w-full items-start gap-2 text-left text-sm leading-snug m-0 p-0 border-0 bg-transparent cursor-pointer',
  'text-ink-dark/62 font-medium transition-colors duration-[550ms]',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-gold',
  'focus-visible:outline-offset-2 focus-visible:rounded-sm',
  'group-[.is-journey-active]/journey:text-ink-dark group-[.is-journey-active]/journey:font-semibold',
];

export const introJourneyIconClasses = [
  'shrink-0 flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold leading-none',
  'border-[1.5px] border-ink-dark/32 text-ink-dark/50',
  'transition-[background-color,border-color,color] duration-[550ms]',
  'group-[.is-journey-active]/journey:bg-ink-dark group-[.is-journey-active]/journey:border-ink-dark',
  'group-[.is-journey-active]/journey:text-white',
];

export const introJourneyTrackClasses = [
  'absolute top-0 left-0 w-full flex flex-col translate-z-0 [backface-visibility:hidden]',
  'h-[calc(100%*var(--journey-steps,5))]',
  '[&.is-journey-track-animating]:transition-transform [&.is-journey-track-animating]:duration-[800ms]',
  '[&.is-journey-track-animating]:ease-[cubic-bezier(0.22,1,0.36,1)]',
  '[&.is-journey-track-animating]:will-change-transform',
  'motion-reduce:[&.is-journey-track-animating]:transition-none',
];

export const introJourneySlideClasses =
  'flex-[0_0_var(--journey-step-height,20%)] w-full overflow-hidden';
