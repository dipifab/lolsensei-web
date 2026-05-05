---
title: "Nautilus Support Build & Guide — Patch 16.9"
slug: "nautilus-support"
language: "en"
patch: "16.9"
champion: "nautilus"
role: "support"
last_updated: "2026-05-05"
description: "Nautilus support guide for League of Legends Patch 16.9: tank engage build, key lane matchups, item-by-item power spikes, common mistakes, and a closing technique tip."
quick_learn:
  champion_dd_id: "Nautilus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Staggering Blow"
      description: "First basic attack on a target deals bonus physical damage and roots them briefly. Per-target cooldown — chain it across enemies in a fight."
      dd_spell_id: "Nautilus_Passive"
    - key: "Q"
      name: "Dredge Line"
      description: "Linear hook skillshot. Hits an enemy: pulls you and them together, stuns and damages. Hits terrain: pulls you to it (Flash-like reposition)."
      dd_spell_id: "NautilusAnchorDrag"
    - key: "W"
      name: "Titan's Wrath"
      description: "Self shield that scales with bonus HP. While active, your basic attacks deal AOE magic damage over 2s — your only real waveclear and trade tool."
      dd_spell_id: "NautilusPiercingGaze"
    - key: "E"
      name: "Riptide"
      description: "Three exploding rings around you that damage and slow. Stacks the slow on enemies hit by multiple waves — chase / peel tool."
      dd_spell_id: "NautilusSplashZone"
    - key: "R"
      name: "Depth Charge"
      description: "Targeted shockwave that chases an enemy champion, knocking up everyone in its path and stunning the main target on impact."
      dd_spell_id: "NautilusGrandLine"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Mercury's vs auto-attack heavy lanes (Caitlyn, Draven, Tristana, Master Yi) — flat reduction on basic attacks"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "vs AP-heavy compositions with grouped fights — bonus magic damage taken to nearby enemies makes your team's mage scarier"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs burst mages (Veigar, Syndra, Annie) — large magic shield regenerates out of combat to soak the first ability rotation"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs healing-stacking comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds (50% reduced healing) on attackers"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "vs poke compositions (Xerath, Varus, Jayce) — out-of-combat regen lets you heal between waves of poke"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "vs crit-stacking ADCs (Caitlyn, Yasuo, Tryndamere) — 25% reduced damage from critical strikes plus an AOE slow active"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Land Q to lock onto a backline target, follow with W shield, R-stun the priority threat in a teamfight, drop E for slow, and peel for your carry until they finish the kill."
  weakness: "Long cooldowns early (Q is 14s at rank 1) and no ranged poke. Miss your Q and you have nothing in lane for ~12s — opponents who punish missed hooks (Lulu, Janna, Caitlyn) bleed your trades."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Aftershock procs on Q stun and R impact, giving you a burst of resists exactly when you engage. Font of Life heals your team off slowed enemies, Bone Plating eats the first 3 trades after a hook, Unflinching adds uptime under chain CC."
    secondary_rationale: "Inspiration secondary: Magical Footwear saves 300 gold so you can rush Bulwark of the Mountain plus Locket sooner, Cosmic Insight cuts your summoner spell and item active cooldowns — meaningful on Locket and Flash."
    secondary_alternative: "Vs heavy poke compositions (Xerath plus Varus, or Karma plus Caitlyn), swap Inspiration to Sorcery with Manaflow Band (more mana to spam E for clearing minions) and Nimbus Cloak (free movement-speed burst after Flash to close gaps)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "yuumi", "janna"]
      archetype: "Enchanters with no hard CC"
      reason: "They have no point-and-click stun or root to interrupt your Q, so a single landed hook into your AD's all-in kills them before their shields outpace your damage."
    - examples: ["jhin", "sivir", "ezreal"]
      archetype: "Immobile or low-mobility ADCs"
      reason: "These ADCs lack a reliable dash to dodge your Q hook at level 2-3, so once you clear the wave priority you can walk up, hook one of them, and force a flash or a kill."
    - examples: ["senna", "ashe"]
      archetype: "Stationary ranged carries"
      reason: "Their auto-attack DPS is highest while standing still — exactly when your Q is easiest to land. R then locks them out of repositioning long enough for your team to finish them."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Spell-shield supports"
      reason: "Their pre-cast shield blocks your Q entirely, removing your only engage tool for 5+ seconds. Without Q, your kit collapses to a melee bruiser with no gap-close."
    - examples: ["caitlyn", "draven"]
      archetype: "Lane bullies with auto-attack range"
      reason: "They harass your bonus HP down before level 3 — your shield W only lasts 6s and has a 12s cooldown, so they trade for free during downtime and you give up the lane."
    - examples: ["braum", "alistar", "leona"]
      archetype: "Engage tanks with point-and-click CC"
      reason: "They engage on you while your Q is on cooldown. Without Q to peel back or terrain-pull out, you eat their full combo — they pick first means you lose the trade pattern."
---

## Overview

Nautilus is a tank engage support whose entire game revolves around a single ability: **Dredge Line (Q)**. Land it on an enemy and you stun them, pull them into your team, and trigger your **Staggering Blow (P)** root for a half-second more lockdown. Miss it and you have a 14-second cooldown of nothing — no ranged poke, no waveclear that matters, and a melee tank standing where the enemy support wants you to be. That binary nature makes him brutal against people who walk in straight lines and embarrassing against people with spell-shields or fast dashes.

His game plan is to find a hook, spend his **Depth Charge (R)** on the priority target in a teamfight (it chases a single enemy and knocks up anyone in its path), then peel the carry behind him with **Riptide (E)** slows. **Titan's Wrath (W)** gives a temporary shield and AOE magic damage on his auto-attacks for 6 seconds — that's the trade window where Nautilus actually deals damage. Outside of W, he's essentially a CC chassis: every choice you make is "where do I want my next stun to land".

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that auto-evolves through the support quest) + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** trinket.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — the support starter. It generates the gold that fuels your lane and auto-upgrades twice (Runesteel-style intermediate, then ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** when the quest finishes).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots with magic resist and tenacity (reduces the duration of stuns and roots applied to you). The default in most matchups because enemy supports and mid laners are usually magic damage with CC.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — first full item. Active shield for your whole team during a teamfight engage; it pairs perfectly with your **R** flash-engage timing.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — second full item. Bond with your strongest carry: you redirect a slice of damage they take onto yourself, and you gain movement speed when running toward them. Pure peel tool.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — endgame upgrade of the support starter (you don't buy it directly, your World Atlas evolves into it once the quest is complete). Carries a Spellblade-style passive: after a cast, your next basic attack deals bonus damage and amps the target.
6. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — third full item. After you ult, it links you to your bonded ally and adds a slow plus bonus damage on their attacks. Designed for engage tanks paired with a damage carry.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — swap from Mercury's vs auto-attack heavy lanes (Caitlyn, Draven, Master Yi). Flat reduction on every basic attack you take.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — vs AP-heavy comps that group up. Aura makes nearby enemies take more magic damage; great if your team has a mid mage.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs burst mages (Veigar, Syndra, Annie). Large magic shield that regenerates out of combat — soaks the first ability rotation thrown at you in a fight.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — vs healing-stacking comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds (cuts enemy healing in half) when you take a basic attack.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — vs poke comps (Xerath, Varus, Jayce). Out-of-combat HP regen lets you tank chip damage between waves and stay on the map.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — vs crit-stacking ADCs (Caitlyn, Yasuo, Tryndamere). Reduces damage from critical strikes by 25% and slows all enemies around you with the active when you engage.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** is the default — most enemy supports and mid laners deal magic damage and apply CC. Switch to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only when 3 of the enemy 5 deal physical damage.

**Skill order:** Q at level 1 (you need the engage online), E at 2 for pre-6 trade pressure (it slows for chases), W at 3 for the shield. Then max **E** first (lower cooldown means more wave poke and slow uptime), **Q** second (shorter cooldown on your engage), **W** last. Take **R** at 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Bone Plating**, **Unflinching**. Secondary **Inspiration** with **Magical Footwear** and **Cosmic Insight**, or **Sorcery** with **Manaflow Band** and **Nimbus Cloak** vs heavy poke lanes.

## Key matchups

- **Soraka:** Easy lane. She has no CC to interrupt your Q and her trade pattern is silence + auto-attack — your Q stuns her before she can cast it. Hook level 2 for first blood.
- **Morgana:** Hard counter. Her Black Shield blocks your Q completely. Bait the shield by walking forward as if to engage, wait for her to cast it (12s cooldown early), then hook in the window after it expires. If she always shields herself, hook the ADC instead.
- **Caitlyn:** Lane bully. She out-ranges your Q (Q range is 1150, her auto-attack is 650 but her traps and headshots zone you). Hide behind your wave and look for a flank hook from the side bush.
- **Leona:** Mirror engage. Whoever lands their CC first wins the trade. Her **E** dash is on a 10s cooldown — bait it out, then hook her in the recovery window. Ward the lane bushes, because she only engages from melee range.
- **Lulu:** Even-to-favored matchup. She has no spell shield; her **W** can polymorph you to cancel an in-progress engage, but it can't block a Q already in flight. Lead with Q before she pre-casts W.

## Power spikes & win conditions

- **Level 2 (with Q + E):** Your first kill window. If you're allowed to push the wave 1, you hit level 2 first. Hook the enemy ADC, follow with E for the slow, your AD finishes them.
- **Level 6:** **Depth Charge (R)** unlocks. Now your engage is two-stage: hook in with Q, then chain R if they Flash. Look for a roam to mid lane after a successful all-in — your R is one of the strongest pickoff ults in the game.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** Your engage is paired with a team-wide active shield. Force a Drake or grub fight here — your team is significantly tankier than the enemy's during the 3-second shield window.
- **Knight's Vow + Bloodsong spike (~ minute 22-26):** With ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** bonded to your carry and the support quest finished into ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**, you can tank a full enemy combo and hand a win condition to your bonded ally. Force Baron and Drake fights in this window before the enemy ADC out-scales you.

## Common mistakes

- **Throwing Q into a minion wave.** The hook stops on the first enemy hit, so a caster minion eats it instead of the enemy ADC. Walk to the side of the wave or use a brush to clear your line of sight before hooking.
- **R-engaging a tank instead of the priority.** Depth Charge chases its target — if you ult the enemy Sion, your R does almost nothing because Sion has 4000 HP and a passive that revives him. Always ult the highest-damage low-HP target (the ADC or mid mage), even if they're across the map.
- **Saving W for the kill instead of using it for waveclear.** Your shield is on a 12s cooldown — the longest window in your kit between uses. If you don't use it pre-trade, you don't get the 6 seconds of AOE auto-damage. Use W at the start of every engage, not at the end.
- **Q-pulling onto the enemy team.** Hooking terrain pulls you to it (a Flash-like reposition) — but hooking an enemy pulls you to them. If you Q an enemy in their backline, you arrive in their team alone and die in 1 second. Hook only when you have follow-up.
- **Walking out of vision after losing Q.** Without Q, you have no escape. After a missed hook, retreat to your wave or to a warded area for the 14 seconds it takes Q to come back; do not stand in fog of war hoping for a re-engage.

## Advanced tip

Master the **Q-flash combo** for surprise engages. Cast Q in a direction, and during the brief animation cast Flash — the hook continues from your new position, dramatically extending its effective range and bypassing minion blocks. Practice in the Practice Tool until the timing is muscle memory: it lets you engage from outside the enemy's vision range and is the single mechanic that separates a "good" Nautilus from a smurf-tier one.
