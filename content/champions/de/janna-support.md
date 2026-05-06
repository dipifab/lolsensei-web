---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "de"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Janna Support Guide für League of Legends Patch 16.9: Enchanter-Build, Peel-Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Disengage-Tipp."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Verbündete, die sich zu Janna bewegen, erhalten Bonus Move Speed. Janna wandelt zudem einen Teil ihrer Bonus Move Speed in zusätzlichen magischen Schaden bei Auto-Attacks um."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Lädt einen Tornado auf, dann freilassen, damit er geradeaus fliegt und Gegner in die Luft wirbelt. Längeres Aufladen = mehr Reichweite, Schaden und Knock-up-Dauer."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Passiv: Bonus Move Speed und du läufst durch Einheiten. Aktiv: magischer Schaden und Slow auf einen Gegner (verbraucht den passiven Bonus)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Gezielter Schild auf einen verbündeten Champion oder Turm, der zudem Bonus Attack Damage gewährt, solange er aktiv ist."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel, der alle Gegner in der Nähe wegstößt und dann Verbündete für den Rest der Dauer heilt. Disengage und Erholung in einem Knopf."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen schweren AOE-Burst (Yone R, Kennen R, Orianna R) — sofortiger Team-Schild rettet die Backline"
    - dd_id: "3107"
      name: "Redemption"
      against: "wenn das Team Gruppen-Heilung in langen Fights oder bei Drake/Baron braucht"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "gegen AP-Carries, die mit Ability Haste skalieren (Hwei, AP Ezreal) — extra AP für den geschildeten Verbündeten"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "gegen Engage-Comps mit klarem AD-Carry (Aphelios, Kai'Sa) — die Bindung kombiniert mit deiner R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Halte den AD-Carry über die frühe Skirmish-Phase hinweg am Leben, stack Move-Speed-Peel und nutze die R, um gegnerische Engages an Objectives zu brechen."
  weakness: "Wenig Solo-Schaden und kurze Reichweite auf E. Trifft dich vor der R hartes CC, kannst du niemanden peelen, dich selbst auch nicht."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard-Engage-Supports"
      reason: "Jannas R bricht den Dive in der Luft: in dem Moment, in dem sie auf deinen AD-Carry springen, wirft der Channel sie weg und macht den Engage-Versuch zunichte."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile AD-Carries mit starken Auto-Attacks"
      reason: "Tailwind plus E-Schild plus Ardent Censer machen aus einem stationären Marksman eine Peel-Festung: sie pusht Schaden und Move Speed, ohne dass er sich umpositionieren muss."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Auffällige Diver-Jungler"
      reason: "Ihr Gank ist ein einzelner committeter Sprung — Jannas Q knockt sie mitten im Dash hoch, und ihre R schickt sie dorthin zurück, wo sie hergekommen sind."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook-Supports mit großer Reichweite"
      reason: "Janna hat keinen Gap-Closer und kein hartes CC auf Level 1: ein gelandeter Hook vor Level 6 löscht den AD-Carry, bevor die R für ein Disengage bereit ist."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage-Supports mit großer Reichweite"
      reason: "Sie poken außerhalb der 800er-Reichweite des E-Schilds: sie kann den Treffer schilden, aber nicht zurücktraden — HP-Verschleiß gewinnt die Lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Sustain-Enchanter, die den Poke wegheilen"
      reason: "Jannas einziges Schadens-Tool in der Lane ist die Q, durch die lange Aufladung telegrafiert — diese Enchanter healen den Trade weg und schlagen sie im Teamfight-Wert."
---

## Überblick

Janna ist ein Enchanter-Support, deren komplettes Kit um ein einziges Verb gebaut ist: **peel** (einen Mitspieler beschützen, meist den AD-Carry — den Marksman in der Bot-Lane, der mit Items skaliert — vor allem, wer auch immer ihn gerade angreift). Ihre Passive **Tailwind** legt Bonus Move Speed auf jeden Verbündeten, der zu ihr läuft, **Howling Gale (Q)** wirbelt jeden hoch, der versucht, die Backline zu diven (der squishy Ranged-Carry, der hinten im Teamfight steht), **Zephyr (W)** chippt und slowt die nächste Bedrohung, **Eye of the Storm (E)** ist ein Schild mit eingebautem Attack-Damage-Buff für den Verbündeten, der ihn bekommt, und **Monsoon (R)** ist eines der saubersten Disengage-Tools im Spiel (eine Fähigkeit, die einen gegnerischen Engage-Versuch bricht — sie springen rein, du schiebst sie raus).

Ihr Gameplan ist ruhig und mechanisch: Der AD-Carry stirbt nie. Stell dich zwischen Bedrohungen und deinen Carry, wirf den Schild auf Cooldown, lade die **Q** hinter Mauerwerk auf, damit der Tornado in voller Größe rauskommt, und halte die **R** als „Panic-Button" für den Moment, in dem das gegnerische Team alles auf deine Backline committet. Auf Janna willst du fast nie selbst engagen — dein Job ist es, Fights zu gewinnen, indem du dich weigerst, sie zu verlieren.

## Empfohlener Build

**Starting Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (der Support-Starter, der durch Quests in mehr Gold-Einkommen entwickelt wird) plus 2 Health Potions. Skip die Schadens-Starter: Janna snowballt nicht über Lane-Kills, sie skaliert über Teamfight-Utility.

**Core Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — entwickelt sich zu Bounty of Worlds, später zu einem Support-Legendary. Stackt Gold und Ward-Charges automatisch.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — die Ability Haste lässt dich **E**-Schild und **W**-Slow auf kürzeren Cooldowns spammen; Standard-Boot für Enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — Heal-on-Shield-Passive, die in langen Fights auframpt. Kombiniert mit deinem **E**-Spam nimmt der AD-Carry kaum noch Netto-Schaden.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — verstärkt den geschildeten Verbündeten mit zusätzlichem On-Hit-Schaden und Attack Speed. Bestes Item im Spiel neben einem Auto-Attack-AD-Carry.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — entfernt hartes CC von einem Verbündeten. Pflicht, wenn der Gegner einen Single-Target-Stun oder einen Hook auf deinem Carry hat.

**Situational Items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen schweren AOE-Burst (Flächenschaden, etwa Yone R oder Kennen R). Aktiv gibt einen sofortigen Team-Schild.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — wenn sich Fights ziehen (Drake, Baron, lange Teamfights). Verzögerter AOE-Heal, den du quer über die Map droppen kannst.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — gegen AP-Carries, die mit Ability Haste skalieren (Hwei, AP Ezreal). Buff den geschildeten Verbündeten mit zusätzlicher Ability Power.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — gegen Engage-Comps, in denen dein AD-Carry während deiner **R** einen garantierten Slow auf das Ziel braucht.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind Standard. Boots of Swiftness können sie ersetzen gegen eine Comp mit vielen Slows, vor denen du fliehen musst.

**Skill Order:** Maxe **E** zuerst (Schildwert und Attack-Damage-Buff skalieren pro Stufe), **Q** als Zweites (mehr Knock-up-Dauer und Schaden), **W** zuletzt. Nimm **R** auf Level 6, 11, 16. Starte **W** auf Level 1 für die Bonus-Move-Speed auf dem Weg in die Lane, dann **E** auf 2, um den ersten All-in zu schilden.

**Runen:** Primärer Baum **Sorcery** mit **Summon Aery** (klebt etwas Schaden und Schildwert an deine Spells), **Manaflow Band** (Mana-Sustain, damit du jede Wave schilden und **W** zünden kannst), **Absolute Focus** (Bonus-AP über 70 % HP, einfach auf Janna, weil du safe bleibst), **Scorch** (mehr **Q**-Poke). Sekundär **Resolve** mit **Font of Life** (du slowst ein Ziel mit **W** → alle Verbündeten, die es treffen, heilen) und **Overgrowth** (kleines permanentes HP-Scaling). Stat Shards: Ability Haste, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Leona / Rakan:** Hard-Engage-Supports. Halte die **R** für den Moment, in dem sie auf deinen AD-Carry committen; verbrenne sie nie für einen Tornado-Treffer. Lade die **Q** hinter einer Mauer auf, damit sie den Windup nicht sehen.
- **Blitzcrank / Thresh:** Hook-Supports. Bleib hinter Minions, jedes Mal wenn du den River überquerst. Der Hook landet einmal und der AD-Carry ist tot — du kannst nicht **R**-en aus einem 1.75-Sekunden-Stun.
- **Xerath / Brand:** Mage-Supports außerhalb der **E**-Schild-Reichweite. Klebe an der Wave, tausch keine Auto-Attacks aus und lass deinen Jungler die Lane hard-siden. Kauf ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** früher als gewöhnlich.
- **Soraka:** Sustain-Spiegel. Du out-shieldest sie auf Kosten von weniger rohem Heal. Erzwinge einen Level-2-All-in: **W** ins Gesicht, **E** auf den AD-Carry, schieb sie von der Wave, bevor sie ihren **R**-Spike bekommt.
- **Pyke:** Roam-Bedrohung. Track ihn mit Vision im Tri-Bush und am Rivereingang; verlässt er die Bot-Lane, ping sofort Mid. Jannas **R** stoppt seine Execute-Ult nur, wenn er im Nahkampf committet — auf Long-Range-Hook ist er nicht zu fangen.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **W** auf 1 und **E** auf 2 kannst du einen kurzen Trade shield-engagen (ein kurzer Schadensaustausch in der Lane, kein voller All-in). Die meisten Lanes verlieren diesen Trade, weil ihr Level-2-Spike (der Moment, in dem ein Champion einen plötzlichen Power-Schub bekommt) schwächer ist als deiner.
- **Level 6:** **Monsoon** wird freigeschaltet. Jeder gegnerische 2v2-Versuch ist ab jetzt gewinnbar — sie engagen, du channelst, sie landen unter deinem Turm.
- **Moonstone Renewer + Ardent Censer (~ Minute 16-20):** Das ist der Teamfight-Spike, an dem du aufhörst, ein Lane-Support zu sein, und zum Team-Multiplikator wirst. Die effektiven HP deines AD-Carrys verdoppeln sich praktisch, wenn du dich durch einen Fight shield-spamst.
- **Drei Legendaries online (~ Minute 25):** Mit Mikael's dazu cleanst du die eine CC-Fähigkeit, die deinen Carry sonst löschen würde. Ab hier ist jeder Objective-Fight ein 5v4, wenn der Gegner hartes CC committet.

## Häufige Fehler

- **Q ungeladen in der Lane werfen.** Ein 0,5-Sekunden-Tornado macht fast nichts. Lade die **Q** die vollen 3 Sekunden hinter einer Mauer oder im Fog of War (der ungewardete Brush nahe dem Bot-River) auf, dann releasen, sobald der Gegner in eine Wave läuft.
- **R für einen Kill verbrennen.** Jannas **R** ist das beste Disengage deines Teams. Jedes Mal, wenn du sie für einen Kill nutzt, den der AD-Carry sowieso geholt hätte, lässt du dein Team für die nächsten 100+ Sekunden ohne Panic-Button zurück.
- **Dich selbst schilden.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** zielt auch auf dich, aber der Attack-Damage-Buff ist auf Janna verschwendet. Standard: AD-Carry schilden; Selbstschild nur, wenn ein Skillshot (ein gezieltes Projektil, das man dodgen kann) auf dich gelockt ist und dein Carry safe ist.
- **In Fights zu weit hinten stehen.** Dein **E** hat eine kurze Reichweite von 800. Peekst du hinter dem Team hervor, kannst du niemanden schilden. Bleib in Schild-Reichweite des AD-Carrys, in zweiter Linie — näher, als der Instinkt dir sagt.
- **Minions für Schaden auto-attacken.** Tailwind triggert nur auf Champion-Treffer. Die Wave mit Autos zu pushen schenkt dem Gegner ein freies Trade-Fenster ohne Schadensvorteil für dich.

## Fortgeschrittener Tipp

Übe den **Q-Flash**. Beginne, **Howling Gale** hinter einer Mauer aufzuladen, dann Flash nach vorne und releasen den Tornado in derselben Bewegung: Der Knock-up landet auf einem Ziel, das den Windup nie gesehen hat. Diese eine Aktion verwandelt Janna von defensiver Enchanter in ein One-Shot-Disengage gegen einen fed Gegner (einen Champion mit Vorsprung in Kills und Gold), der zu weit gepusht hat. Der Preis ist dein **Flash** für die nächsten 5 Minuten — gib ihn nur aus, wenn der Kill oder das Überleben deines AD-Carrys garantiert ist.
