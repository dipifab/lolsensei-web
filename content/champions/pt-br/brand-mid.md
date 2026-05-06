---
title: "Brand Mid Build & Guia — Patch 16.9"
slug: "brand-mid"
language: "pt-br"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Guia do Brand mid lane no Patch 16.9: starter kit, build burn-mage, matchups principais, power spikes, erros comuns e uma dica avançada para fechar a guia."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "As habilidades de Brand colocam fogo no alvo (dano por 4s, até 3 stacks). Com 3 stacks num campeão o blaze detona numa pequena explosão AOE que reaplica os efeitos das habilidades."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linear com dano mágico. Se o alvo já está ablaze, atordoa em vez de só causar dano — sua principal ferramenta de setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE com atraso depois de um tell curto. Alvos ablaze sofrem +25% de dano. Habilidade com o maior dano single-target do kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosão direcionada que pula em inimigos próximos. Se o alvo principal está ablaze, o raio de propagação dobra — o jeito mais fácil de aplicar blaze numa wave."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fogo de longo alcance que pula até 5 vezes entre campeões e minions, priorizando alvos ablaze e aplicando slow ao acertar. Dano enorme em teamfight quando os inimigos estão agrupados."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Akali, Diana, Fizz) — a stasis cobre sua falta de dash no gap-close deles"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que qualquer alvo prioritário fechar o primeiro item de Magic Resist"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Acerte fights agrupados com stacks de blaze já ativos em vários alvos para o R pular entre campeões em vez de minions. Fique atrás da frontline e atire no alcance máximo do W."
  weakness: "Zero dash e nenhuma escape. Se um diver passa da sua frontline, só sobra Flash e Zhonya's entre você e um one-shot — por isso os itens defensivos situacionais não são opcionais."
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
    primary_rationale: "Sorcery primária: Arcane Comet auto-procca em todo hit de W ou E, somando burst de graça em cada trade. Manaflow Band sustenta mana para spammar W, Transcendence empurra ability haste além de 40%, Scorch soma nos ticks de blaze quando o inimigo está com pouca vida."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery resolve o problema de mana de Brand nos primeiros 6 níveis e Cosmic Insight dá mais uptime de Flash — Flash é o único jeito de você desviar de um dash, já que o kit não tem nenhum."
    secondary_alternative: "Se o time inimigo tem 2+ squishies de baixa resistência (ex. Caitlyn + Senna + Ezreal), troque Inspiration por Resolve com Second Wind (sustain contra poke) e Revitalize (fortalece o lifesteal-via-burn da passiva em takedowns), mantendo você vivo o suficiente para encaixar o R."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Mages estacionários sem dash"
      reason: "O padrão de farm deles obriga a ficar parado para castar ou stackar: jogue W na wave, Q no frame de recovery para o stun, e a rotação completa de blaze chega antes deles conseguirem se mexer."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Tanks de group-engage"
      reason: "Quando o R deles pega seu time, o mesmo R pega o time deles colado no seu — o R do Brand pula entre todos os campeões agrupados e transforma o engage deles na sua condição de vitória."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Carries de backline squishy com escape fraco"
      reason: "Pyroclasm prioriza alvos ablaze; um E na frontline espalha blaze, e o R pula em cada inimigo agrupado até matar o squishy lá no fundo."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Eles teleportam por cima do seu Q antes de você conseguir encaixar o stun. Sem o stun o kit não tem peel para você mesmo, então te apagam antes do R completar o primeiro pulo."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages de artillery com alcance maior"
      reason: "O limiar de poke deles é maior que o alcance do seu Q. Brand não tem mobilidade para fechar a distância, então toda wave te deixam baixo até virar dive grátis para o jungler inimigo."
    - examples: ["yasuo", "yone"]
      archetype: "Campeões com Wind Wall e mobilidade contínua"
      reason: "Wind Wall bloqueia Q e a trajetória do projétil do R; depois eles dasham passando da zona do W. Queimar um slot defensivo em Zhonya's só compra sobrevivência, não prioridade de lane."
---

## Visão geral

Brand é um **mage AP de burst** construído em torno de uma única mecânica — a passiva **Blaze**. Cada habilidade que ele lança coloca fogo no alvo por quatro segundos, até 3 stacks. Com 3 stacks o blaze fica instável e explode numa pequena detonação AOE, reaplicando os efeitos das habilidades em qualquer um pego no splash. Traduzindo para o gameplay: cada habilidade é setup para a próxima, e quando um inimigo está pegando fogo o seu **Q (Sear)** deixa de ser uma habilidade de dano e vira atordoamento. O kit faz duas perguntas em loop — *o alvo já está ablaze?* e *os inimigos estão agrupados o suficiente para o R pular?* — e todo o plano de partida sai dessas duas respostas.

O plano de jogo na mid é direto: empurre a wave com **W (Pillar of Flame)**, busque janelas de **W → Q stun** sempre que o laner inimigo se aproximar de um minion pelo qual você consegue encostar nele, e depois rotacione com prio assim que a wave bater na torre deles. Do nível 6 em diante, **R (Pyroclasm)** é uma das ultimates de maior dano do jogo *se* os inimigos estão agrupados — você tem um setup de média distância por luta, sem dash para tentar de novo, sem escape se errar. Posicionamento atrás da wave é obrigatório: Brand não tem mobilidade nativa, sem shield, sem heal, e sua única opção defensiva é comprar Zhonya's Hourglass e mirar Flash com antecedência.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring resolve a fome de mana do spam de W e dá o scaling de AP que o Brand quer mais do que dano flat early.

**Itens core (na ordem):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — o item identidade do Brand. A passiva aplica burn percentual de HP por cima dos stacks de blaze, multiplicando dano contra tanks e times com HP empilhado. Mana, ability haste e AP batem com tudo que o kit pede.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat para deletar os squishies que você mais quer apagar com os pulos do R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, mais uma passiva que ignora ainda mais Magic Resist em inimigos abaixo do limiar de HP. Casa perfeitamente com os pulos do R caçando o alvo de menor vida.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling no late-game (40% AP bônus). Compre como terceiro ou quarto item dependendo se o time inimigo já começou a empilhar Magic Resist.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers e assassins (Zed, Akali, Diana, Fizz). A stasis é a única resposta que Brand tem quando uma cadeia de dashes atravessa sua frontline (os tanks e bruisers da frente que absorvem hits enquanto você dispara de trás).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico telegrafado (Ahri charm, Lissandra R, Twisted Fate gold card). O escudo bloqueia a habilidade de engage que de outra forma te lockaria a luta inteira.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). A passiva Grievous Wounds corta a cura deles pela metade para que seu burn de fato vire alvos mortos.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que qualquer alvo prioritário fechar o primeiro item de Magic Resist. Impede o adversário de soft-counter sua build inteira com um componente de 800 de gold.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são aceitáveis se o time precisa de mais uptime do R nos spawns de objetivo.

**Skill order:** Maxe **W** primeiro (maior dano base e principal waveclear), **Q** em segundo (mais dano e cooldown menor no stun), **E** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence** e **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**.

## Matchups principais

- **Yasuo / Yone:** bloqueiam o projétil do **Q** e o início do **R** com Wind Wall. Segure o **Q** até gastarem o muro, guarde o **W** para o frame de recovery, e nunca use o **R** como ferramenta de flank (um "flank" é entrar na luta por um ângulo lateral, atrás da backline inimiga) contra eles — solte depois que um aliado já engagou, assim os pulos já estão se movendo passando do muro.
- **Zed / Akali:** ameaças de dive com vários gap-closers (um "gap-closer" é qualquer dash, blink ou pulo que cobre terreno rápido). Compre Zhonya's Hourglass depois de Liandry's; nunca use **Flash** ofensivamente na lane contra eles, e pré-coloque o **W** nos seus pés para atordoar quando pularem em você.
- **Veigar:** mage estacionário que você pressiona pre-6. Empurre ele pra torre com **W**, busque a rotação **E → Q stun** quando ele subir para last-hit, e recall antes do nível 6 (a gaiola dele inverte a lane).
- **Anivia:** parelha pre-6, escala mais que você pos-6. Evite ficar grudado na sua wave — o muro dela te separa dos minions e te força a um trade longo de backline. Roame para as side lanes assim que o **R** estiver disponível; ela não tem mobilidade para te seguir.
- **Twisted Fate:** corrida de roam. Se ele jogar a carta dourada em você, dê **Q** antes dele fechar a distância (atordoar um campeão castando derruba a carta). Senão, rastreie o **R** dele com wards no river e no tri-bush; se ultar para side lane, ping bot/top e empurre sua wave em vez de perseguir.

## Power spikes e condições de vitória

- **Nível 2 (W + Q):** primeiro spike. Com um ponto em **W** e o **Q** que você começou já tem o combo **W → Q stun** completo. Pillar of Flame aplica um stack de blaze; Q num alvo ablaze atordoa. Essa janela é quando você empurra para first blood.
- **Nível 6 (R desbloqueado):** primeiro **Pyroclasm** disponível. Busque um teamfight no Scuttle (caranguejo do river) ou no primeiro drake — se dois inimigos estão dentro do alcance dos pulos, seu R faz cerca de 50% da vida de um squishy por pulo.
- **Liandry's Torment fechado (~ minuto 12-14):** o controle da wave inverte ("controle da wave" = quem decide onde a wave de minions luta, você ou o laner inimigo) porque o burn percentual pune amontoados de wave. Daqui em diante você é quem empurra e roama, não quem segura debaixo da torre.
- **Rabadon's Deathcap online (~ minuto 24-28):** sua sequência completa de pulos do R mata em um hit os squishies que não compraram nenhum Magic Resist. Force lutas de objetivo agrupadas aqui — Baron, Soul Drake, contests de late game.

## Erros comuns

- **Jogar Q como poke nu.** **Q** sem ablaze é só um projétil lento. Sempre faça setup antes com **W** no chão ou **E** num minion que vai espalhar para o campeão — a diferença é um stun de 1 segundo em vez de um miss triste.
- **Ultar um alvo isolado.** **R** pula entre alvos priorizando os ablaze. Se só um inimigo está no alcance, os pulos vão e voltam no mesmo alvo com damage falloff enorme por pulo. Guarde **R** para lutas agrupadas ou para executar dois inimigos ablaze lado a lado.
- **Empurrar sem vision.** Brand não tem escape (sem dash, sem blink, sem shield). Empurrar passando do river sem ward na jungle deles é o jeito mais rápido de alimentar um gank cedo. Coloque uma Stealth Ward ou Control Ward no tri-bush antes de cada shove.
- **Auto-attack para "dano extra" da passiva.** Seu auto-attack não interage com Blaze. Use a janela do auto para andar até o próximo spot de **W**, não para perseguir um hit a mais num minion baixo.
- **Errar o timing da detonação instável.** Quando chega a 3 stacks de blaze num campeão, você tem dois segundos antes da detonação. Atordoar com **Q** *antes* da detonação prende ele no splash e reaplica blaze em todo inimigo próximo. Errar o timing é a diferença entre uma kill single-target e um wipe AOE.

## Dica avançada

Treine o **double-blaze AOE wipe**. Quando dois inimigos estão lado a lado (típico em teamfights apertados ou numa wave empilhada), faça nessa ordem: **W** no chão entre eles → os dois pegam blaze stack 1. **E** no inimigo A → blaze stack 2 em A, espalha para B com stack 2 em B. **Q** em A → blaze stack 3 em A, A está atordoado e a detonação instável também acerta B, deixando B no stack 3. Agora **R** pula entre dois alvos atordoados e com stack máximo, transformando a rotação inteira num trade 2-por-0. Essa sequência é o que separa um "Brand decente" de um Brand que carrega a partida.
