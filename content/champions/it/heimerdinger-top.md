---
title: "Heimerdinger Top Build & Guida — Patch 16.9"
slug: "heimerdinger-top"
language: "it"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Guida Heimerdinger top lane per la Patch 16.9 di LoL: build turret-wall, combo UPGRADE, spike di potenza contro juggernaut melee e win condition in splitpush."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Guadagna velocità di movimento mentre si è vicini a torri alleate o alle torrette deployate da Heimerdinger. Ricompensa il combattimento dentro al turret nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Piazza una torretta (massimo 3 attive). Le torrette accumulano carica e sparano un raggio più potente al massimo della carica. Le cariche si azzerano a ogni cast di Q. Range 350, cooldown 1s, 20 mana."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Barrage di razzi a lungo raggio (1325 range) che convergono sul cursore. I colpi extra infliggono danno ridotto. Ogni razzo che colpisce un campione dona il 20% di carica alle torrette vicine."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lancia una granata (range 970) che rallenta i nemici nella zona d'impatto e stordisce quelli al centro. Colpire una torretta la carica al massimo. Cooldown 11s fisso, 85 mana."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Potenzia la prossima abilità non-ultimate. R+Q: mega-torretta (8s, immune a CC, splash AOE + slow). R+W: 4 ondate di razzi. R+E: zona di stordimento più ampia + knockup al centro. Cooldown 100-70s."
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
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e bruiser che superano la copertura del turret nest (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro top con forte sustain (passiva di Darius, Nasus, Dr. Mundo) — blocca la rigenerazione HP"
    - dd_id: "3118"
      name: "Malignance"
      against: "contro composizioni più tanky dove conta l'uptime della mega-torretta R+Q — riduce il cooldown dell'ultimate"
    - dd_id: "3135"
      name: "Void Staff"
      against: "quando un nemico costruisce Magic Resist (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Affama i top melee con un muro di tre torrette in corsia, poi usa UPGRADE+Q mega-torretta per ancorare i fight su baron e dragon. Accetta il 1v1 solo dentro al turret nest."
  weakness: "Bruiser e diver mobili con più dash abbattono il turret nest prima che faccia danno. Nessuna escape oltre a Flash e al bonus velocità della passiva."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet procca su E (slow blocca il bersaglio) e W multi-hit. Scorch su Gathering Storm: Heimer top vince in corsia, e Scorch aggiunge danno reale ai livelli 1-6 vs juggernaut. Transcendence accorcia E e W per uptime continuo delle torrette."
    secondary_rationale: "Biscuit Delivery copre i costi mana dei posizionamenti ripetuti di Q nelle prime ondate e fornisce sustain HP contro il harassment di autoattacchi. Cosmic Insight riduce il cooldown di Flash e di UPGRADE, moltiplicando le finestre disponibili per la mega-torretta."
    secondary_alternative: "Contro un top AD pesante (Darius, Renekton, Garen) sostituisci Inspiration con Resolve come secondario: Conditioning (armor e MR dopo il minuto 12) e Overgrowth (HP scaling). Il compromesso: meno sustain iniziale, più resistenza agli all-in."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Juggernaut immobili o lenti che devono attraversare la copertura delle torrette"
      reason: "Non hanno dash o blink per aggirare il turret nest. Ogni passo dentro range attiva i raggi delle torrette più i razzi W, consumando i loro HP prima che possano fare un trade significativo."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Juggernaut melee incapaci di chiudere la distanza"
      reason: "Il loro engage richiede di arrivare a portata melee contro tre torrette che sparano contemporaneamente. Lo stordimento di E nella zona di approccio seguito da W ferma il commit prima che raggiunga Heimerdinger."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Diver mobili con più dash che abbattono il turret nest"
      reason: "Possono fare dash attraverso la zona delle torrette, resettare sui minion e raggiungere Heimerdinger prima che possa riposizionarsi. Zhonya's Hourglass è obbligatorio — usa la stasi per sprecare le loro finestre di dash e costringerli a disimpegnarsi."
    - examples: ["jayce", "quinn"]
      archetype: "Top laner a lungo raggio che fanno poke da fuori range 970"
      reason: "Zonano Heimerdinger dalla wave da una distanza in cui E e W non riescono a colpire in modo affidabile, costringendolo a subire poke gratis ogni volta che tenta di piazzare una torretta o fare last-hit."
---

## Panoramica

Heimerdinger top è un lane bully che trasforma i matchup contro campioni melee in una guerra d'attrito prolungata. La sua identità in top lane è diversa dal mid: qui l'obiettivo non è roamare ma creare un **turret nest** invalicabile — una zona coperta da tutte e tre le H-28 G Evolution Turret che costringe qualsiasi campione melee a scegliere tra subire danno magico costante o cedere il controllo della wave (wave control: decidere se la linea di minion spinge verso di te o verso il nemico). La passiva **Hextech Affinity** (bonus velocità di movimento vicino a strutture alleate e alle proprie torrette) premia chi combatte dentro quel nest piuttosto che kitar via da esso. Il termine kite indica il movimento all'indietro mentre si infligge danno, mantenendo la distanza da un nemico che insegue.

Il game plan è piazzare le torrette davanti alla torre avversaria, fare poke con **W** (Hextech Micro-Rockets) e **E** (CH-2 Electron Storm Grenade) per tenere l'avversario sotto la soglia dell'all-in (all-in: combattimento totale senza possibilità di disimpegnarsi), e poi deployare la mega-torretta UPGRADE+Q al livello 6 per bloccare la corsia completamente. La win condition macro è lo splitpush (spingere una side lane da solo per obbligare gli avversari a rispondere, liberando obiettivi per il team): un turret nest in una side lane è abbastanza minaccioso da costringere l'avversario a mandare due campioni per smantellarlo, regalando al resto del team il tempo per prendere obiettivi.

## Build Consigliata

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potion. Il mana aiuta a sostenere i posizionamenti ripetuti di Q nelle prime ondate, dove ogni torretta costa 20 mana e va rimpiazzata immediatamente dopo la distruzione.

**Core items (in ordine):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike di burst e sustain mana. La passiva si attiva sugli attacchi delle torrette contro i campioni e potenzia i trade di poke con W (tradare: scambiare brevi colpi in corsia senza impegnarsi in uno scontro totale).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat per tagliare attraverso le rune di armatura iniziali.
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP più un bonus di velocità di movimento che si attiva infliggendo danno con le spell. Permette di kitar lungo la corsia per riposizionare le torrette senza perdere la gittata di W.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, particolarmente efficace per chiudere avversari sotto il 40% HP con un raggio di torretta carico o una volata di W.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP nella fase tardiva. Con quattro item attivi, i raggi delle torrette e i razzi W scalano a un danno che giustifica lo split anche contro due difensori.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — obbligatorio contro diver mobili (diver: campioni che usano dash per entrare in mischia e uccidere target vulnerabili a corto raggio — es. Irelia, Camille, Fiora). La stasi spreca la loro finestra di dash e lascia la mega-torretta operativa mentre sei invulnerabile.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro top con forte sustain (passiva di Darius, Nasus, Dr. Mundo). Grievous Wounds (un debuff che dimezza la healing ricevuta) applicato dai colpi delle torrette e di W blocca il loop di rigenerazione HP.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — contro composizioni più tanky dove la mega-torretta UPGRADE+Q è il tuo strumento principale nei teamfight. Riduce il cooldown di R moltiplicando le finestre disponibili per la mega-torretta tra un obiettivo e l'altro.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sostituisci un item quando un target prioritario (il campione nemico più pericoloso da abbattere, di solito il carry avversario) costruisce Magic Resist (Mercury's Treads, Force of Nature, Spirit Visage).

**Stivali:** Sorcerer's Shoes è il default. Passa a ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity se sei in vantaggio e vuoi più frequenza di cast di UPGRADE.

**Skill order:** Maxima Q per prima per il danno delle torrette e la velocità di ricarica. Maxima W per seconda per scalare il barrage di razzi. Maxima E per ultima — è principalmente utility (stordimento + carica torrette) non una fonte primaria di danno. Prendi R ai livelli 6, 11, 16.

**Rune:** Primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Contro un top AD pesante, sostituisci Inspiration con **Resolve** usando **Conditioning** e **Overgrowth**.

## Matchup chiave

- **Nasus:** Juggernaut orientato al farming senza dash. Piazza tutte e tre le torrette in linea diagonale tra lui e la wave al livello 1. Non può fare trade senza attraversare i raggi. Usa E per stordirlo ogni volta che tenta il last-hit sotto pressione, poi W per consolidare. Rispetta il suo W potenziato al livello 6 (riduce la tua attack speed, ma le torrette deployate non subiscono questo debuff — non si applica alle strutture).
- **Darius:** Pericoloso al livello 3 quando la sua E (Apprehend, il pull) diventa disponibile. Non stare vicino alle torrette senza minion che bloccano l'angolo del pull. Kita all'indietro mentre si avvicina, centra lo stordimento di E per interrompere il pull, poi W immediatamente. La sua passiva Hemorrhage (bleed) si azzera quando rompi il contatto con il movimento — kitar è più efficace che stare fermi a tradare.
- **Irelia:** Matchup difficile. Resetta il dash (E di Ionian Fervor) sui minion e può raggiungerti anche attraverso tre torrette se pianifica il percorso. Tieni Zhonya's Hourglass come terzo item. Al livello 6, usa E per stordirla durante l'approccio e subito dopo cast di UPGRADE+Q per deployare la mega-torretta: il slow AOE (area of effect — danno che colpisce una zona invece di un singolo bersaglio) della mega-torretta la blocca nel raggio dei raggi completi.
- **Garen:** Matchup diretto. Non ha poke a distanza e non ha dash; la sua unica escape è Perseverance (rigenerazione HP passiva). Nega la sua finestra di regen sfasando costantemente il poke tra i raggi delle torrette e i razzi W. Quando va per un last-hit, lancia E per lo stordimento centrale e segui con W per il ciclo di burst completo. Il suo Judgment (E, spin) fa danno in cerchio: non stargli vicino quando lo attiva, mantieni la distanza a range di W.
- **Jayce:** La sua forma ranged (Shock Blast) raggiunge 1050 di range contro il tuo 1325 di W, ma in pratica si trasformerà in forma melee per gli autoattacchi potenziati. Quando commita in forma melee, quella è la tua finestra: zona a tre torrette più stordimento E seguito da W. Se rimane in forma ranged per tutta la lane, tieni le torrette più vicine alla tua torre e concentrati sul pareggiare la sua push — non inseguirlo in campo aperto.

## Power spike & condizioni di vittoria

- **Livello 1:** Le tre torrette sono operative al livello 3, ma anche una sola torretta al livello 1 consuma HP all'avversario al primo approccio alla wave. Piazza Q vicino al confine di range dell'esperienza così il nemico deve entrare nel range della torretta per fare last-hit.
- **Livello 6 (UPGRADE+Q):** La mega-torretta è 8 secondi di danno AOE immune a CC che nessun campione melee può ignorare. Piazzala al centro della corsia per creare una zona che l'avversario non può attraversare senza subire un ciclo completo di raggi + slow. È il tuo strumento di splitpush più forte.
- **Completamento Cosmic Drive (intorno al minuto 14-16):** Con tre item (Luden's + Stivali + Cosmic Drive), il danno delle torrette comincia a essere significativo anche contro i tank. La velocità di movimento di Cosmic Drive permette di kitar e rimpiazzare le torrette abbattute senza perdere il posizionamento nel fight.
- **Rabadon's Deathcap attivo (intorno al minuto 24-28):** Le torrette di Heimerdinger nel late game infliggono un danno paragonabile agli attacchi concentrati di un carry. Forza un fight su baron o dragon con una mega-torretta pre-piazzata all'ingresso della buca per il massimo valore.

## Errori comuni

- **Non mantenere tre torrette attive.** Se una torretta viene distrutta o scade, rimpiazzala immediatamente. Un setup a due torrette fa il 33% di danno in meno e lascia spazi aperti. Tieni Q su un tasto rapido e rimpiazza automaticamente entro range 350 da uno slot vuoto.
- **Usare UPGRADE+E invece di UPGRADE+Q contro juggernaut melee.** Il knockup di R+E è spettacolare, ma la mega-torretta R+Q infligge molto più danno totale in 8 secondi contro bersagli lenti. Riserva R+E per pulire ondate di jungle o punire mage (campioni ad alto danno magico con basse resistenze fisiche), non come strumento primario contro top melee.
- **Stare fermi durante l'all-in avversario.** Le torrette forniscono copertura ma non invulnerabilità. Se l'avversario commita con HP pieno e un gap-close attivo, arretra mentre le torrette infliggono danno — non aspettare i proc (il momento in cui lo stun si attiva su un nemico colpito) di stordimento immobile.
- **Saltare Zhonya's Hourglass contro matchup con molti dash.** Contro Irelia, Camille o Fiora, Zhonya's è core, non situazionale. Compila come terzo item, prima di Shadowflame.
- **Allungarsi per piazzare torrette nella jungle avversaria senza escape.** Stabilisci prima il nest in sicurezza, poi estendi la copertura verso gli obiettivi una volta online Cosmic Drive.

## Suggerimento avanzato

Quando usi UPGRADE+Q, piazza la mega-torretta non sopra l'avversario ma un passo dietro la sua posizione, lungo il percorso di ritirata. Mentre arretra, cammina verso il range dei raggi invece di uscirne. Combinato con lo stordimento di E nell'approccio, questo forza due o tre cicli di raggi completi prima che possa lasciare la zona — quasi l'intera durata degli 8 secondi della mega-torretta.
