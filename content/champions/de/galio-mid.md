---
title: "Galio Mid Build & Guide — Patch 16.9"
slug: "galio-mid"
language: "de"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "Galio Mid Lane Guide für League of Legends Patch 16.9: Starter-Items, AP-Tank-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Alle paar Sekunden verursacht Galios nächster Auto-Attack zusätzlichen magischen Schaden in einem kleinen Bereich beim Treffer."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Zwei Windstöße konvergieren am Zielpunkt zu einem Tornado und verursachen magischen Schaden über Zeit. Hauptwerkzeug für Waveclear und Poke."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Lädt einen Schild auf, der magischen Schaden absorbiert; beim Loslassen Spott und Schaden an Gegnern in der Nähe. Lange Aufladung — niemals leer abfeuern."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Kurzer Rückschritt, dann Dash nach vorn, der den ersten getroffenen feindlichen Champion in die Luft wirft. Primärer Engage und Gap-Closer."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Markiert einen Verbündeten; nach kurzer Verzögerung schlägt Galio auf dessen Position ein, schützt Verbündete im Bereich und wirft Gegner in die Luft."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "gegen HP-stapelnde Front Lines (zwei oder mehr Tanks wie Cho'Gath, Sion, Dr. Mundo) — % HP Burn skaliert in langen Fights"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "wenn du früh snowballst (3+ Kills vor Minute 12) — günstige AP pro Stack belohnt aggressive Engages"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "swap sobald ein Priority Target ein MR-Item kauft; mit Sorcerer's Shoes für Mixed Pen koppeln"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen mit Kill-Pressure-Follow-up nach deinem Engage (Zed, Talon) — Stasis deckt das Post-R-Cooldown-Fenster"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target Magic CC, das dich beim W-Laden blockiert (Malzahar Suppress, Lissandra R, Twisted Fate Stun)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Nutze Hero's Entrance R aus dem Mid, um Side Lanes und Drake-Skirmishes zu drehen, sobald Riftmaker fertig ist. In Teamfights E in die Back Line, W drücken, Front Line auf gelockten Targets kollabieren lassen."
  weakness: "W hat eine lange Aufladung (1.5s) und E eine kurze Rückschritt-Animation — beide unterbrechbar. Mobile Assassinen und DOT-Magic-Poke umgehen den W-Schild, da er nur Burst absorbiert, nicht konstanten Tick-Schaden."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve: Aftershock proct bei W-Taunt oder R-Knockup, Resistenzen-Schub beim Fokus. Shield Bash wandelt W in On-Attack-Schaden, Bone Plating absorbiert den ersten Burst, Unflinching gibt Tenacity gegen CC im Engage."
    secondary_rationale: "Sorcery sekundär: Manaflow Band hält Mana für Q-Tornado-Spam in der Lane oben (Galio ist mana-hungrig vor Riftmaker), und Transcendence pusht Ability Haste, damit Q und E zwischen Fights schneller wieder bereit sind."
    secondary_alternative: "In harten Mana-Sustain-Matchups (Cassiopeia, Cho'Gath), wo die Lane ein HP-Stat-Krieg ist, swap Sorcery zu Inspiration mit Biscuit Delivery (gratis HP- und Mana-Refill auf Level 6) plus Cosmic Insight (Flash-CD-Reduktion — besseres Catch-Potential mit R+Flash-Combo)."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "Unbewegliche Artillerie-Mages"
      reason: "Galios E-Knockup schließt die Distanz, auf der ihr Range-Vorteil basiert, und W absorbiert den Burst aus ihren langen Cooldown-Spells wie Lux R oder Veigar R."
    - examples: ["ahri", "syndra"]
      archetype: "Mid-Range Burst Mages ohne Sustain"
      reason: "Sein Magic-Damage-Schild auf W schneidet den Großteil ihres Combo-Schadens; sobald ihr Burst auf Cooldown ist, können sie keinen Tank-AP-Frame duellieren."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "Unbewegliche Bot-Lane-Carries, mit R erreichbar"
      reason: "Hero's Entrance landet auf einem Verbündeten; ADCs ohne Dash entkommen dem Knockup nicht und dein Bot kann für den Kill kollabieren."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "Kurze Reichweite Assassinen mit mehreren Dashes"
      reason: "Akalis Shroud bricht das W-Targeting, und Zed/Fizz Dash-Ketten beenden den Trade, bevor W aus der Aufladung kommt — Galios bestes CC steckt in einem langsamen Tell, den sie überholen."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "DOT-Magic-Schaden und Point-and-Click-Lockdown"
      reason: "W-Schild absorbiert Burst, nicht konstanten Tick-Schaden; Malzahars R-Suppression hält Galio im W-Laden fest und löscht das gesamte Engage-Tool."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall Nutzer"
      reason: "Yasuos Wind Wall blockiert Galios Q-Windstöße komplett und entfernt sein einziges Range-Druck-Tool in der Lane."
---

## Überblick

Galio ist ein AP-Battlemage (Ability Power, magischer Schaden) mit Tank-Stat-Scaling — er wird stärker mit AP und HP. Er ist darauf gebaut, das gegnerische Team zu unterbrechen und den magischen Schaden zu absorbieren, den sie auf deine Front Line werfen (die Tanks/Bruiser vorne). Sein Kit ist kurz, aber laut: **Winds of War (Q)** für Waveclear und Poke (Chip Damage aus Distanz), **Shield of Durand (W)** für einen geladenen Taunt (zwingt den Gegner kurz, dich anzugreifen), der gleichzeitig als Magic-Schild dient, **Justice Punch (E)** für einen Knockup (kurz in die Luft werfen, wie ein kurzer Stun) am ersten Gegner im Dash, und **Hero's Entrance (R)** für einen Teleport auf einen Verbündeten mit Knockup-und-Schild-Combo. Er spielt Mid, weil er die zentrale Position braucht, um R-Rotationen auf jede Lane zu drohen.

Der Game Plan ist geduldig bis Level 6, dann explosiv. Pushe die Wave mit Q, halte E entweder für einen Counter-Engage oder den Gap-Close auf den eigenen Gank, und sobald R bereit ist, beobachte die Side Lanes — jeder Fight bot oder top liegt in deiner Reichweite. Skill Expression liegt im W-Aufladetiming (loslassen, um einen Schlüssel-Channel zu unterbrechen — Katarina R, Karthus R, Master Yi Q) und im E-Aim (der Dash trifft nur den **ersten** Champion im Pfad, du kannst also ein Back-Line-Target picken, indem du durch eine Side Lane läufst).

## Empfohlener Build

**Startitems:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Nimm ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** nur, wenn du gegen einen Melee-Q-Spammer spielst, der dich früh wegen Mana-Mangel zum Recall zwingt.

**Core-Items (in Reihenfolge):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — erster Slot. Gibt AP, HP, Ability Haste (Cooldown-Reduktion auf jeden Spell) und eine Omnivamp-Rampe (heilt dich um einen Prozentsatz des verursachten Schadens, steigt je länger der Fight läuft), die lange Fights in Self-Sustain verwandelt. Galios W-Taunt zwingt mehrere Targets, ihn anzugreifen, was die Omnivamp füttert.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (fester Wert, der vom Magic Resist des Gegners abgezogen wird, damit deine Spells härter treffen). Standard, außer das gegnerische Team hat 3+ AD-Bedrohungen (Champions, die physischen Schaden machen); dann swap auf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — Slow auf jedem Q-Tick. Kombiniert mit Riftmaker, sodass das gegnerische Team nicht aus deiner Taunt-Reichweite disengagen kann, und das HP, das es gibt, hält dich tank-shaped.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Movement Speed und Ability Haste. Schließt die Distanz zu Back-Line-Targets, die deine R nicht direkt erreicht, und senkt den Q/E-Cooldown für Re-Engage zwischen Teamfights.

**Situative Items:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — gegen HP-stapelnde Front Lines (zwei oder mehr Tanks wie Cho'Gath, Sion, Dr. Mundo). Verbrennt einen Prozentsatz ihrer HP pro Q-Tick.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — nur mit früher Kill-Führung (du snowballst — jeder Kill macht dich stärker und erhöht die Wahrscheinlichkeit für den nächsten). Drei oder mehr Kills vor Minute 12 lassen die Mathematik aufgehen; stirbst du einmal und verlierst Stacks, ist das Item verschwendet.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — swap sobald ein Priority Target ein Magic-Resist-Item kauft wie ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** oder ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** auf einem Fighter.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen mit Kill-Pressure-Follow-up nach deinem Engage (Zed, Talon). Stasis deckt das Cooldown-Fenster, wenn W und E unten sind.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target Magic CC, das dein W mid-charge unterbricht (Malzahar Suppression, Lissandra R, Twisted Fate Stun).

**Stiefel:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** als Standard. Nimm ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen Heavy-CC-Comps (mehrere Stuns, Roots, Charms), oder ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** gegen auto-attack-lastige Kompositionen (zwei AD Carries, Master Yi).

**Skill-Order:** Maxe **Q** zuerst (Hauptschaden und Waveclear). Maxe **E** als zweites (niedrigerer Cooldown auf Engage). Maxe **W** zuletzt — Tick-Schaden und Schildwert skalieren schlecht im Vergleich zum Q-Rank-Up. Punkt in **R** auf den Levels 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Swap Sekundär zu **Inspiration** (Biscuit Delivery + Cosmic Insight) in Mana-War-Lanes.

## Wichtige Matchups

- **Akali:** Harte Lane. Ihr Shroud (W) lässt Galios W und E den Target Lock verlieren. Bleib auf Max-Q-Range, halte ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** auf der Einkaufsliste, und nutze R zum Roamen — sie kann deinen Impact in Side Lanes nicht matchen.
- **Yasuo / Yone:** Wind Wall blockiert deine Q-Windstöße komplett. Halte Q zurück, bis sie ihre Wand pushen, halte E für Counter-Engage bei ihrem All-In. Baue ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** früh, um das Auto-Attack-Fenster zu überleben.
- **Lux:** Vorteilhaft. Du läufst durch ihr Q-Binding und dasht mit E auf sie — ihre Cooldowns sind zu lang für anhaltende Trades, und W blockt ihren R-Poke-Schaden.
- **Cassiopeia:** Schwierig. Ihr DOT-Schaden umgeht die Burst-Absorption von W. Versuche keinen All-In vor Level 6; farme unter dem Turm mit Q und schau auf Roams ab Level 6.
- **Twisted Fate:** Roam-Priority-Wettrennen. Er matcht deine R-Reichweite mit seinem eigenen Teleport. Pushe die Wave, ping bot/top, wenn seine Ult vom Cooldown kommt, und sei bereit, seine Rotation mit einer Counter-R zu kontern, statt deine eigene zu starten.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + W hast du deinen ersten All-In-Trade. Lade W, während der Gegner auf deinen Q-Tornado tritt, und laufe in ihn rein — der Taunt zwingt den Auto-Attack auf dich, während die Q-Ticks ausklingen.
- **Level 6:** **Hero's Entrance** schaltet Side-Lane-Impact frei. Pushe die Wave hart, ping deine Bot Lane, und such den ersten Drachenfight.
- **Riftmaker fertig (~ Minute 12-14):** Galio wird ein echtes Teamfight-Stück. Erzwinge hier Objective-Fights — deine Omnivamp aus R-zu-W-zu-E lässt dich die erste Cooldown-Welle des gegnerischen Teams aufsaugen und überleben.
- **Drei-Item-Spike (~ Minute 22-26):** Mit ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** und ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** verketten dein Tornado-Slow plus E-Knockup 1.5+ Sekunden CC auf eine Back Line, die dich nicht kiten kann.

## Häufige Fehler

- **W ohne Target abfeuern.** Der Taunt löst nur aus, wenn ein Champion beim Loslassen in Melee Range ist. Lade W beim Laufen *zu* einem Target, nicht über einem leeren Ward.
- **R für den First-Engage nutzen, wenn das Team kein Follow-up hat.** Hero's Entrance gibt einen Knockup, aber wenn dein Team beim Landen umpositioniert, geht der Gegner einfach weg. Warte, bis ein verbündetes CC (Ashe R, Lulu Q, Pantheon Q) zuerst landet, dann R darauf.
- **Waveclear vor Level 6 ignorieren.** Galios Q ist eines der reichweitenstärksten AOE-Waveclear-Tools im Mid; nicht zu pushen heißt, die Prio aufzugeben, die du brauchst, um R für Roams zu nutzen.
- **W als zweites maxen.** Der Schildwert skaliert mit Rank, aber der Cooldown sinkt nur marginal. E-Max gibt dir auf Level 13 ein E mit 4 Sekunden Cooldown, was direkt mehr Engage-Fenster bedeutet.
- **Riftmaker zuerst gegen eine No-Tank-Comp.** Wenn der Gegner 4-AD ist (Yasuo + 2 ADC + Talon), sind Tank-Stats verschwendet. Kaufe stattdessen ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** zuerst — der Burn drückt auf ihre squishy Back Line.

## Fortgeschrittener Tipp

Der E-Knockup trifft nur den **ersten** feindlichen Champion im Dash-Pfad — nutze das, um ein Target zu picken. Wenn die feindliche Front Line zwischen dir und ihrem Carry steht, gehe um die Seitenbüsche herum (oder flanke aus dem Fog), damit deine E-Linie zuerst den Carry erfasst, während die Front Line auf der falschen Seite von dir ist. Der gleiche Trick funktioniert nach R-Landung: wenn der Knockup endet und du sofort von hinten der gegnerischen Formation E-st, knockst du das Back-Line-Target erneut, während ihr Tank sich noch erholt.
