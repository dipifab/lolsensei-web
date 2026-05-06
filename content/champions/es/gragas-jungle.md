---
title: "Gragas Jungle Build & Guía — Patch 16.9"
slug: "gragas-jungle"
language: "es"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía de Gragas jungla para League of Legends Patch 16.9: clear path, rutas de gank, build AP bruiser, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lanzar cualquier habilidad cura a Gragas una pequeña cantidad (cooldown interno de 5 segundos). Le da sustain durante el clear de jungla sin obligarle a basear pronto."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rueda un barril a un punto. Reactiva para detonar, o explota solo tras 4 segundos. El daño y el slow escalan con la carga — espera al pico antes de detonar."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel de 1 segundo que da 30% damage reduction durante 3 segundos y potencia la siguiente auto-attack con daño mágico bonus. Úsalo antes de E para absorber el aggro del camp."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash que se detiene en el primer enemigo, infligiendo daño AOE y stuneándolo 1 segundo. Es tu único gap-close, tu único hard CC y tu principal herramienta de engage."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lanza un barril que empuja a los enemigos lejos del centro del impacto. Úsalo para peelear aliados, hacer pickoff a targets aislados, o tirar un carry a tu frontline."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins o dive comps (Zed, Talon, Kha'Zix): la stasis tras tu R da tiempo a tu equipo a limpiar"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Morgana Q): el spell shield come la lockdown que cancelaría tu R"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra equipos con 3+ hard CC (Leona, Sejuani, Lissandra): la tenacity acorta los stuns y protege la W"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra Magic Resist apilada o comps con curación (Soraka, Vladimir, Dr. Mundo): magic pen y zona de healing-reduction al cast R"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "en partidas snowballeadas con 3+ items de ventaja para one-shotear squishies con Q-E en vez de hacer engage"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Usa R para tirar carries enemigos (ADC, mid mage) dentro de tu frontline en peleas de objetivo; W antes de E para absorber daño, luego encadena Q en la mezcla para amplificar el AP burn de Riftmaker."
  weakness: "E es tu único gap-close y tu único stun. Si la fallas o la usas para clearear un camp justo antes de un invade, te quedas sin engage y sin escape durante 12+ segundos."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primario en lugar de árboles de daño: Gragas dive a engagear y necesita sobrevivir a la cadena de CC encima. Aftershock procea cuando Body Slam stunea, dando resistencias bajo presión. Font of Life, Conditioning y Revitalize lo mantienen tanky en late."
    secondary_rationale: "Sorcery secundario: Nimbus Cloak da un burst de Movement Speed tras Smite o Flash para encadenar Body Slam desde ángulos raros, y Transcendence aporta Ability Haste y un reset de auto-attack en takedown que casa con los skirmishes prolongados de Gragas."
    secondary_alternative: "Si el equipo enemigo tiene 4+ amenazas AD (Zed mid, Tryndamere top, Vayne bot), cambia Sorcery por Precision con Triumph (heal en takedown) y Legend: Tenacity (tenacity extra que se apila con Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Carries de jungla squishy sin hard CC"
      reason: "El stun de Body Slam rompe su pattern de kite: Master Yi no puede salir con Alpha Strike, Kindred no puede bailar el reset de auto-attacks, Graves no puede reposicionarse. Luego R los empuja fuera de tu carry en el siguiente engage."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Junglers con ult de channel largo"
      reason: "Explosive Cask interrumpe la R de Karthus, Amumu y Warwick. Un solo knockback en mid-fight cancela todo su payload de teamfight, y a Gragas le basta con colocar el centro del barril cerca del target que channellea."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Gankers basados en stealth"
      reason: "El damage reduction de W absorbe su burst de apertura (fear+drain de Fiddlesticks, backstab de Shaco) mientras Body Slam los stunea en pleno cast. Su engage exige cast time sin contestar — Gragas se lo quita."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Skirmishers móviles con varios gap-closers"
      reason: "Cubren terreno más rápido que el único Body Slam de Gragas y empiezan el fight antes de que puedas hacer W en E. Además Viego poseyendo a tu frontliner convierte tu engage en un 1v2."
    - examples: ["kayn"]
      archetype: "Bruisers anti-tank con true damage"
      reason: "Kayn (Rhaast) inflige true damage porcentual sobre HP máximo que ignora las resistencias de Gragas y el damage reduction de W. Un Gragas tank en late pierde 1v1 en el río incluso con resistencias completas."
    - examples: ["nidalee", "elise"]
      archetype: "Junglers de poke a larga distancia"
      reason: "Las javelinas de Nidalee y la spider-form de Elise erosionan a Gragas desde fuera del rango de Body Slam. No tiene cómo cerrar la distancia sin gastar E — una vez gastada, ambos junglers salen del trade andando."
---

## Resumen

Gragas es un jungla AP bruiser tanky (un fighter que builds AP para daño pero con suficiente HP y resistencias para sobrevivir en la front line) cuyo plan de partida gira en torno a una sola gran jugada: tirar a un carry enemigo (el champion de daño alto alrededor del que juega el equipo rival) dentro de tu equipo con **Explosive Cask (R)**. Su **Body Slam (E)** es el único gap-close (habilidad para cerrar distancia rápido) y el único hard CC, así que el buen Gragas es paciente — clearea los camps, guarda **E** para el gank o el engage, y solo se compromete por completo cuando **R** está disponible. Tiene sustain natural (regeneración pasiva durante peleas) gracias a **Happy Hour (P)** que le permite clearear sin basear, y **Drunken Rage (W)** le da una ventana de 30% damage reduction que absorbe el primer burst en cualquier skirmish corto.

Tu condición de victoria es el primer pickoff a nivel 6 — sacar de posición a un enemigo aislado con **R** para una kill gratis. A partir de ahí el equipo juega alrededor del próximo cooldown de **R**: caminas hacia el jungla rival cuando entra a tu río, o montas un fight en un Drake (monstruo neutral que da al equipo un buff permanente) donde un buen flip de **R** mata al ADC enemigo (el marksman de bot lane, principal damage dealer en late) antes incluso de que empiece la pelea. Si **R** no está lista, no inicies fight — eres un enabler (un champion que crea oportunidades para el equipo), no un duelista 1v1.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter ranged-Smite estándar — las auto-attacks de Gragas cuentan como ranged a efectos de starter.

**Items core (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade desde Hailblade (auto-evoluciona hacia el minuto 3-4 cuando acumulas suficiente XP). El companion de AP-burst: cada auto-attack post-cast añade daño mágico bonus y un slow que se apila con **Q**.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item de AP burn sostenido. Da omnivamp (life-steal que funciona con todo tipo de daño, no solo basic attacks) y rampa daño en peleas largas, perfecto para los engages prolongados de Gragas.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana. Coge ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si el equipo enemigo tiene 3+ habilidades de hard CC.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste y Movement Speed tras dañar a un champion. La movilidad te deja reposicionarte en el fight y meter un segundo stun de **E** cuando vuelve el cooldown.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste y un burn mágico porcentual sobre HP máximo que rampa cuanto más dura el fight. Castiga frontliners enemigos tanky (Sejuani, Ornn) donde el AP plano pierde eficacia.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins o dive comps. Activa justo después de **R** para sobrevivir al burst de follow-up.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra **R**). El spell shield come la habilidad de lockdown que cancelaría tu **R**.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps con healing apilado (Soraka, Vladimir, Dr. Mundo). El activo del R suelta una zona de healing-reduction que se sincroniza con tu knockback.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — solo cuando tienes 3+ items de ventaja y quieres pasar de engage a one-shot.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra crowd control (CC) pesado, o ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cuando 4+ enemigos hacen daño físico.

**Skill order:** Maxea **E** primero (tu stun y daño principal), **Q** segundo (waveclear y poke a distancia), **W** al final. Coloca punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Resolve** con **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Secundario **Sorcery** con **Nimbus Cloak** y **Transcendence**. Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchups clave

- **Lee Sin / Viego:** Skirmishers móviles (junglers diseñados para peleas cortas y repetidas) que te ganan en fights pre-6. No contestes el primer Scuttle Crab (el cangrejo del río que da vision y un buff de Movement Speed); clearea camps completos y busca scalear (crecer con items y niveles) hacia **R** en nivel 6, donde un buen flip de cask iguala el matchup al instante.
- **Master Yi / Kindred:** Carries de jungla squishy (poca HP, sin resistencias). Trackea su pathing en el minimap; si Yi está bot side y tú top, baja con HP completo y busca un gank en mid lane a nivel 6 — tu stun de **E** corta el reset cycle de Alpha Strike (dash untargeteable).
- **Karthus:** Escala en una amenaza de teamfight ult. Tu trabajo es interrumpir su channel con **R** — trackea el spawn de su nivel 6 y pingea a mid que cancelarás la ult cada vez que esté lista.
- **Sejuani / Amumu:** Tanks front-to-back. No intentes out-engagearlos solo; deja que se comprometan primero, y entonces **R** a su carry fuera del muro que crean. Tu stun de **E** encadena con su CC para una kill garantizada sobre quien hayan agarrado.
- **Nidalee:** El poke a larga distancia (chip damage desde fuera del rango enemigo) castiga tu wind-up de engage. Compra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pronto; muévete por la fog of war (las zonas grises sin revelar del mapa) en tu jungla y nunca face-tankees sus javelinas en el río de lane mientras gankeas.

## Power spikes y condiciones de victoria

- **Nivel 3 (E desbloqueada):** Primera ventana de gank. Camina a una lane que tenga **Flash** abajo en el laner enemigo, **W** antes de entrar en vision, luego **E** atravesando un muro para el stun por sorpresa. Configura a tu laner para el follow-up.
- **Nivel 6 (primera Explosive Cask):** Power spike. Con una sola **R** puedes empujar a un laner over-extended dentro de tu torre o al gank de tu jungla. Fuerza un buen fight antes de basear.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Primer spike grande de fight. AP burn sostenido más omnivamp significa que puedes hacer trades extendidos en skirmishes; fuerza un fight de Drake aquí.
- **3 items + botas (~ minuto 25-28):** Pico de teamfight. Aftershock más ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** más ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** más ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** te convierten en el engager más fiable del mapa. Agrupa con tu equipo y busca peleas de objetivo.

## Errores comunes

- **Usar E para clearear camps cuando viene un invade.** **E** tiene 14 segundos de cooldown a rank 1. Si haces Body Slam en un Krug y el jungla rival entra 3 segundos después, no tienes ni escape ni stun. Guarda **E** cuando el minimap muestre al jungla rival cerca del borde de tu jungla.
- **Tirar R como daño de apertura.** **R** es un knockback, no una spell de daño. Si la lanzas sin un plan de colocación del target, dispersas al equipo enemigo lejos de tu follow-up. Visualiza siempre dónde aterrizará el carry rival antes de pulsar **R** — empújalo dentro de tu equipo, no fuera.
- **Maxear W en lugar de E.** **W** no le da a Gragas su stun, su gap-close ni su clear speed — **E** hace las tres cosas. Maxea **E** primero cada partida.
- **Gankear antes del nivel 3.** Sin **E**, Gragas no tiene cómo coger a un target que no se esté tower-diveando solo. Salta los ganks pre-3; clearea con tempo de dos camps y gankea con el combo **W-E** a nivel 3.
- **Duelar a Kayn solo después de su transformación.** Kayn-Rhaast hace true damage que ignora tus stats tanky. Evita 1v1s en su jungla en late game; agrupa con tu equipo para los objetivos.

## Consejo avanzado

Practica el combo **R-Flash**: lanza **R** a los pies del carry enemigo, luego **Flash** durante el cast para reposicionar el punto del barril junto a tu equipo. El barril sigue detonando desde la posición Flasheada, así que un carry que esté a distancia segura termina lanzado a tu frontline antes de darse cuenta de que el ángulo cambió. Es la mecánica de mayor valor de Gragas en solo queue parcheada y vale la pena dedicarle 30 minutos de practice tool antes de probarla en ranked.
