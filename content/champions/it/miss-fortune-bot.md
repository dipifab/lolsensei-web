---
title: "Miss Fortune Bot Build & Guida — Patch 16.9"
slug: "miss-fortune-bot"
language: "it"
patch: "16.9"
champion: "miss-fortune"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Miss Fortune bot lane LoL Patch 16.9: starter kit, build lethality e crit, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "MissFortune"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Love Tap"
      description: "Ogni auto-attack su un bersaglio diverso dal precedente infligge danno fisico bonus. Alterna i target in lane per massimizzare l'harass."
      dd_spell_id: "MissFortune_Passive"
    - key: "Q"
      name: "Double Up"
      description: "Colpo a rimbalzo: prende il primo nemico, poi un secondo dietro. Il secondo può crittare; auto-critta se il primo muore al colpo."
      dd_spell_id: "MissFortuneRicochetShot"
    - key: "W"
      name: "Strut"
      description: "Move Speed passiva quando non sei colpita. L'attivazione dà attack speed bonus. I Love Tap riducono il cooldown."
      dd_spell_id: "MissFortuneViciousStrikes"
    - key: "E"
      name: "Make It Rain"
      description: "Area di proiettili che rallenta e infligge danno magico nel tempo. Tool di setup per allineare la Q e per coprire il channel della R."
      dd_spell_id: "MissFortuneScattershot"
    - key: "R"
      name: "Bullet Time"
      description: "Channel di raffiche in cono con danno fisico massiccio. Ogni ondata può crittare. Resta ferma: cancellazione = perdi tutto il danno."
      dd_spell_id: "MissFortuneBulletTime"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro front line tanky (Malphite, Ornn, Sion) — danno bonus che scala con gli HP massimi del bersaglio"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che impilano cure (Soraka support, Aatrox, Dr. Mundo) — applica anti-heal on hit"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro pressione assassin/diver (Zed, Kha'Zix, Nocturne) — la seconda vita ti permette di chiudere il channel della R"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro CC single-target che decide la fight (Malzahar R, Skarner R, Warwick R) — l'attivo cancella la suppression"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, LeBlanc) — scudo magico + lifeline a basse HP"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Bullizza la lane early con Q e auto-attack Love Tap, raggiungi il power spike di livello 6 per i fight obiettivo, e centra un Bullet Time da fianco o dopo che il CC della frontline avversaria è già stato usato."
  weakness: "Niente dash, nessuna escape integrata, vulnerabile al dive una volta usata Flash. Il channel di R è un bersaglio fermo se il nemico ha ancora hard CC come uno stun o un knock-up."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ezreal", "ashe"]
      archetype: "Marksman immobili da poke e harass"
      reason: "Miss Fortune vince i trade lunghi perché Love Tap premia il cambio target. Contro marksman senza dash scambia alla pari a lunga gittata e prende vantaggio una volta che Strut active aggiunge attack speed."
    - examples: ["nami", "soraka", "lulu", "yuumi"]
      archetype: "Enchanter support stazionari senza engage"
      reason: "Senza un tool di engage per interrompere la R, il bot lane avversario è costretto a reagire a Bullet Time dopo che li ha già cancellati. Il combo E + R copre tutta la zona sicura della lane."
    - examples: ["kog-maw", "vayne", "twitch"]
      archetype: "Hyperscaler marksman con early debole"
      reason: "Miss Fortune le sovrasta in danno dai livelli 1 al 9. Pusha la lane, Q-poke a cooldown basso e snowballa prima che raggiungano il loro spike a due item (intorno al minuto 22-25)."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Bully early con pattern di trade aggressivi"
      reason: "Hanno o un AD base più alto (Draven), o burst migliore sul corto raggio (Lucian), oppure mobility integrata e shielding (Samira). Miss Fortune non ha dash per disengage se committano Flash per un all-in."
    - examples: ["leona", "nautilus", "alistar", "rell"]
      archetype: "Tank support da hard-engage con CC point-and-click"
      reason: "I loro stun e knock-up arrivano prima che il channel della R finisca. Senza Flash disponibile, Miss Fortune non può ri-posizionarsi a metà channel e perde tutto il valore dell'ult."
    - examples: ["zed", "kha-zix", "nocturne"]
      archetype: "Assassini mobili che flankano sulla back line"
      reason: "Miss Fortune non ha escape e a Flash giù è il target più facile della back line. La burstano in 1-2 secondi prima che il peel del team possa intervenire."
---

## Panoramica

Miss Fortune è un marksman (campione di danno fisico continuato a distanza) che eccelle nel bullizzare la lane e nel chiudere i fight con una sola ulti gigantesca. Il suo kit è costruito intorno alle auto-attack e a un solo skillshot rimbalzante (un'abilità che parte in linea: va mirata a mano e può essere schivata), **Double Up (Q)**, che punisce chi sta dietro al support nemico. Il jackpot è **Bullet Time (R)**: un cono channelato di proiettili che, usato su un team raggruppato dopo un lockdown della frontline (chain CC come Leona Q + R, oppure un hook di Nautilus), può vincere il teamfight intero in tre secondi.

Il game plan è "bullizza early, scala fino alla prima ulti, poi cerca channel puliti di R". Spingi le wave con **E** + auto-attack, alterna i target in lane per attivare il danno bonus di **Love Tap** ad ogni auto, e a livello 6 pinga per un all-in (uno scambio totale fino alla kill, senza tirarsi indietro) quando il tuo support ha CC pronto. Miss Fortune non ha dash né escape: scambia sicurezza di posizione per uno dei più alti danni one-button del gioco, quindi la disciplina sta nello stare dietro al support e nel non andare mai a portata corpo a corpo senza **Flash**.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Blade dà lifesteal che si combina con le auto-attack di Love Tap per superare il sustain dei matchup di poke.

**Item core (nell'ordine):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primo power spike. Aggiunge crit, lethality (penetrazione di armatura efficace sui livelli bassi del carry avversario) e una passiva di execute che finisce i target sotto il 5% HP.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots da attack speed. Compra dopo il primo item, o prima se la lane è di harass auto-attack.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — moltiplicatore di danno crit. Quando superi il 60% di crit chance con l'item successivo, IE rende ogni ondata di **Bullet Time (R)** circa il doppio del danno.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — l'energized auto aggiunge range, quindi allinei la **Q** in sicurezza e apri i fight da più lontano.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (cura sul danno inflitto, circa 22%) più uno scudo di overheal. Tappa il buco di sopravvivenza che Miss Fortune ha di default.

**Item situazionali:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — swap contro composizioni con due o più tank. Il danno bonus contro target ad alti HP conta più del crit puro a quel punto.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — anti-heal contro composizioni che impilano cure (Soraka support, Aatrox top, Dr. Mundo top).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro assassini e diver che flankano la back line. Il revive ti permette di finire il channel di **R** senza perdere il trade.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro CC single-target che decide la fight (Malzahar R suppression, Skarner R, Warwick R).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Syndra, Veigar, LeBlanc nel team avversario).

**Stivali:** Berserker's Greaves di default. Plated Steelcaps contro un team avversario solo di danno fisico con un assassin AD.

**Skill order:** Massimizza **Q** per primo (poke principale e tool di trade), **E** per secondo (slow migliore e waveclear), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Domination** con **Cheap Shot** e **Treasure Hunter** per spike di gold early, oppure **Sorcery** con **Manaflow Band** + **Gathering Storm** se la partita si prospetta lunga.

## Matchup chiave

- **Caitlyn:** Poke a lunga gittata (danno chip da distanza sicura per consumare HP senza committare); rispetta le sue trap (i quadrati gialli a terra) camminandoci intorno. Rispondi al trade (scambio breve di colpi e abilità) con lo spike di ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** intorno al minuto 12: le auto-attack di Love Tap battono il suo poke single-target a quel punto.
- **Draven:** Ti supera nei trade dal livello 1 al 3. Tieni **Q** per quando committa una catch dell'Ascia, pusha la wave per negargli farm e chiama il jungler — Draven snowballa (vantaggio in kill che cresce item dopo item) più veloce di qualsiasi altro ADC.
- **Lucian / Samira:** Bully a corto raggio con mobility. Stai dietro ai minion, non auto-attaccarli mai quando hanno la **W** dash pronta. Dopo il livello 6, la **R** li punisce se committano un combo lungo su di te e il support li prende con CC.
- **Kog'Maw / Vayne:** Le bullizzi dal livello 1 al 9; loro scalano (crescono di forza con gli item) molto meglio in late. Pusha la wave in permanenza, costringile sotto torre e **Q**-pokale ogni volta che escono per last-hit. Vinci prima del loro spike a due item (intorno al minuto 22-25).
- **Leona / Nautilus support nel team avversario:** Stai a portata massima di auto-attack, non avanzare mai per primo su una wave. Compra una control ward (la pink ward) per negare i flank dai bush. Tieni **Flash** apposta per il loro primo hard CC.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **E** sbloccate puoi pokare dalla zona di slow. Stacca la wave dalla tua parte e tradeа ad ogni cooldown.
- **Livello 6:** Prima ![Bullet Time](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/MissFortuneBulletTime.png) **Bullet Time**. Con il tuo support che tiene CC, un all-in su un bot lane nemico a bassa mobility è una doppia kill garantita.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completo (~ minuto 11-13):** Il threshold di danno per le kill cresce di colpo. Ogni fight in cui il support e l'ADC nemico sopravvivono a basse HP ora si chiude in kill grazie alla passiva di execute.
- **Spike a 3 item con ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 22-25):** Il danno crit raddoppia circa. Forza i fight obiettivo qui — la **R** in un teamfight dopo un engage del tank è una quadra quasi garantita.

## Errori comuni

- **Channellare Bullet Time senza setup.** Una **R** solitaria senza CC sui nemici è sprecata: chiunque esce dal cono nei primi 0.5 secondi e perdi tutto il valore dell'ult. Aspetta uno stun, knock-up o root del support prima di premere R.
- **Auto-attaccare lo stesso target in lane.** Love Tap (la passiva) si attiva solo cambiando bersaglio. Se continui a cliccare lo stesso minion ignori la fonte di harass più forte sull'ADC nemico.
- **Dimenticare Strut active in fight.** L'attivazione di **W** dà un grosso burst di attack speed — usarla 2 secondi prima dell'inizio del fight significa fare circa il 25% di danno in più dell'ADC avversario nello scambio iniziale.
- **Stare davanti al tuo support.** Miss Fortune non ha dash. Se avanzi per prima su una wave mangi l'engage (l'iniziativa dell'avversario per aprire il fight) destinato al tuo peeler (il support che ti protegge interrompendo chi ti attacca), e bruciare Flash difensivamente qui significa morire al gank successivo.
- **Ignorare la vision nel bush bot.** Senza una control ward nel bush della lane, una Leona o un Nautilus avanza invisibile e ti piazza un CC point-and-click prima che tu possa reagire. Sempre pink ward entro il minuto 4.

## Suggerimento avanzato

Allena il combo "Flash + Bullet Time": tieni **R** in queue nella visuale, **Flash** in posizione di flank (entrare nel fight da un fianco non coperto, di solito dietro la back line nemica) dietro al team avversario, poi channela **R** lungo la linea più lunga attraverso la loro formazione. Il cast non viene cancellato dall'animazione di Flash se queu in ordine corretto (Flash prima, poi R). Coglie le squadre alla sprovvista perché si aspettano che Miss Fortune channeli dalla propria back line, e il cono ora prende tutti e cinque i nemici invece di due.
