---
title: "Heimerdinger Mid Build & Guia — Patch 16.9"
slug: "heimerdinger-mid"
language: "pt-br"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Guia Heimerdinger mid Patch 16.9: build ideal, página de runas, posicionamento de torretas, matchups, power spikes e dicas avançadas para dominar a lane."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
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
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos e divers (Zed, Akali, Diana) — a stasis dá tempo às torretas reagirem"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com muita cura (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "quando um alvo prioritário compra um item de Magic Resist"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Monte o ninho de torretas, stuna com E, derrete com W. No nível 6, expulse o oponente com a mega-torreta R+Q — uma zona de morte inamovível."
  weakness: "Sem mobilidade e alcance de implantação curtíssimo (350). Assassinos móveis fecham distância antes do tiro; torretas morrem instantaneamente para AOE waveclear."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet proca no E (o slow ancora o alvo) e no W, somando burst ao DPS das torretas. Manaflow Band evita ficar sem mana ao reposicionar torretas. Transcendence reduz E e W. Gathering Storm escala AP em partidas longas."
    secondary_rationale: "Biscuit Delivery sustenta os níveis iniciais que comem mana e Cosmic Insight reduz todos os cooldowns, incluindo UPGRADE!!! — rotações R+Q mais frequentes definem o mid game."
    secondary_alternative: "Contra lanes de muito poke (Xerath, Vel'Koz) troque Inspiration por Resolve com Second Wind (regenera HP após dano) e Bone Plating (reduz burst de combos multi-hit) para sobreviver mais na lane."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Mages imóveis sem dash"
      reason: "Não conseguem caminhar para dentro de um ninho de três torretas sem tomar DPS contínuo. O burst deles exige aproximação, e o stun de E mais o feixe da torreta punem o avanço antes que possam revidar."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Mages corpo a corpo ou tanks que precisam entrar no raio das torretas"
      reason: "O engage é de curto alcance. Três torretas posicionadas tornam a entrada letal — um feixe carregado os atinge antes que a animação de engage termine."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillery de longo alcance que pokeiam fora do raio das torretas"
      reason: "As torretas só cobrem um raio em torno do Heimerdinger. Mages artillery ficam a 1000+ de alcance, fora do ninho, e o desgastam até zero sem nunca entrar na zona dele."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Assassinos móveis que fecham distância antes das torretas reagirem"
      reason: "As torretas têm um ciclo de ataque lento. Um assassino com triplo dash entra no ninho e mata o Heimerdinger antes do primeiro feixe; o cooldown é curto demais para salvá-lo."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Roamers globais que ignoram o ninho por completo"
      reason: "Heimerdinger não consegue rotar — mover as torretas exige três investimentos de Q. O oponente coleta kills grátis nas side lanes enquanto Heimerdinger otimiza um ninho que nunca é disputado."
---

## Visão geral

Heimerdinger é um mage de zone control que vence a lane tornando-a inabitável para o adversário. As **H-28 G Evolution Turrets (Q)** — até três ativas ao mesmo tempo — criam um campo de dano persistente que pune qualquer inimigo que entre no alcance corpo a corpo ou de cast. Em carga máxima, cada torreta dispara um feixe potente; a **CH-2 Electron Storm Grenade (E)** stuna ou lentifica inimigos nessa zona, e os **Hextech Micro-Rockets (W)** desgastam alvos até 1325 de alcance. O resultado é um campeão cuja força depende inteiramente do posicionamento: com o ninho de torretas montado, é quase impossível matá-lo numa troca direta; sem ele, é um dos campeões mais vulneráveis do jogo.

O **UPGRADE!!! (R)** muda a equação completamente. Apertar **R+Q** posiciona uma mega-torreta aprimorada — causa dano AOE em splash, aplica slow e dura 8 segundos independentemente de novos casts de **Q**. Pense nela como uma máquina autônoma de negação de zona. O game plan no mid é construir e manter o ninho até o nível 6, então usar **R+Q** para forçar o oponente para fora da torre tier-1 dele e snowball (construir uma vantagem precoce que se acumula progressivamente) rumo ao mid game.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. O mana é crítico: cada torreta custa 20 de mana e você vai recolocá-las o tempo todo.

**Core items (em ordem):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst no primeiro item, regen de mana para reposição de torretas e magic penetration (a capacidade de ignorar parte da resistência mágica do inimigo) que dá peso ao poke do W.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetração mágica plana para punir squishies que entram no raio das torretas.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — amplifica o burst quando o inimigo está abaixo de um limite de HP, casando com follow-ups de R+E em W.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — reduz o cooldown de **UPGRADE!!!** e aumenta o AP enquanto a ulti está ativa; rotações mais frequentes da mega-torreta definem o mid game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP no late game; cada feixe de torreta e cada foguete vira uma ameaça por si só.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos e divers (Zed, Akali, Diana). A stasis (um breve estado de invulnerabilidade congelada) deixa as torretas absorverem o burst enquanto você espera os cooldowns deles passarem.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps com muita cura (Vladimir, Sylas). Aplica Grievous Wounds (um debuff que reduz a cura em 40%) através dos tiros de torreta.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um alvo prioritário (alvo prioritário = o campeão inimigo cuja morte mais ameaça seu time, normalmente o carry alimentado) compra um item de Magic Resist; substitui Rabadon's se o time inimigo inteiro empilhar MR.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity são aceitáveis quando você precisa de mais cooldown reduction para ciclar **UPGRADE!!!** mais rápido.

**Ordem de habilidades:** Maxe **Q** primeiro (fonte principal de dano e força das torretas), **W** em segundo (poke e carga das torretas), **E** por último. Pegue **R** nos níveis 6, 11, 16.

**Runas:** Primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**.

## Matchups principais

- **Syndra:** Ela arremessa esferas a distância, mas precisa castar de uma posição fixa. Posicione três torretas embaixo da sua torre tier-1, mantenha a wave slow-pushed (deixe os minions acumularem no centro da lane para que a próxima onda chegue maior) e use **E** para interromper a coleta das esferas. No nível 6 você ganha o all-in (comprometer-se totalmente em uma luta esperando matar o oponente) com **R+Q** no terreno disputado.
- **Zed:** O matchup mais difícil do pool. Ele vai dashar pelas suas torretas antes de elas atirarem. Respeite o poder dele no nível 3 e 6; compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass como segundo item. Quando ele usar **Death Mark (R)**, ative a stasis imediatamente — as torretas terão três segundos para atirar.
- **Orianna:** Matchup de poke equilibrado. Ela pode empurrar suas torretas com **Command: Shockwave (R)** em teamfights. Na lane, posicione torretas no lado da wave por onde ela precisa se aproximar. Evite agrupar perto do seu ninho quando a bola dela está por perto.
- **Twisted Fate:** Ele vai ignorar o ninho e rotar. Empurre a wave para baixo da torre dele antes que saia, warde o rio, e busque um **R+E** (knockup) em **W** se ele teleportar de volta. Você não consegue parar o macro game (a estratégia geral do mapa) dele, mas dá para punir a torre da base.
- **Viktor:** Mage imóvel que precisa ficar parado para causar dano. Um ninho de três torretas força o **Death Ray (E)** dele enquanto você poke com **W** atrás do cluster. Pós-6, a mega-torreta **R+Q** o expulsa da wave por completo ou queima o Flash dele.

## Power spikes e condições de vitória

- **Nível 1:** Posicione duas torretas na onda de minions antes do primeiro canhão. Oponentes que entram no alcance de auto-ataque levam um DPS (Damage Per Second — dano sustentado por segundo das torretas) surpreendente e recuam — você tem first push (vantagem de wave: seus minions empurram para a torre deles, então você pode sair da lane para contestar Drake ou ajudar mid) sem gastar mana com poke.
- **Nível 6:** **UPGRADE!!!** desbloqueado. A mega-torreta **R+Q** dura 8 segundos e é imune a CC (stun, slow ou qualquer crowd control); transforma a zona inteira do Heimerdinger numa armadilha mortal. Force uma luta ou uma troca de torre imediatamente.
- **Luden's Echo finalizado (em torno do minuto 11-13):** O poke do W agora crita (golpe crítico: ataque amplificado aleatoriamente que causa 175% de dano) squishies por um dano relevante. Combine com E + W para confirmar kills através do ninho.
- **Malignance online (em torno do minuto 18-20):** O cooldown do **UPGRADE!!!** cai para perto de 60 segundos com CDR alta (cooldown reduction — a stat que reduz o tempo entre usos de habilidade). Você consegue posicionar uma mega-torreta a cada luta de rotação, ou seja, em quase todo spawn de objetivo (objective spawns = aparição de Baron Nashor ou Drake no mapa, geralmente a cada 5-6 minutos).

## Erros comuns

- **Posicionar as torretas em linha reta.** Coloque-as em triângulo ou no caminho que o inimigo precisa percorrer para se aproximar. Uma linha de três torretas só dispara quando o inimigo avança em linha reta — um triângulo dispara de múltiplos ângulos e é muito mais difícil de esquivar.
- **Usar R+Q em campo aberto.** A mega-torreta é uma ferramenta de zona, não uma ferramenta de kill solo. Solte em um chokepoint (passagem estreita como o baron pit, o dragon pit ou o arbusto perto da torre tier-2) para forçar o inimigo a atravessar o raio de dano.
- **Recastar Q enquanto as torretas ainda têm carga.** Um Q novo solta uma torreta com carga zero e reseta a carga de TODAS as torretas. Espere a torreta mais velha disparar o feixe antes de substituí-la — caso contrário você joga fora um tiro carregado.
- **Esquecer da velocidade do Passivo.** **Hextech Affinity** dá bonus de move speed perto das suas torretas. Use o ninho como pad de kite (mover para trás enquanto causa dano): caminhe para o cluster para escapar de ganks, não para longe dele.

## Dica avançada

Domine a combo **R+E** knockup em **W** follow-up. Quando UPGRADE!!! estiver disponível, casta **R** e jogue **E** em seguida: ela cai como uma zona maior e os inimigos no centro recebem um knockup (lançados ao ar, brevemente impossibilitados de agir) em vez de só um stun. O tempo de ar é parecido com o de um stun, mas o knockup interrompe channels (como a ulti da Katarina ou o recall do Zed), e a zona ampliada captura alvos em fuga que teriam esquivado o stun normal de E. Enquanto estão no ar, dispare a barragem completa de **W** — todos os cinco foguetes convergem e atingem o alvo em CC antes que ele aterrisse, causando dano quase máximo antes que qualquer ação defensiva seja possível.
