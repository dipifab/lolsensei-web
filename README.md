## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)

### Rollback procedure (WP10 TASK-10-7-008)

In caso di regressione post-deploy:

1. **Identifica versione precedente stabile** (GitHub Releases tag o commit SHA)
   ```bash
   git log --oneline --decorate --all | head -20
   ```
2. **Revert Cloudflare Workers**:
   ```bash
   npx wrangler deployments list
   npx wrangler rollback --deployment-id <previous-id>
   ```
3. **Git revert** solo se necessario rigenerare build:
   ```bash
   git revert <bad-commit-sha>
   git push origin main
   ```
   GitHub Actions CI ridepoloya automaticamente su Cloudflare.
4. **Verifica**: `curl -I https://www.lolsensei.com/en/` → 200, Lighthouse SEO >= 0.9.

### T3 exit checklist (WP10 TASK-10-7-010)

Prima di dichiarare WP10 in produzione stabile:

- [ ] `npm run check:i18n` → 8 lingue x 412 chiavi OK
- [ ] `npm run check:seo-hreflang` → 72 URL x 9 hreflang OK
- [ ] `npm run check:links` → 0 broken local links
- [ ] Lighthouse SEO >= 0.9 su /en/, /it/, /zh-Hans/
- [ ] Google Search Console 7gg: no crawl errors su /zh-Hans/ (post rename /zh/)
- [ ] CF Redirect Rule `/zh/* -> /zh-Hans/:splat 301` attiva su dashboard
- [ ] Smoke test manuale: lang switch, mobile download modal, privacy/terms, 404
- [ ] `npm run test:e2e` → tutti i test Playwright verdi
- [ ] Font CJK subset presenti in `public/fonts/` (se azione manuale completata)

### Font CJK (WP10 TASK-10-6-012, pendente)

Per il rendering di `ko` e `zh-Hans` servono subset CJK di Noto Sans:

1. Scarica da Google Fonts:
   - `Noto Sans SC` (Simplified Chinese) subset → `public/fonts/noto-sans-sc.woff2`
   - `Noto Sans KR` (Korean) subset → `public/fonts/noto-sans-kr.woff2`
2. Licensing: OFL 1.1, includere `public/fonts/OFL.txt` con testo licenza
3. Abilitare preload condizionale via `FontsLoader` (Fase 4 componente differito)
4. Gate `npm run check:fonts` (script da creare in scripts/) deve verificare esistenza file prima del deploy

Status attuale: **PENDENTE** — richiede azione manuale per download asset binari.

### Cloudflare Redirect Rules (manuale)

Oltre a `wrangler.toml` (SPA fallback gia attivo), configurare via **Cloudflare Dashboard > Rules > Redirect Rules** le seguenti regole:

1. **Root apex → English locale**
   - When: `URI Path equals "/"`
   - Then: `Redirect to "https://www.lolsensei.com/en/"` status `301`

2. **Legacy `/zh/` → `/zh-Hans/` (WP10 rename)**
   - When: `URI Path starts with "/zh/"`
   - Then: `Redirect to "https://www.lolsensei.com/zh-Hans/"` concat remainder, status `301`
   - Preserva SEO per URL indicizzati pre-WP10.

3. **Apex `lolsensei.com` → `www.lolsensei.com`**
   - When: `Hostname equals "lolsensei.com"`
   - Then: Redirect to `https://www.lolsensei.com{URI Path}` status `301`
