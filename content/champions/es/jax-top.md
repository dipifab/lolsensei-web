---
title: "Jax Top Build & Guía — Patch 16.9"
slug: "jax-top"
language: "es"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Jax top para League of Legends Patch 16.9: build bruiser scaling, timing de Counter Strike, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Las auto-attacks consecutivas aumentan progresivamente la Attack Speed de Jax. Los stacks se resetean si dejas de atacar. Sigue golpeando una vez committeado."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Dash dirigido a una unidad o ward. Si el objetivo es enemigo, inflige daño físico. Usa wards para mobility extra: es tu única huida y tu gap-closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Carga la próxima auto-attack o Leap Strike con daño mágico bonus y un slow breve. Coste bajo y cooldown corto: úsala en cada trade corto."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Stance defensiva: esquiva todas las auto-attacks entrantes hasta 2 segundos y reduce el daño AOE. Reactívala o déjala expirar para stunear a los enemigos cercanos."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Pasiva: cada tercer auto-attack inflige daño mágico bonus. Activa: burst AOE más Armor y Magic Resist por varios segundos. Actívala siempre antes de pelear."
      dd_spell_id: "JaxR"
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra rivales con mucho auto-attack (Tryndamere, Yasuo, Kayle) — reducción fija de daño AA"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra CC pesado o daño AP (Malphite R, Renekton stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "core alternativo en lanes de poke — crit garantizado y heal en la primera auto a un campeón"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dos AD dealers fuertes (Yasuo + Caitlyn): convierte el burst en sangrado lento (daño retrasado)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Llega a dos items y duela a quien sea en side lane. Stunea con Counter Strike en el engage, Empower en la primera auto y deja stackear Relentless Assault — splitpush para forzar respuesta."
  weakness: "Pre-6 no tienes ventana real de all-in; los tops ranged te pokean fuera de la wave. Si Counter Strike está en cooldown o lo fallas, no tienes ni capa defensiva ni amenaza de kill."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "Tanks melee lentos sin dash"
      reason: "Counter Strike los stunea encima de ti y no tienen forma de hacer disengage; Jax stackea Relentless Assault libremente mientras encajan los golpes, ganando todo trade extendido a partir del nivel 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Scalers melee de corto alcance sin AA cancel"
      reason: "Su daño está atado a auto-attacks o habilidades de corto alcance — Counter Strike esquiva las autos y el stun AOE al liberarse neutraliza su windup."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Duelistas dependientes de auto-attacks"
      reason: "Counter Strike se come su fuente principal de daño durante 2 segundos. Con Plated Steelcaps el matchup se inclina aún más — no pueden empatar trades contra tu stance."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Tops ranged con herramientas de kite"
      reason: "Pokean fuera del rango de 700 de Leap Strike y retroceden cuando sale Counter Strike. Jax no tiene sustain pre-6, así que la lane se sangra sin llegar nunca a rango de all-in."
    - examples: ["fiora", "camille"]
      archetype: "Duelistas con true damage y cleanse / cadenas de dash"
      reason: "El Riposte de Fiora para el stun de Counter Strike; el E hookshot de Camille le permite committear y disengage a su ritmo. Ambos ganan el 1v1 post-6 a paridad de items."
    - examples: ["malphite", "rumble"]
      archetype: "Hard counter mágicos contra bruisers melee (con ventaja)"
      reason: "Malphite contra Jax depende de sus items: pre-Frostfire Gauntlet pierde, post-segundo item su stack de armor y la R lock-on cierran la ventana de all-in de Jax."
---

## Resumen

Jax es un fighter melee y duelista cuya identidad entera es "escalar hasta convertirse en un dios del 1v1". Pre-6 no tiene presión de kill: sus trades dependen de acertar **Counter Strike (E)** para esquivar las auto-attacks del enemigo, luego responder con **Empower (W)** mientras stackea autos de **Relentless Assault (Pasiva)**. Desde el nivel 6, **Grandmaster's Might (R)** lo convierte en un bruiser bursty capaz de solo-killar a casi cualquier top melee en side lane — pero solo si llega a dos items entero.

El plan de partida es paciente y atento a la lane. Last-hitea seguro hasta el nivel 6, busca una ventana de all-in (un fight con commit total donde no retrocedes hasta que alguien muera) cuando **Q-E-W-R** esté listo, y pasa a splitpush (empujar una side lane solo para forzar la respuesta del enemigo) en cuanto **Blade of The Ruined King** esté online. En teamfights eres un flanker que llega vía **Leap Strike** sobre una ward que pusiste segundos antes — no una frontline que entra de frente.

## Build Recomendada

**Items iniciales:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. El regen del shield al recibir daño es la respuesta más barata al poke temprano. Salta Doran's Blade salvo que enfrentes un matchup melee donde quieras hacer all-in al nivel 2.

**Items core (en orden):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — tu primer power spike. El daño on-hit escala con los HP del enemigo, perfecto contra bruisers y tanks en top, y el slow activo te deja pegado a quien intente kitearte (moverse hacia atrás mientras ataca para mantener distancia).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — el segundo item que convierte a Jax en duelista. Los procs de Sheen (daño extra en la auto después de un hechizo) encadenan con **Q** y **W**, y el movement speed on-hit te deja perseguir a través de paredes.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — capa de supervivencia. El shield se activa cuando bajas del ~40% de HP (HP-threshold passive — pasiva que se activa cuando tu HP cruza un umbral bajo), regalándote los segundos que necesitas para stackear **Relentless Assault** y dar vuelta el fight.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — cuarto item contra daño AP; Magic Resist más daño mágico on-hit que escala con tu attack speed ya alto.

**Items situacionales:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — core alternativo en lanes de mucho poke; el crit garantizado y el heal en la primera auto a un campeón te dan sustain (regeneración en pelea) que Jax no tiene de otra forma.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra dos AD dealers fuertes (ej. Yasuo + Caitlyn). Convierte el burst físico en sangrado lento (daño repartido en los siguientes segundos en vez de instantáneo) para que stackees Relentless Assault antes de morir.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas contra lanes de mucho auto-attack (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — botas contra CC pesado o burst AP (Malphite R, Rumble, Renekton stun).

**Botas:** Por defecto **Plated Steelcaps** contra tops auto-attack; cambia a **Mercury's Treads** si el equipo enemigo tiene 2+ fuentes de hard CC o daño AP fuerte.

**Skill order:** Maxea primero **E** (Counter Strike) — la ventana de dodge escala con rank y el cooldown baja de 17 a 9 segundos. **Q** (Leap Strike) en segundo lugar para waveclear y gap-close, **W** al final. Pon punto en **R** a niveles 6, 11, 16.

**Runas:** Árbol primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stackea rápido en Jax porque las auto-attacks encadenadas de Relentless Assault cuentan individualmente. Secundario **Resolve** con **Bone Plating** y **Revitalize** para sobrevivir a los trades tempranos.

## Matchups clave

- **Darius:** Pareja pre-6, escala a favorable. Guarda **Counter Strike** para el anillo exterior de su **Q** (el anillo que lo cura). Si acierta la zona de cura pierdes el trade; si falla lo stuneas y te vas con una auto bonus por **W**.
- **Camille:** Lane desfavorable. Su **E** hookshot esquiva el timing de tu stun y su **W** lifesteal sostiene a través de Relentless Assault. Freezea la wave cerca de tu torre (mantener la wave de tu lado para negarle last-hits) y espera ayuda del jungla.
- **Malphite:** Pareja early, desfavorable post-6 si pega Frostfire / Sunfire. Intenta all-in a nivel 3 antes de que tenga dos items; cuando stackea Armor tu daño mágico de **W** y **R** importa más que las autos físicas.
- **Teemo:** Desfavorable, counter ranged top clásico. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** primer item, sale con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, y farmea bajo torre hasta que ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** esté online. Busca kills solo cuando el jungla rival esté en bot.
- **Renekton:** Desfavorable niveles 1-5, pareja desde el 6. Te out-tradea con el sustain de su **Q** y el stun de su **W** antes de que llegues al spike de **R**. Juega pasivo, suelta **E** cuando committee **W** y freezea (mantener la wave de tu lado para negar last-hits) la wave cerca de torre.

## Power spikes y condiciones de victoria

- **Nivel 3:** Primera ventana de trade corto. Con **E + W + Q** desbloqueados, esquivas dos autos enemigas con **E**, respondes con **Empower + Q** y sales en positivo. No extiendas más allá de 3 autos — tu stun queda en cooldown.
- **Nivel 6:** **Grandmaster's Might** se desbloquea. La activa de Armor + MR vuelve favorables los all-in cercanos. Castea siempre **R** antes de committear, nunca como finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completo (~ minuto 11-13):** Primer spike de duelo. Puedes splitpush (empujar una side lane solo para forzar la respuesta del enemigo) y matar a cualquier top melee que te rete 1v1 sin ayuda de jungla.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ minuto 19-22):** Spike de dos items. Los procs de Sheen pasan por cada hechizo y por fin tienes el burst para one-shottear squishies en flank.

## Errores comunes

- **Tirar Counter Strike a cooldown para waveclear.** **E** es tu única capa defensiva — quemarla en minions te deja expuesto a un gank sin escape ni stun. Úsala solo cuando piensas tradear o cuando un gank es inminente.
- **Olvidar reactivar la E para el stun.** **Counter Strike** tiene DOS casts: el primero entra en stance de dodge, el segundo libera el stun AOE. Los Jax nuevos la dejan auto-expirar; el recast manual te deja timear el stun en el frame exacto en que el enemigo committea.
- **All-in pre-6 contra bruisers.** Jax no tiene presión de kill antes de la **R**. Pelear con Darius o Renekton al nivel 4 termina con first blood regalado. Stackea XP pasivo, freezea si pierdes y espera la **R**.
- **Splitpush sin TP y sin vision.** En cuanto **Blade of The Ruined King** esté online quieres splitpush, pero si el equipo rival rota a 4 y no tienes Teleport (summoner spell que te warpea a base o a un aliado) listo, tu equipo pierde el 4v4. Revisa siempre los recall timers de tu equipo antes de comprometerte a una side lane.
- **Leap Strike al enemigo cuando huyes.** **Q** puede targetear wards y minions. Si estás corriendo, Q al minion del fondo o a tu trinket ward, nunca al enemigo que te persigue — eso te teleporta de vuelta a él.

## Consejo avanzado

Usa **Counter Strike** mid-dash para timear el stun en el frame de commit del enemigo en vez de dejarlo auto-expirar. El truco: castea **E**, camina hacia el enemigo, espera a que tire su skillshot clave o un dash (Renekton **W**, Darius **W**, Camille **E**), y reactiva **E** en el momento en que está bloqueado en animación. El stun lo agarra a mitad de cast y te regala una ventana garantizada de 2 segundos para stackear Relentless Assault sin respuesta. Practícalo en Practice Tool contra un target dummy con auto-attacks activas — sentirás el ritmo en diez repeticiones.
