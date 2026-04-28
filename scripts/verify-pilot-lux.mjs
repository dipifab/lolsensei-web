// Headless verifier for CR-057 pilot Lux mid.
// Captures console errors, hydration mismatches, and asserts the
// matchup-draft block renders without runtime exceptions.
import { chromium } from 'playwright';

const URLS = [
  'http://localhost:3000/it/champion/lux/mid/guide',
  'http://localhost:3000/it/champion/akali/mid/guide',
  'http://localhost:3000/en/champion/lux/mid/guide',
];

async function check(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleMessages = [];
  const pageErrors = [];
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') {
      consoleMessages.push({ type: m.type(), text: m.text() });
    }
  });
  page.on('pageerror', (e) => pageErrors.push(e.message));

  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // Per Lux: verifico che il blocco matchup-draft sia visibile dopo hydration.
  const isLux = url.includes('/lux/');
  const matchupVisible = isLux
    ? await page
        .locator('[data-testid="matchup-draft-block"]')
        .isVisible({ timeout: 5000 })
        .catch(() => false)
    : null;

  // Navbar hydration check: count children (links, lang switcher).
  // `isVisible` on fixed/backdrop-blur header is unreliable; we verify
  // that hydration filled in the children that come from <For> over i18n.
  const navbarChildCount = await page
    .locator('header nav button, header nav a')
    .count()
    .catch(() => 0);

  await browser.close();
  return { url, consoleMessages, pageErrors, matchupVisible, navbarChildCount };
}

const results = [];
for (const url of URLS) {
  const r = await check(url);
  results.push(r);
}

let fail = false;
for (const r of results) {
  console.log('\n=== ' + r.url + ' ===');
  console.log('  navbar interactive children:', r.navbarChildCount);
  if (r.matchupVisible !== null) {
    console.log('  matchup-draft-block visible:', r.matchupVisible);
  }
  console.log('  pageErrors:', r.pageErrors.length);
  for (const e of r.pageErrors) console.log('    [pageerror]', e);
  console.log('  console errors/warnings:', r.consoleMessages.length);
  for (const m of r.consoleMessages) {
    const tag = m.type.toUpperCase();
    console.log(`    [${tag}]`, m.text.slice(0, 220));
  }
  const hydrationProblem = r.consoleMessages.some((m) =>
    /[Hh]ydration|hydration key|Unable to find DOM/.test(m.text),
  ) || r.pageErrors.some((e) => /[Hh]ydration|Unable to find DOM/.test(e));
  if (hydrationProblem) {
    console.log('  >>> HYDRATION PROBLEM PRESENT');
    fail = true;
  }
  if (r.url.includes('/lux/') && !r.matchupVisible) {
    console.log('  >>> MATCHUP BLOCK NOT RENDERED');
    fail = true;
  }
  if (r.navbarChildCount < 2) {
    console.log('  >>> NAVBAR NOT HYDRATED (no interactive children)');
    fail = true;
  }
}

console.log('\n' + (fail ? 'FAIL' : 'PASS'));
process.exit(fail ? 1 : 0);
