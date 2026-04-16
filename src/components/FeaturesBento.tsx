import { useI18n } from '../i18n';
import Icon from './Icon';

export default function FeaturesBento() {
  const { t } = useI18n();

  return (
    <section class="py-32 px-8" id="features">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Panel 1: Champ Select (7-col) */}
          <div class="lg:col-span-7 bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between hex-bg">
            <div class="flex justify-between items-start mb-12">
              <div>
                <span class="text-xs font-headline font-extrabold uppercase tracking-[0.2em] text-primary-container mb-2 block">{t('features.bento.label')}</span>
                <h3 class="text-3xl font-extrabold tracking-tight">{t('features.bento.champSelect.title')}</h3>
              </div>
              <Icon name="smart_toy_filled" class="w-8 h-8 text-primary-container" />
            </div>
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="glass-panel p-4 rounded-lg border border-outline-variant/10 text-center">
                <div class="w-12 h-12 bg-surface-container rounded-full mx-auto mb-3 border border-tertiary/40" />
                <div class="text-[10px] uppercase tracking-tighter opacity-50 mb-1">{t('features.mockup.winRate')}</div>
                <div class="text-tertiary font-bold text-sm">54.2%</div>
              </div>
              <div class="glass-panel p-4 rounded-lg border border-outline-variant/10 text-center">
                <div class="w-12 h-12 bg-surface-container rounded-full mx-auto mb-3 border border-error/40" />
                <div class="text-[10px] uppercase tracking-tighter opacity-50 mb-1">{t('features.mockup.winRate')}</div>
                <div class="text-error font-bold text-sm">48.9%</div>
              </div>
              <div class="glass-panel p-4 rounded-lg border border-outline-variant/10 text-center">
                <div class="w-12 h-12 bg-surface-container rounded-full mx-auto mb-3 border border-tertiary/40" />
                <div class="text-[10px] uppercase tracking-tighter opacity-50 mb-1">{t('features.mockup.winRate')}</div>
                <div class="text-tertiary font-bold text-sm">52.1%</div>
              </div>
            </div>
            <p class="text-on-surface-variant font-medium">{t('features.bento.champSelect.description')}</p>
          </div>

          {/* Panel 2: Game Start (5-col) */}
          <div class="lg:col-span-5 bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <Icon name="strategy_filled" class="w-8 h-8 text-secondary mb-6" />
              <h3 class="text-3xl font-extrabold tracking-tight mb-4">{t('features.bento.gameStart.title')}</h3>
              <p class="text-on-surface-variant mb-8">{t('features.bento.gameStart.description')}</p>
            </div>
            <div class="bg-surface-container-lowest rounded-lg p-6 border border-outline-variant/10">
              <div class="flex items-center gap-3 mb-4">
                <div class="h-2 w-2 rounded-full bg-primary-container" />
                <div class="h-1.5 flex-1 bg-outline-variant/20 rounded" />
              </div>
              <div class="space-y-3">
                <div class="h-3 w-3/4 bg-on-surface/10 rounded" />
                <div class="h-3 w-1/2 bg-on-surface/10 rounded" />
              </div>
            </div>
          </div>

          {/* Panel 3: Item Advisor (12-col) */}
          <div class="lg:col-span-12 bg-surface-container rounded-xl border border-primary-container/20 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-10 md:p-16 flex flex-col justify-center">
                <h3 class="text-4xl font-extrabold tracking-tight mb-6">{t('features.bento.itemAdvisor.title')}</h3>
                <p class="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  {t('features.bento.itemAdvisor.description')}
                </p>
                <div class="flex items-center gap-4 text-primary-container font-headline font-extrabold uppercase tracking-widest text-sm">
                  <Icon name="bolt" class="w-6 h-6" />
                  {t('features.bento.itemAdvisor.badge')}
                </div>
              </div>
              <div class="relative bg-surface-container-highest flex items-center justify-center p-8">
                <div class="flex gap-4">
                  <div class="w-24 h-48 bg-surface-container rounded border border-primary-container/50 flex flex-col items-center justify-center p-2">
                    <div class="w-10 h-10 bg-primary-container/20 rounded mb-4" />
                    <div class="w-12 h-1 bg-primary-container rounded mb-1" />
                    <div class="w-8 h-1 bg-outline-variant rounded" />
                  </div>
                  <div class="w-56 h-64 glass-panel rounded border border-outline-variant/20 shadow-2xl p-4">
                    <div class="flex justify-between mb-4">
                      <div class="w-16 h-3 bg-on-surface/30 rounded" />
                      <div class="w-8 h-3 bg-tertiary/50 rounded" />
                    </div>
                    <div class="space-y-2 mb-4">
                      <div class="h-2 bg-on-surface/10 rounded" />
                      <div class="h-2 bg-on-surface/10 rounded" />
                      <div class="h-2 bg-on-surface/10 rounded w-2/3" />
                    </div>
                    <div class="h-20 bg-surface-container-lowest rounded border border-outline-variant/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
