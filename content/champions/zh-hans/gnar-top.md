---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "zh-hans"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Gnar 纳尔上单完整攻略:符文配置、小/大形态怒气管理、核心战士出装顺序、关键对线应对、强势期节奏把握、团战站位选择、新手常见错误规避,以及守卫插眼配合二段跳跃的高阶操作技巧。"
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "战斗中 Gnar 积累怒气。怒气满时下一个技能让他变身为大 Gnar:更高 HP、近战、新技能、回到小形态前不能用 R。"
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "小形态:长距离回旋镖,命中减速并飞回,接住可减少冷却。大形态:短距离巨石,撞到第一个目标停下并减速区域。"
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "小形态:每三次普攻或技能造成额外伤害并提供移速。大形态:跃起拍打前方区域,命中敌人受到眩晕。"
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "小形态:落地命中单位(小兵、守卫、野怪、英雄)可继续弹跳更远。大形态:重落造成范围伤害,无二次弹跳。"
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "仅大形态。把周围所有敌人沿指定方向击飞;撞墙者眩晕并受到额外伤害。整个游戏计划浓缩在一颗按钮里。"
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "敌方有 2 个以上硬 CC 或重法伤(Malphite R、Lissandra、Kennen)时替换 Plated Steelcaps"
    - dd_id: "3091"
      name: "Wit's End"
      against: "对线 AP 上单(Kennen、Vladimir、Rumble):魔抗加 on-hit 法伤,让小 Gnar Q+AA 仍然有威胁"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "面对强力法术爆发(Syndra 游走、Vex、双 AP 阵容):生命之线护盾挡住一秒秒杀窗口"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "对方有暴击核心(Yasuo、Tryndamere、滚雪球的 Caitlyn):减少受到的暴击伤害"
    - dd_id: "3075"
      name: "Thornmail"
      against: "对方有两个治疗源(Soraka + Aatrox、Yuumi + Mundo):重伤把回复砍半"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "Trinity 后单人分推边路时:对塔/兵线额外伤害,单人时获得属性加成"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "线上用小 Q 消耗积累怒气,投入团战前再变身大形态。把 R 当作墙壁眩晕开团,在团战和资源争夺中把敌方阵容切成两半。"
  weakness: "没有突进且变身被强制。如果在远离队友处变成大形态就没 Hop 回去;团战里仍是小形态就没 R。远程上单消耗小 Gnar 没有还手余地。"
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 主系:Grasp 在近战中每 4 秒触发,大 Gnar 顶上去切前排时完美。Demolish 把推线变成免费护甲板,Second Wind 治愈小 Gnar 受到的远程消耗,Overgrowth 让 HP 一路加到后期。"
    secondary_rationale: "Precision 副系:Triumph 助攻击杀回 HP(大 R 墙壁眩晕拿到人头时收益巨大),Legend: Alacrity 提供攻速,让小 Gnar 的第三次 Hyper 触发在每次交换中更快到来。"
    secondary_alternative: "对位远程消耗(Vayne、Quinn、Kennen、Teemo)时,把 Precision 换成 Sorcery,搭配 Nimbus Cloak(召唤师后获得移速)和 Gathering Storm(后期 AD 加成),拿到大形态距离并以耐力赢下后期。"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "无远程消耗的近战重坦战士"
      reason: "小 Gnar Q 射程 1100 还带减速。除非你贴上去,他们碰不到你,所以可以安全堆叠怒气,等大形态就绪后再用 R 墙壁眩晕脱身式投入。"
    - examples: ["aatrox", "renekton"]
      archetype: "全力期窗口有限的短距离战士"
      reason: "他们的强势点都在前期交换窗口里。小 Gnar 用 E 跳兵躲开全力期,等大形态上线后再以 R 眩晕加 Wallop 连招逆转局面。"
    - examples: ["nasus", "yorick"]
      archetype: "前期没有击杀威胁的成长型重坦"
      reason: "你用小 Q+W 推线,把他们的农野压制在塔下。他们没有比回旋镖距离更远的接近手段,无法惩罚你。"
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "在远距离消耗小 Gnar 的远程上单"
      reason: "小 Gnar 没有远程续航,唯一安全的交换是最大射程 Q。他们站在那个距离里普攻,把他推到塔下,完全没有回敬窗口。"
    - examples: ["fiora", "camille"]
      archetype: "带 %HP 真实伤害或硬 CC 突进的反坦克战士"
      reason: "Fiora 的命门撕开大 Gnar 的 HP 比他还击的速度更快;Camille 的 E 钩索把小 Gnar 钉到墙上,他没有突进,无法逃离这次全力期。"
    - examples: ["malphite", "ornn"]
      archetype: "破坏 R 角度的坦克开团位"
      reason: "他们在你变身并选好墙之前就 Flash 开团到你的后排。一旦他们的开团到位,你的 R 就只剩 peel(把敌人推离自家 C 位)而非决定胜负的 pickoff(对孤立目标的单杀)。"
---

## 概述

Gnar 是一名上单战士,根据用技能或受伤害积攒的怒气条在两种形态间切换。**小 Gnar** 是远程消耗型(消耗 = 在距离外慢慢削减敌人的 HP,不全力交锋),拥有长距离回旋镖和落到单位上可继续弹跳的跳跃;**大 Gnar** 是近战战士,拥有眩晕、范围伤害(area of effect:作用于一片区域而非单个目标的伤害),以及在墙壁附近时全游戏最优秀的低冷却大招。整个英雄都围绕变身的时机展开:线上用小形态安全消耗补刀,投入团战(commit = 全力交锋,不留退路)时切换成大形态,用 R 把敌人钉在地形上。

一句话计划:小形态堆叠怒气,在敌方阵容附近变身,把 R 砸向墙壁把多个目标眩晕(约 1.5 秒无法行动),队友跟进收割。在开阔地用大招就浪费了你唯一的胜利条件(英雄要赢就必须做好的那件事)。在线上独自变成大形态有死亡风险,因为小形态的逃生(Hop 落到小兵上能弹得更远)消失了。

## 推荐出装

**起始装:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's Shield 的 HP 回复正是为了应对每场小 Gnar 对线都会遭遇的持续远程消耗。

**核心装(按顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 每局必出第一件。由 Sheen(每次施放技能后让下次普攻附带额外伤害的部件)合成;Trinity 让这个触发(额外伤害的触发条件)在每次 Q 上生效,无论小或大形态。移速让小 Gnar 风筝(边后退边普攻保持距离)起来,攻速让 Hyper(小 Gnar 第三下的被动)更快回来。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对线物理输出时的默认鞋子(大多数上单对线)。降低受到的普攻伤害。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 随其他装备的额外 AD 增长的额外 HP,加上 30% HP 附近触发一次的护盾。让大 Gnar 活到能砸出 R 的瞬间。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — 把承受的物理爆发转成缓慢流血(伤害分摊到接下来几秒,不再瞬间结算)。在大形态投入的团战中赢得反应时间。
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 护甲加范围攻速减速(减速覆盖你周围一片区域里的所有敌人,不止一个)。当大形态 R 把普攻 C 位(Vayne、Tristana、Kog'Maw)钉在墙上后摧毁他们。

**情境装备:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 在重 CC(crowd control:阻止你行动的眩晕、定身、沉默)或 AP 阵容时替换 Plated Steelcaps。
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 对线 AP 上单(Kennen、Vladimir、Rumble)。提供魔抗加 on-hit 法伤(每次普攻附带的一点额外法术伤害)。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 面对重法术爆发(Syndra 游走、Vex、双 AP 阵容)。生命之线护盾在 HP 极低时触发,吸收法术伤害,挡住一秒秒杀窗口。
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — 对方有暴击 C 位(Yasuo、Tryndamere、起飞的 Caitlyn)。
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 对方堆叠两个治疗源时。施加重伤(让敌方治疗效果数秒内减半的减益)。
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — Trinity Force 后单人分推边路时使用。分推 = 队友在别处时你独自推进一条边路,迫使敌方派人来阻拦。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 默认。当敌方有 2 个以上硬 CC 或重 AP 伤害时换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点:** 优先加满 **W**(第三下 Hyper 的伤害每级提升最多),其次 **Q**(更长减速 + 更短冷却用于消耗),最后 **E**。**R** 在 6、11、16 级点出。

**符文:** 主系 **Resolve**,搭配 **Grasp of the Undying**、**Demolish**、**Second Wind**、**Overgrowth**。副系 **Precision**,搭配 **Triumph** 和 **Legend: Alacrity**。

## 关键对线

- **Sett:** 免费线。小 Q 比他所有招式都远;绝不要走进他的 W(Haymaker)。当他贴上来时,Hop 跳到兵线小兵身上弹回安全位置。
- **Aatrox:** 6 级前打平,你 outscale 他(随着比赛进行你会比他更强)。避开他 Q 的甜点位(挥击中央的明亮区域,造成额外伤害的位置)。一旦你拿到大形态 R 加他身后的墙,他每次发起的 all-in(全力到底的死斗)都会输。
- **Vayne:** 硬克制。后撤,用最大射程 Q 补兵,接受这条线被压制(还手就死)。大形态就绪后向中路游走(离开自己的线去帮另一条)或入侵敌方野区。
- **Camille:** 对线输,后期赢。小形态时避开她 E 钩索的距离(她把你钉在墙上烧掉你的 Flash —— Flash 是把你瞬移一小段距离、5 分钟冷却的召唤师技能,你的紧急按钮 —— 然后再次开团)。把 E 留到她突进进来之后,绝不在之前用。
- **Malphite:** 线上还行 —— 小 Q 永远风筝他 —— 但要小心 6 级。他在团战里 Flash 大招到你后排(站在队伍后方的 C 位),会毁掉你 R 的角度。告诉队友散开,让他的大招无法同时打到两个人。

## 强势期与胜利条件

- **2 级:** Q + W 让你在面对近战战士时赢下大多数短交换(线上短促的伤害交换,而非完整团战)。走上兵线,Q 穿过小兵命中敌人,第三次普攻触发 Hyper 的额外伤害。
- **6 级:** 第一次大形态 R 解锁对低 HP 敌人的越塔(承受塔伤进入敌方塔下击杀)。在踏入塔下之前用大形态堆叠怒气即可。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 完成 (~ 12-14 分钟):** 你最大的单件强势期(变得明显更强、应主动找团的瞬间)。小 Q + 普攻像卡车一样;眩晕后大形态 Q + W 连招秒杀脆皮(高伤害低防御的英雄,如 ADC 和法师)。
- **三件套大形态 R 团战 (~ 22-26 分钟):** Sterak's + Trinity + 鞋子到位后,大 Gnar 能穿过前排(从前线开团的坦克和战士)追着 R 进后排(在后方输出的 C 位),打出 2 至 3 人眩晕。在这里强行打集合资源团(双方都聚在一起的小龙/纳什抢夺)。

## 常见错误

- **没有团战准备就在线上变大。** 大形态没有逃生(没有 E 突进),会保持约 15 秒才回小形态。如果打野不来你也不准备投入团战,把怒气压在 80-90%,信号让队友后撤,让条自然下降。
- **在开阔地丢 R。** 目标身后没有墙时,GNAR! 只是一次击退(把敌人强制推开一小段距离的位移),只能打断他们的突进而已。永远先调整位置;花半秒对齐墙壁换来多人眩晕值得。
- **用 Hop 进而不是 Hop 出。** 大多数对线里小 E 是逃生,不是开团工具。E 进的唯一正确时刻是怒气正在涨,你身后又有可弹回的明确小兵。
- **在线上无脑 W 来"强行"触发 Hyper 的额外伤害。** 第三下的额外伤害对每次普攻和每次技能都触发。以两个技能 + 一次普攻的节奏交换,而不是三连普攻把自己挤出位置。
- **失控的团战中变身。** 受伤害也加怒气。怒气 95% 时撤退,下次普攻一只小兵就在自家野区变成大形态,而没有敌人可以 R。要么提前投入团战,要么直接回城。

## 进阶技巧

兵线没了的时候,可以用 Hop 跳到 **守卫和饰品** 上。守卫是放在地图上提供视野的小型魔法之眼;基础黄色那个是辅助饰品 **Stealth Ward**,粉色 **Control Ward** 则是敌方为了反掉视野而插的真眼。每一个都算可被小 Gnar 落地的单位,可以触发延伸的二段 Hop。提前在敌方野区入口附近插一个 Stealth Ward,然后 E 跳上去把射程延伸约 400,可以用 Q 突袭一个反野的敌人。同样的技巧也能救你于 gank:从自己的守卫跳进三角草丛(每条线附近的三丛灌木群),gank 来的人就没有后续手段了。
