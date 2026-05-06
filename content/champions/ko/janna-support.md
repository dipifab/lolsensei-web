---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "ko"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Janna 서포터 완벽 공략. enchanter 빌드, peel 중심 매치업, 파워 스파이크, 흔한 실수, 그리고 고급 disengage 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Janna 쪽으로 이동하는 아군은 추가 Move Speed를 얻는다. Janna 자신도 추가 Move Speed의 일부를 평타 시 추가 마법 피해로 변환한다."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "토네이도를 충전 후 발사하여 직선으로 날려 적을 공중으로 띄운다. 더 오래 충전할수록 사거리, 피해, 띄우는 시간이 늘어난다."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "패시브: 추가 Move Speed와 유닛 통과. 액티브: 적 한 명에게 마법 피해와 슬로우 (패시브 보너스 소모)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "아군 챔피언이나 포탑에 보호막을 걸고, 지속 시간 동안 추가 Attack Damage도 부여한다."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "주변 적을 모두 밀어내는 채널링 후, 남은 시간 동안 주변 아군을 회복시킨다. 한 버튼에 disengage와 회복이 모두 들어 있다."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "강한 AOE 버스트 상대 (Yone R, Kennen R, Orianna R) — 팀 전체 즉시 보호막으로 백라인을 지킨다"
    - dd_id: "3107"
      name: "Redemption"
      against: "장기전이나 Drake, Baron 같은 오브젝트 교전에서 광역 힐이 필요할 때"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "Ability Haste와 잘 맞는 AP carry 상대 (Hwei, AP Ezreal) — 보호막을 건 아군에게 추가 AP 부여"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "확실한 AD carry가 있는 engage 조합 상대 (Aphelios, Kai'Sa) — 연결이 R과 결합해 슬로우 보장"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "초반 skirmish 구간을 넘기며 AD carry를 살려두고, Move Speed peel을 쌓아 R로 적 engage를 끊으며 오브젝트 주변 운영을 주도한다."
  weakness: "솔로 데미지가 약하고 E의 시전 거리가 짧다. R 시전 전에 hard CC를 맞으면 자신을 포함해 누구도 peel할 수 없다."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage 서포터"
      reason: "Janna의 R은 dive를 공중에서 끊는다. 적이 AD carry에게 뛰어드는 순간 채널링이 발동되어 그들을 밀어내고 engage 시도를 무산시킨다."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "이동기 없는 강한 평타 AD carry"
      reason: "Tailwind + E 보호막 + Ardent Censer 조합은 정적인 marksman을 peel 요새로 바꾼다. 위치를 바꾸지 않아도 데미지와 Move Speed가 올라간다."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "화려한 diver 정글러"
      reason: "그들의 갱은 단일 commit 점프나 돌진이다 — Janna의 Q는 dash 중에 그들을 띄우고, R은 그들이 왔던 곳으로 다시 보낸다."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "긴 사거리 hook 서포터"
      reason: "Janna는 6레벨 전에 gap-closer도 hard CC도 없다. 6레벨 전 hook이 적중하면 R이 준비되기 전에 AD carry가 삭제된다."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "긴 사거리 마법사 서포터"
      reason: "그들은 Janna의 E 보호막 800 사거리 밖에서 poke한다. Janna는 한 방을 보호막으로 막을 수 있지만 되돌려 줄 수단이 없다 — HP 마모가 라인을 먹는다."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Poke를 회복으로 상쇄하는 sustain enchanter"
      reason: "Janna의 라인전 데미지는 충전 시간이 긴 Q뿐이다. 이 enchanter들은 trade를 회복으로 받아내고 한타 가치 면에서도 그녀를 능가한다."
---

## 개요

Janna는 모든 스킬셋이 단 하나의 동사를 중심으로 설계된 enchanter 서포터다: **peel** (팀원, 보통 AD carry — 아이템과 함께 성장하는 봇 라인 marksman — 을 공격자로부터 보호하는 행위). 패시브 **Tailwind**는 그녀에게 다가가는 모든 아군에게 추가 Move Speed를 부여하고, **Howling Gale (Q)**는 백라인 (한타 후방에 있는 squishy ranged carry)을 dive하려는 적을 공중에 띄우며, **Zephyr (W)**는 가장 가까운 위협을 깎고 슬로우시키며, **Eye of the Storm (E)**는 보호막에 Attack Damage 버프가 함께 들어가 있는 스킬이고, **Monsoon (R)**은 게임에서 가장 깔끔한 disengage 도구 중 하나다 (적의 engage 시도를 깨는 스킬 — 그들이 뛰어들면 당신은 그들을 밀어낸다).

게임 플랜은 차분하고 기계적이다: AD carry는 절대 죽지 않는다. 위협과 carry 사이에 서서 보호막을 쿨마다 던지고, **Q**는 벽 뒤에서 충전해 토네이도가 최대 크기로 나오게 하고, **R**은 적팀이 백라인에 모든 것을 commit하는 순간을 위한 "panic button"으로 아껴라. Janna로 engage하고 싶은 순간은 거의 없다 — 당신의 일은 지지 않음으로써 한타를 이기는 것이다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (퀘스트로 골드 수입을 늘려가는 서포터 시작 아이템) + Health Potion 2개. 데미지 시작 아이템은 건너뛴다. Janna는 라인 킬로 snowball하지 않고 한타 utility로 성장한다.

**코어 아이템 (순서대로):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Bounty of Worlds로 진화하고 이후 서포터 legendary로 완성된다. 골드와 와드 충전을 자동으로 누적한다.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste 덕분에 짧은 쿨다운으로 **E** 보호막과 **W** 슬로우를 도배할 수 있다. enchanter의 기본 신발.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 보호막 시 회복 패시브가 장기전에서 점점 강해진다. **E** 도배와 결합하면 AD carry는 순 데미지를 거의 입지 않는다.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — 보호막을 건 아군에게 추가 on-hit 데미지와 Attack Speed를 부여한다. 평타 위주 AD carry 옆에서는 게임 최고의 아이템.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 아군의 hard CC를 정화한다. 적팀에 단일 대상 스턴이나 hook이 carry를 노리고 있다면 필수.

**상황별 아이템:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 강한 AOE 버스트 상대 (광역 데미지, 예: Yone R, Kennen R). 액티브로 팀 전체에 즉시 보호막을 준다.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 한타가 길어질 때 (Drake, Baron, 장기 한타). 맵 반대편에서도 쓸 수 있는 지연 광역 힐.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — Ability Haste와 잘 맞는 AP carry 상대 (Hwei, AP Ezreal). 보호막을 건 아군에게 추가 Ability Power를 부여한다.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — engage 조합 상대로 AD carry가 **R** 동안 대상에게 보장된 슬로우가 필요할 때.

**신발:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**가 기본. 도망쳐야 할 슬로우가 많은 조합에서는 Boots of Swiftness로 대체할 수 있다.

**스킬 마스터 순서:** **E** 선마 (보호막 수치와 Attack Damage 버프가 레벨당 증가), **Q**가 두 번째 (띄우는 시간과 데미지 증가), **W**가 마지막. **R**은 6, 11, 16레벨에 찍는다. 1레벨에 **W**를 찍어 라인 진입 시 Move Speed를 챙기고, 2레벨에 **E**를 찍어 첫 all-in을 보호막으로 받는다.

**룬:** 주 트리 **Sorcery**에 **Summon Aery** (스킬에 작은 데미지와 보호막 수치를 붙임), **Manaflow Band** (모든 웨이브에서 보호막과 **W**를 쓸 수 있는 마나 sustain), **Absolute Focus** (HP 70% 이상에서 추가 AP — 안전하게 서는 Janna에게 쉬움), **Scorch** (**Q** poke 강화). 보조 **Resolve**에 **Font of Life** (**W**로 슬로우 → 그 대상을 때리는 모든 아군이 회복) 와 **Overgrowth** (영구 HP 성장). 스탯 파편: Ability Haste, Adaptive Force, Health Scaling.

## 주요 매치업

- **Leona / Rakan:** Hard engage 서포터. 그들이 AD carry에 commit하는 순간을 위해 **R**을 아껴라. 토네이도 노림수에는 절대 사용하지 않는다. 시전 동작이 보이지 않게 **Q**는 벽 뒤에서 충전한다.
- **Blitzcrank / Thresh:** Hook 서포터. 강을 넘을 때마다 미니언 뒤에 서라. Hook 한 방이면 AD carry가 죽는다 — 1.75초 스턴은 **R**로도 빠져나갈 수 없다.
- **Xerath / Brand:** **E** 보호막 사거리 밖의 마법사 서포터. 웨이브에 붙어 평타 교환을 피하고, 정글러에게 hard-side를 맡겨라. 평소보다 일찍 ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari**를 올린다.
- **Soraka:** Sustain 거울 매치. 보호막에서는 이기지만 순수 회복량은 부족하다. 2레벨 all-in을 강요하라: **W**를 얼굴에, **E**는 AD carry에게, 그녀가 **R** 스파이크를 받기 전에 웨이브에서 밀어내라.
- **Pyke:** 로밍 위협. 트리 부쉬와 강 진입로에 시야를 박아 추적하라. 봇을 떠나면 즉시 미드에 핑을 찍어라. Janna의 **R**은 그가 근접에서 commit할 때만 처형 궁극기를 막을 수 있다 — 장거리 hook 거리에서는 잡을 수 없다.

## 파워 스파이크 및 승리 조건

- **2레벨:** **W** 1포인트, **E** 2포인트로 짧은 trade (라인에서의 짧은 데미지 교환, 풀 all-in이 아님)를 보호막으로 engage할 수 있다. 대부분의 라인이 이 trade를 진다. 그들의 2레벨 스파이크 (챔피언이 갑자기 강해지는 시점)가 당신보다 약하기 때문이다.
- **6레벨:** 첫 **Monsoon** 해금. 이 시점부터 적의 어떤 2v2 시도도 이길 수 있다 — 그들이 engage하면 당신은 채널링하고, 그들은 당신의 포탑으로 밀려난다.
- **Moonstone Renewer + Ardent Censer (~16-20분):** 라인 서포터에서 팀 곱셈기로 변하는 한타 스파이크. 한타 내내 보호막을 도배하면 AD carry의 유효 HP가 사실상 두 배가 된다.
- **3 legendary 완성 (~25분):** Mikael's까지 추가되면 carry를 삭제할 수 있는 단 하나의 CC 스킬을 정화한다. 이때부터는 적이 hard CC를 commit하는 모든 오브젝트 한타가 5v4가 된다.

## 흔한 실수

- **라인전에서 충전 안 한 Q를 던지기.** 0.5초짜리 토네이도는 거의 아무것도 못 한다. 벽 뒤나 시야가 없는 fog of war (봇 강 근처의 와드 안 박힌 부쉬)에서 **Q**를 3초 풀로 충전하고, 적이 웨이브로 들어올 때 발사하라.
- **킬을 위해 R을 태우기.** Janna의 **R**은 팀의 최고 disengage다. AD carry가 어차피 마무리할 킬을 위해 사용할 때마다, 다음 100초 이상 동안 팀에는 panic button이 사라진다.
- **자신에게 보호막 걸기.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E**는 자신에게도 걸리지만, Janna에게 Attack Damage 버프는 낭비다. 기본은 AD carry에게 보호막. 자기 보호막은 skillshot (회피 가능한 유도 투사체)이 자신에게 락온되었고 carry가 안전한 경우에만.
- **한타에서 너무 뒤에 서기.** **E** 사거리는 800으로 짧다. 팀 뒤에서 빠끔거리면 누구에게도 보호막을 걸 수 없다. AD carry의 보호막 사거리 안, 둘째 줄에 서라 — 본능이 알려주는 것보다 더 가까이.
- **데미지를 위해 미니언에 평타.** Tailwind는 챔피언 적중에만 발동한다. 평타로 웨이브를 미는 행위는 데미지 이득 없이 적에게 공짜 trade 창을 내준다.

## 고급 팁

**Q-Flash**를 연습하라. 벽 뒤에서 **Howling Gale**을 충전하기 시작하고, 같은 동작 안에서 Flash로 앞으로 이동하면서 토네이도를 발사한다: 시전 동작을 본 적 없는 대상이 띄워진다. 이 한 번의 플레이는 Janna를 수비형 enchanter에서 너무 깊이 push한 fed 적 (킬과 골드에서 앞선 챔피언)을 단숨에 끊는 disengage로 바꾼다. 대가는 다음 5분간 **Flash** — 킬이나 AD carry의 생존이 확실히 잠겼을 때만 써라.
