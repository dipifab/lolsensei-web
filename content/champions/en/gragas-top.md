---
title: "Gragas Top Build & Guide — Patch 16.9"
slug: "gragas-top"
language: "en"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Gragas top lane guide for League of Legends Patch 16.9: starter kit, AP bruiser build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Casting any ability heals Gragas for a small amount (5-second internal cooldown). Free sustain in lane that lets him out-trade poke matchups over time."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rolls a cask to a target spot. Recast to detonate, or it explodes after 4 seconds. Damage and slow scale with charge time — wait for max charge before detonating for poke trades."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel for 1 second to gain 30% damage reduction for 3 seconds and empower the next basic attack with bonus magic damage. Your main lane trading tool."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash that stops on the first enemy hit, dealing AOE damage and stunning them for 1 second. Your gap-close, escape, and only hard CC — never use it to clear a wave."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Throws a cask that knocks enemies away from the impact center. In top lane, used to flip a top laner into your jungler's gank or to peel a tower-dive."
      dd_spell_id: "GragasR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "against AD assassins or split-push duelists (Camille, Fiora): stasis denies their execute window after they dash on you"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "against single-target magic CC (Lissandra R, Malzahar suppression): the spell shield blocks the lockdown that ends your engage"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "against AD-heavy lanes (Renekton + Kha'Zix, Aatrox + Lee Sin): physical damage reduction outvalues tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "against healing-stacking comps (Aatrox, Vladimir, Dr. Mundo): magic penetration plus a healing-reduction zone tied to R"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Outsustain melee bruisers in lane with Happy Hour and W damage reduction; reach Riftmaker around minute 13, then look for an R flip into your jungler's gank to snowball a tower or to flip a Drake fight."
  weakness: "Long-range artillery and ranged top laners (Vayne, Quinn, Teemo, Kennen) chip you outside Q range. Without E available you have no engage tool and no escape — committing E for harass is throwing the lane."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary instead of Sorcery: Gragas trades by going melee and needs HP, not max burst. Aftershock procs when Body Slam stuns, granting resistances when the laner counter-engages. Demolish turns a forced back into a tower plate, Conditioning and Revitalize scale him late."
    secondary_rationale: "Sorcery secondary: Manaflow Band sustains mana for Q poke spam through the laning phase, and Transcendence pushes Ability Haste past the Cosmic Drive spike for shorter E and R cooldowns in mid-game side lane."
    secondary_alternative: "Against ranged top laners (Vayne, Teemo, Quinn) where lane sustain matters more than damage, swap Sorcery to Inspiration with Biscuit Delivery (free potions) and Time Warp Tonic (potion sustain plus Movement Speed) for a healing-focused lane build."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Melee bruisers without dash"
      reason: "They have to walk up to last-hit; Gragas Q-W-AA poke chips them out of all-in range, and his W damage reduction makes their pre-6 commit weaker than Gragas's counter-trade."
    - examples: ["kennen", "vladimir"]
      archetype: "Squishy AP top laners"
      reason: "Drunken Rage's flat damage reduction soaks Kennen's stun-burst combo and Vladimir's Q poke. Gragas can E-AA-Q in retaliation while their resources are committed to the trade window."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Channel-reliant skill-shot mages"
      reason: "Body Slam interrupts Mordekaiser's Q wind-up and Ryze's combo channel, then Gragas walks out with W damage reduction. Both lose lane priority once their cast cycle is broken."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Ranged top laners"
      reason: "They auto-attack Gragas from outside Q range and walk away from his E commit. Without a way to close the gap repeatedly, Gragas gets chipped to half HP before level 3 and forced to back."
    - examples: ["fiora", "camille"]
      archetype: "True-damage bruisers with execute pressure"
      reason: "Fiora vital procs deal true damage that ignores Gragas's resistances; Camille's R isolates him for a percent-HP true-damage execute. Gragas's tank stats don't translate into 1v1 survival against either."
    - examples: ["malphite", "ornn"]
      archetype: "Hard-engage tank top laners"
      reason: "Their CC chains for longer than Aftershock's window. They can match Gragas's engage with their own and out-scale him into late game with built-in resistance steroids."
---

## Overview

Gragas top is an AP bruiser (a fighter that builds AP for damage but stacks enough HP to survive front-line dives) who wins lane through poke (chip damage from a safe distance) and sustain (passive HP regen during fights), then transitions into a teamfight engage role around **Explosive Cask (R)**. **Happy Hour (P)** gives him passive healing every time he casts an ability, so a Q → W → AA (auto-attack) trade pattern bleeds the enemy laner without bleeding Gragas back. **Drunken Rage (W)** is a 30% damage reduction window — his most underrated tool, because it lets him absorb the enemy's all-in (full damage commit) and counter-trade with a free **E** stun.

Game plan: bully melee lanes with Q poke until level 6, then look for **R** flips that throw the enemy laner into your jungler's gank or into your tower. From there, scale (grow stronger with items and levels) with **Riftmaker** and **Cosmic Drive**, group at minute 25, and act as the team's primary engage (the champion who starts the fight). Avoid ranged matchups — if you're locked into one, play passive, farm under tower with Q, and call your jungler.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Standard sustain start that lets you tank Q poke from ranged matchups long enough to reach Riftmaker.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — sustained AP burn item with omnivamp (life-steal that works on all damage, not just basic attacks). Gragas's drawn-out trades convert this into the strongest single-item spike in his roster.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — tenacity reduces stun duration. Default boots in top lane because most matchups bring at least one CC threat (Renekton stun, Camille root, Sett stun).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus a Movement Speed steroid after damaging a champion. Lets you weave around the fight to land a second **E** stun before the first cooldown finishes.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus a percent-max-HP magic damage burn that ramps the longer you fight. The fourth item against any team with two or more frontliners.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier. Take it as your fifth item once the team has grouped and you're committing to teamfight burst over splitpush.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — against AD assassins (Zed, Talon flank) or split-push duelists (Camille, Fiora). Pop the active right after **R** to deny their execute window.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — against single-target magic CC (Lissandra **R**, Malzahar suppression). The spell shield blocks the lockdown that would otherwise cancel your **R** flip.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — against AD-heavy lanes (Renekton + AD jungler). Replaces Mercury's Treads when there's no major CC threat.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — against healing-stacking comps. The R-active drops a healing-reduction zone tied to your knockback.
**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** are default. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** in AD-heavy games, or ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** if the lane is one-shot-friendly and you want to swap to a damage-first build.

**Skill order:** Max **E** first (your stun and main damage), **Q** second (poke and waveclear), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Key matchups

- **Darius:** Walk up to last-hit only when **W** is up; Q-poke him before each minion wave. His all-in is brutal pre-6 — never let him E-Q chain into you with Aftershock-bait positioning.
- **Renekton:** Avoid level 1-2 trades where his fury-stun snowballs HP advantage. Match him at level 3 with **W-E** counter-engage; once he commits W stun, your damage reduction soaks the burst and you trade even.
- **Vayne:** Hard counterpick (a champion picked to specifically beat yours in lane). Play under tower with Q poke, ask jungler for early ganks (level 3-4), and plan for ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** rush to mitigate her empowered auto-attacks after she dashes (her Q lets her tumble and reload her crossbow shot).
- **Camille:** Avoid sidelane 1v1s after she completes her first core item (around minute 11-13); her R isolates you (cuts you off from teammates inside a wall) for a percent-HP execute. Group with team and force teamfights where ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** denies her R damage window.
- **Malphite:** Even pre-6, hard scale post-6 because his **R** matches yours and his armor stacking shrugs your AP. Roam mid with **R** flips when his ult is down — that's your only window to tilt the matchup.

## Power spikes & win conditions

- **Level 3 (E unlocked):** First all-in window. With **W** damage reduction up and **E** stun ready, you can punish any melee enemy that walks too far up to last-hit.
- **Level 6 (first Explosive Cask):** Power spike. Set up an **R** flip into your jungler's gank — knock the enemy top from his tower line into your river side for a free kill.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minute 13-15):** Lane-flipping spike. Sustained burn plus omnivamp turns extended trades into HP gains; force a 1v1 if you're facing a non-counter matchup.
- **3 items + boots (~ minute 24-28):** Teamfight peak. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** make Gragas a near-unkillable engage threat. Group with team for objective fights.

## Common mistakes

- **Using E to clear waves.** **E** is your gap-close, escape, and only stun. If you Body Slam into a minion to push, the enemy laner gets a free 14-second window to all-in you. Use **Q** to push waves; **E** is for engages and escapes only.
- **Throwing R as opening damage.** **R** scatters the enemy team. If you cast it without a placement plan, you knock the enemy laner away from your follow-up. Always picture where the target should land before pressing **R** — knock them into your team or your tower, never into their team's frontline.
- **Trading without W ready.** Every fair Gragas trade starts with **W**. Without the 30% damage reduction window, every melee bruiser out-trades you. If **W** is on cooldown, last-hit and disengage.
- **Force-ganking solo with R.** Solo **R** flips into the enemy team without team follow-up are throws. The cask repositions the target, but Gragas alone can't kill a fresh-HP carry — it's an enabler for your team, not a duel finisher.
- **Maxing W instead of E.** **W** does not give Gragas his stun, his gap-close, or his clear speed — **E** does all three. Max **E** first every game.

## Advanced tip

Practice the **R-Flash combo**: cast **R** at the enemy laner's feet, then **Flash** mid-cast to reposition the cask center next to your team or tower. The cask still detonates from the Flashed location, so a target standing in their own tower line can be flipped under your tower for a free kill. This is the highest-skill-ceiling Gragas mechanic and is worth dedicated practice tool reps before attempting it in ranked solo queue.
