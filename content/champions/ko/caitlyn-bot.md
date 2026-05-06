---
title: "Caitlyn Bot Build & Guide — Patch 16.9"
slug: "caitlyn-bot"
language: "ko"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Caitlyn 봇 라인 ADC 완벽 공략. 시작 아이템 선택부터 lane bully 코어 빌드 경로, 주요 매치업 대처, 파워 스파이크 활용, 라인전 흔한 실수와 trap 강화 Headshot 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "몇 회 평타마다 치명타 확률에 비례하는 보너스 피해의 강화 사격을 발사한다. trap 또는 net에 걸린 대상에게는 사거리가 두 배가 된다."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "장거리 직선 채널링 skillshot. 일렬로 적중하며 뒤쪽 대상은 피해 감소. 주력 DPS 및 라인 정리 도구."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "trap을 설치한다. 발동 시 적 챔피언을 1.5초 동안 시야 노출 + 속박하고 강화 Headshot을 부여한다."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "지정 대상에게 그물을 던져 슬로우를 걸고 Caitlyn은 뒤로 밀려난다. diver 회피용이지 진입기가 아니다."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "단일 대상 글로벌 채널링 처형기. 대상 주변 아군이 총알을 막을 수 있어 isolation 상태를 노려야 한다."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "탱커 frontline 또는 HP 누적 조합 상대 (Sion, Cho'Gath, Dr. Mundo) — 보너스 방관이 적 최대 HP에 비례"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "강한 힐 조합 상대 (Soraka, Vladimir, Aatrox) — Grievous Wounds로 태깅 즉시 힐 차단"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "assassin 또는 diver 압박 상대 (Zed, Samira, Yasuo flank) — 이속 + 패시브 보호막으로 E 빼낼 시간 확보"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "hook 또는 pick 조합 상대 (Blitzcrank, Thresh, Morgana Q) — 스펠 실드가 핵심 CC 한 방을 먹는다"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Q 사거리와 trap 셋업으로 봇 라인을 압박하고, The Collector + Infinity Edge로 Headshot 스노우볼, 이후 frontline 뒤에서 E 카이팅하며 R로 저체력 도주자를 마무리한다."
  weakness: "E가 쿨이면 진정한 escape가 없다. diver와 assassin (Samira, Yasuo, Zed flank)에 하드 카운터당하고, 초반 리드를 미드게임 pick으로 못 바꾸면 Jinx나 Vayne 같은 hyperscaler에게 따라잡힌다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 개요

Caitlyn은 게임 내 가장 긴 사거리를 가진 marksman이자 교과서적인 **lane bully** (라인전부터 압박해 초반 우위를 키워 가는 챔피언)다. 봇 라인 캐리로서 그녀의 정체성은 처음 12분을 적 듀오에게 비참하게 만들고, 그 리드를 오브젝트로 환산하는 데 있다. **Piltover Peacemaker (Q)** 는 라인 안의 거의 모든 평타보다 사거리가 길고, **Yordle Snap Trap (W)** 은 chokepoint를 피해 구역으로 바꾸며, 패시브 **Headshot** 은 trap이나 net 주변에서 자리를 잘못 잡는 적을 응징한다. 대신 ADC 중에서도 손꼽히게 낮은 기본 방어력과 체력을 가진다 — 우위를 잡고 있을 땐 라인을 지배하지만, 한 번 잡히면 순식간에 녹아내리는 게 그녀의 거래 조건이다.

게임 플랜은 말로는 단순하고 실행은 까다롭다. **Q**로 라인을 깎아 내고, 부쉬와 봇 삼거리 부쉬에 trap을 깔아 **W → 강화 Headshot** 콤보를 위협하며, 첫 귀환 리드를 첫 포탑 방패 골드로 환산한다. **The Collector**와 **Infinity Edge** 이후 역할은 back line carry로 바뀐다 — 두 번째로 가장 뒤쪽에 자리잡고, diver가 붙으면 **E**로 카이팅하며, **R**은 저체력 도주자에 대한 처형으로만 사용한다. 절대 poke 도구가 아니다.

## 추천 빌드

**시작 아이템:** Doran's Blade + Health Potion 2개. 라인을 이기고 있어도 두 번째 Doran's은 사지 마라 — 그 골드는 The Collector를 위한 Pickaxe 컴포넌트로 가는 게 훨씬 효율적이다.

**코어 아이템 (구매 순서):**

1. **The Collector** — 1코어 러시. 처형 패시브가 적 5% HP 미만에서 발동하며, **R**이 마무리하려는 저체력 도주자를 그대로 지운다. lethality는 적 ADC의 방어력이 거의 없는 초반에 이상적이다.
2. **Berserker's Greaves** — 공속 신발. 적팀에 하드 CC 위협이 3개 이상일 때만 Mercury's Treads.
3. **Infinity Edge** — 가장 큰 데미지 스파이크. Caitlyn의 Headshot은 치명타 확률에 비례한 보너스 피해를 입히며, IE가 매 Headshot을 backline 대상에 대한 거의 원샷으로 바꾼다.
4. **Rapid Firecannon** — 추가 평타 사거리(700+ 기본 + RFC + IE로 로비에서 가장 긴 평타) + Headshot 타이밍에 자연스럽게 맞물리는 Energized 발동.

**상황별 아이템:**

- **Lord Dominik's Regards** — 탱커 frontline 또는 HP 누적 조합 상대 (Sion, Cho'Gath, Dr. Mundo). 적팀에 탱커가 3명 이상이면 Rapid Firecannon 대체.
- **Mortal Reminder** — 강한 힐 조합 상대 (Soraka, Vladimir, Aatrox). 태깅 즉시 회복량을 절반으로 줄이는 Grievous Wounds (받는 회복을 깎는 디버프) 적용.
- **Phantom Dancer** — assassin 또는 diver 압박 상대. HP 임계 패시브(저체력 시 발동하는 보호막)와 이속이 **E**로 빠질 0.5초를 만들어 준다.
- **Edge of Night** — hook 또는 pick 조합 상대 (Blitzcrank, Thresh, Morgana Q). 스펠 실드가 핵심 CC 한 방을 먹어 주는 게 그 매치업에서 살고 죽고를 가른다.

**신발:** Berserker's Greaves가 기본. Brand support나 Zyra support 같은 강한 AP CC 상대로만 Mercury's Treads.

**스킬 마스터 순서:** **Q** 선마(라인 정리 및 주력 DPS), **E** 후마(유일한 escape의 쿨감), **W** 마지막(피해는 오르지만 trap 타이머는 그대로). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision** + **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. 보조는 **Sorcery**의 **Manaflow Band** + **Gathering Storm**, 또는 신발 업그레이드 골드를 더 받고 싶다면 **Inspiration**의 **Magical Footwear** + **Cosmic Insight**.

## 주요 매치업

- **Draven:** 1-3레벨에 살짝 불리. Spinning Axe burst가 trade에서 우세하다. 3레벨 전에는 싸우지 말고, 자기 포탑 근처에 웨이브를 freeze해서 3레벨에 세 스킬을 다 채운 뒤, **W**가 라인 부쉬에 깔린 상황에서만 trade. Q-Q-Q 후 마나가 빈 윈도우를 punish하라.
- **Ezreal:** 호각, support가 committ만 허락하면 Caitlyn 우세. 그의 **Q**보다 사거리가 훨씬 길다. 그가 미니언에 Q를 쓸 때마다 라인 너머로 자유 **Q**를 박아 넣어라. 그의 **W** 경로 안으로는 절대 dodge하지 말 것.
- **Jhin:** 호각, **R** 저격 디시플린이 승부를 가른다. 그의 4번째 탄환을 존중하라(엄청난 피해). 그의 **W**가 쿨이면 앞으로 걸어가 trade. **W** 속박을 예고하면 **E**로 dodge.
- **Vayne:** 9레벨 전엔 Caitlyn 압도적 우세, 11레벨 후엔 악몽. 너의 금광이다 — 3레벨 전에 웨이브를 강하게 shove하고, **Q** poke로 라인에서 밀어내며, 6레벨에 정글러에게 dive 기회를 알려라. 그녀가 두 아이템까지 살아남으면 라인은 끝이고 너는 back line 역할로 전환해야 한다.
- **Samira:** W가 나오면 근거리 all-in을 노린다. 라인 부쉬에 trap을 깔아 진입 경로를 봉쇄하고, 그녀가 dash해 들어오는 순간 **E**를 knockback 용도로 아껴 두며(poke에 낭비하지 마라), Phantom Dancer 보호막이 쿨일 땐 절대 싸우지 마라.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** 한 포인트와 **E** 한 포인트로, 적 ADC가 last-hit하러 앞으로 걸어 나오면 Q-AA-AA 윈드업이 그 ADC의 HP 30-40%를 깎는다. 라인 중앙에 웨이브를 잡고 이 윈도우를 노려라.
- **6레벨:** 첫 **Ace in the Hole**이 pick 압박을 연다. 삼거리 부쉬 안에서 캐스팅해야 총알의 시야 노출이 너의 위치를 들키지 않는다. poke로 낭비하지 말고 — 주변에 아군이 없는 저체력 도주자를 기다려라.
- **The Collector 완성 (~ 8-10분):** 첫 처형 분기점. 5% HP 이하의 squishy(방어가 약한 챔피언) 대부분이 패시브에 즉사하므로, 저체력 미니언 라인을 **Q**로 cleave해 적 챔피언까지 닿으면 공짜 킬이다.
- **Infinity Edge 완성 (~ 18-22분):** 가장 큰 데미지 스파이크. Headshot 발동이 "따끔"에서 "적 ADC를 지움"으로 바뀐다. 여기서 오브젝트 한타 — Drake 또는 Rift Herald — 를 강제하고, 너의 승리 조건 구역 주변에 시야를 깔아라.

## 흔한 실수

- **마나 관리 없이 Q로만 웨이브 정리.** Caitlyn은 초반 마나가 빠듯하다. 근거리 미니언 둘 + 캐스터 한 마리가 일렬로 정렬될 때만 Q를 쓰지, 그러지 않으면 다음 trade 윈도우에 빈 마나로 들어간다.
- **W trap을 poke처럼 던지기.** trap은 셋업 도구지 데미지 도구가 아니다. 적이 last-hit이나 로테이션을 위해 반드시 지나야 하는 chokepoint(라인 부쉬, 삼거리 부쉬, 강 입구)에 깔아라. 적 ADC 발치에 맨 trap을 던지는 건 라인 prio 1초를 낭비하는 셈이다.
- **한타에서 평타 최대 사거리에 서기.** 평타 최대 사거리에 서면 너는 아군의 peel(보호) 범위 밖이다. 두 번째로 가장 뒤쪽 자리에 서야 측면 진입 assassin이 support의 반응 전에 너를 일방적으로 지우지 못한다.
- **R을 맵 반대편에서 poke로 사용.** **Ace in the Hole**은 채널링이 길고 대상 근처 아군이 총알을 body-block한다. **고립된** 저체력 도주자에게만 사용하라 — 350 유닛 안에 총알을 받을 아군이 없는 대상.
- **킬을 쫓다가 E를 소모.** **90 Caliber Net**은 너의 유일한 escape다. 이게 쿨이면 너는 diver에 답이 없는 glass cannon(공격력은 높지만 방어가 약한 챔피언, 대부분의 ADC가 그렇다)이다. 빠지는 데 써라, 거리 좁히는 데 쓰지 말고.

## 고급 팁

chokepoint에서 **"Trap → Q → 강화 Headshot"** 체인을 연습하라. 삼거리 부쉬나 정글 입구로 걸어가 적 라인 뒤편 — 그들이 후퇴할 쪽 — 에 **W**를 깔고, **Q** poke로 그들을 밀어 넣어라. 그들이 trap을 밟는 순간, 1.5초 root는 후속 **Q**와 강화 Headshot을 보장한다 — 그리고 강화 사격은 trap에 걸린 대상에게 **사거리가 두 배**라서, 다른 ADC가 평타조차 칠 수 없는 거리에서 발사할 수 있다. 실제로 이건 2v2 라인을 1.5v2로 바꾼다 — 적 ADC는 웨이브 prio(우선권 — CS를 잃지 않고 라인을 떠날 권리)를 잃거나, 보장된 콤보에 발을 들이거나 둘 중 하나를 골라야 한다. 어느 쪽이든 너는 trade를 이긴다.
