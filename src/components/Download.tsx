import { createSignal, onMount, onCleanup, Show } from 'solid-js';
import { useI18n } from '../i18n';
import DownloadCTA from './DownloadCTA';

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
            <DownloadCTA variant="primary" />
          </div>
        </Show>
      </div>
    </section>
  );
}
