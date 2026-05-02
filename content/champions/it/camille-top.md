---
title: "Camille Top Build & Guida — Patch 16.9"
slug: "camille-top"
language: "it"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Guida Camille top per League of Legends Patch 16.9: starter, build fighter, matchup chiave, power spike, errori comuni e una tip avanzata di chiusura."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Ogni auto-attack su un campione genera uno scudo pari a una percentuale degli HP massimi di Camille, calibrato sul tipo di danno del bersaglio (fisico o magico)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Auto-attack potenziato con bonus di danno e move speed. Si rilancia entro pochi secondi per un secondo colpo: aspettare fra i due cast aumenta il danno e aggiunge true damage."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Cono frontale dopo un breve delay. La metà esterna rallenta i nemici, infligge danno extra e cura Camille in base agli HP mancanti."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Si lancia su un muro e rimbalza knockando in aria i campioni nel punto di atterraggio. È il principale strumento di engage e disengage — serve un muro in range."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Salta su un campione bersaglio e lo intrappola in un'arena circolare. Allies e bersaglio non possono entrare/uscire; gli auto-attack sul bersaglio infliggono danno magico bonus."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "primo item nei matchup duelist (Fiora, Jax, Irelia): il reset Spellblade su Q1-AA-Q2 sostiene il trade pattern meglio di Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst magico forte (Vladimir, Rumble, Cassiopeia): lo scudo magico sotto 50% HP ti fa sopravvivere alla prima rotazione di CD"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro team che stacka armatura (frontline con Plated Steelcaps + Randuin's): l'armor shred amplifica anche il danno del team"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando sei avanti e splitpushi in side lane (spingi da solo per forzare una risposta): tower shred e HP bonus quando sei isolato"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap stivali contro AP pesante o 3+ fonti di hard CC (stun, root, taunt che fermano E in volo o il caricamento di W)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro un AD assassin pumpato in snowball (Zed, Talon, Kha'Zix): la seconda vita ti lascia chiudere la combo R anche se muori"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage da un muro con E, blocca il carry prioritario dentro R, poi burstalo con Q1-AA-W-Q2 prima che arrivi peel. In side lane vinci 1v1 con i Q reset e il W heal."
  weakness: "Lane aperte senza muri annullano la E. La R ha cooldown lungo: nelle finestre vuote sei solo un auto-attacker robusto. Hard CC interrompe la E in volo e il caricamento della W."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaria: Conqueror stacka veloce su W-Q1-AA-Q2 e premia i fight lunghi che Camille forza con R. Triumph rimborsa HP sui takedown, Legend: Alacrity velocizza Q reset e auto della R, Coup de Grace si allinea col true damage percentuale di Q2 ritardato sotto 40% HP."
    secondary_rationale: "Resolve come secondaria: Bone Plating attutisce gli all-in early da Darius / Renekton / Pantheon, Overgrowth scala il pool HP su cui è calcolato lo scudo della passiva."
    secondary_alternative: "Contro top ranged poke (Quinn, Teemo, Vayne, Gnar) swap Resolve a Inspiration con Magical Footwear (stivali gratis intorno al minuto 12) e Cosmic Insight (più Flash e R uptime per committare ad ogni cooldown disponibile)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Bruiser melee immobili"
      reason: "E + R li chiudono in melee senza risposta. I Q reset e lo slow della W permettono a Camille di kitare (muoversi indietro mentre attacca) dentro la R aspettando che i loro stack o cooldown svaniscano."
    - examples: ["vladimir", "rumble"]
      archetype: "Mage squishy giocati top"
      reason: "Una volta dentro la R non possono pool, dashare o uscire dall'arena. Il true damage di Q2 li spella oltre lo shield e l'heal sustain."
    - examples: ["sion", "chogath"]
      archetype: "Tank scaling tardivi"
      reason: "Il true damage di Q2 e il burst di Sundered Sky chunkano enormi pool HP. La R impedisce di tornare verso il loro team per il peel durante uno scontro in side lane."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Top ranged con tool di kite"
      reason: "Pokano (danno chirurgico a distanza) senza committare mentre Camille non ha risposta a range. La E cerca un muro che loro possono semplicemente abbandonare camminando."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Tank frontline con hard CC"
      reason: "Il loro crowd control interrompe la E in volo, il caricamento della W e il dash di lock-on della R. Camille perde ogni all-in (commit totale fino alla kill) in cui lo stun atterra prima."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Melee con all-in early forte"
      reason: "Burstano (concentrano danno in 1-2 secondi) più veloce di quanto Camille setupi E + W e battono il suo trade pattern prima del livello 3."
---

## Panoramica

Camille è un fighter / diver melee (salta nella backline avversaria per uccidere un bersaglio prioritario): dasha dai muri per inchiodare un singolo carry (il bersaglio ad alto danno della backline — di solito l'ADC, il marksman della bot lane, o il mid-laner) e trasforma il fight in un 1v1 dentro l'arena della **R**. Il kit premia i trade prolungati: la **Q** è un auto-attack potenziato a due cast (= AA) con true damage ritardato (danno che ignora armatura e magic resist), la **W** cura quando la metà esterna colpisce un campione, e la passiva genera uno scudo che riduce il danno in arrivo del tipo corrispondente (fisico o magico) ad ogni AA. Damage prevalentemente fisico (AD = Attack Damage) ma la **R** aggiunge danno magico bonus (AP = Ability Power), quindi damage_type mixed.

Il game plan in una frase: aspetta la **R**, vai in una side lane (top o bot) o nei bush del fiume, dasha da un muro sul priority target e bursta con **Q1 → AA → W (metà esterna) → Q2** mentre il resto del fight resta fuori dall'arena. Senza R, farma in sicurezza dietro i minion ed evita le lane aperte dove la **E** non ha muri da agganciare.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Sostituisci con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (più HP e blocco danno in arrivo, niente AD) solo nei matchup ranged poke (Quinn, Teemo, Vayne).

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — rush primo item. Active dash + slow si concatena con la metà esterna della **W** e dà la waveclear che il kit base di Camille non ha.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contro lane con tanti AD (campioni a danno fisico) e jungle AD. La riduzione del danno da auto-attack è critica perché la maggior parte delle minacce a Camille sono bruiser fisici (fighter mid-range con HP alti e danno sostenuto).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst spike. Il primo auto su un campione critta e cura: si allinea con **Q1** per aprire ogni all-in (commit totale fino alla kill).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike di sopravvivenza. Tenacity (durata ridotta di stun, slow e altro crowd control = CC) più uno scudo che parte ad HP basso — Camille dive sulla back line nemica e deve sopravvivere al peel.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — anti-burst. Il bleed (danno post-hit spalmato in qualche secondo) ti dà tempo di reagire invece di essere one-shottato.

**Situational items:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap come primo item nei matchup duelist (Fiora, Jax, Irelia). Spellblade (passiva: dopo aver castato un'ability, il tuo prossimo auto-attack infligge danno bonus e azzera il timer dell'AA) ti permette di sostenere meglio un trade **Q1 → AA → Q2** rispetto a Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst magico pesante (Vladimir, Rumble, Cassiopeia, Kayle AP).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro enemy team che stacka armatura (più campioni comprano item di armor come Plated Steelcaps e Randuin's; "stack" = accumulare la stessa stat su più item). Armor shred = ogni colpo rimuove un pezzo di armatura del bersaglio per qualche secondo, così il danno fisico del tuo team picchia di più.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando sei avanti e splitpushi (spingi una side lane da solo per forzare una risposta avversaria). Tower shred = danno bonus alle torri; l'item dà anche statistiche maggiorate quando non hai alleati vicino.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap stivali contro AP pesante o 3+ fonti di hard CC.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro un AD assassin pumpato (Zed, Talon, Kha'Zix) in snowball (vantaggio iniziale che cresce kill dopo kill).

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro AP pesante / CC.

**Skill order:** Maxa **Q** per prima (= un punto a ogni livello: più danno, CD = cooldown più corto), **E** seconda, **W** per ultima. **R** ai livelli 6, 11, 16. Livelli 1-3: **W → E → Q** — sustain, poi engage, poi steroid di danno. "Q reset" sotto = **Q1 → AA → Q2 → AA**: ogni cast della Q azzera il timer dell'AA, così fai un auto extra subito dopo.

**Runes:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaria **Resolve** con **Bone Plating** e **Overgrowth**. Stat shards (i tre piccoli bonus stat in fondo alla pagina rune): Attack Speed, Adaptive Force, Health Scaling.

## Matchup chiave

- **Darius:** Tanka HP early (incassa danno e resta pari di CS). Ti outduel (vince il 1v1) pre-3 — aspetta livello 3 con la **Q** pronta. Una volta online ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**, danza con lo slow della **W** + **Q** reset (la passiva Hemorrhage stacca bleed su di te fino a 5 stack; ucciderlo gli resetta gli stack della ulti, quindi non regalargli kill).
- **Fiora:** Mirror duelist matchup. Trade in linea retta così non ruota intorno a te per beccare il Vital perpendicolare (la passiva di Fiora marca uno dei tuoi lati: colpirti su quel lato fa true damage e la cura). A livello 6 la sua **R** e la tua **R** si annullano — il positioning decide chi engaga (apre il fight) per primo.
- **Renekton:** Perde lane pre-3 e al suo spike livello 2 (W + Q). Tieni la **E** per il suo all-in. A 6 il potere si ribalta se non ha snowballato: la **R** lo trascina fuori dal range in cui genera Fury (la sua risorsa rage).
- **Jax:** Brutto matchup post-6. La sua E counter-strikea il tuo **Q2** e il caricamento (windup = breve delay prima che l'ability atterri, in cui può essere cancellata) della **W**. Compra ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** primo, mai **E** in melee se non quando il counter strike è in cooldown.
- **Quinn / Teemo:** Top ranged. Perdi lane brutalmente early. Parti con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** invece di ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freeza la wave (lascia che i minion nemici siano più dei tuoi, così la wave resta vicino alla tua torre) e mai pushare senza **Q + E** disponibili. Aspetta i gank (il jungler arriva in lane per un 2v1) per chippare le plate avversarie (i 5 pezzi bonus di gold sulle torri esterne nei primi 14 minuti).

## Power spike & condizioni di vittoria

- **Livello 2 (W + E):** Prima finestra di all-in. Slow della **W** → **AA** → knock-up (breve stun aereo all'atterraggio) della **E** prepara un trade pieno con la passiva attiva due volte.
- **Livello 6 (R):** L'engage diventa incontrastabile per una rotazione di cooldown. Combina la **E** da un muro con la **R** per chiudere chiunque in melee; avverti il tuo jungler prima del fight così entra dentro il ring.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completion (~ minuto 13-14):** Sblocca la waveclear. Il tuo trade pattern diventa consistente: active slow → metà esterna **W** → **Q1** → **AA** → **Q2** chunka per ~metà della loro barra HP.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minuto 20-24):** L'heal-on-first-hit ti lascia committare molto più aggressivo nelle skirmish in side lane (piccoli scontri 1v1 o 2v2). Questo è lo spike da cui inizi a splitpushare per ottenere objective.

## Errori comuni

- **Sprecare la E per pokare (chip damage a distanza) in lane.** La **E** è il tuo unico escape se il jungler nemico ganka. Lanciala per commit di engage o per uscire da un gank, non per 50 di chip damage. Senza **E**, una Camille senza Flash muore a qualsiasi 2-man dive (tentativo di kill coordinato sotto la tua torre).
- **Restare davanti al cono della W.** La metà interna fa danno scarso e niente slow / heal — il payoff è tutto nella metà esterna. Repositionati a metà cast così il nemico è nel ring esterno, non incollato a te.
- **Engagare senza R quando il bersaglio ha hard CC pronto.** La **R** è il tuo tool "no Flash escape" — una volta agganciato, il bersaglio non può Flashare fuori dal ring. Senza **R**, una Camille che dive su una squadra pronta a peelare muore in catene di stun (CC consecutivi senza spazio per reagire).
- **Sparare Q1 → Q2 back-to-back.** Più aspetti fra **Q1** e **Q2** (fino a ~2 secondi), maggiore è il bonus damage e la quota di true damage del **Q2**. Spremi un **AA** + **W** in mezzo — è da lì che arriva la maggior parte del tuo burst.

## Suggerimento avanzato

Allena il combo **Flash → E**: se non c'è un muro utile in range, usa **Flash** (summoner spell su D o F che blinka di ~400 unità) a metà **E** per teletrasportarti su un muro e redirigere il dash. Questo trasforma Camille da "le servono i muri" a "engaga ovunque" al costo di uno summoner. Il combo è più utile nei pit obiettivo (le arene murate attorno a Drake e Baron) e nei fight aperti a metà fiume — Flash riempie il gap così atterri comunque il knock-up (breve stun aereo) della **E** sul priority target.
