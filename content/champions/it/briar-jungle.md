---
title: "Briar Jungle Build & Guida — Patch 16.9"
slug: "briar-jungle"
language: "it"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Guida Briar jungle per League of Legends Patch 16.9: clear path, build core lifesteal, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Le auto e le abilità applicano un sanguinamento a stack che cura Briar in base al danno inflitto. La cura bonus scala con gli HP mancanti. Niente HP regen base."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Salto corto: stuna il bersaglio e riduce in % Armor/MR. Gap closer (chiude distanza dal nemico) e apertura di trade (scambio breve di colpi)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Briar salta in avanti e si auto-aggancia (auto-taunt) al nemico più vicino con priorità champion, guadagnando Attack Speed, Move Speed e auto AOE. Rilancia per un chomp potenziato che scala su HP mancanti e cura."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Cancella Blood Frenzy e canalizza: damage reduction e cura % HP durante la carica. Al rilascio rallenta; a piena carica respinge e stunna su muro. Il self-cancel della W è la meccanica chiave."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Briar lancia un gemstone globale che marca il primo champion colpito come preda. Vola addosso, fear sui nemici intorno all'atterraggio, e Frenzy empowered con resistenze, lifesteal e Move Speed bonus finché la preda non muore."
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro double-AD comp (es. Yasuo + Caitlyn): converte il burst in un sanguinamento spalmato, ti dà tempo di resettare col chomp di W"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP (Syndra, Veigar, Lissandra) — lo scudo magico si attiva quando un AP threat è in pieno combo addosso a te"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dagli Steelcaps se l'avversario ha 3+ CC duri (stun, root): la tenacity evita che la R venga interrotta a metà volo"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro composizioni AP-heavy con danno magico continuo: amplifica del 25% la cura di Crimson Curse e del chomp di W"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Centra la R su un carry di backline e cavalca la Frenzy empowered finché la preda non cade. Sundered Sky e Bloodthirster ti tengono in HP durante la chase; il fear sgrana i loro peeler."
  weakness: "Niente range e il self-taunt della W ti incolla al nemico più vicino — gli avversari esperti fanno bait sulla Frenzy verso un tank, poi peelano da fuori range mentre la catena di CC ti inchioda."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Albero Precision (rune da fight lungo): la W Frenzy dura 5+ secondi, quindi i keystone burst sprecano danno presto. Conqueror accumula stack a ogni colpo e picca quando atterra la R. Triumph cura sulla kill, Alacrity aggiunge Attack Speed, Last Stand paga a basso HP."
    secondary_rationale: "Domination secondaria: Treasure Hunter dà gold extra sui primi gank (gank = attacco a sorpresa dal jungle in lane) e Relentless Hunter aggiunge Move Speed fuori combattimento per follow-up dell'R cross-map (arrivi in side lane una wave prima)."
    secondary_alternative: "Se l'avversario ha 3+ CC da abilità (stun/root tipo Lissandra R, Maokai E, Sejuani Q), swap Domination verso Resolve con Second Wind (HP regen passivo sotto il 50%) e Revitalize (+10% sulla cura di W e R). Sacrifichi snowball per sopravvivere durante le catene di CC."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Mage immobili in mid lane"
      reason: "La R lancia uno skillshot globale che marca il primo champion colpito. Mage di backline senza dash vengono trascinati in una catena di fear + Frenzy da cui non riescono a uscire prima che il chunk di danno arrivi."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank jungler lenti"
      reason: "Lo shred percentuale dell'Armor della Q taglia le loro resistenze, e la W con Attack Speed più sustain vince i fight lunghi. Non ti fanno kite e il loro CC è single-cast: una volta in cooldown sopra-curi tutto il resto."
    - examples: ["warwick", "shyvana"]
      archetype: "Skirmisher sustain senza escape"
      reason: "1v1 stile mirror nella jungle. Il chomp di Briar scala su HP mancanti, quindi più il fight si trascina più la matematica gira a suo favore. Lo stun della Q interrompe le ulti canalizzate."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "CC AOE con root multipli"
      reason: "Concatenano CC su Briar in mezzo alla Frenzy, e l'unica fuga è la E per cancellare la propria W — ma la E è un channel lungo, quindi le rimettono CC prima che la cura completi. La R la spinge nella posizione peggiore possibile."
    - examples: ["olaf", "morgana"]
      archetype: "Champion CC-immune o anti-heal"
      reason: "L'R di Olaf rimuove (cleanse) il knockback e lo stun della E; la E di Morgana blocca con spell shield lo stun di Q e il fear della R, rompendo la finestra di engage prima che la Frenzy salga."
    - examples: ["nidalee", "gragas"]
      archetype: "Poker a lunga gittata con displacement"
      reason: "Nidalee picchia il clear di Briar con javelin da fuori range della W; la R o la E di Gragas la sbattono fuori dalla Frenzy a metà chase, resettando la rampa di danno e lasciandola senza sustain."
---

## Panoramica

Briar è una **diver / skirmisher** melee (un champion che salta sul carry avversario e vince i 1v1 lunghi). Trasforma la sua mancanza di controllo in una feature: la **Blood Frenzy (W)** la mette in pilota automatico sul nemico più vicino con bonus di Attack Speed e Move Speed, e la passiva **Crimson Curse** la cura del sanguinamento che le sue stesse auto-attack applicano. Non ha HP regen base, quindi l'unico modo per restare in vita è continuare a colpire — quando smette di attaccare, smette di curarsi. La sua **Certain Death (R)** è uno skillshot globale (un'abilità che attraversa tutta la mappa) che marca un bersaglio come preda e la blocca in una chase potenziata finché la preda non muore, con fear (effetto che fa scappare i nemici a caso) su tutto ciò che la circonda all'atterraggio.

Il piano partita è clear veloce (clear = uccidere tutti i mostri neutrali del tuo quadrante di jungle) dei camp con la W AOE (area of effect = danno su zona), gank (attacco a sorpresa dal jungle) dal livello 6 dove la R può isolare un carry di backline (il damage dealer che sta dietro al team) lontano dai peeler (alleati che proteggono il carry). Da lì snowball (trasformare le prime kill in altre kill) in una macchina da chase che sopra-cura i 1v1 con lifesteal degli item e self-heal stackati. Il movimento da skill alto è il self-cancel W-in-E: sapere esattamente quando interrompere la propria Frenzy con **Chilling Scream (E)** per curarsi e riposizionarsi, poi rientrare con la Q.

## Build Consigliata

**Item iniziali:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. La quest del pet completa attorno al minuto 3-4.

**Item core (nell'ordine):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — pet upgrade da Hailblade (auto-evolve attorno al minuto 3-4 una volta accumulata XP). Il companion Gustwalker dà Move Speed quando colpisci un champion, che si somma al bonus della W e trasforma la transizione clear-in-gank in dive a sorpresa (dive = saltare sul nemico anche sotto torre per ucciderlo).
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo item legendary, primo grande power spike (il momento in cui il champion diventa molto più forte). La sua passiva trasforma la prossima auto-attack in un colpo critico garantito (crit = colpo che fa danno doppio) e ti cura. Quella cura coincide col chomp di W e dà a Crimson Curse il combustibile in HP-mancanti che le serve per scalare.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro la maggior parte delle composizioni. Riducono il danno preso dalle auto-attack (AA = auto-attack), cosa che pesa molto nei fight lunghi di Frenzy contro marksman (carry fisici a lunga gittata, tipo Caitlyn o Jinx).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Attack Damage extra scalato sull'AD base più lo scudo Lifeline (passiva su soglia HP: scudo che parte automaticamente quando l'HP scende sotto il 30%). Lo scudo è la rete di sicurezza per le R commit (engagement totale con R) andate male.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — alza il cap del lifesteal (lifesteal = % del danno auto-attack convertito in cura) e trasforma la cura in eccesso in scudo. Combinato con Crimson Curse + Sundered Sky, sopra-curi qualsiasi team che non abbia comprato anti-heal (item che riducono le cure ricevute).

**Item situazionali:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn): converte il burst incassato in un sanguinamento spalmato su pochi secondi, dandoti tempo di resettare col chomp di W.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP (Syndra, Veigar, Lissandra). Lo scudo magico parte proprio quando un AP threat è in pieno combo addosso a te.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dagli Steelcaps se l'avversario ha 3+ CC duri (CC = stun, root, fear che bloccano il personaggio). La stat Tenacity di questi boots riduce la durata di quei CC, così la R commit non viene chain-stunnata a metà volo.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contro comp AP-heavy con danno magico continuo: amplifica del 25% la cura di Crimson Curse e del chomp di W, doppiando l'identità di Briar invece di patchiarla.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default. Passa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il numero di CC supera quello degli AA threat.

**Skill order:** Massimizza **W** per primo (DPS, sustain, Move Speed), **Q** per secondo (gap close + shred percentuale Armor/MR), **E** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondario **Domination** con **Treasure Hunter** e **Relentless Hunter**, oppure **Resolve** con **Second Wind** e **Revitalize** se la squadra avversaria catena 3+ CC da abilità su di te.

## Matchup chiave

- **Warwick:** Mirror di sustain nella jungle (entrambi i champion si curano molto in fight). Lui scala con Attack Speed sulle auto, tu scali con la W AOE più il chomp che fa danno su HP mancanti. Non aprire a HP pieni: lascia che cali la Q (che ti fa fear) per prima, cancella la tua Frenzy con E per schivarla, poi rientra quando la sua ulti è in cooldown.
- **Lillia:** Ti kita (ti attacca da lontano mentre arretra) col danno passivo della Q e lo slow della W. Tieni la E per quando ti cammina addosso spammando Q: il knockback la sbatte su un muro e la stunna. Senza E, ti gira intorno per sempre.
- **Lee Sin:** Fighter early che ti batte a livello 3 se apre con Q + Smite (smite = summoner spell del jungler). Evita la sua red-side jungle fino a livello 4; dopo Sundered Sky online la matematica gira a tuo favore e il suo scudo W cura meno del tuo chomp.
- **Sejuani:** Tank jungler con CC duro. Lo shred dell'Armor sulla Q (riduzione percentuale della stat Armor) la apre, ma la sua R cancella la tua R commit a metà volo. Tieni d'occhio il suo cooldown ulti — se è disponibile, non aprire R su un target vicino a lei.
- **Kha'Zix:** Il classico counterpick (un champion scelto apposta per neutralizzarti in draft) per gli skirmisher. Ti isola dal team e fa burst in 2 secondi (burst = danno alto in 1-2 secondi). Raggruppati col team dopo il livello 6 e gioca con vision (usa i ward per non essere sorpresa); non andare a fare invade da sola (entrare nel jungle nemico) nel suo quadrante.

## Power spike & condizioni di vittoria

- **Livello 3:** Tutte e tre le abilità base online. Prima finestra ragionevole di gank — Q sopra un muro su un target, W in Frenzy, Q stun contro il muro.
- **Livello 6:** Prima **Certain Death**. I gank cross-map (R lanciata attraverso la mappa su una side lane) diventano una minaccia reale: anche un nemico che ha già usato Flash e non ha dash perde lo scambio una volta che la R lo aggancia.
- **Sundered Sky completo (~ minuto 10-12):** Primo spike di duel (il momento in cui vinci i 1v1 in modo affidabile). Vinci il 1v1 contro la maggior parte dei jungler e dei laner su cui apri la R da fuori vision.
- **Sterak's Gage online (~ minuto 22-26):** Lo scudo Lifeline trasforma le R commit andate male in kill. Combinato con l'overcura di Bloodthirster diventi sia frontline (il corpo tank che apre i fight) sia finisher.

## Errori comuni

- **W-Frenzy su un tank invece che sul carry.** Il self-taunt della W si aggancia al nemico più vicino con priorità champion, ma se Maokai (un tank) è più vicino di Caitlyn (un carry) ti mangi Maokai. Usa la Q per prima per saltare oltre la frontline (i champion tanky davanti al team); la Q ti piazza sul target prioritario prima che parta il pilota automatico della W.
- **Tenere la E troppo a lungo per il wall stun.** La E a piena carica respinge i nemici, ma il channel (il tempo in cui resti ferma a lanciare l'abilità) è lungo e durante il channel prendi danno (solo ridotto, non azzerato). Se non hai un muro allineato, rilascia tra il 50 e il 70% di carica per il solo slow — la E parziale ti salva, la E piena ti uccide.
- **R su un gruppo nemico da 4.** La R fear i nemici attorno alla preda, ma recuperano dopo 1.5 secondi. Quando rinvengono sei sola in mezzo al loro team in Frenzy potenziata senza alleati che ti peelano (peel = protezione che stacca chi ti attacca). Usa la R quando la preda è sgranata — flank (un nemico che si avvicina di lato da solo), rotazioni, momenti di backline isolata — non su un engage pulito raggruppato (un fight in cui il nemico è tutto compatto).
- **Dimenticarsi che Crimson Curse vuole HP mancanti per scalare.** La cura bonus cresce mentre l'HP scende. Non recallare a base (recall = teletrasporto verso la base) a HP pieni dopo un gank riuscito se sta arrivando un secondo fight; restare al 40% HP rende il prossimo chomp di cura quasi il doppio.

## Suggerimento avanzato

Allena il **self-cancel della W tramite E**: quando la Frenzy aggancia il nemico sbagliato (un tank invece del carry, o ti porta verso il CC), premi E in mezzo alla Frenzy per resettare. La damage reduction durante il channel di E + la cura su % HP max trasforma un engage andato male in un riposizionamento gratis. Rilascia la E senza carica (o al 30%) nell'istante in cui il target prioritario entra in range della Q, poi Q addosso e ri-W per partire con una Frenzy pulita sulla persona giusta. Il costo totale di animazione è circa 1 secondo; la differenza in conversione kill è una barra HP intera.
