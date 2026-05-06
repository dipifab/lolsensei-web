---
title: "Briar Jungle Build & Guide — Patch 16.9"
slug: "briar-jungle"
language: "de"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Briar Jungle Guide für League of Legends Patch 16.9: Clear Path, Lifesteal-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Autos und Fähigkeiten lösen einen stapelbaren Bleed aus, der Briar abhängig vom Schaden heilt. Bonus-Heal skaliert mit fehlenden HP. Kein passives HP regen."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Kurzer Sprung, der stunt und Armor sowie MR des Ziels prozentual reduziert. Gap closer (verkürzt die Distanz) und Trade-Eröffner (kurzer Schlagabtausch)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Briar springt nach vorn und auto-tauntet sich an den nächsten Gegner (Champion-Priorität), erhält Attack Speed, Move Speed und AOE-Autos. Recast für einen empowerten Chomp, der mit fehlenden HP skaliert und heilt."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Bricht Blood Frenzy ab und kanalisiert: Damage Reduction und % HP Heal während des Aufladens. Beim Loslassen Slow; voll geladen Knockback und Stun gegen Wand. Der Self-Cancel des W ist die Schlüsselmechanik."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Briar wirft einen globalen Edelstein, der den ersten getroffenen Champion als Beute markiert. Sie fliegt hin, fearet Gegner bei der Landung und erhält empowerte Frenzy mit Bonus-Resistenzen, Lifesteal und Move Speed bis die Beute stirbt."
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen Double-AD-Comps (z.B. Yasuo + Caitlyn): wandelt Burst in langsamen Bleed, du überlebst lang genug für W-Reset"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen AP-Burst-Threats (Syndra, Veigar, Lissandra) — Magic Shield triggert wenn ein AP-Threat voll auf dir combot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Swap von Steelcaps wenn der Gegner 3+ Hard CC hat (Stuns, Roots): Tenacity verhindert dass dein R mitten im Flug gestoppt wird"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "gegen AP-lastige Comps mit anhaltendem Magic Damage: verstärkt Crimson-Curse-Selbstheal und W-Chomp-Heal um 25%"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Lande das R auf einem Backline-Carry und reite die empowerte Frenzy bis die Beute fällt. Sundered Sky und Bloodthirster halten dich während der Chase oben; der Fear streut ihre Peeler."
  weakness: "Keine Range und der Self-Taunt des W klebt dich an den nächsten Gegner — schlaue Gegner baiten Frenzy auf einen Tank, peelen aus Range raus während eine CC-Kette dich festnagelt."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision-Baum (Long-Fight-Runen): Briars W-Frenzy dauert 5+ Sekunden, daher verschwenden Burst-Keystones früh Schaden. Conqueror stackt pro Hit und peakt wenn das R landet. Triumph heilt bei Takedown, Alacrity bringt Attack Speed, Last Stand zahlt bei niedrigem HP."
    secondary_rationale: "Domination sekundär: Treasure Hunter bringt Gold aus den ersten Ganks (Gank = Überraschungsangriff aus dem Jungle) und Relentless Hunter gibt Out-of-Combat Move Speed für Cross-Map-R-Followups (du erreichst Side-Lane-Fights eine Wave früher)."
    secondary_alternative: "Hat der Gegner 3+ Ability-CC (Lissandra R, Maokai Roots, Sejuani Q), tausch Domination gegen Resolve mit Second Wind (passives HP regen unter 50%) und Revitalize (+10% auf W- und R-Selbstheal). Du opferst Snowball für Überleben durch die CC-Kette."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Immobile Mid-Lane-Mages"
      reason: "Das R schießt einen globalen Skillshot, der den ersten getroffenen Champion markiert. Backline-Mages ohne Dash werden in eine Fear+Frenzy-Kette gezogen, aus der sie nicht rauskommen, bevor der Chunk-Damage landet."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Langsame Tank-Junglers"
      reason: "Der prozentuale Armor-Shred des Q schneidet durch ihre Resistenzen, und W mit Attack Speed plus Sustain gewinnt lange Fights. Sie können dich nicht kiten und ihr CC ist Single-Cast: einmal in Cooldown überheilst du den Rest."
    - examples: ["warwick", "shyvana"]
      archetype: "Sustain-Skirmisher ohne Escape"
      reason: "Mirror-1v1 im Jungle. Briars W-Chomp skaliert auf fehlenden HP, je länger der Fight zieht desto mehr kippt die Mathematik zu ihren Gunsten. Q-Stun unterbricht ihre Channel-Ultis."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "AOE-CC mit mehrfachen Roots"
      reason: "Sie kettenketten CC auf Briar mitten in der Frenzy, ihre einzige Flucht ist E zum Self-Cancel des W — aber E ist ein langer Channel, sie re-CCen sie bevor das Heal fertig ist. Das R bringt sie in die schlechteste Position."
    - examples: ["olaf", "morgana"]
      archetype: "CC-immune oder Anti-Heal-Picks"
      reason: "Olafs R cleanst Briars E-Knockback und Stun; Morganas E-Spell-Shield blockt den Q-Stun und den R-Fear, bricht das Engage-Fenster bevor die Frenzy hochrampt."
    - examples: ["nidalee", "gragas"]
      archetype: "Long-Range-Poker mit Displacements"
      reason: "Nidalee chunkt Briars Clear mit Javelins außerhalb der W-Range; Gragas R oder E hauen Briar mitten in der Chase aus der Frenzy, resetten ihren Ramp-Up und lassen sie ohne Sustain stehen."
---

## Überblick

Briar ist eine **Diver / Skirmisher** im Nahkampf (ein Champion, der auf den gegnerischen Carry springt und lange 1v1-Duelle gewinnt). Sie macht aus ihrem eigenen Kontrollverlust ein Feature: **Blood Frenzy (W)** schaltet sie auf Autopilot zum nächsten Gegner mit Bonus-Attack-Speed und Move Speed, und ihre Passive **Crimson Curse** heilt sie über den Bleed, den ihre eigenen Auto-Attacks verursachen. Sie hat null passives HP regen, deshalb bleibt sie nur gesund, solange sie zuschlägt — sobald sie aufhört anzugreifen, hört sie auf zu heilen. Ihre Ulti **Certain Death (R)** ist ein globaler Skillshot (eine Fähigkeit, die über die ganze Map reist), der ein Ziel als Beute markiert und sie in eine empowerte Chase einsperrt, bis die Beute stirbt; bei der Landung fearet sie alle drumherum (Fear = lässt Gegner kurzzeitig unkontrolliert weglaufen).

Der Spielplan: schnelles Clear (Clear = alle neutralen Monster im eigenen Junglequartier töten) der Camps mit der W-Frenzy-Flächendamage, dann ab Level 6 Ganks (Überraschungsangriffe aus dem Jungle auf eine Lane) suchen, wo das R einen Backline-Carry (der schmale Carry, der hinten im Team steht) von seinen Peelern (Verbündete, die den Carry beschützen) wegisolieren kann. Von da an snowball (frühe Kills in mehr Kills verwandeln) zur Chase-Maschine, die 1v1-Fights mit Item-Lifesteal und gestapeltem Self-Heal überheilt. Der Hochlevel-Move ist der W-in-E-Self-Cancel: genau zu wissen, wann man die eigene Frenzy mit **Chilling Scream (E)** unterbricht, um zu heilen und neu zu positionieren, dann mit Q wieder einzusteigen.

## Empfohlener Build

**Startitems:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Die Pet-Quest schließt sich automatisch um Minute 3-4 ab.

**Core Items (in Reihenfolge):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Pet-Upgrade von Hailblade (auto-evolviert um Minute 3-4, sobald genug XP gesammelt). Der Gustwalker-Begleiter gibt Move Speed bei Champion-Schaden, was sich auf den W-Bonus draufstapelt und Clear-zu-Gank-Übergänge in Überraschungs-Dives verwandelt (Dive = auf den Gegner springen sogar unter Turm, um ihn zu töten).
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — erstes Legendary, erster großer Power Spike (der Moment, in dem dein Champion deutlich stärker wird). Seine Passive macht aus deiner nächsten Auto-Attack einen garantierten kritischen Treffer (Crit = Angriff mit doppeltem Schaden) und heilt dich. Dieser Heal liegt genau auf dem empowerten W-Chomp und gibt Crimson Curse den Missing-HP-Treibstoff zum Skalieren.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots gegen die meisten Comps. Sie reduzieren Schaden von Auto-Attacks (AA = Auto-Attack), was in langen Frenzy-Fights gegen Marksmen (Long-Range-Physical-Carries wie Caitlyn oder Jinx) viel ausmacht.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Bonus-Attack-Damage basierend auf Base-AD plus ein Lifeline-Shield (HP-Threshold-Passive: ein Shield, der automatisch ausgelöst wird, wenn die HP unter 30% fallen). Der Shield ist das Sicherheitsnetz für R-Commits (volle R-Engagements), die schiefgehen.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — hebt das Lifesteal-Cap (Lifesteal = % des Auto-Attack-Schadens in Heilung umgewandelt) und wandelt überschüssige Heilung in Shield. Kombiniert mit Crimson Curse + Sundered Sky überheilst du jedes Team, das keine Anti-Heal-Items (Items, die empfangene Heilung reduzieren) gebaut hat.

**Situative Items:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — gegen Squads mit zwei starken physischen Damage Dealern (z.B. Yasuo + Caitlyn): wandelt den eingesteckten Burst in einen langsamen Bleed über mehrere Sekunden, gibt dir Zeit, mit dem W-Chomp-Heal zu resetten.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen AP-Burst (Syndra, Veigar, Lissandra). Der Magic Shield triggert genau dann, wenn ein AP-Threat mitten in seiner Combo auf dir steht.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Swap von Steelcaps, wenn der Gegner 3+ Hard-Crowd-Control-Fähigkeiten hat (CC = Stuns, Roots, Fears, die deinen Charakter sperren). Die Tenacity-Stat dieser Boots reduziert die Dauer dieser CC-Effekte, sodass dein R-Commit nicht mitten im Flug chain-stunt wird.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — gegen AP-lastige Comps mit anhaltendem Magic Damage: verstärkt Crimson-Curse-Selbstheal und W-Chomp-Heal um 25%, verdoppelt Briars Identität anstatt sie zu flicken.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist Default. Wechsle zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn die CC-Anzahl die AA-Threats übersteigt.

**Skill Order:** Maxe **W** zuerst (DPS, Sustain, Move Speed), **Q** als zweites (Gap Close + prozentualer Armor/MR-Shred), **E** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Sekundär **Domination** mit **Treasure Hunter** und **Relentless Hunter**, oder **Resolve** mit **Second Wind** und **Revitalize**, wenn das gegnerische Team 3+ Ability-CC auf dich kettet.

## Wichtige Matchups

- **Warwick:** Sustain-Mirror im Jungle (beide Champions heilen viel in Fights). Er skaliert mit Attack Speed; du skalierst mit dem W-AOE-Damage plus Chomp-Missing-HP-Damage. Eröffne nicht auf voller HP von beiden Seiten: bait sein Q (das dich fearet) zuerst raus, cancel deine eigene Frenzy mit E zum Ausweichen, und engage neu, wenn seine Ulti in Cooldown ist.
- **Lillia:** Sie kitet dich (greift dich beim Wegrennen an) mit dem passiven Q-Schaden und dem W-Slow. Spar dir das E auf für den Moment, wenn sie auf dich zuläuft und Q spammt: der Knockback haut sie in eine Wand und stunt sie. Ohne E kreist sie dich endlos.
- **Lee Sin:** Early-Fighter, der dich auf Level 3 schlägt, wenn er mit Q + Smite (Jungler-Summoner-Spell) öffnet. Meide seine Red-Side-Jungle bis Level 4; sobald Sundered Sky online ist, kippt die Mathematik zu deinen Gunsten und sein W-Shield heilt weniger als dein W-Chomp.
- **Sejuani:** Tank-Jungler mit Hard-CC. Der Q-Armor-Shred (reduziert ihre Armor-Stat prozentual) öffnet sie, aber ihre R cancelt deinen R-Commit mitten im Flug. Tracke ihren Ulti-Cooldown — wenn sie up ist, starte kein R auf ein Ziel in ihrer Nähe.
- **Kha'Zix:** Der klassische Counterpick (ein Champion, der speziell gepickt wird, um dich im Draft zu neutralisieren) für Skirmisher. Er isoliert und bursteet dich in 2 Sekunden (Burst = hoher Schaden in 1-2 Sekunden). Gruppiere dich nach Level 6 mit deinem Team und spiele um Vision (nutze Wards, um nicht überrascht zu werden); kein Solo-Invade in seine Junglehälfte.

## Power Spikes & Siegbedingungen

- **Level 3:** Alle drei Basis-Abilities online. Erstes vernünftiges Gank-Fenster — Q über eine Wand auf ein Ziel, W in Frenzy, Q-Stun gegen die Wand.
- **Level 6:** Erste **Certain Death**. Long-Range-Cross-Map-Ganks (R quer über die Map auf eine Side Lane) werden zur echten Bedrohung: selbst ein Gegner, der schon Flash benutzt hat und keine Dashes mehr hat, verliert den Trade, sobald das R einrastet.
- **Sundered Sky fertig (~ Minute 10-12):** Erster Duell-Spike (der Moment, in dem du 1v1-Fights zuverlässig gewinnst). Du out-duellierst die meisten Junglers und die meisten Laner, die du aus deren Vision raus mit R triffst.
- **Sterak's Gage online (~ Minute 22-26):** Der Lifeline-Shield verwandelt fehlgeschlagene R-Commits in Kills. Kombiniert mit Bloodthirsters Overheal wirst du gleichzeitig zur Frontline (der tankige Körper, der Fights eröffnet) und zum Finisher.

## Häufige Fehler

- **W-Frenzy auf einen Tank statt auf den Carry.** Der Self-Taunt des W rastet auf den nächsten Gegner ein und priorisiert Champions — aber wenn Maokai (ein Tank) näher steht als Caitlyn (ein Carry), bekommst du Maokai. Nutze Q zuerst, um über die Frontline (die tankigen Champions vor dem Team) zu springen; das Q setzt dich auf das Prioritätsziel, bevor der W-Autopilot startet.
- **Das E zu lange für den Wand-Stun halten.** Voll geladen knockbacked das E Gegner, aber der Channel (die Phase, in der du still stehen bleibst, während du castest) ist lang und du nimmst während des Channels Schaden (nur reduziert, nicht geblockt). Wenn keine Wand passt, lass bei 50-70% Ladung los, um nur den Slow zu bekommen — partielles E rettet dich, volles E bringt dich um.
- **R in eine 4-Mann-Gruppe.** Das R fearet die Gegner um die Beute, aber sie erholen sich nach 1.5 Sekunden. Sobald sie sich erholt haben, stehst du allein mitten in ihrem Team in empowerter Frenzy ohne Verbündete, die für dich peelen (Peel = Verbündeten-Schutz, der Angreifer von dir wegklopft). Nutze das R, wenn die Beute abgespalten ist — Flanks (ein einzelner Gegner, der von der Seite kommt), Rotationen, isolierte Backline-Momente — nicht auf einem sauberen, gruppierten Engage (ein Fight, in dem die Gegner zusammengeballt sind).
- **Vergessen, dass Crimson Curse Missing HP zum Skalieren braucht.** Der Bonus-Heal wächst, je niedriger deine HP sind. Recall nicht auf voller HP zur Base nach einem erfolgreichen Gank, wenn ein zweiter Fight ansteht; bei 40% HP zu bleiben macht den nächsten Chomp-Heal fast doppelt so stark.

## Fortgeschrittener Tipp

Übe den **W-Self-Cancel über E**: wenn die Frenzy auf den falschen Gegner zielt (einen Tank statt des Carrys, oder dich Richtung CC zieht), tappe E mitten in der Frenzy, um zu resetten. Die Damage Reduction während des E-Channels + der % Max HP Heal verwandeln einen verkorksten Engage in eine Gratis-Repositionierung. Lass das E ungeladen (oder bei 30%) los, sobald das Prioritätsziel in Q-Range ist, dann Q drauf und re-W, um eine saubere Frenzy auf der richtigen Person zu starten. Die gesamten Animationskosten sind grob 1 Sekunde; der Unterschied in der Kill-Konversion ist eine ganze HP-Leiste.
