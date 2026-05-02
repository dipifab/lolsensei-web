---
title: "Galio Mid Build & Guida — Patch 16.9"
slug: "galio-mid"
language: "it"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "Guida Galio mid lane per League of Legends Patch 16.9: starter kit, build AP-tank, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Ogni pochi secondi la prossima auto-attack di Galio infligge danno magico bonus in una piccola area al colpo."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Due raffiche che convergono in un tornado nel punto bersaglio, infligge danno magico nel tempo. Tool principale di waveclear e poke."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carica uno scudo che assorbe danno magico; rilascia per taunt e danno area. Charge time lungo — non spararla a vuoto."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Breve passo indietro, poi dash in avanti che knockup il primo campione nemico colpito. Engage e gap-close primario."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa un alleato; dopo un ritardo Galio atterra sulla sua posizione, scuda gli alleati nell'area e knockup i nemici."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro front line con tanti HP (due o piu tank tipo Cho'Gath, Sion, Dr. Mundo) — il burn percentuale cresce in fight lunghi"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "quando hai un kill lead iniziale (3+ kill prima del minuto 12) — AP economica per stack che premia gli engage aggressivi"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "swap appena un target prioritario compra un item di MR; accoppia con Sorcerer's Shoes per pen mista"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini che follow-up dopo il tuo engage (Zed, Talon) — la stasi copre la finestra di cooldown post-R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target che ti bloccano in carica W (Malzahar suppress, Lissandra R, Twisted Fate stun)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Usa Hero's Entrance per ribaltare side lane e skirmish del drago una volta online Riftmaker. Nei teamfight E nella backline, W per il taunt, e lascia che la frontline collassi sui target lockati."
  weakness: "W ha un charge lungo (1.5s) ed E ha un'animazione di passo indietro corta — entrambe interrompibili. Assassini mobili e DOT magico bypassano lo scudo W, che assorbe burst non danno costante."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Aftershock procca su taunt W o knockup R, dandoti un picco di resistenze quando vieni focusato. Shield Bash converte lo scudo W in danno bonus on-attack, Bone Plating assorbe il primo burst, Unflinching aggiunge tenacity per non restare bloccato dal CC."
    secondary_rationale: "Sorcery secondaria: Manaflow Band tiene su il mana per spammare la Q in lane (Galio e mana-hungry pre-Riftmaker), e Transcendence spinge l'Ability Haste cosi Q ed E tornano disponibili piu in fretta tra un fight e l'altro."
    secondary_alternative: "Nei matchup di stat-war su mana (Cassiopeia, Cho'Gath), swap Sorcery verso Inspiration con Biscuit Delivery (HP e mana refill gratuiti a livello 6) piu Cosmic Insight (riduzione cooldown di Flash — migliore catch potential col combo R+Flash)."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "Mage di artiglieria immobili"
      reason: "Il knockup E di Galio chiude la distanza su cui si reggono, e la W assorbe il burst delle loro spell a lungo cooldown tipo Lux R o Veigar R."
    - examples: ["ahri", "syndra"]
      archetype: "Burst mage a media gittata senza sustain"
      reason: "Lo scudo magico W taglia il grosso del loro combo damage; quando il burst e in cooldown non possono duellare un frame AP-tank."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "Carry bot immobili raggiungibili con R"
      reason: "Hero's Entrance atterra sopra un alleato; ADC senza dash non escono dal knockup e il tuo bot collassa per la kill."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "Assassini a corto raggio con multipli dash"
      reason: "Lo shroud di Akali rompe il targeting di W, e le catene di dash di Zed/Fizz chiudono il trade prima che la W esca dal charge — il miglior CC di Galio sta su un tell lento che loro out-pace."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "DOT magico e lockdown point-and-click"
      reason: "Lo scudo W assorbe burst non DOT (danno spalmato nei secondi successivi invece che istantaneo); la R di Malzahar suppressa Galio in carica W, cancellando l'intero tool di engage."
    - examples: ["yasuo", "yone"]
      archetype: "User di Wind Wall"
      reason: "Il Wind Wall di Yasuo blocca completamente le raffiche Q di Galio, rimuovendo il suo unico tool di pressione a distanza in lane."
---

## Panoramica

Galio è un battlemage AP (ability power, potere magico) con scaling tank — cresce sia con AP sia con HP. È costruito per interrompere la squadra avversaria e assorbire il danno magico che lanciano sulla tua frontline (i tank davanti che assorbono il danno). Il suo kit è corto e rumoroso: **Winds of War (Q)** per waveclear e poke (chip damage da distanza), **Shield of Durand (W)** per un taunt caricato (forza il nemico ad attaccarti per un momento) che fa anche da scudo magico, **Justice Punch (E)** per knockup (sbalzo aereo, breve stordimento) il primo nemico nel dash, **Hero's Entrance (R)** per teleport sopra un alleato con knockup-and-shield. Gioca mid perché serve la posizione centrale per minacciare rotation di R su qualsiasi lane.

Il piano partita è paziente fino al livello 6, poi esplosivo. Spingi la wave con Q, tieni E per un counter-engage o per il gap-close sul gank tuo, e quando R è disponibile, controlla le side lane — ogni fight bot o top è in range. Lo skill expression sta nel timing della carica W (rilasciala per interrompere un channel chiave — Katarina R, Karthus R, Master Yi Q) e nella mira di E (il dash colpisce solo il **primo** campione nel percorso, quindi puoi pickare un target di backline camminando di lato attraverso un cespuglio).

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Prendi ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** solo se affronti un Q-spammer melee che ti forza un back precoce per mana.

**Item core (nell'ordine):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primo slot. AP, HP, ability haste (riduzione cooldown su ogni abilità) e una rampa di omnivamp (ti cura una percentuale del danno inflitto, anche da abilità — cresce più il fight si prolunga) che trasforma i fight lunghi in self-sustain. Il taunt W di Galio costringe più target ad attaccarlo, alimentando l'omnivamp.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration fissa (un valore fisso tolto alla resistenza magica del bersaglio, così le tue spell fanno più danno). Default a meno che la squadra avversaria non abbia 3+ minacce AD (champion che fanno danno fisico): in quel caso swap su ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slow su ogni tick di Q. Sinergizza con Riftmaker così i nemici non possono disengage dal range del taunt, e gli HP che dà ti tengono tank-shaped.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — movement speed e ability haste. Chiude la distanza sui target backline che la R non raggiunge direttamente, e abbassa il cooldown di Q/E per ri-engage tra teamfight.

**Item situazionali:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contro front line con HP impilati (due o più tank tipo Cho'Gath, Sion, Dr. Mundo). Brucia una percentuale dei loro HP per tick di Q.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — solo con un kill lead iniziale (stai snowballando — ogni kill ti rende più forte e più probabile prendere la prossima). 3+ kill prima del minuto 12 fa funzionare la matematica; se muori e perdi stack l'item è sprecato.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — swap appena un target prioritario compra un item di MR come ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature**, o ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** su un fighter.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini che follow-up dopo il tuo engage (Zed, Talon). La stasi copre la finestra di cooldown quando W ed E sono giù.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target che ti interrompono in carica W (Malzahar suppress, Lissandra R, Twisted Fate stun).

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Prendi ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro comp con tanto CC (più stun, root, charm), o ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro composizioni auto-attack pesanti (due ADC, Master Yi).

**Skill order:** Massimizza **Q** per primo (danno principale e waveclear). **E** per secondo (cooldown più basso sull'engage). **W** per ultima — il tick damage e il valore dello scudo scalano poco col rank rispetto alla Q. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Swap secondario su **Inspiration** (Biscuit Delivery + Cosmic Insight) nei matchup di mana-war.

## Matchup chiave

- **Akali:** Lane dura. Lo shroud (W) le fa perdere il target lock di W ed E di Galio. Stai a max range della Q, tieni ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** in lista della spesa, e usa R per roamare — non può eguagliare il tuo impatto in side lane.
- **Yasuo / Yone:** Wind Wall blocca le raffiche Q. Tieni Q finché non spingono il muro, hold E per il counter-engage al loro all-in. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** presto per sopravvivere alla finestra auto-attack.
- **Lux:** Favorevole. Cammini attraverso il binding Q e dashi su di lei con E — i suoi cooldown sono troppo lunghi per trade prolungati, e W scuda il poke della R.
- **Cassiopeia:** Difficile. Il suo DOT (danno spalmato nel tempo) bypassa l'assorbimento burst di W. Non provare l'all-in pre-6; farma sotto torre con Q e cerca di roamare a livello 6.
- **Twisted Fate:** Gara di rotation. Match il range della tua R col suo teleport. Spingi la wave, ping bot/top quando la sua ult va in cooldown, e sii pronto a counter-R la sua rotation invece di iniziare la tua.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + W hai il primo trade all-in. Carica W mentre il nemico passa sopra al tornado Q e cammina dentro — il taunt forza l'auto-attack su di te mentre i tick Q finiscono.
- **Livello 6:** **Hero's Entrance** sblocca l'impatto in side lane. Spingi forte la wave, ping il tuo bot, e cerca il primo dragon fight.
- **Riftmaker completo (~ minuto 12-14):** Galio diventa un pezzo da teamfight reale. Forza i fight obiettivo qui — l'omnivamp da R-in-W-in-E ti permette di assorbire la prima ondata di cooldown avversari e sopravvivere.
- **Spike di tre item (~ minuto 22-26):** Con ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** e ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter**, lo slow del tornado più il knockup E concatenano 1.5+ secondi di CC su una backline che non può kitarti.

## Errori comuni

- **Sparare W senza target.** Il taunt si attiva solo se un campione è in melee range al rilascio. Carica W camminando *verso* un target, non sopra una ward vuota.
- **Usare R per first engage senza follow-up del team.** Hero's Entrance dà un knockup, ma se il tuo team sta ripoizionando quando atterri, il nemico passeggia via. Aspetta che un CC alleato (Ashe R, Lulu Q, Pantheon Q) atterri prima, poi R sopra di lui.
- **Ignorare la waveclear pre-6.** La Q di Galio è uno dei tool di waveclear AOE a più lunga gittata in mid; non spingere significa cedere la prio (priorità in lane) che ti serve per usare R sui roam.
- **Massimizzare W per seconda.** Il valore dello scudo scala col rank ma il cooldown cala solo marginalmente. Max E ti dà una E con 4 secondi di cooldown a livello 13, che si traduce in più finestre di engage.
- **Riftmaker primo contro una comp senza tank.** Se l'avversario è 4-AD (Yasuo + 2 ADC + Talon), gli stat tank sono sprecati. Compra ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** per primo — il burn pressa la backline squishy.

## Suggerimento avanzato

Il knockup E colpisce solo il **primo** campione nemico nel percorso del dash — usa questa cosa per pickare il target. Se la front line nemica è tra te e il loro carry, gira dai cespugli laterali (o flank dalla fog of war) così la linea della E intercetta il carry per primo mentre la front line resta dal lato sbagliato. Stesso trucco dopo il landing della R: se subito dopo la fine del knockup parti con E dal retro della formazione nemica, ri-knocki il backline mentre il loro tank sta ancora recuperando.
