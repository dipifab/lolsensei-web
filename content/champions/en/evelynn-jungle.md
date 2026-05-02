---
title: "Evelynn Jungle Build & Guide — Patch 16.9"
slug: "evelynn-jungle"
language: "en"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Evelynn jungle guide for League of Legends Patch 16.9: Demon Shade Camouflage gank path, Lich Bane core build, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Out of combat, Evelynn enters Demon Shade. Heals at low HP and grants Camouflage from level 6 — invisible to wards and to enemies beyond a small radius."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Evelynn's Lasher strikes the nearest enemy, then she fires up to three follow-up spike volleys at nearby targets. Main jungle clear and DPS in combos."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Curses a target enemy. After a delay, Evelynn's next attack or spell charms them and shreds magic resist. Cast it from Demon Shade for the cleanest setup."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dashes onto a target dealing magic damage and giving brief move speed. From Demon Shade it becomes a long lunge with bonus damage and an autoattack reset."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Brief untargetable window, then a cone of massive magic damage in front of her before blinking backwards. Bonus damage to enemies under 30% HP — your execute."
      dd_spell_id: "EvelynnR"
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
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "when 2+ enemies build any Magic Resist item — replaces a slot for percentage magic penetration that scales with their MR"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs single-target lockdown that punishes your R animation (Veigar cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo, Aatrox) — applies Grievous Wounds, halves heals"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pick off isolated enemies post-6 with W charm into R execute. Use Demon Shade Camouflage to invade and gank without vision warning. Snowball jungle gold lead and target the squishies in skirmishes."
  weakness: "Pre-6 zero ganking pressure — no Camouflage, no charm range. Hard countered by Control Wards and lane prio. If enemies group with peel, you cannot reach the carry."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Dark Harvest snowballs from isolated picks — Evelynn's game plan. Sudden Impact procs after R warp and W charm for extra burst. Sixth Sense reveals enemy wards so Demon Shade Camouflage stays useful. Ultimate Hunter cuts R cooldown for more picks."
    secondary_rationale: "Sorcery secondary over Inspiration or Resolve: Evelynn needs raw AP scaling to one-shot the carry, not utility. Manaflow Band sustains mana for Q spam in jungle clear, Gathering Storm adds free AP every 10 minutes for the late-game W+R one-shot."
    secondary_alternative: "If the enemy team has 4+ squishy targets and weak peel, swap Sorcery to Precision with Presence of Mind (mana refund on takedown) and Coup de Grace (+8% damage under 40% HP) to chain executes faster."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Immobile hyper-carries"
      reason: "Carries with no dash or blink die instantly to W charm into R: they have no tool to leave the cone of your untargetable warp before it lands."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Backline healers with no escape"
      reason: "Once you reach their back line via Demon Shade Camouflage, these enchanters die to one W+R before they can cast their defensive kit."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Slow farming junglers"
      reason: "Junglers that want to farm and scale: Evelynn invades, steals camps, and ganks with Camouflage post-6, forcing them to defend instead of scaling."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Early-game lethality duelists"
      reason: "Lee Sin's Q and Rengar's leap close gaps before level 6 — when Evelynn has no Camouflage and no R, she loses pre-6 invades and 1v1 trades outright."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanters that peel the carry"
      reason: "Lulu R makes the carry invulnerable, Tahm Kench eats them, Morgana E gives Spell Shield: each one cancels the W+R combo at the exact moment it should kill."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Vision-heavy supports with engage CC"
      reason: "They buy a Control Ward on first back, see you in Demon Shade in lane, and chain CC (Nautilus Q, Leona E+R) lands before your W charm comes off."
---

## Overview

Evelynn is the only champion in League with a built-in stealth that scales by level: from level 6 her **Demon Shade (P)** passive grants Camouflage out of combat, meaning enemies cannot see her unless they are inside a small radius around her — even Control Wards (the special pink trinkets enemies place to reveal stealth) do not detect her at full distance. Her whole identity sits on this. She is a magic damage assassin with no real waveclear or duel power before 6, but the moment **Last Caress (R)** is unlocked she becomes the single most reliable pickoff jungler in the game (a champion built to eliminate one isolated enemy at a time, away from full teamfights): walk invisibly into the enemy back line (the rear of the formation where the squishy carries — high-damage, low-defense champions — usually stand), charm the carry with **Allure (W)**, and delete them in one combo before any peel (allies' abilities that protect the carry, like Janna shield or Lulu ult) can react.

The game plan is brutal in its simplicity: farm to 6 without dying, look for a gank on a low-HP lane that has no nearby vision wards (small invisible eyes allies place to see fog of war), and from then on hunt one isolated target every time **R** is up. Skill expression sits in path-reading (where can you walk Camouflaged without tripping a ward?) and in commit timing (do not commit, i.e. fully engage, with **R** if the carry has a peel summoner like Cleanse or a peeler like Lulu nearby). If you snowball the first two picks (turn an early lead into more kills, more gold, more items), the enemy team groups up, you scale (gain power as items and levels accumulate) into one-shot range with ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, and you close the game from invisibility.

## Recommended Build

**Starting items:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Standard melee jungle starter — no exception for Evelynn.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Emberknife (auto-evolves around minute 3-4 once the jungle pet has eaten enough monsters). The companion for AP (Ability Power, the stat that scales magic damage) burst: adds a magic damage effect that triggers (a "proc") on the autoattack right after a spell, lining up perfectly with **Lich Bane** later.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Evelynn's signature spike. Every time you cast a spell your next basic attack adds a huge bonus magic damage hit, and **W**'s charm + **E**'s autoattack reset (an effect that lets you fire a fresh basic attack immediately, ignoring the normal attack-speed delay) means you can chain two **Lich Bane** procs in under a second.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (subtracts a fixed amount of the target's magic resistance, making your spells hit harder). Standard for any AP burster targeting squishies.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra AP and magic penetration; the HP-threshold passive (passive that activates when the target is below a low-HP cutoff, around 35%) lines up exactly with the cone of your **R** execute.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier on all your AP. The fourth or fifth item slot is where Evelynn flips into "one-shot the carry from full HP" range.

**Situational items:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment 2 or more enemies build any magic resist item.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs single-target lockdown (Veigar cage, Lissandra R, Malzahar R). Stasis covers the recovery frames after **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo, Aatrox). Applies Grievous Wounds, halving incoming healing.

**Boots:** Sorcerer's Shoes is the default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable only when the enemy team has very low magic resist and your team needs more **R** uptime (more frequent casts) as a fight finisher.

**Skill order:** Max **Q** first (jungle clear and main DPS), **E** second (mobility and reset damage scale), **W** last (the cooldown matters more than the rank). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Gathering Storm**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling. Swap secondary to **Precision** (Presence of Mind + Coup de Grace) when the enemy team is mostly squishy and you want execute consistency.

## Key matchups

- **Lee Sin / Rengar (enemy jungle):** Pre-6 invade threats. Do not contest scuttle level 3 — track them with vision and full clear safely. Once you hit 6 the matchup flips: you walk into their jungle Camouflaged and gank lanes they have not warded.
- **Lulu (enemy support):** The hardest peel in the game for an assassin. Burn her **R** with a fake commit (start your **W** charm but back off if she ults), then re-engage on the target once Lulu's ult is on cooldown.
- **Tahm Kench (enemy support):** He eats the carry with **W** the instant your **R** lands. Wait for him to use **W** on something else (a minion wave, an engage tank), then commit. If he is full mana and looking at his ADC, find a different target.
- **Karthus (enemy jungle):** Scaling race. He out-farms you, you out-pick him. If Karthus reaches level 16 with full items you lose: force ganks every minute his **R** is down to deny scaling and end the game by minute 30.
- **Pyke (enemy support):** Hard counter to your typical "low-HP execute" pattern. His **R** also executes at low HP, and his roams put your jungle paths under vision pressure. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** earlier than usual to dodge his execute window after you commit.

## Power spikes & win conditions

- **Level 6 (first R unlock):** Your real game starts here. Demon Shade gains Camouflage, **R** unlocks, and any lane without vision wards (the small invisible eyes allies place to see fog of war) is a free kill. Path toward the lane that has the lowest enemy HP.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 12-14):** The jump from "needs 2 spells to kill" to "kills with one W+AA+E+Q+R combo on a squishy" happens at this exact item. Hunt picks the moment it finishes.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ minute 18-20):** The HP-threshold passive lines up with your **R** execute cone. After this item, any squishy under 60% HP is dead in one combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30):** Full one-shot range on backline carries from 100% HP. Force a 5v5 around Baron once Deathcap finishes — your team starts the fight 5v4 the moment your combo lands.

## Common mistakes

- **Ganking pre-6 because your team pings.** You have no charm range, no Camouflage, and nothing to surprise the enemy with. Pre-6 you farm and look for counter-jungle on enemies you outlevel. Tell your laners: "I gank at 6."
- **Casting W from outside Demon Shade.** When you are visible (in combat or low HP), the enemy sees the **W** cast and can pre-flash the charm. Always set up the gank by walking in from Camouflage, then **W** them at 1100+ range.
- **Using R for damage instead of execute.** **R** does bonus damage under 30% HP. Burning it on a full-HP target wastes the spike — open with **W+E+Q** combo, then **R** the moment they cross the execute threshold.
- **Tunnel vision on the kill.** **R** warps you a long distance backwards after the cast. If you are in the middle of the enemy team when you press it, you warp into nothing useful. Position so the warp pulls you toward your team or toward fog of war (the unwarded jungle area), not deeper into enemies.
- **Refusing to back when full HP.** Demon Shade out of combat heals you slowly even from full mana. If you have 1300+ gold for a damage component like ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** or a mana component like ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, back. Rotating with full HP and 0 gold is wasted time.

## Advanced tip

The ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** double-proc combo: after the **W** charm lands, animation-cancel an autoattack into **E** (Whiplash from Demon Shade has a built-in autoattack reset). The order is **W → AA → E → AA → Q → R**. Each of the two autoattacks consumes a fresh **Lich Bane** proc because **E** counts as a spell cast and resets your autoattack timer. On a squishy without magic resist this combo deals roughly 1.5x the damage of the lazy **W → R** opener that most low-rank Evelynn players use, and lets you delete a 1800-HP carry from full HP at 3 items instead of needing 4.
