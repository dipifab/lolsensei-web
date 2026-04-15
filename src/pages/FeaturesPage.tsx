import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';

export default function FeaturesPage() {
  const { t, locale } = useI18n();
  usePageMeta('features', '/features');

  return (
    <>
      <Navbar />
      <main class="pt-20">
        {/* Hero Section */}
        <section class="relative py-24 overflow-hidden">
          <div class="max-w-7xl mx-auto px-8 relative z-10">
            <div class="max-w-3xl">
              <span class="inline-block py-1 px-3 rounded-sm bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {t('features.hero.label')}
              </span>
              <h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                UNDERSTAND EVERY <span class="text-primary-container">PHASE.</span>
              </h1>
              <p class="text-xl text-on-surface-variant/80 max-w-xl leading-relaxed">
                {t('features.hero.subtitle')}
              </p>
            </div>
          </div>
          <div class="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img
              alt="Cinematic esports background"
              class="w-full h-full object-cover"
              src="/images/features-hero-bg.webp"
              width={960}
              height={600}
            />
          </div>
        </section>

        {/* Feature 1: Champion Select Coach */}
        <section class="py-24 bg-surface-container-low relative">
          <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="order-2 lg:order-1">
                <div class="glass-panel p-8 rounded-xl border border-outline-variant/10 hex-bg relative overflow-hidden">
                  <div class="flex justify-between mb-8">
                    <div class="flex gap-2">
                      <div class="w-12 h-12 rounded-lg bg-surface-container-highest border border-primary/20 flex items-center justify-center">
                        <span class="material-symbols-outlined text-primary" style={{ "font-variation-settings": "'FILL' 1" }}>groups</span>
                      </div>
                      <div>
                        <div class="text-xs text-on-surface-variant font-bold tracking-widest uppercase">Team Analysis</div>
                        <div class="text-sm font-bold text-primary">Synergy: 84%</div>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="text-[10px] text-tertiary font-bold tracking-widest uppercase">Ideal Pick</div>
                      <div class="text-lg font-headline font-extrabold uppercase italic">Ornn</div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
                      <span class="text-sm font-medium">Frontline Density</span>
                      <div class="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div class="w-[75%] h-full gold-gradient" />
                      </div>
                    </div>
                    <div class="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between">
                      <span class="text-sm font-medium">Magic/Phys Split</span>
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
                  <span class="material-symbols-outlined text-primary-container">psychology</span>
                  <span class="text-primary-container text-xs font-bold tracking-widest uppercase">{t('features.phase1.label')}</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">{t('features.phase1.title')}</h2>
                <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {t('features.phase1.description')}
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                    <span class="text-on-surface/80">{t('features.phase1.check1')}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
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
                  <span class="material-symbols-outlined text-primary-container">analytics</span>
                  <span class="text-primary-container text-xs font-bold tracking-widest uppercase">{t('features.phase2.label')}</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">{t('features.phase2.title')}</h2>
                <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                  {t('features.phase2.description')}
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-surface-container p-6 rounded-xl border-l-2 border-primary-container">
                    <div class="text-2xl font-extrabold text-primary mb-1">LVL 6</div>
                    <div class="text-xs uppercase tracking-wider text-on-surface-variant">Key Timing Window</div>
                  </div>
                  <div class="bg-surface-container p-6 rounded-xl border-l-2 border-secondary">
                    <div class="text-2xl font-extrabold text-secondary mb-1">Split</div>
                    <div class="text-xs uppercase tracking-wider text-on-surface-variant">Win Condition</div>
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
                  <img
                    alt="Data visualization interface"
                    class="rounded-lg w-full aspect-video object-cover opacity-80 mix-blend-screen"
                    src="/images/features-hud-mockup.webp"
                    loading="lazy"
                    width={800}
                    height={450}
                  />
                  <div class="mt-6 flex justify-between">
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">Early Game</div>
                      <div class="w-12 h-1 bg-tertiary-container rounded-full" />
                    </div>
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">Mid Game</div>
                      <div class="w-12 h-1 bg-primary-container rounded-full" />
                    </div>
                    <div class="text-center px-4">
                      <div class="text-xs text-on-surface-variant uppercase mb-1">Late Game</div>
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
                <span class="material-symbols-outlined text-primary-container">inventory_2</span>
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
                  <span class="material-symbols-outlined text-primary">update</span>
                </div>
                <h3 class="text-xl font-headline font-bold mb-4">{t('features.phase3.card1.title')}</h3>
                <p class="text-on-surface-variant/80 text-sm leading-relaxed">
                  {t('features.phase3.card1.description')}
                </p>
              </div>
              <div class="glass-panel p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-primary">analytics</span>
                </div>
                <h3 class="text-xl font-headline font-bold mb-4">{t('features.phase3.card2.title')}</h3>
                <p class="text-on-surface-variant/80 text-sm leading-relaxed">
                  {t('features.phase3.card2.description')}
                </p>
              </div>
              <div class="glass-panel p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-primary">bolt</span>
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
              READY TO START <br />
              <span class="text-primary-container">{t('features.cta.highlight')}</span>
            </h2>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span
                class="bg-surface-container-highest/60 border border-outline-variant/30 px-10 py-5 rounded-lg font-headline font-extrabold text-lg uppercase text-on-surface-variant/50 inline-flex items-center gap-2 cursor-default select-none"
              >
                <span class="material-symbols-outlined">hourglass_top</span>
                {t('hero.cta.download')}
              </span>
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
