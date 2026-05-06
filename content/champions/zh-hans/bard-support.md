---
title: "Bard Support Build & Guide — Patch 16.9"
slug: "bard-support"
language: "zh-hans"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Bard 巴德辅助完整攻略:roaming-pickoff 游走抓人风格、起始与核心装备顺序、关键对线应对、强势期节奏把握、新手常见错误规避,以及 flash-stun 这一进阶 wall-stun 技巧的完整说明。"
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Meeps 出现在 Bard 身边,为他的普攻附加额外法术伤害。地图各处会刷出 chime,拾取后获得经验、法力与脱战移速。"
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "直线 skillshot,首个目标减速。投射物若再命中第二个敌人或墙壁,两者都会被晕。wall-stun 是 Bard 标志性的抓人手段。"
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "放置一个充能 10 秒的治疗祭坛。第一名踩上的盟友回血并获得短暂移速加成。最多 3 个同时存在。敌人可摧毁。"
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "在附近地形开一条单向通道。任何英雄(我方或敌方)都可使用。冷却长 — 用于 gank、escape 与侧翼奇袭。"
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "远程范围技,使敌方英雄、小兵、野怪、防御塔进入 stasis 2.5 秒。可锁定目标、救援濒死队友、冻结塔下追杀的敌人。"
      dd_spell_id: "BardR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "对位针对自家 ADC 的单体 lockdown CC (Morgana Q, Ashe R, Leona E 接 R 连锁)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位范围 burst 阵容 (Yone + Malphite, Orianna 团战开团组合)"
    - dd_id: "3107"
      name: "Redemption"
      against: "对位抱团团战阵容;群体治疗死后也能落地,价值很高"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位刺客或强力 diver (Zed, Talon, Diana — 短时间内秒杀你的英雄)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "自家 ADC 是核心胜利点、且对面有多个 dive 威胁时"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "持续 roam 收集 chime,用 Q 将落单的敌人 wall-stun 拉开收掉。团战中用 R 锁住对面前排,让队友在对方开团 commit 之前先抹掉后排。"
  weakness: "脆皮且没有位移。Q 没命中或没成功 wall-stun 就缺乏后续控制,ADC 在 2v2 里直接送掉。点选式 lockdown 辅助和 2 级压制型对线手都能压死你。"
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "无位移的 enchanter 系辅助"
      reason: "Q-into-wall stun 的威胁逼他们站到小兵后方很远的位置。没有逃生技,一次干净的 wall-stun 在对方支援赶到前就转化为人头。"
    - examples: ["alistar", "nautilus"]
      archetype: "前摇明显的近战开团手"
      reason: "R 直接打断他们的 commit 式开团。对方刚 Flash-W 跳到 ADC 头上,你在开团手身上按 R:他被 stasis 冻住,ADC 免费走出。"
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "带点选式 CC 的 lockdown enchanter"
      reason: "她们的 CC 是点选式(没有非指向 skillshot 给你躲),轻松就能 **peel** 掉你的强袭尝试 (peel = 通过打断扑上来的人来保护队友);Bard 没有位移,trade 反转时也跑不掉。"
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "远程钩型辅助"
      reason: "她们的钩子(射程 1100-1150)在你 Q 弹道还没干净时就够到你。被钩中之后没有位移可逃,这条线被迫 1v2 打 30 秒。"
    - examples: ["pantheon"]
      archetype: "2 级强势的对线压制手"
      reason: "2-3 级 all-in 直接惩罚你薄弱的初期数值。除了需要 10 秒充能的 W 之外没有续航,这段空窗期完全无解。"
---

## 概述

Bard 是一名 **roaming support**(不断离开本路、影响整张地图的辅助)。他的核心定位**不在**下路 2v2 里(下路两名 ADC — 队伍主要伤害位 — 加上各自辅助之间的对抗)。他在地图上拾取发光的 **chime**:每收集一颗就免费获得经验、法力与脱战移速,他把这部分机动力转化为 **pickoff** — 抓掉远离队友的落单敌人。Q 是远距离减速,投射物若命中第二个目标或(更经典地)第一目标背后的墙壁就变成晕眩。R 是一颗 stasis 炸弹(飞行 4 秒、随后大范围 AOE),把范围内一切 — 我方、敌方、防御塔、小兵 — 全部冻结 2.5 秒。

游戏思路:不停吃 chime,在 **river**(分隔地图上下两半的中央中立区域)和野区猎找 wall-stun pickoff,把下路当成你巡逻的三条路之一,而不是常驻的位置。团战里你是 **disengage**(用 R 打断对方开团的人)与 **catch**(锁住落单目标的人) — 几乎从不站前排。

## 推荐出装

**起始装备:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**(几秒内回复 HP 的消耗品)。World Atlas 是辅助任务装:随时间生金,且根据你对敌方英雄造成伤害与 **ward**(在草丛里放下提供视野的眼,让队友看清局势)的程度,自动升级成四件成品之一。Bard 始终把它升成 Bloodsong。

**核心装备(按购买顺序):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — 辅助路线的成品。最适合 Bard,因为他是 **poke**(远距离消耗 HP)与 pickoff 型辅助,而不是 **enchanter**(像 Soraka 或 Janna 那种治疗/护盾型辅助)。Bloodsong 提供 AP(Ability Power — 法术伤害成长属性),并奖励对敌方英雄持续输出 — 正好契合 Q + 普攻连段。
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 提供 **ability haste**(降低所有冷却的属性)与 **summoner spell**(界面顶部那两个额外召唤师技能 — Flash、Ignite 等)冷却缩减的鞋子。**Flash** 转得更快,有利于开团;**R** 也更频繁,可参与资源点团战(在小龙或男爵处的团战 — Baron Nashor 是上路河道的巨型中立怪,击杀后给整个队伍提供强力增益)。
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — 主动技能,为自身与附近队友提供 4 秒移速爆发。配合本就极快的 roam,从下路 **gank**(跑去其他路杀敌)中路时几乎没人逃得掉。
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — 提供随后期(约 25-30 分钟,英雄都做到 4 件以上装备)成长的治疗/护盾强化。比赛拖入长局、W 充能能真正回出可观数值时再做。

**情境装:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 主动可清除 ADC 身上的晕、定身(无法移动但可攻击)或恐惧(被迫无法控制地走动)。对位单体 lockdown(Morgana Q, Ashe R, Leona E 接 R 连锁)时购买。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 主动为附近所有队友提供 2.5 秒护盾。对位范围 burst 阵容(类似 Yone + Malphite + Orianna 这种针对抱团队伍 one-shot — 一击致命 — 的组合)时购买。
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 群体治疗,死后也能在队友头上落下。对位围绕资源点抱团的团战阵容时合用。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 主动让自己 2.5 秒无敌。对面是刺客或强 **diver**(在 1-2 秒内秒掉你的英雄,例如 Zed, Talon, Diana)且明显在针对你时购买。
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — 把绑定队友受到的 12% 伤害分担到你身上,你的普攻还会治疗那名队友。自家 ADC 处于 hyper-fed(领先 8 杀以上,1-2 下抹掉敌人)、且对面有多个 dive 威胁时购买。

**鞋子:** 默认 Ionian Boots of Lucidity。对面 CC 极多(Lulu, Leona, Lissandra)时改 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 提供魔抗与 30% tenacity(承受的 CC 持续时间缩短)。

**加点顺序:** 主升 **Q**(主要伤害与 wall-stun 抓人手段),副升 **W**(治疗随等级成长),最后 **E**(冷却缩减影响很小,直到后期一级足够)。**R** 在 6、11、16 级各点一级。

**符文:** 符文是赛前选定的被动(在两条天赋树中共选 6 个:主系 4 个,副系 2 个)。Bard 的标准选择是:

- 主系 **Inspiration**:**Glacial Augment**(普攻命中已被减速的目标后,脚下出现额外减速区域 — 与 Q 的减速联动)、**Magical Footwear**(12 分钟免费鞋)、**Biscuit Delivery**(前期 3 块饼干,回血回蓝)、**Cosmic Insight**(额外 ability haste 与 summoner spell 冷却缩减)。
- 副系 **Resolve**:**Bone Plating**(承受 3 次伤害后,1.5 秒内的下 3 次伤害减少) + **Revitalize**(治疗与护盾量增强)。线上稳健向选择。
- 备选副系 **Sorcery**:**Manaflow Band** + **Scorch**,需要更多线上 poke 伤害时使用。

## 关键对线

- **Lulu / Janna:** 2v2 中的硬克制。她们的**点选式 CC**(不需要瞄准,只要点中目标就生效的控制)直接打断你强袭。Lulu W 把你变成无害动物(变形);Janna Q 把你顶飞。压回去,**R** 在 6 级亮起后立刻 roam 中路,信任 ADC 安全 **farm**(用最后一击补到小兵换金币与经验)。
- **Leona / Nautilus:** 用点选式 CC 开团的 **tank**(高 HP 的前排英雄)。永远站 ADC 身后。如果对方扑到你家 ADC 头上,![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** 砸下去冻住开团人,然后撤。永远不要和他们换 **trade**(线上短暂的伤害交换,不是完整击杀尝试) — 他们的 CC 链比你的 trade 窗口长。
- **Blitzcrank / Pyke / Thresh:** 钩型辅助(标志性技能是远距离 **skillshot** — 需要瞄准的非指向技能 — 把你拉过去)。她们的钩射程长于你 Q 的有效射程。每当对方钩子可用时,站在小兵后面。一旦对方钩子落空,就用 **Q** 白嫖一波 trade — 钩子至少冷却 15 秒以上。
- **Pantheon support:** 强势对线压制手(在前期把你赶出线的英雄)。他在 2 级用 **W** 晕加 **Q** 长矛 **all-in**(全压追击,不留余地)。你没有续航。站远一点,把河道两侧的草丛(英雄藏身用的高草区域)都插眼,2 级拒绝任何 trade。6 级后用 **R** roam 中路找回节奏。
- **Senna:** 被动型 **scaler**(随时间变强,前期不主动开团)。她普攻射程长,你 all-in 不干净。这是慢节奏 farm-trade 对线。靠收 chime 与 roam 中路打 **R** 来赢宏观。绝不能被压上太深 — 她借 **fog of war**(无视野的地图区域,你方看不见)的 **W** 定身就是她家打野(清野怪的队友)的免费 gank 起手。

## 强势期与胜利条件

- **2 级(W 一级):** 在线上草丛放祭坛,用于 trade 之间的续航。叠加 1 级 **Q**,只要对面辅助站位失误,就有击杀威胁。
- **6 级(R 解锁):** 第一发 **Tempered Fate** 解锁改变战局的操作。在 2v2 中把对方 ADC 关进 stasis,通常等于当场击杀。中路兵线一旦回弹到自家塔(对方停止推进后小兵自然向你这边移动)就立刻 roam 中路 — **R** 加上中单的连招能稳吃毫无防备的对面中单。
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong 完成(约 14-16 分钟):** 辅助任务装升级。Q 命中开始造成真实伤害,roam 影响力同步上升。
- **11 级 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong 成型:** R 二级(第二次给 R 加点)把冷却压到 95 秒。配合 Shurelya's 主动,你能足够快地在两条边路(上路与下路)以及每 90 秒一次的 drake 团战(小龙坑团战)间 rotate(在线路之间转移)。

## 常见错误

- **空地里硬甩 Q 消耗。** 没有第二个目标也没有墙作背景时,**Q** 只是个减速 — 60 蓝、11 秒冷却的减速换出去就是惨痛的 trade。一定要确认目标背后那条线上有小兵或墙,否则别按 Q。
- **兵线被推回自家塔时还去 roam。** 你一离开,兵线(交战中的小兵阵列)就直接撞到塔下 — 小兵在塔底死掉,ADC 损失 2-3 个补刀外加 **tower plates**(前期防御塔的保护层装甲;打掉一层给金币)。**只**在兵线在中段或推向对面塔(小兵正在推进,你不在时 ADC 仍在自家塔下安全)时 roam。
- **团战中把 R 砸到自家 ADC 身上。** 队友被 stasis 期间正在做的所有事情都会暂停 — 包括眼看就要赢下 trade 的普攻连段。**R** 用在敌人身上、用在濒死的队友身上(打断那一击致命)、用在防御塔上(打断对方塔下越塔)。健康的 carry 几乎绝不要 R。
- **站在自己 R 的范围里。** AOE 范围很大、飞行 4 秒 — 你忘了它落点,自己走进去,把大招浪费掉。施放后立刻走出去。
- **忽略线外的 chime。** chime 就是经验和法力。坚持收 chime 的 Bard 比窝在线上的 Bard 早大约 2 分钟到 6 级。10 分钟时如果你的等级没比队伍其他人高 1 级,就是运营出了问题。

## 进阶技巧

练习 **flash-stun**:先把 Q 释放出去,投射物在飞行途中再用 **Flash**(通用的短距离瞬移 summoner spell)把角色挪一下 — Q 投射物会跟随你的模型,从新位置以新的角度继续飞。诀窍是把 Flash 朝向敌人正在 **dash**(短距离瞬时位移)的方向。这样能把那些原本能轻松躲掉普通 Q 的敌人当场抓住。这是 Bard 的 kit(他全套技能的总称)中杠杆最高的小技巧,经常就是赢局 Bard 与输局 Bard 的真正差别。
