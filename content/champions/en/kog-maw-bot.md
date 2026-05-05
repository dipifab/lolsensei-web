---
title: "Kog'Maw Bot Build & Guide — Patch 16.9"
slug: "kog-maw-bot"
language: "en"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Kog'Maw bot lane guide for League of Legends Patch 16.9: on-hit hyper-carry build, key matchups, power spikes, common mistakes, and a positioning tip."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "On death, Kog'Maw becomes a walking bomb for 4 seconds, then explodes for true damage. A last-second threat, never a plan A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Linear projectile dealing magic damage and shredding the target's Armor and Magic Resist for a few seconds. Passive: bonus Attack Speed."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Self-buff (~6s) that extends auto-attack range and adds % max HP magic damage on every hit. The core of every Kog'Maw teamfight."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Linear skillshot that damages and leaves a slowing trail. Disengage tool and follow-up setup for W auto-attacks."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "Long-range AOE artillery shell on a ground target. Low cooldown, mana cost ramps with each cast. Poke, wave clear, cross-map executes under 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "vs poke-heavy enemy bots — extends first-shot range so you can W-auto from outside their poke window"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs single-target hard CC that locks you out of W (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs heavy dive comps (Malphite + Yasuo, Hecarim) — second life turns one positioning slip into two team-fight contributions"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs frontline stacking 3000+ HP (Sion top, Cho'Gath, double tank) — W on-hit % HP plus armor pen melts them faster"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Aatrox, Dr. Mundo) — Grievous Wounds halves their sustain for 5 seconds"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Stay alive behind your front line through mid game, hit a 3-item on-hit power spike around minute 25, then melt the enemy team during W windows in objective fights."
  weakness: "No dash and short base attack range (500). Hookers, assassins, and divers delete Kog'Maw before W can come up if his support is out of position."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
  
    primary_rationale: "Precision with Lethal Tempo: stacks during W and breaks past the 2.5 attack-speed cap, turning each W window into a tank-shredding burst. Triumph heals on takedown, Legend: Alacrity adds permanent AS, Coup de Grace adds 8% damage under 40% HP — the targets R cleans up."
    secondary_rationale: "Sorcery secondary: Transcendence pushes ability haste so W and R come back faster in sustained fights, and Scorch adds early lane poke from R chip to make level 1-5 less miserable for a champion with no escape."
    secondary_alternative: "Versus heavy hook or burst supports (Blitzcrank, Thresh, Pyke), swap Sorcery to Resolve with Bone Plating (damage cap on the first 3 hits after being hit) and Overgrowth (bonus max HP), trading some scaling for survival until you reach your first item."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "HP-stacking tanks and bruisers"
      reason: "Bio-Arcane Barrage deals % max HP magic damage on every auto, so the more health they pile up the faster you delete them. Tanks with no dash cannot punish you during your W window."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Immobile backline scalers"
      reason: "Living Artillery (R) hits ground targets at extreme range. Backliners that need to stand still to fire their main spell get chipped from off-screen and have no escape tool to punish you back."
    - examples: ["malphite", "amumu"]
      archetype: "Stationary frontline engagers"
      reason: "After their R lands, your team has 2-3 seconds of free fire — exactly enough for one full W cycle on the locked-down frontline before they recover."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports with single-target lockdown"
      reason: "Kog'Maw has no dash, no blink, no flash on E. One hook in lane equals one death because his only escape is Flash, which is a 5-minute summoner spell."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Long-range bot poke laners"
      reason: "Their auto-attack range exceeds Kog'Maw's 500 base range without W, so they harass for free in lane and force him into a mana-starved early game."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Roaming assassins"
      reason: "These champions reach the back line through dashes, jumps, or stealth resets. Once they pass your front line during a W window, no defensive item except Guardian Angel will save you in time."
---

## Overview

Kog'Maw is a hyper-carry marksman built around one short, decisive window: the **Bio-Arcane Barrage (W)** buff. For about six seconds you become the longest-range auto-attacker on the map, every hit deals percent-of-max-HP magic damage, and on-hit items like Wit's End and Blade of The Ruined King turn that window into a tank-erasing storm. Outside of W you have a base attack range of 500 — short by marksman standards — no dash, and no blink. The price of being a late-game monster is being one of the most fragile lane bullies' favorite victims for the first fifteen minutes.

The game plan is straightforward: survive lane behind an enchanter support (Lulu, Janna, Yuumi, Soraka), farm patiently, hit your three on-hit items around minute 25, and play every team fight from behind your front line so your W window goes uncontested. **Living Artillery (R)** patches the early-game pain by giving you free poke and a way to clear waves from a safe range; the mana cost ramps quickly when you spam it, so save it for kill secures or wave timers, not for harassment.

## Recommended Build

**Starting items:** Doran's Blade + Health Potion. Doran's Shield is acceptable into a strong poke matchup (Caitlyn, Varus), but Doran's Blade is the default for the on-hit ramp.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first-item attack-speed and true-damage proc on the third hit; pairs naturally with W on-hit windows.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bonus attack speed; the only boots option for an attack-speed-cap hyper-carry.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit plus Magic Resist; the single best item for AP-heavy enemy comps and amplifies your W magic damage.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — bolts apply on-hit to two extra targets, turning your W into AOE wave clear and AOE team-fight pressure.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — % current HP on-hit, life steal, and an active slow; the dueling tool you swap to ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** if you need shielding instead of life steal.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — into poke-heavy enemy bots (Caitlyn, Varus). Energized first auto extends your effective W-auto range so you can chip from outside their poke window.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs single-target hard CC that locks you out of W (Ashe R arrow, Morgana Q snare, Malzahar R suppression). Active cleanses the CC with one button.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — vs heavy dive comps (Malphite + Yasuo, Hecarim). The revive turns one positioning mistake into two team-fight contributions, which is exactly what a stationary AOE damage dealer needs.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs frontline stacking 3000+ HP. The armor penetration plus your W % max HP magic shred deletes super-tanks faster than any pure attack-speed item.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking comps (Soraka, Aatrox, Dr. Mundo). Grievous Wounds halves their sustain for 5 seconds; without it your W damage gets healed back faster than you apply it.

**Boots:** Berserker's Greaves is the only choice. Mercury's Treads is incorrect on Kog'Maw — the missed attack speed costs more than the tenacity returns.

**Skill order:** Max **W** first (the entire kit's identity), **Q** second (armor and magic resist shred plus passive attack speed), **E** last (utility only). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Transcendence** and **Scorch**, or **Resolve** with **Bone Plating** and **Overgrowth** versus hook or burst supports.

## Key matchups

- **Caitlyn / Varus:** Long-range poke laners. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, hide behind the wave, and farm under tower until level 6. Ask your support to ward both river and tri-bush; their pressure drops once you finish ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**.
- **Draven:** He outclasses you in any all-in pre-6. Match his level on lane priority, never trade autos in the open, and use **E** to slow him if he runs at you. His axes mean he commits to forward positioning — punish that with **R** poke after 6.
- **Lucian:** Avoid auto-attack trades (his passive double-shots win short trades). Instead, walk up only to last-hit and use the W window after minute 8 to outrange his **E** dash by 100+ units.
- **Jhin / Senna:** Safe matchups. Both lack a dash and want to position at long range, but neither matches the % max HP burst your W deals once you have an item. Look to all-in once your support has a CC up and your W is online.
- **Ezreal:** Skill-matchup. He pokes with **Q** but commits to a stationary cast each time. Walk up during his **Q** animation to last-hit, save **E** for his **E** dash to land a slow, and ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** is good if his team has follow-up CC after his ult.

## Power spikes & win conditions

- **Level 3:** With one point in each ability, you have your full poke kit (**E** slow into **W** auto into **Q** shred). This is your earliest credible all-in window if your support has a CC.
- **Level 6:** First **Living Artillery** unlocks lane-wide poke and last-hit secures from 1300+ units. Wave-clearing from across the river also unlocks if you are pushed in.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves completion (~ minute 14-16):** First serious team-fight power spike. The third-hit true damage proc combines with W % max HP to instantly threaten any squishy who walks within range.
- **3 on-hit items online (~ minute 25-28):** With ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**, your W window deletes the entire enemy team's health bars over six seconds. Force Baron, Atakhan, and Elder Drake fights here; this is the moment your team has to play around.

## Common mistakes

- **W'ing on cooldown for trades.** Every W you burn in lane is a W you do not have for the next team fight. Hold it for committed all-ins, scuttle skirmishes, and objective fights, not for poke; **R** is your poke tool.
- **R-spamming until you are out of mana.** Each Living Artillery cast within a short window costs more mana than the last. After 3 casts in 6 seconds you are paying 100+ mana per shot. Cap your spam at 2 in row unless you are securing a kill.
- **Standing at maximum W range during a fight.** Maximum range puts you outside your support's peel. Stand one auto-attack length back from your front line, not on its tip — assassins (called any champion that bursts a target down in 1-2 seconds) target you the moment they see your hat sticking out.
- **Picking Kog'Maw without an enchanter support.** Lulu, Janna, Yuumi, and Soraka are not preferences — they are the contract. With a hook or engage support you have no way to survive the laning phase and you scale into a fight you never reach.
- **Forgetting Q's resistance shred.** Hitting **Q** before W on a tank cuts their Armor and Magic Resist for several seconds. Always lead the all-in with **Q** when in range; the on-hit damage that follows lands as if they had built one fewer defensive item.

## Advanced tip

Buffer the **Bio-Arcane Barrage (W)** activation into the same input as your last-hit auto-attack. Pressing W slightly before the auto cancels Kog'Maw's slow wind-up and starts the W window 0.1-0.2 seconds earlier — across a six-second buff that is roughly one extra auto-attack. In team fights this is the difference between landing four W autos on the enemy front line and landing five before their initial dive crashes through; it is the single highest-value mechanic to drill in practice tool against a target dummy.
