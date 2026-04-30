---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "en"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Janna support guide for League of Legends Patch 16.9: enchanter build path, peel-focused matchups, power spikes, common mistakes, and a final advanced disengage tip."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Allies moving toward Janna gain bonus Move Speed. Janna also turns part of her bonus Move Speed into bonus magic damage on hit."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Charge a tornado, then release to fly forward, knocking enemies up. Charging longer = bigger range, damage, and knock-up time."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Passive bonus Move Speed and unit walking. Activate to deal magic damage and slow one enemy. Drop the passive while active."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Targeted shield on an ally champion or turret that also grants bonus Attack Damage while active."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel that knocks all nearby enemies away, then heals nearby allies for the rest of the duration. Disengage and recovery in one button."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
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
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst (Yone R, Kennen R, Orianna R) — instant team-wide shield saves your back line"
    - dd_id: "3107"
      name: "Redemption"
      against: "when your team needs more group healing in long fights or to contest objectives like Drake and Baron"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "into AP carries who scale with Ability Haste (Hwei, Ezreal AP) — extra Ability Power for the ally you shield"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs engage comps with one clear AD carry (Aphelios, Kai'Sa) — the bond pairs with your R for a guaranteed slow"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Keep your AD carry alive past the early skirmish window, stack Move Speed peel, and use R to break enemy engages so your team rotates around objectives untouched."
  weakness: "Low solo damage and short cast range on E. If the enemy lands hard CC on you before you cast R, you cannot peel for anyone, including yourself."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage supports"
      reason: "Janna's R cancels their dive in mid-air: the moment they jump on your AD carry, the channel knocks them off and undoes the engage attempt."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile AD carries with strong basic attacks"
      reason: "Tailwind plus E shield plus Ardent Censer turn a stationary marksman into a peel-fortress: she boosts their damage and Move Speed without needing to reposition."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Flashy diver junglers"
      reason: "Their gank windup is a single committed jump or charge — Janna's Q knocks them up mid-dash, and her R sends them back to where they came from."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports with long range"
      reason: "Janna has no gap-closer and no hard CC at level 1: a hook landed before level 6 deletes the AD carry before R is even online to disengage."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Long-range mage supports"
      reason: "They poke from outside the 800 range of Janna's E shield: she can shield the hit but cannot trade back — slow HP attrition wins the lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Sustain enchanters that out-heal poke"
      reason: "Janna's only damage tool in lane is Q, which is telegraphed by a long charge — these enchanters out-heal the trade and beat her in scaling team-fight value."
---

## Overview

Janna is an enchanter support whose entire kit is built around one verb: **peel** (protect a teammate, usually the AD carry — the bot-lane marksman who scales with items — from whoever is attacking them). Her **Tailwind** passive layers bonus Move Speed on every ally walking toward her, **Howling Gale (Q)** knocks up anyone who tries to dive the back line (the squishy ranged carry standing in the rear of a teamfight), **Zephyr (W)** chips and slows the closest threat, **Eye of the Storm (E)** is a shield with a built-in damage buff for the ally she throws it on, and **Monsoon (R)** is one of the cleanest disengage tools in the game (an ability that breaks an enemy engage attempt — when they jump in, you push them out).

Her game plan is calm and mechanical: never let the AD carry die. Stand between threats and your carry, throw the shield on cooldown, charge **Q** behind cover so the tornado comes out at maximum size, and save **R** as a "panic button" for when the enemy team commits everything onto your back line. You almost never want to engage on Janna — her job is to win fights by refusing to lose them.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income) plus 2 Health Potions. Skip damage starters: Janna does not snowball off lane kills, she scales off team-fight utility.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completes into Bounty of Worlds, then into a support legendary later. Stacks gold and ward charges automatically.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste lets you spam **E** shield and **W** slow on shorter cooldowns; default boot for enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heal-on-shield passive that ramps in extended fights. Pair it with your **E** spam and the AD carry barely takes net damage.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — empowers any ally you shield with bonus on-hit damage and Attack Speed. Best item in the game next to a basic-attack-heavy AD carry.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanses hard CC off an ally. Mandatory if the enemy has a single-target stun or hook on your carry.

**Situational items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (area-of-effect damage, like Yone R or Kennen R). Active gives an instant team-wide shield.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag on (Drake, Baron, long teamfights). Big delayed AOE heal you can drop from across the map.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — into AP carries who scale with Ability Haste (Hwei, AP Ezreal). Buffs the ally you shield with extra Ability Power.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — vs engage comps where your AD carry needs a guaranteed slow on her target during your **R**.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is the default. Boots of Swiftness can replace them into a comp with multiple slows you need to escape.

**Skill order:** Max **E** first (shield value and Attack Damage buff scale per level), **Q** second (more knock-up time and damage), **W** last. Take **R** at levels 6, 11, 16. Start **W** at level 1 for the extra Move Speed on the way to lane, then take **E** at 2 to shield the first all-in.

**Runes:** Primary **Sorcery** with **Summon Aery** (sticks small damage and shield value to your spells), **Manaflow Band** (mana sustain so you can shield and **W** every wave), **Absolute Focus** (bonus AP while above 70% HP, easy on Janna because you stay safe), **Scorch** (extra **Q** poke). Secondary **Resolve** with **Font of Life** (you slow a target with **W** → all allies attacking it heal) and **Overgrowth** (small permanent HP scaling). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Leona / Rakan:** Hard engage supports. Save **R** for the moment they commit onto your AD carry; never burn it on a tornado-finder play. Charge **Q** behind a wall so they cannot see the windup.
- **Blitzcrank / Thresh:** Hook supports. Stand behind minions whenever you cross the river. The hook lands once and the AD carry is dead — you cannot **R** out of a 1.75-second stun.
- **Xerath / Brand:** Mage supports out of your **E** shield range. Hug the wave, do not trade auto-attacks, and let your jungler hard-side the lane. Build ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** earlier than usual.
- **Soraka:** Sustain mirror. You out-shield her at the cost of less raw healing. Force a level-2 all-in: **W** her face, **E** the AD carry, push her off the wave before she gets her **R** spike.
- **Pyke:** Roaming threat. Track him with vision in tri-bush and river entry; if he leaves bot lane, ping mid immediately. Janna's **R** stops his execute ult only if he commits in melee — at long-range hook he is uncatchable.

## Power spikes & win conditions

- **Level 2:** With **W** at 1 and **E** at 2, you can shield-engage one short trade (a brief exchange of damage in lane, not a full all-in). Most lanes lose this trade because their level-2 spike (the moment a champion gains a sudden power boost) is weaker than yours.
- **Level 6:** First **Monsoon** unlocks. Any 2v2 attempt by the enemy is now winnable — they engage, you channel, they get knocked back into your tower.
- **Moonstone Renewer + Ardent Censer (~ minute 16-20):** This is the team-fight spike where you stop being a lane support and start being a team multiplier. Your AD carry's effective HP roughly doubles when you shield-spam through a fight.
- **Three legendaries online (~ minute 25):** With Mikael's added, you cleanse the one CC ability that would otherwise delete your carry. From here, every objective fight is a 5v4 if the enemy commits hard CC.

## Common mistakes

- **Throwing un-charged Q in lane.** A 0.5-second tornado does almost nothing. Charge **Q** for the full 3 seconds behind a wall or fog of war (the unwarded brush near the bot lane river), then release as the enemy walks into a wave.
- **Burning R for a kill.** Janna's **R** is your team's best disengage. Every time you use it for a kill secure that the AD carry could have finished, you have left your team without a panic button for the next 100+ seconds.
- **Shielding yourself.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** also targets you, but the Attack Damage buff is wasted on Janna. Default to shielding the AD carry; only self-shield if a skill-shot (an aimed projectile that you can dodge) is locked onto you and your carry is safe.
- **Standing too far back in fights.** Your **E** has a short 800-unit range. If you peek from behind your team you cannot shield anyone. Stand within shield range of the AD carry, second-line — closer than instinct tells you.
- **Auto-attacking minions for damage.** Tailwind only triggers on champion hits. Pushing the wave with autos gives the enemy a free trade window without any damage benefit for you.

## Advanced tip

Practice **Q-Flash**. Start charging **Howling Gale** behind a wall, then Flash forward and release the tornado in the same motion: the knock-up lands on a target who never saw the windup. This single play turns Janna from a defensive enchanter into a one-shot disengage onto a fed enemy (a champion ahead in kills and gold) who pushed too far. The cost is your **Flash** for the next 5 minutes — only spend it when the kill, or the survival of your AD carry, is locked in.
