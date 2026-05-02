---
title: "Bel'Veth Jungle Build & Guida — Patch 16.9"
slug: "belveth-jungle"
language: "it"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Bel'Veth jungle per League of Legends Patch 16.9: starter kit, build core on-hit, matchup chiave, power spike, errori comuni e una tip avanzata finale."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher on-hit"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Cariche permanenti di attack speed dai large monster, jungle camp e takedown su champion. Ogni abilità casta dà anche un piccolo buff temporaneo di attack speed."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Dash breve che danneggia chi attraversa. Ognuna delle quattro direzioni ha un cooldown separato che scala con la sua attack speed."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Coda a terra che fa knock-up e slow. Se colpisce un campione, resetta istantaneamente il Void Surge in quella direzione."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channel con tempesta di colpi sul nemico a HP più bassi. Dà damage reduction e lifesteal durante il channel; recasta per chiuderlo prima."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Passiva: ogni secondo auto sullo stesso target aggiunge true damage stackato all'infinito. Attiva: consuma un Void Coral (lasciato da takedown su champion o epic monster) per entrare in true form con HP, range e attack speed extra."
      dd_spell_id: "BelvethR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro composizioni AP pesanti (Karthus, Ahri, Lissandra) — magic resist e on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "quando sei indietro o contro poke comp — il primo auto su ogni target critta e cura, recuperi tempo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con healing pesante (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando vuoi splitpushare una side lane da solo contro disengage comp — danno extra a torri e minion"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP single-target (Veigar, LeBlanc, Syndra mid) — magic shield sotto il 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Inchiodati a un singolo target coi Q dash e il true damage stackato della R finché non cade. Forza fight a livello 6 con R online, meglio dopo un Rift Herald o Baron per la true form lunga."
  weakness: "Hard CC (stun, knock-up, suppress) cancella i Q dash e la blocca sul posto. Senza R attiva o senza un target a cui inchiodarsi, ha poca minaccia a distanza e crolla contro tanto peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank jungler senza dash"
      reason: "L'on-hit pattern di Bel'Veth con Terminus gli sfonda armor e magic resist; resta incollata con i Q dash attorno alla loro hitbox e loro non hanno modo di disengage."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Jungler ranged squishy"
      reason: "I quattro Q dash chiudono ogni tentativo di kite (kite = ritirarti continuando ad attaccare): arriva in melee prima che loro completino una rotation a distanza."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmisher scaling senza CC iniziale"
      reason: "Vince le skirmish iniziali in jungle (skirmish = scontro 1v1 o 2v2 fuori dal teamfight) prima del loro power spike, poi converte il vantaggio sugli obiettivi."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Jungler con hard CC point-and-click"
      reason: "Il Q dash di Bel'Veth non schiva abilità targetate. Una Sejuani R o una Vi R la inchioda e l'on-hit pattern si ferma istante dopo istante."
    - examples: ["rammus"]
      archetype: "Tank anti-attack-speed"
      reason: "La passiva spinata di Rammus e il suo W steroid puniscono i suoi attacchi continui: si fa danno da sola provando a DPSarlo mentre lui controlla gli obiettivi."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Jungler forti early con invade"
      reason: "Il primo clear di Bel'Veth è onesto ma non bullizza nessuno; loro la invadono a livello 3 prima che lei abbia la Q maxata, la uccidono una volta e snowballano (snowball = un piccolo vantaggio iniziale che cresce nel tempo)."
---

## Panoramica

Bel'Veth è una fighter on-hit (= il suo danno principale arriva dagli auto-attack e dagli effetti degli item che si attivano a ogni colpo, non dalle abilità) che trasforma i suoi auto-attack in un flusso continuo di dash. **Void Surge (Q)** ha quattro cooldown direzionali e tutti scendono con l'attack speed: più attack speed accumula, più spesso dasha. **Endless Banquet (R)** ha due facce: una passiva che aggiunge true damage (true damage = danno che ignora armor e magic resist) ogni due auto-attack sullo stesso target, e una attiva che consuma un Void Coral — un pezzo che resta a terra dopo un takedown (kill o assist) su un champion o su un epic monster come Rift Herald o Baron — per entrare in true form, con HP, attack range e attack speed extra per un bel po' di tempo.

Il game plan è fare snowball (snowball = trasformare un piccolo vantaggio iniziale in uno molto più grande) attraverso la jungle. Pulisci i camp, fai gank a una lane (gank = imboscata in una lane con l'aiuto del jungler), forza un fight a livello 6, mangia il Void Coral, e poi aggancia il fight successivo con la true form attiva. Non è un pick scaling (scaling = diventare più forte col passare dei minuti): se l'early game stalla, diventa un Master Yi peggiore.

## Build Consigliata

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade è il jungle starter: man mano che uccidi i mostri della jungle, lo trasformi in un upgrade che potenzia **Smite** (lo summoner spell che ogni jungler prende — un colpo singolo molto forte su un bersaglio, usato sia per pulire i camp più velocemente sia per rubare gli obiettivi al team avversario).

**Core items (in ordine):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — ogni terzo auto-attack aggiunge danno fisico bonus on-hit; perfetto per un campione che attacca più velocemente di chiunque altro nel gioco.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat che si compone con la riduzione cooldown della sua Q.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — danno bonus on-hit che alterna armor pen (ignora una parte dell'armor del nemico) e magic pen (ignora una parte della magic resist); dà anche difese che si accumulano finché stai in melee range (= abbastanza vicino da menare un fendente), che per Bel'Veth è sempre.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (ti curi per una percentuale del danno che infliggi) e overheal shield (l'healing in eccesso si trasforma in uno shield temporaneo sopra l'HP). La sopravvivenza che ti serve per restare nel channel di **Royal Maelstrom (E)** senza morire.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — converte ogni due auto-attack in due colpi on-hit in una sola swing, raddoppiando il valore di Kraken Slayer e Terminus.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contro composizioni AP pesanti (Karthus, Ahri, Lissandra; AP = champion il cui danno arriva soprattutto dalle abilità, non dagli auto-attack). Dà magic resist e on-hit magic damage, sostituisce Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — quando sei indietro o contro poke comp (poke = avversari che ti consumano l'HP da distanza prima ancora che il fight inizi). Il primo auto su ogni target è un colpo critico (crit = un colpo che fa circa il doppio del danno) e ti cura, ti ridà tempo nelle skirmish (skirmish = scontro piccolo 1v1 o 2v2 nella jungle, non un teamfight pieno 5v5).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp con healing pesante (Soraka, Aatrox, Dr. Mundo, Vladimir). Applica Grievous Wounds ad ogni auto (Grievous Wounds = un debuff che dimezza l'healing del nemico).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando hai un lead e il team avversario ha waveclear debole (= non riescono a uccidere le wave di minion velocemente). Spinge le side lane (le corsie top e bot, lontane dal centro) più veloce di qualunque altra cosa e dà danno bonus alle torri, perfetto per fare splitpush (splitpush = mettere pressione su una side lane da solo mentre il team gioca dall'altra parte della mappa).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP single-target (burst = molto danno concentrato in 1-2 secondi; es. Veigar, LeBlanc, Syndra). Lo shield si attiva automaticamente sotto il 30% HP e assorbe una grossa parte del prossimo magic damage che prendi.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** è il default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo contro double-AD comp (= il team avversario ha due forti carry di danno fisico, es. Caitlyn + Master Yi).

**Skill order:** Porta al massimo prima la **Q**, poi la **E**, poi la **W**. Ogni rank di **Q** abbassa il cooldown base — è il tuo danno e la tua mobilità in uno slot solo. **R** ai livelli 6, 11, 16.

**Runes:** Le rune sono bonus passivi che scegli prima della partita; modellano le tue stat dell'early game e il tuo stile di danno. Primaria **Precision** (l'albero centrato sugli auto-attack) con **Press the Attack** (dopo tre auto-attack sullo stesso target, il colpo successivo fa danno bonus e il bersaglio prende più danno da tutti per qualche secondo), **Triumph** (ti curi un po' quando segni un takedown), **Legend: Alacrity** (attack speed extra per ogni takedown), **Coup de Grace** (più danno ai bersagli con HP bassi). Secondaria **Resolve** con **Second Wind** (rigeneri HP dopo aver preso danno) + **Revitalize** (le cure su di te sono più forti) per skirmish prolungate, oppure **Inspiration** con **Magical Footwear** (boots gratis al minuto 12) + **Cosmic Insight** (cooldown ridotti sui summoner spell) se la partita è tranquilla e vuoi ottimizzare oro e timer.

## Matchup chiave

- **Lee Sin:** Jungler forte early con invade (= entra nella tua jungle per ucciderti prima che tu abbia item). Tienilo d'occhio con vision sui buff (= piazza ward sui camp dei buff per vederlo arrivare sulla minimappa) ed evita di ingaggiarlo prima del livello 4 — quel duello lo vince ogni volta.
- **Master Yi:** Rivale scaling. Uccidilo prima del minuto 20 oppure accetta che ti faccia più danno nel teamfight tardivo; forza objective trade early (= prendi un Drago o un Herald mentre lui è impegnato dall'altra parte della mappa) così non arriva mai a quattro item.
- **Karthus:** Matchup gratis. La sua ult (la R, ovvero la sua ultimate — l'abilità più forte e con il cooldown più lungo) fa danno a tutto il tuo team da qualunque punto della mappa, ma ha mobilità zero — Q sopra di lui e muore in una rotation (= una sequenza completa delle tue abilità). Rubagli i camp jungle dopo ogni gank che porta a termine.
- **Sejuani:** Matchup duro. La sua R è point-and-click (= si aggancia al bersaglio senza bisogno di mirare) e ti blocca sul posto. Non fare mai engage (engage = avviare il fight) senza **Flash** pronto, e mai senza il team in posizione di fare peel su di te (peel = un alleato che ferma la minaccia prima che ti raggiunga).
- **Rammus:** Hard counter (= costruito apposta per rovinarti il matchup). La sua passiva spinata riflette parte del danno dei tuoi auto-attack; la sua W è uno steroid difensivo (steroid = un'abilità che moltiplica temporaneamente una stat — qui armor e quantità di danno riflesso) che raddoppia la riflessione. Evita le skirmish solo, pinga il team e farma sul lato opposto al suo finché non finisci Terminus.

## Power spike & condizioni di vittoria

Un power spike è un momento in cui il campione diventa improvvisamente molto più forte di quanto fosse un minuto prima — di solito quando una nuova abilità o un nuovo item entrano in gioco.

- **Livello 3:** Primo full clear fatto, **Q-W-E** tutte sbloccate. Puoi rispondere alla maggior parte dei gank con il knock-up della W (= la W lancia i nemici per un attimo in aria, con un breve stun) e una Q in fuga, ma non puoi ancora forzare fight — concentrati su un clear pulito e su uno Scuttle early (Scuttle = il granchio neutrale nel river: lo uccidi per ottenere vision e un piccolo buff di movimento sul fiume).
- **Livello 6:** **Endless Banquet (R)** entra online. Dopo il prossimo takedown su un champion o un epic monster (Rift Herald, Drake), mangi il Void Coral e ottieni una true form lunga (= una trasformazione potenziata che ti rende un mini-boss temporaneo). Forza un fight o un dragone immediatamente.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ minuto 10-12):** Primo vero damage spike. Ora puoi duellare la maggior parte dei jungler nel loro stesso jungle e fare dive a un laner con HP bassi (dive = entrare sotto la torre nemica per ucciderlo lo stesso, prendendo i colpi della torre nel mentre).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus completo (~ minuto 16-18):** A tre item smetti di curarti dell'armor o della magic resist sui target squishy (squishy = champion con poche difese, tipo gli ADC e la maggior parte dei mage). Raggruppati col team per il secondo drago e il timer di Baron.
- **Void epic monster (Rift Herald o Baron):** La true form della R dura molto di più con un Void Coral da epic monster (epic monster = un grosso obiettivo neutrale, molto più forte di un normale jungle camp). Prova a prendere Herald col team intorno al minuto 10-14 così spingi due wave con la true form ancora attiva.

## Errori comuni

- **Spammare Q sempre nella stessa direzione.** Ognuna delle quattro direzioni ha un suo cooldown. Stare fermi e premere Q in avanti quattro volte spreca tre direzioni. Avanti, di lato, indietro — fai più danno e accumuli più attack speed allo stesso tempo.
- **Tenere la E per tutta la durata sempre.** **Royal Maelstrom (E)** è una abilità in channel (= Bel'Veth resta ferma e continua a colpire, vulnerabile a interruzioni) che si chiude prima premendola di nuovo. Usala per assorbire una sola rotation di danno (es. la W di Veigar in cage), poi chiudila subito per tornare a fare auto. Tenerla per tutta la durata significa zero auto-attack per due secondi.
- **Premere R senza un Void Coral vicino.** La true form dura circa 30-60 secondi a seconda della source. Senza coral è sprecata; il true damage passivo ogni due auto è quello che ti serve nei fight regolari.
- **Provare a 1v1 il jungler avversario a livello 2.** Il suo clear va bene ma il duello early è mediocre. Se un Lee Sin o uno Xin Zhao ti invade a livello 2-3, lascia il camp e pinga il team — vincere il duello non è realistico e morire gli regala lo snowball.
- **Ignorare il tempo sul Void Coral.** Quando un coral droppa, hai una finestra breve per consumarlo. Uccidi un nemico al minuto 6, ignori il coral, e hai sprecato l'unico motivo per cui lo hai ucciso. Cammina sempre sopra il coral prima del recall (recall = l'abilità in canalizzazione che ti teletrasporta alla base).

## Suggerimento avanzato

Usa **Above and Below (W)** come reset della Q. La descrizione dice che colpire un champion con **W** resetta il cooldown del **Void Surge (Q)** in quella direzione — quindi il pattern ottimale in 1v1 è **Q in avanti → AA → W sul target → Q indietro al sicuro** con una Q in avanti di nuovo pronta nell'istante in cui ti giri. I pro la usano per concatenare tre dash in due secondi, che è più di quanto qualsiasi altro jungler abbia a disposizione nel gioco.
