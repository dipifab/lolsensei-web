---
title: "Lux Mid Build & Guide — Patch 16.9"
slug: "lux-mid"
language: "de"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "Lux Mid Guide für League of Legends Patch 16.9: Starter-Items, Mage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "Zauber markieren Gegner. Lux' nächster Auto-Attack zündet die Markierung und verursacht zusätzlichen magischen Schaden."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "Linearer Skillshot, der bis zu zwei Gegner rooted. Lange Cooldown — als Setup einsetzen, nicht zum Poke."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "Schild auf Hin- und Rückweg für Lux und durchquerte Verbündete. Recast holt sie früher zurück."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "Zielzone, die Gegner verlangsamt und über Zeit Schaden tickt. Recast zündet sie. Hauptwerkzeug fürs Waveclear."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "Linearer Strahl mit langer Reichweite und massivem magischem Schaden. Verbraucht alle Illumination-Marken bei Treffer."
      dd_spell_id: "LuxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassinen (Zed, Diana, Talon, Akali) — die Stasis rettet das R-Combo-Follow-up"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target ein Magic-Resist-Item baut"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snipe squishy Ziele aus maximaler Reichweite mit R bei Objective-Fights, sobald Luden's Echo und Shadowflame stehen. Kontrolliere Raum mit E und bleib hinter deiner Frontline."
  weakness: "Kein Dash, keine eigene Mobility. Hard-countered von Divern und Assassinen; bricht die Frontline weg, kollabiert auch dein Positioning."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
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
    primary_rationale: "Sorcery primär: Arcane Comet nutzt E in Q, um den Proc zu garantieren und bei jedem Trade zusätzlichen Burst aufzulegen. Manaflow Band hält das Mana für E-Spam in Lane stabil, Transcendence drückt CDR über 40%, Scorch finisht Poke bei niedrigem HP."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery und Cosmic Insight für Sustain im Early Game und häufigeres Flash in Teamfights."
    secondary_alternative: "Hat das Gegnerteam 2+ squishy Ziele mit niedrigen Resistenzen, swap Inspiration auf Precision mit Presence of Mind (Mana-Refund auf Takedown) und Coup de Grace (+8% Schaden gegen Gegner unter 40% HP)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Lux' Q ist ein Root mit langer Reichweite: Ziele ohne Dash oder Stealth werden auf einer sauberen Linie gebunden und fressen das volle E + R Combo, bevor sie reagieren können."
    - examples: ["senna", "ziggs"]
      archetype: "Backline-Scaler mit schwachem Escape"
      reason: "Cross-Map R verwandelt Positioning-Fehler in Kills. Sie tragen aus der Distanz bei, können einem Max-Range-Snipe auf Objective-Spawns aber nicht ausweichen."
    - examples: ["annie", "sylas"]
      archetype: "Mages mit telegrafiertem All-in"
      reason: "Ihr Engage braucht kurze Distanz und ein langsames Tell — Lux schildet den Burst mit W, trifft Q im Recovery-Frame und läuft weg, um den Trade zu resetten."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Sie kommen ins Cast-Window von Lux' R, bevor sie den Channel beendet; Zhonya's Hourglass hilft, rettet aber nicht, wenn die Dash-Kette vor der Stasis trifft."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery Mages mit größerer Reichweite"
      reason: "Pokken Lux jenseits ihrer Q-Reichweite. Sie hat keine Möglichkeit, die Distanz zu schließen, also blutet jede Wave HP, ohne Option auf All-in-Konter."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Globale / Cross-Map-Roamer"
      reason: "Lux clearet Waves und bleibt in Lane; der Gegner flippt mit Ult Side-Lanes und Drakes. Lux verliert das Macro-Game, selbst wenn sie das 1v1-Matchup gewinnt."
---

## Überblick

Lux ist ein Artillery Mage mit langer Reichweite, der im Zoning, im Poke (Schaden aus sicherer Distanz) und im Finishen von Fights aus der Backline brilliert. Ihr Kit dreht sich darum, **Light Binding (Q)** als Setup zu landen und dann **Lucent Singularity (E)** mit **Final Spark (R)** zu verketten, um maximalen Schaden zu raushauen. Sie hat schwache Grundmobilität und keinen Dash — der Preis dafür ist, hinter Minions und der eigenen Frontline (vorderste Linie aus Tanks und Fightern) zu bleiben. Die Mid-Lane passt zu ihr, weil der River Ganks (Überraschungsangriffe vom Jungler) aus zwei Richtungen erlaubt, auf die sie mit **Q** oder einem Cross-Map-**R**-Snipe antworten kann.

Ihr Game Plan ist einfach zu beschreiben und anspruchsvoll auszuführen: lande **Q**, wenn ein Gegner auf deine **E** tritt (der Slow verkettet das Binding zu einem garantierten Root), shove die Wave mit **E**, wenn es sicher ist, und such nach Roams in die Side-Lanes, wann immer **R** verfügbar ist. Skill-Expression sitzt im **E**-Placement (vorhersagen, wo der Gegner laufen muss, um Last-Hits zu nehmen) und in **R**-Vision-Plays (Snipe durch den Fog of War, wenn du Wards stehen hast).

## Empfohlener Build

**Starter-Items:** Doran's Ring + 2 Health Potions. Skip Corrupting Potion, außer die Lane spielt schweren Auto-Attack-Harass gegen dich.

**Core-Items (in Reihenfolge):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — Burst-Spike (kurzer Schadensschub) und Mana-Sustain für E-Spam.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration für die squishy Ziele, die du am liebsten löschst.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst; die HP-Schwellen-Passive harmoniert mit dem **R**-Finisher.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator, dein höchster AP-Slot.

**Situative Items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen schwere magische Single-Target-CC (Crowd Control, also alles was dich kontrolliert: Ahri Charm, Lissandra R, Twisted Fate Stun).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver und Assassinen (Zed, Diana, Talon, Akali).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Comps mit gestapeltem Healing (Soraka mid, Vladimir, Dr. Mundo top).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target ein Magic-Resist-Item kauft.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. Ionian Boots of Lucidity sind okay, wenn das Team mehr **R**-Uptime als Finisher braucht.

**Skill-Order:** Maxe **E** zuerst (Waveclear und Haupt-DPS), **Q** als zweites (Utility-Binding), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight** — oder **Precision** mit **Presence of Mind** und **Coup de Grace**, wenn das Gegnerteam mehrere squishy Ziele mit niedrigen Resistenzen hat.

## Wichtige Matchups

- **Yasuo / Yone:** Können deine **Q** und **E** mit Wind Wall blocken. Halte **Q** zurück, bis sie ihre Abilities verbraucht haben, und nutze **E** zum Wave-Clear nur aus sicherer Distanz.
- **Diana / Akali:** Dive-Threats (Champions, die direkt auf dich springen). Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nach Luden's Echo; nutz **Flash** in Lane gegen sie nie offensiv.
- **Orianna:** Ausgeglichenes Matchup, entschieden in Teamfights. Eure Reichweiten matchen sich; lass dich nicht in Auto-Attack-Trades ziehen, weil sie mit demselben Item-Set härter scaled.
- **Twisted Fate:** Roam-Priority-Race. Spielt er Gold Card auf dich, **Q** ihn vor dem Gap-Close; sonst track seine **R** mit Vision Wards auf River und Tri-Bush.
- **Galio:** Steh nicht eng bei Verbündeten in Mid pre-6 (seine **W** bestraft gruppierte Ziele). Punish ihn, während er Minions melee'd; ihm fehlt die Waveclear-Reichweite, um dich im Push zu überholen.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einem Punkt in **E** plus der **Q** vom Start hast du die Werkzeuge, den Gegner aus einer slow-pushenden Wave zu zonen.
- **Level 6:** Erste **Final Spark** schaltet Roams und Snipe-Druck frei. Mit dem **Q-E-R**-Combo im Muskelgedächtnis ist ein unwarded Mid-River-Fight ein Free-Kill.
- **Luden's Echo fertig (~ Minute 12-14):** Wave-Kontrolle kippt. Du kannst shoven und mit der Wave auf der Gegnerseite roamen — das öffnet Jungle-Pathing in deren Bot-Side.
- **Rabadon's Deathcap online (~ Minute 24-28):** Deine **R** one-shotted squishy Ziele, die kein einziges Magic-Resist-Item gekauft haben. Erzwing hier Objective-Fights.

## Häufige Fehler

- **Q als Harass ohne Setup werfen.** Lande zuerst **E** unter ihren Füßen, um sie zu slowen, dann **Q** auf den Pfad, den sie laufen müssen. Nackter **Q**-Poke ist verschwendetes Mana.
- **E für leere Waves zurückhalten.** Shove die Wave on-Cooldown, wenn du Mana hast; der Trade, den du aufgibst, ist viel kleiner als die Prio (Lane-Vorteil), die du für Roams und Scuttle gewinnst.
- **In Teamfights automatisch auf Maximalreichweite stehen.** Maximale **R**-Range stellt dich außerhalb des Peels deines Teams (Schutz durch Mitspieler). Steh auf der zweithintersten Position, damit ein Flank dich nicht löscht.
- **Q on-Cooldown beim Splitpushen.** Halt **Q** zum Entkommen aus Ganks; in Side-Lanes hast du kein Team für Follow-up — das Binding ist ein Panik-Knopf, kein Poke-Treibstoff.

## Fortgeschrittener Tipp

Übe den **W**-Cancel: recaste **Prismatic Barrier** in dem Moment, in dem sie ihren Hinweg-Peak erreicht — der Rückkehrschild kommt mit Maximalwert an, und du peelst und shield-bombst einen Verbündeten gleichzeitig. In Teamfights bringt das ungefähr den 2x effektiven Schildwert verglichen damit, **W** den ganzen Pfad laufen zu lassen.
