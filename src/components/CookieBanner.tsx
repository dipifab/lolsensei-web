// WP24 TASK-3-007 — Cookie banner globale, client-only post hydration.
// Gate su `consentStore.shouldPrompt`. Lazy-load PreferenceCenter on Customize.
import { A } from '@solidjs/router';
import { Show, createEffect, createSignal, lazy, onCleanup, onMount } from 'solid-js';
import { useI18n } from '../i18n';
import { consentStore, consentHydrated } from '../stores/consentStore';

const PreferenceCenter = lazy(() => import('./PreferenceCenter'));

export default function CookieBanner() {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = createSignal(false);
  let asideRef: HTMLElement | undefined;

  onMount(() => {
    consentStore.init();
    setMounted(true);
  });

  const visible = () => mounted() && consentHydrated() && consentStore.shouldPrompt();

  const handleAcceptAll = () => {
    consentStore.setScope({ analytics: true, marketing: true });
  };
  const handleRejectAll = () => {
    consentStore.revokeAll();
  };

  // WP24 BL-05 (Garante 10-giu-2021 item 2) — ESC sul banner = rifiuto.
  // Se il PreferenceCenter e' aperto, il Modal interno gestisce il proprio ESC
  // (chiusura senza rifiuto): la guard su ``centerOpen`` evita il doppio handler.
  // WP24 U1 (WCAG 4.1.3 / 2.4.3) — focus programmatic sul container al mount
  // cosi' screen reader annunciano l'apparizione del banner.
  createEffect(() => {
    if (!visible()) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (consentStore.centerOpen) return;
      e.preventDefault();
      handleRejectAll();
    };
    document.addEventListener('keydown', onKey);
    // Focus l'aside: richiede tabindex=-1 per accettare .focus() senza
    // entrare nel tab order. Il focus e' scope-local: l'utente puo' uscire
    // col Tab poiche' il banner e' aria-modal="false" (non-trap).
    queueMicrotask(() => asideRef?.focus());
    onCleanup(() => document.removeEventListener('keydown', onKey));
  });

  return (
    <>
      <Show when={visible()}>
        <aside
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
