---
title: "Kalista Bot Build & Guia — Patch 16.9"
slug: "kalista-bot"
language: "pt-br"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Guia da Kalista bot lane no Patch 16.9: build on-hit, mecânica Soulbound com o support, matchups principais, power spikes, erros comuns e uma dica final para fechar o trade."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Cada basic attack e cada Pierce dão um pequeno hop durante o wind-up. Um clique de movimento antes do impacto define a direção do salto."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Skillshot linear. Se mata o primeiro alvo, a lança continua e transfere todos os stacks de Rend para o próximo inimigo atingido."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Passiva Soulbound: liga Kalista a um aliado. Quando os dois batem no mesmo alvo, dano mágico bônus baseado no HP máximo."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Cada basic attack e cada Pierce cravam uma lança no alvo. Ao ativar arranca tudo: dano escala com o número de stacks, slow nos inimigos próximos."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Coloca o Soulbound em stasis e o puxa pra Kalista. O aliado reativa pra disparar como dash com knockback que para no primeiro champion atingido."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra tanks/bruisers com 2500+ HP (Sion, Ornn, Cho'Gath): o armor pen escala com a vantagem de HP deles"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de healing (Soraka support, Aatrox, Dr. Mundo): Grievous Wounds corta a cura pela metade"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra burst/assassin comps (Zed, Talon, Kha'Zix): a segunda vida deixa o Soulbound emendar depois do seu R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hard CC single-target (flecha da Ashe, Q da Morgana, hook do Blitzcrank): bloqueia uma habilidade, o hop reset sobrevive"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Acumule 6+ stacks de Rend no alvo prioritário no teamfight, depois Q reset no segundo alvo. Com Wit's End e Blade of The Ruined King online, você bate os outros marksmen em trocas longas."
  weakness: "Você escala com o seu support: um Soulbound que não trava alvos te deixa sem engage. Hook supports (Blitzcrank, Thresh) puxam o seu parceiro pra fora do alcance do hop e o fight acaba antes do R subir."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision com Press the Attack: três hops no mesmo alvo proccam PtA pra +12% de dano bônus enquanto Rend stacka rápido. Triumph premia o skirmish constante, Legend: Alacrity alimenta a curva on-hit de AS, Coup de Grace finaliza alvos abaixo de 40% HP."
    secondary_rationale: "Domination secundária: Taste of Blood dá sustain depois de cada trade curto na lane (as hop windows te deixam sair limpa), Relentless Hunter stacka em takedowns e adiciona o movement speed fora de combate que você precisa pra roamar mid com o Soulbound."
    secondary_alternative: "Contra lanes de poke pesado (Caitlyn + Lux, Varus + Brand) troque Domination por Resolve com Bone Plating (-30/-60 nos 3 primeiros golpes) e Second Wind (HP regen sobe abaixo de 50% HP) pra sobreviver até o nível 6."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "ADCs late-game imóveis sem dash"
      reason: "A única segurança deles é o posicionamento. Kalista hopa em todo basic attack, então tradeia em melee sem nunca parar — sem resposta a não ser Flash, e você stacka Rend mais rápido do que eles resetam o trade."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Marksmen estáticos dependentes do lockdown do support"
      reason: "Se o support deles engaja primeiro, seu R pra reposicionar e o on-hit mágico de Wit's End batem a curva de AS. Eles não conseguem kitar um campeão que fecha 350 unidades por basic attack."
    - examples: ["caitlyn"]
      archetype: "ADCs de artilharia long-range na lane phase"
      reason: "Caitlyn te poka nos níveis 1-3, mas o combo trap-and-net é um dash único em CD longo: assim que você tem boots e Wit's End, você anda em cima dela no nível 6."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Marksmen lane-bully com all-in forte níveis 1-3"
      reason: "O dano early deles supera o seu hop spacing (a distância segura saltando a cada basic attack) antes de você ter AS pra stackar Press the Attack. Um Q errado no nível 2 e eles pegam uma kill antes do support reagir."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports pickados contra o seu Soulbound"
      reason: "Se hookarem o seu support, o link Soulbound vira inútil: você não consegue R ele pra fora da linha do grab, e o engage acontece 800+ unidades fora da sua hop window."
    - examples: ["tristana", "vayne"]
      archetype: "Hypercarries móveis com self-peel"
      reason: "Tristana W sai do seu dive, Vayne tumble cancela o timer do stack de Press the Attack. As duas escalam pra itens que batem o seu core on-hit em 1v1 depois do minuto 25."
---

## Visão geral

Kalista é uma marksman skirmisher on-hit ("on-hit" = itens cujos efeitos disparam a cada basic attack, não pelas habilidades; "skirmisher" = champion que vence em trocas curtas e repetidas, não em um grande all-in) definida pelo **Martial Poise (P)** — cada basic attack e cada **Pierce (Q)** dão um pequeno hop durante o wind-up. Esse salto transforma os autos em mobility: ela anda em cima dos inimigos parados e desengaja de ameaças melee sem nunca parar de atirar. O preço é um early game frágil (AD baixo, sem shields) e um dos skill floors mais altos entre os marksmen: o hop precisa ser comandado com cliques de movimento frame a frame.

O game plan dela gira em torno dos stacks de **Rend (E)**. Cada basic attack crava uma lança no alvo; a ativação arranca todas pra dano crescente. Acumule 6-8 lanças em um tank, depois aperte E pra apagar o squishy (champion de muito dano e poucas defesas, típico dos ADCs) ao lado dele, e você fechou o teamfight. A mecânica Soulbound do **Sentinel (W)** liga ela à um aliado pelo jogo todo — geralmente o support — e **Fate's Call (R)** lança esse aliado como dash com knockback. Com um engage support tipo Thresh ou Leona, o R da Kalista transforma um flank Soulbound em um pick garantido (eliminar um inimigo isolado fora do teamfight). Com um poke support, ela escala pior e o R vira panic disengage no lugar de ferramenta de engage.

## Build recomendada

**Itens iniciais:** Doran's Blade + 1 Health Potion. Pule Doran's Shield mesmo contra lanes ranged — Kalista precisa do AD extra pra converter o hop spacing em kill threat.

**Itens core (em ordem):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — primeiro item: o seu spike de attack speed (AS), ou seja, o primeiro grande salto na velocidade de ataque. Adiciona dano mágico em cada basic attack, escala perfeito com a frequência do hop, e o magic resist conta contra combos AP support + AP mid.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed extra pros stacks de Press the Attack e pra aplicar Rend mais rápido.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — causa dano igual a uma porcentagem do HP máximo atual do alvo em cada basic attack, mais um active de slow. Fecha o trade em melee e é o melhor segundo item contra qualquer frontline (os tanks/bruisers que abrem o teamfight).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — os bolts aplicam Rend em dois alvos extras. É o que transforma o E da Kalista em spike AOE de teamfight (area of effect: dano que atinge mais de um alvo ao mesmo tempo).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quinto item: AD mais o shield de lifesteal pras trocas longas do late.

**Itens situacionais:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra tanks com 2500+ HP (Sion, Ornn, Cho'Gath); o armor pen escala com a vantagem de HP que eles têm sobre você.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps de healing pesado (Soraka support, Aatrox, Dr. Mundo). Grievous Wounds corta a cura pela metade.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra burst/assassin comps (Zed, Talon, Kha'Zix); a segunda vida dá tempo do Soulbound emendar depois do R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC single-target (CC = crowd control: stuns, roots, knock-ups que prendem você no lugar). Bloqueia uma flecha da Ashe ou um hook do Blitzcrank, o hop reset sobrevive.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** padrão. Troque pra ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** se o time inimigo tiver 4+ slows que você não consegue desviar com o hop.

**Skill order:** Maxe **Q** primeiro (dano principal + mecânica de transferência do Rend), **E** segundo, **W** por último. Ponto em **R** nos níveis 6, 11 e 16. Comece com **Q** no nível 1 pra ter poke confiável em fights de invade.

**Runes:** Primária **Precision** com **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Domination** com **Taste of Blood** e **Relentless Hunter**. Contra lanes de poke pesado (Caitlyn + Lux, Varus + Brand) troque Domination por Resolve com **Bone Plating** e **Second Wind** pra sobreviver até o nível 6.

## Matchups principais

- **Aphelios:** Kalista ganha pós-6 se acertar o hop spacing. Os damage spikes do Aphelios variam por arma, então só step-up quando a off-hand dele for Severum (lifesteal) ou Crescendum (turret) — as duas são curto alcance e você anda em cima.
- **Caitlyn:** Lane perdedora níveis 1-5: as traps e os 650 de auto-range punem a sua necessidade de andar pra frente pra stackar Rend. Pegue **Bone Plating** secundária, peça pro support tankar uma trap, depois mire no nível 6 com **R** + gank do jungle.
- **Draven:** Lane bully. Evite trades enquanto o **Spinning Axe** dele estiver up; o auto-reset dele encadeia o seu hop em uma kill garantida se você ficar parado. Stacke um Rend por basic em minion, segure o E pra quando ele acertar uma Q, depois re-engaje quando o machado cair.
- **Jinx:** Igual pré-6, você escala melhor pós-6. O hop da Kalista countera o slow do **W** da Jinx porque o dash começa antes do projétil cair. Depois do nível 9 você all-in qualquer wave que a Jinx for forçada a clearear.
- **Vayne:** Matchup de scaling perdido depois do minuto 25. Mate ela nos dois primeiros itens — Wit's End online antes dela fechar Kraken Slayer é a única janela em que Kalista vence em 1v1 puro.

## Power spikes e condições de vitória

- **Nível 2:** Com **Q** e um ponto em **E**, você tem um trade pattern confiável: AA, AA, E pra dano stack. A maioria das lanes perde essa troca.
- **Nível 6:** O primeiro **Fate's Call** desbloqueia o flank Soulbound (entrar no fight por um lado que os inimigos não estão olhando): posicione seu support em um side-bush, R nele em cima do support inimigo, e emende com o seu Rend stackado.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End completo (~minuto 11-13):** Sua curva de AS decola. Você anda em cima da maioria dos marksmen nos níveis 6-9 e vira a líder de DPS de basic attack do bot side.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King online (~minuto 18-21):** % HP máximo on-hit destrói frontlines. Force um drake ou Rift Herald aqui — o seu E stackado no tank apaga o ADC inimigo do lado.

## Erros comuns

- **Castar Rend com 1-2 stacks por chip damage.** Rend escala forte com o número de stacks: spammar E cedo esvazia a pilha antes do kill threshold. Segure o E até ter 5+ stacks no alvo prioritário, ou até a kill estar garantida (E reembolsa CD em kill, então um cast de finisher reseta o ciclo).
- **Esquecer que o hop é um comando de movimento.** Iniciantes na Kalista atacam e ficam parados. O hop só ativa se você clicar uma direção de movimento durante o frame do wind-up. Treine clique e ataque alternados em custom games antes de entrar na lane.
- **Usar R como engage ofensivo com poke support (Karma, Lulu).** Os kits deles não têm follow-up CC depois do knockback. Guarde o R como panic save: stasis no support pra desviar de uma flecha da Ashe ou hook do Blitzcrank, depois desengaje.
- **Pular Wit's End contra comps full AD.** Mesmo assim, Wit's End é o seu spike de AS mais rápido e o dano mágico aplica independente do armor. Compre primeiro; itens de AD pen vão no slot 4 ou 5.
- **Ficar no fight com 0 hop disponível.** O hop está em todo basic attack, mas se nenhum inimigo tá no alcance de ataque, sobra andar. Cuide quando os alvos atacáveis acabam e back off — Kalista sem hop é um marksman a 580 MS sem dash, mobility menor que a da Caitlyn.

## Dica avançada

Treine o **Q reset em minion pra escapar pelo jungle**. Quando você fizer um wall jump perto do river ou tri-bush, queue uma **Q (Pierce)** na onda de minions atrás do muro: se a lança matar o minion, ela continua e te deixa hopar o muro no mesmo frame. O truque te tira de um gank que cortou o seu caminho do river, porque o frame do hop conta como movimento e bypassa a hitbox da parede. Bind uma **Q** quick-cast pra reduzir o tempo de reação.
