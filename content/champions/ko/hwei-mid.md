---
title: "Hwei Mid Build & Guide — Patch 16.9"
slug: "hwei-mid"
language: "ko"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Hwei 미드 가이드: 시작 아이템, 코어 burst 마법사 빌드, 룬 선택, 주요 매치업 대응법, 파워 스파이크 타이밍, 라인전 자주 하는 실수와 고급 콤보 팁까지 한 페이지로 정리."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "적 챔피언에게 피해를 입히면 표식이 남는다. 다른 종류의 두 번째 피해 스킬이 표식을 완성시켜 짧은 딜레이 후 광역 마법 피해로 폭발한다."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "피해 sub-spell 3종. QQ 화염구(% 최대 HP), QW 지연 번개(고립/이동불가 대상에 추가 피해), QE 둔화 용암 길."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "유틸 sub-spell 3종. WQ 아군 이속 라인, WW 지속 보호막 풀, WE 다음 3회 시전에 추가 피해와 마나 환급을 부여하는 강화 충전."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "CC sub-spell 3종. EQ 공포 부채꼴, EW 고정된 눈이 발사하는 유도 속박, EE 끌어당기며 둔화시키는 지연 턱."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "장거리 투사체로 처음 맞은 챔피언에게 부착되어 둔화 영역을 펼친 뒤 큰 마법 피해로 폭발한다."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "다중 진입기를 가진 assassin 상대 (Zed, Akali, Talon) — dash가 없는 약점을 stasis로 보완"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun)로 시전 전에 잠기는 경우"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo): Grievous Wounds로 회복 차단"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "팀이 마법 관통보다 R 가동률을 더 필요로 할 때의 대체 신발"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "오브젝트 교전에서 rooted 또는 slowed 대상에게 패시브 발동을 QW Severing Bolt로 결합하고, 그 위에 최대 사거리 R을 얹어 팀 후속타로 마무리한다."
  weakness: "dash 없음, 탈출기 없음. 모든 sub-spell에 시전 시간이 있어 CC 시퀀스를 끝내기 전에 거리를 좁히는 all-in (assassin, diver)이 들어오면 죽는다."
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
    primary_rationale: "주문 트리 Sorcery: EW 속박이나 QE 둔화는 후속 Q에서 Arcane Comet 발동을 보장해 무료 poke를 더한다. Manaflow Band로 Hwei의 큰 마나 소모를 받쳐주고, Transcendence로 9개 sub-spell의 쿨을 줄이며, Scorch로 킬을 마무리한다."
    secondary_rationale: "보조 트리 Inspiration: Biscuit Delivery로 끔찍한 초반 마나를 보완하고, Cosmic Insight로 소환사 주문 쿨을 줄여 한타에서 Flash를 더 자주 돌린다."
    secondary_alternative: "강한 poke 의 artillery (Xerath, Vel'Koz) 상대에는 Inspiration 대신 Resolve로 바꿔 Second Wind (poke vs 회복)와 Overgrowth (후반 추가 HP)로 받아칠 수 없는 trade를 버틴다."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Hwei의 EW 눈은 이동기 없는 대상에 락온해 유도 속박을 쏘고, 이어 확정 QW로 큰 피해를 박는다. dash가 없으면 시전 윈도우에서 빠져나가지 못한다."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei는 모든 레벨에서 사거리가 더 길고 QE 웅덩이로 계속 둔화시킨다. Flash를 쓰지 않고는 시전 위치까지 닿지 못한다."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "그들의 engage는 근거리와 긴 선딜이 필요하다. Hwei는 fog에서 EW를 미리 깔아 engage 순간 속박하고 빠져나와 trade를 리셋한다."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "그들의 dash와 blink가 Hwei의 시전 시간을 이긴다. E를 열고 올바른 sub-spell을 고르는 사이에, 이미 assassin이 사거리 안에서 풀 burst를 준비한다."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Q 사거리 밖에서 Hwei를 일방적으로 poke하고 압박 속에서 시전을 강요한다. Hwei는 탈출기도 거리 좁힐 수단도 없어 매 웨이브 체력이 깎인다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall이 Hwei의 모든 sub-spell 투사체(Q, EW, R)를 막는다. 둔화를 dash로 넘으며, 패시브 표식을 완성하기 전에 trade를 끝낸다."
---

## 개요

Hwei는 게임에서 가장 깊은 스킬 키트를 가진 장거리 artillery mage다. Q, W, E 각각이 세 개의 sub-spell 메뉴를 열어, 총 9번의 스킬 입력에 R까지 더해진다. 미드의 control mage와 같은 역할을 수행한다 — 적을 farm에서 떼어놓는 zoning, 사거리에서 HP를 깎는 poke, CC로 묶기, 처진 적을 snipe — 하지만 단순함을 포기하는 대신 적응력을 얻는다. 매 웨이브마다 상황에 따라 피해, 유틸, CC 중 무엇을 쓸지 고른다. Hwei는 약하고 이동기가 없다: 피해를 받아내는 frontline (팀의 탱커나 브루저) 뒤에 자리잡는 것이 필수다.

게임 플랜은 두 단계다. 먼저 피해 sub-spell로 표식을 찍어 패시브 **Signature of the Visionary**를 시동시키고, 다른 종류의 두 번째 피해 시전으로 표식을 완성시켜 광역 마법 피해 보너스를 추가한다. 라인에서 가장 깔끔한 시작은 EW (속박을 거는 유도 눈) 뒤에 QW (Severing Bolt — rooted 또는 이동불가 대상에 큰 보너스 피해를 입힌다)다. 라인 밖에서는 컨트롤로 무게가 옮겨간다: WQ로 아군 이속, WW로 보호막 풀, EE 턱으로 뭉친 적팀을 자기 광역 안으로 끌어당긴다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. 마나 sustain이 결정적이다 — Hwei의 sub-spell은 마나를 빠르게 태우고, Doran's Ring의 마나 회복이 Luden's Companion으로 가는 첫 ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** 완성 전까지 라인을 유지하는 가장 저렴한 방법이다.

**코어 아이템 (순서):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst 스파이크, 끊임없는 sub-spell 로테이션을 위한 마나 sustain, 모든 sub-spell의 쿨을 줄이는 ability haste.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. 패시브 표식 폭발 하나하나가 관통의 이득을 보고, 보통 squishy 대상을 노린다.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 비율 마법 관통. 우선순위 적이 마법 저항 아이템 한 장을 쥐는 순간 세 번째 아이템으로 사라 — Hwei는 곱연산 AP에 매우 강하게 스케일링하므로 피해는 반드시 통해야 한다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — AP가 가장 높은 슬롯. +35% AP 곱연산이 모든 sub-spell과 패시브 폭발을 동등하게 키운다.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — HP 임계값 패시브 (적이 일정 체력 이하일 때 발동되는 아이템 패시브, 여기선 35%)가 R 폭발 피해와 맞물려 추가 burst를 낸다.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 다중 진입기 assassin 상대 (Zed, Akali, Talon). dash가 없는 Hwei에게 stasis가 모자란 시간을 사준다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC (Ahri charm, Lissandra R, Twisted Fate stun) 상대. 보호막이 sub-spell 시전을 끊을 lock을 막는다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복 누적 조합 상대 (미드 Soraka, Vladimir, 탑 Dr. Mundo). Grievous Wounds가 그들이 의존하는 회복을 끊는다.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 팀이 관통보다 R 가동률을 더 필요로 할 때 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**의 대체.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 팀이 마무리 도구로서 R을 더 자주 필요로 한다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**로 바꾼다.

**스킬 순서:** **Q** 우선 마스터 (피해 sub-spell, 대부분의 킬이 여기서 나온다), **E** 두 번째 (CC sub-spell), **W** 마지막. **R**에 6, 11, 16레벨에 한 점씩.

**룬:** 주문 트리 **Sorcery**에 **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 트리 **Inspiration**에 **Biscuit Delivery**와 **Cosmic Insight**. 무거운 poke 매치업에선 보조를 **Resolve** (Second Wind + Overgrowth)로 바꾼다.

## 주요 매치업

- **Yasuo / Yone:** Wind Wall이 모든 sub-spell 투사체 (Q, EW, R)를 막는다. 그들이 스킬을 쓰기 전까지 E와 W를 아껴라; 바람벽이 펼쳐진 상태에서 절대 face-cast로 QQ 화염구를 박지 마라.
- **Zed / Akali:** 다이브 위협 (타워 샷을 받으면서도 타워 아래의 너에게 뛰어들어 죽이는 챔피언). Hwei의 시전 시간을 이긴다. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** 다음 두 번째 아이템으로 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 사라. 막타를 치러 가기 전 fog에서 EW를 미리 깔고, 절대 face-up으로 가지 마라.
- **Orianna:** 라인전은 호각이지만 한타로 갈수록 그녀에게 유리하게 스케일링한다. 라인에선 QQ + 패시브 발동으로 그녀를 poke하지만, 뭉친 한타에선 R Shockwave가 답을 낸다. 후반 포지션에선 팀과 거리를 두어 그녀의 R이 너와 캐리를 동시에 잡지 못하게 하라.
- **Twisted Fate:** roam 우선순위 경쟁. 황금 카드 stun과 글로벌 R을 가진다. 강과 삼거리 부쉬에 와드를 박아 그의 ulti를 추적하라. 그가 너에게 황금 카드를 뽑으면, 거리를 좁히기 전에 EW로 속박하라.
- **Veigar:** 라인전 호각-유리. 그의 E 우리가 진짜 위협 (안에 들어가면 stun). poke할 때는 우리 반경 밖에 서라; 실수로 자기 root를 밟으면 QW Severing Bolt로 강하게 응징할 수 있다.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q (Disaster) 1포인트와 시작 E로 피해 sub-spell 하나와 CC sub-spell 하나가 있다. 적 정글러가 근처에 없다면 EW 속박에서 QW Severing Bolt로 이어지는 진짜 all-in (트레이드가 아니라 끝까지 가는 풀 커밋 교전) 윈도우다.
- **6레벨:** 첫 **Spiraling Despair**가 오브젝트 컨트롤을 연다. R은 처음 맞은 챔피언에게 부착되어 둔화 영역을 펼치므로, 자신의 정글러가 Scuttle Crab 교전을 잡도록 세팅하기에 완벽하다.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 완성 (~ 13-15분):** 웨이브 컨트롤이 뒤집힌다. Luden's의 마나 sustain 덕에 QQ + QE 한 로테이션으로 어떤 웨이브든 밀고, 로밍이나 봇 다이브로 풀린다.
- **3아이템 스파이크 (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff 온라인, ~ 27-30분):** 패시브가 발동된 콤보 피해가 적이 첫 번째로 산 MR 아이템을 우회한다. 자기 frontline이 살아 있는 동안 오브젝트 교전을 강제하라.

## 흔한 실수

- **셋업 없이 쿨마다 Q 난사.** 항상 E (CC sub-spell)로 시작하거나 아군이 이미 둔화/속박시킨 대상을 노려라. 중립에서 맨몸으로 던지는 QQ는 dash 가진 누구든 반응으로 피하고, 마나만 비운다.
- **압박 속에서 잘못된 sub-spell 선택.** 메뉴 키를 누르는 순간 sub-spell은 확정된다 — 취소는 없다. 랭크에서 Hwei를 굴리기 전에 사용자 게임이나 일반 게임에서 올바른 마무리 선택을 연습하라: 고립된 대상엔 QW, 웨이브 클리어엔 QE, 저체력 대상의 chip damage엔 QQ.
- **패시브 표식이 서로 다른 두 스킬을 요구한다는 사실 잊기.** QQ를 두 번 연속으로 시전해도 패시브가 터지지 않는다. 표식은 다른 sub-spell의 두 번째 피해 시전이 명중해야만 발동된다 — 보통 QQ 후 QW, 또는 EW 속박 후 QW Severing Bolt.
- **R을 셋업 도구가 아닌 데미지 마무리로 쓰기.** Spiraling Despair의 핵심 가치는 후속타를 위한 둔화 영역이지 폭발 피해가 아니다. 먼저 시전해 적을 팀 콤보에 묶어두고, 그 위에 자기 sub-spell을 얹어라.
- **peel 없이 한타에서 최대 사거리에 서기.** Hwei는 dash가 없다. 최대 투사체 사거리는 너를 팀의 보호 밖으로 내보내고, 측면에서 들어온 assassin 한 명이 너를 지운다. peeler (다이버로부터 너를 보호해주는 서포터의 스킬)가 개입할 수 있도록 두 번째로 멀리 떨어진 위치에 서라.

## 고급 팁

WE Stirring Lights를 써서 dead time을 burst (1-2초에 집중되는 큰 피해)로 바꿔라. 한타에 들어가기 전 미리 시전한다 — 다음 세 번의 스킬이나 평타에 강화 충전이 부여되어 각각 추가 마법 피해를 입히고 마나를 환급한다. 최적의 흐름은 WE → EW 눈 → QW Severing Bolt → 속박된 대상에 평타다. 체인의 모든 시전이 충전을 하나씩 소모하고, 마나 환급 덕에 두 번째 대상에 R로 즉시 이어가도 OOM (out-of-mana, 한타 중에 마나가 떨어지는 것)에 빠지지 않는다.
