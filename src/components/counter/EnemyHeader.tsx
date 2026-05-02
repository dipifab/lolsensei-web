// WPCP-030 (CR-063) — EnemyHeader component (Counter Detail Page).
//
// Header della detail page: portrait grande dell'enemy + h1 nome + role badge
// opzionale. Il portrait e' eager (above-the-fold) per non penalizzare LCP.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/components.md §3 (Layout header)
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §2 (ARIA)

import { Show, type JSX } from 'solid-js';
import type { ChampionMeta, Lang, Role } from '../../lib/counter/types';
import { useCounterI18n } from '../../lib/counter/i18n';
import { ChampionPortrait } from '../champion/ChampionPortrait';

export interface EnemyHeaderProps {
  lang: Lang;
  /** Slug enemy canonical (chiave di by_enemy). */
  slug: string;
  /** Meta enemy dal lookup champions (puo essere undefined: fallback usa slug). */
  meta: ChampionMeta | undefined;
  /** Ruolo richiesto via URL suffix (es. "yasuo-mid"); null se URL senza role. */
  role: Role | null;
}

export function EnemyHeader(props: EnemyHeaderProps): JSX.Element {
  const { label } = useCounterI18n();

  const displayName = (): string => props.meta?.display_name ?? props.slug;
  const portraitAlt = (): string =>
    label('counter.a11y.portrait_alt', { name: displayName() });
  const roleBadgeAria = (): string =>
    label('counter.detail.role_badge_aria', {
      name: displayName(),
      role: props.role ? props.role.toUpperCase() : '',
    });

  return (
    <header class="flex items-center gap-3 md:gap-4 mb-4" data-lang={props.lang}>
      <ChampionPortrait
        slug={props.slug}
        championDdId={props.meta?.dd_id ?? null}
        championKey={props.meta?.key ?? null}
        variant="square"
        size="lg"
        alt={portraitAlt()}
        lazy={false}
      />
      <div class="flex-1 min-w-0">
        <h1
          tabIndex={-1}
          class="text-2xl md:text-4xl font-headline font-extrabold leading-tight outline-none"
          data-testid="enemy-header-title"
        >
          {displayName()}
        </h1>
        <Show when={props.role}>
          {(role) => (
            <span
              class="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[11px]
                     font-bold uppercase tracking-wider bg-surface-container-high/60
                     border border-outline/20 text-on-surface-variant"
              aria-label={roleBadgeAria()}
              data-testid="enemy-header-role"
            >
              {role()}
            </span>
          )}
        </Show>
      </div>
    </header>
  );
}

export default EnemyHeader;
