---
title: "Bel'Veth Jungle Build & Guía — Patch 16.9"
slug: "belveth-jungle"
language: "es"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Guía de Bel'Veth jungla para League of Legends Patch 16.9: starter kit, build core on-hit, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher on-hit"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Cargas permanentes de attack speed por large minions, monstruos de jungla y takedowns sobre champions. Cualquier habilidad lanzada da también un buff corto de attack speed."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Dash corto que daña a quien atraviesa. Cada una de las cuatro direcciones tiene su propio cooldown que baja con la attack speed."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Coletazo que hace knock-up y slow. Si impacta a un champion, resetea al instante el Void Surge en esa dirección."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channel de tajos sobre el enemigo con menos HP. Da damage reduction y lifesteal durante el canal; reactívalo para cerrarlo antes."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Pasiva: cada segundo auto sobre el mismo target añade true damage y se acumula sin límite. Activa: consume un Void Coral (de takedown sobre champion o epic monster) para entrar en true form con HP, range y attack speed extra."
      dd_spell_id: "BelvethR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra comps AP pesadas (Karthus, Ahri, Lissandra) — magic resist y on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "cuando vas por detrás o contra poke comps — el primer auto critea y cura, recuperas tempo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con curación apilada (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "cuando splitpusheas una side lane solo contra disengage comps — daño extra a torres y minions"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP single-target (Veigar, LeBlanc, Syndra mid) — magic shield bajo el 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Pégate a un único target con los Q dashes y el true damage acumulado de R hasta tirarlo. Fuerza fights al nivel 6 con R online, mejor tras un Rift Herald o Baron para una true form más larga."
  weakness: "El hard CC (stuns, knock-ups, suppress) cancela los Q dashes y la deja clavada. Sin R activa o sin un target al que comprometerse, tiene poca amenaza a distancia y se hunde contra mucho peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank junglers sin dash"
      reason: "El patrón on-hit de Bel'Veth con Terminus les revienta armor y magic resist; se queda pegada con Q dashes alrededor de su hitbox y ellos no tienen forma de hacer disengage."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishies"
      reason: "Los cuatro Q dash cierran cualquier intento de kite (kite = retirarse mientras sigues atacando): llega a melee antes de que completen una rotación con sus herramientas a distancia."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers scaling sin CC temprano"
      reason: "Gana las skirmish iniciales en jungla (skirmish = pelea 1v1 o 2v2 en la jungla) antes de que lleguen a su power spike, y convierte la ventaja en objetivos."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Junglers con hard CC point-and-click"
      reason: "El Q dash de Bel'Veth no esquiva habilidades targeted. Cuando come una R de Sejuani o de Vi queda clavada y su patrón on-hit se corta en seco."
    - examples: ["rammus"]
      archetype: "Tanks anti-attack-speed"
      reason: "La pasiva de espinas de Rammus y su W steroid castigan sus auto-attacks sostenidos: se hace daño sola intentando DPSearle mientras él controla los objetivos."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers fuertes early con invade"
      reason: "El primer clear de Bel'Veth está bien pero no apabulla; la invaden a nivel 3 antes de que tenga la Q maxeada, la matan una vez y snowballean (snowball = pequeña ventaja inicial que crece con el tiempo)."
---

## Resumen

Bel'Veth es una fighter on-hit (= su daño principal sale de los auto-attacks y de los efectos de items que se activan en cada golpe, no de las habilidades) que convierte sus auto-attacks en un flujo continuo de dashes. **Void Surge (Q)** tiene cuatro cooldowns direccionales y todos bajan con la attack speed: cuanta más attack speed acumula (= apila), más a menudo dashea. **Endless Banquet (R)** tiene dos caras: una pasiva que añade true damage cada dos basic attacks sobre el mismo target (true damage = daño que ignora armor y magic resist), y una forma activa que consume un Void Coral — un trozo que queda en el suelo cuando consigue un takedown (kill o asistencia) sobre un champion o sobre un epic monster como Rift Herald o Baron — para ganar HP, attack range y attack speed extra durante un buen rato.

Su game plan es snowballear por la jungla (snowball = convertir una pequeña ventaja inicial en otra mucho más grande). Limpia camps, hace gank a una lane (gank = emboscada con ayuda del jungla), pelea al nivel 6, se come el Void Coral y encadena el siguiente fight con la true form. No es un champion scaling (scaling = volverse más fuerte a medida que la partida se alarga): si el early game se estanca, se convierte en un Master Yi peor.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade es el jungle starter: a medida que matas monstruos de jungla evoluciona a un upgrade que potencia **Smite** (el summoner spell que toca a todo jungla — un golpe único muy fuerte sobre un objetivo, que sirve tanto para limpiar más rápido como para robar objetivos al equipo rival).

**Items core (en orden):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — cada tercer basic attack añade daño físico bonus on-hit; perfecto para una champion que ataca más rápido que cualquier otra del juego.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat que se compone con la reducción de cooldown de su Q.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — daño bonus on-hit que alterna entre armor pen (ignora una parte de la armor del rival) y magic pen (ignora una parte de la magic resist); también da defensas que se acumulan mientras estás en melee range (= lo bastante cerca como para meter un tajo), que en el caso de Bel'Veth es siempre.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (te curas por un porcentaje del daño que infliges) y un overheal shield (la curación que sobra se transforma en un shield temporal por encima del HP). La supervivencia que necesitas para canalear **Royal Maelstrom (E)** sin morir.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — convierte cada dos auto-attacks en dos on-hits en un único swing, doblando el valor de Kraken Slayer y Terminus.

**Items situacionales:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra composiciones AP pesadas (Karthus, Ahri, Lissandra; AP = champions cuyo daño viene sobre todo de las habilidades, no de los auto-attacks). Da magic resist y on-hit magic damage, sustituye al Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — cuando vas por detrás o contra poke comps (poke = enemigos que te raspan HP a distancia antes de que el fight empiece). El primer auto sobre cada target es crítico (crit = un golpe que hace aproximadamente el doble de daño) y te cura, te devuelve tempo en las skirmish (skirmish = pelea pequeña 1v1 o 2v2 en la jungla, no un teamfight pleno 5v5).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con curación apilada (Soraka, Aatrox, Dr. Mundo, Vladimir). Aplica Grievous Wounds en cada auto (Grievous Wounds = un debuff que reduce a la mitad la curación del rival).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — cuando vas por delante y el equipo rival tiene waveclear débil (no tiene forma fácil de matar las waves de minions). Empuja las side lanes (las lanes top y bot, lejos del centro) más rápido que ninguna otra cosa y da daño bonus a torres, perfecto para splitpush (splitpush = presionar una side lane solo mientras el equipo juega el otro lado del mapa).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP single-target (burst = mucho daño concentrado en 1-2 segundos; ej. Veigar, LeBlanc, Syndra). El shield se activa automáticamente bajo el 30% HP y absorbe una buena parte del próximo magic damage que recibas.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** solo contra double-AD comps (= el equipo rival tiene dos carries fuertes de daño físico, p. ej. Caitlyn + Master Yi).

**Skill order:** Maxea **Q** primero, luego **E**, luego **W**. Cada rank de **Q** baja su cooldown base — es tu daño y tu movilidad en un solo slot. **R** a niveles 6, 11, 16.

**Runas:** Las runas son bonificaciones pasivas que eliges antes de la partida; modelan tus stats de early game y tu estilo de daño. Primaria **Precision** (el árbol centrado en auto-attacks) con **Press the Attack** (después de tres basic attacks sobre el mismo target, el siguiente auto o habilidad hace daño bonus y el target recibe más daño de todos durante unos segundos), **Triumph** (te curas un poco al lograr un takedown), **Legend: Alacrity** (attack speed extra por takedown), **Coup de Grace** (más daño a targets con HP bajo). Secundaria **Resolve** con **Second Wind** (regeneras HP tras recibir daño) + **Revitalize** (las curaciones sobre ti son más fuertes) para skirmish prolongadas, o **Inspiration** con **Magical Footwear** (botas gratis al minuto 12) + **Cosmic Insight** (cooldowns reducidos en summoner spells) si la partida está calmada y quieres optimizar oro y timers.

## Matchups clave

- **Lee Sin:** Jungla fuerte early con invade (= entra en tu jungla para matarte antes de que tengas items). Trackéalo con vision sobre tus buffs y evita pelear con él antes del nivel 4 — esa pelea la gana siempre.
- **Master Yi:** Rival scaling. Mátalo antes del minuto 20 o asume que te superará en daño en el teamfight tardío; fuerza objective trades temprano (= push de Drake o Herald mientras él está en el otro lado del mapa) para que no llegue a cuatro items.
- **Karthus:** Matchup gratis. Su ult (R, también llamada ultimate — la habilidad última y más fuerte) hace daño a todo tu equipo a través del mapa, pero no tiene movilidad — Q encima de él y muere en una rotation (= una secuencia completa de tus habilidades). Counter-jungléalo (= róbale los camps de su jungla) tras cada gank que cierra.
- **Sejuani:** Matchup duro. Su R es point-and-click (= se ancla al target sin necesidad de apuntar) y te clava en el sitio. No hagas engage (engage = iniciar el fight) sin **Flash** listo, y nunca sin tu equipo en posición de pelarte (peel = un aliado que detiene la amenaza antes de que llegue a ti).
- **Rammus:** Hard counter (= construido específicamente para arruinar tu matchup). Su pasiva de espinas refleja parte del daño de tus auto-attacks; su W es un steroid defensivo (steroid = una habilidad que multiplica temporalmente una stat — aquí su armor y el daño reflejado) que dobla la reflexión. Evita las skirmish en solo, pingea al equipo y farmea el lado opuesto de la jungla hasta terminar Terminus.

## Power spikes y condiciones de victoria

Un power spike es un momento en el que el champion se vuelve mucho más fuerte que un minuto antes — normalmente cuando entra una habilidad nueva o un item nuevo.

- **Nivel 3:** Primer full clear hecho, **Q-W-E** desbloqueadas. Puedes responder a la mayoría de ganks con el knock-up de la W (= la habilidad lanza al rival un poco al aire, con un breve stun) y una Q de salida, pero todavía no puedes forzar fights — céntrate en un clear limpio y un Scuttle temprano (el cangrejo neutral del río: lo matas para vision y un pequeño buff de movement-speed por el río).
- **Nivel 6:** **Endless Banquet (R)** entra online. Tras tu próximo takedown sobre champion o epic monster (Rift Herald, Drake), te comes el Void Coral y entras en una true form larga (= una transformación buffeada que te convierte en un mini-boss temporal). Fuerza un fight o un dragón inmediatamente.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ minuto 10-12):** Primer damage spike real. Ya puedes duelar a la mayoría de junglers en su propia jungla y hacer dive a un laner con HP bajo (dive = entrar bajo la torre rival para matarlo igualmente, comiéndote los disparos de la torre por el camino).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus completo (~ minuto 16-18):** Con tres items dejas de preocuparte por la armor o la magic resist sobre la mayoría de targets squishies (squishy = champion con pocas defensas, tipo ADCs y la mayor parte de mages). Agrúpate con el equipo para el segundo dragón y el timer de Baron.
- **Void epic monster (Rift Herald o Baron):** La forma activa de tu R dura mucho más cuando comes un Void Coral de un epic monster (epic monster = un objetivo neutral grande, mucho más fuerte que un camp normal). Intenta tomar Herald con el equipo en torno al minuto 10-14 para que empujes dos waves con la true form todavía activa.

## Errores comunes

- **Spamear Q siempre en la misma dirección.** Cada una de las cuatro direcciones tiene su propio cooldown. Quedarte quieto y pulsar Q hacia delante cuatro veces desperdicia tres direcciones. Adelante, lateral, atrás — haces más daño y acumulas más attack speed a la vez.
- **Mantener E toda su duración cada vez.** **Royal Maelstrom (E)** es una habilidad en channel (= Bel'Veth se queda quieta y sigue golpeando, vulnerable a interrupciones) que se cierra antes pulsándola otra vez. Úsala para absorber una sola rotation de daño (p. ej. la W de Veigar en cage) y luego ciérrala enseguida para volver a hacer auto-attacks. Mantenerla todo el tiempo significa cero auto-attacks durante dos segundos.
- **Pulsar R sin un Void Coral cerca.** La forma activa dura unos 30-60 segundos según la fuente. Sin coral está desperdiciada; el true damage pasivo en cada segundo auto es lo que quieres en los fights normales.
- **Intentar 1v1 al jungla rival a nivel 2.** Su clear va bien pero su duelo early es mediocre. Si un Lee Sin o un Xin Zhao te invaden a nivel 2-3, deja el camp y pingea al equipo — ganar el duelo no es realista y morir les regala el snowball.
- **Ignorar el tempo del Void Coral.** Cuando dropea un coral tienes una ventana corta para consumirlo. Matas a un rival al minuto 6, ignoras el coral, y desperdicias el único motivo por el que lo mataste. Camina siempre por encima del coral antes de hacer recall (recall = la habilidad canalizada que te teleporta a la base).

## Consejo avanzado

Usa **Above and Below (W)** como reset de Q. La descripción dice que impactar a un champion con **W** refresca el cooldown de **Void Surge (Q)** en esa dirección — así que el patrón óptimo en 1v1 es **Q hacia delante → AA → W sobre el target → Q hacia atrás a salvo** con una Q hacia delante lista en el instante en que te giras. Los pros usan este loop para encadenar tres dashes en dos segundos, más de lo que tiene cualquier otro jungla del juego.
