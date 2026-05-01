---
title: "Viego Jungle Build & Guide — Patch 16.9"
slug: "viego-jungle"
language: "en"
patch: "16.9"
champion: "viego"
role: "jungle"
last_updated: "2026-04-29"
description: "Viego jungle guide for League of Legends Patch 16.9: starter kit, AD bruiser core build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Viego"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Sovereign's Domination"
      description: "When an enemy champion dies near Viego, their body becomes a wraith. Attacking the wraith lets Viego possess that body for a few seconds — he heals, gets their basic abilities, and can cast his own R for free."
      dd_spell_id: "Viego_Passive"
    - key: "Q"
      name: "Blade of the Ruined King"
      description: "Passive: autos deal bonus current-HP damage. The first auto on a target recently hit by an ability strikes twice and heals. Active: a short forward thrust that damages enemies in front."
      dd_spell_id: "ViegoQ"
    - key: "W"
      name: "Spectral Maw"
      description: "Charged dash: hold to slow yourself and gather mist, release to dash forward and stun the first enemy hit. Longer charge means longer stun, up to a hard cap."
      dd_spell_id: "ViegoW"
    - key: "E"
      name: "Harrowed Path"
      description: "Sends mist toward the first wall hit, surrounding it. Inside the mist Viego gets camouflage (invisible unless an enemy walks very close), bonus move speed and bonus attack speed."
      dd_spell_id: "ViegoE"
    - key: "R"
      name: "Heartbreaker"
      description: "Drops any current possession, teleports a short distance, and executes the lowest-HP enemy champion on arrival with bonus missing-HP damage. Knocks back nearby enemies."
      dd_spell_id: "ViegoR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs kite-heavy comps (Caitlyn, Vayne, Kalista) — active dash plus slow locks them down once you commit"
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs heavy AP comps (Karthus, Brand, Lissandra) — magic resist plus on-hit magic damage"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs single-target AP burst (Veigar, LeBlanc, Syndra) — magic shield triggers under 30% HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Aatrox, Dr. Mundo) — Grievous Wounds on hit"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "when ahead and being focus-fired — second life lets you re-engage with R after they blow cooldowns"
  base_combo: ["E", "W", "AA", "Q", "R"]
  win_condition: "Get a kill or assist by minute 6 with a W stun gank, then snowball through possessions: every dead enemy is a free second character that you take over for a few seconds. Force a fight every time R is up."
  weakness: "No long-range tools and no built-in escape: if W misses or gets canceled, Viego is stuck in melee with no answer to peel. Hard CC chains delete him because he cannot spend his R until he reaches a target."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Squishy ranged junglers without hard CC"
      reason: "Viego closes the gap with Harrowed Path camouflage plus a Spectral Maw stun. Once he is in melee they have no peel and his Q execute pattern shreds them in one rotation."
    - examples: ["amumu", "zac", "rell"]
      archetype: "Tank junglers without sustained damage"
      reason: "Tanks engage and then look for follow-up; Viego fights through their CC by stunning back with W and out-trading with the heal on Q. They cannot kill him before he kills their carry."
    - examples: ["yasuo", "yone", "samira"]
      archetype: "Allied teamfight carries he can possess"
      reason: "Possessing a fed enemy carry doubles your impact — Viego is at his strongest when team comps offer juicy carries to take over after a kill. Pick him into team comps with squishy late-game threats."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Strong early-invade junglers"
      reason: "Viego's first clear is slow and his level 3 duel is mediocre; these junglers walk into his jungle, kill him before he hits Kraken Slayer, and remove the snowball window his kit needs."
    - examples: ["malzahar", "warwick", "skarner"]
      archetype: "Point-and-click suppress or hard CC"
      reason: "Suppress (a special CC that cannot be cleansed by most spells) and long-duration root abilities lock Viego in place before his W can fire. Without the stun he has no engage tool and no escape."
    - examples: ["jax", "fiora", "tryndamere"]
      archetype: "Late-game 1v1 monsters"
      reason: "Viego's power is concentrated in the early-mid game; if the enemy team has a top laner who out-scales him 1v1 at four items, every side-lane skirmish (= a small fight, usually 1v1 or 2v2) bleeds him without the possessions he needs to snowball."
---

## Overview

Viego is a fighter assassin (= a melee champion who builds enough damage to delete a single carry but enough survival to live a short fight) whose kit is built around one mechanic: when an enemy champion dies near him, their body becomes a wraith. Attack the wraith and you possess (= temporarily take control of) the dead enemy's body for a few seconds — Viego heals for a chunk of their max HP, gets to cast their basic abilities (Q, W, E) and items, and replaces their R with a free cast of his own **Heartbreaker (R)**. The possession is the entire reason he exists: every kill is a second character you get to use right after.

His game plan is to gank early with the **Spectral Maw (W)** stun, get an item lead by minute 12, and force a fight every time **R** is up so the cycle "kill → possess → take a second target → R the lowest-HP enemy" can roll. He is not a scaling champion (= one who gets stronger as the game gets longer): if the early game stalls, the enemy team's mages out-range him and his possessions never trigger.

## Recommended Build

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper is the jungle starter that gives you the most defensive stats early — exactly what Viego wants for a healthy first clear and a survivable level 3 gank. The starter also boosts **Smite** (the summoner spell every jungler takes — a quick burst attack on a single target, used both to clear monsters faster and to steal objectives from the enemy team).

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — every third basic attack adds bonus physical damage on-hit. It pairs with the bonus current-HP hits from his Q passive: chunks of HP melt off champions even when they build defenses.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor and a percent reduction on incoming basic attacks. Default boots into most teams since you fight in melee range and eat auto-attacks all fight.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns part of the physical damage you take into a slow bleed (= damage spread out over the next few seconds instead of all at once). Gives you time to react when a single burst (= a lot of damage delivered in 1-2 seconds) would otherwise kill you.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — bonus HP and a big shield that triggers automatically when you drop low. The shield buys the second or two Viego needs to land **R** on a low-HP target.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (= you heal for a percentage of the damage you deal) and an overheal shield (= extra healing past full HP turns into a temporary shield). Lets you stay in melee through extended team fights.

**Situational items:**

- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — into kite-heavy compositions (kite = enemies who back away while still attacking; e.g. Caitlyn, Vayne, Kalista). The active dashes you forward and slows them so your stun and Q can land.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — into heavy AP compositions (AP = champions whose damage is mostly from spells, not auto-attacks; e.g. Karthus, Brand, Lissandra). Magic resist plus on-hit magic damage swap, replacing Bloodthirster.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into single-target AP burst (Veigar, LeBlanc, Syndra). The shield triggers automatically below 30% HP and absorbs a chunk of incoming magic damage.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — into healing-stacking comps (Soraka, Aatrox, Dr. Mundo, Vladimir). Applies Grievous Wounds (= a debuff that cuts the target's healing in half) on every auto.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when you are ahead and the enemy team focus-fires you on engage. The second life means you can re-enter the fight with **R** after their cooldowns are spent.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is default into auto-attack heavy teams. Swap to Mercury's Treads vs heavy CC (= crowd control, abilities that stop you from acting: stuns, roots, knock-ups). Skip Berserker's Greaves: Viego does not need raw attack speed when his Q passive already adds bonus damage on every hit.

**Skill order:** Max **Q** first (your DPS and your sustain in lane fights), **E** second (more move speed and lower cooldown — better roams), **W** last. **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** (the auto-attack focused tree) with **Conqueror** (stacks bonus damage on every spell or attack against a champion, perfect for extended skirmishes), **Triumph** (heal a chunk of HP when you score a takedown), **Legend: Alacrity** (extra attack speed per takedown), **Coup de Grace** (more damage to low-HP targets — multiplies your R execute). Secondary **Domination** with **Sudden Impact** (bonus damage right after a dash or an out-of-stealth attack, triggered by both **W** and **E**) and **Treasure Hunter** (extra gold per unique champion takedown). Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Key matchups

- **Lee Sin:** Strong early invader. Track him with vision on your buffs and avoid fighting him before level 4 — his early damage with **Q** poke and **W** shield wins that duel. Counter-gank his ganks instead of trying to invade back.
- **Master Yi:** Scaling rival you must kill before minute 20. Force objective trades early (= push a Drake or Rift Herald while he is busy on the other side of the map) so he never gets to four items. After his **Q** comes off cooldown he ignores your stun.
- **Karthus:** Free matchup on paper — no mobility, no peel for himself. **E** through a wall to camouflage in his jungle, **W** stun on top of him, and finish with **Q** + auto-attacks. Watch for his teammates: his ult deals damage to your whole team across the map, but it cannot save him 1v1.
- **Sejuani:** Rough matchup. Her **R** is point-and-click (= it locks onto the target, no aim required) and freezes you in place for over a second. Never engage her (engage = start the fight) without **Flash** ready, and never without your team in position to peel for you (peel = an ally who stops the threat from reaching you).
- **Rammus:** Hard matchup for a melee fighter. His passive thorns reflect part of your auto-attack damage back at you, and his **W** doubles that reflection. Avoid solo skirmishes and farm the opposite side of the jungle until you finish ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance**.

## Power spikes & win conditions

A power spike is a moment when the champion suddenly becomes much stronger than a minute earlier — usually when a new ability or item comes online.

- **Level 3:** All four basics unlocked (P-Q-W-E). With one point in **W** you have a stun gank: hold the charge behind a wall, **E** through the wall to enter mist with bonus move speed, walk up unseen, release **W** at maximum charge for the longest stun. Scuttle (the river crab neutral monster: kill it for vision and a small movement-speed buff in the river) is yours after the gank.
- **Level 6:** **Heartbreaker (R)** unlocks the full kit. Now every fight ends with a dash + execute on the lowest-HP champion. Force a fight or dive (= walk under the enemy tower to kill them anyway, eating tower shots in the process) a low-HP laner the moment **R** is up.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completion (~ minute 11-13):** First real damage spike. You can now duel most junglers in their own jungle and kill a low-HP carry through their support's shield.
- **![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) Death's Dance online (~ minute 17-19):** With three items you survive the front-to-back team fight long enough for possessions to chain. Group with the team for second drake and Baron timer.

## Common mistakes

- **Ulting (= using R) without picking the right target.** Viego's R locks on to the enemy with the lowest current HP percentage in range when you press it. Press it too early and you waste the dash on a near-full tank. Wait until your team has bursted (= dealt a lot of damage in 1-2 seconds) someone below 40% HP, then **R** to delete them.
- **Possessing a low-impact champion.** When two enemies die in the same fight, you can choose which wraith to attack. Always pick the one with cooldowns up and damage abilities (a fed ADC with Crit — fed = several kills ahead, ADC = the auto-attack ranged carry like Caitlyn or Jinx, Crit = critical-strike chance, the chance each auto deals roughly double damage). Possessing the dead support with empty CC is a waste of seconds.
- **Holding W charge for too long in a chase.** **Spectral Maw (W)** slows you while charging. A half-charge stun that connects is much better than a full-charge stun that lets the target walk out of range. Read the gap, release at the cooldown that hits.
- **Ganking without E.** **Harrowed Path (E)** through a wall gives camouflage (= invisible unless an enemy walks very close), bonus move speed, and bonus attack speed. Walking up to a lane in plain view of vision wards costs you the surprise and the **W** stun. Always look for a wall.
- **Forcing fights without R.** Viego's strength is the dash + execute combo. With **R** down he is a worse Master Yi without the dash spam. Pull back to farm jungle camps and wait for the cooldown.

## Advanced tip

Use possession as a **second flash**. When you kill an enemy with a dash or blink ability (= a fast targeted teleport, like Ezreal **E** or LeBlanc **W**), the wraith has access to that dash too — possess them, walk to a wall the original cast cannot reach, and use their dash to exit a fight you would otherwise die in. The same trick works offensively: possess an Akali and use her **E** to dash to the enemy backline that Viego himself could never reach.
