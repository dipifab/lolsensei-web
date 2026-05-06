---
title: "Irelia Top Build & Guide — Patch 16.9"
slug: "irelia-top"
language: "ko"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Irelia 탑 라인 완벽 공략. 시작 아이템부터 Trinity Force 코어 빌드, Conqueror 룬 선택, 주요 매치업 대처법, 파워 스파이크 활용, 라인전 흔한 실수와 해결책, 그리고 R-Flash 같은 고급 콤보 팁까지 한 페이지에 깔끔하게 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "스킬로 적을 맞히면 Attack Speed 스택이 쌓인다 (최대 4). 풀 스택에서는 추가 마법 on-hit 피해까지 들어간다."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "대상에게 돌진해 피해와 회복. 대상이 죽거나 Mark가 묻은 적을 쳤을 때 쿨이 즉시 초기화된다 — 이게 Q reset (미니언 사이를 연쇄 돌진)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "충전 채널링 공격. 충전 시간이 길어질수록 피해가 늘고, 그 동안 받는 물리·마법 피해가 감소한다 (channel = 누른 채로 충전)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "칼날 하나를 설치하고 재시전해 두 번째 칼날 배치. 두 칼날이 서로를 향해 날아가며 사이의 모든 적을 기절시키고 Mark를 묻힌다. 핵심 setup 도구."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "장거리 칼날 일제 사격으로 적중한 챔피언에 Mark를 부여하고, 가장 먼저 맞은 챔피언 주변에 둔화·피해를 주는 벽을 형성한다. Engage와 zoning 궁."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "강한 마법 피해나 연쇄 CC 상대 (Lissandra, Ryze, Malphite — tenacity가 stun과 slow 시간을 줄여준다)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "kiter와 ranged 탑 상대 (Vayne, Gnar, Kennen) — 능동 dash + slow가 기동성 있는 적을 따라붙게 해준다"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "armor 누적 탱커 상대 (Malphite, Ornn, Sion) — armor shred가 반복 Q와 팀 follow-up을 증폭시킨다"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "splitpush 조합에서 라인 정리와 1v1 sustain이 필요할 때 (AOE lifesteal = 광역 cleave + 회복)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "E로 stun을 맞히고, 미니언 사이를 Q-reset해 타겟에 붙어, 풀 스택 패시브로 trade한다. 라인을 snowball (초반 우위를 더 큰 우위로 굴림)해서 mid-game 교전으로 끌고 간다."
  weakness: "E를 못 맞히면 안정적인 engage가 없다. 장거리 poke와 disengage에 frontline 도착 전에 무력화된다. Trinity Force나 Stridebreaker 없이는 kite당하기 좋다."
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
    - examples: ["malphite", "ornn", "sion"]
      archetype: "ranged poke 없는 느리고 immobile한 탱커"
      reason: "E stun에서 빠져나갈 disengage가 없고, 미니언 사이 Q reset에도 답이 없다. Conqueror 스택이 쌓이면 모든 레벨에서 out-trade 가능하다."
    - examples: ["nasus", "garen", "darius"]
      archetype: "dash 없는 melee juggernaut"
      reason: "E + Q로 거리를 좁히고 W의 피해 감소가 상대 burst 구간을 막아낸다. 너를 kite할 수도 stun에서 도망칠 수도 없다."
    - examples: ["azir", "ryze"]
      archetype: "탑으로 flex된 중거리 mage"
      reason: "dash 없는 단거리 squishy (HP 낮고 방어 약함)는 Trinity Force 완성 후 풀 스택 패시브로 압박하면 한 번에 녹는다."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "ranged 또는 kite형 탑"
      reason: "E 사거리 밖에서 평타로 깎고, 자기 dash나 변신으로 Q를 kite하며 모든 접근을 응징한다. Engage 자체를 위해 Stridebreaker를 강요당한다."
    - examples: ["fiora", "camille", "jax"]
      archetype: "지정 카운터나 true damage를 가진 duelist"
      reason: "Fiora는 E나 R을 paryy하고, Camille의 E hookshot은 dash를 무시하고 stun, Jax E는 stun에 더해 장기전에서 AS 패시브를 outscale한다."
    - examples: ["malzahar", "renekton"]
      archetype: "anti-skirmisher 도구를 가진 lane bully"
      reason: "Malzahar의 suppress (지정 silence + lockdown)는 Q reset 사이클을 끊는다. Renekton의 분노 강화 W는 W 충전을 뚫고 stun을 박아 trade를 마무리한다."
---

## 개요

Irelia는 melee skirmisher다 (한 방의 큰 burst가 아니라 짧은 trade를 반복해서 이기는 fighter). **Bladesurge (Q)** 돌진으로 살고 죽는다. Q의 기본 쿨다운은 길지만, 미니언을 처치하거나 Mark debuff (Irelia의 스킬이 적에게 남기는 작은 아이콘)가 묻은 대상을 칠 때마다 쿨이 즉시 **리셋**된다. 한 번의 교전에 네 번, 다섯 번까지 연쇄 돌진이 가능하다는 뜻이다. 패시브 **Ionian Fervor**는 스킬 명중 시 Attack Speed를 최대 4스택까지 쌓고 (스킬 한 방당 1스택, 최대 4), 5번째 스택은 추가 피해와 crowd-control 감소까지 더해준다.

탑 라인 game plan은 말로는 단순하지만 실행은 까다롭다. **Flawless Duet (E)**로 stun을 맞히고 (작은 setup 시간이 필요하다), 묶인 대상에 **Q**로 follow-up, **W**로 받는 피해를 줄이고, 미니언 사이를 Q-reset으로 빠져나가거나 추격한다. 6레벨 이후에는 **Vanguard's Edge (R)**가 라인 교전을 킬로 바꾼다. 구역 통제와 두 번째 Mark로 무료 Q reset까지 챙겨준다. Mid-game에는 미니언 사이로 Q reset을 활용해 roam하며 pickoff (한타에서 떨어져 나온 적을 단독으로 잡는 것)를 노리고 오브젝트 쪽으로 동선을 이어간다.

## 추천 빌드

**시작 아이템:** Doran's Blade + Health Potion 1개. ranged harass 라인 (Kennen, Quinn, Vayne)에서 회복이 필요할 때만 Doran's Shield를 든다.

**코어 아이템 (구매 순서):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 메인 스파이크. Sheen 패시브 (스킬 후 다음 평타에서 발동되는 내장 효과, 게임 용어로 "proc")가 모든 Q dash와 잘 맞고, Ability Haste는 Q 쿨을 줄이며, Attack Speed로 패시브 스택을 빠르게 쌓는다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 위주 팀 상대 기본 신발. 라인이 melee거나 AD ranged면 Trinity 다음에 산다.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, 그리고 저체력 보호막으로 dive 구간에서도 살아남을 수 있게 해준다.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 받은 물리 피해를 몇 초간 출혈로 분산시킨다 (즉시 피해가 아니라 시간 분산 피해). 강력한 물리 딜러 둘이 있는 팀 상대 (예: Yasuo + Caitlyn)에 좋다 — burst 구간을 버티고 Q로 빠질 시간을 번다.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 챔피언 상대 첫 평타에 확정 치명타와 회복이 함께 들어온다. Sheen + Q reset 사이클과 깔끔하게 맞물린다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 강한 마법 피해나 연쇄 crowd control 상대 (Lissandra, Ryze, Malphite). Tenacity가 stun과 slow 시간을 줄여준다.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — kiter와 ranged 탑 상대 (Vayne, Gnar, Kennen) 대안 mythic. 액티브 dash + slow로 Q에 의존하지 않는 추격기를 확보한다.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor를 쌓는 탱커 상대 (Malphite, Ornn, Sion). Armor shred가 반복 Q 피해와 팀 follow-up을 증폭시킨다.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — splitpush할 때 (사이드를 혼자 밀어 상대의 대응을 강제). AOE cleave에 lifesteal까지 더해 1v1과 라인 정리가 쉬워진다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 기본. 상대 팀에 연쇄 CC가 둘 이상이면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**로 바꾼다.

**스킬 마스터 순서:** **Q** 선마 (쿨 짧을수록 reset 더 자주, 피해 더 큼), **E** 후마 (stun setup), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**에 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. 보조는 **Resolve**의 **Bone Plating**과 **Revitalize**. 짧은 trade로 라인이 결정나는 burst 라인 상대 (예: 초반 Pantheon, Renekton)에서는 Conqueror 대신 **Press the Attack**을 든다 — 4초 안에 3타로 피해 스파이크를 보상받는 룬이라 장기전 누적이 아니라 짧은 충돌에 최적화돼 있다.

## 주요 매치업

- **Renekton:** lane bully. 3레벨 전엔 안전하게 가고, W stun을 피하면서 타워 밑에서 farm. 6레벨에서 R이 켜지며 주도권이 넘어온다 — **W**가 그의 콤보를 흡수할 수 있을 때만 trade한다.
- **Fiora:** **Riposte (W)**로 E stun과 R Mark를 모두 paryy한다. E 칼날 하나만 던져 paryy를 빼낸 뒤, W가 쿨일 때만 Q로 commit한다.
- **Malphite:** 6레벨 이전 라인은 공짜다 — E slow를 피하고 미니언 사이로 Q-reset해 harass. 6 이후엔 flash-R로 팀에 engage가 가능하니, 오브젝트는 아군과 모이고 ward 없이 extend (백업 없이 강 너머 push)하지 않는다.
- **Vayne:** 그녀가 실수하지 않는 한 hard counter다. **Tumble (Q)**로 너를 kite하면서 (공격하면서 뒤로 빠져 거리를 유지) **Silver Bolts (W)**로 HP를 갉아먹는다. Stridebreaker 선출, 타워 근처에서 wave freeze (라인을 우리 타워 옆에 묶어 두어 그녀가 안전하게 막타를 못 치게 함), 그리고 6레벨 전에 정글러 gank를 부른다.
- **Camille:** 거의 호각. **Hookshot (E)**가 dash를 무시하고 stun을 박는다. **Flawless Duet**을 아껴두었다가 hookshot 도중에 그녀를 stun한다. 먼저 setup CC를 박는 쪽이 trade를 이긴다.

## 파워 스파이크 및 승리 조건

- **3레벨:** 기본 스킬 셋이 모두 켜진다. E stun + Q + 평타 + W로 풀 스택 패시브 trade 구간을 만들 수 있다.
- **6레벨:** **Vanguard's Edge (R)**가 풀 all-in (킬에 모든 자원을 쏟는 결단) 구간을 연다. R Mark 덕에 cage 너머로 무료 Q reset이 가능하다 — 정글러가 보일 때 저체력 대상에 궁을 박는다.
- **Trinity Force 완성 (~14-16분):** Sheen proc 덕에 Q당 피해가 점프한다. 라인 주도권이 뒤집히고, 사이드 라인을 Q reset으로 누비며 오브젝트를 향해 roam할 수 있다.
- **3 아이템 (Sterak's 완성, ~24-28분):** 한타 skirmisher가 된다. Q reset으로 backline (탱커 뒤에 있는 squishy 캐리)에 dive하고, Sterak's 보호막 + W로 burst를 버티고, R cage로 마무리한다.

## 흔한 실수

- **setup 없이 Q 난사.** Mark 없는 대상에 맨몸 Q는 단 한 번의 dash에 긴 기본 쿨을 그대로 다 쓰는 셈이다. 항상 **E** stun을 먼저 맞히거나, 저체력 미니언으로 Q를 이어 reset 사이클을 살려둬라.
- **stun 동안 W를 너무 오래 끌기.** **Defiant Dance**는 채널링이다 — 충전 중엔 이동도 공격도 못 한다. 피해 감소 구간이 끝나면 적이 빠질 경우 즉시 tap-cancel 한다. 사거리 안에 아무도 없는데 최대 충전 release를 기다리지 마라.
- **paryy를 뚫고 engage.** Fiora **W**, Sivir spell shield, Olaf R은 모두 E stun을 그냥 먹어버린다. 그 스킬들을 먼저 빼낸 뒤에 CC를 commit한다.
- **Trinity 전에 splitpush.** Trinity 없이는 타워와 미니언 피해가 약하다 — 시간만 내주고 얻는 게 없다. Trinity가 켜질 때까지 타워 근처에 wave를 두고, 그 다음에 사이드를 민다.
- **팀이 모여 있는데 한 명에게 궁.** **R** cage가 squishy 한 명에게만 걸리면 그들의 탱커가 body-block으로 갈라놓을 수 있어 낭비된다. choke (jungle의 좁은 통로)를 가로질러 R로 2-3명을 걸치고, cage가 backline을 한타에서 분리시키도록 노린다.

## 고급 팁

**R-Flash** 콤보를 연습해라. **Vanguard's Edge**를 한 방향으로 시전한 뒤 즉시 **Flash**를 다른 방향으로 써서 칼날 일제 사격의 방향을 바꾼다. 칼날들은 Irelia의 위치를 따라가기 때문에, cast 라인에 수직으로 flash하면 R 사거리 밖에 있다고 안심하던 챔피언을 cage 안에 가둘 수 있다. 드래곤 둥지나 바론 둥지 근처에서 도망치는 캐리에 pickoff (고립된 적을 잡는 것)가 필요할 때 engage 도구로 활용한다.
