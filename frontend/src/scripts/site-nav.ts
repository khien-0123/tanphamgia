// Xử lý scroll mượt cho anchor và đổi style nav khi cuộn trang
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const nav = document.getElementById('site-nav');
const heroImage = document.getElementById('hero-image');
const navSolid = nav?.dataset.navSolid === 'true';
const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
const isMobileViewport = window.matchMedia('(max-width: 1023px)').matches;

/** Đồng bộ trạng thái nav theo vị trí scroll hiện tại */
function updateNav() {
  const scrolled = window.pageYOffset;
  if (nav) nav.classList.toggle('nav-scrolled', navSolid || scrolled > 60);
  // Tắt parallax hero trên mobile / thiết bị cảm ứng — tránh giật và tràn layout
  if (heroImage && !isCoarsePointer && !isMobileViewport) {
    heroImage.style.transform = `translateY(${scrolled * 0.25}px) scale(1.05)`;
  } else if (heroImage) {
    heroImage.style.transform = '';
  }
}

if (nav && navSolid) {
  nav.classList.add('nav-scrolled');
}

window.addEventListener('scroll', updateNav, { passive: true });
// Khôi phục đúng màu khi reload/back-forward giữ vị trí scroll
window.addEventListener('pageshow', updateNav);
window.addEventListener('load', updateNav);
updateNav();

/** Menu hamburger mobile */
function initMobileNav() {
  const toggle = document.querySelector<HTMLButtonElement>(
    '#site-nav button[aria-controls="site-nav-mobile"]',
  );
  const menu = document.getElementById('site-nav-mobile');
  if (!toggle || !menu) return;

  const icon = toggle.querySelector<HTMLElement>('.material-symbols-outlined');
  const panel = menu.querySelector<HTMLElement>('nav');

  let menuScrollY = 0;

  /** Khóa scroll trang khi mở menu — không dùng touch-action: none */
  const lockBodyScroll = () => {
    menuScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${menuScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.classList.add('nav-menu-open');
  };

  const unlockBodyScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.classList.remove('nav-menu-open');
    window.scrollTo(0, menuScrollY);
  };

  const setOpen = (open: boolean) => {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu điều hướng' : 'Mở menu điều hướng');
    if (icon) icon.textContent = open ? 'close' : 'menu';

    if (open) {
      lockBodyScroll();
      if (panel) panel.scrollTop = 0;
    } else {
      unlockBodyScroll();
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('is-open'));
  });

  menu.querySelectorAll('[data-nav-close]').forEach((el) => {
    el.addEventListener('click', () => setOpen(false));
  });

  menu.querySelectorAll<HTMLAnchorElement>('ul a[href], [data-nav-close]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}

initMobileNav();
