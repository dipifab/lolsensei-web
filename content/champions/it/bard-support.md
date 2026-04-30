---
title: "Bard Support Build & Guida — Patch 16.9"
slug: "bard-support"
language: "it"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Guida Bard support per League of Legends Patch 16.9: gameplay roaming-pickoff, build, matchup chiave, power spike, errori comuni e tip avanzata sul wall-stun."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Meeps spawnano accanto a Bard e aggiungono danno magico bonus alle sue auto-attack. I chime sparsi sulla mappa danno XP, mana e move speed fuori dal combattimento."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Skillshot lineare che rallenta il primo bersaglio. Se il proiettile colpisce un secondo nemico o un muro, entrambi vengono stunnati. I wall-stun sono lo strumento di pickoff signature di Bard."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Piazza un altare che si carica per 10 secondi. Il primo alleato che ci passa sopra cura HP e ottiene un breve boost di move speed. Fino a 3 attivi. I nemici lo distruggono."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Apre un portale a senso unico attraverso il terreno vicino. Qualsiasi campione (alleato o nemico) può usarlo. Cooldown lungo: serve per gank, escape o flank a sorpresa."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "AOE a lunga gittata che mette campioni, minion, mostri e torrette in stasi per 2.5 secondi. Usata per lockare bersagli, salvare alleati dal colpo di grazia o congelare un dive in torre."
      dd_spell_id: "BardR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro lockdown CC single-target sull'ADC (Morgana Q, Ashe R, Leona E in catena R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro comp di burst AOE (Yone + Malphite, setup teamfight di Orianna)"
    - dd_id: "3107"
      name: "Redemption"
      against: "contro comp da teamfight raggruppati: l'area heal funziona anche da morto"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini o diver pesanti (campioni che ti saltano addosso per ucciderti in 1-2 secondi: Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "quando il tuo ADC è la win condition e il team avversario ha multiple minacce di dive"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roama costantemente per raccogliere chime e wall-stunna nemici isolati con Q. Nei teamfight, R sulla front line avversaria così il tuo team cancella la backline prima che l'engage si committa."
  weakness: "Squishy, nessun dash. Se Q manca o non ottiene il wall-stun non hai follow-up CC e il tuo ADC muore nel 2v2. Punito da support con CC point-and-click e da bully aggressivi al livello 2."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
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
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Enchanter immobili senza dash"
      reason: "La minaccia del Q-into-wall stun li costringe a giocare lontanissimi dietro ai minion. Senza spell di escape, un wall-stun pulito si trasforma in kill prima che il loro team ruoti in soccorso."
    - examples: ["alistar", "nautilus"]
      archetype: "Engager melee telegrafati"
      reason: "La R cancella il loro engage commit. Subito dopo Flash-W sull'ADC, premi R sull'engager: si congelano in stasi mentre il tuo ADC esce gratis."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Enchanter di lockdown con CC point-and-click"
      reason: "Il loro CC è point-and-click (niente skillshot da schivare). Fanno **peel** sui tuoi tentativi di dive senza fatica (peel = proteggere un alleato interrompendo chi gli è saltato addosso) e Bard non ha dash per disengage quando il trade si ribalta."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Hooker a lunga gittata"
      reason: "L'hook (range 1100-1150) ti raggiunge prima che la tua linea di Q sia pulita. Senza dash, dopo un hook la lane gioca 1v2 per 30 secondi."
    - examples: ["pantheon"]
      archetype: "Bully aggressivi al livello 2"
      reason: "Lane di all-in al livello 2-3 puniscono le tue stat early deboli. Non hai sustain a parte la W che richiede 10 secondi per caricarsi prima di pagare."
---

## Panoramica

Bard è un **support roaming** (un support che lascia continuamente la lane per influenzare il resto della mappa). La sua identità sta **fuori** dal 2v2 di bot lane (lo scontro tra i due ADC — i carry damage principali — e i due support). Raccoglie **chime** luminose che spawnano sulla mappa: collezionarle dà esperienza, mana e move speed fuori combattimento gratis. Converte quella mobilità in **pickoff** — catturare nemici isolati lontano dal team e ucciderli. La sua Q è uno slow a lunga gittata che diventa stun se il proiettile colpisce un secondo bersaglio o, ancor più famoso, un muro dietro al primo. La sua R è una bomba di stasi (volo di 4 secondi, poi una grande AOE) che congela tutto nella sua area per 2.5 secondi: alleati, nemici, torrette e minion inclusi.

Game plan: raccogli chime di continuo, cerca pickoff col wall-stun nel **river** (la zona neutrale al centro che divide le due metà della mappa) e nella jungle, e tratta la bot lane come una delle tre lane che pattugli — non come il posto dove vivi. Nei teamfight sei il **disengage** (chi spezza l'**engage** avversario — l'inizio del fight — usando R) e il **catch** (chi blocca i bersagli isolati) — quasi mai la front line.

## Build Consigliata

**Item iniziali:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (consumabili che curano HP nel tempo). World Atlas è il quest item da support: genera oro nel tempo e si trasforma automaticamente in una di quattro evoluzioni man mano che danneggi i campioni e **wardi** la mappa (piazzi i ward, oggetti che danno visione a tempo nei cespugli, così il tuo team vede cosa succede). Per Bard deve sempre diventare Bloodsong.

**Item core (nell'ordine):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — completamento del path support. È la scelta giusta perché Bard è un support da **poke** (danno a distanza per logorare HP) e pickoff, non un **enchanter** (un support da heal/scudo come Soraka o Janna). Bloodsong dà AP (Ability Power — la stat che scala il danno magico) e premia chi piazza danno sui campioni avversari — esattamente quello che fanno i tuoi combo Q + auto-attack.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — stivali con **ability haste** (stat che riduce tutti i tuoi cooldown) e cooldown ridotto sui **summoner spell** (le due spell extra in alto a destra della barra: Flash, Ignite, ecc.). Il tuo **Flash** torna prima per gli engage, e la **R** ruota più spesso per i fight su obiettivi (teamfight su drake o Baron — Baron Nashor è il mostro neutrale gigante nel river top che dà un buff potente a tutto il team).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — abilità attiva che dà 4 secondi di move speed extra per te e per gli alleati vicini. Si combina col tuo roam già veloce per **gank** (correre in un'altra lane per uccidere un nemico) da bot a mid impossibili da sfuggire.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — dà heal/shield power che cresce nel late-game (dopo ~25-30 minuti, quando i campioni hanno 4+ item). Comprala quando la partita si allunga e i charge (cariche) della W curano numeri reali.

**Item situazionali:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — attivo che pulisce uno stun, un root (immobilizzato ma puoi attaccare), o un fear (movimento incontrollato) dall'ADC. Compralo contro lockdown single-target (Morgana Q, Ashe R, catena Leona E in R).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — attivo che dà uno scudo a tutti gli alleati vicini per 2.5 secondi. Compralo contro comp da burst AOE (squadre tipo Yone + Malphite + Orianna che one-shottano — uccidono in un colpo — team raggruppati).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — area heal piazzabile sopra agli alleati anche da morto. Si combina con comp da teamfight raggruppati intorno agli obiettivi.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — attivo che ti rende invulnerabile per 2.5 secondi. Compralo contro assassini o **diver** pesanti (campioni che ti saltano addosso per ucciderti in 1-2 secondi: Zed, Talon, Diana) quando ti stanno chiaramente targettando.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — redirige il 12% del danno subito dall'alleato vincolato su di te, e cura quell'alleato sulle tue auto. Compralo quando il tuo ADC è la **win condition** (il pilastro su cui si regge la vittoria del team) ed è hyper-fed (8+ kill di vantaggio, cancella i nemici in 1-2 colpi), e il team avversario ha più minacce di dive.

**Stivali:** Ionian Boots of Lucidity di default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** è l'alternativa quando il team avversario ha tanto CC (Lulu, Leona, Lissandra): danno resistenza magica più 30% di tenacity (durata CC ridotta su di te).

**Skill order:** Massimizza **Q** per primo (danno principale e leva del wall-stun), **W** per secondo (la cura aumenta col rank), **E** per ultimo (la riduzione di cooldown conta poco — un punto basta fino a late). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Le rune sono passive scelte prima della partita (6 scelte su due alberi: un primario di 4 rune e un secondario di 2). Lo standard di Bard è:

- Primario **Inspiration**: **Glacial Augment** (quando colpisci con un'auto-attack un bersaglio rallentato, gli appare sotto un'area che lo rallenta ancora — si combina con la Q), **Magical Footwear** (stivali gratis al minuto 12), **Biscuit Delivery** (3 biscotti early che curano HP e mana), **Cosmic Insight** (extra ability haste e summoner spell ridotti).
- Secondario **Resolve**: **Bone Plating** (dopo 3 colpi subiti, i 3 colpi successivi entro 1.5s fanno meno danno) + **Revitalize** (i tuoi heal e scudi sono più forti). Scelta safety per la lane.
- Secondario alternativo **Sorcery**: **Manaflow Band** + **Scorch** per più danno di poke in lane.

## Matchup chiave

- **Lulu / Janna:** Hard counter (matchup molto sfavorevoli) nel 2v2. Il loro **CC point-and-click** (crowd control che non richiede mira: basta cliccare il bersaglio) cancella i tuoi tentativi di dive. La W di Lulu ti trasforma in un animaletto innocuo (polymorph); la Q di Janna ti lancia in aria. Resta indietro, fai il roam a mid appena la **R** è disponibile al livello 6, e fidati che il tuo ADC **riesca a farmare** al sicuro (farmare = uccidere i minion col colpo finale per oro ed esperienza).
- **Leona / Nautilus:** **Tank** (campioni da front line con tanti HP) da engage con CC point-and-click. Posizionati dietro all'ADC sempre. Se saltano sul tuo ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** loro per congelare l'engage, poi vattene. Mai **trade** auto-attack contro di loro (un trade è un breve scambio di colpi in lane, non un tentativo di kill totale): la loro catena di CC è più lunga della tua finestra di trade.
- **Blitzcrank / Pyke / Thresh:** Support da hook (la loro spell signature è uno **skillshot** — una abilità da puntare — a lunga gittata che ti tira da loro). Il loro range di hook supera la tua gittata effettiva di Q. Stai dietro ai minion ogni volta che hanno l'hook pronto. Dopo un hook mancato, prendi un trade gratis e **Q** loro: l'hook resta in cooldown per 15+ secondi.
- **Pantheon support:** Bully di lane aggressivo (un campione abbastanza forte da spingerti fuori dalla lane in early). Fa **all-in** (commit totale fino alla kill, niente disimpegno) al livello 2 con stun **W** + lancia **Q**. Non hai sustain. Stai lontanissimo, warda entrambi i cespugli del river (le zone di erba alta dove i campioni restano nascosti alla vista), e rifiuta i trade al livello 2. Recupera post-6 con roam in **R** verso mid.
- **Senna:** **Scaler** passiva (diventa più forte nel tempo, non si impegna in scambi early). Non puoi farle all-in pulitamente per le sue auto-attack a lunga gittata. La lane è un farm-trade lento. Vinci il map game con la raccolta dei chime e roama a mid per le **R** play. Mai esporti troppo: la sua **W** root dalla **fog of war** (le zone non wardate della mappa che il tuo team non vede) è un setup di gank gratis per il suo jungler (il compagno che pulisce i camp della giungla).

## Power spike & condizioni di vittoria

- **Livello 2 (un punto in W):** Piazza un altare nel cespuglio di lane per sustain tra i trade. Combinato con **Q** al livello 1 hai una minaccia di kill se il support nemico si posiziona male.
- **Livello 6 (R sbloccata):** La prima **Tempered Fate** sblocca play che cambiano la partita. Stasi sull'ADC nemico durante un 2v2 è spesso una kill istantanea. Roama mid appena la wave (la linea di minion) rimbalza verso la tua torre (quando il nemico smette di spingere, i tuoi minion prendono il sopravvento e la wave torna naturalmente verso il tuo lato) — la tua **R** più il combo del mid laner vince contro un mid ignaro.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong completa (~ minuto 14-16):** Il tuo quest item da support si upgrada. Inizi a contribuire danno reale sui colpi di Q e i roam scalano.
- **Livello 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong online:** Il rank 2 di R (la seconda volta che metti un punto in R) abbassa il cooldown a 95 secondi. Con Shurelya's attiva puoi ruotare (spostarti tra le lane) abbastanza in fretta da influenzare entrambe le side lane (top e bot) più i drake fight (teamfight nella fossa del drago) ogni 90 secondi.

## Errori comuni

- **Lanciare Q in campo aperto per poke.** Senza un secondo bersaglio o un muro dietro, **Q** è solo uno slow — e uno slow da 60 mana e 11 secondi di cooldown è un trade brutale. Controlla sempre che ci sia un minion o un muro sulla linea dietro al bersaglio. Se non c'è, non premere Q.
- **Fare il roam con la wave spinta sulla tua torre.** Quando vai via, la wave (la linea di minion) si schianta sotto torre — i minion muoiono sotto torre e il tuo ADC perde 2-3 minion di farm più le **tower plates** (le piastre di armatura sulle torri early-game; rompendone una si guadagna oro). Roama **solo** quando la wave è in mezzo alla lane o sta spingendo verso la torre nemica (i minion stanno avanzando, quindi il tuo ADC resta al sicuro alla sua torre mentre tu sei via).
- **R sul tuo stesso ADC durante un fight.** La stasi su un alleato mette in pausa tutto quello che sta facendo — inclusa una catena di auto-attack che stava per vincere il trade. Usa **R** sui nemici, su alleati morenti (per interrompere il colpo letale) e sulle torrette (per cancellare un dive in torre). Quasi mai su un carry in salute.
- **Stare nella propria area di R.** L'AOE è larga e il tempo di volo è 4 secondi: dimentichi dove l'hai castata, ci cammini dentro, sprechi l'ult. Casti e poi esci.
- **Ignorare i chime fuori dalla lane.** I chime sono XP e mana. Un Bard che raccoglie chime arriva al livello 6 circa 2 minuti prima di un Bard che resta in lane. Se non sei 1 livello sopra al resto del tuo team al minuto 10, stai giocando male.

## Suggerimento avanzato

Allena il **flash-stun**: casta Q, poi attiva **Flash** (il summoner spell di teleport corto universale) a metà volo per riposizionare il tuo personaggio — e il proiettile della Q, che segue il tuo modello, prende un angolo nuovo dalla nuova posizione. Il trucco è flashare *verso* dove il nemico sta facendo **dash** (il suo movimento istantaneo corto). Così acchiappi nemici che a una Q normale schiverebbero tranquillamente. È il trick a leva più alta del kit di Bard (l'insieme delle sue abilità), spesso la differenza tra un Bard che vince partite e uno che non lo fa.
