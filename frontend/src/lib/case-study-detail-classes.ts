/** Class Tailwind — trang chi tiết case study */

import { sectionPy } from './section-rhythm';

export const caseStudyDetailSectionLg = sectionPy;

export const caseStudyDetailStatsGrid = [
  'grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-0 sm:gap-y-0',
];

/** Grid 2 cột — số liệu + mô tả ngắn (ví dụ 650 sản phẩm | Đồng phục Scrub…) */
export const caseStudyDetailStatsGridTwo = [
  'grid w-fit max-w-full mx-auto grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-4 items-end',
  'sm:gap-x-6',
];

export const caseStudyDetailStatCell = [
  'text-center px-1 sm:px-6',
  'max-sm:[&:nth-child(odd)]:border-r max-sm:border-ink-dark/10',
  'sm:border-r sm:border-ink-dark/10 sm:last:border-r-0',
];

export const caseStudyDetailStatCellSpan = 'max-sm:col-span-2 max-sm:[&:nth-child(odd)]:border-r-0';

export const caseStudyDetailStatCellBordered = [
  'text-center pr-4 sm:pr-6',
  'border-r border-ink-dark/10',
];

export const caseStudyDetailStatValue =
  'text-3xl sm:text-4xl md:text-5xl font-bold text-accent-gold tabular-nums leading-none';

/** Giá trị dạng chữ dài — giữ 1 dòng trên mobile */
export const caseStudyDetailStatValueText = [
  'font-bold text-accent-gold leading-none whitespace-nowrap',
  'text-[clamp(0.65rem,2.65vw,2.25rem)] md:text-4xl lg:text-5xl',
];

/** Cặp 2 cột — cùng cỡ chữ hàng 1 để căn thẳng số và mô tả */
export const caseStudyDetailStatValuePair = [
  'font-bold text-accent-gold leading-none whitespace-nowrap',
  'text-[clamp(1.125rem,4.5vw,2.25rem)] md:text-4xl lg:text-5xl',
];

export const caseStudyDetailStatLabel =
  'mt-2 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-text-muted';

export const caseStudyNarrativeHeaderGrid =
  'flex flex-col gap-3 md:gap-4 mb-8 md:mb-10';

export const caseStudyNarrativeBadge = [
  'inline-flex items-center justify-center min-w-9 h-9 px-2',
  'rounded-full bg-accent-gold text-ink-dark',
  'text-xs font-extrabold tracking-wide',
];

export const caseStudyNarrativeTitle =
  'm-0 text-2xl md:text-3xl font-bold text-ink-dark leading-tight';

export const caseStudyNarrativeLead =
  'm-0 text-sm md:text-base text-text-muted leading-relaxed text-pretty md:max-w-[52ch]';

export const caseStudyNarrativeListItem = [
  'relative pl-[0.9rem] text-sm md:text-base leading-relaxed text-ink-dark/85',
  'before:content-[""] before:absolute before:left-0 before:top-[0.62rem]',
  'before:w-[0.3rem] before:h-[0.3rem] before:rounded-full before:bg-accent-gold',
];

export const caseStudyNarrativeResultItem = [
  'relative pl-[1.35rem] text-sm md:text-base leading-relaxed text-ink-dark/85',
  'before:content-["✓"] before:absolute before:left-0 before:top-[0.1rem]',
  'before:text-accent-gold before:text-xs before:font-bold',
];

export const caseStudyNarrativePullResult = [
  'text-lg md:text-xl font-bold text-ink-dark leading-snug',
  'border-l-[3px] border-accent-gold pl-4 mb-4',
];
