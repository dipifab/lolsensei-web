---
title: "Evelynn Jungle Build & Guide — Patch 16.9"
slug: "evelynn-jungle"
language: "ko"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Evelynn 정글 완벽 공략. Demon Shade Camouflage 갱킹 동선, Lich Bane 코어 빌드 순서, 주요 매치업 대처법, 파워 스파이크 타이밍과 신규 정글러가 자주 저지르는 실수까지 한 페이지에 정리."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "전투 외 상태에서 Evelynn은 Demon Shade로 진입. 낮은 체력에서 회복하고 6레벨부터 Camouflage 획득 — 와드와 짧은 반경 밖의 적에게 보이지 않음."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Lasher가 가장 가까운 적을 때린 뒤 주변 대상에게 최대 3연속 spike 사격. 정글 클리어 메인 스킬이자 콤보 DPS의 핵심."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "적에게 저주를 부여. 짧은 딜레이 후 다음 평타나 스킬이 charm을 적용하고 마저를 깎음. Demon Shade 상태에서 사용해야 가장 깔끔하게 셋업됨."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "대상으로 대시, 마법 피해와 짧은 이동속도 부여. Demon Shade에서 사용 시 긴 도약으로 변하며 추가 피해와 평타 리셋이 붙음."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "짧은 untargetable 구간 후 전방 원뿔에 대규모 마법 피해를 주고 뒤로 점멸. 30% 체력 이하 적에게 보너스 피해 — 처형기."
      dd_spell_id: "EvelynnR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "적 2명 이상이 마저 아이템을 올릴 때 — 적의 MR에 비례해 스케일하는 % 마법 관통"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "R 시전 모션을 처벌하는 단일 락다운 상대 (Veigar 케이지, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "회복 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo, Aatrox) — Grievous Wounds로 회복 절반"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "6레벨 이후 W charm + R execute로 고립된 적을 픽오프. Demon Shade Camouflage로 시야 경고 없이 인베이드와 갱킹. 정글 골드 리드를 스노우볼로 굴려 squishy를 사냥."
  weakness: "6레벨 전에는 갱킹 압박 0 — Camouflage도 charm 사거리도 없음. Control Ward와 라인 prio에 강하게 카운터됨. 적이 peel과 함께 모이면 carry에 닿지 못함."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination 주룬: Dark Harvest는 고립 픽오프로 스택을 쌓는 — Evelynn의 게임 플랜 그 자체. Sudden Impact는 R 워프와 W charm 후 발동되어 추가 버스트. Sixth Sense는 적 와드를 드러내 Camouflage 가치 유지. Ultimate Hunter는 R 쿨감."
    secondary_rationale: "Sorcery 부룬을 Inspiration이나 Resolve보다 선택: Evelynn은 carry를 한방에 보내는 순수 AP 스케일링이 필요하지, 유틸이 아님. Manaflow Band로 클리어 중 Q 스팸용 마나 유지, Gathering Storm으로 10분마다 무료 AP를 받아 후반 W+R 한방 콤보 강화."
    secondary_alternative: "적팀에 squishy가 4명 이상이고 peel이 약하다면, Sorcery를 Precision으로 바꿔 Presence of Mind(처치 시 마나 환원)과 Coup de Grace(40% 체력 이하 +8% 피해)로 처형을 더 빠르게 연쇄."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "이동기 없는 하이퍼캐리"
      reason: "대시도 점멸도 없는 carry는 W charm + R 한 방에 즉사: untargetable 워프의 원뿔에서 빠져나갈 도구 자체가 없음."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "도주기 없는 후방 힐러"
      reason: "Demon Shade Camouflage로 적 후방까지 진입한 순간, 이 인챈터들은 방어 스킬을 쓰기도 전에 W+R 한 방에 사라짐."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "느린 파밍형 정글러"
      reason: "파밍하고 스케일하려는 정글러: Evelynn은 인베이드해 캠프를 빼앗고 6 이후 Camouflage로 갱킹해 스케일 대신 방어를 강요."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "초반 lethality 듀얼리스트"
      reason: "Lee Sin Q와 Rengar 점프는 6 이전에 거리를 좁힘 — Camouflage도 R도 없는 Evelynn은 6 전 인베이드와 1대1을 그대로 패배."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "carry를 peel하는 인챈터"
      reason: "Lulu R은 carry 무적, Tahm Kench는 삼킴, Morgana E는 Spell Shield 부여: 셋 다 W+R 콤보가 처치되어야 할 정확한 순간에 무효화."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "시야와 이니시 CC가 강한 서폿"
      reason: "첫 귀환에 Control Ward를 사고 라인의 Demon Shade를 발견, W charm이 나가기 전에 CC 체인(Naut Q, Leona E+R)으로 봉쇄."
---

## 개요

Evelynn은 League에서 레벨에 따라 스케일하는 내장 스텔스를 가진 유일한 챔피언. 6레벨부터 **Demon Shade (P)** 패시브가 전투 외에서 Camouflage를 부여해 적이 그녀 주변의 작은 반경 안에 들어오지 않으면 보지 못함 — 적이 스텔스를 드러내려 박는 분홍 와드인 Control Ward조차 풀 거리에서는 그녀를 잡지 못함. 그녀의 정체성 전부가 여기에 달림. 6 전에는 진정한 웨이브 클리어도 듀얼 파워도 없는 마법 피해 어쌔신이지만, **Last Caress (R)** 가 해금되는 순간 게임 내 가장 신뢰할 수 있는 픽오프 정글러(전체 한타가 아니라 고립된 적 한 명을 한 번에 제거하도록 만들어진 챔피언)가 됨: 적의 후방 라인(squishy carry — 고데미지 저방어 챔피언 — 들이 보통 서있는 진형 뒤쪽)까지 보이지 않게 걸어 들어가 **Allure (W)** 로 carry를 charm하고, peel(carry를 보호하는 아군의 능력, 예: Janna 실드, Lulu 궁)이 반응하기 전에 한 콤보로 삭제.

게임 플랜은 단순함이 무자비함: 6까지 안 죽고 farm, 근처에 시야 와드(아군이 전장의 안개를 보려고 박는 작은 보이지 않는 눈)가 없는 저체력 라인에서 갱킹 기회를 찾고, 그 후로는 **R** 가 돌 때마다 고립 타겟을 사냥. 스킬 표현은 동선 읽기(어디로 Camouflage 상태로 와드를 밟지 않고 갈 수 있는가?)와 commit 타이밍(carry가 Cleanse 같은 peel 소환사 주문이나 Lulu 같은 peeler를 옆에 둔 상태라면 **R** 로 풀 commit 금지)에 있음. 처음 두 픽오프를 스노우볼(초반 우위를 더 많은 킬, 골드, 아이템으로 전환)하면 적 팀이 모이고, 너는 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** 로 한방 사거리까지 스케일(아이템과 레벨이 쌓이며 강해짐)해 보이지 않는 곳에서 게임을 닫음.

## 추천 빌드

**시작 아이템:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. 근거리 정글러 표준 시작 — Evelynn에게도 예외 없음.

**코어 아이템 (순서):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Emberknife에서 퀘스트 업그레이드 (정글 펫이 충분한 몬스터를 먹은 3-4분쯤 자동 진화). AP(Ability Power, 마법 피해를 스케일하는 능력치) 버스트의 동반자: 스킬 직후 평타에 마법 피해 효과("proc")가 발동되어 나중의 **Lich Bane** 와 완벽히 맞물림.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Evelynn의 시그니처 스파이크. 스킬을 쓸 때마다 다음 기본 공격에 거대한 추가 마법 피해가 더해지고, **W** charm과 **E** 의 평타 리셋(평타 속도 딜레이를 무시하고 즉시 새 평타를 칠 수 있는 효과)으로 1초 안에 두 번의 **Lich Bane** proc을 연결할 수 있음.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(대상의 마저에서 고정값을 빼서 스킬 피해를 강화). 어떤 squishy 타겟 AP 버스터든 표준.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 AP와 마법 관통; HP 임계값 패시브(대상이 35% 정도의 낮은 체력 임계 아래일 때 발동되는 패시브)가 **R** 처형 원뿔과 정확히 맞물림.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 모든 AP에 대한 후반 곱연산. 4번째 또는 5번째 슬롯에서 Evelynn은 "체력 가득 carry 한방" 사거리로 들어감.

**상황 아이템:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적 2명 이상이 마저 아이템을 올리는 순간.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 단일 락다운 상대 (Veigar 케이지, Lissandra R, Malzahar R). Stasis로 **R** 후 회복 프레임을 커버.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo, Aatrox). Grievous Wounds로 받는 회복 절반.

**신발:** Sorcerer's Shoes가 기본. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 는 적팀 마저가 매우 낮고 팀이 한타 마무리용 **R** 가동률(더 잦은 시전)이 더 필요할 때만 허용.

**스킬 순서:** **Q** 부터 마스터(정글 클리어와 메인 DPS), **E** 두 번째(이동성과 리셋 데미지 스케일링), **W** 마지막(랭크보다 쿨다운이 더 중요). **R** 은 6, 11, 16레벨에 찍기.

**룬:** 주룬 **Domination** 에 **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. 부룬 **Sorcery** 에 **Manaflow Band** 와 **Gathering Storm**. 능력치 파편: Adaptive Force, Adaptive Force, Health Scaling. 적팀이 거의 다 squishy이고 처형 일관성을 원하면 부룬을 **Precision** (Presence of Mind + Coup de Grace)으로 교체.

## 주요 매치업

- **Lee Sin / Rengar (적 정글):** 6 전 인베이드 위협. 3레벨 scuttle은 다투지 말고 — 시야로 추적하며 안전하게 풀 클리어. 6에 도달하는 순간 매치업이 뒤집힘: Camouflage 상태로 적 정글에 들어가 와드 없는 라인을 갱킹.
- **Lulu (적 서폿):** 어쌔신에게 게임 내 가장 강한 peel. 페이크 commit으로 그녀의 **R** 을 빼고(**W** charm을 시작했다가 그녀가 궁을 쓰면 물러나기), Lulu 궁이 쿨일 때 다시 타겟에 재engage.
- **Tahm Kench (적 서폿):** 너의 **R** 가 떨어지는 순간 **W** 로 carry를 삼킴. 그가 다른 곳(미니언 웨이브, engage하는 탱커)에 **W** 를 쓸 때까지 기다린 뒤 commit. 마나 가득한 채 ADC를 보고 있다면 다른 타겟을 찾을 것.
- **Karthus (적 정글):** 스케일링 레이스. 그가 farm에서 너를 이기고, 너는 픽오프에서 그를 이김. Karthus가 풀템 16레벨에 도달하면 패배: 그의 **R** 가 빠질 때마다 갱킹을 강제해 스케일링을 막고 30분 안에 게임 종료.
- **Pyke (적 서폿):** 너의 전형적인 "저체력 처형" 패턴에 대한 하드 카운터. 그의 **R** 도 저체력에서 처형하고, 로밍이 너의 정글 동선을 시야 압박. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 를 평소보다 일찍 사서 commit 후 그의 처형 구간을 회피.

## 파워 스파이크 및 승리 조건

- **6레벨 (첫 R 해금):** 진짜 게임이 여기서 시작. Demon Shade가 Camouflage를 얻고 **R** 가 해금되며, 시야 와드(아군이 전장의 안개를 보려고 박는 작은 보이지 않는 눈)가 없는 어떤 라인이든 무료 킬. 적 체력이 가장 낮은 라인을 향해 동선을 잡기.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 완성 (~12-14분):** "킬에 스킬 2번 필요" 에서 "squishy에게 W+AA+E+Q+R 한 콤보로 킬"로의 도약이 정확히 이 아이템에서 일어남. 완성되는 순간 픽오프 사냥.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~18-20분):** HP 임계 패시브가 **R** 처형 원뿔과 맞물림. 이 아이템 후로는 60% 체력 이하 squishy는 한 콤보에 사망.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 가동 (~26-30분):** 100% 체력 후방 carry에 대한 풀 한방 사거리. Deathcap 완성 즉시 Baron 주변에서 5v5 강제 — 콤보가 떨어지는 순간 팀이 5v4로 한타 시작.

## 흔한 실수

- **팀이 핑을 찍는다고 6 전에 갱킹.** charm 사거리도 Camouflage도 적을 놀라게 할 수단도 없음. 6 전에는 farm하고 레벨 우위 적에게 카운터정글. 라이너에게 말하기: "갱킹은 6에".
- **Demon Shade 밖에서 W 시전.** 너가 보일 때(전투 중 또는 저체력)는 적이 **W** 시전을 보고 charm을 미리 점멸로 피할 수 있음. 항상 Camouflage로 걸어 들어와 1100+ 사거리에서 **W** 로 갱킹 셋업.
- **R 을 처형이 아닌 데미지 용으로 사용.** **R** 은 30% 체력 이하에서 보너스 피해. 풀 체력 타겟에 태우면 스파이크 낭비 — **W+E+Q** 콤보로 열고 처형 임계를 넘는 순간 **R**.
- **킬에 터널 비전.** **R** 은 시전 후 너를 뒤로 긴 거리 워프시킴. 적 한가운데에서 누르면 쓸모없는 곳으로 워프됨. 워프가 너를 적 쪽으로 더 들어가게 하지 말고, 팀 쪽 또는 전장의 안개(와드 없는 정글 지역) 쪽으로 끌어가도록 포지셔닝.
- **풀 체력에서 귀환 거부.** Demon Shade는 전투 외에서 마나가 가득 차도 천천히 회복시킴. ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** 같은 데미지 부품이나 ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** 같은 마나 부품을 위한 1300+ 골드가 있다면 귀환. 풀 체력 0골드로 로테이션은 시간 낭비.

## 고급 팁

![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** 더블 proc 콤보: **W** charm이 떨어진 뒤 평타 모션을 **E** 로 캔슬(Demon Shade의 Whiplash는 평타 리셋이 내장). 순서는 **W → AA → E → AA → Q → R**. 두 평타 각각 **E** 가 스킬 시전으로 카운트되어 평타 타이머를 리셋하므로 신선한 **Lich Bane** proc을 소비. 마저 없는 squishy에게 이 콤보는 저랭 Evelynn 유저들이 쓰는 게으른 **W → R** 시작의 약 1.5배 데미지를 내며, 4개가 아닌 3개 아이템에서 1800 체력 carry를 풀 체력에서 삭제할 수 있게 해줌.
