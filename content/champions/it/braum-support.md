---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "it"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Guida Braum support per League of Legends Patch 16.9: starter, build path tank-peel, matchup di lane, power spike, errori comuni e una tecnica avanzata di chiusura."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Le auto-attack di Braum applicano uno stack di Concussive Blows. Dopo il primo stack, anche le auto degli alleati ne aggiungono. A 4 stack il bersaglio viene stordito e subisce danno magico. La Q applica uno stack a distanza."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Skillshot lineare a lungo raggio che rallenta e fa danno magico. Applica uno stack di Concussive Blows a distanza: e' lo strumento di setup che ti permette di iniziare la catena dello stun senza entrare in range di auto-attack."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum salta su un alleato (champion o minion). All'arrivo, sia Braum che l'alleato guadagnano armor e magic resist per qualche secondo. E' il peel signature: salti davanti al tuo ADC per body-blockare i danni in arrivo."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum alza lo scudo nella direzione scelta per qualche secondo: intercetta tutti i projectile che arrivano da quel lato, annulla completamente il primo basic attack e riduce il danno di tutti quelli successivi dalla stessa direzione."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum colpisce il terreno: knock-up dei nemici accanto a lui e in linea davanti a lui. Lungo la linea resta una fessura ghiacciata che rallenta chi la attraversa. Cooldown lungo: il bottone principale di engage o peel del team."
      dd_spell_id: "BraumRWrapper"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dai Mercury's vs bot lane auto-attack heavy (Caitlyn, Draven, Tristana) quando l'harass early ti pesa piu' del CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comp dove l'ADC e' la carry principale e ti sta vicino (Aphelios, Jinx) — il proc di R triggera accanto al bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs comp AP burst (doppio mage tipo Syndra mid + Brand support): la passiva scudo magico tiene un'ulti e ti lascia peelare"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Landa Q su una carry prioritaria, walk-up per l'auto-attack che chiude lo stun a 4 stack, poi peel il tuo ADC con W jump e muro E per tutto il fight. R quando il team avversario si raggruppa per la zona di knock-up."
  weakness: "Lento e immobile (no dash, no blink): hard CC a distanza ti taglia fuori dal tuo ADC. La Q e' uno skillshot — se la sbagli non hai pressione, e una R sprecata ti chiude fuori dal teamfight successivo."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADC immobili senza dash"
      reason: "La Q ha 1000 di range e applica uno stack di Concussive Blows a distanza. Contro un ADC senza fuga, una Q + un'auto del tuo ADC + la tua auto chiudono lo stun a 4 stack: non hanno modo di rompere la catena."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanter squishy senza CC duro"
      reason: "Non hanno strumenti per fermare il tuo walk-up. Una volta che la Q tocca, non hanno peel per il loro ADC, e la tua E blocca ogni skillshot di healing-cancel che proverebbero a tirare per salvarli."
    - examples: ["draven", "lucian"]
      archetype: "ADC aggressivi che si fanno avanti per scambiare"
      reason: "Il loro kit li costringe a entrare in range Q per tirare asce o dash-AA. Ogni passo in avanti e' uno stack gratis di Concussive Blows: o si tirano indietro e perdono la lane prio, o mangiano lo stun a 4 stack."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook support con pull o stun point-and-click"
      reason: "Un hook andato a segno tira Braum fuori dal range W del suo ADC. Mentre Braum si fa burstare nel retro, l'ADC avversario cancella il tuo carry rimasto senza protezione."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support a lungo raggio che pokano oltre la Q"
      reason: "Stanno a 1100+ di range e ti rosicchiano l'HP gratis. Braum non ha risposta oltre la sua Q, e la E aiuta solo se sei gia' vicino: vincono la lane per logoramento."
    - examples: ["ashe", "varus"]
      archetype: "ADC con self-peel grazie a slow built-in"
      reason: "Lo slow sulle loro auto-attack tiene Braum a distanza. Non riesce ad arrivare in range W per body-blockare, quindi il suo kit di peel e' dimezzato e la frontline del suo team crolla prima."
---

## Panoramica

Braum e' un **warden support** (un support della classe tank il cui lavoro e' proteggere il proprio ADC, non aprire fight) — costruito per peelare i nemici via dalla sua carry, non per divare quella avversaria. Il kit ruota attorno a una sola minaccia: **Concussive Blows**, la passiva che stordisce un bersaglio colpito da 4 auto-attack di Braum o dei suoi alleati. Il trucco: **Winter's Bite (Q)** applica uno stack a 1000 di range, quindi Braum tira la Q, fa walk-up, e una sua auto + una del suo ADC fanno partire lo stun sulla carry avversaria. **Stand Behind Me (W)** lo fa saltare su un alleato dando a entrambi armor e magic resist all'arrivo: e' lo strumento di **peel** (proteggere il tuo carry da chi lo sta attaccando) che lo rende unico. **Unbreakable (E)** e' uno scudo direzionale che fa **body-block** a tutti i projectile in arrivo dalla direzione scelta (auto-attack ADC, R di Caitlyn, R di Ezreal, R di Ashe). **Glacial Fissure (R)** e' il knock-up AOE in linea: cooldown lungo, usato come engage o come panic peel quando il loro **diver** (un champion che salta nel backline avversario) e' addosso al tuo carry.

Game plan: in lane, **poke** (chip damage da distanza) con la Q ogni volta che l'ADC avversario si fa avanti per last-hittare, poi walk-up per l'auto che chiude lo stun — il tuo ADC scarica nella finestra di 1 secondo. Dopo il livello 6, **roam** (lasciare bot lane per aiutare mid o jungle) con la R per organizzare pick: il tuo **lead** (vantaggio early) viene dal trasformare gli stun-da-Q in obiettivi, non da kill in solitaria. Late-game sta un passo davanti al tuo ADC, salta indietro con W appena viene engageato, e tira E in linea con qualunque **skillshot** (un'abilita' che va mirata) in arrivo — Braum e' l'unico support che puo' cancellare un'ulti di Caitlyn a meta' channel.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato dei support) piu' 2 Health Potion. Non last-hittare i minion in lane: lascia il gold al tuo ADC, World Atlas ti paga separato attraverso il progresso quest.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolve automaticamente man mano che accumuli quest progress passando per ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, terminando nell'upgrade endgame che scegli.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist piu' **tenacity** (una stat che riduce la durata del crowd control su di te). Boot di default per un peel tank: stun piu' corti significa che arrivi in range W del tuo ADC prima che sia gia' morto.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — l'upgrade endgame peel-focused dell'item support. Ogni volta che applichi CC a un campione (slow Q, stun passiva, knock-up R) rallenta ulteriormente i nemici vicini e da' a te e a un alleato vicino un burst di movement speed: esattamente quello che serve per inseguire un target a basso HP o kitare indietro verso il tuo carry.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega al tuo **ADC** (Attack Damage Carry — il compagno di bot lane che fa danno auto-attaccando, il main damage dealer late-game del team): una porzione del danno che subisce viene redirezionata su di te e tu lo curi in cambio. Scegli sempre la carry la cui vita devi proteggere di piu'.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active che scuda tutti gli alleati vicini per qualche secondo. Tiralo nell'istante in cui il team avversario commit l'engage cosi' la tua squadra assorbe il primo **burst** (il danno alto concentrato nei primi 1-2 secondi del fight).

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boot che danno armor e riducono il danno dalle auto-attack. Scambia con i Mercury's quando la bot lane avversaria e' auto-attack heavy (Caitlyn, Draven, Tristana) e il loro **harass** (poke e chip damage per logorarti) ti pesa di piu' del CC late-game.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bondalo al tuo ADC. Quando applichi crowd control a un nemico (slow Q, knock-up R) la prossima auto del bonded ally fa danno magico bonus in area: perfetto quando il tuo carry sta vicino a te (Aphelios, Jinx) e tu Q-i la front line per preparare la sua prima auto.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passiva scudo magico che si rigenera fuori combat. Compralo contro comp AP burst (un setup doppio mage tipo Syndra mid + Brand support): lo scudo regge un'ulti intera e ti lascia continuare a peelare invece di morire per primo.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacity — un root da Morgana di 2 secondi diventa di 1.2 secondi, lasciandoti la finestra per W indietro sul tuo ADC. Switcha a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** prima di finirli solo se la bot lane avversaria e' auto-attack heavy e ti pesa piu' del CC late.

**Skill order:** Maxa **Q** (Winter's Bite) per prima — e' il tuo unico danno a distanza, l'applicatore di stack, e il cooldown scende da 8 a 6 secondi al rank 5 (piu' poke, piu' pressione in lane). Maxa **E** (Unbreakable) per seconda — durata maggiore dello scudo rende il peel teamfight piu' pulito. Maxa **W** per ultima (il cooldown del salto cala ma le resist contano di piu' ai primi rank, e raramente ti mancano target W). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** (albero difensivo — durabilita') con **Aftershock** (armor e MR gratis per qualche secondo quando applichi CC, parte ad ogni stun da passiva e ad ogni R), **Font of Life** (il tuo CC marca il bersaglio; gli alleati che lo attaccano si curano un po'), **Conditioning** vs lane che scalano late o **Bone Plating** vs lane che cercano di burstarti early, e **Unflinching** (extra **tenacity**, la stat che riduce il CC su di te, quando usi una summoner spell). Secondary **Inspiration** (albero utility) con **Hextech Flashtraption** (Flash a corto raggio di backup su cooldown lungo — angoli R a sorpresa) e **Cosmic Insight** (cooldown ridotti su summoner spell e Locket active). **Stat shards** (i tre piccoli boost di stat in fondo alla rune page): Health / Health / Health — Braum scala con HP grezzi, e la durabilita' early ti permette di walk-up per applicare gli stack della Q.

## Matchup chiave

- **Leona:** **Engage** (lei vuole aprire il fight) contro il tuo **peel**. Ha CC a piu' lungo raggio del tuo (Zenith Blade dash-stun, Solar Flare R): non body-blockare early — sta un passo dietro al tuo ADC e W via appena parte il suo Zenith Blade. Quando la sua E e' in cooldown hai 10 secondi per fare walk-up e Q-stackare il suo ADC gratis.
- **Pyke:** Skill matchup — niente edge sulla carta, lo decide chi gioca meglio. Ti poka con la Q e ti out-roama in **stealth** (diventa invisibile passando nei cespugli). Tieni vision profonda nei bush, forza fight in lane dove il reset della sua R non conta, ed E sull'hook della sua R per body-blockare la pull.
- **Lulu:** Hard counter al tuo **all-in** (commit totale alla kill). Il polymorph cancella la tua auto a meta' chain: non chiudi lo stun. Non committare con polymorph su; tracka il cooldown (circa 13 secondi al rank 1) e forza scambi solo quando e' giu'.
- **Soraka:** **Sustain enchanter** pura (un support healing-focused che vince tenendo vivo l'ADC, non aprendo fight) senza engage. La out-tradi: non ferma la tua Q + walk-up, e l'healing e' meta' del tuo danno da stun. Forza scambi corti quando la sua Q e' in cooldown.
- **Senna:** Matchup di **poke** a lungo raggio (chip damage a distanza per logorarti). Ti bullia l'HP sotto torre con Q-attraverso-minion. Sta dietro all'ondata cosi' la sua Q si cura sui tuoi minion ma non ti tocca; tradi quando il tuo jungler e' bot side — Senna senza dash muore a una sola catena Q-stun.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + W):** Primo spike. La catena **Q + walk-up auto + auto del tuo ADC** si sblocca con la W come seconda abilita', che ti permette di riposizionarti fuori dal counter-damage. Un ADC in over-extend (uno che ha pushato oltre la prima **wave** — la fila di minion in arrivo) perde il 30% di HP a una catena di stack.
- **Livello 6 (R sbloccata):** Engage e peel salgono di un livello. **Glacial Fissure** e' un knock-up in linea che il tuo ADC converte in kill; in alternativa e' panic peel quando il loro Zed salta sul tuo carry. Flash-R e' il tool di pick a sorpresa su angoli che non si aspettano.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completion (~ minuto 12-14):** Primo item da teamfight online. Il burst di movement speed sul CC ti lascia inseguire un target a basso HP o kitare indietro su un carry in difficolta'. Raggruppa col team per **Drake** (il drago in bot river — le kill danno buff permanenti) o **Voidgrubs** (mostriciattoli in top river — chi li uccide guadagna danno bonus contro le strutture).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari endgame (~ minuto 22-26):** Con Locket e uptime pieno della E il team sopravvive a un wombo combo (un team-fight engage incatenato). Il tuo lavoro diventa wall-are con la E il cono di danno della carry avversaria mentre il tuo team uccide la loro.

## Errori comuni

- **Tirare la Q senza walk-up.** Una Q-slow da sola non e' una minaccia di kill — il nemico esce dal range e tu hai sprecato 8 secondi di cooldown. La Q e' il **setup** (la mossa che prepara la kill); nell'istante in cui tocca, walk-up per l'auto. Senza l'auto, gli stack scadono dopo qualche secondo e il reset della lane arriva per niente.
- **W sull'ADC quando e' gia' morto.** La W ha 650 di range su 12 secondi di cooldown al rank 1. Se aspetti che il carry sia a 20 HP per saltare, il bonus resist arriva troppo tardi. Regola: W nell'**istante** in cui vedi il commit nemico (Q di Leona che parte, hook di Blitz in aria, ombra di Zed dentro), non dopo che e' a zero.
- **Stare davanti gratis.** La E protegge solo la direzione che guardi. Se sei dietro all'ADC, non scuda nulla. Default: un passo davanti e un passo **verso** la fonte di danno attesa — guarda la Caitlyn, non il tuo jungler.
- **Bruciare la R su un singolo target.** **Glacial Fissure** ha 100-130 secondi di cooldown. Usarla su un solo nemico mezzo morto in side lane e' un **throw** (regalo di vantaggio): ti chiudi fuori dal teamfight successivo. R solo con 2+ nemici nella linea, o quando il tuo carry muore senza panic peel.
- **Dimenticare il reset degli stack.** Gli stack di Concussive Blows **scadono** dopo qualche secondo se non ne arrivano di nuovi, e un bersaglio appena stordito non puo' riceverne altri per qualche secondo. Spammare auto su un ADC stordito non aggiunge nulla — passa al prossimo target prioritario, o tirati indietro e resetta il timer resist W.

## Suggerimento avanzato

L'angolo del **flash-R**. La R di Braum ha una linea da 1250 di range davanti a lui; il windup della cast e' abbastanza corto da farti Flash in avanti, premere R istantaneamente, e far spawnare la linea dalla **nuova** posizione flashata — ti lascia prendere una carry in backline che si pensava al sicuro a 1500 di range. Bind Flash e R nella portata della stessa mano e pratica in **Practice Tool** finche' non riesci a tirare entrambe in un quinto di secondo. Tienila per un fight in cui il team e' gia' raggruppato: un flash-R che prende ADC + support avversari diventa un ace pulito, mentre la stessa R su un solo mid-laner isolato e' un cooldown lungo speso per uno skirmish.
