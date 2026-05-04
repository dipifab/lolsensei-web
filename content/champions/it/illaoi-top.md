---
title: "Illaoi Top Build & Guida — Patch 16.9"
slug: "illaoi-top"
language: "it"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Guida Illaoi top per League of Legends Patch 16.9: build da juggernaut con Tentacoli, pressione di Test of Spirit, matchup chiave, power spike, errori comuni e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "I Tentacoli spawnano sui muri e sul terreno impassible vicino. Colpiscono i nemici toccati da W, i Vessel creati dalla E, e gli spiriti estratti dalla E. Curano Illaoi quando colpiscono campioni e Vessel."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Smash di un Tentacolo in linea che fa danno fisico. Passiva: amplifica il danno di ogni slam dei Tentacoli — Q è anche il main waveclear e il pulsante per attivare i Tentacoli."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Auto-attacco potenziato: salta sul bersaglio, fa danno fisico in % HP max, e ordina ai Tentacoli vicini di slammare. Il leap è la sua unica forma di mobility."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Skillshot lineare a lungo raggio che strappa lo spirito del nemico. Il danno allo spirito fa eco sul bersaglio reale. Se lo spirito muore o il target esce dal raggio, diventa Vessel e i Tentacoli lo cacciano."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Smash AOE attorno a Illaoi: danno + spawn di un Tentacolo per ogni campione nemico colpito. Per 8 secondi i Tentacoli sono untargetable e slammano del 50% più veloce, e il CD della W cala a ~1.5s."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps con 2+ minacce AP o CC concatenato (stun, root, knockback) tipo Lissandra, Malphite ult, pull di Sett"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro kiter che escono dal raggio della W (Quinn, Vayne, Gnar) — la dash attiva + slow li tiene dentro il raggio dei Tentacoli"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro frontline ad alto armor (Malphite, Rammus, Shen) — ogni Q smash e ogni proc di W consuma stack di armor per tutta la squadra"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro comp AP-heavy con burst (Vladimir, LeBlanc) — lo scudo magico parte quando sei basso HP e i Tentacoli devono ancora slammare"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando il team è behind 4v5 e devi splitpushare — extra resistenze contro minion e torri per assediare una side lane da sola"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Estrai lo spirito con E, tieni il bersaglio dentro il raggio del numero massimo possibile di Tentacoli. Ogni smash di Q e ogni W tickano sia sullo spirito che sul target — i fight prolungati sono la sua zona di vittoria."
  weakness: "Niente dash, niente fuga oltre Flash. I top ranged la pokano fuori dal raggio della W, e gli skirmisher con multi-dash baitano i Tentacoli, escono dal raggio e rientrano quando gli stack di Conqueror sono già scaduti."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Conqueror: ogni Q, W e slam dei Tentacoli stacka la keystone, e la win zone di Illaoi sono fight da 5+ secondi. Triumph cura sui takedown, Legend: Alacrity dà Attack Speed per ridurre il CD della W, Last Stand premia la fascia di basso HP dove la R atterra meglio."
    secondary_rationale: "Resolve secondary: Bone Plating taglia i primi 3 colpi di un all-in (uno scambio totale fino alla kill), che ai livelli 2-3 è la finestra in cui Illaoi perde HP senza poter ricambiare; Overgrowth scala HP dai minion fino a ~3.5% bonus health al minuto 25."
    secondary_alternative: "Se il top è ranged poke duro (Teemo, Quinn, Jayce, Kennen), swap Resolve in Inspiration con Triple Tonic e Magical Footwear (Boots gratis al minuto 12) — perdi comunque la priorità in lane, Inspiration recupera oro e HP passivamente."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Juggernaut melee senza dash"
      reason: "Il loro intero profilo di danno sta dentro il raggio della W. Una volta che ci salti sopra, ogni Tentacolo vicino slamma — e non hanno dash per uscire dal raggio prima che Conqueror raggiunga il cap e il danno vada a valanga."
    - examples: ["nasus", "sion"]
      archetype: "Tank scaler con laning debole"
      reason: "I primi 6 livelli li passano a farmare passivamente. La E li scaccia dalla wave per chip gratuito e li trasforma in Vessel: i Tentacoli li cacciano fino alla wave e l'eco dello spirito raddoppia ogni Q smash che landi."
    - examples: ["yorick", "volibear"]
      archetype: "Bruiser melee che evocano pet o buff per fightare"
      reason: "Si committano in avanti per usare le loro abilità (i ghoul di Yorick, l'AA potenziato di Volibear): una volta committati sono dentro il raggio della W e lo sciame di Tentacoli li punisce per restarci."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Top ranged che pokano o kitano"
      reason: "Stanno fuori dal raggio della W (400 unità) e ti smontano l'HP con gli auto-attack. Ogni passo che fai per chiudere la distanza gli regala un'AA gratis — e tu non hai dash per recuperare la distanza."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Skirmisher con multi-dash"
      reason: "Entrano nel raggio dei Tentacoli, fanno burst, poi escono con la dash prima che Conqueror raggiunga il cap. Quando le dash tornano disponibili, i tuoi Tentacoli sono in cooldown — sono loro a dettare il ritmo dello scambio, non tu."
    - examples: ["jayce", "gnar"]
      archetype: "Campioni che cambiano forma tra distanza e mischia"
      reason: "Ti pokano da forma ranged, poi passano in forma melee solo quando i Tentacoli non sono attivi. Tu bruci la W cercando di ingaggiare e loro cancellano lo scambio tornando ranged."
---

## Panoramica

Illaoi è una **juggernaut** (un campione melee lento e immobile che fa tantissimo danno e tanka i colpi in uno scambio diretto) costruita attorno alla sua passiva **Prophet of an Elder God**. Il suo kit (l'insieme delle sue 5 abilità) spawna **Tentacoli** su tutti i muri e il terreno non calpestabile vicino — braccia gigantesche, **untargetable** (i nemici non possono colpirle), attaccate ai bordi della mappa che slammano a comando. I Tentacoli fanno la maggior parte del suo danno; il suo lavoro è costringere il nemico a stare dentro il loro raggio abbastanza a lungo da morire. Le abilità che danno ai Tentacoli un bersaglio sono due: **W (Harsh Lesson)** è un leap corto che ordina a ogni Tentacolo vicino di slammare sul target, e **E (Test of Spirit)** strappa lo spirito del nemico fuori dal corpo così i Tentacoli lo possono pestare (con il danno che fa eco sul campione reale).

Il game plan è brutalmente semplice. **Landi la E per marcare il bersaglio, cammini in avanti, e usi la W per saltare nel campo di Tentacoli più denso del tuo lato della mappa.** Se il nemico esce dal raggio, lo spirito muore e il campione diventa **Vessel** — uno status di debuff in cui i Tentacoli lo inseguono per tutta la lane. Da livello 6, **R (Leap of Faith)** spawna un Tentacolo extra per ogni campione nemico colpito e rende i Tentacoli esistenti untargetable per 8 secondi — è l'unica finestra in cui ha davvero il burst per cancellare un target, quindi tieni la R per un all-in (uno scambio totale fino alla kill, senza spazio per disimpegnarsi) o un teamfight, mai per il waveclear.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passiva di rigenerazione HP attutisce il poke nemico (danno a distanza a basso costo che ti chippa l'HP senza che il nemico si committi a un fight) finché la pressione dei Tentacoli al livello 3 non è online.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primo spike di item (il momento in cui la tua forza fa il salto più grande). La passiva Spellblade (un'auto-attack potenziata gratuita ogni pochi secondi dopo un cast) si allinea perfettamente con la W: ogni AA del leap fa scattare (proc) Spellblade. Aggiunge AD (Attack Damage, la stat dietro il danno fisico), HP, ability haste (la stat che riduce i cooldown delle abilità) e Attack Speed — tutte le stat che servono al kit.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro squadre che ti fanno male soprattutto con gli auto-attack. Riducono il danno degli auto negli scambi prolungati (back-and-forth di colpi in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più uno **scudo salvavita**: quando l'HP scende sotto ~30%, parte automaticamente uno scudo. Quella finestra è esattamente quando i tuoi Tentacoli stanno ancora slammando, quindi i secondi extra di sopravvivenza diventano la kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converte il **burst** AD ricevuto (danno alto concentrato in 1-2 secondi, tipo un combo da assassino) in un **bleed** lento (danno spalmato nei secondi successivi invece che istantaneo). Sui takedown il bleed residuo viene ripulito — un reset gratis ogni volta che la R catena una kill.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) più una passiva che amplifica le cure ricevute: potenzia il sustain dei Tentacoli dalla passiva, il bleed-clean di Death's Dance, e il trade in % HP max della W. È il singolo più grande moltiplicatore di sopravvivenza nella build.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando l'enemy team ha 2+ minacce AP (Ability Power, la stat dietro il danno magico) o **CC** concatenato (crowd control: stun, root, knockback — tutto ciò che ti blocca e ti impedisce di agire). La tenacity (la stat che riduce la durata del CC su di te) è critica perché non hai dash per uscire.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contro kiter che si allontanano dalla W da 400 unità (Quinn, Vayne top, Gnar). L'attiva è una dash corta più uno slow AOE — esattamente il secondo gap-closer che il kit non ha. Sostituisce ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** come primo item, non stackare entrambi.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro frontline ad alto armor (Malphite, Rammus, Shen). Ogni Q smash e ogni proc di W consuma stack di armor sul target per tutta la squadra.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro comp AP-heavy con **burst** (Vladimir, LeBlanc, Veigar). Lo scudo magico parte automaticamente quando sei basso HP — esattamente i secondi in cui i Tentacoli devono ancora slammare.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando il team è behind 4v5 e il tuo job è **splitpushare** (spingere una side lane da sola per costringere l'avversario a rispondere). Resistenze extra contro minion e torri permettono a Illaoi di assediare una side lane da sola.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sono il default. Switcha a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando l'enemy team ha tre o più fonti di CC o tanto danno magico.

**Skill order:** Alza al massimo (max) **Q** per prima (waveclear, amplifica il danno dei Tentacoli, cooldown più basso). Alza al massimo **E** per seconda (il cooldown cala di 4 secondi al rank max, che vuol dire più pressione di Vessel al minuto). **W** la alzi al massimo per ultima — il suo danno è già grande perché scala con l'HP max del bersaglio, quindi i rank extra aggiungono meno di quelli su Q o E. Metti punti in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con la keystone (la runa principale dell'albero) **Conqueror** — una passiva che accumula AD bonus mentre continui a colpire campioni, cappata dopo 5 secondi di combat sostenuto. Abbinata a **Triumph** (piccola cura e gold burst sul takedown), **Legend: Alacrity** (stack di Attack Speed sui takedown), e **Last Stand** (danno extra sotto il 60% HP). Secondaria **Resolve** con **Bone Plating** (riduzione danno sui prossimi 3 colpi dopo aver subito danno) e **Overgrowth** (HP che scalano con i minion che muoiono vicini, perfetta per un top laner che farma 8+ minion per wave). Stat shard: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchup chiave

- **Sett:** Lane favorevole. Il combo Q-W-E è telegrafato (l'animazione di carica è abbastanza visibile da farti reagire). Tieni la E per estrarre lo spirito nel momento esatto in cui Sett lancia la W — una volta vuotata la barra dello scudo non ha disengage, e lo sciame di Tentacoli gli stacca un grosso pezzo di HP prima che la sua R sia up.
- **Darius:** Skill matchup (vince il giocatore migliore, indipendentemente dal pick). Ti vince lo scambio prolungato a 5 stack se i Tentacoli sono giù — fai finta di reagire al pull della E (bait), poi salti con la W indietro in un campo di Tentacoli. Mai scambiare in mezzo alla lane, solo sul tuo lato dove i Tentacoli coprono il muro.
- **Fiora:** Matchup melee duro. La sua **W** è una parry (uno scudo breve che blocca e contrattacca la prossima abilità) — se parra la tua E, lo spirito non spawna e perdi 14 secondi di cooldown. Esca la parry con un animation cancel (inizi il cast E, poi cammini di lato) prima del cast vero.
- **Teemo / Quinn:** Matchup ranged molto duro. Stanno fuori dal raggio della W, ti blindano gli auto-attack (li cancellano per qualche secondo), e ti tolgono pezzi di HP gratis (poke). **Freezza** la wave vicino alla tua torre (smetti di pushare e tieni la wave dal tuo lato della lane) per negargli farm (l'oro e XP dai minion), e chiama il jungler — Illaoi non vince il 1v1 senza aiuto.
- **Camille:** Matchup melee duro. La sua E hookshot la dasha dentro e fuori dal raggio della W liberamente, e la R la chiude in un'arena 1v1 con te isolata dai Tentacoli. Tieni la E per il momento subito dopo la sua dash in: se estrai lo spirito mentre è committata, la R non la salva. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** presto — la maggior parte del suo danno è true damage on-hit (true damage = danno che ignora armor e MR; on-hit = applicato a ogni auto-attack), ma ogni punto di armor aiuta comunque.

## Power spike & condizioni di vittoria

- **Livello 3:** Con Q + E + W sbloccate, Illaoi ha il combo completo della lane per la prima volta. E per marcare, cammini nel tuo campo di Tentacoli, W per saltare e ordinare gli slam. Da qui in poi la lane è tua, a meno che il nemico sia ranged.
- **Livello 6:** La prima **R** si sblocca. Anche con un solo Tentacolo già piazzato sul muro, la R ne spawna un secondo e li congela come untargetable per 8 secondi. Un 1v1 con la R up è una kill contro qualsiasi bruiser non mobile.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minuto 13-15):** Danno e **stickiness** (la capacità di restare incollata al bersaglio che cerca di scappare) salgono di più. Forza i 1v1 in side lane e cerca di **roamare** (lasciare la tua lane per aiutare mid o bot) per i pick (kill isolate su nemici fuori posizione).
- **Due item + R online (~ minuto 18-22):** Picco di teamfight. Cammini attraverso la frontline (la prima linea di tank/bruiser della tua squadra), R su 3+ nemici per spawnare 3+ Tentacoli sul posto, e lasci che lo sciame di Tentacoli faccia a pezzi la backline (i carry squishy — i campioni a basse difese e alto danno che stanno dietro i loro tank durante un fight) mentre Conqueror raggiunge il cap nei primi 5 secondi.

## Errori comuni

- **Fightare in mezzo alla lane.** I Tentacoli spawnano solo sui muri e sul terreno non calpestabile. Se usi la W su un bersaglio in mezzo al river (il fiume al centro della mappa) o in una lane aperta, nessun Tentacolo slamma e la W è solo un salto da 400 unità che non fa nulla extra. Scegli sempre il fight vicino a un muro — il bush del tuo lato della lane, il tri-bush (il cespuglio triplo all'incrocio tra lane e river), l'ingresso della tua jungle.
- **Tirare la E su una linea di minion bassi HP.** La E è la tua abilità più importante e ha 12-16 secondi di cooldown. Se la lanci e lo skillshot pesca un minion o sbaglia il campione, sei senza setup per 14 secondi — e il nemico lo sa. Aspetta una linea di vista pulita sul campione prima di premere E.
- **Premere R per il waveclear.** La R fa danno AOE, ma il vero valore sono gli 8 secondi di Tentacoli untargetable più il Tentacolo bonus per ogni campione colpito. Usarla su una wave spreca un cooldown da 70-120 secondi e ti lascia con zero teamfight tools quando l'enemy jungler arriva.
- **Camminare in un fight senza controllare le posizioni dei Tentacoli.** Se i Tentacoli più vicini stanno scadendo (il bagliore arancione svanisce poco prima che dispariscano), aspetta 4 secondi per uno spawn nuovo prima di committare W. Una Harsh Lesson senza Tentacoli da slammare è un leap sprecato.
- **Stackare item da pure tank.** Illaoi scala con AD — ogni slam dei Tentacoli è una percentuale del suo AD. Andare su due item da puro tank (Sunfire Aegis + Warmog's, solo HP e armor) azzera il danno; smetti di uccidere i carry e diventi un minion lento. Tieni il core AD-bruiser.

## Suggerimento avanzato

Allena l'**E animation cancel**. Test of Spirit ha una cast animation lunga (~0.5s) durante cui Illaoi è bloccata sul posto — abbastanza tempo perché un nemico attento schivi lo skillshot lineare. Il fix è iniziare il cast, camminare 1-2 passi in avanti per baitare il dodge in una direzione, poi castare nella direzione *opposta* all'ultimo frame. Lo stesso trick funziona al contrario: hover col cursore sul nemico, fingi il cast, e ricasta sulla traiettoria di dodge prevista dello spirito. In game l'uso più impattante è l'all-in al livello 3: E-fake, W sullo spirito quando inizia a schivare, poi E vera sul suo dash di reazione. Allenalo nel practice tool su un target dummy finché il ritmo diventa automatico.
