import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/*
            WP24 MIN-07 (perf) — font preload per ridurre FOUT sul CookieBanner
            (target INP < 200ms). Precarichiamo solo Inter Latin (400/600); le
            variant latin-ext, CJK e Manrope restano in caricamento lazy via CSS
            @font-face per non gonfiare il preload budget.
          */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/inter-latin.woff2"
            crossorigin="anonymous"
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
