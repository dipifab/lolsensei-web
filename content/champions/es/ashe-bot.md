---
title: "Ashe ADC Build & Guía — Patch 16.9"
slug: "ashe-bot"
language: "es"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Guía de Ashe ADC bot lane para League of Legends Patch 16.9: setup de kiting con Frost Shot, build marksman, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Cada auto-attack ralentiza al objetivo. Los crits no hacen daño bonus pero aplican un slow más fuerte. Base del kiting (moverse hacia atrás mientras atacas) de Ashe."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Acumula stacks con auto-attacks. A stacks máximos, actívala para ganar attack speed bonus y convertir cada AA en una ráfaga de flechas con daño potenciado. Botón principal de DPS."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "Cono de flechas a 1200 de rango al frente. Cada enemigo recibe una sola flecha y sufre el slow de Frost Shot. Principal herramienta de poke y trade en lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Manda un halcón a cualquier punto del mapa por 5 segundos de vision (capacidad de ver en la fog of war). 2 cargas. Úsala para scoutear objetivos, no para daño."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Skillshot global (habilidad no dirigida que viaja en línea recta). Stunea al primer champion impactado; más distancia recorrida = stun más largo (hasta ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn) — % armor pen reconvierte AA en daño real"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con curación apilada (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds (corta la curación enemiga a la mitad)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra assassins o divers (Zed, Kha'Zix, Talon) — la pasiva Ghost te deja atravesar unidades mientras kiteas"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra poke pesado o burst — gran lifesteal heal + buffer de overshield"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Acumula slows de Frost Shot en teamfights, kitea detrás de tu front line con autos potenciados de Q y elimina objetivos solitarios con la R cross-map para controlar objetivos."
  weakness: "La movement speed base de auto-attack más lenta de todos los marksmen. Sin dash ni reposition tool — divers y assassins que entran a melee la borran si su support no hace peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Marksmen de corto alcance sin poke temprano"
      reason: "La W de Ashe tiene 1200 de rango y aplica slow de Frost Shot; los pokea desde fuera de su 500-550 de AA y convierte cada acercamiento en un trade ganado para su lado."
    - examples: ["kog-maw", "senna"]
      archetype: "Carries inmóviles de scaling"
      reason: "La R cross-map los borra en spawns de objetivo o en ventanas de reset en la fountain. Su kit no tiene dash para escapar de la flecha que sale de la fog of war."
    - examples: ["ornn", "sejuani"]
      archetype: "Front lines tanque lentos sin dive móvil"
      reason: "Ashe ralentiza sin parar a la front line con W + autos, forzando los fights a durar hasta que sus items DPS terminan con la back line. Los tanques no la alcanzan si kitea con su support."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Marksmen de larga gittata con poke"
      reason: "Caitlyn 650 AA, Jhin 4° tiro a 750, Varus W stackea a 925 — superan en poke al 600 de AA de Ashe y le bajan HP cada wave sin entrar nunca al rango de W."
    - examples: ["lucian", "tristana"]
      archetype: "Marksmen de alta movilidad con dashes"
      reason: "La E de Lucian y la W de Tristana ignoran el slow de Ashe reposicionándose al instante. Cierran la distancia sin pagar el precio de kiteo que castiga al resto de ADCs."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Supports de engage con burst y CC duro"
      reason: "Ashe no tiene dash ni shield para escapar de cadenas de lock-down. Una Q de Leona o de Nautilus bien colocada la saca del trade antes de que pueda devolver W, y el slow no sirve si está stuneada."
---

## Resumen

Ashe es la marksman más simple de League — un rol llamado "ADC" (attack damage carry: un campeón ranged que pega con auto-attacks y se convierte en la fuente principal de daño en late-game). No tiene dash, no tiene reposition tool y tiene la movement speed base más lenta de todos los marksmen. A cambio recibe el kit más fiable en utility de cualquier ADC: cada auto-attack aplica slow, su **W** hace poke (chip damage a distancia para bajarle HP al enemigo sin comprometerse a un fight) desde 1200 unidades (más o menos media pantalla) con slow incluido, y su **R** es un skillshot global con stun que regala engages al equipo sobre los objetivos en cualquier punto del mapa. Está diseñada para hacer **kite** — moverse hacia atrás mientras atacas para mantener al enemigo a distancia — y para habilitar picks (eliminar a un solo enemigo fuera de un teamfight) al resto del equipo.

Su plan en lane es: clavar **W** sobre el ADC enemigo cada cooldown para ralentizarlo y bajarle HP, farmear seguro con auto-attacks y buscar plays de nivel 6 con la **R** en cuanto su support tenga un CC listo (Crowd Control: stuns, slows, roots que bloquean al enemigo). En teamfights (peleas 5v5 que deciden objetivos como Drake o Baron — monstruos neutrales que dan buffs al equipo que los mata), se queda al rango máximo de AA detrás de su front line (los tanques/bruisers que abren el fight), activa **Q** cuando tiene 4 stacks (cargas de Q que se acumulan con las auto-attacks; el contador aparece bajo el portrait) y encadena slows sobre quien pise su front line. La habilidad más difícil de Ashe es la predicción de **R** — snipear con un segundo de tiempo de vuelo es la diferencia entre un pick gratis y una ult tirada a la basura.

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (un poco de AD + lifesteal — cura una porción del daño infligido) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Items core (en orden):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — power spike de primer item (el momento en que un champion se vuelve notablemente más fuerte después de completar un item). Las AA frecuentes de Ashe procean (activan) la pasiva Energized (efecto stackeable que libera daño mágico bonus en una AA cargada) muy rápido.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed. La Q potenciada de Ashe escala con attack speed, así que ayudan en cada fight desde el minuto 8 en adelante.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — añade dos flechas laterales a cada AA. Las flechas laterales aplican slow de Frost Shot a los objetivos cercanos: en teamfight Ashe ralentiza a todo el equipo enemigo sólo atacando al tank de la front line.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador late de crit (critical strike: probabilidad de que una AA haga ~175% de daño). Aquí la Q potenciada pasa de "abulta" a "borra squishies en 2 segundos" (squishy: champion con pocas defensas).

**Items situacionales:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn). La penetración de armadura porcentual ignora una porción fija de la armor enemiga, así que los tanques mueren igual de rápido que los squishies.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps que apilan curación (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (efecto que reduce a la mitad la curación que reciben los enemigos).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra assassins o divers (Zed, Kha'Zix, Talon — campeones diseñados para saltar a la back line). Su pasiva Ghost te deja atravesar minions y champions enemigos mientras kiteas.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra poke pesado (chip damage a larga distancia desde mages de artillería) o contra burst comps. El lifesteal te cura en mitad del fight; en overheal acumula HP como escudo.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** es la única opción correcta en Ashe. El attack speed se traduce directamente en DPS de Q potenciada.

**Skill order:** Maxea **Q** primero (más AD bonus por AA potenciada + active más largo). Maxea **W** segundo (cooldown baja de 18s rank 1 a 4s rank 5 — eso es el spam de poke en lane). Maxea **E** al final (sólo utility). Pon punto en **R** a niveles 6, 11, 16.

**Runas:** Árbol primario **Precision** (el árbol que escala con AA) con **Lethal Tempo** (attack speed extra mientras sigues auto-atacando a un champion), **Triumph** (cura en takedown), **Legend: Alacrity** (más attack speed por stack acumulado), **Coup de Grace** (daño extra contra enemigos por debajo del 40% HP). Árbol secundario **Inspiration** con **Biscuit Delivery** (galletas gratuitas que dan mana y HP en lane) y **Cosmic Insight** (más uptime de **Flash** y **R**).

## Matchups clave

- **Caitlyn:** El matchup más duro. Tiene 650 de rango AA contra tus 600, traps (W) más largas y un hook (E) de 1300. Escóndete tras los minions cuando coloque trampas; deja que tu support engage sobre ella sólo si se sobreextiende (avanza demasiado más allá de sus propios minions, sin escape si la gankean). Power-farmea seguro (céntrate sólo en recoger oro de minions sin riesgos) hasta que ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** esté online, y luego busca picks cross-map con **R**.
- **Lucian:** Pierde nivel 1 contra Ashe pero se voltea a nivel 2 con el combo Q + E. Guarda **W** para cuando él te haga double-AA (encadena dos auto-attacks seguidos), y luego camina mientras él está atrapado a mitad de combo. Nunca tradees después de su **E** — el dash lo hace inalcanzable hasta que vuelva a estar en cooldown.
- **Vayne:** Pre-6 farm gratis: tiene 550 de rango y nada de slow. Empuja la wave (manda tus minions hacia su torre) hacia su lado, harasséala (pequeño chip damage continuo para bajarle HP) con **W** cada cooldown. Después del 6 su ult le da invisibilidad en el dash de Q; no la persigas a los bushes (zonas de terreno que bloquean la visión).
- **Jhin:** Te poke desde lejos con su W (skillshot de poke). Mantente detrás de tu primera línea de minions; su W lo ralentiza a él si toca un minion antes. Castígalo durante su recarga (cargador de 4 tiros + reload manual de 2.5 segundos).
- **Draven:** Pierde la guerra de AA en directo — sus hachas de Q hacen mucho más daño por AA que tu base. Evita trades 1-por-1; commit sólo cuando las hachas no estén en sus manos. Compra ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** antes de lo habitual si llega a 3 kills de ventaja.

## Power spikes y condiciones de victoria

- **Nivel 1:** Fuerte con **W**. El cono de 1200 es la mejor herramienta de trade lvl 1 de cualquier ADC (un "trade" es un breve intercambio de daño en lane, no un intento de kill). Saca un trade gratis sobre el ADC enemigo si se acerca a por un cs (creep score: rematar un minion para llevarte su oro).
- **Nivel 6:** La primera **R** desbloquea kills en lane con cualquier support con CC. Si tu Leona / Nautilus / Pyke tiene ult, R + su engage = kill garantizada sobre el ADC enemigo si no está a HP completa bajo torre.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completo (~ minuto 11-13):** El waveclear (limpiar la wave enemiga con daño AOE) se voltea. Puedes shovear la wave con W + 2 AAs y luego roamear (salir de lane para ayudar a aliados) para plays cross-map de **R** sobre Drake o skirmishes mid (peleas pequeñas entre 2-3 jugadores en el river o la jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** La Q potenciada con crits derrite a la back line en 2-3 segundos. Fuerza un teamfight en cada objetivo desde aquí en adelante.

## Errores comunes

- **Activar Q a stacks bajos.** **Q** sólo hace daño si tienes 4 stacks (los ves bajo tu portrait). Activarla antes desperdicia 30 mana por una Q sosa. Auto-ataca 4 veces primero, luego pulsa Q.
- **Tirar R en cooldown en lane.** **R** es la herramienta más valiosa de tu equipo (stun cross-map para fights de Drake, setups de Baron). Guardarla para fights de objetivo casi siempre vale más que quemarla por un trade en lane. La excepción: una ventana letal de kill donde la R garantiza el remate.
- **Quedarse quieta auto-atacando en un fight.** Ashe está hecha para kitear; estar quieta significa comer skillshots que esquivarías moviéndote. Mueve un paso entre AAs para descolocar el timing enemigo.
- **Empujar la wave sin vision.** Ashe no tiene escape. Si pushas más allá del mid-river sin que tu support warde el tribush y el river, el jungla enemigo te mata gratis. Siempre **W** al bush que no ves antes de avanzar.
- **W a los minions en cooldown.** **W** cuesta 75/70/65/60/55 mana y el slow es la mejor herramienta de harass en lane. Guárdala para el ADC enemigo, no para la wave.

## Consejo avanzado

Practica el **flash R** — cuando un enemigo está a punto de escapar a la fog of war con poca HP, **Flash** hacia la dirección en la que corre y dispara **R** inmediatamente. El flash te reposiciona 400 unidades hacia adelante, así que la **R** recorre 400 unidades menos antes de impactar — pero la duración del stun escala con la distancia recorrida, así que esto sólo funciona como finisher contra targets near-execute (enemigos ya lo bastante bajos como para que cualquier impacto extra los mate). La condición de victoria: el enemigo cree que escapó a 200 HP porque Ashe sigue a 1500 unidades de distancia, sin ver el flash + R que cierra la persecución.
