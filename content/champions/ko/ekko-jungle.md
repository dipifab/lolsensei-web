---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "ko"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 패치 16.9 Ekko 정글 완전 공략. 정글 클리어 동선, AP 어쌔신 코어 빌드, 갱킹 패턴, 파워 스파이크 타이밍, 라인전과 한타에서 자주 하는 실수, 그리고 W 안개 시야 활용까지 정리한 가이드."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "같은 대상에 세 번째 타격(평타 또는 스킬)이 적중하면 추가 마법 피해를 입히고, 대상이 챔피언이면 짧은 이동 속도 burst까지 부여한다."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "부메랑 skillshot. 수류탄이 날아가며 적을 슬로우시키고, 다시 Ekko에게 돌아오는 두 번째 타격을 추가로 입힌다. 두 번 다 맞아 위치 잡기가 중요."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "패시브: 저체력 적에게 평타 추가 마법 피해. 액티브: 지연된 원을 깔아 슬로우를 묻히고, Ekko가 진입하면 잠깐 스턴까지 건다."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "짧은 dash 후 다음 평타가 강화돼 대상에게 텔레포트하며 추가 피해. 주력 진입기이자 패시브 세 번째 타격을 발동시키는 트리거."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "약 4초 전의 위치로 Ekko를 되돌리며, 도착 시 광역 마법 피해와 함께 그 시간 동안 받은 피해에 비례한 체력을 회복한다."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "AD 폭딜 상대 (Zed, Talon, Kha'Zix, Rengar) — R 재배치 후 stasis로 킬 윈도우를 끊는다"
    - dd_id: "3135"
      name: "Void Staff"
      against: "우선순위 타겟이 마법 저항 아이템을 사는 순간 (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "힐 누적 조합 상대 (Soraka, Aatrox, Dr. Mundo, Vladimir) — 피해에 Grievous Wounds 적용"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "기동성 캐리 상대 (Vayne, Ezreal, Tristana) — 모든 적중에 슬로우, Q + E가 잘 붙는다"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "후반 MR 누적 전열 상대 — 마법 관통과 처치 후 소량 부활 회복"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "안개에서 W 스턴을 깔고 E로 진입, 체력이 낮으면 R로 fight를 리셋한다. 6레벨 전 갱킹과 오브젝트 스커미시로 초중반 snowball을 굴린다."
  weakness: "초반 정글 클리어가 약하고 사거리도 짧아, 강한 invade 정글러가 3레벨에 처벌한다. R 쿨이 길어 빠지면 Ekko에겐 패닉 버튼이 없다."
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
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "지정형 CC가 없는 원거리 squishy 정글러"
      reason: "Ekko의 W + E setup은 그들이 카이팅 한 사이클을 끝내기 전에 거리를 좁히고, R 리셋 덕분에 상대 팀이 합류해도 all-in이 안전하게 마무리된다."
    - examples: ["master-yi", "shyvana"]
      archetype: "초반이 약한 scaling 스커미셔"
      reason: "3레벨 W + E + Q 갱킹으로 캠프를 도는 그들을 잡아낸다. 한 번의 킬이 14분 안에 캐리를 암살할 골드 리드를 만들어 준다."
    - examples: ["amumu", "zac"]
      archetype: "dash 없는 탱커 진입형 정글러"
      reason: "Ekko의 기동력(E + R rewind)이 그들의 예고된 진입기를 회피하고, AP 폭딜은 MR 낮은 탱커에게 가장 잘 박힌다. 모서리에서 카이팅하며 안개 너머로 그들의 캐리를 녹인다."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "초반 invade가 강한 정글러"
      reason: "Ekko의 첫 클리어가 평균 이하이고 3레벨 듀얼이 약하다. W와 E가 맥스 되기 전에 정글로 들어와 잡고, 현상금까지 챙겨 snowball을 굴린다."
    - examples: ["nocturne"]
      archetype: "글로벌 압박과 spell shield를 가진 정글러"
      reason: "Nocturne의 E는 spell shield라 Ekko의 W 스턴(= 모든 갱킹의 시발점)을 막아낸다. 스턴이 안 들어가면 갱킹은 실패하고, Nocturne의 R은 Ekko의 카운터 갱킹 사거리도 넘어선다."
    - examples: ["galio", "maokai"]
      archetype: "초반에 마법 저항을 누적하는 탱커"
      reason: "초반에 MR을 쌓는 정글러는 Ekko의 중반 spike를 무디게 만든다. Lich Bane 콤보가 전열을 한 방에 못 보내면 그의 snowball 플랜이 멈춘다."
---

## 개요

Ekko는 W 스턴 → E dash → AA + Q의 빠른 콤보로 squishy 캐리를 한 방에 보내는 AP(= Ability Power, 마법 피해를 키우는 스탯) 어쌔신 정글러다. 패시브 **Z-Drive Resonance**는 같은 대상에게 세 번 적중하는 사이클을 추가 마법 피해와 이동 속도 burst로 보상한다 — 그래서 그의 딜링 사이클은 스킬을 난사하는 게 아니라, 세 번을 빠르게 꽂는 데 초점이 맞춰져 있다. **Chronobreak (R)**은 안전망이다. 약 4초 전의 위치로 그를 돌려 보내고 그 시간 동안 받은 피해에 비례해 회복까지 시키므로, fight에 뛰어들어 위험을 감수하다가 channel을 살아남기만 하면 결과를 통째로 되돌릴 수 있다.

게임 플랜: 첫 정글 캠프를 깔끔하게 정리하고, 기동성이 낮은 라인(Lux, Senna, Veigar, 위치 고정형 미드 라이너)에 3레벨 갱킹을 걸고, 자기 라이너가 prio(= 라인을 밀어두고 CS 손해 없이 동선을 짤 수 있는 우선권)를 잡은 쪽의 Scuttle(= 강의 게 — 잡으면 시야와 강에서의 작은 이동 속도 buff 제공)을 강제하고, 두 번째 드래곤 주변 스커미시(= 1대1 또는 2대2의 작은 교전, 풀 한타가 아님)에서 snowball(= 작은 초반 우위를 훨씬 큰 우위로 굴리기)을 굴린다. Ekko는 시간이 갈수록 강해지는 scaling 챔피언이 아니다 — 25분에 킬 없이 도달하면 적 ADC가 2코어를 마치고 너의 한 방 컷이 사라진다.

## 추천 빌드

**시작 아이템:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (AP 친화 정글 펫 — 갱킹 시 적 챔피언에 on-hit 화상 피해)과 **Smite** (모든 정글러가 드는 소환사 주문 — 단일 대상 즉발 burst 공격으로 캠프 정리는 물론 Drake와 Baron 같은 오브젝트를 적팀에서 스틸할 때도 사용).

**코어 아이템 (구매 순서):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 첫 AP 스파이크. on-cast 추가 피해와 마나 sustain 덕분에 Q + W + E 사이클이 E의 평타가 닿기도 전에 대상을 깎아낸다.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(= 적 MR의 일정 수치를 무시). squishy 캐리는 보통 베이스 MR이 ~30이라 고정 관통이 곧바로 추가 피해로 환산된다.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade(= 스킬 직후의 평타가 큰 추가 마법 피해). Ekko의 E는 이미 다음 평타를 강화하므로 Lich Bane이 그 위에 누적된다 — 결국 E dash를 한 방 컷으로 바꾸는 핵심 아이템.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 추가 burst(= 1-2초 안에 큰 피해). HP 임계 패시브(= 일정 체력 이하에서 발동)가 R 리셋 후 마무리 타이밍과 정확히 맞아떨어진다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 배수기, 빌드에서 천장이 가장 높은 슬롯.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — AD 어쌔신(Zed, Talon, Kha'Zix, Rengar) 상대. stasis(= Ekko가 2.5초간 무적이지만 행동 불가)로 쿨다운을 벌고, R과 묶으면 어떤 AD all-in도 살아남는다.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 우선순위 타겟이 MR 아이템(Mercury's Treads, Maw of Malmortius, Spectre's Cowl)을 올리는 순간. 퍼센트 마법 관통은 적이 MR을 쌓을수록 강해진다.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 힐 누적 조합(Soraka, Aatrox, Dr. Mundo, Vladimir) 상대. 피해에 Grievous Wounds(= 대상 회복량을 절반으로 깎는 디버프)가 적용된다.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 기동성 원거리 캐리(Vayne, Ezreal, Tristana) 상대. 모든 스킬 적중에 슬로우가 묻어 Q + E가 그대로 박힌다.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 후반 MR 누적 전열 상대 시 Shadowflame 대체. 마법 관통에 처치 후 소량 부활 회복까지 붙는다.

**신발:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**가 기본. 팀이 R을 재진입 도구(= 궁이 빨리 돌아 두 번째 한타를 뒤집는 수단)로 더 자주 돌릴 필요가 있다면 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**도 허용된다.

**스킬 마스터 순서:** **Q** 선마(웨이브 클리어 및 주력 견제), **E** 후마(dash 피해), **W**는 마지막. **R**은 6, 11, 16레벨에 한 포인트씩. 1레벨에 가장 안전한 클리어를 위해 **Q**, 2레벨 **E**, 3레벨 **W**.

**룬:** 주문 트리 **Domination** (어쌔신 트리 — 고립된 표적을 잡는 보상 스탯) + **Electrocute** (3초 안에 같은 챔피언에 서로 다른 세 가지 데미지 소스를 묻히면 다음 적중에 burst 추가 — Ekko의 W + E + Q 체인이 깔끔하게 발동시킨다), **Sudden Impact** (dash나 은신 후 4초간 추가 마법 관통), **Sixth Sense** (긴 쿨다운으로 근처 적 와드를 자동 감지 — 정글 동선을 위한 시야 압박), **Ultimate Hunter** (서로 다른 챔피언 처치마다 R 쿨다운 감소). 보조 트리 **Sorcery**의 **Manaflow Band** (스킬 적중 시 마나 환급으로 Ekko의 적은 마나 풀을 보완), **Transcendence** (어빌리티 가속 — 모든 스킬 회전을 빠르게 만들어 키트 전체를 키운다).

## 주요 매치업

- **Lee Sin:** 강한 초반 invade(= 아이템이 갖춰지기 전에 정글 안으로 들어와 죽이러 오는 정글러). 자신의 buff(= 일시적인 능력치 boost를 주는 작은 캠프, 블루와 레드)에 시야를 박는다. 4레벨 이전 fight는 피한다 — 초반 듀얼은 그쪽이 위다.
- **Karthus:** 거저 잡는 매치업. R로 맵 전체에 피해를 주지만 기동기는 0이다 — 발 밑에 W, E로 진입, Q + AA에 한 사이클(= 모든 스킬을 한 번 다 쓰는 흐름)에 죽는다. 갱킹에 commit한 직후엔 그의 캠프를 counter-jungle(= 적 정글 캠프 빼앗기)한다.
- **Master Yi:** scaling 라이벌. 20분 전에 잡거나, 후반 한타에서 데미지로 밀린다는 사실을 받아들여라. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** spike에서 fight를 강제하고, 그가 캠프 도는 동안 봇 라인을 dive한다.
- **Sejuani:** 까다로운 매치업. R이 point-and-click(= 조준이 필요 없고 대상에게 자동 적중)이라 E dash 도중에 묶인다. 그녀가 R을 다른 사람에게 쓸 때까지 기다렸다 commit하라. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 평소보다 더 일찍 사라.
- **Rammus:** 1대1은 피한다. 가시 패시브가 평타 피해 일부를 반사한다. 너의 데미지는 주로 마법 피해라 Rammus의 가시에는 강한 편이지만, 그의 W 스테로이드(= 일시적인 방어력·반사 배수기)가 Lich Bane 평타까지 무디게 만든다. 정글 반대편을 farm하고, 합류는 팀과만 한다.

## 파워 스파이크 및 승리 조건

파워 스파이크는 새 스킬이나 새 아이템이 켜지면서 챔피언이 1분 전보다 단숨에 훨씬 강해지는 순간이다.

- **3레벨:** 첫 **W** + **E** + **Q** 콤보 해금. 드디어 6레벨 전(= 궁 전) 라인 갱킹이 가능해진다 — 안개(= 시야 밖의 어두운 지대, 부쉬나 벽 뒤)에 W를 미리 깔고, 적이 밟아 스턴이 들어가는 순간 E로 진입, 빠지면서 Q. Ekko가 가진 가장 강한 6레벨 전 갱킹 패턴이다.
- **6레벨:** **Chronobreak (R)** 해금. 이제 모든 다이브(다이브 = 타워 아래로 들어가 저체력 표적을 잡는 행위)가 회수 가능해진다 — 타워 평타를 맞고 표적을 잡은 뒤 R로 안전한 위치로 돌아온다. 즉시 fight나 드래곤을 강제한다.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~10-12분):** 첫 진짜 데미지 spike. Q 한 방에 squishy를 갉고, 풀 콤보로 60% HP 이하 적을 그대로 보낸다. 사이드에서 pick(pick = 위치를 잘못 잡은 고립된 적 처치)을 노린다.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 완성 (~16-18분):** 진짜 그 spike. 강화된 E 평타 + Lich Bane Spellblade가 단 한 번의 dash로 ADC HP의 ~50%를 깎는다. 드래곤·바론 주위로 모이고 — 고립된 적은 한 콤보에 사라진다.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 완성 (~24-28분):** MR을 쌓은 표적조차 풀 burst에 무너진다. 적 ADC가 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png)나 Quicksilver Sash를 안 샀다면, R 리셋 한 번이 후방 라인 무료 킬이 된다.

## 흔한 실수

- **W 없이 3레벨 전 갱킹.** W 스턴 없는 Ekko의 갱킹은 그냥 느린 E dash다 — kite(= 거리를 유지하며 뒤로 빠지면서 공격) 당하기 쉽다. 라인에 발을 들이기 2초 전에 안개에 W를 미리 깐다 — 지연 스턴이 적이 dash에 반응하는 순간 정확히 들어간다.
- **HP 떨어지자마자 R 누르기.** Chronobreak는 4초 전 위치로 되돌린다. 첫 평타 받자마자 ult를 쓰면, 도망치고 싶었던 fight 한복판으로 돌아간다. 기다려라 — R channel(= 활성화 전 시전 시간)에 데미지를 흡수해야 마지막 회복량이 커지고, 도착 지점이 정말 더 안전해진다.
- **정글 웨이브 클리어용 Q 난사.** Q는 마나 소모가 크고, 부메랑의 복귀 타격이 더 큰 데미지 tick이다. 캠프를 지나쳐 걸어서 복귀 시 패키지를 두 번 모두 맞히게 한다. 가만히 서서 Q만 쏘면 두 번째 hit를 버리는 셈.
- **prio 없이 드래곤 강행.** Ekko의 smite-fight(= 두 정글러가 경쟁 오브젝트에 동시에 Smite를 commit하는 순간)는 평범한 수준 — 채널 도중 끊기면 R이 취소되기 때문이다. 라이너가 prio(= 라인을 밀어 자유롭게 동선을 짤 수 있는 상태)를 못 잡았다면 드래곤은 양보하고 시야로 farm한다.
- **스커미시에서 세 번째 hit 패시브 무시.** Z-Drive Resonance는 같은 대상에 세 번 hit를 쌓을 때 trade 데미지를 두 배로 만든다. 견제용으로 웨이브에 Q를 던지면 그 stack을 미니언에 버리는 꼴이다. Q는 굳이 정리할 필요 없는 크립이 아니라 챔피언 trade에 아껴라.

## 고급 팁

**Parallel Convergence (W)**를 스턴 setup뿐 아니라 선제 시야 도구로도 써라. W를 시전하면 활성화 3.5초 전에 원이 바닥에 깔리고, 그 windup 동안 누가 그 영역을 지나가는지 보인다 — 적이 반드시 지나야 하는 좁은 통로(= chokepoint)나 드래곤 둥지 뒤편을 무료 안개 정찰처럼 쓸 수 있다. 프로들은 이 트릭으로 강을 건너는 적 정글러를 정찰한 뒤, 스턴 준비 상태로 갱킹을 commit하거나 commit 없이 빠지는 식으로 활용한다. 이 스킬이 곧 pick 도구이자 ward(= 일정 영역에 시야를 주는 작은 오브젝트)가 되는 셈이다.
