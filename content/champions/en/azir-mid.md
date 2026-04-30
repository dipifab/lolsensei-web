---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "en"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Azir mid lane guide for League of Legends Patch 16.9: starter kit, core battle mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Once per fallen turret site, Azir can resurrect a temporary Disc of the Sun: a hard-hitting tower that controls space around the rubble."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Sends every active Sand Soldier to a target spot, dealing magic damage and slowing in a line. Main poke and re-positioning tool."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Summons a Sand Soldier (charge-based). Soldiers extend Azir's basic attacks: when he AAs near one, the soldier stabs in a line for magic damage."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Shield + dash toward an existing soldier. Stops on champion hit and refunds a soldier charge. Your only escape and your gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Wall of soldiers charges forward, knocking enemies back and leaving a blocking line for several seconds. The signature 'Shuffle' tool."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "into divers and assassins (Zed, Diana, Talon, Akali) — stasis covers your E cooldown when you get caught"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "into heavy single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item — your soldier autos punch back through MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "into healing-stacking comps (Soraka, Vladimir, Dr. Mundo) — anti-heal applies on every soldier hit"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Reach Nashor's Tooth + Sorcerer's Shoes online (~ minute 18-20), then control objective fights with soldier-extended basic attacks and Shuffle the enemy back-line carries (R + Flash) into your team."
  weakness: "Mechanically demanding and weak before level 6. Without E available you have no escape; long-range chip damage and Wind Wall users (Yasuo, Yone) shut down both Q soldiers and R."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Azir's soldier range out-paces their cast range, and they have no dash to dodge a soldier-Q poke or interrupt the channel of his W auto-attacks."
    - examples: ["annie", "syndra"]
      archetype: "Slow-telegraphed all-in mages at short range"
      reason: "Azir keeps distance during their commit windows (the moment they step forward to attack): each time they walk up, soldier basic attacks chip them, and his R Shuffle flips the all-in if they Flash in."
    - examples: ["malzahar", "kassadin"]
      archetype: "Late-game mages weak in early small fights"
      reason: "Azir farms safely with W from level 1 and matches their late-game power without giving them free experience — by minute 14 he is online before they hit their own spike."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall users"
      reason: "Wind Wall eats every Q soldier line and the R wall projectile follow-up. With his main poke neutralized Azir is a melee mage with no melee tools."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Early-game burst assassins with multiple dashes"
      reason: "They all-in pre-6 when Azir has no E up; even after Zhonya's, multi-dash kits reach him before his R has time to fire."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mages"
      reason: "They chip his HP from beyond Azir's soldier range (740). He cannot match their pre-6 healing and arrives at his first item with low HP."
---

## Overview

Azir is a battle mage who fights at long range through his **Sand Soldiers** — small ghostly units he summons with **W (Arise!)** that act as remote auto-attack stations. When Azir attacks an enemy near a soldier, the soldier stabs forward in a line, dealing magic damage. He has the highest skill ceiling on this list (Riot rates him 9/10 for difficulty), and his early levels are genuinely weak. Until he has placed his first soldier and built **W → Q** muscle memory, he loses straight up to most laners in a trade (a brief exchange of damage in lane, not a full fight).

His game plan in one sentence: farm safely with **W** until ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** comes online around minute 18, then use **R (Emperor's Divide)** — the famous "Shuffle" — to shove the enemy carries (the high-damage champions on their team) into your team during objective fights (team fights around big map objectives — Drake, the dragon at bot river; Atakhan, a new mid-game boss; or Baron Nashor late game). Skill expression sits in three places: soldier placement (where you stand vs where soldiers project your auto-attack range), the **E + Flash + R** "Shuffle" combo, and knowing when to spend your only escape (**E**) versus saving it for a counter-engage (the moment you turn an enemy attack back on them).

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Skip ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**: you spend mana on **W** (cheap) and **Q** (medium), Doran's mana regen handles the rest.

**Core items (in order):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — first item every game. Attack speed makes your soldier-extended auto-attacks (basic attacks, also called AA — Azir's basic attack range only matters when a soldier is nearby) fire faster, and the on-hit magic damage (extra damage applied on every basic attack landed) stacks on every soldier strike. This is the spike (the moment a champion becomes meaningfully stronger) that flips you from passive to threatening.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (a fixed amount, not a percentage, of enemy magic resistance ignored). Default boots for any mid mage who wants to delete squishy targets (champions with low defenses, like ADCs and other mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplies all your AP (Ability Power, the stat that boosts magic damage) scaling. After this item every soldier auto and every **Q** hits significantly harder; this is your true damage spike for late-game teamfights.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst (high damage concentrated in one to two seconds), with an HP-threshold passive (a passive that activates when the enemy is below ~35% HP) that lines up with kill follow-up after a Shuffle.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Diana, Talon, Akali). A "diver" is a champion who jumps onto your back-line carry to delete you despite the risk. The stasis (a few seconds where you cannot be damaged or move) buys time for your **E** cooldown to come back when you get caught.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into heavy single-target magic CC (crowd control: stuns, charms, snares — anything that takes control of your character). Examples: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap in the moment any priority target buys an MR (Magic Resist, the stat that reduces magic damage taken) item. Soldier auto-attacks and **Q** punch back through MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking comps (Soraka, Vladimir, Dr. Mundo). Anti-heal (a passive that cuts the enemy's healing in half for a few seconds) applies on every soldier hit.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable when the team needs your **R** off cooldown more often (less wait time between casts) for objective fights.

**Skill order:** Max **Q** first (soldier damage and slow scale per rank, and the cooldown drops from 14s at rank 1 to 6s at rank 5), **W** second (more soldier charges and longer soldier duration), **E** last. Take **R** at levels 6, 11, 16. Start **W** at level 1 — without a soldier you cannot farm waves at range.

**Runes:** Primary **Sorcery** (the magic-damage rune tree) with **Arcane Comet** (a small projectile that lands extra damage when you hit a slow or root), **Manaflow Band** (extra mana every time you hit a champion with an ability), **Transcendence** (cooldown reduction at level 5), **Scorch** (small burn damage on your first ability hit every few seconds). Secondary **Inspiration** with **Biscuit Delivery** (free potions in lane) and **Cosmic Insight** (extra summoner spell uptime). Switch the secondary to **Precision** with **Presence of Mind** (mana refund on takedowns) and **Coup de Grace** (more damage to low-HP targets) when the enemy team has multiple low-resistance squishies.

## Key matchups

- **Yasuo / Yone:** Their **Wind Wall** blocks every projectile in your kit — soldier strikes from **Q** and the wave from **R**. Save **Q** for after they Wind Wall something else; if you can bait the wall (force them to use it on a low-value attack) with a single soldier strike, the next 24 seconds of trading are free.
- **Zed:** Diving threat (he commits to your tower to kill you despite the tower shots) from level 6. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as your second item. Hold **E** — never use it offensively until he commits his ult; if he ults and you have **E** + Zhonya's, you survive the burst.
- **Veigar:** Even-to-favorable. He cannot dash. Soldier-Q pokes him (chip damage from a safe distance) out of XP range every time he walks up to last-hit; just respect his **E (Event Horizon)** cage by holding your **E** dash to break out.
- **Twisted Fate:** Roam priority race. "Roam" means leaving your lane to help another lane; "priority" means having a wave-control advantage so you can leave lane without losing minions. Push the wave on cooldown with **W** + **Q**. When he hits level 6 and starts roaming with his ult, ping your team and force tower trades (you take their tower while he kills your bot lane) on his side rather than chasing him; Azir punishes side waves with **R** Shuffle into towers better than most mids.
- **Akali:** Gap-closing diver. Place soldiers in the bushes she likes to flank from (entering a fight from a side that is not covered). Inside her **W (Twilight Shroud)** stealth zone you cannot target her — pre-place **W** so the soldiers attack on sight when she comes out.

## Power spikes & win conditions

- **Level 4:** Three points in **Q** unlock a real damage spike. Soldier-Q poke now genuinely threatens kills if the enemy walks into range twice in a row.
- **Level 6:** First **R** unlocks the "Shuffle" combo: **Flash + R** flips the enemy frontline (the tanks at the front of a fight) backward into your team. Use it for the first time in a 2v2 skirmish (a small fight, smaller than a full 5v5 teamfight) on river so a misfire does not throw the lane.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 18-20):** You become the mid-game DPS (damage per second) threat your team has been waiting for. Force a fight on Atakhan or Drake (Atakhan is a mid-map boss; Drake is the dragon at bot river) — your soldier autos out-damage most mages at this stage.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 28-32):** Every soldier auto crushes squishies. From here Azir is one of the hardest carries in the game, but only if he stays at maximum soldier range and his frontline (the tanks/bruisers in front of him) holds.

## Common mistakes

- **Walking into auto range to last-hit before W is up.** Azir's basic attacks without a soldier nearby are short and weak. Always summon a soldier under the minion you want before stepping forward; the soldier farms for you, not your basic attack.
- **Holding R for the perfect Shuffle that never comes.** Even a mediocre **R** that knocks back one enemy and creates a wall is better than no **R**. Use it for peel (protecting your carry from divers) when no engage (the action of starting a fight by jumping in) opportunity exists.
- **Using E offensively without an exit plan.** **E** is your only escape. If you dash in, your soldiers expire, your dash goes on cooldown, and you stand still as a glass cannon (a champion with high damage and no defenses) at melee range. Only **E** in when you can guarantee the kill or follow up with an immediate **R**.
- **Forgetting Shurima's Legacy turrets exist.** When an ally outer turret falls, you can resurrect a powerful Disc-of-the-Sun turret on the rubble. Use this for objective control around Atakhan or for a defensive stand under your inhibitor (the structure between the second turret and Nexus). Most Azir players just never press the passive.
- **Spamming Q for poke without W setup.** **Q** projects damage *along the line of every active soldier*. With zero soldiers up, **Q** does nothing. Place **W** first, *then* **Q** to send the soldier where you want.

## Advanced tip

Practice the **E + Flash + R** Shuffle in Practice Tool (the offline training mode in the client) until you can execute it in under 0.4 seconds. The order matters: **E** locks you onto your soldier's path, **Flash** repositions you mid-dash so the **R** wall fires from the new spot, and **R** charges in the direction your character faces *at the moment of cast*. Done correctly, it converts a single isolated assassin or carry that walks into your fog of war (the unwarded part of the map you cannot see) into a guaranteed kill, regardless of their starting position.
