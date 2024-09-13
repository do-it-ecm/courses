---
title: "Sobriété Numérique"
date: "2024-09-12"
sidebar_label: "Introduction"
sidebar_position: 1
---

# Sobriété Numérique

*Nicolas Vallée*, consultant en numérique chez Wavestone

**Sobriété Numérique**: Consiste à réduire l'impact environnemental du numérique en diminuant la consommation d'énergie et les émissions de gaz à effet de serre (GES) liées à l'usage des technologies de l'information et de la communication (TIC).

**Mesure de l'emprunte carbone**: La mesure d'empreinte environnementale du SI permet de mesurer le poids de l'activité numérique, généralement sur 1 an.\
L'emprunte carbone se mesure en kgCO2e/an.

## Numérique Responsable

**Volet environnemental d'une stratégie RSE**:\
Evaluer le point de départ, identifier les actions de réduction et se piloter pour atteindre les objectifs de réduction

### Grands chantiers pour monter en maturité sur le numérique responsable

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

## Mesure GES
**GES**: Gaz à Effet de Serre

### Bilan Carbone
**Bilan Carbone**: Outil de comptabilité carbone qui permet de mesurer les émissions de GES d'une organisation, d'un produit, d'un service ou d'un territoire.

Il existe 3 échelles d'émissions pour un bilan carbone:
1. **Scope 1**: Emissions directes de GES, provenant de sources de combustion, de procédés industriels, de pertes de fluide frigorigène, etc.
  - Véhicules de l'entreprise
  - Installations & équipements de l'entreprise
2. **Scope 2**: Emissions indirectes de GES, provenant de la production d'électricité, de chaleur ou de vapeur achetée et consommée par l'organisation.
  - Achat d'électricité
  - Achat ge gaz de chauffage
  - Achat de climatisation
3. **Scope 3**: Emissions indirectes de GES, provenant des activités de l'organisation mais qui sont générées par d'autres entités, comme les émissions liées à la production des biens et services consommés par l'organisation, les déplacements professionnels, les déchets, etc.
  - Déplacements professionnels
  - Déplacements domicile-travail
  - Fabrication des bien et services achetés

Les échelles désignent le pérmiètre au sein duquel sont étudiées les émissions de gaz à effet de serre d'une organisation ou d'un produit, le scope 1 étant le plus restreint et le scope 3 le plus large.

#### Facteur d'émission
**Facteur d'émission**: Coefficient qui permet de convertir une unité d'activité en émissions de GES.
Il s'agit d'un coefficient qui permet de convertir les données d'activité en équivalent CO2 (CO2e).\
Les facteurs d'émissions de la Base Carbone sont construits dans un esprit *cycle de vie*, qui intègre

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

## Cloud
Les infrastructures cloud sont des datacenters qui hébergent des serveurs et des équipements réseau.\
Ces clouds se multiplient et sont de plus en plus utilisés par les entreprises.\
Ces infrastructures sont très énergivores et ont un impact environnemental non négligeable.
