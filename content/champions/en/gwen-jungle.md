---
title: "Gwen Jungle Build & Guide — Patch 16.9"
slug: "gwen-jungle"
language: "en"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Gwen jungle guide for League of Legends Patch 16.9: clear path, Scuttle and Drake timings, gank routes, AP bruiser build, key matchups, power spikes, and common mistakes."
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
      description: "Cone scissor strike with up to 6 snips. The center cone deals true damage and reapplies the passive on every snip — main camp clearer and tank-shredder."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Drops a 4-second mist zone. Enemies outside cannot target Gwen — only enemies who step into the mist can. Defensive reset and gank setup."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Short dash that grants attack speed, attack range, and on-hit AP for a few seconds. Cooldown partially refunded on champion hit — gank gap-closer."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs AD assassins / divers (Zed, Khazix, Rengar) — 2.5s stasis covers the W cooldown and breaks burst windows"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs 4+ tank/bruiser comps — replaces Riftmaker for permanent percent-max-HP burn from minute 1 of every fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Lissandra R, Malzahar suppression, Veigar stun)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs kiting comps (Vayne, Ezreal) — extra ability haste and movement speed for sticking to mobile carries"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Clear minute 3-30, hit Riftmaker around minute 16, force objective fights at level 6 with W mist setup. In teamfights, melt the front line with on-hit Q true damage during a 4-second mist window."
  weakness: "Weak invade target levels 1-3 (no burst, single dash). Hard countered by early aggressive junglers like Lee Sin and Elise that punish her bad first clear timer if invaded."
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
    primary_rationale: "Precision primary: Conqueror stacks during long camp clears and Q + auto skirmishes, granting adaptive damage and healing. Triumph rewards multi-kill ganks, Legend: Alacrity boosts the on-hit window from E, Last Stand adds damage when low HP."
    secondary_rationale: "Resolve secondary: Second Wind regenerates HP between camps and after invades, Overgrowth scales raw HP into late game where Gwen's W-mist teamfights shine."
    secondary_alternative: "Vs heavy AP enemy mid laners with poke, swap Resolve to Sorcery with Manaflow Band (mana sustain for Q clears) and Transcendence (extra ability haste for more E refunds and faster R cooldown)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank junglers without high single-target damage"
      reason: "Q applies percent-max-HP true damage that ignores armor; tanks have huge HP pools she shreds in 3-4 Q hits during a sustained 1v1 inside W mist."
    - examples: ["master-yi", "shaco"]
      archetype: "Squishy assassins without disengage"
      reason: "W mist denies their target lock during an all-in. They commit, eat the Q true damage cone in mist, and have no second escape because they spent their dash."
    - examples: ["kha-zix", "rengar"]
      archetype: "Burst-window assassins"
      reason: "Their burst combo arrives in 1.5 seconds, but W mist drops them out of target range mid-leap. Once they whiff their burst window, Gwen wins the extended trade easily."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Early invader junglers"
      reason: "Gwen has no burst at level 1-3 and a slow first clear. Invader junglers walk into her camps and kill her before passive stacks come online."
    - examples: ["kayn", "viego"]
      archetype: "High-mobility outscalers"
      reason: "Both have mobility tools (Kayn wall-walk, Viego dash on hit) that ignore W mist range; they outscale Gwen's tempo in late-game skirmishes."
    - examples: ["kindred", "graves"]
      archetype: "Ranged kite junglers"
      reason: "Kindred and Graves auto-attack from outside W mist's protection range. Gwen has to commit E to enter their range, and they kite her dash with their own movement tools."
---

## Overview

Gwen is an AP bruiser jungler — a melee champion that scales on Ability Power (the AP stat), tanks some hits in melee, and wins long fights instead of bursting a target in two seconds the way an assassin would. As a "skirmisher", her game is the extended duel: she shreds tanks and bruisers with **true damage** (damage that ignores both armor and magic resist), heals during fights from her passive, and resets her dash cooldown when she lands a hit on a champion. Her **W mist** is the kit's signature: a 4-second zone that makes her untargetable to anyone outside it — a unique gank and counter-engage tool.

The game plan is: complete a clean first clear, contest the river crab Scuttle (a small monster in the river that gives vision and a movement-speed buff when killed), gank a low-mobility lane around level 4-5 with the W mist, then snowball — turn an early lead into a much bigger one — into the first drake fight at minute 5-7. Gwen is a mid-to-late game champion: she's weakest in the first 3 minutes, so don't get caught at the enemy's red buff (the small camp giving a damage-over-time auto-attack effect) without your team knowing.

## Recommended Build

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (the AP-friendly jungle pet — burns enemy champions with on-hit damage during ganks) plus **Smite** (the summoner spell every jungler takes — a quick burst attack on a single target, used to clear monsters faster and to steal objectives like Drake or Baron).

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from your jungle starter. Auto-evolves around minute 3-4; the on-hit pet damage adds magic damage to your basic attacks, lining up with Gwen's AP scaling.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — your main item. After 2 seconds in combat, part of your damage converts into true damage (the "Void Corruption" passive), and you gain "omnivamp" (heal back a portion of any damage you deal — abilities and basic attacks both). Built for long fights, which is exactly what Gwen wants.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (= ignores part of the enemy's magic resist). Your damage hits harder against squishies (champions with low defenses, typically the enemy carries).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed plus AP plus a passive that adds bonus magic damage to every basic attack. Combined with **E** (the on-hit window from Skip 'n Slash, where each basic attack also applies AP-based magic damage) you become a sustained DPS turret in extended fights.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier. Turns Gwen from "tanky DPS" into a genuine carry.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs AD assassins / divers (Zed, Kha'Zix, Rengar — divers are champions that jump on top of your back-line carries). Active gives 2.5 seconds of stasis (you become untargetable but can't act either) — long enough to break their burst window and reset W cooldown.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs 4+ tank/bruiser teams. Replaces Riftmaker as your first item if you need permanent percent-max-HP burn from the start of every fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC (= "crowd control": stuns, roots, charms, anything that locks your character). Lissandra **R**, Malzahar suppression, Veigar stun. The shield blocks one hostile ability outright.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs kiting comps (Vayne, Ezreal). Extra ability haste plus movement speed for sticking to mobile carries.

**Boots:** Sorcerer's Shoes default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** if the enemy team has 3+ AD threats. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC (3+ stuns or knockups).

**Skill order:** Max **Q** first (true damage and AP scaling — your main camp clearer), max **E** second (cooldown and on-hit damage), put **W** last. Take **R** at levels 6, 11, 16. Start **Q** at level 1 for the safest first clear (the Q cone hits the entire small monster pack), take **E** at 2 for camp-to-camp mobility, then **W** at 3 for safety before Scuttle.

**Runes:** Primary **Precision** with **Conqueror** (a keystone that stacks during long fights to grant adaptive damage and healing — perfect for Gwen's sustained-DPS playstyle), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** with **Second Wind** and **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Key matchups

- **Lee Sin:** Hard early, neutral late. He invades hard at level 2-3 when Gwen has no W yet. Start the camp opposite to your spawn (red buff if blue side; blue buff if red side) so you're far from his typical invade path. After level 6 you outscale him in any 1v1 inside W mist.
- **Master Yi:** Free scaling matchup. His Alpha Strike (**Q**, a multi-dash that makes him briefly untargetable) doesn't ignore your W mist passive — he's still locked out from outside the mist. Force fights at level 6 around drake; once he commits with Highlander (his **R** ult, granting huge attack speed and movement speed), drop W and Q-spam him during the duel.
- **Sejuani:** Rough matchup. Her **R** is point-and-click (= no aim required, the spell just locks onto a target) and freezes you in place during your **E** dash. Wait for her to use **R** on someone else, then commit with W. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** earlier than usual.
- **Kha'Zix:** Even-favorable. He'll try to evolve "isolation damage" — bonus damage when his target has no nearby allies — and hunt your carries. W mist breaks his target lock during a leap (his Q dash). When he commits **R** stealth + Q burst, drop W on the carry instead of yourself, and the damage cancels.
- **Kindred:** Bad matchup. She kites (= moves backwards while attacking, keeping distance) your dash with her **Q** dash, and her ult zone (Lamb's Respite, a circle that prevents allies from dying inside) saves any teammate you dive (= chase under tower). Skip her invade range, take objectives during her **R** cooldown windows, and ask top laner for help in skirmishes.

## Power spikes & win conditions

- **Level 3:** First **W** unlocks. Now you can gank lanes — drop W on the laner, dash in with E, Q + AA in mist. The mist denies clean targeting on you for 4 seconds, the longest gank-protection window in the jungle.
- **Level 6:** First **R** unlocks. The needle volley applies your passive's percent-max-HP magic damage to every champion hit, and the slow chains your auto-attacks. Force a drake fight or a counter-gank around minute 8-9 — your kit hits its first major spike.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 16-18):** The omnivamp + true damage spike. Now you can solo-dive most squishies and survive 1v2 ganks if your W is up.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth complete (~ minute 24-26):** DPS spike. With **E** active your auto-attacks fire much faster and apply on-hit AP — the moment to step into every teamfight near drake / Baron and let your team peel for you.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 30+):** Carry phase. Your auto-attacks shred 25%+ HP per hit on the enemy front line. Any teamfight where your team protects you ("peels" enemies off you) ends in a win.

## Common mistakes

- **First-clearing on the same side as the enemy jungler.** Gwen's first clear is slow and her early HP low; an invade at her second buff usually means a lost flash or a death. Start opposite the enemy spawn until you scout their path.
- **Activating W too early in a gank.** Mist is a 4-second window — if you drop it before the laner is locked into a fight, the enemy walks out and you have nothing left. Land **E** auto first, then **W** as the enemy reaction starts.
- **Q-ing the camp from outside the cone.** **Q**'s damage zone is the center of the cone (the true-damage tick). Position so the camp sits in the inner 30 degrees of the arc — you triple your DPS on the first cast and clear ~3 seconds faster.
- **Smite-flipping objectives without R.** Gwen's smite-fight is mediocre when **R** is down. Force objectives only when your ult is up and at least one needle volley is reserved for the enemy jungler.
- **Auto-attacking outside R range.** When **R** is up, you can fire 3 needle volleys total. Stay within 1000 units of the fight edge so you can always recast **R** on a low-HP target instead of running into death.

## Advanced tip

Use **W** mist to fake out skillshots (= abilities you have to aim manually as a line or area) during ganks: when an enemy laner with a long-range stun or root (Lissandra **E**, Morgana **Q**, Veigar **E**) is about to react to your **E** dash, drop **W** on the path between you and them right after entering range. The mist makes you untargetable from outside — they often eat the cast and you get 4 seconds of un-CC'd damage. The trick is timing **W** on the wind-up animation (the cast frames before the spell goes out), not after it has already landed.
