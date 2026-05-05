---
title: "Kindred Jungle Build & Guide — Patch 16.9"
slug: "kindred-jungle"
language: "en"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Kindred jungle guide for League of Legends Patch 16.9: mark hunting, on-hit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "Every 4 minutes a Mark spawns on a random enemy (champion or jungle camp). Killing the marked target gives a permanent stack — bonus AS, AD, and bonus auto-attack range. Core game plan."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Short dash + 3 quick auto-attacks at the closest targets. Resets attack timer. Use it for jungle clear, repositioning, and to buffer auto chains in fights."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf attacks enemies in an area for ~8s, granting AS and revealing camps. Lamb gains stacks while moving and attacking; the fully charged attack heals her. Toggle for clear speed and sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot that slows the target. After 4 autos on it, the next attack also deals damage based on missing HP. Burst tool on champions below 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Places a sacred ground zone — every unit inside (allies AND enemies) cannot drop below 1 HP for the duration, then heals at the end. Reactive save tool. Never pre-cast."
      dd_spell_id: "KindredR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target lock-on ults (Malzahar R, Skarner R, Warwick R) — the spell shield blocks the cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs hard CC chains (Leona + Lissandra, Sett R + Ashe R) — the active cleanse breaks the lock long enough to reposition"
    - dd_id: "6676"
      name: "The Collector"
      against: "when you are ahead and the enemy team has no early armor stackers — execute below 5% HP closes leads"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-heavy comps (Aatrox, Soraka, Dr. Mundo) — applies grievous wounds so their sustain in extended fights gets cut roughly in half"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ hard CC champions (e.g. Leona + Lissandra + Sejuani) — tenacity shortens stuns and roots so you can keep auto-attacking"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Stack Marks early. Each completed Mark gives permanent AS + AD + range — the lead snowballs (kills → stats → more kills) into a 3-item flanker that out-kites every brawler."
  weakness: "Squishy, no hard CC, long-cooldown reactive R. Hard-CC junglers that invade level 2-3 (Lee Sin, Xin Zhao, Elise) kill you before any Mark stacks; tanks with on-hit mitigation shrug off your DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades stacks 3 burst autos at the start of the combo — exactly the autos you need to finish Mounting Dread's 4-auto chain. Sudden Impact rewards the Q dash with lethality, Sixth Sense reveals enemy wards, Treasure Hunter snowballs gold off mark kills."
    secondary_rationale: "Precision secondary: Triumph refunds HP on takedowns (you'll be low after committing 4 autos), Coup de Grace adds 8% damage under 40% HP — synergy with E's missing-HP hit on the 4th attack."
    secondary_alternative: "Vs heavy AP burst comps (Diana jungle + Syndra mid + Brand support), swap Precision → Resolve with Second Wind + Revitalize for sustain in your own jungle and a stronger R heal."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Late-game scaling junglers and carries with weak early presence"
      reason: "They want to farm to 3 items before doing anything; you want to mark-hunt their jungle and bully their early camps. Each completed Mark widens the lead before they spike."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Squishy backline marksmen with no built-in escape"
      reason: "Cross-map gank with E lands a slow long enough for you to chain 4 autos and trigger Mounting Dread's missing-HP hit — they have no dash to break the chain."
    - examples: ["maokai", "nasus"]
      archetype: "Slow-moving tanks without dash"
      reason: "They cannot close on a kiting Kindred. You auto-attack from outside their CC range while Wolf's Frenzy chips them passively."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Early-game invade junglers with hard CC and lockdown"
      reason: "They walk into your level-2 camps with a kick, knock-up, or stun and kill you before you stack a single Mark. You have no dash that breaks lock-on and your R is not up yet."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut tanks with on-hit mitigation or immunity"
      reason: "Sion's W shield and Mundo's passive heal blunt your auto-attack DPS — your only damage source is on-hit autos, so anything that breaks that loop neutralizes your kit."
    - examples: ["zed", "talon"]
      archetype: "Burst assassins that delete you before R covers"
      reason: "You are squishy with no hard CC; they kill you in the 0.5s window before Lamb's Respite cast goes off. R does not block the damage, only the death — they wait it out and re-engage."
---

## Overview

Kindred is a marksman that hunts in the jungle. Lamb shoots, Wolf bites, and the kit is built around one mechanic that no other champion has: **Mark of the Kindred**. Every 4 minutes a Mark appears on a random enemy — a champion or a jungle camp — and killing it gives you a permanent stack of attack speed, attack damage, and bonus auto-attack range. Stack 4 marks and your range jumps; stack 8 and you start out-trading marksmen from outside their auto range.

Your game plan splits in two halves. Early game you are a **mark hunter**: you read the Mark icon on the minimap, decide if it's worth contesting (yours = always go, theirs = trade pressure for it), and bend your pathing around it. Mid game you become a flanker — Q-dash into the enemy back line (the carries that stand behind their tanks), E onto the carry, chain 4 autos, and Mounting Dread executes them on the missing-HP hit. Late game you are a hyper-scaling skirmisher that out-kites every brawler in the game (kiting = walking backwards while still attacking, so the enemy never reaches you).

## Recommended Build

**Starting items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** for a faster jungle clear (you are ranged, you must take Hailblade — Emberknife is melee-only) plus ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once enough XP is accumulated). Companion for AD skirmishers: brief movement-speed burst out of brush, perfect to chase a Mark or close a gank from fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — every third basic attack deals bonus true damage. True damage ignores armor, so it punches through tank itemization on enemies you cannot shred otherwise.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flat attack speed boots. Default choice; only swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has 3+ hard CC.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adds two extra bolts on every auto. Triples your jungle clear speed and lets Wolf-and-Lamb DPS spread to 3 targets in a teamfight.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit (extra magic damage added to every basic attack) + magic resist. Two birds: lifeline survivability vs AP burst (think Diana, Syndra, Brand) and shred vs squishy magic-resist-low backlines.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — bonus range on the energized shot, on top of the range you stack from Marks. End-game you auto-attack carries from screen-edge while their team chases nothing.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs single-target lock-on ults (Malzahar, Skarner, Warwick). The spell shield eats the cast so the chain never starts.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs hard CC chains. The active cleanses every CC including suppression — you press it the moment Skarner pulls or Sett ulti lands.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — when ahead, executes targets below 5% HP. Stacks neatly with E's missing-HP hit; the corpse generates extra gold.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-heavy comps (Aatrox, Soraka, Dr. Mundo). Applies grievous wounds so their sustain in extended fights gets cut roughly in half.

**Boots:** Berserker's Greaves default. Mercury's Treads only vs heavy hard CC.

**Skill order:** Max **Q** first (clear speed and damage per dash), **E** second (more burst on the missing-HP hit per rank), **W** last (the AS and heal scale fine on rank 1). **R** at 6, 11, 16.

**Runes:** Primary **Domination** with **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Secondary **Precision** with **Triumph** + **Coup de Grace**. Hail of Blades is iconic on Kindred because it ramps your first 3 autos to maximum speed — exactly the autos you need to start the Mounting Dread chain.

## Key matchups

- **Lee Sin:** Loses level-1 to you, but at level 2-3 his Q-W-Q kick deletes you before R is up. Path away from his side until level 4, then look for a counter-gank where he commits Q without W ready. Track his W cooldown — without it he cannot leave a fight.
- **Karthus:** Pure scaler. Invade his red side at minute 3 and steal a buff; he cannot stop you, and the tempo loss delays his level-6 spike. After 3 items he wins, so close it before minute 18.
- **Master Yi:** Must-kill before he gets ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**. Save E for his Q-dash exit window — when he reappears he eats the slow and your team chains CC. After his first item, do not 1v1.
- **Diana:** She wants to dive your back line; you want to dive hers. Save **R** for when she lands her R on your carry — the sacred ground zone keeps the carry above 1 HP through the burst, then your team kills her in the recovery window.
- **Xin Zhao:** Knock-up + lock-down kills you in 1.5 seconds. Never path adjacent to his camps level 2; group with a laner for buffs until you have 2 Marks of bonus range. After 3 items you out-kite him with Q resets.

## Power spikes & win conditions

- **Level 3:** Full kit unlocks. Your gank pattern is **E onto the target -> 3 autos with Q dash mid-chain -> 4th auto triggers missing-HP burst**. Without R yet, do not commit deep on a level 3 gank — flash-distance only.
- **First Mark stack (~ minute 5):** Permanent +AS, +AD, +range. Every Mark you complete after this widens the gap. Fight over Marks even if neutral — the stat lead is bigger than a single trade (a trade = a brief exchange of damage in a skirmish).
- **Level 6:** **Lamb's Respite** unlocks. From here on you can save a teammate from a guaranteed kill. The trick is **never pre-cast** — drop it the moment you see the enemy commit the kill spell, otherwise the zone runs out before the threat resolves.
- **3 items + 4-Mark range bonus (~ minute 22):** You out-range every marksman in the game. Position behind your front line in teamfights, stand still, and auto until everything dies. This is your scaling cliff — group with the team, do not splitpush (don't farm a side lane alone).

## Common mistakes

- **Pre-casting Lamb's Respite.** **R** is reactive, not proactive (you place it AFTER reading the threat, not before). Drop it the second the enemy ulti hits, not when they walk close. Pre-cast Rs save no one and waste your only safety tool for 110 seconds.
- **Ignoring the Mark icon.** The minimap shows the Mark on a small skull icon. Players who don't track it lose the entire identity of the champion. Open your map every 30 seconds and ask: "is the Mark mine to take, or theirs to deny?"
- **Q-dashing into the enemy team without an exit.** **Dance of Arrows** has a 12-second cooldown at rank 1. If you Q in to chase a kill and someone CCs you, you have no escape. Always Q with a wall behind your dash so the next Q (after CDR) bounces you back out.
- **Forgetting Mounting Dread's 4-auto requirement.** **E** does small damage on cast but the big payoff is the 4th auto-attack on the slowed target. If you E and only land 2 autos, the missing-HP burst never fires. Commit to the full chain or don't cast E at all.
- **Saving R for the perfect moment that never comes.** A "wasted" R that saves an ally for 3 seconds is still better than a perfect R that you never press because you held it too long. When in doubt, drop it.

## Advanced tip

The **R-bait** for objectives. At Drake or Baron with low HP teammates, drop **Lamb's Respite** ON the objective instead of on your team. Every unit inside cannot drop below 1 HP — including the objective. Your team smites or finishes the objective during the zone, and any enemy stepping inside also cannot kill you, so they either give up the contest or get caught when the zone ends and your team is full HP from R's tail heal. This flips a 50/50 Drake fight into a guaranteed objective + double-kill scenario when the enemy doesn't read the trick.
