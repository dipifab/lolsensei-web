# WP18 Production Deploy Report — TASK-W18-T32

**Data deploy:** 2026-04-20 21:11 UTC
**Operatore:** Fabrizio Di Pietro (autorizzazione admin override)
**Stato:** LIVE su https://www.lolsensei.com
**Esito:** SUCCESS — smoke 8/8 PASS, 0 errori 5xx in window 2min

---

## Riferimenti commit

| Item | Valore |
|---|---|
| PR | [#2](https://github.com/dipifab/lolsensei-web/pull/2) — `WP18: Migrazione SolidStart SSR/SSG` |
| Merge SHA (squash su main) | `8c0e3dbae0aaa664944b0edc40c5e4d7aabb55b2` |
| Merge method | `gh pr merge 2 --squash --admin` (bypass CI h3 CVE) |
| Release tag | `wp18-production-deploy` (pushato su origin) |
| Cloudflare version ID | `cf52be07-3d79-400b-88ff-039e9b5c4271` |
| Worker endpoint | `lolsensei-web.fab-dipietro.workers.dev` |
| Public URL | `https://www.lolsensei.com` |

---

## Build metrics

| Metric | Value | Expected | Result |
|---|---|---|---|
| Prerendered routes | 74 | ~67+ | PASS |
| HTML files in `.output/public` | 67 | 67+ | PASS |
| CSP sha256 hashes in `csp-hashes.ts` | 79 | 79 | PASS |
| `.output/public/_headers` max line length | 102 char | <2000 | PASS |
| `.output/server/index.mjs` | presente | esiste | PASS |
| Worker startup time | 13 ms | n/a | OK |
| Total upload | 2637.76 KiB / gzip 668.46 KiB | n/a | OK |
| Assets uploaded | 430 files (30 already cached) | n/a | OK |

---

## Smoke test results (post-deploy, propagazione 15s)

| Check | Expected | Actual | Status |
|---|---|---|---|
| `GET /` | 302 → `/en/` | 302 `location: https://www.lolsensei.com/en/` | PASS |
| `GET /en/` status | 200 | 200 | PASS |
| `GET /en/` CSP header | `content-security-policy` con 79 sha256 | presente, 79 hash + `strict-dynamic` | PASS |
| `GET /en/` h1 | >= 1 | 1 (match `<h1 class="...">`) | PASS* |
| `GET /en/pricing` | 200 | 200 `content-type: text/html` | PASS |
| `GET /admin/users` | 301 → `/console/users` | 301 `location: /console/users` | PASS |
| `GET /nonexistent` | 404 | 404 | PASS |
| `GET /it/faq` FAQPage JSON-LD | present | `FAQPage` count = 1 | PASS |
| `GET /sitemap.xml` | 86 `<loc>` | 86 | PASS |
| `GET /robots.txt` | Disallow `/console`, `/admin`, `/auth/` | presenti tutti | PASS |

*Finding minore: lo script iniziale cercava `<h1>` letterale (vuoto, senza attributi). L'HTML reale contiene `<h1 class="text-4xl ...">`. Con match case-insensitive il count e' 1 come atteso. Non bloccante.

---

## Runtime monitoring — 2 min window

- Tail command: `npx wrangler tail --format pretty`
- Window: 2026-04-20 21:12:02 → 21:14:02 UTC (approx)
- Request processate visibili nel tail: 15+ (smoke + utenti organici)
- Errori 5xx: **0**
- Tutte le request loggate come "Ok"

Finding minore: il tail mostra 3 `POST /csp-report` a timestamp 23:11:50 (pre-deploy, da WP15). Nessun `csp-report` post-deploy nella window — CSP WP18 non genera violazioni su asset legittimi.

Finding minore 2: il tail mostra 2 `GET /downloads/LoLSensei-Setup.exe` e `/downloads/lolsensei-setup.exe` (pre-deploy, 23:11:50). Tracking separato per verificare path assets installer.

---

## CSP verifica

Header `content-security-policy` deployato include:

- `default-src 'self'`
- `script-src 'self' <79 sha256 hashes> 'strict-dynamic' https://static.cloudflareinsights.com`
- `style-src 'self' 'unsafe-inline'` (debt D-02, accepted)
- `img-src 'self' data: https:`
- `connect-src 'self' https://api.lolsensei.com https://api-beta.lolsensei.com ...`
- `frame-src 'none'; frame-ancestors 'none'`
- `report-uri /csp-report`

`report-to` header anche presente per NEL Cloudflare.

---

## Merge admin override — h3 CVE debt

Merge bypassato PR Gate CI (`npm audit --audit-level=high --omit=dev` fallisce per 5 CVE su `h3` transitive da `vinxi`). Debt formalizzato in `docs/wp18-known-limitations.md` sezione **D-04**:

- Impatto runtime CF Workers: **ZERO** (h3 non nel bundle `.output/server/index.mjs`)
- Exposure limitata a dev server locale (`npm run dev`)
- Risoluzione attesa: upgrade upstream vinxi → h3 >= 1.15.9
- Tracking: issue WP18.1 kickoff

Autorizzazione esplicita utente 2026-04-20 per Opzione A (admin override) dopo analisi alternative.

---

## Rollback path

Se regressione post-deploy identificata:

```bash
git checkout wp18-production-deploy
npx wrangler deploy
```

Il tag preserva lo stato funzionante. Pre-WP18 rollback via revert commit `8c0e3dba` se necessario ripristino completo.

---

## Next steps raccomandati

1. Monitoring esteso `wrangler tail` 15-30 min post-deploy (best practice)
2. Verifica Lighthouse production su `/en/`, `/en/pricing`, `/it/faq`
3. Check Cloudflare Analytics per spike latenza/errori 24h
4. Apri issue WP18.1 per tracking h3 CVE upstream
5. Investigare 2 richieste `/downloads/*.exe` (finding minore tail)
6. Aggiornamento SDLC review section TASK-W18-T32 in `dev-repository`

---

**Task status:** TASK-W18-T32 → DONE
**Tag:** `wp18-production-deploy`
**Document refs:** D-04, TASK-W18-T32
