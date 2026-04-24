import { createHandler, StartServer } from '@solidjs/start/server';
// WP19.1 TASK-3-002 — inline critical CSS + fonts.css via `?raw` import Vite.
// Strategia unica (NO fs.readFileSync runtime; allineato ad architecture.md §3.4).
// Il bundle CSS principale resta linkato via `<link rel="stylesheet">` standard
// (NO pattern async-CSS `onload=` — REQ-NF-019-1-006, CSP strict baseline WP19 P4).
import criticalCss from '../scripts/critical-css.txt?raw';
import fontsCss from '../public/fonts/fonts.css?raw';

const headStyleContent = criticalCss + '\n' + fontsCss;

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/*
            WP19.1 head ordering (allineato ad api-contracts.md §3):
              1. Critical <style> inline (critical CSS + @font-face merged) — ≤14336 byte contenuto
              2. Preload hero mobile (media-query gated <1024px)
              3. Preload hero desktop (media-query gated ≥1024px)
              4. Bundle CSS standard via <link rel="stylesheet"> (da {assets} SolidStart)
              5. Preload Inter Latin (font critico, FOUT minimizzato)
          */}
          {/* 1 — critical <style> inline (WP19.1 REQ-F-019-1-003/008, REQ-NF-019-1-002) */}
          {/* eslint-disable-next-line solid/no-innerhtml */}
          <style innerHTML={headStyleContent} />
          {/* 2 — preload hero mobile (WP19.1 REQ-F-019-1-002) */}
          <link
            rel="preload"
            as="image"
            href="/images/hero-panel-mobile.webp"
            media="(max-width: 1023px)"
          />
          {/* 3 — preload hero desktop (pre-esistente, non regredire) */}
          <link
            rel="preload"
            as="image"
            href="/images/hero-panel-large.webp"
            media="(min-width: 1024px)"
          />
          {/* 4 — bundle CSS + altri asset SolidStart */}
          {assets}
          {/* 5 — preload Inter latin (WP24 heritage, WP19.1 preservato) */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/inter-latin.woff2"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
