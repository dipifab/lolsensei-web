---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "en"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Hecarim jungle guide for League of Legends Patch 16.9: clear path, gank patterns, core bruiser build, key matchups, power spikes, mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim converts a percentage of his bonus Move Speed into Attack Damage. Every movement-speed item is also a damage item."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "Cleaves nearby enemies for physical damage. Hits stack a buff that lowers cooldown and boosts damage. Main jungle clear and DPS button."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "AoE magic damage zone that heals Hecarim from any damage taken by enemies inside. Sustain in jungle clears and turret dives."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Ramping move speed plus ghost (walk through units). Next basic attack knocks back and deals more damage the longer you charged. Core gank tool."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Charges in a line, dealing magic damage and fearing enemies hit at the end. Long-range engage and disengage for teamfights."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy crowd control or magic damage (e.g., Lissandra, Syndra, Brand): swap for Plated Steelcaps when CC reduction matters more than armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tanks (e.g., Ornn, Sion): the armor shred from auto-attacks and Q stacks helps your team chunk health bars too"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "into low-resistance teams when you need wave clear and side-lane pressure (splitpush = pushing a side lane alone to force a response)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs comps with no real burst (e.g., 4-5 fighters/tanks): more ability haste and stacking ult uptime in long fights"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs heavy AP teams (e.g., Brand mid + Karthus + Vladimir): magic resist plus passive move speed feeds Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "when you keep getting focused first in fights: a free second life lets you commit deeper as the engage tool"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Use ramping move speed from E and Phase Rush to flank squishy targets (low-defense damage carries like ADCs), follow up with R fear, and cycle Q resets while W heals you through their burst."
  weakness: "Weak before level 3 and squishy when E is on cooldown. Hard CC such as roots (e.g., Morgana Q, Lillia R) or grounds (e.g., Cassiopeia W) shut down your engage and leave you a target with no escape."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Slow tank junglers without strong early ganks"
      reason: "Hecarim out-clears them and reaches level 3 first; he can invade their second buff or counter-gank a lane before they show up. His scaling on speed beats theirs on raw stats."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Squishy enchanters with no peel for themselves"
      reason: "E + R lets Hecarim run them down from off-screen and fear their carry; once their support dies, the enemy ADC has no shields and folds in seconds."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "Immobile or short-dash ADCs"
      reason: "Phase Rush plus E charge closes the gap before they can kite away; their only escape (Flash) is on a much longer cooldown than your engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champions with roots, slows or grounds that lock movement"
      reason: "Hecarim's whole kit scales with move speed (Warpath converts bonus speed into attack damage). Once rooted or grounded, he loses both damage and the ability to disengage."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Strong early-game gankers and invaders"
      reason: "Hecarim is weak before level 3. These junglers can invade his second buff, kill him or burn his Flash, and snowball before he comes online."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Dueling bruisers that punish single-target diving"
      reason: "If Hecarim engages alone (no team to follow up), they out-trade him 1v1 with anti-AD passives or true damage and turn his commit into a free kill."
---

## Overview

Hecarim is a fast diver jungler — a fighter who closes massive distances, knocks the enemy back into his team, then sticks like glue thanks to **Devastating Charge (E)** and **Onslaught of Shadows (R)**. His passive **Warpath** turns every point of bonus move speed into attack damage, so movement items are also damage items. The kit is simple to read but demanding to time: you spend most of the game as a roaming threat that punishes overextended carries (low-defense damage dealers like ADCs and mages).

The game plan is repeatable. Clear fast with **Rampage (Q)** and **Spirit of Dread (W)** to hit level 3, then look for early ganks down the lane that gives you the best E charge angle (long, straight lanes are best). From mid game on, your job is to **flank** (enter the fight from a side that nobody is watching) with **R**, fear the enemy back line, and chain **E** knockbacks until everything is dead.

## Recommended Build

**Starting items:** Mosstomper Seedling (or Gustwalker Hatchling if you want extra out-of-combat speed) + Refillable Potion. Mosstomper gives shielding when full HP — perfect for surviving the first clear.

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — your AD spike plus an active slow (Halting Slash). The slow on demand is the difference between a gank that gets the kill and one where the enemy walks out on Flash.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor against auto-attack damage. Default boots when the enemy team has 2+ AD threats.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — health, Tenacity, and a big shield when you take heavy damage. This is the item that lets you commit to a fight (engage fully without backing out) and survive long enough to cycle abilities.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns physical damage you take into a slow bleed (damage spread over the next few seconds instead of all at once). It also refills HP on takedowns, which lets you all-in (full commit until kill) and then walk out healthy.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — guarantees a critical strike on your first auto every fight (perfect with **E** knockback) and heals you for a chunk of HP. Pairs with Stridebreaker because both items want you to swing autos between abilities.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — instead of Plated Steelcaps when the enemy team has heavy crowd control or magic damage (Lissandra, Syndra, Brand). Tenacity reduces stun duration so you can still cast **R**.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tanks (Ornn, Sion). Auto-attacks and **Q** stacks shred armor for the whole team.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — when you want to splitpush a side lane (push alone to force a response) and you need extra wave clear plus omnivamp.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs slow comps with no real burst. Bonus ability haste means more **R** fears and more **Q** spam in long, drawn-out fights.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs heavy AP teams (Brand + Karthus + Vladimir). Stacking magic resist and the passive move speed double-dip with Warpath: more speed = more AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when the enemy team focuses you on engage. Revives you to clean up the fight after your team has already used their abilities.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** by default; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when CC matters more than auto-attack damage.

**Skill order:** Max **Q** first (waveclear, jungle clear, main DPS), **E** second (longer ghost duration and lower cooldown for ganks), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush triggers after 3 separate ability hits in 4 seconds — easy on Hecarim with **E**-auto-**Q** in a gank, and the burst of move speed becomes more AD via Warpath. Secondary **Resolve** with **Bone Plating** and **Overgrowth**. Use Conqueror in Precision instead if the enemy team is heavy frontline tanks (you want stacking damage in long fights).

## Key matchups

- **Lillia:** Her **R** roots you across the map. Bait it out by walking up at low HP, then commit only after she has used it. If she lands it, your engage window is gone for 14+ seconds.
- **Kha'Zix:** Strong early invader and assassin. Track him — if his blue buff is missing at 2:30, he is in your jungle. Path away from his expected route until level 4, then group with your laners for the rest of the early game.
- **Jarvan IV:** Mirror engage matchup. Whoever ults first usually wins the trade. Keep wards in their jungle so you can spot Jarvan moving and call your laners to back off; never group with allies in a tight spot if his **R** is up.
- **Sejuani:** Tank jungler that scales. You out-clear her and out-pressure her early. Force fights before minute 20; in late game her stuns and team peel are stronger than your single dive.
- **Master Yi:** Watch your **R**. Yi can auto-cleanse your fear with his **Q**-then-**Alpha Strike** invuln chain. Save **R** for when his **Q** is on cooldown — wait, see him use it on a wave or jungle camp, then engage in the next 12 seconds.

## Power spikes & win conditions

- **Level 3 (after first full clear):** First gank window. With a point in **Q**-**E**-**W** you can full-combo a target who oversteps. Crab fights are now real — you arrive faster than most junglers.
- **Level 6:** Onslaught of Shadows online. Cross-map flanks and turret dives become possible. If a side lane has prio, **R** in from fog and force a fight.
- **Stridebreaker completion (~ minute 10-12):** Big tempo flip. The active Halting Slash lets you stick to fleeing targets without burning **E**. Push to take Drake or Herald right after.
- **Sterak's Gage online (~ minute 22-25):** You become the engage tool that survives the first 2 seconds of a fight. Look for picks (eliminating an isolated enemy out of a teamfight) on the enemy ADC or mid laner around objectives.

## Common mistakes

- **Q-spamming the camp without auto-attacks between casts.** Warpath gives you AD from speed — let auto-attacks land in the gaps. Animation cancel: cast **Q**, hard-click an auto, cast **Q** again.
- **R-ing into the front line.** **R** is a flank tool, not a frontal engage. Fearing the enemy tank just sends him back to his ADC for peel. Walk around the fight (use vision or fog), then **R** through the carries.
- **Engaging without your team in vision range.** Hecarim's whole damage is "knock them back to the team that follows up". If your laners are not within 2 seconds of catching up, the kill goes to nobody and you die in their jungle.
- **Building full damage on a 1/3 score.** When you are behind and not snowballing (snowballing = stacking kills into more kills), Sterak's plus Sundered Sky keep you useful as the engage. Going Ravenous Hydra second on a losing game just makes you a 2-shot dive bot.
- **Wasting E's ghost on minions.** **E** lets you walk through units only during its short window. Save it for when you need to phase through a wave or a ward — don't pop it on cooldown in the jungle.

## Advanced tip

Use a "fake-flank" rotation around mid game objectives. Walk into vision in your own jungle so the enemy tracks you on their team's map, then immediately back off into fog of war (the dark areas you cannot see) and loop around the long way. By the time the enemy has rotated assuming you are still where they last saw you, you **R** in from the side they did not expect. The trick depends on Hecarim's raw move speed: most junglers cannot pull this off because they cannot cover the distance in time. With Phase Rush plus Stridebreaker active you can.
