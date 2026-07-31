/**
 * Lọc bài viết tin tức theo chuyên mục (client).
 * Nút [data-blog-filter-btn] + item [data-blog-category]
 */
function initBlogCategoryFilter() {
  const root = document.querySelector<HTMLElement>('[data-blog-filter]');
  if (!root) return;

  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-blog-filter-btn]')];
  const items = [...root.querySelectorAll<HTMLElement>('[data-blog-category]')];
  const empty = root.querySelector<HTMLElement>('[data-blog-filter-empty]');
  const pagination = root.querySelector<HTMLElement>('[data-blog-filter-pagination]');

  if (buttons.length === 0 || items.length === 0) return;

  const setActive = (category: string) => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.blogFilterBtn === category;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });

    let visible = 0;
    items.forEach((item) => {
      const match = category === 'all' || item.dataset.blogCategory === category;
      item.hidden = !match;
      item.classList.toggle('hidden', !match);
      if (match) visible += 1;
    });

    if (empty) {
      empty.hidden = visible > 0;
      empty.classList.toggle('hidden', visible > 0);
    }

    if (pagination) {
      const showPagination = category === 'all';
      pagination.hidden = !showPagination;
      pagination.classList.toggle('hidden', !showPagination);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.blogFilterBtn ?? 'all';
      setActive(category);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogCategoryFilter, { once: true });
} else {
  initBlogCategoryFilter();
}
