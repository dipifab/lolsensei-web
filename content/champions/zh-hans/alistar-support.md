---
title: "Alistar Support Build & Guide — Patch 16.9"
slug: "alistar-support"
language: "zh-hans"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Alistar 牛头辅助完整攻略:起始装备选择、坦克 engage 核心出装顺序、Resolve 符文细节、关键对线思路、强势期与团战开团时机、新手常见错误规避,以及 flash-W-Q 极限秒杀连招的高阶操作技巧。"
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar 控制或位移敌方英雄,或附近敌人(小兵、野怪、英雄)死亡时,会为咆哮充能。完全充能后,下一次咆哮治疗自身和附近队友。"
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "重击身边地面,把范围内所有敌人 knock-up 1 秒。射程很短,必须先贴脸。"
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar 冲向目标,造成伤害并把对方直线击退。核心 engage 工具:紧接着 Q 触发 W-Q 连招(把对方击退到自家队伍中,再立刻顶起来)。"
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "持续 5 秒踩踏周围地面,免疫小兵碰撞并造成伤害。每次脉冲命中英雄叠加一层 — 5 层时下一次普攻会眩晕该英雄并造成额外伤害。"
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "立刻清除 Alistar 身上所有 crowd control,并在持续时间内提供大幅伤害减免(物理 + 法术)。要在 engage 进 CC 多的团队之前提前打开,而不是团已经打完了再交。"
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
      against: "对位高强度普攻下路 (Caitlyn, Draven, Tristana) — 前期 harass 比后期 CC 更痛时从 Mercury's 替换"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "对位堆叠攻速的 carry (Tristana, Kog'Maw, Master Yi) — 大范围光环减慢他们的攻击速度"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "对位 AP 爆发阵容 (Syndra mid + Brand support 这类双法师) — 脱战自动恢复的法术护盾被动"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "在团战中把 W-Q 连招(Headbutt 击退 + 立刻 Pulverize 顶起)精准砸到对面的脆皮核心 carry,开出一波你队转化的团。如果对面有 hard CC,engage 前先开 R,让 CC 链直接弹掉。"
  weakness: "engage 距离极短 — 必须贴脸才能命中 Q。前期蓝量紧张、零远距离 poke;对面下路如果选择消极发育,你直接失去线权,只能靠 roam 维持影响力。"
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
      archetype: "没有自带 hard CC 的脆皮 enchanter"
      reason: "他们没办法阻止 flash + W-Q 连招。一旦 knock-up 落到他们头上,他们就会在 ADC 来 peel 之前直接死 — Sona 与 Yuumi 尤其没有任何位移逃生。"
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "没有位移的 immobile ADC"
      reason: "W 距离 650、point-and-click:没有位移或闪现的 ADC 每次走上来补刀都吃整套连招。一旦你 commit,他们跑不掉。"
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "skillshot 远程消耗、缺位移的法系辅助"
      reason: "他们的 poke 能逼出技能 CD,但叠了 Q 的 Trample 加 flash-Q 一砸过去就是秒杀:你只要拉近距离,他们的射程优势就毫无意义。"
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "拥有主动 peel 的 disengage enchanter"
      reason: "Lulu 的变形会在你 W dash 中把你打断,Milio 的 R 远距离清掉你的 knock-up,Renata 的 E 直接把 carry 拉出连招范围。你唯一一次 engage 被白嫖。"
    - examples: ["xerath", "karma", "morgana"]
      archetype: "射程更远、带护盾或束缚的远程消耗"
      reason: "他们在 900+ 距离免费啃你血,你完全没有反制手段。Morgana 的黑盾会整个挡掉你的 Q knock-up — 闪进去等于白送。"
    - examples: ["nautilus", "leona", "rell"]
      archetype: "射程更远的 hard CC 坦克 engage 辅助"
      reason: "他们的第一手命中比你进 Q 距离还快:Nautilus 的 Q 钩、Leona 的 E 突进眩晕、Rell 的 W 冲撞 — 全都打你 W 的距离外。你吃他们的 engage,他们不吃你的。"
---

## 概述

Alistar 是一名 **vanguard support**(职责是开团而不是治疗队友的坦克型辅助) — 他通过直接跳到对面 carry 身上,用 crowd control 把对方钉在原地。他的整套技能围绕一个标志性连招:**Headbutt (W)** 冲向目标并直线击退,紧接着在自己脚下立刻补一发 **Pulverize (Q)** 把对方顶起来。完整连招(W 接 Q)把敌人击退**回你队伍方向**,再悬空整整一秒 — 时间足够你队 ADC 走上来打满一套伤害。**Trample (E)** 提供短暂的 **ghosted**(无视小兵和其他单位的碰撞)位移,以及 5 层后下一次普攻触发的 stun **proc**(达到条件即触发的层数效果)。**Unbreakable Will (R)** 清除身上所有 crowd control 并提供大幅伤害减免 — 这就是为什么 1 HP 的 Alistar 也能踩着 Morgana 的束缚把人头收掉的原因。

游戏思路:对线时往前站一点 **bait**(诱使对方上头);对面 ADC 走上来补刀的瞬间,Headbutt 把人推回来、Q 顶起、踩着对方让 Trample 叠层,你 ADC 转化击杀。中期靠 Trample 的 ghosted 位移加召唤师技能的灵活性 **roam**(脱离下路去支援中路或打野) — 别的辅助卡住的兵线 Alistar 直接穿过去。后期站在前排,用 **R** 吃掉对面的 CC,再 engage 那个被秒掉就能结束战斗的 carry。

## 推荐出装

**起始装备:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**(辅助通用起始装)加 2 瓶 Health Potion。线上不要补刀,把金币让给你 ADC,World Atlas 通过自己的任务条单独发放金币。

**核心装备 (按购买顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 起始装。随着任务进度自动进化为 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** 与 ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**,最终升级为你选择的后期成品。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 法术抗性加 **tenacity**(缩短 crowd control 持续时间的属性)。开团坦克的默认鞋子:更短的眩晕和减速意味着你 commit 完 **W-Q** 之后不会立刻被反控锁死。
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 主动技能给附近所有队友数秒护盾。在 engage 的瞬间立刻按下,让你的队伍吸收对面的第一波 **burst**(团战前 1-2 秒倾泻的高额伤害)。
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 把你和你 **ADC**(Attack Damage Carry — 下路靠普攻输出的队友,后期主要伤害来源)绑定:他承受的部分伤害会转移到你身上,作为交换你也会回血给他。永远绑定那个最需要你帮他延长生命的 carry。
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 你辅助装备的 engage 向后期成品(World Atlas 完成任务后会自动进化为这一类之一)。携带 **Spellblade** 被动:你释放任意技能后(W Headbutt、Q knock-up、R cleanse,甚至 E Trample 的一次脉冲),下一次普攻造成额外的物理伤害 on-hit,如果命中敌方英雄,该英雄在接下来 4 秒内受到所有来源的伤害都被增幅。运营节奏是"技能 → AA → 技能 → AA"贯穿整场团战,而不是"控完再 AA"。

**情境装:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 提供护甲并减免普攻伤害的鞋子。当对面下路高度依赖普攻(Caitlyn, Draven, Tristana),线上 **harass**(消耗与持续掉血)比对面后期 CC 链更痛时,从 Mercury's Treads 切换。
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 大范围光环减慢周围敌人的普攻速度。对位堆叠攻速的 carry(Tristana, Kog'Maw, Master Yi),你工作从 engage 转为 **peel**(保护自家 carry 不被对面切死)时购买。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — 脱战恢复的法术被动护盾。对位 AP 爆发阵容(Syndra mid + Brand support 这种双法师配置)时购买 — 护盾能完整吃掉一个大招,让你在自己开出的 engage 里活下来。

**鞋子:** 默认 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 用 tenacity — Thresh 一秒的 stun 变成半秒,给你足够的窗口把 **R** 接进 engage。只有当对面下路比对面后期 CC 链更痛时,才在合成成品前换成 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**加点顺序:** 主升 **E**(Trample) — 对线伤害来源,加上让你在 Q 后多一段 crowd control 的 stun proc。副升 **W** — 冷却越短开团窗口越多。最后升 **Q**(主要是收尾;升级几乎只增加伤害,knock-up 时间几乎不变)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve**(防御系 — 坚韧)带 **Aftershock**(每次施加 crowd control 都获得几秒的免费护甲与法术抗性,每次 Q knock-up 都触发)、**Font of Life**(你的 CC 给目标加上标记,攻击该目标的队友少量回血)、对位后期阵容选 **Conditioning**,对位早期爆发选 **Bone Plating**,加 **Unflinching**(使用召唤师技能时获得额外 **tenacity**,即缩短自己 crowd control 持续时间的属性)。副系 **Inspiration**(功能系)带 **Hextech Flashtraption**(长冷却的备用短距离 Flash — 突袭式 W-Q 连招的金钥匙)和 **Cosmic Insight**(降低召唤师技能与装备主动的冷却)。**Stat shards**(符文页底部的三个小属性):Adaptive Force / Adaptive Force / Health(Adaptive Force = 根据你技能组使用的伤害类型转化为 AD 或 AP)。

## 关键对线

- **Leona:** **engage** 镜像(双方都想开团)。她的 CC 距离比你长(Zenith Blade 的突进眩晕、R Solar Flare),所以在她技能没空时不要先开。等她交完 E,你的 10 秒空窗就开了 — 趁她没后续手段时 flash-Q 切她 ADC。
- **Pyke:** Skill matchup — 纸面上没有明显优劣,看谁玩得更好。Q 的 poke 比你强,**stealth**(穿越草丛时进入隐身状态)的 roam 也比你强。在河道深处插眼,把战斗场地强制留在不能让 R 重置击杀的兵线上。
- **Lulu:** 对你 **all-in**(全压全力击杀)的硬克制。变形会在你 W dash 中途把你打断。她变形冷却好的时候不要 engage;追踪她的 cooldown,只在变形空窗的 13 秒内强行开团。
- **Soraka:** 纯粹的 **sustain enchanter**(靠保持 ADC 存活而不是开团赢的治疗向辅助),没有自带的 engage 工具。她 Flash 没好的时候你随时可以 flash-Q 直接砸 — 她在 ADC 反应过来之前就死在你连招里。
- **Senna:** 长射程 **poke** 对线(远距离持续掉血消耗)。她在塔下蹲血压制你。不要还手,接受这条线吃亏,带 Mobility Boots roam 中路或反野 — Alistar 这条线输了,但他的全局节奏赢了。

## 强势期与胜利条件

- **2 级 (Q + W):** 第一个强势期。两个技能都到位的瞬间整套 W-Q 连招就解锁了。如果对面 ADC over-extend(站位越过自己的第一波 **wave** — 即将到达的小兵线),只要你 **Flash** 还在就是免费人头。
- **6 级 (R 解锁):** engage 潜力爆炸。**Unbreakable Will** 让你从一波就死的 **diver**(扎进对面后排马上死的英雄)变成可以踩着 hard CC 再次 engage 的坦克。你可以 flash-Q 砸 Morgana,吃她的束缚,R 强解,然后再补一发 Q 切她 ADC。
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari 完成 (~ 14-16 分钟):** 第一件团战装就位。你的 engage 现在自带一个免费的全队护盾。集合队伍打 **Drake**(下路河道的小龙资源点 — 击杀提供永久属性 buff)或 **Voidgrubs**(上路河道的虚空小型生物 — 击杀方获得对建筑的额外伤害)。
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong 后期 (~ 24-30 分钟):** Spellblade 触发加上对英雄 4 秒的伤害增幅,让你整套连招变成一段 DPS 序列。现在 W → AA → Q → AA 不再只是给你 ADC 铺垫 — 单凭它就能砍掉一个 **squishy**(防御薄弱的英雄,比如 ADC 或法师)25-30% 的 HP。

## 常见错误

- **W-Q 方向打反。** Headbutt 把目标朝你站位的反方向直线击退。如果你从下方 W,就是把人推到上面的兵线(远离你队)。永远从 **flank**(侧面角度)W,knockback 才会把对面 carry 推进你队伍的输出范围,而不是推回他们队伍的保护圈。
- **没有后续就 engage。** Alistar 没有 ADC 和队友跟着,就是一个没有伤害的坦克。如果 ADC 回家了或者打野在地图另一边,憋住 W。4v5 单人 engage 等于把你 R 的冷却白白送给对面团队。
- **R 提前燃烧来逃命。** **Unbreakable Will** 是进攻工具,不是逃跑按钮:它给你伤害减免和 CC cleanse,但没有移动速度。在没有队友的情况下用它来跑,只是把死亡延后 5 秒。把 R 留给你即将 commit 的 engage,而不是用在本来就不该需要的 disengage。
- **在小兵身上叠 Trample。** E **只有**击中敌方英雄时才叠层,小兵不算。在空兵线上等 stun proc 充能毫无用处。proc 只有能接到队伍输出里时才有意义。
- **战斗中不点被动。** **Triumphant Roar** 通过你施加的 CC(Q、R、E proc)和**附近敌人死亡**(小兵、野怪或敌方英雄)充能。在小兵和野怪在你身边接连死掉的团战里,你能反复叠满治疗。在动作之间点一下被动键:你和身边 ADC 50-100 HP 的免费回血足以扭转一波团。

## 进阶技巧

**flash-W-Q 一波秒杀**。先向前 Flash,然后在同一帧上对核心目标释放 **W**:dash 是从你 flash 后的新位置出发,而不是敌人原本预判的 hitbox 位置。然后在 W 的 dash 动画里就把 **Q** 排进队列 — Pulverize 在 W 的击退结束的瞬间触发,两段 crowd control 之间没有空隙。做对了之后,目标在屏幕上只看到一秒的 knock-up,然后还没反应过来就死了。这一套就是 muscle memory(手指的自动反射):把 Flash + W + Q 绑到同一只手伸手可及的键位上,然后到 **Practice Tool** 里反复练习节奏,直到能在半秒内打完三个键。这就是把 Alistar 从"帮忙的坦克"变成"终结战斗的坦克"的核心机制。
