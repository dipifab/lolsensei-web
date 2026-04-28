---
title: "Udyr Top Build & Guide — Patch 16.9"
slug: "udyr-top"
language: "en"
patch: "16.9"
champion: "udyr"
role: "top"
last_updated: "2026-04-29"
description: "Udyr top lane guide for League of Legends Patch 16.9: starter kit, bruiser build path, key matchups, power spikes, common mistakes, and one advanced tip."
quick_learn:
  champion_dd_id: "Udyr"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Bruiser Top"
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
      description: "Shield plus next two attacks heal. Recast: bigger shield and a heal-over-time tied to your max HP. Main lane sustain tool."
      dd_spell_id: "UdyrW"
    - key: "E"
      name: "Blazing Stampede"
      description: "Movement speed; first attack on each enemy stuns. Recast: more move speed and immunity to immobilizing CC (stuns, roots)."
      dd_spell_id: "UdyrE"
    - key: "R"
      name: "Wingborne Storm"
      description: "AOE storm that damages and slows enemies near you. Recast: storm tracks the target and erupts for extra damage. Levels at 6/11/16."
      dd_spell_id: "UdyrR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1054", name: "Doran's Shield" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ hard CC champions (e.g. Lissandra + Sejuani + Leona) — tenacity shortens stuns and roots so you can still reach the back line"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when you can splitpush a side lane (push alone while four enemies hold mid) — bonus solo HP and damage let you take towers under pressure"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs heavy AP top laners (Mordekaiser, Rumble, Vladimir) — boosts the heal from your W by 25% and adds magic resist"
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs mobile AP threats (Akali, Gwen, Sylas) — magic resist plus on-hit magic damage punishes them when they dive your back line"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn) — turns AD burst into a slow bleed you can survive"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "when you need map presence to roam or splitpush — the move speed stack closes the gap on kited targets that out-pace you naturally"
  base_combo: ["E", "AA", "Q", "AA", "W", "R"]
  win_condition: "Survive lane with W sustain, scale to Trinity Force around minute 14, then snowball (turn early gold leads into kills) by side-laning and forcing 1v1 duels — your W heal outlasts most top laners."
  weakness: "Short range, no dash, no built-in disengage. Hard kiting (Quinn, Vayne, Teemo) outpaces you, and once W is on cooldown there is no second layer of survivability."
---

## Overview

Udyr is a melee shapeshifter top laner who switches between four stances — **Q**, **W**, **E**, **R** — and can recast each one inside a short window to fire an empowered version. There are no skillshots in his kit: every ability is point-and-click, so the skill expression sits in stance order, recast timing, and choosing the right trade window. In top lane he plays as a sustain bruiser: **Iron Mantle (W)** gives you a shield plus a heal-over-time that outlasts most pre-6 trades, **Blazing Stampede (E)** stuns on the first attack against each enemy and gives move speed to gap-close, and **Trinity Force** is the item that turns the kit into real kill pressure.

The game plan is straightforward: play short trades during **W**'s active, scale to Trinity Force around minute 14, then look for splitpush windows (push a side lane alone while four enemies hold mid) and 1v1 duels — your sustain wins most extended fights against other bruisers. You do not have a dash or a long-range disengage, so committing fully ("all-in" — no holding back, no escape plan) is usually the right call once **E** is up.

## Recommended Build

**Starting items:** Doran's Shield + 1 Health Potion. Doran's Blade only into ranged tops where you want to all-in early to deny CS — and even then, the shield is usually the safer pick because Udyr has no escape to bail on a failed all-in.

**Core items (in order):**

1. **Trinity Force** — bruiser core. Gives on-hit damage, attack speed, ability haste, and the Spellblade proc that fires every time you switch stance. Udyr's stance-then-attack rhythm makes this item read as if it were designed for him.
2. **Plated Steelcaps** — armor plus 12% reduced damage from auto-attacks. Default against most top laners and any AD-heavy team.
3. **Sundered Sky** — every first attack on a target below 35% HP becomes a critical strike that heals you. Synergizes with the **E** stun (your first attack on each target also stuns) and turns close 1v1s into kills.
4. **Sterak's Gage** — HP plus a lifeline shield (a passive that triggers when you take heavy damage). Buys the time to land a **W** recast and survive a burst window.

**Situational items:**

- **Mercury's Treads** — swap from Plated Steelcaps when you face 3 or more hard CC champions (e.g. Lissandra + Sejuani + Leona). Tenacity shortens stuns and roots.
- **Hullbreaker** — when you can splitpush a side lane uncontested. Bonus solo HP and damage let you take towers under pressure.
- **Spirit Visage** — into AP top lanes (Mordekaiser, Rumble, Vladimir). Boosts the heal coming from **W** by 25% and adds magic resist.
- **Wit's End** — into mobile AP threats (Akali, Gwen, Sylas). Magic resist plus on-hit magic damage punishes them when they dive your back line.
- **Death's Dance** — into squads with two strong physical damage dealers (Yasuo + Caitlyn). Turns AD burst into a slow bleed (damage spread over a few seconds) you can survive.

**Boots:** Plated Steelcaps default. Mercury's Treads only against 3+ CC champions on the enemy team.

**Skill order:** Max **Q** first for the on-hit damage and trade pattern, **W** second for lane sustain, **E** last (the stun is on the first attack regardless of points; extra ranks only shorten the cooldown). Take **R** at levels 6/11/16.

**Runes:** Primary **Resolve** with **Grasp of the Undying** (free HP and damage on every empowered attack), **Demolish**, **Conditioning**, **Overgrowth**. Secondary **Precision** with **Triumph** (heal on takedowns) and **Legend: Alacrity** (attack speed scales). Stat shards: attack speed, adaptive force, scaling HP.

## Key matchups

- **Darius:** Lane bully early. He out-trades you at level 1-2; survive with Doran's Shield, save **W** for after his **W** lands (so the recast heals through his bleed). After Trinity Force you out-sustain him 1v1.
- **Fiora:** Skill matchup decided by **W** timing. Her parry counters every stance you cast first, so open with an auto-attack to bait it, then **E**-stun and **W** to sustain through her vital procs.
- **Mordekaiser:** Slow lane into a death realm spike at 6. Trade short, save **E** recast for his **R** so the CC-immune dash drags you out of the realm. Rush Spirit Visage second item.
- **Quinn:** Your worst-feeling matchup. She kites with **Q** blind plus **E** vault. Take Teleport (instead of Ghost), give up first wave CS, and roam mid every time the wave crashes — you cannot win extended 1v1s against her.
- **Camille:** Scaling battle. Pre-6 you win with **W** sustain; once she has Divine Sunderer she out-trades you on her **E** stun. Avoid extended fights after minute 12 unless **E** recast is up to break her stun chain.

## Power spikes & win conditions

- **Level 3 (Q + W + E):** All four stances are unlocked. **E** has a stun on the first attack against each enemy — this is your first all-in window if the wave is on your side and your jungler is top-side.
- **Level 6:** **Wingborne Storm (R)** unlocks. AOE damage in skirmishes plus a recast that tracks the target. Now you can dive (go under tower for a kill) when the enemy is below half HP because the storm keeps ticking even if you back off briefly.
- **Trinity Force completion (~ minute 14):** Massive spike. Spellblade procs every stance switch, and the move speed lets you stick to kited targets. Force a side-lane fight or freeze near your tower depending on jungler position.
- **Sundered Sky online (~ minute 21-23):** With Trinity + Sundered + Sterak's, you become almost unkillable in 1v1s. Look for picks (eliminating an isolated enemy out of teamfight) on the side lanes around drake and baron timers.

## Common mistakes

- **Forgetting to recast.** Every stance has a recast window where the empowered version fires for free. Without recasts you are playing 4 abilities; with recasts you are playing 8. Drill the rhythm: cast → 2 attacks → recast → 2 more attacks.
- **Burning E stun on the wave.** **E**'s first attack on each target stuns. If you walk into the lane and auto-attack a minion first, you waste the stun on a 50-gold creature. Always open with **E** on the champion you want to kill.
- **Greedy all-ins pre-Trinity Force.** Before your first item you are a stat-stick with no burst. If the lane is not pre-frozen near your tower, hold the trade and farm. The spike at minute 14 is what wins you the matchup, not a level-3 cheese.
- **Building pure tank.** Udyr wants the bruiser stat sheet (HP + attack damage + ability haste + on-hit). Pure armor stacks like Frozen Heart make you tanky but useless in a 1v1 — you cannot kill anything in a side-lane duel.
- **Splitpushing without vision.** Without river and tri-bush wards, a 4-man collapse from the enemy team turns your splitpush into a free kill for them. Always drop a Control Ward on the enemy side of the lane before you commit to the push.

## Advanced tip

Practice the **W-into-E recast bait**. Open a trade with **W** first stance to absorb the enemy's opening burst, then immediately cast **E** and recast it the moment the enemy fires their CC at you — the recast grants immunity to immobilizing CC for its duration, and the move speed lets you stick to them while their burst window is on cooldown. Most top laners commit their stun or root expecting you to be locked in place; eating the cast through the recast window swings the trade by roughly one full ability rotation in your favor.
