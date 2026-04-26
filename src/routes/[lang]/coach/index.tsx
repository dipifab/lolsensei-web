// WP32 F5-13 — `/[lang]/coach` AI Coach dashboard route.
//
// SSR pre-render gated by `requireAddonActive(event)` (Layer 1 best-effort,
// see lib/auth/require-addon-active.ts). Inside the page we render:
//   - <QuotaIndicator>      top-bar quota for the active surface
//   - <ChatPanel>           default tab — single-turn coach conversation
//   - <DrillPanel>          tier-aware drill batch + refresh CTA
//   - <RecapPanel>          weekly recap with EN/IT switcher
//
// All content is wrapped by `<AddonRequiredGate>` which flips the upsell on
// when the BE returns 403 `addon_required` mid-session (Layer 2).
//
// SEO: noindex via `<NoindexMeta>` + edge `_headers` `X-Robots-Tag`. Coach
// dashboard is private content (REQ-NF-032-004).

import { Title, Meta } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import { Show, createSignal, onMount } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { NoindexMeta } from '../../../components/seo/NoindexMeta';
import { useI18n } from '../../../i18n';
import { isValidLocale } from '../../../types/locale';
import {
  requireAddonActive,
  type RequireEventLike,
} from '../../../lib/auth/require-addon-active';
import {
  quota as fetchQuota,
  CoachAddonRequiredError,
  CoachUnauthenticatedError,
} from '../../../services/coach-api';
import { listStatus } from '../../../services/addon-api';
import type {
  AddonStatusItem,
  CoachLanguage,
  QuotaResponse,
  RemainingQuota,
} from '../../../types/wp32';
import { AddonRequiredGate } from '../../../components/coach/AddonRequiredGate';
import { ChatPanel } from '../../../components/coach/ChatPanel';
import { DrillPanel } from '../../../components/coach/DrillPanel';
import { RecapPanel } from '../../../components/coach/RecapPanel';
import { QuotaIndicator, type QuotaSurface } from '../../../components/coach/QuotaIndicator';

// ---------------------------------------------------------------------------
// SSR loader
// ---------------------------------------------------------------------------

interface LoaderState {
  quota: QuotaResponse | null;
  addons: readonly AddonStatusItem[] | null;
  paywalled: boolean;
  unavailable: boolean;
}

function asRequireEvent(): RequireEventLike | null {
  const event = getRequestEvent();
  if (!event) return null;
  return { request: event.request };
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

async function loadDashboard(): Promise<LoaderState> {
  const event = asRequireEvent();
  if (event) {
    requireAddonActive(event);
  }
  const jwt = readJwtFromCookie();
  if (!jwt) {
    return { quota: null, addons: null, paywalled: false, unavailable: true };
  }

  // Fetch quota + addon status in parallel. The two endpoints are independent;
  // either failure flips a state flag rather than aborting the whole loader so
  // the user still sees the dashboard skeleton.
  const [quotaResult, addonsResult] = await Promise.allSettled([
    fetchQuota({ jwt }),
    listStatus({ jwt, limit: 10 }),
  ]);

  let paywalled = false;
  let unavailable = false;

  let quota: QuotaResponse | null = null;
  if (quotaResult.status === 'fulfilled') {
    quota = quotaResult.value;
  } else if (quotaResult.reason instanceof CoachAddonRequiredError) {
    paywalled = true;
  } else {
    unavailable = true;
  }

  let addons: readonly AddonStatusItem[] | null = null;
  if (addonsResult.status === 'fulfilled') {
    addons = addonsResult.value.addons;
  } else if (addonsResult.reason instanceof CoachUnauthenticatedError) {
    unavailable = true;
  }

  return { quota, addons, paywalled, unavailable };
}

function pickInitialLanguage(lang: string | undefined): CoachLanguage {
  if (lang && isValidLocale(lang) && lang === 'it') return 'it';
  return 'en';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

type Tab = 'chat' | 'drills' | 'recap';

export default function CoachDashboardRoute() {
  const { t } = useI18n();
  const params = useParams<{ lang: string }>();
  const data = createAsync(() => loadDashboard());

  const [activeTab, setActiveTab] = createSignal<Tab>('chat');
  const [language] = createSignal<CoachLanguage>(pickInitialLanguage(params.lang));

  const [quotaSnapshot, setQuotaSnapshot] = createSignal<QuotaResponse | null>(null);
  const [addons, setAddons] = createSignal<readonly AddonStatusItem[] | null>(null);
  const [csrPaywalled, setCsrPaywalled] = createSignal(false);

  // Hydrate signals from the SSR result on first render.
  onMount(() => {
    const state = data();
    if (state) {
      setQuotaSnapshot(state.quota);
      setAddons(state.addons);
      if (state.paywalled) setCsrPaywalled(true);
    }
  });

  const isPaywalled = () => csrPaywalled() || (data()?.paywalled ?? false);

  const refreshQuota = async () => {
    try {
      const fresh = await fetchQuota({});
      setQuotaSnapshot(fresh);
    } catch (err) {
      if (err instanceof CoachAddonRequiredError) {
        setCsrPaywalled(true);
      }
    }
  };

  const refreshAddons = async () => {
    try {
      const fresh = await listStatus({ limit: 10 });
      setAddons(fresh.addons);
    } catch {
      // Silent: surface refresh failure does not block the dashboard.
    }
  };

  const onAddonRequired = () => setCsrPaywalled(true);

  const surfaceForActiveTab = (): QuotaSurface => {
    const tab = activeTab();
    if (tab === 'drills') return 'drill';
    if (tab === 'recap') return 'recap';
    return 'chat';
  };

  const remainingQuota = (): RemainingQuota | null => quotaSnapshot()?.current_quota ?? null;
  const resetAt = (): string | null => quotaSnapshot()?.reset_at ?? null;

  const tabClass = (tab: Tab) =>
    `px-4 py-2 font-medium border-b-2 transition-colors ${
      activeTab() === tab
        ? 'border-primary text-primary'
        : 'border-transparent text-on-surface-variant hover:text-on-surface'
    }`;

  return (
    <>
      <Title>{t('coach.dashboard.title')}</Title>
      <Meta name="description" content={t('coach.addons.meta.description')} />
      <NoindexMeta />
      <Navbar />
      <main
        class="min-h-screen px-4 sm:px-8 py-8 max-w-5xl mx-auto"
        data-testid="coach-dashboard-page"
      >
        <AddonRequiredGate
          enabled={isPaywalled}
          addonStatus={addons}
          activationHref={`/${params.lang}/coach/addon`}
        >
          <header class="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <div>
              <h1 class="text-3xl sm:text-5xl font-extrabold font-headline text-on-surface">
                {t('coach.dashboard.heading')}
              </h1>
            </div>
            <QuotaIndicator
              quota={remainingQuota}
              surface={surfaceForActiveTab()}
              resetAt={resetAt}
            />
          </header>

          <nav
            class="flex gap-2 border-b border-on-surface/10 mb-6"
            role="tablist"
            aria-label={t('coach.dashboard.aria.tabs')}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab() === 'chat'}
              class={tabClass('chat')}
              onClick={() => setActiveTab('chat')}
              data-testid="coach-tab-chat"
            >
              {t('coach.chat.title')}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab() === 'drills'}
              class={tabClass('drills')}
              onClick={() => setActiveTab('drills')}
              data-testid="coach-tab-drills"
            >
              {t('coach.drills.title')}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab() === 'recap'}
              class={tabClass('recap')}
              onClick={() => setActiveTab('recap')}
              data-testid="coach-tab-recap"
            >
              {t('coach.recap.title')}
            </button>
          </nav>

          <Show when={activeTab() === 'chat'}>
            <ChatPanel
              language={language}
              onChatSuccess={() => void refreshQuota()}
              onAddonRequired={onAddonRequired}
              onUnauthenticated={() => setCsrPaywalled(true)}
            />
          </Show>
          <Show when={activeTab() === 'drills'}>
            <DrillPanel
              language={language}
              onDrillSuccess={() => void refreshQuota()}
              onAddonRequired={onAddonRequired}
              onUnauthenticated={() => setCsrPaywalled(true)}
            />
          </Show>
          <Show when={activeTab() === 'recap'}>
            <RecapPanel
              onAddonRequired={onAddonRequired}
              onUnauthenticated={() => setCsrPaywalled(true)}
            />
          </Show>

          <Show when={data()?.unavailable && !data()?.paywalled}>
            <p class="mt-8 text-sm text-on-surface-variant" data-testid="coach-dashboard-unavailable">
              {t('coach.chat.error.generic')}
            </p>
          </Show>

          <button
            type="button"
            class="hidden"
            data-testid="coach-refresh-addons"
            onClick={() => void refreshAddons()}
          />
        </AddonRequiredGate>
      </main>
      <Footer />
    </>
  );
}
