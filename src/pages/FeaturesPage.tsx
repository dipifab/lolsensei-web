import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../services/page-meta';
import Icon from '../components/Icon';
import DownloadCTA from '../components/DownloadCTA';

export default function FeaturesPage() {
  const { t, locale } = useI18n();
  usePageMeta('features', '/features');

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.features'), path: '/features' },
        ]}
      />
      <main class="pt-20">
        {/* Hero Section */}
        <section class="relative py-24 overflow-hidden">
          <div class="max-w-7xl mx-auto px-8 relative z-10">
            <div class="max-w-3xl">
              <span class="inline-block py-1 px-3 rounded-sm bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {t('features.hero.label')}
              </span>
              <h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                {t('features.hero.titleMain')} <span class="text-primary-container">{t('features.hero.titleAccent')}</span>
              </h1>
              <p class="text-xl text-on-surface-variant/80 max-w-xl leading-relaxed">
                {t('features.hero.subtitle')}
              </p>
            </div>
          </div>
          <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none bg-gradient-to-l from-primary-container/20 to-transparent" />
        </section>

        {/* Feature 1: Champion Select Coach */}
        <section class="py-24 bg-surface-container-low relative">
          <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="order-2 lg:order-1">
                <div class="glass-panel p-8 rounded-xl border border-outline-variant/10 hex-bg relative overflow-hidden">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 rounded-lg bg-surface-container-highest border border-primary/20 flex items-center justify-center">
                      <Icon name="groups_filled" class="w-6 h-6 text-primary" />
                    </div>
                    <div class="flex-1">
                      <div class="text-xs text-on-surface-variant font-bold tracking-widest uppercase">{t('features.mockup.teamAnalysis')}</div>
                      <div class="text-sm font-bold text-primary">{t('features.mockup.synergy')}: 84%</div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="text-[10px] text-tertiary font-bold tracking-widest uppercase mb-3">{t('features.mockup.topPicks')}</div>
                    <div class="space-y-2">
                      {([
                        { name: 'Ornn', score: 92, tone: 'favorable' },
                        { name: 'Maokai', score: 88, tone: 'favorable' },
                        { name: 'Leona', score: 85, tone: 'neutral' },
                      ] as const).map((pick) => (
                        <div class="bg-surface-container-lowest p-3 rounded-lg flex items-center gap-3">
                          <div class="w-9 h-9 rounded-md bg-surface-container-highest border border-primary/10 flex items-center justify-center flex-shrink-0">
                            <span class="text-[10px] font-bold text-on-surface-variant uppercase">{pick.name.slice(0, 2)}</span>
                          </div>
                          <span class="flex-1 text-sm font-headline font-extrabold uppercase italic">{pick.name}</span>
                          <span class={`text-[10px] font-bold px-2 py-0.5 rounded ${pick.tone === 'favorable' ? 'text-tertiary bg-tertiary-container/10' : 'text-primary bg-primary-container/10'}`}>
                            {pick.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
                      <span class="text-sm font-medium">{t('features.mockup.frontlineDensity')}</span>
                      <div class="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div class="w-[75%] h-full gold-gradient" />
                      </div>
                    </div>
                    <div class="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
                      <span class="text-sm font-medium">{t('features.mockup.magicPhysSplit')}</span>
                      <div class="flex w-32 h-1.5 rounded-full overflow-hidden">
                        <div class="w-[60%] h-full bg-secondary" />
                        <div class="w-[40%] h-full bg-error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-1 lg:order-2">
                <div class="flex items-center gap-3 mb-4">
                  <Icon name="psychology" class="w-6 h-6 text-primary-container" />
                  <span class="text-primary-container text-xs font-bold tracking-widest uppercase">{t('features.phase1.label')}</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">{t('features.phase1.title')}</h2>
                <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {t('features.phase1.description')}
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <Icon name="check_circle" class="w-3.5 h-3.5 text-tertiary mt-1" />
                    <span class="text-on-surface/80">{t('features.phase1.check1')}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="check_circle" class="w-3.5 h-3.5 text-tertiary mt-1" />
                    <span class="text-on-surface/80">{t('features.phase1.check2')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Lane Strategy Guide */}
        <section class="py-24 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Icon name="analytics" class="w-6 h-6 text-primary-container" />
                  <span class="text-primary-container text-xs font-bold tracking-widest uppercase">{t('features.phase2.label')}</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">{t('features.phase2.title')}</h2>
                <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {t('features.phase2.description')}
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-surface-container p-6 rounded-xl border-l-2 border-primary-container">
                    <div class="text-2xl font-extrabold text-primary mb-1">LVL 6</div>
                    <div class="text-xs uppercase tracking-wider text-on-surface-variant">{t('features.mockup.keyTiming')}</div>
                  </div>
                  <div class="bg-surface-container p-6 rounded-xl border-l-2 border-secondary">
                    <div class="text-2xl font-extrabold text-secondary mb-1">Split</div>
                    <div class="text-xs uppercase tracking-wider text-on-surface-variant">{t('features.mockup.winCondition')}</div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
                <div class="relative glass-panel border border-outline-variant/20 rounded-2xl p-4 md:p-8">
                  <div class="flex items-center justify-between mb-8 border-b border-outline-variant/10 pb-4">
                    <span class="text-sm font-bold tracking-tighter italic">COACHING_HUD_V2.0</span>
                    <div class="flex gap-1">
                      <div class="w-2 h-2 rounded-full bg-error animate-pulse" />
                      <div class="w-2 h-2 rounded-full bg-outline-variant" />
                    </div>
                  </div>
                  <div class="rounded-lg w-full aspect-video bg-surface-container-highest/50 flex items-center justify-center opacity-80">
                    <div class="text-center">
                      <div class="text-xs text-on-surface-variant uppercase tracking-widest font-bold">COACHING_HUD</div>
                      <div class="mt-2 flex gap-2 justify-center">
                        <div class="w-16 h-1 bg-primary-container rounded-full" />
                        <div class="w-16 h-1 bg-secondary rounded-full" />
                        <div class="w-16 h-1 bg-tertiary rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 flex justify-between">
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">{t('features.mockup.earlyGame')}</div>
                      <div class="w-12 h-1 bg-tertiary-container rounded-full" />
                    </div>
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">{t('features.mockup.midGame')}</div>
                      <div class="w-12 h-1 bg-primary-container rounded-full" />
                    </div>
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">{t('features.mockup.lateGame')}</div>
                      <div class="w-12 h-1 bg-outline-variant rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Build Understanding */}
        <section class="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
          <div class="max-w-7xl mx-auto px-8">
            <div class="text-center max-w-3xl mx-auto mb-20">
              <div class="flex justify-center items-center gap-3 mb-4">
                <Icon name="inventory_2" class="w-6 h-6 text-primary-container" />
                <span class="text-primary-container text-xs font-bold tracking-widest uppercase">{t('features.phase3.label')}</span>
              </div>
              <h2 class="text-4xl md:text-6xl font-headline font-extrabold tracking-tight mb-6">{t('features.phase3.title')}</h2>
              <p class="text-on-surface-variant text-lg">
                {t('features.phase3.description')}
              </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="glass-panel p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="update" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-4">{t('features.phase3.card1.title')}</h3>
                <p class="text-on-surface-variant/80 text-sm leading-relaxed">
                  {t('features.phase3.card1.description')}
                </p>
              </div>
              <div class="glass-panel p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="analytics" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-4">{t('features.phase3.card2.title')}</h3>
                <p class="text-on-surface-variant/80 text-sm leading-relaxed">
                  {t('features.phase3.card2.description')}
                </p>
              </div>
              <div class="glass-panel p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="bolt" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-4">{t('features.phase3.card3.title')}</h3>
                <p class="text-on-surface-variant/80 text-sm leading-relaxed">
                  {t('features.phase3.card3.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-32 relative overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div class="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-10 leading-tight">
              {t('features.cta.titleMain')} <br />
              <span class="text-primary-container">{t('features.cta.highlight')}</span>
            </h2>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DownloadCTA variant="primary" />
              <A
                href={`/${locale()}/pricing`}
                class="px-10 py-5 rounded-lg font-headline font-extrabold text-lg uppercase border border-outline-variant/30 hover:bg-surface-variant/40 transition-all"
              >
                {t('hero.cta.pricing')}
              </A>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
