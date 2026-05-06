---
title: "Cassiopeia Mid Build & Guide — Patch 16.9"
slug: "cassiopeia-mid"
language: "ko"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Cassiopeia 미드 공략. 시작 아이템부터 핵심 빌드 순서, Sorcery 룬 구성과 이유, 주요 매치업 대처법, 6레벨 R과 Liandry's Torment 파워 스파이크, 라인전 흔한 실수, 그리고 Miasma 발밑 캔슬 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Cassiopeia가 아이템·룬·자신의 Q에서 받는 모든 추가 Move Speed 보너스를 증폭하는 패시브. 신발 효율이 다른 mage보다 더 잘 붙는다."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "지정 지역 AOE. 짧은 딜레이 후 폭발하며 Poison을 부여. 적 챔피언을 맞히면 추격이나 kite용 Move Speed 버스트를 얻는다."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "독 구름 벽. 안에 들어온 적은 슬로우와 grounded 상태가 되어 dash·blink·이동기를 사용할 수 없다. 핵심 anti-mobility 도구."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "쿨다운 0.75초의 저쿨 스킬. Poisoned 대상에게 추가 피해를 입히고 Cassiopeia를 회복시킨다. takedown 시 마나 환급. 절대 멈추지 않는 메인 DPS 버튼."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "전방 넓은 원뿔. 그녀를 바라보는 적은 약 1.5초 stun, 등 돌린 적은 슬로우만. 풀 stun을 노리려면 정면으로 박아야 한다."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "burst assassin 상대 (Zed, Talon, Akali): 2.5초 stasis로 E 쿨 복귀와 아군 peel 시간을 번다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "E를 끊어버리는 단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds로 lifesteal과 regen 차단"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선 타겟이 마법 저항 아이템을 사면 Shadowflame 슬롯과 교체"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "걸어들어오는 melee 조합 상대: E 한 대마다 슬로우가 갱신되어 backline peel + W ground 효과까지 더해진다"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "W로 dash를 봉쇄한 채 poisoned 대상에게 E를 난사해 Liandry's Torment 피해를 누적한다. 6레벨에 정면 R을 박아 lane prio를 킬로 전환한 뒤, 전열에 가까운 battlemage로 scaling한다."
  weakness: "사거리 700에 dash·blink·이동기 전무. 장사정 artillery mage에게 일방적으로 poke당하고, 6레벨 전 hard CC gank가 들어오면 scaling 전에 라인이 끝난다. E가 빗나가면 마나 고갈."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery가 Domination/Precision보다 우위. Stormraider's가 키트에 없는 Move Speed 버스트(빠른 3 proc)를 채워준다. Manaflow는 40 마나 E 난사를 지탱하고, Transcendence는 Ability Haste(쿨다운 단축)를 올리며, Gathering Storm은 후반에 Electrocute 버스트를 추월한다."
    secondary_rationale: "보조 Inspiration: Biscuit Delivery가 Liandry's Torment 완성 전 거친 라인전의 마나·HP를 메우고, Cosmic Insight로 한타에서 Flash와 아이템 액티브 쿨이 더 자주 돌아온다."
    secondary_alternative: "강한 poke나 burst 상대(Xerath, Syndra, Zed)에는 Inspiration 대신 Resolve로 교체. Second Wind(원거리 harass에 대한 regen)와 Bone Plating(올인 콤보 첫 3타 흡수)을 든다."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "dash 의존형 미드 라이너"
      reason: "Miasma 안에 들어오는 순간 grounded — dash, blink, 이동기가 전부 봉쇄된다. 도주 수단을 지워버리는 챔피언 앞에서 그들의 키트는 그대로 무너진다."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "탈출기 없는 immobile mage"
      reason: "Cassiopeia는 정지 캐스팅이 필요한 챔피언과의 장기 trade에서 우위를 가진다. E(쿨 0.75초)는 poisoned 대상에게 그들의 풀 로테이션보다 더 큰 피해를 주고, 발 밑에 깔리는 W를 피할 방법이 없다."
    - examples: ["renekton", "sett"]
      archetype: "달라붙어야 하는 melee 브루저"
      reason: "긴 dash가 없어 700 거리를 W와 Q poison을 뚫고 걸어와야 한다. Twin Fang이 매 trade마다 풀 HP로 회복시켜준다."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "장사정 artillery mage"
      reason: "Cassiopeia의 Q 사거리 850 밖에서 일방적으로 poke한다. dash가 없어 거리를 좁히지 못하고 매 웨이브마다 체력만 깎인다. 안전하게 farm을 못 챙기면 power curve가 죽는다."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "글로벌·맵 전체 roamer"
      reason: "Cassiopeia는 미드에 묶여 있다(빠른 roam 불가). 상대는 궁으로 사이드와 드래곤을 뒤집고, 1대1은 이겨도 macro(맵 전역의 오브젝트 교환)는 진다."
    - examples: ["lissandra", "syndra"]
      archetype: "체인-락 CC 보유 burst mage"
      reason: "W로 ground 걸기 전에 Cassiopeia를 먼저 묶고 풀콤보로 녹인다. Lissandra R은 즉발 지정형 — Banshee's Veil이 도움은 되지만 정글러 호응까지 붙은 6초짜리 stun chain은 못 살린다."
---

## 개요

Cassiopeia는 약 700 사거리에서 싸우는 battlemage(후방이 아니라 중거리에서 싸우는 mage)다 — 일반 평타 거리 바로 바깥. 그녀에게 닿으려면 dash가 필요한 거의 모든 챔피언을 상대로 장기 trade(라인전 데미지 교환)에서 우위를 가진다. **Twin Fang (E)** 의 쿨다운은 0.75초로, 모든 미드 라이너 중 가장 짧다 — **Noxious Blast (Q)** 가 대상에게 poison을 묻히는 순간 그녀는 자신을 회복시키는 동시에 끊임없이 피해를 주는 데미지 흐름이 된다. **Miasma (W)** 가 그녀의 시그니처: 구름 안에 들어온 적은 *grounded* 상태가 되어, 밖으로 나갈 때까지 dash, blink, 이동기가 전부 작동을 멈춘다. dash로 들어왔다 나갔다 하는 데 키트가 묶여 있는 기동성 assassin(Yasuo, Akali, Zed 같은)을 상대로 픽하면 그들의 도구상자를 통째로 빼앗는 셈이다.

게임 플랜은 말로 하면 짧지만 실행은 느리다 — **Q**로 웨이브(미니언 줄)에 poison을 묻히고, **E**를 반복 시전해 정리하면서 harass하고, dash 기반 적이 engage(교전 개시)하는 순간 **W**를 깔고, 6레벨에 **R**을 정면으로 박는다. 이 원뿔은 자신을 바라보는 적만 stun시키고 나머지는 슬로우만 입힌다. 그녀에게는 dash도, blink도, Flash 같은 이동기도 없다. 그래서 매 플레이의 비용이 포지셔닝이다. 한 발만 너무 앞서 나가도 키트 전체가 한 번의 CC chain(연속된 stun과 root)에 무너진다. **CC** = "crowd control", 당신을 멈추는 모든 효과(stun, root, slow, silence).

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Cassiopeia는 마나 소모가 심하다(매 E가 마나를 먹고, 자주 시전한다). Doran's의 마나 회복이 E 난사에 정확히 들어맞는다.

**코어 아이템 (구매 순서):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 완성 아이템. burn 패시브(한 번에 몰아서가 아니라 타격 후 몇 초에 걸쳐 퍼지는 피해)는 E가 닿는 모든 poisoned 대상에 누적되며, Cassiopeia에서는 사실상 모든 cast다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(적의 Magic Resist 일부를 무시하여 스킬이 더 강하게 들어가는 효과). 패시브 Serpentine Grace가 신발의 Move Speed까지 증폭한다.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 게임 내 가장 큰 AP(Ability Power, 마법 피해를 scaling하는 스탯) 배수기. 긴 한타에서 30번 넘게 쏘는 E의 cast당 피해를 폭증시킨다.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 적 체력 35% 미만에서 더 강해지는 마법 관통(HP-threshold passive: 체력이 일정 % 아래로 떨어지면 켜지는 아이템 효과). 가장 먼저 잘라야 할 후방 carry(ADC와 mage 같은 squishy damage dealer)의 마무리에 정확히 맞는다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — burst assassin 상대(Zed, Talon, Akali — 1-2초에 큰 피해를 몰아치는 챔피언). 2.5초 stasis 액티브(무적이 되지만 이동·시전 불가)가 **E** 쿨 복귀와 아군 peel(적을 떼어내는 행위) 시간을 벌어준다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — E를 끊어버리는 단일 대상 마법 CC 상대(Ahri charm, Lissandra R, Twisted Fate gold card stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합 상대(Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds(적의 회복량을 약 절반으로 줄이는 디버프)로 lifesteal(가한 피해의 일부를 HP로 흡수)과 regen을 차단한다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선 타겟(팀이 가장 먼저 잡아야 할 적, 보통 상대 메인 carry)이 마법 저항 아이템을 사는 순간 Shadowflame 슬롯과 교체.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 걸어 들어오는 melee 조합 상대. E 한 대마다 슬로우가 갱신되어 W의 ground 위에 backline peel(보호)이 더해진다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**(Ability Haste를 줘 스킬 쿨을 단축하는 신발)는 팀을 위해 dash 봉쇄 uptime을 더 늘리고 싶을 때 선택지다.

**스킬 마스터 순서:** **E** 선마(메인 DPS 버튼), **Q** 후마(poison + Move Speed), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Sorcery**에 키스톤 **Stormraider's Surge**(키스톤은 트리 최상단의 가장 영향력 있는 룬, "proc"한다는 건 룬 효과를 발동시킨다는 뜻 — Stormraider's는 빠른 스킬 3타 후 발동), **Manaflow Band**, **Transcendence**, **Gathering Storm**. 보조는 **Inspiration**의 **Biscuit Delivery** + **Cosmic Insight**, 또는 강한 poke(체력을 갉아먹는 장사정 chip damage) 상대로는 **Resolve**의 **Second Wind** + **Bone Plating**.

## 주요 매치업

- **Yasuo / Yone:** 키트가 dash 투성이. 그들의 3번째 Q는 띄우는 dash다 — 첫 번째로 점프해 들어올 때 발 밑에 **W**를 깐다. 근접 거리에서 이동기 없이 묶이고, 그 자리에서 **E** 난사가 이긴다. **R**은 그들의 궁에 맞춰 정면으로 박는다.
- **Zed:** Threat champion. 그가 lead를 잡으면 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 두 번째 완성 아이템으로 산다. 그가 궁을 쓰는 순간(당신을 표시하고 그림자에 텔레포트) 자기 발 밑에 **W**를 깐다. 뒤에 떨어지면 그림자 교환 텔레포트가 W의 ground에 막혀 도망치지 못한다.
- **Xerath:** 어려운 매치업. **Q** 사거리 밖에서 poke한다(반격 가능 거리 바깥에서 체력을 깎는다). 타워 아래에서 CS(creep score: 미니언을 잡고 얻는 골드)를 일부 포기하고 6레벨에 봇 roam(라인을 떠나 아군을 도우러 가는 행위)을 노린다 — 라인에서 그를 상대로 싸우면 체력만 빠진다.
- **Akali:** 6레벨 이전엔 poisoned 대상 위 E 난사로 장기 trade에서 이긴다. 6 이후 그녀의 smoke shroud(W)가 모습을 가려 E의 타겟을 끊어버린다. 측면에 ward를 깔고 **R**이 없을 땐 너무 앞으로 밀지 마라.
- **Twisted Fate:** 라인은 이겨도 맵은 진다. 그가 gold card로 stun 걸고 봇에 궁 쓰면, 당신이 영향을 못 미치는 cross-map fight(당신이 서 있는 곳에서 멀리 발생하는 킬)로 게임이 흘러간다. 웨이브를 쿨마다 밀고, **R**이 돌아올 때마다 봇에 핑을 쳐라.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q**와 **E** 한 포인트로 첫 poison-then-tap 루프가 갖춰진다. 상대 웨이브(미니언 줄)가 자기 것보다 클 때 앞으로 걸어가 trade를 강요한다.
- **6레벨:** **Petrifying Gaze (R)** 해금. 근거리에서 정면으로 박은 **R**은 약 1.5초 stun, **Q-W-E-E-E** 풀콤보를 이어붙이기 충분하다. 웨이브 바운스(미니언 줄이 멈췄다가 자기 쪽으로 다시 밀려오는 순간)에 맞춰 교전을 강제한다.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 완성 (~11-13분):** E 난사가 타격 피해 위에 burn(시간이 지나며 들어오는 피해)을 얹는다. 웨이브 미는 속도가 두 배가 되며 상대 미드의 roam 타이밍을 압박한다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** cast당 E 피해가 폭증한다(이 아이템에서 큰 파워를 얻는다). 오브젝트(Drake, Baron, 타워) 주변 미드 한타에서 중심을 잡아라 — 후반 Cassiopeia는 다른 mage보다 더 앞에 서서 거의 두 번째 frontline처럼 싸운다.

## 흔한 실수

- **poison 없는 대상에 E 던지기.** **Twin Fang**은 깨끗한 대상에는 평범한 마법 피해지만 poisoned 대상에는 추가 피해가 들어간다. 항상 **Q**(또는 W) 먼저, 그 다음 E 난사 — 절대 거꾸로가 아니다.
- **완벽한 engage를 위해 W 묶어두기.** **Miasma**는 방어 도구이기도 하다. Yasuo가 W(투사체를 막는 바람벽)를 시전하거나 Akali가 궁을 쓰는 순간, 자기 발 밑에 **W**를 깐다. 팀이 따라오지 않더라도 ground가 그들의 이동기를 그 자리에서 끊는다.
- **R 무작정 박기.** **Petrifying Gaze**는 자신을 바라보는 적만 stun시킨다. 측면이나 등 뒤에서 박으면 슬로우만 들어가고 쿨이 낭비된다. 교전의 정면까지 걸어 들어간 뒤, 돌아서 R을 박는다.
- **시야 없이 강을 넘어 푸시하기.** Cassiopeia에겐 escape가 없다. 강 부쉬에 ward(맵에 놓는 시야 트링킷)가 없는 상태에서 hard CC(긴 stun이나 root, slow 같은 soft CC와 대비) 보유 정글러의 매복(*gank*)이 한 번 들어오면 라인이 끝난다.
- **초반 5분 마나 무시.** E는 레벨에 상관없이 40 마나 고정이다. Manaflow Band가 켜지기 전에 미니언에 반복 시전하면 두 웨이브 만에 마나바가 비고, all-in(당신을 죽이려는 풀 커밋)에 무방비로 노출된다.

## 고급 팁

dash가 자신을 때린 그 순간 **W (Miasma)** 를 *자기 발 밑에* 까는 연습을 해라 — 앞에 까는 게 아니다. 구름이 떨어지는 순간 ground가 적용된다 — Yasuo, Yone, Akali가 근접에서 engage하면 그들이 정확히 구름이 생성된 위치에 서 있게 되어, 즉시 두 번째 dash를 잃는다. 대부분의 Cassiopeia 유저는 여전히 W를 poke 스킬처럼 앞에 깔며, 대부분의 assassin all-in 시도를 그 자리에서 끝내는 방어적 활용을 놓치고 있다.
