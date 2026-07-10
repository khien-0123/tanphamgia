/** Class Tailwind dùng chung — section Case study trang Khách hàng */

export const caseStudySection = 'py-12 md:py-20 bg-white border-b border-border-subtle';

/** Khung viền chung — căn đường kẻ dọc 50/50 giữa thẻ lớn và hàng phụ */
export const caseStudyStack = 'border border-ink-dark/10 overflow-hidden bg-white';

export const caseStudyFeaturedCopy = [
  'flex flex-col justify-center p-6 md:p-10 lg:p-12',
  'border-b md:border-b-0 md:border-r border-ink-dark/10',
];

export const caseStudyFeaturedImage = [
  'relative aspect-[16/10] md:aspect-auto md:min-h-[280px] lg:min-h-[320px]',
  'overflow-hidden bg-surface-muted',
];

export const caseStudySecondaryGrid = 'grid gap-0 md:grid-cols-2';

export const caseStudySecondaryCard = [
  'group relative isolate flex min-h-[272px] md:min-h-[304px] h-full w-full flex-col overflow-hidden',
  'no-underline text-white',
];

export const caseStudyCarouselShell = 'relative min-w-0 group/slider';

/** Carousel hàng phụ — 2 cột đều, khớp thẻ lớn */
export const caseStudyCarouselViewport = [
  'overflow-x-auto overflow-y-hidden scroll-smooth',
  'snap-x snap-mandatory overscroll-x-contain [-webkit-overflow-scrolling:touch]',
  '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
];

export const caseStudyCarouselTrack = 'flex min-w-0 items-stretch';

export const caseStudyCarouselSlide = [
  'snap-start snap-always shrink-0 min-w-0 self-stretch',
  'w-full md:w-1/2 md:max-w-[50%] md:flex-[0_0_50%]',
  'border-b md:border-b-0 border-ink-dark/10',
  'md:border-r md:last:border-r-0',
];

export const caseStudyDotBase = 'h-2 rounded-full transition-all duration-300';
export const caseStudyDotActive = 'w-6 bg-accent-teal';
export const caseStudyDotIdle = 'w-2 bg-ink-dark/15 hover:bg-ink-dark/30';
export const caseStudyDotIdleOnImage = 'w-2 bg-white/35 hover:bg-white/55';

/** Dots đè lên đáy ảnh carousel */
export const caseStudyCarouselDots =
  'pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2 md:bottom-4 [&_button]:pointer-events-auto';
