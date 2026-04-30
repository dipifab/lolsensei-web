import { describe, it, expect } from 'vitest';
import { buildHreflangLinks } from '../../../../src/components/seo/HreflangCluster';

const BASE = 'https://www.lolsensei.com';

describe('buildHreflangLinks', () => {
  it('produces 9 entries for public route (8 locales + x-default)', () => {
    const links = buildHreflangLinks('pricing', BASE);
    expect(links).toHaveLength(9);
    expect(links[links.length - 1]).toEqual({
      hreflang: 'x-default',
      href: `${BASE}/en/pricing`,
    });
  });

  it('uses BCP-47 hreflang values (pt-BR, zh-Hans) while keeping the URL path lowercase', () => {
    const links = buildHreflangLinks('features', BASE);
    const ptBr = links.find((l) => l.hreflang === 'pt-BR');
    const zhHans = links.find((l) => l.hreflang === 'zh-Hans');
    // REQ-SEO-023: hreflang attribute value stays mixed-case `zh-Hans`
    // (BCP-47 / RFC 5646), but the URL path segment is lowercase `zh-hans`.
    expect(ptBr?.href).toBe(`${BASE}/pt-br/features`);
    expect(zhHans?.href).toBe(`${BASE}/zh-hans/features`);
  });

  it('restricts to BLOG_LOCALES (en,it) when isBlogRoute=true — 3 entries total', () => {
    const links = buildHreflangLinks('blog/my-post', BASE, { isBlogRoute: true });
    expect(links).toHaveLength(3);
    expect(links.map((l) => l.hreflang)).toEqual(['en', 'it', 'x-default']);
    expect(links[2]).toEqual({ hreflang: 'x-default', href: `${BASE}/en/blog/my-post` });
  });

  it('emits locale root with trailing slash when path is empty (home)', () => {
    const links = buildHreflangLinks('', BASE);
    const en = links.find((l) => l.hreflang === 'en');
    expect(en?.href).toBe(`${BASE}/en/`);
    expect(links[links.length - 1].href).toBe(`${BASE}/en/`);
  });

  // -------------------------------------------------------------------------
  // WP30 TASK-WP30-F5 — explicit coverage for the WP30 route patterns.
  // -------------------------------------------------------------------------

  it('WP30 tier-list root: 9 entries, x-default -> EN, all locales lowercase except BCP-47', () => {
    const links = buildHreflangLinks('tier-list', BASE);
    expect(links).toHaveLength(9);
    const en = links.find((l) => l.hreflang === 'en');
    const it = links.find((l) => l.hreflang === 'it');
    const xDefault = links[links.length - 1];
    expect(en?.href).toBe(`${BASE}/en/tier-list`);
    expect(it?.href).toBe(`${BASE}/it/tier-list`);
    expect(xDefault).toEqual({ hreflang: 'x-default', href: `${BASE}/en/tier-list` });
  });

  it('WP30 tier-list with role filter preserves the query string in every locale href', () => {
    // Note: the route handler builds the canonical query string and passes it
    // as part of `path` (e.g., `tier-list?role=mid`). buildHreflangLinks then
    // joins it with the locale prefix — qs is preserved verbatim.
    const links = buildHreflangLinks('tier-list?role=mid', BASE);
    expect(links).toHaveLength(9);
    for (const l of links) {
      expect(l.href).toContain('?role=mid');
    }
    const en = links.find((l) => l.hreflang === 'en');
    expect(en?.href).toBe(`${BASE}/en/tier-list?role=mid`);
  });

  it('WP30 summoner page reciprocity: EN/IT cluster + x-default -> EN', () => {
    // Summoner pages use the public locale set (8 locales). The path includes
    // the region + handle segments which are lowercase by route contract.
    const links = buildHreflangLinks('summoner/euw1/caps-euw', BASE);
    expect(links).toHaveLength(9);
    const en = links.find((l) => l.hreflang === 'en');
    const it = links.find((l) => l.hreflang === 'it');
    const xDefault = links[links.length - 1];
    expect(en?.href).toBe(`${BASE}/en/summoner/euw1/caps-euw`);
    expect(it?.href).toBe(`${BASE}/it/summoner/euw1/caps-euw`);
    expect(xDefault.href).toBe(`${BASE}/en/summoner/euw1/caps-euw`);
  });

  it('WP30 hreflang cluster: every entry has unique hreflang (no dupes)', () => {
    const links = buildHreflangLinks('tier-list', BASE);
    const seen = new Set<string>();
    for (const l of links) {
      expect(seen.has(l.hreflang)).toBe(false);
      seen.add(l.hreflang);
    }
    expect(seen.size).toBe(links.length);
  });
});
