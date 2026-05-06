---
title: "Jarvan IV Jungle Build & Guía — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "es"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Guía de Jarvan IV jungla para League of Legends Patch 16.9: starter kit, build core bruiser, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "El primer auto-ataque sobre un objetivo inflige daño físico bonus basado en su HP actual. Se recarga cada pocos segundos por objetivo: encájalo en los combos."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Lanza en línea que daña y reduce armadura. Si atraviesa una E flag activa, Jarvan se tira hacia el flag y lanza por los aires a los enemigos en su camino."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Escudo personal (escala con campeones enemigos golpeados) y slow a los enemigos cercanos. Úsalo ANTES del E-Q, no después."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Lanza un flag que inflige daño mágico al impacto y da attack speed a los aliados cercanos. Es el setup del combo E-Q knockup."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Salta sobre un campeón enemigo, daña a los cercanos y crea una arena de muros impasables. Reactívala para tirar los muros antes."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra mucho CC o equipos AP (3+ stuns/roots o dos amenazas AP): cambia de Steelcaps cuando el CC pesa más que el daño físico"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "contra comps que kitean (Caitlyn, Senna, Kog'Maw, Jinx): MS y slow on hit te ayudan a quedarte pegado al carry tras R"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra comps con mucho healing (Aatrox top, Yone bot, Soraka): el burn corta heals y ayuda al waveclear entre objetivos"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contra equipos que te focusean (2+ enemigos giran sobre ti al entrar con R): escudo HP salta bajo burst, tenacity reduce el CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dos AD dealers fuertes (p.ej. Yasuo + Caitlyn): convierte el daño físico en sangrado lento, no en burst instantáneo"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Acierta el knockup E-Q sobre un objetivo prioritario (carry o jungla rival), luego R para encerrarlo en tu arena mientras tu equipo sigue. Repite cada cooldown en los objetivos."
  weakness: "Si fallas E o Q, gastaste tu único hard CC y gap-close. Quedas como bruiser melee sin burst, fácil de kitear por marksmen ranged con self-peel."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stackea con cada golpe del combo E-Q-AA-R: cuando llega el knockup tienes stacks llenos para daño y healing. Triumph premia takedowns en objetivos, Alacrity acelera los autos para procs de Martial Cadence, Coup de Grace remata targets a bajo HP en Cataclysm."
    secondary_rationale: "Resolve secundario: Bone Plating absorbe el primer burst cuando entras con R y el equipo rival gira sobre ti, Revitalize potencia el escudo de Golden Aegis, tu única defensa activa en mid-fight."
    secondary_alternative: "Contra equipos con mucho poke (Varus, Xerath, comps con Karma) cambia Resolve por Inspiration: Magical Footwear (boots gratis para ahorrar gold) y Cosmic Insight (Flash más frecuente para el truco E-Q-Flash)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Junglas skirmisher early-game"
      reason: "Jarvan tradea a la par en nivel 3 con Q armor shred + E attack speed y supera en scaling a la mayoría de junglas early una vez online Sundered Sky hacia el minuto 12-14."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Bot lanes inmóviles que necesitan peel"
      reason: "Los muros de Cataclysm encierran a un carry posicional dentro de una arena donde su support no puede llegar a defenderlo; el equipo rival no suele responder al lockdown a tiempo."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Mid-lane scalers estacionarios"
      reason: "El gap-close E-Q desde fuera de visión más los muros de la R les niegan el espacio que su kit necesita; no tienen dash para salir de la arena antes de que tu equipo convierta."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "Junglas engage AOE con CC de mayor rango"
      reason: "Engagean desde fuera del rango de tu E-Q y te encadenan en CC antes de que llegues a la backline; los muros no te salvan si te stunnean a medio salto."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-game scalers con sustain integrado"
      reason: "El power spike de Jarvan está en los items 1-3 (sobre el minuto 20-25). Después cae, mientras estos targets sólo se vuelven más fuertes y sobreviven a tu única rotación."
    - examples: ["olaf", "tryndamere"]
      archetype: "Duelistas CC-immune"
      reason: "Las R de Olaf y Tryndamere ignoran el lockdown de Cataclysm: salen de la arena pegándote a daño pleno mientras tu único engage está en cooldown."
---

## Resumen

Jarvan IV es un fighter / diver melee — es decir, un campeón que cierra distancia con un dash y se compromete en un teamfight para bloquear a un objetivo clave — construido en torno a un combo signature: lanza un flag con **E**, dispara la **Q** a través del flag, te tiras al flag y lanzas por los aires a todos los que estén en el camino. A partir del nivel 6 suma **R** Cataclysm, una arena de muros que atrapa a un solo enemigo contigo mientras tu equipo convierte la kill. Es uno de los junglas más fáciles de aprender (dificultad 2/5 en nuestra escala) porque el kit siempre quiere lo mismo: acertar E-Q sobre un objetivo prioritario, R, ganar la pelea.

Su game plan: clearear los camps de jungla rápido con **E** activa y Q armor shred, luego gankear (saltar a una lane para ayudar a matar al enemigo) usando lanes con un ángulo de engage utilizable — mid a través de la tri-bush (el arbusto de tres esquinas entre mid y side lane) o top a través del river bush. Cerca de cada spawn de objetivo busca divear un carry (saltar sobre el enemigo de alto daño y pocas defensas en la backline). La skill expression está en el truco **E-Q-Flash** — flag al suelo, Flash adelante, Q a través para un knockup que no se puede reaccionar — y en decidir **cuándo** lanzar la **R** (sólo tienes una por pelea, así que no la malgastes en el tank de la frontline).

## Build Recomendada

**Starting items:** Hailblade + Refillable Potion. Path estándar de junglecam pet quest. Tanto Hailblade como Emberknife evolucionan en uno de tres companions; queremos el pet AD skirmisher, ver abajo.

**Core items (en orden):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade desde Hailblade (auto-evoluciona hacia el minuto 3-4 cuando tienes suficiente XP). Es el companion AD skirmisher: te da un sprint de movement speed después de cada camp, lo que se traduce en ganks más rápidos por todo el mapa.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — tu primer item grande. El crit garantizado en el primer golpe y el on-hit heal encajan perfecto con Martial Cadence: en el momento en que lanzas por los aires al objetivo le haces crit y te curas el daño que recibiste para llegar.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots por defecto contra la mayoría de equipos (la bot lane suele ser dos damage dealers físicos). Cambia a Mercury's Treads si la comp rival es mayoritariamente AP y CC.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — el armor shred se stackea con la passive de tu Q, además de HP y ability haste para que tu E-Q vuelva más rápido.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — power spike tank de late game. La passive que stackea armor y magic resist te transforma de diver en frontline que aguanta dentro del fight toda la duración.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra equipos con mucho CC o AP. Cambia desde Steelcaps cuando el crowd control es problema mayor que el daño físico.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — contra comps que kitean (Caitlyn, Senna, Kog'Maw — enemigos que caminan hacia atrás mientras te atacan para mantener distancia). MS y slow on hit te ayudan a quedarte pegado a la backline (los carries de alto daño detrás de sus tanks) tras la **R**.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra comps con mucho healing (Aatrox top, Yone bot, Soraka support). La passive burn corta los heals enemigos.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — cuando 2+ enemigos te focusean (giran su daño hacia ti) en cuanto entras con R. El escudo HP salta (se auto-activa) bajo burst (daño alto en 1-2 segundos) y la tenacity passive acorta el crowd control (stuns, roots, slows).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — vs comps con dos damage dealers físicos fuertes (p.ej. Yasuo + Caitlyn). Convierte el daño físico recibido en un sangrado lento (daño repartido en los próximos segundos, no instantáneo) así tienes tiempo de reaccionar en vez de que te eliminen.

**Boots:** Plated Steelcaps por defecto. Mercury's Treads si el equipo rival tiene 3+ stuns/roots o dos amenazas AP.

**Skill order:** Maxea **Q** primero (daño principal y armor shred), **E** segunda (cooldown más bajo = más intentos de gank y más opciones de flag), **W** última. Sube **R** en niveles 6, 11, 16.

**Runes:** Primary **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** con **Bone Plating** y **Revitalize**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchups clave

- **Lee Sin / Graves:** Matchup parejo en la jungla early. Trackea su primer clear; si empiezan red-side, contesta su segundo buff con E-Q. Ambos pueden pelearte en nivel 3, así que no invadas sin una lane prio (un compañero que ha empujado a los enemigos bajo torre y puede rotar a ayudarte) cubriéndote.
- **Fiddlesticks / Amumu:** Evita estar agrupado con tus aliados en mid-game. Su rango de engage AOE supera la distancia de tu **E-Q**: te ultan mientras todavía caminas para soltar el flag. Wardea las entradas de tu jungla y no face-checkees los arbustos (entrar a ciegas sin visión, donde un enemigo podría estar escondido).
- **Kha'Zix / Rengar:** Junglas asesinos que quieren one-shotear a un carry. Counter-gankea (preséntate en la misma lane para girar la pelea) en vez de full-clear: tradeas a la par con ellos en nivel 3, y tu **R** es una herramienta de peel (una habilidad para salvar a tu carry de quien le dive) cuando saltan sobre tu carry — múrales lejos de la kill.
- **Olaf:** Su R lo vuelve CC-immune, lo que significa que **los muros de Cataclysm no lo paran**. Si le R, sale de la arena pegándote. Guarda la **R** para sus compañeros después de que queme su ult, o pícalo como objetivo sólo si tu equipo puede kitear (retroceder atacando, manteniendo distancia) mientras está encerrado.
- **Sejuani / Maokai:** Junglas engage más tankys. Les ganas en daño 1v1 early pero ambos quieren el mismo rol en el teamfight (encerrar al carry). La lane que snowballa primero gana (consigue una kill early que se convierte en ventaja de gold que se convierte en más kills); comprométete con los ganks antes de que terminen su primer item.

## Power spikes y condiciones de victoria

- **Nivel 3:** Con un punto en **Q**, **E** y **W** tienes el combo E-Q-W completo para los ganks. Es tu primera ventana real de gank, sobre todo en mid lane a través de la tri-bush.
- **Nivel 6:** Se desbloquea **Cataclysm**. Cualquier carry sin ward cerca de tu river es una oportunidad de dive. El truco: flag (E) justo más allá, R hacia ti, Q para lanzarlos por los aires — no pueden responder al lockdown sin **Flash** y un cleanse.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky terminado (~ minuto 12-14):** Tu primer crit con Martial Cadence one-shotea squishies (campeones de alto daño y pocas defensas, como el ADC) tras E-Q. Es la ventana en la que debes gankear en cooldown y forzar trades en drake.
- **3-item spike (Sundered Sky + Boots + Black Cleaver, ~ minuto 22-25):** Pico de teamfight. Tu R + Q por sí solo borra a un carry de backline, y tienes HP suficiente para sobrevivir al focus después.

## Errores comunes

- **Lanzar la E encima tuyo para el combo estándar "knockup donde estoy".** Funciona en ganks, pero en una pelea donde el enemigo se aleja, tu Q te tira hacia atrás. Lanza el flag *más allá* del enemigo para que el pull de la Q te lleve hacia delante hacia él, no lejos.
- **Pulsar W después de engagear.** Golden Aegis es un escudo que escala con el número de campeones enemigos golpeados al castear — úsalo *antes* del E-Q para que el escudo sea máximo y el slow alcance a quienes vas a aterrizar encima, no al vacío.
- **Ultar al tank de la frontline.** Cataclysm encierra a *un* solo enemigo contigo. Úsala sobre el carry (Caitlyn, Aphelios, Azir), no sobre el Sion que está encantado de pelearte en una arena cerrada.
- **Limpiar toda la jungla antes de gankear.** Out-tempeas a la mayoría de junglas con ganks E-Q a nivel 3-4. Si full-cleareas antes del primer gank, regalas tu mayor ventaja. Pasea por 2-3 camps y luego busca un ángulo.
- **Reactivar la R para romper el muro demasiado pronto.** Los muros también son herramienta de peel: si tu equipo está ganando la pelea fuera de la arena, deja los muros arriba para evitar que el carry atrapado se una. Reactiva la R sólo para perseguir a alguien que huye.

## Consejo avanzado

Practica el combo **E-Q-Flash**: lanza el flag, dispara la Q a través, y haz Flash *durante* la animación de la Q. El knockup se aplica en tu destino, así que lanzas por los aires a enemigos en un área de 600 unidades más allá de lo que esperaban — usado para engagear desde fuera de su rango de visión, es uno de los engages más fiables del juego. El trade-off es que gastas Flash, así que guarda el truco para ganks que aseguren una kill o un ward perdido. Practícalo en Practice Tool una docena de veces antes de probarlo en ranked; la ventana de timing es corta.
