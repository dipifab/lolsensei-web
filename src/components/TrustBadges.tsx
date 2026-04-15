import { For } from 'solid-js';
import { TRUST_BADGES, RIOT_DISCLAIMER_KEY } from '../data/content';
import { useI18n } from '../i18n';

export default function TrustBadges() {
  const { t } = useI18n();

  return (
    <section class="py-20 border-t border-outline-variant/10">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-wrap justify-center gap-12 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <For each={TRUST_BADGES}>
            {(badge) => (
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl">{badge.icon}</span>
                <span class="font-headline font-extrabold uppercase tracking-tighter text-sm">
                  {t(badge.labelKey)}
                </span>
              </div>
            )}
          </For>
        </div>
        <p class="text-center text-[10px] uppercase tracking-widest text-on-surface-variant/40 max-w-3xl mx-auto">
          {t(RIOT_DISCLAIMER_KEY)}
        </p>
      </div>
    </section>
  );
}
