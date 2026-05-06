---
title: "Draven Bot Build & Guide — Patch 16.9"
slug: "draven-bot"
language: "ko"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Draven 바텀 공략. 도끼 받기 기본기, snowball 빌드, 주요 매치업, 파워 스파이크 활용, 자주 하는 실수, 마무리 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Spinning Axe를 받거나 유닛을 처치하면 Adoration 스택이 쌓인다. 챔피언 takedown 시 스택이 추가 골드로 환산 — Draven의 snowball 엔진."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "다음 평타에 추가 물리 피해. 명중 후 도끼가 위로 튀어 오르며, 받으면 또 한 발이 장전되어 최대 두 개까지 동시에 보유한다."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "짧은 Move Speed와 Attack Speed 버프. Spinning Axe를 받으면 쿨다운이 초기화 — 잘 받을수록 기동력이 늘어난다."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "직선 도끼로 적을 옆으로 밀치고 둔화. 핵심 peel과 disengage 도구이며, 서포터의 후속타를 위한 위치 조정에도 쓴다."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "두 개의 거대한 도끼를 맵 너머로 날리며 재시전 시 회수. 적을 추가로 맞힐수록 피해는 줄지만 Adoration 기반 HP 임계 미만의 대상은 처형한다."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐량이 강한 조합 상대 (Soraka, Yuumi, Aatrox, Vladimir) — Grievous Wounds로 회복량 절반 감소"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "고폭딜 AP 상대 (Syndra mid + 더블 메이지 조합) — 50% HP 미만 시 보호막과 마법 저항"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "암살자 dive 상대 (Zed, Talon, Rengar) — 부활로 다시 죽기 전에 Adoration 스택 환수 가능"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "단일 대상 lockdown CC 상대 (Morgana Q, Lux Q, Ashe R) — spell shield가 첫 hard CC 차단"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "도끼 받기와 막타로 Adoration을 쌓고 첫 킬에서 600+ 골드 스파이크로 환수. 우위를 더 빠른 아이템 완성으로 바꾸고 상대 ADC가 성장하기 전에 모든 교전을 snowball한다."
  weakness: "dash와 escape가 없고, 도끼 받기 패턴이 예측 가능한 동선을 강요한다. 1-3레벨 hard CC면 W 리셋 전에 죽고, Adoration 흐름을 놓치면 골드 곡선이 무너진다."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "초반이 약한 hyper-scaling 마크스맨"
      reason: "이들은 1-3레벨에 그저 farming만 한다. Draven의 Q는 받을 때마다 막대한 추가 피해를 주고 W가 catch마다 리셋되므로, 두 아이템을 갖추기 전에 짓밟을 수 있다."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "dash가 없는 immobile 마크스맨"
      reason: "Draven의 E가 밀치고 둔화하며 W는 순간 Move Speed 버프를 준다. 이 ADC들은 Draven이 들어갈 때 disengage가 불가능하다. 6레벨 이전 all-in을 항상 진다."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "라인전에서 heal-trade하는 enchanter 서포터"
      reason: "Draven의 Q 누적 피해는 poke-and-heal 라인이 따라가기엔 너무 빠르다. 두 번 연달아 받으면 Soraka의 한 사이클을 뚫고, snowball이 매 킬을 200+ 골드 우위로 바꾼다."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "장거리 poke 마크스맨"
      reason: "Draven이 catch 동선에 묶인 사이 자기 attack range 550 밖에서 poke한다. engage하지 못하는 1분마다 Adoration 스택이 그대로 사라진다."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "hard-engage CC 서포터"
      reason: "Draven은 dash도 면역기도 없다. 2레벨 CC 체인 한 번이면 도끼들은 라인에서 무의미하게 튀고 Draven은 삭제된다. 6레벨 이전엔 말 그대로 반격이 불가능하다."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "lockdown / pick 서포터"
      reason: "Thresh의 hook 한 번이나 Morgana Q가 Draven을 catch 도중에 멈춘다. catch가 끊기면 Q 리셋이 죽고 W 속도가 떨어져, escape 없는 정지된 ADC가 된다."
---

## 개요

Draven은 단 하나의 메커니즘을 중심으로 설계된 snowball 마크스맨이다 — 자신의 회전 도끼를 직접 받아내는 것. **Spinning Axe (Q)**가 장전된 상태에서 모든 평타는 공중으로 튀어 오르는 도끼로 발사되며, Draven이 낙하 지점 아래로 걸어가면 도끼를 받아 막대한 추가 피해를 입히고 다음 Q 충전을 다시 장전한다. 동시에 최대 두 개까지 보유 가능하다. 패시브 **League of Draven**은 그 catch들을 골드로 바꾼다 — 모든 catch와 모든 미니언 처치가 Adoration 스택을 쌓고, 일정 스택 임계치 이후 첫 챔피언 takedown 시 스택을 골드 보너스로 환수한다 (보통 킬당 100-500 추가 골드).

게임 플랜은 잔인하고 직선적이다 — 1레벨부터 바텀을 압박하고, 8분 전에 한 킬을 강제하고, Adoration 스파이크를 환수한 뒤, snowball lead (킬 → 골드 → 아이템 → 더 많은 킬로 복리되는 초반 우위) 로 power-farm한다. 스킬 표현은 catch 위치 선정 (skillshot에 노출되지 않으면서 도끼 낙하 지점 예측) 과 **Blood Rush (W)** 가동률에 있다 — 모든 catch가 W를 리셋하므로, 유려한 Draven은 두 번 연속 도끼를 놓치는 Draven보다 영구적으로 빠르다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + Health Potion 1개. Doran's Blade는 마크스맨 표준 starter다. 소량의 Attack Damage (AD), 약간의 HP, 그리고 lifesteal (평타로 가한 피해의 일정 비율을 회복) 을 준다. Q가 평타 피해에 비례하므로 Draven은 AD 한 점 한 점이 필요하고, lifesteal로 회복하지 않으면 catch trade 패턴이 HP를 빠르게 갉아먹는다.

**핵심 아이템 (순서):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 첫 아이템 snowball 픽. Lethality (대상 방어력 일부를 무시하는 일종의 방어구 관통, 특히 squishy 대상 — ADC와 마법사처럼 방어가 낮은 챔피언 — 에 효과적) 와 5% HP 미만 처형이 결합되어 Q 장전 평타 하나하나가 킬 위협이 된다. Adoration과 잘 맞물린다 — 킬이 많을수록 스택이 늘고, 스택이 많을수록 takedown당 골드 스파이크가 커진다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 신발 (초당 평타 수 증가). Draven의 default다. 평타가 많을수록 초당 catch 기회가 많아지고, W는 catch마다 리셋되기 때문이다.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 치명타 피해 배율 강화. 두 번째 크리트 아이템 (The Collector는 AD 스케일링상 의사-크리트 소스 1, IE는 2) 이후 175% 치명타 피해를 잠금 해제한다. Spinning Axe 피해는 AD에 비례하며, 이 시점의 catch 크리트는 대부분의 squishy 대상을 한 방에 잡는다.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (평타로 가한 피해의 일정 비율을 회복) 과 풀 HP에서 시작되는 보호막. Draven은 escape가 없어서 암살자에게 죽는다 — 보호막은 한타당 한 차례 추가 fight를 보장한다.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 적의 추가 HP에 비례하는 마지막 슬롯 방어구 관통 (탱커가 클수록 효과적). 상대 팀의 회복이 강하면 Mortal Reminder로 교체.

**상황별 교체:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — Lord Dominik's와 같은 슬롯, 상대 팀이 회복이 강할 때 (Soraka, Yuumi, Aatrox, Vladimir) 이 버전을 채택한다 — Grievous Wounds를 적용해 적 회복량을 절반으로 줄인다.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 고폭딜 AP 조합 (Syndra + Veigar + Annie) 상대 후반 슬롯. 보호막은 HP 임계치 이하 — 즉 50% HP 미만 — 에서 발동되어 마법 피해를 흡수한다.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 암살자 dive (Zed, Talon, Rengar) 상대 마지막 슬롯. 부활은 도주나 Adoration 환수 마무리에 4초를 주고, armor 스탯은 dive 피해를 약 20% 줄여준다.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 단일 대상 lockdown CC (Morgana Q binding, Lux Q root, Ashe R stun) 상대 시 Bloodthirster를 대체한다. spell shield는 40초마다 첫 hard CC를 차단한다 — 묶이는 대신 그 시간을 평타에 쓴다.

**스킬 빌드:** **Q** 1순위 (도끼의 순수 피해, snowball의 축), **W** 2순위 (catch 흐름을 위한 Move Speed와 Attack Speed), **E** 마지막 (utility — 3레벨 한 포인트면 후반까지 충분). **R**은 늘 그렇듯 6, 11, 16에 찍는다.

**룬:** 주문 트리 **Precision** (평타 중심): 핵심으로 **Conqueror** (평타로 누적되며 장기 fight에서 피해 일부를 회복으로 전환 — Draven의 all-in 패턴에 완벽), 이어서 **Triumph** (takedown 시 회복과 추가 골드 — Adoration 환수와 시너지), **Legend: Alacrity** (누적 takedown당 attack speed 증가), **Coup de Grace** (저체력 대상에 추가 피해). 보조 트리 **Domination**에 **Sudden Impact** (dash나 버프 사용 후 추가 Lethality — Draven은 W로 발동) 와 **Treasure Hunter** (고유 takedown당 추가 골드 — snowball 정체성과 부합).

## 주요 매치업

- **Caitlyn:** 보드에서 가장 어려운 라인. attack range 650으로 Draven의 550을 모든 trade에서 out-poke (자신의 사거리 밖에서 HP를 깎는 것) 한다. 그녀가 막타에 animation-locked일 때만 한 발 들어가고, 도끼를 받으려고 함정 위로 절대 걸어가지 마라 — 함정에 떨어지면 그냥 도끼를 버려라.
- **Aphelios:** 6레벨 이전 무료 라인. Aphelios의 Q는 9초 쿨다운에 무기 탄약이 떨어지지만 Draven의 Q는 영구적이다. 2레벨 강하게 push해서 (그쪽 진영에 wave가 먼저 crash하도록 유도) 가장 약한 무기 (Severum 또는 Crescendum — 둘 다 melee range 메인핸드) 에 engage하고, 5분 전에 그의 Flash를 빼라.
- **Lucian:** 거울 티어 초반 ADC. 그는 Q-AA-AA 패시브 콤보로 1초 창에서 너를 out-trade하지만, 너는 누적된 Q들로 4초 창에서 그를 out-trade한다. short trade를 거절 (engage 자체를 하지 않기) 하고 extended trade에 commit해라 (trade = 짧은 타격 교환, extended trade = Draven의 누적 Q들이 Lucian의 burst를 넘어서는 3초 이상의 지속 fight).
- **Jhin:** 6레벨 이전 너를 poke한다 (그의 원거리 피해가 초반 레벨에서 멀리서 너의 HP를 깎는다) 만 4번째 사격 reload에서 all-in (퇴로 옵션 없이 킬을 노리는 전면 commit fight) 에 진다. 그의 사격 카운터를 추적해서 "0/4"에서 또는 그가 미니언에 한 발 낭비한 직후 engage해라. 그의 W root는 dash 없는 Draven에게 1초간 무료 평타를 보장한다.
- **Samira:** 그녀는 라인에서 패시브 S 등급을 쌓아 **R**을 쓰고 싶어 한다. 그녀가 S에 도달했다면 trade하지 마라 — 물러서고 recall (기지로 귀환) 한 뒤 풀 HP에서만 재교전한다. 그녀의 **R**은 melee range에서 너를 out-DPS하지만, Draven의 E (Stand Aside) 가 채널 사거리 밖으로 밀어내고 fight를 리셋한다.

## 파워 스파이크 및 승리 조건

- **2레벨:** Draven의 Q는 1랭크에서도 막대한 추가 피해를 준다. **W**에 한 포인트로 Move Speed와 Attack Speed를 더하면 2레벨 all-in은 게임에서 가장 강력한 축에 든다 — 대부분의 Draven 게임은 누가 2레벨 trade를 잡느냐로 결정된다.
- **6레벨 + 첫 킬:** Whirling Death **R**이 저체력 킬 버튼이 된다 — Adoration 스택과 연동된 HP 임계치 미만의 어떤 대상이든 처형 (즉사) 한다. 6레벨 동안 catch를 계속해 왔다면 임계치는 도주하는 적을 맵 너머에서 마무리하기에 충분하다.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector 완성 (~ 11-13분):** 첫 아이템 스파이크 (레벨 또는 아이템 마일스톤에 묶인 명확한 power 도약). Lethality + 5% HP 처형 = Q 장전 평타가 chip-damaged 대상에 킬을 위협한다. 이 타이밍에 fight를 강제하라 — 여기서 Adoration 환수가 두 번째 아이템을 3분 일찍 마련하는 일이 잦다.
- **3아이템 스파이크 (Collector + Berserker's + Infinity Edge, 22-24분 전후):** Draven의 burst (1-2초 창에서 쏟아내는 피해) 가 모든 마크스맨 중 최고가 된다. 이 시점부터 오브젝트 (Dragon, Baron, Rift Herald — 팀 버프나 맵 압박을 주는 중립 대상) 중심으로 플레이하고 사이드 라인의 고립된 대상에 pick (한타 밖에서 고립된 적을 제거) 을 노려라.

## 흔한 실수

- **위험한 위치에서 도끼 받기.** Q를 받겠다고 wave 안쪽 400 유닛까지 걸어 들어간 Draven은 Caitlyn의 함정이나 Leona의 engage를 맞는 Draven이다. 도끼가 나쁜 곳에 떨어지면 **그냥 버려라** — Q 하나 잃는 건 괜찮지만, overextension (플레이를 쫓느라 안전선을 넘는 것) 으로 킬을 잃는 건 안 된다.
- **Adoration 스택 쟁이기.** takedown 시도 후 ~30초 안에 환수하지 않으면 스택이 감소한다. 100+ 스택에 도달하면 fight를 강제하거나 Scuttle skirmish (강에서 Scuttle Crab을 두고 벌이는 2-4명 소규모 교전) 를 잡아라 — 스택을 안고 farming만 하는 건 공짜 골드를 버리는 것이다.
- **R을 처형 대신 피해용으로 쓰기.** Whirling Death의 피해는 적을 맞힐수록 급격히 떨어진다. wave에 쏘는 건 낭비다. 도주하는 저체력 대상에 두 번째 도끼 (회수 재시전) 로 던지면 1500골드짜리 플레이가 된다. R은 저격소총처럼 다뤄라 — 라인 정리 도구가 아니다.
- **한타에서 가만히 서 있기.** Draven은 dash가 없다. 모빌리티 위협 (Zed, Diana, Camille) 앞에서 같은 자리에 2초만 서 있어도 죽는다. 평타 사이에 strafe (공격하면서 옆으로 이동) 해라 — 짧은 걸음, 지속적인 움직임. catch 동선이 너를 앞으로 밀어내고, W 속도가 직후 위치를 리셋한다.
- **Stand Aside (E)를 peel로 쓰지 않기.** Draven의 E는 적을 옆으로 밀치고 둔화한다. 한타에서 이건 그냥 poke가 아니라 disengage (commit한 fight를 끊고 적의 all-in 결정을 무너뜨리는 스킬) 다 — Camille이나 Hecarim이 knockback에서 회복하는 동안 1.5초의 무료 평타를 사 준다.

## 고급 팁

사이드 라인에서 **W-into-fountain-axe-bounce** 트릭을 연습하라 — 빈 Q를 벽이나 얇은 엄폐물에 던진 직후 W로 튕기는 영역을 통과해 걸어간다. Blood Rush의 Move Speed는 빠르게 감소하므로, 도끼가 호를 그리는 동안 시전하면 W 없이는 닿지 않는 catch 위치에 도달할 수 있고, 그 도끼를 받아서 다음 플레이를 위해 W 쿨다운을 리셋한다. 이 한 가지 메커니즘이 세 번에 한 번 도끼를 놓치는 평범한 Draven과 던진 모든 Q를 받아내는 유려한 Draven을 가른다.
