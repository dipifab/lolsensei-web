import { useI18n } from '../../i18n';
import type { TierGrade } from '../../types/wp30';

/**
 * Tier grade badge (S/A/B/C/D) for the WP30 tier list.
 *
 * NB intentionally kept separate from the existing `<TierBadge>` component:
 * that one is for pricing tiers (free/pro) and conflating the two would make
 * future changes ambiguous. Naming convention: `TierGradeBadge` for content
 * tier ranks, `TierBadge` for product subscription tiers.
 */
export interface TierGradeBadgeProps {
  tier: TierGrade;
}

const TIER_CLASSES: Record<TierGrade, string> = {
  S: 'bg-primary-container text-on-primary-container',
  A: 'bg-success/15 text-success',
  B: 'bg-tertiary/15 text-tertiary',
  C: 'bg-surface-variant/30 text-on-surface-variant',
  D: 'bg-error/10 text-error',
};

const TIER_I18N_KEYS: Record<TierGrade, string> = {
  S: 'wp30.tier_list.table.tier_s_label',
  A: 'wp30.tier_list.table.tier_a_label',
  B: 'wp30.tier_list.table.tier_b_label',
  C: 'wp30.tier_list.table.tier_c_label',
  D: 'wp30.tier_list.table.tier_d_label',
};

export function TierGradeBadge(props: TierGradeBadgeProps) {
  const { t } = useI18n();

  return (
    <span
      class={`inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-headline font-extrabold uppercase tracking-widest ${TIER_CLASSES[props.tier]}`}
      title={t(TIER_I18N_KEYS[props.tier])}
      data-tier={props.tier}
    >
      {props.tier}
    </span>
  );
}
