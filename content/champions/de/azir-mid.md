---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "de"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Azir Mid Guide für League of Legends Patch 16.9: Starter-Items, Battle-Mage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Einmal pro gefallenem alliierten Turm kann Azir einen Disc of the Sun temporär wiederbeleben: ein hart treffender Turm, der den Raum um die Trümmer kontrolliert."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Schickt jeden aktiven Sand Soldier zu einem Punkt, fügt magischen Schaden zu und slowt in einer Linie. Hauptwerkzeug für Poke und Repositionierung."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Beschwört einen Sand Soldier (charge-basiert). Soldaten erweitern Azirs Auto-Attacks: macht er eine AA neben einem, sticht der Soldat in einer Linie für magischen Schaden."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Schild + Dash zu einem bestehenden Soldaten. Stoppt bei Champion-Treffer und erstattet eine Soldatenladung. Dein einziger Escape und Gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Wand aus Soldaten stürmt vor, knockback auf Gegner und hinterlässt mehrere Sekunden eine blockierende Linie. Das Werkzeug für den ikonischen 'Shuffle'."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassins (Zed, Diana, Talon, Akali) — Stasis überbrückt deinen E-Cooldown, wenn du erwischt wirst"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen schweres Single-Target-Magie-CC (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target ein Magic-Resist-Item kauft — deine Soldier-Autos brechen durch MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-stacking-Comps (Soraka, Vladimir, Dr. Mundo) — Anti-Heal greift bei jedem Soldier-Treffer"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Erreiche Nashor's Tooth + Sorcerer's Shoes online (~ Minute 18-20), dann kontrolliere Objective-Fights mit Soldier-extended Auto-Attacks und Shuffle (R + Flash) die feindlichen Carries in dein Team."
  weakness: "Mechanisch anspruchsvoll und schwach vor Level 6. Ohne E kein Escape; Chip-Damage auf Distanz und Wind Wall (Yasuo, Yone) neutralisieren sowohl Q-Soldaten als auch R."
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Azirs Soldier-Range schlägt ihre Cast-Range, und sie haben keinen Dash, um Soldier-Q-Poke auszuweichen oder die Auto-Attack-Sequenz seiner W zu unterbrechen."
    - examples: ["annie", "syndra"]
      archetype: "Langsam telegrafierte Short-Range All-in-Mages"
      reason: "Azir hält Distanz in ihren Commit-Fenstern (der Moment, in dem sie nach vorne treten, um zu attackieren): jedes Mal werden sie von Soldier-Autos angeknabbert, und R Shuffle dreht den All-in um, falls sie reinflashen."
    - examples: ["malzahar", "kassadin"]
      archetype: "Late-Game-Mages mit schwachen frühen Skirmishes"
      reason: "Azir farmt sicher mit W ab Level 1 und hält ihrer Late-Game-Power stand, ohne ihnen Gratis-EXP zu geben — bei Minute 14 ist er online, bevor sie ihren eigenen Spike erreichen."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions mit Wind Wall"
      reason: "Wind Wall frisst jede Q-Soldatenlinie und das R-Wand-Follow-up. Mit neutralisiertem Hauptpoke bleibt Azir ein Nahkampf-Mage ohne Melee-Tools."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Early-Game-Burst-Assassins mit mehreren Dashes"
      reason: "Sie all-innen pre-6, wenn Azir keine E hat; selbst nach Zhonya's erreichen Multi-Dash-Kits ihn, bevor seine R abfeuern kann."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie chippen seine HP jenseits Azirs Soldier-Range (740). Er hat kein Pre-6-Sustain und kommt mit niedrigen HP zu seinem ersten Item."
---

## Überblick

Azir ist ein Battle Mage, der durch seine **Sand Soldiers** auf große Distanz kämpft — kleine geisterhafte Einheiten, die er mit **W (Arise!)** beschwört und die als ferngesteuerte Auto-Attack-Stationen fungieren. Greift Azir einen Gegner nahe einem Soldaten an, ist es der Soldat, der in einer Linie zusticht und magischen Schaden verursacht. Er hat das höchste Skill Ceiling dieser Liste (Riot bewertet ihn 9/10 in Schwierigkeit), und seine frühen Level sind ehrlich gesagt schwach. Bis er seinen ersten Soldaten platziert und die Muscle Memory **W → Q** aufgebaut hat, verliert er Trades (ein kurzer Schadenaustausch in der Lane, kein vollständiger Fight) gegen die meisten Laner deutlich.

Sein Game Plan in einem Satz: sicher mit **W** farmen, bis ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** gegen Minute 18 online ist, dann **R (Emperor's Divide)** — das berühmte "Shuffle" — nutzen, um die feindlichen Carries (die High-Damage-Champions ihres Teams) in dein Team zu schieben, während ihr um Objectives kämpft (Teamfights um die großen Map-Objectives — Drake, der Drache am Bot-River; Atakhan, ein neuer Mid-Game-Boss; oder Baron Nashor in der Late). Skill Expression sitzt an drei Stellen: Soldatenplatzierung (wo du stehst vs. wo die Soldaten deine Auto-Attack-Range projizieren), die **E + Flash + R**-"Shuffle"-Combo, und das Wissen, wann du deinen einzigen Escape (**E**) verbrauchst und wann du ihn für einen Counter-Engage (der Moment, in dem du den feindlichen Angriff gegen sie selbst drehst) aufhebst.

## Empfohlener Build

**Starting Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Lass die ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** weg: du verbrauchst Mana auf **W** (wenig) und **Q** (mittel), Doran's Mana-Regen deckt den Rest.

**Core Items (in Reihenfolge):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — erstes Item jede Partie. Attack Speed lässt deine Soldier-extended Auto-Attacks (basic attacks, auch AA — Azirs eigene Basic-Attack-Range zählt nur, wenn ein Soldat in der Nähe steht) schneller feuern, und der On-Hit-Magic-Damage (extra Schaden auf jedem gelandeten Basic Attack) stackt auf jedem Soldatenstich. Das ist der Spike (der Moment, in dem ein Champion deutlich stärker wird), der dich von passiv zu bedrohlich kippt.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (ein fester Wert, kein Prozentsatz, an feindlicher Magic Resist, der ignoriert wird). Default-Boots für jeden Mid-Mage, der Squishies (Champions mit niedrigen Defenses, wie ADCs und andere Mages) löschen will.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multipliziert dein gesamtes AP (Ability Power, der Stat, der Magic Damage erhöht) Scaling. Nach diesem Item haut jede Soldier-Auto und jede **Q** signifikant härter zu; das ist dein wahrer Damage Spike für Late-Game-Teamfights.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst (hoher Schaden konzentriert in ein bis zwei Sekunden), mit einer HP-Threshold-Passive (eine Passive, die aktiviert wird, wenn der Gegner unter ~35% HP ist), die mit dem Kill-Follow-up nach einem Shuffle harmoniert.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver und Assassins (Zed, Diana, Talon, Akali). Ein "Diver" ist ein Champion, der trotz Risiko auf deinen Back-line-Carry springt, um ihn zu löschen. Die Stasis (ein paar Sekunden, in denen du keinen Schaden nehmen und dich nicht bewegen kannst) erkauft dir Zeit, bis dein **E**-Cooldown zurückkommt, wenn du erwischt wirst.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen schweres Single-Target-Magie-CC (Crowd Control: Stuns, Charms, Snares — alles, was die Kontrolle über deinen Charakter übernimmt). Beispiele: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap in dem Moment, in dem ein Priority-Target ein MR-Item (Magic Resist, der Stat, der erlittenen Magic Damage reduziert) kauft. Soldier-Autos und **Q** brechen wieder durch MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-stacking-Comps (Soraka, Vladimir, Dr. Mundo). Anti-Heal (eine Passive, die feindliche Heilungen für ein paar Sekunden halbiert) greift bei jedem Soldier-Treffer.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind akzeptabel, wenn das Team deine **R** häufiger off cooldown braucht (weniger Wartezeit zwischen den Casts) für Objective-Fights.

**Skill Order:** Maxe **Q** zuerst (Soldier-Damage und Slow skalieren pro Rang, und der Cooldown sinkt von 14s auf Rang 1 auf 6s auf Rang 5), **W** zweitens (mehr Soldatenladungen und längere Soldier-Dauer), **E** zuletzt. Nimm **R** auf Level 6, 11, 16. Starte **W** auf Level 1 — ohne Soldat kannst du die Wave nicht aus Distanz farmen.

**Runes:** Primär **Sorcery** (der Magic-Damage-Runenbaum) mit **Arcane Comet** (ein kleines Geschoss, das extra Schaden anlegt, wenn du mit einem Slow oder Root triffst), **Manaflow Band** (extra Mana jedes Mal, wenn du einen Champion mit einer Fähigkeit triffst), **Transcendence** (Cooldown Reduction auf Level 5), **Scorch** (kleiner Brennschaden auf deine erste auftreffende Fähigkeit alle paar Sekunden). Sekundär **Inspiration** mit **Biscuit Delivery** (Gratis-Tränke in der Lane) und **Cosmic Insight** (mehr Summoner-Spell-Uptime). Wechsle die Sekundäre auf **Precision** mit **Presence of Mind** (Mana-Erstattung bei Takedowns) und **Coup de Grace** (mehr Schaden gegen Low-HP-Targets), wenn das gegnerische Team mehrere Squishies mit niedrigen Resistenzen hat.

## Wichtige Matchups

- **Yasuo / Yone:** Ihre **Wind Wall** blockt jedes Projektil deines Kits — Soldier-Strikes von **Q** und die Welle von **R**. Spar **Q** auf, bis sie Wind Wall auf etwas anderes verbraucht haben; wenn du den Wall mit einem einzelnen Soldatenstich baiten kannst (sie zwingst, ihn auf einen wertlosen Angriff zu verschwenden), sind die nächsten 24 Sekunden Trades gratis.
- **Zed:** Dive-Bedrohung (er committet sich unter deinen Turm, um dich trotz der Turmschüsse zu killen) ab Level 6. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als zweites Item. Halt **E** — niemals offensiv nutzen, bis er sein Ult committet; ulted er und du hast **E** + Zhonya's, überlebst du den Burst.
- **Veigar:** Ausgeglichen bis günstig. Er hat keinen Dash. Soldier-Q-Poke (Chip-Damage aus sicherer Distanz) zwingt ihn aus der XP-Range, sobald er zum Last-Hitten vorrückt; respektiere nur seine **E (Event Horizon)**-Cage, indem du deinen **E**-Dash zum Ausbrechen aufhebst.
- **Twisted Fate:** Roam-Priority-Race. "Roam" heißt, deine Lane zu verlassen, um eine andere Lane zu unterstützen; "Priority" heißt, einen Wave-Control-Vorteil zu haben, der dir erlaubt, die Lane zu verlassen, ohne Minions zu verlieren. Pushe die Wave on Cooldown mit **W** + **Q**. Wenn er Level 6 erreicht und mit seinem Ult zu roamen beginnt, pinge dein Team und erzwinge Tower Trades (du nimmst seinen Turm, während er deine Bot-Lane killt) auf seiner Seite, statt ihm hinterherzulaufen; Azir bestraft Side-Waves mit dem **R**-Shuffle in Türme besser als die meisten Mids.
- **Akali:** Gap-closing Diver. Platziere Soldaten in den Bushes, aus denen sie gerne flankt (in einen Fight von einer ungesicherten Seite eintreten). In ihrer **W (Twilight Shroud)**-Stealth-Zone kannst du sie nicht targeten — pre-platziere **W**, damit die Soldaten sie sofort attackieren, sobald sie rauskommt.

## Power Spikes & Siegbedingungen

- **Level 4:** Drei Punkte in **Q** schalten einen echten Damage Spike frei. Soldier-Q-Poke droht jetzt ernsthaft mit Kills, wenn der Gegner zweimal hintereinander in Range läuft.
- **Level 6:** Die erste **R** schaltet die "Shuffle"-Combo frei: **Flash + R** dreht die feindliche Frontline (die Tanks an der Front eines Fights) rückwärts in dein Team. Setz sie das erste Mal in einem 2v2-Skirmish (ein kleiner Fight, kleiner als ein voller 5v5-Teamfight) am River ein, damit ein Fehlschuss nicht die Lane wegwirft.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 18-20):** Du wirst zur Mid-Game-DPS-Bedrohung (Damage per Second, Schaden pro Sekunde), auf die dein Team gewartet hat. Erzwinge einen Fight um Atakhan oder Drake (Atakhan ist ein Mid-Map-Boss; Drake ist der Drache am Bot-River) — deine Soldier-Autos out-damagen die meisten Mages in dieser Phase.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 28-32):** Jede Soldier-Auto zerlegt Squishies. Ab hier gehört Azir zu den stärksten Hard-Carries im Spiel, aber nur, wenn er auf maximaler Soldier-Range steht und seine Frontline (die Tanks/Bruiser vor ihm) hält.

## Häufige Fehler

- **In Auto-Range zum Last-Hit laufen, bevor W up ist.** Azirs Basic Attacks ohne Soldat in der Nähe sind kurz und schwach. Beschwöre immer einen Soldaten unter dem Minion, das du willst, bevor du vorrückst; der Soldat farmt für dich, nicht dein Basic Attack.
- **R für den perfekten Shuffle aufheben, der nie kommt.** Selbst eine mittelmäßige **R**, die einen Gegner zurückstößt und eine Wand baut, ist besser als gar keine **R**. Setz sie zum Peel ein (deinen Carry vor Divern schützen), wenn keine Engage-Gelegenheit (die Aktion, einen Fight durch Hineinspringen zu starten) besteht.
- **E offensiv nutzen ohne Exit-Plan.** **E** ist dein einziger Escape. Dashst du rein, laufen deine Soldaten ab, dein Dash geht auf Cooldown und du stehst als Glass Cannon (ein Champion mit hohem Schaden und null Defense) auf Melee-Range still. **E** offensiv nur, wenn du den Kill garantieren oder mit einer sofortigen **R** nachsetzen kannst.
- **Vergessen, dass die Türme von Shurima's Legacy existieren.** Wenn ein alliierter äußerer Turm fällt, kannst du auf den Trümmern einen mächtigen Disc-of-the-Sun-Turm wiederbeleben. Nutz das für Objective-Control rund um Atakhan oder für eine defensive Verteidigung unter deinem Inhibitor (die Struktur zwischen dem zweiten Turm und dem Nexus). Die meisten Azir-Spieler drücken die Passive einfach nie.
- **Q ohne W-Setup als Poke spammen.** **Q** projiziert Schaden *entlang der Linie jedes aktiven Soldaten*. Ohne Soldaten draußen macht **Q** nichts. Platziere **W** zuerst, *dann* **Q**, um den Soldaten dorthin zu schicken, wo du ihn haben willst.

## Fortgeschrittener Tipp

Übe den **E + Flash + R**-Shuffle im Practice Tool (der Offline-Trainingsmodus im Client), bis du ihn in unter 0,4 Sekunden ausführen kannst. Die Reihenfolge zählt: **E** rastet dich auf der Bahn deines Soldaten ein, **Flash** repositioniert dich mitten im Dash, sodass die **R**-Wand vom neuen Punkt aus feuert, und **R** lädt in die Richtung, in die dein Charakter *im Moment des Casts* schaut. Sauber ausgeführt, verwandelt sie einen isolierten Assassin oder Carry, der in deinen Fog of War (der unwarded Teil der Map — Wards sind Sentinels, die Vision geben — den du nicht sehen kannst) hineinläuft, in einen garantierten Kill, unabhängig von seiner Startposition.
