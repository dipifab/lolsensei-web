---
title: "Hwei Mid Build & Guida — Patch 16.9"
slug: "hwei-mid"
language: "it"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Guida Hwei mid lane per League of Legends Patch 16.9: starter kit, build mage da burst, matchup chiave in lane, power spike, errori comuni e tecnica avanzata."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Quando Hwei colpisce un campione lo marchia. Una seconda spell di danno diversa completa la firma e fa esplodere un'AOE di danno magico dopo un breve delay."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Apre 3 sub-spell di danno. QQ palla di fuoco (% HP max), QW fulmine ritardato (bonus su target isolato/immobilizzato), QE percorso di pozze di lava che rallentano."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Apre 3 sub-spell utility. WQ linea di Move Speed per gli alleati, WW pool che scuda nel tempo, WE 3 cariche che potenziano i prossimi 3 cast con danno extra e mana refund."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Apre 3 sub-spell di crowd control. EQ cono di paura/flee, EW occhio fisso che spara una root homing, EE fauci ritardate che trascinano e rallentano."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Proiettile a lunga distanza che si attacca al primo campione colpito ed espande una zona di slow, poi esplode per grosso danno magico finale."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini con piu' dash (Zed, Akali, Talon): la stasi compra il tempo che ti manca senza un dash tuo"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target (Ahri charm, Lissandra R, Twisted Fate stun) che ti blocca prima del cast"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro squadre con tanto sustain (Soraka, Vladimir, Dr. Mundo): il Grievous Wounds taglia la cura"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "boots alternative quando serve piu' uptime della R rispetto al magic pen flat"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Combina il proc passivo con QW Severing Bolt su un bersaglio rooted o slowed durante i fight obiettivo, poi sovrapponi la R da max range per dare follow-up al team."
  weakness: "Niente dash, niente escape. Ogni sub-spell ha cast time: ogni all-in che chiude la distanza (assassino, diver) prima che tu finisca la sequenza CC ti uccide."
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
    primary_rationale: "Sorcery primary: ogni EW root o QE slow garantisce un proc di Arcane Comet sul Q successivo, regalandoti poke gratis. Manaflow Band sostiene il mana enorme di Hwei, Transcendence taglia i CD delle nove sub-spell, Scorch chiude le kill."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery compensa il mana early disastroso, Cosmic Insight riduce i CD dei summoner spell — Flash piu' spesso nei teamfight."
    secondary_alternative: "Contro poke artillery (Xerath, Vel'Koz), passa a Resolve con Second Wind (regen sotto poke) e Overgrowth (HP extra late) per sopravvivere a scambi che non puoi rispondere."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "L'occhio EW si lock-on e spara una root homing su bersagli senza mobilita', poi concatena un QW garantito. Senza dash non escono dalla finestra di cast."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei li outranges a ogni livello e li tiene slowed con le pozze QE. Non arrivano alla sua posizione di cast senza bruciare Flash."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "Il loro engage richiede corto raggio e ha un tell lento. Hwei pre-casta EW dalla fog, root sull'engage, e si stacca per resettare il trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "I loro dash/blink battono i cast time di Hwei. Mentre apre la E e sceglie la sub-spell giusta, l'assassino e' gia' dentro la sua hitbox col burst pronto."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Lo poke-ano oltre il range della Q e lo costringono a castare sotto pressione. Hwei non ha escape ne' modo di chiudere la distanza."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall blocca ogni proiettile delle sub-spell di Hwei (Q, EW, R). Dashano oltre i suoi slow e chiudono lo scambio prima che lui completi la firma passiva."
---

## Panoramica

Hwei e' un mage artillery a lunga distanza con il kit piu' profondo del gioco: Q, W ed E aprono ognuno un menu di tre sub-spell, per un totale di nove press di abilita' piu' la R. Gioca lo stesso ruolo di un control mage in mid lane (zone, poke, lock-down, snipe) ma scambia semplicita' per adattabilita': ogni wave scegli tra danno, utility e crowd control in base alla situazione. Hwei e' fragile e immobile: posizionarsi dietro la frontline (i tank/bruiser che aprono il fight) e' obbligatorio.

Il game plan ha due livelli. Marchia un bersaglio con una sub-spell di danno per attivare la passive **Signature of the Visionary**, poi completa la firma con un secondo cast di danno per aggiungere un'esplosione AOE bonus. L'apertura piu' pulita in lane e' EW (l'occhio homing che root-a) seguita da QW Severing Bolt, che fa danno enorme bonus contro target rooted o immobilizzati. Fuori lane il kit si sposta su control: WQ per dare Move Speed agli alleati, WW per la pool che scuda, EE jaws per trascinare un team raggruppato dentro la tua AOE.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Il sustain di mana e' critico: le sub-spell bruciano tantissimo mana e la regen di Doran's Ring e' il modo piu' economico per restare in lane fino al primo ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** sulla via verso Luden's Companion.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike, mana sustain per la rotation costante, e ability haste che riduce i CD delle sub-spell.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Ogni esplosione della passive beneficia del pen e i tuoi target sono squishy.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic pen percentuale. Compralo come terzo item appena un nemico prioritario prende un item di Magic Resist: Hwei scala enorme con AP moltiplicato, il danno deve passare.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — il tuo slot di AP piu' alto. Il moltiplicatore +35% AP amplifica ogni sub-spell e l'esplosione passive nello stesso modo.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra con la HP-threshold passive (passiva di un item che si attiva quando il nemico e' sotto soglia HP, qui 35%) che si allinea col danno finale della R.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini con piu' dash (Zed, Akali, Talon). La stasi compra i secondi che a Hwei mancano per via dell'assenza di dash.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico single-target (Ahri charm, Lissandra R, Twisted Fate stun). Lo scudo blocca il lock che interromperebbe il tuo cast.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro squadre che stackano sustain (Soraka mid, Vladimir, Dr. Mundo top). Il Grievous Wounds taglia la regen su cui si appoggiano.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — alternativa a ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** quando alla squadra serve piu' uptime della R che pen.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Passa a ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se la squadra ha bisogno di R piu' frequente come finisher.

**Skill order:** Maxa **Q** per prima (le sub-spell di danno, da cui arrivano le kill), **E** per seconda (le sub-spell di CC), **W** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Swappa il secondary in **Resolve** (Second Wind + Overgrowth) contro matchup di poke pesante.

## Matchup chiave

- **Yasuo / Yone:** Wind Wall blocca tutti i proiettili delle sub-spell (Q, EW, R). Tieni E e W finche' non spendono le abilita'; mai face-cast un QQ palla di fuoco quando il muro e' su.
- **Zed / Akali:** Minacce di dive. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item dopo ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pre-casta EW dalla fog prima di andare a last-hittare, mai face-up.
- **Orianna:** Matchup pari, scala verso di lei nei teamfight. Lo poke-i in lane con QQ + proc passive ma lei vince i fight raggruppati con la R Shockwave; in posizionamento late, distanziati dal team perche' la sua R non prenda te e il carry insieme.
- **Twisted Fate:** Race di priority per i roam. Ha gold-card stun e R globale; tracka la sua ulti coi vision ward su river e tri-bush. Se ti tira la gold card, EW per root-arlo prima che chiuda la distanza.
- **Veigar:** Pari-favorevole in lane. La sua E gabbia e' la vera minaccia (chi entra nel cerchio resta stunnato). Stai fuori dal raggio della gabbia quando lo poke-i; un QW Severing Bolt lo punisce duro se mangia per sbaglio la sua stessa root.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in Q (Disaster) piu' la E iniziale, hai una sub-spell di danno e una di CC. EW root in QW Severing Bolt e' una vera finestra di all-in (impegno totale fino alla kill, senza tirarsi indietro) se il loro jungler non e' vicino.
- **Livello 6:** La prima **Spiraling Despair** apre il controllo obiettivi. La R si attacca al primo campione colpito ed espande una zona di slow, perfetta per impostare il fight Scuttle Crab al tuo jungler.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minuto 13-15):** La wave control si ribalta. Col mana sustain di Luden's puoi shovare ogni wave con QQ + QE in una rotation, liberando roam e dive bot.
- **3-item spike (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ minuto 27-30):** Il danno della combo con proc passivo bypassa il primo item di MR comprato dai nemici. Forza i fight obiettivo finche' la frontline e' in piedi.

## Errori comuni

- **Spammare Q a CD senza setup.** Apri sempre con E (CC subspell) o colpisci un bersaglio gia' rallentato/rooted da un alleato. Una QQ a freddo dalla posizione neutra viene schivata a vista da chi ha un dash, e ti svuota il mana.
- **Sbagliare la sub-spell sotto pressione.** Le sub-spell sono committate appena premi il menu: non c'e' cancel. Allena la scelta del finisher giusto in custom o normal prima di portare Hwei in ranked: QW per bersaglio isolato, QE per waveclear, QQ per chip damage su HP basso.
- **Dimenticare che la firma passive richiede due abilita' diverse.** Due QQ di fila non fanno detonare la passive. La firma scatta solo quando una seconda spell di danno **diversa** colpisce: tipicamente QQ poi QW, o EW root poi QW Severing Bolt.
- **Usare la R come damage finisher invece che come setup tool.** Il valore principale di Spiraling Despair e' la zona di slow per il follow-up, non il danno dell'esplosione. Cast first per agganciare il nemico alla combo del team, poi sovrapponi le tue sub-spell.
- **Stare al massimo del range nei teamfight senza peel.** Hwei non ha dash. La distanza massima ti mette fuori dalla protezione del team e un assassino di flank ti elimina solo. Sta' nella seconda posizione piu' lontana, cosi' un peel del support (l'abilita' del tuo support che ti protegge dai diver) puo' arrivare a salvarti.

## Suggerimento avanzato

Usa WE Stirring Lights per convertire il dead time in burst (danno alto concentrato in 1-2 secondi). Pre-castala prima di entrare nel teamfight: piazza tre cariche potenziate sui tuoi prossimi tre cast o auto-attacchi, ognuno aggiunge danno magico bonus e ti rifonde mana. La sequenza ottimale e' WE → EW occhio → QW Severing Bolt → AA sul rooted: ogni cast nella catena consuma una carica, e il refund di mana ti permette di seguire subito con la R su un secondo bersaglio senza andare OOM (out-of-mana, finire il mana a meta' fight).
