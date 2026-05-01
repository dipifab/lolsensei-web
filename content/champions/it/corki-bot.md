---
title: "Corki Bot: Build e Guida — Patch 16.9"
slug: "corki-bot"
language: "it"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Guida completa di Corki bot lane per League of Legends Patch 16.9: build ADC ibrido, runes, matchup 2v2 chiave, power spike, errori comuni, advanced tip."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Una parte del danno degli auto-attack diventa true damage. DPS costante che ignora armor e magic resist — motivo per cui costruisci attack speed e on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bomba a area che fa danno magico e rivela brevemente i nemici. Serve per last-hit quando sei zonato, per checkare i bush, e per aprire ogni trade in lane."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash breve che lascia una scia di fuoco. È la tua unica mobilità: usalo per fuga, gap-close o per schivare uno skillshot. Non sprecarlo per waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cono channellato davanti a Corki: fa danno e riduce armor e magic resist dei nemici colpiti. Aggiunge DPS sostenuto e ammorbidisce i tank per le R missile."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Missile a lunga gittata che esplode ad area. Accumuli fino a 7 cariche; ogni terza è una Big One con burst extra. Tuo poke principale ed execute."
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro front line con 2+ tank (Sion, Ornn, Maokai): aggiunge armor pen pesante per bucare con DPS sostenuto"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp che stackano healing (Soraka, Aatrox, Vladimir, Dr. Mundo): applica grievous wounds e dimezza il loro heal"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP forti (Brand support, Veigar, Syndra mid): lo scudo magico assorbe una full combo e ti permette di W via"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro ulti single-target che ti lockano (Malzahar R, Skarner R, Mordekaiser R): l'active cleansa la suppression che altrimenti ti deletta"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Sopravvivi al 2v2 fino a due item con poke R e sustain di Q, poi carrya i teamfight late con auto Manamune-stacked e R Big Ones dalla back line."
  weakness: "Squishy con un solo dash. Lane early aggressive (Draven, Lucian + engage support) lo shovano off CS prima di Trinity, e gli ability anti-projectile (Yasuo Wind Wall, Braum E) annullano il poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Fleet Footwork procca sugli auto (che Corki spamma grazie al true damage della passive) dando heal + burst di movimento — il sustain che serve a un 2v2 lungo. Triumph e Coup de Grace chiudono i kill, Legend: Alacrity dà attack speed per DPS sostenuto."
    secondary_rationale: "Inspiration secondary: Magical Footwear ritarda l'acquisto di boots ma ti dà stat altrove prima; Cosmic Insight aggiunge cooldown reduction sui summoner (Flash e Heal più frequenti), che è la leva di sopravvivenza più grossa nel 2v2 bot."
    secondary_alternative: "Contro lane di poke pesante (Caitlyn + Lux, Ezreal + Karma) dove non puoi permetterti il delay di Magical Footwear sui boots, swap Inspiration con Sorcery: Manaflow Band (mana sustain sullo spam di R) e Gathering Storm (AP scaling gratis nel late game su Q e Big One missile)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hypercarry a corto raggio senza fuga"
      reason: "Corki li out-ranga pre-Trinity con poke R a 1225 unità e una W che loro non hanno. Devono restare in last-hit range, e Corki li smonta prima del loro power spike da hyper-carry."
    - examples: ["senna", "ezreal"]
      archetype: "ADC di poke statico"
      reason: "Range pari, ma Corki ha un dash più una Q ad area istantanea mentre il poke di Senna ed Ezreal è single-projectile. Può W su un minion che ha eaten una Q e ritradare senza committare i cooldown."
    - examples: ["sivir", "ashe"]
      archetype: "ADC senza escape point-and-click"
      reason: "Sivir Spell Shield blocca solo una ability — eat la Q e il missile dopo arriva gratis. Ashe non ha dash. Corki snowballa il matchup con repositioning della W che loro non possono rispondere."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "ADC di lethality-burst early-game"
      reason: "Out-tradano Corki nei primi 6 livelli e snowballano sulle kill di lane. Corki non li può duellare prima di Trinity, e ogni W usata aggressiva viene punita dai loro pattern di dash-reset."
    - examples: ["lucian", "tristana"]
      archetype: "Lane multi-dash con auto-trade"
      reason: "La E di Lucian e la W di Tristana entrano ed escono dall'auto range di Corki a piacimento. Lucian inoltre out-scala il true damage della passive con la sua chain auto-Q nei primi livelli, battendolo dritto prima degli item."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blocker (off-meta bot)"
      reason: "Wind Wall mangia la Q e l'intero R missile barrage. Anche se questi champion sono off-meta in bot, il matchup è duro perché due terzi del danno di Corki nel trade evapora."
---

## Panoramica

Corki bot è un marksman ibrido (carry a distanza che mescola danno fisico e magico) che gioca la lane come una mage-carry: fa danno a distanza ("poke") con **Missile Barrage (R)** a 1225 unità, last-hitta i minion (li uccide al colpo finale per oro) e harassa (piccolo danno ripetuto) con **Phosphorus Bomb (Q)**, e una volta che **Trinity Force** più **Manamune** sono completi carrya i teamfight late con auto-attack che fanno una parte come true damage (danno che ignora armor e magic resist) grazie a **Hextech Munitions (P)**. Il ruolo gli si addice perché il support gli compra il tempo iniziale di cui ha bisogno per scalare (diventare più forte mano a mano che gli item arrivano) e può peelare i diver (proteggere il carry da chi gli salta addosso) mentre lui committa il suo unico dash, **Valkyrie (W)**, solo su occasioni reali.

Game plan in una frase: tradare (scambiare brevi raffiche di danno) R + Q da max range per smontare il 2v2 avversario, mai spendere la W senza un follow-up pianificato, e arrivare a un late game dove gli auto Manamune-empowered più le R Big One (ogni terza R missile è più forte) one-shottano (uccidono in una combo) gli squishy alla back line (i carry nemici che stanno lontano dal fight).

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Il lifesteal della blade (una parte del danno inflitto ti torna come heal) si sposa con la passive di auto-attack e regge meglio i trade Q + auto early rispetto alla Doran's Ring per un ADC.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un componente di Trinity) procca (innesca un effetto di danno extra) su ogni Q e ogni R missile, più AD, attack speed, ability haste (riduzione cooldown) e movement speed. Lo spike singolo più grande del champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune si trasforma lentamente in una versione più forte chiamata Muramana mano a mano che spendi mana; una volta "stacked" (completamente trasformato) aggiunge danno bonus su ogni auto e ogni ability che costa mana, missile incluse.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat che si combina con Trinity e con il true damage on-hit della passive. Boot di default per Corki bot.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — il primo auto-attack su un nemico ("auto energized") fa danno bonus e arriva più lontano del normale range. Il crit chance si sposa col profilo statistico di Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed più crit (chance che gli auto facciano danno extra) per DPS sostenuto su **Gatling Gun (E)** e sul true damage on-hit della passive.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro front line con 2+ tank (Sion, Ornn, Maokai): armor pen pesante per bucare con DPS sostenuto.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp che stackano healing (Soraka, Aatrox, Vladimir): applica grievous wounds e dimezza il loro heal.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP forti (Brand support, Syndra mid): lo scudo magico assorbe una full combo e ti permette di W via.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro ulti single-target che ti lockano (Malzahar R, Skarner R, Mordekaiser R): il cleanse attivo rompe la suppression che altrimenti ti deletta.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** è il default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se l'enemy team ha 3+ threat AD che ti puntano in fight.

**Skill order:** Maxa **Q** per primo (poke, waveclear, danno magico), **E** per secondo (DPS più shred di armor e magic resist), **W** per ultimo (utility). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Precision** con **Fleet Footwork**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Inspiration** con **Magical Footwear** e **Cosmic Insight**, oppure **Sorcery** con **Manaflow Band** e **Gathering Storm** contro lane di poke pesante.

## Matchup chiave

- **Caitlyn:** Ti out-ranga (ha più range di te). Stai dietro i minion per negare i suoi setup di trap, schiva la sua Q a linea side-steppando (spostandoti di lato) al cast indicator (la linea visiva sul terreno quando lei lancia), e mai avvicinarti a un muro dove la Q rimbalza ("ricochet") e fa danno bonus. Tieni la W per scappare dalla sua R execute quando sei low.
- **Draven:** Il primo periodo della partita ("early") è il più duro. Out-trada nei livelli 1-5 e snowballa (vantaggio iniziale che cresce) sulle kill di lane. Concedi CS (last-hit = creep score = oro) per stare vivo, pinga le finestre di gank quando le sue Spinning Axes droppano, e mai tradare dentro un'ascia in volo.
- **Lucian:** Vuole entrarti addosso con la E (dash). Q lui quando committa il dash così lo slow più il CC (crowd control = stun, slow, root) del support trasforma il trade in tuo favore. Mai auto-tradare a melee range; il double-shot della passive bursta oltre il vantaggio del true damage.
- **Jhin + Lulu / Senna + Tahm:** Lane di disengage a lungo raggio (composizioni costruite per rompere il tuo engage con scudi e CC). Devi vincere l'all-in al livello 6 o stallare fino a ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**. Pusha la wave con Q + auto e cerca un setup di gank con R + W del jungler.
- **Samira:** Oppressore di all-in al livello 6 (la sua ulti forza un fight da cui non puoi ritirarti). Compra ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** se la sua R atterra una volta sola sul team — il cleanse attivo (rimuove un debuff) rompe la chain. Pre-6 puoi pareggiarla nei trade; post-6 disengagia con la W finché le tue R Big One non superano il suo ramp di danno.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + W o Q + E, puoi punire un posizionamento sbagliato del nemico con un trade Q-AA-AA ("AA" = auto-attack base) e follow-up W se il support avversario è committato avanti.
- **Livello 6:** La prima **Missile Barrage (R)** sblocca l'all-in (un fight in cui committi totalmente, niente fuga). Con stock di R più Trinity Force in arrivo, una combo Q-AA-R-R-R più CC del support killa la maggior parte degli ADC a low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completata (~ minuto 13-15):** Sheen procca su ogni Q e ogni R missile, trasformando il poke in kill threat. È il momento per all-in o per prendere il Drake fight se la vision (ward sulla mappa) è pulita.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minuto 18-22):** Muramana aggiunge danno bonus su ogni azione che costa mana; il danno teamfight raddoppia rispetto al pre-stack. Forza i fight su obiettivo (Drake, Baron) qui.

## Errori comuni

- **Spammare R in cooldown per fare waveclear.** Le R sono uno stock finito; se le svuoti sui minion, nel prossimo teamfight hai zero burst nel momento peggiore. Pusha la wave con Q + auto, tieni 4+ missile per gli obiettivi.
- **Usare la W aggressiva senza follow-up.** La W è la tua unica fuga. Dasharti dentro per chiudere una kill che richiedeva un altro auto è il modo classico in cui Corki muore — se non puoi killare con il mana e i cooldown rimasti, non committare (non impegnarti totalmente nello scambio).
- **Auto-tradare a melee range senza follow-up del support.** Il true damage della passive a corto raggio sembra invitante, ma la pool HP di Corki è squishy (bassa e fragile). Stai a R range quando il support avversario ha hard CC up.
- **Rushare ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge come 2° item.** Infinity Edge ha bisogno di crit chance alta per funzionare, e i primi tre item di Corki (Trinity, Manamune, Berserker's) ne danno pochissimo. Tieni l'ordine Trinity → Manamune → Rapid Firecannon → Phantom Dancer; Infinity Edge solo come 5° o 6° item.
- **Fare recall con stock di R vuoti.** Gli stock si resettano alla morte ma persistono al recall — sparale tutte su una wave o una torre prima di backare invece di lasciarle inutilizzate.

## Suggerimento avanzato

Traccia e sfrutta il ritmo della **Big One**. Ogni terza R missile (la "Big One") fa molto più danno delle due regular. Prima di un teamfight, conta le missile in stock — se la prossima è una Big One, conservala per il target prioritario; se l'hai appena spesa, spara le due filler missile sulla wave o su una torre così che la Big One ricarichi pronta per l'engage. Chi spara R alla cieca spreca Big Ones sui minion; chi traccia il count one-shotta gli squishy (campioni low-HP) quando conta.
