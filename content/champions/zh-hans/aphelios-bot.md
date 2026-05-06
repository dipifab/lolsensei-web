---
title: "Aphelios Bot Build & Guide — Patch 16.9"
slug: "aphelios-bot"
language: "zh-hans"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Aphelios 下路 ADC 完整攻略:武器轮换基础、核心 marksman 出装、关键对线、强势期与节奏把握、新手常见错误规避,以及 W 取消等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios 按先固定后变化的顺序循环 5 把 Lunari 武器。同时只持两把(main-hand + off-hand);每把弹药有限,打空后强制 swap。"
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "主动技随 main-hand 切换:远程标记射击(Calibrum)、AoE 吸血冲刺(Severum)、对所有减速目标 root(Gravitum)、扇形爆发(Infernum)、哨卫炮台(Crescendum)。"
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "立即互换 main-hand 与 off-hand。冷却很短,每次施放都会翻转伤害类型(射程、lifesteal、AoE、减速、attack speed)。"
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios 没有真正的第三技能 — 该槽只显示 Alune 即将递来的下一把武器。用于提前几把规划连招。"
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "远程月光爆发,击中英雄后引爆。附加当前 main-hand 的独有效果(Calibrum 额外 mark shot、AoE 普攻、AoE 吸血等)。"
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对线肉前排(Sion、Ornn、Malphite):随敌方额外 HP 缩放的 armor pen"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对面强治疗(Soraka 辅助、Yuumi、Vladimir、Aatrox):施加 Grievous Wounds,治疗减半"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "需要 lifesteal 与护盾时:对方 2+ 刺客盯你时替换 The Collector"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对面强 AP 爆发(Syndra、Veigar、双法师阵容):低血触发护盾,加 Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "对面控制锁人(Malzahar 压制、Skarner R、Mordekaiser R):主动解控"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "推进到 two-item spike,然后在团战中循环 Calibrum + Gravitum,用 W swap、R 与 Q-root 连招锁住关键目标,配合队伍 engage。"
  weakness: "无 dash、无 escape,错误时机的错误武器直接打废一波团。1-3 级若被 punish 在堆叠 ammo 与装备前会一蹶不振。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "必须贴脸 commit 的短手 marksman"
      reason: "Calibrum(步枪)的射程超出他们的 auto-attack 区间:想 trade 就必须进身,你用 Q 的 mark shot 惩罚。随后 W swap 到 Severum,把对方塞过来的 chip damage 奶回来。"
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "缺乏机动的下路 scaler"
      reason: "Gravitum(炮)每次普攻附带减速,Q 把所有被减速的目标一齐 root。配合 6 级 R 跟进,无机动的目标在打完一段 channel 之前就会吃完 burst。"
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "前期弱、后期超神的 marksman"
      reason: "Aphelios 的 1-2 级配 Calibrum 能在 trade 上压制只想 farm 度过 lane phase 的对手。在他们出齐 3 件装之前持续施压,让他们永远到不了后期 spike。"
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "前期高压 marksman"
      reason: "他们 1-3 级窗口极其凶狠:短 cooldown、高基础伤害,而 Aphelios 的 Q 有 9 秒冷却且弹药有限。不烧掉用来推 wave 的 ammo 就无法 trade back。"
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "强 hard-engage 辅助"
      reason: "Aphelios 机动力为零(无 dash、无 blink)。一波辅助控制链甩过来,他还来不及 W swap 到 Severum 回血或者交 Flash 就死了。对线 engage = 选着送。"
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "远程 poke marksman"
      reason: "他们在连 Calibrum 都够不着的距离 poke(Caitlyn 陷阱+爆头、Senna 雾里 Q、Jhin W 定身)。Aphelios 无法拉近距离,只能不断掉血却无法回敬。"
---

## 概述

Aphelios 是 League 中理论上最复杂的 marksman:5 把不同的武器在他手中轮换,每把都有自己的 basic attack 与自己的 **Q**。任何时刻你只持两把 — main-hand(决定你的 auto-attack 与 **Q**)与 off-hand(伴随 main-hand 攻击周期性开火)。每把武器弹药有限(固定射击次数):打空后该武器被丢弃,Alune 把队列中的下一把递过来。这个英雄的精髓主要在于:知道下一把是什么,以及在关键瞬间你想哪两把同时上场。

游戏思路是熬过脆弱的 early game(无 dash、无 escape、繁琐的 ammo 管理),撑到两件套之后,通过 skirmish(2-4 人规模、比完整团战更小的小规模交火)滚雪球(把前期的小优势通过赢更多团战转化为更大优势)。用 **Phase (W)** 切到最能惩罚当前局面的武器:**Calibrum**(步枪)用于 poke(从远处用远程伤害消耗对方 HP)和 execute(收割已经残血的目标);**Severum**(镰刀手枪)用于 sustain(在持久战中回血与生存);**Gravitum**(炮)用于 lockdown(用 CC 把敌人钉住足够久,直到打死);**Infernum**(火焰喷射器)用于 waveclear 与团战 AOE(area of effect:面积伤害,而不是单体);**Crescendum**(查克拉姆)用于近距离 DPS spike(damage per second 的爆发)。

## 推荐出装

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion。Doran's Blade 是 marksman 的标准起手:少量 Attack Damage(AD)、一点 HP 与 lifesteal(用 auto-attack 造成的伤害按比例回血)。Aphelios 每一点 AD 都不能浪费,因为他的武器要消耗弹药。

**Core items(顺序):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — 第一件,目前 meta 的 DPS 选项。早期就给暴击 crit(auto-attack 有几率造成额外伤害),并附带攻击的流血被动(伤害分摊到接下来几秒,而不是一次结清),非常契合连射武器(Crescendum、Infernum)。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 鞋(每秒更多 auto)。几乎所有 Aphelios 局的默认选择,因为他每把武器都吃额外攻速。
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — HP 5% 以下的处决,加上 Lethality(一种忽略目标一部分护甲的 armor penetration,对 squishy 目标 — 即 ADC、法师等防御薄弱的英雄 — 尤为有效)。与 Calibrum 的 mark shot 完美搭配(Calibrum 的 auto-attack 会在敌人身上印一个 "mark":再次攻击该标记目标会从地图任意位置造成 bonus 伤害,**R** 也算)— mark shot 本就能 chunk(一次砍掉一大块伤害)残血目标。
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit 伤害倍率;已有两件 crit 装备时(Yun Tal + Collector 或 Yun Tal + RFC),Infinity Edge 解锁 175% crit 伤害,你的 auto-attack 在 burst(1-2 秒窗口内打出的伤害)上几乎翻倍。
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — Calibrum 的 auto-attack 与首次能量射击额外射程(RFC 在移动时每隔几秒蓄一发 "energized" auto — 该 auto 以延伸射程发射并 zap 目标)。与 kite(边攻击边后退、与威胁保持距离)完美协同。

**情境替换:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 敌方堆护甲时(Sion、Ornn、Malphite 前排 — frontline = 在前排吸收伤害的坦克/战士,后排 carry 在后面输出)替换 Rapid Firecannon。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 与 Lord Dominik's 同槽位,敌队治疗强(Soraka、Yuumi、Aatrox、Vladimir)时选这个版本:施加 Grievous Wounds,把敌方治疗砍半。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 长局需要 sustain,或敌方两名刺客都在咬你后排时,把 The Collector 替换掉(满血 7 秒护盾每次团战可以救你一次)。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 后期对位 AP 强爆发阵容(Syndra + Veigar + Annie)。护盾在 HP 阈值以下触发 — 即 HP 低于 35% — 吸收魔法伤害。
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 当一段控制(Malzahar 压制、Skarner R、Mordekaiser R)就能决定每场团战时,作为最后一件 swap。

**Skill order:** 主升 **Q**(提升每把武器主动技伤害)、副升 **W**(更快 swap = 每秒更多灵活性)、最后升 **E**。**R** 在 6、11、16 级照常加点。

**Runes:** 主系 **Precision**(围绕 auto-attack 构筑):核心符文 **Lethal Tempo**(对英雄战斗时附加攻速),然后 **Presence of Mind**(takedown 返还法力 — 对 Q 消耗 ammo 的 Aphelios 实用)、**Legend: Bloodline**(随击杀叠加的 lifesteal)、**Coup de Grace**(对低血目标额外伤害)。副系 **Resolve** + **Second Wind** + **Overgrowth** 用于强 poke 对线(Caitlyn、Senna),或 **Inspiration** + **Magical Footwear** + **Cosmic Insight** 用于预期会被动对线时。

## 关键对线

- **Draven:** 全图最难的对线。1-3 级 trade(短暂的 auto-attack 与技能交换)每次都输。站在辅助身后,只用 auto-attack 补刀(别在小兵上烧 Calibrum Q 的 ammo),等到 6 级用 **R** 把 trade 拉平。
- **Caitlyn:** 射程战。她的陷阱 + 爆头能 poke(从你的射程之外消耗你的 HP)到 Calibrum 都够不着的距离。她一接近陷阱就立刻 swap 到 **Gravitum**;减速 slow(降低移动速度)加上你的 Q root(把敌人钉在原地、不能移动也不能 dash 的效果)直接锁死她的 escape 时机。
- **Samira:** 想 dive 你(顶塔进塔下杀你,顶着塔伤也要击杀)。把 **Severum** 留给她贴上来 melee(近距离 auto-attack 范围)的瞬间 — AoE Q 能把她造成的 chip damage(虽小但持续磨血的伤害)奶回来,而你的辅助控制能在她 over-commit(进得太深、退不回去)时收掉她。
- **Jhin:** 6 级前他更能 poke,6 级后你的 DPS 更强(他的远程 poke 在前期占优,你的持续输出在 6 级后占优)。在线上不要 auto 换 auto(一次 "trade" = 短暂换血 — 他的 W 定身和第 4 发 crit 决定线权);2 级强 push wave(把兵线压在他塔下),第一件 Yun Tal 完成时 recall(回基地)从而带优势回线。
- **Kalista:** 脆皮、短手。用 **Calibrum** 主手 + Severum 副手做 auto trade;她的 dash 链会把她压进你的射程,而 Q mark shot 在她每一次跳跃时 punish 她。

## 强势期与胜利条件

- **2 级:** 多了一段武器主动技,你能在 trade 上跟上大多数 ADC。绝大多数 Aphelios 的对局都由谁干净吃下 2 级 all-in(没有退路、全力 commit 求人头的一波)决定。
- **6 级配 Calibrum:** 第一发 **Moonlight Vigil** 配步枪 main-hand 时会附加额外的远程 mark shot。如果敌方下路被 shove 到你的塔下(他们的兵线被推到了你塔下,处于脆弱位置),从大半屏外打出的 **R** + Q 处决窗口对一个清醒的辅助来说就是一颗白送的人头。
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows 完成 (~ 12-14 分钟):** 路线优先权翻转(你变成可以离线去支援别处团战、而不丢补刀或 HP 的那条路)。可以 shove(把自己的兵线推向敌方塔下)并 contest 小龙;小规模交火中 DPS 显著 spike(damage per second 在这件装备处会有明显跃升)。
- **3 件套 spike (Yun Tal + Berserker's + The Collector,约 22-25 分钟):** "spike" 指由等级或装备节点带来的明显战力跃迁。Aphelios 此时是游戏中持续 DPS 最高的 marksman。在此节点强开资源团(资源 = Dragon、Baron、Rift Herald、塔 — 提供团队 buff 或地图压力的中立目标),后排站位保持在 Calibrum 最大射程,而前排 frontline 帮你扛线。

## 常见错误

- **用 Calibrum Q 的 ammo 打小兵。** Q 的 ammo 留给英雄。Calibrum 的 Q 是你少有的远程威胁之一;为 fast-push(让兵线尽快撞上敌方塔)烧掉只在你这次同步 recall 时才划算,否则换出去的代价巨大。
- **不追踪队列中的下一把武器。** **E** 槽显示下一把武器。commit 之前一定先看:**Crescendum** 在队列后面时 swap 到 **Severum** 同时上前没问题;但 **Gravitum** 是下一把时同样动作就把 all-in 窗口(能完成击杀的几秒钟)浪费了。
- **团战站桩。** Aphelios 没有 dash。如果你在同一个点站够两秒,任何机动型英雄(Zed、Diana、Camille)都能秒掉你。每次 auto-attack 之间都要 strafe(边攻击边横向移动)— 步幅小,但要持续动。
- **R 一好就丢。** Moonlight Vigil 的价值完全取决于施法瞬间 main-hand 是哪把。Crescendum 查克拉姆对单体丢 **R** 是浪费;Infernum **R** 砸进 4 个挤在一起的敌人就是一个四杀。
- **对线 hard engage 选 Aphelios。** 这是 BP 错误,而非操作错误 — "engage" 指英雄强开团的工具(如 Leona Q 晕、Malzahar R 压制)。如果对面 Leona + Malzahar mid + Hecarim jungle,你一把武器都用不上。改用 Severum-friendly 的搭配补偿(peeler — 工作就是保护你免受 diver 入侵的辅助,如 Lulu 或 Janna)。

## 进阶技巧

学会 **Phase** 上的 W-cancel 时机:在 Calibrum 一发 mark shot 期间排队 swap,会让你用新武器的效果发出那发远程跟随 auto(例如 swap 到 Infernum,跟随 auto 就变成一道 AoE 锥形)。这把 Calibrum 的 mark shot 转化为没有任何其它 marksman 能复制的多目标 burst,也是你相对于一个 casual Aphelios 玩家最大的单点机制优势。
