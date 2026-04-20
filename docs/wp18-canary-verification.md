# WP18 Task 31 — Canary Verification (beta.lolsensei.com)

**Data esecuzione:** 2026-04-20T20:06Z
**Branch:** `feat/wp18-solidstart`
**Version ID Worker:** `18d3ae0f-4932-4a0d-9eff-910769eb8916`
**Worker name:** `lolsensei-web-beta`
**Custom domain:** `beta.lolsensei.com`

## Contesto

Task 31 (canary deploy SolidStart → beta) era bloccato dal limite Cloudflare
Workers di 2000 char per riga nel file `_headers`. La direttiva
`Content-Security-Policy` con 79 hash SHA-256 degli script inline
(SolidStart hydration) generava una singola riga di ~4746 char → API rigetto
`[code: 10021]`.

`_headers` non supporta continuation multiline. La CSP doveva passare
runtime.

## Fix implementato — CSP via Worker middleware

### Architettura finale

```
scripts/compute-csp-hashes.mjs  →  src/generated/csp-hashes.ts
                                   (79 hash SHA-256 inline script)
                                          ↓ import
                              src/middleware.ts
                                 · onBeforeResponse stamp CSP header
                                   su response text/html
                                   (CSP_HEADER precomputato a cold-start)
                                          ↓
                                  public/_headers
                                    · rimossa direttiva CSP
                                    · conserva HSTS, nosniff, XFO,
                                      Referrer-Policy, Permissions-Policy,
                                      COR, Report-To, Cache-Control paths,
                                      X-Robots-Tag paths
```

### Build pipeline (doppio build)

```
cross-env NODE_ENV=production vinxi build    # pass 1: stub vuoto
  → .output/public/**/*.html con 79 script inline
  → .output/server/index.mjs (middleware bundled con whitelist [])

node scripts/compute-csp-hashes.mjs
  → scansiona .output/public/**/*.html
  → scrive src/generated/csp-hashes.ts con 79 hash reali

cross-env NODE_ENV=production vinxi build    # pass 2: hash reali
  → stesso HTML (79 script inline identici)
  → .output/server/index.mjs (middleware bundled con whitelist di 79 hash)
```

**Costo:** +~20s build time (secondo giro incrementale beneficia del
cache vinxi per i chunk non-middleware).

**Verificato:** 79 hash nel bundle == 79 hash emessi dagli HTML prerendered
(set identico, zero missing / zero extra). Il set e deterministico tra
giri successivi → non esiste regressione a catena.

### Perche questo approccio

Scelto vs. alternative:

- **TS module + doppio build (scelto):** semplice, predicible, zero async
  cost a runtime (CSP_HEADER calcolato una volta al cold-start). Costo:
  doppio build (+~20s).
- **Runtime JSON lookup via `env.ASSETS.fetch`:** elegante, single build.
  Scartato perche introduce un async cold-start cost, failure case da
  gestire (cosa fa il middleware se il fetch fallisce?), e richiede un
  cache module-level che non e banale in Cloudflare Workers isolates
  multipli.
- **Continua iniezione in `_headers`:** non fattibile — limite CF 2000
  char per riga.

## Verifica build

```
rm -rf .output .vinxi
VITE_PUBLIC_PAGES_ENABLED=true npm run build
```

- Output: `Prerendered 74 routes in 1.626s` (pass 1 + pass 2)
- `compute-csp-hashes.mjs`: `wrote 79 inline script hashes → src/generated/csp-hashes.ts`
- Max line length `.output/public/_headers`: **102 char** (era 4746) → ben sotto il limite 2000.
- `.output/public/_headers` totale size: 2039 byte.

## Test unit

```
npm run test:unit
 ✓ tests/integration/build-csp.test.ts (5 tests)
 ✓ tests/unit/lib/locales.test.ts (7 tests)
 ✓ tests/unit/middleware/localeDetection.test.ts (18 tests)
 ✓ tests/unit/components/seo/JsonLd.test.tsx (2 tests)
 ✓ tests/unit/components/seo/HreflangCluster.test.ts (4 tests)
 ✓ tests/unit/middleware/trailingSlash.test.ts (16 tests)
 ✓ tests/unit/lib/locales-parity.test.ts (4 tests)
 ✓ tests/unit/lib/meta-resolver.test.ts (4 tests)
 ✓ tests/unit/lib/faq-resolver.test.ts (3 tests)

 Test Files  9 passed (9)
      Tests  63 passed (63)
```

Il suite `build-csp.test.ts` e stato rifattorizzato per verificare il nuovo
contratto: (a) il modulo TS generato contiene un export valido; (b) il
`_headers` post-build NON contiene piu direttiva CSP; (c) nessuna riga in
`_headers` supera 2000 char.

## Deploy beta

```
npx wrangler deploy --env beta
  ✨ Read 478 files from .output/public
  🌀 Uploaded 2 new files (_headers.br, _headers.gz)
  Worker Startup Time: 14 ms
  Uploaded lolsensei-web-beta (19.78 sec)
  Deployed lolsensei-web-beta triggers (8.73 sec)
  Current Version ID: 18d3ae0f-4932-4a0d-9eff-910769eb8916
```

## Smoke live

### Root redirect

```
GET https://beta.lolsensei.com/
→ 302
  location: https://beta.lolsensei.com/en/
```

### Locale home

```
GET https://beta.lolsensei.com/en/
→ 200
  content-type: text/html
  content-security-policy: default-src 'self'; script-src 'self'
    'sha256-...' (79 hashes) 'strict-dynamic'
    https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:; font-src 'self' data:;
    connect-src 'self' https://api.lolsensei.com
    https://api-beta.lolsensei.com https://static.cloudflareinsights.com
    https://cloudflareinsights.com; frame-src 'none';
    frame-ancestors 'none'; base-uri 'self';
    form-action 'self' https://api.lolsensei.com;
    report-uri /csp-report
```

- CSP header lunghezza: **4746 char** (come attesa, tutti i 79 hash).
- Altri security header presenti via `public/_headers` backstop (HSTS,
  nosniff, Referrer-Policy, Permissions-Policy, XFO).
- Body: 1 `<h1>` → layout prerendered corretto.

### Crawler UA matrix

8/8 crawler ricevono 200 su `https://beta.lolsensei.com/en/`:

| UA                          | Status |
|-----------------------------|--------|
| Googlebot/2.1               | 200    |
| Bingbot/2.0                 | 200    |
| DuckDuckBot/1.0             | 200    |
| Slurp (Yahoo)               | 200    |
| YandexBot/3.0               | 200    |
| Baiduspider/2.0             | 200    |
| facebookexternalhit/1.1     | 200    |
| Twitterbot/1.0              | 200    |

### Sitemap + robots

```
GET https://beta.lolsensei.com/sitemap.xml
→ 200 application/xml
  cf-cache-status: HIT
  url count: 86

GET https://beta.lolsensei.com/robots.txt
→ 200 text/plain
```

## File modificati

- `scripts/compute-csp-hashes.mjs` — output TS module, non piu mutation `_headers`.
- `src/middleware.ts` — import whitelist, CSP header su response text/html in `onBeforeResponse`.
- `src/generated/csp-hashes.ts` — nuovo, committato come stub vuoto, rigenerato post-build con 79 hash.
- `public/_headers` — rimossa direttiva CSP, mantiene backstop statico.
- `package.json` — build script doppio pass.
- `tests/integration/build-csp.test.ts` — aggiornato per nuovo contratto.

## Note operative

- Il secondo `vinxi build` della pipeline **deve girare** dopo
  `compute-csp-hashes.mjs`, altrimenti il bundle `.output/server` contiene
  ancora la whitelist vuota del primo pass.
- La whitelist e **frozen al build-time**. Se una release introduce nuovi
  script inline (tipicamente su `_build/assets/*.js` change → hydration
  bootstrap cambia) va rigenerata. CI dovrebbe fallire il deploy se il
  bundle server contiene whitelist [].

## Esito

**TASK-W18-T31 unblocked.** Canary beta deploy success, CSP enforcement
funzionale, crawler e SEO surface in target.
