---
title: "Mel Mid Build & Guida — Patch 16.9"
slug: "mel-mid"
language: "it"
patch: "16.9"
champion: "mel"
role: "mid"
last_updated: "2026-05-05"
description: "Guida Mel mid lane per League of Legends Patch 16.9: starter kit, build mago core, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "Mel"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mago / Artillery"
  abilities:
    - key: "P"
      name: "Searing Brilliance"
      description: "Ogni cast aggiunge 3 proiettili bonus (max 9) alla prossima auto-attack. Il danno applica Overwhelm a stack infiniti; abbastanza damage da Overwhelm esegue il bersaglio."
      dd_spell_id: "Mel_Passive"
    - key: "Q"
      name: "Radiant Volley"
      description: "Barrage targettata di esplosioni su una zona a terra. Strumento principale di waveclear e generatore di stack Overwhelm. Lunga gittata (950)."
      dd_spell_id: "MelQ"
    - key: "W"
      name: "Rebuttal"
      description: "Barriera personale che riflette i proiettili nemici, blocca il danno e dà movement speed in decay. Il danno riflesso scala col colpo originale."
      dd_spell_id: "MelW"
    - key: "E"
      name: "Solar Snare"
      description: "Skillshot lineare: l'orbo immobilizza al centro e crea un'area che rallenta e infligge damage over time. Setup per il follow-up di Q."
      dd_spell_id: "MelE"
    - key: "R"
      name: "Golden Eclipse"
      description: "Esecuzione globale su tutti i nemici con stack di Overwhelm. Più stack = più danno. Castabile solo se un campione ha Overwhelm."
      dd_spell_id: "MelR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi lascia scadere gli stack Overwhelm prima che ti finiscano"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun) — lo spell shield ti dà tempo per la W"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top) — il Grievous Wounds tappa il loro sustain"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un target prioritario completa un item di Resistenza Magica"
    - dd_id: "4628"
      name: "Horizon Focus"
      against: "contro mage immobili e tank che mangiano tutto il combo E + Q — aggiunge un damage amp sui colpi a lunga gittata o sotto root"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Accumula stack Overwhelm con Q + E in lane e nei trade, poi chiudi con la R globale quando un nemico è basso. Raggruppati sugli obiettivi così la Q nutre stack su tutta la squadra avversaria."
  weakness: "Nessun dash, mobilità base nulla, R inutile senza stack Overwhelm già piazzati. Hard counter di gap-closer mobili e di nemici che riescono a disengage prima che tu accumuli."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
    primary_rationale: "Sorcery primaria: Summon Aery procca su ogni tick di Q e su ogni auto-attack potenziata da Searing Brilliance, quindi gli stack Overwhelm crescono in fretta. Manaflow Band sostiene lo spam di Q, Transcendence porta l'Ability Haste oltre il 40%, Scorch chiude il poke a basso HP."
    secondary_rationale: "Inspiration secondaria: Biscuit Delivery copre il sustain debole (niente cura, niente dash) e Cosmic Insight riduce il cooldown di Flash e degli item attivi così Zhonya's Hourglass e Rebuttal si allineano alle finestre di R."
    secondary_alternative: "Se l'enemy team ha 2+ squishy a basse resistenze, swap Inspiration → Precision con Presence of Mind (mana refund su takedown) e Coup de Grace (+8% danno sotto 40% HP). Coup de Grace si combina bene con la matematica di esecuzione della R."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mage immobili senza dash"
      reason: "Non possono schivare il root della E, quindi tutto il follow-up di Q va a segno. Una volta marchiati con Overwhelm, la R globale li raccoglie appena recallano bassi o passano sotto un gank del jungler."
    - examples: ["senna", "ziggs", "xerath"]
      archetype: "Carry da retroguardia senza disengage"
      reason: "Le lane lunghe lasciano accumulare passivamente Overwhelm mentre loro farmano. Anche quando ti pokano oltre la tua gittata, la R chiude la kill da base o sidelane appena la loro HP scende."
    - examples: ["annie", "twisted-fate"]
      archetype: "Mage da all-in telegrafato"
      reason: "Il loro engage richiede un'animazione lenta o l'estrazione di una carta — Rebuttal (W) riflette la parte projectile del burst, e quasi sempre li uccide se hai già Overwhelm stackato."
  counterpicks:
    - examples: ["zed", "fizz", "kassadin"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "Ti saltano addosso prima che tu possa centrare la E, e la W blocca solo i projectile — quasi tutto il loro burst è melee o self-targeted, quindi il reflect non fa quasi nulla. Senza dash non hai escape dopo che il burst entra."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall che blocca i projectile"
      reason: "Wind Wall si mangia tutta la barrage di Q e la parte projectile dei tuoi auto-attack sotto Searing Brilliance. Ti annullano il damage profile in una finestra di 3 secondi, abbastanza per fare all-in."
    - examples: ["irelia", "akali"]
      archetype: "Skirmisher con cleanse stile QSS"
      reason: "Il dash di R2 di Akali e i reset di Q di Irelia ignorano la tempistica del root della E. O atterri E pre-6 senza la R per chiudere, o mangi il loro all-in completo una volta che hanno l'ulti su."
---

## Panoramica

Mel è un mago artillery a lunga gittata con un'identità unica: **execute basata su stack**. La passiva **Searing Brilliance** trasforma ogni cast in 3 proiettili bonus sulla prossima auto-attack (fino a 9 accumulati) e applica marchi Overwhelm a stack infiniti sui nemici colpiti. La sua ulti **Golden Eclipse (R)** è globale: snipa tutti i bersagli marchiati ovunque siano sulla mappa. Il prezzo è una mobilità brutale: niente dash, niente blink, solo **Rebuttal (W)** come riflesso projectile da 1.5 secondi.

Il piano partita in mid è spingere le wave con **Radiant Volley (Q)**, atterrare **Solar Snare (E)** sull'avversario quando hai Q pronta per il follow-up, e accumulare stack Overwhelm su tutta la squadra avversaria durante le skirmish. Dopo il livello 6 la win condition è la lettura della mappa: quando una carry nemica recalla bassa o combatte in side lane, **R** la chiude da fondo mappa. Lo skill expression sta nel piazzamento della **E** (anticipare le posizioni di last-hit) e nella tempistica della **R** (leggere la minimappa, non premerla a cooldown).

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Il costo della Q al rank 1 è alto, AP e mana regen di Doran's Ring non sono opzionali.

**Item core (nell'ordine):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — primo back. L'Ability Haste più il proc di burst si combinano con le auto a proiettili bonus; Mana Charge sostiene lo spam di Q nelle lane lunghe.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica fissa: i tick di Q e gli stack Overwhelm mordono i target squishy che vuoi cancellare con R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst del second item. La passiva sotto soglia HP (passiva di un item che si attiva quando il nemico è sotto soglia HP, ad esempio sotto il 40%) combacia con il finisher di R nelle skirmish.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore late-game. Lo slot AP più alto — il danno di Overwhelm e il danno per stack della R scalano in modo aggressivo con l'AP totale.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro diver e assassini (Zed, Diana, Talon, Akali). I 2.5 secondi di stasi lasciano passare la finestra di burst e fanno arrivare il jungler.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magici single-target (Ahri charm, Lissandra R, Twisted Fate stun). Lo spell shield ti dà la finestra per piazzare Rebuttal.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro composizioni che impilano cure (Soraka mid, Vladimir, Dr. Mundo top), dove i tick di Q servono il Grievous Wounds per droppare davvero la barra HP.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un target prioritario completa un item di Resistenza Magica.
- ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — contro lineup immobili (due o più nemici senza dash). Il damage amp procca su ogni root della E e su ogni hit a lunga gittata di Q.

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** accettabili quando il team chiede più uptime di **R** (ogni 80 secondi al rank 3 significa un ciclo extra per teamfight).

**Skill order:** Massimizza **Q** per primo (waveclear e motore di stack Overwhelm), **E** per secondo (root e zoning), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure **Precision** con **Presence of Mind** e **Coup de Grace** se la squadra avversaria ha più squishy a basse resistenze.

## Matchup chiave

- **Yasuo / Yone:** Wind Wall mangia la barrage di Q e le auto a proiettili bonus. Tieni Q finché non hanno bruciato le abilità, e usa Q solo per pulire wave a distanza di sicurezza. Tradi con E nelle auto-attack (la parte melee bypassa Wind Wall).
- **Diana / Akali:** Minacce di dive. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** dopo ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**; mai usare Flash in modo offensivo in lane contro di loro — non hai dash e morire una volta fa snowball alla lane (li fa crescere a valanga: kill, gold, item, altre kill).
- **Orianna:** Matchup pari, deciso nei teamfight. La gittata di Q coincide; non lasciarti tirare in scambi auto-attack perché scala meglio con lo stesso set di item. Stacka Overwhelm Q-ando vicino a lei sulla wave, non tradando direttamente.
- **Twisted Fate:** Gara di prio nelle rotazioni (priority = vantaggio in lane che ti permette di lasciarla senza perdere risorse). Se ti tira la carta gialla, E prima che chiuda; altrimenti tracciagli la R con ward su river e tri-bush — la tua R globale risponde ai suoi roam dalla tua torre.
- **Galio:** Evita di stare appiccicato a un alleato pre-6 (la sua W punisce target raggruppati). Puniscilo quando è in melee sui minion con E + Q; non ha gittata di waveclear per superarti in push, quindi prepari roam ogni volta che si avvicina per un CS.

## Power spike & condizioni di vittoria

- **Livello 2:** Con Q + E disponibili, hai il primo all-in trade. Atterra E per il root, butta Q sopra — i tick di esplosione caricano Overwhelm in fretta. Forza uno swing di HP del 30%+.
- **Livello 6:** Prima **Golden Eclipse** sblocca pressione globale. Se scoppia un fight in side lane e un nemico ha già stack Overwhelm (da skirmish precedenti o dal poke di Q), la R lo chiude da base.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 12-14):** Il controllo della wave si ribalta. Pushi e roami con R disponibile; la passiva Mana Charge rimuove il tetto di mana che ti limitava lo spam di Q pre-back.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** R one-shotta gli squishy che non hanno comprato un item di MR. Forza i fight obiettivo qui — anche una skirmish breve lascia abbastanza stack Overwhelm per un'esecuzione di squadra.

## Errori comuni

- **Premere R a cooldown.** R parte solo sui nemici con stack Overwhelm. Castarla su un target da 1 stack spreca un cooldown di 120/100/80 secondi per quasi nulla. Aspetta almeno 5 stack accumulati (di norma dopo Q + E + 2-3 auto).
- **Ignorare la W contro burst melee.** Rebuttal riflette **solo proiettili**. Contro le W di Zed e gli shuriken di Akali è oro, contro la E di Diana o la Q di Master Yi non fa nulla di utile — usa la W per chiudere il gap col movement speed.
- **Lanciare E senza Q pronta.** E è un root con cooldown lungo e arming time; senza Q a seguire, il root è sprecato perché gli stack Overwhelm vengono dal danno, non dal CC da solo.
- **Auto-posizionarsi a max gittata di Q nei teamfight.** Massima distanza (950) ti mette fuori dal peel del team (peel = alleati che ti proteggono dai diver). Stai nella seconda posizione più arretrata in modo che un flank non ti elimini.
- **Q sulla wave durante una skirmish.** La Q è il tuo motore di stack. Spenderla sui minion durante un 3v3 in mid-river abbatte il tuo output del ~50%. Spingi la wave prima, poi commit.

## Suggerimento avanzato

Cronometra le auto-attack di **Searing Brilliance**. Castare Q + E + W in fila accumula il counter di proiettili bonus a 9, ma solo la **prossima** auto li consuma. Se intersechi l'auto **tra** Q ed E (Q → AA → E → Q), spari due auto potenziate nello stesso combo invece di una — più o meno raddoppi il rate di stack Overwhelm nella finestra di trade. Nei teamfight significa usare un'abilità, fare subito una auto, poi riprendere la rotazione: è la differenza tra una R che fa il 60% degli HP e una che chiude la kill.
