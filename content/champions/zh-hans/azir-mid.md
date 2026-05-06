---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "zh-hans"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Azir 沙皇中单完整攻略:battle mage 核心出装顺序、Sorcery 符文与天赋加点细节、关键对线分析、Nashor's Tooth 强势期把握、E + Flash + R Shuffle 进阶操作技巧、新手常见错误规避以及实战团战站位。"
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "每个倒下的友方塔位置都能让 Azir 复活一个临时的 Disc of the Sun:一座伤害极高的炮塔,控制残骸周围的空间。每塔仅一次。"
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "命令所有现存的 Sand Soldier 冲向指定地点,一路造成魔法伤害与 slow。Azir 主要的 poke 与重新定位工具。"
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "召唤一个 Sand Soldier (有充能数)。士兵延伸 Azir 的 basic attack:他在士兵旁边普攻时,士兵向前一线刺击造成魔法伤害。"
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "护盾 + 朝现有士兵方向位移。撞到敌方英雄时停下并返还一个士兵充能。这是 Azir 唯一的逃生与切入手段。"
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "一面士兵之墙向前推进,击退敌人并留下持续数秒的阻挡线。标志性的 'Shuffle' 工具。"
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与刺客 (Zed, Diana, Talon, Akali) — stasis 在你被抓时帮你撑过 E 的冷却"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位重型单体魔法 CC (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了魔抗装就立刻替换 — 士兵普攻继续打穿 MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位堆回血的阵容 (Soraka, Vladimir, Dr. Mundo) — 减疗在士兵每一次命中都触发"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "在 Nashor's Tooth + Sorcerer's Shoes 成型时 (~ 第 18-20 分钟) 进入强势期,用士兵延伸的普攻控制 objective fight,并用 R + Flash Shuffle 把敌方 carry 推向我方阵地。"
  weakness: "操作要求高,6 级前很弱。E 不在手就没有逃生手段;远程 chip damage 与 Wind Wall (Yasuo, Yone) 同时封锁 Q 的士兵线和 R 的墙。"
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
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "无位移的 immobile mage"
      reason: "Azir 士兵的射程超过他们的施法距离,而他们没有 dash 来躲士兵 Q 的 poke,也没法打断 W 强化的普攻序列。"
    - examples: ["annie", "syndra"]
      archetype: "动作慢、近距离 all-in 的 mage"
      reason: "Azir 在他们的 commit 窗口里 (他们上前进攻的那一刻) 保持距离:每次他们贴上来都会被士兵普攻消耗,如果他们 Flash 进来,R Shuffle 会反吃这次 all-in。"
    - examples: ["malzahar", "kassadin"]
      archetype: "前期小规模交战较弱的后期型 mage"
      reason: "Azir 从 1 级就能用 W 安全 farm,既跟得上他们的后期体量,也不送经验 — 第 14 分钟他已经成型,而对方还没到自己的强势期。"
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "持有 Wind Wall 的英雄"
      reason: "Wind Wall 吃掉每一条 Q 的士兵线和 R 墙的后续伤害。主要 poke 被废后,Azir 就成了一个没有近战工具的近战 mage。"
    - examples: ["zed", "talon", "leblanc"]
      archetype: "拥有多次位移的前期爆发型刺客"
      reason: "他们在 Azir 没有 E 的 6 级前 all-in;就算之后做了 Zhonya's,多段位移的技能组在 R 来得及释放前就已经贴脸。"
    - examples: ["xerath", "vel-koz"]
      archetype: "长射程的 artillery mage"
      reason: "他们在 Azir 士兵射程 (740) 之外消耗他的血量。6 级前他没有回复手段,出第一件装时血量已经被磨低。"
---

## 概述

Azir 是一名通过 **Sand Soldiers** 在远距离作战的 battle mage — 这些是他用 **W (Arise!)** 召唤的小型幽灵单位,本质上是远程的普攻平台。当 Azir 攻击靠近士兵的敌人时,实际上是士兵向前一线刺击造成魔法伤害。他是这个列表里 skill ceiling 最高的英雄 (Riot 给他难度 9/10),早期等级老实说很弱。在他放下第一个士兵、把 **W → Q** 的 muscle memory 练成肌肉反射之前,他在 trade (一次短促的伤害交换,不是完整团战) 里会硬输给绝大多数对线英雄。

一句话游戏思路:用 **W** 安全 farm 到 ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** 在第 18 分钟左右成型,然后用 **R (Emperor's Divide)** — 那个著名的 "Shuffle" — 把敌方 carry (对方队伍的高伤害英雄) 在 objective fight (大型地图目标周围的团战:Drake 是下半野河的龙;Atakhan 是新增的中期 boss;Baron Nashor 是后期的大龙) 里推进我方阵型。技术差距体现在三个地方:士兵的摆放 (你站在哪里 vs 士兵把你的普攻射程投射到哪里)、**E + Flash + R** 的 "Shuffle" 连招、以及判断什么时候该花掉自己唯一的逃生 (**E**)、什么时候要把它留给 counter-engage (把对方的进攻反过来打他自己的那一刻)。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。跳过 ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**:你只在 **W** (少) 与 **Q** (中) 上耗蓝,Doran's 的蓝量回复足够支撑剩下的部分。

**核心装备 (按购买顺序):**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 每局必出的第一件。攻速让你由士兵延伸的普攻 (basic attack,也叫 AA — Azir 自己的普攻射程只在身边有士兵时才有意义) 出手更快,而 on-hit 的魔法伤害 (每一次普攻命中时附加的额外伤害) 会叠加在士兵的每一次刺击上。这是把你从被动转成具备压制力的 spike (英雄变得明显更强的那个时间点)。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿 (一个固定数值,不是百分比,从敌方魔抗里直接扣掉)。任何想要点掉 squishy (防御薄弱的英雄,比如 ADC 与其他法师) 的中单 mage 的默认鞋。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 给你所有 AP (Ability Power,提升魔法伤害的属性) 加成乘上一个倍率。这件之后,每一次士兵普攻和每一次 **Q** 都明显更痛;这才是你后期团战真正的 damage spike。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外的 burst (集中在 1-2 秒里的高伤害),带一个血量阈值的被动 (敌人血量低于约 35% HP 时触发的被动),正好和 Shuffle 后的击杀收尾衔接上。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver 与刺客 (Zed, Diana, Talon, Akali)。"diver" 指的是不顾代价突进到你后排 carry 身上点掉对方的英雄。stasis (几秒钟里既不会受伤也不能行动) 给你的 **E** 冷却争取回归的时间,以防被抓出位置。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位重型单体魔法 CC (CC = crowd control:晕、魅惑、定身 — 任何夺走你角色控制权的效果)。例子:Ahri charm, Lissandra R, Twisted Fate stun, Syndra E。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要任何核心目标买了一件 MR 装 (Magic Resist,降低受到的魔法伤害的属性) 就立刻接上。士兵普攻和 **Q** 重新打穿 MR。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位堆回血的阵容 (Soraka, Vladimir, Dr. Mundo)。减疗 (一个被动,在几秒内把敌人的治疗效果削减一半) 在士兵的每一次命中都会触发。

**鞋子:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 是默认。当队伍需要你 **R** 更频繁地处于 off cooldown 状态 (两次施放之间的等待更短) 来打 objective fight 时,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 也是可以接受的选择。

**加点顺序:** 主升 **Q** (士兵伤害与 slow 随等级提升,同时冷却从 1 级 14 秒缩到 5 级 6 秒),副升 **W** (更多士兵充能与更长持续时间),**E** 最后升。**R** 在 6、11、16 级各点一级。1 级先点 **W** — 没有士兵就没法远距离 farm 兵线。

**符文:** 主系 **Sorcery** (魔法伤害符文系) 带 **Arcane Comet** (一个小型投射物,你用 slow 或 root 命中目标时落下额外伤害)、**Manaflow Band** (每次用技能命中英雄时回蓝)、**Transcendence** (5 级时获得冷却缩减)、**Scorch** (每隔几秒,你下一次技能命中附带少量灼烧)。副系 **Inspiration** 带 **Biscuit Delivery** (线上免费药水) 与 **Cosmic Insight** (更多 summoner spell 可用频率)。如果对面有多个低魔抗 squishy,把副系换成 **Precision** 带 **Presence of Mind** (击杀参与时返还蓝量) 与 **Coup de Grace** (对低血敌人额外伤害)。

## 关键对线

- **Yasuo / Yone:** 他们的 **Wind Wall** 能挡掉你技能组里所有的投射物 — **Q** 的士兵刺击、**R** 的冲击波。先把 **Q** 憋着,等他们的 Wind Wall 用在别的东西上;如果你能用一次士兵刺击把墙骗 (bait) 出来 (强迫他们把墙交在没价值的攻击上),接下来 24 秒的 trade 都是免费的。
- **Zed:** 6 级开始就有 dive 威胁 (他不顾塔伤直接扎到你塔下杀你)。第二件出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。把 **E** 留好 — 他没交大招前绝对不要主动用;他大招进来时你有 **E** + Zhonya's,就能扛过爆发。
- **Veigar:** 五五开偏优势。他没有 dash。每次他上前补刀,你的士兵 Q poke (从安全距离来的 chip damage) 都能把他赶出经验范围;他的 **E (Event Horizon)** 笼子要用 **E** 位移挣脱来尊重它。
- **Twisted Fate:** 拼支援节奏。"roam" 指离开自己的线去支援另一条线;"priority" 指拥有兵线控制优势,可以离线而不丢小兵。**W** + **Q** 一冷却就推线。他到 6 级用大招开始转线后,通报队伍并在他那侧打 tower trade (他杀你下路时你拆他的塔),不要去追他;Azir 用 **R** Shuffle 在塔下惩罚边路兵线,在中单里数一数二。
- **Akali:** 带 gap-close 的 diver。在她喜欢做 flank (从没视野的侧面切入团战) 的草丛里预埋士兵。她 **W (Twilight Shroud)** 的隐身区域里你无法选中她 — 提前在外面布好 **W**,她一出来士兵就自动攻击。

## 强势期与胜利条件

- **4 级:** **Q** 加满 3 点解锁真正的 damage spike。如果对方连续两次走进士兵 Q 的射程,你已经能威胁实际的击杀。
- **6 级:** 第一手 **R** 解锁 "Shuffle" 连招:**Flash + R** 把敌方 frontline (团战最前面的肉盾) 反向推回你的阵型里。第一次尝试在河道 2v2 的 skirmish (一次小规模交战,比 5v5 团战要小) 里执行,失误也不会直接送掉这条线。
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ 第 18-20 分钟):** 你成为队伍一直在等的中期 DPS (damage per second,每秒伤害) 威胁。在 Atakhan 或 Drake 上强开 (Atakhan 是地图中部的 boss;Drake 是下半野河的龙) — 此时你的士兵普攻输出超过大多数 mage。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~ 第 28-32 分钟):** 每一次士兵普攻都能直接秒掉 squishy。从这里开始 Azir 是游戏里最强的 hard carry 之一,但前提是他始终保持士兵最大射程,并且 frontline (站在他前面的肉盾/战士) 撑得住。

## 常见错误

- **W 还没好就冲进普攻射程去补刀。** Azir 没有士兵在身边时的普攻又短又弱。永远先在你想要的小兵下方召唤一个士兵,再上前;是士兵在帮你 farm,不是你的普攻。
- **为了等永远等不来的完美 Shuffle 而把 R 攥在手里。** 哪怕只是把一个敌人推飞、再造一面墙的平庸 **R**,也比根本不交 **R** 强。没有 engage (跳进战场打开团战的动作) 机会时,把它用来 peel (保护 carry 不被 diver 收掉) 也行。
- **没有撤退方案就把 E 用作进攻位移。** **E** 是你唯一的逃生。如果你 dash 进去,士兵很快消失,位移进入冷却,你就像 glass cannon (高伤害零防御的英雄) 一样僵在近战范围里。**E** 主动用只在能确认击杀、或者能立刻接 **R** 时才考虑。
- **忘了 Shurima's Legacy 的塔位还能用。** 友方外塔倒下时,你可以在残骸上复活一座强力的 Disc-of-the-Sun 塔。可以用来在 Atakhan 周围争夺 objective,或者在自己的 inhibitor (二塔与 Nexus 之间的建筑) 下面做防守站位。大多数 Azir 玩家根本就不按 passive。
- **没有 W 铺垫就乱按 Q 来 poke。** **Q** 沿着*所有现存士兵的连线*投射伤害。一个士兵都没有时,**Q** 完全打不到人。先放 **W**,*再用* **Q** 把士兵送到你想要的位置。

## 进阶技巧

在 Practice Tool (客户端里的离线训练模式) 里反复练 **E + Flash + R** Shuffle,直到能在 0.4 秒内完成。顺序很重要:**E** 把你锁在士兵的轨迹上,**Flash** 在 dash 中途把你重新定位,让 **R** 的墙从新位置发射,而 **R** 朝你的角色在*施放瞬间*所面对的方向冲过去。做对的话,无论起始位置在哪,只要一个孤立的刺客或 carry 走进你的 fog of war (没有 ward — 提供视野的哨兵 — 的看不见的地图区域),这套连招就能把他变成必死的击杀。
