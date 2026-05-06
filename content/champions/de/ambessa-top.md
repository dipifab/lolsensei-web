---
title: "Ambessa Top Build & Guide — Patch 16.9"
slug: "ambessa-top"
language: "de"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Ambessa Top Guide für League of Legends Patch 16.9: Starter-Kit, Eclipse-Skirmisher-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "Nach jedem Ability-Cast macht sie einen kurzen Dash. Ihre nächste Basic Attack erhält Bonus-Reichweite, Schaden und Attack Speed und gibt Energie zurück."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Zweistufige Ability. Erster Cast trifft einen Frontalbogen und scaled mit max HP. Trifft sie einen Gegner, wird ein längerer Frontal-Slam als zweiter Cast freigeschaltet — Hauptschaden."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Erhält einen Schild und stellt sich in Brace, dann schlägt sie auf den Boden. Blockt sie Nicht-Minion-Schaden während der Brace, wird der Slam empowered. Defensives Trade-Tool."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "AOE-Kettenpeitsche um sie herum: schadet und slowt nahe Gegner. Den Passive-Dash von dieser Ability auszulösen fügt einen zweiten Strike am Ende des Dashes hinzu."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Wird unstoppable und blinkt zum entferntesten gegnerischen Champion in einer Linie, supprimiert ihn beim Ankommen, schlägt ihn dann für Schaden und Stun. Passive: armor pen + omnivamp auf Abilities."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap von Plated Steelcaps, wenn das Gegnerteam 2+ harte CC-Quellen oder schweren AP-Schaden hat"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schwere AP Top-Laner (Vladimir, Rumble, Gwen) — Magic Shield + AD Scaling bei niedrigem HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen telegrafiertes Long-Range-CC (Malphite R, Ornn R, Sett W) — Spell Shield blockt den Engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "wenn du in Lane bereits vorne bist — Kills stacken AD und füttern den Snowball Lead"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "Late Game beim R-Blink auf den Enemy Carry — der Revive lässt dich voll committen und das Follow-up überleben"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Gewinne Lanes 2-6 mit Passive-Dash-Trades, dann snowballe durch Skirmishes um Voidgrubs und Drake. Nutze R, um einen isolierten Carry im Mid-Game zu supprimieren, bevor die gegnerische Frontline peelen kann."
  weakness: "Hard-CC-Ketten töten ihre Dash-Combos. Tank-Statlines stumpfen ihren % max HP Schaden ab. R committet sie auf ein Ziel, also kann eine Peel-Comp sie nach Ende der Suppression isolieren."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "Immobile Melee-Bruiser ohne Dash"
      reason: "Ihre Passive-Dashes nach jedem Ability-Cast lassen sie aus telegrafierten Windups raus- und reinweben (Darius Pull, Garen Silence, Illaoi E). R-Suppression umgeht ihre Tankiness für die Kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Squishy Ranged Top-Laner"
      reason: "Mehrere kurze Dashes aus der Passive schließen den Gap, auf den Ranged Tops angewiesen sind. Im Melee scaled ihre Q mit max HP der Ziele und chunkt sie schneller, als sie disengagen können."
    - examples: ["nasus", "kayle"]
      archetype: "Late-Game-Scaler, die Level oder Stacks brauchen"
      reason: "Ihre Stärke auf Level 2-6 bullt sie vor ihrem Spike (Nasus Q-Stacks, Kayle Level 11 und 16). Erzwinge frühe Kills, um ihnen das Lategame zu verweigern, das sie brauchen."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tanks mit hartem CC und Stat-Checks"
      reason: "Point-and-Click-CC (Malphite R, Poppy W stoppt Dashes, Ornn Brittle plus Knock-up) unterbricht ihre Dash-Combos, bevor R landet. Rohe Armor plus HP stumpfen auch das % max HP Scaling auf Q ab."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Long-Range-Poker und Kiter"
      reason: "Jayce E (Knockback) und Gnar Mega-R unterbrechen ihren Dash mid-Cast. Kiter bleiben außerhalb ihrer Threat Range und zwingen sie, Dashes von zu weit zu committen und mit Abilities auf Cooldown bestraft zu werden."
    - examples: ["olaf", "tryndamere"]
      archetype: "Champions, deren Ultimate Suppression oder Execute besiegt"
      reason: "Olafs R cleanst seine Suppression beim Cast und neutralisiert ihr Haupt-Pickoff-Tool. Tryndameres undying R überlebt den Execute-Frame und lässt ihn aus dem Slam herausspinnen."
---

## Überblick

Ambessa ist eine Top-Lane-Skirmisher (ein Champion gebaut für kurze Skirmishes und kleine Fights, nicht für lange Teamfights). Sie ist ein AD-Champion mit physischem Schaden (AD = Attack Damage; die Alternative ist AP = Ability Power, die Magic-Damage-Stat der Mages). Sie nutzt **Energie** statt Mana als Ressource und lebt oder stirbt durch ihre Passive, **Drakehound's Step**: Jeder Ability-Cast triggert einen kurzen Dash plus eine empowered Basic Attack mit Bonus-Reichweite, Schaden und Attack Speed. Diese eine Mechanik macht sie zur Chain-Trade-Spezialistin — jede Q, W oder E gewährt einen freien Auto-Attack-Reset (eine Basic Attack, die sofort feuert und den normalen Attack-Speed-Timer ignoriert), sodass ein voller Combo vier bis fünf Hits in zwei Sekunden setzt. Ihr Kit bestraft jeden, der versucht, sie im Melee ohne harten Interrupt zu bekämpfen (ein Stun, Knock-up oder Silence, der sie mid-Cast stoppt).

Ihr Game Plan ist simpel: bullt die Lane ab Level 2 mit **Q + E** All-in-Trades (ein "All-in" ist ein voller Commit zur Kill, kein kurzer Austausch), dann snowballt sie in Mid-Game-Skirmishes um Voidgrubs und Drake. "Snowball" bedeutet einen kleinen frühen Vorsprung — eine Kill, eine Tower Plate (ein Stück Tower-Armor, das in den ersten 14 Minuten Gold gibt, wenn es bricht) — der sich mit der Zeit zu einem größeren Vorteil aufbaut. Nutze **R**, um einen isolierten gegnerischen Carry zu supprimieren (den Hauptschadensmacher des Teams), bevor ihre Frontline (die Tanks vorne) für ihn peelen können — "peel" heißt, mit CC oder dem eigenen Körper einen Mitspieler vor dem Gegner zu schützen, der gerade auf ihm sitzt. Das Lategame ist ihre Schwäche: Sobald gegnerische Tanks zwei Items fertig haben, schmilzt ihr % max HP Schaden auf Q sie nicht mehr — also schließe das Spiel vor Minute 28.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Default für AD-Trades; das Lifesteal sustained deine Dash Chains.

**Core-Items (in Reihenfolge):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — Haupt-Skirmisher-Erstitem. Nach zwei Ability-Hits am selben Ziel innerhalb 1.5 Sekunden triggert es einen Schild (eine temporäre HP-Barriere, die eingehenden Schaden absorbiert) plus ein dickes Bonus-Damage-Paket auf den nächsten Angriff. Ihre Dash-Combos räumen diese Schwelle in jedem Fight.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots. Die meisten Top-Matchups sind AD; die Auto-Attack-Schadensreduktion zählt in verlängerten Trades.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Armor Shred (jeder Hit entfernt ein bisschen Armor vom Ziel, bis 30% gestackt) plus HP plus AD. Ihre empowered Passive-Auto-Attacks stacken den Shred schneller als die meisten Champions.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Survivability-Spike. Wenn du in einem kurzen Burst schweren Schaden frisst, gibt das Item einen großen Schild. Nützlich, wenn du auf den Enemy Carry R-blinkst und der Rest ihres Teams dich fokussiert.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — wandelt eingehenden physischen Schaden in einen langsamen Bleed um (Schaden über 3 Sekunden statt sofort), gibt dir Zeit, den Trade zu beenden.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — ersetzen Plated Steelcaps, wenn das Gegnerteam zwei oder mehr harte CC-Quellen oder schweren AP-Schaden (magisch) hat. Geben Magic Resist plus Tenacity (verkürzt, wie lange Stuns und Slows auf dir halten).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen AP Top-Laner (Vladimir, Rumble, Gwen). Gibt einen "Lifeline"-Schild gegen Magic Damage (ein Schild, der einmal poppt, wenn dein HP unter 30% fällt) plus mehr AD bei niedrigem HP — soll dich lange genug am Leben halten, um zurückzuschlagen.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen telegrafiertes Long-Range-CC (Malphite R, Ornn R, Sett W). Gibt dir einen Spell Shield für eine Anwendung (blockt die nächste gegnerische Ability, die dich trifft), sodass der Engage misst und du auf deinen Bedingungen R-st.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — wenn du in Lane bereits vorne bist. Jede Kill oder Assist stackt Bonus-AD aufs Item und füttert den Snowball Lead — je mehr Kills, desto härter triffst du, was dir mehr Kills bringt.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — Lategame-Lastitem. Gibt dir alle 5 Minuten einen einmaligen Revive beim Tod. Lässt dich voll committen, wenn du auf den Enemy Carry R-blinkst, ohne das Spiel zu throwen, falls du dich misspositionierst.

**Boots:** Plated Steelcaps default. Mercury's Treads gegen AP/CC. Skip Sorcerer's-style Mage-Boots — du scaleest physisch.

**Skill Order:** Maxe **Q** zuerst (Hauptschaden und die einzige Ability, die mit gegnerischem max HP scaled), **E** als zweites (Waveclear und der AOE-Slow, der den zweiten Q-Strike setupt), **W** zuletzt. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Precision**:
- **Conqueror** — Keystone (die Haupt- und mächtigste Rune des Baums). Stackt Bonus-AD und Healing, je länger du im Fight gegen Champions bleibst; perfekt für ihr Chain-Trade-Kit.
- **Triumph** — kleines Heal und Gold-Burst auf Takedown, triggert, wenn du einen Fight bei niedrigem HP beendest.
- **Legend: Alacrity** — passiver Bonus-Attack-Speed, der mit Takedowns wächst.
- **Last Stand** — extra Schaden, wenn du unter 60% HP fällst.

Sekundärbaum **Resolve**:
- **Second Wind** — HP-Regeneration, die einsetzt, nachdem du Schaden vom Champion gefressen hast. Kontert Lane-Poke.
- **Unflinching** — extra Tenacity, sobald **Flash** auf Cooldown ist. Nützlich, wenn du mit R ins Gegnerteam reinkommst und sie versuchen, dich mit CC zu ketten.

Stat Shards (die drei kleinen Bonus-Stats unter den Runen): Adaptive Force (gibt AD oder AP, je nachdem, was dein Champion schon baut — für Ambessa wird's zu AD), nochmal Adaptive Force, dann Armor oder HP je nach Matchup.

## Wichtige Matchups

- **Darius:** Vorteilhaft. Der äußere Ring seiner Q ist der Teil, der ihn heilt; geh mit deinem Q1-Vorwärtsdash hinein, dann Q2 wieder raus. Er muss Q + E landen, um einen vollen Kill-Versuch zu committen; du kannst W nutzen, um seinen Q-Grip zu schilden und ausgeglichen zu traden. Zwing ihn, zuerst seinen W-Bleed zu nutzen (zwing ihn, sie zu verschwenden), dann engage, wenn sie auf Cooldown ist.
- **Sett:** Vorteilhaft. Er hat keinen Dash, nur einen Frontal-Slam (W). Pre-6 schlagen deine Passive-Dash-Combos ihn in verlängerten Austauschen. Nach Level 6 spar **Flash**, um den Knockback (die Versetzung) seiner R zu dodgen, der dich sonst in die Zone seines Teams schieben würde.
- **Malphite:** Nachteilig. Sein Passive-Schild stumpft deinen Level-2-All-in ab; sein Q-Slow lässt ihn weglaufen, wenn du committest. Bau ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** als zweites Item, um seinen R-Engage zu blocken. Vermeide Teamfights an Choke Points, wo er flanken kann — Überraschungsangriff aus seitlichem Winkel — durch den Fog of War (die Teile der Map, die du nicht siehst, weil dort keine Ward steht). Eine Ward ist ein kleines magisches Auge, das du platzierst, um eine Zone aufzudecken.
- **Jayce:** Nachteilig. Er hat zwei Stances; das Ranged-Form Q + E Combo poket dich (knabbert dein HP aus sicherer Distanz), bevor du den Gap schließen kannst. Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** als Starter, kuschel dich an deine Wave für HP-Regen aus Last-Hits, und such nur Kills, wenn er in Melee-Form wechselt und seine E verschwendet.
- **Camille:** Skill Matchup. Beide habt ihr starke All-ins; wer seinen ersten Cast sauber landet, gewinnt. Deine Q scaled mit ihrem aktuellen max HP — zwing sie zuerst, ihren W-Heal zu nutzen, dann Q1-Auto-Q2, um sie unter 50% zu drücken. Setz eine Ward in den Tri-Bush (der Drei-Eingangs-Busch nahe deiner Tower), damit ihr Hookshot — die Greifhaken-Ability, die sie zu einer Wand oder einem Gegner zieht — dich nicht beim Zurücklaufen zur Lane chopt.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + E):** Dein erster großer Spike. Mit beiden Abilities und dem Passive-Dash setzt ein voller Q1-Auto-E-Auto-Q2-Auto-Combo vier Basic Attacks plus zwei Ability-Ticks in zwei Sekunden. Die meisten Top-Laner können diesen Schaden in einer Melee-Schlägerei nicht matchen.
- **Level 6 (R freigeschaltet):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** schaltet Pickoffs frei — einen isolierten Gegner außerhalb des Hauptkampfs eliminieren. Die R-Passive fügt auch Armor Penetration hinzu (dein Schaden ignoriert einen Teil der gegnerischen Armor) und Omnivamp (ein kleines Heal als Prozentsatz des Schadens, den du mit Abilities verursachst). Sustained dich in Skirmishes um den River.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse fertig (~ Minute 11-13):** Dein größter Skirmish-Power-Spike. Schild und Bonus-Damage richten sich mit jedem vollen Combo aus, also kippen 1v1 und 2v2 um Voidgrubs zu deinen Gunsten.
- **2 Items + Boots (~ Minute 18-22):** Mit ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online gruppier dich mit deinem Team für Drake-Fights. R-blink auf den Enemy Carry — die Suppression (ein CC, der jede Ability und Bewegung deaktiviert, sogar **Flash**) sperrt ihn 1.5 Sekunden, das reicht deinem Team fürs Follow-up.

## Häufige Fehler

- **Sundering Slam (den zweiten Q-Cast) auf einen Minion verschwenden.** Der empowered zweite Cast ist dein Damage-Spike. Triffst du einen Minion mit Q1 statt einen Champion, hast du den Reset auf einer Kreatur verbrannt, die ohnehin in einem Treffer stirbt. Halt Q1, bis du sie auf einen gegnerischen Champion landen kannst.
- **Zu tief mit R ins Gegnerteam blinken.** R geht zum **entferntesten** gegnerischen Champion in deiner Linie, nicht zum nächsten. Stehen drei Gegner vor ihrem Carry, geht dein Blink durch sie hindurch und setzt dich hinter das ganze Team. Check immer das Positioning, bevor du R drückst — richte den Carry als einziges Ziel zwischen dir und dem entferntesten Punkt aus.
- **W im leeren Raum bracen.** Der empowered Slam triggert nur, wenn du tatsächlich Nicht-Minion-Schaden während der Brace blockst. In Lane gegen Minions zu bracen verschwendet den Cooldown für nichts. Nutz W reaktiv — wenn du eine Ability-Animation des Gegners starten siehst, dann brace.
- **R für den perfekten Engage halten, der nie kommt.** R hat 100+ Sekunden Cooldown im Early. Hast du sie auf Level 6 up und der gegnerische Laner ist "eine Rotation niedrig" — also hat gerade seinen Hauptcombo verbraucht, seine Key-Abilities sind auf Cooldown — geh rein und R ihn. Ein toter gegnerischer Laner sind zwei Wellen freies Farm und eine extra Tower Plate (diese gold-belohnenden Armor-Stücke an der Tower in den ersten 14 Minuten).
- **Hyper-Tanks 1v1en in der Erwartung, deine Q würde sie wegputzen.** % max HP Schaden sieht auf dem Papier furchtbar aus, aber Armor zählt trotzdem. Sobald ein Ornn oder Cho'Gath ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + Tank-Items fertig hat, kannst du sie nicht mehr solo killen. Gruppier dich stattdessen mit deinem Jungler.

## Fortgeschrittener Tipp

Beherrsch das **Dash-AA-Weave** (Dash und Basic Attack ineinander verflechten). Jeder Ability-Cast triggert deinen Passive-Dash und eine empowered nächste Basic Attack, also ist die optimale Sequenz in einem vollen Combo *Cast → Dash → AA → Cast → Dash → AA*, nicht *Cast → Cast → Cast → AA*. Drückst du die zweite Ability, bevor die empowered AA feuert, cancelst du den Bonus auf diesem Auto. Sauberer Rhythmus: **Q1 → Dash vorwärts → AA → E → Dash → AA → Q2 → Dash → AA → R**. Übe das im Practice Tool (dem Offline-Trainingsmodus) gegen einen Target Dummy (eine fixe Trainingspuppe), bis jeder AA registriert; in einer echten Lane verwandelt das einen 2-Sekunden-Trade in sieben separate Schadensinstanzen — der Unterschied zwischen einer Kill und dem Gegner, der bei 50 HP entkommt.
