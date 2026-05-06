---
title: "Dr. Mundo Jungle Build & Guide — Patch 16.9"
slug: "dr-mundo-jungle"
language: "de"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Dr. Mundo Jungle Guide für LoL Patch 16.9: Jungle-Pfad mit Mosstomper-Pet, HP-stacking Tank-Build, Gank-Timings, wichtige Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Erstes Hard CC (Stun, Root oder Knockup, das dich festsetzt) trifft Mundo nur für HP-Kosten und droppt eine Phiole; aufheben heilt und resettet das Passive. Gibt zudem riesige HP-Regeneration."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Linearer Skillshot mit langer Reichweite, der magischen Schaden in Prozent der aktuellen Ziel-HP verursacht und slowed. Kostet HP, kein Mana — deine Ressourcenleiste ist dein HP-Balken. Hauptgank-Tool pre-6 aus 975 Range."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Selbst-Channel, der nahen Gegnern magischen Schaden tickt und einen Teil des erhaltenen Schadens speichert. Recast für einen Burst — trifft sie einen Champion, heilst du einen % des gespeicherten Schadens. Im Camp-Clear toggeln für Sustain."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passiv: Bonus-AD, das mit Max-HP scaled. Aktiv: Melee-Schlag mit Extra-Schaden basierend auf fehlenden HP. Bei Kill schleudert er den Körper auf Gegner in der Bahn. Dein Single-Target-Damage-Spike auf Ganks."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-Cast: heilt sofort einen % der fehlenden HP, dann Bonus Move Speed und riesige HP-Regen für die Dauer. Drück sie vor dem Gank, vor dem Fight, vor dem Tod — niemals danach."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Swap von Plated Steelcaps gegen 3+ CC-Quellen oder 2+ AP-Bedrohungen; Tenacity rettet nach verbrauchter Passive-CC-Immunity"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5. oder 6. Item bei Late-Game (~Minute 30+); HP-Regen-Passive heilt full zwischen Camps und Rotations ohne Recall"
    - dd_id: "3075"
      name: "Thornmail"
      against: "gegen Auto-Attack-Carries (Vayne Bot, Tryndamere Top, Master Yi Jungle); reflektiert Schaden und appliziert Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "gegen schwere AP-Comps mit 2+ Ranged-Mages (Karthus + Brand, Lillia + Lux); MR + Move Speed gegen Magic Damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "gegen Single-Target-AP-Burst (Syndra Mid, Veigar, LeBlanc); der Spellshield (Einmal-Barriere) blockt den Combo-Opener"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full Clear bis Level 4, Gank auf 6 sobald R unlocked, jeden Drake-Fight ab Minute 14 in HP-Regen-Vorteil ummünzen. Bei Min 25 mit Heartsteel + Warmog's läufst du auf die Backline und weigerst dich zu sterben."
  weakness: "Langsamer Pre-3-Clear, schwache Invades, gekitet von Ranged-Comps ohne Stick-Möglichkeit. Healing-Cut-Items (halbieren gegnerisches Heal) zerlegen sein Kit; gegen True Damage (Fiora, fed Vayne) schmilzt die HP-Wand."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve primär: Grasp gibt alle 4s im Champ-Combat gratis HP — ein 5s-Gank stackt 2-3 Procs. Font of Life markiert Q-geslowte Ziele für Laner-Heal, Conditioning scaled Armor/MR ab Minute 12, Overgrowth verwandelt gefarmte Camps in permanente HP."
    secondary_rationale: "Sorcery sekundär: Nimbus Cloak gibt einen Move-Speed-Burst nach Flash oder Ghost (deine Gap-Close-Summoners), Gathering Storm gibt alle 10 Minuten Adaptive — Mundos Win Condition ist Late Game, also passen genau diese Runen."
    secondary_alternative: "Gegen Early-Skirmish-Jungler (Lee Sin, Elise, Xin Zhao) swap Sorcery zu Inspiration mit Magical Footwear (gratis Upgrade-Boots Minute 10-12) und Cosmic Insight (geringere Summoner-Cooldowns), Scaling für Invade-Survival-Tempo getauscht."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Burst-Assassin-Jungler"
      reason: "Ihr ganzes Damage-Profil ist eine Combo auf einen Squishy. Mundos Passive frisst den CC-Opener, R heilt einen % der fehlenden HP, W refunded einen Teil des Bursts. Sie verbraten Cooldowns und Mundo geht fast full raus und markiert ihren Carry für den Follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "AP-Poke- und Kite-Jungler ohne Hard Engage"
      reason: "Force of Nature plus Spirit Visage stackt Magic Resist, das wächst, während sie poken. Mundos R-Move-Speed plus Q-percent-current-HP-Slow schließen am Ende den Gap, und ein einzelnes E lässt ihre HP einbrechen, weil sie keine Defensiv-Items haben."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-Attack-Melee-Carries, auf die das Gegnerteam baut"
      reason: "Q-Slow plus Plated Steelcaps lähmt ihre Attack-Uptime. Tryndameres R kauft eine Rotation, aber ein Mundo mit Thornmail + R übersteht das Immortality-Window und chunkt ihn über den reflektierten Schaden."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "True-Damage-Skirmisher"
      reason: "Fioras Vitals, Vaynes W und Kayles Late-Game-R machen alle True Damage (Schaden, der Armor und Magic Resist ignoriert — keine Defensiv-Stat reduziert ihn). HP-Stacking bringt nichts gegen True Damage; die ganze Build kollabiert."
    - examples: ["trundle", "olaf"]
      archetype: "Anti-Tank-Jungler"
      reason: "Trundles R stiehlt Armor, MR und Move Speed für 8 Sekunden; Olafs E appliziert Grievous Wounds und sein Ult macht ihn CC-immune, also feuert das Passive nicht. Beide sind explizit dafür gebaut, Tank-Stats zu neutralisieren."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Long-Range-Sustain-Poke-Comps"
      reason: "Sie sitzen jenseits der 975 Q-Range und chippen Mundos HP jede Wave. Mundo hat keinen Dash und nur einen Move-Speed-Burst auf R; er läuft in ihren Schaden, nur um Engage zu drohen, und blutet 30% HP pro Rotation, ohne je zu schließen."
---

## Überblick

Dr. Mundo Jungle ist der simpelste Tank-Jungler im Spiel: Camps clearen, Level 6 erreichen, in eine Lane laufen und sich weigern zu sterben, egal was der Gegner draufschmeißt. Sein Kit hat einen einzigen Job — Engage soaken (der Moment, in dem ein Gegner committet, einen Fight zu starten, meist mit Hard CC oder Dash) — und er macht das mit drei Mechaniken. **Goes Where He Pleases (Passive)** absorbiert das erste Hard CC (Stun, Root oder Knockup, das dich festsetzt) für HP-Kosten und droppt eine Phiole, die du aufheben kannst, um zu heilen. **Heart Zapper (W)** speichert erlittenen Schaden im Fight und refunded einen Teil als Heal beim Recast. **Maximum Dosage (R)** heilt sofort einen % der fehlenden HP und gibt riesige Regen für die Dauer. Zusammen machen sie Mundo zum Champion mit den meisten effektiven HP in jedem Teamfight, mit dem Trade-off, dass er kein eigenes Hard CC hat und auf Q-Slows plus Team-Follow-up angewiesen ist.

Der Game Plan ist tempo-aware Farming. Pre-3 ist Mundos Clear langsam und die HP, die er in Camps verliert, sind real — invade nicht und lass dich nicht invaden. Full Clear bis Level 4, Scuttle (der River-Krebs, der beim Töten Vision gibt) contesten und um Minute 4-5 den ersten Gank auf einer Lane mit Priority suchen (Priority = die Lane, die zum Gegner pusht, sodass der Laner ein paar Sekunden weg kann, ohne Minions zu verlieren). Auf Level 6 sollte jedes R-Drücken in einen Kill, einen Objective oder einen geretteten Mitspieler umschlagen. Ab Minute 14 mit **Heartsteel** plus **Sundered Sky** online gewinnt Mundo jeden Drake-Fight allein über Stat-Sticks.

## Empfohlener Build

**Starter-Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade ist der Melee-Jungle-Starter: er lässt dich Neutral Monsters (die Camps, die du in der Jungle farmst) schneller damagen und appliziert einen kurzen Slow auf gegnerische Champions, wenn du sie mit einem Auto-Attack triffst. Refillable Potion ist ein Heal-Item, das sich an der Base gratis nachfüllt — du sparst Gold auf Chip-Damage durch Camp-Clears.

**Core-Items (in Reihenfolge):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — Quest-Upgrade von Hailblade (auto-evolved um Minute 3-4, sobald genug XP aus Camp-Kills gefarmt). Der Tank-Pet-Companion gibt extra Armor und MR, solange du out-of-combat mit Champions bist, und Tenacity (kürzere Stun-Dauer auf dir) im Fight. Pflichtkauf für jeden Tank-Jungler — das Icon, das man zuerst in der Quick-Learn-Bar sieht, sagt dem Leser, welchen Starter du genommen hast.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — erstes großes Item. Dein erster Auto-Attack auf einen Champion in jedem Fight crittet und heilt dich. Der Crit-Heal passt zu deinem Gank-Pattern: reinlaufen, Q-Slow, Auto-Crit-Heal, E für den Missing-HP-Slam. Pairt mit der R-Regen für längere Skirmishs.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots, wenn der Hauptschaden des Gegnerteams aus Auto-Attacks kommt. Reduziert diesen eingehenden Schaden in langen Fights.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — das Late-Game-Scaling-Item. Jeder erfolgreiche Proc auf einem Champion gibt Mundo permanente HP, die nie verschwinden, selbst wenn du stirbst. Bei Minute 30 hast du 8-12 Procs gebankt und deine effektiven HP verdoppeln sich verglichen mit einem Flat-Tank-Build.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — Magic Resist plus eine Healing-Amp-Passive, die deinen **W**-Burst-Heal, deine **R**-Regen und jeden Heal von Allies wie Soraka oder Yuumi pusht. Kauf ihn vierten oder fünften, je nachdem, ob das Gegnerteam mehr AP oder AD hat.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Swap von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Gegnerteam 3+ CC-Quellen oder 2+ AP-Champions hat. Tenacity (die Stat, die die Dauer von Stuns und Slows auf dir verkürzt) ist die einzige Defense, die zählt, sobald die First-CC-Immunity des Passive aufgebraucht ist.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — fünftes oder sechstes Item, wenn Spiele Minute 30 überschreiten. Sobald du den HP-Threshold knackst (etwa 3000 Bonus-HP), heilt die Passive dich in 4 Sekunden out-of-combat full, das heißt du heilst zwischen Camps full, ohne zu recallen.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — gegen Auto-Attack-Carries (Vayne Bot, Tryndamere Top, Master Yi Jungle). Reflektiert Schaden und appliziert **Grievous Wounds** (der Debuff, der das Healing des Ziels halbiert) on hit, der einzige Counter zu einem fed Tryndamere oder Vayne, die zurückheilen, was sie von deiner W-Aura kassieren.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — gegen schwere AP-Comps (Karthus + Brand, Lillia + Lux). Stackt Magic Resist, während du Magic Damage einsteckst, und gibt Move Speed — beides will Mundo.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — gegen Single-Target-AP-Burst (Syndra, Veigar, LeBlanc). Der Spellshield (eine Einmal-Barriere, die die nächste auf dich gerichtete Ability blockt) blankt den Combo-Opener und resettet nach ein paar Sekunden out-of-combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist Default. Wechsle zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen schwere CC-Ketten oder AP-heavy Compositions.

**Skill-Order:** Maxe **Q** zuerst (Range, Slow, percent-current-HP-Schaden scalen alle pro Rang — dein einziges Ranged-Tool und dein Haupt-Gank-Setup). Maxe **E** als zweites (der Missing-HP-Aktiv scaled hart mit Bonus-AD, und Bonus-AD scaled mit Max-HP). Maxe **W** zuletzt; ein Punkt early reicht für Clear-Sustain. Nimm **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Grasp of the Undying** — alle 4 Sekunden im Champion-Combat verursacht dein nächster Auto-Attack Bonus-Magieschaden, heilt dich und gibt permanente HP. Pair mit **Font of Life** (dein Slow von Q markiert Ziele, sodass dein Laner heilt, wenn er sie trifft — perfekt für Ganks), **Conditioning** (extra Armor und MR ab Minute 12) und **Overgrowth** (HP-Scaling über Tode naher Minions). Sekundär **Sorcery** mit **Nimbus Cloak** (Move-Speed-Burst nach Flash oder Ghost) und **Gathering Storm** (Adaptive-Scaling alle 10 Minuten). Stat Shards: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Wichtige Matchups

- **Lee Sin / Elise / Xin Zhao:** Early-Game-Jungler, die deine Weak Side invaden. Track sie mit Vision Wards (platzierten Items, die ein kleines Map-Areal für ~90 Sekunden enthüllen) auf Raptors und Red Buff (Camps in deiner eigenen Jungle). Vermeide Pre-3 1v1-Invades — dein Clear ist langsam und du hast keinen Smite-Damage, um einen 1v1-Versuch sofort zu deletieren. Mach Full Clear, contest Scuttle, dann fang mit dem Ganken an.
- **Master Yi / Karthus:** Scaling-Jungler. Du matchst ihr Scaling fast Item für Item, aber sie hitten ihren Power Spike früher (Yi auf Blade of the Ruined King, einem Attack-Speed-Lifesteal-Item; Karthus auf Liandry's Torment, dem AP-Burn-Damage-Item). Erzwing Fights und Objectives (Drake Bot Side, Rift Herald Top Side — Neutral Monsters, die team-weite Buffs und Gold beim Töten geben) vor Minute 18 und gank Lanes konstant (ein "Gank" ist ein Überraschungsbesuch des Junglers in einer Lane, um einen Kill zu scoren), um ihnen das Farm-Window zu nehmen.
- **Trundle:** Direkter Hard Counter. Sein R (Subjugate) klaut deine Armor, MR und Move Speed für 8 Sekunden — exakt deine drei besten Stats. Vermeide Solo-Skirmishs; kämpf nur mit Mitspielern, die in 2 Sekunden Follow-up bringen. Bau ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail**, um Grievous Wounds auf seinen Q-Lifesteal aufzudrücken.
- **Hecarim / Volibear:** Mirror-Engage-Tanks. Wer seinen CC zuerst landet, gewinnt den Trade. Spar dir das **Passive** für nach ihrem Commit (Hecarim E Knockback, Volibear Q Knockback). Sobald du ihren ersten CC gratis frisst, sustainst du sie im Follow-up aus.
- **Kha'Zix / Rengar:** Burst-Assassin-Jungler. Sie invaden Single-Targets in der Side-Jungle. Tank ihren ersten Burst mit Passive + R, dann E sie, sobald sie HP-committed sind — dein Missing-HP-Scaling auf E one-shotted einen Rengar bei 70% HP von 30%.

## Power Spikes & Siegbedingungen

- **Level 4:** Full Clear fertig, alle drei Abilities online. Such den ersten Gank auf der Lane, die einem stuck-pushenden Gegner am nächsten ist (die Lane mit den niedrigsten gegnerischen HP und den meisten Minions auf der Gegnerseite von Mid). Q-Slow aus 975 Range plus W-Tick obendrauf ist eine glaubhafte Kill-Threat selbst pre-6.
- **Level 6:** Erstes **Maximum Dosage**. Der größte Power-Swing in Mundos Game. Find einen Fight innerhalb von 30 Sekunden nach 6 — gank eine Lane, contest den zweiten Scuttle oder setup den ersten Drake. Der Instant-Heal von R verwandelt einen "verlorenen Gank" in einen garantierten Exchange.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky fertig (~ Minute 12-14):** Erster echter Damage- und Sustain-Spike. Um Drake oder Rift Herald zu fighten mit W, das tickt, und Sundered-Sky-Crit-Heal-Procs auf dem Engage gewinnt das Objective, ohne R zu verbrennen.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage online (~ Minute 22-26):** Peak-Teamfight-Window. Der R-Cooldown ist kurz genug, dass du zweimal pro Baron-Timer engagen kannst. Erzwing jedes Objective; das ist dein Peak.

## Häufige Fehler

- **Pre-3 invaden.** Mundos Pre-3-Clear gehört zu den langsamsten und Hailblade hat sehr wenig Smite-Damage. Ein Lee Sin oder Elise, den du um Minute 1:30 mit einer Ability up triffst, out-tradet dich und setzt dich 2 Camps zurück. Bleib in deiner eigenen Jungle bis Level 4.
- **R drücken, nachdem du Schaden bekommen hast.** Der Instant-Heal von R ist ein % der *fehlenden* HP, aber der Regen-over-Time-Anteil ist verschwendet, wenn du sie bei 90% HP triggerst. Nutz R **vor** dem Commit zu einem Gank oder Fight, nicht danach — du willst die Regen ticken, wenn der Burst kommt, nicht hinterher pflastern.
- **Lanes ohne Priority ganken.** Ein Gank in eine eingefrorene Wave (eine Wave, die nahe der Tower des gegnerischen Laners steht) ist ein Free Kill für den gegnerischen Laner: seine Tower zoned dich, dein Laner muss weit von seiner weglaufen, um Follow-up zu geben. Gank nur Lanes, die zu deiner Seite pushen oder mittig stehen.
- **Die Passive-Phiole zu spät aufheben.** Die chemische Phiole (das grüne Fläschchen, das droppt, wenn das Passive proct) liegt ein paar Sekunden am Boden, bevor sie despawnt. Wenn du sie mitten im Gank ablaufen lässt, hast du das ganze Passive verschwendet — kein Heal, kein Cooldown-Refund. Lauf in der Sekunde drüber, in der sie droppt.
- **Full Tank ohne Spirit Visage bauen.** Jede Defensiv-Stat von Mundo verstärkt sich mit Healing-Amp. Ohne Spirit Visage heilt R weniger, W weniger, eine alliierte Soraka heilt weniger. Spirit Visage ist das Multiplier-Item; es für rohe HP zu skippen ist ein schlechterer Build zum gleichen Gold-Preis.

## Fortgeschrittener Tipp

Übe den **Flank-Gank** durch die gegnerische Jungle (in die Lane von der Seite oder hinten reinkommen, nicht vom River — der Bush hinter dem gegnerischen Laner, den er ohne Ward nicht sieht). Auf Mundo ist das wegen des Passive einzigartig stark: die erste CC-Ability des gegnerischen Laners wird in dem Moment gratis gefressen, in dem du hinter ihm auftauchst, was bedeutet, dass selbst ein 100%-HP-Ziel, das zu seiner Tower zurückflasht, direkt in ein Q-Slow-975-Range-Projektil läuft und auf E stirbt. Der Trick ist, den Eintritt durch den River-Side- oder Back-Side-Bush genau in dem Moment zu timen, in dem der gegnerische Laner die Wave zu deiner Seite pusht und weit von seiner Tower weg ist; das Gank-Pattern ist unsichtbar, bis du rauskommst, und das verfehlte CC besiegelt den Kill, bevor er sich erholen kann.
