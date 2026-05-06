---
title: "Jhin Bot Build & Guide — Patch 16.9"
slug: "jhin-bot"
language: "de"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Jhin Bot Lane Guide für League of Legends Patch 16.9: Starter-Items, Lethality-Crit-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Jhins Revolver feuert nur 4 Schüsse, dann muss er nachladen. Der 4. crittet immer und richtet Hinrichtungs-Bonusschaden gegen Gegner mit niedrigem HP an. Crits geben einen kurzen Move-Speed-Burst."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Zielgerichteter Schuss, der bis zu 4 Mal abprallt. Jeder Kill verstärkt den nächsten Sprung. Verlässlicher Poke und Waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Linearer Skillshot mit sehr großer Reichweite. Rooted, wenn das Ziel kurz zuvor von dir oder einem Verbündeten getroffen wurde. Nach Auto-Attack oder Support-Engage einsetzen."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Unsichtbare Lotus-Falle, die nach kurzer Verzögerung scharf wird. Slowt bei Kontakt, dann Explosionsschaden. Zum Zonen, Flanken absichern und W-Roots bestätigen."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Gechannelte Ulti: 4 Schüsse mit großer Reichweite, die an Champions stoppen, sie slowen und mehr Schaden machen, je weniger HP das Ziel hat. Der 4. crittet."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "gegen squishy Backline (keine Tanks): Lethality verstärkt den W-Root-Burst, Move Speed aktiv hilft beim Roamen"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-Stacking-Comps (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds halbiert ihr Healing während deiner R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Hard-CC, das deine R abbricht (Blitzcrank Hook, Morgana Q, Ashe R): der Spell Shield kauft dir den Cast"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "wenn du vorne liegst und Lifesteal + Shield brauchst, um lange Fights ohne Peeler zu überleben (Verbündeter, der den Carry beschützt)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "gegen All-in-Diver (Diana, Kha'Zix, Master Yi): Move Speed im Kampf und Ghosting durch Minions helfen beim Kiten"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Lande den 4-Schuss-Crit in jedem Trade und kette W-Roots mit deinem Support, um Ziele aus großer Distanz festzunageln. Positioniere dich, um R-Bahnen in Objective-Fights frei zu halten."
  weakness: "Feste Attack Speed und kein Dash. Hard-Counter durch mobile Diver und Engage-Tanks; wird dein Support weggezogen, hast du keine Escape außer Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Immobile Marksmen mit großer Reichweite"
      reason: "Sie teilen mit Jhin den fehlenden Dash, haben aber kürzere effektive Burst-Fenster. Sobald Jhin sein 4-Schuss-Pattern mit Support-Follow-up findet, gewinnt er ab Level 6 die direkten Trades."
    - examples: ["sivir", "kalista"]
      archetype: "Reset/Mobility-Marksmen, die kurze Distanz brauchen"
      reason: "Ihr Kit will nahe ran; Jhin kann sie aus der Auto-Attack-Reichweite W-rooten und mit E (Lotus-Falle) nachsetzen, um die Kill-Window vor dem Reset zu schließen."
    - examples: ["soraka", "yuumi"]
      archetype: "Reine Heal-Enchanter auf der Bot Lane"
      reason: "Jhins W-Root + R-Execute bestraft Heal-Bots mit niedrigem HP schnell. Mit Mortal Reminder online (Grievous Wounds halbiert Heilung) bricht ihr Game-Plan komplett zusammen."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Aggressive Lane Bullies auf Level 1-3"
      reason: "Sie burst Jhin in seinen Reload-Fenstern (nach jedem 4-Schuss-Zyklus muss der Revolver nachladen). Jhin hat keine Mobilität zum Disengage und sein W-Root braucht ein Setup, das er auf Level 1 alleine nicht erzeugen kann."
    - examples: ["kai-sa", "tristana"]
      archetype: "Mobile Hypercarrys mit eingebauten Escapes"
      reason: "Eingebaute Dashes (Kai'Sas E-Reposition, Tristanas W-Sprung) dodgen W-Roots und unterbrechen R-Cast-Windows. Sie skalieren in einem 1v1, aus dem Jhin nicht weg-kiten kann."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Hard-Engage-Tank-Supports"
      reason: "Sie landen Point-and-Click-CC auf Jhin in seinen Reload-Frames; er hat keinen Dash, um sich selbst zu peelen, und sein W muss vorher Schaden auf dem Ziel haben, um zu rooten."
---

## Überblick

Jhin ist ein Marksman mit großer Reichweite, der eher wie ein Sniper spielt als wie ein Sustained-DPS-Carry (damage-per-second, dauerhafter Schaden über Zeit). Sein Revolver **Whisper (Passive)** feuert nur 4 Schüsse zwischen den Reloads, aber der 4. crittet immer und exekutiert Ziele mit niedrigem HP — also baut sich jeder Trade (ein kurzer Schlagabtausch in Lane, kein voller Kill-Versuch) um das Timing dieser 4. Kugel auf einen verwundeten Champion. Er hat keinen Dash und feste Attack Speed, also zählen Positionierung und Setup mehr als mechanisches APM.

Sein Game Plan: poke mit **Q** und Auto-Attacks, bis der Support engagt, dann kette **W**-Roots in einen 4-Schuss-Crit. Ab Level 6 verwandelt **R** Picks (einen isolierten Gegner außerhalb des Teamfights eliminieren) und Objective-Belagerungen in Kills aus außerhalb der gegnerischen Reichweite. Wenn deine Front-Line dich peelt (gegen Diver beschützt), outscalst du die meisten Bot-Lane-Duos bis Minute 25.

## Empfohlener Build

**Starter-Items:** Doran's Blade + 1 Health Potion. Skip Doran's Shield, außer die Lane ist ein schweres Auto-Attack-Matchup wie Draven oder Lucian, wo das Bonus-HP mehr wert ist als der Schadensbonus.

**Core-Items (in Reihenfolge):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — erster Burst-Spike. Der Execute unter 5% HP synergisiert mit Jhins 4-Schuss-Execute und seiner R; du finishst Kills, die dein Team sonst verfehlt.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots sind Standard für Marksmen; Jhins feste Attack Speed skaliert in Schaden pro Schuss, also wird AS zu reinem Schaden.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — der Energized-Schuss ergänzt Long-Range-Poke (passt zu Jhins Identität) und der Bonus-Range erlaubt es dir, Champions zu treffen, bevor sie ihre eigene Auto-Attack-Reichweite betreten.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Jhins 4. Schuss ist ein garantierter Crit, also verwandelt der Crit-Schadensmultiplikator von IE ihn in einen One-Shot-Button auf Squishys.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — Armor Penetration fürs Late Game, wenn die gegnerische Front Line Defensiv-Items kauft.

**Situative Items:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — erster Item-Swap, wenn das Gegnerteam keine Tanks hat. Die Lethality (flache Armor Pen) lässt deinen W-Root-Burst Squishys in 1-2 Schüssen löschen in frühen Skirmishes, und der Move-Speed-Aktiv hilft, dich für R-Cast-Windows zu repositionieren.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — ersetzt Lord Dominik's gegen Heal-Stacking-Comps (Soraka, Aatrox, Vladimir). Grievous Wounds halbiert das Healing während deiner R-Execute-Window.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — kauf als 3. oder 4. Item gegen Single-Target-Hard-CC, das deinen R-Channel bricht (Blitzcrank Hook, Morgana Q, Ashe R). Der Spell Shield blockt eine Fähigkeit und lässt dich den Cast beenden.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — wenn du vorne liegst und Lifesteal plus Shield brauchst, um lange Fights ohne dedizierten Peeler zu überleben.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — gegen All-in-Diver (Diana, Kha'Zix, Master Yi). Der Move Speed im Kampf und das Ghosting durch Minions helfen dir beim Kiten (rückwärts laufen und gleichzeitig angreifen), bis dein Team peelt.

**Boots:** Berserker's Greaves ist Standard. Boots of Swiftness sind nur dann richtig, wenn das Gegnerteam unausweichliche Slows stackt (Komposition wie Ashe + Nautilus + Anivia).

**Skill Order:** Maxe **Q** zuerst (Haupt-DPS und Waveclear), **W** als zweites (Root-Verlässlichkeit und Grundschaden), **E** zuletzt (Utility, ein Punkt reicht für den Slow). Setze einen Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primär **Precision** mit **Fleet Footwork** (Bewegung + Sustain in Lane), **Presence of Mind** (Mana-Refund auf Ulti), **Legend: Bloodline** (Lifesteal-Scaling), **Coup de Grace** (Bonusschaden gegen Low-HP-Ziele — passt zu Jhins 4-Schuss-Execute). Sekundär **Sorcery** mit **Absolute Focus** und **Gathering Storm** für Late-Game-Scaling.

## Wichtige Matchups

- **Caitlyn:** Sie out-rangt deine Auto-Attacks, aber verliert jeden All-in (volles Commitment auf einen Kill, nicht nur ein schneller Trade), sobald du 4 Stacks deiner Passive hast. Bleib hinter Minions, Q-Poke, wenn sie ihre Traps verfehlt, und W-roote sie, wenn dein Support sie zuerst trifft.
- **Draven:** Lane Bully. Vermeide Auto-Attack-Trades auf Level 1-3; er gewinnt direkte DPS-Austausche. Warte auf Q-Poke, wenn er mit Axes-Stacken beschäftigt ist; wenn er overcommittet, bestraft ihn dein 4-Schuss-Crit hart.
- **Lucian:** Er burst während deiner Reload-Fenster. Behalte deinen 4-Schuss-Counter im Auge (das Revolver-Icon zeigt verbleibende Schüsse) und starte nie einen Trade mit Schuss 3 oder 4 — erst nachladen, dann engagen.
- **Sivir:** Ihr Spell Shield blockt deinen W-Root. Bait den Shield zuerst mit Q, dann W, wenn er auf Cooldown ist. Ab Level 6 lässt ihre R sie dich verfolgen, also fight nur, wenn dein Support CC für den Follow-up hat.
- **Soraka / Yuumi:** Reine Heal-Supports. Kauf Mortal Reminder als 3. oder 4. Item; ohne Grievous Wounds (der Debuff, der Heilung halbiert) kannst du sie egal mit wie vielen Treffern nicht töten.

## Power Spikes & Siegbedingungen

- **Level 2-3:** Mit **Q** und **W** hast du das stärkste Level-2-All-in-Pattern in der Lane: Support-Engage → AA → Q → W-Root für den 4-Schuss-Crit. Erzwinge einen Fight beim ersten Mal, wenn du Level 2 vor dem Gegner erreichst.
- **Level 6:** **Curtain Call** schaltet sich frei. Du kannst Kills schließen, die dein Jungler im River startet, oder einen Low-HP-Gegner aus einem Bildschirm Entfernung beim Recall picken. Hab R immer bereit, bevor Objective-Fights starten.
- **The Collector fertig (~ Minute 11-13):** First-Item-Spike. Der 5%-Execute lässt dich Kills schließen, die dein Support startet. Das ist das Fenster, in dem das Snowballen der Lane (eine frühe Führung in einen Item-Vorteil verwandeln, der zu einem Kill-Vorteil wird) am einfachsten ist.
- **Infinity Edge online (~ Minute 28-32):** Three-Item-Spike. Dein 4. Schuss one-shotet die meisten Nicht-Tank-Champions. Erzwinge jetzt Teamfights auf Objectives — Late Jhin mit IE + Rapid Firecannon trifft Backlines (die Carrys hinter den Tanks) aus außerhalb ihrer R-Reichweite.

## Häufige Fehler

- **Auto-attacken, wenn Schuss 4 in einen Tank geladen ist.** Der 4-Schuss-Execute ist auf Full-HP-Frontlinern verschwendet. Halte den 4. Schuss für ein Squishy-Target, das vorrückt, oder Last-Hit einen Minion, um den Zyklus vor dem Re-Engage zu refreshen.
- **Während des Reloads vorwärts laufen.** Nach dem 4. Schuss musst du nachladen, bevor die nächste Auto-Attack kommt. Tritt in dieser Window zurück — viele Jhin-Tode passieren in der halben Sekunde, in der der Gegner merkt, dass du nicht feuern kannst.
- **W blind als Poke werfen.** W rooted nur, wenn das Ziel kürzlich von dir oder einem Verbündeten Schaden bekommen hat (innerhalb ~4 Sekunden). Lande zuerst eine Auto-Attack oder warte auf Support-Engage; sonst ist W nur eine langsame Linie aus Schaden, die ausweichbar ist.
- **R-Channeln ohne Vision.** Jhin ist während Curtain Call am Platz festgenagelt. Ohne Wards auf den Flanken läuft ein Assassin einfach hinter dich und tötet dich mitten im Channel. Platziere E (die Lotus-Falle) auf der Flanke, bevor du R drückst.
- **E-Placement an Objectives auslassen.** Lotus-Fallen decken die Eingänge zur Drake- und Baron-Pit zu null Opportunitätskosten ab. Setze sie jeden Cooldown — sie reveal Flanken, slowen Engages und bestätigen W-Roots.

## Fortgeschrittener Tipp

Nutze **E** (Captive Audience) als Confirm für **W**-Roots. Die Lotus-Falle wird unsichtbar scharf und slowt Gegner, die darauf treten; wenn du vorhersagst, wo der gegnerische Support zum Warden hinläuft, droppe **E** dort 2 Sekunden vorher und schick **W** in dem Moment los, in dem der Slow der Falle triggert — der Slow macht den 3000-Range-W-Skillshot von überall auf der Map unausweichlich. Erfahrene Jhin-Spieler holen damit mindestens einen 3000-Range-W-Root pro Fight.
