/** Shell hero trang con — desktop 504px, mobile 22rem đồng bộ mọi trang */

export const pageHeroShell =
  'relative h-[504px] overflow-hidden bg-ink-dark max-md:h-[22rem] max-md:min-h-[22rem]';

export const pageHeroInner =
  'relative z-10 mx-auto flex h-full max-w-container-max-width flex-col justify-between px-6 pb-10 pt-28 max-md:gap-3 max-md:pb-5 max-md:pt-24 md:px-8 md:pt-32';

export const pageHeroStats =
  'flex flex-wrap items-baseline gap-x-6 gap-y-2 max-md:gap-x-4 max-md:gap-y-1.5';

export const pageHeroImage = 'absolute inset-0 h-full w-full object-cover';

export const pageHeroScrim =
  'absolute inset-0 bg-[linear-gradient(to_top,rgba(11,31,53,0.95),rgba(11,31,53,0.35)_60%,rgba(11,31,53,0.7))]';

export const pageHeroEyebrow =
  'font-eyebrow text-xs uppercase tracking-[0.2em] font-medium text-white/65';

export const pageHeroTitle =
  'max-w-[20ch] text-balance text-[clamp(1.5rem,6.5vw,3.25rem)] font-bold leading-none tracking-[-0.035em] text-white';

export const pageHeroDescription =
  'text-pretty max-w-2xl text-sm leading-relaxed text-white/80 max-md:line-clamp-3 md:text-base lg:text-lg';
