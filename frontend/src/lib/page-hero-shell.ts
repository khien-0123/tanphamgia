/** Banner chuẩn — chiều cao cố định, đồng bộ mọi trang con (trừ trang chủ). */

import { heroPill } from './section-eyebrow';

export const PAGE_HERO_HEIGHT = 'h-[26rem] max-md:h-[22rem]';

export const pageHeroShell =
  `relative flex ${PAGE_HERO_HEIGHT} shrink-0 flex-col overflow-hidden bg-[#0d1b3a] text-white`;

export const pageHeroInner =
  'relative z-10 mx-auto flex h-full w-full max-w-container-max-width min-h-0 flex-col justify-end gap-4 overflow-hidden px-6 pb-12 pt-28 md:gap-5 md:px-8 md:pb-16 md:pt-32';

/** Căn giữa dọc khối chữ — trừ chỗ nav sticky qua pt */
export const pageHeroInnerCenter =
  'relative z-10 mx-auto flex h-full w-full max-w-container-max-width min-h-0 flex-col justify-center gap-4 overflow-hidden px-6 pb-10 pt-28 md:gap-5 md:px-8 md:pb-12 md:pt-32';

export const pageHeroStats =
  'flex flex-wrap items-baseline gap-x-6 gap-y-2 max-md:gap-x-4 max-md:gap-y-1.5';

export const pageHeroImage = 'absolute inset-0 h-full w-full object-cover';

export const pageHeroScrim =
  'absolute inset-0 bg-black/40 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(6,14,32,0.55),rgba(6,14,32,0.15)_58%,rgba(6,14,32,0.45))] before:absolute before:inset-x-0 before:bottom-0 before:h-44 before:bg-gradient-to-t before:from-[#050d1f]/85 before:to-transparent';

/** Pill nhỏ trên banner — category / field (cùng cỡ breadcrumb) */
export const pageHeroEyebrow = heroPill;

/** Pill breadcrumb trên banner — nhỏ */
export const pageHeroBreadcrumb = `mb-6 ${heroPill} sm:mb-7`;

/** Cột chữ chung — cùng mép trái / bề rộng mọi trang con */
export const pageHeroCopy = 'w-full max-w-[42rem] text-left';

/** Tiêu đề H1 — chuẩn trang Giới thiệu */
export const pageHeroTitle =
  'w-full text-left text-[clamp(1.35rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.035em] text-white';

/** Mô tả dưới tiêu đề — chuẩn trang Giới thiệu */
export const pageHeroDescription =
  'mt-3 w-full text-left line-clamp-3 text-base leading-relaxed text-white/80 md:mt-4 md:text-lg';
