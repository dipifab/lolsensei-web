---
title: "Cho'Gath Top Build & Guía — Patch 16.9"
slug: "chogath-top"
language: "es"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Guía de Cho'Gath top en League of Legends Patch 16.9: build de tank-mago apilando HP, runas Grasp, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Matar una unidad recupera HP y maná. Las takedowns sobre champions devuelven mucho más. Sustain gratis (regen de HP/maná entre peleas) en cada last-hit (golpe que mata al minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (habilidad apuntada en línea) a 950 de rango: lanza por los aires a los enemigos, los ralentiza y aplica daño mágico. Poke (daño a distancia desde zona segura) y engage (abrir la pelea) — preaviso lento, anticipa al objetivo."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Cono frontal (rango 300): daño mágico y silence (bloquea el cast de habilidades) durante ~2,2s. Encadénalo después del knockup de Q sobre objetivos melee."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (las próximas autos ganan un efecto extra). Las próximas 3 autos hacen daño mágico que escala con el HP máximo del objetivo y lo ralentizan. DPS principal contra tanks y waveclear (limpiar la oleada de minions)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Execute (mata bajo umbral de HP) single-target en true damage (ignora armor y magic resist). Al matar, Cho'Gath gana un stack permanente: más HP máximos y modelo más grande. Cap a 6 stacks de minion, sin cap de champion."
      dd_spell_id: "Feast"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra mucho daño mágico o cadenas de CC repetidas (Malphite R, Sylas, Lissandra) — cambia desde Plated Steelcaps antes del primer back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 2+ amenazas AP (top AP + jungla AP tipo Diana/Ekko) — apila MR y aporta movement speed para alcanzar a quien kitea"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries de auto-attack con sustain (Vayne + Soraka, Master Yi + lifesteal) — aplica Grievous Wounds (50% reducción de cura)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "como sexto item con 5+ stacks de Feast — el umbral de HP de Warmog's Heart es trivial, la regen te hace saltar backs"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra mages con stack de minions (Heimerdinger, Malzahar) y equipos AP agrupados — el aura limpia stacks y rompe la frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Apila Feast en cannons y kills para inflar HP. Con 5+ stacks + Riftmaker + Spirit Visage entras como segundo tank, absorbes el focus y encadenas Q knockup en W silence sobre el carry."
  weakness: "Sin dash, sin escape fuera de Flash. Los tops a rango te kitean (te golpean fuera de tu rango) la Q de 950. Vulnerable a ignite + heal reduction antes de stackear — perder lane snowballea porque Feast pide farm."
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
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve: Grasp se activa cada 4s en melee (proc = se dispara la pasiva), cura y apila HP permanentes — encaja con la curva HP+AP de Cho'Gath. Demolish derriba la torre incluso en lanes perdidas, Second Wind regen el daño de poke, Overgrowth apila HP cada 8 minions."
    secondary_rationale: "Sorcery secundaria: Manaflow Band sostiene el maná de Q poke y E waveclear en lanes largas, Transcendence sube el ability haste (cooldowns más bajos) para que la Q vuelva casi cada wave a buscar un knockup."
    secondary_alternative: "Contra tops ranged a poke o burst AP (Vladimir, Teemo, Kennen) cambia Sorcery por Inspiration con Biscuit Delivery (sustain HP+maná gratis pre-6) y Time Warp Tonic (cura instantánea al usar poción para quedarte en lane)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Bruisers melee de windup lento (luchadores HP+daño)"
      reason: "El knockup de Q interrumpe sus animaciones de commit (pull de Darius, E spin de Garen, cast de W de Sett). Carnivore más el omnivamp de Riftmaker (sustain tipo lifesteal en cada cast) gana el trade; en umbral de Feast, R los borra al 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Divers melee móviles (te saltan encima rápido)"
      reason: "Q los lanza a mitad de dash y rompe su combo. W silencia justo después y bloquea el segundo dash. R los ejecuta cuando se retiran low — no pueden all-in (pelea de compromiso total) sin Flash y sin una lectura limpia."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Mages melee sin hard CC (stuns/roots)"
      reason: "No tienen lockdown instantáneo para interrumpir el windup de Q. Los superas a rango desde distancia segura, y W silence apaga sus kits ability-reliant durante el all-in."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Tops ranged con poke y disengage (herramientas de escape)"
      reason: "Se quedan más allá del rango 950 de Q, retroceden cuando avanzas y te chunkean a media vida antes del 6. Sin dash para cerrar y sin sustain más allá de Carnivore, pierdes prio (control de la wave) cada ciclo."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Duelistas melee móviles con daño continuo"
      reason: "Fiora parry (bloquea) la W silence, Jax E esquiva la Q knockup, Tryndamere ignora la R mientras ulte primero. Su daño continuo gana el trade contra el windup lento de Q; llegas al scaling de Feast demasiado tarde para que importe."
    - examples: ["gnar", "kayle"]
      archetype: "Late-game scalers (débiles temprano, monstruos al minuto 30)"
      reason: "El Gnar mini ataca la Q desde fuera de su rango, Kayle ramp-ea a autos en true damage que te borran en teamfights. Ambos ganan el long game aunque Cho stackée Feast — superan tu HP pool en daño hacia el minuto 30."
---

## Resumen

Cho'Gath es un híbrido tank-mago que compra items que dan tanto HP como ability power, y apila HP máximo permanente con su ultimate **Feast**. Su kit combina un knockup a larga distancia (**Q**) con un silence melee (**W**), permitiéndole interrumpir las habilidades de engage de los bruisers melee en lane y bloquear a los carries enemigos en teamfights. El daño que más escala con su build viene de **Vorpal Spikes (E)**, que añade daño mágico basado en el HP máximo del objetivo — es decir, hace más daño a tanks y bruisers fed que a los squishies.

El plan de partida es sencillo de describir y exigente en paciencia: farmea seguro detrás de los minions, busca knockups con **Q** para preparar trades o peelar ganks y **nunca** desperdicies la ocasión de **R** un minion low-HP (cada stack sobre champion es permanente, cada cannon matado con R son +120 HP máximos para el resto de la partida). Una vez tienes 5+ stacks más dos items HP+AP, te conviertes en un segundo tank al que el equipo enemigo debe forzar antes que a tus carries — eso es lo que gana los teamfights.

## Build Recomendada

**Items iniciales:** Doran's Shield + Health Potion. Doran's Shield da 80 HP y regeneración tras recibir daño que sinergiza con la cura del last-hit de Carnivore.

**Items core (en orden):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primer item completo. HP + AP + omnivamp (te cura con un porcentaje de todo el daño que infliges, abilities o autos). El ramp de daño se convierte en true damage tras 3 segundos de combate — perfecto para trades extendidos.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto contra un top AD. Reducen el daño de auto-attack un 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — segundo item de daño. HP + AP + pasiva burn que hace daño mágico en porcentaje del HP máximo a lo largo del tiempo. Apila naturalmente con el slow de Q y el silence de W manteniendo a los enemigos en rango para que coman los ticks de burn.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + magic resist + 25% de amplificación de cura y escudos. Multiplica la cura de Carnivore, el omnivamp de Riftmaker y cualquier escudo aliado que recibas.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + un slow en cada habilidad que toque a un champion. Se acumula sobre el slow de Q y hace que los objetivos silenciados por W no puedan kitear lejos antes de que termine el silence.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra mucho daño mágico o cadenas de CC repetidas. Cambia desde Plated Steelcaps antes del primer back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra equipos con 2+ amenazas AP. Apila magic resist y aporta movement speed para alcanzar a quien kitea.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries de auto-attack más comps con cura (Vayne + Soraka, Master Yi + Aatrox). Aplica Grievous Wounds (50% reducción de cura) en cada golpe que recibas.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sexto item cuando ya tienes 5+ stacks de Feast. El umbral de HP para la pasiva Warmog's Heart es trivial cuando stackeas; la regen te permite saltar backs y roamear a HP completos.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra mages con stack de minions (Heimerdinger, Malzahar) y equipos AP agrupados. La pasiva de aura limpia oleadas apiladas y chunkea la frontline enemiga.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto contra top AD, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra top AP o mucho CC.

**Skill order:** Sube **Q** primero (slow, knockup, herramienta principal de trade), **E** segundo (waveclear y on-hits que destrozan tanks), **W** al final (el silence es enorme pero el daño por rank es bajo). Punto en **R** a niveles 6, 11, 16.

**Runas:** Primaria **Resolve** con **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secundaria **Sorcery** con **Manaflow Band** y **Transcendence**. Contra top ranged a poke, cambia Sorcery por **Inspiration** con **Biscuit Delivery** y **Time Warp Tonic**.

## Matchups clave

- **Darius:** Pre-6 respeta su pasiva W (5-stack bleed). Q antes de que conecte el pull, luego aléjate. Tras el 6, Feast lo ejecuta al ~30% HP — ese es el umbral para committear.
- **Sett:** Q sobre el frame de wind-up de su W (el puño naranja). Si te conecta la W, acepta el trade y W-silenciálo para bloquear su grab de E. Botas Plated, item Riftmaker primero — su ulti es nivel Mercury's Treads, valora Merc's si está fed.
- **Teemo:** Counterpick. Doran's Shield + Second Wind, empuja la wave bajo torre con E waveclear y pide ganks al jungla. Compra ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** como primer item si su lane lead snowballea (después builda hacia Maw of Malmortius).
- **Fiora:** Matchup parejo-perdido. Ella parry tu W silence — nunca lances W desnudo. Usa Q para interrumpir sus dash trades, guarda W para después de que queme Riposte.
- **Malphite:** Matchup parejo, escala peor que tú. No tiene sustain y su Q poke es cara de maná; tradéalo con Q+W cuando esté bajo de maná. Cuidado con su **R** post-6: interrumpe el cast de tu **R**.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con Q + E puedes tradear agresivo: Q para el knockup, luego entras y quemas 3 autos de E mientras no pueden moverse. Swing gratis del 35-40% HP si aciertas Q.
- **Nivel 6:** El primer Feast desbloquea presión de execute. El cooldown es 80 segundos y el rango 175 (melee + un paso). Si tu jungla aterriza cualquier CC sobre un enemigo low-HP, entras y haces R para un stack permanente.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completado (~ minuto 13-15):** La matemática del trade se voltea. El omnivamp más la cura de Carnivore te dejan plantarte y pelear contra bruisers melee a través de toda su combo sin backear.
- **5+ stacks de Feast (~ minuto 20-25):** Te conviertes en segundo tank. Con Riftmaker + Spirit Visage + 5 stacks andas sobre 3800-4200 HP efectivos. Entras a la backline enemiga, comes el burst y encadenas Q-W sobre su carry.

## Errores comunes

- **Saltarse Feast en cannon minions por el oro.** Un stack de cannon son +120 HP máximos para siempre. Aunque "pierdas" 60 de oro, los HP escalan más de lo que el oro puede. Siempre R al cannon si ningún champion está en rango de execute.
- **Usar Q como poke sin follow-up.** Q tiene un wind-up de 0,65s; contra un objetivo en movimiento debes anticipar ~media longitud de champion. Si no puedes seguir con W o auto, guarda Q para engage o peel.
- **Avanzar a last-hit sin spacing.** Cho'Gath tiene 125 de movement speed base y nada de dash. Si te plantas sobre los caster minions de la wave, te all-inean (te abren con compromiso total) los bruisers móviles. Last-hit desde el fondo de la wave.
- **Dejar caer E a mitad de pelea.** Vorpal Spikes es un toggle: queda activo entre peleas mientras tengas maná. Actívalo antes de que empiece la pelea para que las primeras 3 autos ya tengan el on-hit listo.
- **R-snipear a un champion a HP completos.** Feast a HP completos hace ~600 true damage al rank máximo. Es relevante pero renuncias al cooldown de 80 segundos y a la chance de stack permanente sobre un minion. Reserva R para executes o panic peel.

## Consejo avanzado

Cancela el wind-up de tu auto-attack con **Q** para baitar el Wind Wall de Yasuo o Yone: empieza la auto, ve aparecer el muro, y luego castea Q sobre el punto al que están caminando. La Q skillshot es una ruptura del suelo que viaja por debajo del muro (el muro bloquea proyectiles, no efectos de suelo). La mayoría de champions ranged no distinguen un auto-cancel de una ability retenida, así que sacas un knockup gratis sobre un objetivo que se creía inmune. El mismo truco funciona contra **E** de Braum (Unbreakable) y **W** de Pantheon (frame de bloqueo de Shield Vault).
