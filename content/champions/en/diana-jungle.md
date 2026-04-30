---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "en"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Diana jungle guide for League of Legends Patch 16.9: clear path, Scuttle and Drake timings, gank routes, AP burst build, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Every third basic attack cleaves nearby enemies for bonus magic damage. Casting any spell grants attack speed for 5 seconds — your main jungle clear engine."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Arcing skillshot that marks targets with Moonlight for 3 seconds. The mark unlocks free re-casts of R and is your gank setup tool."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Three orbiting orbs deal magic damage on contact and grant a shield. Great for dueling and taking jungle camps without dropping HP."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Targeted dash dealing magic damage. The cooldown resets when used on a target marked by Q — this fuels your gap-close combo."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Pulls in and slows nearby enemies, then explodes on Diana for area magic damage. Your only crowd control (CC) — short range, must be used inside the fight."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs hard-engage tanks (Malphite, Sejuani, Leona) — stasis dodges their CC chain after you R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs tank-heavy comps with two or more big HP frontliners (Cho'Gath, Ornn)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when one priority target buys a Magic Resist item (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Land Q from fog, dash on the marked target with E, R to pull them off their team, then W and basic-attack reset under your team's follow-up. Force fights around objectives at level 6."
  weakness: "Short effective range (E is only 825 units). Champions with strong disengage (Janna R) or peel push you off the carry; without a Q mark you have no second dash to escape."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana wins extended duels in their jungle: Pale Cascade shields one rotation of damage, then Lunar Rush resets on the Q mark for a guaranteed re-engage they cannot kite."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "Their power dips hard at level 6 while Diana's R unlocks mid-game pressure. Match their first-clear tempo and trade objectives until Luden's Echo flips the game."
    - examples: ["amumu", "rammus", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana clears faster with passive resets and reaches Scuttle Crab first. Counter-jungle the back camps after each Drake spawn — they cannot rotate in time."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "They invade at level 3 before Diana has E and shut down her clear. Their CC bypasses Pale Cascade's shield: a 1v1 in their jungle pre-6 is a free kill for them."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "Diana's R only works at melee range — these counter-engage tools knock her out of the pull window before Moonfall finishes channeling, wasting her only CC."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "They walk through Moonfall (Olaf R cleanses CC, Udyr R bypasses pull) and out-DPS Diana once her shield breaks — she has no second escape."
---

## Overview

Diana is a magic-damage diver: a melee assassin with a built-in shield, a free dash on marked targets, and one of the strongest single-button engages in the game (an engage = the action that starts a fight). In the jungle she trades early ganks for fast clears and a snowball at level 6 — a snowball is the early lead that grows over time (kill → gold → item → more kills). Once **Lunar Rush (E)** can chain a kill into a second dash, she becomes the ultimate "press R, delete the carry" pick. (A diver is a melee champion who jumps onto the back line of the enemy team.)

Her game plan as a jungler is to power through the first clear with **Pale Cascade (W)** and the **Moonsilver Blade (P)** on-hit, take the **Scuttle Crab** (the river crab that gives vision and a small speed shrine) at minute 3:30, then start ganking lanes with vision setup. After level 6, every fight near a Drake or Rift Herald is a teamfight win condition — **Moonfall (R)** pulls in priority targets and your team cleans up.

## Recommended Build

**Starting items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. The Gustwalker pet gives you out-of-combat movement speed, perfect for Diana's gank-heavy mid game. Skip Mosstomper (sustain pet) — your **W** already shields a clear cycle.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — first item burst spike (burst = high damage delivered in 1-2 seconds), AP and ability haste. The bolts shred squishy targets the moment you E onto them.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Default boots in 95% of games.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst, the HP-threshold passive (a passive that activates when the enemy is below a health threshold, in this case 35%) lines up perfectly with your **R**-into-**E** finishers.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. Your highest single-item AP slot.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into hard-engage tanks (Malphite, Sejuani, Leona). Pop the stasis active (you become invulnerable but cannot move or act for 2.5 seconds) right after you R so the enemy follow-up CC misses you.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — when the enemy team has two or more big HP frontliners (Cho'Gath, Ornn): the burn scales with their HP pool and ticks while you reposition.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a Magic Resist item (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking comps (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (crowd control: stuns, roots, charms) like Ahri charm or Lissandra R.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is the default. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vs heavy AD comps with two AD threats, or Mercury's Treads vs heavy magic CC.

**Skill order:** Max **Q** first (waveclear, extra Q damage, longer Moonlight mark window). Max **W** second (shield value and clear speed). **E** last — it gains range per rank but the cooldown reset on Moonlight is what matters, not raw scaling. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Magic Resist (or Health vs heavy poke).

## Key matchups

- **Lee Sin:** Avoid level-2 invades — his Q-Q follow-up beats your W shield. Ward your top-side blue buff and clear bot-to-top so you meet him at Scuttle with passive procs ready.
- **Graves:** You out-duel him after level 6. Engage from fog (the unwarded part of the jungle, called fog of war) with **Q** so his dash range cannot dodge the mark; once Moonlight is on him, **E** is a guaranteed gap-close (gap-close = ability that closes the distance to the enemy).
- **Elise:** Power-spike race. She wins level 3 ganks; you win the level 6 fight. Match her first-clear tempo, hover Drake with vision so she cannot solo it.
- **Jarvan IV:** Hard matchup. His E-Q knock-up cancels your **R** channel. Wait for him to commit his combo first, then E onto him for the trade. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** earlier than usual.
- **Kha'Zix:** Even matchup turning to your favor at item 2. He bursts you in melee range; bait the isolation jump with low HP, **W**-shield his Q, then E-R reset. Never path through your own jungle without ward control or you eat a free isolated jump.

## Power spikes & win conditions

- **Level 3 (Q + W + E):** Full kit online. First clear ends around 3:15 — rush to Scuttle Crab before the enemy jungler. The river vision plus 50 HP shrine sets up the rest of your map.
- **Level 6 (first Moonfall):** Mid-river skirmish power (a skirmish is a small fight, usually 2v2 or 3v3, not a full teamfight). Q from a brush, E onto the marked target, R to pull both their carries together — your laners burst the rest. The strongest level-6 pull effect in the jungle pool.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minute 9-11):** Burst spike. A clean Q-E combo on a squishy target (a champion with low defenses, like ADCs and most mages) deletes 60-70% of their HP before their team can react. Force fights around the second Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 22-25):** One-shot threshold against any squishy without a Magic Resist item. Look for picks (eliminating an isolated enemy outside the teamfight) on Baron or Elder Dragon setup vision.

## Common mistakes

- **Walking into wards on the gank approach.** Diana's only sneak tool is fog. Path through the river or back through your own jungle, and have your laner clear the lane bush ward before you commit.
- **Throwing R on the front line.** Your R pulls everyone in a 475-unit radius — pulling the tank toward your team is exactly what they wanted. Wait for the engage to develop, then R the back line (the back line = the carries who deal damage from a safe position).
- **Using E on cooldown without a Q mark.** Without Moonlight, **E** has a 14-second cooldown and a short range. Always Q first; the reset on a marked target is what makes Diana feel mobile.
- **Greeding the third camp on first clear.** If the enemy jungler is faster (Graves, Shyvana, Karthus), you lose the level 3 invade race. Cross-map check the enemy laners — if mid is missing, full-clear is a trap.
- **Over-committing to a gank without exit.** Diana has no built-in escape after E. If the lane has no slow or follow-up CC, your engage becomes a 1v3 once enemy summoners come up.

## Advanced tip

Practice the **Q-Flash-E-R** combo as a teamfight starter. With your Q in flight, Flash forward at the moment of impact: the marked target appears next to you, **E** chains immediately on the Moonlight reset, and your **R** catches their entire back line clumped on the carry. The combo wins fights you have no business winning — but it requires the muscle memory to Flash mid-Q animation, not after the projectile lands. Drill it in the practice tool against a stationary dummy until the input order is automatic.
