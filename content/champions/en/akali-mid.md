---
title: "Akali Mid Build & Guide — Patch 14.10"
slug: "akali-mid"
language: "en"
patch: "14.10"
champion: "akali"
role: "mid"
last_updated: "2026-04-28"
description: "Akali mid lane guide for League of Legends Patch 14.10: AP assassin build path, key matchups, level 6 power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Damaging a champion with an ability marks them. Stepping out of the ring empowers Akali's next basic attack with bonus range and damage."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Cone of kunai that damages and slows. Main poke and trade tool. Costs energy, short cooldown — spam it on cooldown in trades."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Smoke zone that makes Akali invisible to enemy targeting. Acting inside reveals her briefly. Use to dodge skillshots or break vision."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Flip back, fire shuriken marking first enemy hit. Re-cast to dash to the marked target. Mark a champion only, never a minion."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Two-part ulti. R1 leaps and damages; R2 dashes through, executing low-HP enemies. Execute scales with target's missing HP."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs heavy single-target burst (Zed R, Veigar combo, LeBlanc): stasis lets you survive their damage window before R2 execute"
    - dd_id: "3135"
      name: "Void Staff"
      against: "the moment any priority target buys a Magic Resist item — keeps your ability damage scaling against tankier enemies"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that one-shots your engage (Ahri charm, Lissandra R, Twisted Fate stun) — the spell shield blocks the first hit"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "into longer fights and bruiser-heavy compositions where you need extra healing and durability instead of pure burst"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Catch isolated squishy targets with E1+E2 dash, then chain Q + empowered auto-attack + R combo for execute. Roam side lanes whenever R is up."
  weakness: "Weak waveclear and short range pre-6: vulnerable to ranged poke and jungle ganks. No hard CC and no escape if W is down — you can be locked and bursted before your combo lands."
---

## Overview

Akali is an AP burst assassin: a champion built around very high damage in 1-2 seconds (called "burst") aimed at a single target. Her kit is a chain of dashes — **Shuriken Flip (E)**, **Perfect Execution (R)** — wrapped around the invisibility window of **Twilight Shroud (W)**. There is no mana bar; she uses energy, which means her short cooldowns matter more than her resource budget. Mid lane suits her because the river gives short paths to roam (leave your lane to make a play in another lane) side lanes, and **R** at level 6 turns any fight without enemy vision wards (placeable items that reveal an area) into a pickoff (eliminating an enemy isolated from their team).

The game plan is to survive a weak laning phase (poor waveclear — meaning her abilities are slow at clearing the wave of minions, and no early kill threat) until level 6, then convert any small lead into roams and tower dives. The trick of the champion is in **E** placement — Akali's E first fires a shuriken; only the first enemy champion hit becomes the dash target. Mark a minion by accident and you lose the dash for the whole ability rotation (the cycle of casting Q + W + E + R one time each).

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Doran's Ring gives the AP and mana regen Akali doesn't need, but the bonus damage to minions fixes her weak early waveclear. Skip ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/2033.png) **Corrupting Potion** unless the lane is a heavy auto-attack harass matchup.

**Core items (in order):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (an active that dashes you toward the enemy) plus burst damage; stacks with **E** and **R** so you can engage (start the fight) from out of range.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (your spell damage ignores a slice of the enemy's Magic Resist). A direct damage upgrade for killing squishy targets.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/4645.png) **Shadowflame** — extra burst with bonus damage when the enemy is below ~40% HP, lining up perfectly with **R2** execute.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier on all your AP. Your highest-AP slot.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3157.png) **Zhonya's Hourglass** — into Zed, Veigar, LeBlanc, or any opponent whose burst arrives in the same window as yours. Its stasis active makes you invulnerable and frozen in place for ~2.5 seconds, letting you wait out their damage and finish with **R2**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3135.png) **Void Staff** — swap as soon as any priority target buys a Magic Resist item; keeps your damage scaling.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun); the spell shield eats their setup.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/4633.png) **Riftmaker** — alternative first item in longer fights vs bruiser-heavy compositions; trades burst for sustained damage and healing.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3020.png) **Sorcerer's Shoes** are default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3111.png) **Mercury's Treads** is acceptable into heavy CC (Lissandra, Ahri, Galio).

**Skill order:** Max **Q** first (main damage and energy refund), **E** second (lower cooldown on the dash), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Runes are passive bonuses you pick before the match starts; you choose one primary tree (5 runes) and one secondary tree (2 runes). Primary **Domination** with **Electrocute** (extra burst when you hit a target with three abilities in a row), **Sudden Impact** (more magic penetration after a dash), **Eyeball Collection** (or **Zombie Ward**) for stacks of AP, and **Ultimate Hunter** (lower **R** cooldown). Secondary **Sorcery** with **Transcendence** (ability haste — your abilities come back faster) and **Gathering Storm** (late-game AP scaling). Akali uses energy not mana, so don't pick **Manaflow Band**.

## Key matchups

- **Galio:** Hard pre-6 counter. His passive auto-attack hits hard, and his **W** taunt locks down your **R** dive. Farm safely until level 6, ping for jungle help, and only commit when his **W** is on cooldown.
- **Yasuo:** His **Wind Wall** blocks **Q** and the **E** shuriken. Open with ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3152.png) **Hextech Rocketbelt** dash or **E** dash first, save **Q** for after his Wind Wall is down.
- **Lux:** You outscale her in single combat. Dodge her **Q** (a long, slow line ability — try to be moving sideways when she casts) with **E**, then dive her at 6. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3157.png) **Zhonya's Hourglass** if she finishes her ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/6655.png) **Luden's Companion** before yours.
- **Twisted Fate:** A roaming race. He has the better roam tool (his **R** lets him teleport across the map), so you have to push your wave (force the line of minions toward the enemy tower) faster than he can leave. Track his **R** with vision wards (placeable items that give vision in an area) on river and tri-bush (the three-bush spot near mid lane).
- **Zed:** Even matchup. He wins short trades before 6; after 6 your **R** can finish him on low HP. Don't all-in (commit to a full kill exchange, no retreat) unless he's burned his **W** shadows; otherwise he escapes your **R2**.

## Power spikes & win conditions

- **Level 3:** Full basic kit (Q + W + E). You finally have the dash + invisibility combo to trade (a short ability exchange in lane, not a full kill attempt) or disengage (escape from a fight). Look for one short trade to push lane priority (when your wave is closer to the enemy tower than yours, so you can leave lane safely) before the first jungle gank (a surprise attack from the enemy jungler).
- **Level 6:** First **R** is the largest single spike of the game. You gain a kill threshold against any squishy target (champions with high damage and low defense, like ADCs). If the river isn't warded (covered by enemy vision wards), mid-river fights are free.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3152.png) Hextech Rocketbelt completion (~ minute 12-14):** All-in damage now one-shots squishy targets through R2 execute (the R2 finishes them off when their HP is below the kill threshold). Roam to side lanes the moment your wave is pushed under the enemy tower.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Burst damage scales massively. Force fights around objectives (Drake, Baron, towers) and look for back-line picks (eliminating an enemy isolated from their team) using **W** to flank — entering the fight from a side they're not watching, usually through unwarded fog of war (areas of the map without vision).

## Common mistakes

- **All-in before level 6 with no jungle setup.** Akali's pre-6 trade damage is mediocre — Q + auto-attack alone won't kill an alert opponent. Farm safely, ping for the jungler, then commit at 6.
- **Wasting E1 on a minion.** The first hit of Shuriken Flip marks whatever it touches, including a minion. If your shuriken lands on a creep, you lose the dash to the champion behind it. Always angle E so the champion is the first thing the shuriken touches.
- **Auto-attacking inside your W.** Acting (any spell or auto-attack) reveals you for ~0.5s. Standing inside **Twilight Shroud** and poking out of it doesn't keep you invisible — use **W** to dodge a single skillshot (an aimed ability that can be sidestepped) or to break vision before you reposition.
- **Burning R1 without a plan for R2.** R1 alone lands you in the middle of the enemy team. Always have an R2 target lined up — either as the killing blow or as an escape dash.
- **Building bruiser items into a squishy enemy team.** Items like ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/4633.png) **Riftmaker** trade burst for sustain. Against a team of fragile carries you want pure burst (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/4645.png) **Shadowflame**), not durability.

## Advanced tip

Drop **Twilight Shroud (W)** the instant **R1** lands. The shroud pops at your feet right as you arrive in the middle of the enemy team, breaking their target lock (forcing the enemy to re-select you, since you became untargetable for a moment) for the half-second window before they can re-click on you. Used well, it lets you reposition for **R2** execute or even cancel the all-in if the trade looks lost — and the enemy support's peel ability (the spell that protects their carry) often lands on empty space because you became untargetable mid-engage.
