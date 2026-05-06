---
title: "Lee Sin Jungle Build & Guia — Patch 16.9"
slug: "lee-sin-jungle"
language: "pt-br"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia Lee Sin selva para League of Legends Patch 16.9: starter kit, build de skirmisher, matchups principais, power spikes, erros comuns e uma dica de fechamento."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "Após uma habilidade, as 2 próximas auto-attacks de Lee Sin ganham attack speed e devolvem energia. Ritmo habilidade — auto — auto."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Skillshot linear. Se acerta, o recast dá dash no alvo com dano físico em HP perdida. Seu gap close principal."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash para aliado, ward ou você mesmo com escudo. Recast dá lifesteal e spell vamp. Mobilidade mais sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "Dano AOE que revela inimigos. Recast lentifica os atingidos. Ferramenta de clear, anti-stealth e fonte de slow."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Chute giratório que empurra o alvo e fere inimigos atrás dele. Finisher de pickoff e ferramenta de disrupção."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra times com dois AD dealers fortes (Yasuo + Caitlyn): converte dano físico em sangramento lento, não instantâneo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP (Diana, Syndra, Lux mid): o lifeline shield transforma one-shot em trade sobrevivível"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra 3+ campeões com hard CC (Leona + Lissandra + Sejuani): a tenacity encurta stuns e roots"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "quando precisa fazer dive (entrar sob torre inimiga para matar): o lifeline shield ativa após o primeiro golpe pesado"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "seguro de flank no late game: se errar o timing da R, a ressurreição equilibra o trade"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Ganhe os primeiros 14 minutos com invades e ganks. Com Eclipse pronto, conteste todo objetivo e use a R para tirar um inimigo chave da posição. Late game: ache um flank, chute uma carry squishy para o seu time."
  weakness: "Cai forte após o minuto 25 contra carries que escalam. Sem dash confiável se Q1 erra ou W não tem alvo. Cadeias de hard CC fecham seu engage instantaneamente."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Visão geral

Lee Sin é um jungler de early game — um skirmisher, ou seja, um campeão que vence brigas curtas entre dois ou três jogadores. Imagine um artista marcial com uma cadeia de dashes: ele te acerta com uma onda sonora, dá dash em cima de você, te chuta para o time dele e suas auto-attacks vêm com bônus de attack speed integrado depois de cada habilidade. Todo o kit é construído em torno de uma ideia única: ser o lutador mais forte do mapa nos primeiros 15 minutos e depois converter essa vantagem em kills, objetivos e tempo antes que as carries adversárias escalem.

O game plan dele é direto. Nos primeiros 8 minutos você faz invade — entra na selva inimiga para roubar camps e caçar o jungler adversário. Depois, você ganka as lanes sempre que sua **Q** estiver pronta. No late game você para de tentar 1v1 (você perde) e busca flanks: contorna o lado do mapa, se esconde em um arbusto sem ward e então **R** a carry inimiga para o seu time. Se você não acerta a **Q1** consistentemente, nada disso funciona — o resto do kit encadeia a partir do primeiro skillshot.

## Build recomendada

**Itens iniciais:** Smite + **Hailblade** para um primeiro clear mais rápido com dano AOE no segundo hit, mais **Refillable Potion**. Pegue Emberknife só se quiser sustain máximo em um full clear mais lento com mais solo dueling.

**Itens core (em ordem):**

1. **Eclipse** — burst, escudo e omnivamp. O escudo de dois hits casa perfeito com seu ritmo Cast → AA → AA da passiva. Primeiro item mais limpo para skirmishar.
2. **Plated Steelcaps** vs inimigos AD-heavy / **Mercury's Treads** vs 3+ campeões com hard CC. Plated por padrão.
3. **Heartsteel** — HP e auto-attack carregada que pune skirmishes prolongados. Te deixa brigar passando do timer clássico "morro com 2 itens".
4. **Black Cleaver** — armor shred que escala com seu ritmo Q-AA-Q. Transforma também o dano físico do seu time em ameaça de kill.

**Itens situacionais:**

- **Death's Dance** — contra times com dois AD dealers fortes (ex. Yasuo + Caitlyn). Espalha o dano físico recebido como sangramento lento em vez de chegar instantâneo.
- **Maw of Malmortius** — contra lanes de burst AP (Diana, Syndra, Lux mid).
- **Sterak's Gage** — quando você precisa dar dive (entrar sob a torre inimiga para matar). O lifeline shield te compra o segundo que seu time precisa para o follow-up.
- **Guardian Angel** — seguro de flank no late game após 4 itens.

**Botas:** Plated Steelcaps por padrão. Boots of Mobility só em mapas com muitos ganks e sem ameaças de CC early — nicho, não padrão.

**Ordem de skills:** Maxe **Q** primeiro (dano e gap close), **E** em segundo (clear e uptime de slow), **W** por último (a utilidade escala bem em rank 1). **R** nos níveis 6, 11, 16.

**Runas:** Primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Domination** com **Sudden Impact** + **Treasure Hunter** para um snowball lead (vantagem inicial que cresce com o tempo: kill → gold → item → mais kills), ou **Resolve** com **Second Wind** + **Revitalize** se você espera uma partida longa e de scaling.

## Matchups principais

- **Vi:** Ela perde skirmishes pre-6 se você baita a **Q** carregada dela. Acerta a sua **Q1** nela, **E** para slow, depois dá dash no support após o chute — peela para sua carry enquanto ela está em cooldown.
- **Hecarim:** Ele te ultrapassa após 3 itens, mas perde fights pre-9 minutos. Pressione cedo; se chegar ao nível 6 antes dele, ganke top ou mid sem parar. Não 1v1 depois do primeiro item dele.
- **Master Yi:** Matchup de skill. Seu **E** o revela enquanto a **Q** dele está ativa, quebrando o target lock. Treine isso até virar reflexo. Salve a **R** para chutá-lo da sua back line nos team fights.
- **Kha'Zix:** Invade até o nível 6. Após o **R** evoluído ele consegue solo-killar você se você estiver sozinho — nunca ande na selva inimiga sozinho após o minuto 12 sem cobertura do time.
- **Graves:** Matchup espelhado de tempo. Ambos os junglers vencem os primeiros 6 níveis. Quem ganka mais vence. Acompanhe as cargas de **E** dele; se queimou as duas, você o duela.

## Power spikes e condições de vitória

- **Nível 3:** Kit completo desbloqueado. Seu padrão de gank é **Q1 → esperar CC aliado ou Flash → Q2 → E slow → reset auto**. Sem Flash inimigo, isso mata qualquer squishy a 60% HP.
- **Nível 6:** **Dragon's Rage** desbloqueia a jogada do chute. Pre-6 a **R** não vale nada — um first blood pre-6 é seu ponto de maior alavancagem na partida.
- **Timing de Eclipse (~ minuto 9):** Você vence skirmishes prolongados. Force fights em Scuttle, Drake e Voidgrubs nessa janela.
- **Late game (~ minuto 30):** Lee cai contra carries que escalam (Vayne, Kog'Maw, Master Yi). Sua condição de vitória restante é o ace-flank: pegue vision na selva inimiga, ache uma posição lateral, **R** a carry deles atravessando o mapa, follow-up com **Q-E-W**.

## Erros comuns

- **Gastar Q1 num minion low-HP em pleno fight.** Sua **Q** tem duas partes: o skillshot e o dash. Se você lança Q1 num minion para limpar, queimou a habilidade inteira por 12 segundos e ficou sem gap close. Salve a Q1 para o all-in (compromisso total no trade até alguém morrer).
- **W-jumping no meio do skirmish para sustain.** O lifesteal da **W** é real, mas se você dá W numa ward para se curar, abre mão do gap close. Se o trade for vencível, salve **W** para um Insec (o truque do chute ao contrário — veja a dica avançada) ou para pular no support após a **R**.
- **R-into-tower sem follow-up.** Chutar uma carry low-HP para o seu time só funciona se o time estiver no alcance e pronto para se comprometer. **R** sozinho, fora da tela, é uma moeda jogada de 100g.
- **Auto-leashar o red side no nível 1.** Com Hailblade você faz full-clear desde o bot side sem ajuda. O leash sacrifica a corrida ao Scuttle. Diga para a bot lane: leash só do primeiro attack-and-go, depois saia.
- **Pickar Lee numa comp sem plano de pickoff.** Lee brilha quando o time capitaliza em uma única kill isolada (um "pickoff": eliminar um inimigo fora do teamfight). Se seu time não tem CC de follow-up, a **R** é só ferramenta de peel — adapte a build para Death's Dance e Sterak's em vez de itens de all-in.

## Dica avançada

O "Insec" — o chute ao contrário: ande além do alvo, **W** numa ward que você plantou atrás dele, depois **R** assim que pousar — o chute sai por trás e o manda para o seu time em vez de afastar. A sequência completa é **Q1 acerto → Q2 dash → ward atrás → W na ward → R**. Treine no Practice Tool até acertar o timing sem pensar. A janela entre pousar a W e a R é de cerca de 0,3 segundos — devagar demais e o alvo se vira para você, rápido demais e a animação de W come o cast da R. Quando você consegue encadear sob pressão, Lee sobe dois tiers nas suas mãos.
