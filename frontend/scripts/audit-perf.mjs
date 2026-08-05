/**
 * Đo Performance (Lighthouse mobile) trên preview production.
 * Usage: node scripts/audit-perf.mjs
 */
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:4325';
const OUT_DIR = join('tmp', 'lighthouse');

const ROUTES = [
  '/',
  '/gioi-thieu',
  '/dich-vu',
  '/dich-vu/tu-van-thiet-ke',
  '/dich-vu/xuong-may-oem-odm',
  '/giai-phap',
  '/giai-phap/giai-phap-1',
  '/giai-phap/giai-phap-2',
  '/khach-hang',
  '/khach-hang/du-an/bidv',
  '/khach-hang/du-an/savisco',
  '/tin-tuc',
  '/tai-lieu',
  '/lien-he',
];

function runLighthouse(url) {
  return new Promise((resolve, reject) => {
    const args = [
      'lighthouse',
      url,
      '--only-categories=performance',
      '--form-factor=mobile',
      '--screenEmulation.mobile=true',
      '--throttling-method=simulate',
      '--chrome-flags=--headless --no-sandbox --disable-gpu',
      '--output=json',
      '--quiet',
      '--disable-storage-reset',
    ];
    const child = spawn('npx', ['--yes', ...args], {
      shell: true,
      windowsHide: true,
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Lighthouse exit ${code}: ${stderr.slice(0, 300)}`));
        return;
      }
      try {
        resolve(JSON.parse(stdout));
      } catch (e) {
        reject(new Error(`Parse fail: ${e.message}\n${stdout.slice(0, 200)}`));
      }
    });
  });
}

function metric(audits, id) {
  const a = audits[id];
  if (!a) return null;
  return {
    display: a.displayValue ?? null,
    ms: typeof a.numericValue === 'number' ? Math.round(a.numericValue) : null,
  };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const rows = [];

  for (const route of ROUTES) {
    const url = `${BASE}${route}`;
    process.stdout.write(`Đang đo ${route} ... `);
    try {
      const lhr = await runLighthouse(url);
      const score = Math.round((lhr.categories?.performance?.score ?? 0) * 100);
      const audits = lhr.audits ?? {};
      const row = {
        route,
        score,
        FCP: metric(audits, 'first-contentful-paint'),
        LCP: metric(audits, 'largest-contentful-paint'),
        TBT: metric(audits, 'total-blocking-time'),
        CLS: metric(audits, 'cumulative-layout-shift'),
        SI: metric(audits, 'speed-index'),
        TTI: metric(audits, 'interactive'),
      };
      rows.push(row);
      const safe = route === '/' ? 'home' : route.replace(/\//g, '_').replace(/^_/, '');
      writeFileSync(join(OUT_DIR, `${safe}.json`), JSON.stringify(row, null, 2));
      console.log(`Perf ${score}`);
    } catch (e) {
      console.log('FAIL');
      rows.push({ route, error: String(e.message || e).slice(0, 160) });
    }
  }

  console.log('\n======== BẢNG PERFORMANCE (mobile, simulated) ========');
  console.log(
    'Route'.padEnd(36) +
      'Score'.padStart(6) +
      '  FCP'.padStart(12) +
      '  LCP'.padStart(12) +
      '  TBT'.padStart(10) +
      '  CLS'.padStart(8),
  );
  for (const r of rows) {
    if (r.error) {
      console.log(`${r.route.padEnd(36)} ERR ${r.error}`);
      continue;
    }
    console.log(
      r.route.padEnd(36) +
        String(r.score).padStart(6) +
        String(r.FCP?.display ?? '-').padStart(12) +
        String(r.LCP?.display ?? '-').padStart(12) +
        String(r.TBT?.display ?? '-').padStart(10) +
        String(r.CLS?.display ?? '-').padStart(8),
    );
  }

  const ok = rows.filter((r) => !r.error);
  if (ok.length) {
    const avg = Math.round(ok.reduce((s, r) => s + r.score, 0) / ok.length);
    const worst = [...ok].sort((a, b) => a.score - b.score)[0];
    const best = [...ok].sort((a, b) => b.score - a.score)[0];
    console.log(`\nTrung bình: ${avg} | Tốt nhất: ${best.route} (${best.score}) | Yếu nhất: ${worst.route} (${worst.score})`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
