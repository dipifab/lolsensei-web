import { useI18n } from '../../i18n';
import type { RankInfo } from '../../types/wp30';

/**
 * Detailed rank panel rendered below the SummonerHeader badge. Optional —
 * only shown when `rank !== null` (DEC-OP-023).
 */
export interface RankInfoCardProps {
  rank: RankInfo;
}

export function RankInfoCard(props: RankInfoCardProps) {
  const { t } = useI18n();
  const totalGames = () => props.rank.wins + props.rank.losses;
  const winRate = () =>
    totalGames() === 0
      ? 0
      : Math.round((props.rank.wins / totalGames()) * 1000) / 10;

  return (
    <section class="max-w-5xl mx-auto px-8 my-8">
      <h2 class="text-sm uppercase tracking-widest font-headline font-bold text-on-surface-variant mb-4">
        {t('wp30.summoner.section.rank.heading')}
      </h2>
      <dl class="grid grid-cols-2 md:grid-cols-5 gap-4 rounded-lg border border-outline-variant/20 bg-surface-variant/5 p-6">
        <div>
          <dt class="text-xs uppercase tracking-widest text-on-surface-variant/70 mb-1">
            {t('wp30.summoner.section.rank.tier_label')}
          </dt>
          <dd class="font-headline font-extrabold text-on-surface">
            {props.rank.tier} {props.rank.division}
          </dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-on-surface-variant/70 mb-1">
            {t('wp30.summoner.section.rank.lp_label')}
          </dt>
          <dd class="font-headline font-extrabold text-on-surface">
            {props.rank.league_points}
          </dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-on-surface-variant/70 mb-1">
            {t('wp30.summoner.section.rank.wins_label')}
          </dt>
          <dd class="font-headline font-extrabold text-on-surface">
            {props.rank.wins}
          </dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-on-surface-variant/70 mb-1">
            {t('wp30.summoner.section.rank.losses_label')}
          </dt>
          <dd class="font-headline font-extrabold text-on-surface">
            {props.rank.losses}
          </dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-on-surface-variant/70 mb-1">
            {t('wp30.summoner.section.rank.winrate_label')}
          </dt>
          <dd class="font-headline font-extrabold text-on-surface">
            {winRate()}%
          </dd>
        </div>
      </dl>
    </section>
  );
}
