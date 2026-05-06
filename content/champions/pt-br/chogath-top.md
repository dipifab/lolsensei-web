---
title: "Cho'Gath Top Build & Guia — Patch 16.9"
slug: "chogath-top"
language: "pt-br"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Guia do Cho'Gath top lane no League of Legends Patch 16.9: build tank-mago empilhando HP, runas Grasp, matchups chave, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Matar uma unidade recupera HP e mana. Takedowns em champions devolvem bem mais. Sustain grátis (regen de HP/mana entre lutas) em cada last-hit (golpe que mata o minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (habilidade não direcionada em linha) com 950 de alcance: lança inimigos pro alto, aplica slow e dano mágico. Poke (dano à distância em segurança) e engage (abrir a luta) — tell lento, antecipe o alvo."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Cone frontal (alcance 300): dano mágico e silence (bloqueia o cast de habilidades) por ~2,2s. Encadeie depois do knockup do Q em alvos melee."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (os próximos basics ganham um efeito bônus). Os próximos 3 basics aplicam dano mágico que escala com o HP máximo do alvo e aplicam slow. DPS principal contra tanks e waveclear (limpar a wave)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Execute (mata abaixo de um certo HP) single-target em true damage (ignora armor e magic resist). Ao matar, Cho'Gath ganha um stack permanente: mais HP máximo e modelo maior. Cap de 6 stacks por minion, sem cap em champion."
      dd_spell_id: "Feast"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra muito dano mágico ou cadeias de CC repetidas (Malphite R, Sylas, Lissandra) — troque dos Plated Steelcaps antes do primeiro back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 2+ ameaças AP (top AP + jungler AP tipo Diana/Ekko) — empilha MR e dá movement speed pra alcançar quem kita"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries de auto-attack com sustain (Vayne + Soraka, Master Yi + lifesteal) — aplica Grievous Wounds (50% redução de cura)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "como sexto item ao chegar em 5+ stacks de Feast — limite de HP do Warmog's Heart é trivial, a regen deixa pular backs"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra mages com stack de minions (Heimerdinger, Malzahar) e times AP agrupados — a aura limpa stacks e chunka a frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Empilhe Feast em cannons e kills pra inflar HP. Com 5+ stacks + Riftmaker + Spirit Visage você entra como segundo tank, absorve o foco (você é o alvo) e encadeia Q knockup em W silence no carry deles."
  weakness: "Sem dash, sem escape além do Flash. Tops ranged kitam (batem fora do seu alcance) o Q de 950. Vulnerável a ignite + heal reduction antes de stackear — perder a lane snowballa porque Feast precisa de farm."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve: Grasp dispara a cada 4s no melee (proc = passiva ativa), cura e empilha HP permanente — combina com a curva de HP+AP do Cho'Gath. Demolish derruba a torre mesmo em lanes perdidas, Second Wind regen do dano de poke, Overgrowth empilha HP a cada 8 minions."
    secondary_rationale: "Sorcery secundária: Manaflow Band sustenta o mana pra Q poke e E waveclear em lanes longas, Transcendence empurra o ability haste (cooldowns mais baixos) pra Q voltar quase toda wave em busca de um knockup."
    secondary_alternative: "Contra tops ranged de poke ou burst AP (Vladimir, Teemo, Kennen) troque Sorcery por Inspiration com Biscuit Delivery (sustain HP+mana grátis pré-6) e Time Warp Tonic (cura instantânea ao usar poção pra ficar na lane)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Bruisers melee de windup lento (lutadores HP+dano)"
      reason: "O knockup do Q interrompe as animações de commit (pull do Darius, E spin do Garen, cast do W do Sett). Carnivore mais o omnivamp de Riftmaker (cura tipo lifesteal em cada cast) ganha o trade; no limiar do Feast, R deleta com 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Divers melee móveis (pulam em você rápido)"
      reason: "Q knocka eles no meio do dash, quebra a combo. W silencia logo depois, bloqueando o segundo dash. R executa quando recuam low — não conseguem all-in (luta de compromisso total) sem Flash e leitura limpa."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Mages melee sem hard CC (stuns/roots)"
      reason: "Eles não têm lockdown instantâneo pra interromper o windup do Q. Você out-ranges o poke deles em distância segura, e o silence do W desliga os kits ability-reliant durante o all-in."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Tops ranged com poke e disengage (ferramentas de fuga)"
      reason: "Ficam além dos 950 do Q, recuam quando você avança e te chunkam pra meia HP antes do nível 6. Sem dash pra fechar e sem sustain além do Carnivore, perde prio (controle da wave) todo ciclo."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Duelistas melee móveis com dano contínuo"
      reason: "Fiora dá parry (bloqueia) no W silence, Jax E desvia do Q knockup, Tryndamere ignora R contanto que ulte primeiro. O dano contínuo deles vence o windup lento do Q; você chega no scaling do Feast tarde demais."
    - examples: ["gnar", "kayle"]
      archetype: "Late-game scalers (fracos no início, monstros no minuto 30)"
      reason: "O Gnar mini ataca o Q de fora do alcance, Kayle ramp-a pra autos em true damage que te deletam em teamfight. Os dois ganham o long game mesmo se o Cho stackear Feast — superam seu HP em dano até o minuto 30."
---

## Visão geral

Cho'Gath é um híbrido tank-mago que compra itens que dão tanto HP quanto ability power, e empilha HP máximo permanente com seu ultimate **Feast**. O kit dele combina um knockup de longo alcance (**Q**) com um silence melee (**W**), permitindo interromper as habilidades de engage dos bruisers melee na lane e travar os carries inimigos em teamfights. O dano que mais escala com a build vem de **Vorpal Spikes (E)**, que adiciona dano mágico baseado no HP máximo do alvo — ou seja, machuca mais tanks e bruisers fed do que squishies.

O plano de jogo é simples de descrever e exige paciência: farme seguro atrás dos minions, busque knockups com **Q** pra montar trades ou peelar ganks, e **nunca** abra mão da chance de **R** num minion low-HP (cada stack em champion é permanente, cada cannon morto com R vale +120 HP máximo pelo resto da partida). Quando chegar em 5+ stacks mais dois itens HP+AP, você vira um segundo tank que o time inimigo precisa forçar antes dos seus carries — é isso que ganha teamfights.

## Build recomendada

**Itens iniciais:** Doran's Shield + Health Potion. Doran's Shield dá 80 HP e regen pós-dano que sinergiza com a cura do last-hit do Carnivore.

**Itens core (na ordem):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — primeiro item completo. HP + AP + omnivamp (cura você por uma porcentagem de todo dano que causa, abilities ou autos). O ramp de dano vira true damage depois de 3 segundos de combate — perfeito pra trades longos.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão contra um top AD. Reduz o dano de auto-attack em 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — segundo item de dano. HP + AP + uma passiva de burn que aplica dano mágico em porcentagem do HP máximo ao longo do tempo. Empilha naturalmente com o slow do Q e o silence do W mantendo os inimigos no alcance dos ticks.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + magic resist + 25% de amplificação de cura e escudos. Multiplica a cura do Carnivore, o omnivamp do Riftmaker e qualquer escudo de aliado que receber.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + um slow em cada habilidade que acerta um champion. Empilha em cima do slow do Q e impede que alvos silenciados pelo W kitem antes do silence acabar.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra muito dano mágico ou cadeias de CC repetidas. Troque dos Plated Steelcaps antes do primeiro back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra times com 2+ ameaças AP. Empilha magic resist e dá movement speed pra alcançar quem kita.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries de auto-attack com comp de cura (Vayne + Soraka, Master Yi + Aatrox). Aplica Grievous Wounds (50% de redução de cura) em cada hit recebido.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sexto item quando você tem 5+ stacks de Feast. O limite de HP da passiva Warmog's Heart é trivial quando você empilha; a regen permite pular backs e roamar com HP cheio.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra mages com stack de minions (Heimerdinger, Malzahar) e times AP agrupados. A passiva de aura limpa waves empilhadas e chunka a frontline inimiga.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é padrão contra top AD, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra top AP ou muito CC.

**Skill order:** Maxe **Q** primeiro (slow, knockup, ferramenta principal de trade), **E** em segundo (waveclear e on-hit que rasga tanks), **W** por último (o silence é grande mas o dano por rank é pequeno). Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** primária **Resolve** com **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Contra top ranged de poke, troque Sorcery por **Inspiration** com **Biscuit Delivery** e **Time Warp Tonic**.

## Matchups principais

- **Darius:** Antes do 6 respeite a passiva W (5-stack bleed). Q nele antes que conecte o pull, depois saia. Depois do 6, Feast executa com ~30% HP — esse é o limiar pra committar.
- **Sett:** Q no frame de wind-up do W dele (o soco laranja). Se ele acertar W em você, aceite o trade e W-silencia ele pra bloquear o E grab. Botas Plated, Riftmaker primeiro — o ult dele é nível Mercury's Treads, considere Merc se ele estiver fed.
- **Teemo:** Counterpick. Pegue Doran's Shield + Second Wind, empurre a wave pra torre com E waveclear e peça gank do jungler. Compre ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** como primeiro item se a lane dele snowballar (depois suba pra Maw of Malmortius).
- **Fiora:** Matchup parelho-perdido. Ela dá parry no seu W silence — nunca jogue W pelado. Use Q pra interromper os dash trades, segure W pra depois que ela queimar Riposte.
- **Malphite:** Matchup parelho, ele escala pior que você. Não tem sustain e a Q de poke dele custa mana; trade com Q+W quando o mana dele estiver baixo. Atenção ao **R** dele depois do 6: interrompe o cast do seu **R**.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + E você consegue tradar agressivo: Q pro knockup, depois entra e queima 3 autos com E enquanto eles não conseguem se mover. Swing grátis de 35-40% HP se acertar Q.
- **Nível 6:** O primeiro Feast desbloqueia pressão de execute. Cooldown de 80 segundos, alcance 175 (melee + um passo). Se seu jungler aplicar qualquer CC num inimigo low-HP, você entra e R pra um stack permanente.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** A matemática do trade vira. Omnivamp mais a cura do Carnivore deixam você ficar e brigar com bruisers melee passando pela combo inteira sem dar back.
- **5+ stacks de Feast (~ minuto 20-25):** Você vira um segundo tank. Com Riftmaker + Spirit Visage + 5 stacks fica em torno de 3800-4200 HP efetivos. Entra na backline inimiga, come o burst e encadeia Q-W no carry deles.

## Erros comuns

- **Pular Feast nos cannon minions pelo gold.** Um stack de cannon vale +120 HP máximo pra sempre. Mesmo "perdendo" 60 de gold de minion, o HP escala mais do que o gold jamais conseguiria. Sempre R no cannon se nenhum champion estiver no alcance de execute.
- **Usar Q como poke sem follow-up.** Q tem wind-up de 0,65s; contra um alvo em movimento é preciso liderar uns ~meia largura de champion. Se não conseguir seguir com W ou auto, guarde Q pra engage ou peel.
- **Avançar pra last-hit sem spacing.** Cho'Gath tem 125 de movement speed base e zero dash. Se ficar em cima dos caster minions da wave, é all-in (engage com compromisso total) pelos bruisers móveis. Last-hit do fundo da wave.
- **Largar E no meio da luta.** Vorpal Spikes é toggle: fica ligado entre lutas enquanto tiver mana. Ative antes da luta começar pra que os 3 primeiros autos já tenham o on-hit pronto.
- **R-snipar um champion com HP cheio.** Feast com HP cheio causa ~600 true damage no rank máximo. É relevante mas você abre mão do cooldown de 80 segundos e da chance de stack permanente num minion. Guarde R pra executes ou panic peel.

## Dica avançada

Cancele o wind-up da auto-attack com **Q** pra baitar o Wind Wall do Yasuo ou Yone: comece o auto, veja o muro subir, depois lance Q no ponto pra onde estão andando. O Q skillshot é uma ruptura no chão que viaja por baixo do muro (o muro bloqueia projéteis, não efeitos no chão). A maioria dos champions ranged não diferencia auto-cancel de habilidade segurada, então você ganha um knockup grátis num alvo que pensava estar imune. O mesmo truque funciona contra **E** do Braum (Unbreakable) e **W** do Pantheon (frame de bloqueio do Shield Vault).
