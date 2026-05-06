---
title: "Lillia Jungle Build & Guide — Patch 16.9"
slug: "lillia-jungle"
language: "zh-hans"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Lillia 璃菈打野完整攻略:起始装、AP 爆发核心出装顺序、Inspiration 符文、关键打野对线应对、强势期把握、新手常见错误规避以及 E 闪 R 进阶起手等高阶技巧。"
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "技能命中时给英雄和野怪叠加按最大生命值百分比持续魔法伤害的层数。Dream Dust 层数激活 R。"
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "Lillia 周身的范围旋转攻击:近处普通伤害,边缘额外真实伤害。命中叠加移速。打野清线和小规模交战的核心 DPS。"
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "蓄力范围技能加伤害区域:中心命中伤害高得多。单体爆发技。前摇长,需要配合 E 减速。"
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "远程抛掷型技能:伤害、减速并提供视野。未命中则会一直滚动直到撞到目标。可作起手、视野或保命。"
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "全图给所有携带 Dream Dust 的敌方英雄逐渐叠加睡意,然后让其陷入睡眠。第一次攻击附带额外伤害唤醒。"
      dd_spell_id: "LilliaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对刺客和强切入阵容 (Zed, Diana, Kha'Zix) — 时停掩护切入瞬间,同时 DOT 与 R 持续生效"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "对无魔抗的脆皮后排 — 低血量阈值被动与 R 唤醒爆发完美吻合"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "对风筝流阵容 — 额外移速和技能急速强化她的技能循环交战"
    - dd_id: "3135"
      name: "Void Staff"
      against: "当任何核心目标购买魔抗装时换装 (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "用 Q 给核心目标叠满 Dream Dust,接 R 团队范围睡眠,然后用 W 中心命中加 Q 在净化或保护前打出最高爆发。"
  weakness: "前期等级薄弱且只有 Q 一种位移。2-3 级激进入侵、硬 CC 链 (Lee Sin Q, Vi R) 以及对 R 目标的 Mercury's Treads 都能打断她的滚雪球。"
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration 主系:First Strike 奖励她的清野与 gank 风格,每次 gank 提供额外金币;Magical Footwear 提供免费鞋子;Biscuit Delivery 与 Cosmic Insight 解决前期蓝量并缩短 Smite/Flash 冷却用于资源点团战。"
    secondary_rationale: "Sorcery 副系:Manaflow Band 拉高蓝量上限,让 Q-W-E 在野区轮转不会蓝空;Transcendence 提供技能急速,从第二波团战开始大招冷却更短。"
    secondary_alternative: "对长时间 1v1 交战 (Master Yi, Warwick, Udyr),将 Inspiration 换成 Precision,主系核心改 Conqueror,搭配 Triumph:叠加适应性伤害与击杀回血扭转长时间对决。"
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "无前期入侵的清野型打野"
      reason: "他们想安静清野到 6 级。Lillia 能跟上他们的清野速度,并凭 Q 的移速层数和被动 DOT 压力在河蟹处占优。"
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "弱于百分比生命值 DOT 的上路坦克"
      reason: "Liandry's Torment 加上她的最大生命值灼烧能快速削减大血量池。R 的睡眠把他们慢施法的威胁 (Sion R, Mundo Q) 变成你的免费站位。"
    - examples: ["senna", "kog-maw"]
      archetype: "缺乏位移的后排核心"
      reason: "跨屏 E 提供 gank 控制起手,接 R 的睡眠在他们能站到前排身后之前打开必抓窗口。"
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "2-3 级激进入侵者"
      reason: "Lillia 的 1-3 级是最弱的部分;没有硬 CC,只有 Q 提供伤害。一次成功的入侵会在她达成清野加机动性强势期前击杀她。"
    - examples: ["yasuo", "camille"]
      archetype: "用位移或 Wind Wall 绕开 W 减速的英雄"
      reason: "她的单体爆发 W 需要目标钉在中心。反复位移以及 Camille 的 E 钩拉会让她打空。"
    - examples: ["kindred", "graves"]
      archetype: "在河蟹处胜出的远程 AD 打野"
      reason: "他们靠普攻射程在河蟹处压制她,而她必须进 Q 命中范围。连续两次失去河蟹会崩盘她的河道视野与游走时机。"
---

## 概述

Lillia 是一名 AP 小规模交战型打野,整套技能都通过被动 **Dream-Laden Bough** 提供基于最大生命值的持续魔法伤害层数。每一次 Q 旋转、每一次 W 砸地、每一次 E 种子都会留下 "dream dust" 印记并持续造成几秒伤害——这就是她清野速度比几乎其他所有 AP 打野都快的原因,也是她的对决即使技能进入冷却也像在不断磨血的原因。她的游戏计划很简单:在尽可能多的敌方英雄身上叠满 dust,然后按 **R** 让他们一起进入睡眠。

她需要的是节奏,而不是慢慢清野。用 **Q** 在野区路径之间维持移速 buff 层数,用 **E** 在视野范围之外发起 gank,用 **W** 作为目标减速后小规模交战中的单体重锤。后期她的 R 是 AP 打野池里最可靠的团队范围控制起手,但前提是你必须先给目标打上层数——对一支干净的敌方队伍直接 R 是浪费大招。

## 推荐出装

**起始装:** Hailblade (1039) + Refillable Potion (2031)。Lillia 是远程英雄,所以 Hailblade 是正确的惩戒宠物起始装。

**核心装备 (按顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — 由 Hailblade 任务升级而来;在积累足够野怪经验后约 3-4 分钟自动进化。AP 爆发型宠物伴侣:技能后每次普攻附带魔法 on-hit 触发,与她被动 DOT 完美贴合。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件成型装。基于最大生命值的灼烧 (几秒内分散的持续伤害,而非瞬间爆发) 与她的被动叠加:敌人总血量越高,削减越快。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。Magical Footwear 在约 12 分钟提供免费鞋子之后的默认鞋。
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 长时间交战装:叠加全能吸血 (造成伤害时回血) 并在战斗 3 秒后将部分伤害转换为真实伤害。与她的 DOT 节奏天然契合。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 AP 倍增器;把被动的小幅伤害转化为真正的一击秒杀窗口。

**情景装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对刺客与强切阵容 (Zed, Diana, Kha'Zix)。R 进后排的瞬间用时停过渡,DOT 与队友完成击杀。
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 对无魔抗的脆皮后排。其低血量阈值被动 (目标低血时附加魔法伤害) 与 R 的唤醒触发吻合。
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 对风筝流阵容。额外移速与技能急速强化她的技能循环小规模交战,因为她的伤害来自连招而非普攻。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 任何核心目标一买魔抗装就出。

**鞋子:** 默认 Sorcerer's Shoes。对 AP 爆发加重控制 (Lissandra + Twisted Fate) 时 Mercury's Treads 也可接受;韧性保护你的 R 施法前摇。

**技能加点:** 优先升 **Q** (清野速度与小规模交战 DPS),其次 **W** (单体爆发),最后 **E**。**R** 在 6、11、16 级各加一点。1 级 **Q**,2 级 **E** 用于 gank,3 级 **W**。

**符文:** 主系 **Inspiration** 加 **First Strike**、**Magical Footwear**、**Biscuit Delivery**、**Cosmic Insight**。副系 **Sorcery** 加 **Manaflow Band** 和 **Transcendence**。

## 关键对线

- **Lee Sin / Xin Zhao:** 2-3 级激进入侵者 (在你装备齐全前进入野区杀你),会在你达成清野加机动性强势期前秒杀你。从距离他们预计入侵路线最远的野怪开始;让你的中野线辅助在第二个 buff 附近插眼。6 级前不要争河蟹 (河里的螃蟹)。
- **Karthus:** 农民对决。他后期更强,但 6-14 分钟你节奏更好。追踪他的清野位置,每个 R 冷却都去 gank 他的线。如果落后,不要单挑:专注边路资源点交换。
- **Amumu:** 双方都清野迅速但他 6 级前没有交战存在感。第一次清野后吃掉他那侧的河蟹;他在 Q 晕眩冷却时无法惩罚你。
- **Master Yi:** 当他到 2 件装时进入反制区域。比平时更早出 ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive**;通过叠 Q 被动移速并在身后预放 E 来风筝他的 Q (alpha strike)。
- **Graves:** 满血对他会输河蟹。在 ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** 完成前走对侧路径;百分比生命值灼烧最终拉平普攻交换。

## 强势期与胜利条件

- **3 级 (Q + W + E):** 技能解锁齐全。第一次清野约在 3:15 完成且血量健康——这是你最早的 gank 窗口,用 E 起手接 W 中心命中。
- **6 级 (R 解锁):** 第一次 **Lilting Lullaby**。寻找已经预先叠好 dust 的低血量线霸:走入视野、R、等 1.5 秒积累、打出唤醒连招。这是她技能组里最具技术含量的时机 (过早 R 等于浪费大招)。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 完成 (~ 9-11 分钟):** 小规模交战 DPS 翻倍。在此强行打小龙幼虫或一龙团战;她的 DOT 加上装备灼烧能在坦克前排重新站位之前撕碎他们。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 上线 (~ 18-22 分钟):** 长时间交战能力。5v5 中你能在持续战中熬过战士,因为你的回血随你持续输出的伤害量缩放——而你的技能组每个冷却都在持续输出。

## 常见错误

- **对没有 Dream Dust 的敌人施放 R。** R 只会让已经携带被动层数的目标睡眠。先用 Q 或 E 命中他们;"空" R 只会施加短暂的睡意,而不是完整睡眠。
- **为了命中 W 而站着不动。** W 中心是爆发,但前摇很长。先与 E 减速配合:E 命中后,W 中心命中即使没有 Flash 起手也几乎确定。
- **在敌方战争迷雾中乱按 Q。** Q 每次施放都会暴露你。在敌方插眼的野区里清野时狂按 Q 会在他们小地图上画一个巨大的红色信号。安静进入,然后再投入。
- **忽视打野宠物升级。** 很多新手 Lillia 玩家因为清野过于高效而跳过 Hailblade 任务。一直观察宠物条——如果停在 "needs more XP",回城前再多走一个小野怪营地。
- **后期独自寻找 R 的击杀机会。** R 是团队起手工具,不是单独 gank 按钮。如果你 R 时队伍还在中途转线,睡眠时间会在他们到达前结束。先信号标记技能,数到 1,再投入。

## 进阶技巧

练习中路河道 R 起手的 "E 闪" 角度。从侧边草丛朝敌方中单移动,在他的行进路径上 flash-E,让种子落在他身后 (迫使他走入减速),然后在减速窗口里施放 R。减速保证你的被动层数在 R 结算前命中,所以睡眠是完整睡眠而不是部分睡意。在敌方处于转线状态、视野稀疏的资源点刷新时省下这次施放。
