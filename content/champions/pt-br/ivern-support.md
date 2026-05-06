---
title: "Ivern Support Build & Guia — Patch 16.9"
slug: "ivern-support"
language: "pt-br"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Guia do Ivern support no Patch 16.9: build de enchanter, vision com brush, setups de root com Q, peel da Daisy e matchups principais da bot lane."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Support de setup"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Não pode atacar monstros da jungle, e eles não atacam ele. Planta brotos nos camps que se libertam sozinhos — gold grátis até de bot."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot linear longo que prende o primeiro inimigo atingido. Aliados que atacam o alvo preso dasham até ele. Recaste para você dashar."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiva: dentro de brush, autos causam dano mágico bônus (você e aliados próximos). Ativa: cria um brush em qualquer lugar para vision e zona de dano."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Escuda um aliado. Após 1.5s o escudo explode com dano mágico e slow nos inimigos próximos. Se não acertar ninguém, o escudo se renova pela mesma duração."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoca a Daisy, um golem aliado tanky. O terceiro auto consecutivo dela no mesmo alvo lança um knockup em onda. Recaste para reposicionar."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "contra teamfights agrupados de late game onde AOE pesa mais que peel single-target"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target pesado em você (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps de heal-stacking (Soraka, Yuumi, Aatrox, Vladimir bot lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Use os brushes laterais para emboscada: pré-posicione o W para vision, atire Q da fog e seu ADC dasha no alvo preso. Após o 6, roame mid com Daisy e snowballe o mapa."
  weakness: "Squishy, sem peel contra hard engage multi-alvo. Um Q errado em lane te força a backar até o cooldown — os 14s de Q rank 1 são a maior janela morta de qualquer support roamer."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primária: Summon Aery viaja em cada E até o ADC e procca também no Q root para dano em trade. Manaflow Band paga o spam de E, Transcendence passa o haste de 40 para Q mais frequente, Scorch fecha a janela de poke quando a lane estabiliza."
    secondary_rationale: "Resolve secundária: Font of Life ativa em cada Q root — seu ADC heala ao atacar o alvo preso, transformando um setup em dano mais sustain. Revitalize amplifica Aery e o refund de E quando não acerta ninguém."
    secondary_alternative: "Se seu time precisa de mais roams para o mid e o uptime de Flash importa, troque Resolve por Inspiration com Magical Footwear (boots upgradadas grátis no minuto 12) e Cosmic Insight (haste de summoner — mais Flash e Ignite por jogo)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports que avançam para jogar skillshots"
      reason: "Eles precisam andar pra frente até o range do Q para acertar o hook — o Q do Ivern + dash do ADC pune o windup com root garantido antes do hook sair da animação de cast."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mages support imóveis de poke"
      reason: "Não têm dash. Q do brush + follow-up do ADC apaga eles; o W ativo dá ao Ivern uma zona vision-e-dano grátis que eles não igualam sem queimar summoners."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Enchanters puros sem lockdown"
      reason: "Perseguem o ADC com heal e shield mas não têm peel contra setup root; o Q pega o carry, o slam da Daisy segue, e o enchanter não desfaz um root de 1.75s."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "Tank engagers de all-in"
      reason: "Flashan pra frente e encadeiam CC no ADC antes do Ivern acertar o Q. Sem peel contra engage multi-CC; um único E shield quebra na hora sob uma stun chain em 2 alvos."
    - examples: ["lux", "zyra"]
      archetype: "Mage supports de zone control / longo alcance"
      reason: "O E da Lux corta os ângulos de brush do Ivern e poke fora do range do Q; o seed-and-plant da Zyra zoneia melhor que a passiva W do Ivern sem nunca avançar."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Supports de peel anti-CC com cleanse ou eat"
      reason: "O E da Morgana spell-shielda o root do Q completamente, anulando o setup inteiro; o W de Tahm Kench come o ADC pra fora do raio do slam da Daisy antes do terceiro auto."
---

## Visão geral

Ivern como support é um dos picks mais incomuns da bot lane: um enchanter capaz de gerar brush onde quiser, prender um campeão pelo mapa todo e invocar um golem tanky no nível 6. A passiva impede você de atacar monstros da jungle, mas não impede de passar pela jungle bot side nos resets para plantar sementes de **Brushmaker (W)** em Krugs ou Wolves — gold grátis enquanto seu ADC empurra a wave. Você é squishy, não tem escape e morre em trade 1v1 — mas nenhum outro support consegue criar uma parede de brush no meio de um fight, negar vision e converter um único Q em uma kill garantida do jeito que o Ivern faz.

O game plan: pré-posicione o W brush no river bot ou no tri-brush antes da wave chegar, atire o Q de dentro desse brush para o inimigo nunca ver o cast, solte o E no seu ADC no momento em que ele dasha no alvo preso, e após o nível 6 rotacione para o mid com a Daisy para picks cross-map. Os fights não se vencem pelo dano do Ivern — vencem pelos setups dele, com o carry fazendo a kill de fato.

## Build recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. World Atlas é o único starter de support viável — auto-upgrade pelas etapas de quest até ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e por fim ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest item de support, gold via assistências e minion executes. Não dê last-hit em minion; deixe o ADC farmar.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste deixa Q e E quase sempre disponíveis.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Seus shields e heals criam um efeito em cadeia que escala o healing a cada proc consecutivo — ideal para um enchanter que escuda, slowa e re-escuda a cada 7-11 segundos.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando o E escuda o ADC, a passiva do Censer dá attack speed e on-hit magic damage para ele. Soma com o bônus de brush do W quando o ADC luta dentro ou perto do brush.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — segundo item de shield-trigger. Dá ao aliado escudado AP extra e ability haste por alguns segundos.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanse ativo no ADC. Resolve cadeias de CC single-target pesadas que nenhum shield aguenta.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — vs fights agrupados de late game onde o heal/dano AOE de time vira mais a luta do que um cleanse de Mikael's.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs comps de AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo). Um E não escuda quatro pessoas; o ativo do Locket sim.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — quando vão hard-CCar especificamente em você (Lux Q, Morgana Q, Zoe E sleep). O primeiro projétil é absorvido e você vive até soltar a Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comps de heal-stacking (Soraka mid, Yuumi support, Aatrox top). Seu dano mágico aplica o corte de heal em cada spell.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** padrão. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** são aceitáveis em comps de muito roam onde a velocidade de rotação importa mais que cooldowns em fight.

**Skill order:** Pegue **Q** no nível 1 para cheese-invade em brush nível 1, depois maxe **E** primeiro (o shield escala, o slow corta dives), **Q** segundo (CD menor = mais roots), **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Sorcery** com **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secundária **Resolve** com **Font of Life** e **Revitalize**.

## Matchups principais

- **Leona / Alistar:** Hard counter. O flash-engage deles encadeia CC no ADC antes do seu Q sair. Fique no max range do W brush, não pathe entre as waves onde o flash deles alcança e pré-escude o ADC quando os summoners deles estão up.
- **Thresh:** Skill matchup. Os dois supports querem setar um único hook/root para uma kill, mas o Ivern ganha a guerra do range (Q em 1125 unidades, hook do Thresh em 1100). Fique fora do range do hook, atire Q do brush; se ele hookar primeiro, solte E no ADC e ande embora.
- **Lux:** Bully de lane. Ela te poka com E-Q enquanto você não tem nada para devolver — seu Q é setup de kill, não ferramenta de poke. Trade só quando o Q dela está em cooldown; leve Banshee's Veil se ela continuar acertando o binding.
- **Yuumi:** Pick grátis. Ela tem que descolar para jogar skillshots e nesse momento é um alvo de 600 HP sem escape. Q no descolar, ADC dasha, kill grátis — repete a cada 14s.
- **Pyke:** Lute com ele no brush. Sua W passiva potencializa os autos seus e do ADC no brush; Pyke perde todo trade no brush porque o windup do Q dele é visível enquanto seu Q de dentro do W-posicionado está totalmente escondido.

## Power spikes e condições de vitória

- **Nível 2 (Q + E):** Primeira janela de all-in. Com um ponto em Q para o setup e E para escudar o dash, você e o ADC trocam um Flash garantido pela barra de HP do ADC inimigo. Pushe o nível 2 acertando juntos os casters da segunda wave.
- **Nível 6 (Daisy! online):** Janela de roam cross-map. A Daisy é tanky o bastante para tankear aggro de torre por 4-5 segundos, e o terceiro auto knockup dela é engage quando seu ADC tem Flash. Roame mid no momento em que tiver Daisy e a wave shovada.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completo (~ minuto 13-15):** As cadeias de shield/heal escalam. Em qualquer fight que dura mais de 4 segundos, seu output de healing passa o do support inimigo mesmo se for Soraka ou Sona.
- **Powerspike de 3 itens (Moonstone + Boots + Ardent ou Staff, ~ minuto 22-24):** Force fights por objetivo. Seu ADC bate mais forte e mais rápido que o deles graças aos seus shield triggers, e o cooldown do R da Daisy cai com a conclusão dos itens.

## Erros comuns

- **Dar last-hit em minions.** O proc de execute do World Atlas te dá o gold mesmo se a kill for do ADC — não roube CS dele. Fique uma fileira de minion atrás do ADC a menos que esteja setando freeze.
- **Whiffar o Q em long range sem follow-up.** Q é 14s no rank 1 — um cast errado significa 14 segundos sem botão de kill. Se o inimigo está dodgando, ande primeiro para um brush e atire de um ângulo mais fechado que ele não espera.
- **Castar W brush em fight em vez de pré-posicionar.** Brush criado em fight é mal e mal um tool de vision — o valor está em pré-posicionar: jogue um no tri-brush 5 segundos antes de um roam, ou no mid-river antes de uma call de Drake. Brush em fight é reativo quando o kit te quer proativo.
- **Soltar Daisy em max range em teamfight.** A Daisy precisa alcançar um alvo e acertar três autos consecutivos para o knockup. R em 1500 unidades = ela anda 4 segundos antes do primeiro auto — nesse ponto o fight já acabou. R atrás da linha inimiga, não "para causar dano".
- **Tentar peelar um-vs-vários só com o E.** O E escuda um alvo. Contra AOE engage que pega ADC + mid laner + você, um shield só não dá. Planeje Locket of the Iron Solari já no draft quando ver a wombo comp.

## Dica avançada

Use o **W brush ativo** para fabricar ângulos de Q que o inimigo não consegue dodgar. Padrão clássico: posicione o W brush 600 unidades à sua frente, ande para dentro do brush (você fica invisível para o inimigo se ele não tiver vision na patch), atire Q de dentro do brush — o projétil sai de uma posição que o inimigo não tinha como prever porque ele não vê o cast. É funcionalmente um root grátis de 1125 de range sem precisar de fog, e é por isso que Ivern brilha em duo com Caitlyn, Senna ou Jhin: qualquer ADC que quer atacar de longe ganha um dash grátis para um setup de kill garantido que o inimigo não pode preparar.
