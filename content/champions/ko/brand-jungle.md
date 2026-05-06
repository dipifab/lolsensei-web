---
title: "Brand Jungle Build & Guide — Patch 16.9"
slug: "brand-jungle"
language: "ko"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "League of Legends 패치 16.9 Brand 정글 완벽 공략. 스마이트 동선, 화상 마법사 정글링, 갱킹 타이밍, 핵심 매치업, 파워 스파이크 활용, 흔한 실수 회피, 그리고 보이지 않는 W 갱킹 같은 마무리 팁까지 한 페이지에 정리."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand의 스킬은 적을 화상 상태로 만든다(4초간 지속 피해, 최대 3중첩). 3중첩에 도달하면 작은 광역 폭발이 일어나 스킬 효과를 다시 적용한다."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "직선 skillshot으로 마법 피해. 대상이 이미 ablaze(화상) 상태라면 기절시킨다 — 갱킹 락이자 스컴리시 스턴 셋업."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "짧은 예비 동작 후 발동하는 지연형 광역 지대. ablaze 상태 대상은 +25% 피해를 받는다. 정글링의 핵심 도구."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "지정 폭발이 주변 적에게 튄다. 첫 대상이 ablaze 상태라면 전파 범위가 두 배로 늘어난다 — 캠프 간 바운스로 정글링이 가속된다."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "장거리 화염구가 적 사이를 최대 5번 튀며 ablaze 대상을 우선한다. 드래곤·grub 둥지 주변 스컴리시에서 막대한 피해."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "초반 다이버 상대(Lee Sin, Xin Zhao, Hecarim, Diana) — 정지 효과로 기동력 부재를 메운다"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "앞서고 적 팀에 마법 저항이 없을 때 — 시전 후 이동 속도 패시브로 스컴리시에서 카이팅"
    - dd_id: "3135"
      name: "Void Staff"
      against: "주요 타깃이 첫 마법 저항 아이템을 사면 교체(Mercury's Treads 포함)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 이니시 상대(Ahri R, Lissandra R, Nautilus 갈고리)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "오브젝트 둥지 주변 스컴리시에서 R로 뭉친 적을 관통. E로 웨이브를 밀고 갱(전파로 무료 Q 스턴 셋업). 파워 스파이크 구간은 8-18분."
  weakness: "Liandry's 이전 AP 정글 중 가장 느린 정글링, 도주기 없음, 정글 자체 회복 없음. 모빌리티 좋은 정글러의 초반 침입과 강한 CC로 AOE를 받아치는 정글러에 취약."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 주룬: Arcane Comet은 W·E 적중마다 발동해 화상 위에 무료 버스트를 더한다. Manaflow Band는 필수 — Brand 정글은 초반 마나가 부족하다. Transcendence는 스킬 가속을 40% 이상으로, Scorch는 저체력 캠프와 갱을 마무리한다."
    secondary_rationale: "Resolve 보조: Second Wind는 포션 없이 캠프 사이 회복을 유지(Brand는 Fiddlesticks 힐이나 Warwick 흡혈 같은 정글 자체 회복이 없다). Overgrowth는 처치한 몬스터에 따라 추가 체력을 부여 — 무방비한 약점에 직접 대응."
    secondary_alternative: "초반 침입이 강한 조합(Lee Sin + Pyke 로밍, Elise + Galio) 상대로 Resolve를 Inspiration으로 교체, Biscuit Delivery(약한 정글링의 마나 보충)와 Cosmic Insight(드래곤 주변 스마이트 가동률 증가)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "도주기 없는 그룹 이니시 탱커"
      reason: "그들의 R이 적중하면 같은 적 무리가 당신의 W 안에 갇힌다. R은 뭉친 모든 챔피언 사이를 튀며, 그들의 이니시에 대한 당신의 답은 5v5가 아니라 팀와이프가 된다."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "앞으로 들어와야 하는 브루저"
      reason: "팀에 들어와 피해를 주려 하고 빠질 수단이 없다. Brand의 E가 ablaze를 깔고, 도착 순간 Q가 스턴, R이 두 번째 타깃을 묶어 후퇴하지 못하게 한다."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "정신집중·은신 의존 정글러"
      reason: "Brand는 ablaze 상태에서 Q 스턴으로 Fiddlesticks의 공포·궁극기 채널링을 끊고, W 사전 시전으로 Eve의 채널링 전 위치를 드러낸다. 둘 다 긴 셋업에 의존하며 Brand는 한 번의 로테이션으로 이를 부순다."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "기동력 갖춘 초반 스컴리셔"
      reason: "Liandry's가 나오기 전 3레벨에 Brand를 침입한다. Brand는 도주기가 없다. Lee Sin Q+W 연계, Elise 강하, Graves 대시 모두 Q skillshot을 건너뛰고, 그의 정글링은 너무 느려 싸움 손실을 회수할 수 없다."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "기동성 좋은 암살자 정글러"
      reason: "Q 투사체 위로 점멸·대시해 Brand는 스턴을 적중시킬 수 없고, 자기 보호 수단이 없는 근접에서 폭딜로 녹는다. Zhonya's조차 1v1에서 필연을 늦출 뿐이다."
    - examples: ["nocturne", "shaco"]
      archetype: "시야 차단 갱커 정글러"
      reason: "Brand가 의존하는 와드를 우회한다(자체 카운터-비전·점멸 이니시 없음). Nocturne R은 팀의 시야를 차단, Shaco Q는 와드를 은신으로 통과. 적이 오는 것을 못 보면 Q를 미리 겨냥할 수 없다."
---

## 개요

Brand 정글은 빠른 정글링이나 단독 침입이 아닌 **오브젝트 싸움과 6레벨 이후 갱킹**을 중심으로 짠 **AP 스컴리셔**다. 스킬 구성은 미드 Brand와 동일하다 — 적에게 불을 붙이고, ablaze 상태인 적을 **Q**로 스턴, 뭉친 적 사이로 **R**을 튕긴다 — 하지만 역할이 다르다. 정글러로서 라인 우선권(라이너가 웨이브를 먼저 밀어 얻는 라인별 우위)을 강에 대한 통제권과 맞바꾼다. 모든 드래곤 싸움, 모든 grub 스폰(grub은 보이드 둥지의 작은 중립 몬스터로, 처치한 팀에 골드와 보너스를 준다), 모든 Scuttle 스컴리시(Scuttle = 강의 중립 게로, 시야와 작은 버프를 준다)가 **R**이 셋넷의 뭉친 적 사이를 튀며 호각의 싸움을 팀와이프로 바꿀 기회다.

게임 플랜은 정글러 기준으로도 경직된 편이다. 첫 세 캠프를 풀클리어하고(red → krug 또는 blue → gromp, 시작 진영에 따라), 깔끔한 **W → Q 스턴** 창이 나오는 라인이 있을 때만 3레벨 갱, **Liandry's Torment** 부품 위해 귀환, 그리고 8분부터는 다음 오브젝트 주변에 캠프. Brand는 도주기, 초반 듀얼 능력, 단일 대상 정글링 속도 모두 AP 정글러 중 최악이다 — 정글 입구를 와딩하지 않으면 침입이 게임을 끝낸다. 그 대가가 6레벨 이후 스파이크다. **Pyroclasm**은 강에서 뭉친 싸움 시 게임 내 가장 높은 피해의 궁극기 중 하나이며, 적 팀에게 디스인게이지(흔히 갖고 있지 않은)로 답해야 할 질문을 던진다.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (원거리 정글러 기본 — 캠프 정글링을 강화하고 골드를 주는 스마이트 펫 제공) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**핵심 아이템(순서대로):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade의 퀘스트 업그레이드(정글 경험치를 충분히 쌓으면 3-4분쯤 자동 진화). AP 버스트 정글러의 기본 동반자: 시전 후 다음 평타에 추가 마법 피해 — Brand의 화상과 완벽히 맞물린다.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 첫 완성 아이템. 퍼센트 체력 화상은 오브젝트 체력 풀(드래곤·바론·헤럴드)을 처벌하고 모든 화상 틱 위에 누적된다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통, 핵심 아이템 사이에서 가장 저렴한 파워 스파이크.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 모든 스킬 적중 시 둔화로 Brand의 가장 큰 약점(추격·도주 없음)을 메운다. 카이팅하는 적을 걸어가서 잡고 점멸 없이 갱킹할 수 있게 한다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 스케일링 슬롯. 4킬 이상 앞서지 않는 한 다섯 번째로 구매, 앞서면 더 일찍 러시해 스노우볼링("snowball" = 커지는 초반 우위: 킬 → 골드 → 아이템 → 더 많은 킬).

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 초반 다이버 상대(Lee Sin, Xin Zhao, Hecarim). 대시 연계가 프론트 라인(평소 대신 맞아주는 앞선의 탱커·브루저)을 넘어올 때 Brand가 가진 유일한 답이 정지 효과다.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 앞서고 적 팀이 아직 마법 저항을 올리지 않았을 때. 시전 후 이동 속도 패시브로 스컴리시에서 카이팅("kite" = 거리를 유지하며 뒤로 움직이며 공격).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 주요 타깃이 첫 마법 저항 아이템을 사는 순간. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (마법 저항 신발) 도 첫 MR 아이템으로 친다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 예고된 마법 CC 이니시(Ahri R, Lissandra R, Nautilus 갈고리) 상대.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 가 기본. 적 팀이 마법 피해와 강 CC 위협을 3개 이상 가졌다면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 로 교체.

**스킬 순서:** **W** 우선 마스터(가장 높은 기본 피해와 핵심 정글링 도구), **E** 두 번째(캠프 간 정글링 가속과 갱 시 전파), **Q** 마지막. **R**은 6, 11, 16레벨에 한 점씩.

**룬:** 주룬 **Sorcery** 에 **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. 보조 **Resolve** 에 **Second Wind** 와 **Overgrowth** 로 정글 회복.

## 주요 매치업

- **Lee Sin:** 6레벨 전 모든 1v1 패배. Q+W 연계가 당신의 Q skillshot 위로 건너뛴다. 6레벨 전 단독 스컴리시는 피하고 풀클리어, 1분 30초에 자기 정글 입구 양쪽을 와딩.
- **Hecarim:** 호각. 카이팅에서는 그가 우위지만 한타에서는 R 바운스를 위해 뭉친다. 그가 앞으로 커밋하는 순간을 위해 Q를 아껴라 — 돌격하는 Hecarim을 스턴하면 그의 모든 이니시 타이머가 낭비된다.
- **Karthus:** 당신이 갱은 더 잘하지만 그가 더 잘 큰다. 16레벨 전 드래곤 주변에서 싸움을 강제. Defile(주변에서 박동하는 최고 랭크 패시브, 회색 화면에서 죽이는 데 쓰는 AOE 형태)이 활성화되면 Banshee's Veil 없이는 그의 팀에 들어갈 수 없다.
- **Sejuani:** 그녀를 잡아먹는다. 그녀가 궁으로 끌어모은 모든 챔피언 사이로 R이 튕긴다. 이니시에 이니시. 6레벨 전엔 1v1로 그녀가 이긴다 — 침입하지 말고 grub 싸움을 위해 미드와 합류하라.
- **Master Yi:** 1v1로는 정통 카운터. 좁은 강(드래곤 둥지·바론 둥지)에서 5v5를 강제, 그곳에서는 W 정화도 R 연쇄 바운스에서 그를 살리지 못한다. 그가 Wit's End를 가면 두 번째 아이템으로 Zhonya's Hourglass 구매.

## 파워 스파이크 및 승리 조건

- **3레벨(W + E + Q):** 첫 갱킹 파워. 각 스킬 1포인트로 **E → W → Q 스턴** 콤보가 완성. 적 라이너가 점멸 없이 과확장하면 킬 셋업이 있다.
- **6레벨(R 해금):** 첫 오브젝트 스파이크. **Pyroclasm** 은 Scuttle 스컴리시(강 게 싸움)에서 한 바운스당 약 50%의 약챔 체력을 깎는다. R이 있을 때마다 Scuttle을 싸워라.
- **Liandry's Torment 완성(약 9-12분):** 정글링 속도가 뒤집히고 오브젝트 DPS(DPS = 초당 피해, 여기서는 드래곤·바론·grub 체력 풀에 대한)가 두 배가 된다. 이 시점부터 당신이 드래곤 싸움을 시작해야지, 반응해서는 안 된다.
- **Rabadon's Deathcap 완성(약 24-30분):** R 풀바운스가 약챔을 원샷한다. 뭉친 오브젝트 싸움을 강제 — Baron, Soul Drake, Atakhan ("Atakhan" = 14분쯤 스폰하는 후반 중립 둥지 보스. 익숙하지 않다면 스폰을 강제 5v5로 취급).

## 흔한 실수

- **빠른 정글러처럼 정글링하려 함.** Brand는 자체 회복도 공격 속도도 없다. 6레벨 전 Lee Sin과 Scuttle을 두고 경쟁하지 마라 — 풀클리어, 6레벨 도달 후 갱킹과 스컴리시를 시작.
- **정글에서 견제용 맨 Q.** ablaze 없는 **Q** 는 대시하는 정글러에게 빗나가는 느린 투사체다. 항상 적이 도착할 자리에 **W** 를 깔거나, 화상을 전파할 미니언에 **E** 를 먼저 던져라.
- **고립된 적 한 명에게 궁.** **R** 바운스는 단일 대상에 낭비된다 — 같은 챔피언 위로 왔다 갔다 하며 피해 감소가 적용된다. **R** 은 뭉친 싸움을 위해 아껴두고, 1v1 추격에는 쓰지 마라.
- **자기 정글 시야 생략.** 1분 30초에 tri-bush와 픽셀 부시에 Stealth Ward 설치. Brand는 도주기가 없다. 못 본 적의 침입은 모빌리티 좋은 정글러에게 공짜 킬을 헌납하는 것이다.
- **R 없이 오브젝트 스마이트 욕심.** 드래곤·grub 체력은 스케일링하는데 스마이트 피해는 그렇지 않다. R이 쿨다운이지만 적 정글러는 가능한 상태에서 드래곤을 두고 다투면, 스마이트 전쟁과 드래곤 모두 잃는다.

## 고급 팁

**보이지 않는 W 갱킹** 을 연습하라. 라인에 강 쪽에서 시야의 안개("fog of war" = 팀 시야 밖의 밝혀지지 않은 영역) 에 가려져 접근하라. 적 라이너가 *다음에* 디딜 자리에 **W** 를 시전하라(웨이브 기반으로 경로 예측) — Pillar of Flame은 착탄까지 지연이 있고, 시전 자체는 은신이나 시야를 깨지 않는다. W가 착탄하고 ablaze가 적용되는 순간 스턴 창에 **Q** 를 쏴라. 제대로 하면 적은 미니맵에서 챔피언을 보지 못한다. 발 밑에 W가 나타나는 것을 보고, 속박되고, 팀원이 핑조차 찍기 전에 죽는다. 이 시퀀스가 "괜찮은 Brand 정글" 을 게임을 캐리하는 Brand로 바꾼다.
