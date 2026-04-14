import { For } from 'solid-js';
import { COMPARISON_ROWS } from '../data/content';

export default function ComparisonGrid() {
  return (
    <section class="py-24 bg-surface-container-lowest">
      <div class="max-w-5xl mx-auto px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold tracking-tight mb-4 uppercase">
            The New Standard
          </h2>
          <p class="text-on-surface-variant">
            Superior intelligence for the modern Summoner.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-0.5 bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
          {/* Header row */}
          <div class="bg-surface-container-low p-6 font-bold text-on-surface-variant uppercase text-xs tracking-widest">
            Capability
          </div>
          <div class="bg-surface-container-high p-6 font-bold text-primary-container text-center uppercase text-xs tracking-widest">
            LoL Sensei
          </div>
          <div class="bg-surface-container-low p-6 font-bold text-on-surface-variant text-center uppercase text-xs tracking-widest">
            Static Tools
          </div>

          {/* Data rows */}
          <For each={COMPARISON_ROWS}>
            {(row) => (
              <>
                <div class="bg-surface-container-low p-6 text-sm">
                  {row.capability}
                </div>
                <div class="bg-surface-container-high p-6 flex justify-center">
                  <span class={`material-symbols-outlined ${row.lolSensei ? 'text-tertiary' : 'text-on-surface-variant/30'}`}>
                    {row.lolSensei ? 'check_circle' : 'cancel'}
                  </span>
                </div>
                <div class="bg-surface-container-low p-6 flex justify-center">
                  <span class={`material-symbols-outlined ${row.staticTools ? 'text-tertiary' : 'text-on-surface-variant/30'}`}>
                    {row.staticTools ? 'check_circle' : 'cancel'}
                  </span>
                </div>
              </>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
