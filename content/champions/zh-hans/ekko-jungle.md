---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "zh-hans"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Ekko 时间刺客打野完整攻略:打野清线路线、AP 刺客核心出装顺序、Domination 主系符文搭配、3 级抓人套路、强势期节奏、团战站位与切入时机选择、新手常见错误规避,以及进阶 W 安丢视野技巧的实战说明。"
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "对同一目标每打到第三下 (普攻或技能) 都额外造成法术伤害,且若目标是英雄,Ekko 会获得短暂的移速 burst。"
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "回旋镖式 skillshot:手雷飞出去减速命中目标,然后回到 Ekko 身上再造成一段独立伤害。两段都会命中,所以走位很重要。"
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "被动:对低血敌人的普攻附加额外法伤。主动:在地面放置一个延迟生效的圆圈,Ekko 进入后会减速并短暂眩晕圈内敌人。"
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "短距离 dash,强化下一次普攻并瞬移到目标身上造成额外伤害。主要的进入手段,也是触发被动第三下的关键。"
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "把 Ekko 倒回到大约 4 秒前的位置,落点造成范围法术伤害,并根据这段时间内承受的伤害回复生命。"
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 AD 爆发 (Zed, Talon, Kha'Zix, Rengar) — 金身切掉他们 R 重置后的击杀窗口"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要核心目标买了魔抗装就立刻接出 (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Aatrox, Dr. Mundo, Vladimir) — 伤害附加 Grievous Wounds"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "对位灵活 carry (Vayne, Ezreal, Tristana) — 每次命中减速,Q + E 轻松粘住"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "后期对位堆魔抗的前排 — 法穿加击杀后的小幅复活回血"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "从 fog 起手 W 眩晕,E 切入,血线低时用 R 重置团战。前中期通过 6 级前抓人和资源点 skirmish 滚出 snowball。"
  weakness: "前期清野慢、攻击距离短:强势 invade 打野能在 3 级直接惩罚他。R 冷却长 — 大招交完后 Ekko 没有任何保命按钮。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "没有指向性 CC 的远程脆皮打野"
      reason: "Ekko 的 W + E 起手能在他们打完一轮风筝前就贴上;R 重置让 all-in 即使对方支援赶到也安全收尾。"
    - examples: ["master-yi", "shyvana"]
      archetype: "前期弱、靠发育的 skirmisher"
      reason: "3 级 W + E + Q 的 6 级前抓人能在他们刷野时直接抓掉;一次击杀就能滚出 14 分钟前击杀对方 carry 所需的金钱差。"
    - examples: ["amumu", "zac"]
      archetype: "没有位移的开团坦克打野"
      reason: "Ekko 的机动性 (E + R 倒带) 能躲掉他们前摇明显的开团,而 AP 爆发对低魔抗坦克伤害最高。他靠墙角风筝并从 fog 里收掉对方 carry。"
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "前期 invade 强势的打野"
      reason: "Ekko 第一轮清野偏弱、3 级单挑也吃亏。他们在 W 和 E 满级前直接走进他的野区,把人头吃掉再用赏金 snowball。"
    - examples: ["nocturne"]
      archetype: "全图压力外加技能护盾的打野"
      reason: "Nocturne 的 E 是技能护盾,会挡掉 Ekko 的 W 眩晕 (= 每次 gank 的起手技能)。眩晕没了 gank 就失败,而 Nocturne 的 R 又超过 Ekko 的反 gank 工具射程。"
    - examples: ["galio", "maokai"]
      archetype: "前期叠魔抗的坦克"
      reason: "前期叠魔抗的打野会削平 Ekko 的中期强势:当 Lich Bane 连招只能蹭血而不能秒掉前排,他的 snowball 计划就会停下来。"
---

## 概述

Ekko 是一个 AP (= Ability Power,法术强度,影响法术伤害的核心属性) 刺客打野,靠 W 眩晕 → E dash → AA + Q 的快速连招秒掉脆皮 carry。被动 **Z-Drive Resonance** 奖励对同一目标连续命中三下:除了额外法伤,还会附带一段移速 burst。所以他的输出节奏不是疯狂放技能,而是把三下打到位。**Chronobreak (R)** 是他的安全网:把他倒回大约 4 秒前的位置,并根据这段时间内承受的伤害进行回血;意味着他可以一头扎进团战、敢于冒险,只要熬过 channel,后果就能被一键抹掉。

游戏思路:第一轮野怪干净清完 → 在 3 级抓机动性差的线 (Lux、Senna、Veigar 或没位移的中单) → 在己方 prio (= priority,自家线推得多、可以脱身去支援而不会丢兵) 的那一侧强抢 Scuttle (= 河蟹,击杀给视野和河道里一段小幅移速加成) → 围绕第二条小龙的 skirmish (= 1v1 或 2v2 的小规模交战,不是完整团战) 滚 snowball (= 把前期一点小优势放大成更大的优势)。Ekko 不是 scaling (= 时间越久越强) 型英雄 — 如果到 25 分钟还没人头,对面 ADC 会出完两件套,你也就没法再秒任何人。

## 推荐出装

**起始装备:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (适合 AP 的打野宠物,gank 时对敌方英雄附加 on-hit 伤害) 加 **Smite** (每个打野都必带的召唤师技能 — 对单一目标快速 burst 攻击,既能加快清野,又能从对面手里抢小龙、男爵这些资源)。

**核心装备 (按购买顺序):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 第一件 AP 节点。on-cast 额外伤害和蓝量 sustain,让 Q + W + E 套路在 E 的强化平 A 落下之前就先把目标打残。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿 (= 无视敌人一部分魔抗)。脆皮 carry 通常基础魔抗只有 30 左右,固定法穿基本等同纯额外伤害。
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= 释放技能后的下一次平 A 造成大量额外法伤)。Ekko 的 E 本身就强化下一次平 A,Lich Bane 直接叠在上面 — 这件就是把 E dash 变成秒杀的关键装。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外 burst (= 1-2 秒内打出大量伤害)。它的血量阈值被动 (= 目标低于一定血量才生效) 正好和 R 重置后的收尾时机吻合。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 AP 倍增器,整套装里上限最高的位置。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 AD 刺客 (Zed, Talon, Kha'Zix, Rengar)。金身 (= Ekko 进入 2.5 秒无敌但无法行动) 帮你撑过冷却,配合 R 几乎能扛下任何 AD all-in。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要核心目标开始堆魔抗 (Mercury's Treads, Maw of Malmortius, Spectre's Cowl) 就立刻接出。百分比法穿叠的魔抗越多越强。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Soraka, Aatrox, Dr. Mundo, Vladimir)。伤害自带 Grievous Wounds (= debuff,把目标回血量直接减半)。
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 对位灵活的远程 carry (Vayne, Ezreal, Tristana)。每次技能命中都附加减速,Q + E 直接钉住对方等收人头。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 后期对位堆魔抗的前排,替换 Shadowflame。法穿外加击杀后小幅复活回血。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果队伍需要更频繁的 R 作为再开 (= 大招更快可用,可以接二连三再开一波团) 工具,可考虑 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**。

**加点顺序:** 主升 **Q** (清线和主要消耗),副升 **E** (dash 伤害),最后升 **W**。**R** 在 6、11、16 级各点一级。1 级先点 **Q** 保证最稳的清野,2 级 **E**,3 级 **W**。

**符文:** 主系 **Domination** (刺客系 — 奖励单点击杀的属性加成),带 **Electrocute** (对同一英雄在 3 秒内打出三种不同来源的伤害,下一击造成额外 burst 伤害 — Ekko 的 W + E + Q 链条完美触发)、**Sudden Impact** (使用 dash 或 stealth 后 4 秒内额外法穿)、**Sixth Sense** (长 CD 自动揭示附近的敌方眼,提供视野压力,辅助打野路线)、**Ultimate Hunter** (每击杀一个不同的英雄就降低 R 的 CD)。副系 **Sorcery** 带 **Manaflow Band** (技能命中返蓝,补足 Ekko 偏小的蓝池) 与 **Transcendence** (技能急速 — 让所有技能更快回转,放大整套技能组的价值)。

## 关键对线

- **Lee Sin:** 强势的前期 invade (= 在你成型前就跑进你野区杀你的打野)。在自家 buff (= 给一段时间属性加成的小型野怪营,蓝 buff 与红 buff) 周围插眼盯人。4 级前不要正面打 — 他的前期 1v1 比你强。
- **Karthus:** 白送的对位。他的 R 能跨地图给你全队造成伤害,但完全没有位移 — W 砸他脚下,E 切进去,Q + AA,一轮 (= 一次完整的技能循环) 就能带走。每次他 commit 一波 gank 都去 counter-jungle (= 偷他的野怪)。
- **Master Yi:** scaling 上的死对头。20 分钟前杀掉他,否则你只能接受后期团战他打过你。在 ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** spike 时强行开团,趁他还在刷野时去 dive 他的下路。
- **Sejuani:** 难打的对位。她的 R 是 point-and-click (= 不需要瞄准,技能直接锁定目标),会在你 E dash 中途冻住你。等她把 R 交在别人身上再 commit。![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 比平时早一件做出来。
- **Rammus:** 别单挑。他的尖刺被动会反弹一部分平 A 伤害;你伤害大部分是法术 (Rammus 的尖刺能克),但他的 W 强化期 (= 临时的护甲与反弹倍增器) 仍然会削掉你的 Lich Bane 平 A。把另一边野区刷掉,只跟队伍合在一起。

## 强势期与胜利条件

power spike 指的是英雄在某个瞬间突然比一分钟前强很多 — 通常是新技能或新装备生效的那一刻。

- **3 级:** 第一套 **W** + **E** + **Q** 解锁。你终于可以在 6 级前 (= 大招还没解锁前) gank 线了 — 把 W 提前丢进 fog (= 视野外的黑色区域,草丛或墙后),等敌人踩进去眩晕,E 切入,Q 收尾撤离。这是 Ekko 6 级前最强的抓人套路。
- **6 级:** **Chronobreak (R)** 解锁。从这一刻起,所有 dive (dive = 走进塔下击杀低血目标) 都变得可以全身而退:吃几下塔伤、收掉目标、R 回安全位置。立刻强开团或抢小龙。
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~10-12 分钟):** 第一个真正的伤害 spike。一发 Q 就能把脆皮打残,完整连招直接秒掉血量低于 60% 的目标。在边路找 pick (= 抓单个站位失误的孤立敌人)。
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 成型 (~16-18 分钟):** 这就是那个 spike。强化的 E 平 A 加 Lich Bane Spellblade,一次 dash 就能打掉 ADC 大约 50% 血量。在小龙和男爵附近抱团 — 任何落单的敌人一套连招带走。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~24-28 分钟):** 即使堆魔抗的目标也扛不住完整爆发。如果对面 ADC 没出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) 或 Quicksilver Sash,你的 R 重置就是一发后排白送的人头。

## 常见错误

- **3 级前 gank 时不丢 W。** 没有 W 眩晕,Ekko 的 gank 只是一段慢吞吞的 E dash — 很容易被 kite (kite = 边后退边攻击,保持距离)。永远在走线前 2 秒先把 W 丢到 fog 里:延迟眩晕会在敌人对 dash 反应时刚好命中。
- **血一掉就按 R。** Chronobreak 会把你倒回 4 秒前的位置。如果你受到第一下平 A 就交大,你恰好回到了你想逃离的那场战斗里。等一下 — 在 R 的 channel (= 生效前的前摇时间) 期间硬吃伤害,最后的回血才足够多,落点也才真的更安全。
- **野区里靠 Q 清线刷蓝。** Q 的蓝耗高,且回程那一段才是更大的伤害 tick。绕过营地走,让回程的弹道经过整组怪两次;站着原地按 Q 等于浪费第二段命中。
- **没 prio 强抢小龙。** Ekko 的 smite-fight (= 双方打野同时为争夺资源点交惩戒的瞬间) 偏弱,因为 R 在 channel 中被打断就会取消。如果队友没有 prio (= 推线在外、可以自由支援),就放掉小龙改去做视野。
- **skirmish 中忽略第三下被动。** Z-Drive Resonance 在同一目标累积三下时,trade 伤害会翻倍。把 Q 丢到兵线消耗,等于把 stack 浪费在小兵上。Q 留给对英雄的 trade,而不是你不需要清的 creep。

## 进阶技巧

把 **Parallel Convergence (W)** 当作前置视野工具用,而不是只为眩晕做铺垫。施放 W 后,圆圈会在 3.5 秒后才生效,在这段 windup 里你能看到谁经过这片区域 — 等于在 chokepoint (= 敌人必须经过的狭窄通路) 或小龙坑后面免费做了一次 fog 探查。职业选手常用这个技巧侦察过河的对方打野,然后选择是带着眩晕直接 gank,还是不交人就撤。这一招让 W 同时变成抓人工具和 ward (= 在一片区域提供视野的小型物件)。
