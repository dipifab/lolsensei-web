# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to a pre-release SemVer pattern: `<base>-<wp>`.

## [1.1.0-wp10] — 2026-04-19

### Added
- i18n completo per 8 lingue (EN, IT, ES, FR, DE, PT-BR, KO, zh-Hans)
- Dizionari traduzioni con 443 chiavi ciascuno (gaming-aware)
- Preload CJK fonts condizionale (Noto Sans SC + KR self-hosted)
- 3-tier pricing UI (Free, Ad-Free, Pro) — preview pre-WP11 (pricing runtime BE pending)
- Runtime pricing fetch con `usePricing()` hook, AbortController lifecycle, fallback build-time
- Script `scripts/check-fonts.mjs` pre-deploy gate per verifica woff2
- Feature flag `VITE_PUBLIC_PAGES_ENABLED` cablato al router
- WCAG 2.1 AA `role="status"` per pricing fallback (screen reader accessible)

### Changed
- Refactor `Pricing.tsx` per consumare endpoint `/api/v1/public/pricing` (fallback compatibile WP11)
- CSP hardening: rimosso Stripe + Cloudflare Insights non usati, least-privilege
- Hero title refactor: 3 segmenti i18n-friendly invece di `.replace()` fragile
- FAQ content sempre nel DOM (richiesto da JSON-LD FAQPage schema)
- `usePageMeta` cleanup idempotente con selettore `data-dynamic="hreflang"`
- `.map()` → `<For>` in componenti reattivi (ComparisonGrid, HowItWorks)
- CI: Lighthouse CI gate (SEO + a11y >= 0.9), `npm audit --omit=dev` high/critical

### Security
- DOMPurify applicato a `innerHTML` blog content (prevenzione XSS stored, dipendenza esterna CMS)
- CSP minima per landing: `frame-src 'none'`, `connect-src` solo API backend
- npm audit gate in CI per dipendenze high/critical

### Fixed
- Cleanup hreflang idempotente in `BlogPostPage.tsx` (non rimuove più tag globali)
- Banner italiano hardcoded in NotFoundPage → i18n 8 lingue
- Stringhe chrome EN in Navbar/Footer/BareLayout → tradotte 8 lingue
- Copyright year dinamico via template `{year}`

### Breaking Changes
- Nessuno per l'utente finale (solo frontend landing)
- `PricingResponse` schema: FE ora attende contratto canonico BE (WP11). Fino al rilascio BE, fallback build-time serve identici tier.

### Deferred (tech debt)
- M1 type cast i18n `as unknown as Translations`
- M2 silent failure loader dinamico i18n
- N-02/N-03 CJK font `size-adjust` / subset custom GB 2312 (pre SEO push zh-Hans)
- FAQ `max-height: 1000px` magic number (future: grid-template-rows)
- Legacy path competitor in `_headers` (eredità WP17 noindex)

### Migration
- N/A (solo frontend landing, no breaking per deploy pre-esistente)
