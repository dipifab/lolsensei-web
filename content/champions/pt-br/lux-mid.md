---
title: "Lux Mid Build & Guia — Patch 16.9"
slug: "lux-mid"
language: "pt-br"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "Guia completo da Lux mid no Patch 16.9: build de mago atualizada, matchups da rota, power spikes do nível 6, erros comuns e dicas para snipar com Final Spark."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "Habilidades aplicam uma marca no inimigo. O próximo basic attack da Lux detona a marca e causa dano mágico bônus."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "Skillshot linear que prende até dois inimigos atingidos. Cooldown longo — use como setup, não como poke."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "Escudo de ida e volta que protege Lux e aliados no caminho. Recaste para puxar de volta antes do tempo."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "Zona alvo que aplica slow e dano em ticks. Recaste para detonar. Principal ferramenta de waveclear."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "Raio linear de longuíssimo alcance com dano mágico massivo. Consome marcas de Illumination ao atingir."
      dd_spell_id: "LuxR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassins (Zed, Diana, Talon, Akali) — a stasis garante o follow-up do R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "compre assim que qualquer alvo prioritário fechar um item de Magic Resist"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snipe alvos squishy com R no alcance máximo nas brigas de objetivo, depois que Luden's Echo e Shadowflame estiverem online. Controle espaço com E e fique atrás da frontline."
  weakness: "Sem dash e sem mobilidade base. É hard counter de divers e assassins; se sua frontline cai, seu posicionamento desaba junto."
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
    primary_rationale: "Sorcery primária: Arcane Comet usa E em Q para garantir o proc e adicionar burst em cada trade. Manaflow Band sustenta mana para spammar E na lane, Transcendence empurra a CDR além de 40%, Scorch fecha o poke quando o inimigo está com pouco HP."
    secondary_rationale: "Inspiration secundária: Biscuit Delivery e Cosmic Insight para sustain no early game e Flash mais frequente nas teamfights."
    secondary_alternative: "Se o time inimigo tem 2+ squishies de baixa resistência, troque Inspiration por Precision com Presence of Mind (mana de volta na takedown) e Coup de Grace (+8% de dano em alvos abaixo de 40% HP)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Mages imóveis sem dash"
      reason: "O Q da Lux é um root de longo alcance: alvos sem dash ou stealth ficam presos numa linha limpa e levam o combo E + R inteiro antes de conseguir reagir."
    - examples: ["senna", "ziggs"]
      archetype: "Carries de backline com escape fraco"
      reason: "O R cross-map vira erros de posicionamento em kill. Eles contribuem de longe, mas não conseguem desviar de um snipe no alcance máximo nos spawns de objetivo."
    - examples: ["annie", "sylas"]
      archetype: "Mages de all-in telegrafado"
      reason: "O engage deles exige curta distância e tem um tell lento — Lux escuda o burst com W, joga Q no frame de recovery e sai andando para resetar o trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Eles entram dentro da janela de cast do R da Lux antes dela terminar o channel; Zhonya's Hourglass ajuda mas não salva se a sequência de dashes acerta antes da stasis subir."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages de artillery com alcance maior"
      reason: "Pokeam a Lux além do alcance do Q. Ela não tem como fechar a distância, então cada troca de wave drena HP sem opção de all-in de volta."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globais / cross-map"
      reason: "Lux limpa wave e fica na lane; o adversário usa o ult para virar side lanes e dragões. Lux perde o macro mesmo ganhando o matchup 1v1."
---

## Visão geral

Lux é uma mage de artillery (longo alcance) que brilha controlando espaço, fazendo poke (dano à distância sem se comprometer) e fechando teamfights da backline (linha de trás do time). O kit dela gira em torno de acertar **Light Binding (Q)** como setup e em seguida encaixar **Lucent Singularity (E)** e **Final Spark (R)** para o dano. A mobilidade base é fraca e ela não tem dash, então o preço para jogar com ela é se posicionar atrás dos minions e da frontline (linha da frente). A rota mid combina com ela porque o river permite ganks (emboscadas do jungler) dos dois lados, e ela responde com **Q** ou com um snipe de **R** atravessando o mapa.

O plano de jogo é simples de descrever e exigente de executar: acerte **Q** quando o inimigo pisar no seu **E** (o slow encadeia o root garantido), empurre a wave (a leva de minions) com **E** quando seguro, e busque rotacionar para as side lanes sempre que **R** estiver disponível. O nível técnico aparece no posicionamento do **E** (preveja por onde o inimigo vai ter que andar para fazer last-hit nos minions) e nos snipes de **R** pela fog of war (zona escura sem visão), quando seu time tem wards.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Pule Corrupting Potion a menos que a lane seja de muito harass de auto-attack (assédio com ataques básicos) contra você.

**Itens core (na ordem):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst e mana sustain para spammar E.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat para deletar os squishies (alvos frágeis) que você mais quer abater.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra; o passivo abaixo de um certo HP casa exatamente com os finalizadores de **R**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling (poder ao longo do tempo) no late game, o slot mais alto de AP.

**Itens situacionais:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC (crowd control, controle de grupo) mágico single-target pesado (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers (champions que mergulham na backline) e assassins (Zed, Diana, Talon, Akali).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra composições que empilham cura (Soraka mid, Vladimir, Dr. Mundo top).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que qualquer alvo prioritário fechar um item de Magic Resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. Ionian Boots of Lucidity é aceitável se o time precisa de mais uptime de **R** como finalizador.

**Skill order:** Maxe **E** primeiro (waveclear e principal fonte de dano), **Q** em segundo (utility do binding), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence** e **Scorch**. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**, ou **Precision** com **Presence of Mind** e **Coup de Grace** se o time inimigo tiver vários squishies de baixa resistência.

## Matchups principais

- **Yasuo / Yone:** os dois conseguem Wind Wall no seu **Q** e **E** (a parede deles bloqueia projéteis). Segure o **Q** até eles gastarem as habilidades e use **E** para limpar wave só quando estiver em distância segura.
- **Diana / Akali:** ameaças de dive (mergulho na sua linha de trás). Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** depois de ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo**; nunca use **Flash** ofensivamente na lane contra elas.
- **Orianna:** matchup parelho, decidido nas teamfights. O alcance bate com o seu; não caia em trades de auto-attack porque ela escala melhor com o mesmo conjunto de itens.
- **Twisted Fate:** disputa de prioridade de roam. Se ele jogar a carta amarela em você, **Q** antes que ele feche; senão, rastreie o **R** dele com wards no river e no tri-bush (mato triplo).
- **Galio:** evite ficar grudado em aliados antes do nível 6 (o **W** dele pune alvos aglomerados). Puna ele enquanto está no melee dos minions; ele não tem alcance de waveclear para te superar no push.

## Power spikes e condições de vitória

- **Nível 2:** com um ponto em **E** e o **Q** que você começou, já tem ferramenta para fazer zoning (negar espaço para o inimigo) numa wave em slow-push.
- **Nível 6:** o primeiro **Final Spark** libera roams (rotações para outras lanes) e pressão de snipe. Com o combo **Q-E-R** decorado, uma briga no mid-river sem ward é kill garantida.
- **Luden's Echo finalizado (~ minuto 12-14):** o controle da wave inverte. Você empurra e roama com a wave do lado inimigo, liberando o caminho do seu jungler para o lado de baixo do mapa.
- **Rabadon's Deathcap online (~ minuto 24-28):** seu **R** mata em um hit os squishies que ainda não compraram nenhum item de Magic Resist. Force brigas de objetivo aqui.

## Erros comuns

- **Jogar Q como harass sem setup.** Coloque **E** debaixo do pé deles primeiro para aplicar o slow, depois **Q** no caminho que eles são obrigados a passar. **Q** seco de poke é mana jogado fora.
- **Segurar E em wave vazia.** Empurre a wave no cooldown enquanto tem mana; a troca que você cede é muito menor do que a prio (prioridade na lane) que você ganha para roams e Scuttle (caranguejo do river).
- **Auto-posicionar no alcance máximo nas teamfights.** Distância máxima de **R** te coloca fora do peel (proteção dos aliados que afastam ameaças) do seu time. Fique na segunda posição mais atrás, para que um flank (entrada pela lateral) não te delete.
- **Q no cooldown durante splitpush.** Segure **Q** para escapar de ganks; nas side lanes você não tem time para follow-up, então o binding é botão de pânico, não combustível de poke.

## Dica avançada

Treine o cancelamento do **W** recastando **Prismatic Barrier** no exato momento em que ela atinge o pico da ida — o escudo do retorno chega no valor máximo e você faz peel e shield-bomb num aliado ao mesmo tempo. Em teamfight isso entrega aproximadamente o dobro do valor efetivo de escudo comparado a deixar **W** percorrer o caminho inteiro.
