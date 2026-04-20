#!/usr/bin/env node
/**
 * Optimize champ-select preview: PNG raw → WebP q=85 (target <80KB).
 */
import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const IN = resolve(ROOT, 'public/previews/champ-select-preview-raw.png');
const OUT = resolve(ROOT, 'public/previews/champ-select-preview.webp');

await sharp(IN)
  .resize(1280, null, { withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toFile(OUT);

console.log(`[preview] Generated ${OUT}`);
