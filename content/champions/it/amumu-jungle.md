---
title: "Amumu Jungle Build & Guida — Patch 16.9"
slug: "amumu-jungle"
language: "it"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Amumu jungle per LoL Patch 16.9: percorso di clear, build AP-tank (magic damage + tank stats), timing dei gank, matchup chiave, setup della R ed errori frequenti."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Le basic attack maledicono i nemici. I bersagli con Curse subiscono true damage bonus dal magic damage che ricevono — gli spell del tuo team fanno più male."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Skillshot lineare a lunga gittata che trascina Amumu sul primo nemico colpito e lo stunna. Due cariche — una per l'engage, una per il follow-up o per uscire."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Aura toggle che infligge danno % HP massimo ai nemici vicini ogni secondo e refresha Curse su di loro. Consuma mana mentre attiva — spegnila fuori combattimento."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Passiva: subisci meno danno fisico. Attiva: AOE corto raggio. Il cooldown si abbassa ogni volta che Amumu viene colpito, quindi spammala nei fight prolungati."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Stun AOE enorme che blocca tutti i nemici intorno ad Amumu e applica Curse. È il senso del kit — ogni teamfight inizia quando questa connette."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "contro team con tanti melee bruiser (Sett, Darius, Olaf): la burn aura si stacka con W e l'armor extra ti regge il focus della frontline"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "quando 3+ nemici fanno magic damage: lo shred AOE di magic resist amplifica ogni spell del tuo team sui bersagli con Curse"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro burst comp che ti focusano dopo la R (Zed, LeBlanc, Syndra): la stasi ti tiene vivo mentre il team chiude il fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target che apre i fight (Ahri charm, Lissandra R, Morgana Q): lo spellshield blocca l'engage su di te"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Lancia Q dalla fog su un bersaglio chiave, R per bloccare tutti, poi resta sopra la backline avversaria con W che ticka danno % HP mentre Tantrum si abbassa di cooldown ad ogni colpo subito."
  weakness: "Tool di engage prevedibili e con cooldown lunghi. Se Q sbaglia o la R viene rimossa da una Cleanse Summoner, Amumu non ha follow-up — viene kitato finché non tornano entrambe, contribuendo a niente per 90+ secondi."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "Comp da teamfight raggruppata con danno AOE"
      reason: "La R di Amumu prende tutti in un raggio piccolo. Le comp che vogliono combattere raggruppate (Yasuo + Kennen con ult AOE, Katarina che salta tra i bersagli, Miss Fortune Bullet Time) si beccano lo stun insieme e amplificano i loro stessi spell tramite la passive Curse."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Carry immobili senza escape"
      reason: "Q è uno skillshot da 1100 range che trascina Amumu sul primo bersaglio colpito. I carry senza dash o blink (Jinx, Ashe) vengono strappati fuori posizione nel momento in cui si fanno avanti per last-hittare la wave."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "Compagni AP che snowballano sull'engage"
      reason: "La passive Cursed Touch trasforma il magic damage sul bersaglio in true damage bonus. Un team AP-heavy converte un Q-R in kill istantanee perché ogni spell che arriva dopo fa più danno."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Bruiser mobili con parry, immortalità o dash"
      reason: "Fiora con W parra lo stun della Q e te lo riflette, Tryndamere con R ignora il danno mentre la tua W tickka durante la finestra unkillable, Yone con la terza Q dasha fuori dalla portata di Tantrum. Sopravvivono all'engage e ribaltano il fight."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Artiglieria long-range che non deve committare"
      reason: "Pokeano da oltre i 1100 range della Q. Amumu deve camminare nel loro danno solo per minacciare l'engage, e una Q sbagliata vuol dire 25-30 secondi liberi per loro per continuare a pushare la lane o l'objective."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksman con escape integrate nel kit"
      reason: "La E di Ezreal, la W di Tristana e gli hop reset di Kalista escono tutti dal raggio della R di Amumu dopo che la Q connette. Curse va sprecata perché il carry si riposiziona prima che il team possa fare follow-up sullo stun."
---

## Panoramica

Amumu è il jungler engage più semplice del gioco: cammina nella fog of war (la parte di mappa non visibile fuori dalla visione del tuo team), tira **Bandage Toss (Q)**, premi **Curse of the Sad Mummy (R)**, e lascia che il team scarichi il danno. Il kit ha un solo lavoro — aprire il fight alle tue condizioni — e lo fa da una distanza più lunga di quasi qualsiasi altro engage, grazie alla pull da 1100 range. La passive **Cursed Touch** moltiplica i compagni AP trasformando i loro spell in true damage bonus su ogni bersaglio con Curse.

Il prezzo: la R sta su 100-150s di cooldown e la Q è il tuo unico setup. Sbagli e passi 90 secondi a essere kitato, quindi questa guida è costruita intorno alla scelta del *fight giusto* invece che a forzare ogni gank. Game plan: clear, arriva al livello 6, poi traduci ogni R in una kill o un objective per i 25-30 minuti successivi.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade è l'item da jungler: danneggi i mostri neutrali velocemente e applica un breve slow sui campioni nemici. Refillable è una pozione che si ricarica gratis in base, così risparmi gold quando prendi chip damage (piccoli colpi) sui camp (gruppi di mostri neutrali della jungla).

**Core items (in ordine):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — il singolo item più importante. Il burn % HP massimo somma con quello della W, sciogliendo i tank che provano a stare nella tua aura. Compralo ogni partita.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots di default: danno **tenacity** (una stat che riduce la durata di stun e slow subiti), molto importante per un engage che deve continuare a camminare dopo che la R connette. Cambia in ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se il team avversario ha 3+ minacce AD e nessuna catena di hard CC.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (curi su tutto il danno che fai) più una passiva che converte parte del danno in true damage dopo 3 secondi in combat. Si sposa con la W che fa danno costante.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling late-game. Con Liandry's + Riftmaker online, Deathcap porta la W da "fastidiosa" a "non posso stare qui 2 secondi".

**Situational items:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — contro team con tanti melee bruiser (campioni corpo-a-corpo che mescolano danno e durata, es. Sett, Darius, Olaf). L'aura di fuoco si somma a quella della W per AOE doppio, e dà armor extra.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — quando 3+ nemici fanno magic damage. Riduce il magic resist dei nemici vicini, così ogni spell che il tuo team lancia sui bersagli con Curse fa più male.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro burst comp che ti focusano l'attimo che la R atterra (Zed, LeBlanc, Syndra). La stasi (una finestra di 2.5s in cui non puoi subire danno né agire) ti tiene vivo mentre il team chiude il fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico single-target a lunga durata (Ahri charm in all-in, Lissandra R, Morgana Q). Lo spellshield (una barriera monouso che blocca il prossimo spell indirizzato su di te) mangia l'engage.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sono il default. Plated Steelcaps solo contro comp AD-heavy senza grandi catene di CC.

**Skill order:** Maxa **E** per prima (velocità di clear e damage nei fight prolungati), **Q** seconda (gank threat e cooldown stun più basso), **W** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Aftershock** (ti dà armor e magic resist bonus per 2.5 secondi quando connetti uno stun di Q o la R — la rune di engage del gioco), **Font of Life** (i tuoi CC marcano i nemici e i tuoi alleati guariscono colpendoli), **Conditioning** (resist extra dopo il minuto 12), **Revitalize** (potenzia gli scudi e le cure su di te). Secondary **Sorcery** con **Manaflow Band** (mana sustain così puoi tenere W attiva durante i clear) e **Transcendence** (ability haste extra — una stat che abbassa il cooldown di tutte le tue abilità).

## Matchup chiave

- **Lee Sin / Elise:** Jungler early-game che invadono il tuo lato debole. Tracciali con **ward** (oggetti di visione che rivelano un'area per ~90 secondi) su raptor e red buff (camp della tua jungla). Evita di duellarli prima del livello 3; fai un full clear (uccidi ogni camp una volta) e vai su Scuttle (il granchio sul fiume che dà visione).
- **Master Yi / Karthus:** Jungler scaling. Forza fight e objective (Drake bot, Rift Herald top, Baron dopo) prima del minuto 18 — tu scali bene, loro scalano meglio. Ogni R deve mirare al loro carry (marksman o burst mage in backline che fa la maggior parte del danno), non al tank davanti, così non hanno niente da peelare.
- **Hecarim / Volibear:** Engage speculare, clear più veloce. Gioca attorno ai tuoi laner e cerca un gank dove hai prio (la lane sta spingendo verso il nemico) entro il minuto 4.
- **Maokai / Sejuani:** Tank jungler con la loro AOE engage. Chi connette la R per primo vince il teamfight. Tieni la **Q** per dopo che committano: il tuo stun si somma al loro e il nemico resta bloccato per la durata totale di entrambi.
- **Kha'Zix / Rengar:** Assassini che burstano la tua backline. Body-blocca per i tuoi carry (mettiti tra l'assassino e il damage dealer per assorbire i colpi) invece di stare davanti al team avversario — la W aura più la E Tantrum li puniscono per aver committato vicino a te.

## Power spike & condizioni di vittoria

- **Livello 3:** Con **E**, **W** e **Q** tutte sbloccate, la prima minaccia di gank (la visita a sorpresa del jungler in lane per fare una kill) è reale. Guarda la lane con il nemico più basso di HP e il follow-up CC più forte alleato; una rotation Q-W-AA-E (AA = auto-attack) sotto un alleato che sta snowballando (vantaggio che cresce nel tempo: kill → gold → item → nuova kill) di solito è una kill.
- **Livello 6:** Prima **Curse of the Sad Mummy**. È il singolo power swing più grande del gioco per Amumu. Trova un fight entro 30 secondi dal raggiungere il 6 — ganka una lane, contesta Scuttle, o prepara il primo Drake.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completo (~ minuto 12-14):** La tua W passa da poke (danno a distanza per logorare) a vera minaccia. Combattere per Drake o Rift Herald con W che fa danno costante su un bersaglio in contesa vince l'objective senza neanche premere R.
- **3-item spike (~ minuto 22-26):** Liandry's + Riftmaker + Deathcap online. Il cooldown di R è abbastanza basso da poter combattere in teamfight due volte per ogni timer di Baron. Forza ogni objective; questo è il tuo picco.

## Errori comuni

- **Tirare Q in cooldown senza setup.** Una Q nuda spreca il tuo unico tool di engage. Tieni la Q finché il nemico non è già rallentato, rootato (non si può muovere) o agganciato da un alleato — es. la Q di Morgana atterra → la tua Q sopra è garantita. Q usata per "vedere se prende" vuol dire niente quando arriva il fight vero.
- **Premere R appena arrivi al fight.** R è AOE *centrata su Amumu*. Se la premi 200 unità più corto, non stunni nessuno e sprechi il cooldown da 100-150s. Cammina dentro fino a essere nella loro backline, *poi* R.
- **Lasciare W attiva fuori combat.** **Despair** consuma 8 mana al secondo anche se non hai nessun nemico vicino. Arrivi al minuto 8 senza mana per uno stun di Q su un gank pulito. Disattivala l'attimo che il fight o il clear finiscono.
- **Ignorare il reset di cooldown di Tantrum.** La passiva di **E** abbassa il suo stesso cooldown ogni volta che subisci una basic attack. In un fight lungo contro melee, puoi premere E ogni 1-2 secondi — resta nel loro range di attacco e continua a usarla.
- **R sul tank invece che sul carry.** R è un'abilità da teamfight. Sì il tank è più vicino, sì la prendi su di lui — ma il team vuole lo stun sul carry. Tieni **Flash** (la Summoner Spell che ogni champion sceglie e che ti teletrasporta una distanza breve una volta ogni ~5 minuti) per flankare (entrare nel fight da un lato o da dietro, non frontalmente) sulla backline invece di engagare di fronte.

## Suggerimento avanzato

Allena la combo **Flash + Q** sul training dummy. Il trucco: lancia la Q, *poi* premi Flash a metà animazione nella direzione del bersaglio. L'animazione di pull si riaggancia alla tua posizione post-Flash, dando un proiettile più corto di 425 unità praticamente impossibile da schivare. Trasforma la Q da skillshot da 1100 range in stun garantito a bruciapelo: ti permette di entrare nella backline attraverso la fog e connettere Q su un bersaglio in movimento che non ha mai visto arrivare l'engage.
