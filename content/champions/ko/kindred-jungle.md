---
title: "Kindred Jungle Build & Guide — Patch 16.9"
slug: "kindred-jungle"
language: "ko"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 패치 16.9 Kindred 정글 가이드. Mark 사냥 운영, on-hit 빌드 순서, 핵심 매치업, 파워 스파이크 타이밍, 흔한 실수, 마지막 고급 팁까지 한 페이지 정리."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "4분마다 무작위 적(champion 또는 jungle camp)에게 Mark가 생성. 처치 시 영구 stack: AS, AD, 평타 사거리 보너스. 챔피언의 핵심 운영."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "짧은 dash + 가까운 적에게 빠른 평타 3연타. 평타 타이머 리셋. 정글 클리어, 위치 잡기, 한타 평타 연계 버퍼링용."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf가 ~8초 동안 지역 공격, AS 부여 및 camp 시야 노출. Lamb은 이동·공격으로 stack 축적, 풀차지 평타가 자신을 회복. 클리어와 sustain용 토글."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "대상에게 슬로우 거는 skillshot. 평타 4번 적중 후 다음 공격이 잃은 체력 비례 추가 피해. 50% HP 미만 적 처형용 버스트 도구."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "성역 지역 생성: 안에 있는 모든 유닛(아군과 적군 모두)이 지속 시간 동안 1 HP 미만으로 떨어지지 않고, 종료 시 회복. 반응형 save 도구. 절대 미리 깔지 않는다."
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 lock-on 궁(Malzahar R, Skarner R, Warwick R) 상대 — spell shield가 시전을 막음"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "hard CC 연계(Leona + Lissandra, Sett R + Ashe R) 상대 — 액티브 cleanse로 위치 재정비"
    - dd_id: "6676"
      name: "The Collector"
      against: "유리할 때, 상대가 armor 아이템 적을 때 — 5% HP 미만 처형으로 격차 마무리"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "회복 위주 조합(Aatrox, Soraka, Dr. Mundo) 상대 — grievous wounds로 sustain 약 절반"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "hard CC 3명 이상(Leona + Lissandra + Sejuani) — tenacity로 stun과 root 단축"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Mark을 일찍 쌓는다. 완료한 Mark마다 영구 AS + AD + 사거리 — 격차가 snowball(킬 → 스탯 → 더 많은 킬)되어 모든 brawler를 out-kite하는 3코어 flanker가 된다."
  weakness: "Squishy하고 hard CC 없음, R은 긴 쿨다운 반응형. 2-3레벨 invade하는 hard CC 정글러(Lee Sin, Xin Zhao, Elise)는 Mark 한 개 쌓기 전에 죽임; on-hit 완화 탱커는 DPS를 무시."
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
    primary_rationale: "Domination + Hail of Blades는 첫 평타 3번을 최고 속도로 발사 — Mounting Dread 4타 체인을 완성하기에 정확히 필요한 평타다. Sudden Impact는 Q dash에 lethality 보상, Sixth Sense는 적 ward 노출, Treasure Hunter는 mark 처치를 추가 골드로."
    secondary_rationale: "Precision 보조: Triumph는 takedown 시 HP 환급(4타 commit 후 HP가 낮음), Coup de Grace는 40% HP 미만 8% 추가 피해 — E의 잃은 체력 비례 4타와 시너지."
    secondary_alternative: "AP burst 조합(Diana jungle + Syndra mid + Brand support) 상대로는 Precision → Resolve 변경, Second Wind + Revitalize로 정글 sustain과 R 회복량 강화."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "초반이 약한 후반 캐리형 정글러·캐리"
      reason: "그들은 3코어까지 farm을 원함; 너는 그들의 정글에서 mark 사냥하고 초반 camp을 bully할 수 있다. Mark 하나마다 그들의 spike 전에 격차가 벌어진다."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "이동기 없는 squishy backline marksman"
      reason: "Cross-map gank: E의 슬로우가 4타 체인과 Mounting Dread 잃은 체력 발동에 충분한 시간을 만들고, 그들에겐 체인을 끊을 dash가 없다."
    - examples: ["maokai", "nasus"]
      archetype: "Dash 없는 느린 탱커"
      reason: "Kite하는 Kindred에게 거리를 좁힐 수 없다. 그들의 CC 사거리 밖에서 평타하면서 Wolf's Frenzy로 수동적으로 깎아낸다."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Hard CC와 lockdown으로 초반 invade하는 정글러"
      reason: "2레벨 너의 camp에 발차기·knock-up·기절로 들어와 Mark 하나 쌓기 전에 죽인다. lock-on을 끊을 dash가 없고 R도 아직 없다."
    - examples: ["sion", "dr-mundo"]
      archetype: "On-hit 완화·면역을 가진 juggernaut 탱커"
      reason: "Sion의 W 보호막과 Mundo의 패시브 회복이 너의 평타 DPS를 무력화 — 너의 유일한 데미지가 on-hit이라 그 루프를 끊는 모든 것은 너를 무력화한다."
    - examples: ["zed", "talon"]
      archetype: "R이 발동되기 전에 너를 삭제하는 burst assassin"
      reason: "Hard CC 없는 squishy인 너는 Lamb's Respite 시전 전 0.5초 윈도우에 죽는다. R은 데미지가 아닌 죽음만 막아 — 그들은 끝날 때까지 기다렸다 다시 engage한다."
---

## 개요

Kindred는 정글에서 사냥하는 marksman이다. Lamb이 쏘고 Wolf가 물며, 키트 전체가 다른 어떤 champion에게도 없는 한 가지 메커니즘인 **Mark of the Kindred**를 중심으로 돌아간다. 4분마다 무작위 적 — champion 또는 jungle camp — 에게 Mark가 나타나고, 처치 시 attack speed, attack damage, 평타 추가 사거리의 영구 stack을 얻는다. Mark 4개를 쌓으면 사거리가 한 단계 점프하고, 8개를 쌓으면 다른 marksman의 평타 사거리 밖에서 그들을 압도하기 시작한다.

운영은 두 파트로 나뉜다. 초반에는 **mark hunter**다: 미니맵의 Mark 아이콘을 읽고 contest 가치가 있는지 판단(내 것 = 항상 가기, 상대 것 = 압박을 트레이드해서 뺏기)하고 동선을 그 주위로 굽힌다. 중반에는 flanker가 된다 — Q-dash로 적 백라인 뒤로(탱커 뒤에 서는 carry들), carry에게 E, 평타 4타 체인, 그리고 Mounting Dread가 잃은 체력 타격으로 처형. 후반에는 게임 내 모든 brawler를 out-kite하는 hyper-scaling skirmisher가 된다(kite = 평타하면서 뒤로 빠지기, 그래서 적이 절대 따라잡지 못함).

## 추천 빌드

**Starting items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade**로 정글 클리어 가속(원거리이므로 Hailblade 필수 — Emberknife는 근접 전용) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (순서대로):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Hailblade 퀘스트 업그레이드(XP가 충분히 쌓이면 3-4분경 자동 진화). AD skirmisher용 companion: 수풀에서 나올 때 짧은 movement-speed 버스트, Mark 추격이나 fog에서 gank 마무리에 최적.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 평타 3번째마다 보너스 true damage. True damage는 armor를 무시하므로, 다른 방법으로 깎을 수 없는 탱커 아이템화를 뚫는다.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flat attack speed 신발. 기본; 적 팀에 hard CC가 3명 이상일 때만 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 교체.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 평타마다 추가 화살 두 발. 정글 클리어 속도 3배, 한타에서 Wolf-and-Lamb DPS를 3대상에 분산.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit(평타마다 추가 마법 피해) + magic resist. 이중 효과: AP burst(Diana, Syndra, Brand) 대비 lifeline, magic resist 낮은 backline에 shred.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — energized 사격에 추가 사거리, Mark에서 쌓은 사거리 위에. 후반엔 적이 헛 추격하는 동안 화면 끝에서 carry를 평타한다.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 lock-on 궁(Malzahar, Skarner, Warwick) 상대. Spell shield가 시전을 먹어 체인이 시작되지 않는다.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — hard CC 체인 상대. 액티브가 suppression 포함 모든 CC를 cleanse — Skarner pull이나 Sett ulti가 적중하는 순간 누른다.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 유리할 때 5% HP 미만 처형. E의 잃은 체력 타격과 깔끔히 결합되며, 시신이 추가 골드 생성.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — sustain 강한 조합(Aatrox, Soraka, Dr. Mundo) 상대. Grievous wounds 적용으로 장기전 회복량을 약 절반으로.

**신발:** 기본 Berserker's Greaves. Mercury's Treads는 hard CC가 무거울 때만.

**Skill order:** **Q** 우선 마스터(클리어 속도와 dash당 데미지), **E** 두 번째(랭크당 잃은 체력 타격 버스트 증가), **W** 마지막(랭크 1에서도 AS와 회복량이 충분). **R**은 6, 11, 16에.

**Runes:** 주룬 **Domination** + **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. 보조 **Precision** + **Triumph** + **Coup de Grace**. Hail of Blades가 Kindred의 상징인 이유는 첫 평타 3번을 최고 속도로 끌어올리기 때문 — Mounting Dread 체인을 시작하는 데 정확히 필요한 평타다.

## 주요 매치업

- **Lee Sin:** 1레벨 너에게 짐, 그러나 2-3레벨 그의 Q-W-Q-발차기 콤보가 R 없는 너를 삭제. 4레벨까지 그의 진영을 피하고, W 없이 Q를 commit할 때 counter-gank를 노린다. 그의 W 쿨다운 추적 — 없으면 그는 한타에서 빠질 수 없다.
- **Karthus:** 순수 후반 스케일러. 3분에 그의 red side를 invade하고 buff를 훔친다; 막을 수 없고, 템포 손실이 그의 6레벨 spike를 지연시킨다. 3코어 후엔 그가 이기므로 18분 전에 마무리.
- **Master Yi:** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 전에 처치 필수. E를 그의 Q-dash 종료 윈도우에 아껴라 — 다시 나타날 때 슬로우를 받고 너의 팀이 CC 체인. 그의 첫 코어 후엔 1v1 금지.
- **Diana:** 그녀는 너의 백라인 dive를 원하고, 너는 그녀의 백라인 dive를 원한다. 그녀가 너의 carry에 R을 적중하는 순간을 위해 **R**을 아껴라 — 성역이 burst 동안 carry를 1 HP 위로 유지하고, 회복 윈도우에 너의 팀이 그녀를 처치한다.
- **Xin Zhao:** Knock-up + 락다운이 1.5초 안에 죽인다. 2레벨에 그의 camp 옆을 절대 통과하지 말고; 사거리 보너스 Mark 2개가 쌓일 때까지 라이너와 buff를 함께 받는다. 3코어 후엔 Q 리셋으로 out-kite.

## 파워 스파이크 및 승리 조건

- **3레벨:** 키트 완성. Gank 패턴은 **대상에게 E -> Q-dash 중간 끼워 평타 3번 -> 4번째 평타가 잃은 체력 버스트 발동**. R 없으니 3레벨 gank를 깊이 commit하지 말 것 — Flash 거리만.
- **첫 Mark stack(~5분):** 영구 +AS, +AD, +사거리. 이후 완료한 Mark마다 격차가 벌어진다. 중립 Mark도 싸워 가져라 — 스탯 우위가 단일 trade(짧은 소규모 교전에서의 데미지 교환)보다 크다.
- **6레벨:** **Lamb's Respite** 해금. 여기서부터 확정 처치에서 팀원을 구할 수 있다. 핵심은 **절대 미리 깔지 않기** — 적이 처치 스펠을 commit하는 순간 떨어뜨리고, 안 그러면 위협이 해소되기 전에 지역이 끝난다.
- **3코어 + 4-Mark 사거리 보너스(~22분):** 게임의 모든 marksman보다 사거리가 길다. 한타에선 너의 frontline 뒤에 서서 가만히 평타로 모두 죽인다. 이게 너의 스케일링 절벽 — 팀과 함께 모이고, splitpush(혼자 사이드 lane farm)하지 말 것.

## 흔한 실수

- **Lamb's Respite 미리 깔기.** **R**은 반응형이지 능동형이 아니다(위협을 읽고 나서 깔지, 미리가 아님). 적 궁이 적중하는 순간에 떨어뜨려라, 그냥 가까이 올 때가 아니라. 미리 깐 R은 아무도 못 구하고 110초 동안 유일한 save 도구를 날린다.
- **Mark 아이콘 무시.** 미니맵에 작은 해골 아이콘으로 Mark가 표시된다. 추적하지 않는 플레이어는 챔피언의 정체성 전체를 잃는다. 30초마다 맵을 열고 자문: "이 Mark은 내 것을 가질 것인가, 그들 것을 부정할 것인가?"
- **출구 없이 적 팀에 Q-dash.** **Dance of Arrows**는 1랭크 쿨다운 12초. 처치 추격으로 Q-in 했다 CC 맞으면 escape가 없다. 항상 dash 궤적 뒤에 벽을 두고 Q해서 CDR 후 다음 Q가 너를 다시 튕겨내게 한다.
- **Mounting Dread 4타 조건 잊기.** **E**는 시전 시 데미지가 작고, 진짜 보상은 슬로우 대상에게 4번째 평타다. E 후 평타를 2번만 넣으면 잃은 체력 버스트는 발동하지 않는다. 전체 체인에 commit하거나 E를 아예 쓰지 말 것.
- **결코 오지 않는 완벽한 순간을 위해 R 아끼기.** 아군을 3초 살리는 "낭비된" R이 너무 오래 들고 있어 한 번도 누르지 못한 완벽한 R보다 낫다. 의심되면 떨어뜨려라.

## 고급 팁

오브젝트 위 **R-bait**. Drake나 Baron에서 팀이 HP 낮을 때 **Lamb's Respite**를 팀이 아닌 오브젝트 위에 떨어뜨려라. 안에 있는 모든 유닛이 1 HP 미만으로 떨어지지 않는다 — 오브젝트도 포함. 너의 팀이 지역 안에서 smite하거나 마무리하고, 진입한 적도 너를 죽일 수 없으니 contest를 포기하거나 지역이 끝날 때 잡힌다(R 마무리 회복으로 너의 팀은 풀 HP). 이 트릭을 못 읽는 적 팀이라면 50/50 Drake 싸움을 확정 오브젝트 + 더블킬로 뒤집는다.
