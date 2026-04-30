---
title: "Draven Bot Build & Guida — Patch 16.9"
slug: "draven-bot"
language: "it"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Draven bot lane per League of Legends Patch 16.9: catch delle asce, build da snowball, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Catturare una Spinning Axe o uccidere un'unità accumula stack di Adoration. I takedown sui champion convertono gli stack in oro bonus — il motore di snowball di Draven."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Carica la prossima auto con danno fisico bonus. L'ascia rimbalza in alto dopo il colpo: catturarla ricarica un altro Q, fino a due in pila."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Breve buff di Move Speed e Attack Speed. Catturare una Spinning Axe ne resetta il cooldown — la mobilità scala con quanto bene catturi."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Ascia lineare che spinge via i nemici e li rallenta. Strumento principale di peel e disengage; riposiziona anche i target per il follow-up del support."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Due asce gigantesche scagliate attraverso la mappa, richiamabili con il rilancio. Il danno cala per ogni nemico colpito ma esegue target sotto una soglia HP legata agli stack di Adoration."
      dd_spell_id: "DravenRCast"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni con cure pesanti (Soraka support, Yuumi, Aatrox, Vladimir) — applica Grievous Wounds dimezzando le cure"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro AP burst pesante (Syndra mid + comp doppio mage) — lo scudo si attiva sotto il 50% HP e dà Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro dive di assassini (Zed, Talon, Rengar) — la revive ti permette di incassare gli stack di Adoration prima di morire di nuovo"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC single-target di lockdown (Morgana Q, Lux Q, Ashe R) — lo spell shield blocca il primo hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Accumula Adoration con catch e last-hit, poi incassa sulla prima kill per uno spike di 600+ oro. Trasforma il vantaggio in completamento item più veloce e snowballa ogni skirmish prima che l'ADC avversario scali."
  weakness: "Niente dash né escape, e il pattern di axe-catch ti blocca in archi prevedibili. Hard CC ai livelli 1-3 ti uccide prima del reset di W, e perdere il flusso di Adoration stronca la tua curva di oro."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Marksman hyper-scaling con early debole"
      reason: "Il loro livello 1-3 è solo farming; la Q di Draven dà danno bonus enorme su ogni catch e la W si resetta quando cattura, quindi può inseguirli prima che arrivino a due item."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Marksman immobili senza dash"
      reason: "La E di Draven sposta e rallenta, la W gli dà burst di Move Speed: questi ADC non possono fare disengage quando lui si fa avanti. Perdono ogni all-in pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Enchanter support che heal-tradano in lane"
      reason: "Il danno della Q di Draven impila troppo in fretta per le lane di poke-and-heal. Due asce catturate di fila sfondano un ciclo di cure di Soraka, e il suo snowball converte ogni kill in 200+ oro di vantaggio."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Marksman da poke a lunga gittata"
      reason: "Pokano oltre la attack range di 550 di Draven mentre lui è bloccato negli archi di catch. Ogni minuto in cui Draven non può engagiare è un minuto in cui i suoi stack di Adoration decadono nel nulla."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Support da hard-engage con CC"
      reason: "Draven non ha dash né immunità. Una catena di CC al livello 2 lo elimina mentre le sue asce rimbalzano inutili nella lane. Pre-6 non può letteralmente reagire."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Support da lockdown / pick"
      reason: "Un solo hook di Thresh o Q di Morgana blocca Draven a metà axe-catch. Senza catch, i reset di Q saltano, la velocità di W decade, e diventa un ADC fermo senza escape."
---

## Panoramica

Draven è un marksman da snowball costruito intorno a una sola meccanica: catturare le proprie asce rotanti. Ogni auto-attack mentre **Spinning Axe (Q)** è caricata parte come ascia che rimbalza in aria — se Draven cammina sotto il punto di atterraggio la cattura, infligge un colpo bonus enorme e ricarica un'altra Q. Ne può tenere fino a due in pila contemporaneamente. La sua passiva **League of Draven** trasforma quei catch in oro: ogni catch e ogni minion ucciso accumula stack di Adoration, e la prima kill su un campione dopo una soglia di stack li converte in un bonus di oro (spesso 100-500 oro extra a kill).

Il piano partita è brutale e diretto: bullizzare la bot lane dal livello 1, forzare una kill prima del minuto 8, incassare lo spike di Adoration, poi power-farmare in snowball lead (un vantaggio iniziale che cresce: kill → oro → item → altre kill). Lo skill expression sta nel posizionamento sui catch (anticipare dove cade l'ascia senza esporsi a skillshot) e nell'uptime di **Blood Rush (W)** — ogni catch resetta la W, quindi un Draven fluido è permanentemente più veloce di un Draven che sbaglia due asce di fila.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade è il marksman starter standard: piccolo bonus Attack Damage (AD), un po' di HP e lifesteal (recuperi HP pari a una percentuale del danno fatto con auto-attack). Draven ha bisogno di ogni punto di AD perché la Q scala col danno dell'auto-attack base, e il pattern di axe-catch è duro sui tuoi HP se non rilesti indietro.

**Item core (nell'ordine):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primo item da snowball. Lethality (un tipo di penetrazione armatura che ignora una fetta dell'armatura del bersaglio, particolarmente utile contro target squishy — campioni con poche difese come ADC e mage) più un'esecuzione sotto il 5% HP trasforma ogni auto Q-caricata in una minaccia di kill. Si sposa con Adoration: più kill significa più stack, e più stack significa spike di oro più grandi sui takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — stivali di attack speed (più auto al secondo). Default per Draven perché più auto significa più chance di axe-catch al secondo, e la W si resetta a ogni catch.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore di danno crit. Dopo due item crit (The Collector conta come una fonte AD pseudo-crit per scaling, IE è la seconda), Infinity Edge sblocca il 175% di danno crit. Il danno di Spinning Axe scala con la AD, e un axe-catch crit a questo punto one-shotta la maggior parte dei target squishy.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (recuperi HP pari a una percentuale del danno fatto con auto-attack) più uno scudo da full HP. Draven muore agli assassini perché non ha escape; lo scudo ti regala un fight extra a teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — slot finale di penetrazione armatura che scala con gli HP bonus dell'avversario (più efficace quanto più è grosso il loro tank). Sostituiscilo con Mortal Reminder se la squadra avversaria ha cure pesanti.

**Item situazionali:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — stesso slot di Lord Dominik's, prendi questa versione quando la squadra avversaria ha cure pesanti (Soraka, Yuumi, Aatrox, Vladimir): applica Grievous Wounds, che dimezza le cure nemiche.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot late contro composizioni di AP burst (Syndra + Veigar + Annie). Lo scudo si attiva sotto soglia HP — cioè quando scendi sotto il 50% HP — e assorbe danno magico.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — slot finale contro dive di assassini (Zed, Talon, Rengar). La revive ti dà 4 secondi per scappare o per finire l'incasso di Adoration, e la stat di armor riduce il danno di dive di circa il 20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — sostituisce Bloodthirster contro CC single-target da lockdown (Morgana Q binding, Lux Q root, Ashe R stun). Lo spell shield blocca il primo hard CC ogni 40 secondi — il tempo guadagnato lo spendi facendo auto invece che subendo lockdown.

**Skill order:** Massimizza **Q** per primo (danno grezzo dell'ascia, l'asse del tuo snowball), **W** per secondo (più Move Speed e Attack Speed per il flusso di catch), **E** per ultimo (utility — un punto al livello 3 basta fino al late game). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** (costruito intorno alle auto-attack): **Conqueror** come keystone (impila sui colpi e converte una porzione del danno in cure negli scambi prolungati — perfetta per il pattern di all-in di Draven), poi **Triumph** (cura e oro bonus sui takedown — si sposa con l'incasso di Adoration), **Legend: Alacrity** (più attack speed per ogni takedown impilato), **Coup de Grace** (danno extra ai target a basso HP). Albero secondario **Domination** con **Sudden Impact** (Lethality extra dopo un dash o buff — Draven la prende dalla W) e **Treasure Hunter** (oro extra per ogni takedown unico — calza con l'identità snowball).

## Matchup chiave

- **Caitlyn:** La lane più dura del board. La sua attack range di 650 supera in poke (chip dei tuoi HP da fuori del tuo range) i 550 di Draven in ogni scambio. Fai uno step solo quando è animation-locked su un last-hit, e non camminare mai sopra una trap per catturare un'ascia — lascia cadere l'ascia se atterra su una trap.
- **Aphelios:** Lane gratuita pre-6. La Q di Aphelios ha 9 secondi di cooldown e le sue armi finiscono le munizioni; quella di Draven è permanente. Pusha il livello 2 forte (forza la wave a crashare prima dalla sua parte), engagia sulla sua arma più debole (Severum o Crescendum — entrambe main-hand di corta gittata), e bruciagli il **Flash** prima del minuto 5.
- **Lucian:** ADC early-game di livello specchio. Ti supera in trade in una finestra di 1 secondo con la sua passiva Q-AA-AA; tu lo superi in una finestra di 4 secondi con le Q in pila. Rifiuta gli short trade (non engagiare proprio), commetti agli extended trade (un "trade" = breve scambio di colpi, "extended trade" = fight prolungato di 3+ secondi dove le Q in pila di Draven superano in danno il burst di Lucian).
- **Jhin:** Ti poka pre-6 (il suo danno a distanza chippa i tuoi HP da lontano nei livelli iniziali) ma perde negli all-in (un fight a impegno totale dove vai per la kill senza opzione di fallback) sul reload del 4° colpo. Tieni traccia del suo contatore di colpi; engagia a "0/4" o subito dopo che ha sprecato un colpo su un minion. La sua W root è 1 secondo di colpi gratis su un Draven che non ha dash per schivarla.
- **Samira:** Vuole accumulare il rank S della passiva per la **R** in lane. Non tradare con lei una volta che ha raggiunto S: cammina via, recall (torna alla base) e re-engagia solo a full HP. La sua **R** ti supera in DPS a melee range, ma una E di Draven (Stand Aside) la spinge fuori dal range del channel e resetta il fight.

## Power spike & condizioni di vittoria

- **Livello 2:** La Q di Draven dà danno bonus enorme già al rank 1. Con un punto in **W** per Move Speed e Attack Speed, l'all-in al livello 2 è uno dei più forti del gioco — la maggior parte delle partite di Draven si decide su chi atterra il trade del livello 2.
- **Livello 6 con prima kill:** Whirling Death **R** diventa un kill button sui low HP — esegue (uccide istantaneamente) qualsiasi target sotto una soglia HP legata ai tuoi stack di Adoration. Se hai catturato asce per 6 livelli, la soglia è alta abbastanza da finire un nemico in fuga dall'altra parte della mappa.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completo (~ minuto 11-13):** Spike del primo item (un salto di power chiaro legato a un milestone di livello o item). Lethality più l'esecuzione al 5% HP significa che ogni auto Q-caricata minaccia kill su un target già chip-damaged. Forza un fight a questo timing — un incasso di Adoration qui spesso ti finanzia il secondo item 3 minuti in anticipo.
- **Spike a 3 item (Collector + Berserker's + Infinity Edge intorno al minuto 22-24):** Il burst di Draven (il danno che metti nei 1-2 secondi) diventa il più alto di qualsiasi marksman. Gioca intorno agli obiettivi (Dragon, Baron, Rift Herald — target neutrali che danno buff di squadra o pressione mappa) a questo punto e cerca pick (eliminare un nemico isolato fuori dal teamfight) sui target isolati nelle side lane.

## Errori comuni

- **Catturare asce in posizioni pericolose.** Un Draven che cammina 400 unità dentro la wave per prendere una Q è un Draven che mangia una trap di Caitlyn o un engage di Leona. Se l'ascia cade in un brutto punto, **lasciala cadere** — perdere una Q va bene, perdere una kill per overextension (fare uno step oltre la sicurezza per inseguire una giocata) no.
- **Accumulare stack di Adoration senza incassare.** Gli stack decadono se non li incassi entro ~30 secondi da un tentativo di takedown. Se arrivi a 100+ stack, forza un fight o prendi una Scuttle skirmish (piccoli fight di 2-4 giocatori sul river per il granchio Scuttle) — restare seduto sugli stack a farmare è buttare oro gratis.
- **Usare R per il danno invece che per l'execute.** Il danno di Whirling Death cala bruscamente per ogni nemico colpito. Lanciarla attraverso una wave è sprecato; lanciarla come seconda ascia (il rilancio di ritorno) su un target in fuga a basso HP è una giocata da 1500 oro. Trattala come un fucile da cecchino, non come uno strumento di waveclear.
- **Stare fermi nei teamfight.** Draven non ha dash. Due secondi nello stesso punto contro qualsiasi minaccia mobile (Zed, Diana, Camille) e sei morto. Strafe (muoviti di lato mentre attacchi) tra ogni auto-attack — passi corti, ma in movimento costante. L'arco di catch ti spinge avanti; la velocità di W ti fa resettare la posizione subito dopo.
- **Ignorare Stand Aside (E) come peel.** La E di Draven sposta i nemici di lato e li rallenta. Nei teamfight non è solo poke — è il disengage (un'abilità che spezza un fight committato, rompendo l'all-in del nemico) che ti compra 1.5 secondi di auto gratuite mentre una Camille o un Hecarim si riprendono dal knockback.

## Suggerimento avanzato

Allena il trick **W-into-fountain-axe-bounce** in side lane: lancia una Q vuota contro un muro o un coperto sottile, poi cammina con la W subito attraverso la zona di rimbalzo. Siccome il Move Speed di Blood Rush decade in fretta, castarla durante l'arco dell'ascia ti porta a una posizione di catch che non raggiungeresti senza, e poi cattura l'ascia per resettare il cooldown della W per la giocata successiva. Questa singola meccanica è ciò che separa un Draven casual che sbaglia un'ascia su tre da un Draven fluido che cattura ogni Q che lancia.
