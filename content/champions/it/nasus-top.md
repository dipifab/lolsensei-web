---
title: "Nasus Top Build & Guida — Patch 16.9"
slug: "nasus-top"
language: "it"
patch: "16.9"
champion: "nasus"
role: "top"
last_updated: "2026-04-29"
description: "Guida Nasus top per League of Legends Patch 16.9: build da juggernaut con stacking di Q, sopravvivenza in lane, matchup chiave, power spike, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Nasus"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Soul Eater"
      description: "Lifesteal passivo (una percentuale fissa del danno inflitto torna come cura sugli auto-attack). Permette a Nasus di restare in lane mentre last-hitta i minion per gli stack di Q."
      dd_spell_id: "Nasus_Passive"
    - key: "Q"
      name: "Siphoning Strike"
      description: "Auto-attack potenziato (auto-attack reset — parte subito, ignorando il timer normale). Uccidere il bersaglio con Q aumenta in modo permanente il danno della Q stessa: tutto il champion gira intorno a questo numero."
      dd_spell_id: "NasusQ"
    - key: "W"
      name: "Wither"
      description: "Abilità ranged a target che rallenta pesantemente Move Speed e Attack Speed di un campione nemico per più secondi. Il rallentamento sale nel tempo. È l'unico strumento di stick o di fuga del kit."
      dd_spell_id: "NasusW"
    - key: "E"
      name: "Spirit Fire"
      description: "Zona a terra che fa danno magico e riduce l'armatura di chiunque ci stia sopra. Pulisce wave e indebolisce i minion prima del Q-stack sul cannone."
      dd_spell_id: "NasusE"
    - key: "R"
      name: "Fury of the Sands"
      description: "Buff ult: HP massimi, Armor e Magic Resist per 15 secondi, danno ad area ogni secondo intorno a Nasus, e cooldown della Q ridotto. Premila prima di ogni teamfight o all-in."
      dd_spell_id: "NasusR"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap da Plated Steelcaps quando il team avversario ha tanto danno magico o CC concatenato (Lissandra ult, Malphite ult, Sett pull)"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro team auto-attack heavy (Yasuo, Master Yi, Tryndamere) — riflette danno e applica Grievous Wounds (taglia le cure nemiche del 50%)"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quando ti serve Move Speed extra per inseguire i kiter (Quinn, Vayne top, Gnar) e arrivare a range di Q"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro frontline che impilano armor (Malphite, Rammus, Shen) — ogni Q sbuccia armor stack utili a tutto il team"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contro AP fighter o assassini che pushano la wave in gruppo — aura di danno magico più MR"
  base_combo: ["E", "AA", "Q", "W", "R"]
  win_condition: "Arriva a 300+ stack di Q, premi R in fight, Wither sul carry e fai one-shot col cannone Q. Trinity Force in Sundered Sky è lo spike in cui i 1v1 in side lane diventano gratis."
  weakness: "Niente dash, leap o blink — Wither è l'unico stick tool. I top ranged (Quinn, Teemo, Vayne, Gnar) lo bullizzano ogni wave; se Nasus va sotto di 30 CS, il late game non arriva mai."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Bruiser melee a corto raggio senza poke ranged"
      reason: "Nasus perde lane solo quando viene pokato da distanza. I bruiser melee devono entrare a range di Q per fare danno: Nasus stacka gratis ogni wave e Wither li tiene fuori dall'all-in."
    - examples: ["yasuo", "yone"]
      archetype: "Carry melee da auto-attack che devono restarti incollati"
      reason: "Wither taglia sia Move Speed sia Attack Speed (quanto velocemente colpisce) — esattamente le due stat che il loro kit con windwall e dash sfrutta. Una volta Q + Sundered Sky, non duellano un Nasus stackato."
    - examples: ["mordekaiser", "darius"]
      archetype: "Scaler melee lenti senza fuga"
      reason: "Se Nasus sopravvive all'all-in early con Bone Plating e l'heal di Doran's Shield, scala più di loro ogni minuto. Il loro kit non lo kita una volta usciti i Mercury's Treads."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Top ranged o con blind"
      reason: "Stanno fuori dal range di Q e gli sgranocchiano HP gratis con gli auto. La W di Vayne (true damage al terzo colpo) e la Q di Teemo (un blind che annulla i suoi auto) bypassano l'armor — Nasus non stacka e non può tradare senza un gank."
    - examples: ["gnar", "kennen"]
      archetype: "Top ranged con CC integrato"
      reason: "Pokano fuori dal range di Q e hanno stun ranged: il lancio di Gnar in mega-form, lo stun della W di Kennen al terzo segno. Tengono Nasus a HP basso senza mai entrare a range di Wither."
    - examples: ["fiora", "camille"]
      archetype: "Duellanti true-damage con tool di disengage"
      reason: "I Vital di Fiora (segnali sul corpo che, una volta auto-attaccati, infliggono true damage — danno che ignora armor e MR) bruciano qualsiasi armor che Nasus stacca. La R di Camille lo isola dal team per 4 secondi, abbastanza per ucciderlo prima che la R finisca."
---

## Panoramica

Nasus è un **juggernaut** (un campione melee lento e immobile che fa molti danni una volta avviato, ma non ha strumenti di mobilità per iniziare un fight). La sua identità sta su un numero: il **conteggio degli stack** sulla Q, **Siphoning Strike**. Ogni volta che dà il last hit a un minion, a un mostro grande della jungle o a un campione con la Q, l'abilità guadagna danno bonus permanente su ogni Q futura — per sempre, senza tetto. Un Nasus a 300 stack al minuto 22 ha una bomba single-target che one-shotta i carry squishy. Un Nasus a 50 stack al minuto 22 colpisce con uno spaghetto bagnato. La lane phase è quindi una **macinatura di farm**: l'obiettivo è sopravvivere e stackare, non vincere trade.

Il piano partita è semplice da spiegare e lento da eseguire. In lane, **freeza la wave** (lascia che si fermi appena fuori dal range della tua torre, negando all'avversario un last-hit sicuro) così stacki la Q al riparo della tower mentre il laner avversario deve allontanarsi dalla sua per raggiungerti. Pusha solo quando ti serve un back. Dal minuto 14, **Trinity Force** più il primo **Sundered Sky** ribaltano la matematica: la Q one-shotta i minion, gli auto chunk le torri, i 1v1 in side lane diventano vincibili. Premi **R** prima di ogni fight per HP e resistenze, poi metti **Wither** sul carry avversario per bloccarlo mentre lo Q in faccia. Nasus è uno dei più forti **late-game scaler** (campioni la cui potenza cresce ad ogni item, con picco oltre 3 item) del gioco — ma solo se arriva al late con gli stack intatti.

## Build Consigliata

**Item iniziali:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passiva di rigen HP attutisce il poke nemico (danno ranged a basso costo che ti chippa HP senza commitare a un fight) ed è obbligatoria in quasi ogni matchup di Nasus, anche melee — cedi prio in lane in cambio di sopravvivenza, ed è il deal corretto per un campione il cui piano è "resta vivo, farma, scala".

**Item core (nell'ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — il momento in cui Nasus smette di essere debole. La passiva Spellblade (ogni cast di abilità potenzia il prossimo auto-attack con danno bonus) procca sull'auto-reset di Q, raddoppiando il danno effettivo di ogni Q. AD, ability haste (stat che riduce i cooldown delle abilità), HP, attack speed e Move Speed — il kit ha bisogno di tutte e cinque, e Trinity le impacchetta in un item solo.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — stivali di default quando il nemico ti fa male soprattutto con auto-attack. Riducono il danno in entrata negli scambi prolungati (avanti-indietro di colpi in lane).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — il primo auto contro un campione in fight è sempre crit e ti cura. Con l'auto-reset della Q, lanci Q (l'auto potenziato) e il crit arriva on demand. Si sposa col lifesteal di Soul Eater per il sustain nei duelli prolungati.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP più uno **scudo lifeline** che si attiva da solo quando i tuoi HP scendono sotto ~30%. Quella finestra è esattamente quando ti serve un secondo extra per piazzare una Q da 300 stack per il reset.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resistance più una passiva di healing-amp che potenzia il lifesteal di Soul Eater, il crit-heal di Sundered Sky e qualsiasi cura ricevuta da Soraka o Yuumi. Compralo come quarto o quinto a seconda del danno (AP o AD) prevalente del team avversario.

**Item situazionali:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap da ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando il team avversario ha tanto danno magico o **CC** (crowd control: stun, root, knockback — tutto quello che ti blocca e ti impedisce di agire) concatenato. La tenacity (stat che accorcia la durata del CC su di te) è critica per un campione senza dash.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro composizioni auto-attack heavy (Yasuo, Master Yi, Tryndamere). Riflette parte del danno auto-attack a chi ti colpisce e applica **Grievous Wounds** (un debuff che dimezza le cure del nemico) on hit.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — quando ti serve la passiva di Move Speed accumulata per inseguire i kiter (campioni che indietreggiano mentre attaccano, tipo Quinn, Vayne top, Gnar) e arrivare a range di Q prima che si riposizionino.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro frontline che impilano armor (Malphite, Rammus, Shen). Ogni Q sbuccia stack di armor utili al danno di tutto il team.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contro AP fighter e assassini che pushano la wave in gruppo. Aura di danno magico che aiuta a pulire wave che richiederebbero 3 Q per essere rotte.

**Stivali:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** è il default. Passa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando il team avversario ha tre o più fonti di CC oppure tanto danno magico.

**Skill order:** Massimizza **Q** per primo — ogni rank ne abbassa il base cooldown e alza il danno, entrambi accelerano lo stack. Massimizza **E** per secondo per waveclear e armor shred (un debuff che taglia la stat di armor del bersaglio per qualche secondo). Massimizza **W** per ultimo: il valore di slow scala col rank ma i primi punti bastano già per peelare un diver melee. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con la keystone (la runa principale dell'albero) **Grasp of the Undying** — ogni 4 secondi in fight, il prossimo auto contro un campione fa danno magico bonus, ti cura e ti dà HP permanenti. Le cure ti tengono in lane sotto poke, gli HP permanenti scalano col tempo — esattamente la curva che Nasus vuole. Abbinala a **Bone Plating** (riduzione del danno sui prossimi 3 colpi dopo che hai subito danno), **Conditioning** (Armor e MR extra dopo il minuto 12, uno spike apposta per Nasus) e **Overgrowth** (HP che scalano con i minion che muoiono vicino a te, perfetta per un top che farma 8+ minion a wave). Secondario **Precision** con **Triumph** (cura piccola e gold burst a takedown, salva all-in) e **Legend: Bloodline** (lifesteal che si accumula a ogni takedown). Stat shard: **Adaptive Force** + **Health Scaling** + **Health Scaling** — HP ovunque perché Nasus non ha bisogno di crit chance, solo di restare vivo finché non è up la R.

## Matchup chiave

- **Darius:** Matchup early molto duro. Ti out-trada a tutti i livelli fino a Trinity Force, e il bleed di Hemorrhage cancella il sustain di Soul Eater. **Freeza la wave** vicino alla tua torre (lasciala ferma appena fuori dal range della tower) e farma sotto turret con Q. Non contestargli i CS in mezzo alla lane — gli regaleresti kill che non dovrebbe avere.
- **Garen:** Matchup di skill (vince chi gioca meglio, indipendentemente dal pick). La sua **W** (uno scudo di damage reduction da 4 secondi) annulla il burst della tua Q, ma il silenzio della sua Q è schivabile camminando lateralmente nel momento in cui pesta il piede. Q sul cannone quando la sua Q è in cooldown; Wither se commit la E spin-to-win.
- **Quinn / Teemo:** Matchup ranged molto difficile. Ti blindano (annulla i tuoi auto-attack per qualche istante) e ti kitano fuori dal range di Q. Prendi ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeza la wave vicino alla tua torre e accetta di perdere CS — non vinci questo 1v1 senza aiuto. Chiama il tuo jungler appena overestendono (pushano troppo oltre il river senza vision).
- **Mordekaiser:** Matchup pari o leggermente favorevole. La sua R ti isola in un realm 1v1; se hai almeno 100 stack e Trinity Force, lì lo out-duelli. Tieni Wither dopo che ha usato la sua Q così lo slow lo tiene fuori dal range degli auto mentre Q + Sundered Sky lo chunk.
- **Fiora:** Matchup melee più duro. La sua **W** è un parry (scudo breve che blocca e contro-attacca la prossima abilità) — fingla con un auto prima di committare Q. I suoi Vital fanno **true damage** (danno che ignora sia armor che magic resistance — non c'è stat difensiva che lo riduca), quindi stackare HP non ti salva. Rusha ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** prima del solito.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **R**. Anche a 30 stack, l'HP bonus della R più lo slow di Wither ti rendono una minaccia 1v1 credibile. Cerca un **all-in** (commit totale a un kill, senza retromarcia) appena il tuo jungler si fa vedere top e l'avversario è a circa 60% HP.
- **100 stack di Q (~ minuto 12):** Soglia simbolica che ogni Nasus si segna. A 100 stack più danno base più lifesteal di Soul Eater, la Q uccide i caster minion (i minion magici della retroguardia) in un colpo e fa male notevole ai campioni.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completata (~ minuto 18-20):** Lo spike più netto della partita. Spellblade procca su ogni Q-reset, raddoppiando il danno effettivo. I 1v1 in side lane diventano vincibili; la pressione sulle torri è reale perché Sheen procca su ogni auto contro la struttura.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky + 250 stack (~ minuto 24-28):** Picco da teamfight. Premi R, entra nella back line (i carry squishy che stanno dietro ai loro tank durante un fight), Wither sul target prioritario e Q in faccia per ~1500 danno. Due reset di Q in una finestra di R chiudono un teamfight da soli.

## Errori comuni

- **Q sui minion senza prendere il last hit.** La Q stacka **solo** se il colpo finale arriva da Q. Tirare Q a un minion con HP pieni non ti dà nulla. Aspetta che sia a circa il danno della tua Q, poi cast.
- **Pushare la wave invece di freezare.** Una wave pushata ti porta lontano dalla tua tower, dove l'avversario può pokarti e il jungler può gankarti. Freeza vicino alla tua tower: colpisci con un paio di auto solo i primi minion nemici, lascia che i tuoi muoiano sui loro, e la wave si ferma naturalmente dalla tua parte.
- **Premere R fuori dal fight.** La R ha un cooldown lungo (oltre 100 secondi a rank 1). Usarla per pulire una wave o correre tra lane è un'ult sprecata. Tienila per un all-in o un fight a cui hai committato.
- **Wither su un target non minaccioso.** W è il **solo** stick tool (l'abilità che ti tiene incollato a un bersaglio che cerca di scappare) e l'unica via di fuga. Bruciarla su un tank che non ti inseguiva, o per sbaglio su un minion, ti lascia senza nulla per 14+ secondi. Riservala al carry che vuoi uccidere o al diver (un fighter melee che salta sulla tua back line) che ti salta addosso.
- **Comprare solo full tank.** Nasus scala con **AD** tramite Q, non con HP soli. Sunfire + Warmog's spegne il tuo danno; diventi un minion lento. Stai sul core Trinity Force + Sundered Sky, poi aggiungi resistenze.

## Suggerimento avanzato

Allena la **cancellazione dell'animazione di Q** per stackare più velocemente sui cannoni e sui campioni: lancia Q durante il wind-up di un auto-attack normale, e l'auto potenziato di Q parte subito sostituendo lo swing in corso. L'intero combo "Q + auto" arriva nel tempo di un solo auto, il che significa che infili una Q stackata in una finestra di trade dove avresti avuto tempo solo per un auto. Dentro R, con il cooldown ridotto, concateni Q → AA → Q → AA → Q in circa 4 secondi su un bersaglio Wither-ato. L'uso più importante è sul cannone ogni terza wave: una Q-cancel pulita garantisce lo stack anche se l'avversario in lane ti sta auto-attaccando per rubarti il kill. Provala in partita custom su un target dummy finché il ritmo non è automatico.
