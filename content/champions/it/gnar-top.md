---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "it"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Guida Gnar top per League of Legends Patch 16.9: gestione Rage Mini/Mega, build bruiser ottimale, matchup chiave, power spike, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "In combattimento Gnar accumula Rage. Al massimo, la prossima abilità lo trasforma in Mega Gnar: più HP, melee, nuove abilità, niente R fino al ritorno Mini."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini: boomerang a lungo range che rallenta e torna; se lo riprende il cooldown si abbassa. Mega: masso corto che si ferma sul primo bersaglio e rallenta l'area."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini: ogni terzo attacco/spell fa danno bonus e dà move speed. Mega: si rizza e schianta l'area davanti, stun sui colpiti."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini: dash-leap che rimbalza più lontano se atterra su una unità (minion, ward, monster, champion). Mega: atterraggio pesante che fa AOE, niente rimbalzo."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Solo Mega. Sbalza tutto intorno a lui in una direzione scelta; chi sbatte contro un muro viene stunnato e prende danno bonus. Tutto il game plan in un tasto."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dai Plated Steelcaps quando l'enemy team ha 2+ fonti di hard CC o danno magico pesante (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro top AP (Kennen, Vladimir, Rumble): magic resist + danno on-hit magico per restare rilevante anche con Mini Q+AA"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst magico pesante (roam Syndra, Vex, doppia comp AP): lo shield lifeline blocca la finestra di one-shot"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contro damage dealer crit-based (Yasuo, Tryndamere, Caitlyn fed): taglia il danno crit ricevuto"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro squadre con due fonti di healing (Soraka + Aatrox, Yuumi + Mundo): grievous wounds dimezza le cure"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando splitpushi una side lane da solo dopo Trinity: bonus danno torri/minion + buff stat in solitaria"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Carica Rage in lane con Mini Q poke, poi trasformati in Mega prima di un fight in cui ti committi. Usa R come engage con wall stun per spaccare a metà l'enemy team in teamfight e contesti obiettivi."
  weakness: "Niente dash e shapeshift forzato. Se Mega lontano dal team non puoi tornare con Hop; se resti Mini in teamfight non hai R. I top a range bullizzano Mini Gnar senza risposte."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp procca ogni 4 secondi in melee combat — perfetto per Mega Gnar che entra nel frontline avversario. Demolish trasforma una wave pushata in piatti gratis, Second Wind cura il poke ranged su Mini Gnar, Overgrowth scala HP fino al late."
    secondary_rationale: "Precision secondary: Triumph rigenera HP su takedown (enorme dopo che una Mega R su muro porta una kill), Legend: Alacrity dà attack speed così il terzo Hyper proc di Mini arriva più veloce in ogni trade."
    secondary_alternative: "Contro matchup di poke ranged (Vayne, Quinn, Kennen, Teemo) swap Precision con Sorcery: Nimbus Cloak (move speed dopo summoner spell) e Gathering Storm (scaling AD long-game) per arrivare a Mega range e vincere il late outlasting them."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernaut melee senza poke ranged"
      reason: "Mini Gnar Q ha 1100 di range e rallenta. Non possono toccarti finché non gli cammini addosso, quindi accumuli Rage in sicurezza e ti committi solo con Mega su per disengage con R su muro."
    - examples: ["aatrox", "renekton"]
      archetype: "Bruiser short-range con finestre di all-in finite"
      reason: "Il loro budget di power è in trade window early. Mini Gnar evita l'all-in con E-hop sui minion, poi ribalta tutto quando arriva Mega online con R stun + chain Wallop."
    - examples: ["nasus", "yorick"]
      archetype: "Juggernaut da scaling senza early kill threat"
      reason: "Pushi la wave con Mini Q+W e gli neghi farm sotto torre; non possono punire perché non hanno gap-close che batte il tuo boomerang range."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Top ranged che pokano Mini Gnar da più lontano"
      reason: "Mini Gnar non ha sustain ranged e il suo unico trade safe è Q da max range. Loro autoattaccano da dentro quel range e lo spingono sotto torre senza alcuna finestra di risposta."
    - examples: ["fiora", "camille"]
      archetype: "Anti-tank con true damage %HP o hard CC dive"
      reason: "I vital di Fiora shreddano l'HP pool di Mega Gnar più veloce di quanto lui possa rispondere; la E hookshot di Camille pinna Mini Gnar al muro per un all-in da cui non ha dash per scappare."
    - examples: ["malphite", "ornn"]
      archetype: "Tank engager che cancellano l'angolo della tua R"
      reason: "Flash-engagano la tua back line prima che tu possa trasformarti e scegliere il muro. Una volta che la loro initiation atterra, la tua R diventa peel (spingere via i nemici dai tuoi carry) invece del pickoff (kill singola su un nemico isolato) game-winning."
---

## Panoramica

Gnar è un fighter top che si trasforma tra due forme in base a una barra Rage che si riempie usando abilità o subendo danni. **Mini Gnar** è un poker ranged (poke = danno a distanza per logorare HP senza committarsi) con un boomerang lungo e un hop che rimbalza più lontano se atterra sulle unità; **Mega Gnar** è un bruiser melee con uno stun, danno AOE (area of effect: danno su zona, non su singolo bersaglio) e la migliore ulti a basso cooldown del gioco se usata vicino a un muro. Tutto il champion ruota attorno al timing della trasformazione: Mini in lane per pokare e farmare in sicurezza, Mega quando ti impegni a un fight (commit = scendere in scontro fino in fondo, senza tirarsi indietro) dove R può inchiodare i nemici contro il terreno.

Il game plan in una frase: accumula Rage da Mini, trasformati vicino all'enemy team, lancia R contro un muro per stunnare (immobilizzare per ~1.5 secondi senza poter agire) bersagli multipli, poi pulisci mentre il tuo team segue. Se ulti in campo aperto sprechi l'unica win condition (la cosa che il champion deve fare bene per portare a casa la partita). Se passi Mega da solo in lane rischi di morire perché l'escape (la via di fuga) di Mini, cioè il rimbalzo della E su un minion, sparisce.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La rigenerazione HP di Doran's Shield è pensata per il poke ranged sostenuto che ogni matchup di Mini Gnar ti tira addosso.

**Core items (in ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primo item ogni game. Costruito da Sheen (un componente che aggiunge danno bonus al prossimo basic attack dopo ogni abilità lanciata); Trinity fa scattare quel proc (l'attivazione bonus damage) su ogni Q sia Mini sia Mega. Il move speed permette a Mini di kitare (muoversi all'indietro mentre attacchi, mantenendo distanza), e l'attack speed velocizza l'arrivo di Hyper (la passiva del terzo colpo di Mini).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots default contro damage dealer fisici (la maggioranza dei matchup top). Riducono il danno da basic attack ricevuto.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP bonus che cresce in base agli AD bonus degli altri tuoi item, più uno shield una-tantum che si attiva intorno al 30% HP. Tiene Mega Gnar vivo abbastanza per piazzare la R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — converte il burst fisico ricevuto in un sanguinamento lento (danno spalmato nei secondi successivi invece che istantaneo). Ti dà tempo di reagire in un fight in cui ti sei impegnato da Mega.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — armor + uno slow di attack speed AOE (rallenta l'attack speed di tutti i nemici in area attorno a te, non solo uno). Devastante contro carry da auto-attack (Vayne, Tristana, Kog'Maw) una volta che la R Mega li ha inchiodati al muro.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dai Plated Steelcaps contro CC pesante (crowd control: stun, root, silence che ti bloccano) o comp AP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contro top AP (Kennen, Vladimir, Rumble). Aggiunge magic resist e on-hit magic damage (un pizzico di danno magico aggiuntivo su ogni basic attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst magico pesante (roam Syndra, Vex, doppia AP). Lo shield lifeline si attiva quando scendi a HP bassi assorbendo danno magico in arrivo, e blocca la finestra di one-shot.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contro damage dealer crit (Yasuo, Tryndamere, Caitlyn fed).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro squadre che stackano due fonti di healing. Applica grievous wounds (un debuff che dimezza l'healing nemico per qualche secondo).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando fai splitpush in una side lane da solo dopo Trinity Force. Splitpush = spingere una side lane in solitaria mentre il tuo team gioca altrove, costringendo il nemico a mandarti qualcuno contro.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando l'enemy team ha 2+ fonti di hard CC o danno AP pesante.

**Skill order:** Porta al massimo livello **W** per prima (il danno del terzo colpo Hyper scala di più per livello), poi **Q** (slow più lungo + CD più basso per il poke), poi **E** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** con **Triumph** e **Legend: Alacrity**.

## Matchup chiave

- **Sett:** Lane gratis. Mini Q ha più range di tutto quello che lui ha; non camminare mai dentro la sua W (Haymaker). Quando ti raggiunge, fai E su un minion per rimbalzare via dalla wave e tornare in sicurezza.
- **Aatrox:** Pari pre-6, lo outscaleresti (diventi più forte di lui col passare della partita). Evita gli sweet spot della sua Q (il centro luminoso del fendente, dove fa danno extra). Una volta che hai Mega R + un muro dietro di lui, perde ogni all-in (scontro totale fino alla morte) in cui si impegna.
- **Vayne:** Hard counter. Stai indietro, fai last-hit dei minion con Q da max range, accetta che la lane ti bullizza (non puoi rispondere senza morire). Roam (vai a supportare un'altra lane) verso mid o invadi la jungla nemica quando Mega è pronto.
- **Camille:** Perdi la lane, vinci il late. Evita il range della sua E hookshot quando sei Mini (ti inchioda al muro e brucia il tuo Flash — Flash è un summoner spell che ti teletrasporta a corta distanza con un cooldown di 5 minuti, il tuo bottone d'emergenza una-tantum — poi torna a ingaggiarti). Salva la E per dopo che lei dasha dentro, mai prima.
- **Malphite:** La lane è ok — Mini Q lo tiene a distanza all'infinito — ma occhio al level 6. Flash-ulti sulla tua back line (i carry che stanno dietro al tuo team) in teamfight, e ti uccide l'angolo della R. Di' al team di sparpagliarsi così la sua ulti non prende due di voi insieme.

## Power spike & condizioni di vittoria

- **Level 2:** Con Q + W vinci la maggior parte degli short trade (brevi scambi di colpi in lane, non fight totali) contro bruiser melee. Cammina sulla wave, Q sul nemico attraverso i minion, e il terzo basic attack scatena il danno bonus di Hyper.
- **Level 6:** La prima Mega R sblocca un tower dive (andare sotto la torre nemica per uccidere nonostante i tiri della torre) su un nemico low-HP se accumuli Rage in Mega prima di crossarci.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minuto 12-14):** Il tuo singolo power spike (il momento in cui diventi notevolmente più forte e devi cercare il fight) più grosso. Mini Q + auto-attack picchia come un treno; le combo Mega Q + W one-shottano (uccidono in un colpo solo) gli squishy (campioni ad alto danno e poche difese, tipo gli ADC e i mage) post-stun.
- **Fight Mega R con 3 item (~ minuto 22-26):** Sterak's + Trinity + boots completati significa che Mega Gnar può attraversare un frontline (i tank e bruiser che aprono il fight da davanti) e concatenare R nella back line (i carry che fanno danno da dietro) per uno stun su 2-3 persone. Forza qui i fight per obiettivi raggruppati (contesti drago/baron in cui entrambe le squadre sono ammassate insieme).

## Errori comuni

- **Andare Mega in lane senza un fight pronto.** Mega non ha escape (niente dash della E) e resta Mega per ~15 secondi prima di tornare Mini. Se il jungler non sta arrivando e non ti stai impegnando in un fight, tieni Rage all'80-90%, pinga indietro al team, e lascia che la barra decada da sola.
- **Lanciare R in campo aperto.** Senza un muro dietro il bersaglio, GNAR! è solo un knockback (una spinta forzata che butta i nemici via per un breve tratto) che interrompe i loro dash e nient'altro. Riposizionati prima, sempre; il mezzo secondo che spendi ad allineare il muro vale uno stun multi-target.
- **Fare E dentro invece che fuori.** Mini E è il tuo escape, non il tuo strumento di engage nella maggior parte dei matchup. L'unica volta in cui E in avanti è corretto è quando Rage si sta riempiendo e hai un minion chiaro su cui rimbalzare per tornare indietro.
- **Spammare W in lane per "forzare" il bonus damage di Hyper.** Il bonus del terzo colpo si attiva su ogni basic attack E su ogni spell. Scambia colpi in pattern di due abilità + un basic attack, non tre basic attack in fila che ti spingono fuori posizione.
- **Trasformazioni mid-fight che non controlli.** Anche il danno ricevuto riempie Rage. Se ti tiri indietro al 95% di Rage, il prossimo basic attack su un minion ti trasforma in Mega nella tua jungla senza un nemico su cui usare R. O ti impegni in un fight prima, o torni alla base.

## Suggerimento avanzato

Usa Hop per rimbalzare su **ward e trinket** quando la tua wave è finita. Una ward è il piccolo occhio magico che piazzi sulla mappa per la vision; quella gialla base è la **Stealth Ward** che il tuo support ha come trinket, e la **Control Ward** è la ward rosa che i nemici piazzano per togliere vision. Ognuna di queste conta come unità su cui Mini Gnar può atterrare per il secondo hop esteso. Piazza in anticipo una Stealth Ward verso l'entrata della jungla nemica, poi fai E sopra per estendere il tuo range di ~400 unità e sorprendere con una Q un nemico che sta facendo counter-jungling. Lo stesso trick ti salva dai gank: salta con E sulla tua ward dentro il tribush (il gruppo di tre cespugli vicino a ogni lane) e il ganker non ha modo di risponderti.
