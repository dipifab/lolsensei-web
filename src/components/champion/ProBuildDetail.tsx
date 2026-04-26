// WP34 — ProBuildDetail (FE-7): single build pattern detail rendering.
//
// Renderizza:
//   - top-3 sequenze item_order (slug `item_<id>` come testo, no asset).
//   - top-1 rune set (keystone + primary tree + secondary tree, integer id).
//   - top-1 summoner spells.
//
// Carve-out DEC-OP-W34-007: text-first MVP. NESSUN asset image (Stitch
// frame mancante, refactor 1:1 via WP37). Le icone item / rune verranno
// agganciate quando il design system "Tactical Precision" sara' ready.
//
// Reg 17: zero decimali esposti. Solo id catalog Riot e slug.

import type { JSX } from 'solid-js';
import { For, Show } from 'solid-js';
import type { ProBuildPattern } from '../../types/wp34';
import { useI18n } from '../../i18n';

export interface ProBuildDetailProps {
  pattern: ProBuildPattern;
}

export function ProBuildDetail(props: ProBuildDetailProps): JSX.Element {
  const { t } = useI18n();

  return (
    <div
      class="flex flex-col gap-6 mb-4"
      data-testid="pro-build-detail"
    >
      <section data-testid="pro-build-item-order">
        <h3 class="text-lg font-headline font-bold text-on-surface mb-2">
          {t('wp34.pro_builds.detail.item_order_heading')}
        </h3>
        <Show
          when={props.pattern.item_order_top3.length > 0}
          fallback={
            <p class="text-on-surface-variant/70 italic text-sm">
              {t('wp34.common.empty_state')}
            </p>
          }
        >
          <ol class="list-decimal pl-6 flex flex-col gap-1">
            <For each={props.pattern.item_order_top3}>
              {(seq, idx) => (
                <li
                  class="text-on-surface-variant"
                  data-testid={`item-order-seq-${idx()}`}
                >
                  <span class="font-mono text-sm">{seq.join(' → ')}</span>
                </li>
              )}
            </For>
          </ol>
        </Show>
      </section>

      <section data-testid="pro-build-runes">
        <h3 class="text-lg font-headline font-bold text-on-surface mb-2">
          {t('wp34.pro_builds.detail.runes_heading')}
        </h3>
        <Show
          when={props.pattern.rune_top1.keystone > 0}
          fallback={
            <p class="text-on-surface-variant/70 italic text-sm">
              {t('wp34.common.empty_state')}
            </p>
          }
        >
          <dl class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div>
              <dt class="text-xs uppercase tracking-wide text-on-surface-variant/70">
                {t('wp34.pro_builds.detail.keystone_label')}
              </dt>
              <dd
                class="font-mono text-on-surface"
                data-testid="rune-keystone"
              >
                {props.pattern.rune_top1.keystone}
              </dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-wide text-on-surface-variant/70">
                {t('wp34.pro_builds.detail.primary_tree_label')}
              </dt>
              <dd
                class="font-mono text-on-surface"
                data-testid="rune-primary-tree"
              >
                {props.pattern.rune_top1.primary_tree.join(' / ')}
              </dd>
            </div>
            <div>
              <dt class="text-xs uppercase tracking-wide text-on-surface-variant/70">
                {t('wp34.pro_builds.detail.secondary_tree_label')}
              </dt>
              <dd
                class="font-mono text-on-surface"
                data-testid="rune-secondary-tree"
              >
                {props.pattern.rune_top1.secondary_tree.join(' / ')}
              </dd>
            </div>
          </dl>
        </Show>
      </section>

      <section data-testid="pro-build-summoners">
        <h3 class="text-lg font-headline font-bold text-on-surface mb-2">
          {t('wp34.pro_builds.detail.summoners_heading')}
        </h3>
        <Show
          when={props.pattern.summoner_top1.length > 0}
          fallback={
            <p class="text-on-surface-variant/70 italic text-sm">
              {t('wp34.common.empty_state')}
            </p>
          }
        >
          <p class="font-mono text-on-surface-variant">
            {props.pattern.summoner_top1.join(' + ')}
          </p>
        </Show>
      </section>
    </div>
  );
}

export default ProBuildDetail;
