---
title: "K'Sante Top Build & Guida — Patch 16.9"
slug: "k-sante-top"
language: "it"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "Guida K'Sante top lane per League of Legends Patch 16.9: starter kit, build tank-skirmisher, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "Le abilità marchiano il bersaglio. La prossima auto-attack di K'Sante infligge danno bonus. In forma All Out, tutti gli attacchi e le abilità infliggono danno extra."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "Colpo lineare corto che infligge danno e rallenta. Ogni hit dà uno stack: a 2 stack il prossimo cast è una shockwave che attira e stuna. CD basso, è lo strumento di trade spammabile."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "Si carica (unstoppable + forte riduzione danno) poi parte in dash, sbalzando e stunando i nemici colpiti. In All Out infligge true damage bonus ma perde sbalzo e stun."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "Dash corto + scudo personale. Se targettato su un alleato, la distanza del dash aumenta e l'alleato viene scudato anch'esso. In All Out CD ridotto e dash più veloce."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "Sbalza un campione nemico: se sbatte contro un muro subisce danno extra. K'Sante poi gli arriva alle spalle e si trasforma — guadagna attack speed, armor pen e omnivamp, ma perde max HP e bonus resistenze."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro AD che attacca e cura (Aatrox, Trundle, Nilah, Yi) — applica grievous wounds (40% di cure ridotte) sull'attaccante"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro burst AP (Mordekaiser, Vladimir, Diana) — magic resist + 25% bonus a cure/scudi (heal Sundered Sky, omnivamp R)"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contro carry ad attack speed alta (Vayne, Kog'Maw, Yi) — aura che toglie 20% AS ai nemici vicini, neutralizza il loro DPS"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha 2+ minacce di CC pesante o un AP top — danno magic resist + tenacity"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "Fai da front line nei teamfight: carica W per fermare gli engage, tieni R per un carry chiave da slammare contro un muro. In forma All Out chiudi i backline a basso HP con burst di AS + armor pen."
  weakness: "Range corto (W è 600, niente vero gap-closer oltre E). I kiter ranged lo pokano fuori dalla lane. La R All Out è un commitment lungo: perdere il fight da trasformato lo lascia senza win condition per 80-120s."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Grasp of the Undying dà HP scaling gratis ad ogni proc, perfetto per un tank che scala. Shield Bash trasforma lo scudo di E in danno bonus sulla prossima AA — sinergia diretta col proc della passive. Conditioning + Overgrowth bloccano la tankiness late."
    secondary_rationale: "Sorcery secondaria: K'Sante è mana-hungry e ability-haste-hungry. Manaflow Band sostiene il mana per spammare Q in lane; Transcendence dà ability haste e refunda cooldown su takedown — fondamentale per concatenare la R."
    secondary_alternative: "Contro matchup di poke pesante o di scaling (Vayne, Teemo, Jayce), swap Sorcery → Inspiration con Biscuit Delivery (HP + mana biscuits gratis early) + Cosmic Insight (Flash e summoner spell con cooldown ridotto)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Bruiser melee immobili senza dash"
      reason: "La W di K'Sante li stuna a metà tentativo e la R con wall slam punisce la loro mancanza di escape; lo stun a 2 stack di Q interrompe i loro wind-up chiave (pull di Darius, E spin di Garen) prima che la spell finisca."
    - examples: ["renekton", "riven", "camille"]
      archetype: "Diver dipendenti da combo con un solo commit window"
      reason: "Lo stun di Q e il 40%+ di damage reduction di W mangiano il loro all-in: una volta spesi dash e burst, K'Sante ribalta lo scambio con R e li chiude in forma All Out."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "Top laner ranged che lo kitano"
      reason: "La W di K'Sante ha solo 600 di range ed E ne ha 525. Avversari ranged lo pokano fuori lane con auto-attack da fuori la portata di W, poi si allontanano quando prova a caricare — lasciandolo solo con un'ulti a cooldown lungo."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "Specialisti anti-tank"
      reason: "I Vital Strike di Fiora infliggono true damage che ignora scudi e resistenze; la R di Olaf cleansa lo stun di W e lo rende unstoppable nei trade; la R di Trundle ruba le bonus resistenze a K'Sante esattamente quando è più vulnerabile in forma All Out."
---

## Panoramica

K'Sante è un ibrido tank-skirmisher: un bruiser pesante in forma base che diventa un duelista skirmisher quando attiva la sua ulti **All Out**. Tutto il kit è costruito su due fasi. In forma base assorbe danno con la riduzione del charge-up di **W (Path Maker)**, controlla i fight con lo stun di **Q (Ntofo Strikes)** e lo sbalzo di **W**, e si scuda — o scuda un alleato — con **E (Footwork)**. Quando **R** lo trasforma, baratta tutta quella durabilità per attack speed, armor penetration e omnivamp (lifesteal che funziona su qualsiasi tipo di danno) — diventando un duellante damage-dealer per qualche secondo.

Il piano partita è giocare l'early lane con pazienza — short trade (brevi scambi di 1-2 abilità, non un commitment alla kill) con auto-attack proccate dalla **Q** (proc = un effetto che si attiva quando una condizione è soddisfatta; qui, il marchio della **Q** che la prossima AA detona) — poi costruire un vantaggio crescente nel tempo (snowball: kill → gold → item → altre kill) spingendo la wave (l'ondata di minion) verso la torre nemica e cercando engage con il charge di **W** una volta che hai il sustain di Sundered Sky. A mid-game diventi la front line del team (il tank/bruiser che apre il fight assorbendo danno così che i carry — i damage dealer principali del team — possano farlo da dietro). A late-game la tua **R** è uno strumento di target removal: scegli un nemico chiave, slammalo (lo scaraventi sbattendolo) contro un muro e finiscilo in forma All Out.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Lo scudo dà sustain nei trade melee e una piccola passiva di heal-on-low-HP che si sposa col profilo tank di K'Sante.

**Item core (nell'ordine):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — il tuo primo grande spike. Ogni pochi secondi la prossima auto-attack è un crit e ti cura di ~10% degli HP mancanti. Il proc combacia perfettamente con il marchio della passive di **Q** (un debuff di danno bonus che le abilità applicano e che la prossima AA detona).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + riduzione fissa sulle auto-attack nemiche. Stivali di default contro un top laner AD.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — aggiunge un'aura che brucia i nemici intorno a te (AOE = danno su un'area, non su un singolo target). Aiuta a clearare le wave e taggare più target nei teamfight, così i proc di **Q** colpiscono più spesso.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — il tuo item di scaling tank. Stacka bonus armor e magic resist nel tempo durante i fight, più un piccolo strike AOE di ritorno. Soffitto di tankiness late-game.

**Item situazionali:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro squadre con campioni AD auto-attack-heavy che si curano molto (Aatrox, Trundle, Nilah, Master Yi). Applica grievous wounds (40% di cure ridotte) sul nemico quando ti colpisce.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contro minacce AP top o jungle (Mordekaiser, Vladimir, Diana). Dà magic resist e un 25% bonus a tutte le cure/scudi che ricevi — moltiplica l'heal di Sundered Sky e l'omnivamp della tua **R**.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — contro carry ad attack speed altissima (Vayne, Kog'Maw, Master Yi). L'aura taglia il 20% di attack speed ai nemici vicini, smontando il loro DPS mentre tu mangi le AA.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team avversario ha 2+ campioni di crowd-control pesante (Leona, Lissandra, Maokai) o un top laner AP. Danno magic resist + tenacity (recovery più veloce da stun/slow).

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default contro AD top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro AP o CC pesante.

**Skill order:** Massimizza **Q** per primo (cooldown più basso, danno principale e stun a 2 stack), **E** per secondo (più scudo + cooldown più rapido per gli engage), **W** per ultimo (il danno base scala meno per livello — il valore è l'utility, non il danno per rank). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. Secondario **Sorcery** con **Manaflow Band** + **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Matchup chiave

- **Vayne / Teemo:** Incubi di poke ranged. Sono kiter — avversari che ti logorano da distanza muovendosi all'indietro mentre attaccano (poke = danno a distanza per logorare HP senza committare al fight). Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, cambia le rune secondarie su Inspiration per il sustain di **Biscuit Delivery** (HP+mana biscuits gratis in lane), e non tentare il W-charge — escono dal range. Farma sotto torre fino a quando ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** è online e chiama un gank al jungler (gank = il jungler arriva a sorpresa in lane da un sentiero laterale per ucciderlo).
- **Darius:** Favorevole. Lo stun a 2 stack di Q (il secondo cast di Q, dopo aver accumulato 2 stack, attira e stuna) taglia il suo pull, la damage reduction di W assorbe il bleed (sanguinamento) dell'anello esterno della Q (la Q di Darius fa più danno sul bordo esterno del cerchio, e la sua passive accumula sanguinamento ad ogni AA che ti dà). Non combatti dentro il ring esterno della sua Q ai livelli 1-3; dal livello 4 in poi puoi fare short-trade (scambi brevi di 1-2 abilità) e camminare via.
- **Mordekaiser:** Pari o leggermente favorevole. La tua **W** durante il charge-up ti rende unstoppable (immune a stun, slow e altri CC), quindi puoi usarla dentro la sua **R** prison per romperne l'effetto su di te. Non bruciare **W** su di lui fuori dalla prison — tienila.
- **Fiora:** Hard counter. I suoi Vital Strike infliggono true damage (danno che bypassa armor, magic resist e scudi). I tuoi scudi e le tue resistenze non fanno niente contro la sua source di danno principale. Gioca molto passivo, cedi CS (creep score = kill di minion) per sicurezza, e chiedi un gank al jungler presto.
- **Renekton:** Skill matchup (deciso più da chi gioca meglio che dal kit). Il suo power spike ai livelli 2-3 è brutale (un power spike è un momento in cui il campione diventa notevolmente più forte, qui per lo sblocco di abilità chiave) — non combatti prima del livello 3. Una volta che hai tutte e tre le abilità e ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** in costruzione, ribalti il matchup: lo stun di Q interrompe la sua W (la sua spell di stun), poi vai all-in (un trade di full commitment fino alla kill, senza opzione di tirarsi indietro a metà fight).

## Power spike & condizioni di vittoria

- **Livello 2 → Livello 3:** Al livello 3 hai Q + W + E e lo stun a 2 stack di Q è online. Questa è la tua prima finestra di short-trade: apri con il charge di **W** per spaventarli via dalla wave, poi **Q** due volte per lo stun → **E** per uscire.
- **Livello 6 (prima R):** All Out sblocca la kill threat. Cerca un gank al jungler: **R** il nemico verso il tuo muro (il wall slam infligge danno bonus e li blocca), trasformati e finiscilo in forma All Out.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completo (~ minuto 11-13):** Il tuo sustain triplica. Ora puoi vincere extended trade e restare in lane attraverso i tentativi di gank. Spingi per una solo kill o imposta un tower dive (andare sotto la torre nemica per uccidere il nemico nonostante i colpi della torre — funziona perché la damage reduction di **W** assorbe i tower hit durante il dive).
- **3 item teamfight (~ minuto 22-26):** Con ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** diventi lo strumento di engage primario del team (il campione che apre il fight saltando dentro e bloccando un target). Cerca pick con **R** (un "pick" = eliminare un nemico isolato fuori posizione) sui carry avversari vicino ai muri.

## Errori comuni

- **Premere R quando stai già perdendo il fight.** All Out baratta durabilità per danno. Se sei già a basso HP e in inferiorità numerica, muori in forma trasformata in pochi secondi. **R** è uno strumento di "win condition", non un pulsante di panico — usala quando puoi isolare un target e finirlo, non quando provi a scappare.
- **Caricare W davanti a un avversario ranged.** Vedono il wind-up (l'animazione lenta di carica che segnala il dash) e camminano via. Usa **W** come counter-engage (loro si impegnano per primi, tu carichi addosso a metà animazione) o partendo dalla fog of war (la zona scura della mappa dove il nemico non ti vede) per sorprenderli — mai come opening poke.
- **Saltare gli stack di Q.** Ogni hit di **Q** dà uno stack (una carica che si accumula sull'abilità): a 2 stack il prossimo cast è una shockwave che attira e stuna. Tirare **Q** da 1 stack solo per il danno e lasciare scadere lo stack spreca il tuo CC più forte (CC = crowd-control: stun, slow, knockback). Pianifica sempre il secondo cast.
- **Splitpushare da solo da tank.** Splitpush = spingere una side lane da solo per costringere l'avversario a mandare qualcuno a fermarti. K'Sante è un campione da teamfight senza ulti globale per ribaltare altre lane — il kit ha bisogno di alleati per il follow-up del wall slam di **R**. Raggruppati col team per gli obiettivi a meno che tu non abbia un chiaro vantaggio numerico.
- **Dimenticarsi che All Out abbassa il max HP.** Quando ti trasformi, il tuo HP corrente e massimo calano di una percentuale. Se eri al 100% HP prima del trasform, finirai al nuovo (più basso) max con HP corrente proporzionale — ma se ti trasformi quando sei già low, il drop percentuale può ucciderti direttamente. Controlla la HP bar prima di premere R.

## Suggerimento avanzato

Il W-cancel: mentre carichi **Path Maker**, puoi rilasciare il cast in qualsiasi punto — charge corti infliggono meno danno e meno sbalzo/stun, ma resti unstoppable per la durata del charge. Usa una **W mezzo carica** per schivare un'abilità chiave nemica (la **R** di Lissandra, la **R** di Malphite, la catena di AA di un ADC) senza spendere il tempo di carica completo, poi rientra in scambio alle tue condizioni. Il cooldown è identico indipendentemente dalla lunghezza del charge — non c'è penalità a cancellare presto. I pro usano questo trick per sopravvivere agli opening engage; i giocatori ranked quasi sempre full-charge e camminano dritti dentro il punish (la contromossa che ti subisci per esserti esposto troppo).
