---
title: "Ivern Support Build & Guide — Patch 16.9"
slug: "ivern-support"
language: "de"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Ivern Support Guide für League of Legends Patch 16.9: Enchanter-Build, Brush-Vision-Tricks, Q-Root-Setups, Daisy-Peel und wichtige Bot-Matchups."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Setup-Support"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Kann Jungle-Monster nicht angreifen, sie ihn auch nicht. Pflanzt Setzlinge auf Camps, die sich beim Wachsen selbst befreien — Gratis-Gold sogar von Bot."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Langer linearer Skillshot, der den ersten getroffenen Gegner rooted. Verbündete, die das Ziel angreifen, dashen automatisch hin. Recast für eigenen Dash."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiv: in Brush machen Autos Bonus-Magieschaden (Ivern und Verbündete in der Nähe). Aktiv: erschafft einen Brush für Vision und Schadenszone."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Schildet einen Verbündeten. Nach 1.5s explodiert der Schild, Magieschaden und Slow auf Gegner in der Nähe. Trifft niemand: der Schild erneuert sich."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Beschwört Daisy, einen tanky Golem-Verbündeten. Ihr dritter Auto in Folge auf das gleiche Ziel löst eine Knockup-Schockwelle aus. Recast positioniert sie."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "gegen späte Gruppen-Teamfights, wo AOE wichtiger ist als Single-Target-Peel"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen AOE-Engage-Comps (Amumu R, Wukong R, Yasuo + Malphite Wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen schweres Single-Target-Magie-CC auf dich (Lux Q, Morgana Q, Zoe E Sleep, Brand Q Stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Stacking-Comps (Soraka, Yuumi, Aatrox, Vladimir Bot Lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Nutze die Seitenbüsche für Hinterhalte: pre-platziere W für Vision, schieße Q aus dem Fog, dein ADC dasht aufs gerootete Ziel. Nach 6 roame Mid mit Daisy und snowballe die Map."
  weakness: "Squishy, kein Peel gegen Multi-Target Hard-Engage. Ein verfehlter Q in der Lane zwingt dich zum Backen bis Cooldown — die 14s Q auf Rank 1 sind das längste Dead-Time-Fenster aller roamenden Supports."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery reitet auf jedem E zum ADC und proct auch auf Q-Root für Trade-Schaden. Manaflow Band zahlt das E-Spam, Transcendence schiebt Ability Haste über 40 für kürzere Q-Cooldowns, Scorch schließt das Poke-Fenster bei statischer Lane."
    secondary_rationale: "Resolve secondary: Font of Life triggert auf jedem Q-Root — dein ADC heilt beim Angriff auf das gerootete Ziel, ein Setup wird zu Schaden plus Sustain. Revitalize verstärkt Aery und den No-Hit-Refund von E."
    secondary_alternative: "Wenn dein Team mehr Mid-Roams braucht und Flash-Uptime zählt, swap Resolve auf Inspiration mit Magical Footwear (gratis verbesserte Boots in Min. 12) und Cosmic Insight (Summoner-Spell-Haste — mehr Flash und Ignite pro Spiel)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook-Supports, die für ihre Skillshots vortreten"
      reason: "Sie müssen in Q-Reichweite vortreten, um den Hook zu platzieren — Iverns Q + ADC-Dash bestraft das Windup mit garantiertem Root, bevor der Hook überhaupt aus der Cast-Animation raus ist."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Unbewegliche Mage-Poke-Supports"
      reason: "Sie haben keinen Dash. Q aus Brush + ADC-Follow-up wischt sie weg; W aktiv gibt Ivern eine Gratis-Vision-und-Schadenszone, die sie ohne Summoner nicht kontern können."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Reine Enchanter-Supports ohne Lockdown"
      reason: "Sie verfolgen den ADC mit Heals und Shields, bringen aber kein Peel gegen Setup-Root; Q schnappt den Carry, Daisys Slam folgt, der Enchanter hat keine Antwort auf einen 1.75s-Root."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "All-In-Tank-Engager"
      reason: "Sie flashen vor und chain-CC den ADC, bevor Ivern das Q platzieren kann. Kein Peel gegen Multi-CC-Engage; ein einzelner E-Shield zerbricht sofort unter einer 2-Target-Stun-Chain."
    - examples: ["lux", "zyra"]
      archetype: "Zone-Control / Long-Range-Mage-Supports"
      reason: "Lux' E-Zone deckt Iverns Brush-Winkel und out-poked die Q-Reichweite; Zyras Seed-and-Plant-Zoning kontrolliert die Zone besser als Iverns W-Passive, ohne je vorzutreten."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Anti-CC-Peel-Supports mit Cleanse oder Eat"
      reason: "Morganas E spell-shielded den Q-Root komplett und macht das ganze Setup zunichte; Tahm Kenchs W frisst den ADC aus Daisys Slam-Radius, bevor der dritte Auto landet."
---

## Überblick

Ivern als Support ist einer der ungewöhnlichsten Picks der Bot Lane: ein Enchanter, der Brush erschaffen kann, wo er will, einen Champion quer über die Map rooten und auf Level 6 einen tanky Golem beschwören kann. Seine Passive verbietet ihm das Auto-Attacken von Jungle-Monstern komplett, hindert ihn aber nicht daran, bei Resets durch die Bot-Side-Jungle zu laufen und **Brushmaker (W)** auf Krugs oder Wölfen zu pflanzen — Gratis-Gold, während dein ADC die Wave pusht. Er ist squishy, hat keine Escape und stirbt im 1v1-Trade — aber kein anderer Support kann mitten im Fight eine Brush-Wand erschaffen, Vision verweigern und ein einzelnes Q in eine garantierte Kill umwandeln wie Ivern.

Sein Gameplan: pre-platziere W-Brush im Bot-River oder Tri-Brush, bevor die Wave dich erreicht, schieße Q aus diesem Brush heraus, damit der Gegner den Cast nie sieht, dropp E auf deinen ADC in dem Moment, in dem er aufs gerootete Ziel dasht, und ab Level 6 rotate mit Daisy nach Mid für Cross-Map-Picks. Fights gewinnt nicht Iverns Schaden — sie werden durch seine Setups gewonnen, während der Carry den eigentlichen Kill macht.

## Empfohlener Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. World Atlas ist der einzige sinnvolle Support-Starter — Auto-Upgrade über Quest-Stufen zu ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** und schließlich ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Support-Quest-Item, Goldgenerierung über Assists und Minion-Executes. Kein Last-Hit auf Minions; lass den ADC farmen.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste hält Q und E quasi permanent verfügbar.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — Mythic. Deine Shields und Heals stapeln einen Ketteneffekt, der das Healing mit jedem aufeinanderfolgenden Proc steigert — ideal für einen Enchanter, der alle 7-11 Sekunden shieldet, slowt und nochmal shieldet.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — wenn E den ADC shieldet, gibt die Censer-Passive ihm Attack Speed und On-Hit-Magieschaden. Stackt mit dem W-Brush-Bonus, wenn der ADC im oder nahe am Brush kämpft.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — zweites Shield-Trigger-Item. Gibt dem geshieldeten Verbündeten extra Ability Power und Ability Haste für ein paar Sekunden.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — Aktiv-Cleanse auf den ADC. Löst schwere Single-Target-CC-Chains, gegen die kein Shield hilft.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — vs späte Gruppen-Fights, wo der teamweite AOE-Heal/Schaden mehr ausmacht als ein Mikael's-Cleanse.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs AOE-Engage-Comps (Amumu R, Wukong R, Yasuo + Malphite Wombo). Ein E peelt keine vier Leute; Lockets Aktiv schon.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — wenn sie dich gezielt hard-CCen (Lux Q, Morgana Q, Zoe E Sleep). Das erste Projektil wird absorbiert und du überlebst lange genug, um Daisy zu casten.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs Heal-Stacking-Comps (Soraka Mid, Yuumi Support, Aatrox Top). Dein Magieschaden appliziert den Heal-Cut auf jeden Spell.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** als Standard. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** sind okay in Heavy-Roaming-Comps, wo Rotationsgeschwindigkeit wichtiger ist als In-Fight-Cooldowns.

**Skill order:** Nimm **Q** auf Level 1 für Cheese-Invade-Roots im Level-1-Brush, dann maxe **E** zuerst (Shield-Wert skaliert, Slow stoppt Dives), **Q** als zweites (kürzerer Cooldown = mehr Roots), **W** zuletzt. **R** auf Level 6, 11, 16.

**Runes:** Primary **Sorcery** mit **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** mit **Font of Life** und **Revitalize**.

## Wichtige Matchups

- **Leona / Alistar:** Hard Counter. Ihr Flash-Engage chain-CCt den ADC, bevor dein Q rauskommt. Bleib auf maximaler W-Brush-Reichweite, pathe nie zwischen Waves, wo ihr Flash dich erreicht, und pre-shielde den ADC, wenn ihre Summoner up sind.
- **Thresh:** Skill-Matchup. Beide Supports wollen einen einzigen Hook/Root für eine Kill setupen, aber Ivern gewinnt den Range-Krieg (Q hat 1125 Units, Threshs Hook 1100). Bleib außerhalb der Hook-Reichweite, schieße Q aus dem Brush; hookt er zuerst, dropp E auf den ADC und gehe weg.
- **Lux:** Lane-Bully. Sie poked dich mit E-Q, während du nichts zurückwerfen kannst — dein Q ist Kill-Setup, kein Poke-Tool. Trade nur, wenn ihr Q im Cooldown ist; nimm Banshee's Veil mit, wenn sie das Binding weiter platziert.
- **Yuumi:** Gratis-Pick. Sie muss sich abkoppeln, um Skillshots zu werfen, und in dem Moment ist sie ein 600-HP-Ziel ohne Escape. Q beim Detach, ADC dasht durch, Gratis-Kill — alle 14s wiederholen.
- **Pyke:** Bekämpfe ihn im Brush. Deine W-Passive boostet deine und ADC-Autos im Brush; Pyke verliert jeden Brush-Trade, weil sein Q-Windup sichtbar ist, dein Q aus dem W-platzierten Brush aber komplett verdeckt.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + E):** Erstes All-In-Fenster. Mit einem Punkt in Q für Setup und E für den Dash-Shield tauschst du und der ADC einen garantierten Flash gegen die HP-Bar des gegnerischen ADC. Push Level 2, indem ihr gemeinsam die Caster der zweiten Wave hittet.
- **Level 6 (Daisy! online):** Cross-Map-Roam-Fenster. Daisy ist tanky genug, um Tower-Aggro 4-5 Sekunden zu tanken, und ihr dritter Auto-Knockup ist Engage, wenn dein ADC Flash hat. Roam Mid in dem Moment, in dem du Daisy und eine geschobene Wave hast.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer fertig (~ Min. 13-15):** Shield/Heal-Chains skalieren. In jedem Fight länger als 4 Sekunden zieht dein Heal-Output am gegnerischen Support vorbei, selbst wenn das Soraka oder Sona ist.
- **3-Item-Powerspike (Moonstone + Boots + Ardent oder Staff, ~ Min. 22-24):** Erzwinge Objective-Fights. Dein ADC haut härter und schneller als der gegnerische dank deiner Shield-Trigger, und Daisys R-Cooldown sinkt mit Item-Vervollständigungen.

## Häufige Fehler

- **Minions last-hitten.** Der World-Atlas-Execute-Proc gibt dir das Gold, auch wenn der ADC den Kill macht — klau ihm keine CS. Stell dich eine ganze Minion-Reihe hinter den ADC, außer du setupst einen Freeze.
- **Q auf Long-Range whiffen ohne Follow-up.** Q ist 14s auf Rank 1 — ein verfehlter Cast bedeutet 14 Sekunden ohne Kill-Knopf. Wenn der Gegner ausweicht, lauf zuerst in einen Brush und schieße aus näherem Winkel, mit dem er nicht rechnet.
- **W-Brush im Fight casten statt pre-platzieren.** Ein im Fight erzeugter Brush ist kaum mehr als ein Vision-Tool — der Wert liegt in der Pre-Platzierung: einer in den Tri-Brush 5 Sekunden vor einem Roam, oder im Mid-River vor einem Drake-Call. Brush im Fight ist reaktiv, wo das Kit dich proaktiv haben will.
- **Daisy auf Max-Range im Teamfight droppen.** Daisy muss ein Ziel erreichen und drei Autos in Folge platzieren für den Knockup. R auf 1500 Units = sie läuft 4 Sekunden vor dem ersten Auto — bis dahin ist der Fight vorbei. R hinter die gegnerische Linie, nicht "für Schaden".
- **Versuchen, eins-gegen-mehrere nur mit E zu peelen.** E shieldet ein Ziel. Gegen AOE-Engage, der ADC + Mid Laner + dich trifft, reicht ein Shield nicht. Plane Locket of the Iron Solari ab der Draft, sobald du die Wombo-Comp siehst.

## Fortgeschrittener Tipp

Nutze **W aktives Brush**, um Q-Winkel zu fertigen, denen der Gegner nicht ausweichen kann. Standardmuster: platziere den W-Brush 600 Units vor dir, lauf in den Brush hinein (du wirst für den Gegner unsichtbar, sofern er keine Vision im Patch hat), schieße Q aus dem Brush — das Projektil startet aus einer Position, die der Gegner nicht vorhersehen konnte, weil er den Cast nicht sieht. Funktional ist das ein gratis 1125-Range-Root ohne Fog-Anforderung, und genau deshalb glänzt Ivern in Duos mit Caitlyn, Senna oder Jhin: jeder ADC, der von weit weg angreifen will, bekommt einen Gratis-Dash-Vorwärts auf ein garantiertes Kill-Setup, auf das sich der Gegner nicht vorbereiten kann.
