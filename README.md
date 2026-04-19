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

### Font CJK (WP10 TASK-10-6-012, DONE)

Status: **DONE** — subset self-hosted via `@fontsource/noto-sans-sc` e `@fontsource/noto-sans-kr`.

File serviti da `public/fonts/`:
- `noto-sans-sc-{400,600,700}.woff2` (Chinese Simplified)
- `noto-sans-kr-{400,600,700}.woff2` (Korean)

Dettagli:
1. `@font-face` in `public/fonts/fonts.css` con `unicode-range` CJK e `font-display: swap`.
2. Font-stack in `src/index.css` include `Noto Sans SC` e `Noto Sans KR` come fallback:
   il browser seleziona il font per i soli glifi CJK (unicode-range) mantenendo Inter/Manrope per Latin.
3. Preload condizionale in `index.html` (script inline pre-bundle) attivo per `/ko/` e `/zh-Hans/`.
4. Licenza OFL 1.1 (Noto Sans è distribuito sotto OFL; copia originale inclusa nel pacchetto npm).

Copia ri-generabile con:
```
cp node_modules/@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-{400,600,700}-normal.woff2 public/fonts/
cp node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-{400,600,700}-normal.woff2 public/fonts/
# rinominare in noto-sans-{sc,kr}-{400,600,700}.woff2
```

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
