---
title: "Graves Jungle Build & Guia — Patch 16.9"
slug: "graves-jungle"
language: "pt-br"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Graves jungle para League of Legends Patch 16.9: starter kit, build de lethality, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Mecânica de escopeta com recarga. Cada tiro dispara 4 chumbos em cone que não atravessam minions; vários chumbos em um não-campeão o empurram para trás."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Projétil linear que detona após 2s, ou na hora contra terreno — ricocheteia em paredes. Ferramenta principal de clear e angle-shot."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Lança uma nuvem de fumaça que bloqueia visão e desacelera no impacto. Use para disengage, negar wards ou cobrir rotas de gank."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Dash curto pra frente com buff de armadura que acumula indo em direção a um campeão. Auto-attacks reduzem o CD e renovam o buff. 2 cargas."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Tiro explosivo de longo alcance: acerta o primeiro campeão e depois explode em cone atrás dele. Burst spike nos níveis 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hard CC mono-alvo (Malzahar R, Skarner R, Warwick R) — o spell shield bloqueia o lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "quando você está à frente e o time inimigo não stacka armor cedo — execute abaixo de 5% HP fecha leads"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst AP pesado (Diana, Syndra, Lux mid) — o escudo lifeline transforma one-shot em trade sobrevivível"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs dois AD dealers fortes (ex. Yasuo + Caitlyn) — o bleed espalha o dano e evita o one-shot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ campeões com hard CC (ex. Leona + Lissandra + Sejuani) — a tenacity reduz stuns e roots"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowballe lethality com invades e ganks antes do minuto 14. Com Eclipse pronto, conteste todo objetivo — a escopeta derrete um squishy em duas volleys e o E te devolve a janela de trade."
  weakness: "Faminto de mana no early. A janela de recarga castiga posicionamento ganancioso, e você derrete sob cadeias de hard CC porque não tem safety além do buff de armor do E."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Visão geral

Graves é um marksman que vive na jungle, não na bot lane. Suas auto-attacks de escopeta e o buff de armor embutido no **Quickdraw (E)** permitem trocar de cara com tanks e bruisers, sem perder a capacidade de bursar squishies com lethality. Todo o kit gira em torno do **tempo**: clear rápido, invade no cooldown, e trocar sua priority de jungle por kills antes que as carries inimigas escalem.

O game plan é simples: nos primeiros 8 minutos você é o melhor duelista do mapa, então use isso. Power-farme um clear limpo, olhe o mapa e entre na lane que está com **Flash** down ou HP baixo. Depois de Eclipse você contesta objetivos; depois de três itens vira um skirmisher de teamfight que apaga a backline por um flank — mas você **não** splitpusha no late, porque um Graves pego sozinho no minuto 30 está a uma cadeia de CC da morte.

## Build recomendada

**Itens iniciais:** Smite + **Hailblade** para um clear mais rápido e dano AOE no **R**, junto com **Refillable Potion**. Pegue Emberknife só se o time precisa de pressão de counter-jungle do red side inimigo (clear mais lento, mais sustain).

**Itens core (na ordem):**

1. **Eclipse** — burst+escudo+omnivamp, o primeiro item mais limpo para junglers de skirmish. O escudo procca depois de dois golpes, o que casa com o ritmo da escopeta.
2. **Plated Steelcaps** vs times AD-pesados / **Mercury's Treads** vs 3+ hard CC. Default é Plated.
3. **Youmuu's Ghostblade** — ativo de movement speed e lethality, sua ferramenta de gap-close e fechamento de gank.
4. **Serylda's Grudge** — scaling de armor pen para o late quando os inimigos começam a stackar armor; o slow em alvos danificados te mantém em range.

**Itens situacionais:**

- **Edge of Night** — vs ultis mono-alvo com lock-on (Malzahar, Skarner, Warwick).
- **The Collector** — quando você está à frente e quer pressão de execute em squishies.
- **Maw of Malmortius** — vs burst AP pesado (Diana, Syndra, Lux mid).
- **Death's Dance** — vs times com dois damage dealers físicos fortes (ex. Yasuo + Caitlyn). O dano que você toma é espalhado em bleed lento em vez de chegar de uma vez.
- **Bloodthirster** — late game quando precisa de um quinto item de dano com escudo e lifesteal embutidos.

**Botas:** Plated Steelcaps default. Berserker's Greaves só se o time inimigo não tem ameaças de CC e você quer especificamente scaling de attack speed — pick de nicho no Graves.

**Skill order:** Maximize **Q** primeiro (clear e dano), **E** em segundo (mais dashes pelo CD reduzido por rank), **W** por último (o slow escala bem já no rank 1). **R** nos níveis 6, 11, 16.

**Runas:** Árvore primária **Domination** com **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Secundária **Precision** com **Triumph** + **Coup de Grace** para pressão de snowball, ou **Resolve** com **Second Wind** + **Revitalize** se espera tomar poke na sua jungle.

## Matchups principais

- **Hecarim:** Te supera depois de 3 itens mas perde skirmishes pré-6 se você E-rolar em padrão de autos espaçadas. Puna ele antes do minuto 9, depois recue — não duele ele depois do primeiro item.
- **Lee Sin:** Matchup espelho de tempo. Os dois ganham os primeiros 6 níveis; o jungler com mais ganks vence. Tracke o cooldown do **Q** dele e as janelas de W-jump; se o Q dele está down, sua escopeta vence o trade limpo.
- **Master Yi:** Tem que matar antes do nível 6 + primeiro item dele. A **W** em cima dele durante a **Q** ativa bloqueia a visão e ele perde o lock — treine na Sala de Treinamento até virar reflexo.
- **Vi:** Tanky e ganker. Perde skirmishes longos se você tem cargas de E; não se deixe pegar no ar pelo **Q** dela — é all-in garantido para o lado dela.
- **Diana:** Snowballa pesado pós-6. Guarde **W** para o windup do **R** dela (não quebra o engage, mas o slow no impacto estende o commit e dá tempo do seu time peelar). Construa **Maw of Malmortius** como segundo item de dano.

## Power spikes e condições de vitória

- **Nível 3:** Kit completo desbloqueado. Seu padrão de gank é **E para entrar em range -> Q na parede atrás deles -> reset de auto -> W slow no caminho de retirada**. Com runas Hail of Blades, isso mata qualquer squishy a 60% HP e sem Flash.
- **Nível 6:** **Collateral Damage** desbloqueia o execute de longo alcance. O projétil acerta o primeiro campeão e depois explode em cone — flashe um alvo contra uma parede e você garante tanto o impacto direto quanto o dano do cone.
- **Timing de Eclipse (~ minuto 9):** Vence toda fight contestada por objetivo. Force fight em Scuttle, Drake ou Voidgrubs nessa janela — depois do minuto 12, junglers que escalam (Hecarim, Master Yi) começam a igualar seu ritmo.
- **3 itens (~ minuto 22):** Vira um flanker de teamfight. Seu trabalho é flankear a backline inimiga (a carry squishy, a mais longe do tank deles) e bursar antes que reaja. Não engaje pela frente.

## Erros comuns

- **Queimar cargas de E para fugir do clear.** **E** tem 2 cargas e o cooldown cai cada vez que você dá auto-attack. Gastar as duas cargas para esquivar de um único skillshot deixa você sem gap-close pelos próximos 12 segundos. Guarde pelo menos uma.
- **Q na parede atrás de você por engano.** **End of the Line** detona instantaneamente contra terreno. Se você dá Q de costas para uma parede, o projétil explode atrás de você sem dano. Sempre confira sua orientação antes de cast.
- **Smoke Screen em si mesmo para sustain.** **W** não cura. O valor é o slow no impacto — jogue no caminho de retirada da carry inimiga, não em cima de você.
- **R em range máximo sem setup.** O projétil é esquivável a longa distância. Use **R** colado depois de um Flash, ou pré-disparada como finisher quando o inimigo já gastou Flash. Não abra fight com ela, a menos que estejam andando em linha reta na fog.
- **Splitpush no minuto 30.** Graves no late não tem escape se um Skarner/Warwick/Malzahar acerta o R. Agrupe com o time depois do minuto 25 e jogue flank em distância de teamfight, não 1v1 em uma side lane.

## Dica avançada

A técnica do **E-buffer-roll**: enquanto você está no meio do windup de Q ou de auto-attack, enfileire um input de **Quickdraw**. O dash sai no instante em que o windup termina, então você ganha o dano do auto/Q **e** se reposiciona no mesmo ciclo de animação — mantém uptime de DPS enquanto esquiva ou persegue. A janela de recovery em que você não pode se mover é de cerca de 0,4 segundos sem esse truque; com o buffer roll é quase zero. Treine nos bonecos da Sala de Treinamento até seu ritmo de stutter-step ser auto-attack → E → auto-attack sem pausas.
