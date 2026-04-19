#!/usr/bin/env node
/**
 * Verifies that every woff2 referenced in public/fonts/fonts.css
 * is actually present on disk. Used as a pre-deploy CI gate to
 * prevent shipping broken @font-face URLs.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const FONTS_DIR = resolve(ROOT, 'public/fonts');
const FONTS_CSS = resolve(FONTS_DIR, 'fonts.css');

function parseFontsCss() {
  const css = readFileSync(FONTS_CSS, 'utf8');
  const matches = [...css.matchAll(/url\(\s*['"]?\/fonts\/([^'")\s]+)['"]?\s*\)/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

function main() {
  const referenced = parseFontsCss();

  if (referenced.length === 0) {
    console.error('[check-fonts] ERROR: no font URLs found in public/fonts/fonts.css');
    process.exit(1);
  }

  const missing = [];
  for (const font of referenced) {
    const fp = resolve(FONTS_DIR, font);
    if (!existsSync(fp)) {
      missing.push(font);
      console.error(`[check-fonts] ERROR: ${font} missing in public/fonts/`);
    } else {
      console.log(`[check-fonts] ${font}: OK`);
    }
  }

  if (missing.length > 0) {
    console.error(
      `[check-fonts] ${referenced.length} fonts referenced, ${missing.length} missing — FAIL`
    );
    process.exit(1);
  }

  console.log(
    `[check-fonts] ${referenced.length} fonts referenced, ${referenced.length} present — OK`
  );
}

main();
