---
title: "Brand Mid Build & Guide — Patch 16.9"
slug: "brand-mid"
language: "ko"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Brand 미드 라인 완벽 공략. 시작 아이템과 burn-mage 빌드 경로, 주요 매치업 대처법, 파워 스파이크 타이밍, 자주 하는 실수, 그리고 한타를 뒤집는 double-blaze 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand의 스킬은 적에게 불을 붙인다 (4초 지속, 최대 3중첩). 챔피언에게 3중첩이 쌓이면 blaze가 불안정해져 작은 광역 폭발로 터지고, 폭발 범위 내 적에게 스킬 효과를 다시 적용한다."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "직선 skillshot으로 마법 피해를 입힌다. 대상이 이미 ablaze (불붙은) 상태라면 피해 대신 스턴을 건다 — 핵심 setup 도구다."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "짧은 선딜 후 발동하는 지연 광역 지대. ablaze 상태의 적은 +25% 피해를 받는다. 단일 스킬 기준 가장 높은 피해."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "지정 대상에게 폭발 피해를 주고 주변 적에게 튕긴다. 첫 대상이 ablaze 상태면 전파 반경이 두 배 — 웨이브 전체에 blaze를 가장 쉽게 깔 수 있는 도구."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "장거리 화염구가 챔피언과 미니언 사이에서 최대 5번 튕기며, ablaze 대상을 우선하고 명중 시 슬로우를 건다. 적이 뭉쳐 있을 때 한타에서 막대한 피해."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Akali, Diana, Fizz) — stasis로 dash가 없는 약점을 메운다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량을 누적하는 조합 상대 (Soraka, Vladimir, Dr. Mundo, 탑 Aatrox)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 첫 마법 저항 아이템을 사면 즉시 교체"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "여러 적에게 이미 blaze 중첩이 깔린 상태에서 뭉친 한타를 친다 — 그래야 R이 미니언이 아닌 챔피언 사이에서 튕긴다. frontline 뒤에 자리잡고 W 최대 사거리에서 발사한다."
  weakness: "dash 0개, 도주기 전무. diver가 frontline을 넘어오면 너와 원샷 사이에 Flash와 Zhonya's밖에 없다 — 그래서 상황별 방어 아이템은 선택이 아니라 필수다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Sorcery: Arcane Comet은 W나 E가 명중할 때마다 자동 발동되어 모든 trade에 무료 burst를 더한다. Manaflow Band는 W 난사용 마나, Transcendence는 ability haste를 40% 이상으로 끌어올리고, Scorch는 저체력 구간 blaze 틱 위에 더해진다."
    secondary_rationale: "보조 트리 Inspiration: Biscuit Delivery는 Brand의 6레벨 이전 마나 문제를 해결하고 Cosmic Insight는 Flash 쿨을 줄인다 — 자체 dash가 없는 챔피언이라 Flash가 dash를 피할 유일한 수단이다."
    secondary_alternative: "상대 팀에 저항이 낮은 squishy가 둘 이상이면 (예: Caitlyn + Senna + Ezreal), Inspiration 대신 Resolve로 바꿔 Second Wind (poke 버티기)와 Revitalize (blaze 흡혈 패시브 강화)로 R까지 살아남는다."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "dash 없는 immobile mage"
      reason: "이런 챔피언들은 farm 패턴상 한 자리에 서서 캐스팅하거나 스택을 쌓아야 한다: 웨이브 위에 W를 깔고 후딜 프레임에 Q로 stun, 움직이기 전에 풀 burn 콤보가 들어간다."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "단체 engage 탱커"
      reason: "그쪽 R이 우리 팀을 묶으면, 같은 R이 우리 팀 옆의 자기 팀까지 묶는다 — Brand의 R은 뭉친 챔피언 사이를 다 튕기며 그들의 engage를 너의 승리 조건으로 바꾼다."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "도주기가 약한 후방 squishy 서포트형"
      reason: "Pyroclasm은 ablaze 대상을 우선한다; frontline에 E 한 방으로 blaze가 퍼지고, R은 뭉친 적들 사이를 튕겨 결국 후방 squishy를 잡는다."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "다중 진입기를 가진 기동성 assassin"
      reason: "stun을 박기 전에 Q를 점프로 넘긴다. stun 없이는 자기 자신용 peel이 0이라, R이 첫 바운스도 마치기 전에 지운다."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "사거리가 더 긴 artillery mage"
      reason: "그쪽 poke 사거리가 너의 Q 사거리보다 길다. Brand는 거리를 좁힐 기동력이 없어서, 매 웨이브마다 체력만 깎이고 적 정글에게 공짜 dive 타겟이 된다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall과 지속 기동력을 가진 챔피언"
      reason: "Wind Wall이 Q와 R 발사체 경로를 막는다; 그 다음 W 지대를 dash로 넘는다. 방어용으로 Zhonya's 슬롯을 태워도 생존만 사지 라인 prio는 못 산다."
---

## 개요

Brand는 **AP burst mage**로, 단 하나의 메커닉 — 패시브 **Blaze** — 위에 모든 게 쌓여 있다. 그가 던지는 모든 스킬은 대상에게 4초간 불을 붙이고, 최대 3중첩까지 쌓인다. 3중첩에 도달하면 blaze가 불안정해지면서 작은 광역 폭발로 터지고, 폭발 범위에 들어온 모두에게 스킬 효과가 다시 적용된다. 게임에 옮기면 이렇게 된다 — 모든 능력이 다음 능력의 setup이고, 적에게 일단 불이 붙으면 너의 **Q (Sear)** 는 피해 스킬이 아니라 스턴이 된다. 이 챔프는 두 질문을 끊임없이 던진다 — *대상이 이미 ablaze인가?* *적들이 R 바운스가 이어질 만큼 뭉쳤나?* — 게임 플랜 전체가 이 두 답에서 출발한다.

미드 라인 운영은 단순하다: **W (Pillar of Flame)** 로 웨이브를 밀고, 상대 라이너가 미니언 너머로 맞을 만큼 다가올 때마다 **W → Q stun** 윈도우를 노리고, 웨이브가 상대 타워에 박힌 뒤엔 prio (라인 우선권 — 라인을 밀어놓고 먼저 맵에 영향력을 행사할 권리)를 들고 로밍한다. 6레벨부터 **R (Pyroclasm)** 은 적이 뭉쳐 있다는 *조건* 하에서 게임 내 최고 피해 ultimate 중 하나다 — 한 fight당 중거리 setup 한 번, 다시 시도할 dash 없음, 빗나가면 도주기 없음. 웨이브 뒤 포지셔닝은 의무다: Brand는 자체 기동력도, 보호막도, 회복도 없고, 유일한 방어 옵션은 Zhonya's Hourglass를 사고 Flash를 미리 조준하는 것뿐이다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Doran's Ring은 W 난사로 인한 마나 부족을 해결하고, Brand가 초반에 원하는 AP 스케일링을 준다.

**코어 아이템 (구매 순서):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand의 정체성 아이템. 패시브가 blaze 중첩 위에 체력 비례 burn을 더해 탱커와 체력 누적 팀에 대한 피해를 곱셈으로 늘린다. 마나, ability haste, AP가 모두 이 챔피언의 요구사항과 일치한다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — R 바운스로 가장 지우고 싶은 squishy 타겟에게 들어가는 고정 마법 관통.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst와, 저체력 적에게 발동해 마법 저항을 더 무시하는 패시브. 가장 체력 낮은 적을 쫓아가는 R 바운스와 완벽히 맞물린다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 스케일링 배수기 (보너스 AP +40%). 상대 팀이 이미 마법 저항을 쌓기 시작했는지에 따라 3번째 또는 4번째로 산다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver와 assassin 상대 (Zed, Akali, Diana, Fizz). dash 연계가 frontline (탱커와 bruiser 등 앞에서 피해를 흡수해 주는 라인, 그동안 너는 뒤에서 발사한다)을 넘었을 때 Brand가 가진 유일한 답이 stasis다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 예고 동작이 보이는 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate gold card). 한타 내내 너를 묶을 engage 스킬을 보호막이 막아 낸다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐량 누적 조합 상대 (Soraka mid, Vladimir, Dr. Mundo, 탑 Aatrox). Grievous Wounds 패시브가 힐을 절반으로 깎아 burn이 실제 킬로 이어지게 한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 첫 마법 저항 아이템을 사는 순간 바로. 800골드짜리 컴포넌트 하나로 너의 빌드 전체를 무력화하는 걸 막는다.

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. 팀이 오브젝트 리젠 타이밍에 R 쿨이 더 자주 돌기를 원한다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 도 허용된다.

**스킬 마스터 순서:** **W** 선마 (단일 기준 최고 피해, 주력 waveclear), **Q** 후마 (stun 피해 증가와 쿨다운 감소), **E** 막마. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조는 **Inspiration**의 **Biscuit Delivery** + **Cosmic Insight**.

## 주요 매치업

- **Yasuo / Yone:** Wind Wall로 너의 **Q** 발사체와 **R** 시작 부분을 막는다. 그쪽이 바람벽을 먼저 켤 때까지 **Q**를 아끼고, 후딜 프레임에 쓰려고 **W**를 들고 있고, 그들 상대로는 절대 **R**을 측면 진입용 (한 "flank"는 적 backline 뒤에서 측면 각도로 들어가는 것) 으로 쓰지 마라 — 아군이 먼저 engage한 뒤에 발사해야 바운스가 이미 바람벽 너머로 움직이고 있다.
- **Zed / Akali:** 다중 진입기를 가진 dive 위협 ("gap-closer"는 거리를 빠르게 좁히는 dash, blink, jump 등 모든 진입 수단). Liandry's 다음 Zhonya's Hourglass를 산다; 라인전에서 그들 상대로 **Flash**를 절대 공격적으로 쓰지 말고, 본인 발 밑에 **W**를 미리 깔아 점프해 들어왔을 때 stun을 건다.
- **Veigar:** 6레벨 이전엔 압박할 수 있는 immobile mage. **W**로 타워 밑까지 밀어 넣고, 라스트힛 치러 올라올 때 **E → Q stun** rotation을 노리고, 6레벨 (그의 케이지가 라인을 뒤집기 전) 전에 귀환한다.
- **Anivia:** 6레벨 이전엔 호각, 6레벨 이후엔 그쪽이 더 강하게 scaling 한다. 웨이브에 너무 붙어 있지 마라 — 그녀의 벽이 너와 미니언을 분리시켜 backline에서 긴 trade를 강요한다. **R** 쿨이 돌면 즉시 사이드 라인으로 로밍; 그녀는 따라올 기동력이 없다.
- **Twisted Fate:** 로밍 우선권 경쟁. 그가 너에게 노란 카드를 노리면, 닿기 전에 **Q**로 끊는다 (캐스팅 중인 챔피언을 stun하면 카드가 취소된다). 그게 아니라면 강과 삼거리 수풀에 와드를 깔아 **R** 동선을 추적; 그가 사이드 라인으로 ult하면 봇/탑에 핑 찍고 따라가지 말고 너의 웨이브를 밀어라.

## 파워 스파이크 및 승리 조건

- **2레벨 (W + Q):** 첫 스파이크. **W** 한 포인트와 시작 **Q** 조합으로 풀 **W → Q** stun 콤보가 갖춰진다. Pillar of Flame이 blaze 중첩을 묻히고, ablaze 상태의 적에게 Q를 박으면 stun. 이 윈도우가 first blood를 노리는 타이밍이다.
- **6레벨 (R 해금):** 첫 **Pyroclasm** 사용 가능. 강 게 (Scuttle) 또는 첫 드레이크에서 한타를 노린다 — 적 둘이 바운스 사거리 안에 들어오면, R 한 바운스로 squishy 체력의 약 50%를 깎는다.
- **Liandry's Torment 완성 (~12-14분):** 웨이브 컨트롤 ("wave control"은 누가 미니언 웨이브가 싸우는 위치를 결정하는가 — 너인지, 상대 라이너인지) 이 뒤집힌다. 체력 비례 burn이 뭉친 웨이브에 강하기 때문이다. 이 시점부터는 너가 미는 쪽이고 로밍하는 쪽이지, 타워 아래 묶이는 쪽이 아니다.
- **Rabadon's Deathcap 가동 (~24-28분):** R 풀 바운스 시퀀스가 마법 저항을 사지 않은 squishy를 원샷한다. 이 타이밍에 뭉친 오브젝트 한타를 강제하라 — Baron, Soul Drake, 후반 단체 교전.

## 흔한 실수

- **Setup 없이 Q를 맨 poke로 던지기.** ablaze 상태가 아닌 곳에 박는 **Q**는 그냥 느린 발사체다. 항상 먼저 바닥에 **W**를 깔거나 챔피언에게 전파될 미니언에 **E**를 묻혀 setup하라 — 차이는 1초짜리 stun이냐, 슬픈 헛쏨이냐다.
- **고립된 단일 대상에게 R을 쓰기.** **R**은 ablaze 대상을 우선해 챔피언 사이를 튕긴다. 사거리에 한 명만 있으면 바운스가 그 한 명에게 왔다 갔다 하면서 매 hop마다 큰 피해 감소가 붙는다. **R**은 뭉친 한타용으로, 또는 ablaze 상태인 적 둘을 나란히 처형하는 용도로 아껴라.
- **시야 없이 푸시하기.** Brand는 도주기가 0이다 (no dash, no blink, no shield). 적 정글에 와드도 없이 강을 넘어 푸시하는 건 초반에 갱을 먹여 주는 가장 빠른 방법이다. 모든 푸시 직전에 삼거리 수풀에 Stealth Ward 또는 Control Ward를 박아라.
- **패시브 "추가 피해"용 평타 치기.** 너의 평타는 Blaze와 상호작용하지 않는다. 평타 윈도우는 다음 **W** 자리로 걸어가는 데 써라, 저체력 미니언에 평타 한 대 더 박는 데 쓰지 마라.
- **불안정 폭발 타이밍 놓치기.** 챔피언에게 blaze 3중첩이 쌓이면 폭발까지 2초의 여유가 있다. 폭발 *전*에 **Q**로 stun을 걸면 그 챔피언을 폭발 범위에 가둬 두고 주변 모든 적에게 blaze가 다시 적용된다. 타이밍을 놓치면 단일 킬과 광역 wipe의 차이가 된다.

## 고급 팁

**double-blaze AOE wipe**를 연습하라. 적 둘이 나란히 서 있을 때 (뭉친 한타 또는 스택된 웨이브에서 흔하다), 순서대로: 둘 사이 바닥에 **W** → 둘 다 blaze 1중첩. 적 A에게 **E** → A에게 blaze 2중첩, B에게 전파되어 B에게 2중첩. A에게 **Q** → A에게 blaze 3중첩, A는 stun되고 불안정 폭발이 B에게도 닿아 B를 3중첩으로 만든다. 이제 **R**이 stun된 풀스택 두 명 사이를 튕기며 전체 rotation을 2-0 trade로 바꾼다. 이 시퀀스가 "괜찮은 Brand"와 게임을 캐리하는 Brand를 가르는 차이다.
