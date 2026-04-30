---
title: "Jhin Bot Build & Guide — Patch 16.9"
slug: "jhin-bot"
language: "en"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Jhin bot lane guide for League of Legends Patch 16.9: starter kit, lethality-crit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Jhin's hand cannon fires only 4 shots, then must reload. The 4th shot always crits and deals bonus execute damage. Crits also grant a short Move Speed burst."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Targeted shot that bounces up to 4 times. Each kill makes the next bounce hit harder. Reliable poke and waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Very long range linear skillshot. Roots if the target was recently hit by you or an ally. Use after auto-attacks or support engage."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Invisible lotus trap that arms after a brief delay. Slows on step, then explodes for damage. Use to zone, cover flanks, and confirm W roots."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Channeled ult: 4 long-range shots that stop on champions, slow them, and deal more damage as their HP gets lower. The 4th shot crits."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "vs squishy enemy backline (no tanks): lethality first item amplifies your W root burst, plus the Move Speed active helps roams"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds cuts their healing in half during your R execute window"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC that cancels your R (Blitzcrank hook, Morgana Q, Ashe R): the spell shield buys you the cast you need"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "when you are ahead and need lifesteal + a shield to survive long fights without a peeler (an ally who protects the carry)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs all-in divers (Diana, Kha'Zix, Master Yi): the in-combat Move Speed and ghosting through minions help you kite while your team peels"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Land your 4th-shot crit during every trade and use W root chains with your support to lock targets at long range. Position to keep R lanes clean during objective fights."
  weakness: "Locked attack speed and no dash. Hard countered by mobile divers and engage tanks; if your support gets pulled away you have no escape outside Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Immobile long-range marksmen"
      reason: "They share Jhin's lack of dash but have shorter effective burst windows. Once Jhin hits his 4th shot pattern with a support follow-up, he wins straight trades by the level 6 spike."
    - examples: ["sivir", "kalista"]
      archetype: "Reset/mobility marksmen that rely on staying close"
      reason: "Their kits want short range; Jhin can W-root them from outside their auto-attack range and follow up with E (the lotus trap) to close the kill window before they reset."
    - examples: ["soraka", "yuumi"]
      archetype: "Pure healing enchanters in the bot lane"
      reason: "Jhin's W-root + R execute punishes low-HP healers fast. With Mortal Reminder online (Grievous Wounds: cuts healing in half) the heal-bot game plan collapses."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Aggressive level 1-3 lane bullies"
      reason: "They burst Jhin during his reload windows (after each 4-shot cycle his hand cannon must reload). Jhin has no mobility to disengage and his W root needs a setup he cannot create alone at level 1."
    - examples: ["kai-sa", "tristana"]
      archetype: "Mobile hypercarries with built-in escapes"
      reason: "Built-in dashes (Kai'Sa's E reposition, Tristana's W jump) dodge W roots and interrupt R cast windows. They scale into a 1v1 Jhin cannot kite away from."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Hard-engage tank supports"
      reason: "They land point-and-click crowd control on Jhin during his reload frames; he has no dash to peel himself and his W needs them to be already damaged to root."
---

## Overview

Jhin is a long-range marksman who plays like a sniper rather than a sustained DPS (damage-per-second) carry. His hand cannon **Whisper (Passive)** fires only 4 shots between reloads, but the 4th shot always crits and executes low-HP targets — so every trade (a brief exchange of attacks in lane, not a full kill attempt) is built around timing that 4th bullet on a wounded champion. He has no dash and a fixed attack speed, so positioning and setup matter more than mechanical APM.

His game plan: poke with **Q** and auto-attacks until the support engages, then chain **W** roots into a 4th-shot crit. After level 6, **R** turns picks (eliminating an isolated enemy outside the teamfight) and objective sieges into kills from outside the enemy team's range. If your front line peels (protects you from divers) you outscale most bot lane duos by minute 25.

## Recommended Build

**Starting items:** Doran's Blade + 1 Health Potion. Skip Doran's Shield unless the lane is a heavy auto-attack matchup like Draven or Lucian, where the extra HP outvalues the bonus damage.

**Core items (in order):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — first-item burst spike. The execute on enemies below 5% HP synergizes with Jhin's 4th-shot execute and his R; you finish kills your team would otherwise miss.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots are the standard pick for marksmen; Jhin's locked attack speed scales into damage per shot, so the AS turns into raw damage.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — the energized shot adds long-range poke (matches Jhin's identity) and the bonus range lets you hit champions before they enter their own attack range.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Jhin's 4th shot is a guaranteed crit, so IE's crit damage multiplier turns it into a one-shot button on squishies.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration for the late game when the enemy front line buys defensive items.

**Situational items:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — first item swap when the enemy team has no tanks. The lethality (flat armor pen) makes your W-root burst delete squishies in 1-2 shots in early skirmishes, and the active Move Speed helps you reposition for R cast windows.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — replace Lord Dominik's against healing-stacking comps (Soraka, Aatrox, Vladimir). Grievous Wounds cuts healing in half during your R execute window.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — buy 3rd-4th vs single-target hard crowd control that cancels your R channel (Blitzcrank hook, Morgana Q, Ashe R). The spell shield blocks one ability and lets you finish the cast.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — when you are ahead and need lifesteal plus a shield to survive long fights without a dedicated peeler.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — vs all-in divers (Diana, Kha'Zix, Master Yi). The in-combat Move Speed and ghosting through minions help you kite (move backward while still attacking) until your team peels.

**Boots:** Berserker's Greaves is default. Boots of Swiftness become correct only when the enemy team stacks slows you cannot avoid (Ashe + Nautilus + Anivia type composition).

**Skill order:** Max **Q** first (main DPS and waveclear), **W** second (root reliability and base damage), **E** last (utility, only needed at point 1 for the slow). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Fleet Footwork** (movement + sustain in lane), **Presence of Mind** (ult mana refund), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace** (extra damage on low-HP targets — pairs with Jhin's 4th-shot execute). Secondary **Sorcery** with **Absolute Focus** and **Gathering Storm** for late-game scaling.

## Key matchups

- **Caitlyn:** She out-ranges your auto-attacks but loses every all-in (a full commitment fight aimed at a kill, not just a quick trade) once you hit 4 stacks of your passive. Stay behind minions, Q-poke when she misses traps, and W-root her if your support touches her first.
- **Draven:** Lane bully. Avoid auto-attack trades level 1-3; he wins straight DPS exchanges. Wait for Q poke when he is busy stacking axes; if he overcommits, your 4th-shot crit punishes him hard.
- **Lucian:** He bursts during your reload windows. Track your 4-shot count visibly (the cannon icon shows shots remaining) and never start a trade with shot 3 or 4 — reload first, then engage.
- **Sivir:** Her spell shield blocks your W root. Bait the shield with Q first, then W when it is on cooldown. After 6, her R lets her chase you, so fight only when your support has crowd control to follow up.
- **Soraka / Yuumi:** Pure heal supports. Buy Mortal Reminder 3rd or 4th item; without Grievous Wounds (the debuff that cuts healing in half) you cannot kill them no matter how many shots land.

## Power spikes & win conditions

- **Level 2-3:** With **Q** and **W**, you have the strongest level 2 all-in pattern in the lane: support engage → AA → Q → W root for the 4th-shot crit. Force a fight the first time you hit level 2 before the enemy.
- **Level 6:** **Curtain Call** unlocks. You can finish kills started by your jungler in the river or pick off a low-HP enemy from a screen away during a recall. Always have R ready before objective fights start.
- **The Collector completion (~ minute 11-13):** First-item spike. The 5% execute lets you close kills your support starts. This is the window where snowballing the lane (turning an early lead into an item lead, which becomes a kill lead) is easiest.
- **Infinity Edge online (~ minute 28-32):** Three-item spike. Your 4th shot one-shots most non-tank champions. Force teamfights on objectives now — late-game Jhin with IE + Rapid Firecannon hits backlines (the carries standing behind the tanks) from outside their R range.

## Common mistakes

- **Auto-attacking when shot 4 is loaded into a tank.** The 4th-shot execute is wasted on full-HP frontliners. Hold the 4th shot for a squishy target stepping forward, or last-hit a minion to refresh the cycle before re-engaging.
- **Walking forward during reload.** After the 4th shot, you must reload before the next auto-attack. Step back during this window — many Jhin deaths happen in the half-second when the enemy realizes you cannot fire.
- **Throwing W blind for poke.** W only roots if the target was recently damaged by you or an ally (within ~4 seconds). Land an auto-attack or wait for support engage first; otherwise W is just a slow line of damage they can sidestep.
- **R-channeling without vision.** Jhin is rooted in place during Curtain Call. Without wards covering flanks, an assassin just walks behind you and kills you mid-channel. Place E (the lotus trap) on the flank before pressing R.
- **Skipping E placement at objectives.** Lotus traps cover entries to Drake and Baron pits at zero opportunity cost. Place them every cooldown — they reveal flanks, slow engage, and confirm W roots.

## Advanced tip

Use **E** (Captive Audience) as a confirm for **W** roots. The lotus trap arms invisibly and slows enemies who step on it; if you predict where the enemy support will walk to ward, drop **E** there 2 seconds in advance, then **W** them the moment the trap slows triggers — the slow makes the long-range W-skillshot impossible to dodge from anywhere on the map. Skilled Jhin players net at least one 3000-range W-root per fight this way.
