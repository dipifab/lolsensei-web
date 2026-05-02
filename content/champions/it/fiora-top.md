---
title: "Fiora Top: Build e Guida — Patch 16.9"
slug: "fiora-top"
language: "it"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Guida a Fiora top per League of Legends Patch 16.9: build da duelist, gestione dei Vitals, timing del parry, matchup chiave, power spikes, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "Un punto debole luminoso (un Vital) appare attorno a ogni campione nemico vicino. Colpirlo fa true damage, cura Fiora e le dà Move Speed per qualche secondo."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Dash corto direzionale che pugnala il nemico più vicino e resetta il timer dell'auto-attack. Colpire un nemico rimborsa quasi tutto il cooldown: incatenare le Q è la sua mobility principale."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry: blocca tutto il danno e i disable in arrivo per un istante, poi pugnala in una direzione. Slowa il primo nemico colpito, o lo stunna se hai parato un effetto di CC."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Potenzia le prossime due auto-attack. La prima rallenta il bersaglio, la seconda è sempre un crit. Entrambe danno bonus di attack speed nella finestra."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Rivela tutti e quattro i Vitals attorno al campione bersaglio. Colpirli tutti (o uccidere il bersaglio dopo almeno un Vital) cura Fiora e gli alleati vicini in una grossa AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha tanto danno magico o catene di CC (Lissandra, Ryze, pull di Sett)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "contro bruiser tankier (Mundo, Sion, Ornn) — crit + cura sul primo hit aiuta a out-tradare gli HP-stacker"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro top mobili (Camille, Irelia, Renekton) — il dash + slow lascia stickare quando la Q da sola non basta"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP forte (Mordekaiser, Vladimir, Rumble) — scudo magico lifeline più MR per il splitpush 1v1"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contro frontline che stackano armor (Malphite, Rammus, Shen) — armor pen più slow per tenere i target in range Vital"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Gestisci i Vitals per curarti e fare snowball early, arriva a Trinity Force, poi splitpush in side lane finché non ti mandano due nemici. In teamfight R sul target squishy per la cura AOE che vince i fight."
  weakness: "Squishy nei primi 6 livelli e molto item-dependent. Catene di hard CC e poke ranged (Teemo, Quinn, Gnar) la tengono lontana dai Vitals; senza i reset di Q non ha mobility."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernaut lenti che dipendono da una grossa abilità"
      reason: "La W di Fiora para l'unica wind-up telegrafata che li definisce (la pull E di Darius, la slam W di Sett, la Q silence di Garen). Con la wind-up sprecata, lei gira e free-hitta i Vitals tutto il trade."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "Tank HP-stacker che non riescono a fermare i Vitals"
      reason: "I Vitals fanno una percentuale dell'HP massimo del bersaglio in true damage (danno che ignora armor e MR). Più HP buildano, più la R di Fiora li devasta nei fight prolungati."
    - examples: ["nasus", "kayle"]
      archetype: "Melee scaling late con lane early debole"
      reason: "Li bullizza fuori dalla wave dal livello 2 con i reset di Q, uccidendoli o spingendoli sotto tower più volte prima che arrivino agli item che li rendono pericolosi."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Top ranged che kitano fuori dal range della Q"
      reason: "Fiora non ha risposta al poke ranged prima del livello 6. Stanno a range di auto-attack, la accecano o dashano via, e lei non riesce ad arrivare a un Vital per curarsi."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmisher con mobility on-demand"
      reason: "I loro dash ignorano il suo gioco di posizionamento. La E di Jax stunna durante la finestra di parry, i reset di Q di Irelia la riposizionano ogni secondo, la R di Camille la blocca in un 1v1."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Tank con hard CC point-and-click"
      reason: "Il loro CC è affidabile e non parabile quando è già su di te. Una R di Malphite o uno stop-charge di Poppy cancella la finestra della R di Fiora e il team gioca 4v5."
---

## Panoramica

Fiora è una **skirmisher** — una duelist melee che vince i fight prolungati 1v1 invece di bursti­re in 1-2 secondi come un'assassina. Il kit ruota attorno alla passive **Duelist's Dance**: un punto debole luminoso chiamato **Vital** appare attorno a ogni campione nemico vicino, ruotando di lato ogni qualche secondo. Colpire il Vital fa **true damage** (danno che ignora armor e MR), cura Fiora e dà Move Speed. La Q **Lunge** è un dash corto a cooldown basso che si rimborsa quasi tutto sul colpo: incatenare le Q attorno all'avversario per arrivare al prossimo Vital è il loop meccanico centrale. La W **Riposte** è un **parry** — uno scudo breve che blocca la prossima istanza di danno o CC e contrattacca, stunnando il bersaglio se hai parato un effetto di CC.

Il game plan è semplice da descrivere ma meccanico: in lane, gestisci i Vitals per curarti e rosicchiare l'avversario, cerca un all-in di livello 2 o 6 (un fight in cui committi totalmente alla kill), poi **splitpush** (push una side lane da solo per costringere il nemico a mandare qualcuno a fermarti) appena esce **Trinity Force**. Attorno alla R **Grand Challenge** Fiora diventa uno dei campioni 1v1 più forti del gioco: ult su un bersaglio isolato, colpisci tutti e quattro i Vitals, e la cura AOE finale può ribaltare un teamfight da sola. È squishy e item-dependent nei primi 6 livelli, quindi la lane early è gestione dei Vitals, non caccia alle kill.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passive di rigenerazione HP attutisce il poke (danno ranged a basso costo che ti rosicchia l'HP senza committare a un fight) avversario fino al power spike di Q-E al livello 2. Prendi ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** solo contro lane melee dove sei sicuro di voler fare all-in early (es. mirror Fiora, Garen).

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primo spike (il salto più grosso in danno e **stickiness**, la tua capacità di restare incollato a un bersaglio che prova a scappare). Il proc Spellblade on-hit triggera ogni Q per un grosso danno bonus, e la passive di Move Speed dopo ogni abilità potenzia la chase ai Vitals. AD, attack speed, ability haste (stat che riduce i cooldown delle abilità) e HP si allineano tutti con quello che il kit chiede.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default quando il nemico ti fa danno soprattutto con auto-attack.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più uno **scudo lifeline**: quando l'HP scende sotto ~30%, parte uno scudo automatico. È la finestra in cui ti serve tempo extra per finire gli ultimi due Vitals sul bersaglio della R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il **burst** AD (danno alto concentrato in 1-2 secondi) in un sanguinamento lento (danno spalmato nei secondi successivi). Su kill, il bleed residuo viene cancellato — reset pulito per i dive in splitpush.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cleave AOE sulle auto-attack più omnivamp (lifesteal che funziona su qualsiasi danno che fai, non solo le auto). Raddoppia la waveclear così puoi splitpushare una side lane senza perdere troppo tempo.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team avversario ha tanto danno magico o catene di **CC** (crowd control: stun, root, knockback — qualsiasi cosa ti blocchi e ti impedisca di agire). La tenacity (stat che riduce la durata del CC su di te) tiene utilizzabili le finestre di parry W in teamfight.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo item alternativo contro lane di bruiser tankier (Mundo, Sion, Ornn). Ogni prima auto su un campione in fight critta e cura — sustain extra contro HP-stacker.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contro top mobili (Camille, Irelia, Renekton). Il dash + slow attivo dà un secondo gap-closer (strumento per chiudere il gap a un nemico) quando i reset di Q da soli non bastano.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst **AP** (Ability Power, la stat dietro il danno magico) forte (Mordekaiser, Vladimir, Rumble). Lo scudo magico lifeline + MR rende vincibile il splitpush 1v1.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contro frontline che stackano armor (Malphite, Rammus, Shen). Armor pen più una proc (passive che si attiva automaticamente a ogni colpo da danno) di slow tiene i tank pinnati abbastanza da clearare tutti e quattro i Vitals.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sono lo standard. Switcha a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha tre o più sorgenti di CC o di danno magico pesante.

**Skill order:** Maxa **Q** per primo (il cooldown scende a ogni rank, i reset diventano quasi istantanei). Maxa **E** per secondo (più danno sul crit potenziato, slow più lungo per impostare i Vitals). **W** maxa per ultimo. Prendi **R** ai livelli 6, 11, 16.

**Runes:** Albero primario **Precision** con il keystone (la runa principale dell'albero) **Conqueror** — ramp-uppa AD bonus mentre continui a combattere, capped dopo ~5 secondi. Accoppia con **Triumph** (cura e oro su takedown), **Legend: Bloodline** (life-steal che stacka sui takedown), e **Coup de Grace** (più danno sotto il 40% HP — perfetta per finire i Vitals). Albero secondario **Resolve** con **Bone Plating** (riduzione danno sui prossimi 3 colpi dopo che subisci danno) più **Revitalize** (potenzia la cura della R sul team). Stat shard: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchup chiave

- **Darius:** Skill matchup. La sua Q sul bordo applica una stack di bleed e ti out-trada raw, ma tutto il kit è telegrafato: **W** sulla pull E e il trade si ribalta. Se pari la pull è stunnato per quasi un secondo — Q in, due Vitals, esci. Mai tradare quando la passive è a 4-5 stack.
- **Camille:** Matchup duro. La sua hookshot E stunna attraverso la W se landa il secondo cast, e la R la isola in 1v1. Tieni la **W** per la sua R, non per la Q. Compra ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** invece di Trinity se fa snowball early.
- **Teemo:** Lane brutale. Ti acceca (cancella le auto-attack per un breve periodo) on cooldown e poka da fuori range Q. **Freeza** la wave vicino alla tua tower (smetti di pushare e tieni la wave dalla tua parte) per negargli il farm (oro e XP dai minion), e chiama il jungler.
- **Garen:** Favorevole. Q-W per baitare la sua **W** (lo scudo damage-reduction), poi cammina di lato per il Vital. Il silence della Q è una wind-up dritta — paralo on reaction. Evita all-in sotto la R a meno che non sei 1-2 item avanti.
- **Jax:** Matchup pari che Fiora vince dopo un item. Para la sua **E** (wind-up stun da 2 secondi) e la lane è tua. Senza quel parry, la sua E + counter-strike ti out-trada perché stunna attraverso ogni hit del channel.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + E sbloccate hai una vera finestra di all-in. Q in per un Vital, E per slow + crit auto, cammina di lato per il prossimo Vital. La maggior parte delle lane perde un terzo dell'HP da un singolo trade.
- **Livello 6:** Si sblocca la prima **R**. Anche a zero item, R isola un bersaglio e la cura AOE ti tiene viva dopo la kill. Forza un 1v1 quando il jungler si fa vedere top side.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 11-13):** Danno e stickiness fanno il salto più grosso qui. Puoi splitpushare una side lane e battere 1v1 chiunque manderanno. Forza pressione in side lane e ignora i teamfight in mid.
- **Tre item + R online (~ minuto 22-26):** Picco da teamfight. R sul target più squishy, gira per i quattro Vitals, e la cura AOE tiene tutto il team vivo attraverso un secondo engage. Se non arrivi alla back line, R sul frontliner con HP più alto — il true damage taglia la sua build allo stesso modo.

## Errori comuni

- **Spammare Q on cooldown per il danno.** La Q è uno strumento di posizionamento prima, di danno dopo. Se Q-i verso il nemico e ti mangi tutta la sua combo, hai sprecato sia il dash che il rimborso. Q **verso un Vital**, non verso il campione.
- **Sprecare W sulle auto-attack.** La W para qualsiasi danno, ma una auto di minion parata è potenziale sprecato. Tieni la W per l'abilità singola più grossa del nemico. Un parry pulito sul CC è una finestra da kill gratuita.
- **Ultare contro un muro.** La R piazza i quattro Vitals sui lati cardinali del bersaglio. Se il nemico è contro un muro, due Vitals stanno sul lato muro e non li raggiungi. Tira il bersaglio in zona aperta prima, poi R.
- **Splitpushare senza vision.** Fiora batte chiunque 1v1 ma perde 1v2 sempre. Piazza un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** nel cespuglio di side-lane avversario prima di shovare — senza, ogni shove invita un gank da cui non scappi.
- **Tradare contro una passive piena.** Juggernaut come Darius, Sett, Renekton vincono i trade raw quando la passive è caricata. Se la barra è piena, indietreggia e trada solo quando si svuota.

## Suggerimento avanzato

Allenati al **timing del parry W** sulle ulti point-and-click (abilità che bersagliano automaticamente, tipo la R di Mordekaiser) invece che sugli skillshot (abilità da mirare a mano). Quasi tutti provano a W sul wind-up della R di Malphite o di Sion, che è ok ma prevedibile. Le giocate enormi sono parare la **R di Mordekaiser** (lo stunna per quasi un secondo e tu te ne vai), la **R di Skarner** (la suppression viene cancellata e lui stunnato), e la **R di Warwick** (frame-perfect, ma uno pulito chiude il fight). Setta un custom game, fai giocare un amico con uno di questi campioni, e drilla il parry finché non smetti di pre-castarlo e inizi a reagire. Quando diventa riflesso, ogni 1v1 con un'ult hard-CC si ribalta a tuo favore anche con item disadvantage.
