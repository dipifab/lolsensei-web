---
title: "Alistar Support Build & Guide — Patch 16.9"
slug: "alistar-support"
language: "de"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Alistar Support Guide für League of Legends Patch 16.9: Starter-Items, Tank-Engage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar lädt sein Brüllen auf, wenn er einen gegnerischen Champion stunt oder verschiebt, oder wenn nahe Gegner sterben (Minions, Jungle-Monster oder gegnerische Champions). Voll geladen heilt das nächste Brüllen ihn und nahe Verbündete."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Schlägt den Boden um Alistar herum und knock-uppt alle nahen Gegner für 1 Sekunde. Kurze Reichweite — du musst direkt am Ziel stehen."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar dasht zu einem Gegner, fügt Schaden zu und stößt ihn in einer Linie zurück. Das Engage-Tool: kette sofort Q hinterher für die W-Q-Combo (zurück in dein Team stoßen, dann hochwerfen)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Stampft 5 Sekunden lang um sich, ignoriert Minion-Kollision und macht Schaden. Jeder Puls auf einen Champion gibt einen Stack — bei 5 Stacks stunt seine nächste Auto-Attack auf einen Champion und macht Bonusschaden."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Cleansed sofort sämtliches Crowd Control auf Alistar und gibt für die Dauer hohe Damage Reduction (physisch + magisch). Vor dem Engage in CC-lastige Teams zünden, nicht erst wenn der Fight läuft."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap von Mercury's vs auto-attack-heavy Botlanes (Caitlyn, Draven, Tristana), wenn Early-Harass mehr weh tut als Late-CC"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "gegen Attack-Speed-Stacker (Tristana, Kog'Maw, Master Yi) — verlangsamt deren Attack Speed in einer breiten Aura"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "gegen AP-Burst-Comps (double Mage wie Syndra mid + Brand support) — passiver Magieschild, der außerhalb des Kampfs regeneriert"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Lande die W-Q-Combo (Headbutt zurück + sofortiger Pulverize knock-up) auf einem Squishy-Carry, um einen Fight zu öffnen, den dein Team konvertiert. Pop R vor dem Engage bei hard CC — die Kette prallt von dir ab."
  weakness: "Kurze Engage-Reichweite — du musst direkt am Ziel kleben, um Q zu landen. Mana-knappes Early und null Range-Poke; spielt die gegnerische Botlane passiv, gibst du die Lane auf und musst roamen, um relevant zu bleiben."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Squishy Enchanter ohne eigenes hard CC"
      reason: "Sie haben keine Tools, um die Flash + W-Q-Combo zu stoppen. Sobald der Knock-up unter ihnen sitzt, sterben sie, bevor ihr ADC peelen kann — Sona und Yuumi haben keinen Escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "W hat 650 Reichweite und ist point-and-click: ADCs ohne Dash oder Blink fressen die volle Combo, wenn sie zum Last-Hit vorgehen. Sobald du committest, entkommen sie dir nicht mehr."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage Supports mit Skillshot-Poke und ohne Escape"
      reason: "Ihr Poke fischt nach Cooldowns, aber ein Q-stacked Trample plus Flash-Q in ihre Mitte löscht sie: ihr Reichweitenvorteil zählt nichts mehr, sobald du den Gap überbrückt hast."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Disengage-Enchanter mit Peel-Actives"
      reason: "Lulus Polymorph cancelt dein W mitten im Dash, Milios R cleansed deinen Knock-up auf Distanz, Renatas E zieht den Carry aus deiner Combo. Dein einziger Engage wird gratis beantwortet."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Long-Range-Poker mit Shields oder Binding"
      reason: "Sie kratzen dir gratis HP auf 900-plus Reichweite weg, ohne dass du Antwort hast. Morganas Black Shield blockt deinen Q-Knock-up komplett — du flashst für nichts rein."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Andere Tank-Engage-Supports mit längerem hard CC"
      reason: "Ihr erster Cast trifft, bevor du in Q-Reichweite kommst: Nautilus Q-Hook, Leona E-Dash-Stun, Rell W-Charge — alle outranged dein W. Du frisst ihren Engage, sie nicht deinen."
---

## Überblick

Alistar ist ein **Vanguard Support** (ein Tank-Klasse-Support, dessen Job es ist, Fights zu öffnen, nicht Verbündete zu heilen) — er engaget, indem er physisch auf den gegnerischen Carry springt und ihn mit Crowd Control festnagelt. Sein Kit dreht sich um eine Signatur-Combo: **Headbutt (W)** dasht zu einem Ziel und stößt es zurück, und ein sofortiges Recast von **Pulverize (Q)** unter den eigenen Füßen wirft es hoch. Die volle Kette (W in Q) verschiebt den Gegner zurück **in dein Team** und hält ihn dann eine ganze Sekunde in der Luft — lange genug, dass dein ADC herankommt und freien Schaden auflegt. **Trample (E)** gibt ihm kurzes **ghosted** Movement (er läuft durch Minions und andere Einheiten ohne Kollision) und einen Stun-**Proc** (ein gestackter Effekt, der bei Erfüllung einer Bedingung zündet) auf seine nächste Auto-Attack bei 5 Stacks. **Unbreakable Will (R)** cleansed jegliches Crowd Control auf ihm und gibt hohe Damage Reduction — das ist es, was einen Alistar mit 1 HP durch einen Morgana-Root marschieren und den Kill trotzdem finishen lässt.

Game Plan: in Lane **bait** (lock den Gegner zum Committen) durch leichtes Vortreten; in dem Moment, in dem ihr ADC zum Last-Hit vorrückt, Headbutte ihn zurück, Pulverize hoch, lauf mit stackendem Trample drauf, und dein ADC konvertiert. Mid-Game **roam** (verlass die Botlane, um mid oder jungle zu helfen) mit dem ghosted Movement von Trample plus der Flexibilität deiner Summoner Spells — Alistar schlüpft durch Minion-Wände, in denen andere Supports steckenbleiben. Late-Game stehst du an der Frontline, frisst gegnerisches CC mit **R** und engaget den Carry, dessen Tod den Fight beendet.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (der unifizierte Support-Starter) plus 2 Health Potions. Last-Hitte keine Minions in Lane: lass das Gold deinem ADC, World Atlas zahlt dein Gold separat über seine Quest.

**Core-Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Starter. Entwickelt sich automatisch mit Quest-Fortschritt über ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** und ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** zum Endgame-Upgrade deiner Wahl.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Magic Resist plus **Tenacity** (Stat, der die Dauer von Crowd Control auf dir verkürzt). Default-Boots für einen Engage-Tank: kürzere Stuns und Slows bedeuten, dass du nicht aus der **W-Q**-Combo herausgelocked wirst, direkt nachdem du sie committed hast.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Active, das alle nahen Verbündeten für ein paar Sekunden schildet. Pop in dem Moment, in dem du den Engage committest, damit dein Team den ersten **Burst** des Gegners (die hohen Schaden, die in den ersten 1-2 Sekunden eines Fights ausgekippt werden) absorbiert.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bindet dich an deinen **ADC** (Attack Damage Carry — der auto-attackende Botlane-Mitspieler, euer Haupt-Late-Game-Damage-Dealer): ein Teil des Schadens, den er einsteckt, wird auf dich umgelenkt, und du heilst ihn dafür. Wähle immer den Carry, dessen Leben du am dringendsten verlängern musst.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — das engage-fokussierte Endgame-Upgrade deines Support-Items (World Atlas wandelt sich nach Quest-Abschluss automatisch in eines davon). Trägt eine **Spellblade**-Passive: nach dem Cast einer beliebigen Ability — W Headbutt, Q Knock-up, R Cleanse, sogar ein E-Trample-Tick — verursacht deine nächste Auto-Attack zusätzlichen physischen Schaden on-hit, und trifft sie einen gegnerischen Champion, nimmt der für 4 Sekunden erhöhten Schaden aus allen Quellen. Das Spielmuster ist "Ability → AA → Ability → AA" über den ganzen Fight gestackt, nicht "spar die AA für nach dem CC".

**Situative Items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Boots, die Armor geben und Auto-Attack-Schaden reduzieren. Swap von Mercury's Treads, wenn die gegnerische Botlane auto-attack-heavy ist (Caitlyn, Draven, Tristana) und ihr **Harass** in Lane (Poke und Chip Damage) dir mehr weh tut als die spätere CC-Kette des Teams.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — verlangsamt die Auto-Attack-Speed naher Gegner in einer breiten Aura. Pick gegen Attack-Speed-Stacker (Tristana, Kog'Maw, Master Yi), wo dein Job zu **Peeling** (deinen eigenen Carry vor Gegnern schützen, die ihn töten wollen) statt Engage wird.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — passiver Magieschild, der außerhalb des Kampfs regeneriert. Pick gegen AP-Burst-Comps (Doppel-Mage-Setup wie Syndra mid + Brand support) — der Schild frisst eine ganze Ult und lässt dich den Engage überleben, den du angefangen hast.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** für die Tenacity — ein Sekunden-Stun von Thresh wird zu einer halben Sekunde und lässt dir das Fenster, **R** in deinen Engage zu ketten. Swap zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vor Fertigstellung nur, wenn die gegnerische Botlane dir mehr weh tut als das spätere CC des gegnerischen Teams.

**Skill-Order:** Maxe **E** (Trample) zuerst — das ist dein Lane-Schaden plus der Stun-Proc, der dir nach Q ein zweites Crowd Control gibt. Maxe **W** als zweites — niedrigerer Cooldown bedeutet mehr Engage-Fenster. Maxe **Q** zuletzt (sie ist meist Finisher; das Rank-up ändert kaum den Knock-up, nur den Schaden). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** (defensiver Runen-Baum — Durability) mit **Aftershock** (gratis Armor und Magic Resist für ein paar Sekunden, wenn du jemanden CCst, triggert auf jedem Q-Knock-up), **Font of Life** (dein CC markiert das Ziel; Verbündete, die es angreifen, heilen ein bisschen), **Conditioning** gegen Lanes, die spät scalen, oder **Bone Plating** gegen Lanes, die dich früh runterbursten wollen, und **Unflinching** (extra **Tenacity**, die Stat, die Crowd Control auf dir verkürzt, wenn du einen Summoner Spell einsetzt). Sekundär **Inspiration** (Utility-Baum) mit **Hextech Flashtraption** (ein Backup-Kurzdistanz-Flash auf langem Cooldown — Gold für Surprise-W-Q-Combos) und **Cosmic Insight** (kürzere Cooldowns auf Summoner Spells und Item-Actives). **Stat Shards** (die drei kleinen Stat-Boosts unten auf der Runen-Seite): Adaptive Force / Adaptive Force / Health (Adaptive Force = Bonus AD oder AP, je nachdem, was dein Kit nutzt).

## Wichtige Matchups

- **Leona:** Mirror **Engage** (ihr beide wollt den Fight öffnen). Sie hat längeres CC als du (Zenith Blade Dash-Stun, Solar Flare R), also versuch nicht zuerst zu engage, solange ihre Cooldowns up sind. Warte, bis sie E wirft, dann öffnet sich dein 10-Sekunden-Fenster — Flash-Q ihren ADC, während sie kein Follow-up hat.
- **Pyke:** Skill-Matchup — auf dem Papier kein klarer Vorteil, entscheidet wer besser spielt. Er outpoket dich mit Q und outroamt dich im **Stealth** (er wird unsichtbar, während er durch Büsche läuft). Halte Vision tief im River und zwing ihn, in Lane zu fighten, wo R den Kill nicht resettet.
- **Lulu:** Hard Counter gegen deinen **All-in** (vollständiges Kill-Commit). Ihr Polymorph cancelt dein W mitten im Dash. Engage nicht, solange ihr Polymorph up ist; tracke seinen Cooldown und force Fights nur im 13-Sekunden-Fenster, in dem er down ist.
- **Soraka:** Reine **Sustain-Enchanter** (ein heal-fokussierter Support, der gewinnt, indem er ihren ADC am Leben hält, nicht durch Fight-Eröffnung) ohne eigenes Engage-Tool. Du kannst Flash-Q jederzeit auf sie ziehen, wenn ihr Flash down ist — sie stirbt in deiner Combo, bevor ihr ADC reagieren kann.
- **Senna:** Long-Range-**Poke**-Matchup (Chip-Schaden auf Distanz, um dich auszuzehren). Sie bullt deine HP unter Turm. Reagier nicht, akzeptiere die schlechte Lane, roame mid oder invade auf Mobility Boots — Alistars Lane verliert, aber sein Macro-Game gewinnt.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + W):** Erster Spike. Die volle W-Q-Combo schaltet sich frei, sobald du beide Abilities hast. Ein over-extendender gegnerischer ADC (einer, der zu weit über seine erste **Wave** — die einlaufende Reihe Minions — gepushed hat) ist ein freier Kill, wenn du mit **Flash** noch up engaget.
- **Level 6 (R schaltet frei):** Engage-Potenzial explodiert. **Unbreakable Will** verwandelt dich von einem One-Shot-**Diver** (Champion, der tief in die gegnerische Backline springt und direkt danach stirbt) in einen Tank, der durch hard CC marschiert und re-engaget. Du kannst Flash-Q auf eine Morgana, ihren Root fressen, R rauscleansen und nochmal Q auf ihren ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari fertig (~ Minute 14-16):** Erstes Teamfight-Item online. Dein Engage droppt jetzt einen freien Team-Shield. Gruppiere dich mit dem Team für **Drake** (Dragon-Objective im Bot-River — Tötung gibt deinem Team permanente Stat-Buffs) oder **Voidgrubs** (kleine Monster im Top-River — das Team, das sie tötet, bekommt Bonus-Schaden gegen Strukturen).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong Endgame (~ Minute 24-30):** Der Spellblade-Proc plus die 4-Sekunden-Damage-Amplification auf Champions verwandelt deine volle Rotation in eine DPS-Sequenz. Jetzt ist W → AA → Q → AA nicht nur Setup für deinen ADC — sie kann allein 25-30% HP von einem **Squishy** (low-defense Champion wie ADC oder Mage) abrasieren.

## Häufige Fehler

- **W-Q in die falsche Richtung.** Headbutt stößt das Ziel von dir weg, in der Linie, in der du stehst. Wst du von unten, schleuderst du es die Lane hoch (weg von deinem Team). Immer von der **Flanke** (dem Seitenwinkel) Wn, damit dein Knockback den Carry in den Schaden deines Teams stößt, nicht in den ihren.
- **Engage ohne Follow-up.** Alistar ohne seinen ADC und sein Team hinter sich ist ein Tank ohne Schaden. Ist dein ADC in der Base oder dein Jungler auf der anderen Map-Hälfte, halt deinen W. Ein Solo-Engage in 4v5 gibt nur deinen R-Cooldown gratis ans Gegnerteam.
- **R proaktiv zur Flucht verbrennen.** **Unbreakable Will** ist ein offensives Tool, kein Escape-Button: gibt Damage Reduction und CC-Cleanse, aber kein Movement Speed. Es zur Flucht ohne Team drumrum zu nutzen, verzögert deinen Tod nur um 5 Sekunden. Heb R auf für den Engage, den du gleich committest, nicht für den Disengage, den du nie hättest brauchen sollen.
- **Trample auf Minions stacken.** E stackt **nur** auf Treffern auf gegnerischen Champions, nicht auf Minions. Auf einer leeren Wave zu stehen und auf den Stun-Proc zu warten, bringt nichts. Der Proc zählt nur, wenn du ihn in den Schaden deines Teams ketten kannst.
- **Passive im Fight nicht nutzen.** **Triumphant Roar** lädt von angewendetem CC (Q, R, E-Proc) und von **nahen Gegner-Toden** — Minions, Jungle-Monster oder gegnerische Champions. In einem Teamfight, in dem Minions und Jungle-Creeps um dich sterben, kannst du den Heal mehrfach stacken. Tappe den Passive-Button zwischen Aktionen: 50-100 HP gratis-Heal auf dich und deinen nahen ADC drehen den Fight.

## Fortgeschrittener Tipp

Der **Flash-W-Q-One-Shot**. Flash vorwärts und caste sofort im selben Frame **W** auf ein Priority-Target: der Dash startet von deiner neuen geflashten Position, nicht da, wo der Gegner deine Hitbox erwartete. Dann queue **Q**, während du noch in W's Dash-Animation bist — das Pulverize feuert in dem Moment, in dem W's Knockback endet, mit null Lücke zwischen den beiden Crowd Controls. Richtig ausgeführt, sieht das Ziel auf dem Bildschirm nichts außer einem Sekunden-Knock-up und stirbt, bevor es reagieren kann. Der Drill ist Muscle Memory (der automatische Finger-Reflex): bind deine Spells so, dass Flash + W + Q in Reichweite derselben Hand sind, und übe den Rhythmus im **Practice Tool**, bis du alle drei in einer halben Sekunde abfeuerst. Das ist die Mechanik, die Alistar von "Tank, der hilft" in "Tank, der Fights beendet" verwandelt.
