---
title: "Amumu Jungle Build & Guide — Patch 16.9"
slug: "amumu-jungle"
language: "ko"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Amumu 정글 공략. 시작 아이템과 클리어 동선, AP 탱커 코어 빌드(magic damage + tank stats), 갱 타이밍, 주요 매치업 대처, R 셋업과 우선 타겟팅 원칙, 흔한 실수와 Flash + Q 콤보 정리."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "basic attack이 적에게 Curse를 부여한다. Curse가 걸린 대상은 받는 모든 magic damage에 추가 true damage가 더해진다 — 우리 팀 스킬이 더 세게 박힌다."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "장거리 직선 skillshot. 첫 번째 적 명중 시 Amumu를 그쪽으로 끌어당기고 stun. 사용 횟수 두 번 — 하나는 engage용, 하나는 후속타나 탈출용."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "주변 적에게 매초 최대 체력 비례 magic damage를 가하고 Curse를 갱신하는 토글 오라. 켜져 있을 때 마나를 소모하니 전투 외에는 꺼두자."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "패시브: 받는 물리 피해 감소. 액티브: 단거리 광역 폭발. 피격될 때마다 쿨이 줄기 때문에 장기전에서는 계속 난사."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "주변의 모든 적을 묶어버리는 거대한 광역 stun이며 Curse를 부여한다. 챔피언 스킬셋의 핵심 — 모든 한타는 이 스킬이 박히는 순간부터 시작된다."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "근접 bruiser가 많은 팀 (Sett, Darius, Olaf): burn aura가 W와 중첩되고 추가 armor로 전열 포커싱을 버틴다"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "magic damage 챔피언이 3명 이상일 때: 광역 마법 저항 감소가 Curse 대상에게 들어가는 모든 스킬 위력을 키운다"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "R 직후 본인을 끊으려는 burst comp 상대 (Zed, LeBlanc, Syndra): stasis로 본인은 살고 팀이 정리"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC로 한타를 여는 픽 상대 (Ahri charm, Lissandra R, Morgana Q): spellshield가 본인 engage를 막아준다"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "안개 속에서 핵심 타겟에 Q를 박고 R로 사거리 안의 모두를 묶은 뒤, 적 backline 위에 자리잡고 W로 최대 체력 비례 dot를 흘리면서 피격마다 Tantrum 쿨을 돌린다."
  weakness: "engage 수단이 뻔하고 쿨이 길다. Q를 빗맞히거나 Cleanse Summoner로 R이 풀리면 후속타가 없다 — 두 스킬이 돌아올 때까지 90초 넘게 카이팅 당하며 아무 기여도 못 한다."
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
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "광역 피해를 가진 한타 집합형 조합"
      reason: "Amumu의 R은 좁은 반경에 모인 적을 한꺼번에 묶는다. 모여서 싸워야 하는 조합 (Yasuo + Kennen 광역 궁, 타겟 사이를 점프하는 Katarina, Miss Fortune Bullet Time)은 stun을 동시에 받고, Curse 패시브로 자기 광역 데미지를 본인들에게 더 박는다."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "탈출기 없는 비기동 carry"
      reason: "Q는 1100 사거리 skillshot이고 첫 명중 적에게 Amumu를 끌어당긴다. 점멸이나 dash가 없는 carry는 막타 잡으러 한 발 앞으로 나오는 순간 위치에서 뽑혀 나간다."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "engage를 받아 폭발하는 AP 아군"
      reason: "Cursed Touch는 magic damage를 추가 true damage로 바꾼다. AP 위주 팀은 Q-R 한 번에 즉살까지 만든다 — 뒤따르는 모든 스킬이 더 세게 박히기 때문이다."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "패리·면역·dash로 빠지는 기동 bruiser"
      reason: "Fiora W는 Q stun을 패리해 되돌리고, Tryndamere R은 무적 시간 동안 W 도트를 무시하며, Yone의 3타 Q는 Tantrum 사거리 밖으로 빠져나간다. engage를 견디고 한타를 뒤집는다."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "관여 안 하고 일방 포킹하는 장사정 포대"
      reason: "Q의 1100 사거리 바깥에서 일방 poke한다. Amumu는 engage 위협을 만들겠다고 그들 데미지 안으로 걸어 들어가야 하고, Q를 빗맞히면 25-30초간 그쪽이 라인이나 오브젝트를 자유롭게 민다."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "탈출기를 자체 보유한 marksman"
      reason: "Ezreal E, Tristana W, Kalista의 hop reset 모두 Q 명중 후 R 반경 밖으로 빠져나간다. Curse는 의미 없이 사라지고, 팀이 stun 후속타를 넣기 전에 carry는 이미 자리를 잡았다."
---

## 개요

Amumu는 게임에서 가장 단순한 engage 정글러다. fog of war (아군 시야 밖, 안 보이는 맵 영역)로 걸어가서 **Bandage Toss (Q)**를 던지고, **Curse of the Sad Mummy (R)**를 누른 다음, 팀이 데미지를 쏟아붓도록 둔다. 스킬셋의 임무는 단 하나 — 본인 조건에서 한타를 여는 것 — 이며, 1100 사거리 끌어오기 덕분에 거의 모든 다른 engage 챔피언보다 더 멀리서 그 일을 해낸다. 그 다음 패시브 **Cursed Touch**가 모든 Curse 대상에게 들어가는 마법 데미지를 추가 true damage로 바꿔, AP 아군의 화력을 곱한다.

대가는 분명하다. **R**은 100-150초 쿨다운에 묶여 있고 **Q**가 유일한 setup 도구다. 빗맞히면 90초 동안 카이팅 당하니, 이 가이드는 매번 갱킹을 강행하는 게 아니라 *맞는 한타를 고르는* 데 초점을 둔다. 게임 플랜은 이렇다 — 클리어, 6레벨 도달, 그리고 그 이후 25-30분 동안 R이 돌 때마다 킬이나 오브젝트로 환산.

## 추천 빌드

**시작 아이템:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade는 정글 시작템으로, 중립 몬스터를 빠르게 깎고 적 챔피언에게 짧은 슬로우를 묻힌다. Refillable Potion은 본진에서 무료로 충전되는 회복 아이템이라, 정글 camp (사냥하는 중립 몬스터 무리) 사이의 chip damage를 채우는 데 골드를 쓰지 않아도 된다.

**코어 아이템 (구매 순서):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 가장 중요한 한 칸. 최대 체력 % burn 패시브가 **W**와 겹쳐 오라 안에 버티는 탱커들을 녹인다. 매 게임 산다.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 기본 신발. **tenacity** (받는 stun과 slow 지속시간을 줄여주는 스탯)를 주는데, R 이후 계속 걸어가야 하는 engage 챔피언에게 매우 중요하다. 적팀이 AD 위협 3명 이상이고 강한 CC 연쇄가 없다면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**로 바꾼다.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (모든 데미지에서 흡혈)에 더해, 전투 진입 3초 후 데미지 일부를 true damage로 바꾸는 패시브. **W**의 지속 데미지와 궁합이 완벽하다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 scaling 배수기. Liandry's와 Riftmaker가 이미 나와 있을 때 Deathcap이 들어가면 **W** 오라 데미지가 "성가시다"에서 "여기 2초 못 서 있다"로 바뀐다.

**상황별 아이템:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — 근접 bruiser (데미지와 맷집을 같이 들고 들어오는 근접 챔피언, 예: Sett, Darius, Olaf)가 많은 팀 상대. 화염 오라가 **W** 오라에 더해져 광역 데미지가 두 배가 되고 armor도 추가로 받는다.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — magic damage 챔피언이 3명 이상일 때. 주변 적의 magic resist를 깎아, Curse 대상에게 들어가는 우리 팀의 모든 스킬을 더 강하게 만든다.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — R이 박히는 순간 본인을 끊으려는 burst comp 상대 (Zed, LeBlanc, Syndra). stasis (2.5초 동안 피해도 안 받고 행동도 못 하는 무적 상태)가 본인을 살려두는 동안 팀이 마무리한다.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 장시간 단일 대상 마법 CC 연쇄 상대 (Ahri 매혹 → 올인, Lissandra R, Morgana Q). spellshield (본인을 노린 다음 한 발의 스킬을 막는 일회용 보호막)가 engage 자체를 먹어버린다.

**신발:** 기본은 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**. Plated Steelcaps는 강한 CC 연쇄가 없는 AD-heavy 조합에서만.

**스킬 마스터 순서:** **E** 선마(클리어 속도와 장기전 데미지), **Q** 후마(갱 위협과 stun 쿨 단축), **W** 마지막. **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**에 **Aftershock** (Q stun이나 R이 박히는 순간 2.5초 동안 armor와 magic resist를 추가로 주는 — 게임의 대표 engage 룬), **Font of Life** (본인 CC가 묻은 적을 아군이 때리면 회복), **Conditioning** (12분 이후 추가 저항), **Revitalize** (본인이 받는 보호막과 회복량 강화). 보조 트리 **Sorcery**에 **Manaflow Band** (마나 sustain — 클리어 내내 W를 켜둘 수 있게 해준다)와 **Transcendence** (모든 스킬 쿨다운을 줄이는 스탯, ability haste 추가).

## 주요 매치업

- **Lee Sin / Elise:** 우리 약한 쪽으로 invade 들어오는 초반 정글러. 본인 정글의 raptor와 red buff에 **ward** (~90초 동안 작은 영역에 시야를 주는 설치형 아이템)를 박아 동선을 추적하라. 3렙 전에는 1대1 invade를 피하고, 풀 클리어 (camp 한 번씩 정리)를 마친 뒤 Scuttle (사망 시 시야를 주는 강가 게)로 가서 상대가 본인을 찾느라 템포를 잃게 만든다.
- **Master Yi / Karthus:** scaling 정글러. 18분 전에 한타와 오브젝트(아래쪽 Drake, 위쪽 Rift Herald, 그 후 Baron)를 강제하라 — 본인도 잘 크지만 그쪽이 더 잘 큰다. R은 매번 적 carry (대부분의 데미지를 책임지는 후방 marksman 또는 burst mage)를 노려야 한다 — 앞에 있는 탱커가 아니라 — 그래야 적팀에 peel할 대상이 안 남는다.
- **Hecarim / Volibear:** engage가 겹치고 클리어가 더 빠르다. 클리어로 이기려 하지 말고, 본인 라이너들을 이용해 4분쯤 prio (라인을 적 쪽으로 밀어붙여 라이너가 잠깐 자리를 비워도 미니언을 잃지 않는 상태)가 잡히는 라인에 갱을 노려라.
- **Maokai / Sejuani:** 광역 engage를 가진 탱커 정글러. R을 먼저 박는 쪽이 한타를 가져간다. 상대가 commit한 뒤에 **Q**를 써서 본인 stun이 그쪽 stun에 이어지도록 하라 (적은 두 stun 지속시간의 합만큼 묶인다).
- **Kha'Zix / Rengar:** 본인 backline을 끊는 암살자. 적팀 앞에 서지 말고 본인 carry를 위해 body-block (말 그대로 암살자와 본인 데미지 딜러 사이에 서서 공격을 흡수하라)하라 — **W** 오라와 **E** Tantrum이 본인 옆 타겟을 때리려는 그들을 처벌한다.

## 파워 스파이크 및 승리 조건

- **3레벨:** **E**, **W**, **Q**가 모두 열린 시점부터 첫 갱킹 (라인전 중 정글러가 라인에 깜짝 등장해 킬을 노리는 플레이) 위협이 진짜로 발생한다. 적 HP가 가장 낮고 후속 CC가 강한 라인을 보고, snowball하는 (시간이 갈수록 커지는 우위 — 킬 → 골드 → 아이템 → 더 큰 킬) 아군 밑에서 Q-W-AA-E (AA = 평타) 한 사이클이면 보통 킬이 난다.
- **6레벨:** 첫 **Curse of the Sad Mummy**. Amumu에게 게임에서 가장 큰 단일 power swing이다. 6레벨 도달 후 30초 안에 fight를 만들어라 — 라인 갱킹, Scuttle 견제, 또는 첫 Drake 셋업.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 완성 (~ 12-14분):** **W**가 단순 poke에서 진짜 위협으로 바뀐다. 견제 대상 위에 **W**를 흘리며 Drake나 Rift Herald 싸움을 하면 R을 누르지 않고도 오브젝트가 굴러 들어온다.
- **3아이템 스파이크 (~ 22-26분):** Liandry's + Riftmaker + Deathcap 완성. R 쿨이 짧아 Baron 타이머 한 번에 한타를 두 번 칠 수 있다. 모든 오브젝트를 강제하라. 이게 본인 정점이다.

## 흔한 실수

- **setup 없이 쿨마다 Q를 던지기.** 맨 Q는 유일한 engage 도구를 낭비하는 일이다. 적이 이미 슬로우, root (이동 불가)나 아군 훅에 잡혔을 때까지 Q를 들고 있어라 — 예를 들어 Morgana Q가 박히면 그 위에 본인 Q는 보장된다. Q를 정찰용으로 쓰면 진짜 한타가 왔을 때 손에 든 게 없다.
- **fight에 도착하자마자 R 누르기.** R은 *Amumu 본인 중심* 광역기다. 200 단위 모자란 위치에서 누르면 아무도 stun되지 않고 100-150초 쿨이 그대로 날아간다. 적 backline 안까지 들어간 *다음에* R.
- **전투 외에도 W 켜두기.** **Despair**는 옆에 적이 없어도 켜져 있는 동안 초당 8 마나를 빨아먹는다. 그러다 보면 8분쯤 깔끔한 갱에서 Q stun 마나가 없다. 한타든 클리어든 끝나는 즉시 꺼라.
- **Tantrum의 쿨 리셋 무시.** **E** 패시브는 평타를 맞을 때마다 자기 쿨을 깎는다. 근접 적과 긴 fight를 할 때는 **E**를 1-2초마다 누를 수 있다 — 그쪽 평타 사거리 안에 서서 계속 난사하라.
- **carry 대신 탱커에 R.** R은 한타용 궁이다. 그래, 탱커가 더 가깝고, 그래, 그쪽에 박히긴 한다 — 그러나 팀이 원하는 stun은 carry에게 들어가는 stun이다. **Flash** (모든 챔피언이 고르는, 약 5분에 한 번 짧게 순간이동하는 Summoner Spell)를 아껴서 fight를 flank (정면이 아니라 측면이나 후방에서 들어가는 동선)하고 backline에 engage하라. 앞에 있는 탱커가 아니라.

## 고급 팁

target dummy에 **Flash + Q** 콤보를 연습하라. 핵심은 — Q를 먼저 시전하고, *그 다음* 캐스팅 도중에 타겟 방향으로 Flash. Q의 끌어당기는 애니메이션이 Flash 후 위치를 기준으로 다시 계산되어, 발사체 길이가 425 단위 줄어든 채로 거의 회피 불가능한 형태로 나간다. 1100 사거리 skillshot이 사실상 zero-range 보장 stun으로 바뀐다 — Amumu 메인과 원트릭을 가르는 플레이로, 안개 너머로 backline에 측면 진입한 뒤 engage가 오는 줄도 몰랐던 움직이는 적에게 Q를 박아넣을 수 있게 해준다.
