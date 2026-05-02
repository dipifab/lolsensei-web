// @vitest-environment jsdom
//
// WPCP-001 — ChampionPortrait extraction tests.
//
// Renderizza il componente in jsdom via `@solidjs/testing-library` (richiede
// `vite-plugin-solid` attivo, vedi `vitest.config.ts`). I test coprono:
//   - URL builder helpers (puri);
//   - rendering DOM delle due varianti splash/square;
//   - sizing classes per variant="square";
//   - lazy/eager loading attribute;
//   - fallback DDragon su `onError`;
//   - rimozione dell'`<img>` quando anche il fallback DDragon fallisce.

import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import {
  ChampionPortrait,
  buildPortraitUrl,
  buildDdragonSplashUrl,
  fallbackDdIdFromSlug,
} from '../../../src/components/champion/ChampionPortrait';

afterEach(cleanup);

describe('buildPortraitUrl — CDragon URL builder', () => {
  it('uses numeric champion key when available', () => {
    expect(buildPortraitUrl('Aatrox', '266')).toBe(
      'https://cdn.communitydragon.org/latest/champion/266/splash-art/centered',
    );
  });

  it('falls back to lowercase ddId when key is null', () => {
    expect(buildPortraitUrl('LeeSin', null)).toBe(
      'https://cdn.communitydragon.org/latest/champion/leesin/splash-art/centered',
    );
  });

  it('rejects non-numeric champion_key strings as defensive fallback', () => {
    expect(buildPortraitUrl('Aatrox', 'abc')).toBe(
      'https://cdn.communitydragon.org/latest/champion/aatrox/splash-art/centered',
    );
  });
});

describe('buildDdragonSplashUrl — DDragon fallback URL', () => {
  it('returns the canonical splash URL', () => {
    expect(buildDdragonSplashUrl('Aatrox')).toBe(
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    );
  });
});

describe('fallbackDdIdFromSlug — kebab-to-PascalCase', () => {
  it('handles single-word slugs', () => {
    expect(fallbackDdIdFromSlug('aatrox')).toBe('Aatrox');
  });

  it('joins multi-segment slugs into PascalCase', () => {
    expect(fallbackDdIdFromSlug('lee-sin')).toBe('LeeSin');
    expect(fallbackDdIdFromSlug('kha-zix')).toBe('KhaZix');
    expect(fallbackDdIdFromSlug('miss-fortune')).toBe('MissFortune');
  });
});

describe('ChampionPortrait — splash variant render', () => {
  it('renders <img> with CDragon URL by numeric key, alt, and lazy loading', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="splash"
        alt="Aatrox portrait"
      />
    ));
    const img = container.querySelector('img')!;
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(
      'https://cdn.communitydragon.org/latest/champion/266/splash-art/centered',
    );
    expect(img.getAttribute('alt')).toBe('Aatrox portrait');
    expect(img.getAttribute('loading')).toBe('lazy');
  });

  it('renders skeleton element for splash variant', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="splash"
        alt="Aatrox"
      />
    ));
    expect(
      container.querySelector('.animate-pulse[aria-hidden="true"]'),
    ).not.toBeNull();
  });

  it('falls back to slug-based CDragon URL when championKey is null', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="lee-sin"
        championDdId="LeeSin"
        championKey={null}
        variant="splash"
        alt="Lee Sin portrait"
      />
    ));
    const img = container.querySelector('img')!;
    expect(img.getAttribute('src')).toBe(
      'https://cdn.communitydragon.org/latest/champion/leesin/splash-art/centered',
    );
  });

  it('uses aspect-[16/9] wrapper for splash variant', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="splash"
        alt="Aatrox"
      />
    ));
    const wrapper = container.querySelector('[data-testid="champion-portrait"]')!;
    expect(wrapper.className).toContain('aspect-[16/9]');
  });
});

describe('ChampionPortrait — square variant render', () => {
  it('renders w-16 h-16 sizing for size="md"', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="square"
        size="md"
        alt="Aatrox"
      />
    ));
    const wrapper = container.querySelector('[data-testid="champion-portrait"]')!;
    expect(wrapper.className).toContain('w-16');
    expect(wrapper.className).toContain('h-16');
    expect(wrapper.className).not.toContain('aspect-[16/9]');
  });

  it('renders the 3 sizing variants (sm 40px / md 64px / lg 96px)', () => {
    const make = (size: 'sm' | 'md' | 'lg'): string => {
      const r = render(() => (
        <ChampionPortrait
          slug="aatrox"
          championDdId="Aatrox"
          championKey="266"
          variant="square"
          size={size}
          alt="Aatrox"
        />
      ));
      const className = r.container.querySelector('[data-testid="champion-portrait"]')!.className;
      r.unmount();
      return className;
    };
    expect(make('sm')).toContain('w-10');
    expect(make('md')).toContain('w-16');
    expect(make('lg')).toContain('w-24');
  });

  it('honours lazy=false (eager) for above-the-fold use', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="square"
        size="lg"
        alt="Aatrox"
        lazy={false}
      />
    ));
    const img = container.querySelector('img')!;
    expect(img.getAttribute('loading')).toBe('eager');
  });
});

describe('ChampionPortrait — fallback behaviour', () => {
  it('switches to DDragon fallback when img onError fires', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="splash"
        alt="Aatrox"
      />
    ));
    const img = container.querySelector('img') as HTMLImageElement;
    img.dispatchEvent(new Event('error'));
    expect(img.dataset.fallback).toBe('ddragon');
    expect(img.getAttribute('src')).toBe(
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    );
  });

  it('removes the img after the DDragon fallback also errors', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="aatrox"
        championDdId="Aatrox"
        championKey="266"
        variant="splash"
        alt="Aatrox"
      />
    ));
    const img = container.querySelector('img') as HTMLImageElement;
    img.dispatchEvent(new Event('error')); // -> ddragon
    img.dispatchEvent(new Event('error')); // -> remove
    expect(container.querySelector('img')).toBeNull();
  });

  it('falls back to PascalCase ddId when championDdId is null', () => {
    const { container } = render(() => (
      <ChampionPortrait
        slug="kha-zix"
        championDdId={null}
        championKey={null}
        variant="square"
        size="sm"
        alt="Kha'Zix"
      />
    ));
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.getAttribute('src')).toBe(
      'https://cdn.communitydragon.org/latest/champion/khazix/splash-art/centered',
    );
    img.dispatchEvent(new Event('error'));
    expect(img.getAttribute('src')).toBe(
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KhaZix_0.jpg',
    );
  });
});
