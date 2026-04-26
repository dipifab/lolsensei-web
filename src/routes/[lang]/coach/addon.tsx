// WP32 F5 — `/[lang]/coach/addon` AI Coach activation page.
//
// Public-facing UI for the add-on lifecycle: pricing cards (Light €5, Full €9),
// active subscription card with cancel CTA, and a CR-045 EU consumer-law
// disclaimer (REQ-F-032-019). Free users land here from `requireAddonActive`
// when they don't have an active add-on yet.
//
// Flow:
//   1. SSR fetches the user's current addon list (best-effort).
//   2. Pricing cards reflect "buy" / "switch" / "active" copy via PricingCard.
//   3. Click on Buy/Switch -> dispatch checkout/swap via `addon-api`.
//   4. Stripe success URL = `/[lang]/coach?activated=1` (handled by dashboard).
//
// SEO: noindex (REQ-NF-032-004).

import { Title, Meta } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import { Show, createSignal, onMount } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import { useI18n } from '../../../i18n';
import { activate, listStatus } from '../../../services/addon-api';
import {
  CoachApiError,
  CoachConflictError,
  CoachUnauthenticatedError,
} from '../../../services/coach-api';
import type {
  AddonCode,
  AddonStatusItem,
  SwapTierResponse,
} from '../../../types/wp32';
import { PricingCard } from '../../../components/coach/PricingCard';
import { SwapTierButton } from '../../../components/coach/SwapTierButton';
import { CancelAddonButton } from '../../../components/coach/CancelAddonButton';

interface LoaderState {
  addons: readonly AddonStatusItem[] | null;
  unavailable: boolean;
  unauthenticated: boolean;
}

function readJwtFromCookie(): string | null {
  const event = getRequestEvent();
  if (!event) return null;
  const cookieHeader = event.request.headers.get('cookie');
  if (cookieHeader) {
    for (const cookie of cookieHeader.split(';')) {
      const eq = cookie.indexOf('=');
      if (eq <= 0) continue;
      const name = cookie.slice(0, eq).trim();
      if (name !== 'jwt') continue;
      return cookie.slice(eq + 1).trim() || null;
    }
  }
  const auth = event.request.headers.get('authorization');
  if (auth) {
    const match = auth.match(/^Bearer\s+(.+)$/i);
    if (match) return match[1].trim();
  }
  return null;
}

async function loadAddonState(): Promise<LoaderState> {
  const jwt = readJwtFromCookie();
  if (!jwt) {
    return { addons: null, unavailable: false, unauthenticated: true };
  }
  try {
    const result = await listStatus({ jwt, limit: 10 });
    return { addons: result.addons, unavailable: false, unauthenticated: false };
  } catch (err) {
    if (err instanceof CoachUnauthenticatedError) {
      return { addons: null, unavailable: false, unauthenticated: true };
    }
    return { addons: null, unavailable: true, unauthenticated: false };
  }
}

function findActive(items: readonly AddonStatusItem[] | null): AddonStatusItem | null {
  if (!items) return null;
  return items.find((item) => item.status === 'active') ?? null;
}

export default function CoachAddonRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const data = createAsync(() => loadAddonState());

  const [addons, setAddons] = createSignal<readonly AddonStatusItem[] | null>(null);
  const [busy, setBusy] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  onMount(() => {
    const state = data();
    if (state?.addons) {
      setAddons(state.addons);
    }
  });

  const activeAddon = (): AddonStatusItem | null => findActive(addons());
  const activeCode = (): AddonCode | null => activeAddon()?.addon_code ?? null;

  const refresh = async () => {
    try {
      const fresh = await listStatus({ limit: 10 });
      setAddons(fresh.addons);
    } catch {
      // Silent: don't disturb the user — they can refresh manually.
    }
  };

  const buildCheckoutUrls = () => {
    const origin =
      typeof window !== 'undefined' && window.location?.origin
        ? window.location.origin
        : '';
    const lang = params.lang ?? 'en';
    return {
      successUrl: `${origin}/${lang}/coach?activated=1`,
      cancelUrl: `${origin}/${lang}/coach/addon`,
    };
  };

  const onActivate = async (tier: AddonCode) => {
    if (busy()) return;
    setError(null);
    setBusy(true);
    try {
      const { successUrl, cancelUrl } = buildCheckoutUrls();
      const response = await activate({
        addon_code: tier,
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
      if (typeof window !== 'undefined' && typeof window.location?.assign === 'function') {
        window.location.assign(response.checkout_url);
      }
    } catch (err) {
      if (err instanceof CoachConflictError) {
        // User already owns a conflicting add-on — refresh state so the UI
        // shows the swap CTA instead.
        setError(t('coach.chat.error.generic'));
        await refresh();
        return;
      }
      if (err instanceof CoachUnauthenticatedError) {
        setError(t('coach.checkout.consent.required'));
        return;
      }
      if (err instanceof CoachApiError) {
        setError(t('coach.chat.error.generic'));
        return;
      }
      setError(t('coach.chat.error.generic'));
    } finally {
      setBusy(false);
    }
  };

  const onSwapSuccess = (_response: SwapTierResponse) => {
    void refresh();
  };

  return (
    <>
      <Title>{t('coach.addons.title')}</Title>
      <Meta name="description" content={t('coach.addons.meta.description')} />
      <NoindexMeta />
      <Navbar />
      <main
        class="min-h-screen px-4 sm:px-8 py-8 max-w-5xl mx-auto"
        data-testid="coach-addon-page"
      >
        <header class="mb-8">
          <h1 class="text-3xl sm:text-5xl font-extrabold font-headline text-on-surface mb-2">
            {t('coach.addons.heading')}
          </h1>
          <p class="text-on-surface-variant">{t('coach.addons.subtitle')}</p>
        </header>

        <Show when={data()?.unauthenticated}>
          <p
            class="mb-6 px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-on-surface"
            data-testid="coach-addon-signin-required"
          >
            {t('coach.checkout.consent.required')}
          </p>
        </Show>

        <Show when={activeAddon()} keyed>
          {(active) => (
            <section
              class="mb-8 px-6 py-5 rounded-2xl border border-primary/30 bg-primary/5"
              data-testid="coach-addon-active"
            >
              <h2 class="text-lg font-bold text-on-surface mb-1">
                {t('coach.addons.active.label')}
              </h2>
              <p class="text-sm text-on-surface-variant mb-3">
                {t('coach.addons.active.next_renewal').replace(
                  '{date}',
                  new Date(active.current_period_end).toISOString().slice(0, 10),
                )}
              </p>
              <div class="flex flex-wrap gap-3">
                <Show when={active.addon_code === 'ai_coach_light'}>
                  <SwapTierButton
                    currentAddonCode={active.addon_code}
                    targetTier="ai_coach_full"
                    onSuccess={onSwapSuccess}
                    onUnauthenticated={() => setError(t('coach.checkout.consent.required'))}
                  />
                </Show>
                <Show when={active.addon_code === 'ai_coach_full'}>
                  <SwapTierButton
                    currentAddonCode={active.addon_code}
                    targetTier="ai_coach_light"
                    onSuccess={onSwapSuccess}
                    onUnauthenticated={() => setError(t('coach.checkout.consent.required'))}
                  />
                </Show>
                <CancelAddonButton
                  onDirectCancelSuccess={() => void refresh()}
                  onUnauthenticated={() => setError(t('coach.checkout.consent.required'))}
                />
              </div>
            </section>
          )}
        </Show>

        <Show when={error()} keyed>
          {(message) => (
            <p
              class="mb-4 px-4 py-3 rounded-xl bg-red-600/10 border border-red-600/30 text-red-700"
              role="alert"
              data-testid="coach-addon-error"
            >
              {message}
            </p>
          )}
        </Show>

        <section
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
          aria-label={t('coach.addons.aria.list')}
          data-testid="coach-addon-pricing-grid"
        >
          <PricingCard
            tier="light"
            currentAddonCode={activeCode()}
            onAction={() => void onActivate('ai_coach_light')}
            loading={busy}
            errorMessage={() => null}
          />
          <PricingCard
            tier="full"
            currentAddonCode={activeCode()}
            onAction={() => void onActivate('ai_coach_full')}
            loading={busy}
            errorMessage={() => null}
          />
        </section>

        <p class="mt-8 text-xs text-on-surface-variant" data-testid="coach-addon-consent">
          {t('coach.checkout.consent.disclaimer')}
        </p>
      </main>
      <Footer />
    </>
  );
}
