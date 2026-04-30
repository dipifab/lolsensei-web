---
title: "Neeko Mid Build & Guida — Patch 16.9"
slug: "neeko-mid"
language: "it"
patch: "16.9"
champion: "neeko"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Neeko mid lane per League of Legends Patch 16.9: build AP burst, combo con clone deception, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Travestiti da campione alleato. Ricevere danno dai nemici o lanciare spell con danno rompe l'illusione."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Lancia un seme che esplode una volta all'impatto, e una seconda se colpisce un campione o uccide un'unità. Waveclear e poke principali."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passiva: la terza auto-attack infligge danno magico bonus. Attiva: invia un clone in una direzione che imita Neeko."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Skillshot lineare di root. Diventa più largo, veloce e roota più a lungo se uccide un'unità o passa prima su un campione."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel che termina con un salto e un AOE knockup. Il channel è nascosto se sei travestita dalla W passive o dalla P."
      dd_spell_id: "NeekoR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi copre la finestra di atterraggio della R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun) che interrompono la R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro squadre con cure forti (Soraka, Vladimir, Dr. Mundo). L'AOE applica grievous wounds: debuff che taglia del 40% le cure nemiche"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quando il team gioca su pick e roam invece che teamfight raggruppati e vuoi più movement speed sul burst grezzo"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Centra la R dentro un teamfight o da un flank travestita da alleato. Con Luden's Echo e Shadowflame online, R + Q double bloom one-shotta la maggior parte delle back line squishy."
  weakness: "Tutto il danno passa da una R lunga e telegrafata, cancellabile da qualsiasi hard CC. Niente dash, niente scudo: la W active è l'unico strumento di mobilità."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Panoramica

Neeko è un mago AP burst — un campione costruito per fare moltissimo danno in una finestra di 1-2 secondi — che trasforma il travestimento e la clone deception in uno dei combo single-target più esplosivi del mid. Il suo kit ruota attorno al colpire **Tangle-Barbs (E)** attraverso un minion o il suo clone **Shapesplitter (W)** per estendere la durata del root, per poi concatenare **Blooming Burst (Q)** e **Pop Blossom (R)** in un one-shot. Il prezzo da pagare è che la R ha un channel time visibile e qualunque hard CC la cancella, quindi quasi ogni fight dipende dal vendere il bait prima del lancio.

Il piano partita in mid è lineare: pulisci le wave con il double bloom di **Q**, tieni **E** come setup tool e non come poke, e cerca rotazioni a partire dal livello 6 dove il travestimento trasforma le rotazioni standard in setup di kill. Lo skill expression sta nell'uso del clone — mandare **W** lungo una side path mentre cammini dall'altra parte regala due secondi liberi contro un mid laner attento. La curva di forza è back-loaded: debole prima del livello 6, picca quando puoi accoppiare **Luden's Echo** con una **R** nascosta.

## Build Consigliata

**Item iniziali:** Doran's Ring + 2 Health Potions. Evita Corrupting Potion a meno che la lane non sia auto-attack harass pesante (Annie, Sylas).

**Item core (nell'ordine):**

1. **Luden's Echo** — spike di burst, sostegno mana per spammare **Q** in waveclear senza prosciugarti.
2. **Sorcerer's Shoes** — penetrazione magica fissa; i target che vuoi cancellare raramente comprano MR prima del minuto 20.
3. **Shadowflame** — burst extra; la passiva sotto soglia HP combacia col finisher di **R** sui target con scudo.
4. **Rabadon's Deathcap** — moltiplicatore late-game, lo slot AP più alto.
5. **Void Staff** — appena qualunque target prioritario compra un item di Resistenza Magica (MR; riduce il danno magico subito).

**Item situazionali:**

- **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). La stasi copre anche la parte visibile della **R** se la canti tardi.
- **Banshee's Veil** — contro CC magici single-target che interrompono la **R** (Ahri charm, Lissandra **R**, Twisted Fate stun).
- **Morellonomicon** — contro composizioni che impilano cure (Soraka, Vladimir, Dr. Mundo).
- **Cosmic Drive** — al posto di Shadowflame quando il team gioca su pick e roam invece che teamfight raggruppati.

**Stivali:** Sorcerer's Shoes di default. Ionian Boots of Lucidity accettabili se snowballi presto e vuoi cooldown di **R** più corti per concatenare rotazioni.

**Skill order:** Massimizza **Q** per primo (waveclear e DPS principale), **E** per secondo (utility root), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Domination** con **Cheap Shot** e **Ultimate Hunter**, oppure **Inspiration** con **Biscuit Delivery** e **Cosmic Insight** nelle lane più safe.

## Matchup chiave

- **Zed:** Counter pesante pre-6. Spingi la wave con **Q**, tieni **E** come pulsante d'emergenza e rusha Zhonya's dopo Luden's Echo. Mai usare **Flash** in modo offensivo in lane.
- **Yasuo / Yone:** Possono Wind Wall la **E** e il secondo bloom di **Q**. Bruciagli il wall mandando un clone **W** su un finto angolo di **E**, poi committi il combo vero.
- **Ahri:** Matchup di skill. Il suo charm interrompe la **R**; rusha Banshee's dopo Luden's Echo e Sorcerer's. Usa **W** per costringerla a spendere la mobilità della **R** prima di entrare.
- **Anivia:** Pesante pre-6 per il wall, più gestibile post-6. Forzala a usare la **R** prima di entrare; con il muro abbassato la maggior parte dei finti col clone non funziona.
- **Twisted Fate:** Gara di rotazione. Tracciagli la **R** con ward su river e tri-cespuglio. Se ti tira la carta gialla, **E** prima che chiuda il gap.

## Power spike & condizioni di vittoria

- **Livello 3:** Con **Q-W-E** sbloccati, il primo all-in (uno scambio totale per cercare la kill) è sul tavolo — manda il clone **W** dietro la loro wave per fingere un recall, poi **E** attraverso un minion appena salgono in last-hit.
- **Livello 6:** Prima **Pop Blossom**. Il channel nascosto sotto la passiva di **W** rende un travestimento a portata di auto-attack un flash-engage. È la prima finestra di roam.
- **Luden's Echo completo (~ minuto 12-14):** Il controllo della wave si ribalta. Shove e roam in travestimento; bot lane è prioritaria perché la loro torre è quella più vicina all'ingresso del river.
- **Rabadon's Deathcap online (~ minuto 24-28):** **R** + double bloom di **Q** one-shottano gli squishy che non hanno comprato MR. Forza i fight obiettivo qui.

## Errori comuni

- **Lanciare E per poke senza setup.** La **E** nuda è una linea sottile e lenta che si esquiva camminando. Imposta sempre con un minion sul percorso o un clone **W** che arriva prima; allora la **E** rota per la durata estesa.
- **Cantare la R allo scoperto.** Un channel visibile annuncia il leap un secondo intero in anticipo. Canta da dentro un brush, dietro la front line, o mentre sei travestita dalla passiva di **W** — mai al centro di una lane con vision addosso.
- **Tenere W per i fight.** L'attiva di **Shapesplitter** dà anche un 50% di movement bonus a Neeko stessa per due secondi. Usalo per kitare gank, schivare skillshot, o accelerare roam; non tenerlo per un fight che potrebbe non arrivare.
- **Travestirsi dall'alleato sbagliato.** Scegli l'alleato la cui presenza nella tua lane è plausibile — un jungler melee a livello 4 è molto più credibile di un top laner appena respawnato a mid-base. Travestimenti improbabili vengono letti all'istante.

## Suggerimento avanzato

Allena la **R**-flash. Inizia il channel di **Pop Blossom** appena fuori dalla portata del leap, poi **Flash** negli ultimi 0.25 secondi della finestra. Il leap parte dalla posizione post-Flash, estendendo il raggio AOE effettivo di circa un terzo. Combinato con il travestimento della passiva di **W**, ogni prima **R** in teamfight diventa un engage non reagibile.
