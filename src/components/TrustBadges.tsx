import { For } from 'solid-js';
import { TRUST_BADGES } from '../data/content';

export default function TrustBadges() {
  return (
    <section class="py-20 border-t border-outline-variant/10">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-wrap justify-center gap-12 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <For each={TRUST_BADGES}>
            {(badge) => (
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl">{badge.icon}</span>
                <span class="font-headline font-extrabold uppercase tracking-tighter text-sm">
                  {badge.label}
                </span>
              </div>
            )}
          </For>
        </div>
        <p class="text-center text-[10px] uppercase tracking-widest text-on-surface-variant/40 max-w-3xl mx-auto">
          LoL Sensei isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
    </section>
  );
}
