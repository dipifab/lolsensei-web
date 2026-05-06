---
title: "Azir Mid Build & Guia — Patch 16.9"
slug: "azir-mid"
language: "pt-br"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Guia do Azir mid no Patch 16.9: itens iniciais, build de battle mage, matchups principais, power spikes, erros comuns e uma dica avançada de Shuffle."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Uma vez por torre aliada caída, Azir pode ressuscitar um Disc of the Sun temporário: uma torre que bate forte e controla o espaço ao redor dos escombros."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Manda todos os Sand Soldiers ativos para um ponto, causando dano mágico e slow em linha. Ferramenta principal de poke e reposicionamento."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Invoca um Sand Soldier (por cargas). Os soldados estendem as auto-attacks do Azir: quando ele dá AA perto de um, o soldado apunhala em linha causando dano mágico."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Escudo + dash em direção a um soldado existente. Para ao acertar campeão e devolve uma carga de soldado. Seu único escape e único gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Muralha de soldados que avança, knockback nos inimigos e deixa uma linha bloqueante por vários segundos. A ferramenta do icônico 'Shuffle'."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Diana, Talon, Akali) — a stasis cobre o cooldown da E quando você é pego"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target pesado (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que qualquer alvo prioritário comprar item de Magic Resist — seus soldier autos furam a MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo) — anti-heal aplica em cada hit do soldado"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Chegar com Nashor's Tooth + Sorcerer's Shoes online (~ minuto 18-20), depois controlar os fights de objetivo com auto-attacks estendidas pelos soldados e fazer Shuffle (R + Flash) nos carries inimigos."
  weakness: "Champion mecanicamente exigente e fraco antes do nível 6. Sem E disponível você não tem escape; chip damage de longe e Wind Wall (Yasuo, Yone) anulam tanto os soldados da Q quanto a R."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Mages imóveis sem dash"
      reason: "O range dos soldados do Azir bate o range de cast deles, e não têm dash para esquivar do poke soldier-Q nem para interromper a sequência de auto-attacks potencializada pela W."
    - examples: ["annie", "syndra"]
      archetype: "Mages de all-in lento e telegrafado em curta distância"
      reason: "O Azir mantém distância nas janelas de commit deles (o momento em que dão um passo à frente para atacar): cada vez que se aproximam, os soldier autos os mordem, e o R Shuffle vira o all-in se eles flasharem para dentro."
    - examples: ["malzahar", "kassadin"]
      archetype: "Mages de late-game fracos em pequenos fights early"
      reason: "O Azir farma seguro com W desde o nível 1 e segura o potencial late deles sem entregar exp de graça — no minuto 14 ele já está online antes deles atingirem o próprio spike."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions com Wind Wall"
      reason: "Wind Wall come cada linha de soldados da Q e o follow-up do muro da R. Com o poke principal neutralizado, o Azir vira um mage corpo-a-corpo sem ferramentas melee."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Assassins early-game burst com vários dashes"
      reason: "All-in pre-6 quando o Azir não tem E pronta; mesmo depois do Zhonya's, kits multi-dash chegam nele antes da R ter tempo de sair."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages de artilharia long-range"
      reason: "Eles raspam o HP dele de fora do range dos soldados do Azir (740). Ele não tem sustain pre-6 para aguentar e chega no primeiro item com HP baixo."
---

## Visão geral

Azir é um battle mage que luta de longa distância através dos seus **Sand Soldiers** — pequenas unidades fantasmagóricas que ele invoca com a **W (Arise!)** e que funcionam como postos remotos de auto-attack. Quando o Azir ataca um inimigo perto de um soldado, é o soldado que apunhala em linha, causando dano mágico. Ele tem o skill ceiling mais alto desta lista (a Riot avalia 9/10 em dificuldade), e os primeiros níveis dele são honestamente fracos. Até colocar o primeiro soldado e construir a muscle memory **W → Q**, ele perde feio em trade (uma troca curta de dano na lane, não um fight completo) contra a maioria dos laners.

O game plan dele em uma frase: farmar seguro com **W** até ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** ficar online por volta do minuto 18, depois usar a **R (Emperor's Divide)** — o famoso "Shuffle" — para empurrar os carries inimigos (os champions de alto dano do time deles) para dentro do seu time durante os fights de objetivo (teamfights ao redor dos grandes objetivos do mapa: Drake, o dragão no rio bot; Atakhan, um novo boss de mid-game; ou Baron Nashor no late). A skill expression vive em três pontos: o posicionamento dos soldados (onde você fica vs onde os soldados projetam o seu range de auto-attack), a combo "Shuffle" **E + Flash + R**, e saber quando gastar o seu único escape (**E**) e quando guardar para um counter-engage (o momento em que você devolve o ataque inimigo contra ele mesmo).

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Pule a ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**: você gasta mana na **W** (pouca) e **Q** (média), o regen do Doran's cobre o resto.

**Core items (em ordem):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — primeiro item toda partida. O attack speed faz suas auto-attacks estendidas pelos soldados (basic attacks, ou AA — o range de auto do próprio Azir só importa quando há um soldado por perto) saírem mais rápido, e o magic damage on-hit (dano extra aplicado em cada basic attack) acumula em cada golpe do soldado. Esse é o spike (o momento em que um champion se torna significativamente mais forte) que vira você de passivo para ameaçador.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (um valor fixo, não percentual, de Magic Resist inimiga ignorada). Boots padrão para qualquer mid mage que quer apagar os squishies (champions com defesas baixas, tipo ADCs e outros mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica todo o seu scaling de AP (Ability Power, o atributo que aumenta o dano mágico). Depois desse item cada auto do soldado e cada **Q** bate muito mais forte; esse é o seu damage spike de verdade para os teamfights de late game.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra (dano alto concentrado em um a dois segundos), com uma passiva de threshold de HP (uma passiva que ativa quando o inimigo está abaixo de ~35% HP) que combina com o follow-up de kill depois de um Shuffle.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers e assassins (Zed, Diana, Talon, Akali). Um "diver" é um champion que pula no seu carry de back-line para apagar mesmo correndo risco. A stasis (alguns segundos em que você não pode sofrer dano nem se mover) compra tempo para a sua **E** voltar quando você é pego.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target pesado (CC = crowd control: stuns, charms, snares — qualquer efeito que tira o controle do seu personagem). Exemplos: Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — troque no momento em que qualquer alvo prioritário comprar item de MR (Magic Resist, o atributo que reduz dano mágico recebido). Soldier autos e **Q** voltam a furar a MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo). O anti-heal (uma passiva que corta as curas inimigas pela metade por alguns segundos) aplica em cada hit do soldado.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são aceitáveis quando o time precisa da sua **R** off cooldown com mais frequência (menos espera entre os casts) para os fights de objetivo.

**Skill order:** Maxe **Q** primeiro (dano e slow do soldado escalam por rank, e o cooldown cai de 14s no rank 1 para 6s no rank 5), **W** em segundo (mais cargas de soldado e duração mais longa), **E** por último. Pegue **R** nos níveis 6, 11 e 16. Comece com **W** no nível 1 — sem soldado você não consegue farmar a wave de longe.

**Runas:** Primária **Sorcery** (a árvore de runas de magic damage) com **Arcane Comet** (um pequeno projétil que aplica dano extra quando você acerta com slow ou root), **Manaflow Band** (mana extra cada vez que você acerta um champion com uma habilidade), **Transcendence** (cooldown reduction no nível 5), **Scorch** (pequeno dano de queimadura na primeira habilidade que acerta a cada poucos segundos). Secundária **Inspiration** com **Biscuit Delivery** (poções grátis na lane) e **Cosmic Insight** (mais uptime em summoner spells). Troque a secundária para **Precision** com **Presence of Mind** (devolução de mana em takedowns) e **Coup de Grace** (mais dano em alvos com HP baixo) quando o time inimigo tiver vários squishies com resistências baixas.

## Matchups principais

- **Yasuo / Yone:** A **Wind Wall** deles bloqueia cada projétil do seu kit — os golpes dos soldados na **Q** e a onda da **R**. Segure a **Q** até eles usarem a Wind Wall em outra coisa; se você conseguir baitar (forçar eles a gastarem o muro num ataque sem valor) com um único golpe de soldado, os próximos 24 segundos de trade são de graça.
- **Zed:** Ameaça de dive (ele se compromete debaixo da sua torre para te matar mesmo sob os tiros dela) a partir do nível 6. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item. Segure a **E** — nunca use ofensivamente até ele commitar a ult; se ele ulta e você tem **E** + Zhonya's, sobrevive ao burst.
- **Veigar:** Equilibrado a favorável. Ele não tem dash. O poke soldier-Q (chip damage de distância segura) tira ele do range de XP toda vez que avança para last-hit; só respeite a **E (Event Horizon)** dele guardando o seu dash de **E** para sair.
- **Twisted Fate:** Corrida de prio para roams. "Roam" significa sair da sua lane para ajudar outra; "priority" significa ter vantagem de wave-control que permite sair sem perder minions. Empurre a wave em cooldown com **W** + **Q**. Quando ele chegar no nível 6 e começar a roamar com a ult, sinalize para o time e force tower trades (você pega a torre dele enquanto ele mata sua bot lane) no lado dele em vez de persegui-lo; o Azir pune side waves com o Shuffle da **R** dentro de torres melhor que a maioria dos mids.
- **Akali:** Diver com gap-close. Coloque soldados nos bushes de onde ela gosta de flankear (entrar num fight por um lado descoberto). Dentro da zona stealth da **W (Twilight Shroud)** você não consegue mirar nela — pré-coloque a **W** para os soldados atacarem ela na hora que ela sair.

## Power spikes e condições de vitória

- **Nível 4:** Três pontos em **Q** desbloqueiam um damage spike real. O poke soldier-Q agora ameaça kills de verdade se o inimigo entrar no range duas vezes seguidas.
- **Nível 6:** A primeira **R** desbloqueia a combo "Shuffle": **Flash + R** vira a frontline inimiga (os tanks na linha de frente do fight) para trás dentro do seu time. Use a primeira vez numa skirmish (um confronto pequeno, menor que um teamfight 5v5) 2v2 no rio para que um errinho não jogue a lane fora.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** Você vira a ameaça DPS (damage per second, dano por segundo) de mid-game que o seu time estava esperando. Force fight em Atakhan ou Drake (Atakhan é um boss de meio mapa; Drake é o dragão no rio bot) — seus soldier autos batem mais que a maioria dos mages nessa fase.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 28-32):** Cada soldier auto destrói squishies. A partir daqui o Azir é um dos hard carries mais fortes do jogo, mas só se ele ficar no range máximo dos soldados e a frontline (os tanks/bruisers na frente dele) segurar.

## Erros comuns

- **Andar para o range de auto e tentar last-hit antes da W estar pronta.** Os basic attacks do Azir sem soldado por perto são curtos e fracos. Sempre invoque um soldado embaixo do minion que você quer antes de avançar; o soldado farma para você, não o seu basic attack.
- **Segurar a R esperando o Shuffle perfeito que nunca vem.** Mesmo uma **R** mediana que empurra um inimigo e cria um muro é melhor que nenhuma **R**. Use para peel (proteger o seu carry dos divers) quando não há oportunidade de engage (a ação de iniciar um fight pulando para dentro).
- **Usar a E ofensivamente sem plano de saída.** A **E** é o seu único escape. Se você dasha para dentro, os soldados expiram, o dash vai pro cooldown e você fica parado como um glass cannon (um champion com muito dano e zero defesa) em range melee. **E** ofensiva só quando dá para garantir a kill ou seguir com uma **R** imediata.
- **Esquecer que as torres da Shurima's Legacy existem.** Quando uma torre externa aliada cai, você pode ressuscitar uma torre Disc-of-the-Sun poderosa em cima dos escombros. Use para controlar objetivos perto de Atakhan ou para uma defesa embaixo do seu inhibitor (a estrutura entre a segunda torre e o Nexus). A maioria dos jogadores de Azir simplesmente nunca aperta a passiva.
- **Spammar Q como poke sem setup de W.** A **Q** projeta dano *ao longo da linha de cada soldado ativo*. Sem soldados em pé, a **Q** não faz nada. Coloque a **W** primeiro, *aí* a **Q** para mandar o soldado onde você quer.

## Dica avançada

Treine o Shuffle **E + Flash + R** no Practice Tool (o modo offline de treino do client) até conseguir executar em menos de 0,4 segundos. A ordem importa: a **E** te trava na trajetória do soldado, o **Flash** te reposiciona no meio do dash para o muro da **R** sair do ponto novo, e a **R** carrega na direção em que o seu personagem está olhando *no momento do cast*. Bem feito, isso converte um assassin isolado ou um carry que anda dentro do seu fog of war (a parte do mapa sem wards — sentinelas que dão visão — que você não consegue ver) numa kill garantida, independente de onde ele começou.
