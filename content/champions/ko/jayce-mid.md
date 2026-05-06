---
title: "Jayce Mid Build & Guide — Patch 16.9"
slug: "jayce-mid"
language: "ko"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "League of Legends 패치 16.9 Jayce 미드 공략. Manamune 러시 빌드, weapon-swap 콤보, 주요 매치업 대처법, 파워 스파이크 타이밍, 자주 하는 실수, 그리고 한 단계 위 운영을 위한 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "weapon swap (R)을 할 때마다 Jayce는 짧은 Movement Speed 가속을 얻고 잠시 유닛 충돌을 무시한다."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: 대상에게 도약해 물리 피해를 주고 주변 적을 둔화. Cannon: 장거리 AOE skillshot — 미드 라인전 핵심 poke 도구."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: 평타 시 패시브 마나, 액티브로 Jayce 주위에 피해 오라. Cannon: 다음 3회 평타 공격 속도 최대치 — all-in 시 평타 burst 윈도우."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: 짧은 사거리 넉백, 최대 체력 % 마법 피해. Cannon: gate 설치, 아군 가속 + 통과한 Q (Shock Blast) 강화 — 미드 라인전 표준 셋업."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "스탠스 전환 (쿨다운 6초). 근접 Hammer (engage, sustain, 넉백)와 원거리 Cannon (poke, AOE waveclear) 사이를 전환. Cannon으로 바꾼 직후 첫 평타는 대상의 Armor와 Magic Resist를 깎는다."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "AP 미드 (Annie, Veigar, Syndra) 상대 — 마법 보호막이 burst 콤보를 막고 AD도 추가"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 강제 CC (Ahri charm, Lissandra R, Sylas E) — spellshield가 lockdown 스킬 차단"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "전방을 쌓아 뭉치는 5v5 조합 — 액티브 AOE가 frontline을 뚫고 backline 타격"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "상대 팀에 AP/CC 위협이 3명 이상이면 Plated Steelcaps에서 교체; tenacity로 stun과 slow 시간 단축"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Cannon Q 라인 poke로 Tear (Manamune)를 빠르게 쌓고 14분 Muramana 스파이크에 도달, 이후 E-gate Q 콤보로 방어가 약한 적을 저격한다. R이 2랭크가 되면 사이드 라인을 로밍해 라인전 우위를 굳혀라."
  weakness: "Manamune 이전엔 mana hungry: Q 한 번을 빗나가면 트레이드의 대부분을 날린다. 기동성 좋은 assassin은 캐스트 도중 Cannon Q 사거리 안으로 파고든다. 후반엔 마법 저항을 쌓는 AP-heavy 팀 상대로 효율이 떨어진다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Jayce의 3타 트레이드 (Cannon Q + AA + Hammer Q-AA-E)가 Press the Attack을 발동시켜 +8% 피해를 주며, 6분 시점부터 Cannon poke가 kill threat가 된다. Triumph는 takedown 시 체력 회복, Legend: Alacrity는 W (Hyper Charge) 안에서 AS 한도 도달, Coup de Grace는 40% 이하 적에게 +8%."
    secondary_rationale: "Manaflow Band는 Cannon Q poke로 빠르게 쌓아 스택당 영구 +50 마나를 준다. 5레벨 Transcendence는 Ability Haste를 더해 Manamune와 시너지 — R weapon-swap 윈도우가 짧아진다."
    secondary_alternative: "암살자 위주 팀 (Zed mid + Kha'Zix jungle) 상대로는 Sorcery 대신 Resolve로 Bone Plating (첫 3타 피해 감소)과 Second Wind (체력 50% 이하 패시브 회복)을 든다. early scaling을 포기하고 Edge of Night 전 burst 구간 생존력을 챙긴다."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "dash 없는 immobile 미드 mage"
      reason: "6레벨 전엔 Cannon Q 사거리에 대응할 수단이 없다. Veigar는 Q poke를 위해 E (Event Horizon)로 셋업해야 하지만, Jayce의 E gate가 그의 콤보 완성 전에 너의 Q를 강화한다. 상대 체력이 50%에 닿으면 Hammer로 전환해 스킬 캐스트 도중 한 방에 처치한다."
    - examples: ["akali", "yone"]
      archetype: "원거리 poke 수단이 없는 근접 skirmisher"
      reason: "Cannon Q는 Akali의 E (Shuriken Flip)와 Yone의 Q 사거리를 넘어선다. 둘 다 데미지를 넣으려면 근접 윈도우에 commit해야 한다. Hammer E 넉백이 그들의 dash 체인을 끊고, Cannon-stance shred가 armor를 깎아 갱크 follow-up을 열어준다."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "다단 진입기를 가진 기동성 assassin"
      reason: "Zed W (Living Shadow)와 Fizz E (Playful/Trickster)는 캐스트 도중 Cannon Q 사거리를 좁힌다. R이 켜진 채 Hammer 사거리 안에 들어오면, Jayce가 Hammer Q-W-E 콤보를 끝내기 전에 burst로 죽는다. Edge of Night가 도움은 되지만 진입이 먼저 박히면 못 막는다."
    - examples: ["xerath", "vel-koz"]
      archetype: "장거리 artillery mage"
      reason: "Cannon Q보다 사거리가 길다. Xerath의 Q (Arcanopulse)와 Vel'Koz의 Q (Plasma Fission)는 Jayce가 그쪽 풀 콤보 안으로 걸어 들어가지 않으면 닿을 수 없는 거리에서 친다. 매 웨이브 교환마다 체력만 깎이고 all-in으로 받아칠 윈도우가 없다."
    - examples: ["twisted-fate", "galio"]
      archetype: "글로벌 / 맵 전체 roamer"
      reason: "Jayce는 스탠스 시너지 없이 로밍 속도가 느리다. Twisted Fate의 R (Destiny)은 8초 만에 사이드 라인을 뒤집고, Galio의 R (Hero's Entrance)은 Jayce가 따라갈 수 없는 곳에 떨어진다. 미드 1대1은 호각이라도 macro에서 다른 곳의 오브젝트를 잃는다."
---

## 개요

Jayce 미드는 정석 **lane bully** — 상대 미드가 성장하기 전에 지속적인 poke로 찍어누르는 챔피언이다. 원거리-근접 하이브리드로, **Cannon stance**의 장거리 AOE (area-of-effect, 광역 피해) skillshot Q로 초반 라인전을 잡고, **Hammer stance**의 leap-Q + 넉백-E 콤보로 마무리한다. R 토글은 6초 쿨다운이며, Cannon으로 전환한 직후 첫 평타가 대상의 Armor와 Magic Resist를 깎는다 — 이게 모든 all-in (한쪽 챔피언이 죽을 때까지 가는 풀 commit 트레이드)의 시작 트리거다.

미드 라인 운영은 세 단계로 나뉜다. 6레벨 이전엔 Cannon Q poke를 웨이브에 누적시킨다 (투사체가 미니언을 관통한다); 마나를 낭비하지 않고 상대 체력을 100%에서 50%까지 깎는 게 목표다. 6레벨에 Cannon-to-Hammer all-in이 kill threat가 된다: 상대 쪽으로 **E** (Acceleration Gate)를 깔고, **Q** (Shock Blast)를 게이트에 통과시켜 강화 피해, **R**로 Hammer 전환, **Q**로 도약, **W**로 오라 발산, **E** 넉백으로 너의 타워 쪽으로 보낸다. Manamune 완성 후 (~14분)엔 Cannon Q가 squishy 웨이브를 한 방에 정리하므로, 사이드 라인을 로밍해 초반 우위를 글로벌 템포 우위로 전환한다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (Manamune의 전구체) 같은 욕심 있는 시작은 피한다 — 사거리를 맞출 수 있는 미드 상대로 첫 3분을 버티려면 Doran's Blade의 AD와 흡혈이 필요하다.

**코어 아이템 (순서대로):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — 1순위 러시. Cannon Q 웨이브 poke로 스택을 쌓는다. 풀스택에서 ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana**로 각성하면 모든 Q, AA, W 오라 틱마다 추가 피해 — Jayce 빌드 최대 AD 스파이크.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 라인 (Yasuo, Zed, Akshan) 상대 신발. AP/CC 누적 상대 시 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (적 armor의 고정량을 무시하는 스탯)와 takedown 시 스택을 쌓는 패시브 (Eminence). Muramana와 합쳐지면 매 로밍의 AD가 흉악해진다.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality와 피격 시 슬로우. Cannon Q 명중 슬로우가 Flash로 빠지려는 적을 Hammer-Q catch 대상으로 바꾼다.

**상황 아이템:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — AP 미드 (Annie, Veigar, Syndra) 상대. 마법 보호막이 burst 콤보를 막고 AD도 더해준다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 대상 강제 CC (Ahri charm, Lissandra R, Sylas E) 상대. 전투 외 시간에 충전되어 너를 묶는 다음 스킬 하나를 차단한다.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — **frontline** (한타를 여는 탱커/브루저)을 쌓아 뭉치는 5v5 조합 상대. 액티브 AOE 파동이 전열을 뚫고 **back line** (뒤에서 딜을 넣는 캐리)을 때리며, takedown 시 쿨다운이 환급된다.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 상대 팀에 AP나 CC 위협이 3명 이상일 때 Plated Steelcaps에서 교체.

**신발:** Plated Steelcaps이 기본. magic damage가 강하거나 chain CC가 많으면 Mercury's Treads.

**스킬 순서:** **Q** 먼저 마스터 (양쪽 스탠스의 주력 피해), **E** 두 번째 (처형용 넉백, poke 강화 게이트), **W** 마지막. **R**은 6, 11, 16레벨에 찍는다. 참고: 2레벨엔 W가 아니라 **E**를 찍어 Acceleration Gate + Cannon Q 콤보로 kill pressure를 만든다.

**룬:** 주특성 **Precision**에 **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**. 암살자 조합 상대로는 보조를 **Resolve**로 바꿔 **Bone Plating** + **Second Wind**.

## 주요 매치업

- **Yasuo / Yone:** Wind Wall에 Cannon Q가 막힌다. 상대가 자기 웨이브에서 등을 돌리도록 측면 각도에서 Q를 쏴라 — 제때 보지 못한 것은 벽으로 막을 수 없다. 벽 쿨다운 때 Q를 아꼈다가 E-gate-Q 체인을 박는다.
- **Zed:** 12분 이후엔 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**를 항상 충전 상태로 유지한다 — Death Mark 마무리 R을 막아준다. 6레벨 전엔 네가 poke 우위. 6 이후 라인은 뒤집힌다: 그의 R이 켜진 동안 웨이브 너머로 가지 마라.
- **Ahri:** 호각 매치업, Q 타이밍이 결정한다. 그녀의 E (Charm)는 멀리서 예고 동작이 보인다 — Cannon Q를 쏘기 전에 미니언 뒤로 사이드스텝. charm을 빗나가게 하면 9초간 라인은 너의 것이다.
- **Annie / Veigar:** 6레벨 전 무료 poke 매치업. 기동성이 없어 Cannon Q + E 콤보로 크립 밖에서 체력을 깎는다. all-in 전 stun 쿨다운 (Annie 패시브, Veigar E)을 확인 — 그들의 stun이 Hammer Q 넉백 애니메이션을 무효화한다.
- **Twisted Fate:** 6레벨 전엔 네가 poke 우위지만 macro game (라인을 넘어선 맵 전체 운영)에서 진다. R이 켜지면 mid mia (missing in action — 적이 라인을 떠남)를 핑하고 일찍 백 — 네가 가진 라인 우선권은 그의 cross-map 골드 카드보다 가치가 낮다.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + E):** Cannon Q + Acceleration Gate + AA가 대부분의 squishy에게 30% HP 트레이드. 게이트는 도주 경로로도 쓰인다 — 적이 들어오면 너의 타워 쪽으로 등 뒤에 깐다.
- **6레벨 (첫 R):** 두 스탠스가 모두 풀 가동. Cannon-to-Hammer all-in이 chunk trade가 아니라 45% HP 시점의 kill threat가 된다.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune 완성 + 스택 (~12-14분):** Muramana로 각성하면 매 Q가 ~15% 더 세게 들어가고 평타 데미지도 함께 뛴다. Jayce 미드의 가장 큰 스파이크 — 사이드 라인 로밍을 노릴 시점.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + takedown 스택 (~19-22분):** Eminence 스택이 Muramana와 합쳐져 말도 안 되는 AD 수치가 된다. 이때 한타를 강제하거나 inhibitor를 밀어라.

## 흔한 실수

- **Acceleration Gate 없이 Cannon Q를 쏜다.** 맨 Q는 마나가 비싸고 피하기 쉽다. 먼저 적 쪽으로 **E** (Acceleration Gate)를 깔아라; 게이트가 통과한 Q를 강화하고 (사거리 증가, 데미지 증가, AOE 확장), 약간의 딜레이가 적이 발사 전에 이동 방향을 commit하게 강제한다.
- **Manamune 스택을 너무 천천히 쌓는다.** Cannon Q는 챔피언을 맞히거나 웨이브를 처치해야 스택이 쌓인다 — 빗나간 Q는 카운트되지 않는다. 매 Q가 미니언 셋 이상을 맞히도록 웨이브 poke를 설계해 Tear 진행을 가속한다.
- **R-Cannon shred를 미니언에게 낭비한다.** Hammer에서 Cannon (R)으로 전환할 때 첫 평타가 Armor와 Magic Resist를 깎는다. 근접 미니언에게 그 평타를 박으면 트리거가 날아간다 — 매번 적 챔피언을 위해 아낀다.
- **R 쿨다운을 의식하지 않고 로밍한다.** R은 6초 swap 쿨다운인 동시에 너의 유일한 mobility (전환 시 패시브 Move Speed 가속)다. R이 돌아온 상태로 로밍해 counter-roam에서 빠져나갈 수 있도록 한다 — R 없이 한타에 도착하면 출구 없는 commit이다.
- **Hammer W 마나 sustain을 잊는다.** 긴 Cannon poke 공성 중엔 Hammer로 2-3 평타를 쳐 W 패시브 (피격 시 마나)로 마나를 회복하라. 이걸 빼먹으면 마나풀이 마르고 일찍 back을 강제당한다.

## 고급 팁

움직이는 대상에 대한 **gate-Q timing-flip**을 연습하라. 대부분의 Jayce 유저는 적이 *지금 서 있는* 곳에 Acceleration Gate를 깔고 Q를 통과시킨다. 프로는 적이 *0.5초 후 있을* 위치에 게이트를 깐다 (게이트 캐스트 타임 + Q 애니메이션) — 보통 웨이브 쪽으로, 적이 last-hit을 위해 걸어와야 하기 때문이다. 강화된 Q는 예측 위치에 떨어지지 지나간 위치에 떨어지지 않는다. Practice Tool에서 target dummy를 Move 모드로 두고 lead distance를 muscle memory가 될 때까지 익혀라.
