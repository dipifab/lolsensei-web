---
title: "Kennen Top Build & Guide — Patch 16.9"
slug: "kennen-top"
language: "ko"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "League of Legends Patch 16.9 케넨 탑 라인 가이드입니다. 스타터 아이템, AP 브루저 빌드 경로, 핵심 매치업, 파워 스파이크, 흔한 실수와 마지막에 고급 팁 한 가지를 다룹니다."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "케넨의 모든 스킬은 대상에게 Mark 스택을 쌓습니다. 3스택이 쌓이면 기절합니다. 키트의 핵심 엔진이며, 모든 콤보는 트리플 스택을 노립니다."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "직선 스킬샷으로 마법 피해를 주고 Mark 1스택을 부여합니다. 장거리 견제와 대상에게 첫 스택을 쉽게 쌓는 도구입니다."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "패시브 on-hit(타격 시 효과): 5번째 평타마다 추가 마법 피해와 Mark 1스택을 부여합니다. 액티브: 이미 Mark가 있는 모든 주변 적에게 마법 폭발 피해를 입힙니다."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "유닛을 관통하는 짧은 대시. Mark 1스택을 부여하고 적중 시 에너지를 회복합니다. 종료 후 몇 초간 공격 속도를 얻습니다. 이동 및 위치 조정 도구."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "케넨 주위의 채널링 AOE. 매 틱마다 마법 피해를 입히고 범위 내 적에게 Mark 1스택을 부여합니다. 적이 모여 있으면 2초 내에 팀 전체를 기절시킵니다."
      dd_spell_id: "KennenShurikenStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "장기 교전과 브루저 탑 상대(Sett, Darius, Mordekaiser): 교전 중 sustain과 true damage 변환"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "Magic Resist 없는 물몸 백라인 상대: 35% HP 이하 추가 마관이 R 마무리와 맞물림"
    - dd_id: "3135"
      name: "Void Staff"
      against: "상대 우선 타깃이 Magic Resist 아이템을 구매하는 즉시"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐링 스택 챔프 상대(Vladimir 탑, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "한타에서 Flash + R로 적 백라인(상대 ADC와 메이지가 늘어선 줄)에 진입해 여러 대상에게 동시에 패시브 트리플 스택을 쌓는다. AOE 기절 + W 폭발이 한타를 결정짓는다."
  weakness: "R 외에는 신뢰할 만한 하드 CC가 없고, R은 채널링이라 끝까지 commit해야 한다. 즉발 기절이나 띄우기(Pantheon W, Camille E2)는 스택이 박히기 전에 궁을 끊어버린다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination 메인: Electrocute는 Q + W 폭발 + 평타로 발동되어 트리플 스택마다 추가 burst를 준다. Taste of Blood로 라인 sustain, Sixth Sense로 사이드 와드 감지(flank 핵심), Ultimate Hunter로 R 쿨 단축."
    secondary_rationale: "Resolve 보조: 케넨은 R로 근접에 뛰어들어야 하므로, Second Wind가 라인 견제 중 HP를 회복시키고 Bone Plating은 all-in(킬까지 가는 풀 트레이드) 진입 시 첫 세 번의 타격을 흡수해 준다."
    secondary_alternative: "강한 원거리 견제 상대(Vladimir, Lillia 탑)에게는 Resolve 대신 Sorcery로 변경하여 Nimbus Cloak(소환사 주문 후 추가 이동 속도, R을 더 빠르게 적중)과 Transcendence(스킬 가속)를 채택한다."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "돌진기 없는 근접 브루저"
      reason: "케넨의 평타 사거리(~550)는 이들의 이동 속도를 압도한다. Q 견제와 E 위치 조정으로 6레벨 파워 스파이크 전까지 위협 사거리 밖에서 안전하게 farm한다."
    - examples: ["tryndamere", "yorick"]
      archetype: "신뢰할 만한 CC가 없는 스플릿푸셔"
      reason: "이들은 R 채널링을 막을 lock 수단이 없다. 케넨이 1-2 아이템을 갖추면 flank 한타마다 여러 적에게 3스택 기절이 들어가는데, 사이드 라인 단독 split으로는 그 영향력을 따라잡을 수 없다."
    - examples: ["udyr", "olaf"]
      archetype: "단거리 저거넛"
      reason: "E 대시와 W on-hit 패시브로 카이팅한다. 이들의 stickiness는 매 걸음 붙어 있는 데 의존하는데, 케넨의 사거리와 대시 리프레시가 이들을 평타 사거리 밖으로 밀어낸다."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "즉발 하드 CC 브루저"
      reason: "Pantheon W의 기절(단일, 즉발)이나 Camille E 두 번째 시전의 속박은 R 채널링을 도중에 끊는다. 단 한 스택도 박히기 전에 AOE 기절을 잃고, engage가 통째로 낭비된 궁이 된다."
    - examples: ["vladimir", "lillia"]
      archetype: "원거리 sustain 탑 라이너"
      reason: "처음 6레벨 동안 Q보다 사거리가 길고 견제를 회복으로 받아낸다. 돌진기가 없는 케넨은 짧은 트레이드마다 손해를 보고 8분쯤이면 CS에서 뒤처진다."
    - examples: ["sion", "galio"]
      archetype: "Magic Resist와 cleanse형 패시브를 가진 탱커"
      reason: "Sion의 사망 패시브와 Galio W의 마법 피해 실드가 burst 윈도우를 무력화한다. Mark 3스택은 여전히 기절시키지만, MR을 쌓는 순간 W 폭발은 절반의 피해만 들어간다."
---

## 개요

케넨은 한타에서 flank engager로 탑을 가는 원거리 AP 요들이다(전투를 우회해 적이 지켜보지 않는 쪽에서 진입하는 역할). 키트 전체가 하나의 메커니즘을 중심으로 짜여 있다. 패시브 **Mark of the Storm (P)**은 3번 쌓이면 기절을 건다. 모든 스킬 — **Q**, **W** 액티브, **E** 대시, **R**의 매 틱 — 이 1스택을 쌓으므로, 깔끔한 한타 진입은 적 팀 전체를 2초 안에 기절시킨다. ~550의 평타 사거리로 대부분의 브루저를 압도해 라인전이 괜찮고, 진짜 정체성은 6레벨에서 풀린다. 미드-후반 한타를 뒤집어 놓는 탑의 flank engager 그 자체다.

게임 플랜은 설명은 단순하지만 실행은 까다롭다. **Q** 견제(전투에 commit하지 않고 적 HP를 깎는 원거리 harass)와 **W** on-hit 패시브(몇 평타마다 발동되는 추가 효과)로 안전하게 farm하고, 오브젝트를 위한 압박을 유지하다가 **Flash + R**로 적 백라인(탱커 뒤에 서 있는 squishy 캐리들의 줄 — ADC와 메이지처럼 피해는 높지만 HP가 낮은 챔프)에 진입한다. 스킬 표현력은 두 곳에 있다. 에너지 관리(케넨은 에너지를 빨리 태우고 없으면 시전 불가)와, **R** 채널링이 즉발 기절(스킬샷 없이 클릭만으로 거는 기절)에 끊기지 않도록 한타 진입 각도를 고르는 판단이다.

## 추천 빌드

**Starting items:** Doran's Shield + Health Potion 2개. 평타 견제가 전혀 없는 라인이고 초반 에너지 회복을 원한다면 Doran's Ring도 허용된다.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — burn(즉발이 아니라 이후 몇 초에 걸쳐 들어오는 피해)이 **R**의 다중 대상 특성과 함께 scale한다. 모든 적 모든 틱마다 burn이 발동되어 탱커의 HP 풀을 녹인다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 정작 기절시키고 지우고 싶은 squishy 백라인을 위한 고정 마법 관통.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — **Flash + R** 직후 stasis를 사주어, 너의 기절 스택이 마저 박히는 동안 적 팀이 얼어 있는 표적에 쿨다운을 낭비하게 만든다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 배율. 만들어내는 **R** burst가 Magic Resist를 사지 않은 squishy를 원샷한다.

**Situational items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 브루저 탑 상대(Sett, Darius, Mordekaiser)에서는 Liandry's 대신. 교전 중 sustain(전투 도중 회복/리젠) 더하기 true damage 변환 덕에 너에게 붙는 두 번째 melee 파도를 견뎌낼 수 있다.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — Magic Resist가 없는 squishy 백라인 상대. HP-임계값 패시브(35% HP 이하 추가 마관)가 **R** 마무리와 정확히 맞물린다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선 타깃 중 누구든 Magic Resist 아이템을 사는 순간.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐링 스택 챔프 상대(Vladimir 탑, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 하드 CC를 가진 마법 피해 위협이 2 이상이면 허용.

**스킬 순서:** **Q** 선마(가장 높은 기본 피해, 가장 짧은 쿨다운 — 주력 견제이자 콤보의 첫 스택), **W** 다음(교전 내 burst 향상), **E**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 메인 **Domination**에 **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. 보조 **Resolve**에 **Second Wind**와 **Bone Plating**으로 라인전 내구를 챙긴다.

## 주요 매치업

- **Garen:** 평타 사거리로 압도한다. **Q**로 견제하고, 그의 **E**(스피닝)에는 절대 맞지 말며, 그가 **Q** 침묵을 commit할 때 **E** 대시로 통과해 빠진다. 3레벨부터 라인 우위가 가능하다.
- **Sett:** 그의 **W** 충전 게이지 사거리 밖에 머문다 — 평타 한 대마다 게이지가 찬다. **W**가 비었을 때만 트레이드하고, **E** 기절을 맞으면 대시로 통과해 facing을 끊는다.
- **Pantheon:** 가장 어려운 매치업. **W**가 즉발이라 매 한타 **R**을 끊는다. 두 번째 아이템 전에 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 가고, 그의 **W**가 쿨이 돌기 전엔 절대 **R**로 engage하지 마라.
- **Vladimir:** 라인이 길고 CS가 밀린다. Doran's Shield + Second Wind로 가고, 풀 진입 punish용으로 **Q**를 아껴두며, 6 전에는 정글 압박을 부르는 게 답이다 — 장기 트레이드는 못 이긴다.
- **Mordekaiser:** **R**에 의해 갈리는 호각 매치업이다. 그의 사망 영역은 너희 팀의 peel을 끊지만, 너는 AOE 기절을 가져온다. 그의 **R**이 살아 있으면 engage 금지, 쿨이면 그의 백라인에 너의 **R**을 박는다.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **Slicing Maelstrom**. **Flash**와 결합되면 케넨이 게임을 결정짓는 챔프로 변하는 순간이다 — 모여 있는 적 팀에 Flash + R이면 사거리 안의 모두를 기절시킨다.
- **9레벨 (Q 마스터):** **Thundering Shuriken**의 5랭크 쿨다운은 4초. 라인전과 사이드 라인 farm이 trivial해지고, 안전한 **Q** 견제로 타워까지 깎을 수 있다.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 14-16분):** 첫 한타 아이템 스파이크. 드래곤 한타에는 무조건 팀과 모인다. 2아이템 **R**은 squishy 서폿과 ADC를 지운다.
- **3아이템 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ 24-28분):** burst 임계점 돌파. **R** + **W** 폭발 콤보가 Magic Resist를 안 올린 백라인을 원샷한다. Baron과 후반 오브젝트 한타를 강제하라.

## 흔한 실수

- **Flash 없이 R로 engage한다.** 케넨은 백라인까지 갈 돌진기가 없다. **Flash + R**이 없으면 프론트라인(전투를 여는 탱커와 브루저)만 잡을 수 있는데, 적 탱커를 기절시켜 봐야 캐리들이 너를 카이팅(평타 사거리 밖으로 빠지면서 공격)해 죽일 뿐 아무것도 얻지 못한다.
- **라인에서 에너지를 다 태운다.** 케넨은 마나가 없는 대신 에너지가 천천히 회복된다. 미니언 웨이브에 **Q**를 남발하면 적 정글이 왔을 때 텅 비어 있다. 도주용 **E** 대시를 위해 항상 ~50 에너지는 남겨라.
- **W를 먼저 마스터한다.** **W**의 액티브 피해가 **Q**보다 크지만, 5랭크 쿨다운은 **Q** 4초 vs **W** 6초다. **Q** 선마가 분당 스택 수와 지속 견제량을 올려 준다. **W**는 8레벨까지 1랭크에 둔다.
- **R 사거리 밖으로 나가 스스로 R을 끊는다.** **R**은 챔피언에 묶인 채널링이다. 한타 사거리 밖으로 나가면 틱이 적에게 닿지 않는다. 한타의 가장자리가 아니라 한복판에 서라 — Zhonya's가 정확히 이 용도로 존재한다.
- **W on-hit 패시브를 잊는다.** 5번째 평타마다 추가 마법 피해와 공짜 Mark 1스택이 발동된다. 1v1 트레이드에서 **Q**와 **E** 사이에 평타 2회를 끼워 넣어, 상대가 예상하지 못한 기절에 빠지도록 유도하라.

## 고급 팁

케넨의 가장 강한 flank는 고수들이 "blind ult"라고 부르는 무빙이다. 시야 밖(상대가 보지 못하는 안개 영역)에서 적이 가장 크게 모인 곳으로 곧장 Flash해 들어가, 그들이 너의 모델을 보기 전에 **R**을 시전한다. 상대의 반응 시간은 **R**의 오디오 큐와 캐릭터 렌더링 — 약 0.4초 — 으로, 채널링 사거리 밖으로 한 발 빼는 데 필요한 시간보다 짧다. 세팅을 하려면 너희 팀이 이미 한타 중이거나(혹은 그런 척하고 있어야) 적이 앞을 보고 있고, 너는 와드 없는 정글로 우회해 들어간다. 14-16분 드래곤 한타에서 연습하라. 강을 건너 적 raptor camp에 숨고, 프론트라인이 너희 팀에 engage하는 순간을 기다렸다가 Flash + R로 백라인에 박는다. 한 번의 깔끔한 실행이 4v5 수적 열세의 오브젝트를 가져온다.
