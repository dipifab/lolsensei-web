import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageMeta } from '../utils/seo';

export default function TermsPage() {
  usePageMeta('terms', '/terms');
  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header class="mb-16 max-w-3xl">
          <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
            Legal
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
            Terms of <span class="text-primary">Service</span>
          </h1>
          <p class="text-on-surface-variant text-lg leading-relaxed">
            Last updated: April 2026
          </p>
        </header>

        {/* Terms Content */}
        <div class="max-w-4xl space-y-0">
          {/* Section 1 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">01</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Acceptance of Terms</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                By downloading, installing, accessing, or using LoL Sensei (the "Service"), you agree to be bound
                by these Terms of Service. If you do not agree to these terms, you must not use the Service.
              </p>
              <p>
                These terms constitute a legally binding agreement between you and Fabrizio Di Pietro
                ("we", "us", "our"), the operator of LoL Sensei.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">02</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Description of Service</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                LoL Sensei is an AI-powered overlay tool that provides real-time game analysis, champion
                recommendations, and item build suggestions for League of Legends. The Service operates as a
                companion application that runs alongside the League of Legends client.
              </p>
              <p>
                The Service requires a valid League of Legends account and an active internet connection.
                Certain features may require a paid subscription.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">03</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Eligibility</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                To use the Service, you must be at least 13 years old or meet the minimum age required
                by the laws of your jurisdiction, whichever is higher. If you are under the age of 18,
                you represent that your parent or legal guardian has reviewed and agreed to these terms on
                your behalf.
              </p>
              <p>
                You must have a valid Riot Games account in good standing. Users whose Riot Games accounts
                have been suspended or permanently banned are not eligible to use the Service.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">04</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Account and Authentication</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                LoL Sensei uses Google OAuth for user authentication. By creating an account, you agree to
                provide accurate and complete information. You are solely responsible for maintaining the
                confidentiality and security of your account credentials.
              </p>
              <p>
                Each user is permitted one account only. Creating multiple accounts to circumvent usage
                limits or for any other purpose is strictly prohibited and may result in the termination
                of all associated accounts.
              </p>
              <p>
                You must notify us immediately at{' '}
                <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                  support@lolsensei.com
                </a>{' '}
                if you become aware of any unauthorized use of your account.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">05</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Subscription and Payments</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                LoL Sensei offers a free tier with full access to non-AI features such as live game
                detection, player statistics, and team composition tracking. For users who want
                AI-powered coaching (champion select advice, item build recommendations, and game start
                analysis), a Pro subscription is available at the current price listed on our website.
              </p>
              <p>
                Pro subscriptions are billed monthly through Stripe, our third-party payment processor.
                By subscribing, you authorize recurring monthly charges to your chosen payment method
                until you cancel.
              </p>
              <p>
                You may cancel your subscription at any time through the Stripe billing portal accessible
                from the application settings. Cancellation takes effect at the end of the current billing
                period, and you will retain access to Pro features until that date.
              </p>
              <p>
                Refund policy: we do not provide refunds for partial billing periods. If you cancel
                mid-cycle, your subscription remains active until the end of the current period.
              </p>
              <p>
                We reserve the right to change subscription pricing at any time. Existing subscribers
                will receive at least 30 days' notice before any price change takes effect.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">06</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Acceptable Use</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>When using the Service, you agree NOT to:</p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>Use the Service in any manner that violates the Riot Games Terms of Service or any other applicable terms or policies.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>Attempt to reverse-engineer, decompile, disassemble, or otherwise derive the source code of the application or its AI models.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>Share, sell, transfer, or otherwise redistribute your LoL Sensei account to any third party.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>Use bots, scrapers, or any automated tools to interact with the Service or extract data from it.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-error text-sm mt-1">block</span>
                  <span>Redistribute, resell, or commercially exploit the analysis results generated by the Service.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">07</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Intellectual Property</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                The LoL Sensei application, including its design, AI models, algorithms, code, graphics,
                and user interface, is the proprietary intellectual property of Fabrizio Di Pietro. All
                rights are reserved. No part of the Service may be reproduced, distributed, or transmitted
                without prior written permission.
              </p>
              <p>
                League of Legends, Riot Games, and all associated properties, logos, and trademarks are
                the property of Riot Games, Inc. LoL Sensei is not affiliated with, endorsed by, or
                sponsored by Riot Games, Inc.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">08</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Riot Games Compliance</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                LoL Sensei is designed and operated in compliance with the Riot Games Third-Party Developer
                API Terms of Use. Specifically:
              </p>
              <ul class="list-none space-y-3">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>We do not inject code into the League of Legends game client or modify any game files.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>We do not automate any gameplay actions or provide any macro or scripting functionality.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>We do not access or track information prohibited by Riot Games policies.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-tertiary text-sm mt-1">verified</span>
                  <span>All game data used by the Service is obtained through publicly available APIs and the local League Client Update (LCU) interface.</span>
                </li>
              </ul>
              <div class="bg-surface-container-high p-6 rounded-xl border border-outline-variant/10 mt-4">
                <p class="text-sm text-on-surface-variant italic">
                  LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot
                  Games or anyone officially involved in producing or managing Riot Games properties.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">09</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Disclaimers</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                The Service is provided on an "as is" and "as available" basis, without warranties of any
                kind, whether express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We do not guarantee that the use of LoL Sensei will result in improved game performance,
                higher rankings, or any specific in-game outcomes. The recommendations provided by the AI
                are suggestions based on statistical analysis and should not be treated as guarantees.
              </p>
              <p>
                We are not responsible for any actions taken by Riot Games or any other third party
                regarding your accounts, although LoL Sensei is designed to be fully compliant with all
                applicable third-party terms of service.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">10</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Limitation of Liability</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                To the maximum extent permitted by applicable law, Fabrizio Di Pietro and LoL Sensei shall
                not be liable for any indirect, incidental, special, consequential, or punitive damages,
                or any loss of profits or revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses resulting from your use of the Service.
              </p>
              <p>
                In no event shall our aggregate liability for all claims related to the Service exceed the
                total amount you have paid to us for the Service during the twelve (12) months immediately
                preceding the event giving rise to the claim.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">11</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Termination</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                We reserve the right to suspend or terminate your account and access to the Service, without
                prior notice, if you violate any provision of these Terms of Service or engage in conduct
                that we determine, in our sole discretion, to be harmful to the Service, other users, or
                third parties.
              </p>
              <p>
                You may delete your account at any time by contacting us at{' '}
                <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                  support@lolsensei.com
                </a>
                . Upon account deletion, your data will be removed in accordance with our Privacy Policy.
                Active subscriptions should be cancelled through the Stripe billing portal before requesting
                account deletion.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section class="py-10 border-b border-outline-variant/10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">12</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Changes to Terms</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                We may modify these Terms of Service at any time. If we make material changes, we will
                provide at least 30 days' notice through email or an in-app notification before the
                changes take effect.
              </p>
              <p>
                Your continued use of the Service after the effective date of any modifications constitutes
                your acceptance of the updated terms. If you do not agree with the modified terms, you
                must discontinue use of the Service.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section class="py-10">
            <div class="flex items-baseline gap-4 mb-4">
              <span class="font-headline text-2xl font-extrabold text-primary">13</span>
              <h2 class="text-2xl md:text-3xl font-bold font-headline text-on-surface">Governing Law</h2>
            </div>
            <div class="pl-12 text-on-surface-variant leading-relaxed space-y-4">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws
                of the Republic of Italy, without regard to its conflict of law provisions. Any disputes
                arising from or relating to these terms or your use of the Service shall be subject to
                the exclusive jurisdiction of the courts of Italy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section class="mt-12 p-8 rounded-2xl glass-panel border border-outline-variant/10">
            <h2 class="text-xl font-bold font-headline text-on-surface mb-4">Contact Us</h2>
            <p class="text-on-surface-variant leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:support@lolsensei.com" class="text-primary hover:underline">
                support@lolsensei.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
