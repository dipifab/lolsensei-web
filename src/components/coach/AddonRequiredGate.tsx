// WP32 F5-04 — AddonRequiredGate Layer 2 (CSR fallback).
//
// Renders an inline upsell when the backend returns 403 `addon_required` on a
// coach endpoint. Mirrors the WP31 `<PaywallGate>` shape but is intentionally
// isolated (OP-109): the two gates have different URLs (pricing vs activation)
// and different copy, so factoring a shared abstraction would have leaked
// per-WP semantics into the parent.
//
// Two trigger modes:
//   1. `enabled` accessor / boolean — parent decides when the gate is open
//      (typical use: page sets a signal on `CoachAddonRequiredError`).
//   2. `addonStatus` accessor — declarative form: pass the list of active
//      add-ons and the gate self-evaluates against `requiredAddons`.

import { Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import { useParams } from '@solidjs/router';
import type { AddonCode, AddonStatusItem } from '../../types/wp32';

export interface AddonRequiredGateProps {
  /**
   * One of:
   *   - boolean / accessor: explicit gate state (true = show upsell).
   *   - undefined: derive from `addonStatus` + `requiredAddons`.
   */
  enabled?: boolean | (() => boolean);
  /**
   * Active add-ons for the current user. When provided together with
   * `requiredAddons`, the gate computes `enabled` automatically.
   */
  addonStatus?: () => readonly AddonStatusItem[] | null | undefined;
  /**
   * Add-on codes that grant access. Defaults to "any coach add-on".
   */
  requiredAddons?: readonly AddonCode[];
  /**
   * Where the "Activate" CTA points. Defaults to `/[lang]/coach/addon`.
   */
  activationHref?: string;
  /** Page content shown when the gate is closed (user has add-on). */
  children: JSX.Element;
}

const DEFAULT_REQUIRED: readonly AddonCode[] = ['ai_coach_light', 'ai_coach_full'];

function readEnabled(props: AddonRequiredGateProps): boolean {
  if (typeof props.enabled === 'function') return Boolean(props.enabled());
  if (typeof props.enabled === 'boolean') return props.enabled;
  // Derive from addon status: gate enabled when none of the required codes is
  // present in an active row.
  const items = props.addonStatus?.() ?? null;
  if (!items) return true; // Loading or unknown — show upsell rather than leak content.
  const required = props.requiredAddons ?? DEFAULT_REQUIRED;
  const activeMatch = items.some(
    (item) => item.status === 'active' && (required as readonly string[]).includes(item.addon_code),
  );
  return !activeMatch;
}

export function AddonRequiredGate(props: AddonRequiredGateProps): JSX.Element {
  const { t } = useI18n();
  const params = useParams<{ lang?: string }>();
  const fallbackHref = () => props.activationHref ?? `/${params.lang ?? 'en'}/coach/addon`;

  return (
    <Show when={!readEnabled(props)} fallback={
      <section
        class="max-w-2xl mx-auto my-12 px-8 py-10 rounded-2xl border border-primary/20 bg-surface-variant/10 text-center"
        role="region"
        aria-labelledby="addon-required-gate-title"
        data-testid="addon-required-gate"
      >
        <h2
          id="addon-required-gate-title"
          class="text-2xl font-extrabold font-headline text-on-surface mb-3"
        >
          {t('coach.gate.title')}
        </h2>
        <p class="text-on-surface-variant mb-6">{t('coach.gate.body')}</p>
        <a
          href={fallbackHref()}
          class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-bold hover:bg-primary/90 transition-colors"
          data-testid="addon-required-gate-cta"
        >
          {t('coach.gate.cta.activate')}
        </a>
      </section>
    }>
      {props.children}
    </Show>
  );
}

export default AddonRequiredGate;
