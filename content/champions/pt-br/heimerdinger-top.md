---
title: "Heimerdinger Top Build & Guia — Patch 16.9"
slug: "heimerdinger-top"
language: "pt-br"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Guia Heimerdinger top no Patch 16.9: build de muralha de torretas, combos UPGRADE, power spikes contra juggernauts melee e win conditions de splitpush."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Ganha velocidade de movimento bônus perto de torres aliadas ou das torretas do Heimerdinger. Recompensa passiva por lutar dentro do turret nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Coloca uma torreta (máx 3 ativas). As torretas acumulam carga e disparam um raio mais forte na carga máxima. As cargas resetam a cada cast de Q. Alcance 350, cooldown 1s, 20 mana."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Salva de mísseis de longo alcance (1325) que convergem no cursor. Hits extras causam dano reduzido. Cada míssil que acerta um campeão dá 20% de carga às torretas próximas."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lança uma granada (alcance 970) que aplica slow na zona de impacto e stun no centro. Acertar uma torreta enche a carga. Cooldown 11s fixo, 85 mana."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empodera a próxima habilidade não-ult. R+Q: mega-torreta (8s, imune a CC, splash AOE + slow). R+W: 4 ondas de mísseis. R+E: zona de stun maior + knockup central. Cooldown 100-70s."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e bruisers que furam o turret nest (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra tops com sustain (passiva do Darius, Nasus, Dr. Mundo) — corta a regen de HP"
    - dd_id: "3118"
      name: "Malignance"
      against: "contra comps tanky onde o uptime da mega-torreta R+Q é tudo — reduz cooldown do ult"
    - dd_id: "3135"
      name: "Void Staff"
      against: "quando o inimigo monta Magic Resist (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Sufoque os tops melee com a muralha de três torretas na lane, depois use a mega-torreta UPGRADE+Q para ancorar fights de baron e dragon. Aceite 1v1 só dentro do nest."
  weakness: "Bruisers e divers móveis com vários dashes derrubam o turret nest antes de ele dar dano. Sem escapes além de Flash e do bônus de velocidade da passiva."
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
    primary_rationale: "Arcane Comet procca em E (slow trava o alvo) e em W multi-hit. Scorch no lugar de Gathering Storm: Heimer top vence ou perde na lane, e Scorch adiciona dano real nos níveis 1-6 vs juggernauts. Transcendence reduz E e W para uptime contínuo de torreta."
    secondary_rationale: "Biscuit Delivery cobre o custo de mana dos Q repetidos no early e dá sustain de HP contra harass de auto-attack. Cosmic Insight reduz cooldowns de Flash e UPGRADE, multiplicando as janelas de mega-torreta."
    secondary_alternative: "Contra um top AD pesado (Darius, Renekton, Garen) troque Inspiration por Resolve secundário com Conditioning (armor e MR após o minuto 12) e Overgrowth (HP scaling). Trade-off: menos sustain no early, mais resistência em all-ins."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Juggernauts imóveis ou lentos que precisam atravessar a cobertura das torretas"
      reason: "Não têm dash nem blink para contornar o turret nest. Cada passo dentro do alcance ativa raios de torreta mais mísseis W, queimando HP antes de qualquer trade significativo."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Juggernauts melee de engage curto que não conseguem fechar a distância com segurança"
      reason: "O engage deles exige chegar em melee contra três torretas atirando ao mesmo tempo. O stun de E na zona de aproximação e a salva de W param o commit antes de ele alcançar o Heimerdinger."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Divers móveis com vários dashes que rasgam o turret nest"
      reason: "Eles dasham pela zona de torretas, resetam em minions e chegam no Heimerdinger antes do reposicionamento. Zhonya's Hourglass é obrigatório — use a stasis para gastar a janela de dash deles e forçar disengage."
    - examples: ["jayce", "quinn"]
      archetype: "Top laners de longo alcance que pokeam fora do alcance 970"
      reason: "Eles zonam o Heimerdinger da wave de uma distância onde E e W não acertam de forma confiável, forçando ele a comer poke grátis sempre que tenta colocar torreta ou dar last-hit."
---

## Visão geral

Heimerdinger top é um lane bully que transforma matchups contra melee em uma guerra de atrito sustentada. A identidade dele em top lane é diferente do mid: aqui o objetivo não é roamar, mas criar um **turret nest** impenetrável — uma zona coberta pelas três H-28 G Evolution Turret que obriga qualquer campeão melee a escolher entre comer dano mágico contínuo ou abrir mão do controle de wave (wave control: decidir se a linha de minions empurra para o seu lado ou para o lado inimigo). A passiva **Hextech Affinity** (bônus de velocidade de movimento perto de estruturas aliadas e das próprias torretas) recompensa quem luta dentro do nest em vez de kitar para fora. O termo kite designa o movimento para trás enquanto se causa dano, mantendo distância de um perseguidor.

O game plan é plantar torretas em frente à torre inimiga, pokar com **W** (Hextech Micro-Rockets) e **E** (CH-2 Electron Storm Grenade) para manter o adversário abaixo do limite de all-in (limite de all-in: nível de HP abaixo do qual o inimigo já não tem vida para vencer um commit total contra você), e então deployar a mega-torreta UPGRADE+Q no nível 6 para travar a lane por completo. A pressão de splitpush (splitpush: empurrar uma side lane sozinho enquanto o time pega objetivos em outro lugar) é a win condition macro: um turret nest na side lane é perigoso o suficiente para o inimigo ter que mandar duas pessoas para limpar, dando tempo ao resto do time de pegar objetivos.

## Build recomendada

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. A mana sustenta os Q repetidos nos níveis iniciais, onde cada torreta custa 20 mana e tem que ser substituída no instante em que é destruída.

**Core items (na ordem):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst e sustain de mana. A passiva ricocheteia dos ataques de torreta contra campeões e fortalece os trades de poke do W (poke trades: trocas curtas de longo alcance que tiram HP sem abrir um fight).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana para cortar as armor runes iniciais (armor runes: runas defensivas que alguns escolhem no terceiro shard para reduzir dano físico no early).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP mais bônus de velocidade de movimento ativado ao causar dano com spells. Permite kitar pela lane para reposicionar torretas sem perder o alcance de W.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, especialmente forte para finalizar inimigos abaixo de 40% HP com um raio de torreta carregado ou uma volée de W.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP no late game. Com quatro itens, raios de torreta e mísseis W escalam a um dano que justifica splitar uma side lane mesmo contra dois defensores.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — obrigatório contra divers móveis (divers: campeões que dasham pela zona das torretas para te matar em curta distância — Irelia, Camille, Fiora). A stasis gasta a janela de dash deles e deixa a mega-torreta dando dano enquanto você está invulnerável.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra tops com muito sustain (passiva do Darius, Nasus, Dr. Mundo). Grievous Wounds (debuff que reduz pela metade a cura recebida) aplicado pelos hits de torreta e do W trava o loop de regen de HP.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — contra composições tanky onde a mega-torreta UPGRADE+Q é a sua principal ferramenta de teamfight. Reduz o cooldown do R para a mega-torreta recarregar entre objetivos.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — entre quando qualquer priority target comprar um item de Magic Resist (Mercury's Treads, Force of Nature, Spirit Visage).

**Botas:** Sorcerer's Shoes é o padrão. Troque para ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity se estiver à frente e quiser mais casts de UPGRADE.

**Skill order:** Maxe Q primeiro pelo dano e pela velocidade de recarga das torretas. Maxe W em segundo para escalar a salva de mísseis. Maxe E por último — é principalmente utility (stun + carga), não fonte primária de dano. Suba R nos níveis 6, 11, 16.

**Runas:** Primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Contra um top AD pesado, troque Inspiration por **Resolve** com **Conditioning** e **Overgrowth**.

## Matchups principais

- **Nasus:** Juggernaut focado em farm e sem dash. Coloque as três torretas em linha diagonal entre ele e a wave no nível 1. Ele não consegue trocar dano sem atravessar os raios. Use E para stunar toda vez que ele tentar last-hit sob pressão e siga com W para reforçar. Respeite o W empoderado dele no nível 6 (reduz seu attack speed, mas as torretas deployadas não sofrem esse debuff — não se aplica a estruturas).
- **Darius:** Perigoso no nível 3 quando o Apprehend (E, o pull) entra em jogo. Não fique colado nas suas torretas sem minions bloqueando o ângulo do pull. Kite para trás enquanto ele se aproxima, centralize o stun de E para interromper o pull e dispare W em sequência. A passiva Hemorrhage (sangramento) dele para de aplicar quando você quebra o contato com movimento, então kitar é mais eficaz do que ficar parado para tradear.
- **Irelia:** Matchup duro. Ela reseta o dash (Ionian Fervor E) em minions e te alcança mesmo através de três torretas se planejar a rota. Mantenha Zhonya's Hourglass como terceiro item. No nível 6, use E para stunar na aproximação e logo em seguida UPGRADE+Q para soltar a mega-torreta; o slow AOE (area of effect — dano que cobre uma zona em vez de um único alvo) da mega-torreta prende ela no alcance dos raios completos.
- **Garen:** Matchup direto. Sem poke à distância e sem dash; a única escape dele é Perseverance (regen passiva de HP). Negue a janela de regen alternando o poke constantemente entre raios de torreta e mísseis W. Quando ele for last-hitar, jogue E para o stun central e siga com W para o ciclo completo de burst. O Judgment dele (E, o spin) causa dano em círculo: não fique colado quando ele ativa, mantenha o alcance de W.
- **Jayce:** A forma ranged dele (Shock Blast) ultrapassa o alcance de W (1050 contra 1325), mas na prática ele vai mudar para melee atrás dos autos empoderados. Quando ele commitar em forma melee, essa é a sua janela: zona de três torretas mais stun de E seguido de W. Se ele ficar em ranged a lane inteira, mantenha as torretas mais perto da sua torre e foque em igualar a push dele — não persiga ele em lane aberta.

## Power spikes e condições de vitória

- **Nível 1:** As três torretas ficam online no nível 3, mas mesmo uma torreta no nível 1 já tira HP do inimigo na primeira aproximação à wave. Coloque Q perto do limite do alcance de experiência para o inimigo ter que entrar no alcance da torreta para last-hitar.
- **Nível 6 (UPGRADE+Q):** A mega-torreta são 8 segundos de dano AOE imune a CC que nenhum melee pode ignorar. Solte ela no centro da lane para criar uma zona que o inimigo não consegue atravessar sem comer um ciclo completo de raio + slow. É a sua ferramenta de splitpush mais forte.
- **Cosmic Drive completo (em torno do minuto 14-16):** Com três itens (Luden's + Botas + Cosmic Drive), o dano de torreta começa a comer HP até de tanks. A velocidade de Cosmic Drive permite kitar e substituir torretas caídas sem perder posicionamento no fight.
- **Rabadon's Deathcap online (em torno do minuto 24-28):** Heimer no late tem torretas que pegam como ataque concentrado de carry. Force um fight de baron ou dragon com uma mega-torreta pré-posicionada na entrada do pit para o valor máximo.

## Erros comuns

- **Não manter três torretas o tempo todo.** Se uma torreta é destruída ou expira, substitua imediatamente. Setup com duas torretas dá 33% menos dano em área e deixa brechas. Coloque Q em uma tecla rápida e atualize automaticamente assim que entrar em alcance 350 de um slot vazio.
- **Usar UPGRADE+E (R+E) em vez de UPGRADE+Q (R+Q) contra juggernauts melee.** O knockup de R+E impressiona, mas a mega-torreta R+Q causa muito mais dano total ao longo de 8 segundos contra alvos lentos que não saem do raio. Guarde R+E para limpar waves de jungle ou punir mages que se sobreestendem — não como ferramenta primária contra tops melee.
- **Ficar parado dentro do alcance das torretas durante o all-in inimigo.** Torretas dão cobertura, não invulnerabilidade. Se o inimigo commita (vai all-in sem plano de fuga) com HP cheio e gap-close ativo, recuar enquanto as torretas dão dano é o correto; não fique parado esperando os procs do stun (o momento em que o stun da torreta dispara em um inimigo atingido).
- **Pular Zhonya's Hourglass em matchups com muitos dashes.** Contra Irelia, Camille ou Fiora, Zhonya's não é situacional — é core. Compre como terceiro item, antes de Shadowflame, sempre que o matchup pedir.
- **Sobreestender para colocar torretas na jungle inimiga.** Uma torreta no rio inimigo ou no tribrush (tribrush: o cluster de três bushes do rio perto do pit do Dragon ou do Baron — um chokepoint clássico de gank) dá visão forte, mas só se você tiver vantagem de velocidade para escapar de um aperto (in a pinch: quando você está em perigo imediato e precisa de uma solução instantânea). Estabeleça o nest com segurança primeiro e estenda a cobertura em direção aos objetivos quando tiver Cosmic Drive.

## Dica avançada

Ao usar UPGRADE+Q (mega-torreta), o ângulo de posicionamento determina a cobertura AOE. Solte a mega-torreta não em cima do inimigo, mas um passo atrás da posição atual dele, na linha de retirada. Enquanto ele recua da zona inicial, ele caminha para dentro do alcance do raio em vez de sair dele. Combinado com o stun de E na aproximação, isso força o inimigo a absorver dois ou três ciclos completos de raio (cada um com cerca de 1.5 segundo) antes de conseguir sair — quase a duração total dos 8 segundos da mega-torreta na velocidade reduzida do alvo.
