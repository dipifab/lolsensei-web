---
title: "Pantheon Support — Build e Guida — Patch 16.9"
slug: "pantheon-support"
language: "it"
patch: "16.9"
champion: "pantheon"
role: "support"
last_updated: "2026-04-29"
description: "Guida a Pantheon support per League of Legends Patch 16.9: starter kit, build bruiser-engage, matchup chiave, power spike, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Pantheon"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Mortal Will"
      description: "Ogni cinque spell o auto-attack la prossima abilità di Pantheon viene potenziata. Guarda la piccola icona sopra la barra: quando si illumina, la prossima Q, W o E parte con un upgrade importante."
      dd_spell_id: "Pantheon_Passive"
    - key: "Q"
      name: "Comet Spear"
      description: "Tap = colpo melee corto che restituisce parte del cooldown. Hold = lancio di lancia a lungo raggio per il poke. La versione hold è il tuo unico tool a distanza: usala per chippare HP in lane."
      dd_spell_id: "PantheonQ"
    - key: "W"
      name: "Shield Vault"
      description: "Dash mirato addosso a un campione nemico che lo stuna brevemente e infligge danno basato sull'HP massimo. Il tuo engage principale: gap-close, locka il bersaglio, lascia che l'ADC chiuda il kill."
      dd_spell_id: "PantheonW"
    - key: "E"
      name: "Aegis Assault"
      description: "Channel di uno scudo direzionale: blocca tutto il danno non-tower dal lato verso cui sei rivolto e infligge stab ripetute. Lo slam finale fa danno extra. Usalo per assorbire il burst dell'ADC nemico mentre il team lo uccide."
      dd_spell_id: "PantheonE"
    - key: "R"
      name: "Grand Starfall"
      description: "Salto globale a lungo raggio: Pantheon balza in cielo e atterra su una zona scelta dopo un delay. Usalo per roamare su tutta la mappa o per entrare in un fight da qualsiasi lane — l'indicatore a terra avvisa i nemici."
      dd_spell_id: "PantheonR"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dalle Mercury's vs bot lane da auto-attack pesante (Caitlyn, Draven, Tristana) quando l'harass early fa più male del CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comp dove ulti affidabilmente sopra a un carry alleato (Yasuo, Yone, Master Yi): l'ulti aggiunge danno magico bonus alle sue auto-attack"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contro comp di burst AP (es. doppio mago tipo Syndra mid + Brand support): scudo magico passivo che si rigenera fuori combat"
    - dd_id: "3876"
      name: "Solstice Sleigh"
      against: "endgame engage alternativo per comp di doppio engage: chain di CC sullo stesso target shielda te e il prossimo alleato e dà movement speed"
  base_combo: ["W", "AA", "Q", "E", "R"]
  win_condition: "Usa l'ulti globale Grand Starfall per ribaltare skirmish ovunque sulla mappa: ulti dentro un fight, W stun sul priority target all'atterraggio, poi catena Q tap e Aegis Assault mentre l'ADC chiude. Roama spesso e presto."
  weakness: "Niente engage a distanza oltre al dash di W (600 unità). Cala duro quando i carry nemici comprano armatura: Pantheon è un bruiser support, non un vero tank. Un 4v5 dopo un ult-roam fallito fa crollare tutto il team."
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanter squishy senza hard CC propria"
      reason: "Non hanno strumenti per interrompere il dash della W. Appena W atterra sull'ADC e incateni il Q tap, il carry muore nello stun prima che l'enchanter possa shieldare o peelare. Yuumi non riesce nemmeno a saltare via in tempo."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADC immobili senza dash"
      reason: "La W gap-closa 600 unità sul target: gli ADC senza blink mangiano la chain W stun e Q follow-up ogni volta che si avvicinano per last-hittare. Una volta che parti non possono fuggire."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support stazionari senza escape"
      reason: "Devono stare fermi per castare i loro skillshot lunghi: è esattamente il momento in cui la W atterra pulita. La Aegis Assault blocca anche il loro poke tra un engage e l'altro, negando completamente il loro lane plan."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Bloccatori di hard CC e enchanter di disengage"
      reason: "La Black Shield di Morgana mangia lo stun della W di netto: ti committi addosso a vuoto. La R di Milio rimuove la chain a distanza. Il polymorph di Lulu cancella il dash a metà cast. Il tuo unico engage viene risposto a costo zero."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook support che ti tirano fuori posizione"
      reason: "I loro hook arrivano più lontano della W (Q di Thresh ~1100 vs W 600). Mangi il pull, vieni focalizzato da solo nel loro team, e l'ADC resta esposto perché hai usato l'unico engage cercando di camminare in avanti."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tank engage support che ti out-CCano"
      reason: "Catenano più crowd control di Pantheon (Leona ha E root più Q stun più R; Pantheon solo W stun). In un mirror engage vincono perché il loro lock-down dura di più e restano vivi dopo: Pantheon no."
---

## Panoramica

Pantheon di solito si gioca top, ma in bot lane funziona come **bruiser support aggressivo** (un support di classe fighter che apre i fight con il danno, non con la pura tankiness). Il kit è costruito su engage a due bottoni: **Shield Vault (W)** è un dash mirato che stuna e infligge danno basato sull'HP massimo del bersaglio, e **Comet Spear (Q)** ha due modalità: tap per un colpo melee corto che restituisce quasi tutto il cooldown, oppure hold per un lancio di lancia a lungo raggio che pokea da distanza. **Aegis Assault (E)** è uno scudo direzionale che blocca ogni colpo non-tower frontale mentre Pantheon stabba ripetutamente. **Grand Starfall (R)** è un **ulti globale** (un'ultimate che attraversa tutta la mappa): salta in cielo e atterra su una zona scelta dopo un delay, segnalata a terra da un cerchio di warning. La passiva **Mortal Will** conta ogni spell o auto-attack: ogni quinta carica empower la prossima abilità (Q con danno extra, W con multi-hit, o E con resistenze bonus).

Game plan in lane: pokea con la held-Q dal range massimo mentre l'ADC nemico last-hitta, poi committa una W-engage (un **engage** è l'atto di aprire il fight entrando per primi) quando il **Flash** avversario è giù. Mid-game, l'ulti globale è la win condition: lascia bot lane e ulti dentro **skirmish** (scontri piccoli 2v2 o 3v3, non teamfight pieni) mid o top, dove l'effetto sorpresa di un salto globale ti fa ribaltare fight a cui non eri nemmeno vicino. Late-game, peela per l'ADC — **peel** significa proteggere il proprio carry staccando da lui chi lo attacca — usando E per body-bloccare il **diver** nemico (un campione che salta sulla back line per uccidere il carry) e W per **interrompere** (cancellare il cast di) ogni abilità che riesci a lockare.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato per i support) più 2 Health Potions. Non last-hittare i minion: lascia il gold all'ADC. World Atlas paga il tuo gold separatamente attraverso la quest progression.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolve in automatico mentre accumuli quest progress passando da ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, fino all'endgame upgrade che scegli.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist più **tenacity** (statistica che riduce la durata del crowd control su di te). Uno stun più corto significa che riesci ancora a piazzare la W dopo che il support nemico prova a interromperti.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armatura, magic resist e attiva che scuda tutti gli alleati vicini. Schiacciala l'istante in cui parti con la W: il team assorbe il primo **burst** (danno alto concentrato in 1-2 secondi) avversario.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega all'**ADC** (Attack Damage Carry, il compagno di bot lane che fa danno con auto-attack): una parte del danno che lui prende viene redirezionato a te, e tu lo curi indietro. Critico per un support hybrid-tank come Pantheon che non ha sustain naturale.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'endgame engage-focused dello starter support. Porta una passiva **Spellblade**: dopo ogni cast di abilità, la prossima auto-attack fa danno bonus e applica un amp di danno per 4 secondi. Pattern: "abilità → AA → abilità → AA". Pantheon spamma Q tap, quindi la proc si resetta in continuazione.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di armatura che riducono il danno da auto-attack. Swap dalle Mercury's quando la bot lane nemica è auto-attack pesante (Caitlyn, Draven, Tristana) e l'**harass** (poke e chip damage) fa più male del crowd control late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — ti lega a un alleato scelto; quando ulti, quell'alleato ottiene danno magico bonus sulle sue auto-attack. Pickalo contro comp con un melee carry (Yasuo, Yone, Master Yi) su cui ulti affidabilmente.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — scudo magico passivo che si rigenera fuori combat. Pickalo contro comp di burst AP (doppio mago tipo Syndra mid più Brand support): lo scudo mangia un'ulti intera.
- ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — endgame support engage-focused alternativo. Ogni volta che applichi crowd control due volte sullo stesso bersaglio (W stun più Q tap conta), tu e il prossimo alleato vicino prendete un piccolo scudo e movement speed bonus. Pickalo al posto di Bloodsong quando il team ha un altro engage e preferisci catenare CC anziché amplificare il danno.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacity. Swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo contro bot lane AA-heavy.

**Skill order:** Maxa **W** (Shield Vault) per prima — cooldown più basso significa più finestre di engage, e la W è il tuo crowd control più solido. Maxa **E** (Aegis Assault) per seconda per durata di blocco più lunga. Maxa **Q** per ultima (il danno extra conta meno del cooldown della W). Prendi **R** ai livelli 6, 11, 16.

**Runes:** Albero primario **Resolve** (l'albero di rune difensivo: durabilità) con **Aftershock** (armatura e magic resist gratis quando applichi crowd control, scatta a ogni W stun), **Font of Life** (il tuo CC marca il bersaglio; gli alleati che lo colpiscono curano), **Bone Plating** (damage reduction sui primi tre colpi presi: si stacka con il blocco di Aegis Assault), **Unflinching** (**tenacity** extra quando usi un summoner spell). Albero secondario **Inspiration** con **Hextech Flashtraption** (un Flash di backup su cooldown lungo, ti permette il Flash-W a sorpresa) e **Cosmic Insight** (cooldown più bassi su summoner e attive degli item). **Stat shards**: Adaptive Force / Adaptive Force / Health.

Keystone alternativa: **Hail of Blades** nell'albero **Precision** se vuoi un pattern di all-in early più pesante (tre auto-attack rapide dopo l'engage), ma Aftershock è il default più sicuro perché scala anche nel ruolo late-game di peeler.

## Matchup chiave

- **Leona:** Mirror **engage** matchup. Entrambi committate in avanti con un bottone solo. Prova a piazzare la W subito dopo la sua E-dash: i suoi cooldown sono più lunghi dei tuoi, quindi un counter-engage pulito di solito trada 1-per-1 e l'ADC porta a casa il kill.
- **Lulu:** Counter duro al tuo **all-in** (commit totale fino al kill). Il polymorph cancella la W a metà dash e la riduce a niente. Forza i fight solo quando la sua W è giù (traccia il timer di 18 secondi) o aspetta il jungler così l'engage non dipende da un solo bottone.
- **Caitlyn:** Matchup di **poke** a lungo raggio (chip damage da distanza). Ti bullizza l'HP sotto torre con trappole e auto-attack a 650 di range. Non provare a salire: held-Q da range massimo, mangia la lane scarsa, e roama mid appena la R è up. Il macro game di Pantheon batte il suo anche quando perde la lane.
- **Soraka:** **Sustain enchanter** puro (support healing-focused che vince mantenendo l'ADC vivo, non aprendo fight). Flash-W addosso a lei ogni volta che il suo Flash è giù: zero crowd control, muore nella tua combo prima che l'ADC reagisca. Tieni la R per il regroup quando il jungler arriva.
- **Thresh:** Skill matchup. La sua Q out-rangea la tua W (~1100 vs 600), quindi non camminare in avanti mentre il suo hook è up. Schivalo passando dietro i tuoi minion, poi piazza la W sul suo ADC l'istante in cui lo vedi in cooldown. La finestra è piccola ma costante.

## Power spike & condizioni di vittoria

- **Livello 2 (W + E):** Primo spike. Con W ed E hai una full all-in: W stun, AA, poi E per bloccare il counter-burst dell'ADC nemico. Un ADC che over-extenda (spinto oltre la prima **wave** — la fila di minion in arrivo) è un kill gratis se il tuo **Flash** è up.
- **Livello 6 (R sblocca):** La mappa si apre. **Grand Starfall** è globale, quindi puoi ulti su qualsiasi skirmish della Summoner's Rift da ovunque. La prima R di solito va a un fight che il jungler ha aperto mid o a un roam su un top laner over-extended — non a un 1v2 in lane.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primo item da teamfight. L'engage droppa uno scudo gratis al team. Raggruppati per **Drake** (obiettivo dragon nel river bot — i kill danno buff permanenti) o **Voidgrubs** (mostriciattoli nel river top — la squadra che li uccide guadagna danno bonus alle strutture).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** La proc Spellblade più i 4 secondi di amp di danno trasformano lo spam di Q tap in danno reale. La rotation W → AA → Q tap → AA personalmente strappa 25-30% HP a un **squishy** (campione a basse difese tipo ADC o mago).

## Errori comuni

- **Held-Q che manca ogni volta.** La versione hold è un proiettile lento telegrafato dall'animazione di wind-up della lancia. Castalo da dentro un brush o subito dopo che il nemico ha usato la sua abilità di movimento principale: mai in piano quando può semplicemente schivarlo camminando.
- **W senza follow-up.** Shield Vault ti committa in avanti e una volta che atterra non torni indietro. Se l'ADC è in base o il jungler è dall'altra parte della mappa, tieni la W. Un solo engage in 4v5 ti regala alla morte e brucia il cooldown a vuoto.
- **E rivolta nel verso sbagliato.** Aegis Assault blocca solo il danno dal lato verso cui sei rivolto. I novizi di Pantheon castano la E all'indietro per ritirarsi e mangiano il follow-up nemico alle spalle. Stai sempre rivolto verso la fonte del burst (le auto-attack dell'ADC, la combo del mid laner) e lascia che l'alleato peeli da dietro di te.
- **R usata come finisher 1v1.** Grand Starfall ha un delay lungo e un cerchio di warning enorme a terra; nemici esperti escono dalla zona prima dell'atterraggio. Usa la R per aprire un fight (con vision per far collassare il team insieme) o per attraversare la mappa su un bersaglio ignaro — mai per inseguire un 1v1 in fuga che dovevi già avere chiuso.
- **Dimenticare Mortal Will.** L'icona empower sopra la barra ti dice quando la prossima spell parte potenziata. Una W empowered colpisce più volte e shredda i tank; una Q empowered cancella i squishy. Auto-attacka i minion nei momenti di calma del mid-game per ricaricare la passiva prima di ogni engage.

## Suggerimento avanzato

L'**R-flank pick** sulla back line. Late-game, invece di ulti sopra al fight, ulti dentro la **back line** nemica (la parte arretrata della loro formazione, dove stanno i carry squishy) *dietro* al loro team. Il warning a terra dà 1 secondo di reazione: i carry di solito flashano in avanti verso la propria **front line** (i tank in testa alla formazione) per scappare, e tu W su chi non ha flashato. Questo converte un'ulti globale in un **pickoff** (eliminare un nemico isolato dal fight) sulla back line, e il fight che segue è 5v4 perché il carry nemico è morto. Combinalo con un compagno nascosto vicino (un jungler in **roam** — che lascia la sua lane per aiutare la tua) per catturare il bersaglio del **Flash** e salti del tutto il teamfight.
