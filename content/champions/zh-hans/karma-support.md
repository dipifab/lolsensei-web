---
title: "Karma Support Build & Guide — Patch 16.9"
slug: "karma-support"
language: "zh-hans"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "League of Legends 16.9 版本 Karma 辅助完整攻略:enchanter 出装顺序、Sorcery 符文搭配、关键对线策略、各阶段强势期节奏、线上和团战的常见错误,以及一条进阶 RE 团战开团时机收尾技巧,新手一页就能上手。"
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "用伤害技能或普攻命中敌方英雄会缩短 Mantra 的冷却。在 trade 中保持活跃,让 R 一直处于可用状态。"
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "直线非指向技能,首次命中后在小范围内爆炸,造成伤害并减速。线上主要的 poke 工具。"
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "对单个敌人施加 tether(链接)。如果在持续时间内未被打断,会造成两次伤害并将其束缚。脱离距离很关键。"
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "对友方目标释放护盾,附带短暂 Move Speed 增益。给 ADC 用于 disengage 或追击补刀。"
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "强化下一个 Q、W 或 E。RQ 增加延迟 AOE 爆炸,RW 治疗 Karma 并延长束缚,RE 为附近友军提供护盾并给予更大移速加成。"
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Yuumi, Vladimir, Dr. Mundo): Q 命中时削减敌方治疗。"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位 AOE 爆发 (Yasuo + Malphite, Orianna 大招): 团队护盾化解 wombo combo。"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Blitzcrank 钩子, Morgana Q, Twisted Fate 黄牌)。"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位针对你的刺客 (Zed, Talon, Akali): 2.5 秒 stasis 让队友有时间 peel。"
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "团队需要更多 poke 伤害,且 ADC 与打野能稳定跟上你的减速。"
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "从 1 级开始用 Q 在下路压制,用 W 束缚和 Mantra 强化 Q (RQ) 区域设置击杀,在团战中用 E 与 RE 护盾保护 ADC。"
  weakness: "脆皮 enchanter,没有位移。硬开团辅助 (Leona, Nautilus, Rell) 能在 W tether 之前锁死你,Q 落空就是白白送血。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "无位移的 mage 辅助"
      reason: "Karma 的 Q 射程与他们相当,E 护盾抵消他们的 poke,所以她在长时间 trade 中靠治疗赢下他们补不上的差距。"
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "无硬控的被动 enchanter"
      reason: "他们无法惩罚落空的 Q,所以 Karma 可以无风险地 poke ADC,在他们达到装备节点之前滚雪球带崩这条线。"
    - examples: ["draven", "kalista"]
      archetype: "需要可被 poke 辅助的强势线霸 ADC"
      reason: "Karma 把 E 放在己方 ADC 身上吸收他们 all-in 的爆发,然后用 Q-RQ 反 trade 更强,因为 Aery 在每个法术上都触发。"
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "拥有指向性 CC 的硬开团坦克"
      reason: "他们的眩晕在 Karma 的 W tether 锁定之前就生效,所以她吃下开团却打不出束缚,在 E 救下 ADC 之前就死了。"
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "长射程钩子辅助"
      reason: "Karma 没有位移可以躲掉一条干净的直线技能;2-3 级被勾一次就直接终结这条线,因为她没有任何逃生手段。"
    - examples: ["alistar", "rakan"]
      archetype: "带位移的 peel-engager"
      reason: "他们冲到 Karma 身上的速度比她释放 Q 或 E 更快,且会在 W 跳完之前用自己的击飞打断束缚。"
---

## 概述

Karma 是一名 enchanter 与 poke 混合型辅助:enchanter 是一种围绕治疗与护盾队友构建的英雄,而 "poke" 是指不进入完整团战、从远处一点点削减敌方血量。她用 **Inner Flame (Q)** 进行 poke,用 **Focused Resolve (W)** 锁住目标,用 **Inspire (E)** 保护身边下路的 ADC(远程后排)。她的大招 **Mantra (R)** 不是独立技能,而是一个强化效果,会给下一个 Q、W 或 E 添加额外效果。由于 Mantra 从 1 级就可用,Karma 是少数几位在线上第一次施法就 "已经有大" 的英雄 — 每次普攻命中敌方英雄都会因为她的被动 **Gathering Fire** 而扣除冷却时间。

整体思路是用 Q 持续 poke 拿下下路,趁敌人上前补刀时用 W 钓 root(短时间内让敌人无法移动的效果),并用 E 给 ADC 套盾来吸收 all-in(双方拼到死的全力交战)。大约第 12 分钟,![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** 与 ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** 完成后,Karma 转型为团战 enchanter:用护盾保护友方 frontline (开团的坦克或战士),并用 RQ 控制 back line (在后方输出的 carry) 周围的空间。

## 推荐出装

**起始装:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**(辅助任务装),加 2 瓶 Health Potion 和一个 Stealth Ward。不带蓝瓶:Manaflow Band 和 Biscuit Delivery 已经覆盖前期蓝量问题。

**核心装备(按顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — 大约 10-12 分钟升级为 ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**,这是辅助任务奖励。提供金币收入和 ward 充能。
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 提供 Ability Haste(降低技能冷却的属性)的鞋子,让 Mantra 与 Q 能更快回到手中。
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — 用 E 给队友套盾时,他们会获得攻速(攻击更快)和普攻附带魔法伤害(每次普攻有额外伤害)。与靠普攻输出的 ADC (Kai'Sa, Jinx, Twitch) 配合最佳。
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — 反复治疗与护盾会对低血友军触发可叠加治疗。与 E 频繁施放和团战 RE 配合极强。
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 5 秒延迟的范围治疗,在 Drake、Baron 这种资源点交战时为全队补血。

**情境装备:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位回血叠满的阵容(Soraka mid, Yuumi, Vladimir top)。每次 Q 命中都削弱敌方治疗。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 对位 AOE 爆发(Yasuo + Malphite, Orianna R)。主动效果给整个队伍一个大范围护盾,化解 wombo combo("wombo combo" 指 1-2 秒内串联 CC 把整队抹掉的开团方式)。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会秒掉你的单体法术 CC(Blitzcrank 钩子, Morgana 束缚, Twisted Fate 黄牌)。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位专门针对你的刺客(Zed, Talon, Akali)。2.5 秒 stasis("变成无法被选中,但也无法移动或施法")给队友 peel 你的时间。
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — 当队伍需要更多伤害,且打野/ADC 能稳定跟上你 Q 的减速。

**鞋子:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 是默认选择(Ability Haste,你想让 Mantra 尽可能频繁)。如果经常游走中路,Mobility Boots 也可以接受。

**技能加点:** **Q** 优先升满(主要 poke 与 AOE 伤害),**E** 第二(更大护盾 + Move Speed),**W** 最后。在 6、11、16 级各加一点 **R** — 但记住 Mantra 从 1 级就能用。

**符文:** 主系 **Sorcery**,带 **Summon Aery**、**Manaflow Band**、**Transcendence**、**Scorch**。Aery 在每个 Q 上触发提供额外 poke 伤害,在每个 E 上触发提供小护盾加成。副系 **Inspiration**,带 **Biscuit Delivery**(线上免费蓝量续航)与 **Cosmic Insight**(召唤师技能与装备的额外 Ability Haste)。

## 关键对线

- **Lulu / Janna:** 对线五五开。两位都是没有硬开团的 enchanter;线优由 ADC 决定。她们上前插眼时用 Q 消耗,但不要在线上压上 Mantra — 留到资源点轮转时再用。
- **Soraka:** 优势 poke 战。Q 减速加 Aery 触发能赢过她 W 的血量代价。在 3-5 级之前每个冷却都丢一个 Q,把她从兵线赶走。
- **Leona / Nautilus:** 苦手对线。她们用指向性 CC(像右键点一下就生效、不用瞄准的硬控,例如点击型眩晕)在你 **W** tether 之前就开团(发起战斗)。把 E 留到她们开团那一瞬间(护盾吸收爆发 — 1-2 秒内的高伤害 — 并提供 Move Speed 让你 peel out,即和 ADC 一起跑出去),没有视野时绝不把兵线推过河。
- **Pyke / Thresh:** 钩子射程与你 Q 射程相当。站在 ADC 身后,躲在小兵后面打断钩子的视线,在他钩子进入冷却时把 Q 扔给辅助 — 不是 ADC。
- **Blitzcrank:** 拉钩就是这条线的全部。只有在他 Q 进入冷却时再上前;一旦被钩到,立刻给自己套 E(护盾 + 速度让你有机会走回塔。)

## 强势期与胜利条件

- **1 级:** Mantra 已就绪。1 级 RQ 是强力的 invade 工具(潜入敌方野区为早期击杀做铺垫),因为 AOE 爆炸(以圆形范围打到所有目标的范围伤害)对扎堆的敌人(几个目标紧贴在一起)能造成实打实的伤害。
- **6 级:** 第二点 R 让 Mantra 冷却更短。Manaflow Band 叠满后,可以在下路 all-in 中频繁丢 Q-RQ-W 连招。
- **Bloodsong + Ionian Boots of Lucidity (~ 10-12 分钟):** 游走窗口打开(roaming = 离开自己的线去支援其他线)。用一发 Q 把兵线推强,然后走到中路河道,与打野和中单组成 3v2。
- **Ardent Censer + Moonstone Renewer (~ 24-28 分钟):** 团战巅峰。每个 E 护盾都会触发 Ardent 的攻速和 Moonstone 的叠加治疗。背靠这两件装备,你的 ADC 在任何对线中都能 outscale。

## 常见错误

- **在线上把 Mantra 浪费在 poke 上。** RQ 看起来很强,但在第 4 分钟烧掉 Mantra 意味着在敌方打野第 6 分钟从河道 gank(突袭你的线)时,你没有 AOE 爆炸可用。把 RQ 留作 W root 之后的衔接,或者用在小龙旁边扎堆的敌人身上。
- **用 E 套自己。** E 自己作为 panic button(快要死时的紧急释放)还行,但如果 ADC 在你身后死掉,护盾值与 Move Speed 就被白白浪费。默认把 E 给 ADC;只有在 ADC 已经安全时才 E 自己。
- **在敌方刺客地图上 missing 时还在 Q poke。** Karma 没有位移。如果敌方打野位置不明,不要前压到 Q 射程 — 你会被抓而无路可逃,白白把命送掉。
- **忘记 W 的脱离距离。** 你的 **W** 只有在 tether 整段时间都未被打破时才会触发 root。如果你在最大射程释放,而对方往后退一步,tether 就会断,什么收益都没有。当敌人 committed(用掉位移或逃生技能后)时再丢 W。
- **出输出装而不是辅助装。** Karma 可以打 AP 伤害,但 enchanter 出装(Ardent Censer, Moonstone Renewer, Redemption)给团队带来的价值远超一件 Rabadon's。除非领先得很大,默认走辅助装。

## 进阶技巧

把 **RE**(Mantra 强化 Inspire)放在向前突进的队友身上 — 不是放在自己身上。强化的 E 会给目标和附近所有友军套盾,并提供更广范围的 Move Speed 加成。在团队 commit 开团的那一瞬间放在 ADC 身上:AOE Move Speed 让全队同时拉近与敌方 back line 的距离,把一场普通团战变成强制的崩盘局。诀窍是在开团之前,而不是之后,卡好 RE 的时机,因为 Move Speed 加成在 "进场途中" 才最有用。
