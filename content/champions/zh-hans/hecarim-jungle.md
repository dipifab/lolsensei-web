---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "zh-hans"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Hecarim 战争之影打野完整攻略:首次清野动线与刷野顺序、Sorcery 符文与 Phase Rush 触发要点、bruiser 核心装备购买节奏、E 起手 Q 输出 R 切后排的标准抓人连招、关键对位与反野思路、强势期节奏、新手常见错误规避,以及 fake-flank 假绕后等进阶团战操作技巧。"
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim 将一定比例的额外 Move Speed 转换为 Attack Damage。每件移速装也是输出装。"
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "对周围敌人造成物理伤害的 AoE。命中累积层数,降低冷却并提升伤害。是清野与 DPS 主键。"
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "AoE 法术伤害领域,根据领域内敌人受到的伤害为 Hecarim 回血。清野与塔下强杀的核心 sustain。"
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "递增 Move Speed 加 ghost(穿过单位)。下一次普攻击退,伤害随冲锋距离增加。是抓人核心。"
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "直线冲锋,造成法术伤害,并在终点对命中目标施加 fear。团战的远距离 engage 与 disengage。"
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位强 CC 或法术伤害 (Lissandra, Syndra, Brand):CC 比 armor 更关键时换掉 Plated Steelcaps"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "对位 frontline 坦克 (Ornn, Sion):平 A 与 Q 层数撕甲让全队都受益"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "对位低抗性阵容,需要清线和 splitpush(单人推边路逼对面回防)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "对位无真正爆发的阵容 (4-5 战士/坦克):长团里更高的 ability haste 与 R 复用率"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "对位重 AP 阵容 (Brand + Karthus + Vladimir):魔抗与被动移速双重喂养 Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "团战每次都被优先集火时:免费的第二条命让你能更深入地 commit 开团"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "用 E 与 Phase Rush 的递增移速从侧面切入 squishy(防御薄弱的 ADC 等输出),R 的 fear 跟进,W 自疗扛住爆发,同时 Q 不停循环。"
  weakness: "3 级前疲软,E 进 CD 时极脆。root (Morgana Q, Lillia R) 或 ground (Cassiopeia W) 这类 hard CC 会瞬间切断你的 engage,把你变成无路可退的活靶。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "无强力初期抓人能力的慢速坦克打野"
      reason: "Hecarim 清野更快,先到 3 级;能反吃他们的二号 buff,或在他们出现前先抓一路。靠速度的 scaling 完胜他们靠裸属性的 scaling。"
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "没有自保 peel 的脆皮辅助"
      reason: "E + R 让 Hecarim 从屏幕外追上去 fear 他们的 carry;辅助一倒,对面 ADC 就没护盾,几秒之内崩盘。"
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "无位移或位移很短的 ADC"
      reason: "Phase Rush 加上 E 冲锋会在他们风筝出去前就贴脸;他们唯一的逃生 (Flash) CD 远长于你的 engage。"
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "拥有 root、slow 或 ground 等锁住移动的英雄"
      reason: "Hecarim 整套技能依赖 Move Speed (Warpath 把额外移速转成 AD)。一旦被 root 或 ground 住,就同时失去伤害和 disengage 能力。"
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "强势前期与反野型打野"
      reason: "Hecarim 3 级前很弱。这些打野能反吃二号 buff、击杀或耗掉他的 Flash,在他成型前就把雪球滚起来。"
    - examples: ["jax", "fiora", "trundle"]
      archetype: "惩罚单人切入的对线型 bruiser"
      reason: "如果 Hecarim 单独 engage(没有队友跟进),他们靠反 AD 被动或 true damage 在 1v1 中获胜,把他的 commit 直接变成对面的免费人头。"
---

## 概述

Hecarim 是一个高速的 diver 打野 — 一个能跨极远距离压上、把敌人击退到自家队伍里、然后靠 **Devastating Charge (E)** 和 **Onslaught of Shadows (R)** 像水蛭一样咬死目标的 fighter。被动 **Warpath** 把每点额外 Move Speed 都转换成 Attack Damage,所以移速装就是输出装。技能组很好读,但对时机要求很高:你大部分时间都在地图上扮演一个机动威胁,惩罚那些站位过分的脆皮 carry(防御低的 ADC 与 mage 等输出)。

游戏思路是可重复的。先用 **Rampage (Q)** 与 **Spirit of Dread (W)** 快速清野到 3 级,接着在 E 冲锋角度最好的那条路找前期 gank(又长又直的边路最理想)。从中期开始,你的工作是用 **R** flank(从没有人盯着的一侧切入团战),fear 对面的后排,然后用 **E** 击退连环把所有目标打倒。

## 推荐出装

**起始装备:** Mosstomper Seedling (如果想要更多脱战移速则用 Gustwalker Hatchling) + Refillable Potion。Mosstomper 在满血时给护盾 — 第一个清野非常稳。

**核心装备 (按购买顺序):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — AD 节点,加上一个减速主动 (Halting Slash)。可控的减速决定了一次抓人是收掉人头还是看对手交 Flash 走人。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 抗普攻的 armor。对面有两名以上 AD 威胁时的默认鞋子。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP、Tenacity,以及高额受伤时触发的护盾。这是让你能在团战里 commit(全压上去不撤)、活足够久去循环技能的关键装。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 把受到的物理伤害转化为缓慢流血(在接下来几秒里分摊伤害,而不是一次性吃下)。还在击杀/助攻时回血,所以你能 all-in(全压到拿人头)再全身而退。
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 团战开局的第一记普攻必爆击 (与 **E** 击退完美配合),并且回一大段血。和 Stridebreaker 配合极佳,因为两件装都希望你在技能间穿插平 A。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 对面有大量 crowd control 或法术伤害时取代 Plated Steelcaps (Lissandra, Syndra, Brand)。Tenacity 缩短眩晕时间,能让你正常放出 **R**。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 对位 frontline 坦克 (Ornn, Sion)。平 A 与 **Q** 层数撕甲,让全队的输出都加成。
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — 想 splitpush 边路 (单人推线逼应对) 而且需要更多清线和 omnivamp 时。
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — 对位没有真正爆发的慢速阵容。额外 ability haste 意味着长团中更多 **R** fear 与更多 **Q** 输出。
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 对位重 AP 阵容 (Brand + Karthus + Vladimir)。叠加魔抗与被动移速,与 Warpath 双重收益:更多速度 = 更多 AD。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 对面每次开团都先集火你时。在队友交完技能后复活把团战收尾。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**;CC 比平 A 伤害更重要时换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (清线、清野与主要 DPS),副升 **E** (更长的 ghost 时间和更短的抓人 CD),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery** 带 **Phase Rush**、**Manaflow Band**、**Transcendence**、**Scorch**。Phase Rush 在 4 秒内由不同技能造成 3 次伤害后触发 — 在 Hecarim 身上靠抓人时的 **E**-平 A-**Q** 很容易凑齐,触发时的移速爆发会通过 Warpath 转成 AD。副系 **Resolve** 带 **Bone Plating** 与 **Overgrowth**。如果对面是大量 frontline 坦克,把基石换成 Precision 的 Conqueror (你想要长团里递增的伤害)。

## 关键对线

- **Lillia:** 她的 **R** 能从地图另一头 root 你。低血量上前骗她交,等她交完再 commit。如果被命中,你的 engage 窗口会关闭 14 秒以上。
- **Kha'Zix:** 强力反野 + 刺客。盯紧他 — 如果 2:30 时他的蓝 buff 还在,他就在你家野区。4 级前避开他的预期路线,之后跟队友抱团度过前期。
- **Jarvan IV:** 镜像 engage 对位。先开大的一方通常赢交锋。在他野区埋眼,看到他动就喊队友撤;他的 **R** CD 没好时不要在狭窄地形抱团。
- **Sejuani:** 偏后期的坦克打野。前期清野与施压你都占优。20 分钟前主动找架打;后期她的眩晕与团队 peel 强于你的单点切入。
- **Master Yi:** 注意你的 **R**。Yi 能用 **Q** - **Alpha Strike** 无敌帧链 cleanse 掉 fear。把 **R** 留到他 **Q** 进 CD 时 — 看到他在野怪或兵线上交 **Q**,接下来 12 秒内开团。

## 强势期与胜利条件

- **3 级 (第一次完整清野后):** 第一个抓人窗口。**Q**-**E**-**W** 都点出后,可以对站位过头的敌人打出完整连招。河道蟹的争夺现在是真正的拼抢 — 你比大多数打野到得更快。
- **6 级:** Onslaught of Shadows 上线。跨地图绕后与塔下强杀都成为可能。某条边路有 prio 时,从迷雾里 **R** 进去开团。
- **Stridebreaker 成型 (~12-14 分钟):** 节奏大反转。Halting Slash 主动让你不用交 **E** 也能黏住逃跑的目标。完成后立刻去施压小龙或先锋。
- **Sterak's Gage 上线 (~22-25 分钟):** 你成为能扛住团战前 2 秒的开团工具。围绕资源点找 picks(在团战外击杀孤立的敌人) — 目标是对面 ADC 或中单。

## 常见错误

- **不在两次 Q 之间穿插平 A 而连续 Q。** Warpath 是从速度获取 AD — 让平 A 落在技能间隙里。Animation cancel:**Q** → 强制点击平 A → 再 **Q**。
- **R 怼前排。** **R** 是绕后工具,不是正面开团。fear 对面坦克只会把他送回 ADC 身边给 peel。借助视野或迷雾绕过去,然后 **R** 直接穿透到 carry 那边。
- **队友不在视野里就 engage。** Hecarim 的全部伤害逻辑就是 "击退给跟进的队友收尾"。如果你的队友离你 2 秒以上接不上,人头就没人能收,你死在对面野区。
- **1/3 比分还堆纯输出。** 落后并且没有 snowball(雪球 — 击杀滚雪球式累积优势)时,Sterak's 加 Sundered Sky 让你作为开团手依旧有用。劣势局把 Ravenous Hydra 出在第二件,你就只能挨两下就死的 dive bot。
- **在小兵身上浪费 E 的 ghost。** **E** 只在短暂窗口里允许穿过单位。把它留给必须穿过兵线或眼位的时刻 — 不要在野区进 CD 就交。

## 进阶技巧

围绕中期资源点用 "fake-flank" 假绕后路线。先在自己野区进入对方视野,让他们在小地图上跟踪你,然后立刻退入战争迷雾(你看不见的黑暗区域),绕远路过去。当对手按你最后被看到的位置做轮换时,从他们没预料的那一侧 **R** 进去。这个套路依靠 Hecarim 的纯 Move Speed:大多数打野跑不出这个时间差。配合 Phase Rush 加 Stridebreaker 主动你做得到。
