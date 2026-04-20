#!/usr/bin/env node
/**
 * WP19 P4-014 + P3-02 — Favicon generation from logo-512 canonical source.
 * Produces: logo-512.webp (compressed), favicon-16/32/48.png, apple-touch-icon.png, favicon.ico.
 * Idempotent: skips regeneration if source mtime <= output mtime.
 */
import { statSync, existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SOURCE = resolve(ROOT, 'public/images/logo-512.png');
const OUT_WEBP = resolve(ROOT, 'public/images/logo-512.webp');
const OUT_FAVICON = {
  16: resolve(ROOT, 'public/favicon-16.png'),
  32: resolve(ROOT, 'public/favicon-32.png'),
  48: resolve(ROOT, 'public/favicon-48.png'),
};
const OUT_APPLE = resolve(ROOT, 'public/apple-touch-icon.png');
const OUT_ICO = resolve(ROOT, 'public/favicon.ico');

if (!existsSync(SOURCE)) {
  console.error(`[favicons] Source not found: ${SOURCE}`);
  process.exit(1);
}
const srcMtime = statSync(SOURCE).mtimeMs;

async function needsRegen(outPath) {
  if (!existsSync(outPath)) return true;
  return statSync(outPath).mtimeMs < srcMtime;
}

async function main() {
  // 1. logo-512.webp (quality 80, effort 6 — target <40KB)
  if (await needsRegen(OUT_WEBP)) {
    await sharp(SOURCE).webp({ quality: 80, effort: 6 }).toFile(OUT_WEBP);
    console.log(`[favicons] Generated ${OUT_WEBP}`);
  }

  // 2. favicon-16/32/48 (PNG Lanczos downscale)
  for (const [size, out] of Object.entries(OUT_FAVICON)) {
    if (await needsRegen(out)) {
      await sharp(SOURCE)
        .resize(Number(size), Number(size), { kernel: 'lanczos3' })
        .png({ compressionLevel: 9 })
        .toFile(out);
      console.log(`[favicons] Generated ${out}`);
    }
  }

  // 3. apple-touch-icon 180×180
  if (await needsRegen(OUT_APPLE)) {
    await sharp(SOURCE)
      .resize(180, 180, { kernel: 'lanczos3' })
      .png({ compressionLevel: 9 })
      .toFile(OUT_APPLE);
    console.log(`[favicons] Generated ${OUT_APPLE}`);
  }

  // 4. favicon.ico (multi-size ICO from 16/32/48)
  if (await needsRegen(OUT_ICO)) {
    const ico = await pngToIco([OUT_FAVICON[16], OUT_FAVICON[32], OUT_FAVICON[48]]);
    writeFileSync(OUT_ICO, ico);
    console.log(`[favicons] Generated ${OUT_ICO}`);
  }

  console.log('[favicons] Done.');
}

main().catch((err) => {
  console.error('[favicons] Error:', err);
  process.exit(1);
});
