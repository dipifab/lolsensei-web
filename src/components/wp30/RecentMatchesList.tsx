import { For, Show } from 'solid-js';
import { useI18n } from '../../i18n';
import type { RecentMatch } from '../../types/wp30';

/**
 * Last 10 matches (DEC-OP-018). Each row is a thin summary: champion,
 * outcome, KDA, duration, role. No external links (Riot prohibits deep
 * linking to match-history pages from attribution surfaces).
 */
export interface RecentMatchesListProps {
  matches: RecentMatch[];
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function roleDisplay(role: string): string {
  if (!role) return '-';
  return role.charAt(0) + role.slice(1).toLowerCase();
}

export function RecentMatchesList(props: RecentMatchesListProps) {
  const { t } = useI18n();

  return (
    <Show when={props.matches.length > 0}>
      <section class="max-w-5xl mx-auto px-8 my-8">
        <h2 class="text-sm uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-4">
          {t('wp30.summoner.section.recent_matches.heading')}
        </h2>
        <ul class="space-y-2">
          <For each={props.matches}>
            {(match) => {
              const isWin = match.result === 'win';
              return (
                <li
                  class="rounded-lg border border-outline-variant/20 px-4 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 bg-surface-variant/5"
                  data-result={match.result}
                >
                  <span
                    class={`text-xs uppercase tracking-widest font-headline font-extrabold ${
                      isWin ? 'text-success' : 'text-error'
                    }`}
                  >
                    {isWin
                      ? t('wp30.summoner.section.recent_matches.victory')
                      : t('wp30.summoner.section.recent_matches.defeat')}
                  </span>
                  <span class="font-headline font-bold text-on-surface">{match.champion}</span>
                  <span class="text-sm text-on-surface-variant">
                    {match.kills}/{match.deaths}/{match.assists} ·{' '}
                    {t('wp30.summoner.section.recent_matches.kda_label')}
                  </span>
                  <span class="text-sm text-on-surface-variant/70">
                    {t('wp30.summoner.section.recent_matches.duration_label')}: {formatDuration(match.duration_seconds)}
                  </span>
                  <span class="text-sm text-on-surface-variant/70 ml-auto">
                    {t('wp30.summoner.section.recent_matches.role_label')}: {roleDisplay(match.role)}
                  </span>
                </li>
              );
            }}
          </For>
        </ul>
      </section>
    </Show>
  );
}
