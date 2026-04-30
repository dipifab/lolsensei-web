---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "en"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Anivia mid lane guide for League of Legends Patch 16.9: starter kit, control mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "On lethal damage, Anivia turns into an immobile egg for a few seconds. If the egg survives, she revives at full HP. Long cooldown — never bait it twice in a fight."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Long-range linear ice sphere that slows enemies along its path. At max range it detonates and stuns. Recast to detonate early."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Summons a wide impassable wall of ice for a few seconds. Blocks all movement (yours included) and dashes through it."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Targeted short-range blast. Deals double damage if the target is Chilled by Q on hit or by a fully formed R."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Toggle ground-target blizzard that slows and ticks magic damage. Once fully formed it Chills targets so E does double damage."
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Akali, Diana) — stasis covers the gap while R cools down"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that interrupts the R toggle"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Aatrox) — R applies grievous wounds in a wide area"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap as soon as any priority target finishes their first Magic Resist item"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Land Q at max range to chill, follow with E for double damage, then drop R under their feet so anyone slowed eats another empowered E. Wall the rest of their team out so the kill is uninterrupted."
  weakness: "Slow, no dash, low base armor, mana hungry early. Miss Q and the trade dies; divers reach you before R is fully formed. Wind Wall and silences cripple the kit."
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
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Anivia's Q + W trap immobile mages: they cannot dodge the chill into a doubled E, and have no way around the wall when she splits their lane minions."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize blocks every melee engage path; combined with E shove and R waveclear, she farms safely while they cannot reach her without burning Flash."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize splits the enemy team in two on the engage; if she walls between the initiator and the follow-up, the wombo lands on one or two targets, not five."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They enter Anivia's E range during her cast windows; she has no dash and only one egg, so a chained dash combo bursts her before R can finish forming."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall blocks Q outright (the chill never lands) and her main damage threat collapses; without chill, E damage halves and the lane becomes a melee fight she cannot win."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "They out-range Anivia's Q at every stage of the lane and poke from outside her threat radius; she has no mobility to gap-close or punish their cooldowns."
---

## Overview

Anivia is a long-range control mage with two health bars, a slow-but-massive area ult, and the only impassable wall in the game. Her kit punishes positioning errors: **Flash Frost (Q)** applies **Chill** (a named slow status the rest of her kit revolves around), **Frostbite (E)** does double damage on Chilled targets, and **Glacial Storm (R)** keeps everyone inside its zone slowed. She trades mobility for utility — no dash, but **Rebirth (P)** gives her a second life every time the egg survives.

Her game plan in mid is simple to describe and brutal to execute: shove (push the line of minions into the enemy tower) the wave with **R** + **E**, hit the river or jungle with a **Q-E** combo through fog whenever an enemy steps in, and use **Crystallize (W)** to split engages (engage = the moment a teamfight starts) or save teammates from dives (champions jumping on you to burst you down — burst means high damage in 1-2 seconds). At every rank she also wins games by holding lanes nobody else can hold — a fully formed **R** is a wall of constant magic damage.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Anivia is mana hungry early and needs the AP and mana regen to throw **Q** twice per wave without going dry.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (your damage power-up) plus mana sustain. Lets you cast **Q-E** without watching the bar.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (cuts through a fixed amount of enemy magic resist) to amplify **E** double-hit damage on squishies (champions with low defenses, typically ADCs and mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplies your AP, scaling (how much stronger the champion gets per item and per level) already strong burst into one-shot territory.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst plus an HP-threshold passive (a bonus that activates when the target is below ~35% HP) that lines up with **E** finishers.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Akali, Diana). The stasis (a brief invulnerable freeze) buys time while **Glacial Storm** comes back up.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into heavy single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that would interrupt your **R** toggle.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking compositions (Soraka, Vladimir, Aatrox). **R**'s constant ticks apply grievous wounds (a debuff that cuts healing) over a wide area.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — buy this the moment any priority target (the enemy you most want dead — usually their carry) finishes their first Magic Resist (MR — the defensive stat that reduces magic damage taken) item. Anivia's damage falls off a cliff against MR if you delay it.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable only if your team is starving for **R** uptime (how often R is available again) in skirmishes (small 2v2 or 3v3 fights outside the main teamfight).

**Skill order:** Max **E** first — it is your real damage button, double damage on chilled targets. Max **Q** second (longer slow + stun duration), max **W** last. Take a point in **R** at levels 6, 11, 16. Pick up **W** at level 3 even though you max it last: a single rank of the wall already saves your life or splits an engage.

**Runes:** Primary **Sorcery** with **Arcane Comet** (a free damage projectile that lands when you hit an enemy with an ability), **Manaflow Band** (free mana every time you hit an enemy with a skillshot), **Transcendence** (cooldown reduction), **Scorch** (extra burn on your first ability hit). Secondary **Inspiration** with **Biscuit Delivery** (free potions in lane) and **Cosmic Insight** (extra cooldown reduction on summoner spells like **Flash**). Comet is the single highest realistic damage rune for Anivia: every chilled **E** triggers it on impact.

## Key matchups

- **Yasuo:** He can Wind Wall (an ability that blocks projectiles for a few seconds) your **Q** and even your **E** projectile. Hold both abilities until he has wasted Wind Wall on minions. Drop **W** vertically between him and his minions when he tries to all-in (a full-commit fight to the death) — he loses windwall windows to the wall and to the chill.
- **Zed / Akali:** Diving threats. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** after ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** if they are ahead. Place **R** under your own feet when they enter — they have to fight inside your storm if they want the kill.
- **Veigar:** Even matchup that flips on whoever roams (leaves their lane to help another) first. You out-clear him pre-6 thanks to **R**; punish him by shoving and helping bot lane while he is still farming under tower.
- **Xerath / Vel'Koz:** They out-poke your range. Stand behind minions, last-hit with **E** (last-hit = the killing blow on a minion that grants you gold), never push past the half-way line of the wave unless your jungler is mid-side (positioned in the jungle near mid lane).
- **Annie:** A telegraphed all-in mage — her stun has a slow obvious tell (a visible animation right before a cast that warns you to dodge). Pre-6, **W** her Tibbers landing path to split her stun-and-summon combo. Your egg passive saves you from one full bursting attempt; she will likely use her ult anyway and hand you a free counter-engage.

## Power spikes & win conditions

- **Level 2:** With **Q** + **E** you can already chill-and-double-tap a lane opponent who steps too far for a minion. Threaten this every wave; it is the trade (a quick exchange of hits and abilities, not a full kill attempt) Anivia is built around.
- **Level 6:** First **Glacial Storm**. You go from one of the weakest level-5 mages in the game to one of the strongest waveclear (the ability to clear minion waves quickly) and zoning (forcing the enemy out of an area by threatening damage) kits at level 6. Shove the wave instantly and look for a roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minute 12-14):** A full **Q-E** combo plus the Luden's proc (the item passive that triggers automatically when you cast) one-shots most ADCs and other mages without an MR item. Force objective fights in this window.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30):** Anivia's late game kicks in. With **R** ticking (small damage hitting every fraction of a second) and a chilled **E**, even tanks lose chunks of HP per second. Group with the team and let the frontline (the role of tanks/bruisers who stand in front and absorb damage) do its job for you.

## Common mistakes

- **Throwing Q without an E follow-up.** **Q** alone is decent poke (chip damage at range to whittle the enemy without committing to a fight); **Q** then **E** with the chill double-bonus is a real kill threat. Never use **Q** purely for harass (poking only to annoy and shave HP) when **E** is off cooldown.
- **Walling yourself out of the lane.** **W** is impassable for *both* sides. Drop it parallel to the wave to peel a gank (jungler ambush from fog), never perpendicular through your own escape route.
- **Toggling R off too early.** **R** does not eat mana once it is up — keep it active during fights, do not panic-toggle the moment your bar drops. The slow alone is worth the mana.
- **Egg roulette.** Your Rebirth passive is on a long cooldown. Do not "trust the egg" by tower-diving (going under their tower to kill them) at low HP unless you have done the math: it takes only a few hits to kill the egg, and one of those hits can be the tower itself.
- **Ignoring W as a peel tool.** Most Anivia players only think of **W** as a chase tool. **Peel** = using an ability to protect an ally from whoever is jumping on them. Against pick comps (compositions that win by catching one player out of position), **W** between your back line (your carries who deal damage from behind) and a Malphite ult is one of the strongest defensive plays in mid.

## Advanced tip

Use **Q**'s detonation recast as a *vision tool*. The ice sphere has a wide visual radius while in flight and on detonation: launch it through fog of war (the unseen part of the map outside your team's vision) on a likely enemy path — for example, into mid-river before a drake fight (the team battle around the dragon, an objective monster in bot-side river that grants buffs to whoever kills it) — and recast immediately on contact. You grant your team half a second of vision and a stun in one button. Top Anivia players replace one ward (a placed sentinel that reveals a small area of the map for a while) per fight with a **Q** detonation through fog: cheaper, faster, and it stuns the engage.
