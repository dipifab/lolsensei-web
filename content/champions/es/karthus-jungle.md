---
title: "Karthus Jungle Build & Guía — Patch 16.9"
slug: "karthus-jungle"
language: "es"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Guía Karthus jungle League of Legends Patch 16.9: smite path, clear con Defile, R global, matchups clave, power spikes, errores comunes y consejo avanzado."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "Al morir, Karthus entra en forma espíritu durante 7 segundos y sigue lanzando Q/W/E sin coste de maná. Le permite cerrar un fight desde más allá de la tumba."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Estallido de área dirigido con un pequeño retraso. Inflige el doble de daño si impacta a un solo enemigo. Skill expression: predecir el movimiento y aislar el objetivo."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Muro ancho que reduce la magic resist y ralentiza a quien lo cruza. Sirve como herramienta de chase, lock para gank o peel sobre los divers que entran a tu back line."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle que crea un aura de daño mágico por segundo alrededor de Karthus mientras drena maná. Es el motor del clear y de la DPS en teamfight: déjalo activo en cada camp."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Ultimate global con channel de 3 segundos que inflige mucho daño mágico a todos los champions enemigos del mapa. Snipe cross-map y cleanup post-mortem."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra junglers de invade early (Lee Sin, Xin Zhao, Elise) — la stasis cubre tu falta total de movilidad"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo cuando un priority target compre su primer ítem de magic resist (Mercury's Treads cuentan)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra engages de magic CC a un objetivo (Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps con mucho healing (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Llega a nivel 6, full-clear más rápido que el jungler enemigo y usa R para rematar a HP bajo cross-map. Con dos ítems, solo Defile derrite la back line en cualquier 5v5."
  weakness: "Sin dash, sin escape, cero dueling early. Counter-jungled o invadido antes de nivel 6 te quedas atrás toda la partida. Asesinos móviles y junglers con mucho CC rompen el clear pre-Liandry's."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror se stackea rápido con Defile (la toggle aura que tickea daño por segundo), convirtiendo skirmishes largos en AP bonus y healing. Triumph devuelve HP en takedowns. Legend: Haste acorta la R. Last Stand premia la spirit form a HP bajo."
    secondary_rationale: "Sorcery secondary: Manaflow Band soluciona la mana starvation early que provoca Defile drenando maná cada segundo. Transcendence empuja el ability haste más allá del cap del 40% para que la Q vuelva más rápido entre waves y la R rote más a menudo."
    secondary_alternative: "Contra junglers enemigos de invade pesado (Lee Sin + roams de Pyke, Elise + supports con CC early), cambia Sorcery por Resolve con Second Wind (HP regen tras recibir daño, ayuda a sobrevivir al invade de nivel 3) y Overgrowth (HP bonus que escala con monsters matados)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-game scalers con presencia early débil"
      reason: "Necesitan 25+ minutos para llegar online; Karthus ya gana skirmishes a nivel 6 y usa R para negar sus Baron solo. Out-tempo: fuerza drakes y cierra antes de que lleguen a su power spike."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Junglers farm-heavy lentos sin invade nivel 3"
      reason: "Full-clearean a la misma velocidad que Karthus, pero Karthus tiene la R global que convierte su gank en un 2-for-1: aunque maten a tu laner, R limpia al suyo cross-map antes de que recall."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline scalers sin movilidad"
      reason: "La R cross-map convierte sus errores de posición en kills en los objective spawns. Aportan desde lejos pero no pueden esquivar un snipe global lockeado sobre una flash o ulti faltante."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers early-game de invade con CC duro"
      reason: "Entran en la jungla de Karthus a nivel 2-3 antes de que Defile escale en maná. Karthus no tiene escape, ni dash, y su Q es demasiado lenta para salvarlo de una cadena Lee Sin Q + W o de un rappel de Elise. Un mal invade le arruina la partida."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Asesinos stealth o burst desde la jungle"
      reason: "Abren con isolation damage sobre un objetivo a defensas cero; incluso Zhonya's Hourglass solo retrasa lo inevitable en 1v1. Karthus muere antes de poder stackear Conqueror o tradear de forma significativa."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-deny gankers y tracker junglers"
      reason: "La R de Nocturne corta la vision del team, así Karthus no ve el engage sobre su back line; el blood tracking de Warwick convierte una R cross-map en un dive sobre un objetivo en channel. Karthus necesita vision para channellear R seguro y estos dos se la quitan."
---

## Resumen

Karthus jungle es el prototipo del **apex jungler**: un champion con uno de los techos más altos del juego y uno de los suelos más bajos. El kit gira en torno a dos ideas. **Defile (E)** es una toggle aura que tickea daño mágico por segundo alrededor de Karthus mientras drena maná, y es el motor del clear: una vez resuelto el problema del maná, full-clearea más rápido que casi cualquier otro champion. **Requiem (R)** es una ultimate global que golpea a cada champion enemigo del mapa y convierte errores de posición en otra parte en kills, lo más valioso que un jungler puede hacer en el momento adecuado.

El game plan es rígido. Full-clear de los tres primeros camps (red → krugs o blue → gromp según el side) con **E** toggled on, recall por los componentes de **Liandry's Torment**, y desde nivel 6 buscas targets de R cross-map mientras skirmisheas (un "skirmish" es un combate breve de 1-3 jugadores por bando, normalmente alrededor de un camp o un objective de río) en torno a drake y grubs (los pequeños monsters neutrales del void pit que dan gold y un buff de equipo). Sin escape ni dash, wardear las entradas de tu propia jungle al minuto 1:30 no es opcional. El payoff es el post-6: Karthus es uno de los pocos champions más peligroso muerto que vivo, porque **Death Defied** lo mantiene casteando 7 segundos después de llegar a cero HP.

## Build Recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default para junglers ranged — da el smite-pet que acelera el clear y aporta gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Hailblade (auto-evoluciona alrededor del minuto 3-4 al acumular suficiente XP en jungle). Companion default para junglers AP burst: añade un proc de daño mágico en la próxima auto tras lanzar un ability (un "proc" es un efecto pasivo que se activa por una condición — aquí, lanzar cualquier ability arma la próxima auto). Encaja con el daño de Q sobre objetivos aislados.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer ítem completo. El burn porcentual sobre HP castiga las pools de los objectives (drake, baron, herald) y se stackea sobre cada tick de Defile. Es el ítem que invierte tu velocidad de clear y te deja contestar drakes desde el minuto 8 en adelante.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, el power spike más barato entre los core items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — el slow en cada hit de spell tapa el mayor defecto de Karthus (sin chase, sin escape). Te permite quedarte pegado a targets kiteados para que Defile stackee Conqueror, y convierte el post-mortem en cleanup garantizado.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — revela enemigos golpeados por habilidades a larga distancia y añade un amplificador de daño. Sinergiza con Q y Wall of Pain a long range, y la reveal ayuda a lockear R globales a través de la fog of war (la zona no revelada fuera de la vision de tu team).
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling late game. Cómpralo último salvo que vayas 4+ kills arriba; en ese caso anticípalo para snowball ("snowball" = ventaja temprana que crece: kill → gold → ítem → más kills).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers early (Lee Sin, Xin Zhao, Hecarim, Diana). La stasis es la única respuesta de Karthus cuando una cadena de dashes cruza tu front line (los tanks y bruisers de delante que normalmente absorben los golpes por ti). También te permite castear R en stasis.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un priority target compre su primer ítem de magic resist. Las ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (las boots de magic resist) cuentan como ese primer ítem MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra engages de magic CC telegrafiados (Ahri R, Lissandra R, Nautilus hook). El shield bloquea el primer ability para que no te one-shoteen antes de poder castear R.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra composiciones con healing stacking (Soraka, Vladimir, Yuumi, Dr. Mundo). El Grievous Wounds reduce el healing enemigo a la mitad para que el daño de Defile se asiente.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** son el default. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si el equipo enemigo tiene 3+ amenazas de hard CC con daño mágico.

**Skill order:** Maxea **Q** primero (tu burst single-target y waveclear, la única ability que escala fuerte con el rank), **E** segunda (sube el daño por segundo de Defile y sostiene el drain de maná), **W** la última. Pon un punto en **R** en niveles 6, 11 y 16.

**Runes:** Primary **Precision** con **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** con **Manaflow Band** y **Transcendence**.

## Matchups clave

- **Lee Sin:** Pierdes cada 1v1 antes de nivel 6. Su cadena Q + W salta el delay de tu Q. Evita skirmishes solitarios pre-6, full-clear en su lugar, y wardea ambas entradas de tu jungle al minuto 1:30.
- **Master Yi:** Counter neto en 1v1 una vez que llega a Wit's End. Fuerza el fight 5v5 en ríos estrechos (drake pit, baron pit) donde su W-cleanse no lo salva de una secuencia Defile + R prolongada. Compra Zhonya's Hourglass como segundo ítem si toma ritmo.
- **Karthus mirror:** Decidida por el tempo de farm y la disciplina con R. Quien full-clearee un camp por delante a nivel 6 gana la primera R race. No malgastes R salvo para asegurar una kill o un smite — una R desperdiciada pone al Karthus mirror un minuto por delante en control de objectives.
- **Hecarim:** Matchup parejo. Te supera en chase pero se agrupa para Defile en teamfights. Wall of Pain en la trayectoria de su carga lo ralentiza fuera de su propio engage, y el post-mortem hace cleanup si te mata igual.
- **Sejuani / Amumu:** Favorable. Engagean agrupando al equipo enemigo en un stack — exactamente la forma que Defile quiere. Engage sobre el engage: si ultan dentro de tu equipo, entras con E toggled y miras a cada enemigo en llamas derretirse.

## Power spikes y condiciones de victoria

- **Nivel 6 (R desbloqueada):** Primer power spike global. **Requiem** convierte a cualquier enemigo a HP bajo cross-map en una kill. Desde aquí, ping al mid laner enemigo antes de recall y ulti sobre su channel de recall — kill gratis a riesgo cero.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 9-11):** El clear speed se invierte y la DPS sobre objectives (DPS = damage per second, aquí contra las pools HP de drake/baron/grub) se duplica. Desde este punto debes ser tú quien inicie los drake fights, no quien reacciona.
- **Dos ítems + boots (~ minuto 18-22):** Defile sola tickea por daño serio; en cualquier fight agrupado Conqueror se stackea rápido y tu R lockea el cleanup. Es tu ventana de skirmish más fuerte.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** R one-shotea a squishies que no han comprado ni un solo ítem de magic resist. Fuerza objective fights agrupados — Baron, Soul Drake, Atakhan ("Atakhan" = un boss neutral late-game que aparece sobre el minuto 14; trata su spawn como un 5v5 forzado).

## Errores comunes

- **Entrar en pánico con Death Defied.** La mayoría de los novatos quema los 7 segundos post-mortem huyendo del cadáver. La jugada correcta es engagear en un fight a HP bajo sabiendo que vas a morir: tu muerte inicia tu rotación de daño, no la cierra. Q-Q-Q-E en spirit form a menudo hace más daño del que habrías hecho vivo.
- **Lanzar Q al azar.** Lay Waste hace doble daño sobre un único enemigo aislado. Si disparas Q a una wave con tres minions más el laner, el daño cappa al valor menor. Saca al laner con W o espera a que un solo objetivo quede expuesto, luego Q al punto previsto.
- **Castear R por el kill steal.** Ultar en mitad del teamfight es desperdicio: cada enemigo ya está dentro de Defile. Guarda R para snipe cross-map (uso de R como finisher a distancia y de bajo riesgo sobre un enemigo faltante a HP bajo tras un fight) o para cleanup post-mortem. R es "after-the-fight", no "during-the-fight".
- **Saltarte la vision en tu propia jungle.** Coloca Stealth Wards en tri-bush y pixel brush al minuto 1:30. Karthus no tiene escape; un invade que no veas venir es una kill gratis para un jungler móvil.
- **Smite-greedear objectives sin R.** Drake y grub tienen HP escalado; tu smite no. Sin R off cooldown contra un jungler que sí la tiene, pierdes la smite war y el drake.

## Consejo avanzado

Practica el **suicide engage**. Cuando tu equipo commitea un 5v5 que no podéis ganar de frente, camina con Karthus dentro de la back line enemiga con Defile toggled, esperando morir. En el instante en que tu HP llega a cero, Death Defied te regala 7 segundos de cast gratis sin coste de maná — y la front line enemiga deja de atacar al cadáver porque no hay nada que golpear. Esa ventana de spirit form es donde Q-spameas al enemigo a HP más bajo que alcances y rematas con R a quien escape. Hecho bien, un Karthus que muere primero convierte un fight imposible en un ace.
