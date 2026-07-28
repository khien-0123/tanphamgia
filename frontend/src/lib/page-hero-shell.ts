/** Banner chuẩn cho mọi trang con — theo cấu trúc hero trang Giới thiệu. */

export const pageHeroShell =
  'relative flex min-h-[32rem] flex-col overflow-hidden bg-[#0d1b3a] text-white max-md:min-h-[30rem]';

export const pageHeroInner =
  'relative z-10 mx-auto flex w-full max-w-container-max-width flex-1 flex-col justify-between gap-5 px-6 pb-7 pt-40 md:gap-6 md:px-8 md:pb-8 md:pt-44';

export const pageHeroStats =
  'flex flex-wrap items-baseline gap-x-6 gap-y-2 max-md:gap-x-4 max-md:gap-y-1.5';

export const pageHeroImage = 'absolute inset-0 h-full w-full object-cover';

export const pageHeroScrim =
  'absolute inset-0 bg-black/40 after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(6,14,32,0.55),rgba(6,14,32,0.15)_58%,rgba(6,14,32,0.45))] before:absolute before:inset-x-0 before:bottom-0 before:h-44 before:bg-gradient-to-t before:from-[#050d1f]/85 before:to-transparent';

export const pageHeroEyebrow =
  'font-eyebrow text-xs uppercase tracking-[0.2em] font-medium text-white/65';

export const pageHeroTitle =
  'max-w-[20ch] text-balance text-[clamp(1.5rem,6.5vw,3.25rem)] font-bold leading-none tracking-[-0.035em] text-white';

export const pageHeroDescription =
  'text-pretty max-w-2xl text-sm leading-relaxed text-white/80 max-md:line-clamp-3 md:text-base lg:text-lg';
