---
title: "Gangplank Top Build & Guida — Patch 16.9"
slug: "gangplank-top"
language: "it"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Guida Gangplank top lane per Patch 16.9: starter kit, build crit con Trinity Force, matchup chiave, power spike, errori comuni e un consiglio avanzato sui barili concatenati."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Auto-attack potenziata periodica che brucia il bersaglio infliggendo true damage nei secondi seguenti. Costringe a una finestra in melee — traccia il timer per anticipare l'all-in di GP."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Colpo a distanza a 625 di gittata che applica danno fisico, on-hit (crit, Sheen di Trinity Force) e regala oro sull'uccisione. Principale fonte di poke e detonatore di barile."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Cleanse di tutti i CC e cura in base agli HP mancanti. Cooldown lungo, costo mana alto — riservala al CC che decide il trade, non a uno slow minore."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Piazza un barile; colpiscilo per detonarlo, infliggendo danno fisico AOE e slow. Due barili adiacenti si concatenano — un combo con 3 barili in catena è il picco di win-condition."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Ult globale: bersaglia un punto qualsiasi della mappa per palle di cannone che rallentano e infliggono danno magico. Migliorabile in shop col plunder (oro bonus che la Q dà uccidendo unità)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che impilano cure (Aatrox, Soraka, Vladimir, Dr. Mundo) — le grievous wounds tagliano la cura nemica e il danno resta"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro tank che impilano HP (Cho'Gath, Sion, Ornn) — la armor pen scala col vantaggio HP del bersaglio su di te"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Kennen R, Vladimir, Rumble) — lo scudo magico parte sotto soglia HP e ti salva dal colpo finale"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contro composizioni di all-in burst (Camille E + R, Wukong R, Malphite R) — lo scudo HP scatta sul colpo da one-shot"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Sopravvivi alla lane fino a Trinity Force, poi concatena 3 barili nei teamfight. Un Q crit su un cluster di 3 barili sul carry avversario chiude il fight prima che inizi."
  weakness: "Niente dash, mobilità base nulla. Hard counter di champion con strumenti che bloccano gli auto-attack (parry di Fiora, E di Jax) e di engage hard-CC point-and-click che non riesci a cleansare in tempo."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Grasp dà sustain nei trade Trial by Fire e impila HP permanenti — il pattern che Gangplank cerca mentre scala. Demolish punisce le torri sui roam avversari, Conditioning regge il frame late-game, Overgrowth gonfia il pool HP di Trinity Force."
    secondary_rationale: "Precision secondaria: Triumph rimborsa HP e oro sulle takedown quando flanchi un teamfight con R — Gangplank dive spesso la backline, e l'heal salva il follow-up. Legend: Alacrity rampa attack speed per detonare i barili più velocemente e per la cadenza degli on-hit della Q."
    secondary_alternative: "Contro matchup ranged poke (Teemo, Quinn, Vayne top) swap Precision verso Inspiration con Biscuit Delivery (HP e mana sustain di cui non hai altre fonti) e Cosmic Insight (CDR su summoner spell, Flash e Teleport più frequenti)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Scaler late-game immobili"
      reason: "La Q di Gangplank arriva a 625 unità, ben oltre la loro range di farm in auto-attack. Non hanno dash per chiudere la distanza e punire un barile concatenato; tu scali più veloce di loro una volta online Trinity Force."
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruiser melee senza disengage"
      reason: "Resta fuori dalla loro threat radius con la gittata della Q e rallentali con le zone di Powder Keg. Quando finalmente chiudono, non hanno strumenti di follow-up per tenerti in melee — resetti il trade e te ne vai."
    - examples: ["urgot", "kled"]
      archetype: "Fighter con finestra early forte che poi cala"
      reason: "Farma a gittata di Q ai livelli 1-3, conserva W per il loro ult al livello 6, poi outscala dopo Trinity Force. Non hanno risposta late-game al combo da teamfight con barile concatenato."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Fighter mobili che bloccano gli auto-attack"
      reason: "La W parry di Fiora stunna Gangplank e riflette il CC; la E di Jax schiva ogni auto e Q per due secondi. Entrambi resettano il pattern di trade che Gangplank serve per scalare in late game."
    - examples: ["renekton", "olaf"]
      archetype: "Bully early-window da all-in"
      reason: "Stun di Renekton al livello 2 + ult al livello 6 cancellano il piano di scaling di Gangplank prima di Trinity Force. La R di Olaf gli concede CC immunity, quindi il W cleanse non lo ferma mentre lo investe con asce in true damage."
    - examples: ["malphite", "kennen"]
      archetype: "Engage hard-CC point-and-click"
      reason: "La R di Malphite è point-and-click senza skillshot da schivare. Lo stun di Kennen W e la R AOE concatenano CC oltre la finestra di cleanse della W di Gangplank — una volta partita la catena, la W non fa in tempo."
---

## Panoramica

Gangplank è un top laner che scala in late game pagando una tassa pesante in early game in cambio di uno dei più alti tetti di danno crit del ruolo. Il suo kit sembra carico ma si riduce a due idee. **Parrrley (Q)** è una auto-attack a distanza con range 625 che applica gli effetti on-hit (chance di crit, proc di Sheen da Trinity Force, burn in true damage) e li trasferisce a chi è lontano. **Powder Keg (E)** è un barile piazzato a terra che lui colpisce per farlo esplodere; due barili adiacenti si concatenano, e tre barili creano un'altra catena a cascata. Il pattern signature è impilare 3 barili concatenati e far scoppiare la catena con la Q su un team avversario raggruppato per un burst istantaneo — danno alto concentrato in un secondo.

Il piano partita richiede pazienza. Farma in sicurezza a gittata di Q nella finestra bullizzata dei livelli 1-6, completa Trinity Force intorno al minuto 14-16, e inizia a fare pressione sulle side lane con **Cannon Barrage (R)** per ribaltare i dragoni o rubare torri da un'altra parte della mappa. Nei teamfight, piazza i barili dietro la front line (i tank e bruiser davanti al team) e cammina avanti dentro la catena solo quando puoi farla detonare sulla backline avversaria (il carry seduto dietro al loro team che spara da lontano). Se sopravvivi alla lane e arrivi a 3 item, ogni fight in cui colpisci una Q crit su barile concatenato è chiuso.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** contro bruiser melee — vuoi la lifesteal (danno da auto-attack che ti cura) per i trade (scambi brevi in cui spendi un paio di abilità e te ne vai). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion contro matchup ranged (Teemo, Quinn, Gnar) — la rigenerazione ti permette di farmare sotto poke (danno a distanza che logora HP senza commitment).

**Item core (nell'ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un bonus passivo che potenzia il prossimo auto-attack dopo aver lanciato un'abilità) procca su ogni Q per un boost di danno enorme. Attack speed, ability haste (la stat che riduce il cooldown delle abilità), HP — tutta la stat-line è il picco di win-condition di Gangplank.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed per detonare i barili più velocemente e per la cadenza degli on-hit della Q.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — primo item crit; rimborsa mana ad ogni Q. Risolve il problema mana di Gangplank e avvia lo scaling crit.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — il picco di danno crit. Q crit e detonazioni dei barili ora one-shottano i target squishy (campioni con poche difese, come ADC e mage burst).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal per la sustain nei teamfight prolungati, più uno scudo HP di overflow se resti pieno di vita.

**Item situazionali:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni che impilano cure (Aatrox, Soraka, Vladimir, Dr. Mundo); la passiva grievous wounds taglia le cure nemiche, così il tuo danno resta invece di essere recuperato.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro tank che impilano HP (Cho'Gath, Sion, Ornn). L'armor pen scala col vantaggio HP del bersaglio.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Kennen R, Vladimir, Rumble); lo scudo magico parte quando vai sotto soglia HP e ti salva dal colpo che chiude la kill.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — contro composizioni di all-in burst (Camille E + R, Wukong R, engage di Malphite con R); lo scudo HP procca sull'istante in cui prendi un colpo da one-shot, comprandoti il secondo che ti serve per cleansare con W e resettare.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default. Swap a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro team AD-heavy (3+ minacce di danno fisico), oppure ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro composizioni AP con CC pesante dove la W sarà spesso in cooldown.

**Skill order:** Massimizza **Q** per primo (lo scaling per rank di Parrrley è la fonte di danno principale), **E** per secondo (cooldown barile più basso = più catene), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Secondario **Precision** con **Triumph** e **Legend: Alacrity**, oppure **Inspiration** con **Biscuit Delivery** e **Cosmic Insight** contro matchup ranged poke.

## Matchup chiave

- **Darius:** Hard bully early — Q che cura, W che rallenta, R che esegue. Può stoncarti dai livelli 1-6. Farma a gittata di Q, non contestare minion in melee, e tieni **W** per il pull della sua E. Una volta online ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** lo outscali in 1v1; fino ad allora la lane è una corsa alla sopravvivenza.
- **Sion:** Lane di farm gratis. Lui impila cadaveri e HP, tu impili barili e crit. Pushalo sotto torre con i barili E, negagli i minion cannone per la sua passiva. Evita la Q caricata point-and-click e lo outscali ogni game.
- **Fiora:** Peggior matchup di lane. La sua **W** è una parry — una finestra breve in cui assorbe il prossimo auto-attack o abilità che la colpisce, ti stunna e riflette ogni crowd control. Anche un barile slow può ritorcersi contro. Mai lanciare **Q** sul suo vital point (il punto colorato sul corpo che deve colpire per la passiva) — risponde con il riposte (contro-colpo) appena il proiettile arriva. Farma sotto torre, chiama il jungler, e accetta un deficit di CS; non puoi fare 1v1 finché non hai 3 item e lei è indietro.
- **Camille:** Matchup da dive al livello 6 (il dive è quando un nemico entra sotto la tua torre, si prende qualche colpo dei cannoni, e prova a ucciderti lo stesso). Ti chiude dentro la gabbia della sua R. La sua **E** stun ignora lo slow del barile e la **R** ti isola. Compra ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** prima del solito (4° item) e tieni Flash per la gabbia della sua R, non per i trade di poke.
- **Malphite:** Hard counterpick — la sua R point-and-click non ha tell da skillshot e la tua **W** non può cleansarla se atterra mentre stai casting un'altra cosa. Tieni in mente ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** come build-path d'emergenza e non prendere mai teamfight senza vision sull'angolo da cui può engagiare.

## Power spike & condizioni di vittoria

- **Livello 6:** La prima **Cannon Barrage** sblocca pressione globale. Puoi ribaltare un fight per il dragone con la R dalla base, finire un nemico in fuga in mid lane con la zona di slow, o zonare la bot lane fuori da un obiettivo — tutto senza lasciare la tua wave.
- **Livello 9 (Q maxata):** Parrrley raggiunge il pieno scaling per rank. Il costo mana scende a 30 e il danno salta; puoi pokare ogni matchup che non ha parry o dodge e scambiare Q per Q a tuo favore.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completo (~ minuto 14-16):** Il picco più grosso. Sheen procca ogni 1.5 secondi sulla Q, l'attack speed dimezza il tempo di detonazione del barile, e finalmente il pool HP ti permette di sopravvivere a un tentativo di one-shot. È il momento in cui la lane si ribalta da difensiva a aggressiva — puoi forzare trade che prima dovevi evitare.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** Q crit su un cluster di 3 barili concatenati cancella ogni squishy in un secondo. Forza i fight obiettivo qui e stai sul bordo della frontline del tuo team, in modo che la catena di barili colpisca i carry avversari.

## Errori comuni

- **Sprecare W come cleanse di panico al primo CC.** Tieni **Remove Scurvy** per l'abilità che decide il trade — la E di Camille, lo stun della W di Renekton, lo stun della W di Sett. Bruciarla su un polymorph di Lulu o uno slow minore ti lascia indifeso contro la vera minaccia.
- **Impilare barili prima del Q rank 3.** Sotto rank 3 il cooldown del barile è troppo lungo per il timing della catena, quindi il secondo barile spesso scade prima che il terzo sia pronto. Farma con barili singoli fino al livello 5, poi inizia ad allenare le catene.
- **Usare R in modo egoista senza coordinare col team.** Cannon Barrage è uno strumento globale di engage — un'abilità che inizia un teamfight da un'altra parte della mappa; se la sprechi su un inseguimento da poke 1v1 il tuo team perde il fight 4v5 a casa. Pinga sempre l'intento, sincronizzala con la smite del jungler, e controlla la minimap prima di lanciare.
- **Comprare item difensivi prima dello scaling crit.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** sembra sicuro, ma se lo costruisci prima di ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** e ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** rinunci al picco di danno che giustifica la pick di Gangplank. Affidati al W cleanse e al pool HP di Trinity per attraversare il mid-game.
- **Dimenticarsi di upgradare R con il plunder.** Ogni Q che uccide un'unità (minion, mostro o nemico) ti dà oro; spendilo in shop per migliorare Cannon Barrage (più danno, durata maggiore, zona di cura). Una R non upgradata al minuto 30 è una perdita di danno di circa il 30% sulla stessa ult.

## Suggerimento avanzato

Allena il **barrel-jump combo**: piazza il barile A, subito dopo piazza il barile B alla distanza massima di catena (appena dentro al raggio di link), poi auto-attacca il barile A. La detonazione concatenata innesca il barile B; mentre B è a metà catena, piazza il barile C adiacente a B. Con l'attack speed di ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** e la Q al rank 5, puoi sostenere un pattern di catene continue ogni 3-4 secondi, creando una zona AOE rotolante intorno alla quale il team avversario è costretto a girare. È la differenza tra un Gangplank che cancella la backline e un Gangplank che pokka inefficacemente da bordo fight.
