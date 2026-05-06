---
title: "Gwen Jungle Build & Guide — Patch 16.9"
slug: "gwen-jungle"
language: "ko"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Gwen 정글 완벽 공략. 첫 클리어 동선, Scuttle과 Drake 타이밍, 갱킹 루트, AP 브루저 빌드, 핵심 매치업, 파워 스파이크, 초보가 흔히 하는 실수까지 한 페이지에 정리한 실전 가이드입니다."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "평타가 대상 최대 체력 비례 추가 마법 피해를 입힙니다. 챔피언에게 가한 피해의 일부만큼 Gwen이 체력을 회복합니다."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "원뿔 모양으로 최대 6번 가위질. 중앙 원뿔은 고정 피해(true damage)를 입히고 매 타격마다 패시브를 재적용 — 정글 캠프 클리어와 탱커 처리 핵심기."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "4초 동안 안개 지대를 생성. 안개 밖의 적은 Gwen을 지정할 수 없고, 안개 안으로 들어온 적만 공격할 수 있습니다. 방어 리셋 + 갱킹 셋업."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "짧은 돌진. 공격 속도, 사거리, 평타 적중 시 AP 추가 효과를 몇 초간 부여. 챔피언 적중 시 쿨다운 일부 환급 — 갱킹 진입기."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "감속과 패시브를 적용하는 바늘 일제 사격. 최대 2회 추가 시전 가능, 각 사격마다 피해가 점점 증가합니다."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "AD 암살자/다이버 상대 (Zed, Khazix, Rengar) — 2.5초 정지가 W 쿨다운을 가리고 버스트 윈도우를 차단"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "탱커/브루저 4명 이상 조합 상대 — Riftmaker를 대체해 1분부터 최대 체력 비례 화상 피해 유지"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "단일 대상 마법 CC 상대 (Lissandra R, Malzahar 봉쇄, Veigar 기절)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "카이팅 조합 상대 (Vayne, Ezreal) — 추가 스킬 가속과 이동 속도로 기동성 캐리에 붙기"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "3-30분 클리어, 16분쯤 Riftmaker 완성, 6레벨 이후 W 안개 셋업으로 오브젝트 한타 강제. 한타에서는 4초 안개 창 안에서 평타 적중 Q 고정 피해로 프론트라인을 녹입니다."
  weakness: "1-3레벨 카정 표적 (버스트 없음, 돌진 1회뿐). Lee Sin이나 Elise처럼 초반 공격적인 정글러가 첫 클리어 타이밍을 깨뜨리는 카정에 약합니다."
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
    primary_rationale: "Precision 주룬: Conqueror는 긴 캠프 클리어와 Q + 평타 교전에서 스택을 쌓아 적응형 피해와 회복을 제공. Triumph는 멀티킬 갱을 보상하고 Legend: Alacrity는 E 평타 윈도우를 강화하며 Last Stand는 저체력에서 추가 피해."
    secondary_rationale: "Resolve 보조룬: Second Wind는 캠프 사이와 카정 후 체력을 회복, Overgrowth는 후반에 W 안개 한타에서 빛나는 Gwen에게 순수 체력을 누적시킵니다."
    secondary_alternative: "포크 위주 AP 미드 상대로는 Resolve를 Sorcery로 교체, Manaflow Band(Q 클리어용 마나 유지)와 Transcendence(E 환급 증가와 R 쿨다운 단축을 위한 추가 스킬 가속) 채택."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "단일 대상 피해가 부족한 탱커 정글러"
      reason: "Q는 방어구를 무시하는 최대 체력 비례 고정 피해를 적용하며, 탱커는 거대한 체력 풀을 가지지만 W 안개 안 1v1에서 3-4번의 Q로 갈려나갑니다."
    - examples: ["master-yi", "shaco"]
      archetype: "이탈기 없는 물몸 암살자"
      reason: "W 안개가 올인 중 그들의 타게팅을 차단합니다. 들어와서 안개 안 Q 고정 피해 원뿔을 맞고, 돌진을 이미 써버려 두 번째 도주기가 없습니다."
    - examples: ["kha-zix", "rengar"]
      archetype: "버스트 윈도우 의존 암살자"
      reason: "그들의 버스트 콤보는 1.5초 안에 도착하지만 W 안개가 도약 중간에 그들을 사거리 밖으로 밀어냅니다. 버스트 창을 놓치면 Gwen이 장기 트레이드를 쉽게 이깁니다."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "초반 카정 정글러"
      reason: "Gwen은 1-3레벨에 버스트가 없고 첫 클리어가 느립니다. 카정 정글러는 캠프에 들어와 패시브 스택이 쌓이기 전에 그녀를 처치합니다."
    - examples: ["kayn", "viego"]
      archetype: "기동성 좋은 후반 캐리"
      reason: "둘 다 W 안개 사거리를 무시하는 기동기(Kayn 벽 통과, Viego 평타 적중 돌진)를 가지고 있어, 후반 교전에서 Gwen의 템포를 추월합니다."
    - examples: ["kindred", "graves"]
      archetype: "원거리 카이팅 정글러"
      reason: "Kindred와 Graves는 W 안개 보호 사거리 밖에서 평타를 칩니다. Gwen은 그들의 사거리에 들어가려면 E를 써야 하고, 그들은 자신의 이동 도구로 그 돌진을 카이팅합니다."
---

## 개요

Gwen은 AP 브루저 정글러입니다 — Ability Power(AP 스탯)에 비례해 강해지는 근접 챔피언으로, 가까이서 몇 대 맞아주면서 암살자처럼 2초 만에 적을 녹이는 게 아니라 긴 싸움을 이기는 스타일입니다. "스커미셔(skirmisher)"로서 그녀의 게임은 장기 듀얼: **고정 피해(true damage, 방어구와 마법 저항을 모두 무시하는 피해)**로 탱커와 브루저를 갈아내고, 패시브로 한타 중 체력을 회복하며, 챔피언을 때리면 돌진 쿨다운이 리셋됩니다. **W 안개**가 키트의 시그니처: 안개 밖 적이 그녀를 지정할 수 없게 만드는 4초 지대 — 정글 풀에서 유일무이한 갱킹 및 카운터 인게이지 도구입니다.

게임 플랜은 이렇습니다: 깨끗한 첫 클리어 완료, 강가 게(Scuttle, 강에 있는 작은 몬스터로 처치 시 시야와 이동 속도 버프 제공) 컨테스트, 4-5레벨쯤 W 안개로 기동성 낮은 라인 갱킹, 그 후 5-7분의 첫 드레이크에서 스노우볼링 — 작은 초반 우위를 훨씬 큰 우위로 굴리기. Gwen은 중후반 챔피언입니다: 첫 3분이 가장 약하므로 팀이 모르는 사이 적 레드 버프(평타에 도트 화염 효과를 주는 작은 캠프) 근처에서 잡히지 않도록 주의하세요.

## 추천 빌드

**시작 아이템:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (AP 친화 정글 펫 — 갱킹 중 평타 적중 피해로 적 챔피언을 화상 시킴) + **Smite** (모든 정글러가 가져가는 소환사 주문 — 단일 대상 즉발 피해, 몬스터를 빨리 자르고 Drake나 Baron 같은 오브젝트를 스틸할 때 사용).

**핵심 아이템 (순서):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — 정글 시작 아이템 퀘스트 업그레이드. 3-4분쯤 자동 진화, 펫의 평타 적중 피해가 평타에 마법 피해를 더해 Gwen의 AP 계수와 맞물립니다.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 메인 아이템. 전투 시작 2초 후 피해의 일부가 고정 피해로 전환되고("Void Corruption" 패시브) "전능흡혈(omnivamp)"을 얻어 입힌 모든 피해(스킬과 평타 모두)의 일부만큼 체력을 회복합니다. 긴 싸움을 위해 만들어진 아이템 — Gwen이 정확히 원하는 것.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 고정 마법 관통(= 적 마법 저항의 일정량 무시). 물몸(squishies, 방어력이 낮은 챔피언, 보통 적 캐리)에게 더 큰 피해.
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 공격 속도 + AP + 평타마다 추가 마법 피해를 주는 패시브. **E**(Skip 'n Slash의 평타 적중 윈도우, 평타마다 AP 기반 마법 피해 적용)와 결합하면 긴 싸움에서 지속 DPS 포탑이 됩니다.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 후반 AP 곱연산. Gwen을 "탱키 DPS"에서 진짜 캐리로 변신시킵니다.

**상황 아이템:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — AD 암살자/다이버 상대 (Zed, Kha'Zix, Rengar — 다이버는 백라인 캐리에게 뛰어드는 챔피언). 액티브로 2.5초 정지(지정 불가지만 행동도 불가) — 그들의 버스트 윈도우를 깨고 W 쿨다운을 리셋할 만큼 충분한 시간.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 탱커/브루저 4명 이상 팀 상대. 매 한타 시작부터 최대 체력 비례 영구 화상이 필요할 때 Riftmaker를 1코어로 대체.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 단일 대상 마법 CC(= "군중 제어": 기절, 속박, 매혹 등 챔피언을 묶는 모든 효과) 상대. Lissandra **R**, Malzahar 봉쇄, Veigar 기절. 방패가 적 스킬 1회를 완전히 차단합니다.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 카이팅 조합 상대 (Vayne, Ezreal). 추가 스킬 가속과 이동 속도로 기동성 캐리에 붙어 있기.

**신발:** 기본 Sorcerer's Shoes. 적 팀에 AD 위협이 3명 이상이면 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**. CC가 많을 때(기절이나 띄우기 3개 이상) ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**.

**스킬 선마:** **Q**부터 마스터(고정 피해와 AP 계수 — 핵심 캠프 클리어), **E**를 두 번째로 마스터(쿨다운과 평타 적중 피해), **W**는 마지막. **R**은 6, 11, 16레벨에 찍기. 1레벨에 **Q**로 시작(Q 원뿔이 작은 몬스터 무리를 한 번에 침)하여 가장 안전한 첫 클리어, 2레벨에 **E**로 캠프 간 기동성, 그 후 3레벨에 **W**로 Scuttle 전 안전 확보.

**룬:** 주룬 **Precision** + **Conqueror**(긴 싸움에서 스택을 쌓아 적응형 피해와 회복을 주는 핵심 룬 — Gwen의 지속 DPS 플레이스타일에 완벽), **Triumph**, **Legend: Alacrity**, **Last Stand**. 보조룬 **Resolve** + **Second Wind**, **Overgrowth**. 스탯 파편: Adaptive Force, Adaptive Force, Health Scaling.

## 주요 매치업

- **Lee Sin:** 초반 어려움, 후반 호각. 2-3레벨에 Gwen이 W가 없을 때 강력하게 카정합니다. 본인 스폰의 반대편 캠프부터 시작하세요(블루 사이드면 레드 버프, 레드 사이드면 블루 버프) — 그의 일반적인 카정 경로에서 멀어집니다. 6레벨 이후 W 안개 안 1v1에서는 그를 후반 스케일링으로 압도합니다.
- **Master Yi:** 무료 스케일링 매치업. 그의 Alpha Strike(**Q**, 잠시 지정 불가가 되는 다중 돌진)는 W 안개 패시브를 무시하지 못합니다 — 안개 밖에서는 여전히 차단됩니다. 6레벨에 드레이크 근처에서 한타를 강제하고, Highlander(그의 **R**, 막대한 공격 속도와 이동 속도 부여)를 그가 켜면 W를 깔고 듀얼 동안 Q를 스팸하세요.
- **Sejuani:** 어려운 매치업. 그녀의 **R**은 지정형(point-and-click, = 조준 불필요, 스킬이 자동으로 대상에 걸림)으로 **E** 돌진 중 당신을 얼립니다. 그녀가 **R**을 다른 사람에게 쓸 때를 기다린 다음 W로 들어가세요. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**를 평소보다 일찍 구매.
- **Kha'Zix:** 호각-유리. 그는 "고립 피해(isolation damage)" — 대상 주변에 아군이 없을 때 추가 피해 — 를 진화시켜 캐리를 사냥하려 합니다. W 안개가 도약(Q 돌진) 중 그의 타게팅을 깨뜨립니다. 그가 **R** 은신 + Q 버스트를 시전할 때, 자신이 아니라 캐리에게 W를 깔면 피해가 무효화됩니다.
- **Kindred:** 나쁜 매치업. 그녀는 **Q** 돌진으로 당신의 돌진을 카이팅(= 거리를 유지하면서 뒤로 빠지며 공격)하고, 그녀의 궁극기 지역(Lamb's Respite, 안에서는 아군이 죽지 않는 원형 지대)이 당신이 다이브(= 포탑 아래로 추격)하려는 모든 팀원을 살립니다. 그녀의 카정 사거리를 피하고, 그녀의 **R** 쿨다운 시간에 오브젝트를 가져가며, 교전에서는 탑에게 도움을 요청하세요.

## 파워 스파이크 및 승리 조건

- **3레벨:** 첫 **W** 해제. 이제 라인 갱킹 가능 — 라이너에게 W를 깔고 E로 진입, 안개 안에서 Q + 평타. 안개가 4초 동안 당신에 대한 깨끗한 타게팅을 차단 — 정글에서 가장 긴 갱킹 보호 윈도우.
- **6레벨:** 첫 **R** 해제. 바늘 일제 사격이 적중한 모든 챔피언에게 패시브의 최대 체력 비례 마법 피해를 적용하고, 감속이 평타를 이어줍니다. 8-9분쯤 드레이크 한타나 카운터 갱킹을 강제 — 키트가 첫 주요 스파이크를 맞이합니다.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 16-18분):** 전능흡혈 + 고정 피해 스파이크. 이제 대부분의 물몸을 단독 다이브할 수 있고, W가 켜져 있으면 1v2 갱킹도 살아남습니다.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 완성 (~ 24-26분):** DPS 스파이크. **E** 활성 시 평타가 훨씬 빠르게 발사되고 평타 적중 AP를 적용 — 드레이크/Baron 근처 모든 한타에 진입해 팀이 당신을 보호하게 할 타이밍.
- **3코어 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ 30분+):** 캐리 페이즈. 평타가 적 프론트라인의 25%+ 체력을 한 방에 갈아냅니다. 팀이 당신을 보호("필링", 적을 떼어내는 것)하는 모든 한타가 승리로 끝납니다.

## 흔한 실수

- **적 정글러와 같은 쪽에서 첫 클리어 시작.** Gwen의 첫 클리어는 느리고 초반 체력이 낮습니다 — 두 번째 버프에서 카정당하면 보통 점멸을 잃거나 죽습니다. 적 경로를 정찰할 때까지 적 스폰의 반대편에서 시작하세요.
- **갱킹에서 W를 너무 일찍 켜기.** 안개는 4초 윈도우 — 라이너가 한타에 묶이기 전에 깔면 적이 그냥 걸어 나가고 남는 게 없습니다. 먼저 **E** + 평타를 적중시키고, 적이 반응하기 시작할 때 **W**를 까세요.
- **원뿔 밖에서 캠프에 Q 시전.** **Q**의 피해 지대는 원뿔 중앙(고정 피해 틱)입니다. 캠프가 호의 안쪽 30도 안에 들어오도록 위치 — 첫 시전 DPS가 3배가 되고 ~3초 빨리 클리어합니다.
- **R 없이 오브젝트 강타 싸움.** **R**이 없을 때 Gwen의 강타 싸움(스마이트 플립)은 평범합니다. 궁극기가 켜져 있고 적 정글러용 바늘 일제 사격을 최소 1회 남겨둘 때만 오브젝트를 강제하세요.
- **R 사거리 밖에서 평타.** **R**이 켜졌을 때 총 3번 발사 가능. 한타 가장자리 1000 단위 안에 머물러 저체력 대상에게 항상 **R**을 재시전할 수 있게 — 죽음으로 뛰어들지 마세요.

## 고급 팁

갱킹 중 스킬샷(= 직선이나 범위로 직접 조준해야 하는 스킬)을 페이크하기 위해 **W** 안개 사용: 적 라이너가 장거리 기절이나 속박(Lissandra **E**, Morgana **Q**, Veigar **E**)으로 당신의 **E** 돌진에 반응하려 할 때, 사거리 진입 직후 당신과 그 사이의 경로에 **W**를 까세요. 안개가 외부에서 당신을 지정할 수 없게 만들기 때문에 — 그들은 종종 시전을 헛쳐서 당신은 4초간 CC 없이 피해를 입힙니다. 핵심은 시전 모션(스킬이 발사되기 전 차징 프레임)에 맞춰 **W**를 타이밍하는 것이지, 이미 떨어진 후가 아닙니다.
