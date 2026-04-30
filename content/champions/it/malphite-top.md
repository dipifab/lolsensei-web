---
title: "Malphite Top Build & Guida — Patch 16.9"
slug: "malphite-top"
language: "it"
patch: "16.9"
champion: "malphite"
role: "top"
last_updated: "2026-04-29"
description: "Guida Malphite top lane per League of Legends Patch 16.9: build tank, matchup chiave, power spike sulla R, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Malphite"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Granite Shield"
      description: "Scudo out-of-combat fino al 10% degli HP massimi. Si ricarica dopo qualche secondo senza ricevere danno."
      dd_spell_id: "Malphite_Passive"
    - key: "Q"
      name: "Seismic Shard"
      description: "Colpo targettato che infligge danno magico e rallenta. Malphite ruba la stessa percentuale come Move Speed per la stessa durata."
      dd_spell_id: "MalphiteSeismicShard"
    - key: "W"
      name: "Thunderclap"
      description: "Passiva: Armor bonus (triplicata mentre Granite Shield è attiva). Attiva: prossima auto-attack potenziata con danno bonus e onda d'urto frontale."
      dd_spell_id: "MalphiteObduracy"
    - key: "E"
      name: "Ground Slam"
      description: "AOE attorno a Malphite (area of effect: danno su zona, non su singolo bersaglio). Danno magico che scala con Armor e rallenta l'Attack Speed nemica."
      dd_spell_id: "MalphiteLandslide"
    - key: "R"
      name: "Unstoppable Force"
      description: "Dash unstoppable a lunga gittata. Knock-up nemici nell'area di impatto e infligge danno magico. Non interrompibile."
      dd_spell_id: "MalphiteUFSlash"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3068", name: "Sunfire Aegis" }
    - { dd_id: "3110", name: "Frozen Heart" }
    - { dd_id: "3075", name: "Thornmail" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3084"
      name: "Heartsteel"
      against: "primo item contro lane bruiser/tank pesanti (Sett, Darius, Mundo) quando puoi stackare HP in sicurezza sotto torre"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap stivali contro team avversario AP-heavy (3+ minacce magiche) o catene di hard CC"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "contro team comp che kitano molto, quando ti serve Move Speed extra per chiudere la R da più lontano"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contro carry che impilano critico (Yasuo + Caitlyn, Tryndamere top): taglia il danno da critical strike"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro double-AP comp (due forti damage dealer magici, es. Brand + Syndra) per Magic Resist a strati"
  base_combo: ["R", "W", "AA", "E", "Q"]
  win_condition: "Atterra R su 2+ nemici nel teamfight per aprire l'engage alle tue condizioni; segui con AA potenziata da W ed E per inchiodare la back line mentre il team pulisce."
  weakness: "Nessuna mobilità fuori dalla R — appena l'ult va in cooldown sei un bersaglio lento e prevedibile. Danno true HP percentuale e grievous wounds smontano la stat tank più veloce di quanto tu possa stackare HP."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere", "irelia"]
      archetype: "Carry basati su auto-attack"
      reason: "Ground Slam taglia di molto la loro Attack Speed e Granite Shield si mangia il primo burst. Il loro damage profile si appiattisce mentre tu scali in una frontline che ignora il loro kit."
    - examples: ["jinx", "kog-maw", "vayne"]
      archetype: "Marksman immobili o a corto raggio nel team avversario"
      reason: "Anche se draftti top, la R è un engage hard a lunga gittata che cancella gli ADC (il damage dealer ranged principale di una squadra) senza dash. Una R pulita sulla loro backline chiude il teamfight prima che cominci."
    - examples: ["riven", "camille", "fiora"]
      archetype: "Bruiser snowball senza poke ranged"
      reason: "Devono committare a un all-in melee (scambio totale fino alla kill) per vincere lane; Aftershock più Granite Shield trasformano la loro burst window in un boost di stat tank mentre tu scali alla R spike."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Top laner ranged con strumenti di kite"
      reason: "Ti pokano fuori dal range dell'auto-attack e disengage la R con la loro mobilità (Vayne tumble, Kennen lightning rush, Gnar form swap). Perdi la lane phase prima che la R sia online a livello 6."
    - examples: ["fiora", "trundle"]
      archetype: "Duellanti con true damage HP-percentuale"
      reason: "Il loro kit ignora Armor e Magic Resist — i vital di Fiora fanno danno true, il pillar di Trundle più la W ti smontano le stat tank. Stackare difese non risolve il duello."
    - examples: ["singed", "teemo"]
      archetype: "Anti-melee con poison o proxy"
      reason: "Non ti lasciano mai atterrare un'auto-attack per proccare Thunderclap e ti out-sustainano con i tick di poison. La lane phase diventa mana sprecato prima che la R sblocchi tutto."
---

## Panoramica

Malphite è un tank con una delle ulti di engage più minacciose del gioco. Il suo kit è semplice di proposito: stacca Armor con **Thunderclap (W)** e **Ground Slam (E)**, assorbi il burst con **Granite Shield (P)**, poi lancia una **Unstoppable Force (R)** a lunga gittata per aprire il teamfight alle tue condizioni. Il top gli si addice perché la side lane gli dà spazio per scalare in sicurezza contro i fighter melee mentre la R aspetta di ribaltare le skirmish di metà partita su drago e Rift Herald.

Il piano partita è lineare: sopravvivi alla lane phase early farmando con **E**, arriva al livello 6 e cerca ogni occasione di **R** su 2+ nemici raggruppati a un obiettivo. Lo skill expression non sta nella meccanica ma nel timing: scegliere il momento giusto per spendere la R trasforma un 5v5 in un wombo combo (engage con follow-up totale del team). Lo splitpush (spingere una side lane da soli) non è il piano di Malphite: resta raggruppato col team in modo che la tua R sblocchi il loro danno.

## Build Consigliata

**Item iniziali:** Doran's Shield + 1 Health Potion. Doran's Ring solo se vai sulla rara variant AP burst.

**Item core (nell'ordine):**

1. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Armor early e riduzione danno auto-attack. Boots di default contro avversari AD.
2. ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — HP, Armor e un'aura di danno che aiuta waveclear e trade in lane.
3. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — Armor enorme più Mana per spammare E e un'aura di slow Attack Speed che si stacka con il debuff della tua **E**.
4. ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro carry da auto-attack. Riflette danno e applica grievous wounds (taglia le cure nemiche) on hit.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — Magic Resist, HP e amplificazione di cure/scudi da qualunque fonte (Granite Shield incluso).

**Item situazionali:**

- ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — primo item alternativo contro lane bruiser/tank pesanti quando puoi stackare HP in sicurezza sotto torre.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap boots contro team avversario AP-heavy o catene di hard CC (più stun/root in fila).
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — contro comp che kitano molto, quando ti serve Move Speed extra per chiudere la distanza della R.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contro carry che impilano critico (Yasuo + Caitlyn, Tryndamere): la passiva taglia il danno critico ricevuto.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contro squadre con due forti damage dealer magici (es. Brand + Syndra) per Magic Resist a strati.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è il default contro lane AD. Swap a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha 3+ minacce AP o hard CC pesante.

**Skill order:** Massimizza **E** per primo (waveclear principale, scala con Armor, slow Attack Speed chiave nei trade), **Q** per secondo (slow più Move Speed personale per engage e fuga), **W** per ultimo (ranghi 1 e 2 danno il miglior return di Armor; l'attiva si usa di solito a rango 1 per l'AA potenziata dopo la **R**). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock** (resistenze extra quando R-engaggi), **Bone Plating** (mangia 3 colpi brevi per cooldown), **Conditioning** (Armor e Magic Resist scaling late-game), **Overgrowth** (HP scaling — vantaggio crescente, il tipo di lead late-game che cresce kill dopo kill, qui sotto forma di HP puri). Secondario **Precision** con **Triumph** (HP indietro su takedown) e **Coup de Grace** (danno bonus su target a basse HP, utile per il cleanup post-R).

Esiste una variant di nicchia AP-burst: ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** → ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** → ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** → ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, con keystone **Electrocute** al posto di **Aftershock**. Richiede molto più skill perché rinunci alle stat tank — usala solo se la tua squadra ha già due tank in front line.

## Matchup chiave

- **Darius:** Stai fuori dal bordo della sua **Q** per i primi 4 livelli e farma con **E**. Il suo all-in (scambio totale fino alla kill) è brutale pre-6 — aspetta ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** prima di rispondere ai trade. Dopo il livello 6 la tua **R** batte il range della sua **E** di pull.
- **Vayne:** Hard counterpick. Ti kita (si muove all'indietro mentre attacca, mantenendo distanza) tutta la lane phase. Stacka subito ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, chiedi pressione di gank al jungler dal livello 3 e raggruppati col team dopo il primo back — splitpush solitario contro di lei non funziona.
- **Camille:** Matchup pari. Bait la sua **E** standoti vicino alla wave; quando manca il secondo cast, all-in con **R-W-AA-E-Q**. Non engaggiare con R mentre il suo scudo da **W** è attivo.
- **Sett:** Sopravvivibile. Lo slow Attack Speed di **E** neutralizza il suo burst da auto-attack (il pugno destro grosso conta sul colpire veloce). Tienilo sotto il 50% HP con cautela: la sua **R** infligge true damage (danno che ignora Armor e Magic Resist) e scala sull'HP mancante, quindi stackare ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** per amplificare le cure non ti salva dalla finestra di execute.
- **Renekton:** Early game duro. Ti bullizza fuori dai CS fino al livello 5-6. Parti con Doran's Shield + 1 Potion, massimizza **E** in sicurezza sotto torre, recall sui primi componenti di ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis**. Una volta livello 6 e ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** in tasca, il matchup si ribalta.

## Power spike & condizioni di vittoria

- **Livello 6:** **Unstoppable Force** sblocca tutto. Da qui in poi, ogni skirmish in river o spawn di drago è un potenziale R-engage. Cammina nella fog of war (la parte non wardata della mappa) lato river e cerca un flash-R pickoff (eliminare un nemico isolato fuori posizione).
- **![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) Sunfire Aegis completo (~ minuto 12-14):** Puoi assorbire danno minion, fare dive sotto torre con R e sopravvivere a 2-3 colpi di torre. Primo grande power spike per i teamfight.
- **2 item tank + boots (~ minuto 22-25):** Picco mid-game. Aftershock più 2 item resist più Granite Shield trasformano la tua R-engage in una finestra di sopravvivenza garantita — anche tuffandoti 1v3 di solito vivi per scappare.
- **Late game (3-4 item, ~ 30+ minuti):** Frontline puramente di utility. Non porterai danno; il tuo valore è inchiodare 2+ nemici con la R mentre i tuoi carry puliscono il fight.

## Errori comuni

- **Splitpush solitario in side lane.** Splitpush significa spingere una side lane da soli per costringere l'avversario a rispondere. Malphite non ha escape fuori dalla R, e una volta bruciata in un 1v1 la tua squadra è in 4v5 nel fight principale. Resta raggruppato.
- **R-flash su un singolo squishy.** Spendere la R su un solo target è una perdita di tempo quando potresti colpirne 2-3 con il giusto posizionamento. Aspetta che il team avversario si raggruppi su un obiettivo; se vedi solo un target isolato, conserva la R per il payoff più grosso.
- **Massimizzare W per primo.** I novizi vedono "passiva di Armor sulla W" e la massimizzano per tankare. La **E** scala più forte con Armor, dà più danno AOE e slow Attack Speed più ampio, ed è la tua vera waveclear. Sempre E first.
- **Non usare Granite Shield nei trade in lane.** **Granite Shield (P)** si ricarica fuori combattimento — apri ogni trade con lo scudo carico. Camminare dentro l'harass con lo scudo già rotto significa sprecare il 10% di HP effettivi.
- **Usare R come escape.** La R è unstoppable ma costa 100 secondi di cooldown. Tenerla come pulsante di fuga trasforma una R difensiva in una R morta. Usa la R per engaggiare alle tue condizioni; per scappare, lo steal di Move Speed della **Q** è la risposta.

## Suggerimento avanzato

Allena il combo **R-flash**: lancia prima la **R**, poi **Flash** a metà dash. Il flash retargetta il dash dove si sposta il cursore, il che ti permette di atterrare la **R** su nemici che si credevano al sicuro dietro un muro o in fog of war. Combinato con un control ward nella jungle avversaria, trasforma un teamfight 50/50 in un engage garantito su un target di backline — la giocata di impatto più alto che Malphite ha in tutto il kit.
