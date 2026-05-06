---
title: "Fizz Mid Build & Guía — Patch 16.9"
slug: "fizz-mid"
language: "es"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Guía Fizz mid para League of Legends Patch 16.9: build de assassin AP, matchups clave, power spikes, errores comunes y un consejo avanzado sobre el timing de la E."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Camina a través de las unidades (los minions no lo bloquean) y recibe una reducción fija de daño de cada fuente. Ayuda a desengancharse cortando a través de tu propia oleada."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Dash dirigido de 550 de rango a través de un enemigo. Inflige daño mágico y aplica efectos on-hit (passives de item que se activan en cada auto-attack, como la spellblade de Lich Bane). Gap-close principal, cooldown corto."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Pasiva: tus auto-attacks hacen sangrar al enemigo por daño mágico durante 3 segundos. Activa: potencia tu próxima auto-attack con daño mágico bonus. Matar a un objetivo con W activa resetea el cooldown a 1 segundo."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Salta sobre el tridente: 0.75s untargettable, luego golpea el suelo con daño mágico AOE y un slow. Reactiva para hacer otro dash en lugar del slam (sin slow, área menor). Tu única escape y el corazón del combo."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Skillshot lineal de larga distancia (1300). Se pega al primer champion impactado, lo ralentiza, luego un tiburón erupciona y lo lanza al aire. Daño y slow escalan con la distancia recorrida por el pez."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primer item alternativo contra comps de poke ranged donde necesitas un dash extra para llegar a la back line"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra lockdown CC pesado (Lissandra R, Rell ult): la stasis deja detonar la R fish antes de morir"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Annie stun, Twisted Fate gold card, Malzahar suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap cuando cualquier objetivo prioritario compre un item de magic resist"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Encuentra squishies aislados en side lanes tras completar Lich Bane. Lanza R fish a máximo rango, luego Q + W + AA spellblade para borrarlos. Roamea con la oleada en el lado enemigo."
  weakness: "Squishy melee con un solo ciclo de engage. Si E o R están en cooldown no tienes escape ni segundo commit; el CC focalizado cierra el combo antes de que la R fish aterrice."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Magos inmóviles sin dash"
      reason: "La Q de Fizz los dashea por instinto y la E le da 0.75s de untargettability para esquivar su hechizo clave. Sin un dash de escape no pueden responder al all-in cuando la R fish se pega."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Artillería de larga distancia sin movilidad"
      reason: "La R fish llega a 1300 unidades: castiga el posicionamiento a máximo rango. Una vez que Fizz hace commit con Q + E no tienen dash para resetear distancia y deben absorber toda la burst window."
    - examples: ["annie", "syndra"]
      archetype: "Magos close-range con engage telegrafiado"
      reason: "Su burst exige caminar adelante con un tell lento (stun-buffer de Annie, setup de Syndra E). Fizz E durante la cast window lo hace untargettable y el combo falla."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Mids tankys con engage duro"
      reason: "Sus resistencias cortan el burst de Fizz a la mitad (la W de Galio reduce ~50% de daño mágico, la pasiva-shield de Malphite bloquea el proc de W). Ambos tienen engage fuerte a 6 que castiga el commit primero."
    - examples: ["lissandra", "malzahar"]
      archetype: "Magos con CC point-and-click"
      reason: "La R de Lissandra es stasis point-and-click (sin skillshot que esquivar con E), la R de Malzahar suprime a través del recast de E. Ambas también limpian oleadas, así que Fizz no puede zonarlas en lane."
    - examples: ["pantheon", "talon"]
      archetype: "Bullies de lane early-game"
      reason: "Out-tradan a Fizz en niveles 1-3 antes del power spike de nivel 6. El stun de Pantheon W y la Q escudada pokean cada paso adelante; la Q de Talon iguala el rango de la Q de Fizz con menor coste de mana."
---

## Resumen

Fizz es un assassin AP melee que vive o muere por el timing de su **Playful / Trickster (E)**. Su kit es de corto alcance, alto burst (daño concentrado en una ventana de 1-2 segundos en vez de repartido en el tiempo) y resbaladizo: un instante de 0.75 segundos en el que no puede ser bersagliato, un dash de cooldown bajo y una ult-pez de larga distancia que bloquea a un objetivo prioritario. Mid lane le sienta bien porque el río es corto — puede engagear desde nivel 6 con **Q-E** dentro de **R**, esquivar el counter-CC a mitad de combo y luego salir con el recast de **E**.

Su plan de partida es sobrevivir en lane hasta su power spike de dos items (Lich Bane + Sorcerer's Shoes), luego buscar picks (eliminar a un enemigo aislado fuera de los teamfights) sobre objetivos squishies (champions con poco HP y sin stats defensivas — mueren rápido bajo burst) en side lanes. Él mismo es squishy, no tiene waveclear y su única escape (**E**) parte con un cooldown de 16 segundos a rango 1 — perderla sin sacarle valor le castiga duro. Fizz prefiere objetivos individuales que borrar antes que teamfights 5v5, donde el CC focalizado le cierra el combo antes de que la R fish aterrice.

## Build Recomendada

**Items iniciales:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** en su lugar contra matchups de poke ranged pesado (harass a distancia que va sangrando HP) como Xerath o Vel'Koz.

**Items core (en orden):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — tu power spike principal (el momento en el que tu daño sube de categoría y puedes empezar a pelear desde una posición de fuerza). Sinergiza con el patrón Q-AA: cada **Q** activa el efecto spellblade en tu siguiente auto-attack, casi duplicando tu burst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica fija para los objetivos squishies que más quieres borrar.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra más una HP-threshold passive (efecto de item que se activa solo cuando el objetivo está por debajo de ~35% HP) que cuadra con los executes de la R fish.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling late-game. Tu slot de mayor AP y el item que convierte squishies en objetivos one-shot.

**Items situacionales:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primer item alternativo si necesitas un gap-close extra (forma de cubrir la distancia hasta el enemigo) para alcanzar una back line de poke ranged que la **Q** sola no puede cerrar.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra lockdown CC pesado (Lissandra R, Rell ult): la stasis deja detonar la R fish antes de que mueras.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Annie stun, Twisted Fate gold card, Malzahar suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto cualquier objetivo prioritario compre un item de magic resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables cuando **E** se vuelve tu cooldown más importante (matchups muy combo-dependientes).

**Skill order:** Maximiza **E** primero (untargettability + scaling de daño AOE — AOE significa *area of effect*, el hechizo golpea todo lo que esté dentro de una zona), **Q** segundo (cooldown reduction = más dashes por pelea), **W** al final. Pon punto en **R** a niveles 6, 11, 16.

**Runas:** Árbol primario **Domination** con **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Secundario **Sorcery** con **Manaflow Band** y **Scorch**. Electrocute encaja perfectamente con la ventana de tres golpes Q-AA-W: cada all-in (commit total al combo hasta la kill o el escape) la procca.

## Matchups clave

- **Annie:** Engage telegrafiado. La pasiva de Annie stunea el siguiente hechizo después de cada cuatro habilidades que lanza — verás acumularse cuatro pequeñas marcas azules a su alrededor. En el momento en que aparezcan las cuatro marcas, está cargando un all-in. Salta con **E** mientras lanza el stun; cuando aterrices, su combo principal está desperdiciado y el trade es tuyo.
- **Yasuo / Yone:** El Wind Wall de Yasuo (un muro que bloquea los hechizos ranged que lo atraviesan) detiene los proyectiles, pero **Q**, **E** y **R** de Fizz no son proyectiles bloqueables. Out-tradéalos (sal del intercambio en ventaja) con **W** activa en tus auto-attacks; su muro es una mecánica desperdiciada contra ti.
- **Lissandra:** Hard counter. Su **W** es un AOE (area of effect — golpea todo lo que esté en una zona) de root point-blank, y su **R** es stasis point-and-click (un hechizo sin skillshot que esquivar: te clickea, el hechizo aterriza). Ninguno es un skillshot (hechizo no automático que vuela en línea o área que puedes esquivar caminando) que puedas evitar con **E**. Reserva la **E** para el cast de su **W**, nunca all-in sin **R** disponible, y busca picks en side lanes en su lugar.
- **Galio:** Stats de tank y una pasiva de magic damage reduction en su **W** que corta tu burst completo a la mitad. Deja de intentar matarlo en solo; gasta mana shoveando la oleada (empujando tus minions hasta la torre enemiga para que no puedan caminar libremente hacia ti) y roamea (mueve tu champion fuera de la lane para ayudar a aliados en otra parte del mapa) bot o top en cuanto **R** esté online.
- **Pantheon:** Te castiga pre-6. Su stun de **W** y la **Q** escudada out-tradan a niveles 1-3. Quédate detrás de tu oleada y haz trade solo cuando su **W** esté en cooldown. El matchup se da la vuelta a 6 cuando tienes **R**.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **E** + **Q** tienes un ciclo garantizado dash + slow + daño AOE. Si el enemigo avanza para last-hittear un melee minion, **E** encima de él y suelta **Q-AA** para un trade ganador (un breve intercambio de golpes del que sales en ventaja).
- **Nivel 6:** La primera **Chum the Waters** desbloquea los all-ins. El combo **R-Q-W-AA-E** borra a cualquier mid laner squishy incluso con solo los componentes base de Lich Bane comprados. Roamea bot lane después de shovear la oleada: con los minions empujados al lado enemigo, ellos pierden más tiempo defendiendo que tú dejando la lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minuto 11-13):** Spike de burst (el momento en el que tu daño da un salto súbito). Tu spellblade Q-AA arranca aproximadamente 40% HP a un squishy en un solo cast. Esta es la ventana en la que deberías estar roameando agresivo por picks en vez de hacer 1v1 en lane.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Tu combo completo one-shotea a cualquier squishy que no haya comprado ni un solo item de magic resist. Fuerza fights por objetivos aquí; niega la vision (mata las wards enemigas para que no tengan ojos en el mapa) en el lado de tu equipo para que el enemigo no pueda ver tu flank (entrar al fight desde un lado que no cubrieron).

## Errores comunes

- **Usar E antes de su commit.** **E** es tu única escape. Si saltas sin antes baitear su CC, te comes el hechizo al aterrizar. Espera a que tiren la habilidad clave — *entonces* salta.
- **R fish desde demasiado cerca.** El daño y la fuerza del slow del pez escalan con la distancia recorrida antes de pegarse. Lánzala desde el rango máximo de 1300 para que impacte con daño completo y el slow dure toda la ventana de detonación.
- **All-in dentro de 2+ enemigos.** Fizz tiene un solo ciclo de engage (commit total a un único combo). Si un segundo objetivo aparece a mitad de combo, no tienes una segunda R fish, no tienes una segunda escape, y caes ante el CC focalizado. Busca objetivos aislados en side lanes, no 5v5 mid.
- **Olvidar W durante chases.** Matar a un objetivo con **W** activa devuelve mana y baja el cooldown a 1 segundo — puedes encadenar otra auto-attack potenciada en un segundo objetivo al instante. Activa **W** antes del golpe killante siempre que haya un objetivo de follow-up cerca.
- **Maxear W primero en lanes normales.** **Q** y **E** llevan tu daño y el timing del combo; el bleed de **W** es DPS sostenido que cuenta en trades extendidos, no en ventanas de burst. Por defecto: maxea **E** primero.

## Consejo avanzado

Practica el **R-Flash combo** (R + Flash). Lanza el pez hacia adelante y luego usa **Flash** inmediatamente en la misma dirección: el pez aterriza mucho más lejos de los 1300 unidades naturales, dándote una catch garantizada sobre un objetivo que se cree fuera de rango. Úsalo para picks a través de muros o para abrir fights por objetivos desde ángulos inesperados. La ventana cast-to-Flash es corta — bindea **Flash** a tu segunda tecla (D) por memoria muscular y ensáyalo en el practice tool hasta que el timing se sienta automático.
