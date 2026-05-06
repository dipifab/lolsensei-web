---
title: "Kalista Bot Build & Guide — Patch 16.9"
slug: "kalista-bot"
language: "zh-hans"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Kalista 复仇之矛下路完整攻略:起始装备到 on-hit 核心出装顺序、Soulbound 与辅助的联动玩法、Press the Attack 符文搭配、关键对线思路、强势期节奏把握、常见错误规避,以及 Q 越墙重置等高阶细节。"
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "每次普攻和 Pierce 在前摇期间都会触发一次小幅 hop。普攻命中前点击移动可决定 hop 方向。"
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "直线 skillshot。若长矛击杀第一个目标会继续飞行,把所有 Rend 层数转移到下一个被命中的敌人身上。"
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Soulbound 被动:把 Kalista 与一名队友绑定。两人共同攻击同一目标时,基于最大生命值额外造成法术伤害。"
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "每次普攻和 Pierce 都会在目标身上插入一支长矛。激活时全部拔出造成伤害,层数越多伤害越高,周围敌人减速。"
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "把 Soulbound 队友置入 stasis 并拉到 Kalista 身边。队友可再次施放,作为击退冲刺射出,撞到第一个敌方英雄即停。"
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位 2500+ HP 坦克/战士 (Sion, Ornn, Cho'Gath):护甲穿透随他们对你的生命值优势提升"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka 辅助, Aatrox, Dr. Mundo):重伤效果将治疗减半"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "对位爆发刺客阵容 (Zed, Talon, Kha'Zix):复活让你 R 之后 Soulbound 仍能续上输出"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位单体硬控 (Ashe 大招, Morgana Q, Blitzcrank Q):魔法护盾挡住一招,你的 hop 重置得以保留"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "团战中在优先目标身上叠满 6+ 层 Rend,然后 Q 重置切到第二个目标。Wit's End 加 Blade of The Ruined King 成型后,你在持续战中压过其他 ADC。"
  weakness: "你随辅助一起 scale:Soulbound 不能稳定锁人就等于失去开团手段。Hook 辅助 (Blitzcrank, Thresh) 会把你的搭档勾出 hop 范围,团战在你 R 起之前就结束了。"
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 配 Press the Attack:同一目标上三次 hop 即可触发 PtA 多吃 +12% 伤害,Rend 层数也能快速堆。Triumph 奖励持续小规模交战,Legend: Alacrity 加速 on-hit 攻速曲线,Coup de Grace 收掉 40% HP 以下的目标。"
    secondary_rationale: "Domination 副系:Taste of Blood 在每次短交换后给你回血(hop window 让你干净撤退),Relentless Hunter 在击杀/助攻后叠加,提供你和 Soulbound 一起去中路游走所需的脱战移速。"
    secondary_alternative: "面对强消耗组合 (Caitlyn + Lux, Varus + Brand) 把 Domination 换成 Resolve,带 Bone Plating(前 3 次受击 -30 至 -60 伤害)和 Second Wind(50% HP 以下加速回血),熬过 1-6 级。"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "无位移的后期型 ADC"
      reason: "他们唯一的安全保障就是站位。Kalista 每次普攻都 hop,所以贴脸交易也不必停下脚步——除了 Flash 他们没有解,而且你叠 Rend 比他们重置交易更快。"
    - examples: ["jinx", "varus", "ashe"]
      archetype: "依赖辅助控制的静态站桩 ADC"
      reason: "如果他们辅助先开团,你的 R 重定位加上 Wit's End 的 on-hit 法伤会压过他们的攻速曲线。一个每次普攻拉近 350 距离的英雄,他们根本风筝不掉。"
    - examples: ["caitlyn"]
      archetype: "对线期长手炮台型 ADC"
      reason: "1-3 级 Caitlyn 能消耗你,但她的陷阱接网只是一个长 CD 的位移——一旦你做出鞋子和 Wit's End,6 级你就能直接走脸压过去。"
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "1-3 级强势 all-in 的对线压制型 ADC"
      reason: "他们的早期伤害在你叠满 Press the Attack 所需攻速之前就突破了你的 hop spacing(每次普攻 hop 维持的安全距离)。2 级一个 Q 没躲掉,他们就在辅助反应过来之前拿到人头。"
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "对方为针对你 Soulbound 搭档而 pick 的 hook 辅助"
      reason: "如果他们勾住你的辅助,Soulbound 链接就毫无价值:你没法把他从 hook 线上 R 出来,而且开团位置距离你的 hop window 800+ 单位远。"
    - examples: ["tristana", "vayne"]
      archetype: "自带保命的高机动后期 carry"
      reason: "Tristana 用 W 跳出你的 dive,Vayne 翻滚直接打断 Press the Attack 的层数计时。两人都能在 25 分钟之后通过装备曲线在 1v1 中击败你的 on-hit 核心。"
---

## 概述

Kalista 是一名 on-hit skirmisher 类型的 ADC("on-hit"=效果在每次普攻而非技能时触发的装备体系;"skirmisher"=靠重复短交易而非一次大型 all-in 取胜的英雄),核心由 **Martial Poise (P)** 定义:每次普攻与每次 **Pierce (Q)** 都会在前摇期间触发一次小幅 hop。这个 hop 把普攻直接转化为机动性:她可以把站着不动的敌人活活走到脸上,也可以一边输出一边脱离近战威胁。代价是脆弱的前期(基础 AD 偏低,没有护盾)以及 ADC 中数一数二的 skill floor:hop 必须在前摇逐帧用移动点击主动指挥。

她的核心思路围绕 **Rend (E)** 层数展开。每次普攻在目标身上插一支长矛;激活时一次性全部拔出,造成层数比例的伤害。在坦克身上叠 6-8 层后,E 一下就能瞬间清掉旁边的 squishy(伤害高但防御薄弱的英雄,典型代表是 ADC),团战直接结束。**Sentinel (W)** 的 Soulbound 机制将她与一名队友(通常是辅助)整局绑定,**Fate's Call (R)** 则把这名队友以击退冲刺方式弹射出去。搭配 Thresh 或 Leona 这种开团辅助,Kalista 的 R 就能把一次 Soulbound 侧翼变成一波稳吃的 pick(把一名落单的敌方英雄在团战之外击杀)。换成消耗型辅助,她的 scaling 会变差,R 也从开团工具沦为 panic 撤退手段。

## 推荐出装

**起始装备:**Doran's Blade + 1 瓶 Health Potion。即便对线远程也跳过 Doran's Shield——Kalista 需要额外 AD 才能把 hop spacing 转化成击杀威胁。

**核心装备(按顺序):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** —— 第一件:你的 attack speed (AS) 节点,也就是攻速第一次出现的大幅跳跃。每次普攻附加法术伤害,完美契合 hop 高频输出,而且魔抗在对位 AP 辅助 + AP 中单时非常实用。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** —— 额外攻速,加速 Press the Attack 叠层与 Rend 上层。
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** —— 每次普攻造成基于目标当前最大生命值的百分比伤害,主动还附带减速。能在贴脸交易中收掉对手,也是面对任何前排(开团的坦克/战士)时最佳的二件套。
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** —— 副弹会给两名额外目标也挂上 Rend。这是把 Kalista 的 E 升级为团战 AOE 节点(area of effect:能同时命中多个目标的范围伤害)的关键。
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** —— 第五件:AD 加吸血护盾,用于后期持续战。

**情景装备:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** —— 对位 2500+ HP 坦克 (Sion, Ornn, Cho'Gath);护甲穿透随他们对你的生命值优势提升。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** —— 对位高回血阵容 (Soraka 辅助, Aatrox, Dr. Mundo)。重伤效果将治疗砍半。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** —— 对位爆发刺客阵容 (Zed, Talon, Kha'Zix);复活机制让 Soulbound 在你 R 后还能跟上一波。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** —— 对位单体硬控 (crowd control:晕眩、定身、击飞等让你失去行动力的效果)。挡住 Ashe 一箭或 Blitzcrank 一勾,hop 重置得以保留。

**鞋子:**默认 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**。如果敌方阵容有 4 个以上无法用 hop 躲掉的减速,换 ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness**。

**技能加点:**优先升 **Q**(主要伤害 + Rend 转移机制),其次 **E**,最后 **W**。**R** 在 6、11、16 级各加一点。1 级先点 **Q**,在 1 级开局抢野时拥有稳定消耗手段。

**符文:**主系 **Precision** 带 **Press the Attack**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系 **Domination** 带 **Taste of Blood** 与 **Relentless Hunter**。面对强消耗对线 (Caitlyn + Lux, Varus + Brand) 把 Domination 换成 Resolve,带 **Bone Plating** 与 **Second Wind**,熬过 1-6 级。

## 关键对线

- **Aphelios:**只要 hop spacing 把握得住,Kalista 6 级后能赢。Aphelios 的伤害节点随武器而变,只在他副手是 Severum(吸血)或 Crescendum(炮塔)这种短手时才上前——这两种武器都是近距离,你直接走脸压过去。
- **Caitlyn:**1-5 级线上劣势:她的陷阱与 650 普攻射程惩罚你必须前压叠 Rend 的需求。副系带 **Bone Plating**,让辅助帮你吃一个陷阱,然后 6 级配合 **R** + 打野 gank。
- **Draven:**对线压制型。他的 **Spinning Axe** 在身上时不要交易;他的普攻重置会把你的 hop 直接锁成必死局,只要你站着不动就死。每次平 minion 叠一层 Rend,E 留到他 Q 命中你之后,等他斧头掉地再上去。
- **Jinx:**6 级前持平,6 级后你更强。Kalista 的 hop 克制 Jinx 的 **W** 减速,因为冲刺起步早于弹道命中。9 级以后,Jinx 被迫清线的每一波兵线你都可以 all-in。
- **Vayne:**25 分钟之后是劣势 scaling 对位。要在前两件装备之内解决她——只有 Wit's End 早于她的 Kraken Slayer 才是 Kalista 在正面 1v1 中赢的窗口。

## 强势期与胜利条件

- **2 级:**带着 **Q** 加 1 点 **E**,你拥有可靠的交易模式:AA、AA、E 利用层数打出爆发。多数对线在这一波都会输。
- **6 级:**第一个 **Fate's Call** 解锁 Soulbound 侧翼(从对方没看的方向切进团战):把辅助放在侧边草丛,R 到敌方辅助身上,然后用积累的 Rend 收尾。
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End 成型(约 11-13 分钟):**攻速曲线起飞。6-9 级你能走脸过大多数 ADC,成为下路普攻 DPS 第一。
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King 成型(约 18-21 分钟):**百分比最大生命 on-hit 撕烂前排。在这个时间点强开一条龙或一个先锋——叠在坦克身上的 E 一拔,旁边的敌方 ADC 当场消失。

## 常见错误

- **1-2 层 Rend 就为蹭血放掉。**Rend 与层数强相关:早期狂按 E 会在击杀阈值前清空矛堆。E 留到优先目标身上 5+ 层为止,或留到能锁定击杀(E 击杀会返还冷却,因此一发收人 cast 等于重置整个循环)。
- **忘记 hop 是一个移动指令。**新手 Kalista 平 A 完就站着。hop 只有在前摇期间点击移动方向才会触发。在进对线之前,先在自定义中练习点击和攻击交替的节奏。
- **搭配消耗型辅助 (Karma, Lulu) 把 R 当进攻开团。**他们击退后并没有跟控。R 留作 panic save:对辅助释放 stasis 来躲掉 Ashe 一箭或 Blitzcrank 一勾,然后撤退。
- **面对纯 AD 阵容跳过 Wit's End。**就算如此,Wit's End 仍是你最快的攻速节点,而且法术伤害与护甲无关。先做这件,AD 穿透装放在第 4 或第 5 件。
- **hop 用尽后还赖在战场。**hop 与每次普攻绑定,但攻击范围内若没有敌人,你只能走。注意可攻击目标耗尽的瞬间立刻撤退——没有 hop 的 Kalista 就是个 580 移速、无位移的 ADC,机动性比 Caitlyn 更差。

## 进阶技巧

练习 **用 Q 重置在 minion 上越墙逃野**。在河道或三角草丛附近做翻墙时,提前对墙后的 minion 兵线 queue 一发 **Q (Pierce)**:如果矛击杀了 minion,矛会继续飞行,让你在同一帧 hop 过墙。这个技巧能让你在被切断河道路径的 gank 中逃生,因为 hop 帧被判定为移动并能绕过墙体 hitbox。绑一个快速施法 **Q** 键以缩短反应时间。
