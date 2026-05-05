---
title: "Ivern Support Build & Guida — Patch 16.9"
slug: "ivern-support"
language: "it"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Guida completa a Ivern support in patch 16.9: build enchanter, trucchi di vision con il brush, setup di root con Q, peel di Daisy, matchup chiave bot."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Support di setup"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Non puo' attaccare i mostri della jungla, e loro non possono attaccarlo. Pianta grove sui camp che si liberano da soli — utile anche da bot lane per oro gratis nei reset."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot lineare lungo che radica il primo nemico colpito. Gli alleati che attaccano il bersaglio radicato dashano automaticamente verso di esso. Recast per dashare tu stesso."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiva: nei cespugli, gli auto di Ivern e degli alleati vicini fanno bonus magic damage. Attiva: crea un cespuglio dove vuoi per vision e zona di danno."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Mette uno scudo su un alleato. Dopo 1.5s lo scudo esplode facendo magic damage e slow ai nemici vicini. Se non colpisce nessuno, lo scudo si rinnova per la stessa durata."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Evoca Daisy, un golem alleato resistente. Il suo terzo auto consecutivo sullo stesso bersaglio lancia uno shockwave knockup. Recast per spostarla."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "contro fight late-game raggrumati dove l'AOE heal/danno globale conta piu' del peel a singolo bersaglio"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro composizioni con AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magica singola pesante puntata su di te (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni heal-stacking (Soraka, Yuumi, Aatrox, Vladimir bot lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Sfrutta i cespugli laterali per imboscata: pre-piazza W per vision, spara Q dalla fog, e l'ADC dasha sul bersaglio radicato. Dopo il 6, roam mid per pick ripetuti con Daisy e snowballa la mappa."
  weakness: "Squishy, niente peel contro hard engage multi-bersaglio. Una Q whiffata in lane ti costringe al backoff fino al cooldown — i 14s di Q al rank 1 sono la finestra morta piu' lunga di qualunque support roaming."
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
    primary_rationale: "Sorcery primary: Aery viaggia su ogni E shield verso l'ADC e procca anche sulla Q root. Manaflow Band paga la E in continuo, Transcendence porta l'haste oltre 40 per Q piu' frequenti, Scorch chiude la finestra di poke quando la lane si stabilizza."
    secondary_rationale: "Resolve secondary: Font of Life si attiva su ogni Q root — il tuo ADC heal quando attacca il bersaglio radicato, trasformando un singolo setup in danno piu' sustain. Revitalize amplifica Aery e il refund di E quando non colpisce nemici."
    secondary_alternative: "Se la tua squadra ha bisogno di piu' roam in mid e l'uptime di Flash conta, swappa Resolve a Inspiration con Magical Footwear (boots upgrade gratis al minuto 12) e Cosmic Insight (summoner spell haste — piu' Flash e Ignite per partita)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook support che si spingono avanti per gli skillshot"
      reason: "Devono camminare in avanti dentro il range della Q per atterrare il loro hook — la Q + dash dell'ADC punisce il windup con un root garantito prima che l'hook esca dall'animazione di cast."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support immobili da poke"
      reason: "Non hanno dash. Q dal brush + follow-up dell'ADC li cancella; la W attiva crea una zona vision-piu'-danno gratis che non riescono a contestare senza bruciare summoner spell."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Enchanter puri senza lockdown"
      reason: "Inseguono l'ADC con heal e shield ma non portano peel contro un setup root; la Q prende il carry, lo slam di Daisy segue, e l'enchanter non ha risposta a un root da 1.75s."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "Tank engager all-in"
      reason: "Flashano avanti e incatenano CC sull'ADC prima che Ivern possa atterrare la Q. Non ha peel contro engage multi-CC; un singolo E shield rompe in un istante sotto una stun chain a 2 bersagli."
    - examples: ["lux", "zyra"]
      archetype: "Mage support da zone control / lungo raggio"
      reason: "La E di Lux taglia gli angoli di brush di Ivern e poke fuori dal range della Q; il seed-and-plant di Zyra controlla la zona meglio del W passive di Ivern senza mai farsi avanti."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Support da peel anti-CC con cleanse o eat"
      reason: "La E di Morgana spell-shielda il root della Q completamente, annullando tutto il setup; la W di Tahm Kench ingoia l'ADC fuori dal raggio dello slam di Daisy prima del terzo auto."
---

## Panoramica

Ivern come support e' uno dei pick piu' insoliti della bot lane: un enchanter che puo' generare cespugli dove vuole, radicare un campione attraverso la mappa, ed evocare un golem tanky al livello 6. La sua passiva gli vieta proprio di autoare i mostri della jungla, ma non gli impedisce di passare per la jungla bot side nei reset e piantare semi di **Brushmaker (W)** sui Krug o sui Wolf — e' oro gratis mentre il tuo ADC pusha la wave. E' squishy, non ha escape, e muore nei trade 1v1 — ma nessun altro support puo' creare un brush wall in mezzo a un fight, negare vision, e convertire una singola Q in una kill garantita come fa Ivern.

Game plan: pre-piazza il W brush nel river bot o nel tri-bush prima che la wave ti raggiunga, spara la Q da dentro quel brush cosi' il nemico non vede mai il cast, droppa la E sull'ADC nel momento in cui dasha sul bersaglio radicato, e dopo il livello 6 ruota mid con Daisy per pick cross-map. I fight non si vincono col danno di Ivern — si vincono coi suoi setup, mentre il carry fa l'uccisione vera.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. World Atlas e' l'unico starter da support sensato — auto-upgrada attraverso le quest in ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e infine ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support, generazione di oro tramite assist e minion eseguiti. Non last-hittare: lascia che farmi sia l'ADC.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'ability haste tiene Q ed E quasi sempre disponibili.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. I tuoi shield e heal accumulano un effetto a catena che aumenta l'healing a ogni proc consecutivo — ideale per un enchanter che scuda, slowa e ri-scuda ogni 7-11 secondi.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando la E scuda l'ADC, la passiva del Censer gli da attack speed e on-hit magic damage. Si somma al bonus brush della W quando l'ADC sta combattendo dentro o vicino al cespuglio.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — secondo trigger di shield. Da' all'alleato scudato AP e ability haste extra per qualche secondo.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanse attivo sull'ADC. Risolve le CC singole pesanti che nessuno scudo riesce a coprire.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contro fight late-game raggrumati dove l'AOE team-wide swing piu' di un Mikael's cleanse.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo). Una E non scuda quattro persone; l'attivo del Locket si'.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — quando ti hard-CC-ano specificamente (Lux Q, Morgana Q, Zoe E sleep). Il primo proiettile viene mangiato e tu vivi abbastanza da castare Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp heal-stacking (Soraka mid, Yuumi support, Aatrox top). Il magic damage applica il taglio agli heal su ogni spell.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** accettabili in comp da heavy roaming dove la velocita' di rotazione conta piu' dei cooldown in fight.

**Skill order:** Prendi **Q** al livello 1 per cheese-invade in brush level-1, poi maxa **E** per primo (lo scudo scala, lo slow blocca i dive), **Q** secondo (CD piu' basso = piu' root), **W** ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** con **Font of Life** e **Revitalize**.

## Matchup chiave

- **Leona / Alistar:** Hard counter. La loro flash-engage incatena CC sull'ADC prima che la tua Q parta. Stai a max range del W brush, non pathare mai tra le wave dove il loro flash arriva, e pre-shielda l'ADC nel momento in cui i loro summoner sono up.
- **Thresh:** Skill matchup. Entrambi i support vogliono settare un singolo hook/root per una kill, ma Ivern vince la guerra del range (Q a 1125 unita', hook di Thresh a 1100). Stai fuori dal range dell'hook, spara la Q dal brush; se hooka prima lui, droppa E sull'ADC e cammina via.
- **Lux:** Bully da lane. Ti poke con E-Q mentre tu non hai nulla da rispondere — la tua Q e' un setup da kill, non un tool da poke. Trade solo quando la sua Q e' in cooldown; porta Banshee's Veil se continua ad atterrare il binding.
- **Yuumi:** Pick gratis. Deve staccarsi per lanciare gli skillshot, e nel momento in cui lo fa e' un bersaglio da 600 HP senza escape. Q al detach, ADC dasha, kill gratis — ripeti ogni 14 secondi.
- **Pyke:** Fightalo nel brush. La tua W passiva potenzia gli auto tuoi e dell'ADC nel cespuglio; Pyke perde ogni trade nel brush perche' il windup della sua Q e' visibile mentre la tua Q lanciata da dentro il W-piazzato e' completamente oscurata.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Prima finestra di all-in. Con un punto in Q per il setup e una E per scudare il dash, tu e l'ADC scambiate un Flash garantito per la barra HP dell'ADC avversario. Pusha il livello 2 hittando insieme i caster della seconda wave.
- **Livello 6 (Daisy! online):** Finestra di roam cross-map. Daisy e' abbastanza tanky da reggere torre per 4-5 secondi, e il suo terzo auto knockup e' engage quando l'ADC ha Flash. Roam mid nel momento in cui hai Daisy e una wave shovata.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completo (~ minuto 13-15):** Le catene shield/heal rampano. In ogni fight che dura piu' di 4 secondi il tuo healing output stacca quello del support avversario anche se sono Soraka o Sona.
- **Powerspike a 3 item (Moonstone + Boots + Ardent o Staff, ~ minuto 22-24):** Forza i fight per gli obiettivi. Il tuo ADC picchia piu' forte e piu' veloce del loro grazie ai tuoi shield trigger, e Daisy R cala col completamento degli item.

## Errori comuni

- **Last-hittare i minion.** Il proc di esecuzione di World Atlas ti da l'oro anche se la kill la fa l'ADC — non rubargli i CS. Sta una fila di minion dietro l'ADC a meno che tu non stia settando un freeze.
- **Whiffare la Q a long range senza follow-up.** La Q e' 14s al rank 1 — un cast mancato significa 14 secondi senza pulsante kill. Se l'avversario la sta schivando, cammina prima dentro un brush, poi spara da un angolo piu' chiuso che non si aspetta.
- **Castare W brush nei fight invece che pre-piazzarla.** Un brush creato in fight e' a malapena un tool di vision — il valore e' nel pre-piazzamento: piazzane uno in tri-brush 5 secondi prima di un roam, o nel mid-river prima di una call sul Drake. Brush in mezzo al fight e' reactive quando il kit ti vuole proactive.
- **Droppare Daisy a max range in un teamfight.** Daisy deve raggiungere un bersaglio e atterrare tre auto consecutivi per il knockup. R a 1500 unita' di distanza significa che cammina per 4 secondi prima del primo auto — a quel punto il fight e' finito. R dietro la linea avversaria, non "per fare danno".
- **Provare a peelare uno-contro-molti con la sola E.** L'E scuda un bersaglio. Contro AOE engage che colpisce ADC + mid laner + te, un solo shield non basta. Pianifica Locket of the Iron Solari dal draft nel momento in cui vedi la wombo comp.

## Suggerimento avanzato

Usa il **W brush attivo** per fabbricare angoli di Q che il nemico non puo' schivare. Pattern standard: piazza il brush 600 unita' davanti a te, cammina dentro al cespuglio (diventi invisibile al nemico se non ha vision nella patch), spara la Q da dentro al brush — il proiettile parte da una posizione che il nemico non poteva prevedere perche' non vede il cast. E' funzionalmente un root gratuito a 1125 di range senza bisogno di fog, ed e' il motivo per cui Ivern eccelle nelle duo lane con Caitlyn, Senna o Jhin: ogni ADC che vuole attaccare da lontano riceve un dash gratis su un setup di kill garantito che il nemico non puo' preparare.
