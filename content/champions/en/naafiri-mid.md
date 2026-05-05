---
title: "Naafiri Mid Build & Guide — Patch 16.9"
slug: "naafiri-mid"
language: "en"
patch: "16.9"
champion: "naafiri"
role: "mid"
last_updated: "2026-05-05"
description: "Naafiri mid lane guide for League of Legends Patch 16.9: AD assassin starter kit, Darkin Hounds build path, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Naafiri"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Assassin / Diver"
  abilities:
    - key: "P"
      name: "We Are More"
      description: "Naafiri spawns Darkin Hounds (packmates) that auto-attack the same target she does. The pack scales with levels and is the source of most of her damage."
      dd_spell_id: "Naafiri_Passive"
    - key: "Q"
      name: "Darkin Daggers"
      description: "Throw up to two daggers. Each applies a bleed (damage spread over time). If the target is already bleeding, the second dagger detonates the bleed for bonus burst."
      dd_spell_id: "NaafiriQ"
    - key: "W"
      name: "The Call of the Pack"
      description: "Brief untargetability that spawns extra packmates and grants Naafiri bonus AD and Move Speed. Pre-fight tool: cast right before stepping in."
      dd_spell_id: "NaafiriR"
    - key: "E"
      name: "Eviscerate"
      description: "Short dash + AOE slash on landing. Recalls the packmates to her side at full HP — your reset and reposition button mid-fight."
      dd_spell_id: "NaafiriE"
    - key: "R"
      name: "Hounds' Pursuit"
      description: "Long-range targeted dash onto a champion. Score a takedown within the window and you get a free recast plus a shield. Resets on kills like a hunting ult."
      dd_spell_id: "NaafiriW"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "swap second item when ahead and you want stronger waveclear plus an active that resets your auto on a low-HP target"
    - dd_id: "6697"
      name: "Hubris"
      against: "snowball replacement for Edge of Night when the enemy has no scary single-target magic CC and you keep getting takedowns"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, LeBlanc): the magic shield procs when you R into them, saving your all-in"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs at least one tanky frontline (Cho'Gath, Sion, Malphite top) with 3000+ HP — gives bonus damage scaling with their HP"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs hard focus comps (Malphite R + Yasuo wombo) when you are ahead and your team needs you to commit twice"
  base_combo: ["Q", "R", "AA", "Q", "E"]
  win_condition: "Pick off isolated squishy targets (eliminate a single enemy out of position, away from their team) by chaining R onto them and refreshing it on the takedown to chase the second target."
  weakness: "No reliable hard CC and a melee-range dash. If the enemy has dashes, displacements, or a peel-heavy support, you bounce off the front line and your hounds die before you reach the back line."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute procs naturally with Q (two daggers) plus a basic attack, matching Naafiri's 3-hit burst. Taste of Blood adds lane sustain, Sixth Sense reveals roam wards, Ultimate Hunter cuts R cooldown for more reset attempts."
    secondary_rationale: "Precision secondary: Triumph refunds HP on takedowns (huge with R resets when you chain kills), Coup de Grace boosts your finishing damage on low-HP targets — exactly the role of an assassin closing kills."
    secondary_alternative: "Vs heavy poke or healing-stack mids (Cassiopeia, Vladimir), swap Precision to Resolve with Second Wind (regen vs poke) and Bone Plating (mitigates the first 3 spells), accepting the loss of takedown sustain for survival in lane."
matchup_draft:
  pick_into:
    - examples: ["azir", "viktor", "orianna", "anivia"]
      archetype: "Immobile control mages without dash"
      reason: "They have no fast escape against a long-range R dash. Once R lands you can finish with Q + auto-attacks before they walk to safety, and your hounds soak any retaliation skillshot."
    - examples: ["malzahar", "veigar"]
      archetype: "Stationary cast-and-channel mages"
      reason: "Both stand still to deal damage. R closes from outside their effective range, and W's brief untargetability eats the first hard-CC ability so you arrive on top of them with full HP."
    - examples: ["lux", "xerath"]
      archetype: "Long-range artillery with no mobility"
      reason: "Their poke wins early but they melt the moment a dash gets on them. Stack health items or Edge of Night, soak one Q or stun, then R closes the gap and your pack does the rest."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall mid-laners"
      reason: "Wind Wall blocks both Q daggers, deleting your main lane damage and bleed setup. Without bleed your pack takes much longer to chunk them, and Yasuo's E mobility plus shield wins the all-in trade."
    - examples: ["zed", "fizz"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They duel you in your own range and have built-in escapes (Zed shadows, Fizz E) that dodge your R lock-on or its follow-up Q. They also itemize the same way you do, so you scale linearly with no edge."
    - examples: ["malphite", "lissandra"]
      archetype: "Self-peel point-and-click CC"
      reason: "Lissandra R self-stasis (untargetable bubble) cancels your R takedown reset. Malphite W armor + R knock-up removes you from your hounds and stops the chase before the bleed lands."
---

## Overview

Naafiri is an AD assassin who fights with a pack of Darkin Hounds (small wolf companions that auto-attack the same target you do). Unlike most assassins, she does not rely on a single big burst window — her damage is the sum of her own AD plus what every hound contributes. The mid lane suits her because the short distances let R (her champion-targeted dash) reach side lanes and the river offers easy roams once her ultimate is up.

Her game plan is to stack a slight CS lead in lane, then start hunting from level 6: cast W to go briefly untargetable and spawn extra hounds, R-dash onto an isolated target (an enemy out of position, away from their team), Q for the bleed, and E away if the fight turns. Score a takedown within the R window and you get a free second R — that is the entire identity of the champion. Skill expression sits in two things: when to commit to R (you cannot cancel the dash, so target selection is everything) and how to keep your pack alive between fights, since dead hounds mean no damage.

## Recommended Build

**Starting items:** Doran's Shield + 2 Health Potions. Doran's Shield is preferred over Doran's Blade because most matchups feature ranged poke (skillshots, auto-attack harass) and the regen lets you stay in lane through level 6.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item burst spike. The two-hit passive matches your Q-then-AA combo perfectly and gives a small shield + Move Speed every time it procs.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste boots so R cooldown drops and you get more takedown resets per fight.
3. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield that blocks the first hard CC against you. Essential against any mid with a stun or root because R is a commit dash you cannot cancel.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — armor penetration plus a slow on damaged targets. Solves the "they walked away" problem when your R is on cooldown.

**Situational items:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — replace Edge of Night when ahead and the enemy has no scary single-target magic CC. Adds AOE damage (your hounds love AOE) and an active that resets your auto on a low-HP target.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — snowball replacement when you keep getting takedowns. Stacking AD per kill snowballs your lead (a small advantage that grows fast: kill → gold → item → more kills).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (Syndra, Veigar, LeBlanc): the magic shield procs when you R into them, saving your all-in.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs at least one tanky frontline (Cho'Gath, Sion, Malphite top) with 3000+ HP. Bonus damage scales with their HP pool.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — vs hard focus comps (Malphite R + Yasuo wombo combo) when you are ahead and your team needs you to commit twice.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** by default. Swap to Plated Steelcaps if the enemy team has 3+ auto-attack threats, or Mercury's Treads if the enemy mid is a CC mage (Ahri, Annie, Lissandra).

**Skill order:** Max **Q** first (main damage and bleed), **E** second (dash + AOE), **W** last. Take a point in **R** at levels 6, 11, 16. Q first lets you trade in lane through the bleed-then-detonate combo even before you hit your first item.

**Runes:** Primary **Domination** with **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Precision** with **Triumph** and **Coup de Grace** for takedown sustain and execute damage.

## Key matchups

- **Yasuo / Yone:** Hard counter in lane. Hold **Q** until they push their **E** dashes; throwing daggers into Wind Wall is the worst mistake you can make. Look to roam at level 6 instead of forcing the lane 1v1.
- **Annie:** Even 1v1 but punishing if she lands her stun. Buy ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** as your second item to absorb her stun, and never **R** her at melee range pre-6.
- **Lux:** You win the all-in past level 6. **R** outranges her **Q**, and **W** untargetability negates the binding. Buy potions early to soak her poke until you can dash on top of her.
- **Ahri:** Coin-flip lane. Track her **Charm** cooldown (~12s) and only commit **R** when it is down. **W** can negate the Charm projectile if timed on her cast frame.
- **Galio:** Skill matchup. He punishes when you stack with allies, so split-push side waves and cross-map with **R** when his ult is on cooldown. Buy ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** earlier than usual to slow him out of his **W** taunt range.

## Power spikes & win conditions

- **Level 2:** With **Q** + **E** you have one short dash and a bleed combo. A trade where you land both Q daggers chunks 30-40% of an enemy mage's HP.
- **Level 6:** First **Hounds' Pursuit** unlocks roams. Any unwarded mid-river fight is a free kill on the squishiest target visible.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minute 11-13):** Your one-shot threshold drops below 50% HP. Look for picks (eliminating an enemy isolated from their team) on river or near objectives.
- **3 items + ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) Serylda's Grudge (~ minute 22-26):** R-reset chains become reliable. With 30+ Ability Haste from Ionian Boots, every takedown gives a fresh **R**: in a clean teamfight you can hit two squishies in a row.

## Common mistakes

- **Throwing Q into Wind Wall or stationary minions.** Q is a long, slow projectile pair. Wait until the enemy steps onto a minion line then aim through it; your hounds also leap on the first champion the daggers hit, so a wasted Q means no pack damage either.
- **R-ing the tank.** Hounds' Pursuit is a commit dash with no escape. Diving the front line means you arrive surrounded, your hounds die to AOE, and R is on cooldown when the carry is finally exposed. Always **R** the squishiest priority target available, even if it means waiting 2-3 seconds.
- **Ignoring your hounds.** They scale with your AD and items. If they keep dying between fights, you fight as a 1v1 champion and lose. Use **E** to recall and full-heal them before each engage.
- **Using W defensively.** W is a pre-fight buff, not a panic button. Casting it after taking 60% HP burst wastes the bonus AD/MS window because the fight is already lost.
- **Pre-6 over-committing on roams.** Without **R** you have only a short E dash to escape. A failed lvl-3 roam to bot lane gives the enemy mid free CS and can lose you the lane.

## Advanced tip

Pre-cast **W** (The Call of the Pack) **just before** your **R** dash, not after. The untargetability frame absorbs any hard CC the enemy throws at you mid-flight (Annie stun, Lux Q root, Lissandra Q), so you arrive with full HP and the bonus AD/MS still active for the kill. The rookie pattern is W-after-R for the speed boost on chase, but the pro pattern is W-into-R because the safety it provides on the entry is worth more than the chase speed afterwards.
