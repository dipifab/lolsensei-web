import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturesBento from '../components/FeaturesBento';
import ComparisonGrid from '../components/ComparisonGrid';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import TrustBadges from '../components/TrustBadges';
import FAQ from '../components/FAQ';
import Changelog from '../components/Changelog';
import Footer from '../components/Footer';
import { FAQPageJsonLd } from '../components/JsonLd';
import { FAQ_ITEMS } from '../data/faq';
import { useI18n } from '../i18n';

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <a
        href="#hero"
        class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary-container focus:text-on-primary-fixed focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        {t('home.skipToContent')}
      </a>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturesBento />
        <ComparisonGrid />
        <Pricing />
        <Download />
        <TrustBadges />
        <FAQ />
        <Changelog />
      </main>
      <FAQPageJsonLd items={FAQ_ITEMS} t={t} />
      <Footer />
    </>
  );
}
