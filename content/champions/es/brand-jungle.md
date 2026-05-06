---
title: "Brand Jungle Build & Guía — Patch 16.9"
slug: "brand-jungle"
language: "es"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Guía Brand jungle para League of Legends Patch 16.9: ruta smite, clear burn-mage, ventanas de gank, matchups clave, power spikes, errores comunes y consejo final."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Los hechizos de Brand prenden fuego al objetivo (daño durante 4s, hasta 3 stacks). Con 3 stacks el blaze detona como una pequeña explosión AOE que reaplica los efectos de los hechizos."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot lineal con daño mágico. Si el objetivo ya está ablaze, lo aturde — tu lock de gank y setup de stun en skirmish."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE retardada tras un breve tell. Los objetivos ablaze reciben +25% de daño. Herramienta principal de clear en jungla."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosión dirigida que rebota a los enemigos cercanos. Si el objetivo principal está ablaze, el radio de propagación se duplica — los rebotes entre camps aceleran la clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fuego de larga distancia que rebota hasta 5 veces entre enemigos, priorizando los ablaze. Daño enorme en skirmishes alrededor de la pit del drake y los grubs."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers early-game (Lee Sin, Xin Zhao, Hecarim, Diana) — la stasis cubre tu nula movilidad durante su gap-close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "cuando vas adelantado y el rival no tiene Magic Resist — el move-speed por cast permite kitear skirmishes"
    - dd_id: "3135"
      name: "Void Staff"
      against: "cámbialo cuando un target prioritario compre su primer item de Magic Resist (Mercury's Treads cuenta)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target de engage (Ahri R, Lissandra R, Nautilus hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish en las pits de objetivo con R rebotando entre enemigos agrupados. Gank lanes tras pushear con E (la propagación abre un Q stun gratis). Power-spike: minutos 8-18."
  weakness: "Clear más lenta entre las opciones AP pre-Liandry's, sin escape, sin sustain de jungla innato. Débil a invades early de junglers móviles y a junglers que igualan su AOE con hard CC."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaria: Arcane Comet proquea con cada hit de W o E, sumando burst gratis sobre el blaze. Manaflow Band es obligatoria — Brand jungle pasa hambre de maná early. Transcendence empuja la ability haste por encima de 40%, Scorch cierra camps y ganks a baja vida."
    secondary_rationale: "Resolve secundaria: Second Wind te sustenta entre camps sin comprar potions (Brand no tiene sustain innato como Fiddlesticks o Warwick). Overgrowth da HP bonus que escala con monstruos asesinados — counter directo a tu fragilidad sin defensas."
    secondary_alternative: "Contra comps que invaden duro early (Lee Sin + Pyke roam, Elise + Galio), cambia Resolve por Inspiration con Biscuit Delivery (sustain de maná en tus clears más débiles) y Cosmic Insight (más uptime de Smite alrededor de los drakes)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Tanks de group-engage sin escape"
      reason: "Cuando aterriza su R, ese mismo grupo de enemigos está dentro de tu W. La R rebota entre cada campeón agrupado y tu respuesta a su engage es un teamwipe en lugar de un 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruisers que tienen que comprometerse hacia adelante"
      reason: "Empujan hacia tu equipo para hacer daño y no tienen disengage; la E de Brand enciende blaze, la Q aturde justo cuando te alcanzan y la R lockea al segundo target antes de que puedan retirarse."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Junglers dependientes de channel o stealth"
      reason: "Brand interrumpe el fear/ult channel de Fiddlesticks con el stun Q sobre ablaze y revela la posición pre-channel de Eve con prefires de W; ambos dependen de setups largos que Brand rompe con una sola rotación."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Skirmishers early-game con movilidad"
      reason: "Invaden a Brand al nivel 3 antes de que Liandry's esté online. Brand no tiene escape: la cadena Q + W de Lee Sin, el rappel de Elise y el dash de Graves saltan por encima del skillshot Q, y su clear es demasiado lenta para reembolsar el fight."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Junglers asesinos móviles"
      reason: "Blinkean por encima del proyectil de la Q así que Brand no puede aterrizar el stun, y luego lo bursteán en melee donde no tiene peel para sí mismo. Incluso Zhonya's solo retrasa lo inevitable en un 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Junglers que niegan vision al gank"
      reason: "Bypasean las wards de las que Brand depende (sin counter-vision innato, sin flash-engage). La R de Nocturne corta la vision de tu equipo; la Q de Shaco pasa stealth por las wards. Brand no puede pre-aimear la Q si no ve venir al rival."
---

## Resumen

Brand jungle es un **AP skirmisher** construido en torno a fights de objetivo y ganks post-6, no en clears rápidos o solo invades. El kit es idéntico al Brand mid — prende fuego a los objetivos, aturde a los ablaze con **Q**, hace rebotar **R** entre enemigos agrupados — pero el rol es distinto. Como jungler cambias la prioridad de lane (la ventaja que sacan los laners cuando empujan la wave primero) por el control del río: cada fight de drake, cada spawn de grub (un "grub" es uno de los pequeños monstruos neutrales en la pit del void que da oro y un bonus al equipo que lo mata), cada skirmish del Scuttle (Scuttle = el cangrejo neutral del río que da vision y un pequeño buff) es una oportunidad para que **R** rebote entre tres o cuatro enemigos agrupados y convierta un fight parejo en un teamwipe.

Su plan de partida es rígido para los estándares de la jungla. Clear los primeros tres camps full-clear (red → krugs o blue → gromp según el side), gank a una lane al nivel 3 solo si tiene una ventana limpia de **W → Q stun**, recall por componentes de **Liandry's Torment**, y desde el minuto 8 en adelante campea el siguiente objetivo. Brand no tiene escape, no tiene dueling power early y la clear single-target más lenta de cualquier jungler AP — los invades te terminan la partida si no wardas las entradas de tu jungla. La recompensa es el spike post-6: **Pyroclasm** en un fight agrupado del río es una de las ultimates con más daño del juego, y el kit le pide al equipo rival una pregunta a la que tienen que responder con un disengage que a menudo no tienen.

## Build Recomendada

**Items iniciales:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default para junglers ranged — da la mascota de smite que potencia la clear de camps y otorga oro) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Items core (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade de quest desde Hailblade (auto-evoluciona alrededor del minuto 3-4 al acumular suficiente XP de jungla). Companion default para junglers AP burst: proc extra de daño mágico en la siguiente auto-attack tras un cast, alineándose perfectamente con el blaze de Brand.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primer item completo. El burn por porcentaje de HP castiga las pools de objetivos (drake, baron, herald) y se acumula sobre cada tick de blaze.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plana, el power spike más barato entre los items core.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — el slow en cada hit de hechizo cierra la mayor debilidad de Brand (sin chase, sin escape). Te permite caminar encima de quien intenta kitear y ganar ganks sin Flash.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling late. Cómpralo quinto a menos que vayas 4+ kills adelantado, en cuyo caso rushéalo antes para snowballear ("snowball" = ventaja temprana que crece: kill → gold → item → más kills).

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers early-game (Lee Sin, Xin Zhao, Hecarim). La stasis es la única respuesta que tiene Brand cuando una cadena de dashes cruza su frontline (los tanks y bruisers de delante que normalmente absorben los golpes por ti).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — cuando vas adelantado y el rival aún no ha empezado a comprar Magic Resist. La pasiva de move-speed tras cada cast permite a Brand kitear skirmishes ("kite" = retroceder mientras atacas, manteniendo la distancia).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto un target prioritario compre su primer item de Magic Resist. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (las botas de Magic Resist) cuentan como ese primer item de MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra engages de CC mágico telegrafiado (Ahri R, Lissandra R, Nautilus hook).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si el equipo rival tiene 3+ amenazas de hard CC con daño mágico.

**Skill order:** Sube **W** primero al máximo (el daño base más alto y la herramienta principal de clear), **E** segundo (boost de clear-speed entre camps y propagación en gank), **Q** al final. Punto en **R** a niveles 6, 11 y 16.

**Runas:** Árbol primario **Sorcery** con **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundario **Resolve** con **Second Wind** y **Overgrowth** para sustain en jungla.

## Matchups clave

- **Lee Sin:** Pierdes cada 1v1 antes del nivel 6. Su cadena Q + W salta por encima de tu skillshot Q. Evita skirmishes solo pre-6, full-clear en su lugar, y warda ambas entradas de tu jungla al minuto 1:30.
- **Hecarim:** Matchup parejo. Te supera en kite pero se agrupa para los rebotes de R en teamfights. Reserva Q para el momento en que se compromete hacia adelante — si aturdes a un Hecarim cargando, su timer entero de engage se desperdicia.
- **Karthus:** Tú out-gank-eas, él escala más. Fuerza fights pre-16 alrededor del drake. Una vez que Defile esté online (su pasiva a rango máximo que pulsa a su alrededor, la forma AOE con la que mata desde grey-screen) no puedes caminar dentro de su equipo sin Banshee's Veil.
- **Sejuani:** Te la comes. La R rebota a través de cada campeón que ella atrae con su ulti hacia un grupo; engage sobre su engage. Pre-6 te sigue ganando los 1v1 — no la invadas, agrúpate con mid para los fights de grubs.
- **Master Yi:** Counter directo en 1v1. Fuerza el fight 5v5 en ríos estrechos (drake pit, baron pit) donde su W-cleanse no lo salva de los rebotes encadenados de R. Compra Zhonya's Hourglass como segundo item si sube Wit's End.

## Power spikes y condiciones de victoria

- **Nivel 3 (W + E + Q):** Primer poder de gank. Con un punto en cada habilidad el combo **E → W → Q stun** está online. Si el laner rival se overextiende sin Flash, tienes setup de kill.
- **Nivel 6 (R desbloqueada):** Primer spike de objetivo. **Pyroclasm** en un skirmish de Scuttle (fight del cangrejo del río) hace aproximadamente el 50% del HP de un squishy por rebote. Pelea cada Scuttle cuando tengas R.
- **Liandry's Torment online (~ minuto 9-12):** La velocidad de clear se voltea y el DPS (DPS = daño por segundo, aquí contra las pools de HP de drake/baron/grub) sobre objetivos se duplica. Desde este punto deberías ser quien inicia los fights de drake, no quien reacciona.
- **Rabadon's Deathcap online (~ minuto 24-30):** La secuencia completa de rebotes de R one-shotea squishies. Fuerza fights de objetivo agrupados — Baron, Soul Drake, Atakhan ("Atakhan" = un boss de pit neutral late-game que aparece alrededor del minuto 14; si no lo conoces, trata el spawn como un 5v5 forzado).

## Errores comunes

- **Intentar clearar como un fast-clear jungler.** Brand no tiene sustain innato ni attack speed. No corras contra Lee Sin al Scuttle pre-6 — full-clear, llega al nivel 6, y luego empieza a ganckar y skirmishar.
- **Q desnuda como poke en jungla.** **Q** sin ablaze es un proyectil lento que falla contra junglers que dashan. Abre siempre con **W** sobre el spot donde van a aterrizar o con **E** sobre un minion que propagará el blaze.
- **Ultar a un enemigo aislado.** Los rebotes de **R** se desperdician sobre un solo target — los saltos van y vienen sobre el mismo campeón con damage falloff. Reserva **R** para fights agrupados, no para perseguir un 1v1.
- **Saltarse la vision en tu propia jungla.** Coloca Stealth Wards en tri-bush y pixel brush al minuto 1:30. Brand no tiene escape; un invade que no ves venir es una kill regalada a un jungler móvil.
- **Smite-greedear objetivos sin R.** El HP del drake y los grubs escala; el daño de tu smite no. Si contestas un drake sin R off cooldown y el jungler rival sí la tiene, pierdes la guerra de smite y el drake.

## Consejo avanzado

Practica el **gank invisible con W**. Acércate a una lane desde el lado del río escondido por el fog of war ("fog of war" = la zona oscura sin visión fuera del campo visual de tu equipo). Lanza **W** sobre el spot donde el laner rival *va a dar el siguiente paso* (predice su trayectoria según la wave) — Pillar of Flame tiene un delay antes de aterrizar, y el cast en sí no rompe stealth ni vision. En el momento en que la W aterriza y aplica blaze, lanza **Q** por la ventana de stun. Bien hecho, el rival nunca ve un campeón en su minimapa: ve aparecer una W bajo sus pies, queda rooteado y muere antes de que su compañero pueda pingear. Esta secuencia es lo que convierte un "Brand jungle decente" en un Brand que carga la partida.
