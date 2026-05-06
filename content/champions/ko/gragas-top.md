---
title: "Gragas Top Build & Guide — Patch 16.9"
slug: "gragas-top"
language: "ko"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Gragas 탑 라인 공략. 시작 아이템부터 AP 브루저 코어 빌드, 주요 매치업 대처, 파워 스파이크 타이밍, 흔한 실수 회피, 그리고 마지막에 R-Flash 콤보 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "스킬을 시전할 때마다 Gragas가 소량 회복(내부 쿨다운 5초). 라인에서 무료 sustain을 제공해 poke 매치업을 장기적으로 이긴다."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "지정 지점으로 술통을 굴린다. 재시전으로 폭발시키거나 4초 후 자동 폭발. 데미지와 슬로우는 충전 시간에 비례 — poke 트레이드는 최대 충전 후 폭발이 정석."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "1초 채널링: 3초 동안 30% damage reduction과 다음 평타에 추가 마법 데미지. 라인전 메인 트레이드 도구."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "첫 적에 부딪히면 멈추는 돌진. 광역 데미지와 1초 stun. 갭 클로즈, 도주, 유일한 hard CC — 절대 미니언 정리에 쓰지 마라."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "술통을 던져 적을 충돌 중심에서 밀어낸다. 탑에서는 적 라이너를 정글러 갱 안으로 밀어넣거나 타워 다이브를 peel하는 데 쓴다."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "AD 암살자나 split-push 듀얼리스트 상대(Camille, Fiora): dash 후 execute 구간을 stasis로 무효화"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대(Lissandra R, Malzahar suppression): spell shield가 lockdown 차단"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "AD 위주 라인 상대(Renekton + Kha'Zix, Aatrox + Lee Sin): 물리 데미지 감소가 tenacity보다 가치 높음"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "회복 누적 조합 상대(Aatrox, Vladimir, Dr. Mundo): 마법 관통 + R에 healing-reduction 구역"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Happy Hour와 W damage reduction으로 라인의 melee 브루저를 out-sustain하고, 13분쯤 Riftmaker 도착 후 정글러 갱에 R 플립을 걸어 타워나 드래곤 싸움을 snowball한다."
  weakness: "장거리 artillery와 원거리 탑 라이너(Vayne, Quinn, Teemo, Kennen)가 Q 사거리 밖에서 chip한다. E가 없으면 engage도 escape도 없고, harass용으로 E를 쓰면 라인을 throw하는 것."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 대신 Resolve 메인: Gragas는 melee로 트레이드해 burst가 아니라 HP가 필요. Aftershock은 Body Slam stun에 발동해 저항을 부여. Demolish는 강제 백을 타워 plate로, Conditioning과 Revitalize는 후반 스케일링."
    secondary_rationale: "Sorcery 보조: Manaflow Band가 라인전 내내 Q poke 스팸 마나를 유지하고, Transcendence가 Cosmic Drive 스파이크를 넘어 Ability Haste를 올려 미드게임 사이드 라인에서 E와 R 쿨다운을 단축한다."
    secondary_alternative: "원거리 탑 라이너(Vayne, Teemo, Quinn) 상대로 데미지보다 sustain이 중요할 때 Sorcery를 Inspiration으로 교체해 Biscuit Delivery(무료 포션)와 Time Warp Tonic(포션 sustain + Movement Speed)으로 healing 빌드 운영."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Dash 없는 melee 브루저"
      reason: "막타를 위해 앞으로 걸어와야 하는데, Gragas의 Q-W-AA poke가 all-in 사거리 밖에서 chip하고, W damage reduction이 6레벨 이전 commit을 약화시켜 Gragas의 카운터 트레이드가 우세하다."
    - examples: ["kennen", "vladimir"]
      archetype: "물몸 AP 탑 라이너"
      reason: "Drunken Rage의 균등 damage reduction이 Kennen의 stun-burst 콤보와 Vladimir의 Q poke를 흡수한다. 상대 자원이 트레이드에 묶인 사이 Gragas는 E-AA-Q로 응징."
    - examples: ["mordekaiser", "ryze"]
      archetype: "스킬샷·채널링 의존 메이지"
      reason: "Body Slam이 Mordekaiser의 Q 윈드업과 Ryze의 콤보 채널링을 끊고, Gragas는 W damage reduction으로 빠져나온다. cast cycle이 깨지면 둘 다 라인 우선권을 잃는다."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "원거리 탑 라이너"
      reason: "Q 사거리 밖에서 평타를 넣고 E commit에서 빠진다. 반복적으로 갭을 좁힐 수단이 없으면 Gragas는 3레벨 전에 절반 HP까지 chip되어 백을 강요당한다."
    - examples: ["fiora", "camille"]
      archetype: "true damage·execute 압박 브루저"
      reason: "Fiora의 vital은 저항을 무시하는 true damage; Camille의 R은 퍼센트 HP true damage execute를 위해 Gragas를 isolate한다. Gragas의 탱 스탯이 둘 어느 쪽이든 1v1 생존으로 환산되지 않는다."
    - examples: ["malphite", "ornn"]
      archetype: "하드 engage 탱 탑 라이너"
      reason: "이들의 CC는 Aftershock 지속 시간보다 길게 이어진다. Gragas의 engage를 자기 engage로 맞받고, 내장된 저항 스테로이드로 후반 스케일링까지 추월한다."
---

## 개요

Gragas 탑은 AP 브루저(데미지를 위해 AP를 가지만 프론트라인 다이브를 버틸 만큼 HP를 쌓는 fighter)로, poke(안전 거리에서의 chip 데미지)와 sustain(전투 중 패시브 HP 회복)으로 라인을 이긴 뒤 **Explosive Cask (R)** 중심의 한타 engage 역할로 전환한다. **Happy Hour (P)**가 스킬마다 패시브 회복을 주므로 Q → W → AA(평타) 트레이드 패턴은 적 라이너의 피만 깎고 Gragas 자신은 깎이지 않는다. **Drunken Rage (W)**는 30% damage reduction 창으로, 적의 all-in(데미지 풀 commit)을 흡수하고 무료 **E** stun으로 카운터 트레이드를 하게 해주는, 가장 과소평가된 도구다.

게임 플랜: 6레벨까지 Q poke로 melee 라인을 압박한 뒤, 적 라이너를 정글러 갱에 처박거나 자기 타워 안으로 던지는 **R** 플립을 노린다. 이후 **Riftmaker**와 **Cosmic Drive**로 스케일하며(아이템과 레벨로 강해진다), 25분쯤 합류해 팀의 주요 engage(전투를 시작하는 챔피언)로 활약한다. 원거리 매치업은 피하고, 어쩔 수 없이 잡혔다면 수동적으로 플레이하며 타워 아래에서 Q로 farming하고 정글러를 부른다.

## 추천 빌드

**시작 아이템:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개. 원거리 매치업의 Q poke를 Riftmaker 도착까지 버틸 수 있는 표준 sustain 스타터.

**코어 아이템(순서대로):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp(평타뿐 아니라 모든 데미지에 적용되는 life-steal)가 붙은 지속 burn AP 아이템. Gragas의 길어진 트레이드와 만나 그의 단일 아이템 중 가장 강한 스파이크가 된다.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — tenacity가 stun 지속을 줄인다. 대부분의 매치업이 최소 하나의 CC 위협(Renekton stun, Camille root, Sett stun)을 가져오므로 탑 라인 기본 신발.
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste와 챔피언 피격 후 Movement Speed 스테로이드. 첫 쿨이 끝나기 전에 두 번째 **E** stun을 박을 수 있게 전투를 돌게 해준다.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste와 max HP 비례 마법 burn으로, 전투가 길어질수록 ramp한다. 프론트라이너 둘 이상의 팀에 대해 4번째 아이템.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 곱연산. 팀이 합류해 splitpush 대신 한타 burst에 commit할 때 5번째 아이템으로.

**상황별 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — AD 암살자(Zed, Talon flank)나 split-push 듀얼리스트(Camille, Fiora) 상대. **R** 직후 액티브로 execute 창을 막는다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대(Lissandra **R**, Malzahar suppression). spell shield가 **R** 플립을 끊을 lockdown을 막아준다.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 위주 라인 상대(Renekton + AD 정글러). 큰 CC 위협이 없을 때 Mercury's Treads 대체.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 회복 누적 조합 상대. R 액티브가 넉백에 묶인 healing-reduction 구역을 깐다.
**신발:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 기본. AD 위주 게임에는 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, 라인이 one-shot 친화적이고 데미지 우선 빌드로 갈 거라면 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**.

**스킬 오더:** **E** 선마(stun과 주력 데미지), **Q** 후마(poke와 waveclear), **W** 마지막. **R**은 6, 11, 16레벨에서.

**룬:** 메인 **Resolve**에 **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. 보조 **Sorcery**에 **Manaflow Band**, **Transcendence**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## 주요 매치업

- **Darius:** **W**가 켜졌을 때만 막타로 전진하고, 미니언 웨이브 직전마다 Q poke를 박는다. 6레벨 이전 all-in이 흉악하니, Aftershock-bait 자세에서 절대 E-Q 콤보를 맞으면 안 된다.
- **Renekton:** 1-2레벨 트레이드는 그의 fury-stun이 HP 우위를 snowball하므로 회피. 3레벨에서 **W-E** 카운터 engage로 받아치면, 그가 W stun을 commit하는 순간 damage reduction이 burst를 흡수해 동등하게 트레이드한다.
- **Vayne:** 하드 카운터픽(라인에서 우리 챔피언을 박살내려고 일부러 골라진 챔피언). Q poke로 타워 아래에서 플레이하고, 정글러에게 이른 갱(3-4레벨)을 요청, 그리고 dash 후 강화 평타를 완화하기 위해 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 러시를 계획한다(그녀의 Q는 구르며 석궁을 재장전한다).
- **Camille:** 첫 코어 아이템 완성(11-13분) 이후 사이드 1v1 회피; 그녀의 R은 Gragas를 벽 안에 isolate(아군과 분리)해 퍼센트 HP execute를 가한다. 팀과 합류해 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**가 R 데미지 창을 무효화하는 한타를 강요한다.
- **Malphite:** 6레벨 이전 동등, 이후 강한 스케일링 — 그의 **R**이 우리 R을 맞받고, 방어구 누적이 우리 AP를 흘려넘긴다. 그의 ult가 빠졌을 때 미드로 로밍해 **R** 플립으로 매치업을 뒤집는 게 유일한 창.

## 파워 스파이크 및 승리 조건

- **3레벨(E 해금):** 첫 all-in 창. **W** damage reduction이 켜지고 **E** stun이 준비되면, 막타를 위해 너무 멀리 나온 melee 적을 응징할 수 있다.
- **6레벨(첫 Explosive Cask):** 파워 스파이크. 정글러 갱에 맞춰 **R** 플립 셋업 — 적 탑을 자기 타워 라인에서 강 쪽으로 던져 무료 킬을 만든다.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 완성(~13-15분):** 라인을 뒤집는 스파이크. 지속 burn과 omnivamp가 길어진 트레이드를 HP 이득으로 바꾼다. 카운터 매치업이 아니면 1v1을 강제하라.
- **3아이템 + 신발(~24-28분):** 한타 정점. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** + ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** + ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment**가 결합되면 거의 죽지 않는 engage 위협. 팀과 합류해 오브젝트 싸움.

## 흔한 실수

- **E로 웨이브 정리하기.** **E**는 갭 클로즈, 도주, 유일한 stun이다. push를 위해 미니언에 Body Slam을 박으면 적 라이너가 14초 무료 all-in 창을 얻는다. 웨이브 push는 **Q**로, **E**는 engage와 도주에만.
- **R을 시작 데미지로 던지기.** **R**은 적 팀을 흩어버린다. 배치 계획 없이 시전하면 적 라이너를 우리 follow-up과 멀어지게 던지는 셈. 누르기 전 항상 타겟이 어디 떨어질지 머릿속에 그리고 — 우리 팀이나 우리 타워 쪽으로, 절대 적 프론트라인 쪽으로는 안 된다.
- **W 없이 트레이드.** 정상적인 Gragas 트레이드는 모두 **W**로 시작한다. 30% damage reduction 창 없이는 어떤 melee 브루저도 트레이드를 이긴다. **W**가 쿨이면 막타만 치고 disengage.
- **R로 단독 force-gank.** follow-up 없는 적 팀 한가운데로의 단독 **R** 플립은 throw다. 술통은 타겟을 재배치하지만, 풀피 캐리를 Gragas 혼자서 못 잡는다. 팀의 enabler지 듀얼 finisher가 아니다.
- **E 대신 W 선마.** **W**는 Gragas에게 stun도, 갭 클로즈도, clear 속도도 주지 않는다 — **E**가 셋 다 한다. 매 게임 **E** 선마.

## 고급 팁

**R-Flash 콤보**를 연습하라: 적 라이너 발 밑에 **R**을 시전한 뒤, cast 도중 **Flash**로 술통 중심을 우리 팀이나 타워 옆으로 재배치한다. 술통은 Flash한 위치에서 폭발하므로, 자기 타워 라인에 서 있는 타겟을 우리 타워 아래로 flip해 무료 킬을 만들 수 있다. Gragas의 가장 높은 skill ceiling 메커니즘이며, 솔로 큐 랭크에서 시도하기 전에 practice tool에서 충분한 reps를 들이는 것이 좋다.
