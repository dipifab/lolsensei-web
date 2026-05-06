---
title: "Ashe ADC Build & Guide — Patch 16.9"
slug: "ashe-bot"
language: "ko"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Ashe ADC 봇 라인 가이드. Frost Shot 카이팅 셋업, marksman 코어 빌드, 핵심 매치업, 파워 스파이크, 흔한 실수와 마무리 팁까지 한 페이지에 정리한 실전 공략입니다."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "모든 평타가 대상에게 슬로우를 건다. 치명타는 추가 피해 대신 더 강한 슬로우를 건다. Ashe 카이팅(공격하면서 뒤로 빠지는 동작)의 기반이다."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "평타로 스택을 쌓는다. 풀스택에서 활성화하면 추가 공격속도를 얻고 매 평타가 강화된 다중 화살 난사로 바뀐다. 메인 DPS 버튼."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "정면 1200 사거리 부채꼴 화살. 적 한 명당 화살 한 발만 맞고 Frost Shot 슬로우가 적용된다. 라인전 poke와 trade의 핵심 도구."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "맵 어디든 매를 보내 5초 동안 vision(전쟁의 안개 너머를 보는 능력)을 확보한다. 2 충전. 데미지가 아닌 오브젝트 정찰용."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "글로벌 skillshot(논타겟, 직선 비행). 처음 맞은 챔피언을 기절시킨다. 비행 거리가 길수록 기절 시간이 길어진다(최대 ~3.5초)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "HP/armor 누적형 상대 (Cho'Gath, Sion, Malphite, Ornn) — % 방관으로 평타가 다시 실 데미지가 된다"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "힐량 누적 조합 상대 (Soraka, Vladimir, Aatrox) — Grievous Wounds로 적의 회복을 절반으로 깎는다"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "암살자나 diver 상대 (Zed, Kha'Zix, Talon) — Ghost 패시브로 카이팅 중 유닛을 통과한다"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "강한 poke나 burst 상대 — 큰 lifesteal 회복 + 초과 회복분이 보호막으로"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "한타에서 Frost Shot 슬로우를 깔고, frontline 뒤에서 Q 강화 평타로 카이팅하며, 맵 반대편의 단독 타겟을 R로 끊어 오브젝트 통제권을 가져온다."
  weakness: "marksman 중 평타 기본 이동속도가 가장 느리다. dash도 reposition 수단도 없어, 근접까지 들어오는 diver와 암살자에게 support가 peel하지 못하면 그대로 삭제된다."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "초반 poke가 없는 단거리 marksman"
      reason: "Ashe의 W는 1200 사거리에 Frost Shot 슬로우가 붙는다. 상대의 500-550 평타 거리 밖에서 일방적으로 깎고, 모든 접근을 trade 승리로 바꾼다."
    - examples: ["kog-maw", "senna"]
      archetype: "탈출기 없는 후반형 carry"
      reason: "맵을 가로지르는 R이 오브젝트 리젠 타이밍이나 분수대 리셋 윈도우에서 이들을 즉시 제거한다. dash가 없어 안개 밖으로 나오는 화살을 피할 수단이 없다."
    - examples: ["ornn", "sejuani"]
      archetype: "기동력 없는 느린 탱커 frontline"
      reason: "Ashe는 W + 평타로 frontline을 계속 슬로우하고, DPS 아이템이 후방을 끊을 시간을 벌도록 교전을 길게 끈다. support와 함께 카이팅하면 탱커는 닿지도 못한다."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "장거리 poke 보유 marksman"
      reason: "Caitlyn 평타 650, Jhin 4발째 750, Varus W 925까지 — 모두 Ashe의 600 사거리 밖에서 일방적으로 poke해 매 웨이브 HP를 깎고 W 거리에 들어오지 않는다."
    - examples: ["lucian", "tristana"]
      archetype: "dash가 있는 고기동 marksman"
      reason: "Lucian의 E와 Tristana의 W는 즉시 위치를 바꿔 Ashe의 슬로우를 무시한다. 다른 ADC가 무는 카이팅 세금을 내지 않고 거리를 좁힌다."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "강한 CC를 가진 burst engage support"
      reason: "Ashe는 lock-down 사슬을 끊을 dash나 보호막이 없다. Leona Q나 Nautilus Q가 들어가면 W로 반응할 새 없이 제압당하고, 슬로우는 기절 상태에서 무용지물이다."
---

## 개요

Ashe는 League에서 가장 단순한 marksman이다 — "ADC"(attack damage carry: 평타 기반 원거리 챔피언으로, 후반에 팀의 주 데미지원이 되는 역할)로 분류된다. dash도 없고 reposition 수단도 없으며, 같은 역할군 안에서 평타 기본 이동속도가 가장 느리다. 그 대가로 ADC 중 가장 안정적인 utility 키트를 받는다 — 모든 평타가 슬로우를 걸고, **W**는 1200 게임 단위(화면 절반 정도)에서 슬로우가 붙은 poke(교전을 걸지 않고 원거리에서 HP를 깎는 견제)를 날리고, **R**은 맵 어디든 닿는 글로벌 skillshot 기절기로, 모든 오브젝트 위에서 팀에 무료 engage를 만들어 준다. 이 챔피언은 **kite**(공격하면서 뒤로 빠져 적과의 거리를 유지하는 기술)와 pick(한타 밖에서 적 한 명을 끊는 플레이)을 팀에 열어 주기 위해 설계됐다.

라인전 게임 플랜은 단순하다. 쿨다운마다 적 ADC에 **W**를 맞춰 슬로우와 chip 데미지로 HP를 깎고, 평타로 안전하게 farm하다가, support의 CC(Crowd Control: 기절·슬로우·속박처럼 적을 그 자리에 묶는 효과)가 준비된 6레벨 타이밍에 **R** 플레이를 본다. 한타(Drake나 Baron 같은 오브젝트의 승부를 가르는 5대5 교전 — 처치한 팀에 버프를 주는 중립 몬스터)에서는 frontline(교전을 여는 탱커/브루저) 뒤에서 평타 최대 사거리를 유지하다, 4스택(평타로 쌓이는 Q 게이지, 초상화 아래 카운터로 표시)이 차면 **Q**를 발동시키고, frontline에 발을 들이는 적에게 슬로우를 사슬처럼 건다. Ashe에서 가장 어려운 기술은 **R** 예측이다 — 1초 가까운 비행 시간을 두고 저격하는 감각이 무료 pick과 버려진 궁의 차이를 만든다.

## 추천 빌드

**시작 아이템:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**(소량 AD + lifesteal — 가한 데미지의 일부를 회복) + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 1개.

**코어 아이템 (구매 순서):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — 첫 코어 power spike(아이템 완성 후 챔피언이 눈에 띄게 강해지는 순간). Ashe의 잦은 평타로 Energized 패시브(스택형으로 충전돼 강화 평타에 추가 마법 피해를 주는 효과)가 매우 빠르게 발동된다.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 공격속도 신발. Ashe의 강화 Q가 공격속도와 함께 스케일하므로, 8분 이후 모든 교전에서 도움이 된다.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 모든 평타에 측면 화살 두 발을 추가한다. 이 화살들이 주변 적에게 Frost Shot 슬로우를 걸어, 한타에서 Ashe가 frontline 탱커만 평타를 쳐도 적 팀 전체에 슬로우가 깔린다.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 후반 치명타(critical strike: 평타가 ~175% 데미지를 줄 확률) 배수기. 이 시점에서 강화 Q는 "꽤 아픔"에서 "squishy를 2초 안에 삭제"로 격이 달라진다(squishy: 방어력이 낮은 챔피언).

**상황별 아이템:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — HP/armor 누적형 상대 (Cho'Gath, Sion, Malphite, Ornn). 백분율 방어구 관통이 적의 armor 중 일정 비율을 무시하므로, 탱커도 squishy와 비슷한 속도로 죽는다.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 힐량 누적 조합 상대 (Soraka, Vladimir, Aatrox). Grievous Wounds(적이 받는 회복량을 절반으로 깎는 상태이상)를 적용한다.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 암살자나 diver 상대 (Zed, Kha'Zix, Talon — 후방을 향해 파고들도록 설계된 챔피언). Ghost 패시브로 카이팅 중에 적 미니언과 챔피언을 통과해 지나갈 수 있다.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 강한 poke(원거리 마법사들의 장거리 chip 데미지)나 burst 조합 상대. lifesteal로 교전 중 회복하고, 회복이 풀피를 넘으면 그 양을 보호막으로 저장한다.

**신발:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**가 Ashe에서는 유일하게 옳은 선택이다. 공격속도가 그대로 강화 Q DPS로 환산된다.

**스킬 마스터 순서:** **Q** 선마(강화 평타당 추가 AD가 늘고, 활성 시간도 길어진다). **W** 후마(쿨다운이 1렙 18초에서 5렙 4초로 줄어 라인전 poke 도배가 가능해진다). **E**는 마지막(유틸리티 전용). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Precision**(평타 스케일링 트리)에 **Lethal Tempo**(같은 챔피언에게 평타를 계속 칠수록 추가 공격속도), **Triumph**(처치 관여 시 회복), **Legend: Alacrity**(스택당 공격속도 증가), **Coup de Grace**(40% HP 이하 적에게 추가 피해). 보조 트리 **Inspiration**에 **Biscuit Delivery**(라인전 무료 마나/HP 비스킷)와 **Cosmic Insight**(**Flash**와 **R** 가동률 상승).

## 주요 매치업

- **Caitlyn:** 가장 까다로운 라인전. 평타 사거리가 650으로 너의 600보다 길고, trap(W)도 더 길며, 1300 사거리의 hook(E)을 가졌다. 그녀가 trap을 깔 때는 미니언 뒤로 숨고, 그녀가 자기 미니언 라인보다 너무 앞으로 overextend(전진해 갱 시 도주로 없음)하면 그때만 support의 engage를 받아준다. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv**까지는 power-farm(위험을 피하고 미니언 골드만 안정적으로 모으는 운영)에 집중하다, 이후 맵 반대편으로 **R** 끊기를 노린다.
- **Lucian:** 1레벨에는 Ashe에게 지지만, 2레벨 Q + E 콤보로 뒤집힌다. 그가 너에게 double-AA(평타 두 번 연속)를 칠 때를 위해 **W**를 아껴 두었다가, 그가 콤보 중간에 묶인 동안 거리를 벌려라. 그의 **E**가 빠진 직후엔 절대 trade하지 마라 — dash가 쿨에 들어가기 전까지 그를 잡을 수 없다.
- **Vayne:** 6렙 전엔 무료 farm: 사거리 550에 슬로우도 없다. 와이브를 그녀 쪽 타워로 밀고(push), 쿨마다 **W**로 harass(지속적으로 chip 데미지를 넣어 HP를 깎는 행위)한다. 6레벨 이후엔 그녀의 궁이 Q dash에 은신을 더해 주므로, 부쉬(시야를 막는 작은 지형)로 따라가지 마라.
- **Jhin:** 그의 W(poke skillshot)에 장거리에서 일방적으로 깎인다. 미니언 첫 줄 뒤에 자리잡아라; 그의 W가 미니언을 먼저 맞히면 자기 자신이 슬로우에 걸린다. 그의 재장전(4발 탄창 + 2.5초 수동 reload)을 노려 응징하라.
- **Draven:** 평타 정면 대결에서 진다 — 그의 Q 도끼가 한 평타당 너의 기본 평타보다 훨씬 큰 데미지를 준다. 1대1 trade를 피하고, 그의 손에 도끼가 없을 때만 commit하라. 그가 3킬 리드를 잡으면 평소보다 빨리 ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer**를 올려라.

## 파워 스파이크 및 승리 조건

- **1레벨:** **W**로 강하다. 1200 사거리 부채꼴은 모든 ADC 중 1레벨 trade("trade"는 짧은 데미지 교환으로, 풀 킬 시도가 아니다) 도구 중 최강이다. 적 ADC가 cs(creep score: 미니언을 마지막 타격으로 처치해 골드 획득)를 위해 다가오면 무료 trade를 한 번 챙겨라.
- **6레벨:** 첫 **R**은 CC support와 함께라면 라인 킬을 연다. Leona / Nautilus / Pyke가 궁이 있다면, R + 그쪽 engage = 적 ADC가 풀피로 타워에 붙어 있지 않은 한 보장 킬이다.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv 완성 (~ 11-13분):** 웨이브 클리어(AOE 데미지로 적 미니언을 빠르게 정리)가 뒤집힌다. W + 평타 2회로 웨이브를 밀고 roam(라인을 떠나 아군을 도우러 가는 움직임)을 나가, Drake나 mid skirmish(2-3명이 강 또는 정글에서 벌이는 작은 교전)에서 맵 반대편 **R**을 노릴 수 있다.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 가동 (~ 26-30분):** 강화 Q에 치명타가 붙으면 backline이 2-3초 만에 녹는다. 이 시점부터는 모든 오브젝트에서 한타를 강제하라.

## 흔한 실수

- **낮은 Focus 스택에서 Q 활성화.** **Q**는 4스택일 때만 데미지를 준다(초상화 아래에서 확인 가능). 미리 누르면 마나 30을 버리고 위력 약한 Q만 나간다. 평타 4번 먼저 친 뒤에 Q를 눌러라.
- **라인전에서 R 쿨마다 던지기.** **R**은 팀에서 가장 가치 있는 자원(Drake 한타, Baron 셋업의 맵 횡단 기절기)이다. 거의 모든 경우 라인 trade에 태우는 것보다 오브젝트 한타에 아껴 두는 편이 가치가 크다. 예외는 R로 확정 처치가 가능한 결정적 킬 윈도우뿐이다.
- **교전에서 가만히 서서 평타치기.** Ashe는 카이팅 중심으로 설계됐다 — 가만히 서 있으면, 움직였으면 피했을 skillshot까지 다 맞는다. 평타 사이마다 한 발씩 움직여 적의 타이밍을 흐트러뜨려라.
- **vision 없이 웨이브 과하게 밀기.** Ashe는 탈출기가 없다. support가 삼거리 부쉬와 강에 ward를 박지 않은 상태로 강 한복판을 넘으면 적 정글러가 무료로 끊어 간다. 보이지 않는 부쉬는 항상 **W**로 먼저 확인한 뒤에 전진하라.
- **미니언에 W 쿨마다 박기.** **W**는 75/70/65/60/55 마나를 쓰고, 거기에 붙은 슬로우는 라인전 최강의 harass 도구다. 웨이브가 아닌 적 ADC에게 **W**를 아껴 둬라.

## 고급 팁

**flash R**을 연습하라 — 적이 저체력으로 안개 너머로 도망치려 할 때, 그가 달려가는 방향으로 **Flash**를 쓴 직후 곧바로 **R**을 발사한다. flash로 400 단위 앞으로 이동했으니 **R**은 400 단위 짧은 거리만 비행하고 명중한다 — 다만 기절 시간은 비행 거리에 비례하므로, 이 기술은 near-execute 타겟(추가 한 방이면 죽는 저체력 적)에 한정된 finisher로만 쓸 수 있다. 승리 조건: 적은 Ashe가 아직 1500 단위 떨어져 있다고 믿고 200 HP로 도망갔다고 안심하지만, flash + R이 추격을 끝낸다는 사실을 보지 못한다.
