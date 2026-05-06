---
title: "Leona Support Build & Guide — Patch 16.9"
slug: "leona-support"
language: "zh-hans"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Leona 辅助完整攻略:起手装备、坦克 engage 核心出装路径、关键对线、强势期与节奏把握、新手常见错误、最后再附一个 R-Flash-E 进阶连招技巧,一页搞定。"
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Leona 的技能给命中的敌人挂上 1.5 秒 Sunlight 标记。下一名对该目标造成伤害的盟友消耗标记触发额外法术伤害。每次 engage 你的 ADC 跟上就是免费爆发。"
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "Leona 的下一次普攻短暂眩晕目标并造成额外法术伤害。Auto-targeted (无需瞄准) 但是 melee range——必须贴在敌人身上。E 或 R 之后第二个稳定 crowd control。"
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "数秒 Damage reduction 加额外护甲与魔抗。结束时造成 AOE (范围,命中附近所有敌人) 伤害;若命中,抗性额外维持。engage 之前开,而不是之后。"
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona 直线投出剑影:最后命中的英雄被短暂 root (定身),Leona 突进过去。Skillshot (需要瞄准、直线飞行、可被闪避的技能)。主要 engage 工具,E 接 Q 连招的起手。"
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "远距离延迟 AOE:中心眩晕,边缘减速。施法前摇较长——用于远距离开团、锁住逃跑目标,或在 E 范围之外提前布置一波团战。"
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对位平A压力大的下路 (Caitlyn, Draven, Tristana) 时,从 Mercury's 换装——harass 比 CC 更疼"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "对位有可稳定 ult 上去的近战 carry (Yasuo, Yone, Master Yi) 时——R 给他的普攻附加额外法术伤害"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "对位 AP 爆发阵容 (双法师如中单 Syndra + 辅助 Brand)——脱战后再生的被动魔法护盾"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "从 fog (无眼草丛) 角度命中 E,突进到敌方 ADC 头上,衔接 Q 眩晕和带 Sunlight 标记的 AA。你的 ADC 在 proc 上打出双倍伤害,carry 在敌方辅助反应过来之前就死了。"
  weakness: "E 是平地上容易侧身躲掉的慢速 skillshot。完全没有远程 poke——对面下路只要待在 E 射程外,你就放弃这条线必须去游走。前期蓝条脆。"
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "自身没有 hard CC 的脆皮 enchanter"
      reason: "他们没有手段打断你的 E 突进。E 一旦命中他们的 ADC,在 enchanter 来得及护盾或 peel 之前,carry 就死在 Q 眩晕里。Yuumi 甚至来不及解除依附逃走。"
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "无位移、不灵活的 ADC"
      reason: "E 射程 875,会突进到最后命中的英雄身上:没有 blink 的 ADC 每次上前补刀都会吃整套 E 接 Q。一旦你 commit,他们就跑不掉。"
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "没有逃生技能的固定输出 mage support"
      reason: "他们的 poke 代价是站位:Flash + E 把他们勾过来,W 的抗性吃掉他们的反爆发。他们必须站住才能放出长 skillshot——那正是 E 干净命中的时机。"
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "硬控屏蔽与解控型 enchanter"
      reason: "Morgana 的 Black Shield 完全挡住 E 的 root——闪过去等于白闪。Milio 的 R 远距离解掉你的眩晕连锁。Lulu 的变形可以打断你 dash 中段。你唯一一次 commit 的 engage 被免费化解。"
    - examples: ["nami", "lux", "zyra"]
      archetype: "带回复或 root 的远程消耗型"
      reason: "他们在 800 以上的距离免费消耗你的 HP,而你毫无回应。Lux 的 Q 在 engage 中段束缚你,Nami 的水泡打断你的 dash;你根本进不到射程就一直在挨 poke。"
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "把你拖出位的 hook 辅助"
      reason: "他们的 hook 比你的 E 先到 (Thresh Q 约 1100 vs E 875)。你被拉过去,在敌方阵中孤立被集火,你的 ADC 失去 engage 工具,完全暴露。"
---

## 概述

Leona 是一名 **vanguard support** (任务是开团而不是奶人的坦克型辅助)——她冲到敌方 carry 头上,用一连串 crowd control 把他锁住,让队友收人头。她的技能组对单一目标叠两段 crowd control:**Zenith Blade (E)** 是远距离突进 skillshot,会 root 最后命中的英雄;**Shield of Daybreak (Q)** 是普攻眩晕;被动 **Sunlight** 给她伤害到的所有目标挂上标记,下一名命中的盟友会触发额外法术伤害。**Eclipse (W)** 是她在 *engage 之前* 就要按下的防御层:damage reduction 加上护甲和魔抗,结束时若命中敌人,这些抗性会延长。**Solar Flare (R)** 是延迟 AOE 眩晕,可在比 E 更远的距离上释放——用于从 fog of war 开团或锁住一个低血逃跑的目标。

战术思路:对线时贴在草丛边等敌方 ADC 上前补刀,然后从 fog (没插眼的草丛) 命中 E 让他无法侧身,接 Q,让 ADC 收割。中期通过 R 进行跨线 pick,**游走** (离开下路去帮中路或打野)。后期在优先目标——通常是敌方 ADC 或中单法师——上开团,并尽量活到能 **peel** (保护自己 carry) 的时间。

## 推荐出装

**起手装备:**![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (统一辅助起手装) 加 2 瓶 Health Potions。不要补兵:把金币留给 ADC。World Atlas 通过 quest progression 单独给你结算金币。

**核心出装 (按顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 起手装。随着 quest progress 累积,会自动经过 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** 与 ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**,最终升级为你选择的 endgame 形态。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 魔抗加 **tenacity** (减少加在你身上的 crowd control 持续时间的属性)。眩晕被打折之后,你即便被对方辅助打断,也还能补上 Q。
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 护甲、魔抗,加一个给附近所有盟友护盾的主动。E 出去的瞬间立刻按掉,让队伍吃掉敌方第一波 **burst** (前 1-2 秒的高额伤害)。
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 与 **ADC** (Attack Damage Carry——靠普攻输出的下路队友) 绑定:他承受的一部分伤害分担到你身上,你再回血给他。
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 辅助装的 engage 向 endgame 升级。带 **Spellblade** 被动:任何技能后,下一次普攻附加额外伤害,目标在 4 秒内承受的伤害被增幅。打法节奏:"技能 → AA → 技能 → AA"。

**情境装备:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 减少普攻伤害的护甲鞋。当对面下路平A压力很大 (Caitlyn, Draven, Tristana),且 **harass** (远程消耗与磨血) 比后期 CC 更疼时,从 Mercury's 换过来。
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 与一名指定盟友绑定;你 ult 时,该盟友普攻附加额外法术伤害。对位带近战 carry (Yasuo, Yone, Master Yi) 你能稳定大上去的阵容时拿。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — 脱战后再生的被动魔法护盾。对位 AP 爆发阵容 (双法师如 Syndra + Brand) 时拿——护盾能整吞掉一发大招。

**鞋子:** 默认 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 看中 tenacity——Thresh 的 1.25 秒 hook 被压到 0.85 秒,刚好够你补 Q。仅在 AA 重的下路才换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**技能加点:** 主升 **E** (Zenith Blade) — CD 越短 engage 窗口越多,而且 E 是你唯一的远距离工具。副升 **W** 拉长 damage reduction 时间。**Q** 最后升 (升级几乎不影响眩晕时间,基本只加伤害)。**R** 在 6、11、16 级各点一次。

**符文:** 主系 **Resolve** (主防御符文树 — 抗性) 带 **Aftershock** (你 CC 别人时获得免费的护甲和魔抗,每次 Q 眩晕和 E root 都触发)、**Font of Life** (CC 给目标挂标记,盟友攻击时回血)、对位后期成型阵容用 **Conditioning**,对位前期爆发用 **Bone Plating**、**Unflinching** (使用召唤师技能时获得额外 **tenacity**)。副系 **Inspiration** 配 **Hextech Flashtraption** (长 CD 的备用 Flash) 与 **Cosmic Insight** (召唤师与装备主动 CD 缩短)。**Stat shards**: Adaptive Force / Adaptive Force / Health。

## 关键对线

- **Nautilus:** 镜像 **engage** 对线。他 Q 钩子的射程比你的 E 长 (~1100 vs 875),所以钩子在的时候不要往前走。先躲掉,然后趁他没有后续技能时 flash-E 上他的 ADC。
- **Pyke:** 技术对线。他用 Q 比你 poke 得猛,凭借 **stealth** (穿草丛时隐身) 在游走上压你。把视野铺到河道深处,在他 R 击杀不会重置 CD 的位置 (即对线期) 强行打架。
- **Morgana:** 你 **all-in** (全压击杀) 的硬克制。Black Shield 把 E 的 root 完全挡掉——闪过去就是白闪。盯她的 18 秒 CD,只在 Black Shield 没有的窗口里逼架。
- **Soraka:** 纯 **sustain enchanter** (靠保 ADC 不死取胜的回复型辅助,不靠开团)。只要她 Flash 没好,就直接 flash-E 到她头上——她的 ADC 还没反应过来,她已经死在你连招里了。
- **Caitlyn:** 远距离 **poke** 对线 (远距离磨血)。她在塔下压你的血线。不要硬刚,接受这条线的吃亏,Mobility Boots 游中或入侵——Leona 输线赢运营。

## 强势期与胜利条件

- **2 级 (E + W):** 第一个强势期。完整的 E 接 Q 连段 3 级才解锁,但靠 E 加 W 你已经能强行 **trade** (短促的伤害交换,不是全压击杀)。如果敌方 ADC 越过第一波 **wave** (袭来的小兵队列),只要你的 **Flash** 还在,E 上去就是免费击杀。
- **6 级 (R 解锁):** engage 威力暴涨。**Solar Flare** 让你在 fog of war 里开团:从河道草丛里释放,不需要露出身影。R 也可以当 **peel** (保护 carry) 用——压在那种突脸 ADC 的人身上。
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 完成 (~14-16 分钟):** 第一件团战装。每次开团都自带一个免费团队护盾。集合打 **Drake** (下路河道的小龙资源——击杀获得永久属性 buff) 或 **Voidgrubs** (上路河道的小怪——击杀方对建筑获得额外伤害)。
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~24-30 分钟):** Spellblade proc 加上对英雄 4 秒伤害增幅,让你的循环本身打出真伤害。E → AA → Q → AA 仅靠你自己就能削掉 **squishy** (低防御英雄,如 ADC 或法师) 20-25% 的 HP。

## 常见错误

- **空地上放 E。** Zenith Blade 是慢速弹道,在平直的兵线上很容易侧身躲掉。从草丛里或没插眼的角度释放 E——投射物会在敌人需要那半秒视野来反应的时间里冲过去。在空地上,只在目标已经被其他 CC 控住时才放 E。
- **没有跟手就 engage。** Leona 的 E 把你硬推到前面,你回不来。如果你的 ADC 还在泉水或打野跑到了地图另一边,就先不要放 E。4v5 单独 engage 只是送命,还白白烧掉 R 的 CD。
- **engage 之后才放 W,而不是之前。** Eclipse 在你 *按下的瞬间* 就给 damage reduction,而不是爆炸时才给。先按 W,*再* E。如果你 E 出去之后才意识到需要抗性,W 的加成往往在你贴到目标之前就过期了。
- **近距离反应式开 R。** Solar Flare 施法前摇长、飞行时间也长——在 melee range 内,即使是站着不动的目标也会从中央眩晕区滑出去。R 留给从 fog of war 开团或者收一个低血逃跑的人。
- **忘记 Sunlight 被动。** 你命中的每个技能都给目标挂 1.5 秒标记;第一名打到的盟友消耗它触发额外伤害。掐 Q 的时机要保证你的 ADC 已经在普攻射程内——连段听上去应该是"Q 眩晕、ADC AA、Sunlight 触发、目标死亡"。

## 进阶技巧

**fog of war 中的 R-Flash-E 连招**。6 级时藏在敌方一侧的河道草丛中,不被看到。在敌方 ADC farming 的位置释放 **R**——他看到地面指示但看不到来源。在他开始移动闪避的瞬间,**Flash** 向前,**E** 在闪现过程中放出 (突进会从你闪现后的位置继续延伸),到达时接 **Q**。做对了,目标会连吃 R 眩晕、E root、Q 眩晕——两秒内三段 crowd control,几乎没有 counter-play 余地。在 **Practice Tool** 里反复练习,直到 R-Flash-E-Q 在半秒内一气呵成。
