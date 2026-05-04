---
title: "Kled Top Build & Guide — Patch 16.9"
slug: "kled-top"
language: "en"
patch: "16.9"
champion: "kled"
role: "top"
last_updated: "2026-05-04"
description: "Kled top lane guide for Patch 16.9: Conqueror runes, Trinity Force build path, key matchups, power spikes, and common mistakes for the Yordle skirmisher."
quick_learn:
  champion_dd_id: "Kled"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Skaarl, the Cowardly Lizard"
      description: "Kled rides Skaarl, who soaks damage for him. When Skaarl's HP runs out, Kled dismounts into a squishy ranged form. Earn Courage by fighting to remount with HP back."
      dd_spell_id: "Kled_Passive"
    - key: "Q"
      name: "Bear Trap on a Rope"
      description: "Hooks the first enemy hit at 800 range. If Kled stays close ~1.75s, the trap yanks them in for bonus physical damage and a slow. Dismounted: Pocket Pistol ranged blast that knocks Kled back."
      dd_spell_id: "KledQ"
    - key: "W"
      name: "Violent Tendencies"
      description: "Active steroid: huge attack speed for the next 4 autos. The fourth hit deals base + max-HP physical damage. Use to burst tanks and proc Skaarl recharge."
      dd_spell_id: "KledW"
    - key: "E"
      name: "Jousting"
      description: "Dash that damages and pulls minions. If it hits a champion or large monster, recast within 4s to dash back through them for the same damage."
      dd_spell_id: "KledE"
    - key: "R"
      name: "Chaaaaaaaarge!!!"
      description: "Global engage: Kled charges to a target area, leaving an ally speed trail and gaining a shield. Skaarl rams the first enemy champion in the path for max-HP magic damage and a knock-back."
      dd_spell_id: "KledR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
  situational_items:
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs heavy-armor frontline (2+ tanks like Sion + Maokai); shreds armor and adds max-HP scaling"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Vladimir, Mordekaiser top, double-AP comp); magic shield saves you mid-dive"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late-game flank insurance: revive lets you commit fully on R engage without throwing the fight"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps if the enemy team has 2+ heavy CC or AP threats (stuns, roots, knockups)"
  base_combo: ["Q", "E", "W", "AA", "AA", "AA"]
  win_condition: "Bully your lane opponent in early skirmishes (levels 2-6), then use R to flank from a side lane and create global pressure with engages onto the enemy back line during objective fights."
  weakness: "Squishy and barely mobile while dismounted. Champions with point-and-click CC or sustained ranged poke shut down your remount and force you to recall before reaching power spikes."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health"
    primary_rationale: "Conqueror stacks during Kled's drawn-out trades (W 4-attack window plus Q yank), granting stacking AD plus heal at full stacks. Triumph refunds HP/gold on takedowns to reset Skaarl, Legend: Alacrity speeds up the W auto window, Last Stand boosts damage below 60% HP."
    secondary_rationale: "Bone Plating reduces 3 consecutive hits in lane trades (great against ranged poke and short-trade tops like Renekton, Darius). Unflinching grants tenacity (faster recovery from CC like stuns/roots) below 50% HP and while CC'd, helping you survive a chain-CC dive after R."
    secondary_alternative: "Against multiple AP threats with point-and-click CC (Galio, Sylas, Vladimir top), swap Resolve to Domination with Sudden Impact (extra magic penetration after E dash) and Treasure Hunter (bonus gold on first takedown) to amplify your assassin-style flanks onto the enemy carries."
matchup_draft:
  pick_into:
    - examples: ["nasus", "kayle", "veigar"]
      archetype: "Immobile late-game scalers"
      reason: "Kled punishes their weak early game with level 2-6 all-ins (full commitment fights). Bear trap hooks Nasus off his Q stacks before he reaches a power spike, and they have no dash to escape the pull."
    - examples: ["darius", "garen", "sett"]
      archetype: "Immobile melee lane bullies"
      reason: "Q has 800 range, outside Darius's E pull and Sett's W. W's 4-hit attack speed window plus E recast lets Kled win the brawl and walk out before their abilities come back up."
    - examples: ["akali", "gangplank"]
      archetype: "Squishy early-game laners"
      reason: "Kled bullies them off CS at level 2 with E plus auto-attacks. They lose tempo on first item and never catch up if Kled snowballs (turns an early lead into a bigger lead) the bully phase into roams."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Ranged auto-attack tops"
      reason: "They kite Kled (move away while autoing) outside his Q's 800 range. He cannot land W procs on a moving target, and Skaarl's HP melts from poke before he reaches level 6."
    - examples: ["fiora", "tryndamere"]
      archetype: "Anti-burst self-peel duelists"
      reason: "Fiora's W parries Q yank or E recast knock. Tryndamere's R survives Kled's burst window — Skaarl falls off, Kled dismounts, Tryndamere wins the dismounted 1v1 with no escape for Kled."
    - examples: ["dr-mundo", "volibear"]
      archetype: "Heal-stacking sustain tops"
      reason: "They outsustain Kled's W cooldown and recall later. Once they have one HP item, Kled's max-HP scaling damage from W and R no longer threatens them in a 1v1 brawl."
---

## Overview

Kled, *the Cantankerous Cavalier*, is a melee skirmisher Yordle — a short-range fighter built for extended duels rather than one-shot bursts of damage — who plays in two phases. **Mounted** on his lizard-steed **Skaarl** he is a tough close-range brawler with a ranged hook (Q), an attack-speed boost (W) called a "steroid" in MOBA jargon (a temporary buff to one stat), a dash with recast (E), and a global engage ultimate (R) — "engage" simply means starting the fight by committing onto the enemy. When Skaarl runs out of HP, Skaarl flees and Kled **dismounts** into a squishy (low-defence) ranged form with weaker abilities. He then earns **Courage** by fighting (champions, minions, monsters) until the bar fills; Skaarl then returns and Kled is restored to a portion of Skaarl's HP.

His game plan is to bully the lane with relentless trades (short exchanges of damage with the lane opponent) from levels 2 to 6, then use **R** to teleport-charge across the map for picks (eliminating an isolated enemy) on the back line — the squishy damage dealers (the carries) at the rear of the enemy team — during fights for objectives like dragons or Baron. Snowball that early lead (an early advantage that compounds over time) into mid-game roaming pressure before late-game tanks scale past him (grow stronger with items and levels).

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (small AD + lifesteal) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Skaarl's mount HP gives Kled enough effective health that you do not need a second potion. Against ranged tops who keep distance with auto-attacks (Vayne, Teemo, Quinn) start ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (HP + regen vs poke, i.e. long-range chip damage) instead.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen procs (a "proc" is when a passive triggers; Sheen's passive adds bonus damage to your next auto-attack after you cast an ability) chain with W's 4-attack window. Plus attack speed, ability haste (cooldown reduction on your abilities), move speed, and HP. Your single most important item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + reduced auto-attack damage taken. Default boots in any AD (physical-damage) top lane matchup.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — bonus AD scaling, max-HP shield when you drop low (lifesaver mid-dive — a "dive" is chasing a target under their turret to kill them while taking the tower shots), plus brief CC immunity (no stuns, roots, or knockups land while the shield holds).
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — converts physical damage you receive into a slow bleed (damage spread over the next seconds instead of arriving instantly), plus heals on takedowns.

**Situational items:**

- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — into heavy-armor frontline (the front line is the tanks who soak damage; pick this when there are two or more tanks like Sion + Maokai). Strips armor and adds max-HP scaling.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into heavy AP burst (AP is magic damage; "burst" means a lot of damage in 1-2 seconds — Vladimir, Mordekaiser top, double-AP comps). The magic shield triggers when you go low and saves a kill.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — late-game flank insurance (a flank means attacking the enemy team from a side or rear angle): the revive lets you commit fully (invest 100% in the fight) on an R engage without throwing the fight (losing a fight you were already winning).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist + tenacity (faster recovery from CC like stuns and roots). Swap from **Plated Steelcaps** if the enemy team has 2+ heavy CC (crowd control — stuns, roots, knockups, silences) or AP threats.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC/AP comps.

**Skill order:** Max **Q** first (lower cooldown and bigger yank damage — your main poke, i.e. long-range chip damage, and the setup for your gap-closer, an ability that closes distance fast). **E** second (more damage on the dash and shorter cooldown). **W** last (the percent-max-HP scaling on the fourth hit improves, but you already use W as a steroid at rank 1). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** with **Bone Plating** and **Unflinching**, or **Domination** with **Sudden Impact** and **Treasure Hunter** if the enemy team has multiple AP threats and you want to amplify assassin-style flanks.

## Key matchups

- **Darius:** Even-to-favoured. Sit at 800-range Q distance — outside his E pull range, ~545 (these numbers are in-game distance units; 800 is roughly twice the reach of a melee auto-attack). When he uses E, dash in with **E**, hook **Q**, and let W stack on him before his bleed passive (a passive that adds damage spread over time) can reach lethal stacks. Rush ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
- **Fiora:** Hard counter. She parries your Q yank or E recast knock with **W**. Trade only when her **W** is on cooldown (~22-24 seconds at rank 1). If she walks at you with **W** up, back off; do not feed her a Vital proc — Fiora marks one side of you and gets bonus damage if she autos that side.
- **Vayne / Teemo:** Hard counter. They use a tactic called kite — they move away while attacking, keeping distance, so your 800 Q range cannot reach them. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, hug your turret, and play for level-6 **R** flanks onto bot or mid lane to reset your gold gap (cash in by getting kills or assists in those side fights).
- **Renekton:** Mirror matchup of two short-range melee bullies. Whoever lands the first **Q** in the level-2 trade wins. Bait his stun with a fake step-in (a fake forward step that invites him to commit), then engage when his **W** is on cooldown (~13s at rank 1).
- **Camille:** Skill matchup (decided more by mechanical play than by hard counter rules). Her **E** hookshot dash is short-range; step to the side the moment she sticks to a wall (the visible animation of her latching) to dodge the stun. Once she misses **E**, she has no escape — full **Q-W-E** combo on her.

## Power spikes & win conditions

- **Level 2:** With ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + Q + W, Kled hits one of the strongest level-2 windows in the game. Hook on Q, dash with E, all-in (full commitment fight, no disengaging).
- **Level 6:** First **R** unlocks global pressure. Charge across the map to a bot lane skirmish (a small mid-game fight) or a dragon fight to flank the enemy back line.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 11-13):** Sheen procs make every Q→AA (auto-attack), E→AA combo hit roughly twice as hard. Side-lane skirmishes (small fights in top or bot lane, away from mid) flip in your favour. Push for first turret plate gold — the early-game shielding plates on outer turrets give bonus gold to whoever breaks them in the first 14 minutes.
- **3-item spike (~ minute 22-25):** With ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** finished (built and online), you can flank into the enemy back line during an objective fight, eat the burst, trigger the Sterak shield, and still walk out alive.

## Common mistakes

- **Recalling with low Skaarl HP and an empty Courage bar.** Dismounted, Kled has no mobility. Even the homeguard speed boost (a passive on boots that briefly boosts your run-home speed for a few seconds after a successful recall) is risky if a jungler shows on the minimap. Either farm minions to fill the Courage bar and remount before recalling, or wait for vision (allied wards revealing the area) before walking back to base.
- **Casting R with no ally follow-up.** R is a fight-starter (an ability that initiates a teamfight) that throws Kled deep into the enemy team. If your bot lane is recalled and your jungler is on the other side of the map, an R engage is a 1v3 where Skaarl evaporates before help arrives.
- **Trying to 1v1 a ranged top with W active.** W is a 4-attack steroid, but you need to actually land 4 autos. Vayne, Teemo and Quinn kite faster than your auto-attack range. Don't chase — wait for a gank (a surprise attack from your jungler off-lane) or an R flank from another lane.
- **Forgetting Skaarl's HP bar.** Skaarl has a separate HP pool above Kled's. Many new players watch only Kled's bar. Track Skaarl's bar — when it hits ~20%, disengage with **E** recast (the second E, used as escape) or you will dismount mid-fight.

## Advanced tip

The **E recast** is both an offensive and a defensive tool, but you only get the recast if your first **E** hits a champion or large jungle monster. So in a brawl: if you can finish the kill on your first dash, you lose the **E2** disengage. If you cannot, hold your damage on the first dash, recast **E** to dash back through the same target (same damage), and reposition. That trade-off — kill now or escape clean — is the highest-skill decision in the kit.
