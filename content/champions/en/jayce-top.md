---
title: "Jayce Top Build & Guide — Patch 16.9"
slug: "jayce-top"
language: "en"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Jayce top lane guide for League of Legends Patch 16.9: weapon-swap mechanics, lethality build path, key matchups, power spikes, common mistakes, and advanced tips."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Each weapon swap (R) grants a short Movement Speed burst and lets Jayce ignore unit collision briefly."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: leap to a target, dealing physical damage and slowing nearby enemies. Cannon: fires a long-range AOE skillshot — main poke tool."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passive mana on auto, active aura damage around Jayce. Cannon: max Attack Speed on the next 3 attacks — autoattack burst window."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: short-range knockback dealing % max HP magic damage — execute and disengage tool. Cannon: drops a gate that speeds allies and amplifies a Q (Shock Blast) shot through it."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (6s cooldown). Toggles between melee Hammer (engage, sustain, knockback) and ranged Cannon (poke, AOE waveclear). The first attack after swapping to Cannon shreds the target's Armor and Magic Resist."
      dd_spell_id: "JayceStanceHtG"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP threats (Vladimir, Rumble, Kennen): magic shield saves you when burst lands and adds AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC engage (Camille E, Sett W, Malphite R): the spellshield blocks the lockdown ability"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "when ahead and being focused: passive revive lets you stall a fight after a successful all-in trade"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has 3+ AP/CC threats; tenacity reduces the duration of stuns and slows"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Use Cannon Q poke to bleed HP before level 6, then all-in with Hammer Q leap, W aura, E knockback once they are below 50%. Convert lane lead into splitpush pressure on side waves."
  weakness: "Mana hungry: missed Q poke wastes the trade. Hard gap-closers (Camille E, Malphite R) close the range gap before you can swap to Hammer. Falls off late game versus heavy MR stacking."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack proc'd by Jayce's 3-hit trade (Cannon Q + AA + Hammer Q-AA-E) gives +8% damage every skirmish. Triumph restores HP on multi-takedowns; Legend: Alacrity hits AS cap inside W (Hyper Charge); Coup de Grace closes kills under 40% HP."
    secondary_rationale: "Sorcery secondary: Manaflow Band stops you running dry from Cannon Q poke spam in long lanes. Transcendence pushes Ability Haste so the weapon-swap window comes back faster — every extra Q in lane is HP off the enemy."
    secondary_alternative: "Versus heavy poke ranged tops (Vladimir, Kennen, Quinn), swap Sorcery to Resolve with Bone Plating (chunk-reduction on the first three hits taken) and Second Wind (passive HP regen below 50%) for lane sustain."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Immobile melee bruisers without ranged answer"
      reason: "They have no way to interact with Cannon Q range. Poke them off the wave for the first 6 levels and they cannot scale; Nasus loses Q stacks, Garen never gets to Q, Sett never builds his W (Haymaker) bar."
    - examples: ["yorick", "tryndamere"]
      archetype: "Slow scalers without lane harass tools"
      reason: "Their kill threat needs items. Cannon Q removes minutes of farm before they hit a power spike, and Hammer E knockback denies the all-in window when they finally try to commit."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with item-based MR and engage ult"
      reason: "They itemize through Cannon poke (Bramble Vest, Negatron Cloak) and their ult (Malphite R, Maokai R) lets them flash-engage past Hammer E knockback. Jayce damage falls off if the lane goes long without a kill."
    - examples: ["vladimir", "kennen"]
      archetype: "Ranged top scalers with sustain or matched range"
      reason: "Vladimir's Q (Transfusion) heals through poke; Kennen W (Electrical Surge) out-ranges Cannon Q. Both turn the lane into a poke trade that Jayce loses without the all-in option a melee bruiser would give him."
    - examples: ["camille", "renekton"]
      archetype: "Hard-CC bruisers with fast gap-close"
      reason: "Camille E (Hookshot) and Renekton W (Ruthless Predator) close the range inside the cannon-Q cast window and lock Jayce down before he can swap to Hammer E knockback. He has no dash to peel them off."
---

## Overview

Jayce is a ranged-melee hybrid skirmisher who lives or dies on his weapon swap (R). In **Cannon stance** he is a long-range poke specialist with an AOE skillshot Q and a movement-speed gate (E) that amplifies Q damage when shot through it. In **Hammer stance** he becomes a melee bruiser with a leap-Q, an aura W, and a max-HP magic damage knockback (E). The R toggle has a 6-second cooldown, and the first attack after swapping to Cannon shreds the target's Armor and Magic Resist — the entry trigger for every all-in.

Top lane Jayce wants the lane long. Bleed HP with **Cannon Q + E gate**, retreat to safe range, repeat. Once the enemy is below half HP, swap to Hammer, leap with **Q**, drop **W** for the aura damage and the mana-on-hit passive, and finish with **E** knockback if they survive. Convert any lane lead into splitpush pressure — pushing a side lane alone to force the enemy to answer. Side-lane Cannon Q range is one of the safest splits in the game, and Eclipse plus Hubris give you the burst (high damage in 1-2 seconds) to win 1v1 skirmishes against most top-laners.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** for poke-friendly matchups. Swap to ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** versus a ranged top (Vladimir, Quinn, Kennen) to survive the early Cannon-Q exchanges.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first item spike. The shield procs from two abilities in 1.5s, which Jayce hits naturally with Cannon Q + Hammer Q on swap. Adds AD, omnivamp (life-leech on all damage), and Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots versus an AD top-laner (most of the meta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (a stat that ignores a flat amount of the enemy's armor) plus a takedown stack passive (Eminence) that snowballs your damage from one kill into many. Ideal as second item when ahead.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality and a slow on damage. The slow on Cannon Q hit converts retreating enemies into Hammer Q catch targets.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — versus AP threats (Vladimir, Rumble, Kennen). The magic shield saves you when burst lands and adds AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — versus single-target hard CC engage (Camille E, Sett W, Malphite R). The spellshield charges up out of combat and blocks the next ability that would lock you down.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when ahead and being focused. The revive passive lets you commit harder in skirmishes; if you trade your life for two, you come back to take a third.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Plated Steelcaps when the enemy team has 3+ AP or CC threats; the tenacity passive reduces stun and slow duration.

**Boots:** Plated Steelcaps default. Mercury's Treads versus heavy magic damage or chain CC.

**Skill order:** Max **Q** first (the main damage source in both stances), **E** second (knockback for execute, gate for poke amplification), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Versus poke ranged tops, swap to **Resolve** with **Bone Plating** + **Second Wind**.

## Key matchups

- **Darius:** Pre-6, kite him (move backward while you keep attacking, staying out of his reach) with Cannon Q and never enter his Q (Decimate) outer ring. Hammer E knockback cancels his W (Crippling Strike) reset if you time it right; once you knock him back under tower, he loses all kill threat.
- **Camille:** She wins post-6 when she has E (Hookshot) up. Track her E cooldown: when it is down, freeze the wave (hold the minion line in front of your tower without pushing it forward) and chip her HP with Cannon Q. When it is up, hold ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** spellshield charged.
- **Malphite:** Lane is winnable until he hits ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus a single armor item, after which Cannon Q tickles him. Win lane in the first 12 minutes or accept a scaling loss; consider rushing teamfight items for the side-lane skirmishes.
- **Fiora:** Bait her W (Riposte) by feinting Hammer Q — start the leap animation, then stop. Once W is on cooldown, all-in with the full Hammer combo. If you Q her into W you lose a 16-second cooldown ability for nothing.
- **Vladimir:** Hardest matchup in the standard pool. His Q heals through your Cannon poke and his W (Sanguine Pool) dodges Hammer E knockback. Ask the jungler for early ganks before he has 2 items, then dodge teamfights and splitpush sides instead of grouping.

## Power spikes & win conditions

- **Level 2 (Q + W or Q + E):** Cannon Q + AA + swap to Hammer Q is a 35-40% HP trade on most squishies. If the enemy walks up to last-hit a melee minion, dump the combo and back off; your passive Move Speed on swap gets you out before they can answer.
- **Level 6 (first R rank):** Both stances unlock at full power. The Cannon-to-Hammer all-in is now a kill threat at 40% HP rather than a chunk trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minute 11-13):** First major item spike. The shield + omnivamp lets you commit to longer trades; you no longer have to retreat after one Cannon-Hammer cycle.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ minute 19-22):** Eminence stacks (the takedown bonus AD passive) start snowballing. Force a side-lane skirmish to stack Eminence, then rotate to objectives at full damage.

## Common mistakes

- **Throwing Cannon Q without a setup.** Naked Q poke is mana-expensive and easy to dodge. Drop **E** (Acceleration Gate) toward the enemy first; the gate amplifies the Q that passes through it (longer range, more damage), and the slight delay forces the enemy to commit to a movement direction before you fire.
- **Swapping to Hammer too early.** If you swap before the enemy is below ~50% HP, you are committing to a melee fight without the burst to finish. Stay Cannon until the chip damage threshold is reached, then swap and all-in.
- **Forgetting the R-Cannon shred on first attack.** When you swap to Cannon (R), your first AA shreds Armor and Magic Resist. Burning that proc on a minion is throwing free damage; always save it for an enemy champion.
- **Splitpushing without R up.** R has a 6-second cooldown but is your only escape tool — the speed boost on swap. Splitpushing into a 4v1 gank with R on cooldown means you die. Treat R like a dash with a long cooldown when grading risk.
- **Ignoring mana costs in extended trades.** Hammer W has a passive that restores mana on autoattacks; if you stay Cannon during a long trade your mana pool empties. Swap to Hammer for 2-3 autos mid-trade to refill, then swap back to finish in Cannon.

## Advanced tip

Master the **R-cancel** at the end of Hyper Charge (Cannon W). When you press Cannon W you get max attack speed for 3 attacks — but if you swap to Hammer (R) immediately after the third attack lands, you skip the auto-recovery animation and start your Hammer Q leap a quarter-second earlier. This is the difference between catching a Flashing target and seeing them escape with 5 HP. Practice it in the Practice Tool versus a target dummy until the timing becomes muscle memory before taking it into ranked.
