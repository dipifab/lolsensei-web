---
title: "Master Yi Jungle Build & Guida — Patch 16.9"
slug: "master-yi-jungle"
language: "it"
patch: "16.9"
champion: "master-yi"
role: "jungle"
last_updated: "2026-05-05"
description: "Guida Master Yi jungle per League of Legends Patch 16.9: clear path, build core on-hit, matchup chiave, power spike, errori comuni e un consiglio avanzato sui reset."
quick_learn:
  champion_dd_id: "MasterYi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Double Strike"
      description: "Ogni pochi auto-attack consecutivi, Master Yi colpisce due volte. Il secondo colpo applica gli effetti on-hit, quindi scala forte con item come Wit's End e Blade of The Ruined King."
      dd_spell_id: "MasterYi_Passive"
    - key: "Q"
      name: "Alpha Strike"
      description: "Dash su un bersaglio diventando intoccabile, rimbalza fino a quattro nemici. Le auto-attack riducono il cooldown — auto-attacca tra una Q e l'altra per spammarla."
      dd_spell_id: "AlphaStrike"
    - key: "W"
      name: "Meditate"
      description: "Canalizzazione che cura e riduce il danno subito. Usala fra i camp per ricaricarti, o in fight per baitare skillshot a cast lungo — si rompe sui CC duri."
      dd_spell_id: "Meditate"
    - key: "E"
      name: "Wuju Style"
      description: "Toggle che aggiunge true damage bonus alle auto-attack per qualche secondo. Il true damage ignora l'armatura: è il tuo strumento principale contro i tank."
      dd_spell_id: "WujuStyle"
    - key: "R"
      name: "Highlander"
      description: "Grosso buff di velocità di movimento e attack speed più immunità agli slow. Le takedown su champion estendono la durata e resettano i cooldown delle abilità — la tua finestra di snowball."
      dd_spell_id: "Highlander"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro CC duro single-target (Malzahar R, Skarner R, Warwick R) — l'attivo cancella il lock e salva la finestra di Highlander"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Syndra, Veigar, Annie) — magic resist + scudo lifeline ti danno il secondo per reagire"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quando sei la win condition del team e fai dive in backline: il revive ti fa pulire il fight dopo il primo all-in"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Aatrox, Yuumi) — Grievous Wounds taglia le heal di circa la metà"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball passando dal level 6: gank due volte prima del minuto 8, completa Blade of The Ruined King, poi diva i target squishy negli skirmish — Highlander resetta la Q a ogni kill, così concateni esecuzioni."
  weakness: "Zero mobilità prima del livello 6 e nessun CC nel kit. Le catene di hard CC (stun, root, suppress) lo spengono completamente; jungler con clear forte in early lo possono invadere e prendergli i camp."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision: Lethal Tempo rompe il cap di attack speed, così Double Strike procca più spesso. Triumph ridà HP a ogni takedown per concatenare dive, Legend: Alacrity impila attack speed, Coup de Grace aggiunge l'8% di danno sotto il 40% HP — il range esatto dei reset di Highlander."
    secondary_rationale: "Resolve secondaria: Bone Plating tanka i primi 3 colpi durante un gank avversario su di te, Revitalize amplifica la cura di Meditate (W) così il channel fra i camp ti dà più sustain."
    secondary_alternative: "Contro composizioni di poke pesante (Caitlyn, Varus, Ezreal in skirmish mid) swap Resolve verso Inspiration con Magical Footwear (stivali gratis al minuto 12) e Cosmic Insight (-5% cooldown summoner per Smite e Flash più frequenti)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanter healing-stack senza hard CC"
      reason: "Il true damage di Wuju Style buca il front line del loro team, e nessuno dei due può fermare un dive di livello 6: Soraka ha un silence corto, Yuumi mitiga solo con scudi."
    - examples: ["karthus", "veigar", "ziggs"]
      archetype: "Mage immobili senza dash né self-peel"
      reason: "Alpha Strike copre 600 unità diventando untargetable. Una volta committato Highlander non hanno escape, e Coup de Grace li chiude sotto il 40% HP."
    - examples: ["senna", "kog-maw"]
      archetype: "ADC squishy senza dash"
      reason: "Entrambi vivono di posizionamento e non hanno un pulsante di self-peel. Una volta in backline con R attiva, l'unica risposta è una catena CC del support."
  counterpicks:
    - examples: ["malzahar", "skarner"]
      archetype: "Champion con suppress single-target"
      reason: "La loro R ti tiene fermo per tutta la durata: ignora l'immunità agli slow di Highlander (suppress è un tipo separato) e il tuo team deve peelare per te, annullando la pressione di dive."
    - examples: ["lee-sin", "elise"]
      archetype: "Jungler con clear forte ed early invade"
      reason: "Arrivano al livello 3 a HP pieno prima di te e ti battono nei duelli dentro la tua jungle. Master Yi non ha escape pre-6, quindi un invade riuscito al minuto 3-4 ti costa due camp."
    - examples: ["rammus", "jax"]
      archetype: "Duellanti on-hit / armor-stack con riflesso o dodge"
      reason: "La W di Rammus rimanda indietro una fetta del danno delle tue auto-attack, la E di Jax dodgea ogni basic per 2 secondi: entrambe le facce della tua DPS vengono cancellate in 1v1."
---

## Panoramica

Master Yi è uno skirmisher AD da jungle il cui piano partita è "auto-attaccare finché la squadra avversaria non muore". La passiva **Double Strike**, il dash di **Alpha Strike (Q)** e il toggle true damage di **Wuju Style (E)** si impilano in uno dei profili di DPS single-target più alti del gioco una volta online gli item. Il prezzo è duro: zero CC nel kit, niente escape vero prima del livello 6, e qualsiasi catena di stun lo esclude dal fight.

Il game plan è quasi automatico: clear di tre camp, cerca un gank al livello 3 con il pet Smite attivo, raggiungi il livello 6 per **Highlander (R)**, poi snowball — ovvero trasforma il vantaggio iniziale in un vantaggio crescente, kill dopo kill, perché ogni takedown su champion gli refresha la **R** e resetta i cooldown delle abilità. Se vai indietro, non recuperi: Master Yi ha stat mid-game deboli a meno che tu non sia avanti di item rispetto al curve.

## Build Consigliata

**Item iniziali:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade è lo starter jungle ranged-Smite che si auto-evolve nel pet companion una volta completata la quest.

**Item core (nell'ordine):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade di Hailblade, si auto-evolve intorno al minuto 3-4 dopo aver pulito abbastanza camp. È il pet AD-skirmisher per mobilità e engage: lo sprint fuori combat ti aiuta a inseguire i gank attraverso la mappa e ad arrivare in skirmish prima che finiscano.
2. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — primo item completo. Il danno on-hit basato sull'HP attuale shredda i tank (il tuo matchup peggiore) e l'attivo con slow ti dà lo strumento di kite (muoversi all'indietro mentre attacchi) che il kit non ti offre.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — stivali con attack speed fissa. Prendili appena finisci Blade of The Ruined King; la velocità di movimento è meno critica perché **R** ti dà già un grosso buff di speed.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — danno magico on-hit + magic resistance. Triggerа il danno magico bonus di Double Strike due volte per ciclo e la magic resist chiude il buco più grande di Master Yi (è già squishy, quindi il burst AP lo punisce).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — attack speed + crit + range extra sulla prima auto empowered. Ti permette di iniziare un fight da fuori il loro range di CC, poi entrare con Alpha Strike.

**Item situazionali:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro CC duro single-target come la R di Malzahar, la R di Skarner, o un suppress di Warwick. L'attivo cancella il lock, così una singola CC non sprecа la finestra di **R**.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (Syndra, Veigar, Annie). Aggiunge magic resistance più uno scudo lifeline che si attiva quando arrivi basso di HP; ti dà il secondo per reagire che il kit normalmente non ha.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quando sei il damage dealer principale del team e fai dive profondi nella backline. Il revive ti fa chiudere il fight dopo il primo all-in (commit totale) invece di morire a metà clean-up.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni che impilano cure (Soraka, Vladimir, Aatrox, Yuumi). Applica Grievous Wounds, che taglia le cure ricevute di circa la metà a ogni auto-attack.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default. ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** sostituisce uno slot solo quando una specifica minaccia di CC decide il game (vedi le note situazionali).

**Skill order:** Massimizza **Q** per primo (cooldown più basso e più danno su Alpha Strike), **E** per secondo (il true damage scala con il rank), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondario **Resolve** con **Bone Plating** e **Revitalize**, oppure **Inspiration** con **Magical Footwear** e **Cosmic Insight** contro composizioni di poke pesante.

## Matchup chiave

- **Malzahar / Skarner:** La loro R ti suppressa per tutta la durata e ignora l'immunità agli slow di Highlander. Compra ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** come secondo item, e non ingaggiare un fight se hanno l'ult disponibile a meno che il tuo front line non ti peeli (protegga) prima.
- **Lee Sin (jungler avversario):** Pulisce più veloce di te e arriva al livello 3 a HP pieno. Tracci la sua prima entrata via vision sul red/blue buff; se ti invade, lascia il camp e fai full-clear sull'altro lato invece di duellarlo 1v1 pre-6.
- **Rammus (jungler o top avversario):** La sua **W** Defensive Ball Curl rimanda indietro una fetta del danno delle tue auto-attack. Cambia target nei fight — non focalizzarti mai su Rammus, picchia il carry.
- **Caitlyn / ADC avversario con poke:** Pokano la tua jungle dai bush della lane e tu non scambi indietro. Pathra dall'altro lato della mappa dopo il primo clear e chiedi al team di sweep di vision prima di committare un gank in quella lane.
- **Yuumi (support avversario):** Hard counter del dive: si attacca, diventa untargetable, e la sua R ti rallenta. Brucia il carry su cui è attaccata il più velocemente possibile — Yuumi protegge un alleato alla volta, quindi se uccidi quello, lei non ha nulla da fare.

## Power spike & condizioni di vittoria

- **Livello 3:** Prima finestra di gank. Pathra dal monstro Smite, poi scuttle (il granchio del river che dà vision), poi una lane con un setup champion (Leona, Nautilus, Lux). Senza R hai bisogno di una CC alleata per landare.
- **Livello 6:** **Highlander** sblocca. Le takedown refreshano la durata e resettano i cooldown delle abilità base, quindi concatenare 2-3 kill in un fight è il tetto realistico. È la tua finestra di snowball più grande — il gap fra te e i carry avversari è massimo intorno al minuto 8-10.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completo (~ minuto 10-12):** Primo item full. Il damage spike ti porta al livello "instakill su uno squishy con R". Forza uno skirmish sullo scuttle o sui voidgrubs appena finisci.
- **3 item + Berserker's Greaves online (~ minuto 22-26):** Blade + Wit's End + Rapid Firecannon impilano il tuo profilo true DPS. Una volta arrivato qui, in 1v1 batti ogni champion non-tank del gioco.

## Errori comuni

- **Spammare Alpha Strike a cooldown.** La Q va in cooldown se la lanci senza auto-attack in coda. Auto-attacca fra un cast e l'altro (le auto riducono il cooldown della **Q**) e avrai una seconda **Q** nello stesso fight.
- **Usare R prima di avere una kill davanti.** Il valore di Highlander è il reset su takedown, non le stat grezze. Premila quando una kill è realistica — non all'inizio dell'engage dove il nemico può ancora kitarti.
- **Tunneling sul tank front-line.** Anche con il true damage di Wuju Style, killare un tank prende 5-6 secondi durante i quali il loro carry cancella il tuo team. Salta il tank, dasha oltre con la Q, killa il carry, poi reset Highlander e torna a pulire.
- **Meditare in mezzo al fight senza setup.** Il channel si rompe sul CC duro. Usa **W** fuori dai fight per sustain fra i camp o per baitare skillshot a cast lungo (Lux Q, Veigar E) — mai come "panic button" quando sei già in melee con il team avversario.
- **Invadere un jungler più forte in early.** Lee Sin, Elise, Graves arrivano al livello 3 prima di te con più HP. Se li vedi last-clear su un gank, non face-checkare; full-clear il tuo lato sicuro e gioca per il livello 6.

## Suggerimento avanzato

Usa **Alpha Strike** come strumento difensivo, non solo come dash offensivo. Il frame di untargetability all'inizio del cast schiva proiettili come l'Ace in the Hole di Caitlyn, l'Enchanted Crystal Arrow di Ashe, o un Final Spark di Lux a metà cast. Allenati a tempare la **Q** nel momento in cui vedi l'animazione di cast: se Q in reazione all'abilità avversaria, schivi il danno e dasha contemporaneamente verso un angolo migliore per la prossima rotazione di auto-attack.
