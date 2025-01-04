---
layout: layout/cours.njk

title: "Accessibilité Numérique"
date: 2024-09-12
tags: ["accessibilité", "numérique"]
authors: ["Nicolas Vallée","Loïck Goupil-Hallay"]
---

## Définition
L'accessibilité numérique consiste à **permettre l'utilisation et la consultation des ressources numériques** sur **tout type de support** (ordinateur, téléphone portable, tablette, mobilier digital,...) à **destination du plus grand nombre de personnes** et notamment aux personnes souffrant de handicap sensoriel, mental ou cognitif mais aussi de handicap physique lourd.

| Temporalité | Toucher | Ouïe | Vue | Voix |
| ----------- | ------- | ---- | --- | ---- |
| **Permanent** | Une main en moins | Sourd | Aveugle | Muet |
| **Temporaire** | Un bras dans le plâtre | Infection de l'oreille | Cataracte | Laryngite |
| **Situationnel** | En train de porter un enfant | Bruit de fond | Reflet sur l'écran | Fort Accent |

L'un des moyens d'appréhender le handicap, c'est de le considérer comme une inadéquation entre la personne et son environnement. Cette inadéquation peut être permanente, temporaire ou situationnelle.

### Impacts
*L'« effet bateau » doit son nom aux trottoirs bateau, les parties de trottoir surbaissées au niveau de la chaussée. Ils ont été adoptés dans les villes du monde entier pour aider les personnes utilisant des équipements de mobilité à franchir les trottoirs. Toutefois, de nombreuses personnes profitent des trottoirs bateau, notamment les cyclistes, les parents conduisant des poussettes, les voyageurs avec leurs valises à roulettes, et tous ceux qui utilisent des équipements dotés de roues.*

**« Bon nombre d’organisations réalisent qu’intégrer l’accessibilité amène de nombreux bienfaits en limitant les risques légaux, en renforçant la présence de la marque, en améliorant l’expérience utilisateur autant que la productivité interne. »**\
*Paul Smyth, Directeur de l’Accessibilité Numérique, Barclays*


| Permet l'inclusion du grand nombre | Être une entreprise responsable et innovante | Concevoir des meilleurs produits digitaux |
|------------------------------------|---------------------------------------------|--------------------------------------------|
| Au moins 1 milliard de personnes (15% de la population) présente un handicap reconnu | La prise d'engagement en faveur de l'accessibilité numérique participe à la Responsabilité Social de l'Entreprise | Des interfaces accessibles sont des interfaces plus intuitives, mieux conçues et optimisées (ex : SEO) |
| Viellissement de la population | Bénéfices en termes d’image, de réputation et d’attractivité | Un code plus propre et une meilleure facilité de réutilisation et d’amélioration |
| Limite les contraintes liées à la fracture numérique (maîtrise des outils, zone peu connectée) | Penser accessible est vecteur d’innovation | Une meilleure scalabilité technique et géographique en se protégeant des dispositions légales en vigueur de plus en plus de pays |

## Principes
Les règles pour l'accessibilité des contenus web, proposées par le RGAA, reposent sur les WCAG 2.0 (Web Content Accessibility Guidelines 2.0), rédigées par la WAI ont été créées pour guider les personnes souhaitant rendre le Web accessible à un plus vaste public d'utilisateurs.

1. Perceptible
    - L'information et les composants de l'interfaces utilisateurs doivent être présentés à l'utilisateur de façon à ce qu'il puisse être perçus.
    - Faire en sorte que chaque information soit perceptible par tout utilisateur, et par tous les sens (équivalents textuels pour tout contenu non textuel, etc).
    - Proposer des versions de remplacement aux médias audio, vidéo ou animations Flash.
    - Créer un contenu présentable de différentes manières sans perte d’information (ex. : mise en page simplifiée).
    - Faciliter la perception visuelle et auditive du contenu par l'utilisateur, notamment en séparant le premier plan de l'arrière-plan
2. Utilisable
    - Les composants de l'interface utilisateur et de navigation doivent être utilisables.
    - Rendre toutes les fonctionnalités accessibles au clavier.
    - Laisser à l’utilisateur suffisamment de temps pour lire et utiliser le contenu.
    - Ne pas concevoir de contenu susceptible de provoquer des crises (ex. pas d’éléments qui flashent plus de 3 fois dans un intervalle de une seconde)
    - Fournir à l’utilisateur des éléments d’orientation pour naviguer, trouver le contenu et se situer dans le site
3. Compréhensible
    - Les informations et l'utilisation de l'interface utilisateur doivent être compréhensibles.
    - Rendre le contenu textuel lisible et compréhensible (ex. la langue du site peut être détectée par un programme informatique, définition des mots rares, définition des abréviations, etc)
    - Faire en sorte que les pages apparaissent et fonctionnent de manière prévisible (ex. similitude dans la structure des différentes pages d’un site)
    - Aider l’utilisateur à éviter et à corriger les erreurs de saisie
4. Robuste
    - Le contenu doit être suffisamment robuste pour être interprété de manière fiable par un grand nombre de navigateurs web et par les technologies d'assistance.
    - Optimiser la compatibilité avec les systèmes de navigations et les technologies d’assistances actuelles et futures.

### Bonnes pratiques
Il est important de respecter les bonnes pratiques pour garantir l'accessibilité numérique. Voici quelques exemples de bonnes pratiques à respecter :

#### Concevoir pour des utilisateurs dans le spectre autistique
| Faire | Eviter |
|-------|--------|
| Utiliser des couleurs simples et des contrastes élevés | Utiliser des couleurs vives et des contrastes faibles |
| Ecrire en français courant | Utiliser des figures de style et des expressions imagées |
| Utiliser des phrases simples et des listes à puces | Créer des phrases longues et complexes |
| Faire des boutons descriptifs | Mettre en place des boutons qui ne précisent pas l'action effectuée |
| Construire des mises en page simples et homogènes | Utiliser des mises en page complexes et surchargées |

#### Concevoir pour les utilisateurs de lecteurs d'écrans
| Faire | Eviter |
|-------|--------|
| Décrire les images et fournir des transcriptions pour les vidéos | N'afficher l'information que dans une image ou dans une vidéo |
| Etablir une mise ne page linéaire et logique | Répartir le contenu sur toute la page |
| Structurer les contenus en adoptant la syntaxe HTML 5 | Structurer en s'appuyant sur la taille et la position du texte |
| Concevoir pour les utilisateurs qui naviguent au clavier ou à la voix uniquement | Forcer l'utilisation de la souris ou de l'écran |
| Rédiger des liens et des titres descriptifs | Rédiger des liens et des titres sans valeur ajoutée |

#### Concevoir pour les utilisateurs malvoyants
| Faire | Eviter |
|-------|--------|
| Utiliser de bons contrastes de couleurs et une taille de texte lisible | Utiliser des contrastes de couleurs faibles et une taille de texte trop petite |
| Publier toutes les informations dans la page web | Déporter les informations dans des documents téléchargeables |
| Utiliser une combinaison de couleurs, de formes et de textes | N'utiliser que la couleur pour transmettre l'inforamtion |
| Etablir une mise en page linéaire et logique | Répartir le contenu sur toute la page |
| Mettre les boutons et les notifications en contexte | Séparer les actions de leur contexte |

#### Concevoir pour les utilisateurs avec un handicap physique ou moteur
| Faire | Eviter |
|-------|--------|
| Réaliser des larges zones d'actions cliquables | Demander de la précision |
| Donner de l'espace aux champs des formulaires | Mélanger les interactions |
| Concevoir pour les utilisateurs qui naviguent uniquement au clavier ou à la voix | Réaliser des contenus qui dynamiques qui demandent de nombreuses interactions |
| Ne pas oublier les téléphones portables et les autres écrans tactiles durant la conception | Imposer des temps limités |
| Fournir des raccourcis | Fatiguer les utilisateurs avec de nombreuses demandes |

#### Concevoir pour les utilisateurs sourds ou malentendants
| Faire | Eviter |
|-------|--------|
| Ecrire en français courant | Utiliser des mots compliqués ou des figures de style |
| Utiliser des vidéos avec des sous-titres ou fournir des transcriptions | Mettre du contenu audio ou vidéo sans sous-titres |
| Laisser aux utilisateurs le choix de leur moyen de communication préféré | Imposer le téléphone comme seul moyen de contact |
| Utiliser des icônes et des images pour illustrer les contenus | Utiliser des images sans légende ou sans description |

#### Concevoir pour les utilisateurs dyslexiques
| Faire | Eviter |
|-------|--------|
| Utiliser des images et des graphiques pour illustrer vos textes | Utiliser des textes trop longs sur des colonnes très larges |
| Aligner vos textes à gauche et garder des mises en pages homogènes | Souligner les mots, utiliser de l'italique ou écrire en capitales |
| Envisager de produire des contenus dans différents formats (audio ou vidéo par exemple) | Forcer les utilisateurs à mémoriser l'information d'une page à l'autre, faîtes plutôt des rappels |
| Garder vos contenus concis, clairs et simples | S'attendre à une orthographe parfaite, proposer plutôt de la correction automatique ou de la suggestion |
| Permettre des changements de contrastes entre les arrirères-plans et les textes | Mettre trop d'information au même endroit |

## Legislation
| A l'international | En Europe | En France |
|-------------------|-----------|-----------|
| 1997 | 2002-2005 | 2005 |
| Une initiative internationale sur l'accessibilité du web (Web Accessibility Initiative: WAI) lancée par la World Wide Web Consortium (W3C) | L’Union Européenne, dans le même élan, a élaboré des plans d’actions pour renforcer l’intégration du handicap dans le paysage numérique européen | La France a décliné les recommandations internationales en un référentiel national : le Référentiel Général d’Accessibilité pour les Administrations (RGAA) |
| La WAI propose un ensemble de recommandations pour rendre le Web plus accessible notamment auprès des personnes handicapées physiquement et des seniors. Ces recommandations sont nommées Règles d’Accessibilité pour les Contenus Web ou WCAG (pour l'anglais Web Content Accessibility Guidelines). | Avec les plans d’actions e-Europe 2002 et e-Europe 2005, la Commission Européenne a intégré l'accessibilité des personnes handicapées et âgées à la société de l'information comme une priorité de son action. | Sur la base des recommandations du WAI et des plans d’actions de l’UE , la France a mis en place le RGGA, un référentiel a forte dimension technique qui offre une traduction opérationnelle des critères d’accessibilité issus du WCAG ainsi qu’une méthodologie pour vérifier la conformité à ces critères |