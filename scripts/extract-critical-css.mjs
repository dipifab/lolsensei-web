#!/usr/bin/env node
/**
 * extract-critical-css.mjs — WP19.1 critical CSS extraction (REQ-F-019-1-003)
 *
 * Scope: off-cycle one-shot estrazione critical CSS above-the-fold per viewport mobile
 * 375x812 su due homepage locale (/en/, /zh-Hans/ worst-case glyph density),
 * coverage-merge, write in scripts/critical-css.txt (committato).
 *
 * IMPORTANTE: questo script NON modifica HTML — il critical CSS emitted va letto
 * da src/entry-server.tsx via `?raw` import e inlinato nel <head> JSX a build-time
 * (vedi WP19.1 architecture.md §3.4). Rimosso pattern async-preload `onload=`
 * del precedente WP19 (VIETATO da REQ-NF-019-1-006 — CSP strict).
 *
 * Target build output: .output/public/<locale>/index.html (SolidStart Vinxi prerender).
 * MAI in postbuild, MAI in CI (puppeteer troppo pesante per GH Actions).
 *
 * Uso:
 *   1. npm run build     (produce .output/public/)
 *   2. node scripts/extract-critical-css.mjs
 *   3. git diff scripts/critical-css.txt
 *   4. rebuild, verify size, commit
 *
 *   node scripts/extract-critical-css.mjs --help   (banner)
 *
 * Exit codes (allineati a api-contracts.md §1.2):
 *   0  success
 *   1  puppeteer launch fail (fallback: beasties pre-built, runbook §5.3)
 *   2  .output/public/ assente (run `npm run build` first)
 */

import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(REPO_ROOT, '.output', 'public');
const CRITICAL_OUT = path.join(REPO_ROOT, 'scripts', 'critical-css.txt');

const LOCALES = ['en', 'zh-Hans'];
const VIEWPORT = { width: 375, height: 812, deviceScaleFactor: 2, isMobile: true };
const BUDGET_CONTENT_BYTES = 14 * 1024;

function log(...args) { console.log('[extract-critical-css]', ...args); }
function die(code, msg) { console.error('[extract-critical-css] ERROR:', msg); process.exit(code); }

function printHelp() {
  console.log(`
Usage: node scripts/extract-critical-css.mjs [--help]

WP19.1 off-cycle critical CSS extractor.
  Input:  .output/public/<locale>/index.html (requires prior 'npm run build')
  Output: scripts/critical-css.txt (committed artifact)

Exit codes:
  0  success
  1  puppeteer launch fail
  2  .output/public/ missing

See dev-repository/specs/wp19_1/runbook.md for fallback strategies.
`);
}

async function loadPuppeteer() {
  const require_ = createRequire(import.meta.url);
  try {
    return require_('puppeteer');
  } catch {
    die(1, 'puppeteer not installed. devDep required: npm i -D puppeteer\n  Fallback: beasties pre-built (runbook §5.3)');
  }
}

function mergeCoverage(coverageAllViewports) {
  const perFile = new Map();
  for (const coverageList of coverageAllViewports) {
    for (const entry of coverageList) {
      if (!entry.text) continue;
      const key = entry.url;
      if (!perFile.has(key)) {
        perFile.set(key, { text: entry.text, ranges: [] });
      }
      perFile.get(key).ranges.push(...entry.ranges);
    }
  }
  let merged = '';
  for (const { text, ranges } of perFile.values()) {
    const sorted = [...ranges].sort((a, b) => a.start - b.start);
    const flat = [];
    for (const r of sorted) {
      if (flat.length && r.start <= flat[flat.length - 1].end) {
        flat[flat.length - 1].end = Math.max(flat[flat.length - 1].end, r.end);
      } else {
        flat.push({ start: r.start, end: r.end });
      }
    }
    for (const r of flat) {
      merged += text.slice(r.start, r.end);
    }
    merged += '\n';
  }
  return merged.trim();
}

async function startStaticServer(rootDir) {
  const http = await import('node:http');
  const { createReadStream } = await import('node:fs');
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
    '.json': 'application/json; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
  };
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(rootDir, urlPath);
    if (urlPath === '/' || urlPath.endsWith('/')) {
      filePath = path.join(filePath, 'index.html');
    }
    if (!existsSync(filePath)) {
      res.statusCode = 404;
      res.end('not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    createReadStream(filePath).pipe(res);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 0;
  return { server, baseUrl: `http://127.0.0.1:${port}` };
}

async function run() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    printHelp();
    return;
  }

  if (!existsSync(OUTPUT_DIR)) {
    die(2, `.output/public/ not found. Run 'npm run build' first.`);
  }

  const puppeteer = await loadPuppeteer();
  const { server, baseUrl } = await startStaticServer(OUTPUT_DIR);
  log(`Local static server: ${baseUrl}/`);

  const coverageAll = [];
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    for (const locale of LOCALES) {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.coverage.startCSSCoverage({ resetOnNavigation: true });
      const url = `${baseUrl}/${locale}/`;
      log(`Analyzing ATF: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));
      const cov = await page.coverage.stopCSSCoverage();
      log(`  ${locale}: ${cov.length} css file(s) analyzed`);
      coverageAll.push(cov);
      await page.close();
    }
  } catch (e) {
    die(1, `puppeteer run failed: ${e instanceof Error ? e.message : String(e)}\n  Fallback: beasties pre-built (runbook §5.3)`);
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.close();
  }

  const merged = mergeCoverage(coverageAll);
  if (!merged) {
    die(1, 'No CSS coverage collected. Verify <link rel="stylesheet"> present in .output/public/<locale>/index.html');
  }

  const minified = merged
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .trim();

  const header = `/* generated by extract-critical-css.mjs — do not edit. WP19.1 critical CSS ATF mobile 375x812 (en + zh-Hans merged). */\n`;
  const content = header + minified + '\n';

  log(`Critical CSS content: ${minified.length} bytes (budget ${BUDGET_CONTENT_BYTES})`);
  if (minified.length > BUDGET_CONTENT_BYTES) {
    log(`WARNING: content exceeds ${BUDGET_CONTENT_BYTES} — caller must tighten ATF selectors or split hero component styles.`);
  }

  await writeFile(CRITICAL_OUT, content, 'utf8');
  log(`Wrote ${CRITICAL_OUT} (${content.length} bytes total with header).`);
  log('Next: rebuild (npm run build) and verify size; commit scripts/critical-css.txt.');
}

run().catch((e) => {
  die(1, e instanceof Error ? e.stack || e.message : String(e));
});
