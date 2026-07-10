/** Class Tailwind dùng chung cho nút mũi tên slider */

export const sliderArrowBase = [
  'absolute top-1/2 -translate-y-1/2 z-10',
  'flex items-center justify-center',
  'w-9 h-9 md:w-10 md:h-10 rounded-full',
  'border border-ink-dark/12 bg-white/92 text-ink-dark',
  'cursor-pointer opacity-0 pointer-events-none backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  'transition-[opacity,background,box-shadow] duration-200',
  'group-hover/slider:opacity-100 group-hover/slider:pointer-events-auto',
  'hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
  'disabled:opacity-0 disabled:pointer-events-none',
];

export const sliderArrowPrev = 'left-[-0.5rem] md:left-[-1rem]';

export const sliderArrowNext = 'right-[-0.5rem] md:right-[-1rem]';

/** Nút mũi tên nằm trong khung — dùng carousel có viền */
export const sliderArrowPrevInset = 'left-3 md:left-4';

export const sliderArrowNextInset = 'right-3 md:right-4';

/** Nút trong vùng đệm ngoài track — không đè logo/ảnh */
export const sliderArrowPrevGutter = 'left-1 md:left-1.5';

export const sliderArrowNextGutter = 'right-1 md:right-1.5';

/** Nút đặc — nền trắng, ẩn mặc định, hiện khi hover carousel */
export const sliderArrowSolidBase = [
  'absolute top-1/2 -translate-y-1/2 z-10',
  'flex items-center justify-center',
  'w-9 h-9 md:w-10 md:h-10 rounded-full',
  'border border-ink-dark/12 bg-white text-ink-dark',
  'cursor-pointer opacity-0 pointer-events-none shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  'transition-[opacity,box-shadow] duration-200',
  'group-hover/slider:opacity-100 group-hover/slider:pointer-events-auto',
  'hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
  'disabled:opacity-0 disabled:pointer-events-none',
];
