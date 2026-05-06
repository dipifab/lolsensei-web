---
title: "Karthus Jungle Build & Guide — Patch 16.9"
slug: "karthus-jungle"
language: "de"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Karthus Jungle Guide für League of Legends Patch 16.9: Smite-Path, Defile-Clear, globale R, wichtige Matchups, Power Spikes, häufige Fehler und Profi-Tipp."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "Wenn Karthus stirbt, geht er für 7 Sekunden in Geistform über und castet Q/W/E weiter ohne Manakosten. So kann er einen Fight noch aus dem Grab heraus entscheiden."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Gezielter Flächenausbruch mit kurzer Verzögerung. Verursacht doppelten Schaden, wenn er nur einen Gegner trifft. Skill Expression: Bewegung lesen und Ziel isolieren."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Breite Wand, die Magic Resist senkt und Gegner verlangsamt, die hindurchlaufen. Chase-Tool, Gank-Lock oder Peel gegen Diver, die in deine Back Line einbrechen."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle, das eine Aura aus magischem Schaden pro Sekunde um Karthus erzeugt und dabei Mana verbrennt. Der Motor seines Jungle-Clears und der Teamfight-DPS — auf jedem Camp aktiv lassen."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Globale Ult mit 3-Sekunden-Channel, die jedem gegnerischen Champion auf der Map schweren magischen Schaden zufügt. Der Cross-Map-Snipe und das Post-Mortem-Cleanup-Tool."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Early-Invade-Jungler (Lee Sin, Xin Zhao, Elise) — Stasis deckt deine Null-Mobility-Schwäche ab"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target sein erstes Magic-Resist-Item kauft (Mercury's Treads zählen)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC-Engages (Ahri R, Lissandra R, Nautilus Hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Healing-Stacking-Comps (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Erreiche Level 6, full-clear schneller als der gegnerische Jungler und nutze R, um Low-HP-Targets cross-map abzuräumen. Nach zwei Items schmilzt Defile allein die Back Line in jedem 5v5."
  weakness: "Kein Dash, kein Escape, kein Early-Dueling. Counter-jungled oder vor Level 6 invaded fällst du dauerhaft zurück. Mobile Assassinen und CC-lastige Jungler brechen den Clear vor Liandry's."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision Primary: Conqueror stackt schnell auf Defile (die Toggle-Aura mit Schaden pro Sekunde) und macht aus langen Skirmishes Bonus-AP und Healing. Triumph erstattet HP bei Takedowns. Legend: Haste verkürzt R. Last Stand belohnt die Low-HP-Spirit-Form-Phasen."
    secondary_rationale: "Sorcery Secondary: Manaflow Band löst die frühe Mana-Starvation, weil Defile jede Sekunde Mana zieht. Transcendence schiebt die Ability Haste über das 40%-Cap, sodass Q zwischen den Waves schneller zurückkommt und R öfter rotiert."
    secondary_alternative: "Gegen invade-lastige feindliche Jungler (Lee Sin + Pyke-Roams, Elise + CC-Supports im Early) tausche Sorcery gegen Resolve mit Second Wind (HP-Regen nach Schaden, hilft beim Level-3-Invade) und Overgrowth (HP-Bonus, der mit getöteten Monstern skaliert)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-Game-Scaler mit schwacher Early-Präsenz"
      reason: "Sie brauchen 25+ Minuten, um online zu kommen; Karthus gewinnt schon mit Level 6 die Skirmishes und nutzt R, um ihre Solo-Baron-Versuche zu blocken. Out-tempo: erzwinge Drakes und beende das Spiel, bevor sie ihren Power Spike treffen."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Langsame Farm-Heavy-Jungler ohne Level-3-Invade"
      reason: "Sie full-clearen mit derselben Geschwindigkeit wie Karthus, aber Karthus hat die globale R, die ihren Gank in einen 2-for-1-Trade verwandelt — selbst wenn sie deinen Laner töten, räumt R ihren Cross-Map auf, bevor sie recallen."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline-Scaler ohne Mobility"
      reason: "Cross-Map-R verwandelt ihre Positionierungsfehler in Kills auf Objective-Spawns. Sie tragen aus der Distanz bei, können aber keinen globalen Snipe dodgen, der auf einem fehlenden Flash oder Ult locked ist."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Early-Game-Invade-Jungler mit hartem CC"
      reason: "Sie laufen auf Level 2-3 in Karthus' Jungle, bevor Defile beim Mana skaliert. Karthus hat keinen Escape, keinen Dash, und seine Q ist zu langsam, um ihn vor einer Lee-Sin-Q+W-Kette oder einem Elise-Rappel zu retten. Ein schiefgelaufener Invade ruiniert seine Partie dauerhaft."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Stealth- oder Burst-Assassin-Jungler"
      reason: "Sie eröffnen mit Isolation Damage auf einem Ziel ohne jede Defense; selbst Zhonya's Hourglass verzögert das Unvermeidliche im 1v1 nur. Karthus stirbt, bevor er Conqueror stacken oder sinnvoll traden kann."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-Deny-Ganker und Tracker-Jungler"
      reason: "Nocturnes R schneidet die Vision des Teams ab, sodass Karthus den Engage auf seine Back Line nicht sieht; Warwicks Blood-Tracking macht aus einer Cross-Map-R einen Free Dive auf ein Ziel im Channel. Karthus braucht Vision, um R sicher zu channeln — diese beiden nehmen sie ihm."
---

## Überblick

Karthus Jungle ist der Lehrbuch-**Apex-Jungler**: ein Champion, dessen individuelle Decke zu den höchsten im Spiel gehört, dessen Boden aber zu den niedrigsten zählt. Das Kit dreht sich um zwei Ideen. **Defile (E)** ist eine Toggle-Aura, die jede Sekunde magischen Schaden um Karthus tickt und dabei Mana zieht — der Motor des Clears: ist das Mana-Problem gelöst, full-cleart er schneller als fast jeder andere Champion. **Requiem (R)** ist eine globale Ult, die jeden gegnerischen Champion auf der Map trifft und Positionierungsfehler überall in Kills verwandelt — das Wertvollste, was ein Jungler im richtigen Moment tun kann.

Der Game Plan ist nach Jungle-Maßstäben starr. Full-Clear der ersten drei Camps (Red → Krugs oder Blue → Gromp je nach Side) mit aktivem **E**, Recall für die Komponenten von **Liandry's Torment**, und ab Level 6 suchst du Cross-Map-R-Targets, während du um Drake und Grubs (die kleinen neutralen Monster im Void Pit, die Gold und einen team-weiten Buff geben) skirmishst (ein "Skirmish" ist ein kurzer Kampf zwischen 1-3 Spielern pro Seite, meist um ein Camp oder ein Fluss-Objective). Karthus hat keinen Escape und keinen Dash, deshalb ist Wards an deinen eigenen Jungle-Eingängen ab Minute 1:30 nicht optional — ein nicht gesehener Invade ist ein Free Kill für einen mobilen Jungler. Der Payoff ist der Post-6-Spike: Karthus ist einer der wenigen Champions, die tot wirklich gefährlicher sind als lebendig, weil seine Passive **Death Defied** ihn 7 Sekunden weiter casten lässt, nachdem seine HP auf null fallen.

## Empfohlener Build

**Starting Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (Default für Ranged-Jungler — gibt das Smite-Pet, das den Camp-Clear beschleunigt und Gold liefert) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core Items (in dieser Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade aus Hailblade (entwickelt sich um Minute 3-4 automatisch, sobald genug Jungle-XP gesammelt ist). Default-Begleiter für AP-Burst-Jungler: ein zusätzlicher Magic-Damage-Proc auf der nächsten Auto-Attacke nach einem Spell-Cast (ein "Proc" ist ein passiver Effekt, der durch eine Bedingung ausgelöst wird — hier rüstet das Casten einer Ability die nächste Auto). Passt zum Q-Schaden auf isolierten Zielen.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes komplettes Item. Der prozentuale HP-Burn bestraft die HP-Pools der Objectives (Drake, Baron, Herald) und stackt zusätzlich zu jedem Defile-Tick. Dieses Item dreht deine Clear-Geschwindigkeit und lässt dich ab Minute 8 Drakes contesten.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat Magic Penetration, der günstigste Power Spike zwischen den Core Items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — der Slow auf jedem Spell-Hit schließt Karthus' größte Schwäche (kein Chase, kein Escape). Du bleibst an gekiteten Zielen kleben, sodass Defile Conqueror stackt, und macht aus dem Post-Mortem-Passive ein garantiertes Cleanup-Tool.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — deckt Gegner auf, die von Long-Range-Abilities getroffen werden, und addiert einen Schadensverstärker. Synergiert perfekt mit Q und Wall of Pain auf Distanz, und das Reveal hilft, globale R-Ziele durch den Fog of War (das nicht aufgedeckte Areal außerhalb der Team-Vision) zu locken.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Slot. Kauf zuletzt, außer du liegst 4+ Kills vorne, dann ziehst du es vor zum Snowballen ("Snowball" = früher Vorsprung, der wächst: Kill → Gold → Item → mehr Kills).

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Early-Game-Diver (Lee Sin, Xin Zhao, Hecarim, Diana). Stasis ist Karthus' einzige Antwort, wenn eine Dash-Kette die Front Line (die Tanks und Bruiser vorne, die normalerweise Treffer für dich abfangen) überquert. Erlaubt dir auch, in Stasis sicher zu R-en.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target sein erstes Magic-Resist-Item kauft. Die ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (die Magic-Resist-Schuhe) zählen als dieses erste MR-Item.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen telegraphierte Magic-CC-Engages (Ahri R, Lissandra R, Nautilus Hook). Der Shield blockt die erste Ability, sodass du nicht one-shot wirst, bevor R landet.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Healing-Stacking-Compositions (Soraka, Vladimir, Yuumi, Dr. Mundo). Grievous Wounds halbiert das gegnerische Healing, sodass der Defile-Schaden wirklich haftet.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Default. Wechsle auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das gegnerische Team 3+ Hard-CC-Bedrohungen mit magischem Schaden hat.

**Skill Order:** Maxe **Q** zuerst (dein Single-Target-Burst und Waveclear, die einzige Ability, die hart mit dem Rang skaliert), **E** zweitens (erhöht Defiles Schaden pro Sekunde und stützt den Mana-Drain), **W** zuletzt. Setze einen Punkt in **R** auf Level 6, 11 und 16.

**Runes:** Primary **Precision** mit **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** mit **Manaflow Band** und **Transcendence**.

## Wichtige Matchups

- **Lee Sin:** Verlierst jedes 1v1 vor Level 6. Seine Q+W-Kette überspringt das Delay deiner Q. Vermeide Solo-Skirmishes pre-6, full-cleare stattdessen, und warde beide Eingänge deiner Jungle ab Minute 1:30.
- **Master Yi:** Glatter Counter im 1v1, sobald er Wit's End hat. Erzwinge den Fight 5v5 in engen Flussbereichen (Drake-Pit, Baron-Pit), wo sein W-Cleanse ihn nicht vor einer anhaltenden Defile + R-Combo retten kann. Kauf Zhonya's Hourglass als zweites Item, wenn er Fahrt aufnimmt.
- **Karthus Mirror:** Entschieden durch Farm-Tempo und R-Disziplin. Wer auf Level 6 ein Camp voraus full-cleart, gewinnt das erste R-Race. Verschwende R nur, wenn du entweder einen Kill oder einen Smite sicherst — eine vergeudete R bringt den Mirror-Karthus eine ganze Minute Vorsprung bei der Objective-Kontrolle.
- **Hecarim:** Ausgeglichenes Matchup. Er überrennt deinen Kite, gruppiert sich aber für Defile in Teamfights. Wall of Pain auf seiner Charge-Bahn verlangsamt ihn aus seinem eigenen Engage heraus, und dein Post-Mortem-Passive macht Cleanup, wenn er dich trotzdem tötet.
- **Sejuani / Amumu:** Vorteilhaft. Sie engagen, indem sie das gegnerische Team in einen Stack zusammenballen — genau die Form, die Defile will. Engage auf ihren Engage; ulten sie in dein Team, läufst du mit aktivem E rein und schaust zu, wie jeder brennende Gegner schmilzt.

## Power Spikes & Siegbedingungen

- **Level 6 (R freigeschaltet):** Erster globaler Power Spike. **Requiem** verwandelt jeden Low-HP-Gegner cross-map in einen Kill. Ab hier pingst du den gegnerischen Mid-Laner vor seinem Recall an und ultst auf seinen Recall-Channel — Free Kill bei Null Risiko.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ Minute 9-11):** Die Clear-Geschwindigkeit dreht sich, und die Objective-DPS (DPS = Damage per Second, hier gegen die HP-Pools von Drake/Baron/Grub) verdoppelt sich. Ab hier solltest du derjenige sein, der Drake-Fights initiiert, nicht der, der reagiert.
- **Zwei Items + Boots (~ Minute 18-22):** Defile allein tickt für ernsthaften Schaden; in jedem gruppierten Fight stackt Conqueror schnell und deine R locked das Cleanup. Das ist dein stärkstes Skirmish-Fenster.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 26-30):** R one-shottet Squishies, die kein einziges Magic-Resist-Item gebaut haben. Erzwinge gruppierte Objective-Fights — Baron, Soul Drake, Atakhan ("Atakhan" = ein Late-Game-Neutral-Pit-Boss, der etwa ab Minute 14 spawnt; behandle den Spawn als erzwungenes 5v5).

## Häufige Fehler

- **Mit Death Defied in Panik geraten.** Die meisten Anfänger verbrennen die 7 Post-Mortem-Sekunden damit, vor ihrer eigenen Leiche wegzulaufen. Der richtige Play ist, in einen Low-HP-Fight zu engagen, im Wissen, dass du sterben wirst: dein Tod startet deine Schadensrotation, er beendet sie nicht. Q-Q-Q-E in der Spirit Form macht oft mehr Schaden, als dein lebendiges Selbst gemacht hätte.
- **Q wahllos werfen.** Lay Waste verursacht doppelten Schaden auf einem isolierten Einzelziel. Feuerst du Q in eine Wave mit drei Minions plus dem Laner, cappt der Schaden auf den niedrigeren Wert. Zieh den Laner mit W heraus oder warte, bis ein Einzelziel exponiert ist, und Q dann auf den prognostizierten Punkt.
- **R für den Kill Steal casten.** Mid-Teamfight zu ulten ist verschwendet: jeder Gegner ist bereits in Defile-Reichweite. Spar R für einen Cross-Map-Snipe (R als langer, risikoarmer Finisher auf einen fehlenden Gegner mit niedrigem HP nach einem Fight) oder ein Post-Mortem-Cleanup nach deinem Tod. R ist "after-the-fight", nicht "during-the-fight".
- **Vision in der eigenen Jungle überspringen.** Setze Stealth Wards auf Tri-Bush und Pixel Brush ab Minute 1:30. Karthus hat keinen Escape; ein nicht gesehener Invade ist ein Free Kill für einen mobilen Jungler.
- **Smite-greeden ohne R.** Drake und Grub haben skalierende HP; dein Smite nicht. Ohne R off Cooldown gegen einen Jungler, der eine bereit hat, verlierst du den Smite-War und den Drake.

## Fortgeschrittener Tipp

Übe den **Suicide Engage**. Wenn dein Team in ein 5v5 commitet, das ihr direkt nicht gewinnen könnt, läufst du mit Karthus mit aktivem Defile in die gegnerische Back Line, in der Erwartung zu sterben. In dem Moment, in dem deine HP null erreichen, schenkt dir Death Defied 7 Sekunden Free-Casting ohne Manakosten — und die gegnerische Front Line stoppt das Angreifen deiner Leiche, weil es nichts mehr zu treffen gibt. In diesem Spirit-Form-Fenster Q-spamst du den Gegner mit den niedrigsten HP, den du erreichen kannst, und finishst mit R alles, was wegläuft. Richtig gemacht, verwandelt ein Karthus, der zuerst stirbt, einen unmöglichen Fight in einen Ace.
