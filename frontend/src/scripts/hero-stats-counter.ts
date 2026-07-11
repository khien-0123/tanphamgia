/** Counter số liệu hero — đếm từ 0 mỗi lần load trang chủ */
const DURATION_MS = 3000;
const STAGGER_MS = 200;

interface ParsedHeroStat {
  target: number;
  unit: '' | 'K' | 'M';
  plus: boolean;
}

interface ActiveCounter {
  el: HTMLElement;
  parsed: ParsedHeroStat;
  delay: number;
}

let rafId = 0;

function parseHeroStatValue(raw: string): ParsedHeroStat | null {
  const match = raw.trim().match(/^([\d.,]+)([KkMm])?(\+)?$/);
  if (!match) return null;

  return {
    target: parseFloat(match[1].replace(',', '.')),
    unit: (match[2]?.toUpperCase() as 'K' | 'M') || '',
    plus: Boolean(match[3]),
  };
}

function formatHeroStat(value: number, unit: '' | 'K' | 'M', plus: boolean): string {
  return `${Math.round(value)}${unit}${plus ? '+' : ''}`;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function stopHeroStatCounters() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
}

function initHeroStatCounters() {
  stopHeroStatCounters();

  const counters: ActiveCounter[] = [];

  document.querySelectorAll<HTMLElement>('[data-hero-stat-counter]').forEach((el, index) => {
    const raw = el.dataset.heroStatTarget;
    if (!raw) return;

    const parsed = parseHeroStatValue(raw);
    if (!parsed) return;

    counters.push({ el, parsed, delay: index * STAGGER_MS });
  });

  if (!counters.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    counters.forEach(({ el, parsed }) => {
      el.textContent = formatHeroStat(parsed.target, parsed.unit, parsed.plus);
    });
    return;
  }

  const startTime = performance.now();

  const tick = (now: number) => {
    let allDone = true;

    for (const { el, parsed, delay } of counters) {
      const elapsed = now - startTime - delay;

      if (elapsed < 0) {
        allDone = false;
        el.textContent = formatHeroStat(0, parsed.unit, parsed.plus);
        continue;
      }

      const progress = Math.min(elapsed / DURATION_MS, 1);
      if (progress < 1) allDone = false;

      const current = parsed.target * easeOutCubic(progress);
      el.textContent = formatHeroStat(current, parsed.unit, parsed.plus);
    }

    if (!allDone) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  };

  rafId = requestAnimationFrame(tick);
}

function bootHeroStatCounters() {
  initHeroStatCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootHeroStatCounters);
} else {
  bootHeroStatCounters();
}

document.addEventListener('astro:page-load', initHeroStatCounters);
document.addEventListener('astro:after-swap', initHeroStatCounters);
