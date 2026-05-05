---
title: "Naafiri Mid Build & Guida — Patch 16.9"
slug: "naafiri-mid"
language: "it"
patch: "16.9"
champion: "naafiri"
role: "mid"
last_updated: "2026-05-05"
description: "Guida Naafiri mid lane per League of Legends Patch 16.9: starter kit AD assassin, build con Darkin Hounds, matchup chiave, power spike, errori comuni e suggerimenti."
quick_learn:
  champion_dd_id: "Naafiri"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Assassin / Diver"
  abilities:
    - key: "P"
      name: "We Are More"
      description: "Naafiri evoca i Darkin Hounds (mute di lupi compagni) che auto-attaccano lo stesso bersaglio che lei colpisce. Il branco scala con i livelli ed è la fonte principale del suo danno."
      dd_spell_id: "Naafiri_Passive"
    - key: "Q"
      name: "Darkin Daggers"
      description: "Lancia fino a due daggers. Ognuno applica bleed (danno spalmato nei secondi successivi). Se il bersaglio è già in bleed, il secondo dagger detona il sanguinamento per burst extra."
      dd_spell_id: "NaafiriQ"
    - key: "W"
      name: "The Call of the Pack"
      description: "Brevissima untargetability che spawna packmates extra e dà a Naafiri AD e Move Speed bonus. Tool da pre-fight: lancia subito prima di entrare."
      dd_spell_id: "NaafiriR"
    - key: "E"
      name: "Eviscerate"
      description: "Dash corto con AOE all'atterraggio. Richiama tutti i packmates al fianco di Naafiri a HP pieni — è il tuo bottone di reset e reposition durante un fight."
      dd_spell_id: "NaafiriE"
    - key: "R"
      name: "Hounds' Pursuit"
      description: "Dash a lunga gittata target su un campione. Score un takedown nella finestra e ottieni un recast gratuito più uno scudo. Resetta sulle kill come un'ulti da caccia."
      dd_spell_id: "NaafiriW"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "swap del secondo item quando sei avanti e vuoi più waveclear più una active che resetta l'auto-attack su un target a basso HP"
    - dd_id: "6697"
      name: "Hubris"
      against: "rimpiazzo snowball di Edge of Night quando il nemico non ha CC magico single-target pericoloso e accumuli takedown costanti"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro AP burst pesante (Syndra, Veigar, LeBlanc): lo scudo magico procca quando R-i in mezzo a loro, salvando l'all-in"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro almeno una frontline tanky (Cho'Gath, Sion, Malphite top) sopra i 3000 HP — danno bonus che scala col loro HP"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro comp da hard focus (Malphite R + Yasuo wombo) quando sei avanti e il team ha bisogno che tu committi due volte"
  base_combo: ["Q", "R", "AA", "Q", "E"]
  win_condition: "Pickoffa target squishy isolati (un nemico fuori posizione, lontano dal team) concatenando R su di loro e refreshandola al takedown per inseguire il secondo bersaglio."
  weakness: "Niente hard CC affidabile e dash a corto raggio. Se il nemico ha dash, displacement o un support con peel pesante, rimbalzi sulla front line e i hound muoiono prima di arrivare alla back line."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primaria: Electrocute procca naturalmente con Q (due daggers) più una basic attack, calzando il burst a 3 hit di Naafiri. Taste of Blood dà sustain in lane, Sixth Sense rivela ward in roam, Ultimate Hunter taglia la R per più tentativi di reset."
    secondary_rationale: "Precision secondaria: Triumph rifonda HP sui takedown (enorme con i reset di R quando concateni kill), Coup de Grace boosta il danno di finitura sotto soglia HP — esattamente il ruolo di una assassin che chiude le kill."
    secondary_alternative: "Contro mid da poke pesante o healing-stack (Cassiopeia, Vladimir), swap Precision verso Resolve con Second Wind (regen contro poke) e Bone Plating (mitiga le prime 3 spell), accettando di perdere il sustain dei takedown per la sopravvivenza in lane."
matchup_draft:
  pick_into:
    - examples: ["azir", "viktor", "orianna", "anivia"]
      archetype: "Mage di controllo immobili senza dash"
      reason: "Non hanno escape veloce contro un dash R a lunga gittata. Una volta atterrata la R chiudi con Q + auto prima che camminino in safe, e i tuoi hound assorbono qualunque skillshot di ritorno."
    - examples: ["malzahar", "veigar"]
      archetype: "Mage da cast e channel statici"
      reason: "Stanno fermi per fare danno. R chiude da fuori la loro effective range e la untargetability di W mangia la prima hard CC, così arrivi sopra di loro a HP pieno."
    - examples: ["lux", "xerath"]
      archetype: "Artillery a lunga gittata senza mobility"
      reason: "Vincono il poke early ma si sciolgono nel momento in cui un dash gli arriva addosso. Stacca HP o Edge of Night, mangia una Q o uno stun, poi R chiude la distanza e il branco fa il resto."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Mid-laner con Wind Wall"
      reason: "Wind Wall blocca entrambi i daggers di Q, cancellando il damage principale in lane e il setup del bleed. Senza bleed il branco impiega molto più a chunkare, e la mobility E + scudo di Yasuo vince l'all-in."
    - examples: ["zed", "fizz"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "Duellano nel tuo stesso range e hanno escape integrate (Zed shadows, Fizz E) che dodgano il lock-on della R o il follow-up Q. Itemizzano come te, quindi scalate uguale senza che tu abbia un edge."
    - examples: ["malphite", "lissandra"]
      archetype: "Self-peel con CC point-and-click"
      reason: "La R di Lissandra (self-stasi, bolla di intoccabilità) cancella il takedown reset della tua R. Malphite con la W armor + R knock-up ti separa dai hound e blocca l'inseguimento prima che il bleed atterri."
---

## Panoramica

Naafiri è un'AD assassin che combatte con un branco di Darkin Hounds (piccoli lupi compagni che auto-attaccano lo stesso bersaglio che colpisci tu). A differenza della maggior parte degli assassin, non si affida a una singola finestra di burst — il suo danno è la somma del suo AD più quanto contribuisce ogni hound. Il mid lane le si addice perché le distanze brevi permettono alla R (il suo dash target su campioni) di raggiungere le side lane e il river offre roam facili una volta che la ulti è disponibile.

Il piano partita è accumulare un piccolo lead di CS in lane, poi iniziare la caccia da livello 6: lancia W per una breve untargetability che spawna hound extra, R-dash su un target isolato (un nemico fuori posizione, lontano dal team), Q per il bleed, e E per uscire se il fight gira male. Score un takedown nella finestra di R e ottieni una seconda R gratis — è l'identità totale del campione. Lo skill expression sta in due cose: quando committare la R (non puoi cancellare il dash, la scelta del target è tutto) e come tenere vivi gli hound tra i fight, perché hound morti significa zero damage.

## Build Consigliata

**Item iniziali:** Doran's Shield + 2 Health Potions. Doran's Shield è preferito a Doran's Blade perché la maggior parte dei matchup hanno poke a distanza (skillshot, harass auto-attack) e la regen ti permette di restare in lane fino al livello 6.

**Item core (nell'ordine):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — spike di burst del primo item. La passiva a due hit calza alla perfezione il combo Q-poi-AA e ti dà un piccolo scudo + Move Speed a ogni proc.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — boot da Ability Haste, così il cooldown di R cala e ottieni più reset di takedown per fight.
3. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield che blocca la prima hard CC contro di te. Essenziale contro qualsiasi mid con stun o root, perché la R è un dash committal che non puoi annullare.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — penetrazione di armatura più slow su target già danneggiati. Risolve il problema "se ne è andato camminando" quando la R è in cooldown.

**Item situazionali:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — rimpiazza Edge of Night quando sei avanti e il nemico non ha CC magico single-target pericoloso. Aggiunge danno AOE (i tuoi hound amano l'AOE) e una active che resetta l'auto su un target a basso HP.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — rimpiazzo da snowball quando accumuli takedown costanti. AD per kill snowballa il vantaggio (un piccolo lead che cresce in fretta: kill → gold → item → più kill).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro AP burst pesante (Syndra, Veigar, LeBlanc): lo scudo magico procca quando R-i in mezzo a loro, salvando l'all-in.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro almeno una frontline tanky (Cho'Gath, Sion, Malphite top) sopra i 3000 HP. Danno bonus che scala col loro HP pool.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro comp da hard focus (Malphite R + Yasuo wombo combo) quando sei avanti e il team ha bisogno che tu committi due volte.

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default. Swap a Plated Steelcaps se la squadra avversaria ha 3+ minacce auto-attack, o Mercury's Treads se il mid avversario è un mage da CC (Ahri, Annie, Lissandra).

**Skill order:** Massimizza **Q** per primo (damage principale e bleed), **E** per secondo (dash + AOE), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16. Maxare Q per primo ti permette di tradare in lane col combo bleed-poi-detona anche prima del primo item.

**Rune:** Albero primario **Domination** con **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondario **Precision** con **Triumph** e **Coup de Grace** per sustain dai takedown e damage di esecuzione.

## Matchup chiave

- **Yasuo / Yone:** Hard counter in lane. Tieni **Q** finché non hanno bruciato la **E**; tirare daggers contro Wind Wall è l'errore peggiore che puoi fare. Punta a roamare al livello 6 invece di forzare il 1v1.
- **Annie:** 1v1 pari ma punitivo se piazza lo stun. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** come secondo item per assorbire lo stun, e non **R**-arla mai a melee range pre-6.
- **Lux:** Vinci l'all-in oltre il livello 6. La **R** supera la gittata della sua **Q**, e l'untargetability di **W** annulla la binding. Compra potion early per soakare il poke finché non puoi dasharle addosso.
- **Ahri:** Lane da coin-flip. Tracciale il cooldown della **Charm** (~12s) e committa **R** solo quando è giù. La **W** può negare il proiettile di Charm se la temporizzi sul suo cast frame.
- **Galio:** Skill matchup. Punisce quando ti aggrappi agli alleati, quindi splitpusha le wave laterali e fai cross-map con **R** quando la sua ulti è in cooldown. Compra ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** prima del solito per slowarlo fuori dal range della sua **W** taunt.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **E** hai un dash corto e un combo da bleed. Un trade in cui colpisci entrambi i daggers Q chunka 30-40% dell'HP di un mage avversario.
- **Livello 6:** Prima **Hounds' Pursuit** sblocca i roam. Qualsiasi fight su mid-river senza ward è una kill garantita sul target più squishy in vista.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completo (~ minuto 11-13):** La soglia di one-shot scende sotto al 50% HP. Cerca pickoff (eliminare un nemico isolato dal team) su river o vicino agli obiettivi.
- **3 item + ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) Serylda's Grudge (~ minuto 22-26):** Le catene di reset R diventano affidabili. Con 30+ Ability Haste dagli Ionian Boots, ogni takedown ti dà una **R** fresca: in un teamfight pulito puoi colpire due squishy di fila.

## Errori comuni

- **Tirare Q in Wind Wall o su minion fermi.** Q è una coppia di proiettili lunga e lenta. Aspetta che il nemico passi sopra una linea di minion, poi mira attraverso; gli hound saltano sul primo campione che i daggers colpiscono, quindi una Q sprecata significa anche zero damage del branco.
- **R-are il tank.** Hounds' Pursuit è un dash committal senza escape. Tuffarti sulla front line significa arrivare circondata, gli hound muoiono di AOE e R è in cooldown quando il carry è finalmente esposto. **R**-a sempre il target prioritario più squishy disponibile, anche se devi aspettare 2-3 secondi.
- **Ignorare gli hound.** Scalano col tuo AD e con gli item. Se continuano a morire tra i fight, combatti come un campione 1v1 e perdi. Usa **E** per richiamarli e curarli a HP pieni prima di ogni engage.
- **Usare W in difesa.** W è un buff pre-fight, non un panic button. Lanciarla dopo aver mangiato il 60% di burst spreca la finestra di AD/MS bonus perché il fight è già perso.
- **Over-committare i roam pre-6.** Senza **R** hai solo un breve dash E per fuggire. Un roam fallito al livello 3 in bot lane regala CS gratuiti al mid avversario e può farti perdere la lane.

## Suggerimento avanzato

Pre-cast **W** (The Call of the Pack) **subito prima** del dash **R**, non dopo. Il frame di untargetability assorbe qualunque hard CC il nemico ti tira durante il volo (Annie stun, Lux Q root, Lissandra Q), così atterri a HP pieni e il bonus AD/MS è ancora attivo per la kill. Il pattern da rookie è W-dopo-R per la velocità sull'inseguimento, ma il pattern da pro è W-dentro-R perché la safety che ti dà sull'entrata vale più della velocità di chase dopo.
