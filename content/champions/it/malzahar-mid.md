---
title: "Malzahar Mid Build & Guida — Patch 16.9"
slug: "malzahar-mid"
language: "it"
patch: "16.9"
champion: "malzahar"
role: "mid"
last_updated: "2026-05-05"
description: "Guida Malzahar mid lane per League of Legends Patch 16.9: starter kit, build da control mage, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Malzahar"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Control Mage / Voidling Caster"
  abilities:
    - key: "P"
      name: "Void Shift"
      description: "Dopo ~25s senza subire danno o CC, Malzahar entra in shroud: il prossimo colpio viene assorbito al 90% e il prossimo CC viene ignorato."
      dd_spell_id: "Malzahar_Passive"
    - key: "Q"
      name: "Call of the Void"
      description: "Due voids lineari si aprono e sparano verso l'interno. I nemici colpiti subiscono danno magico e vengono silenziati — strumento anti-caster."
      dd_spell_id: "MalzaharQ"
    - key: "W"
      name: "Void Swarm"
      description: "Spawna Voidling che attaccano il bersaglio danneggiato da Malzahar. Aggiunge DPS sostenuto in skirmish e spinge le wave."
      dd_spell_id: "MalzaharW"
    - key: "E"
      name: "Malefic Visions"
      description: "DOT a singolo bersaglio. Se il target muore con visions attivo, salta al nemico più vicino e restituisce mana — strumento principale di waveclear e sustain."
      dd_spell_id: "MalzaharE"
    - key: "R"
      name: "Nether Grasp"
      description: "Channel di suppression su un singolo champion per 2.5s, infligge danno magico in % HP max. La suppression ignora tenacity e quasi tutti i cleanse (solo Quicksilver Sash la rimuove)."
      dd_spell_id: "MalzaharR"
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
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro front line che impilano HP (Sion, Ornn, Cho'Gath, Dr. Mundo) — il burn scala con HP max del target"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun) — blocca anche la prima abilità che ti colpisce"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top) — applica Grievous Wounds sul danno magico"
  base_combo: ["E", "Q", "R", "W"]
  win_condition: "Premi Flash + R su una carry chiave (Yasuo, Vayne, ADC) in ogni teamfight: la suppression la cancella mentre il team raccoglie. Spingi le wave con E e farma in sicurezza."
  weakness: "Mobilità nulla — niente dash, blink o escape. Gli artillery mage a lunga gittata ti pokano oltre il tuo range, e la R è un channel di 2.5s che ogni CC affidabile interrompe."
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
    primary_rationale: "Sorcery primaria: Arcane Comet procca facile su Q in E per poke gratis a ogni scambio. Manaflow Band tiene il mana per spammare E, Transcendence accumula Ability Haste così la R torna disponibile più spesso, Scorch logora i nemici sotto il 50% HP."
    secondary_rationale: "Inspiration secondaria: Biscuit Delivery copre il sustain debole nell'early (HP e mana, perché il kit non ha sustain interno), Cosmic Insight riduce il cooldown di Flash e degli oggetti — Flash + R diventa più frequente."
    secondary_alternative: "Contro lane di poke pesante (Xerath, Vel'Koz, Ziggs), swap Inspiration verso Resolve con Second Wind (rigenerazione dopo aver subito danno da campioni) e Overgrowth (HP scaling) per sopravvivere alla lane phase."
matchup_draft:
  pick_into:
    - examples: ["zed", "yasuo", "yone", "akali"]
      archetype: "Assassini mobili che vivono di dash"
      reason: "La R è una suppression single-target che ignora tenacity e dura 2.5s — i loro dash non la rompono. Una volta premuta R su di loro, muoiono prima di poter fare danno."
    - examples: ["jinx", "tristana", "kog-maw"]
      archetype: "ADC squishy hyperscaler"
      reason: "I teamfight late game si vincono col Flash + R sulla carry. Non hanno escape interno alla suppression e il summoner Cleanse è raro sugli ADC nel meta mid lane."
    - examples: ["karthus", "anivia", "veigar"]
      archetype: "Mage immobili senza dash"
      reason: "Il silence della Q chiude completamente le loro cast window; una volta silenziati non possono rispondere al DOT della E e muoiono nel channel della R."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Artillery mage a lunga gittata"
      reason: "Pokano da fuori la tua Q da 900 di range. Non hai dash per chiudere la distanza, quindi ogni wave ti costa HP senza opzione di ritorno."
    - examples: ["annie", "lissandra"]
      archetype: "CC point-and-click affidabile"
      reason: "Il loro stun cancella il channel della R prima che la suppression finisca — senza R che entra non hai pressione di kill e il kit è debole."
    - examples: ["kassadin", "fizz"]
      archetype: "Mid laner amici del cleanse"
      reason: "Entrambi rushano Quicksilver Sash o lo costruiscono situazionalmente — QSS è l'unico item che rimuove la suppression, neutralizzando interamente la tua R."
---

## Panoramica

Malzahar è un control mage AP (caster che blocca i nemici con crowd control invece di inseguirli) costruito intorno a una sola abilità che decide la partita: **Nether Grasp (R)**, una suppression di 2.5 secondi — una forma speciale di CC che disabilita totalmente un bersaglio e ignora sia la tenacity sia quasi tutti i cleanse. Solo Quicksilver Sash la rimuove. Il resto del kit — silence sulla **Call of the Void (Q)**, DOT e waveclear sulla **Malefic Visions (E)**, Voidling minion sulla **Void Swarm (W)** — esiste per spingere le wave in sicurezza, sopravvivere alla lane e arrivare al livello 6, dove la suppression inizia a vincere skirmish da sola. **Void Shift (Passiva)** è la coperta di sicurezza che lo tiene in vita: dopo ~25 secondi senza subire danno o CC, il prossimo colpo viene ridotto del 90% e il prossimo CC viene ignorato del tutto.

Il piano partita in una frase: shovi la wave con **E**, resti safe con **Void Shift** stackato, e cerchi pick con Flash + **R** sulla carry più pericolosa la prima volta che parte un teamfight. Non ha alcuna mobilità — niente dash, niente blink, niente escape — quindi posizionamento e pazienza sono il prezzo del suo potere di suppression.

## Build Consigliata

**Item iniziali:** Doran's Ring + 2 Health Potions. La rigenerazione di mana e la bottola di AP si sposano con il waveclear a base di E; evita Corrupting Potion a meno che la lane non sia di harass auto-attack pesante.

**Item core (nell'ordine):**

1. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — primo item: l'Ability Haste abbassa il cooldown della **R**, e la passiva on-ult crea una zona di magic resist shred sotto il bersaglio della suppression.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa per cancellare i target squishy con la **R**.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP late game; ogni cosa nel kit scala con AP, quindi è il singolo spike di danno più grande.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — stasi attiva. Premila durante il channel della **R** se un diver tenta di interrompere — il team ripulisce mentre tu sei invulnerabile.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — comprala appena un target prioritario costruisce un item di Resistenza Magica. La penetrazione magica percentuale scala col loro stack di MR.
6. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — ogni spell di danno ora rallenta il bersaglio. Combinato con i Voidling addosso al nemico, il rallentamento lo costringe a camminare indietro dentro il tuo team invece di scappare. Ultimo item opzionale se il team chiede più crowd control.

**Item situazionali:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contro front line che impilano HP (Sion, Ornn, Cho'Gath, Dr. Mundo). Il danno spalmato nei secondi successivi (DOT legato all'HP max del target) consuma i tank senza rinunciare ad AP.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun). Lo scudo blocca anche la prima abilità che ti colpisce, importante su un campione senza mobilità.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top). Applica Grievous Wounds sul danno magico.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. Ionian Boots of Lucidity accettabili se vuoi ancora più uptime di **R**.

**Skill order:** Massimizza **E** per primo (waveclear e sustain via il refund mana quando il target muore con visions attivo), **Q** per secondo (silence + proc Comet), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure swappa a **Resolve** con **Second Wind** e **Overgrowth** se l'avversario è un mage di poke a lunga gittata.

## Matchup chiave

- **Yasuo / Yone:** Il loro Wind Wall (un muro verticale che blocca tutti i proiettili in arrivo per ~4s) si mangia la tua **Q**. Tieni **Q** finché non l'hanno bruciato, usa **E** per waveclear da distanza di sicurezza. Dopo il livello 6 vinci comunque l'all-in: il loro dash NON rompe la suppression, quindi Flash + **R** li uccide a cooldown.
- **Zed:** Pre-6 ti uccide col combo **R** + **Q** se sbagli posizionamento. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** come secondo item completato; premi la stasi nel momento in cui l'ombra di Zed atterra su di te.
- **Ahri:** Matchup pari, deciso da chi atterra prima il setup. La sua charm cancella il channel della **R**; devi tenere **Void Shift** carico (niente Q gratis incassata) così la charm rimbalza sullo shroud passivo. Poi la tua **R** la uccide.
- **Anivia:** Matchup hard di outscale ma la bullizzi early. Il suo wall cancella la **R** se lo piazza tra te e lei. Spingi la wave con **E**, freezala sotto torre, negale farm con il silence della **Q**.
- **Twisted Fate:** Gara di rotazione. Ti supera nel mid-game macro perché picca le side lane con la carta gialla. Pusha la wave per negare i timing della **R** di roam, warda il river, e pinga le side lane il momento in cui la sua **R** si illumina.

## Power spike & condizioni di vittoria

- **Livelli 1-3:** Prendi **E** per primo. Con un punto pulisci i caster minion in un cast e inizi a pokare il nemico spalmando il DOT che salta sui minion in morte.
- **Livello 6:** Prima **Nether Grasp** sblocca pressione di solo-kill. Con Flash su, qualunque mid laner squishy posizionato un passo troppo avanti muore di **E + Q + Flash + R**.
- **![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) Malignance completo (~ minuto 11-13):** Il cooldown della **R** scende sensibilmente e il magic resist shred sotto il bersaglio del channel rende i solo kill affidabili. Roama in side lane ogni volta che la **R** è disponibile.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** La suppression ora fa abbastanza danno per cancellare un ADC senza protezione da sola. Forza i fight obiettivo e cerca pick con Flash + **R** sulla carry ogni volta che la R è su.

## Errori comuni

- **Sprecare Void Shift.** La passiva (lo shroud che assorbe il 90% del prossimo colpo e ignora il prossimo CC) è la tua unica vera difesa — incassare un Q gratis di poke per farmare consuma lo shroud. Resta safe con Void Shift al massimo prima che il nemico committi un gank.
- **Channellare R quando sei interrompibile.** La suppression è un channel di 2.5 secondi: ogni CC affidabile (stun di Annie, Q di Lissandra, charm di Ahri) la cancella. Premi sempre Zhonya's durante il channel se vedi un diver in arrivo, oppure usa la R solo dopo che la minaccia ha bruciato l'interrupt.
- **R sul tank di front line.** La R è il tuo strumento di one-shot sulla back line. Sprecarla su un tank con 3500 HP non rende nulla — il tank vive, il team non ha risposta alla carry avversaria, e tu hai 110+ secondi prima che la R torni.
- **Saltare la Q per poke.** Il silence della **Q** chiude le cast window dei mage avversari (cancella l'ult di Anivia, il channel di Karthus). Usala come utility anti-caster, non solo per danno.
- **Costruire solo AP.** Senza ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** non hai risposta ai diver. La stasi attiva non è negoziabile su un campione con mobilità nulla.

## Suggerimento avanzato

Allena il combo **Flash + R** sulla carry avversaria nei teamfight. Cammina appena fuori dal loro raggio di minaccia massimo, **Flash** dritto su di loro, **R** immediata prima che possano reagire. La suppression ha cast time zero dopo il Flash (istantanea), quindi l'unico counterplay è Quicksilver Sash (3140) o un teammate che atterra un interrupt entro 2.5 secondi. Con Cosmic Insight, questo combo è quasi sempre disponibile a ogni teamfight.
