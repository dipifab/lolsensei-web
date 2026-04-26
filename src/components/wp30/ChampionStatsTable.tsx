import { For, Show } from 'solid-js';
import { useI18n } from '../../i18n';
import type { ChampionStat } from '../../types/wp30';

/**
 * Top 5 champions by games played (DEC-OP-018). Empty state collapses the
 * section since the page already has rank + recent matches as primary
 * signals.
 */
export interface ChampionStatsTableProps {
  stats: ChampionStat[];
}

function formatPct(rate: number): string {
  return `${Math.round(rate * 1000) / 10}%`;
}

function formatKda(kda: number): string {
  return `${Math.round(kda * 100) / 100}`;
}

export function ChampionStatsTable(props: ChampionStatsTableProps) {
  const { t } = useI18n();

  return (
    <Show when={props.stats.length > 0}>
      <section class="max-w-5xl mx-auto px-8 my-8">
        <h2 class="text-sm uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-4">
          {t('wp30.summoner.section.champion_stats.heading')}
        </h2>
        <div class="overflow-x-auto rounded-lg border border-outline-variant/20">
          <table class="w-full text-left text-sm">
            <thead class="bg-surface-variant/10 text-xs uppercase tracking-widest text-on-surface-variant/70">
              <tr>
                <th scope="col" class="px-4 py-3">
                  {t('wp30.tier_list.table.champion_label')}
                </th>
                <th scope="col" class="px-4 py-3">
                  {t('wp30.summoner.section.champion_stats.games_label')}
                </th>
                <th scope="col" class="px-4 py-3">
                  {t('wp30.summoner.section.champion_stats.winrate_label')}
                </th>
                <th scope="col" class="px-4 py-3">
                  {t('wp30.summoner.section.champion_stats.kda_label')}
                </th>
              </tr>
            </thead>
            <tbody>
              <For each={props.stats}>
                {(stat) => (
                  <tr class="border-t border-outline-variant/10">
                    <td class="px-4 py-3 font-headline font-bold text-on-surface">
                      {stat.champion}
                    </td>
                    <td class="px-4 py-3 text-on-surface-variant">
                      {stat.games_played} ({stat.wins}W / {stat.losses}L)
                    </td>
                    <td class="px-4 py-3 text-on-surface-variant">
                      {formatPct(stat.win_rate)}
                    </td>
                    <td class="px-4 py-3 text-on-surface-variant">
                      {formatKda(stat.kda)}
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </section>
    </Show>
  );
}
