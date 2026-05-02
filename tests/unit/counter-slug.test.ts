// WPCP-020 / WPCP-021 — parseSlugParam tests.
//
// L'URL `/[lang]/counter/<slug>` accetta sia `<champion-slug>` (ruolo primario)
// che `<champion-slug>-<role>` con role in {top, jungle, mid, bot, support}.
// Il parser estrae le due parti facendo attenzione agli slug con trattino
// interno (es. "lee-sin", "cho-gath", "k-sante").
//
// Vedi `dev-repository/wp-counter-picker/design/components.md` §3.

import { describe, expect, it } from 'vitest';
import { parseSlugParam } from '../../src/lib/counter/slug';

describe('parseSlugParam', () => {
  it('returns role=null for a bare slug', () => {
    expect(parseSlugParam('zed')).toEqual({ championSlug: 'zed', role: null });
  });

  it('extracts role suffix for simple slug', () => {
    expect(parseSlugParam('sett-top')).toEqual({
      championSlug: 'sett',
      role: 'top',
    });
  });

  it('extracts role=support for slug-support', () => {
    expect(parseSlugParam('sett-support')).toEqual({
      championSlug: 'sett',
      role: 'support',
    });
  });

  it('treats internal hyphen as part of slug when no role suffix', () => {
    expect(parseSlugParam('lee-sin')).toEqual({
      championSlug: 'lee-sin',
      role: null,
    });
  });

  it('preserves multi-word slug when role suffix present', () => {
    expect(parseSlugParam('lee-sin-jungle')).toEqual({
      championSlug: 'lee-sin',
      role: 'jungle',
    });
  });

  it('returns role=null when last segment is not a valid role', () => {
    expect(parseSlugParam('unknown-foo')).toEqual({
      championSlug: 'unknown-foo',
      role: null,
    });
  });

  it('extracts role=mid', () => {
    expect(parseSlugParam('zed-mid')).toEqual({
      championSlug: 'zed',
      role: 'mid',
    });
  });

  it('extracts role=bot', () => {
    expect(parseSlugParam('jhin-bot')).toEqual({
      championSlug: 'jhin',
      role: 'bot',
    });
  });
});
