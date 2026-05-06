---
title: "Garen Top Build & Guia — Patch 16.9"
slug: "garen-top"
language: "pt-br"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Guia do Garen top no Patch 16.9: starter kit, build de juggernaut bruiser, principais matchups, power spikes, erros comuns e uma dica avançada para fechar o jogo."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Regenera HP fora de combate se você não tomar dano nem habilidades por alguns segundos. Define o padrão hit-and-retreat."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Burst de movement speed e cleanse de slows. A próxima auto silencia o alvo por 1,5s e dá dano bônus."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Passiva: stacks de armor/MR matando inimigos. Ativa: shield + tenacity, depois janela de mitigação residual."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "Spin AOE que dá physical damage aos inimigos próximos por 3s. Ferramenta principal de waveclear e DPS sustentado."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Executa um campeão inimigo com base nos HP faltantes. True damage bônus contra o inimigo mais kill-fed."
      dd_spell_id: "GarenR"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra top AP (Mordekaiser, Rumble, Vladimir) — passiva de shield mágico salva trades longos"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra comps com dois AD dealers; lida com o bleed que pune glass cannons em teamfight"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 3+ ameaças AP; passiva de movement speed te leva para os fights"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "terceiro item ofensivo top-tier se você estiver muito à frente e quiser o ciclo de ability haste"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Sobreviva à lane phase com Doran's Shield + sustain da passiva, escale até Stridebreaker, depois flank na side lane e use R para executar as carries kill-fed inimigas em teamfights."
  weakness: "Sem dash nem blink, sem CC duro à distância. Vulnerável a kite (Quinn, Vayne) e root long-range (Lissandra, pull do Mordekaiser). Cai na lane se você overextender sem stacks de W."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Visão geral

Garen é um juggernaut corpo-a-corpo cujo valor vem da presença prolongada: a passiva **Perseverance** regenera vida fora de combate, **Decisive Strike (Q)** permite fechar distância com cleanse, **Courage (W)** dá uma janela plana de tankiness mais uma passiva de stacks de resistências, **Judgment (E)** é o dano AOE e o waveclear, e **Demacian Justice (R)** executa squishies com base nos HP faltantes, com scaling de true damage contra o inimigo mais kill-fed. Ele é um dos campeões mais simples de executar mecanicamente, o que significa que todo o teto de skill está em **map awareness** (leitura de mapa) e **wave management** — não na execução do combo.

Na top lane ele quer trades curtos durante o ativo do **W** e ondas inteiras do seu lado da lane. É forte desde o nível 1 mas não imortal; não tem dash nem CC duro, então qualquer matchup que consiga fazer disengage à vontade (Quinn, Vayne) ou enraizá-lo de longe (Lissandra, pull do Mordekaiser) vai superar a lane phase dele se você overextender.

## Build recomendada

**Itens iniciais:** Doran's Shield + 1 Health Potion. Doran's Blade só contra tops à distância onde você precisa all-inar cedo para negar CS.

**Itens core (em ordem):**

1. **Stridebreaker** — slow no **Q**, ativa AOE para grudar em alvos que kitam, AD + HP úteis ambos.
2. **Plated Steelcaps** — a maioria das top lanes é pesada em auto-attack. Mercury's Treads só contra 3+ campeões com CC no time inimigo.
3. **Dead Man's Plate** — sinergia com o bônus de movement speed do **Q**, a passiva de impacto procca no seu padrão habitual de all-in.
4. **Sterak's Gage** — salva-vidas contra janelas de burst, scaling de AD que faz o **R** executar mais tarde do que sugere o threshold base.

**Itens situacionais:**

- **Maw of Malmortius** — contra top AP (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — contra comps com dois AD dealers (lida com o bleed que pune glass cannons).
- **Force of Nature** — contra 3+ ameaças AP; a passiva de movement speed ajuda você a chegar nos fights.
- **Spear of Shojin** — terceiro item ofensivo top-tier se você está muito à frente e quer o ciclo de ability haste.

**Botas:** Plated Steelcaps por padrão. Mercury's Treads contra Renekton+Lissandra+CC pesado.

**Ordem de skills:** Maxe **E** primeiro (DPS e waveclear), **Q** em segundo (slow + utilidade), **W** por último (a passiva escala bem sem pontos). Suba **R** no 6, 11, 16.

**Runas:** Primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Resolve** com **Second Wind** + **Unflinching**, ou **Inspiration** com **Magical Footwear** + **Cosmic Insight** para timing de botas em mapas de rotation.

## Matchups principais

- **Darius:** Você perde o nível 1, vence depois de Stridebreaker se evitar o pull do **E** dele. Compre Doran's Shield, jogue em torno do nível de **Q** pelo cleanse.
- **Fiora:** Counter forte contra ela até o 6 se você não levar vital. Comercie com **W** ativa para negar o valor do parry, depois disengage.
- **Quinn:** Skill matchup; ela kita com **Q** blind + **E** vault. Pegue Teleport, abra mão dos CS da primeira wave e roame mid a partir da wave 4.
- **Vayne top:** Seu pior matchup em sensação. Construa Plated Steelcaps no nível 1, leve Doran's Shield + Second Wind, e jogue para o jungler — você não consegue ganhar trades 1v1 depois do 6 nesse matchup.
- **Mordekaiser:** Lane lenta até o spike do death realm. Trades curtos, encaixe **Q** + **E** quando o **W** dele estiver em cooldown, e termine Maw of Malmortius antes do segundo item dele.

## Power spikes e condições de vitória

- **Nível 2:** **Q** + **E** desbloqueia um all-in de verdade. Se eles empurrarem a wave para você e seu jungler estiver no top side, essa é sua kill window.
- **Nível 6:** **Demacian Justice** te deixa finalizar alvos com HP baixo que antes saíam andando. Tracke as summoners inimigas; sem Flash, todo top corpo-a-corpo está em alcance de execute.
- **Stridebreaker timing (~ 11 minutos):** O controle de wave vira a seu favor. Slow shove, freeze ou split push dependendo do estado do mapa. **Q** + ativa é seguro de gap-close contra ganks.
- **Condição de ace no late game:** Com o scaling do **R** contra o inimigo mais kill-fed e Sterak's Gage, você se torna uma ameaça de flank que solo-mata as carries. Seu trabalho é carregar **E** no fog e **R** antes que façam peel.

## Erros comuns

- **Andar para frente com poucos stacks de W.** A passiva do **Courage** dá resistências por stack; com 0 stacks (ex.: acabou de respawnar), evite trades longos até recarregar nos minions.
- **Usar R como abertura.** **R** é para executar, não para fazer setup. Se você abre com ela, o cast time avisa o inimigo a fazer disengage e você perde o timer de kill.
- **E em wave parada.** Spinar com 3 minions quando você os derruba em 2 autos queima mana e mostra a rotação de cooldown para a lane. Guarde **E** para os trades.
- **Esquecer o silence do Q.** **Q** silencia por 1,5 segundo. Q-engage sempre num campeão em mid-cast (polymorph da Lulu, shield da Karma, R da Lissandra) — o silence interrompe o cast.

## Dica avançada

Quando uma carry inimiga fed dispara a prioridade de alvo do seu **R**, você pode flash-**R** no meio do teamfight mesmo se o support deles soltar um shield: o dano de execute do **R** é true damage no alvo prioritário, e a maior parte do orçamento de shield já foi gasta pelo burst do time antes do seu cast resolver. Reserve Flash para essa jogada; o ace que ela gera vale 2 fights de drake.
