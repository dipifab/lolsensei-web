---
title: "Akali Mid Build & Guia — Patch 16.9"
slug: "akali-mid"
language: "pt-br"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "Guia completo da Akali mid no Patch 16.9 do League of Legends: build de assassin AP, matchups da rota, power spike no nível 6, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Acertar um campeão com habilidade aplica uma marca. Sair do círculo potencializa o próximo basic attack com alcance e dano extra."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Cone de kunais que causa dano e aplica slow. Principal ferramenta de poke e trade. Custa energia, cooldown curto — use no cooldown durante os trades."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Zona de fumaça que torna Akali invisível para targeting e dá até +80 de energia máxima enquanto ativa. Agir dentro a revela. Solte W no meio da combo, não só pra fugir: o bônus de energia libera um Q a mais na rotation."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Pula pra trás e dispara shuriken que marca o primeiro inimigo atingido. Recaste para dashar até o alvo marcado. Marque só campeões, nunca minions."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Ulti em duas partes. R1 salta e causa dano; R2 dasha e executa inimigos com pouca vida. A execução escala com o HP que falta no alvo."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst single-target alto (Zed R, Veigar combo, LeBlanc): a stasis te mantém vivo até fechar com R2"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que qualquer alvo prioritário comprar item de Magic Resist — mantém o dano das habilidades contra alvos mais resistentes"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que apaga seu engage (Ahri charm, Lissandra R, Twisted Fate stun) — o spell shield come o primeiro impacto"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "em fights mais longas e composições com muitos bruisers, onde precisa de cura e durabilidade no lugar de burst puro"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Pegue alvos squishy isolados com o dash E1+E2, encadeie Q + auto-attack potencializado + combo de R para a execução. Roame para as side lanes sempre que tiver R disponível."
  weakness: "Waveclear fraca e alcance curto antes do nível 6: vulnerável a poke à distância e ganks de jungle. Sem CC duro e sem escape se W estiver em cooldown — pode ser presa e burstada antes da combo cair."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Visão geral

A Akali é uma assassin AP de burst: uma campeã construída para soltar muito dano em 1-2 segundos (o "burst", dano alto concentrado em uma janela curtíssima) sobre um único alvo. O kit dela é uma corrente de dashes — **Shuriken Flip (E)**, **Perfect Execution (R)** — montada em torno da janela de invisibilidade do **Twilight Shroud (W)**. Não usa mana, usa energia: cooldowns curtos importam mais do que o orçamento de recurso. A mid lane combina porque o river dá caminhos rápidos pra roamar (sair da sua lane pra fazer jogada em outra rota) até as side lanes, e o **R** no nível 6 transforma qualquer fight sem vision wards inimigos (objetos colocáveis que revelam uma área) em pickoff (eliminar um inimigo isolado do time dele).

O plano de jogo é sobreviver a uma fase de lane fraca (waveclear ruim — as habilidades dela são lentas pra limpar a wave de minions, e zero kill threat early) até o nível 6, e depois converter qualquer pequeno lead em roams e dives na torre. O segredo do campeão está no posicionamento do **E** — a E primeiro lança um shuriken; só o primeiro campeão inimigo atingido se torna o alvo do dash. Se você marcar um minion sem querer, perde o dash em toda a rotation de habilidades (o ciclo de Q + W + E + R lançadas uma vez cada).

## Build recomendada

**Itens iniciais:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. O Doran's Ring dá AP e mana regen que a Akali não precisa, mas o bônus de dano nos minions resolve a waveclear early fraca. Pule ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** a menos que a lane seja de muito harass de auto-attack.

**Itens core (na ordem):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (ativo que te lança em dash até o inimigo) com burst extra; combina com **E** e **R** pra engajar (abrir o fight) de fora do alcance.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (o dano das habilidades ignora uma fatia da Magic Resist do inimigo). Upgrade direto de dano pra finalizar squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra com dano bônus quando o inimigo está abaixo de ~40% de HP, alinhando perfeitamente com a execução do **R2**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game em todo o seu AP. O slot com mais AP do inventário.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra Zed, Veigar, LeBlanc ou qualquer adversário cujo burst chega na mesma janela que o seu. O ativo de stasis te deixa invulnerável e parado por ~2.5 segundos, fazendo você esperar o dano deles e finalizar com **R2**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — troque assim que qualquer alvo prioritário comprar um item de Magic Resist; mantém o scaling do dano.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra R, Twisted Fate stun); o spell shield come o setup deles.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primeiro item alternativo em fights longas contra composições cheias de bruiser; troca burst por dano sustentado e cura.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** é aceitável contra muito CC (Lissandra, Ahri, Galio).

**Skill order:** Maxe **Q** primeiro (dano principal e refund de energia, ou seja, energia que volta após o uso), **E** em segundo (cooldown menor no dash), **W** por último. Coloque um ponto em **R** nos níveis 6, 11 e 16.

**Runas:** As runas são bônus passivos que você escolhe antes da partida; uma árvore primária (5 runas) e uma secundária (2 runas). Primária **Domination** com **Electrocute** (burst extra ao acertar três habilidades em sequência), **Sudden Impact** (mais magic penetration depois de um dash), **Sixth Sense** para pressão de visão e **Ultimate Hunter** (cooldown menor no **R**). Secundária **Sorcery** com **Transcendence** (ability haste — habilidades voltam mais rápido) e **Gathering Storm** (scaling de AP no late). A Akali usa energia e não mana, então nada de **Manaflow Band**.

## Matchups principais

- **Galio:** Counter pesado antes do 6. A passiva dele potencializa os auto-attacks, e o **W** te taunta e bloqueia seu dive com **R**. Farme seguro até o nível 6, sinalize pro jungler e só commite quando o **W** dele estiver em cooldown.
- **Yasuo:** O **Wind Wall** dele bloqueia **Q** e o shuriken da **E**. Abra com o dash do ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** ou com a **E**, segure o **Q** até a Wind Wall cair.
- **Lux:** Você ganha dela no 1v1. Desvie do **Q** dela (skillshot linear longo e lento — habilidade não-automática, esquive andando de lado quando ela usar) com **E**, depois mergulhe no nível 6. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** se ela terminar o ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** antes do seu.
- **Twisted Fate:** Disputa de roam. Ele tem a melhor ferramenta de roam (o **R** dele teleporta atravessando o mapa), então você precisa empurrar a wave (forçar a linha de minions na torre inimiga) mais rápido do que ele consegue sair da lane. Rastreie o **R** dele com vision wards (objetos colocáveis que dão visão numa área) no river e no tri-bush (os três matos perto da rota mid).
- **Zed:** Matchup parelho. Ele ganha trades curtos antes do 6; depois do 6 seu **R** finaliza ele com pouco HP. Não vá all-in (entrar num confronto até a kill, sem retirada) a menos que ele tenha gastado as **W** das sombras; senão ele escapa do seu **R2**.

## Power spikes e condições de vitória

- **Nível 3:** Kit base completo (Q + W + E). Finalmente tem a combo dash + invisibilidade pra tradar (uma troca curta de habilidades na lane, não tentativa de kill) ou disengajar (sair de uma fight). Procure um trade curto pra pegar prio (quando sua wave está mais perto da torre inimiga do que a sua, te permitindo sair sem perder recursos) antes do primeiro gank do jungler (ataque surpresa do jungler inimigo entrando na sua lane).
- **Nível 6:** O primeiro **R** é o maior spike único da partida. Você ganha kill threshold contra qualquer alvo squishy (campeões de muito dano e pouca defesa, tipo os ADCs). Se o river não estiver wardado (coberto por vision wards inimigos), as fights no meio do river são kills grátis.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completo (~ minuto 12-14):** O dano full all-in já one-shota squishies pelo execute do R2 (o R2 finaliza eles quando o HP fica abaixo do limite). Roame pras side lanes assim que sua wave estiver empurrada na torre inimiga.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** O burst escala absurdamente. Force fights em torno de objetivos (Drake, Baron, torres) e procure picks na backline (a linha de trás do time, onde ficam os carries) usando **W** pra flanquear — entrar pelo lado que eles não estão olhando, geralmente atravessando fog of war não wardada (regiões do mapa sem visão).

## Erros comuns

- **All-in antes do nível 6 sem setup do jungler.** O dano de trade pré-6 da Akali é mediano — Q + auto-attack sozinhos não matam um adversário atento. Farme seguro, sinalize pro jungler, commite no 6.
- **Desperdiçar E1 em um minion.** O primeiro impacto do Shuriken Flip marca qualquer coisa que toque, minion incluso. Se a shuriken bater num creep, você perde o dash até o campeão atrás. Sempre angule a **E** pra que o campeão seja a primeira coisa tocada pela shuriken.
- **Auto-atacar dentro do W.** Agir (qualquer feitiço ou auto-attack) te revela por ~0.5s. Ficar dentro do **Twilight Shroud** e pokar de lá não te deixa invisível — use **W** pra desviar de um único skillshot (habilidade direcionada que dá pra esquivar se mexendo) ou pra quebrar visão antes de se reposicionar.
- **Queimar R1 sem plano pra R2.** R1 sozinha te planta no meio do time inimigo. Sempre tenha um alvo de R2 pronto — seja como golpe final, seja como dash de fuga.
- **Buildar itens de bruiser contra um time inimigo squishy.** Itens como ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** trocam burst por sustain. Contra um time de carries frágeis você quer burst puro (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**), não durabilidade.

## Dica avançada

Solte **Twilight Shroud (W)** no instante exato em que **R1** aterrissa. O shroud abre nos seus pés bem na hora em que você chega no meio do time inimigo, quebrando o target lock deles (forçando os inimigos a te selecionar de novo, porque você vira não-targetável por um instante) durante a meia janela de tempo antes que consigam te clicar de novo. Bem usado, isso te permite reposicionar pra execução do **R2** ou até cancelar o all-in se o trade parecer perdido — e a habilidade de peel do support inimigo (o feitiço que protege o carry deles) frequentemente cai no vazio porque você ficou não-targetável no meio do engage.
