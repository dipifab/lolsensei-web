---
title: "Jayce Top Build & Guida — Patch 16.9"
slug: "jayce-top"
language: "it"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Guida Jayce top per League of Legends Patch 16.9: meccaniche di weapon-swap, build lethality, matchup chiave, power spike, errori frequenti e consiglio avanzato."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Ad ogni weapon swap (R) Jayce ottiene un breve burst di Movement Speed e per qualche istante ignora la collisione con le unità."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: salta sul bersaglio infliggendo danno fisico e rallentando i nemici intorno. Cannon: spara una skillshot AOE a lungo raggio — il principale strumento di poke."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passiva che restituisce mana sulle auto, attiva un'aura che danneggia i nemici vicini. Cannon: massimizza l'Attack Speed per i prossimi 3 attacchi — finestra di burst con autoattack."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback corto raggio che infligge danno magico in % di max HP — strumento di execute e di disengage. Cannon: piazza un gate che velocizza gli alleati e amplifica una Q (Shock Blast) sparata attraverso."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (cooldown 6s). Alterna tra Hammer (engage, sustain, knockback) e Cannon (poke, AOE waveclear). Il primo attacco dopo il passaggio a Cannon riduce Armor e Magic Resist del bersaglio."
      dd_spell_id: "JayceStanceHtG"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro forti minacce AP (Vladimir, Rumble, Kennen): lo scudo magico salva quando arriva il burst e aggiunge AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC duro single-target da engage (Camille E, Sett W, Malphite R): lo spellshield blocca l'abilità di lockdown"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando sei avanti e ti focusano: la rinascita ti permette di committare di più nelle skirmish"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps se il team enemy ha 3+ minacce AP/CC; la tenacity riduce la durata di stun e slow"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Usa Cannon Q per far calare HP prima del livello 6, poi all-in con Hammer Q salto, W aura, E knockback quando il nemico è sotto il 50%. Trasforma il vantaggio di lane in pressione di splitpush sulle side."
  weakness: "Mana hungry: una Q mancata in poke butta lo scambio. Gap-closer duri (Camille E, Malphite R) chiudono la distanza prima che tu possa swap. Cala nel late vs build con MR pesante."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack viene attivata dal pattern di trade Cannon Q + AA + Hammer Q-AA-E con +8% di danno per skirmish. Triumph ricarica HP nelle multi-kill, Legend: Alacrity porta l'AS al cap dentro la W (Hyper Charge), Coup de Grace chiude kill sotto il 40% HP."
    secondary_rationale: "Sorcery come secondary: Manaflow Band evita di rimanere a secco di mana sullo spam di Cannon Q nelle lane lunghe. Transcendence aggiunge Ability Haste, così la finestra di weapon swap torna prima — ogni Q in più in lane è HP in meno per l'avversario."
    secondary_alternative: "Contro top ranged a forte poke (Vladimir, Kennen, Quinn), swap Sorcery → Resolve con Bone Plating (riduzione di chunk sui primi 3 colpi ricevuti) e Second Wind (rigen passivo di HP sotto il 50%) per sopravvivere alla fase di lane."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Bruiser melee immobili senza risposta a distanza"
      reason: "Non hanno modo di rispondere al raggio della Cannon Q. Pokeli fuori dalla wave per i primi 6 livelli: Nasus perde stack di Q, Garen non arriva mai a Q, Sett non riempie mai la barra di W (Haymaker)."
    - examples: ["yorick", "tryndamere"]
      archetype: "Scaler lenti senza tool di harass in lane"
      reason: "Il loro kill threat richiede item. La Cannon Q rimuove minuti di farm prima del power spike, e la Hammer E knockback nega la finestra di all-in quando finalmente provano a committare."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tank con MR da item e ult di engage"
      reason: "Itemizzano contro il poke Cannon (Bramble Vest, Negatron Cloak) e la loro ult (Malphite R, Maokai R) flash-engagia oltre la Hammer E. Jayce cala se la lane va lunga senza una kill."
    - examples: ["vladimir", "kennen"]
      archetype: "Top ranged con sustain o range eguale"
      reason: "La Q di Vladimir (Transfusion) cura il poke; la W di Kennen (Electrical Surge) supera il range della Cannon Q. Entrambi forzano una lane a poke che Jayce perde senza l'opzione di all-in che avrebbe contro un melee bruiser."
    - examples: ["camille", "renekton"]
      archetype: "Bruiser con CC duro e gap-close veloce"
      reason: "Camille E (Hookshot) e Renekton W (Ruthless Predator) chiudono la distanza dentro la cast window della Cannon Q e bloccano Jayce con CC duro prima del swap a Hammer E. Non ha dash per tenerli a distanza."
---

## Panoramica

Jayce è uno skirmisher ibrido ranged-melee che vive o muore sul weapon swap (R). In **Cannon stance** è uno specialista di poke a lungo raggio con una skillshot AOE Q e un movement-speed gate (E) che amplifica la Q quando viene sparata attraverso. In **Hammer stance** diventa un melee bruiser con leap-Q, aura W e un knockback (E) che fa danno magico in % HP massimi. La R ha cooldown 6 secondi, e il primo attacco dopo il passaggio a Cannon riduce Armor e Magic Resist del bersaglio — il trigger d'ingresso di ogni all-in.

In top lane Jayce vuole una lane lunga. Erodi HP con **Cannon Q + E gate** (poke a distanza), torna a distanza di sicurezza, ripeti. Quando il nemico è sotto metà HP, swap a Hammer, salta con **Q**, droppa **W** per il danno aura e la passiva mana-on-hit, chiudi con **E** knockback se sopravvive. Trasforma ogni vantaggio di lane in pressione di splitpush — spingere una side lane da solo per costringere l'avversario a coprirla. Il range di Cannon Q in side è uno degli split più sicuri del gioco, e Eclipse + Hubris ti danno il burst (danno alto in 1-2 secondi) per vincere skirmish 1v1 contro la maggior parte dei top-laner.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** nei matchup poke-friendly. Switch a ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** contro un top ranged (Vladimir, Quinn, Kennen) per sopravvivere ai primi scambi di Cannon Q.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primo spike. Lo scudo procca da due abilità in 1.5s, condizione che Jayce centra naturalmente con Cannon Q + Hammer Q sul swap. Aggiunge AD, omnivamp (life-leech su tutto il danno) e Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro un top AD (la maggior parte del meta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (statistica che ignora una parte fissa dell'armatura nemica) più una passiva (Eminence) che accumula stack ad ogni takedown (kill o assist) e fa crescere il danno da una kill alle successive. Ideale come secondo item quando sei avanti.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality e slow on damage. Lo slow sulla Cannon Q trasforma i nemici in fuga in target da catch con Hammer Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro minacce AP (Vladimir, Rumble, Kennen). Lo scudo magico salva quando il burst arriva e aggiunge AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro CC duro single-target da engage (Camille E, Sett W, Malphite R). Lo spellshield si carica fuori combattimento e blocca la prima abilità di lockdown (CC duro che ti immobilizza).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando sei avanti e ti focusano. La rinascita ti permette di committare di più nelle skirmish; se scambi una vita per due, rinasci per prenderne una terza.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai Plated Steelcaps se il team enemy ha 3+ minacce AP o CC; la tenacity passiva riduce la durata di stun e slow.

**Boots:** Plated Steelcaps di default. Mercury's Treads contro magic damage pesante o chain CC.

**Skill order:** Maxa **Q** per prima (è la fonte di danno principale in entrambi gli stance), **E** per seconda (knockback per execute, gate per amplificare il poke), **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primario **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Contro top ranged a forte poke, swap a **Resolve** con **Bone Plating** + **Second Wind**.

## Matchup chiave

- **Darius:** Pre-6 mantienilo a distanza (kite) con Cannon Q e non entrare mai nel ring esterno della sua Q (Decimate). La Hammer E knockback cancella il reset della W (Crippling Strike) se hai il timing giusto; una volta respinto col knockback sotto torre, perde ogni kill threat.
- **Camille:** Vince post-6 quando ha la E (Hookshot) up. Tracka il cooldown della E: quando è giù, freeza la wave (la tieni ferma davanti alla tua torre senza spingerla in avanti) e logorala con Cannon Q. Quando è up, tieni ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** carico.
- **Malphite:** La lane è winnable finché non completa ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** + un singolo item armor, dopo di che la Cannon Q lo solletica. Vinci la lane nei primi 12 minuti o accetta uno scaling loss; valuta di rushare item da teamfight per le skirmish in side.
- **Fiora:** Bait la sua W (Riposte) facendo finta di partire con Hammer Q — inizia l'animazione del salto, poi fermati. Quando la W è in cooldown, all-in con tutta la combo Hammer. Se la Q va in W, perdi un'abilità con cooldown 16s per niente.
- **Vladimir:** Il matchup più duro nel pool standard. La Q lo cura attraverso il poke Cannon e la W (Sanguine Pool) schiva la Hammer E knockback. Chiedi gank presto al jungler prima che abbia 2 item, poi evita i teamfight e fai splitpush (spingi una side lane da solo per costringere l'avversario a rispondere) invece di raggrupparti.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + W o Q + E):** Cannon Q + AA + swap a Hammer Q è uno scambio del 35-40% HP sulla maggior parte dei squishy. Se il nemico si avvicina per last-hittare un melee minion, butta la combo e back off; il Move Speed passivo sul swap ti porta fuori prima che possa rispondere.
- **Livello 6 (primo rank di R):** Entrambi gli stance unlockano al massimo. L'all-in Cannon-to-Hammer adesso è kill threat al 40% HP invece che chunk trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minuto 11-13):** Primo grosso spike. Scudo + omnivamp ti permettono di committare in trade più lunghi; non devi più disimpegnarti dopo un singolo ciclo Cannon-Hammer.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ minuto 19-22):** Gli stack di Eminence (la passiva di AD bonus sui takedown) iniziano a fare snowball (vantaggio crescente: kill → AD bonus → più kill). Forza una skirmish in side per accumulare stack di Eminence, poi ruota sugli obiettivi a danno pieno.

## Errori comuni

- **Buttare Cannon Q senza setup.** La Q nuda costa mana ed è facile da schivare. Droppa prima la **E** (Acceleration Gate) verso il nemico; il gate amplifica la Q che lo attraversa (range più lungo, più danno) e il leggero delay forza il nemico a committare a una direzione di movimento prima di sparare.
- **Swappare a Hammer troppo presto.** Se swappi prima che il nemico sia sotto ~50% HP, stai committando a un fight melee senza il burst per chiudere. Resta Cannon finché il chip damage non raggiunge la soglia, poi swap e all-in.
- **Dimenticare lo shred R-Cannon sul primo attacco.** Quando swap a Cannon (R), la prima AA riduce Armor e Magic Resist. Bruciarla su un minion butta danno gratis; salvala sempre per un campione.
- **Splitpushare senza R disponibile.** La R ha cooldown 6 secondi ma è il tuo unico tool di escape — il Move Speed sul swap. Splitpushare in un gank 4v1 con la R giù significa morire. Tratta la R come un dash con cooldown lungo quando valuti il rischio.
- **Ignorare i mana cost in trade lunghi.** La Hammer W ha una passiva che restituisce mana sulle auto; se resti Cannon in un trade lungo, il pool si svuota. Swap a Hammer per 2-3 auto a metà trade per recuperare, poi swap di nuovo per chiudere in Cannon.

## Suggerimento avanzato

Padroneggia il **R-cancel** alla fine di Hyper Charge (Cannon W). Quando premi Cannon W ottieni Attack Speed massima per 3 attacchi — ma se swappi a Hammer (R) subito dopo che la terza auto è andata a segno, salti l'animazione di recupero e parti con il salto Hammer Q un quarto di secondo prima. È la differenza tra catturare un bersaglio in Flash e vederlo scappare con 5 HP. Allenalo nel Practice Tool su un target dummy finché il timing diventa muscle memory, prima di portarlo in ranked.
