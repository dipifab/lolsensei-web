#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const URLS = [
  { id: '6bvHEqOP2M9s118MjV3x3g', name: 'test1' },
  { id: 'trJBrwMvNp6HCUzhqHByRg', name: 'test2' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 2000 } });
const page = await ctx.newPage();

for (const { id, name } of URLS) {
  const url = `https://search.google.com/test/rich-results/result?id=${id}`;
  console.log(`\n=== ${name}: ${url} ===`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  const screenshotPath = `/tmp/rich-results-${name}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`screenshot: ${screenshotPath}`);

  const title = await page.title();
  console.log(`title: ${title}`);

  const bodyText = await page.evaluate(() => document.body.innerText);
  const excerpt = bodyText.slice(0, 3000);
  writeFileSync(`/tmp/rich-results-${name}.txt`, bodyText);
  console.log(`--- excerpt ---`);
  console.log(excerpt);
}

await browser.close();
