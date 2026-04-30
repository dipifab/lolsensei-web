---
title: "Bard Support Build & Guide — Patch 16.9"
slug: "bard-support"
language: "en"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Bard support guide for League of Legends Patch 16.9: roaming pickoff playstyle, build path, key matchups, power spikes, common mistakes, and a wall-stun tip."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Meeps spawn at Bard's side and add bonus magic damage to his auto-attacks. Chimes spawn around the map: collecting them grants XP, mana, and out-of-combat move speed."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Linear skillshot that slows the first target hit. If the bolt then hits a second enemy or a wall, both get stunned. Wall-stuns are Bard's signature pickoff tool."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Place a healing shrine that charges up over 10 seconds. The first ally to step on it heals and gets a brief move-speed boost. Up to 3 active. Enemies destroy it."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Open a one-way portal through nearby terrain. Any champion (allied or enemy) can take it. Long cooldown — used for ganks, escapes, and surprise flanks."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "Long-range AOE that puts champions, minions, monsters, and turrets in stasis for 2.5 seconds. Use to lock targets, save allies from killing blows, or freeze a tower diver."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs single-target lockdown CC on your ADC (Morgana Q, Ashe R, Leona E into R chain)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs burst AOE comps (Yone + Malphite, Orianna teamfight setups)"
    - dd_id: "3107"
      name: "Redemption"
      against: "vs grouped teamfight comps; the area heal you can drop even while dead pays huge"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins or hard divers (champions who jump on you to delete you fast — Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "when your ADC is the win condition and the enemy comp has multiple dive threats"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roam constantly to collect chimes and wall-stun isolated enemies with Q. In teamfights, R the enemy front line so your team can delete the back line before the engage commits."
  weakness: "Squishy with no dash. If your Q misses or fails to wall-stun, you have no follow-up CC and your ADC dies in the 2v2. Punished by point-and-click lockdown supports and aggressive level-2 bullies."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Immobile enchanters with no dash"
      reason: "Bard's Q-into-wall stun threat forces them to play far behind minions. With no escape spell, a clean wall-stun turns into a kill before their team can rotate to help."
    - examples: ["alistar", "nautilus"]
      archetype: "Telegraphed melee engagers"
      reason: "R cancels their commit-style engage. Right after they Flash-W onto your ADC, press R on the engager: they freeze in stasis while your ADC walks out for free."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Lockdown enchanters with point-and-click CC"
      reason: "Their CC is point-and-click (no skillshot to dodge). They **peel** your dive attempts trivially (peel = protect an ally by interrupting the player who jumped on them), and Bard has no dash to disengage when the trade flips against him."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Long-range hookers"
      reason: "Their hook (1100-1150 range) reaches you before your Q line is clean. You have no escape after a hook hits, and the lane is forced to play 1v2 for 30 seconds."
    - examples: ["pantheon"]
      archetype: "Aggressive level-2 lane bullies"
      reason: "All-in lanes at level 2-3 punish your weak early stats. You have no sustain other than W shrines that need 10 seconds to charge before they pay off."
---

## Overview

Bard is a **roaming support** (a support that constantly leaves lane to influence the rest of the map). His identity sits **outside** the bot 2v2 (the bot-lane fight between the two ADCs — the main damage carries — and their two supports). He collects glowing **chimes** that spawn around the map: collecting them gives free experience, mana, and out-of-combat move speed. He converts that mobility into **pickoffs** — catching isolated enemies away from their team and killing them. His Q is a long-range slow that becomes a stun if the projectile hits a second target or, more famously, a wall behind the first one. His R is a stasis bomb (4-second flight, then a wide AOE) that freezes everything in its area for 2.5 seconds — allies, enemies, turrets, and minions alike.

Game plan: collect chimes constantly, hunt wall-stun pickoffs in the **river** (the central neutral zone between the two halves of the map) and jungle, and treat your bot lane as one of three lanes you patrol — not the place you live. In teamfights you are the **disengage** (the player who breaks an enemy engage with R) and the **catch** (the player who locks isolated targets) — almost never the front line.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (consumables that restore HP over a few seconds). World Atlas is the support quest item: it generates gold over time and upgrades automatically into one of four completed support items as you damage enemy champions and **ward** the map (place vision-granting trinkets in the bushes so your team can see what is happening). For Bard it should always become Bloodsong.

**Core items (in order):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — completed support item path. Best fit because Bard is a **poke** (damage-from-range) and pickoff support, not an **enchanter** (a heal/shield support like Soraka or Janna). Bloodsong gives AP (Ability Power — magic damage scaling) and rewards landing damage on enemy champions — exactly what your Q + auto-attack combos do.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — boots that give **ability haste** (a stat that lowers all your cooldowns) plus reduced cooldown on **summoner spells** (the two extra spells in the top corner of your bar — Flash, Ignite, etc.). Your **Flash** comes back faster for engages, and your **R** rotates faster for objective fights (team fights at the drake or Baron — Baron Nashor is the giant neutral monster in the top river that gives a powerful team-wide buff).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — active ability that gives a 4-second burst of move speed for you and nearby allies. Pairs with your already-fast roaming for bot-to-mid **ganks** (running to another lane to kill an enemy there) no one can outrun.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — gives heal/shield power that grows late-game (after ~25-30 minutes when champions have 4+ items). Buy this when the game is going long and your W charges actually heal for real numbers.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — active that cleanses a stun, root (can't move, can still attack), or fear (forced uncontrolled movement) off your ADC. Buy versus single-target lockdown (Morgana Q, Ashe R, Leona E into R chain).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for 2.5 seconds. Buy versus burst AOE comps (squads like Yone + Malphite + Orianna that one-shot — kill in one hit — grouped teams).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — area heal you can drop on top of allies even while dead. Pairs with teamfight comps that bunch up around objectives.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — active that makes you invulnerable for 2.5 seconds. Buy versus assassins or hard **divers** (champions who jump on you to kill you in 1-2 seconds — Zed, Talon, Diana) when they are clearly targeting you.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — redirect 12% of damage taken on a chosen ally back to you, and heal that ally on your auto-attacks. Buy when your ADC is hyper-fed (8+ kills ahead, deletes enemies in 1-2 hits) and the enemy team has multiple dive threats.

**Boots:** Ionian Boots of Lucidity is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** is the alternative when the enemy team has heavy CC (Lulu, Leona, Lissandra) — they give magic resist plus 30% tenacity (shorter CC duration on you).

**Skill order:** Max **Q** first (main damage and the wall-stun tool), **W** second (heal scaling — heal grows with rank), **E** last (the cooldown shrinks barely matter — one point is plenty until late). Take **R** at levels 6, 11, 16.

**Runes:** Runes are passives chosen before the match (6 picks across two trees: a primary tree of 4 runes and a secondary tree of 2). The Bard standard is:

- Primary **Inspiration**: **Glacial Augment** (when you hit a slowed target with an auto-attack, they get an extra slow zone — pairs with your Q slow), **Magical Footwear** (free boots at minute 12), **Biscuit Delivery** (3 biscuits over the early game that restore HP and mana), **Cosmic Insight** (extra ability haste and reduced summoner spell cooldowns).
- Secondary **Resolve**: **Bone Plating** (after taking 3 hits, the next 3 hits within 1.5s deal less damage) + **Revitalize** (your heals and shields are stronger). Pick this for lane safety.
- Alternative secondary **Sorcery**: **Manaflow Band** + **Scorch** for more poke damage in lane.

## Key matchups

- **Lulu / Janna:** Hard counters in the 2v2. Their **point-and-click CC** (crowd control that does not need aim — just click the target) cancels your dive attempts. Lulu W turns you into a harmless animal (polymorph); Janna Q knocks you up. Stay back, roam mid as soon as **R** is up at level 6, and trust your ADC to **farm** safely (last-hit minions for gold and experience).
- **Leona / Nautilus:** Engage **tanks** (frontline champions with high HP) with point-and-click CC. Position behind your ADC at all times. If they jump on your ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** them to freeze the engage, then walk away. Never **trade** auto-attacks against them (a trade is a brief exchange of hits in lane, not a full kill attempt) — their CC chain is longer than your trade window.
- **Blitzcrank / Pyke / Thresh:** Hook supports (their signature spell is a long-range **skillshot** — an aimed projectile — that pulls you to them). Their hook range outranges your effective Q range. Stand behind minions every time their hook is up. After a missed hook, take a free trade and **Q** them — their hook is on cooldown for 15+ seconds.
- **Pantheon support:** Aggressive lane bully (a champion strong enough to push you out of lane in early levels). He **all-ins** (commits fully to a kill attempt, no retreat) at level 2 with **W** stun + **Q** spear. You have no sustain. Play far back, ward both river bushes (the brush zones in the river — bushes are the tall-grass zones where champions are hidden from sight), and refuse level-2 trades. Recover post-6 with **R** roams to mid lane.
- **Senna:** Passive **scaler** (she gets stronger over time and does not commit early). You cannot all-in her cleanly because of her long-range auto-attacks. The lane is a slow farm-trade lane. Win the map game with chime collection and roam mid for **R** plays. Never push too far — her **W** root from **fog of war** (the unwarded zones of the map your team cannot see) is a free gank setup for her jungler (the teammate clearing jungle camps).

## Power spikes & win conditions

- **Level 2 (one point in W):** Place a shrine in the lane brush for sustain between trades. Combined with **Q** at level 1 you have a kill threat if the enemy support mispositions.
- **Level 6 (R unlocked):** First **Tempered Fate** unlocks game-changing plays. Stasis on the enemy ADC during a 2v2 is often a kill on the spot. Roam mid the moment the wave (the line of minions) bounces back toward your tower (when minions naturally start walking the other way after a push) — your **R** plus mid laner's combo wins fights against an unsuspecting mid.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong completion (~ minute 14-16):** Your support quest item upgrades. You start contributing real damage on Q hits and your roams scale up.
- **Level 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong online:** Your second R rank (R rank 2 = the second time you spend a level on R) shortens the cooldown to 95 seconds. With Shurelya's active you can rotate (move between lanes) fast enough to influence both side lanes (top and bot) plus drake fights (team fights at the dragon pit) every 90 seconds.

## Common mistakes

- **Throwing Q across open ground for poke.** Without a second target or a wall behind, **Q** is just a slow — and a 60-mana, 11-second-cooldown slow is a brutal trade. Always check there is either a minion or a wall on the line behind your target. If neither, do not press Q.
- **Roaming with the wave pushed to your tower.** When you walk away, the wave (the line of fighting minions) crashes into your turret — meaning the minions die under the tower and your ADC loses 2-3 minions of farm plus **tower plates** (the protective armor on early-game towers; breaking one drops gold). Roam **only** when the wave is in the middle of the lane or pushing toward enemy turret (the minions are advancing, so your ADC stays safe at their tower while you are gone).
- **R'ing your own ADC during a fight.** Stasis on an ally pauses everything they are doing — including a basic attack chain that was about to win the trade. Use **R** on enemies, on dying allies (to interrupt the killing blow), and on towers (to cancel a tower dive). Almost never on a healthy carry.
- **Standing in your own R area.** The AOE is wide and the travel time is 4 seconds — you forget where you cast it, you walk into your own stasis, you waste the ult. Always cast then step out.
- **Ignoring chimes outside lane.** Chimes are XP and mana. A Bard who collects chimes hits level 6 about 2 minutes earlier than a Bard who stays in lane. If you are not 1 level ahead of the rest of your team at minute 10, you are misplaying.

## Advanced tip

Practice the **flash-stun**: cast Q, then activate **Flash** (the universal short-range teleport summoner spell) mid-flight to reposition your character — and the Q projectile, since it follows your model, gets a fresh angle from the new spot. The trick is to flash *toward* where the enemy is **dashing** (their short instant movement). This catches them through escapes that would normally dodge a normal Q. It is the highest-leverage trick in Bard's kit (his set of abilities) and often the difference between a Bard who wins games and one who does not.
