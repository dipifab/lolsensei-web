import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:8787';
const removed = [
  '/en/blog/lol-sensei-vs-opgg',
  '/it/blog/lol-sensei-vs-opgg',
  '/en/blog/lol-sensei-vs-blitz',
  '/it/blog/lol-sensei-vs-blitz',
];
const control = '/en/blog/how-to-climb-ranked-lol';

const browser = await chromium.launch();
let allPass = true;

try {
  const page = await browser.newPage();

  for (const path of removed) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    const robotsContent = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null);
    const pass = robotsContent === 'noindex';
    if (!pass) allPass = false;
    console.log(`${path} -> robots="${robotsContent}" ${pass ? 'PASS' : 'FAIL'}`);
  }

  await page.goto(BASE + control, { waitUntil: 'networkidle' });
  const ctrlRobots = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null);
  const ctrlPass = ctrlRobots !== 'noindex';
  console.log(`CONTROL ${control} -> robots="${ctrlRobots}" ${ctrlPass ? 'PASS' : 'FAIL'}`);
  if (!ctrlPass) allPass = false;
} finally {
  await browser.close();
}

process.exit(allPass ? 0 : 1);
