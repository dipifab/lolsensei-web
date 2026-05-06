---
title: "Kennen Top Build & Guia — Patch 16.9"
slug: "kennen-top"
language: "pt-br"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Guia de Kennen top lane para League of Legends Patch 16.9: starter, build AP bruiser, matchups principais, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Cada habilidade do Kennen aplica um stack de Mark no alvo. Três stacks atordoam. É o motor do kit: cada combo busca o triplo stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Skillshot linear que causa dano mágico e aplica 1 stack de Mark. O poke à distância e o primeiro stack fácil no alvo."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Passiva on-hit (efeito ao acertar): a cada 5 autos causa dano mágico extra e aplica 1 Mark. Ativa: detona um burst mágico em todo inimigo próximo que já tenha Mark."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Dash curto que atravessa unidades, aplica 1 Mark e devolve energy ao acertar. Ao terminar, o Kennen ganha attack speed por alguns segundos. Ferramenta de mobilidade e reposicionamento."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channel AOE em volta do Kennen. Cada tick causa dano mágico e aplica 1 Mark nos inimigos dentro. Com inimigos agrupados, atordoa o time inteiro em 2 segundos."
      dd_spell_id: "KennenShurikenStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "contra fights longos e bruisers top (Sett, Darius, Mordekaiser): sustain em fight mais true damage"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "contra back line squishy sem Magic Resist: penetração mágica extra abaixo de 35% HP casa com finishers de R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que um priority target inimigo compra um item de Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra inimigos com muito healing (Vladimir top, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Soltar Flash + R na back line (a fileira de ADCs e mages inimigos) em teamfight para triplo-stackar a passiva em vários alvos juntos. Stun AOE + W detonate decide o fight."
  weakness: "Sem CC point-and-click fora da R, e a R é um channel ao qual você precisa se comprometer: stuns instantâneos ou knock-ups (Pantheon W, Camille E2) cancelam a ulti antes dos stacks aterrissarem."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute proca com Q + W detonate + auto, burst em cada triplo stack. Taste of Blood dá sustain em lane, Sixth Sense aponta wards inimigas em side lanes (essencial para flank), Ultimate Hunter encurta o cooldown da R."
    secondary_rationale: "Resolve secondary: o Kennen quer mergulhar no corpo a corpo com a R, então Second Wind regenera HP enquanto você toma poke em lane e Bone Plating absorve os três primeiros golpes quando você compromete um all-in (trade total até a kill)."
    secondary_alternative: "Contra poke ranged forte (Vladimir, Lillia top), troque Resolve por Sorcery com Nimbus Cloak (movement speed extra após summoner spell, para soltar R mais rápido) e Transcendence para ability haste."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Bruisers melee sem gap-closer"
      reason: "O auto-attack range do Kennen (~550) supera a velocidade de caminhada deles. Q poke e E reposicionando farmam de fora do threat range até o power spike de nível 6."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpushers sem CC confiável"
      reason: "Eles não têm como te travar para impedir o channel da R. Quando o Kennen tem 1-2 itens, todo teamfight em que ele flanka é um stun de 3 stacks em vários inimigos: nenhum split sozinho em side lane iguala esse impacto."
    - examples: ["udyr", "olaf"]
      archetype: "Juggernauts de curto alcance"
      reason: "Você os kita com o dash do E e a passiva on-hit do W. A stickiness deles depende de grudar em cada passo, e seu range mais o refresh do dash os mantém fora do alcance das autos."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Bruisers com CC point-and-click"
      reason: "O stun do Pantheon W (alvo único, instantâneo) ou o root do segundo cast da Camille E cancelam sua R no meio do channel: você perde o stun AOE antes de aterrissar um único stack, transformando o engage em ulti desperdiçada."
    - examples: ["vladimir", "lillia"]
      archetype: "Top laners ranged com sustain"
      reason: "Eles têm mais range que seu Q nos primeiros 6 níveis e se curam do poke. Sem gap-closer, o Kennen leva a pior em todo trade curto e fica atrás de CS no minuto 8."
    - examples: ["sion", "galio"]
      archetype: "Tanks com Magic Resist e passivas tipo cleanse"
      reason: "A passiva de morte do Sion e o shield magic damage do W do Galio neutralizam suas janelas de burst. Três stacks de Mark continuam atordoando, mas o W detonate dá metade do dano assim que eles stackam MR."
---

## Visão geral

Kennen é um yordle ranged AP que joga top como flank engager nos teamfights (o jogador que dá a volta no fight para entrar por um lado que os inimigos não estão olhando). Todo o kit gira em torno de uma mecânica: a passiva **Mark of the Storm (P)** stacka três vezes e atordoa. Cada habilidade — **Q**, **W** ativa, dash da **E**, cada tick da **R** — coloca 1 stack, então um engage limpo atordoa o time inimigo inteiro em 2 segundos. Ele tem uma lane phase decente graças a um auto-attack range de ~550 que supera a maioria dos bruisers, mas a identidade dele desbloqueia no nível 6: é O flank engager top que vira teamfights de mid-late game.

O game plan dele é simples de descrever e exigente de executar: farmar com segurança com o poke da **Q** (dano à distância para baixar HP sem se comprometer ao fight) e a passiva on-hit da **W** (efeito que dispara a cada poucas autos), manter prio para os objetivos, e então **Flash + R** dentro da back line (a fileira de carries squishy — alto dano e pouca vida como ADC e mages — atrás dos tanks). A skill expression mora em dois pontos: gestão de energy (o Kennen queima energy rápido e sem ela não casta) e escolha do ângulo certo de teamfight para que o channel da **R** não seja interrompido por um stun point-and-click (um stun que o inimigo aplica clicando em você, sem mira).

## Build recomendada

**Starting items:** Doran's Shield + 2 Health Potions. Doran's Ring é aceitável se a lane não tem auto-attack harass e você quer mais regen de energy.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — o burn (dano espalhado nos segundos seguintes, não instantâneo) escala com a natureza multi-alvo da **R**. Cada tick em cada inimigo proca o burn, derretendo os pools de HP dos tanks.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetração mágica flat para os squishies da back line que você quer atordoar e apagar.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — te compra uma stasis depois de **Flash + R**, o time inimigo queima cooldowns em um alvo congelado enquanto seus stacks de stun terminam de aterrissar.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP late game. O burst de **R** que ele produz one-shota os squishies que não compraram Magic Resist.

**Situational items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — substitui Liandry's contra top laners bruisers (Sett, Darius, Mordekaiser). Sustain em fight (cura/regen durante o combate) mais conversão em true damage te permite sobreviver à inevitável segunda onda de melees em cima de você.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — contra back line squishy sem Magic Resist. A passiva HP-threshold (penetração mágica extra abaixo de 35% HP) casa com os finishers de **R**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um priority target inimigo comprar um item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra inimigos com muito healing (Vladimir top, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** é aceitável contra 2+ ameaças mágicas com hard CC.

**Skill order:** Maxe **Q** primeiro (maior base damage, menor cooldown — seu poke principal e primeiro stack a cada combo), **W** em segundo (mais burst dentro do fight), **E** por último. Coloque um ponto na **R** nos níveis 6, 11 e 16.

**Runes:** Primary **Domination** com **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** com **Second Wind** e **Bone Plating** para durabilidade em lane.

## Matchups principais

- **Garen:** Você o supera no range de auto. Pokeie com **Q**, nunca deixe a **E** dele (o spinning) te pegar, e use o dash de **E** atravessando ele quando ele comprometer a **Q** silence. Lane vencível do nível 3 em diante.
- **Sett:** Fique fora do alcance da barra de carga do **W** dele — toda auto que você toma a enche. Trade só quando o **W** dele estiver vazio; dashe atravessando ele para quebrar o facing se ele acertar a **E** stun.
- **Pantheon:** Matchup mais difícil. O **W** dele é point-and-click e vai cancelar sua **R** todo fight. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes do segundo item, e nunca engage com **R** enquanto o **W** dele não estiver em cooldown.
- **Vladimir:** Lane longa, você fica atrás em CS. Pegue Doran's Shield + Second Wind, segure a **Q** como punish para quando ele entrar na pool, e chame pressão de jungle antes do 6 porque você não vence trade prolongado.
- **Mordekaiser:** Matchup parelho que vira na **R**: o death realm dele cancela o peel do seu time, mas você traz stun AOE. Se a **R** dele estiver up, não engage; se estiver em cooldown, você pode jogar a sua na back line dele.

## Power spikes e condições de vitória

- **Nível 6:** Primeira **Slicing Maelstrom**. Combinada com **Flash**, é o momento em que o Kennen vira um champion que decide partidas — Flash + R em um time agrupado atordoa todo mundo dentro do alcance.
- **Nível 9 (Q maxada):** **Thundering Shuriken** tem 4 segundos de cooldown no rank 5. Lane phase e farm em side lane viram triviais; você consegue até pokear torres com **Q** seguro.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 14-16):** Primeiro spike de teamfight. Agrupe com seu time para qualquer fight de drake; sua **R** com 2 itens apaga supports e ADCs squishy.
- **Três itens + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** Limiar de burst superado. O combo **R** + **W** detonate one-shota qualquer back line que não tenha buildado Magic Resist. Force Baron e fights de objetivo no late.

## Erros comuns

- **Engagar a R sem Flash up.** O Kennen não tem gap-closer para a back line. Sem **Flash + R**, você só pega a front line (os tanks e bruisers que abrem o fight) — e atordoar o tank deles não te dá nada enquanto os carries te kitam (andam para trás atacando, te mantendo fora do alcance da auto deles) até a morte.
- **Queimar toda a energy em lane.** O Kennen não tem mana, mas tem energy que regenera devagar. Spame **Q** na wave e quando o jungler inimigo chegar você estará vazio. Mantenha sempre ~50 de energy reservada para o dash de **E** na fuga.
- **Maxar W primeiro.** O dano ativo da **W** é maior que o da **Q**, mas a **Q** tem 4 segundos de cooldown no rank 5 contra 6 da **W**. **Q** maxada primeiro significa mais stacks por minuto e mais poke contínuo; a **W** fica no rank 1 até o nível 8.
- **Cancelar sua R saindo do anel.** A **R** é um channel ancorado no seu champion. Se você sai do alcance do teamfight, os ticks param de bater nos inimigos. Fique no centro do fight, não na borda — Zhonya's existe exatamente para isso.
- **Esquecer da passiva on-hit do W.** A cada 5 autos dispara dano mágico bonus mais 1 Mark grátis. Em um trade 1v1, intercale 2 autos entre **Q** e **E** para baitar o oponente em um stun que ele não esperava.

## Dica avançada

O flank mais forte do Kennen é o que jogadores high-level chamam de "blind ult": da fog of war (zona não vista), você Flasha direto no maior cluster inimigo e solta a **R** antes deles verem seu modelo. A janela de reação deles é o cue de áudio da **R** mais o render do seu personagem — cerca de 0,4 segundos — mais curta que o tempo necessário para sair do alcance do channel. Para preparar, seu time precisa estar em fight (ou fingir), assim os inimigos olham para frente enquanto você dá a volta pela jungle unwarded. Treine isso em fights de drake no minuto 14-16: atravesse o river, esconda no raptor camp inimigo, espere a front line engagar no seu time, então Flash + R na back line. Uma execução limpa ganha um objetivo 4v5 em desvantagem numérica.
