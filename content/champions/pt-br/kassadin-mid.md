---
title: "Kassadin Mid Build & Guia — Patch 16.9"
slug: "kassadin-mid"
language: "pt-br"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Guia de Kassadin mid no Patch 16.9 do League of Legends: build de late-game scaler, matchups principais, power spikes, erros comuns e uma dica avançada final."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Passiva: Kassadin recebe dano mágico reduzido e ignora colisão de unidades (atravessa minions e campeões)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Skillshot single-target: dano mágico + interrompe canalizações. Concede a Kassadin um magic shield por 1.5s — anti-poke vs magos AP."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Passiva: dano mágico extra em autoataques. Ativa: próximo auto vem potencializado e devolve mana faltante (mais contra campeões)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "Cone AOE com slow + dano mágico. Carrega com spells lançadas perto (suas ou inimigas). Precisa de carga para ativar: use como finisher."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Blink curto de cooldown baixo. Cada cast em poucos segundos dobra o custo de mana e adiciona dano bônus, até 4 stacks."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps que você out-scala pós-11: AP + ability haste + movement speed para encadear Riftwalks na backline squishy"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun) que fecha sua janela de Riftwalk"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comps com cura (Soraka mid, Vladimir, Dr. Mundo top): aplica Grievous Wounds, corta a cura pela metade"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs carries squishy com escudos (Riven, Yasuo passive): burst extra para fechar o execute R+Q+E"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Sobreviva à lane até o nível 11 com um item completo, depois snowball (transforme vantagens pequenas em grandes): R nos carries squishy, Q+AA+E para deletar, R out antes do peel."
  weakness: "Lane phase brutal: pouco dano base, alcance curto, sem waveclear antes do 9. Magos de burst e poke à distância te empurram pra torre e tiram seu HP antes de você escalar."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
  primary_rationale: "Inspiration primary: First Strike premia as janelas de burst late-game com gold e dano extra ao abrir com R. Magical Footwear economiza 350 de gold, Biscuit Delivery cobre a mana fraca em lane, Cosmic Insight reduz CDs de summoners para mais Flash em escaramuças."
  secondary_rationale: "Sorcery secondary: Manaflow Band é obrigatória — sem ela, o spam de Q em lane esvazia sua mana antes do nível 9. Transcendence empurra a ability haste acima de 40 %, baixando o CD do Riftwalk para encadear 3-4 R em teamfight em vez de 2."
  secondary_alternative: "Se enfrentar magos de poke pesado que negam farm pré-6 (Xerath, Vel'Koz), troque Sorcery por Resolve com Second Wind (regen de HP passivo vs poke) e Overgrowth (HP scaling) para sobreviver tempo suficiente para escalar."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Magos imóveis sem dash"
      reason: "Após o nível 11 o CD do Riftwalk é de 2s: você blinka em cima deles, Q no cast, E para slow, AA-execute antes que consigam acertar o burst combo completo."
    - examples: ["lux", "syndra"]
      archetype: "Magos de skillshot setup sem escape"
      reason: "O dano deles depende de aterrissar setups de longo alcance (Q root, stack de stun); o R late do Kassadin esquiva o skillshot mid-combo e fecha o gap com um blink que eles não conseguem punir."
    - examples: ["taliyah", "azir"]
      archetype: "Magos de área-denial de longo alcance"
      reason: "Pré-6 te bullam, mas pós-11 o magic shield do Q + a mobilidade do R neutralizam as ferramentas de kiting deles. Quando o jogo se estende, a AOE deles é desperdiçada num alvo que eles não conseguem fixar."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Magos de poke de longo alcance"
      reason: "Pokam fora do alcance do seu Q (650) durante toda a fase pré-6. O magic shield do Q ajuda mas não recarrega HP — no nível 6 você já está com meia barra e não dá pra all-in."
    - examples: ["talon", "zed"]
      archetype: "Assassinos AD early-game"
      reason: "Atingem o powerspike de 2 itens por volta do minuto 14 enquanto Kassadin ainda está no primeiro item. Roams nas side lanes punem o scaling lento: o jogo acaba antes do seu late game chegar."
    - examples: ["pantheon", "yasuo"]
      archetype: "Lane bullies com pressão de all-in"
      reason: "O all-in deles no nível 2-3 (Pantheon Q+W stun, Yasuo Q-windwall-knockup) destrói o HP do Kassadin antes do Q estar maxado. O magic shield do Q é inútil contra dano físico."
---

## Visão geral

Kassadin é um AP assassin (um mago que fecha o gap e deleta um único alvo em vez de pokar de longe) construído para o late game. Seu kit gira em torno de **Riftwalk (R)**: um blink curto com cooldown baixíssimo que se torna a melhor ferramenta de reposicionamento do jogo ao chegar no rank 3 no nível 16. O preço é uma lane phase punitiva: alcance curto (650 no **Q**), sem waveclear antes do 9, e dano base que perde qualquer all-in (troca total até alguém morrer) pré-6 contra a maioria dos mid laners. A mid lane combina com ele porque o rio é o caminho mais curto até scuttle e side lanes assim que o **R** estiver online — mas você precisa sobreviver 11-13 minutos primeiro.

O game plan é simples: não feedar pré-6, atingir o nível 11 com um item completo, e começar a caçar carries squishy. A skill expression está na gestão de mana do **Riftwalk** (cada cast em 7 segundos dobra o custo, então 4 R numa fight sem item baseado em Tear é impossível) e em stackar ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** com suas próprias spells antes da fight começar.

## Build recomendada

**Starting items:** Doran's Ring + 2 Health Potions. A mana do Doran's vale mais que o HP do Doran's Shield: você spamma **Q** em lane para last-hittar à distância quando dá.

**Core items (em ordem):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — melhor scaler de mana + HP + AP do jogo para Kassadin. A passiva Eternity, a partir do minuto 10, te cura uma boa parte a cada level-up e te segura na lane phase. Primeiro item completo.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat, as botas quase sempre certas contra alvos squishy mid/ADC.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP de 35 %. Seu combo Q+E+AA dobra de dano com isso ativo.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis. Te permite R na backline e stasis se chegar peel, depois R out quando a stasis acabar.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR stack. Obrigatório quando qualquer priority target compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** ou ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + um item de MR.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps que você out-scala pós-11. AP + ability haste + movement speed: você encadeia Riftwalks mais rápido e cola na backline squishy depois de blinkar.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs CC mágico single-target que fecha a janela do seu **R** (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comps com cura pesada. Aplica Grievous Wounds (um debuff que corta a cura recebida pela metade) ao causar dano.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs carries squishy que compram escudos. A passiva HP-threshold (uma passiva que ativa quando o alvo está abaixo de ~35 % HP) se alinha com seu execute **R+Q+E**.

**Boots:** Sorcerer's Shoes por padrão. Troque por ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs comps com AP + CC pesado (2+ stuns / roots no time inimigo).

**Skill order:** Maxe **Q** primeiro (melhor dano e o shield mana-cheap), **E** em segundo (a waveclear destrava no nível 9 com E max), **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Inspiration** com **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Troque Sorcery por **Resolve** (Second Wind + Overgrowth) em matchups de poke de longo alcance.

## Matchups principais

- **Xerath / Vel'Koz:** O alcance do Q deles supera o seu em 200+ unidades. Last-hit só com **Q** no max range, coma o poke, nunca pushe além do rio. Use o shield do ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** meio segundo antes das spells deles aterrissarem — o magic shield bloqueia a maior parte do dano.
- **Zed:** Evite all-ins pré-6. Depois que o **R** destravar, baite a mark do **R** dele e use Riftwalk para esquivar do dano snap-back. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como item 2 em vez de Deathcap se ele estiver fed (já com 4+ kills).
- **Veigar:** Equilibrado pré-6, brutal pós-11. Fique fora do alcance da **E** cage dele até o nível 11; quando seu R estiver com 2s de CD, dive nele com um Riftwalk lateral (a cage tem cantos abertos, não muros completos).
- **Ahri:** Corrida por prioridade de roam. Pushe a wave quando ela estiver com pouca mana, siga os roams dela. O Charm cancela seu **R** mid-blink — compre ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como 4º item se ela for a threat carry.
- **Yasuo:** Bully early pesado. Não auto-ataque dentro da wave (o **E** dele dasha nos seus minions para poke grátis). Fique atrás, deixe ele pushar, freeze a wave perto da sua torre com auto-attack pulls. Sobreviva até o nível 6, depois comece a tradar R+Q.

## Power spikes e condições de vitória

- **Nível 6:** Primeiro **Riftwalk** destrava. Agora você consegue blinkar sobre paredes — escape de ganks pelo pit dos Krug, parede dos Raptors, beirada do pit do drake. O dano do R no rank 1 é baixo, ainda nada de all-in.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages completa (~ minuto 12-14):** Primeiro colchão importante de HP/mana. A lane phase fica sobrevivível; procure trades curtos quando o mid inimigo estiver em cooldown.
- **Nível 11:** O segundo rank do **R** corta o CD para 3.5 segundos. Aqui o Kassadin de verdade está online — você encadeia 2 R e sobrevive, ou R-Q-E-AA-R out num squishy. Force teamfights a partir daqui.
- **Nível 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** R com 2s de CD, AP scaling por cima. Você one-shota qualquer squishy sem MR e encadeia 3-4 R numa única fight. Force fights de baron e elder dragon — o late-game Kassadin ganha.

## Erros comuns

- **Tentar ganhar a lane.** Kassadin é o pior laner early do mid by design. Se você for pra all-ins no nível 3, morre, fica atrás e nunca chega no seu spike. Last-hit, coma poke, chegue vivo no nível 11 — essa é a win condition.
- **Spammar Riftwalk em escaramuças.** Cada cast em 7 segundos dobra o custo de mana. 4 R seguidos queimam 600+ de mana — você termina a fight sem Q e sem E. Olhe sua barra de mana antes do terceiro R.
- **Segurar o E pelo cone perfeito.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** carrega com spells lançadas perto (suas e dos inimigos contam). Lance Q numa wave uma vez antes da fight para stackar E até ready, depois engaje. Entrar numa fight sem E carregado é jogar fora o finisher de slow.
- **R-engage sem plano de saída.** Riftwalk tem alcance curto (500). Se você blinkar no ADC backline e seu time não der follow-up, o peel te come antes do R voltar. Sempre pense na direção do segundo R (pra onde R out?) antes do primeiro.
- **Comprar Deathcap antes do Rod of Ages.** Deathcap custa 3600 de gold sem HP/mana — comprar primeiro significa morrer em qualquer teamfight antes do AP fazer diferença. Rod of Ages (3700g, +400 HP, +400 mana) é o item de sobrevivência que torna o Deathcap usável.

## Dica avançada

Use o **Q** como buffer de magic shield antes dos wind-ups inimigos, não só como poke. O magic shield de 1.5 segundo da Null Sphere absorve uma quantidade fixa de dano mágico — caste no meio segundo antes de uma **W** do Veigar, **R** da Lissandra, ou **R+Tibbers** da Annie aterrissarem, e você nega a maior parte do burst deles. Treine o timing no Practice Tool contra um Veigar bot: o shield precisa estar ativo **no momento que a spell acerta**, não antes do cast começar. Esse único truque é o que separa Kassadins que perdem lane 0/3 dos que perdem lane 0/0 e escalam.
