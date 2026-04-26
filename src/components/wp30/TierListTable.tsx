import { For } from 'solid-js';
import { useI18n } from '../../i18n';
import type { TierEntry } from '../../types/wp30';
import { TierGradeBadge } from './TierGradeBadge';

/**
 * Tier list grid (DEC-OP-035). Rows are NOT clickable: champion detail pages
 * are out of scope for the MVP and a click target without destination would
 * regress accessibility (`<a>` without `href`).
 *
 * `<TierGradeBadge>` (NOT the existing `<TierBadge>`) is used because the
 * existing TierBadge models pricing tiers (free/pro). A separate component
 * keeps both naming domains decoupled.
 */
export interface TierListTableProps {
  tiers: TierEntry[];
}

function formatPct(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`;
}

export function TierListTable(props: TierListTableProps) {
  const { t } = useI18n();

  return (
    <div class="overflow-x-auto rounded-lg border border-outline-variant/20 max-w-6xl mx-auto">
      <table class="w-full text-left text-sm">
        <thead class="bg-surface-variant/10 text-xs uppercase tracking-widest text-on-surface-variant/70">
          <tr>
            <th scope="col" class="px-3 py-3 w-12">#</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.champion_label')}</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.tier_label')}</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.winrate_label')}</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.pickrate_label')}</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.banrate_label')}</th>
            <th scope="col" class="px-3 py-3">{t('wp30.tier_list.table.sample_size_label')}</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.tiers}>
            {(entry) => (
              <tr class="border-t border-outline-variant/10">
                <td class="px-3 py-3 text-on-surface-variant/60">{entry.rank}</td>
                <td class="px-3 py-3 font-headline font-bold text-on-surface">
                  {entry.champion}
                </td>
                <td class="px-3 py-3">
                  <TierGradeBadge tier={entry.tier} />
                </td>
                <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.win_rate)}</td>
                <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.pick_rate)}</td>
                <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.ban_rate)}</td>
                <td class="px-3 py-3 text-on-surface-variant/70">{entry.sample_size}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}
