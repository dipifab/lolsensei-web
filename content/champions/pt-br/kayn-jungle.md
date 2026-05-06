---
title: "Kayn Jungle Build & Guia — Patch 16.9"
slug: "kayn-jungle"
language: "pt-br"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Kayn jungle no Patch 16.9: escolha entre Rhaast e Shadow Assassin, jungle clear, gank timing, matchups principais e power spikes da rota selva."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Acertar inimigos enche orbs de duas cores: vermelhos contra melee/fighter, azuis contra ranged/mage. Encher uma barra a 100% transforma o Kayn no nível 6 em Rhaast (vermelho) ou Shadow Assassin (azul)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Dash curto que acerta inimigos no caminho, depois um slash AOE. Mobilidade principal e ferramenta de waveclear. O slash do Rhaast causa dano % HP máximo."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Slow linear de longo alcance. A versão Rhaast causa knock-up. A versão Shadow Assassin pode ser lançada em movimento e tem mais range."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Atravessa muros com bônus de move speed e um pequeno heal ao entrar no terreno. Shadow Assassin ganha duração maior, slow immunity e cooldown reduzido."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Esconde-se dentro de um campeão marcado (mark dura 3.15s após causar dano) por alguns segundos, depois sai com burst enorme. Te deixa untargetable: útil para esquivar de CC."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs comps que kitam com vários carries ranged — o active slow mantém Rhaast colado após E + Q"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs duplo AD (Yasuo + Caitlyn) — o bleed dilui o burst físico recebido"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst mágico ability-based (Syndra, Veigar, Annie) — dá MR e escudo de salvação"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin vs CC single-target (Morgana Q, Ashe R) — o spellshield bloqueia o hook antes do engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin vs alvos com armor (Tabi tank, Bramble Vest) — armor pen e slow on-damage"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast vs stack de armor (Sion, Malphite) — quebra armor a cada acerto e dá HP bônus"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Sobreviva até o nível 6 para se transformar: Rhaast contra tanks de frontline, Shadow Assassin contra carries squishy. Pune timings do jungler inimigo e snowballa com picks de R."
  weakness: "Kayn pre-form (níveis 1-5) é um dos junglers mais fracos do jogo: clear lento, sem sustain, fácil de invadir. Se ficar atrás antes da transformação, o scaling colapsa."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Bruisers melee tanky e juggernauts de frontline"
      reason: "O dano % HP da Q do Rhaast e o knock-up do W rasgam alvos com HP alto que outros assassins têm dificuldade de matar, e você enche os orbs vermelhos naturalmente lutando contra eles em skirmishes."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Carries ranged imóveis (ADCs sem dash)"
      reason: "O R do Shadow Assassin te faz aparecer dentro da posição deles e bursta atravessando a frontline — eles não têm escape para esquivar do channel enquanto você está untargetable."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Supports enchanters squishy"
      reason: "Shadow Assassin one-shota eles em 1-2 abilities entrando por um muro com E, removendo o peel e o disengage do time antes do fight começar."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Junglers early-game fortes com pressão de invade"
      reason: "Eles ameaçam os três primeiros camps do Kayn antes da transformação. Um invade bem-sucedido no nível 2-3 limita o scaling porque ele não consegue defender a side sem um clear forte."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Tanks com CC duro point-and-click"
      reason: "O taunt Q do Rammus ou a R do Malphite pegam o Kayn fora do E e travam fora da combo. Nem a untargetability do R do Shadow Assassin salva se você for stunado antes de castar."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Junglers com dueling forte e tools de counter-gank"
      reason: "Eles batem o Kayn no 1v1 na fase early fraca dele e podem invadir antes da form. Se campearem sua jungle, você não consegue responder até o nível 6."
---

## Visão geral

Kayn é um jungler melee assassin/fighter com uma mecânica de transformação única: no nível 6 ele vira **Rhaast** (forma vermelha, hybrid bruiser que cura com dano de abilities e brilha contra tanks melee) ou **Shadow Assassin** (forma azul, AD assassin que apaga carries squishy — "squishy" significa campeões com muito dano e pouca defesa, tipo ADCs). A forma depende de quais "orbs" você encheu durante o early game — lute contra melee/fighter para encher orbs vermelhos, lute contra ranged/mage para encher os azuis. A primeira barra a chegar em 100% trava a forma.

Seu game plan tem dois estágios. **Pré-transformação (níveis 1-5)** você é fraco: faça clear com **Q** + **W** de forma eficiente, evite skirmishes (brigas pequenas entre 2-4 jogadores, não teamfights completos) que possa perder e tente power-farm até o 6. **Pós-transformação** você vira uma ameaça real: Rhaast busca fights prolongados e mergulha em frontliners, Shadow Assassin busca picks de **R** (dive = pular em um inimigo embaixo de torre ou em espaço aberto para matar) em carries isolados antes do time agrupar.

## Build recomendada

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper dá tenacity (resistência a crowd control) em fights de objective, do qual o Kayn precisa em ambas as formas. Pegue ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** se você decidiu ir Shadow Assassin e quer move speed para os picks.

**Core items (em ordem):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primeiro item do Rhaast. AD, attack speed, active que dá slow. Combina bem com o dash da **Q** para grudar nos carries que kitam (kite = recuar atacando para manter distância dos melees).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots padrão contra qualquer time com stuns ou roots. Troque para ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra muito dano de auto-attack (dois AD carries).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, escudo de salvação (HP-threshold passive: escudo que ativa quando seu HP cai abaixo de uma porcentagem). Obrigatório no Rhaast para sobreviver aos fights longos que você quer iniciar.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — pilar do Rhaast. AD, armor, ability haste e efeito bleed (dano espalhado em vários segundos em vez de receber tudo de uma vez). Melhor item contra times com dois damage dealers físicos fortes.

**Core path Shadow Assassin** (substitui os itens 1, 3, 4 acima):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — primeiro item de lethality (armor pen flat que escala para baixo contra alvos com muito armor) para Shadow Assassin. AD, lethality, ability haste e um active em área que ajuda no clear E finaliza alvos já danificados após a saída do **R**.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst e um active que dá move speed para picks pelo mapa.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive de execute que finaliza alvos abaixo de 5% HP, perfeito após o burst do **R**.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs burst mágico ability-based (Syndra, Veigar, Annie). Dá magic resist e escudo de salvação abaixo de uma soglia de HP.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin vs CC single-target (Morgana Q, Ashe R). O spellshield (passive que bloqueia a próxima ability inimiga) salva seu engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin vs stack de armor (Tabi tank, Bramble Vest). Armor pen mais slow ao causar dano.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast vs Sion, Malphite, ou qualquer frontline que stacka armor. Quebra armor a cada acerto e dá HP bônus.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs muito poke de uma backline mágica (Xerath, Vel'Koz). Muito HP mais escudo mágico que regenera fora de combate.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** é o padrão pela tenacity (duração reduzida de stuns e slows). Troque para ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra dois AD carries.

**Skill order:** Maxe **Q** primeiro (reset nos camps de jungle e dano principal). Maxe **E** segundo (cooldown reduzido para reposicionamento e wall plays). Maxe **W** por último. Coloque um ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Precision** com **Conqueror** (stacka adaptive force em fights prolongados, ideal para Rhaast), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Secundária **Domination** com **Sudden Impact** e **Relentless Hunter**. Para setup Shadow Assassin one-shot, **Hail of Blades** em Domination é a alternativa.

## Matchups principais

- **Lee Sin / Elise:** Bullies do early game. Comece pelos camps top side se seu top laner tem CC para ajudar (counter-gank), e wardе as entradas de raptor/red no minuto 1:30. NÃO conteste o Scuttle Crab do river se seu top não está vindo com você — você perde o 1v1 antes da form.
- **Sett / Darius (top):** Alvos de feed grátis para Rhaast se você gankar top. O kit deles força entrada em melee, enchendo seus orbs vermelhos rápido. Espere eles usarem a ability principal (W do Sett, pull do Darius) e engage com **E** atravessando muro + **Q** + **W** knock-up se for Rhaast.
- **Vayne / Caitlyn (bot):** Alvos prioritários para Shadow Assassin. Não têm dash para esquivar do **R**, e enchem os orbs azuis porque lutam à distância. Após a form, ganke bot lane on cooldown.
- **Malphite / Rammus (counter top jungle):** O CC duro point-and-click trava sua combo. Compre ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cedo e nunca engage sem o CC do seu support pronto antes.
- **Yuumi / Lulu (support inimigo):** Alvos grátis para Shadow Assassin em teamfights late-game. **R** neles de uma posição de flank assim que se desgrudarem do carry — não têm peel para si mesmos.

## Power spikes e condições de vitória

- **Nível 6 + transformação:** Esse é o spike (um "spike" é o momento em que seu campeão fica muito mais forte por causa de um nível ou item). Antes da transformação você está abaixo da média; depois, é um top-3 jungler. Tempo sua primeira big play (gank ou pick de **R**) no segundo em que se transforma, enquanto o time inimigo ainda te acha fraco.
- **Controle do Crab (minuto 3:15 e minuto 6:00):** O Crab dá experiência e vision. Como Kayn pre-form você não consegue duelar por ele; traga seu top ou mid laner para contestar, ou ceda limpo e farme camps em vez de morrer.
- **Primeiro Drake fight (minuto 6-9):** Kayn pre-form é ruim em brawls 5v5. Se seu time pode pegar Drake sem você, combinem um trade de Voidgrubs (os vermes pequenos no river top que dão uma passive a quem finaliza) no lado oposto e farme sua jungle enquanto eles lutam.
- **Primeiro item completo (~ minuto 13-15):** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** para Rhaast ou ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** para Shadow Assassin: aqui sua taxa de conversão de gank passa de "precisa setup perfeito" para "kill só com flash do laner".
- **Três itens Shadow Assassin (~ minuto 22-25):** Com ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online, sua combo de **R** one-shota qualquer squishy abaixo de 5% HP. Force pickoffs (kills em alvos isolados) antes de fights de objective.

## Erros comuns

- **Travar a forma errada para a comp do time.** Não pickе Shadow Assassin automaticamente todo game só porque é flashy. Olhe o time inimigo: 3+ tanks/bruisers = Rhaast (dano % HP e sustain importam). 2+ carries squishy sem dash = Shadow Assassin. Encher a barra errada é culpa sua: lute contra os inimigos correspondentes até a barra certa travar.
- **Gankar antes do nível 6.** Ganks do Kayn pre-form causam quase zero dano. A menos que o laner inimigo esteja abaixo de 30% HP ou hard-CC-locked, seu gank só desperdiça tempo que você devia gastar farmando. Ganke só em setups de overkill (Flash + ulti claros do laner) até se transformar.
- **Usar R defensivamente sem saída.** **Umbral Trespass** te deixa untargetable enquanto está dentro do inimigo, mas você sai no mesmo lugar de onde castou. Se ultar dentro de um fight 5v5 para esquivar de CC e seu time não está ganhando, você sai na mesma morte que estava tentando evitar. Use **R** quando puder finalizar o kill ou quando aliados estão chegando, não como Flash de pânico.
- **Atravessar com E para o time inimigo.** Os wall walks de **Shadow Step** são chamativos mas o cooldown é longo. Engagar atravessando muro sem escape atrás te commita totalmente. Não vá all-in (se comprometer sem retirada) por cima de muro a menos que **R** esteja pronto e você tenha alvo claro.
- **Ignorar fights de orb vermelho como Rhaast.** Se você decidiu Rhaast, cada fight contra um alvo melee enche a barra mais rápido. Não fuja de um skirmish com o top laner: mergulhe, encha a barra e force a form no minuto 5-6 em vez de no minuto 8.

## Dica avançada

Use **E** ofensivamente como ferramenta de vision, não só como escape. Andar dentro do muro da jungle inimiga e esperar 1.5 segundos no terreno revela se o jungler deles está do outro lado sem você se commitar — Kayn é invisível para eles enquanto está dentro do muro. Se o camp foi pego, você sabe que o inimigo está do seu lado do mapa e rotaciona de volta. Se o camp está up, você pode atravessar o muro para invadir com combo **Q** + **W** de um ângulo que não esperam. Esse único truque converte o Kayn de "scaling jungler" para "information jungler" no mid-game.
