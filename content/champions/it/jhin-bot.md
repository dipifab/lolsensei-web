---
title: "Guida Jhin Bot — Patch 16.9"
slug: "jhin-bot"
language: "it"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Jhin bot lane per League of Legends Patch 16.9: starter kit, build lethality-crit, matchup chiave, power spike, errori frequenti e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Il revolver di Jhin ha solo 4 colpi per caricatore; poi deve ricaricare. Il 4° colpo crittizza sempre e fa danno extra che esegue i nemici a basso HP. I crit danno anche un breve burst di Move Speed."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Colpo a bersaglio che rimbalza fino a 4 volte. Ogni kill aumenta il danno del rimbalzo successivo. Poke affidabile e waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Skillshot lineare a lunghissimo raggio. Root se il bersaglio è stato colpito di recente da te o da un alleato. Usalo dopo auto-attack o engage del support."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Trappola lotus invisibile che si arma dopo un breve delay. Rallenta a contatto, poi esplode danneggiando. Serve a zonare, coprire i fianchi e confermare i root di W."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Ulti channellata: 4 colpi a lunghissimo raggio che si fermano sui champion, li rallentano e fanno più danno man mano che l'HP scende. Il 4° colpo crittizza."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "contro backline avversaria squishy (niente tank): la lethality amplifica il burst di W-root e dà Move Speed attiva per i roam"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che curano molto (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds dimezza le cure durante la tua R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC duro single-target che ti cancella la R (Blitzcrank hook, Morgana Q, Ashe R): lo spell shield ti regala il cast"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quando sei avanti e ti serve lifesteal + uno scudo per sopravvivere ai fight lunghi senza un peeler (alleato che ti protegge)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro diver in all-in (Diana, Kha'Zix, Master Yi): il Move Speed in combat e il ghosting sui minion ti aiutano a kitare"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Ottieni il crit del 4° colpo a ogni trade e usa le catene di W-root con il support per inchiodare i bersagli da lunga distanza. Posizionati per tenere libere le linee di R nei fight obiettivo."
  weakness: "Attack speed bloccata e nessun dash. Hard counter da diver mobili e tank engage; se il support viene tirato via non hai escape oltre Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Marksman immobili a lungo raggio"
      reason: "Condividono con Jhin la mancanza di dash ma hanno finestre di burst più corte. Una volta che Jhin entra nel ritmo del 4° colpo con il follow-up del support, vince i trade diretti dal level 6 in poi."
    - examples: ["sivir", "kalista"]
      archetype: "Marksman da reset/mobilità che vivono in corto"
      reason: "Il loro kit vuole stare a corto raggio; Jhin li può W-rootare da fuori auto-attack range e seguire con E (la lotus trap) per chiudere prima che resettino."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanter pure-heal in bot lane"
      reason: "W-root + R execute di Jhin punisce in fretta gli heal-bot a basso HP. Con Mortal Reminder online (Grievous Wounds dimezza le cure) il loro game plan crolla."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Lane bully aggressivi level 1-3"
      reason: "Bursta Jhin durante le finestre di reload (dopo ogni ciclo di 4 colpi il revolver deve ricaricare). Jhin non ha mobilità per disengage e la W per rootare ha bisogno di un setup che da solo a level 1 non riesce a creare."
    - examples: ["kai-sa", "tristana"]
      archetype: "Hypercarry mobili con escape integrate"
      reason: "Dash integrate (Kai'Sa E reposition, Tristana W jump) schivano la W e interrompono il cast della R. Scalano in un 1v1 da cui Jhin non riesce a kitare via."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Tank support hard-engage"
      reason: "Atterrano CC point-and-click su Jhin durante i frame di reload; lui non ha dash per peelarsi e la W per rootare richiede che siano già stati danneggiati."
---

## Panoramica

Jhin è un marksman a lunga distanza che gioca come un cecchino, non come un carry da DPS sostenuto (damage per second, danno costante nel tempo). Il suo revolver **Whisper (Passiva)** spara solo 4 colpi tra una ricarica e l'altra, ma il 4° colpo crittizza sempre ed esegue i bersagli a basso HP — quindi ogni trade (uno scambio breve di colpi in lane, non un tentativo di kill) si costruisce attorno al timing di quel 4° proiettile su un campione ferito. Non ha dash e l'attack speed è bloccata, perciò posizionamento e setup contano più della velocità di esecuzione meccanica.

Il game plan: pokeggia con **Q** e auto-attack finché il support non engagia, poi concatena W-root in un crit del 4° colpo. Dopo il level 6, **R** trasforma i pick (eliminare un nemico isolato fuori dal teamfight) e gli assedi obiettivo in kill da fuori range della squadra avversaria. Se la frontline ti peela (ti protegge dai diver) outscali quasi tutti i duo bot entro il minuto 25.

## Build Consigliata

**Starting items:** Doran's Blade + 1 Health Potion. Salta Doran's Shield a meno che la lane non sia un matchup pesante di auto-attack come Draven o Lucian, dove l'HP extra vale più del danno bonus.

**Core items (in ordine):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primo spike di burst. L'execute sotto il 5% HP si lega bene al 4° colpo execute di Jhin e alla R; chiudi kill che la tua squadra altrimenti perderebbe.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — gli stivali con attack speed sono la scelta standard per i marksman; l'attack speed di Jhin è bloccata ma scala in danno per colpo, quindi l'AS si converte in danno puro.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — il colpo energized aggiunge poke a lunga distanza (sposa l'identità di Jhin) e il bonus range ti permette di colpire campioni prima che entrino nel loro range di attacco.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — il 4° colpo di Jhin è un crit garantito, quindi il moltiplicatore di danno crit di IE lo trasforma in un tasto da one-shot sui squishy.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration per il late game quando la frontline avversaria compra item difensivi.

**Situational items:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primo item alternativo se il team avversario non ha tank. La lethality (armor pen flat) fa sì che il burst da W-root cancelli i squishy in 1-2 colpi nelle skirmish iniziali, e il Move Speed attivo ti aiuta a posizionarti per il cast della R.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — sostituisce Lord Dominik's contro composizioni con tante cure (Soraka, Aatrox, Vladimir). Grievous Wounds dimezza le cure durante la finestra di execute della R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — compralo come 3°-4° contro CC duro single-target che ti cancella il channel della R (Blitzcrank hook, Morgana Q, Ashe R). Lo spell shield blocca un'abilità e ti permette di finire il cast.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quando sei avanti e ti serve lifesteal più uno scudo per sopravvivere a fight lunghi senza un peeler dedicato.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contro diver in all-in (Diana, Kha'Zix, Master Yi). Il Move Speed in combat e il ghosting sui minion ti aiutano a kitare (muoverti all'indietro mentre attacchi) finché la tua squadra non peela.

**Boots:** Berserker's Greaves di default. Boots of Swiftness diventa la scelta giusta solo quando il team avversario stacca slow inevitabili (composizione tipo Ashe + Nautilus + Anivia).

**Skill order:** Massimizza prima **Q** (DPS principale e waveclear), poi **W** (affidabilità del root e danno base), infine **E** (utility, basta un punto per la slow). Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con **Fleet Footwork** (mobilità + sustain in lane), **Presence of Mind** (rimborso mana sull'ulti), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace** (danno extra contro bersagli a basso HP — sposa il 4° colpo execute di Jhin). Secondaria **Sorcery** con **Absolute Focus** e **Gathering Storm** per lo scaling tardivo.

## Matchup chiave

- **Caitlyn:** Ti out-rangea con le auto-attack ma perde tutti gli all-in (impegno totale fino alla kill, non un semplice trade) una volta che hai 4 stack di passiva. Stai dietro i minion, fai Q-poke quando lei sbaglia le trap e W-rootala se il tuo support la tocca prima.
- **Draven:** Lane bully. Evita trade di auto-attack ai level 1-3; vince gli scambi diretti di DPS. Aspetta il poke con Q quando lui è impegnato a stackare le scuri; se sovraestende, il tuo crit del 4° colpo lo punisce duramente.
- **Lucian:** Bursta durante le tue finestre di reload. Tieni d'occhio il contatore dei 4 colpi (l'icona del revolver mostra i colpi rimasti) e non iniziare mai un trade con il colpo 3 o 4 — ricarica prima, poi engagia.
- **Sivir:** Il suo spell shield blocca la W. Forza lo shield prima con Q, poi lancia W quando è in cooldown. Dopo il 6 la sua R le permette di chasarti, quindi fight solo se il support ha CC per il follow-up.
- **Soraka / Yuumi:** Support pure-heal. Compra Mortal Reminder come 3° o 4° item; senza Grievous Wounds (il debuff che dimezza le cure) non li uccidi per quanti colpi tu possa piazzare.

## Power spike & condizioni di vittoria

- **Level 2-3:** Con **Q** e **W** hai il pattern di all-in level 2 più forte della lane: engage del support → AA → Q → W root per il crit del 4° colpo. Forza un fight la prima volta che arrivi a level 2 prima dell'avversario.
- **Level 6:** **Curtain Call** sblocca. Puoi chiudere kill iniziate dalla jungle al fiume o pickoffare un nemico a basso HP da uno schermo di distanza durante un recall. Tieni sempre R pronta prima che parta un fight obiettivo.
- **Completamento di The Collector (~ minuto 11-13):** Spike di primo item. Il 5% di execute ti permette di chiudere kill iniziate dal support. Questa è la finestra in cui snowballare la lane (trasformare un vantaggio iniziale in vantaggio item, che diventa vantaggio kill) è più facile.
- **Infinity Edge online (~ minuto 28-32):** Spike di tre item. Il 4° colpo one-shotta quasi tutti i champion non-tank. Forza i teamfight sugli obiettivi adesso — Jhin late con IE + Rapid Firecannon colpisce le backline (i carry dietro i tank) da fuori range della loro R.

## Errori comuni

- **Auto-attaccare quando il colpo 4 è caricato in un tank.** L'execute del 4° colpo è sprecato sui frontliner pieni di HP. Tieni il 4° colpo per un bersaglio squishy che si fa avanti, oppure last-hitta un minion per resettare il ciclo prima di re-engagiare.
- **Camminare avanti durante il reload.** Dopo il 4° colpo devi ricaricare prima della prossima auto-attack. Indietreggia in quella finestra — molte morti di Jhin succedono nel mezzo secondo in cui il nemico capisce che non puoi sparare.
- **Lanciare W alla cieca per pokeggiare.** W rootta solo se il bersaglio è stato danneggiato di recente da te o da un alleato (entro ~4 secondi). Piazza prima un'auto-attack o aspetta l'engage del support; altrimenti W è solo una linea di danno lenta che si schiva.
- **Channellare R senza vision.** Jhin è bloccato sul posto durante Curtain Call. Senza ward sui fianchi, un assassino ti gira dietro e ti uccide a metà channel. Piazza E (la lotus trap) sul fianco prima di premere R.
- **Saltare il piazzamento di E sugli obiettivi.** Le lotus trap coprono gli ingressi della pit di Drake e Baron a costo zero. Piazzale ad ogni cooldown — rivelano flank, rallentano gli engage e confermano i W root.

## Suggerimento avanzato

Usa **E** (Captive Audience) come conferma per i root della **W**. La trap si arma in modo invisibile e rallenta i nemici che ci passano sopra; se prevedi dove il support avversario camminerà per piazzare un ward, droppa **E** lì 2 secondi in anticipo, poi lancia **W** nel momento in cui scatta lo slow della trap — la slow rende lo skillshot a 3000 di range impossibile da schivare da qualsiasi punto della mappa. I Jhin esperti ottengono almeno un W-root a 3000 di range per fight con questa tecnica.
