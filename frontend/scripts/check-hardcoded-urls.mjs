#!/usr/bin/env node
/**
 * Chặn hardcode URL trong component/page — path và ảnh phải qua lib/data.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SCAN_DIRS = ['src/components', 'src/pages', 'src/layouts'];

const FORBIDDEN_PATTERNS = [
  { re: /href\s*=\s*["']\/(?!\/)/g, msg: 'href path tuyệt đối — dùng routes.* hoặc data.href' },
  { re: /src\s*=\s*["']https?:\/\//g, msg: 'src URL external — dùng siteAssets hoặc data' },
  { re: /unsplash\.com/gi, msg: 'URL Unsplash — dùng siteAssets' },
  { re: /googleusercontent\.com/gi, msg: 'URL Google — dùng siteAssets' },
  { re: /dongphucvn\.vn/gi, msg: 'URL legacy — dùng legacyUrl() trong site-config' },
];

/** Cho phép Google Fonts trong BaseLayout */
const ALLOWLIST = [/src\/layouts\/BaseLayout\.astro$/];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(astro|tsx?|jsx?)$/.test(entry)) files.push(full);
  }
  return files;
}

const violations = [];

for (const dir of SCAN_DIRS) {
  const abs = join(ROOT, dir);
  for (const file of walk(abs)) {
    const rel = relative(join(ROOT, 'src'), file).replace(/\\/g, '/');
    const relFromRoot = relative(ROOT, file).replace(/\\/g, '/');
    if (ALLOWLIST.some((re) => re.test(relFromRoot))) continue;

    const content = readFileSync(file, 'utf8');
    for (const { re, msg } of FORBIDDEN_PATTERNS) {
      re.lastIndex = 0;
      if (re.test(content)) {
        violations.push({ file: relFromRoot, msg });
        break;
      }
    }
  }
}

if (violations.length > 0) {
  console.error('Phát hiện URL hardcode:\n');
  for (const v of violations) {
    console.error(`  • ${v.file}: ${v.msg}`);
  }
  process.exit(1);
}

console.log('OK — không có URL hardcode trong components/pages/layouts.');
