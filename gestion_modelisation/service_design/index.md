---
layout: layout/cours.njk

title: "Service Design"
date: 2024-09-06
tags: ["service design", "design thinking", "user experience", "user interface"]
authors: ["Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

<style>
  .arrow-left::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-width: 30px;
    border-style: solid;
    border-color: transparent #374151 transparent transparent;
  }
</style>

## Introduction

Le design thinking est une démarche théorisée en 1980 par Rolf Faste, professeur à l'université de Stanford. Il s'agit d'une méthode de résolution de problèmes qui met l'utilisateur au centre de la réflexion. Le design thinking est une approche itérative qui permet de concevoir des produits ou des services en se mettant à la place de l'utilisateur final.

La théorisation est reprise et utilisée en entreprise, au service de l'utilisateur final:\
En 1991, David Kelley fonde l'agence IDEO, qui devient une référence en matière de design thinking et de consulting en innovation.\
Il déclare: *Human-centred approach to innovation that draws from the designer's toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success*

### Composantes d'un projet de transformation

Un projet de transformation digitale est un projet qui vise à transformer l'entreprise en profondeur en utilisant les technologies numériques. Il s'agit d'un projet complexe qui nécessite de mobiliser l'ensemble des acteurs de l'entreprise.

Les composantes d'un projet de transformation digitale sont les suivantes:
1. Définir
  - Processus
  - Objectifs
  - Organisation
2. Conduire
  - Pilotage des hommes & femmes
  - Management du changement
  - Communication
3. Mettre en oeuvre
  - Technologie
  - Processus
  - Organisation

### Les enjeux digitaux "internes" d'une entreprise
Être au service du collaborateur pour une entreprise plus performante

- Recentrer le collaborateur sur les activités à **valeur ajoutée** promise lors de l'embauche, diminuer le sentiment de **perte de temps**.
- Diminuer les **irritants** du quotidien des collaborateurs et diminuer la **fatigue nerveuse**.
- Avoir des collaborateurs **heureux** au travail favorise la **performance** de l'entreprise.
- Faciliter le **recrutement** de jeunes, digital native. **Fidéliser** les collaborateurs.

**User Interface**: On conçoit l'interface entre un utilisateur et un dispositif (Interface Homme Machine). Elle erépond à des critères d'utilisabilité et d'usabilité
**User Experience**: On prend en compte l'émotion de l'utilisateur face au dispositif. On ajoute un critère de désirabilité
**Service Design**: On orchestre un ensemble de dispositifs en fonction des contrainttes d'usage. On ajoute du storytelling et de la cohérence

### Lien UI / UX / Service Design

<div class="w-full mt-3">
  <div class="bg-yellow-300 border-b-2 border-r-2 border-white max-w-3xl h-40 transform scale-y-[-1] mx-auto">
    <div class="bg-green-400 border-b-2 border-r-2 border-white w-2/3 h-32">
      <div class="bg-blue-700 border-b-2 border-r-2 border-white w-1/2 h-24"></div>
    </div>
  </div>
  <div class="mx-auto max-w-3xl flex justify-between">
    <div class="flex flex-col items-center" style="max-width: 33%;">
      <span class="text-center text-xl text-blue-700 font-bold">User Interface</span>
      <span class="text-center">On conçoit l'interface entre un <b>utilisateur</b> et un <b>dispositif</b> (Interface Homme Machine)</span>
      <span class="text-center">Elle répond à des critères d'<b>utilisabilité</b> et d'<b>usabilité</b></span>
    </div>
    <div class="flex flex-col items-center" style="max-width: 33%;">
      <span class="text-center text-xl text-green-400 font-bold">User Experience</span>
      <span class="text-center">On prend en compte l'émotion de l'<b>utilisateur</b> face au <b>dispositif</b></span>
      <span class="text-center">On ajoute un critère de <b>désirabilité</b></span>
    </div>
    <div class="flex flex-col items-center" style="max-width: 33%;">
      <span class="text-center text-xl text-yellow-300 font-bold">Service Design</span>
      <span class="text-center">On orchestre un ensemble de <b>dispositifs</b> en fonction des <b>contraintes d'usage</b></span>
      <span class="text-center">On ajoute du <b>storytelling</b> et de la <b>cohérence</b></span>
    </div>
  </div>
</div>

<div class="mx-auto mt-6 relative flex items-center justify-center bg-gray-700 text-white px-6 py-3 w-max text-sm font-medium arrow-left text-l"><b>En fait il faut prendre le problème dans le sens inverse: on va de l'histoire au détail !</b></div>

Le design thinking est une philosophie qui permet d'apporter des solutions adaptées en se focalisant sur l'**utilisateur final**. C'est concevoir son produit / service en se mettant à la place de l'utilisateur. C'est une méthode itérative qui permet de résoudre des problèmes complexes en se concentrant sur les besoins des utilisateurs.


### Avantages

<pre class="mermaid" style="background-color: transparent;">
flowchart TD
    A([Une philosophie: Apporter des solutions adaptées en se focalisant sur l'utilisateur final])
    A --> B([Garantir une meilleure efficacité fonctionnelle des outils])
    A --> C([Sécuriser l’adhésion des utilisateurs ou clients aux outils et services conçus])
    A --> D([Réduire les coûts et accélérer le time to market en limitant les erreurs de conception])
</pre>

Le design thinking reste avant tout une démarche / une **boîte à outils**. Il n'est pas obligatoire de suivre toutes les étapes de bout en bout ! Il faut **adapter** la démarche en fonction des besoins et des contraintes du projet.

## Démarche double diamant

Le double diamant est une méthode de design thinking qui permet de structurer la réflexion autour de 4 étapes clés:
1. <big><b>Recherche</b></big>: **Connaissance utilisateurs, Analyse exploratoire**:
  - Utilisation de la **matière disponible** pour **pré-cadrer**
  - **Entretien** et **immersions terrai**n. Lancement auprès des **sponsors**, des **référents métiers**,...
2. <big><b>Analyse</b></big>: **Parcours et points de difficulté**
  - Synthèse de l'analyse grâce aux
    - **Personae**
    - **Parcours utilisateurs**
  - Ateliers de **validation** des parcours
3. <big><b>Idéation</b></big>: **définition des fonctionnalités**
  - Ateliers d'**idéation** (brainstorming,...) grâce au **creative thinking**
  - **Sketching**, **maquettage** rapide
  - Matrice de **priorisation** de la valeur / complexité
4. <big><b>Prototypage</b></big>: **Maquettage**
  - Zoning
  - Wireframe
  - Mockup dynamique
  - Test utilisateur
  - Ajustement
5. <big><b>Industrialisation</b></big>: **Formalisation des exigences**
  - **Spécifications fonctionnelles**
  - **Spécifications techniques**
  - **Développement**
  - **Tests**
  - **Mise en production**
