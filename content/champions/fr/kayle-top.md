---
title: "Kayle Top Build & Guide — Patch 16.9"
slug: "kayle-top"
language: "fr"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Guide Kayle top pour League of Legends Patch 16.9 : plan de survie en lane, build hyper-scaling AS+AP, matchups clés, power spikes niveau 11 et 16 et erreurs courantes."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle se transforme 4 fois en montant de niveau (1, 6, 11, 16). Au 6 elle obtient des auto-attacks ranged ; au 16 ses autos déclenchent des ondes AOE de feu on-hit."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Skillshot linéaire : dégâts, slow et shred d'armor + magic resist sur le premier ennemi touché et ceux derrière. Seul outil ranged pré-6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal et movement speed sur Kayle et l'allié le plus proche. Sustain en lane pré-6, peel et chase tool plus tard."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Passive : dégâts magiques bonus sur les autos. Active : la prochaine auto devient ranged et inflige des dégâts magiques bonus sur HP manquants. Post-6 la passive ajoute de l'AOE on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Cible un allié (ou soi-même) avec quelques secondes d'invulnérabilité, puis explose en dégâts magiques AOE. Save tool, couverture d'engage et finisher."
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap en 2e item si la lane est calme et que tu veux un burst spike par-dessus Nashor's"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contre top laners AP lourds (Rumble, Vladimir, Sylas) si leur poke te ferme avant le 11"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps qui empilent du heal (Aatrox top, Soraka, Dr. Mundo) — applique Grievous Wounds sur les autos"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès que deux ennemis finissent un item de Magic Resist (Mercury's Treads ne comptent pas, items finis seulement)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contre lanes qui gagnent à l'auto-attack (Fiora, Camille, Tryndamere) — swap depuis Berserker's si la survie est le seul objectif"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Survis en lane jusqu'au niveau 11, puis monte en puissance avec Nashor's Tooth + Rabadon's Deathcap. Au 16 tes ondes AOE on-hit gagnent les teamfights depuis la back line sous couverture R."
  weakness: "Pré-niveau 6 tu es une melee lente et squishy avec un seul skillshot à courte portée. Les top laners avec all-in early fort (Darius, Renekton, Riven) te tuent avant tes power spikes."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary : Lethal Tempo empile l'attack speed en combat et scale les ondes AOE de la passive (post-6 et post-16). Triumph heal sur takedown, Legend: Alacrity ajoute de l'AS permanent, Last Stand pump le dégât à HP bas — où Kayle vit en late."
    secondary_rationale: "Inspiration secondary : Biscuit Delivery te rend HP et mana en phase de survie pré-6, Cosmic Insight réduit le cooldown de Flash et des actives item donc Zhonya's revient plus vite en teamfight."
    secondary_alternative: "Contre lanes de poke fort (Vladimir, Rumble, Quinn) swap Inspiration pour Resolve avec Second Wind (regen passif après dégâts subis) et Overgrowth (HP scaling permanent) pour tenir jusqu'au power spike niveau 11."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "Sans burst ni chaînes de hard-CC ils ne peuvent pas punir ton pré-6 faible, et au niveau 11 avec autos ranged tu les out-DPS depuis une distance sûre."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "Vous scalez à la même vitesse : toute équipe qui te laisse atteindre le 16 perd, parce que les ondes AOE on-hit de Kayle devancent leur wombo."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Ulti globale fait de toi le meilleur peeler de la game — drop R dès qu'ils se font dive et ton carry survit à toute une chaîne de burst sans une égratignure."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "Ils te tuent avant le power spike niveau 6. Leur CC chain plus sustained damage arrache 70%+ HP à Kayle en un all-in de 4 secondes, et tu n'as pas de dash pour disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "Le E hookshot de Camille et le dash Q3 de Yone ignorent la position que tu essaies de tenir ; ils ferment l'écart avant que ton trade Q + auto se conclue."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "La R d'Olaf lui donne CC immunity et true damage sur R+axe, la R de Garen fait du true damage qui scale sur HP manquants — tous deux te finissent à travers Zhonya's Hourglass et même à travers le front-end de ta R."
---

## Aperçu

Kayle est une hyper-scaling carry qui change d'identité tout au long de la partie : une melee lente et squishy au niveau 1, une poker ranged au 6, un vrai monstre de late game au 11 et une boule de démolition AOE d'équipe au 16. Sa **Divine Ascent (P)** est le kit — chaque palier débloque un nouveau stat block (attack speed, range, ondes de feu on-hit). La top lane est sa maison naturelle parce que la longue ligne lui donne l'espace pour jouer passive sans saigner du tempo.

Son game plan, c'est la survie, pas l'agression. Perds des CS s'il le faut, ne meurs jamais et fais confiance à la build : ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** au niveau 11 transforme la passive ranged en vrais dégâts, et ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** au 16 fait que les ondes AOE on-hit effacent des teamfights entiers depuis la back line sous couverture de **R**.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Le bouclier transforme la lane de "je meurs en deux trades" à "je perds des CS mais je vis". Saute Doran's Ring même si Kayle scale en AP — pré-6 tu n'as pas le kit pour l'exploiter.

**Core items (dans l'ordre) :**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — les bottes d'attack speed nourrissent tes ondes on-hit. Rush bottes en premier, puis monte pièce par pièce vers Nashor's.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — l'item le plus important pour Kayle. Combine les deux stats qu'elle veut dans le même slot (50% attack speed + 90 AP) et ajoute des magic damage à chaque coup. C'est le spike qui te fait passer de "top laner faible" à "vraie carry".
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplie tout ton AP scaling de 30%, et tu as beaucoup à multiplier (E passive, R, ondes AOE post-16).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — la stasis est ta bouée contre les divers et pour caler le cooldown de ta R. À acheter en 3e ou 4e selon la comp adverse.

**Situational items :**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contre top laners AP lourds (Rumble, Vladimir, Sylas). Ajoute attack speed plus magic resist plus magic damage on-hit, donc défensif et offensif à la fois.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps qui empilent du heal (Aatrox top, Soraka mid, Dr. Mundo). Applique Grievous Wounds à chaque auto, ce qui réduit le heal de 40%.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès que deux ennemis finissent un item de Magic Resist (pas Mercury's Treads — trop bon marché ; items finis seulement).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — second item alternatif quand la lane est calme et que tu veux un burst spike par-dessus Nashor's.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contre lanes qui gagnent à l'auto-attack (Fiora, Camille, Tryndamere). Swap depuis Berserker's si la survie est le seul objectif.

**Boots :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut pour le scaling d'attack speed. Plated Steelcaps quand un AD bully rend la lane impossible.

**Skill order :** Max **E** d'abord (ton outil de dégâts avant et après le 6), **Q** ensuite (slow plus long + shred meilleur par rang), **W** en dernier. Un point dans **R** aux niveaux 6, 11, 16. Ouverture **E-W-Q** pour le sustain en lane.

**Runes :** Primary **Precision** avec **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Stat shards : Attack Speed, Adaptive Force, Health Scaling.

## Matchups clés

- **Darius :** Hard counter. Distance maximale, tu rentres seulement pour les last-hits, jamais pour les trades pré-6. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, accepte de perdre 30+ CS, ping le jungler.
- **Garen :** Lane facile post-6. Il ne peut pas interrompre ton auto ranged avec quoi que ce soit, donc kite-le (recule en tirant pour garder la distance) avec **Q** slow + auto ranged. Attention à sa **R** à HP bas — true damage qui scale sur HP manquants, ignore Zhonya's Hourglass.
- **Mordekaiser :** Survie pré-6, snowball (avantage croissant : kill → gold → item → plus de kills) post-11. Sa **R** t'isole de l'équipe pendant 7 secondes ; s'il te prend avant le niveau 11, tu meurs. Utilise **Flash** pour esquiver le pull de **E**, et pré-build **Mercury's Treads** s'il t'attrape plusieurs fois.
- **Camille :** Counterpick. Son **E** hookshot ignore le spacing que tu essaies de tenir. Achète ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** au lieu de Berserker's, ward la brush de lane et ping le jungler si elle a deux niveaux d'avance.
- **Nasus :** Pari pré-6, tu gagnes post-11. Son **W** wither (un slow lourd sur toi) lui gagne le duel avant que tu aies des autos ranged. Une fois Nashor's en ligne et que tu out-DPS sa rampe de stacks, push les waves et oblige-le à réagir.

## Power spikes & conditions de victoire

- **Niveau 6 (R débloquée) :** Ta première forme avec autos ranged s'active, et **Divine Judgment** te donne un save tool. Arrête de coller la tour — tu pokes à 525 de portée et tu transformes les dives en kills avec une **R** bien timée sur toi-même.
- **Niveau 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth fini (~ minute 18-22) :** Le plus gros spike de la partie. La portée d'auto-attack monte encore, la passive scale avec attack speed et AP, et le wave control bascule. Commence le group play : tourne avec l'équipe, cherche les objectifs.
- **Niveau 16 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 28-32) :** Tes auto-attacks déclenchent des ondes AOE de feu on-hit. Une auto sur le frontline blesse tout le monde derrière. À partir de là, tu dois être la plus grosse source de dégâts de ton équipe, peu importe le rôle.
- **N'importe quand avec ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R combo :** Active **R** sur toi pour gagner l'invulnérabilité, puis enchaîne Zhonya's Hourglass quand R termine. Ça fait environ 5 secondes d'immunité en teamfight pendant que ton équipe peel — assez pour retourner la plupart des engages.

## Erreurs courantes

- **Essayer de trader auto-pour-auto pré-6.** Kayle est melee avec un base damage faible early. Même un seul mauvais trade contre Darius ou Renekton lance le snowball que tu ne rattraperas pas. Garde **W** pour le sustain, last-hit seulement.
- **Gaspiller R sur soi-même pour survivre au poke.** **Divine Judgment** a 160 secondes de cooldown au rang 1 — c'est tout le teamfight de mid-game perdu. Garde **R** pour les all-ins entrants ou pour protéger ton ADC pendant les fights de drake.
- **Rester en frontline au niveau 16.** Tes ondes AOE on-hit rendent le mieux depuis la back line, derrière ton tank. Positionne-toi comme un ADC — laisse le frontline encaisser pendant que tu tires des ondes à travers eux.
- **Prendre des camps de jungle avant le niveau 11.** Kayle clear lentement et perd des HP avant son power spike. Reste en lane, push les waves, recall à mana plein — pas d'invade ni de fight de scuttle pré-Nashor's.
- **Vendre ses bottes pour un 6e item trop tôt.** En late tu peux swap les bottes pour un item de dégâts (Mejai's Soulstealer, Cryptbloom), mais seulement si tu es 5/0 en avance et que les fights sont des group fights garantis. Si tu es à égalité, garde les bottes.

## Conseil avancé

Maîtrise le **R-on-self peel pattern** dans les teamfights de mid-game. Quand le diver adverse (Camille, Hecarim, Sett) saute sur ta back line, n'appuie pas **R** sur ton ADC — appuie-la sur toi-même, marche dans la ligne du dive, puis lâche l'explosion AOE sous les pieds du diver. Les 2,5 secondes d'invulnérabilité forcent le diver à soit s'engager et manger l'explosion (kill gratuite), soit reculer (ton équipe reset le fight à égalité). L'astuce, c'est la portée : **R** a 900 de cast range, donc tu peux te cibler toi-même même en étant 8 unités derrière ton ADC.
