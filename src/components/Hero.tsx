import { scrollToSection } from '../utils/scroll';
import { useI18n } from '../i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-8 overflow-hidden"
    >
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div class="z-10 text-left">
          <h1 class="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-on-surface font-headline">
            {t('hero.title').replace(t('hero.highlight'), '')}
            <span class="text-primary-container">{t('hero.highlight')}</span>
          </h1>
          <p class="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div class="flex flex-wrap gap-4">
            <span
              class="bg-surface-container-highest/60 border border-outline-variant/30 px-8 py-4 rounded-lg font-headline font-extrabold text-on-surface-variant/50 uppercase tracking-widest inline-flex items-center min-h-11 cursor-default select-none gap-2"
            >
              <span class="material-symbols-outlined text-lg">hourglass_top</span>
              {t('hero.cta.download')}
            </span>
            <button
              type="button"
              onClick={() => scrollToSection('#pricing')}
              class="border border-outline-variant/30 hover:border-primary-container/50 px-8 py-4 rounded-lg font-headline font-extrabold text-secondary uppercase tracking-widest motion-safe:transition-all inline-flex items-center min-h-11 bg-transparent cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
            >
              {t('hero.cta.pricing')}
            </button>
          </div>
        </div>

        {/* Glass panel mockups */}
        <div class="relative hidden lg:block">
          {/* Ambient gold glow */}
          <div class="absolute -inset-10 bg-primary-container/10 blur-[100px] rounded-full" />

          <div class="relative flex gap-4 md:gap-8 items-end">
            {/* Left panel (small, rotated) */}
            <div class="w-2/5 aspect-[3/4] glass-panel rounded-xl border border-outline-variant/20 p-4 -rotate-3 shadow-2xl">
              <div class="h-full w-full rounded-lg overflow-hidden relative">
                <img
                  class="w-full h-full object-cover grayscale brightness-50 contrast-125"
                  alt="Gaming interface mockup with champion data visualization"
                  src="/images/hero-panel-small.webp"
                  width={300}
                  height={400}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent flex flex-col justify-end p-4">
                  <div class="h-2 w-12 bg-primary-container rounded mb-2" />
                  <div class="h-4 w-24 bg-on-surface/20 rounded" />
                </div>
              </div>
            </div>

            {/* Right panel (large, rotated) */}
            <div class="w-3/5 aspect-[16/10] glass-panel rounded-xl border border-primary-container/30 p-4 rotate-1 shadow-[0_0_40px_rgba(240,191,92,0.06)]">
              <div class="h-full w-full rounded-lg overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  alt="Esports dashboard with real-time game state analysis"
                  src="/images/hero-panel-large.webp"
                  width={600}
                  height={375}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
