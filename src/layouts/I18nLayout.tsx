import { createEffect, onCleanup, onMount, Show } from 'solid-js';
import { isServer } from 'solid-js/web';
import type { RouteSectionProps } from '@solidjs/router';
import { useParams } from '@solidjs/router';
import { I18nProvider, isValidLocale, DEFAULT_LOCALE, useI18n } from '../i18n';
import CookieBanner from '../components/CookieBanner';
import CFAnalytics from '../components/CFAnalytics';
import ToastContainer from '../components/ui/Toast';

/**
 * WP24 TASK-4-024 — Eager preload del legal chunk al mount del root `[lang]`
 * layout, PRIMA che i consumer (CookieBanner, PreferenceCenter, pagine legal)
 * invochino `loadLegal()` in onMount. Il banner resta gated su `legalReady()`
 * per evitare flash di chiavi raw, ma il kickoff anticipato del dynamic import
 * riduce al minimo la finestra di race vista nei Playwright E2E (toast DSR e
 * label del PreferenceCenter dipendono da chiavi legal e venivano cercati
 * dai test prima che il chunk fosse disponibile).
 *
 * Deve stare DENTRO `I18nProvider` per poter consumare `useI18n()`. Rende
 * null: side-effect puro. Usa `loadLegal()` (dynamic import) quindi NON
 * aggiunge il legal al grafo statico e preserva il budget bundle WP24.
 */
function LegalPreloader() {
  const { loadLegal } = useI18n();
  onMount(() => {
    // Fire-and-forget: se fallisce i consumer ritentano col proprio onMount.
    loadLegal().catch(() => {
      /* silent: idempotente, i singoli consumer hanno gia' il proprio fallback. */
    });
  });
  return null;
}

export default function I18nLayout(props: RouteSectionProps) {
  const params = useParams<{ lang?: string }>();

  createEffect(() => {
    const lang = params.lang;
    const resolved = lang && isValidLocale(lang) ? lang : DEFAULT_LOCALE;
    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolved;
    }
  });

  onCleanup(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = DEFAULT_LOCALE;
    }
  });

  return (
    <I18nProvider>
      {props.children}
      {/* WP24 TASK-3-022: cookie banner + toast globali, client-only (Show gate SSR). */}
      <Show when={!isServer}>
        <LegalPreloader />
        <CookieBanner />
        <ToastContainer />
        <CFAnalytics />
      </Show>
    </I18nProvider>
  );
}
