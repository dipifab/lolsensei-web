---
title: "Ambessa Top Build & Guide — Patch 16.9"
slug: "ambessa-top"
language: "ko"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Ambessa 탑 공략. 시작 아이템부터 Eclipse 스커미셔 빌드, 주요 매치업 대처, 파워 스파이크 활용, 흔한 실수 회피, dash-AA weave 같은 고급 콤보 팁까지 정리한 가이드."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "스킬을 사용한 직후 짧게 dash. 다음 평타는 사거리·피해량·attack speed가 강화되고 에너지를 환급한다."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "2단 스킬. 1단은 전방 부채꼴 타격이며 적 max HP에 비례 추가 피해. 명중 시 더 긴 직선 슬램이 2단으로 풀린다 — 핵심 데미지."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "보호막을 두르고 자세를 잡은 뒤 지면 강타. 자세 동안 미니언이 아닌 피해를 막아내면 강타가 강화. 트레이드용 방어기."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "주변 광역 채찍으로 근처 적에게 피해와 슬로우. 이 스킬에서 패시브 dash가 나가면 dash 끝에 두 번째 타격이 추가된다."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "unstoppable 상태로 직선 위 가장 먼 적 챔피언까지 blink, 도착 즉시 suppression 후 강타로 피해와 stun. 패시브: 스킬에 armor pen + omnivamp."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 hard CC가 2개 이상이거나 AP 피해가 강할 때 Plated Steelcaps에서 교체"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP 강한 탑 상대 (Vladimir, Rumble, Gwen) — magic shield + 저체력 AD scaling"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "예고된 장거리 hard CC 상대 (Malphite R, Ornn R, Sett W) — spell shield로 engage 차단"
    - dd_id: "6697"
      name: "Hubris"
      against: "라인전을 이미 앞서고 있을 때 — 처치마다 AD가 쌓여 snowball lead 가속"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "후반 R-blink로 적 carry에 진입할 때 — revive로 풀 commit 후 후속타까지 생존"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "2-6레벨 라인전을 패시브 dash 트레이드로 잡고, Voidgrubs와 Drake 주변 skirmish로 snowball. R로 적 frontline의 peel이 닿기 전에 고립된 carry를 suppression 한다."
  weakness: "hard CC 연계가 들어오면 dash 콤보가 끊긴다. 탱커의 스탯라인은 % max HP 피해를 무디게 만든다. R은 단일 타겟 commit이라 peel 조합엔 suppression이 풀린 뒤 고립된다."
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "dash 없는 immobile 근접 bruiser"
      reason: "스킬마다 따라오는 패시브 dash로 Darius 끌기, Garen 침묵, Illaoi E 같은 예고 동작에 들락날락한다. R suppression은 그들의 탱키함을 무시하고 처치로 직결."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "원거리 squishy 탑 라이너"
      reason: "패시브의 짧은 dash가 연속으로 거리를 메운다. 근접 사거리에선 Q가 max HP 비례로 더 빠르게 깎아 그들의 disengage보다 빨리 잘려나간다."
    - examples: ["nasus", "kayle"]
      archetype: "성장형 후반 스케일러"
      reason: "2-6레벨 동안 그들의 파워 스파이크 전(Nasus Q 스택, Kayle 11·16레벨) 압박해 부순다. 초반에 처치를 강제해 후반을 못 보게 한다."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "hard CC와 스탯 체크가 강한 탱커"
      reason: "지정형 CC(Malphite R, dash를 끊는 Poppy W, Ornn brittle + 띄우기)가 R 도착 전에 dash 콤보를 끊는다. 단단한 armor + HP는 Q의 % max HP scaling도 둔화시킨다."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "장거리 poker 와 kiter"
      reason: "Jayce E의 knockback과 Gnar 메가 R이 dash를 캐스팅 중 끊는다. kiter는 위협 거리 밖에 머물러 그녀가 너무 멀리서 dash를 commit하게 만들고 스킬 쿨에 응징된다."
    - examples: ["olaf", "tryndamere"]
      archetype: "ult가 suppression 또는 처형을 무력화하는 챔피언"
      reason: "Olaf의 R은 캐스팅 시 suppression을 정화해 그녀의 핵심 pickoff 수단을 무효화한다. Tryndamere의 불사 R은 처형 프레임을 살아남아 슬램 밖으로 spin out 한다."
---

## 개요

Ambessa는 탑 라인의 skirmisher다 (긴 한타가 아니라 짧은 소규모 교전을 위해 설계된 챔피언). 물리 피해를 입히는 AD 챔피언이다 (AD = attack damage; 반대는 AP = ability power, 마법 피해 스탯). 마나 대신 **에너지**를 자원으로 쓰며, 패시브 **Drakehound's Step**에 모든 게 달려 있다 — 스킬을 한 번 쓸 때마다 짧은 dash와 함께 사거리·피해·attack speed가 강화된 평타가 따라온다. 이 한 가지 메커니즘이 그녀를 chain-trade 전문가로 만든다 — Q, W, E 어느 것이든 무료로 auto-attack reset(평타 타이머를 무시하고 즉시 나가는 평타)을 주기 때문에, 풀 콤보면 2초 안에 4-5타가 박힌다. hard interrupt(stun, 띄우기, 침묵 같이 캐스팅을 중단시키는 CC) 없이 근접에서 그녀와 붙으려는 적을 응징하는 키트다.

게임 플랜은 단순하다: 2레벨부터 **Q + E** all-in 트레이드(짧은 교환이 아니라 처치까지 가는 풀 commit)로 라인을 부수고, 중반에 Voidgrubs와 Drake 주변 skirmish에서 snowball. "Snowball"은 작은 초반 우위 — 처치 하나, 타워 플레이트(첫 14분 안에 부숴지면 골드를 주는 타워 갑옷 조각) 하나 — 가 시간이 갈수록 더 큰 우위로 누적되는 걸 말한다. **R**로 적 frontline(앞에 선 탱커)의 peel이 들어오기 전에 고립된 적 carry(팀의 주력 딜러)를 suppression 한다 — "peel"은 CC나 자기 몸으로 위에 올라온 적을 떼어내 아군을 지키는 행위. 후반은 약점이다: 적 탱커가 두 코어를 마치는 순간 Q의 % max HP 피해가 더 이상 녹이지 못하므로, 28분 전에 게임을 닫아야 한다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. AD 트레이드 기본값 — 라이프스틸이 dash chain을 받쳐준다.

**코어 아이템 (구매 순서):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 핵심 스커미셔 1코어. 같은 적에게 1.5초 안에 스킬 두 번을 맞히면 보호막(들어오는 피해를 흡수하는 임시 HP 막)과 다음 평타에 큰 추가 피해가 발동된다. 그녀의 dash 콤보는 매번 이 조건을 채운다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 기본 신발. 탑 매치업 대부분이 AD고, 평타 피해 감소가 길게 가는 트레이드에서 이득이다.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred(타격마다 적 방어력을 조금씩 깎고 최대 30%까지 누적)와 HP, AD를 모두 제공. 패시브 강화 평타가 누구보다 빠르게 shred를 쌓는다.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 생존 스파이크. 짧은 시간에 큰 피해를 받으면 큰 보호막이 발동. R-blink로 적 carry에 들어갔는데 적 팀 전체가 너에게 집중할 때 유용.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 받는 물리 피해를 즉시가 아닌 3초에 걸친 출혈로 변환해 트레이드를 마무리할 시간을 준다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 적 팀에 hard CC가 둘 이상이거나 AP(마법) 피해가 강할 때 Plated Steelcaps 대신. 마법 저항과 tenacity(stun과 slow의 지속시간을 줄임)를 준다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — AP 탑 라이너 상대 (Vladimir, Rumble, Gwen). 마법 피해에 대한 "lifeline" 보호막(HP가 30% 아래로 떨어질 때 한 번 발동)과 저체력에서 추가 AD를 줘서 받아칠 시간을 만든다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 예고된 장거리 hard CC 상대 (Malphite R, Ornn R, Sett W). 1회용 spell shield(다음에 너를 맞히는 적 스킬 한 발을 막음)로 적 engage를 빗나가게 만들고, 네 R 타이밍을 네가 정한다.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — 라인전을 이미 앞서고 있을 때. 처치/어시스트마다 AD가 쌓여 snowball lead를 가속 — 더 많이 잡을수록 더 세게 때리고, 더 많은 처치로 이어진다.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 후반 마지막 코어. 죽으면 5분에 한 번 부활. R-blink로 적 carry에 commit해도 위치가 어긋났다고 게임이 끝나지 않는다.

**신발:** Plated Steelcaps 기본. AP/CC가 강하면 Mercury's Treads. Sorcerer's 같은 마법 신발은 패스 — 너는 물리 스케일러다.

**스킬 마스터 순서:** **Q** 선마(주력 데미지이자 적 max HP에 scaling되는 유일한 스킬), **E** 후마(웨이브 클리어 + 광역 슬로우로 Q 2단을 세팅), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**:
- **Conqueror** — keystone (트리에서 가장 강력한 메인 룬). 챔피언과 오래 싸울수록 추가 AD와 회복이 누적 — 그녀의 chain-trade 키트에 완벽히 맞는다.
- **Triumph** — 처치/어시스트 시 약간의 회복과 골드, 저체력에서 싸움을 마무리할 때 발동.
- **Legend: Alacrity** — 처치마다 누적되는 패시브 추가 attack speed.
- **Last Stand** — HP가 60% 아래로 떨어졌을 때 추가 피해.

보조 트리 **Resolve**:
- **Second Wind** — 적 챔피언에게 피해를 받은 뒤 발동되는 HP 재생. 라인 poke를 받아낸다.
- **Unflinching** — **Flash**가 쿨다운일 때 추가 tenacity. R로 적 팀에 들어가 CC를 연속으로 받을 때 유용.

스탯 파편(룬 아래 작은 보너스 스탯 세 개): Adaptive Force(챔피언이 물리/마법 중 어느 쪽으로 빌드하느냐에 따라 AD 또는 AP — Ambessa는 AD로 변환), Adaptive Force 한 번 더, 마지막은 매치업에 따라 Armor 혹은 HP.

## 주요 매치업

- **Darius:** 유리. 그의 Q 바깥쪽 띠가 자가 회복되는 부분이다. 너의 Q1 전진 dash로 그 안쪽으로 들어갔다가 Q2로 빠져나와라. 그가 풀 처치를 노리려면 Q + E 둘 다 맞혀야 하니, W로 Q 그립을 보호막으로 받고 동등한 트레이드를 가져갈 수 있다. 그의 W 출혈을 먼저 쓰게 강제(낭비하게 만듦)한 뒤, 쿨다운일 때 들어가라.
- **Sett:** 유리. dash가 없고 전방 슬램(W)만 있다. 6레벨 전엔 패시브 dash 콤보가 길게 가는 교환에서 그를 이긴다. 6 이후엔 그의 R 넉백(밀어내기) — 너를 적 진영으로 밀어붙이는 — 을 피하려고 **Flash**를 아껴라.
- **Malphite:** 불리. 패시브 보호막이 2레벨 all-in을 무디게 하고, Q 슬로우로 네가 commit할 때 도망간다. 두 번째 코어로 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**를 올려 R engage를 차단해라. 그가 fog of war(시야가 없어서 보이지 않는 맵 영역) 너머에서 측면 기습으로 flank 가능한 choke point의 한타는 피해라. 와드는 그 영역을 밝히려고 놓는 작은 마법 눈이다.
- **Jayce:** 불리. 두 자세를 가지고 있다. 원거리 자세에서 Q + E 콤보로 안전 거리에서 너를 poke(체력을 깎아낸다)하므로 거리를 좁히기 어렵다. 시작템으로 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**를 들고, 라스트힛으로 HP 재생을 받기 위해 미니언 웨이브에 붙어 있고, 그가 근접 자세로 바꿔 E를 낭비할 때만 처치를 노려라.
- **Camille:** 실력 매치업. 양쪽 다 강한 all-in을 가졌고, 첫 캐스팅을 깔끔하게 박는 쪽이 이긴다. 너의 Q는 그녀의 현재 max HP에 비례하니, 그녀의 W 회복을 먼저 쓰게 만든 뒤 Q1-평타-Q2로 50% 아래로 끌어내려라. 너의 타워 근처 tri-bush(세 갈래 입구를 가진 수풀)에 와드를 깔아 그녀의 hookshot — 벽이나 적에게 갈고리처럼 끌어주는 스킬 — 이 라인 복귀 중인 너를 잡지 못하게 하라.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + E):** 첫 큰 스파이크. 두 스킬 + 패시브 dash로, 풀 콤보 Q1-평타-E-평타-Q2-평타가 2초 안에 평타 4타와 스킬 틱 2회를 박는다. 대부분의 탑 라이너는 근접 난타에서 이 피해량을 따라잡지 못한다.
- **6레벨 (R 해금):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution**으로 pickoff(주 교전 밖에서 고립된 적을 끊는 것)가 열린다. R 패시브는 armor penetration(피해가 적 방어력 일부를 무시)과 omnivamp(스킬 피해의 일정 비율을 회복)도 추가해 강 주변 skirmish에서 sustain을 만든다.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 완성 (~ 11-13분):** 가장 큰 skirmish 스파이크. 보호막과 추가 피해가 풀 콤보마다 발동되니 Voidgrubs 주변 1대1, 2대2가 그녀 쪽으로 기운다.
- **2코어 + 신발 (~ 18-22분):** ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver**가 완성되면 팀과 모여 Drake 한타를 한다. 적 carry에 R-blink — suppression(스킬, 이동, 심지어 **Flash**까지 막는 CC)이 1.5초 동안 잡아두니 팀의 후속타가 충분히 들어간다.

## 흔한 실수

- **Sundering Slam(Q 2단)을 미니언에게 낭비.** 강화된 2단이 너의 데미지 스파이크다. 챔피언 대신 미니언에 Q1을 맞히면 한 방에 죽는 생물에게 reset을 태운 셈이다. 챔피언에게 확실히 맞힐 수 있을 때까지 Q1을 아껴라.
- **R-blink로 적 팀 너무 깊이 들어가기.** R은 너의 직선 위 **가장 먼** 적 챔피언으로 간다, 가까운 적이 아니다. 캐리 앞에 적 셋이 서 있으면 blink가 그들을 통과해 적 팀 전체 뒤로 떨어진다. R 누르기 전에 항상 포지셔닝을 확인 — 너와 가장 먼 점 사이에 캐리만 단독 타겟이 되도록 줄을 맞춰라.
- **빈 공간에 W brace.** 강화 슬램은 자세 동안 미니언이 아닌 피해를 실제로 막아야만 발동한다. 라인에서 미니언만 보고 brace하면 쿨다운만 낭비. W는 반응형으로 사용 — 적 스킬 시전 모션이 시작되는 게 보일 때 그때 brace.
- **오지 않는 완벽한 engage를 기다리며 R 들고만 있기.** 초반 R은 100초 이상 쿨다운이다. 6레벨에 R이 켜져 있고 적 라이너가 "한 사이클 비어 있다" — 즉 방금 주 콤보를 써서 핵심 스킬이 쿨다운에 있다 — 면 들어가서 R을 박아라. 죽은 적 라이너는 무료 두 웨이브 farm과 추가 타워 플레이트(첫 14분의 골드 보상 갑옷)를 의미한다.
- **Q가 녹일 거라 믿고 하이퍼 탱커와 1대1.** % max HP 피해는 종이 위에서 무서워 보이지만 armor는 여전히 적용된다. Ornn이나 Cho'Gath가 ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + 탱커 코어를 마치면 솔로 처치는 불가능하다. 정글러와 함께 움직여라.

## 고급 팁

**dash-AA weave**(dash와 평타를 교차해 짜는 기술)를 마스터하라. 모든 스킬 캐스팅이 패시브 dash와 강화 다음 평타를 발동시키기 때문에, 풀 콤보의 최적 순서는 *스킬 → dash → 평타 → 스킬 → dash → 평타*지 *스킬 → 스킬 → 스킬 → 평타*가 아니다. 강화 평타가 나가기 전에 두 번째 스킬을 누르면 그 평타의 보너스가 취소된다. 깔끔한 리듬: **Q1 → 전방 dash → 평타 → E → dash → 평타 → Q2 → dash → 평타 → R**. Practice Tool(오프라인 훈련 모드)에서 target dummy(고정 연습용 허수아비)를 상대로 평타 하나하나가 정확히 들어갈 때까지 연습 — 실제 라인전에서 이건 2초 트레이드를 7개의 분리된 피해 인스턴스로 바꾼다, 처치와 50 HP로 도망치는 적의 차이.
