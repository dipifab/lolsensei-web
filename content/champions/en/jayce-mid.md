---
title: "Jayce Mid Build & Guide — Patch 16.9"
slug: "jayce-mid"
language: "en"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Jayce mid lane guide for League of Legends Patch 16.9: Manamune rush path, weapon-swap combos, key matchups, power spikes, common mistakes, and an advanced tip."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Each weapon swap (R) grants a short Movement Speed burst and lets Jayce ignore unit collision briefly."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: leap to a target, dealing physical damage and slowing nearby enemies. Cannon: fires a long-range AOE skillshot — main mid-lane poke tool."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passive mana on auto, active aura damage around Jayce. Cannon: max Attack Speed on the next 3 attacks — autoattack burst window during all-ins."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: short-range knockback dealing % max HP magic damage. Cannon: drops a gate that speeds allies and amplifies a Q (Shock Blast) shot through it — the standard mid-lane setup."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (6s cooldown). Toggles between melee Hammer (engage, sustain, knockback) and ranged Cannon (poke, AOE waveclear). The first attack after swapping to Cannon shreds the target's Armor and Magic Resist."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs AP mid-laners (Annie, Veigar, Syndra): magic shield blocks the burst combo and adds AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC (Ahri charm, Lissandra R, Sylas E): the spellshield blocks the lockdown ability"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "vs grouped 5v5 comps with stacked frontline: AOE wave from the active hits the back line through the front"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has 3+ AP/CC threats; the tenacity reduces stun and slow duration"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Stack Tear (Manamune) on Cannon Q wave-poke, hit the Muramana spike at minute 14, then snipe low-defense targets with E-gate Q combos. Roam side lanes once R is rank 2 to convert the lead."
  weakness: "Mana hungry pre-Manamune: a missed Q wastes most of your trade. Mobile assassins close the Cannon-Q range inside the cast window. Falls off late versus stacked Magic Resist on AP-heavy teams."
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
    primary_rationale: "Press the Attack: Jayce's 3-hit trade (Cannon Q + AA + Hammer Q-AA-E) procs +8% damage, turning Cannon poke into a kill threat by minute 6. Triumph restores HP on takedowns; Legend: Alacrity caps AS inside W (Hyper Charge); Coup de Grace adds 8% damage under 40% HP."
    secondary_rationale: "Manaflow Band stacks fast on Cannon Q wave-poke for a permanent +50 Mana per stack. Transcendence at level 5 adds Ability Haste, which compounds with Manamune for a faster R weapon-swap window."
    secondary_alternative: "Versus assassin-heavy team comps (Zed mid + Kha'Zix jungle), swap Sorcery to Resolve with Bone Plating (chunk-reduction on the first 3 hits) and Second Wind (passive HP regen below 50%). Trades early-game scaling for survival in the burst window before Edge of Night comes online."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Immobile mid-lane mages without dash"
      reason: "They cannot interact with Cannon Q range pre-6. Veigar needs E (Event Horizon) to set up Q poke, but Jayce's E gate amplifies your Q before he completes his combo. Once they reach 50% HP, swap to Hammer and one-shot through the cast time of their abilities."
    - examples: ["akali", "yone"]
      archetype: "Melee skirmishers with no ranged poke tools"
      reason: "Cannon Q outranges Akali's E (Shuriken Flip) and Yone's Q wave; both need to commit to a melee window to deal damage. Hammer E knockback denies their dash chains, and the Cannon-stance shred opens armor for follow-up gank kills."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Zed W (Living Shadow) and Fizz E (Playful/Trickster) close the Cannon-Q range inside the cast window. Once inside Hammer range with R up, they burst Jayce before he finishes a Hammer Q-W-E combo. Edge of Night helps but cannot save you if the gap-close lands first."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mages"
      reason: "They out-range Cannon Q. Xerath Q (Arcanopulse) and Vel'Koz Q (Plasma Fission) hit at ranges Jayce cannot match without walking into their full combo. Every wave-fight bleeds Jayce's HP without giving him a window to all-in back."
    - examples: ["twisted-fate", "galio"]
      archetype: "Global / cross-map roamers"
      reason: "Jayce roams slowly without stance synergy. Twisted Fate R (Destiny) flips a side lane in 8 seconds; Galio R (Hero's Entrance) lands where Jayce cannot follow. The mid 1v1 might be even, but the macro game bleeds objectives elsewhere."
---

## Overview

Jayce mid is the canonical **lane bully** — a champion that bullies the opposing mid-laner with sustained poke before they can scale. He is a ranged-melee hybrid that wins early with a long-range AOE (area-of-effect) skillshot Q in **Cannon stance** and finishes targets with a leap-Q plus knockback-E combo in **Hammer stance**. The R toggle has a 6-second cooldown, and the first attack after swapping to Cannon shreds the target's Armor and Magic Resist — the entry trigger for every all-in (a full commitment trade until one champion dies).

The mid-lane game plan splits into three phases. Pre-6 you stack Cannon Q poke through the wave (the projectile pierces minions); the goal is to bleed the enemy from 100% to 50% HP without spending mana wastefully. At 6, the Cannon-to-Hammer all-in becomes a kill threat: drop **E** (Acceleration Gate) toward them, fire **Q** (Shock Blast) through it for amplified damage, swap to Hammer with **R**, leap with **Q**, drop **W** for the aura, and knock them back into your tower with **E**. Post-Manamune (~minute 14) your Cannon Q one-shots squishy waves and you start roaming side lanes to translate the early lead into a global tempo advantage.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Skip greedy openers like ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (the precursor of Manamune): you need the AD and lifesteal of Doran's Blade to survive the first three minutes against a mid laner who can match range.

**Core items (in order):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — first item rush. Stacks during Cannon Q wave-poke. The Awakening into ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** at full stacks adds bonus damage on every Q, AA, and W aura tick — the largest AD spike in Jayce's build.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots versus an AD lane (Yasuo, Zed, Akshan). Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** versus stacked AP/CC.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality plus a takedown stack passive (Eminence). Combined with Muramana, your AD scaling becomes brutal on every roam.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality and a slow on damage. The slow on Cannon Q hit converts Flashing enemies into Hammer-Q catch targets.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — versus AP mid-laners (Annie, Veigar, Syndra). The magic shield blocks the burst combo and adds AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — versus single-target hard CC (Ahri charm, Lissandra R, Sylas E). The spellshield charges out of combat and blocks the next ability that locks you down.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — versus grouped 5v5 compositions with a stacked **frontline** (tanks/bruisers who open the fight). The AOE active wave hits the **back line** (carries who deal damage from behind) through the front and refunds its cooldown on takedowns.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Plated Steelcaps when the enemy team has 3+ AP or CC threats.

**Boots:** Plated Steelcaps default. Mercury's Treads versus heavy magic damage or chain CC.

**Skill order:** Max **Q** first (main damage in both stances), **E** second (knockback for execute, gate for poke amplification), **W** last. Take **R** at levels 6, 11, 16. Note: take **E** at level 2 (not W) for kill pressure with the Acceleration Gate plus Cannon Q combo.

**Runes:** Primary **Precision** with **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Versus assassin team comps, swap secondary to **Resolve** with **Bone Plating** + **Second Wind**.

## Key matchups

- **Yasuo / Yone:** They Wind Wall your Cannon Q. Position so your Q comes from a flank angle that forces them to face away from their wave; they cannot wall what they cannot see in time. Save Q for when their wall is on cooldown, then chain E-gate-Q.
- **Zed:** Hold ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** charged at all times after minute 12; it blocks his R (Death Mark) finisher. Pre-6 you out-poke him. Post-6 the lane flips: do not cross past the wave when his R is up.
- **Ahri:** Even matchup, decided by Q timing. Her E (Charm) telegraphs from a distance — sidestep behind a minion before firing your Cannon Q. Once she misses charm, the lane is yours for 9 seconds.
- **Annie / Veigar:** Free poke matchup pre-6. They have no movement; your Cannon Q + E combo bleeds them off-creep. Watch their stun cooldown (Annie passive, Veigar E) before all-in: their stun negates your Hammer Q knockback animation.
- **Twisted Fate:** You out-poke him pre-6 but lose the macro game (the strategic map-wide game beyond your lane). When his R goes up, ping mid mia (missing in action — your enemy left lane) and back to base early; the lane priority you have is worth less than his cross-map gold card.

## Power spikes & win conditions

- **Level 2 (Q + E):** Cannon Q + Acceleration Gate + AA is a 30% HP trade on most squishies. The gate placement also serves as an escape route — drop it behind you toward your tower if the enemy commits.
- **Level 6 (first R):** Both stances unlock at full power. The Cannon-to-Hammer all-in becomes a kill threat at 45% HP rather than a chunk trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune completion + stacking (~ minute 12-14):** Once it Awakens into Muramana, every Q hits ~15% harder and your AA fire-rate damage spikes. This is when Jayce mid spikes hardest and should be looking to roam side lanes.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + takedown stacks (~ minute 19-22):** Eminence stacks compound with Muramana for absurd AD numbers. Force a fight at this point or push for an inhibitor.

## Common mistakes

- **Throwing Cannon Q without the Acceleration Gate.** Naked Q is mana-expensive and easy to dodge. Drop **E** (Acceleration Gate) toward the enemy first; the gate amplifies the Q that passes through it (longer range, more damage, larger AOE) and the slight delay forces them to commit to a movement direction before you fire.
- **Stacking Manamune too slowly.** Cannon Q must hit a champion or kill a wave to count for stacks; missed Qs do not stack. Plan your wave poke so each Q hits at least three minions for fast Tear ramp.
- **Burning the R-Cannon shred on minions.** When you swap from Hammer to Cannon (R), the first AA shreds Armor and Magic Resist. Hitting a melee minion with that auto wastes the trigger; hold it for an enemy champion every time.
- **Roaming with low R cooldown awareness.** R has a 6-second swap cooldown that doubles as your only mobility tool (passive Move Speed burst on swap). Roam with R off cooldown so you can disengage from a counter-roam; arriving at a fight without R is committing without an exit.
- **Forgetting Hammer W mana sustain.** In long Cannon poke sieges, swap to Hammer for 2-3 autos to refill mana via the W passive (Mana on hit). Skipping this drains the pool and forces an early back.

## Advanced tip

Practice the **gate-Q timing-flip** versus moving targets. Most Jayce players drop the Acceleration Gate where the enemy currently stands, then fire Q through it. Pros instead drop the gate where the enemy *will be* in 0.5 seconds (the cast time of the gate plus Q animation) — usually toward the wave, since the enemy must walk to last-hit. The amplified Q lands on the predicted position, not the past one. Train this in the Practice Tool by setting a target dummy on Move toggle and learning the lead distance until it becomes muscle memory.
