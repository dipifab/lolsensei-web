---
title: "Gwen Top Build & Guide — Patch 16.9"
slug: "gwen-top"
language: "ko"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Gwen 탑 완벽 공략. 스타터 아이템부터 AP 브루저 코어 빌드, 룬 선택, 주요 매치업 대처법, 파워 스파이크 타이밍, 라인전 흔한 실수와 해결책, 그리고 W 미스트로 스킬샷을 페이크 치는 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "기본 공격이 대상 최대 체력 비례 추가 마법 피해를 입힌다. Gwen은 챔피언에게 입힌 피해의 일부를 체력으로 회복한다."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "최대 6번 잘리는 부채꼴 가위 공격. 중앙 콘은 고정 피해를 주고 매 공격마다 패시브를 재적용한다 — 탱커 녹이는 핵심기."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "4초 동안 안개 지대를 만든다. 안개 밖 적은 Gwen을 지정할 수 없다 — 안개 안으로 들어온 적만 공격 가능. 방어용 리셋 버튼."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "짧은 돌진. 몇 초 동안 공격 속도, 공격 사거리, 온히트 AP를 부여한다. 챔피언 명중 시 쿨다운 일부가 환급된다."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "둔화 효과와 패시브를 적용하는 바늘 다발을 던진다. 최대 2번 더 재시전 가능, 각 발사마다 피해량이 늘어난다."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "다이버 및 어쌔신(Camille, Fiora, Rengar) 상대 — 2.5초 시간 정지로 W 쿨다운을 커버하고 적의 버스트 윈도우를 끊는다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC(Vladimir 풀, Lissandra R, Malzahar 속박) — 보호막이 적 스킬 하나를 완전 차단"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "원거리 견제 매치업(Vayne 탑, Teemo) — 추가 스킬 가속과 이동 속도로 거리를 좁힌다"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "적 팀 탱커/브루저 4명 이상 — Riftmaker 대신 1분부터 최대 체력 비례 화상 피해를 주는 첫 아이템"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "초반 라인전을 버티고 18분쯤 Riftmaker를 완성한 뒤, 사이드 라인을 스플릿 푸시하여 적 2명을 묶는다. 한타에서는 Q 온히트 고정 피해로 프론트라인을 녹인다."
  weakness: "초반이 약하다(버스트 부족, 원거리 웨이브 클리어 없음). 원거리 탑, Fiora 같은 고정 피해 후반 캐리, W 발동을 막는 즉발 CC 체인에게 하드 카운터 당한다."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 메인: Conqueror는 Gwen의 긴 Q + 평타 트레이드에서 스택을 쌓아 적응형 피해와 회복을 제공한다. Triumph는 멀티킬 보상, Legend: Alacrity는 E 온히트 윈도우 강화, Last Stand는 저체력 시 추가 피해를 더한다."
    secondary_rationale: "Resolve 서브: Second Wind는 원거리 견제 후 체력을 회복시켜 원거리 탑 상대 핵심 룬이며, Overgrowth는 후반 W 미스트 한타에서 빛나는 Gwen에게 순수 체력을 누적시켜 준다."
    secondary_alternative: "견제 없는 강한 AP 매치업에서는 Resolve 대신 Sorcery로 바꿔 Manaflow Band(Q 난사용 마나 지속)와 Transcendence(E 환급량 증가용 추가 스킬 가속)을 사용한다."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "원거리 견제 없는 느린 근접 브루저"
      reason: "Q는 방어력을 무시하는 최대 체력 비례 고정 피해를 적용한다. W 미스트 안에서의 긴 1대1은 카이팅이나 이탈이 불가능한 탱키한 근접 파이터를 녹여버린다."
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "방어력·마저 누적형 탱커"
      reason: "Q의 고정 피해와 E의 온히트 AP는 방어력과 마법 저항력을 모두 무시한다. 탱커가 쌓는 방어 스탯을 통째로 우회한다."
    - examples: ["irelia", "jax"]
      archetype: "아이템 의존 후반 파이터"
      reason: "그들의 파워 스파이크는 25분쯤 2~3코어에서 온다. Gwen이 Riftmaker를 먼저 완성해 그들이 코어를 갖추기 전에 사이드 라인에서 스노우볼링한다."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "고정 피해 또는 초반 강세 캐리"
      reason: "Fiora의 급소도 고정 피해를 주고 Q 돌진은 W 미스트 사거리를 무시한다. Riven은 패시브 스택이 쌓이기 전인 1~3레벨에 Gwen보다 훨씬 더 큰 피해를 입힌다."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "평타 사거리에서 카이팅하는 원거리 탑"
      reason: "Gwen은 E 온히트 AP와 Q 고정 피해를 적용하려면 근접 거리가 필요하다. 원거리 카이터는 Gwen의 진입을 끊고 깨끗한 트레이드를 허락하지 않는다."
    - examples: ["malphite", "pantheon"]
      archetype: "즉발 스턴 이니시에이터"
      reason: "그들의 CC 체인은 Gwen이 W를 켜기 전에 잠궈버린다. 돌진 도중 스턴에 걸리면 미스트가 깔리기 전에 적의 풀 콤보를 그대로 맞는다."
---

## 개요

Gwen은 AP 브루저 — 공격력(Attack Damage) 대신 주문력(Ability Power, AP 스탯)으로 스케일링하며 원거리에서 버스트를 넣는 대신 근접에서 몇 대 맞아주는 근접 챔피언입니다. 또한 "스커미셔(skirmisher)"이기도 합니다: 어쌔신처럼 2초 안에 대상을 끝내는 게 아니라 길게 이어지는 듀얼에서 승리하는 타입입니다. 그녀의 스킬 셋은 **고정 피해(true damage, 방어력과 마법 저항력 둘 다 무시하는 피해)**로 탱커를 녹이고, 패시브로 전투 중 체력을 회복하며, 쿨다운이 일부 환급되는 돌진기로 위치를 재조정할 수 있게 해줍니다. 사이드 라인과 1대1 듀얼이 그녀의 무대입니다.

게임 플랜은: 첫 10분 동안 킬을 내주지 않고 살아남고, 12~14분쯤 첫 핵심 아이템을 완성한 뒤 스플릿 푸시 — 사이드 라인을 혼자 밀어 적 팀이 2명을 보내 막도록 강요합니다. 25분쯤 3코어가 나오면 한타에 진입해 적 프론트라인(상대 팀 앞에 서는 탱커/브루저)에 기본 공격(basic attack, "AA")을 연속으로 꽂아 녹여냅니다.

## 추천 빌드

**스타팅 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**은 원거리 탑이나 견제가 강한 매치업(거리에서 지속적으로 갉아먹는 chip damage)에서. ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**은 좀 더 편한 근접 매치업에서 일찍부터 AP 스케일링을 시작하고 싶을 때.

**코어 아이템 (순서대로):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 큰 스파이크. 전투 시작 후 2초가 지나면 피해의 일부가 고정 피해로 변환되고("Void Corruption" 패시브), "옴니뱀프"(스킬과 평타 모두 입힌 피해의 일부를 체력으로 회복)를 얻습니다. Gwen의 길게 이어지는 한타 스타일과 어떤 다른 아이템보다도 잘 맞습니다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통력으로 스쿼시(squishy, 방어력이 낮은 챔피언, 보통 적 캐리)에게 피해를 더 강하게 박아 넣습니다.
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 공격 속도와 AP, 그리고 모든 평타에 추가 마법 피해를 더하는 패시브. **E**(Skip 'n Slash의 온히트 윈도우, 매 평타가 AP 기반 마법 피해도 같이 적용되는 효과)와 결합하면 긴 한타에서 지속 DPS 포탑이 됩니다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 총 AP를 곱연산으로 늘립니다. "탱키 DPS"에서 진짜 캐리로 변신시키는 후반 스케일링 아이템입니다.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 다이버(백라인 캐리에게 뛰어드는 챔피언)와 어쌔신(Camille, Fiora, Rengar) 상대. 액티브로 2.5초 시간 정지(지정할 수 없게 되지만 본인도 아무것도 못함)를 얻어 적의 버스트 윈도우 — 그들이 당신을 지우려 시도하는 1~2초 — 를 깨뜨립니다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC("crowd control": 스턴, 속박, 매혹 — 챔피언을 그 자리에 묶어두는 모든 효과) 상대. Vladimir 풀 후 궁, Lissandra **R**, Malzahar 속박. 보호막이 적 스킬 하나를 완전히 차단합니다.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 원거리 견제 매치업(Vayne, Teemo) 상대. 추가 스킬 가속(쿨다운 단축)과 이동 속도로 실제로 그들에게 도달할 수 있게 해줍니다.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 적 팀에 탱커/브루저가 4명 이상일 때. 매 한타 1분부터 최대 체력 비례 화상 피해가 필요하면 Riftmaker 대신 첫 아이템으로 갑니다.

**신발:** Sorcerer's Shoes가 기본. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**는 적 팀에 정글러 포함 AD(Attack Damage) 위협이 3명 이상일 때. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 CC가 많은 조합(스턴이나 띄우기 3개 이상) 상대.

**스킬 마스터 순서:** **Q**를 먼저 마스터(고정 피해와 AP 계수), **E**를 두 번째로 마스터(쿨다운과 피해), **W**는 마지막. **R**은 6, 11, 16레벨에. 1레벨 우선순위: 미니언 라스트 힛(last-hit, 마무리 일격)을 위한 **Q**; 2레벨에 돌진을 위한 **E**; 3레벨에 안전을 위한 **W**.

**룬:** 메인 **Precision** + **Conqueror**(긴 한타에서 스택을 쌓아 적응형 피해와 회복을 주는 키스톤), **Triumph**, **Legend: Alacrity**, **Last Stand**. 서브 **Resolve** + **Second Wind**, **Overgrowth**. 스탯 파편: Adaptive Force, Adaptive Force, Health Scaling.

## 주요 매치업

- **Fiora:** 어려운 매치업. 그녀의 **Q**도 "급소(Vitals)"에 고정 피해를 줍니다 — 챔피언 주위에 빛나는 4개의 점, **Q**로 맞히면 고정 피해가 발동됩니다. 그녀의 **R**은 모든 정화(cleanse, 본인의 CC를 풀어주는 버프) 효과를 제거합니다. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**를 들고, 그녀의 **R**이 발동되는 순간을 위해 **W**를 아껴두며, 1~2레벨에는 평타 트레이드(trade — 둘 다 들어가서 서로 때리고 빠지는 짧은 교전)를 하지 마세요; 그녀는 순수 1대1에서 대부분의 근접 브루저를 후반에 능가합니다.
- **Camille:** 호각~열세. 그녀의 갈고리(**E**, 당신에게 휘둘러 날아오는 장거리 갈고리)는 당신의 **W** 미스트를 무시합니다 — 미스트의 보호 사거리 밖에서도 진입(engage — 챔피언이 한타를 시작하기로 결심하는 순간)할 수 있습니다. **W**는 그녀가 갈고리로 착지한 직후를 위해 아껴두고, 그녀의 **W**(강화된 평타에 묻는 고정 피해 콘) 쿨다운이 도는 순간에만 밖으로 나가세요.
- **Sett:** 유리. 그도 브루저지만 길게 이어지는 트레이드에서 **Q**의 최대 체력 비례 고정 피해에 답이 없습니다. 초반 올인(all-in — 1~3레벨에 누군가 킬을 위해 풀 커밋하는 한타)을 건너뛰고 ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**까지 스케일링한 뒤 사이드 라인에서 1대1을 노리세요.
- **Darius:** 호각. 그의 **E** 끌어당기기 사거리를 피하고, 앞으로 걸어 나갈 때는 무조건 **W** 미스트 안에서. 그의 패시브 출혈 스택이 4가 되면 **E**로 이탈(disengage — 한타를 끊고 도망치기) — 그의 패시브는 평타에 도트성 출혈을 적용하고, 5번째 스택이 추가 피해를 발동시키는 강화 스택입니다.
- **Teemo:** 열세. 그의 원거리 평타가 **W** 밖의 당신을 갉아먹고, **Q**가 당신의 평타(주된 피해 원천)를 실명시킵니다. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**를 들고, 정글러에게 초반 갱(gank — 정글러가 깜짝 방문해 킬을 따게 도와주는 것)을 부탁하고, 스케일링을 보고 플레이하세요 — 라인전은 못 이깁니다.

## 파워 스파이크 및 승리 조건

- **6레벨:** 첫 **R** 해금. 바늘 다발이 적중한 모든 챔피언에게 패시브의 최대 체력 비례 마법 피해를 적용하고, 둔화로 평타를 연쇄시킵니다(둔화된 동안 계속 때릴 수 있음). 8~9분쯤 정글러와 함께 한타를 강제하세요.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 18~20분):** 옴니뱀프 + 고정 피해 스파이크. 이제 대부분의 탑 라이너를 1대1로 이기고 적이 두 명을 보내 막을 때까지 사이드 라인을 스플릿 푸시할 수 있습니다.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 완성 (~ 26~28분):** DPS 스파이크. **E**가 켜져 있으면 평타가 훨씬 빨라지고 온히트 AP를 적용합니다 — 스플릿 푸시만 하지 말고 한타에 진입할 시간입니다.
- **3코어 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ 32분 이후):** 캐리 페이즈. 평타 한 대당 적 프론트라인의 25%+ 체력을 갈아냅니다. 팀이 보호해주는("필링", peel — 적을 당신에게서 떼어놓기) 한타는 모두 승리로 끝납니다.

## 흔한 실수

- **W 안에 너무 오래 머무르기.** Hallowed Mist는 4초짜리 윈도우지 영구 보호막이 아닙니다. 적이 강한 CC(스턴이나 속박)를 쓰는 그 순간에 활성화하세요; 미리 **W**를 켜면 쿨다운만 태우고 다음 18~22초 동안 무방비 상태가 됩니다.
- **견제하려고 웨이브에 Q 쓰기.** **Q**는 마나 소모가 크고 콘 사거리가 짧습니다(450 유닛). 미니언에 chip damage 넣지 말고, 챔피언을 콘 중앙(고정 피해 영역)에 맞힐 수 있는 순간을 위해 **Q**를 아껴두세요.
- **풀 체력에서 E를 앞으로 던지기.** **E**는 진입기이자 패닉 버튼입니다. 풀 체력에서 앞으로 낭비했다가 적 정글러가 나타나면 도망갈 두 번째 돌진이 없습니다.
- **R 사거리 밖에서 평타 치기.** **R**이 켜져 있을 때 바늘 다발은 총 3번 발사할 수 있습니다. 한타 가장자리에서 1000 유닛 이내에 머물러서 죽음으로 뛰어드는 대신 항상 저체력 대상에게 **R**을 재시전할 수 있게 하세요.
- **CC 없는데 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads 사기.** 기본 신발은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes; Mercury's로 바꾸는 건 강한 CC 위협이 3개 이상이거나 적 미드 AP가 잘 컸을 때만. 방어 신발은 피해 출력의 ~20%를 깎아먹습니다.

## 고급 팁

**W** 미스트로 스킬샷(skillshot — 점사가 아니라 직선이나 영역으로 직접 조준해야 하는 스킬, 즉발의 반대)을 페이크 치세요: 적이 장거리 스턴이나 속박(Lissandra **E**, Sett **W**, Morgana **Q**)의 시전 애니메이션을 시작하는 순간, 그의 시전 사거리 가장자리에 **W**를 깔고 그 안으로 걸어 들어가세요. 미스트는 당신을 바깥에서 지정 불가로 만듭니다 — 적은 시전을 헛쓰는 경우가 많고, 당신은 4초 동안 CC 없는 평타 시간을 공짜로 얻습니다. 핵심은 **W**의 타이밍을 적의 윈드업 프레임(스킬이 발사되기 전 차징 애니메이션)에 맞추는 것이지, 이미 발사가 끝난 뒤가 아닙니다.
