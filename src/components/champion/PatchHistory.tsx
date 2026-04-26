// WP35 — PatchHistory chip list (DEC-OP-026, REQ-F-035-005).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { useI18n } from '../../i18n';

interface PatchHistoryProps {
  patches: readonly string[];
  currentPatch: string;
  lang: 'en' | 'it';
  champion: string;
}

export function PatchHistory(props: PatchHistoryProps): JSX.Element {
  const { t } = useI18n();
  const otherPatches = () =>
    props.patches.filter((p) => p !== props.currentPatch);

  return (
    <section
      class="mt-16 pt-8 border-t border-outline-variant/10"
      data-testid="champion-guide-past-patches"
    >
      <h2 class="text-base font-headline font-bold uppercase tracking-widest text-on-surface mb-4">
        {t('wp35.champion_guide.past_patches.heading')}
      </h2>
      <Show
        when={otherPatches().length > 0}
        fallback={
          <p class="text-sm text-on-surface-variant/60">
            {t('wp35.champion_guide.past_patches.empty')}
          </p>
        }
      >
        <ul class="flex flex-wrap gap-2" role="list">
          <For each={otherPatches()}>
            {(patch) => (
              <li>
                <a
                  href={`/${props.lang}/champion/${props.champion}/${patch}`}
                  class="inline-block text-xs font-bold tracking-wide text-primary-container border border-primary-container/30 hover:border-primary-container/60 px-3 py-1 rounded"
                >
                  {patch}
                </a>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
}

export default PatchHistory;
