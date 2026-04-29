---
title: "Aurelion Sol Mid Build & Guida — Patch 16.9"
slug: "aurelion-sol-mid"
language: "it"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Aurelion Sol mid lane per League of Legends Patch 16.9: build path con scaling Stardust, matchup chiave, power spike, errori comuni e un consiglio tecnico finale."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mago / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Le abilità danneggianti raccolgono Stardust dai champion nemici. Lo Stardust aumenta in modo permanente area, range e soglia di execute di ogni spell — la pazienza paga nel late game."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Soffio di drago canalizzato in un cono frontale. Tieni premuto per continuare a fare danno; ogni secondo pieno su un champion fa burst extra e raccoglie Stardust. Fonte principale di DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Volo direzionale che attraversa il terreno; mentre voli la Q non ha cooldown. Una takedown entro 3s rimborsa parte del CD di W. Lo Stardust estende il range massimo di volo."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Piazza un buco nero che trascina i nemici verso il centro e infligge danno. Il centro esegue (uccide istantaneamente) i target sotto soglia HP. Lo Stardust aumenta zona e soglia."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Schianta una stella sul target: stun e danno. Dopo 100 Stardust la R successiva diventa The Skies Descend — area più grande, knock-up al posto dello stun, shockwave AoE."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro assassini mobili (Zed, Fizz, Talon, Akali) — la stasi è il pulsante d'emergenza quando W è in cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro hard CC single-target che interrompe la Q (Annie R, Lissandra R, gold card di Twisted Fate)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contro team scivolosi: lo slow tiene i target incollati dentro il cono di Q"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena qualunque target prioritario compra il primo item di Resistenza Magica"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Accumula Stardust nei fight estesi con Q lunghi e W di inseguimento. Quando Liandry's Torment e Rabadon's Deathcap sono online, il burn sostenuto cancella i champion squishy attraverso la loro Magic Resist."
  weakness: "La Q è una canalizzazione lunga: qualsiasi hard CC che la interrompe (Annie R, Lissandra R, stun di Twisted Fate) dimezza il tuo danno. Gli assassini mobili chiudono la distanza prima che la W sia pronta come escape."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "Mage da controllo immobili senza dash"
      reason: "La W di volo di Aurelion Sol chiude la distanza mentre la Q continua il channel. Target senza dash o stealth mangiano danno Q sostenuto mentre la finestra di volo lo tiene fuori dalla loro gittata."
    - examples: ["galio", "sylas"]
      archetype: "Skirmisher melee mid a corto raggio"
      reason: "Il loro all-in richiede corto raggio. ASol li tiene a distanza con W e Q da fuori range di auto-attack; se Flashano dentro, la E li tira fuori posizione e la R stunna una volta che lo Stardust scala l'area."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "Possono dashare addosso ad Aurelion Sol nel mezzo del channel, interrompere la Q e ucciderlo prima che lo scaling Stardust porti il fight. La W ha cooldown troppo lungo per essere un escape affidabile."
    - examples: ["yasuo", "yone"]
      archetype: "Champion con Wind Wall"
      reason: "Il muro blocca tutta la linea di Q. La fonte principale di danno di ASol diventa inutile a metà trade e loro puniscono il channel mancato con un all-in da cui non puoi tirarti fuori."
---

## Panoramica

Aurelion Sol è un mago a danno sostenuto il cui kit ruota intorno a due idee semplici: tieni il **Breath of Light (Q)** in canalizzazione sul target il più a lungo possibile (canalizzazione = un'abilità che continui a castare per diversi secondi, interrompibile da hard crowd control), e usa **Astral Flight (W)** per inseguirlo quando prova a scappare. La passiva **Cosmic Creator** raccoglie una risorsa permanente chiamata **Stardust** ogni volta che danneggi un champion abbastanza a lungo — lo Stardust aumenta in modo permanente area, range e soglia di execute (la soglia di HP sotto la quale la spell uccide istantaneamente il target) delle sue spell. Più la partita si allunga, più ogni cast diventa grosso e minaccioso. ASol non ha burst istantaneo: vince restando addosso ai nemici finché il burn (danno spalmato in più secondi invece che istantaneo) non li finisce.

Il piano partita in mid è asimmetrico. Nei livelli iniziali fai trade in finestre brevi (un breve scambio di danno in lane, non un tentativo di kill completo): **Q** su un champion che si avvicina per last-hittare, uno o due tick di danno, indietro. Dal livello 6 in poi, **W** ti permette di attraversare il terreno come un **Flash** gratuito — usalo per inseguire le kill che il jungler ti imposta con un gank (quando il jungler scende in lane per aiutarti a uccidere il nemico), o per disengage volando via verso la tua torre. Nel late game diventi un battlemage da retroguardia (un mago che combatte a media distanza, mescolando spell e posizionamento): stai sul bordo del teamfight, dietro la front line (i tuoi tank e bruiser, i melee duri che si prendono il danno per la squadra), canalizza **Q** attraverso i loro corpi fino al carry, lascia cadere **Singularity (E)** per tirare i nemici ai bordi del fight e finisci con **Falling Star (R)** quando stunna.

## Build Consigliata

**Item iniziali:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (l'anello default come primo acquisto per i mage: un po' di AP, HP e rigenerazione mana) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La rigenerazione mana di Doran's è obbligatoria — spammi Q a ogni wave di minion.

**Item core (nell'ordine):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — brucia ogni secondo una percentuale dell'HP massimo del target mentre la tua Q lo colpisce (quindi fa più male contro nemici tanky, e più la canalizzazione dura più il burn cresce). Il tuo singolo item migliore.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — stivali con magic penetration: ogni spell ignora una parte fissa della Magic Resist nemica, cancellando più in fretta i target squishy (champion con poche difese, tipo ADC e mage).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplica il tuo **AP** (Ability Power, la statistica che fa scalare il danno magico) di un 30% extra. Ogni spell colpisce più forte. Compralo per terzo se sei in vantaggio.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — danno magico bonus sui nemici a basso HP (HP-threshold passive: bonus che si attiva solo quando il target è sotto una certa percentuale di HP). Combacia perfettamente con i finisher di **R**.

**Item situazionali:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro assassini mobili (Zed, Fizz, Talon). La stasi è il pulsante d'emergenza quando **W** è in cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro hard CC single-target (Annie R, Lissandra R, gold card di Twisted Fate). Uno stun bloccato salva il tuo channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — rallenta tutto quello che la **Q** colpisce, tenendo i target incollati dentro il cono.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration pesante pensata per i nemici che hanno comprato Magic Resist. Swap appena qualunque target prioritario compra il primo item MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applica Grievous Wounds ai nemici che danneggi (uno status che dimezza le cure ricevute). Comprala contro composizioni che impilano cure (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy).

**Stivali:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** di default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (stivali che riducono il cooldown delle abilità) sono un'opzione se il team ti chiede di avere la **R** pronta più spesso come tool di engage in teamfight.

**Skill order:** Massimizza **Q** per primo (fonte principale di danno), **E** per secondo (waveclear e setup AoE), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondario **Inspiration** con **Biscuit Delivery** e **Cosmic Insight**, oppure **Resolve** con **Second Wind** e **Overgrowth** se la lane è di poke a lunga gittata pesante (poke = danno a basso commitment per logorare lentamente l'HP).

## Matchup chiave

- **Yasuo / Yone:** Il loro **Wind Wall** blocca completamente la linea di **Q**. Tieni **Q** finché non hanno bruciato il muro, poi re-engage. Trade solo quando il muro è in cooldown.
- **Zed / Talon:** Ti uccidono prima che **W** sia pronta. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima di ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**; non tenere mai **Flash** e **W** entrambi in cooldown nello stesso momento.
- **Veigar:** Pari pre-6 — lui stunna dentro la sua gabbia W; tu pokana da fuori la gabbia con il range della **Q**. Post-6 può one-shottarti con E-W-Q-R se stai fermo — continua a muoverti lateralmente mentre canalizzi.
- **Annie:** Il suo stun è nascosto in un contatore passivo che non vedi chiaramente. Conta i suoi cast: ogni 4 abilità ha lo stun pronto. Se l'indicatore **Pyromania** (l'icona arancione di fuoco sotto al suo ritratto) è acceso, non stare nel range di Tibbers.
- **Twisted Fate:** È una gara a chi roama prima (roam = lasciare la propria lane per andare ad aiutare le altre). Lui ha la **R** che teletrasporta dall'altra parte della mappa; tu hai **W** che vola sopra il terreno per inseguirlo. Tieni sempre la wave mid spinta verso la torre avversaria così, se lui parte a gankare bot, tu farmi CS gratis mentre è via e resti pari.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **W** puoi inseguire un errore fino al muro della lane — punisce chi cammina troppo vicino al river senza vision.
- **Livello 6:** Prima **Falling Star** sblocca uno stun istantaneo. Imposta i gank con il jungler (gank = il jungler scende in lane per aiutarti a uccidere il nemico): pull con **E** → stun con **R** → kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 11-13):** La tua **Q** sostenuta passa da chip damage (danno piccolo e lento) a minaccia reale. Forza i fight allo spawn del Drake (il Dragon nel river, dà buff alla squadra) appena Liandry's è online.
- **100 Stardust raccolti (~ minuto 18-22):** La tua **R** si trasforma in **The Skies Descend** — area più grande, knock-up invece di stun, shockwave AoE. È la tua condizione di vittoria nei teamfight; tienila per gli obiettivi invece che bruciarla su un singolo pickoff (eliminazione di un nemico isolato fuori dal team fight).

## Errori comuni

- **Canalizzare Q senza volare.** Stare fermo durante la canalizzazione di **Q** ti rende un bersaglio facile. **W** nella stessa direzione in cui scappa il target così il channel continua senza costo extra di mana mentre tu resti al sicuro.
- **Usare W in modo aggressivo senza piano d'uscita.** **W** è il tuo unico escape. Se voli su 3 nemici senza setup (jungler vicino, **R** pronta, abbastanza statistica di riduzione cooldown per riavere **W** in fretta), muori senza fare danno. Tratta **W** come un commitment (un all-in: vai per la kill senza modo facile di tornare indietro), non come mobilità gratuita.
- **Greedare Stardust invece delle kill.** Lo Stardust scala le abilità nel lungo periodo, ma se il carry avversario è one-shottabile a 30% HP, finiscilo. Un carry morto vale più di 5 Stardust.
- **Dimenticare che E tira verso il centro.** La **E** trascina i nemici al centro della zona — tirali DENTRO la tua squadra, non fuori. Una E mal piazzata può salvare il carry avversario tirandolo lontano dalla tua front line.
- **Pushare la wave con Q in lane.** **Q** spinge troppo lentamente e brucia mana. Usa **E** per pulire i caster minion, poi last-hitta i melee con auto-attack. Tieni la **Q** per i trade e l'harass.

## Suggerimento avanzato

La catena **Q-W-Q** è la tecnica che separa i giocatori di Aurelion Sol. Cast **Q** su un champion, poi subito **W** nella stessa direzione in cui sta scappando. Siccome **W** rimuove il limite di durata del channel di Q mentre voli, continui a fare danno in modo continuo nell'aria — e **Q** può essere ri-castata mid-volo per una seconda istanza se il target originale muore e ce n'è uno nuovo a portata. In pratica ti permette di committare a una kill da molto lontano: **W** vola per una distanza lunga (circa una schermata e mezza) e durante quel volo la tua **Q** continua a colpire davanti a te, quindi la zona di minaccia è la somma dei due range. Sulla takedown parte del cooldown di **W** viene rimborsata, così re-engagi il fight successivo quasi subito.
