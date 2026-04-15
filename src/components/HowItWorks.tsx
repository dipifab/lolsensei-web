import { For } from 'solid-js';
import { STEPS } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" class="py-24 bg-surface-container-low relative">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-4xl font-extrabold text-center mb-20 tracking-tight uppercase">
          Tactical Deployment
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Gold accent line connecting steps (desktop only) */}
          <div class="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />

          <For each={STEPS}>
            {(step) => (
              <div class="relative flex flex-col items-center text-center group">
                <div class="w-16 h-16 rounded-full glass-panel border border-primary-container flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform">
                  <span
                    class="material-symbols-outlined text-primary-container"
                    style={{ "font-variation-settings": "'FILL' 1" }}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3 class="text-xl font-bold mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
