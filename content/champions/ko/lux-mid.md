---
title: "Lux Mid Build & Guide — Patch 16.9"
slug: "lux-mid"
language: "ko"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Lux 미드 완벽 공략. 시작 아이템부터 코어 빌드, Sorcery 룬 선택, 주요 매치업 대처법, 파워 스파이크 타이밍 활용, 라인전에서 자주 하는 실수와 해결책, 그리고 W 캔슬 같은 고급 콤보 팁까지 한 페이지에 깔끔하게 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "스킬을 맞히면 적에게 표식이 남고, Lux의 다음 평타가 표식을 터뜨려 추가 마법 피해를 입힌다."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "직선 skillshot으로 최대 두 명을 속박. 쿨다운이 길어 poke가 아닌 setup용으로 아껴 쓴다."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "갈 때와 돌아올 때 Lux와 경로상의 아군에게 보호막. 재시전하면 즉시 회수된다."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "지정 지역에 슬로우와 지속 피해. 재시전으로 폭발. Lux의 핵심 라인 정리 도구."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "장거리 직선 광선으로 강력한 마법 피해. 적중 시 Illumination 표식을 모두 소비한다."
      dd_spell_id: "LuxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Diana, Talon, Akali) — stasis로 R 후속타까지 살아남는다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량 누적이 강한 조합 상대 (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사면 바로 교체"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Luden's Echo와 Shadowflame이 완성된 뒤, 오브젝트 교전에서 R로 최대 사거리에서 squishy 타겟을 저격한다. E로 공간을 통제하고 항상 frontline 뒤에 자리잡는다."
  weakness: "dash가 없고 자체 기동력도 0. diver와 assassin에게 하드 카운터를 당하며, frontline이 무너지면 포지셔닝도 함께 무너진다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Sorcery: Arcane Comet은 E에 Q를 이어 거의 확정으로 발동되며 모든 trade에 burst를 더한다. Manaflow Band로 라인전 E 난사용 마나를 유지, Transcendence로 CDR을 40% 이상까지 끌어올리고, Scorch로 저체력 poke 마무리."
    secondary_rationale: "보조 트리 Inspiration: Biscuit Delivery로 초반 체력·마나 sustain을 챙기고 Cosmic Insight로 한타에서 Flash 쿨을 더 자주 돌린다."
    secondary_alternative: "상대 팀에 마법 저항이 낮은 squishy가 둘 이상이면 Inspiration 대신 Precision으로 바꿔 Presence of Mind(킬 시 마나 환급)와 Coup de Grace(체력 40% 이하 적에게 +8% 피해)를 든다."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "dash 없는 immobile mage"
      reason: "Lux의 Q는 장거리 root다. dash나 은신이 없는 챔피언은 깨끗한 직선 위에 묶여서, 반응하기 전에 E + R 풀콤보를 그대로 받는다."
    - examples: ["senna", "ziggs"]
      archetype: "탈출기가 약한 후방 backline 스케일러"
      reason: "맵을 가로지르는 R이 작은 포지션 실수를 킬로 바꾼다. 멀리서 딜만 넣는 이런 챔피언들은 오브젝트 리젠 타이밍의 max-range 저격을 피할 수단이 없다."
    - examples: ["annie", "sylas"]
      archetype: "예고 동작이 큰 all-in mage"
      reason: "이쪽 engage는 가까이 붙어야 하고 선딜이 길다. Lux는 W로 burst를 막고, 상대가 후딜에 묶인 프레임에 Q를 박은 뒤 빠져나와 trade를 리셋할 수 있다."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "다중 진입기를 가진 기동성 assassin"
      reason: "Lux가 R 캐스팅을 끝내기 전에 사거리 안으로 파고든다. Zhonya's Hourglass가 도움은 되지만 stasis가 켜지기 전에 dash 콤보가 박히면 못 살아난다."
    - examples: ["xerath", "vel-koz"]
      archetype: "더 긴 사거리의 artillery mage"
      reason: "Lux의 Q 사거리 밖에서 일방적으로 poke한다. 거리를 좁힐 수단이 없어 매 웨이브마다 체력만 깎이고, all-in으로 받아칠 옵션도 없다."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "글로벌·맵 전체 roamer"
      reason: "Lux는 웨이브를 정리하느라 라인에 남는다. 상대는 궁으로 사이드와 드래곤 쪽 교전을 뒤집는다. 1대1 매치업은 이겨도 macro에서 진다."
---

## 개요

Lux는 후방에서 zoning(공간 차단), poke(원거리 견제), 그리고 마무리 한 방까지 책임지는 장거리 artillery mage다. 핵심은 **Light Binding (Q)** 으로 setup을 잡고, **Lucent Singularity (E)** 와 **Final Spark (R)** 로 피해를 누적시키는 흐름이다. 자체 기동력이 낮고 dash도 없기 때문에, 미니언과 frontline 뒤에 자리잡는 것이 이 챔피언의 기본 비용이다. 미드 라인이 어울리는 이유는 강이 양쪽으로 열려 있어 어느 쪽에서 gank가 와도 **Q**로 받아치거나 맵 반대편으로 **R** 저격을 날려 응징할 수 있기 때문이다.

게임 플랜은 말로 하면 단순하지만 실행이 까다롭다. 적이 **E** 위로 발을 디뎠을 때 **Q**를 박고(슬로우가 속박을 확정시킨다), 마나가 여유 있고 안전할 때 **E**로 웨이브를 밀고, **R** 쿨이 돌 때마다 사이드 라인 개입을 노린다. 실력 차이는 두 곳에서 갈린다 — **E** 위치 선정(상대가 라스트힛을 치러 어디로 발을 디딜지 예측)과 **R** 시야 플레이(와드가 있으면 안개 너머로 저격).

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + Health Potion 2개. 라인이 평타 harass 위주가 아니라면 Corrupting Potion은 굳이 살 필요 없다.

**코어 아이템 (구매 순서):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — burst(폭발 피해) 스파이크와 E 난사용 마나 sustain.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — squishy(체력 약한) 타겟을 지우는 데 필요한 고정 마법 관통.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst. 저체력 적에게 발동하는 패시브가 **R** 마무리 타이밍과 깔끔하게 맞아떨어진다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 scaling(시간이 갈수록 강해지는 성능) 배수기. AP 슬롯 중 가장 강력하다.

**상황별 아이템:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver(파고드는 챔피언)와 assassin 상대 (Zed, Diana, Talon, Akali).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐량을 누적하는 조합 상대 (Soraka mid, Vladimir, Dr. Mundo top).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 마법 저항 아이템을 사는 순간 바로.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 팀 입장에서 **R** 마무리 빈도가 더 중요하다면 Ionian Boots of Lucidity도 선택지다.

**스킬 마스터 순서:** **E** 선마(웨이브 클리어와 주력 DPS), **Q** 후마(유틸 속박), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조는 **Inspiration**의 **Biscuit Delivery** + **Cosmic Insight**, 또는 상대 팀에 마법 저항이 낮은 squishy가 둘 이상이면 **Precision**의 **Presence of Mind** + **Coup de Grace**.

## 주요 매치업

- **Yasuo / Yone:** 바람 장벽으로 **Q**와 **E**를 막는다. 상대가 스킬을 먼저 쓰기 전까진 **Q**를 아끼고, **E**는 안전 거리에서 웨이브 정리용으로만 쓴다.
- **Diana / Akali:** dive(다이브, 파고들어 죽이러 오는 플레이) 위협. Luden's Echo 다음 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 산다. 라인전 중 이들 상대로 **Flash**를 공격적으로 쓰지 마라.
- **Orianna:** 호각의 매치업. 한타에서 갈린다. 사거리는 비슷하지만 같은 아이템 셋이면 Orianna가 더 강하게 scaling하니, 평타 trade(짧은 교환)에 말려들지 마라.
- **Twisted Fate:** roam(다른 라인으로 영향력 넓히기) 우선순위 싸움. 노란 카드를 노리면 카드가 닿기 전에 **Q**를 박는다. 그게 아니라면 강과 삼거리 수풀에 와드를 깔아 **R** 동선을 추적한다.
- **Galio:** 6레벨 이전엔 미드에서 아군이랑 붙어 있지 마라(**W**가 모인 타겟을 응징한다). Galio가 미니언에 평타 치는 타이밍에 punish — 그는 사거리 기반 웨이브 클리어가 약해서 push 싸움에서 절대 못 따라온다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **E** 한 포인트와 시작 **Q** 조합만으로도, 천천히 밀려오는 웨이브 위에서 상대를 zoning할 도구가 갖춰진다.
- **6레벨:** 첫 **Final Spark**가 켜지면서 roam 압박과 저격 압박이 동시에 열린다. **Q-E-R** 콤보가 손에 익어 있다면, 와드 없는 미드 강 한복판 교전은 그대로 공짜 킬이다.
- **Luden's Echo 완성 (~12-14분):** 웨이브 통제권이 뒤집힌다. 상대 진영 쪽으로 웨이브를 밀어놓고 roam에 나설 수 있어, 정글러가 상대 봇 사이드로 동선을 짤 여유가 생긴다.
- **Rabadon's Deathcap 완성 (~24-28분):** 마법 저항 아이템을 한 칸도 안 산 squishy는 **R** 한 방에 증발한다. 이 타이밍에 오브젝트 한타를 강제로 열어라.

## 흔한 실수

- **setup 없이 Q를 harass용으로 던지기.** 먼저 **E**를 발 밑에 깔아 슬로우를 묻히고, 상대가 어쩔 수 없이 지나야 하는 경로에 **Q**를 쏜다. 맨 **Q** poke는 마나 낭비다.
- **빈 웨이브 보겠다고 E를 아껴두기.** 마나가 있으면 **E**는 쿨이 돌 때마다 웨이브에 던져라. 내주는 trade 손해보다 prio(우선권 — 라인을 밀어놓고 강·정글에 영향력을 행사할 권리)와 협곡 전령 / Scuttle 영향력이 훨씬 크다.
- **한타에서 자동으로 최대 사거리에 서기.** **R** 최대 거리에 서면 아군 peel(보호) 범위 밖이다. 측면 진입을 한 방에 안 죽으려면 뒤에서 두 번째 자리를 잡아라.
- **splitpush(사이드 단독 운영) 중 Q를 쿨마다 쓰기.** 사이드에선 **Q**를 gank 탈출용으로 남겨둬야 한다. 후속타를 따라줄 팀이 없으니, 속박은 poke 연료가 아니라 비상 탈출 버튼이다.

## 고급 팁

**Prismatic Barrier (W)** 캔슬을 연습하라. **W**가 바깥으로 나아가 정점에 도달하는 순간 재시전하면, 돌아오는 보호막이 최대 수치에 도달한 채로 즉시 소환되고 — peel과 보호막 폭격을 동시에 아군에게 꽂을 수 있다. 한타에서 **W**를 끝까지 자연스럽게 보낸 경우와 비교했을 때, 실효 보호막 양이 약 두 배에 가깝다.
