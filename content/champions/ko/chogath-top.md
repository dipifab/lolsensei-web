---
title: "Cho'Gath Top Build & Guide — Patch 16.9"
slug: "chogath-top"
language: "ko"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 패치 16.9 Cho'Gath 탑 라인 완벽 가이드. HP를 쌓는 tank-mage 빌드, Grasp 룬 선택, 주요 매치업 대처법, 파워 스파이크 타이밍, 라인전 흔한 실수와 해결책, 마무리 팁까지 한 페이지에 정리한 실전 공략."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "유닛을 처치하면 HP와 마나가 회복된다. 챔피언 takedown은 훨씬 큰 양을 돌려준다. 모든 last-hit (미니언을 마무리하는 타격)에서 무료 라인 sustain (교전 사이의 HP/마나 회복) 확보."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "사거리 950의 직선 skillshot (조준형 스킬, 피할 수 있다): 적을 띄우고, 슬로우, 마법 피해. 안전 거리에서의 poke (소모전)와 engage (교전 시작) 도구 — 선딜이 길어 타겟을 예측해 쏴야 한다."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "사거리 300의 전방 부채꼴: 마법 피해와 약 2.2초 침묵 (스킬 사용을 막음). Q 띄우기 후 melee 타겟에게 이어 사용한다."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "토글 on-hit (다음 평타에 추가 효과). 다음 평타 3회가 타겟의 최대 HP에 비례하는 마법 피해를 입히고 슬로우. tank 상대 주력 DPS이자 waveclear (미니언 웨이브 정리)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "단일 대상 true damage (방어구·마법 저항 무시) execute (HP 임계값 이하 처치). 처치 시 영구 스택: 최대 HP 증가, 모델 크기도 커짐. 미니언 6스택 한도, 챔피언은 무한."
      dd_spell_id: "Feast"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "마법 피해가 많거나 CC 연계가 반복될 때 (Malphite R, Sylas, Lissandra) — 첫 귀환 전에 Plated Steelcaps에서 교체"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "AP 위협이 2명 이상일 때 (AP 탑 + Diana/Ekko 같은 AP 정글) — MR 누적 + 이속으로 kiter 추격"
    - dd_id: "3075"
      name: "Thornmail"
      against: "힐 받는 평타 carry 상대 (Vayne + Soraka, Master Yi + lifesteal) — Grievous Wounds (회복 50% 감소) 적용"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "Feast 5스택 이상일 때 6번째 아이템 — Warmog's Heart HP 임계값이 사소해지고 regen으로 귀환을 스킵"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "미니언을 쌓는 mage 상대 (Heimerdinger, Malzahar)와 뭉치는 AP 팀 — 오라가 스택 정리 + frontline 갉아먹음"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Cannon과 처치로 Feast를 쌓아 HP를 부풀린다. 5+스택 + Riftmaker + Spirit Visage 단계에서 두 번째 tank로 진입해 focus (네가 표적이 됨)를 흡수하고, Q 띄우기 → W 침묵으로 carry (주 딜러)를 끊어낸다."
  weakness: "dash 없음, Flash 외 escape 없음. 사거리 950 Q를 kite (사거리 밖에서 때림)하는 ranged 탑에게 outrange 당함. 스택 쌓기 전에는 ignite + heal reduction에 취약 — Feast가 farm을 요구하므로 라인 패배는 snowball로 이어진다."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve 트리: Grasp는 melee에서 4초마다 발동 (proc = 패시브 트리거)되어 회복과 영구 HP를 누적 — Cho'Gath의 HP+AP 곡선과 맞아떨어진다. Demolish는 라인을 잃어도 타워를 가져가고, Second Wind는 poke 피해를 회복하며, Overgrowth는 미니언 8마리마다 HP를 쌓는다."
    secondary_rationale: "Sorcery 보조: Manaflow Band가 긴 라인전 동안 Q poke와 E waveclear의 마나를 받쳐주고, Transcendence는 ability haste (쿨다운 단축)를 올려 거의 매 웨이브마다 Q를 다시 사용해 띄우기 기회를 노릴 수 있게 한다."
    secondary_alternative: "ranged poke나 AP burst 탑 (Vladimir, Teemo, Kennen) 상대로는 Sorcery를 Inspiration으로 교체: Biscuit Delivery (6레벨 전 무료 HP·마나 sustain)와 Time Warp Tonic (포션 사용 시 즉시 회복으로 라인 유지)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "선딜이 긴 melee bruiser (HP+딜러)"
      reason: "Q 띄우기는 그들의 commit 애니메이션을 끊는다 (Darius 끌기, Garen E 회전, Sett W 시전). Carnivore와 Riftmaker의 omnivamp (모든 시전마다 lifesteal 유사 회복)가 trade를 이긴다. Feast 임계값에서는 R로 30% HP의 적을 지운다."
    - examples: ["riven", "camille", "irelia"]
      archetype: "기동성 melee diver (빠르게 달려든다)"
      reason: "Q가 dash 도중에 띄워 콤보를 끊는다. W 침묵이 바로 이어져 두 번째 dash를 막는다. 그들이 low로 빠지면 R이 처치한다 — Flash와 깨끗한 read 없이는 all-in (전력 commit)이 불가능하다."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "hard CC (스턴/속박) 없는 melee mage"
      reason: "Q 윈드업을 끊을 즉발 lockdown이 없다. 안전한 거리에서 poke를 outrange하고, all-in 중 W 침묵이 ability 의존 키트를 봉쇄한다."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "poke + disengage (도주 수단)가 있는 ranged 탑"
      reason: "Q 사거리 950 밖에 서 있다가, 네가 다가오면 물러나며 6레벨 전에 절반 HP까지 깎는다. dash로 거리를 좁힐 수도 없고 Carnivore 외 sustain도 없어, 매 사이클마다 라인 prio (웨이브 통제권)를 잃는다."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "지속 딜이 강한 기동성 melee duelist"
      reason: "Fiora는 W 침묵을 parry (방어)하고, Jax E는 Q 띄우기를 회피하며, Tryndamere는 ult를 먼저 켜면 R을 무시한다. 그들의 지속 딜이 Cho의 느린 Q 윈드업을 out-trade하고, Feast scaling은 너무 늦게 도달해 의미가 없다."
    - examples: ["gnar", "kayle"]
      archetype: "후반 scaler (초반 약함, 30분에 괴물)"
      reason: "Gnar mini form은 Q 사거리 밖에서 평타하고, Kayle은 한타에서 너를 지우는 true damage 평타로 ramp한다. Cho가 Feast를 쌓아도 둘은 long game을 이긴다 — 30분쯤이면 네 HP 풀을 out-damage한다."
---

## 개요

Cho'Gath은 tank와 mage의 hybrid다. HP와 ability power를 동시에 주는 아이템을 사며, 궁극기 **Feast**로 영구 최대 HP를 누적한다. 키트는 장거리 띄우기 (**Q**)와 melee 침묵 (**W**)을 결합해, 라인전에서 melee bruiser의 engage ability를 끊고 한타에서 적 carry를 lockdown할 수 있게 해준다. 빌드와 가장 잘 맞는 데미지는 **Vorpal Spikes (E)** 에서 나온다 — 타겟의 최대 HP에 비례하는 마법 피해를 더하므로, squishy보다 tank나 fed bruiser에게 더 큰 피해를 입힌다.

게임 플랜은 단순하지만 인내가 필요하다. 미니언 뒤에서 안전하게 farm하고, **Q** 띄우기로 trade를 셋업하거나 gank를 peel하며, low-HP 미니언에 **R**을 사용할 기회를 **절대** 놓치지 마라 (챔피언 스택은 영구이고, R로 처치한 cannon 한 마리당 남은 게임 동안 +120 최대 HP). 5+스택과 HP+AP 아이템 두 개를 갖추면, 네 carry보다 먼저 적이 잘라야 하는 두 번째 tank가 된다 — 그게 한타를 이기는 방식이다.

## 추천 빌드

**시작 아이템:** Doran's Shield + Health Potion. Doran's Shield는 80 HP와 피격 후 회복을 주며, Carnivore의 last-hit 회복과 시너지를 낸다.

**코어 아이템 (구매 순서):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 첫 완성 아이템. HP + AP + omnivamp (네가 입히는 모든 피해의 일정 비율로 회복, 스킬과 평타 모두). 데미지 ramp가 전투 3초 후 true damage로 변환 — 긴 trade에 완벽하다.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — AD 탑 상대 기본 신발. 평타 데미지를 12% 감소시킨다.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 두 번째 데미지 아이템. HP + AP + 시간에 따라 최대 HP의 일정 비율 마법 피해를 입히는 화상 패시브. Q 슬로우와 W 침묵이 적을 사거리 안에 묶어둬 자연스럽게 시너지가 난다.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + 마법 저항 + 회복·실드 25% 증폭. Carnivore 회복, Riftmaker omnivamp, 아군에게서 받는 모든 실드를 곱해준다.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + 챔피언을 맞히는 모든 스킬에 슬로우 적용. Q 슬로우 위에 누적되며, W 침묵이 끝나기 전에 타겟이 kite로 도망갈 수 없게 한다.

**상황별 아이템:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 마법 피해가 많거나 CC 연계가 반복될 때. 첫 귀환 전에 Plated Steelcaps에서 교체.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — AP 위협이 2명 이상인 팀 상대. 마법 저항을 누적하고 이속을 더해 kiter를 추격한다.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 평타 carry + 힐 조합 상대 (Vayne + Soraka, Master Yi + Aatrox). 피격마다 Grievous Wounds (회복 50% 감소) 적용.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — Feast 5+스택일 때 여섯 번째 아이템. 스택을 쌓으면 Warmog's Heart HP 임계값이 사소해지고, regen이 귀환 없이 풀 HP로 roam하게 해준다.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 미니언을 쌓는 mage (Heimerdinger, Malzahar)와 뭉치는 AP 팀 상대. 오라 패시브가 쌓인 미니언을 정리하고 적 frontline을 갉아먹는다.

**신발:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**가 AD 탑 상대 기본, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**는 AP 탑이나 CC가 많을 때.

**스킬 마스터 순서:** **Q** 선마 (슬로우, 띄우기, 주력 trade 도구), **E** 후마 (waveclear와 tank를 깎는 on-hit), **W** 마지막 (침묵은 강력하지만 랭크당 데미지 증가량은 작다). **R**은 6, 11, 16레벨에 한 포인트씩.

**룬:** 주문 트리 **Resolve**에 **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. 보조 **Sorcery**에 **Manaflow Band**와 **Transcendence**. ranged poke 탑 상대로는 Sorcery를 **Inspiration**으로 교체: **Biscuit Delivery**와 **Time Warp Tonic**.

## 주요 매치업

- **Darius:** 6레벨 전엔 그의 W 패시브 (5스택 출혈)를 존중한다. 끌기를 연결하기 전에 Q를 박고 빠진다. 6 이후 Feast가 약 30% HP에서 처치 — commit 임계값이 그 지점이다.
- **Sett:** W의 윈드업 프레임 (주황색 주먹)에 Q를 맞춘다. W에 맞으면 trade를 받아주고, W 침묵으로 그의 E grab을 막는다. 신발은 Plated, 첫 아이템은 Riftmaker — 그의 ult는 Mercury's Treads 가치이므로 그가 fed면 Merc를 고려한다.
- **Teemo:** Counterpick. Doran's Shield + Second Wind를 들고, E waveclear로 웨이브를 타워 밑까지 밀고, 정글에 gank를 요청한다. 그의 라인이 snowball하면 첫 아이템으로 ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** 구매 (이후 Maw of Malmortius로 빌드업).
- **Fiora:** 호각~약세 매치업. W 침묵을 parry한다 — W를 단독으로 던지지 마라. Q로 그녀의 dash trade를 끊고, Riposte를 다 쓴 다음에 W를 사용한다.
- **Malphite:** 호각 매치업, 그가 너보다 scaling이 약하다. sustain이 없고 Q poke의 마나 비용이 비싸니, 그의 마나가 낮을 때 Q+W로 trade한다. 6 이후 그의 **R**을 조심해라: 네 **R** 시전을 끊는다.

## 파워 스파이크 및 승리 조건

- **2레벨:** Q + E로 공격적인 trade가 가능하다: Q로 띄우고 들어가 못 움직이는 동안 E 평타 3회를 박아 넣는다. Q를 맞히면 35-40% HP를 무료로 빼앗는다.
- **6레벨:** 첫 Feast가 execute 압박을 연다. 쿨다운 80초, 사거리 175 (melee + 한 걸음). 정글이 low-HP 적에게 어떤 CC라도 걸어주면, 들어가 R로 영구 스택을 챙긴다.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 완성 (~13-15분):** trade 수학이 뒤집힌다. omnivamp + Carnivore 회복으로 melee bruiser의 풀 콤보를 받으며 귀환 없이 그 자리에서 싸울 수 있다.
- **Feast 5+스택 (~20-25분):** 두 번째 tank가 된다. Riftmaker + Spirit Visage + 5스택이면 약 3800-4200 effective HP. 적 backline에 들어가 burst를 먹고, carry에게 Q-W를 연계한다.

## 흔한 실수

- **gold 때문에 cannon 미니언에 Feast 안 쓰기.** cannon 한 스택은 영원히 +120 최대 HP. 60 gold를 "잃는" 것 같지만 HP scaling이 그 어떤 gold보다 강하다. 처치 사거리에 챔피언이 없으면 항상 cannon에 R을 써라.
- **follow-up 없이 Q를 poke로 쓰기.** Q는 0.65초 윈드업이 있고, 움직이는 타겟에는 챔피언 몸 길이의 절반 정도를 예측해야 한다. W나 평타로 follow-up할 수 없다면, engage나 peel용으로 Q를 아껴라.
- **spacing 없이 last-hit하러 가까이 가기.** Cho'Gath은 기본 이속 125에 dash가 없다. 웨이브의 caster 미니언 위에 서 있으면 기동성 bruiser에게 all-in (전력 commit한 engage) 당한다. 웨이브 뒤쪽에서 last-hit해라.
- **전투 중 E 끄기.** Vorpal Spikes는 토글이다: 마나만 있으면 전투 사이에도 켜진 채 유지된다. 전투 시작 전에 켜두면 첫 평타 3회가 이미 on-hit 준비 상태다.
- **풀 HP 챔피언에 R 저격.** Feast는 풀 HP에서 최대 랭크 약 600 true damage. 의미는 있지만, 80초 쿨다운과 미니언에 영구 스택할 기회를 포기하는 것이다. R은 execute나 panic peel용으로 아껴둬라.

## 고급 팁

**Q**로 평타 윈드업을 캔슬해 Yasuo나 Yone의 Wind Wall을 baiting하라: 평타를 시작하고, 벽이 솟아오르는 걸 본 뒤, 그들이 걸어가는 지점에 Q를 시전한다. Q skillshot은 지면이 솟구치는 효과라 벽 아래로 통과한다 (벽은 투사체를 막지 띵 효과는 못 막는다). 대부분의 ranged 챔피언은 평타 캔슬과 보류된 ability를 구분하지 못해, 면역이라 생각한 타겟에 무료 띄우기를 박을 수 있다. 같은 트릭이 Braum **E** (Unbreakable)와 Pantheon **W** (Shield Vault 차단 프레임)에도 통한다.
