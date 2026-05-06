---
title: "Kayle Top Build & Guide — Patch 16.9"
slug: "kayle-top"
language: "ko"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Kayle 탑 가이드. 라인 생존 플랜, 하이퍼 스케일링 AS+AP 빌드, 핵심 매치업, 11/16레벨 파워 스파이크, 흔한 실수까지 한눈에 정리한 실전 공략."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle은 레벨업하며 4번 변신한다 (1, 6, 11, 16). 6레벨에서 ranged 평타를 얻고, 16레벨에서는 평타가 적중 시 AOE 화염 파동을 발사한다."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "직선 스킬샷. 첫 적과 그 뒤의 적에게 데미지, 슬로우, armor + magic resist 셔레드. 6레벨 이전 유일한 ranged 도구다."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Kayle과 가장 가까운 아군에게 힐과 이동속도. 6레벨 전에는 라인 지속력, 후반에는 필 및 추격 도구다."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "패시브: 평타에 마법 추가 데미지. 액티브: 다음 평타가 ranged가 되며 잃은 체력 비례 마법 데미지. 6레벨 이후 패시브가 적중 시 AOE 파동을 발사한다."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "아군(또는 자신)에게 몇 초간 무적을 부여한 뒤 AOE 마법 데미지로 폭발. 세이브 도구, 인게이지 커버, 마무리 수단을 모두 겸한다."
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "라인이 잠잠하고 Nashor's 위에 burst 스파이크를 더하고 싶을 때 2번째 아이템으로 swap"
    - dd_id: "3091"
      name: "Wit's End"
      against: "강한 AP 탑 라이너(Rumble, Vladimir, Sylas) 상대로 11레벨 전에 포크에 막힐 때"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐 적층 조합(Aatrox 탑, Soraka, Dr. Mundo) 상대 — 평타에 Grievous Wounds 적용"
    - dd_id: "3135"
      name: "Void Staff"
      against: "적 두 명이 Magic Resist 아이템을 완성하는 순간 (Mercury's Treads는 제외, 완성 아이템만)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "평타로 이기는 라인(Fiora, Camille, Tryndamere) 상대 — 라인 생존이 유일한 목표면 Berserker's에서 swap"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "11레벨까지 라인 생존, 이후 Nashor's Tooth + Rabadon's Deathcap으로 스케일링. 16레벨 R 보호 아래 백라인에서 AOE 적중 파동으로 한타를 정리한다."
  weakness: "6레벨 이전엔 단일 단거리 스킬샷만 가진 느리고 물몸인 근접 평타 챔피언. 강한 초반 올인을 가진 탑(Darius, Renekton, Riven)이 파워 스파이크 전에 잡아낸다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 메인: Lethal Tempo가 한타에서 attack speed를 적층해 Kayle 패시브의 6/16레벨 AOE 파동을 강화. Triumph는 처치 관여 시 회복, Legend: Alacrity는 영구 AS, Last Stand는 저체력 데미지 증가 — 후반 Kayle이 사는 영역."
    secondary_rationale: "Inspiration 서브: Biscuit Delivery가 6레벨 전 생존 단계에서 체력과 마나를 보충하고, Cosmic Insight가 Flash와 액티브 아이템 쿨다운을 줄여 한타에서 Zhonya's Hourglass를 더 빨리 다시 쓰게 해준다."
    secondary_alternative: "강한 포크 라인(Vladimir, Rumble, Quinn) 상대엔 Inspiration 대신 Resolve의 Second Wind(피해 후 패시브 체력 재생) + Overgrowth(영구 체력 스케일링)로 11레벨 파워 스파이크까지 라인 유지."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "버스트와 하드 CC 체인이 없으니 6레벨 전 약한 단계를 처벌하지 못하고, 11레벨 ranged 평타가 켜지면 안전 거리에서 DPS로 우위를 잡는다."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "스케일링 속도가 같다: 16레벨까지 닿게 두는 팀은 진다. Kayle의 AOE 적중 파동이 상대 wombo 시동을 앞서기 때문이다."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "글로벌 궁이 너를 게임 최고의 피러로 만든다 — 캐리가 다이브당하는 순간 R을 걸면 캐리가 한 차례 버스트 체인을 무사히 견딘다."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "6레벨 파워 스파이크 전에 잡아낸다. CC 체인과 지속 데미지로 4초 올인 안에 Kayle 체력 70%+가 사라지고, 너에겐 이탈용 dash가 없다."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "Camille의 E 후크샷과 Yone의 Q3 dash 둘 다 네가 잡으려는 위치를 무시하고 거리를 좁힌다. Q + 평타 견제가 끝나기 전에 붙어버린다."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "Olaf의 R은 CC 면역과 R+도끼 진 데미지를 주고, Garen의 R은 잃은 체력 비례 진 데미지 — 둘 다 Zhonya's Hourglass 너머로, 심지어 R 발동 초반까지 마무리한다."
---

## 개요

Kayle은 게임 내내 정체성이 바뀌는 하이퍼 스케일링 캐리다. 1레벨엔 느리고 물몸인 근접 평타 챔, 6레벨엔 ranged 포크형, 11레벨엔 진짜 후반 괴물, 16레벨엔 팀 전체 AOE 파괴 머신이 된다. **Divine Ascent (P)**가 키트 그 자체 — 마일스톤마다 새로운 stat block(공격속도, 사거리, 적중 시 화염 파동)이 열린다. 탑 라인은 그녀의 자연스러운 보금자리다. 긴 라인이 템포 손해 없이 패시브 플레이 공간을 주기 때문이다.

게임 플랜은 공격이 아니라 생존이다. 필요하면 CS를 잃어도 좋고, 절대 죽지 말고, 빌드를 믿어라. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth**가 11레벨에 ranged 패시브를 진짜 데미지로 바꾸고, ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**이 16레벨에 AOE 적중 파동을 **R** 보호 아래 백라인에서 한타 전체를 지우는 무기로 탈바꿈시킨다.

## 추천 빌드

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 1개. 방패가 라인을 "두 번 견제로 죽는다"에서 "CS는 잃지만 살아남는다"로 바꿔준다. Kayle이 AP로 스케일링하더라도 Doran's Ring은 건너뛰자 — 6레벨 전엔 활용할 키트가 없다.

**Core items (순서대로):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 신발이 적중 파동을 먹여준다. 신발부터 러시하고 한 조각씩 Nashor's로 간다.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — Kayle에게 가장 중요한 단일 아이템. 같은 슬롯에서 두 가지 스탯(50% attack speed + 90 AP)을 합치고 적중마다 마법 데미지를 추가한다. "약한 탑 라이너"에서 "진짜 캐리"로 바꿔주는 스파이크다.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 모든 AP 스케일링을 30% 곱한다. E 패시브, R, 16레벨 이후 AOE 파동까지, 곱할 게 많다.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 스테이시스가 다이버 상대로, 그리고 자신의 R 쿨타임 타이밍에 대한 생명선이다. 적 조합에 따라 3번째 또는 4번째로 올린다.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 강한 AP 탑 라이너(Rumble, Vladimir, Sylas) 상대. attack speed + magic resist + 적중 마법 데미지를 한 슬롯에서 제공해 공방 겸용이다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐 적층 조합(Aatrox 탑, Soraka 미드, Dr. Mundo) 상대. 평타마다 Grievous Wounds를 걸어 힐 효율을 40% 깎는다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적 두 명이 Magic Resist 아이템을 완성하는 순간(Mercury's Treads는 너무 싸서 제외, 완성 아이템만 카운트).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 라인이 잠잠하고 Nashor's 위에 burst 스파이크를 더하고 싶을 때의 대안 두 번째 아이템.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 평타로 이기는 라인(Fiora, Camille, Tryndamere) 상대. 라인 생존이 유일한 목표면 Berserker's에서 swap.

**Boots:** attack speed 스케일링을 위해 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**가 기본. AD 불리가 라인을 불가능하게 만들면 Plated Steelcaps.

**Skill order:** **E**부터 마스터(6레벨 전후 모두의 데미지 도구), **Q** 두 번째(랭크당 더 긴 슬로우 + 더 강한 셔레드), **W**는 마지막. **R**은 6, 11, 16에서 한 포인트씩. 라인 지속력을 위한 시작 순서는 **E-W-Q**.

**Runes:** 메인은 **Precision** + **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. 서브는 **Inspiration** + **Biscuit Delivery**, **Cosmic Insight**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## 주요 매치업

- **Darius:** 하드 카운터. 최대 거리 유지, 라스트힛만 위해 다가가고 6레벨 전엔 절대 트레이드 금지. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 시작, CS 30+ 손해 감수, 정글에 핑.
- **Garen:** 6레벨 이후 쉬운 라인. 그가 ranged 평타를 끊을 수단이 없으니 카이트하라(거리를 유지하려고 쏘면서 뒤로 걷기). **Q** 슬로우 + ranged 평타 활용. 저체력의 **R**은 주의 — 잃은 체력 비례 진 데미지로 Zhonya's Hourglass를 무시한다.
- **Mordekaiser:** 6레벨 전엔 생존, 11레벨 이후엔 스노우볼(눈덩이 이득: 처치 → 골드 → 아이템 → 더 많은 처치). 그의 **R**이 7초간 너를 팀에서 분리시킨다. 11레벨 전에 잡히면 죽는다. **Flash**로 **E** 풀을 피하고, 반복적으로 잡힌다면 **Mercury's Treads**를 미리 빌드.
- **Camille:** 카운터픽. **E** 훅샷이 네가 지키려는 스페이싱을 무시한다. Berserker's 대신 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, 라인 부쉬에 와드, 그녀가 두 레벨 앞서 있으면 정글에 핑.
- **Nasus:** 6레벨 전엔 호각, 11레벨 이후엔 승리. 그의 **W** 위더(너에게 걸리는 강력한 슬로우)가 ranged 평타가 생기기 전 듀얼을 그에게 준다. Nashor's가 켜지고 그의 스택 램프를 DPS로 앞서면 라인을 밀고 그가 반응하게 만든다.

## 파워 스파이크 및 승리 조건

- **6레벨 (R 해금):** 첫 ranged 평타 폼이 켜지고, **Divine Judgment**가 세이브 도구를 준다. 타워에 붙어 있지 말고 — 525 사거리에서 포크하고, 자기 자신에게 잘 타이밍한 **R**로 다이브를 처치로 바꾼다.
- **11레벨 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 완성 (~ 18-22분):** 게임 최대 스파이크. 평타 사거리가 또 늘고, 패시브가 attack speed와 AP에 비례하며, 웨이브 컨트롤이 뒤집힌다. 그룹 플레이 시작: 팀과 로테이션, 오브젝트 노리기.
- **16레벨 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ 28-32분):** 평타가 적중 시 AOE 화염 파동을 발사한다. 프론트라인에 한 대 치면 뒤의 모두에게 데미지가 들어간다. 이 시점부터 너는 역할에 상관없이 팀 최고 데미지원이어야 한다.
- **언제든 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R 콤보:** **R**을 자신에게 걸어 무적, R 종료 즉시 Zhonya's Hourglass로 이어붙인다. 한타에서 약 5초간 면역 — 팀이 피러링하는 사이 거의 모든 인게이지를 뒤집기에 충분하다.

## 흔한 실수

- **6레벨 전에 평타 vs 평타 트레이드 시도.** Kayle은 초반 기본 데미지가 낮은 근접 챔이다. Darius나 Renekton 상대 단 한 번의 잘못된 트레이드도 돌이킬 수 없는 스노우볼을 시작한다. **W**는 지속력용, 라스트힛만.
- **포크 생존을 위해 R을 자신에게 낭비.** **Divine Judgment**의 1랭크 쿨다운은 160초 — 미드 게임 한타 한 사이클 전체가 사라진다. 들어오는 올인이나 드레이크 한타에서 ADC 보호를 위해 **R**을 아껴라.
- **16레벨에 프론트라인에 서기.** AOE 적중 파동은 탱커 뒤 백라인에서 가장 잘 작동한다. ADC처럼 포지셔닝 — 프론트라인이 맞는 동안 너는 그들 사이로 파동을 쏜다.
- **11레벨 전에 정글 캠프 먹기.** Kayle은 클리어가 느리고 파워 스파이크 전에 체력만 깎인다. 라인에 머물고, 웨이브 밀고, 마나 풀로 귀환 — Nashor's 전엔 인베이드나 스컬러 싸움 금지.
- **너무 일찍 6번째 아이템을 위해 신발 팔기.** 후반에 신발을 데미지 아이템(Mejai's Soulstealer, Cryptbloom)으로 바꿀 수 있지만, 5/0 앞서고 한타가 보장된 그룹 파이트인 경우에만. 동률이면 신발을 유지해라.

## 고급 팁

미드 게임 한타에서 **R-on-self 피러 패턴**을 익혀라. 적 다이버(Camille, Hecarim, Sett)가 백라인에 점프해 들어올 때 **R**을 ADC가 아니라 자기 자신에게 걸어라. 다이브 라인으로 걸어 들어가 다이버 발밑에 AOE 폭발을 떨어뜨린다. 2.5초의 무적이 다이버에게 두 가지 선택을 강요한다 — 커밋해서 폭발을 받아내든가(공짜 처치), 후퇴하든가(팀이 호각으로 싸움 리셋). 핵심은 사거리: **R**의 시전 거리가 900이라 ADC 뒤 8유닛에 서 있어도 자신을 타게팅할 수 있다.
