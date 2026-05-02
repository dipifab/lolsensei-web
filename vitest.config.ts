import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  // WPCP-001 (CR-063): vite-plugin-solid e' richiesto per i test che
  // renderizzano componenti SolidJS via JSX (es. ChampionPortrait,
  // GuideCard regression). Senza, JSX viene compilato con factory React e
  // i test falliscono con "React is not defined".
  plugins: [solidPlugin()],
  resolve: {
    // Forza il bundle SSR di solid-js negli unit test che usano renderToString:
    // Vitest gira in Node, e senza queste conditions importa la build "client"
    // che chiama API DOM all'evaluation (es. Element.prototype patches).
    conditions: ['development', 'browser'],
  },
  test: {
    environment: 'jsdom',
    include: [
      'tests/unit/**/*.test.{ts,tsx}',
      'tests/integration/**/*.test.{ts,tsx}',
      'tests/contracts/**/*.test.{ts,tsx}',
    ],
    exclude: ['tests/e2e/**', 'node_modules/**'],
    server: {
      deps: {
        // Inline solid-js perche e' un ESM-only package che usa custom
        // resolve conditions; senza inline, vitest puo caricare la build
        // server di solid e rompere i test che renderizzano JSX.
        inline: [/solid-js/, /@solidjs/],
      },
    },
  },
});
