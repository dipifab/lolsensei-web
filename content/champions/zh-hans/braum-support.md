---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "zh-hans"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Braum 弗雷尔卓德之心辅助完整攻略:起手装、坦克 peel 核心出装顺序、Resolve 符文选择、关键对线匹配处理、强势期节奏把握、新手常见错误规避,以及 flash-R 等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Braum 的普攻会叠加一层 Concussive Blows。第一层挂上后,队友的普攻也会继续叠层。叠到 4 层时目标被晕眩并受到法术伤害。Q 可以远程叠一层。"
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "远程直线 skillshot,造成减速与法术伤害。关键在于它能远程叠一层 Concussive Blows,是不必走进普攻距离就能开启 4 层晕眩链的 setup 工具。"
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum 跳向友方英雄或小兵。落地时 Braum 与该队友都获得几秒的 armor 与 magic resist。招牌 peel 工具:跳到 ADC 前面替他 body-block 入射伤害。"
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum 在指定方向举起盾牌数秒:拦截该方向飞来的所有 projectile,完全免疫第一次普攻,并降低之后所有同方向普攻的伤害。"
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum 砸地,身边及前方直线上的敌人被击飞。直线上留下一条冰封裂隙,穿过的敌人被减速。冷却很长,是团队的核心开团或 peel 按钮。"
      dd_spell_id: "BraumRWrapper"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对位普攻强势的下路 (Caitlyn, Draven, Tristana),前期消耗比后期 CC 更难受时,从 Mercury's 换过来"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "对位 ADC 是主 carry 且贴身阵容 (Aphelios, Jinx) — R 减速会在 bonded ally 身边触发"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "对位 AP 爆发阵容 (Syndra mid + Brand support 这种双法师) — 法术护盾被动能吃下一发大招"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "把 Q 命中优先级 carry,走上去用普攻打出 4 层晕眩,然后整场用 W 跳与 E 盾墙 peel 自己的 ADC。敌方团抱开打时用 R 拉一条击飞带。"
  weakness: "缓慢且无位移 (没有 dash, 没有 blink):远程硬 CC 一下就能把你切离 ADC。Q 是 skillshot,打不中线上就毫无威胁,R 浪费一次会让你被赶出下一波团战。"
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
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "没有 dash 的 immobile ADC"
      reason: "Q 射程 1000,远程就能叠一层 Concussive Blows。面对没有逃生技的 ADC,一发 Q + 你 ADC 一下普攻 + 你自己的普攻就能凑齐 4 层晕眩链,他们没办法打断这条链。"
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "没有硬 CC 的脆皮 enchanter"
      reason: "她们没办法阻止你的 walk-up。Q 一旦命中就没有 peel 救自己 ADC,而她们想丢出来打断治疗的 skillshot 全被你的 E 挡掉。"
    - examples: ["draven", "lucian"]
      archetype: "为了打 trade 而向前压的激进 ADC"
      reason: "他们的技能要求走进 Q 距离扔斧子或 dash-AA。每多走一步就是一层免费 Concussive Blows — 要么后退丢线优,要么硬吃 4 层晕眩。"
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "带指向性勾拉或晕眩的 hook 辅助"
      reason: "钩子命中会把 Braum 拉出 ADC 的 W 距离。Braum 在后排被打,敌方 ADC 直接秒掉失去保护的你方 carry。"
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "射程超过 Q 的远程 mage 辅助"
      reason: "他们坐在 1100+ 距离白嫖你血量。Braum 在 Q 之外没有任何回应,E 只有近身才有效 — 对线被消耗到崩盘。"
    - examples: ["ashe", "varus"]
      archetype: "靠内置减速 self-peel 的 ADC"
      reason: "她们普攻自带减速,把 Braum 钉在臂长之外。他无法接近 W 距离去 body-block,peel 套件半残,自己一方的 frontline 更快被冲垮。"
---

## 概述

Braum 是一名 **warden support** (坦克类辅助,职责是保护自己的 ADC,而不是先开团) — 设计用来把敌人从自己的 carry 身上 peel 开,而不是去 dive 对面的 carry。整个技能组只围绕一个威胁:**Concussive Blows**,这条被动会让任何被 Braum 或队友普攻 4 次的目标晕眩。关键技巧:**Winter's Bite (Q)** 在 1000 射程外就能叠一层,所以 Braum 先 Q 一发,走上去,他自己的一下普攻加上 ADC 的一下普攻就能在敌方 carry 身上打出晕眩。**Stand Behind Me (W)** 是跳向任意友军的位移,落地时双方都获得 armor 和 magic resist — 这就是让他独一无二的 **peel** (保护你的 carry 不被人击杀) 工具。**Unbreakable (E)** 是方向性盾牌,会 **body-block** 所选方向飞来的全部 projectile (ADC 的普攻、Caitlyn R、Ezreal R、Ashe R)。**Glacial Fissure (R)** 是 AOE 直线击飞:冷却很长,用作开团,或者在他们 **diver** (跳进后排的英雄) 落到你 carry 身上时当紧急 peel 按钮。

游戏思路:对线时只要敌方 ADC 上前补刀就 **poke** (远程 chip 伤害) 一发 Q,然后走上去普攻触发晕眩 — 你的 ADC 在那 1 秒窗口里全力输出。6 级之后带着 R **roam** (离开下路去帮助中路或打野) 制造抓人:你的 **lead** (前期优势) 来自把 Q-stun 转化成资源,而不是单杀。后期站在 ADC 前面一步,他被开瞬间用 W 跳回去,任何来袭的 **skillshot** (需要瞄准的技能) 路径上都掏 E — Braum 是唯一能在 Caitlyn 大招读条途中拒绝伤害的辅助。

## 推荐出装

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (辅助统一起手装) 加 2 瓶 Health Potion。线上不要去补兵:把金币留给 ADC,World Atlas 自己通过任务进度独立给你结算金币。

**Core items (按顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 起手装。它会随着任务进度自动进化,经过 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** 与 ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**,最终变成你选择的终局升级。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 提供魔抗与 **tenacity** (减少你身上控制效果持续时间的属性)。peel 坦克的默认鞋:更短的晕眩意味着你能在 ADC 倒下之前赶到 W 距离。
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — 辅助装会进化出来的、专注 peel 的终局升级。每次你对英雄施加 CC (Q 减速、被动晕眩、R 击飞) 都会让附近敌人额外减速,并给你和附近一名队友移动速度爆发 — 正好用来追低血或者 kite 回到自家 carry 身边。
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 与你的 **ADC** (Attack Damage Carry — 下路靠普攻输出的队友,团队后期主力 carry) 绑定:他承受的部分伤害转移到你身上,你也会回血给他。永远绑定那个最需要被保住的 carry。
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 给附近所有队友几秒护盾的 active。在敌人 commit 开团那一瞬间按下,让全队吃下他们的第一波 **burst** (开战 1-2 秒内倾泻出来的高额伤害)。

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 提供护甲并降低普攻伤害的鞋。在敌方下路普攻强势 (Caitlyn, Draven, Tristana) 且他们的 **harass** (持续 poke 与消耗) 比对面后期 CC 更难受时,从 Mercury's 换成它。
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — 与 ADC 绑定。你对敌方施加控制 (Q 减速、R 击飞) 时,bonded ally 的下一次普攻造成范围法术额外伤害 — 当你 carry 始终贴身 (Aphelios, Jinx) 而你 Q 前排时正好为他的第一下普攻铺路。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 脱战后再生的法术护盾被动。对位 AP 爆发阵容 (Syndra mid + Brand support 这种双法师) 时购买 — 护盾能吃下一发完整大招,让你继续 peel 而不是先死。

**Boots:** 默认 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 取 tenacity — 一段 2 秒的 Morgana 缠绕缩短到 1.2 秒,正好留给你 W 回 ADC 的窗口。只有当敌方下路普攻强势且消耗压力比对方后期 CC 更大时,才在合成前换成 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**Skill order:** 优先点满 **Q** (Winter's Bite) — 这是你唯一的远程伤害,也是叠层来源,5 级时冷却从 8 秒降到 6 秒 (poke 更密、压线更强)。其次点满 **E** (Unbreakable) — 盾持续时间更长,团战 peel 更干净。最后点满 **W** (跳的冷却变短,但低级时数值最关键的是 armor/MR,而 W 目标几乎不会缺)。**R** 在 6、11、16 级各点一级。

**Runes:** 主系 **Resolve** (防御系 — 强韧度) 配合 **Aftershock** (你施加 CC 时几秒内白嫖 armor 与 MR,被动晕眩和每次 R 都能触发)、**Font of Life** (你的 CC 标记目标,队友攻击该目标会回血)、对面后期型阵容选 **Conditioning**,对面前期爆发型选 **Bone Plating**,以及 **Unflinching** (使用 summoner spell 时获得额外 **tenacity**,即缩短自身 CC 持续时间的属性)。副系 **Inspiration** (功能系) 配 **Hextech Flashtraption** (一段长冷却的备用短距 Flash — 用来玩出意料之外的 R 角度) 与 **Cosmic Insight** (减少 summoner spell 与 Locket active 的冷却)。**Stat shards** (符文页底部的三个小属性增益): Health / Health / Health — Braum 与纯生命值挂钩,前期肉度让你能放心走上去叠 Q 层数。

## 关键对线

- **Leona:** 她的 **engage** (她想先开战) 对你的 **peel** (你想阻止她开团)。她的 CC 射程比你长 (Zenith Blade dash-stun, Solar Flare R),前期不要尝试 body-block — 站在 ADC 后一步,Zenith Blade 一出就用 W 远离。等她的 E 进冷却时,你有 10 秒窗口走上去白嫖 Q 叠层她的 ADC。
- **Pyke:** 技术对位 — 纸面没有明显优劣,谁玩得好谁赢。他用 Q poke 你,在 **stealth** (穿草丛时隐身) 中游走也比你快。在河道草丛里铺好深视野,在他的 R 重置无意义的线上强开打,把 E 抬在他 R 钩飞行轨迹上,挡住对你 ADC 的拉拽。
- **Lulu:** 硬克你的 **all-in** (全力击杀 commit)。她的变形会在普攻链中途打断你 — 4 层晕眩打不出来。变形可用时不要 commit;追踪冷却 (1 级约 13 秒),只在它进入冷却的窗口里强行换血。
- **Soraka:** 纯 **sustain enchanter** (靠保住 ADC 而不是开团取胜的治疗型辅助),没有自己的开团手段。你能赢换血:她无法阻止你 Q + walk-up,而她的治疗大约只有你晕眩伤害的一半。每当她的 Q 进冷却,就强行打一次短换血。
- **Senna:** 长距离 **poke** 对位 (远程 chip 伤害磨血)。她用穿小兵的 Q 在塔下慢慢压你血量。站在兵线后排,让她的 Q 只能从你的小兵身上回血却打不到你,只在打野下半野时换血 — 没有 dash 的 Senna 一条 Q-stun 链就死。

## 强势期与胜利条件

- **2 级 (Q + W):** 第一个 spike。完整的 **Q + 走上去普攻 + ADC 普攻** 链条只有在你拥有 W 作为第二技能时才解锁,因为 W 让你能在反伤之外重新找位置。一个过度推线的敌方 ADC (越过第一波 **wave** — 即将到来的小兵线 — 太远的 ADC) 会在一条叠层链里掉 30% 血。
- **6 级 (R 解锁):** 开团与 peel 同时拔高一档。**Glacial Fissure** 是一条长直线击飞,你的 ADC 能转化为击杀;反之也是他们 Zed 跳上你 carry 时的紧急 peel 按钮。可以走 Flash-R 制造对方意想不到的角度 — 闪现向前接 R 是出其不意的抓人工具。
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh 成型 (~12-14 分钟):** 第一个团战装上线。CC 触发的移动速度爆发让你能穿过兵线追低血敌人,或者 kite 回到摇摇欲坠的 carry 身边。开始与团队抱团去打 **Drake** (下路河道的小龙 — 击杀给团队永久属性增益) 或 **Voidgrubs** (上路河道的小怪 — 击杀方对敌方建筑造成额外伤害)。
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 终局 (~22-26 分钟):** 有了 Locket 与高 E 利用率,你的团队能挺过 wombo combo (一连串团战开团连招)。你的工作变成用 E 墙挡住敌方 carry 的伤害锥形,同时己方先杀掉对面 carry。

## 常见错误

- **空 Q 不上去普攻。** 单纯一个 Q-减速不构成击杀威胁 — 敌人慢慢走出距离,你白白丢了 8 秒冷却。Q 是 **setup** (为击杀做准备的招,而不是击杀本身);Q 一命中就立刻走上去补普攻。没有普攻,Concussive Blows 层数几秒就掉,这一波线权重置就毫无意义。
- **ADC 已经死了才 W。** W 在 1 级时是 12 秒冷却、650 跳跃距离。如果你等到 carry 只剩 20 血才跳,resist 加成到得太晚。规则:看到敌人开团的 **同一瞬间** 就 W 给 ADC (Leona Q 飞起、Blitz 钩在空中、Zed 影子跳进来),而不是他血量归零之后。
- **白白挡在前面。** Braum 的 E 只保护你面对的方向。如果你在 ADC 后面,它什么也不挡。默认站位是在 ADC 前一步,并向预期 **敌方伤害源** 多迈一步 — 面向 Caitlyn,而不是面向自家打野。
- **R 浪费在单一目标上。** **Glacial Fissure** 是 100-130 秒冷却的 AOE 直线击飞。用它去开一个本来就快死的边路单兵就是免费 **throw** (主动送出优势) — 你刚把自己赶出下一波团战。R 只在 2 个以上敌人在直线上、或者你 carry 没了这次紧急 peel 就会死时使用。
- **忘记被动叠层会重置。** Concussive Blows 的层数会在没有新一层进入的几秒内 **掉光**,而一个目标刚刚被晕眩之后,这同一目标在数秒内不能再被叠层。对一个刚被晕眩的 ADC 一直 A 啥也加不出来 — 转向下一个优先级目标,或者后撤重置 W 抗性计时。

## 进阶技巧

**flash-R** 角度。Braum 的 R 是身前 1250 距离的直线;cast 前摇足够短,可以 Flash 向前 → 立即按 R,让直线从你 **新的** 闪现位置生成 — 抓到那个以为自己在 1500 距离外安全的后排 carry。把 Flash 与 R 绑到同一只手够得到的位置,在 **Practice Tool** 里反复练到两个键能在五分之一秒内连出。留给团队已经抱团的团战:flash-R 同时圈住敌方 ADC 与辅助会直接转化为干净的团灭,而同样的 R 用在一个孤立的中单身上,只是把长冷却扔在了一次小遭遇上。
