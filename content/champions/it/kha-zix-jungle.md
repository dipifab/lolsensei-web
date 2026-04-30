---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "it"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Kha'Zix jungle per League of Legends Patch 16.9: percorso di clear, jump su target isolati, scelte di evolution (Q/E/R), build lethality, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Fuori dalla vista, la prossima auto su un campione fa magic damage bonus e slow. Marca i target isolati (nessun campione alleato entro 425 unità) per amplificare la Q."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Colpisce un nemico per physical damage; danno enorme su target isolati (nessun campione alleato vicino). Tool principale di duello — l'evolution dà range esteso."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Spuntone lineare che fa danno e ti cura nell'area di esplosione. Unica fonte di sustain in jungle. L'evolution aggiunge slow, vision e un cono triplo."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Dash a target che fa danno all'atterraggio. Evolution aggiunge 200 di range e reset del cooldown su takedown — il pattern assassin di reset vive qui."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Diventi invisibile, guadagni speed bonus e puoi rilanciare per ri-stealth. Ogni rank evolve un'abilità (Q/W/E/R) con un upgrade permanente al kit."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contro comp dove serve waveclear e pressione in side lane (laner gemelli che ti spingono fuori dal side)"
    - dd_id: "6692"
      name: "Eclipse"
      against: "contro comp con tanti bruiser (Sett, Aatrox, Mordekaiser): scudo + cura ti tengono in piedi nel trade in-out"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "contro setup pesanti di vision (support enchanter, jungler vision-focused): cancella ward al cast"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Lucidity contro magic CC pesante (Ahri charm, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap contro doppio AD (due damage dealer fisici come Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Trova target isolati (nessun nemico campione entro 425 unità) e brucialo con E + Q + AA. La E evoluta resetta a takedown e ti dà reset di jump in skirmish e teamfight."
  weakness: "Se il nemico resta raggruppato il danno della Q crolla — l'amplificatore di isolation dipende dal posizionamento. Hard CC (Malzahar R, Skarner R) cancella il jump e non hai escape."
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Carry jungler squishy senza hard CC"
      reason: "Camminano da soli per power-farmare; E + Q isolata di Kha'Zix li cancella prima che possano rispondere. Senza CC non c'è modo di fermare il dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Jungler con clear lento e poca mobilità"
      reason: "Kha'Zix invade più veloce con E e arriva al Scuttle Crab in tempo. Counter-jungla i camp dietro dopo ogni Drake — ruotano troppo lenti per punirti."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Backline ADC immobili o con poca mobilità"
      reason: "Late game la E evoluta atterra sulla back line scavalcando un muro. Senza dash non si riposizionano durante la finestra di invisibilità della R."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Bruiser jungler front-loaded con CC point-and-click"
      reason: "Il loro CC interrompe l'animazione del jump e ti blocca. Pre-6 ti vincono il duello in jungle: un invade a livello 3 è una kill gratis per loro."
    - examples: ["malzahar", "skarner"]
      archetype: "Campioni con suppression o lockdown unstoppable"
      reason: "La suppression non viene rimossa dai Mercury's Treads; appena ti taggano non puoi più R out e la finestra di invisibilità è sprecata."
    - examples: ["sett", "tahm-kench"]
      archetype: "Bruiser tanky con peel integrato per il carry"
      reason: "La loro W o grab strappa via il carry dalla finestra di isolation prima che la Q atterri. Ti serve un 1v1 pulito e loro tolgono quell'opzione."
---

## Panoramica

Kha'Zix è un assassin AD melee (assassin = campione ad altissimo burst progettato per cancellare un singolo target squishy — squishy = campione con poche difese, tipo gli ADC e quasi tutti i mage) il cui kit ruota interamente attorno al trovare target **isolati**. Isolato, nel suo caso, significa che nessun campione alleato è entro 425 unità del bersaglio — poco meno della distanza di un Mercury's Treads. La sua passive **Unseen Threat** marca i nemici isolati; la Q **Taste Their Fear** fa danno bonus enorme su di loro; la R **Void Assault** lo fa entrare e uscire dalla vista per impostare quel burst isolato. Pickalo contro squadre che camminano da sole — splitpusher, carry jungler, ADC backline immobili.

Il piano partita in jungle: clearala bot-to-top con **W** per il sustain (sustain = capacità di curarsi durante il clear), arriva a livello 3 con E sbloccata, poi inizia a gankare pre-6 con il pattern assassin: **E** in lane → aspetta che il target sia separato dal support → **Q** per il danno amplificato → finisci con auto-attack. Dopo il livello 6 ogni fight è una caccia: prendi l'**Evolved E** (range esteso e reset su takedown) così una kill ti rimborsa il dash e ti permette di uscire prima che il team collassi su di te. I fight su Drake e Rift Herald si vincono entrando in stealth con **R**, cancellando la backline e ri-stealthando per uscire.

## Build Consigliata

**Item iniziali:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. La pet Gustwalker dà movement speed fuori combat, perfetta per arrivare ai gank in fretta. Evita Mosstomper (la pet sustain) — la tua **W** ti cura già abbastanza nel ciclo di clear.

**Item core (nell'ordine):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primo item da rushare. Lethality (stat che dà armor penetration fissa contro target con poca armor, in pratica danno gratis sui squishy) più la active di velocità rendono triviali gank e skirmish.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — boots con ability haste così la **R** rientra prima. Più R è disponibile, più finestre di invisibilità ottieni per fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passiva di execute: target sotto il 5% HP muoiono istantaneamente. Chiude le kill che il tuo burst lascerebbe a 50 HP.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield blocca la prima abilità nemica dopo un channel breve. Ti salva da Malzahar R, Lissandra R, qualsiasi CC point-and-click che ti bloccherebbe prima che tu possa R out.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — armor pen late game che scala con l'armor del target, più uno slow sulle abilità che fanno danno: la tua Q insegue.

**Item situazionali:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — quando al team serve pressione in side lane: passiva cleave più active di execute ti permettono di splitpush (spingere una side lane da solo per costringere l'avversario a rispondere) senza perdere danno nei fight.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — contro comp con tanti bruiser (bruiser = fighter melee tanky tipo Sett, Aatrox, Mordekaiser): lo scudo + l'omnivamp (lifesteal che funziona su tutti i tipi di danno) ti tengono vivo nel trade in-out.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — contro setup pesante di vision (support enchanter come Janna, Lulu): on-cast cancella ward più danno bonus alle ward, così cammini invisibile attraverso la loro rete.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai Lucidity contro magic CC pesante. La tenacity (stat che accorcia la durata di stun e slow su di te) ti fa in tempo a R out prima che ri-engagino.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn): armor fissa più riduzione danno auto-attack.

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sono il default. Mercury's Treads o Plated Steelcaps solo se il matchup lo richiede.

**Skill order:** Massimizza **Q** per primo (lo scaling del danno isolato è il tuo DPS principale), **W** per secondo (sustain in jungle e slow su evolution), **E** per ultimo (rank extra dà danno raw ma quel che conta sono distanza dash e cooldown, non lo scaling). Punto in **R** ai livelli 6, 11, 16.

**Scelte di evolution (l'upgrade Q/W/E/R che scegli a ogni rank-up della R):** ordine standard è **Q al 6** (range esteso e refund su takedown isolato — il duello 1v1 più pulito), **E all'11** (range extra e reset su takedown per skirmish), **R al 16** (invisibilità più lunga, secondo recast). Scegli **W invece di Q al 6** solo se il team avversario ha più target immobili raggruppati (i tre coni di slow zonano tutta la squadra in un fight). Scegli **E per primo** invece di Q solo se devi scappare da un jungler con CC pesante (Lee Sin, Vi) — il reset early ti tira fuori dai gank falliti, ma rinunci a tantissima kill pressure.

**Rune:** Albero primario **Domination** con **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondario **Precision** con **Triumph** e **Coup de Grace** (oppure **Sorcery** se vuoi più sustain — sustain = cure durante il fight). Stat shards: Adaptive Force / Adaptive Force / Health.

## Matchup chiave

- **Lee Sin:** Evita gli invade a livello 2 e 3. Il suo Q-Q più lo scudo della W battono il tuo kit prima che la E sia online. Clearala bot-to-top, hovera lo Scuttle con vision e lascia che siano i tuoi laner a prenderlo se si over-extende.
- **Graves:** Pari early, a tuo favore dopo il 6. Mai duellarlo in open jungle pre-6: la cecità della W cancella la tua finestra di auto-attack. Aspetta un'occasione di isolation — gankalo in lane con **E + Q** e fatti peelare il suo ADC dal tuo laner.
- **Elise:** Gara di power spike. Lei vince i gank a livello 3; tu vinci il jump isolato a livello 6. Pareggia il tempo del primo clear e tradate obiettivi — hovera Drake con vision così non lo soloa.
- **Jarvan IV:** Minaccia di counter-engage. Il suo E-Q knock-up interrompe l'animazione del jump. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** prima del solito; lo spell shield mangia la sua combo flag-toss.
- **Karthus:** Matchup gratis. Non ha escape e cammina da solo a spingere wave. Tracciagli la posizione pre-6 con vision; al livello 6 **R + E + Q** lo cancella dall'altra parte del jungle mentre channela Requiem.

## Power spike & condizioni di vittoria

- **Livello 3 (Q + W + E):** Kit completo sbloccato. Cerca un gank isolato — flank in side lane via river bush, **E** dentro, **Q** sul laner avversario isolato (il support deve essere via), reset di auto-attack, **W** per lo slow al recall. Il gank pre-6 di Kha'Zix è uno dei più forti in assoluto quando il target è solo.
- **Livello 6 (prima Void Assault + prima evolution):** Scegli **Evolved Q** per il path di burst standard. Power spike forte negli skirmish a mid-river — R per entrare invisibile, E sul target marcato, Q per il danno amplificato, AA reset, ricasta R per uscire. La combo completa cancella un squishy da 1800 HP in due secondi.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completo (~ minuto 9-11):** Spike di burst. La active di velocità ti fa attraversare mezza mappa per un flank (entrare nel fight da un fianco non coperto, di solito dietro la backline). Forza fight intorno al secondo Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ minuto 16-19):** Finestra di reset. La tua E ora resetta su takedown — un teamfight pulito inizia con E sul carry, Q per la kill, e una seconda E sul prossimo target. Qui Kha'Zix diventa una macchina da pick (pickoff = eliminare un nemico isolato fuori dal teamfight) decisivo.

## Errori comuni

- **Saltare su un target che non è isolato.** Senza l'amplificatore di isolation (nessun campione alleato entro 425 unità), la Q fa circa il 60% in meno di danno. Aspetta che il support si sposti o che il tuo laner lo peeli — non tradare in mezzo al loro team.
- **Scegliere Evolved W come prima evolution di default.** La W evoluta è uno strumento di zoning per teamfight, non per il duello. Se il tuo team gioca su pickoff e skirmish, la Evolved Q è la scelta corretta nel 90% dei casi.
- **Usare la R per fare danno invece di riposizionarsi.** La R è una finestra di invisibilità per entrare e uscire da un fight, non un bottone di danno. Conserva il secondo recast per uscire una volta morto il target — ri-stealtharsi durante l'azione spreca il valore principale del tool.
- **Greedare i camp dopo un gank fallito.** Senza E reset (pre-Evolved E), se il gank fallisce non hai exit. Torna indietro per la tua jungle, non andare in autopilot al prossimo camp — il jungler nemico ti traccia il path e counter-ganka la prossima lane.
- **Buildare Eclipse per primo di default.** Eclipse trasforma Kha'Zix in un bruiser; rinunci al burst lethality che lo rende un assassin. Builda Eclipse solo quando il matchup è bruiser-heavy e non sopravvivi al trade in-out con la lethality pura.

## Suggerimento avanzato

Allena la combo **R-E-Q-AA-recast-R** in practice tool finché gli input non sono automatici. Il trucco è il reset di auto-attack tra Q e il recast: la Q resetta il timer della basic, quindi appena la Q atterra incastri un'auto, poi ricasta subito R per uscire. Eseguita pulita, la combo cancella un target da 1900 HP in circa 1.8 secondi e tu esci invisibile — un solo pick (pickoff = uccidere un nemico isolato fuori dal teamfight) sull'ADC nemico al setup di Baron è un obiettivo gratis. Lo skill ceiling è il timing dell'AA tra Q e recast: troppo presto e la Q non è ancora atterrata, troppo tardi e la finestra della R si è chiusa.
