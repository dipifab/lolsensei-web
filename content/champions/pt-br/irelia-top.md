---
title: "Irelia Top Build & Guia — Patch 16.9"
slug: "irelia-top"
language: "pt-br"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Guia da Irelia top lane para League of Legends Patch 16.9: starter kit, build core com Trinity Force, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Atingir um inimigo com uma habilidade dá stack de Attack Speed (max 4). Em stack máximo, Irelia ainda causa dano mágico bônus on-hit."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash que atinge um alvo e cura. O cooldown reseta se o alvo morre ou está com Mark — o famoso Q reset (encadeia dashes minion a minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel de um golpe carregado que aumenta dano e reduz dano físico e mágico recebido durante a carga (channel = segura para carregar)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Posiciona uma lâmina, recasta para a segunda. Voam uma na direção da outra, atordoando e aplicando Mark em tudo no meio. Principal ferramenta de setup."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Salva longa de lâminas que aplica Mark em campeões atingidos, depois forma uma parede em volta do primeiro campeão que causa dano e slow. Engage e zoning."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra dano mágico pesado ou CC encadeado (Lissandra, Ryze, Malphite — tenacity reduz duração de stun e slow)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra kiters e tops ranged (Vayne, Gnar, Kennen) — dash + slow ativos ajudam a stickar em alvos móveis"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra tanks com stack de armor (Malphite, Ornn, Sion) — armor shred amplifica Q repetido e follow-up do time"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "contra comps de splitpush onde precisa de waveclear e sustain 1v1 (lifesteal em AOE = cleave em área + cura)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Acerte o E para o stun, Q-resete pela wave para stickar no alvo, e troque com stacks da passiva ativos. Snowball a lane (transforme uma vantagem inicial numa maior) até as skirmishes do mid-game."
  weakness: "Sem E acertado não tem engage confiável. Poke de longa distância e disengage te apagam antes de chegar na frontline. Sem Trinity Force ou Stridebreaker, é kitada com facilidade."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Tanks lentos e imóveis sem poke ranged"
      reason: "Eles não têm disengage contra o stun do E e nenhuma resposta aos Q resets pela wave; você out-trada eles em todo nível assim que Conqueror começa a stackar."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Juggernauts melee sem dash"
      reason: "E + Q te dão gap-close e a redução de dano do W cobre a janela de burst inimiga; eles não conseguem te kitar nem escapar do stun."
    - examples: ["azir", "ryze"]
      archetype: "Mages de média distância flexados no top"
      reason: "Squishies de curto alcance (HP baixo, defesas baixas) sem dash são one-shotados assim que Trinity Force fica pronta e você passa stacks cheios de passiva neles."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Tops ranged ou kiters"
      reason: "Eles te auto-attack fora do alcance do E, kitam o Q com o próprio dash ou transformação, e punem cada aproximação. Precisa de Stridebreaker só pra fazer engage."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelists com counter point-and-click ou true damage"
      reason: "Fiora apara o E ou o R, o E hookshot da Camille atordoa pelo seu dash, o E do Jax atordoa e supera a passiva baseada em AS em trades longos."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane bullies com ferramentas anti-skirmisher"
      reason: "O suppress do Malzahar (silence point-and-click + lockdown) cancela os Q resets; o W empowered do Renekton atordoa pelo seu W em carga e fecha o trade antes de você scalar."
---

## Visão geral

Irelia é uma skirmisher melee (uma fighter que vence por trocas curtas e repetidas em vez de um único burst). Vive ou morre nos dashes do **Bladesurge (Q)**. O Q tem cooldown base longo, mas **reseta** (cooldown restaurado instantaneamente) toda vez que ela mata um minion ou atinge um alvo com o debuff Mark (um ícone que as habilidades da Irelia aplicam nos inimigos). Uma única skirmish pode encadear quatro ou cinco dashes seguidos. A passiva **Ionian Fervor** stacka Attack Speed até quatro vezes quando você acerta habilidades (cada habilidade que conecta adiciona um stack, até quatro), e o quinto stack adiciona dano bônus e redução de crowd-control.

O game plan na top lane é simples de descrever e exigente de executar. Use **Flawless Duet (E)** para acertar o stun (precisa de uma pequena janela de setup), siga com **Q** no alvo atordoado, **W** para mitigar o dano de retorno, e Q-resete pela wave para disengagear ou perseguir. Depois do nível 6, **Vanguard's Edge (R)** transforma skirmishes de lane em kills, adicionando zone control e um segundo Mark para Q resets de graça. No mid-game você roama pela wave com Q resets para buscar pickoffs (eliminar um inimigo isolado fora da teamfight) e rotacionar para objetivos.

## Build recomendada

**Itens iniciais:** Doran's Blade + 1 Health Potion. Pegue Doran's Shield só em lanes de harass ranged (Kennen, Quinn, Vayne) onde você precisa do regen.

**Itens core (em ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — seu spike principal. A passiva Sheen (efeito embutido que ativa, em jargão "proc", no próximo basic attack depois de uma habilidade) combina com cada Q dash; a Ability Haste reduz o cooldown do Q; a Attack Speed completa o stack da passiva.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão contra times AD-pesados. Compre depois de Trinity se a lane é melee ou AD ranged.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, scaling de AD, e um escudo de baixa vida que torna as janelas de dive sobreviventes.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converte o dano físico recebido em sangramento espalhado por alguns segundos (dano distribuído no tempo, não imediato). Compre contra times com dois damage dealers físicos fortes (ex. Yasuo + Caitlyn): você sobrevive à janela de burst tempo o suficiente para Q-sair.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — crit garantido no primeiro basic attack contra um campeão, mais cura. Encaixa lindamente no ciclo Sheen + Q reset.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra dano mágico pesado ou crowd control encadeado (Lissandra, Ryze, Malphite). Tenacity reduz a duração de stun e slow.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — mythic alternativo contra kiters e tops ranged (Vayne, Gnar, Kennen). O dash ativo + slow te dá um gap-closer fora do Q.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra tanks com stack de armor (Malphite, Ornn, Sion). Armor shred amplifica Q repetido e follow-up do time.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quando você splitpusha (empurra uma side lane sozinho para forçar resposta). AOE cleave mais lifesteal tornam triviais 1v1 e waveclear.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tem 2+ fontes de CC encadeado.

**Skill order:** Maxe **Q** primeiro (cooldown menor = mais resets, mais dano), **E** segundo (setup do stun), **W** por último. R nos níveis 6, 11, 16.

**Runas:** árvore primária **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Resolve** com **Bone Plating** e **Revitalize**. Pegue **Press the Attack** no lugar de Conqueror contra lanes de burst onde trades curtos vencem a lane (ex. Pantheon, Renekton early): Press the Attack premia 3 hits em 4 segundos com um spike de dano em vez de stackar em fight longo.

## Matchups principais

- **Renekton:** lane bully. Fique seguro pré-3, esquive do W stun e farme sob a torre. Power swing chega no nível 6 com a R; só trade depois que **W** consegue absorver o combo dele.
- **Fiora:** apara seu E stun e o Mark da R com a **Riposte (W)** dela. Engane a parry jogando uma única lâmina do E como finta, e só commit Q quando o W dela está em cooldown.
- **Malphite:** lane de graça pré-6: esquive do E slow e Q-resete pela wave para harass. Depois do 6 ele pode flash-R no seu time — agrupe com aliados nos objetivos e não extenda (empurrar além do river sem backup) sem vision wards.
- **Vayne:** hard counter a menos que ela erre. Ela te kita (recua atacando, mantendo distância) o Q com **Tumble (Q)** e mastiga seu HP com **Silver Bolts (W)**. Compre Stridebreaker primeiro, freeze a wave perto da torre (segure a wave parada perto da sua torre para ela não last-hitar com segurança), e chame ganks do jungler antes do nível 6.
- **Camille:** mais ou menos parelho. O **Hookshot (E)** dela atordoa pelo seu dash; guarde **Flawless Duet** para atordoá-la no meio do hookshot. Quem encaixa o setup CC primeiro vence o trade.

## Power spikes e condições de vitória

- **Nível 3:** todas as três habilidades básicas online. Você pode acertar E stun + Q + auto-attack + W para uma janela completa de trade com stacks de passiva.
- **Nível 6:** **Vanguard's Edge (R)** desbloqueia uma janela de all-in (commit total na kill). O Mark da R te dá um Q reset gratuito pela jaula; ulte num alvo de baixa vida quando seu jungler aparecer.
- **Trinity Force pronta (~ minuto 14-16):** seu dano por Q dispara graças aos procs do Sheen. Controle de wave inverte: você pode shovar e roamar para objetivos com Q resets pela wave lateral.
- **3 itens (Sterak's online, ~ minuto 24-28):** vira uma skirmisher de teamfight: dive na backline (os carries squishy atrás dos tanks deles) com Q resets, sobreviva ao burst com escudo do Sterak's + W, e limpe com a cage da R.

## Erros comuns

- **Spammar Q sem setup.** Q nu num alvo sem Mark consome o cooldown base longo por um único dash. Sempre acerte primeiro o **E** stun, ou encadeie Q num minion de baixa vida para manter o ciclo de reset vivo.
- **Segurar W demais durante um stun.** **Defiant Dance** é um channel: você não pode se mover nem atacar enquanto carrega. Tap-cancel depois da janela de redução de dano se o inimigo disengagear — não fique channelando até o release máximo se ninguém estiver no alcance.
- **Engagear através de uma parry.** Fiora **W**, Sivir spell shield, Olaf R: todos comem seu E stun de graça. Force essas habilidades primeiro, depois commit o CC.
- **Splitpush pré-Trinity.** Sem Trinity seu dano em torres e waves é fraco; cede tempo por nada. Segure a wave perto da torre até Trinity ficar online, depois empurre a side lane.
- **Ultar um único alvo com o time agrupado.** **R** em cage num único squishy é desperdiçada se o tank deles consegue body-block. Mire R para clipar 2-3 inimigos por um choke (corredor estreito de jungle) e deixe a cage zonar a backline para fora do fight.

## Dica avançada

Treine o combo **R-flash**: lance **Vanguard's Edge** numa direção, depois **Flash** imediato em outra para redirecionar a salva de lâminas. As lâminas seguem a posição da Irelia, então um flash perpendicular à linha de cast te permite cagear um campeão que se achava seguro fora do alcance do R. Use como ferramenta de engage quando seu time precisa de um pickoff (eliminar um inimigo isolado) num carry em fuga perto da pit do dragon ou do baron.
