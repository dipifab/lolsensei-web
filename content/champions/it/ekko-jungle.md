---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "it"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Ekko jungle per League of Legends Patch 16.9: clear, build AP assassin, gank pattern, power spike, errori comuni e un ultimo consiglio avanzato."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "Ogni terzo colpo (auto o spell) sullo stesso bersaglio infligge danno magico bonus e regala a Ekko un breve scatto di velocità se il bersaglio è un campione."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Skillshot a boomerang: una granata parte, rallenta i nemici colpiti, poi torna verso Ekko con un secondo tick di danno separato. Entrambi i passaggi colpiscono."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Passive: danno magico bonus sulle auto contro nemici a basso HP. Active: piazza un cerchio ritardato a terra che rallenta e poi stunna brevemente se Ekko ci entra."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Dash breve che potenzia la prossima auto, teleportando Ekko sul bersaglio con danno bonus. Gap-closer principale e trigger del terzo colpo passivo."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Riavvolge la posizione di Ekko a dove si trovava ~4 secondi prima, infligge danno magico in area e cura in base al danno subito in quella finestra."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs burst AD pesante (Zed, Talon, Kha'Zix, Rengar) — la stasi annulla la loro finestra di kill dopo il riposizionamento di R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena un bersaglio prioritario compra MR (es. Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comp con healing (Soraka, Aatrox, Dr. Mundo, Vladimir) — applica Grievous Wounds sul danno"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "vs carry mobili sfuggenti (Vayne, Ezreal, Tristana) — slow su ogni hit, Q + E si attaccano facili"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "late game vs frontline che stacka MR — magic pen e una piccola cura post-takedown"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Piazza W stun dalla fog, entra con E, e resetta i fight con R quando sei a basso HP. Snowball early-to-mid ganckando lanes pre-6 e forzando skirmish sugli obiettivi."
  weakness: "Clear iniziale debole e range corto: un jungler da invade aggressivo lo punisce al livello 3. R è su cooldown lungo — quando è giù, Ekko non ha più un panic button."
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
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishy senza CC point-and-click"
      reason: "Il setup W + E di Ekko chiude il gap prima che finiscano una rotazione di kite; il reset con R rende l'all-in sicuro anche se la loro squadra ruota in aiuto."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmisher scaling con early debole"
      reason: "I gank pre-6 al livello 3 con W + E + Q li prendono mentre farmano camp; una sola kill costruisce il gold lead per assassinare i carry entro il minuto 14."
    - examples: ["amumu", "zac"]
      archetype: "Tank engage senza dash"
      reason: "La mobility di Ekko (E + R rewind) schiva il loro engage telegrafato, e il burst AP picchia forte sui tank con poca MR. Li kite dietro angoli e brucia i loro carry dalla fog."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Junglers da invade early forte"
      reason: "Il primo clear di Ekko è sotto media e il duel al livello 3 è debole. Camminano nella sua jungle, lo uccidono prima che W ed E siano maxati, e snowballano con la bounty."
    - examples: ["nocturne"]
      archetype: "Junglers con pressione globale e spell shield"
      reason: "L'E di Nocturne è uno spell shield che blocca lo stun della W di Ekko (= l'abilità che setup ogni gank). Senza stun il gank fallisce, e la R di Nocturne supera i suoi tool di counter-gank."
    - examples: ["galio", "maokai"]
      archetype: "Junglers/laners con MR alta early"
      reason: "I campioni che stackano MR presto (Galio, certe build di Maokai) smussano il mid-game spike di Ekko: quando il combo Lich Bane scheggia invece di one-shottare, lo snowball plan si ferma."
---

## Panoramica

Ekko è un assassin AP (= Ability Power, la stat che scala il danno magico) jungler che one-shotta i carry squishy con un combo veloce W stun → E dash → AA + Q. La sua passiva **Z-Drive Resonance** premia la sequenza di tre colpi sullo stesso bersaglio con danno magico bonus e un burst di movement speed: la rotazione di danno è costruita per mettere a segno tre cose veloci, non per spammare spell. La sua **Chronobreak (R)** è la rete di sicurezza: lo teleporta a dove si trovava ~4 secondi prima e cura in base al danno subito in quella finestra, quindi può buttarsi nel fight, prendere rischi, e annullare la conseguenza se sopravvive al channel.

Game plan: clear pulito dei primi camp, gank al livello 3 su una lane con poca mobility (Lux, Senna, Veigar, mid laner immobili), forza Scuttle (= Crab, il mostro neutrale del fiume, dà vision e un piccolo buff di movement speed) sul lato dove la tua squadra ha prio (= priority, il tuo laner sta pushando dentro e può ruotare senza perdere CS), e snowball (= trasformare un piccolo vantaggio early in un vantaggio molto più grande) nelle skirmish (= fight piccoli 1v1 o 2v2, non un teamfight pieno) attorno al secondo drake. Ekko non è un campione scaling (= che diventa più forte col passare dei minuti): se arrivi al minuto 25 senza kill, l'ADC nemico finisce 2 item e tu smetti di one-shottare chiunque.

## Build Consigliata

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (il jungle pet AP-friendly — applica danno on-hit ai campioni nemici durante i gank) più **Smite** (la summoner spell che ogni jungler prende — un attacco veloce di burst su singolo bersaglio, usata sia per clearare i camp più in fretta sia per rubare obiettivi come Drake o Baron alla squadra avversaria).

**Core items (in ordine):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primo spike AP. Danno bonus on-cast e mana sustain: la rotazione Q + W + E spezza il bersaglio prima ancora che l'auto della E atterri.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (= ignora una parte della MR del nemico). I carry squishy hanno ~30 MR base, quindi la pen flat si traduce in danno extra puro.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= la prossima auto dopo una spell infligge un grosso danno magico bonus). La E di Ekko già potenzia la prossima auto, quindi Lich Bane ci si appoggia sopra: è l'item che trasforma il dash della E in un one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra (= molto danno in 1-2 secondi). La passiva HP-threshold (= passiva che si attiva sotto una soglia di HP) si allinea con i finisher dopo il reset della R.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP late game e lo slot a soffitto più alto della build.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro AD assassin (Zed, Talon, Kha'Zix, Rengar). La stasi (= Ekko diventa invulnerabile ma immobile per 2.5 secondi) compra tempo per i cooldown e, in coppia con R, ti fa sopravvivere a qualsiasi all-in AD.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un bersaglio prioritario costruisce MR (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). Il magic pen percentuale scala con quanta MR il target stacka.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp con healing (Soraka, Aatrox, Dr. Mundo, Vladimir). Applica Grievous Wounds (= debuff che dimezza l'healing del bersaglio) sul danno.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contro carry ranged mobili (Vayne, Ezreal, Tristana). Ogni hit di spell applica uno slow, quindi Q + E li tiene fermi per la kill.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — sostituisce Shadowflame late game contro frontline che stacka MR. Magic pen e una piccola cura revive sui takedown.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è accettabile quando la squadra ha bisogno di più uptime di R come tool di re-engage (= la tua ulti che torna prima ti fa flippare un secondo teamfight).

**Skill order:** Maxa **Q** prima (waveclear e poke principale), **E** seconda (danno del dash), **W** ultima. Punto in **R** ai livelli 6, 11, 16. Inizia con **Q** al livello 1 per il clear più sicuro, poi **E** al 2 e **W** al 3.

**Runes:** Le rune sono bonus passivi che scegli prima della partita; modellano le tue stat early e lo stile di danno. Albero primario **Domination** (l'albero degli assassin — bonus stat che premiano i pickoff su bersagli isolati) con **Electrocute** (dopo aver colpito un campione con tre fonti di danno separate entro 3 secondi, il prossimo hit fa burst bonus — il chain W + E + Q lo procca perfettamente), **Sudden Impact** (magic pen extra per 4 secondi dopo un dash o stealth), **Sixth Sense** (rivela automaticamente le ward nemiche vicine con un cooldown lungo — pressione di vision per il pathing in jungle), **Ultimate Hunter** (riduce il cooldown della R per ogni takedown unico). Albero secondario **Sorcery** con **Manaflow Band** (rimborso mana sui colpi di spell, sistema il piccolo mana pool di Ekko) e **Transcendence** (ability haste — le tue abilità tornano prima — che scala l'intero kit).

## Matchup chiave

- **Lee Sin:** Invade early forte (= un jungler che cammina nella tua jungle per ucciderti prima che hai item). Tieni vision sui tuoi buff (= i camp piccoli che danno un bonus stat temporaneo, blue e red). Evita di fightarlo prima del livello 4 — il suo duel early è meglio del tuo.
- **Karthus:** Matchup gratis. La sua R fa danno alla tua squadra in tutta la mappa, ma ha zero mobility — W sotto i suoi piedi, E in, Q + AA e muore in una rotazione (= una sequenza completa di abilità). Counter-jungla (= rubagli i camp) dopo ogni gank che committa.
- **Master Yi:** Rivale scaling. Uccidilo prima del minuto 20 o accetta che ti supera nel teamfight tardo. Forza il fight sullo spike ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** e divegli la bot lane mentre lui farma camp.
- **Sejuani:** Matchup ostico. La sua R è point-and-click (= non serve mirare, l'abilità si aggancia al bersaglio) e ti congela durante il dash della E. Aspetta che la usi su qualcun altro, poi committa. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima del solito.
- **Rammus:** Evita fight 1v1. La sua passiva di spine riflette parte del danno delle tue auto; tu fai soprattutto danno magico (buono contro le spine) ma il suo W steroid (= un moltiplicatore temporaneo di armor e riflessione) smussa la tua auto Lich Bane. Farma il lato opposto della jungle e raggruppati solo con la squadra.

## Power spike & condizioni di vittoria

Un power spike è il momento in cui il campione diventa improvvisamente più forte di un minuto prima — di solito quando una nuova abilità o un item entrano online.

- **Livello 3:** Primo combo **W** + **E** + **Q** sbloccato. Puoi finalmente ganckare le lane pre-6 (= prima che la R sia online): piazza la W nella fog (= zona buia fuori vision, dietro un cespuglio o un muro), aspetta che il nemico ci entri per lo stun, dash con E, Q in uscita. È il pattern di gank pre-6 più forte di Ekko.
- **Livello 6:** **Chronobreak (R)** online. Ora ogni dive (dive = camminare sotto torre per uccidere un bersaglio a basso HP) è recuperabile: prendi i tiri della torre, uccidi il bersaglio, R indietro al sicuro. Forza un fight o un drake subito.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 10-12):** Primo vero spike di danno. Spezzi gli squishy con la sola Q e one-shotti i nemici sotto il 60% HP col combo pieno. Cerca pick (= uccidere un nemico isolato fuori posizione) sulle side lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minuto 16-18):** Questo è LO spike. L'auto potenziata della E più Spellblade di Lich Bane togliono ~50% HP a un ADC con un singolo dash. Raggruppati su drake e Baron — ogni nemico isolato muore in un combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Anche i bersagli che stackano MR cedono al burst pieno. Se l'ADC nemico non ha comprato ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) o Quicksilver Sash, il tuo reset con R è una kill gratis sulla backline.

## Errori comuni

- **Ganckare le lane pre-3 senza piazzare la W.** Senza stun della W, il gank di Ekko è solo un dash E lento — facile da kitare (kite = muoversi all'indietro mentre attacchi, mantenendo distanza). Semina sempre la W nella fog 2 secondi prima di camminare in lane: lo stun ritardato becca il nemico quando reagisce al dash.
- **Premere R appena scendono gli HP.** Chronobreak ti rewinda a una posizione di 4 secondi prima. Se ulti al primo auto subito, torni nel fight da cui volevi scappare. Aspetta — assorbi danno durante il channel della R (= il tempo di windup prima che si attivi) così la cura finale è più grande, e la destinazione è davvero più sicura.
- **Spammare Q per il waveclear in jungle.** La Q costa molto mana e il ritorno del boomerang è il tick di danno più grosso. Cammina oltre il camp così il ritorno tocca il pacchetto due volte; spammarla da fermo spreca il secondo hit.
- **Forzare Drake senza prio.** Lo smite-fight di Ekko (= il momento in cui entrambi i jungler committano Smite su un obiettivo conteso) è mediocre perché la R si cancella se viene interrotta a metà channel. Se i tuoi laner non hanno prio (= lane spinta, liberi di ruotare), lascia il drake e farma vision.
- **Ignorare la passiva del terzo colpo nelle skirmish.** Z-Drive Resonance raddoppia il danno del trade quando metti tre hit in sequenza sullo stesso bersaglio. Tirare la Q sulla wave per poke spreca lo stack su un minion. Tieni la Q per i trade sui campioni, non sui creep che non ti serve clearare.

## Suggerimento avanzato

Usa **Parallel Convergence (W)** come tool di vision pre-emptivo, non solo come setup di stun. Castare la W piazza il cerchio a terra 3.5 secondi prima dell'attivazione, e durante il windup vedi se qualcuno passa nell'area — un fog check gratis su un chokepoint (= passaggio stretto che il nemico deve attraversare) o dietro un drake pit. I pro usano il trick per scoutare il jungler nemico che attraversa il fiume, poi committano il gank con lo stun pronto o ruotano via senza committare. L'abilità diventa pick tool e ward (= il piccolo oggetto che dà vision in un'area) allo stesso tempo.
