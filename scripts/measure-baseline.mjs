#!/usr/bin/env node
// WP19 — Lighthouse mobile baseline (REQ-NF-019-012 AC5)
// Usage:
//   node scripts/measure-baseline.mjs [outputPath]
//   BASELINE_URL=https://lolsensei.com/en node scripts/measure-baseline.mjs
//
// One-shot manual measurement, NOT for CI. Captures LCP/CLS/FCP/TBT pre-WP19
// to enable delta gates in P3 (REQ-NF-019-012 AC4: delta LCP >=500ms).

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const DEFAULT_URL = 'https://lolsensei.com/en';
const DEFAULT_OUT = 'dev-repository/specs/wp19/baseline-lighthouse-mobile.json';

const url = process.env.BASELINE_URL || DEFAULT_URL;
const outArg = process.argv[2] || DEFAULT_OUT;
const outPath = resolve(process.cwd(), outArg);

let lighthouse;
let chromeLauncher;
try {
  ({ default: lighthouse } = await import('lighthouse'));
  chromeLauncher = await import('chrome-launcher');
} catch (err) {
  console.error('[measure-baseline] Missing deps. Run: npm i -D lighthouse chrome-launcher');
  console.error(err?.message || err);
  process.exit(2);
}

let chrome;
try {
  chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless=new', '--disable-gpu', '--no-sandbox'],
  });
} catch (err) {
  console.error('[measure-baseline] Failed to launch Chrome:', err?.message || err);
  process.exit(3);
}

const settings = {
  logLevel: 'info',
  output: 'json',
  onlyCategories: ['performance'],
  formFactor: 'mobile',
  throttling: {
    rttMs: 150,
    throughputKbps: 1638.4,
    requestLatencyMs: 562.5,
    downloadThroughputKbps: 1474.56,
    uploadThroughputKbps: 675,
  },
  screenEmulation: {
    mobile: true,
    width: 360,
    height: 640,
    deviceScaleFactor: 2.625,
    disabled: false,
  },
  port: chrome.port,
};

let runnerResult;
try {
  console.error(`[measure-baseline] URL=${url} port=${chrome.port}`);
  runnerResult = await lighthouse(url, settings);
} catch (err) {
  await chrome.kill();
  console.error('[measure-baseline] Lighthouse run failed:', err?.message || err);
  process.exit(4);
}

await chrome.kill();

if (!runnerResult?.lhr) {
  console.error('[measure-baseline] Empty lhr in result');
  process.exit(5);
}

const { lhr } = runnerResult;
const audits = lhr.audits || {};
const summary = {
  url,
  fetchTime: lhr.fetchTime,
  lighthouseVersion: lhr.lighthouseVersion,
  formFactor: 'mobile',
  device: 'Moto G4',
  metrics: {
    largestContentfulPaint: audits['largest-contentful-paint']?.numericValue ?? null,
    cumulativeLayoutShift: audits['cumulative-layout-shift']?.numericValue ?? null,
    firstContentfulPaint: audits['first-contentful-paint']?.numericValue ?? null,
    totalBlockingTime: audits['total-blocking-time']?.numericValue ?? null,
  },
  performanceScore: lhr.categories?.performance?.score ?? null,
};

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify({ summary, lhr }, null, 2), 'utf8');

console.error(`[measure-baseline] Saved -> ${outPath}`);
console.log(JSON.stringify(summary, null, 2));
