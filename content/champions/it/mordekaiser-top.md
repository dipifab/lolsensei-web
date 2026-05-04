---
title: "Mordekaiser Top Build & Guida — Patch 16.9"
slug: "mordekaiser-top"
language: "it"
patch: "16.9"
champion: "mordekaiser"
role: "top"
last_updated: "2026-05-04"
description: "Guida Mordekaiser top per League of Legends Patch 16.9: build da AP bruiser, matchup chiave, power spike, errori comuni e una tecnica avanzata sulla R."
quick_learn:
  champion_dd_id: "Mordekaiser"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Juggernaut"
  abilities:
    - key: "P"
      name: "Darkness Rise"
      description: "Dopo 3 attacchi o spell contro champion o mostri, Mordekaiser attiva un'aura di danno attorno a sé e guadagna Move Speed bonus."
      dd_spell_id: "Mordekaiser_Passive"
    - key: "Q"
      name: "Obliterate"
      description: "Colpisce a terra in cono frontale. Il danno raddoppia se il colpo tocca un solo nemico — è la tua principale fonte di damage."
      dd_spell_id: "MordekaiserQ"
    - key: "W"
      name: "Indestructible"
      description: "Passiva: accumula una percentuale del danno fatto e subito. Attiva: converte l'accumulato in scudo. Riattiva per convertire lo scudo residuo in cura."
      dd_spell_id: "MordekaiserW"
    - key: "E"
      name: "Death's Grasp"
      description: "Tira verso di te i nemici in un cono frontale e infligge magic damage. Unico tool di engage; serve anche a tagliare la wave da distanza."
      dd_spell_id: "MordekaiserE"
    - key: "R"
      name: "Realm of Death"
      description: "Trascina un champion nemico in una dimensione tasca per un 1v1 di 7 secondi. Rubi parte delle sue stat per la durata; se lo uccidi le tieni fino al respawn."
      dd_spell_id: "MordekaiserR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro team a forte componente AP — aumenta del 30% tutte le self-heal, raddoppiando di fatto il valore del recast di W"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro team con 2+ tank (Sion, Ornn, Cho'Gath): la passiva brucia % HP max al secondo e perfora le frontline"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dai Sorcerer's contro lane ad alto auto-attack damage (Vayne, Quinn, Teemo) — 12% di riduzione sulle basic attack"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro single-target magic CC (catena R Lissandra, stun roam Twisted Fate) — lo spell shield blocca la prima ability ricevuta"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Arriva a Riftmaker intorno al minuto 13, poi cerca pick: R sulla carry nemica fuori dalla wave o agli obiettivi, vinci l'1v1 nella death realm, torna fuori con le sue stat rubate."
  weakness: "Niente dash e niente poke a distanza, vulnerabile a top range (Vayne, Quinn, Teemo) e a tool come spell shield o parry (Banshee's Veil, Fiora W) che annullano la R."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Conqueror è la pagina per i fight lunghi che Morde cerca: si carica a ogni hit e a stack pieni dà adaptive damage (AP o AD a seconda di cosa hai di più). Triumph cura sui takedown, Legend: Alacrity accelera la passive, Last Stand alza il danno a HP basso."
    secondary_rationale: "Resolve come secondary: Second Wind rigenera HP passivamente dopo aver subito danno (utile contro lane a forte poke), Revitalize aumenta la cura del recast di W andando direttamente sul tuo principale tool di sustain."
    secondary_alternative: "Se la squadra avversaria ha 2+ minacce di poke a range (Teemo top + Xerath mid), swap Resolve → Inspiration con Magical Footwear (boots gratis al minuto 12) e Cosmic Insight (Flash più frequente) per engage più sicuri."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Bruiser melee senza poke a distanza"
      reason: "Mordekaiser brilla nei trade prolungati: lo scudo di W accumula il danno che gli pompano addosso e la passive ticka per tutto il fight. Una volta inchiodati dall'E pull, non hanno disengage."
    - examples: ["vladimir", "kayle"]
      archetype: "Carry squishy senza vere fughe"
      reason: "La R lo trascina in 1v1 per 7 secondi: champion senza vera fuga (la pool di Vladimir va in cooldown dopo un uso, Kayle non ha dash) vengono cancellati mentre il loro team tiene il fight fuori."
    - examples: ["renekton", "pantheon"]
      archetype: "Lane bully senza counter alla R"
      reason: "Battono Morde dai livelli 1-5 ma il loro kit non ha risposta alla R post-6: una R pulita fuori dalla wave li isola dalla squadra e Mordekaiser vince l'1v1 con le stat rubate."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "gnar"]
      archetype: "Top range con tool di kite"
      reason: "Mordekaiser non ha dash né poke a distanza; i top range fanno auto-attack e disimpegnano fuori dalla portata di E, negando ogni tentativo di all-in e logorando l'HP."
    - examples: ["fiora", "jax"]
      archetype: "Duellanti con parry o dodge"
      reason: "La W di Fiora para l'animazione di attivazione della R rimborsando il cooldown; la E di Jax schiva il colpo empowered di Q, neutralizzando proprio gli strumenti che gli servono per l'1v1."
    - examples: ["olaf"]
      archetype: "Ult con immunità ai CC"
      reason: "La R Ragnarok di Olaf concede immunità ai disable e li rimuove al cast: ignora il pull di E e il suo sustain dentro la death realm rende l'1v1 una coin flip anche quando Morde landa la R."
---

## Panoramica

Mordekaiser è un AP juggernaut da top lane: un fighter melee che fa magic damage invece che fisico. Niente dash (teletrasporto istantaneo a corto raggio integrato nel kit), niente poke da distanza (danni a corto raggio sparati da lontano per logorare l'HP del nemico senza impegnarsi) — il piano di lane è camminare avanti, assorbire un po' di poke avversario e vincere ogni trade lungo (uno scambio prolungato di colpi in lane) grazie all'aura di danno della passive (**Darkness Rise**) e allo scudo della **Indestructible (W)**. Il kit premia gli scambi prolungati (trade da diversi secondi, non burst da 1-2 secondi dove uno dei due scarica tutto il danno in un istante): più resti vicino al bersaglio, più la tua aura ticka e più la W accumula danno da convertire in scudo.

L'ability che definisce il champion è **Realm of Death (R)**: un banish di 7 secondi che porta un singolo champion nemico in una dimensione tasca dove c'è solo un 1v1 pulito, senza alleati, senza minion, senza aiuto. Per la durata rubi anche una fetta delle sue stat principali. L'intero game plan ruota attorno alla R: prendi (isola e fai fuori) la carry squishy (il damage dealer fragile della squadra, alto danno e poca vita, tipo l'AD carry / ADC) fuori dal teamfight, lontano dalla sua wave (l'ondata di minion da farmare in lane), cancellala da solo mentre la tua squadra tiene il 4v4 fuori, poi torna con le sue stat per finire il lavoro. Questo rende Morde perdonante per un novizio: anche se la lane va a rotoli, una sola R giusta nel primo big fight può ribaltare la partita.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Le ability di Mordekaiser non costano mana, ma il Doran's Ring dà comunque AP, HP e un piccolo mana regen che insieme formano le stat di trade migliori al livello 1.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — il primo grande spike (picco di forza che ti rende molto più potente di colpo). Dà AP, HP e omnivamp (cura una percentuale di tutto il danno che fai). Dopo 3 secondi di combat con un champion ottieni un +8% di danno extra che si converte in true damage (danno che ignora armor e magic resist). Perfetto su Mordekaiser perché ogni fight che vuole è un fight lungo.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (un valore fisso di MR ignorato, non una percentuale). Boots di default quando c'è una qualsiasi carry squishy da cancellare con la R.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — il tuo item di scaling (un item che vale di più man mano che hai più AP): moltiplica per +30% l'AP totale. Compralo terzo quando la lane è stabile e puoi permetterti uno slot non difensivo.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — AP, armor e un'attiva che ti rende invulnerabile per 2.5 secondi (non puoi muoverti né agire, ma niente ti tocca). Usalo dentro la **R** se l'1v1 si mette male, o nel teamfight per costringere il team avversario a sprecare cooldown.

**Situational items:**

- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — al posto (o in aggiunta) di Zhonya's quando la squadra avversaria pesta forte AP. Dettaglio chiave: aumenta del 30% tutte le self-heal, inclusa quella del recast di **W**. Effettivamente raddoppia il valore di ogni shield che assorbi.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — quando il team avversario ha 2+ tank. La passiva brucia una percentuale degli HP massimi del bersaglio al secondo: è l'unico modo in cui un AP bruiser melee taglia frontline ad alto HP.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — sostituisce i Sorcerer's contro lane a forte auto-attack (Vayne, Quinn, Teemo). Il 12% di riduzione sulle basic attack neutralizza la loro principale source di damage.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro single-target magic CC che interrompe i tuoi engage (catena R Lissandra, stun da roam Twisted Fate). Lo spell shield blocca la prima ability che ti colpisce.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default (più damage). ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando la lane è ad alto auto-attack o il team avversario ha 3+ minacce AD.

**Skill order:** Maxa **Q (Obliterate)** per primo — è il tuo damage principale e il cooldown scende da 8s a 4s con i rank. Maxa **E (Death's Grasp)** per seconda per ridurre il long cooldown e rendere il pull più affidabile. Maxa **W (Indestructible)** per ultima — il rank-up incide soprattutto sulla durata dello scudo, meno critico del damage di Q. Punti in **R** ai livelli 6, 11, 16 come sempre.

**Runes:** Primary **Precision** con **Conqueror** (si carica colpo per colpo nei fight lunghi — esattamente quello che vuole Morde), **Triumph** (cura dopo un takedown, cioè una kill o un assist), **Legend: Alacrity** (attack speed per proccare — far scattare — la passive più in fretta), **Last Stand** (più damage a HP basso). Secondary **Resolve** con **Second Wind** (HP regen passivo dopo aver subito danno) e **Revitalize** (aumenta scudi e self-heal — buffa direttamente la **W**).

## Matchup chiave

- **Garen:** Matchup pari deciso da chi colpisce per primo in modo pulito. La **E (Judgment)** di Garen ti batte se gli stai fermo davanti a tankarla; usa la **Q** durante la sua spin per spezzargli il ritmo, poi cammina via dopo un trade e lascia che il tuo sustain resetti. Niente all-in mentre la sua **W (Courage)** è up con HP pieni.
- **Darius:** Perdi i primi livelli (la sua **Q** ha più range e ti accumula bleed), ma vinci post-6 se lo prendi in R: nella death realm non può resettare il bleed sui minion, quindi perde il suo principale tool di pressione. Niente all-in (commit totale a una kill) livello 1-5; farma e aspetta la R.
- **Vayne:** Hard counter (matchup quasi impossibile). Ha il range, il true damage sulla **W** e la **Q** dash per non farti mai toccare. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** al posto dei Sorcerer's, chiedi al jungler un gank al livello 3, e accetta che non la ucciderai in lane — concentrati sul farmare con **E** dal massimo della range.
- **Fiora:** Counter. La sua **W (Riposte)** para (deflette) la prossima ability che le tiri, inclusa l'animazione di attivazione della **R**, il che significa cooldown da 100+ secondi sprecato se la temporizza. Fingi il cast della R per baitarle (ingannarla a usare) la parry, poi ri-engaggia.
- **Renekton:** Perde post-6 se sopravvivi alla lane. Pre-6 ti stat-checka (ti batte solo per stat grezze, senza skill); gioca safe, farma con **Q** ed **E** dal massimo della range, e al livello 6 cammina avanti deciso — appena usa lo stun su di te, prendilo in R e l'1v1 nella death realm lo perdi raramente con stat-steal.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **R (Realm of Death)**. Ogni matchup in cui sei sopravvissuto fino al 6 diventa una coin flip — anche Vayne perde se la prendi in R pulita fuori dalla wave. Bait un trade aggressivo subito dopo il 6 per forzare il cooldown se non puoi all-in.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minuto 12-14):** I trade si ribaltano. L'omnivamp ti tiene su mentre farmi, e il +8% di true damage dopo 3 secondi rende ogni R landata 1v1 una kill garantita su una squishy.
- **Livello 11 + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes:** Secondo rank di R (cooldown da 140s a 120s) più magic pen. Da qui inizi la caccia ai pick (eliminare nemici isolati): cammina top → mid attraverso il river (la zona centrale che separa le lane), R-Flash (lancia la R e Flash a metà animazione — vedi Suggerimento avanzato) chiunque trovi solo.
- **3 item online (~ minuto 24-28):** Con ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, la tua R 1v1a la carry nemica ogni volta. È la window (la tua finestra di forza massima): forza i fight agli obiettivi (Drake, Rift Herald, Baron) qui, R sulla back-line carry (il damage dealer fragile che si posiziona dietro la squadra), ignora il resto.

## Errori comuni

- **R sul tank nel teamfight.** La R è un banish 1v1: se prendi il loro tank, la tua squadra fa 4v4 contro le carry e perde. R sempre il bersaglio squishy della back-line che la tua squadra non riesce a raggiungere (l'AD carry / ADC tipo Jhin o Ashe, o un mage burst tipo Lux o Syndra). Prima di ogni fight, mettiti d'accordo a voce con il team su quale target prenderai in R.
- **Sprecare la W come scudo difensivo senza recastare.** La maggior parte del valore della W viene dal **recast** che converte lo scudo residuo in cura. Se sta per scadere senza essere stato bucato, ricastalo per curarti — non lasciare che svanisca.
- **Engaggiare con la Q per prima.** La Q è il tuo damage principale e la vuoi per il colpo empowered single-target (danno doppio se prende un solo nemico). Apri con la **E (Death's Grasp)** per tirare il bersaglio dentro, poi piazza la **Q** mentre è inchiodato a contatto — quell'ordine massimizza la chance che la Q colpisca un solo target invece di splittarsi tra minion e champion.
- **Ignorare la magic resist della carry avversaria.** Appena una carry compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** o un grosso item di MR, il tuo damage crolla. Compra ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** (dà il 40% di magic penetration percentuale che taglia ogni stack di MR) come 4° o 5° item nel momento esatto in cui lo vedi nella lista item avversaria.
- **R sul target sbagliato per panico.** Quando stai perdendo un fight, l'istinto è prendere in R chiunque ti stia colpendo. Resisti. La R è un commitment di 7 secondi: se prendi un tank che non riesci a uccidere, te ne stai nella death realm a guardare il tuo team morire per 7 secondi senza nessuno a cui tornare. Regola: premi R solo su chi sei sicuro di poter uccidere in 4-5 secondi.

## Suggerimento avanzato

La combo R-Flash: lancia **Realm of Death (R)** su un bersaglio nemico e subito **Flash** (la summoner spell che ti teletrasporta a corto raggio fisso) per riposizionarti durante il cast. Visto che la R ha una breve animazione prima che il banish parta, il Flash ti riposiziona senza cancellare la R, e il nemico viene trascinato dove sei flashato (non dove eri partito). Questo apre pick altrimenti impossibili: R sulla carry al sicuro dietro i suoi tank, Flash di lato dentro la death realm, e l'hai rubata da metà teamfight prima che la sua squadra possa reagire. Il visual cue per gli avversari è "Mordekaiser è sparito" — non vedono la carry banishata da mezzo fight.
