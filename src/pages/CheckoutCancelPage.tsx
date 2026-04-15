import { A } from '@solidjs/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useI18n } from '../i18n';

export default function CheckoutCancelPage() {
  const { locale } = useI18n();

  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <span
          class="material-symbols-outlined text-6xl text-on-surface-variant mb-6"
          style={{ "font-variation-settings": "'FILL' 1" }}
        >
          cancel
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-6">
          Checkout <span class="text-primary">Cancelled</span>
        </h1>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10">
          Your payment was not completed. No charges were made.
          You can try again anytime from the app or visit the pricing page below.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <A
            href={`/${locale()}/pricing`}
            class="inline-block gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(240,191,92,0.3)] transition-all"
          >
            View Pricing
          </A>
          <A
            href={`/${locale()}`}
            class="inline-block px-10 py-4 rounded-lg font-headline font-extrabold uppercase border border-outline-variant/30 hover:bg-surface-variant/40 transition-all"
          >
            Back to Home
          </A>
        </div>
      </main>
      <Footer />
    </>
  );
}
