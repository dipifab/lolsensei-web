---
title: "Evelynn Jungle Build & Guide — Patch 16.9"
slug: "evelynn-jungle"
language: "de"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Evelynn Jungle Guide für League of Legends Patch 16.9: Demon Shade Camouflage Gank-Pfad, Lich Bane Core-Build, wichtige Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Außerhalb des Kampfes geht Evelynn in Demon Shade. Heilt bei niedrigen HP und gibt ab Level 6 Camouflage — unsichtbar für Wards und Gegner außerhalb eines kleinen Radius."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Evelynns Lasher trifft den nächsten Gegner, dann feuert sie bis zu drei Spike-Salven auf nahe Ziele. Haupt-Jungle-Clear und DPS in Combos."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Belegt einen Gegner mit einem Fluch. Nach kurzer Verzögerung charmen Evelynns nächster Angriff oder Spell und reduzieren Magic Resist. Cast aus Demon Shade für das sauberste Setup."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dash auf ein Ziel, magischer Schaden plus kurzer Move Speed. Aus Demon Shade wird daraus ein langer Sprung mit Bonusschaden und Autoattack-Reset."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Kurzes untargetable Fenster, dann ein Kegel mit massivem magischen Schaden vor ihr, bevor sie nach hinten blinkt. Bonusschaden unter 30% HP — dein Execute."
      dd_spell_id: "EvelynnR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald 2+ Gegner irgendein Magic-Resist-Item bauen — prozentuale Magie-Penetration, die mit ihrem MR skaliert"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Single-Target-Lockdown, der deine R-Animation bestraft (Veigar Cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-stacking-Comps (Soraka, Vladimir, Dr. Mundo, Aatrox) — Grievous Wounds, Heilung halbiert"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pickoffs auf isolierte Gegner nach Level 6 mit W charm in R execute. Demon Shade Camouflage zum Invaden und Ganken ohne Vision-Warnung. Snowball den Jungle-Gold-Lead, jage die Squishies."
  weakness: "Pre-6 null Gank-Druck — keine Camouflage, keine Charm-Reichweite. Hart gekontert von Control Wards und Lane Prio. Gruppieren sich Gegner mit Peel, erreichst du die Carry nicht."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primär: Dark Harvest snowballt aus isolierten Pickoffs — Evelynns Game Plan. Sudden Impact procct nach R-Warp und W-Charm für mehr Burst. Sixth Sense enthüllt Wards, Camouflage bleibt nutzbar. Ultimate Hunter senkt R-Cooldown."
    secondary_rationale: "Sorcery sekundär statt Inspiration oder Resolve: Evelynn braucht reines AP-Scaling, um die Carry zu one-shotten, keine Utility. Manaflow Band hält Mana für Q-Spam im Clear, Gathering Storm gibt alle 10 Minuten Gratis-AP für den Late-Game W+R one-shot."
    secondary_alternative: "Hat das Enemy-Team 4+ Squishies und schwachen Peel, tausch Sorcery gegen Precision mit Presence of Mind (Mana-Refund bei Takedown) und Coup de Grace (+8% Schaden unter 40% HP) für schnellere Execute-Ketten."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Immobile Hyper-Carries"
      reason: "Carries ohne Dash oder Blink sterben sofort an W charm in R: kein Tool, um den Kegel deines untargetable Warps zu verlassen, bevor er landet."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Backline-Healer ohne Escape"
      reason: "Bist du via Demon Shade Camouflage in der Backline, sterben diese Enchanter in einem W+R, bevor sie ihr defensives Kit casten können."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Langsam farmende Jungler"
      reason: "Jungler, die farmen und scalen wollen: Evelynn invadet, klaut Camps und gankt mit Camouflage nach 6 — sie müssen verteidigen statt zu scalen."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Early-Game Lethality-Duellisten"
      reason: "Lee Sins Q und Rengars Sprung schließen Distanz vor Level 6 — ohne Camouflage und ohne R verliert Evelynn Pre-6-Invades und 1v1-Trades komplett."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanter, die die Carry peelen"
      reason: "Lulus R macht die Carry unverwundbar, Tahm Kench frisst sie, Morganas E gibt Spell Shield: jede annulliert die W+R-Combo genau dann, wenn sie killen sollte."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Vision-lastige Supports mit Engage-CC"
      reason: "Sie kaufen einen Control Ward beim ersten Back, sehen dich in Demon Shade in der Lane, und die CC-Kette (Naut Q, Leona E+R) landet, bevor dein W-Charm rauskommt."
---

## Überblick

Evelynn ist die einzige Championin in League mit eingebautem Stealth, der mit Level skaliert: ab Level 6 gibt ihre **Demon Shade (P)**-Passive ihr Camouflage außerhalb des Kampfes, das heißt Gegner sehen sie nur, wenn sie innerhalb eines kleinen Radius um sie herum stehen — selbst Control Wards (die speziellen rosa Trinkets, die Gegner platzieren, um Stealth aufzudecken) entdecken sie auf voller Distanz nicht. Ihre gesamte Identität hängt daran. Sie ist eine magische Assassin ohne echten Waveclear oder Duellpower vor 6, aber im Moment, in dem **Last Caress (R)** freigeschaltet wird, wird sie zum verlässlichsten Pickoff-Jungler im Spiel (ein Champion, der gebaut ist, um einen isolierten Gegner nach dem anderen außerhalb voller Teamfights auszuschalten): du läufst unsichtbar in die gegnerische Backline (der hintere Teil der Formation, wo die squishigen Carries — Champions mit hohem Schaden und niedriger Verteidigung — normalerweise stehen), charmst die Carry mit **Allure (W)** und löschst sie in einer Combo, bevor irgendein Peel (Fähigkeiten von Verbündeten, die die Carry schützen, wie Jannas Schild oder Lulus Ult) reagieren kann.

Der Game Plan ist brutal in seiner Einfachheit: Farme bis 6, ohne zu sterben, suche einen Gank auf einer Lane mit niedrigen HP ohne Vision-Wards in der Nähe (kleine unsichtbare Augen, die Verbündete platzieren, um den Fog of War zu sehen), und ab dann jage ein isoliertes Ziel jedes Mal, wenn **R** verfügbar ist. Skill-Expression liegt im Path-Reading (wo kannst du Camouflaged laufen, ohne einen Ward zu triggern?) und im Commit-Timing (commit nicht mit **R**, wenn die Carry einen Peel-Summoner wie Cleanse oder einen Peeler wie Lulu in der Nähe hat). Snowballst du die ersten zwei Picks (einen Early Lead in mehr Kills, mehr Gold, mehr Items verwandeln), gruppiert sich das gegnerische Team, du scalst (wirst stärker mit Items und Levels) in One-Shot-Reichweite mit ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** und schließt das Spiel aus der Unsichtbarkeit.

## Empfohlener Build

**Start-Items:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Standard-Starter für Melee-Jungler — keine Ausnahme für Evelynn.

**Core-Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade aus Emberknife (entwickelt sich um Minute 3-4 automatisch, sobald das Jungle-Pet genug Monster gefressen hat). Der Begleiter für AP-Burst (Ability Power, der Stat, der magischen Schaden skaliert): fügt einen magischen Schadens-Effekt hinzu, der auf dem Autoattack direkt nach einem Spell auslöst (ein "Proc"), perfekt abgestimmt auf **Lich Bane** später.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Evelynns Signature-Spike. Jedes Mal, wenn du einen Spell castest, fügt dein nächster Basic Attack einen riesigen Bonus-Hit aus magischem Schaden hinzu, und der Charm von **W** plus der Autoattack-Reset von **E** (Effekt, der dir erlaubt, sofort einen frischen Basic Attack abzufeuern und die normale Attack-Speed-Verzögerung zu ignorieren) bedeutet, dass du zwei **Lich Bane**-Procs in unter einer Sekunde verketten kannst.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — fixe Magie-Penetration (zieht einen festen Betrag der Magic Resist des Ziels ab, deine Spells treffen härter). Standard für jeden AP-Burster, der Squishies ins Visier nimmt.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra AP und Magie-Penetration; die HP-Schwellen-Passive (Passive, die aktiviert wird, wenn das Ziel unter einer niedrigen HP-Schwelle, etwa 35%, liegt) deckt sich exakt mit dem Kegel deines **R**-Executes.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator auf dein gesamtes AP. Im vierten oder fünften Item-Slot kippt Evelynn in den "One-Shot die Carry aus vollem HP"-Bereich.

**Situative Items:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald 2 oder mehr Gegner irgendein Magic-Resist-Item bauen.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Single-Target-Lockdown (Veigar Cage, Lissandra R, Malzahar R). Stasis deckt die Recovery-Frames nach **R** ab.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-stacking-Comps (Soraka, Vladimir, Dr. Mundo, Aatrox). Wendet Grievous Wounds an, halbiert eingehende Heilung.

**Stiefel:** Sorcerer's Shoes ist der Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind nur dann akzeptabel, wenn das gegnerische Team sehr wenig Magic Resist hat und dein Team mehr **R**-Uptime (häufigere Casts) als Fight-Finisher braucht.

**Skill Order:** **Q** zuerst maxen (Jungle-Clear und Haupt-DPS), **E** als zweites (Mobilität und Reset-Schadens-Scaling), **W** zuletzt (der Cooldown zählt mehr als der Rang). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Domination** mit **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Sekundär **Sorcery** mit **Manaflow Band** und **Gathering Storm**. Stat Shards: Adaptive Force, Adaptive Force, Health Scaling. Tausch die Sekundäre auf **Precision** (Presence of Mind + Coup de Grace), wenn das gegnerische Team fast komplett squishy ist und du Execute-Konsistenz willst.

## Wichtige Matchups

- **Lee Sin / Rengar (gegnerischer Jungler):** Pre-6-Invade-Bedrohungen. Bestreite den Scuttle auf Level 3 nicht — tracke sie mit Vision und mache deinen Full Clear sicher. Sobald du 6 erreichst, kippt das Matchup: du läufst Camouflaged in ihre Jungle und gankst Lanes, die sie nicht gewardet haben.
- **Lulu (gegnerischer Support):** Der härteste Peel im Spiel für eine Assassin. Verbrenne ihre **R** mit einem Fake-Commit (starte deinen **W**-Charm, ziehe dich aber zurück, wenn sie ulted), engagiere dann erneut auf das Ziel, sobald Lulus Ult auf Cooldown ist.
- **Tahm Kench (gegnerischer Support):** Er frisst die Carry mit **W** in dem Moment, in dem deine **R** landet. Warte, bis er **W** auf etwas anderes nutzt (eine Minion-Welle, einen engagenden Tank), dann commit. Ist er auf vollem Mana und schaut auf seinen ADC, such ein anderes Ziel.
- **Karthus (gegnerischer Jungler):** Scaling-Rennen. Er farmt dich aus, du pickst ihn aus. Erreicht Karthus Level 16 mit vollen Items, verlierst du: erzwinge Ganks jede Minute, in der seine **R** down ist, um sein Scaling zu verweigern, und beende das Spiel bis Minute 30.
- **Pyke (gegnerischer Support):** Hard Counter zu deinem typischen "Low-HP-Execute"-Pattern. Seine **R** executet ebenfalls bei niedrigen HP, und seine Roams setzen deine Jungle-Pfade unter Vision-Druck. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** früher als üblich, um sein Execute-Fenster nach deinem Commit zu vermeiden.

## Power Spikes & Siegbedingungen

- **Level 6 (erste R-Freischaltung):** Hier beginnt dein eigentliches Spiel. Demon Shade bekommt Camouflage, **R** wird freigeschaltet, und jede Lane ohne Vision-Wards (die kleinen unsichtbaren Augen, die Verbündete platzieren, um den Fog of War zu sehen) ist ein freier Kill. Pathe zu der Lane mit den Gegnern auf den niedrigsten HP.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane fertig (~ Minute 12-14):** Der Sprung von "braucht 2 Spells, um zu töten" zu "tötet mit einer W+AA+E+Q+R-Combo auf einem Squishy" passiert genau bei diesem Item. Jage Pickoffs in dem Moment, in dem es fertig ist.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ Minute 18-20):** Die HP-Schwellen-Passive deckt sich mit dem Execute-Kegel deiner **R**. Nach diesem Item ist jeder Squishy unter 60% HP in einer Combo tot.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 26-30):** Volle One-Shot-Reichweite auf Backline-Carries aus 100% HP. Erzwinge ein 5v5 um Baron, sobald Deathcap fertig ist — dein Team startet den Fight 5v4 in dem Moment, in dem deine Combo landet.

## Häufige Fehler

- **Pre-6 ganken, weil dein Team pingt.** Du hast keine Charm-Reichweite, keine Camouflage und nichts, womit du den Gegner überraschen könntest. Pre-6 farmst du und suchst Counter-Jungle bei Gegnern, deren Level du übertriffst. Sag deinen Lanern: "Gank ab 6."
- **W außerhalb von Demon Shade casten.** Wenn du sichtbar bist (im Kampf oder bei niedrigen HP), sieht der Gegner den **W**-Cast und kann den Charm pre-flashen. Setze den Gank immer aus der Camouflage auf, dann **W** auf 1100+ Reichweite.
- **R für Schaden statt als Execute nutzen.** **R** macht Bonusschaden unter 30% HP. Sie auf einem Full-HP-Ziel zu verbrennen, verschwendet den Spike — öffne mit der **W+E+Q**-Combo, dann **R** in dem Moment, in dem sie unter die Execute-Schwelle fallen.
- **Tunnel Vision auf den Kill.** **R** warpt dich nach dem Cast eine lange Distanz nach hinten. Stehst du mitten im gegnerischen Team, wenn du sie drückst, warpst du in nichts Sinnvolles. Positioniere dich so, dass der Warp dich Richtung deines Teams oder Richtung Fog of War (das ungewardete Jungle-Gebiet) zieht, nicht tiefer in die Gegner.
- **Sich weigern, mit vollem HP zu backen.** Demon Shade außerhalb des Kampfes heilt dich auch bei vollem Mana langsam. Hast du 1300+ Gold für eine Schadens-Komponente wie ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** oder eine Mana-Komponente wie ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, back. Mit vollem HP und 0 Gold zu rotieren, ist verschwendete Zeit.

## Fortgeschrittener Tipp

Die Doppel-Proc-Combo von ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane**: Nachdem der **W**-Charm landet, animation-cancel einen Autoattack in **E** (Whiplash aus Demon Shade hat einen eingebauten Autoattack-Reset). Die Reihenfolge ist **W → AA → E → AA → Q → R**. Jeder der beiden Autoattacks verbraucht einen frischen **Lich Bane**-Proc, weil **E** als Spell-Cast zählt und deinen Autoattack-Timer resettet. Auf einem Squishy ohne Magic Resist macht diese Combo etwa 1.5x den Schaden der faulen **W → R**-Eröffnung, die die meisten Low-Rank-Evelynn-Spieler nutzen, und erlaubt dir, eine 1800-HP-Carry aus vollem HP mit 3 Items zu löschen, statt 4 zu brauchen.
