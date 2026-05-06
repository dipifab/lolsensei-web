---
title: "Karthus Jungle Build & Guia — Patch 16.9"
slug: "karthus-jungle"
language: "pt-br"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Guia Karthus jungle League of Legends Patch 16.9: smite path, clear com Defile, R global, matchups principais, power spikes, erros comuns e dica avançada."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "Ao morrer, Karthus entra em forma espiritual por 7 segundos e continua lançando Q/W/E sem custo de mana. Permite fechar um fight de além-túmulo."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Explosão em área direcionada com pequeno delay. Causa dano dobrado se acerta um único inimigo. Skill expression: prever o movimento e isolar o alvo."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Muro largo que reduz magic resist e desacelera quem o atravessa. Ferramenta de chase, lock para gank ou peel contra divers que entram na sua back line."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle que cria uma aura de dano mágico por segundo em volta do Karthus drenando mana. É o motor do clear na jungle e da DPS em teamfight: deixe ligada em todo camp."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Ult global com channel de 3 segundos que causa dano mágico pesado em todo champion inimigo no mapa. Snipe cross-map e cleanup post-mortem."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra junglers de invade early (Lee Sin, Xin Zhao, Elise) — a stasis cobre a falta total de mobilidade"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando um priority target compra o primeiro item de magic resist (Mercury's Treads contam)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra engages de magic CC em alvo único (Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com healing acumulado (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Chega ao nível 6, full-clear mais rápido que o jungler inimigo e usa R para finalizar alvos com HP baixo cross-map. Com dois itens, só Defile já derrete a back line em 5v5."
  weakness: "Sem dash, sem escape, zero dueling early. Counter-jungled ou invadido antes do nível 6 você fica atrás a partida toda. Assassinos móveis e junglers com muito CC quebram o clear pré-Liandry's."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror stacka rápido em Defile (a toggle aura que tica dano por segundo), transformando skirmishes longos em AP bônus e healing. Triumph devolve HP em takedowns. Legend: Haste reduz a R. Last Stand premia a spirit form com HP baixo."
    secondary_rationale: "Sorcery secondary: Manaflow Band resolve a mana starvation early causada por Defile drenando mana a cada segundo. Transcendence empurra o ability haste além do cap de 40% pra Q voltar mais rápido entre as waves e a R rotacionar mais."
    secondary_alternative: "Contra junglers inimigos de invade pesado (Lee Sin + roams de Pyke, Elise + supports com CC early), troque Sorcery por Resolve com Second Wind (HP regen depois de tomar dano, ajuda a sobreviver ao invade nível 3) e Overgrowth (HP bônus que escala com monsters mortos)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-game scalers com presença early fraca"
      reason: "Precisam de 25+ minutos pra chegar online; Karthus já vence skirmishes no nível 6 e usa R pra negar Baron solo. Out-tempo: força drakes e fecha antes deles baterem o power spike."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Junglers farm-heavy lentos sem invade nível 3"
      reason: "Full-clearam na mesma velocidade do Karthus, mas Karthus tem a R global que transforma o gank deles em troca 2-for-1: mesmo se matarem o seu laner, R faz cleanup do laner deles cross-map antes do recall."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline scalers sem mobilidade"
      reason: "A R cross-map transforma os erros de posicionamento deles em kills nos objective spawns. Contribuem de longe mas não conseguem dodgear um snipe global lockado num flash ou ulti faltando."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers early-game de invade com CC duro"
      reason: "Entram na jungle do Karthus no nível 2-3 antes de Defile escalar em mana. Karthus não tem escape, não tem dash, e a Q é lenta demais pra salvá-lo de uma chain Lee Sin Q + W ou de um rappel da Elise. Um invade mal jogado arruina a partida."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Assassinos stealth ou burst da jungle"
      reason: "Abrem com isolation damage num alvo sem defesas; até Zhonya's Hourglass só atrasa o inevitável no 1v1. Karthus morre antes de stackar Conqueror ou tradar de forma significativa."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-deny gankers e tracker junglers"
      reason: "A R do Nocturne corta a vision do time, Karthus não vê o engage na sua back line; o blood tracking do Warwick transforma uma R cross-map em dive num alvo em channel. Karthus precisa de vision pra channellar R com segurança e esses dois removem ela."
---

## Visão geral

Karthus jungle é o protótipo do **apex jungler**: um champion com um dos tetos mais altos do jogo e um dos chãos mais baixos. O kit gira em torno de duas ideias. **Defile (E)** é uma toggle aura que tica dano mágico por segundo em volta do Karthus drenando mana, e é o motor do clear: resolvido o problema de mana, ele full-cleara mais rápido que quase qualquer outro champion. **Requiem (R)** é uma ultimate global que acerta cada champion inimigo no mapa e transforma erros de posicionamento em qualquer canto em kills — a coisa mais valiosa que um jungler pode fazer no momento certo.

O game plan é rígido pros padrões de jungle. Full-clear dos três primeiros camps (red → krugs ou blue → gromp dependendo do side) com **E** toggled on, recall pelos componentes de **Liandry's Torment** e a partir do nível 6 você caça targets de R cross-map enquanto skirmisha (um "skirmish" é um combate breve entre 1-3 jogadores de cada lado, geralmente em torno de um camp ou objective de rio) em volta de drake e grubs (os pequenos monsters neutros do void pit que dão gold e um buff pro time). Karthus não tem escape e nem dash, então wardar as entradas da própria jungle no minuto 1:30 não é opcional — um invade que você não vê chegar é uma kill grátis pro jungler móvel. O payoff é o spike pós-6: Karthus é um dos poucos champions genuinamente mais perigosos morto que vivo, porque a passiva **Death Defied** o mantém castando por 7 segundos depois do HP zerar.

## Build recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default pra junglers ranged — dá o smite-pet que acelera o clear e gera gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (em ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Hailblade (auto-evolui por volta do minuto 3-4 quando você acumula XP de jungle suficiente). Companion default pra junglers AP burst: adiciona um proc de dano mágico na próxima auto-attack depois de castar uma ability (um "proc" é um efeito passivo que dispara por uma condição — aqui, lançar qualquer ability arma a próxima auto). Combina com o dano de Q em alvos isolados.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. O burn percentual de HP pune as pools dos objectives (drake, baron, herald) e stacka em cima de cada tick de Defile. É o item que vira a sua velocidade de clear e te deixa contestar drakes a partir do minuto 8.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, o power spike mais barato entre os core items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — o slow em todo hit de spell fecha o maior defeito do Karthus (sem chase, sem escape). Te deixa colado em alvos kitados pra Defile stackar Conqueror, e transforma a passiva post-mortem em ferramenta de cleanup garantida.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — revela inimigos atingidos por habilidades de longo alcance e adiciona um amplificador de dano. Sinergia perfeita com Q e Wall of Pain a long range, e o reveal ajuda a lockar R globais através do fog of war (a área não revelada fora da vision do seu time).
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling late game. Compre por último, a menos que esteja 4+ kills à frente; nesse caso antecipe pra snowball ("snowball" = vantagem cedo que cresce: kill → gold → item → mais kills).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers early game (Lee Sin, Xin Zhao, Hecarim, Diana). A stasis é a única resposta do Karthus quando uma chain de dashes atravessa a sua front line (os tanks e bruisers da frente que normalmente absorvem hits no seu lugar). Também permite castar R em stasis.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um priority target compra o primeiro item de magic resist. As ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (as botas de magic resist) contam como esse primeiro item de MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra engages de magic CC telegrafados (Ahri R, Lissandra R, Nautilus hook). O shield bloqueia a primeira ability pra você não tomar one-shot antes da R cair.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra composições com healing acumulado (Soraka, Vladimir, Yuumi, Dr. Mundo). Grievous Wounds corta o healing inimigo pela metade pro dano de Defile pegar de verdade.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** são default. Troque pra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se o time inimigo tem 3+ ameaças de hard CC com dano mágico.

**Skill order:** Maxe **Q** primeiro (seu burst single-target e waveclear, e a única ability que escala forte com o rank), **E** segundo (aumenta o dano por segundo de Defile e sustenta o drain de mana), **W** por último. Coloque um ponto em **R** nos níveis 6, 11 e 16.

**Runes:** Primary **Precision** com **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** com **Manaflow Band** e **Transcendence**.

## Matchups principais

- **Lee Sin:** Você perde todo 1v1 antes do nível 6. A chain Q + W dele pula o delay da sua Q. Evite skirmishes solo pré-6, full-clear no lugar e warde as duas entradas da sua jungle no minuto 1:30.
- **Master Yi:** Counter limpo no 1v1 quando ele bate Wit's End. Force o fight 5v5 em rios estreitos (drake pit, baron pit) onde o W-cleanse dele não salva de uma sequência prolongada Defile + R. Compre Zhonya's Hourglass como segundo item se ele engatar.
- **Karthus mirror:** Decidida pelo tempo de farm e disciplina com R. Quem full-cleara um camp à frente no nível 6 ganha a primeira R race. Não desperdice R a menos que garanta uma kill ou um smite — uma R perdida coloca o Karthus mirror um minuto à frente no controle de objective.
- **Hecarim:** Matchup parelho. Ele te ultrapassa no chase mas se agrupa pra Defile em teamfight. Wall of Pain na trajetória de carga dele atrasa o próprio engage, e a passiva post-mortem faz cleanup se ele te matar mesmo assim.
- **Sejuani / Amumu:** Favorável. Eles engagam agrupando o time inimigo num stack — exatamente o formato que Defile quer. Engage em cima do engage deles: se ultarem dentro do seu time, você entra com E toggled e vê todo inimigo em chamas derreter.

## Power spikes e condições de vitória

- **Nível 6 (R desbloqueada):** Primeiro power spike global. **Requiem** transforma qualquer inimigo com HP baixo cross-map em kill. Daqui em diante, ping no mid laner inimigo antes do recall e ulte no channel de recall — kill grátis com risco zero.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minuto 9-11):** A velocidade de clear vira e a DPS em objectives (DPS = damage per second, aqui contra as pools HP de drake/baron/grub) dobra. A partir desse ponto, é você quem inicia drake fights, não quem reage.
- **Dois itens + boots (~ minuto 18-22):** Defile sozinha tica dano sério; em qualquer fight agrupado Conqueror stacka rápido e a sua R locka o cleanup. É a sua janela de skirmish mais forte.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** R one-shota squishies que não construíram um único item de magic resist. Force objective fights agrupados — Baron, Soul Drake, Atakhan ("Atakhan" = um boss neutro late-game que spawna por volta do minuto 14; trate o spawn como um 5v5 forçado).

## Erros comuns

- **Entrar em pânico com Death Defied.** A maioria dos novatos queima os 7 segundos post-mortem fugindo do próprio cadáver. A jogada certa é engagar num fight com HP baixo sabendo que vai morrer: a sua morte começa a rotação de dano, não termina. Q-Q-Q-E em spirit form costuma fazer mais dano do que você teria feito vivo.
- **Soltar Q aleatoriamente.** Lay Waste causa dano dobrado num único alvo isolado. Se atira Q numa wave com três minions mais o laner, o dano cappa no valor menor. Puxe o laner com W ou espere um único alvo exposto, e então Q no ponto previsto.
- **Castar R pelo kill steal.** Ultar no meio do teamfight é desperdício: cada inimigo já está dentro do alcance de Defile. Guarde R pra snipe cross-map (uso de R como finisher de longo alcance e baixo risco num inimigo faltando com HP baixo depois de um fight) ou cleanup post-mortem. R é "after-the-fight", não "during-the-fight".
- **Pular vision na própria jungle.** Coloque Stealth Wards em tri-bush e pixel brush no minuto 1:30. Karthus não tem escape; um invade que você não vê chegar é uma kill grátis pro jungler móvel.
- **Smite-greedar objectives sem R.** Drake e grub têm HP que escala; o seu smite não. Se contestar drake sem R off cooldown contra um jungler que tem, perde a smite war e o drake.

## Dica avançada

Treine o **suicide engage**. Quando o seu time commita um 5v5 que não dá pra ganhar de frente, ande com o Karthus pra dentro da back line inimiga com Defile toggled, esperando morrer. No instante em que o HP zera, Death Defied te dá 7 segundos de cast grátis sem custo de mana — e a front line inimiga para de bater no cadáver porque não tem mais o que acertar. Essa janela de spirit form é onde você Q-spama o inimigo com HP mais baixo que alcançar e finaliza com R quem fugir. Bem feito, um Karthus que morre primeiro transforma um fight imperdível em ace.
