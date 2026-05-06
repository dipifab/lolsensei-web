---
title: "Brand Jungle Build & Guia — Patch 16.9"
slug: "brand-jungle"
language: "pt-br"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Guia Brand jungle para League of Legends Patch 16.9: rota de smite, clear burn-mage, janelas de gank, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "As habilidades do Brand colocam fogo no alvo (dano em 4s, até 3 stacks). Com 3 stacks o blaze detona como pequena explosão AOE que reaplica os efeitos das spells."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linear de dano mágico. Se o alvo já está ablaze, é stunado — seu lock de gank e setup de stun em skirmish."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zona AOE atrasada após um tell curto. Alvos ablaze recebem +25% de dano. Principal ferramenta de clear da jungle."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosão alvo que ricocheteia em inimigos próximos. Se o alvo primário está ablaze, o raio de propagação dobra — bounces entre camps aceleram seu clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Bola de fogo de longo alcance que ricocheteia até 5 vezes entre inimigos, priorizando ablaze. Dano massivo em skirmishes ao redor da pit do drake e dos grubs."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers de early game (Lee Sin, Xin Zhao, Hecarim, Diana) — a stasis cobre sua mobilidade zero durante o gap-close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quando você está na frente e o time inimigo não tem Magic Resist — a passiva de move-speed permite kitar em skirmish"
    - dd_id: "3135"
      name: "Void Staff"
      against: "troque assim que um alvo prioritário fechar o primeiro item de Magic Resist (Mercury's Treads conta)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra engages de CC mágico single-target (Ahri R, Lissandra R, Nautilus hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish ao redor das pits de objetivo com R ricocheteando entre inimigos agrupados. Gank lanes após pushar com E (a propagação prepara um Q stun de graça). Power-spike: minutos 8-18."
  weakness: "Clear mais lento entre as opções AP antes de Liandry's, sem escape, sem sustain de jungle inato. Fraco contra invades early de junglers móveis e contra junglers que matchem o AOE com hard CC."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primária: Arcane Comet proca em cada hit de W ou E, somando burst de graça em cima do blaze. Manaflow Band é obrigatória — Brand jungle morre de fome de mana no early. Transcendence empurra ability haste além de 40%, Scorch fecha camps e ganks com pouco HP."
    secondary_rationale: "Resolve secundária: Second Wind te sustenta entre camps sem comprar potions (Brand não tem sustain inato como Fiddlesticks ou Warwick). Overgrowth dá HP bônus que escala com monstros mortos — counter direto à sua fragilidade sem defesas."
    secondary_alternative: "Contra comps que invadem pesado no early (Lee Sin + Pyke roam, Elise + Galio), troque Resolve por Inspiration com Biscuit Delivery (sustain de mana nos seus clears mais fracos) e Cosmic Insight (mais uptime de Smite ao redor dos drakes)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Tanks de group-engage sem escape"
      reason: "Quando o R deles cai, o mesmo monte de inimigos está dentro do seu W. R ricocheteia entre cada champion agrupado e sua resposta ao engage deles é um teamwipe em vez de um 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruisers que precisam comprometer pra frente"
      reason: "Eles entram no seu time pra dar dano e não têm disengage; o E do Brand acende o blaze, o Q stuna no momento em que te alcançam, e o R locka o segundo alvo antes que possam recuar."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Junglers dependentes de channel ou stealth"
      reason: "Brand interrompe o channel de fear/ult da Fiddlesticks com o Q stun no ablaze e revela a posição pre-channel da Eve com prefires de W; ambos dependem de setups longos que Brand quebra com uma rotação."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Skirmishers de early game com mobilidade"
      reason: "Eles invadem Brand no level 3 antes de Liandry's estar online. Brand não tem escape: a chain Q + W do Lee Sin, o rappel da Elise e o dash do Graves passam por cima do skillshot Q, e o clear é lento demais pra reembolsar o fight."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Junglers assassins móveis"
      reason: "Eles blinkam/dashtam por cima do projétil do Q, então Brand não consegue acertar o stun, e depois o burstam no melee onde ele não tem peel pra si mesmo. Até Zhonya's só atrasa o inevitável num 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Junglers que negam vision no gank"
      reason: "Eles passam pelas wards das quais Brand depende (sem counter-vision inato, sem flash-engage). O R do Nocturne corta a vision do seu time; o Q do Shaco passa stealth pelas wards. Brand não consegue pre-mirar o Q se não vê o inimigo chegando."
---

## Visão geral

Brand jungle é um **AP skirmisher** construído para fights de objetivo e ganks pós-6, não para clears rápidos ou solo invades. O kit é idêntico ao do Brand mid — coloque fogo nos alvos, stune ablaze com **Q**, faça **R** ricochetear entre inimigos agrupados — mas o papel é diferente. Como jungler você troca a prioridade de lane (a vantagem que os laners ganham quando pushiam a wave primeiro) pelo controle do river: cada fight de drake, cada spawn de grub (um "grub" é um dos pequenos monstros neutros na pit do void que dá ouro e um bônus para o time que mata), cada skirmish de Scuttle (Scuttle = o caranguejo neutro do river que dá vision e um pequeno buff) é uma chance do **R** ricochetear entre três ou quatro inimigos agrupados e transformar um fight equilibrado num teamwipe.

O plano de jogo é rígido para os padrões de jungle. Clear os três primeiros camps full-clear (red → krugs ou blue → gromp dependendo do side), gank uma lane no level 3 só se ela tiver uma janela limpa de **W → Q stun**, recall pelos componentes de **Liandry's Torment**, e do minuto 8 em diante camp o próximo objetivo. Brand não tem escape, não tem dueling power no early, e o clear single-target mais lento entre os junglers AP — invades acabam com sua partida se você não wardar as entradas da sua jungle. A recompensa é o spike pós-6: **Pyroclasm** num fight agrupado no river é uma das ultimates de maior dano do jogo, e o kit faz uma pergunta ao time inimigo que ele precisa responder com um disengage que muitas vezes não tem.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default para junglers ranged — dá o pet de smite que potencializa o clear de camps e concede ouro) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Itens core (na ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade da quest do Hailblade (auto-evolui por volta do minuto 3-4 quando você acumula XP de jungle suficiente). Companion default para junglers AP burst: proc extra de dano mágico no próximo basic attack depois de um cast, alinhando perfeitamente com o blaze do Brand.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. O burn em porcentagem de HP castiga as pools de objetivos (drake, baron, herald) e empilha em cima de cada tick do blaze.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat, o power spike mais barato entre os itens core.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — o slow em cada hit de spell fecha a maior fraqueza do Brand (sem chase, sem escape). Deixa você andar em cima de quem tenta kitar e gankar sem Flash.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling do late. Compre como quinto item, exceto se estiver 4+ kills à frente, caso em que rusha antes para snowballar ("snowball" = vantagem inicial que cresce: kill → gold → item → mais kills).

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers de early game (Lee Sin, Xin Zhao, Hecarim). A stasis é a única resposta que o Brand tem quando uma cadeia de dashes atravessa a frontline (os tanks e bruisers da frente que normalmente absorvem golpes por você).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quando você está na frente e o adversário ainda não começou a comprar Magic Resist. A passiva de move-speed depois de cada cast permite ao Brand kitar em skirmish ("kite" = recuar enquanto ataca, mantendo a distância).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um alvo prioritário fechar o primeiro item de Magic Resist. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (as botas de Magic Resist) contam como esse primeiro item de MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra engages de CC mágico telegrafados (Ahri R, Lissandra R, Nautilus hook).

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. Troque por ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se o time inimigo tem 3+ ameaças de hard CC com dano mágico.

**Skill order:** Maxe **W** primeiro (maior dano base e principal ferramenta de clear), **E** em segundo (boost de clear-speed entre camps e propagação no gank), **Q** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Sorcery** com **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundária **Resolve** com **Second Wind** e **Overgrowth** para sustain na jungle.

## Matchups principais

- **Lee Sin:** você perde todo 1v1 antes do level 6. A chain Q + W dele passa por cima do seu skillshot Q. Evite skirmishes solo pré-6, full-clear no lugar, e warde as duas entradas da sua jungle no minuto 1:30.
- **Hecarim:** matchup parelho. Ele te supera no kite mas se agrupa para os ricochetes do R em teamfights. Guarde Q para o momento em que ele commita pra frente — se você stunar um Hecarim em carga, todo o timer de engage dele é desperdiçado.
- **Karthus:** você out-ganka, ele out-scala. Force fights antes do minuto 16 ao redor do drake. Quando Defile estiver online (a passiva no rank máximo que pulsa ao redor dele — a forma de dano AOE com a qual ele mata da grey-screen) você não consegue andar no time dele sem Banshee's Veil.
- **Sejuani:** você come ela. R ricocheteia entre cada champion que ela puxa pra um amontoado com o ult; engage no engage dela. Pré-6 ela ainda te bate em 1v1 — não invada, agrupe com o mid pros fights de grubs.
- **Master Yi:** counter direto em 1v1. Force o fight 5v5 em rivers apertados (drake pit, baron pit) onde o W-cleanse dele não salva dos ricochetes encadeados de R. Compre Zhonya's Hourglass como segundo item se ele subir Wit's End.

## Power spikes e condições de vitória

- **Level 3 (W + E + Q):** primeiro power de gank. Com um ponto em cada habilidade o combo **E → W → Q stun** está online. Se o laner inimigo overestende sem Flash, você tem setup de kill.
- **Level 6 (R desbloqueado):** primeiro spike de objetivo. **Pyroclasm** num skirmish de Scuttle (fight do caranguejo do river) faz cerca de 50% do HP de um squishy por bounce. Lute todo Scuttle quando o R está disponível.
- **Liandry's Torment online (~ minuto 9-12):** velocidade de clear vira e o DPS (DPS = dano por segundo, aqui contra as pools de HP de drake/baron/grub) sobre objetivos dobra. Daqui em diante você deve ser quem inicia os fights de drake, não quem reage.
- **Rabadon's Deathcap online (~ minuto 24-30):** sequência completa de bounces do R one-shota squishies. Force fights de objetivo agrupados — Baron, Soul Drake, Atakhan ("Atakhan" = um boss de pit neutro do late game que aparece por volta do minuto 14; se não conhece, trate o spawn como um 5v5 forçado).

## Erros comuns

- **Tentar clearar como um fast-clear jungler.** Brand não tem sustain inato nem attack speed. Não corra com Lee Sin pelo Scuttle pré-6 — full-clear, chegue ao level 6, depois comece a gankar e skirmishar.
- **Q solta como poke na jungle.** **Q** sem ablaze é um projétil lento que erra em junglers que dasham. Sempre abra com **W** no spot onde eles vão pousar ou com **E** num minion que vai propagar o blaze.
- **Ultar um inimigo isolado.** Bounces de **R** são desperdício num único alvo — os saltos voltam pro mesmo champion com damage falloff. Guarde **R** para fights agrupados, não pra um chase 1v1.
- **Pular a vision na sua própria jungle.** Coloque Stealth Wards no tri-bush e na pixel brush no minuto 1:30. Brand não tem escape; um invade que você não vê chegar é uma kill de presente para um jungler móvel.
- **Smite-greedar objetivos sem R.** HP do drake e dos grubs escala; o dano do seu smite, não. Se você contesta um drake sem R off cooldown e o jungler inimigo tem, perde a guerra de smite e o drake.

## Dica avançada

Treine o **gank invisível com W**. Aproxime-se de uma lane pelo lado do river escondido pela fog of war ("fog of war" = a área não revelada fora da vision do seu time). Cast **W** no spot em que o laner inimigo vai *dar o próximo passo* (preveja o caminho pela wave) — Pillar of Flame tem um delay antes de cair, e o cast em si não quebra stealth nem vision. No momento em que o W cai e aplica blaze, jogue **Q** pela janela de stun. Bem feito, o inimigo nunca vê um champion no minimapa: ele vê um W aparecer nos próprios pés, fica rootado, e morre antes do colega conseguir pingar. Essa sequência é o que transforma um "Brand jungle decente" num Brand que carrega a partida.
