---
title: "Aurora Mid Build & Guia — Patch 16.9"
slug: "aurora-mid"
language: "pt-br"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Guia da Aurora mid no Patch 16.9: starter kit, build burst-mage core, matchups principais, power spikes, erros comuns recorrentes e uma dica avançada final."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Causar dano em inimigos libera espíritos que seguem a Aurora e a curam ao tocá-la. Sustain constante na lane e nas teamfights."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Skillshot linear que amaldiçoa os alvos atingidos. O recast puxa a maldição de volta para a Aurora com um segundo golpe baseado em HP perdido."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash ao conjurar; ao pousar fica invisível e ganha movement speed. Reseta em takedowns. Principal ferramenta de mobilidade."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "Explosão mágica em AOE que aplica slow nos inimigos. Aurora salta para trás após o cast, garantindo um disengage seguro de trades curtos."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Salto e depois cria uma zona de slow que a Aurora pode atravessar se teleportando. Inimigos que entram ou saem sofrem slow maior."
      dd_spell_id: "AuroraR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins móveis (Zed, Fizz, Akali) — a stasis cobre a janela em que o W está em cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que um alvo prioritário comprar um item de Magic Resist (acima de 60 MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com muita cura (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Puna erros de posicionamento com W jump-in mais o burst da Q recast quando Stormsurge e Shadowflame estiverem online. Use os resets de W em takedowns para ciclar nas teamfights."
  weakness: "Hard CC antes do W fecha todas as rotas de fuga dela. Mages artillery de longo alcance a pokeiam fora da janela de step-up antes que ela consiga engajar."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
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
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Mages imóveis sem escape"
      reason: "Esses mids não têm dash nem stealth: a Aurora pode usar W in depois que a Q acerta, finalizar a curse-recast no nariz deles e voltar com W graças ao reset por takedown."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Mids melee de curto alcance"
      reason: "Aurora os out-rangea com o poke da Q e usa o backward hop do E para recusar trades; eles precisam comprometer gap-closers que Aurora pune com Q recast na entrada."
    - examples: ["veigar", "ziggs"]
      archetype: "Mages burst imóveis com cast lento"
      reason: "A kill window deles exige que a Aurora fique parada para um projétil lento ou uma jaula. A invisibilidade do W quebra a leitura do cast e deixa ela sidestepar o setup."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Mages artillery de longo alcance"
      reason: "Eles pokeiam a Aurora fora do alcance da Q a cada wave. Ela não tem shield nativo, então cada step-up para soltar E ou Q custa HP que a passiva sozinha não devolve."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Eles bursta a Aurora na janela de cooldown do W. Mesmo com Zhonya's, uma cadeia de dashes mais ulti apaga ela antes de conseguir stasis ou resincronizar o W."
    - examples: ["yasuo"]
      archetype: "Champions com bloqueio de projétil"
      reason: "O Wind Wall do Yasuo anula tanto a Q de saída quanto o pull-back da recast, removendo cerca de metade do dano de lane da Aurora com uma única habilidade."
---

## Visão geral

Aurora é uma maga de dano mágico com perfil **burst** — ela concentra quase todo o dano em uma janela de 1-2 segundos — com ferramentas de assassin acopladas: **Across the Veil (W)** é um dash mais um stealth curto, e **Between Worlds (R)** é tanto um salto de engage (forma de iniciar um fight pulando primeiro) quanto uma zona de repositioning. O kit dela premia ler o oponente: acerte **Twofold Hex (Q)** à distância, ande para a frente para alinhar o recast, e então pule com **W** quando o pull-back da maldição estiver alinhado. A passiva a cura toda vez que os espíritos exorcizados pelas habilidades alcançam ela, o que dá um **sustain** na lane (capacidade de recuperar HP durante a fase de lane sem voltar para a base) que a maioria dos mid laners **squishy** — campeões frágeis com dano alto, tipo Lux ou Ahri — não tem.

O game plan dela é vencer **trades** curtos (escaramuças breves em que dois campeões trocam alguns golpes) com **Q** mais auto-attacks enquanto procura a janela de **all-in** — o momento em que ela se compromete a fechar a kill — assim que **W** volta. **W** ainda tem reset por **takedown** (cada kill ou assist devolve o cooldown), então uma kill limpa na lane lhe dá um segundo salto para escapar, e em teamfights permite encadear do primeiro squishy abatido para o próximo alvo na **back line** (os carries posicionados atrás dos tanks).

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (um pouco de AP — Ability Power, o stat que potencializa o dano mágico — mais mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. A passiva da Aurora já cura ela; Doran's Ring cobre o mana early que ela precisa para manter **Q** em **poke** (dano à distância para tirar HP do oponente sem se comprometer com um fight).

**Itens core (em ordem):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — primeiro **spike** da Aurora (o momento em que um champion fica nitidamente mais forte, normalmente ao concluir um item). Quando ela machuca um champion já com pouco HP, a passiva do Stormsurge **proca** (proc é o nome da ativação de um efeito bônus) e adiciona dano extra mais movement speed, exatamente o que ela precisa para encadear W in com a Q recast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — **magic penetration** flat (reduz a Magic Resist do oponente, então suas spells batem mais forte), útil principalmente contra alvos squishy.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — a passiva por threshold de HP (dano mágico extra quando o alvo está abaixo de ~35% HP) bate certinho com o burst da Q recast da Aurora, que dá mais dano em alvos com HP perdido.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — item de **scaling** late game (multiplica o AP de todos os outros itens da build, então fica mais forte quanto mais AP você já tem). Com Deathcap online a Q recast começa a one-shotar um squishy em uma única combo antes dele reagir.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins móveis (Zed, Fizz, Akali). A ativa dá **stasis** (2,5 segundos em que você não toma dano, mas também não pode se mover ou castar). Use na janela em que **W** está em cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — magic resist mais um escudo passivo que bloqueia a próxima habilidade inimiga. Compre contra **CC** mágico single-target (CC vem de crowd control: stuns, roots, slows que travam você fora do kit) que interrompe seu engage — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration percentual. Compre assim que um alvo prioritário começar a subir Magic Resist (acima de 60 MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — aplica Grievous Wounds, que corta a cura inimiga. Compre contra composições com muita cura (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** ficam ok quando o time precisa de mais uptime de **R** para engajar.

**Skill order:** Coloque a maioria dos pontos em **Q** primeiro (é o dano principal e o que ativa o burst da recast), **E** em segundo (limpa waves de minions e o backward hop oferece um **disengage** grátis — disengage é o jeito de sair de um fight já em curso), **W** por último. Um ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Domination** com **Electrocute**, **Cheap Shot**, **Sixth Sense** e **Ultimate Hunter**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Electrocute proca depois de três golpes rápidos no mesmo alvo — exatamente o que a Aurora faz em todo trade curto com Q-auto-Q-recast — e Ultimate Hunter reduz o cooldown da **R** para um segundo engage em teamfight.

## Matchups principais

- **Yasuo:** Wind Wall (W do Yasuo, uma parede de vento que bloqueia todos os projéteis que cruzam) come as duas metades de **Q** (o míssil de saída e o pull-back da recast). Segure **Q** até ele usar Wind Wall em uma wave de minions, depois ande para a frente e troque com auto-attacks e **E** enquanto o Wind Wall está em cooldown.
- **Zed:** assassin móvel. Mantenha **W** defensiva para quando a **R** dele aterrissar; não queime ela ofensivamente na lane. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como segundo item se o jungler dele também tiver hard engage.
- **Anivia:** imóvel e vulnerável a um W all-in assim que a parede dela cai. Pise nas posições da parede com agressividade logo depois que ela conjura; a parede tem cooldown longo e em curta distância ela não tem outra ferramenta para te ameaçar.
- **Lux:** matchup parelho ou levemente favorável. A Q dela te out-rangea, mas você ganha as trocas curtas graças ao **W** mais auto-attacks. Sidestepe o **E** dela enquanto ela posiciona (ela telegrafa o cast point — tem uma animação de cast visível antes da spell aterrissar), depois ande para a frente.
- **Twisted Fate:** corrida pelo primeiro **roam** (roam é deixar a sua lane para fazer plays em outra parte do mapa). Se ele puxar gold card em você, **W** lateral antes da carta cair — o dash quebra o lock-on. Acompanhe a **R** dele com **wards** (totens que dão visão de uma área por alguns minutos — sweep nas entradas do river e no tri-bush, o mato no cruzamento entre mid lane e river); se ele ulta, ping mid-mia (o clássico "missing in action" que avisa o time que seu laner acabou de sumir) e roame também.

## Power spikes e condições de vitória

- **Nível 2:** com um ponto em **W** você de repente ganha mobilidade — a primeira janela de all-in abre se o oponente está abaixo de ~70% HP. Ande para a frente, **Q**, auto-attack, depois **W** atrás dele e **Q** recast.
- **Nível 6:** a primeira **R** desbloqueia o repositioning cross-zone que permite ela se comprometer em um 1v1 mesmo embaixo de torre inimiga, porque **R** dá uma rota de fuga embutida atravessando a zona.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge concluído (~minuto 12-14):** primeiro spike de assassinato. Agora ela consegue solo-killar um squishy com HP cheio na combo inteira, e o reset de **W** por takedown torna realista uma segunda kill na mesma teamfight.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~minuto 24-28):** a Q recast em HP perdido começa a one-shotar qualquer alvo que não comprou um item de Magic Resist. Force fights em torno de objetivos (drake, baron, herald, voidgrub) assim que isso estiver online.

## Erros comuns

- **Queimar W na entrada em vez de guardar para o reset.** **W** reseta em takedowns. Se você comprometer **W** para engajar, feche a kill na mesma janela para o reset te dar o exit. Se a kill não está garantida, segure **W** e use o backward hop de **E** para disengajar.
- **Esquecer de recastar a Q.** **Twofold Hex** auto-recasta quando a duração acaba, mas o recast manual deixa você escolher o ângulo do pull-back. Andar dois passos para a frente antes do recast arrasta o segundo golpe por mais inimigos para dano em **AOE** (area-of-effect — dano que atinge vários inimigos numa zona, não só um alvo).
- **Ficar parada na sua própria zona de R depois que o slow acabou.** **Between Worlds** te tranca visualmente em uma área marcada; assim que o slow de entrada/saída expira, a zona é só uma placa dizendo "colapsem aqui". Pule para fora da borda no momento em que a kill estiver garantida.
- **Empilhar AP sem magic penetration.** Comprar ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** antes de ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ou ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** te custa dano contra qualquer um com até MR base. Penetration primeiro, AP cru depois.
- **Usar R para engajar quando o time não vai junto.** **R** é um commitment de cooldown longo — queimar à toa porque o time estava limpando uma side wave é o **throw** mais comum (jogar uma partida ganha fora com um commit imprudente). Pingue o engage três segundos antes de castar para o time ter tempo de virar para a direção certa.

## Dica avançada

Use a borda do realm-hop da **R** como ferramenta de **kite** — kitar significa dar dano enquanto recua, para o inimigo não fechar a distância — e não só como engage. Conjure **R** atrás de um inimigo em fuga para a zona de slow fechar a linha de escape, depois pule pela área para cortar o ângulo dele. O slow na entrada e na saída faz com que a única rota segura para sair da área seja o caminho longo — geralmente longo o suficiente para você acertar uma **Q** mais um auto-attack e fechar a kill.
