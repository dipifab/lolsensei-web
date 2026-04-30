---
title: "Ambessa Top: Build e Guida — Patch 16.9"
slug: "ambessa-top"
language: "it"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Guida Ambessa top per League of Legends patch 16.9: starter kit, build Eclipse skirmisher, matchup chiave, power spike, errori comuni e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "Dopo ogni ability cast, esegue un breve dash. Il prossimo basic attack guadagna range, danno e attack speed in più, e rimborsa energia."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Ability a due cast. Il primo cast colpisce un arco frontale e scala con il max HP del bersaglio. Colpire un nemico sblocca un secondo cast: un colpo a terra in linea più lungo. Fonte di danno principale."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Ottiene uno scudo e si mette in posa difensiva (brace) caricando il colpo, poi colpisce a terra. Se durante la posa blocca danno non-minion, il colpo a terra è potenziato. Tool difensivo da trade."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "Frusta AOE attorno a sé: danneggia e rallenta i nemici vicini. Attivare il dash della passiva da questa ability aggiunge un secondo strike alla fine del dash."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Diventa unstoppable e salta col blink fino al campione nemico più lontano in linea, sopprimendolo all'arrivo, poi lo colpisce a terra per danno e stun. Passiva: armor pen + omnivamp sulle ability."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "sostituisce le Plated Steelcaps quando il team avversario ha 2+ fonti di hard CC o danno AP (magico) pesante"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro top AP pesanti (Vladimir, Rumble, Gwen) — magic shield + AD scaling a HP basso"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro hard CC a lunga gittata telegrafato (Malphite R, Ornn R, Sett W) — lo spell shield blocca l'engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "quando sei già avanti in lane — le kill accumulano AD bonus, alimentando un snowball lead (vantaggio crescente)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late game: salti col blink della R sul carry; la rebirth (resurrezione singola) ti tiene vivo se ti focusano dopo"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Vince le lane 2-6 con trade passive-dash, poi sfrutta il vantaggio nelle skirmish a Voidgrubs e Drake. Usa la R per sopprimere un carry isolato prima che il frontline possa fare peel."
  weakness: "Le catene di hard CC spengono i suoi dash combo. Le statline da tank attutiscono il danno % max HP. La R la lega a un singolo target, quindi una comp con peel può isolarla dopo la fine della suppression."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "Bruiser melee immobili senza dash"
      reason: "I suoi passive dash dopo ogni ability cast le permettono di entrare e uscire dai windup telegrafati (presa di Darius, silenzio di Garen, E di Illaoi). La suppression della R bypassa la loro tankiness per la kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Top laner ranged squishy"
      reason: "I dash brevi multipli del passive chiudono il gap su cui i ranged top contano. In melee la sua Q scala con il max HP del target e li danneggia gravemente prima che possano fare disengage."
    - examples: ["nasus", "kayle"]
      archetype: "Scaler late-game che hanno bisogno di livelli o stack"
      reason: "La sua dominance early livello 2-6 li domina prima del loro power spike (stack della Q di Nasus, livelli 11 e 16 di Kayle). Forza le kill presto per negargli il lategame che gli serve."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tank con hard CC e stat-check"
      reason: "CC point-and-click (R di Malphite, W di Poppy che blocca i dash, brittle + knock-up di Ornn) interrompe i suoi dash combo prima che la R atterri. L'armor + HP raw attutisce anche il % max HP scaling sulla Q."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Poker e kiter a lungo raggio"
      reason: "E di Jayce (knockback) e mega R di Gnar interrompono il dash a metà cast. I kiter restano fuori dal suo threat range, costringendola a impegnare i dash da troppo lontano e poi punirla con le ability in cooldown."
    - examples: ["olaf", "tryndamere"]
      archetype: "Campioni con ultimate che annullano suppression o esecuzione"
      reason: "La R di Olaf rimuove la sua suppression al cast, neutralizzando il suo principale tool da pickoff. La R undying di Tryndamere sopravvive al frame di esecuzione e gli permette di girare fuori dal colpo a terra."
---

## Panoramica

Ambessa è una skirmisher top (un campione fatto per piccoli scontri brevi, non per i teamfight lunghi). È un campione AD che fa danno fisico (AD = attack damage; l'alternativa è AP = ability power, la statistica del danno magico dei mage). Usa **energia** come risorsa al posto del mana, e vive o muore con la sua passiva, **Drakehound's Step**: ogni cast di ability attiva un breve dash più un basic attack potenziato con range, danno e attack speed extra. Quel singolo meccanismo la trasforma in una specialista del chain-trade — ogni Q, W o E le concede un auto-attack reset gratuito (un AA che parte subito ignorando il timer normale dell'attack speed), quindi una combo completa mette a segno quattro o cinque colpi in due secondi. Il suo kit punisce chiunque provi ad affrontarla in melee senza un hard interrupt (uno stun, un knock-up o un silence che la fermi a metà cast).

Il game plan è semplice: domina la lane dal livello 2 con un all-in **Q + E** (un "all-in" è un trade totale fino alla kill, non uno scambio breve), poi snowball nelle skirmish a metà partita attorno a Voidgrubs e Drake. "Snowball" significa un piccolo vantaggio iniziale — una kill, una tower plate (un pezzo di corazza della torre nei primi 14 minuti che dà oro extra quando lo rompi) — che si auto-amplifica nel tempo. Usa la **R** per sopprimere un carry avversario isolato (il damage dealer principale del team) prima che il frontline (i tank davanti a lui) possa fare peel — "peel" significa proteggere un alleato usando CC o il proprio corpo per togliere di dosso chi gli sta saltando addosso. Il lategame è la sua debolezza: appena i tank avversari finiscono due item, il suo danno % max HP sulla Q smette di scioglierli, quindi chiudi la partita prima del minuto 28.

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Default per i trade AD; il lifesteal sostiene i tuoi dash chain.

**Core items (in ordine):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primo item skirmisher principale. Dopo due hit di ability sullo stesso bersaglio entro 1.5 secondi, attiva uno shield più un grosso bonus damage sul prossimo colpo. Le sue combo dash raggiungono quella soglia in ogni fight.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default. La maggior parte dei matchup top è AD; la riduzione del danno auto-attack conta nei trade prolungati.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (ogni colpo riduce un po' l'armatura del bersaglio, fino al 30% accumulato) più HP più AD. Le sue auto-attack potenziate dal passive accumulano lo shred più velocemente della media.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike di sopravvivenza. Quando subisci grossi danni in pochi secondi, l'item ti dà uno shield ampio. Utile quando salti col blink della R sul carry avversario e il resto del team la focusa sotto.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converte il danno fisico in arrivo in un sanguinamento lento (danno spalmato sui 3 secondi successivi invece che istantaneo), dandoti il tempo di chiudere il trade.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — sostituisce le Plated Steelcaps quando il team avversario ha due o più fonti di hard CC, oppure danno AP pesante. Danno magic resist più tenacità (riduce la durata di stun e slow su di te).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro top AP (Vladimir, Rumble, Gwen). Dà uno scudo "lifeline" contro il danno magico (uno scudo che si attiva una volta sola quando scendi sotto il 30% HP) più AD extra a HP basso, pensato per tenerti vivo abbastanza da rispondere e ucciderli.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro hard CC a lunga gittata telegrafato (Malphite R, Ornn R, Sett W). Dà un spell shield monouso (blocca la prossima ability nemica che ti colpisce), così l'engage avversario manca e la R la lanci tu ai tuoi termini.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — quando sei già avanti in lane. Ogni kill o assist accumula AD bonus sull'item, alimentando un snowball lead — più kill fai, più colpisci forte, più kill fai.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — last item lategame. Ti dà una rebirth singola (resurrezione una tantum) ogni 5 minuti. Ti permette di andare a fondo nei salti col blink della R sul carry avversario senza buttare la partita su un misposition.

**Boots:** Plated Steelcaps di default. Mercury's Treads contro AP/CC. Salta i boots da mago tipo Sorcerer's — tu scali fisico.

**Skill order:** Porta al massimo **Q** per prima (danno principale e l'unica ability che scala con il max HP avversario), **E** seconda (waveclear e lo slow AOE che imposta il secondo strike di Q), **W** per ultima. Metti un punto in **R** ai livelli 6, 11 e 16.

**Runes:** Primary tree **Precision**:
- **Conqueror** — keystone (la runa principale e più potente del ramo). Accumula AD bonus e healing più rimani in fight contro i campioni; perfetta per il suo kit da chain-trade.
- **Triumph** — piccola heal e burst di gold quando ottieni una takedown a HP basso.
- **Legend: Alacrity** — attack speed bonus passivo che cresce con le takedown.
- **Last Stand** — danno extra quando scendi sotto il 60% HP.

Secondary tree **Resolve**:
- **Second Wind** — rigenerazione HP che scatta dopo aver subito danno da campione. Contrasta il poke in lane.
- **Unflinching** — tenacità extra una volta che **Flash** è in cooldown. Utile quando salti nel team avversario con la R e provano a incatenare CC su di te.

Stat shards (i tre piccoli bonus statistici sotto le rune): Adaptive Force (dà AD oppure AP a seconda di cosa il tuo champion costruisce — per Ambessa si converte in AD), poi Adaptive Force di nuovo, e infine Armor o HP a seconda del matchup.

## Matchup chiave

- **Darius:** Favorevole. Il bordo esterno della sua Q è la parte che lo cura; entragli dentro col dash in avanti della tua Q1, poi Q2 per uscire. Lui ha bisogno di piazzare entrambe Q + E per fare un all-in completo; tu puoi usare la W per assorbire la presa della sua Q con uno scudo e fare uno scambio alla pari. Costringilo a usare prima il bleed della W (forzalo a sprecarla), poi entra quando è in cooldown.
- **Sett:** Favorevole. Non ha dash, solo uno slam frontale (W). Pre-6, le tue combo passive-dash lo battono nei trade prolungati. Dopo il 6, tieni **Flash** per schivare il knockback (lo spostamento) della sua R che altrimenti ti spinge dentro la zona del suo team.
- **Malphite:** Sfavorevole. Il suo passive shield attutisce l'all-in al livello 2; lo slow della Q gli permette di scappare quando ti impegni nell'attacco. Costruisci ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** come secondo item per bloccare la sua R engage. Evita i teamfight in choke point dove può fare un flank — ovvero attaccare di sorpresa da un fianco — passando dalla fog of war (le parti della mappa che non vedi perché non c'è una ward lì). Una ward è un piccolo occhio magico che piazzi per illuminare una zona.
- **Jayce:** Sfavorevole. Lui ha due forme; in forma ranged la combo Q + E ti fa poke (ti consuma HP da distanza sicura) prima che tu possa chiudere il gap. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** come starter, sta attaccato alla wave per la rigenerazione HP dai last-hit sui minion, e cerca le kill solo quando passa in forma melee e spreca la sua E.
- **Camille:** Skill matchup. Entrambi avete all-in forti; vince chi piazza per primo un cast pulito. La tua Q scala con il suo max HP corrente — costringila prima a usare la heal della W, poi Q1-auto-Q2 per portarla sotto il 50%. Piazza una ward nel tri-bush (il cespuglio a tre entrate vicino alla tua tower) così il suo hookshot — la ability che la lancia come un rampino contro un muro o un nemico — non ti prende gratis mentre torni in lane.

## Power spike & condizioni di vittoria

- **Livello 2 (Q + E):** Il primo grande spike. Con entrambe le ability e il dash passivo, una combo completa Q1-auto-E-auto-Q2-auto infligge quattro basic attack più due tick di ability in due secondi. La maggior parte dei top laner non riesce a competere su questo danno in uno scrap melee.
- **Livello 6 (R sbloccata):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** sblocca i pickoff — eliminare un nemico isolato fuori dal main fight. La passiva della R aggiunge anche armor penetration (il tuo danno ignora una parte dell'armor avversaria) e omnivamp (una piccola heal pari a una percentuale del danno che fai con le ability). Ti sostiene nelle skirmish del river.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completata (~ minuto 11-13):** Il tuo più grande spike da skirmish. Lo shield e il bonus damage si allineano con ogni combo completa, quindi gli 1v1 e i 2v2 attorno ai Voidgrubs girano a tuo favore.
- **2 item + boots (~ minuto 18-22):** Con ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online, raggruppati col team per i fight di Drake. Salta sul carry avversario con la R — la suppression (un CC che disabilita ogni ability e movimento, anche **Flash**) lo blocca per 1.5 secondi, quanto basta al tuo team per il follow-up.

## Errori comuni

- **Sprecare Sundering Slam (il secondo cast di Q) su un minion.** Il secondo cast potenziato è il tuo damage spike. Se colpisci un minion con la Q1 invece che un campione, hai bruciato il reset su una creatura che muore in un colpo comunque. Tieni Q1 finché non puoi garantire il contatto col campione.
- **Saltare troppo profondo dentro il team avversario con la R.** La R va sul campione nemico **più lontano** in linea, non sul più vicino. Se tre nemici stanno davanti al loro carry, il blink ti porterà oltre tutti e ti deposita dietro all'intero team. Controlla sempre il positioning prima di premere R — allinea il carry come unico target tra te e il punto più lontano.
- **Mettersi in brace W nel vuoto.** Lo slam potenziato si attiva solo se durante la brace blocchi davvero danno non-minion. Stare in brace in lane contro i minion spreca il cooldown a vuoto. Usa W reattiva — quando vedi partire l'animazione di un'ability nemica, in quel momento attivi la brace.
- **Tenere la R per l'engage perfetto che non arriva mai.** La R ha 100+ secondi di cooldown nell'early. Se ce l'hai pronta al livello 6 e il laner avversario ha appena usato la sua combo principale (key ability in cooldown), entra e usa la R su di lui. Un laner morto sono due wave di farm gratis e una tower plate extra (le placche di gold sulla torre dei primi 14 minuti).
- **Andare in 1v1 contro gli iper-tank pensando che la Q li uccida.** Il danno % max HP fa paura sulla carta ma l'armor si applica comunque. Una volta che un Ornn o un Cho'Gath finisce ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + item da tank, non li uccidi più da sola. Raggruppati con il tuo jungler invece.

## Suggerimento avanzato

Padroneggia il **dash-AA weave** (intreccio dash + auto-attack). Ogni ability cast attiva il passive dash e un'AA potenziata, quindi la sequenza ottimale in una combo completa è *cast → dash → AA → cast → dash → AA*, non *cast → cast → cast → AA*. Se premi la seconda ability prima di aver completato l'AA potenziata, perdi il bonus su quel colpo. Il ritmo pulito: **Q1 → dash in avanti → AA → E → dash → AA → Q2 → dash → AA → R**. Esercitati nella Practice Tool (la modalità singleplayer di allenamento) contro un target dummy (un manichino bersaglio fisso) finché ogni AA si registra; in lane vera questo trasforma un trade da 2 secondi in sette istanze di danno separate ed è la differenza tra una kill e un nemico che scappa a 50 HP.
