---
title: "Galio Support Build & Guida — Patch 16.9"
slug: "galio-support"
language: "it"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Guida Galio support per League of Legends Patch 16.9: starter kit, build engage-tank, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Ogni pochi secondi la prossima auto-attack di Galio infligge danno magico bonus in una piccola area al colpo."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Due raffiche che convergono in un tornado nel punto bersaglio, infligge danno magico nel tempo. Poke a lunga gittata da posizione sicura."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carica uno scudo che assorbe danno magico; rilascia per taunt e danno area. Usala mid-fight per peelare l'ADC (proteggere il carry dai diver)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Breve passo indietro, poi dash in avanti che knockup il primo campione nemico colpito. Tool di engage primario."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa un alleato; dopo un ritardo Galio atterra sulla sua posizione, scuda gli alleati e knockup i nemici. Engage cross-map."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contro CC single-target pesanti sull'ADC (Morgana Q, Ashe R, Skarner R) — l'attivo cleansa il CC e cura"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "con ADC auto-attack pesante (Jinx, Caitlyn, Tristana) — lo slow di W concatena nella loro finestra DPS"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "con composizione alleata a danno magico (AP mid + AP jungle) — l'aura debuff amplifica il danno magico del team sui target che taunti"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro 3+ minacce AP nella squadra avversaria (mid + jungle + support con danno magico)"
    - dd_id: "3107"
      name: "Redemption"
      against: "con ADC enchanter o comp pesante di cure (Soraka, Sona, Yuumi gia nel team) — heal di gruppo extra in objective fight"
  base_combo: ["E", "AA", "W"]
  win_condition: "Usa Hero's Entrance per engage cross-map sui dragon e Rift Herald spawn. Negli skirmish bot, apri con E knockup, W taunt per peelare l'ADC, poi Knight's Vow redirige il danno dal tuo carry."
  weakness: "Il charge W e interrompibile da hook (Blitzcrank, Thresh) e silence. Enchanter da disengage (Janna, Lulu) cancellano il follow-up della R. Danno solo limitato — serve follow-up dell'ADC per convertire gli engage in kill."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Aftershock procca su taunt W o knockup R, dandoti le resistenze per sopravvivere all'engage. Font of Life cura l'ADC che auto-attacca il target immobilizzato, Bone Plating assorbe il primo burst, Revitalize amplifica il valore dello scudo R sui compagni."
    secondary_rationale: "Inspiration secondaria: Biscuit Delivery dà HP e mana refill gratuiti in lane (Galio è mana-hungry su un income da support), e Cosmic Insight riduce il cooldown di Flash — vitale perché R+Flash è il tuo catch tool a piu alto impatto."
    secondary_alternative: "Contro lane di poke pesante (Brand, Zyra, Xerath support) dove non riesci a raggiungere il livello 6 in salute, swap Inspiration verso Sorcery con Manaflow Band (piu mana per la Q di poke back) e Transcendence (E piu rapida per schivare il follow-up del poke)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "ADC immobili senza dash"
      reason: "Hero's Entrance atterra sopra il tuo alleato con knockup; carry senza dash non escono, quindi ogni 2v2 si trasforma in una kill quando R è up."
    - examples: ["leona", "rakan"]
      archetype: "Tank engage support hookless"
      reason: "Il knockup E di Galio interrompe il loro windup di engage (Q stun-walk di Leona, carica W di Rakan); lo scudo W poi assorbe il danno magico del loro follow-up post-engage."
    - examples: ["brand", "zyra"]
      archetype: "Mage support squishy senza escape"
      reason: "I mage support stanno fermi per piazzare gli skillshot; la E di Galio li raggiunge attraverso i minion e la W tanka il burst che normalmente scaccerebbe un melee engager."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook support"
      reason: "Un hook che atterra su Galio mid-W cancella l'intero engage; è un target grosso senza un dodge tool intrinseco, e un hook dentro chain-CC rimuove sia R che E dal fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Enchanter da disengage"
      reason: "I loro AOE knock-aside o le spell shield-and-cleanse negano la finestra di landing della R e il taunt W — quando Galio atterra, il carry è gia disengaged fuori range."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage support di artillery a lunga gittata"
      reason: "Pokano fuori dal range della Q di Galio e dalla distanza del dash E, quindi non li può punire in lane; missing health pre-6 stallano il suo impatto in side lane con la R."
---

## Panoramica

Galio support è il tool di engage (iniziare il fight) cross-map in un guscio tank. Porta hard CC — controllo che il nemico non può cancellare con un cleanse base — su tre abilità diverse: **W** taunt (forza il nemico ad attaccarti per un momento), **E** knockup (sbalzo aereo, breve stordimento), **R** knockup. Ha uno scudo magico che assorbe il burst (danno alto concentrato in 1-2 secondi) dei support a distanza, e un'ulti globale che trasforma gli spawn di dragon e Rift Herald in opportunità di kill 5v5. Gioca support perché il suo impatto scala con la map awareness, non con il gold — e perché Hero's Entrance è più utile quando i compagni hanno bisogno di un tank su cui atterrare, non quando lui stesso è il tank.

Il piano partita in lane è paziente: usa Q a max range per chippare il nemico, tieni E per il momento in cui l'ADC (il marksman, il carry che auto-attacca per fare danno) committa al fight, e carica W solo quando il nemico è gia in melee con te. I big play arrivano a livello 6 — quando il tuo jungler dive top (entra sotto torre per cercare la kill), R su; quando il jungler nemico mostra bot, R indietro sul tuo top. Lo skill expression sta nel timing della W (rilascia per interrompere channel chiave — Caitlyn R, Twitch ulti spray, Master Yi Q) e nella selezione del target R (scegli sempre l'alleato con piu probabilità di sopravvivere ai 2 secondi di channel — non R mai un Vayne gia a basso HP).

## Build Consigliata

**Item iniziali:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter standard da support; l'upgrade della quest (una missione integrata che si completa farmando gold nel tempo) si sblocca al minuto 12-14.

**Item core (nell'ordine):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade quest di World Atlas, scelto perché Galio è engage-leaning (inizia i fight, non scappa). Aggiunge una passiva di danno bonus on-immobilized che procca (si attiva automaticamente) ogni volta che la W o E atterra.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — attivo scudo area per skirmish 5v5. Combina con R: atterri con R, droppi Locket al landing, e il tuo team mangia il follow-up di burst avversario con uno scudo da 700+ ciascuno.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — stivali con ability haste. Tagliano il cooldown di ogni spell così i tuoi tool di engage tornano disponibili più rapidamente tra i teamfight, e il CDR sui Summoner Spell accorcia Flash per le combo R+Flash.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bind sul carry con piu impatto. Redirige il danno da loro su di te e amplifica il valore di Aftershock perché ora sei tu il target prioritario di focus.

**Item situazionali:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contro CC single-target pesanti sull'ADC (Morgana Q, Ashe R, Skarner R). L'attivo cleansa il CC e cura.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — con ADC auto-attack pesante (Jinx, Caitlyn, Tristana). Lo slow della W concatena direttamente nella loro finestra DPS.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — con composizione alleata a danno magico (AP mid + AP jungle). L'aura debuff amplifica il danno magico del team sui target che taunti con W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contro 3+ minacce AP nella squadra avversaria (mid + jungle + support tutti con danno magico).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — con ADC enchanter o comp pesante di cure (Soraka, Sona, Yuumi gia nel team).

**Stivali:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** di default — ability haste e CDR sui Summoner Spell rendono R+Flash più frequente. Swappa a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contro comp con tanto CC (più stun/charm/root mirati su di te durante il landing R).

**Skill order:** Massimizza **E** per primo (cooldown engage piu rapido). **Q** per secondo (waveclear e chip damage quando l'ADC è shovato — bloccato sotto la sua torre senza minion da farmare). **W** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**. Swap secondario su **Sorcery** (Manaflow Band + Transcendence) nelle lane di poke pesante in cui non arrivi a livello 6 in salute.

## Matchup chiave

- **Blitzcrank:** Lane dura. La sua Q hook atterra durante la carica W. Stai dietro alla wave di minion così non ti hookera attraverso, non caricare W in fog of war, e chiama il jungler intorno al minuto 4-5 — Blitz non ha escape e il knockup E lo chain-locka.
- **Lulu:** Disengage difficile. Il suo scudo E + W (knock-aside o polymorph) cancella il tuo engage. Usa Q per pokare a max range pre-6 invece di andare in E engage, e R fuori schermo così il polymorph non atterra prima che arrivi.
- **Leona:** Fight pari. Entrambi engager, vince il side che atterra E per primo. Bait la Q stun-walk con il forward step, poi E sul frame di recovery.
- **Soraka:** Favorevole. La sua healing conta solo se resta in range. Q a max distanza così deve scegliere tra heal e schivare, poi R + E quando il tuo jungler mostra bot per un 3v2 invincibile.
- **Pyke:** Fight pari, ma Galio perde se Pyke prende una kill. Tracciagli i hook, non lasciare mai l'ADC al minimo HP quando non puoi droppare ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** sulla spike, e warda il river in profondità perché la sua R è un reset.

## Power spike & condizioni di vittoria

- **Livello 2:** Q + E sblocca la prima kill threat. Con follow-up dell'ADC, cammina avanti, E sul support, e Q sotto l'ADC — lo slow nel knockup concatena abbastanza per due auto-attack di danno.
- **Livello 6:** **Hero's Entrance** sblocca l'impatto cross-map. Il primo dragon fight è il tuo power spike — spingi forte la wave, cammina al river di mid, e R sul jungler quando engaga sul dragon pit.
- **Bloodsong completo (~ minuto 12-14):** Gli engage ora fanno danno reale. La passiva on-immobilized aggiunge 30+ danno magico per colpo sul target che W o E.
- **Locket of the Iron Solari + Knight's Vow online (~ minuto 20-25):** La spike a due item. R-in-Locket sul carry copre 600+ HP effettivi per il team, mentre Knight's Vow tanka la focus fire su di te mentre il tuo ADC continua a DPS.

## Errori comuni

- **Caricare W mentre l'ADC non ha follow-up.** Il taunt W forza il nemico ad attaccarti, ma se l'ADC sta riposizionando o ricallando, mangi il danno gratis senza un trade. Sincronizza il rilascio della W con la prima finestra di auto-attack dell'ADC.
- **Hero's Entrance sul target sbagliato.** Non R mai un alleato gia a basso HP — muore durante i 2 secondi di channel e tu atterri su un cadavere. Pickka il target di front line con piu HP nel team.
- **Ignorare la wave durante i roam.** Un Galio support che R su mid e cede una intera wave bot è una net loss. Spingi prima la wave alla torre nemica, poi roama — non roamare mai da una lane freezata.
- **Engaggiare senza ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket attivo.** Negli objective fight, R-Locket è la singola cooldown piu importante. Tieni l'attivo finché il team non committa il fight, poi droppa entrambi nello stesso istante per il valore massimo di scudo su piu alleati.
- **Massimizzare W per seconda.** Come Galio mid, il rank-up di W dà riduzione di cooldown marginale. Massimizza E per la finestra di engage da 4 secondi a livello 8.

## Suggerimento avanzato

Combo R+Flash: lancia Hero's Entrance su un compagno, poi Flasha durante l'animazione di windup per redirigere il punto di landing di 400 unità in qualunque direzione. La squadra avversaria vede l'indicatore R sul tuo alleato e si prepara al knockup ovvio, poi il tuo punto di landing flashato clippa un target fuori dal raggio R visibile. Richiede pratica per sincronizzare il Flash dentro la finestra del channel — ma un singolo R+Flash sul carry avversario, off-vision (il nemico non ti vede perché sei dentro la fog of war), chiude le partite prima che inizino.
