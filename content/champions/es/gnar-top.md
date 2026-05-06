---
title: "Gnar Top Build & Guía — Patch 16.9"
slug: "gnar-top"
language: "es"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Guía de Gnar top para League of Legends Patch 16.9: gestión de Rage Mini/Mega, build bruiser, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "En combate Gnar genera Rage. Al máximo, su próxima habilidad lo transforma en Mega Gnar: más HP, melee, nuevas habilidades, sin R hasta volver a Mini."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini: bumerán de largo alcance que ralentiza y vuelve; recógelo y reduces el cooldown. Mega: roca corta que se detiene en el primer objetivo y ralentiza el área."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini: cada tercer ataque/hechizo hace daño bonus y otorga move speed. Mega: se yergue y golpea el área frontal, aturdiendo a los nemigos en impacto."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini: dash-salto que rebota más lejos si cae sobre una unidad (minion, ward, monster, champion). Mega: aterrizaje pesado que daña el área, sin rebote."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Solo Mega. Lanza todo a su alrededor en una dirección elegida; los que chocan contra un muro quedan stunneados y reciben daño bonus. Todo el game plan en un botón."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia desde Plated Steelcaps si el enemigo tiene 2+ hard CC o daño mágico fuerte (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra tops AP (Kennen, Vladimir, Rumble): magic resist + on-hit mágico para que Mini Q+AA siga doliendo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst mágico fuerte (roams Syndra, Vex, doble AP): el escudo lifeline bloquea la ventana de one-shot"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contra DPS de crit (Yasuo, Tryndamere, Caitlyn fed): reduce el daño crítico recibido"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra equipos con dos curanderos (Soraka + Aatrox, Yuumi + Mundo): grievous wounds parte el healing"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "cuando splitpusheas una side lane solo tras Trinity: bonus a torres, minions y stats en solitario"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Acumula Rage en lane con poke de Mini Q, luego transfórmate en Mega antes de un fight al que te comprometes. Usa R como engage con wall stun para partir el equipo enemigo en teamfights y peleas por objetivos."
  weakness: "Sin dash y con shapeshift forzado. Si pasas a Mega lejos del equipo no puedes volver con Hop; si quedas Mini en teamfight no tienes R. Los tops a rango pokean a Mini Gnar sin respuesta."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp procca cada 4 segundos en melee — perfecto para Mega Gnar entrando en una frontline. Demolish convierte una wave pusheada en placas gratis, Second Wind cura el poke ranged contra Mini, Overgrowth escala HP hasta el late."
    secondary_rationale: "Precision secondary: Triumph regenera HP en cada takedown (enorme cuando una Mega R contra muro logra una kill), Legend: Alacrity añade attack speed para que el tercer Hyper proc de Mini llegue antes en cada trade."
    secondary_alternative: "Contra matchups de poke ranged (Vayne, Quinn, Kennen, Teemo) cambia Precision por Sorcery con Nimbus Cloak (move speed tras summoner spell) y Gathering Storm (escalado AD a largo plazo) para llegar al rango Mega y ganar el late aguantando más."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts melee sin poke ranged"
      reason: "Mini Gnar Q tiene 1100 de rango y ralentiza. No te tocan hasta que les caminas encima, así que acumulas Rage seguro y te comprometes solo con Mega para disengage con R contra muro."
    - examples: ["aatrox", "renekton"]
      archetype: "Bruisers de corto alcance con ventanas de all-in finitas"
      reason: "Su poder vive en las trade windows early. Mini Gnar esquiva el all-in con E-hop sobre minions, luego invierte el match cuando llega Mega online con R stun + Wallop encadenado."
    - examples: ["nasus", "yorick"]
      archetype: "Juggernauts de scaling sin amenaza de kill early"
      reason: "Empujas la wave con Mini Q+W y les niegas farm bajo torre; no pueden castigarte porque no tienen gap-close que supere tu rango de boomerang."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Tops a rango que pokean a Mini Gnar"
      reason: "Mini Gnar no tiene sustain ranged y su único trade seguro es Q desde max range. Ellos auto-atacan desde dentro de ese rango y lo empujan bajo torre sin ventana de respuesta."
    - examples: ["fiora", "camille"]
      archetype: "Anti-tanks con true damage %HP o dive con hard CC"
      reason: "Los vitals de Fiora trituran el HP de Mega Gnar más rápido de lo que él pega; la E hookshot de Camille pinea a Mini Gnar a un muro para un all-in del que no tiene dash para escapar."
    - examples: ["malphite", "ornn"]
      archetype: "Tank engagers que cancelan tu ángulo de R"
      reason: "Hacen flash-engage en tu back line antes de que puedas transformarte y elegir el muro. Una vez aterriza su initiation, tu R pasa a ser peel (empujar enemigos lejos de tus carries) en lugar del pickoff (kill aislado a un único objetivo) ganador."
---

## Resumen

Gnar es un fighter top que cambia de forma entre dos modos según una barra de Rage que se llena al usar habilidades o recibir daño. **Mini Gnar** es un poker ranged (poke = daño a distancia para desgastar HP sin comprometerse) con un bumerán largo y un hop que se reinicia sobre unidades; **Mega Gnar** es un bruiser melee con stun, daño AOE (area of effect: daño en zona, no a un solo objetivo) y la mejor ulti de bajo cooldown del juego cuando se usa cerca de un muro. Todo el champion gira alrededor del timing de la transformación: Mini en lane para pokear y farmear seguro, Mega cuando te comprometes a un fight (commit = ir a por todas, sin echarse atrás) donde R puede clavar enemigos contra el terreno.

El game plan en una frase: acumula Rage como Mini, transfórmate cerca del equipo enemigo, lanza R contra un muro para stunnear (inmovilizar ~1.5 segundos sin poder actuar) varios objetivos, luego limpia mientras tu equipo te sigue. Si ulteas en campo abierto desperdicias tu única win condition (lo único que el champion debe hacer bien para ganar). Si pasas a Mega solo en lane arriesgas morir porque el escape de Mini (Hop rebota más lejos sobre minions) desaparece.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La regeneración de HP de Doran's Shield está pensada para el poke ranged sostenido que cada matchup de Mini Gnar te lanza.

**Core items (en orden):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primer item cada partida. Construido desde Sheen (un componente que añade daño bonus a tu próximo basic attack tras lanzar una habilidad); Trinity activa ese proc (el disparo del bonus damage) en cada Q, sea Mini o Mega. El move speed deja a Mini kitear (moverse hacia atrás mientras atacas, manteniendo distancia), y el attack speed acelera la llegada de Hyper (la pasiva del tercer golpe de Mini).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto contra DPS físicos (la mayoría de matchups top). Reducen el daño de basic attack recibido.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP bonus que crece con el AD bonus del resto de tus items, más un escudo único que se activa alrededor del 30% HP. Mantiene a Mega Gnar vivo lo suficiente para soltar R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — convierte el burst físico recibido en un sangrado lento (daño repartido en los siguientes segundos, no instantáneo). Te da tiempo para reaccionar en un fight al que te comprometiste como Mega.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — armor + slow de attack speed AOE (el slow afecta a todos los enemigos en un área a tu alrededor, no solo uno). Devasta a carries de auto-ataque (Vayne, Tristana, Kog'Maw) en cuanto Mega R los clava contra un muro.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde Plated Steelcaps contra CC pesado (crowd control: stuns, roots, silences que te impiden actuar) o comps AP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra tops AP (Kennen, Vladimir, Rumble). Añade magic resist y on-hit magic damage (un extra de daño mágico aplicado en cada basic attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst mágico fuerte (roams de Syndra, Vex, comp doble AP). El escudo lifeline se activa al bajar a HP bajos absorbiendo daño mágico, y bloquea la ventana de one-shot.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contra DPS de crit (Yasuo, Tryndamere, Caitlyn fed).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra equipos que apilan dos fuentes de healing. Aplica grievous wounds (un debuff que parte el healing enemigo a la mitad por unos segundos).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — cuando splitpusheas una side lane solo tras Trinity Force. Splitpush = empujar una side lane en solitario mientras tu equipo juega en otro sitio, forzando al enemigo a mandarte a alguien.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el enemigo tiene 2+ fuentes de hard CC o daño AP fuerte.

**Skill order:** Sube **W** primero al máximo (el daño del tercer golpe Hyper escala más por nivel), luego **Q** (slow más largo + CD más bajo para el poke), y **E** la última. Pon **R** en niveles 6, 11, 16.

**Runes:** Primary **Resolve** con **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** con **Triumph** y **Legend: Alacrity**.

## Matchups clave

- **Sett:** Lane gratis. Mini Q tiene más rango que cualquier cosa que él tenga; nunca camines dentro de su W (Haymaker). Cuando llegue, haz Hop sobre un minion de la wave para rebotar de vuelta a la seguridad.
- **Aatrox:** Empate pre-6, le outscaleas (te vuelves más fuerte que él según pasa la partida). Evita el sweet spot de su Q (el centro luminoso del swing donde hace daño extra). En cuanto tengas Mega R + un muro detrás de él, pierde cada all-in (fight a muerte) que inicie.
- **Vayne:** Hard counter. Quédate atrás, last-hitea minions con Q desde max range, asume que la lane te bullea (no puedes responder sin morir). Roam (vete a ayudar a otra lane) a mid o invade la jungla enemiga cuando Mega esté listo.
- **Camille:** Pierdes la lane, ganas el late. Evita el rango de su E hookshot cuando seas Mini (te clava al muro y quema tu Flash — Flash es un summoner spell que te teletransporta una corta distancia con cooldown de 5 minutos, tu botón único de emergencia — luego vuelve a engagear). Guarda tu E para después de que ella daseé encima, nunca antes.
- **Malphite:** La lane está bien — Mini Q lo kitea para siempre — pero ojo con el level 6. Hace flash-ulti a tu back line (los carries detrás del equipo) en teamfights, y eso mata tu ángulo de R. Dile a tu equipo que se separe para que su ulti no pille a dos a la vez.

## Power spikes y condiciones de victoria

- **Level 2:** Con Q + W ganas la mayoría de short trades (intercambios breves de golpes en lane, no fights completos) contra bruisers melee. Camina a la wave, Q al enemigo a través de minions, y tu tercer basic attack dispara el bonus damage de Hyper.
- **Level 6:** La primera Mega R desbloquea un tower dive (entrar bajo su torre para matar a pesar de los disparos) sobre un enemigo low-HP si acumulas Rage hasta Mega antes de cruzar.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completo (~ minuto 12-14):** Tu mayor power spike (el momento en que te vuelves notablemente más fuerte y debes buscar fights). Mini Q + auto-attack pega como un camión; las combos Mega Q + W one-shot a los squishies (campeones de mucho daño y poca defensa, tipo ADCs y mages) post-stun.
- **Fight Mega R con 3 ítems (~ minuto 22-26):** Sterak's + Trinity + boots online significa que Mega Gnar puede atravesar una frontline (los tanks y bruisers que abren el fight desde delante) y encadenar R sobre la back line (los carries que hacen daño desde atrás) para un stun a 2-3 personas. Fuerza aquí los fights agrupados por objetivos (peleas por drake/baron donde ambos equipos están juntos).

## Errores comunes

- **Pasar a Mega en lane sin un fight listo.** Mega no tiene escape (sin dash de Hop) y se queda Mega ~15 segundos antes de volver a Mini. Si tu jungler no viene y no te comprometes a un fight, mantén Rage al 80-90%, pingea atrás al equipo, y deja que la barra decaiga.
- **Lanzar R en campo abierto.** Sin un muro detrás del objetivo, GNAR! es solo un knockback (un empujón forzado que aleja a los enemigos un poco) que interrumpe sus dashes y nada más. Reposiciónate primero siempre; el medio segundo que gastas alineando el muro vale un stun multi-objetivo.
- **Hacer Hop hacia dentro en vez de hacia fuera.** Mini E es tu escape, no tu herramienta de engage en la mayoría de matchups. La única vez que E hacia delante es correcto es cuando Rage se está llenando y tienes un minion claro sobre el que rebotar para volver.
- **Spamear W en lane para "forzar" el bonus damage de Hyper.** El bonus del tercer golpe se activa con cada basic attack Y con cada hechizo. Trade en patrones de dos habilidades + un basic attack, no tres basic attacks seguidos que te empujan fuera de posición.
- **Transformaciones a mitad de fight que no controlas.** El daño recibido también llena Rage. Si te tiras atrás al 95% de Rage, el próximo basic attack a un minion te transforma en Mega en tu jungla sin enemigo al que R. O te comprometes a un fight antes, o vuelves a base.

## Consejo avanzado

Usa Hop para rebotar sobre **wards y trinkets** cuando tu wave ha desaparecido. Una ward es el pequeño ojo mágico que pones en el mapa para vision; la amarilla básica es la **Stealth Ward** trinket que lleva tu support, y la **Control Ward** es la ward rosa que los enemigos ponen para negar vision. Cada una de estas cuenta como una unidad en la que Mini Gnar puede caer para el segundo hop extendido. Pre-coloca una Stealth Ward hacia la entrada de la jungla enemiga, luego haz E sobre ella para extender tu rango ~400 unidades y sorprender con una Q a un enemigo haciendo counter-jungling. El mismo truco te salva de ganks: salta con E sobre tu propia ward al tribush (el grupo de tres bushes cerca de cada lane) y el ganker no tiene follow-up.
