/**
 * Lọc chuyên mục + phân trang tin tức ngay trên trang — không reload.
 * URL cập nhật bằng history.pushState (deep-link + Back vẫn đúng).
 *
 * «Tất cả» trang 1: hiện bài nổi bật full-width, lưới bỏ slug đó.
 * Chuyên mục / trang > 1: chỉ lưới card mặc định.
 */

import { blogLibraryHref } from '../lib/routes';

const PAGE_ACTIVE = ['bg-[#1f1b17]', 'text-white'];
const PAGE_INACTIVE = [
  'bg-surface-muted',
  'text-[#1f1b17]',
  'hover:bg-accent-gold',
  'hover:text-[#1f1b17]',
];

function parseCategoryFromPath(pathname: string, slugMap: Record<string, string>): string {
  const match = pathname.match(/\/tin-tuc\/danh-muc\/([^/]+)/);
  if (!match) return 'all';
  const slug = decodeURIComponent(match[1]);
  return slugMap[slug] ?? 'all';
}

function parsePageFromPath(pathname: string): number {
  const match = pathname.match(/\/trang\/(\d+)/);
  const page = match ? Number(match[1]) : 1;
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function applyView(root: HTMLElement, category: string, page: number) {
  const perPage = Number(root.dataset.blogPerPage) || 9;
  const featuredSlug = root.dataset.blogFeaturedSlug || '';
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-blog-filter-btn]')];
  const featured = root.querySelector<HTMLElement>('[data-blog-featured]');
  const cards = [...root.querySelectorAll<HTMLElement>('[data-blog-card]')];
  const empty = root.querySelector<HTMLElement>('[data-blog-filter-empty]');
  const pageBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-blog-page-btn]')];

  const pool =
    category === 'all'
      ? cards.filter((card) => card.dataset.blogSlug !== featuredSlug)
      : cards.filter((card) => card.dataset.blogCategory === category);

  const totalPages = Math.max(1, Math.ceil(pool.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const end = start + perPage;
  const showFeatured = category === 'all' && safePage === 1 && Boolean(featuredSlug);

  if (featured) {
    featured.classList.toggle('hidden', !showFeatured);
  }

  const visibleSlugs = new Set(
    pool.slice(start, end).map((card) => card.dataset.blogSlug || ''),
  );

  cards.forEach((card) => {
    const slug = card.dataset.blogSlug || '';
    const hideAsFeaturedDuplicate = showFeatured && slug === featuredSlug;
    const onPage = visibleSlugs.has(slug) && !hideAsFeaturedDuplicate;
    card.classList.toggle('hidden', !onPage);
  });

  buttons.forEach((btn) => {
    const isActive = (btn.dataset.blogFilterBtn ?? 'all') === category;
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    btn.classList.toggle('is-active', isActive);
  });

  if (empty) {
    empty.classList.toggle('hidden', pool.length > 0 || showFeatured);
  }

  pageBtns.forEach((btn) => {
    const btnPage = Number(btn.dataset.blogPage) || 1;
    const inRange = btnPage <= totalPages;
    btn.classList.toggle('hidden', !inRange);
    btn.classList.remove(...PAGE_ACTIVE, ...PAGE_INACTIVE);
    const isActive = inRange && btnPage === safePage;
    btn.classList.add(...(isActive ? PAGE_ACTIVE : PAGE_INACTIVE));
    if (isActive) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  root.dataset.blogActive = category;
  root.dataset.blogPage = String(safePage);
}

function initBlogCategoryFilter() {
  const root = document.querySelector<HTMLElement>('[data-blog-filter]');
  if (!root || root.dataset.blogBound === '1') return;
  root.dataset.blogBound = '1';

  const slugMap = JSON.parse(root.dataset.blogSlugMap || '{}') as Record<string, string>;

  const readCategory = () =>
    root.dataset.blogActive || parseCategoryFromPath(location.pathname, slugMap);
  const readPage = () => Number(root.dataset.blogPage) || parsePageFromPath(location.pathname);

  applyView(root, readCategory(), readPage());

  root.querySelectorAll<HTMLButtonElement>('[data-blog-filter-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.blogFilterBtn ?? 'all';
      if (category === (root.dataset.blogActive || 'all') && Number(root.dataset.blogPage) === 1) {
        return;
      }
      applyView(root, category, 1);
      history.pushState({ blogCategory: category, blogPage: 1 }, '', blogLibraryHref(category, 1));
      requestAnimationFrame(() => {
        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });

  root.querySelectorAll<HTMLButtonElement>('[data-blog-page-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = root.dataset.blogActive || 'all';
      const page = Number(btn.dataset.blogPage) || 1;
      if (page === Number(root.dataset.blogPage)) return;
      applyView(root, category, page);
      history.pushState({ blogCategory: category, blogPage: page }, '', blogLibraryHref(category, page));
      // Mọi số trang đều cuộn về đầu listing
      requestAnimationFrame(() => {
        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });

  window.addEventListener('popstate', () => {
    applyView(
      root,
      parseCategoryFromPath(location.pathname, slugMap),
      parsePageFromPath(location.pathname),
    );
    requestAnimationFrame(() => {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogCategoryFilter);
} else {
  initBlogCategoryFilter();
}

document.addEventListener('astro:page-load', initBlogCategoryFilter);
