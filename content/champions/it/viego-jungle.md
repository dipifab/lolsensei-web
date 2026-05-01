---
title: "Viego Jungle Build & Guida — Patch 16.9"
slug: "viego-jungle"
language: "it"
patch: "16.9"
champion: "viego"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Viego jungle per League of Legends Patch 16.9: starter kit, build core bruiser, matchup chiave, power spike, errori comuni e una tip avanzata finale."
quick_learn:
  champion_dd_id: "Viego"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Sovereign's Domination"
      description: "Quando un campione nemico muore vicino a Viego, il suo corpo diventa un wraith. Attaccando il wraith, Viego possiede quel corpo per qualche secondo: si cura, ottiene le sue abilità base e può castare la propria R gratis."
      dd_spell_id: "Viego_Passive"
    - key: "Q"
      name: "Blade of the Ruined King"
      description: "Passiva: gli auto fanno danno bonus su current HP. Il primo auto su un target colpito di recente da una sua abilità colpisce due volte e cura. Attiva: stoccata frontale che danneggia i nemici davanti."
      dd_spell_id: "ViegoQ"
    - key: "W"
      name: "Spectral Maw"
      description: "Dash a carica: tieni premuto per slowarti e accumulare mist, rilascia per dashare in avanti e stunnare il primo nemico colpito. Più carichi, più lo stun dura, fino a un cap."
      dd_spell_id: "ViegoW"
    - key: "E"
      name: "Harrowed Path"
      description: "Manda mist verso il primo muro che colpisce, circondandolo. Dentro la mist Viego ottiene camouflage (invisibile a meno che un nemico non gli passi molto vicino), bonus move speed e bonus attack speed."
      dd_spell_id: "ViegoE"
    - key: "R"
      name: "Heartbreaker"
      description: "Scarta la possessione attuale, teleporta a breve distanza ed esegue il campione nemico con HP percentuale più bassi all'arrivo, con bonus damage su HP mancanti. Knock back sui nemici vicini."
      dd_spell_id: "ViegoR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro comp con tanto kite (Caitlyn, Vayne, Kalista) — l'active dasha in avanti e slowa così stun e Q connettono"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro comp AP pesanti (Karthus, Brand, Lissandra) — magic resist e on-hit magic damage"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP single-target (Veigar, LeBlanc, Syndra) — magic shield sotto il 30% HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con healing pesante (Soraka, Aatrox, Dr. Mundo) — Grievous Wounds on-hit"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando sei avanti e ti focusano in engage — la seconda vita ti permette di rientrare con R dopo che hanno bruciato i cooldown"
  base_combo: ["E", "W", "AA", "Q", "R"]
  win_condition: "Prendi kill o assist entro il minuto 6 con un gank stun di W, poi snowballa con le possessioni: ogni nemico morto è un secondo personaggio gratis. Forza un fight ogni volta che R è up."
  weakness: "Niente tool a lunga distanza e nessun escape nativo: se la W manca o viene cancellata, resta in melee senza risposta al peel. Le catene di hard CC lo cancellano perché non può lanciare R finché non arriva a un target."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Jungler ranged squishy senza hard CC"
      reason: "Viego chiude la gap con il camouflage di Harrowed Path più lo stun di Spectral Maw. Una volta arrivato in melee non hanno peel e il Q execute pattern li fa a pezzi in una rotation."
    - examples: ["amumu", "zac", "rell"]
      archetype: "Tank jungler senza danno sostenuto"
      reason: "I tank fanno engage e poi cercano follow-up; Viego attraversa il loro CC stunnando indietro con W e out-tradando con la cura della Q. Non lo uccidono prima che lui uccida la loro carry."
    - examples: ["yasuo", "yone", "samira"]
      archetype: "Carry alleati da poter possedere"
      reason: "Possedere una carry nemica fed raddoppia il tuo impatto: Viego è al massimo quando le team comp avversarie offrono carry succose da prendere in mano dopo una kill. Pickalo contro comp con minacce squishy late-game."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Jungler forti early con invade"
      reason: "Il primo clear di Viego è lento e il suo duel a livello 3 è mediocre; questi jungler entrano nella sua jungle, lo uccidono prima che finisca Kraken Slayer e cancellano la finestra di snowball che il suo kit richiede."
    - examples: ["malzahar", "warwick", "skarner"]
      archetype: "Suppress o hard CC point-and-click"
      reason: "Suppress (un CC speciale che la maggior parte dei cleanse non rimuove) e root a lunga durata lo bloccano prima che la W parta. Senza stun non ha né engage tool né escape."
    - examples: ["jax", "fiora", "tryndamere"]
      archetype: "Mostri 1v1 late game"
      reason: "Il power di Viego è concentrato early-mid game; se la squadra avversaria ha un top laner che lo out-scala 1v1 con quattro item, ogni skirmish (= scontro piccolo, di solito 1v1 o 2v2) di side lane gli fa sanguinare HP senza le possessioni che gli servono per snowballare."
---

## Panoramica

Viego è un fighter assassin (= un campione melee che builda abbastanza danno per cancellare una singola carry ma anche abbastanza sopravvivenza per restare in un fight breve) e tutto il suo kit gira attorno a una sola meccanica: quando un campione nemico muore vicino a lui, il corpo diventa un wraith. Attacca il wraith e possiedi (= prendi temporaneamente il controllo) il corpo del nemico per qualche secondo — Viego si cura per una quota dei suoi HP massimi, può castare le sue abilità base (Q, W, E) e usare i suoi item, e sostituisce la sua R con un cast gratuito di **Heartbreaker (R)**. La possessione è il motivo per cui esiste: ogni kill è un secondo personaggio che usi subito dopo.

Il game plan è fare gank early con lo stun di **Spectral Maw (W)**, prendere un item lead entro il minuto 12 e forzare un fight ogni volta che la **R** è up, così il ciclo "kill → possessione → secondo target → R sull'HP più basso" continua a girare. Non è un pick scaling (= che diventa più forte col passare dei minuti): se l'early stalla, i mage avversari lo out-rangiano e le possessioni non scattano mai.

## Build Consigliata

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper è lo jungle starter che dà più stat difensive early — esattamente ciò che a Viego serve per un primo clear sano e un gank a livello 3 sopravvivibile. Lo starter potenzia anche **Smite** (lo summoner spell che ogni jungler prende — un colpo singolo molto forte su un bersaglio, usato sia per pulire i camp più velocemente sia per rubare gli obiettivi al team avversario).

**Core items (in ordine):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — ogni terzo auto-attack aggiunge danno fisico bonus on-hit. Si lega bene al colpo bonus su current HP della Q passive: pezzi di HP si sciolgono dai campioni anche quando buildano difese.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor e una riduzione percentuale sui basic attack subiti. Boots di default contro la maggior parte delle squadre, perché stai sempre in melee range e ti mangi auto-attack tutto il fight.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma una parte del danno fisico subito in un sanguinamento lento (= danno spalmato nei secondi successivi invece che istantaneo). Ti dà tempo di reagire quando un singolo burst (= tanto danno concentrato in 1-2 secondi) ti ucciderebbe.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP bonus e uno shield grosso che si attiva da solo quando scendi sotto soglia. Lo shield compra il secondo o due che servono a Viego per piazzare la **R** sul target a basso HP.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (= ti curi per una percentuale del danno che infliggi) e overheal shield (= l'healing in eccesso oltre l'HP massimo si trasforma in uno shield temporaneo). Ti permette di restare in melee per teamfight prolungati.

**Situational items:**

- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contro comp con tanto kite (kite = nemici che indietreggiano continuando ad attaccare; es. Caitlyn, Vayne, Kalista). L'active ti dasha in avanti e li slowa così stun e Q connettono.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contro composizioni AP pesanti (AP = campioni il cui danno arriva dalle spell, non dagli auto-attack; es. Karthus, Brand, Lissandra). Magic resist e on-hit magic damage che sostituisce Bloodthirster.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP single-target (Veigar, LeBlanc, Syndra). Lo shield si attiva sotto il 30% HP e assorbe una bella parte del prossimo magic damage.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp con healing pesante (Soraka, Aatrox, Dr. Mundo, Vladimir). Applica Grievous Wounds (= un debuff che dimezza la cura del target) su ogni auto.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando sei avanti e la squadra avversaria ti focusa in engage. La seconda vita significa che puoi rientrare con la **R** dopo che hanno bruciato i cooldown.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è la default contro squadre auto-attack pesanti. Switcha su Mercury's Treads contro tanto CC (= crowd control, abilità che ti impediscono di agire: stun, root, knock-up). Salta Berserker's Greaves: Viego non ha bisogno di attack speed pura quando la sua Q passive aggiunge già danno bonus su ogni colpo.

**Skill order:** Maxa **Q** per prima (DPS e sustain nei fight di lane), **E** seconda (più move speed e cooldown ridotto — roam migliori), **W** per ultima. **R** ai livelli 6, 11, 16.

**Runes:** Le rune sono bonus passivi che scegli prima della partita; modellano le stat early e lo stile di danno. Primary **Precision** (l'albero focalizzato sugli auto-attack) con **Conqueror** (stacka bonus damage su ogni spell o attack contro un campione, perfetto per le skirmish prolungate), **Triumph** (cura una quota di HP a ogni takedown), **Legend: Alacrity** (attack speed extra a ogni takedown), **Coup de Grace** (più danno ai target a basso HP — moltiplica l'execute della R). Secondary **Domination** con **Sudden Impact** (danno bonus subito dopo un dash o un'uscita da stealth, triggerato sia da **W** che da **E**) e **Treasure Hunter** (oro extra per ogni primo takedown su un campione diverso). Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchup chiave

- **Lee Sin:** Forte invader early. Trackalo con la vision sui buff ed evita di fighterlo prima del livello 4: il suo danno early con Q poke e W shield vince quel duel. Counter-ganka i suoi gank invece di provare a invadere.
- **Master Yi:** Rivale scaling che devi uccidere prima del minuto 20. Forza objective trade early (= pusha un Drake o Rift Herald mentre lui è impegnato dall'altra parte della mappa) così non arriva mai a quattro item. Quando la sua Q torna up ignora il tuo stun.
- **Karthus:** Matchup gratis sulla carta — niente mobility, niente peel su sé stesso. **E** attraverso un muro per camuffarti nella sua jungle, **W** stun sopra di lui e finisci con **Q** + auto-attack. Attento ai compagni: la sua ult fa danno a tutta la tua squadra in mappa, ma non lo salva 1v1.
- **Sejuani:** Matchup duro. La sua **R** è point-and-click (= si aggancia al target, niente mira) e ti blocca per più di un secondo. Mai engage (engage = iniziare il fight) senza **Flash** pronto e mai senza la squadra in posizione per peelarti (peel = un alleato che ferma chi ti sta arrivando addosso).
- **Rammus:** Matchup duro per un fighter melee. La sua passiva spinata riflette parte del danno dei tuoi auto-attack su di te, e la sua **W** raddoppia la riflessione. Evita le skirmish in solitaria e farma il lato opposto della jungle finché non finisci ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance**.

## Power spike & condizioni di vittoria

Un power spike è un momento in cui il campione diventa improvvisamente molto più forte rispetto a un minuto prima — di solito quando una nuova abilità o un item completato entra in gioco.

- **Livello 3:** Tutte e quattro le base sbloccate (P-Q-W-E). Con un punto in **W** hai un gank stun: tieni la carica dietro un muro, **E** attraverso il muro per entrare nella mist con bonus move speed, avvicinati invisibile, rilascia **W** alla carica massima per lo stun più lungo. Lo Scuttle (il granchio di fiume neutrale: uccidilo per vision e un piccolo buff di movement speed nel river) è tuo dopo il gank.
- **Livello 6:** **Heartbreaker (R)** sblocca il kit completo. Adesso ogni fight finisce con un dash + execute sul campione con HP più basso. Forza un fight o divе (= entrare sotto la torre nemica per ucciderlo comunque, mangiandoti i tiri della torre) un laner basso di vita appena la **R** è up.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completato (~ minuto 11-13):** Primo vero spike di danno. Ora puoi duellare la maggior parte dei jungler nella loro jungle e killare una carry a basso HP attraverso lo shield del support.
- **![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) Death's Dance online (~ minuto 17-19):** Con tre item sopravvivi al teamfight front-to-back abbastanza da far scattare le possessioni a catena. Raggruppati con la squadra per il secondo drake e il timer del Baron.

## Errori comuni

- **Ultare (= usare R) senza scegliere il target giusto.** La R di Viego si aggancia al campione nemico con la percentuale di HP più bassa nel range quando la premi. Premila troppo presto e sprechi il dash su un tank quasi pieno. Aspetta che la tua squadra abbia bursttato (= fatto tanto danno in 1-2 secondi) qualcuno sotto il 40% HP, poi **R** per cancellarlo.
- **Possedere un campione di poco impatto.** Quando due nemici muoiono nello stesso fight puoi scegliere quale wraith attaccare. Prendi sempre quello con i cooldown su e abilità di danno (un ADC fed con Crit — fed = con diverse kill in più, ADC = la carry ranged auto-attack tipo Caitlyn o Jinx, Crit = chance di critical strike, la probabilità che ogni auto faccia circa il doppio del danno). Possedere il support morto con CC vuoti è uno spreco di secondi.
- **Tenere la carica della W troppo a lungo in chase.** **Spectral Maw (W)** ti slowa mentre carichi. Uno stun a metà carica che connette è molto meglio di uno stun a piena carica che lascia il target uscire dal range. Leggi la gap, rilascia al cooldown che colpisce.
- **Gankare senza la E.** **Harrowed Path (E)** attraverso un muro dà camouflage (= invisibile a meno che un nemico non passi molto vicino), bonus move speed e bonus attack speed. Avvicinarti a una lane in piena vista dei ward costa la sorpresa e lo stun della **W**. Cerca sempre un muro.
- **Forzare fight senza R.** La forza di Viego è il combo dash + execute. Con la **R** down è un Master Yi peggiore senza spam di dash. Torna a farmare camp di jungle e aspetta il cooldown.

## Suggerimento avanzato

Usa la possessione come **secondo Flash**. Quando uccidi un nemico con un'abilità di dash o blink (= un teleport veloce mirato, tipo la E di Ezreal o la W di LeBlanc), il wraith ha accesso anche a quel dash — possiedilo, vai a un muro che il suo cast originale non poteva raggiungere e usa il suo dash per uscire da un fight in cui altrimenti morivi. Lo stesso trick funziona offensivamente: possiedi un'Akali e usa la sua **E** per arrivare alla backline che Viego stesso non potrebbe mai raggiungere.
