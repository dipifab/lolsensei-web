---
title: "Cho'Gath Top Build & Guide — Patch 16.9"
slug: "chogath-top"
language: "en"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Cho'Gath top lane guide for League of Legends Patch 16.9: HP-stacking tank-mage build, Grasp runes, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Killing a unit restores HP and mana. Champion takedowns refund a much larger chunk. Free lane sustain (HP/mana regen between fights) on every last-hit (killing blow on a minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (aimed line) at 950 range: knocks enemies up, slows them, magic damage. Long-range poke (chip damage from safety) and engage (start the fight) — slow tell, lead the target."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Cone in front of Cho'Gath (300 range): magic damage and silences (blocks ability casts) for ~2.2s. Chain it after a Q knockup on melee targets."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (your next basic attacks gain a bonus effect). Next 3 basics deal magic damage scaling with target's max HP and slow them. Main DPS vs tanks and waveclear (clearing a minion wave)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Single-target true damage (ignores armor and magic resist) execute (kills targets under HP threshold). On kill, Cho'Gath gains a permanent stack: more max HP and a bigger model. Capped at 6 minion stacks, no cap on champion stacks."
      dd_spell_id: "Feast"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy magic damage or repeated CC chains (Malphite R, Sylas, Lissandra) — swap from Plated Steelcaps before first back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs 2+ AP threats (enemy AP top + AP jungler like Diana/Ekko) — stacks MR and adds movement speed to catch kiters"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs auto-attack carries with healing (Vayne + Soraka, Master Yi + lifesteal) — applies Grievous Wounds (50% heal reduction)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "as 6th item once you have 5+ Feast stacks — Warmog's Heart HP threshold is trivial; the regen lets you skip backs"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "vs minion-stack mages (Heimerdinger, Malzahar) and AP teams that group — aura clears stacks and chunks frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Stack Feast on cannons and kills to inflate HP. At 5+ stacks + Riftmaker + Spirit Visage, walk in as second tank, absorb focus (be the target), then chain Q knockup into W silence on their carry (main damage dealer)."
  weakness: "No dash, no escape outside Flash. Outranged by ranged tops who kite (hit from outside your range) the 950 Q. Vulnerable to ignite + heal reduction before stacking — losing lane snowballs because Feast needs farm."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve: Grasp triggers every 4s in melee (procs = activates), healing and stacking permanent HP — fits Cho'Gath's HP+AP curve. Demolish takes the tower even on losing lanes, Second Wind regens poke damage, Overgrowth stacks HP every 8 minions."
    secondary_rationale: "Sorcery secondary: Manaflow Band sustains mana for Q poke and E waveclear during long lanes, Transcendence raises ability haste (lower cooldowns) so Q is up almost every wave to peek for a knockup."
    secondary_alternative: "Vs ranged poke or AP burst tops (Vladimir, Teemo, Kennen) swap Sorcery for Inspiration with Biscuit Delivery (free HP and mana sustain pre-6) and Time Warp Tonic (instant heal on potion use to stay in lane)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Slow-windup melee bruisers (HP+damage fighters)"
      reason: "Q knockup interrupts their commit animations (Darius pull, Garen E spin, Sett W cast). Carnivore plus Riftmaker's omnivamp (lifesteal-like sustain on every cast) out-trades them; at Feast threshold, R deletes them at 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Mobile melee divers (jump on you fast)"
      reason: "Q knocks them up mid-dash, breaking their combo. W silences right after, blocking the second dash. R then executes them once they retreat low — they cannot all-in (full-commitment fight) without Flash and a clean read."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Melee mages without hard CC (stuns/roots)"
      reason: "They have no instant lockdown to interrupt your Q windup. You out-range their poke from safe distance, and W silence shuts down their ability-reliant kits during all-in."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Ranged tops with poke and disengage (escape tools)"
      reason: "They stand beyond Q's 950 range, walk back when you step up, and chip you to half HP before level 6. You have no dash to close and no sustain beyond Carnivore, so you lose lane priority (control of the wave) every cycle."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Mobile melee duelists with continuous damage"
      reason: "Fiora parries (blocks) W silence, Jax E dodges Q knockup, Tryndamere ignores R as long as he ults first. Their continuous damage out-trades Cho's slow Q windup; you reach Feast scaling too late to matter."
    - examples: ["gnar", "kayle"]
      archetype: "Late-game scalers (weak early, monsters by minute 30)"
      reason: "Gnar's mini form attacks Q from outside its range, Kayle ramps to true-damage autos that delete you in teamfights. Both win the long game even if Cho stacks Feast — they out-damage your HP pool by minute 30."
---

## Overview

Cho'Gath is a tank-mage hybrid who buys items that give both health and ability power, and stacks permanent max HP through his ultimate **Feast**. His kit pairs a long-range knockup (**Q**) with a melee silence (**W**), letting him interrupt the engage abilities of melee bruisers in lane and lock down enemy carries in teamfights. The damage that scales most with his build comes from **Vorpal Spikes (E)**, which adds magic damage based on the target's maximum HP — meaning he hurts tanks and fed bruisers more than squishies.

The game plan is straightforward but demanding on patience: farm safely behind minions, look for **Q** knockups to set up trades or peel ganks, and **never** cancel an opportunity to **R** a low-HP minion (each champion stack is permanent, each cannon kill with R is +120 max HP for the rest of the game). Once you hit 5+ stacks plus two HP+AP items, you become a second tank that the enemy team must focus before your carries — that is what wins teamfights.

## Recommended Build

**Starting items:** Doran's Shield + Health Potion. Doran's Shield gives 80 HP and post-damage regeneration that synergizes with Carnivore last-hit healing.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — first full item. HP + AP + omnivamp (heals you for a percentage of all damage you deal, abilities or autos). Damage ramp converts to true damage after 3 seconds of combat — perfect for extended trades.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots vs an AD top opponent. Reduces auto-attack damage by 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — second damage item. HP + AP + a burn passive that deals percent max-HP magic damage over time. Stacks naturally with Q slow and W silence keeping enemies in range to take the burn ticks.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + magic resist + 25% heal-and-shield amplification. Multiplies Carnivore healing, Riftmaker omnivamp, and any team shields you receive.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + a slow on every ability that hits a champion. Stacks on top of Q's slow and means W silenced targets cannot kite away while the silence runs out.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — vs heavy magic damage or repeated CC chains. Swap from Plated Steelcaps before first back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs squads with 2+ AP threats. Stacks magic resist and adds movement speed to catch kiters.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — vs auto-attack carries plus healing comps (Vayne + Soraka, Master Yi + Aatrox). Applies Grievous Wounds (50% healing reduction) on every hit you take.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sixth item once you have 5+ Feast stacks. The Warmog's Heart HP threshold is trivial when you stack; the regen lets you skip backs and roam at full HP.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — vs minion-stack mages (Heimerdinger, Malzahar) and AP teams that group. The aura passive clears stacked minions and chunks the enemy frontline.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is default vs AD top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs AP top or heavy CC.

**Skill order:** Max **Q** first (slow, knockup, primary trade tool), **E** second (waveclear and tank-shredding on-hits), **W** last (silence is great but per-rank damage is small). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Vs ranged poke top, swap Sorcery for **Inspiration** with **Biscuit Delivery** and **Time Warp Tonic**.

## Key matchups

- **Darius:** Pre-6 you respect his W passive (5-stack bleed). Q him before he can connect his pull, then walk away. After 6, Feast executes him at ~30% HP — that's the threshold to commit.
- **Sett:** Q the wind-up frame of his W (the orange punch). If he lands W on you, accept the trade and W-silence him to block his E grab. Boots Plated, item Riftmaker first — his ult is Mercury's Treads tier, so consider Merc's if he fed.
- **Teemo:** Counterpick. Take Doran's Shield + Second Wind, push the wave under tower with E waveclear, and ask for jungler ganks. Buy ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** as a first item if his lane lead snowballs (build into Maw of Malmortius later).
- **Fiora:** Even-to-losing matchup. She parries your W silence — never throw W naked. Use Q to interrupt her dash trades, hold W for after she burns Riposte.
- **Malphite:** Even matchup, scales worse than you. He has no sustain and his Q poke is mana-expensive; trade with Q+W when his mana is low. Watch his **R** post-6: it interrupts your **R** cast.

## Power spikes & win conditions

- **Level 2:** With Q + E you can trade aggressively: Q for the knockup, then walk in and burn 3 E auto-attacks while they cannot move. Free 35-40% HP swing if you land Q.
- **Level 6:** First Feast unlocks execute pressure. The cooldown is 80 seconds and the range is 175 (melee + a step). If your jungler can land any CC on a low-HP enemy, you walk in and R for a permanent stack.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minute 13-15):** Trade math flips. The omnivamp plus Carnivore healing means you can stand and fight melee bruisers through their full combo without backing.
- **5+ Feast stacks (~ minute 20-25):** You become a second tank. With Riftmaker + Spirit Visage + 5 stacks you sit around 3800-4200 effective HP. Walk into the enemy backline, eat the burst, and chain Q-W on their carry.

## Common mistakes

- **Skipping Feast on cannon minions for the gold.** A cannon stack is +120 max HP forever. Even if you "lose" 60 gold in minion gold, the HP scales harder than the gold ever could. Always R the cannon if no champion is in execute range.
- **Using Q as poke without follow-up.** Q has a 0.65s wind-up; against a moving target you need to lead by ~half a champion's body length. If you cannot follow up with a W or an auto, save Q for engage or peel.
- **Walking up to last-hit without spacing.** Cho'Gath has 125 base movement speed and no dash. If you stand on the wave's caster minions, you get all-inned (engaged on with full commitment) by mobile bruisers. Last-hit from the back of the wave.
- **Dropping E mid-fight.** Vorpal Spikes is a toggle: it stays on between fights as long as you have mana. Activate it before the fight starts so the first 3 autos already have the on-hit ready.
- **R-sniping a champion with full HP.** Feast at full HP does ~600 true damage at max rank. That is meaningful but you give up the 80-second cooldown and the chance to permanent-stack on a minion. Save R for executes or panic peel.

## Advanced tip

Cancel your auto-attack windup with **Q** to bait a Yasuo or Yone Wind Wall: start the auto, see the wall pop, then cast Q on the spot they are walking to. The Q skillshot is a ground rupture that travels under the wall (the wall blocks projectiles, not ground effects). Most ranged champions cannot tell the difference between an auto-cancel and a held-back ability, so you get a free knockup on a target who thought they had immunity. Same trick works against Braum **E** (Unbreakable) and Pantheon **W** (Shield Vault block frame).
