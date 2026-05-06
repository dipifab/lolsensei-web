---
title: "Camille Top Build & Guia — Patch 16.9"
slug: "camille-top"
language: "pt-br"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Guia da Camille top no Patch 16.9: itens iniciais, build de fighter, matchups principais, power spikes, erros comuns e uma dica avançada de fechamento."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Auto-attacks em campeões geram um escudo igual a uma porcentagem do HP máximo da Camille, ajustado ao tipo de dano do alvo (físico ou mágico)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Auto-attack potencializado com dano bônus e move speed. Recaste em poucos segundos para um segundo golpe; esperar entre os casts aumenta o dano e adiciona true damage."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Cone frontal após um delay curto. A metade externa aplica slow, dano extra e cura a Camille com base no HP que falta."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Lança em uma parede e salta knockando para cima os campeões no ponto de pouso. Principal ferramenta de engage e disengage — precisa de uma parede no alcance."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Salta sobre um campeão alvo e o prende numa arena circular. Aliados e alvo não podem entrar/sair; auto-attacks no alvo causam dano mágico bônus."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "primeiro item em matchups duelist (Fiora, Jax, Irelia): o reset Spellblade sustenta Q1-AA-Q2 melhor que Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst mágico forte (Vladimir, Rumble, Cassiopeia): escudo mágico abaixo de 50% HP salva a primeira rotação de CD"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra times empilhando armor (frontline com Plated Steelcaps + Randuin's): armor shred amplifica o dano do time também"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando à frente e fazendo splitpush em side lane (push solo para forçar resposta): tower shred e HP bônus quando isolada"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap de botas contra AP pesado ou 3+ fontes de hard CC (stuns, roots, taunts que cortam E em voo ou windup do W)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra um AD assassin alimentado (Zed, Talon, Kha'Zix) em snowball: a segunda vida deixa fechar a combo R mesmo morrendo"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage de uma parede com E, prende o carry prioritário no R e bursta com Q1-AA-W-Q2 antes do peel chegar. Em side lane vença os 1v1 com Q resets e o W heal."
  weakness: "Lanes abertas sem paredes neutralizam o E. O cooldown longo do R deixa janelas grandes em que ela é só uma auto-attacker resistente. Hard CC corta o E em voo e o windup do W."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primária: Conqueror stacka rápido em W-Q1-AA-Q2 e premia os fights longos que a Camille força com R. Triumph devolve HP em takedowns, Legend: Alacrity acelera Q resets e autos do R, Coup de Grace casa com o true damage atrasado do Q2 abaixo de 40% HP."
    secondary_rationale: "Resolve secundária: Bone Plating amortece os all-ins early de Darius / Renekton / Pantheon, Overgrowth escala o pool de HP sobre o qual o escudo da passiva é calculado."
    secondary_alternative: "Contra top ranged poke (Quinn, Teemo, Vayne, Gnar) troque Resolve por Inspiration com Magical Footwear (botas grátis perto do minuto 12) e Cosmic Insight (mais Flash e R uptime para committar em cada janela de cooldown)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Bruisers melee imóveis"
      reason: "E + R os trancam em melee sem resposta. Q resets e o slow do W deixam a Camille kitar (andar para trás atacando) dentro do R esperando os stacks ou cooldowns deles expirarem."
    - examples: ["vladimir", "rumble"]
      archetype: "Mages squishies jogados no top"
      reason: "Uma vez que o R cai, eles não conseguem pool, dashar nem sair da arena. O true damage do Q2 quebra eles além do shield e do heal sustain."
    - examples: ["sion", "chogath"]
      archetype: "Tanks de scaling tardio"
      reason: "O true damage do Q2 e o burst do Sundered Sky chunkam pools de HP enormes. R impede que voltem para o time pegar peel durante uma briga em side lane."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Tops ranged com ferramentas de kite"
      reason: "Pokeam (dano cirúrgico à distância) sem se comprometer enquanto a Camille não tem resposta no alcance. O E busca uma parede que eles podem simplesmente abandonar andando."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Tanks de frontline com hard CC"
      reason: "O crowd control deles corta o E em voo, o windup do W e o dash de lock-on do R. A Camille perde todo all-in (commit total até a kill) em que o stun cai primeiro."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Melees com all-in early forte"
      reason: "Bursta (concentra dano em 1-2 segundos) mais rápido do que a Camille setup E + W e batem o trade pattern dela antes do nível 3."
---

## Visão geral

Camille é um fighter / diver melee (champion que mergulha na backline inimiga para matar um alvo prioritário): ela dasha de paredes para travar um único carry (o alvo de alto dano da backline — geralmente o ADC, o marksman da bot lane, ou o mid-laner) e transforma o fight em um 1v1 dentro do ring do **R** dela. O kit recompensa trades prolongados (trocas de dano que se estendem) porque o **Q** é um auto-attack potencializado de dois casts (também escrito **AA**) com true damage atrasado (dano que ignora armor e magic resist), o **W** cura quando a metade externa atinge um campeão, e a passiva gera um escudo que reduz dano recebido do tipo correspondente (físico ou mágico) a cada AA. O dano dela é majoritariamente físico (AD = Attack Damage), mas o **R** adiciona dano mágico bônus (escala com AP = Ability Power), por isso o damage_type é mixed.

O game plan em uma frase: espere o **R**, vá para uma side lane ou para o bush do river, dasha de uma parede no priority target e bursta com **Q1 → AA → W (metade externa) → Q2** enquanto o resto do fight fica trancado fora da arena. Sem o R, ela farma seguro atrás dos minions e evita lanes abertas onde o **E** não tem parede para grudar.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Troque Doran's Blade por ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (mais HP e bloqueio de dano recebido, sem AD) só em matchups ranged poke (Quinn, Teemo, Vayne).

**Itens core (na ordem):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — rush de primeiro item. O active dash + slow encadeia com a metade externa do **W** e dá a waveclear que falta no kit base da Camille.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra lanes AD-heavy (muitos campeões de dano físico) e jungle AD. A redução de dano de auto-attack é crítica porque a maioria das ameaças à Camille são bruisers físicos (fighters mid-range com HP alto e dano sustentado).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst spike. O primeiro auto em um campeão crita e cura; casa com **Q1** para abrir todo all-in (commit total até a kill).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de sobrevivência. Tenacity (duração reduzida em stuns, slows e outros crowd control = CC) mais um escudo que dispara em HP baixo — a Camille costuma divear a backline (saltar nos inimigos que estão peelando = protegendo o carry deles).
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — anti-burst (pacotes de dano comprimidos em 1-2 segundos). O bleed (dano pós-hit espalhado em vários segundos) te dá tempo de reagir em vez de tomar one-shot.

**Itens situacionais:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap como primeiro item em matchups duelist (Fiora, Jax, Irelia). Spellblade (passiva: depois de castar uma habilidade, seu próximo auto-attack causa dano bônus e reseta o timer do AA) sustenta um trade **Q1 → AA → Q2** melhor que Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst mágico pesado (Vladimir, Rumble, Cassiopeia, Kayle AP).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra time inimigo empilhando armor (vários campeões compram itens de armor como Plated Steelcaps e Randuin's; "stack" = acumular a mesma stat em vários itens). Armor shred = cada hit remove um pedaço de armor do alvo por alguns segundos, então o dano físico do seu time bate mais.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando à frente e fazendo splitpush (empurrar uma side lane sozinha para forçar o inimigo a responder). Tower shred = dano bônus em torres; o item também dá stats maiores quando você está sem aliados perto.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap de botas contra AP pesado ou 3+ fontes de hard CC.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra um AD assassin alimentado (Zed, Talon, Kha'Zix) em snowball (vantagem inicial que cresce kill após kill).

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra AP pesado / CC.

**Skill order:** Maxe **Q** primeiro (cada nível = mais dano, CD = cooldown mais curto), **E** segundo, **W** por último. **R** nos níveis 6, 11, 16. Níveis 1-3: **W → E → Q** — sustain primeiro, depois engage, depois esteroide de dano. "Q reset" abaixo = **Q1 → AA → Q2 → AA**: cada cast do Q reseta o timer do AA, então você dispara um auto extra logo em seguida.

**Runas:** Primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Resolve** com **Bone Plating** e **Overgrowth**. Stat shards (os três pequenos bônus de stat no rodapé da página de runas): Attack Speed, Adaptive Force, Health Scaling.

## Matchups principais

- **Darius:** Tanke o HP early (absorva o dano e mantenha a paridade de CS). Ele te outduela (vence o 1v1) num trade direto pré-3 — espere o nível 3 com o **Q** pronto. Quando ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** estiver online, dance com o slow do **W** + **Q** resets (a passiva Hemorrhage dele acumula bleed em você até 5; matá-lo reseta os stacks da ult dele, então não dê kill).
- **Fiora:** Mirror duelist matchup. Faça trade em linha reta para que ela não rotacione em volta de você buscando o Vital perpendicular (a passiva dela marca um dos seus lados — bater nesse lado causa true damage e cura ela). No nível 6 o **R** dela e o seu **R** se cancelam — o positioning decide quem engaga primeiro.
- **Renekton:** Perde a lane pré-3 e perde de novo no spike dele de nível 2 (W + Q). Segure o **E** para o all-in dele. No nível 6 o poder vira se ele não snowballou: seu **R** o arrasta para fora do alcance em que ele constrói Fury (o recurso rage dele).
- **Jax:** Matchup ruim pós-6. O E dele faz counter-strike no seu **Q2** e no windup do **W** (o delay curto antes da habilidade pousar, durante o qual ela pode ser cancelada). Compre ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** primeiro, nunca **E** em melee a não ser quando o counter strike dele estiver em cooldown.
- **Quinn / Teemo:** Tops ranged. Você perde a lane brutalmente no early. Comece com ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** em vez de ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freeze a wave (deixe os minions inimigos serem mais que os seus para a wave ficar parada perto da sua torre) e nunca pushe sem **Q + E** disponíveis. Espere ganks (jungler chega na lane para fazer 2v1) para chipar as plates inimigas (os 5 pedaços bônus de gold colados nas torres externas nos primeiros 14 minutos).

## Power spikes e condições de vitória

- **Nível 2 (W + E):** Primeira janela de all-in. Slow do **W** → **AA** → knock-up (stun aéreo curto na aterrissagem) do **E** monta um trade completo com a passiva ativa duas vezes.
- **Nível 6 (R):** Seu engage fica incontestável por uma rotação de cooldown. Combine **E** de uma parede com **R** para travar qualquer um em melee; avise seu jungler antes do fight para ele entrar no ring.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker finalizado (~ minuto 13-14):** Waveclear desbloqueada. Seu trade pattern fica consistente: active slow → metade externa do **W** → **Q1** → **AA** → **Q2** chunka cerca de metade da barra de HP deles.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky finalizado (~ minuto 20-24):** O heal-on-first-hit te deixa committar muito mais agressivamente em skirmishes na side lane (brigas pequenas de 1v1 ou 2v2). Esse é o spike em que você começa a fazer splitpush por objetivos.

## Erros comuns

- **Gastar o E para poke (chip damage à distância) na lane.** O **E** é seu único escape se o jungler inimigo gankar. Use para commits de engage ou para sair de um gank, não para 50 de chip damage. Sem **E**, uma Camille sem Flash morre em qualquer 2-man dive (tentativa de kill coordenada embaixo da sua torre).
- **Ficar na frente do cone do W.** A metade interna faz dano fraco e nada de slow / heal — o payoff inteiro está na metade externa. Reposicione no meio do cast para o inimigo ficar no ring externo, não colado em você.
- **Engagar sem R quando o alvo tem hard CC up.** O **R** é sua ferramenta "no Flash escape" — uma vez locked, o alvo não pode Flashar para fora do ring. Uma Camille sem **R** que diva um time peel-ready (aliados prontos para proteger o carry) morre em correntes de stun (CC atrás de CC sem brecha para reagir).
- **Soltar Q1 → Q2 colado.** Quanto mais você espera entre **Q1** e **Q2** (até ~2 segundos), maior o bonus damage e a porção de true damage do **Q2**. Encaixe um **AA** + **W** no meio — é dali que vem a maior parte do seu burst (dano frontload em 1-2 segundos).

## Dica avançada

Treine o redirect **Flash → E**: se não tem parede útil no alcance, use **Flash** (summoner spell em D ou F que blinka ~400 unidades) no meio do **E** para teleportar para uma parede e redirecionar o dash. Isso transforma a Camille de "precisa de parede" em "engaja em qualquer lugar" pelo custo de um summoner. A combo é mais útil em pits de objetivo (as arenas muradas em volta do Drake e Baron) e em fights abertos no meio do river onde as únicas paredes estão a 600+ unidades — Flash preenche a brecha para você ainda landar o knock-up (stun aéreo curto) do **E** no priority target.
