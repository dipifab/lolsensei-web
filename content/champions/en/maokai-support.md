---
title: "Maokai Support Build & Guide — Patch 16.9"
slug: "maokai-support"
language: "en"
patch: "16.9"
champion: "maokai"
role: "support"
last_updated: "2026-05-05"
description: "Maokai support guide for League of Legends Patch 16.9: starter kit, AP-tank engage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Maokai"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage Support"
  abilities:
    - key: "P"
      name: "Sap Magic"
      description: "Maokai's basic attack heals him and deals bonus magic damage on a moderate cooldown. Casting any spell or being hit by an enemy spell shortens the cooldown — a Q-W-E sequence almost always primes the next empowered auto."
      dd_spell_id: "Maokai_Passive"
    - key: "Q"
      name: "Bramble Smash"
      description: "Linear shockwave at short-medium range that knocks back nearby enemies, deals magic damage and slows them. Primary engage opener and disengage tool. Low cooldown — usable in almost every trade."
      dd_spell_id: "MaokaiQ"
    - key: "W"
      name: "Twisted Advance"
      description: "Targeted dash to an enemy: Maokai becomes untargetable mid-flight and roots the target on arrival. Point-and-click, so dashes and dodges of the target do not save them. Hard CC anchor of the kit."
      dd_spell_id: "MaokaiW"
    - key: "E"
      name: "Sapling Toss"
      description: "Lobbed sapling that stands guard, then chases nearby enemies and explodes for AOE magic damage and a slow. Saplings briefly reveal vision, so they double as zoning and warding tools. Larger, longer-lasting if placed in brush."
      dd_spell_id: "MaokaiE"
    - key: "R"
      name: "Nature's Grasp"
      description: "Long-range wave of brambles that travels in a wide line, rooting every enemy hit. Root duration scales with how far the wave traveled before contact, so cast it from max distance to chain it into your team's follow-up."
      dd_spell_id: "MaokaiR"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "build when your ADC has a high-damage ult (Jinx R, Miss Fortune R, Samira R) — your W root primes a damage amp on their first cast"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs auto-attack-heavy carries (Tristana, Twitch, Master Yi) and healing comps — Grievous Wounds plus armor punishes attack-speed stacking"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs double-mage compositions (Syndra mid + Brand support) — magic resist plus stacking move-speed bonus when hit by spells"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs heavy AP burst (double mage like Syndra mid + Brand support) — passive magic shield that regenerates while out of combat"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Land a max-range R from fog of war during objective fights, follow with W on the highest-priority target to chain root, and let the team clean up while Locket and Knight's Vow keep your ADC alive through the trade."
  weakness: "Short engage range outside R: W is only 525 range and Q is even shorter. Squishy supports with cleanse or hard disengage can dodge the engage entirely; without R up, you have no long-range tool to start a fight."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Health Scaling"
      - "Tenacity and Slow Resist"
      - "Health Scaling"
    primary_rationale: "Aftershock fires the instant W root connects, stacking burst armor and magic resist when the team focuses you. Shield Bash converts every Locket and Knight's Vow shield into bonus damage, Conditioning scales late, Revitalize boosts passive heals and shields."
    secondary_rationale: "Inspiration secondary: Magical Footwear saves 300 gold (key for a support on World Atlas income) and Cosmic Insight lowers the cooldown of Flash and Locket's active, both load-bearing for engage timing on R."
    secondary_alternative: "Vs poke-heavy lanes (Xerath, Senna, Caitlyn with poke support) swap Inspiration to Sorcery with Nimbus Cloak (move-speed burst after Flash) plus Manaflow Band — Q-E harass turns mana-positive and the speed chains into a flank engage."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "twitch", "kog-maw"]
      archetype: "Immobile ADCs without a dash"
      reason: "Twisted Advance is point-and-click root: ADCs with no dash, blink, or stealth eat the full W into auto chain every time you reach W range. Their only counterplay is summoner spells, and once Flash is down they die in one combo."
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Long-range immobile carries with no Heal"
      reason: "Maokai's R cheese (Flash + R from fog) ignores their range advantage. They live by spacing, so a hard root from outside their vision skips the lane phase entirely and hands the kill to your jungler."
    - examples: ["sett", "rell", "nautilus"]
      archetype: "Engage tanks you out-range with R"
      reason: "Their engage requires being on top of you, but Nature's Grasp roots them from screens away. They never get to start their fight on their terms."
  counterpicks:
    - examples: ["janna", "milio", "alistar"]
      archetype: "Disengage and cleanse supports"
      reason: "Janna R cancels your engage mid-cast, Milio R cleanses your W root at range, Alistar W-Q peels the carry out of your AOE follow-up. Your single hard engage gets answered for free."
    - examples: ["lucian", "tristana", "ezreal"]
      archetype: "Mobile ADCs with multiple dashes"
      reason: "Lucian E, Tristana W, and Ezreal E all bypass the Q knock-back angle and reposition out of your sapling slow. They walk through your zone control and trade back during your cooldown windows."
    - examples: ["soraka", "yuumi"]
      archetype: "Pure sustain enchanters that out-heal your harass"
      reason: "Maokai trades fine but cannot one-shot. A Soraka who keeps her ADC topped off makes your Q-E lane harass meaningless; without a kill threat at level 6, you fall behind on roams and tempo."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Long-range mage supports with shields or stuns"
      reason: "They poke you from 900-plus range and force you to all-in past your safe distance. Without dash mobility you eat free chip damage every wave, arriving at level 6 with half HP and no engage tempo."
---

## Overview

Maokai is a **vanguard support** (a tank-class support whose job is to start fights and lock down priority targets, not heal allies). His kit is built around chaining hard crowd control: **Twisted Advance (W)** is a point-and-click dash that **roots** (locks the target in place, no movement, no Flash) the moment you arrive, and **Nature's Grasp (R)** is a long-range wall of thorns that travels across half the screen and roots every enemy it hits. Between those two pieces of CC, **Bramble Smash (Q)** knocks small enemies back and slows them, **Sapling Toss (E)** drops a magic sapling that reveals brush and explodes for AOE damage, and his passive **Sap Magic** heals him and adds bonus magic damage on a periodic empowered auto-attack. The whole kit chains into itself: every spell you cast lowers Sap Magic's cooldown, so casting Q-W-E in a fight almost guarantees the next basic attack is empowered.

Game plan: in lane, **poke** (chip the enemy's HP from a safe distance) with Q and E saplings while your Sap Magic auto trades favorably. At level 6, look for **R cheese** — a long-range Flash + R combo from a side bush — to root multiple targets and convert with your jungler. Mid-game, group with your team for objectives and use R from fog of war to start fights without showing yourself first. Late-game, sit on the front line, eat the enemy engage with Locket and Knight's Vow up, and chain W into R to lock down the enemy carry while your ADC and mid finish the fight.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. Don't last-hit minions in lane: leave the gold for your ADC, World Atlas pays your gold separately through its quest.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. It evolves automatically as you ward and assist into ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and then ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, ending in the endgame upgrade you choose (Bloodsong for engage Maokai).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (a stat that shortens the duration of crowd control on you). The default boots: shorter stuns and slows mean you can chain Q after W without getting interrupted by enemy CC.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for a few seconds. Pop it the instant you R or W onto the enemy: your team eats the first **burst** (the high damage they dump in the first 1-2 seconds of a fight) for free.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate, your team's main late-game damage dealer): a portion of the damage they take is redirected to you, and you heal them in return. Always pick the carry whose life you most need to extend.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item (World Atlas auto-transforms once you finish the quest). Carries a **Spellblade** passive: after any spell cast — W, Q, R, even an E sapling — your next basic attack deals bonus physical damage and amps the target's incoming damage by 4% for 4 seconds. The play pattern is "ability → AA → ability → AA" stacked through every fight.

**Situational items:**

- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — link with your ADC's ult (Jinx R, Miss Fortune R, Samira R). When your W root lands, your ADC's next ability gets a damage amp, and the proc adds a slow zone around you for the team to follow up. Replaces Knight's Vow when your ADC is the kill carry, not the survival priority.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — armor plus a **Grievous Wounds** passive (cuts enemy healing) on every basic attack you take. Pick it into auto-attack-heavy carries (Tristana, Twitch, Master Yi) or healing-stacking comps (Soraka mid, enemy Aatrox top).
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — magic resist plus stacking movement speed every time a spell hits you. Pick it into double-mage compositions (Syndra mid + Brand support); the move speed lets you re-engage during the fight, not just survive it.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — passive magic shield that regenerates while out of combat. Pick it into AP-burst comps (a double mage like Syndra mid + Brand support) — the shield eats a full ult and lets you survive the engage you started.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** for tenacity. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only if the enemy bot lane is auto-attack heavy and the rest of the enemy team has minimal hard CC.

**Skill order:** Max **Q** first (lowest cooldown, best lane harass and trade tool). Max **E** second (more damage per sapling and longer slow on AOE waveclear and zoning). Max **W** last (the rank-up only adds damage; the root duration is fixed). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive rune tree — durability) with **Aftershock** (free armor and magic resist for a few seconds when you crowd-control someone, fires on every W root), **Shield Bash** (your shields add bonus damage to your next auto — pairs with Locket and Knight's Vow), **Conditioning** (more armor and magic resist starting at minute 12), and **Revitalize** (boosts the heal from your passive and the shields you receive). Secondary **Inspiration** with **Magical Footwear** (free boots, saves 300 gold) and **Cosmic Insight** (lower cooldowns on Flash and Locket active). **Stat shards** (the three small stat boosts at the bottom of the rune page): Health Scaling / Tenacity and Slow Resist / Health Scaling.

## Key matchups

- **Pyke:** Skill matchup decided by who roams better. He out-pokes you with Q and out-bursts you with R. Don't try to all-in him in lane: hold E saplings on river entries to deny his **stealth** (he becomes invisible while passing through brush) and force fights only when your jungler is bot side.
- **Leona:** Mirror **engage** matchup. She has a longer-range stun (Zenith Blade), so don't W into her unless her E is on cooldown. Once her engage tools are down, your 11-second Q cooldown wins the trade window — she has nothing to counter-engage.
- **Lulu:** Hard counter into your engage. Her polymorph cancels your W mid-dash. Track its 13-second window and only engage when it's down. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** are mandatory here for the tenacity.
- **Soraka:** Pure **sustain enchanter** (a healing-focused support) with no engage of her own. She heals through your Q-E poke easily, so you cannot win lane on damage alone. Roam mid and invade enemy jungle on Mobility Boots — Maokai's lane stalls but his macro punishes Soraka's weak roam.
- **Senna:** Long-range **poke** matchup (chip damage at distance to wear you down). She bullies your HP under tower with Q heals and AA range. Don't fight back: take the bad lane, group early for objectives, and use R from fog around Drake or Voidgrubs to flip teamfights.

## Power spikes & win conditions

- **Level 2 (Q + E):** First minor spike. Sapling Toss into Q poke chunks the enemy ADC's HP for free. If they over-extend on the second wave with no Flash, your jungler converts.
- **Level 6 (R unlocks):** Your real game starts. **Nature's Grasp** turns river gank attempts into free kills: drop the wave from a side bush and your ADC walks into a 2-second root. The R cheese (Flash + R from fog) is the strongest level-6 play in the game on Maokai.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** First teamfight item. Group with your team for **Drake** (the dragon objective in the bottom river — kills give your team permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them earns bonus damage to enemy structures). Your engage now drops a free team shield exactly when the enemy bursts back.
- **![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) Knight's Vow + ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong online (~ minute 22-26):** Endgame teamfight power. You can chain R into W, eat the focus fire while Knight's Vow shares it with you, and the Bloodsong amp lets your ADC delete a rooted target in one rotation.

## Common mistakes

- **Throwing Q when nobody is in range.** Bramble Smash is a short shockwave around Maokai, not a long skillshot. Casting it from far away wastes 40 mana and the cooldown — wait until at least one enemy is inside the slow circle, then chain it after W to keep the target locked.
- **Saving R for "the perfect engage" that never comes.** Nature's Grasp on a 90-130-second cooldown is wasted if you never use it. If R hits even one champion in a 4v4 skirmish around Drake, you got value. Don't hoard it for an imaginary 5-man wombo combo.
- **Engaging with no team behind you.** Maokai without his ADC and team is a tank with no damage. If your ADC is back at base or your jungler is on the other side of the map, hold W and R. A solo engage at 4v5 just feeds your **R** cooldown to the enemy team.
- **Placing saplings on empty paths.** Sapling Toss's vision and slow only matter where the enemy actually walks. Drop saplings in the brush they want to ward, in the river entries before an objective, or directly under a low-HP enemy — never in a lane the wave is already pushing toward you.
- **Wasting R for waveclear.** R is your one long-range engage tool. Even if a wave is crashing into your tower, never spend R on minions: lose the wave, save the cooldown for the fight that follows.

## Advanced tip

The **R-Flash trick**. Start casting Nature's Grasp first — the cast animation is brief but locks Maokai's facing direction. The instant the wave begins traveling, **Flash sideways**. The wave keeps its original direction relative to where you cast, so you arrive ahead of and beside it, in position to W-Q the enemy backline as they panic-react to the root. Practice it in **Practice Tool**: the rhythm is R press → Flash press, both inside half a second, with the cursor placed past the enemy carry before you start. Done correctly, the enemy team sees the wave appear from a direction they did not expect, with you already inside their formation. This is the technique that turns Maokai R from "hopeful long-range root" into "guaranteed teamfight winner".
