---
title: "Ivern Jungle Build & Guida — Patch 16.9"
slug: "ivern-jungle"
language: "it"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida completa a Ivern jungle in patch 16.9: clear pacifico via grove, build enchanter, setup di root con Q, controllo fight con Daisy, matchup chiave."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Jungler di setup"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Non puo' attaccare i mostri della jungla ne' essere attaccato da loro (eccetto epici come Drake/Baron). Pianta grove sui camp che si liberano da soli quando crescono."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot lineare lungo che radica il primo nemico colpito. Gli alleati che attaccano il bersaglio radicato dashano automaticamente verso di esso. Recast per dashare tu stesso."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiva: nei cespugli, gli auto attack di Ivern e degli alleati vicini fanno bonus magic damage. Attiva: crea un cespuglio dove vuoi per vision e zona di danno."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Mette uno scudo su un alleato (o su Daisy). Dopo 1.5s lo scudo esplode facendo magic damage e slow ai nemici vicini. Se non colpisce nessuno, lo scudo si rinnova."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Evoca Daisy, un golem alleato resistente. Il suo terzo auto consecutivo sullo stesso bersaglio lancia uno shockwave knockup. Recast per spostarla."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro CC pesante a singolo bersaglio incatenato sull'ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro composizioni con AOE engage (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "quando la principale minaccia avversaria e' una CC magica a lungo raggio puntata su di te"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini mobili che dive la back line (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni heal-stacking (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Crea pick con Q dalla fog, scuda il carry piu' forte con E in mezzo al fight, e piazza Daisy dietro la front line cosi' il suo terzo auto knockup pulisce i bersagli radicati. Powerspike forte al 6."
  weakness: "Non puo' fare 1v1 contro champion: gli auto sono deboli, il kit non ha escape. Recovery lentissimo se la tua jungla viene invasa prima di due grove; una Q whiffata in gank brucia tutto il setup."
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
    primary_rationale: "Sorcery primary: Aery viaggia su ogni E shield e procca anche sulla Q root. Manaflow Band sostiene il mana per E in continuo, Transcendence porta l'haste oltre 40 per Q piu' frequenti, Scorch chiude la finestra di poke nelle skirmish in lane."
    secondary_rationale: "Resolve secondary: Font of Life si attiva su ogni Q root — il tuo ADC heal quando attacca il bersaglio radicato, trasformando un singolo setup in burst piu' sustain. Revitalize amplifica gli scudi di Aery e il refund di E quando non colpisce nemici."
    secondary_alternative: "Se ti serve piu' uptime di Flash nei teamfight prolungati e il tuo ADC porta gia' sustain, swappa Resolve a Inspiration con Biscuit Delivery (mana e HP early) e Cosmic Insight (summoner spell haste, Flash e Smite piu' frequenti)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Carry immobili senza dash"
      reason: "Una Q dalla fog li radica; il dash automatico dell'ADC sul bersaglio attaccato chiude il gap prima che possano flashare, soprattutto dopo che Daisy entra per il knockup di follow-up."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Jungler scaling auto-attack-based"
      reason: "Il sistema di grove di Ivern salta del tutto il fight con i camp; mentre questi macinano auto sui mostri, Ivern e' gia' a scudare le lane e a settare root con l'ADC al livello 5."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Invader early-game"
      reason: "Ivern non puo' fare 1v1: la W ha bisogno di brush, la Q non ha escape. Un'invasione pre-3 distrugge i suoi grove e lo costringe a un clear difensivo che fa snowballare il vantaggio XP avversario per tutta la partita."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassini mobili che dive il carry"
      reason: "Saltano oltre il peel di Ivern e arrivano sul carry; lo scudo E si consuma in fretta sotto il burst, e l'unica hard CC e' una Q a windup lento che i dash schivano prima che parta."
    - examples: ["amumu", "zac"]
      archetype: "Tank con AOE hard-engage"
      reason: "I loro R-Flash prendono in un cono solo tutta la squadra accampata; un singolo E shield non puo' coprire piu' bersagli, e il knockup del terzo auto di Daisy arriva troppo tardi per salvare la backline."
---

## Panoramica

Ivern e' un jungler pacifista — e quella parola sola cambia tutto su come si gioca. La sua passiva gli vieta proprio di attaccare i mostri della jungla, quindi non scambia mai colpi dentro un camp. Al posto di farlo, pianta un seme di **Brushmaker (W)** su ogni camp, va via, e ci torna piu' tardi a trovare i mostri liberati per intero in oro ed esperienza. Il trade-off: mentre un jungler normale sta facendo full clear, Ivern sta scudando alleati, gating della vision sul fiume con brush attivo, e correndo cross-map per gank a livello 3 che arrivano prima che qualunque altro jungler sia anche solo arrivato sulla mappa.

Il game plan e' enchanter, non assassin. Atterri **Rootcaller (Q)** dalla fog of war, il tuo ADC dasha sul bersaglio radicato grazie al proc dell'auto-attack, gli droppi **Triggerseed (E)** addosso mentre engage, e al livello 6 piazzi **Daisy! (R)** dietro la linea avversaria cosi' il suo terzo auto consecutivo lancia un knockup garantito. Il kit non ha escape e gli auto fanno male poco — se fai un fight 1v1 contro un campione, perdi. Resta nella fog, resta vicino a un alleato, e lascia che la squadra porti il danno mentre tu porti i setup.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern e' ranged (475 di attack range), quindi Hailblade e' corretto rispetto a Emberknife. Smite resta obbligatorio: ti serve per Drake, Baron e Voidgrubs anche se non smiti mai un camp normale.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Hailblade (auto-evolve verso il minuto 3-4 una volta accumulata abbastanza XP). Companion per AP burst: aggiunge un proc di magic damage sull'auto post-cast, che si stratifica sopra il bonus brush della W.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. I tuoi shield e heal accumulano un effetto a catena che aumenta l'healing a ogni proc consecutivo — ideale per un enchanter che scuda, slowa e ri-scuda ogni 7-11 secondi.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'ability haste tiene Q ed E quasi sempre disponibili.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando la E scuda un alleato, la passiva del Censer gli da attack speed e on-hit magic damage. Si somma al bonus brush della W quando l'ADC sta combattendo dentro o vicino al cespuglio.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — secondo trigger di shield. Da' all'alleato scudato AP e ability haste extra per qualche secondo.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal/danno globale attivo con cast di 5 secondi: droppato su un fight raggrumato fa girare le barre HP.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — quando l'avversario incatena CC singola a lungo durata sull'ADC (Morgana Q, Ashe R, Lissandra R). Il cleanse attivo tiene il carry vivo piu' a lungo di qualunque shield.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro AOE hard-engage (Amumu R + Yasuo R wombo, Wukong R). L'attivo scuda piu' alleati contemporaneamente, cosa che la tua sola E non puo' fare.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — quando un assassin mobile (Kha'Zix, Zed, Akali, Talon) ti caccia esplicitamente. La stasi ti tiene vivo il tempo di far peelare Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp heal-stacking (Soraka, Yuumi, Aatrox, Vladimir). Il magic damage applica il taglio agli heal e tu casti abbastanza spesso da tenerlo permanentemente attivo.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** sono accettabili quando slow ovunque (Twitch, Ashe, Ahri W) ti si stratificano addosso; la perdita di ability haste e' reale, prendile solo quando la mobilita' e' davvero il problema.

**Skill order:** Maxa **E** per primo (lo scudo scala duro, lo slow blocca i dive), **Q** secondo (CD piu' basso = piu' root), **W** ultima (la passiva scala con i rank ma metti punti solo quando non ti rimane altro). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** con **Font of Life** e **Revitalize**.

## Matchup chiave

- **Lee Sin / Graves:** Hard counter. Entrambi invadono la tua jungla pre-3 e tu perdi ogni 1v1. Parti vicino alla tua lane piu' forte (dove l'alleato puo' ruotare per fightare 2v2) e piazza ward nei raptor e sulla red side. Se invadono, retreat e lascia che il laner punisca dalla fog: mai duellare.
- **Master Yi / Warwick:** Easy. Macinano auto sui camp per i primi livelli mentre tu salti il fight grazie ai grove; arrivi sulle gank lane con un livello in piu'. Una volta online Daisy, il suo knockup interrompe la R di Warwick e ferma Yi a meta' Alpha-Strike.
- **Karthus:** Race per il level 6. Lui globale dal minuto 6, tu radichi e Daisy dal minuto 6. La prima kill decide chi scala; se atterri una Q early su lui allo Scuttle, la tua squadra arrotola i 10 minuti successivi.
- **Kha'Zix:** Evitalo nella fog. Isola i bersagli squishy per bonus damage — quel bersaglio sei tu. Warda il lato sicuro della jungla, raggruppati con la squadra per gli obiettivi, e mai pathare da solo in fog non wardata dopo il minuto 8.
- **Vi:** Matchup pari deciso dalla prio in mid lane. La sua Q-Flash-R bypassa la tua Q, ma se la tua mid laner ha prio non puo' divare libera. Warda la sua flank route e pre-shielda l'ADC nel momento esatto in cui vedi l'animazione di carica della Q in vision.

## Power spike & condizioni di vittoria

- **Livello 3-4 (ciclo grove completo):** Una volta che due camp sono cresciuti e liberati, hai pareggiato il clear di un jungler normale in circa il 60% del tempo. Usa il surplus per camminare in una lane con la Q pronta prima che il jungler avversario sia al livello 4.
- **Livello 6 (Daisy! online):** La prima R sblocca il kit. Daisy e' un corpo tanky nei fight e il suo terzo auto knockup e' un tool di engage garantito. Cerca un pick gratis su un side laner subito dopo aver hittato il 6.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completo (~ minuto 11-13):** Le catene shield/heal cominciano a rampare. In ogni fight che dura piu' di 4 secondi, il tuo healing output stacca qualunque enchanter sulla mappa, Soraka esclusa.
- **Powerspike a 3 item (Moonstone + Boots + Ardent o Staff, ~ minuto 19-21):** Forza i fight per gli obiettivi. Il tuo ADC scudato picchia piu' forte e piu' veloce di quello avversario, e Daisy R prende un minuto pieno di cooldown — vuoi fightare ogni volta che e' up.

## Errori comuni

- **Smitare i camp normali.** Non puoi: la passiva te lo disabilita. Salva Smite esclusivamente per Drake, Baron, Voidgrubs, e quel raro furto cross-jungle sul red/blue avversario quando stanno per prenderlo. Smite sprecata su un'animazione di grove e' throw.
- **Attaccare tu il bersaglio radicato.** Quando lanci Q, non sei tu a dashare — e' l'ADC, automaticamente, quando attacca. Recasta Q solo se vuoi davvero divare (raro); altrimenti fai un passo indietro e scuda l'alleato che entra.
- **Castare W brush nei fight invece che nelle lane.** Il brush ha valore massimo nelle lane per vision permanente e zona di danno sopra la wave; in mezzo a un fight e' a malapena un tool di vision. Pre-piazza la W in tri-bush prima di un gank, non dopo.
- **Droppare Daisy a max range.** Il valore di Daisy sta nel knockup del terzo auto, che succede solo se lei effettivamente raggiunge il bersaglio. R dentro al fight, dietro la linea avversaria — non a 1500 unita' di distanza "per fare danno".
- **Provare a peelare contro AOE engage con un solo E shield.** L'E scuda un alleato alla volta. Contro Amumu R + Yasuo R che prendono quattro persone, ti serve il Locket of the Iron Solari. Pianifica quell'item dal momento in cui vedi il draft.

## Suggerimento avanzato

Usa il **piazzamento attivo di W brush** per simulare la fog dal punto di vista dell'ADC. Droppa un cespuglio al limite del range di un ward avversario — vedono il piazzamento ma non possono vedere chi ci entra dentro. Ruota il carry nel cespuglio, poi spara la Q attraverso la lane: i nemici non possono schivare uno skillshot lanciato da dietro un brush wall che non possono attraversare visivamente. E' lo stesso trucco che rende le early Ivern/Caitlyn duo una delle combinazioni di laning a piu' alto snowball del gioco, e scala con il completamento degli item perche' gli auto del carry scudato diventano martelli Ardent-empowered direttamente da dentro al brush.
