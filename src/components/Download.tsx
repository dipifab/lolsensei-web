import { createSignal, onMount, onCleanup, Show } from 'solid-js';
import { DOWNLOAD_INFO } from '../data/content';

export default function Download() {
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    onCleanup(() => mql.removeEventListener('change', handler));
  });

  return (
    <section id="download" class="py-16 px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-extrabold tracking-tight mb-8 uppercase">Get Started</h2>
        <Show
          when={!isMobile()}
          fallback={
            <p class="text-on-surface-variant">
              Available for Windows — visit from your PC to download.
            </p>
          }
        >
          <div class="flex flex-col items-center gap-6">
            <a
              href={DOWNLOAD_INFO.url}
              class="gold-gradient px-10 py-4 rounded-lg font-headline font-extrabold text-[#261900] uppercase tracking-widest shadow-[0_0_20px_rgba(240,191,92,0.3)] hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Download for {DOWNLOAD_INFO.platform}
            </a>
            <a
              href={DOWNLOAD_INFO.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-secondary hover:text-primary transition-colors"
            >
              View all releases
              <span class="sr-only"> (opens in new tab)</span>
              {' '}&rarr;
            </a>
            <p class="text-xs text-on-surface-variant/50 max-w-md">
              {DOWNLOAD_INFO.smartScreenNote}
            </p>
          </div>
        </Show>
      </div>
    </section>
  );
}
