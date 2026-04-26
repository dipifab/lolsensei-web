// WP35 — RelatedGuides 3-5 same-role siblings (DEC-OP-017, REQ-F-035-010).

import { For, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import type { RelatedChampion } from '../../data/champions/types';
import { useI18n } from '../../i18n';

interface RelatedGuidesProps {
  related: readonly RelatedChampion[];
  lang: 'en' | 'it';
  role: string;
}

export function RelatedGuides(props: RelatedGuidesProps): JSX.Element {
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
      class="mt-16 pt-8 border-t border-outline-variant/10"
      data-testid="champion-guide-related"
    >
      <h2 class="text-base font-headline font-bold uppercase tracking-widest text-on-surface mb-4">
        {tpl('wp35.champion_guide.related.heading', { role: props.role })}
      </h2>
      <Show
        when={props.related.length > 0}
        fallback={
          <p class="text-sm text-on-surface-variant/60">
            {t('wp35.champion_guide.related.empty')}
          </p>
        }
      >
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3" role="list">
          <For each={props.related}>
            {(rel) => (
              <li>
                <a
                  href={`/${props.lang}/champion/${rel.champion}/guide`}
                  class="block glass-panel rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-colors p-3 text-sm font-headline font-bold text-on-surface hover:text-primary-container capitalize"
                >
                  {rel.champion.replace(/-/g, ' ')}
                </a>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
}

export default RelatedGuides;
