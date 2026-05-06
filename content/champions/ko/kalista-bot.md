---
title: "Kalista Bot Build & Guide — Patch 16.9"
slug: "kalista-bot"
language: "ko"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Kalista 봇 라인 완벽 공략. 시작 아이템부터 on-hit 코어 빌드, Soulbound 서포터 운용, 주요 매치업과 파워 스파이크, 라인전 흔한 실수와 해결책, 그리고 Q 리셋 같은 고급 팁까지 한 페이지에 깔끔하게 정리했습니다."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "모든 평타와 Pierce 시전 시 wind-up 동안 짧은 hop이 발동된다. 발사 직전 이동 클릭으로 hop 방향이 결정된다."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "직선 skillshot. 첫 대상을 처치하면 창이 계속 날아가 다음 대상에게 모든 Rend 스택이 그대로 옮겨간다."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Soulbound 패시브: Kalista를 한 명의 아군과 묶는다. 둘이 같은 대상을 때리면 최대 HP 비례 추가 마법 피해."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "평타와 Pierce가 대상에 창을 박는다. 활성화하면 모두 뽑아 피해를 주고 주변에 슬로우. 피해는 스택 수에 비례."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Soulbound 아군을 stasis로 만들어 Kalista에게 끌어온다. 아군이 재시전하면 첫 적 챔피언에서 멈추는 넉백 대시로 발사된다."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "2500+ HP 탱커/브루저 상대 (Sion, Ornn, Cho'Gath): armor pen이 HP 격차에 비례해 증가"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐 의존 조합 상대 (Soraka support, Aatrox, Dr. Mundo): Grievous Wounds로 회복량 절반 차단"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "버스트/암살자 조합 상대 (Zed, Talon, Kha'Zix): 부활 효과로 R 후 Soulbound 후속타 확보"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 hard CC 상대 (Ashe arrow, Morgana Q, Blitzcrank hook): 한 방을 막아 hop 리셋 유지"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "팀파이트에서 우선순위 타겟에 Rend 6+ 스택, 그 후 Q 리셋으로 두 번째 타겟 처치. Wit's End와 Blade of The Ruined King이 완성되면 장기전에서 다른 마크스맨을 압도한다."
  weakness: "서포터에 따라 스케일이 갈린다: 락다운이 없는 Soulbound면 engage 수단이 사라진다. Hook 서포터(Blitzcrank, Thresh)는 파트너를 hop 사거리 밖으로 끌어내 R 전에 한타가 끝난다."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision의 Press the Attack: 같은 대상에게 hop 3회로 PtA를 발동시켜 +12% 보너스 피해를 챙기고 Rend는 빠르게 쌓인다. Triumph는 잦은 교전 보상, Legend: Alacrity는 on-hit AS 곡선 강화, Coup de Grace는 40% HP 이하 마무리."
    secondary_rationale: "Domination 보조: Taste of Blood는 짧은 트레이드 후 sustain을 제공하고(hop window로 깔끔히 빠진다), Relentless Hunter는 takedown 누적 시 비전투 이속을 제공해 Soulbound와의 미드 로밍에 직결된다."
    secondary_alternative: "강한 poke 라인 상대(Caitlyn + Lux, Varus + Brand)면 Domination 대신 Resolve로 Bone Plating(첫 3타 -30~-60 피해)과 Second Wind(50% HP 이하 회복 증가)로 1-6 레벨 구간을 버틴다."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "후반 캐리지만 dash가 없는 ADC"
      reason: "그들의 유일한 안전 장치는 포지셔닝이다. Kalista는 평타마다 hop을 하니 멈추지 않고 melee 트레이드를 한다. Flash 외엔 답이 없고, 그들이 트레이드를 리셋하기 전에 Rend 스택이 더 빨리 쌓인다."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "서포터 락다운에 의존하는 정적인 마크스맨"
      reason: "상대 서포터가 먼저 engage하면, 너의 R 재배치와 Wit's End on-hit 마법 피해가 그들의 AS 곡선을 이긴다. 평타마다 350 유닛을 좁히는 챔피언을 카이팅할 수 없다."
    - examples: ["caitlyn"]
      archetype: "라인전 장거리 포격형 ADC"
      reason: "1-3 레벨에는 Caitlyn이 너를 포크하지만, trap-and-net 콤보는 긴 쿨다운의 단일 dash다. 부츠와 Wit's End가 갖춰지면 6레벨에 그대로 걸어가 잡는다."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "1-3 레벨 all-in이 강한 라인 불리 마크스맨"
      reason: "그들의 초반 데미지가, 네가 Press the Attack을 쌓을 AS를 갖추기 전 hop spacing(평타 hop으로 유지하는 안전 거리)을 뚫는다. 2레벨에 Q 한 번 빗나가면 서포터 반응 전에 킬을 헌납한다."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "상대가 너의 Soulbound 파트너를 노리고 픽하는 hook 서포터"
      reason: "그들이 너의 서포터를 hook하면 Soulbound 링크는 무용지물이다. grab 라인 밖으로 R로 빼낼 수 없고, engage가 hop window에서 800+ 유닛 떨어진 곳에서 발생한다."
    - examples: ["tristana", "vayne"]
      archetype: "자기 보호 수단을 가진 기동성 하이퍼캐리"
      reason: "Tristana는 W로 너의 dive에서 빠지고, Vayne의 tumble은 Press the Attack 스택 타이머를 끊는다. 둘 다 25분 이후 1v1에서 너의 on-hit 코어를 이기는 아이템 곡선을 탄다."
---

## 개요

Kalista는 on-hit skirmisher 마크스맨("on-hit"=스킬이 아닌 모든 평타에서 효과가 발동하는 아이템 계열, "skirmisher"=한 번의 큰 all-in이 아닌 짧은 트레이드를 반복해 이기는 챔피언)으로, **Martial Poise (P)**로 정의된다. 모든 평타와 **Pierce (Q)**가 wind-up 도중 짧은 hop을 발동시킨다. 이 hop은 평타를 그대로 기동력으로 바꿔, 가만히 있는 적은 걸어가 잡고 melee 위협에서는 멈추지 않고 빠진다. 대가는 약한 초반(낮은 기본 AD, 무방비)과 마크스맨 중 가장 높은 수준의 skill floor다. hop은 wind-up 프레임마다 이동 클릭으로 직접 지시해야 한다.

게임 플랜은 **Rend (E)** 스택을 중심으로 돌아간다. 평타마다 대상에 창이 박히고, 활성화하면 모두 뽑혀 피해가 누적된다. 탱커에 6-8 스택을 쌓은 뒤 옆의 squishy(딜은 높지만 방어가 낮은 챔피언, 보통 ADC가 해당)에 E를 터뜨리면 한타는 끝난다. **Sentinel (W)**의 Soulbound 메커니즘은 한 게임 내내 한 명의 아군(보통 서포터)과 묶고, **Fate's Call (R)**은 그 아군을 넉백 dash로 쏘아낸다. Thresh나 Leona 같은 engage 서포터와는 Soulbound flank를 보장된 pick(한타 밖에서 고립된 적 한 명을 잡는 것)으로 바꾼다. poke 서포터와는 스케일이 떨어지고, R은 engage 도구가 아닌 panic disengage가 된다.

## 추천 빌드

**시작 아이템:** Doran's Blade + Health Potion 1개. 원거리 라인 상대라도 Doran's Shield는 건너뛴다 — Kalista는 hop spacing을 킬 위협으로 바꾸기 위해 추가 AD가 필수다.

**코어 아이템(순서대로):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 첫 아이템: attack speed (AS) 스파이크, 즉 공격 속도가 처음으로 크게 도약하는 시점이다. 평타마다 마법 피해를 추가해 hop 빈도와 완벽히 시너지가 나고, magic resist는 AP 서포터 + AP 미드 조합 상대에서 빛난다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Press the Attack 스택과 Rend 적용 속도를 위한 추가 공격속도.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — 평타마다 대상의 현재 최대 HP 일정 비율 피해, 더해 슬로우 액티브. melee 거리에서 마무리를 짓고, frontline(한타를 여는 탱커/브루저) 상대 두 번째 아이템으로는 최선이다.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 추가 화살이 대상 두 명에게도 Rend를 적용한다. Kalista의 E를 한타 단위 AOE 스파이크(area of effect: 한 번에 둘 이상에게 영향을 주는 광역 피해)로 바꿔주는 핵심.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 다섯 번째 아이템: 후반 장기전을 위한 AD와 lifesteal 실드.

**상황 아이템:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 2500+ HP 탱커 상대(Sion, Ornn, Cho'Gath). armor pen이 HP 격차에 비례해 증가.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐이 강한 조합 상대(Soraka support, Aatrox, Dr. Mundo). Grievous Wounds로 회복량 절반.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 버스트 암살자 조합 상대(Zed, Talon, Kha'Zix). 부활 효과 덕에 R 후 Soulbound가 dive 직후 후속타를 친다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 대상 hard CC 상대(crowd control: 스턴, 속박, 띄우기처럼 행동을 묶는 효과). Ashe 화살이나 Blitzcrank hook 한 방을 막아 hop 리셋이 유지된다.

**부츠:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 기본. 상대 팀에 hop으로 못 피하는 슬로우가 4개 이상 있으면 ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness**로 교체한다.

**스킬 순서:** **Q** 우선 마스터(주 데미지 + Rend 전이), **E**는 두 번째, **W**는 마지막. **R**은 6, 11, 16 레벨에 한 포인트씩. 1레벨 invade 교전을 대비해 **Q**를 먼저 찍어 안정적인 poke를 확보한다.

**룬:** 주룬 **Precision**에 **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조룬 **Domination**에 **Taste of Blood**, **Relentless Hunter**. 강한 poke 라인 상대(Caitlyn + Lux, Varus + Brand)에는 Domination 대신 Resolve로 **Bone Plating**과 **Second Wind**로 1-6 레벨을 버틴다.

## 주요 매치업

- **Aphelios:** 6레벨 이후 hop spacing이 맞으면 Kalista가 이긴다. Aphelios의 데미지 스파이크는 무기마다 다르니, off-hand가 Severum(lifesteal)이나 Crescendum(turret) 같은 단거리일 때만 step-up한다 — 그때는 그대로 걸어가 잡는다.
- **Caitlyn:** 1-5 레벨 라인전 불리. trap과 650 사거리가 Rend 스택을 위해 앞으로 걸어야 하는 너를 처벌한다. **Bone Plating** 보조로 가고, 서포터에게 trap 한 개 받게 한 뒤, **R** + 정글 갱크로 6레벨을 노린다.
- **Draven:** 라인 불리. **Spinning Axe**가 살아 있는 동안엔 트레이드를 피하라. 가만히 있으면 그의 평타 리셋이 너의 hop을 그대로 킬로 이어버린다. 미니언 평타마다 Rend 1스택씩 쌓고, Q를 맞을 때까지 E를 아끼고, 도끼가 떨어졌을 때 다시 들어간다.
- **Jinx:** 6레벨 전엔 비등, 6레벨 후엔 너가 우위. Kalista의 hop은 Jinx **W** 슬로우를 카운터한다. 투사체가 떨어지기 전에 dash가 시작되기 때문이다. 9레벨 이후 Jinx가 어쩔 수 없이 정리해야 하는 웨이브마다 all-in한다.
- **Vayne:** 25분 이후 스케일링 불리 매치업. 첫 두 아이템 안에 끝내야 한다 — 그녀가 Kraken Slayer 마치기 전에 Wit's End를 띄우는 것이 Kalista가 1v1 정면에서 이기는 유일한 창이다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **Q** + **E** 1포인트로 안정적인 트레이드 패턴 확보 — AA, AA, E로 스택 데미지. 대부분의 라인은 이 교환을 진다.
- **6레벨:** 첫 **Fate's Call**이 Soulbound flank를 연다(상대가 보지 않는 측면에서 들어가는 한타 진입): 서포터를 사이드 부쉬에 두고 상대 서포터에게 R로 던진 뒤, 누적된 Rend로 마무리.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End 완성(~11-13분):** AS 곡선이 폭발한다. 6-9 레벨의 마크스맨 대부분을 걸어가 잡고, 봇 사이드 평타 DPS 1위가 된다.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King 완성(~18-21분):** % 최대 HP on-hit가 frontline을 찢는다. 이 타이밍에 드래곤이나 Rift Herald 한타를 강제하라 — 탱커에 쌓아둔 E가 옆에 선 적 ADC를 그대로 지운다.

## 흔한 실수

- **1-2 스택에 Rend를 chip damage로 사용.** Rend는 스택 수에 따라 강력하게 비례한다. 일찍 E를 남발하면 킬 임계점 전에 창이 비어버린다. 우선순위 대상에 5+ 스택이 쌓일 때까지, 또는 킬이 확정될 때까지 E를 아낀다(킬 시 E 쿨다운이 환급되므로 마무리용 캐스트는 사이클을 다시 시작한다).
- **hop이 이동 명령이라는 것을 잊는다.** Kalista 초보는 평타만 치고 가만히 있는다. hop은 wind-up 프레임 동안 이동 방향을 클릭해야만 발동한다. 라인전에 들어가기 전 커스텀 게임에서 클릭+공격 교차 입력을 연습하라.
- **poke 서포터(Karma, Lulu)와 R을 공격적으로 사용.** 그들의 스킬셋에는 넉백 이후 후속 CC가 없다. R은 panic save로 아껴라 — 서포터를 stasis 처리해 Ashe 화살이나 Blitzcrank hook을 피하고, 그 뒤에 빠진다.
- **AD 위주 조합 상대로 Wit's End를 건너뛴다.** 그래도 Wit's End가 가장 빠른 AS 스파이크이고, 마법 피해는 armor와 무관하게 적용된다. 가장 먼저 사고, AD pen 아이템은 4번째나 5번째 슬롯이다.
- **hop이 0인 상태로 한타에 머무른다.** hop은 평타마다 발동하지만, 사거리에 적이 없으면 그냥 걸어야 한다. 공격 가능한 대상이 사라지는 시점을 체크하고 빠져라 — hop이 없는 Kalista는 dash가 없는 580 MS 마크스맨이고, Caitlyn보다도 기동성이 낮다.

## 고급 팁

**미니언 위에서 Q 리셋으로 정글 탈출** 연습하라. 강가나 tri-bush 근처에서 wall jump를 할 때, 벽 너머의 미니언 웨이브에 **Q (Pierce)**를 미리 입력해라. Q가 미니언을 처치하면 창이 그대로 날아가, 너는 같은 프레임에 벽을 넘어 hop한다. 이 트릭은 강가 동선이 끊긴 갱크에서 빠져나가는 길을 만든다 — hop 프레임이 이동 판정으로 처리되어 벽 hitbox를 무시하기 때문이다. 반응 시간을 줄이려면 **Q** quick-cast 키를 바인딩하라.
