---
title: "Jinx Bot Build & Guida — Patch 16.9"
slug: "jinx-bot"
language: "it"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Jinx bot lane per League of Legends Patch 16.9: starter kit, build hypercarry crit, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Quando Jinx aiuta a uccidere un campione, un mostro epico o distrugge una struttura, ottiene un grande boost di move speed e attack speed per qualche secondo."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Alterna Pow-Pow (minigun, accumula attack speed) e Fishbones (rocket launcher, danno AOE con range maggiore, costa mana). Leva DPS principale."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Skillshot lineare a lungo raggio: danneggia, rallenta e rivela il primo nemico colpito. Usa come poke e come slow di self-peel contro i diver."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Lancia tre granate trappola che immobilizzano i campioni nemici al contatto per 1.5s. Self-peel e setup di lockdown, non poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Razzo globale che danneggia di più man mano che vola ed esplode infliggendo danno basato sugli HP mancanti. Snipa runner a basso HP o finisci da metà mappa."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro front line tanky o composizioni che impilano HP (Sion, Cho'Gath, Dr. Mundo) — l'armor pen extra scala con gli HP massimi del nemico"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni con cure pesanti (Soraka, Vladimir, Aatrox) — applica Grievous Wounds appena i razzi colpiscono"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro pressione di assassini o diver (Zed, Samira, Yasuo flank) — move speed e shield sotto soglia HP danno il secondo che serve per E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contro composizioni di poke pesante o lane in stallo — lifesteal e overheal shield ti tengono al massimo tra un fight e l'altro"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Arriva vivo a Statikk Shiv e Infinity Edge, poi gioca i teamfight da back line con la Q razzo. Concatena reset di Get Excited! sui pickoff per snowballare Baron e Drake."
  weakness: "Movimento base lento e zero dash o blink. Hard counter di diver e assassini che arrivano in back line; soffre lane di pressione early (Draven, Lucian, Caitlyn) finché non arrivano i primi due item."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Marksman immobili da late-scaling"
      reason: "Jinx scala e teamfight meglio dei marksman statici: la Q razzo più Runaan's Hurricane sbriciola una back line ammucchiata che non ha dash per riposizionarsi una volta partito il fight."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "Tank HP-stacker e composizioni di front line"
      reason: "La Q razzo fa danno fisico AOE che scala con attack speed e l'armor pen di Lord Dominik's contro target high-HP trasforma le grosse front line nel target ideale invece che in un muro."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Support engage da lockdown"
      reason: "Quando il support cattura un target, Jinx ha una finestra di auto-attack abbastanza lunga per piazzare 3-4 razzi nella catena di CC e finire con la R, dato che il target non può schivare l'AOE."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Marksman da pressione early"
      reason: "Out-tradano Jinx ai livelli 1-6 perché il loro damage in auto-attack supera gli stack di minigun e Jinx non ha dash per disimpegnarsi; snowballano gold di lane prima del primo spike di item."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Assassini mobili e diver"
      reason: "Jinx non ha dash, blink o CC istantaneo: un singolo gap-close oltre Flame Chompers! di solito la cancella prima che la E parta o prima che il root scada."
    - examples: ["xerath", "ziggs"]
      archetype: "Mage da artillery a lungo raggio"
      reason: "Pokano Jinx oltre il range della Q razzo e le tirano via HP a ogni wave. Senza escape e senza sustain non riesce a restare in lane abbastanza per arrivare ai suoi spike."
---

## Panoramica

Jinx è la marksman hypercarry da manuale: debole nei primi dieci minuti, terrificante con due item completati, e capace di chiudere la partita con un singolo reset da kill in teamfight. La sua **Switcheroo! (Q)** le permette di alternare tra una minigun single-target (che accumula attack speed) e un rocket launcher AOE (gittata maggiore, danno fisico in area, costa mana): copre sia DPS pulito sulla back line nemica sia waveclear e pressione sulla front line con la stessa skill. La passiva **Get Excited! (P)** trasforma ogni kill, assist o struttura distrutta in una grossa finestra di move speed e attack speed: è il motore che permette a una Jinx avanti di camminare dentro un teamfight e concatenare tre kill in più prima che il buff scada.

Il piano partita è semplice da spiegare e duro da eseguire: sopravvivere alla lane contro l'aggressione early, arrivare al primo item crit (Statikk Shiv), poi giocare da back line carry — stare nella seconda posizione più arretrata, kitare (muoversi all'indietro mentre attacchi per mantenere la distanza) con la Q razzo, droppare **Flame Chompers! (E)** sotto i propri piedi quando un diver atterra, e snipare i runner a basso HP con la **R** dall'altra parte della mappa. Lo skill expression sta nello swap di forma della **Q** in mid-fight (minigun sul tank in engage, razzi sulla back line raggruppata) e negli snipe di **R** che trasformano errori di posizionamento avversario in kill prima ancora che arrivino sulla loro retroguardia.

## Build Consigliata

**Item iniziali:** Doran's Blade + 2 Health Potions. Salta il secondo Doran's anche se stai vincendo lane — il gold rende molto di più dentro una componente Sheen per Statikk Shiv.

**Item core (nell'ordine):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — primo item di rush. La passiva Energized proca sulla Q razzo per waveclear istantaneo, e la combinazione attack speed + crit chance porta la forma razzo a essere un vero strumento da teamfight verso il minuto 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — stivali da attack speed. Mercury's Treads solo se la squadra avversaria ha 3+ minacce di hard CC.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — il tuo spike di danno più grande. Il danno crit raddoppia ogni hit AOE della Q razzo sulla back line; è l'item che fa passare Jinx da "fastidiosa" a "cancella l'ADC avversario".
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — item da hypercarry in teamfight. I bolt di Runaan's sparano anche razzi quando Jinx è in forma Fishbones, quindi colpisci tre target contemporaneamente con scaling completo di crit + attack speed.

**Item situazionali:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro front line tanky o composizioni che impilano HP (Sion, Cho'Gath, Dr. Mundo). Sostituisci Runaan's se la squadra avversaria ha 3+ tank.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni con cure pesanti (Soraka, Vladimir, Aatrox). Applica Grievous Wounds (un debuff che taglia le cure) appena un razzo li colpisce.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contro pressione di assassini o diver (Zed, Samira, Yasuo flank). La passiva sotto soglia HP (uno scudo che si attiva quando scendi a poca vita) più la move speed danno il mezzo secondo che serve per droppare la **E** sotto i piedi.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contro composizioni di poke pesante o lane in stallo. Lifesteal più overheal shield ti danno il sustain per restare in lane abbastanza da arrivare agli spike.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default. Mercury's Treads solo contro CC AP pesante tipo Brand o Zyra support.

**Skill order:** Massimizza **Q** per primo (DPS e scaling razzo), **W** per secondo (cooldown di Zap! per poke e self-peel slow), **E** per ultimo (la durata del root è fissa, scala solo il danno). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Sorcery** con **Manaflow Band** (sostiene il costo mana della Q razzo) e **Gathering Storm** per lo scaling late-game. Stat shards: Attack Speed / Adaptive Force / Health.

## Matchup chiave

- **Draven:** Heavily Jinx-unfavored ai livelli 1-6. La sua Spinning Axe out-trada in ogni scambio. Non combatterlo pre-3; freeza la wave vicino alla torre, arriva al livello 6 con Zap! su, e cerca dive del jungler solo quando si sovraestende. Una volta su Statikk Shiv il matchup si ribalta: evita la sua finestra di all-in e farma in sicurezza fino a lì.
- **Caitlyn:** Sfavorevole. Outranges la tua minigun e bullizza la lane con Q + setup di trap. Stai dietro ai minion, schiva di lato dalla sua linea Q, e non camminare sui cespugli dove è stata seduta (probabilmente sono trap). Sopravvivi a due item: il suo scaling teamfight crolla contro la tua Q razzo AOE.
- **Lucian:** Sfavorevole, soprattutto con un Nami support. Rispetta il suo all-in al livello 3 (doppio shot della passiva + dash della Q + speed-up della W). Tieni la **E** come self-peel contro il suo dash; non lanciarla mai come poke. Arriva a ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** senza morire e la lane si stabilizza.
- **Aphelios:** Pari, leggermente Jinx-favored dopo due item. Tracci la sua rotazione di armi; quando ha Severum (rosso, lifesteal) o Calibrum (verde, marker di gittata) puoi pokare con la Q razzo dalla sicurezza della minigun. Evita scambi quando Infernum (arancione, AOE) è caricato — è la sua finestra di razzo-contro-razzo e la vince.
- **Samira:** Vuole un all-in melee una volta sbloccata la W. Tieni ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** come terzo item pianificato se sta snowballando, droppa la **E** appena fa il dash (non bruciarla per poke) e non combatterla mai con **Flash** in cooldown.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **Super Mega Death Rocket!** sblocca pressione da pickoff. Un nemico che torna a base bot a basso HP è una R execute gratis se rispetti lo scaling sugli HP mancanti. Non sprecarla come poke — aspetta runner sotto al 30% HP.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completo (~ minuto 10-12):** Primo vero spike. La Q razzo pulisce la wave in un cast e l'Energized proca su ogni stack di minigun, aprendo la partecipazione agli skirmish intorno al Drake.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 20-24):** Il breakpoint da hypercarry. I crit della Q razzo iniziano a one-shottare i target di back line, e qualunque pickoff o kill triggera **Get Excited!** per una rotazione gratis al fight successivo.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane online (~ minuto 28-32):** Q razzo a tre target con crit. È la fantasy late-game: stai dietro alla front line, spara nel grumo nemico e guarda il fight cancellarsi in 4 secondi.

## Errori comuni

- **Spammare la Q razzo in lane.** La forma razzo brucia mana in fretta e la forma minigun ti tiene gli stack di attack speed alti. Usa i razzi solo per pulire last-hit su gruppi di tre minion o per pokare (vantaggio di range); torna in minigun appena la finestra di trade si chiude.
- **Tenere la R per "lo snipe perfetto".** **Super Mega Death Rocket!** scala sugli HP mancanti, non sui max HP. Una R sicura al 60% di gittata su un nemico al 25% HP è una kill garantita; aspettare il colpo pulito attraverso la mappa significa spesso che il target torna a piena vita a base prima che tu spari.
- **Stare a gittata massima nei teamfight.** Jinx non ha dash. La gittata massima delle AA ti mette fuori dal peel del team (la protezione: CC e shield del support). Stai nella seconda posizione più arretrata in modo che un assassino in flank non ti elimini prima che la squadra reagisca.
- **Bruciare la E per engage.** **Flame Chompers!** è il tuo unico self-peel. Una volta in cooldown sei una glass cannon (un campione ad alto danno e poche difese, come la maggior parte degli ADC) senza risposta a un diver. Droppa la E sotto i piedi quando un Zed o una Samira atterrano, mai come setup di poke.
- **Inseguire kill fuori dalla finestra di Get Excited!** La passiva dura solo qualche secondo. Se il buff scade mentre sei in territorio nemico, hai move speed base e zero escape. Quando il boost finisce, ritirati — il fight successivo torna da te più in fretta di quanto pensi.

## Suggerimento avanzato

Allena lo **swap di forma della Q in mid-AA** per tenere entrambi i mondi attivi. Il trick: accumula 3 stack di attack speed in minigun su una wave, switcha ai razzi giusto prima che una Q razzo lasti due minion, spara un razzo, poi torna in minigun nello stesso frame per mantenere il buff di attack speed attivo. In teamfight si traduce in stackare attack speed con la minigun sul tank di front line, switchare ai razzi nel momento in cui il team committa l'engage, e scaricare 3-4 razzi nella back line nemica con crit + Runaan's e attack speed già caricata. Eseguito bene aggiunge circa il 40% di DPS extra nei primi tre secondi del fight, che è esattamente la finestra in cui i carry vivono o muoiono.
