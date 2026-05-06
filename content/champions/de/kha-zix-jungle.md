---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "de"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Kha'Zix Jungle Guide für League of Legends Patch 16.9: Clear-Pfad, Sprünge auf isolierte Ziele, Evolution-Auswahl, Lethality-Build, Matchups, Power Spikes und Fehler."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Außerhalb der Vision verursacht deine nächste Auto auf einen Champion magic damage bonus und slow. Markiert isolierte Ziele (kein Verbündeter in 425 Einheiten) für verstärkte Q."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Trifft ein Ziel mit physical damage; massiv höherer Schaden auf isolierten Zielen (kein Verbündeter in der Nähe). Dein Hauptduell-Tool — Evolution gibt erweiterte Range."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Linearer Stachel, der bei Treffer Schaden macht und dich im Explosionsbereich heilt. Einzige Sustain-Quelle in der Jungle. Evolution fügt Slow, Vision und Dreifachkegel hinzu."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Zielgerichteter Dash, der bei Landung Schaden macht. Evolution fügt 200 Range hinzu und resetet Cooldown bei Takedown — das Assassin-Reset-Pattern lebt hier."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Wirst kurz unsichtbar, gewinnst speed bonus und kannst einmal recasten, um erneut zu stealthen. Jeder Rank lässt dich eine Fähigkeit (Q/W/E/R) permanent evolven."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "gegen Comps mit Bedarf an Waveclear und Side-Lane-Druck"
    - dd_id: "6692"
      name: "Eclipse"
      against: "gegen bruiserlastige Comps (Sett, Aatrox, Mordekaiser): Schild und Heilung im Trade"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "gegen Vision-lastige Setups (Enchanter-Supports, Vision-Junglers): zerstört Wards"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Wechsel von Lucidity gegen schweres magic CC (Ahri, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "Wechsel gegen Doppel-AD-Comps (zwei physische Bedrohungen wie Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Finde isolierte Ziele (kein gegnerischer Champion in 425 Einheiten) und burste sie mit E + Q + AA. Evolved E resetet bei Takedown und gibt Resprünge in Skirmishes."
  weakness: "Bleibt der Gegner gruppiert, fällt dein Q-Schaden stark — der Isolation-Verstärker hängt am Positioning. Hard CC (Malzahar R, Skarner R) bricht den Sprung und du hast keine Escape."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Squishy Carry-Junglers ohne hard CC"
      reason: "Sie laufen allein in ihrer Jungle zum Power-Farmen; Kha'Zix' E + isolierte Q löscht sie aus, bevor sie reagieren. Ohne CC kein Stoppen des Dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Junglers mit langsamem Clear und wenig Mobilität"
      reason: "Kha'Zix invadet schneller mit E und erreicht Scuttle Crab im Tempo. Counter-jungle ihre Backcamps nach jedem Drake — sie rotieren zu langsam zum Bestrafen."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Immobile oder wenig mobile ADC-Backlines"
      reason: "Im Late landet deine evolved E über eine Wand auf der Backline. Ohne Dash können sie sich während deines Invisibility-Fensters aus R nicht repositionieren."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded Bruiser-Junglers mit point-and-click CC"
      reason: "Ihr CC unterbricht deine Sprung-Animation und sperrt dich. Pre-6 verlieren sie kein Duell in ihrer Jungle: ein Level-3-Invade ist eine freie Kill für sie."
    - examples: ["malzahar", "skarner"]
      archetype: "Champions mit Suppression oder unstoppable Lockdown"
      reason: "Suppression wird nicht von Mercury's Treads entfernt; sobald sie dich fangen, kannst du nicht R out und das Invisibility-Fenster ist verschwendet."
    - examples: ["sett", "tahm-kench"]
      archetype: "Tanky Bruiser mit eingebautem Peel für den Carry"
      reason: "Ihr W oder Grab zieht den Carry aus deinem Isolation-Fenster, bevor Q landet. Du brauchst einen sauberen 1v1-Sprung und sie nehmen diese Option weg."
---

## Überblick

Kha'Zix ist ein Melee-AD-Assassin (ein Assassin ist ein Champion mit sehr hohem Burst, der darauf ausgelegt ist, ein einzelnes squishy Ziel zu löschen — squishy = ein Champion mit wenig Verteidigung, wie ADCs und die meisten Mages), dessen ganzes Kit darauf abgestimmt ist, **isolierte** Ziele zu finden. Isoliert heißt in seinem Fall: kein verbündeter Champion ist innerhalb von 425 Einheiten am Ziel — etwas weniger als die Reichweite eines Mercury's Treads. Seine Passive **Unseen Threat** markiert isolierte Gegner; seine Q **Taste Their Fear** macht massiven Bonusschaden an ihnen; sein Ult **Void Assault** erlaubt ihm, sich in und aus der Vision zu bewegen, um diesen isolierten Burst zu setzen. Pick ihn gegen Squads, die allein herumlaufen — Split-Pusher, Carry-Junglers, immobile Backline-Marksmen.

Sein Jungle-Plan: Clear bot-to-top mit **W** für Sustain (Sustain = Fähigkeit, sich während des Clears zu heilen), Level 3 mit freigeschalteter E, dann ab pre-6 ganken im Assassin-Pattern: **E** auf die Lane → warte, bis das Gank-Ziel von seinem Support isoliert ist → **Q** für den verstärkten Schaden → finish mit Auto-Attack. Nach Level 6 ist jeder Fight eine Jagd: Wähle die **Evolved E** (erweiterte Range und Reset bei Takedown), so dass eine erfolgreiche Kill den Dash zurückgibt und du raus springen kannst, bevor das Team auf dir kollabiert. Drake- und Rift-Herald-Fights gewinnst du, indem du mit **R** in Stealth gehst, die Backline löschst und dann re-stealthst, um zu gehen.

## Empfohlener Build

**Start-Items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Das Gustwalker-Pet gibt out-of-combat Movement Speed, perfekt um schnell zu Ganks zu kommen. Skip Mosstomper (das Sustain-Pet) — deine **W** heilt schon genug durch einen Clear-Zyklus.

**Core-Items (in Reihenfolge):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — erstes Rush-Item. Lethality (eine Stat, die flat Armor Penetration gegen Ziele mit wenig Armor gibt, im Grunde gratis Schaden auf Squishies) plus die Active für Movement Speed machen Ganks und Skirmishes trivial.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability-Haste-Stiefel, damit deine **R** schneller wieder da ist. Je öfter R verfügbar ist, desto mehr Invisibility-Fenster pro Fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — Execute-Passive: Ziele unter 5% HP sterben sofort. Schließt Kills, die dein roher Burst sonst bei 50 HP übrig ließe.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Spell Shield blockt die erste gegnerische Ability nach kurzem Channel. Rettet dich vor Malzahar R, Lissandra R oder jedem point-and-click CC, das dich vor dem R out lockt.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Late-Armor-Pen, die mit der Armor des Ziels skaliert, plus Slow auf schadensverursachenden Abilities, sodass deine Q jagt.

**Situational Items:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — wenn dein Team Side-Lane-Druck braucht: Cleave-Passive plus Active-Execute lassen dich split-pushen (eine Side-Lane allein pushen, um den Gegner zur Reaktion zu zwingen), ohne im Fight an Schaden zu verlieren.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — gegen bruiserlastige Comps (Bruiser = tanky Melee-Fighter wie Sett, Aatrox, Mordekaiser): Schild + Omnivamp (Lifesteal, der auf alle Schadensarten wirkt) hält dich im in-out-Trade am Leben.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — gegen vision-lastige Setups (Enchanter-Supports wie Janna, Lulu): On-Cast Ward-Clear plus Bonusschaden gegen Wards lassen dich unsichtbar durch ihr Vision-Netz laufen.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Wechsel von Lucidity gegen schweres magic CC. Tenacity (Stat, die Dauer von Stuns und Slows verkürzt) lässt dich rauszr R'en, bevor sie re-engagen.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — gegen Doppel-AD-Comps (zwei physische Bedrohungen wie Yasuo + Caitlyn): flat Armor und Basic-Attack-Schadensreduktion.

**Stiefel:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind Standard. Mercury's Treads oder Plated Steelcaps nur, wenn das Matchup es verlangt.

**Skill Order:** Maxe **Q** zuerst (das Isolated-Damage-Scaling ist dein Haupt-DPS), **W** als zweites (Sustain in der Jungle und Slow auf Evolution), **E** zuletzt (extra Rank gibt rohen Schaden, aber Dash-Distanz und Cooldown zählen, nicht das Scaling). Setze **R** auf Level 6, 11, 16.

**Evolution-Auswahl (das Q/W/E/R-Upgrade, das du bei jedem R-Rank-Up wählst):** Standard-Reihenfolge ist **Q auf 6** (erweiterte Range und Refund auf isoliertem Takedown — der sauberste 1v1-Spike), **E auf 11** (extra Range und Reset auf Takedown für Skirmish), **R auf 16** (längere Invisibility, zweiter Recast). Wähle **W statt Q auf 6** nur, wenn das gegnerische Team mehrere immobile Bedrohungen gruppiert hat (die Dreifach-Kegel-Slow-Zonen treffen das ganze Team in einem Fight). Wähle **E zuerst** statt Q nur, wenn du vor einem schweren CC-Jungler (Lee Sin, Vi) flüchten musst — der frühe Reset zieht dich aus gescheiterten Ganks, aber du gibst viel Kill Pressure ab.

**Runen:** Primär **Domination** mit **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Sekundär **Precision** mit **Triumph** und **Coup de Grace** (oder **Sorcery** mit **Sudden Impact** als Support, wenn du Sustain willst — Sustain = Heilung während des Fights). Stat Shards: Adaptive Force / Adaptive Force / Health.

## Wichtige Matchups

- **Lee Sin:** Vermeide Level-2- und Level-3-Invades. Sein Q-Q-Follow-up plus W-Schild schlägt dein Kit, bevor E online ist. Clear bot-to-top, hover Scuttle mit Vision und lass deine Laner ihn fangen, wenn er sich überdehnt.
- **Graves:** Gleichstand early, dein Vorteil nach Level 6. Duelliere ihn nie in offener Jungle pre-6: sein W-Blind canclet dein Auto-Attack-Fenster. Warte auf eine Isolation-Chance — gank seine Lane mit **E + Q** und lass deinen Laner ihn vom ADC peelen.
- **Elise:** Power-Spike-Rennen. Sie gewinnt Level-3-Ganks; du gewinnst den isolierten Sprung auf Level 6. Halte ihren First-Clear-Tempo und tradet Objectives — hover Drake mit Vision, damit sie ihn nicht solo macht.
- **Jarvan IV:** Counter-Engage-Gefahr. Sein E-Q-Knock-up unterbricht deine Sprung-Animation. Kauf ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** früher als üblich; der Spell Shield frisst seine Flag-Toss-Combo.
- **Karthus:** Free Matchup. Hat keine Escape und läuft allein, um Wellen zu pushen. Tracke seine Position pre-6 mit Vision; auf Level 6 löscht **R + E + Q** ihn quer durch seine Jungle, während er Requiem channelt.

## Power Spikes & Siegbedingungen

- **Level 3 (Q + W + E):** Komplettes Kit freigeschaltet. Suche einen isolierten Gank — flanke eine Side-Lane durch den River-Bush, **E** rein, **Q** auf den isolierten Lane-Gegner (der Support muss fehlen), Auto-Attack-Reset, **W** für den Slow beim Recall. Pre-6-Kha'Zix-Gank ist einer der stärksten im Spiel, wenn das Ziel allein ist.
- **Level 6 (erste Void Assault + erste Evolution):** Wähle **Evolved Q** für den Standard-Burst-Pfad. Mid-River-Skirmish-Power-Spike — R in Invisibility, E auf das markierte Ziel, Q für den verstärkten Schaden, AA-Reset, R recasten zum Verlassen. Die volle Combo löscht einen Squishy mit 1800 HP in zwei Sekunden.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade fertig (~ Minute 9-11):** Burst-Spike. Die Speed-Active lässt dich eine halbe Karte für einen Flank überqueren (Eintritt in einen Fight von einer Seite, die der Gegner nicht sieht, meist hinter der Backline). Erzwinge Fights um den zweiten Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ Minute 16-19):** Reset-Fenster. Deine E refresht jetzt bei Takedown — ein sauberer Teamfight beginnt mit E auf den Carry, Q für den Kill, und einer zweiten E auf das nächste Ziel. Hier wird Kha'Zix zur Pick-Maschine (Pick = Eliminierung eines isolierten Gegners außerhalb des Teamfights), die Spiele entscheidet.

## Häufige Fehler

- **Auf ein nicht-isoliertes Ziel springen.** Ohne den Isolation-Verstärker (kein Verbündeter in 425 Einheiten) trifft deine Q etwa 60% schwächer. Warte, bis der Support wegtritt oder dein Laner ihn peelt — trade nicht inmitten ihres Teams.
- **Evolved W standardmäßig als erste Evolution wählen.** Evolved W ist ein Teamfight-Zoning-Tool, kein Duell-Tool. Wenn dein Team auf Picks (Eliminierung eines isolierten Gegners außerhalb des Teamfights) und Skirmishes spielt, ist Evolved Q in 90% der Fälle die richtige erste Wahl.
- **R für Schaden statt Repositionierung benutzen.** Deine R ist ein Invisibility-Fenster zum Betreten und Verlassen eines Fights, kein Schadens-Knopf. Spar den zweiten Recast für den Abgang nach dem Kill — Re-Stealth während des Recalls verschwendet den Hauptwert des Tools.
- **Greedy Camps nach gescheitertem Gank.** Ohne E-Reset (vor Evolved E) hast du keinen Ausgang, wenn der Gank scheitert. Geh durch deine Jungle zurück, nicht im Autopilot zum nächsten Camp — der gegnerische Jungler trackt deinen Pfad und counter-ganked die nächste Lane.
- **Eclipse standardmäßig zuerst bauen.** Eclipse macht Kha'Zix zum Bruiser; du gibst den Lethality-Burst auf, der ihn zum Assassin macht. Bau Eclipse nur, wenn das Matchup bruiserlastig ist und du den in-out-Trade mit purer Lethality nicht überlebst.

## Fortgeschrittener Tipp

Übe die Combo **R-E-Q-AA-recast-R** im Practice Tool, bis die Inputs automatisch sind. Der Trick ist der Auto-Attack-Reset zwischen Q und Recast: Q resetet deinen Basic-Attack-Timer, also schiebst du im Moment des Q-Treffers einen Basic ein und recastest sofort R, um zu gehen. Sauber ausgeführt, löscht diese Combo ein 1900-HP-Ziel in etwa 1,8 Sekunden, und du verlässt unsichtbar — ein Solo-Pick (Pick = Tötung eines isolierten Gegners außerhalb des Teamfights) auf den gegnerischen ADC beim Baron-Setup ist ein gratis Objective. Das Skill Ceiling liegt im Timing der AA zwischen Q und R-Recast: zu früh und Q hat nicht gelandet, zu spät und das R-Fenster ist geschlossen.
