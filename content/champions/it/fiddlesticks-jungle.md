---
title: "Fiddlesticks Jungle Build & Guida — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "it"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida Fiddlesticks jungle per League of Legends Patch 16.9: build AP, engage con Crowstorm, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Lo slot trinket diventa cariche di effigie. Piazza falsi spaventapasseri di Fiddle per vision; chi li vede prende un breve fear e l'effigie esplode."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Targetta un singolo nemico. Anche danneggiarlo con una spell mentre sei unseen lo Terrifica. Lo fa scappare lontano da te per 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel che droga HP dai nemici vicini (ti cura). A fine canalizzazione infligge danno bonus ad esecuzione. Strumento principale di clear e sustain in jungle."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Falce a boomerang in un cono ampio: rallenta tutti i nemici colpiti e silenza chi è nella linea centrale. Va e torna, colpisce due volte."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel di 1.5s, poi blink al punto target con danno AOE per secondo intorno a Fiddle per 5s. Va lanciato da fog of war o dietro a muri."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target che interrompono il channel di R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ nemici comprano un item di Resistenza Magica (soglia ~200+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Aatrox, Soraka, Vladimir, Dr. Mundo) — applica Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quando ti serve Movement Speed extra per inseguire o entrare nel range di Crowstorm dalla fog"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Lancia Crowstorm dalla fog of war su 2+ nemici raggruppati su un obiettivo. Bountiful Harvest finisce i sopravvissuti mentre il silenzio di Reap blocca il counter-engage."
  weakness: "Il channel di 1.5s di R è interrompibile da CC duro single-target, dash, e Cleanse/QSS. Senza sorpresa dalla fog, l'engage si telegrafa e il team ti kita fuori."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest stacka in fretta nei teamfight raggruppati tramite l'AOE di Crowstorm. Sudden Impact procca sul blink di R per magic penetration extra. Treasure Hunter accelera Liandry's. Ultimate Hunter taglia il cooldown di Crowstorm per concatenare due ult tra obiettivi."
    secondary_rationale: "Sorcery secondaria: Manaflow Band sistema i problemi di mana early game durante lo spam di W; Gathering Storm scala in un power spike late che si sposa con Rabadon's Deathcap."
    secondary_alternative: "Contro engage di CC duro single-target (Lissandra, Malzahar, Veigar) swap Sorcery con Resolve: Bone Plating (riduzione danno per 5s dopo il primo colpo) e Revitalize (+5% all'healing di Bountiful Harvest)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Jungler farmer senza tool di flank"
      reason: "Scalano linearmente con il farm ma non possono punire la tua invade tra livello 1 e 3. A livello 6, il tuo Crowstorm dalla fog batte i loro engage face-tank perché non hanno escape pre-cast."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Squadre artillery immobili che si raggruppano"
      reason: "I mage di retroguardia senza escape vengono one-shottati da un Crowstorm di flank perché non possono dashare fuori dall'AOE prima che il channel ticki."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Control mage senza dash"
      reason: "La R blinka oltre il loro zone control prima che possano piazzare il setup CC. Se appari dalla fog, non hanno tool per uscire."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Invader early-game con pressione di tracking"
      reason: "Minacciano la tua jungle a livello 2-3 e ti costringono a giocare difensivo. Fiddle non ha escape pre-6: se invaso non può scappare, e il clear è lento senza setup di vision via effigie."
    - examples: ["yasuo", "samira"]
      archetype: "Carry con Wind Wall / blocco di proiettili"
      reason: "Wind Wall blocca la Q (singolo proiettile) e gran parte di Reap. Annullano il cast di engage nel momento peggiore, lasciandoti a canalizzare Crowstorm senza follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Mage con CC duro point-and-click"
      reason: "Interrompono il channel di 1.5s di Crowstorm senza skill — Lissandra R, Malzahar R, Veigar E trasformano il tuo engage in ult sprecato e morte istantanea."
---

## Panoramica

Fiddlesticks è un jungler da imboscata il cui kit è costruito attorno a una sola mossa: blinkare in un fight dalla fog of war con **Crowstorm (R)** e bruciare in AOE la squadra avversaria mentre è ancora raggruppata. Fuori da quella finestra è un mago lento e immobile, con duello debole e ulti a channel lungo, quindi la differenza tra una partita vinta e una persa sta quasi tutta nel *setup di vision* e nel *timing dell'engage* (quando e dove premi R).

Il piano di gioco: pulisci la jungle in fretta con **Bountiful Harvest (W)**, piazza effigie su river e attorno alla jungle nemica per avere vision (e brevi fear su chi le vede), poi cerca una posizione di flank nascosta vicino al prossimo obiettivo (Drake o Baron). Quando 2+ nemici sono ammassati sull'obiettivo, blinka con **R**, droppa **E** per slow + silence, poi **W** e **Q** per finire chi scappa. Senza il fattore sorpresa il kit rende poco — Fiddle è binario: ace di setup o ult sprecato.

## Build Consigliata

**Item iniziali:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (lo starter da melee jungler che dà uno scatto di danno a Smite sui mostri e avvia la quest del pet) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Item core (nell'ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Emberknife (auto-evolve attorno al minuto 3-4 una volta accumulata abbastanza XP dai camp di jungle). Companion per AP (Ability Power, la stat che scala il danno magico) burst: aggiunge un effetto di danno magico che si attiva (un "proc") sull'auto-attack subito dopo una spell, in linea con il burn di Liandry's.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. Il burn percentuale sugli HP nemici (danno proporzionale all'HP massimo del bersaglio) si stacca con ogni tick di Crowstorm AOE sui tank, trasformando l'ult in uno strumento da teamwipe.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa. Economici, immediati, default per qualsiasi AP prima del mid-game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entra in stasi appena finiscono i tick di AOE di Crowstorm, ti salva dal focus che mangi subito dopo l'engage. Mandatorio se hanno un diver o un assassino.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game (+35% AP bonus). Lo slot AP più alto, fa one-shottare gli squishy a Crowstorm.

**Item situazionali:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target che interrompono il channel di R (Lissandra R, Veigar E, Twisted Fate stun). Lo scudo blocca un'abilità prima che possano fermare l'ult.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando 2+ nemici comprano un item di Resistenza Magica.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Aatrox, Soraka, Vladimir, Dr. Mundo). Applica Grievous Wounds (taglia il 40% delle cure).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quando ti serve Movement Speed extra per chase o per entrare nel range di R dalla fog.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se 2+ nemici hanno CC duro e Banshee's da sola non basta.

**Skill order:** Massimizza **W** per primo (clear e sustain in jungle), **E** per secondo (slow + silence in fight), **Q** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Domination** con **Dark Harvest**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Gathering Storm**. Contro engage CC duro single-target (Lissandra, Malzahar, Veigar) swap Sorcery con **Resolve**: **Bone Plating** e **Revitalize**.

## Matchup chiave

- **Lee Sin / Elise:** Jungler da invade early. Non contestare il tuo buff side a livello 1; vai cross-map e starta dal buff opposto con leash (i tuoi laner aiutano a iniziare il camp colpendolo per qualche secondo, così prendi meno danno), poi rota sulla Scuttle Crab di river. Droppa un'effigie su river per spottare il gank, e warda gli ingressi della tua jungle entro il minuto 3.
- **Karthus:** Gara di scaling vs scaling. Lui ti supera in clear e in late. Devi forzare un gank a livello 6 o invadere la sua jungle con vision; se gli lasci toccare l'11, la sua R globale supera i tuoi single-objective.
- **Yasuo bot o mid:** Wind Wall blocca il proiettile della **Q** e la linea centrale di silenzio della **E**. Lancia Crowstorm da un angolo laterale così non può coprire il team con il muro; flanka da una brush di lane non ovvia.
- **Zac:** Tank engage speculare con E gap-close. Il silenzio della tua **E** spegne il timing di detonazione della sua W se la centri durante il channel; in un teamfight a coin-flip, vince chi piazza prima la **R** + silence.
- **Master Yi:** È CC-immune attraverso il silenzio della **E** con la **Q** dash e la R Highlander. Tieni la **Q** per fearlo fuori dalla finestra di Highlander; senza il fear, il suo cleanup late game ti trasforma l'engage in un 1-per-3.

## Power spike & condizioni di vittoria

- **Livello 6 (prima Crowstorm):** Prima finestra di gank. Imposta vision nella fog di river 30s prima, poi entra. Un R + E pulito su 2 nemici sotto torre è una doppia kill garantita.
- **Livello 9 (W maxata):** Il clear di jungle tocca la velocità massima e il sustain in fight schizza. Forza un Drake fight qui.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** L'AOE di Crowstorm taglia attraverso i tank. Forza fight su Baron/Drake e cerca flank cross-map.
- **Livello 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28):** Crowstorm one-shotta qualunque squishy che non abbia comprato un item di Resistenza Magica. Raggruppati con il team e forza il prossimo obiettivo grosso.

## Errori comuni

- **Usare R senza setup di fog of war.** Un Fiddle visibile con la barra del channel attiva è un dodge gratis per la squadra avversaria. Lancia sempre da brush, dietro un muro, o da dentro un camp di jungle non wardato. Se vedono la barra, camminano via per 1.5s e tu spendi 80 mana e il tuo unico tool di engage.
- **Engage in solitaria con il team lontano.** Crowstorm è un tool di engage di squadra, non un pick da assassino. Se il team è a 2+ schermate, l'ult tocca 1 nemico e tu muori nel follow-up. Controlla la posizione dei compagni prima di premere R.
- **Ignorare il piazzamento delle effigie.** Le effigie danno vision e brevi fear. Cariche di trinket non usate sono vision gratis che il nemico *non* sta pagando per spegnere. Droppane una su river prima di ogni obiettivo.
- **Usare Q per last-hittare i camp di jungle.** La Q è il tuo unico setup single-target per i fear in fight. Tienila per i fight — W ed E puliscono i camp benissimo.

## Suggerimento avanzato

Il channel di 1.5s di **Crowstorm** è interrompibile da qualunque cosa ti sposti o ti stunni, ma se premi **R** nello stesso istante in cui un nemico entra in una brush dove sei piazzato, la breve interruzione di vision non gli dà tempo di reagire prima che il blink atterri. Allena il timing in custom: nasconditi nella brush, aspetta che un nemico cammini adiacente, premi R da dentro il suo personal space. Il blink ti tiene incollato a lui per tutta la durata dell'AOE, e il panico per un Fiddle face-of-fog gli costa più Flash di qualsiasi altro engage del gioco.
