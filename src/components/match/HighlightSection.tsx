// WP31 F4-06 — Highlight section + 8-type renderer (OP-006/OP-035).
//
// Renders the chronological list of highlights extracted by the backend
// `ReplayHighlightExtractor` (8 detector categories). Zero-output for
// remakes / boring games is honored — when `highlights.length === 0` the
// section returns null gracefully (REQ-F-031-009).
//
// Each card label/body is i18n-driven (already shipped in en.ts/it.ts).
// Payload-specific interpolations use simple `{token}` replacement to stay
// consistent with the rest of the codebase (no full ICU runtime dependency).

import { For, Show, type JSX } from 'solid-js';
import { useI18n } from '../../i18n';
import type { Highlight, HighlightType } from '../../types/wp31';
import { formatGameTime } from './format';

export { formatGameTime };

export interface HighlightSectionProps {
  highlights: ReadonlyArray<Highlight>;
}

const TYPE_LABEL_KEY: Readonly<Record<HighlightType, string>> = {
  first_blood: 'match.review.highlights.type.first_blood',
  dragon: 'match.review.highlights.type.dragon',
  baron: 'match.review.highlights.type.baron',
  herald: 'match.review.highlights.type.herald',
  gold_spike: 'match.review.highlights.type.gold_spike',
  deathball: 'match.review.highlights.type.deathball',
  late_game_pick: 'match.review.highlights.type.late_game_pick',
  objective_steal: 'match.review.highlights.type.objective_steal',
};

function renderBody(t: (k: string) => string, h: Highlight): string {
  switch (h.type) {
    case 'first_blood':
      return t('match.review.highlights.type.first_blood.body');
    case 'dragon': {
      const key = `match.review.highlights.type.dragon.body.${h.payload.monster_sub_type}`;
      const fallbackKey = 'match.review.highlights.type.dragon.body.infernal';
      const value = t(key);
      // `t()` returns the key itself when missing — fall back to a known label
      // (defensive: backend should only emit known sub-types).
      return value === key ? t(fallbackKey) : value;
    }
    case 'baron':
      return t('match.review.highlights.type.baron.body');
    case 'herald':
      return t('match.review.highlights.type.herald.body');
    case 'gold_spike':
      return t('match.review.highlights.type.gold_spike.body').replace(
        '{delta}',
        String(h.payload.delta_gold),
      );
    case 'deathball':
      return t('match.review.highlights.type.deathball.body')
        .replace('{kills}', String(h.payload.kill_count))
        .replace('{seconds}', String(Math.round(h.payload.duration_ms / 1000)));
    case 'late_game_pick':
      return t('match.review.highlights.type.late_game_pick.body').replace(
        '{champion}',
        // Backend emits champion id from the participant; the FE renders the
        // generic placeholder until a champion-id -> name lookup table lands
        // (forward-compatible with the planned WP30 champion catalogue).
        String(h.payload.victim_id),
      );
    case 'objective_steal':
      return t('match.review.highlights.type.objective_steal.body').replace(
        '{objective}',
        h.payload.monster_type,
      );
    default: {
      // Exhaustiveness check at compile time — TypeScript flags any new
      // `HighlightType` not handled above.
      const _exhaustive: never = h;
      return _exhaustive;
    }
  }
}

export function HighlightSection(props: HighlightSectionProps): JSX.Element {
  const { t } = useI18n();

  return (
    <Show when={props.highlights.length > 0}>
      <section class="my-8" data-testid="highlight-section" aria-label={t('match.review.aria.highlights')}>
        <h2 class="text-lg font-bold font-headline text-on-surface mb-4">
          {t('match.review.highlights.title')}
        </h2>
        <ol class="space-y-2" role="list">
          <For each={props.highlights}>
            {(h) => (
              <li
                class="rounded-lg border border-outline-variant/20 bg-surface-variant/5 px-4 py-3 flex flex-wrap items-baseline gap-x-4 gap-y-1"
                data-testid="highlight-card"
                data-type={h.type}
              >
                <time
                  class="font-mono text-sm text-on-surface-variant/70 min-w-[3rem]"
                  datetime={`PT${Math.floor(h.timestamp_ms / 1000)}S`}
                >
                  {formatGameTime(h.timestamp_ms)}
                </time>
                <span class="font-headline font-bold text-on-surface">
                  {t(TYPE_LABEL_KEY[h.type])}
                </span>
                <span class="text-sm text-on-surface-variant flex-1">
                  {renderBody(t, h)}
                </span>
              </li>
            )}
          </For>
        </ol>
      </section>
    </Show>
  );
}

/** Alias requested by F4 brief: same component as `HighlightSection`. */
export const HighlightTimeline = HighlightSection;

export default HighlightSection;
