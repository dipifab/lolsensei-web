---
title: "Nasus Top Build & Guide — Patch 16.9"
slug: "nasus-top"
language: "en"
patch: "16.9"
champion: "nasus"
role: "top"
last_updated: "2026-04-29"
description: "Nasus top lane guide for League of Legends Patch 16.9: Q-stacking juggernaut build path, lane survival, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Nasus"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Soul Eater"
      description: "Passive lifesteal (a flat percentage of damage dealt comes back as healing on basic attacks). Helps Nasus stay in lane while last-hitting minions for Q stacks."
      dd_spell_id: "Nasus_Passive"
    - key: "Q"
      name: "Siphoning Strike"
      description: "Empowered next basic attack (auto-attack reset — fires immediately, ignoring the normal attack timer). Killing the target with Q permanently increases Q's damage by stacks. The whole champion is built around this number."
      dd_spell_id: "NasusQ"
    - key: "W"
      name: "Wither"
      description: "Targeted ranged ability that hard-slows an enemy champion's Move Speed and Attack Speed for several seconds. The slow ramps up over time. The only ability in the kit that lets Nasus stick or escape."
      dd_spell_id: "NasusW"
    - key: "E"
      name: "Spirit Fire"
      description: "Targeted zone on the ground that deals magic damage and shreds armor of every enemy standing on it. Push waves with this and chunk minions before Q-stacking the cannon."
      dd_spell_id: "NasusE"
    - key: "R"
      name: "Fury of the Sands"
      description: "Ultimate buff: bonus max HP, Armor and Magic Resist for 15 seconds, area damage every second around Nasus, and Q cooldown is reduced. Press it before any teamfight or all-in."
      dd_spell_id: "NasusR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or chained CC (Lissandra ult, Malphite ult, Sett pull)"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs auto-attack heavy teams (Yasuo, Master Yi, Tryndamere) — reflects damage and applies Grievous Wounds (cuts enemy healing in half)"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "when you need extra Move Speed to walk down kiters (Quinn, Vayne top, Gnar) and reach Q range"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "into stacked-armor frontlines (Malphite, Rammus, Shen) — every Q hit shaves their armor for the team"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "vs minion-wave assassins or AP fighters that group with their team — magic damage aura plus MR"
  base_combo: ["E", "AA", "Q", "W", "R"]
  win_condition: "Reach 300+ Q stacks, press R in a fight, Wither the enemy carry, and one-shot them with the cannon Q. Trinity Force into Sundered Sky is the spike where 1v1 side-lane duels become free wins."
  weakness: "No dash, leap or blink — Wither is the only stick tool. Ranged tops (Quinn, Teemo, Vayne, Gnar) bully him out of every wave; if Nasus falls 30+ CS behind, late game never arrives."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Short-range melee bruisers without ranged poke"
      reason: "Nasus only loses lane when he is poked from range. Melee bruisers have to walk into Q range to do damage, so Nasus gets free stacks every wave while his W keeps them slowed off the all-in."
    - examples: ["yasuo", "yone"]
      archetype: "Auto-attack melee carries that need to stick on you"
      reason: "Wither cripples both their Move Speed and Attack Speed (the rate at which they swing) — exactly the two stats their windwall-and-dash kit relies on. Once Q + Sundered Sky come online, they cannot duel a stacked Nasus 1v1."
    - examples: ["mordekaiser", "darius"]
      archetype: "Slow melee scalers without escape"
      reason: "If Nasus can survive their early all-in window with Bone Plating and Doran's Shield healing, he out-scales them by every minute the game stays even. Their kit cannot kite him once Mercury's Treads are up."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Ranged or blind-stacking tops"
      reason: "They sit outside Q range and chip his HP for free with autos. Vayne's W (true damage on the third hit) and Teemo's Q (a blind that cancels his autos) bypass armor entirely — Nasus cannot stack and cannot trade back without a jungle gank."
    - examples: ["gnar", "kennen"]
      archetype: "Ranged tops with built-in CC"
      reason: "Both poke from outside Q range and have ranged stuns: Gnar's mega-form throw, Kennen's W stun on the third mark. They keep Nasus bleeding HP without ever entering his Wither cast range."
    - examples: ["fiora", "camille"]
      archetype: "True-damage duelists with disengage tools"
      reason: "Fiora's Vitals (small marks that, once auto-attacked, deal true damage — damage that ignores armor and MR) burn through any armor Nasus stacks. Camille's R isolates him from his team for 4 seconds, long enough to kill a not-yet-stacked Nasus before R wears off."
---

## Overview

Nasus is a **juggernaut** (a slow, immobile melee champion that hits very hard once he is online, but has zero mobility tools to start a fight). His whole identity sits on one number: the **stack count** on his Q, **Siphoning Strike**. Every time he last-hits a minion, a large jungle monster or a champion with Q, the ability gains permanent bonus damage on every future cast — forever, with no upper cap. A Nasus with 300 stacks at minute 22 has a single-target nuke that one-shots squishy carries. A Nasus with 50 stacks at minute 22 swings a wet noodle. Lane phase is therefore a **farming grind**: the goal is to survive and stack, not to win trades.

The game plan is simple to describe and slow to execute. In lane, **freeze the wave** (let it sit just outside your turret range, denying the enemy a safe place to last-hit) so you can stack Q under tower while the enemy laner has to walk far from theirs to reach you. Push only when you need a back. From minute 14 on, **Trinity Force** plus your first **Sundered Sky** changes the math: Q one-shots minions, autos chunk towers, side-lane 1v1s become winnable. Pop **R** before any fight to gain HP and resistances, then **Wither** the enemy carry to lock them down while you Q them in the face. Nasus is one of the strongest **late-game scalers** (champions whose power rises with each item, peaking after 3+ items) in the game — but only if he reaches that late game with his stacks intact.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive softens enemy poke (low-cost ranged damage chipping your HP without committing to a fight) and is mandatory in nearly every Nasus matchup, including melee ones — you trade lane priority for survivability, and that is the right deal for a champion whose game plan is "stay alive, farm, scale."

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — the timing where Nasus stops being weak. The Spellblade passive (every spell cast empowers your next basic attack with bonus damage) procs on Q's auto-attack reset, effectively doubling the damage of every Q hit. AD, ability haste (a stat that lowers ability cooldowns), HP, attack speed and Move Speed — the kit needs all five and Trinity packs them in one item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy hurts you mostly with basic attacks. They reduce that incoming damage during extended trades (back-and-forth exchanges of damage in lane).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — every first auto-attack on a champion in a fight crits and heals you. With Q's auto-reset, you cast Q (the empowered hit) and the crit lands on demand. Pairs perfectly with Soul Eater lifesteal for sustain in extended duels.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield** that triggers automatically when your HP drops below ~30%. That window is exactly when you need an extra second to land a 300-stack Q for the reset.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resistance plus a healing-amp passive that boosts Soul Eater lifesteal, Sundered Sky's crit-heal, and any incoming Soraka or Yuumi heals. Buy this fourth or fifth depending on whether the enemy team has more AP or AD threats.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has heavy magic damage or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down so you cannot act). Tenacity (a stat that shortens CC duration on you) is critical for a champion with no dash.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — versus auto-attack heavy compositions (Yasuo, Master Yi, Tryndamere). Reflects a portion of basic-attack damage back at the attacker and applies **Grievous Wounds** (a debuff that cuts enemy healing in half) on hit.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — when you need the Move Speed stack passive to walk down kiters (champions that move backward while attacking, like Quinn, Vayne top, Gnar) and reach Q range before they reposition.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — into stacked-armor frontlines (Malphite, Rammus, Shen). Every Q hit shaves armor stacks off the target for your whole team's damage.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — versus AP fighters and minion-wave assassins. Magic damage aura that helps clear waves you would otherwise need 3 Q stacks to break.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first — every rank reduces its base cooldown and increases its damage, both of which let you stack faster. Max **E** second for waveclear and the armor shred (a debuff that cuts the target's armor stat for a few seconds). Max **W** last; the slow value scales with rank but the early ranks are already enough to peel a melee diver. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with the keystone (the main rune of the tree) **Grasp of the Undying** — every 4 seconds in combat, your next basic attack on a champion deals bonus magic damage, heals you, and grants permanent HP. The healing keeps you in lane through poke, and the permanent HP scales the longer the game runs — exactly the curve Nasus wants. Pair with **Bone Plating** (damage reduction on the next 3 hits after you take damage), **Conditioning** (extra Armor and MR after minute 12, a Nasus-specific spike), and **Overgrowth** (HP scaling with nearby minion deaths, perfect for a top laner farming 8+ minions per wave). Secondary **Precision** with **Triumph** (small heal and gold burst on takedown, saves all-ins) and **Legend: Bloodline** (life-steal stacks on takedowns). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling** — extra HP everywhere because Nasus does not need crit chance, just to live until R is up.

## Key matchups

- **Darius:** Hard early-game matchup. He out-trades you at all levels until Trinity Force, and his Hemorrhage bleed cancels your Soul Eater sustain. **Freeze the wave** near your tower (let it sit just outside the tower range) and farm under turret with Q. Do not contest CS in the middle of the lane — you will give him kills he should not have.
- **Garen:** Skill matchup (the better player wins, regardless of pick). His **W** (a 4-second damage-reduction shield) negates your Q burst, but his Q silence is dodgeable by walking sideways the moment his foot stomps. Q the cannon minion when his Q is on cooldown; Wither him if he commits E spin-to-win.
- **Quinn / Teemo:** Very rough ranged matchup. They blind you (cancels your auto-attacks for a short time) and kite you out of Q range. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeze the wave near your tower, and accept losing CS — you cannot win this 1v1 without help. Call your jungler the moment they overextend (push too far past river without vision).
- **Mordekaiser:** Even-to-favorable matchup. His R isolates you in a 1v1 realm; if you have at least 100 stacks and Trinity Force, you out-duel him there. Save Wither for after he uses his Q so the slow keeps him outside auto-range while Q-Sundered Sky chunks him.
- **Fiora:** Hardest melee matchup. Her **W** is a parry (a brief shield that blocks and counters the next ability) — bait it with an auto before committing Q. Her Vitals do **true damage** (damage that ignores both armor and magic resistance — there is no defensive stat that reduces it), so HP-stacking does not save you. Rush ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** earlier than usual.

## Power spikes & win conditions

- **Level 6:** First **R**. Even at 30 stacks, R's bonus HP plus Wither's slow makes you a credible 1v1 threat. Look for an **all-in** (a full commit to a kill, no fallback) the moment your jungler shows top side and the enemy is around 60% HP.
- **100 Q stacks (~ minute 12):** This is the symbolic threshold every Nasus checks for. With 100 stacks plus base damage plus Soul Eater lifesteal, Q kills caster minions (the back-row magic minions) in one hit and chunks champions for noticeable HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 18-20):** The sharpest spike of the game. Spellblade procs on every Q reset, doubling its effective damage. Side-lane 1v1s become winnable; tower pressure is real because Sheen procs on each auto-attack against the structure.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky + 250 stacks (~ minute 24-28):** Peak teamfight window. Press R, walk into the back line (the squishy carries who stand behind their own tanks during a fight), Wither the highest-priority target, and Q them for ~1500 damage. Two Q resets in an R window can end a teamfight on their own.

## Common mistakes

- **Q-ing minions without securing the last hit.** Q only stacks when **the killing blow comes from Q**. Hitting a healthy minion does nothing for your stack count. Wait for the minion to drop to Q-damage HP, then cast.
- **Pushing the wave instead of freezing.** A pushed wave puts you far from your tower, where the enemy laner can poke and the enemy jungler can gank. Freeze near your turret: hit only the first minion or two of the enemy wave with autos, let your minions die to theirs, and the wave sits naturally on your side.
- **Pressing R outside of a fight.** R has a long cooldown (over 100 seconds at rank 1). Using it to clear a wave or to run between lanes is a wasted ultimate. Save it for an all-in or a fight you committed to.
- **Wither on a non-threat target.** W is your **only** stick tool (the ability that keeps you glued on a target trying to run) and your only escape. Burning it on a tank who was not chasing, or by accident on a minion, leaves you with nothing for 14+ seconds. Reserve it for the carry you want to kill, or the diver (a melee fighter who jumps onto your back line) jumping on you.
- **Buying full tank items only.** Nasus scales with **AD** through Q, not HP alone. Sunfire + Warmog's kills your damage; you become a slow walking minion. Stick to the Trinity Force + Sundered Sky core, then add resistances.

## Advanced tip

Practice the **Q animation cancel** to stack faster on cannon minions and champions: cast Q during the wind-up of a normal auto-attack, and the empowered Q-auto fires immediately, replacing the in-progress swing. The whole "cast Q + auto" combo lands in the time of one auto, which means you can squeeze a stacked Q into a tight trade window where you only had time for a single auto. Inside R, with the reduced Q cooldown, you can chain Q → AA → Q → AA → Q in roughly 4 seconds against a Withered target. The highest-impact use is on the cannon minion every third wave: a clean Q-cancel guarantees the stack even if the enemy laner is auto-attacking you to steal the kill. Test it in a custom game on a target dummy until the rhythm is automatic.
