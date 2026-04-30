// WP-SEO-AUDIT-2026-05 REQ-SEO-019 — Sticky mini-CTA mobile.
//
// Mostrata SOLO su viewport <md (Tailwind `md:hidden`) e SOLO dopo che lo hero
// e' uscito dal viewport (IntersectionObserver su `#hero` con fallback a
// scroll position > 100vh quando l'elemento non e' presente).
//
// Si nasconde quando il cookie banner e' visibile, per non sovrapporsi alla
// CTA primaria del banner: leggiamo `consentStore.shouldPrompt()` direttamente
// (la signal `consentHydrated` riattiva il check nel reactive scope SolidJS).
// z-index 40 = sotto al cookie banner (z-50) per safety, anche durante la
// transizione dello stato consent.
//
// Inclusa solo nella home (`src/routes/[lang]/index.tsx`); non globale.

import { Show, createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { useI18n } from '../i18n';
import { consentStore, consentHydrated } from '../stores/consentStore';

const DOWNLOAD_URL = 'https://www.lolsensei.com/downloads/LoLSensei-Setup.exe';
const MOBILE_QUERY = '(max-width: 767px)';

export default function MobileStickyCta() {
  const { t, locale } = useI18n();
  const [pastHero, setPastHero] = createSignal(false);
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);
    const onMq = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onMq);

    // IntersectionObserver: la CTA appare quando lo hero esce dal viewport
    // (scrollato sopra). Fallback su scroll position se #hero non esiste o se
    // IO non e' supportato.
    const heroEl = document.getElementById('hero');
    let io: IntersectionObserver | null = null;
    let onScroll: (() => void) | null = null;

    if (heroEl && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            // intersectionRatio 0 e boundingClientRect.top < 0 => hero scrolled
            // sopra il viewport. Se invece e' sotto (ratio 0 ma top >= 0)
            // significa che siamo ancora prima dello hero (raro su home,
            // ma possibile durante hash-anchor jumps).
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
              setPastHero(true);
            } else if (entry.isIntersecting) {
              setPastHero(false);
            }
          }
        },
        { threshold: 0 },
      );
      io.observe(heroEl);
    } else {
      onScroll = () => {
        setPastHero(window.scrollY > window.innerHeight);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    onCleanup(() => {
      mql.removeEventListener('change', onMq);
      io?.disconnect();
      if (onScroll) window.removeEventListener('scroll', onScroll);
    });
  });

  // Effect-only side effect to keep the linter happy when consentHydrated
  // changes; the reactivity is naturally re-evaluated inside `cookieBannerVisible`.
  createEffect(() => {
    consentHydrated();
  });

  const cookieBannerVisible = () =>
    consentHydrated() && consentStore.shouldPrompt();

  const visible = () => isMobile() && pastHero() && !cookieBannerVisible();

  return (
    <Show when={visible()}>
      <div
        class="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-container-low/95 backdrop-blur-md border-t border-outline-variant/20 px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pointer-events-none"
        data-testid="mobile-sticky-cta"
      >
        <div class="mx-auto max-w-md grid grid-cols-2 gap-2 pointer-events-auto">
          <a
            href={DOWNLOAD_URL}
            class="inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-lg font-headline font-extrabold uppercase tracking-widest text-xs bg-primary-container text-on-primary-container hover:brightness-110 motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none"
          >
            {t('hero.cta.download')}
          </a>
          <a
            href={`/${locale()}/pricing`}
            class="inline-flex items-center justify-center min-h-11 px-4 py-2 rounded-lg font-headline font-extrabold uppercase tracking-widest text-xs border border-primary-container/40 text-primary-container hover:border-primary-container motion-safe:transition-all focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:outline-none"
          >
            {t('hero.cta.pricing')}
          </a>
        </div>
      </div>
    </Show>
  );
}
