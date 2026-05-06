---
title: "Fizz Mid Build & Guia — Patch 16.9"
slug: "fizz-mid"
language: "pt-br"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Guia Fizz mid para League of Legends Patch 16.9: build de assassin AP, matchups chave, power spikes, erros comuns e uma dica avançada sobre o timing do E."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Atravessa unidades (minions não bloqueiam) e recebe uma redução fixa de dano de cada fonte. Ajuda a desengajar cortando pela própria onda."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Dash direcionado de 550 de alcance através de um inimigo. Causa dano mágico e aplica efeitos on-hit (passivas de item que ativam a cada auto-attack, como o spellblade da Lich Bane). Gap-close principal, cooldown curto."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Passiva: suas auto-attacks fazem o inimigo sangrar dano mágico em 3 segundos. Ativa: potencializa sua próxima auto para dano mágico bônus. Matar um alvo com W ativa reseta o cooldown para 1 segundo."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Pula sobre o tridente: 0,75s untargettable, depois bate no chão para dano mágico AOE e um slow. Reativa para dar outro dash em vez do slam (sem slow, área menor). Sua única escape e o coração do combo."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Skillshot linear de longo alcance (1300). Gruda no primeiro champion atingido, lentifica e depois um tubarão erupciona arremessando o alvo no ar. Dano e slow escalam com a distância percorrida pelo peixe."
      dd_spell_id: "FizzR"
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "primeiro item alternativo contra comps de poke ranged onde você precisa de outro dash para chegar à back line"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra lockdown de CC pesado (Lissandra R, Rell ult): a stasis deixa a R fish detonar antes de você morrer"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Annie stun, Twisted Fate gold card, Malzahar suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap assim que qualquer alvo prioritário comprar um item de magic resist"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Encontre squishies isolados nas side lanes após a Lich Bane. Lance R fish no alcance máximo, então Q + W + AA spellblade para apagá-los. Roame com a wave do lado inimigo."
  weakness: "Squishy melee com um único ciclo de engage. Se E ou R estão em cooldown você não tem escape nem segundo commit; o CC focado fecha o combo antes da R fish aterrissar."
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
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Magos imóveis sem dash"
      reason: "O Q de Fizz dá dash neles por instinto e o E garante 0,75s de untargettability para dodgear o feitiço chave. Sem um dash de escape eles não respondem ao all-in depois que a R fish gruda."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Artilharia de longo alcance sem mobilidade"
      reason: "A R fish chega a 1300 unidades: pune posicionamento no alcance máximo. Quando Fizz dá commit com Q + E eles não têm dash para resetar distância e precisam absorver toda a burst window."
    - examples: ["annie", "syndra"]
      archetype: "Magos close-range com engage telegrafado"
      reason: "O burst deles exige avançar com tell lento (stun-buffer da Annie, setup do E da Syndra). Fizz E na cast window deixa ele untargettable e o combo passa em branco."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Mids tanky com hard engage"
      reason: "As resistências cortam o burst do Fizz pela metade (o W de Galio reduz ~50% do dano mágico, a passiva-shield de Malphite bloqueia o proc do W). Os dois têm hard engage no 6 que pune Fizz quando ele dá commit primeiro."
    - examples: ["lissandra", "malzahar"]
      archetype: "Magos com CC point-and-click"
      reason: "A R de Lissandra é stasis point-and-click (sem skillshot para dodgear com E), a R de Malzahar suppressa atravessando o recast do E. Ambas waveclear, então Fizz não consegue zonar elas em lane."
    - examples: ["pantheon", "talon"]
      archetype: "Bullies de lane early-game"
      reason: "Eles out-tradam Fizz nos níveis 1-3 antes do power spike de nível 6. O stun do W de Pantheon e o Q escudado pokam cada passo à frente; o Q de Talon iguala o alcance do Q de Fizz com custo de mana menor."
---

## Visão geral

Fizz é um assassin AP melee que vive ou morre no timing do **Playful / Trickster (E)**. O kit dele é de curto alcance, alto burst (dano concentrado em 1-2 segundos em vez de espalhado no tempo) e escorregadio: uma janela de 0,75 segundo em que ele não pode ser alvejado, um dash de cooldown baixo e uma ult-peixe de longo alcance que trava um alvo prioritário. A mid lane combina com ele porque o river é curto — ele consegue engajar a partir do nível 6 com **Q-E** dentro do **R**, dodgear counter-CC no meio do combo e sair com o recast do **E**.

O game plan é sobreviver na lane até o power spike de dois itens (Lich Bane + Sorcerer's Shoes), depois caçar picks (eliminar um inimigo isolado fora de teamfights) em alvos squishy (champions com HP baixo e sem stats defensivas — morrem rápido sob burst) nas side lanes. Ele mesmo é squishy, não tem waveclear e a única escape (**E**) começa com cooldown de 16 segundos no rank 1 — perdê-la sem valor pune ele duro. Fizz prefere alvos individuais para apagar do que teamfights 5v5, onde o CC focado fecha o combo antes da R fish aterrissar.

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** no lugar contra matchups de poke ranged pesado (harass à distância que vai sangrando HP) como Xerath ou Vel'Koz.

**Itens core (em ordem):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — seu power spike principal (o momento em que o seu dano sobe de categoria e você pode brigar de uma posição de força). Sinergia com o pattern Q-AA: cada **Q** triggera o efeito spellblade na próxima auto-attack, quase dobrando o burst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetração mágica fixa para os alvos squishy que você mais quer apagar.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra mais uma HP-threshold passive (passiva de item que ativa só quando o alvo está abaixo de ~35% HP) que casa com os executes da R fish.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling late-game. Seu slot de maior AP e o item que transforma squishies em alvos one-shot.

**Itens situacionais:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primeiro item alternativo se você precisa de um gap-close extra (jeito de cobrir distância até o inimigo) para alcançar uma back line de poke ranged que o **Q** sozinho não fecha.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra lockdown de CC pesado (Lissandra R, Rell ult): a stasis deixa a R fish detonar antes de você morrer.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Annie stun, Twisted Fate gold card, Malzahar suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que qualquer alvo prioritário comprar um item de magic resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são aceitáveis quando o **E** vira seu cooldown mais importante (matchups muito combo-dependentes).

**Skill order:** Maxe **E** primeiro (untargettability + scaling de dano AOE — AOE significa *area of effect*, o feitiço acerta tudo que estiver dentro de uma zona), **Q** em segundo (cooldown reduction = mais dashes por luta), **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Árvore primária **Domination** com **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Secundária **Sorcery** com **Manaflow Band** e **Scorch**. Electrocute encaixa perfeito na janela de três golpes Q-AA-W: cada all-in (commit total no combo até a kill ou a escape) procca ela.

## Matchups principais

- **Annie:** Engage telegrafado. A passiva da Annie stuna o próximo feitiço depois de cada quatro habilidades que ela lança — você vê quatro pequenas marcas azuis se acumulando ao redor dela. No momento em que as quatro marcas aparecem, ela está carregando um all-in. Pule com **E** enquanto ela lança o stun; quando você aterrissar, o combo principal foi desperdiçado e o trade é seu.
- **Yasuo / Yone:** O Wind Wall do Yasuo (uma parede que bloqueia feitiços ranged que a atravessam) para projéteis, mas **Q**, **E** e **R** do Fizz não são projéteis bloqueáveis. Out-trade (sai do trade em vantagem) com **W** ativa nas auto-attacks; a parede deles é uma mecânica desperdiçada contra você.
- **Lissandra:** Hard counter. O **W** dela é um AOE (area of effect — acerta tudo numa zona) de root point-blank, e o **R** é stasis point-and-click (feitiço sem skillshot para dodgear: ela te clica, o feitiço aterrissa). Nenhum dos dois é um skillshot (feitiço não-automático que voa em linha ou área, dodgeável andando) que você dodgeia com **E**. Segure o **E** para o cast do **W** dela, nunca all-in sem **R** disponível, e procure picks nas side lanes em vez disso.
- **Galio:** Stats de tank e uma passiva de magic damage reduction no **W** que corta seu burst completo pela metade. Pare de tentar matar ele solo; gaste mana shovando a wave (empurrando seus minions até a torre inimiga para que não venham livres até você) e roame (sai da lane para ajudar aliados em outra parte do mapa) bot ou top assim que **R** estiver online.
- **Pantheon:** Pune você pré-6. O stun do **W** e o **Q** escudado out-tradam nos níveis 1-3. Fique atrás da sua wave e tradem só quando o **W** dele estiver em cooldown. O matchup vira no 6 quando você tem **R**.

## Power spikes e condições de vitória

- **Nível 2:** Com **E** + **Q** você tem um ciclo garantido de dash + slow + dano AOE. Se o inimigo avançar para last-hittar um melee minion, **E** em cima dele e libere **Q-AA** para um trade vencedor (uma troca rápida de golpes em que você sai em vantagem).
- **Nível 6:** O primeiro **Chum the Waters** desbloqueia os all-ins. O combo **R-Q-W-AA-E** apaga qualquer mid laner squishy mesmo só com os componentes base de Lich Bane comprados. Roame bot lane depois de shovar a wave: com os minions empurrados para o lado inimigo, eles perdem mais tempo defendendo do que você perde saindo da lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minuto 11-13):** Spike de burst (o momento em que o seu dano dá um salto repentino). Seu spellblade Q-AA tira aproximadamente 40% de HP de um squishy num único cast. Essa é a janela em que você deve estar roamando agressivo atrás de picks em vez de fazer 1v1 na lane.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Seu combo completo one-shota qualquer squishy que não comprou nenhum item de magic resist. Force objective fights aqui; negue a vision (mate as wards inimigas para que não tenham olhos no mapa) do lado do seu time para que o inimigo não veja seu flank (entrar no fight por um lado que não cobriram).

## Erros comuns

- **Usar E antes do commit deles.** **E** é sua única escape. Se você pular sem antes baitar o CC deles, come o feitiço ao aterrissar. Espere eles soltarem a habilidade chave — *aí* sim pule.
- **R fish de muito perto.** O dano e a força do slow do peixe escalam com a distância percorrida antes de grudar. Lance no alcance máximo de 1300 para que acerte com dano cheio e o slow dure toda a janela de detonação.
- **All-in dentro de 2+ inimigos.** Fizz tem um único ciclo de engage (commit total num único combo). Se um segundo alvo aparece no meio do combo, você não tem uma segunda R fish, não tem uma segunda escape, e dobra sob CC focado. Procure alvos isolados nas side lanes, não 5v5 mid.
- **Esquecer W no chase.** Matar um alvo com **W** ativa devolve mana e baixa o cooldown para 1 segundo — você consegue encadear outra auto-attack potencializada num segundo alvo instantaneamente. Ative **W** antes do golpe fatal sempre que tiver um alvo de follow-up por perto.
- **Maxar W primeiro em lanes normais.** **Q** e **E** carregam seu dano e o timing do combo; o bleed do **W** é DPS sustentado que conta em trades longos, não em janelas de burst. Default: maxe **E** primeiro.

## Dica avançada

Pratique o **R-Flash combo** (R + Flash). Lance o peixe pra frente e use **Flash** imediatamente na mesma direção: o peixe aterrissa muito além das 1300 unidades naturais, te dando uma catch garantida em um alvo que se acha fora de alcance. Use para picks através de paredes ou para abrir objective fights de ângulos inesperados. A janela cast-to-Flash é curta — binde **Flash** na sua segunda tecla (D) por memória muscular e treine no practice tool até o timing ficar automático.
