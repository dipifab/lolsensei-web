---
title: "Akshan Mid Build & Guida — Patch 16.9"
slug: "akshan-mid"
language: "it"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Guida Akshan mid lane per League of Legends Patch 16.9: build di lethality core, rune Press the Attack, matchup chiave, power spike, errori comuni e un consiglio finale."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Assassino lethality"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "Ogni 3° colpo infligge danno bonus e dà uno scudo se atterra su un campione. L'auto-attack spara un secondo colpo a danno ridotto, cancellabile per ottenere Move Speed."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Skillshot a boomerang che fa danno fisico in andata e ritorno. La gittata si estende ogni volta che colpisce un nemico, quindi una linea pulita attraverso i minion arriva più lontano del previsto."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Passiva: marchia come Scoundrel chi uccide alleati. Uccidere uno Scoundrel resuscita gli alleati uccisi e dà oro bonus. Attiva: camouflage e Move Speed verso gli Scoundrel (rotta fuori da brush/terreno)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Rampino sul terreno; Akshan rotea sparando al nemico più vicino, scende a comando o all'impatto. Il cooldown si resetta sui takedown — incatena un secondo swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Aggancia un campione e accumula proiettili per ~5 secondi. Rilascio: spara tutti i proiettili al primo bersaglio colpito; il danno scala con HP mancanti, è uno strumento di execute."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC point-and-click single-target (Lissandra R, Malzahar R, Twisted Fate carta gialla) — lo spellshield blocca un cast ogni 30s"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Annie, Veigar, Syndra) — scudo magico + lifeline ti salva da una rotazione di delete"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro composizioni che impilano cure (Soraka mid, Vladimir, Aatrox top) — applica Grievous Wounds su auto e su ogni proiettile R"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro comp di assassini (Talon + Zed double AD) — seconda vita per il main carry che deve channellare R allo scoperto"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "primo item alternativo contro comp squishy che snowballi con pickoff: l'auto energized slow incolla target che la R sbaglierebbe"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball della lane con trade da 3 colpi e Press the Attack, poke con Q a max gittata, poi converti il lead con roam tramite E dal minuto 6 e finisci gli squishy con R durante gli obiettivi."
  weakness: "La E si aggancia solo al terreno: posizionamento aperto a centro mid lo lascia senza reset di swing. CC point-and-click single-target e Wind Wall cancellano sia il channel della R sia il poke di Q."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Mage artillery immobili senza dash"
      reason: "Stanno fermi a scalare o a pokare; la E di Akshan attorno alla parete di mid chiude la distanza e incatena Q + 3-hit della passiva + R di execute prima che finiscano un cast."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mage con un singolo tell di escape"
      reason: "Akshan fa baitare lo stun di Annie, la Q di Lux o la R di Ahri, poi swinga con E sul recovery frame per un trade da 3-hit e la passiva scudata gratis."
    - examples: ["senna", "ziggs"]
      archetype: "Carry da retroguardia con peel debole"
      reason: "La R di Akshan locka a 2500 di range e ignora gran parte del peel; sotto il 50% HP i proiettili eseguono attraverso il loro kit anche dall'altra parte del river."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Mage con CC point-and-click"
      reason: "Lo stun o suppress lock-on cancella il channel della R, rompe lo swing della E a metà rotazione e rivela il camouflage della W — Edge of Night blocca un cast ogni 30s ma non lo salva due volte."
    - examples: ["yasuo", "yone"]
      archetype: "Champion con Wind Wall"
      reason: "Il Wind Wall blocca la Q boomerang, ogni auto durante lo swing di E e ogni proiettile della R; un singolo Wind Wall ben piazzato ribalta il trade e gli permette di all-in senza prendere danno."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Assassini mobili con multi gap-close"
      reason: "La E di Akshan si aggancia solo al terreno, quindi non può swingare attraverso un assassino fed in campo aperto. Lo shroud di Akali rompe il targeting, Fizz scappa con E sopra le auto, la R di Diana lo incatena a metà channel."
---

## Panoramica

Akshan è un ibrido marksman/assassino con un rampino per il reposition, una stealth legata ai marchi di vendetta e una ulti di execute (un'abilità che uccide automaticamente nemici sotto una certa soglia di HP) basata sugli HP mancanti. Il suo kit si esprime mid lane perché la geometria delle pareti attorno a river e tri-bush dà a ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** terreno costante a cui agganciarsi, e perché ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** supera in push la maggior parte dei mage una volta che sale di livello. È un campione a bassa mobilità in campo aperto, ma ad alta mobilità vicino ai muri — quindi tutta la partita ruota attorno a scegliere fight in cui la mappa lavora per te.

Akshan scala con item di **lethality** — equipaggiamento che converte il danno fisico in penetrazione di armatura bonus, perfetto per cancellare target squishy come mage e ranged carry, ma poco efficace contro full tank. Fa danno fisico (AD), non magico.

Il piano partita è semplice nella forma e duro nel timing: shova la wave (spingi i tuoi minion contro la torre nemica) con **Q**, cerca un trade da 3 colpi (un breve scambio di danno in cui ti committi qualche colpo e ti tiri indietro, non un tentativo di kill completo) che attivi lo scudo della passiva ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**, poi roama (lascia la tua lane per aiutare bot o top) tra il minuto 6 e 12 per convertire la prio (il vantaggio in lane che ti permette di andartene senza perdere minion o torre) in kill che resettano la **E**. Lo skill expression sta in due punti: (1) far rimbalzare la **Q** su un tank della frontline (i bruiser/tank che aprono i fight) per arrivare al carry della backline (gli squishy che fanno danno da dietro), e (2) leggere il momento giusto per il channel della **R** — troppo presto e ti becchi uno stun a metà channel, troppo tardi e il target è curato sopra la soglia di execute.

## Build Consigliata

**Item iniziali:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Apertura standard — l'AD più il lifesteal nutre lo scudo della passiva nei trade da 3 colpi.

**Item core (nell'ordine):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primo item di lethality e l'attivo di Move Speed trasforma i roam in side lane in kill. Lo spike (momento in cui la tua forza fa un salto netto) più grosso della build.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots: la passiva (ogni 3° colpo) si proca più veloce e la raffica della **R** stringe gli intervalli.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — aggiunge AOE di waveclear (un colpo che danneggia tutta la wave di minion in una volta), un attivo a dash che concateni dopo la **E**, e altra lethality. Miglior secondo item nelle build di lethality in questa patch.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — la sua passiva uccide ogni campione sotto il 5% di HP, perfettamente allineata con lo scaling sugli HP mancanti della **R**: i target che la R lascerebbe a 1 HP muoiono comunque.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — finisher con armor pen contro il tank avversario late. Compralo invece di un item difensivo se la partita dura più di 35 minuti.

**Item situazionali:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro CC point-and-click single-target (CC che si blocca su un target senza poter essere schivato: Lissandra R, Malzahar R, Twisted Fate carta gialla). Lo spellshield (una barriera monouso che assorbe la prossima spell nemica su di te) blocca un cast ogni 30s.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contro burst AP pesante (danno magico in una rotazione che può cancellarti in un secondo: Annie, Veigar, Syndra). Scudo magico + lifeline (un buff di cura e attacco che si attiva quando scendi sotto ~30% HP) ti tiene in vita abbastanza per rispondere con la **R**.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro composizioni che impilano cure (Soraka mid, Vladimir top, Aatrox top). Applica Grievous Wounds (debuff che dimezza le cure ricevute dal target) sulle auto-attack e su ogni proiettile della **R**.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro comp di assassini (Talon + Zed double AD = due forti minacce di burst da danno fisico). Una seconda vita vale più di uno slot di DPS quando sei il carry principale che channela **R** allo scoperto.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — primo item alternativo contro composizioni double-mage squishy che intendi snowballare (costruire un vantaggio di kill che cresce a valanga in altre kill) con pickoff (catturare un nemico isolato alla volta fuori dai teamfight). L'auto energized applica uno slow forte che incolla il carry in fuga che la **R** altrimenti sbaglierebbe.

**Stivali:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default per l'attack speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** solo contro team con 3+ fonti di hard CC (stun, root, knock-up che ti bloccano i tasti).

**Skill order:** Massimizza **Q** per primo (waveclear e DPS principale), **E** per secondo (per il danno per colpo dello swing nell'all-in), **W** per ultimo. Punto in **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Press the Attack** (dopo 3 colpi su un campione, il tuo prossimo danno è amplificato — perfetta per la passiva), **Presence of Mind** (rifila mana sui takedown), **Legend: Alacrity** (attack speed extra), **Coup de Grace** (più danno sotto il 40% HP del nemico). Secondario **Sorcery** con **Absolute Focus** + **Gathering Storm**, oppure **Inspiration** con **Magical Footwear** (stivali gratis al minuto 12) + **Cosmic Insight** se vuoi il gold risparmiato per uno spike di primo item più precoce.

## Matchup chiave

- **Yasuo / Yone:** Matchup duro. La loro **W** Wind Wall (un muro verticale di vento che blocca tutti i proiettili in arrivo non-melee per ~4 secondi) blocca la **Q**, le auto durante lo swing di **E** e ogni proiettile della **R**. Tieni la **Q** finché non hanno bruciato Wind Wall su un minion o sul jungler, poi committi. Salva ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** come terzo item swap contro Yasuo (vs il knock-up della **Q** — un'abilità che ti lancia in aria per un attimo, bloccandoti i tasti).
- **Zed:** Pari o leggermente favorevole in lane. Il trade da 3 colpi supera il poke Q-W di Zed pre-6, ma la sua **R** lo rende untargetable (non selezionabile da spell o auto) per un attimo, schivando il lock-on della tua R. Tieni **E** per il suo shadow swap e usala per fare counter-jump.
- **Lissandra:** Hard counter. La sua **R** è point-and-click e ti cancella il channel della **R** a metà rotazione. Compra ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** prima del secondo item, mai **R** in faccia senza spellshield up.
- **Annie:** Attenzione a livello 6. Il suo all-in con stun batte il windup della tua **R** se ti pesca in lane. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** come terzo item trasforma una kill in 1 rotazione in un trade sopravvivibile.
- **Veigar:** Favorevole. La sua cage è abbastanza lenta che la **E** swinga fuori in pulizia, e non ha escape quando lo all-in dopo il livello 6. Tieni **R** dopo che ha usato la **E** cage su una wave.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + **E** hai il primo all-in: **Q** sulla wave per estendere la gittata del boomerang, **E** su un muro laterale, swing per le auto, **Q** di ritorno sulla via d'uscita. È lo spike di livello 2 più grosso della corsia mid in questa patch.
- **Livello 6:** La prima **Comeuppance** sblocca pressione di execute in side lane. Con sola ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, un fight a river senza ward su un target sotto il 50% HP è kill garantita.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completa (~ minuto 9-11):** Il controllo della wave si ribalta. Attiva il Ghostblade off cooldown a ogni roam — un gank in side con **E** + **Q** + trade scudato da 3-hit converte quasi sempre su un avversario senza MR comprata.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector online (~ minuto 22-26):** I target sotto il 6% HP muoiono al passive dell'item anche se la **R** li avrebbe lasciati a 1 HP. Forza i fight obiettivo qui e channela **R** appena un backline appare in vista.

## Errori comuni

- **E nel mid aperto.** La **E** si aggancia solo al terreno: se la swingi verso un campione e non c'è un muro in linea, il cast fallisce o ti aggancia al muro sbagliato e ti sbalza nella loro squadra. Pre-pianifica sempre il muro prima di premere il tasto.
- **Channellare la R davanti alla squadra avversaria.** 5 secondi di windup (il tempo che passi a channellare prima che parta il rilascio) in vista sono 5 secondi di tiro al bersaglio per qualunque CC point-and-click. Channela **R** dalla fog of war (la zona oscura della mappa senza ward, dove i nemici non ti vedono) o dietro un muro, poi esci a rilasciare i proiettili nell'ultimo frame.
- **Cancellare il colpo bonus quando va lasciato partire.** Il secondo auto della passiva fa ~50% di danno ridotto, ma conta lo stesso per il counter dei 3 colpi. In un trade da kill non cancellare — il Move Speed vale meno che chiudere la passiva e prendere lo scudo.
- **Q nuda di poke senza rimbalzo su minion.** La **Q** a max range senza nulla in mezzo è la peggior versione della spell. Mandala sempre attraverso una wave o un minion a basso HP perché la gittata si estende e il percorso di ritorno resti allineato sul prossimo champion.
- **Going Rogue camouflage in campo aperto.** L'attiva si rompe in ~1 secondo se non sei in brush o attaccato a un muro. Usata in lane aperta non fa quasi nulla — riservala per un flank (entrare in un fight da un lato che il nemico non sta guardando) attraverso tri-bush o brush di river.

## Suggerimento avanzato

Fai rimbalzare la ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** su un tank della frontline per arrivare al carry dietro. Ogni champion colpito dal boomerang estende la gittata residua, quindi una **Q** che parte sul bruiser di frontline al limite della vista continua il viaggio attraverso il carry e ritorna verso di te, danneggiando due volte lo stesso target sul percorso di ritorno. Allena l'angolo in custom contro i bot: posizionati in modo che il boomerang esca dal primo champion all'angolo che vuoi per il secondo bersaglio, e la gittata concatenata raggiungerà un backline che si credeva al sicuro dietro la squadra.
