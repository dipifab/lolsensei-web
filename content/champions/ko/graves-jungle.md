---
title: "Graves Jungle Build & Guide — Patch 16.9"
slug: "graves-jungle"
language: "ko"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Graves 정글 공략. 스타팅 아이템, lethality 빌드 경로, 핵심 매치업, 파워 스파이크 타이밍, 라인 운영에서 자주 하는 실수와 해결책, 그리고 E-buffer-roll 같은 고급 콤보 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "재장전이 있는 샷건 메커니즘. 한 발마다 4개의 펠릿이 부채꼴로 발사되며 미니언을 관통하지 않음. 챔피언이 아닌 대상은 다중 명중 시 밀려남."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "직선 탄환이 2초 후 폭발하거나 지형에 닿으면 즉시 폭발 — 벽에 튕김. 정글 클리어와 angle-shot의 핵심 도구."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "시야를 차단하고 초기 충돌 시 적을 둔화시키는 연막탄. disengage, 와드 부정, 갱킹 동선 가리기에 사용."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "짧은 전방 대시와 방어구 버프. 챔피언 쪽으로 갈수록 스택. 평타로 쿨다운 감소, 버프 갱신. 2회 충전."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "장거리 폭발 사격: 첫 챔피언을 맞히고 그 뒤로 부채꼴 폭발. 6/11/16레벨 burst spike."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 hard CC 상대 (Malzahar R, Skarner R, Warwick R) — 스펠 실드가 lock-on 차단"
    - dd_id: "6676"
      name: "The Collector"
      against: "앞서 있고 적이 초반에 방어구를 쌓지 않을 때 — 5% HP 이하 처형으로 격차 마무리"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 버스트 상대 (Diana, Syndra, Lux mid) — 라이프라인 실드가 원샷을 생존 트레이드로 전환"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "강한 AD 딜러 둘 (예: Yasuo + Caitlyn) — 출혈로 피해 분산, 즉사 방지"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "hard CC 챔피언 3명 이상 (예: Leona + Lissandra + Sejuani) — 강인함이 기절·속박 단축"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "14분 전에 invade와 갱으로 lethality 스노우볼. Eclipse 완성 후 모든 오브젝트 경합 — 샷건이 두 번에 squishy를 녹이고 E가 트레이드 창을 되돌려줌."
  weakness: "초반 마나 부족. 샷건 재장전 창이 욕심 많은 포지셔닝을 처벌하고, E의 방어구 버프 외 안전장치가 없어 hard CC 연계에 즉사함."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 개요

Graves는 봇 라인이 아니라 정글에서 사는 marksman이다. 샷건 평타와 **Quickdraw (E)**에 내장된 방어구 버프 덕분에 탱커나 brawler와도 정면으로 트레이드할 수 있고, lethality로 squishy를 폭딜할 능력도 잃지 않는다. 키트 전체가 **템포** 중심이다 — 빠른 클리어, 쿨마다 invade, 정글 priority를 킬로 환산해 적 carry가 스케일하기 전에 게임을 끝낸다.

게임 플랜은 단순하다. 처음 8분 동안 너는 맵에서 가장 강한 듀얼리스트이니 그걸 활용해라. 깔끔하게 power-farm으로 클리어하고, 미니맵을 보고, **Flash**가 빠졌거나 HP가 낮은 라인으로 들어가라. Eclipse 후 오브젝트 경합, 3코어 후에는 flank에서 backline을 지우는 teamfight skirmisher가 된다 — 단, 후반에 splitpush는 **금지**다. 30분에 혼자 잡힌 Graves는 CC 한 사이클이면 죽는다.

## 추천 빌드

**스타팅 아이템:** Smite + **Hailblade**로 더 빠른 클리어와 **R** AOE 데미지 확보, 그리고 **Refillable Potion**. Emberknife는 팀이 적 레드 사이드 카정 압박이 필요한 경우에만 (클리어 느림, sustain 증가).

**코어 아이템 (순서):**

1. **Eclipse** — burst+실드+omnivamp, skirmish 정글러에게 가장 깔끔한 첫 코어. 두 번 적중 후 실드가 발동해서 샷건 리듬과 맞물린다.
2. **Plated Steelcaps** vs AD 위주 팀 / **Mercury's Treads** vs 3+ hard CC. 기본은 Plated.
3. **Youmuu's Ghostblade** — 이동속도 액티브 + lethality, gap-close와 갱 마무리 도구.
4. **Serylda's Grudge** — 후반 적이 방어구를 쌓을 때를 위한 armor pen 스케일링; 피해 입은 대상 둔화로 사거리 유지.

**상황별 아이템:**

- **Edge of Night** — 단일 대상 lock-on 궁극기 상대 (Malzahar, Skarner, Warwick).
- **The Collector** — 앞서 있고 squishy 처형 압박을 원할 때.
- **Maw of Malmortius** — 강한 AP 버스트 상대 (Diana, Syndra, Lux mid).
- **Death's Dance** — 강한 물리 딜러 둘이 있는 팀 상대 (예: Yasuo + Caitlyn). 받은 피해가 즉시가 아니라 느린 출혈로 분산된다.
- **Bloodthirster** — 후반에 실드와 lifesteal 내장된 다섯 번째 딜 아이템이 필요할 때.

**신발:** Plated Steelcaps 기본. Berserker's Greaves는 적 팀에 CC 위협이 0이고 attack speed 스케일링이 특별히 필요할 때만 — Graves에게는 niche pick.

**스킬 마스터 순서:** **Q** 우선 (클리어와 데미지), **E** 다음 (랭크당 CD 감소로 더 많은 dash), **W** 마지막 (둔화는 1랭크부터 충분히 스케일). **R**은 6, 11, 16레벨.

**룬:** 주특성 **Domination**에 **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. 부특성은 스노우볼 압박을 위한 **Precision**의 **Triumph** + **Coup de Grace**, 또는 정글에서 poke를 받을 것 같으면 **Resolve**의 **Second Wind** + **Revitalize**.

## 주요 매치업

- **Hecarim:** 3코어 후 너를 추월하지만 6레벨 전에는 E-roll로 평타 간격을 유지하면 skirmish에서 진다. 9분 전에 처벌하고 그 뒤로는 물러서라 — 첫 코어 이후 1대1 금지.
- **Lee Sin:** 거울 같은 템포 매치업. 둘 다 첫 6레벨에서 강하니 갱 더 많이 성공시키는 쪽이 이긴다. 그의 **Q** 쿨다운과 W-jump 창을 트랙하라; Q가 빠졌으면 너의 샷건이 트레이드를 압도한다.
- **Master Yi:** 6레벨 + 첫 코어 전에 반드시 잡아야 한다. 그의 **Q** 활성 중 **W**를 그 위에 깔면 시야가 막혀 lock이 풀린다 — 훈련 모드에서 반사로 나올 때까지 연습해라.
- **Vi:** 탱키하고 갱 위주. E 충전이 있으면 긴 skirmish에서 진다; 그녀의 **Q**에 공중에서 잡히지 마라 — 적 팀 입장에서 보장된 all-in이다.
- **Diana:** 6레벨 후 무섭게 스노우볼한다. 그녀의 **R** windup용으로 **W**를 아껴라 (engage를 끊진 못하지만 충돌 시 둔화로 commit이 길어져 팀이 peel할 시간이 생긴다). 두 번째 딜 코어로 **Maw of Malmortius**를 가라.

## 파워 스파이크 및 승리 조건

- **3레벨:** 풀 키트 해금. 갱 패턴은 **E로 사거리 진입 -> 적 뒤 벽에 Q -> 평타 리셋 -> 후퇴 경로에 W 둔화**다. Hail of Blades 룬과 함께라면 60% HP에 Flash 없는 squishy는 무조건 킬.
- **6레벨:** **Collateral Damage**로 장거리 처형 해금. 탄환이 첫 챔피언을 맞히고 뒤로 부채꼴 폭발 — 적을 벽에 flash로 박아넣으면 직격과 부채꼴 데미지를 모두 보장한다.
- **Eclipse 타이밍 (~9분):** 모든 오브젝트 경합 파이트를 이긴다. 이 창에서 Scuttle, Drake, Voidgrubs에서 파이트를 강제하라 — 12분이 지나면 스케일링 정글러(Hecarim, Master Yi)가 너의 페이스를 따라잡기 시작한다.
- **3코어 (~22분):** teamfight flanker가 된다. 너의 일은 적 backline (탱커에서 가장 먼 squishy carry)을 flank해서 반응 전에 폭딜하는 것. 정면에서는 절대 engage하지 마라.

## 흔한 실수

- **클리어 도중 도주에 E 충전 낭비.** **E**는 2회 충전이고 평타 칠 때마다 쿨다운이 줄어든다. 단일 스킬샷 회피에 두 번 다 쓰면 다음 12초 동안 gap-close가 사라진다. 최소 한 번은 남겨라.
- **실수로 뒤 벽에 Q.** **End of the Line**은 지형에 닿으면 즉시 폭발한다. 벽을 등지고 Q를 쏘면 탄환이 뒤에서 폭발해 데미지가 0이 된다. 시전 전에 항상 시야 방향을 확인해라.
- **sustain 목적의 자기 자신에게 Smoke Screen.** **W**는 회복하지 않는다. 가치는 충돌 시 둔화 — 적 carry의 후퇴 경로에 던져라, 너 위에 던지지 마라.
- **세팅 없이 풀 사거리 R.** 장거리 탄환은 회피된다. **R**은 Flash 후 근접 거리에서 쓰거나, 적이 이미 Flash를 commit한 뒤 finisher로 미리 쏴라. 적이 fog 안을 일직선으로 걸어오는 게 아니라면 R로 파이트를 열지 마라.
- **30분에 splitpush.** 후반 Graves는 Skarner/Warwick/Malzahar의 R이 적중하면 escape가 없다. 25분 이후 팀과 모이고, 1대1로 사이드를 가지 말고 teamfight 거리에서 flank를 노려라.

## 고급 팁

**E-buffer-roll** 테크닉: Q 시전 모션이나 평타 windup 중간에 **Quickdraw** 입력을 큐에 넣어라. windup이 끝나는 순간 dash가 발동하므로 평타/Q 데미지를 입히면서 **동시에** 같은 애니메이션 사이클 안에서 위치를 바꾼다 — 회피·추격 중에도 DPS uptime을 유지한다. 이 트릭 없이는 움직일 수 없는 회복 창이 약 0.4초인데, buffer roll로 거의 0이 된다. 훈련 모드 더미에서 stutter-step 리듬이 평타 → E → 평타로 끊김 없이 나올 때까지 반복해라.
