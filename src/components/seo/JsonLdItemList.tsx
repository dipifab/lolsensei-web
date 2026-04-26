import type { JSX } from 'solid-js';
import type { TierEntry } from '../../types/wp30';
import { JsonLd } from './JsonLd';

/**
 * Schema.org `ItemList` JSON-LD for the tier list page (REQ-F-030-008,
 * DEC-OP-025).
 *
 * Caller responsibility: do NOT render this component when
 * `insufficient_sample === true`. The route handler is the gatekeeper
 * (it also emits `noindex` in that branch).
 *
 *   - `numberOfItems`   = `tiers.length`.
 *   - `itemListOrder`   = "ItemListOrderDescending" (rank 1 = best).
 *   - `itemListElement` ordered by `rank` ascending (top tier first).
 */
export interface JsonLdItemListProps {
  tiers: TierEntry[];
  role: string;
  patch: string;
}

function roleLabel(role: string): string {
  if (role === 'all') return 'All Roles';
  return role.charAt(0).toUpperCase() + role.slice(1);
}

export function JsonLdItemList(props: JsonLdItemListProps): JSX.Element {
  const data = (): Record<string, unknown> => {
    const sorted = [...props.tiers].sort((a, b) => a.rank - b.rank);
    return {
      '@type': 'ItemList',
      name: `League of Legends Tier List — ${roleLabel(props.role)} — Patch ${props.patch}`,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: sorted.length,
      itemListElement: sorted.map((entry) => ({
        '@type': 'ListItem',
        position: entry.rank,
        name: entry.champion,
      })),
    };
  };

  return <JsonLd data={data()} />;
}
