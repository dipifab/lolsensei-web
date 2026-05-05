---
title: "Nautilus Support Build & Guida — Patch 16.9"
slug: "nautilus-support"
language: "it"
patch: "16.9"
champion: "nautilus"
role: "support"
last_updated: "2026-05-05"
description: "Guida Nautilus support per League of Legends Patch 16.9: build tank engage, matchup chiave in lane, power spike per item, errori comuni e una tecnica avanzata finale."
quick_learn:
  champion_dd_id: "Nautilus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Staggering Blow"
      description: "La prima auto-attack su un bersaglio infligge danno fisico bonus e lo immobilizza brevemente. Cooldown per-target — concatenala tra nemici diversi nei fight."
      dd_spell_id: "Nautilus_Passive"
    - key: "Q"
      name: "Dredge Line"
      description: "Hook lineare. Su nemico colpito: ti tira con lui, lo stunna e infligge danno. Su terreno: ti trascina contro la parete (riposizionamento tipo Flash)."
      dd_spell_id: "NautilusAnchorDrag"
    - key: "W"
      name: "Titan's Wrath"
      description: "Scudo personale che scala con bonus HP. Mentre attivo, le auto-attack infliggono danno magico AOE in 2s — la tua unica vera waveclear e finestra di trade."
      dd_spell_id: "NautilusPiercingGaze"
    - key: "E"
      name: "Riptide"
      description: "Tre onde concentriche intorno a te che danneggiano e rallentano. Lo slow si accumula su nemici colpiti da più onde — strumento di chase e peel."
      dd_spell_id: "NautilusSplashZone"
    - key: "R"
      name: "Depth Charge"
      description: "Onda d'urto a target singolo che insegue un campione nemico, knock-up su tutti nel tragitto e stun sul bersaglio principale all'impatto."
      dd_spell_id: "NautilusGrandLine"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap dai Mercury's contro lane di auto-attack pesante (Caitlyn, Draven, Tristana, Master Yi) — riduzione fissa su ogni basic attack"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "contro composizioni AP-heavy che si raggruppano — l'aura aumenta il danno magico ricevuto dai nemici vicini, rende più letale il tuo mago"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contro mage burst (Veigar, Syndra, Annie) — grosso scudo magico che si rigenera fuori combat e mangia il primo combo di abilità"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contro composizioni che impilano cure (Soraka, Vladimir, Aatrox) — applica Grievous Wounds (cure dimezzate) sugli attaccanti"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "contro composizioni di poke (Xerath, Varus, Jayce) — la rigenerazione fuori combattimento ti permette di curarti tra le ondate di poke"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contro ADC crit-stacking (Caitlyn, Yasuo, Tryndamere) — riduce del 25% il danno dei critici e ha un attivo AOE di slow"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Atterra Q per agganciare un target di backline, segui con scudo W, R-stun sulla minaccia prioritaria nel teamfight, droppa E per lo slow e fai peel sul carry finché non chiude la kill."
  weakness: "Cooldown lunghi early (Q a 14s al rank 1) e zero poke a distanza. Manchi la Q e per ~12s non hai nulla in lane — chi punisce gli hook mancati (Lulu, Janna, Caitlyn) ti sanguina i trade."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Aftershock procca su Q e R, dandoti un burst di resistenze quando committi l'engage. Font of Life cura il team sui nemici rallentati, Bone Plating mangia i primi 3 trade post-hook, Unflinching dà più uptime sotto chain CC."
    secondary_rationale: "Inspiration secondaria: Magical Footwear ti regala 300 oro che usi per rushare prima Locket of the Iron Solari, Cosmic Insight taglia i CD degli active item e dei summoner spell — pesa su Locket e Flash."
    secondary_alternative: "Contro composizioni di poke pesante (Xerath con Varus, o Karma con Caitlyn), swappa Inspiration per Sorcery con Manaflow Band (più mana per spammare E e clearare minion) e Nimbus Cloak (movement-speed gratis dopo il Flash per chiudere la distanza)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "yuumi", "janna"]
      archetype: "Enchanter senza CC duro"
      reason: "Non hanno stun o root point-and-click per interrompere la tua Q, quindi un singolo hook nell'all-in del tuo AD li uccide prima che gli scudi superino il tuo danno."
    - examples: ["jhin", "sivir", "ezreal"]
      archetype: "ADC immobili o a bassa mobilità"
      reason: "Questi ADC non hanno un dash affidabile per schivare la tua Q ai livelli 2-3, quindi una volta presa la priorità in lane li agganci e forzi un Flash o una kill."
    - examples: ["senna", "ashe"]
      archetype: "Carry stazionari a distanza"
      reason: "Il loro DPS auto-attack è massimo da fermi — esattamente quando la tua Q è più facile da centrare. Poi la R li blocca abbastanza a lungo da farli finire dal team."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Support con spell-shield"
      reason: "Lo scudo pre-cast blocca la tua Q in toto, eliminando il tuo unico engage per 5+ secondi. Senza Q, il kit collassa a un bruiser in melee senza gap-close."
    - examples: ["caitlyn", "draven"]
      archetype: "Lane bully con range auto-attack"
      reason: "Ti smontano i bonus HP prima del livello 3 — il tuo scudo W dura solo 6s e ha 12s di CD, quindi pokano gratis nei downtime e tu cedi la lane."
    - examples: ["braum", "alistar", "leona"]
      archetype: "Tank engager con CC point-and-click"
      reason: "Engagano su di te mentre la tua Q è in cooldown. Senza Q per fare peel a ritroso o per terrain-pull fuori, mangi tutto il combo — chi pickа per primo dirige il pattern di trade."
---

## Panoramica

Nautilus è un tank engage support il cui intero gioco ruota attorno a una sola abilità: **Dredge Line (Q)**. Atterrala su un nemico e lo stunni, lo trascini dentro al tuo team e attivi anche la **Staggering Blow (P)** per mezzo secondo extra di lockdown. Mancala e hai 14 secondi di cooldown senza nulla — niente poke a distanza, niente waveclear utile, e un tank in melee piazzato proprio dove il support avversario voleva trovarti. Questa natura binaria lo rende brutale contro chi cammina in linea retta e imbarazzante contro chi ha spell-shield o dash veloci.

Il piano partita è trovare un hook, spendere **Depth Charge (R)** sul target prioritario nel teamfight (insegue un singolo nemico ma fa knock-up a chiunque sia sul tragitto), poi peelare il carry dietro di lui con gli slow di **Riptide (E)**. **Titan's Wrath (W)** dà uno scudo temporaneo e danno magico AOE sulle auto-attack per 6 secondi — è l'unica vera finestra in cui Nautilus infligge danno reale. Fuori da W è una macchina di CC: ogni decisione che prendi è "dove voglio piazzare il prossimo stun".

## Build Consigliata

**Item iniziali:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da support che si auto-evolve grazie alla quest support) + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** trinket.

**Item core (nell'ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — lo starter da support. Genera l'oro che alimenta la tua early lane e si auto-aggiorna due volte (fase intermedia in stile Runesteel, poi ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** quando la quest è completa).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — stivali con magic resist e tenacity (riduce la durata di stun e root applicati su di te). Default nella maggior parte dei matchup perché support e mid laner avversari fanno tipicamente danno magico con CC.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — primo item completo. Active scudo per tutto il team durante un engage di teamfight; combacia perfettamente con il timing del tuo flash-engage su **R**.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — secondo item completo. Bond con il tuo carry più forte: ridirezioni una fetta del danno che lui prende su di te, e guadagni movement speed correndo verso di lui. Strumento di peel puro.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade endgame del support starter (non lo compri direttamente: il tuo World Atlas si evolve in Bloodsong quando la quest è completa). Ha una passiva tipo Spellblade: dopo aver castato un'abilità, la tua prossima auto-attack fa danno bonus e amplifica il target.
6. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — terzo item completo. Dopo l'ult, ti collega all'alleato bonded e aggiunge slow più danno bonus sui suoi attacchi. Disegnato apposta per tank engage abbinati a un damage carry.

**Item situazionali:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — swap dai Mercury's contro lane di auto-attack pesante (Caitlyn, Draven, Master Yi). Riduzione fissa su ogni basic attack che ricevi.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — contro composizioni AP-heavy che si raggruppano. L'aura fa prendere più danno magico ai nemici vicini; ottimo se il tuo team ha un mid mago.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contro mage burst (Veigar, Syndra, Annie). Grosso scudo magico che si rigenera fuori combattimento — mangia il primo combo di abilità che ti viene lanciato in fight.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contro composizioni che impilano cure (Soraka, Vladimir, Aatrox). Applica Grievous Wounds (dimezza le cure nemiche) quando subisci una basic attack.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — contro composizioni di poke (Xerath, Varus, Jayce). La rigenerazione HP fuori combattimento ti permette di tankare il chip damage tra le wave e restare sulla mappa.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contro ADC crit-stacking (Caitlyn, Yasuo, Tryndamere). Riduce del 25% il danno dei colpi critici e ha un attivo AOE che rallenta tutti i nemici intorno a te quando engagi.

**Stivali:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** è il default — la maggior parte dei support e mid laner avversari fa danno magico e applica CC. Passa a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo quando 3 dei 5 nemici fanno danno fisico.

**Skill order:** Q al livello 1 (ti serve l'engage online), E al 2 per pressione di trade pre-6 (slow per chase), W al 3 per lo scudo. Poi massimizza **E** per primo (CD più basso = più poke su wave e più uptime di slow), **Q** per secondo (CD più corto sull'engage), **W** per ultimo. **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Unflinching**. Secondario **Inspiration** con **Magical Footwear** e **Cosmic Insight**, oppure **Sorcery** con **Manaflow Band** e **Nimbus Cloak** contro lane di poke pesante.

## Matchup chiave

- **Soraka:** Lane facile. Non ha CC per interrompere la tua Q e il suo trade pattern è silence + auto-attack — la tua Q la stunna prima che riesca a castarla. Hook al livello 2 per first blood.
- **Morgana:** Hard counter. Il suo Black Shield blocca la tua Q in toto. Bait lo scudo camminando avanti come per engagare, aspetta che lo casti (12s di CD early), poi hookala nella finestra dopo che è scaduto. Se si scuda sempre, hookа l'ADC al posto suo.
- **Caitlyn:** Lane bully. Out-rangea la tua Q (range 1150, lei tira basic da 650 ma trappole e headshot ti zonano). Nasconditi dietro la wave e cerca un flank hook dal cespuglio laterale.
- **Leona:** Mirror engage. Chi atterra il proprio CC per primo vince il trade. La sua **E** dash è su 10s di CD — fagliela bruciare, poi hookala nel recovery. Wardа i cespugli di lane perché engageа solo da melee.
- **Lulu:** Matchup pari o leggermente favorevole. Non ha spell shield; la sua **W** può poliformarti per cancellare un engage in corso, ma non blocca una Q già in volo. Apri sempre con Q prima che lei pre-casti W.

## Power spike & condizioni di vittoria

- **Livello 2 (con Q + E):** Prima finestra di kill. Se ti permettono di pushare la wave 1, arrivi al 2 prima. Hookа l'ADC nemico, segui con E per lo slow, il tuo AD chiude la kill.
- **Livello 6:** **Depth Charge (R)** si sblocca. Ora l'engage è in due tempi: hook con Q, poi catena R se flashano. Cerca un roam su mid dopo un all-in andato a buon fine — la tua R è una delle ult di pickoff più forti del gioco.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completato (~ minuto 14-16):** Il tuo engage è abbinato a uno scudo team-wide attivo. Forza un fight su Drake o Voidgrubs qui — il tuo team è significativamente più tanky di quello avversario nei 3 secondi di scudo.
- **Knight's Vow + Bloodsong spike (~ minuto 22-26):** Con ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** bondato sul tuo carry e la quest support evoluta in ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**, tanki un combo nemico completo e regali la win condition al carry bonded. Forza Baron e Drake in questa finestra prima che l'ADC avversario ti scali sopra.

## Errori comuni

- **Lanciare Q dentro la wave di minion.** L'hook si ferma sul primo nemico colpito, quindi un caster minion lo mangia al posto dell'ADC nemico. Cammina di lato alla wave o usa un cespuglio per pulire la linea di vista prima di hookare.
- **R-engagare un tank invece del target prioritario.** Depth Charge insegue il bersaglio — se ulti il Sion avversario, la R fa quasi nulla perché Sion ha 4000 HP e una passiva che lo resuscita. Ult sempre il target damage più alto a HP più basso (l'ADC o il mago mid), anche se è dall'altra parte della mappa.
- **Tenere W per la kill invece di usarla per waveclear.** Lo scudo è su 12s di CD — la finestra più lunga del kit tra una cast e l'altra. Se non la usi pre-trade, perdi i 6 secondi di danno AOE sulle auto. Apri ogni engage con W, non chiudilo con W.
- **Q-pull sul team nemico.** Hookare il terreno ti tira al terreno (riposizionamento tipo Flash) — ma hookare un nemico ti tira sul nemico. Se Q-i un nemico nella loro backline, atterri dentro al loro team da solo e muori in 1 secondo. Hookа solo quando hai follow-up.
- **Camminare fuori vision dopo aver mancato la Q.** Senza Q non hai escape. Dopo un hook mancato, ritirati sulla wave o in zona wardata per i 14 secondi che servono alla Q per tornare; non stare in fog of war sperando in un re-engage.

## Suggerimento avanzato

Allena la **Q-flash combo** per engage a sorpresa. Casta Q in una direzione e durante la breve animazione casta Flash — l'hook continua dalla nuova posizione, allungando di molto il range effettivo e bypassando i blocchi dei minion. Esercitati nel Practice Tool finché il timing non diventa memoria muscolare: ti permette di engagare da fuori la vision range nemica ed è la singola meccanica che separa un Nautilus "buono" da uno smurf-tier.
