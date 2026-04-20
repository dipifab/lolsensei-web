import { createSignal, createEffect, onMount, onCleanup, For, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { A, useLocation } from '@solidjs/router';
import { useI18n, SUPPORTED_LOCALES, type Locale } from '../i18n';
import DownloadCTA from './DownloadCTA';
import Icon from './Icon';

const NAV_KEYS = [
  { key: 'nav.features', path: '/features' },
  { key: 'nav.pricing', path: '/pricing' },
  { key: 'nav.faq', path: '/faq' },
  { key: 'nav.community', path: '/community' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.blog', path: '/blog' },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [langOpen, setLangOpen] = createSignal(false);
  const location = useLocation();
  const { t, locale, setLocale } = useI18n();

  const localizedHref = (path: string) => `/${locale()}${path}`;

  const isActive = (path: string) => {
    const fullPath = localizedHref(path);
    return location.pathname === fullPath || location.pathname === fullPath + '/';
  };

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (langOpen()) {
          setLangOpen(false);
        }
        if (menuOpen()) {
          closeMenu();
          document.querySelector<HTMLButtonElement>('[aria-controls="mobile-menu"]')?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    const handleClickOutside = (e: MouseEvent) => {
      if (langOpen()) {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-lang-switcher]')) {
          setLangOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);

    onCleanup(() => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
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

  const handleLangChange = (lang: Locale) => {
    setLocale(lang);
    setLangOpen(false);
  };

  return (
    <header
      class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-surface-container-highest/15"
    >
      <nav
        aria-label={t('a11y.mainNav')}
        class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4"
      >
        {/* Logo */}
        <A href={localizedHref('/')} class="flex items-center -my-4 shrink-0">
          <img
            src="/images/logo-120.webp"
            alt="LoL Sensei"
            width="120"
            height="120"
            class="w-[120px] h-[120px] object-contain shrink-0"
          />
        </A>

        {/* Desktop links */}
        <div class="hidden lg:flex items-center gap-6 xl:gap-8 font-headline font-extrabold uppercase tracking-widest text-sm xl:text-base">
          <For each={NAV_KEYS}>
            {(item) => (
              <A
                href={localizedHref(item.path)}
                class={`whitespace-nowrap transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary-container'
                    : 'text-on-surface/70 hover:text-primary-container'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {t(item.key)}
              </A>
            )}
          </For>
        </div>

        {/* Desktop right section: language switcher + CTA */}
        <div class="hidden lg:flex items-center gap-3 shrink-0">
          {/* Language switcher */}
          <div class="relative" data-lang-switcher>
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen())}
              class="flex items-center gap-1.5 text-on-surface/70 hover:text-primary-container transition-colors font-headline font-extrabold uppercase tracking-widest text-sm px-3 py-2 rounded-lg border border-outline-variant/20 hover:border-primary-container/40 cursor-pointer"
              aria-expanded={langOpen()}
              aria-haspopup="listbox"
              aria-label={t('a11y.selectLanguage')}
            >
              <Icon name="translate" class="w-3.5 h-3.5" />
              {t(`lang.${locale()}`)}
              <Icon name="expand_more" class={`w-3 h-3 transition-transform duration-200 ${langOpen() ? 'rotate-180' : ''}`} />
            </button>

            <Show when={langOpen()}>
              <ul
                role="listbox"
                aria-label={t('a11y.languagesList')}
                class="absolute right-0 top-full mt-2 w-44 bg-surface-container-high border border-outline-variant/20 rounded-xl shadow-2xl overflow-hidden z-50 motion-safe:animate-[fade-in_150ms_ease-out]"
              >
                <For each={[...SUPPORTED_LOCALES]}>
                  {(lang) => (
                    <li
                      role="option"
                      aria-selected={locale() === lang}
                      class={`px-4 py-2.5 cursor-pointer text-sm transition-colors ${
                        locale() === lang
                          ? 'text-primary-container bg-surface-container-highest/50 font-bold'
                          : 'text-on-surface/70 hover:text-primary-container hover:bg-surface-container-highest/30'
                      }`}
                      onClick={() => handleLangChange(lang)}
                    >
                      {t(`lang.${lang}`)}
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </div>

          {/* CTA button */}
          <DownloadCTA variant="nav" />
        </div>

        {/* Mobile hamburger */}
        <button
          class="lg:hidden min-h-11 min-w-11 flex items-center justify-center text-on-surface"
          onClick={toggleMenu}
          aria-expanded={menuOpen()}
          aria-controls="mobile-menu"
          aria-label={t('a11y.toggleMenu')}
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
        <Portal>
        <div
          id="mobile-menu"
          class="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-10 motion-safe:animate-[fade-in_200ms_ease-out]"
        >
          <For each={NAV_KEYS}>
            {(item) => (
              <A
                href={localizedHref(item.path)}
                onClick={closeMenu}
                class={`text-2xl font-headline font-extrabold uppercase tracking-widest transition-all duration-300 min-h-11 flex items-center ${
                  isActive(item.path)
                    ? 'text-primary-container'
                    : 'text-on-surface/70 hover:text-primary-container'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {t(item.key)}
              </A>
            )}
          </For>

          {/* Mobile language switcher */}
          <select
            value={locale()}
            onChange={(e) => {
              handleLangChange(e.currentTarget.value as Locale);
              closeMenu();
            }}
            class="bg-surface-container-highest/60 border border-outline-variant/30 text-on-surface font-headline font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-lg text-sm cursor-pointer"
            aria-label={t('a11y.selectLanguage')}
          >
            <For each={[...SUPPORTED_LOCALES]}>
              {(lang) => (
                <option value={lang}>{t(`lang.${lang}`)}</option>
              )}
            </For>
          </select>

          <DownloadCTA variant="nav" />
        </div>
        </Portal>
      </Show>
    </header>
  );
}
