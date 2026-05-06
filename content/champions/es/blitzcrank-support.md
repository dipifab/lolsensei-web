---
title: "Blitzcrank Support Build & Guía — Patch 16.9"
slug: "blitzcrank-support"
language: "es"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Guía de Blitzcrank support para el Patch 16.9: timings de hook, setups de wards, build de engage, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "Cuando bajas a HP bajos recibes un escudo proporcional al maná actual. Conviene volver a fight con la barra de maná llena."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Skillshot lineal de larga distancia: tira hacia ti al primer enemigo impactado (un 'hook' — un tirón que arrastra al objetivo). Cooldown largo: hook fallado = 16-20 segundos sin engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-buff: mucho move speed y attack speed, luego un slow al final. Se usa para cerrar el gap antes de la Q o para perseguir tras el knock-up de la E."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Carga el siguiente basic attack para hacer un knock-up breve. Range cuerpo a cuerpo: Blitz tiene que estar ya pegado al objetivo."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Activa: daño y silence (bloqueo breve de todos los hechizos) a los enemigos alrededor. Pasiva: una carga aplica daño eléctrico extra en el siguiente basic attack."
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra mucho crowd control o burst AP (Lux, Morgana, Ahri) — magic resist y tenacity (recuperas antes del CC)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC sobre tu carry (Morgana Q, Ashe R, Leona engage) — el activo limpia un stun del ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de poke (Xerath, Caitlyn, Senna) — heal de área en teamfight recupera el HP perdido"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "cuando quieres más hooks por fight — Ability Haste recorta segundos a la Q: un hook fallado pesa menos"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Acierta una Rocket Grab sobre un priority target (ADC enemigo o backline mage) y rematalo con la chain W-AA-E-R antes de que su equipo haga peel (proteger al carry del daño entrante)."
  weakness: "Si la Q falla, tienes 16-20 segundos casi sin engage. Lanes con disengage (Janna, Lulu) o con cuerpos que bloquean el hook (minions, tanks delante) apagan el kit."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "ADCs de posición estática sin dash"
      reason: "Tienen que pararse a rango para atacar tras la línea de minions: un hook trazado sobre el arco del minion cañón llega limpio porque no tienen escape instantáneo."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishy con HP base bajo"
      reason: "Sacar al enchanter de posición borra la lane: su carry se queda sin peel y la combo Q-W-E-R sobre un objetivo de 500 HP cierra el trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Mage supports estacionarios"
      reason: "Castean desde lejos para hacer poke. Un hook a max range sobre el frame de cast los pilla antes de poder flashear y le regalas un 4v5 a tu equipo."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Tanks engage que ganan la carrera de hook"
      reason: "Si hookean o cargan primero, tu animación de Q se interrumpe y tu compañero come la chain de CC: en lane hook-vs-hook pierde quien telegrafía el cast."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage e inmunidad a CC"
      reason: "Janna Q tornado te saca del rango de E; Lulu W slowea o polymorpha el engage; Morgana Black Shield bloquea el hook entero."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Bruisers con self-peel"
      reason: "Tras un hook exitoso pueden headbuttear o devorar al propio ADC: el pull no cierra la kill, y el cooldown largo de la Q se vuelve ventana de punish."
---

## Resumen

Blitzcrank es un support tank-engage cuyo gameplay gira entero alrededor de acertar una habilidad: **Rocket Grab (Q)**. El hook (un tirón que arrastra al enemigo hacia ti) abre cada fight con este kit. Si la aciertas, la bot lane es un 2v1 durante dos segundos; si la fallas, tienes 16-20 segundos de cooldown casi sin engage. Escala con cooldown reduction (llamado "Ability Haste") y con build tank, porque su trabajo es caminar adelante, hookear, knock-uppear y sobrevivir lo suficiente para que su ADC remate.

El game plan en una frase: warda los bushes, mira los pies del ADC enemigo, lanza la **Q** cuando pisa una trayectoria predecible y luego encadena **W** (self-buff de move speed) → auto-attack → **E** (knock-up) → **R** (silence de área). Fuera de los fights tu trabajo es la vision: pon wards en el río y en el tri-bush para que tu jungla y mid laner sepan cuándo el enemigo está missing.

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + trinket ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**. Compra un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** en cada back desde el segundo back en adelante.

**Items core (en orden):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter de support. Da gold pasivo y se actualiza automáticamente a ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** al pasar el umbral (alrededor del minuto 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — el upgrade warden del starter. Health, Ability Haste y un aura que slowea al enemigo que inmovilizas: encaja perfecto con el knock-up de la **E**.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas de armor contra bot lanes cargadas de auto-attacks (la mayoría de ADCs); cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra mucho crowd control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — activo de escudo de área. Después de hookear y que tu equipo committe, aprietas Locket cuando el burst enemigo está a media casteo: absorbe el spike y convierte un fight 50/50 en un fight limpio.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — vincula la pasiva a tu ADC. Tras detonar tu **R**, el ADC recibe un buff de daño en cada auto durante unos segundos.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — item de peel para late game (peel = proteger al carry del daño entrante): redirige parte del daño que recibe el ADC sobre ti. Combina con tu stack tank y te permite meterte en la backline para body-blockear (ponerte en el camino para absorber golpes dirigidos a un aliado).

**Items situacionales:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC sobre tu carry (Morgana Q, Ashe R, Leona engage). El activo limpia un stun del ADC en mitad del fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contra comps de poke (Xerath, Caitlyn, Senna): el heal de área en teamfight recupera el HP que sangraste al intentar caminar adelante.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — cuando quieres más hooks por fight; Ability Haste recorta segundos a la **Q** para que un hook fallado duela menos.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** son el default contra la mayoría de bot lanes. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra burst AP o stuns; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si confías en tus hooks y quieres relanzarlos antes.

**Skill order:** Maxea **Q** primero (el hook es el kit), **E** segundo (el knock-up escala con el rank), **W** al final. Pon un punto en **R** a niveles 6, 11 y 16.

**Runas:** Primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock te da un burst de armor y magic resist nada más inmovilizar a un enemigo: salta exacto sobre el pull de la **Q**, así que en el momento mismo en que te conviertes en objetivo, tankeas el daño de vuelta. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Alternativa: **Inspiration** primario con **Glacial Augment** si prefieres una lane de poke-and-slow (menos común pero viable contra enchanters inmóviles).

## Matchups clave

- **Caitlyn / Janna:** Caitlyn pone trampas en los bushes por los que pasarías para hookear. Compra un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** para el bush de la lane y revísalo antes de entrar; el tornado de la Q de Janna interrumpe la animación de tu **Q**, así que espera a que lo gaste sobre la wave antes de tirar la tuya.
- **Thresh / Nautilus:** Lane hook-vs-hook. Quien hookea primero suele perder, porque el segundo hook es respuesta gratis. Usa los minions como body-block: ponte detrás del minion cañón, fuérzalos a committear y castiga sobre el cooldown.
- **Lulu / Yuumi:** Escalan con su ADC y no tienen engage. Tienes prio en lane: lanza hooks sensatos, pero sobre todo roamea a mid alrededor del nivel 4-6 con la **W** activa. Un hook cross-map sobre un mid laner que pushea demasiado es la jugada de mayor valor para Blitz.
- **Morgana / Lux:** Las dos pueden frenar tu hook con un root de larga distancia. La E de Morgana (Black Shield) se traga tu **Q** entera. Oblígala a usarla sobre la wave: finge un hook, sidestep, y luego committea cuando su escudo está en cooldown.
- **Ezreal / Senna:** Hacen poke sin committear adelante. El plan de lane no es "hookear al ADC cada 16 segundos" — es "negarles vision para que tu jungla pueda gankear". Pon ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** en la entrada del río y pingea gank cuando Ezreal flashea una wave.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + W):** Primer power spike de hook. Con la **W** activa persigues el pull unos pasos extra antes de que entre el slow final: eso a menudo convierte un hook en kill en vez de un trade al 50% HP.
- **Nivel 6 (R desbloqueada):** Tu all-in se vuelve kill garantizada sobre la mayoría de ADCs. La combo es **Q** → **W** → auto-attack → **E** knock-up → **R** silence y daño. El silence impide que el support enemigo te haga **Flash**-disengage del carry.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completado (~ minuto 12-15):** El upgrade warden del starter desbloquea la versión teamfight del kit: cada inmovilización que aciertas slowea al objetivo para tu ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completado (~ minuto 22-26):** Ahora puedes engage sobre un 5-stack en mid game sin que la backline acabe bursteada. Es el spike desde el que empiezas a buscar jugadas con ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** hacia los objetivos.

## Errores comunes

- **Lanzar Q en cooldown sin setup.** Un hook sin follow-up es desperdiciado: si tiras hacia ti un objetivo que tu equipo no llega a alcanzar, le acabas de regalar 16-20 segundos al enemigo. Lanza **Q** solo cuando el ADC está en rango para committear el all-in (la chain de daño completa hasta la kill, sin volver atrás).
- **Telegrafiar la animación del hook.** Blitz levanta el brazo con una animación de cast claramente visible antes de que salga la **Q**. Rivales decentes hacen sidestep en el wind-up. Lanza **Q** desde dentro de un bush, desde la fog of war (las zonas oscuras sin visión donde el enemigo no te ve), o mientras el enemigo está bloqueado animando una habilidad propia: así no puede reaccionar.
- **Hookear al objetivo equivocado.** Tirar hacia ti al tank o bruiser enemigo es casi siempre un desastre: le regala a su equipo un engage gratis sobre ti. Busca siempre primero al objetivo squishy (campeón de mucho daño y poca defensa, tipo ADC o mage) antes de committear la **Q**.
- **Olvidar el coste de maná de la pasiva.** El escudo de la pasiva **Mana Barrier** escala con el maná actual, así que backear con maná bajo significa empezar el siguiente fight con un -30% de escudo. Backea cuando la **Q** está en cooldown y el maná baja del 40%, no cuando te apetece.
- **Usar la R solo por daño.** **Static Field** es más útil como silence (un bloqueo breve sobre el cast de hechizos enemigos) que como daño. Guárdala para cuando el support enemigo está a media canalización de una habilidad clave: el interrupt vale más que el burst sobre enemigos a 200 HP.

## Consejo avanzado

El setup de hook más fuerte del juego es el **bush-fog hook**. Métete en el bush de la lane detrás de tu wave, donde el enemigo no te ve. Espera a que la wave pushee para que el ADC enemigo avance a hacer last-hit (matar un minion para gold) sobre el minion cañón. Lanza la **Q** a través de la pared del bush: no tienen animación que leer, no tienen tiempo de hacer sidestep, y la mano cruza el bush antes de que se den cuenta del cast. Combínalo con la **W** activa para cerrar el gap antes de que entre el flash de su support. Este patrón solo es responsable de la mayoría de las kills de lane que Blitzcrank consigue por encima del umbral de bronze.
