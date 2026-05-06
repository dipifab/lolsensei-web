---
title: "Heimerdinger Top Build & Guide — Patch 16.9"
slug: "heimerdinger-top"
language: "de"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Heimerdinger Top Lane Guide für Patch 16.9: Turret-Wall-Build, UPGRADE-Combos, Power Spikes gegen Melee-Juggernauts und Splitpush-Siegbedingungen."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Bonus-Movement-Speed in der Nähe verbündeter Türme oder eigener Turrets. Passive Belohnung fürs Kämpfen im Turret Nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Stellt eine Turret auf (max. 3 aktiv). Turrets bauen Ladung auf und feuern bei Maximalladung einen stärkeren Strahl. Ladungen reseten bei jedem Q-Cast. Reichweite 350, Cooldown 1s, 20 Mana."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Langer Raketensalve (1325 Reichweite), die auf den Cursor zuläuft. Zusatztreffer machen reduzierten Schaden. Jede Rakete, die einen Champion trifft, gibt nahen Turrets 20% Ladung."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Wirft eine Granate (970 Reichweite), die im Wirkungsbereich slowt und im Zentrum stunnt. Trifft eine Turret, lädt diese voll auf. Cooldown 11s fix, 85 Mana."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Verstärkt den nächsten Nicht-Ult. R+Q: Mega-Turret (8s, CC-immun, AOE-Splash + Slow). R+W: 4 Raketenwellen. R+E: größere Stun-Zone + Knockup im Zentrum. Cooldown 100-70s."
      dd_spell_id: "HeimerdingerR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Bruiser, die durchs Turret Nest dashen (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Sustain-Tops (Darius-Passive, Nasus, Dr. Mundo) — schaltet HP-Regen aus"
    - dd_id: "3118"
      name: "Malignance"
      against: "gegen tankige Comps, wo R+Q-Mega-Turret-Uptime zählt — kürzt Ult-Cooldown"
    - dd_id: "3135"
      name: "Void Staff"
      against: "wenn Gegner Magic Resist baut (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Hungere Melee-Tops mit der Drei-Turret-Wall in der Lane aus, dann ankere Baron- und Dragon-Fights mit der UPGRADE+Q-Mega-Turret. 1v1-Trades nur im Nest annehmen."
  weakness: "Mobile Bruiser und Diver mit mehreren Dashes brechen das Turret Nest, bevor es Schaden macht. Keine Escape außer Flash und passivem Speed-Boost."
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
    primary_rationale: "Arcane Comet procct über E (Slow fixiert das Ziel) und W-Multi-Hit. Scorch statt Gathering Storm: Heimer-Top entscheidet sich in der Lane, und Scorch bringt echten Schaden auf Level 1-6 vs Juggernauts. Transcendence kürzt E und W für dauerhaftes Turret-Uptime."
    secondary_rationale: "Biscuit Delivery deckt die Mana-Kosten der wiederholten Q-Placements im Early und gibt HP-Sustain gegen Auto-Attack-Harass. Cosmic Insight kürzt Flash- und UPGRADE-Cooldowns und vervielfacht die Mega-Turret-Fenster."
    secondary_alternative: "Gegen schweren AD-Top (Darius, Renekton, Garen) Inspiration auf Resolce sekundär swappen mit Conditioning (Armor und MR ab Minute 12) und Overgrowth (HP-Scaling). Trade-off: weniger Early-Sustain, mehr Survivability in All-in-Trades."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Immobile oder langsame Juggernauts, die durch die Turret-Coverage laufen müssen"
      reason: "Kein Dash oder Blink, um das Turret Nest zu umgehen. Jeder Schritt in Reichweite triggert Turret-Strahlen plus W-Raketen und brennt HP, bevor sie einen sinnvollen Trade landen können."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Melee-Juggernauts mit kurzem Engage, die die Distanz nicht sicher schließen"
      reason: "Ihr Engage erfordert Melee-Reichweite gegen drei gleichzeitig feuernde Turrets. E-Stun in der Anlaufzone und W-Salve stoppen den Commit, bevor er Heimerdinger erreicht."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Mobile Diver mit mehreren Dashes, die das Turret Nest aufbrechen"
      reason: "Sie dashen durch die Turret-Zone, reseten auf Minions und erreichen Heimerdinger, bevor er repositioniert. Zhonya's Hourglass ist Pflicht — die Stasis verbrennt ihre Dash-Fenster und zwingt sie zum Disengage."
    - examples: ["jayce", "quinn"]
      archetype: "Long-Range-Top-Laner, die jenseits der 970-Reichweite poken"
      reason: "Sie zonen Heimerdinger aus der Wave aus einer Distanz, in der E und W nicht zuverlässig treffen, und zwingen ihn, kostenlosen Poke zu fressen, sobald er Turret platziert oder last-hittet."
---

## Überblick

Heimerdinger Top ist ein Lane Bully, der Melee-lastige Matchups in einen langen Zermürbungskrieg verwandelt. Seine Top-Lane-Identität unterscheidet sich vom Mid: Hier ist das Ziel nicht Roaming, sondern ein undurchdringliches **Turret Nest** zu errichten — eine Zone, die alle drei H-28 G Evolution Turret abdecken und jeden Melee-Champion zwingt, zwischen Dauer-Magieschaden oder dem Verzicht auf Wave Control zu wählen (Wave Control: entscheiden, ob die Minion-Linie Richtung dir oder Richtung Gegner pusht). Die Passive **Hextech Affinity** (Movement-Speed-Bonus nahe verbündeter Strukturen und eigener Turrets) belohnt das Kämpfen im Nest statt das Kiten daraus weg. Der Begriff Kite bezeichnet das Rückwärtsbewegen während man Schaden macht, um die Distanz zu einem Verfolger zu halten.

Sein Game Plan: Turrets vor dem gegnerischen Turm pflanzen, mit **W** (Hextech Micro-Rockets) und **E** (CH-2 Electron Storm Grenade) den Gegner unter der All-in-Schwelle halten (All-in-Schwelle: HP-Level, unter dem ihm die HP für einen vollen Commit-Fight gegen dich fehlen) und auf Level 6 die UPGRADE+Q-Mega-Turret deployen, um die Lane komplett dichtzumachen. Splitpush-Druck (Splitpush: eine Side Lane solo pushen, während dein Team woanders Objectives nimmt) ist die Macro-Siegbedingung: Ein Heimerdinger-Turret-Nest in einer Side Lane ist gefährlich genug, dass Gegner zwei Spieler binden müssen, um es zu räumen — Zeit, die der Rest des Teams für Objectives nutzt.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. Das Mana hält die wiederholten Q-Placements im Early am Leben, wo jede Turret 20 Mana kostet und sofort nach Zerstörung ersetzt werden will.

**Core-Items (in Reihenfolge):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — Burst-Spike und Mana-Sustain. Die Passive procct auf Turret-Angriffen gegen Champions und stärkt W-Poke-Trades (Poke-Trades: kurze Long-Range-Austausche, die HP abtragen, ohne einen vollen Fight zu öffnen).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration, um durch Armor Runes (Armor Runes: defensive Runen im dritten Shard-Slot, die in den ersten Levels physischen Schaden reduzieren) im Early zu schneiden.
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP plus Movement-Speed-Bonus, der bei Schaden durch Spells aktiv wird. Lässt dich durch die Lane kiten, um Turrets neu zu platzieren ohne W-Reichweite zu verlieren.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst, besonders stark um Gegner unter 40% HP mit einem geladenen Turret-Strahl oder einer W-Salve zu finishen.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-AP-Multiplikator. Mit vier Items skalieren Turret-Strahlen und W-Raketen auf Schaden, der Splitpush selbst gegen zwei Verteidiger rechtfertigt.

**Situational-Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Pflicht gegen mobile Diver (Diver: Champions, die durch die Turret-Zone dashen, um dich auf kurze Distanz zu töten — Irelia, Camille, Fiora). Die Stasis verbrennt ihr Dash-Fenster und lässt die Mega-Turret weiter Schaden machen, während du unverwundbar bist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Sustain-Tops (Darius-Passive, Nasus, Dr. Mundo). Grievous Wounds (Debuff, der erhaltene Heilung halbiert) durch Turret-Treffer und W stoppt ihren HP-Regen-Loop.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — gegen tankige Compositions, in denen die UPGRADE+Q-Mega-Turret dein primäres Teamfight-Tool ist. Reduziert R-Cooldown, damit die Mega-Turret zwischen Objectives nachlädt.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — einsetzen, sobald ein Priority-Target ein Magic-Resist-Item baut (Mercury's Treads, Force of Nature, Spirit Visage).

**Stiefel:** Sorcerer's Shoes ist Default. Wechsel auf ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity, wenn du vorne liegst und mehr UPGRADE-Casts willst.

**Skill Order:** Q zuerst maxen für Turret-Schaden und Ladegeschwindigkeit. W als zweites maxen, um die Raketensalve zu skalieren. E zuletzt — primär Utility (Stun + Charge), keine Hauptschadensquelle. R auf Level 6, 11, 16.

**Runen:** Primär **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Gegen schweren AD-Top swap Inspiration auf **Resolve** mit **Conditioning** und **Overgrowth**.

## Wichtige Matchups

- **Nasus:** Farm-orientierter Juggernaut ohne Dash. Setze alle drei Turrets auf Level 1 in einer Diagonallinie zwischen ihm und der Wave. Er kann nicht zurücktraden, ohne durch die Strahlen zu laufen. Nutze E zum Stun, sobald er unter Druck last-hittet, dann W zum Nachsetzen. Respektiere sein empoweredes W auf Level 6 (reduziert deinen Attack Speed, aber die deployten Turrets werden nicht beeinflusst — der Slow-Debuff gilt nicht für Strukturen).
- **Darius:** Gefährlich auf Level 3, sobald sein Apprehend (E, der Pull) verfügbar ist. Steh nicht direkt neben deinen Turrets ohne Minions, die seinen Pull-Winkel blocken. Kite rückwärts, während er kommt, treffe E zentral, um den Pull zu unterbrechen, und sofort W. Seine Passive Hemorrhage (Bleed) stoppt, sobald du den Kontakt durch Bewegung brichst — Kiten ist hier effektiver als Stehenbleiben für Trades.
- **Irelia:** Hartes Matchup. Sie reseted ihren Dash (Ionian Fervor E) auf Minions und erreicht dich selbst durch drei Turrets, wenn sie den Pfad plant. Halt Zhonya's Hourglass als drittes Item bereit. Auf Level 6 stunnst du sie mit E im Anlauf und castest sofort UPGRADE+Q für die Mega-Turret; der AOE-Slow (Area of Effect — Schaden, der eine Zone trifft, nicht ein einzelnes Ziel) der Mega-Turret hält sie für vollen Strahlschaden fest.
- **Garen:** Direktes Matchup. Kein Ranged-Poke, kein Dash; seine einzige Escape ist Perseverance (passive HP-Regen). Verweigere ihm sein Regen-Fenster, indem du Poke ständig zwischen Turret-Strahlen und W-Raketen staffelst. Wenn er last-hittet, drop E für den Center-Stun und folge mit W für den vollen Burst-Zyklus. Sein Judgment (E-Spin) macht Schaden im Kreis, also nicht nahebleiben, wenn er ihn aktiviert — bleib auf W-Range.
- **Jayce:** Seine Ranged Form (Shock Blast) hat 1050 Reichweite gegenüber deinen 1325 W, aber praktisch wechselt er für die empowered Autos in Melee Form. Sobald er sich Melee committet, ist das dein Fenster: Drei-Turret-Zone plus E-Stun in W. Bleibt er die ganze Lane Ranged, halte die Turrets näher an deinem Turm und konzentriere dich aufs Matchen seiner Push — nicht in offene Lane chasen.

## Power Spikes & Siegbedingungen

- **Level 1:** Drei Turrets stehen ab Level 3, aber selbst eine auf Level 1 chippt den Gegner beim ersten Wave-Approach. Platziere Q nahe der Erfahrungs-Range-Grenze, sodass der Gegner zum Last-Hitten in die Turret-Reichweite muss.
- **Level 6 (UPGRADE+Q):** Die Mega-Turret macht 8 Sekunden CC-immunen AOE-Schaden, den kein Melee-Champion ignorieren kann. Drop sie mittig in der Lane, um eine Zone zu schaffen, die der Gegner ohne vollen Strahl-+-Slow-Zyklus nicht überqueren kann. Dein stärkstes Splitpush-Tool.
- **Cosmic Drive fertig (etwa Minute 14-16):** Mit drei Items (Luden's + Stiefel + Cosmic Drive) beginnt Turret-Schaden, sogar Tanks ernsthaft zu chunken. Die Movement Speed von Cosmic Drive lässt dich kiten und gefallene Turrets ersetzen, ohne Fight-Positioning zu verlieren.
- **Rabadon's Deathcap online (etwa Minute 24-28):** Late-Game-Heimerdinger-Turrets machen Schaden vergleichbar mit einem fokussierten Carry-Angriff. Erzwinge einen Baron- oder Dragon-Fight mit einer vorab platzierten Mega-Turret am Pit-Eingang für maximalen Wert.

## Häufige Fehler

- **Nicht durchgehend drei Turrets halten.** Wird eine Turret zerstört oder läuft ab, sofort ersetzen. Ein Zwei-Turret-Setup macht 33% weniger Flächenschaden und lässt Lücken offen. Bind Q auf eine Quick Key und refresh automatisch, sobald du auf 350 zu einem leeren Slot kommst.
- **UPGRADE+E (R+E) statt UPGRADE+Q (R+Q) gegen Melee-Juggernauts nutzen.** Der R+E-Knockup ist beeindruckend, aber die R+Q-Mega-Turret macht über 8 Sekunden weit mehr Gesamtschaden gegen langsame Ziele, die nicht aus dem Radius rauskommen. Spar dir R+E für Jungle-Wave-Clear oder zum Bestrafen überextender Mages — nicht als Hauptmittel gegen Melee-Tops.
- **Im Turret-Range stehenbleiben während des gegnerischen All-ins.** Turrets bieten Cover, aber keine Unverwundbarkeit. Wenn der Gegner mit vollem HP und aktivem Gap-Close committet (geht All-in ohne Fluchtplan), ist Rückwärtsbewegen während die Turrets Schaden machen richtig; nicht stehen bleiben und auf Stun-Procs warten (der Moment, in dem der Stun der Turret bei einem Treffer zündet).
- **Zhonya's Hourglass in dash-lastigen Matchups skippen.** Gegen Irelia, Camille oder Fiora ist Zhonya's kein situationelles Item — es ist Core. Bau es als drittes Item, vor Shadowflame, wann immer das Matchup es verlangt.
- **Beim Turret-Platzieren in den gegnerischen Jungle überextenden.** Eine Turret im gegnerischen River oder Tribrush (Tribrush: das Drei-Bush-Cluster im River am Dragon-/Baron-Pit — ein klassischer Gank-Chokepoint) gibt starke Vision, aber nur, wenn du den Movement-Speed-Vorteil hast, einer Klemme (in a Pinch: in unmittelbarer Gefahr und brauchst sofortige Lösung) zu entkommen. Zuerst Nest sicher etablieren, dann mit Cosmic Drive Coverage Richtung Objectives ausbauen.

## Fortgeschrittener Tipp

Bei UPGRADE+Q (Mega-Turret) bestimmt der Platzierungswinkel die AOE-Coverage. Drop die Mega-Turret nicht direkt auf den Gegner, sondern einen Schritt hinter seine aktuelle Position, entlang seines Rückzugswegs. Während er sich aus der Initial-Drop-Zone löst, läuft er in den Strahl-Range hinein, statt heraus. Kombiniert mit dem E-Stun in der Anlaufphase zwingt das den Gegner, zwei bis drei volle Strahlzyklen (jeder etwa 1.5 Sekunden) zu absorbieren, bevor er die Zone verlassen kann — also fast die volle 8-Sekunden-Dauer der Mega-Turret bei verlangsamter Zielbewegung.
