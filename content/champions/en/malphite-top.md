---
title: "Malphite Top Build & Guide — Patch 16.9"
slug: "malphite-top"
language: "en"
patch: "16.9"
champion: "malphite"
role: "top"
last_updated: "2026-04-29"
description: "Malphite top lane guide for League of Legends Patch 16.9: tank build path, key matchups, R engage power spikes, common mistakes, and one closing advanced tip."
quick_learn:
  champion_dd_id: "Malphite"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Granite Shield"
      description: "Out-of-combat shield up to 10% of Malphite's max HP. Recharges after a few seconds without taking damage."
      dd_spell_id: "Malphite_Passive"
    - key: "Q"
      name: "Seismic Shard"
      description: "Targeted shard that deals magic damage and slows the enemy. Malphite steals the slow amount as Move Speed for the same duration."
      dd_spell_id: "MalphiteSeismicShard"
    - key: "W"
      name: "Thunderclap"
      description: "Passive: bonus Armor (tripled while Granite Shield is up). Active: empowers next basic attack with bonus damage and a frontal aftershock."
      dd_spell_id: "MalphiteObduracy"
    - key: "E"
      name: "Ground Slam"
      description: "AOE around Malphite (area of effect: damage on a zone, not a single target). Magic damage scales with Armor and slows enemy Attack Speed."
      dd_spell_id: "MalphiteLandslide"
    - key: "R"
      name: "Unstoppable Force"
      description: "Long-range unstoppable dash. Knocks up enemies in a small AOE on impact and deals magic damage. Cannot be interrupted."
      dd_spell_id: "MalphiteUFSlash"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3068", name: "Sunfire Aegis" }
    - { dd_id: "3110", name: "Frozen Heart" }
    - { dd_id: "3075", name: "Thornmail" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3084"
      name: "Heartsteel"
      against: "first item vs heavy bruiser/tank lanes (Sett, Darius, Mundo) when you can stack HP safely under tower"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap boots vs AP-heavy enemy team (3+ magic damage threats) or heavy hard CC chains"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "vs kite-heavy team comps when you need extra Move Speed to land R from longer range"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "vs crit-stacking carries (Yasuo + Caitlyn, Tryndamere top): cuts critical strike damage"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs double-AP comps (two strong magic damage dealers, e.g. Brand + Syndra) for layered Magic Resist"
  base_combo: ["R", "W", "AA", "E", "Q"]
  win_condition: "Land R on 2+ enemies in a teamfight to start the engage on your terms; follow up with W-empowered AA and E to lock the back line in place while your team cleans up."
  weakness: "No mobility outside R — once your ultimate is on cooldown you are a slow, predictable target. Percent-HP true damage and grievous wounds shred your tank stats faster than you can stack HP."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere", "irelia"]
      archetype: "Auto-attack reliant carries"
      reason: "Ground Slam cuts their Attack Speed by a large amount and Granite Shield eats their first burst window. Their damage profile flatlines while you scale into a frontline that ignores their kit."
    - examples: ["jinx", "kog-maw"]
      archetype: "Immobile or short-range marksmen on enemy team"
      reason: "Even though you draft top, R is a long-range hard engage that deletes ADCs (the main ranged damage dealer of a team) without dashes. A clean R into their backline ends the teamfight before it starts."
    - examples: ["riven", "camille"]
      archetype: "Snowball bruisers without ranged poke"
      reason: "They need to commit to a melee all-in (full trade until kill) to win lane; Aftershock plus Granite Shield turns their burst window into a tank stat boost while you scale to your R spike."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Ranged top laners with kite tools"
      reason: "They poke from outside your auto-attack range and disengage your R with their own mobility (Vayne tumble, Kennen lightning rush, Gnar form swap). You lose the lane phase before R is online at level 6."
    - examples: ["fiora", "trundle"]
      archetype: "Percent-HP true damage duelists"
      reason: "Their kit ignores Armor and Magic Resist — Fiora vitals deal true damage, Trundle pillar plus W shred your tank stats. Stacking defenses does not solve the duel."
    - examples: ["singed", "teemo"]
      archetype: "Anti-melee specialists with poison or proxy"
      reason: "They never let you land an auto-attack to proc Thunderclap and out-sustain your trades with poison ticks. Lane phase becomes a waste of mana before R unlocks."
---

## Overview

Malphite is a tank with one of the most threatening engage ultimates in the game. His kit is simple by design: stack Armor with **Thunderclap (W)** and **Ground Slam (E)**, soak up burst with **Granite Shield (P)**, then launch a long-range **Unstoppable Force (R)** to start a teamfight on your terms. Top lane suits him because the side lane gives him space to scale safely against melee fighters while his R waits to flip mid-game skirmishes around dragon and Rift Herald.

His game plan is straightforward: survive the early lane phase by farming with **E**, hit level 6, and then look for any chance to **R** into 2+ enemies grouped at an objective. Skill expression is not in mechanics but in timing — picking the right moment to spend your R turns a 5v5 into a wombo combo (full team follow-up engage). Splitpush (pushing a side lane alone) is not Malphite's plan: stay grouped with your team so your R unlocks their damage.

## Recommended Build

**Starting items:** Doran's Shield + 1 Health Potion. Pick Doran's Ring instead only if going the rare AP burst variant.

**Core items (in order):**

1. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — early Armor and reduced auto-attack damage. Default top-lane boots into AD opponents.
2. ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — HP, Armor, and a damage aura that helps you waveclear and trade in lane.
3. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — massive Armor plus Mana for E spam and an Attack Speed slow aura that stacks with your **E** debuff.
4. ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — vs auto-attack carries. Reflects damage and applies grievous wounds (cuts enemy healing) on hit.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — Magic Resist, HP, and amplified healing/shielding from any source (Granite Shield included).

**Situational items:**

- ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — first item alternative vs heavy bruiser/tank lanes when you can safely stack HP under tower.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap vs AP-heavy enemy team or heavy hard CC chains (multiple stuns/roots).
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — vs kite-heavy comps when you need extra Move Speed to close R range from longer distance.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — vs crit-stacking carries (Yasuo + Caitlyn, Tryndamere): the passive cuts critical strike damage taken.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs squads with two strong magic damage dealers (e.g. Brand + Syndra) for layered Magic Resist.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default into AD lanes. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has 3+ AP threats or heavy hard CC.

**Skill order:** Max **E** first (main waveclear, scales with Armor, key Attack Speed slow in trades), **Q** second (slow plus self Move Speed for engage and escape), **W** last (ranks 1 and 2 give the best Armor return; the active is mostly used at rank 1 for the empowered AA after **R**). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock** (extra resists for a few seconds when you R-engage and immobilize a target), **Bone Plating** (eats 3 short-trade hits per cooldown), **Conditioning** (late-game Armor and Magic Resist scaling), **Overgrowth** (raw bonus HP that scales with the minions you absorb in lane). Secondary **Precision** with **Triumph** (HP back on every kill or assist) and **Coup de Grace** (bonus damage on low-HP targets, helping your post-R cleanup).

There is a niche AP-burst variant: ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** → ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** → ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** → ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, with **Electrocute** keystone instead of **Aftershock**. Takes much more skill to pilot because you give up the tank stats — only run it if your team already has two front line tanks.

## Key matchups

- **Darius:** Stay back from his **Q** edge for the first 4 levels and farm with **E**. His all-in (full trade until kill) is brutal pre-6 — wait for ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** before answering trades. After level 6, **R** beats his **E** pull range.
- **Vayne:** Hard counterpick. She kites you (moves backward while attacking, keeping distance) the entire lane phase. Stack ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** early, ask jungler for level-3 gank pressure, and group with team after first back — solo splitpush against her does not work.
- **Camille:** Even matchup. Bait her **E** by hugging the wave; once she misses the second cast, all-in with **R-W-AA-E-Q**. Don't engage with R while her **W** shield is up.
- **Sett:** Survivable. **E** Attack Speed slow neutralizes his auto-attack burst (his big right-hand swing relies on hitting fast). Keep him under 50% HP cautiously: his **R** deals true damage (damage that ignores Armor and Magic Resist) scaling on your missing HP, so stacking ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** for healing amp doesn't save you from the execute window.
- **Renekton:** Hard early game. He bullies you out of CS until level 5-6. Take Doran's Shield + 1 Potion start, max **E** safely under tower, recall on first ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** components. Once you hit level 6 and have ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis**, the matchup flips.

## Power spikes & win conditions

- **Level 6:** **Unstoppable Force** unlocks. From this point, every river skirmish or dragon spawn is a potential R engage. Walk to fog of war (the unwarded part of the map) on the river side and look for a flash-R pickoff (eliminating an isolated enemy out of position).
- **![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) Sunfire Aegis completion (~ minute 12-14):** You can soak minion damage, dive under tower with R, and survive 2-3 tower shots. First major teamfight power spike.
- **2 tank items + boots (~ minute 22-25):** Mid-game peak. Aftershock plus 2 resist items plus Granite Shield turns your R engage into a guaranteed survival window — even diving 1v3 you usually live to escape.
- **Late game (3-4 items, ~ 30+ minutes):** Pure utility frontline. You will not carry damage; your value is locking 2+ enemies in place with R while your carries clean up the fight.

## Common mistakes

- **Solo splitpushing in a side lane.** Splitpushing means pushing a side lane alone to force the enemy to respond. Malphite has no escape outside R, and once you blow R on a 1v1 your team is 4v5 in the main fight. Stay grouped.
- **R-flashing into a single squishy.** Spending R on one target is a tempo loss when you could hit 2-3 with proper positioning. Wait until the enemy team groups for an objective; if you only see one isolated target, save R for the bigger payoff.
- **Maxing W first.** New players see "Armor passive on W" and max it for tankiness. **E** scales harder with Armor, gives a bigger AOE damage and Attack Speed slow, and is your real waveclear. Max E first, always.
- **Not using Granite Shield in lane trades.** **Granite Shield (P)** recharges out of combat — start every trade with it up. Walking into harass with the shield already broken wastes 10% effective HP.
- **Using R as escape.** R is unstoppable but costs a 100-second cooldown. Saving it as a panic flee turns a defensive R into a dead R. Use R to engage on your terms; for escapes, your **Q** Move Speed steal is the answer.

## Advanced tip

Practice the **R-flash** combo: cast **R** first, then **Flash** mid-dash. The flash retargets your dash to wherever your cursor moves, which means you can land **R** on enemies that thought they were safely positioned behind a wall or in fog of war. Combined with a vision ward in the enemy jungle, this turns a 50/50 teamfight into a guaranteed engage on a backline target — the highest-impact play Malphite has in his entire kit.
