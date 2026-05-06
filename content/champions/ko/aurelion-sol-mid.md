---
title: "Aurelion Sol Mid Build & Guide — Patch 16.9"
slug: "aurelion-sol-mid"
language: "ko"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Aurelion Sol 미드 공략. Stardust 누적 빌드, 핵심 매치업, 파워 스파이크, 흔한 실수와 Q-W-Q 고급 팁까지 한 페이지로 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "피해 스킬은 적 챔피언에게서 Stardust를 모은다. Stardust는 모든 스킬의 범위·사거리·처형 임계치를 영구 증가시킨다 — 인내심 있게 쌓을수록 후반이 강해진다."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "전방 부채꼴로 채널링되는 용의 숨결. 버튼을 누르고 있으면 계속 피해를 입히고, 적 챔피언에게 1초가 꽉 찰 때마다 추가 burst와 Stardust를 얻는다. 주력 DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "지형을 가로지르는 지정 비행. 비행 중엔 Q에 쿨다운이 없다. 3초 안에 takedown이 잡히면 W 쿨의 일부를 환급받는다. Stardust로 최대 비행 거리가 늘어난다."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "블랙홀 지대를 깔아 적을 중심으로 끌어당기며 피해를 준다. 중심에 닿은 저체력 대상은 즉사 처형된다. Stardust로 범위와 처형 임계치가 같이 커진다."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "별을 지정 지역에 떨어뜨려 기절시키고 피해. Stardust 100 누적 후의 다음 R은 The Skies Descend로 강화 — 더 큰 범위, 기절 대신 띄우기, AoE 충격파."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "기동성 assassin 상대 (Zed, Fizz, Talon, Akali) — W가 쿨일 때 stasis가 비상 탈출 버튼"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "Q를 끊는 단일 대상 hard CC 상대 (Annie R, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "잘 빠지는 조합 상대: 슬로우로 Q 부채꼴 안에 적을 묶어둔다"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 첫 마법 저항 아이템을 사는 즉시 교체"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량을 누적하는 조합 상대 (Soraka mid, Vladimir, Yuumi + 힐 중심 봇 라인)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "긴 Q 채널과 W 추격으로 Stardust를 쌓아라. Liandry's Torment와 Rabadon's Deathcap이 완성되면 sustained burn이 squishy의 Magic Resist를 뚫고 지운다."
  weakness: "Q는 긴 채널이라 hard CC가 한 번 끊으면 (Annie R, Lissandra R, Twisted Fate stun) 피해가 절반으로 떨어진다. 기동성 assassin은 W가 돌기 전에 거리를 좁힌다."
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "dash 없는 immobile control mage"
      reason: "Aurelion Sol의 W 비행은 거리를 좁히면서 Q는 채널링을 이어간다. dash나 은신이 없는 대상은 Q의 sustained 피해를 그대로 받고, 비행 윈도우 동안 그들의 캐스트 사거리 밖에 머문다."
    - examples: ["galio", "sylas"]
      archetype: "근접 단거리 skirmisher mid"
      reason: "이쪽 all-in은 가까이 붙어야 한다. ASol은 평타 사거리 밖에서 W·Q로 카이팅하며, 상대가 Flash로 진입하면 E로 위치를 망가뜨리고 Stardust로 커진 R로 기절시킨다."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "다중 진입기를 가진 기동성 assassin"
      reason: "채널링 도중에 Aurelion Sol에게 dash로 붙어 Q를 끊고, Stardust 스케일링이 빛을 보기 전에 burst로 잘라낸다. W는 쿨이 너무 길어 안정적인 escape가 되지 않는다."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 보유 챔피언"
      reason: "그들의 바람 장벽이 Q 직선을 통째로 막는다. ASol의 핵심 데미지가 trade 중에 무력화되고, 끊긴 채널 뒤로 빠져나갈 수 없는 all-in이 들어온다."
---

## 개요

Aurelion Sol은 sustained 피해형 마법사로, 그의 키트는 두 가지 단순한 아이디어를 중심으로 돌아간다 — **Breath of Light (Q)** 를 가능한 한 오래 대상에게 채널링 유지하고(채널링 = 여러 초 동안 끊김 없이 시전되며, hard crowd control로 끊을 수 있는 스킬), 도망치는 적은 **Astral Flight (W)** 로 따라붙는다. 패시브 **Cosmic Creator** 는 적 챔피언에게 충분히 오래 피해를 줄 때마다 영구 자원인 **Stardust** 를 모으고, Stardust는 그의 모든 스킬의 범위·사거리·처형 임계치(이 HP 아래로 떨어지면 스킬이 즉사시키는 기준)를 영구적으로 키운다. 게임이 길어질수록 캐스트 한 방 한 방이 더 크고 위협적으로 변한다. 즉발 burst 콤보는 없다. 그는 burn(한꺼번에 들어오는 게 아니라 여러 초에 걸쳐 들어오는 누적 피해)이 적을 마무리할 때까지 적에게 붙어있어 이긴다.

미드에서의 운영은 비대칭이다. 초반 레벨에는 짧은 trade 윈도우(라인전에서의 짧은 데미지 교환, 풀 킬 시도가 아님)를 노린다 — 적 챔피언이 cs를 먹으러 다가올 때 **Q** 한 번, 한두 틱의 피해, 다시 뒤로. 6레벨부터는 **W** 가 무료 **Flash** 처럼 지형을 넘어가게 해준다. 정글러가 잡아주는 갱(정글러가 라인에 내려와 같이 적을 죽이는 것)에서 킬을 마무리하거나, 자기 타워로 날아가 disengage하는 데 쓴다. 후반에는 후방형 battlemage(원거리 포대가 아니라 중간 거리에서 스킬과 위치 잡기를 섞어 싸우는 마법사)로 변한다. 한타 가장자리, 즉 frontline(아군 탱커와 brusier — 팀의 데미지를 흡수해주는 단단한 근접 전사들) 뒤에 자리잡고, 그들의 몸을 관통해 상대 캐리에게 **Q** 를 채널링하며, **Singularity (E)** 를 깔아 가장자리에 걸린 적들을 끌어들이고, 캐리에게 기절이 들어가면 **Falling Star (R)** 로 마무리한다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (마법사용 기본 첫 반지: 약간의 AP, HP, 마나 회복) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Doran's의 마나 회복은 필수다 — 미니언 웨이브마다 Q를 난사한다.

**코어 아이템 (구매 순서):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Q가 적에게 닿는 동안 매초 최대 HP의 일정 비율을 태운다 (탱커일수록 더 아프고, 채널이 길수록 burn이 커짐). 단일 아이템 중 가장 강력한 핵심.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 마법 관통 신발: 모든 캐스트가 적 Magic Resist의 일정량을 무시해 squishy(체력·방어가 약한 ADC, 마법사 같은 대상)를 더 빠르게 지운다.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — **AP** (Ability Power, 마법 피해를 스케일링하는 스탯)를 추가로 30% 곱해준다. 모든 스킬이 더 세진다. 유리할 때 세 번째로 산다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 저체력 적에 대한 추가 마법 피해 (HP 임계치 패시브: 일정 HP% 아래에서만 발동되는 보너스). **R** 마무리 타이밍과 정확히 맞물린다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 기동성 assassin 상대 (Zed, Fizz, Talon). **W** 가 쿨일 때 stasis가 비상 탈출 버튼.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 hard CC 상대 (Annie R, Lissandra R, Twisted Fate gold card). 한 번 막힌 stun이 채널을 살린다.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — **Q** 가 닿는 모든 대상에 슬로우, 부채꼴 안에 적을 붙잡아둔다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 마법 저항을 산 적을 노린 강력한 마법 관통. 우선순위 타겟이 첫 MR 아이템을 사는 순간 교체.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 피해를 입힌 적에게 Grievous Wounds 적용 (받는 회복량을 절반으로 깎는 디버프). 힐량을 누적하는 조합 (Soraka mid, Vladimir, Yuumi + 힐 중심 봇 라인) 상대로.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 가 기본. 팀이 한타 진입 도구로 **R** 을 더 자주 원하면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (스킬 쿨다운을 줄여주는 신발)도 선택지.

**스킬 마스터 순서:** **Q** 선마(주력 데미지), **E** 후마(웨이브 클리어와 AoE 셋업), **W** 마지막. **R** 은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**: **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조는 **Inspiration** 의 **Biscuit Delivery** + **Cosmic Insight**, 또는 라인이 원거리 포크 위주(poke = HP를 천천히 깎는 저-커밋먼트 피해)면 **Resolve** 의 **Second Wind** + **Overgrowth**.

## 주요 매치업

- **Yasuo / Yone:** 바람 장벽이 **Q** 의 직선을 통째로 막는다. 그들이 장벽을 먼저 쓰게 만든 뒤 다시 들어가라. 장벽이 쿨일 때만 trade.
- **Zed / Talon:** **W** 가 돌기 전에 너를 끊어버린다. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 를 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** 보다 먼저 사라. **Flash** 와 **W** 를 동시에 쿨로 비워두지 마라.
- **Veigar:** 6레벨 전엔 호각 — 그는 W 우리 안에서 너를 stun하지만, 너는 **Q** 사거리로 우리 밖에서 포크를 박는다. 6 이후엔 가만히 서 있으면 E-W-Q-R 풀콤보로 한 방에 죽으니, 채널링 중엔 옆으로 계속 움직여라.
- **Annie:** 그녀의 stun은 잘 보이지 않는 패시브 카운터에 숨어 있다. 캐스트를 세라 — 4번째 스킬마다 stun이 준비된다. **Pyromania** 표식(초상화 아래의 주황 불꽃 아이콘)이 켜져 있으면 Tibbers 캐스트 사거리에 들어가지 마라.
- **Twisted Fate:** 누가 먼저 roam(자기 라인을 떠나 다른 라인을 도와주러 가는 것)하느냐의 싸움이다. 그의 **R** 은 맵 반대편으로 순간이동하지만, 너의 **W** 는 지형을 넘어 따라간다. 가능하면 미드 웨이브를 상대 타워 쪽으로 밀어두면, 그가 봇 갱을 떠난 사이 너는 공짜 CS를 먹고 격차가 벌어지지 않는다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **W** 만으로도 실수 한 번을 라인 끝까지 따라가 처벌할 수 있다 — 시야 없이 강 근처를 어슬렁대는 적을 응징.
- **6레벨:** 첫 **Falling Star** 가 즉시 발동되는 stun을 풀어준다. 정글러와 갱(정글러가 라인에 내려와 같이 적을 죽이는 것)을 셋업해라: **E** 풀 → **R** stun → 킬.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 완성 (~ 11-13분):** sustained **Q** 가 chip damage(작고 느린 피해)에서 진짜 위협으로 바뀐다. Liandry's가 완성되는 순간 Drake(팀 전체에 버프를 주는 강 안의 용 오브젝트) 스폰 타이밍에 한타를 강제하라.
- **Stardust 100 누적 (~ 18-22분):** **R** 이 **The Skies Descend** 로 진화 — 더 큰 범위, stun 대신 띄우기, AoE 충격파. 이게 너의 한타 승리 조건이다. 한타 밖에서 고립된 적 한 명을 자르는 pickoff에 낭비하지 말고 오브젝트용으로 아껴라.

## 흔한 실수

- **날지 않고 Q만 채널링.** **Q** 를 채널링하며 가만히 서 있으면 그냥 표적이다. 도망치는 대상과 같은 방향으로 **W** 를 써서 추가 마나 비용 없이 채널을 이어가면서 안전을 확보해라.
- **출구 없는 공격적 W.** **W** 는 너의 유일한 escape다. 셋업(정글러 인근, **R** 준비, **W** 를 빨리 돌릴 만한 쿨다운 감소 스탯) 없이 적 셋 위에 날아들면 데미지도 못 넣고 죽는다. **W** 는 commitment(쉽게 빠질 수 없는 all-in)지 무료 기동기가 아니다.
- **킬 대신 Stardust 욕심.** Stardust는 장기적으로 스킬을 키우지만, 상대 캐리가 30% HP에 한 방인 상태라면 그냥 끝내라. 죽은 캐리가 Stardust 5보다 가치 있다.
- **E가 중심으로 끌어당긴다는 걸 망각.** **E** 는 적을 지대 중앙으로 끌어당긴다 — 너의 팀 안쪽으로 끌어와야지 바깥으로 빼면 안 된다. 잘못 놓으면 상대 캐리를 너의 frontline 밖으로 빼주는 셈이 된다.
- **라인에서 Q로 푸시.** **Q** 는 푸시 속도가 느리고 마나만 태운다. **E** 로 캐스터 미니언을 정리하고 평타로 근접 미니언 라스트힛. **Q** 는 trade와 harass용으로 아껴라.

## 고급 팁

**Q-W-Q** 연계는 Aurelion Sol 플레이어를 갈라놓는 테크닉이다. 적 챔피언에게 **Q** 를 박은 직후 그가 도망치는 같은 방향으로 즉시 **W**. **W** 가 비행 중 Q의 채널 최대 시간을 없애주기 때문에 공중에서 끊기지 않고 계속 피해를 입히고 — 원래 대상이 죽고 사거리 안에 새로운 적이 나타나면 비행 중에 **Q** 를 다시 시전해 두 번째 인스턴스를 박을 수 있다. 실전에선 아주 멀리서 킬에 commit할 수 있다는 뜻이다. **W** 는 긴 거리(약 1.5 화면 너비)를 비행하고, 그 비행 중 너의 **Q** 는 앞쪽의 적을 계속 때리니 위협 범위는 **W** 사거리와 **Q** 사거리를 합친 길이가 된다. takedown이 잡히면 **W** 쿨다운의 일부가 환급되어 다음 한타에 거의 즉시 다시 진입할 수 있다.
