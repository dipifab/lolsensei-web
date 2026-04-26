// WP34 — ProBuildsList (FE-7): lista pattern build dominanti + leaderboard.
//
// Anonimizzazione hard (REQ-F-034-017): nessun gameName/tagLine/summonerName/
// puuid raw. La leaderboard espone solo `puuid_bucket_id` (SHA-256 truncated
// per UI) + region + match_count + win_rate_class qualitativo.
//
// Reg 17: nessun decimale di win_rate. Solo classi qualitative
// `Eccellente/Buono/Medio` dal backend.
//
// Carve-out DEC-OP-W34-007: text-first MVP semantico. Refactor 1:1 design
// system "Tactical Precision" entro 2 sprint via WP37.

import type { JSX } from 'solid-js';
import { For, Show } from 'solid-js';
import type {
  LeaderboardData,
  LeaderboardEntry,
  ProBuildsData,
  WinRateClass,
} from '../../types/wp34';
import { useI18n } from '../../i18n';
import { ProBuildDetail } from './ProBuildDetail';

export interface ProBuildsListProps {
  data: ProBuildsData;
  leaderboard?: LeaderboardData | null;
}

function winRateLabel(
  cls: WinRateClass,
  t: (key: string) => string,
): string {
  switch (cls) {
    case 'Eccellente':
      return t('wp34.pro_builds.win_rate.excellent');
    case 'Buono':
      return t('wp34.pro_builds.win_rate.good');
    case 'Medio':
      return t('wp34.pro_builds.win_rate.medium');
  }
}

function truncateBucketId(id: string): string {
  // SHA-256 hex (64 chars) -> mostra primi 8 + ultimi 4 per UX (NON
  // navigabile lato FE: nessun link /pro/{id}, MVP).
  if (id.length <= 12) return id;
  return `${id.slice(0, 8)}...${id.slice(-4)}`;
}

function formatIsoDate(iso: string, lang: 'en' | 'it'): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = lang === 'it' ? 'it-IT' : 'en-US';
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export interface ProBuildsListExtraProps {
  lang: 'en' | 'it';
}

export function ProBuildsList(
  props: ProBuildsListProps & ProBuildsListExtraProps,
): JSX.Element {
  const { t } = useI18n();
  const tpl = (key: string, vars: Record<string, string>): string => {
    let out = t(key);
    for (const [k, v] of Object.entries(vars)) {
      out = out.split(`{${k}}`).join(v);
    }
    return out;
  };

  return (
    <section
      class="max-w-4xl mx-auto px-8 py-8"
      data-testid="pro-builds-list"
    >
      <header class="mb-6 flex flex-wrap items-center gap-4">
        <span
          class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/70"
          data-testid="pro-builds-freshness"
        >
          {tpl('wp34.pro_builds.freshness.label', {
            date: formatIsoDate(props.data.data_freshness_at, props.lang),
          })}
        </span>
        <span
          class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/70"
          data-testid="pro-builds-sample"
        >
          {tpl('wp34.pro_builds.sample_size.label', {
            count: String(props.data.sample_size),
          })}
        </span>
        <Show when={props.data.regions.length > 0}>
          <span
            class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/70"
            data-testid="pro-builds-regions"
          >
            {tpl('wp34.pro_builds.regions.label', {
              regions: props.data.regions.join(', '),
            })}
          </span>
        </Show>
      </header>

      <h2 class="text-2xl font-headline font-bold text-on-surface mb-4">
        {t('wp34.pro_builds.section.pattern_heading')}
      </h2>
      <ProBuildDetail pattern={props.data.build_pattern} />

      <Show when={props.leaderboard && props.leaderboard.leaderboard.length > 0}>
        {(_present) => (
          <>
            <h2 class="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">
              {t('wp34.pro_builds.section.leaderboard_heading')}
            </h2>
            <table
              class="w-full text-left border-collapse"
              aria-label={t('wp34.pro_builds.section.leaderboard_heading')}
              data-testid="pro-builds-leaderboard"
            >
              <thead>
                <tr class="border-b border-on-surface-variant/20">
                  <th
                    scope="col"
                    class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
                  >
                    {t('wp34.pro_builds.leaderboard.bucket_id')}
                  </th>
                  <th
                    scope="col"
                    class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
                  >
                    {t('wp34.pro_builds.leaderboard.region')}
                  </th>
                  <th
                    scope="col"
                    class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
                  >
                    {t('wp34.pro_builds.leaderboard.matches_14d')}
                  </th>
                  <th
                    scope="col"
                    class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
                  >
                    {t('wp34.pro_builds.leaderboard.win_rate_class')}
                  </th>
                  <th
                    scope="col"
                    class="py-2 px-3 text-sm font-headline font-bold text-on-surface-variant"
                  >
                    {t('wp34.pro_builds.leaderboard.signature')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <For each={props.leaderboard!.leaderboard}>
                  {(entry: LeaderboardEntry) => (
                    <tr
                      class="border-b border-on-surface-variant/10"
                      data-testid={`leaderboard-row-${entry.puuid_bucket_id.slice(0, 8)}`}
                    >
                      <td
                        class="py-2 px-3 text-on-surface font-mono text-sm"
                        title={entry.puuid_bucket_id}
                      >
                        {truncateBucketId(entry.puuid_bucket_id)}
                      </td>
                      <td class="py-2 px-3 text-on-surface-variant uppercase">
                        {entry.region}
                      </td>
                      <td class="py-2 px-3 text-on-surface-variant tabular-nums">
                        {entry.match_count_14d}
                      </td>
                      <td class="py-2 px-3 text-on-surface-variant">
                        {winRateLabel(entry.win_rate_class, t)}
                      </td>
                      <td class="py-2 px-3 text-on-surface-variant/70 font-mono text-xs">
                        {entry.common_build_signature || '—'}
                      </td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </>
        )}
      </Show>
    </section>
  );
}

export default ProBuildsList;
