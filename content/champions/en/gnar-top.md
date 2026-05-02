---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "en"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Gnar top lane guide for League of Legends Patch 16.9: Mini/Mega rage management, core bruiser build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "In combat Gnar generates Rage. At max Rage his next ability transforms him into Mega Gnar: more HP, melee, new abilities, no R until Mini again."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini: long-range boomerang that slows on hit and returns; catch it to refund cooldown. Mega: short boulder that stops on first target and slows the area."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini: every third attack/spell deals bonus damage and grants move speed. Mega: rears up and slams the area in front, stunning enemies on impact."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini: dash-leap that bounces further if it lands on a unit (minion, ward, monster, champion). Mega: heavy landing that damages the area, no bounce."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Mega only. Throws everything around him in a chosen direction; targets that hit a wall are stunned and take bonus damage. The whole game plan in one button."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when enemy team has 2+ hard CC sources or heavy magic damage (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "into AP top laners (Kennen, Vladimir, Rumble): magic resist + on-hit magic damage so Mini Gnar Q+AA still hurts"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "into heavy magic burst (Syndra mid roams, Vex, double AP comp): lifeline shield blocks the one-shot window"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "into crit-stacking damage dealers (Yasuo, Tryndamere, Caitlyn fed): cuts critical strike damage taken"
    - dd_id: "3075"
      name: "Thornmail"
      against: "into squads with two healers (Soraka + Aatrox, Yuumi + Mundo): grievous wounds cuts their healing in half"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when you splitpush a side lane alone post-Trinity: bonus damage to towers and minions, plus stat buffs while alone"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Stack Rage in lane with Mini Q poke, then transform to Mega before a fight you commit to. Use R as wall-stun engage to cut the enemy team in half during teamfights and objective contests."
  weakness: "No dash and forced shapeshift. If you turn Mega far from your team you cannot Hop back; if you stay Mini in a teamfight you have no R. Ranged top laners poke down Mini Gnar with no answer."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp procs every 4 seconds in melee — perfect for Mega Gnar walking into a frontline. Demolish turns a pushed wave into free plates, Second Wind heals the poke ranged matchups dish to Mini Gnar, Overgrowth scales HP through late game."
    secondary_rationale: "Precision secondary: Triumph refunds health on a takedown (huge after a Mega R wall stun gets a kill), Legend: Alacrity adds attack speed so Mini Gnar's third Hyper proc lands faster on every trade."
    secondary_alternative: "Into ranged poke matchups (Vayne, Quinn, Kennen, Teemo) swap Precision to Sorcery with Nimbus Cloak (move speed after summoner spell) and Gathering Storm (long-game AD scaling) so you get to Mega range and win the late game by outlasting them."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Melee juggernauts without ranged poke"
      reason: "Mini Gnar Q has 1100 range and slows. They cannot touch you until you walk into them, so you stack Rage safely and only commit when Mega is up to disengage with R wall stun."
    - examples: ["aatrox", "renekton"]
      archetype: "Short-range bruisers with finite all-in windows"
      reason: "Their power budget is in early-game trade windows. Mini Gnar dodges the all-in by E-hopping off minions, then flips the script when Mega comes online with R stun + Wallop chain."
    - examples: ["nasus", "yorick"]
      archetype: "Scaling juggernauts with no early kill threat"
      reason: "You shove the wave with Mini Q+W and deny their farm under tower; they cannot punish because they have no gap-close that beats your boomerang range."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Ranged top laners that out-poke Mini Gnar"
      reason: "Mini Gnar has no ranged sustain and his only safe trade is Q from max range. They auto-attack from inside that range and shove him under tower without any return window."
    - examples: ["fiora", "camille"]
      archetype: "Anti-tank fighters with %HP true damage or hard CC dive"
      reason: "Fiora's vitals shred Mega Gnar's HP pool faster than he can fight back; Camille's E hookshot pins Mini Gnar to a wall for the all-in he has no dash to escape."
    - examples: ["malphite", "ornn"]
      archetype: "Tank engagers that cancel your R angle"
      reason: "They flash-engage your back line before you can transform and choose your wall. Once their initiation lands, your R becomes peel (pushing enemies off your carries) instead of the game-winning pickoff (single-kill on an isolated target) it should be."
---

## Overview

Gnar is a top-lane fighter who shapeshifts between two forms based on a Rage bar that fills as he uses abilities or takes damage. **Mini Gnar** is a ranged poker (poke = chip damage from a distance to wear down enemy HP without committing) with a long boomerang and a hop that resets on units; **Mega Gnar** is a melee bruiser with a stun, AOE damage (area of effect: damage on a zone, not a single target) and the game's best low-cooldown ultimate when used near a wall. The whole champion is built around timing your transformation: Mini in lane to poke and farm safely, Mega when you commit to a fight (commit = go all-in, no pulling back) where R can pin enemies against terrain.

The game plan in one sentence: stack Rage as Mini, transform near the enemy team, throw R into a wall to stun (immobilize for ~1.5 seconds with no actions allowed) multiple targets, then clean up while your team follows. If you ult into open ground you waste your one win condition (the one thing the champion needs to do well to win the game). If you turn Mega while alone in lane you risk dying because Mini's escape (Hop bounces further if it lands on a minion) is gone.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Shield's HP regeneration is built for the kind of sustained ranged poke every Mini Gnar matchup throws at you.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — first item every game. Built from Sheen (a component that adds bonus damage to your next basic attack after every ability cast); Trinity makes that proc (the bonus-damage trigger fires) on every Q whether Mini or Mega. The move speed lets Mini Gnar kite (move backward while still attacking, keeping distance), and the attack speed makes Hyper (Mini's third-hit passive) come around faster.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots into physical damage dealers (most top lane matchups). Reduces basic-attack damage taken.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — bonus HP that grows with the bonus AD on the rest of your items, plus a one-time shield that triggers around 30% HP. Keeps Mega Gnar alive long enough to land R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — turns burst physical damage taken into a slow bleed (damage spread over the next few seconds, not instant). Buys you time to react during a fight you committed to as Mega.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — armor + an AOE attack-speed slow (the slow hits every enemy in an area near you, not just one). Devastates auto-attack carries (Vayne, Tristana, Kog'Maw) once Mega R has pinned them against a wall.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Plated Steelcaps into heavy CC (crowd control: stuns, roots, silences that stop you from acting) or AP comps.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — into AP top laners (Kennen, Vladimir, Rumble). Adds magic resist plus on-hit magic damage (extra bit of magic damage applied on every basic attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into heavy magic burst (Syndra roams, Vex, double AP composition). The lifeline shield triggers when you drop to low HP and absorbs incoming magic damage, blocking the one-shot window.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — into crit damage dealers (Yasuo, Tryndamere, fed Caitlyn).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — into squads stacking two sources of healing. Applies grievous wounds (a debuff that cuts enemy healing in half for a few seconds).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — when you splitpush a side lane alone after Trinity Force. Splitpush = pushing one side lane by yourself while your team plays elsewhere, forcing the enemy to send someone to stop you.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when enemy team has 2+ hard CC sources or heavy AP damage.

**Skill order:** Max **W** first (third-hit Hyper damage scales most per level), then **Q** (longer slow + lower CD for poke), then **E** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** with **Triumph** and **Legend: Alacrity**.

## Key matchups

- **Sett:** Free lane. Mini Q outranges everything he has; never walk into his W (Haymaker). When he reaches you, Hop on a minion in the wave to bounce back to safety.
- **Aatrox:** Even pre-6, you outscale him (you become stronger relative to him as the game goes on). Avoid standing in the sweet spot of his Q (the bright center of the swing where it does extra damage). Once you have Mega R + a wall behind him, he loses every all-in (full commit fight to the death) he starts.
- **Vayne:** Hard counter. Stay back, last-hit minions with Q from max range, accept that the lane bullies you (you cannot fight back without dying). Roam to mid (leave your lane to help the mid laner) or invade the enemy jungle when Mega is up.
- **Camille:** Lose lane, win late. Avoid the range of her E hookshot when Mini (she pins you to a wall and burns your Flash — Flash is a summoner spell that teleports you a short distance on a 5-minute cooldown, your one-time emergency button — then she re-engages). Save your E for after she dashes in, never before.
- **Malphite:** Lane is fine — Mini Q kites him forever — but watch his level 6. He flash-ults your back line (your carries standing behind your team) in teamfights, which kills your R angle. Tell your team to spread out so his ult cannot hit two of you at once.

## Power spikes & win conditions

- **Level 2:** With Q + W you win most short trades (brief exchanges of damage in lane, not full fights) against melee bruisers. Walk up to the wave, Q the enemy through minions, then your third basic attack triggers the Hyper bonus damage.
- **Level 6:** First Mega R unlocks a tower dive (going under their tower for a kill despite tower shots) on a low-HP enemy if you stack Rage into Mega before crossing into them.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 12-14):** Your single biggest power spike (the moment you become noticeably stronger and should look for fights). Mini Q + auto-attack hits like a truck; Mega Q + W combos one-shot squishies (high-damage low-defense champions like ADCs and mages) post-stun.
- **3-item Mega R fight (~ minute 22-26):** Sterak's + Trinity + boots online means Mega Gnar can walk through a frontline (the tanks and bruisers that open the fight from the front) and follow R into the back line (the carries doing damage from behind) for a 2-3 person stun. Force grouped objective fights (drake/baron contests where both teams are stacked together) here.

## Common mistakes

- **Going Mega in lane without a fight ready.** Mega has no escape (no Hop dash) and stays Mega for ~15 seconds before reverting to Mini. If your jungler is not coming and you are not committing to a fight, hold Rage at 80-90%, ping back to your team, and let the bar decay.
- **Throwing R in open ground.** Without a wall behind the target, GNAR! is just a knockback (a forced push that shoves enemies a short distance) that interrupts their dashes and nothing more. Always reposition first; the half-second you spend lining up the wall is worth a multi-target stun.
- **Hopping in instead of out.** Mini E is your escape, not your engage tool in most matchups. The only time E-in is correct is when Rage is filling and you have a clear minion to bounce back off afterwards.
- **Spamming W in lane to "force" the Hyper bonus damage.** The third-hit bonus triggers on every basic attack AND every spell. Trade in patterns of two abilities + one basic attack, not three basic attacks in a row that push you out of position.
- **Mid-fight transformations you cannot control.** Damage taken fills Rage too. If you back off at 95% Rage, the next basic attack on a minion turns you Mega in your jungle with no enemy to R. Either commit to a fight before that, or recall to base.

## Advanced tip

Use Hop to bounce off **wards and trinkets** when your wave is gone. A ward is the small magical eye you place on the map for vision; the basic yellow one is the **Stealth Ward** trinket your support carries, and the **Control Ward** is the pink ward enemies place to deny vision. Every one of these counts as a unit Mini Gnar can land on for the extended second hop. Pre-place a Stealth Ward toward the enemy jungle entrance, then E onto it to extend your range by ~400 units for a Q surprise on a counter-jungling enemy. Same trick saves you from ganks: hop off your own ward into the tribush (the three-bush cluster near every lane) and the ganker has no follow-up.
