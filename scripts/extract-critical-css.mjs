#!/usr/bin/env node
/**
 * extract-critical-css.mjs — WP19 P3 fallback (TASK-W19-P3-06)
 *
 * Emesso perche TASK-W19-P3-01 POC Beasties ha dato verdetto NO-GO.
 * Cfr. dev-repository/specs/wp19/beasties-poc-result.md per rationale.
 *
 * Strategia: rendering headless di dist/index.html in due viewport
 * (mobile 390x844 + desktop 1280x800), CSS coverage via DevTools Protocol,
 * merge regole applicate above-the-fold, inline <style id="critical-css">
 * in <head>, async-preload del bundle CSS completo.
 *
 * Uso:
 *   node scripts/extract-critical-css.mjs
 *
 * Pre-req:
 *   - npm run build (per produrre dist/)
 *   - devDep `puppeteer` installato (SEGNALARE al main se missing)
 *   - alternativa runtime: `penthouse` (API diversa — questo script usa puppeteer)
 *
 * Exit codes:
 *   0  success
 *   20 puppeteer missing
 *   21 dist/index.html missing
 *   22 bundle CSS non trovato
 *   23 critical CSS eccede budget
 *   24 errore runtime headless
 *
 * Output:
 *   - Sovrascrive dist/index.html con critical inline + async preload.
 *   - NOTA: toccare index.html richiede coordinamento con altro agent
 *     (index.html e' shared file in WP19). Prima di applicare in main branch
 *     merge finale, SEGNALARE al main per merge coordinato.
 */

import { readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(REPO_ROOT, 'dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');
const BUDGET_GZIP_BYTES = 14 * 1024; // 14KB gzip (design §4.3)

const VIEWPORTS = [
  { label: 'mobile', width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
  { label: 'desktop', width: 1280, height: 800, deviceScaleFactor: 1, isMobile: false },
];

function log(...args) {
  console.log('[extract-critical-css]', ...args);
}
function die(code, msg) {
  console.error('[extract-critical-css] ERROR:', msg);
  process.exit(code);
}

async function loadPuppeteer() {
  const require_ = createRequire(import.meta.url);
  try {
    return require_('puppeteer');
  } catch {
    try {
      return require_('puppeteer-core');
    } catch {
      die(
        20,
        [
          'puppeteer (or puppeteer-core) not installed.',
          'Install (devDep):',
          '  npm i -D puppeteer',
          'or if system chromium already available:',
          '  npm i -D puppeteer-core',
          'Alternative fallback library: penthouse (different API — update this script).',
        ].join('\n  '),
      );
    }
  }
}

/**
 * Dedup + merge used CSS ranges da coverage puppeteer.
 */
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
    // Sort + merge overlapping ranges (coverage ranges can overlap fra viewport).
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

async function extractCritical() {
  if (!existsSync(INDEX_HTML)) {
    die(21, `dist/index.html not found. Run \`npm run build\` first.`);
  }

  const puppeteer = await loadPuppeteer();

  // NOTE: serve dist/ via file:// URL. Risorse assolute ("/assets/...") richiedono
  // un server locale. Strategia: avvia server statico in-process sulla dist/.
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
    let filePath = path.join(DIST_DIR, urlPath);
    if (urlPath === '/' || urlPath.endsWith('/')) filePath = path.join(filePath, 'index.html');
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
  const baseUrl = `http://127.0.0.1:${port}/`;
  log(`Local static server: ${baseUrl}`);

  let browser;
  const coverageAll = [];
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.deviceScaleFactor,
        isMobile: vp.isMobile,
      });
      await page.coverage.startCSSCoverage({ resetOnNavigation: true });
      await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 30_000 });
      // Piccolo settle: lascia girare eventuali effect Solid ATF.
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));
      const cov = await page.coverage.stopCSSCoverage();
      log(`${vp.label} viewport: ${cov.length} css file(s) analyzed`);
      coverageAll.push(cov);
      await page.close();
    }
  } catch (e) {
    die(24, `Headless run failed: ${e instanceof Error ? e.message : String(e)}`);
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.close();
  }

  const critical = mergeCoverage(coverageAll);
  if (!critical) {
    die(22, 'No CSS coverage collected. Check that bundle CSS is referenced in dist/index.html.');
  }

  const gzipSize = gzipSync(Buffer.from(critical, 'utf8')).length;
  log(`Critical CSS raw: ${critical.length} bytes, gzip: ${gzipSize} bytes (budget ${BUDGET_GZIP_BYTES})`);
  if (gzipSize > BUDGET_GZIP_BYTES) {
    die(
      23,
      `Critical CSS exceeds budget (${gzipSize} > ${BUDGET_GZIP_BYTES} bytes gzip).\n  Action: narrow viewport ATF, tighten Tailwind purge, or split hero component styles.`,
    );
  }

  // Inline into dist/index.html.
  let html = await readFile(INDEX_HTML, 'utf8');

  // Find main bundle CSS link (Vite emits <link rel="stylesheet" href="/assets/index-*.css">).
  const cssLinkRe = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["'](\/assets\/[^"']+\.css)["'][^>]*>/i;
  const cssMatch = html.match(cssLinkRe);
  if (!cssMatch) {
    log('WARN: no /assets/*.css <link rel="stylesheet"> found in dist/index.html');
    log('      Skipping async-preload rewrite; inlining critical only.');
  } else {
    const href = cssMatch[1];
    const asyncLink =
      `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n` +
      `    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
    html = html.replace(cssMatch[0], asyncLink);
    log(`Converted ${href} to async preload.`);
  }

  // Inject <style id="critical-css"> before </head>.
  const styleTag = `<style id="critical-css">\n${critical}\n</style>`;
  if (/id=["']critical-css["']/.test(html)) {
    html = html.replace(/<style[^>]*id=["']critical-css["'][^>]*>[\s\S]*?<\/style>/i, styleTag);
    log('Replaced existing <style id="critical-css"> block.');
  } else {
    html = html.replace(/<\/head>/i, `    ${styleTag}\n  </head>`);
    log('Injected <style id="critical-css"> before </head>.');
  }

  await writeFile(INDEX_HTML, html, 'utf8');
  const finalSize = (await stat(INDEX_HTML)).size;
  log(`Wrote ${INDEX_HTML} (${finalSize} bytes).`);
  log('Done. Coordinate with index.html owner agent before committing.');
}

extractCritical().catch((e) => {
  die(24, e instanceof Error ? e.stack || e.message : String(e));
});
