import { createSignal, createEffect, onMount, onCleanup, For, Show } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { NAV_ITEMS, DOWNLOAD_INFO } from '../data/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const location = useLocation();

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen()) {
        closeMenu();
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-menu"]')?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    onCleanup(() => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    });
  });

  // Focus trap: set inert on main/footer when mobile menu is open
  createEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (menuOpen()) {
      main?.setAttribute('inert', '');
      footer?.setAttribute('inert', '');
    } else {
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
    }
  });

  const toggleMenu = () => {
    const next = !menuOpen();
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-surface-container-highest/15"
    >
      <nav
        aria-label="Main navigation"
        class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4"
      >
        {/* Logo */}
        <A
          href="/"
          class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-primary font-headline uppercase tracking-widest"
        >
          LoL Sensei
        </A>

        {/* Desktop links */}
        <div class="hidden md:flex items-center space-x-10 font-headline font-extrabold uppercase tracking-widest">
          <For each={NAV_ITEMS}>
            {(item) => (
              <A
                href={item.anchor}
                class={`transition-all duration-300 ${
                  location.pathname === item.anchor
                    ? 'text-primary-container'
                    : 'text-on-surface/70 hover:text-primary-container'
                }`}
                aria-current={
                  location.pathname === item.anchor ? 'page' : undefined
                }
              >
                {item.label}
              </A>
            )}
          </For>
        </div>

        {/* CTA button (desktop) */}
        <a
          href={DOWNLOAD_INFO.url}
          class="hidden md:inline-flex gold-gradient text-on-primary-fixed font-headline font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-90 transition-transform shadow-[0_0_15px_rgba(240,191,92,0.3)] hover:shadow-[0_0_20px_rgba(240,191,92,0.5)]"
        >
          Download Free
        </a>

        {/* Mobile hamburger */}
        <button
          class="md:hidden min-h-11 min-w-11 flex items-center justify-center text-on-surface"
          onClick={toggleMenu}
          aria-expanded={menuOpen()}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <Show
            when={!menuOpen()}
            fallback={
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            }
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Show>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <Show when={menuOpen()}>
        <div
          id="mobile-menu"
          class="fixed inset-0 top-16 glass-panel z-40 flex flex-col items-center justify-center gap-10 motion-safe:animate-[fade-in_200ms_ease-out]"
        >
          <For each={NAV_ITEMS}>
            {(item) => (
              <A
                href={item.anchor}
                onClick={closeMenu}
                class={`text-2xl font-headline font-extrabold uppercase tracking-widest transition-all duration-300 min-h-11 flex items-center ${
                  location.pathname === item.anchor
                    ? 'text-primary-container'
                    : 'text-on-surface/70 hover:text-primary-container'
                }`}
                aria-current={
                  location.pathname === item.anchor ? 'page' : undefined
                }
              >
                {item.label}
              </A>
            )}
          </For>

          <a
            href={DOWNLOAD_INFO.url}
            class="gold-gradient text-on-primary-fixed font-headline font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-90 transition-transform shadow-[0_0_15px_rgba(240,191,92,0.3)] hover:shadow-[0_0_20px_rgba(240,191,92,0.5)]"
          >
            Download Free
          </a>
        </div>
      </Show>
    </header>
  );
}
