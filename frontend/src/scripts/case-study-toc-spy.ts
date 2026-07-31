/**
 * Mục lục scrollspy — active item + line vàng theo section đang xem.
 * Hỗ trợ mục lớn và mục nhỏ (nested).
 */
function initCaseStudyTocSpy() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-cs-toc-link]')];
  if (links.length === 0) return;

  const byId = new Map<string, HTMLElement>();
  for (const link of links) {
    const id = link.getAttribute('href')?.replace(/^#/, '');
    if (!id || byId.has(id)) continue;
    const el = document.getElementById(id);
    if (el) byId.set(id, el);
  }

  const sections = [...byId.entries()].map(([id, el]) => ({ id, el }));
  if (sections.length === 0) return;

  // Thứ tự theo vị trí trên trang
  sections.sort((a, b) => a.el.offsetTop - b.el.offsetTop);

  const setActive = (id: string) => {
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const syncFromScroll = () => {
    const marker = window.scrollY + Math.min(160, window.innerHeight * 0.22);
    let current = sections[0].id;
    for (const section of sections) {
      if (section.el.offsetTop <= marker) current = section.id;
      else break;
    }
    setActive(current);
  };

  setActive(sections[0].id);
  syncFromScroll();

  window.addEventListener('scroll', syncFromScroll, { passive: true });
  window.addEventListener('resize', syncFromScroll);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCaseStudyTocSpy, { once: true });
} else {
  initCaseStudyTocSpy();
}
