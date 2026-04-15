import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMeta } from '../utils/seo';

export default function PrivacyPage() {
  usePageMeta('privacy', '/privacy');
  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header class="mb-20 max-w-3xl">
          <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
            Legal
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
            Privacy <span class="text-primary">Policy</span>
          </h1>
          <p class="text-on-surface-variant text-lg leading-relaxed">
            Your privacy matters. This policy explains what data LoL Sensei collects,
            how we use it, and your rights regarding your personal information.
          </p>
          <p class="text-on-surface-variant/60 text-sm mt-4">
            Last updated: April 2026
          </p>
        </header>

        {/* Policy Content */}
        <div class="max-w-3xl space-y-0">

          {/* Section: Introduction */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Introduction
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
              LoL Sensei is operated by Fabrizio Di Pietro ("we", "us", "our"). This Privacy Policy
              describes how we collect, use, and protect your personal information when you use the
              LoL Sensei desktop application and related services.
            </p>
            <p class="text-on-surface-variant leading-relaxed">
              By using LoL Sensei, you agree to the collection and use of information in accordance
              with this policy. If you have questions, contact us at{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>.
            </p>
          </section>

          {/* Section: Data We Collect */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Data We Collect
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              We collect the following categories of information to provide and improve our service:
            </p>

            <div class="space-y-6">
              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  Account Information
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Google account details (email address and display name) used for authentication
                  and account creation.
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  League of Legends Data
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Summoner name, region, ranked statistics, and match history retrieved through
                  the Riot Games API to power game analysis features.
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  Gameplay Session Data
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Champion selections, item builds, and game outcomes collected during active
                  gameplay sessions for AI-powered analysis and coaching recommendations.
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  Subscription &amp; Payment Data
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Payment transactions are processed by Stripe. We receive subscription status and
                  transaction identifiers but <span class="text-secondary font-medium">never store
                  credit card numbers</span> on our servers.
                </p>
              </div>

              <div class="bg-surface-container-high p-6 rounded-xl">
                <h3 class="text-primary text-xs uppercase tracking-widest mb-2 font-bold">
                  Usage Analytics
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Feature usage patterns and error logs collected to diagnose issues and improve
                  service reliability.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How We Use Your Data */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              How We Use Your Data
            </h2>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span
                  class="material-symbols-outlined text-primary mt-0.5 text-lg"
                  style={{ "font-variation-settings": "'FILL' 1" }}
                >
                  psychology
                </span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">AI analysis and recommendations</span>{' '}
                  &mdash; Providing real-time and post-game coaching powered by your gameplay data.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="material-symbols-outlined text-primary mt-0.5 text-lg"
                  style={{ "font-variation-settings": "'FILL' 1" }}
                >
                  tune
                </span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Personalized coaching</span>{' '}
                  &mdash; Tailoring recommendations based on your player history, champion pool, and rank.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="material-symbols-outlined text-primary mt-0.5 text-lg"
                  style={{ "font-variation-settings": "'FILL' 1" }}
                >
                  credit_card
                </span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Payment processing</span>{' '}
                  &mdash; Managing subscriptions and transactions through Stripe.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="material-symbols-outlined text-primary mt-0.5 text-lg"
                  style={{ "font-variation-settings": "'FILL' 1" }}
                >
                  trending_up
                </span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Service improvement</span>{' '}
                  &mdash; Enhancing service quality, fixing bugs, and improving our AI models.
                </p>
              </li>
            </ul>
          </section>

          {/* Section: Third-Party Services */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Third-Party Services
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              LoL Sensei integrates with the following third-party services, each governed by their
              own privacy policies:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">Riot Games API</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Game data retrieval, subject to the Riot Games API Terms of Service.
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">Google OAuth</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Secure authentication, subject to Google's Privacy Policy.
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">Stripe</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Payment processing, subject to the Stripe Privacy Policy.
                </p>
              </div>
              <div class="bg-surface-container-high p-5 rounded-xl">
                <h3 class="text-on-surface font-bold font-headline text-sm mb-1">Cloud Infrastructure</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  Server-side AI processing and data storage on secure cloud infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Data Retention */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Data Retention
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              Match history and gameplay session data are retained for the duration of your account.
              You may request complete deletion of your data at any time by contacting us at{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>.
              Upon receiving a deletion request, we will remove all personally identifiable data
              within 30 days.
            </p>
          </section>

          {/* Section: Your Rights (GDPR) */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Your Rights
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">
              Under the General Data Protection Regulation (GDPR) and applicable data protection
              laws, you have the following rights:
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-0.5 text-lg">visibility</span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Right to access</span>{' '}
                  &mdash; Request a copy of the personal data we hold about you.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-0.5 text-lg">edit</span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Right to rectification</span>{' '}
                  &mdash; Request correction of inaccurate or incomplete personal data.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-0.5 text-lg">delete</span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Right to erasure</span>{' '}
                  &mdash; Request deletion of your account and all associated personal data.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-0.5 text-lg">download</span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Right to data portability</span>{' '}
                  &mdash; Receive your data in a structured, machine-readable format.
                </p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-0.5 text-lg">block</span>
                <p class="text-on-surface-variant leading-relaxed">
                  <span class="text-on-surface font-medium">Right to object</span>{' '}
                  &mdash; Object to the processing of your personal data for specific purposes.
                </p>
              </li>
            </ul>
            <p class="text-on-surface-variant leading-relaxed mt-6">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@lolsensei.com" class="text-primary hover:underline">
                privacy@lolsensei.com
              </a>.
              We will respond to your request within 30 days.
            </p>
          </section>

          {/* Section: Security */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Security
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              We take the security of your data seriously. All data is transmitted over HTTPS with
              TLS encryption. API keys and sensitive credentials are stored server-side only and are
              never exposed to client applications. We implement industry-standard security
              practices to protect your information from unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          {/* Section: Riot Games Disclaimer */}
          <section class="pb-10 mb-10 border-b border-outline-variant/10">
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Riot Games Disclaimer
            </h2>
            <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5">
              <p class="text-on-surface-variant leading-relaxed text-sm">
                LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of
                Riot Games or anyone officially involved in producing or managing Riot Games
                properties. Riot Games, and all associated properties are trademarks or registered
                trademarks of Riot Games, Inc. Game data accessed through the Riot Games API is
                subject to the Riot Games Developer API Terms of Service.
              </p>
            </div>
          </section>

          {/* Section: Changes to This Policy */}
          <section>
            <h2 class="text-2xl md:text-3xl font-extrabold font-headline text-on-surface mb-4">
              Changes to This Policy
            </h2>
            <p class="text-on-surface-variant leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for legal, operational, or regulatory reasons. When we make material
              changes, we will notify users through the application or via email. We encourage you
              to review this page periodically for the latest information.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
