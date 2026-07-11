/** Class Tailwind — thẻ dự án (ảnh full + gradient navy đáy + CTA) */

import { imageRadius } from './image-frame';

export const projectCardSectionClasses = 'bg-surface-alt py-8 md:py-12';

export const projectCardGrid3Classes =
  'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6';

export const projectCardGrid4Classes =
  'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6';

export const projectCardLinkClasses = [
  'project-card group relative isolate flex flex-col overflow-hidden',
  imageRadius,
  'min-h-[380px] sm:min-h-[400px] lg:min-h-[420px]',
  'no-underline text-white shadow-card',
  'transition-[transform,box-shadow] duration-300 ease-out',
  'hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(14,38,64,0.28)]',
];

export const projectCardImageClasses = [
  'absolute inset-0 z-0 h-full w-full object-cover object-center',
  'transition-transform duration-500 ease-out group-hover:scale-[1.05]',
];

export const projectCardScrimClasses =
  'project-card-scrim pointer-events-none absolute inset-x-0 bottom-0 z-[1]';

export const projectCardBodyClasses = [
  'relative z-[2] mt-auto flex w-full flex-col gap-2.5 p-5 md:p-6',
];

export const projectCardTitleClasses =
  'm-0 text-lg font-bold leading-snug text-balance lg:text-xl';

export const projectCardFieldClasses =
  'm-0 mt-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/65';

export const projectCardStatsClasses =
  'm-0 text-xs leading-relaxed text-white/80 line-clamp-2 md:text-sm';

export const projectCardCtaClasses = [
  'mt-1 inline-flex items-center gap-2',
  'text-sm font-bold text-white',
  'transition-colors duration-200 group-hover:text-accent-gold',
];

export const projectCardCtaIconClasses =
  'h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1';
