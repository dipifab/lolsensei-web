---
title: "Zed Mid Build & Guide — Patch 16.9"
slug: "zed-mid"
language: "en"
patch: "16.9"
champion: "zed"
role: "mid"
last_updated: "2026-04-29"
description: "Zed mid lane guide for League of Legends Patch 16.9: AD assassin lethality build, runes, key matchups, power spikes, common mistakes, and an advanced tip."
quick_learn:
  champion_dd_id: "Zed"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Contempt for the Weak"
      description: "Zed's basic attacks against low-HP enemies deal bonus magic damage. Fires once every few seconds per target."
      dd_spell_id: "Zed_Passive"
    - key: "Q"
      name: "Razor Shuriken"
      description: "Linear skillshot through enemies. Both Zed and his shadows throw a shuriken — overlap them on one target to triple the hit."
      dd_spell_id: "ZedQ"
    - key: "W"
      name: "Living Shadow"
      description: "Sends a shadow forward; recast to swap places with it (shadow swap = teleport to where the shadow stands). Main mobility tool."
      dd_spell_id: "ZedW"
    - key: "E"
      name: "Shadow Slash"
      description: "Short AOE slash from Zed and every active shadow. Slows enemies hit and refunds W cooldown per champion hit."
      dd_spell_id: "ZedE"
    - key: "R"
      name: "Death Mark"
      description: "Zed dashes onto a champion untargetable, marks them, then 3s later the mark detonates repeating a portion of damage Zed dealt while it was active."
      dd_spell_id: "ZedR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "swap into squads with creep walls or extra waveclear needs — the active is a second small burst window"
    - dd_id: "6676"
      name: "The Collector"
      against: "vs squads with very low-HP carries (ADC + mage backline): the execute closes kills your raw burst leaves at 50 HP"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, LeBlanc) — magic shield blocks the one-shot that would kill you mid-R"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Lucidity vs double-AD comps (two physical damage threats like Yasuo + Caitlyn)"
  base_combo: ["W", "E", "Q", "R", "AA"]
  win_condition: "Snowball mid (build a kill lead before minute 12) by trading with W-E-Q. After level 6, side-lane to assassinate isolated enemies with R + ult flash combo (Flash mid-ult to surprise the target)."
  weakness: "Hard CC during the R dash freezes you on the target with no shadow swap. Grouped enemies with peel (Janna, Lulu, Braum) cancel the assassin window before damage repeats."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8138, name: "Eyeball Collection", icon_path: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["lux", "orianna", "viktor", "syndra"]
      archetype: "Immobile mid-range mages without dash"
      reason: "Zed's W shadow swap closes the gap on a single skillshot dodge. Once in melee they have no escape from E slow into Q and the level-6 R deletes them before they cast a long ulti like Final Spark."
    - examples: ["xerath", "ziggs"]
      archetype: "Artillery mages with low HP and weak escape"
      reason: "Long-range mages stand still to channel poke; Zed sends the shadow forward, Q-pokes from 900 range, and at six R-flashes onto them through their poke window."
    - examples: ["karma", "lulu", "morgana"]
      archetype: "Mid-laners shifted from support pool"
      reason: "They start with low base AD and no waveclear range. Zed shoves with double-Q and roams bot or top while they are stuck under tower clearing one wave at a time."
  counterpicks:
    - examples: ["malzahar", "kassadin"]
      archetype: "Mid-laners with built-in spell shield or suppression"
      reason: "Malzahar's passive eats your Q + E proc, then his R suppression locks you mid-dash with no shadow swap available. Kassadin's E silence cuts your combo on the W swap recovery frame."
    - examples: ["lissandra", "annie", "veigar"]
      archetype: "Burst mages with point-and-click crowd control"
      reason: "Their stun lands the moment you R in. The 3-second mark window expects you to keep dealing damage — locked down, you produce nothing for the detonation."
    - examples: ["galio", "pantheon"]
      archetype: "Bruiser-mid with on-demand magic damage reduction or stun"
      reason: "Galio's W absorbs your full burst as a shield and stuns you; Pantheon's W stuns through the R dash. Both flatten your kill window before you can W-out to safety."
---

## Overview

Zed is a melee AD assassin (an assassin is a high-burst champion designed to delete a single squishy target — squishy = a champion with low defenses, like ADCs and most mages). His kit revolves around a shadow that he sends forward and can swap places with: that "shadow swap" gives him the only mobility tool in his entire kit, so every play is a question of where to put the shadow. **Razor Shuriken (Q)** is his main poke and damage; **Living Shadow (W)** is the swap; **Shadow Slash (E)** is a short AOE slow that also refunds **W** cooldown per champion hit; **Death Mark (R)** is the kill button — Zed dashes untargetable to a champion, marks them, and after 3 seconds the mark repeats a portion of all the damage he did during the window.

His mid-lane game plan: shove the wave with Q-W-Q double-shuriken, force trades by sending the shadow at a sidestep angle so the enemy has to dodge two shurikens at once, and at level 6 commit to side-lanes for assassinations using the **ult flash combo** (Flash during the R dash to land on the target's blind side, a classic Zed move that catches positioning mistakes). You snowball (build an early kill lead so each kill funds more items and more kills) by killing isolated targets, not by winning teamfights — Zed is built around the 1v1 pickoff (eliminating a single enemy isolated from their team).

## Recommended Build

**Starting items:** Doran's Blade + Health Potion. Skip the magic-resist Doran's Shield unless you face a heavy AP poke matchup.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first item rush. Two-hits-on-target passive matches Zed's Q + auto trade pattern, and the shield gives you survival headroom for the R commit.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste boots for shorter R cooldown and faster summoner spell refresh on Flash for ult flash combo.
3. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — lethality (a stat that gives flat armor penetration against low-armor targets, basically free damage on squishies) plus the active movement speed boost for catching up to roaming targets.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield blocks the first enemy ability after a short channel. Saves you from a Malzahar R, Lissandra R, or any single point-and-click CC that would lock you down inside your own R dash.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — late-game armor penetration that scales with the target's armor. The damaging-ability slow lets your Q chase a target who survived the first burst.

**Situational items:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — when you need extra waveclear or a second small burst window from the active.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — vs squads with very low-HP carries: the execute passive (targets below 5% HP die instantly) closes kills your burst would otherwise leave at 50 HP.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (Syndra, Veigar, LeBlanc): the magic shield blocks the one-shot that would kill you mid-R.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — swap boots vs double-AD comps (two physical damage threats like Yasuo + Caitlyn).

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default. Switch to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vs double-AD; keep Lucidity vs heavy AP or mixed comps.

**Skill order:** Max **Q** first (main damage and waveclear), **E** second (slow + W cooldown refund), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Eyeball Collection**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Electrocute procs after three quick hits on the same target — exactly Q-W swap-Q in a single trade — and Ultimate Hunter shortens R cooldown so you get a second assassination window per side-lane rotation. Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Key matchups

- **Lux:** Push the wave with double-Q and dodge her Q binding sideways with W. Once she misses Q, swap forward and trade with E + Q + auto. Buy ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** to block her R snipe at finishing HP.
- **Yasuo / Yone:** Wind Wall blocks your Q. Send the shadow first and Q from a different angle so the wall covers only one shuriken. Avoid all-in pre-6: their passive shield negates your Electrocute proc.
- **Malzahar:** Hard counter. His passive shield eats your first Q + E proc, his R suppression locks you out of W swap. Farm safe, ask for ganks, build ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** before committing to any all-in.
- **Galio:** Avoid trading at melee range — his W charge stuns you. Poke from Q range only, push the wave to roam, and after-6 only commit on R if his W is on cooldown.
- **Sylas:** Roam priority race. He steals your R as soon as you ult — never R him first. Hold R for the second target in a 2v2 skirmish and kill Sylas with W-E-Q-AA before he can steal it.

## Power spikes & win conditions

- **Level 2:** With Q + W you can shadow-poke from 900 range. Push the wave fast and harass on the cooldown of Q.
- **Level 6:** First **Death Mark** unlocks your ult flash combo. An unwarded mid-river fight is a free kill on a low-HP enemy mid-laner.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minute 11-13):** Damage spike. Side-lane on the wave you just shoved and look for an isolated kill.
- **Two items (Eclipse + ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade, ~ minute 18-20):** You delete any squishy you R onto. This is the main snowball window — force side-lane fights, do not group with your team yet.

## Common mistakes

- **Using R as engage on a tanky frontline.** R copies a portion of your damage during the 3-second window. Onto a tank you do not produce enough raw damage, so the mark detonates for nothing. Always R the squishiest reachable champion.
- **Wasting W as poke.** W is your only escape. If you swap forward to throw a Q and the trade goes wrong, you have no way out. Save W for the engage **and** the disengage of the same trade — if you spend it on poke, you commit blind.
- **Forgetting to recast W during R.** Inside Death Mark a shadow is left at your starting point. You can recast W to swap back home and survive a counter-engage. Players who forget this die to a follow-up Flash + CC every time.
- **Grouping mid-game.** Zed scales like an assassin, not a teamfighter. Grouping for objectives at minute 15 with two items wastes your tempo — one Janna disengage cancels your whole burst. Side-lane and trade pickoffs (eliminate an isolated enemy outside the teamfight) for objective pressure.
- **Q without overlap.** Razor Shuriken hits hardest when Zed and the shadow both land it on the same target. A naked Q with no W setup does roughly a third of the potential damage.

## Advanced tip

Practice the **ult flash combo**: cast **R** on the target, then **Flash** during the dash animation. The R dash continues to your destination but you re-emerge offset by Flash distance, landing on the target's blind side or behind their peel. This is unblockable by any directional ability (Janna Q, Yasuo Wind Wall) because the Flash happens during untargetable frames. The same combo works to clip a fleeing target who tries to Flash away — your Flash matches theirs and the mark stays applied.
