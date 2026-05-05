---
title: "Master Yi Jungle Build & Guide — Patch 16.9"
slug: "master-yi-jungle"
language: "en"
patch: "16.9"
champion: "master-yi"
role: "jungle"
last_updated: "2026-05-05"
description: "Master Yi jungle guide for League of Legends Patch 16.9: clear path, core on-hit build, key matchups, power spikes, common mistakes, and an advanced reset tip."
quick_learn:
  champion_dd_id: "MasterYi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Double Strike"
      description: "Every few consecutive basic attacks, Master Yi strikes twice. The second hit applies on-hit effects, so it scales hard with items like Wit's End and Blade of The Ruined King."
      dd_spell_id: "MasterYi_Passive"
    - key: "Q"
      name: "Alpha Strike"
      description: "Dash to a target and become untargetable while bouncing to up to four enemies. Basic attacks reduce its cooldown — auto-attack between casts to keep it spammable."
      dd_spell_id: "AlphaStrike"
    - key: "W"
      name: "Meditate"
      description: "Channel that heals and reduces incoming damage. Use mid-clear to top up, or mid-fight to bait long-cast skillshots — channel breaks on hard CC."
      dd_spell_id: "Meditate"
    - key: "E"
      name: "Wuju Style"
      description: "Toggle that adds bonus true damage to basic attacks for a few seconds. True damage ignores armor, so this is your main shred against tanks."
      dd_spell_id: "WujuStyle"
    - key: "R"
      name: "Highlander"
      description: "Big move speed and attack speed buff plus slow immunity. Champion takedowns refresh duration and reset basic ability cooldowns — your snowball window."
      dd_spell_id: "Highlander"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs heavy single-target CC (Malzahar R, Skarner R, Warwick R) — active cleanses the lock so Highlander is not wasted"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst comps (Syndra, Veigar, Annie) — magic shield + lifeline saves you when their burst lands"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "when you are the team's win condition and need a second life to clean up the fight after your first dive"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Vladimir, Aatrox, Yuumi) — Grievous Wounds cuts their heals nearly in half"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball through level 6: gank twice before minute 8, finish Blade of The Ruined King, then dive squishy targets in skirmishes — Highlander resets your Q on every kill so you chain executions."
  weakness: "No mobility before level 6 and no built-in CC. Hard CC chains (stuns, roots, suppresses) shut you down completely; strong early-clear junglers can invade you out of your camps."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision: Lethal Tempo breaks the attack-speed cap so Double Strike procs faster. Triumph gives HP on takedown to chain dives, Legend: Alacrity stacks attack speed, Coup de Grace adds 8% damage under 40% HP — the range where Highlander resets land."
    secondary_rationale: "Resolve secondary: Bone Plating tanks the first 3 instances of damage during a gank attempt, Revitalize amplifies your Meditate (W) heal so the channel mid-clear gives more sustain."
    secondary_alternative: "Vs heavy poke comps (Caitlyn, Varus, Ezreal in mid skirmishes) swap Resolve for Inspiration with Magical Footwear (free boots minute 12) and Cosmic Insight (-5% summoner cooldowns for more Smite and Flash)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Healing-stacking enchanters with no hard CC"
      reason: "Wuju Style true damage cuts through their team's frontline, and they cannot stop a level-6 dive: Soraka's silence is short, Yuumi only mitigates with shields."
    - examples: ["karthus", "veigar", "ziggs"]
      archetype: "Immobile mages without dash or self-peel"
      reason: "Alpha Strike crosses 600 units and goes untargetable mid-dash. They have no escape once you commit Highlander, and Coup de Grace cleans them up under 40% HP."
    - examples: ["senna", "kog-maw"]
      archetype: "Squishy ADCs without dash"
      reason: "Both rely on positioning and lack a self-peel button. Once you reach the back line with R active, they have no answer beyond hoping their support lands a CC chain."
  counterpicks:
    - examples: ["malzahar", "skarner"]
      archetype: "Single-target hard-suppress champions"
      reason: "Their R locks you in place for the full duration: it ignores Highlander's slow immunity (suppression is a separate type) and your team has to peel for you, which nullifies your own dive."
    - examples: ["lee-sin", "elise"]
      archetype: "Strong early-clear invade junglers"
      reason: "They reach level 3 with full HP before you do and out-duel you in your own jungle. Master Yi has no escape pre-6, so a successful invade at minute 3-4 sets you back two camps."
    - examples: ["rammus", "jax"]
      archetype: "On-hit / armor-stacking duelists with reflect or dodge"
      reason: "Rammus's W reflects a chunk of your auto-attack damage back at you and Jax's E dodges every basic for 2 seconds — both sides of your DPS get cancelled in a 1v1."
---

## Overview

Master Yi is an AD skirmisher jungler whose entire game plan is "auto-attack until the enemy team is dead." His passive **Double Strike**, his **Alpha Strike (Q)** dash, and his **Wuju Style (E)** true-damage toggle stack into one of the highest single-target DPS profiles in the game once items come online. The price is brutal: he has no built-in crowd control (CC), no real escape before level 6, and any stun chain locks him out of the fight.

Your game plan is brain-on-rails: clear three camps, look for a level-3 gank with the Smite-pet active, hit level 6 for **Highlander (R)**, then snowball — meaning turn your early advantage into a bigger one, kill after kill, because each champion takedown refreshes your **R** and resets ability cooldowns. If you fall behind, you do not scale out of it: Master Yi has weak mid-game stats unless you are ahead of curve on items.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade is the ranged-Smite jungle starter that auto-evolves into your pet companion once the quest is done.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade from Hailblade, auto-evolves around minute 3-4 once you have cleared enough camps. The AD-skirmisher pet for mobility and engage: out-of-combat sprint helps you chase ganks across the map and reach skirmishes before they end.
2. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — your first full item. The on-hit current-HP damage shreds tanks (your weakest matchup) and the active slow gives you the kiting tool you do not have in your kit.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flat attack speed boots. Take them as soon as you finish Blade of The Ruined King; movement speed is fine on Master Yi because **R** already gives you a huge speed buff.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit + magic resistance. Triggers Double Strike's bonus magic damage twice per cycle, and the magic resist closes Master Yi's biggest hole (he is already squishy, so AP burst hits him hard).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — attack speed + crit + extra range on the empowered first auto. Lets you start a fight from outside their CC range, then dash in with Alpha Strike.

**Situational items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs heavy single-target CC like Malzahar's ult, Skarner's ult, or a Warwick suppress. The active cleanses the lock, so a single CC ability does not waste your **R** window.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (Syndra, Veigar, Annie). Adds magic resistance plus a lifeline shield that triggers when you drop low; gives you the second to react that your kit normally lacks.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when you are the team's main damage dealer and dive deep into the back line. The revive lets you finish the fight after your first all-in (full commit) instead of dying mid-clean-up.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking compositions (Soraka, Vladimir, Aatrox, Yuumi). Applies Grievous Wounds, which cuts incoming healing roughly in half on every basic attack.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** replaces the boots slot in priority only when one specific CC threat decides games (see situational notes).

**Skill order:** Max **Q** first (lower cooldown and more damage on Alpha Strike), **E** second (true damage scales with rank), **W** last. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** with **Bone Plating** and **Revitalize**, or **Inspiration** with **Magical Footwear** and **Cosmic Insight** vs heavy poke comps.

## Key matchups

- **Malzahar / Skarner:** Their R suppresses you for the whole duration and ignores Highlander's slow immunity. Buy ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** as second item, and never engage a fight where they have ult up unless your front line peels (protects) you first.
- **Lee Sin (enemy jungler):** He clears faster than you and hits level 3 with full HP. Track his first camp via vision on his red/blue buff; if he invades you, give up the camp and full-clear your safer side instead of fighting him 1v1 pre-6.
- **Rammus (enemy jungler or top):** His **W** Defensive Ball Curl reflects a chunk of your auto-attack damage back at you. Switch targets in fights — never tunnel on Rammus, hit the carry instead.
- **Caitlyn / enemy ADC with poke:** They poke your jungle from lane bushes and you cannot trade back. Path to the opposite side of the map after first clear and ask your team for a vision sweep before you commit a gank into their lane.
- **Yuumi (enemy support):** She hard-counters your dive: she gets attached, untargetable, and her R slows you. Burst the carry she is on as fast as possible — Yuumi only protects one ally at a time, so if you kill them quickly she has nothing to do.

## Power spikes & win conditions

- **Level 3:** First gank window. Path through Smite-monster, scuttle (the river crab that grants vision), then a lane with a setup champion (Leona, Nautilus, Lux). Without R you need an ally CC chain to land.
- **Level 6:** **Highlander** unlocks. Takedowns refresh duration and reset basic ability cooldowns, so chaining 2-3 kills in one fight is the realistic ceiling. This is your biggest snowball window — the gap between you and the enemy carries is largest at minute 8-10.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completion (~ minute 10-12):** First full item. Your damage spikes to "instant kill on a squishy with R" levels. Force a skirmish around scuttle or grubs the moment it finishes.
- **3 items + Berserker's Greaves online (~ minute 22-26):** Blade + Wit's End + Rapid Firecannon stack to your true DPS profile. Once you reach this, you out-duel every non-tank champion in the game in a 1v1.

## Common mistakes

- **Spamming Alpha Strike on cooldown.** Q goes on cooldown if you cast it without auto-attacks queued. Auto-attack between casts (the basic attacks reduce **Q** cooldown), and you will get a second **Q** in the same fight.
- **Using R before there is a kill in front of you.** Highlander's value is the takedown reset, not the raw stats. Pop it the moment a kill is realistic — not at the start of an engage where the enemy can still kite (move away while attacking) you.
- **Tunneling on the front-line tank.** Even with Wuju Style true damage, killing a tank takes 5-6 seconds during which their carry deletes your team. Skip the tank, dash past with Q, kill the carry, then Highlander-reset back to clean up.
- **Meditating mid-fight without setup.** Channel breaks on hard CC. Use **W** outside fights for mid-clear sustain or to bait long-cast skillshots (Lux Q, Veigar E) — never as your "panic button" once you are already in melee range of the enemy team.
- **Invading a stronger early jungler.** Lee Sin, Elise, Graves all reach level 3 ahead of you with more HP. If you see them last-clear into a gank, do not face-check; full-clear your safer side and play for level 6.

## Advanced tip

Use **Alpha Strike** as a defensive tool, not just an offensive dash. The untargetability frame at the start of the cast dodges projectile abilities like Caitlyn's Ace in the Hole, Ashe's Enchanted Crystal Arrow, or Lux's Final Spark mid-cast. Practice timing the **Q** the moment you see the cast animation: if you Q on reaction to the enemy ability, you both dodge the damage and dash to a safer angle for your next auto-attack rotation.
