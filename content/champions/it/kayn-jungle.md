---
title: "Guida Kayn Jungle Build — Patch 16.9"
slug: "kayn-jungle"
language: "it"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Kayn jungle per League of Legends Patch 16.9: scelta tra forma Rhaast e Shadow Assassin, jungle clear, gank timing, matchup chiave e power spike."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Colpire nemici riempie orbs di due colori: rossi da fighter melee, blu da ranged/mage. Riempire una barra al 100% trasforma Kayn al livello 6 in Rhaast (rosso) o Shadow Assassin (blu)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Dash corto che colpisce i nemici lungo il percorso, poi una slash AOE. Mobilità principale e tool di waveclear. La slash di Rhaast infligge danno % HP massimo."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Slow lineare a lungo raggio. La versione Rhaast knock-up i nemici. La versione Shadow Assassin si lancia in movimento e ha range maggiore."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Cammina attraverso i muri con bonus move speed e una piccola heal entrando in terreno. Shadow Assassin ottiene durata maggiore, slow immunity, cooldown ridotto."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Si nasconde dentro un campione marcato (mark applicato per 3.15s dopo che gli infliggi danno) per qualche secondo, poi esce con burst enorme. Ti rende untargetable: utile per dodgiare CC."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro composizioni che kitano con più carry ranged — l'active rallenta e lascia Rhaast in mischia dopo E + Q"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro doppio AD (es. Yasuo + Caitlyn) — il bleed spalma il burst fisico ricevuto e ti dà tempo di reagire"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst magico ability-based (Syndra, Veigar, Annie) — dà MR e uno scudo di salvataggio sotto soglia HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin contro CC single-target (Morgana Q, Ashe R) — lo spellshield blocca l'hook prima del tuo engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin contro target con armor (Tabi tank, Bramble Vest) — armor pen più slow on-damage per chase"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast contro stack di armor (Sion, Malphite) — sbriciola armor a ogni colpo e regala HP per la mischia"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Sopravvivi fino al livello 6 per trasformarti: Rhaast contro tank della frontline, Shadow Assassin contro carry squishy in backline. Punisci i timing del jungler nemico e snowballa con pick di R."
  weakness: "Kayn pre-trasformazione (livelli 1-5) è tra i jungler più deboli: clear lento, niente sustain, facile da invadere. Se vai indietro prima di trasformarti, lo scaling crolla e non contribuisci a nulla."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Bruiser melee tanky e juggernaut frontline"
      reason: "Il danno % HP della Q di Rhaast e il knock-up della W stracciano i target con HP alti che altri assassini fanno fatica a uccidere, e riempi gli orb rossi naturalmente fightando contro di loro."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Carry ranged immobili (ADC senza dash)"
      reason: "La R di Shadow Assassin ti fa apparire dentro la loro posizione e li bursti attraverso la frontline — non hanno tool per dodgiare il channel mentre sei untargetable."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Support enchanter squishy"
      reason: "Shadow Assassin li one-shotta in 1-2 ability passando da un muro con E, rimuovendo peel e disengage del team prima ancora che il fight inizi."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Jungler early-game forti con pressione di invade"
      reason: "Minacciano Kayn ai primi tre camp prima che si trasformi. Un invade riuscito al livello 2-3 rovina lo scaling perché non puoi difendere la jungle senza un clear forte."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Tank con CC duro point-and-click"
      reason: "Il taunt Q di Rammus o la R di Malphite catturano Kayn fuori da E e gli tolgono la combo. Anche l'untargetable della R di Shadow Assassin non salva se sei stunato prima."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Jungler con dueling forte e tool da counter-gank"
      reason: "Battono Kayn 1v1 nella sua fase early debole e possono invaderlo prima della form. Se ti campano la jungle, non puoi rispondere fino al livello 6."
---

## Panoramica

Kayn è un jungler melee assassin/fighter con una meccanica di trasformazione unica: al livello 6 diventa **Rhaast** (forma rossa, hybrid bruiser che si cura dal danno delle ability ed eccelle contro tank melee) o **Shadow Assassin** (forma blu, AD assassin che cancella i carry squishy — "squishy" significa campioni ad alto danno e poche difese, tipo gli ADC). La forma dipende da quali "orb" hai riempito durante l'early game — fighta nemici melee/fighter per riempire gli orb rossi, fighta ranged/mage per riempire i blu. La prima barra che arriva al 100% blocca la forma.

Il tuo game plan ha due fasi. **Pre-trasformazione (livelli 1-5)** sei debole: clear con **Q** + **W** in modo efficiente, evita skirmish (piccoli scontri 2v2 o 3v3, non teamfight pieni) che puoi perdere e prova a power-farmare fino al 6. **Post-trasformazione** diventi una vera minaccia: Rhaast cerca fight prolungati e si tuffa sui frontliner, Shadow Assassin cerca pick di **R** (dive = saltare addosso a un nemico isolato sotto torre o in spazio aperto per ucciderlo) sui carry isolati prima che il team si raggruppi.

## Build Consigliata

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper dà tenacity (resistenza al crowd control) nei fight per gli obiettivi, di cui Kayn ha bisogno in entrambe le forme. Prendi ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** se hai deciso di andare Shadow Assassin e vuoi move speed per i pick.

**Core items (in ordine):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primo item di Rhaast. AD, attack speed, active che rallenta. Si lega bene con il dash della **Q** per restare addosso ai carry che kitano (kite = muoversi all'indietro mentre attacchi per mantenere distanza dai melee).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots di default contro qualsiasi team con stun o root. Cambia in ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro pesante danno auto-attack (due AD carry).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, scudo di salvataggio (HP-threshold passive: scudo che si attiva quando i tuoi HP scendono sotto una soglia). Obbligatorio su Rhaast per sopravvivere ai fight lunghi che vuoi iniziare.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — caposaldo Rhaast. AD, armor, ability haste, ed effetto bleed (danno spalmato in più secondi invece che istantaneo). Migliore contro squadre con due forti damage dealer fisici.

**Core path Shadow Assassin** (sostituisce gli item 1, 3, 4 sopra):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — primo item di lethality (armor pen flat che scala in giù contro target ad alto armor) per Shadow Assassin. AD, lethality, ability haste, e un'attiva ad area che aiuta nel clear E rifinisce target già danneggiati dall'**R**.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst e active che dà move speed per pick attraverso la mappa.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive di execute che finisce target sotto il 5% HP, perfetto dopo il burst della **R**.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst magico ability-based (Syndra, Veigar, Annie). Dà magic resist e scudo di salvataggio sotto soglia HP.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin contro CC single-target (Morgana Q, Ashe R). Lo spellshield (passive che blocca la prossima ability nemica) salva il tuo engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin contro stack di armor (Tabi tank, Bramble Vest). Armor pen più slow quando li danneggi.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast contro Sion, Malphite, o qualsiasi frontline che stacka armor. Sbriciola armor a ogni colpo e dà bonus HP.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contro pesante poke da una backline magica (Xerath, Vel'Koz). Tanto HP più scudo magico che si rigenera fuori combat.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** è il default per la tenacity (durata ridotta di stun e slow). Cambia in ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro due AD carry.

**Skill order:** Maxa **Q** per prima (reset sui camp jungle e danno principale). Maxa **E** per seconda (cooldown ridotto per riposizionarti e wall play). Maxa **W** per ultima. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primario **Precision** con **Conqueror** (stacka adaptive force nei fight prolungati, ottimo per Rhaast), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Secondario **Domination** con **Sudden Impact** e **Relentless Hunter**. Per Shadow Assassin one-shot, **Hail of Blades** in Domination è l'alternativa.

## Matchup chiave

- **Lee Sin / Elise:** Bullies dell'early game. Inizia dal lato top se il tuo top laner ha CC per aiutarti (un counter-gank), e piazza ward agli ingressi di raptor/red al minuto 1:30. NON contestare lo Scuttle Crab di river se il tuo top non sta arrivando con te — perdi l'1v1 prima della form.
- **Sett / Darius (top):** Target di feed gratis per Rhaast se ganki top. Il loro kit li forza in melee, riempiendoti gli orb rossi velocemente. Aspetta che usino la loro ability principale (W di Sett, pull di Darius) ed engaggia con **E** attraverso muro + **Q** + **W** knock-up se sei Rhaast.
- **Vayne / Caitlyn (bot):** Target prioritari per Shadow Assassin. Non hanno dash per dodgiare la **R**, e riempiono gli orb blu perché fightano da distanza. Dopo la form, ganka bot lane on cooldown.
- **Malphite / Rammus (counter top jungle):** Il loro CC duro point-and-click ti chiude fuori dalla combo. Compra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** presto e non engaggiare mai senza il CC del tuo support pronto prima.
- **Yuumi / Lulu (support nemico):** Target gratis per Shadow Assassin nei teamfight late-game. **R** su di loro da una posizione di flank appena si staccano dal carry — non hanno peel per loro stessi.

## Power spike & condizioni di vittoria

- **Livello 6 + trasformazione:** Questo è lo spike (lo "spike" è il momento in cui il tuo campione diventa molto più forte grazie a un livello o un item). Prima della trasformazione sei sotto la media; dopo, sei un top-3 jungler. Tempa la prima big play (un gank o un pick di **R**) il secondo in cui ti trasformi, mentre il team nemico ti pensa ancora debole.
- **Controllo Crab (minuto 3:15 e minuto 6:00):** Il Crab dà esperienza e vision. Da Kayn pre-form non puoi duellare per esso; porta top o mid laner a contestare, oppure cedilo pulito e farma camp invece di morire.
- **Primo Drake fight (minuto 6-9):** Kayn pre-form è scarso nei brawl 5v5. Se il tuo team può prendere Drake senza di te, accordatevi su un trade di Voidgrubs (i piccoli vermi nel river top che danno una passive a chi li finisce) sul lato opposto e farma la tua jungle mentre loro fightano.
- **Primo item completato (~ minuto 13-15):** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** per Rhaast o ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** per Shadow Assassin: qui il tuo conversion rate dei gank passa da "richiede setup perfetto" a "kill anche solo con un flash dal laner."
- **Tre item Shadow Assassin (~ minuto 22-25):** Con ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online, la combo di **R** one-shotta qualsiasi squishy sotto il 5% HP. Forza pickoff (kill su target isolati) prima dei fight per gli obiettivi.

## Errori comuni

- **Lockare la forma sbagliata.** Non auto-pickare Shadow Assassin ogni game. Guarda il team nemico: 3+ tank/bruiser = Rhaast. 2+ carry squishy senza dash = Shadow Assassin. Riempire gli orb sbagliati è colpa tua: fighta i nemici giusti finché la barra giusta non si blocca.
- **Gankare prima del livello 6.** I gank di Kayn pre-form fanno quasi zero danno. A meno che il laner nemico sia sotto il 30% HP o hard-CC-locked, il tuo gank è solo tempo sprecato che dovresti spendere a farmare. Ganka solo su setup di overkill (un Flash + ulti del laner sicura) finché non ti trasformi.
- **Usare R difensivamente senza un'uscita.** **Umbral Trespass** ti rende untargetable mentre sei dentro il nemico, ma esci nello stesso punto da cui hai castato. Se ulti dentro un fight 5v5 per dodgiare CC e il tuo team non sta vincendo, esci nella stessa morte che cercavi di evitare. Usa la **R** quando puoi finire il kill o quando i compagni stanno arrivando, non come Flash di panico.
- **Wallare con E dentro al team nemico.** I wall-walk di **Shadow Step** sono fighi ma il cooldown è lungo. Engaggiare attraverso un muro senza una via di fuga dietro ti committa totalmente. Non andare all-in (impegnarti totalmente nel fight senza ritirata) attraverso un muro a meno che la **R** non sia pronta e tu abbia un target chiaro.
- **Ignorare i fight per orb rossi da Rhaast.** Se hai deciso Rhaast, ogni fight contro un target melee riempie la barra più veloce. Non scappare da uno skirmish col top laner: tuffati, riempi la barra, e forza la form al minuto 5-6 invece che al minuto 8.

## Suggerimento avanzato

Usa **E** in modo offensivo come tool di vision, non solo come fuga. Camminare nel muro della jungle nemica e aspettare 1.5 secondi dentro il terreno rivela se il loro jungler è dall'altra parte senza committarti — Kayn è invisibile per loro mentre è dentro al muro. Se il camp è preso, sai che il nemico è dal tuo lato della mappa e ruoti indietro. Se il camp è up, puoi attraversare per invadere con combo **Q** + **W** da un angolo che non si aspettano. Questo singolo trick converte Kayn da "scaling jungler" a "information jungler" nel mid-game.
