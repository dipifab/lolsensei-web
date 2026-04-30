---
title: "Soraka Support — Build & Guida Patch 16.9"
slug: "soraka-support"
language: "it"
patch: "16.9"
champion: "soraka"
role: "support"
last_updated: "2026-04-29"
description: "Guida Soraka support per League of Legends Patch 16.9: build da pure healer enchanter, matchup di bot lane, power spike, errori comuni e una tip avanzata sulla chain Q-W."
quick_learn:
  champion_dd_id: "Soraka"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Healer"
  abilities:
    - key: "P"
      name: "Salvation"
      description: "Soraka guadagna Move Speed bonus correndo verso alleati sotto il 40% HP. Le permette di raggiungere in fretta un alleato in punto di morte per healarlo con W."
      dd_spell_id: "Soraka_Passive"
    - key: "Q"
      name: "Starcall"
      description: "Skillshot AOE targettato che fa danno magico e slowa. Colpire un campione nemico dà a Soraka Rejuvenation, che la heala nel tempo e riduce il costo HP della W successiva."
      dd_spell_id: "SorakaQ"
    - key: "W"
      name: "Astral Infusion"
      description: "Heala un campione alleato al costo degli HP di Soraka. Non self-castabile. Costo ridotto se Soraka ha Rejuvenation da una Q andata a segno — chain Q poi W per spammare cure in sicurezza."
      dd_spell_id: "SorakaW"
    - key: "E"
      name: "Equinox"
      description: "Zona targettata che silenzia i nemici dentro e li rooti quando svanisce. Si usa per fermare i dash a metà engage e per lockare un target per l'AD carry."
      dd_spell_id: "SorakaE"
    - key: "R"
      name: "Wish"
      description: "Heal globale che restora HP a tutti i campioni alleati sulla mappa. Healing aumentato sotto il 40% HP. Tool di teamfight salva-partita — castala tardi, mai per prima."
      dd_spell_id: "SorakaR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "nei fight lunghi su obiettivi (Drake, Baron) — heal AOE ritardato che droppi da metà mappa; stacka con R per reset team enormi"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP) — l'heal proca il buff e gli dà Ability Power bonus"
    - dd_id: "3877"
      name: "Bloodsong"
      against: "upgrade finale alternativo di World Atlas se la bot gioca per poke (Caitlyn, Jhin) — aggiunge burst sugli hit di Q in partite aggressive"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE pesante (danno concentrato in 1-2s, tipo Yone R, Kennen R, Karthus R) — l'attivo dà uno shield team istantaneo"
  base_combo: ["Q", "W", "AA", "Q"]
  win_condition: "Out-sustaina la bot lane con catene Q-W, salva l'AD carry da ogni all-in con W e Mikael's, e usa la R come save globale quando una qualsiasi lane va in crisi."
  weakness: "Nessun dash, HP bassissimi, niente hard CC prima del max della E. Un singolo hook o un gap-close di assassino la cancellano prima della W. La R ha un channel di 2.5s che l'hard CC interrompe."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "ashe", "varus"]
      archetype: "AD carry a lungo raggio con auto forti"
      reason: "La chain Q-W di Soraka tiene un marksman immobile sempre full HP nelle guerre di poke, e Ardent Censer trasforma ogni heal in danno on-hit bonus. Out-tradano qualsiasi bot lane se non scendono mai sotto il 50% HP."
    - examples: ["xerath", "ziggs", "lux"]
      archetype: "Mage da poke stazionari senza minaccia di kill"
      reason: "Soraka heala ogni spell di poke con W: il loro game plan si blocca perché il vantaggio HP non resta mai. Senza dash non possono fare all-in per spezzare il pattern di cura."
    - examples: ["draven", "kalista"]
      archetype: "Lane bully aggressivi che spingono il vantaggio HP"
      reason: "Il loro game plan è convertire il vantaggio HP in kill. La W di Soraka tiene l'AD carry sopra la kill threshold abbastanza a lungo perché il jungler arrivi o la lane si stabilizzi."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke", "nautilus"]
      archetype: "Hook support a lungo raggio"
      reason: "Soraka ha 535 HP al level 1 e nessun dash. Un singolo hook prima del level 6 cancella lei o l'AD carry — la Q non interrompe il channel dell'hook e la W non può salvare chi è già morto."
    - examples: ["leona", "rell", "alistar"]
      archetype: "Tank support da hard engage"
      reason: "Saltano addosso a Soraka oltre il range della E. Una volta stunnata non può castare W o R, e gli HP bassi trasformano ogni chain CC in una kill. Il silenzio-poi-root della E è troppo lento per interrompere il dash iniziale."
    - examples: ["zed", "talon", "fizz"]
      archetype: "Assassini mobili in roam dal mid"
      reason: "Le side lane sono la sua zona di morte. Senza Flash, un assassino gap-closa dentro il cast time della W e la one-shotta prima che finisca. Il channel di 2.5s della R è anche interrompibile dai loro dash."
---

## Panoramica

Soraka è una pure healer enchanter (un support da heal-buff — heala e shielda gli alleati, buffa il loro danno). La passive **Salvation** le dà Move Speed bonus quando corre verso un alleato sotto il 40% HP, **Starcall (Q)** è uno skillshot AOE targettato che fa danno, slowa, e dà a Soraka il buff **Rejuvenation** quando colpisce un campione nemico, **Astral Infusion (W)** è un heal single-target su alleato che costa a Soraka i suoi HP (no self-cast — non puoi healarti con la W), **Equinox (E)** è una zona targettata che prima silenzia i nemici dentro (gli impedisce di castare spell) e poi li rooti quando svanisce, e **Wish (R)** è un heal globale che restora HP a tutti i campioni alleati sulla mappa, amplificato sotto il 40% HP.

Il game plan è il più semplice del gioco sulla carta e il più duro da eseguire: landa la **Q** sul support nemico o sulla wave bot per rinfrescare il buff **Rejuvenation**, poi catena la **W** sull'AD carry (il marksman della bot lane che scala con gli item) così il costo HP è ridotto. Ripeti questo pattern Q-poi-W ogni 4-6 secondi. Tieni la **E** per il momento in cui un hook support engagia o l'AD carry nemico si avvicina per un trade (uno scambio breve di colpi). Dopo il level 6, ogni wave che la bot nemica pusha troppo diventa una combo di rispostsa. Late game scali come heal bot: non engagiare mai per prima, usa la **R** per annullare l'all-in nemico (commit totale a una kill, niente opzione di disengage) invece di iniziare il tuo.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da support che si evolve dando più gold) più 2 Health Potion. Salta gli starter da danno: tutto il kit di Soraka è cura e l'auto-attack fa quasi zero danno.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — accumula gold e cariche ward in automatico ogni volta che fai danno o assist. Si evolve in Bounty of Worlds e poi in un legendary support come Bloodsong o Solstice Sliver.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'Ability Haste (cooldown ridotto) ti permette di spammare la **W** su cooldown brevi; boot di default per gli enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva che heala e shielda a ogni cast e che cresce nei fight lunghi. La chain Q-W di Soraka la proca (triggera) più di qualsiasi altro support del gioco.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — buffa con on-hit e Attack Speed bonus chi heali o shieldi. Il top accanto a un AD carry da auto-attack come Caitlyn, Jhin o Ashe.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — pulisce (rimuove) l'hard CC (crowd control, un effetto che disabilita il target) da un alleato e aggiunge un heal. Obbligatorio se il nemico ha uno stun, charm o hook single-target sul tuo carry.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si trascinano (Drake, Baron, teamfight lunghi). Heal AOE ritardato che droppi da metà mappa; stacka con la **R** per reset one-shot su un team a basso HP.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP). L'heal proca il buff e gli dà Ability Power bonus per i prossimi attacchi.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade finale alternativo di World Atlas quando giochi per poke (logorare gli HP nemici da distanza senza committare) e pickoff (eliminare un nemico isolato fuori dal teamfight). Aggiunge burst sugli hit di **Q**, sostituisce Bounty of Worlds nelle partite aggressive.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE pesante (danno alto concentrato in 1-2 secondi, tipo Yone R, Kennen R, Karthus R). L'attivo dà uno shield istantaneo a tutta la squadra che salva la back line (i carry — AD carry e mage — che fanno danno da dietro i tank).

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è il default. Plated Steelcaps le sostituiscono contro comp pesanti da auto-attack (Master Yi, Tristana). Mercury's Treads se il team nemico ha 3+ minacce di hard CC mirate su di te — la tenacity ti aiuta a sopravvivere alla chain CC che uccide Soraka più spesso.

**Skill order:** Maxa **Q** per prima (cooldown più basso e più danno per l'uptime di **Rejuvenation** — la tua risorsa principale per spammare heal), **W** seconda (heal più grosso a cast), **E** ultima (silence e root scalano poco col rank). Metti la **R** ai livelli 6, 11, 16. Parti con **E** al level 1 per anti-engagiare (cancellare un tentativo di engage nemico — tipo droppare un silenzio su Blitzcrank mentre carica il suo hook) un hook dal bush al level 1 di Blitzcrank o Thresh, poi prendi la **Q** al level 2.

**Runes:** Primario **Sorcery** con **Summon Aery** (proc di danno e shield sulle spell — perfetto per Soraka perché ogni Q e W lo procano), **Manaflow Band** (mana sustain così casti su ogni cooldown), **Transcendence** (Ability Haste più un piccolo heal su takedown), **Scorch** (burn extra ogni 10 secondi sulla prima spell, per il poke Q level 1-6). Secondario **Inspiration** con **Biscuit Delivery** (biscotti gratis di mana e HP nei primi 6 minuti — il costo HP della W rende i biscotti doppiamente preziosi) e **Cosmic Insight** (Ability Haste in più e Summoner Spell ridotti). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Caitlyn / Jhin (alleati):** Partner migliori. Loro pokano da max range, tu li Q-W-loopi a HP pieno. Usa l'![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** per amplificare ogni auto — out-DPSano qualsiasi bot lane avversaria nei trade lunghi.
- **Blitzcrank / Thresh (nemici):** Hook support. Stai dietro ai minion ogni volta che attraversi il river — non offrire mai una linea hook pulita. Compra ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** prima del solito; se l'AD carry viene hookato, cleanse istantaneo più W è l'unico modo di sopravvivere.
- **Leona / Nautilus (nemici):** Tank da hard engage. Tieni la **E** come silence-and-root difensivo — quando saltano sull'AD carry, droppa la **E** sotto i loro piedi per interrompere i cast di follow-up. Non bruciare mai la **E** per pokare in questi matchup.
- **Lulu (nemica):** Specchio di sustain con più peel (proteggere il carry da chi lo attacca). Lei out-fighta in 2v2 perché la **W** polymorph cancella la tua **R** a metà cast. Gioca passiva level 1-5; tradi al 6 solo dopo che brucia il Flash. Lo scaling è pari, la lane è decisa dalla priorità del jungler.
- **Lux (nemica):** Minaccia di poke con roam. La sua **Q** è un root su 2 target e la sua **R** è un execute a lungo raggio (un finisher che uccide bersagli a HP basso). Nasconditi dietro ai minion così il binding non vi prende in due, e wardа entrambe le entrate del river — quando lascia la lane per roamare, ping mid e inizia a pressare la sua tower.

## Power spike & condizioni di vittoria

- **Level 2:** Con la **Q** a 1 e la **E** a 1 puoi pokare il support nemico con la Q mentre l'AD carry tradа con le auto. Trade brevi Q-poi-AA vincono il fight di level 2 contro la maggior parte dei support non da engage.
- **Level 6:** Si sblocca **Wish (R)**. Ogni lane che intа (perde HP o tenta una giocata rischiosa) è da qui salvabile da metà mappa — l'heal globale salva un top laner sotto torre o un mid laner a metà skirmish (un fight piccolo, più piccolo del teamfight). Tieni d'occhio attivamente le barre HP degli alleati da questo livello.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer + ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Ardent Censer (~ minuto 14-18):** Spike teamfight. L'HP effettivo dell'AD carry quasi raddoppia se Q-W-spammi durante un fight, e ogni auto empowered aggiunge on-hit extra dal censer.
- **Tre legendary online (~ minuto 25):** Con ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** aggiunto, pulisci l'unica abilità CC che cancellerebbe il tuo carry. Da qui ogni fight su un obiettivo è un 5v4 se il nemico committa hard CC sulla tua back line.

## Errori comuni

- **Spammare la W senza prima una Q andata a segno.** **Astral Infusion** costa HP fissi se Soraka non ha **Rejuvenation** dalla **Q** su un campione nemico. Due W di seguito senza Q la portano sotto metà HP gratis — l'AD carry nemico a quel punto la all-inа al posto del carry. Sempre Q prima, W dopo.
- **Castare la R appena è pronta.** **Wish** è il bottone di reset più forte del gioco se usato al momento giusto: un compagno al 5% HP diventa un compagno al 70% HP. Castа la R come save (qualcuno sta per morire) o come finisher coordinato (il team al 30% HP dopo aver committato); mai su un team al 90% HP per "accelerare" la cura.
- **Stare davanti durante i fight.** Soraka ha 535 HP base e nessun dash — muore a una sola catena di auto da assassino. Posizionati dietro al range di auto dell'AD carry, mai davanti. Se vedi la front line nemica nel range melee tuo, sei troppo avanti.
- **Bruciare la E per il danno di poke.** **Equinox** silenzia e rooti, ma il danno è basso e il cooldown è 16+ secondi. Tienila per anti-engage (cancellare un dive nemico) o per concatenarla con il CC del tuo AD carry. Una E sprecata = una Leona che engagia gratis 10 secondi dopo.
- **Roamare da sola dopo il level 6.** La R è globale — non serve lasciare la bot per aiutare mid o top. Soraka nel fog of war (il bush non wardato) senza il suo AD carry vicino muore a qualsiasi pickoff. Castа la R da sotto la tua tower; roama solo se l'AD carry torna in base e potete arrivare insieme a un ward sul river.

## Suggerimento avanzato

Padroneggia il trick del **cast Q durante il channel della W**. **Astral Infusion (W)** ha un cast time corto durante il quale Soraka non si muove ma può accodare un'altra spell. L'istante dopo aver castato la **W** sull'AD carry, lancia la **Q** sul campione nemico più vicino — il buff **Rejuvenation** dalla Q va a ridurre retroattivamente il costo HP della W (il buff si applica durante la risoluzione del cast, non prima). Questo ti permette di W-W-Q sustain due volte in 5 secondi senza scendere sotto il 60% HP. La combo dribbla anche gli hook: accodare la Q durante il cast della W ti fa iniziare a muoverti mezzo secondo prima di una sequenza Q-poi-W standalone, che basta per side-steppare un hook di Blitzcrank in reazione. Allenati nelle partite normal — è il singolo salto di skill expression più grande da principiante a maestria su Soraka.
