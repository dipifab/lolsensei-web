---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "zh-hans"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Anivia 冰雪女皇中单完整攻略:起始装备、控制法师核心出装顺序、关键对线应对、强势期把握、新手常见错误避坑,以及一条进阶 Q 视野技巧,一页讲完。"
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "受到致命伤害时,Anivia 化作不可移动的蛋数秒。蛋若存活则满血复活。冷却很长 — 一场战斗里别让对方骗到两次。"
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "远距离直线 skillshot,冰球沿途减速敌人,飞至最远处爆炸并 stun。可再次施放提前引爆。"
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "数秒内召唤一道宽阔且无法穿越的冰墙。阻挡所有移动 (包括你自己) 与穿过它的位移。"
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "短距离指向爆破。若目标被 Q 或 fully formed R 施加 Chilled,则造成两倍伤害。"
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "地面切换技:暴风雪持续减速并造成法术伤害的 tick。完全成型后施加 Chill,使范围内 E 触发两倍伤害。"
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与 assassin (Zed, Akali, Diana) — 金身能撑到 R 冷却好"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位会打断 R 切换的单体法术 CC (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox) — R 在大范围内施加 grievous wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标完成第一件魔抗装就立刻替换"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "在最大射程命中 Q 施加 Chill,接 E 打出双倍伤害,然后把 R 落在他们脚下,所有被减速的目标会再吃一次强化的 E。用 W 把对面其他人挡在外面,确保人头不被打断。"
  weakness: "速度慢、无位移、基础护甲低、前期 mana hungry。Q 没命中 trade 就崩,diver 在 R 完全成型前就贴上来。Wind Wall 与沉默直接废掉整套技能。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Anivia 的 Q + W 锁死无位移法师:他们躲不开 chill 接双倍 E,清线被切断时也绕不过墙。"
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize 切断所有近战 engage 路线;再加 E 推线、R 清兵,她安心 farm,而对方不交 Flash 根本贴不上。"
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize 在 engage 一瞬间把对方一分为二:墙若隔在先手与后手之间,wombo 只砸到一两个人,而不是五个。"
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "他们能在她施法间隙突进 E 距离;她没有位移,蛋也只有一颗,连续 dash 在 R 没成型前就把她秒了。"
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall 把 Q 整个挡掉 (chill 根本不生效),她最大输出威胁直接崩掉;没有 chill,E 伤害减半,对线变成她赢不了的 melee fight。"
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "对线全程 outrange Anivia 的 Q,在她威胁圈外消耗;她没有机动性拉近距离,也无法惩罚他们的冷却。"
---

## 概述

Anivia 是一名远程 control mage,拥有两条命的 HP、缓慢却覆盖巨大的大招,以及全游戏唯一的不可穿越墙。她的 kit 严惩走位失误:**Flash Frost (Q)** 施加 **Chill** (kit 其余技能围绕的命名减速状态),**Frostbite (E)** 对 Chilled 目标造成两倍伤害,**Glacial Storm (R)** 让范围内所有人持续 slowed。她用机动力换 utility — 没有位移,但 **Rebirth (P)** 在蛋存活时给她第二次生命。

中路的游戏思路一句话能讲清,但执行起来要命:用 **R** + **E** shove (把兵线推进对面塔下) 兵线;敌人踩进河道或野区时透过迷雾甩出 **Q-E** 连招;用 **Crystallize (W)** 切断 engage (engage = 一场团战开始的瞬间),或在 dive (敌人扑过来想 burst 你 — burst = 1-2 秒内集中爆发的高伤害) 中救人。在任何分段她都能靠守住别人守不住的线赢下比赛 — 一面 fully formed (完全成型) 的 **R** 就是一堵持续法术伤害的墙。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Anivia 早期 mana hungry,需要 AP 与蓝量回复来支撑每波兵线两发 **Q** 而不空蓝。

**核心装备 (按顺序):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (集中伤害的爆发节点) 加蓝量续航,让你 **Q-E** 不再受蓝量限制。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿 (削减一个固定数值的敌方 MR),放大 **E** 对 squishy (防御薄弱的英雄,通常是 ADC 与 mage) 的双倍伤害。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 倍率装,把已经强势的 burst 的 scaling (一个英雄随每件装备和等级变强的幅度) 推进 one-shot 区间。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,加上一个 HP-threshold passive (目标低于约 35% HP 时触发的被动),正好与 **E** 收尾对齐。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver 与 assassin (Zed, Akali, Diana)。stasis (短暂无敌冻结) 撑到 **Glacial Storm** 冷却好。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会打断 **R** 切换的强力单体法术 CC (Ahri charm, Lissandra R, Twisted Fate stun)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Soraka, Vladimir, Aatrox)。**R** 的持续 tick 在大范围内施加 grievous wounds (削减受到治疗的负面状态)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 一旦任何 priority target (你最想干掉的敌人 — 通常是对方的 carry) 完成第一件 Magic Resist (MR — 减少受到法术伤害的防御属性) 装备就立刻接出。拖着不出,Anivia 的伤害对着 MR 直接断崖。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。只有当队伍在 skirmishes (主团战之外的 2v2 或 3v3 小规模交战) 中急需更多 **R** uptime (R 再次可用的频率) 时,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 才是可接受的备选。

**加点顺序:** 主升 **E** — 它是真正的伤害按钮,对 Chilled 双倍。副升 **Q** (减速 + stun 时间更长),最后升 **W**。**R** 在 6、11、16 级各点一级。**W** 即使最后升,也要在 3 级点上一级:一级墙就足以救命或切断 engage。

**符文:** 主系 **Sorcery**,带 **Arcane Comet** (技能命中敌人时落下的免费伤害弹幕)、**Manaflow Band** (skillshot 命中敌人时回蓝)、**Transcendence** (冷却缩减)、**Scorch** (首次技能命中带来的额外灼烧)。副系 **Inspiration** 带 **Biscuit Delivery** (线上免费药水) 与 **Cosmic Insight** (像 **Flash** 这样的 summoner spell 额外冷却缩减)。Comet 是 Anivia 单符文伤害收益最高的选择 — 每发 Chilled **E** 命中都会触发它。

## 关键对线

- **Yasuo:** 他能用 Wind Wall (一个挡飞行物数秒的技能) 挡掉 **Q** 甚至 **E** 投射物。憋住两个技能直到他把 Wind Wall 浪费在小兵上。他试图 all-in (一场拼到死的全压交战) 时,把 **W** 竖直放在他和他的小兵之间 — 他被墙和 chill 同时夺走 Wind Wall 窗口。
- **Zed / Akali:** 突进威胁。如果他们经济领先,![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** 后立刻接 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。他们扑上来时把 **R** 落到自己脚下 — 想拿人头就得在你的暴风里硬刚。
- **Veigar:** 五五开,胜负看谁先 roam (离开自己的线去支援别处)。6 级前你靠 **R** 清线更快,趁他还在塔下补刀时 push 并去支援下路。
- **Xerath / Vel'Koz:** 他们的射程压你。站在小兵后面,用 **E** 补刀 (last-hit = 给小兵最后一击拿钱),除非你的打野走 mid-side (位于贴近中路的野区),否则永远别把兵线推过中线。
- **Annie:** 起手动作很明显的 all-in mage — 她的 stun 有缓慢清晰的 tell (施法前可见的动画,提示你去躲)。6 级前把 **W** 放在 Tibbers 的落点路径上,切断她 stun + 召唤的连招。蛋的被动能救你一次满 burst 尝试 — 她无论如何会交大招,等于白送你一次反打 engage。

## 强势期与胜利条件

- **2 级:** **Q** + **E** 已经能 chill-and-double-tap 一个为了一只小兵走得太前的对手。每波兵线都施压 — 这就是 Anivia 设计核心的 trade (短促的攻击与技能交换,而不是完整的击杀尝试)。
- **6 级:** 第一发 **Glacial Storm**。从 5 级最弱法师之一,变成 6 级 waveclear (快速清掉小兵兵线的能力) 与 zoning (用伤害威胁逼敌人离开某区域) 最强 kit 之一。立刻 shove 兵线找 roam。
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 成型 (约 12-14 分钟):** 完整 **Q-E** 连招加 Luden's proc (你施法时自动触发的装备被动) 能秒掉大多数没出 MR 的 ADC 与法师。这一窗口里围绕资源点开打。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (约 26-30 分钟):** Anivia 的 late game 起飞。**R** 持续 tick (每秒小数次的小段伤害) 加上 Chilled **E**,连坦克每秒都掉一大块血。和队伍抱团,让 frontline (站在前排吸收伤害的坦克/战士的角色) 替你顶。

## 常见错误

- **Q 没接 E 就空交。** 单 **Q** 是不错的 poke (远距离消耗,在不交战的情况下削减敌人 HP);**Q** 接 **E** 加 chill 双倍才是真正的击杀威胁。**E** 冷却好的时候,绝不要把 **Q** 当 harass (单纯为了恶心和削血的 poke) 来消耗。
- **把自己墙死在线外。** **W** 对*双方*都不可穿越。要 peel (peel = 用技能保护被人扑上的队友) 来自迷雾的 gank (打野从迷雾发起的伏击),把墙平行于兵线放,绝不要垂直挡在自己的退路上。
- **R 关得太早。** **R** 一旦开起来就不再消耗 mana — 团战中保持开启,蓝条一掉就慌得关掉是错的。光是减速就够回本。
- **赌蛋。** Rebirth 被动冷却很长。残血 tower-dive (跑进对方塔下击杀) 之前别"信蛋" — 除非你算清楚:打死蛋只需要几下,而其中一下可能就是塔本身。
- **忽视 W 的 peel 价值。** 大多数 Anivia 玩家只把 **W** 当追击工具。但对位 pick comp (靠抓单脱节走位赢的阵容) 时,把 **W** 卡在自家 back line (在后排输出的 carry) 与 Malphite 大招之间,是中路最强的防守操作之一。

## 进阶技巧

把 **Q** 的引爆再施放当作*视野工具*。冰球飞行中和爆炸时都有较大的视野半径:把它穿过 fog of war (你方视野外的黑色区域),抛在敌人可能行走的路径上 — 例如 drake fight (围绕小龙的团战;小龙是下半区河道的资源型怪物,击杀后给杀掉它的队伍 buff) 之前的中路河道 — 然后接触瞬间引爆。一个键给团队半秒视野加一发 stun。顶级 Anivia 玩家每场团战会用一发穿雾 **Q** 引爆代替一只 ward (放置型探测器,在一段时间内点亮地图上一小块区域):更便宜、更快,而且直接 stun 掉 engage。
