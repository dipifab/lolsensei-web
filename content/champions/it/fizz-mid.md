---
title: "Fizz Mid Build & Guida — Patch 16.9"
slug: "fizz-mid"
language: "it"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Fizz mid per League of Legends Patch 16.9: build da AP assassin, matchup chiave, power spike, errori comuni e un tip avanzato sul timing dell'E."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Cammina attraverso le unità (i minion non lo bloccano) e subisce una riduzione fissa di danno da ogni fonte. Aiuta a disengage tagliando attraverso la propria wave."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Dash a target su 550 di gittata. Infligge danno magico e applica gli effetti on-hit (passive di item che si attivano ad ogni auto-attack, come la spellblade di Lich Bane). Gap-close principale, cooldown corto."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Passiva: le tue auto-attack fanno sanguinare i nemici per danno magico in 3 secondi. Attiva: potenzia la prossima auto per danno magico bonus. Uccidere un bersaglio con W attiva resetta il cooldown a 1 secondo."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Salta sul tridente: 0.75s untargettabile, poi schianti a terra per danno magico AOE e uno slow. Rilancia per fare un secondo dash invece dello slam (niente slow, area minore). Unica escape e cuore del combo."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Skillshot lineare a lunga gittata (1300). Si attacca al primo champion colpito, lo rallenta, poi un pesce-squalo erutta lanciando il bersaglio in aria (knock-up). Danno e slow scalano con la distanza percorsa dal pesce."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primo item alternativo contro comp da poke ranged dove serve un altro dash per arrivare alla back line"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro CC pesante a catena (Lissandra R, Rell ult): la stasi lascia detonare la R fish prima che muoia"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Annie stun, Twisted Fate gold card, Malzahar suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario compra un item di magic resist"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Trova squishy isolati in side lane dopo Lich Bane completion. Lancia R fish da max range, poi Q + W + AA spellblade per cancellarli. Roama con la wave dalla parte avversaria."
  weakness: "Squishy melee con un solo ciclo di engage. Se E o R sono in cooldown non hai escape né secondo commit; il CC focalizzato chiude il combo prima che la R fish atterri."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Mage immobili senza dash"
      reason: "La Q di Fizz li dasha d'istinto e la E gli regala 0.75s di untargettabilità per schivare la spell chiave. Senza un dash di escape non possono rispondere all'all-in una volta che la R fish si attacca."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Artillery a lunga gittata senza mobilità"
      reason: "La R fish arriva a 1300 unità: punisce il posizionamento a max range. Una volta che Fizz committa con Q + E loro non hanno un dash per riazzerare la distanza e devono assorbire l'intera burst window."
    - examples: ["annie", "syndra"]
      archetype: "Mage close-range con engage telegrafato"
      reason: "Il loro burst richiede di camminare avanti con un tell lento (lo stun-buffer di Annie, il setup E di Syndra). Fizz E nella cast window lo rende untargettabile e il combo va a vuoto."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Mid tanky con engage hard"
      reason: "Le loro resistenze tagliano il burst a metà (la W di Galio riduce ~50% del danno magico, la passiva-shield di Malphite blocca il proc di W). Entrambi hanno engage forte a 6 che punisce Fizz quando committa per primo."
    - examples: ["lissandra", "malzahar"]
      archetype: "Mage con CC point-and-click"
      reason: "La R di Lissandra è stasi point-and-click (niente skillshot da schivare con E), la R di Malzahar suppressa attraverso il recast di E. Entrambe puliscono la wave, quindi Fizz non può zonarle in lane."
    - examples: ["pantheon", "talon"]
      archetype: "Bullies di lane early-game"
      reason: "Out-tradano Fizz ai livelli 1-3 prima che arrivi al power spike di livello 6. Lo stun di Pantheon W e la Q scudata pokano ogni passo avanti; la Q di Talon ha la stessa range con costo mana inferiore."
---

## Panoramica

Fizz è un AP assassin melee che vive o muore sul timing della **Playful / Trickster (E)**. Il suo kit è corto raggio, alto burst (danno pesante concentrato in 1-2 secondi invece che spalmato nel tempo), e scivoloso: una finestra di 0.75 secondi in cui non può essere bersagliato, un dash a cooldown basso e una ult-pesce a lunga gittata che blocca un target prioritario. Il mid gli si adatta perché il river è corto — può engage da livello 6 con **Q-E** dentro **R**, schivare il counter-CC a metà combo e poi uscire con il recast di **E**.

Il piano partita è sopravvivere in lane fino al power spike a due item (Lich Bane + Sorcerer's Shoes), poi cercare pick (eliminare un nemico isolato fuori dal teamfight) sui squishy (champion con HP basso e niente difese: muoiono in fretta sotto burst) in side lane. Lui stesso è squishy, non ha waveclear e l'unica escape (**E**) parte da un cooldown di 16 secondi a rank 1 — buttarla via senza valore lo punisce duro. Per questo Fizz preferisce target singoli da cancellare ai teamfight 5v5, dove il CC focalizzato gli chiude il combo prima che la R fish atterri.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** invece contro matchup di poke ranged pesante (harass a distanza che logora HP) come Xerath o Vel'Koz.

**Item core (in ordine):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — il tuo power spike principale (il momento in cui il tuo danno fa un salto di categoria e puoi iniziare a combattere da posizione di forza). Sinergia col pattern Q-AA: ogni **Q** triggera l'effetto spellblade sull'auto-attack successivo, quasi raddoppiando il burst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa per i target squishy che vuoi cancellare.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra più una HP-threshold passive (passiva di un item che si attiva solo quando il nemico è sotto ~35% HP) che combacia con l'execute della R fish.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling late-game. Lo slot AP più alto e l'item che trasforma i squishy in bersagli da one-shot.

**Item situazionali:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primo item alternativo se ti serve un altro gap-close (modo per coprire la distanza fino al nemico) per raggiungere una back line ranged che la sola **Q** non riesce a chiudere.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro lockdown CC pesante (Lissandra R, Rell ult): la stasi fa detonare la R fish prima che tu muoia.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Annie stun, Twisted Fate gold card, Malzahar suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario compra un item di magic resist.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** accettabili quando **E** diventa il cooldown più importante (matchup molto combo-dipendenti).

**Skill order:** Massimizza **E** per prima (untargettabilità + scaling AOE — AOE significa *area of effect*, l'abilità colpisce tutto ciò che sta dentro una zona), **Q** per seconda (cooldown reduction = più dash per fight), **W** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Domination** con **Electrocute**, **Cheap Shot**, **Eyeball Collection**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Scorch**. Electrocute si incastra perfettamente con la finestra a tre colpi Q-AA-W: ogni all-in (commit totale al combo fino alla kill o all'escape) lo procca.

## Matchup chiave

- **Annie:** Engage telegrafato. La passiva di Annie stunna la prossima spell dopo ogni quattro abilità lanciate — vedrai accumularsi quattro piccoli marchi blu attorno a lei. Appena spuntano i quattro marchi sta caricando un all-in. Salta con **E** mentre lancia lo stun: quando atterri, il combo principale è andato e il trade è tuo.
- **Yasuo / Yone:** Il Wind Wall di Yasuo (un muro che blocca le spell ranged che lo attraversano) ferma i proiettili, ma **Q**, **E** e **R** di Fizz non sono proiettili bloccabili. Out-trada (esci dallo scambio in vantaggio) con **W** attiva sulle auto-attack; il loro muro è una meccanica sprecata contro di te.
- **Lissandra:** Hard counter. La sua **W** è un AOE (area of effect — colpisce tutto ciò che sta in una zona) di root point-blank, e la sua **R** è una stasi point-and-click (spell senza skillshot da schivare: lei ti clicca, la spell atterra). Nessuna delle due è uno skillshot (spell non automatica che vola in linea o area, da evitare schivando) da schivare con **E**. Tieni **E** per il cast della sua **W**, mai all-in senza **R** disponibile, e cerca pick sulle side lane invece.
- **Galio:** Stat tank e una passiva di **W** che dimezza il danno magico ricevuto. Smetti di provare a ucciderlo solo; spendi mana per shovare la wave (spingere i tuoi minion fino sotto la torre nemica così non possono camminare liberamente verso di te) e roama (sposta il tuo champion fuori dalla lane per aiutare gli alleati altrove) bot o top appena la **R** è online.
- **Pantheon:** Ti punisce pre-6. Lo stun di **W** e la **Q** scudata out-tradano ai livelli 1-3. Resta dietro alla wave e tradano solo quando la sua **W** è in cooldown. Il matchup si ribalta a 6 quando hai **R**.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **E** + **Q** hai un ciclo garantito dash + slow + danno AOE. Se il nemico avanza per last-hittare un melee minion (dare il colpo finale per prendere oro), **E** sopra di lui e scatena **Q-AA** per un trade vincente (un breve scambio di colpi da cui esci in vantaggio).
- **Livello 6:** La prima **Chum the Waters** sblocca gli all-in. Il combo **R-Q-W-AA-E** cancella qualsiasi mid laner squishy anche con solo i componenti base di Lich Bane comprati. Roama bot lane dopo aver shovato la wave: con i minion spinti dalla parte avversaria, loro perdono più tempo a difendere di quanto tu ne perda a lasciare la lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minuto 11-13):** Spike di burst (il momento in cui il danno fa un salto improvviso). La spellblade Q-AA stacca circa il 40% HP a un squishy in un solo cast. Questa è la finestra in cui devi roamare aggressivo per pick invece di restare in lane a fare 1v1.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Il combo completo one-shotta qualsiasi squishy che non ha comprato neanche un item di magic resist. Forza i fight sugli obiettivi qui; nega la vision (uccidi le ward avversarie così non hanno occhi sulla mappa) sul tuo lato così il nemico non vede il tuo flank (entrare nel fight da un fianco non coperto).

## Errori comuni

- **Usare E prima del loro commit.** **E** è la tua unica escape. Se salti senza prima far baitare il loro CC, mangi la spell appena atterri. Aspetta che lancino l'abilità chiave — *poi* salta.
- **R fish da troppo vicino.** Il danno e l'intensità dello slow scalano con la distanza percorsa dal pesce prima di attaccarsi. Lancialo dalla massima gittata di 1300 così colpisce con danno pieno e lo slow dura tutta la finestra di detonazione.
- **All-in dentro 2+ nemici.** Fizz ha un solo ciclo di engage (commit totale al combo fino alla kill o all'escape). Se un secondo target spunta a metà combo, non hai una seconda R fish, non hai una seconda escape, e crolli sotto il CC focalizzato. Cerca target isolati nelle side lane, non i 5v5 mid.
- **Dimenticare la W in chase.** Uccidere un bersaglio con **W** attiva rifonde mana e abbassa il cooldown a 1 secondo — puoi concatenare un'altra auto-attack potenziata su un secondo bersaglio istantaneamente. Attiva **W** prima del colpo killante quando c'è un target di follow-up vicino.
- **Massimizzare W per prima in lane normali.** **Q** ed **E** portano il danno e il timing del combo; il bleed di **W** è DPS sostenuto che conta nei trade lunghi, non nelle finestre di burst. Default: massimizza **E** per prima.

## Suggerimento avanzato

Pratica il **R-Flash combo** (R + Flash). Lancia il pesce in avanti, poi usa subito **Flash** nella stessa direzione: il pesce atterra molto più lontano dei 1300 unità naturali, dandoti una presa garantita su un bersaglio che si crede fuori range. Usalo per pick attraverso i muri o per aprire fight sugli obiettivi da angoli inaspettati. La finestra cast-to-Flash è corta — bind **Flash** sul tasto secondario (D) per memoria muscolare e ripeti nel practice tool finché il timing diventa automatico.
