---
title: "Irelia Top Build & Guida — Patch 16.9"
slug: "irelia-top"
language: "it"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Guida Irelia top lane per League of Legends Patch 16.9: starter kit, build Trinity Force, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Colpire un nemico con una spell dà stack di Attack Speed (max 4). A pieni stack Irelia infligge anche danno magico bonus on-hit."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash che colpisce un bersaglio e cura. Il cooldown si resetta se il target muore o è Marked — il cosiddetto Q reset (incatena dash da minion a minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel di un colpo caricato che cresce in danno e riduce il danno fisico e magico subito durante la carica (channel = tieni premuto per caricare)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Piazza una lama, rilancia per la seconda. Volano una verso l'altra stunnando e Marking tutto in mezzo. Strumento principale di setup."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Volata di lame a lunga gittata che Marca i champion colpiti, poi forma un muro intorno al primo champion che rallenta e fa danno. Engage e zoning."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro danno magico pesante o CC concatenato (Lissandra, Ryze, Malphite — la tenacity riduce stun e slow)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro kiter e top ranged (Vayne, Gnar, Kennen) — dash + slow attivi aiutano a stickare su target mobili"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro tank con stack di armor (Malphite, Ornn, Sion) — l'armor shred amplifica le Q ripetute e il follow-up"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "contro comp da splitpush dove servono waveclear e sustain 1v1 (lifesteal su AOE = cleave ad area + cura)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Centra E per lo stun, Q-resetta tra i minion per stickare sul target, poi trade con stack di passiva attivi. Snowball della lane (trasforma un vantaggio iniziale in un vantaggio più grande) verso le skirmish di mid-game."
  weakness: "Senza E centrata non hai engage affidabile. Poke a lunga gittata e disengage ti spengono prima che tu raggiunga la front line. Senza Trinity Force o Stridebreaker vieni kited male."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Tank lenti e immobili senza poke ranged"
      reason: "Non hanno disengage contro lo stun della E e nessuna risposta ai Q reset attraverso la wave; li out-tradi a ogni livello una volta che Conqueror inizia a stackare."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Juggernaut melee senza dash"
      reason: "E + Q ti danno gap-close, e la riduzione danno della W copre la finestra di burst nemica; non possono kitarti né scappare allo stun."
    - examples: ["azir", "ryze"]
      archetype: "Mage di media gittata flexati top"
      reason: "Squishy a corto raggio (HP bassi, difese basse) senza dash vengono one-shottati una volta uscita Trinity Force con stack pieni di passiva."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Top ranged o kiter"
      reason: "Ti auto-attaccano fuori range della E, kitano la Q col loro dash o trasformazione, e puniscono ogni avvicinamento. Serve Stridebreaker solo per fare engage."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelist con counter point-and-click o true damage"
      reason: "Fiora pare la E o la R, l'E hookshot di Camille stunna attraverso il tuo dash, la E di Jax stunna e supera la tua passiva basata su AS in scambi prolungati."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane bully con strumenti anti-skirmisher"
      reason: "Il suppress di Malzahar (silence point-and-click + lockdown) cancella i tuoi Q reset; la W empowered di Renekton stunna attraverso la tua W in carica e chiude il trade prima che tu scali."
---

## Panoramica

Irelia è una skirmisher melee (un fighter che vince con scambi corti e ripetuti, non con un singolo burst). Vive o muore sui dash di **Bladesurge (Q)**. La Q ha cooldown base lungo ma si **resetta** (cooldown ripristinato all'istante) ogni volta che uccide un minion o colpisce un target con il debuff Mark (un'icona che le spell di Irelia applicano ai nemici). Una sola skirmish può incatenare quattro o cinque dash di fila. La passiva **Ionian Fervor** stacka Attack Speed fino a quattro volte quando piazzi spell (ogni spell che colpisce aggiunge uno stack, fino a quattro), e il quinto stack aggiunge danno bonus e riduzione di crowd-control.

Il game plan in top lane è semplice da raccontare ed esigente da eseguire. Usa **Flawless Duet (E)** per centrare lo stun (richiede una piccola finestra di setup), follow-up con **Q** sul target stunnato, **W** per mitigare il danno di ritorno e Q-reset attraverso la wave per disimpegnarti o inseguire. Da livello 6, **Vanguard's Edge (R)** trasforma le skirmish di lane in kill aggiungendo zone control e un secondo Mark per Q reset gratuiti. Mid-game roami attraverso la wave con i Q reset per cercare pickoff (eliminare un nemico isolato fuori dal teamfight) e ruotare sugli obiettivi.

## Build Consigliata

**Item iniziali:** Doran's Blade + 1 Health Potion. Prendi Doran's Shield solo contro lane di harass ranged (Kennen, Quinn, Vayne) dove serve la rigenerazione.

**Item core (nell'ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — il tuo spike principale. La passiva Sheen (un effetto interno che si attiva, in gergo "proc", sulla prossima auto-attack dopo una spell) combacia con ogni Q dash; l'Ability Haste abbassa il cooldown della Q; l'Attack Speed completa lo stack della passiva.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro team AD-pesanti. Comprali dopo Trinity se la lane è melee o AD ranged.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, scaling AD, e uno scudo a HP basso che rende le finestre di dive sopravvivibili.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il danno fisico subito in un sanguinamento spalmato su qualche secondo (danno diluito nel tempo, non istantaneo). Buy contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn): sopravvivi alla finestra di burst abbastanza per Q-uscire.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — crit garantito sul primo basic attack contro un champion, più heal. Si incastra bene con il ciclo Sheen + Q reset.

**Item situazionali:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contro danno magico pesante o CC concatenato (Lissandra, Ryze, Malphite). La tenacity riduce stun e slow.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — mythic alternativo contro kiter e top ranged (Vayne, Gnar, Kennen). L'attivo dash + slow ti dà un gap-closer non legato alla Q.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro tank con stack di armor (Malphite, Ornn, Sion). L'armor shred amplifica le Q ripetute e il follow-up del team.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quando fai splitpush (spingi una side lane da solo per costringere l'avversario a rispondere). AOE cleave più lifesteal rendono triviali 1v1 e waveclear.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default. Passa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha 2+ fonti di CC concatenato.

**Skill order:** Massimizza **Q** per primo (cooldown più basso = più reset, più danno), **E** per secondo (setup dello stun), **W** per ultimo. R ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondario **Resolve** con **Bone Plating** e **Revitalize**. Prendi **Press the Attack** al posto di Conqueror contro lane di burst dove i trade brevi vincono la lane (es. Pantheon, Renekton early): Press the Attack premia 3 colpi in 4 secondi con uno spike di danno invece di stackare in trade lunghi.

## Matchup chiave

- **Renekton:** Lane bully. Stai sicuro pre-3, schiva la sua W stun e farma sotto torre. Il power swing arriva al 6 con la R; tradare solo dopo che la **W** può assorbire il suo combo.
- **Fiora:** Para la tua E stun e il Mark della R con la sua **Riposte (W)**. Fingi la parry lanciando una sola lama della E come finta, poi commit con Q solo quando la sua W è in cooldown.
- **Malphite:** Lane gratis pre-6: schiva il suo E slow e Q-resetta nella wave per farlo harass. Dopo il 6 può flash-R sul tuo team — raggruppa con gli alleati per gli obiettivi e non extendare (spingere oltre il river senza backup) senza vision ward.
- **Vayne:** Hard counter se non sbaglia. Ti kita (si muove all'indietro mentre attacca, mantenendo distanza) la Q con **Tumble (Q)** e ti consuma con **Silver Bolts (W)**. Compra Stridebreaker per primo, freeza la wave vicino alla torre (tieni la wave ferma sotto la tua torre così lei non last-hitta in sicurezza) e chiama gank del jungler prima del 6.
- **Camille:** Più o meno pari. Il suo **Hookshot (E)** stunna attraverso il tuo dash; tieni **Flawless Duet** per stunnarla a metà hookshot. Chi piazza prima il proprio CC vince il trade.

## Power spike & condizioni di vittoria

- **Livello 3:** Tutte e tre le abilità base online. Puoi centrare E stun + Q + auto-attack + W per una finestra completa di trade con stack di passiva.
- **Livello 6:** **Vanguard's Edge (R)** sblocca una finestra di all-in (commit totale alla kill). Il Mark della R ti dà un Q reset gratuito attraverso la gabbia; ulta su un target a HP basso quando il jungler arriva.
- **Trinity Force completo (~ minuto 14-16):** Il danno per Q sale grazie alle proc di Sheen. Il controllo della wave si ribalta: puoi shovare e roamare verso gli obiettivi con Q reset attraverso la wave laterale.
- **3 item (Sterak's online, ~ minuto 24-28):** Diventi una skirmisher da teamfight: dive sulla back line (i carry squishy che stanno dietro ai loro tank) attraverso i Q reset, sopravvivi al loro burst con lo scudo di Sterak's + W e ripulisci con la cage della R.

## Errori comuni

- **Spammare Q senza setup.** Q nuda su un target senza Mark consuma il cooldown base lungo per un solo dash. Centra sempre prima la **E** stun, oppure incatena Q su un minion a HP basso per tenere vivo il ciclo di reset.
- **Tenere troppo la W durante uno stun.** **Defiant Dance** è un channel: non puoi muoverti né attaccare mentre carichi. Tap-cancel la W dopo la finestra di riduzione danno se il nemico disimpegna — non restare a caricare per il rilascio massimo se nessuno è in range.
- **Engage attraverso una parry.** Fiora **W**, Sivir spell shield, Olaf R: si mangiano la tua E stun gratis. Bait quelle abilità prima, poi committi il CC.
- **Splitpush pre-Trinity.** Senza Trinity il danno su torri e wave è debole; cedi tempo per niente. Tieni la wave vicino alla torre fino a Trinity online, poi spingi la side lane.
- **Ultare un solo target con il team raggruppato.** **R** in cage su un singolo squishy è sprecata se il loro tank può body-block. Mira la R per pizzicare 2-3 nemici attraverso una choke (un corridoio stretto in jungle) e lascia che la cage zoni la back line fuori dal fight.

## Suggerimento avanzato

Allena il combo **R-flash**: lancia **Vanguard's Edge** in una direzione, poi subito **Flash** in un'altra per ridirezionare la volata di lame. Le lame seguono la posizione di Irelia, quindi un flash perpendicolare alla linea di lancio ti permette di mettere in cage un champion che si credeva al sicuro fuori range. Usalo come strumento di engage quando il team ha bisogno di un pickoff (eliminare un nemico isolato) su un carry in fuga intorno alla pit del dragon o del baron.
