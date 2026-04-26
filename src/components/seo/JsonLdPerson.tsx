import type { JSX } from 'solid-js';
import type { SummonerPayload } from '../../types/wp30';
import { JsonLd } from './JsonLd';

/**
 * Schema.org `Person` JSON-LD for a public summoner page (REQ-F-030-008,
 * DEC-OP-022/023).
 *
 * Emit rules:
 *   - `name` and `identifier` keep the original case of `gameName#tagLine`
 *     for human readability (the URL is lowercase, but JSON-LD is consumed
 *     by crawlers, not URL routers).
 *   - `homeLocation.name` is the English region label (server-side
 *     canonical form). Keeps machine-readable artifacts stable across i18n
 *     locales.
 *   - `skillLevel` is OMITTED when `rank === null` (UNRANKED — DEC-OP-023).
 *     `is_private` does not, by itself, hide rank: rank is still a public
 *     signal, only match history is private.
 *   - `recent_matches` are NOT mapped to JSON-LD (no safe Schema.org type
 *     for ranked match history at this time — they remain in the HTML body
 *     for crawlers).
 */
export interface JsonLdPersonProps {
  summoner: SummonerPayload;
  /** English display label, e.g. "EU West", "Korea". From `regions.ts`. */
  regionDisplay: string;
}

export function JsonLdPerson(props: JsonLdPersonProps): JSX.Element {
  const data = (): Record<string, unknown> => {
    const { summoner_info, rank } = props.summoner;
    const fullId = `${summoner_info.game_name}#${summoner_info.tag_line}`;

    const base: Record<string, unknown> = {
      '@type': 'Person',
      name: fullId,
      identifier: fullId,
      additionalType: 'https://schema.org/SportsActivity',
      knowsAbout: 'League of Legends',
      homeLocation: {
        '@type': 'Place',
        name: props.regionDisplay,
      },
    };

    if (rank) {
      base.skillLevel = `${rank.tier} ${rank.division}`;
    }

    return base;
  };

  return <JsonLd data={data()} />;
}
