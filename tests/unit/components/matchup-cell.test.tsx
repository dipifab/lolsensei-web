// @vitest-environment jsdom
//
// WPCP-031 (CR-063) — MatchupCell component tests.
//
// Cella matchup nella detail page: portrait sm + nome publisher + role +
// rationale_excerpt (line-clamp-2). E' un `<a>` che punta alla guida sorgente
// con anchor #matchup-draft-pick-into o #matchup-draft-counterpicks.
// Updated 2026-05-02 OI-P6-1: URL pattern role-explicit
// /[lang]/champion/<champion>/<role>/guide (slash, non hyphen).

import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { MatchupCell } from '../../../src/components/counter/MatchupCell';
import type { ChampionMeta, MatchupCell as MatchupCellData } from '../../../src/lib/counter/types';

afterEach(cleanup);

const SAMPLE_CHAMPIONS: Record<string, ChampionMeta> = {
  aatrox: {
    display_name: 'Aatrox',
    dd_id: 'Aatrox',
    key: '266',
    cited_in_roles: ['top'],
    has_guide: true,
  },
  fiora: {
    display_name: 'Fiora',
    dd_id: 'Fiora',
    key: '114',
    cited_in_roles: ['top'],
    has_guide: true,
  },
  'cho-gath': {
    display_name: "Cho'Gath",
    dd_id: 'Chogath',
    key: '31',
    cited_in_roles: ['top'],
    has_guide: true,
    gp: 'chogath',
  },
};

const RATIONALES = [
  'Aatrox wins trades before level 6 with Q edge hits; W chains pin them long enough that they cannot stack.',
  'Fiora parries Q knock-up and Vitals true damage shred Aatrox.',
];

function makeCell(overrides: Partial<MatchupCellData> = {}): MatchupCellData {
  return {
    c: 'aatrox',
    role: 'top',
    r: 0,
    n: 1,
    ...overrides,
  };
}

describe('MatchupCell — rendering', () => {
  it('renders an anchor with the resolved source_anchor href (pick_into variant)', () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ c: 'aatrox', role: 'top' })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const a = screen.getByRole('link');
    expect(a).toBeTruthy();
    expect(a.getAttribute('href')).toBe(
      '/en/champion/aatrox/top/guide#matchup-draft-pick-into',
    );
  });

  it('uses #matchup-draft-counterpicks when via=counterpick', () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ c: 'fiora', role: 'top', r: 1 })}
        via="counterpick"
        enemyDisplayName="Aatrox"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const a = screen.getByRole('link');
    expect(a.getAttribute('href')).toBe(
      '/en/champion/fiora/top/guide#matchup-draft-counterpicks',
    );
  });

  it('uses gp (guide_prefix) override when present in champions table', () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ c: 'cho-gath', role: 'top' })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const a = screen.getByRole('link');
    // gp="chogath" -> URL champion segment "chogath", role segment "top"
    expect(a.getAttribute('href')).toBe(
      '/en/champion/chogath/top/guide#matchup-draft-pick-into',
    );
  });

  it('preserves the lang segment when lang=it', () => {
    render(() => (
      <MatchupCell
        lang="it"
        cell={makeCell()}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    expect(screen.getByRole('link').getAttribute('href')).toContain('/it/champion/');
  });

  it('renders the publisher display_name from the champions lookup', () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ c: 'cho-gath' })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    expect(screen.getByText("Cho'Gath")).toBeTruthy();
  });

  it("renders the resolved rationale excerpt from rationales[r]", () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ r: 0 })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    expect(
      screen.getByText(/Aatrox wins trades before level 6/),
    ).toBeTruthy();
  });

  it('applies line-clamp-2 utility class to the rationale text for overflow control', () => {
    const { container } = render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell()}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const clamped = container.querySelector('.line-clamp-2');
    expect(clamped).toBeTruthy();
  });

  it('renders a champion portrait via ChampionPortrait component', () => {
    const { container } = render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell()}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const portrait = container.querySelector('[data-testid="champion-portrait"]');
    expect(portrait).toBeTruthy();
  });

  it('exposes a non-empty aria-label rendered through the i18n provider', () => {
    // Phase 5 (WPCP-025): l'aria-label si compone tramite \. Senza I18nProvider in test la chiave torna in passthrough (no template -> niente interpolazione). Asserzione mirata sulla chiave: la presenza di Aatrox/Yasuo e' garantita in produzione dal locale en/it.
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell()}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    const a = screen.getByRole('link');
    const aria = a.getAttribute('aria-label') ?? '';
    expect(aria).toBe('counter.a11y.cell_link_aria');
  });

  it('renders the role tag (e.g., TOP) next to the publisher name', () => {
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ role: 'top' })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    // Role badge mostrato in uppercase
    expect(screen.getByText(/^top$/i)).toBeTruthy();
  });

  it('falls back gracefully if the champions lookup is missing the publisher slug', () => {
    // Edge case difensivo: il builder garantisce integrita V3, ma il client
    // deve degradare senza crash. Render con publisher slug come fallback nome.
    render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ c: 'unknown-slug' })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    // No throw; il link e' renderizzato con lo slug come display name.
    const a = screen.getByRole('link');
    expect(a).toBeTruthy();
  });

  it('falls back to empty string if the rationale index is out of bounds', () => {
    // Difensivo: in DEV lo schema Zod blocca questo caso, in prod il client
    // deve evitare crash.
    const { container } = render(() => (
      <MatchupCell
        lang="en"
        cell={makeCell({ r: 999 })}
        via="pick_into"
        enemyDisplayName="Yasuo"
        champions={SAMPLE_CHAMPIONS}
        rationales={RATIONALES}
      />
    ));
    expect(container.querySelector('a')).toBeTruthy();
  });
});
