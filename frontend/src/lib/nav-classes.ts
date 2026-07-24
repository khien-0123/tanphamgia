/** Class Tailwind dùng chung cho header SiteNav — một track menu, hai trạng thái visual */

export const navShellClasses = [
  'group fixed top-0 inset-x-0 z-[55] w-full transition-all duration-300',
  'bg-transparent border-b border-transparent shadow-none backdrop-blur-none',
  '[&.nav-scrolled]:bg-white/80 [&.nav-scrolled]:backdrop-blur-xl',
  '[&.nav-scrolled]:border-border-subtle [&.nav-scrolled]:shadow-soft',
];

export const navInnerClasses = [
  'grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
  'items-center gap-x-3 lg:gap-x-4 min-h-16',
  'px-4 min-[400px]:px-6 md:px-8 py-3 max-w-container-max-width mx-auto min-w-0',
];

export const navStartClasses = 'flex items-center h-10 min-h-10 justify-self-start';

export const navCenterClasses =
  'hidden lg:flex items-center h-10 min-h-10 justify-self-center justify-center';

/** Track menu desktop — giữ nguyên khung h-10 p-1 gap-0.5 khi đổi hero ↔ scrolled */
export const navMenuTrackClasses = [
  'inline-flex items-center gap-0.5 h-10 p-1 rounded-full box-border',
  'border border-white/10 bg-ink-dark/75 backdrop-blur-md',
  'shadow-[0_8px_32px_rgba(0,0,0,0.24)]',
  'group-[.nav-scrolled]:border-transparent group-[.nav-scrolled]:bg-transparent',
  'group-[.nav-scrolled]:shadow-none group-[.nav-scrolled]:backdrop-blur-none',
  'group-[.nav-scrolled]:rounded-none',
];

/** Link menu — layout chung, màu chữ tách riêng inactive/active */
export const navMenuLinkBaseClasses = [
  'inline-flex items-center justify-center h-8 px-3.5 rounded-full box-border',
  'border-0 bg-transparent shadow-none text-sm font-medium leading-none',
  'whitespace-nowrap no-underline transition-colors',
];

/** Chỉ mục chưa active — tránh !text-white ghi đè chữ đen trên nền trắng */
export const navMenuLinkInactiveClasses = [
  '!text-white/85 hover:!text-white',
  'group-[.nav-scrolled]:!text-on-surface group-[.nav-scrolled]:hover:!text-accent-gold',
];

export const navMenuLinkActiveClasses = [
  '!bg-white !text-ink-dark shadow-[0_1px_4px_rgba(14,38,64,0.12)] font-medium',
  'hover:!text-ink-dark',
  'group-[.nav-scrolled]:!bg-transparent group-[.nav-scrolled]:!text-accent-gold',
  'group-[.nav-scrolled]:shadow-none group-[.nav-scrolled]:hover:!text-accent-gold',
];

export const navMenuLabelClasses =
  'inline-block leading-none tracking-normal text-center align-middle';

export const navEndClasses =
  'flex items-center h-10 min-h-10 justify-self-end justify-end gap-2';

export const navControlClasses =
  'inline-flex items-center justify-center h-10 box-border leading-none m-0 py-0';

export const navCtaClasses = [
  'px-4 min-[400px]:px-5 rounded-full border-0 font-bold leading-none',
  'tracking-normal text-ink-dark bg-accent-gold shadow-soft no-underline whitespace-nowrap',
  'transition-shadow text-[0.6875rem] min-[400px]:text-xs sm:text-sm',
];

export const navToggleClasses = [
  'relative z-10 w-10 p-0 rounded-xl border-0 cursor-pointer',
  'bg-white/90 text-ink-dark backdrop-blur-xl shadow-soft',
  'group-[.nav-scrolled]:bg-white group-[.nav-scrolled]:text-ink-dark',
  'group-[.nav-scrolled]:backdrop-blur-none lg:hidden',
];

export const navToggleIconClasses = 'material-symbols-outlined text-2xl leading-none';
