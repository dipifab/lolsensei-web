---
title: "Darius Top: Build e Guida — Patch 16.9"
slug: "darius-top"
language: "it"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Guida a Darius top per League of Legends Patch 16.9: build da juggernaut, pressione delle stack di Hemorrhage, matchup chiave, power spikes, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Auto-attacks e abilità da danno applicano una stack di sanguinamento sul target. A 5 stack Darius si infuria, riceve un grosso bonus AD per qualche secondo e il bleed ticka per molto danno."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Wind-up con un colpo d'ascia ad anello largo. Colpire un nemico con la lama esterna fa danno pieno, applica una stack di bleed e cura Darius. Il manico interno fa metà danno e nessuna stack."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Prossima auto-attack potenziata: danno bonus e slow pesante. Resetta il timer dell'auto-attack: incastrala fra due auto normali per massimizzare il danno al secondo."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Passive: armor penetration flat. Active: hook ad ascia a corto raggio che tira e rallenta i nemici in un cono. È l'unico gap-closer del kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Salta su un campione e infligge true damage che cresce con le stack di bleed sul target. Se uccide, il cooldown si rinfresca e puoi rilanciarla su un altro nemico."
      dd_spell_id: "DariusExecute"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando il team avversario ha tanto danno magico o catene di CC (Lissandra, Malphite ult, pull di Sett)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro frontline che stackano armor (Malphite, Rammus, Shen) — ogni Q stripper armor per tutto il team"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro team a forte AP quando ti serve MR e healing-amp sopra Death's Dance e R lifesteal"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contro squadre che stackano armor e tenacity (Rammus, Tahm Kench, Malphite) — armor pen più slow su bersagli colpiti"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quando ti serve Move Speed extra per camminare addosso ai kiter (Quinn, Vayne top, Gnar) e arrivare in range R"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stacka Hemorrhage a 5, sfrutta la finestra di enrage per il bonus AD, e finisci con R per il true damage. Trasforma le kill in lane in un timing di Stridebreaker che fa snowball nei 1v1 in side lane e nei dive bot."
  weakness: "Niente mobility a parte il pull corto di E e il salto one-shot di R. Kiter a lungo raggio, top ranged e champion che mantengono distanza (Quinn, Vayne, Teemo, Gnar) lo lasciano senza stack e senza trade."
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
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Bruiser melee a corto raggio senza un disengage forte"
      reason: "Darius vince i trade prolungati perché ogni auto e Q applica una stack di bleed: quando l'avversario vorrebbe disimpegnarsi, la finestra di enrage a 5 stack ha già ribaltato lo scambio a suo favore."
    - examples: ["nasus", "kayle"]
      archetype: "Melee scaling late con lane early debole"
      reason: "I primi 6 livelli sono passivi — Darius può fare E + W per spingerli fuori dalla wave più volte, uccidendoli prima che arrivino agli item che li rendono pericolosi."
    - examples: ["yasuo", "yone"]
      archetype: "Carry melee che combattono dentro il range della Q"
      reason: "Devono entrare a range Q per fare danno. Il Wind Wall blocca i proiettili ma non il colpo melee, quindi una Q sul bordo applica comunque la stack di bleed e fa partire lo snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Top ranged o kiter"
      reason: "Stanno fuori dal range della E e gli rosicchiano l'HP gratis. Senza un gap-closer oltre la E (hook a corto raggio) o la R (salto one-shot), non riesce a piazzare stack e perde la prio in lane."
    - examples: ["fiora", "camille"]
      archetype: "Duellanti a true damage con parry o scudo"
      reason: "La W di Fiora fa parry sul knock-up del kit e i suoi Vitals (marker piccoli che lei colpisce con auto a true damage — danno che ignora armor e MR) ignorano la build HP; la R di Camille isola Darius dal team e lo batte nei fight prolungati."
    - examples: ["gnar", "kennen"]
      archetype: "Top ranged con CC integrato"
      reason: "Pokano da fuori range Q e hanno stun ranged: il throw di Gnar in mega-form, la W di Kennen. Tengono Darius con HP basso senza mai entrare nella sua finestra di trade."
---

## Panoramica

Darius è un **juggernaut** (un campione melee lento e immobile che picchia molto forte e tanka i danni in uno scambio diretto) costruito attorno allo stack della passive **Hemorrhage**. Ogni auto-attack e ogni colpo di Q che connette con la **lama esterna** applica una stack di bleed. A **5 stack** entra in enrage per qualche secondo e ottiene un grosso bonus AD — è la finestra in cui uccide o spegne l'avversario. Il kit gli dà esattamente un gap-closer corto (**E**, hook da 535 unità) e un salto a cooldown lungo (**R**, esecuzione a true damage che si resetta sulla kill). Fuori da questi due strumenti cammina a Move Speed base e muore contro chiunque sappia mantenere distanza.

Il game plan è semplice: **stargli incollato finché muore**. In lane, prendi la Q con la **lama esterna** (non con il manico interno — il manico fa metà danno e zero stack), per chippare HP e curarti, prepara l'all-in con la **E** (pull, knock-up, slow) quando il nemico ha già 2-3 stack addosso, e detonate con **W** + catene di auto-attack. Da metà partita in poi, la **R** è un bottone da kill: anche a 0 stack fa molto **true damage** (danno che ignora sia armor che MR — non c'è una stat difensiva che lo riduca), e il cooldown si resetta su ogni kill, quindi un teamfight pulito può incatenare 2-3 R consecutive. È uno dei **bruiser** (melee fighter che mischiano danno e durabilità) più forti nel momento in cui esce Stridebreaker.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passive di rigenerazione HP attutisce il poke (danno a distanza a basso costo che ti rosicchia l'HP senza committare a un fight) avversario fino al power spike di livello 2. Prendi ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** solo contro una lane melee dove sei sicuro di voler fare all-in al livello 1-2 (es. mirror Darius).

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primo spike (il momento in cui il danno e la **stickiness** — la tua capacità di restare incollato a un bersaglio che prova a scappare — fanno il salto più grosso). L'attiva è un dash corto che rallenta tutto in un cono — esattamente il secondo gap-closer (strumento per chiudere il gap a un nemico) che a Darius manca. AD, HP e ability haste (stat che riduce i cooldown delle abilità) si allineano tutti con quello che il kit chiede.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default quando il nemico ti fa danno soprattutto con auto-attack. Riducono quel danno nei trade prolungati (scambi ripetuti di colpi in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più uno **scudo lifeline**: quando l'HP scende sotto ~30%, parte uno scudo automatico. Quella finestra è esattamente quella in cui ti serve tempo extra per landare la R sul reset.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il **burst** AD (danno alto concentrato in 1-2 secondi, tipo combo assassina) in un sanguinamento lento (danno spalmato nei secondi successivi invece di tutto subito). Su kill, il bleed residuo viene cancellato — synergy perfetta con i reset chain della R.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo o quarto item alternativo a seconda dello start: la prima auto-attack su un campione in fight critta e cura. Combinato con il reset auto della W, quel crit arriva quasi a comando.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team avversario ha tanto danno magico o catene di **CC** (crowd control: stun, root, knockback — qualsiasi cosa ti blocchi e ti impedisca di agire). La tenacity (stat che riduce la durata del CC su di te) è critica contro team che possono tenerti lontano dal carry.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro frontline che stackano armor (Malphite, Rammus, Shen). Ogni Q stripper armor per tutto il team.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contro **AP** (Ability Power, la stat dietro il danno magico) pesante. Dà MR (Magic Resistance) più una passive di healing-amp che potenzia la cura della Q, la pulizia bleed di Death's Dance, e gli effetti lifesteal della R.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contro tank squad che stackano armor e tenacity. Armor penetration più una proc (passive che si attiva automaticamente a ogni colpo) di slow su ogni abilità da danno — incluse Q, W e R.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — quando ti serve la passive di Move Speed stacking per camminare addosso ai kiter (Quinn, Vayne top, Gnar) e arrivare in range R prima che si riposizionino.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sono lo standard. Switcha a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha tre o più sorgenti di CC o di danno magico pesante.

**Skill order:** Maxa **Q** per primo (waveclear, healing, fonte principale di danno). Maxa **W** per secondo (la durata dello slow scala per rank, l'auto-reset è il tuo strumento sticky). Metti punti in **E** ai livelli 1 e 2 per la passive armor pen ma continua a maxare W; **E** maxa per ultimo perché il scaling dell'attiva è basso. Prendi **R** ai livelli 6, 11, 16.

**Runes:** Albero primario **Precision** con il keystone (la runa principale dell'albero) **Conqueror** — passive che ramp-uppa AD bonus mentre continui a combattere campioni, capped dopo 5 secondi di fight sostenuto. Accoppia con **Triumph** (piccola cura e oro burst su takedown), **Legend: Bloodline** (life-steal che stacka sui takedown), e **Last Stand** (più danno sotto il 60% HP). Albero secondario **Resolve** con **Bone Plating** (riduzione danno sui prossimi 3 colpi dopo che subisci danno) più **Overgrowth** (HP scaling con la morte dei minion vicini, perfetto per un top laner che farma 8+ minion a wave). Stat shard: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchup chiave

- **Garen:** Skill matchup (vince chi gioca meglio, indipendentemente dai pick). La sua **W** (uno scudo da damage reduction di 4 secondi) annulla una stack di bleed, ma il silence della Q si schiva camminando di lato. Tira la Q sul bordo quando la sua W è in cooldown; sotto R, lo batti nel trade se hai almeno un item di vantaggio.
- **Sett:** Lane favorevole. La sua combo Q-W è telegrafata (il wind-up è abbastanza visibile per reagire). Pullalo con E dopo che committa la W, poi stacka bleed prima che possa disimpegnarsi con un recast. Non tradare se ha Grit (la sua barra scudo) piena.
- **Fiora:** Matchup melee più duro. La sua **W** è un parry (uno scudo breve che blocca e contrattacca la prossima abilità) — baitalo con una Q prima di committare la E. I suoi Vitals fanno true damage, quindi Death's Dance è obbligatorio; rusha ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** solo se prende kill early.
- **Quinn / Teemo:** Matchup ranged molto duro. Ti accecano (cancellano le auto-attack per un breve periodo) o ti kitano fuori range. **Freeza** la wave vicino alla tua tower (smetti di pushare e tieni la wave dalla tua parte della lane) per negargli il farm (l'oro e l'XP dai minion), e chiama il jungler — Darius non vince questo 1v1 da solo.
- **Mordekaiser:** Matchup pari, deciso dal timing della R. La sua R ti isola in un realm 1v1; lo batti a 5 stack se tieni la E per pullarlo dopo che ha usato la sua E per rootarti. Compra ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** early se la sua R ti sta uccidendo.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + E sbloccate, Darius ha una vera finestra di all-in (una finestra in cui puoi committare totalmente alla kill, senza fallback). Pulla con E, Q sul bordo per danno e cura, due auto-attack, e il nemico è già a 3 stack di bleed prima di poter rispondere.
- **Livello 6:** Si sblocca la prima **R**. Anche solo con 3 stack già sull'avversario, la R fa abbastanza true damage da uccidere dal ~40% HP. Cerca un all-in di livello 6 nel momento in cui il tuo jungler si fa vedere top side.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completo (~ minuto 11-13):** Il dash + slow dell'attiva dà a Darius il secondo gap-closer che gli manca nel kit. Forza i 1v1 in side lane e roma (lascia la lane per aiutare mid o bot) per i pick (kill isolate su nemici fuori posizione).
- **Due item + R online (~ minuto 18-22):** Picco da teamfight. Cammina nella back line (i carry squishy che stanno dietro ai tank durante un fight), R sul target con HP più basso, recast sul prossimo squishy. Due reset di R bastano da soli a chiudere un teamfight.

## Errori comuni

- **Prendere la Q con il manico interno.** Il manico fa metà danno e applica **zero stack di bleed**. Fai un passo indietro un attimo prima che l'animazione finisca, così la **lama esterna** prende il bersaglio — è l'unico hit di Q che conta davvero.
- **Usare la E come strumento di movimento.** La E è il tuo unico gap-closer affidabile; se la bruci per attraversare la wave più in fretta, non hai niente con cui aprire l'engage per i prossimi 16-26 secondi. Tienila per iniziare l'all-in.
- **Premere R troppo presto.** La R fa true damage scalato per stack di bleed. A 0 stack il danno è mediocre; a 5 stack è zona da one-shot. Costruisci almeno 3 stack con auto e Q prima di premere R, salvo quando è il finisher su un nemico già morente.
- **Inseguire i kiter oltre la tower T2.** Darius non ha escape. Senza R o E pronti, ogni passo oltre la tower è un gank gratis per il jungler avversario — e la sua Move Speed base bassa significa che non riesci a disimpegnarti pulito.
- **Stackare item da puro tank.** Darius scala con **AD**, non con HP only. Buildare Sunfire + Warmog's piatto ammazza il danno; smetti di one-shottare i squishy e diventi un minion lento che cammina. Mantieni il core AD-bruiser.

## Suggerimento avanzato

Allenati al **W animation cancel**: Crippling Strike resetta il timer dell'auto-attack, quindi puoi tirare un'auto, premere W subito dopo, e mandare l'auto-W potenziata immediatamente — due colpi a danno pieno nel tempo di uno solo. Lo stesso trick funziona al contrario: cast W *durante* il wind-up della Q e l'auto potenziata atterra nel momento in cui la Q risolve. In partita reale, l'uso a impatto più alto è dentro la finestra di enrage a 5 stack: AA → W → AA → Q-edge incatena quattro hit che applicano bleed in meno di 2 secondi, e basta a uccidere quasi ogni squishy dal 70% HP. Provalo in un custom game su un target dummy finché il ritmo non viene automatico.
