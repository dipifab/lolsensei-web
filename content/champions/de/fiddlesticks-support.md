---
title: "Fiddlesticks Support Build & Guide — Patch 16.9"
slug: "fiddlesticks-support"
language: "de"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Fiddlesticks Support Guide für League of Legends Patch 16.9: AP-Engage-Build, Lane-Harass, wichtige Matchups, Power Spikes, häufige Fehler und ein Abschlusstipp."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Der Trinket-Slot wird zu Effigy-Charges. Platziere falsche Fiddle-Vogelscheuchen für Vision; Gegner, die eine sehen, werden kurz gefeart und die Effigy explodiert."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Zielt auf einen einzelnen Gegner. Schaden mit einem Spell während du unseen bist Terrified ihn auch. Lässt ihn 1-2.5s vor dir wegrennen."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel, der HP von nahen Gegnern saugt (heilt dich). Am Channel-Ende Bonus-Execute-Schaden. Lane-Sustain nach dem ersten Back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Bumerang-Sense in breitem Kegel: slowed alle getroffenen Gegner und silenced jeden auf der Mittellinie. Hauptwerkzeug für Lane-Harass — trifft zweimal."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5s Channel, dann Blink zum Zielort mit AOE-Schaden pro Sekunde um Fiddle für 5s. Am besten aus einem Lane-Busch auf den gegnerischen ADC casten."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen schwere AOE-Burst-Comps, wenn das Team einen aktiven Schild braucht (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC, die deinen R-Channel unterbricht (Lissandra R, Veigar E, Twisted Fate Stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Aatrox) — appliziert Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald 2+ Gegner ein Magic-Resist-Item bauen"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Stelle tiefe Vision auf der Botlane, versteck dich auf Level 6 im Tri-Bush, dann Crowstorm auf den gegnerischen ADC für einen sicheren Kill, der deinen Carry snowballed."
  weakness: "Schlechteste Lane Phase unter Engage-Supports vor 6: kein Schild, kein Point-and-Click-CC. Bei Invade oder Poke kein Comeback-Tool, bis die Ult online ist."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock proct auf Q Terrify (immobilisierende CC) für einen 2.5s-Spike auf Armor und MR, der Fiddle nach Crowstorm vorm Focus rettet. Font of Life heilt den Carry nach jedem Fear, Bone Plating frisst Early-All-in-Burst, Revitalize boostet den Sustain von Bountiful Harvest."
    secondary_rationale: "Sorcery sekundär: Manaflow Band fixt Mana-Probleme beim E-Spam in Lane; Transcendence drückt Ability Haste über 30, sobald Sorcerer's Shoes stehen, für kürzere Crowstorm-Cycles."
    secondary_alternative: "Gegen schwere Poke-Lanes (Lux, Karma, Xerath Support) swap Sorcery für Inspiration mit Biscuit Delivery (5 Gratis-Kekse in Early, um voll zu bleiben) und Cosmic Insight (kürzere Cooldowns auf Flash und Crowstorm)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Squishy Enchanter ohne Hard-CC"
      reason: "Ihr Kit dreht sich um Healing und Shielding — ein Crowstorm aus dem Tri-Bush überholt ihre Cooldowns und one-shotted sie und den ADC, bevor Heal oder Shield zweimal genutzt werden."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "Diese ADCs können einem Bush-Flank nicht entkommen; sobald R + E treffen, haben sie kein Mobility-Tool, um Distanz zu resetten, und deine Botlane verwandelt den Kill in den Tower."
    - examples: ["sona", "seraphine"]
      archetype: "Backline-Mage-Supports ohne Escape"
      reason: "Sie stehen weit hinten zum Buffen — aber deine Effigies geben tiefe Vision, die ihre Position findet, und dein R-Channel von innen ihrem Hex one-shotted sie, bevor sie sich bewegen."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Enchanter mit Black Shield / Spell-Shield"
      reason: "Black Shield absorbiert Terrify (Q-Fear) und den ersten AOE-Tick von Crowstorm auf den Carry, neutralisiert deinen Engage-Cast und gibt ihnen 5s Fenster zum Disengage."
    - examples: ["janna", "lulu"]
      archetype: "Disengage- / Peel-Enchanter"
      reason: "Janna R oder Lulu W stoßen dich vom Carry weg, sobald du landest. Crowstorms AOE tickt weiter, aber ohne CC-Follow-up resettet der Fight und du frisst Focus-Schaden umsonst."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Long-Range-Artillery-Supports"
      reason: "Sie poken dich vor 6 aus der Lane jenseits deiner E-Reichweite. Fiddle hat keinen Schild und keinen Gap-Close, also fällt deine HP-Bar auf die Hälfte vor der ersten R."
---

## Überblick

Fiddlesticks Support ist ein Hide-and-Engage-Pick: ein AP-Support (Ability Power, magisches Schadens-Scaling), dessen gesamte Lane Phase ein Setup für einen einzigen Moment ist — **Crowstorm (R)** aus einem Lane-Busch auf Level 6 auf den gegnerischen ADC drücken (den Marksman, den Range-Auto-Attack-Carry der Botlane), während deine Botlane den Blink supportet. Fiddle hat keinen Schild, kein Point-and-Click-CC und keinen Escape, also ist der Preis für den Level-6-Power-Spike die schlechteste Lane Phase unter Engage-Supports zwischen Level 1 und 5.

Der Game Plan: platziere Effigies im Bot-Tri-Bush und am River, um Lurk-Plays anzudrohen, nutze **Reap (E)** für Slow-+-Silence-Harass, wenn ein Gegner zum Last-Hit tritt, und vermeide es, von Long-Range-Matchups aus der Lane gepoket zu werden. Sobald **R** up ist, such jeden Moment, in dem der gegnerische ADC über seinen Tower hinaus geshoved ist oder der Support roamt — dann blink rein. Im Mid-Game ist dein Job, Flanks für Drake-Fights aus dem River-Fog oder ungewardeten Jungle-Eingängen zu finden. Du bist im Grunde ein Jungle-Fiddle, der die Laning Phase zufällig neben einem ADC verbringt.

## Empfohlener Build

**Starter-Items:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (der AP-Support-Starter, der zu Bloodsong questet) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core-Items (in Reihenfolge):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Quest-Reward von Spellthief's Edge. Pflicht: gibt dir das Gold-Income, das echte Items erlaubt, plus einen AP-on-Takedown-Stack, der deinen Schaden snowballed. Schließ die Quest bis Minute 12-14 ab.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (schneidet durch gegnerische Magic Resistance). Günstig und die richtige Wahl gegenüber ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots**, sobald R online ist.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — dein Hauptitem. Der Slow auf **E** und **R** markiert Ziele; trifft ein Verbündeter das markierte Ziel, detoniert die Marke für Bonus-Schaden (und teilt Gold mit deinem ADC). Reine Synergie mit Fiddles Slow-reichem Kit.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — geh in Stasis, sobald Crowstorm zu Ende tickt. Mandatory, wenn der Gegner einen Diver oder Assassin hat; ohne stirbst du sofort nach jedem Engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — nur, wenn das Spiel lang läuft und du Gold übrig hast nach den Support-Items. Die +35% AP-Bonus lassen Crowstorm Squishies one-shotten.

**Situative Items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen schweren AOE-Burst (Yasuo + Malphite, Wukong, Diana). Der aktive Schild rettet das Team während ihres Wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC, die R unterbricht (Lissandra R, Veigar E, Twisted Fate Stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — wenn 2+ Gegner ein Magic-Resist-Item bauen.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** wenn 2+ Gegner Hard-CC haben.

**Skill-Order:** Maxe **E** zuerst (Slow + Silence ist dein einziger Lane-Harass), **W** als zweites (Sustain nach dem ersten Back), **Q** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Resolve** mit **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Gegen schwere Poke-Lanes (Lux, Karma, Xerath Support) swap Sorcery für **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**.

## Wichtige Matchups

- **Lux Support:** Long-Range Q-Binding plus E-Poke. Versteck dich hinter der Wave, sodass ihre **Q** keine saubere Linie hat, und face-checke nie den Tri-Bush, ohne erst mit einer Effigy zu prüfen. Überleb bis 6, dann Crowstorm sie, wenn sie überextended.
- **Morgana:** Black Shield neutralisiert deinen **Q**-Fear und den ersten AOE-Tick von R auf ihrem ADC. Engage immer auf den ADC statt auf Morgana und zwing sie zum Pre-Shield mit einem fake Schritt in den Busch, bevor du committest.
- **Leona:** Spiegel-Engage-Matchup, aber Leona hat Point-and-Click-CC und Aftershock, das deine vor 6 schlägt. Trade nur, wenn sie ihre **E** verbraucht hat, und engage nie zuerst gegen Leona — sie stunned dich aus dem R-Channel.
- **Janna:** Hard Counter zu deinem Engage. Janna **R** stößt dich beim Landen vom Carry, macht die ganze Ult zunichte. Spar Crowstorm für den Moment, in dem sie ihre R in einem anderen Fight benutzt hat oder roamt.
- **Caitlyn / Senna ADC-Paare:** Deine Traum-Lane. Ihnen fehlt Mobility — sobald du 6 erreichst, beendet Crowstorm aus dem Tri-Bush sie jedes Mal. Sag deinem ADC, die Wave so zu stellen, dass sie auf Minute 5 crasht, damit ihr beide gleichzeitig 6 erreicht.

## Power Spikes & Siegbedingungen

- **Level 2 (mit E + W):** Erstes Trade-Fenster. Lande **E** durch die Wave, um den gegnerischen ADC zu chunken; shoven sie zu dir, **W** sie unter dem Tower für Sustain.
- **Level 6 (erstes Crowstorm):** Dein einziger echter Lane-Spike. Setz einen Stealth Ward (der weiße kostenlose Trinket-Ward, mit dem jeder Champion startet) im Tri-Bush (das Buschdreieck zwischen Bot-River und Botlane) 30s vorher, positioniere dich darin, dann blink auf den gegnerischen ADC. Ein sauberes R + E + ADC-Follow-up ist ein sicherer Kill.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate online (~ Minute 14-16):** Dein Slow-Proc-Schaden spiked. Such Cross-Map-Flanks für Drake-Fights — das Gold, das du und dein ADC aus den Mandate-Procs teilt, beschleunigt die ganze Bot-Side.
- **Level 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ Minute 22):** Dein zweiter R-Punkt senkt den Cooldown und Stasis deckt dich post-Engage. Erzwing Teamfights auf Drake oder Baron aus Fog-Setups.

## Häufige Fehler

- **Engage ohne ADC-Follow-up.** Ein Solo-Crowstorm taggt die Gegner, killt aber niemanden, wenn dein ADC zurück-recallt. Check Map und ADC-Mana, bevor du R drückst; hat er weder Ult noch Mana, halt den Engage für ein besseres Fenster zurück.
- **Vor der Wave auf Level 1-3 stehen.** Du hast keinen Schild und keinen Escape vor 6. Steh hinter ADC und Minion-Linie; lass ihn last-hitten, du versteckst dich im Busch und wartest auf einen Tri-Bush-Effigy-Fear, um den Trade zu setupen.
- **Effigies in Lane-Büschen verschwenden.** Effigies sind am wertvollsten, wenn sie Vision geben, die der Gegner *nicht* abbezahlt. Setz sie im Tri-Bush oder Pixel-Bush für Engage-Setup, nicht in den offensichtlichen Botlane-Büschen, die der erste Sweep des gegnerischen Supports clearet.
- **Engage gegen einen unverbrauchten Black Shield (Morgana).** Eine Morgana mit aktivem Black Shield macht aus deinem Level-6-Power-Spike eine verschwendete Ult. Engage immer auf den ADC, nicht auf Morgana, und zwing sie zum Pre-Shield, indem du 2 Sekunden vor dem Commit einen Walk-in in den Busch fakest.

## Fortgeschrittener Tipp

Der 1.5s-Channel von **Crowstorm** ist durch alles unterbrechbar, was dich displaced oder stunned, aber der Channel selbst bricht den Busch-Stealth nicht — das heißt, du kannst **R** drücken, während du noch im Tri-Bush bist, und der Gegner sieht die Channel-Bar nur für den Bruchteil einer Sekunde, bevor der Blink landet. Üb das in Normals: warte, bis der gegnerische ADC für einen CS überextended, drück R aus dem Tri-Bush, blink in sein Gesicht. Der Audio-Cue (das ikonische Fiddle-Lachen) ist die einzige Warnung, die sie kriegen, und bis sie reagieren, tickt die AOE schon.
