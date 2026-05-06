---
title: "Kog'Maw Bot Build & Guide — Patch 16.9"
slug: "kog-maw-bot"
language: "ko"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Kog'Maw 봇 라인 완벽 공략. 온힛 하이퍼캐리 코어 빌드 순서, Precision 룬 선택, 주요 매치업 대처, 파워 스파이크 타이밍, 라인전 흔한 실수, 그리고 W 평타 버퍼링 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "사망 시 Kog'Maw는 4초간 걸어다니는 폭탄이 되었다가 true damage로 폭발한다. 마지막 순간의 위협일 뿐, 결코 플랜 A가 아니다."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "직선 투사체. 마법 피해와 몇 초간 대상의 Armor·Magic Resist를 깎는다. 패시브로 영구 Attack Speed 보너스."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "약 6초간 자기 강화: 평타 사거리를 늘리고 매 타격마다 최대 HP %의 마법 피해를 추가한다. 모든 한타의 핵심."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "직선 스킬샷: 피해와 둔화 자국을 남긴다. 디스인게이지 도구이자 W 평타를 위한 셋업."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "지면 지점에 떨어지는 장사거리 AOE 포격. CD가 짧고 캐스트마다 마나 비용이 누적. 포크, 웨이브 클리어, HP 40% 이하 적의 크로스맵 처형용."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "포크 강한 봇 듀오 상대: 첫 평타 사거리를 늘려 적 포크 범위 밖에서 W 평타로 깎는다"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "W를 막는 단일 대상 하드 CC 상대 (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "다이브 조합 상대 (Malphite + Yasuo, Hecarim): 부활로 위치 실수가 두 한타 기여로 바뀐다"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "3000+ HP 프론트라인 (Sion top, Cho'Gath, 더블 탱크): armor pen + W % HP로 슈퍼탱크 녹임"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐 누적 조합 (Soraka, Aatrox, Dr. Mundo): Grievous Wounds로 5초간 회복량 절반"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "프론트라인 뒤에서 미드 게임을 살아남고, 25분 즈음 온힛 3코어 파워 스파이크에 도달해 오브젝트 한타에서 W 윈도우 동안 적 팀을 녹인다."
  weakness: "대시 없음, 평타 기본 사거리 500. 서포터가 위치를 놓치면 후커·암살자·다이버가 W 재사용 전에 Kog'Maw를 지운다."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision + Lethal Tempo: W 동안 스택이 쌓여 공속 2.5 캡을 돌파, 매 W 윈도우가 탱커를 찢는 버스트가 된다. Triumph는 처치 시 회복, Legend: Alacrity는 영구 AS, Coup de Grace는 40% HP 이하 적에게 +8% 피해 — R이 마무리할 표적이다."
    secondary_rationale: "Sorcery 보조: Transcendence로 ability haste를 올려 장기전에서 W·R이 더 빨리 돌아오게 하고, Scorch로 1-5레벨 R 포크에 추가 데미지를 얹어 escape 없는 챔피언의 라인전을 덜 괴롭게 만든다."
    secondary_alternative: "후크·버스트 서포터 상대 (Blitzcrank, Thresh, Pyke)에는 Sorcery 대신 Resolve로 Bone Plating(피격 후 첫 3타 데미지 캡)과 Overgrowth(최대 HP 보너스)를 든다. 스케일링을 일부 포기하고 첫 코어까지 살아남는다."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "HP를 쌓는 탱커·브루저"
      reason: "Bio-Arcane Barrage는 평타마다 최대 HP %의 마법 피해를 입힌다. 체력을 쌓을수록 더 빠르게 녹는다. 대시 없는 탱커는 W 윈도우 동안 응징할 수단이 없다."
    - examples: ["veigar", "senna", "varus"]
      archetype: "기동성 없는 백라인 스케일러"
      reason: "Living Artillery (R)는 극장거리 지면 표적을 때린다. 메인 스킬을 쓰려면 멈춰야 하는 백라이너는 화면 밖에서 깎이고 escape 도구도 없어 반격이 불가능하다."
    - examples: ["malphite", "amumu"]
      archetype: "정지형 프론트라인 이니시에이터"
      reason: "그들의 R 적중 후 우리 팀에는 2-3초의 자유 사격 시간이 생긴다 — 락다운된 프론트라인에 W 사이클 한 번을 통째로 박을 정확한 시간이다."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "단일 대상 락다운 후크 서포터"
      reason: "Kog'Maw는 대시·블링크가 없고 E에 플래시도 없다. 라인에서 후크 한 번 = 한 번의 죽음. 유일한 escape는 5분 쿨다운 소환사 주문 Flash뿐이다."
    - examples: ["caitlyn", "ezreal"]
      archetype: "장사거리 포크 봇 라이너"
      reason: "그들의 평타 사거리는 W 없는 Kog'Maw의 기본 500을 넘는다. 라인에서 공짜 견제를 받고 마나가 마른 초반 게임에 갇힌다."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "로밍 암살자"
      reason: "이 챔피언들은 대시·점프·은신 리셋으로 백라인까지 도달한다. W 윈도우 도중 프론트라인을 통과당하면 Guardian Angel을 제외한 어떤 방어 아이템도 제때 살려주지 못한다."
---

## 개요

Kog'Maw는 단 하나의 짧고 결정적인 윈도우, 즉 **Bio-Arcane Barrage (W)** 버프를 중심으로 설계된 하이퍼캐리 마크스맨이다. 약 6초 동안 맵에서 가장 긴 평타 사거리를 가지며 매 타격이 대상의 최대 HP 비율 마법 피해를 입히고, Wit's End와 Blade of The Ruined King 같은 온힛 아이템은 그 윈도우를 탱커를 지우는 폭풍으로 바꿔놓는다. W 밖에서 평타 기본 사거리는 500 — 마크스맨 기준으로 짧다 — 대시도 블링크도 없다. 후반 괴물의 대가는 첫 15분 동안 공격적인 라인 불리들이 가장 좋아하는 먹잇감이 된다는 것이다.

게임 플랜은 단순하다: 인챈터 서포터(Lulu, Janna, Yuumi, Soraka) 뒤에서 라인을 살아남고, 인내심 있게 파밍하며, 25분 즈음에 온힛 3코어를 완성하고, 모든 한타를 프론트라인 뒤에서 풀어내 W 윈도우가 방해받지 않게 한다. **Living Artillery (R)**는 초반의 고통을 덜어준다. 안전한 거리에서 공짜 포크와 웨이브 클리어를 제공하지만, 스팸하면 마나 비용이 빠르게 치솟으니 견제용이 아니라 킬 마무리나 웨이브 타이밍에 아껴두자.

## 추천 빌드

**Starting items:** Doran's Blade + Health Potion. 강한 포크 매치업(Caitlyn, Varus)에서는 Doran's Shield도 허용되지만, 온힛 램프를 가속하려면 Doran's Blade가 기본이다.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 첫 코어. attack speed와 세 번째 타격에 true damage 발동. W 온힛 윈도우와 자연스럽게 연결된다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 보너스. attack speed 캡 위에서 사는 하이퍼캐리에게 유일한 부츠 선택지.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 온힛 마법 피해 + Magic Resist. AP 위주 적 조합 상대 단일 최고의 아이템이며 W 마법 피해를 증폭한다.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 부속 화살이 두 추가 표적에 온힛을 적용해 W를 AOE 웨이브 클리어와 AOE 한타 압박으로 바꿔준다.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — 현재 HP %의 온힛 피해, 흡혈, 둔화 액티브. 듀얼링 도구이며 흡혈 대신 보호막이 필요하면 ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster**로 교체한다.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 포크 강한 봇 듀오(Caitlyn, Varus) 상대. 에너자이즈된 첫 평타가 W 평타의 유효 사거리를 늘려 적 포크 범위 밖에서 깎을 수 있다.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — W를 막는 단일 대상 하드 CC 상대 (Ashe R 화살, Morgana Q 속박, Malzahar R 진압). 액티브로 단일 입력에 CC를 해제한다.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 다이브 조합 상대 (Malphite + Yasuo, Hecarim). 부활로 한 번의 위치 실수가 두 번의 한타 기여로 바뀐다 — 정적인 AOE 데미지 딜러에게 정확히 필요한 것.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 3000+ HP 프론트라인 상대. armor penetration + W의 최대 HP % 마법 셰드가 어떤 순수 attack speed 아이템보다 빠르게 슈퍼탱크를 지운다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐 누적 조합 (Soraka, Aatrox, Dr. Mundo) 상대. Grievous Wounds로 회복량을 5초간 절반으로 줄인다. 없으면 W 데미지가 가하는 속도보다 빠르게 회복된다.

**Boots:** Berserker's Greaves가 유일한 선택. Mercury's Treads는 Kog'Maw에게 잘못된 선택이다 — 잃는 attack speed가 얻는 tenacity보다 비싸다.

**Skill order:** **W** 우선 마스터(키트의 정체성), **Q** 두 번째(Armor·Magic Resist 셰드 + 패시브 attack speed), **E** 마지막(유틸리티 전용). **R**은 6, 11, 16레벨에 한 포인트씩 찍는다.

**Runes:** 주룬 **Precision** + **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조 **Sorcery** + **Transcendence**, **Scorch**, 또는 후크·버스트 서포터 상대로 **Resolve** + **Bone Plating**, **Overgrowth**.

## 주요 매치업

- **Caitlyn / Varus:** 장사거리 포크 라이너. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**를 들고 웨이브 뒤에 숨어 6레벨까지 타워 밑에서 파밍한다. 서포터에게 강·삼거리 부쉬 와드를 부탁하자. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**가 완성되면 그들의 압박은 떨어진다.
- **Draven:** 6레벨 전 모든 올인(킬까지 가는 완전 교환)에서 우리를 압도한다. 라인 우선권에서 그의 레벨에 맞추고, 열린 공간에서 평타 교환을 절대 받지 말고, 그가 달려들면 **E**로 둔화시킨다. 도끼 메커니즘 때문에 그는 앞으로 위치할 수밖에 없으니 6 이후 **R** 포크로 응징하자.
- **Lucian:** 평타 교환을 피하자(그의 패시브 더블샷이 짧은 교환을 이긴다). 라스트힛 때만 접근하고, 8분 이후 W 윈도우로 그의 **E** 대시보다 100+ 단위 더 사거리를 확보하자.
- **Jhin / Senna:** 안전한 매치업. 둘 다 대시가 없고 장거리 포지셔닝을 원하지만, 코어가 하나만 나와도 W의 최대 HP % 버스트를 둘 다 견디지 못한다. 서포터 CC가 준비되고 W가 켜져 있으면 올인을 노리자.
- **Ezreal:** 실력 매치업. **Q**로 견제하지만 매 캐스트마다 그는 멈춘다. 그의 **Q** 애니메이션 동안 라스트힛하러 들어가고, 그가 **E** 대시를 쓰면 **E**로 둔화를 맞히고, 그의 팀에 ult 이후 follow-up CC가 있다면 ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar**가 좋다.

## 파워 스파이크 및 승리 조건

- **3레벨:** 모든 스킬에 한 포인트씩 찍히면 포크 키트가 완성된다 (**E** 둔화 → **W** 평타 → **Q** 셰드). 서포터 CC가 있다면 첫 신뢰할 만한 올인 윈도우다.
- **6레벨:** 첫 **Living Artillery**로 라인 전체에 포크와 1300+ 단위 라스트힛 확보가 열린다. 푸시당하고 있다면 강 너머에서 웨이브 클리어도 가능해진다.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves 완성 (~ 14-16분):** 첫 본격적인 한타 파워 스파이크. 세 번째 타격 true damage 발동이 W의 최대 HP %와 결합되어 사거리 안의 모든 squishy를 즉시 위협한다.
- **온힛 3코어 완성 (~ 25-28분):** ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**까지 모이면 W 윈도우가 6초 안에 적 팀 전체의 HP 바를 지운다. Baron, Atakhan, Elder Drake 한타를 여기서 강제하라. 우리 팀은 이 순간을 중심으로 게임을 풀어야 한다.

## 흔한 실수

- **트레이드용으로 W를 쿨마다 쏘기.** 라인에서 태우는 W 한 번은 다음 한타에 없는 W 한 번이다. 결정적인 올인, 스커틀 싸움, 오브젝트 한타용으로 아껴두자. 포크는 **R**의 몫이다.
- **마나가 마를 때까지 R 스팸.** 짧은 시간 안에 캐스트되는 Living Artillery는 매번 이전보다 더 많은 마나를 먹는다. 6초 안에 3번 캐스트하면 발당 100+ 마나를 낸다. 킬을 확정 짓는 게 아니라면 연속 2번에서 멈추자.
- **한타 중 W 최대 사거리 끝에 서기.** 최대 사거리는 서포터의 필 범위를 벗어난다. 프론트라인 끝이 아니라 그 한 평타 거리 뒤에 서자 — 암살자(1-2초 안에 표적을 지우는 모든 챔피언)는 모자가 삐죽 보이는 순간 우리를 표적으로 삼는다.
- **인챈터 서포터 없이 Kog'Maw 픽.** Lulu, Janna, Yuumi, Soraka는 선호가 아니라 계약이다. 후크·이니시 서포터와는 라인전을 살아남을 방법이 없고, 절대 도달하지 못할 한타로 스케일링하게 된다.
- **Q 셰드 잊기.** 탱커에게 W 전에 **Q**를 맞히면 Armor와 Magic Resist가 몇 초간 깎인다. 사거리 안이라면 항상 **Q**로 올인을 열자. 뒤이은 온힛 데미지가 마치 적이 방어 아이템 하나 덜 산 것처럼 박힌다.

## 고급 팁

라스트힛 평타와 같은 입력에 **Bio-Arcane Barrage (W)** 활성화를 버퍼링하라. 평타 직전에 W를 누르면 Kog'Maw의 느린 윈드업이 캔슬되고 W 윈도우가 0.1-0.2초 일찍 시작된다 — 6초 버프 동안 평타 한 번이 더 들어간다. 한타에서는 이게 적 프론트라인에 W 평타 4번을 박느냐, 첫 다이브가 도달하기 전에 5번을 박느냐의 차이다. 연습 모드에서 더미를 상대로 갈고 닦을 가치가 가장 높은 단일 메커닉이다.
