---
title: "Gragas Top Build & Guía — Patch 16.9"
slug: "gragas-top"
language: "es"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Guía de Gragas top para League of Legends Patch 16.9: starter kit, build AP bruiser, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lanzar cualquier habilidad cura a Gragas un poco (cooldown interno de 5 segundos). Sustain gratuito en línea que le permite ganar los matchups de poke a la larga."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rueda un barril hasta un punto. Recasteala para detonar, o explota a los 4 segundos. Daño y slow escalan con el tiempo de carga — espera la carga máxima antes de detonar."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel de 1 segundo: 30% de damage reduction durante 3 segundos y la siguiente auto-attack añade daño mágico bonus. Tu herramienta principal de trade en línea."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash que se detiene en el primer enemigo, hace daño AOE y stunea 1 segundo. Es tu gap-close, escape y único hard CC — nunca lo uses para limpiar una wave."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lanza un barril que empuja a los enemigos lejos del centro. En top se usa para meter al rival dentro del gank de tu jungler o para peelar un tower-dive."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra asesinos AD o duelistas de split-push (Camille, Fiora): la stasis niega su execute tras el dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, suppression de Malzahar): el spell shield bloquea el lockdown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra líneas AD-heavy (Renekton + Kha'Zix, Aatrox + Lee Sin): la reducción de daño físico vale más que la tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra comps con stack de curas (Aatrox, Vladimir, Dr. Mundo): magic pen y zona de healing-reduction en la R"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Out-sustain a los bruisers melee con Happy Hour y la damage reduction de W; llega a Riftmaker hacia el minuto 13 y busca un flip de R en el gank del jungler para snowbalear una torre o un Drake."
  weakness: "Artillería a larga distancia y top laners ranged (Vayne, Quinn, Teemo, Kennen) te chippan fuera del rango de Q. Sin E disponible no tienes ni engage ni escape — gastarla en harass es throwear la línea."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaria en vez de Sorcery: Gragas tradea cuerpo a cuerpo y necesita HP, no burst. Aftershock procea con el stun de Body Slam y da resistencias. Demolish convierte un back en placa, Conditioning y Revitalize escalan al late."
    secondary_rationale: "Sorcery secundaria: Manaflow Band sostiene el maná para spamear poke con Q toda la fase de líneas, y Transcendence sube el Ability Haste por encima del spike de Cosmic Drive para cooldowns más cortos en E y R en side lane."
    secondary_alternative: "Contra top laners ranged (Vayne, Teemo, Quinn) donde el sustain pesa más que el daño, swap Sorcery a Inspiration con Biscuit Delivery (pociones gratis) y Time Warp Tonic (sustain de poción y Movement Speed) para una build de healing."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers melee sin dash"
      reason: "Tienen que caminar para last-hittear; el poke Q-W-AA de Gragas los chippa fuera de su rango de all-in, y la damage reduction de W debilita su commit pre-6 frente al counter-trade de Gragas."
    - examples: ["kennen", "vladimir"]
      archetype: "Top laners AP squishies"
      reason: "El damage reduction plano de Drunken Rage absorbe el combo stun-burst de Kennen y el poke Q de Vladimir. Gragas puede responder E-AA-Q mientras sus recursos están gastados en el trade."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Mages de skill-shot y channel"
      reason: "Body Slam interrumpe el wind-up de Q de Mordekaiser y el channel del combo de Ryze, y Gragas sale con la damage reduction de W. Ambos pierden prioridad de línea cuando se les rompe el cast cycle."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top laners ranged"
      reason: "Auto-atacan a Gragas fuera del rango de Q y se alejan de su commit con E. Sin forma de cerrar gap repetido, Gragas queda chippado a media HP antes del nivel 3 y forzado a basar."
    - examples: ["fiora", "camille"]
      archetype: "Bruisers con true damage y presión de execute"
      reason: "Los vital de Fiora hacen true damage que ignora las resistencias de Gragas; la R de Camille lo aísla para un execute true-damage porcentual. Las stats tanky de Gragas no se traducen en survival 1v1 contra ninguna."
    - examples: ["malphite", "ornn"]
      archetype: "Top laners tank de hard-engage"
      reason: "Su CC encadena más que la ventana de Aftershock. Igualan el engage de Gragas con el suyo y le ganan el scaling al late con steroides de resistencias integrados."
---

## Resumen

Gragas top es un AP bruiser (un fighter que sube AP para daño pero stackea HP suficiente para sobrevivir a los dives de la frontline) que gana la línea con poke (chip damage a distancia segura) y sustain (regen pasiva de HP en peleas), y luego pasa a un rol de engage de teamfight alrededor de **Explosive Cask (R)**. **Happy Hour (P)** le da curación pasiva cada vez que lanza una habilidad, así que un patrón de trade Q → W → AA (auto-attack) sangra al laner enemigo sin sangrar a Gragas. **Drunken Rage (W)** es una ventana de 30% de damage reduction — su herramienta más infravalorada, porque le permite absorber el all-in (commit total al daño) enemigo y counter-tradear con un stun gratis de **E**.

Plan de partida: domina las líneas melee con poke de Q hasta nivel 6, luego busca flips de **R** que metan al laner enemigo dentro del gank del jungler o bajo tu torre. A partir de ahí escala (creces con items y niveles) con **Riftmaker** y **Cosmic Drive**, agrupa en el minuto 25 y haz de engage primario del equipo (el campeón que inicia la pelea). Evita matchups ranged — si caes en uno, juega pasivo, farmea bajo torre con Q y llama al jungler.

## Build Recomendada

**Items iniciales:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter estándar de sustain que te deja tankear el poke de Q de matchups ranged el tiempo suficiente para llegar a Riftmaker.

**Items core (en orden):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item AP de burn sostenido con omnivamp (life-steal que funciona en todo el daño, no solo basic attacks). Los trades alargados de Gragas convierten esto en el spike de un solo item más fuerte de su roster.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — la tenacity reduce duración de stuns. Botas por defecto en top porque casi todos los matchups traen al menos una amenaza CC (stun de Renekton, root de Camille, stun de Sett).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste y un steroide de Movement Speed tras dañar a un campeón. Te deja girar alrededor de la pelea para meter un segundo stun de **E** antes de que el primer cooldown termine.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste y burn mágico porcentual sobre max HP que escala cuanto más dura la pelea. Cuarto item contra cualquier equipo con dos o más frontliners.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game. Quinto item cuando el equipo ha agrupado y vas a por burst de teamfight en vez de splitpush.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra asesinos AD (Zed, flank de Talon) o duelistas de split-push (Camille, Fiora). Activa la stasis justo después de **R** para negar la ventana de execute.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (**R** de Lissandra, suppression de Malzahar). El spell shield bloquea el lockdown que cancelaría tu flip de **R**.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra líneas AD-heavy (Renekton + jungler AD). Sustituyen Mercury's Treads cuando no hay amenaza CC importante.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps con stack de curas. La R-active suelta una zona de healing-reduction enganchada al knockback.
**Botas:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** por defecto. Cambia a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** en partidas AD-heavy, o ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** si la línea es de one-shot y quieres ir a una build damage-first.

**Skill order:** Maxea **E** primero (tu stun y daño principal), **Q** segunda (poke y waveclear), **W** la última. Sube **R** en niveles 6, 11, 16.

**Runas:** Primaria **Resolve** con **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Secundaria **Sorcery** con **Manaflow Band** y **Transcendence**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clave

- **Darius:** Camina a last-hittear solo cuando **W** esté lista; pokealo con Q antes de cada wave. Su all-in es brutal pre-6 — nunca dejes que te encadene E-Q en una posición de Aftershock-bait.
- **Renekton:** Evita los trades de nivel 1-2 donde su fury-stun snowballea ventaja en HP. Igualalo en nivel 3 con counter-engage **W-E**; cuando commitea el stun de W, tu damage reduction absorbe el burst y trabeáis a la par.
- **Vayne:** Hard counterpick (un campeón elegido específicamente para batirte en línea). Juega bajo torre con poke de Q, pide ganks tempranos al jungler (nivel 3-4), y planea el rush de ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** para mitigar sus auto-attacks empoderadas tras el dash (su Q le permite tumble y recargar el disparo de la ballesta).
- **Camille:** Evita 1v1 en sidelane después de su primer item core (minuto 11-13); su R te aísla (te corta de tu equipo dentro de un muro) para un execute porcentual. Agrupa con el equipo y fuerza teamfights donde ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** niegue la ventana de daño de su R.
- **Malphite:** Pareja pre-6, hard scaling post-6 porque su **R** iguala la tuya y su stack de armadura se ríe de tu AP. Roamea a mid con flips de **R** cuando su ult esté abajo — es tu única ventana para inclinar el matchup.

## Power spikes y condiciones de victoria

- **Nivel 3 (E desbloqueada):** Primera ventana de all-in. Con **W** activa y stun de **E** listo, puedes castigar a cualquier melee enemigo que camine demasiado para last-hittear.
- **Nivel 6 (primera Explosive Cask):** Power spike. Monta un flip de **R** en el gank del jungler — empuja al top enemigo desde su línea de torre hacia el lado de tu river para una kill gratis.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Spike que voltea la línea. Burn sostenido y omnivamp convierten los trades alargados en HP ganada; fuerza un 1v1 si no estás contra un counter.
- **3 items + botas (~ minuto 24-28):** Pico de teamfight. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** más ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** más ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** hacen de Gragas una amenaza de engage casi inmatable. Agrupa con el equipo para los objetivos.

## Errores comunes

- **Usar E para limpiar waves.** **E** es tu gap-close, escape y único stun. Si haces Body Slam en un minion para pushear, el laner enemigo tiene 14 segundos gratis para all-innearte. Usa **Q** para pushear; **E** solo para engage y escape.
- **Tirar R como daño de apertura.** **R** dispersa al equipo enemigo. Si la lanzas sin plan de colocación, alejas al laner del follow-up de tu equipo. Visualiza siempre dónde debe caer el target antes de pulsar **R** — métele dentro de tu equipo o tu torre, nunca en la frontline rival.
- **Tradear sin W lista.** Todo trade decente de Gragas empieza con **W**. Sin la ventana de 30% damage reduction, cualquier bruiser melee te supera en el trade. Si **W** está en cooldown, last-hitea y disengaa.
- **Force-gankear solo con R.** Flips de **R** solitarios dentro del equipo enemigo sin follow-up son throws. El barril reposiciona al target, pero Gragas solo no mata a un carry a HP llenos — es un enabler para tu equipo, no un finisher de duelo.
- **Maxear W en vez de E.** **W** no le da a Gragas el stun, ni el gap-close, ni la velocidad de clear — **E** hace las tres cosas. Maxea **E** primera siempre.

## Consejo avanzado

Practica el combo **R-Flash**: lanza **R** a los pies del laner enemigo y luego **Flash** durante el cast para reposicionar el centro del barril junto a tu equipo o tu torre. El barril detona desde la posición Flasheada, así que un target plantado en su línea de torre puede ser flippado bajo tu torre para una kill gratis. Es la mecánica de Gragas con techo de skill más alto y merece reps dedicados en practice tool antes de probarlo en solo queue ranked.
