---
layout: layout/cours.njk

title: "Autres méthodes AGILES"
date: 2024-09-13
tags: ["agile", "gestion de projet","management"]
authors: ["BoxBoxJason"]
---

{% lien "**Liens utiles**" %}
- [Présentation Agile Unified Process](../assets/documents/AUP.pdf)
- [Présentation Disciplined Agile Delivery](../assets/documents/DAD.pdf)
- [Présentation Extreme Programming](../assets/documents/XP.pdf)
- [Présentation Feature Driven Development](../assets/documents/FDD.pdf)
{% endlien %}

## Sommaire<a name="sommaire"></a>
* [Rational Unified Process](#rational-unified-process)
* [Agile Unified Process](#agile-unified-process)
* [Disciplined Agile Delivery](#disciplined-agile-delivery)
* [Extreme Programming](#extreme-programming)
* [Feature Driven Development](#feature-driven-development)
* [Lean Software Development](#lean-software-development)
* [Lexique](#lexique)

## Rational Unified Process (RUP)<a name="rational-unified-process"></a>

#### A propos
- Méthode de développement logiciel itérative et incrémentale
- Créée par Rational Software Corporation (IBM) en 1997-1998
- Framework adaptable à tout type de projet

### Fondations

- **Roles** (qui) - Un rôle est caractérisé par un ensemble de responsabilités, de compétences et d'activités
- **Tâches** (comment) - Une tâche est une unité de travail qui doit être réalisée par un rôle pour atteindre un résultat spécifique
- **Work Products** (quoi) - Un work product est le résultat d'une tâche. Cela peut être un document, un modèle, un programme,...

#### Disciplines Ingénierie
- **Business Modeling** : Modélisation des processus métier
- **Requirements** : Gestion des exigences
- **Analysis & Design** : Analyse et conception
- **Implementation** : Développement du logiciel
- **Test** : Tests unitaires et d'intégration
- **Deployment** : Déploiement chez les utilisateurs

#### Disciplines Support
- **Configuration & Change Management** : Gestion de la configuration et des changements
- **Project Management** : Gestion de projet, planification, suivi, répartition des tâches
- **Environment** : Gestion de l'environnement de développement

#### Phases
1. **Inception** : définir le périmètre du projet
  - Définir la vision du projet et les objectifs principaux
  - Identifier les exigences initiales et les parties prenantes
  - Évaluer les risques clés
  - Estimer les coûts et la durée du projet
2. **Elaboration** : définir l'architecture du projet
  - Définir et valider l'architecture du système
  - Analyser les exigences en détail
  - Réduire les risques techniques majeurs
  - Planifier les ressources et affiner les estimations de coûts et délais
3. **Construction** : développement du projet
  - Développer le code source du logiciel
  - Intégrer, tester et valider les fonctionnalités
  - Créer la documentation utilisateur
  - Assurer la qualité et la stabilité du produit à travers des tests continus
4. **Transition** : livraison du projet
  - Déployer le logiciel chez les utilisateurs finaux
  - Effectuer des tests d'acceptation utilisateur
  - Former les utilisateurs et assurer le support
  - Finaliser la documentation et assurer une transition en douceur vers l'exploitation

#### Bonnes pratiques
- **Développement itératif et incrémental**
  - Il n'est pas toujours possible de définir tous les besoins dès le début
- **Gestion des exigences**
  - Les exigences doivent être claires, complètes et cohérentes
  - Elles doivent être validées par les parties prenantes
- **(Ré)Utilisation des composants**
  - Diviser le projet en composants réutilisables, permet de tester et valider chaque composant séparément
  - Utiliser des composants existants si possible
- **Modéliser graphiquement**
  - Utiliser des diagrammes pour représenter les processus, les structures et les comportements
  - Utiliser notamment l'UML (Unified Modeling Language)
- **Assurer la qualité**
  - Rendre les tests centraux dans le processus de développement
- **Gérer les changements**
  - Utiliser des outils de gestion de configuration pour suivre les modifications apportées au code source
  - Assurer la traçabilité et la communication des changements

## Agile Unified Process (AUP)<a name="agile-unified-process"></a>

#### A propos
* Simplification du Rational Unified Process (RUP)
* Développement de logiciels de haute qualité
* Dernière version : 2006
* Tire profit des avantages de la gestion de projet classique et des méthodes agiles

#### Philosophie
- L'équipe projet **sait ce qu'elle a à faire**
  - Documentation exhaustive
  - Besoins clairs à chaque étape
- **Simplicité**
  - Pas de documentation inutile
  - Pas de processus excessif
- Focus sur la **valeur délivrée**
  - Livraison régulière
  - Feedbacks fréquents
- Utilisation d'**outils adéquats uniquement**
  - Pas de surcharge d'outils
  - Utilisation d'outils adaptés à chaque étape
- **Pas d'hésitation**
  - Sur la méthode d'implémentation utilisée tant qu'elle répond au besoin

#### Phases
1. **Inception** : définir le périmètre du projet
  - Définir la vision du projet et les objectifs principaux
  - Identifier les exigences initiales et les parties prenantes
  - Évaluer les risques clés
  - Estimer les coûts et la durée du projet
2. **Elaboration** : définir l'architecture du projet
  - Définir et valider l'architecture du système
  - Analyser les exigences en détail
  - Réduire les risques techniques majeurs
  - Planifier les ressources et affiner les estimations de coûts et délais
3. **Construction** : développement du projet
  - Développer le code source du logiciel
  - Intégrer, tester et valider les fonctionnalités
  - Créer la documentation utilisateur
  - Assurer la qualité et la stabilité du produit à travers des tests continus
4. **Transition** : livraison du projet
  - Déployer le logiciel chez les utilisateurs finaux
  - Effectuer des tests d'acceptation utilisateur
  - Former les utilisateurs et assurer le support
  - Finaliser la documentation et assurer une transition en douceur vers l'exploitation

#### Concepts utilisés
- [Test Driven Development (TDD)](#tdd)
- [Continuous Integration (CI)](#ci)
- [Agile Modeling (AM)](#am)
- [Agile Change Management (ACM)](#acm)

#### Principes
1. **Modèle**
  - Comprendre les besoins des utilisateurs
  - Identifier une solution viable
2. **Implémentation**
  - Transformer le modèle en code exécutable
  - Tester et valider le code (via unit tests)
  - S'assurer que le code tourne correctement
3. **Test**
  - Valider que le code répond aux besoins des utilisateurs
  - Valider le fonctionnement du système dans son ensemble
  - Corriger les défauts et améliorer le code
4. **Déploiement**
  - Planifier et exécuter le déploiement du logiciel chez les utilisateurs finaux
5. **Gestion de Configuration**
  - Gérer les versions du code source
  - Gérer les modifications apportées au code
  - Assurer la traçabilité des modifications
6. **Gestion de Projet**
  - Planifier les ressources et les délais
  - Suivre l'avancement du projet
  - Gérer les risques et les problèmes
  - Attribuer les tâches aux membres de l'équipe
7. **Environnement**
  - Assurer que l'environnement de développement est adapté
  - Assurer que les outils utilisés sont adaptés
  - Fournir du support aux membres de l'équipe

## Disciplined Agile Delivery (DAD)<a name="disciplined-agile-delivery"></a>

#### Objectifs
* Livraison incrémentale : ajustements réguliers, besoins changeants
* Gestion des risques : pilotage par les risques
* Coordination des activités
* Optimisation des flux de travail
* Améliorer la qualité
* Environnement sûre

#### Cyle de Développement
1. *Inception*
2. *Construction* : l'équipe utilise la méthode qui lui parait la plus adaptée (SCRUM, Kanban, AL, LSD, XP,UP, etc)
3. *Transition*

#### Organisation
* Rôles primaires : Product Owner - Team Leader - Team Member - Architecture Member + Stakeholder
* Rôles secondaires : Specialists - Experts - Testeur - Intégrateur

UP et DAD font partie de l'*agilité* mais sont des formes de gestion de projet **hybrides** : on réfléchit avant d'agir, GEP plus classique, framework assez lourd (projets + complexes, plus lourds et donc adaptés aux plus grandes entreprises)

## Extreme Programming (XP)<a name="extreme-programming"></a>

#### Valeurs
* Communication
* Simplicité
* Feedback réguliers
* Courage : accepter faiblesse et transparence
* Respect : au sein de l'équipe, client/équipe

#### Règles
1. Planification
2. Gestion : réunions régulières
3. Codage : amélioration continue
4. Conception
5. Expérimentation, Tests

#### Pratiques
1. Feedback à petite échelle :
   * Pair programming,
   * Planning game,
   * TDD (Test Driven Dev),
   * Whole Team
2. Processus continu :
   * Intégration continue,
   * Refactoring ,
   * Small releases
3. Compréhension partagée :
   * Coding standards,
   * Collective code ownership,
   * Simple Design,
   * System Metaphor
4. Bien-etre des programmeurs

#### Organisation
- client
- développeurs
- coach (= scrum master)
- tracker

## Feature Driven Development (FDD)<a name="feature-driven-development"></a>

#### Caractéristiques
* Itératif
* Incrémental
* Cycles courts

#### Process
1. Modèle global
2. Listes des fonctionnalités
3. Plannifier : prioriser les fonctionnalités
4. Conception
5. Construction : developpement, tests, intégration, documentation

#### Organisation
* Grosse équipe / gros projet
* Programmeur principal : leader d'une équipe de développeurs et échange régulièrement avec les utilisateurs
* Experts en domaine, experts techniques
* Connaissance métier (peu de documentation)

#### Les +
* Peu de réunions
* Centrée sur l'utilisateur (=client)
* Adapatable aux gros projets à long terme
* Debuggage grâce aux cycles courts

#### Les -
* Dépendance au programmeur principal qui se doit de rester en contact avec les utilisateurs
* Propriété individuelle du code du fait du découpage en équipe de développeurs

## Lean Software Development (LSD)<a name="lean-software-development"></a>

#### Caractéristiques
* Minimiser les gaspillages et les élimniner

#### Principes
1. **Elimnate Waste** : éviter la surproduction, exigences claires
2. **Build in quality** : pair programming, développement piloté par les tests, développement incrémental, feedbacks fréquents, réduire les temps d'attente, automatiser les tâches
3. **Amplify learning** : code reviews, pair programming, code comments, documentation claire, session de partage
4. **Defer decision** : pas de planification excessive, ne pas s'engager sans compréhnesion complète, analyse permanente
5. **Deliver fast** : solution simple, pas de process excessif, amélioration progressive en focntion des feedbacks, anticiper et résoudre blocages
6. **Respect people** : communication proactive, encourager les conflits sains
7. **Optimize the whole** : restructuration des équipes, identification de la circulation de la valeur dans l'équipe, proximité des membres, fournir tous les outils nécessaires

## Lexique
- **Test Driven Development (TDD):** Méthode de développement logiciel qui consiste à écrire les tests unitaires avant le code source<a name="tdd"></a>
- **Continuous Integration (CI):** Pratique de développement logiciel qui consiste à intégrer régulièrement les modifications du code source dans un référentiel partagé<a name="ci"></a>
- **Agile Modeling (AM):** Pratique de modélisation agile qui consiste à utiliser des modèles simples et à les adapter en fonction des besoins<a name="am"></a>
- **Agile Change Management (ACM):** Pratique de gestion du changement agile qui consiste à s'adapter rapidement aux évolutions du projet<a name="acm"></a>
