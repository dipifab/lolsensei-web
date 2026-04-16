import { createSignal, For, Show } from 'solid-js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '../components/JsonLd';
import { useI18n } from '../i18n';
import { usePageMeta } from '../utils/seo';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../data/faq';
import type { FAQCategoryId } from '../data/faq';
import Icon from '../components/Icon';

export default function FAQPage() {
  const { t, locale } = useI18n();
  usePageMeta('faq', '/faq');
  const [openIndex, setOpenIndex] = createSignal<number | null>(0);
  const [activeCategory, setActiveCategory] = createSignal<FAQCategoryId | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex() === i ? null : i);
  const isOpen = (i: number) => openIndex() === i;

  const filteredFaqs = () => {
    const cat = activeCategory();
    if (!cat) return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === cat);
  };

  const handleCategoryClick = (categoryId: FAQCategoryId) => {
    if (activeCategory() === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
    setOpenIndex(0);
  };

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        lang={locale()}
        items={[
          { name: t('breadcrumbs.home'), path: '/' },
          { name: t('nav.faq'), path: '/faq' },
        ]}
      />
      <FAQPageJsonLd
        items={FAQ_ITEMS.map((item) => ({
          question: t(item.questionKey),
          answer: t(item.answerKey),
        }))}
      />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
              {t('faq.hero.label')}
            </span>
            <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
              {t('faq.hero.title')}
            </h1>
            <p class="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              {t('faq.hero.subtitle')}
            </p>
          </div>
          <div class="relative w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-outline-variant/15 bg-surface-container-low">
            <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div class="absolute bottom-6 left-6 right-6">
              <div class="flex items-center gap-3 mb-2">
                <Icon name="verified_user_filled" class="w-6 h-6 text-primary" />
                <span class="text-sm font-bold font-headline text-primary">{t('trust.riotCompliant')}</span>
              </div>
              <p class="text-xs text-on-surface-variant uppercase tracking-widest">
                {t('faq.hero.badge')}
              </p>
            </div>
          </div>
        </header>

        {/* FAQ Content Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Category Sidebar */}
          <aside class="lg:col-span-3">
            <div class="sticky top-28 space-y-2">
              <For each={FAQ_CATEGORIES}>
                {(category) => (
                  <button
                    class={
                      activeCategory() === category.id
                        ? 'w-full text-left px-4 py-3 rounded-lg bg-surface-container-high text-primary font-bold transition-all flex items-center gap-3'
                        : 'w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center gap-3'
                    }
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <Icon name={category.icon} class="w-3.5 h-3.5" />
                    {t(category.labelKey)}
                  </button>
                )}
              </For>
            </div>
          </aside>

          {/* Accordion Section */}
          <section class="lg:col-span-9 space-y-6">
            <For each={filteredFaqs()}>
              {(faq, index) => (
                <div class="border-b border-outline-variant/10">
                  <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(index())}>
                    <div class="flex items-center gap-6">
                      <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(index()) ? 'text-primary' : 'text-outline-variant'}`}>
                        {String(index() + 1).padStart(2, '0')}
                      </span>
                      <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(index()) ? 'text-primary' : ''}`}>
                        {t(faq.questionKey)}
                      </h3>
                    </div>
                    <Icon
                      name="expand_more"
                      class={`w-6 h-6 transition-transform duration-300 ${isOpen(index()) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}
                    />
                  </button>
                  <Show when={isOpen(index())}>
                    <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                      <p>{t(faq.answerKey)}</p>
                    </div>
                  </Show>
                </div>
              )}
            </For>
          </section>
        </div>

        {/* Still have questions CTA */}
        <section class="mt-32 p-12 rounded-2xl glass-panel relative overflow-hidden border border-outline-variant/10">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 class="text-3xl font-extrabold font-headline mb-2">{t('faq.contact.title')}</h2>
              <p class="text-on-surface-variant">{t('faq.contact.description')}</p>
            </div>
            <div class="flex gap-4">
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 border border-outline-variant/30 rounded-lg hover:bg-surface-container-highest transition-all font-bold"
              >
                {t('faq.contact.cta.community')}
                <span class="sr-only"> {t('common.opensNewTab')}</span>
              </a>
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 gold-gradient text-on-primary-fixed rounded-lg font-bold shadow-lg"
              >
                {t('faq.contact.cta.github')}
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
