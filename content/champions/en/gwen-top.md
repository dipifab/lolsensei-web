---
title: "Gwen Top Build & Guide — Patch 16.9"
slug: "gwen-top"
language: "en"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Gwen top lane guide for League of Legends Patch 16.9: starter kit, AP bruiser core build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Auto-attacks deal bonus magic damage based on the target's max HP. Gwen heals for a portion of damage dealt to champions with this effect."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Cone scissor strike with up to 6 snips. The center cone deals true damage and reapplies the passive on every snip — main tank-shredder."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Drops a 4-second mist zone. Enemies outside cannot target Gwen — only enemies who step into the mist can. Defensive reset button."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Short dash that grants attack speed, attack range, and on-hit AP for a few seconds. Cooldown partially refunded on champion hit."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Throws a needle volley that slows and applies the passive. Recasts up to two more times, each volley dealing more damage."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Camille, Fiora, Rengar) — 2.5s stasis covers the W cooldown and breaks their burst window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Vladimir pool, Lissandra R, Malzahar suppression) — shield blocks one hostile ability"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs ranged poke matchups (Vayne top, Teemo) — extra haste and movement speed to actually close the gap"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs 4+ tank/bruiser comps — replaces Riftmaker for permanent percent-max-HP burn from minute 1 of every fight"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Survive early lane, hit Riftmaker around minute 18, then split-push a side lane forcing 2 enemies to stop you. In teamfights, melt the front line with on-hit Q true damage."
  weakness: "Weak early levels (low burst, no waveclear range). Hard countered by ranged tops, true-damage outscalers like Fiora, and heavy point-and-click CC chains that lock W activation."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror stacks during Gwen's long Q + auto sustain trades, granting adaptive damage and healing. Triumph rewards multi-kills, Legend: Alacrity boosts the on-hit window from E, Last Stand adds damage when low HP."
    secondary_rationale: "Resolve secondary: Second Wind regenerates HP after ranged harass (key vs ranged tops), Overgrowth scales raw HP into late game where Gwen's W-mist fights shine."
    secondary_alternative: "Vs heavy AP / non-poke matchups, swap Resolve to Sorcery with Manaflow Band (mana sustain for Q spam) and Transcendence (extra ability haste for more E refunds)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Slow melee bruisers without ranged poke"
      reason: "Q applies percent-max-HP true damage that ignores armor. Sustained 1v1 inside W mist shreds tanky melee fighters who cannot kite or disengage."
    - examples: ["malphite", "shen", "ornn", "cho-gath"]
      archetype: "Resistance-stacking tanks"
      reason: "Q true damage and on-hit AP from E ignore both armor and magic resist. Tanks stack defenses she fully bypasses."
    - examples: ["irelia", "jax"]
      archetype: "Item-reliant scaling fighters"
      reason: "Their power-spike windows arrive at item 2-3 around minute 25. Gwen reaches Riftmaker first and snowballs the side lane before they hit their core."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "True-damage / early-game outscalers"
      reason: "Fiora's Vitals also deal true damage and her Q dashes ignore W mist range. Riven outdamages Gwen at level 1-3 before passive can stack online."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Ranged tops that kite from auto range"
      reason: "Gwen needs melee range to apply on-hit AP and Q true damage. Ranged kiters auto-cancel her engage and prevent any clean trade."
    - examples: ["malphite", "pantheon"]
      archetype: "Point-and-click stun engagers"
      reason: "Their CC chains lock Gwen out of W activation. Once stunned mid-dash, she eats the full enemy combo before mist can drop."
---

## Overview

Gwen is an AP bruiser — a melee champion that uses Ability Power (the AP stat) instead of Attack Damage and tanks some hits in melee instead of bursting from range. She's also a "skirmisher": she wins extended duels rather than killing a target in two seconds the way an assassin would. Her kit lets her shred tanks with **true damage** (damage that ignores both armor and magic resist), heal during fights from her passive, and reposition with a dash on a refundable cooldown. She lives in side lanes and 1v1 duels.

The game plan is to survive the first 10 minutes without giving up kills, hit your first big item around minute 12-14, then split-push — push a side lane alone to force the enemy team to send 2 players to stop you. Around minute 25 with 3 items you can step into teamfights and chain auto-attacks (basic attacks, "AA") on the enemy front line (the tanks/bruisers in front of their team) until they melt.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** in matchups against ranged tops or heavy poke (continuous chip damage from a distance). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** in friendlier melee matchups when you want to start scaling AP early.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — your big spike. After 2 seconds in combat, part of your damage converts into true damage (the "Void Corruption" passive), and you gain "omnivamp" (heal back a portion of any damage you deal — abilities and basic attacks both). This glues onto Gwen's playstyle of long fights better than any other item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration that makes your damage hit harder against squishies (champions with low defenses, typically the enemy carries).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed plus AP plus a passive that adds bonus magic damage to every basic attack. Combined with **E** (the on-hit window from Skip 'n Slash, where each basic attack also applies AP-based magic damage) you become a sustained DPS turret in extended fights.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplies your total AP. The late-game scaling item that turns you from "tanky DPS" to genuine carry.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers (champions that jump on top of your back-line carries to kill them) and assassins (Camille, Fiora, Rengar). Active gives you 2.5 seconds of stasis (you become untargetable but can't act either), enough to break their burst window — the 1-2 seconds where they try to delete you.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC ("crowd control": stuns, roots, charms — anything that locks your character in place). Vladimir pool followed by ult, Lissandra **R**, Malzahar suppression. The shield blocks one hostile ability outright.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — into ranged poke matchups (Vayne, Teemo). Extra ability haste (faster cooldowns) and movement speed help you actually reach them.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs 4+ tanks/bruisers on the enemy team. Replaces Riftmaker as your first item if you need percent-max-HP burn from minute 1 of every fight.

**Boots:** Sorcerer's Shoes is the default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** if the enemy team has 3+ AD (Attack Damage) threats including the jungler. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC compositions (3+ stuns or knockups).

**Skill order:** Max **Q** first (its true damage and AP scaling), max **E** second (cooldown and damage), put **W** last. Take **R** at levels 6, 11, 16. Level 1 priority: **Q** for last-hits (killing minions); level 2 take **E** for the dash; level 3 take **W** for safety.

**Runes:** Primary **Precision** with **Conqueror** (a keystone that stacks during long fights to grant adaptive damage and healing), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** with **Second Wind** and **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Key matchups

- **Fiora:** Hard matchup. Her **Q** also deals true damage on her "Vitals" — the four glowing points around your champion that, when hit with her **Q**, trigger true damage. Her **R** removes any cleanse effect (a buff that breaks crowd control on yourself). Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, save **W** for the moment her **R** activates, and don't trade auto-attacks at level 1-2 (a "trade" = a short exchange of hits where you both step in, hit each other, then back off); she outscales most melee bruisers in raw 1v1.
- **Camille:** Even-to-bad. Her hookshot (**E**, a long-range grappling hook that lets her swing onto you) bypasses your **W** mist — she can engage on you from outside the mist's protection range ("engage" = the moment a champion commits to start a fight). Hold **W** for the moment after she lands her hookshot, and step out only when her **W** (true damage cone on her empowered auto) is on cooldown.
- **Sett:** Favorable. He's also a bruiser but has no answer to your percent-max-HP **Q** true damage in extended trades. Skip the early all-in (the level 1-3 fight where someone fully commits to a kill), scale to ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, then 1v1 him in side lane.
- **Darius:** Even. Avoid his **E** pull range; walk forward only inside your **W** mist. Use **E** to disengage (= break out of the fight to escape) when his passive bleed stacks reach 4 — his passive applies a damage-over-time bleed on his auto-attacks, and the 5th stack is the empowered one that triggers his bonus damage.
- **Teemo:** Bad. His ranged auto-attacks shred you outside **W**, and his **Q** blinds your auto-attacks (the source of most of your damage). Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, ask your jungler for an early gank (a surprise visit from the jungler to help you secure a kill), and play to scale — you can't win lane.

## Power spikes & win conditions

- **Level 6:** First **R** unlocks. The needle volley applies your passive's percent-max-HP magic damage to every champion hit, and the slow chains your auto-attacks (you can keep hitting them while they're slowed). Force a fight with jungler help around minute 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 18-20):** The omnivamp + true damage spike. Now you can 1v1 most top laners and split-push a side lane until they send two players to stop you.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth complete (~ minute 26-28):** DPS spike. With **E** active your auto-attacks fire much faster and apply on-hit AP — the moment to step into teamfights instead of just split-pushing.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 32+):** Carry phase. Your auto-attacks shred 25%+ HP per hit on the enemy front line. Any teamfight where your team protects you ("peels" enemies off you) ends in a win.

## Common mistakes

- **Sitting in W too long.** Hallowed Mist is a 4-second window, not a permanent shield. Activate it the moment the enemy commits hard CC (a stun or root); pre-emptive **W** wastes the cooldown and leaves you exposed for the next 18-22 seconds.
- **Q-ing the wave for poke.** Your **Q** mana cost is high and the cone is short-range (450 units). Save **Q** for moments when you can hit a champion in the center of the cone (the true-damage zone), not for chip damage on minion waves.
- **Throwing E forward at full HP.** Your **E** is both engage and panic button. If you waste it forward at full HP and then the enemy jungler appears, you have no second dash to escape.
- **Auto-attacking outside R range.** When **R** is up, you can fire 3 needle volleys total. Stay within 1000 units of the fight edge so you can always recast **R** on a low-HP target instead of running into death.
- **Buying ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads vs no CC.** Default boot is ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes; only swap to Mercury's if there are 3+ hard-CC threats or a fed AP mid laner. Defensive boots cost you ~20% of your damage output.

## Advanced tip

Use **W** mist to fake out skillshots (= abilities you have to aim manually as a line or area, the opposite of point-and-click): when an enemy with a long-range stun or root (Lissandra **E**, Sett **W**, Morgana **Q**) is winding up the cast animation, drop **W** at the edge of their cast range and walk through it. The mist makes you untargetable from outside — they often eat the cast and you get 4 free seconds of un-CC'd auto-attacks. The trick is timing **W** on their wind-up frame (the animation before the spell goes out), not after they've already committed.
