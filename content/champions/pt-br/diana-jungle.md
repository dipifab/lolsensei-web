---
title: "Diana Jungle Build & Guia — Patch 16.9"
slug: "diana-jungle"
language: "pt-br"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia da Diana jungle no Patch 16.9 de League of Legends: clear inicial, timings de Scuttle e Drake, rotas de gank, build AP burst, matchups, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Cada terceiro basic attack acerta em cone os inimigos próximos com dano mágico bônus. Lançar qualquer habilidade dá attack speed por 5 segundos: motor do clear na jungle."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Skillshot em arco que marca os alvos com Moonlight por 3 segundos. A marca libera o reset de E e é a sua ferramenta de setup para os ganks."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Três orbes que causam dano mágico no contato e dão um escudo. Ótima para duelos e para fazer os camps da jungle sem perder HP."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Dash em alvo com dano mágico. O cooldown reseta em alvo marcado por Q: motor do seu gap-close."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Puxa e desacelera os inimigos próximos, depois explode na Diana causando dano mágico em área. Único CC do kit (CC = crowd control, controle de grupo): alcance curto."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra tanks de hard-engage (Malphite, Sejuani, Leona): a stasis evita a CC chain depois da sua R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra comps com duas ou mais frontlines de muito HP (Cho'Gath, Ornn): o burn escala com HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que um priority target comprar Magic Resist (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com muito healing (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (charm da Ahri, R da Lissandra, stun do Twisted Fate)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Acerte Q da fog, dasha no alvo marcado com E, R para separá-lo do time, depois W e basic-attack reset com o follow-up do seu time. Force fights no nível 6 sobre objetivos."
  weakness: "Alcance efetivo curto (E só 825 unidades). Champions com disengage forte (R da Janna) ou peel separam você do carry; sem Q mark não há um segundo dash para fugir."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana ganha duelos prolongados na jungle deles: Pale Cascade escuda uma rotação de dano, depois Lunar Rush reseta na Q mark para um re-engage que eles não conseguem kitar."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "O power dip deles bate forte no nível 6, enquanto a R da Diana abre pressão mid-game. Iguale o tempo de first-clear deles e troque objetivos até Luden's Echo virar a partida."
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana clear mais rápido com os passive resets e chega antes ao Scuttle Crab. Counter-jungle os camps de trás depois de cada Drake: eles não conseguem rotar a tempo."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "Eles invadem no nível 3 antes da Diana ter o E e quebram o clear dela. O CC bypassa o escudo de Pale Cascade: um 1v1 na jungle deles antes do 6 é kill grátis para eles."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "A R da Diana só funciona em melee range: essas tools de counter-engage tiram ela da pull window antes da Moonfall terminar o channel, gastando o único CC dela."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "Eles caminham por dentro da Moonfall (R do Olaf cleansa o CC, R do Udyr ignora a puxada) e fazem mais DPS que a Diana quando o escudo cai: ela não tem uma segunda escape."
---

## Visão geral

Diana é uma diver de dano mágico: assassin melee com escudo embutido, dash gratuito em alvo marcado e um dos engages de uma tecla mais fortes do jogo (engage = a ação que abre o fight). Na jungle ela troca ganks de early por clear rápido e snowball no nível 6 — snowball é a vantagem inicial que cresce com o tempo (kill → gold → item → mais kills). Quando **Lunar Rush (E)** consegue encadear uma kill em um segundo dash, ela vira o pick "aperta R, deleta o carry" por excelência. (Diver é um melee que pula em cima da back line do time inimigo.)

O game plan dela como jungler é forçar o primeiro clear com **Pale Cascade (W)** e o on-hit de **Moonsilver Blade (P)**, pegar o **Scuttle Crab** (o caranguejo do rio que dá visão e um pequeno speed shrine) por volta de 3:30, e depois começar a gankar lanes com vision setup. Depois do nível 6, todo teamfight perto de um Drake ou do Rift Herald é uma win condition: **Moonfall (R)** puxa os priority targets e o seu time finaliza o trabalho.

## Build recomendada

**Itens iniciais:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. O pet Gustwalker dá movement speed fora de combate, perfeito para o mid game gank-heavy da Diana. Pule o Mosstomper (pet de sustain): seu **W** já escuda um ciclo de clear.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primeiro spike de burst (burst = dano alto concentrado em 1-2 segundos), AP e ability haste. Os bolts despedaçam alvos squishy assim que você dá E neles.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Boots padrão em 95% das partidas.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra: a passiva HP-threshold (passiva que ativa quando o inimigo está abaixo de um limiar de HP, aqui 35%) casa perfeito com o finisher R-into-E.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling no late-game. Seu maior slot de AP em um item só.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra tanks de hard-engage (Malphite, Sejuani, Leona). Aperte o ativo de stasis (você fica invulnerável mas não consegue se mover ou agir por 2.5 segundos) logo depois da R: o follow-up de CC inimigo erra.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — quando o time inimigo tem duas ou mais frontlines de muito HP (Cho'Gath, Ornn): o burn escala com o pool de HP deles e ticka enquanto você reposiciona.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que qualquer priority target comprar Magic Resist (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps com muito healing (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (crowd control: stuns, roots, charms) tipo o charm da Ahri ou a R da Lissandra.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. Troque por ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contra comps AD-pesadas com dois AD threats, ou Mercury's Treads contra muito CC mágico.

**Skill order:** Maxe **Q** primeiro (waveclear, dano extra de Q, janela maior de Moonlight). Maxe **W** em segundo (valor do escudo e clear speed). **E** por último — ela ganha alcance por rank, mas o que importa é o reset do cooldown em Moonlight, não o scaling cru. Pegue **R** nos níveis 6, 11, 16.

**Runas:** Primária **Domination** com **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Magic Resist (ou Health contra muito poke).

## Matchups principais

- **Lee Sin:** Evite invades no nível 2 — o follow-up Q-Q dele bate o seu W shield. Warde o seu blue buff top-side e clear bot-to-top para encontrar ele no Scuttle com os passive procs prontos.
- **Graves:** Você out-duela ele depois do nível 6. Engaje a partir da fog (a parte sem ward da jungle, fog of war) com **Q** para que o alcance do dash dele não desvie da marca; com Moonlight nele, **E** é gap-close garantido (gap-close = habilidade que fecha a distância com o inimigo).
- **Elise:** Corrida de power spike. Ela ganha os ganks no nível 3, você ganha o fight no nível 6. Iguale o tempo de first-clear dela, hover Drake com visão para que ela não solo.
- **Jarvan IV:** Matchup difícil. O knock-up E-Q dele cancela o channel da sua **R**. Espere ele commitar a combo primeiro, depois E nele para o trade. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** mais cedo do que o normal.
- **Kha'Zix:** Matchup parelho que vira a seu favor no item 2. Ele te bursta em melee range; bait o jump de isolated com HP baixo, **W**-shielda o Q dele, depois E-R reset. Nunca passe pela sua jungle sem ward control ou come um isolated jump grátis.

## Power spikes e condições de vitória

- **Nível 3 (Q + W + E):** Kit completo. O primeiro clear acaba por volta de 3:15 — rushe Scuttle Crab antes do jungler inimigo. A visão do rio mais o shrine de 50 HP arma o resto do mapa.
- **Nível 6 (primeira Moonfall):** Power de skirmish do mid-river (skirmish é um fight pequeno, geralmente 2v2 ou 3v3, não um teamfight inteiro). Q de uma brush, E no alvo marcado, R para puxar os dois carries deles juntos — seus laners burstam o resto. O efeito pull no nível 6 mais forte do pool de junglers.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minuto 9-11):** Spike de burst. Uma combo Q-E limpa em alvo squishy (champion com defesas baixas, tipo ADCs e a maioria dos mages) deleta 60-70% do HP antes do time deles reagir. Force fights no segundo Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 22-25):** Limiar de one-shot contra qualquer squishy sem item de Magic Resist. Procure picks (eliminar um inimigo isolado fora do teamfight) no setup de visão para Baron ou Elder Dragon.

## Erros comuns

- **Andar em cima de wards na aproximação do gank.** A única ferramenta de stealth da Diana é a fog. Passe pelo rio ou volte pela sua jungle, e peça pro seu laner limpar a ward da brush antes de commitar.
- **Lançar R na front line.** Sua R puxa todo mundo num raio de 475 — arrastar o tank em direção ao seu time é exatamente o que eles queriam. Espere o engage se desenvolver, depois R na back line (back line = os carries que dão dano de posição segura).
- **Usar E em cooldown sem Q mark.** Sem Moonlight, **E** tem 14 segundos de cooldown e alcance curto. Sempre Q primeiro: o reset em alvo marcado é o que faz a Diana parecer móvel.
- **Greedar o terceiro camp no primeiro clear.** Se o jungler inimigo é mais rápido (Graves, Shyvana, Karthus), você perde a corrida de invade no nível 3. Cross-mapeie os laners deles: se o mid está missing, full-clear é armadilha.
- **Over-commitar um gank sem saída.** Diana não tem escape embutida depois do E. Se a lane não tem slow ou follow-up CC, seu engage vira 1v3 assim que os summoners inimigos voltam.

## Dica avançada

Treine a combo **Q-Flash-E-R** como abertura de teamfight. Com sua Q no ar, dê Flash para a frente no momento do impacto: o alvo marcado aparece do seu lado, **E** encadeia na hora pelo reset do Moonlight, e sua **R** pega toda a back line deles agrupada no carry. A combo ganha fights que você não tinha o direito de ganhar — mas exige a memória muscular de dar Flash no meio da animação do Q, não depois do projétil aterrissar. Treine no practice tool contra um dummy parado até a ordem dos inputs ficar automática.
