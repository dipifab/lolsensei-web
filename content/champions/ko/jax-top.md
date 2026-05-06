---
title: "Jax Top Build & Guide — Patch 16.9"
slug: "jax-top"
language: "ko"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Jax 탑 라인 가이드. 후반 스케일링 bruiser 빌드, Counter Strike 타이밍, 핵심 매치업 대처, 파워 스파이크, 자주 하는 실수, 마무리 고급 팁까지 한 페이지에 정리한 실전 공략입니다."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "연속 평타가 Jax의 Attack Speed를 점진적으로 올린다. 공격을 멈추면 stack이 리셋된다. 한 번 commit한 뒤에는 계속 때려야 한다."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "유닛 또는 ward를 향한 지정 dash. 대상이 적이면 물리 피해. ward를 활용해 추가 mobility 확보 — 유일한 도주기이자 gap-closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "다음 평타 또는 Leap Strike에 추가 마법 피해와 짧은 슬로우를 부여한다. 마나 비용 낮고 쿨다운 짧아 짧은 trade마다 사용."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "방어 자세: 최대 2초간 들어오는 모든 평타 회피, AOE 피해 감소. 재시전 또는 만료 시 주변 적을 기절. 핵심 스킬."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "패시브: 세 번째 평타마다 추가 마법 피해. 액티브: AOE 폭발과 몇 초간 Armor·Magic Resist 증가. 교전 직전에 항상 켠다."
      dd_spell_id: "JaxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "평타 의존도 높은 상대 (Tryndamere, Yasuo, Kayle) — 고정 평타 피해 감소"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 CC 또는 AP 피해 상대 (Malphite R, Renekton 스턴, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "poke 라인 상대 대체 코어 — 챔피언 첫 평타에 확정 치명타와 회복"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "강한 AD dealer 두 명 상대 (Yasuo + Caitlyn): burst를 느린 출혈(지연 피해)로 전환"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "두 아이템을 맞추고 사이드 라인에서 누구든 듀얼하라. 진입에 Counter Strike 스턴, 첫 평타에 Empower, Relentless Assault stack을 쌓고 — splitpush로 응답을 강요한다."
  weakness: "6 이전엔 진짜 all-in 창이 없다. 원거리 탑은 라인에서 poke로 깎아낸다. Counter Strike가 쿨이거나 빗나가면 방어 수단도 킬 위협도 사라진다."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "dash 없는 느린 melee tank"
      reason: "Counter Strike가 코앞에서 스턴되고, 그들에겐 disengage 수단이 없다. Jax는 그들이 맞는 동안 자유롭게 Relentless Assault를 쌓아 6 이후 모든 장기 trade를 이긴다."
    - examples: ["nasus", "garen", "darius"]
      archetype: "AA cancel 없는 단거리 melee scaler"
      reason: "이들의 피해는 평타나 단거리 스킬에 묶여 있다. Counter Strike가 평타를 회피하고 풀릴 때 터지는 AOE 스턴이 그들의 windup을 무력화한다."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "평타 의존 듀얼리스트"
      reason: "Counter Strike가 그들의 주 피해원을 2초간 통째로 무효화한다. Plated Steelcaps까지 더하면 매치업이 더 기운다 — 너의 자세 안에선 trade를 맞교환할 수 없다."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "kite 도구 보유 원거리 탑"
      reason: "그들은 Leap Strike의 700 사거리 밖에서 poke하고, Counter Strike가 켜지면 빠진다. Jax는 6 이전 sustain이 없어 all-in 사거리에 들어가기도 전에 라인에서 체력이 빠진다."
    - examples: ["fiora", "camille"]
      archetype: "true damage 듀얼리스트, cleanse / 연속 dash 보유"
      reason: "Fiora의 Riposte는 Counter Strike의 스턴을 받아낸다. Camille의 E hookshot은 자기 타이밍에 commit과 disengage를 가능하게 한다. 둘 다 6 이후 동등한 아이템에서 1대1을 이긴다."
    - examples: ["malphite", "rumble"]
      archetype: "melee bruiser 하드 카운터 메이지 (앞설 때)"
      reason: "Malphite 대 Jax는 그의 아이템에 따라 뒤집힌다. Frostfire Gauntlet 이전엔 그가 진다. 두 번째 아이템 후엔 armor stacking과 R 락온이 Jax의 all-in 창을 닫는다."
---

## 개요

Jax는 melee fighter이자 듀얼리스트다. 정체성 자체가 "후반에 1대1의 신으로 성장한다". 6 이전엔 킬 압박이 없다. 그의 trade는 **Counter Strike (E)**로 적의 평타를 회피한 뒤 **Empower (W)**와 **Relentless Assault (Passive)** 평타를 쌓아 받아치는 데 달려 있다. 6 이후 **Grandmaster's Might (R)**가 그를 burst가 있는 bruiser로 바꿔, 사이드 라인에서 거의 모든 melee 탑을 솔로 킬할 수 있게 한다 — 단, 두 아이템까지 무사히 도달했을 때 한정이다.

운영은 인내와 라인 인식이다. 6레벨까지 안전하게 last-hit, **Q-E-W-R**가 모두 정렬되면 한 번의 all-in 창(누군가 죽을 때까지 물러서지 않는 풀커밋 교전)을 노리고, **Blade of The Ruined King**이 완성되면 splitpush(혼자 사이드 라인을 밀어 적팀의 응답을 강요하는 전략)로 전환한다. 한타에선 정면에서 들어가는 frontline이 아니라 몇 초 전에 박아둔 ward에 **Leap Strike**로 합류하는 측면 진입자다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. 피해 받을 때 회복되는 실드 효과가 초반 poke에 가장 싸게 답하는 방법. 2레벨 all-in이 적극적으로 노릴 만한 melee 매치업이 아니라면 Doran's Blade는 거른다.

**코어 아이템 (순서대로):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — 첫 파워 스파이크. on-hit 피해가 적의 HP에 비례해 bruiser·tank 탑을 카운터하기 좋고, 액티브 슬로우는 너를 kite하려는(공격하면서 거리를 벌리려 뒤로 빠지는 동작) 적에게 달라붙게 해준다.
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Jax를 진짜 듀얼리스트로 만드는 두 번째 아이템. Sheen proc(스킬 사용 후 평타에 추가 피해)이 **Q**와 **W**에 그대로 연결되고, 적중 시 이동 속도로 벽을 가로질러 추격할 수 있다.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 생존 레이어. 체력이 ~40% 아래로 떨어질 때 실드가 발동(HP-threshold passive — HP가 낮은 임계값을 통과할 때 켜지는 패시브)해, **Relentless Assault** stack을 쌓아 교전을 뒤집는 데 필요한 몇 초를 벌어준다.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — AP 피해 상대 네 번째 아이템. 마법 저항과 함께, 이미 높은 attack speed에 비례해 들어가는 on-hit 마법 피해를 더한다.

**상황 아이템:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — poke가 강한 라인 상대 대체 코어. 챔피언 첫 평타 확정 치명타와 회복으로 Jax에게 부족한 sustain(교전 중 회복)을 챙겨준다.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 강한 물리 dealer가 둘 있는 조합 상대(예: Yasuo + Caitlyn). 물리 burst를 느린 출혈(즉시 들어오는 피해 대신 다음 몇 초에 걸쳐 분산되는 피해)로 바꿔, 죽기 전에 Relentless Assault를 쌓을 시간을 만든다.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 평타 의존도 높은 라인용 신발 (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 강한 CC 또는 AP burst 상대 신발 (Malphite R, Rumble, Renekton 스턴).

**신발:** 평타 탑 상대엔 기본 **Plated Steelcaps**. 적팀에 강한 CC가 2개 이상이거나 강한 AP가 있으면 **Mercury's Treads**로 교체.

**스킬 트리:** **E** (Counter Strike)부터 마스터 — 회피 시간이 랭크에 따라 늘고 쿨다운은 17초에서 9초로 줄어든다. **Q** (Leap Strike)를 두 번째로 올려 라인 정리와 gap-close, **W**는 마지막. **R**은 6, 11, 16에서 찍는다.

**룬:** 주문 트리 **Precision**에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Jax에게 Conqueror가 빨리 쌓이는 이유는 Relentless Assault의 연속 평타가 각각 따로 카운트되기 때문이다. 보조 트리 **Resolve**에 **Bone Plating**과 **Revitalize**로 초반 trade 생존력 확보.

## 주요 매치업

- **Darius:** 6 이전 동등, 이후 유리. **Counter Strike**는 **Q** 바깥 고리(체력을 회복시키는 도끼날 고리)에 맞춰 아낀다. 회복 영역에 그가 맞으면 trade를 잃는다. 빗나가면 스턴을 내고 **W**로 강화한 평타까지 챙긴 뒤 빠질 수 있다.
- **Camille:** 불리 라인. 그녀의 **E** hookshot이 너의 스턴 타이밍을 회피하고, **W** 흡혈은 Relentless Assault를 버텨낸다. 타워 근처에서 wave를 얼리고(라인을 자기 쪽에 묶어 상대의 last-hit을 막음) 정글 도움을 기다린다.
- **Malphite:** 초반 동등, Frostfire / Sunfire를 맞추면 6 이후 불리. 그가 두 아이템 갖기 전 3레벨에 all-in을 시도한다. armor가 쌓이면 **W**와 **R**의 마법 피해가 물리 평타보다 더 중요해진다.
- **Teemo:** 불리, 전형적인 원거리 탑 카운터. 첫 아이템으로 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, 시작은 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**이 나오기 전까진 타워 아래에서 farm. 적 정글이 봇 사이드일 때만 킬을 노린다.
- **Renekton:** 1-5레벨 불리, 6 이후 동등. **Q** sustain과 **W** 스턴으로 너의 **R** 스파이크 전에 trade에서 앞선다. 수동적으로 플레이하고, 그가 **W**를 commit할 때 **E**를 떨어뜨리고, 타워 근처에서 wave를 얼린다(라인을 자기 쪽에 묶어 상대의 last-hit을 막음).

## 파워 스파이크 및 승리 조건

- **3레벨:** 첫 짧은 trade 창. **E + W + Q**가 다 열려 **E**로 적의 평타 두 대를 회피하고 **Empower + Q**로 받아쳐 이득을 내고 빠질 수 있다. 평타 3대를 넘어 연장하지 않는다 — 스턴이 쿨다운이다.
- **6레벨:** **Grandmaster's Might** 해금. Armor + MR 액티브가 근접 all-in을 유리하게 만든다. **R**은 항상 commit 전에 누른다. 마무리용으로 아끼지 않는다.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King 완성(~ 11-13분):** 첫 듀얼 스파이크. splitpush(혼자 사이드 라인을 밀어 적팀의 응답을 강요하는 전략)로 전환할 수 있고, 정글 도움 없이도 1대1을 거는 모든 melee 탑을 잡을 수 있다.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 완성(~ 19-22분):** 두 아이템 스파이크. Sheen proc이 모든 스킬에 묻고, 측면 진입에서 squishy 한 명을 원샷할 수 있는 burst가 처음으로 갖춰진다.

## 흔한 실수

- **라인 정리용으로 Counter Strike를 쿨마다 쓰는 것.** **E**는 너의 유일한 방어 수단이다. 미니언에 태우면 갱크에 도주기와 스턴 둘 다 없이 노출된다. trade하거나 갱크가 임박했을 때만 쓴다.
- **스턴을 위한 E 재시전을 잊는 것.** **Counter Strike**는 시전이 두 단계다. 첫 단계는 회피 자세 진입, 두 번째 단계는 AOE 스턴 발동. 초보는 자동 만료에 맡긴다. 수동 재시전은 적이 commit하는 정확한 프레임에 스턴을 맞추게 해준다.
- **6 이전 bruiser 상대 all-in.** Jax는 **R** 이전엔 킬 압박이 없다. 4레벨에 Darius나 Renekton과 싸우면 first blood를 헌납한다. 패시브 경험치를 쌓고, 밀리면 wave를 얼리고, **R**을 기다린다.
- **TP와 시야 없는 splitpush.** **Blade of The Ruined King**이 나오면 splitpush를 가고 싶어지지만, 적팀이 4명이 로테이션할 때 Teleport(베이스나 아군 옆으로 순간이동시키는 소환사 주문)가 꺼져 있으면 너의 팀이 4대4를 진다. 사이드로 빠지기 전엔 항상 팀의 귀환 타이머를 확인한다.
- **도주 중 적에게 Leap Strike.** **Q**는 ward와 미니언도 잡을 수 있다. 도망치는 중이라면 뒤쪽 미니언이나 자기 trinket ward로 Q를 쏜다. 추격하는 적에게 쏘면 그 적에게 다시 텔레포트되는 셈이다.

## 고급 팁

**Counter Strike**를 자동 만료시키지 말고 dash 도중에 활성해, 적의 commit 프레임에 스턴을 맞춘다. 요령: **E**를 켜고 적에게 걸어가, 핵심 skillshot이나 dash(Renekton **W**, Darius **W**, Camille **E**)를 그가 던지길 기다렸다가, 그가 애니메이션에 묶이는 순간 **E**를 재시전한다. 스턴은 시전 중반의 그를 잡고, 응답 없이 Relentless Assault를 쌓을 수 있는 2초의 보장된 창을 준다. Practice Tool에서 평타 켜진 더미 상대로 연습하면 열 번 안에 리듬이 잡힌다.
