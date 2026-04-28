---
title: "Udyr Jungle Build & Guide — Patch 16.9"
slug: "udyr-jungle"
language: "en"
patch: "16.9"
champion: "udyr"
role: "jungle"
last_updated: "2026-04-29"
description: "Udyr jungle guide for League of Legends Patch 16.9: starter kit, bruiser build path, key matchups, power spikes, common mistakes, and one advanced tip."
quick_learn:
  champion_dd_id: "Udyr"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver Jungle"
  abilities:
    - key: "P"
      name: "Bridge Between"
      description: "Each ability is a stance. Recast within a window to fire its empowered version. After any ability, the next two attacks gain attack speed."
      dd_spell_id: "Udyr_Passive"
    - key: "Q"
      name: "Wilding Claw"
      description: "Attack speed buff; next two attacks deal bonus physical damage. Recast: more attack speed and lightning bolts on the target."
      dd_spell_id: "UdyrQ"
    - key: "W"
      name: "Iron Mantle"
      description: "Shield plus next two attacks heal. Recast: bigger shield and a heal-over-time tied to your max HP. Main sustain tool."
      dd_spell_id: "UdyrW"
    - key: "E"
      name: "Blazing Stampede"
      description: "Movement speed; first attack on each enemy stuns. Recast: more move speed and immunity to immobilizing CC (stuns, roots)."
      dd_spell_id: "UdyrE"
    - key: "R"
      name: "Wingborne Storm"
      description: "AOE storm that damages and slows enemies near you. Recast: storm tracks targets and erupts for extra damage. Levels at 6/11/16."
      dd_spell_id: "UdyrR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ hard CC champions (e.g. Leona + Sejuani + Lissandra) — tenacity shortens stuns and roots so you can still reach the back line"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn) — turns AD burst into a slow bleed you can survive"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs heavy AP threats (Brand jungle, Karthus, Lillia) — boosts the heal from your W and the magic resist saves you from burst"
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs mobile AP carries (Akali, Diana, Ekko) — magic resist plus on-hit magic damage punishes their dive into your back line"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when you can splitpush a side lane uncontested — solo HP and damage scaling lets you take towers while four enemies hold mid"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "when the team needs more skirmish DPS — the ability haste lets you cycle stances faster in extended fights"
  base_combo: ["E", "AA", "Q", "AA", "W", "R"]
  win_condition: "Snowball through level 3 ganks and a strong jungle clear. Once Trinity Force comes online (~minute 14), pick skirmishes around objectives — your W heal plus E stun let you outlast most junglers 1v1."
  weakness: "Short range, no dash, no built-in disengage. Heavy kiting (Caitlyn, Vayne, Yasuo Wind Wall) outpaces you, and once W is on cooldown there is no second layer of survivability."
---

## Overview

Udyr is a melee shapeshifter jungler who switches between four stances — **Q**, **W**, **E**, **R** — and can recast each one inside a short window for an empowered version. There are no skillshots in his kit: every ability is point-and-click, so the skill expression sits in stance order, recast timing, and choosing the right gank window. He clears the jungle quickly, ganks reliably from level 3 onward thanks to the **E** stun on the first attack, and trades stat-for-stat with most other junglers once Trinity Force comes online.

The game plan is simple to describe: full clear into a level 3 gank, scale into Trinity Force, then look for skirmishes around objectives where your healing on **W** outlasts the enemy jungler. You do not have a dash or a long-range disengage, so committing fully ("all-in" — no holding back, no escape plan) is usually the right call once **E** is up.

## Recommended Build

**Starting items:** Gustwalker Hatchling jungle pet plus Refillable Potion. Gustwalker gives you out-of-combat move speed for faster clears and quicker ganks; pick Mosstomper Seedling instead only if you expect to be invaded constantly.

**Core items (in order):**

1. **Trinity Force** — bruiser core. Gives you on-hit damage, attack speed, ability haste, and the Spellblade proc that scales perfectly with Udyr's stance-then-attack pattern.
2. **Plated Steelcaps** — armor plus 12% reduced damage from auto-attacks. Standard against most enemy junglers and any AD-heavy team.
3. **Sundered Sky** — every first attack on a target below 35% HP becomes a critical strike that heals you. Synergizes with the **E** stun (your first attack on each target also stuns) and turns close 1v1s into kills.
4. **Sterak's Gage** — HP plus a lifeline shield that triggers when you take heavy damage. Buys you the time to land a **W** recast and survive a burst window.

**Situational items:**

- **Mercury's Treads** — swap from Plated Steelcaps when you face 3 or more hard CC champions (e.g. Leona + Sejuani + Lissandra). Tenacity shortens stuns and roots.
- **Death's Dance** — against squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn). It turns physical burst into a slow sanguinamento (passive on-hit damage spread over the next seconds) that you can survive.
- **Spirit Visage** — against heavy AP threats (Brand jungle, Karthus, Lillia). It boosts the heal coming from **W** by 25% and adds magic resist.
- **Wit's End** — against mobile AP carries (Akali, Diana, Ekko). Magic resist plus on-hit magic damage punishes them when they dive your back line.
- **Hullbreaker** — when you can splitpush (push a side lane alone while four enemies hold mid). Bonus solo damage and HP let you take towers under pressure.

**Skill order:** Max **Q** first for jungle clear and on-hit damage, **E** second for the stun cooldown, **W** last. Take **R** at levels 6/11/16.

**Runes:** Primary **Resolve** with **Grasp of the Undying** (free HP per stack), **Demolish**, **Conditioning**, **Overgrowth**. Secondary **Precision** with **Triumph** (heal on takedowns) and **Legend: Alacrity** (attack speed scales). Stat shards: attack speed, adaptive force, scaling HP.

## Key matchups

- **Lee Sin:** Skirmish race. He out-trades you at level 2, you out-trade him at level 3 once **E** stun is online. Track his cooldowns; if his **Q** is down, you win the duel.
- **Master Yi:** He scales harder than you do but he is fragile pre-3 items. Invade his red buff on the second clear, gank his lane every time **E** is up, deny him farm. If he reaches Bork + Phantom Dancer with even gold, the lane is lost.
- **Hecarim:** He outpaces you with **R** (Onslaught of Shadows). Do not chase him into the fog of war. Wait for him to engage on your team, then **E**-stun and burst him while his **R** is on cooldown.
- **Graves:** Tough early matchup — his **R** kites you and his **W** smoke screen denies your auto-attacks. Wait for level 6, dodge his **R**, then commit with **E** stun and **R** AOE.
- **Warwick:** Mirror bruiser duel decided by W usage. Your shield plus heal is bigger than his sustain. Save **W** for after his fear lands, not before — the recast value is wasted if you pop it under no pressure.

## Power spikes & win conditions

- **Level 3 (after first clear):** All four stances are unlocked. **E** has a stun on the first attack against each enemy — this is your first gank window. Path raptors → red → first scuttle → mid or top gank.
- **Level 6:** **Wingborne Storm (R)** unlocks. AOE damage in skirmishes plus a recast that tracks targets. Now you can dive (go under tower for a kill) two-versus-one because the storm chunks both targets.
- **Trinity Force completion (~minute 14):** Massive spike. Spellblade procs every stance switch, and the move speed lets you stick to kited targets. Force objective fights here.
- **Sundered Sky online (~minute 21-23):** With Trinity + Sundered + Sterak's, you become almost unkillable in 1v1s. Look for picks (eliminating an isolated enemy out of teamfight) on the side lanes around drake and baron timers.

## Common mistakes

- **Forgetting to recast.** Every stance has a recast window where the empowered version fires for free. Without recasts you are playing 4 abilities; with recasts you are playing 8. Drill the rhythm: cast → 2 attacks → recast → 2 more attacks.
- **Greedy ganks pre-Trinity Force.** Before your first item you are a stat-stick with no burst. If the lane is not pre-frozen near your tower, leave it. Path to objectives or counter-jungle instead.
- **Burning E stun on the wave.** **E**'s first attack on each target stuns. If you walk into the lane and auto-attack a minion first, you waste the stun on a 50-gold creature. Always open with **E** on the champion you want to kill.
- **Building pure tank.** Udyr wants the bruiser stat sheet (HP + attack damage + ability haste + on-hit). Pure armor stacks like Frozen Heart make you tanky but useless in a 1v1 — you cannot kill anything.
- **Ulting a single target without a recast plan.** **R** plus its recast is your biggest damage window. Pressing **R** once and walking away leaves half its damage on the table.

## Advanced tip

Practice the **Q-W double recast** in extended fights. Open with **Q** on the target, weave two attacks, recast **Q** for the lightning bolts; in the same window pop **W** before the recast expires, weave two more attacks, recast **W** for the heal-over-time. This pattern stacks roughly four seconds of empowered on-hit damage with a full HP bar of sustain — most junglers cannot win that exchange even with a small gold lead on you.
