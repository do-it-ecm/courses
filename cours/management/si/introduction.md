---
title: "Introduction MSI"
date: "2024-09-03"
sidebar_label: "Introduction"
sidebar_position: 1
---

# Introduction au Management des Systèmes d'Information

*Laetitia Piet*\
[Diaporama](./documents/MSI_INTRO.pdf)

## Définitions

### Définition fonctionnelle

**<u>Schema de principe d'un SI:</u>**
```mermaid
graph LR;
  A[Système d'Information]
  B(Personnel) --> A
  C(Matériel) --> A
  D(Logiciels & Procédures) --> A
  E(Données) --> A
  A --> F(Communiquer des informations)
  A --> G(Stocker des informations)
  A --> H(Traiter des informations)
  A --> I(Acquérir des informations)
```

Un système d’information est un ensemble organisé de ressources permettant d’acquérir, de traiter, de stocker
et de diffuser des informations dans et entre des organisations. Il est finalisé pour répondre à des objectifs.

**Niveaux de définition:**
| Niveau | Caractéristiques | Exemples |
| --- | --- | --- |
| Individuel | Utilsié par un individu à son poste de travail. N'implique pas qu'il a été implementé ni conçu par l'individu | Tableur Excel |
| Collectif | Plusieurs individus utilisent le même système d'information (une fonction, un service, un groupe) | Système de gestion des commandes |
| Organisationnel | Concerne et est accessible à l'ensemble de l'organisation | Système de messagerie électronique globale |
| Inter-organisationnel | Des organisations identiques s'entendent pour échanger et traiter par des voies automatiques, des informations d'intérêt commun | EDI (Echange de données informatisées) |

### Définition analytique

Un système d’information est un système d’acteurs sociaux qui mémorisent et transforment des représentations via des technologies de l’information
et des modes opératoires.\
*(d’après R.Reix et F. Rowe, 2002)*

![definition analytique](./illustrations/dimensions_si.png)

Il existe 3 dimensions dans un SI:
1. Dimension informationnelle
2. Dimension technologique
3. Dimension organisationnelle

#### Dimension informationnelle

«Tout système d’information concerne un individu, pourvu d’un profil psychologique donné, confronté à un problème décisionnel précis, dans un contexte organisationnel déterminé. Il y a nécessité d’éléments de décision perçus au travers d’un mode de représentation propre au décideur. » *R.O. Mason, J.-L. Mitroff (1975), Management Science, vol.19 n°6, p.475.*

##### Relation entre données, informations et connaissances

<u>Schema simplifié:</u>
```mermaid
graph LR;
  A(Signal) -->|Mesure par un capteur| B(Donnée)
  B -->|Interprétation| C(Information)
```

<u>Schema complet:</u>
![Relation entre données, informations et connaissances](./illustrations/schema_information.jpg)

L'information est une donnée interprétée par un individu ou un système. Elle est le résultat d'un traitement de données. Elle est utile pour la prise de décision.

##### Critères d'évaluation d'un SI

```mermaid
graph TD;
  A(Pertinence)

  A <--> B[Complétude]
  A <--> C[Finesse<br><small>Accroît la pertinence<br>mais attention aux effets<br>sur l'accessibilité</small>]
  A <--> D[Actualité<br><small>La réductions des délais<br>accroît la pertinence<br>mais effets pervers<br>sur le volume</small>]
  A <--> E[Ponctualité<br><small>Respect des limites<br>de temps des processus<br>d'utilisation</small>]
  A <--> F[Forme & Richesse]
  A <--> G[[Accessibilité<br><small>Déterminant majeur de l'utilisation effective</small>]]
  A <--> H[Exactitude<br><small>Qualité des données<br>et des informations</small>]
  A <--> I[Fiabilité<br><small>Degré de confiance<br>dans la source</small>]
```

Il faut rester vigilant, un système d'information générant une quantité massive de données à faible coût risque de produire des informations inutiles et de saturer les utilisateurs.

### Dimension technologique
Un SI est un système qui utilise des technologies de l'information au sein d'une architecture (réseaux, serveurs, ordinateurs, logiciels...)
![Composants essentiels des technologies de l'information](./illustrations/composants_si.png)

La technologie est à la fois une ressource et une contrainte pour l’exécution des tâches par les utilisateurs\
La technologie « en usage » est le résultat d’un double processus de construction (réalisé par les acteurs décideurs, concepteurs et utilisateurs)
- un processus au départ planifié
- puis un processus émergent ; ce résultat est partiellement indéterminé.
Les caractéristiques de la technologie, ainsi que les conditions de sa mise en place dans un contexte, ont un effet sur le processus d’appropriation

### Dimension organisationnelle

Un SI est un système qui supporte les processus de travail et la structure d’une organisation. Il y a 2 perspectives selon lesquelles on peut observer un SI:
- Le fonctionnement de l'organisation, le déroulement des processus de travail, à l'intérieur et aux frontières de l'organisation
- La structure de l'organisation, qui concerne les caractéristiques stables de toute l'organisation\
Un SI est à la fois un élément clé, essentiel au fonctionnement ainsi qu'à la structure de l'organisation.

#### Perspective des processus
Un processus est un ensemble d’activités et de tâches corrélées et synchronisées qui :
- A un objectif clair et précis rattaché, directement ou indirectement, au métier et aux activités de l ’entreprise
- Consomme des ressources et produit des résultats

**<u>Schema de principe d'un processus:</u>**
```mermaid
graph LR;
  A(Evénement) --> B(Activité)
  B --> C(Résultat)
```

**<u>Catégories de processus:</u>**
```mermaid
graph TD;
  A[Processus opérationnels<br><small>coeur de métier</small>]
  B[Processus de pilotage<br><small>management</small>]
  C[Processus de soutien<br><small>support</small>]
```

#### Perspective de la structure
La construction de tout SI implique des choix déterminants quant à la conception de l’organisation :
- Choix relatifs au partage d’informations entre les acteurs
  - Répartition du pouvoir décisionnel et des responsabilités (degré de décentralisation)
  - Division du travail (degré de spécialisation)
- Choix relatifs au contenu des représentations et aux technologies de communication
  - Pertinence des informations pour quoi ? Pour qui ?
  - Moyens de coordination
- Choix relatifs au degré de formalisation et d’automatisation des processus de travail
  - Niveau de contrôle et d’autonomie des acteurs
  - Degré de standardisation / flexibilité

#### Modèles de l'utilisateur modèle

L'organisation effectue des choix qui déterminent le fonctionnement du SI et la capacité qu'aura ses utilisateurs à s'approprier le SI.
Elle peut choisir un modèle coercitif ou habilitant. Dans le premier cas, l'utilisateur modèle est passif, il ne peut rien faire d'autre qu'utiliser le SI, dans le second cas, il est actif et peut participer à l'évolution du SI.

##### Modèle coercitif
| **Caractéristiques des formalisations coercitives** | **Vision de l'utilisateur modèle** |
| --- | --- |
| **Impossibilité de réparer** | Ne doit pas intervenir par lui même lorsque la formalisation s'avère inutilisable, endommagée, ou mal adaptée aux circonstances |
| **Rigidité** | Ne doit pas pouvoir modifier l'outil par lui même |
| **Opacité Interne** | Ne doit pas comprendre le fonctionnement interne de l'outil, doit seulement suivre les indications données |
| **Opacité Globale** | Ne doit pas comprendre le fonctionnement du système dans lequel l'outil s'insère et opère |
| **Non participation au design** | Ne doit pas être associé au design de l'outil |
| **Non participation à l'implémentation** | Ne doit pas être associé à l'implémentation de l'outil |

##### Modèle habilitant
| **Caractéristiques des formalisations habilitantes** | **Vision de l'utilisateur modèle** |
| --- | --- |
| **Réparation** | Peut intervenir pour réparer l'outil, le modifier, l'adapter aux circonstances |
| **Flexibilité** | Peut ignorer, remettre en cause, modifier l'outil pour l'adapter à ses besoins |
| **Transparence interne** | Peut comprendre le fonctionnement interne de l'outil pour l'aider à le modifier |
| **Transparence globale** | Peut comprendre le fonctionnement du système dans lequel l'outil s'insère et opère |
| **Participation au design** | Capable de participer au design de l'outil car est source d'information utile |
| **Participation à l'implémentation** | Capable de participer à l'implémentation de l'outil car est source d'information utile |

### Classification des SI
![Classification des SI](./illustrations/classification_si.png)

## Enjeux
Via leur SI, les entreprises s’insèrent plus intensivement dans une mondialisation agitée

```mermaid
graph TD;
  A[<b>Nouvelles opportunités</b><br><small>couplés à l’internet, les S.I participent<br> à l’abaissement important des coûts de transaction<br> et favorisent l’accès aux marchés et aux ressources</small>]
  B[<b>Nouvelles incertitudes</b>s<br><small>la dématérialisation de nombreux biens<br>et services bouleverse les règles établies<br>dans de nombreux secteurs économiques</small>]
```

### Des évolutions majeures et des défis constants

#### Technologiques
- **Big Data et analyse de données massives**
- **Cloud computing**
- **Mobilité**
- **Intelligence artificielle**
- **XaaS (Everything as a Service)**

#### Organisationnels
- **Horizontalisation des organisations**
- **Collaboration**
- **Externalisation des activités**
- **Réactivité et agilité**
- **Nouvelles pratiques managériales**

## Management des SI

« Les SI ne doivent pas être simplement considérés comme une ressource de support, mais comme une ressource stratégique capable de donner un avantage concurrentiel durable à l’entreprise qui saura les utiliser. » (*Porter, 1985*)

### Enjeux du management des SI
- Interne
  - **Alignement stratégique**
  - **Création de valeur**
  - **Gestion des risques**
  - **Gestion des ressources**
  - **Gestion de la performance**
  - **Gestion des processus**
- Externe
  - **Conquête de nouveaux marchés**
  - **Amélioration de la relation client**
  - **Fidélisation des clients**
  - **Innovation**

### Usages des SI
- Automatisation des tâches
- Aide à la décision
- Communication
- Gestion des connaissances
- Collaboration
- Innovation
