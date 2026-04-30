---
title: "Kayn Jungle Build & Guide — Patch 16.9"
slug: "kayn-jungle"
language: "en"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Kayn jungle build and guide for League of Legends Patch 16.9: Rhaast vs Shadow Assassin form choice, jungle clear, gank timing, matchups, and power spikes."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Damage enemies to fill orbs of one of two colors: red orbs from melee/fighters, blue orbs from ranged/mages. Filling one bar transforms Kayn at level 6 into Rhaast (red) or Shadow Assassin (blue)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Short dash that hits enemies along the path, then a small AOE slash. Main mobility and waveclear tool. Rhaast slash deals max-HP damage."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Long line slow. Rhaast version knocks up enemies. Shadow Assassin version can be cast while moving and reaches further."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Walk through walls with bonus move speed and a small heal on first wall entry. Shadow Assassin gets longer duration, slow immunity, and lower cooldown."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Hide inside a marked enemy champion (mark applies for 3.15s after damaging them) for a few seconds, then burst out for huge damage. Provides untargetability — use it to dodge incoming CC."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs kiting comps with multiple ranged carries — the active slow lets Rhaast stick after closing the gap with E + Q"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs heavy AD comps (two physical damage dealers like Yasuo + Caitlyn) — bleed converts burst into sustain"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs ability-based magic burst (Syndra, Veigar, Annie) — gives MR plus a lifeline shield when low HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin vs single-target CC (Morgana Q, Ashe R) — the spellshield blocks the hook into your engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin vs targets stacking armor (Tabi tank, Bramble Vest) — armor pen plus a slow on damage"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast vs heavy armor stacking (Sion, Malphite) — shreds armor each hit and gives bonus health"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Stay alive through level 6 to transform: Rhaast vs frontline tanks, Shadow Assassin vs squishy backliners. Punish enemy jungler timings, snowball with R picks before grouped fights."
  weakness: "Pre-form Kayn (levels 1-5) is one of the weakest junglers in the game: low clear, no sustain, and easy to invade. If you fall behind before transforming, scaling collapses and you contribute nothing."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Tanky melee bruisers and frontline juggernauts"
      reason: "Rhaast's max-HP Q damage and W knock-up shred through high-HP frontline targets that other assassins struggle to kill, and you fill red orbs naturally fighting them in skirmishes."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Immobile ranged carries (ADCs without a dash)"
      reason: "Shadow Assassin's R lets you appear inside their position and burst them through the front line — they have no escape tool to dodge the untargetable channel."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Squishy enchanter supports"
      reason: "Shadow Assassin one-shots them in 1-2 abilities through E wall entries, removing the team's peel and disengage before the fight even starts."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Strong early-game junglers with invade pressure"
      reason: "They threaten Kayn's first three camps before he transforms. A successful invade at level 2-3 caps Kayn's scaling because he cannot defend his side without a strong clear."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Hard CC tanks with point-and-click lockdown"
      reason: "Rammus Q-taunt or Malphite R catches Kayn out of E and locks him out of his combo. Even Shadow Assassin's R untargetability doesn't save you if you're stunned before casting."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Junglers with strong dueling and counter-gank tools"
      reason: "They beat Kayn 1v1 in his weak early phase and can invade him before form. If they camp your jungle, you cannot answer until level 6 transform."
---

## Overview

Kayn is a melee assassin/fighter jungler with a unique transformation mechanic: at level 6 he becomes either **Rhaast** (red form, hybrid bruiser that heals from ability damage and excels against melee tanks) or **Shadow Assassin** (blue form, AD assassin that deletes squishy carries — "squishy" means high-damage low-defense champions like ADCs). The form you get depends on which "orbs" you filled during the early game — fight enemy melee/fighters to fill red orbs, fight ranged/mages to fill blue orbs. The first bar to fill at 100% locks the form.

Your game plan is two-stage. **Pre-transform (levels 1-5)** you are weak: clear with **Q** + **W** efficiently, avoid skirmishes (small fights between 2-4 players, not full team fights) you can lose, and try to power-farm to 6. **Post-transform** you become a real threat: Rhaast looks for extended fights and dives onto frontliners, Shadow Assassin looks for **R** picks (dive = jumping onto an enemy under tower or in the open to kill them) on isolated carries before the team groups for a fight.

## Recommended Build

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper grants tenacity (resistance to crowd control) on objective fights, which Kayn craves on both forms. Take ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** instead if you plan to commit to Shadow Assassin and want move speed for picks.

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — Rhaast first item. AD, attack speed, an active slow. Stacks well with **Q** dash to stick on kiting carries (kiting = moving back while attacking to keep distance from melee enemies).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — default boots into any team with stuns or roots. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vs heavy auto-attack damage (two AD carries).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, a lifeline shield (HP-threshold passive: a shield that triggers when your HP falls below a set percentage). Mandatory on Rhaast for surviving the long fights you want to start.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — Rhaast staple. AD, armor, ability haste, and the bleed effect (damage spread over several seconds instead of taking it all at once). Best item against squads with two strong physical damage dealers.

**Shadow Assassin core path** (replaces items 1, 3, 4 above):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — first lethality (flat armor penetration that scales down vs targets with high armor) item for Shadow Assassin. AD, lethality, ability haste, plus an active cleave that helps clear AND finishes off chunked targets after **R** exit.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst plus an active that gives move speed for picks across the map.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute passive that finishes targets under 5% HP, perfect after **R** burst.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs ability-based magic burst (Syndra, Veigar, Annie). Gives magic resist plus a lifeline shield under HP threshold.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin vs single-target CC (Morgana Q, Ashe R). The spellshield (a passive that blocks the next enemy ability) saves your engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin vs armor stacking (Tabi tank, Bramble Vest). Armor pen plus a slow when you damage them.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast vs Sion, Malphite, or any frontline that stacks armor. Shreds armor each hit and gives bonus HP.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs heavy poke from a magic damage backline (Xerath, Vel'Koz). Big HP plus a magic shield that regenerates out of combat.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** is the default for the tenacity (reduced duration of stuns and slows). Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vs two AD carries.

**Skill order:** Max **Q** first (reset on jungle camps and main damage). Max **E** second (lower cooldown for repositioning and wall plays). Max **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror** (stacks adaptive force as the fight extends, peaks for Rhaast extended dives), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Secondary **Domination** with **Sudden Impact** (extra lethality after **E** wall entry or **Q** dash) and **Relentless Hunter** (out-of-combat move speed for jungle pathing). On a Shadow Assassin one-shot setup, **Hail of Blades** keystone in Domination is the alternative — it gives a short attack-speed burst right after **R** exit.

## Key matchups

- **Lee Sin / Elise:** Early-game bullies. Start your top-side camps if your top laner has CC for help (a counter-gank), and ward your raptor/red entrances at minute 1:30. Do NOT contest river Scuttle Crab unless your top is walking with you — you lose the 1v1 before form.
- **Sett / Darius (top):** Free Rhaast feed targets if you gank top. Their kit forces them into melee range, which fills your red orbs fast. Wait for them to use their main ability (Sett W, Darius pull) and engage with **E** through wall + **Q** + **W** knock-up if Rhaast.
- **Vayne / Caitlyn (bot):** Shadow Assassin priority targets. They have no dash to dodge **R**, and they fill blue orbs because they fight at range. After form, gank bot lane on cooldown.
- **Malphite / Rammus (top jungle counters):** Their hard CC point-and-click locks you out of your combo. Build ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** early and never engage without your support's CC ready first.
- **Yuumi / Lulu (enemy support):** Free Shadow Assassin targets in late-game teamfights. **R** them from a flank position the moment they detach from their carry — they have no peel for themselves.

## Power spikes & win conditions

- **Level 6 + form transformation:** This is the spike (a "spike" is the moment your champion becomes much stronger because of a level or item). Before transformation you are below average; after, you are a top-3 jungler. Time your first big play (a gank or **R** pick) the second you transform, while the enemy team thinks you are still weak.
- **Crab control (minute 3:15 and minute 6:00):** Crab gives experience and vision. As pre-form Kayn you cannot duel for it; bring your top or mid laner to contest, or give it up cleanly and farm camps instead of dying.
- **First Drake fight (minute 6-9):** Pre-form Kayn is bad in 5v5 brawls. If your team can take Drake without you, agree on a Voidgrubs trade (Voidgrubs are the small worms in the top river that give a passive to whoever finishes them) on the opposite side and farm your jungle while they fight.
- **First item completion (~ minute 13-15):** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** for Rhaast or ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** for Shadow Assassin: this is when your gank conversion rate goes from "needs perfect setup" to "kills with just a flash from the laner."
- **Three-item Shadow Assassin (~ minute 22-25):** With ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online, your **R** combo one-shots any squishy below 5% HP. Force pickoffs (kills on isolated targets) before objective fights.

## Common mistakes

- **Locking the wrong form for the team comp.** Don't auto-pick Shadow Assassin every game because it's flashy. Look at the enemy team: 3+ tanks/bruisers = Rhaast (max-HP damage and sustain matter). 2+ squishy carries with no dash = Shadow Assassin. Filling the wrong orb bar is your fault: fight the matching enemies until the right bar locks.
- **Ganking before level 6.** Pre-form Kayn ganks deal almost no damage. Unless the enemy laner is sub-30% HP or hard-CC-locked, your gank just wastes time you should spend farming. Gank only on overkill setups (a clear Flash + ult laner has) until you transform.
- **Using R defensively without an exit.** **Umbral Trespass** makes you untargetable while inside the enemy, but you pop out at the same spot you cast from. If you ult into a 5-man fight to dodge CC and your team isn't winning, you exit into the same death you tried to avoid. Use **R** when you can finish the kill or when teammates are arriving, not as a panic Flash.
- **Walling through with E into the enemy team.** **Shadow Step** wall walks are flashy but the cooldown is long. Engaging through a wall with no escape behind it commits you fully. Don't all-in (commit to the fight without retreat) over a wall unless **R** is up and you have a clear target.
- **Ignoring red orb fights as Rhaast.** If you decided Rhaast, every fight against a melee target fills your bar faster. Don't run away from a top laner skirmish: dive in, fill the bar, and force the form by minute 5-6 instead of minute 8.

## Advanced tip

Use **E** offensively as a vision tool, not just an escape. Walking into the enemy jungle wall and waiting 1.5 seconds inside terrain reveals if their jungler is on the other side without committing — Kayn is invisible to them while inside the wall. If the camp is taken, you know the enemy is on your side of the map and you rotate back. If the camp is up, you can cross through the wall to invade with **Q** + **W** combo from an angle they don't expect. This single trick converts Kayn from "scaling jungler" to "information jungler" in the mid-game.
