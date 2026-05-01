---
title: "Briar Jungle Build & Guide — Patch 16.9"
slug: "briar-jungle"
language: "en"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Briar jungle guide for League of Legends Patch 16.9: clear path, core lifesteal build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Attacks and abilities apply a stacking bleed that heals Briar from a portion of the damage. Bonus healing scales with missing HP. No innate HP regen."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Short leap that stuns and shreds (% reduction of) the target's Armor and Magic Resist. Main gap closer (closes distance) and trade opener (starts a short skirmish)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Leap forward and self-taunt to the nearest enemy (priority on champions), gaining Attack Speed, Move Speed, and AOE basic attacks. Recast for an empowered chomp that scales with missing HP and heals."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Cancels Blood Frenzy and channels: damage reduction and HP heal during charge. Release slows; fully charged knocks back and stuns on wall hit. Self-cancel of W is the key mechanic."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Kicks a global gemstone that marks the first champion hit as prey. Briar flies to it, fearing surrounding enemies on landing, and gains empowered Frenzy with bonus resists, lifesteal, and Move Speed until the prey dies."
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs double-AD comps (e.g. Yasuo + Caitlyn): turns burst into a slow bleed so you survive long enough to reset with W heal"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs AP burst threats (Syndra, Veigar, Lissandra) — magic shield triggers under heavy AP poke and prevents one-shot during R commit"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Steelcaps if the enemy has 3+ hard CC abilities (stuns, roots): tenacity keeps your R commit from being stopped mid-flight"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs AP-heavy comps with sustained magic damage: amplifies your Crimson Curse self-heal and W chomp heal by 25%"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Land R on a backline carry and ride empowered Frenzy until the prey dies. Sundered Sky and Bloodthirster keep you topped during the chase; the fear scatters their peelers."
  weakness: "No range and W's self-taunt locks you onto the nearest enemy — savvy opponents bait Frenzy onto a tank, then peel from outside your range while CC chains pin you in place."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision tree (sustained-fight runes): Briar's W Frenzy is a 5+ second auto-attack chase, so burst keystones waste damage early. Conqueror stacks each hit and peaks when R lands. Triumph heals on takedown, Alacrity adds Attack Speed, Last Stand pays at low HP."
    secondary_rationale: "Domination secondary: Treasure Hunter front-loads gold from your first ganks and Relentless Hunter gives out-of-combat Move Speed for cross-map R follow-ups (you reach side-lane fights one wave earlier)."
    secondary_alternative: "If the enemy has 3+ ability-based crowd control (Lissandra R, Maokai roots, Sejuani Q), swap Domination for Resolve with Second Wind (passive HP regen below 50%) and Revitalize (+10% to your W and R self-heal). You trade kill snowball for survivability through the CC chain."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Immobile mid-lane mages"
      reason: "R kicks a global skillshot that marks the first champion hit. Backline mages without a dash get pulled into a fear + Frenzy chain they cannot disengage from before chunk damage lands."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Slow tank junglers"
      reason: "Q armor shred (percentage based) carves through their resistances, and W's Attack Speed with sustain wins long fights. They cannot kite you and their CC is single-cast: once it is on cooldown you outheal the rest."
    - examples: ["warwick", "shyvana"]
      archetype: "Sustain skirmishers without escape"
      reason: "Mirror-style 1v1 in the jungle. Briar's W chomp scales on missing HP, so the longer the fight drags the more the math tilts toward her. Q stun interrupts their channel ultimates."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "AOE crowd control with multiple roots"
      reason: "They chain CC Briar mid-Frenzy, and her only escape is E to self-cancel W — but E is a long channel, so they re-CC her before the heal completes. R commits her into the worst possible position."
    - examples: ["olaf", "morgana"]
      archetype: "CC-immune or anti-heal pickers"
      reason: "Olaf R cleanses Briar's E knockback and stuns; Morgana E spell shield blocks Q stun and the R fear, breaking the engage window before Frenzy ramps up."
    - examples: ["nidalee", "gragas"]
      archetype: "Long-range pokers with displacements"
      reason: "Nidalee chunks Briar's clear with javelins from outside W range; Gragas R or E can knock Briar out of Frenzy mid-chase, resetting her ramp-up and stranding her without sustain."
---

## Overview

Briar is a melee **diver / skirmisher** (a champion that jumps onto the enemy carry and wins extended 1v1 duels). She turns her own loss of control into a feature: **Blood Frenzy (W)** auto-pilots her onto the nearest enemy with bonus Attack Speed and Move Speed, and her passive **Crimson Curse** heals her from the bleed her own basic attacks apply. She has zero innate Health regeneration, so the only way she stays healthy is by hitting things — once she stops attacking, she stops healing. Her ultimate **Certain Death (R)** is a global skillshot (an ability that travels across the entire map) that marks a target as prey and locks her into an empowered chase until the prey dies, fearing everything else around them on landing (fear = makes enemies run away uncontrolled for a short time).

The game plan is to clear jungle camps fast with W Frenzy area damage, look for ganks (surprise attacks on a lane from the jungle) starting at level 6, where R can isolate a backline target (the squishy carry positioned at the back of the team) away from their peelers (allies who protect the carry). From there, snowball (turn early kills into more kills) into a chase machine that out-sustains 1v1 fights with item life-steal and self-heal stacking. The high-skill move is the W-into-E self-cancel: knowing exactly when to interrupt your own Frenzy with **Chilling Scream (E)** to heal up and reposition, then re-engage with Q.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. The pet quest auto-completes around minute 3-4.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — pet upgrade from Hailblade (auto-evolves around minute 3-4 once enough XP is banked). The Gustwalker companion gives Move Speed on champion damage, which stacks on top of W's bonus and turns clear-into-gank transitions into surprise dives.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — first legendary item, first big power spike (the moment in the game when your champion becomes much stronger). Its passive turns your next basic attack into a guaranteed critical strike (crit = an attack that deals double damage) and heals you. That heal lines up with the empowered W chomp, giving Crimson Curse the missing-HP fuel it needs to ramp up.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots vs. most enemy comps. They reduce damage from basic attacks (AA = auto-attack), which matters a lot in long Frenzy fights against marksmen (long-range physical damage carries like Caitlyn or Jinx).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — extra Attack Damage based on your base AD plus a Lifeline shield (an HP-threshold passive: a shield that auto-pops when your HP drops below 30%). The shield is the safety net for R commits (full-engagement R chases) that go badly.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — raises your life-steal cap (life-steal = % of basic-attack damage converted into healing) and turns excess healing into a shield. Combined with Crimson Curse + Sundered Sky, you out-heal any team that hasn't built anti-heal items (items that reduce the healing you receive).

**Situational items:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — vs. squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn): converts the burst you eat into a slow bleed spread over a few seconds, giving you time to reset with W chomp heal.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs. AP burst (Syndra, Veigar, Lissandra). The magic shield triggers exactly when an AP threat is mid-combo on you.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Steelcaps if the enemy has 3+ hard crowd-control abilities (CC = stuns, roots, fears that lock your character). The boots' Tenacity stat reduces the duration of those CC effects, so your R commit isn't chain-stunned mid-flight.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — vs. AP-heavy comps with sustained magic damage: amplifies your Crimson Curse self-heal and W chomp heal by 25%, doubling down on Briar's identity instead of patching it.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when CC count exceeds AA threats.

**Skill order:** Max **W** first (DPS, sustain, Move Speed), **Q** second (gap close + percentage Armor/MR shred), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Domination** with **Treasure Hunter** and **Relentless Hunter**, or **Resolve** with **Second Wind** and **Revitalize** if the enemy team chains 3+ ability-based crowd control on you.

## Key matchups

- **Warwick:** Sustain mirror in the jungle (both champions heal a lot in fights). He scales with Attack Speed; you scale with W area damage plus chomp missing-HP damage. Don't open at full HP on either side: bait his Q (which fears you) first, cancel your own Frenzy with E to dodge it, then re-engage when his ultimate is on cooldown.
- **Lillia:** She kites you (attacks while running away) with Q passive damage and W slow. Save E for when she walks at you while spamming Q, so the knockback puts her into a wall and stuns her. Without E, she circles you forever.
- **Lee Sin:** Early-game fighter who beats you at level 3 if he opens with Q + Smite (jungler summoner spell). Avoid his red-side jungle until level 4; after Sundered Sky comes online, the math swings into your favor and his W shield doesn't heal as much as your W chomp.
- **Sejuani:** Tank jungler with hard crowd control. Q armor shred (reducing her Armor stat by a percentage) opens her up, but her R cancels your R commit mid-flight. Track her ultimate cooldown — if it's up, don't start R on a target near her.
- **Kha'Zix:** The classic counterpick (a champion specifically picked to neutralize you in draft) for skirmishers. He isolates and bursts you in 2 seconds (burst = high damage in 1-2 seconds). Group with your team after level 6 and play around vision (use wards to avoid being surprised); don't solo-invade his side of the jungle.

## Power spikes & win conditions

- **Level 3:** All three basic abilities online. First reasonable gank window — Q over a wall onto a target, W into Frenzy, Q stun against the wall.
- **Level 6:** First **Certain Death**. Long-range cross-map ganks (R'ing across the map onto a side lane) become a real threat: even an enemy who already used Flash and has no dashes loses the trade once R locks on.
- **Sundered Sky completion (~ minute 10-12):** Your first dueling spike (the moment you can win 1v1 fights reliably). You can outduel most junglers and most laners that you R onto from outside their vision.
- **Sterak's Gage online (~ minute 22-26):** The Lifeline shield turns failed R commits into kills. Combined with Bloodthirster's overheal, you become both the team's frontline (the tanky body that opens fights) and the finisher.

## Common mistakes

- **W-Frenzying a tank instead of the carry.** W's self-taunt locks onto the nearest enemy and prioritizes champions, but if Maokai (a tank) is closer than Caitlyn (a carry), you eat the Maokai. Use Q first to leap past the front line (the tanky champions in front of the team); Q places you on the priority target before W's auto-pilot kicks in.
- **Holding E too long for the wall stun.** Fully charged E knocks enemies back, but the channel (the period during which you're standing still casting it) is long and you take damage during it (only reduced, not blocked). If there's no wall lined up, release at 50-70% charge to get only the slow — partial E saves you, full E gets you killed.
- **Using R into a 4-man enemy group.** R fears the enemies around the prey, but they recover after 1.5 seconds. Once they recover, you're alone in the middle of their team in empowered Frenzy with no allies to peel for you (peel = ally protection that knocks attackers off you). Use R when the prey is split off — flanks (a single enemy approaching from the side), rotations, isolated backline moments — not on a clean grouped engage (a fight where the enemy is all bunched up).
- **Forgetting Crimson Curse needs missing HP to scale.** Bonus heal grows the lower your HP gets. Don't recall to base on full HP after a successful gank if a second fight is incoming; staying at 40% HP makes the next chomp heal nearly twice as strong.

## Advanced tip

Practice the **W self-cancel through E**: when Frenzy targets the wrong enemy (a tank instead of the carry, or peels you toward CC), tap E mid-Frenzy to reset. The damage reduction during E channel + heal % max HP turns a botched engage into a free reposition. Release E uncharged (or at 30%) the instant the priority target is in Q range, then Q onto them and re-W to start a clean Frenzy on the right person. The total animation cost is roughly 1 second; the kill conversion difference is a full HP bar.
