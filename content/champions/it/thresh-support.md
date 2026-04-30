---
title: "Thresh Support: Build & Guida — Patch 16.9"
slug: "thresh-support"
language: "it"
patch: "16.9"
champion: "thresh"
role: "support"
last_updated: "2026-04-30"
description: "Guida Thresh support per League of Legends Patch 16.9: starter, build da tank-catcher, matchup chiave, power spike, errori comuni e una tip di chiusura."
quick_learn:
  champion_dd_id: "Thresh"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Catcher"
  abilities:
    - key: "P"
      name: "Damnation"
      description: "Quando un nemico (minion, mostro della jungle o champion) muore vicino a Thresh può lasciare un'anima. Camminaci sopra per guadagnare Armor e Ability Power in modo permanente. Nessun tetto."
      dd_spell_id: "Thresh_Passive"
    - key: "Q"
      name: "Death Sentence"
      description: "Hook lineare a lungo raggio (skillshot: va mirato e si può schivare). Stunna il primo nemico colpito e lo tira. Recast per scattare verso il bersaglio."
      dd_spell_id: "ThreshQ"
    - key: "W"
      name: "Dark Passage"
      description: "Lancia una lanterna che scuda il primo alleato che la tocca. Gli alleati possono cliccarla per scattare verso Thresh."
      dd_spell_id: "ThreshW"
    - key: "E"
      name: "Flay"
      description: "Passive: gli auto-attack fanno danno magico extra, e il bonus cresce più tempo passa tra un colpo e l'altro. Active: spazza la catena, rallentando e spingendo i nemici nella direzione del colpo."
      dd_spell_id: "ThreshE"
    - key: "R"
      name: "The Box"
      description: "Anello di muri spettrali intorno a Thresh. Il primo muro attraversato si rompe e infligge danno magico più slow; gli altri rallentano solo a metà valore."
      dd_spell_id: "ThreshRPenta"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dalle Mercury's vs bot lane da auto-attack pesante (Caitlyn, Draven, Tristana) quando l'harass early fa più male del CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "con un ADC forte (Caitlyn, Vayne, Aphelios): la R attiva una zona di slow e bonus damage sul prossimo colpo del carry"
  base_combo: ["Q", "AA", "E", "R"]
  win_condition: "Landa una Death Sentence su un bersaglio prioritario (carry, mid) e concatena con il knockback di Flay perché il team converta il pickoff. Con The Box piazzato non c'è direzione di fuga gratis."
  weakness: "Una Q mancata ti lascia senza tool d'engage per circa 10 secondi. Movement base lento e zero dash: una volta giocato l'hook non puoi riposizionarti, le rotazioni di flank ti puniscono pesante."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Primaria Resolve (albero da tank, default per chi apre il fight): Aftershock dà 2.5s di armor + MR su ogni Q a segno quando ti focusano. Font of Life cura gli alleati che colpiscono il bersaglio stunnato, Bone Plating tanka i primi 3 colpi, Revitalize potenzia W e Locket."
    secondary_rationale: "Secondaria Inspiration: Hextech Flashtraption è un mini-Flash di backup su CD lungo, prezioso per Q a sorpresa fuori dalla fog quando il Flash è vuoto. Cosmic Insight taglia i CD dei summoner e degli attivi item, così Flash e Locket of the Iron Solari ricaricano prima."
    secondary_alternative: "Se il team avversario ha 2+ squishy a basse resistenze e pochi engage da temere, swap Inspiration → Precision con Triumph (rimborso oro e HP sui takedown) e Coup de Grace (+8% danno sotto il 40% HP) per chiudere i pickoff più velocemente."
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanter immobili senza engage"
      reason: "Il loro kit è solo cure e scudi: inutile se si fanno hookare per primi. Una Q pulita a distanza di lanterna li stunna fuori posizione; il team converte prima che parta una sola cura."
    - examples: ["senna", "caitlyn", "jhin"]
      archetype: "ADC a lungo raggio senza dash"
      reason: "Stanno a max range per fare poke e non hanno un dash di escape. Una Q di flank da un cespuglio laterale dopo il minuto 8 è un pickoff gratis — non si riposizionano una volta partito l'hook."
    - examples: ["malphite", "alistar"]
      archetype: "Tank engage telegrafati con Flash"
      reason: "Quando entrano in Flash-R o W-Q il punto di atterraggio è prevedibile: pre-aima la Q sulla traiettoria e ci camminano dentro. La R dopo box anche il follow-up del team."
  counterpicks:
    - examples: ["lulu", "milio", "janna"]
      archetype: "Enchanter di hard-peel con disengage"
      reason: "Una loro abilità ti spegne l'engage: Lulu ti polimorfa a metà Q, Janna ti tira su con la sua Q prima che l'hook atterri, Milio rimuove il CC dal bersaglio hookato. Senza Q a segno Thresh non fa fight."
    - examples: ["rakan", "nautilus", "leona"]
      archetype: "Engage support che ti battono in melee"
      reason: "Rakan ti scatta addosso prima che la Q parta; Nautilus e Leona vincono i trade in mischia perché hanno catene di CC con cooldown più basso, e ogni Q che sbagli te la fanno pagare."
    - examples: ["karma", "lux", "senna"]
      archetype: "Support poke a lungo raggio con disengage"
      reason: "Ti pokano fuori dal range di hook prima che tu li raggiunga. Senza HP non puoi engageare e perdi la priority di lane (la libertà di lasciarla senza perdere risorse) senza aver mai lanciato una Q."
---

## Panoramica

Thresh è un **support da engage** (il campione che apre il fight) e un **catcher**: un campione il cui lavoro è fare **pickoff**, cioè eliminare un nemico isolato prima che il fight inizi. Si basa tutto sull'hook a lungo raggio. La sua **Death Sentence (Q)** è il fulcro del kit: uno skillshot (abilità non automatica, va mirata e si può schivare) lento e telegrafato (= chiaramente visibile in anticipo) che, quando atterra, decide il fight. Intorno all'hook, **Flay (E)** riposiziona i nemici (slow + spinta nella direzione del colpo), **Dark Passage (W)** permette a un alleato di scattare da lui, e **The Box (R)** chiude il bersaglio dentro un anello di muri di danno magico. Thresh builda solo item da tank (HP, armor, magic resist — niente danno): il suo valore è abilitare il resto del team, non chiudere kill in solitario.

Game plan: piazza ward (gli oggetti di vision) nel **river** (il corridoio al centro della mappa) e nei cespugli intorno alla bot lane, scegli un bersaglio isolato (un carry **over-extended** spinto troppo avanti, o un mid laner avversario che roama cercando un gank), landa **Q**, segui con **E**, piazza **R** e il bersaglio non esce senza perdere HP.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter unificato dei support) più 2 Health Potions. World Atlas evolve da solo man mano che accumuli quest gold — passando per ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** — fino all'upgrade endgame che scegli.

**Core items (in ordine di acquisto):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Non last-hittare i minion: lascia il farm al tuo ADC.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist più **tenacity** (una stat che accorcia la durata del crowd control subito). Sono i boots di default per un support engage: uno stun da un secondo che ti bloccherebbe fuori dal follow-up Q diventa un mezzo secondo, lasciandoti il tempo di concatenare l'hook successivo.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — attiva uno scudo ad area per il team. Usalo subito prima dell'engage per assorbire la prima raffica di **burst** (il danno alto e concentrato che la squadra avversaria scarica nei primi 1-2 secondi del fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — ti lega al tuo **ADC** (Attack Damage Carry: il compagno di bot lane che fa danno con gli auto-attack, di solito il damage dealer principale del team a fine partita). Una parte del danno che lui prende viene dirottata su di te, e in cambio lo curi. Scegli il carry la cui vita vuoi proteggere di più.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame del support item, variante da engage (World Atlas si trasforma automaticamente in uno di questi item finali quando completi la sua quest). Porta una passiva **Spellblade**: dopo aver lanciato una qualsiasi abilità — Q hook, W lanterna, E flay, R box — il tuo prossimo auto-attack infligge danno fisico bonus on-hit, e se atterra su un campione nemico questi subisce danno extra da qualsiasi fonte per 4 secondi. In pratica vuol dire che devi intercalare un'auto-attack tra un'abilità e l'altra durante il fight, non tenertela per dopo il CC.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots che danno armor e riducono il danno degli auto-attack ricevuti. Swappa dalle Mercury's Treads contro bot lane basate sugli auto-attack (Caitlyn, Draven, Tristana) quando il loro **harass** early (il danno costante in lane usato per logorarti senza committare a un fight) ti pesa più del CC nei teamfight late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — abbinalo a un ADC che fa tanto danno. Quando ulti con la R, Zeke's piazza una zona di slow e dà al carry bonus damage sul prossimo colpo. Combo perfetta.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** per la tenacy: un support engage da tank si becca CC nel momento esatto in cui committa, e mezzo secondo di stun in meno è la differenza tra connettere il knockback di Flay e guardare il team perdere il fight che hai aperto. Swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo quando l'harass da auto-attack della bot lane nemica fa più male del CC nemico late.

**Skill order:** Maxa **E** (Flay) per primo — lo slow, il knockback e il danno della passive sugli auto-attack sono il tuo strumento di trade in lane. Maxa **Q** per seconda: cooldown più basso significa più finestre di pickoff. Maxa **W** per ultima. Prendi un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Resolve** (albero difensivo, sopravvivenza) con **Aftershock** (Armor e Magic Resist gratis per qualche secondo quando applichi un CC, scatta su ogni Q andata a segno), **Font of Life** (il tuo CC marca il bersaglio; gli alleati che lo attaccano si curano un po'), **Bone Plating** (annulla il danno dei prossimi tre colpi ricevuti — default contro lane da all-in early; swap a **Conditioning** per scaling tardivo di Armor e Magic Resist nei matchup di poke), e **Revitalize** (potenzia lo scudo della W e l'attivo del Locket). Secondaria **Inspiration** (utility) con **Hextech Flashtraption** (un secondo Flash a corto raggio su cooldown lungo, prezioso per gli hook a sorpresa) e **Cosmic Insight** (riduce i cooldown di summoner spell e attivabili degli item). Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Matchup chiave

- **Leona:** Mirror matchup (siete entrambi support da engage). Vince il **trade** (lo scambio breve di danno) chi atterra il primo CC. Tieni la **Q** per il momento dopo che lei spara la sua Zenith Blade (l'abilità con cui fa engage scattando sul bersaglio): appena è in cooldown, hai una finestra di pickoff di 10 secondi.
- **Nautilus:** Stesso playstyle del tuo, range più corto. Lui ti batte in melee (in mischia), tu lo batti a distanza con la **Q**. Stai a distanza di hook, mai a distanza di auto-attack suo.
- **Soraka:** **Enchanter** (classe di support focalizzata sul curare il proprio carry più che sull'iniziare fight) di puro **sustain** (capacità di rigenerarsi/curarsi durante la lane), zero engage. La batti hookando lei durante l'animazione di cura. Se sta dietro al suo ADC, hooka l'ADC: la **R** chiude tutti e due dentro la box.
- **Lulu:** Lei fa **peel** (protegge il suo carry dal tuo engage con scudi e un polymorph che ti trasforma in animaletto inoffensivo). Non hookare l'ADC per primo se Lulu ha cooldown pronti — hooka **Lulu**, togli il peel, e il tuo team converte sul carry.
- **Pyke:** Skill matchup — sulla carta zero vantaggio, vince chi gioca meglio. Anche lui ha un engage tool a lungo raggio. Tieni d'occhio la sua **stealth** (diventa invisibile passando attraverso un muro): evita di farti pescare mentre piazzi ward da solo.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Primo spike. Con la **Q** per fare engage e la **E** per tenerli bloccati, puoi giocare un **all-in** (impegnarti in un tentativo di kill totale, senza spazio per disimpegnarti) su un nemico che si è spinto troppo oltre la prima **wave** (l'onda di minion).
- **Livello 6 (R sbloccata):** Il potenziale di pickoff esplode. Una **Q** atterrata nel river o in un cespuglio laterale seguita da **R** dietro al bersaglio è una kill garantita a questo punto della partita.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completato (~ minuto 14-16):** Primo item da teamfight pronto. Adesso ogni engage ti dà uno scudo gratis per il team — raggruppati col team su **Drake** (il drago, l'obiettivo nel river basso che dà buff permanenti a chi lo uccide) o **Voidgrubs** (i piccoli mostri nel river alto: chi li uccide guadagna danno bonus contro le strutture nemiche).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** Il proc Spellblade più il damage-amp di 4 secondi sui campioni trasforma la rotation "abilità → auto" in un vero pattern di DPS. Improvvisamente Q → auto-attack → E non è più solo un setup per il tuo ADC — è una kill su uno **squishy** (un campione fragile come un ADC o un mage) anche da solo.

## Errori comuni

- **Lanciare la Q su nemici a HP pieni nascosti dietro i loro minion.** L'hook collide con i minion. Aspetta che il nemico avanzi per fare **last-hit** (dare il colpo finale a un minion per ottenere oro), oppure che la wave sia sottile (pochi minion residui tra te e lui). Una **Q** lanciata a caso sperando nell'hook da sogno spreca mana e ti lascia senza engage per 10 secondi.
- **Usare Flay per spingere i nemici lontano dal team.** La direzione di Flay dipende dalla tua posizione rispetto al bersaglio: se ti muovi avanti li spingi indietro (verso di te), se ti muovi indietro li spingi avanti (lontano da te). Posizionati così che la **E** li spinga **dentro** il tuo team, non fuori.
- **Lanciare la lanterna senza comunicare.** Se il tuo ADC non la sta guardando, la lanterna brucia il cooldown a vuoto. Pingala quando la piazzi. Meglio ancora, piazzala in anticipo in una zona oscura della mappa (zona di fog of war, dove non hai vision) così il carry ha già una via di fuga sicura.
- **Fare engage senza vision.** Un hook alla cieca dentro la **fog of war** (le zone della mappa non illuminate dai tuoi ward) spesso prende un tank invece di un carry, o peggio ti porta dritto sul jungler avversario. Usa il **trinket** (l'oggetto di vision gratis che ogni campione ha nell'inventario) e i **Control Ward** (i ward rosa che si comprano dallo shop, rivelano unità invisibili e disabilitano i ward avversari) prima di impegnarti.
- **Tenere la R per il "momento perfetto".** **The Box** è uno strumento di denial (toglie spazio e opzioni al nemico), non solo di danno. Piazzala come muro dietro un carry in fuga per rallentarlo, o davanti a un Malphite che entra per spezzargli la corsa dell'ulti. Non tesoreggiarla.

## Suggerimento avanzato

Combo Lantern-Hook. Lancia la **Q** per prima, e nell'istante in cui parte piazza la **W** lanterna a max range nella stessa direzione. Se la **Q** atterra, il tuo ADC clicca la lanterna e arriva accanto al bersaglio hookato proprio mentre lo stun fa effetto — pieno follow-up di danno senza dover percorrere fisicamente la distanza (zero **gap-closing**, l'atto di chiudere la distanza correndo verso il nemico). Trasforma un hook da setup in una kill garantita. L'esercizio è la **muscle memory** (memoria muscolare, il riflesso automatico delle dita): Q-W in mezzo secondo, così la lanterna è già in volo prima che l'ADC capisca cosa stai facendo.
