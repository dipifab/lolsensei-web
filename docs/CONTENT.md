# Content Guidelines — LoL Sensei Blog & Structured Data

Governance rules for blog post maintenance. Applies to all locales.

## `dateModified` Policy (REQ-F-019-005)

Every blog post **MUST** expose `dateModified` as an ISO-8601 date string (`'YYYY-MM-DD'`).

- **On initial publication**: `dateModified` equals `datePublished` (or may be omitted — defaults to `date`).
- **On any substantive content change**: update `dateModified` to the current date.
- Substantive change = new sections, material copy edits, restructured content, added/removed images or tables. Typo fixes are NOT substantive.
- Missing/stale `dateModified` breaks BlogPosting JSON-LD freshness signals for search engines.

## `BlogPost` Shape

Reference: `src/data/blog/types.ts`.

```ts
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;        // sanitized HTML (DOMPurify pre-render)
  date: string;           // ISO-8601 — date of first publication
  dateModified?: string;  // ISO-8601 — REQUIRED for WP19 target posts
  author: string;         // rendering-only string; JSON-LD uses Organization @id
  tags: string[];
  readingTime: number;
  image?: string;
  howToSteps?: Array<{ name: string; text: string }>; // HowTo-eligible posts only
}
```

## PR Checklist — Content Updates

Before merging any blog content change, verify:

- [ ] `dateModified` updated to current date (if change is substantive)
- [ ] `readingTime` recalculated if word count delta >10%
- [ ] Structured data still valid: paste one URL into Google Rich Results Test and confirm zero errors
- [ ] If `content` HTML was touched, a11y preserved: tables have `<caption>` + `<th scope>`, images have `alt`, lists use semantic tags
- [ ] EN + IT parity maintained for 6 WP19 target posts (see list below)

## WP19 Target Posts (EN + IT)

Scope of REQ-F-019-004 & REQ-F-019-005:

| # | Slug | Structure |
|---|------|-----------|
| 1 | `how-ai-coaching-helps-you-learn-league` | `<ul>` |
| 2 | `understanding-champion-select` | `<table>` |
| 3 | `why-copying-builds-doesnt-help` | `<ol>` |
| 4 | `how-to-climb-ranked-lol` | `<ol>` + `<table>` + `howToSteps` |
| 5 | `how-to-stop-tilting-lol` | `<ol>` + `<ul>` + `howToSteps` |
| 6 | `best-lol-ai-coach-2026` | `<table>` |

Other 6 locales (es/fr/de/pt-br/ko/zh-Hans) are **out of scope for WP19** — tracked in backlog **WP19.2** (blog content i18n parity).

## Structured Data Change Protocol

Any edit to `src/lib/jsonld-data.ts`:

1. Run `npm run build:jsonld` locally and inspect diff on `index.html`.
2. Test `npm run build` end-to-end.
3. Paste output URL in Google Rich Results Test for all schema types present (Organization, WebSite, SoftwareApplication, FAQPage, HowTo, BlogPosting).
4. Document the change in PR description with before/after JSON excerpt.

## Author Attribution

- `BlogPosting.author` points to the `Organization` (`@id: https://lolsensei.com/#organization`).
- The `BlogPost.author` string field is rendering-only; the JSON-LD builder ignores its value.

## Backlog Links

- **WP19.1**: Blog screenshots addition (deferred from WP19 scope).
- **WP19.2**: i18n content parity for 6 non-EN/IT locales on target posts.
