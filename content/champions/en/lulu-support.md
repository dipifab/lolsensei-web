---
title: "Lulu Support Build & Guide — Patch 16.9"
slug: "lulu-support"
language: "en"
patch: "16.9"
champion: "lulu"
role: "support"
last_updated: "2026-04-29"
description: "Lulu support guide for League of Legends Patch 16.9: enchanter peel build, polymorph and shield use, key matchups, power spikes, and a knock-up R lifesaver tip."
quick_learn:
  champion_dd_id: "Lulu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Peeler"
  abilities:
    - key: "P"
      name: "Pix, Faerie Companion"
      description: "Pix follows Lulu (or whoever she E-targets) and fires homing bolts at the same target Lulu attacks. Bolts can be intercepted by minions in the way."
      dd_spell_id: "Lulu_Passive"
    - key: "Q"
      name: "Glitterlance"
      description: "Lulu and Pix each fire a piercing bolt of energy. Multiple hits add bonus damage. Heavy slow that decays. Skillshot — line it up before W or after a polymorph."
      dd_spell_id: "LuluQ"
    - key: "W"
      name: "Whimsy"
      description: "Cast on enemy: polymorphs them into a critter for ~1.5s (no attacks, no spells). Cast on ally: gives bonus Move Speed and Attack Speed."
      dd_spell_id: "LuluW"
    - key: "E"
      name: "Help, Pix!"
      description: "Cast on ally: shields them and gives Pix a buff that adds bolts to their attacks. Cast on enemy: deals magic damage and reveals them with True Sight."
      dd_spell_id: "LuluE"
    - key: "R"
      name: "Wild Growth"
      description: "Targets an ally: knocks up enemies around them, gives bonus max HP, and lets the ally slow nearby foes for the duration. Lifesaver and counter-engage."
      dd_spell_id: "LuluR"
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
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "into AP carries who scale with Ability Haste (Hwei, AP Ezreal) — the buff lets you both burst and shield more often"
    - dd_id: "3107"
      name: "Redemption"
      against: "when fights drag long (Drake, Baron) and your team needs group healing across the map; pairs well with Mikael's if hard CC is on the carry"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst (Yone R, Kennen R, Orianna R) — instant team-wide shield saves your back line during a wombo combo"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Morgana Q, Lissandra R) — the spell shield blocks the one ability that would lock you down before R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Keep your AD carry alive through every all-in: shield with E, peel divers with W polymorph, and use R as a knock-up lifesaver when the back line is jumped."
  weakness: "No hard CC at level 1 and short E range. If a hook or long-range engage lands before R is up, you cannot save the carry and your kit goes blank."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zed", "kha-zix", "rengar", "kayn"]
      archetype: "Single-target divers and assassins"
      reason: "Lulu's W polymorphs the diver in mid-jump (turning them into a critter that cannot attack or cast), and her R knocks them up the moment they land — the entire engage gets cancelled in one button."
    - examples: ["jhin", "kog-maw", "twitch", "vayne"]
      archetype: "Immobile AD carries with strong basic attacks"
      reason: "Ardent Censer plus W ally-cast gives them bonus Attack Speed and Move Speed without needing to reposition; her shield and R cover the lack of escape."
    - examples: ["leona", "rakan", "alistar", "rell"]
      archetype: "Engage supports that all-in with a single dash"
      reason: "Their entire engage is one telegraphed jump — Lulu polymorphs them mid-air and the AD carry walks out free."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke", "nautilus"]
      archetype: "Hook supports with long-range CC"
      reason: "Lulu has no escape and no hard CC at level 1 — a hook landed pre-6 deletes the AD carry before R is even online to knock the engager off."
    - examples: ["xerath", "brand", "vel-koz", "zyra"]
      archetype: "Long-range mage supports"
      reason: "They poke from outside the 650 range of Lulu's E shield: she can heal a hit but cannot trade back, so HP attrition (slow bleed of HP over many waves) wins the lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Sustain enchanters that out-heal her poke"
      reason: "Lulu's only lane damage is Q, a slow-charge skillshot — these enchanters out-heal the trade and beat her in pure scaling team-fight value."
---

## Overview

Lulu is an enchanter support whose entire kit is built around two verbs: **peel** (protect a teammate, usually the AD carry — the bot-lane marksman who scales with items — from whoever is attacking them) and **buff**. **Pix, Faerie Companion** auto-attacks alongside you for free poke. **Glitterlance (Q)** is a long-range slow you line up after locking a target down. **Whimsy (W)** is a polymorph (turns an enemy into a critter that cannot attack or cast for ~1.5s) when cast on an enemy, and a Move Speed plus Attack Speed buff when cast on an ally — one button, two completely different uses. **Help, Pix! (E)** shields an ally or chips an enemy. **Wild Growth (R)** is the cleanest lifesaver in the game: it knocks up everyone around the targeted ally (an ability that breaks an enemy engage attempt — when they jump in, you push them out) and gives that ally a chunk of bonus max HP for the next few seconds.

Her game plan in lane is calm and selfish for the AD carry: never let them die. Cast **E** on them on cooldown for the shield and the bolt buff, hold **W** for the moment a hook or dash commits onto your carry, and save **R** as a panic button for an all-in (a full commitment trade that ends in a kill or a flash). Outside of lane, Lulu turns a fed AD carry into a 2v9 by buffing them while keeping divers off their back.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income and ward charges) plus 2 Health Potions. Skip damage starters: Lulu does not snowball off solo lane kills (a snowball is a small lead that grows into a bigger one — kill turns into gold turns into items turns into more kills), she scales off team-fight utility.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completes into a support legendary later. Stacks gold and ward charges automatically while you peel.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste lets you cast **E** shield and **W** polymorph on shorter cooldowns; default boot for enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heal-on-shield passive that ramps the longer the fight goes. Pair it with **E** spam and the AD carry barely takes net damage.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — every shield you throw gives that ally bonus Attack Speed and on-hit damage. Best item in the game next to a basic-attack-heavy AD carry.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanses hard CC (stuns, roots, charms — the ones you cannot move out of) off an ally. Mandatory if the enemy has a single-target lockdown threat on your carry.

**Situational items:**

- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — into AP carries who scale with Ability Haste (Hwei, AP Ezreal). Every shield gives them bonus Ability Power.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag long (Drake, Baron, extended teamfights). Big delayed AOE heal you can drop from across the map.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (area-of-effect damage, like Yone R or Kennen R). Active gives an instant team-wide shield.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC threats targeting you (Ahri charm, Morgana Q). The spell shield eats the one cast that would lock you out of casting **R**.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is the default. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** can replace them into a comp loaded with slows you need to escape.

**Skill order:** Max **E** first (shield value and bolt damage scale per level), **Q** second (more burst and slow), **W** last. Take **R** at levels 6, 11, 16. Start **E** at level 1 to win the first all-in trade with a shield and Pix bolts on the AD carry, then **W** at 2 for the Move Speed boost and follow-up polymorph option.

**Runes:** Primary **Sorcery** with **Summon Aery** (sticks small damage and shield value to your spells), **Manaflow Band** (mana sustain so you can shield and **W** every wave), **Transcendence** (Ability Haste on level-up — more **E** uptime in lane), **Scorch** (extra **Q** poke through level 9). Secondary **Inspiration** with **Biscuit Delivery** (free mana and HP biscuits in lane) and **Cosmic Insight** (Ability Haste on Summoner Spells, including **Flash**). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Leona / Rakan:** Hard engage supports. Save **W** for the moment they commit onto your AD carry — polymorph cancels the dash mid-air. Charge **R** for the full commitment if they Flash in.
- **Blitzcrank / Thresh:** Hook supports. Stand behind minions whenever you cross the river. The hook lands once and the AD carry is dead — you cannot **R** out of a 1.75-second stun.
- **Xerath / Brand:** Mage supports out of your ![Help, Pix!](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **E** shield range. Hug the wave, do not trade auto-attacks, and let your jungler hard-side the lane. Build ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** earlier than usual.
- **Soraka:** Sustain mirror. You out-buff her at the cost of less raw healing. Force a level-2 all-in: **W** her face for the slow on Q follow-up, **E** the AD carry, push her off the wave before her **R** spike comes online.
- **Pyke:** Roaming threat. Track him with vision in tri-bush and river entry; if he leaves bot lane, ping mid immediately. Lulu's **R** stops his execute ult only if you cast it before the dagger lands — react on his hook animation, not after.

## Power spikes & win conditions

- **Level 2:** With **E** at 1 and **W** at 2, you can shield-engage one short trade (a brief exchange of damage in lane, not a full all-in). Most lanes lose this trade because their level-2 spike (the moment a champion gains a sudden power boost) is weaker than yours plus an AD carry buffed by Pix bolts.
- **Level 6:** First **Wild Growth** unlocks. Any 2v2 attempt by the enemy is now winnable — they engage, you knock up the engager and add bonus HP to your carry, the trade flips.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer + ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Ardent Censer (~ minute 16-20):** This is the team-fight spike where you stop being a lane support and start being a team multiplier. Your AD carry's effective HP roughly doubles when you shield-spam through a fight, and Ardent on every shield boosts their DPS.
- **Three legendaries online (~ minute 25):** With ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** added, you cleanse the one CC ability that would otherwise delete your carry. From here, every objective fight is a 5v4 if the enemy commits hard CC.

## Common mistakes

- **Casting W on the wrong target.** **Whimsy** is a polymorph on enemies and a Move Speed buff on allies. Default to enemy-cast in 2v2 trades (the polymorph wins the all-in); ally-cast is for chasing or running. Holding the cursor over your AD carry by reflex burns the cooldown for nothing.
- **Burning R for a kill.** Lulu's **R** is your team's best knock-up lifesaver. Every time you use it for a kill secure that the AD carry could have finished, you have left your team without a panic button for the next 80-120 seconds.
- **Shielding yourself.** ![Help, Pix!](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **E** also targets you, but the Pix bolt buff is wasted on Lulu (your auto-attacks are weak). Default to shielding the AD carry; only self-shield if a skillshot (an aimed projectile that you can dodge) is locked onto you and your carry is safe.
- **Standing too far back in fights.** Your **E** has a 650-unit range — short. If you peek from behind your team you cannot shield anyone. Stand within shield range of the AD carry, second-line — closer than instinct tells you.
- **Auto-attacking minions for damage.** Pix bolts on Lulu hit minions, but pushing the wave with autos hands the enemy a free poke window without any benefit for you. Last-hit only when the AD carry is shoved back to base.

## Advanced tip

Practice the **R-onto-yourself** save. **Wild Growth** can target any ally — including yourself in a panic. If a diver lands on you and your AD carry is dead or already safe, **R** on yourself: the knock-up cancels their channel or follow-up, the bonus max HP buys you 600+ effective HP for the next few seconds, and the slow aura makes them miss every basic attack while you walk to safety. This is the play that turns a botched 2v3 into a clean retreat — and most low-rank Lulus never realize **R** is a self-cast button.
