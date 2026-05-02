// @vitest-environment jsdom
//
// WPCP-001 — Regression test for GuideCard.tsx after ChampionPortrait
// extraction. Verifica via DOM render (`@solidjs/testing-library` + jsdom)
// che gli output osservabili (data-testid, alt, role pill, difficulty pips,
// CTA href) siano invariati rispetto al comportamento pre-refactor.
//
// useI18n e' mockato a livello di modulo per evitare di costruire l'intero
// router context: il GuideCard usa solo `t(key)` come passthrough.

import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../../src/i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}));

import { GuideCard } from '../../../src/components/champion/GuideCard';

afterEach(cleanup);

const localeData = {
  title: 'Aatrox Top Build & Guide — Patch 16.9',
  description: 'Aatrox top lane guide.',
  patch: '16.9',
  last_updated: '2026-04-29',
  champion_class: 'Fighter / Drain Tank',
  difficulty: 2,
  damage_type: 'physical',
  champion_dd_id: 'Aatrox',
  champion_key: '266',
};

describe('GuideCard — post-refactor regression', () => {
  it('renders the active guide variant with portrait img and CTA link', () => {
    const { container } = render(() => (
      <GuideCard
        champion="aatrox"
        role="top"
        locale={localeData}
        lang="en"
      />
    ));

    const card = container.querySelector('[data-testid="guide-card"]');
    expect(card).not.toBeNull();
    expect(card!.getAttribute('href')).toBe('/en/champion/aatrox/top/guide');
    expect(card!.getAttribute('data-champion')).toBe('aatrox');
    expect(card!.getAttribute('data-role')).toBe('top');

    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img!.getAttribute('src')).toBe(
      'https://cdn.communitydragon.org/latest/champion/266/splash-art/centered',
    );
    expect(img!.getAttribute('loading')).toBe('lazy');

    // Skeleton pulse layer present until image loads.
    expect(
      container.querySelector('.animate-pulse[aria-hidden="true"]'),
    ).not.toBeNull();

    // Difficulty pips container preserved (5 pips, aria-label same as pre-refactor).
    expect(container.querySelector('[aria-label="Difficulty 2 of 5"]')).not.toBeNull();
  });

  it('renders the coming-soon variant with lock icon and no portrait img', () => {
    const { container } = render(() => (
      <GuideCard
        champion="aatrox"
        role="top"
        locale={{ ...localeData, champion_dd_id: null, champion_key: null }}
        lang="en"
        comingSoon
      />
    ));
    expect(
      container.querySelector('[data-testid="guide-card-coming-soon"]'),
    ).not.toBeNull();
    expect(container.querySelector('img')).toBeNull();
  });

  it('preserves the data-role attribute for jungle role', () => {
    const { container } = render(() => (
      <GuideCard
        champion="aatrox"
        role="jungle"
        locale={localeData}
        lang="en"
      />
    ));
    expect(
      container
        .querySelector('[data-testid="guide-card"]')!
        .getAttribute('data-role'),
    ).toBe('jungle');
  });
});
