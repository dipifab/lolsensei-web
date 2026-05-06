---
title: "Jayce Mid Build & Guide — Patch 16.9"
slug: "jayce-mid"
language: "zh-hans"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "League of Legends 英雄联盟 16.9 版本 Jayce 中单完整攻略:Manamune 优先合成路线、weapon-swap 连招细节、关键对线分析、强势期把握、新手常见错误规避以及一条进阶 gate-Q 预判技巧。"
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "每次 weapon swap (R) 给 Jayce 一段短暂的 Movement Speed 加速,并短时间无视单位碰撞体积。"
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer:跳向目标,造成物理伤害并减速周围敌人。Cannon:发射超远距离 AOE 非指向技能 — 中路核心 poke 工具。"
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer:平 A 时被动回蓝,主动开启周围伤害光环。Cannon:接下来 3 次平 A 攻速达到上限 — all-in 时的爆发窗口。"
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer:近距离击退,造成最大生命值 % 的法术伤害。Cannon:放置一个加速门,加速队友并强化穿过的 Q (Shock Blast) — 中路标准起手式。"
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "形态切换 (冷却 6 秒)。在近战 Hammer (engage、续航、击退) 与远程 Cannon (poke、AOE 清线) 之间转换。切到 Cannon 后第一次平 A 会撕裂目标的 Armor 与 Magic Resist。"
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位 AP 中单 (Annie, Veigar, Syndra):魔法护盾挡爆发并提供 AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位单体硬 CC (Ahri 魅惑, Lissandra R, Sylas E):法术护盾抵掉控制技能"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "对位前排厚实的抱团 5v5 阵容:主动 AOE 穿过前排击中后排"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "敌方有 3 个以上 AP/CC 威胁时把 Plated Steelcaps 换掉;韧性缩短眩晕与减速时间"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "用 Cannon Q 兵线消耗叠 Tear (Manamune) 层数,14 分钟达到 Muramana 强势期,然后用 E-gate Q 连招狙杀低防御目标。R 升到 2 级后到边路游走,把优势转化为节奏。"
  weakness: "Manamune 之前 mana hungry:漏一发 Q 几乎让整次交火白费。机动性高的刺客会在施法前摇里贴近 Cannon Q 距离。后期对 AP 阵容堆魔抗时输出下滑。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Jayce 的三段交火 (Cannon Q + AA + Hammer Q-AA-E) 触发 Press the Attack,带来 +8% 增伤,让 Cannon poke 在 6 分钟变成 kill threat。Triumph 在 takedown 时回血;Legend: Alacrity 在 W (Hyper Charge) 内堆满攻速;Coup de Grace 对 40% 以下敌人 +8% 伤害。"
    secondary_rationale: "Manaflow Band 通过 Cannon Q 兵线消耗快速叠层,每层永久 +50 蓝。5 级 Transcendence 提供 Ability Haste,与 Manamune 叠加缩短 R 切换的窗口。"
    secondary_alternative: "对位刺客阵容 (Zed mid + Kha'Zix jungle) 时把 Sorcery 换成 Resolve,带 Bone Plating (前 3 次受击减伤) 与 Second Wind (50% HP 以下被动回血)。牺牲前期 scaling 换 Edge of Night 出之前的爆发期生存力。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "无位移的 immobile 中单 mage"
      reason: "他们 6 级前对 Cannon Q 的射程没有任何回应。Veigar 需要 E (Event Horizon) 来铺 Q 消耗,但 Jayce 的 E gate 会在他完成连招前先强化你的 Q。一旦对方掉到 50% HP,切 Hammer 在他们的施法前摇中一发秒掉。"
    - examples: ["akali", "yone"]
      archetype: "没有远程 poke 的近战 skirmisher"
      reason: "Cannon Q 射程超过 Akali 的 E (Shuriken Flip) 和 Yone 的 Q;两者都必须 commit 进近战窗口才能输出。Hammer E 的击退能切断他们的 dash 链,Cannon-stance 撕甲为 gank 击杀做铺垫。"
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "多段位移的高机动 assassin"
      reason: "Zed W (Living Shadow) 与 Fizz E (Playful/Trickster) 能在施法前摇中贴近 Cannon Q 距离。一旦带 R 进入 Hammer 距离,他们会在 Jayce 完成 Hammer Q-W-E 之前先把你打掉。Edge of Night 有帮助但挡不住先落地的位移连招。"
    - examples: ["xerath", "vel-koz"]
      archetype: "射程更远的 artillery mage"
      reason: "射程超过 Cannon Q。Xerath 的 Q (Arcanopulse) 与 Vel'Koz 的 Q (Plasma Fission) 在 Jayce 走不进的距离命中你,而你不进就吃不到全 combo。每次兵线对换都掉血,却没有 all-in 反打的窗口。"
    - examples: ["twisted-fate", "galio"]
      archetype: "全图 / 跨地图 roamer"
      reason: "没有形态协同时 Jayce 的转线很慢。Twisted Fate 的 R (Destiny) 8 秒内翻转一条边路;Galio 的 R (Hero's Entrance) 落到 Jayce 跟不上的地方。即使中路 1v1 五五开,大局上也会丢掉别处的资源。"
---

## 概述

Jayce 中单是教科书式的 **lane bully** — 在敌方中单进入发育期之前用持续 poke 把他压到喘不过气。他是 ranged-melee 双形态混合英雄,在 **Cannon stance** 用一发超远距离 AOE (area-of-effect,范围伤害) 非指向 Q 拉开早期优势,在 **Hammer stance** 用 leap-Q 加击退 E 的连招收掉目标。R 切换有 6 秒冷却,切到 Cannon 后第一次平 A 会撕裂目标的 Armor 与 Magic Resist — 这是每一次 all-in (双方互相 commit 直到一方阵亡的全力交火) 的起手开关。

中路运营分三个阶段。6 级之前用 Cannon Q 在兵线上叠 poke (弹道穿透小兵);目标是在不浪费蓝量的前提下把对手从 100% HP 打到 50% HP。6 级时 Cannon-to-Hammer 全压成为 kill threat:朝对方丢 **E** (Acceleration Gate),从中穿过去打出强化的 **Q** (Shock Blast),用 **R** 切到 Hammer,**Q** 跳上去,**W** 释放伤害光环,**E** 把人击退到自家塔下。Manamune 成型后 (~14 分钟) 一发 Cannon Q 就能秒掉 squishy 的兵线,这时该开始去边路游走,把早期领先转化为全局节奏。

## 推荐出装

**起始装:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。不要起 ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (Manamune 的前置) 这种贪图发育的开局:面对能匹配你射程的中单,前三分钟的生存依赖 Doran's Blade 的 AD 与吸血。

**核心装 (按顺序):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — 第一件优先做。用 Cannon Q 兵线消耗叠层,叠满后觉醒成 ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana**,每一发 Q、平 A、W 光环 tick 都附带额外伤害 — Jayce 出装中的最大 AD 拐点。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位 AD 路线 (Yasuo, Zed, Akshan) 的鞋子。对位 AP/CC 堆叠时换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (无视一部分敌方 armor 的属性) 加上击杀/助攻叠加的被动 (Eminence)。配合 Muramana,每次游走的 AD 数值都会变得离谱。
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality 与命中减速。Cannon Q 命中时的减速能把要 Flash 逃走的敌人变成 Hammer-Q 的抓人目标。

**情景装:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位 AP 中单 (Annie, Veigar, Syndra)。魔法护盾抵爆发并加 AD。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对位单体硬 CC (Ahri 魅惑, Lissandra R, Sylas E)。脱战充能,挡掉下一个把你定住的技能。
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — 对位前排厚实的抱团 5v5 阵容 (堆叠 **frontline** = 开团的坦克/战士)。主动 AOE 穿过前排击中 **back line** (后排靠后输出的 carry),并在 takedown 时返还冷却。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 敌方有 3 个或更多 AP/CC 威胁时把 Plated Steelcaps 换掉。

**鞋子:** 默认 Plated Steelcaps。重 magic damage 或链式 CC 时换 Mercury's Treads。

**技能加点:** 主升 **Q** (两个形态的核心伤害),副升 **E** (击退处决,gate 强化 poke),最后升 **W**。**R** 在 6、11、16 级点。注意:2 级点 **E** (而不是 W),用 Acceleration Gate + Cannon Q 连招制造 kill pressure。

**符文:** 主系 **Precision**,带 **Press the Attack**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系 **Sorcery**,带 **Manaflow Band** 与 **Transcendence**。对位刺客阵容时把副系换成 **Resolve**,带 **Bone Plating** + **Second Wind**。

## 关键对线

- **Yasuo / Yone:** 他们用 Wind Wall 挡掉 Cannon Q。从侧翼角度切入,逼对方背对自己的兵线 — 看不见的弹道也就挡不住。Q 留在 Wall 进冷却时打,然后接 E-gate-Q。
- **Zed:** 12 分钟后随时把 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** 充满,挡住 R (Death Mark) 的收尾。6 级前你 poke 占优。6 级后情形反转:他 R 在线时不要越过兵线。
- **Ahri:** 五五开,Q 的时机决定胜负。她的 E (Charm) 远距离前摇明显 — 在发 Cannon Q 前用一个小兵当掩体侧位。她空了魅惑后,这条线接下来 9 秒都是你的。
- **Annie / Veigar:** 6 级前免费 poke 对线。他们没有位移,Cannon Q + E 连招把他们从兵线上耗走。all-in 前注意眩晕冷却 (Annie 被动、Veigar E):他们的 stun 会打断 Hammer Q 的击退动画。
- **Twisted Fate:** 6 级前你 poke 占优,但宏观会输 (macro game,超出你这条线的全图战略)。他 R 一上线就 ping mid mia (missing in action — 中单从地图消失) 然后早回家;你手上的兵线优先权 (priority) 不如他全图金卡的价值。

## 强势期与胜利条件

- **2 级 (Q + E):** Cannon Q + Acceleration Gate + AA 对大多数 squishy 是 30% HP 的交换。门也能当退路 — 如果对方 commit 上来,把它丢在自己身后朝塔的方向。
- **6 级 (第一个 R):** 两个形态全开。Cannon-to-Hammer 全压在 45% HP 就成为 kill threat,而不是单纯的削血。
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune 完成 + 叠层 (~12-14 分钟):** 觉醒成 Muramana 后,每发 Q 多打 ~15%,平 A 也跟着拐点。这是 Jayce 中单的最大爆点 — 该出去边路游走。
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + 击杀助攻叠层 (~19-22 分钟):** Eminence 的层数和 Muramana 叠加,AD 数值变得离谱。这时候要么强开团,要么推水晶 (inhibitor)。

## 常见错误

- **没放 Acceleration Gate 就发 Cannon Q。** 裸 Q 蓝耗高且容易躲。先朝敌人方向放 **E** (Acceleration Gate);门会强化穿过去的 Q (射程更远、伤害更高、AOE 更大),而那点延迟逼对方在你开火前 commit 一个移动方向。
- **Manamune 叠层太慢。** Cannon Q 必须命中英雄或杀死兵线才计入 Manamune 层数;空 Q 不算。规划兵线 poke,让每发 Q 至少打到三个小兵以加速 Tear。
- **R 切 Cannon 的撕甲浪费在小兵身上。** 从 Hammer 切到 Cannon (R) 后第一发平 A 撕 Armor 与 Magic Resist。命中近战小兵就把这个触发废掉了 — 永远留给敌方英雄。
- **游走时不看 R 冷却。** R 切换冷却 6 秒,同时也是你唯一的 mobility (切换时被动 Move Speed 加速)。带着 R 出冷却去游走,这样被反 gank 时还能脱身;到打架现场才发现 R 没好,就是没退路的 commit。
- **忘了 Hammer W 的回蓝。** 长时间 Cannon poke 围攻中,切 Hammer 平 2-3 下用 W 被动 (命中回蓝) 续蓝。跳过这一步会榨干蓝条,逼你提前回家。

## 进阶技巧

针对移动目标练习 **gate-Q 时机预判**。大多数 Jayce 玩家把 Acceleration Gate 放在敌人当前所在的位置,然后从中发 Q。高手则把门放在敌人 0.5 秒后 *将要到达* 的位置 (gate 释放时间加上 Q 动画) — 通常朝兵线方向,因为对方需要走过去补刀。强化的 Q 落在预测点,而不是过去点。在 Practice Tool 里把 target dummy 设成 Move 模式,反复练习 lead distance 直到形成肌肉记忆。
