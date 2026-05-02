---
title: "Elise Jungle Build & Guide — Patch 16.9"
slug: "elise-jungle"
language: "en"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Elise jungle guide for League of Legends Patch 16.9: Spider Form gank path, Cocoon setups, item priorities, key matchups, power spikes, and a closing tip."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Two forms. Human: ability hits store dormant Spiderlings. Spider: basic attacks deal bonus magic damage and heal Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: targeted poke that deals magic damage scaling on the enemy's current HP (anti-tank). Spider: lunge dealing damage scaling on missing HP (executes low-HP targets)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: throws a Volatile Spiderling that walks forward and explodes when it nears an enemy (slow + AOE damage). Spider: Elise and her pets gain attack speed for sustained DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: linear skillshot that stuns the first enemy hit. Spider: Rappel — Elise lifts into the air untargetable, then drops onto a target with bonus damage and healing."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate switching between Human (ranged caster, longer range) and Spider (melee skirmisher, more move speed plus a Spiderling swarm). Off-cooldown free swap."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — the spell shield eats one ult and saves your Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when 2+ enemies build a Magic Resist item; replace Rylai's or Banshee's late game"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy hard CC (stuns, knock-ups) — boots swap that adds tenacity (CC duration reduction)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "vs healing-stack compositions (Soraka, Vladimir, Dr. Mundo); doubles as your Magic Penetration item"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Snowball early ganks with E cocoon stuns at levels 3-6, then pivot to objective dives via Rappel once Liandry's Torment and Rylai's are online. Pick squishy backliners during mid game."
  weakness: "Falls off in late game once front lines stack Magic Resist and HP. No reliable disengage in Spider form: a missed cocoon during a dive usually turns into a dead Elise."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
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
    primary_rationale: "Domination primary: Electrocute procs every gank — W slow + E stun + Q burst trigger the keystone (three ability hits). Sudden Impact rewards the Rappel dash, Treasure Hunter pads jungle gold on takedowns, Ultimate Hunter shaves R cooldown for form-swap pressure."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixes early mana issues since cocoon costs are heavy, Transcendence pushes Ability Haste (cooldown reduction) past the 40% soft cap and refunds cooldowns on takedowns."
    secondary_alternative: "Versus heavy poke or counter-jungle pressure (Lee Sin, Graves, Nidalee), swap Sorcery to Resolve with Bone Plating (8473, damage reduction after taking three hits) and Revitalize (8453, heal-and-shield amplifier) for early sustain."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Squishy laners without dash or stealth"
      reason: "E cocoon at levels 3-4 lands on flat targets without escape. Rappel (Spider E) confirms the dive even when they use Flash, since you are untargetable mid-cast."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Junglers with a weak pre-level 6 form"
      reason: "Master Yi cannot duel before level 6, Kayn is form-locked until his quest finishes, Shyvana lacks reliable crowd control. Elise gets free Scuttle Crab and counter-jungles them into a gold deficit."
    - examples: ["draven", "kalista", "samira"]
      archetype: "Aggressive ADCs that overextend for kills"
      reason: "Their forward positioning hands you cocoon angles. A level 3 gank on a pushed lane (a wave shoved past river) usually nets a kill once W slow plus E stun chain into your support's crowd control."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Tanky engagers with hard CC counter-engage"
      reason: "Their AOE crowd control catches Elise during Rappel descent or after she commits to a dive. Once they hit two items, your magic burst stops melting them and you cannot disengage out of Spider form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Strong early-game duelists with gap-closers"
      reason: "They beat Elise in a one-on-one fight at level 3 if she runs out of cocoon mana or mistimes Rappel. Avoid invading their river: their dashes eat your only escape."
    - examples: ["olaf", "garen"]
      archetype: "CC-immune divers (cleanse passives or ult immunity)"
      reason: "Olaf R and Garen Q break stun chains and ignore your only setup. Once cocoon stops landing, Elise's all-in (full commitment trade) collapses and she gets dueled down without an escape."
---

## Overview

> **Quick acronym key (read once):** **ADC** = Attack Damage Carry, the bot-laner who deals physical damage (Caitlyn, Jinx). **AP** = Ability Power, the stat that scales magic abilities. **MR** = Magic Resist, defense against magic. **CS** = Creep Score, number of minions you killed. **CC** = Crowd Control, any effect that stops a champion (stun, slow, knock-up). **Gank** = the jungler ambushing a lane. **Dive** = going under turret to kill. **Trade** = brief exchange of damage in lane. **All-in** = full commit fight. **Snowball** = a lead that keeps growing (more kills → more gold → more items → more kills).

Elise is a burst-mage diver — a champion who pokes from range and then commits fully into the enemy back line for a kill. Her kit revolves around landing **Cocoon (E)** in Human form to stun a target, then swapping into **Spider Form (R)** for **Rappel (E)** dives and execute damage. She has the strongest pre-level-6 jungle in the game: at level 3 she already has all four damaging abilities and beats almost every other jungler in a one-on-one fight. The trade-off is steep mechanical complexity (form-swap timing, skillshot accuracy) and a poor late game once tanks build Magic Resist.

Her game plan: invade the enemy jungle camps at level 3 if your matchup allows, then snowball (build a lead that keeps growing) by ganking the lanes with the most kill pressure (squishy ADC, low-HP mid laner). Once **Liandry's Torment** is online around minute 11-13, pivot from gank-heavy pathing to objective control — dive towers using Rappel as a "blink" (instant short-range teleport), pick off priority targets, and force Drake or Rift Herald.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (ranged jungle starter) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once it has eaten enough XP). The companion for AP burst champions: it adds a magic-damage proc (a triggered effect) to your next basic attack after you cast a spell, which lines up perfectly with **Spider Q** in skirmishes.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first full item. Adds an HP burn (damage spread over a few seconds) on every spell, stacking with **Rylai's** later for unbeatable single-target sustained damage.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration so your Q and E hit harder against squishy targets (champions with low defenses, like ADCs and mages).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — every ability slows the target. Massive synergy with **W** (already a slow) and **Spider Q** lunges.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. The active makes you untargetable for 2.5 seconds after a Rappel dive, letting your team follow up before you can be killed.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. Buy this last to hit 1000+ AP.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic crowd control (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — when two or more enemies build a Magic Resist item.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap when the enemy team has heavy hard CC (stuns, knock-ups).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — into healing-stack compositions (Soraka, Vladimir, Dr. Mundo); doubles as Magic Penetration.

**Boots:** Sorcerer's Shoes is the default. Switch to Mercury's Treads if the enemy team has three or more sources of hard CC.

**Skill order:** Max **Q** first (damage and execute), **E** second (cocoon cooldown — lower cooldown = more stuns), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**.

## Key matchups

- **Lee Sin:** He out-duels you after level 3 if you greed for camps. Track his pathing — if he is bot side, invade his red or blue camp top side. Never face-check fog (unwarded river bushes) when he is missing.
- **Graves:** Loses to Elise pre-6 because his short E (Quickdraw) cannot escape your cocoon, but scales harder. Dive his lane gank twice before minute 10 or he will hit two items and outscale you.
- **Master Yi:** Free matchup early. Invade his second camp (the one he clears third), kill him, repeat. Once he hits Wit's End plus Botrk he wins one-on-ones, so the win condition is ending the game by minute 25.
- **Sejuani / Maokai:** Hard counter-engage. Save Rappel for after they use their AOE CC, never dive first. In team fights, flank the back line instead of engaging through their tank wall.
- **Olaf:** His R (Ragnarok) cleanses your cocoon stun mid-flight. Wait until he uses it on a dive, then re-engage in the next 6 seconds while it is on cooldown.

## Power spikes & win conditions

- **Level 3:** First Spider form unlock and full ability kit. You have stronger one-on-one damage than any other jungler in the game during this window — invade or gank an over-extended lane immediately.
- **Level 6:** Free **R** swap on demand. Gank pressure doubles since you can disengage through walls in Spider form (it gives a small movement speed boost).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment completion (~ minute 11-13):** First major scaling spike. Single-target dives now kill ADCs and mages in two-spell rotations. Force Drake or Rift Herald the moment it finishes.
- **Two completed items + Boots (~ minute 16-18):** Peak window. After this you start losing relative strength as enemies build Magic Resist; your job is to convert this lead into Baron or Elder Drake calls.

## Common mistakes

- **Throwing E cocoon as a poke tool.** Cocoon is your only setup — if you miss it, you have no follow-up. Wait until the target is committed (low HP, used Flash, slowed by your **W**) before casting.
- **Diving in Spider form without Flash or R available.** Spider form has no escape (no dash, no shield, no untargetable). If your **R** is on cooldown, do not commit; back out and wait the 3 seconds until it is up.
- **Maxing W second instead of E.** W gives you slightly more clear speed but adds nothing to gank reliability. E rank-ups directly lower cocoon cooldown and increase rappel damage — that is your damage and your CC source.
- **Smiting Scuttle Crab early instead of saving Smite for objectives.** Save Smite for Drake and Rift Herald contests. The 70 gold and movement speed buff from Scuttle is not worth losing a Drake to an enemy who has Smite up.
- **Standing in melee range during team fights in Spider form when ahead.** Once you have killed the back line, swap back to Human form to throw cocoon and clean up. Spider form has a melee auto-attack range — staying there as a fed (kill-snowballed) Elise just feeds your kills back.

## Advanced tip

Use **Rappel (Spider E)** as a *defensive* blink as well as offensive. When a duelist commits onto you, cast Rappel on a low-HP minion or a far-back enemy minion in your jungle: Elise becomes untargetable for the lift duration (~2 seconds), enough to dodge an ulti like Lee Sin R or Vi Q. The cooldown is short (10 seconds at rank 5) — losing it for survival usually saves more kills than spending it on offense.
