---
title: "Akali Mid Build & Guide — Patch 16.9"
slug: "akali-mid"
language: "it"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Akali mid lane per League of Legends Patch 16.9: build da assassino AP, matchup chiave, power spike al livello 6, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Colpire un campione con un'abilità lo marca. Uscire dal cerchio potenzia il prossimo basic attack con range e danno extra."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Cono di kunai che danneggia e rallenta. Tool principale di poke e trade. Costa energia, cooldown corto: usala on-cooldown nei trade."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Zona di fumo che rende Akali invisibile al targeting e aumenta la max energia fino a +80 mentre attiva. Agire dentro la rivela. Droppala in mezzo alla combo, non solo per scappare: il bonus energia regala una Q extra nella rotation."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Salto indietro + shuriken che marca il primo nemico colpito. Re-cast per dashare sul bersaglio marcato. Marca solo campioni."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Ulti in due parti. R1 salta e fa danno; R2 dasha e giustizia i nemici sotto soglia HP. Scala con HP mancanti del bersaglio."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro burst alto su singolo bersaglio (Zed R, Veigar combo, LeBlanc): la stasi ti fa sopravvivere prima di chiudere con R2."
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena un bersaglio prioritario compra un item di Magic Resist — mantiene il danno delle abilità contro nemici più resistenti"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico singolo che ti spegne l'engage (Ahri charm, Lissandra R, Twisted Fate stun) — lo spell shield mangia il primo colpo"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "in fight più lunghi e contro composizioni con tanti bruiser dove serve cura e durabilità invece che solo burst"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Aggancia bersagli squishy isolati con E1+E2 dash, poi concatena Q + auto-attack potenziato + combo R per l'execute. Roamma sulle side lane ogni volta che hai R pronta."
  weakness: "Waveclear debole e range corto pre-6: vulnerabile a poke a distanza e gank della jungle. Niente CC duro e nessuna fuga se W è in cooldown — possono lockarti e bruciarti prima che la combo parta."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Panoramica

Akali è un'assassina AP da burst: una campionessa costruita per fare tantissimo danno in 1-2 secondi (il "burst", danno alto concentrato in pochissimo tempo) su un singolo bersaglio. Il suo kit è una catena di dash — **Shuriken Flip (E)**, **Perfect Execution (R)** — costruita attorno alla finestra di invisibilità di **Twilight Shroud (W)**. Non ha mana, usa energia: i cooldown corti contano più del budget di risorse. La mid lane le si addice perché il river offre percorsi brevi per roamare (lasciare la propria lane per giocare in un'altra lane) le side lane, e la **R** al livello 6 trasforma qualsiasi fight senza vision ward nemiche (oggetti piazzati che rivelano un'area) in un pickoff (eliminare un nemico isolato dalla sua squadra).

Il piano partita è sopravvivere a una fase di lane debole (waveclear scarsa — cioè le abilità sono lente a pulire l'onda di minion, e nessuna kill threat early) fino al livello 6, poi convertire qualsiasi piccolo lead (vantaggio) in roam e dive sotto torre. Il segreto del campione sta nel piazzamento della **E**: la E parte come shuriken; solo il primo campione nemico colpito diventa il bersaglio del dash. Marchia un minion per sbaglio e perdi il dash per tutta la rotation di abilità (il ciclo Q + W + E + R lanciate una volta ciascuna).

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Il Doran's Ring dà AP e mana regen che ad Akali non servono, ma il bonus damage ai minion sistema la sua waveclear early debole. Salta ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** a meno che la lane non sia un matchup di harass pesante con auto-attack.

**Core items (in ordine):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (un attivo che ti scaglia in dash verso il nemico) più burst damage; si combina con **E** e **R** per engagiare (aprire il fight) da fuori range.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration piatta (il danno delle abilità ignora una fetta della Magic Resist nemica). Upgrade diretto del danno per finire bersagli squishy (campioni ad alto danno e poche difese, tipo gli ADC).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con bonus damage quando il nemico è sotto ~40% HP, perfettamente in linea con l'execute della **R2**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game su tutto il tuo AP. Il tuo slot con più potenza magica.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro Zed, Veigar, LeBlanc o qualunque avversario il cui burst arriva nella stessa finestra del tuo. L'attivo di stasi ti rende invulnerabile e immobile per ~2.5 secondi: aspetti che esauriscano il danno e chiudi con **R2**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap appena un bersaglio prioritario compra un item di Magic Resist; tiene il danno scalato.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico singolo (Ahri charm, Lissandra R, Twisted Fate stun); lo spell shield mangia il loro setup.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primo item alternativo nei fight più lunghi contro composizioni piene di bruiser; baratta burst per danno sostenuto e healing.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sono il default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sono accettabili contro CC pesante (Lissandra, Ahri, Galio).

**Skill order:** Maxa **Q** per prima (danno principale e refund di energia, cioè recupero di energia dopo l'uso), **E** per seconda (cooldown più basso sul dash), **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Le rune sono bonus passivi che scegli prima della partita: un albero primario (5 rune) e uno secondario (2 rune). Primaria **Domination** con **Electrocute** (burst extra quando colpisci con tre abilità in fila), **Sudden Impact** (più magic penetration dopo un dash), **Sixth Sense** per pressione di vision, e **Ultimate Hunter** (cooldown più basso sulla **R**). Secondaria **Sorcery** con **Transcendence** (ability haste — abilità che tornano disponibili più in fretta) e **Gathering Storm** (scaling AP late-game). Akali usa energia, non mana: niente **Manaflow Band**.

## Matchup chiave

- **Galio:** Counter duro pre-6. La sua passive aumenta gli auto-attack e la sua **W** ti taunta durante l'all-in (uno scambio totale fino alla kill, senza spazio per disimpegnarsi). Farma in sicurezza fino al livello 6, pinga la jungle e committa solo quando la sua **W** è in cooldown.
- **Yasuo:** La sua **Wind Wall** blocca **Q** e lo shuriken di **E**. Apri con il dash di ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** o con la **E**, tieni la **Q** finché la Wind Wall non è giù.
- **Lux:** La superi nel duello 1v1. Schiva la sua **Q** (skillshot lineare lungo e lento — un'abilità a bersaglio non automatico, va schivata muovendoti di lato) con **E**, poi tuffati su di lei al livello 6. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** se finisce il suo ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** prima del tuo.
- **Twisted Fate:** Gara di roam. Lui ha lo strumento di roam migliore (la sua **R** lo teletrasporta in mappa), quindi devi pushare la tua wave (spingere la linea di minion verso la torre nemica) più velocemente di quanto lui può lasciare lane. Tracciagli la **R** con vision ward (oggetti piazzati che danno vision in un'area) su river e tri-bush (il punto a tre cespugli vicino alla mid lane).
- **Zed:** Matchup pari. Lui vince i trade corti prima del 6; dopo il 6 la tua **R** lo finisce sotto soglia HP. Non andare all-in se non ha bruciato le **W** ombra; altrimenti scappa dalla tua **R2**.

## Power spike & condizioni di vittoria

- **Livello 3:** Kit base completo (Q + W + E). Hai finalmente la combo dash + invisibilità per tradare (uno scambio breve di abilità in lane, non un tentativo di kill) o disengagiare (uscire da un fight che si sta mettendo male). Cerca un trade corto per prendere prio (priority, vantaggio in lane che ti permette di lasciare la lane senza perdere risorse) prima del primo gank della jungle (un attacco a sorpresa del jungler avversario che entra in lane).
- **Livello 6:** La prima **R** è il singolo spike più grande della partita. Sblocchi una kill threshold contro qualunque bersaglio squishy. Se il river non è wardato (coperto da vision ward nemiche), i fight a metà river sono kill gratis.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completo (~ minuto 12-14):** Il danno full all-in adesso one-shotta i bersagli squishy attraverso l'execute della R2 (la R2 li giustizia quando l'HP scende sotto la soglia). Roamma sulle side lane appena la tua wave è spinta sotto la torre nemica.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Il burst scala in modo enorme. Forza i fight sugli obiettivi (Drago, Baron, torri) e cerca pick sulla back line (la linea posteriore: i carry che fanno danno da dietro) usando **W** per fiancheggiare — entrare nel fight da un fianco non sorvegliato, di solito attraverso fog of war non wardata (le zone della mappa senza vision).

## Errori comuni

- **All-in prima del livello 6 senza setup della jungle.** Il danno di trade pre-6 di Akali è mediocre — Q + auto-attack da soli non killano un avversario attento. Farma in sicurezza, pinga la jungle, committa al 6.
- **Sprecare E1 su un minion.** Il primo colpo dello Shuriken Flip marchia qualunque cosa tocchi, minion incluso. Se la shuriken atterra su un creep, perdi il dash sul campione dietro. Angola sempre la **E** in modo che il campione sia il primo bersaglio toccato dalla shuriken.
- **Auto-attaccare dentro la W.** Agire (qualunque spell o auto-attack) ti rivela per ~0.5s. Stare dentro **Twilight Shroud** e pokare da lì non ti tiene invisibile — usa **W** per dodgiare un singolo skillshot o per rompere la vision prima di riposizionarti.
- **Bruciare R1 senza un piano per R2.** R1 da sola ti pianta in mezzo alla squadra avversaria. Avere sempre un bersaglio per la R2: come kill finale o come dash di fuga.
- **Buildare item da bruiser contro una squadra squishy.** Item come ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** scambiano burst per sustain (capacità di curarsi durante il fight). Contro una squadra di carry fragili vuoi burst puro (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**), non durabilità.

## Suggerimento avanzato

Lascia cadere **Twilight Shroud (W)** nell'istante esatto in cui atterra **R1**. Lo shroud si apre ai tuoi piedi proprio mentre arrivi in mezzo alla squadra avversaria, spezzando il loro target lock (forza i nemici a riselezionarti, perché per un istante diventi non bersagliabile) per la mezza finestra di tempo prima che riescano a riselezionarti. Usata bene, questa giocata ti permette di riposizionarti per la **R2** execute o anche di annullare l'all-in se il trade sembra perso — e l'abilità di peel (il proteggere un alleato dall'attacco nemico) del support avversario spesso atterra a vuoto perché sei diventata non bersagliabile a metà ingaggio.
