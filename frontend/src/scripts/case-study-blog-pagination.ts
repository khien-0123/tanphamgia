/**
 * Phân trang «Bài viết case study» phía client — không reload (tránh giật / nhảy hero).
 * URL: /khach-hang?trang=N (cùng document). Deep-link /khach-hang/trang/N vẫn đọc được.
 */

import { routes } from '../lib/routes';

const PAGE_ACTIVE = ['bg-[#1f1b17]', 'text-white'];
const PAGE_INACTIVE = [
  'bg-surface-muted',
  'text-[#1f1b17]',
  'hover:bg-accent-gold',
  'hover:text-[#1f1b17]',
];

function pageHref(page: number): string {
  return page <= 1 ? routes.khachHang : `${routes.khachHang}?trang=${page}`;
}

function parsePageFromLocation(): number {
  const fromQuery = Number(new URLSearchParams(location.search).get('trang'));
  if (Number.isFinite(fromQuery) && fromQuery > 0) return fromQuery;

  const match = location.pathname.match(/\/khach-hang\/trang\/(\d+)/);
  const fromPath = match ? Number(match[1]) : 1;
  return Number.isFinite(fromPath) && fromPath > 0 ? fromPath : 1;
}

function applyPage(root: HTMLElement, page: number, opts?: { scrollToSection?: boolean }) {
  const perPage = Number(root.dataset.csPerPage) || 9;
  const cards = [...root.querySelectorAll<HTMLElement>('[data-cs-card]')];
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-cs-page-btn]')];
  const totalPages = Math.max(1, Math.ceil(cards.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const end = start + perPage;

  cards.forEach((card, index) => {
    card.classList.toggle('hidden', index < start || index >= end);
  });

  buttons.forEach((btn) => {
    const btnPage = Number(btn.dataset.csPage) || 1;
    const on = btnPage === safePage;
    btn.classList.remove(...PAGE_ACTIVE, ...PAGE_INACTIVE);
    btn.classList.add(...(on ? PAGE_ACTIVE : PAGE_INACTIVE));
    if (on) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  root.dataset.csPage = String(safePage);

  if (opts?.scrollToSection) {
    // Đợi layout ẩn/hiện card xong rồi mới cuộn — mọi số trang đều lên đầu section
    requestAnimationFrame(() => {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function initCaseStudyBlogPagination() {
  const root = document.querySelector<HTMLElement>('[data-cs-blog]');
  if (!root || root.dataset.csBound === '1') return;
  root.dataset.csBound = '1';

  const initial =
    Number(root.dataset.csPage) || parsePageFromLocation() || 1;
  applyPage(root, initial);

  root.querySelectorAll<HTMLButtonElement>('[data-cs-page-btn]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const page = Number(btn.dataset.csPage) || 1;
      if (page === Number(root.dataset.csPage)) return;
      applyPage(root, page, { scrollToSection: true });
      history.pushState({ csBlogPage: page }, '', pageHref(page));
    });
  });

  window.addEventListener('popstate', () => {
    applyPage(root, parsePageFromLocation(), { scrollToSection: true });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCaseStudyBlogPagination);
} else {
  initCaseStudyBlogPagination();
}

document.addEventListener('astro:page-load', initCaseStudyBlogPagination);
