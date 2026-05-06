---
title: "Brand Jungle Build & Guide — Patch 16.9"
slug: "brand-jungle"
language: "zh-hans"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "英雄联盟 League of Legends 16.9 版本 Brand 火男打野完整攻略:惩戒打野路线、燃烧法师清野节奏、抓人时机选择、关键对位克制思路、强势期把握、新手常见失误规避,以及隐身 W 抓人等进阶技巧一站式整理。"
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand 的技能会让目标进入 ablaze(燃烧)状态(持续 4 秒,最多 3 层)。叠满 3 层时引爆一次小范围 AOE,并重新触发技能效果。"
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "直线非指向技能,造成法术伤害。若目标已处于 ablaze 状态,则将其眩晕 — 你的抓人锁定与小规模团战起手。"
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "短暂前摇后落下的延迟 AOE 区域。处于 ablaze 状态的目标多承受 25% 伤害。打野清野的核心工具。"
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "指向爆炸,弹射到附近敌人。若主目标处于 ablaze,则弹射范围加倍 — 野怪间的弹射加速清野。"
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "远程火球,在敌人间弹跳最多 5 次,优先选择 ablaze 目标。在小龙坑、虚空幼虫坑附近的小规模团战中爆炸伤害。"
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对线前期突进型敌人(Lee Sin、Xin Zhao、Hecarim、Diana)— 金身弥补零位移弱点"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "领先且对方没有魔抗时 — 施法后移速被动让 Brand 在小规模交战中风筝"
    - dd_id: "3135"
      name: "Void Staff"
      against: "对方核心目标买出第一件魔抗装时换装(Mercury's Treads 也算)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体魔法 CC 起手(Ahri R、Lissandra R、Nautilus 钩子)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "在资源点附近用 R 在抱团敌人间弹射打小规模交战。E 推完兵线后抓人(扩散触发免费 Q 眩晕)。强势期窗口为 8-18 分钟。"
  weakness: "Liandry's 之前清野最慢的 AP 选择,无逃生位移,无打野自带回复。容易被高机动性打野早期入侵和拥有硬 CC 反制 AOE 的打野克制。"
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 主系:Arcane Comet 在每次 W 或 E 命中时触发,在 ablaze 之上叠加免费爆发。Manaflow Band 必带 — Brand 打野前期蓝量极度紧张。Transcendence 把技能急速推过 40%,Scorch 收尾残血野怪与抓人。"
    secondary_rationale: "Resolve 副系:Second Wind 让你在不买药的情况下穿过野区(Brand 没有 Fiddlesticks 治疗或 Warwick 吸血那种自带回复)。Overgrowth 提供随击杀野怪叠加的额外生命 — 直接弥补缺乏防御的脆弱性。"
    secondary_alternative: "对面前期入侵阵容很强时(Lee Sin + Pyke 游走、Elise + Galio),把 Resolve 换成 Inspiration,带 Biscuit Delivery(最弱清野的蓝量补给)和 Cosmic Insight(小龙附近惩戒可用度更高)。"
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "无逃生位移的群体起手坦克"
      reason: "他们 R 命中的瞬间,同一团敌人正好站进你的 W 范围。R 在每个抱团英雄之间弹射,对他们的起手回应不再是 5v5 而是团灭。"
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "必须冲脸的战士"
      reason: "他们冲进你的队伍打输出,且没有撤退手段;Brand 的 E 点燃 ablaze,Q 在他们贴脸瞬间眩晕,R 在他们能撤回前锁定第二个目标。"
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "依赖引导或隐身的打野"
      reason: "Brand 用 ablaze 状态下的 Q 眩晕打断 Fiddlesticks 的恐惧/大招引导,用 W 预判触发 Eve 引导前的位置;两者都依赖长起手,Brand 一套技能就能打断。"
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "前期机动小规模交战型打野"
      reason: "他们在 3 级、Liandry's 没出之前入侵 Brand。Brand 没有逃生位移:Lee Sin 的 Q+W 连招、Elise 的下落、Graves 的位移都能跨过 Q 弹道,而 Brand 清野太慢无法补回打架的损失。"
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "高机动刺客打野"
      reason: "他们闪避/位移过 Q 弹道,让 Brand 无法命中眩晕,然后在近身把他爆破,而他没有自保。即便买了 Zhonya's,1v1 中也只是延迟必然结局。"
    - examples: ["nocturne", "shaco"]
      archetype: "封视野的抓人型打野"
      reason: "他们绕过 Brand 依赖的眼位(无自带反隐、无闪现起手)。Nocturne 的 R 切断你队伍视野;Shaco 的 Q 隐身穿过眼位。看不见敌人来袭时 Brand 无法预瞄 Q。"
---

## 概述

Brand 打野是一名以**资源点团战和 6 级后抓人**为核心,而非快速清野或单人入侵的 **AP 小规模交战型法师**。技能组与中单 Brand 完全相同 — 给目标点火,用 **Q** 眩晕处于 ablaze 状态的目标,**R** 在抱团敌人间弹射 — 但定位不同。作为打野你用线权(线霸先把兵线推过去获得的逐线优势)换取河道控制权:每一次小龙争夺、每一次 grub 刷新(grub 是虚空坑里的小型中立野怪,击杀后给金钱并给击杀方一份团队加成)、每一次 Scuttle 小规模交战(Scuttle = 河道中立螃蟹,提供视野和小幅增益),都是 **R** 在三四个抱团敌人之间弹射、把均势团变成团灭的机会。

他的运营节奏在打野中算得上很死板。前三个野怪打满清野(根据出生位置 red → krug 或 blue → gromp),只在出现干净 **W → Q 眩晕** 窗口时 3 级抓一次线,回城买 **Liandry's Torment** 配件,8 分钟之后就守下一个资源点。Brand 没有逃生位移,前期没有单挑能力,单体清野是所有 AP 打野中最慢的 — 不在野区入口插眼就会被入侵直接送掉游戏。回报是 6 级后的强势期:**Pyroclasm** 在河道抱团团战中是游戏内伤害最高的大招之一,这套技能会逼迫敌方面对一个他们往往没有解散手段去回答的问题。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (远程打野默认 — 提供加强清野并给金钱的惩戒小宠物) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**核心装备(按顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade 任务升级(野区经验积累够后约 3-4 分钟自动进化)。AP 爆发打野默认伙伴:在施放技能后的下次普攻附带额外法术伤害,与 Brand 的 ablaze 完美契合。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件成品。百分比当前生命的灼烧惩罚资源点的高血量(小龙、男爵、峡谷先锋),且与每次 ablaze 跳动叠加。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿,核心装之间最便宜的强势点。
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 每次技能命中提供减速,弥补 Brand 最大的弱点(无追击、无逃生)。让你能走向想风筝你的敌人,并且没有闪现也能抓人。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期成长槽位。除非你领先 4 个以上人头,否则放第五件;领先时提前 rush 滚雪球("snowball" = 不断扩大的早期优势:击杀 → 金钱 → 装备 → 更多击杀)。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对前期突进型敌人(Lee Sin、Xin Zhao、Hecarim)。当一连串位移越过你的前排(前排即站在最前面替你挨伤害的坦克和战士)时,金身是 Brand 唯一的回应。
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 领先且对方还没开始堆魔抗时。施法后移速被动让 Brand 在小规模交战中风筝("kite" = 一边后退一边攻击,保持距离)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 任何核心目标买出第一件魔抗装备的瞬间。 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (魔抗鞋)算作第一件 MR。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体可预读魔法 CC 起手(Ahri R、Lissandra R、Nautilus 钩子)。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果对面有 3 个以上带魔法伤害的硬 CC 威胁,换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点:** 主升 **W**(基础伤害最高且为主要清野工具),副升 **E**(野怪间清野提速及抓人扩散),最后升 **Q**。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Sorcery** 带 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Resolve** 带 **Second Wind** 与 **Overgrowth** 提供野区回复。

## 关键对线

- **Lee Sin:** 6 级前所有 1v1 都输。他的 Q+W 连招会跨过你的 Q 弹道。6 级前避免单独小规模交战,改打满清野,并在 1 分 30 秒处给自家野区两个入口插眼。
- **Hecarim:** 均势对位。他在风筝你时占优,但团战中会为了 R 弹射而抱团。把 Q 留给他冲锋的瞬间 — 眩晕一个冲锋中的 Hecarim,他整套起手计时器就废了。
- **Karthus:** 你抓人更强,他后期更强。在 16 级前围绕小龙强开。一旦 Defile(他满级被动,周身脉冲伤害,即他在灰屏后用来收人头的 AOE 形态)开启,没有 Banshee's Veil 你就不能进他队伍。
- **Sejuani:** 你吃定她。她大招拉到一起的每个英雄之间都会被 R 弹射;以起手回应起手。6 级前她 1v1 还是赢你 — 别去入侵,跟中单合并打 grub。
- **Master Yi:** 1v1 完克。在狭窄河道(小龙坑、男爵坑)强迫 5v5,在那里他的 W 净化救不了他在连环 R 弹射下。如果他出 Wit's End,第二件直接 Zhonya's Hourglass。

## 强势期与胜利条件

- **3 级(W + E + Q):** 第一次抓人能力。每个技能各一点后 **E → W → Q 眩晕** 连招就齐了。如果对线英雄没闪现还过线,你就有击杀套路。
- **6 级(R 解锁):** 第一次资源点强势期。**Pyroclasm** 在 Scuttle 小规模交战(河道螃蟹团)中每次弹射约打掉脆皮 50% 的血量。R 转好就打 Scuttle。
- **Liandry's Torment 出装(约 9-12 分钟):** 清野速度反转,资源点 DPS(DPS = 每秒伤害,这里指对小龙/男爵/grub 血量的)翻倍。从此刻起你应当主动开小龙,而不是被动响应。
- **Rabadon's Deathcap 出装(约 24-30 分钟):** R 完整弹射可秒脆皮。强迫抱团资源点团战 — 男爵、灵魂龙、Atakhan ("Atakhan" = 后期约 14 分钟刷新的中立坑头领;不熟悉的话,把刷新视为强制 5v5)。

## 常见错误

- **想像快速清野打野那样清野。** Brand 没有自带回复也没有攻速。6 级前别和 Lee Sin 抢 Scuttle — 打满清野,到 6 级后再开始抓人和小规模交战。
- **野区单纯用 Q 消耗。** 没有 ablaze 的 **Q** 是慢速弹道,对位移打野几乎打不中。永远先用 **W** 预判落点,或先用 **E** 命中能扩散 ablaze 的小兵。
- **把大招扔给孤立的敌人。** **R** 弹射用在单一目标就是浪费 — 它会在同一个英雄身上来回弹跳,且伤害逐次衰减。把 **R** 留给抱团团战,而不是 1v1 追击。
- **不在自家野区做视野。** 1 分 30 秒在三角草丛和像素草丛放 Stealth Ward。Brand 没有逃生位移,看不见的入侵就是给高机动打野白送的人头。
- **没有 R 时贪资源点惩戒。** 小龙和 grub 血量是成长的,你的惩戒伤害不是。如果你没 R 还要争小龙而对方打野有 R,你会输掉惩戒战和小龙。

## 进阶技巧

练习 **隐身 W 抓人**。从被战争迷雾遮挡的河道方向接近线("fog of war" = 你方视野之外未被照亮的区域)。把 **W** 放在敌方对线英雄*下一步*会踩到的位置(根据兵线预判他的走位)— Pillar of Flame 落地有延迟,且施法本身不破除隐身或暴露视野。W 落地并触发 ablaze 的瞬间,在眩晕窗口里发 **Q**。做对了,敌人在小地图上从来看不到你的英雄:他只看到一个 W 出现在脚下,被定身,在队友能 ping 之前就死了。这套连招就是让"还行的 Brand 打野"变成能 carry 比赛的 Brand 的关键。
