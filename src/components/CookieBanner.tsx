// WP24 TASK-3-007 — Cookie banner globale, client-only post hydration.
// Gate su `consentStore.shouldPrompt`. Lazy-load PreferenceCenter on Customize.
// WP24 TASK-4-024 — Legal i18n bundle lazy-loaded via `loadLegal()`: il banner
// aspetta che il chunk sia pronto prima di diventare visibile, altrimenti
// mostrerebbe chiavi raw tipo `consent.banner.title`.
// WP-SEO-AUDIT-2026-05 REQ-SEO-004 — Mobile redesign: su viewport <md il banner
// parte come slim collapsed bar in fondo alla pagina (~120px incl. safe-area).
// Tap su "expand details" rivela il contenuto completo. Desktop (md+) resta
// invariato. Focus management: quando si espande dalla collapsed bar il focus
// si sposta sull'aside/dialog cosi' screen reader e tastiera vedono il dialog.
import { A } from '@solidjs/router';
import { Show, createEffect, createSignal, lazy, onCleanup, onMount } from 'solid-js';
import { useI18n } from '../i18n';
import { consentStore, consentHydrated } from '../stores/consentStore';

const PreferenceCenter = lazy(() => import('./PreferenceCenter'));

// Tailwind `md:` breakpoint = 768px. Il match SSR-safe: durante SSR `window` non
// esiste e tutti i layout si renderizzano "desktop-first" (banner full); il
// downgrade a collapsed bar avviene solo client-side dopo onMount.
const MOBILE_QUERY = '(max-width: 767px)';

export default function CookieBanner() {
  const { t, locale, loadLegal } = useI18n();
  const [mounted, setMounted] = createSignal(false);
  const [legalReady, setLegalReady] = createSignal(false);
  const [isMobile, setIsMobile] = createSignal(false);
  // REQ-SEO-004 — Su mobile parte collapsed; desktop e' sempre "expanded"
  // (la signal viene letta solo nel ramo mobile, vedi `showCollapsed`).
  const [expanded, setExpanded] = createSignal(false);
  let asideRef: HTMLElement | undefined;
  let collapsedBtnRef: HTMLButtonElement | undefined;

  onMount(() => {
    consentStore.init();
    setMounted(true);

    // Match media client-only.
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    onCleanup(() => mql.removeEventListener('change', onChange));

    // Carica il bundle legal (consent/privacy/cookies) per la lingua corrente.
    // Fire-and-forget: eventuali fallimenti lasciano `legalReady=false` e il
    // banner non appare (fail-safe: meglio nessun banner che un banner con
    // placeholder raw).
    loadLegal()
      .then(() => setLegalReady(true))
      .catch(() => {
        // Silenzioso: log-free per non sporcare la console lato utente. Il
        // banner resta nascosto finche' il legal non e' disponibile.
      });
  });

  const visible = () =>
    mounted() && legalReady() && consentHydrated() && consentStore.shouldPrompt();

  // Mostra la collapsed bar solo su mobile e quando l'utente non ha ancora
  // espanso. Desktop e tablet (md+) vedono sempre il dialog completo.
  const showCollapsed = () => isMobile() && !expanded();

  const handleAcceptAll = () => {
    consentStore.setScope({ analytics: true, marketing: true });
  };
  const handleRejectAll = () => {
    consentStore.revokeAll();
  };
  const handleExpand = () => {
    setExpanded(true);
  };

  // WP24 BL-05 (Garante 10-giu-2021 item 2) — ESC sul banner = rifiuto.
  // Se il PreferenceCenter e' aperto, il Modal interno gestisce il proprio ESC
  // (chiusura senza rifiuto): la guard su ``centerOpen`` evita il doppio handler.
  // WP24 U1 (WCAG 4.1.3 / 2.4.3) — focus programmatic sul container al mount
  // cosi' screen reader annunciano l'apparizione del banner.
  // REQ-SEO-004 — Quando siamo nella collapsed bar (mobile non espanso) ESC =
  // rifiuto comunque, e il focus va sul bottone "expand"; quando si passa a
  // expanded il focus migra sull'aside (dialog).
  createEffect(() => {
    if (!visible()) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (consentStore.centerOpen) return;
      e.preventDefault();
      handleRejectAll();
    };
    document.addEventListener('keydown', onKey);
    onCleanup(() => document.removeEventListener('keydown', onKey));
  });

  // Focus management:
  //   - collapsed bar visible -> focus sul bottone trigger (annuncia ad AT che
  //     c'e' un'azione disponibile in fondo schermo).
  //   - dialog (desktop o mobile expanded) -> focus sull'aside, come prima.
  createEffect(() => {
    if (!visible()) return;
    queueMicrotask(() => {
      if (showCollapsed()) {
        collapsedBtnRef?.focus();
      } else {
        asideRef?.focus();
      }
    });
  });

  return (
    <>
      <Show when={visible()}>
        <Show
          when={!showCollapsed()}
          fallback={
            <div
              class="fixed bottom-0 left-0 right-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 pointer-events-none"
              data-testid="cookie-banner-collapsed"
            >
              <div class="mx-auto w-full max-w-[640px] bg-surface-container-lowest text-on-surface rounded-xl shadow-xl border border-outline-variant/20 pointer-events-auto">
                <button
                  ref={collapsedBtnRef}
                  type="button"
                  onClick={handleExpand}
                  aria-expanded="false"
                  aria-controls="cookie-banner-dialog"
                  class="w-full inline-flex items-center justify-between gap-3 min-h-11 px-4 py-3 rounded-xl text-left focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none"
                >
                  <span class="flex items-center gap-2 min-w-0">
                    <svg
                      class="w-4 h-4 shrink-0 text-primary-container"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"
                      />
                    </svg>
                    <span class="text-sm font-headline font-bold uppercase tracking-wide truncate">
                      {t('cookies.expand_details')}
                    </span>
                  </span>
                  <svg
                    class="w-4 h-4 shrink-0 text-on-surface/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          }
        >
          <aside
            id="cookie-banner-dialog"
            ref={asideRef}
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            aria-live="polite"
            class="fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 pointer-events-none focus:outline-none"
          >
            <div class="relative mx-auto w-full max-w-[640px] bg-surface-container-lowest text-on-surface rounded-2xl shadow-2xl border border-outline-variant/20 p-5 md:p-6 pointer-events-auto">
              <button
                type="button"
                onClick={handleRejectAll}
                aria-label={t('consent.banner.close_aria')}
                class="absolute top-3 right-3 inline-flex items-center justify-center min-h-11 min-w-11 -m-1 rounded-lg text-on-surface/70 hover:text-on-surface hover:bg-surface-container-highest/50 focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2
                id="cookie-banner-title"
                class="pr-10 text-lg md:text-xl font-headline font-extrabold tracking-tight mb-2"
              >
                {t('consent.banner.title')}
              </h2>
              <p class="text-sm text-on-surface/80 mb-4">
                {t('consent.banner.body')}{' '}
                <A href={`/${locale()}/privacy`} class="underline underline-offset-2 hover:text-on-surface">
                  {t('privacy.page_title')}
                </A>
                {' · '}
                <A href={`/${locale()}/cookies`} class="underline underline-offset-2 hover:text-on-surface">
                  {t('cookies.title')}
                </A>
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  class="inline-flex items-center justify-center min-h-11 min-w-11 px-4 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest bg-primary-container text-on-primary-container hover:brightness-110 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest focus-visible:outline-none"
                >
                  {t('consent.banner.accept')}
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  class="inline-flex items-center justify-center min-h-11 min-w-11 px-4 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest bg-primary-container text-on-primary-container hover:brightness-110 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest focus-visible:outline-none"
                >
                  {t('consent.banner.reject')}
                </button>
                <button
                  type="button"
                  onClick={() => consentStore.openCenter()}
                  class="inline-flex items-center justify-center min-h-11 min-w-11 px-4 py-3 rounded-lg font-headline font-extrabold uppercase tracking-widest bg-primary-container text-on-primary-container hover:brightness-110 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest focus-visible:outline-none"
                >
                  {t('consent.banner.customize')}
                </button>
              </div>
            </div>
          </aside>
        </Show>
      </Show>

      <Show when={mounted() && consentStore.centerOpen}>
        <PreferenceCenter
          open={() => consentStore.centerOpen}
          initialScope={consentStore.scope}
          onSave={(s) => consentStore.setScope({ analytics: s.analytics, marketing: s.marketing })}
          onClose={() => consentStore.closeCenter()}
        />
      </Show>
    </>
  );
}
