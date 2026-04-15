import { createSignal, createEffect, onMount, onCleanup, For, Show } from 'solid-js';
import { A, useLocation, useNavigate } from '@solidjs/router';
import { NAV_ITEMS } from '../data/content';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollAfterNavigate = (anchor: string) => {
    const tryScroll = (attempts: number) => {
      const el = document.querySelector(anchor);
      if (el) {
        scrollToSection(anchor);
      } else if (attempts > 0) {
        requestAnimationFrame(() => tryScroll(attempts - 1));
      }
    };
    tryScroll(20);
  };

  const handleNavClick = (anchor: string) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      scrollAfterNavigate(anchor);
    } else {
      scrollToSection(anchor);
    }
  };

  return (
    <header
      class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-surface-container-highest/15"
    >
      <nav
        aria-label="Main navigation"
        class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4"
      >
        {/* Logo — oversized for gaming brand prominence */}
        <A href="/" class="flex items-center -my-4">
          <img
            src="/images/logo-512.png"
            alt="LoL Sensei"
            width="120"
            height="120"
            class="w-[72px] h-[72px] md:w-[120px] md:h-[120px] object-contain drop-shadow-[0_0_12px_rgba(240,191,92,0.4)]"
            style={{ "mask-image": "radial-gradient(circle, black 55%, transparent 80%)", "-webkit-mask-image": "radial-gradient(circle, black 55%, transparent 80%)" }}
          />
        </A>

        {/* Desktop links */}
        <div class="hidden md:flex items-center space-x-10 font-headline font-extrabold uppercase tracking-widest">
          <For each={NAV_ITEMS}>
            {(item) => (
              <button
                type="button"
                onClick={() => handleNavClick(item.anchor)}
                class="text-on-surface/70 hover:text-primary-container transition-all duration-300 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </For>
        </div>

        {/* CTA button (desktop) — scrolls to #download */}
        <button
          type="button"
          onClick={() => handleNavClick('#download')}
          class="hidden md:inline-flex gold-gradient text-on-primary-fixed font-headline font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-90 transition-transform shadow-[0_0_15px_rgba(240,191,92,0.3)] hover:shadow-[0_0_20px_rgba(240,191,92,0.5)] border-none cursor-pointer"
        >
          Download
        </button>

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
          class="fixed inset-0 top-20 glass-panel z-40 flex flex-col items-center justify-center gap-10 motion-safe:animate-[fade-in_200ms_ease-out]"
        >
          <For each={NAV_ITEMS}>
            {(item) => (
              <button
                type="button"
                onClick={() => handleNavClick(item.anchor)}
                class="text-2xl font-headline font-extrabold uppercase tracking-widest transition-all duration-300 min-h-11 flex items-center text-on-surface/70 hover:text-primary-container bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </For>

          <button
            type="button"
            onClick={() => handleNavClick('#download')}
            class="gold-gradient text-on-primary-fixed font-headline font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-90 transition-transform shadow-[0_0_15px_rgba(240,191,92,0.3)] hover:shadow-[0_0_20px_rgba(240,191,92,0.5)] border-none cursor-pointer"
          >
            Download
          </button>
        </div>
      </Show>
    </header>
  );
}
