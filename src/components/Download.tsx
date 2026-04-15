import { createSignal, onMount, onCleanup, Show } from 'solid-js';
import { DOWNLOAD_INFO } from '../data/content';
import { useI18n } from '../i18n';

export default function Download() {
  const { t } = useI18n();
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
        <h2 class="text-4xl font-extrabold tracking-tight mb-8 uppercase">{t('download.title')}</h2>
        <Show
          when={!isMobile()}
          fallback={
            <p class="text-on-surface-variant">
              {t('download.mobileNote')}
            </p>
          }
        >
          <div class="flex flex-col items-center gap-6">
            <span
              class="bg-surface-container-highest/60 border border-outline-variant/30 px-10 py-4 rounded-lg font-headline font-extrabold text-on-surface-variant/50 uppercase tracking-widest inline-flex items-center gap-3 cursor-default select-none"
            >
              <span class="material-symbols-outlined text-lg">hourglass_top</span>
              {t('download.comingSoon')} {DOWNLOAD_INFO.platform}
            </span>
            <p class="text-sm text-on-surface-variant/60">
              {t('download.comingSoonNote')}
            </p>
          </div>
        </Show>
      </div>
    </section>
  );
}
