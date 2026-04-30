---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "en"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Ekko jungle guide for League of Legends Patch 16.9: clear path, AP assassin core build, gank patterns, power spikes, common mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "Every third hit (auto-attack or spell) on the same target deals bonus magic damage and grants Ekko a short burst of move speed if that target is a champion."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Boomerang skillshot: a grenade flies out, slows enemies it hits, then rewinds back to Ekko on a separate damage tick. Both pass-throughs hit, so positioning matters."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Passive: bonus magic damage on autos against low-HP enemies. Active: place a delayed circle on the ground that slows then briefly stuns enemies inside if Ekko walks in."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Short dash that empowers the next basic attack to teleport to the target with bonus damage. Main gap-closer and the trigger for the passive third-hit bonus."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Rewinds Ekko's position to where he stood roughly 4 seconds ago, dealing magic damage in an area on arrival and healing based on damage taken in that window."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs heavy AD burst (Zed, Talon, Kha'Zix, Rengar) — stasis cancels their kill window after R reposition"
    - dd_id: "3135"
      name: "Void Staff"
      against: "the moment any priority target buys a Magic Resist item (e.g. Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Aatrox, Dr. Mundo, Vladimir) — applies Grievous Wounds on damage"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "vs squirrelly mobile carries (Vayne, Ezreal, Tristana) — slow on every hit makes Q + E sticking trivial"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "late game vs MR-stacking front line — magic pen plus a small revive heal on takedowns"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Land W stuns from fog, dash in with E, and reset fights with R when low. Snowball the early-to-mid game by ganking lanes pre-6 and forcing skirmishes around objectives."
  weakness: "Weak first clear and short range mean a strong invade jungler can punish him at level 3. R is on a long cooldown — once it is down, Ekko has no panic button."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
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
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Squishy ranged junglers without point-and-click CC"
      reason: "Ekko's W stun setup plus E dash closes the gap before they finish a kite rotation; the R reset makes the all-in safe even if their team rotates to help."
    - examples: ["master-yi", "shyvana"]
      archetype: "Scaling skirmishers with weak early game"
      reason: "Pre-6 ganks at level 3 with W + E + Q catch them while they are still farming camps; killing them once snowballs the gold lead Ekko needs to assassinate carries by minute 14."
    - examples: ["amumu", "zac"]
      archetype: "Tank engage junglers without dash"
      reason: "Ekko's mobility (E dash + R rewind) dodges their telegraphed engage, and his AP burst hits hardest into low-MR tanks. He kites them around corners and bursts their carries from fog before they can engage."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Strong early invade junglers"
      reason: "Ekko's first jungle clear is below average and his level-3 duel is weak. They walk into his jungle at level 3-4, kill him before W and E are maxed, and snowball off the bounty."
    - examples: ["nocturne"]
      archetype: "Junglers with global pressure and a spell shield"
      reason: "Nocturne's E spell shield blocks Ekko's W stun (= the abilility that sets up every gank). Without the W stun the gank fails, and Nocturne's R outranges Ekko's counter-gank tools."
    - examples: ["galio", "maokai"]
      archetype: "Tanks that stack Magic Resist early"
      reason: "Junglers who stack early Magic Resist blunt Ekko's mid-game spike: when his Lich Bane combo only chunks instead of one-shotting the front line, his snowball plan stalls."
---

## Overview

Ekko is an AP (= Ability Power, the stat that scales magic damage) assassin jungler who one-shots squishy carries with a fast combo of W stun → E dash → AA + Q. His passive **Z-Drive Resonance** rewards a sequence of three hits on the same target with bonus magic damage and a movement-speed burst, which means his damage rotation is built around landing three things quickly, not spamming spells. His **Chronobreak (R)** is the safety net: it teleports him back to where he stood roughly four seconds ago and heals based on damage taken in that window, so he can dive into a fight, take risks, and undo the consequence if he survives the channel.

Game plan: clear the first jungle camps cleanly, look for a level-3 gank on a lane with low mobility (Lux, Senna, Veigar, immobile mid laners), force Scuttle (the river crab — kill it for vision and a small move-speed buff in the river) on the side where your team has prio (= priority, your laner is pushed in and can rotate without losing CS), and snowball (snowball = turn a small early lead into a much bigger one) into mid-game skirmishes around the second drake. Ekko is not a scaling champion (scaling = getting stronger as the game gets longer) — if you reach minute 25 with no kills, the enemy ADC finishes 2 items and you stop one-shotting anyone.

## Recommended Build

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (the AP-friendly jungle pet — burns enemy champions with on-hit damage during ganks) plus **Smite** (the summoner spell every jungler takes — a quick burst attack on a single target, used both to clear monsters faster and to steal objectives like Drake or Baron from the enemy team).

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — first AP spike. Bonus on-cast damage and mana sustain mean your Q + W + E rotation chunks the target before the E auto even lands.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (= ignores part of the enemy's magic resist). Squishy carries usually have ~30 MR base, so the flat pen turns into pure extra damage.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= the next basic attack after a spell deals huge bonus magic damage). Ekko's E already empowers the next auto, so Lich Bane stacks on top: this is the item that turns the E dash into a one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst (= a lot of damage in 1-2 seconds). Its HP-threshold passive (= a passive that activates when the target is below a certain HP) lines up with R reset finishers.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier and the highest-ceiling slot in the build.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into AD assassins (Zed, Talon, Kha'Zix, Rengar). The stasis (= Ekko goes invulnerable but can't act for 2.5 seconds) buys time for cooldowns and, paired with R, lets you survive any AD all-in.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — buy the moment a priority target builds Magic Resist (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). Percentage magic pen scales with how much MR the target stacks.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing comps (Soraka, Aatrox, Dr. Mundo, Vladimir). Applies Grievous Wounds (= a debuff that cuts the target's healing in half) on damage.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — into mobile ranged carries (Vayne, Ezreal, Tristana). Every spell hit applies a slow, so Q + E sticks them in place for the kill.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — late-game replacement for Shadowflame vs MR-stacking front lines. Magic pen plus a small revive heal on takedowns.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable when the team needs more R uptime as a re-engage tool (= your ult coming back faster lets you flip a second teamfight).

**Skill order:** Max **Q** first (waveclear and main poke damage), **E** second (dash damage), **W** last. Take a point in **R** at levels 6, 11, 16. Start **Q** at level 1 for the safest first clear, then add **E** at 2 and **W** at 3.

**Runes:** Primary **Domination** (the assassin tree — stat bonuses that reward picking off lone targets) with **Electrocute** (after hitting a champion with three separate damage sources within 3 seconds, the next hit deals bonus burst damage — Ekko's W + E + Q chains it perfectly), **Sudden Impact** (extra magic pen for 4 seconds after using a dash or stealth), **Sixth Sense** (auto-tracks nearby enemy wards on a long cooldown — vision pressure for jungle pathing), **Ultimate Hunter** (lower R cooldown per unique champion takedown). Secondary **Sorcery** with **Manaflow Band** (mana refund on poke spell hits, fixes Ekko's small mana pool) and **Transcendence** (ability haste — your spells come back faster — which scales the entire kit).

## Key matchups

- **Lee Sin:** Strong early invade (= a jungler who walks into your jungle to kill you before you have items). Track him with vision on your buffs (= the small camps that give a temporary stat bonus, blue and red). Avoid fighting him before level 4 — his early dueling is better than yours.
- **Karthus:** Free matchup. His R deals damage to your whole team across the map, but he has zero mobility — W under his feet, E in, Q + AA and he dies in one rotation (= one full sequence of your abilities). Counter-jungle (= steal his jungle camps) after every gank he commits to.
- **Master Yi:** Scaling rival. Kill him before minute 20 or accept that he out-damages you in a late team fight. Force ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** spike fights and dive his bot lane while he is farming camps.
- **Sejuani:** Rough matchup. Her R is point-and-click (= no aim required, the spell just locks onto a target) and freezes you in place during your E dash. Wait for her to use R on someone else, then commit. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** earlier than usual.
- **Rammus:** Avoid solo fights. His passive thorns reflect part of your auto-attack damage; you mostly deal magic damage (good against Rammus's thorns) but his W steroid (= a temporary armor and reflection multiplier) still blunts your Lich Bane auto. Farm the opposite side of the jungle and group only with your team.

## Power spikes & win conditions

A power spike is a moment when the champion suddenly becomes much stronger than a minute earlier — usually when a new ability or item comes online.

- **Level 3:** First **W** + **E** + **Q** combo unlocked. You can finally gank lanes pre-6 (= before your ult is online) — drop W in fog (= the dark area outside vision, behind a brush or wall), wait for the enemy to step on it for the stun, dash in with E, Q on the way out. This is the strongest pre-6 gank pattern Ekko has.
- **Level 6:** **Chronobreak (R)** comes online. Now every dive (dive = walking under tower to kill a low-HP target) is recoverable: you take tower shots, kill the target, R back to safety. Force a fight or a dragon immediately.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 10-12):** First real damage spike. You chunk squishies with Q alone and one-shot enemies under 60% HP with the full combo. Look for picks (pick = killing a single isolated enemy out of position) on the side lanes.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 16-18):** This is THE spike. The empowered E auto plus Lich Bane Spellblade now hits for ~50% of an ADC's HP from a single dash. Group around drake and Baron — every isolated enemy dies in one combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Even MR-stacking targets fold to the full burst. If the enemy ADC has not bought ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) or Quicksilver Sash, your R reset is a free kill on the back line.

## Common mistakes

- **Ganking lanes pre-3 with no W placement.** Ekko's gank without W stun is just a slow E dash — easy to kite (kite = move backwards while attacking, keeping distance). Always seed W in fog 2 seconds before walking up: the delayed stun catches the enemy when they react to your dash.
- **Pressing R as soon as HP drops.** Chronobreak rewinds you to a 4-second-old position. If you ult the moment you take the first auto, you R back into the fight you wanted to escape. Wait — soak damage during R's channel (= the windup time before it activates) so the heal at the end is bigger, and your destination is actually safer.
- **Spamming Q for waveclear in jungle.** Q's mana cost is high and the boomerang return is the bigger damage tick. Walk past the camp so the return ticks the full pack twice; a stationary Q spam wastes the second hit.
- **Forcing Drake without prio.** Ekko's smite-fight (= the moment both junglers commit Smite to a contested objective) is mediocre because his R cancels if he is interrupted mid-channel. If your laners do not have prio (= pushed lane, free to rotate), give the drake and farm vision instead.
- **Ignoring the third-hit passive in laning skirmishes.** Z-Drive Resonance doubles your trade damage when you sequence three hits on the same target. Throwing Q at a wave for poke wastes the stack on a minion. Save Q for trades on champions, not on creeps you do not need to clear.

## Advanced tip

Use **Parallel Convergence (W)** as a pre-emptive vision tool, not just a stun setup. Casting W places the circle on the ground 3.5 seconds before it activates, and during that windup you see whether anyone walks through the area — giving you a free fog check on a chokepoint (= a narrow path the enemy must cross) or behind a Drake pit. Pros use this trick to scout enemy junglers crossing the river, then either commit the gank with the stun ready or rotate away without committing. The ability becomes both a pick tool and a ward (= the small object that grants vision in an area) at the same time.
