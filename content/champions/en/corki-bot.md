---
title: "Corki Bot Build & Guide — Patch 16.9"
slug: "corki-bot"
language: "en"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Complete Corki bot lane guide for League of Legends Patch 16.9: hybrid ADC build, runes, key 2v2 matchups, power spikes, common mistakes, advanced tip."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Basic attacks deal a portion of their damage as bonus true damage. Steady DPS source that ignores armor and magic resist — your reason for stacking attack speed and on-hit items."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Targeted area magic damage that briefly reveals enemies inside. Used for last-hits when zoned, brush checks, and to open every poke trade in lane."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Short dash leaving a fire trail. Your only mobility tool — escape, gap-close, or skillshot dodge. Long cooldown, do not waste it for waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Channeled cone in front of Corki dealing damage and shredding armor and magic resist. Adds steady DPS in extended fights and softens tanks for follow-up R missiles."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Long-range missile that explodes on impact. Stocks up to 7 missiles; every 3rd is a Big One with extra burst. Your main poke and execute tool."
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs an enemy front line with 2+ tanks (Sion, Ornn, Maokai): adds heavy armor penetration so your sustained DPS still cuts through"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Aatrox, Vladimir, Dr. Mundo): applies grievous wounds that cut their healing in half"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst threats (Brand support, Veigar, Syndra mid): the magic shield absorbs one full combo and lets you W out"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs single-target lockdown ultimates (Malzahar R, Skarner R, Mordekaiser R): active cleanses the suppression that would delete you"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Survive the 2v2 to two items with R poke and Q sustain damage, then carry late teamfights with stacked Manamune autos and R Big Ones from the back line."
  weakness: "Squishy with one dash. Hard early-game lanes (Draven, Lucian + engage support) can shove you off CS before Trinity Force, and projectile-blocking abilities (Yasuo Wind Wall, Braum E) shut down poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Fleet Footwork procs on autos (which Corki spams thanks to the true-damage passive), giving heal plus a movement burst — the in-lane sustain you need for a long 2v2. Triumph and Coup de Grace finish kills, Legend: Alacrity stacks attack speed for sustained DPS."
    secondary_rationale: "Inspiration secondary: Magical Footwear delays your boot purchase but gives stats elsewhere first; Cosmic Insight adds summoner spell cooldown reduction (more frequent Flash and Heal) which is the biggest survival lever in the bot 2v2."
    secondary_alternative: "Into a heavy poke lane (Caitlyn + Lux, Ezreal + Karma) where you cannot afford Magical Footwear's delayed boots, swap Inspiration for Sorcery with Manaflow Band (mana sustain on R spam) and Gathering Storm (free late-game AP scaling on Q and Big One missiles)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Short-range hypercarries without escape"
      reason: "Corki out-ranges them pre-Trinity with R poke at 1225 units and a W dash they cannot match. They have to stay in last-hit range, and Corki bleeds them down before their hyper-carry power spike."
    - examples: ["senna", "ezreal"]
      archetype: "Static poke ADCs"
      reason: "Range is even, but Corki has a dash plus an instant Q area while Senna and Ezreal poke is single-projectile. He can W onto a minion that ate a Q and trade back without committing his cooldowns."
    - examples: ["sivir", "ashe"]
      archetype: "ADCs with no point-and-click escape"
      reason: "Sivir Spell Shield only blocks one ability — he eats Q and the next missile lands free. Ashe has no dash. Corki snowballs the matchup with W repositioning that they cannot answer."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "Lethality-burst early-game ADCs"
      reason: "They out-trade Corki in the first 6 levels and snowball off lane kills. Corki cannot duel them before Trinity, and any W used aggressively gets punished by their dash-reset patterns."
    - examples: ["lucian", "tristana"]
      archetype: "Multi-dash auto-trade lanes"
      reason: "Lucian's E and Tristana's W enter and exit Corki's auto range freely. Lucian also outscales true damage on his passive auto-Q chain in early levels, beating Corki straight up before items."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blockers (off-meta bot)"
      reason: "Wind Wall eats Q and the entire R missile barrage. Even when these champions are off-meta in bot, the matchup is rough because two-thirds of Corki's damage in a trade vanishes."
---

## Overview

Corki bot is a hybrid marksman (a ranged auto-attack carry that mixes physical and magic damage) who plays the lane like a mage-carry: he chips enemy HP from far away ("pokes") with **Missile Barrage (R)** at 1225 units, kills minions and harasses (small repeated damage) with **Phosphorus Bomb (Q)**, and once **Trinity Force** plus **Manamune** are stacked (fully built) he carries late teamfights with auto-attacks that deal a portion as true damage (damage that ignores armor and magic resist) thanks to **Hextech Munitions (P)**. The role suits him because a support can buy him the early time he needs to scale (gain power as items come online) and can peel divers (protect the carry from enemies trying to reach him) while he commits his single dash, **Valkyrie (W)**, only on real opportunities.

Game plan in one line: trade (exchange short bursts of damage) with R + Q from max range to chip the opposing 2v2 down, never spend W without a follow-up plan, and ramp into a late-game where Manamune-empowered autos plus R Big Ones (every 3rd R missile is a stronger one) one-shot (kill in one combo) squishy targets at the back line (the enemy carries who stand far from the fight).

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The blade gives lifesteal (a portion of damage dealt heals you back) that pairs with auto-attack passive and survives the early Q + auto trades better than Doran's Ring for an ADC.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (a component of Trinity) procs (triggers an extra-damage effect) on every Q and every R missile, plus AD, attack speed, ability haste (cooldown reduction), and movement speed. Single biggest power spike on the champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune slowly transforms into a stronger version called Muramana as you spend mana; once "stacked" (fully transformed) it adds bonus damage on every auto-attack and every ability that costs mana, including each R missile.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flat attack speed compounds with Trinity and the on-hit true damage from passive. Default boot for a bot Corki.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — your first auto-attack on an enemy ("energized auto") deals bonus damage and reaches further than normal range. The crit chance fits the Trinity stat profile.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed plus crit (chance for autos to deal extra damage) for sustained DPS through **Gatling Gun (E)** and the on-hit true damage from passive.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs a front line with 2+ tanks (Sion, Ornn, Maokai): heavy armor penetration so sustained DPS still cuts through.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking comps (Soraka, Aatrox, Vladimir): applies grievous wounds that cut their healing in half.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst threats (Brand support, Syndra mid): the magic shield absorbs one full combo and lets you W out.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs single-target lockdown ultimates (Malzahar R, Skarner R, Mordekaiser R): the active cleanses the suppression that would otherwise delete you.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** if the enemy team has 3+ AD threats focusing you in fights.

**Skill order:** Max **Q** first (poke, waveclear, magic damage), **E** second (DPS plus armor and magic resist shred), **W** last (utility). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Fleet Footwork**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Inspiration** with **Magical Footwear** and **Cosmic Insight**, or **Sorcery** with **Manaflow Band** and **Gathering Storm** into heavy poke lanes.

## Key matchups

- **Caitlyn:** Out-ranges you. Stay behind minions to deny her trap setups, dodge her Q line by side-stepping (moving sideways) at the cast indicator (the visual line that appears on the ground when she casts), and never approach a wall where Q ricochets (bounces off and hits a second time) for bonus damage. Save W to escape her R execute when low.
- **Draven:** Hardest early game. He out-trades you levels 1-5 and snowballs (early lead grows over time) off lane kills. Concede CS (last-hits = creep score = gold) to stay alive, ping for jungle gank windows when his Spinning Axes drop, and never trade into a passing axe.
- **Lucian:** He wants to dash through onto you with E. Q him when he commits the dash so the slow plus your support's CC (crowd control = stuns, slows, roots) turns the trade against him. Never auto-trade at melee range; his passive double-shot bursts past your true-damage advantage.
- **Jhin + Lulu / Senna + Tahm:** Long-range disengage lanes (compositions designed to break off your engage with shields and crowd control). You have to win the level 6 all-in or stall until ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**. Push the wave with Q + auto-attacks and look for a R + W gank setup with your jungler.
- **Samira:** All-in oppressor at level 6 (her ult forces a fight you cannot retreat from). Buy ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** if her R lands once on your team — the active cleanse (removes a debuff) breaks her chain. Pre-6 you can match her in trades; post-6 disengage with W until your own R Big Ones outdamage her ramp.

## Power spikes & win conditions

- **Level 2:** With Q + W or Q + E, you can punish a bad enemy positioning with a Q-AA-AA trade ("AA" = basic auto-attack) and follow up with W if the enemy support is committed forward.
- **Level 6:** First **Missile Barrage (R)** unlocks the all-in (a fight you commit to fully, no retreat). With R stocks plus Trinity Force soon arriving, a Q-AA-R-R-R combo plus support CC kills most ADCs at low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 13-15):** Sheen procs on every Q and every R missile turn poke into kill threat. This is the moment to all-in or to take a Drake fight if vision (wards revealing the map) is clean.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minute 18-22):** Muramana adds bonus damage on every mana-spending action; teamfight damage roughly doubles compared to pre-stack. Force objective fights (Drake, Baron) here.

## Common mistakes

- **Spamming R off cooldown for waveclear.** R missiles are a finite stock; if you empty them on minions, the next teamfight you have zero burst at the worst moment. Push waves with Q + auto-attacks; save 4+ missiles for objectives.
- **Using W aggressively without a follow-up.** W is your only escape. Dashing in to finish a kill that needed one more auto-attack is how Corki dies — if you cannot kill them with your remaining mana plus current cooldowns, do not commit (do not engage fully).
- **Auto-trading at melee range without support follow-up.** Corki's true-damage passive looks tempting up close, but his HP pool is squishy (low and fragile). Stay at R range when the enemy support has hard CC up.
- **Rushing ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge as a 2nd item.** Infinity Edge needs a high crit chance to function, and Corki's first three items (Trinity, Manamune, Berserker's) give very little crit. Stick to the Trinity → Manamune → Rapid Firecannon → Phantom Dancer order; only consider Infinity Edge as a 5th or 6th item.
- **Recalling without using R stocks.** Stocks reset on death but persist on recall — fire the remaining missiles at a wave or tower before backing instead of letting them sit unused.

## Advanced tip

Track and exploit the **Big One** rhythm. Every third R missile (the "Big One") deals much more damage than the regular two. Before a teamfight, count the missiles you have stocked — if the next one would be a Big One, save it for the priority target; if you have just spent it, fire the two filler missiles into the wave or a tower so the Big One reloads ready for the engage. Players who fire R blindly waste Big Ones on minions; players who track the count one-shot squishies (low-HP carries) when it counts.
