import { useI18n } from '../../i18n';
import type { SummonerInfo, RankInfo } from '../../types/wp30';

/**
 * Summoner page header (DEC-OP-008 carve-out — text-first MVP, not pixel
 * pinned to a Stitch frame).
 *
 * Renders identity (gameName#tagLine, region label, summoner level) plus an
 * inline rank badge when available. Profile icon is intentionally omitted in
 * the MVP because shipping it requires resolving the DataDragon CDN URL +
 * patch lookup at SSR time. WP37 tracks the visual refactor.
 */
export interface SummonerHeaderProps {
  info: SummonerInfo;
  rank: RankInfo | null;
}

function formatPercent(numerator: number, denominator: number): string {
  if (denominator === 0) return '0%';
  return `${Math.round((numerator / denominator) * 100)}%`;
}

export function SummonerHeader(props: SummonerHeaderProps) {
  const { t } = useI18n();

  return (
    <header class="max-w-5xl mx-auto px-8 pt-12 pb-6">
      <h1 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-2 break-words">
        <span>{props.info.game_name}</span>
        <span class="text-on-surface-variant/60">#{props.info.tag_line}</span>
      </h1>
      <p class="text-on-surface-variant text-sm md:text-base">
        {props.info.region_display} · Level {props.info.summoner_level}
      </p>

      {props.rank ? (
        <div class="mt-4 inline-flex items-center gap-3 rounded-lg border border-outline-variant/30 bg-surface-variant/10 px-4 py-2">
          <span class="font-headline font-extrabold uppercase tracking-widest text-sm text-primary-container">
            {props.rank.tier} {props.rank.division}
          </span>
          <span class="text-xs text-on-surface-variant">
            {props.rank.league_points} {t('wp30.summoner.section.rank.lp_label')}
          </span>
          <span class="text-xs text-on-surface-variant">·</span>
          <span class="text-xs text-on-surface-variant">
            {props.rank.wins}{t('wp30.summoner.section.rank.wins_label').slice(0, 1)} /{' '}
            {props.rank.losses}{t('wp30.summoner.section.rank.losses_label').slice(0, 1)} ·{' '}
            {formatPercent(props.rank.wins, props.rank.wins + props.rank.losses)}
          </span>
        </div>
      ) : (
        <div class="mt-4 inline-flex items-center gap-2 rounded-lg border border-outline-variant/30 bg-surface-variant/10 px-4 py-2">
          <span class="font-headline font-extrabold uppercase tracking-widest text-sm text-on-surface-variant">
            {t('wp30.summoner.section.rank.unranked_badge')}
          </span>
        </div>
      )}
    </header>
  );
}
