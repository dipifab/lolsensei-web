---
title: "Vayne Bot Build & Guide — Patch 16.9"
slug: "vayne-bot"
language: "it"
patch: "16.9"
champion: "vayne"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Vayne bot lane League of Legends Patch 16.9: starter kit, build hyperscaler on-hit, matchup chiave, power spike, errori comuni e una tip finale."
quick_learn:
  champion_dd_id: "Vayne"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Hyperscaler"
  abilities:
    - key: "P"
      name: "Night Hunter"
      description: "Vayne guadagna Move Speed quando si muove verso un nemico vicino. Pressione di chase gratuita se il fight gira a tuo favore."
      dd_spell_id: "Vayne_Passive"
    - key: "Q"
      name: "Tumble"
      description: "Dash breve in una direzione. Il prossimo basic attack entro pochi secondi infligge danno fisico bonus. Usalo per riposizionarti tra le auto."
      dd_spell_id: "VayneTumble"
    - key: "W"
      name: "Silver Bolts"
      description: "Passiva: ogni terzo hit consecutivo (auto o ability) sullo stesso target infligge true damage basato sulla max HP del bersaglio. Vera fonte di danno contro tank."
      dd_spell_id: "VayneSilveredBolts"
    - key: "E"
      name: "Condemn"
      description: "Bolt mirato che spinge il nemico indietro. Se collide con un muro, lo stunna e infligge danno bonus. Tool di self-peel e di esecuzione a muro."
      dd_spell_id: "VayneCondemn"
    - key: "R"
      name: "Final Hour"
      description: "Buff che dà AD bonus, durata estesa di Night Hunter, cooldown ridotto su Tumble e invisibilità durante Tumble. La finestra in cui Vayne diventa minaccia 1v9."
      dd_spell_id: "VayneInquisition"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3153"
      name: "Blade of the Ruined King"
      against: "contro front line tanky o comp che impilano HP (Sion, Cho'Gath, Dr. Mundo): l'on-hit % HP corrente si somma al true damage di Silver Bolts"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro pressione di assassini o diver (Zed flank, Samira, Yasuo): la passiva sotto soglia HP ti dà mezzo secondo per E-arli su un muro"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Aatrox): applica Grievous Wounds, taglia healing appena tocchi il target"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro comp di hook o pickoff (Blitzcrank, Thresh, Morgana Q): lo spell shield mangia un CC prioritario prima che ti burstino in lane"
  base_combo: ["Q", "AA", "AA", "AA", "E"]
  win_condition: "Sopravvivi alla lane fino a due item, poi scala col true damage di Silver Bolts e l'invisibilità di Final Hour. Kita i diver con Q-AA loop ed E-li sui muri nei teamfight."
  weakness: "Range auto-attack corto e burst nullo pre-item. Hard counter di poke a lunga gittata e enchanter da disengage; se Final Hour è in cooldown una catena di CC ti elimina."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sion", "cho-gath", "dr-mundo"]
      archetype: "Tank o front line che impilano HP"
      reason: "Silver Bolts infligge true damage % max HP ogni terzo colpo. Più grande è la barra HP, meglio scala la W di Vayne: questi target fondono attraverso armatura e gear HP che fermerebbero altri ADC."
    - examples: ["yasuo", "samira", "tryndamere"]
      archetype: "Diver melee che entrano in range di Condemn"
      reason: "Il loro engage richiede di chiudere a corto raggio. Vayne li può E su un muro laterale per uno stun da 1.5s, poi Q indietro per resettare lo spacing: bruciano i dash e non ottengono nulla."
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Lane bully early che fall-off"
      reason: "Se Vayne sopravvive alla lane fino al minuto 14-16 e prende il suo two-item spike, questi carry early a corto raggio perdono la corsa al danno late: lei scala più forte con lo stesso oro."
  counterpicks:
    - examples: ["caitlyn", "ashe", "varus"]
      archetype: "Marksman a lunga gittata con poke sicuro"
      reason: "Auto-attaccano e pokano con Q da fuori del range 550 di Vayne. Ogni wave le tagliuzzano HP senza commit: lei non ha risposta perché Tumble non estende il range base."
    - examples: ["lulu", "janna", "milio"]
      archetype: "Enchanter support con disengage e peel"
      reason: "In lane contro Vayne, un duo ADC + enchanter scuda i trade a zero e fa slow-push. Vayne vuole trade brevi sui propri timing: i tool di disengage negano quel pattern e impongono una farm lane debole."
    - examples: ["ezreal", "xerath", "ziggs"]
      archetype: "Skirmisher con poke kitato"
      reason: "Mantengono distanza con dash o range artillery. Vayne non chiude la distanza prima di due item, e il loro poke le toglie tutta la barra HP prima che arrivi alle finestre di Final Hour."
---

## Panoramica

Vayne è il manuale del marksman **hyperscaler** (campione che diventa più forte a ogni item: debole all'inizio, devastante nel late): ADC a corto raggio, senza waveclear e con quasi zero pressione di lane early, che in cambio diventa uno dei più alti damage dealer 1v1 del gioco una volta arrivata a due item con **Final Hour (R)** attiva. Il suo kit ruota intorno a tre idee semplici: dash brevi di riposizionamento con **Tumble (Q)**, true damage % max HP ogni terzo hit con **Silver Bolts (W)**, e un knockback che stunna se collide con un muro tramite **Condemn (E)**. È squishy (un campione ad alto danno e poche difese, come quasi tutti gli ADC) e ha range corto, quindi la lane è un esercizio di sopravvivenza: non morire, raggiungere due item, e poi prendersi la mappa.

Il piano partita è paziente e meccanico: farma in sicurezza dietro il tuo support, cerca giocate di livello 6 (combo **Final Hour** + **E** sul muro) solo quando l'ADC nemico fa overcommit (si spinge troppo avanti senza copertura), e inizia a scalare. Dopo **Kraken Slayer** e **Runaan's Hurricane** la curva di danno si ribalta: superi in DPS la maggior parte delle front line (i tank e bruiser che aprono il fight) perché il true damage di Silver Bolts ignora l'armatura. Dal minuto 18 in avanti sei la win condition — il team ti deve fare peel (proteggerti da chi ti attacca) mentre kiti i diver (ti muovi all'indietro continuando ad attaccare, così il melee nemico non ti raggiunge) con loop **Q**-auto e chiudi il fight sotto invisibilità di Final Hour.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Evita la seconda Doran's anche se sei avanti — ogni 450 oro risparmiato va in una B. F. Sword per Kraken Slayer.

**Item core (nell'ordine):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first-item rush. Il proc a tre stack (passiva di un item che si attiva in automatico — qui, ogni terzo attacco scarica true damage bonus) si allinea perfettamente con la cadenza terzo hit di Silver Bolts: ogni quarto o quinto auto-attacco fai true damage bonus sopra al proc di W. Insieme sono il motivo per cui Vayne fonde i tank.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots da attack speed. Mercury's Treads solo se la squadra avversaria ha 3+ minacce di hard CC mirate su di te.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — attack speed extra più due bolt aggiuntivi che proccano on-hit (effetti che scattano quando colpisci con un basic attack: Silver Bolts e Kraken Slayer compresi). Trasforma Vayne da carry single-target a macchina AOE (danno su area, non su un singolo bersaglio) nei teamfight.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — il tuo più grande damage spike fisico. Lo scaling crit sopra Kraken Slayer + Silver Bolts è il momento in cui l'ADC nemico non può più batterti in DPS in nessun trade prolungato.

**Item situazionali:**

- ![Blade of the Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of the Ruined King** — contro front line tanky (Sion, Cho'Gath, Dr. Mundo). Sostituisci **Runaan's Hurricane** se la squadra avversaria ha 3+ tank, perché l'on-hit % HP corrente di Botrk si somma al true damage di Silver Bolts.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contro pressione di assassino o diver su di te (Zed flank, Samira, Yasuo). La passiva sotto soglia HP (uno scudo che si attiva quando vai sotto soglia) più la velocità di movimento ti danno il mezzo secondo per **E** il diver su un muro.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni che impilano cure (Soraka, Vladimir, Aatrox). Applica Grievous Wounds appena tocchi il target, tagliando le cure per tutto il fight.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro composizioni di hook o pickoff (Blitzcrank, Thresh, Morgana Q). Lo spell shield mangia un CC prioritario prima che ti burstino; in quei matchup è la differenza tra vivere e morire.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default. Mercury's Treads solo contro multipli minacce AP CC come Brand o Zyra support.

**Skill order:** Massimizza **Q** per primo (Tumble in cooldown ridotto = più riposizionamento per fight), **W** per secondo (il true damage scala col rank), **E** per ultimo (il cooldown conta più del danno, e si abbassa con il rank di **Final Hour**). Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Resolve** con **Bone Plating** e **Overgrowth** per la sopravvivenza in lane che ti permette di arrivare allo scaling. Stat shards: Attack Speed, Adaptive Force, Health Scaling — lo shard AS accelera il primo proc di Silver Bolts, Overgrowth alimenta la pool HP late game.

## Matchup chiave

- **Caitlyn:** Pesantemente Caitlyn-favored prima del livello 9 e la lane che vedrai più spesso. Non scambiare auto pre-3: il suo range è 650 contro i tuoi 550 (un trade è uno scambio breve di colpi in lane, non un all-in completo). Tieni la wave vicino alla tua torre, farma con dash di **Q** per last-hit (uccidere un minion con il colpo finale per prendere il gold) in sicurezza, sopravvivi al minuto 14. Dopo il primo item la lane si pareggia; dopo due item le superi in DPS in qualsiasi fight prolungato.
- **Draven:** Leggermente sfavorevole ai livelli 1-3 perché il burst (danno alto concentrato in 1-2 secondi) di Spinning Axe ti supera nei trade. Non lottarci pre-3; freezza la wave vicino alla tua torre (tieni la linea di minion ferma in un punto, senza farla muovere), arriva al livello 3 con tutte e tre le ability, e scambia solo quando il boost di velocità della sua W è in cooldown. Chiedi al support di wardare il river — lo spike di Draven adora i gank (un attacco a sorpresa del jungler che arriva dal river).
- **Jhin:** Matchup pari deciso dallo schivare la sua **R**. Rispetta il quarto proiettile (fa danno enorme). Quando la sua **W** è giù, cammina avanti e scambia. Usa **E** per interrompere il channel della sua **R** se ulta attraverso la lane.
- **Samira:** Vuole un all-in melee (impegno totale fino alla kill, senza disimpegno possibile) una volta che ha la W per nullificare le tue auto. Posizionati dietro i minion così la W stagger viene rotta dai tiri dei minion, tieni **E** come knockback per l'istante in cui dasha dentro (non sprecarla nel poke — danno a distanza per logorare l'HP senza committare), e non lottarci con la passiva di Phantom Dancer in cooldown.
- **Lucian:** Pesantemente Lucian-favored ai livelli 1-6. La passiva double-shot più il dash burst ti taglieranno in ogni trade. Gioca sotto torre, warda il bush della lane, e chiedi al jungler di campare la lane early — Lucian fall-off forte dopo il minuto 20 e Vayne lo supera scalando.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in **W**, il proc al terzo hit sullo stesso target taglia una percentuale significativa di HP a un ADC nemico distratto. Non guidare i trade — reagisci al nemico che fa un passo avanti per last-hit e fai burst del terzo proc con un reset di auto via **Q**.
- **Livello 6:** Prima **Final Hour** sblocca la pressione di all-in e l'invisibilità di **Q**. Lancia **R** come tool di engage (l'abilità che apre il fight), **Q** dietro una linea di minion per scomparire dalla vision, e re-engage da un angolo inaspettato. Non sprecare **R** su una wave in slow-push (una wave che spingi lentamente verso la torre nemica) — aspetta una finestra di trade breve in cui il nemico è over-extended (troppo avanti in lane senza via di fuga).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completo (~ minuto 12-14):** L'item che pareggia la lane. Il tuo DPS prolungato ora supera la maggior parte dei lane bully early. Forza fight obiettivo su Drake o Rift Herald — contribuisci con danno significativo agli obiettivi e ai teamfight per la prima volta nella partita.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 22-26):** La soglia di hypercarry. I crit trasformano il terzo hit di Silver Bolts in una quasi-esecuzione sugli squishy. Da qui in poi il tuo lavoro è giocare da back line carry (il damage dealer che resta dietro, lontano dal corpo a corpo): stai nella seconda posizione più arretrata, kita con **Q**, e lascia che il team ti faccia peel.

## Errori comuni

- **Scambiare auto in lane pre-2 item.** Vayne ha 550 di range e zero burst pre-Kraken Slayer. Ogni auto-attack che scambi con una Caitlyn, un Draven o un Lucian ti costa più HP di quanto costi a loro. Farma con dash di **Q** e accetta un deficit di 20-30 CS al minuto 10 — lo spike te lo recupera.
- **Usare E offensivamente per aprire il fight.** **Condemn** è un knockback. Se E un nemico in spazio aperto, lo spingi via dal tuo support — esattamente l'opposto di quello che vuoi in lane. **E** serve per gli stun a muro (spingerli all'indietro contro il terreno) e per self-peel sui diver, non come tool di danno in piano.
- **Tumblare verso il nemico nei fight.** **Q** è per riposizionarsi tra le auto, non per chiudere distanza in un teamfight 5v5. Tumbla **lontano** dalle minacce continuando a sparare sul tuo target — l'auto bonus colpisce comunque anche se dashi all'indietro, e resti fuori dal gap-close dell'assassino.
- **Lanciare R come damage steroid in un fight perso.** **Final Hour** è un tool di rampa: AD bonus per ~10 secondi, esteso sui takedown. Non accenderla pre-engage al 30% HP con il team morto. Tienila per un fight che puoi davvero vincere, dove estendere la durata con kill è realistico.
- **Ignorare la vision prima di splitpushare.** Errore classico mid-rank: Vayne arriva a 3 item e cammina in side lane per splitpushare (spingere una side lane da sola per costringere l'avversario a rispondere) senza ward. Vayne è particolarmente vulnerabile ai flank perché non ha escape oltre la breve distanza di **Q** — senza vision sul river una catena di CC ti chiude la partita.

## Suggerimento avanzato

Allena il drill della **line of sight di Condemn sul muro** in practice tool. Cammina nella bot lane di Summoner's Rift e identifica i quattro o sei muri di terreno entro un raggio di 550 unità da ogni posizione di farm — gli angoli del bush della lane, il muro dei raptor sul lato blue, il muro del tri-bush, il pezzo di terreno tra la bot lane e il pit del Drake. Interiorizza l'angolazione da ogni spot al muro più vicino. In partita, quando un assassino ti casca addosso, la tua reazione non deve essere "dov'è il sicuro?" — deve essere riflessiva: **Q** di lato per prendere l'angolo, **E** sul muro che hai già memorizzato, poi **Q** indietro per resettare lo spacing. Uno stun a muro pulito su uno Zed o uno Yasuo a metà engage spesso trasforma una morte in una kill sul posto, perché lo stun da 1.5s basta al tuo support per finirli mentre la tua **W** procca true damage % max HP.
