# WP18 Task 26 — Local Preview Smoke Test

Branch: `feat/wp18-solidstart`
Date: 2026-04-20
Build: `VITE_PUBLIC_PAGES_ENABLED=true npm run build` (preset
`cloudflare-module`, nitropack 2.13.3, @solidjs/start 1.3.2)
Preview: `npx wrangler dev .output/server/index.mjs --assets .output/public`

## Results (7/7 PASS)

| URL                 | Expected          | Observed           | Source              |
| ------------------- | ----------------- | ------------------ | ------------------- |
| `/`                 | 302 → `/en/`      | 302 → `/en/`       | middleware step 3   |
| `/en/`              | 200               | 200                | prerender index     |
| `/en/pricing/`      | 301 → `/en/pricing` | 301 → `/en/pricing` | middleware step 4   |
| `/en/pricing`       | 200               | 200                | prerender flat HTML |
| `/EN/`              | 301 → `/en/`      | 301 → `/en/`       | middleware step 4   |
| `/admin/users`      | 301 → `/console/users` | 301 → `/console/users` | middleware step 1   |
| `/nonexistent`      | 404               | 404                | `[lang].tsx` SSR    |

## Raw wrangler log

```
 ⛅️ wrangler 4.84.0
───────────────────
Your Worker has access to the following bindings:
Binding            Resource      Mode
env.ASSETS         Assets        local

⎔ Starting local server...
[wrangler:info] ✨ Parsed 17 valid header rules.
[wrangler:warn] Found 1 invalid header rule:
▶︎ Ignoring line 13 as it exceeds the maximum allowed length of 2000.

[wrangler:info] Ready on http://localhost:8787
[wrangler:info] HEAD / 302 Found (15ms)
[wrangler:info] HEAD /en/ 200 OK (57ms)
[wrangler:info] HEAD /en/pricing/ 301 Moved Permanently (1ms)
[wrangler:info] HEAD /en/pricing 200 OK (8ms)
[wrangler:info] HEAD /EN/ 301 Moved Permanently (1ms)
[wrangler:info] HEAD /admin/users 301 Moved Permanently (1ms)
[wrangler:info] HEAD /nonexistent 404 Not Found (3ms)
```

## Notes

- Middleware symbols verified present in
  `.output/server/chunks/nitro/nitro.mjs` (normalizeTrailingSlash,
  csp-report handler, `src/middleware` entry).
- Unit tests: `tests/unit/middleware/` → 34/34 green (baseline policy
  OP-W18-004 "deep routes WITHOUT trailing slash" unchanged).
- Wrangler Assets bindings were told to skip auto html_handling and
  not_found_handling so redirect semantics flow through the middleware
  (single source of truth). Without this, Assets was emitting 307 on
  `/en/pricing/` before the Worker could run.

ref TASK-W18-T26
