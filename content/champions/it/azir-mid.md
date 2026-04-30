---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "it"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Azir mid lane per League of Legends Patch 16.9: starter kit, build path battle mage, matchup chiave, power spikes, errori comuni e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Una sola volta per torre alleata caduta, Azir può resuscitare un Disc of the Sun temporaneo: una torretta che picchia duro e controlla lo spazio attorno alle macerie."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Manda tutti i Sand Soldier attivi verso un punto, infliggendo magic damage e slow in linea. Strumento principale di poke e di riposizionamento dei soldati."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Evoca un Sand Soldier (a cariche). I soldati estendono i basic attack di Azir: quando lui auto-attacca vicino a un soldato, il soldato pugnala in linea per magic damage."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Shield + dash verso un soldato esistente. Si ferma se colpisce un campione e rimborsa una carica W. Unica escape e unico gap-close del kit."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Muro di soldati che avanza, knockback sui nemici e lascia una linea bloccante per qualche secondo. Lo strumento per lo 'Shuffle' iconico di Azir."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi copre il cooldown della E quando ti pescano fuori posizione"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target pesante (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "passa a questo nel momento in cui un target prioritario compra un item di Magic Resist — i tuoi soldier auto sfondano l'MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro comp che impilano cure (Soraka, Vladimir, Dr. Mundo) — l'anti-heal si applica su ogni colpo dei soldati"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Arrivare con Nashor's Tooth + Sorcerer's Shoes online (~ minuto 18-20), poi controllare gli objective fight con i basic attack estesi dai soldati e fare Shuffle (R + Flash) sui carry avversari."
  weakness: "Champion meccanicamente esigente e debole prima del livello 6. Senza E disponibile non hai escape; il chip damage a distanza e i Wind Wall (Yasuo, Yone) annullano sia i soldati della Q che la R."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Il range dei soldati di Azir batte il loro range di cast, e non hanno dash per schivare il poke soldier-Q né per interrompere la sequenza di auto-attack potenziati dalla W."
    - examples: ["annie", "syndra"]
      archetype: "Mage da all-in lento e prevedibile a corto raggio"
      reason: "Azir mantiene le distanze nelle loro finestre di commit (il momento in cui camminano avanti per attaccare): ogni volta che si avvicinano i basic attack dei soldati li danneggiano, e la R Shuffle ribalta l'all-in se Flashano dentro."
    - examples: ["malzahar", "kassadin"]
      archetype: "Mage da late-game deboli negli scontri brevi early"
      reason: "Azir farma sicuro con W dal livello 1 e regge il loro potenziale late-game senza regalare exp — al minuto 14 è online prima che loro raggiungano il proprio spike."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champion con Wind Wall"
      reason: "Wind Wall mangia ogni linea di soldati della Q e il follow-up del muro della R. Con il poke principale neutralizzato Azir resta un mage corpo-a-corpo senza strumenti melee."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Assassini early-game burst con dash multipli"
      reason: "All-in pre-6 quando Azir non ha E pronta; anche dopo Zhonya's, i kit con dash multipli gli arrivano addosso prima che la sua R abbia tempo di partire."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage artillery a lungo raggio"
      reason: "Lo logorano dall'oltre range dei soldati di Azir (740). Lui non ha cure pre-6 per reggere lo scambio e arriva al primo item con HP bassi."
---

## Panoramica

Azir è un battle mage che combatte a lungo raggio attraverso i suoi **Sand Soldier** — piccole unità spettrali che evoca con la **W (Arise!)** e che fungono da postazioni di auto-attack remote. Quando Azir auto-attacca un nemico vicino a un soldato, è il soldato a pugnalare in linea, infliggendo magic damage. Ha lo skill ceiling più alto di questa lista (Riot lo classifica 9/10 per difficoltà), e i suoi early level sono onestamente deboli. Finché non ha piazzato il primo soldato e costruito la muscle memory **W → Q**, perde di brutto in trade (un breve scambio di danno in lane, non un fight totale) contro la maggior parte dei laner.

Il suo game plan in una frase: farmare al sicuro con **W** finché ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** non è online intorno al minuto 18, poi usare la **R (Emperor's Divide)** — il famoso "Shuffle" — per spingere i carry avversari (i champion ad alto danno della loro squadra) dentro la tua squadra durante gli objective fight (i teamfight intorno ai grandi obiettivi della mappa: Drake, il dragone al fiume bot; Atakhan, un nuovo boss di metà mappa; o Baron Nashor a fine partita). La skill expression sta in tre punti: il piazzamento dei soldati (dove stai tu rispetto a dove i soldati proiettano il tuo auto-attack range), la combo "Shuffle" **E + Flash + R**, e capire quando spendere la tua unica escape (**E**) e quando tenerla per un counter-engage (il momento in cui ribalti l'attacco avversario contro di lui).

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Salta la ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**: la mana la spendi su **W** (poca) e **Q** (media), il regen di Doran basta per il resto.

**Core items (in ordine):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — primo item ogni partita. L'attack speed fa partire più veloci i tuoi auto-attack estesi dai soldati (ogni AA, cioè basic attack — il colpo base di Azir conta solo se c'è un soldato vicino), e il magic damage on-hit (danno extra applicato su ogni basic attack) si somma a ogni colpo del soldato. Questo è lo spike (il momento in cui un champion diventa significativamente più forte) che ti fa passare da passivo a minaccioso.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (un valore fisso, non in percentuale, di Magic Resist nemica ignorata). Boots di default per ogni mid mage che vuole eliminare i target squishy (champion con difese basse, tipo gli ADC e gli altri mage).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplica tutto il tuo AP (Ability Power, la statistica che aumenta il magic damage) scaling. Dopo questo item ogni auto del soldato e ogni **Q** picchiano molto più forte; è il vero damage spike per i teamfight di late game.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst (danno alto concentrato in uno-due secondi), con una passiva HP-threshold (una passiva che si attiva quando il nemico è sotto circa il 35% HP) che si allinea con il follow-up kill dopo uno Shuffle.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). Un "diver" è un champion che salta sul tuo carry di back-line per ucciderlo nonostante il rischio. La stasi (qualche secondo in cui non puoi essere danneggiato né muoverti) ti compra il tempo che serve perché torni la **E** quando ti pescano fuori posizione.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico single-target pesante (CC = crowd control: stun, charm, snare — ogni effetto che prende il controllo del tuo personaggio). Esempi: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — passa a questo nel momento in cui un target prioritario compra un item di MR (Magic Resist, la statistica che riduce il magic damage subito). Soldier auto e **Q** sfondano l'MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp che impilano cure (Soraka, Vladimir, Dr. Mundo). L'anti-heal (una passiva che dimezza le cure nemiche per qualche secondo) si applica su ogni colpo dei soldati.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sono accettabili quando la squadra ha bisogno della tua **R** disponibile più spesso (meno tempo di attesa tra un cast e l'altro) per controllare gli objective fight.

**Skill order:** Massimizza **Q** prima (il danno e lo slow dei soldati salgono per rank, e il cooldown scende da 14s al rank 1 a 6s al rank 5), poi **W** (più cariche soldato e durata più lunga del soldato), **E** per ultima. Prendi **R** ai livelli 6, 11, 16. Parti con **W** al livello 1 — senza un soldato non puoi farmare la wave a distanza.

**Runes:** Primaria **Sorcery** (l'albero rune da magic damage) con **Arcane Comet** (un piccolo proiettile che fa danno extra quando colpisci con uno slow o un root), **Manaflow Band** (mana extra ogni volta che colpisci un champion con un'abilità), **Transcendence** (cooldown reduction al livello 5), **Scorch** (piccolo danno bruciante sulla prima abilità che colpisce, ogni qualche secondo). Secondaria **Inspiration** con **Biscuit Delivery** (pozioni gratis in lane) e **Cosmic Insight** (più uptime sui summoner spell). Cambia la secondaria in **Precision** con **Presence of Mind** (rimborso mana sui takedown) e **Coup de Grace** (più danno sui target con HP basso) quando la squadra avversaria ha più squishy a basse resistenze.

## Matchup chiave

- **Yasuo / Yone:** Il loro **Wind Wall** blocca ogni proiettile del tuo kit — i colpi dei soldati sulla **Q** e l'onda della **R**. Tieni la **Q** finché non hanno usato Wind Wall su qualcos'altro; se riesci a forzarli a sprecarlo (bait) con un singolo colpo di soldato, i 24 secondi successivi di trade sono gratis.
- **Zed:** Minaccia di dive (si butta sotto la tua torre per ucciderti nonostante i colpi della torre) dal livello 6. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item. Tieni la **E** — non usarla mai offensivamente finché lui non spende la sua ult; se ulta e tu hai **E** + Zhonya's, sopravvivi al burst.
- **Veigar:** Pari-favorevole. Non ha dash. Il poke soldier-Q (chip damage da distanza sicura) lo caccia dalla XP range ogni volta che cammina avanti per last-hittare; rispetta la sua **E (Event Horizon)** tenendo la tua **E** dash per uscirne.
- **Twisted Fate:** Gara di priority per il roam. "Roam" significa lasciare la mid per aiutare un'altra lane; "priority" significa avere un vantaggio sulla wave che ti permette di andartene senza perdere minion. Spingi la wave appena la **Q** è fuori cooldown con **W** + **Q**. Quando arriva al livello 6 e inizia a usare la sua ult per girare, segnala alla tua squadra e forza tower trade (mentre lui uccide il tuo bot, tu prendi la sua torre) dal suo lato invece di inseguirlo; Azir punisce le side wave con lo Shuffle della **R** sotto torre meglio della maggior parte dei mid.
- **Akali:** Diver con gap-close. Piazza i soldati nei bush da cui le piace fare flank (entrare in fight da un fianco non coperto). Dentro la zona stealth della sua **W (Twilight Shroud)** non la puoi targettare — pre-piazza la **W** così i soldati la attaccano a vista appena esce.

## Power spike & condizioni di vittoria

- **Livello 4:** Tre punti in **Q** sbloccano un vero damage spike. Il poke soldier-Q ora minaccia kill veri se l'avversario cammina in range due volte di fila.
- **Livello 6:** La prima **R** sblocca la combo "Shuffle": **Flash + R** ribalta la frontline avversaria (i tank in prima linea del fight) all'indietro dentro la tua squadra. Usala la prima volta in una skirmish (uno scontro piccolo, più piccolo di un teamfight 5v5) 2v2 sul fiume, così un errore non butta la lane.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** Diventi la minaccia DPS (damage per second, danno per secondo) di mid-game che la tua squadra stava aspettando. Forza un fight su Atakhan o Drake (Atakhan è un boss di metà mappa; Drake è il dragone al fiume bot) — i tuoi soldier auto fanno più danno della maggior parte dei mage in questa fase.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 28-32):** Ogni soldier auto stronca i squishy. Da qui Azir è uno dei carry più forti del gioco, ma solo se sta al massimo range dei soldati e la sua frontline (i tank/bruiser davanti a lui) regge.

## Errori comuni

- **Camminare in auto range per last-hittare prima che la W sia pronta.** I basic attack di Azir senza un soldato vicino sono corti e deboli. Evoca sempre un soldato sotto il minion che vuoi prima di farti avanti; il soldato farma per te, non il tuo basic attack.
- **Tenere la R per lo Shuffle perfetto che non arriva.** Anche una **R** mediocre che spinge un nemico e crea un muro è meglio di nessuna **R**. Usala in peel (per proteggere il carry dai diver) quando non c'è opportunità di engage (l'azione di iniziare un fight saltando dentro).
- **Usare la E offensivamente senza piano di uscita.** La **E** è la tua unica escape. Se dashi dentro, i soldati scadono, il dash va in cooldown e tu resti fermo come un glass cannon (un champion con tanto danno e zero difese) a melee range. Spendi **E** offensivamente solo quando puoi garantire la kill o seguire con una **R** immediata.
- **Dimenticare che le torri di Shurima's Legacy esistono.** Quando una torre alleata esterna cade, puoi resuscitare una potente torretta Disc of the Sun sulle macerie. Usala per il controllo objective intorno ad Atakhan o per una difesa sotto il tuo inhibitor (la struttura tra la seconda torre e il Nexus). La maggior parte degli Azir non preme mai la passiva.
- **Spammare Q per pokare senza la W di setup.** La **Q** proietta danno *lungo la linea di ogni soldato attivo*. Con zero soldati su, la **Q** non fa nulla. Piazza la **W** prima, *poi* **Q** per mandare il soldato dove vuoi.

## Suggerimento avanzato

Allena lo Shuffle **E + Flash + R** in Practice Tool (la modalità di allenamento offline del client) finché non lo esegui in meno di 0,4 secondi. L'ordine conta: **E** ti aggancia alla traiettoria del soldato, **Flash** ti riposiziona a metà dash così il muro della **R** parte dal nuovo punto, e la **R** carica nella direzione in cui il personaggio guarda *al momento del cast*. Fatto bene, converte un assassino isolato o un carry che cammina nel tuo fog of war (la parte di mappa senza ward — sentinelle che danno visione — che non vedi) in una kill garantita, indipendentemente dalla sua posizione di partenza.
