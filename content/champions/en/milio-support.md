---
title: "Milio Support Build & Guide — Patch 16.9"
slug: "milio-support"
language: "en"
patch: "16.9"
champion: "milio"
role: "support"
last_updated: "2026-05-05"
description: "Milio support guide for League of Legends Patch 16.9: enchanter build path, peel and range buff matchups, power spikes, common mistakes, and an advanced positioning tip."
quick_learn:
  champion_dd_id: "Milio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Range Buff"
  abilities:
    - key: "P"
      name: "Fired Up!"
      description: "Milio's abilities mark allies on touch. Their next basic attack or ability deals bonus magic damage and burns the target over time."
      dd_spell_id: "Milio_Passive"
    - key: "Q"
      name: "Ultra Mega Fire Kick"
      description: "Long-range linear skillshot that knocks the first enemy back and explodes behind them, slowing nearby enemies. Hitting a champion refunds part of the mana cost."
      dd_spell_id: "MilioQ"
    - key: "W"
      name: "Cozy Campfire"
      description: "Drops a hearth that follows an ally. Allies near it gain bonus Attack Range, heal over time, and get periodic Fired Up procs. Recast to swap the carrier."
      dd_spell_id: "MilioW"
    - key: "E"
      name: "Warm Hugs"
      description: "Targeted shield plus Move Speed buff on an ally. 2 charges, effects stack on the same ally. Main peel and engage-protection tool."
      dd_spell_id: "MilioE"
    - key: "R"
      name: "Breath of Life"
      description: "Channeled AOE around Milio that cleanses immobilizing crowd control off allies, heals them, and grants Tenacity. Single best disengage in the game."
      dd_spell_id: "MilioR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "long objective fights (Drake, Baron) — big delayed AOE heal you can drop from across the map"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "into AP carries who scale with Ability Haste (Hwei, AP Ezreal) — buffs the ally you shield with extra Ability Power"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst (area-of-effect damage from Yone R, Kennen R, Orianna R) — instant team-wide shield"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo) — your Q applies Grievous Wounds and gives you a small AP boost"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Stack Attack Range and shields on a basic-attack AD carry. Save R for the moment the enemy commits hard CC, then watch your team walk through their engage untouched."
  weakness: "Low solo damage and slow Q windup. If the enemy lands hard CC on you before R is up, you cannot peel for anyone — including yourself."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Aery rides every E shield and W heal for free poke and extra shield value. Manaflow Band keeps mana up so you can spam E and W, Transcendence pushes Ability Haste past 40%, Scorch turns each Q hit into chip damage at low HP."
    secondary_rationale: "Resolve secondary: Font of Life triggers off Q slow and your AD carry's basic attacks for steady team healing, Revitalize amps every shield and heal you cast by 10% — pure enchanter math."
    secondary_alternative: "Into hook supports (Blitzcrank, Thresh, Pyke), swap Resolve to Inspiration with Biscuit Delivery (early-game sustain) and Cosmic Insight (lower Flash cooldown — your only escape vs hooks before R is up at level 6)."
matchup_draft:
  pick_into:
    - examples: ["jhin", "caitlyn", "ashe", "senna"]
      archetype: "Immobile basic-attack AD carries"
      reason: "Cozy Campfire's bonus Attack Range turns a stationary marksman into an artillery platform: they out-range every enemy lane without needing to step forward into harm's range."
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage supports"
      reason: "R cleanses their CC the moment it lands and grants Tenacity afterward — you keep your back line alive even if their initial pick goes through."
    - examples: ["zac", "hecarim", "warwick", "amumu"]
      archetype: "All-in diver junglers"
      reason: "Their gank is a single committed jump or charge with hard CC; R cleanses the lock-down on your AD carry and Warm Hugs's Move Speed lets the carry walk straight out of melee range."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Long-range hook supports"
      reason: "Milio has no gap-closer and no instant CC: a hook landed before level 6 deletes the AD carry before R is online. Q is too slow to interrupt the cast."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Long-range mage supports"
      reason: "They poke past the 650 range of Warm Hugs: Milio can shield each hit but cannot trade back, and slow HP attrition wears down the lane before his team-fight spike."
    - examples: ["pantheon", "alistar"]
      archetype: "Level 1-2 all-in supports"
      reason: "Milio's level 1 kit is just Warm Hugs and a 10-second Q — he loses every short trade before W is online to add range and sustain. Pantheon Q + W and Alistar Q + W combo can drop the carry before R."
---

## Overview

Milio is an enchanter support whose entire identity is one verb: **buff** — make the bot lane AD carry (the bot-lane marksman who scales with items and basic attacks) bigger, safer, and meaner. **Fired Up!** marks any ally he touches with a spell so their next attack burns the target. **Ultra Mega Fire Kick (Q)** is a long-range knockback he uses to peel a diver (a champion who jumps onto the back line) off the carry. **Cozy Campfire (W)** is a hearth that follows an ally and gives them extra Attack Range, healing, and a periodic damage proc — the signature ability that lets a Caitlyn or Jhin shoot from a distance no one else can match. **Warm Hugs (E)** is a 2-charge shield with bonus Move Speed, and **Breath of Life (R)** is the cleanest disengage tool in the game (an ability that breaks an enemy engage attempt — when they jump in with hard crowd control, you cleanse it and walk out).

His game plan is calm and mechanical: never let the AD carry die, and turn every basic attack into a longer-range, harder-hitting shot. Stand between threats and your carry, throw the W on the carry every fight so they can shoot from outside the enemy team's range, shield on cooldown, and save R as the panic button for when the enemy commits everything onto your back line. You almost never engage on Milio — his job is to win fights by refusing to lose them.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income and ward charges) plus 2 Health Potions. Skip damage starters: Milio does not snowball off lane kills (translate "snowball" as "build a growing lead from one early kill"), he scales off team-fight utility.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completes into Bounty of Worlds, then into a support legendary later. Stacks gold and ward charges automatically.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste lets you spam **E** shields and refresh **W** sooner; default boot for enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heal-on-shield passive that ramps in extended fights. Pair it with your **E** spam and the AD carry barely takes net damage.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — empowers any ally you shield with bonus on-hit damage and Attack Speed. Best item in the game next to a basic-attack-heavy AD carry like Caitlyn or Jhin.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanses hard CC off an ally on top of your **R**. Mandatory if the enemy has a single-target stun or hook on the carry.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag on (Drake, Baron, long teamfights). Big delayed AOE heal (an area-of-effect heal that lands a few seconds after you cast it) you can drop from across the map.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — into AP carries who scale with Ability Haste (Hwei, AP Ezreal). Buffs the ally you shield with extra Ability Power on top of the Move Speed.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (a big chunk of damage on the whole team in 1-2 seconds, like Yone R or Kennen R). Active gives an instant team-wide shield.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking compositions (Soraka, Vladimir, Dr. Mundo). Your **Q** applies Grievous Wounds (a debuff that cuts enemy healing in half) and you get a small Ability Power boost too.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is the default. Boots of Swiftness can replace them into a comp with heavy slows you need to walk out of.

**Skill order:** Max **E** first (shield value scales hard per level — main peel tool), **Q** second (more damage and a longer slow), **W** last (the bonus Attack Range is already huge at rank 1, the upgrade is mostly heal value). Take **R** at levels 6, 11, 16. Start **E** at level 1 to shield the first all-in (translate "all-in" as "a full commit fight, no holding back"), then **W** at 2 to add Attack Range to your AD carry.

**Runes:** Primary **Sorcery** with **Summon Aery** (sticks small damage and shield value to your spells), **Manaflow Band** (mana sustain so you can shield and W every wave), **Transcendence** (Ability Haste past the 40% cap), **Scorch** (extra **Q** chip damage at low HP). Secondary **Resolve** with **Font of Life** (you slow a target with **Q** → all allies attacking it heal) and **Revitalize** (10% boost to every shield and heal you cast). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Leona / Rakan:** Hard engage supports. Save **R** for the moment they commit onto your AD carry, never burn it on a poke trade. Stand behind the wave so they cannot Flash-engage from fog of war (the unwarded brush on the river side of the lane).
- **Blitzcrank / Thresh / Pyke:** Hook supports. Stand behind minions whenever you cross the river. The hook lands once and the AD carry is dead — you cannot **R** out of a 1.75-second stun. Build ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** earlier than usual.
- **Xerath / Brand:** Mage supports out of your **E** shield range. Hug the wave, do not auto-attack trade, and let your jungler hard-side the lane (camp your side of the river). Earlier ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** helps soak the chip poke (small repeated damage that wears down HP without a full commit).
- **Lulu:** Mirror enchanter on a different axis. She has stronger peel single-target (her R makes one ally bigger and untargetable), you have stronger sustain and team-wide range. Out-scale her by stacking shields on a Caitlyn-style ranged carry rather than fighting back with damage.
- **Pyke (roaming):** Track him with vision in tri-bush and river entry; if he leaves bot lane, ping mid immediately. Milio's **R** stops his execute ult only if he commits in melee and your AD carry is in the heal radius.

## Power spikes & win conditions

- **Level 2:** With **E** at 1 and **W** at 2, you can shield-engage one short trade (a brief exchange of damage in lane, not a full all-in). The Attack Range buff from W usually wins this trade for you because their support cannot return damage from 200 extra units away.
- **Level 6:** First **Breath of Life** unlocks. Any 2v2 attempt by the enemy is now winnable — they engage with hard CC, you channel R, the CC gets cleansed mid-fight and you keep shooting.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer + Ardent Censer (~ minute 16-20):** This is the team-fight spike (the moment a champion gains a sudden power boost) where you stop being a lane support and start being a team multiplier. Your AD carry's effective HP roughly doubles when you shield-spam through a fight, and Ardent's bonus on-hit raises their DPS noticeably.
- **Three legendaries online (~ minute 25):** With ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** added, you have two cleanses (R + Mikael's) for the two CC abilities most likely to delete your carry. From here, every objective fight is a 5v4 if the enemy commits hard CC into your back line.

## Common mistakes

- **Throwing W on yourself.** ![Cozy Campfire](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **W** also targets you, but the bonus Attack Range on Milio is wasted because his auto-attacks are weak. Default to dropping the hearth on the AD carry; only self-W if the carry is dead and you need the heal to survive a chase.
- **Burning R for a kill.** Milio's **R** is your team's best disengage and CC cleanse. Every time you use it for a kill secure that the AD carry could have finished anyway, you have left your team without a panic button for the next 100+ seconds.
- **Q poke at full charge with no setup.** **Q** has a slow windup and travels in a straight line — if the enemy is just standing on a wave they will side-step it. Throw Q only when an enemy is committed (mid-dash, channeling an ability, or stuck in a minion bounce) so they cannot move out of the line.
- **Standing too far back in fights.** Your **E** has a short 650-unit range. If you peek from behind your team you cannot shield anyone. Stand within shield range of the AD carry, second-line — closer than instinct tells you.
- **Forgetting to recast W.** **W** can be re-targeted onto a different ally during its 5-second duration. In a teamfight it should jump from the bot-lane carry to whoever is currently being focused (peel — protecting an ally from the champion attacking them). The recast is the highest-skill habit on Milio's kit.

## Advanced tip

Practice the **W swap-mid-fight** rotation. Drop **Cozy Campfire** on your AD carry pre-fight for the Attack Range buff. The instant the enemy assassin or diver gets onto your mid laner instead, recast **W** to swap the hearth to mid (the carry already had their range advantage to start the fight). The new hearth resumes its heal-and-Fired Up rotation on whoever is now under pressure. This single recast turns Milio from a one-target enchanter into a two-target damage-and-sustain platform — the difference between losing one ally in the fight and holding both alive long enough for **R** to come up.
