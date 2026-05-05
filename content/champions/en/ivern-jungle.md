---
title: "Ivern Jungle Build & Guide — Patch 16.9"
slug: "ivern-jungle"
language: "en"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Ivern jungle guide for League of Legends Patch 16.9: pacifist clear via groves, enchanter build, Q root setups, Daisy fight control, key matchups, common mistakes."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Utility Jungler"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Cannot attack or be attacked by jungle monsters (only epic ones like Drake/Baron). Plants groves on camps that auto-free the monsters when fully grown."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Long linear skillshot that roots the first enemy hit. Allies who attack the rooted target dash to it. Recast to dash there yourself."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passive: in brush, autos deal bonus magic damage (you and nearby allies). Active: create a brush patch anywhere for vision and a damage zone."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Shield an ally (or Daisy). After 1.5s the shield bursts, dealing magic damage and slowing nearby enemies. If no enemies are hit, the shield refreshes."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Summon Daisy, a tanky golem ally. Her third consecutive auto on the same target launches a knockup shockwave. Recast to command her position."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs heavy single-target CC chained on your ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs AOE engage compositions (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "when the enemy's main pick threat is a long-range magic CC aimed at you"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs mobile assassins that dive your back line (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs heal-stacking comps (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Set up picks with Q from fog, shield your strongest carry with E mid-fight, and drop Daisy onto the front line so her third-auto knockup cleans up rooted targets. Spike hard at level 6."
  weakness: "Cannot 1v1 against champions — autos are weak, kit has no escape. Slow recovery if your jungle is invaded before two groves are placed; whiffed Q in a gank wastes the entire setup."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery rides every E shield (sticks to your ally) and procs on Q root for extra magic damage. Manaflow Band sustains mana for E-on-cooldown, Transcendence pushes ability haste past 40 for shorter Q cooldowns, Scorch closes the poke window in lane skirmishes."
    secondary_rationale: "Resolve secondary: Font of Life triggers on every Q root — your ADC heals when they attack the rooted target, turning a single setup into burst plus sustain. Revitalize amplifies Aery shields and the burst-shield-refund on E when no enemies are hit."
    secondary_alternative: "If you need more Flash uptime in protracted teamfights and your ADC already brings sustain, swap Resolve to Inspiration with Biscuit Delivery (early mana/HP) and Cosmic Insight (summoner spell haste, faster Flash and Smite)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Immobile carries without dash"
      reason: "A Q root from fog locks them in place; the Attack-to-dash chain by your ADC closes the gap before they can flash, especially after Daisy joins for the knockup follow-up."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Auto-attack scaling junglers"
      reason: "Ivern's grove mechanic skips camp fights entirely; while opponents grind autos against monsters, Ivern is already shielding lanes and setting up roots with his ADC by level 5."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Early-game invaders"
      reason: "Ivern cannot 1v1 — W damage requires brush, Q has no escape utility. A pre-3 invade deletes his groves and forces a defensive clear that snowballs the enemy XP and gold lead permanently."
    - examples: ["kha-zix", "rengar"]
      archetype: "Mobile assassin divers"
      reason: "They jump past Ivern's positioning onto the carry; the E shield burns through fast against burst, and his only hard CC is a slow-windup Q that dashes outrun before it lands."
    - examples: ["amumu", "zac"]
      archetype: "AOE hard-engage tanks"
      reason: "Their R-Flash chains catch a tightly-positioned team in one cone; one E shield cannot cover multiple targets at once, and Daisy's third-auto knockup arrives too late to save the back line."
---

## Overview

Ivern is a pacifist jungler — and that one word changes everything about how he plays. His passive forbids him from attacking jungle monsters at all, so he never trades autos in a camp. Instead he plants a **Brushmaker (W)** seed on each camp, walks away, and returns later to find the monsters auto-freed for full gold and XP. The trade-off: while a normal jungler is full-clearing, Ivern is shielding allies, gating river vision with active brush, and running cross-map for level-3 ganks that arrive before any other jungler is on the map.

His game plan is enchanter, not assassin. Land **Rootcaller (Q)** from fog of war, your ADC dashes to the rooted target through the auto-attack proc, you drop **Triggerseed (E)** on them as they engage, and at level 6 you slam **Daisy! (R)** behind the enemy line so her third consecutive auto launches a guaranteed knockup. The kit has no escape and weak autos — if you fight 1v1 against a champion, you lose. Stay in fog, stay near a teammate, and let your team carry the damage while you carry the setups.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern is ranged (475 attack range), so Hailblade is correct over Emberknife. Smite is still mandatory — you need it for Drake, Baron, and Voidgrubs even though you never smite a regular camp.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once you have enough XP). Companion for AP burst: adds a magic-damage proc on the auto after a cast, layering on top of W's brush bonus.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Your shields and heals stack a chain-effect that ramps healing every consecutive proc — ideal for an enchanter who shields, slows, and re-shields every 7-11 seconds.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste pushes Q and E onto a near-permanent cooldown.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — when E shields an ally, the Censer passive grants them attack speed and on-hit magic damage. Stacks with W brush bonus when your ADC is fighting in or near brush.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — a second shield-trigger item. Gives the shielded ally extra ability power and ability haste for a few seconds.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — global active heal/damage on a 5-second cast: drop it on a clumped fight to swing health bars.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — when an opponent has long single-target CC chained onto your ADC (Morgana Q, Ashe R, Lissandra R). The active cleanse keeps the carry alive longer than any shield can.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs AOE hard-engage compositions (Amumu R + Yasuo R wombo, Wukong R). The active shields multiple allies at once, which one E cannot.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — when a mobile assassin (Kha'Zix, Zed, Akali, Talon) explicitly hunts you. Stasis lets you survive the dive long enough for Daisy to peel.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs heal-stacking compositions (Soraka, Yuumi, Aatrox, Vladimir). Your magic damage applies the heal-cut, and you cast often enough to keep it permanently up.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** is acceptable when slows everywhere (Twitch, Ashe, Ahri W) keep stacking on you; ability haste loss is real, take only when mobility is the actual problem.

**Skill order:** Max **E** first (shield value scales hardest, slow shuts down dives), **Q** second (lower cooldown means more roots), **W** last (passive damage scales with rank but you take points only when no other ranks remain). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** with **Font of Life** and **Revitalize**.

## Key matchups

- **Lee Sin / Graves:** Hard counter. Both invade your jungle pre-3 and you lose every 1v1. Start near your strongest lane (where the ally can rotate to fight 2v2) and place wards in your raptors and red side. If they invade, retreat and let your laner punish from fog — never duel.
- **Master Yi / Warwick:** Easy. They commit autos to camps for early levels while you skip the camp fight via groves; you arrive at gank lanes one level higher than them. Once Daisy is online, her knockup interrupts Warwick R and stops Yi mid-Alpha-Strike chain.
- **Karthus:** Race the level-6 spike. He globals from min 6, you root and Daisy from min 6. The first kill decides who scales; if you land an early Q on him at Scuttle, your team rolls the next 10 minutes.
- **Kha'Zix:** Avoid him in fog. He isolates squishy targets for bonus damage — that target is you. Ward your back side of the jungle, group with your team for objectives, and never path solo near unwarded fog after minute 8.
- **Vi:** Even matchup decided by mid lane priority. Her Q-Flash-R chain bypasses your Q, but if your mid laner has prio she can't dive freely. Ward her flank route and pre-shield your ADC the moment she activates Q charge animation in vision.

## Power spikes & win conditions

- **Level 3-4 (full grove cycle):** Once two camps are grown and freed, you've matched a normal jungler's clear in roughly 60% of the time. Use the surplus to walk to a lane with your Q ready before the enemy jungler is at level 4.
- **Level 6 (Daisy! online):** First **R** unlocks the kit. Daisy is a tanky body in fights and her third-auto knockup is a guaranteed engage tool. Look for a free pick on a side-laner immediately after hitting 6.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completion (~ minute 11-13):** Shield/heal chains start ramping. In any fight that lasts more than 4 seconds, your healing output pulls ahead of any non-Soraka enchanter on the map.
- **3-item powerspike (Moonstone + Boots + Ardent or Staff, ~ minute 19-21):** Force objective fights. Your shielded ADC hits harder and faster than the opposing team's, and Daisy R takes a full minute of cooldown — you want to fight every time it's up.

## Common mistakes

- **Smiting normal camps.** You cannot — your passive disables it. Save Smite exclusively for Drake, Baron, Voidgrubs, and the rare cross-jungle steal on the enemy's red/blue when they are about to take it. Wasted Smite on a grove animation is throwing.
- **Attacking the rooted target yourself.** When you Q someone, you don't dash — your ADC does, automatically, when they attack. Recast Q only if you genuinely want to dive (rare); otherwise step back and shield the ally as they jump in.
- **Casting W brush in fights and not in lanes.** Brush is most valuable in lanes for permanent vision and a damage zone over the wave; in mid-fight it's barely a vision tool. Pre-place W in tri-bush before a gank, not after.
- **Dropping Daisy at max range.** Daisy's value is in her three-auto knockup, which only happens if she actually reaches her target. R inside the fight, behind the enemy line — not 1500 units away "for damage."
- **Trying to peel against AOE engage with one E shield.** E shields one ally at a time. Against Amumu R + Yasuo R hitting four people, you need Locket of the Iron Solari. Plan that item the moment you see the draft.

## Advanced tip

Use **W active brush placement** to fake fog for your ADC's positioning. Drop a brush at the edge of an enemy ward's range — they see you place it but can't see who walks into it. Rotate your carry into the brush, then Q across the lane: enemies cannot dodge a skillshot fired from behind a brush wall they cannot see through. This is the same trick that makes early Ivern/Caitlyn duos one of the highest-snowball laning combinations in the game, and it scales with item completion as your shielded carry's autos become Ardent-empowered hammers from inside the brush.
