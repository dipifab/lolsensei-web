---
title: "Thresh Support: Build & Guida — Patch 14.10"
slug: "thresh-support"
language: "it"
patch: "14.10"
champion: "thresh"
role: "support"
last_updated: "2026-04-28"
description: "Guida Thresh support per League of Legends Patch 14.10: starter, build da tank-catcher, matchup chiave, power spike, errori comuni e una tip di chiusura."
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
    - { dd_id: "3117", name: "Mobility Boots" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro tanto danno magico o catene di crowd-control (Leona, Ashe R, Maokai R) — sostituisci Mobility Boots prima che inizino i teamfight"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro bot lane molto basata su auto-attack (Caitlyn, Draven, Tristana) — sostituisci Mobility Boots quando l'harass early ti pesa"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "con un ADC forte (Caitlyn, Vayne, Aphelios): la R attiva una zona di slow e bonus damage sul prossimo colpo del carry"
    - dd_id: "4643"
      name: "Vigilant Wardstone"
      against: "late-game (dopo il minuto 25) quando i sei slot sono pieni e vuoi più ward attivi più un piccolo upgrade di stat"
  base_combo: ["Q", "AA", "E", "R"]
  win_condition: "Landa una Death Sentence su un bersaglio prioritario (carry, mid) e concatena con il knockback di Flay perché il team converta il pickoff. Con The Box piazzato non c'è direzione di fuga gratis."
  weakness: "Una Q mancata ti lascia senza tool d'engage per circa 10 secondi. Movement base lento e zero dash: una volta giocato l'hook non puoi riposizionarti, le rotazioni di flank ti puniscono pesante."
---

## Overview

Thresh è un **support da engage** (il campione che apre il fight) e un **catcher**: un campione il cui lavoro è fare **pickoff**, cioè eliminare un nemico isolato prima che il fight inizi. Si basa tutto sull'hook a lungo raggio. La sua **Death Sentence (Q)** è il fulcro del kit: uno skillshot (abilità non automatica, va mirata e si può schivare) lento e telegrafato (= chiaramente visibile in anticipo) che, quando atterra, decide il fight. Intorno all'hook, **Flay (E)** riposiziona i nemici (slow + spinta nella direzione del colpo), **Dark Passage (W)** permette a un alleato di scattare da lui, e **The Box (R)** chiude il bersaglio dentro un anello di muri di danno magico. Thresh builda solo item da tank (HP, armor, magic resist — niente danno): il suo valore è abilitare il resto del team, non chiudere kill in solitario.

Game plan: piazza ward (gli oggetti di vision) nel **river** (il corridoio al centro della mappa) e nei cespugli intorno alla bot lane, scegli un bersaglio isolato (un carry **over-extended** spinto troppo avanti, o un mid laner avversario che roama cercando un gank), landa **Q**, segui con **E**, piazza **R** e il bersaglio non esce senza perdere HP.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3865.png) **World Atlas** (lo starter unificato dei support) più 2 Health Potions. World Atlas evolve da solo man mano che accumuli quest gold — passando per ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3867.png) **Bounty of Worlds** — fino all'upgrade endgame che scegli.

**Core items (in ordine di acquisto):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3865.png) **World Atlas** — starter. Non last-hittare i minion: lascia il farm al tuo ADC.
2. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3117.png) **Mobility Boots** — velocità fuori combattimento. Ti permette di **roamare** (lasciare la lane bot per aiutare mid o jungle) e di piazzare ward in profondità.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3190.png) **Locket of the Iron Solari** — attiva uno scudo ad area per il team. Usalo subito prima dell'engage per assorbire la prima raffica di **burst** (il danno alto e concentrato che la squadra avversaria scarica nei primi 1-2 secondi del fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3109.png) **Knight's Vow** — ti lega al tuo **ADC** (Attack Damage Carry: il compagno di bot lane che fa danno con gli auto-attack, di solito il damage dealer principale del team a fine partita). Una parte del danno che lui prende viene dirottata su di te, e in cambio lo curi. Scegli il carry la cui vita vuoi proteggere di più.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame del support item, variante da engage (World Atlas si trasforma automaticamente in uno di questi item finali quando completi la sua quest). Aggiunge danno extra al tuo prossimo auto-attack subito dopo aver applicato **crowd-control / CC** (qualsiasi stun, slow, root o knockback): perfetto dopo una Q o una R.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3111.png) **Mercury's Treads** — boots che danno magic resist e riducono la durata dei CC ricevuti. Vai su questi contro squadre con tanto danno magico o catene di CC (Leona engage, ulti di Ashe). Sostituisci le Mobility Boots prima che il teamfight inizi.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3047.png) **Plated Steelcaps** — boots che danno armor e riducono il danno degli auto-attack ricevuti. Vai su questi contro bot lane basate sugli auto-attack (Caitlyn, Draven, Tristana) quando il loro **harass** early (il danno costante in lane usato per logorarti senza committare a un fight) ti pesa più del CC nei teamfight late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3050.png) **Zeke's Convergence** — abbinalo a un ADC che fa tanto danno. Quando ulti con la R, Zeke's piazza una zona di slow e dà al carry bonus damage sul prossimo colpo. Combo perfetta.
- ![Vigilant Wardstone](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/4643.png) **Vigilant Wardstone** — sesto slot late-game. Più ward attivi sulla mappa, range ward maggiore, piccolo bonus stat.

**Boots:** Default ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3117.png) **Mobility Boots** per roamare aggressivo in lane. Sostituiscile con uno dei boots difensivi situazionali **prima del primo grosso teamfight** (intorno al minuto 18-22), perché Mobility perde il bonus di velocità non appena il fight inizia.

**Skill order:** Maxa **E** (Flay) per primo — lo slow, il knockback e il danno della passive sugli auto-attack sono il tuo strumento di trade in lane. Maxa **Q** per seconda: cooldown più basso significa più finestre di pickoff. Maxa **W** per ultima. Prendi un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Resolve** (albero difensivo, sopravvivenza) con **Aftershock** (Armor e Magic Resist gratis per qualche secondo quando applichi un CC, scatta su ogni Q andata a segno), **Font of Life** (il tuo CC marca il bersaglio; gli alleati che lo attaccano si curano un po'), **Bone Plating** contro lane di burst o **Conditioning** contro lane scaling, e **Revitalize** (potenzia scudi e cure). Secondaria **Inspiration** (utility) con **Hextech Flashtraption** (un secondo Flash a corto raggio su cooldown lungo, prezioso per gli hook a sorpresa) e **Cosmic Insight** (riduce i cooldown di summoner spell e attivabili degli item). Stat shards: Adaptive Force / Adaptive Force / Health.

## Key matchups

- **Leona:** Mirror matchup (siete entrambi support da engage). Vince il **trade** (lo scambio breve di danno) chi atterra il primo CC. Tieni la **Q** per il momento dopo che lei spara la sua Zenith Blade (l'abilità con cui fa engage scattando sul bersaglio): appena è in cooldown, hai una finestra di pickoff di 10 secondi.
- **Nautilus:** Stesso playstyle del tuo, range più corto. Lui ti batte in melee (in mischia), tu lo batti a distanza con la **Q**. Stai a distanza di hook, mai a distanza di auto-attack suo.
- **Soraka:** **Enchanter** (classe di support focalizzata sul curare il proprio carry più che sull'iniziare fight) di puro **sustain** (capacità di rigenerarsi/curarsi durante la lane), zero engage. La batti hookando lei durante l'animazione di cura. Se sta dietro al suo ADC, hooka l'ADC: la **R** chiude tutti e due dentro la box.
- **Lulu:** Lei fa **peel** (protegge il suo carry dal tuo engage con scudi e un polymorph che ti trasforma in animaletto inoffensivo). Non hookare l'ADC per primo se Lulu ha cooldown pronti — hooka **Lulu**, togli il peel, e il tuo team converte sul carry.
- **Pyke:** Skill matchup — sulla carta zero vantaggio, vince chi gioca meglio. Anche lui ha un engage tool a lungo raggio. Tieni d'occhio la sua **stealth** (diventa invisibile passando attraverso un muro): evita di farti pescare mentre piazzi ward da solo.

## Power spikes & win conditions

- **Livello 2 (Q + E):** Primo spike. Con la **Q** per fare engage e la **E** per tenerli bloccati, puoi giocare un **all-in** (impegnarti in un tentativo di kill totale, senza spazio per disimpegnarti) su un nemico che si è spinto troppo oltre la prima **wave** (l'onda di minion).
- **Livello 6 (R sbloccata):** Il potenziale di pickoff esplode. Una **Q** atterrata nel river o in un cespuglio laterale seguita da **R** dietro al bersaglio è una kill garantita a questo punto della partita.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3190.png) Locket of the Iron Solari completato (~ minuto 14-16):** Primo item da teamfight pronto. Adesso ogni engage ti dà uno scudo gratis per il team — raggruppati col team su **Drake** (il drago, l'obiettivo nel river basso che dà buff permanenti a chi lo uccide) o **Voidgrubs** (i piccoli mostri nel river alto: chi li uccide guadagna danno bonus contro le strutture nemiche).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** L'auto-attack post-CC inizia a fare danno reale. Improvvisamente il combo Q → auto-attack → E non è più solo un setup — è una kill su uno **squishy** (un campione fragile come un ADC o un mage) anche da solo.

## Common mistakes

- **Lanciare la Q su nemici a HP pieni nascosti dietro i loro minion.** L'hook collide con i minion. Aspetta che il nemico avanzi per fare **last-hit** (dare il colpo finale a un minion per ottenere oro), oppure che la wave sia sottile (pochi minion residui tra te e lui). Una **Q** lanciata a caso sperando nell'hook da sogno spreca mana e ti lascia senza engage per 10 secondi.
- **Usare Flay per spingere i nemici lontano dal team.** La direzione di Flay dipende dalla tua posizione rispetto al bersaglio: se ti muovi avanti li spingi indietro (verso di te), se ti muovi indietro li spingi avanti (lontano da te). Posizionati così che la **E** li spinga **dentro** il tuo team, non fuori.
- **Lanciare la lanterna senza comunicare.** Se il tuo ADC non la sta guardando, la lanterna brucia il cooldown a vuoto. Pingala quando la piazzi. Meglio ancora, piazzala in anticipo in una zona oscura della mappa (zona di fog of war, dove non hai vision) così il carry ha già una via di fuga sicura.
- **Fare engage senza vision.** Un hook alla cieca dentro la **fog of war** (le zone della mappa non illuminate dai tuoi ward) spesso prende un tank invece di un carry, o peggio ti porta dritto sul jungler avversario. Usa il **trinket** (l'oggetto di vision gratis che ogni campione ha nell'inventario) e i **Control Ward** (i ward rosa che si comprano dallo shop, rivelano unità invisibili e disabilitano i ward avversari) prima di impegnarti.
- **Tenere la R per il "momento perfetto".** **The Box** è uno strumento di denial (toglie spazio e opzioni al nemico), non solo di danno. Piazzala come muro dietro un carry in fuga per rallentarlo, o davanti a un Malphite che entra per spezzargli la corsa dell'ulti. Non tesoreggiarla.

## Advanced tip

Combo Lantern-Hook. Lancia la **Q** per prima, e nell'istante in cui parte piazza la **W** lanterna a max range nella stessa direzione. Se la **Q** atterra, il tuo ADC clicca la lanterna e arriva accanto al bersaglio hookato proprio mentre lo stun fa effetto — pieno follow-up di danno senza dover percorrere fisicamente la distanza (zero **gap-closing**, l'atto di chiudere la distanza correndo verso il nemico). Trasforma un hook da setup in una kill garantita. L'esercizio è la **muscle memory** (memoria muscolare, il riflesso automatico delle dita): Q-W in mezzo secondo, così la lanterna è già in volo prima che l'ADC capisca cosa stai facendo.
