/**
 * Lọc danh mục + phân trang tài liệu ngay trên trang — không reload.
 * URL cập nhật bằng history.pushState (deep-link + Back vẫn đúng).
 *
 * Mobile: 8 thẻ/trang · Desktop (md+): 10 thẻ/trang.
 * Không dùng property `element.hidden` trên nút/thanh có class `flex` —
 * Tailwind `display:flex` ghi đè UA `[hidden]{display:none}`.
 */

import { DOCUMENTS_PER_PAGE_DESKTOP, DOCUMENTS_PER_PAGE_MOBILE } from '../data/tai-lieu';
import { docLibraryHref } from '../lib/routes';

const ACTIVE_CLASSES = ['border-[#ffc933]', 'bg-[#fff0bd]', 'text-[#5c4500]'];
const INACTIVE_CLASSES = [
  'border-[#e5dfd2]',
  'bg-[#fffcf7]',
  'text-[#1f1b17]',
  'hover:border-[#c9bfa8]',
];

const PAGE_ACTIVE = ['bg-[#1f1b17]', 'text-white'];
const PAGE_INACTIVE = [
  'border',
  'border-[#e5dfd2]',
  'bg-[#fffcf7]',
  'text-[#1f1b17]',
  'hover:border-[#ffc933]',
  'hover:bg-[#fff0bd]',
  'hover:text-[#5c4500]',
];

const DESKTOP_MQ = '(min-width: 768px)';

function parseCategoryFromPath(pathname: string): string {
  const match = pathname.match(/\/tai-lieu\/danh-muc\/([^/]+)/);
  return match?.[1] ?? 'all';
}

function parsePageFromPath(pathname: string): number {
  const match = pathname.match(/\/trang\/(\d+)/);
  const page = match ? Number(match[1]) : 1;
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function getPerPage(root: HTMLElement): number {
  const isDesktop = window.matchMedia(DESKTOP_MQ).matches;
  const mobile = Number(root.dataset.docPerPageMobile) || DOCUMENTS_PER_PAGE_MOBILE;
  const desktop = Number(root.dataset.docPerPageDesktop) || DOCUMENTS_PER_PAGE_DESKTOP;
  return isDesktop ? desktop : mobile;
}

function applyView(root: HTMLElement, category: string, page: number) {
  const perPage = getPerPage(root);
  const tiles = root.querySelectorAll<HTMLAnchorElement>('[data-doc-filter]');
  const cards = [...root.querySelectorAll<HTMLElement>('[data-doc-category]')];
  const countEl = root.querySelector<HTMLElement>('[data-doc-count]');
  const pagination = root.querySelector<HTMLElement>('[data-doc-pagination]');
  const pageBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-doc-page-btn]')];
  const labels = JSON.parse(root.dataset.docLabels || '{}') as Record<string, string>;

  const matched = cards.filter(
    (card) => category === 'all' || card.dataset.docCategory === category,
  );
  const totalPages = Math.max(1, Math.ceil(matched.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const end = start + perPage;

  cards.forEach((card) => {
    const inCategory = category === 'all' || card.dataset.docCategory === category;
    const indexInCategory = inCategory ? matched.indexOf(card) : -1;
    const onPage = indexInCategory >= start && indexInCategory < end;
    card.classList.toggle('hidden', !(inCategory && onPage));
  });

  tiles.forEach((tile) => {
    const id = tile.dataset.docFilter || 'all';
    const isActive = id === category;
    tile.classList.remove(...ACTIVE_CLASSES, ...INACTIVE_CLASSES);
    tile.classList.add(...(isActive ? ACTIVE_CLASSES : INACTIVE_CLASSES));
    if (isActive) tile.setAttribute('aria-current', 'page');
    else tile.removeAttribute('aria-current');
  });

  if (countEl) {
    const label = labels[category] ?? labels.all ?? 'Tất cả tài liệu';
    countEl.textContent = `${label} · ${matched.length} tài liệu`;
  }

  if (pagination) {
    pagination.classList.remove('hidden');
  }

  pageBtns.forEach((btn) => {
    const btnPage = Number(btn.dataset.docPage) || 1;
    const inRange = btnPage <= totalPages;
    btn.classList.toggle('hidden', !inRange);
    btn.classList.remove(...PAGE_ACTIVE, ...PAGE_INACTIVE);
    const isActive = inRange && btnPage === safePage;
    btn.classList.add(...(isActive ? PAGE_ACTIVE : PAGE_INACTIVE));
    if (isActive) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  root.dataset.docActive = category;
  root.dataset.docPage = String(safePage);
}

function initDocumentLibraryFilter() {
  const root = document.querySelector<HTMLElement>('[data-doc-library]');
  if (!root || root.dataset.docFilterBound === '1') return;
  root.dataset.docFilterBound = '1';

  const readCategory = () => root.dataset.docActive || parseCategoryFromPath(location.pathname);
  const readPage = () => Number(root.dataset.docPage) || parsePageFromPath(location.pathname);

  applyView(root, readCategory(), readPage());

  root.querySelectorAll<HTMLAnchorElement>('[data-doc-filter]').forEach((tile) => {
    tile.addEventListener('click', (event) => {
      event.preventDefault();
      const category = tile.dataset.docFilter || 'all';
      if (category === (root.dataset.docActive || 'all') && Number(root.dataset.docPage) === 1) {
        return;
      }

      applyView(root, category, 1);
      history.pushState({ docCategory: category, docPage: 1 }, '', docLibraryHref(category, 1));
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-doc-page-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = root.dataset.docActive || 'all';
      const page = Number(btn.dataset.docPage) || 1;
      if (page === Number(root.dataset.docPage)) return;

      applyView(root, category, page);
      history.pushState({ docCategory: category, docPage: page }, '', docLibraryHref(category, page));
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('popstate', () => {
    applyView(root, parseCategoryFromPath(location.pathname), parsePageFromPath(location.pathname));
  });

  const desktopMq = window.matchMedia(DESKTOP_MQ);
  const onBreakpoint = () => {
    applyView(root, readCategory(), readPage());
  };
  if (typeof desktopMq.addEventListener === 'function') {
    desktopMq.addEventListener('change', onBreakpoint);
  } else {
    desktopMq.addListener(onBreakpoint);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDocumentLibraryFilter);
} else {
  initDocumentLibraryFilter();
}

document.addEventListener('astro:page-load', initDocumentLibraryFilter);
