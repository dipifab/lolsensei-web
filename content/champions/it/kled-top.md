---
title: "Kled Top Build & Guida — Patch 16.9"
slug: "kled-top"
language: "it"
patch: "16.9"
champion: "kled"
role: "top"
last_updated: "2026-05-04"
description: "Guida Kled top lane per League of Legends Patch 16.9: rune Conqueror, build path Trinity Force, matchup chiave, power spike ed errori comuni per lo skirmisher Yordle."
quick_learn:
  champion_dd_id: "Kled"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Skaarl, the Cowardly Lizard"
      description: "Kled cavalca Skaarl, che assorbe il danno per lui. Quando Skaarl finisce gli HP, Kled smonta in una forma squishy ranged. Combatti per riempire la Courage bar e rimontare con HP."
      dd_spell_id: "Kled_Passive"
    - key: "Q"
      name: "Bear Trap on a Rope"
      description: "Aggancia il primo nemico colpito a 800 di range. Se Kled resta vicino ~1.75s, la trappola lo strappa indietro per danno fisico bonus e slow. Smontato: Pocket Pistol, colpo ranged che spinge Kled all'indietro."
      dd_spell_id: "KledQ"
    - key: "W"
      name: "Violent Tendencies"
      description: "Steroide attivo: enorme attack speed sui prossimi 4 auto. Il quarto hit infligge danno base + % HP max fisico. Usalo per fare burst sui tank e far ripartire la Skaarl recharge."
      dd_spell_id: "KledW"
    - key: "E"
      name: "Jousting"
      description: "Dash che danneggia e tira a sé i minion. Se colpisce un champion o un large monster, rilancia entro 4s per ridashare attraverso lo stesso target con lo stesso danno."
      dd_spell_id: "KledE"
    - key: "R"
      name: "Chaaaaaaaarge!!!"
      description: "Engage globale: Kled carica verso un'area, lascia una scia di MS (movement speed) per gli alleati e ottiene uno scudo. Skaarl carica il primo champion incontrato per danno magico in % HP max e knock-back."
      dd_spell_id: "KledR"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
  situational_items:
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro frontline pesanti di armatura (2+ tank tipo Sion + Maokai); riduce armor stack e aggiunge scaling in % HP max"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Vladimir, Mordekaiser top, comp doppio AP); lo scudo magico parte mid-dive e ti salva la kill"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "assicurazione late game per i flank: la revive ti permette di committare la R senza throware il fight"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps se la squadra avversaria ha 2+ minacce CC o AP (stun, root, knock)"
  base_combo: ["Q", "E", "W", "AA", "AA", "AA"]
  win_condition: "Bullya il diretto avversario nelle skirmish early (livelli 2-6), poi usa R per flankare da una side lane e creare pressione globale con engage sulla back line nemica durante i fight per gli obiettivi."
  weakness: "Squishy e poco mobile da smontato. Champion con CC point-and-click (istantaneo, senza skillshot da schivare) o poke ranged costante spengono il remount e forzano il recall prima dei power spike."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health"
    primary_rationale: "Conqueror si carica nei trade lunghi di Kled (4-attack window della W + yank della Q), dando AD a stack e cura a stack pieni. Triumph restituisce HP/oro su takedown per resettare Skaarl, Legend: Alacrity accelera la finestra auto della W, Last Stand alza il danno sotto il 60% HP."
    secondary_rationale: "Bone Plating riduce 3 colpi consecutivi nei trade in lane (enorme contro poke ranged e top da short-trade come Renekton e Darius). Unflinching dà tenacity (recovery rapido da CC) sotto il 50% HP e durante il CC, per sopravvivere alla catena di CC dopo la R."
    secondary_alternative: "Contro più minacce AP con CC point-and-click (Galio, Sylas, Vladimir top), swap Resolve verso Domination con Sudden Impact (penetrazione magica extra dopo l'E dash) e Treasure Hunter (oro bonus sul primo takedown) per amplificare i flank assassin-style sui carry nemici."
matchup_draft:
  pick_into:
    - examples: ["nasus", "kayle", "veigar"]
      archetype: "Late-game scaler immobili"
      reason: "Kled punisce la loro early debole con all-in (scambi totali fino alla kill) ai livelli 2-6. Il bear trap aggancia un Nasus fuori dalle stack di Q prima che raggiunga uno spike, e nessuno dei tre ha dash per scappare dalla pull."
    - examples: ["darius", "garen", "sett"]
      archetype: "Lane bully melee senza dash"
      reason: "La Q ha 800 di range, fuori dal pull di Darius e dalla W di Sett. La 4-attack window della W più il recast di E permettono a Kled di vincere la rissa e uscirne prima che le loro abilità tornino."
    - examples: ["akali", "gangplank"]
      archetype: "Lane squishy in early game"
      reason: "Kled li bullya fuori dai CS già a livello 2 con E + auto. Perdono tempo sul primo item e non recuperano se Kled snowballa (trasforma il vantaggio early in un vantaggio crescente) la fase di lane in roam."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top ranged ad auto-attack"
      reason: "Kitano Kled (si muovono indietro mentre attaccano) fuori dagli 800 della Q. Non riesce a procare la W su un target in movimento, e gli HP di Skaarl si squagliano dal poke prima che lui arrivi a livello 6."
    - examples: ["fiora", "tryndamere"]
      archetype: "Duelist auto-peel anti-burst"
      reason: "La W di Fiora parry il yank della Q o il knock del recast E. La R di Tryndamere sopravvive al burst di Kled — Skaarl cade, Kled smonta, Tryndamere vince l'1v1 da smontato senza che Kled abbia escape."
    - examples: ["dr-mundo", "volibear"]
      archetype: "Top sustain heal-stacking"
      reason: "Outsustainano il cooldown della W di Kled e recallano dopo. Una volta che hanno un item HP, il danno scaling % HP max della W e della R non li minaccia più nell'1v1."
---

## Panoramica

Kled, *the Cantankerous Cavalier*, è uno skirmisher Yordle melee — cioè un fighter a corto raggio costruito per duelli prolungati invece che per burst (tanto danno in 1-2 secondi) da one-shot — che gioca in due fasi. **Mounted** sul suo lizard-steed **Skaarl** è un fighter robusto da rissa ravvicinata con un uncino a distanza (Q), uno steroide di attack speed (W) — "steroide" nel gergo MOBA è un buff temporaneo a una stat — un dash con recast (E) e una ultimate di engage globale (R), dove "engage" significa aprire il fight saltando addosso al nemico. Quando Skaarl finisce gli HP, Skaarl scappa e Kled **smonta** in una forma squishy (basse difese) ranged con abilità più deboli. Deve poi guadagnare **Courage** combattendo (champion, minion, mostri) finché la barra non si riempie: a quel punto Skaarl torna e Kled recupera una porzione degli HP di Skaarl.

Il piano partita è fare il bully sulla lane (mettere pressione costante con trade aggressivi) con trade continui (scambi brevi di danno con il diretto avversario) dai livelli 2 a 6, poi usare **R** per fare un teleport-charge attraverso la mappa e fare picks (eliminazione di un nemico isolato) sulla back line — i carry, cioè i damage dealer squishy in retroguardia — durante i fight per gli obiettivi (drago, Barone). Trasforma il vantaggio early in snowball (vantaggio crescente che genera più vantaggio) come pressione di roaming mid-game (lasciare la propria lane per impattare le altre) prima che i tank late-game scalino — diventino più forti con item e livelli — oltre Kled.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (poco AD + lifesteal) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Gli HP della mount di Skaarl danno a Kled abbastanza HP effettivi da non aver bisogno di una seconda potion. Contro top ranged che tengono distanza con auto-attack — il movimento all'indietro mentre colpiscono si chiama "kite" — (Vayne, Teemo, Quinn) parti con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (HP + regen contro poke, cioè danno chip a distanza) invece.

**Core items (in ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — i proc (un "proc" è l'attivazione di una passiva) di Sheen — la passiva che aggiunge danno bonus al prossimo auto-attack dopo aver lanciato una skill — si concatenano con la 4-attack window della W. Più attack speed, ability haste (riduzione cooldown delle skill), MS e HP. È il tuo item più importante in assoluto.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + danno auto-attack ricevuto ridotto. Boots di default in qualunque matchup AD (danno fisico) top.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — bonus AD scaling, scudo in % HP max quando vai basso (lifesaver mid-dive — un "dive" è inseguire un nemico sotto la sua torre per ucciderlo subendo i colpi della torre stessa) e immunità a CC breve quando lo scudo si attiva (CC = crowd control: stun, root, knock, silence).
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — converte il danno fisico ricevuto in un sanguinamento lento (danno spalmato nei secondi successivi invece che istantaneo) e cura sui takedown.

**Item situazionali:**

- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro frontline ad armatura pesante (la frontline sono i tank che assorbono danno; prendilo se ci sono 2+ tank tipo Sion + Maokai). Riduce gli stack di armor (uno stack è un accumulo: ogni hit toglie un livello di armor al bersaglio) e aggiunge scaling in % HP max.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (AP = danno magico — Vladimir, Mordekaiser top, comp doppio AP). Lo scudo magico si attiva mid-dive e salva la kill.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — assicurazione late game per i flank (entrare nel fight da un fianco non coperto): la revive ti permette di fare commit (impegnarti al 100%) sulla R senza fare un throw (perdere un fight che stavi vincendo).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist + tenacity (recovery rapido da CC). Cambia dai **Plated Steelcaps** se la squadra avversaria ha 2+ minacce CC o AP.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è il default. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro comp con CC o AP pesanti.

**Skill order:** Massimizza **Q** per prima (cooldown più basso e yank più forte — è il tuo poke principale, cioè danno chip a distanza, e il setup del gap-closer, l'abilità che chiude distanza in fretta). **E** per seconda (più danno sul dash e cooldown ridotto). **W** per ultima (lo scaling in % HP max sul quarto hit migliora, ma la W la usi già come steroide al rank 1). Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaria **Resolve** con **Bone Plating** e **Unflinching**, oppure **Domination** con **Sudden Impact** e **Treasure Hunter** se la squadra avversaria ha più minacce AP e vuoi amplificare i flank assassin-style.

## Matchup chiave

- **Darius:** Lane pari o leggermente favorevole. Tieniti a 800 di range della Q — fuori dal pull della E di Darius (~545; questi numeri sono unità di gioco, 800 corrisponde a circa il doppio della reach di un auto-attack melee). Quando lui usa E, fai un dash dentro con **E**, aggancia con **Q** e lascia caricare la W prima che la sua bleed passive (passiva di sanguinamento) possa raggiungere stack letali. Compra subito ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
- **Fiora:** Hard counter. La sua **W** fa parry (blocca e neutralizza l'abilità in arrivo) sul yank della Q o sul knock del recast E. Fai trade solo quando la sua **W** è in cooldown (~22-24 secondi al rank 1). Se ti cammina addosso con **W** disponibile, indietreggia: non regalarle un proc di Vital — Fiora marchia un lato del tuo champion e prende danno bonus se ti colpisce con auto-attack su quel lato.
- **Vayne / Teemo:** Hard counter. Top ranged che fanno kite — tengono la distanza muovendosi indietro mentre attaccano, fuori dagli 800 della Q. Parti con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, abbraccia la torre, e gioca per i flank della **R** a livello 6 su bot o mid lane per recuperare oro (ottenendo kill o assist nei fight di quelle side lane).
- **Renekton:** Matchup mirror tra due bully melee a corto raggio. Vince chi piazza la prima **Q** nel trade di livello 2. Provoca il suo stun con un finto passo in avanti che lo invita ad attaccare, poi fai engage quando la sua **W** è in cooldown (~13s al rank 1).
- **Camille:** Skill matchup (matchup deciso più dalla bravura del singolo che da hard counter rules). La sua **E** è un hookshot dash a corto raggio; muoviti di lato nel momento in cui si attacca al muro (l'animazione visibile in cui aggancia la parete) per schivare lo stun. Quando lei sbaglia la **E**, non ha escape — combo completa **Q-W-E** addosso.

## Power spike & condizioni di vittoria

- **Livello 2:** Con ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + Q + W, Kled ha una delle finestre di livello 2 più forti del gioco. Aggancia con la Q, fai dash con la E, all-in (scambio totale fino alla kill, senza tirarti indietro).
- **Livello 6:** La prima **R** sblocca la pressione globale. Carica attraverso la mappa su una skirmish (piccolo fight mid-game) bot lane o un dragon fight per fare flank sulla back line nemica.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completata (~ minuto 11-13):** I proc di Sheen rendono ogni combo Q→AA (auto-attack), E→AA circa il doppio più forte. Le skirmish (piccoli fight in top o bot lane, lontano dal mid) in side lane si ribaltano a tuo favore. Punta alle plate gold di prima torre — le piastre che proteggono le torri esterne nei primi 14 minuti danno oro bonus a chi le rompe.
- **Spike a 3 item (~ minuto 22-25):** Con ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** completato (online, costruito), puoi fare flank sulla back line nemica durante un fight per obiettivo, mangiare il burst, far partire lo scudo Sterak e uscirne ancora vivo.

## Errori comuni

- **Fare recall con HP di Skaarl bassi e Courage bar vuota.** Il recall è il channel di 8 secondi che ti riporta a base. Da smontato, Kled non ha mobilità. Anche il boost di velocità homeguard (la passiva degli stivali che alza brevemente la velocità di ritorno a base dopo un recall riuscito) è rischioso se un jungler appare in minimap. Farma minion per riempire la Courage bar e rimontare prima di fare recall, oppure aspetta vision (visione, le ward alleate) prima di camminare verso base.
- **Lanciare R senza follow-up alleato.** R è un fight-starter — un'abilità che inizia un teamfight — che butta Kled in mezzo alla squadra avversaria. Se la tua bot lane sta facendo recall e il jungler è dall'altra parte della mappa, un engage con R è un 1v3 in cui Skaarl evapora prima che arrivino gli aiuti.
- **Provare a 1v1 un top ranged con W attiva.** W è uno steroide a 4 auto, ma quei 4 auto devi davvero piazzarli. Vayne, Teemo e Quinn fanno kite più veloce del tuo auto-attack range. Non rincorrere — aspetta un gank (un'imboscata a sorpresa del tuo jungler dalla foresta) o un flank con R da un'altra lane.
- **Dimenticarsi della HP bar di Skaarl.** Skaarl ha una HP pool separata sopra quella di Kled. Molti giocatori nuovi guardano solo la barra di Kled (è "la sua"). Tieni d'occhio la barra di Skaarl — quando arriva al ~20%, fai disengage con il recast di **E** (la seconda E, usata come escape) o smonti in mezzo al fight.

## Suggerimento avanzato

Il **recast di E** è insieme uno strumento offensivo e difensivo, ma il recast lo ottieni solo se la prima **E** colpisce un champion o un large jungle monster. Quindi nella rissa: se puoi chiudere la kill al primo dash, perdi il disengage di **E2**. Se non puoi, trattieni il danno sul primo dash, rilancia **E** per fare un secondo dash attraverso lo stesso target (stesso danno) e riposizionati. Questo trade-off — uccidere ora o uscire pulito — è la decisione più skill-dipendente del kit.
