/** Class Tailwind dùng chung cho header SiteNav — một track menu, hai trạng thái visual */

export const navShellClasses = [
  'group fixed top-0 inset-x-0 z-[55] w-full bg-white border-b border-border-subtle shadow-soft transition-all duration-300',
  '[&.nav-scrolled]:bg-white',
  '[&.nav-scrolled]:border-border-subtle [&.nav-scrolled]:shadow-soft',
];

export const navInnerClasses = [
  'flex items-center justify-between',
  'items-center gap-x-3 lg:gap-x-4 min-h-16',
  'px-4 min-[400px]:px-6 md:px-8 py-3 max-w-container-max-width mx-auto min-w-0',
];

export const navStartClasses = 'flex items-center min-h-10 shrink-0';

export const navCenterClasses =
  'hidden min-w-0 flex-1 items-center justify-center px-3 lg:flex xl:px-6 2xl:px-8';

/** Track menu desktop — giữ nguyên khung h-10 p-1 gap-0.5 khi đổi hero ↔ scrolled */
export const navMenuTrackClasses = [
  'inline-flex items-center gap-0 rounded-full box-border transition-all duration-300',
  'bg-transparent shadow-none backdrop-blur-none p-0'
];

/** Link menu — layout chung, màu chữ tách riêng inactive/active */
export const navMenuLinkBaseClasses = [
  'inline-flex items-center justify-center px-2.5 py-1.5 lg:px-3 lg:py-2 xl:px-3.5 xl:py-[9px] 2xl:px-4 rounded-full box-border',
  'border-0 bg-transparent shadow-none text-sm font-medium leading-none',
  'whitespace-nowrap no-underline transition-colors',
];

/** Chỉ mục chưa active — tránh !text-white ghi đè chữ đen trên nền trắng */
export const navMenuLinkInactiveClasses = [
  '!text-[#1f1b17] hover:!text-[#b07800]',
];

export const navMenuLinkActiveClasses = [
  '!bg-transparent !text-[#7a5900] shadow-none font-medium',
  'hover:!text-[#7a5900]'
];

export const navMenuLabelClasses =
  'inline-block leading-none tracking-normal text-center align-middle';

export const navEndClasses =
  'flex items-center min-h-10 shrink-0 justify-end gap-2';

export const navControlClasses =
  'inline-flex items-center justify-center h-auto min-h-10 box-border leading-none m-0 py-0';

export const navCtaClasses = [
  'min-[400px]:gap-2.5 px-3 min-[400px]:pl-5 min-[400px]:pr-1.5 rounded-full border-0 font-bold leading-none',
  'tracking-normal text-[#1f1b17] bg-accent-gold shadow-soft no-underline whitespace-nowrap',
  'transition-shadow text-[0.6875rem] min-[400px]:text-xs sm:text-sm',
];

export const navToggleClasses = [
  'relative z-10 w-10 p-0 rounded-xl border-0 cursor-pointer',
  'bg-white/90 text-[#1f1b17] backdrop-blur-xl shadow-soft',
  'group-[.nav-scrolled]:bg-white group-[.nav-scrolled]:text-[#1f1b17]',
  'group-[.nav-scrolled]:backdrop-blur-none lg:hidden',
];

export const navToggleIconClasses = 'material-symbols-outlined text-2xl leading-none';
