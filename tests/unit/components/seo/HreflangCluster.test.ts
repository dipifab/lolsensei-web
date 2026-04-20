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

  it('uses BCP-47 casing for hreflang (pt-BR, zh-Hans) while keeping path segment lowercase', () => {
    const links = buildHreflangLinks('features', BASE);
    const ptBr = links.find((l) => l.hreflang === 'pt-BR');
    const zhHans = links.find((l) => l.hreflang === 'zh-Hans');
    expect(ptBr?.href).toBe(`${BASE}/pt-br/features`);
    expect(zhHans?.href).toBe(`${BASE}/zh-Hans/features`);
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
});
