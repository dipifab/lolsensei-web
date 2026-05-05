---
title: "Jarvan IV Jungle Build & Guida — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "it"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida Jarvan IV jungle League of Legends Patch 16.9: starting items, build core, matchup chiave, power spike, errori comuni e una tecnica avanzata da provare."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "Il primo auto-attack su un bersaglio infligge danno fisico bonus basato sul suo HP attuale. Si ricarica ogni pochi secondi per bersaglio: incastralo nei combo."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Lancia in linea che danneggia e riduce armatura. Se attraversa una E flag attiva, Jarvan si tira al flag e knock-uppa i nemici sul tragitto."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Shield personale (scala col numero di champion nemici colpiti) e slow sui nemici vicini. Premilo PRIMA di E-Q, non dopo."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Lancia un flag che infligge danno magico all'impatto e da' attack speed agli alleati vicini. E' il setup del combo E-Q knockup."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Salta su un campione nemico, danneggia chi e' vicino e crea un'arena di muri impassabili. Riusa la R per far cadere i muri prima."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro team con tanto CC o AP (3+ stun/root, o 2 minacce magiche): swap dagli Steelcaps quando il CC pesa piu' del danno fisico"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "contro comp che ti kitano (Caitlyn, Senna, Kog'Maw, Jinx): MS e slow on hit ti aiutano a stare addosso al carry dopo R"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contro comp che si curano molto (Aatrox top, Yone bot, Soraka support): il burn taglia l'healing e aiuta nei waveclear tra obiettivi"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contro team che ti focussano (2+ nemici ti girano addosso quando entri con R): shield HP scatta sotto burst, tenacity passive riduce il CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro comp con due forti damage dealer fisici (es. Yasuo + Caitlyn): trasforma il danno fisico in bleed spalmato sui secondi successivi"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Becca il knockup E-Q su un bersaglio prioritario (carry o jungler avversario), poi R per chiuderlo nell'arena mentre il tuo team segue. Ripeti su ogni cooldown intorno agli obiettivi."
  weakness: "Se sbagli E o Q, hai speso il tuo unico hard CC e gap-close. Diventi un bruiser melee senza burst, facile da kitare per i marksman ranged con self-peel."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stacka su ogni colpo del combo E-Q-AA-R: quando arriva il knockup hai stack pieni per damage e healing. Triumph premia i takedown agli obiettivi, Alacrity velocizza gli auto per i proc di Martial Cadence, Coup de Grace rifinisce i target a basso HP chiusi nel Cataclysm."
    secondary_rationale: "Resolve secondary: Bone Plating assorbe il primo burst quando entri con R e il team nemico ti gira addosso, Revitalize potenzia lo shield di Golden Aegis che e' la tua unica difesa attiva mid-fight."
    secondary_alternative: "Contro team con tanto poke (Varus, Xerath, comp con Karma poke) swap Resolve con Inspiration: Magical Footwear (boots gratis per risparmiare gold sul primo item grosso) e Cosmic Insight (Flash piu' frequente per il trick E-Q-Flash)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Jungler skirmisher early-game"
      reason: "Jarvan trade alla pari al livello 3 con Q armor shred + E attack speed e supera in scaling la maggior parte dei jungler early una volta online Sundered Sky verso il minuto 12-14."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Bot lane immobili che hanno bisogno di peel"
      reason: "I muri di Cataclysm chiudono un carry posizionale dentro un'arena dove il suo support non puo' arrivare a difenderlo; il team nemico di solito non riesce a rispondere in tempo."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Mid-lane scaler stazionari"
      reason: "Il gap-close E-Q da fuori vision piu' i muri della R li privano dello spazio che il loro kit richiede; non hanno dash per uscire dall'arena prima che il tuo team converta."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "Jungler engage AOE con CC a piu' lungo raggio"
      reason: "Engagiano da fuori il range del tuo E-Q e ti incatenano in CC prima che tu raggiunga la backline; i muri non ti salvano se ti stunnano a meta' salto."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-game scaler con sustain integrato"
      reason: "Il power spike di Jarvan e' agli item 1-3 (intorno al minuto 20-25). Dopo cala, mentre questi target diventano piu' forti e sopravvivono al tuo singolo rotation."
    - examples: ["olaf", "tryndamere"]
      archetype: "Duellanti CC-immune"
      reason: "Olaf R e Tryndamere R ignorano la lockdown del Cataclysm: escono dall'arena colpendoti a danno pieno mentre il tuo unico engage e' in cooldown."
---

## Panoramica

Jarvan IV e' un fighter / diver in melee, cioe' un campione che chiude la distanza con un dash e si committa nel teamfight per bloccare un bersaglio chiave, costruito intorno a un combo signature: lancia un **E** flag, spara la **Q** attraverso il flag, vieni tirato al flag e knock-uppa tutti sul tragitto. Dopo il livello 6 aggiunge **R** Cataclysm, un'arena di muri che intrappola un singolo nemico con lui mentre il team converte la kill. E' uno dei jungler piu' facili da imparare (difficolta' 2/5 nella nostra scala) perche' il kit vuole sempre la stessa cosa: prendere E-Q su un bersaglio prioritario, R, vincere il fight.

Il game plan: clearare i camp jungle veloce con **E** attiva e Q armor shred, poi gankare (saltare in lane per aiutare a uccidere il nemico) sfruttando le lane che hanno un angolo di engage utilizzabile — mid attraverso la tri-bush (il cespuglio a tre angoli tra mid e side lane), top attraverso il river bush. Intorno a ogni spawn di obiettivo cerca di divare un carry (saltare addosso al nemico ad alto danno e poche difese che sta nelle retrovie). Skill expression sta nel trick **E-Q-Flash** — flag a terra, Flash in avanti, Q attraverso per un knockup non reattabile — e nel decidere **quando** usare la **R**: ne hai solo una a fight, non sprecarla sul tank della frontline.

## Build Consigliata

**Starting items:** Hailblade + Refillable Potion. Path standard junglecam pet quest. Sia Hailblade che Emberknife evolvono in uno di tre companion; vogliamo il pet AD skirmisher, vedi sotto.

**Core items (in order):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade da Hailblade (auto-evolve verso il minuto 3-4 una volta che hai abbastanza XP). E' il companion AD skirmisher: ti da' uno scatto di movement speed dopo ogni camp, che si traduce in gank piu' rapidi sulla mappa.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — il tuo primo item grosso. Il crit garantito sul primo colpo e l'on-hit heal si incastrano perfettamente con Martial Cadence: nel momento in cui knock-uppi il bersaglio fai crit e ti curi del danno preso per arrivargli addosso.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro la maggior parte dei team (la bot lane di solito sono due damage dealer fisici). Cambia in Mercury's Treads se la comp nemica e' prevalentemente AP e CC.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — l'armor shred si stacka con la passive della Q, piu' HP e ability haste perche' il tuo E-Q ricarichi piu' veloce.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — power spike tank late-game. La passive che stacka armor e magic resist ti trasforma da diver in frontline che resta dentro al fight per tutta la durata.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contro team con tanto CC o AP. Swap dagli Steelcaps quando il CC e' il problema piu' grosso del danno fisico.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — contro comp che ti kitano (Caitlyn, Senna, Kog'Maw — nemici che camminano all'indietro mentre ti attaccano per mantenere la distanza). MS e slow on hit ti aiutano a stare addosso alla backline (i carry ad alto danno che stanno dietro ai tank) dopo la **R**.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contro comp che si curano molto (Aatrox top, Yone bot, Soraka support). La passive burn taglia l'healing nemico.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — quando 2+ nemici ti focussano (girano i loro danni su di te) appena entri con R. Lo shield HP scatta (si auto-attiva) sotto burst (danno alto in 1-2 secondi) e la tenacity passive accorcia il crowd control (stun, root, slow).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contro comp con due forti damage dealer fisici (es. Yasuo + Caitlyn). Trasforma il danno fisico ricevuto in un sanguinamento lento (danno spalmato nei secondi successivi invece che istantaneo) cosi' hai tempo di reagire invece di farti deletare.

**Boots:** Plated Steelcaps di default. Mercury's Treads se il team nemico ha 3+ stun/root o due minacce AP.

**Skill order:** Maxa **Q** per prima (danno principale e armor shred), **E** seconda (cooldown piu' basso = piu' tentativi di gank e piu' opzioni di flag), **W** ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** con **Bone Plating** e **Revitalize**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchup chiave

- **Lee Sin / Graves:** Matchup pari nella jungle early. Tracka la loro prima clear; se partono red-side, contesta il loro secondo buff con E-Q. Entrambi possono fightarti al livello 3, quindi non invadere senza una lane prio (un compagno che ha spinto i nemici sotto torre e puo' ruotare in tuo aiuto) che ti copre.
- **Fiddlesticks / Amumu:** Evita di stare raggruppato con gli alleati nel mid-game. Il loro range di engage AOE supera la distanza del tuo **E-Q**: ti ultano mentre stai ancora camminando per piazzare il flag. Warda gli ingressi della tua jungle e non face-checkare i cespugli (camminarci dentro alla cieca senza vision, dove un nemico potrebbe essere nascosto).
- **Kha'Zix / Rengar:** Jungler assassini che vogliono one-shottare un carry. Counter-ganka (presentati nella stessa lane per ribaltare il fight) invece di fare full-clear: trade alla pari con loro al livello 3, e la tua **R** e' uno strumento di peel (un'abilita' usata per salvare il tuo carry da chi lo dive) quando saltano sul tuo carry — murali fuori dalla kill.
- **Olaf:** La sua R lo rende CC-immune, il che significa che **i muri del Cataclysm non lo fermano**. Se gli R, esce dall'arena colpendoti. Tieni la **R** per i suoi compagni dopo che ha bruciato l'ult, oppure pickalo come bersaglio solo se il tuo team riesce a kitarlo (arretrare attaccando, mantenendo la distanza) mentre e' chiuso dentro.
- **Sejuani / Maokai:** Jungler engage piu' tank di te. Li out-damaggi in 1v1 early ma volete entrambi lo stesso ruolo nel teamfight (chiudere un carry). La lane che snowballa per prima vince (becca una kill early che diventa un vantaggio gold che diventa altre kill); committati ai gank prima che finiscano il loro primo item.

## Power spike & condizioni di vittoria

- **Livello 3:** Con un punto in **Q**, **E** e **W** hai il combo completo E-Q-W per i gank. E' la tua prima vera finestra di gank, soprattutto mid lane attraverso la tri-bush.
- **Livello 6:** Si sblocca **Cataclysm**. Qualsiasi carry senza ward vicino al tuo river e' un'occasione di dive. Il trick: flag (E) appena oltre, R per tirarli verso di te, Q per knock-upparli — non possono rispondere alla lockdown senza **Flash** e una cleanse.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minuto 12-14):** Il tuo primo crit su Martial Cadence one-shotta i carry squishy (campioni ad alto danno e poche difese, tipo l'ADC) dopo E-Q. E' la finestra in cui devi gankare in cooldown e forzare i trade su drago.
- **3-item spike (Sundered Sky + Boots + Black Cleaver, ~ minuto 22-25):** Picco di teamfight. Il combo R + Q da solo cancella un carry di backline, e hai abbastanza HP per sopravvivere al focus subito dopo.

## Errori comuni

- **Lanciare la E sopra di te per il combo standard "knock up dove sono".** Funziona per i gank, ma in un fight dove il nemico si sta allontanando, la Q ti tira indietro. Lancia il flag *oltre* il nemico cosi' che il pull della Q ti porti in avanti dentro di lui, non lontano.
- **Premere W dopo l'engage.** Golden Aegis e' uno shield che scala col numero di champion nemici colpiti al momento del cast — usalo *prima* di E-Q cosi' lo shield e' al massimo e lo slow colpisce le persone su cui stai per atterrare, non il vuoto.
- **Ultare il tank della frontline.** Cataclysm chiude *un* solo nemico con te. Usalo sul carry (Caitlyn, Aphelios, Azir), non sul Sion che e' contento di starsene in un'arena chiusa con te.
- **Pulire tutta la jungle prima di gankare.** Out-tempi la maggior parte dei jungler con i gank E-Q al livello 3-4. Se fai full-clear prima del primo gank, regali il tuo vantaggio piu' grosso. Tassa 2-3 camp poi cerca un angolo.
- **Riusare la R per rompere il muro troppo presto.** I muri sono anche uno strumento di peel: se il tuo team sta vincendo il fight fuori dall'arena, lascia i muri su per impedire al carry intrappolato di unirsi. Riusa la R solo per inseguire chi scappa.

## Suggerimento avanzato

Allena il combo **E-Q-Flash**: lancia il flag, spara la Q, e Flash *durante* l'animazione della Q. Il knockup si applica nella tua destinazione, quindi knock-uppi nemici in un'area di 600 unita' oltre quello che si aspettavano — usato per engagiare da fuori il loro vision range, e' uno degli ingaggi piu' affidabili del gioco. Il trade-off e' che spendi Flash, quindi tieni il trick per i gank che assicurano una kill o il furto di un ward chiave. Allenalo nel Practice Tool una decina di volte prima di provarlo in ranked; la finestra di timing e' stretta.
