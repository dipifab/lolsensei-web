---
title: "Vi Jungle Build & Guide — Patch 16.9"
slug: "vi-jungle"
language: "en"
patch: "16.9"
champion: "vi"
role: "jungle"
last_updated: "2026-04-29"
description: "Vi jungle guide for League of Legends Patch 16.9: clear path, gank patterns, core bruiser build, key matchups, power spikes, mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Vi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Blast Shield"
      description: "Vi charges a shield over time. The shield activates the next time she hits an enemy with an ability — extra durability inside every fight."
      dd_spell_id: "Vi_Passive"
    - key: "Q"
      name: "Vault Breaker"
      description: "Charge a dash that knocks back the first enemy champion hit and applies a Denting Blows stack. Main gap-closer; longer charge = more range and damage."
      dd_spell_id: "ViQ"
    - key: "W"
      name: "Denting Blows"
      description: "Every third hit on the same target deals bonus max-HP physical damage, shreds armor, and grants Vi attack speed. Also lowers Blast Shield cooldown."
      dd_spell_id: "ViW"
    - key: "E"
      name: "Relentless Force"
      description: "Empowers the next basic attack to hit through the target in a cone. Resets auto-attack timer and procs on-hit; main DPS button between Q and R."
      dd_spell_id: "ViE"
    - key: "R"
      name: "Cease and Desist"
      description: "Lock onto an enemy champion and dash unstoppably to them; knocks them up on arrival. Anyone in the path is knocked aside and stunned briefly."
      dd_spell_id: "ViR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy crowd control or magic damage (e.g., Lissandra, Syndra, Ahri): tenacity reduces stuns so you can still land R"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tanks (e.g., Ornn, Sion): repeated Q + W stacks shred armor for the whole team"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "vs squishy double-AD comps (e.g., Zed + Caitlyn): the energized auto adds a slow plus burst right after R knockup"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "when the enemy team focuses you first on engage: a free second life lets you all-in deeper as the lock-on tool"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (e.g., Syndra + Brand + Ahri): magic resist plus a lifeline shield when you dive low HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC pickers (e.g., Morgana Q, Ashe R): the spell shield blocks one game-deciding ability"
  base_combo: ["Q", "AA", "W", "E", "R"]
  win_condition: "Lock R on a key squishy carry, knock them into your team, then chain Q + AA-E-AA to cycle Denting Blows for armor shred and follow-up burst while Sterak's eats the return damage."
  weakness: "Once Q is on cooldown you have no escape and no slow. Champions with self-peel dashes (e.g., Ezreal E, Tristana R) or hard CC on you (e.g., Lillia R, Morgana Q) shut down your only engage and leave you out of position."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
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
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Squishy enchanters with no self-peel"
      reason: "R is point-and-click and unstoppable: nothing they can do stops Vi from reaching their carry. Once the support is dead the ADC has no shields and folds."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile or short-dash ADCs"
      reason: "Q charge plus R closes the gap before they can kite away. Their only escape is Flash, which has a much longer cooldown than your 90s engage at rank 1 R."
    - examples: ["azir", "anivia", "veigar"]
      archetype: "Immobile mages without a dash"
      reason: "They can't sidestep R lock-on, and Q knockback interrupts long channels (Veigar W, Anivia R) before the damage lands."
  counterpicks:
    - examples: ["lillia", "morgana", "ashe"]
      archetype: "Champions with long roots or sleeps that lock you mid-dash"
      reason: "If you eat a root or sleep before casting R, you're stuck without your engage and without an escape. They turn your only commit window into a free kill."
    - examples: ["udyr", "warwick", "jarvan-iv"]
      archetype: "Early-game gankers and dueling junglers"
      reason: "Vi is mediocre before level 6 and her clear is honest, not fast. These junglers invade her second buff or out-duel her on Crab and snowball before R is online."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Self-peel ADCs with a dash on demand"
      reason: "After your R lands they Flash or dash out of your follow-up, and Vi has no second gap-close until Q comes back up — you spent the engage for nothing."
---

## Overview

Vi is a point-and-click diver — a fighter who locks **Cease and Desist (R)** on the most dangerous enemy carry and arrives there no matter what. Her kit is short-range and honest: no stealth, no global ult, no fancy mobility. What she has instead is a guaranteed lock-on engage, an armor-shredding passive on every third hit (**Denting Blows (W)**), and a built-in shield (**Blast Shield**) that absorbs the first wave of return damage. The trade-off is brutal once **Vault Breaker (Q)** is on cooldown: no second escape, no slow, no peel.

The game plan is simple to remember and hard to execute well. Clear to level 3, look for an early gank with **Q** + auto-attack + flash-**R** (the level 6 spike), then spend the rest of the game tracking the enemy carry and waiting for a window where your team can follow up your **R**. You are not a flank champion or a side-lane bruiser — you are a single-target lock-on tool that wins games by deleting one priority target per fight.

## Recommended Build

**Starting items:** Mosstomper Seedling (or Gustwalker Hatchling if your team plans to invade) + Refillable Potion. Mosstomper gives a shield at full HP — perfect for surviving the first clear.

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — your main AD spike plus an active slow (Halting Slash). The slow is huge for Vi because once **Q** is on cooldown you have no other way to keep a target in melee range.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor against auto-attack damage. Default boots when the enemy has 2+ AD threats (most games).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — health, Tenacity, and a big shield when you take heavy damage. Vi dives into the back line; this item is what lets you survive the 2 seconds of return damage after your **R** lands so you can still cycle **Q** and **E**.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns physical damage you take into a slow bleed (damage spread over the next few seconds instead of all at once). It also refills HP on takedowns, so you can all-in (full commit until kill) and walk out healthy.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — guarantees a critical strike on your first auto every fight (perfect after **R** knockup) and heals you for a chunk of HP. Pairs with **W** because Vi already wants to swing autos between abilities to stack Denting Blows.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — instead of Plated Steelcaps when the enemy has heavy crowd control or magic damage (Lissandra, Syndra, Ahri). Tenacity reduces stun duration so you can still cast **R** when caught.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tanks (Ornn, Sion). Repeated **Q** hits and **W** procs already shred armor; Cleaver adds another layer that the whole team rides on.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — vs squishy double-AD comps (two strong physical damage dealers, e.g., Zed mid + Caitlyn bot). The energized empowered auto lands a slow plus a damage burst right after your **R** knockup.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when the enemy team focuses you first on every engage. A free second life lets you commit deeper without throwing the fight.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (Syndra + Brand + Ahri). Magic resist plus a lifeline shield when your HP dips low mid-dive keeps you alive long enough to land **R**.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs single-target hard CC pickers (Morgana Q, Ashe R). The spell shield blocks one game-deciding ability before it lands on you mid-dash.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** by default; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when CC matters more than auto-attack damage.

**Skill order:** Max **Q** first (lower cooldown means more engage windows and faster jungle clear), **W** second (more max-HP damage and armor shred per third-hit proc), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Conqueror stacks fast on Vi because **W** procs and **R** + **E** chain hit the same target multiple times — by the time Sterak's pops you are at full stacks. Secondary **Resolve** with **Bone Plating** and **Overgrowth** for survivability into the back line.

## Key matchups

- **Lillia:** Her **R** sleeps everyone in your team from across the map. If she lands it before you press **R**, your engage window evaporates. Stand in fog at fights, time your **R** the moment she steps up to ult, and don't group with all 4 teammates in a tight clump.
- **Kha'Zix:** Strong invader and assassin. He is faster than you in the early jungle and his isolation passive turns a 1v1 against you into a one-shot. Track him: if his blue buff is missing and he hasn't shown bot, he's hunting you. Path away from his expected route until level 6.
- **Jarvan IV:** Mirror lock-on engage matchup. His **E**-**Q** flag-and-drag knocks you up before you can cast **R**, and his ult cages you in place. Don't 1v1 him in the jungle without your laners; force fights only when his ult is on cooldown.
- **Sejuani:** Tank jungler with team-wide CC. You out-clear and out-pressure her in the early game (before minute 14). Force fights and objective trades while her ult is short-range; in late game her stuns and peel beat your single-target engage.
- **Master Yi:** Watch your **R**. Yi's **Q** (Alpha Strike) is invulnerable for the duration — if he uses it the moment you start your dash, you arrive on a target you can't damage. Wait for him to spend **Q** on a wave or camp, then engage in the next 12 seconds while it's on cooldown.

## Power spikes & win conditions

- **Level 3 (after first full clear):** First gank window. With one point each in **Q**, **W**, **E** you can full-combo a target who oversteps. Crab fights are real — your **Q** knockback wins most contested Crabs.
- **Level 6:** **Cease and Desist** online. Cross-map dives and turret dives become possible. If a side lane has prio (priority — you can leave without losing farm), **R** in from fog and force a 2v2.
- **Stridebreaker completion (~ minute 10-12):** Big tempo flip. The Halting Slash slow lets you stick to fleeing targets without burning **Q**, and the AD jump lets you 1v1 most enemy junglers on a Drake or Herald fight.
- **Sterak's Gage online (~ minute 22-25):** You become the engage tool that survives the first 2 seconds of a fight. This is when you start hunting for picks (eliminating an isolated enemy out of a teamfight) on the enemy ADC or mid laner around objectives.

## Common mistakes

- **Casting R on the closest target instead of the carry.** **R** is single-target lock-on, and you only get it once every 90+ seconds early. Wasting it on the enemy tank just hands you back to their team for free. Always lock the squishy back-line carry, even if you have to walk past the tank.
- **Q-charging in plain sight.** Vi slows herself and is visible while charging **Q**. Charge from inside fog of war (the dark areas you can't see) or from a brush — never out in the open lane. A telegraphed Q gets dodged with one sidestep.
- **Engaging without your team in vision range.** Vi's whole damage profile is "knock the carry into the team that finishes the kill". If your laners are 4 seconds away, you arrive, get the knockup, and die before anyone follows up. Wait for at least one teammate to be in flash range of the fight.
- **Spamming E off-cooldown.** **E** has 2 charges with a long refresh. Save them for after **W**'s third-hit proc — empowered auto-attack right after the third hit gives you the maximum burst window. Casting **E** randomly on a creep wave wastes your in-combat damage.
- **Building full damage when behind.** When you're 0/3 and not snowballing (snowball = stacking kills into more kills), Sterak's plus Sundered Sky keep you useful as the engage. Going Voltaic Cyclosword second on a losing game just makes you a 2-shot dive bot that dies before reaching the carry.

## Advanced tip

Use Flash + **R** as a defensive cancel against single-target lock-on threats. If you see a Zed shadow drop on you or a Talon **W** flying in, **R** the source the instant the ability animation starts: Vi's dash is unstoppable, so you become unselectable for that ability and you arrive on the enemy carry instead of dying in your own jungle. The trick depends on reaction speed and on the fact that **R** can't be interrupted — most players forget you can use a lock-on ult as an emergency exit. Save Flash for after the dash so you can re-position when you arrive.
