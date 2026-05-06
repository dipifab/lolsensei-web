---
title: "Kog'Maw Bot Build & Guide — Patch 16.9"
slug: "kog-maw-bot"
language: "fr"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Guide Kog'Maw bot lane League of Legends Patch 16.9 : build hyper-carry on-hit, matchups clés, power spikes, erreurs courantes et une astuce de positionnement."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "À sa mort, Kog'Maw devient une bombe pendant 4 secondes puis explose en true damage. Une menace de dernier souffle, jamais un plan A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Projectile linéaire : dégâts magiques et shred d'Armor et Magic Resist de la cible quelques secondes. Passive : Attack Speed bonus permanent."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Auto-buff (~6s) qui étend la portée des autos et ajoute des dégâts magiques en % de HP max on-hit. Cœur de chaque teamfight."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Skillshot linéaire : dégâts et traînée qui ralentit. Outil de disengage et setup pour les autos pendant le W."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "Artillerie AOE longue portée sur zone au sol. CD bas, coût de mana qui grimpe à chaque cast. Poke, wave clear, executes cross-map sous 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "contre bots à gros poke : étend la portée de la première auto, tu chipes hors de leur fenêtre"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contre hard CC single-target qui bloque ton W (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contre comps dive lourd (Malphite + Yasuo, Hecarim) : la résu convertit un faux pas en deux contributions"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre frontline 3000+ HP (Sion top, Cho'Gath, double tank) : armor pen + W % HP fond les super-tanks"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps sustain lourd (Soraka, Aatrox, Dr. Mundo) : Grievous Wounds coupe les soins 5s"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Survis au mid game derrière ta front line, atteins le power spike à 3 items on-hit vers la minute 25, puis fonds l'équipe adverse pendant les fenêtres de W aux objectifs."
  weakness: "Pas de dash et portée d'auto de base seulement 500. Hookers, assassins et divers effacent Kog'Maw avant que le W revienne si son support est mal placé."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision avec Lethal Tempo : stack pendant le W et passe le cap de 2.5 attack speed, chaque fenêtre W devient un burst qui déchire les tanks. Triumph soigne au takedown, Legend: Alacrity ajoute de l'AS, Coup de Grace +8% sous 40% HP — les cibles que le R achève."
    secondary_rationale: "Sorcery secondaire : Transcendence pousse l'ability haste pour ravoir W et R plus vite dans les fights longs, et Scorch ajoute du poke depuis le R aux niveaux 1-5 pour rendre la lane moins pénible à un champion sans escape."
    secondary_alternative: "Contre supports hook ou burst (Blitzcrank, Thresh, Pyke), passe Sorcery → Resolve avec Bone Plating (cap de dégâts sur les 3 premiers hits après être touché) et Overgrowth (HP max bonus) : tu sacrifies du scaling pour survivre jusqu'au premier item."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "Tanks et bruisers qui empilent les HP"
      reason: "Bio-Arcane Barrage inflige des dégâts magiques en % de HP max à chaque auto : plus ils empilent de vie, plus tu les effaces vite. Les tanks sans dash ne peuvent pas te punir pendant ta fenêtre W."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Backline scalers immobiles"
      reason: "Living Artillery (R) frappe des cibles au sol à portée extrême. Les backliners qui doivent rester immobiles pour lancer leur sort principal se font chiper hors écran sans aucun outil d'escape pour répliquer."
    - examples: ["malphite", "amumu"]
      archetype: "Frontline d'engage stationnaire"
      reason: "Après leur R, ton équipe a 2-3 secondes de tir libre — exactement le temps d'un cycle W complet sur la frontline lockdown avant qu'elle ne récupère."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports hook avec lockdown single-target"
      reason: "Kog'Maw n'a ni dash, ni blink, ni flash sur le E. Un hook en lane = une mort : sa seule escape est Flash, un summoner à 5 minutes de cooldown."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Bot laners poke longue portée"
      reason: "Leur portée d'auto dépasse les 500 base de Kog'Maw sans W : ils le harassent gratuitement en lane et le forcent dans une early game pauvre en mana."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Assassins de roam"
      reason: "Ces champions atteignent la back line via dashes, sauts ou resets en stealth. Une fois passée ta front line pendant une fenêtre W, aucun item défensif sauf Guardian Angel ne te sauve à temps."
---

## Aperçu

Kog'Maw est un marksman hyper-carry construit autour d'une seule fenêtre courte et décisive : le buff de **Bio-Arcane Barrage (W)**. Pendant environ six secondes, tu deviens l'auto-attacker à plus longue portée de la map, chaque coup inflige des dégâts magiques en pourcentage de HP max de la cible, et les items on-hit comme Wit's End et Blade of The Ruined King transforment cette fenêtre en une tempête qui efface les tanks. Hors W, tu as une portée d'auto de base de 500 — court pour un marksman — pas de dash, pas de blink. Le prix d'être un monstre late game, c'est d'être l'une des cibles préférées des lane bullies agressifs pendant les quinze premières minutes.

Le game plan est simple : survis à la lane derrière un support enchanter (Lulu, Janna, Yuumi, Soraka), farm patiemment, atteins tes trois items on-hit vers la minute 25 et joue chaque teamfight derrière ta front line pour que ta fenêtre W reste incontestée. **Living Artillery (R)** atténue la douleur du early game en offrant du poke gratuit et un moyen de clear les vagues à distance sûre ; le coût en mana grimpe vite si tu la spammes, donc garde-la pour sécuriser des kills ou gérer les timers de vague, pas pour le harass.

## Build Recommandé

**Starting items :** Doran's Blade + Health Potion. Doran's Shield est acceptable contre un matchup de poke lourd (Caitlyn, Varus), mais Doran's Blade reste le défaut pour accélérer la rampe on-hit.

**Core items (in order) :**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — premier item : attack speed et proc de true damage au troisième coup ; synergie directe avec la fenêtre W on-hit.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bonus attack speed ; les seules bottes raisonnables pour un hyper-carry qui vit au cap d'attack speed.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — dégâts magiques on-hit plus Magic Resist ; le meilleur item unique contre comps AP-heavy et amplifie les dégâts magiques de ton W.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — les bolts appliquent l'on-hit à deux cibles supplémentaires : transforme ton W en wave clear AOE et en pression AOE de teamfight.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — dégâts on-hit en % de HP actuels, life steal et actif qui ralentit ; outil de duel que tu remplaces par ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** s'il te faut un bouclier au lieu du life steal.

**Situational items :**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — contre bot lanes à poke lourd (Caitlyn, Varus). La première auto énergisée étend ta portée effective W-auto : tu chipes hors de leur fenêtre de poke.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contre hard CC single-target qui bloque ton W (flèche d'Ashe R, snare de Morgana Q, suppression de Malzahar R). L'actif annule le CC d'un bouton.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contre comps dive lourd (Malphite + Yasuo, Hecarim). La résurrection convertit une erreur de positionnement en deux contributions au teamfight : exactement ce qu'il faut à un AOE damage dealer immobile.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre frontline empilant 3000+ HP. L'armor pen plus le shred magique % HP max de ton W efface les super-tanks plus vite que tout item d'attack speed pure.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps à sustain lourd (Soraka, Aatrox, Dr. Mundo). Grievous Wounds coupe leurs soins de moitié pendant 5 secondes ; sans, les dégâts de ton W sont soignés plus vite que tu ne les appliques.

**Boots :** Berserker's Greaves est le seul choix. Mercury's Treads est incorrect sur Kog'Maw — l'attack speed perdue coûte plus que la tenacity gagnée.

**Skill order :** Maxe **W** en premier (l'identité du kit), **Q** en second (shred d'Armor et Magic Resist plus passive attack speed), **E** en dernier (utility uniquement). Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Sorcery** avec **Transcendence** et **Scorch**, ou **Resolve** avec **Bone Plating** et **Overgrowth** contre supports hook ou burst.

## Matchups clés

- **Caitlyn / Varus :** Bot laners à poke longue portée. Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, cache-toi derrière la vague et farm sous tour jusqu'au niveau 6. Demande à ton support des wards rivière et tri-bush ; leur pression chute dès que tu finis ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**.
- **Draven :** Il te surclasse dans tout all-in (échange total jusqu'à la kill) avant le 6. Égale son niveau sur la lane priority, ne trade jamais d'autos en espace ouvert et utilise le **E** pour le ralentir s'il te court dessus. Ses haches l'obligent à se positionner en avant — punis avec le poke du **R** après le 6.
- **Lucian :** Évite les trades d'auto-attack (sa passive double-shot gagne les trades courts). Approche-toi seulement pour last-hit et utilise la fenêtre W après la minute 8 pour outrange-r son **E** dash de 100+ unités.
- **Jhin / Senna :** Matchups safe. Aucun n'a de dash et les deux veulent se positionner à longue portée, mais aucun ne tient le burst en % HP max de ton W une fois que tu as un item. Cherche l'all-in dès que ton support a un CC prêt et que ton W est online.
- **Ezreal :** Skill-matchup. Il poke avec **Q** mais chaque cast le bloque sur place. Approche-toi pendant l'animation de son **Q** pour last-hit, garde le **E** pour quand il utilise son **E** dash afin de placer le slow, et ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** est bon si son équipe a du follow-up CC après son ulti.

## Power spikes & conditions de victoire

- **Niveau 3 :** Avec un point dans chaque sort, tu as ton kit de poke complet (slow **E** → auto pendant **W** → **Q** shred). C'est ta première fenêtre crédible d'all-in si ton support a un CC.
- **Niveau 6 :** Le premier **Living Artillery** débloque le poke à toute la lane et les last-hit secures à 1300+ unités. Le wave-clear depuis l'autre côté de la rivière s'ouvre aussi quand tu es push.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves complétés (~ minute 14-16) :** premier vrai power spike de teamfight. Le proc de true damage au troisième coup se combine au % HP max du W pour menacer instantanément n'importe quel squishy en portée.
- **3 items on-hit online (~ minute 25-28) :** Avec ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King**, ta fenêtre W efface les barres de HP de toute l'équipe adverse en six secondes. Force Baron, Atakhan et Elder Drake ici : c'est le moment autour duquel ton équipe doit jouer.

## Erreurs courantes

- **Lancer W en cooldown pour les trades.** Chaque W brûlé en lane est un W qui te manque pour le prochain teamfight. Garde-le pour les all-ins committed, les scuttle skirmishes et les fights d'objectif, pas pour le poke ; **R** est ton outil de poke.
- **Spam R jusqu'à manquer de mana.** Chaque Living Artillery cast dans une courte fenêtre coûte plus de mana que la précédente. Après 3 casts en 6 secondes, tu paies 100+ mana par tir. Limite-toi à 2 d'affilée sauf si tu sécurises une kill.
- **Rester à la portée maximale de W pendant un fight.** La portée max te sort du peel de ton support. Tiens-toi à une distance d'une auto-attack derrière ta front line, pas sur sa pointe — les assassins (tout champion qui burst une cible en 1-2 secondes) te ciblent dès qu'ils voient ton chapeau dépasser.
- **Pick Kog'Maw sans support enchanter.** Lulu, Janna, Yuumi et Soraka ne sont pas des préférences — c'est le contrat. Avec un support hook ou engage, tu n'as aucun moyen de survivre à la lane phase et tu scales vers un fight que tu n'atteindras jamais.
- **Oublier le shred du Q.** Toucher **Q** avant le W sur un tank coupe son Armor et Magic Resist plusieurs secondes. Ouvre toujours l'all-in avec **Q** quand tu es en portée ; les dégâts on-hit qui suivent tombent comme si la cible avait un item défensif en moins.

## Conseil avancé

Bufferise l'activation de **Bio-Arcane Barrage (W)** dans le même input que ton auto-attack de last-hit. Appuyer sur W juste avant l'auto annule le wind-up lent de Kog'Maw et démarre la fenêtre W 0.1-0.2 seconde plus tôt — sur un buff de six secondes, c'est environ une auto-attack supplémentaire. En teamfight, c'est la différence entre placer quatre autos pendant W sur la front line adverse et en placer cinq avant que le premier dive ne te tombe dessus ; c'est la mécanique avec le meilleur ratio valeur/effort à entraîner en practice tool sur un mannequin.
