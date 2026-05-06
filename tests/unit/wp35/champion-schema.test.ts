// WP35 — Champion frontmatter Zod schema tests (TASK-F5-05).
// CR-058 / WP35.6 — Estensione test per RunesSchema (TASK-1-002).

import { describe, it, expect } from 'vitest';
import {
  ChampionGuideFrontmatterSchema,
  RunesSchema,
  RuneSlotSchema,
  QuickLearnSchema,
} from '../../../src/lib/content/champion-schema';

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

  it('rejects language outside the supported set', () => {
    // WP35.1 — il set supportato e' stato esteso da EN+IT a tutte le 8 lingue
    // del sito (en, it, es, fr, de, pt-br, ko, zh-hans). Qui usiamo `ja` che
    // non e' nel set per verificare che l'enum mantenga il fallback rejection.
    const bad = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      language: 'ja',
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

// ---------------------------------------------------------------------------
// CR-058 / WP35.6 — RunesSchema fixture (groundtruth Riot DD patch 16.9.1).
// I dd_id e icon_path provengono da
// `https://ddragon.leagueoflegends.com/cdn/16.9.1/data/en_US/runesReforged.json`
// (fetched 2026-04-29). NO mock numerici inventati.
// Build modellato: Lux mage default — Sorcery primary (Aery + Manaflow Band +
// Transcendence + Scorch) / Inspiration secondary (Biscuit Delivery + Cosmic
// Insight) / shards Adaptive·Adaptive·MagicResist.
// ---------------------------------------------------------------------------

const VALID_RUNES = {
  primary_tree: 'Sorcery',
  primary_tree_dd_id: 8200,
  keystone: {
    dd_id: 8214,
    name: 'Summon Aery',
    icon_path: 'perk-images/Styles/Sorcery/SummonAery/SummonAery.png',
  },
  primary_slots: [
    {
      dd_id: 8226,
      name: 'Manaflow Band',
      icon_path: 'perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png',
    },
    {
      dd_id: 8210,
      name: 'Transcendence',
      icon_path: 'perk-images/Styles/Sorcery/Transcendence/Transcendence.png',
    },
    {
      dd_id: 8237,
      name: 'Scorch',
      icon_path: 'perk-images/Styles/Sorcery/Scorch/Scorch.png',
    },
  ],
  secondary_tree: 'Inspiration',
  secondary_tree_dd_id: 8300,
  secondary_slots: [
    {
      dd_id: 8345,
      name: 'Biscuit Delivery',
      icon_path:
        'perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
    },
    {
      dd_id: 8347,
      name: 'Cosmic Insight',
      icon_path:
        'perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png',
    },
  ],
  stat_shards: [
    'Adaptive Force',
    'Adaptive Force',
    'Magic Resist',
  ] as const,
};

// QuickLearn fixture minimo (5 abilita' P/Q/W/E/R + 18 livelli skill_order)
// per testare i casi backward-compat e happy-path con `runes` integrato.
const VALID_QUICK_LEARN_BASE = {
  champion_dd_id: 'Lux',
  difficulty: 2,
  damage_type: 'magic' as const,
  champion_class: 'Burst Mage',
  abilities: [
    {
      key: 'P' as const,
      name: 'Illumination',
      description:
        'Damaging spells mark enemies; next basic attack consumes the mark for bonus magic damage.',
    },
    {
      key: 'Q' as const,
      name: 'Light Binding',
      description:
        'Skillshot that binds the first two enemies hit, dealing magic damage and rooting them.',
    },
    {
      key: 'W' as const,
      name: 'Prismatic Barrier',
      description:
        'Throws her wand in a line, shielding allies it touches on the way out and back.',
    },
    {
      key: 'E' as const,
      name: 'Lucent Singularity',
      description:
        'Area zone that slows enemies. Re-activate to detonate for damage.',
    },
    {
      key: 'R' as const,
      name: 'Final Spark',
      description:
        'Long-range laser that deals heavy magic damage and primes Illumination on all hit.',
    },
  ],
  skill_order: [
    { level: 1, key: 'Q' as const },
    { level: 2, key: 'E' as const },
    { level: 3, key: 'W' as const },
    { level: 4, key: 'E' as const },
    { level: 5, key: 'E' as const },
    { level: 6, key: 'R' as const },
    { level: 7, key: 'E' as const },
    { level: 8, key: 'Q' as const },
    { level: 9, key: 'E' as const },
    { level: 10, key: 'Q' as const },
    { level: 11, key: 'R' as const },
    { level: 12, key: 'Q' as const },
    { level: 13, key: 'Q' as const },
    { level: 14, key: 'W' as const },
    { level: 15, key: 'W' as const },
    { level: 16, key: 'R' as const },
    { level: 17, key: 'W' as const },
    { level: 18, key: 'W' as const },
  ],
  core_items: [
    { dd_id: '6655', name: "Luden's Companion" },
    { dd_id: '3020', name: 'Sorcerer\'s Shoes' },
    { dd_id: '3157', name: "Zhonya's Hourglass" },
  ],
  base_combo: ['E', 'Q', 'AA', 'E', 'R'],
  win_condition:
    'Hit Q in lane to set up kills, scale to 2-item spike, then poke and one-shot with E-Q-R.',
  weakness:
    'Long cooldowns and no escape: gap-closers punish missed Q. Vulnerable when E and Q are down.',
};

describe('RunesSchema', () => {
  // Scenario A: happy path
  it('accetta runes ben formato', () => {
    const result = RunesSchema.safeParse(VALID_RUNES);
    expect(result.success).toBe(true);
  });

  // Scenario B: primary_slots length errata
  it('rifiuta primary_slots di length != 3', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      primary_slots: VALID_RUNES.primary_slots.slice(0, 2),
    });
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths.some((p) => p.startsWith('primary_slots'))).toBe(true);
    }
  });

  it('rifiuta secondary_slots di length != 2', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      secondary_slots: [VALID_RUNES.secondary_slots[0]],
    });
    expect(bad.success).toBe(false);
  });

  // Scenario C: dd_id fuori range
  it('rifiuta dd_id < 8000', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      keystone: { ...VALID_RUNES.keystone, dd_id: 7000 },
    });
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths.some((p) => p === 'keystone.dd_id')).toBe(true);
    }
  });

  // Scenario D: stat_shards non canonical
  it('rifiuta shard non in enum', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      stat_shards: ['Adaptive Force', 'Lethality', 'Magic Resist'],
    });
    expect(bad.success).toBe(false);
  });

  it('rifiuta stat_shards di length != 3', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      stat_shards: ['Adaptive Force', 'Magic Resist'],
    });
    expect(bad.success).toBe(false);
  });

  // Scenario E: RuneSlot incompleto
  it('rifiuta RuneSlot senza icon_path', () => {
    const incompleteSlot = {
      dd_id: 8214,
      name: 'Summon Aery',
    };
    const bad = RuneSlotSchema.safeParse(incompleteSlot);
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths).toContain('icon_path');
    }
  });

  it('rifiuta name troppo corto (< 2 char)', () => {
    const bad = RuneSlotSchema.safeParse({
      dd_id: 8214,
      name: 'A',
      icon_path: 'perk-images/Styles/Sorcery/SummonAery/SummonAery.png',
    });
    expect(bad.success).toBe(false);
  });
});

describe('QuickLearnSchema with runes', () => {
  // Scenario A (happy path quick_learn + runes)
  it('accetta QuickLearn con runes valido', () => {
    const ok = QuickLearnSchema.safeParse({
      ...VALID_QUICK_LEARN_BASE,
      runes: VALID_RUNES,
    });
    expect(ok.success).toBe(true);
  });

  // Scenario F (backward-compat)
  it('accetta QuickLearn senza runes', () => {
    const ok = QuickLearnSchema.safeParse(VALID_QUICK_LEARN_BASE);
    expect(ok.success).toBe(true);
  });

  it('propaga errore se runes presente ma malformato', () => {
    const bad = QuickLearnSchema.safeParse({
      ...VALID_QUICK_LEARN_BASE,
      runes: {
        ...VALID_RUNES,
        primary_slots: VALID_RUNES.primary_slots.slice(0, 2),
      },
    });
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths.some((p) => p.startsWith('runes.'))).toBe(true);
    }
  });
});

describe('ChampionGuideFrontmatterSchema with runes', () => {
  it('accetta frontmatter con quick_learn.runes valido', () => {
    const ok = ChampionGuideFrontmatterSchema.safeParse({
      ...BASE_VALID,
      quick_learn: {
        ...VALID_QUICK_LEARN_BASE,
        runes: VALID_RUNES,
      },
    });
    expect(ok.success).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// CR-058 amendment v2 (2026-04-29) — Rationale contestuale opzionale.
// 3 nuovi campi globali su RunesSchema (`primary_rationale`,
// `secondary_rationale`, `secondary_alternative`) + 1 campo `rationale` su
// RuneSlotSchema (per ora popolato solo sul keystone). Tutti opzionali con
// length [20, 280]. Le guide v1 senza rationale restano valide.
// ---------------------------------------------------------------------------

const VALID_PRIMARY_RATIONALE =
  "Sorcery primary: Arcane Comet sfrutta E->Q per garantire il proc, aggiungendo burst per ogni scambio. Manaflow Band tiene il mana per E spam.";
const VALID_SECONDARY_RATIONALE =
  "Inspiration secondary: Biscuit Delivery e Cosmic Insight per sustain early e Flash piu' frequente nei teamfight.";
const VALID_SECONDARY_ALTERNATIVE =
  "Se l'enemy team ha 2+ squishy a basse resistenze, swap Inspiration -> Precision con Presence of Mind + Coup de Grace.";
const VALID_KEYSTONE_RATIONALE =
  "Arcane Comet scelto per la sinergia con E (slow + tick): ogni cast garantisce il proc senza dipendere da AA.";

describe('RunesSchema rationale (CR-058 v2)', () => {
  it('accetta runes con tutti i 3 rationale globali + keystone.rationale entro i bound', () => {
    const result = RunesSchema.safeParse({
      ...VALID_RUNES,
      keystone: {
        ...VALID_RUNES.keystone,
        rationale: VALID_KEYSTONE_RATIONALE,
      },
      primary_rationale: VALID_PRIMARY_RATIONALE,
      secondary_rationale: VALID_SECONDARY_RATIONALE,
      secondary_alternative: VALID_SECONDARY_ALTERNATIVE,
    });
    expect(result.success).toBe(true);
  });

  it('accetta runes senza rationale (backward-compat v1)', () => {
    const result = RunesSchema.safeParse(VALID_RUNES);
    expect(result.success).toBe(true);
  });

  it('rifiuta primary_rationale shorter than 20 chars', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      primary_rationale: 'troppo corto',
    });
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths).toContain('primary_rationale');
    }
  });

  it('rifiuta secondary_rationale longer than 280 chars', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      secondary_rationale: 'A'.repeat(281),
    });
    expect(bad.success).toBe(false);
    if (!bad.success) {
      const paths = bad.error.issues.map((i) => i.path.join('.'));
      expect(paths).toContain('secondary_rationale');
    }
  });

  it('rifiuta keystone.rationale fuori range (< 20)', () => {
    const bad = RunesSchema.safeParse({
      ...VALID_RUNES,
      keystone: {
        ...VALID_RUNES.keystone,
        rationale: 'short',
      },
    });
    expect(bad.success).toBe(false);
  });
});
