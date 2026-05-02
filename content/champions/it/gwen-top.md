---
title: "Gwen Top: build e guida — Patch 16.9"
slug: "gwen-top"
language: "it"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Guida completa a Gwen top per League of Legends Patch 16.9: starter, build core AP bruiser, matchup chiave, power spike, errori comuni e suggerimento avanzato."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Le auto-attack infliggono danni magici extra basati sull'HP massimo del bersaglio. Gwen recupera HP da una parte del danno fatto ai campioni."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Colpo di forbici a cono fino a 6 tagli. Il cono centrale infligge true damage e riapplica la passive a ogni taglio — abilità anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Crea una zona di nebbia per 4 secondi. I nemici fuori non possono prenderla di mira — solo chi entra nella nebbia può colpirla. Reset difensivo."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash breve che dà attack speed, range d'attacco e on-hit AP per qualche secondo. Cooldown rimborsato in parte se colpisci un campione."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lancia una salva di aghi che rallenta e applica la passive. Si può lanciare fino a 2 volte in più, ogni salva fa più danno della precedente."
      dd_spell_id: "GwenR"
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Camille, Fiora, Rengar) — la stasi di 2.5s copre il cooldown della W e spezza il burst window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro magic CC single-target (pool di Vladimir, R di Lissandra, suppression di Malzahar) — lo scudo blocca un'abilità nemica"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contro matchup di poke ranged (Vayne top, Teemo) — più ability haste e movement speed per chiudere la distanza"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro 4+ tank/bruiser nel team avversario — sostituisce Riftmaker per il burn percentuale dell'HP massimo dal minuto 1"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Sopravvivi all'early lane, completa Riftmaker intorno al minuto 18, poi splitpush in side lane forzando 2 nemici a fermarti. In teamfight sciogli la frontline con il true damage on-hit di Q."
  weakness: "Early debole (poco burst, niente waveclear ranged). Hard counter da ranged top, da chi fa true damage scalando meglio (Fiora) e da catene di CC point-and-click che bloccano l'attivazione di W."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision come primario: Conqueror stacka durante i trade lunghi di Q + auto, dando danno adattivo e healing. Triumph premia le multi-kill, Legend: Alacrity potenzia la finestra on-hit di E, Last Stand aggiunge danno sotto soglia HP."
    secondary_rationale: "Resolve come secondario: Second Wind rigenera HP dopo l'harass ranged (chiave contro top a distanza), Overgrowth scala HP grezzo nel late game dove i fight dentro la W di Gwen brillano."
    secondary_alternative: "Contro matchup heavy AP senza poke, swap Resolve in Sorcery con Manaflow Band (sustain mana per spammare Q) e Transcendence (più ability haste per più refund di E)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Bruiser melee lenti senza poke ranged"
      reason: "Q applica true damage in percentuale dell'HP massimo, ignora l'armor. Un 1v1 lungo dentro la W mist scioglie i fighter melee tanky che non possono kitare o disengage."
    - examples: ["malphite", "shen", "ornn", "cho-gath"]
      archetype: "Tank che scalano sulle resistenze"
      reason: "Q true damage e on-hit AP da E ignorano sia armor sia magic resist. I tank stackano difese che lei bypassa completamente."
    - examples: ["irelia", "jax"]
      archetype: "Fighter che dipendono dagli item"
      reason: "Le loro power spike arrivano al secondo-terzo item intorno al minuto 25. Gwen completa Riftmaker prima e snowballa la side lane prima che loro raggiungano il core."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "Outscaler con true damage o early forte"
      reason: "I Vital di Fiora fanno true damage e i suoi dash di Q ignorano il range della W mist. Riven outdamaga Gwen ai livelli 1-3 prima che la passive entri in stack."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Top ranged che kitano dalla distanza auto"
      reason: "Gwen serve range melee per applicare on-hit AP e il true damage di Q. I kiter ranged interrompono l'engage e non concedono mai un trade pulito."
    - examples: ["malphite", "pantheon"]
      archetype: "Engage point-and-click con stun"
      reason: "Le loro catene di CC bloccano Gwen prima che possa attivare W. Stunnata a metà dash, mangia tutta la combo nemica prima che la mist scenda."
---

## Panoramica

Gwen è un AP bruiser — un campione melee che scala su Ability Power (la stat AP) invece che sull'Attack Damage e che resiste qualche colpo da vicino invece di bruciare il target da distanza. È anche una skirmisher: vince i duelli prolungati, non killa il bersaglio in due secondi come farebbe un assassin. Il suo kit le fa sciogliere i tank con il **true damage** (danno che ignora sia armor sia magic resist), recuperare HP durante i fight grazie alla passive, e riposizionarsi con un dash che si rimborsa in parte. Vive in side lane e nei 1v1.

Il game plan è: sopravvivi ai primi 10 minuti senza dare kill, completa il primo item importante intorno al minuto 12-14, poi splitpush — spingi una side lane da sola per costringere il team avversario a mandare 2 giocatori a fermarti. Intorno al minuto 25 con 3 item puoi entrare nei teamfight e concatenare auto-attack (basic attack, "AA") sulla frontline avversaria — i tank/bruiser davanti al loro team — finché non si sciolgono.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** nei matchup contro top ranged o con tanto poke (chip damage continuo da distanza). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** nei matchup melee più rilassati, quando vuoi iniziare a scalare AP da subito.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — la tua spike grossa. Dopo 2 secondi in combat, parte del tuo danno si converte in true damage (passive "Void Corruption") e ottieni "omnivamp" (recuperi HP da una porzione di qualsiasi danno tu faccia, sia abilità sia auto-attack). Si lega al playstyle dei fight lunghi di Gwen meglio di qualsiasi altro item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat che fa entrare di più il tuo danno contro i bersagli squishy (campioni con poche difese, di solito le carry avversarie).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed più AP più una passive che aggiunge danno magico bonus a ogni auto-attack. Combinato con **E** (la finestra on-hit di Skip 'n Slash, dove ogni auto-attack applica anche danno magico basato su AP) diventi una torretta DPS continua nei fight lunghi.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplica il tuo AP totale. L'item di scaling late game che ti trasforma da "DPS tanky" in carry vero.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver (campioni che si tuffano sulla backline avversaria per uccidere le carry) e assassin (Camille, Fiora, Rengar). L'attivo ti dà 2.5 secondi di stasi (diventi intoccabile ma non puoi agire), abbastanza per spezzare il loro burst window — quei 1-2 secondi in cui provano a deletarti.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC ("crowd control": stun, root, charm — qualsiasi cosa che blocchi il tuo champion) single-target. Pool di Vladimir + ult, **R** di Lissandra, suppression di Malzahar. Lo scudo blocca completamente una abilità nemica.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contro matchup di poke ranged (Vayne, Teemo). Più ability haste (cooldown più veloci) e movement speed ti aiutano a raggiungerli davvero.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contro team con 4+ tank/bruiser. Sostituisce Riftmaker come primo item quando ti serve burn percentuale dell'HP massimo dal minuto 1 di ogni fight.

**Boots:** Sorcerer's Shoes è il default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se il team avversario ha 3+ minacce AD (Attack Damage) inclusa la jungle. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro composizioni con tanto CC (3+ stun o knockup).

**Skill order:** Maxa **Q** per prima (true damage + scaling AP), maxa **E** per seconda (cooldown e danno), tieni **W** per ultima. **R** ai livelli 6, 11, 16. Priorità al livello 1: **Q** per i last-hit (uccidere i minion); livello 2 prendi **E** per il dash; livello 3 prendi **W** per la sicurezza.

**Runes:** Primaria **Precision** con **Conqueror** (keystone che stacka durante i fight lunghi e dà danno adattivo + healing), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaria **Resolve** con **Second Wind** e **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchup chiave

- **Fiora:** Matchup duro. Anche la sua **Q** fa true damage sui suoi "Vital" — i quattro punti luminosi attorno al tuo champion che, colpiti dalla sua **Q**, fanno scattare il true damage. La sua **R** rimuove qualsiasi cleanse (un effetto che spezza il CC su di te). Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, salva **W** per il momento in cui parte la sua **R**, e non tradare auto-attack al livello 1-2 (un "trade" = scambio breve di colpi in cui entrambi entrate, vi colpite e poi tornate indietro); lei outscala la maggior parte dei bruiser melee in 1v1 puro.
- **Camille:** Pari o sfavorevole. Il suo hookshot (**E**, un rampino a lungo raggio che la fa volare addosso a te) bypassa la tua **W** mist — può fare engage da fuori il range di protezione della nebbia ("engage" = il momento in cui un campione si committa per iniziare un fight). Tieni **W** per il momento dopo che atterra l'hookshot, ed esci solo quando la sua **W** (cono true damage sulla auto potenziata) è in cooldown.
- **Sett:** Favorevole. Anche lui bruiser ma non ha risposte al **Q** percentuale-HP true damage nei trade lunghi. Salta l'all-in iniziale (il fight ai livelli 1-3 in cui qualcuno si committa alla kill), scala fino a ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, poi 1v1 in side lane.
- **Darius:** Pari. Evita il range della sua **E** pull; cammina avanti solo dentro la **W** mist. Usa **E** per disengage (= rompere il fight per uscire) quando i suoi stack di passive bleed arrivano a 4 — la sua passive applica un'emorragia damage-over-time alle auto-attack, e il quinto stack è quello potenziato che attiva il suo bonus damage.
- **Teemo:** Sfavorevole. Le sue auto-attack ranged ti consumano fuori dalla **W**, e la sua **Q** ti accieca le auto (la fonte principale del tuo danno). Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, chiedi al jungler un gank early (una visita a sorpresa del jungler per aiutarti a chiudere una kill), e gioca per scalare — la lane non la vinci.

## Power spike & condizioni di vittoria

- **Livello 6:** Si sblocca la prima **R**. La salva di aghi applica il danno magico percentuale-HP della passive a ogni campione colpito, e lo slow concatena le tue auto-attack (continui a colpire mentre sono rallentati). Forza un fight con il jungler intorno al minuto 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** Spike di omnivamp + true damage. Ora puoi fare 1v1 con la maggior parte dei top laner e splitpushare una side lane finché non mandano due nemici a fermarti.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completata (~ minuto 26-28):** Spike DPS. Con **E** attivo le tue auto-attack vanno molto più veloci e applicano on-hit AP — il momento di entrare nei teamfight invece di solo splitpush.
- **3 item + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 32+):** Fase carry. Le tue auto-attack staccano il 25%+ dell'HP per colpo sulla frontline avversaria. Ogni teamfight in cui il tuo team ti protegge ("peela" i nemici da te) finisce in vittoria.

## Errori comuni

- **Stare dentro la W troppo a lungo.** Hallowed Mist è una finestra di 4 secondi, non uno scudo permanente. Attivala nel momento esatto in cui il nemico si committa con un CC duro (uno stun o un root); attivare **W** in anticipo brucia il cooldown e ti lascia esposta per i prossimi 18-22 secondi.
- **Q sulla wave per pokare.** Il costo mana della **Q** è alto e il cono ha range corto (450 unità). Salva **Q** per i momenti in cui puoi colpire un campione al centro del cono (la zona true damage), non per chip damage sui minion.
- **Tirare E in avanti a HP pieno.** La tua **E** è sia engage sia tasto panico. Se la sprechi in avanti a HP pieno e poi sbuca il jungler avversario, non hai un secondo dash per scappare.
- **Auto-attaccare fuori range della R.** Quando **R** è up, hai 3 salve di aghi totali. Resta entro 1000 unità dal bordo del fight per poter sempre rilanciare **R** su un bersaglio basso di HP invece di correre dentro la morte.
- **Comprare ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads senza CC.** Default è Sorcerer's Shoes; passa ai Mercury's solo con 3+ minacce hard CC o un mid AP fed. I boot difensivi ti costano ~20% dell'output di danno.

## Suggerimento avanzato

Usa la **W** mist per fintare le skillshot (= abilità che vanno mirate manualmente in linea o ad area, l'opposto di point-and-click): quando un nemico con uno stun o root a lungo raggio (Lissandra **E**, Sett **W**, Morgana **Q**) sta caricando l'abilità, lascia cadere **W** sul bordo del suo range di lancio e camminaci dentro. La nebbia ti rende non bersagliabile da fuori — spesso si mangiano la cast e tu ottieni 4 secondi di auto-attack senza CC. Il trucco è temparla sull'animazione di wind-up (il frame di caricamento prima che parta la spell), non dopo che si sono già committati.
