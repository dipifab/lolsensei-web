---
title: "Morgana Support Build & Guide — Patch 16.9"
slug: "morgana-support"
language: "it"
patch: "16.9"
champion: "morgana"
role: "support"
last_updated: "2026-04-29"
description: "Guida Morgana support per League of Legends Patch 16.9: build da control mage, setup di Q poke, matchup chiave, power spike, errori comuni e tip avanzata."
quick_learn:
  champion_dd_id: "Morgana"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Antimage Support"
  abilities:
    - key: "P"
      name: "Soul Siphon"
      description: "Spell vamp. Morgana si cura per una porzione del danno che infligge a campioni, large minion e mostri della jungle medio-grandi."
      dd_spell_id: "Morgana_Passive"
    - key: "Q"
      name: "Dark Binding"
      description: "Skillshot lineare a lungo raggio: rooting sul primo nemico colpito + danno magico. Cooldown lungo, usalo come setup non come poke."
      dd_spell_id: "MorganaQ"
    - key: "W"
      name: "Tormented Shadow"
      description: "Zona a terra che ticca danno magico al secondo, aumentato sui target a basso HP. Tool principale di waveclear e zoning."
      dd_spell_id: "MorganaW"
    - key: "E"
      name: "Black Shield"
      description: "Scudo target su un alleato: assorbe danno magico e blocca tutto il CC fino a rottura."
      dd_spell_id: "MorganaE"
    - key: "R"
      name: "Soul Shackles"
      description: "Incatena tutti i campioni nemici vicini, slow e danno. Dopo 1.5s chi resta in range viene stunnato e prende altro danno."
      dd_spell_id: "MorganaR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Anguish" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target (Ahri charm, Lissandra R, Twisted Fate stun) — la bolla passiva mangia un'abilita"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro hard CC sull'AD carry che il tuo E non puo prevenire (chain-stun, hook multipli)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro comp con burst AOE pesante (Yone R, Kennen R, Orianna R) — active scuda tutta la squadra istante"
    - dd_id: "3107"
      name: "Redemption"
      against: "in fight lunghi su obiettivo (Drake, Baron) — heal AOE cross-map che non richiede di essere in range"
  base_combo: ["Q", "W", "AA", "R"]
  win_condition: "Atterra Q su un target chiave durante i fight da obiettivo, droppa W sopra di lui, poi R sul cluster mentre E scuda l'AD carry attraverso il chain stun."
  weakness: "Q e l'unico tool di setup: se sbagli non contribuisci per 10s. Move Speed bassa e nessun dash, un flank o hook su di te chiude il fight."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage support con una sola catena di CC"
      reason: "Black Shield blocca tutta la catena in un cast: il loro flash-engage atterra su un carry scudato che esce e ritrade, negando la kill su cui il loro bot lane e costruito."
    - examples: ["malzahar", "skarner", "warwick"]
      archetype: "Champion con suppression a canale lungo o lock single-target"
      reason: "Black Shield impedisce al canale di applicarsi. Castalo pre-emptive appena entrano in range e l'ultimate va in cooldown a vuoto."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "AD carry immobili con basic attack forti"
      reason: "Un marksman fermo si sposa con il setup di Q: rooting sul nemico, l'AD carry cammina su free auto e Black Shield copre il follow-up."
  counterpicks:
    - examples: ["yuumi", "milio", "soraka"]
      archetype: "Enchanter mobili o non bersagliabili che schivano la Q"
      reason: "Yuumi attaccata e untargetable; Milio e Soraka kitano dietro la wave. Senza una Q centrata Morgana non ha pressione e il danno di W e troppo lento per forzare un trade vero."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage support a lungo raggio che pokano oltre il range della Q"
      reason: "Il loro poke e piu veloce del tuo. Black Shield blocca solo un'abilita per cooldown, l'harass costante svuota l'HP del bot lane fuori dal range di ogni all-in."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Roaming o hook support che puniscono la bassa Move Speed"
      reason: "Morgana non ha dash e ha range corto su E: una Q sbagliata e un free hook addosso, e i roam ti prendono perche non ruoti veloce."
---

## Panoramica

Morgana e un control mage da supporto (un mage il cui compito e bloccare i
nemici e occupare spazio, non bruciarli con un burst) la cui identita si regge
su due bottoni:
**Dark Binding (Q)** per inchiodare un target, e **Black Shield (E)** per
cancellare il crowd control dal tuo AD carry (il ranged carry del bot lane,
cioe il campione che scala con gli item e fa la maggior parte del danno nei
fight). Intorno ci sono **Tormented Shadow (W)** come zona di damage-over-time
(danno spalmato nei secondi successivi), **Soul Shackles (R)** come AOE stun
ritardato (area of effect: danno o effetto su una zona, non su un target
singolo) e **Soul Siphon** come spell vamp passiva (un piccolo heal sul danno
che fai).

Il game plan e calmo e binario. In lane crei pressione con il poke di Q e lo
zoning di W; nei fight giochi il ruolo di "antimage support", costruito apposta
per neutralizzare un pezzo chiave di CC nemico. Black Shield e il verbo centrale:
blocca i disable magici (stun, root, charm, fear, suppression) nell'istante in
cui atterrerebbero. Castalo bene e un intero engage avversario non fa nulla.
Sbaglia il timing e sei un mage lento con uno skillshot.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da supporto che si quest-uppa per piu gold) piu 2 Health Potion. Salta starter da danno: Morgana scala su Ability Power e Ability Haste, non su snowball di kill in lane.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — auto-quest in Bounty of Worlds, poi un legendary support a fine partita. Accumula gold e cariche di ward in automatico mentre tu ti concentri sulla lane.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Il danno di W e R fa un salto netto contro qualsiasi target squishy (campioni ad alto danno e poche difese, tipo gli ADC) che non ha ancora comprato Magic Resist.
3. ![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Anguish** — passiva burn (danno aggiunto spalmato nei secondi successivi invece che istantaneo) che si fonde col tick di W. Da anche Ability Haste, quindi Q e shield piu spesso.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — ogni spell ora rallenta il bersaglio. Significa che chi mette il piede sulla tua W viene anche slowato, rendendo il follow-up di Q quasi impossibile da schivare.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 2.5s di stasis attivabile. Il caso d'uso classico di Morgana: casti R, stasis subito. Le catene continuano a tickare mentre sei untargetable.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico single-target pesante (Ahri charm, Lissandra R, Twisted Fate gold card). La bolla passiva mangia l'abilita che altrimenti ti bloccherebbe prima di castare R.
- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — quando il nemico ha hard CC che il tuo Black Shield non puo anticipare (chain-stun, hook multipli). L'active pulisce il CC da un alleato.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro comp con burst AOE pesante (Yone R, Kennen R, Orianna R). L'active scuda tutta la squadra in un istante e salva la backline (la riga arretrata del fight: carry e mage che fanno danno da dietro).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si trascinano su Drake o Baron. Heal AOE cross-map che lanci da fuori il fight.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sono il default — il tuo job e fare danno magico tramite zona e chain stun. Ionian Boots of Lucidity vanno bene se la squadra ha piu bisogno di shield uptime che di burn damage.

**Skill order:** Maxa **W** per primo (miglior scaling e l'abilita che spammi ogni wave), **Q** seconda (piu durata di rooting e danno), **E** ultima (lo shield scala bene comunque, il cooldown reduction conta meno con Ability Haste dagli item). Punto in **R** ai livelli 6, 11, 16. Parti **W** al livello 1 per pulire la prima wave o zonare il nemico.

**Runes:** Primary **Sorcery** con **Arcane Comet** (poke gratis che parte quando atterri Q o tagghi con W), **Manaflow Band** (sustain di mana per spammare W ogni wave), **Transcendence** (Ability Haste al livello 11, power spike chiave), **Scorch** (poke extra di Q nella fase early). Secondary **Resolve** con **Font of Life** (quando rooti con Q, gli alleati che colpiscono il bersaglio rootato si curano — perfetto col setup di Q) e **Overgrowth** (piccolo HP scaling permanente per il late game). Stat shard: Ability Haste, Adaptive Force, Health Scaling.

Glacial Augment (**Inspiration**) e una keystone alternativa se la squadra ha slow stackati (Rylai's, Ashe W).

## Matchup chiave

- **Leona / Rakan:** Tieni E per l'istante in cui ingaggiano. Tutta la loro combo e una catena di CC: Black Shield la blocca interamente in un cast. Mai bruciare E pre-emptive per il bonus shield value: aspetta di vedere l'animazione del dash partire.
- **Blitzcrank / Thresh:** Hook support. Stai dietro ai minion ogni volta che attraversi il river. Pre-scuda il tuo AD carry appena vedi il windup dell'hook e tutta la grab e annullata. Se l'hook atterra su di te invece, non hai escape.
- **Xerath / Brand:** Mage support a lungo raggio che ti pokano da fuori. Resta attaccato alla wave, non scambiare basic attack, lascia che il jungler hard-side la lane. Compra ![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Anguish** prima di qualsiasi item difensivo — la sola risposta e pushare e roamare.
- **Pyke:** Minaccia di roam con ult execute. Tracciato con vision in tri-bush e ingresso river; quando lascia bot, ping mid subito. Black Shield blocca lo stun del suo hook, quindi un pre-cast sull'AD carry puo salvare la lane se leggi l'engage in tempo.
- **Yuumi:** Enchanter untargetable su cui non puoi atterrare Q. Forza ogni fight attraverso il suo host: se rooti l'AD carry, il suo heal non lo salva attraverso la tua W. Bait la sua R con un finto engage, poi committa quando e in cooldown.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **W** a 1 e **Q** a 2, hai il kit completo da lane. La maggior parte degli engage support perde il trade al livello 2 perche il loro windup e piu lento del tuo setup di skillshot.
- **Livello 6:** Si sblocca **Soul Shackles**. Combinato con Flash, e uno degli engage tool piu forti del bot lane — Flash avanti, R sul bot lane nemico, Q sull'AD carry mentre cerca di uscire dal range delle catene.
- **![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Anguish completo (~ minuto 14-16):** La tua W ora brucia oltre al danno nativo. Restare nella zona per la durata piena cancella i target squishy, anche senza Q rooting.
- **![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) Rylai's Crystal Scepter + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass online (~ minuto 22-26):** La tua R diventa quasi garantita di stunnare. Casti R, stasis su Zhonya, lo slow di Rylai li tiene in range delle catene mentre lo stun risolve. Questo e il picco da teamfight.

## Errori comuni

- **Tirare Q come poke senza setup.** Una Q nuda a max range e facile da schivare — il nemico vede l'animazione lunga dello skillshot e si scansa. Droppa **W** sotto i piedi del bersaglio prima per slowarlo, poi **Q** sul percorso obbligato. Una Q sprecata sono 10 secondi di nulla.
- **Pre-castare E per il bonus shield value.** Tutto il senso di Black Shield e bloccare una specifica abilita nemica in arrivo. Castalo prima che il nemico committi e quello aspetta che scada. Aspetta di vedere l'animazione di dash, hook o charm partire — poi reagisci.
- **Usare R come tool di iniziazione contro squadre mobili.** Soul Shackles ha un delay di 1.5s prima che lo stun risolva. Champion mobili (Yasuo, Akali, Lee Sin) escono in dash dal range durante il delay. Usa R come follow-up su target gia rootati o cluster, non come engage flashy.
- **Stare troppo dietro nei fight.** La tua R aggancia solo champion entro circa 600 unita. Se peeki da dietro la squadra contribuisci zero danno di ulti. Stai entro range di R sul cluster, in second-line — piu vicino di quanto l'istinto dica.
- **Auto-attaccare i minion.** I basic attack di Morgana sono deboli e non pushano piu veloce di W. Regalano al nemico harass gratis senza alcun beneficio per te.

## Suggerimento avanzato

Allenati alla combo **R-Flash**. Casta Soul Shackles per primo, poi Flash a meta del channel sulla backline nemica. Le catene erano gia attaccate quando hai castato — Flash riposiziona te, ma i punti di ancoraggio delle catene si spostano con la tua nuova posizione, prendendo all'improvviso nemici che si pensavano al sicuro dietro la frontline (la riga avanzata: tank e bruiser che aprono il fight). Combina con la stasis di Zhonya nel momento in cui Flash atterra e lo stun risolve mentre sei untargetable. Il costo e il tuo **Flash** per i prossimi 5 minuti, quindi spendilo solo quando la kill, o lo sfondamento della squadra nemica, e gia chiuso in tasca.
