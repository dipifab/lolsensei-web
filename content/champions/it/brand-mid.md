---
title: "Brand Mid Build & Guida — Patch 16.9"
slug: "brand-mid"
language: "it"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Guida Brand mid lane per League of Legends Patch 16.9: starter kit, build burn-mage, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Le spell di Brand danno fuoco al bersaglio (danno nel tempo per 4s, fino a 3 stack). A 3 stack su un campione il blaze diventa instabile e detona come una piccola esplosione AOE che riapplica gli effetti delle spell."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineare con danno magico. Se il bersaglio è già ablaze, lo stunna invece — è il principale strumento di setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Area AOE ritardata dopo un breve tell. I bersagli ablaze subiscono +25% danno. Spell con il danno singolo più alto del kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Esplosione targettata che rimbalza sui nemici vicini. Se il primo bersaglio è ablaze, il raggio di propagazione raddoppia — il modo più semplice di applicare blaze su una wave."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Palla di fuoco a lunga gittata che rimbalza fino a 5 volte tra campioni e minion, dando priorità ai bersagli ablaze e rallentandoli a ogni colpo. Danno enorme nei teamfight quando i nemici sono raggruppati."
      dd_spell_id: "BrandR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Akali, Diana, Fizz) — la stasi copre il tuo tallone d'Achille (zero dash) durante il loro gap-close"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario compra il primo item di Resistenza Magica"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Colpisci fight raggruppati con stack di blaze già attivi su più target così R rimbalza tra campioni invece che tra minion. Resta dietro alla front line e spara dalla massima gittata di W."
  weakness: "Zero dash, nessuna escape. Se un diver supera la tua front line hai solo Flash più Zhonya's tra te e un one-shot — ed è per questo che gli item difensivi situazionali non sono opzionali."
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
    primary_rationale: "Sorcery primaria: Arcane Comet si auto-procca su ogni hit di W o E, aggiungendo burst gratis a ogni scambio. Manaflow Band sostiene il mana per spammare W, Transcendence porta l'ability haste oltre il 40%, Scorch si somma ai tick di blaze sotto soglia HP."
    secondary_rationale: "Inspiration secondaria: Biscuit Delivery risolve il problema mana di Brand nei primi 6 livelli e Cosmic Insight dà più uptime di Flash — Flash è l'unico modo che hai per schivare un dash, perché il kit non ha alcun dash."
    secondary_alternative: "Se la squadra avversaria ha 2+ squishy a basse resistenze (es. Caitlyn + Senna + Ezreal), swap Inspiration verso Resolve con Second Wind (sustain attraverso il poke) e Revitalize (potenzia il poco lifesteal-via-blaze del kit), tenendoti vivo abbastanza a lungo per piazzare R."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Mage stazionari senza dash"
      reason: "Il loro pattern di farm li costringe a stare fermi per castare o stackare: piazza W sulla wave, Q nel frame di recovery per lo stun, e l'intera rotation di blaze atterra prima che possano muoversi."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Tank da group-engage"
      reason: "Quando la loro R prende la tua squadra, la stessa R prende anche la loro squadra accanto alla tua — la R di Brand rimbalza tra ogni campione raggruppato e trasforma il loro engage nella tua condizione di vittoria."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Carry da retroguardia squishy con escape debole"
      reason: "Pyroclasm dà priorità ai bersagli ablaze; una E sulla front line spande blaze, e la R salta tra ogni nemico raggruppato fino a uccidere lo squishy in retroguardia."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "Saltano oltre la tua Q prima che tu riesca a piazzarla per lo stun. Senza stun il kit non ha peel per te stesso, quindi ti cancellano prima che la R completi il primo bounce."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Artillery mage a gittata superiore"
      reason: "La loro soglia di poke è oltre il range della tua Q. Brand non ha mobilità per chiudere la distanza, quindi ogni wave ti tengono basso fino a renderti un bersaglio gratuito per il jungler avversario."
    - examples: ["yasuo", "yone"]
      archetype: "Campioni con Wind Wall e mobilità sostenuta"
      reason: "Wind Wall blocca la Q e il proiettile della R; poi dashano oltre la zona della W. Bruciare uno slot per Zhonya's compra solo sopravvivenza, non priorità di lane."
---

## Panoramica

Brand è un **AP burst mage** costruito intorno a una sola meccanica — la passiva **Blaze**. Ogni spell che lancia dà fuoco al bersaglio per quattro secondi, fino a 3 stack. A 3 stack il blaze diventa instabile ed esplode come una piccola detonazione AOE, riapplicando gli effetti delle sue spell a chiunque sia preso nel raggio. Tradotto in gameplay: ogni abilità è un setup per la prossima, e una volta che un nemico è in fiamme la tua **Q (Sear)** smette di essere una spell di danno e diventa uno stun. Il kit pone due domande in continuazione — *il bersaglio è già ablaze?* e *i nemici sono abbastanza raggruppati perché la R rimbalzi?* — e tutto il piano partita parte da quelle due risposte.

Il piano di gioco in mid è lineare: shovi la wave con **W (Pillar of Flame)**, cerchi finestre **W → Q stun** ogni volta che il laner avversario si avvicina a un minion attraverso cui puoi colpirlo, poi rotazioni con prio (la "prio" o "lane priority" è il vantaggio in lane che ti permette di lasciarla senza perdere CS o HP, di solito quando hai pushato la wave per primo) una volta che la wave si schianta sotto la torre nemica. Dal livello 6 in poi, **R (Pyroclasm)** è una delle ultimate dal danno più alto del gioco *se* i nemici sono raggruppati — hai un setup a media gittata per fight, niente dash per riprovare, nessuna escape se sbagli. Il posizionamento dietro la wave è obbligatorio: Brand non ha mobilità innata, niente shield, niente heal, e l'unica opzione difensiva è comprare Zhonya's Hourglass e pre-mirare Flash.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring risolve la fame di mana per spammare W e dà lo scaling AP che a Brand interessa più del danno flat early.

**Item core (nell'ordine):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — l'item identitario di Brand. La passiva applica un burn percentuale degli HP sopra ai suoi stack di blaze, moltiplicando il danno contro tank e squadre con HP impilati. Mana, ability haste e AP combaciano con quello che vuole il kit.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa per cancellare i target squishy con i bounce della R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, più una passiva che ignora ulteriore Resistenza Magica sotto la soglia HP. Si allinea coi bounce della R che cacciano il bersaglio più basso di vita.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling late-game (40% AP bonus). Comprala terza o quarta a seconda che il team avversario abbia già iniziato a impilare Resistenza Magica.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Akali, Diana, Fizz). La stasi è l'unica risposta che Brand ha quando una catena di dash supera la front line (i tank e i bruiser davanti che assorbono i colpi mentre tu spari da dietro).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici telegrafati (Ahri charm, Lissandra R, Twisted Fate gold card). Lo scudo blocca la spell di engage che altrimenti ti chiuderebbe per tutto il fight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). La passiva Grievous Wounds dimezza il loro healing, così il tuo burn si traduce davvero in target morti.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario compra il primo item di Resistenza Magica. Impedisce all'avversario di soft-counterare tutta la tua build con un componente da 800 gold.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sono accettabili se il team chiede più uptime di R sugli obiettivi.

**Skill order:** Massimizza **W** per primo (il danno base più alto e principale waveclear), **Q** per secondo (più danno e cooldown ridotto sullo stun), **E** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**.

## Matchup chiave

- **Yasuo / Yone:** Bloccano il proiettile della **Q** e l'inizio della **R** con Wind Wall. Tieni la **Q** finché non hanno bruciato il muro, conserva **W** per il frame di recovery, e non usare mai **R** come strumento di flank (un "flank" è entrare nel fight da un'angolazione laterale, dietro la backline avversaria) contro di loro — falla partire dopo che un alleato ha già engagiato, così i bounce sono già in movimento oltre il muro.
- **Zed / Akali:** Minacce di dive con multipli gap-closer (un "gap-closer" è qualunque dash, blink o salto che chiude rapidamente la distanza). Compra Zhonya's Hourglass dopo Liandry's; non usare mai **Flash** in modo offensivo in lane contro di loro, e pre-piazza **W** sui tuoi piedi per stunnarli quando ti saltano addosso.
- **Veigar:** Mage stazionario su cui hai pressione pre-6. Pushalo sotto torre con **W**, cerca la rotation **E → Q stun** quando si avvicina per last-hit, e recalla prima che raggiunga il livello 6 (la sua gabbia ribalta la lane).
- **Anivia:** Pari pre-6, scala più di te post-6. Evita di stare appiccicato alla wave — il suo muro ti separa dai minion e ti costringe a un trade lungo da retroguardia. Roama in side lane appena la **R** è disponibile; lei non ha mobilità per seguirti.
- **Twisted Fate:** Gara di rotazione. Se ti tira la carta gialla, **Q**lo prima che chiuda la distanza (stunnare un campione che sta castando interrompe la carta). Altrimenti tracciagli la **R** con ward su river e tri-bush; se ulta in side lane, ping bot/top e shova la wave invece di inseguirlo.

## Power spike & condizioni di vittoria

- **Livello 2 (W + Q):** Primo spike. Con un punto in **W** più la **Q** di partenza hai il combo completo **W → Q stun**. Pillar of Flame applica uno stack di blaze; Q su un bersaglio ablaze stunna. Questa finestra è quando spingi per first blood.
- **Livello 6 (R sbloccata):** Prima **Pyroclasm** disponibile. Cerca un teamfight allo Scuttle (granchio del river) o al primo drake — se due nemici sono nel raggio dei bounce, la tua R fa circa il 50% degli HP di uno squishy per bounce.
- **Liandry's Torment completo (~ minuto 12-14):** Il controllo della wave si ribalta perché il burn percentuale punisce gli ammassi di wave. Da questo punto sei tu quello che pusha e roama, non quello che tiene sotto torre.
- **Rabadon's Deathcap online (~ minuto 24-28):** La sequenza completa di bounce della R one-shotta gli squishy che non hanno comprato Resistenza Magica. Forza i fight obiettivo qui — Baron, Soul Drake, contest late-game.

## Errori comuni

- **Lanciare Q per poke nudo.** **Q** senza ablaze è solo un proiettile lento. Setta sempre prima con **W** sul terreno o **E** su un minion che spanderà sul campione — la differenza è uno stun di 1 secondo invece di un miss triste.
- **Ultare un bersaglio isolato.** **R** rimbalza tra target dando priorità a quelli ablaze. Se un solo nemico è in range, i bounce vanno avanti e indietro sullo stesso target con grande damage falloff per salto. Conserva **R** per fight raggruppati o per giustiziare due nemici ablaze affiancati.
- **Pushare senza vision.** Brand non ha escape (no dash, no blink, no shield). Pushare oltre il river senza una ward nella loro jungla è il modo più rapido di farsi ganckare. Piazza una Stealth Ward o una Control Ward in tri-bush prima di ogni shove.
- **Auto-attaccare per "danno extra" della passiva.** Le tue auto-attack non interagiscono con Blaze. Usa la finestra dell'auto per camminare sul prossimo spot di **W**, non per inseguire un colpo extra su un minion a basso HP.
- **Sbagliare il timing della detonazione instabile.** Quando arrivi a 3 stack di blaze su un campione, hai due secondi prima della detonazione. Stunnarlo con **Q** *prima* della detonazione lo blocca dentro lo splash e riapplica blaze su tutti i nemici vicini. Sbagliare il timing è la differenza tra una kill singola e un wipe AOE.

## Suggerimento avanzato

Allena il **double-blaze AOE wipe**. Quando due nemici stanno fianco a fianco (tipico nei teamfight ammassati o su una wave impilata), fai in ordine: **W** sul terreno tra loro → entrambi prendono blaze stack 1. **E** sul nemico A → blaze stack 2 su A, si propaga a B per stack 2 su B. **Q** su A → blaze stack 3 su A, A è stunnato e la detonazione instabile colpisce anche B portandolo a stack 3. Ora **R** rimbalza tra due bersagli stunnati e a stack massimi e trasforma l'intera rotation in un trade 2-per-0. Questa sequenza è ciò che separa un "Brand decente" da un Brand che porta la partita.
