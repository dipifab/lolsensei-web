---
title: "Kayle Top Build & Guida — Patch 16.9"
slug: "kayle-top"
language: "it"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Guida Kayle top per League of Legends Patch 16.9: piano di sopravvivenza in lane, build hyper-scaling AS+AP, key matchup, power spike di livello 11 e 16, errori comuni."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle si trasforma 4 volte salendo di livello (1, 6, 11, 16). Al 6 ottiene auto-attack ranged; al 16 le auto-attack rilasciano AOE di onde di fuoco a ogni colpo."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Skillshot lineare: danno + slow + shred di armatura e magic resist sul primo nemico colpito e su quelli dietro. Unico tool ranged pre-6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal e movement speed su Kayle e l'alleato piu vicino. Sustain in lane pre-6, peel e chase late."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Passive: danno magico bonus sulle auto. Active: la prossima auto diventa ranged e infligge danno magico bonus su HP mancanti. Post-6 la passive aggiunge AOE on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Bersaglia un alleato (o se stessa) con 2.5 secondi di invulnerabilita, poi esplode in AOE magico. Save tool, copertura per engage e finisher."
      dd_spell_id: "KayleR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap come secondo item se la lane e tranquilla e vuoi un burst spike sopra a Nashor's Tooth"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro top laner AP pesanti (Rumble, Vladimir, Sylas) se il loro poke ti chiude prima del livello 11"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni con tanto heal (Aatrox top, Soraka, Dr. Mundo) — applica Grievous Wounds sulle auto"
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena due nemici finiscono un item di Magic Resist (Mercury's Treads non contano, solo item completi)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contro lane che vincono con auto-attack (Fiora, Camille, Tryndamere) — swap dai Berserker's se sopravvivere e l'unico obiettivo"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Sopravvivi alla lane fino al livello 11, poi scala col combo Nashor's Tooth + Rabadon's Deathcap. Al 16 le tue onde AOE on-hit ribaltano i teamfight dalla back line sotto copertura della R."
  weakness: "Pre-livello 6 sei una melee lenta, squishy, con un solo skillshot a corto raggio. I top laner con forte all-in early (Darius, Renekton, Riven) ti uccidono prima dei tuoi power spike."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Lethal Tempo accumula attack speed nel fight e scala le AOE waves della passive (post-6 e post-16). Triumph cura sui takedown, Legend: Alacrity aggiunge AS permanente, Last Stand pompa il danno a basso HP — dove Kayle late game vive."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery ti rifornisce HP e mana durante la fase di sopravvivenza pre-6, Cosmic Insight taglia il cooldown di Flash e degli active item cosi Zhonya's Hourglass torna piu in fretta nei teamfight."
    secondary_alternative: "Contro lane di poke pesante (Vladimir, Rumble, Quinn) swap Inspiration con Resolve: Second Wind (rigen passivo dopo aver subito danno) + Overgrowth (HP scaling permanente) per restare in lane fino al power spike di livello 11."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops without early kill threat"
      reason: "Senza burst e senza catene di hard-CC non punisco il tuo pre-6 debole, e dal livello 11 con auto ranged li out-DPS da distanza sicura."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "Scalate con tempi simili: ogni squadra che ti lascia arrivare al 16 perde, perche le AOE on-hit di Kayle anticipano il loro wombo."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Ulti globale: sei il miglior peeler della partita. R sull'ADC nel momento del dive e il carry sopravvive al burst chain integro."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "Ti killano prima del power spike di livello 6. La loro CC chain piu il sustained damage tagliano il 70%+ HP a Kayle in un all-in da 4 secondi, e tu non hai un dash per disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "L'E hookshot di Camille e la Q3 dash di Yone ignorano la posizione che provi a tenere; chiudono la distanza prima che il tuo trade Q + auto si concluda."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "La R di Olaf gli da CC immunity e true damage su R + axe, la R di Garen infligge true damage scalando sugli HP mancanti — entrambi ti chiudono attraverso Zhonya's Hourglass e perfino attraverso il front-end della tua R."
---

## Panoramica

Kayle e una hyper-scaling carry che cambia identita lungo la partita: una melee lenta e squishy al livello 1, una pokerina ranged al 6, un mostro vero da late game al 11 e una macchina da AOE team-wide al 16. La **Divine Ascent (P)** e l'identita del kit — ogni soglia sblocca uno stat block nuovo (attack speed, range, fire waves on hit). La top lane e la sua casa naturale perche la corsia lunga le da spazio per giocare passive senza perdere tempo macro.

Il game plan e sopravvivenza, non aggressione. Perdi CS se serve, non morire mai, fidati della build: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** al livello 11 trasforma la passive ranged in danno reale, e ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** al livello 16 fa diventare le AOE on-hit waves un'arma che cancella interi teamfight dalla back line sotto copertura della **R**.

## Build Consigliata

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Lo scudo trasforma la lane da "muoio in due trade" a "perdo CS ma vivo". Salta Doran's Ring nonostante Kayle scali con AP — pre-6 non hai il kit per usarlo.

**Core items (in order):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots che danno attack speed alimentano le on-hit waves. Rusha boots prima, poi pezzi per Nashor's Tooth.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — il singolo item piu importante. Combina i due stat che Kayle vuole nello stesso slot (50% attack speed + 90 AP) e aggiunge magic damage on-hit. Questo e lo spike che ti porta da "top laner debole" a "carry vera".
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplica del 30% tutti i tuoi AP scaling, e tu hai molto da moltiplicare (E passive, R, AOE waves post-16).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — la stasi e la tua scialuppa contro i diver e contro il timing della tua R in cooldown. Compralo terzo o quarto in base alla comp avversaria.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contro top laner AP pesanti (Rumble, Vladimir, Sylas). Aggiunge attack speed, magic resist e magic damage on-hit, quindi raddoppia come item difensivo e offensivo nello stesso slot.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni che stackano heal (Aatrox top, Soraka mid, Dr. Mundo). Applica Grievous Wounds su ogni auto, riducendo del 40% l'efficacia dei heal nemici.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena due nemici finiscono un item di Magic Resist (non Mercury's Treads — troppo a buon mercato; solo item completi).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — secondo item alternativo se la lane e tranquilla e vuoi un burst spike sopra a Nashor's Tooth.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contro lane che vincono con auto-attack (Fiora, Camille, Tryndamere). Swap dai Berserker's quando sopravvivere e l'unico obiettivo.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default per lo scaling di attack speed. Plated Steelcaps quando un AD bully rende la lane impossibile.

**Skill order:** Maxa **E** prima (e il tuo tool di danno sia pre che post 6), **Q** seconda (slow piu lungo + shred maggiore per rank), **W** ultima. Punto in **R** ai livelli 6, 11, 16. Apertura **E-W-Q** per sustain in lane.

**Runes:** Primary **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchup chiave

- **Darius:** Hard counter. Distanza massima, entri solo per i last-hit, mai per i trade pre-6. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, accetta di perdere 30+ CS, ping al jungler.
- **Garen:** Lane facile post-6. Non puo interrompere la tua auto ranged con niente, kitalo (cammina indietro mentre lo colpisci per mantenere la distanza) con **Q** slow + auto ranged. Attenzione alla sua **R** a basso HP — true damage che scala su HP mancanti, ignora Zhonya's Hourglass.
- **Mordekaiser:** Sopravvivenza pre-6, snowball (vantaggio crescente: kill → gold → item → altre kill) post-11. La sua **R** ti isola dal team per 7 secondi; se ti pesca prima del livello 11, muori. Usa **Flash** per schivare il pull della **E**, e pre-builda **Mercury's Treads** se ti prende ripetutamente.
- **Camille:** Counterpick. La sua **E** hookshot ignora lo spacing che provi a tenere. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** invece di Berserker's, ward sulla brush di lane, ping al jungler se ha due livelli di vantaggio.
- **Nasus:** Pari pre-6, vinci post-11. La sua **W** wither (uno slow molto pesante) gli da il duello prima che tu abbia auto ranged. Quando Nashor's Tooth e online out-DPS il suo stack ramp, pusha le wave e costringilo a reagire.

## Power spike & condizioni di vittoria

- **Livello 6 (R sbloccata):** Prima forma con auto ranged + **Divine Judgment** come save tool. Smetti di abbracciare la torre — pokki da 525 di range e trasformi i dive in kill con una **R** ben timed su te stessa.
- **Livello 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 18-22):** Lo spike piu grande della partita. Range delle auto sale ancora, la passive scala su attack speed e AP, il wave control si ribalta. Inizia il group play: ruota con la squadra, cerca obiettivi.
- **Livello 16 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28-32):** Le auto rilasciano AOE waves di fuoco a ogni colpo. Una auto sul frontline danneggia tutti dietro. Da qui in poi sei la fonte di danno piu alta del team, indipendentemente dal ruolo.
- **Sempre con ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R combo:** **R** su te stessa per invulnerabilita, poi Zhonya's Hourglass appena la R scade. Sono circa 5 secondi di immunita totale in teamfight mentre il team peela — abbastanza per ribaltare quasi ogni engage.

## Errori comuni

- **Provare a fare auto-vs-auto pre-6.** Kayle e melee con base damage basso early. Anche un trade sbagliato contro Darius o Renekton avvia lo snowball che non recuperi piu. Tieni **W** per sustain, last-hit e basta.
- **Sprecare R su te stessa per sopravvivere al poke.** **Divine Judgment** ha 160 secondi di cooldown a rank 1 — significa l'intero teamfight di mid-game saltato. Tieni **R** per gli all-in in arrivo o per proteggere l'ADC durante drake.
- **Stare in frontline al livello 16.** Le AOE on-hit waves rendono al massimo dalla back line, dietro al tank. Posizionati come un ADC — lascia che il frontline incassi mentre tu spari onde attraverso.
- **Prendere camp di jungla prima del livello 11.** Kayle clera lentamente e si indebolisce HP prima del power spike. Resta in lane, pusha wave, recall a mana pieno — niente invade o scuttle pre-Nashor's Tooth.
- **Vendere boots per il sesto item troppo presto.** Late game si possono swappare boots con un item da danno (Mejai's Soulstealer, Cryptbloom), ma solo quando sei 5/0 in vantaggio e i fight saranno tutti group fight. Se sei pari, tieni boots.

## Suggerimento avanzato

Padroneggia il **R-on-self peel pattern** nei teamfight di mid-game. Quando il diver avversario (Camille, Hecarim, Sett) salta sulla tua back line, non premere **R** sull'ADC — premi **R** su te stessa, cammina sulla linea del dive, poi droppa l'esplosione AOE sotto i piedi del diver. I 2.5 secondi di invulnerabilita costringono il diver a o committare ed eat l'esplosione (kill gratuita) o ritirarsi (il tuo team resetta il fight in parita). Il trucco e il range: la **R** ha 900 di cast range, quindi puoi targetare te stessa anche stando 8 unita dietro l'ADC.
