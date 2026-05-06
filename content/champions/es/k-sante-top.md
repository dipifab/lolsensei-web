---
title: "K'Sante Top Build & Guía — Patch 16.9"
slug: "k-sante-top"
language: "es"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "Guía de K'Sante top para League of Legends Patch 16.9: starter kit, build tank-skirmisher, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "Las habilidades marcan al objetivo. La siguiente auto-attack de K'Sante hace daño bonus. En forma All Out, todos los ataques y habilidades hacen daño extra."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "Golpe lineal corto que daña y ralentiza. Cada hit da un stack: con 2 stacks, el siguiente cast es una shockwave que atrae y stunea. CD bajo, herramienta de trade spammable."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "Se carga (unstoppable + fuerte reducción de daño) y luego dashea hacia delante, con knockback y stun a los enemigos golpeados. En All Out hace true damage bonus pero pierde knockback y stun."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "Dash corto + escudo propio. Si lo lanzas sobre un aliado, el rango aumenta y el aliado también recibe el escudo. En All Out el CD baja y el dash es más rápido."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "Lanza un campeón enemigo hacia atrás: si choca contra un muro recibe daño extra. K'Sante dashea detrás de él y se transforma — gana attack speed, armor pen y omnivamp, pero pierde max HP y resistencias bonus."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra AD que ataca y se cura (Aatrox, Trundle, Nilah, Yi) — aplica grievous wounds (40% de cura reducida)"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra burst AP top/jungla (Mordekaiser, Vladimir, Diana) — magic resist + 25% bonus a curas/escudos"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contra carries de attack speed alta (Vayne, Kog'Maw, Yi) — aura quita 20% AS y arruina su DPS"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap desde Plated Steelcaps si el equipo rival tiene 2+ amenazas de CC duro o un AP top — magic resist + tenacity"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "Haz de front line en los teamfights: carga W para frenar engages, guarda R para un carry clave y slámmalo contra un muro. En All Out, cierra a los backline a poco HP con burst de AS + armor pen."
  weakness: "Rango corto (W es 600, sin gap-closer real más allá de E). Los kiters ranged lo pokean fuera de lane. La R All Out es un commitment largo: perder ese fight lo deja sin win condition durante 80-120s."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria: Grasp of the Undying da HP scaling gratis en cada proc, perfecto para un tank que escala. Shield Bash convierte el escudo de E en daño bonus en la siguiente AA — sinergia directa con la passive. Conditioning + Overgrowth aseguran la tankiness late."
    secondary_rationale: "Sorcery secundaria: K'Sante necesita mana y ability haste. Manaflow Band sostiene el mana para spamear Q en lane; Transcendence da ability haste y refunda cooldown en takedown — clave para encadenar usos de R."
    secondary_alternative: "Contra matchups de poke pesado o de scaling (Vayne, Teemo, Jayce), cambia Sorcery → Inspiration con Biscuit Delivery (HP+mana biscuits gratis early) + Cosmic Insight (Flash y summoner spells con cooldown reducido)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Bruisers melee inmóviles sin dash"
      reason: "La W de K'Sante los stunea a medio intento y la R con wall slam castiga su falta de escape; el stun de 2 stacks de Q corta sus wind-ups clave (pull de Darius, E spin de Garen) antes de que terminen."
    - examples: ["renekton", "riven", "camille"]
      archetype: "Divers que dependen de combo con una sola ventana de commit"
      reason: "El stun de Q y el 40%+ de damage reduction de W comen su all-in: una vez gastados dashes y burst, K'Sante revierte con R y los cierra en forma All Out."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "Top laners ranged que lo kitan"
      reason: "La W de K'Sante solo tiene 600 de rango y la E 525. Los rivales ranged lo pokean con auto-attacks desde fuera del rango de W, luego se alejan cuando intenta cargar — dejándolo solo con una ulti de cooldown largo."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "Especialistas anti-tank"
      reason: "Los Vital Strikes de Fiora hacen true damage que ignora escudos y resistencias; la R de Olaf cleansa el stun de W y lo vuelve unstoppable en los trades; la R de Trundle le roba las resistencias bonus exactamente cuando es más vulnerable en forma All Out."
---

## Resumen

K'Sante es un híbrido tank-skirmisher: un bruiser pesado en forma base que se convierte en un duelista skirmisher cuando activa su ulti **All Out**. Todo el kit gira en torno a dos fases. En forma base absorbe daño con la reducción del charge-up de **W (Path Maker)**, controla los fights con el stun de **Q (Ntofo Strikes)** y el knockback de **W**, y se escuda a sí mismo o a un aliado con **E (Footwork)**. Cuando **R** lo transforma, intercambia toda esa durabilidad por attack speed, armor penetration y omnivamp (lifesteal que funciona con cualquier tipo de daño) — convirtiéndose en un duelista damage-dealer durante unos segundos.

El plan de partida es jugar la early lane con paciencia — short trades (intercambios cortos de 1-2 habilidades, sin commitment a la kill) con auto-attacks proccadas por **Q** (proc = un efecto que se activa cuando se cumple una condición; aquí, la marca de **Q** que tu próxima AA detona) — y luego snowballear (acumular ventaja: kills → gold → items → más kills) empujando la wave (la oleada de minions) hacia la torre enemiga y buscando engages con el charge de **W** una vez que tienes el sustain de Sundered Sky. A mid-game eres la front line del equipo (el tank/bruiser que abre el fight absorbiendo daño para que los carries — los damage dealers principales — disparen desde detrás). A late-game tu **R** es una herramienta de target removal: elige a un enemigo clave, slámmalo contra un muro y termínalo en forma All Out.

## Build Recomendada

**Items iniciales:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. El escudo da sustain en trades melee y una pequeña pasiva de heal-on-low-HP que encaja con el perfil tank de K'Sante.

**Items core (en orden):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — tu primer gran spike. Cada pocos segundos tu próxima auto-attack es un crit y te cura ~10% de los HP perdidos. El proc encaja perfecto con la marca de la passive de **Q** (un debuff de daño bonus que las habilidades aplican y que la siguiente AA detona).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + reducción fija contra auto-attacks enemigas. Botas por defecto contra un top laner AD.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — añade un aura que quema a los enemigos a tu alrededor (AOE = daño de área, no a un solo target). Ayuda a clearear waves y marca varios targets en teamfights, así los procs de **Q** golpean más a menudo.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — tu item de tank con scaling. Stackea armor y magic resist bonus en el tiempo durante los fights, más un pequeño strike AOE de retorno. Techo de tankiness late-game.

**Items situacionales:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra equipos con campeones AD auto-attack-heavy que se curan mucho (Aatrox, Trundle, Nilah, Master Yi). Aplica grievous wounds (40% de cura reducida) al enemigo cuando te golpea.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra amenazas AP top o jungla (Mordekaiser, Vladimir, Diana). Da magic resist y un 25% bonus a todas las curas/escudos que recibes — multiplica la heal de Sundered Sky y el omnivamp de tu **R**.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — contra carries de attack speed altísima (Vayne, Kog'Maw, Master Yi). El aura corta un 20% de attack speed a los enemigos cercanos, anulando su DPS mientras tú comes sus AAs.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap desde ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando el equipo rival tenga 2+ campeones de crowd-control pesado (Leona, Lissandra, Maokai) o un top laner AP. Da magic resist + tenacity (recuperación más rápida de stuns/slows).

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto contra AD top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP o CC pesado.

**Skill order:** Maxea **Q** primero (cooldown más bajo, daño principal y stun de 2 stacks), **E** segundo (más escudo + cooldown más rápido para engages), **W** último (el daño base escala menos por nivel — el valor está en la utility, no en el daño por rango). Punto en **R** en niveles 6, 11, 16.

**Runas:** Árbol primario **Resolve** con **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. Secundario **Sorcery** con **Manaflow Band** + **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Matchups clave

- **Vayne / Teemo:** Pesadillas de poke ranged (poke = daño a distancia para chipear HP sin commitment). Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, cambia las runas secundarias a Inspiration para sustain con **Biscuit Delivery** (HP+mana biscuits gratis en lane), y no intentes el W-charge — se salen del rango. Farmea bajo torre hasta que ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** esté online y pide ganks al jungler (gank = el jungler llega a tu lane por un sendero lateral para sorprender al enemigo).
- **Darius:** Favorable. El stun de Q a 2 stacks (el segundo cast de Q, tras acumular 2 stacks, atrae y stunea) corta su pull, la damage reduction de W absorbe el bleed (sangrado) del anillo exterior de su Q (la Q de Darius pega más en el borde del círculo, y su passive acumula sangrado a cada AA que te conecta). No pelees dentro del ring exterior de su Q en niveles 1-3; del 4 en adelante puedes short-tradear y caminar.
- **Mordekaiser:** Igualado o ligeramente favorable. Tu **W** durante el charge-up te vuelve unstoppable (inmune a stuns, slows y otros CC), así que puedes usarla dentro de su **R** prison para romper el efecto sobre ti. No quemes **W** sobre él fuera de la prison — guárdala.
- **Fiora:** Hard counter. Sus Vital Strikes hacen true damage (daño que ignora armor, magic resist y escudos). Tus escudos y resistencias no hacen nada contra su fuente de daño principal. Juega muy pasivo, cede CS (creep score = kills de minions) por seguridad y pide gank al jungler temprano.
- **Renekton:** Skill matchup (decidido más por quién juega mejor que por el kit). Su power spike en niveles 2-3 es brutal (un power spike es un momento donde el campeón se vuelve notablemente más fuerte, aquí por el desbloqueo de habilidades clave) — no pelees antes del nivel 3. Una vez que tienes las tres habilidades y ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** en construcción, revierts el matchup: el stun de Q corta su W (su spell de stun) y vas all-in (un trade de full commitment hasta la kill, sin opción de echarte atrás a mitad de fight).

## Power spikes y condiciones de victoria

- **Nivel 2 → Nivel 3:** En el nivel 3 tienes Q + W + E y el stun de Q a 2 stacks online. Esta es tu primera ventana de short-trade: abre con el charge de **W** para asustarlos lejos de la wave, luego **Q** dos veces para el stun → **E** para salir.
- **Nivel 6 (primera R):** All Out desbloquea la kill threat. Busca un gank del jungler: **R** al enemigo contra tu muro (el wall slam hace daño bonus y los bloquea), transfórmate y termínalos en forma All Out.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completo (~ minuto 11-13):** Tu sustain triplica. Ahora puedes ganar extended trades y aguantar en lane a través de intentos de gank. Empuja por una solo kill o monta un tower dive (entrar bajo torre enemiga para matar a pesar de los disparos de la torre — funciona porque la damage reduction de **W** absorbe los hits de torre durante el dive).
- **Teamfight a 3 items (~ minuto 22-26):** Con ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** te conviertes en la herramienta de engage primaria del equipo (el campeón que abre el fight saltando dentro y bloqueando un target). Busca picks con **R** (un "pick" = eliminar a un enemigo aislado fuera de posición) sobre los carries rivales cerca de muros.

## Errores comunes

- **Pulsar R cuando ya estás perdiendo el fight.** All Out cambia durabilidad por daño. Si ya estás bajo de HP y en inferioridad numérica, mueres en forma transformada en segundos. **R** es una herramienta de "win condition", no un botón de pánico — úsala cuando puedas aislar un target y cerrarlo, no cuando intentas escapar.
- **Cargar W frente a un rival ranged.** Ven el wind-up (la animación lenta de carga que telegrafía el dash) y caminan. Usa **W** como counter-engage (ellos commiten primero, tú cargas a media animación) o desde fog of war (la zona oscura del mapa donde el enemigo no te ve) para sorprenderlos — nunca como opening poke.
- **Saltar los stacks de Q.** Cada hit de **Q** da un stack (una carga que se acumula sobre la habilidad): a 2 stacks el siguiente cast es una shockwave que atrae y stunea. Tirar **Q** de un solo stack por daño y dejar que expire desperdicia tu CC más fuerte (CC = crowd-control: stuns, slows, knockbacks). Planea siempre el segundo cast.
- **Hacer splitpush solo siendo tank.** Splitpush = empujar una side lane solo para forzar al rival a mandar a alguien a pararte. K'Sante es un campeón de teamfight sin ulti global para influir en otras lanes — el kit necesita aliados que sigan el wall slam de **R**. Agrúpate con el equipo para los objetivos salvo que tengas una clara ventaja numérica.
- **Olvidar que All Out baja tu max HP.** Cuando te transformas, tu HP actual y máximo bajan un porcentaje. Si estabas al 100% HP antes del transform, terminarás en el nuevo (más bajo) max con HP actual proporcional — pero si te transformas ya bajo, el drop porcentual puede matarte. Mira la HP bar antes de pulsar R.

## Consejo avanzado

El W-cancel: mientras cargas **Path Maker**, puedes soltar el cast en cualquier punto — charges cortos hacen menos daño y menos knockback/stun, pero te quedas unstoppable durante la duración del charge. Usa una **W medio cargada** para esquivar una habilidad clave enemiga (la **R** de Lissandra, la **R** de Malphite, la cadena de AA de un ADC) sin gastar el tiempo de carga completo, luego reentra al trade en tus términos. El cooldown es idéntico independientemente de la duración del charge — no hay penalización por cancelar pronto. Los pros usan este truco para sobrevivir engages iniciales; los jugadores ranked casi siempre full-charge y entran directo al punish (la contraofensiva que recibes por exponerte demasiado).
