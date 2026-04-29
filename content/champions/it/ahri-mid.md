---
title: "Ahri Mid Build & Guida — Patch 16.9"
slug: "ahri-mid"
language: "it"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Ahri mid lane per League of Legends Patch 16.9: starter kit, build mago/assassino, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Assassino"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Si cura dopo aver ucciso 9 minion o mostri di jungle; cura maggiore quando partecipa a un takedown su un campione. Sustain in lane che scala col farm."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Skillshot lineare che lancia un orbo e lo richiama. Danno magico all'andata, danno true al ritorno. Strumento principale di waveclear e poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Rilascia 3 fox-fires che si auto-targettano sui nemici vicini; il primo colpo fa danno pieno, gli altri ridotti. Dà anche un breve boost di Move Speed."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot che incanta il primo nemico colpito — cammina inerme verso Ahri subendo danno magico. Strumento di setup, mai poke a freddo."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Fino a tre dash brevi in una finestra ristretta, ognuno spara colpi auto-targetati. I takedown estendono la finestra di recast. Mobilità più execute."
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Fizz) — la stasi ti fa sopravvivere dopo aver committato R in un teamfight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena qualunque target prioritario compra Resistenza Magica (Mercury's Treads + item MR)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "primo item alternativo se la squadra avversaria ha 4+ target squishy da one-shottare — pick ceiling più alto, danno sostenuto inferiore"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charma un target squishy, dasha dentro con R, scarica W e la Q di ritorno per il danno true, poi scappa con i dash residui di R. Trasforma ogni pickoff nel prossimo dragone o roam."
  weakness: "Senza Charm non c'è burst. Se E va a vuoto sprechi tutto il combo; se R è in cooldown non hai escape e qualunque hard CC ti elimina."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Mage immobili senza dash"
      reason: "La E (Charm) di Ahri è uno skillshot a lunga gittata che blocca il bersaglio. Chi non ha dash o stealth viene incantato su una linea pulita e mangia tutto il combo R + Q + W prima di poter uscire dal range."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Carry da retroguardia senza escape"
      reason: "Spirit Rush dà ad Ahri tre dash che si resettano sui takedown — può tuffarsi oltre la front line, eliminare un carry immobile e dashare via prima che arrivi il peel."
    - examples: ["malzahar", "vladimir"]
      archetype: "Mage da danno sostenuto senza burst"
      reason: "Il burst di Ahri da combo R completa li elimina in meno di un secondo, prima che il loro danno sostenuto o le cure facciano in tempo a stackare in uno scambio significativo."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champion con Wind Wall"
      reason: "Il loro Wind Wall blocca Charm e l'orbo di Q. Ahri perde sia lo strumento di setup sia il poke principale — deve entrare dentro il muro per colpire qualcosa, che è esattamente dove la vogliono loro."
    - examples: ["fizz", "kassadin"]
      archetype: "Assassini mobili con mitigazione magica"
      reason: "Fizz schiva i bolt della R con la sua E e la passiva riduce il burst magico; Kassadin ha uno scudo contro danno magico più un blink. Ahri scarica un combo intero e loro sopravvivono con un filo di HP, poi la uccidono nel frame di recovery."
    - examples: ["lissandra", "galio"]
      archetype: "Mage anti-assassino con hard CC"
      reason: "Il loro hard CC prende Ahri a metà R: un singolo root o taunt durante la finestra di dash cancella sia il danno che l'escape, trasformando un tentativo di pickoff in una kill gratis per loro."
---

## Panoramica

Ahri è un mago-assassino mid: fa poke da distanza come un mage (poke = colpi a distanza per logorare gli HP del nemico), ma **Spirit Rush (R)** le permette di tuffarsi su un singolo bersaglio squishy (un campione fragile, tipo ADC o mage), ucciderlo e dashare via — uno schema chiamato **pickoff** (eliminare un nemico isolato). Il kit (l'insieme delle abilità del campione) ruota intorno a **Charm (E)**, lo skillshot che blocca il bersaglio in posizione: ogni altra abilità è costruita per concatenarsi su quel singolo colpo. La **R** ha una particolarità: ogni takedown su un campione resetta uno dei dash, quindi un pick andato a buon fine permette di concatenarne un secondo nello stesso fight.

Il piano partita è pazienza, poi commit (impegno totale in un combo senza marcia indietro). **Farma** con **Q** (uccidi minion per gold ed esperienza), piazza ward (sentinelle di visione) sul river, e aspetta che il nemico finisca in una posizione prevedibile prima di tirare **E**. Una volta che **Charm** atterra, il resto del combo è meccanico: tira il bersaglio con l'orbo di ritorno della **Q**, scarica **W** per il danno auto-seeking, e usa **R** per chiudere la distanza o per scappare. Dal livello 6 in poi diventa una delle migliori champion da **roam** del gioco (lasciare la propria lane per andare ad aiutare top o bot) — ogni spawn di dragone è un'occasione per ribaltare la mappa.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring è lo starter standard del mage: piccolo bonus di AP (Ability Power, la stat che scala il danno magico), HP extra, e rigenerazione di mana per spammare la **Q** in early lane.

**Item core (nell'ordine):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike di burst sul primo colpo di ogni abilità e il sustain di mana (rigenerazione di mana che ti evita di restare a secco) per spammare **Q** a ogni cooldown. Obiettivo gold prima del minuto 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration fissa (il tuo danno ignora una quota fissa della Resistenza Magica del nemico).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con una passiva che si attiva quando il bersaglio è sotto il ~35% di HP, perfetta per allinearsi col combo di execute della **R** (finire un nemico già a basso HP).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game. Aumenta l'AP totale del 35%, raddoppiando di fatto il danno che ogni item precedente aggiunge al combo.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver (champion che si tuffano per uccidere un bersaglio e scappare) e assassini (Zed, Diana, Talon, Fizz). L'attiva ti trasforma in una statua dorata intoccabile (stasi) per 2.5 secondi, e ti fa sopravvivere dopo aver committato **R** in profondità in un teamfight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (CC = crowd control: stun, root, qualsiasi cosa ti immobilizzi). Lo scudo blocca la prima abilità che ti immobilizzerebbe.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena qualunque target prioritario compra Resistenza Magica (tipicamente Mercury's Treads + un item MR).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — primo item alternativo quando la squadra avversaria ha 4 o più target squishy da one-shottare. Cede danno sostenuto in cambio di un tetto più alto sul singolo pick.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo se la composizione avversaria ha catene multiple di hard CC puntate su di te (hard CC = stun, root, knock-up, taunt — il tipo di CC che ti toglie completamente il controllo del campione).

**Skill order:** **Q** prima (waveclear — ripulire le wave di minion — e main DPS, damage per second), **W** seconda, **E** ultima — il danno base scala poco, conta solo la durata del charm. Punto in **R** ai livelli 6, 11 e 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet** (proiettile magico bonus su ogni hit di abilità), **Manaflow Band** (più mana massimo), **Transcendence** (ability haste — riduzione cooldown su tutte le spell), **Scorch** (danno bonus periodico, ottimo per harass — pokare l'HP del nemico per logorarlo). Secondario **Inspiration** con **Magical Footwear** (stivali gratis al minuto 12 circa) e **Cosmic Insight** (più ability haste, anche su **Flash** — il summoner spell di teleport breve).

## Matchup chiave

- **Yasuo / Yone:** Entrambi possono Wind Wall la tua **Q** e la **E** in volo (Wind Wall è un muro che piazzano e che blocca tutti i proiettili che lo attraversano). Tieni **E** finché non hanno bruciato un'abilità, e farma a max range con **W** — i tre fox-fires si auto-targettano e passano oltre il muro, sono il tuo unico strumento di danno sicuro contro il Wind Wall.
- **Zed:** Una lane testa-o-croce che si decide sugli item. Pre-6, avvicinati solo quando la sua **Q** è visibilmente in cooldown. Dal livello 6, tieni **R** per dashare fuori dalla sua ulti — committare **R** offensivamente e poi non avere escape quando arriva la sua ulti è il modo più veloce di buttare la lane.
- **Galio:** Ti punisce se ti raggruppi — la sua **W** taunta i bersagli vicini ai suoi alleati. Pusha la wave con **Q** e roama in side lane, dove la sua ulti non lo segue alla velocità dei tuoi tre dash.
- **Twisted Fate:** Gara di rotazione. Lui ha pressione globale con la **R**, tu hai mobilità a tre dash — minaccia pari. Pusha ogni wave con **Q** appena la sua ulti è up, e ward su entrambe le entrate del river così rispondi con ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** se prova a fare gank (jungler avversario in lane per ucciderti).
- **Cassiopeia:** Outscala (cresce di più in late-game) negli scambi prolungati perché la sua **W** ti nega i dash della **R** (non puoi dashare attraverso la sua zona di grounding). Fai trade solo brevi (un trade = breve scambio di abilità e auto-attack, non un combattimento totale), e mai committare **R** offensivamente quando la sua **W** è up.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q + E** sbloccate hai gli strumenti per una kill in lane se il nemico passa il limite. Tieni **E**, avvicinati come per last-hittare (dare il colpo finale al minion per ottenere il gold), poi tira il charm appena entra nel range della tua auto-attack.
- **Livello 6:** Prima **Spirit Rush** sblocca il potenziale di pickoff. Il combo **E → R → W → Q** elimina qualunque squishy che non abbia comprato un solo item difensivo.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** Il controllo della wave si ribalta — puoi fare push (spingere la wave a tutta velocità verso la torre nemica) e roam a ogni cooldown. Qui si attiva la tua win condition: roam, charm, kill, dash via. Ogni pickoff porta a uno **snowball** (vantaggio crescente nel tempo): il gold della prima kill compra un item che rende la kill successiva più facile.
- **Spike a tre item (~ minuto 24):** Con i tre item core online, il tuo combo **R** completo elimina qualunque campione di back line (i carry — ADC, mage — che stanno dietro ai tank) sotto il 70% di HP. Forza i fight obiettivo qui (5v5 per dragone, Baron o torri).

## Errori comuni

- **Tirare E di poke senza setup.** **Charm** nuda ha un proiettile lento e un cooldown lungo — la maggior parte dei mid avversari la schiva di reazione. Usa una wave o un minion come copertura e mira al percorso obbligato che devono fare per last-hittare.
- **Usare R per engage (iniziare il fight) invece che per finire.** **Spirit Rush** è il tuo unico escape. Se dashi dentro senza un bersaglio che sai per certo morirà, regali la finestra di dash e muori tu quando il loro team converge addosso (i loro alleati ruotano per chiuderti perché ora sei fuori posizione).
- **Spammare Q di poke e andare OOM.** OOM significa "out of mana": senza mana non casti spell e diventi inutile per 30 secondi. **Orb of Deception** costa parecchio mana per cast: tienila per il waveclear e per scambi sicuri.
- **Dimenticare che R si resetta sul takedown.** Quando chiudi una kill durante **Spirit Rush**, la finestra di recast si estende. Chi lo interiorizza concatena un pick nel successivo nello stesso fight invece di dashare via subito dopo la prima kill.

## Suggerimento avanzato

Allena il **combo Q-back**: lancia **Q** di fronte al bersaglio, poi usa subito **R** per dashare attraverso di lui. L'orbo nel suo percorso di ritorno passa ora dal nemico a distanza ravvicinata, infliggendo la quota di danno true (true damage ignora qualunque resistenza nemica — anche un tank lo prende intero) mentre tu sei già in melee con **W** che fa fuoco. Una sequenza **Q + R + W** giocata così piazza tre istanze di danno in meno di un secondo — molto più burst di quello che il combo da manuale **E → R → W → Q** suggerisce, e funziona anche quando **Charm** è ancora in cooldown.
