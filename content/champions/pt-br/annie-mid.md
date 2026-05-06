---
title: "Annie Mid Build & Guia — Patch 16.9"
slug: "annie-mid"
language: "pt-br"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Guia da Annie mid lane para League of Legends Patch 16.9: setup do stun de Pyromania, build de burst, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "A cada 4 spells lançadas, Pyromania carrega: a próxima spell de dano stuna o alvo. Annie começa e respawna com o stun pronto — carregue o contador nos minions antes dos all-ins."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Bola de fogo point-and-click com 625 de alcance. Devolve mana e reseta 50% do cooldown se matar o alvo — ferramenta mais barata de poke e last-hit do kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "Cone de fogo de 600 de alcance. Principal ferramenta de waveclear (limpa toda a linha de caster minions em uma só spell) e a habilidade com maior dano base no rank 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Escudo direcionado + movement speed decrescente em Annie ou um aliado. Devolve dano mágico ao próximo atacante. Conta como spell lançada — use para recarregar Pyromania antes do engage."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Dano AOE point-blank de 600 de alcance que invoca Tibbers, um urso que ataca e queima inimigos próximos. O cast em si é uma spell, então uma R com 4 stacks de Pyromania stuna todos os atingidos."
      dd_spell_id: "AnnieR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins móveis e divers (Zed, Diana, Talon, Akali) — a stasis te salva depois de R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra comps de kite sem CC duro — o slow de R + W prende os alvos dentro da aura de Tibbers"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "compre assim que qualquer alvo prioritário fechar um item de Magic Resist"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Empilhe Pyromania a 4 stacks nos minions, avance com Flash + R para um stun AOE point-blank em inimigos agrupados e burste a backline squishy com Luden's Companion + Shadowflame."
  weakness: "Mobilidade base zero, alcance das spells 600-625. É outpoked por mages de artillery e os assassins móveis cruzam o alcance da R com dashes antes do stun acertar."
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
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Mages imóveis sem dash"
      reason: "A R da Annie é um stun AOE point-blank de 600 de alcance + Tibbers DPS. Mages sem dash ou stealth comem o combo inteiro no all-in de nível 6 e não conseguem responder a tempo."
    - examples: ["diana", "katarina"]
      archetype: "Burst melee com tell visível"
      reason: "Annie pré-empilha Pyromania durante o waveclear: no momento que eles se comprometem ao gap-close, o stun de Flash + R interrompe o combo antes do dano sair."
    - examples: ["fizz", "kassadin"]
      archetype: "Mages melee fracos pre-6"
      reason: "Eles precisam entrar no alcance da Q para farmar pre-6: Annie pokeia eles livremente, segura o nível 2 com Pyromania carregado e força o back sem counter-engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Mages de artillery de longo alcance"
      reason: "Pokeiam a Annie de 850-1400 de alcance enquanto ela fica em 625. Sem dash e sem shield contra poke à distância, ela perde HP a cada wave sem opção de all-in de volta."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "Assassins de alta mobilidade pós-6"
      reason: "Os dashes ou janelas de stealth saem do raio de 600 da R antes do stun acertar. A shroud da Akali e o Wind Wall do Yasuo comem direto as spells principais."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globais / cross-map"
      reason: "Annie não tem alcance de roam — limpa wave e fica no mid. O ult deles vira side lanes e dragões, então a Annie perde o macro game mesmo ganhando o 1v1."
---

## Visão geral

Annie é o burst mage mais simples do jogo (um campeão que dá muito dano mágico concentrado em 1-2 segundos e depois espera os cooldowns) e um dos mais fortes em punir erros perto do nível 6. O kit dela parece minúsculo no papel — uma Q point-and-click, um W em cone, um escudo na própria ou em aliado e um ult que invoca um urso — mas a passiva **Pyromania** une tudo: a cada 4 spells lançadas, carrega um stun garantido no próximo alvo atingido. Essa única mecânica transforma um campeão amigável para iniciantes numa ameaça com stun garantido, capaz de deletar uma backline squishy (os carries posicionados na linha de trás do time numa luta) num único botão assim que Tibbers sai.

O plano de jogo é o mesmo na lane e em teamfight: empilhe **Pyromania** a 4 stacks nos minions, avance até 600 de alcance e dispare o contador no inimigo de maior valor com **R** (Tibbers), depois **W** e **Q**. Duas decisões separam uma boa Annie de uma ótima: saber **quando manter o contador pronto** (não queimar num minion logo antes de se comprometer — entrar de cabeça — numa luta) e **como acertar a R** (Flash + R é uma das ferramentas de engage — habilidades que abrem um teamfight — mais confiáveis do jogo num time agrupado).

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (dá mana extra para Annie continuar dando Q e W cedo) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (curam HP ao longo do tempo na lane). O ring alimenta os primeiros trades; as poções sustentam contra o poke (dano à distância do mage adversário).

**Itens core (na ordem):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst do primeiro item (um "power spike" é o momento em que um campeão fica notavelmente mais forte por um level-up ou conclusão de item). O combo da Annie é curto, então o dano bônus no primeiro hit casa exatamente com **R + W** num alvo stunado.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — botas de magic penetration flat. Suas kills vêm de alvos squishy de baixa Magic Resist, e a pen flat escala melhor que a percentual nesse momento.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra com passiva de threshold de HP (dano mágico bônus quando o inimigo está abaixo de ~35% HP). Finalizador barato que transforma o R + W da Annie de "quase letal" em one-shot.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game (+30% AP total, onde AP / Ability Power é a stat que escala todas as spells da Annie). Quando entra online, o combo de R deleta inimigos agrupados, não só squishies isolados.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móveis e divers (Zed, Diana, Talon, Akali). Depois do engage R + Flash, ative a stasis (a ativa que te deixa invulnerável por 2.5 segundos): você sobrevive enquanto seu time entra no follow-up.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra comps de kite sem CC duro (times que recuam atacando para manter distância). O slow de R + W gruda os alvos dentro da aura ardente de Tibbers.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Lissandra R, Twisted Fate stun, Ahri charm). O escudo bloqueia a spell de engage, então você guarda o **Flash** ofensivo.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — coloque assim que qualquer alvo prioritário fechar um item de Magic Resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são alternativa quando o time precisa de mais uptime de **R** como abridor de teamfight.

**Skill order:** Maxe **Q** primeiro (cooldown mais baixo, mana refund no kill, sua principal ferramenta de trade — troca curta de dano na lane). Maxe **W** em segundo (waveclear, ato de limpar a wave de minions; W tem o maior dano base no rank 5). Maxe **E** por último (utility, escala pouco com rank). Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Sorcery** (a árvore de dano mágico) com **Arcane Comet** (projétil extra de dano mágico ao acertar champion), **Manaflow Band** (seu mana máximo cresce ao acertar spells), **Transcendence** (cooldown reduction nos níveis 5, 8, 11), **Scorch** (dano de queimadura extra na próxima spell a cada ~10 segundos). Secundária **Inspiration** com **Biscuit Delivery** (biscoitos grátis com mana e HP na lane) e **Cosmic Insight** (mais uptime de **Flash** e **R** no mid game).

## Matchups principais

- **Yasuo / Yone:** Eles dão Wind Wall na sua **Q** e **W** (a parede que bloqueia projéteis). Iscar o Wind Wall com uma **Q** de stack baixo (1-2 cargas, stun não pronto), depois avance com stack cheio quando o Wind Wall estiver em cooldown — o downtime é longo, eles não conseguem cobrir **Q** e engage ao mesmo tempo.
- **Lux:** Te supera em alcance com a **Q** dela em 1100. Não persiga; limpe waves a distância segura com **W**, busque roam (sair da lane para ajudar aliados em outro lugar) assim que terminar ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** e deixe seu jungler punir a falta de escape dela num counter-gank.
- **Veigar:** Favorável. Ele precisa empilhar **Q** nos minions para AP e não tem dash; pré-empilhe Pyromania, avance no 6 com **Flash + R** e stuna ele para fora da gaiola da **E** antes que ele te prenda.
- **Twisted Fate:** Corrida pra ver quem roama (sai da lane pra ajudar outra lane) primeiro. Empurre waves com **W** no cooldown. Quando a **R** dele subir, ping mid mia (missing in action: avise o time que ele sumiu) e rotacione (mova-se com a wave) para a side lane que ele atacar com seu próprio ult pronto — fight 2v2 com Pyromania cheio é kill garantida.
- **Diana:** Pre-6 ela é de vidro (defesas baixas, morre rápido); harasse com **Q** point-and-click toda vez que ela chegar perto pra last-hit. No 6, mantenha Pyromania a stack cheio: quando ela der **R** em você, seu **R + W** stuna ela antes de conseguir recastar o segundo salto.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q** + **W** na barra mais Pyromania pronto, você tem um all-in curto (compromisso total, sem disengage de nenhum lado) que vence a maioria dos mages ranged que não esperam o stun de nível 2. Se o inimigo avançar pra um cs (creep score: matar minion pelo gold) logo depois de subir nível 2, avance e troque.
- **Nível 6 + Flash:** O primeiro **R** com **Flash** é seu maior power spike de fight individual da partida. Um fight numa wave agrupada é uma double kill grátis se o jungler adversário estiver no outro lado do mapa.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completo (~ minuto 11-13):** O threshold de burst vira. Seu combo **R + W + Q** num squishy stunado já é letal sem follow-up do time.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** O dano da aura de Tibbers + a AOE no próprio cast viram nuke de teamfight (um cast que apaga vários alvos de uma vez); force fights de objetivo aqui e busque **Flash + R** em 3+ alvos agrupados.

## Erros comuns

- **Queimar o 4º stack de Pyromania num minion logo antes de um all-in.** Sempre confira o contador de stacks abaixo do retrato antes de andar pra trade range. Se está em 3 e você lança **W** pra waveclear, acabou de dar seu stun garantido pra um caster minion.
- **Lançar R sem Pyromania pronto.** **R** sem stun causa dano mas deixa o alvo sair da aura de Tibbers. Se Pyromania não estiver carregado, recarregue lançando **E** em si mesma antes de se comprometer.
- **Ficar no alcance máximo da R durante o cast.** **R** tem 600 de alcance, igual ao auto-attack da Annie. Use **Flash** pra fechar as últimas 200-400 unidades em direção ao time agrupado em vez de lançar da borda — na borda, só o inimigo mais próximo é stunado e o resto sai andando.
- **Pular ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes por outro item de AP.** O burst da Annie só mata quando MR é baixa; rushar mais AP sem magic penetration flat deixa squishies em 50 HP em vez de 0 e transforma kills garantidas em perseguições.
- **Spammar Q sem olhar a mana.** **Q** só devolve mana **no kill**. Se você der Q num minion de 200 HP e ele não morrer, gastou 60-80 de mana à toa. Use **Q** em minions perto da execução ou em champions, não como poke quando estão de HP cheio com um creep no caminho.

## Dica avançada

Treine o **Flash + R animation cancel** (um truque que usa **Flash** durante o frame de cast em vez de esperar terminar): no momento em que você aperta **R**, aperta **Flash** na mesma direção (o input fica bufferizado durante o cast). O cast point da **R** é curto o suficiente para o **Flash** te reposicionar no alvo antes da AOE resolver — te permite stunar uma backline a 800 de alcance como se você tivesse partido de 600. A maioria dos novatos aprende o combo como "aperta **R**, depois reage onde caiu"; o animation cancel transforma isso num gap-close (um teleporte curto que fecha distância) de 700 unidades quase impossível de desviar.
