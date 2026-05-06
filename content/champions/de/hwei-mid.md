---
title: "Hwei Mid Build & Guide — Patch 16.9"
slug: "hwei-mid"
language: "de"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Hwei Mid Guide für League of Legends Patch 16.9: Starter-Items, Mage-Burst-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Profi-Tipp zum Schluss."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Trifft Hwei einen Champion, markiert er ihn. Ein zweiter, anderer Damage-Spell vollendet die Signatur und zündet nach kurzer Verzögerung eine magische AOE."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Öffnet 3 Schadens-Subspells. QQ Feuerball (% max HP), QW verzögerter Blitz (Bonus gegen isoliert/immobilisiert), QE Pfad aus verlangsamenden Lavapfützen."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Öffnet 3 Utility-Subspells. WQ Move-Speed-Linie für Verbündete, WW Schild-über-Zeit-Pool, WE 3 Charges, die nächste Casts mit Bonusschaden und Mana-Refund verstärken."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Öffnet 3 CC-Subspells. EQ Furcht-Kegel, EW fixiertes Auge, das einen homing Root feuert, EE verzögerte Kiefer, die ziehen und verlangsamen."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Langes Projektil, das am ersten getroffenen Champion klebt, eine Slow-Zone aufzieht und dann für hohen magischen Schaden explodiert."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen mit mehreren Gap-Closern (Zed, Akali, Talon) — Stasis kauft Zeit ohne Dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun), die dich vor dem Cast lockt"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Dr. Mundo): Grievous Wounds schneidet Regen"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "Boots-Alternative, wenn das Team mehr R-Uptime als flache Magic Pen braucht"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Kombiniere den Passive-Proc mit QW Severing Bolt auf ein rooted oder slowed Ziel in Objective-Fights, dann lege R aus Max-Range darüber, um den Gegner ins Team-Follow-up zu sperren."
  weakness: "Kein Dash, keine Escape. Jeder Subspell hat Cast-Time: Jedes All-in, das die Distanz schließt (Assassin, Diver), bevor du die CC-Sequenz beendest, tötet dich."
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
    primary_rationale: "Sorcery primär: Jeder EW-Root oder QE-Slow garantiert einen Arcane-Comet-Proc auf dem Folge-Q und liefert kostenlosen Poke. Manaflow Band trägt Hweis enormes Mana, Transcendence kürzt CDs der neun Subspells, Scorch finisht Kills."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery gleicht Hweis miserables Early-Mana aus, Cosmic Insight reduziert Summoner-CDs für häufigeres Flash in Teamfights."
    secondary_alternative: "Gegen Heavy-Poke-Artillery (Xerath, Vel'Koz) Inspiration auf Resolve mit Second Wind (Regen vs Poke) und Overgrowth (HP late) tauschen, um Trades zu überleben, die du nicht beantworten kannst."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Hweis EW-Auge fixiert sich und feuert einen homing Root auf Ziele ohne Movement, danach folgt ein garantierter QW für riesigen Schaden. Ohne Dash kommen sie nicht aus dem Cast-Window."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei outranged sie auf jedem Level und hält sie mit QE-Pfützen slowed. Ohne Flash erreichen sie seine Cast-Position nicht."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "Ihr Engage braucht Nahdistanz und langes Tell. Hwei pre-cast EW aus dem Fog, root beim Engage und walked weg, um den Trade zu resetten."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Ihre Dashes und Blinks schlagen Hweis Cast-Times. Wenn er E öffnet und den richtigen Subspell wählt, ist der Assassin schon in seiner Hitbox mit vollem Burst."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Sie poken Hwei jenseits seiner Q-Reichweite und zwingen ihn, unter Druck zu casten. Hwei hat keine Escape und keine Möglichkeit, die Distanz zu schließen — jede Wave blutet HP."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall blockt jedes Subspell-Projektil von Hwei (Q, EW, R). Sie dashen über seine Slows und beenden den Trade, bevor er die Passive-Signatur vollendet."
---

## Überblick

Hwei ist ein Long-Range-Artillery-Mage mit dem tiefsten Spell-Kit im Spiel: Q, W und E öffnen jeweils ein Menü mit drei Subspells, also neun Ability-Drücke plus die R. Er erfüllt dieselbe Rolle wie ein Control Mage in Mid Lane (Gegner vom Farm fernhalten, ihre HP aus der Distanz poken, mit CC fixieren, Nachzügler snipen), tauscht aber rohe Einfachheit gegen Anpassungsfähigkeit — jede Wave wählst du je nach Situation zwischen Schaden, Utility und CC. Hwei ist fragil und immobil: Positionierung hinter der Frontline (Tank oder Bruiser, der die Hits absorbiert) ist Pflicht.

Sein Game Plan ist gestaffelt: prime ein Ziel mit einem Schadens-Subspell, um die Passive **Signature of the Visionary** zu starten, dann vollende die Signatur mit einem zweiten Schadens-Cast, um einen AOE-Bonus-Magic-Damage hinzuzufügen. Der sauberste Opener in Lane ist EW (das homing Auge, das rooted) gefolgt von QW (Severing Bolt, der riesigen Bonusschaden gegen rooted oder immobilisiert hat). Außerhalb der Lane verschiebt sich das Kit Richtung Control: WQ für Verbündeten-Move-Speed, WW für eine Schild-Pool, EE Jaws, um ein geklumptes Gegnerteam in deine AOE zu ziehen.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Mana-Sustain ist kritisch: Hweis Subspells verbrennen Mana schnell, und die Regen von Doran's Ring ist der billigste Weg, in Lane zu bleiben, bis du das erste ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** Richtung Luden's Companion fertigstellst.

**Core-Items (in Reihenfolge):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — Burst-Spike, Mana-Sustain für die konstante Subspell-Rotation und Ability Haste, das jeden Subspell schneller aus dem Cooldown holt.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration. Jede Passive-Signatur-Explosion profitiert von der Pen, und du zielst typischerweise auf Squishies.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — prozentuale Magic Pen. Kauf als drittes Item, sobald ein Priority-Gegner ein Magic-Resist-Stück baut — Hwei skaliert stark mit multipliziertem AP, der Schaden muss durchgehen.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — dein höchster AP-Slot. Der +35%-AP-Multiplikator verstärkt jeden Subspell und die Passive-Explosion gleichermaßen.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst durch die HP-Threshold-Passive (Item-Passive, die zündet, wenn der Gegner unter einer HP-Schwelle ist, hier 35%), die mit dem R-Explosionsschaden zusammenfällt.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen mit mehreren Gap-Closern (Zed, Akali, Talon). Stasis kauft die Zeit, die Hwei mangels Dash fehlt.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun). Der Schild blockt den Lock, der sonst deinen Subspell-Cast unterbrechen würde.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Healing-Stacking-Comps (Soraka mid, Vladimir, Dr. Mundo top). Grievous Wounds schneidet die Regen, auf die sie sich verlassen.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Alternative zu ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**, wenn das Team mehr R-Uptime als Penetration braucht.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** als Default. Wechsel zu ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**, wenn dein Team mehr R-Uptime als Finisher-Tool braucht.

**Skill Order:** Maxe **Q** zuerst (deine Schadens-Subspells, da kommen die meisten Kills her), **E** als zweites (CC-Subspells), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primary **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Tausch das Secondary auf **Resolve** (Second Wind + Overgrowth) gegen Heavy-Poke-Matchups.

## Wichtige Matchups

- **Yasuo / Yone:** Wind Wall blockt jedes Subspell-Projektil (Q, EW, R). Halte E und W zurück, bis sie ihre Abilities verbrauchen; cast nie face-up eine QQ-Feuerkugel mit Wind Wall up.
- **Zed / Akali:** Dive-Threats (Champions, die unter Tower auf dich springen, um dich trotz Tower-Schüssen zu töten). Sie schlagen Hweis Cast-Times. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als zweites Item nach ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pre-cast EW aus dem Fog, bevor du zum Last-Hit gehst — nie face-up.
- **Orianna:** Ausgeglichenes Matchup, das in Teamfights zu ihr skaliert. In Lane outpokest du sie mit QQ + Passive-Procs, aber sie gewinnt geklumpte Fights mit R Shockwave; in Late-Game-Positionierung distanziere dich vom Team, damit ihre R nicht dich und den Carry zusammen erwischt.
- **Twisted Fate:** Roam-Priority-Race. Er hat Gold-Card-Stun und globale R; tracke seine Ulti mit Vision Wards an River und Tri-Bush. Wenn er Gold Card auf dich zieht, EW-roote ihn, bevor er die Distanz schließt.
- **Veigar:** Ausgeglichen-favorisiert in Lane. Sein E-Käfig ist die einzige echte Bedrohung (reintreten = stunned). Bleib außerhalb des Käfig-Radius beim Poken; QW Severing Bolt bestraft ihn hart, wenn er aus Versehen seinen eigenen Root frisst.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einem Punkt in Q (Disaster) plus deinem Start-E hast du einen Damage- und einen CC-Subspell. EW-Root in QW Severing Bolt ist ein echtes All-in-Window (ein voller Commit-Fight, kein schneller Trade), wenn ihr Jungler nicht in der Nähe ist.
- **Level 6:** Die erste **Spiraling Despair** schaltet Objective-Control frei. Die R klebt am ersten getroffenen Champion und zieht eine Slow-Zone auf — perfekt, um deinen eigenen Jungler bei Scuttle-Crab-Fights aufzustellen.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fertig (~ Minute 13-15):** Wave-Control kippt. Mit Ludens Mana-Sustain shovst du jede Wave mit QQ + QE in einer Rotation und gibst dir Roams und Bot-Dives frei.
- **3-Item-Spike (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ Minute 27-30):** Hweis Combo-Schaden mit Passive-Proc umgeht das erste MR-Item, das die Gegner gekauft haben. Erzwinge Objective-Fights, solange deine Frontline lebt.

## Häufige Fehler

- **Q auf CD spammen ohne Setup.** Öffne immer mit E (CC-Subspell) oder triff ein Ziel, das schon von einem Verbündeten slowed/rooted ist. Nackte QQ-Feuerbälle aus Neutralposition werden auf Reaktion gedodgt von jedem mit Dash und verschwenden Mana.
- **Den falschen Subspell unter Druck wählen.** Subspells sind committed, sobald du die Menü-Taste drückst — kein Cancel. Übe den richtigen Finisher in Custom Games oder Normal Queue, bevor du Hwei in Ranked spielst: QW für isolierte Ziele, QE für Waveclear, QQ für Chip-Damage auf Low-HP-Targets.
- **Vergessen, dass die Passive-Signatur zwei verschiedene Abilities verlangt.** Zwei QQ hintereinander zünden die Passive nicht. Die Signatur löst nur aus, wenn ein zweiter Damage-Spell aus einem anderen Subspell trifft — typisch QQ dann QW, oder EW-Root dann QW Severing Bolt.
- **R als Damage-Finisher statt als Setup-Tool nutzen.** Spiraling Despairs Hauptwert ist die Slow-Zone fürs Follow-up, nicht der Explosionsschaden. Cast sie zuerst, um den Gegner an die Team-Combo zu binden, dann lege deine Subspells obendrauf.
- **In Teamfights auf Max-Range ohne Peel stehen.** Hwei hat keinen Dash. Maximale Projektil-Reichweite stellt dich außerhalb des Team-Schutzes, und ein einziger Flank-Assassin löscht dich. Stell dich auf die zweitweiteste Position, damit ein Peeler (die Ability deines Supports, die dich vor Divern schützt) eingreifen kann.

## Fortgeschrittener Tipp

Nutze WE Stirring Lights, um Dead Time in Burst (hoher Schaden konzentriert in 1-2 Sekunden) umzuwandeln. Pre-cast sie, bevor du in einen Teamfight läufst: sie legt drei empowered Charges auf deine nächsten drei Abilities oder Auto-Attacks, jeder fügt magischen Bonusschaden hinzu und refundet Mana. Optimal ist WE → EW Auge → QW Severing Bolt → Auto-Attack auf das gerootete Ziel: jeder Cast in der Kette verbraucht eine Charge, und die Mana-Refunds erlauben dir, sofort mit R auf ein zweites Ziel nachzulegen, ohne OOM (out-of-mana, kein Mana mehr mitten im Fight) zu gehen.
