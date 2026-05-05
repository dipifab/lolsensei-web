---
title: "Katarina Mid Build & Guida — Patch 16.9"
slug: "katarina-mid"
language: "it"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Guida a Katarina mid lane per League of Legends Patch 16.9: starter kit, build core AP assassin, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Quando un campione nemico danneggiato di recente muore (kill o assist), tutte le abilità di Katarina rinfrescano in modo drastico. Raccogliere un Dagger lancia un colpo AOE."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Dagger a bersaglio che rimbalza sui nemici vicini e poi cade dietro al primo target. Il Dagger a terra è il pivot di tutto il combo."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Lancia un Dagger sopra Katarina che atterra dopo un istante, più una breve raffica di Move Speed. È il Dagger su cui blinki."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink su un campione, minion, ward o Dagger. Raccogliere un Dagger riduce il cooldown di Shunpo. Funziona anche sui ward nemici visibili."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel che lancia coltelli ai 3 campioni più vicini, applicando Grievous Wounds. Cancellata da qualsiasi hard CC. Si usa post-engage, mai pre-engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs target da hard-engage (Malphite R, Zac, Amumu): la stasi annulla l'engage che ti interromperebbe la R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs CC magico single-target che cancella la R (stun di Annie, R di Lissandra, gold card di Twisted Fate)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs squadre con tanto CC (2+ stun/root): rimpiazza Sorcerer's Shoes quando subisci troppo CC per channel R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs squadre con healing pesante (Soraka, Vladimir, Dr. Mundo): Grievous Wounds cappa la cura"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Ottieni una kill o un assist nella laning phase, poi snowball: ogni takedown rinfresca il kit completo via Voracity, quindi una sola kill in lane diventa spesso una doppia sull'onda dopo."
  weakness: "Lo hard CC interrompe la R e trasforma il channel in tempo perso. Senza un takedown che resetta i cooldown è un melee corto con un solo blink: i mage a lungo raggio la castigano gratis."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute proca su ogni catena W-E-Q (3 hit distinti in 3 secondi) per burst gratis. Sudden Impact si attiva subito dopo ogni Shunpo (il blink). Ultimate Hunter taglia secondi a Death Lotus su ogni takedown — e Voracity fa il resto."
    secondary_rationale: "Precision secondary: Triumph cura il 12% di HP mancanti su takedown, così puoi incatenare una seconda kill sul kit che si resetta. Coup de Grace dà +8% danno sotto il 40% HP — la finestra esatta in cui la R chiude il fight."
    secondary_alternative: "Se il team nemico ha tanto poke magico (Xerath, Vel'Koz, Ziggs), swap Precision con Resolve, prendendo Second Wind (regen vs poke) e Overgrowth (HP scaling extra) per arrivare vivo al primo takedown."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Non possono uscire dalla burst window W-E-Q di Katarina. Una volta speso il setup (gabbia di Veigar, gold card di TF, E di Anivia) non hanno risposta a uno Shunpo all-in."
    - examples: ["lux", "orianna"]
      archetype: "Mage a medio raggio senza escape"
      reason: "Entrambe vivono di posizionamento dietro ai minion. Katarina blinka su un Dagger oltre l'onda, le elimina con W-E-Q-AA, poi resetta sulla kill verso il target successivo."
    - examples: ["karthus"]
      archetype: "Scaler farm-heavy senza sustain o hard CC"
      reason: "Karthus ha bisogno di farm tranquillo. La pressione di reset di Katarina lo costringe a bruciare Flash e a saltare lo scaling che è la sua unica win condition."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Mage con hard CC point-and-click"
      reason: "Lo stun è istantaneo e non si schiva: cancella Death Lotus a metà channel e trasforma Katarina in un sacco fermo mentre il team nemico le si butta addosso."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage da artiglieria a lungo raggio"
      reason: "Pokano Katarina fuori dalla sua range di Q (625) per i primi 5 livelli. Arriva al level 6 già al 40% HP, senza reset disponibili, e muore a una sola rotazione di skillshot."
    - examples: ["diana", "pantheon"]
      archetype: "Burst all-in midlaner con engage point-and-click"
      reason: "Il combo Q-R di Diana e lo stun W di Pantheon arrivano prima ancora che Katarina riesca a droppare il Dagger di W. Perde la trade race e i power spike di item."
---

## Panoramica

Katarina è un'assassin AP melee costruita intorno alla sua passiva **Voracity**: ogni takedown (kill o assist) abbatte drasticamente i cooldown di tutte le sue abilità. Quella singola meccanica è l'identità intera del champion — una kill in lane le rinfresca il kit completo, quindi un takedown spesso diventa un doppio sull'onda dopo. La mid lane le si addice perché ha bisogno di rotazioni corte per concatenare i reset attraverso la mappa.

Il game plan si racconta semplice ma si esegue duro. Droppa un Dagger con **W** o usa quello che cade dopo **Q**, blinka sopra con **E** per il danno AOE, poi inizia a tirare auto-attack e usa la **R** quando l'avversario è low HP. Lo skill expression sta in due punti: l'ordine di cast **W-E-Q** (devi droppare il Dagger prima del blink, non dopo) e **quando** lanciare la **R** — pre-engage ti cancella qualsiasi stun, post-engage pulisci un teamfight con catene di reset.

## Build Consigliata

**Starting items:** Doran's Ring + 2 Health Potion. Salta Doran's Shield anche nei matchup ranged: l'AP e il mana regen ti vincono più trade di quanto la HP ti salvi.

**Core items (in ordine):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primo item spike. Aggiunge un secondo dash breve (active) sopra a Shunpo, così engaggi su un target che ha già speso l'escape. AP e HP per sopravvivere al counter-engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Stivali default; passa a Mercury's Treads contro tanto CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike che si allinea perfettamente con la catena W-E-Q. La passiva HP-threshold (si attiva quando porti il nemico sotto una soglia bassa di HP) ti dà il danno extra per finire i target senza dover usare la R.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling late-game. Lo slot più AP del set; il +30% AP la trasforma da "snowball assassin" a "one-shot di qualunque squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration extra che scala con gli HP mancanti del bersaglio. Si stacca splendidamente con Stormsurge e R per finire i target low HP nei fight.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — comprala nel momento esatto in cui un priority target nemico completa un item da Magic Resist.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs target da hard-engage (Malphite R, Zac, Amumu). La stasi cancella l'engage che altrimenti ti interromperebbe il channel di R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs CC magico single-target che cancella la R (stun di Annie, R di Lissandra, gold card di Twisted Fate). Lo scudo mangia un'abilità così il channel sopravvive.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — rimpiazza Sorcerer's Shoes quando il team nemico ha 2+ stun o root che ti cancellano Death Lotus.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs squadre con healing pesante (Soraka mid, Vladimir, Dr. Mundo top). Cappa il sustain nemico così una kill resta una kill.

**Boots:** Sorcerer's Shoes è il default. Mercury's Treads è lo swap quando il team nemico ha hard CC; Ionian Boots of Lucidity è raramente corretto perché Voracity ti regala già i cooldown.

**Skill order:** Maxa **Q** prima (waveclear e damage principale), **W** seconda (il dagger che ancora ogni combo), **E** ultima. Punto in **R** ai level 6, 11, 16.

**Runes:** Primary **Domination** con **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Secondary **Precision** con **Triumph** e **Coup de Grace**. Il keystone (la runa principale in cima alla pagina) si attiva naturalmente sulla catena W-E-Q perché tocchi il bersaglio con 3 istanze di danno separate.

## Matchup chiave

- **Annie:** Il matchup più duro. Lo stun è point-and-click e cancella Death Lotus istantaneamente. Compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** come secondo item se la lane va male. Pre-6 stai dietro all'onda e farma con **Q**; non blinkare mai dentro finché non ha lo stun in cooldown.
- **Lux:** Matchup favorevole una volta arrivata al level 6. Pre-6 la sua **Q** ti supera in range, quindi gioca dietro ai minion e schiva. Dopo il 6, blinka su un dagger di sidewave e fondila — non ha dash per scappare.
- **Zed:** Skill matchup. Ha lo stesso pattern di all-in con più disengage (la sua **R** lo rende untargetable per 0.5s, rompendoti il channel). Tieni la **R** finché non usa la sua; se sopravvivi al combo, resetti sulla kill.
- **Twisted Fate:** Counter-pick netto. Pre-6 lo superi in push; dopo il 6, quando prova a roammare, blinki su un dagger sull'onda e lo elimini perché non ha item difensivi. Tieni d'occhio la sua **R** con ward in mid.
- **Diana:** Hard counter. Il suo combo **Q-R** ti procca prima ancora che la **W** abbia droppato il dagger. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come terzo item; non blinkare mai su di lei sotto torre senza.

## Power spike & condizioni di vittoria

- **Level 2:** Con **Q** ed **E** già puoi tradare. Droppa **Q**, cammina nel range del rimbalzo, blinka **E** sul dagger che cade per il danno AOE, poi esci. Poke gratis se lo fai a cooldown.
- **Level 6:** Prima **Death Lotus**. Con Voracity, una kill o assist resetta il channel e raddoppia il danno negli scontri brevi: i fight pre-6 duravano 4 secondi; post-6, un takedown può estendere un fight a 10s di reset ciclici.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completion (~ minuto 11-13):** Primo item spike importante. L'active dash ti dà un secondo strumento di mobility, così engaggi su un target che ha già bruciato l'escape (Flash, **E** di Lux, **E** di Yasuo). La pressione di roam scatta qui.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~ minuto 18-22):** Il combo W-E-Q-AA adesso one-shotta qualsiasi squishy sotto il 70% HP senza R. Questo è il timing in cui forzi i fight per gli obiettivi e cerchi pick sulle side lane.

## Errori comuni

- **Channel di R pre-engage.** Lo hard CC interrompe Death Lotus e ti spreca il cooldown. Usa la **R** post-engage: dopo l'engage del tank tuo, dopo che il frontline nemico ha bruciato il CC, channeli da una posizione sicura per pulire. Pre-engage la **R** è riservata a finire un target low HP che non può interromperti.
- **Blinkare con E prima di droppare la W.** L'ordine di cast è **W → E → Q**. Il dagger deve essere a terra (o stare per atterrare) quando blinki, altrimenti non lo raccogli e perdi sia il danno AOE della passiva sia il riduzione cooldown su Shunpo.
- **Greedare il reset su un target che non puoi finire.** Se il nemico è al 35% HP ma il compagno gli sta accanto, la kill non triggera Voracity in tempo e tu muori al follow-up. Disengaggia con il Move Speed di **W**, aspetta i cooldown alla vecchia maniera.
- **Sprecare Shunpo sui minion per fare waveclear.** Hai bisogno di **E** come escape difensivo. Pusha le onde con **Q** + auto-attack; blinka su un minion solo se ti committi a un fight o stai scappando.
- **Pickare Katarina contro doppio CC point-and-click.** Se il team nemico ha Annie + Leona, la tua **R** non si risolve mai. O dodgi in champ-select o accetti di giocare sui loro cooldown: blinki dentro solo dopo che hanno bruciato gli stun su qualcun altro.

## Suggerimento avanzato

Usa la **E** sui ward nemici per scappare dai gank. Il blink funziona su ogni ward visibile — incluse le trinket nemiche e i pink piazzati sul tuo lato del fiume. Spotti uno Stealth Ward nel tri-bush prima che arrivi un gank e hai uno strumento di escape gratuito che non compare sulla mappa nemica: la maggior parte degli avversari piazza ward in avanti senza accorgersi di darti un'uscita. Vale anche lo specchio: se vedi un ward nemico vicino alla tua torre mentre torni in base, riposiziona l'inizio del prossimo gank per evitarlo.
