---
title: "Camille Top Build & Guía — Patch 16.9"
slug: "camille-top"
language: "es"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Guía de Camille top para League of Legends Patch 16.9: starter, build fighter, matchups clave, power spikes, errores comunes y un consejo avanzado de cierre."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Las auto-attacks contra campeones generan un escudo igual a un porcentaje de los HP máximos de Camille, calibrado al tipo de daño del objetivo (físico o mágico)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Auto-attack potenciada con daño bonus y move speed. Se relanza en pocos segundos para un segundo golpe; esperar entre los dos casts aumenta el daño y añade true damage."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Cono frontal tras un breve delay. La mitad externa ralentiza, hace daño extra y cura a Camille según los HP que le faltan."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Se lanza contra un muro y rebota knockando en el aire a los campeones al aterrizar. Principal herramienta de engage y disengage — necesita un muro en rango."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Salta sobre un campeón objetivo y lo encierra en una arena circular. Ni aliados ni objetivo pueden entrar/salir; las auto-attacks sobre el objetivo hacen daño mágico bonus."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "primer item en matchups duelist (Fiora, Jax, Irelia): el reset Spellblade sostiene Q1-AA-Q2 mejor que Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst mágico fuerte (Vladimir, Rumble, Cassiopeia): el escudo mágico bajo 50% HP te salva la primera rotación"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra equipos que apilan armadura (frontline con Plated Steelcaps + Randuin's): el armor shred amplifica también el daño del equipo"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "cuando vas adelantada y splitpusheas en side lane (empujas sola para forzar respuesta): tower shred y HP bonus al estar aislada"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap de botas contra AP pesado o 3+ fuentes de hard CC (stun, root, taunt que cortan E en vuelo o el carga de W)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra un AD assassin pumpado (Zed, Talon, Kha'Zix): la segunda vida te deja cerrar la combo R aunque mueras"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage desde un muro con E, encierra al carry prioritario en R y burstea con Q1-AA-W-Q2 antes de que llegue peel. En side lane gana 1v1s con Q resets y el W heal."
  weakness: "Lanes abiertas sin muros anulan E. La R tiene cooldown largo: en las ventanas vacías eres solo una auto-attacker robusta. Hard CC corta E en vuelo y el carga de W."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaria: Conqueror stackea rápido con W-Q1-AA-Q2 y premia los fights largos que Camille fuerza con R. Triumph devuelve HP en takedowns, Legend: Alacrity acelera Q resets y autos de R, Coup de Grace encaja con el true damage retrasado de Q2 bajo 40% HP."
    secondary_rationale: "Resolve secundaria: Bone Plating amortigua los all-in early de Darius / Renekton / Pantheon, Overgrowth escala el pool HP sobre el que se calcula el escudo de la pasiva."
    secondary_alternative: "Contra top ranged poke (Quinn, Teemo, Vayne, Gnar) cambia Resolve por Inspiration con Magical Footwear (botas gratis hacia el minuto 12) y Cosmic Insight (más Flash y R uptime para committear en cada cooldown)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Bruisers melee inmóviles"
      reason: "E + R los encierran en melee sin respuesta. Los Q resets y el slow de W permiten a Camille kitear (moverse hacia atrás mientras ataca) dentro de R esperando que sus stacks o cooldowns expiren."
    - examples: ["vladimir", "rumble"]
      archetype: "Mages squishies jugados top"
      reason: "Una vez dentro de R no pueden pool, dashar ni salir de la arena. El true damage de Q2 los pela más allá del shield y el heal sustain."
    - examples: ["sion", "chogath"]
      archetype: "Tanks de scaling tardío"
      reason: "El true damage de Q2 y el burst de Sundered Sky chunkan pools HP enormes. R impide que vuelvan a su equipo para peel durante una pelea en side lane."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Tops ranged con tools de kite"
      reason: "Pokean (daño quirúrgico a distancia) sin committear mientras Camille no tiene respuesta a rango. La E busca un muro que ellos pueden simplemente abandonar caminando."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Tanks frontline con hard CC"
      reason: "Su crowd control corta E en vuelo, el carga de W y el dash de lock-on de R. Camille pierde cada all-in (commit total hasta la kill) cuando el stun aterriza primero."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Melees con all-in early fuerte"
      reason: "Burstean (concentran daño en 1-2 segundos) más rápido de lo que Camille setea E + W y baten su trade pattern antes del nivel 3."
---

## Resumen

Camille es un fighter / diver melee (champ que salta a la backline enemiga para matar a un objetivo prioritario): dashea desde muros para encerrar a un único carry (el target de alto daño de la backline — normalmente el ADC, el marksman de la bot lane, o el mid-laner) y convierte el fight en un 1v1 dentro del ring de su **R**. Su kit premia los trades prolongados (intercambios largos de daño) porque la **Q** es una auto-attack potenciada de doble cast (también escrita **AA**) con true damage retrasado (daño que ignora armadura y magic resist), la **W** cura cuando la mitad externa toca a un campeón, y la pasiva genera un escudo que reduce el daño entrante del tipo correspondiente (físico o mágico) en cada AA. El daño es mayoritariamente físico (AD = Attack Damage) pero la **R** añade daño mágico bonus (escala con AP = Ability Power), por eso el damage_type es mixed.

Su game plan en una frase: espera la **R**, ve a una side lane o al bush del río, dashea desde un muro sobre el priority target y burstea con **Q1 → AA → W (mitad externa) → Q2** mientras el resto del fight queda fuera de la arena. Fuera de cooldown farmea segura detrás de los minions y evita las lanes abiertas donde la **E** no tiene muros que agarrar.

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Cambia Doran's Blade por ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (más HP y bloqueo de daño entrante, sin AD) solo en matchups ranged poke (Quinn, Teemo, Vayne).

**Core items (en orden):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — rush primer item. El active dash + slow encadena con la mitad externa de la **W** y da la waveclear que el kit base de Camille no tiene.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra lanes con muchos AD (campeones de daño físico) y jungle AD. La reducción de daño de auto-attack es crítica porque la mayoría de las amenazas a Camille son bruisers físicos (fighters mid-range con HP altos y daño sostenido).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst spike. La primera auto contra un campeón critea y cura: encaja con **Q1** para abrir cualquier all-in (commit total hasta la kill).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de supervivencia. Tenacity (duración reducida de stuns, slows y otro crowd control = CC) más un escudo que se activa con HP bajos — Camille suele divear la backline (saltar sobre los enemigos que protegen al carry).
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — anti-burst (paquetes de daño concentrados en 1-2 segundos). El bleed (daño post-hit repartido en varios segundos) te da tiempo para reaccionar en vez de morir de un golpe.

**Situational items:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap como primer item en matchups duelist (Fiora, Jax, Irelia). Spellblade (pasiva: tras castear una habilidad, tu próxima auto-attack hace daño bonus y resetea el timer de la AA) sostiene un trade **Q1 → AA → Q2** mejor que Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst mágico pesado (Vladimir, Rumble, Cassiopeia, Kayle AP).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra equipos que apilan armadura (varios campeones compran items de armor como Plated Steelcaps y Randuin's; "stack" = acumular la misma stat en varios items). Armor shred = cada golpe quita un trozo de armadura del objetivo durante unos segundos, así el daño físico de tu equipo pega más.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — cuando vas adelantada y splitpusheas (empujas una side lane sola para forzar respuesta del rival). Tower shred = daño bonus a torres; el item da también stats mayores cuando no tienes aliados cerca.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap de botas contra AP pesado o 3+ fuentes de hard CC.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra un AD assassin pumpado (Zed, Talon, Kha'Zix) en snowball (ventaja inicial que crece kill tras kill).

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP pesado / CC.

**Skill order:** Maxea **Q** primero (cada nivel = más daño, CD = cooldown más corto), **E** segundo, **W** al final. **R** a niveles 6, 11, 16. Niveles 1-3: **W → E → Q** — sustain primero, luego engage, luego steroid de daño. "Q reset" abajo = **Q1 → AA → Q2 → AA**: cada cast de Q resetea el timer de la AA, así disparas un auto extra inmediatamente después.

**Runas:** Primaria **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundaria **Resolve** con **Bone Plating** y **Overgrowth**. Stat shards (los tres pequeños bonus stat al final de la página de runas): Attack Speed, Adaptive Force, Health Scaling.

## Matchups clave

- **Darius:** Tankea HP early (encaja el daño y mantén la igualdad de CS). Te outduela (te gana el 1v1) en un trade directo pre-3 — espera a nivel 3 con la **Q** lista. Una vez online ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**, danza con el slow de **W** + **Q** resets (su pasiva Hemorrhage acumula bleed sobre ti hasta 5; matarlo le resetearía los stacks de la ulti, así que no le regales kill).
- **Fiora:** Mirror duelist matchup. Tradea en línea recta para que no rote alrededor de ti y golpee el Vital perpendicular (su pasiva marca uno de tus lados — pegarte ahí hace true damage y la cura). A nivel 6 su **R** y la tuya se cancelan — el positioning decide quién engaga primero.
- **Renekton:** Pierde lane pre-3 y vuelve a perder en su spike de nivel 2 (W + Q). Reserva la **E** para su all-in. El poder se voltea en 6 si no ha snowballado: tu **R** lo arrastra fuera del rango donde genera Fury (su recurso rage).
- **Jax:** Mal matchup post-6. Su E counter-strikea tu **Q2** y el carga de la **W** (windup = breve delay antes de que la habilidad caiga, durante el cual se puede cancelar). Compra ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** primero, nunca **E** en melee salvo cuando su counter strike esté en cooldown.
- **Quinn / Teemo:** Tops ranged. Pierdes lane brutalmente early. Empieza con ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** en vez de ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freezea la wave (deja que los minions enemigos sean más que los tuyos para que la wave quede pegada a tu torre) y nunca pushees sin **Q + E** disponibles. Espera ganks (el jungla llega a la lane para hacer 2v1) para chippear las plates rivales (los 5 trozos extra de oro pegados a las torres exteriores en los primeros 14 minutos).

## Power spikes y condiciones de victoria

- **Nivel 2 (W + E):** Primera ventana de all-in. Slow de **W** → **AA** → knock-up (breve stun aéreo al aterrizar) de **E** monta un trade completo con la pasiva activa dos veces.
- **Nivel 6 (R):** Tu engage se vuelve incontrarrestable durante una rotación de cooldown. Combina **E** desde un muro con **R** para encerrar a cualquiera en melee; avisa a tu jungla antes del fight para que entre dentro del ring.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completion (~ minuto 13-14):** Se desbloquea la waveclear. Tu trade pattern se vuelve consistente: active slow → mitad externa **W** → **Q1** → **AA** → **Q2** chunkea ~la mitad de su barra HP.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minuto 20-24):** El heal-on-first-hit te deja committear mucho más agresiva en skirmishes en side lane (peleas pequeñas 1v1 o 2v2). Este es el spike donde empiezas a splitpushear por objetivos.

## Errores comunes

- **Gastar la E para pokear (chip damage a distancia) en lane.** La **E** es tu único escape si el jungla rival ganka. Lánzala para commits de engage o para salir de un gank, no por 50 de chip damage. Sin **E**, una Camille sin Flash muere a cualquier 2-man dive (intento de kill coordinado bajo tu torre).
- **Quedarse delante del cono de W.** La mitad interna hace daño pobre y nada de slow / heal — todo el payoff está en la mitad externa. Repostiónate a mitad de cast para que el enemigo quede en el ring exterior, no pegado a ti.
- **Engagar sin R cuando el objetivo tiene hard CC listo.** La **R** es tu tool "no Flash escape" — una vez agarrado, el objetivo no puede Flashar fuera del ring. Sin **R**, una Camille que dive sobre un equipo listo para peelar muere en cadenas de stun (CCs consecutivos sin hueco para reaccionar).
- **Soltar Q1 → Q2 back-to-back.** Cuanto más esperes entre **Q1** y **Q2** (hasta ~2 segundos), mayor es el bonus damage y la porción de true damage de **Q2**. Mete una **AA** + **W** en medio — de ahí sale la mayor parte de tu burst (daño concentrado en 1-2 segundos).

## Consejo avanzado

Practica el combo **Flash → E**: si no hay un muro útil en rango, usa **Flash** (summoner spell en D o F que blinka ~400 unidades) a mitad de **E** para teletransportarte a un muro y redirigir el dash. Esto convierte a Camille de "necesita muros" a "engaga en cualquier sitio" al precio de un summoner. El combo es más útil en los pits de objetivo (las arenas amuralladas alrededor de Drake y Baron) y en peleas abiertas en mitad del río donde los únicos muros están a 600+ unidades — Flash llena el hueco para que igual aterrices el knock-up (breve stun aéreo) de la **E** sobre el priority target.
