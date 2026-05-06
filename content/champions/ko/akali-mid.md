---
title: "Akali Mid Build & Guide — Patch 16.9"
slug: "akali-mid"
language: "ko"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Akali 미드 공략. AP 어쌔신 빌드, 핵심 매치업 대처, 6레벨 파워 스파이크 활용, 흔한 실수와 마무리 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "스킬로 챔피언에게 피해를 주면 표식이 남고, 표식 원 밖으로 나가면 다음 평타에 추가 사거리와 추가 피해가 부여된다."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "쿠나이 부채꼴로 피해와 슬로우. poke와 trade의 핵심 도구. 에너지 소모, 짧은 쿨다운 — trade 중에는 쿨마다 박는다."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Akali를 타겟팅에서 보이지 않게 하고 지속 중 최대 에너지를 +80까지 올려주는 연막. 안에서 행동하면 잠시 드러난다. 도주용이 아니라 콤보 중간에 깔아라 — 에너지 보너스로 rotation에 Q 한 번이 더 들어간다."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "뒤로 점프하며 표창을 던져 첫 적에게 표식을 남긴다. 재사용으로 표식이 찍힌 대상에게 dash. 미니언이 아닌 챔피언에게만 표식을 남겨라."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "2단 궁극기. R1은 점프하며 피해; R2는 관통 dash로 저체력 적을 처형. 처형 피해는 대상의 잃은 체력에 비례한다."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "강한 단일 대상 burst 상대 (Zed R, Veigar 콤보, LeBlanc): stasis로 버틴 뒤 R2로 마무리"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사는 순간 — 단단해진 적에게 스킬 피해 scaling 유지"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "engage를 끊는 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun) — spell shield가 첫 타격을 막는다"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "긴 교전과 bruiser가 많은 조합에서 순수 burst 대신 회복과 내구가 필요할 때"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "고립된 squishy를 E1+E2 dash로 잡아 Q + 강화 평타 + R 콤보로 처형. R 쿨이 돌 때마다 사이드 라인을 roam한다."
  weakness: "6레벨 전 웨이브 정리력이 약하고 사거리가 짧다 — 원거리 poke와 정글 gank에 취약. 하드 CC가 없고 W가 빠지면 도주 수단도 없어, 콤보가 들어가기 전에 잠겨 burst를 맞을 수 있다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## 개요

Akali는 AP burst 어쌔신이다. 1~2초 안에 단일 표적에게 엄청난 피해(burst — 짧은 시간에 폭발적으로 몰아치는 피해)를 쏟아붓도록 설계된 챔피언이다. 그녀의 스킬셋은 **Twilight Shroud (W)** 의 은신 윈도우를 중심으로 **Shuriken Flip (E)**, **Perfect Execution (R)** 의 dash를 엮은 연쇄 구조다. 마나가 아니라 에너지를 쓰기 때문에, 자원 총량보다는 짧은 쿨다운이 중요하다. 미드가 잘 맞는 이유는 강이 양옆 사이드 라인으로 짧은 roam(자기 라인을 떠나 다른 라인 교전에 개입) 경로를 열어주고, 6레벨의 **R**이 상대 vision ward(시야를 밝혀주는 설치형 아이템)가 없는 어떤 교전이라도 pickoff(팀에서 떨어진 적을 단독으로 끊어 내는 플레이)으로 바꾸기 때문이다.

게임 플랜은 약한 라인전(웨이브 정리가 느리고 — 스킬이 미니언 한 줄을 비우는 데 시간이 걸린다 — 초반 킬 위협도 없다)을 6레벨까지 버틴 뒤, 작은 우위라도 곧장 roam과 타워 dive로 환산하는 것이다. 챔피언의 핵심 트릭은 **E** 위치 잡기다 — 이 스킬은 먼저 표창을 날리고, 그 표창에 처음 맞는 적 챔피언만이 dash 대상이 된다. 실수로 미니언에 표식을 박으면 ability rotation(Q + W + E + R을 한 번씩 돌리는 순환) 한 사이클 내내 dash를 못 쓴다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + Health Potion 2개. Doran's Ring은 Akali에게 필요 없는 AP와 마나 재생을 주지만, 미니언 추가 피해 옵션이 약한 초반 웨이브 정리력을 보완해 준다. 라인이 평타 harass 위주가 아니라면 ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**은 굳이 안 가도 된다.

**코어 아이템 (구매 순서):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer(상대에게 dash로 거리를 좁혀 주는 액티브)이자 burst 추가; **E**, **R** 과 묶어 사거리 밖에서 engage(교전 시작)할 수 있다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(스킬 피해가 상대 마법 저항을 일정량 무시). squishy 처치 효율 직접 향상.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst, 적이 ~40% 체력 이하일 때 추가 피해가 발동돼 **R2** 처형 타이밍과 정확히 맞물린다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 전체에 곱연산이 들어가는 배수기. AP 슬롯 중 가장 강력하다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Zed, Veigar, LeBlanc처럼 burst가 너와 같은 윈도우에 떨어지는 상대 전반. stasis 액티브로 ~2.5초 무적·정지 상태가 되어 그쪽 피해를 흘려보낸 뒤 **R2**로 마무리한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 마법 저항 아이템을 사는 순간 교체; 피해 scaling 유지.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun); spell shield가 그쪽 setup을 흡수한다.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — bruiser가 많은 조합과의 긴 교전 상황의 1코어 대안; burst를 지속 피해와 회복으로 바꾼다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 가 기본. CC가 많은 상대(Lissandra, Ahri, Galio)에는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 도 무난하다.

**스킬 마스터 순서:** **Q** 선마(주력 피해와 에너지 환급, 즉 사용 후 돌려받는 에너지), **E** 후마(dash 쿨다운 감소), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 룬은 게임 시작 전에 고르는 패시브 보너스로, 주문 트리(5개)와 보조 트리(2개)를 함께 든다. 주문 **Domination**에 **Electrocute**(연속 3개 스킬 적중 시 추가 burst), **Sudden Impact**(dash 직후 마법 관통 추가), **Sixth Sense**(시야 압박), **Ultimate Hunter**(**R** 쿨 감소). 보조 **Sorcery**에 **Transcendence**(ability haste — 스킬이 더 빨리 돌아온다)와 **Gathering Storm**(후반 AP scaling). Akali는 마나가 아닌 에너지를 쓰니 **Manaflow Band**는 절대 들지 않는다.

## 주요 매치업

- **Galio:** 6레벨 전 하드 카운터. 패시브가 평타를 강화하고, **W** 도발이 너의 **R** dive를 그대로 끊는다. 6레벨까지 안전하게 farm하고, 정글에 핑을 찍고, 그의 **W**가 쿨일 때만 commit하라.
- **Yasuo:** **Wind Wall** 이 **Q** 와 **E** 의 표창을 막는다. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** dash나 **E** dash로 시작하고, **Q**는 Wind Wall이 빠진 뒤에 쓴다.
- **Lux:** 단일 1대1에서는 네가 outscale한다. 그녀의 **Q**(길고 느린 직선 스킬샷 — 자동조준이 아닌 스킬, 시전 순간 옆으로 움직여 피한다)를 **E**로 회피한 뒤, 6레벨에 dive하라. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** 를 너보다 먼저 띄우면 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 를 산다.
- **Twisted Fate:** roam 속도 싸움. 그가 더 좋은 roam 도구를 가졌다(**R** 로 맵을 가로지른다). 그가 라인을 비우는 것보다 빨리 wave를 push(미니언 라인을 상대 타워 쪽으로 밀기)해야 한다. 강과 tri-bush(미드 옆 풀숲 세 개가 모인 지점)에 vision ward(설치하면 일정 영역 시야를 주는 아이템)를 박아 그의 **R** 동선을 추적하라.
- **Zed:** 호각 매치업. 6레벨 이전엔 짧은 trade에서 그가 우위; 6레벨 이후엔 너의 **R**이 저체력의 그를 마무리한다. 그가 **W** 그림자를 다 빼지 않은 상태에선 all-in(중간 후퇴 없이 끝장 보는 교전)을 하지 마라 — 그게 아니면 그가 너의 **R2** 에서 빠져나간다.

## 파워 스파이크 및 승리 조건

- **3레벨:** 기본 스킬셋 완성 (Q + W + E). dash + 은신 콤보가 갖춰져, 짧은 trade(라인전의 짧은 스킬 교환, 끝까지 가는 킬 시도가 아님)나 disengage(불리한 교전에서 빠지기)가 가능해진다. 첫 정글 gank(상대 정글러가 라인에 들어와 펼치는 기습 공격) 전에 한 번의 짧은 trade로 prio(우선권 — 너의 wave가 상대 타워 쪽에 가까워, 자원을 잃지 않고 라인을 비울 수 있는 상태)를 가져오라.
- **6레벨:** 첫 **R** 이 게임 통틀어 가장 큰 단일 스파이크다. 어떤 squishy(피해 출력은 높지만 방어가 약한 챔피언, 예: ADC)에게도 처형 임계값이 열린다. 강 시야가 잡혀 있지 않다면(상대 vision ward로 덮여 있지 않다면), 강 한가운데 교전은 공짜 킬이다.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt 완성 (~12-14분):** 풀 all-in 피해가 R2 처형(체력이 임계값 아래로 떨어진 적을 R2가 끊어 내는 것)을 통해 squishy를 한 번에 끊는다. 너의 wave가 상대 타워에 박히는 순간 사이드 라인으로 roam하라.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** burst 피해가 폭발적으로 scaling한다. 오브젝트(Drake, Baron, 타워) 주변에서 교전을 강제하고, **W** 로 측면을 돌아 backline pick(팀에서 떨어진 적을 단독으로 끊는 플레이)을 노려라 — 그들이 보지 않는 쪽, 보통 시야가 없는 fog of war(시야가 없는 어두운 영역)를 통해 들어간다.

## 흔한 실수

- **정글 setup 없이 6레벨 전에 all-in.** Akali의 6레벨 전 trade 피해는 어중간하다 — Q + 평타만으로는 정신 차린 상대를 못 잡는다. 안전하게 farm하고, 정글에 핑을 찍고, 6레벨에 commit하라.
- **E1을 미니언에 낭비.** Shuriken Flip의 첫 타격은 닿는 모든 것(미니언 포함)에 표식을 박는다. 표창이 크립에 박히면 그 뒤 챔피언으로의 dash가 사라진다. 챔피언이 표창에 가장 먼저 맞도록 항상 **E** 의 각도를 잡아라.
- **W 안에서 평타 치기.** 행동(어떤 스킬이든 평타든) 시 ~0.5초 동안 모습이 드러난다. **Twilight Shroud** 안에 서서 poke하는 것은 은신 유지가 아니다 — **W** 는 단일 skillshot(움직여서 피할 수 있는 조준 스킬)을 회피하거나 재배치 직전에 시야를 끊는 용도로 써라.
- **R2 계획 없이 R1 소모.** R1만 쓰면 너는 적 팀 한복판에 던져진다. 항상 R2 표적을 잡아 둬야 한다 — 마지막 처형용이거나 도주용 dash 중 하나로.
- **squishy 적팀에 bruiser 아이템 빌드.** ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** 같은 아이템은 burst를 sustain으로 바꾼다. 약한 carry로만 구성된 팀 상대에는 내구가 아니라 순수 burst(![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**)가 정답이다.

## 고급 팁

**R1** 이 착지하는 그 순간 **Twilight Shroud (W)** 를 깐다. 적 팀 한복판에 도착함과 동시에 발 밑에 연막이 펼쳐지면서, 그들이 너를 다시 클릭하기 전 약 0.5초의 윈도우 동안 target lock(잠시 타겟이 안 잡히기 때문에 적이 너를 다시 선택해야 하는 상태)을 끊어 버린다. 잘 활용하면 **R2** 처형 자세를 다시 잡거나, trade가 불리해 보일 때 all-in을 취소하는 선택지가 열린다 — 그리고 적 서포터의 peel 스킬(자기 carry를 보호하는 스킬)도 네가 engage 도중에 비-타겟이 되어 종종 빈 곳에 떨어진다.
