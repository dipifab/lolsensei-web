---
title: "Jinx Bot Build & Guide — Patch 16.9"
slug: "jinx-bot"
language: "en"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Jinx bot lane guide for League of Legends Patch 16.9: starter kit, hypercarry crit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Whenever Jinx helps kill a champion, epic monster, or destroys a structure, she gains a huge burst of move and attack speed for a few seconds."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Toggle between Pow-Pow (minigun, stacking attack speed) and Fishbones (rocket launcher, AOE damage with extra range, costs mana). Main DPS lever."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Long-range linear shot that damages, slows and reveals the first enemy hit. Use as poke and as a self-peel slow against divers."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Throws three snare grenades that root enemy champions on contact for 1.5s. Self-peel and lockdown setup, not poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Global rocket that deals more damage the further it flies and explodes for missing-HP damage. Snipe low-HP runners or finish from across the map."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo) — bonus armor pen scales with enemy max HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds, cuts healing the moment your rockets tag them"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs assassin or diver pressure (Zed, Samira, Yasuo flank) — movement speed plus the low-HP shield buys the second you need to E out"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "vs heavy poke comps or stalemate lanes — lifesteal plus an overheal shield lets you stay topped up between fights"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Reach Statikk Shiv and Infinity Edge alive, then teamfight from the back line with rocket Q. Chain Get Excited! resets off pickoffs to snowball Baron and Drake fights."
  weakness: "Slow base movement and zero dash or blink. Hard countered by divers and assassins who reach the back line; falls behind heavy early-pressure lanes (Draven, Lucian, Caitlyn) before her first two items are online."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Immobile late-scaling marksmen"
      reason: "Jinx out-scales and out-teamfights stationary marksmen: rocket Q + Runaan's Hurricane shreds a clumped back line that has no dash to reposition once the fight starts."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "HP-stacking tanks and front-line comps"
      reason: "Rocket Q deals AOE physical damage that scales with attack speed, and Lord Dominik's bonus armor pen versus high-HP targets turns big front lines into the ideal target instead of a wall."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Lock-down engage supports"
      reason: "When the support catches a target, Jinx has a long enough auto-attack window to fire 3-4 rockets into the chain CC and finish with R, since the target cannot dash out of the AOE."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Early-pressure laning marksmen"
      reason: "They out-trade Jinx levels 1-6 because their auto-attack damage outpaces minigun stacks and Jinx has no dash to disengage; they snowball lane gold before her first item spike."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Mobile assassins and divers"
      reason: "Jinx has no dash, no blink and no instant CC: a single gap-close past Flame Chompers usually deletes her before E lands or root expires."
    - examples: ["xerath", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Out-poke Jinx beyond rocket Q range and chunk her HP every wave. With no escape and no sustain, she cannot stay in lane long enough to hit her item spikes."
---

## Overview

Jinx is the textbook hypercarry marksman: weak in the first ten minutes, terrifying once she has two items, and game-ending if she gets a single reset off a teamfight kill. Her **Switcheroo! (Q)** lets her swap between a single-target minigun (stacking attack speed) and an AOE rocket launcher (longer range, AOE physical damage, costs mana), so she covers both clean DPS on a back line target and waveclear plus front-line shred in the same form. Her **Get Excited! (P)** turns every kill, assist, or destroyed structure into a massive movement and attack speed window, which is the engine that lets a fed Jinx walk into a teamfight and chain three more kills before the buff drops.

The game plan is simple to describe and demanding to execute: survive lane against early aggression, hit your first crit item online (Statikk Shiv), then play as a back line carry — stand at the second-furthest position, kite (move backward while attacking to keep distance) with rocket Q, drop **Flame Chompers (E)** under your own feet when a diver lands on you, and snipe low-HP runners with **R** across the map. Skill expression sits in **Q** form swaps mid-fight (minigun on the engaging tank, rockets on the grouped back line) and in **R** snipes that turn enemy positioning errors into kills before they hit their own back line.

## Recommended Build

**Starting items:** Doran's Blade + 2 Health Potions. Skip the second Doran's even if you're winning lane — the gold goes much further into a Sheen component for Statikk Shiv.

**Core items (in order):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — first-item rush. The Energized passive procs on rocket Q for instant waveclear, and the attack speed plus crit chance combine to bring rocket form into a real teamfight tool by minute 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Mercury's Treads only against 3+ hard CC threats stacked on the enemy team.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — your biggest damage spike. Crit damage flat-out doubles every rocket Q AOE hit on the back line; this is the item that flips Jinx from "annoying" to "deletes the enemy ADC".
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — hypercarry teamfight item. The bolts fired by Runaan's also fire rockets when Jinx is in Fishbones form, so you hit three targets at once with full crit + attack speed scaling.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — against tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo). Replace Runaan's if the enemy team has 3+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — against heavy healing comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds (a debuff that cuts healing) the moment a rocket tags them.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — against assassin or diver pressure (Zed, Samira, Yasuo flank). The HP-threshold passive (a shield that triggers when you drop low) plus the move speed gives the half-second you need to drop **E** under your own feet.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — against heavy poke comps or stalemate lanes. Lifesteal plus the overheal shield buys you the sustain to stay in lane long enough to hit your spikes.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. Mercury's Treads only against heavy AP CC like Brand or Zyra support.

**Skill order:** Max **Q** first (DPS and rocket scaling), **W** second (Zap! cooldown for poke and self-peel slow), **E** last (root duration is fixed; only the damage scales). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** (sustains rocket Q mana cost) and **Gathering Storm** for late-game scaling. Stat shards: Attack Speed / Adaptive Force / Health.

## Key matchups

- **Draven:** Heavily Jinx-unfavored levels 1-6. His Spinning Axe out-trades you at every step. Don't fight him pre-3; freeze the wave near your turret, hit level 6 with Zap! up, and look for jungle dives only when he overextends. Once you have Statikk Shiv, the matchup flips: avoid his all-in window and farm safely until then.
- **Caitlyn:** Unfavored. She outranges your minigun and bullies the lane with Q + trap setups. Stand behind minions, dodge sideways out of her Q line, and never step on the bushes she has been sitting in (likely traps). Survive to two items — her teamfight scaling falls off hard against your rocket Q AOE.
- **Lucian:** Unfavored, especially with a Nami support. Respect his level 3 all-in (passive double-shot + Q dash + W speed-up). Hold **E** as a self-peel against his dash; never throw it as poke. Get to ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** without dying, then the lane stabilizes.
- **Aphelios:** Even, leans Jinx-favored after two items. Track his weapon rotation; when he's in Severum (red, lifesteal) or Calibrum (green, range marker) you can poke with rocket Q from minigun safety. Avoid trading when Infernum (orange, AOE) is loaded — that's his rocket-vs-rocket window and he wins it.
- **Samira:** She wants a melee all-in once she has W. Hold ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** as a planned third item if she's snowballing, drop **E** the moment she dashes in (don't blow it on poke), and never fight her with **Flash** on cooldown.

## Power spikes & win conditions

- **Level 6:** First **Super Mega Death Rocket!** unlocks pick pressure. A low-HP enemy retreating bot-to-base is a free R execute when you respect the missing-HP scaling. Don't waste it as poke — wait for sub-30% HP runners.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completion (~ minute 10-12):** First real spike. Rocket Q now clears the wave in one cast and the Energized proc procs on every minigun stack, opening teamfight participation in skirmishes around Drake.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 20-24):** The hypercarry breakpoint. Rocket Q crits start one-shotting back line targets, and any pickoff or kill triggers **Get Excited!** for a free rotation to the next fight.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane online (~ minute 28-32):** Three-target rocket Q with crit. This is the late-game fantasy: stand behind your front line, fire into the enemy clump, and watch the fight delete itself in 4 seconds.

## Common mistakes

- **Spamming rocket Q in lane.** Rocket form drains mana fast and minigun form keeps your attack speed stacks high. Use rockets only for last-hit cleanup on three-minion clumps or for poke (range advantage); switch back to minigun the moment the trade window closes.
- **Holding R for "the perfect snipe".** **Super Mega Death Rocket!** scales off missing HP, not max HP. A safe 60% R into an enemy at 25% HP is a guaranteed kill; waiting for a fully clean shot across map often means the target heals up at base before you fire.
- **Standing at max attack range in team fights.** Jinx has no dash. Maximum AA range puts you outside your team's peel (protection — your support's CC and shields). Stand at the second-furthest position so a flanking assassin can't delete you before your team can react.
- **Burning E for engage.** **Flame Chompers!** is your only self-peel. Once it's on cooldown you're a glass cannon (a champion with high damage and low defenses, like most ADCs) with no answer to a diver. Drop it under your feet when a Zed or Samira lands on you, never as a poke setup.
- **Chasing kills outside Get Excited! window.** The passive lasts only a few seconds. If the buff drops while you're deep in enemy territory, you have base move speed and zero escape. When the speed boost ends, retreat — the next fight comes back to you faster than you think.

## Advanced tip

Practice the **Q-form swap mid-AA** to keep both worlds online. The trick: stack 3 minigun attack speed stacks on a wave, swap to rockets just before a rocket Q would last-hit two minions, fire one rocket, then swap back to minigun the same frame to keep the attack speed buff active. In a teamfight this looks like minigun-stacking on the front-line tank for AS, swapping to rockets the moment your team commits to engage, and dumping 3-4 rockets into the enemy back line under crit + Runaan's with full attack speed already loaded. Done well it adds roughly 40% extra DPS in the first three seconds of a fight, which is exactly the window where carries live or die.
