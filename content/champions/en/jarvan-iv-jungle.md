---
title: "Jarvan IV Jungle Build & Guide — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "en"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Jarvan IV jungle guide for League of Legends Patch 16.9: starter kit, core bruiser build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "First basic attack on a target deals bonus physical damage based on their current HP. Refreshes every few seconds per target — weave it into combos."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Lance line that damages and shreds armor. If it crosses an active E flag, Jarvan pulls to the flag and knocks up enemies in his path."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Self shield (scales with enemy champions hit) and slow on nearby enemies. Press it BEFORE you E-Q in, not after."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Throw a flag that deals magic damage on impact and gives nearby allies attack speed. Setup tool for the E-Q knockup combo."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Leap to a target enemy champion, damaging nearby enemies and creating an arena of impassable walls. Recast to drop the walls early."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy CC or AP-heavy teams (3+ stuns/roots, or two AP threats): swap Steelcaps when CC is a bigger problem than physical damage"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "vs kite-heavy compositions you struggle to reach (Caitlyn, Senna, Kog'Maw, Jinx) — the movement speed and slow on hit help you stick after R"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "vs healing-stacking comps (Aatrox top, Yone bot, Soraka support): the burn cuts heals and helps clear waves between objectives"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "vs teams that focus you (2+ enemies turn on you when you R in): HP shield procs under burst, tenacity passive shortens CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs comps with two strong physical damage dealers (e.g. Yasuo + Caitlyn): turns physical damage into a slow bleed, not a one-shot burst"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Land the E-Q knockup on a priority target (enemy carry or jungler), then R to lock them in your arena while your team follows up. Repeat on every cooldown around objectives."
  weakness: "If E or Q misses, you have spent your only hard CC and gap-close. You become a melee bruiser without burst, easy to kite by ranged carries with self-peel."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stacks on every hit of your E-Q-AA-R combo: by the time you knock up, stacks are full for damage plus healing. Triumph rewards takedowns at objectives; Alacrity speeds autos for Martial Cadence procs; Coup de Grace finishes low-HP targets locked in Cataclysm."
    secondary_rationale: "Resolve secondary: Bone Plating absorbs the first burst trade after you R in (when the enemy team turns on you), Revitalize boosts your Golden Aegis shield value — the shield is your only defensive tool mid-fight."
    secondary_alternative: "Into a poke-heavy enemy team (Varus, Xerath, Karma poke comps) swap Resolve to Inspiration with Magical Footwear (free boots to save gold for your first big item) and Cosmic Insight (more frequent Flash for the E-Q-Flash trick)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Early-game jungle skirmishers"
      reason: "Jarvan trades evenly at level 3 with Q armor shred plus E attack speed and out-scales most early-game junglers once Sundered Sky comes online around minute 12-14."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Immobile bot lanes that need peel"
      reason: "Cataclysm walls trap a positioning-dependent carry inside an arena their support cannot reach into; the enemy team usually cannot answer the lockdown in time."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Stationary mid-lane scalers"
      reason: "E-Q gap-close from out of vision plus the R wall denies them the spacing their kit needs; they have no dash to leave the arena before your team converts."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "AOE engage junglers with longer-range CC"
      reason: "They engage from outside Jarvan's E-Q range and chain-CC him before he can reach the back line; the wall does not save him from being stunned mid-leap."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-game scalers with built-in sustain"
      reason: "Jarvan's power spike is items 1-3 (around minute 20-25). After that he falls off, while these targets only get stronger and survive his single rotation."
    - examples: ["olaf", "tryndamere"]
      archetype: "CC-immune duelists"
      reason: "Olaf R and Tryndamere R ignore the lockdown of Cataclysm: they walk out of the arena hitting you for full damage while your only initiation is on cooldown."
---

## Overview

Jarvan IV is a melee fighter / diver — meaning he closes the gap with a dash and commits to a teamfight to lock down a key target — built around one signature combo: throw an **E** flag, fire **Q** through it, get pulled to the flag and knock up everyone in the path. After level 6 he adds **R** Cataclysm, an arena of walls that traps a single enemy with him while his team converts the kill. He is one of the easiest junglers to learn (difficulty 2/5 in our scale) because the kit always wants the same thing: land E-Q on a priority target, R, win the fight.

His game plan: clear jungle camps fast with **E** active and Q armor shred, then gank (pop into a lane to help kill the enemy) using lanes that have a usable engage angle — mid lane through tri-bush (the three-cornered brush between mid and side lane) or top lane through river bush. Around every objective spawn, look to dive a carry (jump on the high-damage / low-defense enemy in the back). Skill expression is in the **E-Q-Flash** trick — flag down, Flash forward, Q through for an unreactable knockup — and in deciding **when** to pop **R** (you only get one per fight, so do not waste it on the front line tank).

## Recommended Build

**Starting items:** Hailblade + Refillable Potion. Standard junglecam pet quest path. Both Hailblade and Emberknife evolve into one of three companions; we want the AD skirmisher pet, see below.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once you have enough XP). The AD skirmisher companion: gives you a movement-speed sprint after every camp, which translates to faster ganks across the map.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — your first big item. The crit-on-first-hit and on-hit heal land perfectly on Martial Cadence, so the moment you knock up a target you crit them and heal back the damage you took to reach them.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots into most enemy teams (the bot lane is usually two physical damage dealers). Swap to Mercury's Treads if the enemy comp is mostly AP and CC.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred stacks with your Q passive, plus HP and ability haste so your E-Q comes back faster.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — late-game tank spike. The stacking armor and magic resist passive turns you from a diver into a frontline you can sit in for the full duration of a teamfight.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — into heavy CC or AP-heavy teams. Swap Steelcaps when crowd control is the bigger problem than physical damage.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — into kite-heavy comps (Caitlyn, Senna, Kog'Maw — enemies that walk back while attacking you to stay out of melee range). The movement speed and slow on hit help you stick to the back line (the high-damage carries who stand behind their tanks) after **R**.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — into healing-stacking comps (Aatrox top, Yone bot, Soraka support). The burn passive cuts enemy heals.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — when 2+ enemies focus you (turn their damage onto you) the moment you R in. The HP shield procs (auto-triggers) under burst (high damage in 1-2 seconds) and the tenacity passive shortens crowd control (stuns, roots, slows).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — vs comps with two strong physical damage dealers (e.g. Yasuo + Caitlyn). Turns physical damage taken into a slow bleed (damage spread over the next few seconds, not instant) so you have time to react instead of getting deleted.

**Boots:** Plated Steelcaps default. Mercury's Treads if the enemy team has 3+ stuns/roots or two AP threats.

**Skill order:** Max **Q** first (main damage and armor shred), **E** second (lower cooldown means more gank attempts and more flag options), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** with **Bone Plating** and **Revitalize**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Key matchups

- **Lee Sin / Graves:** Even matchup in the early jungle. Track their first clear; if they start red-side, contest their second buff with E-Q. Both can fight you back at level 3, so do not invade unless you have a lane prio (a lane mate who has pushed enemies under tower and can rotate to help) backing you up.
- **Fiddlesticks / Amumu:** Avoid grouping with allies in mid-game. Their AOE engage range exceeds your **E-Q** initiate distance — they ult you while you are still walking up to flag. Ward your jungle entrances and do not face-check brushes (walk into a brush blind without vision, where an enemy could be hiding).
- **Kha'Zix / Rengar:** Assassin junglers who want to one-shot a carry. Counter-gank (show up at the same lane to flip the fight) instead of full-clearing: you trade evenly with them at level 3, and your **R** is a peel tool (an ability you use to save your carry from someone diving them) when they leap on your carry — wall them away from the kill.
- **Olaf:** His R makes him CC-immune, which means **Cataclysm walls do not stop him**. If you R him, he walks out swinging. Save **R** for his teammates after he has burned ult, or pick him as your target only if your team can kite (back up while attacking, keeping distance) while he is locked in.
- **Sejuani / Maokai:** Tankier engage junglers. You out-damage them in a 1v1 early but you both want the same role in a teamfight (lock a carry). The lane that snowballs first wins (gets an early kill that turns into a gold lead that turns into more kills); commit to ganks before they finish their first item.

## Power spikes & win conditions

- **Level 3:** With one point in **Q**, **E**, and **W** you have the full E-Q-W combo for ganks. This is your first real gank window, especially mid lane through tri-bush.
- **Level 6:** **Cataclysm** unlocks. Any unwarded carry near your river is a dive opportunity. The trick: flag (E) just past them, R them inwards, Q to knock them up — they cannot answer the lockdown without **Flash** and a cleanse.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minute 12-14):** Your first crit on Martial Cadence one-shots squishies (champions with high damage and low defenses, like the ADC) after E-Q. This is the window where you should be ganking on cooldown and forcing dragon trades.
- **3-item spike (Sundered Sky + Boots + Black Cleaver, ~ minute 22-25):** Peak teamfight power. Your R + Q does enough damage to delete a back-line carry on its own, and you have enough HP to survive the focus afterward.

## Common mistakes

- **Throwing E on top of yourself for the standard "knock up where I am" combo.** It works for ganks, but in a fight where the enemy is moving away, your Q pulls you backwards. Throw the flag *past* the enemy so the Q-pull moves you forward into them, not away.
- **Pressing W after engaging.** Golden Aegis is a shield that scales with enemy champions hit at cast time — pop it *before* you E-Q so the shield value is maximum and the slow hits the people you are about to land on, not nobody.
- **Ulting the front line tank.** Cataclysm locks in *one* enemy with you. Use it on the carry (Caitlyn, Aphelios, Azir), not on the Sion who is happy to fight you in a closed arena.
- **Cleaning the entire jungle before ganking.** You out-tempo most junglers with E-Q ganks at level 3-4. If you full-clear before your first gank, you give up your biggest advantage. Tax 2-3 camps then look for an angle.
- **Recasting R to break the wall too early.** The walls are also a peel tool: if your team is winning the fight outside the arena, leave the walls up to keep the trapped carry from joining. Only recast to chase a flee.

## Advanced tip

Practice the **E-Q-Flash** combo: throw the flag, fire Q through it, and Flash *during* the Q animation. The knockup applies at your destination, so you knock up enemies in a 600-unit area beyond what they expected — used to engage from outside their vision range, it is one of the most reliable initiations in the game. The trade-off is you spend Flash, so save the trick for ganks that secure a kill or a lost ward. Practice it in Practice Tool a dozen times before trying it in a ranked game; the timing window is short.
