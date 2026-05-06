---
title: "Jarvan IV Jungle Build & Guide — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "ko"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Jarvan IV 정글 가이드: 시작 아이템, 핵심 브루저 빌드, 주요 매치업, 파워 스파이크, 흔한 실수, 그리고 마무리 팁 한 가지까지."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "대상에 대한 첫 자동 공격은 현재 체력 기반 추가 물리 피해를 입힌다. 대상별로 몇 초마다 재충전되니 콤보에 끼워 넣어라."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "직선 창 공격으로 피해를 주고 방어력을 깎는다. 활성화된 E 깃발을 가로지르면 Jarvan이 깃발로 끌려가며 경로상의 적을 공중으로 띄운다."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "자기 보호막(맞은 적 챔피언 수에 비례) 및 주변 적에 슬로우. E-Q 진입 전에 누르고, 진입 후에 누르지 말 것."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "깃발을 던져 충돌 시 마법 피해를 주고 주변 아군에 공격속도를 부여한다. E-Q 띄우기 콤보의 셋업 도구."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "적 챔피언에게 도약해 주변에 피해를 주고 통과 불가 벽으로 된 경기장을 만든다. 재시전하면 벽을 일찍 무너뜨린다."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "CC가 많거나 AP 위주 팀(스턴/속박 3개 이상 또는 AP 2명) 상대: 물리 피해보다 CC가 더 큰 문제일 때 Steelcaps 대신"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "카이팅 위주 조합(Caitlyn, Senna, Kog'Maw, Jinx) 상대: 이속과 적중 슬로우로 R 후 캐리에 붙기 쉽게"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "힐 누적 조합(Aatrox 탑, Yone 봇, Soraka 서폿) 상대: 화상이 힐을 깎고 오브젝트 사이 웨이브클리어에도 도움"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "R 진입 시 2명 이상이 너에게 집중하는 팀: 버스트 시 체력 보호막 발동, 강인함 패시브가 CC 단축"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "강한 물리 딜러 2명 조합(예: Yasuo + Caitlyn) 상대: 물리 피해를 즉시 버스트가 아닌 느린 출혈로 전환"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "우선 표적(상대 캐리나 정글러)에 E-Q 띄우기를 적중시킨 뒤 R로 경기장에 가두고 팀이 따라붙게 한다. 오브젝트마다 쿨다운에 맞춰 반복."
  weakness: "E나 Q를 빗나가면 유일한 강제 CC와 갭클로저를 다 쓴 셈이다. 버스트 없는 근접 브루저로 전락해 자기방어 가능한 원거리 캐리에게 카이팅당하기 쉽다."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror는 E-Q-AA-R 콤보의 모든 타격마다 스택이 쌓여 띄우기 시점에 피해와 회복용으로 풀 스택. Triumph는 오브젝트 처치 보상, Alacrity는 Martial Cadence 발동을 위한 평타 가속, Coup de Grace는 Cataclysm에 갇힌 저체력 표적을 마무리한다."
    secondary_rationale: "Resolve 보조: Bone Plating은 R 진입 후 적팀이 너에게 돌아설 때 첫 버스트를 흡수하고, Revitalize는 한타 중 유일한 능동 방어인 Golden Aegis 보호막을 강화한다."
    secondary_alternative: "포크 위주 적 팀(Varus, Xerath, Karma 포크 조합) 상대로는 Resolve 대신 Inspiration: Magical Footwear(첫 큰 아이템 골드 절약을 위한 무료 신발)와 Cosmic Insight(E-Q-Flash 트릭용 더 잦은 Flash)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "초반 견제형 정글러"
      reason: "Jarvan은 3레벨에서 Q 방어구 감소와 E 공속으로 동등하게 교환하고, Sundered Sky가 12-14분쯤 완성되면 대부분의 초반 정글러를 스케일링으로 능가한다."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "피해야 할 이동기 부족한 봇 라인"
      reason: "Cataclysm 벽은 위치 의존적인 캐리를 서폿이 닿을 수 없는 경기장에 가둔다; 적 팀은 보통 락다운에 제때 대응하지 못한다."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "고정형 미드 스케일러"
      reason: "시야 밖 E-Q 갭클로저와 R 벽이 그들의 스킬셋이 필요한 공간을 차단한다; 팀이 마무리하기 전에 경기장을 빠져나갈 돌진기가 없다."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "더 긴 사거리 CC를 가진 광역 이니시 정글러"
      reason: "그들은 Jarvan의 E-Q 사거리 밖에서 진입해 백라인에 닿기 전에 연계 CC를 건다; 도약 중간에 스턴되면 벽도 그를 구하지 못한다."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "내장 유지력을 갖춘 후반 스케일러"
      reason: "Jarvan의 파워 스파이크는 1-3 코어 아이템(20-25분 무렵)이다. 이후 약해지는 반면 이 표적들은 더 강해지며 그의 단일 로테이션을 견뎌낸다."
    - examples: ["olaf", "tryndamere"]
      archetype: "CC 면역 듀얼리스트"
      reason: "Olaf R과 Tryndamere R은 Cataclysm 락다운을 무시한다: 그들은 풀 데미지로 너를 때리며 경기장을 빠져나가고 너의 유일한 진입기는 쿨다운 상태다."
---

## 개요

Jarvan IV는 근접 fighter / diver — 즉, 돌진으로 거리를 좁혀 한타에서 핵심 표적을 묶기 위해 헌신하는 챔피언 — 으로, 하나의 시그니처 콤보를 중심으로 설계되어 있다: **E** 깃발을 던지고, 깃발을 가로지르도록 **Q**를 발사하고, 깃발 쪽으로 끌려가면서 경로상의 모두를 공중으로 띄운다. 6레벨 이후 **R** Cataclysm이 추가되며, 단 한 명의 적을 그와 함께 가두어 팀이 처치를 마무리할 수 있는 벽 경기장을 만든다. 그는 가장 배우기 쉬운 정글러 중 하나(우리 척도 기준 난이도 2/5)인데, 스킬셋이 항상 같은 것을 원하기 때문이다: 우선 표적에 E-Q 적중, R, 한타 승리.

게임 플랜은 다음과 같다: **E** 활성화와 Q 방어구 감소로 정글 캠프를 빠르게 비우고, 활용 가능한 진입 각이 있는 라인 — 미드 라인은 트라이부쉬(미드와 사이드 라인 사이 세 갈래 수풀), 탑 라인은 강 수풀 — 을 통해 갱킹(라인에 들어가 적 처치를 돕는 행위)한다. 모든 오브젝트 스폰 즈음 캐리(높은 피해와 낮은 방어를 가진 후방 적) 다이브 기회를 노린다. 스킬 표현력은 **E-Q-Flash** 트릭 — 깃발을 놓고 앞으로 Flash하며 Q로 가로지르면 반응 불가 띄우기가 발생한다 — 과 **언제** **R**을 누를지 결정하는 데 있다(한타당 한 번뿐이니 전선 탱커에 낭비하지 말 것).

## 추천 빌드

**시작 아이템:** Hailblade + Refillable Potion. 표준 정글캠 펫 퀘스트 경로. Hailblade와 Emberknife 모두 세 컴패니언 중 하나로 진화하며, 우리는 AD 스커미셔 펫을 원한다, 아래 참조.

**핵심 아이템 (순서대로):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Hailblade에서의 퀘스트 업그레이드(충분한 경험치가 쌓이는 3-4분쯤 자동 진화). AD 스커미셔 컴패니언으로, 캠프 처치 후 이속 대시를 주어 맵 전역에서 더 빠른 갱킹으로 이어진다.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 첫 큰 아이템. 첫 타 보장 치명타와 적중 시 회복은 Martial Cadence와 완벽하게 맞물려, 표적을 띄우는 순간 치명타를 입히고 접근하며 받은 피해를 회복한다.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 대부분의 적 팀 상대 기본 신발(봇 라인은 보통 물리 딜러 두 명). 적 조합이 주로 AP와 CC라면 Mercury's Treads로 교체.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 방어구 감소가 Q 패시브와 누적되며, 체력과 스킬 가속으로 E-Q가 더 빨리 돌아온다.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — 후반 탱커 스파이크. 방어력과 마법 저항력이 누적되는 패시브가 너를 다이버에서 한타 전 시간을 버틸 수 있는 전선으로 바꾼다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — CC가 많거나 AP 위주 팀 상대. 군중 제어가 물리 피해보다 큰 문제일 때 Steelcaps 대신.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — 카이팅 위주 조합(Caitlyn, Senna, Kog'Maw — 근접 사거리 밖을 유지하려고 공격하면서 뒤로 걷는 적) 상대. 이속과 적중 슬로우가 **R** 이후 백라인(탱커 뒤에 선 고화력 캐리)에 달라붙는 데 도움이 된다.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 힐 누적 조합(Aatrox 탑, Yone 봇, Soraka 서폿) 상대. 화상 패시브가 적의 회복을 깎는다.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — R 진입 순간 2명 이상이 너에게 집중(피해를 너에게 돌리는 것)할 때. 체력 보호막이 버스트(1-2초 내 고피해) 시 자동 발동하며 강인함 패시브가 군중 제어(스턴, 속박, 둔화)를 단축한다.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 강한 물리 딜러 두 명 조합(예: Yasuo + Caitlyn) 상대. 받는 물리 피해를 느린 출혈(다음 몇 초에 걸쳐 분산되며 즉발이 아님)로 바꾸어 즉사하지 않고 대응할 시간을 준다.

**신발:** 기본은 Plated Steelcaps. 적 팀에 스턴/속박 3개 이상 또는 AP 위협 두 명이 있으면 Mercury's Treads.

**스킬 마스터 순서:** **Q**를 먼저(주 피해와 방어구 감소), **E**를 두 번째(쿨다운 감소 = 갱킹 시도와 깃발 옵션 증가), **W**를 마지막. **R**은 6, 11, 16레벨에 찍는다.

**룬:** Primary **Precision**에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve**에 **Bone Plating**과 **Revitalize**. 능력치 파편: Attack Speed, Adaptive Force, Health Scaling.

## 주요 매치업

- **Lee Sin / Graves:** 초반 정글에서 동등한 매치업. 그들의 첫 정글 동선을 추적하라; 레드 사이드부터 시작하면 두 번째 버프를 E-Q로 견제. 둘 다 3레벨에 너와 맞싸울 수 있으니 라인 우선권(적을 타워 아래로 밀어두고 도와주러 로밍할 수 있는 라인 동료) 없이는 인베이드하지 말 것.
- **Fiddlesticks / Amumu:** 중반에 아군과 뭉쳐 있지 말 것. 그들의 광역 이니시 사거리는 너의 **E-Q** 진입 거리를 능가한다 — 깃발을 던지러 걸어가는 동안 궁이 들어온다. 정글 입구를 와드하고 수풀 페이스 체크(시야 없이 수풀에 무작정 들어가 적이 숨어 있을 수 있는 행위)를 하지 말 것.
- **Kha'Zix / Rengar:** 캐리 원샷을 노리는 어쌔신 정글러. 풀클리어 대신 카운터 갱킹(같은 라인에 등장해 한타를 뒤집는 것): 3레벨에 그들과 동등하게 교환하고, 너의 **R**은 그들이 너의 캐리에 덮칠 때 **필 도구**(다이브하는 적으로부터 캐리를 살리는 능력)다 — 벽으로 처치에서 떼어놓아라.
- **Olaf:** 그의 R은 그를 CC 면역으로 만들어 **Cataclysm 벽이 그를 막지 못한다**. R을 걸면 그는 너를 때리며 경기장을 빠져나간다. 궁을 소진한 뒤 그의 동료에게 **R**을 아껴두거나, 그가 갇힌 동안 팀이 카이팅(거리를 유지하며 공격하면서 후퇴)할 수 있을 때만 표적으로 골라라.
- **Sejuani / Maokai:** 더 탱커형 이니시 정글러. 초반 1대1에서는 너가 더 강하지만, 한타에서 둘 다 같은 역할(캐리 한 명 묶기)을 원한다. 먼저 스노우볼링하는 라인이 이긴다(초반 처치가 골드 차이로 이어지고 더 많은 처치로 이어짐); 그들이 첫 아이템을 마치기 전에 갱킹에 헌신하라.

## 파워 스파이크 및 승리 조건

- **3레벨:** **Q**, **E**, **W**에 1포인트씩 있으면 갱킹용 E-Q-W 풀 콤보가 완성된다. 첫 진정한 갱킹 윈도우, 특히 트라이부쉬를 통한 미드 라인.
- **6레벨:** **Cataclysm** 해금. 너의 강가 근처에 와드 없는 캐리는 모두 다이브 기회. 트릭: 깃발(E)을 표적 너머로, R로 너 쪽으로 끌어당기고, Q로 띄우기 — **Flash**와 정화 없이는 락다운에 답할 수 없다.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 완성 (~ 12-14분):** Martial Cadence의 첫 치명타가 E-Q 후 물몸(높은 피해와 낮은 방어를 가진 챔피언, 예: ADC)을 원샷한다. 이 윈도우에서는 쿨다운마다 갱킹하고 드래곤 교전을 강요하라.
- **3코어 스파이크 (Sundered Sky + 신발 + Black Cleaver, ~ 22-25분):** 한타 절정. R + Q 단독으로 백라인 캐리를 삭제하며, 이후 집중 공격을 견딜 만큼의 체력을 갖춘다.

## 흔한 실수

- **표준 "내가 있는 곳에 띄우기" 콤보를 위해 자기 위에 E를 던지기.** 갱킹에는 통하지만 적이 멀어지는 한타에서는 Q가 너를 뒤로 끌어당긴다. 깃발을 적 *너머에* 던져서 Q 풀이 너를 적 쪽으로 전진시키게 하라, 멀어지지 않게.
- **진입 후 W 누르기.** Golden Aegis는 시전 시점의 적 챔피언 적중 수에 비례해 보호막이 커지는 스킬 — E-Q 진입 *전에* 눌러야 보호막 값이 최대가 되고 슬로우가 곧 착지할 적들에게 적중하지, 허공에 적중하지 않는다.
- **전선 탱커에 궁 사용.** Cataclysm은 *한 명의* 적만 너와 함께 가둔다. 캐리(Caitlyn, Aphelios, Azir)에게 사용하라, 닫힌 경기장에서 너와 싸우길 반기는 Sion에게 쓰지 말 것.
- **갱킹 전 정글 전체 클리어.** 3-4레벨 E-Q 갱킹으로 대부분의 정글러를 템포에서 앞선다. 첫 갱킹 전에 풀클리어하면 가장 큰 이점을 포기하는 것이다. 캠프 2-3개를 챙기고 각을 찾아라.
- **R을 너무 일찍 재시전해 벽을 깨기.** 벽 또한 필 도구다: 팀이 경기장 밖에서 한타를 이기고 있다면 갇힌 캐리가 합류하지 못하도록 벽을 유지하라. 도주자를 추격할 때만 R을 재시전.

## 고급 팁

**E-Q-Flash** 콤보를 연습하라: 깃발을 던지고, 그 사이로 Q를 발사하며, Q 애니메이션 *도중에* Flash. 띄우기는 너의 도착 지점에 적용되므로, 적이 예상한 거리보다 600 유닛 너머의 영역에서 적을 띄울 수 있다 — 시야 밖에서 진입에 사용하면 게임에서 가장 안정적인 이니시 중 하나다. 트레이드오프는 Flash를 소비한다는 것이니, 처치를 확정하거나 핵심 와드를 처리하는 갱킹용으로 아껴라. 랭크 게임에서 시도하기 전에 연습 모드에서 열두어 번 연습하라; 타이밍 윈도우가 짧다.
