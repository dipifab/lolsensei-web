import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useI18n } from '../i18n';

export default function CheckoutSuccessPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <span
          class="material-symbols-outlined text-6xl text-tertiary mb-6"
          style={{ "font-variation-settings": "'FILL' 1" }}
        >
          check_circle
        </span>
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
