---
layout: layout/cours.njk

title: "Sobriété Numérique"
date: 2024-09-12
tags: ["management", "sobriété", "numérique"]
authors: ["Nicolas Vallée","BoxBoxJason"]
---

*Nicolas Vallée*, consultant en numérique chez Wavestone

{% lien "**Liens utiles**" %}
- [Slides Course Sobriété Numérique](./assets/documents/sobriete_numerique.pdf)
{% endlien %}

## Numérique Responsable

Le numérique responsable est une démarche d’**amélioration continue** qui vise à **améliorer l’empreinte écologique et sociale du numérique**.\
Il regroupe différentes notions telles que le Green IT, l’écoconception ou encore la Sobriété Numérique

### Enjeux du numérique responsable
- **Green IT**: Ensemble de techniques visant à réduire l’empreinte sociale, économique et environnementale du numérique
- **Fair IT**: Il s'intéresse aux conditions de travail dans l'industrie de l'informatique et aux respects des droits de l'homme
- **IT for Good**: Utiliser le numérique et les technologies au service du bien commun
- **IT for Human**: Utiliser le numérique et les technologies au service de l’humain
- **IT for Green**: Utiliser le numérique et les technologies pour réduire les émissions de GES
- **Sobriété Numérique**: Réduire l’impact du numérique en réduisant les usages
- **Inclusion/Accessibilité**: Méthodologie visant à fournir un accès égal à tous les utilisateurs (quelle que soit leur situation) aux services numériques
- **Ecoconception**: Mise en service de produits respectant les principes de développement durable dès la construction

### Centres d'action du numérique responsable

Le numérique responsable s'articule autour de 6 centres d'action:
- **Gouvernance & mesure de l'empreinte environnementale**
  - Organisation & gouvernance numérique responsable
  - Budget
  - Sponsoring du top management
  - Indicateurs & mesure de l'empreinte environnementale
  - Communication
  - Partenariat & écosystème
- **Conception responsable des projets**
  - Gestion de projet & priorisation
  - Etudes de marché & bonnes pratiques
  - Architecture
  - Gestion des données
- **Environnement de travail**
  - Postes de travail
  - Smartphones, tablettes & téléphones de bureau
  - Equipements audio/vidéo
  - Imprimantes
- **Culture**
  - Culture & sensibilisation
  - Recrutement
  - Compétences et formations
- **Approvisionnements & Fin de vie**
  - Achats d'équipements et de services
  - Gestion de la fin de vie des équipements
- **Infrastructure**
  - Datacenters & salles de serveurs
  - Réseau
  - Hébergement cloud & services

Il est important de sensibiliser les collaborateurs à ces enjeux pour les impliquer dans la démarche de numérique responsable. Il est également important de former les collaborateurs pour qu'ils puissent mettre en place des actions concrètes. De même, il est essentiel de mettre en place des indicateurs pour mesurer l'impact des actions mises en place. Enfin, il est important de communiquer sur les actions mises en place pour à nouveau sensibiliser les collaborateurs et les parties prenantes.

#### Exemples de mesures impactantes
Concrètement, la gouvernance de l'entreprise peut agir sur chacun de ces centres d'actions avec plus ou moins d'impact.\
Voici quelques exemples de mesures avec un impact environnemental significatif:
- Définir la feuille de route, formaliser la gouvernance et les rôles de chaque partie prenante en matière de Numérique Responsable et communiquer dessus
- Réaliser et affiner la mesure de l'empreinte carbone de son SI
- Définir et mettre en œuvre le plan de sensibilisation et de montée en compétences sur le Numérique Responsable
- Prolonger la durée de vie des équipements
- Réduire le nombre de postes de travail (ordinateurs portables, fixes, écrans…)

## Empreinte Carbone du Numérique
La mesure de l'empreinte carbone s'assimile à la mesure des émissions de gaz à effet de serre (GES) liées à l'activité numérique.\
L'empreinte carbone du numérique est en constante augmentation et représente aujourd'hui 4% des émissions mondiales de GES.

Il existe 3 échelles d'émissions:
1. **Scope 1**: Ce sont les émissions directes provenant des installations fixes ou mobiles situées à l’intérieur du périmètre organisationnel
  - Véhicules de l'entreprise
  - Installations & équipements de l'entreprise
2. **Scope 2**: Ce sont les émissions indirectes associées à la production d’électricité, de chaleur ou de vapeur importée pour les activités de l’organisation
  - Achat d'électricité
  - Achat ge gaz de chauffage
  - Achat de climatisation
3. **Scope 3**: Ce sont tous les autres postes d'émissions de la chaine de valeur, en amont comme en aval de l'organisation
  - Amont
    - Déplacements professionnels
    - Déplacements domicile-travail
    - Fabrication des bien et services achetés
    - Immobilisations
    - Transport & Approvisionnement
    - Activités liées au pétrole & aux énergies
    - Déchets générés
    - Bien loués
  - Aval
    - Utilisation des produits vendus
    - Franchises
    - Investissements
    - Livraison

Les **scopes** désignent le **périmètre** au sein duquel sont étudiées les émissions de gaz à effet de serre d’une organisation ou d’un produit, le scope 1 étant le périmètre le plus restreint, le scope 3 le plus large.

#### Exemple secteur du numérique
Dans le cadre du secteur du numérique, le scope 1 entre peu en compte car les émissions directes sont faibles. En revanche, le scope 2 est plus important car les datacenters consomment beaucoup d'électricité. Enfin, le scope 3 est très important car il prend en compte l'ensemble de la chaine de valeur du numérique.

| SCOPE 1 | SCOPE 2 | SCOPE 3 |
|---------|---------|---------|
| **Consommation d'énergie fossile** | **Usage** | **Fabrication + Logistique + Fin de vie** |
| Les **émissions directes** de GES générées par l’activité. Dans le cas du numérique, **aucune émission directe** | Les **émissions indirectes** associées à la **production d’énergie** : ici liées à la **consommation d’électricité** des équipements du numériques | Les **autres émissions** indirectement produites liées à l’**activité** ou à la **chaine de valeur globale** : ici liées à la fabrication du matériel (terminaux, serveurs, switch…) et aux **services numérique** (Cloud, applis SAAS, télécom…)​ |
| Exemple: les émissions d’un véhicule utilisant un carburant d’origine fossile en roulant | Exemple: l'électricité consommée par les charges du PC | Exemple: les GES émis lors de la fabrication du PC (machine de production, extraction de métaux rares) et de son traitement de fin de vie |

### Bilan Carbone
**Bilan Carbone**: Outil de comptabilité carbone qui permet de mesurer les émissions de GES d'une organisation, d'un produit, d'un service ou d'un territoire.



Les échelles désignent le pérmiètre au sein duquel sont étudiées les émissions de gaz à effet de serre d'une organisation ou d'un produit, le scope 1 étant le plus restreint et le scope 3 le plus large.

#### Facteur d'émission
Comme il est difficile de faire une comptabilité pour chaque gaz à effet de serre, on utilise l'équivalent CO2 (CO2e) pour mesurer l'impact environnemental.\
La mesure de l'empreinte carbone se fait en kgCO2e/an.

##### Facteur d'émission
Un **facteur d'émission** est un **coefficient** qui permet de **convertir** les **données d'activité** en **équivalent CO2 (C02eq)**.\
Les facteurs d'émissions de la Base Carbone® sont construits dans un esprit **« cycle de vie »**, qui intègre les différentes phases liées à l'activité associée du facteur d'émissions. Par exemple, la combustion d'un litre d'essence comprend à la fois les émissions liées à la combustion de cette essence, mais aussi celles liées à son amont (extraction, raffinage, transport et distribution).\
Ces facteurs d’émission sont disponibles dans la [Base Carbone](https://base-empreinte.ademe.fr/documentation/base-carbone)®\
Ils peuvent être **physiques** (ex. : 1 L d’essence) ou **monétaires** (exprimé en kgCO2e / k€ HT : permet d’estimer l’empreinte carbone d’un produit / service à partir de son prix).

##### Equivalent CO2 (CO2e)
L'équivalent CO2 est une unité de mesure qui permet de comparer les émissions de gaz à effet de serre de différents gaz en fonction de leur potentiel de réchauffement planétaire (PRP).

Une activité humaine émet différents types de gaz à effet de serre
| CO2 | CH4 | N2O | HFC | PFC | SF6 |
|-----|-----|-----|-----|-----|-----|

Le **Potentiel de Réchauffement Planétaire** (PRP) représente l’impact d’un type de GES sur l'effet de serre, et permet de convertir 1 kg de ce GES en équivalent CO2, noté CO2eq.\
Ainsi, **les émissions des différents GES peuvent être comparées selon une métrique commune exprimée en CO2eq**.


#### Exemple de calcul
Nous allons calculer le bilan carbone pour une DSI\

**Equipement**
- 50 ordinateurs portables
- 50 ordinateurs fixes
- 200 écrans
- 50 smartphones
- 20k€ de services cloud

**Données par équipement**
| Categories | Ordinateur Fixe | Ordinateur portable | Ecran | Smartphone |
|------------|-----------------|---------------------|-------|-----------|
| Energie annuelle (kWh) | 120 | 37 | 47 | 6 |
| Scope 3 (kgCO2e) | 245 | 277 | 464 | 50 |
| Durée de vie (années) | 5 | 4 | 10 | 3 |

| Mix Energetique (kgCO2e/kWh) |
|------------------------------|
| 0.0571 |

| Facteur d'émission service cloud (kgCO2e/k€) |
|---------------------------------------------|
| 0.1 |

On applique la formule:
$$
GES = Scope 1 + Scope 2 + \frac{Scope 3}{\text{Durée de vie}}
$$
On trouve un bilan carbone scope 3 de **19028 kgCO2e** pour notre DSI imaginaire. C'est l'équivalent de **2115 aller-retours entre l'école (Marseille) et chez moi (Toulon)** dans ma superbe Clio 2.
