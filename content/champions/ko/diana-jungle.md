---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "ko"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Diana 정글 공략. 첫 클리어 동선부터 Scuttle과 Drake 타이밍, gank 루트, AP burst 빌드, Sorcery 룬 보조, 주요 매치업 대처법, 파워 스파이크 활용, 자주 하는 실수와 고급 콤보 팁까지 한 페이지로 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "세 번째 평타마다 주변 적에게 부채꼴로 추가 마법 피해. 스킬을 시전하면 5초간 attack speed 증가 — 정글 클리어의 핵심 엔진이다."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "곡선 skillshot으로 적에게 3초간 Moonlight 표식. 표식이 E 쿨 리셋 조건이자 gank 셋업 도구."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "주위를 도는 세 개의 구체가 접촉 시 마법 피해를 주고 보호막을 부여. 듀얼과 정글 캠프 클리어에서 체력 손실을 막아주는 핵심기."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "지정 대상 dash로 마법 피해. Q로 Moonlight가 묻은 대상에 사용하면 쿨이 즉시 리셋된다 — gap-close 엔진."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "주변 적을 끌어당기고 슬로우, 이후 Diana 위에서 폭발해 광역 마법 피해. 키트의 유일한 CC (CC = crowd control, 적의 이동·행동을 막는 효과): 사거리가 짧다."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "hard-engage 탱커 상대 (Malphite, Sejuani, Leona) — R 후 stasis로 CC chain을 회피"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "고체력 frontline이 둘 이상 있는 조합 (Cho'Gath, Ornn): burn이 HP에 비례해 증가"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템(Mercury's Treads, Spirit Visage)을 사면 즉시 교체"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "회복 누적이 강한 조합 상대 (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Ahri charm, Lissandra R, Twisted Fate stun)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "fog에서 Q를 맞히고 E로 표식 대상에게 dash, R로 적팀에서 분리한 뒤 W와 평타 리셋으로 아군 follow-up과 함께 처리. 6렙부터 오브젝트 주변에서 fight를 강요한다."
  weakness: "유효 사거리가 짧다 (E가 825 unit). 강한 disengage(Janna R)나 peel은 carry에서 떼어내며, Q 표식이 없으면 두 번째 dash로 도망칠 수단이 없다."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
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
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana는 그들의 정글에서 장기 듀얼을 이긴다: Pale Cascade로 한 사이클 데미지를 막고 Lunar Rush가 Q 표식에 리셋되어 카이팅 불가능한 re-engage를 만든다."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "그들은 6렙에 power가 급락하지만 Diana는 R로 mid-game 압박을 연다. 첫 클리어 템포를 맞추고 오브젝트를 트레이드하다 보면 Luden's Echo가 게임을 뒤집는다."
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana는 패시브 리셋으로 더 빠르게 클리어하고 Scuttle Crab을 먼저 잡는다. Drake가 리젠될 때마다 그들의 뒤쪽 캠프를 카운터 정글하면 그들은 제때 로테이트하지 못한다."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "그들은 Diana가 E를 얻기 전인 3렙에 인베이드해 클리어를 부순다. 그들의 CC는 Pale Cascade의 보호막을 무시한다: 6렙 전 그들의 정글에서의 1대1은 공짜 킬이다."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "Diana의 R은 melee range에서만 발동된다 — 이런 counter-engage 도구들은 Moonfall 채널이 끝나기 전에 그녀를 pull window에서 밀어내 유일한 CC를 낭비시킨다."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "그들은 Moonfall을 그대로 통과한다 (Olaf R은 CC를 cleanse, Udyr R은 pull을 무시) 그리고 보호막이 깨진 뒤 Diana보다 DPS가 높다 — 그녀에겐 두 번째 escape가 없다."
---

## 개요

Diana는 마법 피해형 diver다 — 보호막이 내장된 melee 암살자, 표식이 묻은 대상에 무료 dash, 게임 내 가장 강한 한 버튼 engage 중 하나를 갖췄다 (engage = 한타를 여는 행동). 정글에서는 초반 gank 대신 빠른 클리어를 가져가고 6렙에 snowball을 굴린다 — snowball은 시간이 지나며 커지는 초반 우위(킬 → 골드 → 아이템 → 더 많은 킬)다. **Lunar Rush (E)** 가 한 킬을 두 번째 dash로 이어줄 수 있게 되면 그녀는 "R 누르고 carry 삭제" pick의 정점이 된다. (diver는 적팀의 back line으로 뛰어드는 melee 챔프다.)

정글러로서의 게임 플랜은 **Pale Cascade (W)** 와 **Moonsilver Blade (P)** 의 on-hit로 첫 클리어를 강하게 마치고, 3:30쯤 **Scuttle Crab** (시야와 작은 speed shrine을 주는 강 게)을 가져오고, 그 뒤 시야 셋업과 함께 라인을 갱킹하는 것이다. 6렙 이후 Drake나 Rift Herald 근처의 한타는 모두 win condition이 된다 — **Moonfall (R)** 이 우선순위 타겟을 끌어들이고 팀이 마무리한다.

## 추천 빌드

**시작 아이템:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Gustwalker 펫은 비전투 movement speed를 주는데, 이는 Diana의 gank-heavy 미드게임에 완벽하다. Mosstomper(sustain 펫)는 건너뛰자 — 너의 **W** 가 이미 한 클리어 사이클을 막아준다.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 첫 burst 스파이크 (burst = 1-2초에 집중된 높은 피해), AP와 ability haste. bolt가 E로 붙는 순간 squishy 타겟을 갈아낸다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 magic penetration. 95% 게임의 기본 신발.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst, HP 임계 패시브(여기선 35% — 적이 특정 HP 이하일 때 발동)는 너의 R-into-E 마무리와 정확히 맞물린다.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 스케일링 배수. 단일 아이템 중 가장 큰 AP 슬롯.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — hard-engage 탱커(Malphite, Sejuani, Leona) 상대. R 직후 stasis 액티브(2.5초간 무적이지만 이동·행동 불가)를 켜면 적의 follow-up CC가 헛친다.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 고체력 frontline이 둘 이상인 조합(Cho'Gath, Ornn) 상대: burn이 그들의 HP 풀에 비례해 강해지고 네가 자세를 잡는 동안에도 틱 데미지가 들어간다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 Magic Resist 아이템(Mercury's Treads, Spirit Visage)을 사는 순간 교체.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 회복 누적이 강한 조합(Soraka, Vladimir, Dr. Mundo, Aatrox) 상대.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC(crowd control: 스턴, 속박, 매혹) 상대 — 예: Ahri의 charm이나 Lissandra의 R.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 가 기본. AD 위협이 둘인 AD-heavy 조합 상대로는 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 로, 마법 CC가 많을 때는 Mercury's Treads로 바꾼다.

**스킬 순서:** **Q** 부터 마스터 (waveclear, Q 추가 데미지, Moonlight 표식 윈도우 연장). 그다음 **W** 마스터 (보호막 값과 클리어 속도). **E** 는 마지막 — 랭크당 사거리가 늘긴 하지만 중요한 건 Moonlight에서 쿨다운이 리셋된다는 점이지 단순 스케일링이 아니다. **R** 은 6, 11, 16렙에 찍는다.

**룬:** 주룬 **Domination** — **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. 보조 **Sorcery** — **Manaflow Band** 와 **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Magic Resist (poke가 강하면 Health).

## 주요 매치업

- **Lee Sin:** 2렙 인베이드는 피한다 — 그의 Q-Q 후속타가 너의 W 보호막을 뚫는다. 윗쪽 블루 버프에 와드를 박고 봇에서 탑으로 클리어해서 Scuttle에서 패시브 프록을 준비한 채로 만난다.
- **Graves:** 6렙 이후엔 듀얼로 이긴다. fog(와드되지 않은 정글 영역, fog of war)에서 **Q** 로 engage하면 그의 dash 사거리가 표식을 피하지 못한다. Moonlight가 묻은 순간 **E** 는 확정 gap-close (gap-close = 적과의 거리를 좁히는 스킬).
- **Elise:** 파워 스파이크 경쟁. 그녀는 3렙 gank, 너는 6렙 fight를 이긴다. 첫 클리어 템포를 맞추고 시야로 Drake에 hover해서 그녀가 단독으로 못 가져가게 한다.
- **Jarvan IV:** 어려운 매치업. 그의 E-Q 띄우기가 너의 **R** 채널을 캔슬한다. 그가 콤보를 먼저 쓸 때까지 기다린 뒤 E로 트레이드한다. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 를 평소보다 일찍 산다.
- **Kha'Zix:** 두 번째 아이템부터 너에게 유리해지는 호각 매치업. 근접에서 너를 burst한다; 낮은 HP로 isolation jump을 baiting하고, **W** 로 그의 Q를 막은 뒤 E-R 리셋. 와드 컨트롤 없이 자기 정글을 가로지르면 공짜로 isolated jump을 먹는다.

## 파워 스파이크 및 승리 조건

- **3렙 (Q + W + E):** 풀 키트. 첫 클리어가 약 3:15에 끝난다 — 적 정글러보다 먼저 Scuttle Crab으로 러시. 강의 시야와 50 HP 신단이 이후 맵 운영의 토대가 된다.
- **6렙 (첫 Moonfall):** 미드 강 skirmish 파워 (skirmish = 보통 2v2~3v3 정도의 작은 교전, 풀 한타가 아님). 부쉬에서 Q, 표식 대상에게 E, R로 그들의 두 carry를 함께 끌어모으면 — 라이너가 나머지를 burst한다. 정글 풀에서 가장 강한 6렙 pull 효과.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo 완성 (~ 9-11분):** burst 스파이크. squishy(방어가 낮은 챔프, ADC와 대부분의 마법사) 대상에 깔끔한 Q-E 콤보가 적팀이 반응하기 전 HP의 60-70%를 지운다. 두 번째 Drake에서 fight를 강요한다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~ 22-25분):** Magic Resist 아이템이 없는 모든 squishy를 원샷할 수 있는 임계점. Baron이나 Elder Dragon 시야 셋업에서 pick(한타 밖에 고립된 적을 끊어내는 것)을 노린다.

## 흔한 실수

- **Gank 진입 경로에서 와드 안으로 걸어 들어가기.** Diana의 유일한 sneak 도구는 fog. 강 또는 자기 정글로 우회하고, 라이너가 미리 부쉬 와드를 지운 다음에 commit 한다.
- **front line에 R 던지기.** 너의 R은 475 반경 안의 모두를 끌어당긴다 — 탱커를 너의 팀 쪽으로 끌어주는 건 정확히 적이 원하는 그림이다. engage가 전개될 때까지 기다렸다가 back line(back line = 안전한 위치에서 데미지를 넣는 carry들)에 R을 사용한다.
- **Q 표식 없이 쿨마다 E 사용.** Moonlight가 없으면 **E** 는 14초 쿨에 짧은 사거리. 항상 Q를 먼저: 표식 대상에서의 리셋이 Diana를 기동성 있게 느끼게 만드는 핵심이다.
- **첫 클리어에서 세 번째 캠프를 욕심내기.** 적 정글러가 더 빠르면(Graves, Shyvana, Karthus) 3렙 인베이드 경쟁에서 진다. 적 라이너 동선을 cross-map 체크 — 미드가 missing이면 풀 클리어는 함정이다.
- **빠져나갈 길 없는 over-commit gank.** Diana는 E 이후 내장된 escape가 없다. 라인에 슬로우나 follow-up CC가 없으면 적 소환사 주문이 다시 차오르는 순간 너의 engage는 1대3이 된다.

## 고급 팁

**Q-Flash-E-R** 콤보를 한타 시작기로 연습한다. Q가 비행하는 동안 정확히 적중 순간에 앞으로 Flash하면 표식 대상이 네 옆에 나타나고, **E** 가 Moonlight 리셋으로 즉시 이어지며, **R** 이 carry 주변에 뭉친 적팀의 back line 전체를 잡는다. 이 콤보는 이길 권리도 없는 한타를 이기게 만들지만 — 발사체가 떨어진 뒤가 아니라 Q 애니메이션 중간에 Flash를 끊는 머슬 메모리가 필요하다. practice tool에서 멈춰 있는 더미 상대로 입력 순서가 자동이 될 때까지 반복 훈련한다.
