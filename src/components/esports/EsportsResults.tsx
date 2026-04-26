// WP35 — EsportsResults table (REQ-F-035-015, DEC-OP-008).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

export interface ResultMatchItem {
  match_id: string;
  completed_at_utc: string;
  league: string;
  team1: { name: string; code: string };
  team2: { name: string; code: string };
  score: readonly [number, number] | readonly number[];
  winner_code: string;
  stage: string;
}

interface EsportsResultsProps {
  items: readonly ResultMatchItem[];
  lang: 'en' | 'it';
}

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
};

function formatDate(iso: string, lang: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(LOCALE_MAP[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function EsportsResults(props: EsportsResultsProps): JSX.Element {
  const { t } = useI18n();

  return (
    <section data-testid="esports-results" class="mb-12">
      <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
        {t('wp35.esports.section.results.heading')}
      </h2>
      <Show
        when={props.items.length > 0}
        fallback={
          <p class="text-sm text-on-surface-variant/60">
            {t('wp35.esports.table.empty_results')}
          </p>
        }
      >
        <div class="overflow-x-auto rounded-lg border border-outline-variant/10">
          <table class="w-full text-sm">
            <thead class="bg-surface-container/40 text-[11px] uppercase tracking-widest text-on-surface-variant/70">
              <tr>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.date')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.league')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.team1')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.team2')}</th>
                <th scope="col" class="px-4 py-3 text-center">{t('wp35.esports.table.score')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.winner')}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/10">
              <For each={props.items}>
                {(m) => (
                  <tr class="hover:bg-surface-container/20">
                    <td class="px-4 py-3 whitespace-nowrap text-on-surface-variant/90">
                      <time datetime={m.completed_at_utc}>
                        {formatDate(m.completed_at_utc, props.lang)}
                      </time>
                    </td>
                    <td class="px-4 py-3 whitespace-nowrap text-primary-container font-bold">
                      {m.league}
                    </td>
                    <td class="px-4 py-3 text-on-surface">{m.team1.name}</td>
                    <td class="px-4 py-3 text-on-surface">{m.team2.name}</td>
                    <td class="px-4 py-3 text-center font-mono text-on-surface">
                      {m.score[0]}–{m.score[1]}
                    </td>
                    <td class="px-4 py-3 font-bold text-primary-container">
                      {m.winner_code}
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </Show>
    </section>
  );
}

export default EsportsResults;
