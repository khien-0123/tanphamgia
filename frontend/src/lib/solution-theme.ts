/** Biến thể giao diện cho 4 nhóm giải pháp (1–4). */
import { imageRadius } from './image-frame';
import { sectionPy } from './section-rhythm';

export type SolutionTheme = 1 | 2 | 3 | 4;

const issueCardBorder: Record<SolutionTheme, string> = {
  1: 'border-border-subtle',
  2: 'border-border-subtle',
  3: 'border-border-subtle',
  4: 'border-border-subtle',
};

const stepItemBorder: Record<SolutionTheme, string> = {
  1: 'border-border-subtle',
  2: 'border-border-subtle',
  3: 'border-border-subtle',
  4: 'border-border-subtle',
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
  1: 'bg-accent-gold text-ink-dark',
  2: 'bg-accent-gold text-ink-dark',
  3: 'bg-accent-gold text-ink-dark',
  4: 'bg-accent-gold text-ink-dark',
};

const heroGrid: Record<SolutionTheme, string> = {
  1: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-[1.2fr_1fr] lg:items-stretch',
  2: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-[1.4fr_1fr] lg:gap-10',
  3: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-2',
  4: 'grid gap-6 md:gap-10 items-start mt-5 lg:grid-cols-2 lg:gap-12',
};

const heroImageDetail: Record<SolutionTheme, string> = {
  1: `w-full aspect-[4/5] object-cover object-top ${imageRadius} h-full min-h-80 border-2 border-accent-gold`,
  2: `w-full aspect-[4/5] object-cover object-top ${imageRadius}`,
  3: `w-full aspect-[4/5] object-cover object-top ${imageRadius}`,
  4: `w-full aspect-[4/5] object-cover object-top ${imageRadius}`,
};

const issueGrid: Record<SolutionTheme, string> = {
  1: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
  2: 'grid grid-cols-1 gap-[0.9rem] min-[1200px]:grid-cols-2',
  3: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
  4: 'grid grid-cols-1 gap-[0.9rem] md:grid-cols-2 min-[1200px]:grid-cols-4',
};

const caseCard: Record<SolutionTheme, string> = {
  1: `bg-ink-dark text-white min-h-[190px] relative overflow-hidden ${imageRadius}`,
  2: `bg-ink-dark text-white min-h-[190px] relative overflow-hidden ${imageRadius}`,
  3: `bg-ink-dark text-white min-h-[230px] relative overflow-hidden ${imageRadius} border border-accent-gold`,
  4: `bg-ink-dark text-white min-h-[190px] relative overflow-hidden ${imageRadius}`,
};

export function getSolutionTheme(theme: SolutionTheme) {
  return {
    page: 'bg-white text-ink-dark',
    section: `${sectionPy} bg-white [&_h2]:text-balance`,
    heroGrid: heroGrid[theme],
    heroImage: `w-full aspect-[4/5] object-cover object-top ${imageRadius}`,
    heroImageDetail: heroImageDetail[theme],
    issueGrid: issueGrid[theme],
    issueCard: `bg-white border rounded-xl p-4 overflow-hidden text-sm leading-relaxed ${issueCardBorder[theme]} [&_p]:m-0`,
    issueNum: `float-left mr-3 mt-[1em] inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold md:float-none md:mr-0 md:mt-0 md:mb-2 ${numBadge[theme]}`,
    stepItem: `relative bg-white border rounded-xl py-[0.9rem] pl-[1.05rem] pr-[0.9rem] overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 ${accentBeforeWidth[theme]} ${accentBeforeBg[theme]} ${stepItemBorder[theme]}`,
    stepNum: `inline-flex w-[1.4rem] h-[1.4rem] items-center justify-center rounded-full text-[0.72rem] font-bold mb-[0.4rem] ${numBadge[theme]}`,
    caseCard: caseCard[theme],
  };
}

/** Mosaic 4 khối — section Giải pháp trang chủ */
export const solutionHomeMosaic = {
  section: `relative z-[2] ${sectionPy} bg-white text-ink-dark`,
  headerWrap: 'text-left mb-8 md:mb-10 max-w-3xl',
  title:
    'font-headline-md font-bold text-ink-dark text-2xl md:text-4xl leading-tight tracking-tight text-balance m-0',
  lead:
    'text-pretty text-text-muted text-sm md:text-base leading-relaxed mt-4 m-0',
  grid:
    'solutions-mosaic__grid grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8',
  cardWrap:
    'relative overflow-hidden rounded-[8px] bg-white isolate shadow-[0_12px_40px_rgba(14,38,64,0.14)]',
  cardLink:
    'group relative block h-full min-h-[260px] md:min-h-[280px] lg:min-h-[300px] no-underline text-white overflow-hidden rounded-[8px]',
  media:
    'absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]',
  scrim: 'solutions-mosaic-scrim pointer-events-none absolute inset-x-0 bottom-0 z-[1]',
  body: 'solutions-mosaic-body absolute inset-x-0 bottom-0 z-[2] p-4 md:p-5 lg:p-6 flex flex-col gap-2',
  bodyCompact: 'solutions-mosaic-body absolute inset-x-0 bottom-0 z-[2] p-4 md:p-5 flex flex-col gap-2',
  titleInCard:
    'm-0 font-headline-md font-bold text-white text-xl md:text-2xl leading-tight tracking-tight',
  titleInCardCompact:
    'm-0 font-headline-md font-bold text-white text-xl md:text-2xl leading-tight tracking-tight',
  revealWrap: 'solutions-mosaic-reveal',
  revealInner: 'solutions-mosaic-reveal__inner flex flex-col gap-2',
  revealInnerCompact: 'solutions-mosaic-reveal__inner flex flex-col gap-2',
  desc: 'm-0 text-white/90 text-xs md:text-sm leading-relaxed',
  descCompact: 'm-0 text-white/90 text-xs md:text-sm leading-relaxed line-clamp-2',
  bullets: 'm-0 p-0 list-none flex flex-col gap-1.5 text-xs md:text-sm text-white/80',
  bulletsCompact:
    'm-0 p-0 list-none flex flex-col gap-1.5 text-xs md:text-sm text-white/85 min-w-0',
  bulletItem:
    'flex gap-2 before:content-["—"] before:text-accent-gold before:shrink-0 leading-snug',
  bulletItemCompact:
    'flex min-w-0 gap-2 before:content-["—"] before:text-accent-gold before:shrink-0 leading-snug',
  cta: 'inline-flex w-fit text-xs md:text-sm font-bold text-white mt-0.5',
  ctaCompact: 'inline-flex w-fit text-xs md:text-sm font-bold text-white mt-0.5',
  spanLarge:
    'md:col-span-2 [&_a]:md:min-h-[300px] [&_a]:lg:min-h-[320px]',
  spanTall:
    'md:col-span-1 [&_a]:md:min-h-[300px] [&_a]:lg:min-h-[320px]',
  spanWide:
    'md:col-span-2 [&_a]:md:min-h-[280px] [&_a]:lg:min-h-[300px]',
};
