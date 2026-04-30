---
title: "Ambessa Top Build & Guide — Patch 16.9"
slug: "ambessa-top"
language: "en"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Ambessa top lane guide for League of Legends Patch 16.9: starting kit, Eclipse skirmisher build, key matchups, power spikes, common mistakes, and an advanced tip."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "After any ability cast, she dashes a short distance. Her next basic attack gains bonus range, damage, and attack speed, and refunds energy."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Two-stage ability. First cast strikes a forward arc and scales with enemy max HP. Hitting an enemy unlocks a longer forward slam as the second cast — main damage."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Gain a shield and brace, then slam the ground. If she blocks non-minion damage during the brace, the slam deals empowered damage. Defensive trade tool."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "AOE chain whip around herself: damages and slows nearby enemies. Triggering the passive dash from this ability adds a second strike at the end of the dash."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Become unstoppable and blink to the farthest enemy champion in a line, suppressing them on arrival, then slam them for damage and stun. Passive: armor pen + omnivamp on abilities."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has 2+ hard CC sources or heavy AP damage"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP top laners (Vladimir, Rumble, Gwen) — magic shield + AD scaling at low HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs telegraphed long-range CC (Malphite R, Ornn R, Sett W) — spell shield blocks the engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "when you're already ahead in lane — kills stack ad, fueling a snowball lead (vantaggio crescente)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late game when you R-blink onto the enemy carry — revive lets you commit fully and survive the followup"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Win lanes 2-6 with passive-dash trades, then snowball through skirmishes around Voidgrubs and Drake. Use R to suppress an isolated carry in mid-game fights before the enemy frontline can peel."
  weakness: "Hard CC chains shut down her dash combos. Tank statlines blunt her % max HP damage. R commits her onto one target, so a peel comp can isolate her after the suppression ends."
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "Immobile melee bruisers without a dash"
      reason: "Her passive dashes after every ability cast let her weave in and out of telegraphed windups (Darius pull, Garen silence, Illaoi E). R suppression bypasses their tankiness for the kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Squishy ranged top laners"
      reason: "Multiple short dashes from her passive close the gap that ranged tops rely on. In melee her Q scales with target max HP and chunks them faster than they can disengage."
    - examples: ["nasus", "kayle"]
      archetype: "Late-game scalers needing levels or stacks"
      reason: "Her level 2-6 power bullies them before their spike (Nasus Q stacks, Kayle level 11 and 16). Force kills early to deny the lategame they need."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tanks with hard CC and stat checks"
      reason: "Point-and-click CC (Malphite R, Poppy W stops dashes, Ornn brittle plus knock-up) interrupts her dash combos before R lands. Raw armor plus HP also blunts the % max HP scaling on Q."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Long-range pokers and kiters"
      reason: "Jayce E (knockback) and Gnar mega R interrupt her dash mid-cast. Kiters stay outside her threat range, forcing her to commit dashes from too far and get punished while abilities are down."
    - examples: ["olaf", "tryndamere"]
      archetype: "Champions whose ultimates defeat suppression or execution"
      reason: "Olaf's R cleanses her suppression on cast, neutralizing her main pickoff tool. Tryndamere's undying R survives the execute frame and lets him spin out of the slam."
---

## Overview

Ambessa is a top lane skirmisher (a champion built for short skirmishes and small fights, not long teamfights). She is a physical-damage AD champion (AD = attack damage; the alternative is AP = ability power, the magic-damage stat for mages). She uses **energy** as a resource instead of mana, and lives or dies by her passive, **Drakehound's Step**: every ability cast triggers a short dash plus an empowered next basic attack with bonus range, damage, and attack speed. That single mechanic turns her into a chain-trade specialist — each Q, W, or E grants a free auto-attack reset (a basic attack that fires immediately, ignoring the normal attack-speed timer), so a full combo lays down four to five hits in two seconds. Her kit punishes anyone who tries to fight her in melee without a hard interrupt (a stun, knock-up, or silence that stops her mid-cast).

Her game plan is simple: bully the lane from level 2 with **Q + E** all-in trades (an "all-in" is a full commitment to the kill, not a brief exchange), then snowball into mid-game skirmishes around Voidgrubs and Drake. "Snowball" means a small early lead — a kill, a tower plate (a piece of gold-rewarding tower armor that breaks off in the first 14 minutes) — that compounds into a bigger lead over time. Use **R** to suppress an isolated enemy carry (the team's main damage dealer) before their frontline (the tanks who stand at the front) can peel for them — "peel" means using CC or your own body to protect a teammate from the enemy who is on top of them. The lategame is her weakness: once enemy tanks finish two items, her % max HP damage on Q stops melting them, so close the game before minute 28.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Default for AD trades; the lifesteal sustains your dash chains.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — main skirmisher first item. After two ability hits on the same target within 1.5 seconds, it triggers a shield (a temporary HP barrier that absorbs incoming damage) plus a chunk of bonus damage on the next attack. Her dash combos clear that threshold in every fight.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots. Most top matchups are AD; the auto-attack damage reduction matters in extended trades.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (each hit removes a small amount of armor from the target, stacking up to 30%) plus HP plus AD. Her empowered passive auto-attacks stack the shred faster than most champions.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — survivability spike. When you take heavy damage in a short burst, the item gives you a big shield. Useful when you R-blink onto the enemy carry and the rest of their team focuses you down.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converts incoming physical damage into a slow bleed (damage spread over the next 3 seconds instead of instant), giving you time to finish the trade.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — replace Plated Steelcaps when the enemy team has two or more hard CC sources, or heavy AP (magic) damage. They give magic resist plus tenacity (which shortens how long stuns and slows last on you).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into AP top laners (Vladimir, Rumble, Gwen). Gives a magic-damage shield (a "lifeline" shield that pops once when your HP drops below 30%) plus more AD as you get low — meant to keep you alive long enough to kill them back.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs telegraphed long-range CC (Malphite R, Ornn R, Sett W). It gives you a one-time spell shield (blocks the next enemy ability that hits you) so the engage misses and you R back on your terms.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — when you're already ahead in lane. Each kill or assist stacks bonus AD on the item, fueling a snowball lead — the more kills you get, the harder you hit, which gets you more kills.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — late-game last item. Gives you a one-time revive on death every 5 minutes. Lets you commit fully when you R-blink onto the enemy carry, without throwing the game if you misposition.

**Boots:** Plated Steelcaps default. Mercury's Treads vs AP/CC. Skip Sorcerer's-style mage boots — you scale physical.

**Skill order:** Max **Q** first (main damage and the only ability that scales with enemy max HP), **E** second (waveclear and the AOE slow that sets up the second Q strike), **W** last. Take **R** at levels 6, 11, and 16.

**Runes:** Primary tree **Precision**:
- **Conqueror** — keystone (the main, most powerful rune of the tree). Stacks bonus AD and healing the longer you stay in a fight against champions; perfect for her chain-trade kit.
- **Triumph** — small heal and gold burst on takedown, triggered when you finish a fight low HP.
- **Legend: Alacrity** — passive bonus attack speed that builds as you get takedowns.
- **Last Stand** — extra damage when you drop below 60% HP.

Secondary tree **Resolve**:
- **Second Wind** — HP regeneration that kicks in after taking enemy damage. Counters lane poke.
- **Unflinching** — extra tenacity once **Flash** is on cooldown. Useful when you R into the enemy team and they try to chain CC you.

Stat shards (the three small bonus stats you pick under the runes): Adaptive Force (gives AD or AP based on what your champion already builds — for Ambessa it converts to AD), Adaptive Force again, then Armor or HP based on matchup.

## Key matchups

- **Darius:** Favorable. The outer ring of his Q is the part that heals him; step inside it by dashing forward with your Q1, then Q2 back out. He needs to land both Q + E to commit a full kill attempt; you can use W to shield his Q grip and trade evenly. Make him use his W bleed first (force him to waste it), then engage once it's on cooldown.
- **Sett:** Favorable. He has no dash, only a forward slam (W). Pre-6, your passive-dash combos beat him in extended exchanges. After he hits 6, save **Flash** to dodge the knockback (the displacement) on his R that would push you into his team's zone.
- **Malphite:** Unfavorable. His passive shield blunts your level 2 all-in; his Q slow lets him run away when you commit. Build ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** second item to block his R engage. Avoid teamfights at choke points where he can flank — surprise-attacking from a side angle — through the fog of war (the parts of the map you cannot see because there is no ward there). A ward is a small magic eye you place to reveal a zone.
- **Jayce:** Unfavorable. He has two stances; the ranged-form Q + E combo pokes you (chips your HP from a safe distance) before you can close the gap. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** as a starter, hug your wave for HP regen from last-hitting minions, and look for kills only when he switches to melee form and wastes his E.
- **Camille:** Skill matchup. Both of you have strong all-ins; whoever lands their first cast cleanly wins. Your Q scales with her current max HP — make her use her W heal first, then Q1-auto-Q2 to drop her below 50%. Place a ward in the tri-bush (the three-entrance bush near your tower) so her E hookshot — the grappling-hook ability that pulls her to a wall or enemy — does not catch you walking back to lane.

## Power spikes & win conditions

- **Level 2 (Q + E):** Your first major spike. With both abilities and the passive dash, a full Q1-auto-E-auto-Q2-auto combo deals four basic attacks plus two ability ticks in two seconds. Most top laners cannot match this damage in a melee scrap.
- **Level 6 (R unlocked):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** unlocks pickoffs — eliminating an isolated enemy outside the main fight. The R passive also adds armor penetration (your damage ignores some of the enemy's armor) and omnivamp (a small heal you get back as a percentage of damage you deal with abilities). This sustains you in skirmishes around the river.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minute 11-13):** Your biggest skirmish power spike. The shield and bonus damage line up with every full combo, so 1v1s and 2v2s around Voidgrubs swing in your favor.
- **2 items + boots (~ minute 18-22):** With ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online, group with your team for Drake fights. R-blink onto the enemy carry — the suppression (a CC that disables every ability and movement, even Flash) locks them in place for 1.5 seconds, which is enough for your team to follow up.

## Common mistakes

- **Wasting Sundering Slam (the second Q cast) on a minion.** The empowered second cast is your damage spike. If you hit a minion with Q1 instead of a champion, you have burned the second-cast unlock on a creature that dies in one hit anyway. Hold Q1 until you can land it on an enemy champion.
- **R-blinking too deep into the enemy team.** R goes to the **farthest** enemy champion in your line, not the nearest. If three enemies stand in front of their carry, your blink will pass through and drop you behind the entire team. Always check positioning before pressing R — line up the carry as the only target between you and the farthest point.
- **Bracing W in empty space.** The empowered slam only triggers if you actually block non-minion damage during the brace. Bracing in lane against minions wastes the cooldown for nothing. Use W reactively — when you see an enemy ability animation start, then brace.
- **Holding R for the perfect engage that never comes.** R has a 100+ second cooldown early. If you have it up at level 6 and the enemy laner is "one rotation low" — meaning they just used their main combo and their key abilities are on cooldown — go in and R them. A dead enemy laner is two waves of free farm and an extra tower plate (those gold-rewarding armor pieces on the tower that drop in the first 14 minutes).
- **1v1-ing hyper-tanks expecting your Q to delete them.** % max HP damage looks scary on paper but armor still applies. Once an Ornn or Cho'Gath finishes ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + tank items, you cannot solo-kill them. Group with your jungler instead.

## Advanced tip

Master the **dash-AA weave** (interleaving the dash with the basic attack). Every ability cast triggers your passive dash and an empowered next basic attack, so the optimal sequence in a full combo is *cast → dash → AA → cast → dash → AA*, not *cast → cast → cast → AA*. Pressing your second ability before the empowered AA fires cancels the bonus on that auto. Clean rhythm: **Q1 → dash forward → AA → E → dash → AA → Q2 → dash → AA → R**. Practice in the Practice Tool (the offline training mode) against a target dummy (a fixed practice mannequin) until each AA registers; in a real lane this turns a 2-second trade into seven separate damage instances — the difference between a kill and the enemy escaping at 50 HP.
