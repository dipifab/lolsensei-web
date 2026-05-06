---
title: "Jhin Bot Build & Guide — Patch 16.9"
slug: "jhin-bot"
language: "ko"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Jhin 봇 라인 공략. 시작 아이템, lethality-crit 빌드 경로, 핵심 매치업, 파워 스파이크, 흔한 실수와 마지막 고급 팁까지 한 페이지에 정리."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Jhin의 권총은 4발만 쏘고 재장전해야 한다. 4번째 탄은 항상 크리티컬이며 저체력 적에게 처형 추가 피해를 입힌다. 크리티컬은 짧은 Move Speed 버스트도 준다."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "유도탄으로 최대 4번 튕긴다. 처치할 때마다 다음 튕김의 피해가 커진다. 안정적인 poke와 라인 정리 도구."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "장거리 직선 skillshot. 본인이나 아군이 최근에 친 적이라면 root. 평타 또는 서폿 engage 직후에 사용한다."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "잠시 뒤 무장되는 보이지 않는 lotus 함정. 밟으면 슬로우, 이후 폭발 피해. 공간 차단, 측면 보호, W root 확정용."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "채널링 궁: 챔피언에게 멈추는 4발의 장거리 사격. 슬로우를 걸고, 체력이 낮을수록 피해가 커진다. 4번째 탄은 크리티컬."
      dd_spell_id: "JhinR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "탱커 없는 squishy 백라인 상대: lethality가 W-root 버스트를 증폭하고, 액티브 Move Speed가 로밍을 돕는다"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐 누적 조합 상대 (Soraka, Aatrox, Vladimir, Dr. Mundo): R 처형 구간에 Grievous Wounds로 회복을 절반 깎는다"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "R 캐스팅을 끊는 단일 대상 하드 CC 상대 (Blitzcrank hook, Morgana Q, Ashe R): 스펠 실드로 캐스팅 한 번 보장"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "유리할 때, peeler (캐리를 보호하는 아군) 없이 긴 한타를 버틸 lifesteal과 보호막이 필요할 때"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "올인 다이버 상대 (Diana, Kha'Zix, Master Yi): 전투 중 Move Speed와 미니언 통과로 카이팅을 도와준다"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "모든 trade에서 4번째 탄 크리티컬을 적중시키고, 서폿과 W root를 연계해 장거리에서 타겟을 묶는다. 오브젝트 한타에서 R 사선이 깨끗하게 유지되도록 자리를 잡는다."
  weakness: "공격 속도가 고정되고 dash가 없다. 기동성 좋은 다이버와 engage 탱커에게 하드 카운터; 서폿이 끌려나가면 Flash 외에는 도주기가 전혀 없다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "기동성이 없는 장거리 marksman"
      reason: "Jhin과 마찬가지로 dash가 없지만 효과적인 burst 구간이 더 짧다. 서폿 follow-up과 함께 4번째 탄 패턴이 도는 순간부터, 6레벨 이후 직접 trade를 이긴다."
    - examples: ["sivir", "kalista"]
      archetype: "근거리에서 사는 reset/기동형 marksman"
      reason: "이들의 키트는 짧은 사거리를 원한다. Jhin은 평타 사거리 밖에서 W-root을 걸고 E (lotus 함정)로 마무리해 리셋 전에 처치 창을 닫을 수 있다."
    - examples: ["soraka", "yuumi"]
      archetype: "봇 라인의 순수 힐 enchanter"
      reason: "Jhin의 W-root + R 처형은 저체력 힐봇을 빠르게 처벌한다. Mortal Reminder가 완성되면 (Grievous Wounds로 회복 절반) 힐봇 게임플랜은 무너진다."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "1-3레벨 공격적인 라인 불리"
      reason: "Jhin의 재장전 구간 (4발 사이클이 끝날 때마다 권총이 재장전된다)에 burst를 박는다. Jhin은 disengage 기동기가 없고 W root는 1레벨에 혼자서는 만들 수 없는 setup이 필요하다."
    - examples: ["kai-sa", "tristana"]
      archetype: "자체 도주기를 가진 기동형 hypercarry"
      reason: "내장된 dash (Kai'Sa의 E 재배치, Tristana의 W 점프)로 W root를 피하고 R 캐스팅 창을 끊는다. 1대1 후반에 Jhin은 카이팅으로 빠져나갈 수 없다."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "하드 engage 탱커 서폿"
      reason: "재장전 프레임에 Jhin에게 논타게팅이 아닌 점-앤-클릭 CC를 박는다. 그는 자기 자신을 peel할 dash가 없고, W는 적이 이미 피해를 입은 상태여야 root이 걸린다."
---

## 개요

Jhin은 지속 DPS (damage-per-second, 시간당 지속 피해) 캐리가 아니라 저격수처럼 플레이하는 장거리 marksman이다. 권총 **Whisper (패시브)** 는 재장전 사이에 4발만 쏘지만, 4번째 탄은 항상 크리티컬이고 저체력 타겟을 처형한다 — 그래서 모든 trade (라인전에서 짧은 공방, 풀 킬 시도가 아닌 잽 교환)는 부상당한 챔피언에게 그 4번째 총알 타이밍을 맞추는 것을 중심으로 짜여진다. dash가 없고 공격 속도가 고정되어 있어, 기계적인 APM보다 자리잡기와 setup이 더 중요하다.

게임 플랜은 이렇다: **Q**와 평타로 poke하다가 서폿이 engage 하는 순간 **W** root을 4번째 탄 크리티컬로 이어 붙인다. 6레벨 이후 **R**은 픽 (한타 밖에 고립된 적 처치)과 오브젝트 공성을 적 팀 사거리 밖에서 만드는 킬로 바꾼다. 전열이 다이버로부터 너를 peel해 준다면 25분 무렵 대부분의 봇 듀오를 outscale한다.

## 추천 빌드

**시작 아이템:** Doran's Blade + Health Potion 1개. Draven이나 Lucian처럼 평타 견제가 강한 매치업이 아니면 Doran's Shield는 패스 — 그런 라인에서는 추가 체력이 추가 피해보다 가치가 높다.

**코어 아이템 (순서대로):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 첫 burst 스파이크. 5% 미만 처형이 Jhin의 4번째 탄 처형 및 R과 시너지를 일으켜, 팀이 놓칠 킬을 마무리한다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 공격 속도 신발은 marksman 표준. Jhin의 고정된 공격 속도는 발당 피해로 환산되므로, AS가 곧 순수 피해가 된다.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — energized 샷이 장거리 poke를 더해주고 (Jhin의 정체성과 맞물림), 늘어난 사거리로 상대가 자기 평타 거리에 들어오기 전에 때릴 수 있다.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Jhin의 4번째 탄은 확정 크리티컬이라, IE의 크리티컬 피해 배수가 squishy를 향한 한 방 버튼으로 만든다.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 적 전열이 방어 아이템을 갖추는 후반을 위한 방어구 관통.

**상황별 아이템:**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 적 팀에 탱커가 없을 때의 첫 아이템 변형. Lethality (방어구 관통 고정값)가 W-root 버스트를 키워 초반 소규모 교전에서 squishy를 1-2발에 지운다. 액티브 Move Speed로 R 캐스팅 창에 맞춰 자리도 잡는다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐 누적 조합 (Soraka, Aatrox, Vladimir) 상대로 Lord Dominik's 대신. R 처형 구간에 Grievous Wounds가 회복을 절반으로 깎는다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — R 채널링을 끊는 단일 대상 하드 CC (Blitzcrank hook, Morgana Q, Ashe R) 상대로 3-4번째 아이템. 스펠 실드가 한 번을 막아 캐스팅을 마칠 수 있게 해 준다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 유리하고 전담 peeler 없이 장기전을 버틸 lifesteal과 보호막이 필요할 때.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 올인 다이버 (Diana, Kha'Zix, Master Yi) 상대. 전투 중 Move Speed와 미니언 통과로 카이팅 (공격하면서 뒤로 빠지기)을 돕다가 팀이 peel해줄 때까지 버티게 해준다.

**신발:** 기본은 Berserker's Greaves. Boots of Swiftness는 적 팀이 피할 수 없는 슬로우를 쌓을 때만 정답 (Ashe + Nautilus + Anivia 같은 조합).

**스킬 선마:** **Q** 먼저 (주 DPS 및 라인 정리), 다음 **W** (root 신뢰성과 기본 피해), 마지막 **E** (utility, 슬로우용으로 1포인트면 충분). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주 트리 **Precision** — **Fleet Footwork** (라인전 기동력+체력 회복), **Presence of Mind** (궁 사용 시 마나 환급), **Legend: Bloodline** (lifesteal 스케일링), **Coup de Grace** (저체력 적에게 추가 피해 — Jhin의 4번째 탄 처형과 호응). 부 트리 **Sorcery** — 후반 스케일링용 **Absolute Focus**와 **Gathering Storm**.

## 주요 매치업

- **Caitlyn:** 평타 사거리는 너보다 길지만 패시브 4스택만 쌓이면 모든 all-in (잽이 아니라 킬을 노리는 풀 커밋 교전)에서 진다. 미니언 뒤에 서고, 트랩 헛발 친 순간에 Q-poke, 서폿이 먼저 닿으면 W-root.
- **Draven:** 라인 불리. 1-3레벨에 평타 trade를 피한다 — DPS 직접 교환에서 진다. 그가 도끼 stack에 묶인 사이 Q poke만 누적하다가, 그가 과욕을 부리면 4번째 탄 크리티컬로 한 방에 처벌한다.
- **Lucian:** 너의 재장전 구간에 burst를 박는다. 4발 카운터 (권총 아이콘이 남은 발수를 보여준다)를 항상 의식하고, 3발이나 4발 상태로 trade를 시작하지 않는다 — 먼저 재장전 후 engage.
- **Sivir:** 그녀의 스펠 실드가 W-root을 막는다. Q로 실드를 먼저 빼낸 뒤, 쿨다운 들어갔을 때 W를 던진다. 6레벨 이후 R로 추격이 가능하니, 서폿이 follow-up CC가 있을 때만 싸운다.
- **Soraka / Yuumi:** 순수 힐 서폿. Mortal Reminder를 3-4번째 아이템으로 구입한다 — Grievous Wounds (회복을 절반 깎는 디버프) 없이는 아무리 많이 쳐도 못 죽인다.

## 파워 스파이크 및 승리 조건

- **2-3레벨:** **Q**와 **W**가 손에 있으면 라인 최강의 2레벨 올인 패턴이 완성된다 — 서폿 engage → 평타 → Q → W root → 4번째 탄 크리티컬. 적보다 먼저 2레벨에 도달한 첫 순간 즉시 fight 강요.
- **6레벨:** **Curtain Call** 해금. 강에서 정글이 시작한 킬을 마무리하거나, 귀환 도중 한 화면 떨어진 저체력 적을 픽한다. 오브젝트 교전 시작 전에는 항상 R을 들고 있어야 한다.
- **The Collector 완성 (~ 11-13분):** 첫 아이템 스파이크. 5% 처형이 서폿이 시작한 킬을 닫게 해준다. 라인 스노우볼링 (초반 우위를 아이템 우위로, 이를 다시 킬 우위로 전환)이 가장 쉬운 구간.
- **Infinity Edge 완성 (~ 28-32분):** 세 아이템 스파이크. 4번째 탄이 비탱커 챔피언 대부분을 한 방에 보낸다. 지금부터 오브젝트 한타를 강제 — 후반 Jhin은 IE + Rapid Firecannon으로 적 백라인 (탱커 뒤의 캐리)을 그들의 R 사거리 밖에서 때린다.

## 흔한 실수

- **4번 탄이 탱커에게 들어가는 평타.** 4번째 탄 처형은 풀체 전열에는 낭비다. 앞으로 나오는 squishy를 위해 4번째 탄을 아끼거나, 미니언 막타로 사이클을 리셋한 뒤 다시 engage 한다.
- **재장전 중에 앞으로 걷기.** 4번째 탄 후에는 다음 평타 전에 무조건 재장전해야 한다. 그 구간엔 한 발자국 뒤로 — Jhin이 죽는 많은 순간이, 적이 "지금 못 쏘는구나" 하고 깨닫는 0.5초 사이에 일어난다.
- **포크용으로 W를 막 던지기.** W는 너 또는 아군에게 최근 (~4초 이내) 피해를 입은 적에게만 root이 걸린다. 평타를 먼저 박거나 서폿 engage를 기다린 뒤 사용 — 그렇지 않으면 W는 그냥 옆으로 비키면 그만인 느린 직선 피해다.
- **시야 없이 R 채널링.** Curtain Call 동안 Jhin은 그 자리에 묶인다. 측면 와드 없이는 어쌔신이 등 뒤로 돌아 채널링 중에 그를 처치한다. R을 누르기 전 측면에 E (lotus 함정)부터.
- **오브젝트에서 E를 안 까는 것.** Lotus 함정은 Drake와 Baron pit 진입로를 0 비용으로 커버한다. 쿨마다 깐다 — 측면이 드러나고, engage가 늦춰지고, W root이 확정된다.

## 고급 팁

**E** (Captive Audience)를 **W** root의 확정용으로 쓴다. lotus 함정은 보이지 않게 무장되어 밟은 적을 슬로우로 묶는다. 적 서폿이 와드를 박으러 어디로 걸어갈지 예측해서 그 지점에 **E**를 2초 일찍 깔고, 함정 슬로우가 발동되는 순간 **W**를 발사한다 — 슬로우 때문에 3000 사거리 W-skillshot을 맵 어디서도 피할 수 없게 된다. 숙련된 Jhin은 이 기법으로 한 한타당 최소 한 번의 3000 사거리 W-root을 만든다.
