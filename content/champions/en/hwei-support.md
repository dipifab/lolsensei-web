---
title: "Hwei Support Build & Guide — Patch 16.9"
slug: "hwei-support"
language: "en"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Hwei support guide for League of Legends Patch 16.9: pick-mage starter kit, core build path, key matchups in bot lane, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Damaging spells prime enemy champions. A second damaging spell completes the signature, leaving a mark that detonates after a short delay for AOE magic damage."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Three damage subspells. QQ fast fireball, QW long-range delayed bolt (extra damage on isolated/CC'd targets), QE lava path with slow zone."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Three utility subspells. WQ ally Move Speed line, WW shield pool over time, WE three orbs that empower next 3 spells/attacks with bonus damage and mana."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Three CC subspells. EQ flee skillshot, EW eye placed on the ground that fires a homing root when an enemy enters, EE jaw zone that drags enemies to the center."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Long-range skillshot. Sticks to the first enemy champion hit and expands, slowing nearby enemies in stacks; explodes after a few seconds for AOE magic damage."
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs hard CC on your ADC (Leona stun, Morgana root, Nautilus hook): cleanses the lockdown that follows up your own setup"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE engage (Kennen, Wukong, Malphite, Yasuo): the team-wide shield covers a forced teamfight your range cannot avoid"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "vs poke-and-disengage comps where you spend less time landing E and more time keeping your team topped up across long fights"
    - dd_id: "3107"
      name: "Redemption"
      against: "vs siege and 5v5 setpiece comps where you can pre-cast healing during a long objective fight (drake pit, Baron pit)"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins that dive your back line (Zed, Akali, Talon): stasis buys time so your ADC can reposition while you survive the engage"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Land EW root or EE drag, follow up with QW or QQ to detonate the passive signature, then ult Spiraling Despair on the locked target. Snowball the bot lane through repeated picks before laning phase ends."
  weakness: "Every spell is a skillshot, so a missed E leaves you with no follow-up and no escape. Hwei has zero dash and very low mobility: a single engage from the enemy support catches him out of position."
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Aery doubles as poke on Q and bonus shield on WW (mage/enchanter profile). Manaflow Band sustains the mana cost of triple-spell combos, Transcendence stacks ability haste so EW is up every wave, Scorch closes the kill on low-HP enemies."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery covers your weak base sustain in lane, Cosmic Insight reduces Flash and active item cooldowns (Mikael's, Locket) for more frequent peel windows in teamfights."
    secondary_alternative: "Against full-engage comps that dive your back line (Leona, Rakan, Nautilus), swap Inspiration to Resolve with Bone Plating (-30 to -60 damage on incoming spike) and Revitalize (+10% to your shields and heals), trading peel cooldown reduction for raw survivability."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter supports without hard lockdown"
      reason: "They cannot punish your long EW vision-and-root setup. You out-range their poke and the QW delayed bolt finds them when they step up to shield their ADC."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile ADCs with no dash"
      reason: "Your EW root and EE drag connect cleanly because they have no gap-closer to interrupt your channel. Once primed, the passive signature plus R secures the kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Skillshot mage supports without escape"
      reason: "You match their poke range with QQ and QW, but you also have hard CC they lack. In a long lane trade you win because you can convert a single landed E into a kill, while they can only chip."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Hook and lockdown engage supports"
      reason: "Their point-and-click or hook engage hits before you can finish the channel on EW. Once Hwei is locked down he has no dash to escape, and a missed E leaves him with no answer."
    - examples: ["pyke", "rell"]
      archetype: "Roaming and gap-close engage"
      reason: "They close the distance Hwei needs to land skillshots from. Pyke's stealth makes EW useless because you cannot see him to place the eye on his path; Rell's W jump bypasses the slow zone of QE."
    - examples: ["alistar", "rakan"]
      archetype: "Dash-and-knockup tanks"
      reason: "Their dash plus AOE knockup interrupts your spell sequence mid-cast. Hwei needs three button presses to lock a target — a single Alistar W-Q deletes that window."
---

## Overview

Hwei support is a long-range pick mage who turns immobile bot lanes into easy kills. The kit is built around three subspell trees: damage on **Q (Subject: Disaster)**, utility on **W (Subject: Serenity)**, and crowd control on **E (Subject: Torment)**. The standout tools for support are **EW (Gaze of the Abyss)** — a delayed homing root that locks the first enemy that steps into a vision eye — and **EE (Crushing Maw)** — a jaw zone that drags enemies inward and slows them on exit. Either one sets up the **passive (Signature of the Visionary)**, which detonates for area magic damage on the second spell hit. Hwei's range is mage-tier (around 900-1100 units on most casts), so the bot lane plays out at poke distance, not melee distance.

The game plan is "land one E, win the trade." Place **EW** in front of the enemy ADC's intended path before a wave fight, prime the passive with **QQ** or **QW**, then chain the **R (Spiraling Despair)** onto the locked target so the slow ramps up while your own ADC walks in for the kill. The hard requirement is positioning: every spell is a skillshot for distance with no dash, so a single enemy engage that catches you out of range is a death sentence. Stand behind your ADC, not next to them.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the new support quest item that grows into Bloodsong / Solstice Sleigh / Dream-Maker mid-game) plus 2 Health Potions. Take a Stealth Ward on the trinket slot.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support item, gold income while you stay near the ADC. Auto-upgrades to a finished support item around minute 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — the engine of pick play: every slow or root from your kit primes a Mandate mark that your ADC detonates for bonus magic damage. Hwei has slow on QE, EE, and R, so the proc is essentially guaranteed in every fight.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration so QQ and the passive signature cut through the squishy enemy back line.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — every primed-and-detonated passive triggers a Helia stack: heals your ADC and burns the target. Pair with Mandate for double-dipping on every locked enemy.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst plus a magic-penetration spike below 35% HP (the moment a spell finishes off a low-HP enemy). Lines up with R explosions on chunked targets.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — versus hard CC on your ADC (Leona stun, Morgana root, Nautilus hook). Cleanses the lockdown that the enemy uses to one-shot your carry.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — versus heavy AOE engage (Kennen, Wukong, Malphite, Yasuo). The team-wide shield covers the forced fight your back-line range cannot avoid.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — replace Imperial Mandate as your finished support item if the enemy team is poke-and-disengage and you are spending less time landing E and more time topping up your team across drawn-out fights.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — versus assassins that dive your back line (Zed, Akali, Talon). Stasis buys time so your ADC can reposition while you survive the engage.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Take ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** instead if your team relies on you to chain CC across long fights — the ability haste keeps EW up every fight rotation.

**Skill order:** Max **E** first (the primary lockdown source: EW root, EE drag, EQ flee), **W** second (shield, MS, and three-orb empower), **Q** last (it scales with AP but the cooldown reduction matters less when the build slot belongs to support items, not raw AP). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Swap Inspiration to **Resolve** with **Bone Plating** and **Revitalize** when the enemy bot has hard engage (Leona, Rakan, Nautilus) — survivability matters more than active item cooldowns when their first ability decides the trade.

## Key matchups

- **Leona / Nautilus:** Engage threats. Stand outside their hook/Q range; never use **Flash** offensively in lane. Save **EW** as a peel root if they walk onto your ADC, not as a poke setup. If they Flash forward, your **EE** drag can pull them away from your carry.
- **Lulu:** Even matchup. She shields and disengages your **EW**, but you out-range her poke. Wait for her to **W** her ADC into range, then root her instead — Lulu shielded onto a root is a kill-confirm setup for your ADC.
- **Soraka:** Favorable for Hwei. Her low base movement speed and lack of mobility means **EW** lands almost every cast. Push the wave first, then play around the **EW + R** combo onto her every cooldown — she has no answer.
- **Pyke:** Hard matchup. His stealth removes the vision your **EW** eye needs to lock him in place; if you cannot see him on the screen, the eye does nothing. Buy a Pink Ward (Stealth Ward + Oracle Lens later) and keep brushes lit. Hold **EE** as a peel pull when his hook lands, not as a poke tool.
- **Xerath / Vel'Koz:** Long-range mage support mirror. Their poke matches your range, but you have hard CC they lack: a single landed **EW** wins the lane because they cannot dodge **QW** delayed bolt while rooted. Trade aggressively pre-6 before their **R** scales.

## Power spikes & win conditions

- **Level 2:** With one point in **E** and one in **W**, you have the lockdown plus a shield pool. A successful **EW** plus your ADC's spike is enough to kill the enemy support if they overextend.
- **Level 6:** First **Spiraling Despair** unlocks every kill setup. The R sticks to the first champion hit and slows the area around them — combine with **EE** drag and you create a "no-walking" zone for 3-4 seconds.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate completion (~ minute 12-14):** Bot-lane snowball point. Every primed passive plus a Mandate detonation deletes the enemy ADC's HP bar in one rotation. Group with mid for a **drake fight** here.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ minute 18-22):** You start trading 2-for-0s in skirmishes because the Helia heal on your ADC outpaces enemy damage and the burn extends your range. This is the window to force ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** picks around the river before the enemy team groups for Baron.

## Common mistakes

- **Throwing Q without setup.** Naked **QW** poke at long range looks tempting, but the bolt only deals reduced damage when the target is mobile. Land **EW** root first, then chain **QW** for the bonus damage on an isolated/rooted target — the numbers triple.
- **Using EW as a poke spell.** EW is your kill setup. Holding it for one defined moment per fight wins more games than spamming it for chip damage. The cooldown is long enough that you cannot afford to miss it.
- **Standing next to your ADC.** Hwei has no dash. If the enemy support engages onto your ADC and you are at melee range too, you both die. Position behind, by 200-300 units, so an engage that locks one of you still lets the other peel or escape.
- **Forgetting the W tree.** Many Hwei players play him pure pick-mage and ignore **WW** shields and **WE** orbs. Mid-fight, an empower from **WE** on your ADC's autos is more useful than a third damage spell from your own kit. Use both halves of the kit.
- **Walking into vision-blind side lanes.** Your kit needs vision to land EW and to ult cross-map. Place wards in tri-bush and river before every roam — without vision your range advantage disappears the moment you step out of lane.

## Advanced tip

The **EW + EE pseudo-combo** is the highest-value setup in Hwei's kit and barely shows up in basic guides. Drop **EW** (the eye) on the path the enemy must walk to last-hit; it stays on the ground for several seconds before locking on. Then cast **EE** (the jaw drag) so it pulls them through the eye's lock-on radius — the eye fires a homing root automatically the moment they enter, even if they tried to dodge **EE** itself. The drag becomes unmissable, the root is guaranteed, and your **R** plus passive secure the kill from full HP on a squishy. The window is tight (about 1 second between casts), but landed twice in a fight it ends the game.
