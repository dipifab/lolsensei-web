---
title: "Janna Support Build & Guia — Patch 16.9"
slug: "janna-support"
language: "pt-br"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Guia de Janna support para League of Legends Patch 16.9: build de enchanter, matchups de peel, power spikes, erros comuns e uma dica avançada de disengage."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Aliados que se movem em direção a Janna ganham Move Speed bônus. Janna também converte parte do Move Speed bônus em dano mágico extra ao acertar."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Carrega um tornado e solta para que voe em linha reta e jogue inimigos para o alto. Carregar mais = mais alcance, dano e duração do knock-up."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Passiva: Move Speed bônus e você atravessa unidades. Ativa: dano mágico e slow em um inimigo (consome o bônus passivo)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Escudo direcionado em um campeão aliado ou em uma torre, com bônus de Attack Damage durante a duração."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel que empurra todos os inimigos próximos e depois cura aliados pelo resto da duração. Disengage e recuperação em um botão só."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra burst AOE pesado (Yone R, Kennen R, Orianna R) — escudo instantâneo no time todo"
    - dd_id: "3107"
      name: "Redemption"
      against: "quando o time precisa de heal de grupo em fights longos ou para disputar Drake e Baron"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contra AP carries que escalam com Ability Haste (Hwei, Ezreal AP) — bônus de AP para o aliado escudado"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "contra comps de engage com um AD carry claro (Aphelios, Kai'Sa) — o vínculo combina com sua R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Mantenha o AD carry vivo após a fase de skirmish, acumule peel de Move Speed e use a R para quebrar engages inimigos em torno dos objetivos."
  weakness: "Pouco dano sozinha e alcance curto na E. Se o inimigo te acertar com hard CC antes da R, você não consegue peelar ninguém, nem você mesma."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Supports de hard engage"
      reason: "A R de Janna cancela o dive no ar: no momento em que pulam no seu AD carry, o channel os empurra e desfaz a tentativa de engage."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "AD carries imóveis com auto-attacks fortes"
      reason: "Tailwind mais E shield mais Ardent Censer transformam um marksman parado em uma fortaleza de peel: ela aumenta o dano e o Move Speed sem precisar reposicionar."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Junglers diver chamativos"
      reason: "O gank deles é um único pulo telegrafado — a Q de Janna joga eles pro alto no meio do dash, e a R os manda de volta de onde vieram."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports de hook a longa distância"
      reason: "Janna não tem gap-closer e nenhum hard CC no level 1: um hook acertado antes do 6 deleta o AD carry antes da R estar pronta para disengage."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage supports a longa distância"
      reason: "Pokeiam de fora do alcance de 800 do E shield: ela escuda o golpe mas não consegue revidar — o desgaste de HP vence a lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanters de sustain que out-healam o poke"
      reason: "A única ferramenta de dano em lane da Janna é a Q, telegrafada por uma carga longa — esses enchanters out-healam o trade e a vencem em valor de teamfight."
---

## Visão geral

Janna é uma enchanter support cujo kit inteiro é construído em torno de um único verbo: **peel** (proteger um aliado, geralmente o AD carry — o marksman da bot lane que escala com itens — de quem estiver atacando ele). A passiva **Tailwind** dá Move Speed bônus para cada aliado caminhando na direção dela, **Howling Gale (Q)** joga pro alto qualquer um que tente divar a back line (o carry ranged squishy que fica no fundo do teamfight), **Zephyr (W)** desgasta e slow a ameaça mais próxima, **Eye of the Storm (E)** é um escudo com um buff de Attack Damage embutido para o aliado que recebe, e **Monsoon (R)** é uma das ferramentas de disengage mais limpas do jogo (uma habilidade que quebra a tentativa de engage do inimigo — quando eles pulam dentro, você empurra eles para fora).

O game plan dela é calmo e mecânico: o AD carry nunca morre. Fique entre as ameaças e o seu carry, jogue o escudo no cooldown, carregue a **Q** atrás de uma parede para o tornado sair no tamanho máximo e guarde a **R** como "panic button" para quando o time inimigo committar tudo na sua back line. Em Janna você quase nunca quer engagiar — o seu trabalho é vencer fights se recusando a perder eles.

## Build recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (o starter de support que evolui dando mais ouro) mais 2 Health Potions. Pule os starters de dano: Janna não snowballa em cima de kills de lane, ela escala com utility de teamfight.

**Core items (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — evolui em Bounty of Worlds e depois em um legendary de support. Acumula ouro e cargas de ward automaticamente.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — o Ability Haste te deixa spammar **E** shield e **W** slow em cooldowns mais curtos; bota padrão dos enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva de heal-on-shield que cresce em fights longos. Combinada com seu spam de **E**, o AD carry mal recebe dano líquido.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — fortalece o aliado escudado com dano on-hit e Attack Speed extra. Melhor item do jogo do lado de um AD carry de auto-attack.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — limpa hard CC de um aliado. Obrigatório se o inimigo tem um stun single-target ou um hook no seu carry.

**Situational items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE pesado (dano em área, tipo Yone R ou Kennen R). O ativo dá um escudo instantâneo no time todo.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando os fights se arrastam (Drake, Baron, teamfights longos). Heal AOE com delay que você pode dropar do outro lado do mapa.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contra AP carries que escalam com Ability Haste (Hwei, Ezreal AP). Buffa o aliado escudado com Ability Power extra.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — contra comps de engage onde seu AD carry precisa de um slow garantido no alvo durante a sua **R**.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são o padrão. Boots of Swiftness podem substituir contra comp com vários slows dos quais você precisa fugir.

**Skill order:** Maxe **E** primeiro (valor do escudo e bônus de Attack Damage escalam por nível), **Q** segunda (mais knock-up e dano), **W** por último. Pegue **R** nos níveis 6, 11 e 16. Comece **W** no level 1 pelo Move Speed extra na ida para a lane, depois pegue **E** no 2 para escudar o primeiro all-in.

**Runas:** Árvore primária **Sorcery** com **Summon Aery** (gruda um pequeno proc de dano e valor de escudo nos seus feitiços), **Manaflow Band** (sustain de mana para escudar e **W** a cada wave), **Absolute Focus** (AP bônus acima de 70% de HP, fácil em Janna porque você fica safe), **Scorch** (mais poke com a **Q**). Secundária **Resolve** com **Font of Life** (você slow um alvo com **W** → todos os aliados que atacam ele curam) e **Overgrowth** (HP escalando permanente). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchups principais

- **Leona / Rakan:** Supports de hard engage. Guarde a **R** para o momento em que eles committam no seu AD carry; nunca queime ela atrás de um tornado. Carregue a **Q** atrás de uma parede para eles não verem o windup.
- **Blitzcrank / Thresh:** Supports de hook. Fique atrás dos minions toda vez que cruzar o river. O hook acerta uma vez e o AD carry está morto — você não consegue dar **R** para sair de um stun de 1.75 segundos.
- **Xerath / Brand:** Mage supports fora do alcance da **E** shield. Cole na wave, não troque auto-attacks e deixe seu jungler hard-sidar a lane. Compre ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** mais cedo que o normal.
- **Soraka:** Espelho de sustain. Você out-shielda ela ao custo de menos heal bruto. Force um all-in no level 2: **W** na cara, **E** no AD carry, empurre ela para fora da wave antes do spike de **R** dela.
- **Pyke:** Ameaça de roam. Tracke ele com vision no tri-bush e na entrada do river; se ele sair da bot lane, ping mid imediatamente. A **R** de Janna para o ult de execução dele só se ele committar no corpo a corpo — em hook a longa distância ele é incapturável.

## Power spikes e condições de vitória

- **Level 2:** Com **W** no 1 e **E** no 2, você consegue shield-engagiar um trade curto (uma troca breve de dano em lane, não um all-in completo). A maioria das lanes perde esse trade porque o spike de nível 2 deles (o momento em que um campeão ganha um boost súbito de poder) é mais fraco que o seu.
- **Level 6:** **Monsoon** desbloqueia. Qualquer tentativa de 2v2 do inimigo agora é vencível — eles engage, você channela, eles terminam empurrados de volta para a sua torre.
- **Moonstone Renewer + Ardent Censer (~ minuto 16-20):** Esse é o spike de teamfight em que você para de ser um support de lane e vira um multiplicador do time. O HP efetivo do seu AD carry quase dobra quando você shield-spamma durante um fight.
- **Três legendaries online (~ minuto 25):** Com Mikael's adicionada, você limpa a única habilidade de CC que apagaria seu carry. A partir daqui, todo fight de objetivo é um 5v4 se o inimigo committar hard CC.

## Erros comuns

- **Lançar Q sem carregar em lane.** Um tornado de 0.5 segundo quase não faz nada. Carregue a **Q** os 3 segundos completos atrás de uma parede ou no fog of war (o bush sem ward perto do river bot), depois solte enquanto o inimigo caminha para uma wave.
- **Queimar a R por uma kill.** A **R** de Janna é o melhor disengage do seu time. Toda vez que você usa ela para fechar uma kill que o AD carry teria fechado de qualquer jeito, deixa o time sem panic button pelos próximos 100+ segundos.
- **Escudar você mesma.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** também te seleciona, mas o bônus de Attack Damage é desperdiçado em Janna. Padrão: escudar o AD carry; auto-escudar só se um skillshot (um projétil mirado que dá para esquivar) estiver lockado em você e o seu carry estiver seguro.
- **Ficar muito atrás nos fights.** Sua **E** tem um alcance curto de 800 unidades. Se você espia por trás do time, não escuda ninguém. Fique dentro do alcance do escudo do AD carry, em segunda linha — mais perto do que o instinto manda.
- **Auto-atacar minions atrás de dano.** Tailwind só ativa em hits em campeões. Empurrar a wave com autos dá ao inimigo uma janela de trade grátis sem nenhum benefício de dano para você.

## Dica avançada

Treine o **Q-Flash**. Comece a carregar **Howling Gale** atrás de uma parede, depois Flashe para frente e solte o tornado no mesmo movimento: o knock-up acerta um alvo que nunca viu o windup. Essa única jogada transforma Janna de uma enchanter defensiva em um disengage one-shot contra um inimigo fed (um campeão na frente em kills e ouro) que pushou demais. O custo é o seu **Flash** pelos próximos 5 minutos — só gaste se a kill, ou a sobrevivência do AD carry, estiver garantida.
