---
title: "Lee Sin Jungle Build & Guide — Patch 16.9"
slug: "lee-sin-jungle"
language: "ko"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Lee Sin 정글 완벽 공략. 시작 아이템부터 Skirmisher 코어 빌드, Conqueror 룬 선택, 주요 정글러 매치업 대처법, Eclipse 타이밍과 파워 스파이크 활용, 인베이드와 갱킹에서 흔히 하는 실수, 그리고 인섹 킥 같은 고급 콤보 팁까지 한 페이지에 정리한 신규 정글러용 실전 가이드입니다."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "스킬 시전 후 다음 평타 2회는 공격 속도가 증가하고 기력을 돌려줍니다. 스킬 — 평타 — 평타 리듬이 핵심입니다."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "직선 스킬샷. 적중 시 재시전으로 대상에게 돌진하며 잃은 체력 비례 물리 피해를 입힙니다. 주력 갭 클로저입니다."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "아군, 와드 또는 자신에게 돌진하며 보호막을 얻습니다. 재시전 시 흡혈과 주문 흡혈 획득. 기동성과 지속력을 동시에 제공합니다."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "광역 피해를 입히고 적중한 적을 드러냅니다. 재시전 시 둔화. 정글 클리어, 은신 카운터, 둔화 공급원입니다."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "회축으로 대상을 뒤로 밀어내고 뒤쪽 적들에게도 피해를 줍니다. 픽오프 마무리와 진형 붕괴 도구입니다."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "강한 물리 딜러 둘 (Yasuo + Caitlyn) 상대: 받는 물리 피해를 즉발이 아닌 느린 출혈로 분산시킵니다"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP 폭발 딜 (Diana, Syndra, Lux 미드) 상대: 라이프라인 보호막이 원샷을 버틸 수 있는 트레이드로 바꿉니다"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 CC 챔피언 3명 이상 (Leona + Lissandra + Sejuani) 상대: 강인함이 기절과 속박을 줄여 돌진 체인을 유지합니다"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "다이브가 필요할 때 (적 포탑 안으로 들어가 처치): 큰 첫 타격 후 라이프라인 보호막이 발동합니다"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "후반 측면 보험: R 타이밍을 놓쳐도 부활로 팀이 트레이드를 유리하게 가져갑니다"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "초반 14분을 인베이드와 갱킹으로 지배하세요. Eclipse 완성 후엔 모든 오브젝트를 경쟁하고 R로 핵심 적을 위치에서 뺍니다. 후반엔 측면을 잡아 물렁한 캐리를 우리 팀 쪽으로 차냅니다."
  weakness: "25분 이후 스케일링 캐리 상대로 크게 약해집니다. Q1이 빗나가거나 W 대상이 없으면 안정적인 돌진이 없습니다. 강한 CC 체인은 즉시 인게이지를 끊습니다."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 개요

Lee Sin은 초반 정글러 — 두세 명 사이의 짧은 교전을 이기는 Skirmisher입니다. 돌진을 줄줄이 엮는 무술가를 떠올리세요. 음파로 적중하고, 그 위로 돌진하고, 발차기로 적을 자기 팀 쪽으로 보내고, 매 스킬 사용 후 평타에 공격 속도 보너스가 자동으로 붙습니다. 키트 전체가 단 하나의 아이디어 위에 설계되어 있습니다. 처음 15분 동안 맵에서 가장 강한 전투원이 된 다음, 그 우위를 적 캐리들이 스케일링하기 전에 킬, 오브젝트, 템포로 변환하는 것입니다.

게임 플랜은 단순합니다. 처음 8분 동안은 인베이드 — 적 정글에 들어가 캠프를 훔치고 적 정글러를 잡으러 갑니다. 그 후엔 **Q**가 올라올 때마다 라인을 갱킹합니다. 후반엔 1대1을 시도하지 않고 (지니까) 측면 플랭크를 노립니다. 맵을 돌아 와드 없는 수풀에 숨었다가 적 캐리에게 **R**을 차서 우리 팀 쪽으로 보냅니다. **Q1**을 꾸준히 맞히지 못하면 이 모든 게 무너집니다 — 나머지 키트가 첫 스킬샷에 연쇄되기 때문입니다.

## 추천 빌드

**시작 아이템:** Smite + **Hailblade**로 두 번째 타격에 광역 피해가 붙는 빠른 정글 클리어, 그리고 **Refillable Potion**. Emberknife는 솔로 듀얼이 많은 느린 풀 클리어에서 최대 지속력이 필요할 때만 선택합니다.

**코어 아이템 (순서대로):**

1. **Eclipse** — 폭발 딜, 보호막, 옴니뱀프. 두 번 타격 보호막이 패시브의 시전 → 평타 → 평타 리듬과 완벽히 맞물립니다. Skirmisher용 가장 깔끔한 첫 아이템.
2. **Plated Steelcaps** vs AD 위주 적 / **Mercury's Treads** vs 강한 CC 3명 이상. 기본은 Plated.
3. **Heartsteel** — 체력과 충전형 평타가 길어진 교전을 응징합니다. "아이템 2개 시점에 죽는다"는 클래식 타이머를 넘어 싸울 수 있게 해줍니다.
4. **Black Cleaver** — Q-AA-Q 리듬과 함께 스케일링하는 방어구 관통. 팀의 물리 피해까지 위협으로 바꿉니다.

**상황 아이템:**

- **Death's Dance** — 강한 물리 딜러 두 명이 있는 팀 (예: Yasuo + Caitlyn) 상대. 받는 물리 피해를 즉시 들어오는 대신 느린 출혈로 분산시킵니다.
- **Maw of Malmortius** — AP 폭발 딜 라인 (Diana, Syndra, Lux mid) 상대.
- **Sterak's Gage** — 다이브가 필요할 때 (적 포탑 안으로 들어가 처치). 라이프라인 보호막이 팀의 후속타가 들어올 1초를 사줍니다.
- **Guardian Angel** — 4코어 이후 후반 측면 보험.

**신발:** 기본 Plated Steelcaps. Boots of Mobility는 초반 CC 위협이 없는 갱킹 위주 맵에서만 — 표준이 아닌 틈새 선택입니다.

**스킬 순서:** **Q** 우선 (피해와 갭 클로저), **E** 두 번째 (클리어와 둔화 가동률), **W** 마지막 (유틸은 1레벨로도 충분). **R**은 6, 11, 16에 찍습니다.

**룬:** 주력은 **Precision**과 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. 보조는 **Domination**의 **Sudden Impact** + **Treasure Hunter**로 스노우볼 리드 (시간이 지나며 커지는 초반 우위: 킬 → 골드 → 아이템 → 더 많은 킬)를 쌓거나, 스케일링 장기전이 예상되면 **Resolve**의 **Second Wind** + **Revitalize**.

## 주요 매치업

- **Vi:** **Q** 충전을 베이트하면 6레벨 전 교전을 집니다. **Q1**을 그녀에게 맞히고 **E**로 둔화한 뒤 발차기 후 서포터에게 돌진해 그녀가 쿨다운인 사이 캐리를 보호하세요.
- **Hecarim:** 3코어 이후엔 그가 더 강하지만 9분 전엔 약합니다. 일찍부터 강하게 압박하고, 6레벨을 먼저 찍으면 탑이나 미드를 쉴 새 없이 갱킹하세요. 그의 첫 아이템 이후엔 1대1 금지.
- **Master Yi:** 실력 매치업. 그의 **Q** 활성 중 당신의 **E**가 그를 드러내 타깃 락을 깹니다. 반사처럼 나올 때까지 연습하세요. 한타에선 **R**로 그를 우리 백라인 밖으로 차냅니다.
- **Kha'Zix:** 6레벨까지 인베이드. 진화한 **R** 이후엔 당신이 혼자면 솔로 킬당할 수 있습니다 — 12분 이후엔 팀 커버 없이 절대 적 정글에 혼자 들어가지 마세요.
- **Graves:** 템포 거울 매치업. 두 정글러 모두 6레벨까지는 강합니다. 더 많이 갱킹하는 쪽이 이깁니다. 그의 **E** 충전을 추적해서, 둘 다 썼다면 듀얼에서 이깁니다.

## 파워 스파이크 및 승리 조건

- **3레벨:** 키트 완성. 갱킹 패턴은 **Q1 → 아군 CC나 Flash 대기 → Q2 → E 둔화 → 평타 리셋**. 적 Flash가 없으면 60% 체력 물렁이는 죽습니다.
- **6레벨:** **Dragon's Rage**가 발차기 플레이를 엽니다. 6레벨 전 **R**은 가치가 없으며 — 6레벨 전 퍼스트 블러드가 게임 최대 레버리지입니다.
- **Eclipse 타이밍 (~9분):** 길어진 교전을 이깁니다. 이 구간 Scuttle, Drake, Voidgrubs에서 싸움을 강제하세요.
- **후반 (~30분):** Lee는 스케일링 캐리 (Vayne, Kog'Maw, Master Yi) 대비 약해집니다. 남은 승리 조건은 에이스 플랭크입니다. 적 정글에 시야를 잡고, 측면 위치를 찾아, 맵을 가로질러 적 캐리에게 **R**을 차고, **Q-E-W**로 후속.

## 흔한 실수

- **교전 중 저체력 미니언에 Q1 낭비.** **Q**는 두 부분 — 스킬샷과 돌진 — 입니다. 미니언 정리에 Q1을 쓰면 12초간 스킬을 통째로 태우고 갭 클로저가 사라집니다. Q1은 올인 (누군가 죽을 때까지 가는 완전 트레이드)을 위해 아끼세요.
- **교전 중 지속력 보려고 W 점프.** **W**의 흡혈은 진짜지만, 회복하려고 와드에 W를 쓰면 갭 클로저를 포기하는 셈입니다. 트레이드를 이길 수 있다면 **W**를 인섹 (역방향 발차기 — 고급 팁 참조) 또는 **R** 이후 서포터로 점프하는 데 아껴두세요.
- **후속 없는 R-into-tower.** 저체력 캐리를 우리 팀 쪽으로 차는 건 팀이 사거리 안에 있고 합류 준비가 됐을 때만 통합니다. 화면 밖에서 혼자 쓰는 **R**은 100골드짜리 동전 던지기입니다.
- **1레벨 레드 사이드 자동 리쉬.** Hailblade로 도움 없이 봇 사이드부터 풀 클리어가 됩니다. 리쉬는 Scuttle 경쟁을 포기하는 셈입니다. 봇 라인에 말하세요: 첫 어택 앤드 고만 리쉬하고 바로 떠나라고.
- **픽오프 플랜 없는 조합에서 Lee 픽.** Lee는 팀이 한 명의 고립된 적 처치 (한타 밖에서 적 한 명을 잡는 "픽오프")로 이득을 굴릴 수 있을 때 빛납니다. 후속 CC가 없는 팀이면 **R**은 단지 피해 막는 도구가 되니, 올인 아이템 대신 Death's Dance와 Sterak's 쪽으로 빌드를 조정하세요.

## 고급 팁

"인섹" 발차기: 대상을 지나쳐 걸어가, 그 뒤에 깐 와드로 **W**, 착지하는 순간 **R**을 누릅니다 — 발차기가 뒤에서 발사되어 대상을 멀리 보내는 대신 우리 팀 쪽으로 보냅니다. 전체 시퀀스는 **Q1 적중 → Q2 돌진 → 뒤에 와드 → 와드로 W → R**. 생각하지 않고도 타이밍이 맞을 때까지 Practice Tool에서 연습하세요. W 착지와 R 사이의 윈도우는 약 0.3초입니다 — 너무 느리면 대상이 당신을 향해 돌아서고, 너무 빠르면 W 모션이 R 시전을 잡아먹습니다. 압박 속에서도 체이닝이 되면 Lee는 당신 손에서 두 단계 위로 뜁니다.
