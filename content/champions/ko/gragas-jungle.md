---
title: "Gragas Jungle Build & Guide — Patch 16.9"
slug: "gragas-jungle"
language: "ko"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Gragas 정글 공략. 정글 동선과 갱킹 루트, AP 브루저 코어 빌드와 상황 아이템, 주요 매치업 대처법, 6렙 R 파워 스파이크 활용, 흔한 실수와 R-Flash 콤보 같은 고급 팁까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "어떤 스킬이든 시전하면 Gragas가 소량 회복한다 (내부 쿨다운 5초). 정글 동선을 도는 동안 굳이 일찍 base로 돌아가지 않아도 체력이 유지된다."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "지정한 지점으로 술통을 굴린다. 재시전으로 폭발시키거나 4초 뒤 자동 폭발. 차징 시간이 길수록 데미지·슬로우가 강해지므로 최대치까지 기다려서 터뜨린다."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "1초 채널 후 3초간 받는 피해 30% 감소, 다음 평타에 추가 마법 피해. 캠프 어그로를 받기 전에 E보다 먼저 깔아주는 게 정석."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "처음 닿은 적에게 막혀 광역 피해와 1초 stun을 거는 dash. 유일한 gap-close, 유일한 hard CC, 그리고 핵심 engage 도구다."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "착탄 중심에서 적을 멀리 밀어내는 술통을 던진다. 아군 peel, 고립된 타겟 pickoff, 또는 적 carry를 우리 frontline 안으로 던져 넣는 데 쓴다."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "assassin이나 dive comp 상대 (Zed, Talon, Kha'Zix): R 후 stasis로 아군이 정리할 시간을 번다"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Morgana Q): spell shield가 R을 끊는 lockdown을 막아준다"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "hard CC 3개 이상인 팀 상대 (Leona, Sejuani, Lissandra): tenacity로 stun을 줄이고 W 데미지 감소를 보호한다"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "마법 저항을 쌓거나 힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo): magic pen과 R 시 healing-reduction 영역"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "스노우볼 게임에서 3아이템 이상 앞설 때 engage 대신 Q-E로 squishy를 한 번에 잡고 싶을 때"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "오브젝트 교전에서 R로 적 carry (ADC, mid mage)를 우리 frontline 안으로 던져 넣는다. 진입 직전 W로 피해를 흡수한 뒤 E로 들어가고, 합쳐진 한타에 Q를 넣어 Riftmaker의 지속 AP burn을 극대화한다."
  weakness: "E가 유일한 gap-close이자 유일한 stun이다. 빗맞히거나 invade 직전에 캠프 클리어로 써버리면 12초 넘게 engage도 도주도 불가능하다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "데미지 트리 대신 Resolve 주문: Gragas는 dive로 engage하므로 자기 위에 쏟아지는 CC 사슬을 살아남아야 한다. Body Slam의 stun이 발동하는 순간 Aftershock이 트리거되어 압박 상황에 저항이 붙는다. Font of Life·Conditioning·Revitalize는 후반까지 탱키함을 유지해 준다."
    secondary_rationale: "Sorcery 보조: Nimbus Cloak으로 Smite나 Flash 직후 Movement Speed 버스트를 받아 어색한 각도에서도 Body Slam을 이어갈 수 있고, Transcendence는 Ability Haste와 takedown 시 평타 리셋을 줘서 Gragas의 긴 skirmish와 잘 어울린다."
    secondary_alternative: "상대 팀에 AD 위협이 4개 이상이면 (Zed mid, Tryndamere top, Vayne bot) Sorcery 보조를 Precision으로 바꿔 Triumph (takedown 시 회복)와 Legend: Tenacity (Mercury's Treads와 누적)을 든다."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "hard CC 없는 squishy 캐리형 정글러"
      reason: "Body Slam의 stun이 그들의 kite 패턴을 끊는다. Master Yi는 Alpha Strike로 빠져나갈 수 없고, Kindred는 평타 리셋 춤을 못 추고, Graves는 자리잡지 못한다. 후속 engage에선 R로 그들을 우리 carry에서 떨어뜨려 던질 수 있다."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "긴 채널 ult를 가진 정글러"
      reason: "Explosive Cask가 Karthus R, Amumu R, Warwick R을 끊는다. 한타 도중 한 번의 knockback으로 그들의 핵심 한타 무기가 통째로 무산되고, Gragas는 채널링 중인 타겟 옆에 통의 중심만 떨어뜨리면 된다."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "스텔스 의존형 ganker"
      reason: "W의 데미지 감소가 그들의 시작 burst (Fiddlesticks의 fear+drain, Shaco의 backstab)를 흡수하는 동안 Body Slam이 시전 중인 그들을 stun한다. 그들의 engage는 방해받지 않는 cast time을 전제로 하는데, Gragas가 그걸 빼앗는다."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "다중 gap-closer를 가진 기동성 skirmisher"
      reason: "Gragas의 단일 Body Slam dash보다 더 빠르게 거리를 좁히고, 네가 W에서 E로 이어가기 전에 fight를 시작한다. 게다가 한타 도중 Viego가 우리 frontliner를 빙의하면 너의 engage가 1대2로 변한다."
    - examples: ["kayn"]
      archetype: "true damage 기반 안티탱크 bruiser"
      reason: "Kayn (Rhaast)의 최대 체력 비례 true damage는 Gragas의 저항과 W의 데미지 감소를 모두 무시한다. 후반 탱크 빌드 Gragas는 저항을 풀로 챙겨도 강가 1대1에서 진다."
    - examples: ["nidalee", "elise"]
      archetype: "장거리 poke 정글러"
      reason: "Nidalee의 창과 Elise의 거미 폼은 Body Slam 사거리 밖에서 Gragas를 깎는다. E를 쓰지 않고는 거리를 좁힐 방법이 없고, E를 쓰는 순간 두 정글러는 그냥 걸어 나가서 trade가 끝난다."
---

## 개요

Gragas는 탱키한 AP 브루저 정글러다 (피해를 위해 AP를 올리되 frontline에서 살아남을 수 있는 HP·저항을 함께 챙기는 fighter). 게임 플랜의 핵심은 단 하나의 큰 플레이로 압축된다 — **Explosive Cask (R)** 로 적 carry (적 팀이 중심으로 굴리는 고데미지 챔피언)를 아군 한복판으로 던져 넣는 것. 그의 **Body Slam (E)** 는 유일한 gap-close (거리를 빠르게 좁히는 스킬)이자 유일한 hard CC이므로, 잘하는 Gragas는 인내심으로 플레이한다 — 캠프를 정리하고 갱이나 engage를 위해 **E** 를 아껴두며, **R** 이 켜졌을 때만 풀로 commit한다. **Happy Hour (P)** 덕분에 자체 sustain (전투 중 패시브 체력 회복)이 있어 base에 가지 않고도 정글을 돌 수 있고, **Drunken Rage (W)** 는 짧은 skirmish의 첫 번째 큰 데미지 덩어리를 흡수해 주는 30% 데미지 감소 창을 연다.

승리 조건은 6레벨의 첫 pickoff다 — 고립된 적을 **R** 로 위치에서 끌어내 공짜 킬을 만든다. 거기서부터 팀은 다음 **R** 쿨다운을 중심으로 움직인다. 적 정글러가 우리 강가에 들어오면 그 위로 올라가거나, Drake (잡으면 팀에 영구적 스탯 버프를 주는 중립 몬스터) 한타를 set up해서 한 번의 좋은 **R** flip으로 적 ADC (봇 라인 marksman, 후반 팀의 주력 데미지 딜러)를 한타가 시작되기도 전에 끊어낸다. **R** 이 없을 땐 절대 fight를 열지 마라 — Gragas는 enabler (팀에게 fight 기회를 만들어 주는 챔피언)이지 1대1 듀얼리스트가 아니다.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. 표준 ranged-Smite 정글 시작템 — Gragas의 평타는 시작템 분류상 ranged로 취급된다.

**코어 아이템 (구매 순서):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade의 quest upgrade다 (XP가 충분히 쌓이면 3-4분쯤 자동으로 진화). AP 버스트 펫 동반자: 스킬 시전 후 평타마다 추가 마법 피해와 **Q** 와 누적되는 슬로우를 더한다.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 지속 AP burn 아이템. omnivamp (평타뿐 아니라 모든 종류의 피해에 적용되는 흡혈)을 주고 길어지는 fight일수록 데미지를 누적시킨다. Gragas의 길게 끄는 engage와 궁합이 완벽하다.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통. 적 팀이 hard CC 스킬을 3개 이상 갖고 있으면 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 로 대체.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste와 챔피언 피해 후 Movement Speed. 늘어난 기동력으로 fight 주변을 돌며 두 번째 **E** stun을 cooldown이 돌아오는 즉시 꽂을 수 있다.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste와 fight가 길어질수록 강해지는 최대 체력 비례 마법 burn. 평탄한 AP가 효율을 잃기 시작하는 탱키한 적 frontliner (Sejuani, Ornn)를 응징한다.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — assassin 또는 dive comp 상대. **R** 직후 액티브를 켜서 후속 burst를 버틴다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC 상대 (Ahri charm, Lissandra **R**). spell shield가 그렇지 않으면 **R** 을 끊을 lockdown 스킬을 막는다.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 힐 누적 조합 상대 (Soraka, Vladimir, Dr. Mundo). R 액티브가 healing-reduction 지대를 떨어뜨려 너의 knockback과 짝을 이룬다.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 3아이템 이상 앞서 있고 engage 대신 one-shot 역할로 전환하고 싶을 때만.

**신발:** 기본은 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**. 강한 crowd control (CC) 상대로는 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 로, 적 4명 이상이 물리 피해를 줄 땐 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 로 변경.

**스킬 마스터 순서:** **E** 선마 (stun과 주력 피해), **Q** 후마 (웨이브 클리어와 원거리 poke), **W** 는 마지막. **R** 은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve** 에 **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. 보조 **Sorcery** 에 **Nimbus Cloak** 과 **Transcendence**. Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## 주요 매치업

- **Lee Sin / Viego:** 짧고 반복적인 fight를 위해 설계된 기동형 skirmisher. 6레벨 전엔 너를 이긴다. 첫 Scuttle Crab (잡은 사람에게 vision과 Movement Speed 버프를 주는 강가의 게)을 다투지 마라. 캠프를 풀로 정리하고 6레벨 **R** 까지 scaling (아이템과 레벨로 강해지는 것)을 노려라. 한 번의 좋은 cask flip으로 매치업이 즉시 평형이 된다.
- **Master Yi / Kindred:** squishy (HP 적고 저항 없음) 캐리형 정글러. 미니맵에서 동선을 추적해라. Yi가 봇 사이드에 있고 너는 톱이라면 풀 HP로 내려가 6레벨 미드 갱을 노려라 — 너의 **E** stun이 Alpha Strike (지정 불가 dash) 리셋 사이클을 끊는다.
- **Karthus:** 후반 한타 ult 위협으로 scaling한다. 너의 일은 **R** 로 그의 채널링을 끊는 것이다. 6레벨 spawn 타이밍을 추적하고 ult가 켜질 때마다 cancel하겠다고 미드에 핑을 박아라.
- **Sejuani / Amumu:** front-to-back 탱크. 단독으로 out-engage하려 하지 마라. 그들이 먼저 commit하게 두고, 그들이 만든 벽 위의 적 carry를 **R** 로 끌어내라. 너의 **E** stun이 그들의 CC와 이어져 그들이 묶어둔 타겟에 확정 킬이 나온다.
- **Nidalee:** 장거리 poke (적 사거리 밖에서 가하는 chip damage)는 너의 engage 사전 동작을 응징한다. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 를 일찍 사라. 정글에서 fog of war (시야가 없어 회색으로 보이는 영역)를 통해 이동하고, 갱 가는 길의 라인 강가에서 그녀의 창을 절대 face-tank하지 마라.

## 파워 스파이크 및 승리 조건

- **3레벨 (E 해금):** 첫 갱 윈도우. 적 라이너의 **Flash** 가 빠진 라인으로 들어가 시야 진입 전 **W**, 그다음 벽을 넘어 **E** 로 기습 stun. 라이너에게 follow-up 셋업.
- **6레벨 (첫 Explosive Cask):** 파워 스파이크. **R** 한 번이면 over-extended된 적 라이너를 너의 타워나 너의 정글러 갱 안으로 던져 넣을 수 있다. base 가기 전에 좋은 fight 한 번 강제하라.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 완성 (~13-15분):** 첫 큰 파이팅 스파이크. 지속 AP burn과 omnivamp 덕에 skirmish에서 길게 trade할 수 있다. 이때 Drake fight를 강제로 열어라.
- **3아이템 + 신발 (~25-28분):** 한타 정점. Aftershock과 ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive**, ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** 의 조합으로 너는 맵에서 가장 신뢰할 수 있는 engager가 된다. 팀과 모여 오브젝트 fight를 노려라.

## 흔한 실수

- **invade가 들어올 때 캠프 클리어용으로 E 쓰기.** **E** 는 1랭크 쿨다운 14초다. 크록(Krug)에 Body Slam을 박았는데 3초 뒤 적 정글러가 들어오면 escape도 stun도 없다. 미니맵에 적 정글러가 너의 정글 경계에 보이면 **E** 를 아껴라.
- **R을 시작 데미지로 던지기.** **R** 은 knockback이지 데미지 스킬이 아니다. 타겟 배치 계획 없이 던지면 적을 아군의 follow-up에서 멀리 흩어버린다. **R** 을 누르기 전 항상 적 carry가 어디에 떨어질지를 머릿속에 그려라 — 우리 팀 안으로 던져라, 멀리가 아니라.
- **E 대신 W 선마.** **W** 는 Gragas에게 stun도, gap-close도, 클리어 속도도 주지 않는다 — **E** 가 셋 다 한다. 매 게임 **E** 선마.
- **3레벨 전에 갱.** **E** 없이는 이미 너의 타워에 다이브하고 있는 게 아닌 한 어떤 타겟도 잡을 수 없다. 3레벨 전 갱은 건너뛰고, 두 캠프 템포로 클리어한 뒤 3레벨 **W-E** 콤보로 갱을 가라.
- **변신한 Kayn과 단독 듀얼.** Kayn-Rhaast의 true damage는 너의 탱크 스탯을 무시한다. 후반 그의 정글에서 1대1을 피하고 오브젝트는 팀과 함께 잡아라.

## 고급 팁

**R-Flash** 콤보를 연습하라. 적 carry의 발 밑에 **R** 을 시전하고, 캐스팅 도중 **Flash** 로 통의 착탄 지점을 우리 팀 옆으로 옮긴다. 통은 Flash 후 위치에서 그대로 폭발하므로, 안전 거리에 서 있던 carry가 각도가 바뀐 줄도 모르고 우리 frontline 안으로 던져진다. 현재 솔로 큐 패치에서 가장 가치가 큰 단일 Gragas 메커닉이며, 랭크에 시도하기 전 30분 정도의 연습 모드 시간을 들일 가치가 있다.
