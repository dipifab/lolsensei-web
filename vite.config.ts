import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

// WP21 — Hardening build prod (REQ-NF-021-003, REQ-NF-021-004, CLR-007, CLR-203):
// - sourcemap off in prod
// - hash-only filenames (no path-leak come /admin, /KPI, ecc. nei nomi chunk)
// - drop console/debugger in prod via `define` (sostituzione no-op + DCE)
//   Vite 8 usa rolldown/oxc per default: non supporta `esbuild.drop` come Vite 7.
//   Il fallback `define` e' equivalente funzionalmente (CLR-007 nota).
// - manualChunks: pagine console in chunk dedicati _lazy_console_*
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  const defineConstants: Record<string, string> = isProd
    ? {
        'console.log': '(()=>{})',
        'console.debug': '(()=>{})',
        'console.info': '(()=>{})',
        'console.warn': '(()=>{})',
        'console.error': '(()=>{})',
      }
    : {};

  return {
    plugins: [solid(), tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
        },
      },
    },
    define: defineConstants,
    build: {
      sourcemap: !isProd,
      rollupOptions: {
        output: {
          chunkFileNames: isProd ? 'assets/[hash].js' : 'assets/[name]-[hash].js',
          entryFileNames: isProd ? 'assets/[hash].js' : 'assets/[name]-[hash].js',
          assetFileNames: isProd
            ? 'assets/[hash][extname]'
            : 'assets/[name]-[hash][extname]',
          manualChunks(id: string): string | undefined {
            // Isola le pagine/componenti console in chunk dedicati.
            // Il prefisso _lazy_console_ consente a check-bundle-clean.sh
            // di riconoscerli e escluderli dai main chunks.
            if (id.includes('/src/console/pages/')) {
              return '_lazy_console_pages';
            }
            if (
              id.includes('/src/console/components/Allowlist') ||
              id.includes('/src/console/components/RevokeConfirmDialog')
            ) {
              return '_lazy_console_allowlist';
            }
            if (id.includes('/src/console/api/allowlist')) {
              return '_lazy_console_allowlist';
            }
            return undefined;
          },
        },
      },
    },
  };
});
