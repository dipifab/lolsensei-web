---
title: "Jayce Mid Build & Guía — Patch 16.9"
slug: "jayce-mid"
language: "es"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Guía de Jayce mid para League of Legends Patch 16.9: rush de Manamune, combos de weapon-swap, matchups clave, power spikes, errores frecuentes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Cada weapon swap (R) le da a Jayce un breve burst de Movement Speed y le permite ignorar la colisión con unidades por un instante."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: salta sobre el objetivo causando daño físico y ralentizando a los enemigos cercanos. Cannon: dispara una skillshot AOE de largo alcance — la herramienta principal de poke en mid."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: pasiva de maná en autos, activa un aura de daño alrededor de Jayce. Cannon: máximo Attack Speed en los próximos 3 ataques — ventana de burst con auto en los all-ins."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: knockback de corto alcance que causa daño mágico en % de HP máximo. Cannon: coloca un gate que acelera a los aliados y amplifica una Q (Shock Blast) que pase por él — el setup estándar en mid."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Cambio de stance (cooldown 6s). Alterna entre Hammer melee (engage, sustain, knockback) y Cannon a distancia (poke, AOE waveclear). El primer ataque al pasar a Cannon reduce Armor y Magic Resist del objetivo."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra mid-laners AP (Annie, Veigar, Syndra): el escudo mágico bloquea el burst y suma AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC duro single-target (Ahri charm, Lissandra R, Sylas E): el spellshield bloquea el lockdown"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contra comps 5v5 agrupadas con frontline apilada: la AOE pasa al backline a través del frente"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia desde Plated Steelcaps si el rival tiene 3+ amenazas AP/CC; la tenacity reduce stun y slow"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Apila Tear (Manamune) con el poke de Cannon Q, llega al spike de Muramana al minuto 14, luego elimina blancos de baja defensa con E-gate Q. Roamea a las side lanes cuando R sea rank 2 para convertir la ventaja."
  weakness: "Mana hungry pre-Manamune: una Q fallada tira casi todo el trade. Los assassins móviles cierran el rango de Cannon Q dentro de la cast window. Cae en el late vs Magic Resist apilada en equipos AP-heavy."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "El trade de 3 hits de Jayce (Cannon Q + AA + Hammer Q-AA-E) procea Press the Attack para +8% de daño y convierte el poke de Cannon en kill threat al minuto 6. Triumph devuelve HP en takedowns; Legend: Alacrity tope AS dentro de W (Hyper Charge); Coup de Grace +8% bajo 40% HP."
    secondary_rationale: "Manaflow Band acumula stacks rápido con el poke de Cannon Q para +50 maná permanentes por stack. Transcendence al nivel 5 suma Ability Haste, que se compone con Manamune para una ventana de weapon-swap más corta."
    secondary_alternative: "Contra comps de assassins (Zed mid + Kha'Zix jungle), cambia Sorcery por Resolve con Bone Plating (reducción de daño en los 3 primeros golpes) y Second Wind (regen pasiva de HP bajo 50%). Sacrifica scaling early por supervivencia antes de Edge of Night."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Magos mid-lane inmóviles sin dash"
      reason: "No pueden interactuar con el rango de Cannon Q pre-6. Veigar necesita E (Event Horizon) para preparar su Q, pero el gate de Jayce amplifica tu Q antes de que complete su combo. Cuando llegan al 50% HP, swap a Hammer y los reventas atravesando el cast time de sus habilidades."
    - examples: ["akali", "yone"]
      archetype: "Skirmishers melee sin herramientas de poke a distancia"
      reason: "Cannon Q supera el rango de la E de Akali (Shuriken Flip) y la Q de Yone; ambos deben comprometerse a una ventana melee para hacer daño. El knockback de Hammer E niega sus cadenas de dash, y el shred de Cannon-stance abre la armor para gank kills de seguimiento."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Assassins móviles con varios gap-closers"
      reason: "Zed W (Living Shadow) y Fizz E (Playful/Trickster) cierran el rango de Cannon Q dentro de la cast window. Una vez en rango Hammer con la R lista, te bursteán antes de que termines un combo Hammer Q-W-E. Edge of Night ayuda pero no salva si el gap-close llega primero."
    - examples: ["xerath", "vel-koz"]
      archetype: "Magos de artillería de largo alcance"
      reason: "Tienen más rango que Cannon Q. La Q de Xerath (Arcanopulse) y la Q de Vel'Koz (Plasma Fission) impactan a distancias que Jayce no puede igualar sin caminar dentro de su combo completa. Cada wave-fight te drena HP sin darte ventana para hacer all-in de vuelta."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globales / cross-map"
      reason: "Jayce roamea lento sin sinergia de stance. La R de Twisted Fate (Destiny) voltea una side lane en 8 segundos; la R de Galio (Hero's Entrance) aterriza donde Jayce no puede seguir. El 1v1 mid puede ser parejo, pero el macro pierde objetivos en otra parte."
---

## Resumen

Jayce mid es el **lane bully** canónico — un campeón que abusa del mid-laner enemigo con poke sostenido antes de que pueda escalar. Es un híbrido ranged-melee que gana early con una skillshot AOE (area-of-effect, daño en zona) de largo alcance Q en **Cannon stance** y termina objetivos con una combo leap-Q más knockback-E en **Hammer stance**. El toggle de R tiene 6 segundos de cooldown, y el primer ataque tras pasar a Cannon reduce Armor y Magic Resist del objetivo — el gatillo de entrada para todo all-in (compromiso total en un trade hasta que un campeón muera).

El plan en mid se divide en tres fases. Pre-6 acumulas poke de Cannon Q sobre la wave (el proyectil atraviesa minions); el objetivo es bajar al rival del 100% al 50% HP sin gastar maná en vano. Al 6, el all-in Cannon-to-Hammer pasa a ser kill threat: lanza **E** (Acceleration Gate) hacia él, dispara **Q** (Shock Blast) a través para el daño amplificado, swap a Hammer con **R**, salta con **Q**, suelta **W** para el aura, y empújalo hacia tu torre con **E**. Post-Manamune (~minuto 14) tu Cannon Q reventa waves de blancos squishy y empiezas a roamear las side lanes para convertir la ventaja temprana en tempo global.

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Salta starts greedy como ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (precursor de Manamune): necesitas el AD y lifesteal de Doran's Blade para sobrevivir los primeros tres minutos contra un mid que iguale rango.

**Core items (en orden):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — primer item a rushear. Stackea durante el poke Cannon Q en la wave. El Awakening en ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** al stack máximo añade daño bonus en cada Q, AA y tick del aura W — el spike AD más grande de la build de Jayce.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas contra una lane AD (Yasuo, Zed, Akshan). Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP/CC apilada.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (estadística que ignora una parte fija de la armor enemiga) más una pasiva de stacks por takedown (Eminence). Combinada con Muramana, tu scaling AD se vuelve brutal en cada roam.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality y slow on damage. El slow al impacto de Cannon Q convierte enemigos con Flash en blancos de catch para Hammer-Q.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra mid-laners AP (Annie, Veigar, Syndra). El escudo mágico bloquea el burst y añade AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC duro single-target (Ahri charm, Lissandra R, Sylas E). El spellshield se carga fuera de combate y bloquea la siguiente habilidad que te inmovilice.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — contra composiciones 5v5 agrupadas con **frontline** (tanques/bruisers que abren la pelea) apilada. La AOE activa golpea la **back line** (carries que hacen daño desde atrás) atravesando el frente y devuelve cooldown en takedowns.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — cambia desde Plated Steelcaps cuando el equipo enemigo tenga 3+ amenazas AP o CC.

**Boots:** Plated Steelcaps por defecto. Mercury's Treads contra magic damage pesado o chain CC.

**Skill order:** Maxea **Q** primero (daño principal en ambos stances), **E** segunda (knockback para execute, gate para amplificar el poke), **W** al final. Mete **R** en niveles 6, 11, 16. Nota: pon **E** al nivel 2 (no W) para kill pressure con la combo Acceleration Gate + Cannon Q.

**Runes:** Primario **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**. Contra comps de assassins, cambia secundario a **Resolve** con **Bone Plating** + **Second Wind**.

## Matchups clave

- **Yasuo / Yone:** Te bloquean la Cannon Q con Wind Wall. Posiciónate para que tu Q llegue desde un ángulo de flanco que los obligue a mirar lejos de su wave; no pueden murar lo que no ven a tiempo. Guarda la Q para cuando su muro esté en cooldown, luego encadena E-gate-Q.
- **Zed:** Mantén ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** cargado siempre tras el minuto 12; bloquea su R (Death Mark) finisher. Pre-6 lo poqueas. Post-6 la lane se invierte: no cruces la wave cuando tenga R lista.
- **Ahri:** Matchup parejo, decidido por el timing de la Q. Su E (Charm) telegrafía desde lejos — sidestep detrás de un minion antes de disparar Cannon Q. Una vez que falle el charm, la lane es tuya por 9 segundos.
- **Annie / Veigar:** Matchup de poke gratis pre-6. No tienen movilidad; tu combo Cannon Q + E los drena off-creep. Vigila su cooldown de stun (pasiva Annie, E Veigar) antes del all-in: su stun anula la animación de knockback de tu Hammer Q.
- **Twisted Fate:** Lo poqueas pre-6 pero pierdes el macro game (el juego estratégico de mapa más allá de tu lane). Cuando suba R, ping mid mia (missing in action — el rival dejó la lane) y back temprano; la lane priority que tienes vale menos que su gold card cross-map.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + E):** Cannon Q + Acceleration Gate + AA es un trade del 30% HP en la mayoría de los squishies. La colocación del gate también sirve como ruta de escape — déjalo detrás tuyo hacia tu torre si el rival commitea.
- **Nivel 6 (primera R):** Ambos stances se desbloquean a plena potencia. El all-in Cannon-to-Hammer pasa a kill threat al 45% HP en lugar de un chunk trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune completado + stacking (~ minuto 12-14):** Una vez que despierta a Muramana, cada Q golpea ~15% más fuerte y tu fire-rate de AA spikea. Aquí Jayce mid spikea más fuerte y debe buscar roamear las side lanes.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + stacks de takedown (~ minuto 19-22):** Los stacks de Eminence se componen con Muramana para números AD absurdos. Fuerza una pelea ahora o empuja por inhibitor.

## Errores comunes

- **Tirar Cannon Q sin Acceleration Gate.** La Q desnuda cuesta maná y es fácil de esquivar. Suelta **E** (Acceleration Gate) hacia el enemigo primero; el gate amplifica la Q que pasa por él (más rango, más daño, AOE más grande) y el ligero delay obliga al rival a comprometerse a una dirección antes de disparar.
- **Stackear Manamune demasiado lento.** Cannon Q debe golpear a un campeón o matar wave para contar como stack; las Q fallidas no stackean. Planea el poke para que cada Q golpee al menos tres minions y acelerar la Tear.
- **Quemar el shred R-Cannon en minions.** Al pasar de Hammer a Cannon (R), la primera AA reduce Armor y Magic Resist. Pegarla en un minion melee desperdicia el trigger; guárdalo siempre para un campeón enemigo.
- **Roamear sin awareness del cooldown de R.** R tiene swap cooldown de 6 segundos que también es tu única herramienta de mobility (burst pasivo de Move Speed al swap). Roamea con R fuera de cooldown para poder disengage de un counter-roam; llegar a una pelea sin R es committear sin salida.
- **Olvidar el sustain de maná de Hammer W.** En asedios largos de Cannon poke, swap a Hammer 2-3 autos para rellenar maná vía pasiva W (Mana on hit). Saltarse esto vacía la pool y fuerza un back temprano.

## Consejo avanzado

Practica el **timing-flip de gate-Q** contra blancos en movimiento. La mayoría de Jayces sueltan el Acceleration Gate donde el enemigo está ahora, luego disparan Q a través. Los pros sueltan el gate donde el enemigo *estará* en 0.5 segundos (cast time del gate más animación de Q) — usualmente hacia la wave, ya que el rival debe caminar para last-hit. La Q amplificada aterriza en la posición predicha, no la pasada. Entrénalo en el Practice Tool poniendo un target dummy en modo Move y aprendiendo la lead distance hasta que sea muscle memory.
