/**
 * Audit responsive mobile toàn site — đo tràn ngang thật (bỏ qua track/carousel đã clip).
 */
import { chromium } from 'playwright';

const BASE = process.env.AUDIT_BASE_URL ?? 'http://localhost:4322';
const VIEWPORTS = [
  { name: '375', width: 375, height: 812 },
  { name: '390', width: 390, height: 844 },
  { name: '430', width: 430, height: 932 },
];

const ROUTES = [
  '/',
  '/gioi-thieu',
  '/dich-vu',
  '/dich-vu/tu-van-thiet-ke',
  '/dich-vu/xuong-may-oem-odm',
  '/dich-vu/fabric-collection',
  '/dich-vu/in-an',
  '/dich-vu/theu-vi-tinh',
  '/giai-phap',
  '/giai-phap/giai-phap-1',
  '/giai-phap/giai-phap-2',
  '/giai-phap/giai-phap-3',
  '/giai-phap/giai-phap-4',
  '/khach-hang',
  '/khach-hang/du-an/bidv',
  '/khach-hang/du-an/savisco',
  '/khach-hang/du-an/dat-group',
  '/tin-tuc',
  '/tin-tuc/trang/2',
  '/tai-lieu',
  '/lien-he',
];

async function measure(page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const overflow =
      Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - vw;

    function clippedByAncestor(el) {
      let p = el.parentElement;
      while (p && p !== document.documentElement) {
        const s = getComputedStyle(p);
        if (/(hidden|clip|auto|scroll|overlay)/.test(s.overflowX) || /(hidden|clip|auto|scroll|overlay)/.test(s.overflow)) {
          return true;
        }
        p = p.parentElement;
      }
      return false;
    }

    const offenders = [];
    for (const el of document.querySelectorAll('body *')) {
      if (el.closest('#site-nav-mobile')) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      if (r.right <= vw + 1) continue;
      if (clippedByAncestor(el)) continue;
      const text = (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 50);
      const cls =
        typeof el.className === 'string' && el.className.trim()
          ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.')
          : '';
      offenders.push({
        sel: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${cls}`,
        px: Math.round(r.right - vw),
        text,
      });
    }
    offenders.sort((a, b) => b.px - a.px);
    const uniq = [];
    const seen = new Set();
    for (const o of offenders) {
      if (seen.has(o.sel)) continue;
      seen.add(o.sel);
      uniq.push(o);
      if (uniq.length >= 5) break;
    }

    return { overflow: Math.max(0, Math.round(overflow)), offenders: uniq };
  });
}

async function main() {
  // Lấy thêm vài slug tin/dịch vụ nếu 404 thì bỏ
  const browser = await chromium.launch({ headless: true });
  const fails = [];
  let checks = 0;

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: true,
      hasTouch: true,
    });
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      checks++;
      let status = 'ok';
      let detail = null;
      try {
        const res = await page.goto(`${BASE}${route}`, {
          waitUntil: 'domcontentloaded',
          timeout: 40000,
        });
        if (!res || res.status() >= 400) {
          status = 'http';
          detail = { status: res?.status() };
        } else {
          await page.waitForTimeout(350);
          const m = await measure(page);
          if (m.overflow > 1 || m.offenders.length) {
            status = 'overflow';
            detail = m;
          } else {
            detail = { overflow: 0 };
          }
        }
      } catch (e) {
        status = 'error';
        detail = { message: String(e.message || e).slice(0, 120) };
      }

      const mark = status === 'ok' ? 'OK' : status.toUpperCase();
      console.log(`[${vp.name}] ${mark.padEnd(8)} ${route}${status === 'overflow' ? ` (+${detail.overflow}px)` : ''}`);
      if (status !== 'ok') fails.push({ vp: vp.name, route, status, detail });
    }
    await ctx.close();
  }

  await browser.close();

  console.log('\n======== TỔNG HỢP ========');
  console.log(`Checks: ${checks}`);
  console.log(`OK: ${checks - fails.length}`);
  console.log(`Fail: ${fails.length}`);

  if (fails.length) {
    console.log('\n--- CHI TIẾT ---');
    for (const f of fails) {
      console.log(`\n[${f.vp}] ${f.route} → ${f.status}`);
      console.log(JSON.stringify(f.detail, null, 2));
    }
  } else {
    console.log('\nKhông phát hiện tràn ngang thật trên các route đã quét.');
  }

  process.exit(fails.some((f) => f.status === 'overflow' || f.status === 'error') ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
