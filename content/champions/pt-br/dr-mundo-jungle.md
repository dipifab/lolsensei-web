---
title: "Dr. Mundo Jungle Build & Guia — Patch 16.9"
slug: "dr-mundo-jungle"
language: "pt-br"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia do Dr. Mundo jungle para LoL Patch 16.9: rota de jungle com pet Mosstomper, build tank empilhando HP, timings de gank, matchups principais, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "O primeiro hard CC (stun, root ou knockup que te imobiliza) acerta Mundo só com custo de HP e dropa um frasco; pegue para se curar e resetar a passiva. Também dá uma regen de HP enorme."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot linear de longo alcance que causa dano mágico baseado numa porcentagem do HP atual do alvo e aplica slow. Custa HP, não mana — sua barra de recurso é a sua vida. Principal ferramenta de gank pré-6 com 975 de alcance."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel sobre si mesmo que aplica dano mágico em ticks aos inimigos próximos e armazena parte do dano sofrido. Recaste para uma rajada — se acertar champion, você cura uma % do dano armazenado. Mantenha ativo nos camps para sustain."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passiva: AD bônus que escala com HP máximo. Ativa: golpe melee com dano extra baseado no HP que você está faltando. Se matar, arremessa o corpo nos inimigos pelo caminho. Seu spike de dano single-target em ganks."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: heal instantâneo de uma % do HP faltante, depois bônus de Move Speed e regen enorme pela duração. Aperte antes de ganks, antes de fights, antes de morrer — nunca depois."
      dd_spell_id: "DrMundoR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap de Plated Steelcaps contra 3+ fontes de CC ou 2+ ameaças AP; tenacity te salva depois que o primeiro CC da passiva é gasto"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5° ou 6° item em jogos longos (~minuto 30+); a passiva de regen permite curar full entre camps sem voltar pra base"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra carries de auto-attack (Vayne bot, Tryndamere top, Master Yi jungle); reflete dano e aplica Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra comps AP pesadas com 2+ mages ranged (Karthus + Brand, Lillia + Lux); MR + Move Speed contra magic damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contra burst AP single-target (Syndra mid, Veigar, LeBlanc); o spellshield (barreira de uso único) anula o opener de combo"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full clear até o nível 4, gank no 6 assim que R liberar, transforma cada Drake fight a partir do minuto 14 em vantagem de regen. No min 25 com Heartsteel + Warmog's, anda na backline e se recusa a morrer."
  weakness: "Clear lento pré-3, invades fracas, é kitado por comps ranged sem como grudar. Itens healing-cut (que cortam cura inimiga pela metade) destroem o kit; contra true damage (Fiora, Vayne fed) o muro de HP derrete."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve primária: Grasp dá HP grátis a cada 4s em combate de champion — um gank de 5s acumula 2-3 procs. Font of Life marca alvos slowed pelo Q para o laner curar, Conditioning escala Armor/MR depois do minuto 12, Overgrowth converte camps em HP permanente."
    secondary_rationale: "Sorcery secundária: Nimbus Cloak dá um burst de Move Speed depois de Flash ou Ghost (seus Summoners de gap-close), e Gathering Storm dá Adaptive a cada 10 minutos — a win condition do Mundo é late game, então essas runas casam."
    secondary_alternative: "Contra junglers de skirmish early (Lee Sin, Elise, Xin Zhao), troque Sorcery por Inspiration com Magical Footwear (botas upgrade grátis no minuto 10-12) e Cosmic Insight (cooldowns de Summoner reduzidos), trocando scaling por tempo de invade."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Junglers assassins de burst"
      reason: "Todo o damage profile deles é uma combo num squishy. A passiva do Mundo come o CC opener, R cura uma % do HP que faltava e W refunda parte do burst. Eles queimam cooldowns e Mundo sai quase full, marcando o carry deles para o follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "Junglers AP de poke e kite sem hard engage"
      reason: "Force of Nature mais Spirit Visage empilham Magic Resist que cresce enquanto eles pokeiam. O Move Speed do R do Mundo mais o slow percent-current-HP do Q acabam fechando o gap, e um único E colapsa o HP deles porque não compraram itens defensivos."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Carries melee de auto-attack que o time inimigo depende"
      reason: "O slow do Q mais Plated Steelcaps paralisa o attack uptime deles. O R do Tryndamere compra uma rotação, mas um Mundo com Thornmail + R sobrevive à janela de imortalidade e o chunka com o dano refletido."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "Skirmishers de true damage"
      reason: "Os Vitais da Fiora, o W da Vayne e o R late-game da Kayle dão true damage (dano que ignora armor e magic resist — não há stat defensiva que reduza). Empilhar HP não serve contra true damage; a build inteira colapsa."
    - examples: ["trundle", "olaf"]
      archetype: "Junglers anti-tank"
      reason: "O R do Trundle rouba Armor, MR e Move Speed por 8 segundos; o E do Olaf aplica Grievous Wounds e a ult dele é CC-immune, então a passiva não dispara. Os dois foram desenhados para neutralizar stats de tank."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Comps de poke sustentado de longo alcance"
      reason: "Eles ficam além dos 975 de alcance do Q e drenam o HP do Mundo a cada wave. Mundo não tem dash e só um burst de Move Speed no R; ele anda dentro do dano só pra ameaçar engage e perde 30% HP por rotação sem nunca fechar."
---

## Visão geral

Dr. Mundo jungle é o tank jungler mais simples do jogo: clear de camps, chega no nível 6, anda numa lane e se recusa a morrer mesmo com tudo que o inimigo joga em cima. O kit dele tem um único trabalho — soak engage (o momento em que um inimigo se compromete a iniciar a luta, geralmente com hard CC ou dash) — e faz isso por três mecânicas. **Goes Where He Pleases (passiva)** absorve o primeiro hard CC (stun, root ou knockup que te imobiliza) com custo de HP, dropando um frasco que você pode pegar para curar. **Heart Zapper (W)** armazena dano sofrido durante a luta e refunda parte como cura no recaste. **Maximum Dosage (R)** cura instantaneamente uma % do HP faltante e dá regen enorme pela duração. Juntas fazem do Mundo o campeão com mais HP efetivo em qualquer teamfight, com o trade-off de não ter hard CC próprio e depender dos slows de Q + follow-up do time.

O game plan é farming consciente de tempo. Pré-3, o clear do Mundo é lento e os HP que ele perde nos camps são reais — não invada e não se deixe invadir. Full clear até o nível 4, contesta o Scuttle (o caranguejo do river que dá visão quando morto) e procura o primeiro gank pelo minuto 4-5 numa lane com priority (priority = a lane que está pushando para o inimigo, então o laner pode sair alguns segundos sem perder minions). No nível 6, cada R apertado deveria virar kill, objetivo ou aliado salvo. A partir do minuto 14 com **Heartsteel** mais **Sundered Sky** online, Mundo ganha cada Drake fight só nos stats.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade é o starter melee de jungle: ele te deixa causar dano nos neutral monsters (os camps que você farma na jungle) mais rápido e aplica um slow breve em campeões inimigos quando você acerta um basic attack. Refillable Potion é um item de cura que recarrega de graça na base, então você economiza ouro no chip damage dos clears de camp.

**Itens core (na ordem):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — quest upgrade do Hailblade (auto-evolui pelo minuto 3-4 quando acumula XP suficiente dos camps). O pet companion tank dá Armor e MR extra enquanto você está out-of-combat com champions e tenacity (duração de stun reduzida em você) quando ativa em luta. Pickup obrigatório para qualquer tank jungler — o ícone que aparece primeiro na barra quick-learn diz ao leitor qual starter você pegou.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primeiro item grande. Seu primeiro basic attack num campeão em qualquer luta crita e te cura. O crit-heal alinha com seu pattern de gank: anda dentro, Q-slow, auto-crit-heal, E pro slam de missing-HP. Combina com a regen do R em skirmishes prolongadas.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão quando o dano principal do time inimigo é basic attack. Reduzem esse dano que entra durante lutas longas.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — o item de scaling tardio. Cada proc bem-sucedido em campeão dá ao Mundo HP permanente que nunca vai embora, mesmo se você morrer. No minuto 30 você banca 8-12 procs e seus HP efetivos dobram comparado a uma build flat-tank.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist mais uma passiva de healing-amp que potencializa o burst-heal do **W**, a regen do **R** e qualquer cura aliada de suportes como Soraka ou Yuumi. Compre quarto ou quinto dependendo se o time inimigo tem mais AP ou AD.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem 3+ fontes de CC ou 2+ campeões AP. Tenacity (a stat que reduz a duração de stuns e slows em você) é a única defesa que importa depois que a imunidade ao primeiro CC da passiva é consumida.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — quinto ou sexto item nos jogos que passam do minuto 30. Uma vez ultrapassado o threshold de HP (em torno de 3000 HP bônus), a passiva te cura full out-of-combat em 4 segundos, ou seja, você cura full entre camps sem voltar pra base.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra carries de auto-attack (Vayne bot, Tryndamere top, Master Yi jungle). Reflete dano e aplica **Grievous Wounds** (debuff que corta a cura do alvo pela metade) on hit, o único counter para Tryndamere ou Vayne fed se curando do que pegam da sua aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra comps AP pesadas (Karthus + Brand, Lillia + Lux). Empilha magic resist conforme você toma magic damage e dá Move Speed, ambos coisas que Mundo quer.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contra burst AP single-target (Syndra, Veigar, LeBlanc). O spellshield (barreira de uso único que bloqueia a próxima habilidade direcionada em você) anula o opener de combo e reseta depois de alguns segundos out-of-combat.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra correntes de CC pesadas ou composições AP-heavy.

**Skill order:** Maxe **Q** primeiro (alcance, slow, dano percent-current-HP escalam por rank — sua única ferramenta ranged e seu setup principal de gank). Maxe **E** segundo (a ativa de missing-HP escala forte com bônus de AD, e bônus de AD escala com HP máximo). Maxe **W** por último; um ponto early basta para sustain do clear. Pegue **R** nos níveis 6, 11, 16.

**Runas:** Primária **Resolve** com **Grasp of the Undying** — a cada 4 segundos em combate de champion, seu próximo basic attack causa dano mágico bônus, te cura e dá HP permanente. Combine com **Font of Life** (seu slow de Q marca os alvos para que seu laner cure ao acertar — perfeito para gank), **Conditioning** (Armor e MR extras depois do minuto 12) e **Overgrowth** (HP scaling com mortes de minions próximos). Secundária **Sorcery** com **Nimbus Cloak** (burst de Move Speed depois de Flash ou Ghost) e **Gathering Storm** (Adaptive scaling a cada 10 minutos). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Matchups principais

- **Lee Sin / Elise / Xin Zhao:** Junglers de early game que invadem seu lado fraco. Acompanhe com vision wards (itens colocados que revelam uma área pequena do mapa por ~90 segundos) nos raptors e red buff (camps na sua jungle). Evite invades 1v1 pré-3 — seu clear é lento e você não tem dano de Smite para deletar uma tentativa 1v1 instantaneamente. Faça full clear, contesta o Scuttle e então comece a gankar.
- **Master Yi / Karthus:** Junglers de scaling. Você iguala o scaling deles quase item por item, mas eles batem o power spike antes (Yi em Blade of the Ruined King, item de attack speed com lifesteal; Karthus em Liandry's Torment, item AP de burn damage). Force lutas e objetivos (Drake bot side, Rift Herald top side — neutral monsters que dão buffs de time inteiro e ouro quando mortos) antes do minuto 18 e ganke lanes constantemente (um "gank" é uma visita surpresa do jungler em uma lane para conseguir kill) para negar a janela de farm deles.
- **Trundle:** Hard counter direto. O R dele (Subjugate) rouba sua Armor, MR e Move Speed por 8 segundos — exatamente seus três melhores stats. Evite skirmishes solo; lute contra ele só com aliados em follow-up de até 2 segundos. Compre ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** para aplicar Grievous Wounds no lifesteal do Q dele.
- **Hecarim / Volibear:** Tanks de engage espelho. Quem acerta o CC primeiro ganha o trade. Guarde a **passiva** para depois que eles se comprometerem (knockback do E do Hecarim, knockback do Q do Volibear). Uma vez que você come o primeiro CC deles de graça, você out-sustaina no follow-up.
- **Kha'Zix / Rengar:** Junglers assassins focados em burst. Eles invadem alvos isolados na side jungle. Tanke o primeiro burst deles com passiva + R, depois acerte um E quando estiverem HP-committed — o scaling missing-HP do seu E one-shota um Rengar a 70% HP de 30%.

## Power spikes e condições de vitória

- **Nível 4:** Full clear feito, as três habilidades online. Procure o primeiro gank na lane mais próxima de um inimigo preso pushando (a lane com o HP inimigo mais baixo e mais minions do lado inimigo do mid). Slow de Q a 975 de alcance mais W tickando em cima já é uma kill threat crível mesmo pré-6.
- **Nível 6:** Primeiro **Maximum Dosage**. O maior power swing do jogo do Mundo. Encontre uma luta em até 30 segundos depois de bater o 6 — ganke uma lane, contesta o segundo Scuttle ou setupa o primeiro Drake. O instant heal do R transforma um "gank perdido" em troca garantida.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completo (~ minuto 12-14):** Primeiro spike real de dano e sustain. Lutar por Drake ou Rift Herald com W tickando e procs de crit-heal do Sundered Sky no engage ganha o objetivo sem queimar R.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage online (~ minuto 22-26):** Pico de janela de teamfight. O cooldown do R fica curto o bastante para engage duas vezes por timer de Baron. Force cada objetivo; este é seu pico.

## Erros comuns

- **Invadir antes do nível 3.** O clear pré-3 do Mundo está entre os mais lentos e o Hailblade tem dano de Smite muito baixo. Um Lee Sin ou Elise que você encontra no minuto 1:30 com uma habilidade up vai te out-tradar e te deixar 2 camps atrás. Fique na sua jungle até o nível 4.
- **Apertar R depois de tomar dano.** O instant heal do R é uma % dos HP *faltantes*, mas a parte regen-over-time é desperdiçada se você ativar a 90% HP. Use R **antes** de comprometer pra um gank ou luta, não depois — você quer a regen tickando quando o burst chega, não tampando depois.
- **Gankar lanes sem priority.** Um gank numa wave congelada (uma wave parada perto da torre do laner inimigo) é kill grátis pro laner inimigo: a torre dele te zona, seu laner tem que andar longe da dele para dar follow-up. Só ganke lanes que estão pushando pro seu lado ou paradas no meio.
- **Pegar o frasco da passiva tarde demais.** O frasco químico (a garrafinha verde que dropa quando a passiva dispara) fica no chão alguns segundos antes de sumir. Se você deixa expirar no meio do gank, jogou a passiva inteira fora — sem cura, sem refund de cooldown. Pise em cima no segundo que ele dropa.
- **Buildar full tank sem Spirit Visage.** Cada stat defensiva do Mundo se compõe com healing-amp. Sem Spirit Visage, R cura menos, W cura menos, Soraka aliada cura menos. Spirit Visage é o item multiplicador; pular ele para HP puro é uma build pior pelo mesmo ouro.

## Dica avançada

Treine o **flank gank** atravessando a jungle inimiga (entrar na lane de lado ou por trás, não pelo river — o bush atrás do laner inimigo que ele não vê sem ward). No Mundo isso é singularmente potente por causa da passiva: a primeira habilidade de CC do laner inimigo é comida de graça no momento em que você aparece atrás dele, o que significa que mesmo um alvo a 100% HP que dá Flash de volta pra torre corre direto num projétil Q com slow de 975 de alcance e morre no E. O truque é cronometrar a entrada pelo bush do river ou pelo bush de trás exatamente no momento em que o laner inimigo empurra a wave pro seu lado e está longe da torre dele; o pattern de gank é invisível até você sair, e o CC perdido sela a kill antes dele conseguir se recuperar.
