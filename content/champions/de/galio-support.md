---
title: "Galio Support Build & Guide — Patch 16.9"
slug: "galio-support"
language: "de"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Galio Support Guide für League of Legends Patch 16.9: Starter-Items, Engage-Tank-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Alle paar Sekunden verursacht Galios nächste Auto-Attack bei Treffer Bonus-Magieschaden in einem kleinen Bereich."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Zwei Windstöße, die am Zielpunkt zu einem Tornado verschmelzen und Magieschaden über Zeit verursachen. Langer Poke aus sicherer Position."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Lädt einen Schild auf, der Magieschaden absorbiert; Loslassen taunt und schadet Gegnern in der Nähe. Nutze sie mitten im Fight, um deinen ADC zu peelen (den Carry vor Divern schützen)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Tritt kurz zurück und dasht dann nach vorn, schleudert den ersten getroffenen Champion in die Luft. Haupt-Engage-Tool."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Markiere einen Verbündeten; nach kurzer Verzögerung schlägt Galio auf seiner Position ein, schildet Verbündete und schleudert Gegner hoch. Cross-Map Engage."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen starkes Single-Target-CC auf deinem ADC (Morgana Q, Ashe R, Skarner R) — der Aktiv-Cleanse rettet den Carry"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "mit Auto-Attack-lastigem ADC (Jinx, Caitlyn, Tristana) — dein W-Slow ketten in deren DPS-Fenster"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "mit AP-Team-Komposition (AP Mid + AP Jungle) — die Debuff-Aura verstärkt Magieschaden auf den getaunteten Zielen"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "gegen 3+ AP-Bedrohungen im Gegnerteam (Mid + Jungle + Support mit Magieschaden)"
    - dd_id: "3107"
      name: "Redemption"
      against: "mit Enchanter-ADC oder heallastiger Comp (Soraka, Sona, Yuumi im Team) — Gruppenheilung im Objective Fight"
  base_combo: ["E", "AA", "W"]
  win_condition: "Nutze Hero's Entrance R für Cross-Map-Engages auf Drake- und Rift-Herald-Spawns. In Bot-Skirmishes öffne mit E-Knockup, W-Taunt zum Peelen des ADC, dann lenkt Knight's Vow Schaden vom Carry ab."
  weakness: "W-Charge ist durch Hooks (Blitzcrank, Thresh) und Silences unterbrechbar. Disengage-Enchanter (Janna, Lulu) brechen das R-Follow-up. Nur begrenzter Solo-Schaden — braucht ADC-Follow-up für Kills."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primär: Aftershock proct beim W-Taunt oder R-Knockup und gibt die Resistenzen, um nach dem Engage zu überleben. Font of Life heilt deinen ADC beim Angriff auf das immobilisierte Ziel, Bone Plating absorbiert den ersten Burst, Revitalize verstärkt deinen R-Schild."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery gibt kostenlose HP und Mana-Refill in Lane (Galio ist mana-hungry auf Support-Income), und Cosmic Insight reduziert den Flash-Cooldown — entscheidend, weil R+Flash dein wirkungsvollstes Catch-Tool ist."
    secondary_alternative: "Gegen Hard-Poke-Lane (Brand, Zyra, Xerath Support), wo du nicht gesund auf Level 6 kommst, swappe Inspiration zu Sorcery mit Manaflow Band (mehr Mana für Q-Poke-Back) plus Transcendence (schnellere E zum Ausweichen)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "Hero's Entrance landet auf deinem Verbündeten mit Knockup; Carries ohne Dash entkommen nicht, also wird jedes 2v2 zur Kill-Chance, sobald R up ist."
    - examples: ["leona", "rakan"]
      archetype: "Tank-Engage-Supports ohne Hook"
      reason: "Galios E-Knockup unterbricht ihren Engage-Windup (Leona Q-Stun-Walk, Rakan W-Charge); sein W-Schild absorbiert dann den Magieschaden ihres Post-Engage-Follow-ups."
    - examples: ["brand", "zyra"]
      archetype: "Squishy Mage-Supports ohne Escape"
      reason: "Mage-Supports stehen still, um Skillshots zu landen; Galios E erreicht sie durch Minions und sein W tankt den Burst, der einen Melee-Engager normalerweise vertreibt."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook-Supports"
      reason: "Ein Hook auf Galio mitten im W bricht das gesamte Engage; er ist ein großes Ziel ohne eigenes Dodge-Tool, und ein Hook in Chain-CC entfernt R und E aus dem Fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Disengage-Enchanter"
      reason: "Ihre AOE-Knock-aside oder Shield-and-Cleanse-Spells negieren das R-Landing-Fenster und den W-Taunt — bis Galio einschlägt, ist der Carry schon außer Reichweite."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-Range-Artillerie-Mage-Supports"
      reason: "Sie poken außerhalb von Galios Q-Reichweite und der E-Dash-Distanz, also kann er sie in Lane nicht bestrafen; HP-Verlust pre-6 stoppt seinen Sidelane-R-Impact."
---

## Überblick

Galio Support ist das Cross-Map-Engage-Tool (Fight-Starter) in einer Tank-Hülle. Er bringt Hard CC — Crowd Control, das der Gegner nicht mit einem normalen Cleanse aufheben kann — auf drei verschiedenen Fähigkeiten: **W** Taunt (zwingt das Ziel, dich anzugreifen), **E** Knockup (kurzer Wurf in die Luft, wie ein kurzer Stun), **R** Knockup. Er hat einen Magie-Schild, um den Burst (hoher Schaden in 1-2 Sekunden) der Range-Supports zu absorbieren, und ein globales Ult, das Drake- und Rift-Herald-Spawns in 5v5-Kill-Chancen verwandelt. Er spielt Support, weil sein Impact mit Map Awareness skaliert, nicht mit Gold — und weil Hero's Entrance am nützlichsten ist, wenn Teamkollegen einen Tank zum Einschlagen brauchen, nicht wenn er selbst der Tank ist.

Der Lane-Plan ist geduldig: nutze Q aus Maximalreichweite, um den Gegner zu chippen, halte E für den Moment, in dem dein ADC (der Marksman, der Carry, der per Auto-Attack Schaden macht) zum Fight committet, und lade W nur, wenn der Gegner schon im Nahkampf an dir klebt. Die großen Plays kommen ab Level 6 — wenn dein Jungler oben divet (unter den Turm geht für eine Kill), R hoch; wenn der gegnerische Jungler unten zeigt, R zurück zum Top-Laner. Skill Expression liegt im W-Timing (loslassen, um Schlüssel-Channels zu unterbrechen — Caitlyn R, Twitch-Ult-Spray, Master Yi Q) und in der R-Zielauswahl (immer den Verbündeten wählen, der am wahrscheinlichsten die 2 Sekunden Channel überlebt — niemals R auf einen Vayne mit niedriger HP).

## Empfohlener Build

**Start-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Standard-Support-Starter; das Quest-Upgrade (eine eingebaute Mission, die durch Gold-Farming über Zeit fertiggestellt wird) schaltet sich Minute 12-14 frei.

**Core-Items (in Reihenfolge):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Quest-Upgrade von World Atlas, gewählt weil Galio engage-leaning ist (er startet Fights, disengaget nicht). Fügt eine On-Immobilized-Schaden-Passive hinzu, die proct (automatisch auslöst), wenn dein W oder E trifft.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Aktiv-Flächenschild für 5v5-Skirmishes. Kombiniert mit R: Land mit R, Locket beim Aufkommen, und dein Team frisst den gegnerischen Follow-up-Burst mit 700+ Schild pro Person.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Stiefel mit Ability Haste. Verkürzt den Cooldown jedes Spells, sodass deine Engage-Tools zwischen Teamfights schneller zurückkommen, und das Summoner-Spell-CDR verkürzt Flash für R+Flash-Plays.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — auf den impact-stärksten Carry binden. Lenkt Schaden von ihm zu dir und steigert den Aftershock-Wert, weil du jetzt das prioritäre Focus-Ziel bist.

**Situations-Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — gegen starkes Single-Target-CC auf deinem ADC (Morgana Q, Ashe R, Skarner R). Aktiv cleanst Crowd Control und heilt.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — mit Auto-Attack-lastigem ADC (Jinx, Caitlyn, Tristana). Dein W-Slow ketten direkt in ihr DPS-Fenster.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — mit AP-Team-Komposition (AP Mid + AP Jungle). Die Debuff-Aura verstärkt den Magieschaden deines Teams auf den Zielen, die du mit W tauntest.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — gegen 3+ AP-Bedrohungen im Gegnerteam (Mid + Jungle + Support alle mit Magieschaden).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — mit Enchanter-ADC oder heallastiger Comp (Soraka, Sona, Yuumi schon im Team).

**Stiefel:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** als Standard — Ability Haste plus Flash-CD-Reduktion machen R+Flash-Combos häufiger verfügbar. Wechsel zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen Hard-CC-Comps (mehrere Stuns/Charms/Roots auf dich gerichtet während des R-Landings).

**Skill Order:** Maxe **E** zuerst (kürzerer Engage-Cooldown). Maxe **Q** als Zweites (Waveclear und Chip-Schaden, wenn der ADC geshovet ist — unterm Turm gepinnt ohne Minions zum Farmen). **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Swappe sekundär zu **Sorcery** (Manaflow Band + Transcendence) in Hard-Poke-Lanes, in denen du nicht gesund auf Level 6 kommst.

## Wichtige Matchups

- **Blitzcrank:** Schwere Lane. Sein Q-Hook landet während deiner W-Charge. Stell dich hinter deine Minion-Wave, damit er nicht durchhooken kann, lade W nie im Fog of War, und ruf deinen Jungler in Minute 4-5 — Blitz hat keinen Escape und dein E-Knockup chain-lockt ihn.
- **Lulu:** Schwieriges Disengage. Ihr E-Schild + W (Knock-aside oder Polymorph) löscht dein Engage. Nutze Q für Maxrange-Poke pre-6 statt E-Engages, und R aus Off-Screen, damit der Polymorph nicht landet, bevor du ankommst.
- **Leona:** Ausgeglichener Fight. Beide seid Engager, die Seite, die E zuerst landet, gewinnt den Trade. Bait ihre Q-Sun-Strike mit deinem Vorwärtsschritt, dann E im Recovery-Frame.
- **Soraka:** Vorteilhaft. Ihr Healing zählt nur, wenn sie in Reichweite bleibt. Q sie aus Maxdistanz, sodass sie zwischen Heilen und Ausweichen wählen muss, dann R + E sobald dein Jungler unten zeigt für ein unwinnbares 3v2.
- **Pyke:** Ausgeglichener Fight, aber Galio verliert, wenn Pyke eine Kill bekommt. Track seine Hooks, lass deinen ADC nie auf minimalem HP stehen, wenn du nicht ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** auf den Spike geben kannst, und warde den River tief, weil sein R ein Reset ist.

## Power Spikes & Siegbedingungen

- **Level 2:** Q + E schaltet die erste Kill-Bedrohung frei. Mit ADC-Follow-up vorlaufen, E auf den Support, Q unter den ADC — der Slow in den Knockup ketten lang genug für zwei Auto-Attack-Hits.
- **Level 6:** **Hero's Entrance** schaltet Cross-Map-Impact frei. Der erste Drake-Fight ist dein Power Spike — push die Wave hart, lauf zum Mid-River und R auf deinen Jungler, wenn er auf der Drake-Pit engaget.
- **Bloodsong fertig (~ Minute 12-14):** Engages machen jetzt echten Schaden. Der On-Immobilize-Proc fügt 30+ Magieschaden pro Hit auf das W- oder E-Ziel hinzu.
- **Locket of the Iron Solari + Knight's Vow online (~ Minute 20-25):** Dein Zwei-Item-Spike. R-in-Locket auf den Carry deckt 600+ effektive HP fürs Team, während Knight's Vow das Focus-Fire auf dich tankt und dein ADC weiter DPSt.

## Häufige Fehler

- **W laden, wenn dein ADC kein Follow-up hat.** Der W-Taunt zwingt den Gegner, dich anzugreifen, aber wenn der ADC repositioniert oder recallt, frisst du den Schaden gratis ohne Trade. Time den W-Release auf das erste Auto-Attack-Fenster des ADC.
- **Hero's Entrance auf das falsche Ziel.** Niemals R auf einen Verbündeten, der schon auf niedriger HP ist — er stirbt während der 2 Sekunden Channel und du landest auf einer Leiche. Pick das HP-stärkste Frontline-Ziel deines Teams.
- **Wave während Roams ignorieren.** Ein Galio Support, der nach Mid R'd und dabei eine ganze Bot-Wave abgibt, ist Net-Loss. Push die Wave erst zum gegnerischen Turm, dann roame — niemals aus einer eingefrorenen Lane roamen.
- **Engagen ohne ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket aktiv.** In Objective Fights ist R-Locket dein wertvollster einzelner Cooldown. Halte das Aktiv, bis dein Team zum Fight committet, dann beide im selben Moment droppen für maximalen Schildwert auf mehrere Verbündete.
- **W als Zweites maxen.** Wie bei Galio Mid gibt der W-Rank-up nur marginalen Cooldown-Reduktion. Maxe E für das 4-Sekunden-Engage-Fenster auf Level 8.

## Fortgeschrittener Tipp

R+Flash-Combo: caste Hero's Entrance auf einen Teamkollegen, dann Flash während der Windup-Animation, um deinen Landungspunkt um 400 Einheiten in beliebige Richtung umzuleiten. Das Gegnerteam sieht den R-Indikator über deinem Verbündeten und macht sich auf den offensichtlichen Knockup gefasst, dann clipt dein geflashter Landungspunkt ein Ziel außerhalb des sichtbaren R-Radius. Erfordert Übung, um den Flash innerhalb des Channel-Fensters zu timen — aber ein einziges R+Flash auf den gegnerischen Carry, off-vision (der Gegner sieht dich nicht, weil du im Fog of War bist), beendet Spiele, bevor sie anfangen.
