---
title: "Neeko Mid Build & Guide — Patch 16.9"
slug: "neeko-mid"
language: "en"
patch: "16.9"
champion: "neeko"
role: "mid"
last_updated: "2026-04-29"
description: "Neeko mid lane guide for League of Legends Patch 16.9: AP burst build, clone deception combos, key matchups, power spikes, common mistakes and a closing tip."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Disguise as an allied champion. Taking damage from enemies or casting damaging spells breaks the illusion."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Throw a seed that blooms once on impact, then a second time if it hits a champion or kills a unit. Main waveclear and poke."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passive: every third basic attack deals bonus magic damage. Active: send a clone forward that mimics Neeko."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Linear root skillshot. Becomes wider, faster and roots longer if it kills a unit or passes through a champion first."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel that ends in a leap and AOE knockup. Channel is hidden while disguised by W passive or P."
      dd_spell_id: "NeekoR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Akali) — stasis covers your R landing window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that interrupts your R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comps with strong healing (Soraka, Vladimir, Dr. Mundo). Your AOE damage applies grievous wounds — a debuff that cuts enemy heals by 40%"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "when the team needs more roams and you want extra movement speed mid-game over raw burst"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Land R inside a teamfight or off a flank disguised as an ally. Once Luden's Echo and Shadowflame are online, a hit R + Q double bloom one-shots most squishy back lines."
  weakness: "All damage is locked behind a long, telegraphed R that can be canceled by any hard CC. No dash, no shield, and the W active is the only mobility tool."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Overview

Neeko is an AP burst mage — a champion built around dealing very high damage in a 1-2 second window — who turns disguise and clone deception into one of the most explosive single-target combos in mid lane. Her kit is built around landing **Tangle-Barbs (E)** through a minion or her **Shapesplitter (W)** clone to extend the root duration, then chaining **Blooming Burst (Q)** and **Pop Blossom (R)** for a one-shot. The trade-off is that her ultimate has a hidden but real channel time, and almost every fight depends on selling the bait before the R lands.

Her game plan in mid is straightforward: clear waves with **Q** double-bloom, hold **E** as a setup tool rather than poke, and look for roams from level 6 onward where her disguise turns standard rotations into kill setups. Skill expression sits in clone usage — sending **W** down a side path while you walk the other way buys two free seconds against an aware enemy mid laner. Her power curve is back-loaded: weakest before level 6, peaks once she can pair **Luden's Echo** with a hidden **R**.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. Skip Corrupting Potion unless the lane is heavy auto-attack harass (Annie, Sylas).

**Core items (in order):**

1. **Luden's Echo** — burst spike, mana sustain so you can spam **Q** for waveclear without going dry.
2. **Sorcerer's Shoes** — flat magic penetration; the squishy targets you want to delete rarely build MR before minute 20.
3. **Shadowflame** — extra burst; the HP-threshold passive lines up with your **R** combo finisher on shielded targets.
4. **Rabadon's Deathcap** — the late-game multiplier, your highest AP slot.
5. **Void Staff** — the moment any priority target buys an MR item (Magic Resist; reduces magic damage taken).

**Situational items:**

- **Zhonya's Hourglass** — into divers and assassins (Zed, Diana, Talon, Akali). The stasis also covers the visible portion of your **R** if you channel late.
- **Banshee's Veil** — into single-target magic CC that interrupts **R** (Ahri charm, Lissandra **R**, Twisted Fate stun).
- **Morellonomicon** — into healing-stacking comps (Soraka, Vladimir, Dr. Mundo).
- **Cosmic Drive** — pick over Shadowflame when the team plays around picks and roams more than around teamfights.

**Boots:** Sorcerer's Shoes is default. Ionian Boots of Lucidity are acceptable when you snowball early and want shorter **R** cooldowns to chain rotations.

**Skill order:** Max **Q** first (waveclear and primary damage), **E** second (root utility), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Domination** with **Cheap Shot** and **Ultimate Hunter**, or **Inspiration** with **Biscuit Delivery** and **Cosmic Insight** for safer lanes.

## Key matchups

- **Zed:** Hard counter pre-6. Push the wave with **Q**, hold **E** as a panic button, and rush Zhonya's after Luden's Echo. Never use Flash offensively in lane.
- **Yasuo / Yone:** They Wind Wall your **E** and the second bloom of **Q**. Bait the wall by sending a **W** clone into a fake **E** angle, then commit your real combo.
- **Ahri:** Skill matchup. Her charm interrupts your **R**; rush Banshee's after Luden's Echo and Sorcerer's. Use **W** to bait her **R** mobility before going in.
- **Anivia:** Hard pre-6 because of her wall, easier post-6. Force her to spend **R** before you go in; her wall denies most clone fakes once it's down.
- **Twisted Fate:** Roam priority race. Track his **R** with vision wards on river and tri-bush. If he picks gold card on you, **E** him before he closes the gap.

## Power spikes & win conditions

- **Level 3:** With **Q-W-E** unlocked, your first all-in (a full commit fight aiming for the kill) is on the table — send the **W** clone behind their wave to fake a recall, then **E** through a minion the moment they step up to last-hit.
- **Level 6:** First **Pop Blossom**. Hidden channel under **W** passive means a basic-attack range disguise becomes a flash-engage. This is your first roam window.
- **Luden's Echo completion (~ minute 12-14):** Wave control flips. You shove and roam with disguise; bot lane is the priority because their tower is closest to the river entry.
- **Rabadon's Deathcap online (~ minute 24-28):** **R** + **Q** double bloom one-shots squishies that have not built MR. Force objective fights here.

## Common mistakes

- **Throwing E for poke without setup.** Naked **E** is a thin, slow line that gets sidestepped. Always set up with a minion in the path or a **W** clone arriving first; then **E** roots for the extended duration.
- **Casting R in the open.** A visible channel telegraphs the leap a full second early. Channel from inside a brush, behind your front line, or while disguised by **W** passive — never in the middle of a lane with vision on you.
- **Holding W for fights.** **Shapesplitter** active is also a 50% movement bonus on Neeko herself for two seconds. Use it to kite ganks, dodge skillshots, or accelerate roams; do not save it for a fight that may not happen.
- **Disguising as the wrong ally.** Pick the ally whose presence in your lane is plausible — a melee jungler showing up at level 4 is far more believable than a top laner who just respawned mid-base. Implausible disguises are read instantly.

## Advanced tip

Practice the **R**-flash. Start the **Pop Blossom** channel from outside leap range, then **Flash** at the last 0.25 seconds of the channel window. The leap fires from your post-Flash position, which extends the effective AOE radius by roughly a third. Combined with **W** passive disguise, this turns every first **R** in a teamfight into an unreactable engage.
