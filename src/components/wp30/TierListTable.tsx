import { For, Show } from 'solid-js';
import { useI18n } from '../../i18n';
import type { TierEntry } from '../../types/wp30';
import { TierGradeBadge } from './TierGradeBadge';
import { hasGuideFor } from '../../lib/champion/discovery';

/**
 * Tier list grid (DEC-OP-035). Rows are NOT clickable: tapping the row body
 * is reserved for the future detail panel. A small "Read guide" link is
 * rendered next to the champion name when a CR-054 (WP35.2) guide exists for
 * `(champion, role)`. The link is opt-in via the `lang` + `currentRole`
 * props, so existing call-sites keep their current behavior.
 *
 * `<TierGradeBadge>` (NOT the existing `<TierBadge>`) is used because the
 * existing TierBadge models pricing tiers (free/pro).
 */
export interface TierListTableProps {
  tiers: TierEntry[];
  /** Page locale; required to render the cross-link. */
  lang?: 'en' | 'it';
  /** Current tier-list role filter. Used to look up the matching guide. */
  currentRole?: 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'all';
}

function formatPct(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`;
}

/**
 * Maps display name to the `content/champions/...` slug convention:
 * lowercase, drop apostrophes, spaces → dashes. Mirrors the entries
 * normalized in `content/_meta/top-50-champions.json`
 * (e.g. "Lee Sin" → "lee-sin", "Kha'Zix" → "kha-zix").
 */
function displayToSlug(display: string): string {
  return display
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const ROLES_FOR_ALL = ['top', 'jungle', 'mid', 'bot', 'support'] as const;

function findGuideRole(
  championDisplay: string,
  currentRole: NonNullable<TierListTableProps['currentRole']>,
): string | null {
  const slug = displayToSlug(championDisplay);
  if (currentRole !== 'all') {
    return hasGuideFor(slug, currentRole) ? currentRole : null;
  }
  // role=all: surface the first matching guide across the 5 lanes.
  for (const r of ROLES_FOR_ALL) {
    if (hasGuideFor(slug, r)) return r;
  }
  return null;
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
            {(entry) => {
              const guideRole = () =>
                props.lang && props.currentRole
                  ? findGuideRole(entry.champion, props.currentRole)
                  : null;
              const guideSlug = () => displayToSlug(entry.champion);
              return (
                <tr class="border-t border-outline-variant/10">
                  <td class="px-3 py-3 text-on-surface-variant/60">{entry.rank}</td>
                  <td class="px-3 py-3 font-headline font-bold text-on-surface">
                    <span class="inline-flex items-center gap-2">
                      {entry.champion}
                      <Show when={guideRole()}>
                        <a
                          href={`/${props.lang}/champion/${guideSlug()}/guide`}
                          class="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-primary-container hover:text-primary border border-primary-container/30 hover:border-primary-container/60 rounded px-1.5 py-0.5 transition-colors"
                          aria-label={t('wp30.tier_list.table.guide_link_aria').replace('{champion}', entry.champion)}
                          data-testid="tier-list-guide-link"
                        >
                          <span aria-hidden="true">📖</span>
                          {t('wp30.tier_list.table.guide_link_label')}
                        </a>
                      </Show>
                    </span>
                  </td>
                  <td class="px-3 py-3">
                    <TierGradeBadge tier={entry.tier} />
                  </td>
                  <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.win_rate)}</td>
                  <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.pick_rate)}</td>
                  <td class="px-3 py-3 text-on-surface-variant">{formatPct(entry.ban_rate)}</td>
                  <td class="px-3 py-3 text-on-surface-variant/70">{entry.sample_size}</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </div>
  );
}
