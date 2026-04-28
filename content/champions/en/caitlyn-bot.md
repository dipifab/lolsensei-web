---
title: "Caitlyn Bot Build & Guide — Patch 16.9"
slug: "caitlyn-bot"
language: "en"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Caitlyn bot lane guide for League of Legends Patch 16.9: starter kit, lane-bully build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "Every few attacks Caitlyn fires a bonus-damage shot scaling with crit chance. Range is doubled against trapped or netted targets."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Channeled long-range line skillshot. Damages all enemies hit; later targets take reduced damage. Main DPS and waveclear tool."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Places a trap. When sprung it reveals and roots the enemy champion for 1.5s and grants an empowered Headshot."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Targeted net that slows the enemy and knocks Caitlyn back. Treat it as an escape from divers, not as an engage tool."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channeled global execute on a single target. Allies of the target can body-block the bullet, so wait for an isolation."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo) — bonus armor pen scales with enemy max HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds, cuts healing the moment you tag a target"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs assassin or diver pressure on you (Zed, Samira, Yasuo flank) — movement speed plus a passive shield buy you the second you need to E out"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hook or pick-off comps (Blitzcrank, Thresh, Morgana Q) — the spell shield eats one priority CC before you get bursted"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Bully bot lane with Q range and trap setups, snowball Headshot procs through The Collector and Infinity Edge, then close fights from behind your front line, kiting with E and finishing low-HP runners with R."
  weakness: "No real escape once E is on cooldown. Hard countered by divers and assassins (Samira, Yasuo, Zed flank), and falls behind hyperscalers like Jinx or Vayne if your early lead never converts into a midgame pick."
---

## Overview

Caitlyn is the longest-range marksman in the game and the textbook **lane bully**: the kind of bot lane carry whose entire identity is to make the first 12 minutes miserable for the enemy duo, then convert that lead into objectives. Her **Piltover Peacemaker (Q)** outranges almost every other auto-attack in lane, her **Yordle Snap Trap (W)** turns chokepoints into damage sites, and her passive **Headshot** punishes anyone who misplays around her traps and net. She has one of the lowest base armor and HP pools among ADCs, so the trade-off is real: she dictates the lane while she's ahead and folds quickly the moment she's caught out.

The game plan is simple to describe and demanding to execute: poke the lane down with **Q**, set traps in the bushes and around the bot tri-bush to threaten **W → empowered Headshot** combos, and convert the recall lead into the first turret plate gold. After **The Collector** and **Infinity Edge**, your job is to play as a back line carry: stand at the second-furthest position, kite with **E** when a diver lands on you, and use **R** as an execute on low-HP runners — never as a poke tool.

## Recommended Build

**Starting items:** Doran's Blade + 2 Health Potions. Skip the second Doran's even if you're winning lane — the gold goes much further into a Pickaxe component for The Collector.

**Core items (in order):**

1. **The Collector** — first-item rush. The execute passive triggers below 5% HP and erases the kind of low-HP runners that **R** wants to finish anyway. Lethality is ideal early since enemy ADCs have minimal armor.
2. **Berserker's Greaves** — attack speed boots. Mercury's Treads only if the enemy team has 3+ hard CC threats.
3. **Infinity Edge** — your biggest damage spike. Caitlyn's Headshot deals bonus damage that scales with critical strike chance, and IE turns each Headshot into a near-one-shot on backline targets.
4. **Rapid Firecannon** — extra attack range (over 700 base + RFC + IE makes you the longest-AA champ in the lobby) and an Energized proc that pairs naturally with Headshot timing.

**Situational items:**

- **Lord Dominik's Regards** — against tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo). Replace Rapid Firecannon if the enemy team has 3+ tanks.
- **Mortal Reminder** — against heavy healing comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds so you cut their healing the moment you tag them.
- **Phantom Dancer** — against assassin or diver pressure. The HP-threshold passive (a shield that triggers when you drop low) plus the movement speed gives you the half-second you need to **E** out.
- **Edge of Night** — against hook or pick-off comps (Blitzcrank, Thresh, Morgana Q). The spell shield eats one priority CC before you get bursted, which is the difference between living and dying in those matchups.

**Boots:** Berserker's Greaves is default. Mercury's Treads only against heavy AP CC like Brand or Zyra support.

**Skill order:** Max **Q** first (waveclear and main DPS), **E** second (cooldown reduction on your only escape), **W** last (trap damage scales but the trap timer doesn't change). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** and **Gathering Storm**, or swap to **Inspiration** with **Magical Footwear** and **Cosmic Insight** if you want extra gold on the Boots upgrade.

## Key matchups

- **Draven:** Slightly unfavored levels 1-3 because his Spinning Axe burst out-trades you. Don't fight him pre-3; freeze the wave near your turret, hit level 3 with all three abilities, then trade only when you have **W** placed in the lane bush. Punish his Q-Q-Q mana exhaustion windows.
- **Ezreal:** Even, leans Caitlyn-favored if the support lets you commit. You outrange his **Q** by a significant margin. Each time he Q's a minion, free **Q** of your own through the lane. Don't dodge **into** his **W** path.
- **Jhin:** Even matchup decided by **R** sniping discipline. Respect his fourth bullet (it does massive damage). When his **W** is down, walk forward and trade. Use **E** to dodge his **W** root if he telegraphs it.
- **Vayne:** Heavily Caitlyn-favored before level 9, nightmare after level 11. This is your gold mine: shove the wave hard pre-3, force her off the lane with **Q** poke, and keep your jungler alerted to dive opportunities at level 6. If she survives to two items, the lane is over and you should swap to a back line role.
- **Samira:** She wants a melee all-in once she has W. Set traps in the lane bush to deny her engage path, save **E** as a knockback the moment she dashes in (don't blow it on poke), and never fight her with Phantom Dancer's shield on cooldown.

## Power spikes & win conditions

- **Level 2:** With one point in **Q** and a point in **E**, your Q-AA-AA windup chunks 30-40% of an enemy ADC's HP if they walk forward to last-hit. Hold the wave at the lane center and look for this window.
- **Level 6:** First **Ace in the Hole** unlocks pick pressure. Cast it from inside a tri-bush so the bullet's reveal doesn't telegraph your position. Don't waste it as poke — wait for a low-HP runner with no allies nearby.
- **The Collector completion (~ minute 8-10):** First execute breakpoint. Most squishies under 5% HP die instantly to the passive, so **Q**-cleaving through a low minion line into an enemy champion becomes a free kill.
- **Infinity Edge online (~ minute 18-22):** Your largest damage spike. Headshot procs go from "stings" to "deletes the enemy ADC". Force objective fights here — Drake or Rift Herald — and build vision around your win condition zones.

## Common mistakes

- **Spamming Q for waveclear without managing mana.** Caitlyn is mana-hungry early. Q the wave only when it lines up two melee minions plus a caster, otherwise you'll be empty-tank for the next trade window.
- **Throwing W traps as poke.** Traps are a setup tool, not a damage tool. Place them in chokepoints (lane bush, tri-bush, river entrance) where the enemy must walk to last-hit or rotate. A naked trap thrown at the enemy ADC's feet just wastes 1 second of your lane prio.
- **Standing at max attack range in team fights.** Maximum AA range puts you outside your team's peel. Stand at the second-furthest position so a flanking assassin can't delete you uncontested before your support reacts.
- **Using R as poke from across the map.** **Ace in the Hole** has a long channel and any nearby enemy can body-block the bullet. Save it for **isolated** low-HP runners — the kind of target where there's no ally within 350 units to take the shot.
- **Burning E to chase a kill.** **90 Caliber Net** is your only escape. Once it's on cooldown you're a glass cannon (a champion with high damage and low defenses, like most ADCs) with no answer to a diver. Use it to escape, not to close the gap.

## Advanced tip

Practice the **"Trap → Q → empowered Headshot"** chain in chokepoints. Walk up to a tri-bush or jungle entrance, place **W** behind the enemy line on the side they'd retreat to, then push them with **Q** poke. The moment they step on the trap, the 1.5s root guarantees a follow-up **Q** plus an empowered Headshot — and the empowered shot has **doubled attack range** against trapped targets, which means you can fire it from a distance most ADCs can't even auto-attack from. In practice this turns a 2v2 lane into a 1.5v2: the enemy ADC has to choose between losing wave prio (priority — leaving the lane without losing CS) or stepping into a guaranteed combo. Either way, you win the trade.
