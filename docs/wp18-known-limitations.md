# WP18 — Known Limitations & Deferred Debt

Documento di riferimento per limitazioni note al momento del closure WP18. Ogni item e' accettato come debt consapevole, con owner e fase di risoluzione pianificata.

## Overview

WP18 ha migrato `lolsensei.com` da SPA CSR monolitico a SSG+CSR ibrido su SolidStart + Cloudflare Workers. Alcuni item post-review sono stati consapevolmente differiti per bilanciare scope, rischio di regressione e readiness del deploy.

---

## D-01 — Duplicazione `scripts/locales.mjs` vs `src/lib/i18n/locales.ts`

**Stato:** accepted, WP18.1 scheduled
**Impatto:** LOW
**Mitigazione attiva:** parity test in `tests/unit/lib/locales-parity.test.ts`

### Descrizione

`scripts/locales.mjs` duplica manualmente i valori di `src/lib/i18n/locales.ts` perche' gli script Node (sitemap generator, hreflang checker) non possono importare file TypeScript direttamente. Il rischio e' drift silenzioso: aggiunta di una locale in TS dimenticando l'aggiornamento del MJS porterebbe a HTML prerendered inconsistenti con sitemap/checker.

### Mitigazione in vigore

Il test `locales-parity.test.ts` (aggiunto in batch 3 post-review, commit `9d7125b`) esegue deep-equal di:
- `SUPPORTED_LOCALES`
- `BLOG_LOCALES`
- `DEFAULT_LOCALE`
- `HREFLANG_MAP`

Ogni PR che modifica una delle due sorgenti rompe il test se l'altra non e' allineata. Tempo di failure: secondi. Copertura: zero drift silente.

### Risoluzione pianificata (WP18.1)

Convertire `src/lib/i18n/locales.ts` in `locales.mjs` con JSDoc `@typedef` per preservare narrow typing `Locale = 'en' | 'it' | ...`. Eliminare `scripts/locales.mjs`.

**Effort:** ~2h (richiede tocchi in ogni file che importa `Locale`/`BlogLocale` type).

### Perche' non ora

- Ripple effect su decine di file src/
- Il parity test gia' previene la regressione concreta
- WP18 freeze window: la conversione introduce rischio sproporzionato all'improvement immediato

---

## D-02 — CSP `style-src 'unsafe-inline'`

**Stato:** accepted, WP19 scheduled
**Impatto:** MEDIUM
**Mitigazione attiva:** documentazione in `public/_headers`

### Descrizione

La Content-Security-Policy del sito ha `'unsafe-inline'` solo su `style-src` (NO su `script-src`, dove usiamo hash-based CSP3 con 79 hash + `'strict-dynamic'`). Il vector XSS via CSS injection resta possibile per un attacker che riesca a inserire un `<style>` tag arbitrario nell'HTML.

### Ragioni tecniche

`'unsafe-inline'` su style-src e' richiesto da:

1. **Tailwind v4** emette occasionali arbitrary values inline (es. `w-[137px]`, `color: oklch(...)`) che vengono inline-izzati nelle classi generate.
2. **Solid inline `style={...}`** attribute: pattern comune per stili dinamici computati a runtime.
3. **`@solidjs/start` hydration markers**: inserisce `<style>` inline per critical CSS durante hydration.

Rimuovere `'unsafe-inline'` senza nonce/hash rompe il rendering visivo.

### Risoluzione pianificata (WP19)

Tre opzioni (da valutare in WP19):

1. **Nonce-based style-src**: il middleware SolidStart inietta un `nonce` runtime in ogni risposta, poi tutti i `<style>` hanno `nonce="<value>"`. Richiede estrazione degli style attribute Solid in `<style>` con nonce.
2. **Hash-based style-src** (simmetrico a script-src): post-build step analogo a `compute-csp-hashes.mjs` che calcola SHA-256 di tutti gli style inline negli HTML prerendered. Complicazione: style tag + style attributes richiedono trattamento diverso (`'unsafe-hashes'` per attributes).
3. **Zero inline style**: refactor Tailwind + Solid per estrarre tutti gli stili dinamici in classi statiche. High effort, minimal practical gain.

**Preferenza tecnica:** Opzione 2 (hash-based + `'unsafe-hashes'`) — simmetrica al pattern script-src gia' in uso, no runtime overhead.

**Effort:** 4-6h (script post-build + test XSS via CSS injection in E2E).

### Perche' non ora

- WP18 scope esplicitamente esclude security hardening incrementale (out-of-scope per dev-status-wp18.json)
- Il vector XSS via CSS e' difensivamente mitigato da altri layer: `X-Content-Type-Options: nosniff`, `frame-ancestors 'none'`, strict `img-src`
- Priorita' WP19 definirita dopo verifica produttiva WP18 (E2E + pixel-diff)

---

## D-03 — `src/worker.ts` legacy file (RISOLTO — Task 29)

**Stato:** removed in Task 29
**Impatto:** LOW (pre-removal)
**Mitigazione attiva pre-removal:** `@deprecated` banner nel file (commit `e0d2084`)

### Descrizione

`src/worker.ts` era il vecchio entry point Cloudflare Worker pre-WP18. Dopo la migrazione SolidStart, `wrangler.toml` punta a `.output/server/index.mjs` e il file era orfano (non piu' referenziato).

### Risoluzione (Task 29)

Rimosso insieme agli altri file legacy del vecchio stack CSR/Vite:
- `src/worker.ts`
- `src/index.tsx` (old Vite entry)
- `index.html` (old Vite HTML template)
- `vite.config.ts` (sostituito da `app.config.ts` di SolidStart)
- `scripts/generate-jsonld.mjs` (JSON-LD build-time injector pre-Fase 3, sostituito da runtime `JsonLd.tsx`)
- `tsconfig.worker.json` + `tsconfig.node.json` (orphan project references)

### Rollback safety

Il rollback alla versione pre-cleanup e' garantito dal tag git `wp18-pre-legacy-cleanup`
(creato immediatamente prima della rimozione). Procedura incident:

```
git reset --hard wp18-pre-legacy-cleanup
```

Equivalente in sicurezza al precedente piano "keep until Task 31" via file-on-disk,
con il vantaggio di avere un set di artifact pulito su `main` e una fonte di verita'
singola per il rollback.

---

## Other review items — accepted as minor debt

### Minor: CSP hash regex via `/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g`

Il parser usa regex invece di un parser HTML completo (`parse5`). Edge case teorico: script inline contenente `</script>` letterale in una stringa con escape. Probabilita' pratica: zero (SolidStart non genera casi simili). **Accepted** — se mai diventasse problema, switch a parse5 e' un 10-min fix.

### Minor: `NODE_ENV=production` + `cross-env` cross-platform

Il build script ora usa `cross-env NODE_ENV=production vinxi build` (commit `1629162`). Windows/Mac/Linux compatible. La dipendenza aggiunta e' devDependency `cross-env ^10.1.0`.

### Minor: middleware `/` redirect query string preservation

Fixed in commit `8d6f3c3`. `url.search` preservato nel redirect `/` → `/{locale}/`. Nessun test unit aggiunto (root redirect e' inline nel createMiddleware, estrazione richiederebbe refactor significativo).

---

## Tracking

Issue tracker: TBD (da creare in WP18.1 kickoff con reference a questo doc).

**Last updated:** 2026-04-20 (post WP18 Fase 5 close + review batch 1-3 + debt #3 landing)
