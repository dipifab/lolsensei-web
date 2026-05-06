---
title: "K'Sante Top Build & Guide — Patch 16.9"
slug: "k-sante-top"
language: "de"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "K'Sante Top Guide für League of Legends Patch 16.9: Starter-Items, Tank-Skirmisher Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "Fähigkeiten markieren das Ziel. K'Santes nächster Auto-Attack verursacht Bonusschaden. In All-Out-Form verursachen alle Angriffe und Fähigkeiten Extra-Schaden."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "Kurzer linearer Schlag, der Schaden verursacht und verlangsamt. Jeder Treffer gibt einen Stack: bei 2 Stacks ist der nächste Cast eine Shockwave, die zieht und stunt. Niedriges CD, spammbares Trade-Tool."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "Lädt auf (unstoppable + starke Schadensreduktion), dann Dash nach vorn, der getroffene Gegner knockbackt und stunt. In All Out verursacht Bonus True Damage, verliert aber Knockback und Stun."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "Kurzer Dash + Eigen-Schild. Auf einen Verbündeten gezielt, erhöht sich die Dash-Reichweite und der Verbündete wird ebenfalls geschildet. In All Out reduziertes CD und höhere Dash-Speed."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "Stößt einen gegnerischen Champion zurück: trifft er eine Wand, nimmt er Bonusschaden. K'Sante dasht hinter ihn und transformiert — gewinnt Attack Speed, Armor Pen und Omnivamp, verliert aber Max HP und Bonus-Resistenzen."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "gegen AD die auto-attackt und heilt (Aatrox, Trundle, Nilah, Yi) — wendet grievous wounds (40% Heilungsreduktion) auf den Angreifer an"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "gegen AP-Burst top/jungle (Mordekaiser, Vladimir, Diana) — magic resist + 25% Bonus auf Heilung/Schilde"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "gegen Hyper-Attack-Speed-Carries (Vayne, Kog'Maw, Yi) — Aura -20% AS zerstört ihren DPS"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap von Plated Steelcaps wenn das Gegnerteam 2+ harte CC-Bedrohungen oder einen AP-Top hat — magic resist + tenacity"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "Sei die Frontline in Teamfights: lade W, um Engages zu unterbrechen, hebe R für einen Schlüssel-Carry auf, um ihn per Wall-Slam vom Team wegzuziehen. In All-Out-Form finishe Backline-Ziele mit AS + Armor-Pen-Burst."
  weakness: "Kurze Range (W ist 600, kein echter Gap-Closer außer E). Ranged Kiter poken ihn aus der Lane. R All Out ist ein langer Commitment: verliert man den transformierten Fight, fehlt 80-120s die Win Condition."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primär: Grasp of the Undying gibt bei jedem Proc gratis HP-Scaling, perfekt für einen skalierenden Tank. Shield Bash macht aus dem E-Schild Bonusschaden auf der nächsten AA — direkte Synergie mit dem Passive-Proc. Conditioning + Overgrowth sichern die Late-Game-Tankiness."
    secondary_rationale: "Sorcery sekundär: K'Sante ist mana-hungrig und ability-haste-hungrig. Manaflow Band hält das Mana zum Q-Spam in Lane stabil; Transcendence gibt Ability Haste und refundet Cooldown auf Takedown — entscheidend für aufeinanderfolgende R-Casts."
    secondary_alternative: "Gegen heavy Poke- oder Scaling-Matchups (Vayne, Teemo, Jayce) swap Sorcery → Inspiration mit Biscuit Delivery (gratis HP+Mana-Biscuits early) + Cosmic Insight (Flash und Summoner-Spell-Cooldowns reduziert)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Immobile Melee-Bruiser ohne Dash"
      reason: "K'Santes W stunt sie mitten im Versuch und sein R Wall Slam bestraft ihre fehlende Escape; der 2-Stack-Stun von Q unterbricht ihre Schlüssel-Wind-ups (Darius Pull, Garen E-Spin), bevor der Spell endet."
    - examples: ["renekton", "riven", "camille"]
      archetype: "Combo-abhängige Diver mit nur einem Commit-Window"
      reason: "Q-Stun und 40%+ Damage Reduction von W fressen ihren All-in: sind Dashes und Burst weg, dreht K'Sante mit R um und finisht in All-Out-Form."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "Ranged Top-Laner, die ihn kiten"
      reason: "K'Santes W hat nur 600 Range und E nur 525. Ranged-Gegner poken ihn mit Auto-Attacks außerhalb der W-Range aus der Lane und laufen weg, sobald er versucht zu laden — zurück bleibt nur eine Ulti mit langem Cooldown."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "Anti-Tank-Spezialisten"
      reason: "Fioras Vital Strikes verursachen True Damage, der Schilde und Resistenzen ignoriert; Olafs R cleanst den W-Stun und macht ihn unstoppable in Trades; Trundles R stiehlt K'Santes Bonus-Resistenzen genau dann, wenn er in All-Out-Form am verletzlichsten ist."
---

## Überblick

K'Sante ist ein Tank-Skirmisher-Hybrid: ein schwerer Bruiser in der Basis-Form, der in einen duellierenden Skirmisher übergeht, sobald sein Ulti **All Out** aktiv wird. Das gesamte Kit ist um zwei Phasen gebaut. In der Basis-Form absorbiert er Schaden mit der Charge-up-Reduktion von **W (Path Maker)**, kontrolliert Fights mit dem Stun von **Q (Ntofo Strikes)** und dem Knockback von **W**, und schildet sich oder einen Verbündeten mit **E (Footwork)**. Wenn **R** ihn transformiert, tauscht er die ganze Robustheit gegen Attack Speed, Armor Penetration und Omnivamp (Lifesteal, der bei jeder Schadensart funktioniert) — und wird für ein paar Sekunden zum schadensbringenden Duellanten.

Der Spielplan: die Early Lane geduldig spielen — Short Trades (kurze 1-2-Ability-Austausche, kein Kill-Commitment) mit **Q**-procc'ten Auto-Attacks (Proc = ein Effekt, der bei erfüllter Bedingung auslöst; hier die **Q**-Marke, die deine nächste AA detoniert) — und dann snowballen (wachsenden Vorsprung aufbauen: Kills → Gold → Items → mehr Kills), indem du die Wave (die Minion-Welle in Richtung gegnerischer Turm) shovst und nach **W**-Charge-Engages suchst, sobald der Sustain von Sundered Sky steht. Im Mid-Game bist du die Frontline (der Tank/Bruiser, der den Fight aufmacht, indem er Schaden absorbiert, damit die Carries — die Hauptschadensverteiler deines Teams — von hinten austeilen). Im Late-Game ist deine **R** ein Target-Removal-Tool: pick einen Schlüsselgegner, slamm ihn durch eine Wand und finisher ihn in All-Out-Form.

## Empfohlener Build

**Start-Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Der Schild gibt Sustain in Melee-Trades und eine kleine Heal-on-low-HP-Passive, die zum Tank-Profil von K'Sante passt.

**Core-Items (in Reihenfolge):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — dein erster großer Spike. Alle paar Sekunden crittet deine nächste Auto-Attack und heilt dich um ~10% der fehlenden HP. Der Proc passt perfekt zur Passive-Marke von **Q** (ein Bonus-Schaden-Debuff, den Fähigkeiten anwenden und die nächste AA detoniert).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Armor + flat reduction auf gegnerische Auto-Attacks. Default-Boots gegen einen AD-Top-Laner.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — fügt eine Aura hinzu, die Gegner um dich herum verbrennt (AOE = Schaden auf eine Fläche, nicht auf ein Einzelziel). Hilft beim Wave-Clear und tagged mehrere Ziele in Teamfights, sodass deine **Q**-Procs öfter treffen.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — dein skalierendes Tank-Item. Stackt Bonus-Armor und Magic Resist über die Zeit im Fight, plus ein kleiner AOE-Return-Strike. Late-Game-Tankiness-Decke.

**Situations-Items:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — gegen Squads mit auto-attack-lastigen AD-Champions, die sich viel heilen (Aatrox, Trundle, Nilah, Master Yi). Wendet grievous wounds (40% Heilungsreduktion) auf den Gegner an, wenn er dich trifft.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — gegen AP-Bedrohungen top oder jungle (Mordekaiser, Vladimir, Diana). Gibt magic resist und 25% Bonus auf alle erhaltenen Heilungen/Schilde — multipliziert den Sundered-Sky-Heal und den **R**-Omnivamp.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — gegen Hyper-Attack-Speed-Carries (Vayne, Kog'Maw, Master Yi). Die Aura senkt Attack Speed naher Gegner um 20% und kastriert ihren DPS, während du ihre AAs schluckst.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Gegnerteam 2+ Champions mit hartem Crowd-Control hat (Leona, Lissandra, Maokai) oder einen AP-Top-Laner. Gibt magic resist + tenacity (schnellere Erholung von Stuns/Slows).

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** als Default gegen AD-Top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen AP oder heavy CC.

**Skill-Order:** Maxe **Q** zuerst (niedrigster Cooldown, Hauptschaden und 2-Stack-Stun), **E** als zweites (mehr Schild + schnelleres Cooldown für Engages), **W** zuletzt (Base-Damage skaliert pro Level am wenigsten — der Wert liegt in der Utility, nicht im Per-Rank-Damage). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. Sekundär **Sorcery** mit **Manaflow Band** + **Transcendence**. Stat Shards: Adaptive Force / Adaptive Force / Health Scaling.

## Wichtige Matchups

- **Vayne / Teemo:** Ranged-Poke-Albträume (Poke = Range-Schaden zum HP-Zermürben ohne Fight-Commitment). Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, swap die Sekundärrunen auf Inspiration für **Biscuit Delivery** (gratis HP+Mana-Biscuits in Lane) Sustain, und versuch keinen W-Charge — sie laufen raus. Farme unterm Turm bis ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** online ist und ruf einen Jungle-Gank (ein Gank = dein Jungler kommt aus einem Seitenpfad in deine Lane, um den Gegner zu überraschen).
- **Darius:** Vorteilhaft. Der 2-Stack-Q-Stun (der zweite Q-Cast nach 2 Stacks zieht und stunt) schneidet seinen Pull, die Damage Reduction von W absorbiert das Bleed (Blutung) seines Q-Außenrings (Darius' Q trifft am Außenrand des Kreises am härtesten, und seine Passive stackt Blutungs-Schaden bei jeder AA, die er auf dich landet). Kämpfe nicht im Q-Außenring auf Level 1-3; ab Level 4 kannst du short-traden und weglaufen.
- **Mordekaiser:** Ausgeglichen bis leicht vorteilhaft. Deine **W** während des Charge-ups macht dich unstoppable (immun gegen Stuns, Slows und andere CC), du kannst sie also in seiner **R**-Prison nutzen, um den Effekt auf dich zu brechen. Verbrenn **W** nicht außerhalb der Prison — heb sie dir auf.
- **Fiora:** Hard Counter. Ihre Vital Strikes verursachen True Damage (Schaden, der Armor, Magic Resist und Schilde umgeht). Deine Schilde und Resistenzen tun nichts gegen ihre Hauptschadensquelle. Spiel sehr passiv, gib CS (Creep Score = Minion-Kills) für Sicherheit auf und ruf früh einen Jungle-Gank.
- **Renekton:** Skill-Matchup (entscheidet sich mehr durch Spielerstärke als durch das Kit). Sein Power Spike auf Level 2-3 ist brutal (ein Power Spike = ein Moment, in dem der Champion deutlich stärker wird, hier durch das Freischalten von Schlüssel-Abilities) — kämpf nicht vor Level 3. Sobald du alle drei Abilities hast und ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** im Bau ist, kippst du das Matchup: der Q-Stun unterbricht seine W (sein Stun-Spell), dann gehst du all-in (ein Trade mit vollem Commitment bis zum Kill, ohne Option, mitten im Fight zurückzuziehen).

## Power Spikes & Siegbedingungen

- **Level 2 → Level 3:** Auf Level 3 hast du Q + W + E und der 2-Stack-Q-Stun ist online. Das ist dein erstes Short-Trade-Window: führe mit dem **W**-Charge an, um sie von der Wave zu vertreiben, dann **Q** zweimal für den Stun → **E** raus.
- **Level 6 (erste R):** All Out schaltet die Kill-Threat frei. Suche einen Jungle-Gank: **R** den Gegner gegen deine Wand (der Wall-Slam verursacht Bonusschaden und blockt sie), transformiere und finishe in All-Out-Form.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky komplett (~ Minute 11-13):** Dein Sustain verdreifacht sich. Du kannst jetzt Extended Trades gewinnen und durch Gank-Versuche in Lane bleiben. Push für einen Solo-Kill oder setze einen Tower-Dive auf (unter den gegnerischen Turm gehen, um trotz der Turmschüsse zu killen — funktioniert, weil die Damage Reduction von **W** die Tower-Hits während des Dives schluckt).
- **3-Item-Teamfight (~ Minute 22-26):** Mit ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** wirst du das primäre Engage-Tool des Teams (der Champion, der den Fight startet, indem er reinspringt und ein Ziel locked). Such nach **R**-Picks (ein "Pick" = einen isolierten, falsch positionierten Gegner ausschalten) auf gegnerische Carries nahe Wänden.

## Häufige Fehler

- **R drücken, wenn du den Fight schon verlierst.** All Out tauscht Robustheit gegen Schaden. Bist du schon low HP und in Unterzahl, stirbst du in transformierter Form binnen Sekunden. **R** ist ein "Win-Condition"-Tool, kein Panik-Button — nutze es, wenn du ein Ziel isolieren und finishen kannst, nicht wenn du fliehen willst.
- **W vor einem Ranged-Gegner laden.** Sie sehen das Wind-up (die langsame Lade-Animation, die den Dash telegraphiert) und laufen weg. Nutze **W** als Counter-Engage (sie committen zuerst, du chargest in die Animation rein) oder aus dem Fog of War (der dunkle Bereich der Map, wo der Gegner dich nicht sieht), um sie zu überraschen — niemals als Opening-Poke.
- **Q-Stacks überspringen.** Jeder **Q**-Treffer gibt einen Stack (eine Ladung, die sich auf der Ability aufbaut): bei 2 Stacks ist der nächste Cast eine Shockwave, die zieht und stunt. Eine **Q** mit nur einem Stack für Schaden zu werfen und den Stack auslaufen zu lassen, verschwendet dein härtestes CC (CC = Crowd-Control: Stuns, Slows, Knockbacks). Plan immer den zweiten Cast.
- **Solo-Splitpush als Tank.** Splitpush = eine Side Lane allein pushen, um den Gegner zu zwingen, jemanden zum Stoppen zu schicken. K'Sante ist ein Teamfight-Champion ohne globale Ulti, um andere Lanes zu beeinflussen — sein Kit braucht Verbündete für das Follow-up des **R**-Wall-Slams. Gruppier dich mit dem Team für Objectives, außer du hast einen klaren Zahlenvorteil.
- **Vergessen, dass All Out das Max-HP senkt.** Wenn du dich transformierst, fallen aktuelle und maximale HP um einen Prozentsatz. Warst du vor dem Transform auf 100% HP, landest du am neuen (niedrigeren) Max mit proportionalen aktuellen HP — bist du aber schon low, kann der Prozent-Drop dich direkt töten. Check die HP-Bar, bevor du R drückst.

## Fortgeschrittener Tipp

Der W-Cancel: während du **Path Maker** lädst, kannst du den Cast jederzeit lösen — kurze Charges verursachen weniger Schaden und kürzeren Knockback/Stun, aber du bleibst während der Charge-Dauer unstoppable. Nutze ein **halb geladenes W**, um eine Schlüssel-Ability eines Gegners zu dodgen (Lissandras **R**, Malphites **R**, die AA-Kette eines ADCs), ohne die volle Charge-Zeit zu investieren, und re-engage zu deinen Bedingungen. Der Cooldown ist unabhängig von der Charge-Länge identisch — keine Strafe fürs frühe Abbrechen. Pros nutzen das, um Opening-Engages zu überleben; Ranked-Spieler full-chargen fast immer und laufen direkt in den Punish (die Konter-Aktion, die du kassierst, weil du dich zu sehr exponiert hast).
