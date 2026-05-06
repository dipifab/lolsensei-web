---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "ko"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Aatrox 탑 완벽 공략. bruiser 빌드 경로, Q 바깥날 knock-up 메커닉, Precision 룬 선택, 주요 매치업 대처법, 파워 스파이크 활용, 라인전 실수와 해결책, Q animation cancel 같은 고급 팁까지 한 페이지에 정리한 실전 가이드."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "주기적으로 다음 평타가 대상의 최대 체력 비례 추가 마법 피해를 입히고 Aatrox를 회복시킨다. 초상화 옆 표식으로 발동 타이밍을 확인한다."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "대검을 휘두르는 3연속 시전, 각 시전마다 모양이 다르다. 바깥날에 적중하면 짧게 knock-up(공중에 띄움)에 25% 추가 피해. Aatrox의 주력 딜원."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "사슬 투사체로 첫 적중 대상에게 슬로우. 챔피언이나 대형 정글 몬스터가 정해진 시간 안에 충격 지대를 벗어나지 못하면 중심으로 끌려가며 같은 피해를 다시 입는다."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: 챔피언에게 입힌 피해의 일부를 회복(lifesteal). Active: 짧은 dash, Q 선딜 도중에도 사용 가능해 바깥날 정렬이나 kite에 쓴다."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "악마 형태로 변신: AD 증가, 시간이 갈수록 감소하는 이동속도, 자가 회복량 증폭. 주변 적 미니언에게 공포를 건다. 처치 관여마다 지속시간이 연장된다."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀 마법 피해 비중이 높거나 CC 연계가 강할 때 Plated Steelcaps에서 교체 (예: Lissandra, Sett, Malphite ult)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP burst 상대 (Syndra, Vex, Fizz mid 스왑): spell shield가 큰 마법 한 방을 막아 engage를 살린다"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "물리 AD 딜러 둘 이상 조합 (Yasuo + Caitlyn): burst를 천천히 흐르는 도트 피해로 바꿔 E lifesteal로 회복할 시간을 만든다"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "engage를 한 방에 끊는 단일 대상 하드 CC 상대 (Morgana Q, Blitzcrank hook, Lissandra R)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "AP 탑 라이너(Vladimir, Rumble)에게 체력이 깎이고 백 전에 MR이 필요하면 Eclipse를 마무리하기 전에 컴포넌트로 먼저 구매"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Q 바깥날을 맞혀 knock-up, W로 묶어 위치 고정, E로 위치를 리셋한다. Eclipse + Black Cleaver 우위를 사이드 라인 1대1 승리로 환산한다."
  weakness: "모든 딜이 Q 타이밍에 달려 있다. 바깥날을 놓치면 trade를 진다. 하드 CC, 장거리 kiter, true damage 듀얼리스트(Fiora, Camille)는 sustain을 통째로 무너뜨린다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "정밀 트리 Precision: Conqueror는 trade가 길어질수록 Aatrox의 누적 피해를 키우고 자가 회복도 끌어올린다. Triumph로 처치 관여마다 체력 보너스, Legend: Alacrity로 Q 사이 평타를 더 자주 넣고, Last Stand로 저체력 상태에서 추가 피해를 얻는다."
    secondary_rationale: "보조 트리 Resolve: Second Wind + Revitalize 조합으로 라인전 poke에 깎인 체력을 자연스럽게 회복하고 보호막·자가 회복 효율을 함께 끌어올린다."
    secondary_alternative: "라인이 조용할 것 같으면 Resolve 대신 Inspiration의 Magical Footwear(12분 무료 신발)와 Cosmic Insight(추가 ability haste)로 바꿔 템포를 가속한다."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "engage 수단 없는 immobile 근접 fighter"
      reason: "Aatrox는 6레벨 전 바깥날 Q로 trade를 이긴다. W 사슬이 충분히 오래 묶어두기 때문에 상대는 패시브 스택을 안전하게 쌓지도, all-in에서 도망치지도 못한다."
    - examples: ["ryze", "vladimir"]
      archetype: "딜을 넣으려면 들어와야 하는 단거리 메이지"
      reason: "풀 딜을 위해 melee 거리까지 발을 디뎌야 한다. Aatrox는 W 슬로우 + 바깥날 Q knock-up으로 disengage 전에 그 간극을 응징한다."
    - examples: ["kayle", "k-sante"]
      archetype: "초반이 약하고 후반에 강해지는 챔피언"
      reason: "Aatrox는 게임에서 가장 강한 라인전 곡선 중 하나를 가진다. 후반 핵심 아이템이 나오기 전에 죽이거나 XP를 끊어버릴 수 있다."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "true damage 듀얼리스트 + parry / 보호막"
      reason: "Fiora의 W는 Q knock-up을 parry로 막고, 그녀의 Vitals(Aatrox 몸에 표시되는 마커, 평타로 터뜨리면 true damage — 방어구와 마법 저항을 모두 무시하는 피해)는 drain tank 빌드를 우회한다. Camille의 E는 그 위에 또 true damage를 얹는다."
    - examples: ["quinn", "teemo"]
      archetype: "장거리 또는 은신 기반 kiter"
      reason: "Q 사거리 밖에 머물면서 blind나 vault(Quinn의 E 후퇴 dash)로 Aatrox의 선딜을 끊는다. E와 Flash를 둘 다 쓰지 않고는 거리를 좁힐 방법이 없다."
    - examples: ["malphite", "maokai"]
      archetype: "조준이 필요 없는 즉발 하드 CC 탱커"
      reason: "스턴과 속박이 point-and-click이라 회피할 투사체가 없다. Q 재시전을 애니메이션 도중에 끊어버리고, 한 번 묶이면 E lifesteal로 회복도 못 한다."
---

## 개요

Aatrox는 3연속 대검 휘두르기 **Q**를 중심으로 설계된 melee fighter(근접에서 싸우는 챔피언)다. 시전마다 모양이 다르고, 휘두름의 **바깥날** — 안쪽 영역이 아니라 — 에 적을 맞히면 두 가지 보너스가 붙는다: 짧은 **knock-up**(잠깐 공중에 띄워 행동을 막는 효과)과 25% 추가 피해. 스킬셋에는 슬로우 + 사슬 끌어당김 (**W**), 짧은 **dash** (**E**: 빠른 이동 한 번. Q 애니메이션 중에도 위치 조정용으로 쓸 수 있다), 그리고 악마 형태 변신 궁극기 (**R**: 긴 쿨다운, 강력한 버프)이 들어 있다. 분류는 **drain tank**: 진짜 탱커가 아니라, 방어구나 체력을 쌓는 대신 E의 **lifesteal**(가하는 피해의 일정 비율을 체력으로 돌려받는 능력)로 받은 피해를 회복하며 버티는 fighter다.

게임 플랜은 말로 하면 짧지만 손에 익히기는 까다롭다. 라인전에서는 **W**를 발동 준비 상태로 들고 접근해 슬로우로 상대를 묶은 다음, **Q**의 **바깥날**이 슬로우 걸린 적에 닿도록 휘두른다. **E**로 슬쩍 옆으로 미끄러져 두 번째와 세 번째 Q 시전 각도를 잡는다. 중반부터는 사이드 라인 1대1과 2대2 skirmish(메인 한타 바깥에서 두 명씩 붙는 소규모 교전)를 노린다. R이 켜지고 아이템이 한 칸이라도 나오면 Aatrox는 게임에서 가장 강한 **bruiser**(딜과 내구도를 동시에 가진 챔피언) 중 하나가 된다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's Shield의 체력 재생 패시브가 sustain(교전 중 자가 회복 능력)이 가장 약한 초반 레벨을 버티게 해준다.

**코어 아이템 (구매 순서):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 첫 아이템 스파이크(딜이 가장 크게 점프하는 순간). **AD**(Attack Damage, 평타와 Q 피해의 기반 스탯), **omnivamp**(평타뿐 아니라 모든 종류의 피해에 적용되는 lifesteal), **ability haste**(스킬 쿨다운을 줄여주는 스탯)를 챙겨준다. 패시브는 두 번째 적중에 발동하는데, Q1 + Q2로 자연스럽게 연결된다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 상대가 평타 위주로 피해를 줄 때 기본 신발. 길게 이어지는 trade(라인에서 주고받는 짧은 교전)에서 받는 평타 피해를 줄여준다.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Q 한 방마다 적의 **armor**(물리 피해를 깎는 스탯) 한 칸씩이 벗겨진다. 체력으로 생존력도 챙기고 ability haste로 한타에서 Q 회전을 더 자주 돌릴 수 있다.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 체력 + **lifeline shield**: 체력이 일정 임계값(약 30%) 아래로 떨어지면 자동 보호막이 발동된다. 그 짧은 창이 바로 E lifesteal로 다시 안전선까지 회복할 시간을 벌어주는 구간이다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 상대 팀의 마법 피해 비중이 높거나 **CC**(crowd control: 스턴, 속박, 넉백 등 행동 자체를 막는 효과) 연계가 강하면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**에서 교체. 예: Lissandra 속박, Sett 풀, Malphite 궁.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 **AP** burst 상대 (AP = ability power, 마법 피해의 기반 스탯; burst = 1-2초 안에 쏟아지는 고폭 피해). Lifeline 패시브가 큰 마법 한 방을 막아주는데, engage 도중(교전 시작점) 죽느냐, R이 들어갈 때까지 살아남느냐를 가르는 차이다.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 강한 물리(AD) 딜러 둘이 함께 있는 조합 상대 (예: Yasuo + Caitlyn). burst를 한 번에 들어오는 피해 대신 몇 초에 걸쳐 흐르는 **bleed**(시간 분산 피해)로 바꿔주기 때문에 E lifesteal이 그걸 회복할 여유가 생긴다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — engage를 한 방에 끊는 단일 대상 하드 CC 상대 (Morgana의 Q, Blitzcrank의 hook, Lissandra의 R). 일회용 spell shield가 묶임 스킬을 흡수해주기 때문에 최대 거리에서 회피하는 대신 commit(완전히 들어가기)할 수 있다.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — 초반 **MR**(Magic Resistance, 마법 피해를 줄여주는 스탯) 컴포넌트. Vladimir나 Rumble 같은 AP 탑 라이너가 라인을 이기고 있으면 ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse**를 마무리하기 전에 먼저 컴포넌트를 산다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 상대 팀에 CC 소스가 셋 이상이거나 마법 피해가 많으면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 바꾼다.

**스킬 마스터 순서:** **Q** 선마(유일한 딜원이다), **E** 후마(랭크당 lifesteal이 늘어나서 한타에서 dash를 더 자주 쓸 수 있다), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 룬은 게임 시작 전 "트리"에서 고르는 패시브 효과로, 트리마다 추구하는 스타일이 다르다. Aatrox는 주문 트리로 **Precision**(평타 위주의 지속 딜에 맞춘 트리)을 쓰고, 키스톤(트리의 핵심 룬)은 **Conqueror** — 교전이 길어질수록 피해가 누적되는 패시브 — 를 든다. 거기에 **Triumph**(처치 관여 시 작은 회복), **Legend: Alacrity**(Alacrity = 추가 공격 속도를 주는 스탯, Aatrox가 스킬 사이에 평타를 더 빠르게 박을 수 있게 해준다), **Last Stand**(저체력일 때 추가 피해)를 채운다. 보조 트리는 **Resolve**(내구도 트리)에 **Second Wind** + **Revitalize**로 라인전 sustain을 챙기거나, 라인이 조용할 것 같으면 **Inspiration**에 **Magical Footwear**(12분에 무료 신발)와 **Cosmic Insight**(추가 ability haste)를 든다.

## 주요 매치업

- **Fiora:** 가장 어려운 매치업. 그녀의 **W**는 parry(스킬을 짧게 막고 반격하는 보호막)로 Q knock-up을 무효화한다. parry를 유도해라 — Q1에 그걸 쓰게 만든 다음 Q3를 commit한다. 긴 trade는 피하고, Q1 + E로 짧게 들어갔다 빠지는 패턴을 반복하며, 그녀의 W가 쿨일 때만 Q3를 박는다.
- **Darius:** skill matchup(카운터 픽 여부와 무관하게 더 잘 플레이한 쪽이 이기는 매치업). 그의 **E** 풀 사거리 밖에 있어라, 특히 Aatrox 몸에 출혈 스택이 셋 이상 쌓였을 때(그의 패시브가 스택당 매초 체력을 깎는다). 그의 Q가 쿨일 때 바깥날 Q를 박고, R 상태에서는 아이템 한 칸이라도 앞서 있으면 trade가 유리하다.
- **Renekton:** 그의 W 스턴을 존중하면 6레벨 전에 라인이 진다. W가 준비됐을 때만 접근하고, 정면 trade 대신 그의 쿨다운을 punish한다. 6레벨 이후엔 너의 R이, 그가 태우는 fury(Renekton의 자원바)보다 오래 버틴다.
- **Malphite:** 본인의 미니언 웨이브에 붙어 서 있지 마라 — 그의 Q는 장거리 poke(commit 없이 체력을 깎는 원거리 견제)라 공짜로 체력을 가져간다. 초반 poke에 라인이 밀리면 ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker**를 사고, 타워 근처에서 웨이브를 **freeze**(밀지 않고 본인 쪽 라인에 묶어두기)해서 farm(미니언 처치로 얻는 골드와 경험치)을 끊는다.
- **Quinn:** 매우 까다롭다. 그녀의 스킬은 너에게 blind(짧은 시간 평타를 막는 효과, 패시브 강화 평타 포함)를 걸고 너를 Q 사거리 밖으로 kite(평타하며 뒤로 빠져 melee 거리를 안 주는 행위)한다. 1대1을 이기려고 하지 말고 웨이브를 강하게 밀어 다른 라인으로 roam(라인을 떠나 다른 라인을 도우러 가는 행위)해서 pick(빠져나온 적 한 명을 끊어내는 킬)을 노린다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **W**가 둘 다 열린다. 이 시점에서 진짜 all-in 창(완전히 commit해서 끝낼 수 있는, 물러설 길 없는 창)이 생긴다. 상대가 포지션을 흘리면 W를 준비한 채 접근, 슬로우가 묻은 직후 바깥날 Q를 박는다.
- **6레벨:** 첫 R이 열린다. 상대 체력이 60% 아래면 all-in을 노려라 — AD 보너스와 회복량 증폭이 평범한 trade까지 킬로 바꿔준다.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 완성 (~11-13분):** 딜이 한 단계 점프한다. 사이드 라인 1대1을 강제하고, bot으로 내려가 정글러(정글 캠프를 처치해 골드와 경험치를 벌고 라인을 도와주는 역할의 플레이어)와 함께 2대3 dive(타워 안까지 들어가 타워샷을 맞으면서도 적을 잡는 플레이)를 노린다.
- **2아이템 + R 켜진 시점 (~18-22분):** 한타 피크. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage**의 lifeline shield와 R의 healing amp(amplification — R이 받는 회복량을 모두 증폭한다)를 활용해 적 backline(한타에서 자기 팀 탱커 뒤에 서는 squishy 캐리)으로 dive하고, 처치 관여(킬 또는 어시)로 R 지속시간을 reset(연장)한다.

## 흔한 실수

- **접촉하자마자 Q1을 던지기.** Q1은 가장 작고 가장 느린 시전이다. 먼저 **W**로 슬로우를 걸고 나서, **바깥날**이 상대를 잡도록 Q1 타이밍을 맞춰라 — 안쪽 영역이 아니다. 바깥날 보너스는 약 25%다.
- **위치 정렬 대신 단순 이동에 E를 쓰기.** E는 trade를 이기기 위한 도구다. 바깥날 사거리로 미끄러져 들어가거나, Q 선딜(Q 피해가 실제로 들어가기 전 짧은 애니메이션) 동안 적의 핵심 스킬을 회피하는 데 아껴라. 단순히 웨이브를 빠르게 건너려고 태우지 마라.
- **교전 초반에 R부터 누르기.** Aatrox의 R은 쿨다운이 길고 버프가 시간이 갈수록 약해진다. **W** + **Q**로 먼저 engage(교전 시작)한 뒤, 이미 commit한 상태에서 AD/healing amp가 필요할 때 R을 켜라 — 시작 도구가 아니다.
- **미니언에 W를 무시하기.** W는 미니언 한 마리를 관통해 그 뒤 챔피언을 슬로우시킨다. 어려운 매치업(Fiora, Camille)에서는 본인 웨이브 뒤쪽에서 W를 쏴서, 적이 반응하기 전에 미니언 사이로 투사체가 그를 잡게 만든다.
- **haste/AD 대신 armor를 올리기.** Aatrox는 drain tank이지 진짜 탱커가 아니다. 그는 E lifesteal로 받은 피해를 회복하며 버티고, 그 회복량은 본인의 딜에 비례해 늘어난다. 체력-탱커 일변도 빌드를 가면 출력과 sustain이 동시에 죽는다.

## 고급 팁

Q1 선딜 애니메이션 도중에 **E**를 써서 Q 히트박스를 시전 중에 옮겨라: 한 방향을 보고 Q를 시작한 뒤 미니언이나 적 뒤로 dash해서, 휘두름이 완전히 다른 각도에서 떨어지게 만들 수 있다. 이 테크닉을 **Q animation cancel**이라고 부르고, 예측 가능한 Q 시전을 반응하기 거의 불가능한 플레이로 바꿔준다. 커스텀 게임의 target dummy(가만히 서 있는 연습용 더미)에 연습해라: Q1을 시전하고 그 시전을 유지한 채 E로 dash, 그 다음 새 위치에서 Q가 어떻게 떨어지는지 본다. 실전에서 가장 임팩트가 큰 활용은, telegraphed Q(선딜이 충분히 보여서 적이 읽고 옆으로 피한 Q)를 side-step(스킬을 피하려고 옆으로 빠지는 움직임)한 적의 안쪽으로 dash해 들어가, 새 각도의 바깥날로 그를 잡아 knock-up을 거는 것이다.
