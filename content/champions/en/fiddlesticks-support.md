---
title: "Fiddlesticks Support Build & Guide — Patch 16.9"
slug: "fiddlesticks-support"
language: "en"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Fiddlesticks support guide for League of Legends Patch 16.9: AP engage build, lane harass, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Trinket slot becomes effigy charges. Place fake Fiddle scarecrows for vision; enemies that see one get briefly feared and the effigy explodes."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Targets a single enemy. Damaging an enemy with a spell while unseen also auto-Terrifies them. Fears them so they run away from you for 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel that drains HP from nearby enemies (heals you). At the end of the channel deals bonus execute damage. Lane sustain after a back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Boomerang scythe in a wide cone: slows all enemies hit and silences anyone in the central line. Main lane harass tool — hits twice."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5s channel, then blink to target location with AOE damage per second around Fiddle for 5s. Best cast from a lane brush onto the enemy ADC."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE-burst comps when team needs an active shield (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that interrupts your R channel (Lissandra R, Veigar E cage, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when 2+ enemies build any Magic Resist item"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Set up bot lane vision deep, hide in tri-brush at level 6, then Crowstorm onto the enemy ADC for a guaranteed kill that snowballs your carry into a lead."
  weakness: "Worst lane phase among engage supports pre-6: no shield, no point-and-click CC. If invaded or poked out, you have no comeback tool until ulti is online."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock procs on Q Terrify (immobilizing CC) for a 2.5s armor and MR spike that lets Fiddle survive focus right after Crowstorm lands. Font of Life heals carries after each Q fear, Bone Plating eats early all-in burst, Revitalize boosts Bountiful Harvest sustain."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixes mana issues during E spam in lane; Transcendence pushes ability haste past 30 once you complete Sorcerer's Shoes for shorter Crowstorm cycles."
    secondary_alternative: "Versus heavy poke lanes (Lux, Karma, Xerath support) swap Sorcery for Inspiration with Biscuit Delivery (5 free biscuits in early lane to stay topped up) and Cosmic Insight (faster Flash and Crowstorm cooldowns)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Squishy enchanter supports without hard CC"
      reason: "Their kit is built around healing and shielding — a Crowstorm from tri-brush blows past their cooldowns and one-shots both them and the ADC before either heal or shield can be used twice."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "Immobile ADCs without dash"
      reason: "These ADCs cannot escape a brush flank; once R + E lands they have no mobility tool to reset distance and your bot lane converts the kill into a tower."
    - examples: ["sona", "seraphine"]
      archetype: "Backline mage supports with no escape"
      reason: "They stand far back to enchant — but your effigies grant deep vision that finds their position, and your R channel from inside their hex one-shots them before they can move."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Black Shield / spell-shield enchanters"
      reason: "Black Shield absorbs Terrify (Q fear) and Crowstorm's first AOE tick of magic damage on the carry, neutralizing your engage cast and giving them a 5s window to disengage."
    - examples: ["janna", "lulu"]
      archetype: "Disengage / peel enchanters"
      reason: "Janna R or Lulu W push you off the carry the instant you land. Your Crowstorm AOE keeps ticking but with no follow-up CC, the fight resets and you eat focus damage for nothing."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Long-range artillery supports"
      reason: "They poke you out of lane before level 6 from beyond your E range. Fiddle has no shield and no way to close the gap, so your HP bar drops to half before your first R is online."
---

## Overview

Fiddlesticks support is a hide-and-engage pick: an AP (Ability Power, magic-damage scaling) support whose entire lane phase is a setup for one moment — pressing **Crowstorm (R)** from inside a lane brush at level 6 onto the enemy ADC (the marksman, the ranged auto-attack carry of the bot lane), with the bot lane backing your blink. Fiddle has no shield, no point-and-click CC, and no escape, so the trade for that level 6 power spike is the worst lane phase among engage supports between levels 1 and 5.

The game plan: place effigies on the bot tri-brush and river to threaten lurk plays, use **Reap (E)** for slow + silence harass when an enemy steps to last-hit, and avoid getting poked out by long-range matchups. Once **R** is up, look for any moment when the enemy ADC is shoved past their tower or the support is roaming — then blink in. Mid game your job is to find flanks for Drake fights from river fog or unwarded jungle entrances. You are essentially a jungle Fiddle who happens to spend the laning phase next to an ADC.

## Recommended Build

**Starting items:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (the AP support starter that quests into Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core items (in order):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the support quest reward from Spellthief's Edge. Mandatory: it gives the gold income that lets you buy real items, plus an AP-on-takedown stack that snowballs your damage. Finish the quest by minute 12-14.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (cuts through enemy magic resist). Cheap and the right pick over ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** once R is online.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — your main item. The slow on **E** and **R** marks targets; when an ally hits the marked target the mark detonates for bonus damage (and shares gold with your ADC). Pure synergy with Fiddle's slow-rich kit.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — drop into stasis the instant Crowstorm finishes ticking. Mandatory if the enemy has a diver or assassin; without it you die immediately after every engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — only if the game runs long and you have gold left after support items. The 35% bonus AP makes Crowstorm one-shot squishies.

**Situational items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (Yasuo + Malphite, Wukong, Diana). The active shield saves your team during their wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that interrupts R (Lissandra R, Veigar E cage, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking comps (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — when 2+ enemies build any Magic Resist item.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if 2+ enemies have hard CC.

**Skill order:** Max **E** first (slow + silence is your only lane harass), **W** second (sustain after first back), **Q** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Versus heavy poke lanes (Lux, Karma, Xerath support) swap Sorcery for **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**.

## Key matchups

- **Lux support:** Long-range Q binding plus E poke. Hide behind the wave so her **Q** has no clean line, and never face-check tri-brush before checking with an effigy. Survive to 6, then Crowstorm her if she over-extends.
- **Morgana:** Black Shield neutralizes your **Q** fear and the first tick of R magic damage on her ADC. Always engage on the ADC instead of Morgana, and force her to pre-shield with a fake step into brush before committing.
- **Leona:** Mirror engage matchup, but Leona has point-and-click CC and Aftershock that beats yours pre-6. Trade only when she has used her **E**, and never engage first into Leona — she stuns you out of R channel.
- **Janna:** Hard counter to your engage. Janna **R** on landing pushes you off the carry, undoing the entire ulti. Save Crowstorm for when she has used her R on a different fight, or when she is roamed.
- **Caitlyn / Senna ADC pairs:** Your dream lane. They lack mobility — once you hit 6, Crowstorm from tri-brush ends them every time. Tell your ADC to set up the wave to crash at minute 5 so you both hit 6 together.

## Power spikes & win conditions

- **Level 2 (with E + W):** First trade window. Land **E** through the wave to chunk the enemy ADC; if they shove towards you, **W** them under tower for sustain.
- **Level 6 (first Crowstorm):** Your only real lane spike. Set up a Stealth Ward (the white free trinket ward every champ starts with) in tri-brush (the triangle of bushes between the bot river and the bot lane) 30s before, position inside, then blink onto the enemy ADC. A clean R + E + ADC follow-up is a guaranteed kill.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate online (~ minute 14-16):** Your slow proc damage spikes. Look for cross-map flanks for Drake fights — the gold you and your ADC share from Mandate procs accelerates the whole bot side.
- **Level 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ minute 22):** Your second R rank lowers cooldown and stasis covers you post-engage. Force teamfights on Drake or Baron from fog setup.

## Common mistakes

- **Engaging without ADC follow-up.** A solo Crowstorm tags the enemies but does not kill anyone if your ADC is back-recalling. Check map and ADC mana before pressing R; if they have no ult and no mana, hold the engage for a better window.
- **Standing in front of the wave at level 1-3.** You have no shield and no escape pre-6. Stand behind your ADC and the minion line; let them last-hit, you hide in brush waiting for a tri-brush effigy fear to set up the trade.
- **Wasting effigies on lane brush.** Effigies are most valuable when they grant vision the enemy is *not* paying for. Place them in tri-brush or pixel brush for engage setup, not in the obvious bot lane brush which gets cleared by the enemy support's first sweep.
- **Engaging into an unblocked Black Shield (Morgana).** A Morgana with Black Shield up turns your level 6 power spike into a wasted ult. Always engage on the ADC, not on Morgana, and force her to pre-shield by faking a brush walk-in 2 seconds before you commit.

## Advanced tip

The 1.5s **Crowstorm** channel is interruptible by anything that displaces or stuns you, but the channel itself does not break stealth from brush — meaning you can press **R** while still inside the tri-brush, and the enemy will only see the channel bar for a fraction of a second before the blink lands. Practice this in normals: wait for the enemy ADC to over-extend for a CS, press R from inside tri-brush, blink onto their face. The audio cue (the iconic Fiddle laugh) is the only warning they get, and by the time they react the AOE is already ticking.
