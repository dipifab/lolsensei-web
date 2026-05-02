---
title: "Gwen Jungle: build e guida — Patch 16.9"
slug: "gwen-jungle"
language: "it"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida a Gwen jungle per League of Legends Patch 16.9: clear path, timing Scuttle e Drake, gank routes, build AP bruiser, matchup, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Le auto-attack infliggono danni magici extra basati sull'HP massimo del bersaglio. Gwen recupera HP da una parte del danno fatto ai campioni."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Colpo di forbici a cono fino a 6 tagli. Il cono centrale infligge true damage e riapplica la passive a ogni taglio — clear dei camp e anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Crea una zona di nebbia per 4 secondi. I nemici fuori non possono prenderla di mira — solo chi entra nella nebbia può colpirla. Reset difensivo + setup gank."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash breve che dà attack speed, range d'attacco e on-hit AP per qualche secondo. Cooldown rimborsato in parte se colpisci un campione — gap-closer per i gank."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lancia una salva di aghi che rallenta e applica la passive. Si può lanciare fino a 2 volte in più, ogni salva fa più danno della precedente."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini AD / diver (Zed, Khazix, Rengar) — la stasi di 2.5s copre il cooldown di W e spezza il burst window"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro 4+ tank/bruiser nel team avversario — sostituisce Riftmaker per il burn percentuale dell'HP massimo dal minuto 1"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro magic CC single-target (R di Lissandra, suppression di Malzahar, stun di Veigar) — lo scudo blocca un'abilità nemica"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contro composizioni di kite (Vayne, Ezreal) — più ability haste e movement speed per stare addosso alle carry mobili"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Completa Riftmaker intorno al minuto 16, forza fight di obiettivo al livello 6 con la W mist. In teamfight scioglie la frontline con Q true damage on-hit nella finestra di 4 secondi della mist."
  weakness: "Bersaglio facile da invadere ai livelli 1-3 (poco burst, un solo dash). Hard counter da junglers aggressivi early come Lee Sin ed Elise che puniscono il primo clear lento se la invadono."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision come primario: Conqueror stacka durante i clear lunghi e gli skirmish di Q + auto, dando danno adattivo e healing. Triumph premia i gank multi-kill, Legend: Alacrity potenzia la finestra on-hit di E, Last Stand aggiunge danno sotto soglia HP."
    secondary_rationale: "Resolve come secondario: Second Wind rigenera HP tra un camp e l'altro e dopo le invade, Overgrowth scala HP grezzo nel late game dove i teamfight dentro la W di Gwen brillano."
    secondary_alternative: "Contro mid AP avversari con tanto poke, swap Resolve in Sorcery con Manaflow Band (sustain mana per i clear di Q) e Transcendence (più ability haste per più refund di E e R più veloce)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank jungler senza grosso danno single-target"
      reason: "Q applica true damage in percentuale dell'HP massimo, ignora l'armor. I tank hanno HP pool enormi che lei sfalda in 3-4 colpi di Q in un 1v1 lungo dentro la W mist."
    - examples: ["master-yi", "shaco"]
      archetype: "Assassini squishy senza disengage"
      reason: "La W mist nega il loro target lock durante un all-in. Si committano, mangiano il cono di Q true damage in mist, e non hanno un secondo escape perché hanno già speso il dash."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassini con burst window"
      reason: "Il loro burst arriva in 1.5 secondi, ma la W mist li fa uscire dal target range a metà salto. Una volta whiffato il burst window, Gwen vince facilmente il trade prolungato."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Jungler invader early game"
      reason: "Gwen non ha burst ai livelli 1-3 e ha un primo clear lento. Gli invader le entrano nei camp e la killano prima che la passive entri in stack."
    - examples: ["kayn", "viego"]
      archetype: "Outscaler con tanta mobilità"
      reason: "Entrambi hanno tool di mobilità (Kayn cammina nei muri, Viego ha il dash on-hit) che ignorano il range della W mist; outscalano il tempo di Gwen negli skirmish late."
    - examples: ["kindred", "graves"]
      archetype: "Jungler ranged che kitano"
      reason: "Kindred e Graves auto-attaccano da fuori il range di protezione della W mist. Gwen deve committare E per entrare nel loro range, e loro kitano il dash con i propri tool di movimento."
---

## Panoramica

Gwen è una jungle AP bruiser — un campione melee che scala su Ability Power (la stat AP), regge qualche colpo da vicino, e vince i fight lunghi invece di bruciare un bersaglio in due secondi come farebbe un assassin. Come "skirmisher" il suo gioco è il duello prolungato: scioglie tank e bruiser con il **true damage** (danno che ignora sia armor sia magic resist), recupera HP durante il fight grazie alla passive, e si resetta il cooldown del dash quando colpisce un campione. La sua **W mist** è la firma del kit: una zona di 4 secondi che la rende non bersagliabile da chi sta fuori — un tool di gank e counter-engage unico nel jungle pool.

Il game plan è: completa un primo clear pulito, contesta lo Scuttle (il granchio nel river — uccidilo per ottenere visione e un piccolo buff di movement speed), gankka una lane a bassa mobilità intorno al livello 4-5 con la W mist, poi snowballa — trasforma un piccolo vantaggio early in uno molto più grosso — sul primo drake al minuto 5-7. Gwen è un campione mid-late: è più debole nei primi 3 minuti, quindi non farti pinnare al red buff avversario (il camp piccolo che dà l'effetto burn alle auto-attack) senza che il team lo sappia.

## Build Consigliata

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (il pet jungle AP-friendly — brucia i campioni nemici con on-hit damage durante i gank) più **Smite** (la summoner spell che ogni jungler prende — un colpo veloce a singolo bersaglio, usato per clearare i mostri più velocemente o per rubare obiettivi come Drake o Baron).

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade della quest dello starter jungle. Si auto-evolve intorno al minuto 3-4; il danno on-hit del pet aggiunge danno magico alle auto-attack, in linea con lo scaling AP di Gwen.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — il tuo item principale. Dopo 2 secondi in combat, parte del tuo danno si converte in true damage (passive "Void Corruption") e ottieni "omnivamp" (recuperi HP da una porzione di qualsiasi danno fai, abilità o auto). Costruito per i fight lunghi, esattamente quello che vuole Gwen.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (= ignora parte della magic resist nemica). Più danno sui bersagli squishy (campioni con poche difese, le carry avversarie).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed + AP + una passive che aggiunge danno magico a ogni auto-attack. Combinato con **E** (la finestra on-hit di Skip 'n Slash, dove ogni auto applica anche danno magico AP) diventi una torretta DPS continua nei fight lunghi.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP di late game. Trasforma Gwen da "DPS tanky" in carry vera.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini AD / diver (Zed, Kha'Zix, Rengar — i diver sono campioni che si tuffano sulla backline avversaria per uccidere le carry). L'attivo dà 2.5 secondi di stasi (diventi intoccabile ma non puoi agire) — abbastanza per spezzare il loro burst window e resettare il cooldown della W.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contro team con 4+ tank/bruiser. Sostituisce Riftmaker come primo item se ti serve burn percentuale dell'HP massimo dal minuto 1 di ogni fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC ("crowd control": stun, root, charm, qualsiasi cosa che blocchi il tuo champion) single-target. **R** di Lissandra, suppression di Malzahar, stun di Veigar. Lo scudo blocca completamente un'abilità nemica.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contro composizioni di kite (Vayne, Ezreal). Più ability haste e movement speed per stare addosso alle carry mobili.

**Boots:** Sorcerer's Shoes default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** con 3+ minacce AD nel team avversario. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro tanto CC (3+ stun o knockup).

**Skill order:** Maxa **Q** per prima (true damage e scaling AP — il tuo clear principale dei camp), maxa **E** per seconda (cooldown e danno on-hit), tieni **W** per ultima. **R** ai livelli 6, 11, 16. Inizia con **Q** al livello 1 per il primo clear più sicuro (il cono di Q colpisce tutto il pacchetto di mostri piccoli), prendi **E** al 2 per la mobilità tra i camp, poi **W** al 3 per la sicurezza prima dello Scuttle.

**Runes:** Primaria **Precision** con **Conqueror** (keystone che stacka durante i fight lunghi e dà danno adattivo + healing — perfetta per il playstyle DPS sostenuta di Gwen), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaria **Resolve** con **Second Wind** e **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchup chiave

- **Lee Sin:** Hard early, neutro late. Invade pesantemente al livello 2-3 quando Gwen non ha ancora la W. Inizia il camp opposto al tuo spawn (red buff se sei sul lato blu; blue buff se sei sul lato rosso) per stare lontana dal suo path tipico di invade. Dopo il livello 6 lo outscali in qualsiasi 1v1 dentro la W mist.
- **Master Yi:** Matchup di scaling free. Il suo Alpha Strike (**Q**, un multi-dash che lo rende brevemente non bersagliabile) non ignora la passive della W mist — lui resta comunque tagliato fuori da chi è dentro la nebbia. Forza i fight al livello 6 vicino al drake; quando si committa con Highlander (la sua **R**, che gli dà tantissima attack speed e movement speed), droppa **W** e spammagli **Q** durante il duello.
- **Sejuani:** Matchup difficile. La sua **R** è point-and-click (= non serve mirare, l'abilità si aggancia automaticamente al bersaglio) e ti congela durante il dash di **E**. Aspetta che usi la **R** su qualcun altro, poi committa con W. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima del solito.
- **Kha'Zix:** Pari-favorevole. Cercherà di evolvere "isolation damage" — danno extra quando il bersaglio non ha alleati vicini — per cacciare le tue carry. La W mist spezza il suo target lock durante un leap (il salto del suo Q). Quando si committa con **R** (stealth) + Q burst, droppa **W** sulla carry invece che su di te, e il danno si annulla.
- **Kindred:** Matchup brutto. Kita (= si muove all'indietro mentre attacca, mantenendo distanza) il tuo dash con la sua **Q** dash, e la sua ult zone (Lamb's Respite, un cerchio che impedisce agli alleati di morire al suo interno) salva qualsiasi alleato tu provi a divare (= rincorrere sotto torre per ucciderlo). Salta il suo invade range, prendi obiettivi nei buchi di cooldown della sua **R**, e chiedi al top aiuto negli skirmish.

## Power spike & condizioni di vittoria

- **Livello 3:** Si sblocca la prima **W**. Ora puoi gankkare le lane — droppa la W sul laner, dash con E, Q + AA in mist. La nebbia nega a qualsiasi carry o support ranged un targeting pulito su di te per 4 secondi, la finestra di protezione gank più lunga del jungle pool.
- **Livello 6:** Si sblocca la prima **R**. La salva di aghi applica il danno magico percentuale-HP della passive a ogni campione colpito, e lo slow concatena le tue auto-attack. Forza un drake fight o un counter-gank intorno al minuto 8-9 — il kit raggiunge la prima spike importante.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** Spike di omnivamp + true damage. Ora puoi solo-divare la maggior parte degli squishy e sopravvivere ai gank 1v2 se hai la W up.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completata (~ minuto 24-26):** Spike DPS. Con **E** attivo le tue auto-attack vanno molto più veloci e applicano on-hit AP — il momento di entrare in ogni teamfight vicino a drake/Baron e farti peelare dal team.
- **3 item + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 30+):** Fase carry. Le tue auto-attack staccano il 25%+ dell'HP per colpo sulla frontline avversaria. Ogni teamfight in cui il tuo team ti protegge ("peela" i nemici da te) finisce in vittoria.

## Errori comuni

- **Primo clear sullo stesso lato del jungler avversario.** Il primo clear di Gwen è lento e gli HP early bassi; un'invade al secondo buff di solito significa un flash perso o una morte. Inizia dal lato opposto allo spawn nemico finché non scout il loro path.
- **Attivare W troppo presto in un gank.** La mist è una finestra di 4 secondi — se la droppi prima che il laner sia pinnato, il nemico esce camminando. Atterra prima **E** + auto, poi **W** quando il nemico reagisce.
- **Q sul camp da fuori il cono.** La zona di danno di **Q** è il centro (il tick di true damage). Posizionati col camp nei 30 gradi interni dell'arco — triplichi il DPS al primo cast e clari ~3 secondi prima.
- **Smite-flippare obiettivi senza R.** Lo smite-fight (il momento in cui entrambi i jungler committano Smite a un obiettivo conteso) è mediocre quando **R** è down. Forza gli obiettivi solo con l'ult up e almeno una salva di aghi riservata per il jungler avversario.
- **Auto-attaccare fuori range della R.** Quando **R** è up hai 3 salve totali. Resta entro 1000 unità dal bordo del fight per poter sempre rilanciare **R** su un bersaglio basso di HP invece di correre dentro la morte.

## Suggerimento avanzato

Usa la **W** mist per fintare le skillshot (= abilità che vanno mirate manualmente in linea o ad area) durante i gank: quando un laner avversario con uno stun o root a lungo raggio (Lissandra **E**, Morgana **Q**, Veigar **E**) sta per reagire al tuo dash di **E**, droppa **W** sul tracciato tra te e lui appena entri in range. La mist ti rende non bersagliabile da fuori — spesso si mangiano la cast e tu ottieni 4 secondi di danno senza CC. Il trucco è temparla sull'animazione di wind-up (i frame di caricamento prima che la spell parta), non dopo che è già atterrato.
