// tests/e2e/community/search.spec.ts
//
// Three smoke scenarios for the community search route.

import { test, expect } from "@playwright/test";

const LANG = "en";

test.describe("Community search", () => {
  test("landing with ?q shows results, highlights and took_ms", async ({ page }) => {
    await page.goto(`/${LANG}/community/search?q=patch`);

    // results list appears
    const list = page.locator("#results ul[role='list']");
    await expect(list).toBeVisible();
    await expect(list.locator("li[role='listitem']").first()).toBeVisible();

    // <mark> present somewhere in the snippet (escape-then-replace path)
    await expect(list.locator("mark").first()).toBeVisible();

    // "N results in M ms" live region
    await expect(page.getByText(/in\s+\d+\s*ms/)).toBeVisible();

    // robots meta is index,follow (public SEO)
    const robots = await page.locator('meta[name="robots"]').getAttribute("content");
    expect(robots).toMatch(/index/);
    expect(robots).toMatch(/follow/);
  });

  test("apply category filter updates URL and results", async ({ page }) => {
    await page.goto(`/${LANG}/community/search?q=patch`);

    await page.locator("#filter-category").selectOption({ index: 1 });
    await page.getByRole("button", { name: /apply filters/i }).click();

    // URL should include the new category param
    await expect(page).toHaveURL(/[?&]category=/);

    // results list still visible (or empty-state, both acceptable)
    const anyResultsOrEmpty =
      (await page.locator("#results ul[role='list'] > li").count()) > 0 ||
      (await page.getByRole("heading", { name: /no results/i }).isVisible());
    expect(anyResultsOrEmpty).toBe(true);
  });

  test("load more appends without duplicates", async ({ page }) => {
    await page.goto(`/${LANG}/community/search?q=meta`);
    const first = page.locator("#results ul[role='list'] > li");
    await expect(first.first()).toBeVisible();
    const beforeIds = await first.evaluateAll((els) =>
      els.map((e) => e.querySelector("a")?.getAttribute("href") ?? ""),
    );

    const loadMore = page.getByRole("button", { name: /load more/i });
    if (!(await loadMore.isVisible())) test.skip();

    await loadMore.click();

    // Wait for the list to grow
    await expect
      .poll(async () => first.count())
      .toBeGreaterThan(beforeIds.length);

    const afterIds = await first.evaluateAll((els) =>
      els.map((e) => e.querySelector("a")?.getAttribute("href") ?? ""),
    );
    const unique = new Set(afterIds);
    expect(unique.size).toBe(afterIds.length);              // no duplicates
    expect(afterIds.slice(0, beforeIds.length)).toEqual(beforeIds); // prefix preserved
  });
});
