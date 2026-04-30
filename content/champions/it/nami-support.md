---
title: "Nami Support Build & Guida — Patch 16.9"
slug: "nami-support"
language: "it"
patch: "16.9"
champion: "nami"
role: "support"
last_updated: "2026-04-29"
description: "Guida Nami support per League of Legends Patch 16.9: build enchanter-poke, matchup di bot lane, power spike, errori comuni e un tip avanzato sul bubble."
quick_learn:
  champion_dd_id: "Nami"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Enchanter / Poke"
  abilities:
    - key: "P"
      name: "Surging Tides"
      description: "Quando le spell di Nami colpiscono un alleato, quell'alleato riceve un breve burst di Move Speed. Si stacka con la R."
      dd_spell_id: "Nami_Passive"
    - key: "Q"
      name: "Aqua Prison"
      description: "Skillshot mirato a bolla con piccolo delay. Stuna e danneggia i nemici nell'area di impatto. Cooldown lungo — usalo come setup, non come poke."
      dd_spell_id: "NamiQ"
    - key: "W"
      name: "Ebb and Flow"
      description: "Una corrente d'acqua che rimbalza fino a tre volte tra alleati (heal) e nemici (danno). Ogni unità è colpita una sola volta."
      dd_spell_id: "NamiW"
    - key: "E"
      name: "Tidecaller's Blessing"
      description: "Buffa i prossimi 3 attacchi o spell di un alleato: ogni hit slowa il target e aggiunge danno magico bonus. Combinala con le auto dell'AD carry per pokare."
      dd_spell_id: "NamiE"
    - key: "R"
      name: "Tidal Wave"
      description: "Onda lunga e larga che knock-uppa, slowa e danneggia i nemici attraversati. Gli alleati colpiti ricevono il doppio del Move Speed di Surging Tides."
      dd_spell_id: "NamiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3877"
      name: "Bloodsong"
      against: "quando la tua bot lane gioca per il poke e i roam (Caitlyn, Ezreal) — Bloodsong premia gli hit di spell con burst extra"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP) — l'heal proca il buff e dà loro Ability Power bonus"
    - dd_id: "3107"
      name: "Redemption"
      against: "quando il team ha bisogno di più heal di gruppo nei fight lunghi o quando contestate obiettivi come Drake e Baron"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE pesante (danno su area, tipo Yone R o Kennen R) — l'attivo dà uno shield istantaneo a tutta la squadra e salva la back line"
  base_combo: ["E", "AA", "Q", "W", "R"]
  win_condition: "Out-poka la lane con E sulle auto dell'AD carry, landa una sola Q per convertire il vantaggio HP in kill, e usa la R come engage multi-target o save quando i nemici committano."
  weakness: "La Q è uno skillshot lento e ad alto cooldown: se la sbagli la lane resta senza hard CC per 12 secondi. Senza dash e con HP fragili, hook support e assassin la cancellano."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "caitlyn", "ashe", "varus"]
      archetype: "AD carry a lungo range con auto-attack forti"
      reason: "E più Surging Tides più Ardent Censer trasformano un marksman fermo in una macchina da poke: ogni auto empowered fa danno bonus e slowa, permettendo di restare in lane più del nemico."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanter di puro sustain senza hard CC"
      reason: "La loro lane è solo heal. Una sola Q landata bypassa l'heal e snowballa il trade. Il poke di Nami batte anche la loro rigenerazione lenta."
    - examples: ["xerath", "ziggs"]
      archetype: "Mage artillery fermi"
      reason: "Pokano da una linea fissa e non hanno dash. Ebb and Flow heala attraverso il loro poke mentre la Q li becca quando si avvicinano per pulire la wave."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook support a lungo range"
      reason: "Nami non ha dash e ha HP fragili: un hook landato prima del 6 cancella lei o l'AD carry prima che la R sia pronta. Il loro range hook batte il windup della Q."
    - examples: ["leona", "rell", "nautilus"]
      archetype: "Tank support da hard-engage"
      reason: "Ti saltano addosso prima che tu finisca di castare la Q (il bubble ha 0.5s di delay). Una volta stunata: niente R, niente peel, niente fuga — muori nella catena CC."
    - examples: ["lulu", "renata-glasc"]
      archetype: "Enchanter con hard CC di peel"
      reason: "La W polymorph di Lulu e la W berserk di Renata cancellano la R di Nami a metà cast e la lockano attraverso l'heal. Out-tradano anche al level 2 grazie alla utility point-and-click."
---

## Panoramica

Nami è un'enchanter (un support che cura, shielda e buffa il danno degli alleati) con un forte pattern di poke in lane (poke = logorare gli HP nemici da distanza senza committare al fight). La passive **Surging Tides** dà Move Speed a ogni alleato colpito dalle sue spell, **Aqua Prison (Q)** è uno stun bubble single-target (l'unico hard CC — crowd control, un effetto che disabilita il target — del kit), **Ebb and Flow (W)** è una corrente che rimbalza curando alleati e danneggiando nemici, **Tidecaller's Blessing (E)** buffa i prossimi 3 attacchi o spell di un alleato con danno bonus e slow, e **Tidal Wave (R)** è un'onda lunga e larga usata come engage, follow-up o disengage (un'abilità che spezza il tentativo di engage avversario — quando saltano dentro, tu li butti fuori).

Il game plan è semplice: tradi in lane con la **E** sulle auto dell'AD carry (il marksman della bot lane che scala con gli item), tieni la **Q** per un setup confermato, sustaini il poke con la **W** e cerchi una kill 2v2 quando l'AD carry nemico brucia il Flash. Dopo il level 6, ogni wave che la bot nemica pusha troppo diventa una combo **R**-**Q**-**W**. Late game scali come ibrido peel (proteggere il carry da chi lo attacca) e poke: non engagiare mai per primo (iniziare il fight), rispondi sempre al commit nemico con la R.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da support che si evolve dando più gold) più 2 Health Potion. Salta gli starter da danno: Nami scala sull'utility, non sulle kill solitarie.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — si evolve in Bounty of Worlds e poi in un legendary support più tardi. Accumula gold e cariche ward in automatico ogni volta che fai danno o assist.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'Ability Haste (cooldown ridotto) ti permette di spammare **E** e **W** su cooldown brevi; boot di default per gli enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva che heala e shielda a ogni cast e che cresce nei fight lunghi. Si combina perfettamente con la **W** che rimbalza tra alleati.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — buffa con on-hit e Attack Speed bonus chi heali o shieldi. Miglior support item accanto a un AD carry da auto come Caitlyn o Jhin.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — pulisce l'hard CC da un alleato. Obbligatorio se il nemico ha uno stun, charm o hook single-target sul tuo carry.

**Situational items:**

- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade finale alternativo di World Atlas quando giochi per poke e pickoff (eliminare un nemico isolato fuori dal teamfight). Aggiunge burst sugli hit di spell, sostituisce Bounty of Worlds nelle partite aggressive.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP). L'heal proca (triggera) il buff e dà loro Ability Power bonus per i prossimi attacchi.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si trascinano (Drake, Baron, teamfight lunghi). Heal AOE ritardato che puoi droppare da metà mappa.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE pesante (danno alto concentrato in 1-2 secondi, tipo Yone R o Kennen R). L'attivo dà uno shield istantaneo a tutta la squadra.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è il default. Plated Steelcaps le sostituiscono contro comp pesanti da auto-attack (Master Yi, Tristana); Mercury's Treads se il team nemico ha 3+ minacce di hard CC mirate su di te.

**Skill order:** Maxa **E** per prima (durata buff e danno bonus scalano per livello — il tuo tool principale di poke), **W** seconda (più rimbalzi e heal più grossi), **Q** ultima. Metti **R** ai livelli 6, 11, 16. Parti con **E** al level 1 per vincere il primo trade con l'AD carry.

**Runes:** Primario **Sorcery** con **Summon Aery** (proc di danno e shield sulle spell — perfetto per il poke E), **Manaflow Band** (mana sustain), **Absolute Focus** (AP bonus sopra il 70% HP), **Scorch** (burn extra ogni 10s sulla prima spell). Secondario **Inspiration** con **Biscuit Delivery** (biscotti gratis di mana/HP nei primi 6 minuti) e **Cosmic Insight** (Ability Haste e Summoner Spell ridotti). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Caitlyn / Jhin (alleati):** Partner migliori. Usa la **E** sulle loro auto e out-pokano qualsiasi bot lane avversaria. Tieni la **Q** per il momento in cui piazzano la trap o tirano la 4° freccia — setup di stun garantito.
- **Blitzcrank / Thresh (nemici):** Hook support. Stai dietro ai minion ogni volta che attraversi il river. L'hook landa una volta e tu o l'AD carry siete morti — non hai dash per scappare. Compra ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** prima del solito.
- **Leona / Nautilus (nemici):** Tank da hard-engage. Tieni la **Q** come stun difensivo — quando engagiano sull'AD carry, bubblali a metà salto per interrompere il follow-up. Non bruciare mai la **Q** per pokare in questi matchup.
- **Soraka (nemica):** Specchio di sustain. La out-tradi con **E** più auto-attack. Forza un all-in al level 2 (commit totale a una kill, senza opzione di disengage): **E** sull'AD carry, **W** durante il trade, **Q** quando lei si avvicina per healare — i tre colpi atterrano insieme.
- **Lulu (nemica):** Matchup enchanter più duro. La sua **W** polymorph cancella la tua **R** a metà cast e la sua **E** shield annulla il poke. Gioca per il level 6: combo **R**-**Q** dal fog of war (il bush non wardato vicino al river bot) bypassa il timing del peel.

## Power spike & condizioni di vittoria

- **Level 2:** Con **E** a 1 e **W** a 2 puoi shield-pokare un trade corto (uno scambio breve di colpi in lane, non un all-in). Lancia la **E** sull'AD carry mentre si avvicina per il last-hit (uccidere un minion per il gold), poi **W** attraverso loro per concatenare il poke.
- **Level 6:** Si sblocca **Tidal Wave**. Ogni 2v2 iniziato dai nemici è da qui vincibile — engagiano, tu **R** attraverso, la **Q** landa sul target slowato, la **W** chiude. Hard-flippa la wave per gli obiettivi dopo la kill.
- **Moonstone Renewer + Ardent Censer (~ minuto 14-18):** Spike teamfight. L'HP effettivo dell'AD carry quasi raddoppia se heal-spammi durante un fight, e ogni auto empowered aggiunge on-hit extra dal censer.
- **Tre legendary online (~ minuto 25):** Con ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** aggiunto, pulisci l'unica abilità CC che cancellerebbe il tuo carry. Da qui ogni fight su un obiettivo è un 5v4 se il nemico committa hard CC.

## Errori comuni

- **Lanciare la Q per pokare.** **Aqua Prison** ha 12 secondi di cooldown a rank 1 e il proiettile è lento. Q sbagliata significa niente hard CC per il prossimo trade o gank del jungler. Tieni sempre la **Q** come tool di setup: dopo che è landato uno slow o dopo un Flash in.
- **Castare la E su te stessa in lane.** **Tidecaller's Blessing** può targettare anche te, ma le auto di Nami fanno quasi zero danno. Default: **E** sull'AD carry; auto-buff solo se il carry è in base e devi pulire una wave da sola.
- **Stare davanti per landare la R.** Nami non ha dash e ha 525 HP al level 1. Casta la **R** dalla second-line, dietro l'AD carry, e angolala attraverso il team — non serve essere davanti per indirizzarla.
- **Sprecare la W su alleati a HP pieni.** **Ebb and Flow** heala in base al bisogno del target rimbalzato: un rimbalzo su alleato al 100% HP rende meno al successivo. Tieni la **W** per dopo un trade di poke, non prima.
- **Engagiare per primo.** Nami è un support da counter-engage, non da pick comp. Se R-flashi da sola, il team ruota tardi e muori senza follow-up.

## Suggerimento avanzato

Allenati alla combo **R-Q attraverso i muri**. Casta **Tidal Wave (R)** in modo che attraversi un muro (passa il terreno) e mentre l'onda knock-uppa il target dall'altra parte, casta subito **Aqua Prison (Q)** sullo stesso punto. Il knock-up aggiunge 0.5 secondi di hit time garantito e la **Q** atterra durante quel tempo — il nemico non può schivare uno stun sopra a un knock-up. Questa singola combo trasforma Nami in un pickoff a un bottone (eliminare un nemico isolato) su qualsiasi squishy (campione fragile) preso da solo nel fog of war vicino a Drake o pit di Baron. Costo: la **R** per i 100+ secondi successivi, quindi committa solo quando la kill è blindata.
