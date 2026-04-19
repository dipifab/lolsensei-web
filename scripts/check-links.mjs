#!/usr/bin/env node
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');

if (!existsSync(DIST)) {
  console.error('[links] dist/ not found, run `npm run build` first');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const htmlFiles = walk(DIST).filter((p) => p.endsWith('.html'));
let errors = 0;
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const re = /(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('data:')) continue;
    if (href.startsWith('/')) {
      const target = join(DIST, href);
      const targetHtml = target.endsWith('.html') ? target : join(target, 'index.html');
      if (existsSync(target) || existsSync(targetHtml)) {
        checked += 1;
      } else if (href.match(/\.(webp|png|jpg|jpeg|svg|ico|woff2|css|js|xml|txt)$/)) {
        if (!existsSync(target)) {
          console.error(`[links] missing asset: ${href} (in ${relative(DIST, file)})`);
          errors += 1;
        } else {
          checked += 1;
        }
      } else {
        checked += 1;
      }
    }
  }
}

if (errors === 0) {
  console.log(`[links] OK (checked ${checked} local links across ${htmlFiles.length} files)`);
} else {
  console.error(`[links] FAIL with ${errors} errors`);
  process.exit(1);
}
