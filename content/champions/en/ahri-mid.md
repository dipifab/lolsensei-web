---
title: "Ahri Mid Build & Guide — Patch 16.9"
slug: "ahri-mid"
language: "en"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Ahri mid lane guide for League of Legends Patch 16.9: starter kit, core mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Heals after killing 9 minions or jungle monsters; a larger heal on champion takedown. Lane sustain that scales with farm."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Linear skillshot that throws an orb out and pulls it back. Magic damage on the way out, true damage on the way back. Main waveclear and poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Releases 3 fox-fires that auto-seek nearby enemies; first hit deals full damage, additional hits reduced. Also grants a brief Move Speed boost."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot kiss that charms the first enemy hit — they walk harmlessly toward Ahri while taking damage. Setup tool, never raw poke."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Up to three short dashes within a short window, each firing auto-targeting bolts. Champion takedowns extend the recast window. Mobility plus execute."
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Fizz) — stasis lets you survive after committing R into a teamfight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic crowd-control (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item (Mercury's Treads + MR core)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "alternative first item when enemy team has 4+ squishy targets — higher single-pick ceiling, less sustained damage"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charm a squishy target, dash in with R, dump W and a returning Q for true damage, then dash out with the remaining R charges. Snowball each pickoff into the next dragon or roam."
  weakness: "No burst without Charm. If E misses you commit your full combo to nothing; if R is on cooldown you have no escape and any hard CC deletes you."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Immobile mages without dash"
      reason: "Ahri's E (Charm) is a long-range skillshot lock. Targets without a dash or stealth get charmed on a clean line and eat the full R + Q + W combo before they can step out of range."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Backline scalers without escape"
      reason: "Spirit Rush gives Ahri three dashes that reset on takedown — she can dive past the front line, delete an immobile carry, and dash back out before peel arrives."
    - examples: ["malzahar", "vladimir"]
      archetype: "Sustained mages without burst"
      reason: "Ahri's burst from a full R combo deletes them in under a second, before their sustain damage or healing can stack into a meaningful trade."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall users"
      reason: "Their Wind Wall blocks Charm and the orb of Q. Ahri loses both her setup tool and her main poke — she has to walk inside the wall to land anything, which is exactly where they want her."
    - examples: ["fizz", "kassadin"]
      archetype: "Mobile assassins with magic damage mitigation"
      reason: "Fizz E dodges Ahri's R bolts and his passive reduces magic burst; Kassadin has a magic damage shield plus a blink. Ahri commits a full combo and they survive on a sliver, then kill her on the recovery frame."
    - examples: ["lissandra", "galio"]
      archetype: "Anti-assassin mages with hard CC"
      reason: "Their hard CC catches Ahri mid-R: a single root or taunt during her dash window cancels both her damage output and her escape, turning a pickoff attempt into a free kill for them."
---

## Overview

Ahri is a mid-lane mage-assassin: she pokes from range like a mage, but **Spirit Rush (R)** lets her dive in, kill a single squishy target (a low-health, low-defense champion like an ADC or a mage), and dash back out — a play pattern called a **pickoff** (eliminating one isolated enemy, not a full teamfight). Her kit (the full set of her abilities) centers on **Charm (E)**, a skillshot kiss that locks an enemy in place. Every other ability she owns is built to chain off that single hit. **R** has a special quirk: each champion takedown refreshes the dash counter, so a successful pick lets her chain into a second one in the same fight.

Her game plan is patience, then commit (going all-in on a combo without the option to back out). **Farm** with **Q** (kill minions for gold and experience), place vision wards on the river, and wait for an enemy to step into a predictable spot before throwing **E**. Once **Charm** lands the rest of the combo is mechanical: pull them with the returning orb of **Q**, dump **W** for the auto-seeking damage, and use **R** either to close the gap or to escape. After level 6 she becomes one of the strongest **roaming** champions in the game (leaving her own lane to help top or bot lane) — every dragon spawn is a chance to swing the map.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring is the standard mage starter: small AP boost (Ability Power, the stat that scales magic damage), bonus HP, and mana regen for spamming **Q**.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike on the first ability hit and the mana sustain (mana regen so you do not run out) you need to spam **Q** every cooldown. Your gold target before minute 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (your damage ignores a fixed amount of the enemy's Magic Resist).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst with an HP-threshold passive: it activates when the target is below roughly 35% HP, lining up exactly with your **R** execute (finishing off a low-HP enemy).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier. Increases your total AP by 35%, which roughly doubles the damage every previous item adds to your combo.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs divers (champions that jump in to kill a single target then escape) and assassins (Zed, Diana, Talon, Fizz). The active turns you into an untargetable golden statue (stasis) for 2.5 seconds, letting you survive after committing **R** deep into a teamfight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC (crowd control: stuns, roots, or anything that locks you in place). The shield blocks the first ability that would lock you down.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target on the enemy team buys magic resist (typically Mercury's Treads plus an MR item).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — alternative first item when the enemy team has four or more squishy targets you want to one-shot. Trades sustained damage for a higher single-pick ceiling.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** only when the enemy comp has multiple hard CC chains aimed at you (hard CC = stun, root, knock-up, taunt — the kind that fully takes control of your champion).

**Skill order:** Max **Q** first (waveclear — killing minion waves fast — and main DPS, damage per second), **W** second (fight damage), **E** last — its base damage is irrelevant, only the charm duration scales meaningfully. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary tree **Sorcery** with **Arcane Comet** (a delayed magic projectile that triggers on every ability hit), **Manaflow Band** (more max mana, scales with ability hits), **Transcendence** (ability haste — lower cooldowns on every spell), **Scorch** (small bonus burn damage to your first ability hit, every 10 seconds — great for early lane harass: chip damage that wears down enemy HP). Secondary **Inspiration** with **Magical Footwear** (free boots that arrive around minute 12) and **Cosmic Insight** (extra ability haste, including on **Flash**, the personal-summoner-spell short-range teleport you bind to F or D).

## Key matchups

- **Yasuo / Yone:** Both can Wind Wall your **Q** and **E** mid-flight (Wind Wall is a wall-shaped barrier they place that blocks every projectile that crosses it). Hold **E** until they have committed an ability, and farm at max range with **W** — its three fox-fires home in past Wind Wall, so they are your only safe damage tool against the wall.
- **Zed:** A coin-flip lane that flips on items. Pre-6, only walk up after his **Q** is visibly on cooldown. After 6, save **R** to dash out of his ultimate — committing **R** offensively and then having no escape when his ult lands is the fastest way to throw the lane.
- **Galio:** He punishes you for grouping — his **W** taunts targets near his allies. Push the wave with **Q** and roam to side lanes where he cannot follow with his ult as quickly as you can with three dashes.
- **Twisted Fate:** Roam priority race. He has global rotation pressure with his **R**, you have three-dash mobility — equal threat. Push every wave with **Q** the moment his ult goes up, and ward both river entrances so you can answer with ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** if he tries to gank you (the enemy jungler arriving in your lane to kill you).
- **Cassiopeia:** Outscales you in extended trades because her **W** denies your **R** dashes (you cannot dash through her grounding zone). Trade in short bursts only (a trade = a brief exchange of abilities and auto-attacks, not a fight to the death), and never commit **R** offensively when her **W** is up.

## Power spikes & win conditions

- **Level 2:** With **Q + E** unlocked, you have the tools for a lane kill if the enemy steps too far forward. Hold **E**, walk up like you are last-hitting (landing the killing blow on a minion to claim its gold), then snap the charm when they step into your auto-attack range.
- **Level 6:** First **Spirit Rush** unlocks pickoff potential. The combo **E → R → W → Q** deletes any squishy champion that has not built a single defensive item.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minute 12-14):** Wave control flips — you can shove (push a wave fast all the way to the enemy turret) and roam on every cooldown. This is when your win condition activates: roam, charm, kill, dash out. Each successful pickoff snowballs into the next one — gold from one kill funds an item that makes the next pick easier.
- **Three-item spike (~ minute 24):** With your three core items online, your full **R** combo deletes any back-line champion (the carries — ADC, mage — that stand behind their tanks) below 70% HP. Force objective fights here (5v5 fights for dragon, Baron, or turrets).

## Common mistakes

- **Throwing E for poke without setup.** Naked **Charm** has a slow projectile and a long cooldown — most mid-lane opponents will sidestep it on reaction. Use a wave or a minion as cover and aim for the path they have to walk to last-hit a minion.
- **Using R to engage (start the fight) instead of to finish.** **Spirit Rush** is your only escape tool. If you dash in without a target you can guarantee will die, you hand over the dash window and die yourself when their team collapses on you (their teammates rotate to crush you because you are now stuck out of position).
- **Spamming Q for poke and going OOM.** OOM means out of mana — without mana you cannot cast spells, so you become a useless auto-attacker for 30 seconds. **Orb of Deception** costs significant mana per cast: save it for waveclear and secured trades.
- **Forgetting that R resets on takedown.** When you secure a kill during **Spirit Rush**, the recast window extends. Players who internalise this can chain a pick into a second pick in the same teamfight instead of dashing out immediately on the first kill.

## Advanced tip

Practice the **Q-back combo**: throw **Q** in front of your target, then immediately use **R** to dash through them. The orb on its return path now passes through the enemy at point-blank range, dealing the true-damage portion (true damage ignores all enemy resistances — even tanks take it at full value) while you are already in melee with **W** auto-firing on top. A single **Q + R + W** sequence delivered this way lands three instances of damage in under a second — far more burst than the textbook order **E → R → W → Q** suggests, and it works even when **Charm** is still on cooldown.
