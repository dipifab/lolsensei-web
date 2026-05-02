---
title: "Fiddlesticks Support Build & Guida — Patch 16.9"
slug: "fiddlesticks-support"
language: "it"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Guida Fiddlesticks support per League of Legends Patch 16.9: build AP da engage, harass in lane, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Lo slot trinket diventa cariche di effigie. Piazza falsi spaventapasseri di Fiddle per vision; chi li vede prende un breve fear e l'effigie esplode."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Targetta un singolo nemico. Anche danneggiarlo con una spell mentre sei unseen lo Terrifica. Lo fa scappare lontano da te per 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel che droga HP dai nemici vicini (ti cura). A fine canalizzazione infligge danno bonus ad esecuzione. Sustain in lane dopo il primo back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Falce a boomerang in un cono ampio: rallenta tutti i nemici colpiti e silenza chi è nella linea centrale. Tool principale di harass in lane — colpisce due volte."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel di 1.5s, poi blink al punto target con danno AOE per secondo intorno a Fiddle per 5s. Lanciala da una brush di lane sull'ADC nemico."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro composizioni AOE-burst pesanti quando il team chiede uno scudo attivo (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target che interrompono il channel di R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Aatrox) — applica Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ nemici comprano un item di Resistenza Magica"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Imposta vision profonda sul bot, nasconditi nel tri-cespuglio a livello 6, poi Crowstorm sull'ADC nemico per una kill garantita che fa snowballare il tuo carry."
  weakness: "La peggior lane phase tra i support da engage pre-6: nessuno scudo, nessun CC point-and-click. Se invaso o pokato fuori, non hai tool di comeback finché l'ult non è online."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock procca sulla Q Terrify (CC immobilizzante) per uno spike di 2.5s di armatura e MR che salva Fiddle dal focus dopo Crowstorm. Font of Life cura i carry dopo ogni fear, Bone Plating mangia il burst di all-in early, Revitalize potenzia il sustain di Bountiful Harvest."
    secondary_rationale: "Sorcery secondaria: Manaflow Band sistema i problemi di mana durante lo spam di E in lane; Transcendence porta l'ability haste oltre 30 una volta completate le Sorcerer's Shoes per cicli di Crowstorm più corti."
    secondary_alternative: "Contro lane di poke pesante (Lux, Karma, Xerath support) swap Sorcery con Inspiration: Biscuit Delivery (5 biscotti gratis nell'early per restare full HP/mana) e Cosmic Insight (Flash e Crowstorm con cooldown ridotti)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanter squishy senza CC duro"
      reason: "Il loro kit ruota su healing e shielding — un Crowstorm dal tri-cespuglio supera i loro cooldown e one-shotta sia loro che l'ADC prima che heal o shield possano essere usati due volte."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "ADC immobili senza dash"
      reason: "Questi ADC non possono scappare a un flank dalla brush; una volta che R + E centrano, non hanno tool di mobilità per resettare la distanza e il tuo bot converte la kill in torre."
    - examples: ["sona", "seraphine"]
      archetype: "Support mage da retroguardia senza escape"
      reason: "Stanno indietro per buffare gli alleati — ma le tue effigie danno vision profonda che trova la loro posizione, e il channel di R da dentro il loro hex le one-shotta prima che possano muoversi."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Enchanter con Black Shield / spell-shield"
      reason: "Black Shield assorbe Terrify (Q fear) e il primo tick AOE di Crowstorm sul carry, neutralizzando il cast di engage e dando 5s di finestra per il disengage."
    - examples: ["janna", "lulu"]
      archetype: "Enchanter da disengage / peel"
      reason: "Janna R o Lulu W ti sbattono fuori dal carry l'istante in cui atterri. L'AOE di Crowstorm continua a tickare ma senza follow-up CC, il fight si resetta e mangi focus damage per niente."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Support artillery a lunga gittata"
      reason: "Ti pokano fuori lane prima del 6 oltre il range della tua E. Fiddle non ha scudo né modo di chiudere il gap, quindi la barra HP cala alla metà prima che la prima R sia online."
---

## Panoramica

Fiddlesticks support è un pick da hide-and-engage: un AP (Ability Power, lo scaling del danno magico) support la cui intera lane phase è il setup di un solo momento — premere **Crowstorm (R)** da dentro una brush di lane a livello 6 sull'ADC nemico (il marksman, il carry da auto-attack ranged del bot lane), con il tuo bot lane a fare follow-up sul blink. Fiddle non ha scudo, né CC point-and-click, né escape, quindi il prezzo per quel power spike a livello 6 è la peggior lane phase tra i support da engage tra i livelli 1 e 5.

Il piano di gioco: piazza effigie sul tri-cespuglio bot e sul river per minacciare giocate da agguato, usa **Reap (E)** per slow + silence in harass quando un nemico passa per last-hittare, ed evita di farti pokare fuori dai matchup a lunga gittata. Una volta che **R** è up, cerca qualunque momento in cui l'ADC nemico è shovato oltre la torre o il support sta roamando — poi blinka. A metà partita il tuo lavoro è trovare flank per i Drake fight dalla fog di river o da ingressi di jungle non wardati. Sei in pratica un Fiddle jungler che passa la lane phase accanto a un ADC.

## Build Consigliata

**Item iniziali:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (lo starter AP da support che si quest-evolve in Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Item core (nell'ordine):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — il reward da quest di Spellthief's Edge. Obbligatorio: ti dà l'income di oro che ti permette di comprare item veri, più uno stack di AP-on-takedown che fa snowballare il tuo danno. Chiudi la quest entro il minuto 12-14.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa (taglia attraverso la resistenza magica nemica). Economici e la scelta giusta sopra ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** una volta che R è online.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — il tuo item principale. Lo slow di **E** e **R** marchia i target; quando un alleato colpisce il bersaglio marchiato la marca esplode per danno bonus (e condivide l'oro con l'ADC). Sinergia pura con il kit pieno di slow di Fiddle.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entra in stasi l'istante in cui Crowstorm finisce di tickare. Mandatorio se hanno un diver o un assassino; senza, muori subito dopo ogni engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — solo se la partita si allunga e ti rimane oro dopo gli item da support. Il +35% AP bonus fa one-shottare gli squishy a Crowstorm.

**Item situazionali:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro AOE burst pesante (Yasuo + Malphite, Wukong, Diana). Lo scudo attivo salva il team durante la loro wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target che interrompono R (Lissandra R, Veigar E, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando 2+ nemici comprano un item di Resistenza Magica.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se 2+ nemici hanno CC duro.

**Skill order:** Massimizza **E** per primo (slow + silence è il tuo unico harass in lane), **W** per secondo (sustain dopo il primo back), **Q** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Contro lane di poke pesante (Lux, Karma, Xerath support) swap Sorcery con **Inspiration**: **Biscuit Delivery** e **Cosmic Insight**.

## Matchup chiave

- **Lux support:** Q binding a lunga gittata più poke con E. Nasconditi dietro la wave così la sua **Q** non ha linea pulita, e non face-checkare mai il tri-cespuglio senza prima controllare con un'effigie. Sopravvivi al 6, poi Crowstorm su di lei se si over-estende.
- **Morgana:** Black Shield neutralizza il fear della tua **Q** e il primo tick AOE di R sull'ADC. Engage sempre sull'ADC invece che su Morgana, e forzala a pre-shieldare con un finto passo dentro la brush prima di committare.
- **Leona:** Matchup di engage speculare, ma Leona ha CC point-and-click e Aftershock che batte il tuo pre-6. Trade solo quando ha usato la **E**, e non engagiare mai per primo contro Leona — ti stunna fuori dal channel di R.
- **Janna:** Hard counter al tuo engage. La **R** di Janna sull'atterraggio ti sbatte fuori dal carry, vanificando tutto l'ult. Tieni Crowstorm per quando ha bruciato la sua R in un altro fight, o quando sta roamando.
- **Coppie ADC Caitlyn / Senna:** La tua lane dei sogni. Mancano di mobilità — una volta toccato il 6, Crowstorm dal tri-cespuglio le finisce ogni volta. Dì all'ADC di setuppare la wave per crashare al minuto 5 in modo da raggiungere il 6 insieme.

## Power spike & condizioni di vittoria

- **Livello 2 (con E + W):** Prima finestra di trade. Centra **E** attraverso la wave per chunkare l'ADC nemico; se shovano verso di te, **W** sotto torre per sustain.
- **Livello 6 (prima Crowstorm):** Il tuo unico vero spike di lane. Imposta uno Stealth Ward (il trinket ward bianco gratuito con cui ogni champion parte) in tri-cespuglio (il triangolo di cespugli tra river bot e la lane bot) 30s prima, posizionati dentro, poi blinka sull'ADC nemico. Un R + E + follow-up dell'ADC pulito è una kill garantita.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate online (~ minuto 14-16):** Il proc di danno sullo slow spikea. Cerca flank cross-map per i Drake fight — l'oro che condividi con l'ADC dai proc di Mandate accelera tutto il bot side.
- **Livello 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ minuto 22):** Il secondo punto in R abbassa il cooldown e la stasi ti copre post-engage. Forza i teamfight su Drake o Baron con setup dalla fog.

## Errori comuni

- **Engagiare senza follow-up dell'ADC.** Un Crowstorm in solitaria taggа i nemici ma non killa nessuno se l'ADC sta back-recallando. Controlla mappa e mana ADC prima di premere R; se non ha ult e non ha mana, tieni l'engage per una finestra migliore.
- **Stare davanti alla wave a livello 1-3.** Non hai scudo né escape pre-6. Sta dietro all'ADC e alla linea di minion; lascia last-hittare lui, tu nasconditi nella brush aspettando un fear da effigie nel tri-cespuglio per setuppare il trade.
- **Sprecare effigie nelle brush di lane.** Le effigie valgono di più quando danno vision che il nemico *non* sta pagando per spegnere. Piazzale in tri-cespuglio o pixel-brush per setup di engage, non nelle brush ovvie del bot lane che vengono pulite dal primo sweep del support nemico.
- **Engagiare contro un Black Shield non bruciato (Morgana).** Una Morgana con Black Shield up trasforma il tuo spike a livello 6 in ult sprecato. Engage sempre sull'ADC, non su Morgana, e forzala a pre-shieldare fingendo un walk-in nella brush 2 secondi prima di committare.

## Suggerimento avanzato

Il channel di 1.5s di **Crowstorm** è interrompibile da qualunque cosa ti sposti o ti stunni, ma il channel in sé non rompe la stealth della brush — significa che puoi premere **R** mentre sei ancora dentro il tri-cespuglio, e il nemico vedrà la barra del channel solo per una frazione di secondo prima che il blink atterri. Allena questo nelle normal: aspetta che l'ADC nemico si over-estenda per un CS, premi R da dentro il tri-cespuglio, blinka in faccia. L'audio cue (la risata iconica di Fiddle) è l'unico avviso che ricevono, e quando reagiscono l'AOE sta già tickando.
