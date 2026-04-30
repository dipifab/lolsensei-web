---
title: "Graves Jungle Build & Guida — Patch 16.9"
slug: "graves-jungle"
language: "it"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Graves jungle per League of Legends Patch 16.9: starter kit, build lethality, matchup chiave, power spike, errori comuni e una chiusura tecnica."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Meccanica fucile a pompa: ogni colpo spara 4 pellet in cono che non passano i minion. Più pellet su un non-campione lo respingono."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Proiettile lineare che esplode dopo 2s, o all'istante se tocca il muro — rimbalza dai muri. Strumento principale di clear e angle-shot."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Lancia una nuvola di fumo che blocca la vision e rallenta i nemici colpiti dall'impatto. Usala per disengage, denying ward, o velare i gank."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Dash corto in avanti con buff di armatura (più stack se vai verso un campione). Le auto abbassano il CD e refreshano il buff. Ha 2 cariche."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Colpo esplosivo a lungo raggio: prende il primo campione e poi esplode in un cono dietro di lui. Burst spike ai livelli 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro hard CC mono-bersaglio (Malzahar R, Skarner R, Warwick R) — lo spell shield blocca il lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "quando sei avanti e gli avversari non stackano armatura presto — l'execute sotto il 5% HP chiude i lead"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro burst AP pesante (Diana, Syndra, Lux mid) — lo shield della lifeline trasforma un one-shot in un trade sopravvivibile"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn) — il bleed spalma il danno e ti dà tempo di reagire"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro 3+ campioni con hard CC (es. Leona + Lissandra + Sejuani) — la tenacity riduce la durata di stun e root"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball di lethality tramite invade e gank prima del minuto 14. Una volta su Eclipse contesta ogni obiettivo — il fucile fonde uno squishy in due colpi e la E ti restituisce la finestra di trade."
  weakness: "Mana-hungry early. La finestra di reload del fucile punisce il posizionamento avido, e fondi sotto catene di hard CC perché non hai safety oltre al buff di armatura della E."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Panoramica

Graves è un marksman che vive nel jungle, non in bot lane. Le auto-attack a fucile e il buff di armatura cucito dentro **Quickdraw (E)** gli permettono di trade con tank e bruiser a viso aperto, restando però in grado di bursare le squishy con la lethality. Tutto il kit è costruito attorno al **tempo**: clear veloce, invade a cooldown, e barattare la priority del jungle per kill prima che le carry avversarie scalino.

Il game plan è semplice: nei primi 8 minuti sei il duellante più forte sulla mappa, e va sfruttato. Power-farma un clear pulito, guarda la mappa, e cammina nella lane che ha Flash giù o HP basso. Dopo Eclipse contesti gli obiettivi; dopo tre item diventi uno skirmisher da teamfight che cancella la backline da un flank — ma **non** splitpushi late, perché un Graves preso da solo al minuto 30 è a una catena di CC dalla morte.

## Build Consigliata

**Item iniziali:** Smite + **Hailblade** per un clear più veloce e danno AOE sulla **R**, con **Refillable Potion**. Prendi Emberknife solo se il team ha bisogno di pressione di counter-jungle dal red side avversario (clear più lento, più sustain).

**Item core (nell'ordine):**

1. **Eclipse** — burst+shield+omnivamp, il primo item più pulito per i jungler skirmisher. Lo shield si attiva dopo due colpi, e questo si allinea col ritmo del fucile.
2. **Plated Steelcaps** contro team AD-pesanti / **Mercury's Treads** contro 3+ hard CC. Default Plated.
3. **Youmuu's Ghostblade** — l'attivo di movement speed più la lethality lo rendono il tuo strumento di gap-close e di chiusura del gank.
4. **Serylda's Grudge** — scaling di armor pen per il late, quando i nemici iniziano a stackare armatura; lo slow su bersagli danneggiati ti tiene in range.

**Item situazionali:**

- **Edge of Night** — contro ult mono-bersaglio a lock-on (Malzahar, Skarner, Warwick).
- **The Collector** — quando sei avanti e vuoi pressione di execute sulle squishy.
- **Maw of Malmortius** — contro burst AP pesante (Diana, Syndra, Lux mid).
- **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn). Il danno che incassi viene spalmato come bleed lento invece di arrivare istantaneo.
- **Bloodthirster** — late game quando ti serve un quinto item da danno con shield e lifesteal incorporati.

**Stivali:** Plated Steelcaps di default. Berserker's Greaves solo se il team avversario ha zero minacce di CC e vuoi specificamente scaling di attack speed — pick di nicchia su Graves.

**Skill order:** Massimizza **Q** per primo (clear e danno), **E** per secondo (più dash grazie al CD ridotto per rank), **W** per ultimo (lo slow scala bene già a rank 1). **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Domination** con **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Secondario **Precision** con **Triumph** + **Coup de Grace** per pressione di snowball, oppure **Resolve** con **Second Wind** + **Revitalize** se ti aspetti di essere pokato nel jungle.

## Matchup chiave

- **Hecarim:** Ti supera dopo 3 item ma perde gli skirmish pre-6 se E-rolli in pattern di auto spaziate. Mettilo sotto pressione prima del minuto 9, poi tirati indietro — non duellarlo dopo il suo primo item.
- **Lee Sin:** Matchup di tempo speculare. Entrambi vincete i primi 6 livelli; il jungler con più gank vince. Tracka il cooldown della sua **Q** e le finestre di W-jump; se la sua Q è giù, il tuo fucile vince il trade netto.
- **Master Yi:** Lo devi killare prima del suo livello 6 + primo item. La **W** sopra di lui durante la **Q** active gli blocca la vision e perde il lock — allenala in Sala Allenamento finché non diventa riflesso.
- **Vi:** Tanky e gank-heavy. Perde gli skirmish prolungati se hai cariche di E; non farti prendere in aria dalla sua **Q** — è un all-in garantito per il suo team.
- **Diana:** Snowball pesante post-6. Salva **W** per il windup della sua **R** (non spezza l'engage, ma lo slow all'impatto allunga il commit e dà al tuo team il tempo di peelare). Costruisci **Maw of Malmortius** come secondo item da danno.

## Power spike & condizioni di vittoria

- **Livello 3:** Kit completo sbloccato. Il tuo pattern di gank è **E in range -> Q sul muro dietro di loro -> reset auto -> W slow sul percorso di ritirata**. Con le rune Hail of Blades, è una kill su qualsiasi squishy al 60% HP e senza Flash.
- **Livello 6:** **Collateral Damage** sblocca l'execute a lungo raggio. Il proiettile prende il primo campione e poi esplode in cono — flasha un bersaglio contro un muro e ti garantisci sia il colpo diretto sia il danno del cono.
- **Timing Eclipse (~ minuto 9):** Vinci ogni fight contestato sugli obiettivi. Forza un fight su Scuttle, Drake o Voidgrub in questa finestra — oltre il minuto 12, i jungler che scalano (Hecarim, Master Yi) iniziano a pareggiare il tuo ritmo.
- **3 item (~ minuto 22):** Diventi un flanker da teamfight. Il tuo lavoro è flankare la backline avversaria (la carry squishy, quella più lontana dal loro tank) e bursarla prima che reagisca. Non engaggi mai dal frontline.

## Errori comuni

- **Sprecare le cariche di E per scappare durante il clear.** **E** ha 2 cariche e il cooldown cala ogni volta che fai auto-attack. Bruciare entrambe le cariche per schivare un singolo skillshot ti lascia senza gap-close per i 12 secondi successivi. Salvane sempre almeno una.
- **Q nel muro dietro di te per sbaglio.** **End of the Line** esplode istantaneamente sul terreno. Se spari Q con il muro alle spalle, il proiettile esplode dietro di te per zero danno. Controlla sempre il facing prima di castarla.
- **Smoke Screen su te stesso per sustain.** **W** non cura. Il valore è lo slow all'impatto — gettala sul percorso di ritirata della carry avversaria, non sopra di te.
- **R da full range senza setup.** Il proiettile a lungo raggio è schivabile. Usa **R** point-blank dopo un Flash, oppure pre-firata come finisher quando il nemico ha già committato Flash. Non aprire i fight con la R, a meno che non stiano camminando in linea retta nella fog.
- **Splitpush al minuto 30.** Graves late non ha escape se uno Skarner/Warwick/Malzahar atterra la propria R. Raggruppati con il team dopo il minuto 25 e gioca flank a distanza di teamfight, non 1v1 in una side lane.

## Suggerimento avanzato

La tecnica del **E-buffer-roll**: mentre sei a metà del windup di Q o di un'auto-attack, accoda un input di **Quickdraw**. Il dash parte nell'istante in cui il windup termina, quindi ottieni il danno dell'auto/Q **e** ti riposizioni nello stesso ciclo di animazione — mantieni l'uptime di DPS mentre schivi o insegui. La finestra di recovery in cui non puoi muoverti è circa 0.4 secondi senza questo trick; con il buffer roll è quasi zero. Allenala sui dummy della Sala Allenamento finché il ritmo dello stutter-step non diventa auto-attack → E → auto-attack senza pause.
