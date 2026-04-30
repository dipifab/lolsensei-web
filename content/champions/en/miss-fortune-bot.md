---
title: "Miss Fortune Bot Build & Guide — Patch 16.9"
slug: "miss-fortune-bot"
language: "en"
patch: "16.9"
champion: "miss-fortune"
role: "bot"
last_updated: "2026-04-29"
description: "Miss Fortune bot lane guide for League of Legends Patch 16.9: starter kit, lethality and crit build paths, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "MissFortune"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Love Tap"
      description: "Each basic attack on a new target deals bonus physical damage. Alternate targets in lane to maximize harass."
      dd_spell_id: "MissFortune_Passive"
    - key: "Q"
      name: "Double Up"
      description: "Bouncing shot: hits the first enemy, then a second behind. Second shot can crit; auto-crits if the first kills its target."
      dd_spell_id: "MissFortuneRicochetShot"
    - key: "W"
      name: "Strut"
      description: "Passive Move Speed when not damaged. Active grants bonus Attack Speed. Love Taps reduce its cooldown."
      dd_spell_id: "MissFortuneViciousStrikes"
    - key: "E"
      name: "Make It Rain"
      description: "Targeted zone of bullets that slows enemies and ticks magic damage. Setup tool for Q lineups and R channel."
      dd_spell_id: "MissFortuneScattershot"
    - key: "R"
      name: "Bullet Time"
      description: "Channeled cone of bullets dealing massive physical damage. Each wave can crit. Stand still: cancel = lose all damage."
      dd_spell_id: "MissFortuneBulletTime"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanky front lines (Malphite, Ornn, Sion) — bonus damage scales with the target's max HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka support, Aatrox, Dr. Mundo) — applies anti-heal on hit"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs heavy assassin/diver pressure (Zed, Kha'Zix, Nocturne) — second life lets you finish your R channel"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs game-deciding single-target CC (Malzahar R, Skarner R, Warwick R) — active cleanses suppression"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst threats (Syndra, Veigar, LeBlanc) — magic shield + lifeline at low HP"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Bully the lane early with Q and Love Tap auto-attacks, hit the level 6 power spike for objective fights, and land a full Bullet Time channel from a flank or after enemy frontline CC is used."
  weakness: "No dash, no built-in escape, vulnerable to dive once Flash is down. R channel is a sitting target if the enemy still has hard CC like a stun or knock-up."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ezreal", "ashe"]
      archetype: "Low-mobility lane bullies and pokers"
      reason: "Miss Fortune wins extended trades because Love Tap rewards attacking different targets. Against immobile marksmen she trades evenly at long range and pulls ahead once Strut active stacks attack speed."
    - examples: ["nami", "soraka", "lulu", "yuumi"]
      archetype: "Stationary enchanter supports without engage"
      reason: "Without an engage tool to interrupt her R, the enemy bot lane is forced to react to Bullet Time after it has already deleted them. E + R covers their entire safe zone in lane."
    - examples: ["kog-maw", "vayne", "twitch"]
      archetype: "Hyperscaling marksmen with weak early"
      reason: "Miss Fortune outdamages them levels 1-9. Push the lane, Q-poke at low cooldown, and snowball before they hit their two-item spike (around minute 22-25)."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Early-game lane bullies with aggressive trade patterns"
      reason: "They have either higher base AD (Draven), better short-trade burst (Lucian), or built-in mobility plus shielding (Samira). Miss Fortune has no dash to disengage if they commit Flash for an all-in."
    - examples: ["leona", "nautilus", "alistar", "rell"]
      archetype: "Hard-engage tank supports with point-and-click CC"
      reason: "Their stuns and knock-ups land before her R channel finishes. Without Flash up, Miss Fortune cannot reposition mid-channel and loses the entire ult value."
    - examples: ["zed", "kha-zix", "nocturne"]
      archetype: "Mobile assassins that flank into the back line"
      reason: "Miss Fortune has no escape and is the easiest back-line target in the game once Flash is down. They burst her in 1-2 seconds before peel can land."
---

## Overview

Miss Fortune is a marksman (champion that does sustained physical damage from range) who excels at lane bullying and at finishing fights with one giant ultimate. Her kit is built around basic attacks and a single bouncing skillshot (an ability you have to aim manually, like a line — it can be dodged), **Double Up (Q)**, that punishes whoever stands behind their support. The big payoff is **Bullet Time (R)**: a channeled cone of bullets that, used on a clumped team after a frontline lockdown (chain CC like Leona Q + R, or a Nautilus hook), can win the entire teamfight in three seconds.

Her game plan is "bully early, scale to the first ult, then look for clean R channels". Push waves with **E** + auto-attacks, alternate targets in lane to trigger **Love Tap** bonus damage on every other auto, and at level 6 ping for an all-in (a fight committed all the way to the kill, no backing out) when your support has CC up. Miss Fortune has no dash and no escape: she trades positioning safety for one of the highest one-button damage outputs in the game, so the discipline is staying behind your support and never standing in melee range without **Flash**.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Blade gives lifesteal that combines with Love Tap auto-attacks to outsustain most poke matchups.

**Core items (in order):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — first power spike. Adds crit, lethality (armor penetration for the early levels of the enemy carry), and an execute passive that finishes targets below 5% HP.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Buy after the first item or earlier if the matchup is auto-attack heavy.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit damage multiplier. Once you cross 60% crit chance with the next item, IE makes every wave of **Bullet Time (R)** roughly twice as damaging.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — energized auto adds attack range, which means safer **Q** lineups and a longer-distance opening shot in fights.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (heal-on-hit, around 22% of damage) plus an overheal shield. Closes the survivability hole that Miss Fortune has by default.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — swap into compositions with two or more tanks. The bonus damage versus high-HP targets matters more than raw crit at that point.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — anti-heal item against healing-stacking comps (Soraka support, Aatrox top, Dr. Mundo top).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — versus assassins and divers that flank the back line. The revive lets you finish your **R** channel without losing the trade.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — versus game-deciding single-target CC (Malzahar R suppression, Skarner R, Warwick R).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — versus heavy AP burst (Syndra, Veigar, LeBlanc on the enemy team).

**Boots:** Berserker's Greaves is default. Plated Steelcaps versus a fully physical-damage enemy team with an AD assassin.

**Skill order:** Max **Q** first (main poke and trading tool), **E** second (better slow and waveclear), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Domination** with **Cheap Shot** and **Treasure Hunter** for early gold spikes, or **Sorcery** with **Manaflow Band** + **Gathering Storm** if you expect a long game.

## Key matchups

- **Caitlyn:** Long-range poke (chip damage from a safe distance to wear down HP without committing); respect her traps (the yellow squares on the ground) by walking around them. Trade back (a short exchange of hits and abilities) with ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** spike around minute 12: your Love Tap auto-attacks beat her single-target poke at that point.
- **Draven:** He out-trades you levels 1-3. Hold **Q** for when he commits an Axe catch, push the wave to deny him farm, and call your jungler — Draven snowballs (gains a kill lead that grows item by item) faster than any other ADC.
- **Lucian / Samira:** Short-range bullies with mobility. Stay behind minions, never auto-attack into them when their **W** dash is up. After level 6, **R** punishes them if they commit a long combo on you and the support catches them with CC.
- **Kog'Maw / Vayne:** You bully them levels 1-9; they scale (grow stronger with items) past you later. Push the wave permanently, force them under tower, and **Q**-poke whenever they step out to last-hit. Win before their two-item spike (around minute 22-25).
- **Leona / Nautilus support on the enemy side:** Stand at maximum auto-attack range, never walk up first to a wave. Buy a control ward (the pink one) to deny their bush flanks. Save **Flash** specifically for their first hard CC.

## Power spikes & win conditions

- **Level 2:** With **Q** + **E** unlocked you can poke from the slow zone. Stack the wave on your side and trade on every cooldown.
- **Level 6:** First ![Bullet Time](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/MissFortuneBulletTime.png) **Bullet Time**. With your support holding any CC, an all-in on a low-mobility enemy bot lane is a guaranteed double kill.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completion (~ minute 11-13):** Your damage threshold for kills jumps. Every fight where the enemy support and ADC survive at low HP will now end in a kill thanks to the execute passive.
- **3-item spike with ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 22-25):** Your crit damage roughly doubles. Force objective fights here — **R** in a teamfight after a tank engage is a near-guaranteed quadra.

## Common mistakes

- **Channeling Bullet Time without setup.** A lone **R** with no CC on the enemies is wasted: anyone steps out of the cone in the first 0.5 seconds and you lose the entire ult value. Wait for a stun, knock-up, or root from your support before pressing R.
- **Auto-attacking the same target in lane.** Love Tap (the passive) only triggers on a new target. If you keep clicking the same minion you ignore your strongest source of harass on the enemy ADC.
- **Forgetting Strut active during fights.** **W** active gives a big attack speed burst — using it 2 seconds before a fight starts means you out-damage your opposite ADC by roughly 25% during the first exchange.
- **Standing in front of your support.** Miss Fortune has no dash. If you walk up first to a wave you eat the engage (the enemy initiation) that was meant for your peeler (the support whose job is to protect you by interrupting whoever attacks you), and Flash burned defensively here means dying to the next gank.
- **Ignoring vision in the bot bush.** Without a control ward in the lane bush, a Leona or Nautilus walks up unseen and lands point-and-click CC on you before you can react. Always pink ward by minute 4.

## Advanced tip

Practice the "Flash + Bullet Time" combo: hold **R** in your camera view, **Flash** to a flanking position (entering the fight from a side that is not covered, usually behind the enemy back line) behind the enemy team, then channel **R** along the longest line through their formation. The cast does not get cancelled by the Flash animation if you queue them in the right order (Flash first, then R). This catches teams off-guard because they expect Miss Fortune to channel from her own back line, and the cone now hits all five enemies instead of two.
