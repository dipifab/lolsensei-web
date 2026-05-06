---
title: "Jax Top Build & Guia — Patch 16.9"
slug: "jax-top"
language: "pt-br"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Guia do Jax top no Patch 16.9 de League of Legends: build bruiser de scaling, timing do Counter Strike, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Auto-attacks consecutivos aumentam progressivamente o Attack Speed do Jax. Os stacks resetam se você parar de atacar. Continue batendo depois de committar."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Dash direcionado em uma unidade ou ward. Se o alvo for inimigo, causa dano físico. Use wards para mobility extra: é a sua única fuga e o seu gap-closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Carrega o próximo auto-attack ou Leap Strike com dano mágico bônus e um slow curto. Custo baixo e cooldown curto: use em todo trade curto."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Stance defensiva: esquiva todos os auto-attacks recebidos por até 2 segundos e reduz dano AOE. Recast ou expirar atordoa todos os inimigos próximos. Skill central."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Passiva: a cada terceiro auto-attack causa dano mágico bônus. Ativa: burst AOE mais Armor e Magic Resist por alguns segundos. Sempre ative antes de lutar."
      dd_spell_id: "JaxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra adversários focados em auto-attack (Tryndamere, Yasuo, Kayle) — redução fixa de dano AA"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra CC pesado ou dano AP (Malphite R, Renekton stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "core alternativo contra lanes de poke — crit garantido + cura no primeiro auto contra um campeão"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra dois AD dealers fortes (Yasuo + Caitlyn): transforma o burst em sangramento lento (dano atrasado)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Chegue a dois itens e duele qualquer um na side lane. Atordoe com Counter Strike no engage, Empower no primeiro auto e deixe Relentless Assault stackar — splitpush para forçar resposta."
  weakness: "Pré-6 não tem janela real de all-in; tops ranged poke você fora da wave. Sem Counter Strike pronto não tem layer defensiva nem ameaça de kill."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "Tanks melee lentos sem dash"
      reason: "Counter Strike atordoa eles em cima de você e não têm como fazer disengage; Jax stacka Relentless Assault de boa enquanto eles absorvem, vencendo todo trade prolongado depois do nível 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Scalers melee de curto alcance sem AA cancel"
      reason: "O dano deles está preso a auto-attacks ou habilidades de curto alcance — Counter Strike esquiva os autos e o stun AOE na liberação neutraliza o windup deles."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Duelistas dependentes de auto-attack"
      reason: "Counter Strike come a fonte principal de dano deles por 2 segundos. Com Plated Steelcaps o matchup pende ainda mais — eles não conseguem trocar parelho contra a sua stance."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Tops ranged com ferramentas de kite"
      reason: "Pokeam fora do alcance de 700 do Leap Strike e recuam quando Counter Strike volta. Jax não tem sustain pré-6, então a lane sangra sem nunca chegar em alcance de all-in."
    - examples: ["fiora", "camille"]
      archetype: "Duelistas com true damage e cleanse / cadeias de dash"
      reason: "O Riposte da Fiora apara o stun do Counter Strike; o E hookshot da Camille deixa ela committar e desengajar no próprio ritmo. Os dois ganham o 1v1 pós-6 com itens equivalentes."
    - examples: ["malphite", "rumble"]
      archetype: "Hard counter mágicos contra bruisers melee (na frente)"
      reason: "Malphite contra Jax inverte com os itens dele: pré-Frostfire Gauntlet ele perde, pós-segundo item o stack de armor e a R lock-on fecham a janela de all-in do Jax."
---

## Visão geral

Jax é um fighter melee e duelista cuja identidade inteira é "scalar até virar um deus de 1v1". Pré-6 ele não tem pressão de kill: os trades dependem de acertar **Counter Strike (E)** para esquivar os auto-attacks do inimigo e responder com **Empower (W)** stackando autos de **Relentless Assault (Passiva)**. Do nível 6 em diante, **Grandmaster's Might (R)** vira ele em um bruiser bursty capaz de solo killar quase qualquer top melee na side lane — mas só se chegar inteiro a dois itens.

O plano de jogo é paciente e atento à lane. Last-hit em segurança até o nível 6, procure uma janela de all-in (uma luta de full commit em que você não recua até alguém morrer) quando **Q-E-W-R** estiver alinhado, e passe para o splitpush (empurrar sozinho uma side lane para forçar o inimigo a responder) assim que **Blade of The Ruined King** estiver online. Em teamfight você é um flanker que chega via **Leap Strike** numa ward que você plantou segundos antes — não uma frontline que entra de cara.

## Build recomendada

**Itens iniciais:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. O regen do escudo no dano sofrido é a resposta mais barata ao poke inicial. Pule Doran's Blade a não ser que esteja num matchup melee em que queira ativamente fazer all-in no nível 2.

**Itens core (na ordem):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — seu primeiro power spike. O dano on-hit escala com o HP do inimigo, perfeito contra bruisers e tanks no top, e o slow ativo deixa você grudar em quem tenta te kitear (recuar enquanto ataca para manter distância).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — o segundo item que transforma Jax em duelista. Os procs do Sheen (dano extra no auto depois de uma magia) encadeiam com **Q** e **W**, e o movement speed on-hit deixa você perseguir através de paredes.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — camada de sobrevivência. O escudo dispara quando você cai abaixo de ~40% de HP (HP-threshold passive — passiva que ativa quando seu HP cruza um limiar baixo), te dando os segundos que você precisa para stackar **Relentless Assault** e virar a luta.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — quarto item contra dano AP; Magic Resist mais dano mágico on-hit que escala com seu attack speed já alto.

**Itens situacionais:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — core alternativo contra lanes pesadas de poke; o crit garantido e a cura no primeiro auto contra um campeão dão a você o sustain (regeneração em luta) que Jax não tem de outra forma.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra times com dois AD dealers fortes (ex. Yasuo + Caitlyn). Transforma o burst físico em sangramento lento (dano espalhado nos próximos segundos em vez de instantâneo) para você stackar Relentless Assault antes de morrer.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas contra lanes pesadas de auto-attack (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — botas contra CC pesado ou burst AP (Malphite R, Rumble, Renekton stun).

**Botas:** Padrão é **Plated Steelcaps** contra tops auto-attack; troque por **Mercury's Treads** se o time inimigo tiver 2+ fontes de hard CC ou dano AP forte.

**Ordem de skill:** Maxe **E** (Counter Strike) primeiro — a janela de dodge escala com o rank e o cooldown cai de 17 para 9 segundos. **Q** (Leap Strike) em segundo para waveclear e gap-close, **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Árvore primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stacka rápido em Jax porque os auto-attacks encadeados de Relentless Assault contam individualmente. Secundária **Resolve** com **Bone Plating** e **Revitalize** para sobreviver aos trades iniciais.

## Matchups principais

- **Darius:** Igual pré-6, escala para favorável. Segura **Counter Strike** para o anel externo do **Q** dele (o anel que cura ele). Se acertar a zona de cura você perde o trade; se errar, você atordoa e sai com um auto bônus de **W**.
- **Camille:** Lane desfavorável. O **E** hookshot dela esquiva o timing do seu stun e o **W** lifesteal sustenta através do Relentless Assault. Freezing da wave perto da sua torre (segurar a wave do seu lado para negar last-hits dela) e espera ajuda do jungler.
- **Malphite:** Igual no early, desfavorável pós-6 se ele fechar Frostfire / Sunfire. Tente um all-in no nível 3 antes dele ter dois itens; quando ele stacka Armor seu dano mágico de **W** e **R** importa mais que os autos físicos.
- **Teemo:** Desfavorável, counter ranged top clássico. Compre ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** primeiro item, comece com ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** e farme sob torre até ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** ficar online. Procure kill só quando o jungler inimigo estiver no bot.
- **Renekton:** Desfavorável níveis 1-5, igual a partir do 6. Ele te out-trada com o sustain do **Q** e o stun do **W** antes de você chegar ao spike de **R**. Jogue passivo, solte **E** quando ele committar **W**, e freezing (segurar a wave do seu lado para negar last-hits) da wave perto da torre.

## Power spikes e condições de vitória

- **Nível 3:** Primeira janela de trade curto. Com **E + W + Q** desbloqueados, você esquiva dois autos inimigos com **E**, responde com **Empower + Q** e sai positivo. Não estenda além de 3 autos — seu stun fica em cooldown.
- **Nível 6:** **Grandmaster's Might** desbloqueia. O ativo de Armor + MR torna favoráveis os all-ins de curta distância. Sempre cast **R** antes de committar, nunca como finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completo (~ minuto 11-13):** Primeiro spike de duelo. Você pode fazer splitpush (empurrar uma side lane sozinho para forçar o inimigo a responder) e matar qualquer top melee que te desafiar 1v1 sem ajuda do jungler.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ minuto 19-22):** Spike de dois itens. Os procs de Sheen passam por toda magia e você finalmente tem o burst para one-shot squishies em flanco.

## Erros comuns

- **Jogar Counter Strike em cooldown para waveclear.** **E** é a sua única camada defensiva — queimar em minion deixa você aberto a um gank sem fuga e sem stun. Use só quando pretende tradear ou quando um gank é iminente.
- **Esquecer de recastar o E para o stun.** **Counter Strike** tem DOIS casts: o primeiro entra na stance de dodge, o segundo libera o stun AOE. Jax novato deixa expirar sozinho; o recast manual deixa você timar o stun no frame exato em que o inimigo committa.
- **All-in pré-6 contra bruisers.** Jax não tem pressão de kill antes da **R**. Tentar lutar Darius ou Renekton no nível 4 termina com você dando first blood. Stacka XP passivo, freezing se está perdendo, espera a **R**.
- **Splitpush sem TP e sem visão.** Assim que **Blade of The Ruined King** ficar online você quer splitpush, mas se o time inimigo rotacionar com 4 e você não tiver Teleport (summoner spell que te transporta para a base ou para um aliado) pronto, seu time perde o 4v4. Sempre cheque os recall timers do seu time antes de committar a uma side lane.
- **Leap Strike no inimigo ao fugir.** **Q** pode mirar wards e minions. Se está fugindo, Q no minion da retaguarda ou na sua trinket ward, nunca no inimigo perseguindo — isso só te teleporta de volta para ele.

## Dica avançada

Use **Counter Strike** durante um dash para timar o stun no frame de commit do inimigo em vez de deixar expirar sozinho. O truque: cast **E**, ande em direção ao inimigo, espere ele jogar a skillshot principal ou um dash (Renekton **W**, Darius **W**, Camille **E**), e recast **E** no instante em que ele está travado em animação. O stun pega ele no meio do cast e te dá uma janela garantida de 2 segundos para stackar Relentless Assault sem resposta. Treine isso no Practice Tool contra um target dummy com auto-attacks ligados — você sente o ritmo em dez repetições.
