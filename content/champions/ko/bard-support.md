---
title: "Bard Support Build & Guide — Patch 16.9"
slug: "bard-support"
language: "ko"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Bard 서포터 공략. roaming-pickoff 운영 핵심, 스타터부터 코어까지 빌드 순서, 주요 매치업 대처, 파워 스파이크 타이밍, 라인전 흔한 실수, 그리고 wall-stun을 살리는 flash-stun 고급 팁까지 한 페이지에 정리한다."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Meeps가 Bard 옆에 소환되어 평타에 추가 마법 피해를 더한다. 맵 곳곳에 chime이 생성되며, 모으면 XP·마나·전투 외 이동 속도를 얻는다."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "직선 skillshot. 첫 번째 적은 슬로우, 투사체가 두 번째 적이나 벽을 맞히면 둘 다 기절. wall-stun이 Bard의 시그니처 픽오프 수단이다."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "10초 동안 충전되는 회복 제단을 설치. 첫 아군이 밟으면 HP 회복 + 짧은 이속 버프. 최대 3개. 적은 파괴 가능."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "근처 지형을 관통하는 일방통행 포털을 연다. 어떤 챔피언(아군·적군)도 이용 가능. 쿨이 길어 gank·escape·기습 flank용으로 쓴다."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "장거리 광역기. 챔피언·미니언·몬스터·포탑을 2.5초 stasis. 타겟을 묶거나 아군을 처형 직전에 살리거나 다이브 중인 적을 얼리는 데 쓴다."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "ADC에게 들어오는 단일 대상 lockdown CC 상대 (Morgana Q, Ashe R, Leona E-R 연계)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "광역 burst 조합 상대 (Yone + Malphite, Orianna 한타 셋업)"
    - dd_id: "3107"
      name: "Redemption"
      against: "뭉쳐 싸우는 한타 조합 상대; 광역 힐은 죽어서도 쓸 수 있어 가성비가 크다"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "assassin이나 강한 diver 상대 (Zed, Talon, Diana — 짧은 시간에 너를 지우는 챔피언)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "ADC가 win condition이고 상대 팀에 dive 위협이 여러 개 있을 때"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "끊임없이 roam하며 chime을 모으고 Q로 고립된 적을 wall-stun으로 잡는다. 한타에서는 R로 적 frontline을 묶어, engage가 commit되기 전에 아군이 backline을 지우게 한다."
  weakness: "Squishy하고 dash가 없다. Q를 빗맞히거나 wall-stun에 실패하면 follow-up CC가 없어 ADC가 2v2에서 죽는다. point-and-click lockdown 서포터와 2레벨 공격형 라인전 챔피언에게 약하다."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "dash 없는 immobile enchanter"
      reason: "Q-into-wall stun 위협 때문에 미니언 한참 뒤에서 플레이할 수밖에 없다. 탈출기가 없어, 깔끔한 wall-stun 한 번이면 적 팀이 합류하기 전에 킬로 이어진다."
    - examples: ["alistar", "nautilus"]
      archetype: "선딜이 보이는 melee 이니시에이터"
      reason: "R이 commit 형 engage를 그대로 끊는다. 상대가 Flash-W로 ADC 위에 올라탄 직후 R을 누르면, engager는 stasis로 얼고 ADC는 무료로 빠져나온다."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "point-and-click CC를 가진 lockdown enchanter"
      reason: "이쪽 CC는 point-and-click이라 피할 skillshot이 없다. dive 시도를 손쉽게 **peel**한다 (peel = 아군에게 달라붙은 상대를 끊어 보호하는 행동). Bard는 trade가 뒤집혔을 때 disengage용 dash가 없다."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "장거리 hooker"
      reason: "이쪽의 hook(사거리 1100-1150)이 너의 유효 Q 사거리보다 길다. 적중당하면 dash가 없어 30초 동안 라인이 1v2로 굴러간다."
    - examples: ["pantheon"]
      archetype: "2레벨부터 공격적인 라인전 bully"
      reason: "2-3레벨 all-in 라인은 Bard의 약한 초반 스탯을 그대로 응징한다. sustain은 W뿐이며 충전에 10초가 걸려 그 시간 동안 무방비다."
---

## 개요

Bard는 라인을 비우고 맵 전체에 영향력을 미치는 **roaming support**다. 그의 정체성은 봇 라인 2v2(두 ADC — 메인 데미지 carry — 와 두 서포터의 봇 싸움) **바깥**에 있다. 맵에 떠 있는 빛나는 **chime**을 주워 모으면 경험치, 마나, 전투 외 이동 속도를 공짜로 얻는데, 이 기동력을 **pickoff** — 팀에서 떨어진 고립된 적을 잡아 죽이는 행위 — 로 환산한다. 그의 Q는 장거리 슬로우지만, 투사체가 두 번째 대상이나 (가장 유명하게는) 첫 번째 적 뒤의 벽을 맞히면 stun으로 바뀐다. R은 stasis 폭탄(4초 비행 후 넓은 광역기)으로, 범위 안의 모든 것 — 아군, 적군, 포탑, 미니언 — 을 2.5초간 얼린다.

게임 플랜: chime을 끊임없이 줍고, **river**(맵의 두 절반을 가르는 가운데 중립 지대)와 정글에서 wall-stun pickoff를 사냥한다. 봇 라인은 네가 사는 곳이 아니라 순찰하는 세 라인 중 하나로 다룬다. 한타에서는 **disengage**(R로 상대 engage를 끊는 역할)이자 **catch**(고립된 표적을 묶는 역할)이지, 거의 절대 frontline이 아니다.

## 추천 빌드

**시작 아이템:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 2개 (몇 초에 걸쳐 HP를 회복하는 소비 아이템). World Atlas는 서포터 quest item이다 — 시간이 지나면 골드를 만들고, 적 챔피언에게 피해를 주거나 맵에 **ward**(시야를 주는 도구를 수풀에 박아 팀이 상황을 보게 하는 행동)를 박을수록 자동으로 네 가지 완성품 중 하나로 진화한다. Bard는 항상 Bloodsong으로 진화시킨다.

**코어 아이템 (구매 순서):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 서포터 path 완성형. Bard가 **poke**(원거리에서 HP를 깎는 견제)와 pickoff 서포터지 **enchanter**(Soraka·Janna 같은 힐·실드 서포터)가 아니기 때문에 적합하다. AP(Ability Power — 마법 데미지를 스케일링하는 스탯)를 주고 적 챔피언에게 피해를 누적시키는 플레이를 보상한다 — 정확히 너의 Q + 평타 콤보가 하는 일이다.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — **ability haste**(모든 쿨다운을 줄이는 스탯)와 **summoner spell**(상단 바의 Flash, Ignite 같은 두 가지 추가 스펠) 쿨감을 주는 신발. **Flash**가 더 빨리 돌아 engage가 잘 풀리고, **R**도 더 자주 돌아와 오브젝트 전투(드래곤·Baron 한타. Baron Nashor는 탑 강에 있는 거대 중립 몬스터로, 팀 전체에 강력한 버프를 준다)에서 영향력이 커진다.
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — 본인과 근처 아군에게 4초간 이속 폭발을 주는 액티브. 이미 빠른 roam과 합쳐져, 아무도 따라잡을 수 없는 봇→미드 **gank**(다른 라인으로 달려가 적을 잡는 행동)를 만든다.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — 후반(약 25-30분, 챔피언이 아이템 4개 이상을 갖춘 시점)으로 갈수록 강해지는 heal/shield power를 준다. 게임이 길어지고 W의 충전이 실제 의미 있는 수치를 회복하는 시점에 산다.

**상황별 아이템:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — ADC가 맞은 stun, root(못 움직이지만 평타는 가능), fear(통제 불가능한 이동)를 풀어주는 액티브. 단일 대상 lockdown(Morgana Q, Ashe R, Leona E-R 연계)에 대비해서 산다.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 근처 모든 아군에게 2.5초 실드를 거는 액티브. 광역 burst 조합(Yone + Malphite + Orianna처럼 모인 팀을 한 방에 — 한 번의 타격으로 — 지우는 조합)에 대비해서 산다.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 죽어서도 아군 위에 깔 수 있는 광역 힐. 오브젝트 주변에 모이는 한타 조합과 잘 맞는다.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 2.5초간 무적이 되는 액티브. assassin이나 강한 **diver**(1-2초 만에 너를 지우러 들어오는 챔피언 — Zed, Talon, Diana)가 분명히 너를 표적으로 삼고 있을 때 산다.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 지정한 아군이 받는 데미지의 12%를 너에게로 돌리고, 네 평타가 그 아군을 회복시킨다. ADC가 hyper-fed(8킬 이상 앞서 적을 1-2번에 지움)이고 상대 팀에 dive 위협이 여러 개일 때 산다.

**신발:** Ionian Boots of Lucidity가 기본. 상대 팀에 CC가 많으면(Lulu, Leona, Lissandra) ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**가 대안이다 — 마법 저항과 30% tenacity(받는 CC 지속 시간 감소)를 준다.

**스킬 마스터 순서:** **Q** 선마(주력 데미지 + wall-stun 도구), **W** 차순(랭크가 오를수록 회복량 증가), **E** 최후(쿨감 효과가 미미해 한 포인트면 후반까지 충분). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 룬은 매치 시작 전에 고르는 패시브로, 두 트리에서 6개를 픽한다(주문 4개 + 보조 2개). Bard 표준은 다음과 같다.

- 주문 **Inspiration**: **Glacial Augment**(슬로우된 적을 평타로 때리면 그 자리에 추가 슬로우 영역이 깔린다 — 너의 Q 슬로우와 시너지), **Magical Footwear**(12분에 무료 부츠), **Biscuit Delivery**(초반 HP·마나를 회복시키는 비스킷 3개), **Cosmic Insight**(추가 ability haste와 summoner spell 쿨감).
- 보조 **Resolve**: **Bone Plating**(3타를 맞은 뒤 1.5초 안에 들어오는 다음 3타가 피해를 덜 받음) + **Revitalize**(힐과 실드량 증가). 라인 안정성용 픽이다.
- 보조 대안 **Sorcery**: 라인전 poke 데미지가 더 필요하면 **Manaflow Band** + **Scorch**.

## 주요 매치업

- **Lulu / Janna:** 2v2의 hard counter. 이쪽 **point-and-click CC**(겨냥할 필요 없이 클릭만 하면 들어가는 CC)가 너의 dive 시도를 통째로 끊는다. Lulu W는 너를 무해한 동물로 바꾸고(polymorph), Janna Q는 너를 띄운다. 뒤로 빠지고, 6레벨에 **R**이 켜지자마자 미드로 roam하며, ADC가 안전하게 **farm**(미니언 라스트힛으로 골드와 경험치를 챙기는 행위)하게 두라.
- **Leona / Nautilus:** point-and-click CC를 가진 engage **tank**(HP가 두꺼운 frontline 챔피언). 항상 ADC 뒤에 자리잡는다. 그들이 ADC에게 달라붙으면 ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R**로 engage를 얼리고 빠져나온다. **trade**(라인전에서의 짧은 타격 교환. 풀 킬 시도가 아니다) 평타 교환은 절대 받지 마라 — 이쪽 CC 체인이 너의 trade window보다 길다.
- **Blitzcrank / Pyke / Thresh:** hook 서포터(시그니처 스펠이 너를 끌어당기는 장거리 **skillshot**(겨냥형 투사체)). hook 사거리가 너의 유효 Q 사거리보다 길다. hook이 켜져 있을 때마다 미니언 뒤에 서라. 빗나간 hook 직후엔 무료 trade로 **Q**를 박는다 — 그쪽 hook은 15초 이상 쿨이다.
- **Pantheon support:** 공격형 라인전 bully(초반 라인을 밀어버릴 만큼 강한 챔피언). **W** 스턴 + **Q** 창으로 2레벨에 **all-in**(킬까지 가는 풀 commit, 후퇴 없음)을 시도한다. sustain이 없으니 멀리 빠지고, 강 양쪽 수풀(챔피언이 시야에서 사라지는 키 큰 풀밭 구간)을 모두 ward하며, 2레벨 trade는 거부한다. 6레벨 후엔 **R** 미드 roam으로 회복한다.
- **Senna:** 패시브로 강해지는 **scaler**(시간이 갈수록 세지며 초반에는 commit하지 않음). 장거리 평타 때문에 깨끗한 all-in이 안 된다. 라인은 느린 farm-trade 양상이 된다. chime 수집과 **R** 미드 플레이로 맵 게임을 이긴다. 절대 너무 앞서지 마라 — **fog of war**(시야가 없어 안 보이는 맵 영역)에서 들어오는 그녀의 **W** 속박은 그 팀 정글러(정글 캠프를 도는 동료)에게는 무료 gank 셋업이다.

## 파워 스파이크 및 승리 조건

- **2레벨 (W 1포인트):** 라인 수풀에 제단을 깔아 trade 사이 sustain 확보. 1레벨 **Q**와 합쳐, 상대 서포터 포지션이 어긋나면 킬 위협이 된다.
- **6레벨 (R 해금):** 첫 **Tempered Fate**가 게임을 흔드는 플레이를 연다. 2v2 도중 적 ADC stasis는 그 자리에서 킬로 직결되는 경우가 많다. 웨이브(미니언 라인)가 너의 포탑 쪽으로 되돌아오자마자(상대가 push를 멈춰 미니언이 자연히 반대편으로 이동) 미드로 roam — **R** + 미드 라이너 콤보가 무방비 미드를 잡는다.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong 완성 (~14-16분):** 서포터 quest item이 진화한다. Q 적중에서 진짜 데미지가 나오기 시작하며, roam 영향력도 함께 커진다.
- **11레벨 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong 완성:** R 2랭크(R에 두 번째 포인트를 찍는 시점)는 쿨다운을 95초로 줄인다. Shurelya's 액티브와 합쳐, 양쪽 사이드 라인(탑·봇)과 90초마다 발생하는 드래곤 한타까지 모두 영향권에 둘 만큼 빠르게 rotate(라인 사이 이동)할 수 있다.

## 흔한 실수

- **벽도 두 번째 대상도 없는 빈터에 Q를 던지기.** 그러면 **Q**는 단순 슬로우일 뿐이다 — 마나 60·쿨다운 11초짜리 슬로우는 trade로 끔찍한 손해다. 표적 뒤 라인에 미니언이나 벽이 있는지 항상 확인하고, 없으면 Q를 누르지 마라.
- **웨이브가 본진 포탑 쪽으로 밀린 채 roam.** 네가 자리를 비우면 웨이브(전투 중인 미니언 라인)가 포탑 밑에서 죽어 ADC가 미니언 2-3개의 farm을 잃고 **tower plates**(초반 포탑의 보호 갑판; 하나 부수면 골드)도 같이 잃는다. roam은 웨이브가 라인 중앙에 있거나 적 포탑 쪽으로 밀려 있을 때(미니언이 전진 중이라 네가 없는 동안 ADC가 자기 포탑에서 안전한 상태)에**만** 한다.
- **한타 중 자기 ADC에게 R.** 아군 위 stasis는 그가 하던 모든 행동을 멈춘다 — trade를 막 이기려던 평타 체인까지 포함이다. **R**은 적, 죽어가는 아군(처형 타격을 끊기 위해), 포탑(타워 다이브 차단)에 쓴다. 멀쩡한 carry에게는 거의 절대 쓰지 마라.
- **자기 R 영역 안에 그대로 서 있기.** 광역기는 넓고 비행 시간은 4초다 — 어디 깔았는지 잊고 그 안으로 걸어 들어가 스킬을 낭비한다. 캐스팅한 다음엔 반드시 빠진다.
- **라인 밖 chime을 무시.** chime은 XP·마나 그 자체다. chime을 줍는 Bard는 라인에 박혀 있는 Bard보다 6레벨에 약 2분 빨리 도달한다. 10분 시점에 팀 평균 레벨보다 1 이상 앞서 있지 않다면 잘못 운영한 것이다.

## 고급 팁

**flash-stun**을 연습하라: Q를 캐스팅한 뒤, 비행 도중에 **Flash**(범용 단거리 텔레포트 summoner spell)를 활성화해 캐릭터를 옮기면 — Q 투사체가 너의 모델을 따라가기 때문에 새 위치에서 새로운 각도로 발사된다. 핵심은 적이 **dash**(짧은 즉시 이동)하는 *방향으로* 플래시하는 것이다. 그러면 평소라면 dodge할 탈출기를 뚫고 적을 잡는다. Bard의 kit(보유 스킬 전체) 안에서 가장 레버리지가 큰 트릭이며, 게임을 이기는 Bard와 그러지 못하는 Bard를 가르는 차이일 때가 많다.
