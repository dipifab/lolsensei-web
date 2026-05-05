---
title: "Katarina Mid Build & Guide — Patch 16.9"
slug: "katarina-mid"
language: "en"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Katarina mid lane guide for League of Legends Patch 16.9: starter kit, core AP assassin build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "When an enemy champion Katarina damaged dies, her remaining cooldowns drop dramatically (kill or assist). Picking up a Dagger triggers an AOE slash."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Targeted Dagger that bounces to nearby enemies, then drops behind the primary target. The grounded Dagger is the pivot of the combo."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Tosses a Dagger above Katarina that lands a moment later, plus a brief burst of Move Speed. Drops the Dagger you blink onto."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink to a champion, minion, ward, or Dagger. Picking up a Dagger reduces this cooldown. Main mobility tool — also works on enemy wards."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel that throws knives at the 3 nearest enemy champions, applying Grievous Wounds. Cleansed by any hard CC. Use post-engage, not pre-engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs hard-engage targets (Malphite R, Zac, Amumu) — stasis cancels the engage that interrupts your R channel"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that cancels R (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy CC compositions (2+ stuns/roots) — replaces Sorcerer's Shoes when you eat too much CC to channel R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds caps their healing"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Get a kill or assist in the early laning phase, then snowball: every takedown resets your full kit via Voracity, so a single kill in lane often becomes a double kill on the next wave."
  weakness: "Hard CC interrupts R and turns the channel into wasted time. Without a takedown to reset cooldowns she becomes a low-range melee with one blink — long-range mages punish her for free."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute procs every W-E-Q chain (3 distinct hits in 3 seconds) for free burst. Sudden Impact triggers right after every Shunpo (the blink). Ultimate Hunter shaves seconds off Death Lotus on every takedown — and Voracity already does the rest."
    secondary_rationale: "Precision secondary: Triumph heals 12% missing HP on takedown so you can chain a second kill on the resetting kit. Coup de Grace adds +8% damage to enemies under 40% HP — exactly the window where R finishes a fight."
    secondary_alternative: "If the enemy team has heavy magic poke (Xerath, Vel'Koz, Ziggs), swap Precision to Resolve with Second Wind (regen vs poke) and Overgrowth (extra HP scaling) so you survive the laning phase to a takedown."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "They cannot exit Katarina's W-E-Q burst window. Once their setup ability (Veigar cage, TF gold card, Anivia E) is on cooldown they have no answer to a Shunpo all-in."
    - examples: ["lux", "orianna"]
      archetype: "Mid-range mages with no escape"
      reason: "Both rely on positioning behind minions. Katarina blinks to a Dagger past the wave, deletes them with W-E-Q-AA, and resets on the kill into the next target."
    - examples: ["karthus"]
      archetype: "Farm-heavy scalers without sustain or hard CC"
      reason: "Karthus needs uninterrupted farm windows. Katarina's reset pressure forces him to burn Flash and trade away the late-game scaling that is his only win condition."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Point-and-click hard-CC mages"
      reason: "Their stun is instant and uncounterable: it cancels Death Lotus mid-channel and turns Katarina into a stationary punching bag while their team collapses on her."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mages"
      reason: "They poke Katarina down from outside her Q range (625) for the first 5 levels. She reaches level 6 already at 40% HP, with no Voracity reset available, and dies to a single skillshot rotation."
    - examples: ["diana", "pantheon"]
      archetype: "Burst all-in midlaners with point-and-click engage"
      reason: "Diana's Q-R combo and Pantheon's W stun both connect before Katarina can drop her own W Dagger. She loses the trade race and falls behind on item spikes."
---

## Overview

Katarina is a melee AP assassin built around her **Voracity** passive: every takedown (kill or assist) dramatically reduces all of her remaining ability cooldowns. That single mechanic is the entire identity of the champion — one kill in lane refreshes her full kit, so a single takedown often becomes a double on the next wave. The mid lane suits her because she needs short rotation distances to chain resets across the map.

Her game plan reads simple, executes hard. Drop a Dagger with **W** or use the trailing Dagger from **Q**, blink onto it with **E** for AOE damage, then start auto-attacking and casting **R** when the opponent hits low HP. The skill expression sits in two places: the **W-E-Q** cast order (you must drop the Dagger before the blink, not after) and choosing **when** to channel **R** — pre-engage you get cancelled by any stun, post-engage you mop up a fight with reset chains.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. Skip Doran's Shield even into ranged matchups — the AP and mana regen win you more trades than the HP saves you.

**Core items (in order):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — first item spike. Gives a second short dash (active) on top of Shunpo, so you can engage on a target who already burned their escape. Adds AP and HP for surviving counter-engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Default boots; swap to Mercury's Treads against heavy CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike that lines up perfectly with the W-E-Q chain. The HP-threshold passive (it triggers when you bring an enemy under a low-HP threshold) gives you the extra burst to finish targets without needing to channel R.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. Your highest-AP slot; the 30% AP amp turns Katarina from "snowball assassin" into "one-shot any squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — bonus magic penetration that scales with the target's missing HP. Stacks beautifully with Stormsurge and R for finishing low-HP targets across a fight.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — buy this the moment any priority enemy completes a Magic Resist item.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs hard-engage targets (Malphite R, Zac, Amumu). The stasis cancels the engage that would otherwise interrupt your R channel.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that cancels R (Annie stun, Lissandra R, Twisted Fate gold card). The shield eats one ability so your channel survives.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — replace Sorcerer's Shoes when the enemy team has 2+ stuns or roots that cancel Death Lotus.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking compositions (Soraka mid, Vladimir, Dr. Mundo top). Caps enemy healing so a kill stays a kill.

**Boots:** Sorcerer's Shoes is default. Mercury's Treads is the swap when the enemy team has hard CC; Ionian Boots of Lucidity is rarely correct because Voracity already gives you cooldowns for free.

**Skill order:** Max **Q** first (waveclear and main damage), **W** second (the dagger that anchors every combo), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Secondary **Precision** with **Triumph** and **Coup de Grace**. The keystone (the headline rune at the top of the page) procs naturally on the W-E-Q chain because you hit 3 separate damage instances.

## Key matchups

- **Annie:** Hardest matchup. Her stun is point-and-click and cancels Death Lotus instantly. Buy ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** as your second item if the lane is going badly. Pre-6, sit at the back of the wave and farm with **Q**; never blink in until her stun is on cooldown.
- **Lux:** Favourable matchup once you reach level 6. Pre-6 her **Q** outranges your kit, so play behind minions and dodge. After 6, blink onto a sidewave dagger and burst her — she has no dash to escape.
- **Zed:** Skill matchup. He has the same all-in pattern with more disengage (his **R** untargets him for 0.5s, breaking your channel). Hold **R** until he uses **R** first; if you can survive his combo, you reset on the kill.
- **Twisted Fate:** Counter-pick this one. Pre-6 you outpush him; after 6, when he tries to roam, you blink onto a wave dagger and delete him because he has no defensive item. Track his **R** with mid wards.
- **Diana:** Hard counter into you. Her **Q-R** combo procs before your **W** even drops the dagger. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as a third item; never blink on her under tower without it.

## Power spikes & win conditions

- **Level 2:** With **Q** and **E** you can already trade. Drop **Q**, walk forward to its bounce range, blink **E** onto the trailing dagger for AOE damage, then walk out. Free poke if you do it on cooldown.
- **Level 6:** First **Death Lotus**. With Voracity, one kill or assist refreshes the channel and doubles your damage in skirmishes — pre-6 fights lasted 4 seconds; post-6, a takedown can extend a fight to 10s of cycling resets.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completion (~ minute 11-13):** First major item spike. The active dash gives you a second mobility tool, so you engage on a target who already burned their escape (Flash, Lux **E**, Yasuo **E**). Roam pressure flips here.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~ minute 18-22):** Your W-E-Q-AA combo now one-shots any squishy under 70% HP without R. This is the timing where you force objective fights and look for picks on the side lanes.

## Common mistakes

- **Channeling R pre-engage.** Hard CC interrupts Death Lotus and wastes the cooldown. Use **R** post-engage: after your team's tank engages, after the enemy frontline blew their CC, then channel from a safe spot to mop up. Pre-engaging with **R** is reserved for finishing a low-HP target who has no way to interrupt you.
- **Blinking E first, then dropping W.** The cast order is **W → E → Q**. The dagger must be on the ground (or about to land) when you blink, otherwise you don't pick it up and you lose the AOE damage of the passive proc plus the cooldown reduction on Shunpo.
- **Greeding for the reset on a target you cannot finish.** If the enemy is at 35% HP but their teammate is right next to them, the kill won't trigger Voracity in time and you die to the follow-up. Disengage with **W** Move Speed, wait for the cooldowns the slow way.
- **Wasting Shunpo on minions for waveclear.** You need **E** as a defensive escape tool. Push waves with **Q** plus auto-attacks; only blink to a minion if you are committing to a fight or escaping.
- **Picking Katarina into double point-and-click CC.** If the enemy team has Annie + Leona, your **R** never resolves. Either dodge in champ-select or accept that you have to play around their cooldowns: blink in only after they burn the stuns on someone else.

## Advanced tip

Use **E** on enemy wards to escape ganks. The blink works on any visible ward — including enemy trinkets and pinks placed on your side of the river. Spot a Stealth Ward at the tri-bush before a gank arrives, and you have a free escape tool that does not show up on the enemy's map: most opponents place wards forward without realising they are giving you an exit. The mirror-image play is also true: if you spot an enemy ward placed near your tower as you back, you can reposition the start of your next gank around it.
