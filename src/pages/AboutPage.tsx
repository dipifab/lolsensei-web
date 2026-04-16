import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';
import Icon from '../components/Icon';

export default function AboutPage() {
  const { t, locale } = useI18n();
  usePageMeta('about', '/about');

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.about'), path: '/about' },
        ]}
      />
      <main class="pt-20">
        {/* Hero Section */}
        <section class="relative py-24 overflow-hidden">
          <div class="max-w-7xl mx-auto px-8 relative z-10">
            <div class="max-w-3xl">
              <span class="inline-block py-1 px-3 rounded-sm bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {t('about.hero.label')}
              </span>
              <h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
                {t('about.hero.titleMain')} <span class="text-primary-container">{t('about.hero.titleAccent')}</span>
              </h1>
              <p class="text-xl text-on-surface-variant/80 max-w-xl leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </div>
          </div>
          <div class="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none bg-gradient-to-l from-primary-container/20 to-transparent" />
        </section>

        {/* Story Section */}
        <section class="py-24 bg-surface-container-low">
          <div class="max-w-4xl mx-auto px-8">
            <h2 class="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-10">
              {t('about.story.title')}
            </h2>
            <div class="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section class="py-24">
          <div class="max-w-4xl mx-auto px-8">
            <div class="glass-panel rounded-2xl p-10 md:p-16 border border-outline-variant/10 relative overflow-hidden">
              <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-6">
                  {t('about.mission.title')}
                </h2>
                <p class="text-on-surface-variant text-lg leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section class="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
          <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-center mb-16">
              {t('about.values.title')}
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="glass-panel p-8 rounded-2xl border border-outline-variant/10">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                  <Icon name="school" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-3">{t('about.values.learning.title')}</h3>
                <p class="text-on-surface-variant leading-relaxed">{t('about.values.learning.description')}</p>
              </div>
              <div class="glass-panel p-8 rounded-2xl border border-outline-variant/10">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                  <Icon name="visibility" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-3">{t('about.values.transparency.title')}</h3>
                <p class="text-on-surface-variant leading-relaxed">{t('about.values.transparency.description')}</p>
              </div>
              <div class="glass-panel p-8 rounded-2xl border border-outline-variant/10">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                  <Icon name="verified_user_filled" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-3">{t('about.values.fair.title')}</h3>
                <p class="text-on-surface-variant leading-relaxed">{t('about.values.fair.description')}</p>
              </div>
              <div class="glass-panel p-8 rounded-2xl border border-outline-variant/10">
                <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                  <Icon name="group_add" class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-xl font-headline font-bold mb-3">{t('about.values.community.title')}</h3>
                <p class="text-on-surface-variant leading-relaxed">{t('about.values.community.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section class="py-24">
          <div class="max-w-4xl mx-auto px-8 text-center">
            <h2 class="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">
              {t('about.contact.title')}
            </h2>
            <p class="text-on-surface-variant text-lg mb-10">
              {t('about.contact.description')}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@lolsensei.com"
                class="px-8 py-4 border border-outline-variant/30 rounded-lg hover:bg-surface-container-highest transition-all font-bold inline-flex items-center justify-center gap-2"
              >
                <Icon name="mail" class="w-5 h-5" />
                {t('about.contact.email')}
              </a>
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 gold-gradient text-on-primary-fixed rounded-lg font-bold shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Icon name="code" class="w-5 h-5" />
                {t('about.contact.github')}
                <span class="sr-only"> {t('common.opensNewTab')}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
