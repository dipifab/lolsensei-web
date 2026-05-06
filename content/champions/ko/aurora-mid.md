---
title: "Aurora Mid Build & Guide — Patch 16.9"
slug: "aurora-mid"
language: "ko"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Aurora 미드 공략. 시작 아이템, burst-mage 코어 빌드, 핵심 매치업, 파워 스파이크, 자주 나오는 실수, 그리고 마무리 고급 팁까지 한 페이지 정리."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "스킬로 적에게 피해를 주면 영혼이 빠져나와 Aurora를 따라오고 닿으면 체력을 회복시킨다. 라인전과 한타 모두에서 꾸준한 sustain."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "직선 skillshot으로 맞은 적에게 저주를 부여. 재시전하면 저주가 Aurora 쪽으로 끌려오며 잃은 체력 비례 추가타가 발생한다."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "시전 시 dash, 착지하면 은신과 이동속도 증가. 처치 관여 시 쿨다운이 초기화된다. 핵심 기동 도구."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "광역 마법 폭발로 적에게 슬로우. 시전 후 Aurora가 뒤로 깡총 점프해 짧은 trade에서 안전한 disengage를 제공한다."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "도약한 뒤 슬로우 지대를 만들고 Aurora는 그 사이를 순간이동으로 가로지를 수 있다. 지대를 출입하는 적은 더 강한 슬로우."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "기동성 높은 assassin 상대 (Zed, Fizz, Akali) — W 쿨 시간을 stasis로 메운다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선 타겟이 Magic Resist 아이템을 사는 즉시 (60 MR 이상)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐량 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Stormsurge와 Shadowflame이 나오면 W jump-in과 Q 재시전 burst로 포지션 실수를 처벌한다. 처치 관여 W 리셋으로 한타를 연쇄적으로 돌린다."
  weakness: "W 전에 들어오는 hard CC는 모든 도주 수단을 봉쇄. 장거리 artillery 마법사는 engage 직전 step-up 윈도우 밖에서 Aurora를 poke해 깎는다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
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
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "도주 수단이 없는 비기동 마법사"
      reason: "이 미드들은 dash도 stealth도 없다: Q가 적중하면 W로 진입해 코앞에서 curse 재시전을 마무리하고, 처치 관여 리셋으로 다시 W를 타고 빠진다."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "근접 단거리 melee 미드"
      reason: "Aurora는 Q 포크로 사거리 우위를 챙기고 E의 후방 도약으로 trade를 거부한다. 상대는 gap-closer를 강제로 써야 하고 Aurora는 진입 직전 Q 재시전으로 처벌한다."
    - examples: ["veigar", "ziggs"]
      archetype: "캐스팅 시간이 긴 거치형 burst 마법사"
      reason: "이들의 킬각은 Aurora가 느린 투사체나 우리 안에 가만히 있어야 성립한다. W 은신은 캐스팅 읽기를 깨고 셋업 자체를 옆으로 흘리게 해준다."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "장거리 artillery 마법사"
      reason: "매 웨이브 Q 사거리 밖에서 Aurora를 poke한다. 자체 보호막이 없어서 E나 Q를 두려고 한 발씩 다가갈 때마다 패시브만으로는 회복 못 하는 체력을 잃는다."
    - examples: ["zed", "fizz", "akali"]
      archetype: "다중 gap-closer를 가진 기동형 assassin"
      reason: "W가 쿨다운인 짧은 틈에 Aurora를 burst로 녹인다. Zhonya's가 있어도 dash 연계 + 궁극기로 stasis나 W 재정렬 전에 먼저 지워진다."
    - examples: ["yasuo"]
      archetype: "투사체 차단 능력 보유 챔피언"
      reason: "Yasuo의 Wind Wall은 Q 진행과 재시전 pull-back을 둘 다 막아 Aurora의 라인 피해 절반 가량을 단 한 스킬로 무효화한다."
---

## 개요

Aurora는 마법 피해 기반 **burst** 마법사다 — 거의 모든 피해를 1-2초 윈도우에 몰아넣는다 — 거기에 assassin 도구가 얹혀 있다: **Across the Veil (W)**는 dash + 짧은 은신, **Between Worlds (R)**는 engage 도약(먼저 뛰어들어 한타를 시작하는 수단)이자 재배치 지대다. 그녀의 킷은 상대 읽기를 보상한다: **Twofold Hex (Q)**를 거리에서 맞히고, 재시전을 정렬하기 위해 한 발 앞으로 걸어가, curse pull-back이 일직선이 될 때 **W**로 점프 인한다. 패시브는 스킬로 끌어낸 영혼이 자신에게 닿을 때마다 체력을 회복시켜, 대부분의 **squishy**(체력은 낮고 피해는 높은 챔피언, Lux나 Ahri 같은) 미드 라이너가 갖지 못하는 라인전 **sustain**(귀환 없이 라인 위에서 체력을 회복하는 능력)을 제공한다.

게임 플랜은 **W**가 다시 돌아오는 순간 **all-in** 윈도우(처치까지 마무리하기로 결심하는 순간)를 노리면서 **Q**와 평타로 짧은 **trade**(두 챔피언이 몇 대씩 주고받는 짧은 교전)를 이긴다는 것이다. **W**는 **takedown** 리셋(처치 관여 시 쿨다운 환원)을 갖고 있어 라인전에서 깔끔하게 한 명 잡으면 두 번째 도약으로 빠져나올 수 있고, 한타에서는 첫 squishy 처치 후 곧바로 **back line**(탱커 뒤에 자리한 캐리들) 다음 타겟까지 연쇄로 들어갈 수 있다.

## 추천 빌드

**시작 아이템:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (약간의 AP — Ability Power, 마법 피해를 올리는 스탯 — 와 마나 재생) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. Aurora의 패시브가 이미 회복을 제공하므로, Doran's Ring은 초반 **Q**를 **poke**(교전 없이 거리에서 상대 체력을 갉아내는 것)로 굴리는 데 필요한 마나만 채워준다.

**코어 아이템 (순서대로):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Aurora의 첫 **spike**(아이템 완성 등으로 챔피언이 눈에 띄게 강해지는 순간). 체력이 낮은 적 챔피언에게 피해를 줄 때 Stormsurge 패시브가 **proc**(보너스 효과 발동) 되어 추가 피해와 이동속도를 준다. W 진입 → Q 재시전 연계에 정확히 맞는 효과다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 **magic penetration**(상대의 Magic Resist를 깎아 마법 스킬이 더 큰 피해를 주는 효과), 특히 squishy 타겟 상대로 가치가 크다.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 체력 임계 패시브(타겟 체력이 약 35% 이하일 때 추가 마법 피해)가 Aurora의 잃은 체력 비례 Q 재시전 burst와 정확히 겹친다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 **scaling** 아이템(다른 모든 아이템의 AP를 곱연산으로 늘려, AP가 많을수록 더 강해진다). Deathcap이 나오면 Q 재시전 한 번에 squishy 한 명을 반응 전에 끝내는 게 가능해진다.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 기동성 assassin 상대(Zed, Fizz, Akali). 액티브가 **stasis**(2.5초간 무적이지만 그동안 이동도 시전도 못 함)를 부여한다. **W**가 쿨다운인 윈도우에 사용한다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 마법 저항과 함께 다음 적 스킬 한 번을 막아주는 패시브 보호막. engage를 끊는 단일 대상 마법 **CC**(crowd control: 스턴, 속박, 슬로우 등 조작권을 빼앗는 효과)에 대비해 구입한다 — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 비율 마법 관통. 우선 타겟이 Magic Resist를 올리기 시작하면(60 MR 이상) 즉시 구매한다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — Grievous Wounds 적용으로 적의 회복량을 깎는다. 힐량이 누적되는 조합(Soraka mid, Vladimir, Dr. Mundo top, Yuumi)에 대비해 구입한다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 팀이 더 잦은 **R** engage를 원할 때는 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**도 허용된다.

**스킬 빌드:** **Q**를 가장 먼저 마스터(주력 피해이자 재시전 burst의 트리거), 다음이 **E**(미니언 웨이브 정리와 후방 도약으로 무료 **disengage** — 진행 중인 교전에서 빠져나오는 수단), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주룬 **Domination**의 **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. 보조룬 **Sorcery**의 **Manaflow Band**, **Transcendence**. Electrocute는 같은 타겟에게 빠르게 세 번 적중 시 발동되며 — 이는 Aurora가 짧은 trade마다 Q-평타-Q-재시전으로 정확히 만드는 패턴이다 — Ultimate Hunter는 **R** 쿨다운을 줄여 한타 두 번째 engage를 가능하게 한다.

## 주요 매치업

- **Yasuo:** Wind Wall(Yasuo의 W, 가로지르는 모든 투사체를 막는 바람벽)이 **Q**의 양쪽 절반(나가는 미사일과 재시전 pull-back)을 모두 먹는다. Yasuo가 미니언 웨이브에 Wind Wall을 쓸 때까지 **Q**를 아꼈다가, 쿨다운 동안 한 발 앞으로 걸어 평타와 **E**로 trade한다.
- **Zed:** 기동형 assassin. 그의 **R**이 떨어질 때를 위해 **W**를 수비적으로 아끼고, 라인전에서 공격용으로 태우지 않는다. 적 정글까지 hard engage 조합이면 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 두 번째 아이템으로 간다.
- **Anivia:** 기동성이 없고 벽이 빠진 직후엔 W all-in에 취약하다. 벽 시전 직후 그 위치를 공격적으로 밟아라. 벽 쿨다운이 길고, 근접에서 위협할 다른 도구가 없다.
- **Lux:** 호각 또는 약우세 매치업. Lux의 Q가 사거리 우위지만, 짧은 교환은 **W** + 평타로 우리가 이긴다. Lux가 **E**를 두는 동안(시전점이 노출되어 — 스펠이 떨어지기 전에 보이는 시전 모션이 있다) 옆으로 빠지고, 그 뒤에 한 발 앞으로 걸어간다.
- **Twisted Fate:** 누가 먼저 **roam**(자기 라인을 떠나 다른 곳에서 플레이를 만드는 것)을 가는지 경쟁. 그가 gold card를 골라 던지면 카드가 떨어지기 전에 **W**로 옆으로 — dash가 lock-on을 끊는다. **R**은 **ward**(몇 분간 일정 영역의 시야를 주는 토템 — 강 입구와 tri-bush, 즉 미드와 강 교차점의 수풀에 sweep)로 추적. 그가 ulti하면 mid-mia ping(라이너가 사라졌다고 팀에 알리는 표준 'missing in action' 핑)을 찍고 본인도 roam.

## 파워 스파이크 및 승리 조건

- **2레벨:** **W**에 한 포인트가 들어가는 순간 갑자기 기동성이 생긴다 — 상대가 ~70% 체력 이하면 첫 all-in 윈도우가 열린다. 앞으로 걸어가 **Q**, 평타, **W**로 뒤쪽으로, **Q** 재시전.
- **6레벨:** 첫 **R**이 cross-zone 재배치를 열어 적 포탑 밑 1v1까지 감수할 수 있게 만든다. **R**이 지대를 가로지르는 도주 경로를 내장해주기 때문이다.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 완성 (~12-14분):** Aurora의 첫 암살 spike. 풀체 squishy를 풀콤보로 단독 처치 가능하고, 처치 관여 **W** 리셋으로 같은 한타에서 두 번째 처치도 현실적이다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** 잃은 체력 비례 Q 재시전이 Magic Resist 아이템을 사지 않은 모든 타겟을 한 번에 지우기 시작한다. 이 시점부터 오브젝트(drake, baron, herald, voidgrub) 주위로 한타를 강제한다.

## 흔한 실수

- **W를 진입에 태우고 리셋용으로 남겨두지 않기.** **W**는 처치 관여 시 리셋된다. **W**로 engage했다면 같은 윈도우에 처치를 마무리해야 리셋이 빠지는 길을 만들어준다. 처치가 확실하지 않다면 **W**를 아끼고 **E**의 후방 도약으로 disengage한다.
- **Q 재시전을 깜빡하기.** **Twofold Hex**는 지속이 끝날 때 자동 재시전되지만, 수동 재시전은 pull-back 각도를 직접 고를 수 있게 해준다. 재시전 전 두 발 앞으로 가면 두 번째 타격이 더 많은 적을 관통해 **AOE**(area-of-effect — 단일 타겟이 아니라 한 영역의 여러 적에게 들어가는 피해) 피해를 만든다.
- **슬로우가 끝난 뒤에도 자기 R 지대 안에 있기.** **Between Worlds**는 시각적으로 표시된 영역에 가두는 효과를 준다. 출입 슬로우가 끝나면 그 지대는 그저 "여기서 뭉쳐 죽으라"는 표지판일 뿐이다. 처치가 확정되는 즉시 경계 밖으로 도약한다.
- **Magic penetration 없이 AP만 쌓기.** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**나 ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** 전에 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**부터 사면, 기본 Magic Resist만 가진 상대에게도 피해를 잃는다. 관통 먼저, AP는 그 다음.
- **팀이 따라오지 않는데 R로 engage하기.** **R**은 긴 쿨다운을 거는 결단이다 — 팀이 사이드 웨이브를 정리 중이라 따라오지 못하는데 혼자 태우는 게 가장 흔한 **throw**(부주의한 결단으로 이긴 판을 던지는 것)이다. 시전 3초 전에 ping을 찍어 팀이 올바른 방향으로 돌아설 시간을 준다.

## 고급 팁

**R**의 realm-hop 경계를 engage가 아니라 **kite** 도구로도 써라 — kite란 적이 거리를 좁히지 못하도록 뒤로 빠지면서 피해를 주는 것이다. 도주하는 적 뒤로 **R**을 시전해 슬로우 지대가 도주선을 끊게 한 뒤, 그 영역을 가로질러 점프해 적의 각도를 차단한다. 출입 슬로우 때문에 영역에서 빠져나가는 안전한 길은 멀리 도는 길뿐이고, 보통 이 길은 **Q** 한 번과 평타 한 번으로 처치를 마무리할 만큼 충분히 길다.
