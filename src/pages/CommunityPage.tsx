import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';
import Icon from '../components/Icon';

export default function CommunityPage() {
  const { t, locale } = useI18n();
  usePageMeta('community', '/community');

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.community'), path: '/community' },
        ]}
      />
      <main class="pt-24">
        {/* Hero Section */}
        <section class="relative min-h-[616px] flex items-center justify-center overflow-hidden px-8">
          <div class="absolute inset-0 z-0">
            <div class="w-full h-full bg-gradient-to-br from-primary-container/10 via-transparent to-secondary/10 opacity-40" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
          </div>
          <div class="relative z-10 max-w-4xl text-center">
            <span class="inline-block px-4 py-1 rounded-full bg-surface-container-highest text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-outline-variant/10">
              {t('community.hero.label')}
            </span>
            <h1 class="text-6xl md:text-8xl font-extrabold font-headline text-on-surface tracking-tighter mb-8 leading-[0.9]">
              {t('community.hero.titleMain')} <span class="text-transparent bg-clip-text gold-gradient">{t('community.hero.titleAccent')}</span>
            </h1>
            <p class="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              {t('community.hero.subtitle')}
            </p>
            <a
              href="https://github.com/dipifab/lolai"
              target="_blank"
              rel="noopener noreferrer"
              class="gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold text-lg inline-flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Icon name="code" class="w-6 h-6" />
              {t('community.hero.cta.join')}
              <span class="sr-only"> {t('common.opensNewTab')}</span>
            </a>
          </div>
        </section>

        {/* Community Hub + Stats */}
        <section class="max-w-screen-2xl mx-auto px-8 py-24">
          <div class="bg-surface-container-low rounded-xl p-8 hex-bg border border-outline-variant/5">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-xl bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                <Icon name="forum_filled" class="w-10 h-10" />
              </div>
              <div>
                <h2 class="text-2xl font-extrabold font-headline text-on-surface tracking-tight">{t('community.hq.title')}</h2>
                <p class="text-on-surface-variant text-sm font-medium">{t('community.hq.subtitle')}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="bg-surface-container-lowest p-4 rounded-lg">
                <span class="block text-primary font-extrabold text-3xl font-headline">{t('community.stats.beta')}</span>
                <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t('community.stats.communityStatus')}</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded-lg">
                <span class="block text-tertiary font-extrabold text-3xl font-headline">{t('community.stats.open')}</span>
                <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t('community.stats.earlyAccess')}</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded-lg">
                <span class="block text-secondary font-extrabold text-3xl font-headline">GitHub</span>
                <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t('community.stats.platform')}</span>
              </div>
            </div>
            <a
              href="https://github.com/dipifab/lolai"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary font-headline font-bold text-sm hover:underline underline-offset-4 inline-flex items-center gap-1"
            >
              {t('community.hq.connectGithub')} →
              <span class="sr-only"> {t('common.opensNewTab')}</span>
            </a>
          </div>
        </section>

        {/* Share Your Ideas */}
        <section class="max-w-screen-2xl mx-auto px-8 pb-24">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">{t('community.ideas.title')}</h2>
            <p class="text-on-surface-variant text-lg max-w-2xl mx-auto">{t('community.ideas.subtitle')}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <a
              href="https://github.com/dipifab/lolai/issues/new?template=feature_request.md"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-panel p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group"
            >
              <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="lightbulb" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-headline font-bold mb-3">{t('community.ideas.feature.title')}</h3>
              <p class="text-on-surface-variant/80 text-sm leading-relaxed">{t('community.ideas.feature.description')}</p>
              <span class="sr-only"> {t('common.opensNewTab')}</span>
            </a>
            <a
              href="https://github.com/dipifab/lolai/issues/new?template=bug_report.md"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-panel p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group"
            >
              <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="bug_report" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-headline font-bold mb-3">{t('community.ideas.bug.title')}</h3>
              <p class="text-on-surface-variant/80 text-sm leading-relaxed">{t('community.ideas.bug.description')}</p>
              <span class="sr-only"> {t('common.opensNewTab')}</span>
            </a>
            <a
              href="https://github.com/dipifab/lolai/discussions"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-panel p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group"
            >
              <div class="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="forum_filled" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-headline font-bold mb-3">{t('community.ideas.discuss.title')}</h3>
              <p class="text-on-surface-variant/80 text-sm leading-relaxed">{t('community.ideas.discuss.description')}</p>
              <span class="sr-only"> {t('common.opensNewTab')}</span>
            </a>
          </div>
        </section>

        {/* Roadmap */}
        <section class="max-w-screen-2xl mx-auto px-8 pb-24">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">{t('community.roadmap.title')}</h2>
            <p class="text-on-surface-variant text-lg max-w-2xl mx-auto">{t('community.roadmap.subtitle')}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full uppercase tracking-wider">
                  {t('community.roadmap.status.planned')}
                </span>
              </div>
              <h3 class="text-lg font-headline font-bold mb-2">{t('community.roadmap.item1.title')}</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">{t('community.roadmap.item1.description')}</p>
            </div>
            <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full uppercase tracking-wider">
                  {t('community.roadmap.status.planned')}
                </span>
              </div>
              <h3 class="text-lg font-headline font-bold mb-2">{t('community.roadmap.item2.title')}</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">{t('community.roadmap.item2.description')}</p>
            </div>
            <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full uppercase tracking-wider">
                  {t('community.roadmap.status.planned')}
                </span>
              </div>
              <h3 class="text-lg font-headline font-bold mb-2">{t('community.roadmap.item3.title')}</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">{t('community.roadmap.item3.description')}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="max-w-screen-2xl mx-auto px-8 pb-24">
          <div class="relative rounded-2xl overflow-hidden gold-gradient p-1">
            <div class="bg-surface-container-lowest rounded-2xl px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="max-w-xl text-center md:text-left">
                <h2 class="text-4xl font-extrabold font-headline text-on-surface mb-4">{t('community.cta.title')}</h2>
                <p class="text-on-surface-variant font-medium">{t('community.cta.description')}</p>
              </div>
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold text-lg inline-flex items-center gap-2 active:scale-95 transition-all shrink-0"
              >
                <Icon name="code" class="w-6 h-6" />
                {t('community.cta.github')}
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
