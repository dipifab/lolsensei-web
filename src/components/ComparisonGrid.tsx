import { For } from 'solid-js';
import { useI18n } from '../i18n';
import { COMPARISON_ROWS } from '../data/content';
import Icon from './Icon';

const ROW_KEYS = [
  'comparison.row1',
  'comparison.row2',
  'comparison.row3',
  'comparison.row4',
] as const;

export default function ComparisonGrid() {
  const { t } = useI18n();

  return (
    <section class="py-24 bg-surface-container-lowest">
      <div class="max-w-5xl mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold tracking-tight mb-4 uppercase">
            {t('comparison.title')}
          </h2>
          <p class="text-on-surface-variant">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Desktop: 3-column grid (md and up) */}
        <div class="hidden md:grid grid-cols-3 gap-0.5 bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
          {/* Header row */}
          <div class="bg-surface-container-low p-6 font-bold text-on-surface-variant uppercase text-xs tracking-widest">
            {t('comparison.header.capability')}
          </div>
          <div class="bg-surface-container-high p-6 font-bold text-primary-container text-center uppercase text-xs tracking-widest">
            {t('comparison.header.lolSensei')}
          </div>
          <div class="bg-surface-container-low p-6 font-bold text-on-surface-variant text-center uppercase text-xs tracking-widest">
            {t('comparison.header.staticTools')}
          </div>

          {/* Data rows */}
          <For each={COMPARISON_ROWS}>
            {(row, index) => (
              <>
                <div class="bg-surface-container-low p-6 text-sm">
                  {t(ROW_KEYS[index()])}
                </div>
                <div class="bg-surface-container-high p-6 flex justify-center">
                  <Icon
                    name={row.lolSensei ? 'check_circle' : 'cancel'}
                    class={`w-6 h-6 ${row.lolSensei ? 'text-tertiary' : 'text-on-surface-variant/30'}`}
                  />
                </div>
                <div class="bg-surface-container-low p-6 flex justify-center">
                  <Icon
                    name={row.staticTools ? 'check_circle' : 'cancel'}
                    class={`w-6 h-6 ${row.staticTools ? 'text-tertiary' : 'text-on-surface-variant/30'}`}
                  />
                </div>
              </>
            )}
          </For>
        </div>

        {/* Mobile: stacked card layout (below md) */}
        <div class="md:hidden flex flex-col gap-3">
          <For each={COMPARISON_ROWS}>
            {(row, index) => (
              <div class="glass-panel rounded-xl border border-outline-variant/10 p-5">
                <p class="text-sm font-bold mb-3">
                  {t(ROW_KEYS[index()])}
                </p>
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2">
                    <Icon
                      name={row.lolSensei ? 'check_circle' : 'cancel'}
                      class={`w-5 h-5 ${row.lolSensei ? 'text-tertiary' : 'text-on-surface-variant/30'}`}
                    />
                    <span class="text-xs font-bold text-primary-container uppercase tracking-widest">
                      {t('comparison.header.lolSensei')}
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon
                      name={row.staticTools ? 'check_circle' : 'cancel'}
                      class={`w-5 h-5 ${row.staticTools ? 'text-tertiary' : 'text-on-surface-variant/30'}`}
                    />
                    <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      {t('comparison.header.staticTools')}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
