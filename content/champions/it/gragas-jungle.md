---
title: "Gragas Jungle Build & Guida — Patch 16.9"
slug: "gragas-jungle"
language: "it"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Guida Gragas jungle per League of Legends Patch 16.9: clear path, rotte di gank, build AP bruiser, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lanciare una qualsiasi abilità cura Gragas per un piccolo ammontare (cooldown interno di 5 secondi). Lo sostiene durante il clear della jungle senza bisogno di basare presto."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rotola un barile a un punto. Rilancia per detonare, oppure esplode da solo dopo 4 secondi. Danno e slow scalano col tempo di carica — aspetta il picco prima di detonare."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel di 1 secondo che dà 30% damage reduction per 3 secondi e potenzia la prossima auto-attack con danno magico bonus. Usalo prima di E per assorbire l'aggro del camp."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash che si ferma sul primo nemico colpito, infliggendo danno AOE e stunnandolo per 1 secondo. È il tuo unico gap-close, l'unico hard CC e il principale strumento di engage."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lancia un barile che spinge i nemici via dal centro dell'impatto. Usalo per peelare alleati, per pickoff su target isolati, o per buttare un carry dentro la frontline del tuo team."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini o dive comp (Zed, Talon, Kha'Zix): la stasi dopo R dà al tuo team il tempo di ripulire il fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Morgana Q): lo spell shield mangia la lockdown che spezzerebbe la tua R"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro team con 3+ hard CC (Leona, Sejuani, Lissandra): la tenacity accorcia la durata degli stun e protegge il damage reduction della W"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contro stack di Magic Resist o comp che impilano cure (Soraka, Vladimir, Dr. Mundo): magic pen più area di healing-reduction sull'attivo"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "in partite snowballate quando sei 3+ item avanti e vuoi one-shottare gli squishy con il combo Q-E invece di fare engage"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Usa R per buttare i carry avversari (ADC, mid mage) dentro la frontline del tuo team agli obiettivi; W prima di E per assorbire danno in entrata, poi Q nella mischia per amplificare la sustained AP burn di Riftmaker."
  weakness: "E è il tuo unico gap-close e l'unico stun. Se la sbagli o la usi per il clear di un camp poco prima di un invade, resti senza engage e senza escape per 12+ secondi."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria invece di Sorcery: Gragas entra in engage e deve sopravvivere alla CC chain avversaria, non max burst. Aftershock dà resistenze quando Body Slam applica lo stun. Font of Life, Conditioning, Revitalize lo tengono tanky in late."
    secondary_rationale: "Sorcery secondaria: Nimbus Cloak dà un burst di Movement Speed dopo Smite o Flash, così puoi concatenare Body Slam da angoli scomodi; Transcendence dà Ability Haste più un reset di basic-attack on takedown che si sposa con gli skirmish prolungati di Gragas."
    secondary_alternative: "Se la squadra avversaria ha 4+ minacce AD (Zed mid, Tryndamere top, Vayne bot), swap Sorcery secondaria verso Precision con Triumph (heal su takedown) e Legend: Tenacity (tenacity extra in stack con Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Carry jungle squishy senza hard CC"
      reason: "Lo stun di Body Slam spezza il loro pattern di kite: Master Yi non può uscire con Alpha Strike, Kindred non può ballare il reset delle auto, Graves non può ri-posizionarsi. R poi li butta via dal carry del tuo team su un engage di follow-up."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Jungler con ult a channel lungo"
      reason: "Explosive Cask interrompe la R di Karthus, di Amumu e di Warwick. Una knockback in mid-fight cancella interamente il loro payload da teamfight e a Gragas basta piazzare il centro del barile vicino al target che sta channellando."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Ganker basati su stealth"
      reason: "Il damage reduction della W assorbe il loro burst di apertura (fear+drain di Fiddlesticks, backstab di Shaco) mentre Body Slam li stunna in pieno cast. Il loro engage richiede cast time non contestato — Gragas glielo toglie."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Skirmisher mobili con multi gap-close"
      reason: "Coprono terreno più velocemente del singolo Body Slam di Gragas e iniziano il fight prima che tu possa fare W in E. Inoltre Viego che possiede un tuo frontliner trasforma il tuo engage in un 1v2."
    - examples: ["kayn"]
      archetype: "Bruiser anti-tank con true damage"
      reason: "Kayn (Rhaast) infligge true damage percentuale sui max HP che ignora le resistenze di Gragas e il damage reduction della W. Un Gragas tank in late game perde un 1v1 nel river anche con resistenze piene."
    - examples: ["nidalee", "elise"]
      archetype: "Jungler da poke a lunga gittata"
      reason: "Le javelin di Nidalee e la spider-form di Elise erodono Gragas da fuori il range di Body Slam. Gragas non ha modo di chiudere il gap senza committare E — una volta speso, entrambi escono dallo scambio camminando."
---

## Panoramica

Gragas è un jungler AP bruiser tanky (un fighter che costruisce AP per il danno ma con HP e resistenze sufficienti a stare in mezzo al team avversario) il cui piano partita ruota intorno a una grande giocata: lanciare un carry avversario (il campione ad alto danno intorno a cui ruota la squadra) dentro il tuo team con **Explosive Cask (R)**. **Body Slam (E)** è l'unico gap-close (abilità per chiudere rapidamente la distanza) e l'unico hard CC, quindi il buon Gragas è paziente — pulisci i camp, salva **E** per il gank o per l'engage, poi entri in engage solo quando **R** è disponibile. Ha sustain naturale (cura passiva durante i fight) grazie a **Happy Hour (P)** che gli permette di clearare senza basare; **Drunken Rage (W)** offre una finestra di 30% damage reduction che assorbe il primo burst di qualsiasi skirmish breve.

La condizione di vittoria è il primo pickoff a livello 6 — far fuori un nemico isolato con **R** per una kill gratis. Da lì il team gioca intorno al cooldown della prossima **R**: cammina sopra al jungler nemico quando entra nel tuo river, oppure imposta un fight a un Drake (mostro neutrale che dà al team un buff permanente) dove un buon flip di **R** uccide l'ADC avversario (il marksman in bot lane, principale damage dealer in late) prima ancora che il fight cominci. Se **R** non è pronta, non iniziare un fight — sei un enabler (campione che crea le occasioni di fight per il team), non un duelist da 1v1.

## Build Consigliata

**Item iniziali:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter standard ranged-Smite — le auto-attack di Gragas contano come ranged ai fini della scelta dello starter.

**Item core (nell'ordine):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade da Hailblade (auto-evolve verso il minuto 3-4 una volta accumulata abbastanza XP). È il companion AP-burst: ogni auto-attack post-cast aggiunge danno magico bonus e uno slow che si stacka con **Q**.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item AP da burn sostenuto. Dà omnivamp (life-steal che funziona su ogni tipo di danno, non solo sulle basic attack) e rampa di danno nei fight prolungati, perfetto per gli engage drawn-out di Gragas.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa. Prendi ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se la squadra avversaria ha 3+ abilità di hard CC.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste più Movement Speed dopo aver danneggiato un campione. La mobility ti permette di ri-posizionarti intorno al fight per piazzare un secondo stun di **E** appena il cooldown rientra.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste più burn magico percentuale sui max HP che rampa quanto più dura il fight. Punisce i frontliner avversari tanky (Sejuani, Ornn) dove l'AP flat inizia a perdere efficacia.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini o dive comp. Attiva subito dopo **R** per sopravvivere al burst di follow-up.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra **R**). Lo spell shield mangia l'abilità di lockdown che spezzerebbe la tua **R**.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contro comp che impilano cure (Soraka, Vladimir, Dr. Mundo). L'attivo dell'R apre una zona di healing-reduction che si sposa con il tuo knockback.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — solo se sei 3+ item avanti e vuoi passare da engage a one-shot.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Swap a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro CC pesante, oppure ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se 4+ avversari fanno danno fisico.

**Skill order:** Massimizza **E** per primo (stun e danno principale), **Q** per secondo (waveclear e poke a distanza), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Secondario **Sorcery** con **Nimbus Cloak** e **Transcendence**. Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Lee Sin / Viego:** Skirmisher mobili (jungler costruiti per fight brevi e ripetuti) che ti battono in fight pre-6. Non contestare il primo Scuttle Crab (granchio del river che dà vision e un buff di Movement Speed); clearra a camp pieni e cerca di scalare (crescere con item e livelli) verso **R** al livello 6, dove un buon flip di cask pareggia immediatamente il matchup.
- **Master Yi / Kindred:** Carry jungle squishy (poca HP, niente resistenze). Tracciagli il pathing dalla minimap; se Yi è bot e tu sei top, scendi con HP pieno e cerca un gank in mid lane a livello 6 — il tuo stun di **E** spezza il reset cycle di Alpha Strike (dash untargettabile).
- **Karthus:** Scala in late come minaccia da teamfight ult. Il tuo lavoro è interrompergli il channel con **R** — traccia lo spawn della sua R al livello 6 e pingala a mid che la cancellerai ogni volta.
- **Sejuani / Amumu:** Tank front-to-back. Non provare a out-engagiarli da solo; lasciali committare per primi, poi **R** il loro carry via dal muro che hanno creato. Il tuo stun di **E** si concatena col loro CC per una kill garantita su chi avevano agganciato.
- **Nidalee:** Il poke (chip damage da fuori il range del nemico) a lungo raggio punisce il tuo wind-up di engage. Compra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** presto; passa per la fog of war (le zone grigie non rivelate della mappa) nella tua jungle e mai face-tankare le sue javelin nel river di lane mentre stai per gankare.

## Power spike & condizioni di vittoria

- **Livello 3 (E sbloccata):** Prima finestra di gank. Cammina in una lane con **Flash** down sull'avversario, **W** prima di entrare in vision, poi **E** attraverso un muro per stunnare a sorpresa. Imposta il tuo laner per il follow-up.
- **Livello 6 (prima Explosive Cask):** Power spike. Con una sola **R** puoi buttare un avversario over-extended dentro la tua tower o nel gank del tuo jungler. Forza un buon fight prima di basare.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Primo grande spike da fight. Burn AP sostenuto più omnivamp ti permettono trade prolungati negli skirmish; forza un Drake fight qui.
- **3 item + stivali (~ minuto 25-28):** Picco da teamfight. Aftershock più ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** più ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** più ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** ti rendono l'engager più affidabile sulla mappa. Raggruppa col team e cerca obiettivi.

## Errori comuni

- **Usare E per clearare un camp quando arriva un invade.** **E** ha 14 secondi di cooldown a rank 1. Se fai Body Slam su un Krug e il jungler avversario entra 3 secondi dopo, sei senza escape e senza stun. Salva **E** quando la minimap mostra il jungler avversario vicino al confine della tua jungle.
- **Lanciare R come danno di apertura.** **R** è un knockback, non una spell di danno. Se la lanci senza un piano di piazzamento, sparpagli il team avversario lontano dal tuo follow-up. Sempre visualizzare dove il carry avversario atterrerà prima di premere **R** — buttalo dentro al tuo team, non lontano.
- **Massimizzare W invece di E.** **W** non dà a Gragas lo stun, il gap-close né la clear speed — **E** fa tutte e tre le cose. Massimizza **E** per primo ogni partita.
- **Gankare prima del livello 3.** Senza **E**, Gragas non ha modo di prendere un target che non si stia già tower-divando da solo. Salta i gank pre-3; clearra a tempo doppio camp e ganka col combo **W-E** al livello 3.
- **Duellare Kayn da solo dopo la sua trasformazione.** Kayn-Rhaast fa true damage che ignora le tue stat tanky. Evita 1v1 nella sua jungle in late game; raggruppa col team per gli obiettivi.

## Suggerimento avanzato

Allena il combo **R-Flash**: lancia **R** ai piedi del carry avversario, poi **Flash** durante il cast per ri-posizionare il punto del barile vicino al tuo team. Il barile detona dalla posizione Flashata, quindi un carry posizionato a distanza sicura viene sbattuto nella frontline del tuo team prima che capisca che l'angolo è cambiato. È la singola meccanica Gragas di valore più alto in solo queue patchata e merita 30 minuti di practice tool prima di provarla in ranked.
