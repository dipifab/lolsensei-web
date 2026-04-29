---
title: "Caitlyn Bot Build & Guida — Patch 16.9"
slug: "caitlyn-bot"
language: "it"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Caitlyn bot lane per League of Legends Patch 16.9: starter kit, build da lane bully, matchup chiave, power spike, errori comuni e una tip avanzata."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "Ogni N attacchi spara un colpo bonus che scala col crit. Range raddoppiato contro nemici intrappolati o nettati."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Skillshot lineare a lungo raggio con channel iniziale. Colpisce in fila; danno ridotto sui bersagli successivi. Main DPS e waveclear."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Piazza una trappola che, attivata, rivela e radica il campione nemico per 1.5s e concede un Headshot potenziato."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Rete che rallenta il nemico e respinge Caitlyn all'indietro. È un'escape dai diver, non un tool d'ingaggio."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channel + execute globale single-target. Gli alleati del bersaglio possono fare da scudo: serve isolamento."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro frontline tank o squadre HP-stack (Sion, Cho'Gath, Dr. Mundo): l'armor pen bonus scala con gli HP del nemico"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp con cure pesanti (Soraka, Vladimir, Aatrox): applica Grievous Wounds e dimezza le cure non appena tagghi un bersaglio"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contro pressione di assassin o diver (Zed, Samira, Yasuo flank): movement speed più una passiva-scudo che scatta sotto soglia HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro pick comp e hook (Blitzcrank, Thresh, Morgana Q): lo spell shield mangia un CC prioritario prima che ti sciolgano"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Domina la lane con il range della Q e i setup di trap, snowballa Headshot procs con The Collector e Infinity Edge, poi chiudi i fight da dietro la front line, kitando con E e finendo i nemici low-HP con la R."
  weakness: "Nessuna escape vera quando E è in cooldown. Counter durissimi: diver e assassin (Samira, Yasuo, Zed flank). Se l'early lead non si converte in pick a midgame, gli hyperscaler tipo Jinx o Vayne ti superano."
---

## Panoramica

Caitlyn è il marksman con il range base più alto del gioco e l'archetipo del **lane bully** (un campione che domina la lane fin dai primi minuti, vivendo del vantaggio che costruisce in laning phase). Tutta la sua identità sta nel rendere miserabili i primi 12 minuti per il duo nemico e poi convertire quel vantaggio in obiettivi. La sua **Piltover Peacemaker (Q)** ha più range del basic attack di praticamente ogni altro ADC, la sua **Yordle Snap Trap (W)** trasforma i chokepoint in zone di danno, e la passiva **Headshot** punisce chiunque sbagli il posizionamento attorno alle trap o al net. In compenso ha tra i valori di armor e HP più bassi tra gli ADC: il prezzo della sua dittatura in lane è che si scioglie nell'attimo in cui la pesca un nemico fuori posizione.

Il game plan è semplice da raccontare e duro da eseguire: poke (logorare gli HP del nemico a distanza senza committare) la lane con la **Q**, piazza trap nei bush e nel tri-bush per minacciare il combo **W → Headshot potenziato**, e converti il lead del primo recall in oro da turret plate. Dopo **The Collector** e **Infinity Edge** il tuo ruolo cambia: diventi una back line carry (la carry da retroguardia che fa danno da dietro al teamfight). Stai nella seconda posizione più arretrata, kita con **E** quando un diver ti salta addosso, e usa la **R** come execute (esecuzione del nemico sotto soglia HP) sui runner low-HP — mai come tool di poke.

## Build Consigliata

**Starting items:** Doran's Blade + 2 Health Potions. Anche se stai vincendo la lane, salta il secondo Doran's: l'oro va molto più lontano se lo metti su una component Pickaxe per The Collector.

**Core items (in ordine):**

1. **The Collector** — first-item rush. La passiva execute scatta sotto il 5% HP del nemico e cancella esattamente quel tipo di runner low-HP che la **R** vuole finire. La lethality è ideale early, perché gli ADC nemici hanno ancora pochissimo armor.
2. **Berserker's Greaves** — boots da attack speed. Mercury's Treads solo se la squadra nemica ha 3+ minacce di hard CC (crowd control, cioè effetti che ti bloccano: stun, root, knockup).
3. **Infinity Edge** — il tuo spike di danno più grosso. La passiva Headshot scala con la critical strike chance, e IE trasforma ogni Headshot in un quasi one-shot sui bersagli backline.
4. **Rapid Firecannon** — più range sull'auto-attack (oltre 700 base + RFC + IE ti rende l'auto-attacker più lungo del lobby) e un proc Energized che si sincronizza naturalmente col timing dell'Headshot.

**Situational items:**

- **Lord Dominik's Regards** — contro frontline tank o comp HP-stack (Sion, Cho'Gath, Dr. Mundo). Sostituisce Rapid Firecannon se la squadra nemica ha 3+ tank.
- **Mortal Reminder** — contro comp con cure pesanti (Soraka, Vladimir, Aatrox). Applica Grievous Wounds (effetto che dimezza le cure ricevute) non appena tagghi un nemico.
- **Phantom Dancer** — contro pressione di assassin o diver. La passiva HP-threshold (uno scudo che scatta quando scendi sotto soglia HP) più la movement speed ti dà il mezzo secondo che ti serve per fare **E** e scappare.
- **Edge of Night** — contro hook comp o pick comp (Blitzcrank, Thresh, Morgana Q). Lo spell shield mangia un CC prioritario prima che ti brucino: è la differenza tra restare viva e morire in quei matchup.

**Boots:** Berserker's Greaves di default. Mercury's Treads solo contro pesante CC AP tipo Brand support o Zyra support.

**Skill order:** Massa **Q** per prima (waveclear e main DPS), **E** per seconda (riduce il cooldown della tua unica escape), **W** per ultima (la trap fa più danno coi rank ma il timer non cambia). Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondaria **Sorcery** con **Manaflow Band** e **Gathering Storm**, oppure passa a **Inspiration** con **Magical Footwear** e **Cosmic Insight** se vuoi più oro sul completamento delle Boots.

## Matchup chiave

- **Draven:** Leggermente sfavorita ai livelli 1-3 perché il burst (danno alto concentrato in 1-2 secondi) della sua Spinning Axe ti supera nei trade. Non fight pre-3: freeza la wave (tieni la lane congelata vicino alla tua torre per non spingere) sotto torre, arriva al livello 3 con tutte e tre le ability, e poi tradi (scambi brevi di colpi/abilità in lane) solo quando hai una **W** piazzata nel bush. Punisci le finestre in cui ha la mana esaurita dopo Q-Q-Q.
- **Ezreal:** Even, tendenzialmente favore Caitlyn se il support ti lascia committare. Outranggi la sua **Q** di parecchio. Ogni volta che lui Q-a un minion, libera la tua **Q** in lane. Non dodgiare **dentro** la traiettoria della sua **W**.
- **Jhin:** Matchup even, deciso dalla disciplina nello sniping di **R**. Rispetta il suo quarto proiettile (fa danno enorme). Quando la sua **W** è giù, cammina avanti e tradi. Usa la tua **E** per dodgiare la sua **W** root se la telegrafa.
- **Vayne:** Pesantemente favore Caitlyn prima del livello 9, incubo dopo il livello 11. È la tua miniera d'oro: shova la wave forte pre-3 (spingi forte la lane), forzala via dalla lane con la **Q**, e tieni il jungler informato sulle dive (andare sotto torre per ucciderla nonostante i tiri della torre) al livello 6. Se sopravvive a due item, la lane è andata e devi switchare in modalità back line.
- **Samira:** Vuole un all-in (scambio totale fino alla kill) corpo a corpo non appena ha la W. Piazza trap nel bush della lane per chiudere la sua via d'ingaggio, salva la **E** come knockback nel momento esatto in cui dasha addosso (non bruciarla in poke), e mai fight contro di lei senza la Phantom Dancer in shield.

## Power spike & condizioni di vittoria

- **Livello 2:** Con un punto in **Q** e uno in **E**, il combo Q-AA-AA chunka il 30-40% degli HP dell'ADC nemico se cammina avanti per last-hittare. Tieni la wave al centro lane e cerca questa finestra.
- **Livello 6:** Prima **Ace in the Hole** sblocca la pressione da pick (eliminare un nemico isolato fuori dal teamfight). Lanciala da dentro un tri-bush così il reveal del proiettile non telegrafa la tua posizione. Non sprecarla in poke: aspetta un runner low-HP senza alleati vicini.
- **Completamento The Collector (~ minuto 8-10):** Primo breakpoint di execute. Quasi tutti i squishie (campioni con poche difese) sotto il 5% HP muoiono istantaneamente alla passiva, quindi una **Q** che cleava una linea bassa di minion fino al campione nemico diventa kill gratis.
- **Infinity Edge online (~ minuto 18-22):** Il tuo spike di danno più grande. I proc Headshot passano da "pungono" a "cancellano l'ADC nemico". Forza fight su obiettivi qui — Drake o Rift Herald — e costruisci vision attorno alle zone della tua win condition.

## Errori comuni

- **Spammare la Q per waveclear senza gestire la mana.** Caitlyn è mana-hungry early. Q la wave solo quando si allineano due melee minion più un caster, sennò arrivi al trade dopo con la mana vuota.
- **Lanciare W trap come poke.** Le trap sono un setup tool, non un damage tool. Piazzale nei chokepoint (bush della lane, tri-bush, ingresso del river) dove il nemico deve passare per last-hittare o rotare. Una trap nuda ai piedi dell'ADC nemico spreca un secondo di lane prio (priority — l'ascendente in lane che ti fa lasciare la lane senza perdere risorse).
- **Stare sempre al massimo range in teamfight.** Il range max dell'AA ti mette fuori dalla peel (la protezione che gli alleati ti mettono addosso). Stai nella seconda posizione più arretrata: così un assassin che fa flank (entra da un fianco non coperto) non ti cancella prima che il tuo support reagisca.
- **Usare la R come poke da metà mappa.** **Ace in the Hole** ha channel lungo e qualunque alleato vicino al bersaglio body-blocca il proiettile. Salvala per runner **isolati** low-HP — bersagli senza alleati a meno di 350 unità.
- **Bruciare la E per inseguire una kill.** **90 Caliber Net** è la tua unica escape. In cooldown sei un glass cannon (campione ad alto danno e poche difese, tipico degli ADC) senza risposta a un diver. Usala per scappare, non per chiudere la distanza.

## Suggerimento avanzato

Allena la sequenza **"Trap → Q → Headshot potenziato"** nei chokepoint. Cammina fino a un tri-bush o all'ingresso jungle, piazza la **W** dietro la linea nemica sul lato della loro ritirata, poi spingili indietro col poke della **Q**. Nell'attimo in cui pestano la trap, il root da 1.5s ti garantisce un follow-up di **Q** più un Headshot potenziato — e il colpo potenziato ha **range raddoppiato** contro i bersagli intrappolati, il che significa che lo spari da una distanza dalla quale la maggior parte degli ADC non può nemmeno auto-attaccare. Trasforma un 2v2 in lane in un 1.5v2: l'ADC nemico sceglie tra perdere wave prio (lasciare la lane senza gestire i minion) o pestare un combo garantito. In entrambi i casi vinci il trade.
