---
title: "Camille Top Build & Guide — Patch 16.9"
slug: "camille-top"
language: "ko"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Camille 탑 라인 완전 공략. 시작 아이템부터 파이터 코어 빌드 순서, Precision 룬, 주요 매치업 대처, 파워 스파이크와 사이드 운영, 흔한 실수와 Flash → E 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "챔피언 평타마다 Camille 최대 HP의 일정 비율에 해당하는 보호막이 생기며, 대상의 피해 유형(물리 또는 마법)에 맞춰 적용된다."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "다음 평타가 강화되어 추가 피해와 이동 속도를 얻는다. 몇 초 안에 재시전하면 두 번째 타격이 나가며, 두 시전 사이를 기다릴수록 추가 피해가 커지고 true damage가 붙는다."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "짧은 딜레이 후 부채꼴로 발사. 바깥쪽 절반은 적을 둔화시키고 추가 피해를 주며, 잃은 HP에 비례해 Camille을 회복시킨다."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "벽으로 돌진한 뒤 튕겨 나오며 착지 지점의 챔피언을 공중에 띄운다. 주된 engage·disengage 도구 — 사거리 안에 벽이 필요하다."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "지정한 챔피언에게 돌진해 원형 결투장 안에 가둔다. 아군과 대상은 들어오거나 나갈 수 없으며, 대상에게 가하는 평타는 추가 마법 피해를 입힌다."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "duelist 매치업 (Fiora, Jax, Irelia)에서 첫 아이템으로 교체. Spellblade 리셋이 Q1-AA-Q2 trade를 Stridebreaker보다 더 잘 받쳐준다"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 마법 burst 상대 (Vladimir, Rumble, Cassiopeia): 50% HP 이하의 마법 보호막으로 첫 쿨다운 회전을 버틴다"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "상대 팀이 방어구 다중 누적 (Plated Steelcaps + Randuin's 등 frontline): armor shred로 아군 물리 피해도 함께 증폭"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "유리하고 사이드를 splitpush 할 때 (혼자 밀어 대응 강요): 타워 shred와 아군 없을 때 추가 HP"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 AP 또는 hard CC 3개 이상 상대 (E를 공중에서 끊거나 W 차징을 막는 stun, root, taunt)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "스노우볼 굴리는 AD 어쌔신 (Zed, Talon, Kha'Zix) 상대: 두 번째 생명으로 engage 중 죽어도 R 콤보를 마무리"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "벽에서 E로 engage해 우선 캐리를 R 안에 가두고 Q1-AA-W-Q2로 peel이 도착하기 전에 burst. 사이드 라인에서는 Q 리셋과 W 회복으로 1v1을 이긴다."
  weakness: "벽이 없는 열린 라인은 E를 무력화. R 쿨다운이 길어 그 사이엔 그냥 단단한 평타꾼일 뿐. Hard CC가 E의 비행과 W 차징을 끊는다."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Precision: Conqueror는 W 슬로우, Q1, AA, Q2에 빠르게 스택이 쌓이고, R로 Camille이 강제하는 긴 fight를 보상한다. Triumph는 takedown 시 HP를 환급, Legend: Alacrity는 Q 리셋과 R 평타 속도를 올리며, Coup de Grace는 40% HP 이하에서 지연 Q2 true damage와 맞물린다."
    secondary_rationale: "보조 트리 Resolve: Bone Plating은 Darius / Renekton / Pantheon의 초반 all-in을 완화하고, Overgrowth는 패시브 보호막의 기준이 되는 HP 풀을 키운다."
    secondary_alternative: "원거리 poke 탑 상대 (Quinn, Teemo, Vayne, Gnar)에서는 Resolve 대신 Inspiration으로 Magical Footwear (12분경 신발 무료) + Cosmic Insight (Flash와 R 가동률 증가)를 든다."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "기동성 없는 근접 bruiser"
      reason: "E + R로 melee 사거리에 묶어버리면 답이 없다. Q 리셋과 W 슬로우로 R 결투장 안에서 kite (공격하면서 뒤로 빠지기) 하며 그들의 스택과 쿨다운이 빠지길 기다린다."
    - examples: ["vladimir", "rumble"]
      archetype: "탑에 서는 squishy 메이지"
      reason: "R가 들어가면 풀, 대시, 탈출 모두 불가능. Q2의 true damage가 보호막과 회복 지속력을 뚫고 체력을 깎는다."
    - examples: ["sion", "chogath"]
      archetype: "후반 scaling 탱커"
      reason: "Q2 true damage와 Sundered Sky burst가 거대한 HP 풀을 chunk 한다. R로 사이드 라인 fight 도중 자기 팀으로 도망쳐 peel 받는 것을 막는다."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "kite 도구가 있는 원거리 탑"
      reason: "Camille에게 원거리 답이 없는 동안 그들은 commit 없이 poke (원거리 견제 피해) 만 한다. E는 벽이 필요한데, 상대는 그 벽에서 그냥 걸어 빠진다."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "hard CC 프론트라인 탱커"
      reason: "이들의 crowd control은 E의 비행, W 차징, R의 lock-on 대시를 모두 끊는다. stun이 먼저 적중하는 모든 all-in (킬까지 풀 commit fight) 에서 Camille은 패배한다."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "초반 all-in이 강한 근접"
      reason: "Camille이 E + W를 세팅하기 전에 burst (1-2초 안에 피해 집중) 가 들어오고, 3레벨 이전 trade pattern을 그대로 압도한다."
---

## 개요

Camille은 근접 fighter / diver (적 후방으로 뛰어들어 우선 대상을 죽이는 챔피언) 다. 벽에서 dash해 단일 캐리(고화력 후방 대상 — 보통 ADC, 즉 봇 라인 마크스맨이나 미드 라이너) 를 잡고, fight를 자신의 **R** 결투장 안 1v1 로 바꿔놓는다. 그녀의 키트는 긴 trade (양쪽이 주고받는 피해 교환) 를 보상한다 — **Q** 는 두 번 시전하는 강화 평타 (= AA, 일반 공격) 이며 두 번째에 지연 true damage (방어구와 마법 저항 모두 무시하는 피해) 가 붙고, **W** 는 바깥 절반이 챔피언을 적중하면 회복하며, 패시브 보호막은 평타마다 들어오는 동일 유형(물리 또는 마법) 의 피해를 줄여준다. 주 피해는 물리 (AD = Attack Damage) 지만 **R** 이 추가 마법 피해 (AP = Ability Power 계수) 를 더해 damage_type은 mixed.

한 줄 게임 플랜: **R** 을 기다린다 → 사이드 라인 또는 강 부쉬로 이동 → 벽에서 dash 해 우선 대상에게 붙는다 → **Q1 → AA → W (바깥 절반) → Q2** 로 burst, 그 사이 나머지 fight는 결투장 밖에 갇혀 있다. 쿨이 빠졌을 땐 미니언 뒤에서 안전하게 farm 하며 **E** 가 잡을 벽이 없는 열린 라인은 피한다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. 원거리 poke 매치업(Quinn, Teemo, Vayne) 에서만 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (HP 더 많고 들어오는 피해 감소, AD 없음) 으로 교체한다.

**코어 아이템 (구매 순서):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 첫 아이템 러시. 액티브 dash + 슬로우가 **W** 바깥 절반과 자연스럽게 이어지고, 기본 Camille 키트에 부족한 waveclear 를 채워준다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 위주 라인 (물리 피해 챔피언 다수) 과 AD 정글러 상대. 평타 피해 감소가 핵심이다 — Camille을 위협하는 대부분이 물리 bruiser (HP 높고 지속 피해를 내는 중거리 파이터) 이기 때문.
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst 스파이크. 챔피언에 가하는 첫 평타가 치명타 + 회복으로 들어오며, 모든 all-in (킬까지 풀 commit fight) 의 시작인 **Q1** 과 깔끔하게 맞물린다.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 생존 스파이크. Tenacity (stun, 슬로우 등 crowd control = CC 지속시간 감소) 와 저체력에서 발동되는 보호막 — Camille은 자주 적 백 라인 (자기 캐리를 보호 = peel 하는 라인) 에 dive 한다.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 안티 burst (1-2초에 압축된 피해 덩어리). 블리드 메커니즘 (피격 후 피해를 몇 초에 걸쳐 분산) 으로 한 방에 죽지 않고 반응할 시간이 생긴다.

**상황별 아이템:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — duelist 매치업 (Fiora, Jax, Irelia) 에서 첫 아이템으로 교체. Spellblade (스킬 시전 후 다음 평타에 추가 피해와 AA 타이머 리셋이 붙는 패시브) 가 **Q1 → AA → Q2** trade 를 Stridebreaker 보다 더 잘 지속시킨다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 마법 burst 상대 (Vladimir, Rumble, Cassiopeia, AP Kayle).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 적팀이 방어구를 누적할 때 (여러 챔피언이 Plated Steelcaps, Randuin's 같은 방어구 아이템을 사는 경우; "stack" = 여러 아이템에 같은 종류의 능력치를 모은다). Armor shred = 매 타격마다 대상의 방어구가 몇 초 동안 깎이며, 우리 팀 물리 피해도 함께 강해진다.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 유리하고 splitpush (혼자 사이드를 밀어 적의 대응을 강요) 할 때. Tower shred = 타워에 추가 피해; 아군이 가까이 없을 때 추가 능력치도 붙는다.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 강한 AP 또는 hard CC 3개 이상 상대 시 신발 교체.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 스노우볼 (초반 우위가 킬마다 커지는 흐름) 굴리는 AD 어쌔신 (Zed, Talon, Kha'Zix) 상대.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 가 기본. 강한 AP / CC 상대엔 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 마스터 순서:** **Q** 선마 (레벨마다 피해 증가, CD = 쿨다운 감소), **E** 후마, **W** 마지막. **R** 은 6, 11, 16 레벨. 1-3 레벨: **W → E → Q** — 먼저 sustain, 다음 engage, 마지막에 데미지 스테로이드. 아래 "Q 리셋" = **Q1 → AA → Q2 → AA**: 매 Q 시전이 AA 타이머를 리셋하므로 바로 추가 평타가 나간다.

**룬:** 주문 트리 **Precision** 에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. 보조 **Resolve** 에 **Bone Plating** 과 **Overgrowth**. Stat shards (룬 페이지 하단의 작은 보너스 능력치 세 개): Attack Speed, Adaptive Force, Health Scaling.

## 주요 매치업

- **Darius:** 초반엔 HP로 버텨라 (피해를 그냥 흡수하고 CS만큼은 동률 유지). 3레벨 이전 직선 trade에선 그가 outduel 한다 — **Q** 가 준비된 3 레벨까지 기다려라. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** 가 나오면 **W** 슬로우 + **Q** 리셋으로 춤을 춰라 (그의 Hemorrhage 패시브는 너에게 최대 5스택까지 출혈을 쌓고, Darius를 잡으면 그의 ult 스택이 리셋되니 절대 죽으면 안 된다).
- **Fiora:** 미러 duelist 매치업. 직선으로 trade 해서 그녀가 너의 옆으로 돌아 수직 Vital (Fiora 패시브가 너의 한쪽을 표시 — 그쪽을 맞히면 true damage + 회복) 을 잡지 못하게 하라. 6레벨에 그녀의 **R** 과 너의 **R** 은 서로를 무력화 — 누가 먼저 engage 하느냐는 포지셔닝이 결정한다.
- **Renekton:** 3레벨 이전과 그의 2레벨 스파이크 (W + Q) 에서 라인을 진다. **E** 를 그의 all-in 용으로 아껴라. 6 에서 그가 스노우볼하지 않았다면 권력이 뒤집힌다 — 너의 **R** 이 그를 Fury (분노 자원) 를 쌓을 수 있는 사거리 밖으로 끌고 나간다.
- **Jax:** 6 이후 나쁜 매치업. 그의 E 가 너의 **Q2** 와 **W** windup (스킬이 적중하기 전 짧은 딜레이, 그 사이 캔슬 가능) 을 카운터한다. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** 를 먼저 사고, 그의 카운터 스트라이크가 쿨이 아닌 한 melee 에서 절대 **E** 하지 마라.
- **Quinn / Teemo:** 원거리 탑. 초반 라인을 처참하게 진다. ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** 대신 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 로 시작, 라인을 freeze (적 미니언이 더 많아 라인이 너의 타워 쪽에 머물게 두기) 하고 **Q + E** 가 빠진 상태로는 절대 push 하지 마라. gank (정글러가 미드라인에 와서 2v1을 만든다) 를 기다려 적 타워의 plate (외곽 타워에 14분간 붙어 있는 5개의 보너스 골드 조각) 를 깎아라.

## 파워 스파이크 및 승리 조건

- **2레벨 (W + E):** 첫 all-in 윈도우. **W** 슬로우 → **AA** → **E** knock-up (착지 시 짧은 공중 stun) 으로 패시브가 두 번 발동되는 풀 trade.
- **6레벨 (R):** 한 번의 쿨다운 동안 너의 engage는 막을 수 없다. 벽에서 **E** 와 **R** 을 결합해 누구든 melee 에 가둬라; fight 전에 정글러에게 알려서 결투장 안에 함께 들어오게 하라.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker 완성 (~13-14 분):** Waveclear 가 열린다. trade pattern이 일정해진다 — 액티브 슬로우 → **W** 바깥 절반 → **Q1** → **AA** → **Q2** 로 상대 HP의 절반쯤을 chunk.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 완성 (~20-24 분):** 첫 타격 회복 덕분에 사이드 라인 skirmish (작은 1v1 또는 2v2 교전) 에 훨씬 공격적으로 commit 가능. 이때부터 오브젝트를 위해 splitpush 시작.

## 흔한 실수

- **라인에서 poke (원거리 견제 피해) 용으로 E 낭비.** **E** 는 적 정글러가 gank 올 때 너의 유일한 탈출구다. 50 의 chip damage 가 아니라 engage commit 또는 gank 회피용으로 던져라. **E** 없는 Flash 없는 Camille은 어떤 2인 dive (너의 타워 아래에서 일어나는 협동 킬 시도) 에도 죽는다.
- **W 부채꼴 안쪽에 서기.** **W** 의 안쪽 절반은 피해가 약하고 슬로우 / 회복이 없다 — 보상은 전부 바깥 절반에 있다. 시전 도중 위치를 옮겨서 적이 너에게 붙은 게 아니라 바깥 링에 들어가게 하라.
- **상대가 hard CC 가 있을 때 R 없이 engage.** **R** 은 너의 "no Flash escape" 도구 — 한 번 잠그면 대상은 결투장 밖으로 Flash 할 수 없다. **R** 없는 Camille이 peel 준비된 (자기 캐리를 지킬 준비가 된 아군) 팀에 dive 하면 stun 사슬 (CC 가 끊김 없이 이어져 반응 불가) 에 죽는다.
- **Q1 → Q2 를 연속으로 발사.** **Q1** 과 **Q2** 사이를 길게 둘수록 (최대 ~2초) **Q2** 의 추가 피해와 true damage 비중이 커진다. 사이에 **AA** + **W** 를 끼워 넣어라 — 너의 burst (1-2초에 집중된 선딜 피해) 의 대부분이 거기서 나온다.

## 고급 팁

**Flash → E** 리다이렉트를 연습하라: 사거리 안에 쓸 만한 벽이 없다면, **E** 도중에 **Flash** (D 또는 F 의 ~400 단위 단거리 점멸 summoner spell) 를 사용해 벽 위로 순간이동해 dash 방향을 바꿀 수 있다. 이 한 번의 summoner spell 비용으로 Camille 은 "벽이 필요하다" 에서 "어디서나 engage 한다" 로 바뀐다. 이 콤보는 오브젝트 핏 (Drake와 Baron 주변의 벽으로 둘러싸인 결투장) 과 벽이 600+ 단위 떨어진 강 한복판의 열린 fight 에서 가장 유용하다 — Flash 가 그 간격을 메워 우선 대상에게 **E** knock-up (짧은 공중 stun) 을 그대로 꽂을 수 있게 해준다.
