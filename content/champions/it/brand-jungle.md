---
title: "Brand Jungle Build & Guida — Patch 16.9"
slug: "brand-jungle"
language: "it"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Guida Brand jungle per League of Legends Patch 16.9: percorso smite, clear burn-mage, gank window, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Le spell di Brand danno fuoco al bersaglio (danno nel tempo per 4s, fino a 3 stack). A 3 stack il blaze detona come una piccola esplosione AOE che riapplica gli effetti delle spell."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineare con danno magico. Se il bersaglio è già ablaze, lo stunna — il tuo lock di gank e setup di stun in skirmish."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Area AOE ritardata dopo un breve tell. I bersagli ablaze subiscono +25% danno. Strumento principale di clear in jungla."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Esplosione targettata che rimbalza sui nemici vicini. Se il primo bersaglio è ablaze, il raggio di propagazione raddoppia — i bounce tra camp accelerano la clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Palla di fuoco a lunga gittata che rimbalza fino a 5 volte tra nemici, dando priorità ai target ablaze. Danno enorme nelle skirmish intorno alla pit del drake e ai grub."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver early-game (Lee Sin, Xin Zhao, Hecarim, Diana) — la stasi copre la zero-mobility durante il loro gap-close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quando sei avanti e il team avversario non ha Resistenza Magica — la passiva di move-speed dopo ogni cast ti permette di kitare in skirmish"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario compra il primo item di Resistenza Magica (Mercury's Treads contano)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target da engage (Ahri R, Lissandra R, Nautilus hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish intorno alle pit obiettivo con R che rimbalza tra nemici raggruppati. Gank dopo aver pushato la wave con E (la propagazione setta uno stun Q gratuito). Power-spike window: minuto 8-18."
  weakness: "Clear più lenta tra le opzioni AP pre-Liandry's, niente escape, niente sustain in jungla innato. Debole agli invade early dei jungler mobili e ai jungler che possono matchare l'AOE con CC duro."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaria: Arcane Comet si procca su ogni hit di W o E, aggiungendo burst sopra al blaze. Manaflow Band è obbligatorio — Brand jungle muore di fame mana early. Transcendence porta l'ability haste oltre il 40%, Scorch chiude camp e gank a basso HP."
    secondary_rationale: "Resolve secondaria: Second Wind ti tiene sustainato tra camp senza potions (Brand non ha sustain innato come Fiddlesticks o Warwick). Overgrowth dà HP bonus scalanti coi mostri uccisi — counter alla tua fragilità senza difese."
    secondary_alternative: "Contro comp che invadono pesantemente early (Lee Sin + Pyke roam, Elise + Galio), swap Resolve verso Inspiration con Biscuit Delivery (sustain mana sulle clear più deboli) e Cosmic Insight (più uptime di Smite intorno ai drake)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Tank da group-engage senza escape"
      reason: "Quando la loro R atterra, lo stesso ammasso di nemici sta dentro la tua W. La R rimbalza tra ogni campione raggruppato e la tua risposta al loro engage è un teamwipe invece di un 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruiser che devono committare in avanti"
      reason: "Spingono dentro la tua squadra per fare danno e non hanno disengage; la E di Brand accende il blaze, la Q stunna nel momento in cui ti raggiungono e la R lock-a il secondo target prima che possano tirarsi indietro."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Jungler dipendenti da channel o stealth"
      reason: "Brand interrompe il fear/ult channel di Fiddlesticks con lo stun Q sul blaze e rivela la posizione pre-channel di Eve con i prefire di W; entrambi dipendono da setup lunghi che Brand spezza con una sola rotation."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Skirmisher early-game con mobilità"
      reason: "Invadono Brand al livello 3 prima che Liandry's sia online. Brand non ha escape: la catena Q + W di Lee Sin, il rappel di Elise e il dash di Graves saltano oltre lo skillshot Q, e la sua clear è troppo lenta per rifondere il fight."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Jungler assassini mobili"
      reason: "Blink-ano oltre il proiettile della Q così Brand non riesce a piazzare lo stun, poi lo bursta-no in melee dove non ha peel per sé. Anche Zhonya's ritarda solo l'inevitabile in 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Jungler che negano vision al gank"
      reason: "Bypassano le ward su cui Brand si appoggia (no counter-vision innato, no flash-engage). La R di Nocturne taglia la vision della tua squadra; la Q di Shaco passa stealth oltre le ward. Brand non può pre-mirare la Q se non vede arrivare il nemico."
---

## Panoramica

Brand jungle è un **AP skirmisher** costruito per i fight obiettivo e i gank post-6 più che per clear veloci o solo invade. Il kit è identico al Brand mid — accendi i bersagli, stunna gli ablaze con **Q**, fai rimbalzare **R** tra nemici raggruppati — ma il ruolo è diverso. Da jungler scambi la priorità in lane (il vantaggio che i laner ottengono pushando per primi la wave) per il controllo del river: ogni fight di drake, ogni spawn di grub (un "grub" è uno dei piccoli mostri neutrali della pit del void che dà oro e un bonus al team che lo uccide), ogni skirmish allo Scuttle (Scuttle = il granchio neutrale del river che dà vision e un piccolo buff) è un'occasione perché la **R** rimbalzi tra tre o quattro nemici raggruppati e trasformi un fight pari in un teamwipe.

Il piano partita è rigido per gli standard della jungla. Clear i primi tre camp full-clear (red → krug oppure blue → gromp a seconda del side), gank una lane al livello 3 solo se ha una finestra pulita di **W → Q stun**, recall per i componenti di **Liandry's Torment**, e dal minuto 8 in poi camp-pa il prossimo obiettivo. Brand non ha escape, niente dueling power early, e la clear singolo-target più lenta tra i jungler AP — gli invade ti finiscono la partita se non wardi gli ingressi della tua jungla. Il payoff è lo spike post-6: **Pyroclasm** in un fight raggruppato sul river è una delle ultimate dal danno più alto del gioco, e il kit pone alla squadra avversaria una domanda a cui spesso non hanno disengage per rispondere.

## Build Consigliata

**Item iniziali:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default per i jungler ranged — dà la pet di smite che potenzia la clear dei camp e oro extra) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Item core (nell'ordine):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo item completo. Il burn percentuale degli HP punisce le pool degli obiettivi (drake, baron, herald) e si somma a ogni tick di blaze.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa, lo spike più economico tra gli item core.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — lo slow su ogni hit di spell chiude la più grande debolezza di Brand (no chase, no escape). Ti permette di camminare addosso a chi prova a kitare e di ganckare senza Flash.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot di scaling late. Comprala quarta a meno che tu non sia 4+ kill avanti, nel qual caso rushala terza per snowballare ("snowball" = vantaggio iniziale che cresce: kill → gold → item → più kill).

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver early-game (Lee Sin, Xin Zhao, Hecarim). La stasi è l'unica risposta che Brand ha quando una catena di dash supera la front line (i tank e i bruiser davanti che normalmente assorbono i colpi al posto tuo).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quando sei avanti e l'avversario non ha ancora iniziato a costruire Resistenza Magica. La passiva di move-speed dopo ogni cast ti permette di kitare in skirmish ("kite" = muoverti all'indietro mentre attacchi, mantenendo distanza).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario compra il primo item di Resistenza Magica. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (gli stivali di Resistenza Magica) contano come primo item MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici telegrafati da engage (Ahri R, Lissandra R, Nautilus hook).

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Swap a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se la squadra avversaria ha 3+ minacce di hard CC con danno magico.

**Skill order:** Massimizza **W** per primo (il danno base più alto e principale strumento di clear), **E** per secondo (boost di clear-speed tra camp e propagazione nei gank), **Q** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Resolve** con **Second Wind** e **Overgrowth** per sustain in jungla.

## Matchup chiave

- **Lee Sin:** Perdi ogni 1v1 prima del livello 6. La sua catena Q + W salta oltre lo skillshot Q. Evita le skirmish in solo pre-6, full-clear invece, e warda entrambi gli ingressi della tua jungla al minuto 1:30.
- **Hecarim:** Matchup pari. Ti supera nel kite ma si raggruppa per i bounce della R nei teamfight. Conserva la Q per il momento in cui committa in avanti — se stunni un Hecarim in carica, il timer del suo engage è bruciato.
- **Karthus:** Tu out-gank-i, lui scala più di te. Forza fight pre-16 intorno al drake. Una volta che Defile è online (la passiva a rango massimo che pulsa intorno a lui — la forma AOE con cui può uccidere da grey-screen) non puoi camminare nella sua squadra senza Banshee's Veil.
- **Sejuani:** Te la mangi. La R rimbalza tra ogni campione che lei tira dentro un ammasso; engage sull'engage. Pre-6 ti batte nei 1v1 — non invaderla, raggruppati con mid per i fight grub.
- **Master Yi:** Counter netto in 1v1. Forza il fight 5v5 nei river stretti (drake pit, baron pit) dove la sua W-cleanse non lo salva dalle catene di bounce della R. Compra Zhonya's Hourglass come second item se compra Wit's End.

## Power spike & condizioni di vittoria

- **Livello 3 (W + E + Q):** Prima power di gank. Con un punto in ognuna delle abilità il combo **E → W → Q stun** è online. Se il laner avversario si overestende senza Flash, hai un setup di kill.
- **Livello 6 (R sbloccata):** Primo spike obiettivo. **Pyroclasm** in una skirmish allo Scuttle (fight del granchio del river) fa circa il 50% degli HP di uno squishy per bounce. Combatti ogni Scuttle quando la R è disponibile.
- **Liandry's Torment online (~ minuto 9-12):** La clear si ribalta e il DPS (DPS = damage per second, qui contro le pool di HP di drake/baron/grub) sugli obiettivi raddoppia. Da questo punto sei tu a iniziare i fight di drake, non a reagire.
- **Rabadon's Deathcap online (~ minuto 24-30):** La sequenza completa di bounce della R one-shotta gli squishy. Forza i fight obiettivo raggruppati — Baron, Soul Drake, Atakhan ("Atakhan" = una neutrale di pit late-game che spawna intorno al minuto 14; se non lo conosci, tratta lo spawn come un 5v5 forzato).

## Errori comuni

- **Provare a clearare come un fast-clear jungler.** Brand non ha sustain innato né attack speed. Non gareggiare con Lee Sin sullo Scuttle pre-6 — full-clear, raggiungi il livello 6, poi inizia a ganckare e skirmishare.
- **Q nuda per poke in jungla.** **Q** senza ablaze è un proiettile lento che manca sui jungler che dashano. Setta sempre con **W** sul punto di atterraggio o **E** su un minion che propagherà il blaze.
- **Ultare un nemico isolato.** I bounce di **R** sono sprecati su un solo target — i salti vanno avanti e indietro sullo stesso campione con damage falloff. Conserva **R** per fight raggruppati, non per inseguire un solo bersaglio in fuga.
- **Saltare la vision nella tua jungla.** Piazza Stealth Ward su tri-bush e pixel brush al minuto 1:30. Brand non ha escape; un invade che non vedi arrivare è una kill regalata a un jungler mobile.
- **Smite-greedare obiettivi senza R.** HP del drake e dei grub scalano; il danno del tuo smite no. Se contesti un drake senza R off cooldown e il jungler avversario sì, perdi la guerra di smite e il drake.

## Suggerimento avanzato

Allena il **gank invisibile con W**. Avvicinati a una lane dal lato river coperto dal fog of war ("fog of war" = l'area non rivelata fuori dalla vision della tua squadra). Casta **W** sullo spot in cui il laner avversario *farà il prossimo passo* (predici il path basandoti sulla wave) — Pillar of Flame ha un delay prima di atterrare, e il cast in sé non rompe lo stealth o la vision. Nel momento in cui la W atterra e applica blaze, lancia **Q** nella finestra di stun. Fatto bene, l'avversario non vede mai un campione sulla minimap: vede una W apparire sotto i suoi piedi, viene rootato, e muore prima che il compagno possa pingare. Questa sequenza è ciò che trasforma un "Brand jungle decente" in un Brand che porta la partita.
