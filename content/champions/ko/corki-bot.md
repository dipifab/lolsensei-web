---
title: "Corki Bot Build & Guide — Patch 16.9"
slug: "corki-bot"
language: "ko"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Corki 봇 라인 완벽 공략. 하이브리드 ADC 빌드 순서와 룬 선택, 핵심 2v2 매치업 대응, 파워 스파이크 활용 시점, 라인전 흔한 실수와 해결책, 그리고 Big One 카운팅 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "평타 피해의 일부가 추가 true damage로 적용된다. armor와 magic resist를 무시하는 꾸준한 DPS 원천 — 공속과 on-hit 아이템을 쌓는 이유다."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "지정 지역 마법 피해와 잠시 시야 노출. zoning 당했을 때 last-hit, 부쉬 체크, 모든 poke trade의 기점으로 쓴다."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "불 자국을 남기는 짧은 dash. Corki의 유일한 기동기 — 도주, 진입, skillshot 회피용. 쿨이 길어 웨이브 정리에는 절대 쓰지 않는다."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "전방 부채꼴 채널링. 피해와 함께 적의 armor와 magic resist를 깎는다. 장기전 DPS를 보태고 R 미사일 직전 탱커를 무르게 만든다."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "착탄 시 폭발하는 장거리 미사일. 최대 7발 충전, 매 3번째는 추가 burst가 있는 Big One. 주력 poke 겸 처형 도구."
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "탱커 2명 이상의 front line(Sion, Ornn, Maokai) 상대: 묵직한 armor pen으로 지속 DPS가 뚫고 들어감"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐 누적 조합(Soraka, Aatrox, Vladimir, Dr. Mundo) 상대: grievous wounds로 회복량을 절반으로 깎음"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 버스트(Brand 서폿, Veigar, Syndra 미드) 상대: 마법 보호막이 풀콤보 한 번을 막아 W로 빠질 시간을 줌"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "단일 락다운 궁(Malzahar R, Skarner R, Mordekaiser R) 상대: 액티브로 즉사를 부르는 suppression을 해제"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "R poke와 Q sustain 피해로 두 코어까지 2v2를 버틴 뒤, Manamune 스택 평타와 R Big One으로 후방에서 후반 한타를 캐리한다."
  weakness: "물몸에 dash가 단 하나. 강한 초반 라인(Draven, Lucian + 이니시 서폿)은 Trinity Force 전에 CS를 빼앗고, 투사체 차단기(Yasuo Wind Wall, Braum E)는 poke를 봉쇄한다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Precision: Fleet Footwork은 true damage 패시브로 평타를 난사하는 Corki에게 잘 발동되어 회복과 이속 버스트를 준다. 긴 2v2에서 필요한 라인 sustain이다. Triumph와 Coup de Grace로 킬을 마무리하고, Legend: Alacrity로 공속을 쌓아 지속 DPS를 올린다."
    secondary_rationale: "보조 트리 Inspiration: Magical Footwear는 신발 구매를 늦추지만 다른 곳에서 스탯을 먼저 챙긴다. Cosmic Insight는 소환사 주문 쿨을 줄여(Flash와 Heal을 더 자주 사용) 봇 2v2의 가장 큰 생존 레버를 키운다."
    secondary_alternative: "강한 poke 라인(Caitlyn + Lux, Ezreal + Karma)에서 Magical Footwear의 신발 지연을 감당할 수 없다면, Inspiration을 Sorcery로 바꿔 Manaflow Band(R 난사용 마나 sustain)와 Gathering Storm(후반 Q와 Big One의 무료 AP scaling)을 든다."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "도주기 없는 단거리 hypercarry"
      reason: "Trinity 전에는 Corki가 1225 사거리 R poke와 W dash로 사거리 우위를 잡는다. 그들은 last-hit 거리에 묶여 있어 hyper-carry 파워 스파이크 전에 체력이 깎인다."
    - examples: ["senna", "ezreal"]
      archetype: "정적인 poke ADC"
      reason: "사거리는 비슷하지만 Corki는 dash와 즉발 Q 광역기를 들고, Senna와 Ezreal의 poke는 단일 투사체다. Q를 맞은 미니언으로 W를 타고 들어가 쿨다운을 크게 쓰지 않고 되받아칠 수 있다."
    - examples: ["sivir", "ashe"]
      archetype: "포인트 도주기 없는 ADC"
      reason: "Sivir의 Spell Shield는 한 번만 막아준다 — Q 한 발에 깎이면 다음 미사일은 그대로 들어간다. Ashe는 dash가 없다. Corki는 그들이 답할 수 없는 W 재배치로 라인을 굴린다."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "치명타 버스트 초반형 ADC"
      reason: "6레벨 전 단계에서 Corki를 트레이드로 압도하고 라인 킬로 스노우볼을 굴린다. Trinity 전엔 듀얼이 안 되며, 공격적으로 쓴 W는 그들의 dash 리셋 패턴에 즉시 처벌받는다."
    - examples: ["lucian", "tristana"]
      archetype: "다중 dash 평타 트레이드 라인"
      reason: "Lucian의 E와 Tristana의 W가 Corki의 사거리 안팎을 자유롭게 드나든다. 또 Lucian은 초반에 패시브 평타-Q 체인으로 true damage 우위를 능가해 아이템 전 단계에서 정면으로 이긴다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 투사체 차단(off-meta 봇)"
      reason: "Wind Wall이 Q와 R 미사일 전부를 먹는다. 이 챔프들이 봇에서 비주류라도, trade에서 Corki 대미지의 3분의 2가 사라지므로 매치업이 거칠다."
---

## 개요

Corki 봇은 하이브리드 marksman(물리와 마법을 섞어 쓰는 원거리 평타 캐리)으로, 라인은 mage-carry처럼 굴린다. 1225 사거리의 **Missile Barrage (R)** 로 멀리서 적 체력을 갉아내고("poke"), zoning에 걸리면 **Phosphorus Bomb (Q)** 로 미니언 막타와 견제(작은 피해를 반복해 누적시키는 plays)를 처리하며, **Trinity Force** 와 **Manamune** 두 아이템이 쌓이면(완성·발동) **Hextech Munitions (P)** 덕분에 평타의 일부가 true damage(armor와 magic resist를 모두 무시하는 피해)로 들어가 후반 한타를 캐리한다. 봇 라인이 잘 맞는 이유는 서포터가 그가 성장(아이템이 늘면서 강해지는 흐름)할 시간을 사 주고, 다이브를 떨어내(캐리에게 달라붙는 적을 막아) 그가 단 한 번뿐인 dash인 **Valkyrie (W)** 를 진짜 기회에만 쓸 수 있게 해주기 때문이다.

게임 플랜을 한 줄로 정리하면, 최대 사거리에서 R + Q로 trade(짧은 피해 교환)해 상대 2v2를 깎고, W는 follow-up 계획 없이 쓰지 않으며, Manamune이 강화한 평타에 R Big Ones(매 3번째 미사일이 더 강해진다)가 더해지는 후반에 도달해 backline(전선에서 멀리 서 있는 상대 캐리)에 있는 squishy 대상을 한 번에 처치(one-shot)한다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. blade의 lifesteal(가한 피해의 일부가 회복으로 돌아오는 효과)이 평타 패시브와 잘 맞고, ADC 입장에서 초반 Q + 평타 trade를 Doran's Ring보다 잘 버틴다.

**코어 아이템 (구매 순서):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen(Trinity의 구성 요소)이 모든 Q와 모든 R 미사일에 procc(추가 피해 효과 발동)되며 AD, 공속, ability haste(쿨다운 감소), 이속까지 함께 준다. Corki의 가장 큰 단일 파워 스파이크.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — 마나를 쓸수록 천천히 Muramana라는 강화 형태로 변한다. "stacked"(완전 변환) 상태가 되면 모든 평타와 마나를 쓰는 모든 스킬(R 미사일 한 발 한 발 포함)에 추가 피해를 더한다.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 고정 공속이 Trinity와 패시브 on-hit true damage에 더해진다. 봇 Corki의 기본 신발.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 적에게 첫 평타("energized auto")가 추가 피해를 입히며 일반 사거리보다 더 멀리 닿는다. 치명타 확률이 Trinity의 스탯 라인업과 잘 맞는다.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 공속과 치명타(평타가 추가 피해를 줄 확률)를 더해 **Gatling Gun (E)** 와 패시브 on-hit true damage 기반의 지속 DPS를 끌어올린다.

**상황 아이템:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 탱커 2명 이상의 front line(Sion, Ornn, Maokai) 상대: 묵직한 armor pen으로 지속 DPS가 그대로 뚫는다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐 누적 조합(Soraka, Aatrox, Vladimir) 상대: grievous wounds로 회복량을 절반으로 깎는다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP 버스트(Brand 서폿, Syndra 미드) 상대: 마법 보호막이 풀콤보 한 번을 막아 W로 빠질 여유를 만든다.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 단일 락다운 궁(Malzahar R, Skarner R, Mordekaiser R) 상대: 액티브가 즉사로 이어지는 suppression을 해제한다.

**신발:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 가 기본. 적 팀에 자신을 노리는 AD 위협이 3명 이상이라면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.

**스킬 순서:** **Q** 부터 마스터(poke, 웨이브 정리, 마법 피해), **E** 두 번째(DPS와 armor·magic resist 감소), **W** 마지막(유틸리티). **R** 은 6, 11, 16레벨에 찍는다.

**룬:** 주문 **Precision** 에 **Fleet Footwork**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조는 **Inspiration** 의 **Magical Footwear** + **Cosmic Insight**, 또는 강한 poke 라인 상대에는 **Sorcery** 의 **Manaflow Band** + **Gathering Storm**.

## 주요 매치업

- **Caitlyn:** 사거리에서 진다. 미니언 뒤에 자리 잡아 함정 setup을 차단하고, Q는 cast indicator(시전 시 바닥에 그려지는 시각 라인)에 맞춰 옆으로 step해 피한다. 벽 근처에는 절대 가지 말 것 — Q가 ricochet(벽에 튕겨 두 번째 명중)하면 추가 피해를 받는다. 체력이 낮을 땐 처형형 R을 피하려고 W를 아껴 둔다.
- **Draven:** 가장 어려운 초반. 1~5레벨 사이 trade에서 지고, 라인 킬로 스노우볼(초반 우위가 시간이 갈수록 커지는 흐름)을 굴린다. 살아남기 위해 CS(last-hit = creep score = 골드)를 양보하고, Spinning Axes가 떨어지는 타이밍에 정글 갱 신호를 보낸다. 도끼가 날아가는 도중에는 절대 trade하지 않는다.
- **Lucian:** E로 dash해 들어오려 한다. dash를 commit하는 순간 Q를 맞히면 슬로우와 서폿의 CC(crowd control = 기절·둔화·속박류)가 trade를 뒤집는다. 근접 거리에서 평타 trade는 금물 — 패시브 더블샷이 true damage 우위를 그대로 넘긴다.
- **Jhin + Lulu / Senna + Tahm:** 장거리 디스인게이지(보호막과 CC로 이쪽의 진입을 끊는 조합) 라인. 6레벨 all-in에서 이기거나, 아니면 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** 까지 버텨야 한다. Q + 평타로 라인을 밀고 정글러와 함께 R + W gank setup을 노린다.
- **Samira:** 6레벨 all-in 폭군(궁이 발동되면 도주가 불가능한 강제 fight). 그녀의 R이 아군에 한 번이라도 들어가면 ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** 를 산다 — 액티브 cleanse(디버프 해제)가 콤보를 끊는다. 6레벨 전엔 trade가 가능하고, 6 이후엔 W로 빠지다가 R Big One의 누적 피해가 그녀의 ramp를 넘으면 잡는다.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + W 또는 Q + E 조합으로 상대 위치 미스를 Q-AA-AA trade로("AA" = 평타) 처벌하고, 적 서폿이 앞으로 commit되어 있으면 W로 follow-up할 수 있다.
- **6레벨:** 첫 **Missile Barrage (R)** 가 all-in(완전 commit, 도주 없음)을 연다. R 스택과 곧 등장할 Trinity Force가 합쳐지면 Q-AA-R-R-R 콤보 + 서폿 CC로 체력 낮은 ADC 대부분이 죽는다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~ 13~15분):** Sheen이 모든 Q와 모든 R 미사일에 발동해 poke가 곧 킬 위협이 된다. all-in을 노리거나, 시야(맵을 비추는 ward)가 깨끗하면 Drake fight를 잡을 시점.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ 18~22분):** Muramana가 마나를 쓰는 모든 행동에 추가 피해를 더해 한타 피해가 stack 전 대비 거의 두 배가 된다. 이 시점에 오브젝트 fight(Drake, Baron)를 강제한다.

## 흔한 실수

- **R을 쿨마다 웨이브 정리에 난사.** R 미사일은 유한 자원이다. 미니언에 다 비우면 정작 다음 한타에서 burst가 0이 된다. 라인은 Q + 평타로 밀고, 오브젝트용으로 4발 이상 남긴다.
- **follow-up 없이 W를 공격적으로 사용.** W는 유일한 도주기다. 평타 한 번이 더 필요한 킬을 잡으려고 dash해 들어가면 Corki가 죽는다. 남은 마나와 쿨다운으로 처치할 수 없다면 commit하지 않는다(완전한 교전에 들어가지 않는다).
- **서폿 follow-up 없이 근접 평타 trade.** 패시브의 true damage가 가까이서 매력적으로 보이지만 Corki의 체력 풀은 squishy(낮고 약함)다. 적 서폿의 강한 CC가 살아 있을 땐 R 사거리에 머문다.
- **2번째 아이템으로 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 러시.** Infinity Edge는 높은 치명타 확률이 있어야 제 역할을 한다. 그런데 Corki의 첫 세 아이템(Trinity, Manamune, Berserker's)은 치명타가 거의 없다. Trinity → Manamune → Rapid Firecannon → Phantom Dancer 순서를 지키고, Infinity Edge는 5번째 또는 6번째에만 고려한다.
- **R 스택이 남은 채로 귀환.** 죽으면 스택이 리셋되지만 귀환에는 유지된다 — 그냥 두고 base로 돌아오지 말고, 남은 미사일을 라인이나 포탑에 비우고 귀환한다.

## 고급 팁

**Big One** 리듬을 추적하고 활용한다. 매 3번째 R 미사일("Big One")이 일반 두 발보다 훨씬 큰 피해를 준다. 한타 직전에 stacked 미사일을 세어 본다 — 다음 발이 Big One이라면 우선순위 타깃을 위해 아껴 두고, 방금 썼다면 일반 미사일 두 발을 라인이나 포탑에 비워 진입 시점에 Big One이 다시 준비되도록 만든다. R을 무작정 쏘는 플레이어는 Big One을 미니언에 낭비한다. 카운트를 세는 플레이어는 결정적인 순간에 squishies(체력이 낮은 캐리)를 한 방에 제거한다.
