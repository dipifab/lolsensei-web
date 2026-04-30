---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "en"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Kha'Zix jungle guide for League of Legends Patch 16.9: clear path, isolated-target jumps, evolution choices (Q/E/R), lethality build, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Out of vision, your next basic attack on a champion deals bonus magic damage and slows. Marks isolated targets (no allied champion within 425 units) for amplified Q damage."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Slash a target for physical damage; massively higher damage on isolated targets (no nearby allied champion). Your main duel tool — evolution gives extended range."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Linear spike that damages on hit and heals you in the explosion area. Your only sustain in jungle. Evolution adds slow, vision on hit, and a triple-cone."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Targeted dash that deals damage on landing. Evolution adds 200 range and resets cooldown on champion takedown — the assassin pattern (in-out resets) lives here."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Become invisible briefly, gain bonus speed, and recast once to re-stealth. Each rank lets you evolve one ability (Q/W/E/R) for a permanent kit upgrade."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "vs comps where you need waveclear and side-lane pressure (twin laners pushing you out of side)"
    - dd_id: "6692"
      name: "Eclipse"
      against: "vs bruiser-heavy comps (Sett, Aatrox, Mordekaiser): the shield + healing helps you survive an in-out trade"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "vs heavy ward setups (enchanter supports, vision-focused junglers): clears wards on cast"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Lucidity vs heavy magic CC (Ahri charm, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap vs double-AD comps (two physical damage threats like Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Find isolated targets (no enemy champion within 425 units) and burst them with E + Q + AA. Evolved E refreshes on takedown, letting you reset jumps in skirmishes and teamfights."
  weakness: "If the enemy stays grouped your Q damage drops sharply — the isolation amplifier is gated on positioning. Hard CC (Malzahar R, Skarner R) cancels your jump and you have no escape."
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Squishy carry junglers without hard crowd control"
      reason: "They walk alone in their jungle to power-farm; Kha'Zix's E + isolated Q deletes them before they can answer. No CC means no way to stop the dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Kha'Zix invades faster with E and reaches Scuttle Crab on tempo. Counter-jungle their back camps after each Drake spawn — they rotate too slowly to punish."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Immobile or low-mobility ADC backlines"
      reason: "Late game your evolved E lands on the back line from over a wall. Without a dash they cannot reposition during your invisibility window from R."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded bruiser junglers with point-and-click crowd control"
      reason: "Their CC interrupts your jump animation and locks you down. Pre-6 they out-duel you in their jungle: a level-3 invade is a free kill for them."
    - examples: ["malzahar", "skarner"]
      archetype: "Champions with suppression or unstoppable lock-down"
      reason: "Suppression cannot be cleansed by Mercury's Treads; once they tag you, you cannot R out and your invisibility window is wasted."
    - examples: ["sett", "tahm-kench"]
      archetype: "Tanky bruisers with built-in peel for the carry"
      reason: "Their W or grab pulls the carry out of your isolation window before Q lands. You need a clean 1v1 jump and they remove that option."
---

## Overview

Kha'Zix is a melee AD assassin (an assassin is a high-burst champion designed to delete a single squishy target — squishy = a champion with low defenses, like ADCs and most mages) whose entire kit is tuned around finding **isolated** targets. Isolated, in his case, means there is no allied champion within 425 units of the target — slightly less than the range of a Mercury's Treads stat-stick. His passive **Unseen Threat** marks isolated enemies; his Q **Taste Their Fear** does massive bonus damage on them; his ult **Void Assault** lets him slip in and out of vision to set up that isolated burst. Pick him into squads that walk around alone — split-pushers, carry junglers, immobile back-line marksmen.

His jungle game plan: clear bot-to-top with **W** for sustain (sustain = the ability to heal during the clear), get level 3 with E unlocked, then start ganking pre-6 with the assassin pattern of **E** on the lane → wait for the gank target to be isolated from their support → **Q** for the amplified damage → finish with auto-attack. After level 6 every fight is a hunt: pick the **Evolved E** path (extended range and reset on takedown) so a successful kill refunds your dash and lets you bounce out before the team collapses on you. Drake and Rift Herald fights are won by stealthing in with **R**, deleting the back line, and then re-stealthing to leave.

## Recommended Build

**Starting items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. The Gustwalker pet gives out-of-combat movement speed, perfect for getting to ganks fast. Skip Mosstomper (the sustain pet) — your **W** already heals enough through a clear cycle.

**Core items (in order):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — first item rush. Lethality (a stat that gives flat armor penetration against low-armor targets, basically free damage on squishies) plus the active movement speed boost makes ganking and skirmishing trivial.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste boots so your **R** comes back faster. The faster R is up, the more invisibility windows you get per fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute passive: targets below 5% HP die instantly. Closes kills your raw burst would otherwise leave at 50 HP.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield blocks the first enemy ability after channeling. Saves you from a Malzahar R, Lissandra R, or any single point-and-click CC that would lock you down before you R out.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — late-game armor penetration that scales with the target's armor, plus a slow on damaging abilities so Q chases.

**Situational items:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — when your team needs side-lane pressure: cleave passive plus the active execute lets you split-push (push a side lane alone to force the enemy to respond) without losing damage in fights.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — into bruiser-heavy comps (bruiser = a tanky melee fighter like Sett, Aatrox, Mordekaiser): the shield + omnivamp (lifesteal that works on every type of damage) keeps you alive during an in-out trade.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — vs heavy ward setups (enchanter supports like Janna, Lulu): on-cast ward clear plus the bonus damage to wards lets you walk through their vision web invisible.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Lucidity vs heavy magic CC. Tenacity (a stat that shortens the duration of stuns and slows on you) lets you R out before they re-engage.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — vs double-AD comps (two physical damage threats like Yasuo + Caitlyn): flat armor and basic-attack damage reduction.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is the default. Mercury's Treads or Plated Steelcaps only if the matchup demands it.

**Skill order:** Max **Q** first (the isolated damage scaling is your main DPS), **W** second (sustain in jungle and slow on evolution), **E** last (extra rank gives raw damage but the dash distance and cooldown are what matter, not the scaling). Take **R** at levels 6, 11, 16.

**Evolution choices (the Q/W/E/R upgrade you pick at R rank-up):** standard order is **Q at 6** (extended range and refund on isolated takedown — the cleanest 1v1 spike), **E at 11** (extra range and reset on takedown for skirmishing), **R at 16** (longer invisibility, second recast). Pick **W at 6 instead of Q** only if the enemy team has multiple immobile threats clumped together (the triple-cone slow zones the entire team in a fight). Pick **E first** instead of Q only if you have to escape a heavy-CC jungler (Lee Sin, Vi) — the early reset gets you out of failed ganks, but you give up a lot of raw kill pressure.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Precision** with **Triumph** and **Coup de Grace** (or **Sorcery** with **Sudden Impact** support if you want sustain — sustain = healing during the fight). Stat shards: Adaptive Force / Adaptive Force / Health.

## Key matchups

- **Lee Sin:** Avoid level-2 and level-3 invades. His Q-Q follow-up plus W shield beats your kit before E is online. Clear bot-to-top, hover Scuttle with vision and let your laners catch him if he over-extends.
- **Graves:** Even early, your favor after level 6. Never duel him in the open jungle pre-6: his W blind cancels your auto-attack window. Wait for an isolated chance — gank his lane with **E + Q** and let your laner peel him from his ADC.
- **Elise:** Power-spike race. She wins level 3 ganks; you win the level 6 isolated jump. Match her first-clear tempo and trade objectives — hover Drake with vision so she cannot solo it.
- **Jarvan IV:** Counter-engage threat. His E-Q knock-up interrupts your jump animation. Buy ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** earlier than usual; the spell shield eats his flag-toss combo.
- **Karthus:** Free matchup. He has no escape and walks alone to push waves. Track his position pre-6 with vision; at level 6, **R + E + Q** deletes him from across his jungle while he is channeling Requiem.

## Power spikes & win conditions

- **Level 3 (Q + W + E):** Full kit unlocked. Look for an isolated gank — flank a side lane through the river bush, **E** in, **Q** the isolated lane opponent (the support has to be missing), auto-attack reset, **W** for the slow on the recall. Pre-6 Kha'Zix gank pre-6 is one of the strongest in the game when the target is alone.
- **Level 6 (first Void Assault + first evolution):** Pick **Evolved Q** for the standard burst path. Mid-river skirmish power spikes hard — R into invisibility, E onto the marked target, Q for the amplified damage, AA reset, recast R to leave. The full combo deletes a 1800-HP squishy in two seconds.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completion (~ minute 9-11):** Burst spike. The active speed boost lets you cross half the map for a flank (entering a fight from a side the enemy cannot see, usually behind their back line). Force fights around the second Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ minute 16-19):** Reset window. Your E now refreshes on takedown — a clean teamfight starts with E onto the carry, Q for the kill, and a second E onto the next target. This is when Kha'Zix becomes a teamfight-deciding pick (a pick = eliminating an isolated enemy outside the teamfight) machine.

## Common mistakes

- **Jumping onto a target that is not isolated.** Without the isolation amplifier (no allied champion within 425 units), your Q hits for roughly 60% less damage. Wait for the support to step away or your laner to peel them off — do not trade in the middle of their team.
- **Picking Evolved W as your first evolution by default.** Evolved W is a teamfight zoning tool, not a duel tool. If your team plays around picks (eliminating an isolated enemy outside the teamfight) and skirmishes, Evolved Q is the correct first pick 90% of the time.
- **Using R for damage instead of repositioning.** Your R is an invisibility window for entering and exiting a fight, not a damage button. Save the second recast to leave once your target is dead — re-stealthing during the recall wastes the tool's main value.
- **Greeding camps after a failed gank.** Without E reset (pre-evolved-E), if the gank fails you have no exit. Walk back through your jungle, do not auto-pilot to the next camp — the enemy jungler tracks your path and counter-ganks the next lane.
- **Building Eclipse first by default.** Eclipse turns Kha'Zix into a bruiser; you give up the lethality burst that makes him an assassin. Build Eclipse only when the matchup is bruiser-heavy and you cannot survive an in-out trade with raw lethality.

## Advanced tip

Drill the **R-E-Q-AA-recast-R** combo on the practice tool until the inputs are automatic. The trick is the auto-attack reset between Q and the recast: Q resets your basic attack timer, so the moment Q lands you weave in a basic attack, then immediately recast R to leave. Pulled off cleanly, this combo deletes a 1900-HP target in roughly 1.8 seconds and you exit invisible — a solo pick (a pick = killing an isolated enemy outside the teamfight) on the enemy ADC at Baron setup is a free objective. The skill ceiling is the timing of the AA between Q and R-recast: too early and Q has not landed, too late and your R window has closed.
