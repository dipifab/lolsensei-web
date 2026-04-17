// M2 race-condition validation: navigate removed -> valid -> removed via SPA router.
// Uses SolidJS Router internal navigation (window.history.pushState + popstate) to
// avoid full page reload, which would reset component state and mask the race.
import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:8787';
const removed = '/en/blog/lol-sensei-vs-opgg';
const valid = '/en/blog/how-to-climb-ranked-lol';

async function spaNavigate(page, href) {
  await page.evaluate((h) => {
    window.history.pushState({}, '', h);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, href);
  await page.waitForTimeout(500);
}

const browser = await chromium.launch();
let pass = true;

try {
  const page = await browser.newPage();

  await page.goto(BASE + removed, { waitUntil: 'networkidle' });
  let robots = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null);
  console.log(`[1] removed -> "${robots}" ${robots === 'noindex' ? 'PASS' : 'FAIL'}`);
  if (robots !== 'noindex') pass = false;

  await spaNavigate(page, valid);
  robots = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null);
  const validOk = robots === null || robots === 'index, follow';
  console.log(`[2] removed->valid (SPA) -> "${robots}" ${validOk ? 'PASS' : 'FAIL (race condition)'}`);
  if (!validOk) pass = false;

  await spaNavigate(page, removed);
  robots = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null);
  console.log(`[3] valid->removed (SPA) -> "${robots}" ${robots === 'noindex' ? 'PASS' : 'FAIL'}`);
  if (robots !== 'noindex') pass = false;
} finally {
  await browser.close();
}

process.exit(pass ? 0 : 1);
