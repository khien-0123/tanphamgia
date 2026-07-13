#!/usr/bin/env node
/**
 * Xóa ảnh trong src/assets/images không được reference trong src/ hoặc scripts/.
 * npm run prune:assets        — dry-run
 * npm run prune:assets -- --apply — xóa thật
 */
import { readFileSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const assetsDir = join(root, 'src', 'assets', 'images');
const scanDirs = ['src', 'scripts'];
const apply = process.argv.includes('--apply');

const referenced = new Set();

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(astro|ts|tsx|js|mjs)$/.test(entry)) files.push(full);
  }
  return files;
}

for (const dir of scanDirs) {
  const abs = join(root, dir);
  for (const file of walk(abs)) {
    const content = readFileSync(file, 'utf8');
    for (const match of content.matchAll(/\/images\/[a-zA-Z0-9_./-]+\.(?:avif|gif|jpe?g|png|svg|webp)/g)) {
      referenced.add(match[0]);
    }
  }
}

function listAssetFiles(dir, base = '') {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const rel = base ? `${base}/${entry}` : entry;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listAssetFiles(full, rel));
    else out.push(rel.replace(/\\/g, '/'));
  }
  return out;
}

const orphans = listAssetFiles(assetsDir)
  .filter((rel) => !referenced.has(`/images/${rel}`))
  .sort();

if (orphans.length === 0) {
  console.log('Không có asset orphan.');
  process.exit(0);
}

let totalBytes = 0;
for (const rel of orphans) {
  const full = join(assetsDir, rel);
  totalBytes += statSync(full).size;
}

console.log(`${apply ? 'XÓA' : 'DRY-RUN'} ${orphans.length} file orphan (${(totalBytes / 1024 / 1024).toFixed(2)} MB):\n`);
for (const rel of orphans) console.log(`  - images/${rel}`);

if (apply) {
  for (const rel of orphans) unlinkSync(join(assetsDir, rel));
  console.log(`\nĐã xóa ${orphans.length} file.`);
} else {
  console.log('\nChạy: npm run prune:assets -- --apply');
}
