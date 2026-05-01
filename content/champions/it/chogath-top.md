---
title: "Cho'Gath Top Build & Guida — Patch 16.9"
slug: "chogath-top"
language: "it"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Guida Cho'Gath top lane per League of Legends Patch 16.9: build tank-mage che stacka HP, rune Grasp, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Uccidere un'unità recupera HP e mana. Le takedown sui champion restituiscono molto di più. Sustain gratuito (rigeneri HP/mana tra i fight) su ogni last-hit (colpo che uccide il minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (abilità mirata, va schivata) a terra, range 950: knock-up dei nemici, rallentamento e danno magico. Poke (danno a distanza senza esporsi) ed engage (apre il fight) — preavviso lento, anticipa il bersaglio."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Cono frontale (range 300): danno magico e silence (impedisce di castare ability) per circa 2,2s. Concatenala dopo il knock-up della Q sui bersagli melee."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (le prossime auto guadagnano un effetto bonus). Le prossime 3 auto-attack fanno danno magico che scala con HP massimi del bersaglio e lo rallentano. DPS principale contro tank e waveclear (pulisce l'ondata di minion)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Execute (uccide sotto soglia HP) single-target true damage (ignora armor e magic resist), range 175. Sulla kill, Cho'Gath guadagna uno stack permanente: più HP massimi. Cap 6 stack da minion, nessun cap da champion."
      dd_spell_id: "Feast"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro tanto danno magico o catene di CC ripetuti (Malphite R, Sylas, Lissandra) — swap dai Plated Steelcaps prima del primo back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro 2+ minacce AP (top AP + jungler AP tipo Diana/Ekko) — stacka MR e aggiunge movement speed per inseguire chi kita"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro carry auto-attack con sustain (Vayne + Soraka, Master Yi + lifesteal) — applica Grievous Wounds (50% riduzione cure)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "come 6° item con 5+ stack di Feast — la soglia HP di Warmog's Heart è banale quando stacki, la regen fa skippare back"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contro mage con stack di minion (Heimerdinger, Malzahar) e team AP raggruppati — l'aura pulisce stack e chunka la frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Stacka Feast su cannon e kill per gonfiare gli HP. A 5+ stack + Riftmaker + Spirit Visage entri come secondo tank, assorbi il focus (sei tu il bersaglio), poi Q knock-up in W silence sul carry (chi fa danno)."
  weakness: "Niente dash, niente escape oltre Flash. I top ranged ti kitano (colpiscono fuori dal tuo range) la Q a 950. Vulnerabile a ignite + heal reduction prima di stackare — perdere lane snowballa perché Feast vuole farm."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve: Grasp si attiva ogni 4s in melee (proc = trigger della passiva), cura e stacka HP permanenti — fitta la curva HP+AP. Demolish prende la torre anche su lane perse, Second Wind regen il danno da poke, Overgrowth stacka HP ogni 8 minion."
    secondary_rationale: "Sorcery secondary: Manaflow Band sostiene il costo mana di Q poke ed E waveclear nelle lane lunghe, Transcendence alza l'ability haste (cooldown più bassi) così la Q torna su quasi ogni wave per cercare un knock-up."
    secondary_alternative: "Contro top ranged a poke o burst AP (Vladimir, Teemo, Kennen) swap Sorcery con Inspiration: Biscuit Delivery (sustain HP+mana gratis pre-6) e Time Warp Tonic (cura istantanea sull'uso pozione per restare in lane)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Bruiser melee a windup lento (HP+danno corpo a corpo)"
      reason: "Il knock-up di Q interrompe le animazioni di commit (pull di Darius, E spin di Garen, cast W di Sett). Carnivore più l'omnivamp di Riftmaker (cura simile al lifesteal su ogni cast) batte i loro trade; a soglia Feast, R li elimina al 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Diver melee mobili (ti saltano addosso veloci)"
      reason: "Q li knockuppa a metà dash spezzando la combo. W silenzia subito dopo, bloccando il secondo dash. R li esegue quando si ritirano low — non possono all-inarti (committarsi nel fight) senza Flash e una read pulita."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Mage melee senza hard CC (stun/root)"
      reason: "Non hanno lockdown istantaneo per interrompere la Q. Tu li outrangi sul poke da distanza sicura, e il silence di W spegne i loro kit ability-reliant durante l'all-in."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Top ranged con poke e disengage (strumenti per scappare)"
      reason: "Stanno oltre i 950 di Q, indietreggiano quando ti avvicini, e ti chunkano a metà HP prima del 6. Niente dash per chiudere, niente sustain oltre Carnivore, quindi perdi prio in lane (controllo della wave) ogni ciclo."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Duellanti melee mobili con danno continuo"
      reason: "Fiora parry (blocca) la W silence, Jax E schiva la Q knock-up, Tryndamere ignora la R finché ulta prima. Il loro danno continuo out-trada il windup lento della Q; arrivi a scalare Feast troppo tardi per contare."
    - examples: ["gnar", "kayle"]
      archetype: "Late-game scaler (deboli all'inizio, mostri al 30°)"
      reason: "Gnar in mini form attacca la Q da fuori range, Kayle ramp-a a auto in true damage che ti cancellano nei teamfight. Entrambi vincono il long game anche se Cho stacka Feast — out-damagiano la tua HP pool entro il minuto 30."
---

## Panoramica

Cho'Gath è un ibrido tank-mago: compra item che danno sia HP che ability power, e stacka HP massimi permanenti con la sua R **Feast**. Il kit accoppia un knock-up a lunga gittata (**Q**) con un silence melee (**W**), permettendogli di interrompere le ability di engage dei bruiser melee in lane e di lockdownare i carry avversari nei teamfight. Il danno che scala di più con la sua build viene da **Vorpal Spikes (E)**, che aggiunge danno magico basato sugli HP massimi del bersaglio — quindi fa più male a tank e bruiser fed che ai squishy.

Il game plan è semplice da descrivere e richiede pazienza: farma in sicurezza dietro ai minion, cerca knock-up con **Q** per setup di trade o per peelare gank, e **non** rinunciare mai all'occasione di **R** un minion low-HP (ogni stack da champion è permanente, ogni cannon ucciso con R vale +120 HP massimi per il resto della partita). Quando arrivi a 5+ stack più due item HP+AP, diventi un secondo tank che la squadra avversaria deve forzare prima dei tuoi carry — è quello che vince i teamfight.

## Build Consigliata

**Starting items:** Doran's Shield + Health Potion. Doran's Shield dà 80 HP e regen post-danno che sinergizza con la cura del last-hit di Carnivore.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primo item completo. HP + AP + omnivamp (ti cura per una percentuale di tutto il danno che fai, ability o auto). Il ramp di danno si converte in true damage dopo 3 secondi di combat — perfetto per i trade lunghi.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro un top AD. Riducono il danno auto-attack del 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — secondo item da danno. HP + AP + passiva burn che fa danno magico in percentuale degli HP massimi nel tempo. Stacka naturalmente con il rallentamento di Q e il silence di W che tengono i nemici nel range del burn.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + magic resist + 25% di amplificazione cure e scudi. Moltiplica le cure di Carnivore, l'omnivamp di Riftmaker, e qualsiasi shield che ricevi dagli alleati.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + un rallentamento su ogni ability che colpisce un champion. Si stacca al rallentamento di Q e impedisce ai bersagli silenziati da W di kitare via prima che il silence finisca.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contro danno magico pesante o catene CC ripetute. Swap dai Plated Steelcaps prima del primo back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contro squadre con 2+ minacce AP. Stacka magic resist e aggiunge movement speed per inseguire chi kita.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro carry auto-attack-based con sustain (Vayne + Soraka, Master Yi + Aatrox). Applica Grievous Wounds (50% riduzione cure) su ogni colpo subito.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sesto item quando hai 5+ stack di Feast. La soglia HP per la passiva Warmog's Heart è banale quando stacki; la regen ti permette di skippare back e roamare a HP pieni.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contro mage con stack di minion (Heimerdinger, Malzahar) e team AP raggruppati. L'aura passiva pulisce le ondate stackate e chunka la frontline avversaria.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** di default contro top AD, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro top AP o tanto CC.

**Skill order:** Maxa **Q** per prima (rallentamento, knock-up, strumento principale di trade), **E** per seconda (waveclear e on-hit che spaccano i tank), **W** per ultima (il silence è grande ma il danno per rank è piccolo). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**. Contro top ranged a poke, swap Sorcery con **Inspiration**: **Biscuit Delivery** e **Time Warp Tonic**.

## Matchup chiave

- **Darius:** Pre-6 rispetta la sua passiva W (5-stack bleed). Q-lo prima che possa connettere il pull, poi disimpegnati. Dopo il 6, Feast lo esegue al 30% HP — quella è la soglia per committare.
- **Sett:** Q-lo sul windup della W (il pugno arancione). Se ti pizzica con la W, accetta il trade e W-silenzialo per bloccare la sua E grab. Boots Plated, item Riftmaker primo — la sua ulti è da Mercury's Treads, valuta i Merc se è fed.
- **Teemo:** Counterpick. Prendi Doran's Shield + Second Wind, pusha la wave sotto torre con E waveclear, e chiedi gank al jungler. Compra ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** come primo item se la sua lane snowballa (poi build in Maw of Malmortius).
- **Fiora:** Matchup pari-perdente. Lei parry la tua W silence — non lanciare mai W nudo. Usa Q per interrompere i suoi dash trade, tieni W per dopo che ha bruciato Riposte.
- **Malphite:** Matchup pari, lui scala peggio di te. Non ha sustain e la sua Q poke è cara di mana; tradalo con Q+W quando il suo mana è basso. Attento alla sua **R** post-6: interrompe il cast della tua **R**.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + E puoi tradare aggressivo: Q per il knock-up, poi entri e bruci 3 E auto mentre non si possono muovere. Free swing del 35-40% HP se atterri Q.
- **Livello 6:** Il primo Feast sblocca la pressione execute. Il cooldown è 80 secondi e il range 175 (melee + un passo). Se il tuo jungler atterra qualsiasi CC su un nemico low-HP, entri e fai R per uno stack permanente.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minuto 13-15):** La matematica del trade si ribalta. L'omnivamp più la cura di Carnivore ti permettono di stare e combattere bruiser melee attraverso la loro combo completa senza backare.
- **5+ stack di Feast (~ minuto 20-25):** Diventi un secondo tank. Con Riftmaker + Spirit Visage + 5 stack stai sui 3800-4200 HP effettivi. Entri sulla backline avversaria, mangi il burst, e concateni Q-W sul loro carry.

## Errori comuni

- **Saltare Feast sui cannon minion per il gold.** Uno stack da cannon vale +120 HP massimi per sempre. Anche se "perdi" 60 gold di gold-minion, gli HP scalano più di quanto faccia il gold. Sempre R sul cannon se nessun champion è in range di execute.
- **Usare Q come poke senza follow-up.** Q ha un windup di 0,65s; contro un bersaglio che si muove devi anticipare di circa mezza lunghezza-champion. Se non puoi seguire con W o un'auto, conserva Q per engage o peel.
- **Avvicinarsi al last-hit senza spacing.** Cho'Gath ha 125 base movement speed e niente dash. Se stai sopra ai caster minion della wave, vieni all-inato (engaged in modo totale) dai bruiser mobili. Last-hit dal fondo della wave.
- **Spegnere E a metà fight.** Vorpal Spikes è un toggle: resta acceso tra fight finché hai mana. Attivala prima che inizi il fight così le prime 3 auto hanno già l'on-hit pronto.
- **R-snipare un champion a HP pieni.** Feast a HP pieni fa circa 600 true damage al rank max. È significativo ma rinunci al cooldown di 80 secondi e alla chance di permanent-stack su un minion. Conserva R per execute o panic peel.

## Suggerimento avanzato

Cancella il windup della tua auto-attack con **Q** per baitare il Wind Wall di Yasuo o Yone: inizia l'auto, vedi il muro spuntare, poi cast Q sul punto dove stanno camminando. La Q skillshot è una rottura del terreno che viaggia sotto il muro (il muro blocca proiettili, non effetti a terra). Molti champion ranged non riconoscono la differenza tra un auto-cancel e un'ability tenuta — quindi prendi un knock-up gratis su un bersaglio che pensava di essere immune. Stesso trucco contro la **E** di Braum (Unbreakable) e la **W** di Pantheon (frame di blocco di Shield Vault).
