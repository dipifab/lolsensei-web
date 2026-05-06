---
title: "LeBlanc Mid Build & Guide — Patch 16.9"
slug: "leblanc-mid"
language: "ko"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 LeBlanc 미드 공략. AP 버스트 어쌔신 빌드, Sigil 더블탭 콤보, 핵심 매치업 대처법, 6레벨 스파이크 활용과 라인전 흔한 실수까지 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "LeBlanc의 체력이 40% 아래로 떨어지면 1초간 은신하고 최대 8초 동안 그녀의 움직임을 모방하는 분신을 소환한다. 데미지가 아닌 방어용 베이트 도구다."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "단일 대상 스킬로 적중 후 3.5초간 표식을 남긴다. 표식 위에 두 번째 데미지가 들어가면 Sigil이 폭발해 진짜 burst가 나온다. Q로 처치 시 마나와 쿨타임 일부가 환원된다."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "지정 위치로 도약해 도착 지점에 피해. 4초 안에 재시전하면 출발점으로 귀환. W1으로 engage, W2로 escape — 재시전 타이밍이 깔끔한 픽과 throw를 가른다."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "처음 맞은 적을 사슬로 묶는 skillshot. 1.5초간 묶여 있으면(flash, dash, 미니언 차단 없이) rooted되고 추가 피해를 받는다. Q 폭발의 주요 setup 도구."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "최근 사용한 기본 스킬을 강화된 데미지로 재시전. 풀 burst를 위한 더블 Q, 안전한 engage용 더블 W, 적 묶기용 더블 E 가능. R은 기본 쿨타임을 리셋하지 않고 추가 시전만 더한다."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "diver와 assassin 상대 (Zed, Diana, Talon, Akali) — 정지 효과로 burst를 흘리고 Mimic-Q로 마무리"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "W 외에 추가 dash가 필요할 때의 첫 아이템 — 추가 burst와 W에 더해지는 짧은 돌진으로 fog 기습"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "engage를 끊는 단일 대상 magic CC 상대 (Annie 스턴, Lissandra R, Ahri 매혹, TF 스턴): 스펠실드가 첫 발 흡수"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "MR 아이템 2개 이상 가는 팀 상대 Void Staff 대체 (Mercury's Treads + Banshee's, AP 카운터 조합 등)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "6레벨 전에는 Q poke로 미드 라인을 snowball, 6레벨 이후 W-Q-AA-R-Q로 squishy 단일 처치. R이 돌 때마다 사이드 라인 roam, W in / W out으로 떨어진 적 pickoff."
  weakness: "W 귀환 외에는 방어 수단이 없는 squishy. 후반 falloff가 크다: sustain 가진 scaler(Kassadin, Cassiopeia)는 25분 이후 추월. 버스트 직전 hard CC로 묶이면 즉사한다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute는 Q-AA-E(3초 안에 3타) 시퀀스마다 발동해 Sigil 폭발에 더해 공짜 burst를 얹어준다. Sudden Impact는 W 직후 magic pen을 추가하고, Ultimate Hunter는 R 쿨다운을 줄여 roam 사이 더블 Q가 더 빨리 돌아오게 한다."
    secondary_rationale: "Sorcery secondary: Manaflow Band가 LeBlanc의 빡빡한 초반 마나를 풀어줘 귀환 없이 Q를 spam할 수 있고, Transcendence는 ability haste를 40% 이상으로 끌어올려 W와 R 쿨을 줄여 짧은 trade를 반복한다."
    secondary_alternative: "Xerath, Vel'Koz처럼 poke로 우위를 잡는 라인 상대로는 Sorcery 대신 Inspiration: Magical Footwear(약 12분 무료 신발) + Cosmic Insight(Flash haste로 W-Flash 콤보가 더 타이트해진다)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "신뢰할 dash 없는 비기동성 mage"
      reason: "이동기가 없으면 W-Q-AA 폭발에서 도망칠 수 없고, Veigar의 cage는 W로 그냥 우회 가능한 원이다."
    - examples: ["lux", "syndra"]
      archetype: "쿨다운 긴 squishy artillery mage"
      reason: "첫 Q poke를 견뎌내면 setup 스킬이 빠진 12-13초 창에 all-in — Lux Q와 Syndra E가 그 처벌 구간이다."
    - examples: ["seraphine", "karma"]
      archetype: "강한 escape 없는 enchanter mid"
      reason: "쉴드는 두 번째 Q 폭발을 지연만 시킬 뿐 막지 못한다; W로 쉴드 위에 들어가 R로 다시 Q, sustain이 따라잡기 전에 처치 확정."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "장거리 artillery mage"
      reason: "스킬 사거리가 1100-1500 단위로 700인 네 Q를 압도한다; XP 사거리 밖으로 밀어내고 그들의 CC 너머로 all-in이 불가능하다."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "너를 추월하는 후반 scaler"
      reason: "6-9 레벨 스파이크를 살아남으면 순수 데미지와 기동성에서 추월당한다; 11 이후 Kassadin R은 W 귀환보다 빠르고, Cassiopeia의 grounded 지대는 W 귀환을 차단한다."
    - examples: ["lissandra", "galio"]
      archetype: "신뢰할 lockdown 가진 미드"
      reason: "Lissandra Q-W나 Galio W taunt가 점프 도중 너를 그 자리에 묶는다; LeBlanc은 Cleanse 같은 도구가 없고 멈추는 순간 HP가 녹는다."
---

## 개요

LeBlanc는 AP burst assassin이다: 하나의 squishy를 1-2초 만에 떨궈내도록 설계된 챔피언으로(이 짧고 집중된 데미지 구간을 "burst"라고 부른다), 모든 교전이 패시브 격인 **Sigil of Malice (Q)** 중심으로 돌아간다. Q는 작은 타격을 주며 표식을 남기고, 그 표식 위에 들어가는 두 번째 데미지가 sigil을 폭발시켜 진짜 burst를 만든다. 클래식한 "double-tap" 리듬은 Q로 표식, 이어 auto-attack 또는 **E**로 폭발이다.

게임 플랜: 라인전에서 Q로 poke(쿨다운 6초로 spam 가능), 6레벨에 W-Q-AA-R-Q로 squishy(쉽게 죽는 약한 챔피언, 보통 ADC) 폭사, R이 돌면 즉시 사이드 라인을 roam(자기 라인을 떠나 다른 라인에서 플레이를 만드는 것). LeBlanc은 8분에서 25분까지가 전성기이고, 그 이후엔 scaler mage와 bruiser들이 따라붙는다. 항상 빠질 길을 계획하라 — **Distortion (W)**는 engage와 disengage 모두 가능하지만, 처치 확인이 아니라 도주를 위해 재시전을 아낄 때만 그렇다.

## 추천 빌드

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. 라인전 Q spam을 위한 마나 재생을 잡아준다.

**Core items (순서대로):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — on-hit 추가 마법 데미지와 takedown 시 이동속도 proc이 붙은 burst 스파이크. Q-AA-E 콤보와 완벽히 맞물려 매 폭발마다 Stormsurge도 같이 터진다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(스킬 데미지가 적의 Magic Resist 일부를 무시한다). squishy 상대 직접 데미지 업그레이드.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 적이 ~40% HP 미만일 때 추가 burst(체력 임계 패시브: 대상이 그 선 아래로 떨어져야 발동). Mimic Q와 합쳐 ADC를 one-shot낸다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 모든 AP에 곱연산. 단일 슬롯 기준 가장 큰 데미지 증폭원.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 적이 MR을 쌓기 시작할 때의 퍼센트 마법 관통; 더 단단한 대상 상대로 데미지 scaling을 유지한다.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — diver와 assassin 상대(Zed, Diana, Talon, Akali). 정지 액티브가 약 2.5초 무적을 만들어 그들의 burst 구간을 흘려보낸 뒤 Mimic Q로 마무리한다.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — dash가 하나 더 필요할 때의 대안 첫 아이템; W와 합쳐 fog of war(시야가 없는 맵 영역)에서 더 긴 engage 사거리를 만든다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 magic CC 상대(Annie 스턴, Lissandra R, Ahri 매혹, Twisted Fate 스턴). 스펠실드가 너에게 가장 먼저 들어오는 스킬을 막아준다.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 팀이 순수 burst보다 회복 오라가 더 필요할 때 ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** 대신 간다.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 강한 CC가 2개 이상(Annie + Galio, Lissandra + Leona)일 때는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**가 정답.

**Skill order:** **Q**를 먼저 마스터(주력 poke와 데미지), **W**를 두 번째(engage/escape dash 쿨다운 감소와 도착 지점 데미지 증가), **E**를 마지막(랭크 업으로 root 지속이 늘지만 burst에서는 쿨다운 영향이 작다). **R**은 6, 11, 16 레벨에 한 포인트씩.

**Runes:** 룬은 게임 시작 전 고르는 패시브 보너스로, primary tree(룬 5개) 하나와 secondary tree(룬 2개) 하나를 고른다. Primary는 **Domination**, keystone은 **Electrocute** — 3초 안에 같은 대상을 스킬·평타로 세 번 맞히면 발동(룬 효과 활성화)되는데, Q-AA-E가 이를 자연스럽게 충족한다. **Sudden Impact**(W dash 직후 추가 magic pen), 로밍 중 시야 압박을 위한 **Sixth Sense**, 더블 Q를 더 빠르게 돌리려는 **Ultimate Hunter**까지. Secondary는 **Sorcery**, **Manaflow Band**(Q spam용 마나 sustain)와 **Transcendence**(ability haste — 스킬이 더 빨리 돌아온다). Stat shards: Adaptive Force 2개 + Health Scaling.

## 주요 매치업

- **Annie:** 6레벨 전에는 Q poke로 우위. 6 이후엔 스턴 준비 완료(패시브가 4스택에서 초상화에 "Pyromania" 깜빡임)고 Tibbers 콤보 한 번에 죽는다. 일찍 snowball(작은 우위를 훨씬 큰 우위로 굴리는 것)하기 시작하면 세 번째 아이템으로 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**.
- **Twisted Fate:** roam 경쟁 매치. **R**로 갱킹할 라인을 고르지만 라인전 자체는 진다 — 막타 잡으러 들어올 때마다 Q로 두들기고 zone(주변 공간을 통제)으로 웨이브에서 떼어내라. 강가에 vision ward(특정 영역 시야를 주는 설치형 아이템)로 **R** 캐스팅을 추적할 것.
- **Kassadin:** 스케일링 하드 카운터. 6 전에는 Q로 poke 가능(6레벨 이전엔 답이 없다); 11 이후엔 **R** dash가 W 귀환보다 빠르고 trade에서 진다. 14분 전에 라인을 끝내든가 정글러를 두 번 부르든가.
- **Xerath:** 사거리에서 진다. **Q** 사거리가 1500 단위(네 Q는 700). 미니언 웨이브 뒤에 서서 그의 **Q**를 옆으로 흘리고, 그가 마나가 빠질 때만 들어가라 — Q 마나가 80-100, 5번 빗나가면 마른다.
- **Diana:** 6 전엔 동등(네가 poke 우위), **R**을 맞으면 6 이후엔 진다. 그녀가 2킬 이상 먹은 상태라면 ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** 다음 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 정지가 그녀의 ulti 콤보를 낭비시킨다.

## 파워 스파이크 및 승리 조건

- **2레벨 (Q + W):** 첫 진짜 스파이크. Q-AA-W2는 poke-and-leave 패턴이다: W로 dash in, Q, auto-attack으로 Sigil 폭발, W 재시전으로 빠져나오기. 이걸로 두 번째 웨이브에서 상대를 zone한다.
- **6레벨:** 첫 **R**이 게임에서 가장 큰 단일 스파이크. 표식이 찍힌 대상에 Mimic-Q는 6레벨 1아이템 기준 약 200-250 데미지 추가; HP 65%의 squishy 상대로 W-Q-AA-R-Q 풀 콤보가 Flash 전에 처치 확정.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 완성 (~ 11-13분):** burst 임계치가 매 스킬 적중당 80-100 더 늘어난다. 미드 웨이브를 적 미드 1차 아래로 밀어 넣자마자 W로 사이드 라인 roam.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~ 23-26분):** 다른 모든 AP 아이템에 곱연산. 이후엔 W-Q-R-Q-E로 Banshee's Veil 너머의 어떤 squishy도 one-shot. 오브젝트(Drake, Baron) 주변 한타를 강제하고 backline pick(팀에서 떨어진 적 캐리 처치)을 노려라.

## 흔한 실수

- **W2를 안 남기고 처치하러 W in.** Distortion 재시전 창은 단 4초. 1초 만에 풀 콤보를 다 쏟고 적 한복판에서 3초 동안 가만히 있으면 그쪽 서포터에 잡혀 죽는다. 항상 계획해라: W in, 데미지, W out — 귀환이 깔끔한 픽과 throw(피할 수 있었는데 죽어 적에게 모멘텀을 주는 사망)를 가른다.
- **Sigil을 또 다른 Q로 폭발시키려는 시도.** Q는 자기 표식을 폭발시키지 않는다 — 오직 *두 번째* 데미지원만 폭발시킨다. 신참 LeBlanc는 큰 숫자를 기대하며 Q를 두 번 쓰는데, 필요한 건 Q + auto-attack, 또는 Q + E, 또는 Q + R-Q. 패턴은 표식-폭발이지, 표식-표식이 아니다.
- **첫 본능으로 R-W를 쓰는 것.** 모방된 W는 dash 거리가 두 배지만, 위험 한가운데로 두 배 깊이 들여보낸다. 표식 찍힌 대상 위 Mimic Q가 거의 항상 처치 버튼이고, Mimic W는 추격과 도주 전용이다.
- **roam 없이 라인만 미는 것.** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**와 **R**이 모이면 가치는 사이드 라인에 있다. 사이드가 죽어가는데 미드만 farming하면 챔피언을 낭비하는 것. 웨이브를 밀어두고 "ON MY WAY" 핑을 찍은 뒤 fog of war를 통해 **W**로 사이드 레이너를 cut.
- **squishy 상대 팀에 bruiser 아이템 빌드.** LeBlanc은 자체 sustain이 없다 — burst를 내구도와 맞바꾸는 아이템은 키트를 낭비한다. 적 팀에 탱커가 3명 이상이 아닌 이상 ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**을 고수하라.

## 고급 팁

"W-Flash" 콤보가 LeBlanc의 시그니처 기습 engage. 대상 방향으로 **W**를 시전하고, 짧디짧은 dash 창 안에 **Flash**를 누른다 — Flash가 W 착지 지점을 넘어 400 단위 더 끌고 가고, W 데미지는 새 위치에 적용된다. W + Flash 총 사거리가 대다수 counter-CC setup(Annie 스턴, Lux binding, Galio W taunt)을 깨는 이유는 그쪽이 반응하기 전에 거리를 좁혀버리기 때문. **R**은 두 번째 시전을 위해 아껴라: 근접 사거리에 도달한 순간 표식 찍힌 대상에 R-Q를 박으면 그쪽 서포터가 peel(자기 캐리 보호)하기 전에 처치가 끝난다. 핵심은 buffer다: Flash는 W dash 끝이 아니라 가장 첫 순간에 눌러야 하고, 안 그러면 W가 취소되고 burst가 날아간다.
