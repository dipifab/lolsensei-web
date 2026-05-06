---
title: "Kai'Sa ADC Build & Guide — Patch 16.9"
slug: "kaisa-bot"
language: "ko"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Kai'Sa ADC 봇 라인 가이드 패치 16.9: 플라즈마 스택 운용, 하이브리드 Kraken 진화 빌드, 핵심 매치업, 파워 스파이크, 흔한 실수, 그리고 고급 테크닉 한 가지."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "auto-attack은 대상에 플라즈마를 누적시키고, 아군의 이동기 차단 CC가 추가 스택을 더한다. 또한 구매한 아이템이 숨겨진 AD/AP/공격 속도 임계치를 넘기면 Q/W/E가 진화한다."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "주변 적에게 분산되는 미사일 6발 발사 (사거리 600). 같은 대상에 반복 명중 시 피해 감소. 추가 AD ~100에서 진화: 미사일 6발이 12발로 증가."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "장거리 직선 미사일 (3000 유닛). 처음 맞은 적에게 플라즈마 2스택을 부여하고 4초간 시야 노출. AP ~100에서 진화: 4스택, 챔피언 적중 시 쿨다운 50% 환급."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "약 1.5초 채널링 동안 이동 속도 증가와 Ghosted (유닛 통과), 이후 4초간 공격 속도 상승. auto-attack이 쿨다운 감소. 추가 공격 속도 60%에서 진화: 짧은 invisibility."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "플라즈마 5스택을 가진(또는 플라즈마로 ruptured된) 적 챔피언 옆으로 dash. 도착 시 보호막 부여. 이미 chip-killed된 대상을 마무리하는 용도이며, engage용이 아니다."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "HP/방어력 스태커 상대 (Cho'Gath, Sion, Malphite, Ornn): 비례 armor pen으로 적 방어력의 일정 비율 무시"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "회복 누적 조합 상대 (Soraka, Vladimir, Aatrox): Grievous Wounds 부여로 회복량 절반 감소"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "강한 AP 폭딜 상대 (Syndra, Veigar, Brand 서폿): 마법 저항 + HP 30% 이하 보호막"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "장거리 지속 견제 상대 (Ezreal, Caitlyn, Xerath): lifesteal로 교전 중 회복, overheal은 보호막으로 저장"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "암살자나 다이버 상대 (Zed, Kha'Zix, Talon): Ghost 패시브로 카이팅 중 유닛 통과"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "W와 auto-attack으로 백라인 대상에 플라즈마를 쌓고, 5스택이 차는 순간 R로 들이대 Q와 강화 AA로 마무리하며 E가 공격 속도 창을 열어준다."
  weakness: "R은 대상의 플라즈마 스택을 요구한다. W가 빗나가거나 아군 CC가 없으면 engage가 불가능. R 전까지 dash가 없는 squishy. E 타이밍 실수 시 invisibility 전에 풀콤보를 맞는다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "주문 트리 Domination + Hail of Blades: R 직후의 초고속 auto-attack 3회로 플라즈마 스택과 Kraken Slayer 고정 피해 발동을 앞당긴다. Taste of Blood로 라인 sustain, Sixth Sense로 와드 노출, Ultimate Hunter로 R 쿨다운 감소."
    secondary_rationale: "보조 트리 Precision: Triumph는 takedown(킬·어시스트) 시 잃은 체력의 12%를 회복하여 R-into-fight 진입을 안전한 escape로 바꾼다. Coup de Grace는 HP 40% 이하 적에게 +8% 추가 피해."
    secondary_alternative: "강한 견제 라인전 상대 (Caitlyn + Lux, Ezreal + Karma) 시 Precision 대신 Resolve로 교체하여 Second Wind(피격 시 회복)와 Overgrowth(미니언 흡수당 추가 HP)로 sustain 확보."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "dash 없는 immobile marksman"
      reason: "Kai'Sa가 5스택 플라즈마 상태로 R 사거리 안에 들어오면, 이동기 없는 ADC는 dash + Q 폭딜에서 빠져나갈 수 없다. 그들은 어떤 reposition 도구도 없이 첫 all-in(킬을 노리는 풀 커밋 트레이드)에서 살아남아야 한다."
    - examples: ["senna", "kog-maw"]
      archetype: "탈출기 없는 후반 스케일링 캐리"
      reason: "W는 사거리 3000 유닛이며 4초간 시야를 노출시킨다. Kai'Sa는 그들의 위협 사거리 밖에서 웨이브를 빼고 견제하다, 플라즈마가 ruptured되는 순간 R로 들이댄다."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "하드 CC 없는 squishy 인챈터 서폿"
      reason: "이 서폿들은 백라인 다이브를 peel할 stun이나 knock-up이 없다. Kai'Sa가 ADC에게 R을 박으면 진화한 E의 invisibility가 켜진 시점부터 서폿이 all-in을 끊을 방법이 없다."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "초반 auto-attack 피해가 강한 라인 bully"
      reason: "두 챔피언 모두 Q 진화 임계치 전인 1-3 레벨에서 Kai'Sa를 트레이드로 압박한다. Draven의 강화된 도끼와 Lucian의 더블샷 패시브는 Kai'Sa가 스케일링하기 전 짧은 트레이드 창을 모두 가져간다."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "point-and-click CC 보유의 하드 engage 서폿"
      reason: "Kai'Sa는 R 전에 dash가 없고, R은 플라즈마가 묻은 대상이 필요하다. Leona의 E나 Nautilus의 Q는 그녀가 플라즈마 한 스택을 쌓기도 전에 미드 라인에서 잡아 묶고, 진화한 E의 invisibility가 켜지기 전에 체인 CC로 죽인다."
    - examples: ["vayne", "twitch"]
      archetype: "3코어 이후 Kai'Sa의 DPS를 추월하는 후반 하이퍼 스케일러"
      reason: "Vayne의 W 고정 피해와 Twitch의 Expunge는 양 팀이 3코어를 갖춘 시점부터 Kai'Sa의 하이브리드 스케일링보다 더 가파르게 오른다. Kai'Sa는 30분 안에 게임을 닫지 못하면 상대적 피해량이 떨어진다."
---

## 개요

Kai'Sa는 하이브리드 마크스맨이다. 한 가지 스탯에만 올인하지 않고 AD(auto-attack 피해)와 AP(스킬 피해)에 동시에 스케일링하는 챔피언. 그녀는 숨겨진 아이템 임계치를 넘으면 스킬이 말 그대로 자체 강화되는 유일한 ADC(attack damage carry: 후반 팀 메인 딜러로 자라는 원거리 auto-attacker)이다. 추가 AD 100에서 Q가 진화하고, AP 100에서 W가 진화하며, 추가 공격 속도 60%에서 E가 진화한다. 어떤 다른 마크스맨보다도 빌드 순서가 중요하다. 잘못된 순서는 진화가 한 번도 발동되지 않는다는 뜻이고, E가 진화하지 않은 Kai'Sa(dash에 invisibility가 없는 상태)는 반쪽짜리 챔피언이다.

게임 플랜은 스택 퍼즐이다. 모든 auto-attack이 대상에 플라즈마 스택을 쌓고, 대상이 5스택에 도달하거나 플라즈마로 완전히 ruptured되는 순간 **R**이 그 대상 위로 향하는 장거리 dash로 잠금 해제된다. 서폿의 CC(Crowd Control: 적을 그 자리에 묶어두는 stun, slow, root)는 카운트를 무료로 가속한다. 라인전에서는 3000 유닛 사거리의 **W**로 견제(교전을 커밋하지 않고 적의 HP를 깎는 장거리 chip damage)하고, 한타(Drake나 Baron 같은 오브젝트 — 처치 시 팀 버프를 주는 중립 몬스터 — 를 결정짓는 5대5 교전)에서는 백라인 대상이 chip-killed될 때까지 최대 AA 사거리에 자리 잡았다가, **R** + 진화한 **E**의 invisibility로 들어가 정리한다. 스킬 천장은 **R**의 타겟 선택에 있다.

## 추천 빌드

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (소량의 AD + lifesteal — 가한 피해의 일부를 회복) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 1개.

**Core items (순서대로):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 첫 파워 스파이크(아이템 완성 직후 챔피언이 눈에 띄게 강해지는 시점). AD + 공격 속도 제공. Bring It Down 패시브가 세 번째 타격마다 추가 고정 피해를 입혀, R 직후의 짧은 폭딜 창에 피해를 앞당겨 주입한다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 공격 속도 신발. E 진화에 필요한 추가 공격 속도 60% 임계치로 빠르게 밀어준다.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 모든 auto-attack에 측면 화살 두 개를 추가하고 공격 속도를 더한다. 측면 화살이 인근 적에게 플라즈마를 발라, 한타에서 한 명만 AA해도 적 팀 전체에 플라즈마를 쌓는다. 이 아이템이 E 진화를 완성한다.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — AD, AP, 공격 속도를 한 슬롯에 제공한다. W 진화(쿨다운 환급 + 시전당 플라즈마 4스택)에 필요한 AP 100 임계치를 넘기는 가장 저렴한 방법. 세 번째 AA마다 발동하는 Phantom Hit가 추가 on-hit damage를 더한다.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 후반 치명타 배율(critical strike: auto-attack이 ~175% 피해를 주는 확률). Runaan's의 추가 투사체 두 개와 결합하면 모든 AA가 동시에 치명타 판정 3번을 굴린다.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — HP/방어력 스태커 상대 (Cho'Gath, Sion, Malphite, Ornn). 적 팀에 탱커가 2명 이상이면 5번 슬롯의 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** 자리를 대체한다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 회복 누적 조합 상대 (Soraka, Vladimir, Aatrox). Grievous Wounds(적의 피회복량을 절반으로 깎는 상태 효과) 부여.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 강한 AP 폭딜 상대 (Syndra, Veigar, Brand 서폿 — 폭딜 메이지는 콤보 한 번에 1-2초 안에 너를 지운다). 마법 저항 + HP 30% 이하 보호막으로 두 번째 R을 사용해 빠질 시간을 벌어준다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 강한 견제 상대. lifesteal이 교전 중 회복시키고, overheal 시 초과분이 임시 보호막으로 저장된다.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 암살자나 다이버 상대 (Zed, Kha'Zix, Talon — 백라인으로 다이브하는 데 설계된 챔피언들). Ghost 패시브가 카이팅(공격하며 뒤로 빠지는 행동) 중에 적 미니언과 챔피언을 통과하게 해준다.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**가 유일한 정답이다. 공격 속도가 E 진화와 R 콤보 동안의 Q 다중 미사일 DPS를 직접 키운다.

**Skill order:** **Q** 마스터 우선(주력 DPS, 진화 효율 최고). **E** 두 번째(쿨다운 감소 폭과 공격 속도 창 길이 증가). **W** 마지막(유틸리티 전용 — 긴 사거리 + 플라즈마 누적이지만 스킬 포인트당 기본 피해는 가장 낮다). **R**은 6, 11, 16 레벨에서 찍는다.

**Runes:** 주문 트리 **Domination**(폭발적 AA 트리) — **Hail of Blades**(챔피언에게 AA를 시작하는 순간 초고속 auto-attack 3회), **Taste of Blood**(약 20초마다 챔피언에게 피해를 입힐 때 18-30 HP 회복), **Sixth Sense**(약 75초마다 적 와드 한 개를 노출하는 핑), **Ultimate Hunter**(takedown을 누적하면 R 쿨다운을 최대 25%까지 단축). 보조 트리 **Precision** — **Triumph**(takedown — 킬 또는 어시스트 — 시 회복) + **Coup de Grace**(HP 40% 이하 적에게 추가 피해).

## 주요 매치업

- **Caitlyn:** 1레벨에서 너의 사거리를 크게 압도한다 (650 AA 대 525). 미니언 라인 뒤에 머무르고, 그녀가 트랩을 깔 때만 한 발 앞으로 나가라(트랩 설치 중 animation-locked). ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**가 완성될 때까지 안전하게 power-farm하고(미니언 골드 수급에만 집중, 위험 회피), 이후 R로 진입할 수 있게 되면 W로 cross-map 픽을 노린다.
- **Draven:** AA 전쟁 자체에서 패배한다. 그의 Q 도끼가 일반 AA보다 훨씬 큰 피해를 입힌다. 1대1 트레이드는 피하고, 그의 도끼가 바닥에 떨어졌을 때만 커밋하라(2.5초 타이머로 사라진다). ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**가 나올 때까지 **W**는 견제 전용으로 아껴라.
- **Lucian:** 6레벨 이후로는 Kai'Sa에게 진다. 다만 2-5 레벨에서는 더블샷 패시브로 그녀를 압박한다. 그의 **Q**는 미니언 사이로 회피하고, **E**는 비상 disengage(상대의 풀 커밋 트레이드를 끊는 스킬)로 보관하라. 6레벨까지 타워 밑 파밍으로 라인 priority를 유지하다, 그가 다음 실수를 하는 순간 all-in을 노린다.
- **Vayne:** Kai'Sa가 라인전 초반을 이긴다(Vayne은 3코어가 나올 때까지 사실상 근접). 기회만 되면 웨이브를 푸시(미니언을 그녀의 타워로 밀어 넣는 것)하고, 쿨이 도는 대로 **W**로 견제(HP를 깎기 위한 chip damage)한다. 25분 이후로는 그녀의 스케일링이 더 강해지므로, 미드 게임 안에 게임을 끝내지 못하면 흐름이 그녀에게 기운다.
- **Jhin:** 장거리 견제 매치업. 그의 **W**는 미니언을 먼저 맞추면 너의 회피를 무시하는 사거리 3550 유닛의 슬로우 root이다. 첫 미니언 라인 뒤에 머물고, 그의 재장전 창 동안에는 절대 트레이드하지 마라. 탄창이 가득 찼을 때 가장 강하고, 4번째 발사 후 2.5초 동안이 가장 약하다.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **R**이 chip-killed된 라인 대상에 대한 픽(한타 외부에서 고립된 적 하나를 제거하는 것) 시도를 연다. 적 ADC에 **W** + 평타 2회를 적중시키고, 그가 last-hit(미니언에게 결정타를 넣는 auto-attack)를 위해 한 발 앞으로 나오는 순간 **R**로 들이대라.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer 완성 (~12-14분):** 라인 priority가 뒤집힌다. Q로 shove(웨이브를 빠르게 밀기)한 뒤 roam(라인을 떠나 아군을 돕는 행위)해 Drake 주변 cross-map 플레이나 미드 small skirmish(강이나 정글에서 벌어지는 2-3명 규모 소교전)를 만들 수 있다.
- **Q 진화 (~22-24분, ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade 완성 후):** Q가 미사일 6발에서 12발로 증가한다 — 챔피언 단일 타겟 폭딜이 거의 두 배. 모든 오브젝트에서 한타를 강제하라.
- **E 진화 (Berserker's + Runaan's + Guinsoo's 완성):** E가 채널링 동안 짧은 invisibility를 부여한다. R로 들이대 즉사하는 것과 들이대서 킬을 따는 것의 차이다. invisibility는 dash 후 약 0.5초간 너를 untargetable로 만들어, 이어지는 CC를 회피할 수 있게 해준다.

## 흔한 실수

- **플라즈마 스택이 준비되지 않은 채로 R 던지기.** R은 플라즈마 5스택을 가진 대상이 필요하다. 0-2 스택의 대상에 R을 누르면 스킬은 발동되지 않고 풀 쿨다운만 돈다. 항상 W → AA부터, 대상의 HP 바 위에 있는 플라즈마 표시를 확인하고, 그 다음에 R을 커밋하라.
- **HP 100% 상태로 적 팀 한가운데에 R 들이대기.** R은 finisher이지 engage가 아니다. R이 주는 보호막은 작고(~110 + 추가 HP의 25%), 2초만 유지된다. 적 프론트 라인이 살아 있으면 즉사한다. 최소 다음 중 하나를 만족할 때까지 기다려라: 대상이 HP 40% 이하, 적의 핵심 CC가 쿨다운, 또는 너의 팀이 이미 적 위에 올라탄 상태.
- **시야 없이 웨이브 오버푸시.** Kai'Sa는 22분 이후 E가 진화할 때까지 자체 escape가 없다. 서폿이 강 트라이부쉬(시야를 차단하는 작은 풀숲)와 강을 와드하지 않은 상태에서 미드 강 너머로 푸시하면 적 정글러에게 공짜 킬을 헌납한다.
- **![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves를 더 단단한 신발로 대체하기.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**는 AD 위주 적 팀 상대로 매력적으로 보이지만, E 진화에 필요한 공격 속도 60% 임계치를 늦춘다. 진화 없음 = invisibility 없음 = R은 곧 사형 선고.
- **공격적인 engage용으로 E 아껴두기.** E의 핵심 가치는 교전 중의 짧은 Ghost(유닛 통과) + 공격 속도 창이다. E는 R **다음**에 누르고, 그 전에 누르지 마라. 진화한 E의 invisibility는 채널링 시작과 함께 켜지므로, 안전한 위치에서 시전하면 무적 프레임을 낭비한다.

## 고급 팁

**flash R** finisher는 평소 Kai'Sa 운영과 정반대 방향으로 움직이는 테크닉이다. 적 ADC가 저체력으로 fog of war(현재 시야 밖의 맵 영역)로 도망치고 있고, 평소처럼 **R**을 쓰면 너만 포지션 밖으로 dash하게 되는 상황. 먼저 적 방향으로 **Flash**(선택한 방향으로 400 유닛 순간이동하는 소환사 주문)를 써서 R 사거리에 들어간 뒤, 즉시 R을 누른다. Flash를 태우지만, 거의 도망친 적을 고티어에서 확정 킬로 바꾼다. 트릭: R 버튼을 누른 채로 Flash를 쓰면 Flash 직후 약 0.1초의 입력 버퍼에 R이 큐잉되어, Flash가 착지하는 순간 R이 발동된다. 적은 dash가 들어오는 것을 보지 못한다.
