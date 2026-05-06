---
title: "Gangplank Top Build & Guide — Patch 16.9"
slug: "gangplank-top"
language: "de"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Gangplank Top Lane Guide für League of Legends Patch 16.9: Starter-Kit, Crit-Build mit Trinity Force, wichtige Matchups, Power Spikes, Fehler und ein Profi-Tipp zur Fass-Kette."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Periodischer verstärkter Auto-Attack, der das Ziel über mehrere Sekunden in true damage verbrennt. Erzwingt ein Melee-Fenster — den Timer tracken, um GPs all-in vorherzusehen."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Schuss mit 625 Reichweite, macht physischen Schaden, wendet on-hit (Crit, Sheen von Trinity Force) an und gibt Gold beim Kill. Hauptpoke und Fass-Detonator."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Cleanst alle CC und heilt basierend auf fehlenden HP. Lange Cooldown, hohe Manakosten — für entscheidendes CC sparen, nicht für kleinere Slows."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Platziert ein Fass; angreifen, um es zu zünden, AOE-Physikalschaden und Slow. Zwei benachbarte Fässer kettenzünden — ein 3-Fässer-Combo ist der Win-Condition-Spike."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Globales Ult: zielt einen beliebigen Punkt auf der Map an für Kanonenkugeln, die slowen und magischen Schaden machen. Im Shop mit Plunder upgradebar (Bonus-Gold, das Q für Unit-Kills gibt)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen heal-stack-Comps (Aatrox, Soraka, Vladimir, Dr. Mundo) — grievous wounds schneidet gegnerische Heilung"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen HP-Stacking-Tanks (Cho'Gath, Sion, Ornn) — armor pen skaliert mit dem HP-Vorsprung des Ziels"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen heftigen AP-Burst (Kennen R, Vladimir, Rumble) — Magieschild bei niedrigen HP rettet vor dem finalen Schlag"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "gegen All-in-Burst (Camille, Wukong R, Malphite-Engage) — HP-Schild zündet beim One-Shot-Treffer"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Überlebe die Lane bis Trinity Force, dann ketten 3 Fässer im Teamfight. Eine Q-Crit auf 3 verkettete Fässer im Backline schließt den Fight, bevor er beginnt."
  weakness: "Kein Dash, keine angeborene Mobilität. Hard countert von Champions mit Anti-Auto-Attack-Tools (Fioras Parry, Jax E) und hard-CC point-and-click Engage, das du nicht rechtzeitig cleansen kannst."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primär: Grasp gibt Sustain in Trial-by-Fire-Trades und stackt permanente HP — das Pattern, das Gangplank beim Skalieren will. Demolish bestraft Türme bei gegnerischen Roams, Conditioning trägt das Late-Game, Overgrowth füllt den HP-Pool für Trinity Force auf."
    secondary_rationale: "Precision sekundär: Triumph erstattet HP und Gold bei Takedowns, wenn du Teamfights mit R flankst — Gangplank divet oft die Backline, der Heal rettet das Follow-up. Legend: Alacrity puscht Attack Speed für schnellere Fass-Detonation und Q-on-hit-Kadenz."
    secondary_alternative: "Gegen Ranged-Poke-Matchups (Teemo, Quinn, Vayne top) Precision gegen Inspiration tauschen mit Biscuit Delivery (HP- und Mana-Sustain ohne Alternative) und Cosmic Insight (häufigerer Flash und Teleport)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Immobile Late-Game-Skaler"
      reason: "Gangplanks Q reicht 625 Einheiten, weit außerhalb ihrer Auto-Attack-Farm-Range. Sie haben keinen Dash, um die Distanz zu schließen und ein verkettetes Fass zu bestrafen; du skalierst schneller als sie, sobald Trinity Force online ist."
    - examples: ["darius", "garen", "sett"]
      archetype: "Melee-Bruiser ohne Disengage"
      reason: "Bleib mit der Q-Reichweite außerhalb ihres Threat Radius und slow sie mit Powder-Keg-Zonen. Wenn sie endlich schließen, fehlt ihnen ein Follow-up-Tool, um dich im Melee zu halten — du resettest den Trade und gehst weg."
    - examples: ["urgot", "kled"]
      archetype: "Early-Window-All-in-Fighter, die abfallen"
      reason: "Farm in Q-Range durch Level 1-3, spar W für ihren Level-6-Ult, dann skalierst du nach Trinity Force über sie hinaus. Sie haben keine Late-Game-Antwort auf ein verkettetes Fass-Combo im Teamfight."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Mobile Fighter, die Auto-Attacks blocken"
      reason: "Fioras W-Parry stunnt Gangplank und reflektiert CC; Jax' E dodget jede Auto und Q für zwei Sekunden. Beide brechen das Trade-Pattern, das Gangplank zum Skalieren ins Late Game braucht."
    - examples: ["renekton", "olaf"]
      archetype: "Early-Window-All-in-Bullys"
      reason: "Renektons Stun auf Level 2 plus Level-6-Ult brechen Gangplanks Scaling-Plan vor Trinity Force. Olafs R gibt CC-Immunität, sodass W-Cleanse ihn nicht stoppt, während er mit True-Damage-Äxten nachsetzt."
    - examples: ["malphite", "kennen"]
      archetype: "Hard-CC Point-and-Click Engage"
      reason: "Malphites R ist point-and-click ohne Skillshot zum Dodgen. Kennens W-Stun und R-AOE ketten CC über Gangplanks W-Cleanse-Fenster hinaus — sobald die Kette startet, ist W zu spät."
---

## Überblick

Gangplank ist ein Top Laner, der ins Late Game skaliert und im Early Game eine schwere Steuer zahlt für eine der höchsten Crit-Schaden-Decken der Rolle. Sein Kit wirkt überladen, reduziert sich aber auf zwei Ideen. **Parrrley (Q)** ist ein Auto-Attack auf Distanz mit 625 Reichweite, der on-hit-Effekte (Crit-Chance, Sheen-Proc von Trinity Force, Burn in true damage) auslöst und auf Distanz überträgt. **Powder Keg (E)** ist ein platziertes Fass, das er angreift, um es zu zünden; zwei benachbarte Fässer ketten zusammen, drei Fässer ketten erneut. Das Signature-Pattern ist 3 verkettete Fässer zu stapeln und sie mit Q auf einem geclumpten Gegnerteam zu sprengen für einen Instant-Burst — hoher Schaden in einer Sekunde geliefert.

Der Spielplan ist geduldig. Farme sicher in Q-Reichweite durch das Bully-Fenster der Level 1-6, beende Trinity Force um Minute 14-16 und beginne, mit **Cannon Barrage (R)** Druck auf die Side Lanes zu machen, um Drachen zu drehen oder Türme von der anderen Seite der Map zu klauen. In Teamfights platzierst du die Fässer hinter deiner Front Line (die Tanks und Bruiser vor deinem Team) und gehst nur dann in die Kette hinein, wenn du sie auf der gegnerischen Backline (der Carry, der hinten sitzt und aus Distanz Schaden macht) zünden kannst. Wenn du die Lane überlebst und 3 Items erreichst, ist jeder Fight, in dem du eine verkettete Q-Crit landest, einseitig.

## Empfohlener Build

**Start-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** gegen Melee-Bruiser — du willst den Lifesteal (Auto-Attack-Schaden, der dich heilt) für Trades (kurze Scharmützel, in denen du ein paar Fähigkeiten austauschst und weggehst). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion gegen Ranged-Matchups (Teemo, Quinn, Gnar) — die Regeneration lässt dich unter Poke (Distanzschaden, der ohne Commitment HP abträgt) farmen.

**Core-Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (ein passiver Bonus, der den nächsten Auto-Attack nach einem Skill verstärkt) procct bei jeder Q für einen massiven Schadensschub. Attack Speed, Ability Haste (die Stat, die Cooldowns reduziert), HP — die ganze Stat-Line ist Gangplanks Win-Condition-Spike.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack Speed für schnellere Fass-Detonation und Q-on-hit-Kadenz.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — erstes Crit-Item; erstattet Mana pro Q-Cast. Löst Gangplanks Mana-Problem und startet die Crit-Skalierung.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — der Crit-Schadensspike. Q-Crits und Fass-Detonationen one-shotten jetzt squishy Ziele (Champions mit niedrigen Verteidigungen wie ADCs und Burst-Mages).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — Lifesteal für Sustain in langen Teamfights, plus ein HP-Schild-Overflow, wenn du voll bleibst.

**Situative Items:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen heal-stack-Compositions (Aatrox, Soraka, Vladimir, Dr. Mundo); die grievous-wounds-Passive schneidet gegnerische Heilung, sodass dein Schaden bleibt, statt rückgängig gemacht zu werden.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen HP-stackende Tanks (Cho'Gath, Sion, Ornn). Armor Penetration skaliert mit dem HP-Vorsprung des Ziels über dir.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen heftige AP-Burst-Bedrohungen (Kennen R, Vladimir, Rumble); der Magieschild zündet, wenn du tief fällst, und rettet dich vor dem Kill-Schlag.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — gegen All-in-Burst-Comps (Camille E + R, Wukong R, Malphite-R-Engage); HP-Schild procct im Moment des One-Shot-Treffers und kauft dir die Sekunde, die du brauchst, um mit W zu cleansen und zu resetten.

**Schuhe:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** sind Standard. Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** gegen AD-heavy Teams (3+ physische Bedrohungen) oder ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen hard-CC AP-Comps, in denen W oft auf Cooldown ist.

**Skill Order:** **Q** zuerst maxen (Parrrleys Skalierung pro Rang ist deine Hauptschadensquelle), **E** als zweites (geringerer Fass-Cooldown bedeutet mehr Kettendetonationen), **W** zuletzt. Setze einen Punkt in **R** auf den Leveln 6, 11 und 16.

**Runen:** Primärer Baum **Resolve** mit **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Sekundär **Precision** mit **Triumph** und **Legend: Alacrity** oder **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight** gegen Ranged-Poke-Matchups.

## Wichtige Matchups

- **Darius:** Hard Bully im Early — seine Q heilt, sein W slowt, sein R exekutiert; er kann dich Level 1-6 ausschalten. Farme in Q-Reichweite, contestte keine Minions im Melee und spar **W** für seinen E-Pull. Sobald ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** online ist, skalierst du ihn 1v1 weg; bis dahin ist die Lane ein Überlebenskampf.
- **Sion:** Free-Farm-Matchup. Er stackt Leichen und HP, du stackst Fässer und Crit. Push ihn mit E-Fässern unter den Turm, verweigere ihm Cannon-Minions für die Passive. Vermeide seine point-and-click aufgeladene Q und du skalierst ihn jedes Game weg.
- **Fiora:** Schlechtestes Lane-Matchup. Ihr **W** ist ein Parry — ein kurzes Fenster, in dem sie deinen nächsten Auto-Attack oder Skill absorbiert, dich stunnt und CC reflektiert. Selbst ein Fass-Slow kann zurückkommen. Wirf nie **Q** auf ihren Vital Point (den farbigen Punkt an ihrem Körper, den sie für ihre Passive treffen muss) — sie ripostet (Konterschlag) im Moment, in dem dein Projektil landet. Farme unter Turm, frag den Jungler nach Hilfe und akzeptiere ein CS-Defizit; du kannst sie nicht 1v1 schlagen, bis du 3 Items hast und sie zurückliegt.
- **Camille:** Dive-Matchup auf Level 6 (ein Dive ist, wenn ein Gegner unter deinen Turm geht, ein paar Turmschüsse einsteckt und versucht, dich trotzdem zu töten). Sie sperrt dich in den Käfig ihrer Ulti. Ihr **E**-Stun ignoriert deinen Fass-Slow und ihr **R** isoliert dich. Kauf ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** früher als üblich (4. Item) und spar Flash für ihren R-Käfig, nicht für Poke-Trades.
- **Malphite:** Hard Counterpick — sein point-and-click R hat keinen Skillshot-Tell und dein **W** kann es nicht cleansen, wenn es während eines anderen Casts landet. Halte ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** als Notfall-Build-Path bereit und nimm nie Teamfights ohne Vision auf seinen Engage-Winkel.

## Power Spikes & Siegbedingungen

- **Level 6:** Die erste **Cannon Barrage** schaltet globalen Druck frei. Du kannst einen Drachen-Fight mit R aus der Base drehen, einen fliehenden Gegner in der Mid Lane mit der Slow-Zone finishen oder die Bot Lane von einem Objective wegzonen — alles ohne deine Wave zu verlassen.
- **Level 9 (Q gemaxt):** Parrrley erreicht volle Per-Rang-Skalierung. Manakosten fallen auf 30 und der Schaden springt; du kannst jedes Matchup ohne Parry oder Dodge poken und Q gegen Q zu deinen Gunsten tauschen.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Minute 14-16):** Der größte Spike. Sheen procct alle 1,5 Sekunden auf Q, Attack Speed halbiert die Fass-Detonationszeit und dein HP-Pool lässt dich endlich einen One-Shot-Versuch überleben. Hier kippt die Lane vom Defensiven ins Aggressive — du kannst Trades engagen, die du vorher meiden musstest.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ Minute 26-30):** Q-Crit auf einen verketteten 3-Fass-Cluster löscht jeden Squishy in einer Sekunde. Erzwinge hier Objective-Fights und stell dich an den Rand der Frontline deines Teams, damit die Fass-Kette auf den gegnerischen Carries landet.

## Häufige Fehler

- **W als Panik-Cleanse beim ersten CC verschwenden.** Spar **Remove Scurvy** für die trade-entscheidende Fähigkeit — Camilles E, Renektons W-Stun, Setts W-Stun. Sie auf Lulus Polymorph oder einen kleinen Slow zu verbrennen, lässt dich gegen die echte Bedrohung wehrlos.
- **Fässer vor Q-Rang 3 stapeln.** Unter Rang 3 ist der Fass-Cooldown zu lang für das Ketten-Timing, der zweite Fass läuft oft ab, bevor der dritte verfügbar ist. Farme bis Level 5 mit einzelnen Fässern und üb dann Ketten.
- **R egoistisch ohne Team-Koordination einsetzen.** Cannon Barrage ist ein globales Engage-Tool — eine Fähigkeit, die einen Teamfight von der anderen Map-Seite startet; wenn du sie auf eine 1v1-Poke-Verfolgung droppst, verliert dein Team den 4v5-Fight zu Hause. Pinge immer die Absicht, time es mit dem Smite des Junglers und check die Minimap vor dem Cast.
- **Defensive Items vor Crit-Skalierung kaufen.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** fühlt sich sicher an, aber wenn du sie vor ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** und ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** baust, gibst du den Schadensspike auf, der Gangplank überhaupt pickbar macht. Vertrau auf den W-Cleanse und den Trinity-HP-Pool, um das Mid-Game zu überleben.
- **Vergessen, R per Plunder zu upgraden.** Jede Q, die eine Unit tötet, gibt Gold; gib es im Shop aus, um Cannon Barrage zu upgraden (mehr Schaden, längere Dauer, Heilzone). Eine nicht upgegradete R bei Minute 30 ist ein Schadensverlust von rund 30% auf dieselbe Ulti.

## Fortgeschrittener Tipp

Übe das **Barrel-Jump-Combo**: platziere Fass A, dann sofort Fass B in maximaler Kettendistanz (gerade noch im Link-Radius), dann auto-attacke Fass A. Die Kettendetonation primt Fass B; während B mitten in der Kette ist, platziere Fass C neben B. Mit der Attack Speed von ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** und Q-Rang 5 kannst du ein dauerhaftes Kettendetonations-Pattern alle 3-4 Sekunden aufrechterhalten und eine rollende AOE-Zone schaffen, um die das gegnerische Team herumlaufen muss. Das ist der Unterschied zwischen einem Gangplank, der eine Backline löscht, und einem Gangplank, der wirkungslos vom Rand aus poket.
