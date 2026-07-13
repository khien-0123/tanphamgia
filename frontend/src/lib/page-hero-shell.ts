/** Shell hero trang con — đồng bộ chiều cao 504px với trang Giới thiệu */

export const pageHeroShell =
  'relative h-[504px] overflow-hidden bg-ink-dark max-[640px]:h-auto max-[640px]:min-h-[460px]';

export const pageHeroInner =
  'relative z-10 mx-auto flex h-full max-w-container-max-width flex-col justify-between px-6 pb-10 pt-28 md:px-8 md:pt-32';

export const pageHeroImage = 'absolute inset-0 h-full w-full object-cover opacity-[0.42]';

export const pageHeroScrim =
  'absolute inset-0 bg-[linear-gradient(to_top,rgba(11,31,53,0.95),rgba(11,31,53,0.35)_60%,rgba(11,31,53,0.7))]';

export const pageHeroEyebrow =
  'font-eyebrow text-xs uppercase tracking-[0.2em] font-medium text-white/65';

export const pageHeroTitle =
  'max-w-[20ch] text-balance text-[clamp(1.875rem,3.9vw,3.25rem)] font-bold leading-none tracking-[-0.035em] text-white';

export const pageHeroDescription = 'text-pretty max-w-2xl text-base leading-relaxed text-white/80 md:text-lg';
