---
title: "Kha'Zix Jungle Build & Guia — Patch 16.9"
slug: "kha-zix-jungle"
language: "pt-br"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Kha'Zix jungle no Patch 16.9: rota de clear, saltos em alvos isolados, escolhas de evolution (Q/E/R), build lethality, matchups, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Fora da visão, sua próxima auto em um campeão causa magic damage bonus e slow. Marca alvos isolados (nenhum aliado a 425 unidades) para amplificar a Q."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Atinge um alvo com physical damage; dano massivo em alvos isolados (nenhum aliado próximo). Sua principal ferramenta de duelo — a evolution dá range estendido."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Espinho linear que dá dano ao acertar e te cura na área de explosão. Único sustain na jungle. A evolution adiciona slow, vision ao acertar e cone triplo."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Dash mirado que causa dano ao pousar. A evolution adiciona 200 de range e reseta o cooldown em takedown — o padrão assassin de reset vive aqui."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Você fica invisível por um instante, ganha speed bonus e pode recastar uma vez para re-stealth. Cada rank evolui uma habilidade (Q/W/E/R) de forma permanente."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contra comps que pedem waveclear e pressão em side lane"
    - dd_id: "6692"
      name: "Eclipse"
      against: "contra comps com muitos bruisers (Sett, Aatrox, Mordekaiser): escudo + cura no trade"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "contra setups pesados de vision (supports enchanters, junglers de vision)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap do Lucidity contra magic CC pesado (Ahri, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap contra comps de duplo AD (duas ameaças físicas tipo Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Encontre alvos isolados (nenhum campeão inimigo a 425 unidades) e burste com E + Q + AA. A E evoluída reseta no takedown e dá saltos extras em skirmishes."
  weakness: "Se o inimigo fica agrupado, o dano da Q despenca — o amplificador de isolation depende do posicionamento. Hard CC (Malzahar R, Skarner R) cancela o jump e você não tem escape."
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Carry junglers squishy sem hard CC"
      reason: "Caminham sozinhos para power-farmar; o E + Q isolada do Kha'Zix os apaga antes que respondam. Sem CC, não há como parar o dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Junglers de clear lento e baixa mobilidade"
      reason: "Kha'Zix invade mais rápido com E e chega ao Scuttle Crab no tempo. Counter-jungle os camps de trás depois de cada Drake — eles giram lento demais para punir."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Backlines ADC imóveis ou pouco móveis"
      reason: "No late, sua E evoluída pousa na backline pulando muros. Sem dash, eles não se reposicionam durante a janela de invisibilidade da R."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Bruiser junglers front-loaded com CC point-and-click"
      reason: "O CC deles interrompe a animação do jump e te trava. Pre-6 te ganham no duelo na jungle deles: um invade nível 3 é uma kill grátis."
    - examples: ["malzahar", "skarner"]
      archetype: "Campeões com suppression ou lockdown unstoppable"
      reason: "A suppression não é removida pelos Mercury's Treads; assim que te marcam, você não consegue R out e a janela de invisibilidade é desperdiçada."
    - examples: ["sett", "tahm-kench"]
      archetype: "Bruisers tanky com peel embutido para o carry"
      reason: "O W ou grab deles tira o carry da sua janela de isolation antes da Q pousar. Você precisa de um 1v1 limpo e eles removem essa opção."
---

## Visão geral

Kha'Zix é um assassin AD melee (um assassin é um campeão de altíssimo burst feito para apagar um único alvo squishy — squishy = um campeão com poucas defesas, tipo ADCs e a maioria dos magos) cujo kit inteiro gira em torno de encontrar alvos **isolados**. Isolado, no caso dele, significa que nenhum campeão aliado está a menos de 425 unidades do alvo — um pouco menos que o range de uns Mercury's Treads. A passive **Unseen Threat** marca inimigos isolados; a Q **Taste Their Fear** dá dano bonus enorme neles; o ult **Void Assault** permite entrar e sair de visão para preparar esse burst isolado. Pique-o contra times que andam sozinhos — split-pushers, carry junglers, marksmen imóveis de backline.

Plano de jogo na jungle: clear bot-to-top com **W** para o sustain (sustain = capacidade de se curar durante o clear), chega no nível 3 com E desbloqueada e começa a gankear pré-6 com o padrão assassin: **E** na lane → espera o alvo do gank ficar isolado do support → **Q** para o dano amplificado → finaliza com auto-attack. Depois do nível 6 cada fight é uma caça: pegue a **Evolved E** (range estendido e reset em takedown) para que uma kill bem-sucedida devolva o dash e te deixe sair antes do time desabar em cima de você. Fights de Drake e Rift Herald se ganham entrando em stealth com **R**, apagando a backline e re-stealthando para sair.

## Build recomendada

**Itens iniciais:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. O pet Gustwalker dá movement speed fora de combate, perfeito para chegar rápido nos ganks. Pule o Mosstomper (o pet de sustain) — sua **W** já cura o suficiente em um ciclo de clear.

**Itens core (nessa ordem):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primeiro item para rushar. Lethality (stat que dá armor penetration plana contra alvos com pouca armor, basicamente dano grátis em squishies) mais a active de movement speed deixam ganks e skirmishes triviais.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste para a sua **R** voltar mais rápido. Quanto antes a R estiver pronta, mais janelas de invisibilidade você tem por fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passiva de execute: alvos abaixo de 5% HP morrem na hora. Fecha kills que seu burst bruto deixaria a 50 HP.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield bloqueia a primeira habilidade inimiga depois de um channel curto. Te salva de Malzahar R, Lissandra R ou qualquer CC point-and-click que te travaria antes do R out.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — armor pen de late que escala com a armor do alvo, mais slow em habilidades de dano: sua Q persegue.

**Itens situacionais:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — quando o time precisa de pressão em side lane: passiva cleave mais active de execute permitem split-push (empurrar uma side lane sozinho para forçar resposta inimiga) sem perder dano em fight.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — contra comps com muitos bruisers (bruiser = fighter melee tanky tipo Sett, Aatrox, Mordekaiser): escudo + omnivamp (lifesteal que funciona em todo tipo de dano) te mantém vivo no trade in-out.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — contra setups pesados de vision (supports enchanters como Janna, Lulu): on-cast apaga ward mais dano bonus em wards, então você caminha invisível pela rede de vision deles.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap do Lucidity contra magic CC pesado. A tenacity (stat que reduz a duração de stuns e slows em você) te dá tempo de R out antes do re-engage.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra comps de duplo AD (duas ameaças físicas tipo Yasuo + Caitlyn): armor plana e redução de dano de basic-attack.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** é o padrão. Mercury's Treads ou Plated Steelcaps só se o matchup pedir.

**Skill order:** Maxe **Q** primeiro (o scaling do dano em isolado é seu DPS principal), **W** em segundo (sustain na jungle e slow na evolution), **E** por último (rank extra dá dano bruto, mas o que importa é a distância do dash e o cooldown, não o scaling). Suba **R** nos níveis 6, 11, 16.

**Escolhas de evolution (o upgrade Q/W/E/R que você escolhe a cada rank-up da R):** ordem padrão é **Q no 6** (range estendido e refund em takedown isolado — o spike 1v1 mais limpo), **E no 11** (range extra e reset em takedown para skirmish), **R no 16** (invisibilidade mais longa, segundo recast). Escolha **W em vez de Q no 6** só se o time inimigo tem várias ameaças imóveis agrupadas (os três cones de slow zonam o time inteiro num fight). Escolha **E primeiro** em vez de Q só se precisar fugir de um jungler de CC pesado (Lee Sin, Vi) — o reset early te tira de ganks falhos, mas você abre mão de muita kill pressure.

**Runas:** Primária **Domination** com **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundária **Precision** com **Triumph** e **Coup de Grace** (ou **Sorcery** com **Sudden Impact** de apoio se quiser sustain — sustain = cura durante o fight). Stat shards: Adaptive Force / Adaptive Force / Health.

## Matchups principais

- **Lee Sin:** Evite invades de nível 2 e 3. O Q-Q seguido do escudo da W vence seu kit antes da E ficar online. Clear bot-to-top, hover Scuttle com vision e deixe os laners pegarem ele se ele se over-extender.
- **Graves:** Empate early, a seu favor depois do nível 6. Nunca duele ele em open jungle pré-6: a cegueira da W cancela sua janela de auto-attack. Espere uma chance de isolation — ganke a lane dele com **E + Q** e deixe seu laner tirar ele do ADC.
- **Elise:** Corrida de power spike. Ela vence os ganks nível 3; você vence o jump isolado no nível 6. Iguale o tempo do primeiro clear e troquem objetivos — hover Drake com vision para ela não soloar.
- **Jarvan IV:** Ameaça de counter-engage. O E-Q knock-up dele interrompe a animação do jump. Compre ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** mais cedo que o normal; o spell shield come a combo de flag-toss dele.
- **Karthus:** Matchup grátis. Não tem escape e anda sozinho empurrando wave. Tracke a posição dele pré-6 com vision; no nível 6, **R + E + Q** apaga ele do outro lado da jungle enquanto ele canaliza Requiem.

## Power spikes e condições de vitória

- **Nível 3 (Q + W + E):** Kit completo desbloqueado. Procure um gank isolado — flanqueie uma side lane pelo river bush, **E** dentro, **Q** no laner adversário isolado (o support tem que estar fora), reset de auto-attack, **W** para o slow no recall. O gank pré-6 do Kha'Zix é um dos mais fortes do jogo quando o alvo está sozinho.
- **Nível 6 (primeira Void Assault + primeira evolution):** Escolha **Evolved Q** para o caminho de burst padrão. Power spike forte em skirmishes no mid-river — R para entrar invisível, E no alvo marcado, Q para o dano amplificado, AA reset, recasta R para sair. A combo completa apaga um squishy de 1800 HP em dois segundos.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade pronto (~ minuto 9-11):** Spike de burst. A active de velocidade te deixa atravessar meio mapa para um flank (entrar no fight por um lado que o inimigo não vê, geralmente atrás da backline). Force fights ao redor do segundo Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ minuto 16-19):** Janela de reset. Sua E agora reseta no takedown — um teamfight limpo começa com E no carry, Q para a kill, e uma segunda E no próximo alvo. Aqui o Kha'Zix vira uma máquina de pick (pick = eliminar um inimigo isolado fora do teamfight) decisivos.

## Erros comuns

- **Pular num alvo que não está isolado.** Sem o amplificador de isolation (nenhum aliado a 425 unidades), sua Q bate cerca de 60% a menos. Espere o support se afastar ou seu laner tirar ele de cima — não troque no meio do time deles.
- **Escolher Evolved W como primeira evolution por padrão.** A W evoluída é uma ferramenta de zoning de teamfight, não de duelo. Se seu time joga com picks (eliminar um inimigo isolado fora do teamfight) e skirmishes, Evolved Q é a escolha certa em 90% dos casos.
- **Usar a R para dar dano em vez de reposicionar.** A R é uma janela de invisibilidade para entrar e sair do fight, não um botão de dano. Guarde o segundo recast para sair quando o alvo morrer — re-stealthar durante o recall desperdiça o valor principal da habilidade.
- **Greedar camps depois de gank falho.** Sem reset de E (antes de Evolved E), se o gank falha você não tem saída. Volte pela sua jungle, não vá no automático para o próximo camp — o jungler inimigo tracka seu caminho e counter-ganka a próxima lane.
- **Buildar Eclipse primeiro por padrão.** Eclipse transforma o Kha'Zix em bruiser; você abre mão do burst de lethality que faz dele um assassin. Builde Eclipse só quando o matchup é bruiser-pesado e você não sobrevive ao trade in-out na lethality pura.

## Dica avançada

Treine a combo **R-E-Q-AA-recast-R** no practice tool até os inputs ficarem automáticos. O truque é o reset de auto-attack entre Q e o recast: a Q reseta o timer do basic, então no momento que a Q pousa você encaixa um basic, e na hora recasta R para sair. Bem executada, essa combo apaga um alvo de 1900 HP em cerca de 1.8 segundos e você sai invisível — um solo pick (pick = matar um inimigo isolado fora do teamfight) no ADC adversário no setup do Baron é objetivo grátis. O skill ceiling está no timing da AA entre Q e recast da R: cedo demais e a Q ainda não pousou, tarde demais e a janela da R fechou.
