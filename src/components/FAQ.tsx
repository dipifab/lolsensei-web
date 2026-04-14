import { For, Show, createSignal } from 'solid-js';
import { FAQ_ITEMS } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex() === index ? null : index);
  };

  return (
    <section class="py-32 px-8" id="faq">
      <div class="max-w-4xl mx-auto">
        {/* Hero header */}
        <div class="mb-20">
          <span class="text-primary-container text-xs font-bold tracking-widest uppercase mb-4 block">
            Knowledge Base
          </span>
          <h2 class="text-5xl md:text-6xl font-headline font-extrabold tracking-tight mb-6">
            Tactical <span class="text-primary">Intelligence</span>
          </h2>
          <p class="text-on-surface-variant text-lg max-w-lg leading-relaxed">
            Everything you need to know about the LoL Sensei ecosystem.
          </p>
        </div>

        {/* FAQ items */}
        <div class="space-y-0">
          <For each={FAQ_ITEMS}>
            {(item, index) => {
              const isOpen = () => openIndex() === index();
              const number = () => String(index() + 1).padStart(2, '0');

              return (
                <div class="group border-b border-outline-variant/10">
                  <button
                    class="w-full py-6 flex items-center justify-between cursor-pointer text-left"
                    onClick={() => toggle(index())}
                  >
                    <div class="flex items-center gap-6">
                      <span
                        class={`font-headline text-2xl font-extrabold transition-colors ${
                          isOpen() ? 'text-primary' : 'text-outline-variant group-hover:text-primary'
                        }`}
                      >
                        {number()}
                      </span>
                      <h3
                        class={`text-xl md:text-2xl font-bold font-headline transition-colors ${
                          isOpen() ? 'text-primary' : 'group-hover:text-primary'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>
                    <span
                      class={`material-symbols-outlined text-outline-variant transition-transform duration-300 ${
                        isOpen() ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <Show when={isOpen()}>
                    <div class="pb-6 pl-16 pr-8 text-on-surface-variant leading-relaxed">
                      {item.answer}
                    </div>
                  </Show>
                </div>
              );
            }}
          </For>
        </div>

        {/* CTA */}
        <div class="mt-32 p-12 rounded-2xl glass-panel relative overflow-hidden border border-outline-variant/10">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 class="text-3xl font-extrabold font-headline mb-2">Still have questions?</h3>
              <p class="text-on-surface-variant">Check our GitHub repository for more details.</p>
            </div>
            <a
              href="https://github.com/dipifab/lolai"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 gold-gradient text-on-primary-fixed rounded-lg font-bold shadow-lg inline-flex items-center gap-2"
            >
              Visit GitHub
              <span class="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
