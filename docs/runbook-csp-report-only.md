# Runbook — CSP Report-Only (WP24 TASK-4-022)

## Obiettivo

Deploy del middleware CSP in modalita' `Content-Security-Policy-Report-Only`
per 48h prima dell'enforce, cosi' da raccogliere eventuali violazioni
residue senza spezzare l'UX pubblica.

## Gate di completamento (pre-enforce)

- 0 violazioni critiche registrate in Cloudflare Logs per 48h consecutivi.
- Criterio critico (MN-06): violazione con `blocked-uri` != `data:` /
  `inline` / stesso origin. `data:` + `inline` sono false-positive noti e
  vengono ignorati.

## Procedura

### 1. Attivare Report-Only

Aggiungi la env var al deploy target (Cloudflare Workers):

```bash
# wrangler.toml [vars] — oppure secret via wrangler secret put
VITE_CSP_REPORT_ONLY=true
```

```bash
npm run build
npx wrangler deploy
```

### 2. Verifica header post-deploy

```bash
curl -I https://lolsensei.com/en/ | grep -i csp
# Atteso: Content-Security-Policy-Report-Only: ...
```

### 3. Monitorare /csp-report

Il middleware gia' espone `POST /csp-report -> 204`. Il body viene
discarato al livello applicativo; i payload sono catturati via:

```bash
npx wrangler tail --format=pretty | grep csp-report
```

Oppure tramite dashboard Cloudflare Logs -> filtra `path:/csp-report`.

### 4. Dopo 48h: review

- Esporta logs (Cloudflare Dashboard Analytics -> Logs -> download)
- Filtro: `blocked-uri` NOT IN (`data:`, `inline`, stesso origin)
- Se count > 0: investigare origin e decidere whitelist o block
- Se count == 0: procedere enforce

### 5. Enforce

```bash
# Rimuovi/set to false la env var
VITE_CSP_REPORT_ONLY=false
npm run build && npx wrangler deploy
```

Verifica:

```bash
curl -I https://lolsensei.com/en/ | grep -i csp
# Atteso: Content-Security-Policy: ...  (header NORMALE, no -Report-Only)
```

### 6. Rollback

Se post-enforce si verificano regressioni UI (script bloccati che
rompono features), riattiva immediatamente Report-Only e investiga.

## Contesto

- Middleware: `src/middleware.ts` (buildCspHeader + CSP_HEADER_NAME toggle)
- Env flag: `VITE_CSP_REPORT_ONLY` (build-time, baked nel bundle)
- Correlato: TASK-4-023 (E2E security headers assertion post-enforce)
