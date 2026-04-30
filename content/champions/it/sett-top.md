---
title: "Sett Top Build & Guida — Patch 16.9"
slug: "sett-top"
language: "it"
patch: "16.9"
champion: "sett"
role: "top"
last_updated: "2026-04-29"
description: "Guida Sett top lane per League of Legends Patch 16.9: starter kit, build bruiser, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Sett"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Fighter / Juggernaut"
  abilities:
    - key: "P"
      name: "Pit Grit"
      description: "Le auto-attack di Sett alternano sinistro e destro. Il pugno destro è più veloce e forte. A HP bassi guadagna anche health regen extra."
      dd_spell_id: "Sett_Passive"
    - key: "Q"
      name: "Knuckle Down"
      description: "Le prossime due auto-attack infliggono danno fisico bonus su % HP max e Sett guadagna move speed mentre cammina verso un campione nemico."
      dd_spell_id: "SettQ"
    - key: "W"
      name: "Haymaker"
      description: "Passivamente accumula come Grit (una barra di carica nascosta) parte del danno subito. All'attivazione spende tutta la Grit per uno scudo e un pugno: true damage al centro, danno fisico ai lati."
      dd_spell_id: "SettW"
    - key: "E"
      name: "Facebreaker"
      description: "Tira a sé i nemici su entrambi i lati. Se colpisce su entrambi i lati li stuna tutti; se solo su un lato li rallenta soltanto."
      dd_spell_id: "SettE"
    - key: "R"
      name: "The Show Stopper"
      description: "Afferra e sopprime un campione nemico, lo trasporta e lo schianta a terra. Grosso danno fisico AOE e slow nell'area di atterraggio: lockdown single-target più smash di zona."
      dd_spell_id: "SettR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3161", name: "Spear of Shojin" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro lane di kite (Vayne, Quinn, Gnar) — lo slow del dash incolla chi scappa così puoi piazzare il combo Q + E"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "contro matchup squishy o low-armor: il crit garantito sul primo Q empowered apre una finestra di burst extra"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro tanto magic damage o 2+ hard CC nel team avversario (Renekton stun, Camille R) — magic resist più tenacity (riduzione durata CC)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro front line che impila armor (Malphite, Rammus, Shen) — l'armor shred apre i tank al danno auto-attack del team"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Sopravvivi alla early lane, poi snowballa nei teamfight: pesca il carry nemico con R, segui con il pugno true damage di W, e fai frontline su HP bassi per il team."
  weakness: "Nessun escape vero, niente poke a distanza — top laner ranged e kiter che non lo fanno mai avvicinare lo affamano. Con R in cooldown il suo cap in teamfight crolla."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Carry melee senza disengage forte"
      reason: "L'E di Sett li tira fuori dalla finestra del loro dash, le auto-attack empowered di Q mangiano il loro pool di HP basso e R li isola lontano dal team per una kill pulita."
    - examples: ["riven", "renekton", "irelia"]
      archetype: "Bruiser a cooldown brevi che fanno all-in ripetuti"
      reason: "Il loro burst riempie la Grit di Sett (la barra di danno accumulato che alimenta W). Quando W è carica, Sett aspetta la fine del loro combo e li one-shotta con un Haymaker a true damage."
    - examples: ["aatrox", "darius"]
      archetype: "Juggernaut a windup lento e senza dash"
      reason: "Sett vince i trade perché la Q (col destro stronger della passiva) più lo stun della E gli danno una finestra di all-in più stretta del loro Q-combo telegrafato."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top laner ranged o di kite"
      reason: "Non stanno mai fermi abbastanza per farsi prendere da Q + E + R, e lo pokano (lo logorano da distanza) prima del livello 6. Sett non ha dash per chiudere la distanza."
    - examples: ["gangplank", "jayce", "kennen"]
      archetype: "Poker a lunga gittata con waveclear sicura"
      reason: "Spingono Sett sotto torre da lontano, gli negano CS e lo logorano senza mai dargli una finestra di Grit. La gittata della R è inferiore al loro poke."
    - examples: ["fiora", "gwen"]
      archetype: "Duellisti con true damage e mobilità"
      reason: "Il loro kit punisce gli HP pool grossi (vital di Fiora, mist della W di Gwen), quindi le statistiche bruiser di Sett vengono bypassate. Schivano o de-targettano la R con W o Riposte."
---

## Panoramica

Sett è un bruiser AD (un campione melee che fa danno e tanka allo stesso tempo) che ti cammina addosso, mena con entrambe le mani e si rifiuta di morire in silenzio. È un juggernaut (sotto-classe del bruiser: lento ma estremamente durevole) costruito su tre idee: auto-attack alternati con un destro più forte del sinistro, uno scudo a damage-storage chiamato Grit sulla **W** e un'ultimate che fa lockdown single-target su un campione nemico ("lo sfila dal fight" senza scampo) mentre smasha tutti dietro di lui. Il top gli si addatta perché la side della mappa è un corridoio 1v1 lungo dove la sua trade pattern (scambi corti per chippare HP senza all-inare) a corto raggio può davvero piazzare i colpi.

Il piano partita è brutalmente semplice. In lane, premi **Q** prima di ogni auto-attack empowered, cammina avanti, e accendi **E** appena il nemico sbatte un cooldown chiave. A metà partita, carica **W** prendendo apposta del danno e scaricala come finisher a true damage. Nei teamfight, usa **R** come "Show Stopper" — è il termine slang del kit per "fermo immagine sopra al carry": prendi il carry nemico dalla back line (i damage dealer squishy che stanno dietro ai tank) e lo cancelli dalla mappa.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Sustain per il poke pre-livello 2 prima che la Q sia online.

**Item core (nell'ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — ogni stat che Sett vuole in uno slot solo: AD, attack speed, ability haste, move speed on hit. Si incastra con la pattern alternata del destro empowered.
2. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, tenacity (taglia la durata dei CC) e un secondo scudo che si attiva sotto soglia HP. Si stacka con lo scudo della W di Sett per due layer di sopravvivenza.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — trasforma il burst in un sanguinamento spalmato. Permette a Sett di sopravvivere ai primi 1.5 secondi sotto focus, esattamente la finestra in cui la W finisce di caricarsi.
4. ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — basic-attack reset e ability haste. Più uptime di Q, le auto-attack empowered raddoppiano di throughput in un fight.

**Item situazionali:**

- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — al posto di Trinity Force contro lane di kite (campioni come Vayne o Quinn che camminano indietro mentre attaccano, "kitando" Sett). Lo slow attivo incolla chi scappa.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — contro matchup squishy o low-armor: il crit garantito sul primo Q empowered apre una finestra di burst istantanea.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro chi impila armor (Malphite, Shen, Rammus). L'armor shred (un debuff che taglia armor a stack per ogni colpo) apre i loro tank alle auto-attack del team.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro lane AD pesante; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro tanto magic damage o due o più hard CC nel team avversario.

**Skill order:** Massimizza **Q** per prima (danno principale e tool di chase), **E** per seconda (lockdown del combo), **W** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con keystone **Conqueror** (stacka AD/AP a ogni colpo nei trade prolungati — perfetta per i fight a strappo di Sett), **Triumph** (heal sulla kill), **Legend: Bloodline** (lifesteal a stack per il sustain) e **Last Stand** (più danno a HP bassi, esattamente dove Sett vuole stare). Secondario **Resolve** con **Conditioning** (armor/MR bonus dopo il minuto 12) e **Overgrowth** (HP scaling). Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchup chiave

- **Darius:** Skill matchup. Tieni **E** finché non ha piazzato lo sweet spot della Q — tirarlo mentre la sua Q è in cooldown gli toglie l'unico tool di danno. Evita di trade quando hai stack del suo passive bleed (un danno-nel-tempo da Hemorrhage); resetta uscendo per due secondi.
- **Fiora:** Lane persa, scali al teamfight (gioca safe e farma — il tuo kit cresce con gli item, il suo non snowballa altrettanto). Stai vicino ai minion in modo che i suoi dash con **Q** vadano a sbattere su un muro dietro di te, mai isolato. Tieni **W** dopo la sua **R** così lo scudo-burst esce mentre lei vuole farti vital (i quattro punti luminosi sul corpo che lei deve colpire). ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** è obbligatorio qui.
- **Aatrox:** Matchup pari. La sua Q ha sweet-spot a gittata superiore al tuo Q empowered, quindi trade solo quando la sua Q è in cooldown. Usa **E** per interrompere il windup del **Q3**: senza il terzo sweep perde la maggior parte del danno.
- **Mordekaiser:** Matchup duro. La sua **R** ti isola in una gabbia 1v1 dove le sue stat sovrastano le tue; non engagiare da solo dopo il livello 6 senza ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**. Roama mid o river quando ha l'ult; lascia che pushi e torna quando la R è in cooldown.
- **Vayne:** Matchup brutto. Ti kita (cammina indietro mentre attacca — corre più di quanto tu possa rincorrere) con **Q** e ti out-ranga su tutto. Farma sotto torre, chiedi gank al jungler e scala: nel teamfight una **R** sopra di lei chiude la partita anche se vai 0/2 in lane.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Con entrambi i pugni empowered di **Q** e la **E**, hai un all-in vero (committarsi totalmente per la kill, non più scambi corti) per la prima volta. Pusha il livello 1, prendi il livello 2 prima sul rimbalzo della wave e fai trade duro.
- **Livello 6 (R sbloccata):** La prima **The Show Stopper** trasforma ogni passo avanti di troppo del nemico in una kill. Tracca il flash dell'avversario in lane; se è giù, R è una pesca garantita.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 12-14):** Il controllo wave si ribalta. Slow-pusha due wave (lascia che i tuoi minion si accumulino uccidendo solo i loro, senza spingere) nella torre nemica, prendi le plate e ruota su herald o bot side appena la wave crasha.
- **3 item online (~ minuto 22-26):** Con ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** + ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** + ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance**, Sett sopravvive ai primi 2-3 secondi sotto focus. È esattamente il momento in cui la **W** finisce di caricarsi in un finisher a true damage. Forza i fight obiettivo qui.

## Errori comuni

- **Lanciare W presto "per lo scudo".** **Haymaker** scala con la Grit accumulata. Entra prima nel trade, mangia 2-3 abilità nemiche, poi castaa **W** — il pugno true damage centrale è il colpo più grosso di Sett e per contare deve avere Grit piena.
- **Usare R sul tank in front line.** **R** è lockdown single-target — sprecarla sul tank significa che il carry nemico se ne va liscio. Tienila per la back line squishy, anche se ti tocca flashare per arrivarci.
- **Tirare E quando il nemico sta solo da un lato.** Niente stun, solo slow. Se il secondo target non si è ancora committato, tieni **E** per quando un secondo corpo si infila. Una **E** stunnante a 2 target vale due **E** che rallentano e basta.
- **Greedare l'auto destro empowered nei trade.** Il destro alternato più forte è bello ma prevedibile. Non stare fermo ad aspettare che torni: muoviti col bonus move speed di **Q** così il nemico non ti kita.
- **Pickare Sett blind contro top ranged.** "Blind" significa lockare il proprio campione prima di vedere il pick avversario. Sett non ha dash. Vayne, Quinn, Teemo, Jayce lo affamano in lane. Se l'ordine di draft te lo impone, gioca per scaling (diventare più forte con gli item) e aiuto del jungler, non per vincere il matchup 1v1.

## Suggerimento avanzato

Bait la **W** a Grit piena di proposito. Cammina dentro il combo di un melee senza usare lo scudo, lascia che ti scarichino il 50-60% degli HP, poi accendi **W** con scudo pieno e un pugno true damage quasi al massimo. L'avversario si aspetta che tu muoia e va all-in di troppo; il tuo scudo vale più del danno residuo e il tuo pugno trasforma il trade in una kill. Funziona meglio contro bruiser a all-in con cooldown brevi (Riven, Renekton, Irelia) il cui burst riempie la barra di Grit in un colpo solo.
