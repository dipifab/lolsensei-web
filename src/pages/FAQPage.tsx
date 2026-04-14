import { createSignal, Show } from 'solid-js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex() === i ? null : i);
  const isOpen = (i: number) => openIndex() === i;

  return (
    <>
      <Navbar />
      <main class="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="tracking-wider uppercase text-xs text-primary-container font-medium mb-4 block">
              Knowledge Base
            </span>
            <h1 class="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-none mb-6">
              Tactical <span class="text-primary">Intelligence</span> Support
            </h1>
            <p class="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              Precision answers for elite competitors. Everything you need to know about
              the LoL Sensei ecosystem.
            </p>
          </div>
          <div class="relative w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-outline-variant/15">
            <img
              alt="Gaming setup"
              class="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              src="/images/faq-hero.webp"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div class="absolute bottom-6 left-6 right-6">
              <div class="flex items-center gap-3 mb-2">
                <span
                  class="material-symbols-outlined text-primary"
                  style={{ "font-variation-settings": "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span class="text-sm font-bold font-headline text-primary">RIOT COMPLIANT</span>
              </div>
              <p class="text-xs text-on-surface-variant uppercase tracking-widest">
                Verified Tactical Advantage
              </p>
            </div>
          </div>
        </header>

        {/* FAQ Content Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Category Sidebar */}
          <aside class="lg:col-span-3">
            <div class="sticky top-28 space-y-2">
              <button class="w-full text-left px-4 py-3 rounded-lg bg-surface-container-high text-primary font-bold transition-all flex items-center gap-3">
                <span class="material-symbols-outlined text-sm">security</span>
                Safety &amp; Compliance
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center gap-3">
                <span class="material-symbols-outlined text-sm">psychology</span>
                AI Technology
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center gap-3">
                <span class="material-symbols-outlined text-sm">speed</span>
                Performance
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all flex items-center gap-3">
                <span class="material-symbols-outlined text-sm">account_balance_wallet</span>
                Credits &amp; Billing
              </button>
            </div>
          </aside>

          {/* Accordion Section */}
          <section class="lg:col-span-9 space-y-6">
            {/* FAQ 01 */}
            <div class="border-b border-outline-variant/10">
              <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(0)}>
                <div class="flex items-center gap-6">
                  <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(0) ? 'text-primary' : 'text-outline-variant'}`}>01</span>
                  <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(0) ? 'text-primary' : ''}`}>Is LoL Sensei Riot Games compliant?</h3>
                </div>
                <span class={`material-symbols-outlined transition-transform duration-300 ${isOpen(0) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}>expand_more</span>
              </button>
              <Show when={isOpen(0)}>
                <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                  <p class="mb-4">Absolutely. LoL Sensei operates as a post-game analysis and non-intrusive live-overlay tool that strictly adheres to the <span class="text-secondary">Riot Games Developer API</span> Terms of Service. We do not inject code into the game client or automate gameplay actions.</p>
                  <p>Our AI analyzes data already available to players in the client, ensuring you maintain a fair competitive environment while gaining superior strategic insight.</p>
                </div>
              </Show>
            </div>

            {/* FAQ 02 */}
            <div class="border-b border-outline-variant/10">
              <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(1)}>
                <div class="flex items-center gap-6">
                  <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(1) ? 'text-primary' : 'text-outline-variant'}`}>02</span>
                  <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(1) ? 'text-primary' : ''}`}>Can using the software lead to a ban?</h3>
                </div>
                <span class={`material-symbols-outlined transition-transform duration-300 ${isOpen(1) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}>expand_more</span>
              </button>
              <Show when={isOpen(1)}>
                <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                  <p class="mb-4">No. Because we don't interact with the game's executable (no DLL injection, no memory manipulation), LoL Sensei is designed to be <span class="text-tertiary">fully compatible</span> with Vanguard's anti-cheat system.</p>
                  <div class="bg-surface-container-lowest p-6 rounded-xl hex-bg border border-outline-variant/5">
                    <p class="text-sm font-medium italic">"We prioritize account safety above all features. Our tool is built with the same architecture as major verified league apps." — Lead Architect</p>
                  </div>
                </div>
              </Show>
            </div>

            {/* FAQ 03 */}
            <div class="border-b border-outline-variant/10">
              <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(2)}>
                <div class="flex items-center gap-6">
                  <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(2) ? 'text-primary' : 'text-outline-variant'}`}>03</span>
                  <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(2) ? 'text-primary' : ''}`}>Will it impact my FPS or system performance?</h3>
                </div>
                <span class={`material-symbols-outlined transition-transform duration-300 ${isOpen(2) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}>expand_more</span>
              </button>
              <Show when={isOpen(2)}>
                <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                  <p>LoL Sensei is engineered with a <span class="font-bold">zero-latency engine</span>. Most of the AI heavy-lifting is performed on our remote servers. The local client uses less than 1% of CPU cycles and roughly 150MB of RAM, ensuring your frame rates remain stable even during chaotic teamfights.</p>
                </div>
              </Show>
            </div>

            {/* FAQ 04 */}
            <div class="border-b border-outline-variant/10">
              <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(3)}>
                <div class="flex items-center gap-6">
                  <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(3) ? 'text-primary' : 'text-outline-variant'}`}>04</span>
                  <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(3) ? 'text-primary' : ''}`}>What AI models are used for coaching?</h3>
                </div>
                <span class={`material-symbols-outlined transition-transform duration-300 ${isOpen(3) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}>expand_more</span>
              </button>
              <Show when={isOpen(3)}>
                <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                  <p class="mb-4">We leverage advanced AI models with high-reasoning capabilities and low-latency processing. The system combines massive data-processing with specialized game-state decision trees for real-time analysis and natural language post-game debriefing.</p>
                  <div class="grid grid-cols-2 gap-4 mt-6">
                    <div class="bg-surface-container-high p-4 rounded-lg">
                      <h4 class="text-primary text-xs uppercase tracking-widest mb-1 font-bold">Analysis Engine</h4>
                      <p class="text-sm">Real-time pathing &amp; macro predictive modeling.</p>
                    </div>
                    <div class="bg-surface-container-high p-4 rounded-lg">
                      <h4 class="text-primary text-xs uppercase tracking-widest mb-1 font-bold">Feedback Engine</h4>
                      <p class="text-sm">Natural language post-game debriefing.</p>
                    </div>
                  </div>
                </div>
              </Show>
            </div>

            {/* FAQ 05 */}
            <div class="border-b border-outline-variant/10">
              <button class="w-full py-6 flex items-center justify-between cursor-pointer text-left" onClick={() => toggle(4)}>
                <div class="flex items-center gap-6">
                  <span class={`font-headline text-2xl font-extrabold transition-colors ${isOpen(4) ? 'text-primary' : 'text-outline-variant'}`}>05</span>
                  <h3 class={`text-xl md:text-2xl font-bold font-headline transition-colors ${isOpen(4) ? 'text-primary' : ''}`}>How do credit limits work for Pro members?</h3>
                </div>
                <span class={`material-symbols-outlined transition-transform duration-300 ${isOpen(4) ? 'rotate-180 text-primary' : 'text-outline-variant'}`}>expand_more</span>
              </button>
              <Show when={isOpen(4)}>
                <div class="mt-2 pl-16 pr-8 pb-6 text-on-surface-variant leading-relaxed">
                  <p>Pro members receive a daily allocation of <span class="text-secondary">AI credits</span>. Each deep-dive AI review consumes 1 credit. Live basic overlays and match-up scouting are always available and do not consume credits. Free users get 1 credit per day, Pro users get 15 credits per day.</p>
                </div>
              </Show>
            </div>
          </section>
        </div>

        {/* Still have questions CTA */}
        <section class="mt-32 p-12 rounded-2xl glass-panel relative overflow-hidden border border-outline-variant/10">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 class="text-3xl font-extrabold font-headline mb-2">Still have inquiries?</h2>
              <p class="text-on-surface-variant">Our tactical support team is available 24/7 for Pro members.</p>
            </div>
            <div class="flex gap-4">
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 border border-outline-variant/30 rounded-lg hover:bg-surface-container-highest transition-all font-bold"
              >
                Contact Support
                <span class="sr-only"> (opens in new tab)</span>
              </a>
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 gold-gradient text-on-primary-fixed rounded-lg font-bold shadow-lg"
              >
                Join GitHub
                <span class="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
