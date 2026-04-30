---
title: "Aatrox Top: Build e Guida — Patch 16.9"
slug: "aatrox-top"
language: "it"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Guida ad Aatrox top per League of Legends Patch 16.9: build da bruiser, meccanica del Q sul bordo, matchup chiave, power spikes, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodicamente la prossima auto-attack infligge danno magico bonus basato sui max HP del bersaglio e cura Aatrox. Tieni d'occhio l'indicatore sul portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Slash con uno spadone a tre cast in sequenza, ognuno di forma diversa. Colpire il bordo esterno fa knock-up e infligge il 25% di danno in più. È la principale fonte di danno di Aatrox."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Catena che rallenta il primo bersaglio. Se un campione o un monster grande non esce dalla zona di impatto in tempo, viene tirato indietro al centro e subisce di nuovo lo stesso danno."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: cura una porzione del danno inflitto ai campioni (lifesteal). Active: dash breve, usabile durante il windup di Q per allineare il colpo sul bordo o per kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Forma demoniaca: AD bonus, Move Speed che decade nel tempo, e self-healing aumentato. Fa fear ai minion vicini. Ogni takedown estende la durata."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha tanto danno magico o catene di CC (es. Lissandra, Sett, ulti di Malphite)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Vex, Fizz mid che passa top): lo spell shield blocca un grosso colpo magico e salva l'engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti AD dealer (Yasuo + Caitlyn): trasforma il burst AD in un sanguinamento lento, E lifesteal lo cura indietro"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro lockdown single-target che ti spegne sull'engage (Q di Morgana, hook di Blitzcrank, R di Lissandra)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "comprala come componente prima di finire Eclipse se stai perdendo HP contro un top AP (Vladimir, Rumble) e ti serve MR prima del back"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Colpisci il bordo della Q per knock-up, blocca con W, e usa E per riallineare. Trasforma il vantaggio Eclipse + Black Cleaver in vittorie 1v1 in side lane."
  weakness: "Tutto il danno è sul timing della Q. Sbagli il bordo, perdi il trade. Hard CC, kiter a lungo raggio e duellanti a true damage (Fiora, Camille) sgretolano la sua sustain."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Fighter melee immobili senza tool di engage"
      reason: "Aatrox vince i trade prima del livello 6 con i Q sul bordo; la W li tiene fermi abbastanza a lungo che non possono accumulare cariche delle loro passive in sicurezza né scappare al suo all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Mage a corto raggio che devono entrare per fare danno"
      reason: "Devono mettersi a distanza melee per il danno pieno; Aatrox punisce il gap con lo slow della W + Q sul bordo per knock-up prima che possano disimpegnarsi."
    - examples: ["kayle", "k-sante"]
      archetype: "Lane early debole che esplodono late"
      reason: "Aatrox ha una delle migliori curve di laning early; può ucciderli o negar loro l'XP prima che arrivino agli item late-game che li rendono pericolosi."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "Duellanti a true damage con parry o scudo"
      reason: "La W di Fiora fa parry sul knock-up della Q e i Vitals (marker che lei mette su Aatrox e colpisce con auto a true damage — danno che ignora armor e MR) ignorano la build drain tank; la E di Camille aggiunge altro true damage sopra."
    - examples: ["quinn", "teemo"]
      archetype: "Kiter a lungo raggio o con invisibilità"
      reason: "Restano fuori dal range della Q e rompono i wind-up di Aatrox con blind o vault (il dash di Quinn che lo respinge); lui non ha modo di chiudere il gap senza bruciare E e Flash a vuoto."
    - examples: ["malphite", "maokai"]
      archetype: "Tank con CC istantaneo (senza mira)"
      reason: "Le loro stun e root sono point-and-click — niente proiettile da schivare. Interrompono i recast della Q a metà animazione, e una volta che Aatrox è bloccato dal CC non può curare di nuovo via E lifesteal."
---

## Panoramica

Aatrox è un melee fighter (campione corpo a corpo che combatte a distanza ravvicinata) costruito intorno a una **Q** a tre cast con uno spadone. Ogni cast copre una forma diversa, e colpire il **bordo esterno** dello swing — non la zona interna — fa due cose extra: **knock-up** (manda brevemente il bersaglio in aria, impedendogli di agire per un attimo) e infligge il 25% di danno in più. Il kit ha anche uno slow + chain pull (**W**: una catena che rallenta il primo nemico colpito e lo trascina indietro al centro se non esce dalla zona di impatto in tempo), un dash breve (**E**: scatto rapido, attivabile durante l'animazione della Q per riposizionarsi) e una ulti in forma demoniaca (**R**: cooldown lungo, grosso buff). È un **drain tank**: non un tank vero, ma un fighter che sopravvive curando il danno ricevuto tramite il **lifesteal** della E (una percentuale del danno che fai torna come HP), invece di accumulare armor o HP.

Il game plan è breve da descrivere e impegnativo da eseguire: in lane, avvicinati con la **W** pronta come lock-down (lo slow che inchioda il nemico), poi fai partire la **Q** in modo che il **bordo** dello swing prenda il bersaglio rallentato. Usa la **E** per scivolare nella posizione giusta per la seconda e la terza Q. Da metà partita in poi, cerca duelli 1v1 in side lane e skirmish 2v2 (mini-fight tra due giocatori per parte, fuori dal team fight principale). Aatrox è uno dei **bruiser** (campioni che mescolano danno e robustezza) più forti del gioco una volta che ha la R disponibile e almeno un item online.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La rigenerazione HP passiva di Doran's Shield porta Aatrox attraverso i livelli early, dove la sua sustain (la capacità di curarsi nei fight) è più debole.

**Item core (nell'ordine di acquisto):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item spike (il momento in cui il danno aumenta di più). Dà **AD** (Attack Damage, la statistica del danno fisico delle auto-attack e della Q), **omnivamp** (lifesteal che funziona su ogni tipo di danno, non solo le auto-attack), e **ability haste** (riduce il cooldown delle abilità). La passive si attiva al secondo colpo, e Q1 + Q2 lo consegnano in sequenza.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro lane in cui il danno arriva soprattutto dalle auto-attack fisiche. Riducono quel danno negli scambi prolungati in lane.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — ogni colpo di Q toglie una carica di **armor** (la statistica che riduce il danno fisico) al nemico. Dà anche HP per la sopravvivenza e ability haste per più rotazioni di Q per fight.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più un **lifeline shield**: quando i tuoi HP scendono sotto soglia (intorno al 30%), parte uno scudo automatico. Quella finestra è esattamente quando ti serve tempo perché il lifesteal della E possa curarti di nuovo.

**Item situazionali:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — passa dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** a queste boots quando il team avversario ha tanto danno magico o catene di **CC** (crowd control: stun, root, knockback — qualsiasi cosa che ti blocchi e ti impedisca di agire). Esempi: il root di Lissandra, il pull di Sett, l'ulti di Malphite.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst **AP** pesante (AP = ability power, la statistica del danno magico; burst = danno alto consegnato in 1-2 secondi). La passive Lifeline blocca un grosso colpo magico, spesso la differenza fra morire a metà engage (a metà inizio del fight) e sopravvivere fino alla R.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn). Trasforma il burst in un **bleed** lento (danno spalmato sui secondi successivi invece che istantaneo), dando tempo al lifesteal della E di curarlo.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro hard CC single-target che ti spegne sull'engage (la Q di Morgana, l'hook di Blitzcrank, la R di Lissandra). Ha uno spell shield monouso che assorbe l'abilità di lockdown, così puoi impegnarti a fondo nell'engage invece di dover schivare a distanza massima.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — componente **MR** early (MR = magic resistance, la statistica che riduce il danno magico). Comprala prima di finire ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** se un top AP come Vladimir o Rumble ti sta vincendo la lane.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è il default. Passa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team nemico ha tre o più fonti di CC o tanto danno magico.

**Skill order:** Porta al massimo la **Q** per prima (è l'unico damage), la **E** per seconda (il lifesteal aumenta a ogni rank, quindi più dash per fight), la **W** per ultima. Prendi la **R** ai livelli 6, 11, 16.

**Rune:** Le rune sono effetti passivi che scegli prima della partita da un "albero" di opzioni, ognuno costruito su uno stile diverso. Aatrox usa **Precision** come albero principale (quello costruito sul danno sostenuto delle auto-attack) con la keystone (la rune centrale dell'albero) **Conqueror** — una passive che fa crescere il tuo damage man mano che continui a combattere — più **Triumph** (piccola cura sui takedown), **Legend: Alacrity** (Alacrity = statistica che ti dà attack speed bonus, aiutando Aatrox ad auto-attaccare più in fretta tra una abilità e l'altra) e **Last Stand** (più damage quando sei a HP bassi). Come albero secondario prendi **Resolve** (l'albero della durabilità) con **Second Wind** + **Revitalize** per HP sustain in lane, oppure **Inspiration** con **Magical Footwear** (boots gratis al minuto 12) e **Cosmic Insight** (ability haste extra) se ti aspetti una lane tranquilla.

## Matchup chiave

- **Fiora:** Matchup più duro. La sua **W** è una parry (uno scudo breve che blocca e contrattacca un'abilità) che annulla il knock-up della Q. Induci la parry — costringila a usarla su una Q1 — prima di impegnarti sulla terza Q. Evita scambi prolungati: Q1 + E entra-esci breve, e non impegnarti mai su Q3 se la sua W non è in cooldown.
- **Darius:** Skill matchup (matchup in cui vince chi gioca meglio, non chi ha i counter migliori). Resta fuori dal range della sua E quando ha tre o più cariche di bleed addosso a te (la sua passive ti toglie HP ogni secondo per ogni stack). Colpiscilo con la Q sul bordo quando la sua Q è in cooldown; sotto R, i trade sono tuoi se hai almeno un item di vantaggio.
- **Renekton:** Perde la lane prima del livello 6 se rispetti la stun della sua W. Avvicinati solo con la W pronta; punisci i suoi cooldown invece di scambiare colpi a petto in fuori. Dopo il 6, la tua R regge meglio del costo in fury (la risorsa di Renekton) che paga lui.
- **Malphite:** Evita di stare addosso alla tua minion wave — la sua Q è un poke a lungo raggio (danno a distanza per logorarti gli HP senza impegnarsi) che ti toglie HP gratis. Compra ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** se il poke early gli sta vincendo la lane; **freeze** la wave vicino alla tua tower (smetti di spingere e tieni la wave dal tuo lato) per togliergli farm (l'oro e l'XP che derivano dall'uccidere i minion).
- **Quinn:** Molto difficile. La sua abilità ti applica un blind (ti annulla le auto-attack per un attimo, inclusa quella empowered della passive) e ti tiene a distanza con il kite (si muove indietro mentre attacca, tenendoti fuori dal corpo a corpo). Spingi forte la wave e fai roam (lascia la lane per aiutare un'altra, di solito mid) per cercare pick (kill su nemici isolati e fuori posizione) invece di provare a vincere l'1v1.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **W** sbloccate, Aatrox ha una vera finestra di all-in (un momento in cui puoi impegnarti totalmente sulla kill, senza vie di fuga). Se il nemico si sposiziona, avvicinati con la W pronta e colpiscilo con la Q sul bordo dopo che lo slow è atterrato.
- **Livello 6:** La prima R sblocca. Cerca un all-in se il nemico è sotto il 60% HP — l'AD amp + il healing buff trasformano anche un trade neutro in una kill.
- **Completamento di ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse (~ minuto 11-13):** Il damage cresce di colpo. Forza duelli in side lane e cerca un roam in bot per un dive 2v3 (entrare sotto la tower nemica con il tuo jungler — il giocatore che uccide i mostri della jungla per oro e XP, e ruota in lane per assistere — per uccidere i nemici in bot prendendosi anche i colpi della tower).
- **Due item + R disponibile (~ minuto 18-22):** Picco teamfight. Usa il lifeline shield di ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** più l'healing amp della R (amplification — la R aumenta tutta la cura che ricevi) per fare dive sulla back line nemica (i carry squishy — ad alto danno ma poca difesa — che stanno dietro ai loro tank durante il fight) e per fare reset (rinfrescare) sulla durata della R quando ottieni un takedown (kill o assist).

## Errori comuni

- **Lanciare Q1 al primo contatto.** Q1 è il cast più piccolo e lento. Apri con la **W** per lo slow, poi azzecca il timing di Q1 in modo che il **bordo** dello swing prenda il bersaglio — non la zona interna. Il bonus dal bordo è circa il 25%.
- **Bruciare E per movimento invece che per allineare la Q.** La E è il tuo strumento per vincere i trade. Tienila per scivolare in range del Q sul bordo o per schivare un'abilità chiave nemica durante l'animazione di Q (il wind-up). Non sprecarla solo per attraversare la wave più velocemente.
- **Premere R troppo presto nel fight.** La R ha un cooldown lungo e il buff decade nel tempo. Inizia il fight con **W** + **Q**; attiva la R quando sei già impegnato e ti serve l'AD/healing amp, non come strumento di engage iniziale.
- **Ignorare la W sui minion.** La W passa attraverso un minion per rallentare il campione dietro. Nei matchup duri (Fiora, Camille), lancia la W da dietro la tua wave così il proiettile prende il bersaglio attraverso i corpi dei minion prima che possa reagire.
- **Costruire armor invece di haste/AD.** Aatrox è un drain tank, non un tank vero. Sopravvive curando il danno tramite il lifesteal della E; quella cura cresce con il damage che fai. Costruire una build HP-tank pura ti uccide output e sustain insieme.

## Suggerimento avanzato

Usa la **E** durante l'animazione di carica di Q1 per spostare la hitbox della Q a metà cast: puoi iniziare la Q rivolto in una direzione, poi fare un dash attraverso un minion o dietro al nemico, e lo swing atterra su un'angolazione completamente diversa. Si chiama **Q animation cancel**, e trasforma le Q prevedibili in giocate impossibili da reagire. Allenala in una partita custom contro un target dummy (un manichino-bersaglio fermo): lancia Q1, tieni il cast, scatta con la E, e guarda dove risolve la Q. In partita l'uso di più alto impatto è scattare **dentro** un nemico che ha provato a fare side-step (movimento laterale per schivare) su una Q telegrafata (una Q in cui l'animazione era visibile abbastanza da farsi leggere), prendendolo poi sul bordo della nuova angolazione per il knock-up.
