---
title: "Kai'Sa ADC Build & Guide — Patch 16.9"
slug: "kaisa-bot"
language: "en"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Kai'Sa ADC bot lane guide for Patch 16.9: Plasma stacking flow, hybrid Kraken evolve build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Basic attacks stack Plasma on the target; allies' immobilizing CC adds extra stacks. Item purchases also evolve Q/W/E once Kai'Sa hits hidden AD/AP/Attack Speed thresholds."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Fires 6 missiles that split among nearby enemies (max 600 range). Repeat hits on the same target deal reduced damage. Evolves at ~100 bonus AD: 12 missiles instead of 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Long-range linear missile (3000 units). Marks first enemy hit with 2 Plasma stacks and reveals them for 4s. Evolves at ~100 AP: 4 stacks + 50% cooldown refund on champion hit."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channels for ~1.5s gaining Move Speed and Ghosted (passes through units), then bursts Attack Speed for 4s. Auto-attacks reduce its cooldown. Evolves at 60% bonus Attack Speed: brief invisibility."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash next to any enemy champion that has 5+ Plasma stacks (or that is fully ruptured by Plasma). Grants a shield on arrival. Used to finish chip-killed targets, not to engage."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn): percent armor pen ignores a fixed share of enemy armor"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Vladimir, Aatrox): applies Grievous Wounds (cuts enemy healing in half)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, Brand support): magic resist + a damage shield when you dip below 30% HP"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "vs heavy long-range chip damage (Ezreal, Caitlyn, Xerath): lifesteal heals mid-fight, overheal stores HP as shield"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs assassins or divers (Zed, Kha'Zix, Talon): Ghost passive lets you walk through units while kiting"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Stack Plasma on the back-line target with W and auto-attacks, R-dash on top once they hit 5 stacks, finish with Q + empowered AAs while E gives the attack speed window."
  weakness: "R requires Plasma stacks on a target — without W landing or ally CC you have no engage. Squishy with no dash before R; if you mis-time E you eat full burst before invisibility."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades: 3 super-fast auto-attacks right after the R dash front-load Plasma stacks and Kraken Slayer's true damage proc. Taste of Blood adds lane sustain, Sixth Sense flags wards, Ultimate Hunter cuts R cooldown."
    secondary_rationale: "Precision secondary: Triumph heals 12% missing HP on takedown (kill or assist), turning your R-into-fight executes into safe escapes. Coup de Grace adds 8% damage on enemies under 40% HP."
    secondary_alternative: "Into a heavy poke lane (Caitlyn + Lux, Ezreal + Karma) swap Precision to Resolve with Second Wind (regen on damage from champions) and Overgrowth (bonus HP per minion absorbed) for sustain."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "Immobile marksmen with no dash"
      reason: "Once Kai'Sa hits R range with 5 Plasma stacks, immobile ADCs cannot escape the dash + Q burst. They have to survive the first all-in (full commitment trade aiming at a kill) without any reposition tool."
    - examples: ["senna", "kog-maw"]
      archetype: "Late-game scaling carries with no escape"
      reason: "W has 3000 units of range and reveals them for 4s — Kai'Sa pokes them off the wave from outside their threat range, then R's the moment Plasma fully ruptures."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Squishy enchanter supports without hard CC"
      reason: "These supports have no stun or knock-up to peel a back-line dive. Kai'Sa lands R on the ADC and the support has nothing to interrupt the all-in once invisibility from evolved E kicks in."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Lane bullies with stronger early auto-attack damage"
      reason: "Both out-trade Kai'Sa at levels 1-3 before her Q evolve threshold. Draven's empowered axes and Lucian's passive double-shot win every short trade window before Kai'Sa scales."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Hard engage supports with point-and-click CC"
      reason: "Kai'Sa has no dash before R, and R requires a target with Plasma. A Leona E or Nautilus Q mid-lane lock-her-down before she can stack any Plasma at all — the chain CC kills her before evolved E invisibility comes online."
    - examples: ["vayne", "twitch"]
      archetype: "Late-game hyper-scalers that out-DPS Kai'Sa post-3-items"
      reason: "Vayne's true damage on her W and Twitch's Expunge ramp harder than Kai'Sa's hybrid scaling once both teams are at 3 items. Kai'Sa needs to close the game before minute 30 or her relative damage drops."
---

## Overview

Kai'Sa is a hybrid marksman — a champion who scales with both AD (auto-attack damage) and AP (ability damage) at once, instead of stacking only one. She is the only ADC (attack damage carry: a ranged auto-attacker that becomes the team's main damage source late) whose abilities literally upgrade themselves when you cross hidden item thresholds: 100 bonus AD evolves Q, 100 AP evolves W, 60% bonus Attack Speed evolves E. Her build path matters more than for any other marksman — wrong order means an evolve never triggers, and a Kai'Sa without evolved E (no invisibility on the dash) is half a champion.

Her game plan is a stacking puzzle: every basic attack puts Plasma stacks on the target, and the moment a target hits 5 stacks (or fully ruptures from Plasma) her **R** unlocks as a long-range dash on top of them. Support CC (Crowd Control: stuns, slows, roots that lock the enemy in place) accelerates the count for free. In lane she pokes (deals long-range chip damage to drain HP without committing to a fight) with **W** at 3000 units; in teamfights (5v5 fights that decide objectives like Drake or Baron — neutral monsters that grant team buffs when killed) she sits at maximum AA range until a back-line target is chip-killed, then dashes in with **R** + evolved **E** invisibility to clean up. The skill ceiling sits in **R** target selection.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (small AD + lifesteal — heal a portion of damage dealt) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first-item power spike (the moment a champion gets noticeably stronger after completing an item). Gives AD + Attack Speed; the Bring It Down passive deals bonus true damage on every third hit, which front-loads damage during the short R-into-fight burst window.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. They push you toward the 60% bonus Attack Speed threshold needed to evolve E.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adds two side-arrows to every basic attack and stacks more Attack Speed. The side arrows apply Plasma to nearby enemies, so in a teamfight Kai'Sa stacks Plasma on the entire enemy team while AA-ing only one target. This item completes the E evolve.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — gives AD, AP, and Attack Speed in a single slot. The cheapest way to push past the 100 AP threshold needed to evolve W (cooldown refund + 4 Plasma stacks per cast). Phantom Hit on every third AA proc-slams more on-hit damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — late-game crit (critical strike: a chance for an auto-attack to deal ~175% damage) multiplier. Combined with Runaan's two extra projectiles, every basic attack rolls 3 crit chances at once.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn). Replace ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** as 5th item if the enemy team has 2+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds (a status effect that cuts enemy healing in half).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (Syndra, Veigar, Brand support — burst mage = a champion that deletes you in 1-2 seconds with one combo). Magic resist + a damage shield below 30% HP buys the second R needed to escape.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — vs heavy poke. Lifesteal heals you mid-fight; when overhealed it stores HP as a temporary shield.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — vs assassins or divers (Zed, Kha'Zix, Talon — champions designed to dive onto the back line). Its Ghost passive lets you walk through enemy minions and champions while kiting (moving back while attacking).

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is the only correct choice. Attack speed feeds the E evolve and the Q multi-missile DPS during R combos.

**Skill order:** Max **Q** first (main DPS, biggest evolve payoff). Max **E** second (more cooldown reduction and longer Attack Speed window). Max **W** last (utility only — long range + Plasma stacking, but worst base damage per skill point). Take **R** at levels 6, 11, 16.

**Runes:** Primary tree **Domination** (the burst-AA tree) with **Hail of Blades** (3 super-fast attacks the moment you start AA-ing a champion), **Taste of Blood** (heal 18-30 HP on damaging an enemy champion every ~20s), **Sixth Sense** (a wallhack ping that reveals one enemy ward every ~75s), **Ultimate Hunter** (cuts R's cooldown by up to 25% as you take down enemies). Secondary tree **Precision** with **Triumph** (heals on takedown — kill or assist) and **Coup de Grace** (extra damage on enemies below 40% HP).

## Key matchups

- **Caitlyn:** Out-ranges Kai'Sa hard at level 1 (650 AA vs 525). Stay behind your minion line and only step up when she places a trap (she is animation-locked while placing). Power-farm safely (focus only on collecting minion gold without risks) until ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** completes; then look for cross-map W picks once you can dash in with R.
- **Draven:** Loses an AA war straight up — his Q axes deal way more per AA than your basic. Avoid 1-for-1 trades; only commit when his axes hit the ground (he loses them on a 2.5s timer). Save **W** as a poke-only tool until ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** is online.
- **Lucian:** Loses to Kai'Sa post-6 but bullies her at levels 2-5 with passive double-shot. Dodge his **Q** through minions, save **E** as a panic disengage (an ability that breaks an enemy's full-commit trade). Hold lane priority by farming under tower until you are level 6, then look to all-in on his next mistake.
- **Vayne:** Kai'Sa wins the early lane (Vayne is melee until she hits 3 items). Push the wave (send your minions forward into her tower) every chance you get, harass (deal small chip damage to drain her HP) with **W** every cooldown. After minute 25 she scales harder, so close the game in mid-game or it tilts toward her.
- **Jhin:** Long-range poke matchup. His **W** is a 3550-unit slow root that ignores your dodge if a minion is hit first. Stay behind your front minion line and never trade during his reload window — he is at his strongest with a fresh mag, weakest during the 2.5s after his 4th shot.

## Power spikes & win conditions

- **Level 6:** First **R** unlocks pick attempts (eliminating a lone enemy outside a teamfight) on chip-killed lane targets. Land **W** + 2 AAs on the enemy ADC, then dash in with **R** the moment they walk up to last-hit (auto-attack the killing blow on a minion).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completion (~ minute 12-14):** Lane priority flips. You can shove (push the wave fast) with Q, then roam (leave lane to help allies) for cross-map plays on Drake or mid skirmishes (small fights between 2-3 players in the river or jungle).
- **Q evolve (~ minute 22-24, after ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade):** Q now fires 12 missiles instead of 6 — single-target burst on champions roughly doubles. Force teamfights at every objective.
- **E evolve (Berserker's + Runaan's + Guinsoo's complete):** E now grants brief invisibility during the channel. Difference between dashing in with R and dying instantly, and dashing in and getting the kill — invisibility makes you untargetable for ~0.5s after the dash, long enough to dodge follow-up CC.

## Common mistakes

- **Throwing R without Plasma stacks ready.** R requires a target with 5 Plasma stacks. If you press R on a target with 0-2 stacks, the spell does nothing and goes on full cooldown. Always W-then-AAs first, watch the Plasma indicator above the target's HP bar, then commit R.
- **R-ing at 100% HP into the enemy team.** R is a finisher, not an engage. The shield from R is small (~110 + 25% bonus HP) and lasts 2s — you will die instantly if the enemy front line is still up. Wait until at least one of: target below 40% HP, enemy CC on cooldown, or your team already on top of them.
- **Over-pushing the wave without vision.** Kai'Sa has no built-in escape until E evolves at minute 22+. If you push past mid-river without your support warding tribush (small terrain spots that block vision) and river, the enemy jungler kills you for free.
- **Skipping ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves for tankier boots.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** look tempting against an AD-heavy enemy team, but they delay the 60% Attack Speed threshold that evolves E. No evolve = no invisibility = your R is a death sentence.
- **Saving E for offensive engage.** E's main value is the brief Ghost (passes through units) + Attack Speed window during a fight. Press E **after** you R, not before — invisibility from evolved E kicks in at the start of the channel, so casting it from a safe spot wastes the immune frames.

## Advanced tip

The **flash R** finisher works the opposite way Kai'Sa is normally played. When an enemy ADC is escaping at low HP into fog of war (the parts of the map you cannot currently see) and your **R** would dash you out of position, **Flash** (summoner spell that teleports 400 units in a chosen direction) toward them first to get into R range, then immediately R. Burns Flash but turns a near-escape into a guaranteed kill at high ranks. The trick: queue the R cast 0.1s after Flash by holding the R button — League's input buffer fires R the instant Flash lands, so the enemy never sees the dash coming.
