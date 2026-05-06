---
title: "Fiora Top Build & Guia — Patch 16.9"
slug: "fiora-top"
language: "pt-br"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Guia da Fiora top para League of Legends Patch 16.9: build de duelista, gestão de Vitals, timing do parry, matchups principais, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "Um ponto fraco brilhante (um Vital) aparece em volta de cada campeão inimigo próximo. Acertá-lo causa true damage, cura a Fiora e dá Move Speed por alguns segundos."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Dash curto direcional que apunhala o inimigo mais próximo e reseta o timer do auto-attack. Acertar reembolsa quase todo o cooldown: encadear Q é a mobilidade principal dela."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry: bloqueia todo o dano e disable que chegar por um instante, depois apunhala numa direção. Slowa o primeiro inimigo, ou stuna se você parou um efeito de CC."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Empower nos próximos dois auto-attacks. O primeiro slowa o alvo, o segundo é sempre crit. Ambos dão bônus de attack speed durante a janela."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Revela todos os quatro Vitals em volta do campeão alvo. Acertar todos (ou matar o alvo após pelo menos um Vital) cura a Fiora e aliados próximos em uma grande AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dos Plated Steelcaps quando o time inimigo tem muito dano mágico ou cadeias de CC (Lissandra, Ryze, pull do Sett)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "contra bruisers tankier (Mundo, Sion, Ornn) — crit + cura no primeiro hit ajuda contra HP-stackers"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra tops móveis (Camille, Irelia, Renekton) — dash + slow para stickar quando o Q sozinho não basta"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP forte (Mordekaiser, Vladimir, Rumble) — escudo mágico + MR pro splitpush 1v1"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contra frontlines com muita armor (Malphite, Rammus, Shen) — armor pen + slow para manter Vitals em range"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Gerencie Vitals para se curar e snowballar early, chegue à Trinity Force e depois splitpush numa side lane até mandarem dois. Em teamfight, R no squishy pra cura AOE que ganha fights longos."
  weakness: "Squishy nos primeiros 6 níveis e muito item-dependent. Cadeias de hard CC e poke ranged (Teemo, Quinn, Gnar) a mantêm longe dos Vitals; sem resets de Q não tem mobilidade."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts lentos que dependem de uma única grande habilidade"
      reason: "O W da Fiora para a única wind-up telegrafada que os define (pull E do Darius, slam W do Sett, silence Q do Garen). Com a wind-up gasta, ela gira em volta e free-hita Vitals o trade todo."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "Tanks HP-stackers que não conseguem parar os Vitals"
      reason: "Vitals causam uma porcentagem do HP máximo do alvo em true damage (dano que ignora armor e MR). Quanto mais HP buildam, mais o R dela os destrói em fights longos."
    - examples: ["nasus", "kayle"]
      archetype: "Melees scaling late com laning early fraco"
      reason: "Ela bullia eles fora da wave a partir do nível 2 com resets de Q, matando ou empurrando sob a torre repetidamente antes de chegarem nos itens que os tornam perigosos."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Tops ranged que kitam fora do range do Q"
      reason: "Fiora não tem resposta ao poke ranged antes do nível 6. Eles ficam em range de auto-attack, cegam ela ou dasham, e ela não chega num Vital pra se curar."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmishers com mobilidade on-demand"
      reason: "Os dashes deles ignoram o jogo de posicionamento dela. O E do Jax stuna durante a janela do parry, os resets Q da Irelia reposicionam ela toda hora, o R da Camille a prende em 1v1."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Tanks com hard CC point-and-click"
      reason: "O CC deles é confiável e não-paráyel quando já está em você. Um R do Malphite ou stop-charge da Poppy cancela a janela do R da Fiora e o time joga 4v5 enquanto isso."
---

## Visão geral

Fiora é uma **skirmisher** — uma duelista melee que vence fights prolongados em 1v1 ao invés de bursta em 1-2 segundos como uma assassina. O kit dela gira em torno da passive **Duelist's Dance**: um ponto fraco brilhante chamado **Vital** aparece em volta de cada campeão inimigo próximo, girando de lado a cada poucos segundos. Acertar o Vital causa **true damage** (dano que ignora armor e MR), cura ela e dá Move Speed. O Q **Lunge** é um dash curto de cooldown baixo que se reembolsa quase todo no impacto, então encadear Q em volta do oponente para chegar no próximo Vital é o loop mecânico central. O W **Riposte** é um **parry** — um escudo curto que bloqueia a próxima instância de dano ou CC e contra-ataca, stunando o alvo se você parou um efeito de CC.

O game plan é simples de descrever mas mecânico: na lane, gerencie Vitals para se curar e roer o oponente, procure um all-in de nível 2 ou 6 (um fight em que você commita totalmente na kill), e depois **splitpush** (push uma side lane sozinho para forçar o inimigo a mandar alguém te parar) assim que sair **Trinity Force**. Em torno do R **Grand Challenge** Fiora se torna um dos campeões 1v1 mais fortes do jogo: ult em um alvo isolado, acerte os quatro Vitals, e a cura AOE final pode virar um teamfight sozinha. Ela é squishy e item-dependent nos primeiros 6 níveis, então a lane early é sobre Vitals, não sobre kills.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A passive de regen de HP amortece o poke (dano ranged que rói HP sem committar a um fight) inimigo até seu spike de Q-E no nível 2. Pegue ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** apenas em uma lane melee onde você espera all-in early (ex. mirror Fiora, Garen).

**Core items (em ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primeiro spike (o maior salto em dano e **stickiness**, sua capacidade de ficar grudada num alvo que tenta fugir). O proc Spellblade on-hit triggera em cada Q para um dano bônus enorme, e a passive de Move Speed após cada habilidade empilha a chase aos Vitals. AD, attack speed, ability haste (stat que reduz cooldowns) e HP se alinham com tudo que o kit pede.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots padrão quando o inimigo te machuca principalmente com auto-attacks.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP mais um **escudo lifeline**: quando seu HP cai abaixo de ~30%, dispara um escudo automático. É exatamente a janela em que você precisa de tempo extra para fechar os dois últimos Vitals no alvo do R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — transforma **burst** AD (dano alto em 1-2 segundos) em sangramento lento (dano espalhado nos próximos segundos). Em kill, o bleed restante é cleansed — um reset limpo para dives em splitpush.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cleave AOE em auto-attacks mais omnivamp (lifesteal que funciona em qualquer dano que você causa, não só autos). Dobra sua waveclear pra você splitpushar uma side lane sem perder muito tempo.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem muito dano mágico ou cadeias de **CC** (crowd control: stuns, roots, knockbacks — qualquer coisa que te trave). A tenacity (stat que reduz a duração de CC em você) mantém as janelas de parry W usáveis em teamfight.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primeiro item alternativo contra lanes de bruiser tankier (Mundo, Sion, Ornn). Cada primeiro auto em um campeão num fight crita e cura — sustain extra contra HP-stackers.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contra tops móveis (Camille, Irelia, Renekton). O dash + slow ativo dá um segundo gap-closer (ferramenta para fechar a distância com o inimigo) quando os resets de Q sozinhos não bastam.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst **AP** (Ability Power, a stat por trás do dano mágico) forte (Mordekaiser, Vladimir, Rumble). Escudo mágico lifeline + MR mantém o splitpush 1v1 ganhável.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contra frontlines que stackam armor (Malphite, Rammus, Shen). Armor pen mais uma proc (passive que dispara automaticamente em cada hit que causa dano) de slow segura tanks pinned o suficiente para limpar os quatro Vitals.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tiver três ou mais fontes de CC ou dano mágico pesado.

**Skill order:** Maxe **Q** primeiro (o cooldown cai por rank, resets ficam quase instantâneos). Maxe **E** segundo (mais dano no crit empower, slow mais longo pra preparar Vitals). **W** maxa por último. Pegue **R** nos níveis 6, 11, 16.

**Runes:** Árvore primária **Precision** com keystone (a runa principal da árvore) **Conqueror** — escala AD bônus enquanto você continua lutando, capada após ~5 segundos. Combine com **Triumph** (cura e ouro em takedown), **Legend: Bloodline** (lifesteal que stacka em takedowns) e **Coup de Grace** (mais dano abaixo de 40% HP — perfeita pra fechar Vitals). Árvore secundária **Resolve** com **Bone Plating** (redução de dano nos próximos 3 hits após você tomar dano) mais **Revitalize** (potencializa a cura AOE do R). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups principais

- **Darius:** Skill matchup. O Q dele na lâmina externa aplica uma stack de bleed e te out-tradea raw, mas o kit todo é telegrafado: **W** (parry) na pull E e o trade vira. Se você para a pull, ele fica stunado por quase um segundo — Q in, dois Vitals, sai. Nunca trade quando a passive dele estiver em 4-5 stacks.
- **Camille:** Matchup duro. O hookshot E dela stuna através do seu W se ela acertar o segundo cast, e o R dela te isola em 1v1. Guarde o **W** pro R dela, não pro Q. Compre ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** ao invés de Trinity se ela snowballa early.
- **Teemo:** Lane brutal. Ele te cega (cancela seus auto-attacks por um curto período) on cooldown e poka de fora do range do Q. **Freeza** a wave perto da sua torre (pare de pushar e mantenha a wave do seu lado) pra negar o farm dele (ouro e XP de minions), e chame seu jungler.
- **Garen:** Favorável. Q-W pra baitar o **W** dele (escudo de damage reduction), depois ande pro lado pelo Vital. O silence do Q dele é uma wind-up reta — pare on reaction. Evite all-in sob o R dele a menos que esteja 1-2 itens à frente.
- **Jax:** Matchup parelho que Fiora vence depois de um item. Pare o **E** dele (a wind-up de stun de 2 segundos) e a lane é sua. Sem esse parry, o E + counter-strike dele te out-tradea porque stuna através de qualquer hit que você der no channel.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + E desbloqueados você tem uma janela real de all-in. Q in pra um Vital, E pro slow + crit auto, ande pro lado pro próximo Vital. A maioria das lanes perde um terço do HP num único trade de nível 2.
- **Nível 6:** Primeiro **R** desbloqueado. Mesmo com zero itens, R isola um alvo e a cura AOE te mantém viva muito depois da kill. Force um 1v1 no momento que seu jungler aparecer no lado top.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 11-13):** Dano e stickiness dão o maior salto aqui. Você pode splitpushar uma side lane e bater 1v1 confiavelmente em qualquer um que mandarem. Force pressão na side lane e ignore teamfights de mid quando isso ficar online.
- **Três itens + R online (~ minuto 22-26):** Pico de teamfight. R no alvo mais squishy, dance pelos quatro Vitals, e a cura AOE mantém o time todo vivo através de um segundo engage. Se você não chegar na back line, R no frontliner com mais HP — o true damage corta a build dele do mesmo jeito.

## Erros comuns

- **Spammar Q on cooldown por dano.** O Q é uma ferramenta de posicionamento primeiro, dano segundo. Se você Q em direção ao inimigo e come a combo dele toda, você desperdiçou tanto o dash quanto o reembolso. Q **em direção ao Vital**, não em direção ao campeão.
- **Desperdiçar W em auto-attacks.** O W para qualquer fonte de dano, mas um auto de minion parado é potencial desperdiçado. Guarde W pra maior habilidade individual do inimigo. Um parry limpo num CC é uma janela de kill grátis.
- **Ultar contra uma parede.** O R coloca quatro Vitals nos lados cardinais do alvo. Se o inimigo já está colado numa parede, dois Vitals ficam do lado da parede e você não chega neles. Puxe o alvo pra área aberta primeiro, depois R.
- **Splitpushar sem vision.** Fiora vence 1v1 contra qualquer um mas perde 1v2 toda vez. Coloque um ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** no bush da side-lane inimiga antes de shovar — sem ele, cada shove convida um gank grátis do qual você não escapa.
- **Tradar contra uma passive cheia.** Juggernauts como Darius, Sett, Renekton vencem trades raw quando a passive deles está carregada. Se a barra estiver cheia, recue, push a wave e trade só quando ela esvaziar.

## Dica avançada

Treine o **timing do parry W** em ultis point-and-click (habilidades que miram automaticamente, tipo R do Mordekaiser) ao invés de skillshots (habilidades que você mira manualmente). A maioria dos jogadores tenta W na wind-up do R do Malphite ou Sion, o que é ok mas previsível. As jogadas enormes são W'ar a **R do Mordekaiser** (parry stuna ele por quase um segundo e você sai livre), a **R do Skarner** (a suppression é cancelada e ele fica stunado), e a **R do Warwick** (frame-perfect, mas um parry limpo encerra o fight). Monte um custom game, peça pra um amigo jogar um desses campeões, e treine o parry até parar de pre-castar e começar a reagir. Quando virar reflexo, todo 1v1 com ulti hard-CC vira a seu favor mesmo com desvantagem de itens.
