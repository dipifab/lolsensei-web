---
title: "Elise Support Build & Guia — Patch 16.9"
slug: "elise-support"
language: "pt-br"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Guia da Elise support para League of Legends Patch 16.9: ângulos de engage com Cocoon, build path por Bloodsong, matchups principais, power spikes e uma dica final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Duas formas. Human: cada ability que acerta gera um Spiderling adormecido. Spider: AAs causam dano mágico bônus e curam a Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: poke alvo que escala com HP atual do inimigo (anti-tank). Spider: salto que escala com HP perdido (executa alvos com pouca vida)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: lança um Spiderling que anda para frente e explode perto dos inimigos (slow + dano AOE). Spider: Elise e os pets ganham attack speed para DPS contínuo."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: skillshot linear que stuna o primeiro inimigo atingido. Sua ferramenta de engage. Spider: Rappel — elevação curta intargetável e queda no alvo com bônus de dano."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Ulti toggle que alterna Human (caster à distância) e Spider (skirmisher melee com movement speed e enxame de Spiderlings). Troca grátis sem cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (Ahri charm, Lissandra R) — o spell shield bloqueia um engage e te deixa recocoonar"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra hard CC pesado (stuns, knock-ups) — botas com tenacity (reduz duração de CC)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps com burst AOE (Yasuo + Malphite, wombo Orianna) — o active escuda o time inteiro"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "compre só com 10+ kills/assists de vantagem sem morrer — converte snowball em AP puro"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Engage com E cocoon da fog of war para abrir o all-in do ADC. Mantenha relevância no late stunando o carry inimigo dentro da janela de Aftershock e Liandry's Torment."
  weakness: "Tudo depende de acertar o cocoon: um skillshot errado te deixa em melee range sem escape. Outranged por hook supports que te grabam antes de você castar."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primária: Aftershock dispara no stun do cocoon dando armor + MR e uma onda AOE atrasada — a janela de sobrevivência depois do engage em melee. Font of Life cura o ADC em cada cocoon, Bone Plating amortece all-ins early, Revitalize amplifica heal/shield."
    secondary_rationale: "Sorcery secundária: Manaflow Band sustenta mana na laning phase early (cocoon custa 50-90 mana por cast), Transcendence empurra o Ability Haste acima de 40% para o cocoon voltar mais rápido em fights longos."
    secondary_alternative: "Contra lanes de poke ou all-in pesado (Lucian + Nami, Draven + Thresh), troque Sorcery por Inspiration com Magical Footwear (8304, botas grátis no minuto 10) e Cosmic Insight (8347, reduz CD dos summoner spells); o Flash extra te salva de engages errados."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Enchanter supports squishy sem tenacity"
      reason: "O stun longo do cocoon ignora o kit de utility delas. Não têm escape tipo Flash, e o burn de Liandry's Torment (dano espalhado em poucos segundos) pune shields e heals."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Carries ranged imóveis sem dash"
      reason: "Cocoon de um arbusto pega elas paradas. Uma vez stunadas, no nível 3 W (slow) + Q (anti-HP) + burst do ADC mata antes do Flash responder."
    - examples: ["draven", "samira"]
      archetype: "Carries agressivos que pisam pra frente atrás de kill"
      reason: "A pressão de kill obriga a passar do equilíbrio da wave (a safe lane line). Cocoon pune o passo à frente, Aftershock vira o all-in (commit total) a seu favor."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports que outrangeam cocoon"
      reason: "O hook do Blitzcrank (~1100) supera o cast range do E (1075). Eles engagam primeiro em você, removendo seu engage e te deixando melee em Spider form sem escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell shields que bloqueiam cocoon"
      reason: "Uma carga de Spell Shield come seu stun inteiro. Sem cocoon não tem setup, e o follow-up do time trava até voltar o cooldown."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Engage supports tanky com CC point-and-click"
      reason: "O engage deles é alvo (sem skillshot pra dodgear). Ficam grudados no seu ADC mais tempo do que você consegue segurar, e seu dano mágico não mata através do armor deles."
---

## Visão geral

> **Mini-glossário (leia uma vez):** **ADC** = Attack Damage Carry, o bot-laner que dá dano físico (Caitlyn, Jinx). **AP** = Ability Power, atributo que escala habilidades mágicas. **MR** = Magic Resist, defesa contra magia. **CS** = Creep Score, número de minions mortos. **CC** = Crowd Control, qualquer efeito que pare um campeão (stun, slow). **Engage** = iniciar a luta. **Disengage** = sair da luta. **Trade** = troca breve de dano. **All-in** = commit total. **Peel** = proteger o seu carry. **Kite** = andar de costas atacando.

Elise support é um híbrido engage-mage: ela acerta **Cocoon (E)** de um arbusto ou da fog of war (a parte da mapa sem visão) para enraizar o carry inimigo, depois committa com **Spider Form (R)** para follow-up de dano e disengage intargetável via **Rappel**. Ela troca a segurança do enchanter por kill pressure pura — todo cocoon acertado entre níveis 3 e 6 deveria render uma kill ou um Flash queimado. A fraqueza dela é o avesso da força: sem cocoon no chão, ela não tem engage e não tem cura para se apoiar.

O game plan é dominar a bot lane nos primeiros 6 níveis, fechar Bloodsong e **Sorcerer's Shoes** entre o minuto 12-14, e rotacionar para mid com o boost de movement speed do **Spider Form**. No late game o trabalho muda: ela vira flank assassin, esperando o carry inimigo errar posicionamento, joga cocoon de um ângulo lateral e deixa o time fechar.

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item da support quest: te dá gold de support ao longo do tempo enquanto você não fizer last-hit nos minions sozinha) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Itens core (na ordem):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade final da linha de support quest (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). Variante AP: cada quarto AA contra um campeão dá dano mágico bônus. Sinergia natural com os autos rápidos da Spider form num dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Crucial porque como support você tem menos gold que o mid laner, então penetration é mais eficiente que AP puro no early.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro big AP item. O burn HP-based (dano que escala com HP máx do alvo, espalhado em poucos segundos) pune frontlines tanky que tentam absorver seu cocoon stun.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — toda ability dá slow. Transforma o **W** em ferramenta de chase e stacka com cocoon stun para confiabilidade no follow-up.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — item de sobrevivência. Depois de engagar em melee range, o active dá 2.5 segundos de stasis (você não pode se mover, receber dano nem ser alvo), tempo do time limpar.

**Itens situacionais:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC single-target (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quando o time inimigo tem hard CC pesado.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps com burst AOE (combo Yasuo + Malphite, wombo Orianna).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — só quando estiver 10+ kills/assists na frente com zero mortes. Risco de perder stack é real; não compre se estiver atrás.

**Botas:** Sorcerer's Shoes é o padrão. Mercury's Treads se o time inimigo tem três ou mais fontes de hard CC (stuns, knock-ups).

**Skill order:** Maxe o **E** primeiro (o stun do cocoon é o seu trabalho), **Q** em segundo (dano), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Resolve** com **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**.

## Matchups principais

- **Blitzcrank:** Pior matchup de lane. O Q dele outrangea seu E em ~25 unidades. Fique atrás do seu ADC, nunca dê passo à frente para jogar cocoon — ele te hooka no momento que você commitar.
- **Thresh:** Hook duel que dá pra sobreviver mas raramente vencer. Espere ele jogar e errar a Q, depois ande pra frente e acerte cocoon na recovery window. Evite entrar no arco da lantern quando ele engagar no seu ADC.
- **Soraka:** Lane grátis. O silence dela é curto e o heal é interrompível por cocoon. Engage no nível 3 com mana cheio; o trade queima a HP dela mais rápido do que ela cura.
- **Leona:** Vence o all-in mas perde a guerra de poke. Fique no max range de cocoon, jogue E para interromper a animação do **W** dela (Eclipse), e recue. Não committe sem acertar cocoon primeiro.
- **Sivir:** O **E** dela (Spell Shield) bloqueia o cocoon inteiro. Tire o shield jogando **W** spiderling primeiro; quando ela shielda o W, seu cocoon entra limpo durante o cooldown todo do shield (~12 segundos).

## Power spikes e condições de vitória

- **Nível 2:** Com **E** + **Q**, já tem setup de all-in. Force o nível 2 antes de supports melee e engage no primeiro cocoon que acertar.
- **Nível 6:** Primeira **Spider Form (R)**. O potencial de disengage e re-engage dobra; você pode divear um inimigo de baixa HP sob torre usando Rappel como ferramenta de re-positioning.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 13-15):** Roam window. Vá pro mid num 3v2 se sua wave estiver empurrada na torre inimiga. O snipe no mid com **Cocoon (E)** + finalização **Spider Q** mata quase qualquer mid laner squishy.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ minuto 18-20):** Pronta para teamfight. O trabalho agora é flankear a backline pelos arbustos laterais; acerte cocoon no ADC inimigo, **Aftershock** dispara no stun, seu time limpa.

## Erros comuns

- **Jogar E cocoon como poke.** Mesma regra da Elise jungle: cocoon é engage, não harassment. Espere o carry pisar pra frente; um cocoon errado te deixa 12 segundos sem defesa.
- **AA nos minions na lane.** Itens de support punem CS de minion — last-hit cancela o gold income do World Atlas e deixa seu ADC sem comida. Use **W** na wave só quando a próxima wave estiver voltando.
- **Engagar sem follow-up do ADC.** Olhe a barra de mana e os cooldowns do ADC antes de puxar o gatilho do cocoon. Se ele estiver sem mana ou sem **Flash**, não engage; no melhor caso você troca 1 por 1.
- **Esquecer de comprar ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) wards a cada base.** Como support, você é quem coloca a visão no mapa. Wards nos arbustos do river controlam os ângulos de engage do seu jungler. Use ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens para varrer wards inimigos antes dos objetivos.
- **Divear com R sem escape disponível.** Spider form não tem escape embutido. Se **Flash** e **Rappel** estiverem em cooldown, não committe ao dive sob torre; o ADC inimigo vai te kitar (andar de costas atacando) até a torre te matar.

## Dica avançada

Monte os ângulos de cocoon com visão antes do fight começar. Uma ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** colocada no arbusto lateral dá um engage angle grátis: entre no arbusto pela fog, jogue cocoon enquanto o ADC inimigo dá um passo à frente para last-hittar, depois **Spider R** + Rappel drop. A sequência inteira é invisível pela perspectiva inimiga até o cocoon acertar. É a jogada de maior impacto que Elise support consegue fazer, e a maioria dos jogadores de baixo elo ignora porque engaga direto da lane em vez de usar ângulos preparados.
