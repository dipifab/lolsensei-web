---
title: "Corki Mid Build & Guide — Patch 16.9"
slug: "corki-mid"
language: "ko"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Corki 미드 라인 완벽 공략. 하이브리드 marksman 빌드 순서, Inspiration 룬 선택, 핵심 매치업 대처법, 파워 스파이크 타이밍과 라인전 흔한 실수, 그리고 Big One 미사일 타이밍 같은 고급 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "평타 피해의 일부가 true damage(고정 피해)로 들어간다. armor와 magic resist를 무시하는 꾸준한 DPS — 공격 속도와 on-hit 아이템을 쌓는 이유다."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "지정 지역 마법 피해와 짧은 시야 노출. zoning 당했을 때 last-hit, 부쉬 체크, 그리고 모든 poke trade의 시작용으로 쓴다."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "짧은 dash로 불 자국을 남긴다. Corki의 유일한 기동기 — 도주, gap-close, skillshot 회피용. 쿨이 길어 waveclear에 낭비하면 안 된다."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Corki 앞쪽 부채꼴 채널링. 피해를 입히고 적의 armor·magic resist를 깎는다. DPS를 더하고 R 미사일 후속타용 방어력을 무력화한다."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "장거리 미사일이 충돌 시 폭발. 최대 7발 충전, 매 3번째는 Big One으로 추가 burst. 주력 poke이자 처형 도구."
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
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "다중 dash assassin 상대 (Zed, Akali, Talon) — stasis로 burst 콤보를 끊고 W나 팀 peel 시간을 번다"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "탱커 2명 이상의 frontline 상대 (Sion, Ornn, Maokai) — 강한 armor pen으로 평타와 R 미사일이 뚫린다"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강력한 AP burst 상대 (LeBlanc, Veigar, Syndra) — 마법 보호막이 풀콤보를 한 번 막아 W로 빠지게 해준다"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "하드 CC 3개 이상 팀 상대 (스턴·속박) — 체인 CC가 magic pen보다 더 위협적일 때 신발 교체"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "미니언 뒤에서 안전하게 Trinity Force와 Manamune까지 scaling한 뒤, 최대 사거리 R poke로 squishy를 깎는다. 팀이 오브젝트를 잡는 동안 로테이션 중 고립된 적을 쳐낸다."
  weakness: "체력이 낮고 W 이외 탈출기가 없다. 다중 gap-close를 가진 mobile assassin은 두 아이템 전에 짓밟고, 투사체 차단(Yasuo Wind Wall, Braum E)은 poke를 무력화한다."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Inspiration: First Strike는 Corki가 Q나 R로 trade를 먼저 여는 플레이를 보상해, 초기 피해를 보너스 골드로 바꿔 Trinity + Manamune 빌드를 굴린다. Magical Footwear, Biscuit, Cosmic Insight로 초반 sustain을 늘려 안전하게 scaling한다."
    secondary_rationale: "보조 트리 Sorcery: Manaflow Band는 필수 — R 미사일이 마나를 먹는데 라인전에서 난사하기 때문이다. Gathering Storm은 공짜 AP scaling을 줘 Q와 후반 Big One 미사일의 마법 피해를 키운다."
    secondary_alternative: "강한 poke 라인(Xerath, Vel'Koz, Zoe) 상대로 체력에서 밀리면 안 될 때 Sorcery 대신 Resolve로 Second Wind(harass 중 패시브 회복)와 Overgrowth(최대 체력 scaling)를 들어 안정적으로 scaling한다."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "dash가 없는 immobile mage"
      reason: "Corki의 R은 1225 단위까지 닿고, W로 라인 내 유일한 기동력 우위를 가진다. dash나 은신이 없는 타겟은 R poke를 반복해서 맞고, W 쿨다운 윈도우에서도 응징할 수단이 없다."
    - examples: ["xerath", "vel-koz"]
      archetype: "긴 채널링을 가진 artillery mage"
      reason: "Corki는 R로 사거리를 맞추면서 dash로 긴 채널링(Xerath R, Vel'Koz R)을 끊는다. all-in을 받지 않고, trade는 기동력 있는 쪽에 유리하다."
    - examples: ["annie", "syndra"]
      archetype: "단거리 burst mage"
      reason: "이들의 킬 위협은 평타 사거리 안에서 시작되는데, 정확히 그곳에서 Corki의 true damage 패시브 + Trinity Force가 우위에 선다. 6레벨 전엔 R로 out-poke, 후엔 W로 스턴 회피."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "다중 gap-close를 가진 mobile assassin"
      reason: "Corki는 dash가 W 하나뿐이고 쿨도 길다. 다중 dash 키트는 W가 돌기 전에 사거리 안으로 진입해 Trinity 체력을 burst로 뚫는다, 특히 두 아이템 전에."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 투사체 차단형"
      reason: "Wind Wall이 Q와 R 미사일 전부를 먹어 trade에서 Corki 피해의 2/3가 사라진다. 체력에서 이겨도 쿨다운 비용 손해가 가혹하다."
    - examples: ["fizz", "kassadin"]
      archetype: "Untargetable / 점멸 기반 탈출기"
      reason: "Fizz E와 Kassadin R은 Corki의 풀콤을 회피한 뒤 W가 빠진 그를 다시 잡으러 온다. 그들이 untargetable이 되면 Corki는 후속 burst가 없다."
---

## 개요

Corki는 하이브리드 marksman(물리·마법 피해를 섞는 원거리 평타 캐리)으로, 미드 라인을 장거리 artillery 챔피언처럼 운영한다. 아이템이 나올수록 강해지고("scaling"), **Missile Barrage (R)** 로 멀리서 적 체력을 깎고("poke" — 적의 사거리 밖에서 깎는 피해), **Trinity Force**가 완성되면 평타로 저체력 squishy 타겟을 마무리한다. **Hextech Munitions (P)** 로 평타의 일부가 true damage(armor와 magic resist를 무시하는 피해)로 들어가기 때문에, 공격 속도와 on-hit 스탯이 순수 AD나 AP만큼 중요하다. 미드에 어울리는 이유는 양쪽 강에서 들어오는 jungler 갱(기습 공격)을 **Valkyrie (W)** dash로 받아낼 수 있고, R 미사일이 맵 중심에서 사이드 라인까지 닿기 때문이다.

게임 플랜 한 줄: Manamune의 마나를 쌓아(축적해) Muramana로 업그레이드하고, **Phosphorus Bomb (Q)** 와 R로 웨이브를 푸시하고(미니언을 빨리 잡아 라인을 앞으로 미는 것), 매 쿨다운 윈도우(스킬이 준비된 몇 초)마다 적 라이너의 체력을 깎아 우리 jungler가 dive(타워 밑에서 적을 죽이기)할 수 있게 한다. 실력 차이는 R 조준에 있다 — 타겟을 lead(움직일 위치를 예측해 그곳을 조준)하고, Big One 미사일(매 3번째 R은 더 강한 미사일)을 적이 가장 약할 때 맞춘다. **W**는 단 하나의 dash다: 잘못 쓰면 어떤 assassin이든 너를 walk down(쫓아와서 죽임)할 수 있다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. blade는 lifesteal(가한 피해의 일부가 회복으로 돌아옴)을 주어 평타 패시브와 잘 맞는다. 듀얼보다 마나 sustain이 더 중요한 순수 poke 라인이 아니라면 Doran's Ring은 건너뛴다.

**코어 아이템 (구매 순서):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen(Trinity의 구성품)이 모든 Q와 모든 R 미사일에 proc(추가 피해 효과 발동)되고, AD·공속·ability haste(쿨다운 감소)·이동 속도까지 더한다. 챔피언 단일 최대 파워 스파이크.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune은 마나를 쓸 때마다 Muramana라는 강화 버전으로 천천히 변한다. 한 번 "stacked"(완전히 변환되면) 모든 평타와 마나를 쓰는 모든 ability에 보너스 피해를 더하며, 여기엔 R 미사일도 포함된다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 magic penetration(적 마법 저항의 일부를 무시)으로 Q와 R 피해를 키운다.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 적에게 가하는 첫 평타("energized auto")가 추가 피해와 평타 사거리 이상의 거리를 가진다. 치명타 확률이 Trinity 스탯과 잘 맞는다.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 공격 속도로 **Gatling Gun (E)** 의 지속 DPS와 패시브 on-hit true damage를 강화.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 다중 dash assassin 상대 (Zed, Akali, Talon): stasis가 burst 윈도우를 막고 W나 팀이 살릴 시간을 준다.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 탱커 2명 이상의 frontline 상대 (Sion, Ornn, Maokai): 강한 armor pen으로 평타와 R 미사일이 뚫린다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP burst 상대 (LeBlanc, Veigar, Syndra): 마법 보호막이 풀콤보를 한 번 막고 W로 빠질 수 있게 해준다.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 하드 CC(스턴·속박)가 3개 이상이고 체인 CC가 magic penetration보다 더 무거울 때 Sorcerer's에서 교체.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 적 팀 컴프가 CC 위주면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 마스터 순서:** **Q** 선마(poke와 waveclear), **E** 후마(DPS와 저항 깎기), **W**는 마지막(유틸리티). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Inspiration**에 **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. 보조는 **Sorcery**의 **Manaflow Band** + **Gathering Storm**, 또는 강한 poke 라인 상대로는 **Resolve**의 **Second Wind** + **Overgrowth**.

## 주요 매치업

- **Yasuo / Yone:** Wind Wall로 Q와 R 미사일을 막는다. 그들이 ability를 쓸 때까지 Q를 아끼고, Wind Wall이 쿨이 된 뒤에 R을 쓰며, 그들이 옆 미니언으로 E(dash)를 탈 수 있는 melee 사거리 안에서는 절대 trade(피해 교환)하지 마라.
- **Akali / Zed:** Diving threat(타워 밑까지 들어와 죽이는 챔피언). Trinity Force 다음 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 사라. 그들의 dash 체인이 아직 살아 있다면 trade 중에 W를 쓰지 마라.
- **Veigar:** R로 사거리를 맞추고, 그의 W(천천히 펼쳐져 너를 가두는 슬로우 우리)를 회피하며, E 링(통과하면 발동되는 스턴 링) 안에서 평타 trade를 피한다. 그의 Q 스택은 무한 scaling(킬할수록 영구 AP 증가)이니 25분 이전에 라인을 끝내라.
- **Twisted Fate:** roam 경쟁(둘 다 라인을 떠나 동료를 먼저 도우려 함). 6레벨 전에 Q로 웨이브를 밀고, 그의 R이 켜질 때 적 jungler를 ping하고, gold-card 타겟에서 W로 빠져나와라. 스턴을 face-tank하려 하지 말 것.
- **Galio:** 6레벨 전에 그가 melee로 따라잡지 못하는 미니언 last-hit으로 punish하라(Galio는 melee, 너는 ranged). 6레벨 후 그의 R은 글로벌 engage 도구다 — R 미사일이 충전되어 그의 도착을 peel(뒤의 캐리에게서 떼어내기) 할 수 있을 때만 팀과 그룹을 짜라.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + W 또는 Q + E 조합으로 last-hit 실수를 Q-AA-AA trade("AA" = 평타)로 처벌하고, W로 disengage 하거나 Flash가 빠진 적에게 follow-up할 수 있다.
- **6레벨:** 첫 **Missile Barrage (R)** 가 사이드 라인 압박(미드를 떠나 탑이나 봇을 위협)을 연다. R 충전과 W로 봇으로 roam해 1v1 trade에 미사일 두 발과 Big One을 떨구고, 다시 W로 라인에 복귀할 수 있다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성 (~12-14분):** Sheen이 모든 Q와 모든 R 미사일에 proc되어 poke가 킬 위협으로 바뀐다. 저체력 라이너에게 Q-AA-R-AA로 all-in(킬에 완전히 commit, 후퇴 없음)할 타이밍.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~18-22분):** Muramana가 모든 마나 소비 행동에 보너스 피해를 더해, 한타 피해가 stack 전 대비 거의 2배가 된다. 여기서 오브젝트 한타(Drake, Baron)를 강제하라.

## 흔한 실수

- **R을 쿨마다 waveclear에 난사.** R은 유한한 충전이다. 미니언에 다 비우면, 다음 한타에서 가장 중요한 순간에 burst가 0이다. 웨이브는 Q + 평타로 밀고, 오브젝트용으로 4발 이상 남겨라.
- **follow-up 없이 W를 공격적으로 사용.** W가 너의 유일한 탈출기다. 평타 한 번 더면 끝낼 수 있는 킬을 위해 dash로 들어가는 게 Corki가 죽는 전형적 패턴이다 — 남은 마나와 쿨다운으로 못 죽이면 commit하지 마라(완전히 들어가지 마라).
- **melee 사거리에서 평타 trade.** 가까이서 true damage 패시브가 매력적으로 보이지만, Corki의 체력 풀은 squishy(ADC처럼 낮고 약함)다. 적 라이너가 gap-close를 가지고 있을 때는 R 사거리에 머무르라.
- **CC 많은 팀 상대로 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes 구매.** 한타 내내 스턴당하면 magic penetration은 무용지물이다. CC 카운트가 낮을 때만 Sorcerer's, 그 외엔 Mercury's Treads로 swap.
- **R 충전이 빈 채로 roam.** 미사일 2발 없는 roam은 동전 던지기다. 강을 넘기 전에 8-12초 기다려 충전을 채워라. 그 짧은 지연이 킬과 웨이브 공짜 헌납의 차이다.

## 고급 팁

**Big One** 리듬을 추적하고 활용하라. 매 3번째 R 미사일("Big One")은 일반 두 발보다 훨씬 큰 피해를 입힌다. 한타 전에 충전된 미사일을 세라 — 다음이 Big One이면 우선순위 타겟에 아껴두고, 방금 썼다면 일반 미사일 두 발을 웨이브나 타워에 쏴서 Big One이 engage 타이밍에 다시 준비되게 하라. 무작정 R을 쏘는 플레이어는 Big One을 미니언에 낭비하고, 카운트를 추적하는 플레이어는 결정적인 순간 squishy(저체력 캐리)를 원샷한다.
