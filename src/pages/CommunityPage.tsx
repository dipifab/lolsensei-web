import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DOWNLOAD_INFO } from '../data/content';

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main class="pt-24">
        {/* Hero Section */}
        <section class="relative min-h-[716px] flex items-center justify-center overflow-hidden px-8">
          <div class="absolute inset-0 z-0">
            <img
              class="w-full h-full object-cover opacity-20 scale-105"
              alt="Esports arena"
              src="/images/community-hero.webp"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
          </div>
          <div class="relative z-10 max-w-4xl text-center">
            <span class="inline-block px-4 py-1 rounded-full bg-surface-container-highest text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-outline-variant/10">
              The Inner Circle
            </span>
            <h1 class="text-6xl md:text-8xl font-extrabold font-headline text-on-surface tracking-tighter mb-8 leading-[0.9]">
              ASCEND WITH THE <span class="text-transparent bg-clip-text gold-gradient">MASTERS.</span>
            </h1>
            <p class="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              LoL Sensei isn't just an app—it's an elite collective of tactical minds. Share strategies, review clips, and climb the ladder with the top 1% of players.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold text-lg inline-flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span class="material-symbols-outlined">group_add</span>
                JOIN THE COMMUNITY
                <span class="sr-only"> (opens in new tab)</span>
              </a>
              <a
                href="#clips"
                class="bg-surface-container-highest text-on-surface px-10 py-4 rounded-lg font-headline font-extrabold text-lg border border-outline-variant/20 hover:bg-surface-bright transition-all inline-flex items-center justify-center"
              >
                VIEW TOP PLAYS
              </a>
            </div>
          </div>
        </section>

        {/* Bento Content Section */}
        <section class="max-w-screen-2xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Discord HQ Card (7-col) */}
          <div class="md:col-span-7 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hex-bg border border-outline-variant/5">
            <div>
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 rounded-xl bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                  <span class="material-symbols-outlined text-4xl" style={{ "font-variation-settings": "'FILL' 1" }}>forum</span>
                </div>
                <div>
                  <h2 class="text-2xl font-extrabold font-headline text-on-surface tracking-tight">Community Headquarters</h2>
                  <p class="text-on-surface-variant text-sm font-medium">Real-time coaching and lobby finding</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-12">
                <div class="bg-surface-container-lowest p-4 rounded-lg">
                  <span class="block text-primary font-extrabold text-3xl font-headline">Beta</span>
                  <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Community Status</span>
                </div>
                <div class="bg-surface-container-lowest p-4 rounded-lg">
                  <span class="block text-tertiary font-extrabold text-3xl font-headline">Open</span>
                  <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Early Access</span>
                </div>
                <div class="bg-surface-container-lowest p-4 rounded-lg">
                  <span class="block text-secondary font-extrabold text-3xl font-headline">GitHub</span>
                  <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Platform</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between gap-4 p-4 rounded-lg bg-surface-container-highest/30">
              <div class="flex -space-x-3">
                <img class="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Community member" src="/images/community-guide1.webp" />
                <img class="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Community member" src="/images/community-guide2.webp" />
                <img class="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="Community member" src="/images/community-guide3.webp" />
                <div class="w-10 h-10 rounded-full border-2 border-surface bg-primary-container text-on-primary-fixed flex items-center justify-center text-xs font-extrabold">+</div>
              </div>
              <a
                href="https://github.com/dipifab/lolai"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary font-headline font-bold text-sm hover:underline underline-offset-4"
              >
                Connect on GitHub →
                <span class="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </div>

          {/* Hall of Fame (5-col) */}
          <div class="md:col-span-5 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
            <div class="flex justify-between items-end mb-8">
              <h2 class="text-2xl font-extrabold font-headline text-on-surface tracking-tight">Hall of Fame</h2>
              <span class="text-primary text-xs font-bold tracking-widest uppercase">Current Split</span>
            </div>
            <div class="space-y-4">
              {/* Rank 1 */}
              <div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-highest/50 border-l-4 border-primary">
                <span class="text-primary font-extrabold font-headline text-xl">01</span>
                <div class="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary" style={{ "font-variation-settings": "'FILL' 1" }}>workspace_premium</span>
                </div>
                <div class="flex-grow">
                  <div class="text-on-surface font-bold font-headline">Top contributor</div>
                  <div class="text-on-surface-variant text-xs font-medium">Beta tester</div>
                </div>
                <div class="text-tertiary text-xs font-bold">PRO</div>
              </div>
              {/* Rank 2 */}
              <div class="flex items-center gap-4 p-4 rounded-lg">
                <span class="text-on-surface-variant font-extrabold font-headline text-xl opacity-50">02</span>
                <div class="w-10 h-10 rounded bg-outline-variant/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-outline-variant">shield</span>
                </div>
                <div class="flex-grow">
                  <div class="text-on-surface font-bold font-headline">Community moderator</div>
                  <div class="text-on-surface-variant text-xs font-medium">Beta tester</div>
                </div>
                <div class="text-tertiary text-xs font-bold">PRO</div>
              </div>
              {/* Rank 3 */}
              <div class="flex items-center gap-4 p-4 rounded-lg">
                <span class="text-on-surface-variant font-extrabold font-headline text-xl opacity-50">03</span>
                <div class="w-10 h-10 rounded bg-outline-variant/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-outline-variant">shield</span>
                </div>
                <div class="flex-grow">
                  <div class="text-on-surface font-bold font-headline">Bug reporter</div>
                  <div class="text-on-surface-variant text-xs font-medium">Beta tester</div>
                </div>
                <div class="text-tertiary text-xs font-bold">FREE</div>
              </div>
            </div>
            <a
              href="https://github.com/dipifab/lolai"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full mt-8 py-3 rounded border border-outline-variant/20 text-on-surface-variant font-headline font-bold text-sm hover:text-primary hover:border-primary/40 transition-all text-center"
            >
              VIEW CONTRIBUTORS
              <span class="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          {/* Community Clips (12-col) */}
          <div class="md:col-span-12" id="clips">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-3xl font-extrabold font-headline text-on-surface tracking-tight">Community Masterclasses</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Clip 1 */}
              <div class="group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Pentakill teamfight" src="/images/community-featured.webp" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-all" />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary shadow-2xl">
                    <span class="material-symbols-outlined text-4xl" style={{ "font-variation-settings": "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2 py-0.5 bg-error text-[10px] font-extrabold rounded text-on-error uppercase">Pentakill</span>
                    <span class="text-[10px] text-on-surface/60 font-bold uppercase tracking-widest">Featured</span>
                  </div>
                  <h3 class="text-on-surface font-extrabold font-headline group-hover:text-primary transition-colors">The Perfect Insec Play</h3>
                </div>
              </div>
              {/* Clip 2 */}
              <div class="group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Outplay clip" src="/images/community-event.webp" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-all" />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary shadow-2xl">
                    <span class="material-symbols-outlined text-4xl" style={{ "font-variation-settings": "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2 py-0.5 bg-secondary text-[10px] font-extrabold rounded text-on-secondary uppercase">Outplay</span>
                    <span class="text-[10px] text-on-surface/60 font-bold uppercase tracking-widest">Community</span>
                  </div>
                  <h3 class="text-on-surface font-extrabold font-headline group-hover:text-primary transition-colors">1HP Survival via Sensei Prediction</h3>
                </div>
              </div>
              {/* Clip 3 */}
              <div class="group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Strategy guide" src="/images/community-guide1.webp" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-all" />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary shadow-2xl">
                    <span class="material-symbols-outlined text-4xl" style={{ "font-variation-settings": "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2 py-0.5 bg-tertiary text-[10px] font-extrabold rounded text-on-tertiary uppercase">Strategy</span>
                    <span class="text-[10px] text-on-surface/60 font-bold uppercase tracking-widest">Guide</span>
                  </div>
                  <h3 class="text-on-surface font-extrabold font-headline group-hover:text-primary transition-colors">Full Baron Steal Strategy</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section class="max-w-screen-2xl mx-auto px-8 pb-24">
          <div class="relative rounded-2xl overflow-hidden gold-gradient p-1">
            <div class="bg-surface-container-lowest rounded-2xl px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="max-w-xl text-center md:text-left">
                <h2 class="text-4xl font-extrabold font-headline text-on-surface mb-4">READY TO JOIN THE ELITE?</h2>
                <p class="text-on-surface-variant font-medium">
                  Download LoL Sensei and start mastering every game phase with AI-powered coaching.
                </p>
              </div>
              <div class="flex gap-4">
                <a
                  href={DOWNLOAD_INFO.url}
                  class="gold-gradient text-on-primary-fixed px-10 py-4 rounded-lg font-headline font-extrabold text-lg transition-all hover:scale-105 active:scale-95 inline-flex items-center"
                >
                  DOWNLOAD NOW
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
