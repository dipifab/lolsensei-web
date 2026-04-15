import { useI18n } from '../i18n';
import { COMPARISON_ROWS } from '../data/content';

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

        <div class="grid grid-cols-3 gap-0.5 bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
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
          {COMPARISON_ROWS.map((row, index) => (
            <>
              <div class="bg-surface-container-low p-6 text-sm">
                {t(ROW_KEYS[index])}
              </div>
              <div class="bg-surface-container-high p-6 flex justify-center">
                <span class={`material-symbols-outlined ${row.lolSensei ? 'text-tertiary' : 'text-on-surface-variant/30'}`}>
                  {row.lolSensei ? 'check_circle' : 'cancel'}
                </span>
              </div>
              <div class="bg-surface-container-low p-6 flex justify-center">
                <span class={`material-symbols-outlined ${row.staticTools ? 'text-tertiary' : 'text-on-surface-variant/30'}`}>
                  {row.staticTools ? 'check_circle' : 'cancel'}
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
