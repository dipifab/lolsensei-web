---
title: "Bel'Veth Jungle Build & Guide — Patch 16.9"
slug: "belveth-jungle"
language: "en"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Bel'Veth jungle guide for League of Legends Patch 16.9: starter kit, on-hit core build, key matchups, power spikes, common mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Permanent attack speed stacks from large minions, monsters, and champion takedowns. Casting any ability also gives a short attack speed buff."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Short dash that damages enemies it passes through. Each of the four directions has its own cooldown that scales down with attack speed."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Tail slam that knocks up and slows. Hitting a champion instantly resets the Void Surge cooldown in that direction."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channeled storm of slashes that target the lowest-HP enemy. Grants damage reduction and lifesteal during the channel; recast to stop early."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Passive: every second auto on the same target deals bonus true damage, stacking forever. Active: consume a Void Coral (champion or epic monster takedown) to enter true form for extra HP, attack range, and attack speed."
      dd_spell_id: "BelvethR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs heavy AP comps (Karthus, Ahri, Lissandra) — magic resist plus on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "when behind or vs poke comps — first auto crits and heals, restores tempo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when split-pushing a side lane alone vs disengage comps — bonus damage to towers and minions"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs single-target AP burst (Veigar, LeBlanc, Syndra mid) — magic shield triggers below 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Stick to a single target with Q dashes and R true-damage stacks until they fall. Pick fights at level 6 once R is online, especially after a Rift Herald or Baron takedown for the longer ult duration."
  weakness: "Hard CC (stuns, knock-ups, suppress) cancels Q dashes and locks her in place. Without R active or with no target to commit on, she has weak ranged threat and falls off vs heavy peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank junglers without a dash"
      reason: "Bel'Veth's on-hit pattern with Terminus shreds their armor and magic resist; she sticks to them with Q dashes around their hitbox while they have no way to disengage from her."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Squishy ranged junglers"
      reason: "Four directional Q dashes close every kite attempt: she gets in melee range before they finish a single rotation of their range tools."
    - examples: ["master-yi", "shyvana"]
      archetype: "Scaling skirmishers without early CC"
      reason: "She wins the early jungle skirmishes (skirmish = 1v1 or 2v2 fight in the jungle) before they reach their power spike, then converts that lead into objectives."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Junglers with point-and-click hard CC"
      reason: "Bel'Veth's Q dash does not dodge targeted abilities. Once she eats a Sejuani R or Vi R, she is locked in place and her on-hit pattern stops cold."
    - examples: ["rammus"]
      archetype: "Anti-attack-speed tanks"
      reason: "Rammus's passive thorns and W steroid punish her sustained auto-attacks: she damages herself trying to DPS him while he holds objective control."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Strong early invade junglers"
      reason: "Bel'Veth's first clear is okay but not bullying; they invade her at level 3 before she has Q maxed, kill her once, and snowball from there (snowball = a small early lead that grows into a large one over time)."
---

## Overview

Bel'Veth is an on-hit fighter (= her main damage comes from basic attacks plus item effects that trigger on each attack, not from her abilities) who turns her auto-attacks into a constant stream of dashes. Her **Void Surge (Q)** has four directional cooldowns that all scale down with attack speed, so the more attack speed she stacks (= accumulates), the more often she dashes. Her **Endless Banquet (R)** has two faces: a passive that adds true damage on every second basic attack to the same target (true damage = damage that ignores armor and magic resist), and an active form that consumes a Void Coral — a piece left on the ground when she gets a takedown (kill or assist) on a champion or an epic monster like Rift Herald or Baron — to gain extra HP, attack range, and attack speed for a long stretch.

Her game plan is to snowball through the jungle (snowball = turn a small early lead into a much bigger one). Clear camps, gank a lane (gank = ambush a laner with help from the jungler), fight at level 6, eat the Void Coral, then chain the next fight using the power form. She is not a scaling champion (scaling = getting stronger as the game gets longer): if the early game stalls, she becomes a worse Master Yi.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade is the jungle starter: as you kill jungle monsters it builds toward an upgrade that boosts **Smite** (the summoner spell every jungler takes — a quick burst attack on a single target, used both to clear monsters faster and to steal objectives from the enemy team).

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — every third basic attack adds bonus physical damage on-hit; perfect for a champion who attacks faster than anyone else in the game.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flat attack speed that compounds her Q cooldown reduction.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — on-hit bonus damage that switches between armor pen (ignoring part of the enemy's armor) and magic pen (ignoring part of magic resist); also gives stacking defenses while she is in melee range (= close enough to swing a sword), which for Bel'Veth is always.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (heals you for a percentage of the damage you deal) and an overheal shield (extra healing turns into a temporary shield on top of your HP). The survival you need to channel **Royal Maelstrom (E)** without dying.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — converts every other auto-attack into two on-hits in one swing, doubling the value of Kraken Slayer and Terminus.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — into heavy AP compositions (Karthus, Ahri, Lissandra; AP = champions whose damage is mostly from spells, not auto-attacks). Gives magic resist plus on-hit magic damage, replacing Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — when behind or vs poke comps (poke = enemies that whittle down your HP from a distance before the fight even starts). The first auto on each target lands a critical hit (crit = a hit that deals roughly double damage) and heals you, giving you tempo back in skirmishes (skirmish = a small 1v1 or 2v2 fight in the jungle, not a full 5v5 team fight).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — into healing-stacking comps (Soraka, Aatrox, Dr. Mundo, Vladimir). Applies Grievous Wounds on every auto (Grievous Wounds = a debuff that cuts the target's healing in half).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — when you have a lead and the enemy team has weak waveclear (no easy way to kill minion waves). Pushes side lanes (the top and bot lanes, away from the middle) faster than anything else and gives you bonus damage to towers, perfect for split-pushing (split-push = pressuring a side lane alone while your team plays the other side of the map).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into single-target AP burst (burst = a lot of damage delivered in 1-2 seconds; e.g. Veigar, LeBlanc, Syndra). The shield triggers automatically below 30% HP and absorbs a chunk of the next magic damage you take.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only into double-AD comps (= the enemy team has two strong physical-damage carries, e.g. Caitlyn + Master Yi).

**Skill order:** Max **Q** first, then **E**, then **W**. Each rank of **Q** lowers its base cooldown — that is your damage and your mobility in one slot. **R** at levels 6, 11, 16.

**Runes:** Runes are passive bonuses you choose before the game starts; they shape your early game stats and your damage style. Primary **Precision** (the auto-attack-focused tree) with **Press the Attack** (after three basic attacks on the same target, the next ability or auto deals bonus damage and the target takes more damage from everyone for a few seconds), **Triumph** (heal a bit when you score a takedown), **Legend: Alacrity** (extra attack speed per takedown), **Coup de Grace** (more damage to low-HP targets). Secondary **Resolve** with **Second Wind** (regenerate HP after taking damage) + **Revitalize** (heals on you are stronger) for sustained jungle skirmishes, or **Inspiration** with **Magical Footwear** (free boots at minute 12) + **Cosmic Insight** (lower cooldowns on summoner spells) if the game is calm and you want gold/timer optimization.

## Key matchups

- **Lee Sin:** Strong early invade jungler (= a jungler who walks into your jungle to kill you before you have items). Track him with vision on your buffs, and avoid fighting him before level 4 — he wins that fight every time.
- **Master Yi:** Scaling rival. Kill him before minute 20 or accept that he out-damages you in the late team fight; force objective trades early (= push a Drake or Herald while he is busy on the other side of the map) so he never gets to four items.
- **Karthus:** Free matchup. His ult (R, also called ultimate — the last and strongest ability) deals damage to your whole team across the map, but he has zero mobility — Q on top of him and he dies in one rotation (= one full sequence of your abilities). Counter-jungle him (= steal his jungle camps) after every gank he commits to.
- **Sejuani:** Rough matchup. Her R is point-and-click (= it just locks onto a target, no aim required) and freezes you in place. Never engage her (engage = start the fight) without **Flash** ready, and never without your team in position to peel for you (peel = an ally who stops the threat from reaching you).
- **Rammus:** Hard counter (= specifically built to ruin your matchup). His passive thorns reflect part of your auto-attack damage back at you; his W is a defensive steroid (steroid = an ability that temporarily multiplies a stat — here, his armor and reflected damage) that doubles the reflection. Avoid solo skirmishes, ping your team, and farm the opposite side of the jungle until you finish Terminus.

## Power spikes & win conditions

A power spike is a moment when the champion suddenly becomes much stronger than a minute earlier — usually when a new ability or item comes online.

- **Level 3:** First full clear done, **Q-W-E** all unlocked. You can answer most ganks with the W knock-up (= the ability launches enemies a short distance into the air, briefly stunning them) and Q out, but you cannot yet pick fights — focus on a clean clear and an early Scuttle (the river crab neutral monster: kill it for vision and a small movement-speed buff in the river).
- **Level 6:** **Endless Banquet (R)** comes online. After your next champion takedown or epic monster (Rift Herald, Drake), you eat the Void Coral and gain a long power form (= a buffed transformation that makes you a temporary boss). Force a fight or a dragon immediately.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ minute 10-12):** First real damage spike. You can now duel most junglers in their own jungle and dive a low-HP laner (dive = walk under the enemy tower to kill them anyway, eating tower shots in the process).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus completion (~ minute 16-18):** With three items you stop caring about armor or magic resist on most squishy targets (squishy = champions with low defenses, like ADCs and most mages). Group with the team for the second drake and Baron timer.
- **Void epic monster (Rift Herald or Baron):** Your R's active form lasts much longer when you eat a Void Coral from an epic monster (epic monster = a big neutral objective, much stronger than a normal jungle camp). Try to take Herald with your team around minute 10-14 so you push two waves with the power form still active.

## Common mistakes

- **Spamming Q in the same direction.** Each of the four directions has its own cooldown. Standing still and pressing Q forward four times wastes three of them. Dash forward, dash sideways, dash back — you are doing more damage and getting more attack speed at the same time.
- **Holding E for the full duration every time.** **Royal Maelstrom (E)** is a channel (= an ability where Bel'Veth stands still and keeps casting, vulnerable to interruption) that can be ended early by pressing it again. Use it to soak a single rotation of damage (e.g. a Veigar W cage) and then end the channel immediately to start auto-attacking again. Holding it for the full time means zero auto-attacks for two seconds.
- **Pressing R without a Void Coral nearby.** The active form lasts roughly 30-60 seconds depending on the source. Without a coral the form is wasted; the passive true damage on every second auto is what you want during regular fights.
- **Trying to 1v1 the enemy jungler at level 2.** Her clear is fine but her early duel is mediocre. If a Lee Sin or Xin Zhao invades you at level 2-3, leave the camp and ping your team — winning the duel is not realistic and dying gives them the snowball.
- **Ignoring tempo on Void Coral.** When a coral drops, you have a short window to consume it. Kill an enemy at minute 6, ignore the coral, and you wasted the only reason you killed them. Always walk over the coral before recalling (recall = the channeled ability that teleports you back to base).

## Advanced tip

Use **Above and Below (W)** as a Q reset. The tooltip says hitting a champion with **W** refreshes the **Void Surge (Q)** cooldown in that direction — so the optimal pattern in a 1v1 is **Q forward → AA → W on the target → Q backward to safety** with a fresh forward Q ready the moment you flip around. Pros use this loop to chain three dashes in two seconds, which is more than any other jungler in the game has access to.
