/** Biến thể giao diện cho 4 nhóm giải pháp (1–4). */
export type SolutionTheme = 1 | 2 | 3 | 4;

const issueCardBorder: Record<SolutionTheme, string> = {
  1: 'border-[#d8d7cf]',
  2: 'border-[#ecece7]',
  3: 'border-[#ecece7]',
  4: 'border-[#ecece7]',
};

const stepItemBorder: Record<SolutionTheme, string> = {
  1: 'border-[#d8d7cf]',
  2: 'border-[#ecece7]',
  3: 'border-[#e8e1c2]',
  4: 'border-[#ecece7]',
};

const accentBeforeWidth: Record<SolutionTheme, string> = {
  1: 'before:w-[3px]',
  2: 'before:w-1',
  3: 'before:w-[3px]',
  4: 'before:w-[3px]',
};

const accentBeforeBg: Record<SolutionTheme, string> = {
  1: 'before:bg-accent-gold',
  2: 'before:bg-accent-gold',
  3: 'before:bg-accent-gold',
  4: 'before:bg-accent-gold',
};

const numBadge: Record<SolutionTheme, string> = {
  1: 'bg-accent-gold text-[#111]',
  2: 'bg-accent-gold text-[#111]',
  3: 'bg-accent-gold text-[#111]',
  4: 'bg-accent-gold text-[#111]',
};

const heroGrid: Record<SolutionTheme, string> = {
  1: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-[1.2fr_1fr] lg:items-stretch',
  2: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-[1.4fr_1fr] lg:gap-10',
  3: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-2',
  4: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-2 lg:gap-12',
};

const heroImageDetail: Record<SolutionTheme, string> = {
  1: 'w-full aspect-[4/3] object-cover rounded-lg h-full min-h-80 border-2 border-accent-gold',
  2: 'w-full aspect-[4/3] object-cover rounded-lg',
  3: 'w-full aspect-[4/3] object-cover rounded-lg',
  4: 'w-full aspect-[4/3] object-cover rounded-lg',
};

const issueGrid: Record<SolutionTheme, string> = {
  1: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
  2: 'grid grid-cols-1 gap-[0.9rem] min-[1200px]:grid-cols-2',
  3: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
  4: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
};

const caseCard: Record<SolutionTheme, string> = {
  1: 'bg-[#111] text-white min-h-[190px] relative overflow-hidden rounded-xl',
  2: 'bg-[#111] text-white min-h-[190px] relative overflow-hidden rounded-xl',
  3: 'bg-[#111] text-white min-h-[230px] relative overflow-hidden rounded-xl border border-accent-gold',
  4: 'bg-[#111] text-white min-h-[190px] relative overflow-hidden rounded-xl',
};

export function getSolutionTheme(theme: SolutionTheme) {
  return {
    page: 'bg-white text-[#111]',
    section: 'py-8 md:py-12 bg-white [&_h2]:text-balance',
    heroGrid: heroGrid[theme],
    heroImage: 'w-full aspect-[4/3] object-cover rounded-lg',
    heroImageDetail: heroImageDetail[theme],
    issueGrid: issueGrid[theme],
    issueCard: `bg-white border rounded-xl p-4 overflow-hidden text-sm leading-relaxed ${issueCardBorder[theme]} [&_p]:m-0`,
    issueNum: `float-left mr-3 mt-[1em] inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold md:float-none md:mr-0 md:mt-0 md:mb-2 ${numBadge[theme]}`,
    stepItem: `relative bg-white border rounded-xl py-[0.9rem] pl-[1.05rem] pr-[0.9rem] overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 ${accentBeforeWidth[theme]} ${accentBeforeBg[theme]} ${stepItemBorder[theme]}`,
    stepNum: `inline-flex w-[1.4rem] h-[1.4rem] items-center justify-center rounded-full text-[0.72rem] font-bold mb-[0.4rem] ${numBadge[theme]}`,
    caseCard: caseCard[theme],
  };
}

export const solutionIndustryList =
  'flex flex-wrap gap-x-8 gap-y-2 m-0 p-0 list-none [&_li]:flex-[1_1_14rem] [&_li]:max-w-full';

export const solutionCase = {
  grid: 'grid grid-cols-1 gap-[0.85rem] min-[992px]:grid-cols-3',
  link: 'block no-underline text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.35)] group',
  img: 'absolute inset-0 w-full h-full object-cover opacity-[0.42] transition-opacity duration-200 group-hover:opacity-[0.52]',
  body: 'relative z-[1] p-4 flex flex-col justify-end min-h-[190px]',
  more: 'inline-block mt-[0.65rem] text-xs font-bold text-accent-gold tracking-wide',
};

export const solutionStep = {
  grid: 'grid grid-cols-1 gap-3 min-[992px]:grid-cols-3',
};

export const solutionBoxCompact = {
  grid: 'grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-4',
  item: 'border border-border-subtle bg-white transition-[border-color,background-color] duration-200 hover:border-accent-gold rounded-xl overflow-hidden',
  summary: 'list-none cursor-pointer flex flex-col gap-[0.45rem] p-3 no-underline',
  media: 'aspect-video overflow-hidden border border-surface-muted m-0',
  number: 'inline-block w-fit text-[0.68rem] font-bold text-accent-teal tracking-wider',
  title: 'font-bold text-[0.95rem] leading-snug text-ink-dark m-0',
  desc: 'text-[0.78rem] leading-snug text-text-muted m-0',
  link: 'text-xs font-bold text-ink-dark no-underline hover:text-accent-teal',
};

/** Catalog giải pháp trên trang chủ — 2 cột mobile, 4 cột desktop */
export const solutionBoxHome = {
  grid: 'grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4',
  item: 'bg-white flex flex-col min-h-0 group',
  summary:
    'flex flex-col flex-1 h-full min-h-0 gap-2 sm:gap-2.5 no-underline',
  media:
    'aspect-square overflow-hidden rounded-md shrink-0 m-0',
  number:
    'inline-block w-fit font-extrabold text-2xl sm:text-3xl xl:text-4xl text-accent-gold leading-none tabular-nums',
  title:
    'font-bold text-base leading-tight sm:text-xl sm:leading-snug text-ink-dark m-0 shrink-0',
  desc: 'text-xs sm:text-sm leading-relaxed text-text-muted m-0 line-clamp-2',
  link: 'text-[0.625rem] sm:text-[0.6875rem] font-semibold text-ink-dark no-underline hover:text-accent-teal mt-auto shrink-0 pt-0.5',
};
