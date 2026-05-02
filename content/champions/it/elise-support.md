---
title: "Guida Elise Support — Build e Strategia per la Patch 16.9"
slug: "elise-support"
language: "it"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Guida Elise support per League of Legends Patch 16.9: angoli di engage con Cocoon, build path via Bloodsong, matchup chiave, power spike e un consiglio finale."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Due forme. Human: ogni ability che colpisce genera uno Spiderling dormiente. Spider: gli AA fanno bonus magic damage e curano Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke a bersaglio che scala sull'HP attuale del nemico (anti-tank). Spider: balzo che scala sull'HP mancante (esegue bersagli a basso HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lancia uno Spiderling che cammina avanti ed esplode vicino ai nemici (slow + danno AOE). Spider: Elise e i suoi pet guadagnano attack speed per DPS continuo."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot lineare che stunna il primo nemico colpito. Il tuo tool di engage. Spider: Rappel — lift corto intargetabile, poi caduta sul bersaglio con bonus damage."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate che alterna Human (caster a distanza) e Spider (skirmisher melee con movement speed e sciame di Spiderling). Free swap a cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro magic CC single-target (Ahri charm, Lissandra R) — lo spell shield blocca un engage e ti lascia rifare cocoon"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro hard CC pesante (stun, knock-up) — boots swap che aggiunge tenacity (riduzione durata CC)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro comp con AOE burst (Yasuo + Malphite, Orianna wombo) — l'active shielda tutto il team"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "compralo solo quando sei 10+ kill/assist avanti senza morti — converte il lead snowball in pure AP scaling"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Fai engage con E cocoon dalla fog of war per setupare l'all-in dell'ADC. Resta rilevante late stunnando il carry nemico nella finestra di burst di Aftershock e Liandry's Torment."
  weakness: "Tutto dipende dal landing del cocoon: uno skillshot mancato ti lascia in melee range senza escape. Outrangeata male dai support hook che ti grabbano prima che tu casti."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Aftershock scatta sullo stun di cocoon dando armor + magic resist e un'onda AOE ritardata — la finestra di sopravvivenza dopo l'engage da melee. Font of Life cura l'ADC ad ogni cocoon, Bone Plating attutisce gli all-in early, Revitalize amplifica heal/shield."
    secondary_rationale: "Sorcery secondary: Manaflow Band tiene il mana stabile durante la laning phase early (cocoon costa 50-90 mana per cast), Transcendence porta l'Ability Haste oltre il 40% cosi che il cocoon torni piu rapido nei fight prolungati."
    secondary_alternative: "Contro lane di poke o all-in pesante (Lucian + Nami, Draven + Thresh), sostituisci Sorcery in Inspiration con Magical Footwear (8304, boots gratis al minuto 10) e Cosmic Insight (8347, riduzione cooldown summoner spell); l'uptime extra di Flash ti salva dagli engage mancati."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Enchanter support squishy senza tenacity"
      reason: "Lo stun lungo del cocoon ignora il loro kit di utility. Non hanno escape tipo Flash, e il burn di Liandry's Torment (danno spalmato in pochi secondi) punisce shield e heal."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Carry ranged immobili senza dash"
      reason: "Cocoon lanciato da un bush li prende piatti. Una volta stunnati, al livello 3 W (slow) + Q (anti-HP) + il burst dell'ADC chiude la kill prima che Flash possa rispondere."
    - examples: ["draven", "samira"]
      archetype: "Carry aggressivi che si espongono per le kill"
      reason: "La loro pressione di kill li forza oltre l'equilibrio della wave (la safe lane line). Cocoon punisce lo step in avanti, Aftershock gira l'all-in (trade di commit totale) a tuo favore."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Support hook che hanno piu range di cocoon"
      reason: "L'hook di Blitzcrank (~1100) ha piu range del cast della E (1075). Fanno engage per primi su di te, rimuovendo il tuo tool di engage e lasciandoti melee in Spider form senza escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell shield che blocca cocoon"
      reason: "Una sola carica di spell shield mangia tutto il tuo stun. Senza cocoon non hai setup, e il follow-up del team si blocca finche non torna il cooldown."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Support engage tanky con CC point-and-click"
      reason: "Il loro engage e a bersaglio (niente skillshot da schivare). Restano attaccati al tuo ADC piu a lungo di quanto tu li possa tenere, e il tuo magic damage non li uccide attraverso l'armor."
---

## Panoramica

> **Mini-glossario (leggi una volta):** **ADC** = Attack Damage Carry, il bot-laner che fa danno fisico (Caitlyn, Jinx). **AP** = Ability Power, la stat che potenzia le ability magiche. **MR** = Magic Resist, difesa contro magia. **CS** = Creep Score, numero di minion uccisi. **CC** = Crowd Control, qualsiasi effetto che ferma un campione (stun, slow). **Engage** = iniziare il fight. **Disengage** = staccarsi dal fight. **Trade** = scambio breve di colpi. **All-in** = commit totale fino alla kill. **Peel** = proteggere il proprio carry. **Kite** = muoversi indietro mentre attacchi.

Elise support e un ibrido engage-mage: lancia **Cocoon (E)** da un bush o dalla fog of war (la parte di mappa non wardata) per fare root al carry avversario, poi fa commit con **Spider Form (R)** per follow-up damage e per il disengage intargetabile via **Rappel**. Scambia la sicurezza dell'enchanter con kill pressure pura — ogni cocoon riuscito ai livelli 3-6 dovrebbe produrre una kill o un Flash bruciato. La sua weakness e la stessa della sua forza: senza un cocoon a terra, non ha engage e non ha heal su cui ripiegare.

Il game plan e dominare la bot lane nei primi 6 livelli, prendere Bloodsong e **Sorcerer's Shoes** entro il minuto 12-14, poi fare roam a mid con il boost di movement speed di Spider Form. Late game il job cambia: diventa una flank assassin che aspetta che il carry avversario sbagli posizionamento, lancia cocoon da un angolo laterale e lascia chiudere al team.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item della support quest: ti da gold supporto nel tempo finche non fai last-hit ai minion da solo) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (in ordine):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade finale della linea support quest (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). La variante AP: ogni quarto AA contro un campione fa bonus magic damage. Sinergia naturale con gli AA rapidi di Spider form durante un dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Cruciale perche da support hai meno gold del mid laner, quindi penetration e piu efficiente di pure AP nell'early.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primo big AP item. Il burn HP-based (danno che scala sull'HP max del bersaglio, spalmato in pochi secondi) punisce le frontline tanky che provano ad assorbire il cocoon stun.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — ogni ability slowa. Trasforma la **W** in un tool di chase, e stacka con cocoon stun per affidabilita di follow-up.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. Dopo aver engagato da melee range, l'active ti da 2.5 secondi di stasi (non puoi muoverti, ricevere danno o essere targetato), il tempo che serve al team per cleanare.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro magic CC single-target (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quando il team avversario ha hard CC pesante.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro comp con AOE burst (combo Yasuo + Malphite, wombo Orianna).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — solo quando sei 10+ kill/assist avanti con zero morti. Il rischio di perdere stack e reale; non comprarlo se sei in svantaggio.

**Boots:** Sorcerer's Shoes e lo standard. Mercury's Treads se il team avversario ha tre o piu fonti di hard CC (stun, knock-up).

**Skill order:** Metti il max su **E** per primo (lo stun di cocoon e il tuo lavoro), **Q** per secondo (damage), **W** per ultimo. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondary **Sorcery** con **Manaflow Band** e **Transcendence**.

## Matchup chiave

- **Blitzcrank:** Il peggior matchup di lane. La sua Q outrangea la tua E di ~25 unita. Stai dietro il tuo ADC, mai fare step in avanti per lanciare cocoon — ti hookera nel momento in cui committi.
- **Thresh:** Hook duel che puoi sopravvivere ma raramente vincere. Aspetta che lanci e manchi la sua Q, poi cammina avanti per landare cocoon nella recovery window. Evita di entrare nell'arco della lantern quando fa engage sul tuo ADC.
- **Soraka:** Lane gratis. Il suo silence e a corto raggio e la sua heal e interrompibile dal cocoon. Fai engage al livello 3 col mana pieno; il trade brucia il suo HP piu velocemente di quanto possa healare.
- **Leona:** Vince l'all-in fight ma perde la guerra di poke. Sta a max range di cocoon, lancia E per interrompere l'animazione della sua **W** (Eclipse), poi back off. Non fare commit se non puoi landare cocoon per primo.
- **Sivir:** La sua **E** (Spell Shield) blocca cocoon completamente. Esca lo shield lanciando prima la **W** spiderling; una volta che blocca la W con lo shield, il tuo cocoon arriva pulito per la durata del cooldown del suo shield (~12 secondi).

## Power spike & condizioni di vittoria

- **Livello 2:** Con **E** + **Q**, hai un setup di all-in. Forza il livello 2 prima dei support melee e fa engage al primo cocoon che landa.
- **Livello 6:** Prima **Spider Form (R)**. Il potenziale di disengage e re-engage raddoppia; puoi fare dive un nemico a basso HP sotto torre usando Rappel come tool di re-positioning.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 13-15):** Roam window. Muoviti a mid per un 3v2 se la tua wave e spinta sotto la torre nemica. Lo snipe a mid con **Cocoon (E)** + chiusura **Spider Q** uccide quasi sempre qualsiasi mid laner squishy.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ minuto 18-20):** Pronta per i teamfight. Il tuo lavoro ora e fare flank della backline dai bush laterali; landa cocoon sull'ADC nemico, **Aftershock** si attiva sullo stun, il tuo team cleana.

## Errori comuni

- **Lanciare E cocoon come poke.** Stessa regola di Elise jungle: cocoon e engage, non harassment. Aspetta che il carry faccia step in avanti; un cocoon mancato ti lascia 12 secondi senza difese.
- **AA sui minion in lane.** Gli item da support puniscono il CS sui minion — fare last-hit cancella il gold income di World Atlas e affama il tuo ADC. Usa **W** sulla wave solo quando la wave successiva sta per tornare indietro.
- **Fare engage senza follow-up dell'ADC.** Sbircia la barra del mana e i cooldown dell'ADC prima di lanciare il cocoon. Se sono out di mana o senza **Flash**, non fare engage; farai trade 1-per-1 nel migliore dei casi.
- **Dimenticare di comprare ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) ward ad ogni back.** Da support, sei tu a piazzare la vision sulla mappa. I ward nei bush del river controllano gli angoli di engage del tuo jungler. Usa ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens per fare sweep dei ward nemici nascosti prima degli obiettivi.
- **Fa divere con R senza escape disponibile.** Spider form non ha escape built-in. Se la tua **Flash** e Rappel sono entrambe down, non fare commit a un dive sotto torre; l'ADC nemico ti fa kite a te (si muove indietro mentre attacca) finche la torre ti uccide.

## Suggerimento avanzato

Costruisci gli angoli di cocoon con la vision prima che il fight inizi. Una ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** piazzata nel bush laterale ti da un engage angle gratis: cammina nel bush dalla fog, lancia cocoon mentre l'ADC nemico fa step in avanti per last-hittare, poi **Spider R** + Rappel drop. L'intera sequenza e invisibile dalla prospettiva nemica fino al landing del cocoon. E la giocata di maggior impatto che Elise support puo fare, e la maggior parte dei giocatori a basso rank la ignora perche fa engage dritto da lane invece che da angoli preparati.
