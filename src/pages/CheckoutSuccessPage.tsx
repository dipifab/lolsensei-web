import { A } from '@solidjs/router';
import { onMount, onCleanup } from 'solid-js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useI18n } from '../i18n';
import Icon from '../components/Icon';

export default function CheckoutSuccessPage() {
  const { t, locale } = useI18n();

  onMount(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    onCleanup(() => meta.remove());
  });

  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <Icon name="check_circle_filled" class="w-16 h-16 text-tertiary mb-6 mx-auto" />
        <h1 class="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-6">
          {t('checkout.success.title')} <span class="text-primary">{t('checkout.success.titleHighlight')}</span>
        </h1>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10">
          {t('checkout.success.description')}
        </p>
        <A
          href={`/${locale()}`}
          class="inline-block gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(240,191,92,0.3)] transition-all"
        >
          {t('checkout.success.backHome')}
        </A>
      </main>
      <Footer />
    </>
  );
}
