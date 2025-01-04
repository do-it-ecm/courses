---
layout: layout/cours.njk

title: "Gestion de projet"
date: 2024-09-04
tags: ["gestion de projet","management"]
authors: ["Guillaume LAURIE","BoxBoxJason"]
---

*Guillaume LAURIE*

{% lien "**Liens utiles**" %}
- [Slides Gestion de Projet](./assets/documentst/Gestion_de_projet.pdf)
- [Slides Gestion de Projet Agile SCRUM](../scrum/assets/documentst/Gestion_de_projet_agile.pdf)
- [Slides Ateliers autres méthodes agiles](./assets/documentst/Gestion_de_projet_ateliers.pdf)
{% endlien %}

## Gestion de projet
Un projet est un ensemble d'activités coordonnées et maîtrisées, découpé et conduit en étapes, comportant des dates de début et de fin, entrepris dans le but d'atteindre un objectif conforme à des exigences spécifiques, incluant des contraintes de délais, de coûts et de ressources.\
L'atteinte de l'objectif se matérialise par la production de livrables.

### Catégories de projet

#### Impact sur l'entreprise
Le Project Management Institute, décrit 3 grandes classes de niveau d'impact des projets sur une entreprise
- **Portfolio**: ensemble de projets au niveau stratégique (géré au niveau de l'entreprise par la direction)
- **Programme**: Ensemble de projets au niveau tactique, qui découlent du portfolio (géré par un chef de programme)
- **Projet**: Niveau opérationnel, qui découle du programme (géré par un chef de projet)

#### Typologie de projets
En fonction de la portée du projet en sein de l'entreprise, on peut le qualifier de
- **Projet Local**: Impacte uniquement un service / une direction
- **Projet Transversal**: Impacte plusieurs services / plusieurs directions ou même toute l'entreprise
- **Projet Sorti**: Se déroule en dehors de l'entrerprise

### Risques courants

#### Paradoxe de la gestion de projet
Au fur et à mesure que le projet avance, notre niveau de connaissance sur le projet et son environnement augmente. Cela nous permet de mieux anticiper les risques et de mieux piloter le projet. Cependant, plus le projet avance, plus la capacité d'action sur le projet diminue car des choix déterminants ont été faits et les coûts de correction des erreurs augmentent.

<pre class="mermaid" style="background-color: transparent;">
xychart-beta
    title "Paradoxe de la gestion de projet"
    x-axis "Temps" [0,1,2,3,4,5,6,7,8,9,10]
    line "Connaissance du projet" [0,1,2,3.5,4,4.5,7,8,9.3,9.8,10]
    line "Capacité d'action" [10,9,8,6.5,6,5.5,3,2,0.7,0.2,0]
</pre>

#### Effet tunnel
L'effet tunnel est un biais cognitif qui se manifeste par une focalisation excessive sur un objectif ou une tâche, au détriment d'autres éléments importants. Il peut conduire à des décisions irrationnelles, à une mauvaise gestion des risques et à des erreurs de jugement.\
Cet effet apparaît souvent dans les projets lorsque les objectifs sont mal définis, les contraintes de temps sont trop fortes ou les pressions sont trop importantes.\
Il est possible de lutter contre l'effet tunnel en adoptant une approche plus ouverte, en prenant du recul sur le projet, en évaluant régulièrement les risques et en impliquant les parties prenantes.

### Concepts importants

#### Différences entre opérations et projets
- **Opérations**: En entreprise, les opérations désignent l'ensemble des activités qui assurent le fonctionnement quotidien de l'entreprise. Elles sont répétitives, routinières et stables. Elles peuvent être optimisées et automatisées.
- **Projets**: Les projets sont des activités temporaires qui ont pour but de créer un produit, un service ou un résultat unique. Ils sont uniques, complexes et évolutifs. Ils nécessitent une organisation spécifique et une gestion particulière. Ils requièrent de faire preuve de créativité et d'innovation.

| Critères | Opérations | Projets |
|----------|------------|---------|
| Résultat | Existant | Livrable |
| Planification | Cycle annuel | Temporaire |
| Fonctionnement | Routinier | Nouveauté |
| Organisation | Stable | Temporaire et flexible |
| Compétences | Spécialisées | Multidisciplinaires |
| Tâches | Répétables | Nouvelles |
| Budget | Fixe / Prévisible | Variable / A Evaluer |
| Coordination | Manager | Chef de projet (Product Owner en scrum) |

#### Cycle en V
La gestion de projet classique s'appuie sur le cycle en V
![Cycle en V](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Systems_Engineering_Process_II.svg/langfr-1920px-Systems_Engineering_Process_II.svg.png)

Le cycle en V se déroule selon les étapes immuables suivantes:
1. Définition du projet
    1. Opérations de conception
    2. Définition des besoins et de l'architecture
    3. Conception détaillée de la feuille de route
2. Implémentation
3. Test et Intégration du projet
    1. Intégration, Test, Vérification
    2. Validation
    3. Maintenance

#### Complexité
En gestion de projet, la complexité représente le nombre de parties prenantes impliquées et pas la difficulté technique à réaliser / mener le projet.

#### Structure des équipes
Il existe différentes manières d'organiser les équipes. Chaque organisation possède des cas d'usages particuliers et présente donc des avantages et des inconvénients propres à ses objectifs.\
De plus, tous les projets ne nécessitent pas nécessairement une coordination opérée par un chef de projet.

Voici une explication complète de chaque structure d'équipe mentionnée :

#### Structure fonctionnelle
**Définition** : La structure fonctionnelle organise les équipes en fonction des compétences ou des fonctions spécifiques (par exemple, marketing, développement, finance, etc.). Chaque département est dirigé par un responsable qui supervise les membres de l'équipe.

**Application** : Cette structure est couramment utilisée dans les organisations de taille moyenne à grande où les équipes travaillent principalement sur des tâches spécialisées. Chaque équipe travaille de manière indépendante dans son domaine d'expertise, et les membres de l'équipe reportent à leur responsable fonctionnel.

**Avantages** :
- Optimisation des compétences spécialisées.
- Clarté des rôles et responsabilités.
- Économie d'échelle dans la gestion des ressources.

**Inconvénients** :
- Communication et collaboration interfonctionnelles limitées.
- Manque de flexibilité pour s'adapter à des projets transversaux.

#### Structure matricielle faible
**Définition** : Dans une structure matricielle faible, l'équipe de projet conserve une organisation principalement fonctionnelle, avec une interaction limitée avec d'autres départements. Un chef de projet existe, mais il a un rôle secondaire par rapport aux managers fonctionnels, qui détiennent l'autorité principale.

**Application** : Ce type de structure est utilisé dans des entreprises qui souhaitent maintenir un contrôle centralisé par les départements fonctionnels tout en permettant une certaine collaboration interfonctionnelle pour des projets ponctuels.

**Avantages** :
- Maintien de l'autorité fonctionnelle forte.
- Facilite l'affectation des ressources au projet sans déstabiliser les équipes.

**Inconvénients** :
- Faible autorité pour le chef de projet, rendant la gestion des projets plus difficile.
- Problèmes de priorisation, car les départements fonctionnels peuvent favoriser leurs propres objectifs.

#### Structure matricielle forte
**Définition** : Dans une structure matricielle forte, le chef de projet joue un rôle plus centralisé et a un pouvoir décisionnel important. Les équipes sont formées à partir de différentes fonctions, mais elles reportent principalement au chef de projet pour les besoins spécifiques du projet.

**Application** : Cette structure est couramment utilisée dans des environnements complexes où des projets multidisciplinaires nécessitent une coordination étroite entre différents départements. Le chef de projet prend la responsabilité de la performance et des résultats du projet.

**Avantages** :
- Forte autorité du chef de projet, ce qui permet une gestion plus agile et orientée projet.
- Amélioration de la communication interfonctionnelle.

**Inconvénients** :
- Conflits potentiels entre les chefs de projet et les responsables fonctionnels.
- Complexité dans la gestion des ressources, car les employés peuvent avoir des responsabilités dans plusieurs projets.

#### Structure équipe dédiée
**Définition** : Dans la structure d’équipe dédiée, une équipe entière est dédiée à un projet spécifique et travaille exclusivement sur celui-ci. Les membres de l'équipe ne sont pas partagés avec d'autres projets ou départements pendant la durée du projet.

**Application** : Ce modèle est utilisé pour des projets à haute priorité ou à haute intensité, où une concentration totale sur le projet est nécessaire pour atteindre les objectifs en temps et en qualité. Les équipes dédiées sont souvent vues dans des projets de grande envergure ou dans des startups.

**Avantages** :
- Focus total de l’équipe sur un seul projet, augmentant la productivité et la rapidité d’exécution.
- Communication et prise de décision rapides, car l'équipe est entièrement concentrée sur le même objectif.

**Inconvénients** :
- Moins de flexibilité pour affecter des ressources à d’autres projets.
- Peut être coûteux si les membres de l’équipe ne sont pas pleinement utilisés dans toutes les phases du projet.

Chaque structure d'équipe a ses avantages et inconvénients en fonction du type de projet, de l'organisation, et de la dynamique des équipes. Le choix de la structure doit correspondre aux objectifs stratégiques du projet et aux ressources disponibles.

### Compétences nécessaires
La gestion de projet met principalement en oeuvre les compétences suivantes:
- Gestion des parties prenantes (Stakeholders)
- Travail d'équipe
- Gestion du cycle de vie
- Planification
- Délivrer de la valeur
- Gestion de l'incertitude
- Déploiement d'indicateurs (de performance, de succès,...)

## Agilité
Si le premier secteur a en avoir profité est la production (agile manufacturing) dans les années 1980, c’est le développement informatique (management de projet agile) qui a le plus professionnalisé la méthode à partir de 2000 avec la méthode SCRUM (dont on retrouve des traces dès 1986).\
L’agilité vient d’un triple constat :
- Il est très compliqué dès le début d’un projet d’avoir toutes les informations concernant le projet.
- L’évolution rapide des technologies peut rapidement rendre obsolète les plans à long terme.
- L’implication du client est le principal facteur de réussite d’un projet.

### Valeurs
- Les individus et les interactions plus que les processus et les outils
- Des logiciels opérationnels plus qu'une documentation exhaustive
- La collaboration avec les clients plus que la négociation contractuelle
- L'adaptation au changement plus que le suivi d'un plan

### Principes
- Livrer de la valeur au client
- Intégrer les demandes de changement
- Livrer fréquemment une version opérationnelle
- Assurer une coopération entre le client et l'équipe
- Réaliser les projets avec des personnes motivées
- Privilégier le dialogue en face à face
- Mesurer l'avancement sur la base d'un produit opérationnel
- Faire avancer le projet à un rythme soutenable
- Contrôler l'excellence technique et à la conception
- Minimiser la quantité de travail inutile
- Construire le projet avec des équipes auto-organisées
- Améliorer constamment l'efficacité de l'équipe
