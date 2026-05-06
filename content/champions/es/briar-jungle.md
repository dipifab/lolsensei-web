---
title: "Briar Jungle Build & Guía — Patch 16.9"
slug: "briar-jungle"
language: "es"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Guía Briar jungle para League of Legends Patch 16.9: clear path, build core lifesteal, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Las autos y habilidades aplican un sangrado acumulable que cura a Briar según el daño infligido. La cura bonus escala con HP perdidos. Sin HP regen base."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Salto corto que aturde y reduce en % la Armor y MR del objetivo. Gap closer (cierra distancia) y abre el trade (intercambio breve de golpes)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Briar salta hacia adelante y se auto-provoca al enemigo más cercano (prioridad a champions), ganando Attack Speed, Move Speed y autos AOE. Re-úsala para un mordisco potenciado que escala con HP perdidos y cura."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Cancela Blood Frenzy y canaliza: damage reduction y cura % HP durante la carga. Al soltar ralentiza; a plena carga empuja y aturde contra muro. El self-cancel de la W es la mecánica clave."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Briar lanza una gema global que marca como presa al primer champion impactado. Vuela hacia él, aplica fear a los enemigos al aterrizar, y obtiene Frenzy potenciada con resistencias, lifesteal y Move Speed bonus hasta que la presa muere."
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra double-AD (ej. Yasuo + Caitlyn): convierte el burst en sangrado lento, te da tiempo de resetear con el chomp de W"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP (Syndra, Veigar, Lissandra) — el escudo mágico se activa cuando un AP threat está en pleno combo encima de ti"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Steelcaps si el rival tiene 3+ CC duros (stuns, roots): la tenacity evita que la R sea interrumpida a medio vuelo"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra comps AP-heavy con daño mágico sostenido: amplifica un 25% la cura de Crimson Curse y del chomp de W"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Acierta la R sobre un carry de backline y cabalga la Frenzy potenciada hasta que la presa caiga. Sundered Sky y Bloodthirster te mantienen arriba durante la chase; el fear dispersa a sus peelers."
  weakness: "Sin range y el self-taunt de W te pega al enemigo más cercano — rivales avispados hacen bait de Frenzy hacia un tank, luego peelan desde fuera de range mientras una cadena de CC te clava."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Árbol Precision (runas de fight largo): la Frenzy de W dura 5+ segundos, así que las keystone de burst desperdician daño temprano. Conqueror acumula a cada golpe y picotea cuando aterriza la R. Triumph cura en kill, Alacrity da Attack Speed, Last Stand paga a HP bajo."
    secondary_rationale: "Domination secundaria: Treasure Hunter da gold extra desde los primeros ganks (gank = ataque sorpresa desde la jungla) y Relentless Hunter añade Move Speed fuera de combate para follow-up de R cross-map (llegas a side lane una wave antes)."
    secondary_alternative: "Si el rival tiene 3+ CC de habilidad (Lissandra R, Maokai roots, Sejuani Q), cambia Domination por Resolve con Second Wind (HP regen pasivo bajo 50%) y Revitalize (+10% a la cura de W y R). Sacrificas snowball por sobrevivir a la cadena de CC."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Mages inmóviles de mid lane"
      reason: "La R lanza un skillshot global que marca al primer champion golpeado. Mages de backline sin dash son arrastrados a una cadena de fear + Frenzy de la que no pueden zafarse antes de que llegue el chunk de daño."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lentos"
      reason: "El shred porcentual de Armor de la Q parte sus resistencias, y la W con Attack Speed más sustain gana los fights largos. No te kitean y su CC es de un solo cast: una vez en cooldown sobre-curas el resto."
    - examples: ["warwick", "shyvana"]
      archetype: "Skirmishers de sustain sin escape"
      reason: "1v1 estilo mirror en la jungla. El chomp de Briar escala con HP perdidos, así que cuanto más se alarga el fight más se inclina la mate a su favor. El stun de Q interrumpe sus ulti canalizadas."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "CC AOE con múltiples roots"
      reason: "Encadenan CC sobre Briar a media Frenzy, y su única salida es la E para auto-cancelar la W — pero la E es un canal largo, así que la re-CC antes de que termine la cura. La R la mete en la peor posición posible."
    - examples: ["olaf", "morgana"]
      archetype: "Champions CC-immune o anti-heal"
      reason: "La R de Olaf cleansa el knockback y el stun de la E; la E de Morgana bloquea con spell shield el stun de Q y el fear de la R, rompiendo la ventana de engage antes de que suba la Frenzy."
    - examples: ["nidalee", "gragas"]
      archetype: "Pokers de larga distancia con desplazamientos"
      reason: "Nidalee castiga el clear de Briar con javalinas desde fuera de range de W; la R o E de Gragas la sacan de la Frenzy a media chase, reseteando la rampa de daño y dejándola sin sustain."
---

## Resumen

Briar es una **diver / skirmisher** melee (un champion que salta sobre el carry rival y gana los 1v1 largos). Convierte su propia pérdida de control en virtud: la **Blood Frenzy (W)** la pone en piloto automático sobre el enemigo más cercano con bonus de Attack Speed y Move Speed, y su pasiva **Crimson Curse** la cura a partir del sangrado que aplican sus propias auto-attacks. No tiene HP regen base, así que el único modo de mantenerse sana es seguir golpeando — cuando deja de atacar, deja de curarse. Su definitiva **Certain Death (R)** es un skillshot global (una habilidad que cruza todo el mapa) que marca a un objetivo como presa y la encadena a una chase potenciada hasta que la presa muere, con fear (efecto que hace huir a los enemigos sin control) sobre todo lo que esté alrededor al aterrizar.

El plan de partida es clear rápido (clear = matar todos los monstruos neutrales de tu cuadrante de jungla) de los camps con la W AOE (area of effect = daño en zona), buscar ganks (ataques sorpresa desde la jungla a una lane) desde el nivel 6, donde la R puede aislar a un carry de backline (el damage dealer frágil que está detrás del equipo) lejos de sus peelers (aliados que protegen al carry). Desde ahí, snowball (convertir las primeras kills en más kills) hasta volverte una máquina de chase que sobre-cura los 1v1 con lifesteal de items y self-heal apilado. La jugada de skill alta es el self-cancel W-en-E: saber exactamente cuándo interrumpir tu propia Frenzy con **Chilling Scream (E)** para curarte y reposicionar, luego rentrar con Q.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. La quest del pet se completa sola sobre el minuto 3-4.

**Items core (en orden):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — upgrade del pet desde Hailblade (auto-evoluciona sobre el minuto 3-4 una vez acumulada XP). El compañero Gustwalker da Move Speed al dañar a champions, que se suma al bonus de W y convierte la transición clear-a-gank en dives sorpresa (dive = saltar al enemigo incluso bajo torre para matarlo).
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primer item legendario, primer gran power spike (el momento en que tu champion se vuelve mucho más fuerte). Su pasiva convierte tu siguiente auto-attack en un golpe crítico garantizado (crit = ataque que hace doble daño) y te cura. Esa cura coincide con el chomp potenciado de W, dándole a Crimson Curse el combustible de HP-perdidos que necesita para escalar.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto contra la mayoría de comps. Reducen el daño de auto-attacks (AA = auto-attack), lo que pesa mucho en fights largos de Frenzy contra marksmen (carries físicos a larga distancia, como Caitlyn o Jinx).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Attack Damage extra basado en tu AD base más un escudo Lifeline (pasiva por umbral de HP: un escudo que se activa cuando los HP bajan del 30%). El escudo es la red de seguridad para R commits (engagements totales con R) que salen mal.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — sube el cap de lifesteal (lifesteal = % del daño de auto-attack convertido en cura) y vuelve la cura sobrante en escudo. Combinado con Crimson Curse + Sundered Sky, sobre-curas a cualquier equipo que no haya comprado anti-heal (items que reducen la cura recibida).

**Items situacionales:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra equipos con dos damage dealers físicos fuertes (ej. Yasuo + Caitlyn): convierte el burst que recibes en un sangrado lento durante unos segundos, dándote tiempo de resetear con la cura del chomp de W.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP (Syndra, Veigar, Lissandra). El escudo mágico se activa exactamente cuando un AP threat está a media combo encima de ti.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde Steelcaps si el rival tiene 3+ habilidades de CC duro (CC = stuns, roots, fears que bloquean a tu personaje). La stat Tenacity de estas boots reduce la duración de esos CC, así tu R commit no es chain-stuneado a medio vuelo.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra comps AP-heavy con daño mágico sostenido: amplifica un 25% la cura de Crimson Curse y la del chomp de W, doblando la identidad de Briar en lugar de parchearla.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cuando el conteo de CC supera el de threats AA.

**Skill order:** Maximiza **W** primero (DPS, sustain, Move Speed), **Q** segundo (gap close + shred porcentual de Armor/MR), **E** al final. Pon punto en **R** a niveles 6, 11, 16.

**Runas:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundaria **Domination** con **Treasure Hunter** y **Relentless Hunter**, o **Resolve** con **Second Wind** y **Revitalize** si el equipo rival encadena 3+ CC de habilidad sobre ti.

## Matchups clave

- **Warwick:** Mirror de sustain en la jungla (ambos champions se curan mucho en fights). Él escala con Attack Speed; tú escalas con la W AOE más el chomp que daña según HP perdidos. No abras a HP llenos por ningún lado: deja caer su Q (que te aplica fear) primero, cancela tu propia Frenzy con E para esquivarla, y vuelve a engagear cuando su definitiva esté en cooldown.
- **Lillia:** Te kitea (te ataca mientras retrocede) con el daño pasivo de Q y el slow de W. Guarda la E para cuando te camina encima spameando Q: el knockback la mete contra un muro y la atura. Sin E, te da vueltas para siempre.
- **Lee Sin:** Fighter de early que te gana a nivel 3 si abre con Q + Smite (summoner spell del jungler). Evita su red-side jungle hasta el nivel 4; cuando Sundered Sky entra online, la mate gira a tu favor y su escudo W cura menos que tu chomp de W.
- **Sejuani:** Tank jungler con CC duro. El shred de Armor de Q (reducir su stat de Armor por porcentaje) la abre, pero su R cancela tu R commit a medio vuelo. Vigila su cooldown de definitiva — si está disponible, no abras R sobre un objetivo cercano a ella.
- **Kha'Zix:** El counterpick clásico (un champion elegido específicamente para neutralizarte en draft) para skirmishers. Te aísla y burstea en 2 segundos (burst = mucho daño en 1-2 segundos). Agrúpate con tu equipo después del 6 y juega con vision (usa wards para no ser sorprendida); no hagas solo-invade en su mitad de la jungla.

## Power spikes y condiciones de victoria

- **Nivel 3:** Las tres habilidades base online. Primera ventana razonable de gank — Q sobre un muro hacia un objetivo, W en Frenzy, Q stun contra el muro.
- **Nivel 6:** Primera **Certain Death**. Los ganks cross-map (R lanzada cruzando el mapa hacia una side lane) se vuelven una amenaza real: incluso un enemigo que ya gastó Flash y no tiene dash pierde el trade una vez que la R lo engancha.
- **Sundered Sky completo (~ minuto 10-12):** Primer spike de duelo (el momento en que ganas 1v1 de manera fiable). Vences a la mayoría de junglers y a la mayoría de laners sobre los que abres R desde fuera de su vision.
- **Sterak's Gage online (~ minuto 22-26):** El escudo Lifeline convierte R commits fallidas en kills. Combinado con el overheal de Bloodthirster te conviertes en frontline (el cuerpo tank que abre los fights) y finisher a la vez.

## Errores comunes

- **W-Frenzy a un tank en lugar del carry.** El self-taunt de W se engancha al enemigo más cercano con prioridad a champions, pero si Maokai (un tank) está más cerca que Caitlyn (un carry), te comes a Maokai. Usa Q primero para saltar más allá de la frontline (los champions tanky delante del equipo); la Q te pone sobre el objetivo prioritario antes de que arranque el piloto automático de W.
- **Aguantar la E demasiado para el wall stun.** La E a plena carga empuja enemigos, pero el canal (el periodo en el que estás quieta lanzándola) es largo y durante el canal recibes daño (solo reducido, no bloqueado). Si no hay muro alineado, suelta entre el 50 y el 70% de carga para tener solo el slow — la E parcial te salva, la E llena te mata.
- **Usar R sobre un grupo de 4 enemigos.** La R aplica fear a los enemigos alrededor de la presa, pero recuperan tras 1.5 segundos. Cuando recuperan, estás sola en mitad de su equipo en Frenzy potenciada sin aliados que te peelen (peel = protección aliada que quita atacantes de encima). Usa la R cuando la presa esté separada — flanks (un único enemigo acercándose por un lado), rotaciones, momentos de backline aislada — no sobre un engage limpio agrupado (un fight donde el enemigo está todo junto).
- **Olvidar que Crimson Curse necesita HP perdidos para escalar.** La cura bonus crece cuanto más bajan tus HP. No recallées a base con HP llenos tras un gank exitoso si viene un segundo fight; quedarte al 40% HP hace que el siguiente chomp cure casi el doble.

## Consejo avanzado

Practica el **self-cancel de W mediante E**: cuando la Frenzy enfila al enemigo equivocado (un tank en lugar del carry, o te lleva hacia un CC), pulsa E a media Frenzy para resetear. La damage reduction durante el canal de E + la cura por % HP máx convierten un engage estropeado en un reposicionamiento gratis. Suelta la E sin carga (o al 30%) en el instante en que el target prioritario entra en range de Q, luego Q encima y re-W para arrancar una Frenzy limpia sobre la persona correcta. El coste total de animación es de aproximadamente 1 segundo; la diferencia en conversión de kill es una barra de HP entera.
