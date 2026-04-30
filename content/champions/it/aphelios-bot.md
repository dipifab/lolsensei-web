---
title: "Aphelios Bot Build & Guida — Patch 16.9"
slug: "aphelios-bot"
language: "it"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Aphelios bot lane League of Legends Patch 16.9: rotazione armi, build marksman core, matchup chiave, power spike, errori tipici e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios cicla 5 armi Lunari in un ordine fisso che poi si modifica. Ne tiene 2 alla volta (main-hand + off-hand); ogni arma ha munizioni finite e a esaurimento viene scartata."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "L'attivata cambia con la main-hand: tiro a lungo raggio (Calibrum), sprint AoE con lifesteal (Severum), root su tutti i rallentati (Gravitum), cono (Infernum), torretta sentinella (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Scambia istantaneamente main-hand e off-hand. Cooldown corto: ogni cast ribalta il tuo profilo di danno (range, lifesteal, AoE, slow, attack speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios non ha una vera terza ability — questo slot mostra solo la prossima arma che Alune gli passerà. Serve a pianificare le combo con qualche arma di anticipo."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Esplosione a lunga gittata che detona sui campioni colpiti. Applica l'effetto unico della tua main-hand corrente (mark shot extra Calibrum, attacco AoE, lifesteal AoE, ecc.)."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro frontline tanky (Sion, Ornn, Malphite): armor penetration che scala sull'HP bonus dell'avversario"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro forte healing (Soraka support, Yuumi, Vladimir, Aatrox): applica Grievous Wounds e dimezza le cure"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quando ti serve lifesteal e uno scudo: rimpiazza The Collector se l'avversario ha 2+ assassini focused su di te"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, doppio mago): scudo a HP bassi e Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro CC bloccante (suppression Malzahar, R Skarner, R Mordekaiser): l'attiva pulisce il crowd control"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Arriva al two-item spike, poi alterna Calibrum + Gravitum nei fight per bloccare un target chiave con la W swap, R e la combo Q-root mentre il tuo team committa l'engage."
  weakness: "Niente dash, niente escape, e l'arma sbagliata al momento sbagliato butta un fight. Cade a picco se viene punito ai livelli 1-3 prima di stackare ammo e item."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "Marksman a corto raggio che devono impegnarsi nel fight"
      reason: "Calibrum (il fucile) ha più range del loro auto-attack: per scambiare devono entrare e tu li punisci con il mark shot della Q. Poi la W swap a Severum cura il chip damage che ti hanno messo addosso."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Scaler bot lane senza mobilità"
      reason: "Gravitum (il cannone) li rallenta ad ogni auto, poi la Q blocca tutti i bersagli rallentati insieme. Con la R al livello 6 in follow-up, un target immobile si mangia tutto il burst prima di completare un channel."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Marksman da scaling con early debole"
      reason: "Aphelios livello 1-2 con Calibrum vince ogni scambio contro chi vive di solo farm in lane phase. Mettigli pressione prima dei loro 3 item così non arrivano mai al loro spike di late game."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Marksman aggressivi early-game"
      reason: "I loro livelli 1-3 sono brutali: cooldown corti e damage base alto puniscono Aphelios mentre la sua Q ha 9s di cooldown e le munizioni sono finite. Non può rispondere senza sprecare ammo che gli serve a spingere la wave."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Support hard-engage"
      reason: "Aphelios ha mobilità zero (no dash, no blink). Una catena di CC dal support e muore prima di poter swappare a Severum per curarsi o di bruciare Flash. Pickarlo contro hard engage = pickarlo per morire."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Marksman da poke a lungo raggio"
      reason: "Logorano Aphelios da distanze in cui nemmeno Calibrum risponde (trap + headshot Caitlyn, Q dalla fog Senna, W root Jhin). Aphelios non può chiudere la distanza, quindi perde HP senza poter rispondere."
---

## Panoramica

Aphelios è un marksman con il kit più articolato di League: 5 armi diverse che si alternano nelle sue mani, ognuna con il suo basic attack e la sua **Q**. Ne tieni sempre due — una main-hand (che decide auto-attack e **Q**) e una off-hand (che spara periodicamente insieme alla main-hand). Ogni arma ha munizioni finite (un numero fisso di colpi): quando finiscono, l'arma viene scartata e Alune gli passa la successiva nella queue. La maestria sta soprattutto nel sapere quale arma sta arrivando e quali due vuoi attive in un dato momento.

Il game plan è sopravvivere a un early game fragile (no dash, no escape, gestione ammo capricciosa) finché non arrivi a due item, poi snowball (trasformare un piccolo vantaggio iniziale in uno più grande vincendo i fight successivi) nelle skirmish (scaramucce piccole da 2-4 giocatori, più piccole di un teamfight pieno) usando **Phase (W)** per swappare all'arma giusta per la situazione: **Calibrum** (il fucile) per poke (logorare gli HP del nemico da distanza con danno a distanza) ed execute (finire i bersagli già con poca vita), **Severum** (la pistola-falce) per sustain (curarsi e sopravvivere nei fight prolungati), **Gravitum** (il cannone) per il lockdown (bloccare un nemico abbastanza a lungo da ucciderlo), **Infernum** (il lanciafiamme) per waveclear e AOE da teamfight (area of effect: danno su una zona, non su un singolo target), **Crescendum** (il chakram) per gli spike di DPS (picchi di danno al secondo) a corto raggio.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade è lo starter standard dei marksman: piccolo bonus di Attack Damage (AD), un po' di HP e lifesteal (curi una percentuale del danno che fai con gli auto-attack). Aphelios ha bisogno di ogni punto di AD perché le sue armi consumano munizioni.

**Core items (in ordine):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — primo item meta da DPS. Ti dà crit presto (probabilità che un auto-attack faccia danno extra) e una passiva che aggiunge un sanguinamento sugli auto-attack (danno spalmato nei secondi successivi invece che istantaneo): perfetto per le armi a fuoco rapido (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots di attack speed (più auto al secondo). Default per quasi ogni partita di Aphelios perché tutte le sue armi beneficiano di attack speed extra.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute sotto al 5% HP più Lethality (un tipo di armor penetration che ignora una fetta dell'armatura del bersaglio, particolarmente efficace contro target squishy — campioni con poche difese come ADC e mage). Si sposa con i mark shot di Calibrum (gli auto-attack di Calibrum mettono un "mark" sul nemico: ricolpire il bersaglio marchiato fa danno bonus anche da mezza mappa, inclusa la **R**) che già spaccano i target a HP bassi.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore di crit damage; con due item crit già finiti (Yun Tal + Collector o Yun Tal + RFC), Infinity Edge sblocca il 175% di crit damage e gli auto-attack quasi raddoppiano in burst (il danno che metti fuori in 1-2 secondi).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — range extra sull'auto-attack di Calibrum e sulla prima carica energizzata (RFC carica un auto "energized" ogni pochi secondi mentre ti muovi — quell'auto parte da range esteso e folgora il bersaglio). Sinergia perfetta con il kite (muoverti all'indietro mentre attacchi, mantenendo distanza dalle minacce).

**Swap situazionali:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — sostituisci Rapid Firecannon quando l'avversario accumula armatura (frontline Sion, Ornn, Malphite — frontline = i tank/bruiser che assorbono danno davanti nel fight mentre i carry sparano da dietro).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — stesso slot di Lord Dominik's, prendi questa versione se la squadra avversaria ha forte healing (Soraka, Yuumi, Aatrox, Vladimir): applica Grievous Wounds, che dimezza le cure nemiche.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — sostituisci The Collector quando ti serve sustain in una partita lunga o quando l'avversario ha due assassini puntati sulla tua backline (lo scudo di 7 secondi a HP pieni può salvarti una volta a fight).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot tardivo contro comp da burst AP (Syndra + Veigar + Annie). Lo scudo si attiva sotto soglia HP — cioè quando scendi sotto il 35% di HP — e assorbe danno magico.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — swap di ultimo slot quando una singola catena di CC (suppression di Malzahar, R di Skarner, R di Mordekaiser) decide ogni teamfight contro di te.

**Skill order:** Maxa **Q** per prima (alza il damage dell'attivata di ogni arma), **W** per seconda (swap più rapido = più flessibilità al secondo), **E** per ultima. Metti **R** ai livelli 6, 11, 16 come al solito.

**Runes:** Albero primario **Precision** (costruito attorno agli auto-attack): keystone **Lethal Tempo** (attack speed extra quando combatti i campioni), poi **Presence of Mind** (rimborso mana sui takedown — utile perché la Q costa ammo), **Legend: Bloodline** (più lifesteal che cresce con le kill), **Coup de Grace** (danno extra ai bersagli a HP bassi). Albero secondario **Resolve** con **Second Wind** e **Overgrowth** contro lane di forte poke (Caitlyn, Senna), oppure **Inspiration** con **Magical Footwear** e **Cosmic Insight** quando ti aspetti una lane passiva.

## Matchup chiave

- **Draven:** la lane più dura della mappa. Vince ogni scambio (trade — un breve scambio di colpi e abilità) ai livelli 1-3 ogni singola volta. Stai dietro al support, fai last-hit solo con auto-attack (non bruciare ammo della Q Calibrum sui minion), aspetta il livello 6 per pareggiare lo scambio con la **R**.
- **Caitlyn:** guerra di range. Trap + headshot le permettono di fare poke (logorare i tuoi HP da distanza) anche oltre il range di Calibrum. Swappa a **Gravitum** appena lei si avvicina a una trap; lo slow (effetto che riduce la velocità di movimento) + il root della Q (effetto che blocca il bersaglio sul posto, non può muoversi né dashare) annullano la sua escape.
- **Samira:** vuole fare dive su di te (correre sotto la tua tower per ucciderti nonostante i tiri della tower). Tieni **Severum** per il momento in cui entra in melee (range corto da auto-attack ravvicinato) — la Q AoE ti cura dal chip damage (danno piccolo ma costante che logora gli HP) e il CC del support la uccide se entra troppo in profondità senza poter retrocedere.
- **Jhin:** lui fa più poke pre-6, tu fai più DPS post-6 (lui vince i primi livelli con il danno a distanza, tu vinci dopo il livello 6 con il danno sostenuto). Non scambiare auto per auto in lane (la sua W root e il 4° colpo crit decidono la lane); spingi (push) duro la wave al livello 2 e fai recall (torna in base) sul primo Yun Tal per tornare avanti.
- **Kalista:** è squishy e a corto raggio. Scambia auto con **Calibrum** main + Severum off-hand; la sua catena di dash la costringe nel tuo range, e il mark shot della Q la punisce ogni volta che salta.

## Power spike & condizioni di vittoria

- **Livello 2:** con un'attivata d'arma in più, pareggi gli scambi con la maggior parte degli ADC. La maggior parte delle partite di Aphelios si decidono su chi prende per primo l'all-in (un fight in cui ti impegni totalmente per la kill, senza via di fuga) al livello 2.
- **Livello 6 con Calibrum:** la prima **Moonlight Vigil** con il fucile in main-hand spara mark shot extra a lunga gittata. Se la bot lane avversaria è spinta sotto la tua tower (la loro wave è stata pushata vicino alla tua tower, lasciandoli in posizione vulnerabile), la finestra di **R** + Q da mezza mappa è una kill regalata per un support sveglio.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows finita (~ minuto 12-14):** la lane priority si ribalta (diventi tu la lane che può lasciare per andare ad aiutare altrove senza perdere CS o HP). Puoi spingere (push) la wave verso la tower nemica e contestare drago, e il tuo DPS nelle skirmish fa uno spike forte (un salto netto di potere legato a un milestone di item o livello).
- **Spike a 3 item (Yun Tal + Berserker's + The Collector intorno al minuto 22-25):** Aphelios diventa il marksman con il DPS sostenuto più alto del gioco. Forza i fight sugli obiettivi qui (obiettivi = Dragon, Baron, Rift Herald, tower — bersagli neutrali che danno buff di squadra o pressione sulla mappa) e sta al massimo range di Calibrum mentre la frontline tiene la linea.

## Errori comuni

- **Auto-attaccare i minion con la Q di Calibrum.** Tieni le munizioni della Q per i campioni. La Q di Calibrum è una delle tue poche minacce a lunga gittata; bruciarla sulla wave per fast-push (forzare la wave a crashare sulla tower nemica il più rapidamente possibile) ha senso solo se recalli sullo stesso back, altrimenti lo scambio che concedi è enorme.
- **Non tracciare l'arma successiva in queue.** Lo slot **E** mostra la prossima arma. Controlla sempre prima di committare (impegnarti totalmente in un'azione senza via di ritorno): avanzare mentre swappi a **Severum** quando hai **Crescendum** in queue dopo va bene; fare lo stesso con **Gravitum** in arrivo butta la finestra dell'all-in (i pochi secondi in cui puoi chiudere la kill).
- **Stare fermi nei teamfight.** Aphelios non ha dash. Se stai sullo stesso punto due secondi di fila, qualsiasi cosa mobile (Zed, Diana, Camille) ti cancella. Muoviti lateralmente (strafe) tra ogni auto-attack — passi corti, ma movimento costante.
- **Usare R appena finisce il cooldown.** Il valore di Moonlight Vigil dipende interamente da quale arma hai in main-hand quando la lanci. **R** con Crescendum su un singolo target è sprecata; **R** con Infernum su 4 nemici raggruppati è una quadra kill.
- **Pickare Aphelios contro hard engage.** Questo è un errore di draft, non di gameplay — "engage" è lo strumento di un campione per forzare un fight (es. la Q stun di Leona, la R suppression di Malzahar). Se l'avversario ha Leona + Malzahar mid + Hecarim jungle, non userai mai un'arma. Compensa scegliendo un peeler (un support il cui mestiere è proteggere te dai diver, tipo Lulu o Janna).

## Suggerimento avanzato

Impara il timing del W-cancel su **Phase**: mettere in coda uno swap durante un mark shot di Calibrum ti permette di sparare l'auto in follow-up a lunga gittata con l'effetto della nuova arma (es. swappi a Infernum e il follow-up diventa un cono AoE). Trasformi il mark shot di Calibrum in un burst multi-target che nessun altro marksman può replicare, ed è il singolo vantaggio meccanico più grande che hai sopra un Aphelios casual.
