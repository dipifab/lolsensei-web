---
title: "Kalista Bot Build & Guide — Patch 16.9"
slug: "kalista-bot"
language: "en"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Kalista bot lane guide for League of Legends Patch 16.9: on-hit core build, Soulbound mechanics, key matchups, power spikes, common mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Every basic attack and Pierce lets Kalista hop a short distance during the wind-up. Movement command before the attack lands sets the hop direction."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Linear skillshot spear. Carries Rend stacks: if Pierce kills the first target, the spear continues to the next, transferring all spears."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Soulbound passive with one allied champion: when both attack the same target, bonus magic damage on max HP. Active sends a soul to scout ahead."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Each auto-attack and Pierce sticks a spear in the target. Active rips them out: damage scales with stack count, slows nearby enemies hit."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Stasis on the Soulbound ally and pulls them to Kalista. They can recast to launch as a knockback dash that stops on first champion hit."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanks and bruisers stacking 2500+ HP (Sion, Ornn, Cho'Gath) — armor pen scales with their HP advantage over you"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka support, Aatrox, Dr. Mundo) — Grievous Wounds cuts their healing in half"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs heavy assassin or burst comps (Zed, Talon, Kha'Zix) — second life lets your Soulbound R follow up"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC (Ashe arrow, Morgana Q, Blitzcrank hook) — spell shield blocks one ability, your hop reset survives"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Stack Rend to 6+ on the priority target during a teamfight, then Q reset onto a second target. With on-hit Wit's End plus Blade of the Ruined King online, you out-DPS most marksmen in extended fights."
  weakness: "You scale with your support: a Soulbound partner who cannot lock targets down leaves you with no engage. Hook supports (Blitzcrank, Thresh) can grab your partner out of attack-jump range and end the fight before R is up."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision with Press the Attack: three hops on the same target proc PtA for +12% bonus damage and stack Rend up fast. Triumph rewards the constant skirmishing, Legend: Alacrity feeds the on-hit AS curve, Coup de Grace finishes targets your E rips below 40% HP."
    secondary_rationale: "Domination secondary: Taste of Blood gives early-lane sustain after every short trade (your hop windows let you walk away clean), Relentless Hunter stacks on takedowns and adds the out-of-combat movement speed you need to roam mid with the Soulbound support."
    secondary_alternative: "Into a heavy poke lane (Caitlyn + Lux, Varus + Brand), swap Domination to Resolve with Bone Plating (-30 to -60 damage on the first 3 hits) and Second Wind (HP regen rises while below 50% HP) so you survive the first 6 levels."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "Immobile late-game ADCs without a dash"
      reason: "Their only safety is positioning. Kalista hops with every auto-attack, so she trades in melee range without ever standing still — they have no answer except Flash, and you stack Rend faster than they can reset the trade."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Static-positioning marksmen reliant on their support's lockdown"
      reason: "If their support engages first, your R reposition and Wit's End magic on-hit beat their AS curve. They cannot kite a champion who closes 350 units per auto."
    - examples: ["caitlyn"]
      archetype: "Long-range artillery ADCs in lane phase"
      reason: "Caitlyn out-pokes you levels 1-3, but her trap-and-net combo is a single dash on a long cooldown — once you have boots and Wit's End online, you walk her down at level 6."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Lane-bully marksmen with strong level 1-3 all-in"
      reason: "Their early damage outpaces your hop spacing (the safe distance you keep using auto-attack jumps) before you have the AS to stack Press the Attack. One bad Q at level 2 and they collect a kill before your support can answer."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports the enemy team picks against your Soulbound partner"
      reason: "If they hook your support, the Soulbound link is irrelevant: you cannot R him out of the grab line, and the engage happens 800+ units away from your hop window."
    - examples: ["tristana", "vayne"]
      archetype: "Mobile self-peel hypercarries"
      reason: "Tristana W out of your dive, Vayne tumble-cancels your Press the Attack stack timer. Both scale into items that beat your on-hit core in a 1v1 past minute 25."
---

## Overview

Kalista is an on-hit skirmisher marksman ("on-hit" = items whose effects trigger on every basic attack rather than from spells; "skirmisher" = champion who fights in repeated short trades, not in one big all-in) defined by **Martial Poise (P)** — every basic attack and **Pierce (Q)** lets her hop a short distance during the wind-up. That hop turns auto-attacks into mobility: she walks down enemies who stand still and disengages from melee threats without ever stopping to attack. The trade-off is a fragile early game (low base AD, no shields) and one of the highest skill floors among marksmen: the hop must be commanded with movement clicks frame-by-frame.

Her game plan revolves around **Rend (E)** stacks. Every auto-attack sticks a spear in the target; the active rips them all out for escalating damage. Stack 6-8 spears on a tank, then E to delete a squishy beside it, and you have ended a teamfight. The Soulbound mechanic on **Sentinel (W)** locks her to one allied champion for the game — usually the support — and **Fate's Call (R)** lets her catapult that ally as a knockback dash. With an engage support like Thresh or Leona, Kalista's R turns one Soulbound flank into a guaranteed pick. With a poke support, she scales worse and her R becomes a panic disengage instead of an engage tool.

## Recommended Build

**Starting items:** Doran's Blade plus 1 Health Potion. Skip Doran's Shield even into ranged matchups — Kalista needs the extra AD to convert her hop spacing into kill threats.

**Core items (in order):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — first item: your attack speed (AS) spike, meaning the first big jump in how fast you swing. Adds magic damage on every auto-attack, which scales perfectly with your hop frequency, and the magic resist matters into AP support + AP mid combos.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — extra attack speed for Press the Attack stacks and Rend application speed.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — deals damage equal to a percentage of the target's current max HP on every auto, plus an active slow. Seals the deal in melee range and is the best second item against any frontline (the tanks/bruisers who open team fights).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — bolts apply Rend to two extra targets. This is what turns Kalista's E into a teamfight-deleting AOE spike (area of effect: damage that hits more than one target at a time).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — fifth-item AD plus the lifesteal shield for late-game extended fights.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — into tanks stacking 2500+ HP (Sion, Ornn, Cho'Gath); the armor pen scales with their HP advantage over you.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — into healing-heavy compositions (Soraka support, Aatrox, Dr. Mundo). Grievous Wounds cuts the heal in half.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — into burst assassin comps (Zed, Talon, Kha'Zix); the second life lets your Soulbound R follow up after the dive.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — into single-target hard CC (crowd control: stuns, roots, knock-ups that lock you in place). Blocks one Ashe arrow or Blitzcrank hook so your hop reset survives.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. Swap to ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** if the enemy has 4+ slows you cannot dodge with the hop.

**Skill order:** Max **Q** first (your main damage + the Rend transfer mechanic), **E** second, **W** last. Take a point in **R** at levels 6, 11, 16. Start **Q** at level 1 for a reliable poke at level 1 invade fights.

**Runes:** Primary **Precision** with **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Domination** with **Taste of Blood** and **Relentless Hunter**. Into heavy poke lanes (Caitlyn + Lux, Varus + Brand) swap Domination to Resolve with **Bone Plating** and **Second Wind** to survive levels 1-6.

## Key matchups

- **Aphelios:** Kalista wins post-6 if she hits her hop spacing. Aphelios damage spikes vary by weapon, so step up only when his off-hand is Severum (lifesteal) or Crescendum (turret) — both are short-range and you walk him down.
- **Caitlyn:** Hard losing lane levels 1-5: her traps and 650 auto-range punish your need to walk forward for Rend stacks. Take **Bone Plating** secondary, ask the support to tank one trap, then look for level 6 with **R** + jungle gank.
- **Draven:** Lane bully. Avoid trades while his **Spinning Axe** is up; his auto-reset chains your hop into a guaranteed kill if you stand still. Stack one Rend per minion auto, save E for when he lands a Q on you, then re-engage when his axe is down.
- **Jinx:** Even pre-6, you scale better post-6. Kalista's hop counters Jinx **W** slow because the dash starts before the projectile lands. After level 9 you all-in any wave Jinx is forced to clear.
- **Vayne:** Losing scaling matchup post-25 minutes. Kill her in the first two items — Wit's End online before she finishes Kraken Slayer is the only window where Kalista wins straight up.

## Power spikes & win conditions

- **Level 2:** With **Q** plus one point in **E**, you have a reliable trade pattern: AA, AA, E for stacked damage. Most lanes lose this exchange.
- **Level 6:** First **Fate's Call** unlocks the Soulbound R flank (entering the fight from a side the enemies are not watching): position your support in a side-bush, R them onto the enemy support, and chain with your stacked Rend.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End completion (~ minute 11-13):** Your AS curve takes off. You walk down most marksmen levels 6-9 and you become the auto-attack DPS leader bot side.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King online (~ minute 18-21):** % max HP on-hit shreds frontlines. Force a drake or Rift Herald fight here — your stacked E on the tank deletes the enemy ADC standing next to him.

## Common mistakes

- **Casting Rend at 1-2 stacks for chip damage.** Rend scales hard with stack count: spamming E early empties the spear stack before the kill threshold. Hold E until you have 5+ stacks on the priority target, or until the kill secures (E refunds cooldown on a kill, so a kill cast resets the cycle).
- **Forgetting the hop is a movement command.** New Kalista players auto-attack and stand still. The hop only triggers if you click a movement direction during the wind-up frame. Practice clicking-and-attacking in alternation in custom games before laning.
- **Using R as offensive engage with a poke support (Karma, Lulu).** Their kits have no follow-up CC after the knockback. Save R as a panic save: stasis your support to dodge an Ashe arrow or Blitzcrank hook, then disengage.
- **Skipping Wit's End into AD-heavy enemy comps.** Even then, Wit's End is your fastest AS spike and the magic damage applies independently of armor. Build it first; AD pen items belong in slot 4 or 5.
- **Overstaying past 0 hop options.** Your hop is on every auto-attack, but if no enemy is in attack range, you are stuck walking. Track when you are out of attack targets and back off — Kalista with no hop is a 580-MS marksman without dash, lower mobility than Caitlyn.

## Advanced tip

Practice the **Q reset on minions for jungle escapes**. When you take a wall jump near the river or the tri-bush, queue a **Q (Pierce)** at the minion wave behind the wall: if the spear kills the minion, the spear carries forward and lets you hop over the wall in the same frame. The trick lets you escape a gank that has cut off your river path, because the hop frame counts as movement and bypasses the wall hitbox. Bind a quick-cast **Q** key to shave the reaction time.
