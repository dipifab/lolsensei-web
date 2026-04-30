---
title: "Aurora Mid Build & Guida — Patch 16.9"
slug: "aurora-mid"
language: "it"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Aurora mid per League of Legends Patch 16.9: starter kit, build burst-mage core, matchup chiave, power spike, errori comuni ricorrenti e una tip avanzata."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Le abilità di Aurora rilasciano spiriti dai nemici colpiti che la seguono e la curano al contatto. Sustain costante in lane e in teamfight."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Skillshot lineare che maledice i nemici colpiti. Recast: trascina la maledizione verso Aurora per un secondo colpo basato sugli HP mancanti."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash; all'atterraggio diventa invisibile e guadagna move speed. Si resetta sulle takedown. Strumento principale di mobilità."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "AOE magica che rallenta i nemici. Aurora hoppa indietro dopo il cast, ottenendo un disengage gratis dai trade ravvicinati."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Salto in una direzione; crea una zona slow che Aurora può attraversare teleportandosi. I nemici che entrano o escono sono rallentati di più."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini mobili (Zed, Fizz, Akali) — la stasi copre la finestra in cui W è in cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena un target prioritario compra un item di Magic Resist (sopra i 60 MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni con tanto healing (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Punisci gli errori di posizione con il W jump-in più Q recast burst quando hai Stormsurge e Shadowflame. Sfrutta i reset di W sulle takedown per cyclare i teamfight."
  weakness: "Hard CC prima di W chiude tutte le sue vie di fuga. I mage artillery a lungo raggio la pokano fuori dalla finestra di step-up prima che possa engageare."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
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
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Mage immobili senza escape"
      reason: "Questi mid non hanno dash né stealth: Aurora può W in una volta che Q è atterrata, finire la curse-recast davanti al loro naso e tornare indietro con W grazie al reset sulla takedown."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Melee mid a corto raggio"
      reason: "Aurora li out-rangea con il poke Q e usa il backward hop di E per rifiutare i trade; loro devono committare gap-closer che Aurora punisce con la Q recast in entrata."
    - examples: ["veigar", "ziggs"]
      archetype: "Burst mage a cast lento e immobili"
      reason: "Il loro kill pattern richiede che Aurora stia ferma per un proiettile lento o per una gabbia. L'invisibilità di W rompe il read sulla cast e le permette di sidesteppare il setup."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Mage artillery a lungo raggio"
      reason: "La pokano oltre il range di Q a ogni wave. Aurora non ha shield innato, quindi ogni step in avanti per piazzare E o Q costa HP che la passiva da sola non riesce a recuperare."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Assassini mobili con più gap-closer"
      reason: "La burstano nella finestra di cooldown di W. Anche con Zhonya's, una catena di dash più ulti la elimina prima che possa stasiare o riallineare W."
    - examples: ["yasuo"]
      archetype: "Champion con projectile block"
      reason: "Il Wind Wall di Yasuo annulla sia la Q in uscita sia il pull-back della recast, eliminando circa metà del damage in lane di Aurora con una sola abilità."
---

## Panoramica

Aurora è un mage magic-damage con un profilo **burst** — concentra quasi tutto il danno in una finestra di 1-2 secondi — e con strumenti da assassino: **Across the Veil (W)** è un dash più una breve invisibilità, e **Between Worlds (R)** è sia un salto d'engage (l'inizio di un teamfight saltando dentro per primo) sia una zona di repositioning. Il suo kit premia la lettura dell'avversario: piazza **Twofold Hex (Q)** a distanza, cammina avanti per allineare la recast, poi salta dentro con **W** quando il pull-back della curse è in linea. La passiva la cura ogni volta che gli spiriti esorcizzati dalle sue abilità la raggiungono — un livello di **sustain** in lane (capacità di recuperare HP durante la fase di lane senza tornare in base) che la maggior parte dei mid **squishy** (champion fragili, alti danni e poche difese, tipo Lux o Ahri) non ha.

Il suo game plan è vincere i **trade** brevi (scambi rapidi di colpi tra due champion, senza impegno per la kill) con **Q** più auto-attack mentre cerca la finestra di **all-in** — il momento in cui si impegna a portare a casa la kill — appena **W** torna disponibile. **W** ha anche un reset sulle **takedown** (kill o assist resettano il cooldown), quindi una kill pulita in lane le regala un secondo salto di uscita, e nei teamfight le permette di passare dal primo squishy abbattuto al successivo target sulla **back line** (i carry posizionati dietro ai tank).

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (un po' di AP — Ability Power, la stat che potenzia il danno magico — più mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La passiva di Aurora la cura già; Doran's Ring copre il mana che le serve early per usare ripetutamente **Q** in **poke** (danno a distanza usato per togliere HP all'avversario senza rischiare uno scontro vero).

**Core items (in ordine):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — il primo **spike** di Aurora (il momento in cui un champion diventa nettamente più forte, di solito completando un item). Quando danneggia un campione già a HP bassi, la passiva di Stormsurge si attiva (il **proc** è proprio questo: l'attivazione di un effetto bonus) e aggiunge danno extra più movement speed bonus, esattamente quello che serve ad Aurora per concatenare un W in entrata con la Q recast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — **magic penetration** flat (riduce la Magic Resist dell'avversario, quindi le tue spell fanno più danno), utile soprattutto contro target squishy.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — la passiva HP-threshold (danno magico extra quando il target è sotto ~35% HP) si sovrappone esattamente al burst della Q recast di Aurora, che fa più danno sui target con HP mancanti.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — un item da **scaling** late game (moltiplica l'AP di tutti gli altri item della build, quindi diventa sempre più forte mano a mano che il match avanza). Con Deathcap online la Q recast inizia a uccidere uno squishy in una sola combo prima che riesca a reagire.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini mobili (Zed, Fizz, Akali). L'attiva dà la **stasi** (per 2.5 secondi sei intoccabile, ma in cambio non puoi né muoverti né lanciare abilità). Usalo nella finestra in cui **W** è in cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — magic resist più uno scudo passivo che blocca la prossima ability nemica. Compralo contro **CC** magico single-target (CC sta per crowd control: stun, root, slow e simili, tutti effetti che ti tolgono il controllo del personaggio) che interrompe l'engage — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration percentuale. Compralo appena un target prioritario inizia a salire di Magic Resist (sopra i 60 MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applica Grievous Wounds, che taglia l'healing degli avversari. Compralo contro composizioni con tanto healing (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sono accettabili quando il team ha bisogno di più uptime sulla **R** per engageare.

**Skill order:** Punta tutti i primi punti su **Q** (è il danno principale e ciò che innesca il burst della recast), poi su **E** (fa clear delle wave di minion e il backward hop è un **disengage** gratis — il disengage è il modo per uscire da un fight già in corso), **W** per ultima. Un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Domination** con **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Secondaria **Sorcery** con **Manaflow Band** e **Transcendence**. Electrocute si attiva dopo tre colpi rapidi sullo stesso target — esattamente quello che fa Aurora in ogni trade breve con Q-auto-Q-recast — e Ultimate Hunter taglia il cooldown di **R** per un secondo engage in teamfight.

## Matchup chiave

- **Yasuo:** Il Wind Wall (la W di Yasuo, un muro di vento che blocca tutti i proiettili che lo attraversano) annulla entrambe le metà di **Q** (il missile in uscita e il pull-back della recast). Tieni **Q** finché Yasuo non usa il Wind Wall su una wave di minion, poi cammina avanti e fai trade con auto-attack ed **E** mentre il Wind Wall è in cooldown.
- **Zed:** Assassino mobile. Tieni **W** difensiva per quando atterra la sua **R**; non bruciarla in offensiva in lane. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item se anche il jungler avversario ha hard engage.
- **Anivia:** Immobile e vulnerabile a un W all-in una volta che il suo muro è giù. Cammina aggressivo sui posizionamenti del muro subito dopo che lo casta; il muro ha un cooldown lungo e a corto raggio Anivia non ha altro per minacciarti.
- **Lux:** Matchup pari o leggermente favorevole. La sua Q ti out-rangea, ma tu vinci gli scambi brevi grazie a **W** più auto-attack. Fai sidestep alla sua **E** mentre la sta piazzando (la animazione di cast è visibile prima che la spell atterri), poi cammina dentro.
- **Twisted Fate:** Gara a chi roam per primo (un **roam** è quando lasci la tua lane per andare a fare azioni altrove sulla mappa). Se ti picka la gold card, **W** lateralmente prima che la carta atterri — il dash rompe il lock-on. Controlla la sua **R** con **ward** (totem che danno visione di un'area per qualche minuto — piazzane sugli ingressi del river e nel tri-bush, il cespuglio nell'incrocio fra mid lane e river); se ulta, segnala con un ping mid-mia (il classico "missing in action" che avvisa il team che il tuo laner è appena sparito) e roam anche tu.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in **W** all'improvviso hai mobilità — la prima finestra di all-in si apre se l'avversario è sotto al ~70% HP. Cammina su, **Q**, auto-attack, poi **W** dietro a lui e **Q** recast.
- **Livello 6:** La prima **R** sblocca il repositioning cross-zona che ti permette di impegnarti in un 1v1 anche sotto torre nemica, perché **R** ti dà una via di fuga incorporata attraverso la zona.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completion (~ minuto 12-14):** primo spike da assassinazione. Adesso puoi uccidere uno squishy al 100% di HP con la combo intera, e il reset di **W** sulla takedown rende realistica una seconda kill nello stesso teamfight.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** la Q recast sugli HP mancanti inizia a uccidere in una sola combo qualsiasi target che non ha comprato un item di Magic Resist. Forza i fight intorno agli obiettivi (drago, baron, herald, voidgrub) appena questo è online.

## Errori comuni

- **Bruciare W in entrata invece di salvarla per il reset.** **W** si resetta sulle takedown. Se usi **W** per fare engage, finisci la kill nella stessa finestra in modo che il reset ti dia l'uscita. Se la kill non è garantita, tieni **W** e usa il backward hop di **E** per disengage.
- **Dimenticare la Q recast.** **Twofold Hex** fa auto-recast quando la duration scade, ma la recast manuale ti permette di scegliere l'angolo del pull-back. Camminare due passi avanti prima di recastare trascina il secondo colpo attraverso più nemici per **AOE damage** (area-of-effect — danno che colpisce più nemici in una zona, non solo un singolo target).
- **Restare nella propria zona di R quando lo slow è scaduto.** **Between Worlds** ti chiude visivamente in un'area marcata; una volta esaurito lo slow di entrata/uscita, la zona è solo un cartello che dice "collassate qui". Esci attraverso il bordo nel momento in cui la kill è sicura.
- **Accumulare AP senza magic penetration.** Comprare ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** prima di ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** o ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** è una perdita di damage contro qualsiasi target con anche solo MR base. Penetration prima, AP raw dopo.
- **Usare R per engageare quando il team non ti segue.** **R** è un impegno con cooldown lungo — bruciarla per nulla perché il team stava clearando una side wave è il **throw** più comune (un throw è quando butti via una partita vinta con un commitment incauto). Segnala l'engage con un ping tre secondi prima di castare, in modo che il team abbia il tempo di girarsi nella direzione giusta.

## Suggerimento avanzato

Usa il bordo del realm-hop di **R** come strumento di **kite** (kitare significa fare danno mentre arretri, in modo che il nemico non riesca a raggiungerti) e non solo di engage. Casta **R** dietro a un nemico in fuga in modo che la zona slow gli chiuda la linea di scampo, poi salta attraverso l'area per tagliargli l'angolo. Lo slow su entrata e uscita significa che l'unica via sicura fuori dall'area è la strada lunga — di solito abbastanza lunga da farti landare una **Q** più un auto-attack e chiudere la kill.
