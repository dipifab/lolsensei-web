---
title: "Neeko Top Build & Guida — Patch 14.10"
slug: "neeko-top"
language: "it"
patch: "14.10"
champion: "neeko"
role: "top"
last_updated: "2026-04-27"
description: "Guida Neeko top lane per League of Legends Patch 14.10: build AP bruiser con Riftmaker, tattiche da pick di nicchia, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Bruiser"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Travestiti da campione alleato. Ricevere danno dai nemici o lanciare spell con danno rompe l'illusione."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Lancia un seme che esplode all'impatto, e di nuovo se colpisce un campione o uccide un'unità. Waveclear e danno principale in lane."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passiva: la terza auto-attack infligge danno magico bonus. Attiva: invia un clone per baitare skillshot e disengage."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Skillshot lineare di root. Diventa più largo, veloce e roota più a lungo se uccide un'unità o passa prima su un campione."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel che termina con un salto e un AOE knockup. Il channel è nascosto sotto la passiva di W o la P — il tuo strumento di engage e flank."
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
    - { dd_id: "1056", name: "Doran's Ring" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro AD assassini/diver (Camille, Fiora, Pantheon). La stasi è 2.5s di invulnerabilità: ti compra tempo quando hanno bruciato i cooldown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro squadre full-AD (es. Renekton top + Jhin + Zed). Sostituisci i Sorcerer's Shoes con questi quando 4 nemici su 5 fanno danno fisico"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target che cancella la R (Lissandra R, Ryze stun, Rumble equalizer). Protegge la finestra di engage"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ target avversari comprano un item MR (Magic Resist; riduce il danno magico)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Sopravvivi alla lane fino al 2° item, poi raggruppati col team e flanka (entra nel fight da un'angolazione laterale) col travestimento. Riftmaker trasforma il tuo danno AOE in cura sostenuta nei fight lunghi."
  weakness: "Pick di nicchia che perde lane contro bruiser pesanti (Darius, Garen, Sett). Niente dash, niente scudo: se non baiti un'abilità con il clone W, mangi i trade pieni."
---

## Panoramica

Neeko top è una pick di nicchia — significa che non si gioca abitualmente in questo ruolo e gran parte degli avversari non saprà cosa aspettarsi. Il prezzo è reale: perde i trade lunghi contro i bruiser pesanti (campioni costruiti per combattere corpo a corpo per molti secondi), quindi l'early game è sopravvivere, non vincere lane. Il valore vero arriva online quando hai Riftmaker e puoi unirti ai teamfight come AP bruiser (un campione che mescola danno magico ad abbastanza HP e cure per restare nel fight più a lungo di un mago classico).

Il piano in top si divide in tre fasi. Livelli 1-5 sono damage control: pulisci la wave con il double-bloom di **Q** (la seconda esplosione che parte quando la **Q** colpisce un campione o uccide un minion), tieni la **E** come pulsante d'emergenza per i gank (imboscate del jungler dal river), ed evita scambi auto-attack contro bruiser melee. Livelli 6-11 sei alla ricerca di flank di **R** dall'altra parte della mappa — hai una pressione mappa che un Garen o un Sett non hanno. Dopo il livello 12, raggruppati col team. La prio di lane (priority — controllo della lane sufficiente a roamare senza perdere CS o piastre torre) diventa secondaria al setup di teamfight.

## Build Consigliata

**Item iniziali:** Doran's Ring + 2 Health Potions. Evita Doran's Shield: il regen non compete con lo scaling AP del Doran's Ring per il danno della **Q** in lane.

**Item core (nell'ordine):**

1. **Doran's Ring** — starter. AP bonus e mana regen per spammare la **Q** in lane.
2. **Riftmaker** — item principale. Spike da AP bruiser: HP, AP, omnivamp (cura su tutto il danno che infliggi) e un'amplificazione di danno che cresce mentre il fight si allunga. Perfetto per l'AOE di Neeko nei teamfight prolungati.
3. **Sorcerer's Shoes** — penetrazione magica fissa; gli squishy che flanki raramente hanno MR prima del minuto 25.
4. **Rabadon's Deathcap** — moltiplicatore AP late-game, lo slot più alto.
5. **Cosmic Drive** — AP, ability haste, movement speed; la velocità extra si combina con il sustain di **Riftmaker** e ti rende una minaccia in roaming dal minuto 25-30.

**Item situazionali:**

- **Zhonya's Hourglass** — contro AD assassini e diver (campioni che saltano sulla back line: Camille, Fiora, Pantheon). La stasi è una invulnerabilità di 2.5 secondi che ti blocca sul posto — ti salva mentre i loro cooldown rientrano.
- **Plated Steelcaps** — contro squadre full-AD. Scambia i Sorcerer's Shoes con questi quando 4 nemici su 5 fanno danno fisico.
- **Banshee's Veil** — contro CC magico single-target che annulla il channel della **R** (Lissandra **R**, Ryze stun, Rumble equalizer).
- **Void Staff** — quando 2+ target avversari comprano un item MR.

**Stivali:** Sorcerer's Shoes di default. Mercury's Treads se il team avversario ha 2+ fonti di hard CC (stun, charm, fear, knockup) e devi assolutamente atterrare la **R** in teamfight.

**Skill order:** Massimizza **Q** per primo (waveclear e DPS), **E** per secondo (utility root), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Phase Rush** (un burst di movement speed che procca dopo tre attacchi/abilità — perfetto per kitare i bruiser), **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Resolve** con **Conditioning** e **Overgrowth** per gli HP extra che fanno valere il sustain di Riftmaker.

## Matchup chiave

- **Darius:** Counter pesante. Ti supera negli scambi melee e la cura della sua **Q** mangia il tuo danno. Stai indietro, pusha **Q** alla distanza minima e chiama il jungler al livello 6. Non engagiare anche se sembra basso — la sua passiva (sanguinamento) e il reset della **R** ti cancellano.
- **Garen:** Pari/difficile. Spingi la wave veloce con il double-bloom di **Q** e roama in mid; hai pressione mappa con la **R** che lui non ha. Evita 1v1 prolungati — il silenzio della sua **W** cancella il channel della tua **R**.
- **Renekton:** Difficile pre-6 per il suo doppio stun rapido. Tieni la **E** per il dash della sua **W**, poi cammina via. Post-6 la tua **R** è nascosta sotto travestimento; quella è la tua finestra di kill.
- **Camille:** Lane difficile ma ottimo matchup-of-pick quando lei roama a mid. Tieni il clone **W** per il suo hookshot **E** — baitalo col clone, poi **E** root attraverso la wave quando il dash è in cooldown.
- **Sett:** Lane difficile, teamfight pesante. Tieni distanza, spingi wave veloci ed evita di farti afferrare dallo stun della sua **W**. Compra Banshee's Veil se ti ulta fuori posizione.

## Power spike & condizioni di vittoria

- **Livello 3:** **Q-W-E** sbloccati. Non è una finestra di kill in questi matchup, ma abbastanza per baitare un'abilità del bruiser con il clone **W** e tradare in sicurezza con il double-bloom di **Q**.
- **Livello 6:** Prima **Pop Blossom**. Channel nascosto sotto travestimento trasforma le rotazioni standard in setup di kill — la prima finestra di flank di **R** dall'altra parte della mappa (saltare in un fight da una direzione che il nemico non sta guardando).
- **Riftmaker completo (~ minuto 16-18):** Power spike. AP, HP e omnivamp arrivano insieme. Passi da "sopravvivere alla lane" a "cercare i teamfight".
- **Livello 11 + 2 item (~ minuto 22):** Secondo punto in **R**. Con il sustain di Riftmaker (cura sul danno AOE), puoi engagiare un 5v5, baitare i dive e outhealare il danno sostenuto in mezzo al fight.

## Errori comuni

- **Cercare di vincere lane contro i bruiser.** Top su Neeko è una lane di sopravvivenza, non di kill. Pusha **Q** sulla wave, last-hitta con le auto a distanza massima e accetta di perdere 5-10 CS per evitare di morire.
- **Cantare R allo scoperto.** Un channel visibile annuncia il leap un secondo intero in anticipo. Travestiti sempre dalla passiva di **W** (o dalla **P** vera) prima di iniziare la **R**, o canta da dentro un brush.
- **Mandare W per inseguire, non per baitare.** **W** è il tuo unico strumento di mobilità. Sprecarlo per chiudere una kill che non c'era ti lascia bloccata quando arriva il jungler avversario. Usa **W** prima per scappare dai gank, poi per baitare skillshot, e per inseguire solo quando la kill è certa.
- **Buildare come un mage da mid.** Luden's Companion è l'item sbagliato per il top. Non hai priorità di lane e il tuo lavoro è teamfightare; gli HP e il sustain di Riftmaker valgono più del burst.
- **Saltare il flank di R per engage da manuale.** L'unico motivo per giocare Neeko top è il flank dall'altra parte della mappa — entrare nel fight da un'angolazione che il nemico non vede arrivare. Raggrupparsi di default col team annulla l'unico vantaggio della pick.

## Suggerimento avanzato

Allena la **R**-flash. Inizia il channel di **Pop Blossom** appena fuori dalla portata del leap, poi **Flash** negli ultimi 0.25 secondi. Il leap parte dalla posizione post-Flash, estendendo il raggio AOE effettivo di circa un terzo. Combinato con il travestimento della passiva di **W** — per esempio, camminare verso un teamfight travestita da un compagno già in posizione — ogni prima **R** in fight diventa un engage non reagibile su più target in una volta.
