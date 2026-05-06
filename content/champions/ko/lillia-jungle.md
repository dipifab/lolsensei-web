---
title: "Lillia Jungle Build & Guide — Patch 16.9"
slug: "lillia-jungle"
language: "ko"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Lillia 정글 공략. 시작 아이템부터 AP 버스트 코어 빌드 순서, Inspiration 룬 선택, 정글 주요 매치업 대응법, 파워 스파이크 활용, 흔한 실수 정리, 그리고 E-Flash R 셋업 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "스킬 명중 시 챔피언과 몬스터에게 최대 체력 비례 마법 도트 스택을 부여. Dream Dust 스택이 R을 활성화."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "릴리아 주변 광역 회전 공격: 가까이는 일반 피해, 가장자리는 추가 고정 피해. 명중 시 이속 스택. 정글 클리어와 교전 DPS 핵심."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "차징형 광역기에 피해 구역. 중앙은 훨씬 강하게 적중. 단일 대상 버스트 스킬. 모션이 길어 E 둔화와 연계 필수."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "장거리 포물선 스킬샷: 피해, 둔화, 시야 부여. 빗나가면 대상에 부딪힐 때까지 굴러감. 셋업, 시야, 도주용."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Dream Dust가 묻은 적 챔피언 전체에 글로벌 졸음 누적 후 수면 부여. 첫 타격이 보너스 피해와 함께 기상시킴."
      dd_spell_id: "LilliaR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs 암살자, 다이브 조합 (Zed, Diana, Kha'Zix) — 정지로 빈틈을 메우고 도트와 R이 발동"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs 마저 없는 물몸 백라인 — 체력 임계 패시브가 R 기상 버스트 타이밍과 맞물림"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs 카이팅 위주 조합 — 추가 이속과 스킬 가속이 스킬 사이클 교전을 강화"
    - dd_id: "3135"
      name: "Void Staff"
      against: "주요 타깃이 마저 아이템(Mercury's Treads, Force of Nature) 구매 시 교체"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Q 패스로 주요 타깃에 Dream Dust 누적 후 R로 팀 전체 수면을 걸고 W 중앙 적중과 Q 연계로 정화나 보호 전에 최대 버스트를 마무리."
  weakness: "약한 초반 레벨과 단일 기동기(Q 이속 스택). 2-3렙 공격적 인베이드, 강 CC 연계(Lee Sin Q, Vi R), 그리고 R 타깃의 Mercury's Treads가 스노우볼을 끊음."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration 메인: First Strike가 클리어 위주 운영의 갱마다 추가 골드를 보상, Magical Footwear는 농사 중 무료 신발 제공, Biscuit Delivery와 Cosmic Insight가 초반 마나와 Smite/Flash 쿨감을 챙겨 오브젝트 교전을 지원."
    secondary_rationale: "Sorcery 보조: Manaflow Band가 마나를 늘려 캠프 사이 Q-W-E 남발에도 마르지 않게 하고, Transcendence는 두 번째 한타부터 R 쿨을 줄이는 스킬 가속을 제공."
    secondary_alternative: "장기 1대1 교전(Master Yi, Warwick, Udyr) 상대로는 Inspiration을 Precision으로 교체, Conqueror 핵심룬과 Triumph 채택: 적응형 피해 누적과 처치 시 체력 회복으로 긴 듀얼을 뒤집음."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "초반 인베이드 없는 농사 위주 정글러"
      reason: "6레벨까지 평화롭게 클리어를 원함. Lillia는 같은 농사 속도를 맞추면서 Q 이속 스택과 패시브 도트로 두꺼비 싸움에서 우위."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "최대 체력 도트에 약한 탑 탱커"
      reason: "Liandry's Torment와 패시브 최대 체력 비례 화상이 큰 체력 풀을 빠르게 깎음. R 수면이 느린 캐스팅 위협(Sion R, Mundo Q)을 팀의 무료 포지셔닝으로 전환."
    - examples: ["senna", "kog-maw"]
      archetype: "기동력 없는 백라인 캐리"
      reason: "광역 E로 갱 락다운을 셋업한 뒤 R 수면이 프론트라인 뒤로 빠지기 전 확정 픽업 윈도우를 제공."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "2-3렙 공격적 인베이더"
      reason: "Lillia의 1-3레벨이 가장 약함; 강 CC 없고 Q만 피해 수단. 인베이드 성공 시 클리어와 기동성 파워 스파이크 전에 사망."
    - examples: ["yasuo", "camille"]
      archetype: "W 둔화를 무시하는 돌진기/Wind Wall 챔피언"
      reason: "단일 대상 W 버스트는 중앙에 묶여 있어야 함. 반복 돌진과 Camille E 후크샷이 빈 땅을 때리게 만듦."
    - examples: ["kindred", "graves"]
      archetype: "두꺼비를 이기는 원거리 AD 정글러"
      reason: "Q 히트박스 안으로 들어가야 하는 그녀와 달리 평타 사거리로 두꺼비를 이김. 두꺼비를 두 번 연속 잃으면 강 시야와 로밍 타이밍이 무너짐."
---

## 개요

Lillia는 패시브 **Dream-Laden Bough**로 모든 스킬에 최대 체력 비례 마법 도트 스택을 적용하는 AP 스커미셔 정글러다. 모든 Q 휘두름, 모든 W 충격, 모든 E 씨앗이 "dream dust" 표식을 남기고 몇 초간 피해를 틱으로 적용한다 — 이것이 그녀가 거의 모든 다른 AP 정글러보다 캠프를 더 빨리 클리어하는 이유이며, 쿨다운이 비어 있을 때조차 듀얼이 적을 갈아내듯 느껴지는 이유다. 게임 플랜은 단순하다: 가능한 한 많은 적 챔피언에게 dust를 누적한 뒤 **R**을 눌러 한꺼번에 잠재운다.

그녀에게 필요한 건 템포지 느린 농사가 아니다. **Q**로 캠프 사이를 이동하면서 이속 버프 스택을 유지하고, **E**로 와드 사거리 밖에서 갱을 가고, 대상을 둔화시킨 뒤 교전에서는 **W**를 단일 대상 망치로 사용한다. 후반에는 R이 AP 정글 풀에서 가장 신뢰할 수 있는 팀 전체 셋업 CC지만, 이는 사전에 타깃을 표식해야 성립한다 — 깨끗한 적 팀에 그냥 R을 누르는 것은 궁극기 낭비다.

## 추천 빌드

**시작 아이템:** Hailblade (1039) + Refillable Potion (2031). Lillia는 원거리이므로 Hailblade가 정확한 강타 펫 시작템.

**코어 아이템 (순서대로):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade의 퀘스트 업그레이드. 몬스터 경험치가 충분히 쌓이면 약 3-4분에 자동 진화. AP 버스트 펫 동반자로, 스킬 후 평타마다 마법 온힛 효과를 추가해 패시브 도트와 완벽 시너지.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 완성 아이템. 최대 체력 비례 화상(즉발 버스트가 아니라 몇 초에 걸쳐 분산되는 피해)이 패시브와 누적: 적의 총 체력이 클수록 더 빠르게 갈아냄.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. Magical Footwear가 약 12분에 무료 신발을 제공한 뒤 기본 신발.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 장기 교전 아이템: 옴니뱀프(피해 흡혈)를 제공하고 전투 3초 후 피해 일부를 고정 피해로 전환. 그녀의 도트 시계와 자연스럽게 맞물림.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 배율 증폭. 패시브의 칩 데미지를 실제 원샷 윈도우로 전환.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 암살자와 다이브 조합 상대(Zed, Diana, Kha'Zix). R로 백라인에 들어간 직후 정지가 시간을 벌어주는 동안 도트와 팀이 킬을 마무리.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 마저 없는 물몸 백라인 상대. 저체력 임계 패시브(대상이 낮은 체력일 때 추가 마법 피해)가 R 기상 틱과 맞물림.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 카이팅 위주 조합 상대. 추가 이속과 스킬 가속이 스킬 사이클 교전을 강화. 그녀의 피해는 평타가 아니라 스킬 연계에서 나오기 때문.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 주요 타깃이 마저 아이템을 구매하는 순간.

**신발:** Sorcerer's Shoes 기본. AP 버스트와 강 CC가 함께 있을 때(Lissandra + Twisted Fate)는 Mercury's Treads도 무난; 강인함이 R 시전 시간을 보호.

**스킬 순서:** **Q** 우선 마스터(클리어 속도와 교전 DPS), **W** 두 번째(단일 대상 버스트), **E** 마지막. **R**은 6, 11, 16렙에 찍음. 1렙 **Q**, 2렙 **E**(갱용), 3렙 **W**.

**룬:** 메인 **Inspiration**에 **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**.

## 주요 매치업

- **Lee Sin / Xin Zhao:** 2-3렙 공격적 인베이더 (풀 키트 갖추기 전에 정글로 들어와 죽이려 함)로, 클리어와 기동성 파워 스파이크 도달 전에 그녀를 지움. 그들의 예상 인베이드 경로에서 가장 먼 캠프부터 시작; 라이너에게 두 번째 버프 근처 와드를 부탁. 6레벨 이전에는 두꺼비(강의 게)를 다투지 말 것.
- **Karthus:** 농사 경쟁. 후반에는 그가 우위지만 6-14분 구간은 그녀가 템포로 이김. 그의 클리어를 추적하고 R 쿨마다 라인을 갱. 뒤처졌다면 듀얼하지 말고 사이드 오브젝트 교환에 집중.
- **Amumu:** 둘 다 빠르게 클리어하지만 그는 6렙 이전 교전 존재감이 없음. 첫 클리어 후 그의 맵 사이드 두꺼비를 챙김; Q 스턴이 쿨이면 그가 응징 불가.
- **Master Yi:** 그가 2템 이상이 되면 카운터픽 영역. 평소보다 일찍 ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive**를 올리고, 그의 Q(알파 스트라이크)를 카이팅. Q 패시브 이속을 누적하고 E를 뒤에 미리 깔 것.
- **Graves:** 풀 체력에서 두꺼비를 그에게 내줌. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment**가 완성될 때까지 맵 반대편으로 돌 것; 최대 체력 비례 화상이 평타 트레이드를 마침내 평준화.

## 파워 스파이크 및 승리 조건

- **3레벨 (Q + W + E):** 풀 키트 해금. 첫 클리어가 약 3:15에 건강한 체력으로 마무리 — E 셋업 후 W 중앙 적중을 노리는 가장 빠른 갱 윈도우.
- **6레벨 (R 해금):** 첫 **Lilting Lullaby**. 체력 낮은 라이너에게 사전 누적된 dust를 찾고: 시야 안으로 진입, R, 1.5초 램프 대기, 기상 콤보 적중. 키트에서 가장 기술적인 타이밍 (이른 R은 궁극기 낭비).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 완성 (~ 9-11분):** 교전 DPS 두 배. 여기서 유충 또는 첫 드래곤 한타를 강제; 도트와 아이템 화상이 탱커 프론트라인을 재포지션 전에 갈아냄.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 완성 (~ 18-22분):** 장기 교전 파워. 5대5에서 브루저를 지속력으로 이김. 회복이 계속 적용하는 피해량에 비례하기 때문이고, 그녀의 키트는 모든 쿨다운에 피해를 적용하기 때문.

## 흔한 실수

- **Dream Dust 없는 적에게 R 시전.** R은 패시브 스택을 이미 가진 대상만 잠재움. 먼저 Q 또는 E로 명중시킬 것; "빈" R은 짧은 졸음만 부여하고 풀 수면이 아님.
- **W를 적중시키려 가만히 서 있기.** W 중앙이 버스트지만 차징이 길다. 먼저 E 둔화와 연계: E가 적중하면 Flash 셋업 없이도 W 중앙 적중이 거의 확정.
- **적의 시야에서 Q 남발.** Q는 시전마다 시야 노출. 와드된 적 정글에서 Q를 남발하며 캠프를 클리어하면 적 미니맵에 큰 빨간 핑이 표시됨. 조용히 진입한 뒤 커밋.
- **정글 펫 업그레이드 무시.** 많은 신규 Lillia 유저는 너무 효율적으로 클리어하다가 Hailblade 퀘스트를 놓침. 펫 바를 계속 확인 — "needs more XP"에서 멈추면 귀환 전에 작은 캠프 하나를 더 거칠 것.
- **후반 R 픽을 혼자 시도.** R은 팀 셋업 도구지 솔로 갱 버튼이 아님. R 시점에 팀이 중간 로테이션이면 수면 타이머가 도착 전에 끝남. 스킬을 핑하고 1초 센 뒤 커밋.

## 고급 팁

미드 강 R 셋업을 위한 "E-flash" 각도를 연습. 측면 부쉬에서 적 미드 라이너 쪽으로 이동, 그의 진행 경로에 flash-E를 사용해 씨앗이 그의 뒤로 떨어지게 함(둔화로 걸어 들어가도록 강제), 그 둔화 윈도우에 R. 둔화가 R이 발동되기 전에 패시브 스택이 적용되도록 보장하므로 부분 졸음이 아닌 풀 수면이 됨. 적이 로테이션 중이고 와딩이 드문 오브젝트 스폰에서 캐스팅을 살림.
