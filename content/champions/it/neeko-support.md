---
title: "Neeko Support Build & Guida — Patch 16.9"
slug: "neeko-support"
language: "it"
patch: "16.9"
champion: "neeko"
role: "support"
last_updated: "2026-04-29"
description: "Guida Neeko support per League of Legends Patch 16.9: build da engage con World Atlas, combo di flank con R, matchup chiave, power spike ed errori comuni."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Engage"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Travestiti da campione alleato. Ricevere danno dai nemici o lanciare spell con danno rompe l'illusione."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Lancia un seme che esplode all'impatto, e di nuovo se colpisce un campione o uccide un'unità. Poke in lane e follow-up di danno."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passiva: la terza auto-attack infligge danno magico bonus. Attiva: invia un clone — il tuo principale strumento di bait e roam."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Skillshot lineare di root. Diventa più largo, veloce e roota più a lungo se uccide un'unità o passa prima su un campione."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel che termina con salto e AOE knockup. Nascosto se travestita dalla W passive o dalla P — il tuo strumento di engage."
      dd_spell_id: "NeekoR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver focalizzati su di te (Pyke, Rell, Leona) — la stasi copre il channel visibile della R post-engage"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "quando snowballi (vantaggio che cresce di kill in kill) con 3+ takedown entro il minuto 12 e il team avversario non ha hard CC mirato"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro hook support (Blitzcrank, Thresh, Pyke, Nautilus) e qualsiasi CC magico single-target che interrompe la R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando il carry avversario compra un item MR (di solito al 3°/4° item)"
  base_combo: ["W", "E", "R", "Q"]
  win_condition: "Roama in side lane e flank intorno alla vision con W e travestimento. Centrata una R nascosta su due o più nemici, il team trade pulito grazie all'AOE knockup."
  weakness: "Nessun CC mirato, nessuno scudo, nessun peel per l'ADC. Senza engage il valore crolla a poke; un nemico con hard CC affidabile chiude completamente la finestra di R."
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Panoramica

Neeko support è la variante engage del kit — engage significa aprire il fight saltandoci dentro e impegnando il team a seguirti. Invece di farmare AP coi last-hit in mid, raccogli oro da **World Atlas** e baratti il poke di **Q** (danno a distanza per logorare l'HP) con setup di vision sul river. Tutto il ruolo gira intorno a due strumenti — il travestimento e il clone di **W** — che ti permettono di organizzare flank engage da angolazioni che un support normale non raggiunge. Il soffitto è alto, il pavimento è duro: una **E** sbagliata in lane è harassment perso, una **R** visibile è una ulti sprecata.

Il piano in bot lane parte dal livello 1: cammina in lane travestita dal jungler se la squadra te lo permette, imposta un cheese di livello 2 con la **E** attraverso la prima wave e minaccia una **R** precoce al livello 6. Dal minuto 8 in poi il tuo lavoro è priorità di roam — pulisci la vision, nasconditi in fog, ed engage di **R** sulle rotazioni. Quando Solstice Sleigh è online, ogni gank diventa slow esteso più AOE knockup, più lockdown di quanto la maggior parte dei support engage ottenga dall'intera build.

## Build Consigliata

**Item iniziali:** World Atlas + 2 Health Potions. Stealth Ward come trinket di partenza, swap a Oracle Lens al minuto 14.

**Item core (nell'ordine):**

1. **World Atlas → Solstice Sleigh** — percorso item support principale. La passiva Snowfall di Solstice Sleigh procca su ogni CC che applichi, dando slow extra, HP e scudo all'alleato che bonki.
2. **Sorcerer's Shoes** — penetrazione magica fissa. Il tuo danno è abbastanza burst da preferire la pen flat agli stivali Ionian.
3. **Liandry's Torment** — la bruciatura scala con l'HP e il tuo AOE la applica su più target in una volta. L'HP ti tiene viva durante la parte visibile della **R**.
4. **Rabadon's Deathcap** — moltiplicatore late-game, da prendere quando la partita supera il minuto 25.

**Item situazionali:**

- **Zhonya's Hourglass** — contro diver focalizzati su di te (Pyke, Rell, Leona). La stasi copre la parte visibile della **R** post-engage.
- **Mejai's Soulstealer** — solo con 3+ takedown entro il minuto 12 e zero hard CC mirato avversario.
- **Banshee's Veil** — contro hook support (Blitzcrank, Thresh, Pyke, Nautilus) e qualsiasi CC magico che interrompe la **R**.
- **Void Staff** — quando il carry avversario compra un item MR (Magic Resist; riduce il danno magico ricevuto).

**Stivali:** Sorcerer's Shoes di default. Mobility Boots accettabili in composizioni dove il resto del team ha lockdown e a te serve solo roamare ed engagiare.

**Skill order:** Massimizza **E** per primo (l'affidabilità del CC è il tuo engage), **Q** per secondo (poke e supporto al waveclear), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Magical Footwear** e **Cosmic Insight**. Aery accettabile in lane di poke pesante; **Aftershock** è sbagliato su Neeko perché la **R** rompe l'illusione prima che le resistenze bonus si attivino.

## Matchup chiave

- **Blitzcrank:** Stai fuori dai primi 1000 unità di lane finché **W** non è up. Manda un clone in avanti ogni volta che minaccia la **Q**; se hooka il clone, il suo cooldown è speso e puoi avanzare libera.
- **Leona:** Matchup pari, deciso dalla wave state. Se ti cammina addosso, **E** attraverso la wave per il root esteso e segui con **R**. Non engagiare quando la wave è dalla loro parte.
- **Lulu / Janna (enchanter):** Difficile lockdownare chiunque. Cerca i roam; in lane tieni la **R** per finestre di engage dopo che ti polymorphano o slowano.
- **Thresh:** Matchup standard, ma il suo lantern salva i tuoi target di engage. Tempa la **E** in modo che colpisca dopo che il lantern è stato consumato, non prima.
- **Pyke:** Resta vicino ai minion. La gittata della sua **Q** è più corta di quanto sembri; la vera minaccia è la sua **R** che finisce il tuo ADC. Compra Banshee's dopo Solstice Sleigh.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **E** più **W**, un cheese di livello 2 (un all-in anticipato al livello 2 per sorprendere il nemico prima che abbia la seconda abilità) è sul tavolo. Spingi la prima wave con **Q** sul percorso, prendi **W** al 2, manda un clone, **E** attraverso un minion appena salgono.
- **Livello 6:** Prima **Pop Blossom**. Channel nascosto sotto travestimento trasforma le rotazioni standard in setup di kill. È la prima finestra di gank significativa.
- **Solstice Sleigh completo (~ minuto 14-16):** Ogni CC che applichi procca Snowfall — slow extra sulla **E**, slow extra sul knockup di **R**, e un piccolo scudo sull'alleato bonkato. La pressione di roam sale di un livello.
- **Terzo item + livello 11 (~ minuto 22):** Secondo punto in **R** abbassa il cooldown a 105 secondi. Puoi engagiare ogni fight obiettivo a ciclo.

## Errori comuni

- **Engagiare senza una via d'uscita.** La **R** è un commit a senso unico. Se il team non è pronto a seguire — o se sei sola in fondo alla fog — l'AOE knockup ti scambia per niente. Aspetta un vantaggio numerico.
- **Cantare R fuori dalla passiva di W.** Channel visibili vengono pre-CC'd da qualsiasi nemico decente. Travestiti sempre dalla passiva di **W** o dalla **P** vera prima di iniziare il channel di **R**.
- **Mandare W come dodge di panico.** **W** è uno strumento di bait con 12 secondi di cooldown. Usalo per setup, non come "clone, scappo" — quel pattern viene letto all'istante e sprechi l'unica mobilità che hai.
- **Saltare la vision per roam veloci.** Un roam nudo senza Control Ward nella loro jungle è il modo in cui cammini dentro un counter-gank. Sweep, ward, poi travestimento; mai l'inverso.
- **Travestirsi dall'alleato sbagliato.** Un jungler che appare come tuo doppio su una lane in slow-push è plausibile. Un bot laner in base, recall annullato, no. Travestimenti improbabili vengono pingati a vista.

## Suggerimento avanzato

La **R**-flash è il trick a leva più alta: inizia il channel di **Pop Blossom** appena fuori dalla portata del leap, poi **Flash** negli ultimi 0.25 secondi. Il leap parte dalla posizione post-Flash, estendendo la portata di engage di circa un terzo. Combinato col travestimento della passiva di **W** — per esempio, camminare in lane travestita dall'ADC — la seconda wave a livello 6 diventa un engage non reagibile che la bot lane avversaria non ha informazioni per leggere.
