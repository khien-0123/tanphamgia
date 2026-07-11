/** Mobile: tap lần 1 sổ nội dung thẻ giải pháp, tap lần 2 mới điều hướng */
const MOBILE_MQ = window.matchMedia('(max-width: 767px)');

function collapseAll(grid: HTMLElement) {
  grid
    .querySelectorAll<HTMLAnchorElement>('[data-solutions-mosaic-link].is-expanded')
    .forEach((link) => {
      link.classList.remove('is-expanded');
      link.setAttribute('aria-expanded', 'false');
    });
}

function bindSolutionsMosaicMobile() {
  const grid = document.querySelector<HTMLElement>('.solutions-mosaic__grid');
  if (!grid || grid.dataset.solutionsMosaicBound === 'true') return;

  grid.dataset.solutionsMosaicBound = 'true';

  grid.querySelectorAll<HTMLAnchorElement>('[data-solutions-mosaic-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (!MOBILE_MQ.matches) return;

      if (!link.classList.contains('is-expanded')) {
        e.preventDefault();
        collapseAll(grid);
        link.classList.add('is-expanded');
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  MOBILE_MQ.addEventListener('change', () => {
    if (!MOBILE_MQ.matches) collapseAll(grid);
  });
}

function bootSolutionsMosaicMobile() {
  bindSolutionsMosaicMobile();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootSolutionsMosaicMobile);
} else {
  bootSolutionsMosaicMobile();
}

document.addEventListener('astro:page-load', bootSolutionsMosaicMobile);
