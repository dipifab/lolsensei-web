---
title: "Heimerdinger Mid Build & Guida — Patch 16.9"
slug: "heimerdinger-mid"
language: "it"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Guida Heimerdinger mid per Patch 16.9: build ottimale, pagina rune, posizionamento torrette, matchup chiave, power spike e consigli avanzati per dominare in lane."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini e diver (Zed, Akali, Diana) — la stasi dà tempo alle torrette di rispondere"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni con molta healing (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "quando un target prioritario compra un item di Magic Resist"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Costruisci il nest di torrette, stunn con E, fai DPS con W. Al livello 6 forza l'avversario fuori con R+Q mega-turret — una zona di controllo inamovibile."
  weakness: "Nessuna mobilità e raggio di piazzamento torrette cortissimo (350). Gli assassini mobile gap-close prima che le torrette sparino; le torrette muoiono istantaneamente all'AOE waveclear."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet procca su E (slow blocca il bersaglio) e su W, aggiungendo burst al DPS delle torrette. Manaflow Band evita l'esaurimento mana quando si riposizionano le torrette distrutte. Transcendence accorcia E e W. Gathering Storm scala l'AP nel late game."
    secondary_rationale: "Biscuit Delivery sostiene i livelli iniziali ad alto consumo di mana e Cosmic Insight riduce tutti i cooldown globalmente, incluso UPGRADE!!! — rotazioni R+Q più frequenti definiscono il mid game."
    secondary_alternative: "Contro lane ad alto poke (Xerath, Vel'Koz) valuta di sostituire Inspiration con Resolve prendendo Second Wind (rigenera HP dopo aver subito danni) e Bone Plating (riduce il burst da combo multi-hit) per restare in lane più a lungo."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Non possono avanzare nel nest delle tre torrette senza subire DPS continuo. Il loro burst richiede avvicinarsi, e lo stun di E più i beam delle torrette puniscono l'approccio prima che possano rispondere."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Mage corpo a corpo o tank che devono entrare nel raggio delle torrette"
      reason: "Il loro engage avviene a corto raggio o richiede di camminare dentro la zona. Tre torrette piazzate rendono l'avanzata letale: il beam carico colpisce prima che l'animazione di engage sia completata."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mage artillery a lungo raggio che fanno poke fuori dal raggio delle torrette"
      reason: "Le torrette coprono solo un raggio attorno a Heimerdinger. I mage artillery restano a 1000+ range, fuori dal nest, e lo consumano a zero senza mai entrare nella sua zona di controllo."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Assassini mobili che gap-close prima che le torrette rispondano"
      reason: "Le torrette hanno un ciclo di attacco lento. Un assassino con triplo dash entra nel nest e uccide Heimerdinger prima che parta il primo beam; il cooldown è troppo corto per salvarlo."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Roamer globali che ignorano il nest"
      reason: "Heimerdinger non può fare roam — spostare le torrette richiede tre investimenti di Q. L'avversario prende kill gratis nelle side lane mentre Heimerdinger ottimizza un nest che non viene mai combattuto."
---

## Panoramica

Heimerdinger è un mage da zone control che vince in lane rendendo il terreno inabitabile per l'avversario. Le sue **H-28 G Evolution Turret (Q)** — fino a tre attive contemporaneamente — creano un campo danno persistente che punisce chiunque si avvicini al suo raggio. Quando sono a piena carica, le torrette sparano un beam potenziato; la **CH-2 Electron Storm Grenade (E)** stunn o rallenta i nemici in quella zona, e i **Hextech Micro-Rockets (W)** martellano i bersagli fino a 1325 di range. Il risultato è un campione la cui forza è interamente legata al posizionamento: quando il nest di torrette è attivo, è quasi impossibile scambiare con lui; quando non lo è, è uno dei campioni più esposti del gioco.

L'**UPGRADE!!! (R)** cambia completamente questa equazione. Premere **R+Q** piazza una mega-torretta potenziata — infligge danno AOE con splash (in un'area intorno al bersaglio principale), applica un rallentamento e dura 8 secondi indipendentemente da ulteriori cast di **Q**. Il game plan in mid è costruire e mantenere il nest fino al livello 6, poi usare **R+Q** per forzare l'avversario lontano dalla sua torre tier-1 e snowball (tradotto: costruire un vantaggio precoce che si moltiplica progressivamente) nel mid game.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potion. Il mana è critico: ogni torretta costa 20 mana e ne rimpiazzerai continuamente.

**Core items (in ordine di acquisto):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike di burst (burst: danno elevato concentrato in 1-2 secondi) sul primo item, regen mana per il rimpiazzo torrette e magic penetration (la capacità di ignorare parte della resistenza magica del nemico) che rende il poke (poke: danno a distanza per logorare i HP del nemico senza committarsi in uno scontro totale) di W rilevante.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica flat per punire i target fragili che si avvicinano al range delle torrette.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — amplifica il burst quando il nemico è sotto una soglia di HP, perfetto per il follow-up R+E in **W** dopo lo stun.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — riduce il cooldown di **UPGRADE!!!** e potenzia l'AP mentre l'ultimate è attivo; rotazioni più frequenti della mega-torretta definiscono il mid game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP nel late game; ogni beam e ogni razzo diventano una minaccia seria.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini e diver (Zed, Akali, Diana). La stasi (uno stato di breve invincibilità congelata) lascia alle torrette tre secondi per sparare mentre tu sei intoccabile.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni con molta healing (Vladimir, Sylas). Applica Grievous Wounds (un debuff che riduce la healing del 40%) tramite i colpi delle torrette.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario (il nemico più pericoloso da eliminare, di solito il carry avversario con più oro) costruisce un item di Magic Resist; sostituisce Rabadon's se l'intera squadra nemica stacca MR.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes è la scelta standard. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity è accettabile quando hai bisogno di più CDR (riduzione del cooldown — il parametro che accorcia il tempo di attesa tra un'abilità e l'altra) per ruotare **UPGRADE!!!** più rapidamente.

**Skill order:** Massimai **Q** per primo (fonte principale di danno e potenza torrette), **W** secondo (poke e carica torrette), **E** per ultimo. Prendi **R** ai livelli 6, 11, 16.

**Rune:** Primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**.

## Matchup chiave

- **Syndra:** Lancia sfere a distanza ma deve castare da una posizione fissa. Piazza tre torrette sotto la tua torre tier-1, mantieni il wave slow-pushed (lascia accumulare i minion al centro della lane in modo che l'onda successiva arrivi più numerosa) e usa **E** per interrompere la raccolta delle sfere. Al livello 6 vinci l'all-in (impegnarti completamente nello scontro puntando a uccidere l'avversario) con **R+Q** sul terreno conteso.
- **Zed:** Il matchup più difficile del pool. Farà dash attraverso le torrette prima che sparino. Rispetta il suo potere al livello 3 e al livello 6; compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass come secondo item. Quando usa **Death Mark (R)**, attiva la stasi immediatamente — le torrette avranno tre secondi per sparare.
- **Orianna:** Matchup equilibrato di poke. Può spostare le tue torrette con **Command: Shockwave (R)** durante i teamfight. In lane, posiziona le torrette sul lato della wave da cui lei deve avvicinarsi. Evita di stare raggruppato vicino al tuo nest quando lei ha la palla nelle vicinanze.
- **Twisted Fate:** Ignorerà il tuo nest e farà roam. Shova la wave sotto la sua torre prima che parta, metti ward sul fiume e cerca un **R+E** (knockup) in **W** se teletrasporta nella tua lane. Non puoi fermare il suo macro game (la strategia di largo respiro sulla mappa), ma puoi punire la sua torre base.
- **Viktor:** Mage immobile che ha bisogno di stare fermo per fare danno. Un nest di tre torrette attira il suo **Death Ray (E)** mentre fai poke con **W** dietro al cluster. Post-6, la mega-torretta **R+Q** lo allontana dalla wave o brucia il suo Flash.

## Power spike & condizioni di vittoria

- **Livello 1:** Piazza due torrette nella wave di minion prima che arrivi il primo cannone. Gli avversari che si avvicinano per colpire in corpo a corpo subiscono un DPS (Damage Per Second — il danno continuo inflitto ogni secondo dalle torrette) sorprendente e si ritirano — hai il first push (vantaggio sulla wave) senza spendere nemmeno mana per fare poke.
- **Livello 6:** **UPGRADE!!!** disponibile. La mega-torretta **R+Q** dura 8 secondi e non può essere colpita da CC (stun, rallentamento o qualsiasi crowd control); trasforma l'intera zona di Heimerdinger in una trappola mortale. Forza immediatamente uno scontro o un trade (trade: scambio breve di colpi o abilità in lane, senza committarsi all'all-in totale) sulla torre.
- **Luden's Echo completato (intorno al minuto 11-13):** Il poke di **W** ora infligge burst rilevante su target fragili. Abbina **E + W** per confermare kill attraverso il nest di torrette.
- **Malignance online (intorno al minuto 18-20):** Il cooldown di **UPGRADE!!!** scende vicino ai 60 secondi con CDR elevato. Puoi piazzare una mega-torretta ad ogni combattimento sugli obiettivi — quasi ad ogni spawn (spawn = comparsa in mappa di Baron Nashor o Drago, di solito ogni 5-6 minuti).

## Errori comuni

- **Piazzare le torrette in linea retta.** Mettile a triangolo o nel percorso che il nemico deve seguire per avvicinarsi. Una linea di tre torrette spara solo quando il nemico avanza in linea retta — un triangolo spara da più angolazioni ed è molto più difficile da evitare.
- **Usare R+Q in campo aperto.** La mega-torretta è uno strumento di zone control, non uno strumento di kill singola. Piazzala in un chokepoint (un passaggio stretto come il baron pit, il dragon pit o il cespuglio vicino alla torre tier-2) in modo che il nemico sia costretto a camminare nel suo raggio di danno.
- **Ricastare Q mentre le torrette sono ancora cariche.** Una nuova **Q** piazza una torretta a carica zero e resetta la carica di TUTTE le torrette presenti. Aspetta che la torretta più vecchia abbia sparato il suo beam prima di rimpiazzarla — altrimenti sprechi un colpo carico.
- **Dimenticarsi del bonus di velocità del Passivo.** **Hextech Affinity** ti dà bonus move speed vicino alle tue torrette. Usa il nest come pad per il kite (muoversi all'indietro continuando a infliggere danni): torna verso le torrette per sfuggire ai gank, non allontanarti da esse.

## Suggerimento avanzato

Impara la combo **R+E** knockup in **W** follow-up. Quando hai UPGRADE!!! disponibile, premi **R** e poi lancia subito **E**: atterrerà come una zona più ampia e i nemici nel centro verranno lanciati in aria (knockup: sollevati brevemente impedendogli di agire) invece di essere semplicemente stunnati. Il knockup interrompe i channel (come l'ultimate di Katarina o il recall di Zed), e la zona più ampia cattura i target in fuga che avrebbero schivato lo stun normale di **E**. Mentre sono in aria, spara il pieno barrage di **W** — tutti e cinque i razzi convergono sul target in CC prima che atterri, infliggendo danno quasi massimo prima che qualsiasi azione difensiva sia possibile.
