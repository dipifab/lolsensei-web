// WP35 — Champion frontmatter Zod schema tests (TASK-F5-05).

import { describe, it, expect } from 'vitest';
import { ChampionGuideFrontmatterSchema } from '../../../src/lib/content/champion-schema';

const BASE_VALID = {
  title: 'Lux Mid Build & Guide — Patch 14.10',
  slug: 'lux-mid',
  language: 'en' as const,
  patch: '14.10',
  champion: 'lux',
  role: 'mid' as const,
  last_updated: '2026-04-25',
  description:
    'Lux mid lane guide for League of Legends Patch 14.10: starter kit, core mage build path, key matchups, power spikes, common mistakes, and a closing tip.',
};

describe('ChampionGuideFrontmatterSchema', () => {
  it('accepts a valid frontmatter object', () => {
    const result = ChampionGuideFrontmatterSchema.safeParse(BASE_VALID);
    expect(result.success).toBe(true);
  });

  it('accepts kebab-case champion slugs (lee-sin)', () => {
    const ok = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      champion: 'lee-sin',
      slug: 'lee-sin-jungle',
      role: 'jungle',
      title: 'Lee Sin Jungle Build & Guide — Patch 14.10',
    });
    expect(ok.success).toBe(true);
  });

  it('rejects title shorter than 10 chars', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      title: 'short',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects slug not matching <champion>-<role> pattern', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      slug: 'lux',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects language outside en/it', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      language: 'fr',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects malformed patch (1.10.5 has 3 numbers)', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      patch: '14.10.5',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects last_updated not in ISO format', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      last_updated: '25/04/2026',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects description shorter than 100 chars', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      description: 'too short',
    });
    expect(bad.success).toBe(false);
  });

  it('rejects description longer than 200 chars', () => {
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      description: 'A'.repeat(250),
    });
    expect(bad.success).toBe(false);
  });
});
