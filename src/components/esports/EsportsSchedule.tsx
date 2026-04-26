// WP35 — EsportsSchedule table (REQ-F-035-014, DEC-OP-008).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

export interface ScheduleMatchItem {
  match_id: string;
  scheduled_at_utc: string;
  league: string;
  team1: { name: string; code: string };
  team2: { name: string; code: string };
  best_of: number;
  stage: string;
}

interface EsportsScheduleProps {
  items: readonly ScheduleMatchItem[];
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

function formatTime(iso: string, lang: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString(LOCALE_MAP[lang] ?? 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  });
}

export function EsportsSchedule(props: EsportsScheduleProps): JSX.Element {
  const { t } = useI18n();

  return (
    <section data-testid="esports-schedule" class="mb-12">
      <h2 class="text-2xl md:text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
        {t('wp35.esports.section.schedule.heading')}
      </h2>
      <Show
        when={props.items.length > 0}
        fallback={
          <p class="text-sm text-on-surface-variant/60">
            {t('wp35.esports.table.empty_schedule')}
          </p>
        }
      >
        <div class="overflow-x-auto rounded-lg border border-outline-variant/10">
          <table class="w-full text-sm">
            <thead class="bg-surface-container/40 text-[11px] uppercase tracking-widest text-on-surface-variant/70">
              <tr>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.date')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.time')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.league')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.team1')}</th>
                <th scope="col" class="px-4 py-3 text-left">{t('wp35.esports.table.team2')}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/10">
              <For each={props.items}>
                {(m) => (
                  <tr class="hover:bg-surface-container/20">
                    <td class="px-4 py-3 whitespace-nowrap text-on-surface-variant/90">
                      <time datetime={m.scheduled_at_utc}>
                        {formatDate(m.scheduled_at_utc, props.lang)}
                      </time>
                    </td>
                    <td class="px-4 py-3 whitespace-nowrap text-on-surface-variant/70">
                      {formatTime(m.scheduled_at_utc, props.lang)} UTC
                    </td>
                    <td class="px-4 py-3 whitespace-nowrap text-primary-container font-bold">
                      {m.league}
                    </td>
                    <td class="px-4 py-3 text-on-surface">{m.team1.name}</td>
                    <td class="px-4 py-3 text-on-surface">{m.team2.name}</td>
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

export default EsportsSchedule;
