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
