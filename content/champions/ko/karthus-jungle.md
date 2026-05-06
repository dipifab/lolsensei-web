---
title: "Karthus Jungle Build & Guide — Patch 16.9"
slug: "karthus-jungle"
language: "ko"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Karthus 정글 완벽 공략. 시작 아이템부터 스마이트 동선, Defile 기반 정글 클리어, 글로벌 R 스나이프, 핵심 매치업 대처법, 파워 스파이크 타이밍, 흔한 실수와 사후 패시브를 활용한 자살 엔게이지 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "사망 시 Karthus는 7초간 영혼 형태로 남아 마나 소모 없이 Q/W/E를 계속 사용한다. 죽은 뒤에도 한타를 마무리할 수 있게 해주는 핵심 패시브."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "짧은 딜레이를 가진 지정 광역 폭발기. 단 한 명만 맞히면 두 배의 데미지가 들어간다. Skill expression: 동선을 예측해 단일 대상으로 고립시키는 것이 핵심."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "마법 저항력을 깎고 통과하는 적을 둔화시키는 넓은 벽. 추격 도구, 갱킹 락 또는 백라인을 노리는 다이브 차단 피일용으로 활용."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "토글하면 Karthus 주변에 초당 마법 데미지 오라가 깔리고 마나가 지속 소모된다. 정글 클리어와 한타 DPS의 진짜 엔진이며, 모든 캠프에서 켜둔 채 진행한다."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "3초 채널링의 글로벌 궁극기로, 맵 위 모든 적 챔피언에게 강력한 마법 데미지를 가한다. 크로스맵 스나이프와 사후 정리용 도구."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "초반 인베이드형 정글러(Lee Sin, Xin Zhao, Elise) 상대 — 스테이시스로 0 기동성 약점을 보완"
    - dd_id: "3135"
      name: "Void Staff"
      against: "주요 타겟이 첫 마법 저항 아이템을 사면 교체(Mercury's Treads도 포함)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 엔게이지 상대(Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 스택형 조합 상대(Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "6레벨에 도달해 적 정글러보다 빠르게 풀 클리어하고 R로 저체력 적을 크로스맵에서 마무리한다. 두 아이템 이후엔 Defile 만으로 5v5에서 백라인을 녹인다."
  weakness: "대시도 탈출기도 없고 초반 1대1도 약하다. 6레벨 전 카정이나 인베이드를 당하면 게임 내내 끌려간다. 기동성 좋은 암살자와 강한 CC 정글러는 Liandry's 전 클리어를 부순다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 주룬: Conqueror는 초당 데미지를 주는 토글 오라 Defile 위에서 빠르게 스택돼 긴 교전을 보너스 AP와 회복으로 바꾼다. Triumph는 처치 관여 시 체력 회복, Legend: Haste는 R 쿨감, Last Stand는 저체력 영혼 형태 구간을 보상한다."
    secondary_rationale: "Sorcery 부룬: Manaflow Band는 Defile이 매 초 마나를 빨아먹어 생기는 초반 마나 부족을 해결한다. Transcendence는 능력 가속 40% 캡 한계를 넘게 해 Q가 웨이브 사이에 더 빨리 돌아오고 R 회전도 잦아진다."
    secondary_alternative: "인베이드 강한 적 정글(Lee Sin + Pyke 로밍, Elise + 초반 CC 서폿)이라면 Sorcery 대신 Resolve의 Second Wind(피해 후 체력 재생, 3렙 인베이드 생존에 도움)와 Overgrowth(처치한 몬스터에 따라 체력 보너스)로 교체."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "초반이 약한 후반 스케일링 챔피언"
      reason: "온라인이 되려면 25분 이상이 필요한데, Karthus는 이미 6레벨부터 교전을 이기고 R로 그들의 솔로 바론을 봉쇄한다. 템포로 앞서 드레이크를 강요하고 그들의 스파이크가 오기 전에 게임을 끝낸다."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "3레벨 인베이드 없는 농사 위주의 느린 정글러"
      reason: "풀 클리어 속도는 Karthus와 같지만, Karthus에겐 글로벌 R이 있어 그들의 갱킹을 2-for-1 트레이드로 바꾼다. 너의 라이너가 죽어도 R이 그들의 라이너를 크로스맵에서 정리해 준다."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "기동성 없는 백라인 스케일러"
      reason: "크로스맵 R이 그들의 포지션 실수를 오브젝트 스폰 타이밍의 처치로 바꾼다. 멀리서 기여는 하지만 점멸이나 궁이 빠진 상태에선 글로벌 스나이프를 피할 수 없다."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "강력한 CC를 가진 초반 인베이드 정글러"
      reason: "Defile의 마나 효율이 오르기 전인 2-3레벨에 Karthus의 정글로 들어온다. 탈출기도 대시도 없고 Q는 Lee Sin의 Q+W 콤보나 Elise의 거미줄 강하에서 자신을 구하기엔 너무 느리다. 한 번의 인베이드 실패가 게임 전체를 망친다."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "은신 또는 폭딜형 암살자 정글러"
      reason: "방어력이 0인 대상에게 고립 데미지로 시작한다. Zhonya's Hourglass조차 1대1에선 시간을 벌 뿐이다. Karthus는 Conqueror를 쌓거나 의미 있는 트레이드를 하기 전에 죽는다."
    - examples: ["nocturne", "warwick"]
      archetype: "시야 차단 갱커와 추적형 정글러"
      reason: "Nocturne의 R은 팀 시야를 끊어 Karthus가 백라인 엔게이지를 못 보게 만든다. Warwick의 피 추적은 크로스맵 R 채널링을 그대로 다이브로 바꾼다. R을 안전하게 채널링하려면 시야가 필요하지만 이 둘은 그 시야를 빼앗는다."
---

## 개요

Karthus 정글은 교과서적인 **에이펙스 정글러**다. 개인 천장이 게임 내에서 가장 높은 챔피언 중 하나지만, 바닥은 가장 낮은 축에 속한다. 키트는 두 가지 아이디어로 짜여 있다. **Defile (E)**는 Karthus 주변에 매 초 마법 데미지를 입히는 토글 오라이고, **Requiem (R)**은 거리에 상관없이 맵 위 모든 적 챔피언을 타격하는 글로벌 궁극기다. 전자는 마나 문제만 해결되면 정글을 거의 모든 챔피언보다 빠르게 정리해 주고, 후자는 맵 어디서든 일어나는 포지션 실수를 처치로 바꿔준다 — 정글러가 적시에 할 수 있는 가장 가치 있는 일이다.

게임 플랜은 정글 기준에서도 경직돼 있다. 첫 세 캠프(레드 → 크룩스, 또는 사이드에 따라 블루 → 그롬프)를 모든 캠프 동안 **E**를 켠 채 풀 클리어하고, **Liandry's Torment** 부품을 위해 귀환한 뒤, 6레벨부터는 드레이크와 그럽(공허 구덩이의 작은 중립 몬스터로 골드와 팀 단위 버프를 준다) 주변에서 스커미시(한 진영당 1~3명이 짧게 붙는 교전, 보통 정글 캠프나 강가 오브젝트 근처)를 하면서 크로스맵 R 타겟을 노린다. Karthus는 탈출기도 대시도 없으니 1분 30초 자기 정글 입구에 와드를 박는 건 선택이 아니다 — 못 본 인베이드는 기동성 좋은 정글러에게 그냥 헌납하는 처치다. 보상은 6레벨 이후 스파이크다. 살아 있을 때보다 죽었을 때가 진짜로 더 무서운 몇 안 되는 챔피언 중 하나로, 패시브 **Death Defied**가 체력이 0이 된 뒤에도 7초 동안 시전을 이어간다.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (원거리 정글러 기본 — 캠프 정리를 도와주고 골드를 주는 스마이트 펫 제공) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**핵심 아이템 (순서대로):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade에서 시작하는 퀘스트 업그레이드(정글 경험치를 충분히 쌓으면 3-4분쯤 자동으로 진화). AP 폭딜형 정글러의 기본 동반자: 스킬 시전 후 다음 평타에 추가 마법 데미지 프록(특정 조건에서 발동되는 패시브 효과 — 여기서는 어떤 능력이든 시전하면 다음 평타에 무장)을 부여한다. 고립된 타겟에 대한 Q 데미지와 잘 맞는다.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 완성 아이템. 체력 비례 화상 데미지가 오브젝트(드레이크, 바론, 헤럴드)의 큰 체력 풀을 응징하며 모든 Defile 틱 위에 누적된다. 클리어 속도를 뒤집고 8분부터 드레이크 경합을 가능하게 만드는 아이템.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통, 핵심 아이템 사이의 가장 저렴한 파워 스파이크.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 모든 스킬 적중에 둔화가 붙어 Karthus의 가장 큰 약점(추격 불가, 탈출 불가)을 메운다. 카이팅하는 타겟에 붙어 Defile로 Conqueror를 쌓게 해주고, 사후 패시브를 보장된 정리 도구로 만든다.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — 장거리 스킬에 맞은 적을 드러내고 데미지 증폭을 더한다. 장거리에서의 Q와 Wall of Pain과 완벽한 시너지를 가지며, 시야 안개(우리 팀 시야 밖의 비공개 영역) 너머 글로벌 R 타겟 락에도 도움이 된다.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 스케일링 슬롯. 4킬 이상 앞서지 않는 한 마지막에 사고, 앞선다면 스노우볼("스노우볼" = 초반 우위가 커지는 흐름: 처치 → 골드 → 아이템 → 더 많은 처치)을 위해 앞당긴다.

**상황적 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 초반 다이버 상대(Lee Sin, Xin Zhao, Hecarim, Diana). 대시 콤보가 프론트라인(평소 너 대신 피해를 흡수해 주는 앞쪽의 탱커와 브루저)을 넘어왔을 때 Karthus가 가진 유일한 답이 스테이시스다. 스테이시스 중에도 R을 시전할 수 있다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 주요 타겟이 첫 마법 저항 아이템을 사는 순간. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**(마법 저항 신발)도 그 첫 MR 아이템에 포함된다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 예고된 마법 CC 엔게이지 상대(Ahri R, Lissandra R, Nautilus hook). R이 떨어지기 전에 원샷되지 않도록 첫 스킬을 보호막이 막아준다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 스택 조합 상대(Soraka, Vladimir, Yuumi, Dr. Mundo). 치유 감소가 적의 회복을 절반으로 줄여 Defile 데미지가 제대로 박힌다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 적팀에 마법 데미지를 가진 강한 CC 위협이 3개 이상이면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.

**스킬 마스터 순서:** **Q** 먼저 마스터(단일 대상 폭딜과 웨이브 정리, 랭크에 따라 강하게 스케일링하는 유일한 스킬), **E**가 두 번째(Defile 초당 데미지를 올리고 마나 드레인을 버틸 수 있게 함), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주룬 **Precision**에 **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. 부룬 **Sorcery**에 **Manaflow Band**와 **Transcendence**.

## 주요 매치업

- **Lee Sin:** 6레벨 전엔 모든 1대1을 진다. Q+W 콤보가 너의 Q 딜레이를 뛰어넘는다. 6레벨 전 단독 교전을 피하고 풀 클리어를 우선하며 1분 30초에 자기 정글 양쪽 입구에 와드.
- **Master Yi:** Wit's End를 뽑은 뒤로는 1대1 완벽 카운터. 좁은 강가(드레이크 둥지, 바론 둥지)에서 5v5 한타로 강제하면 W의 클렌즈도 지속적인 Defile + R 콤보를 막지 못한다. 그가 기세를 타면 Zhonya's Hourglass를 두 번째 아이템으로.
- **Karthus 미러:** 농사 템포와 R 절제가 결정한다. 6레벨에 캠프 한 개 앞서 풀 클리어한 쪽이 첫 R 레이스를 가져간다. 처치나 스마이트가 보장되지 않는 한 R을 낭비하지 마라 — 한 번 헛친 R은 미러 Karthus를 오브젝트 통제에서 1분 앞서게 만든다.
- **Hecarim:** 호각 매치업. 추격은 그가 앞서지만 한타에선 Defile 사거리 안에 모인다. 돌진 경로에 깔린 Wall of Pain은 그의 엔게이지를 둔화시키고, 사후 패시브가 그가 너를 죽여도 정리해 준다.
- **Sejuani / Amumu:** 유리. 적팀을 한 덩어리로 모아 엔게이지하는 유형으로, 정확히 Defile이 원하는 모양이다. 그들의 엔게이지에 맞춰 엔게이지: 너의 팀에 궁을 박으면 E 켠 채 들어가서 불타는 모든 적을 녹이는 걸 본다.

## 파워 스파이크 및 승리 조건

- **6레벨 (R 해금):** 첫 글로벌 파워 스파이크. **Requiem**은 맵 어디든 저체력 적 하나를 처치로 바꾼다. 이 시점부터 적 미드 라이너가 귀환하기 전에 핑을 찍고 귀환 채널링 위로 궁 — 위험 0의 무료 처치다.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 완성 (~ 9-11분):** 클리어 속도가 뒤집히고 오브젝트 DPS(DPS = damage per second, 여기선 드레이크/바론/그럽 체력 풀에 대한 초당 데미지)가 두 배가 된다. 이때부터는 드레이크 한타를 네가 시작하는 쪽이지, 반응하는 쪽이 아니다.
- **두 아이템 + 신발 (~ 18-22분):** Defile만으로도 진지한 데미지가 들어가고, 모인 한타에선 Conqueror가 빨리 쌓이고 R이 뒷정리를 락한다. 가장 강한 교전 창이다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~ 26-30분):** 마법 저항 아이템을 한 개도 안 산 물몸은 R 한 방. 모인 오브젝트 한타를 강제하라 — 바론, 영혼 드레이크, Atakhan("Atakhan" = 14분쯤 등장하는 후반 중립 둥지 보스로, 스폰을 5v5 강제 한타로 받아들여라).

## 흔한 실수

- **Death Defied로 패닉.** 대부분의 초보는 사후 7초를 시체에서 도망치며 날린다. 정답은 죽을 걸 알면서 저체력 한타에 엔게이지하는 것이다. 너의 죽음은 데미지 회전을 끝내는 게 아니라 시작한다. 영혼 형태 Q-Q-Q-E가 살아 있는 너보다 더 큰 데미지를 자주 낸다.
- **Q를 아무 곳에나 쏘기.** Lay Waste는 단일 고립 대상에게 두 배 데미지가 들어간다. 미니언 셋과 라이너가 같이 있는 웨이브에 Q를 쏘면 데미지는 낮은 값에서 캡된다. W로 라이너를 빼내거나 단일 대상이 노출될 때까지 기다렸다가 예측 지점에 Q.
- **킬 스틸용 R.** 한타 한가운데서 궁을 쓰는 건 낭비다 — 모든 적이 이미 Defile 사거리 안이다. R은 크로스맵 스나이프(한타 후 저체력으로 사라진 적에게 R을 장거리 저위험 마무리로 쓰는 것)나 사후 정리에 아껴라. R은 "한타 후"이지 "한타 중"이 아니다.
- **자기 정글 시야 생략.** 1분 30초에 트라이부쉬와 픽셀부쉬에 Stealth Ward. Karthus는 탈출기가 없다. 못 본 인베이드는 기동성 좋은 정글러에게 헌납하는 무료 처치다.
- **R 없이 오브젝트에서 스마이트 욕심.** 드레이크와 그럽은 체력이 스케일링하지만 너의 스마이트는 안 한다. R이 쿨인 상태로 R 가진 정글러와 경합하면 스마이트 싸움도 드레이크도 잃는다.

## 고급 팁

**자살 엔게이지**를 연습해라. 정면에서 이길 수 없는 5v5에 팀이 몸을 던졌을 때, Defile을 켠 Karthus를 적 백라인 안으로 걸어 들어가게 하고 죽는 걸 받아들여라. 체력이 0이 되는 순간 Death Defied가 마나 비용 없이 7초의 자유로운 시전 시간을 준다 — 그리고 적 프론트라인은 칠 게 없으니 시체 공격을 멈춘다. 그 영혼 형태 창에서 닿을 수 있는 가장 저체력 적에게 Q 스팸하고 도망치는 자에겐 R로 마무리. 제대로 하면 가장 먼저 죽는 Karthus가 못 이길 한타를 에이스로 바꾼다.
