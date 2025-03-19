---
layout: layout/cours.njk

title: "Développement Web"
date: 2024-11-14
tags: ["informatique", "développement", "web"]
authors: ["Loïck Goupil-Hallay", "Adrien Brunet"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [Tags HTML](https://www.w3schools.com/tags/)
- [Débuter CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Découvrir JavaScript](https://www.javascript.com/learn)
- [Apprendre GraphQL](https://graphql.org/learn/)
- [Découvrir OpenAPI](https://www.openapis.org/)
{% endlien %}

## Introduction

{% citation "Wikipedia (fr)", "https://fr.wikipedia.org/wiki/Site_web" %}
Un site web est un ensemble de <a href="https://fr.wikipedia.org/wiki/Page_web">pages web</a> et de <a href="https://fr.wikipedia.org/wiki/Ressource_du_World_Wide_Web">ressources</a> reliées par des <a href="https://fr.wikipedia.org/wiki/Hyperlien">hyperliens</a>, déﬁni et accessible par une <a href="https://fr.wikipedia.org/wiki/Uniform_Resource_Locator">adresse web</a>. Un site est développé à l'aide de langages de <a href="https://fr.wikipedia.org/wiki/Programmation_web">programmation web</a>, puis hébergé sur un <a href="https://fr.wikipedia.org/wiki/Serveur_web">serveur web</a> accessible via le <a href="https://fr.wikipedia.org/wiki/R%C3%A9seau_informatique">réseau</a> mondial <a href="https://fr.wikipedia.org/wiki/Internet">Internet</a>, un <a href="https://fr.wikipedia.org/wiki/Intranet">intranet</a> local, ou n'importe quel autre réseau, tel que le <a href="https://fr.wikipedia.org/wiki/Tor_(r%C3%A9seau)">réseau Tor</a>. L'ensemble des sites web publics constituent le <a href="https://fr.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a>.
{% endcitation %}

Le **développement web** désigne l'ensemble des tâches liées à la **conception**, au **développement** et à la **maintenance** de sites web et d'applications web. Il englobe plusieurs domaines, tels que le **design web**, le **développement front-end**, le **développement back-end** et leur enfant caché, le **développement full-stack**.

{% attention %}
Cela ne désigne pas uniquement les sites web que vous consultez tous les jours, c'est en fait beaucoup plus vaste que cela.\
Il existe des applications web qui sont utilisées par des millions de personnes **sans interaction avec un navigateur web**.
{% endattention %}


## Requête Web (HTTP)

Le **protocole HTTP** (HyperText Transfer Protocol) est un protocole de communication client-serveur. Il permet de transférer des données sur le web.\
Il est basé sur un modèle de requête-réponse, où le client envoie une requête au serveur, qui lui répond.

<pre class="mermaid" style="background-color: transparent;">
sequenceDiagram
    actor Client
    participant DNS
    participant Server
    Client->>DNS: DNS Request
    DNS->>Client: DNS Response (IP Address)
    Client-->>Server: TCP SYN
    Server-->>Client: TCP SYN-ACK
    Client-->>Server: TCP ACK
    Client->>Server: HTTP Request
    Server->>Client: HTTP Response (HTML, JSON, XML, file, etc.)
</pre>

Lorsque vous envoyez une requête HTTP et recevez une réponse, plusieurs étapes et protocoles sont impliqués. Voici une explication détaillée du processus :

1. **Résolution DNS** :
   - Le client (votre navigateur ou application) envoie une requête DNS pour obtenir l'adresse IP du serveur à partir du nom de domaine.
   - Le serveur DNS répond avec l'adresse IP correspondante.

2. **Établissement de la connexion TCP** :
   - Le client envoie un paquet SYN (synchronize) au serveur pour initier une connexion.
   - Le serveur répond avec un paquet SYN-ACK (synchronize-acknowledge) pour accepter la connexion.
   - Le client envoie un paquet ACK (acknowledge) pour confirmer la connexion. La connexion TCP est maintenant établie.

3. **Envoi de la requête HTTP** :
   - Une fois la connexion TCP établie, le client envoie la requête HTTP au serveur. Cette requête peut être de différents types (GET, POST, PUT, DELETE, etc.) en fonction de l'action souhaitée.

4. **Traitement de la requête par le serveur** :
   - Le serveur reçoit la requête HTTP et la traite. Cela peut impliquer la récupération de données, l'exécution de scripts, l'accès à une base de données, etc.

5. **Réponse du serveur** :
   - Le serveur envoie une réponse HTTP au client. Cette réponse peut contenir du HTML, du JSON, du XML, ou d'autres types de fichiers en fonction de la requête.

6. **Fermeture de la connexion TCP** :
   - Après avoir envoyé la réponse, le serveur ou le client peut initier la fermeture de la connexion TCP en envoyant un paquet FIN (finish).
   - L'autre partie répond avec un paquet ACK, et ensuite envoie également un paquet FIN.
   - La partie initiale répond avec un dernier paquet ACK. La connexion TCP est maintenant fermée.

Ce processus assure que la communication entre le client et le serveur est **fiable** et que les données sont transmises correctement.\
C'est la base de **toute communication sur le web**, que ce soit pour afficher une page web, envoyer des données à un serveur, ou interagir avec une API.

## Frontend

Le **développement front-end** concerne la **partie visible** d'une application web ou d'un site web. Il s'agit de la **présentation** et de l'**interaction utilisateur**.\
Les technologies de base front-end sont le **HTML**, le **CSS** et le **JavaScript**.

### Librairies de Styles / Composants

Il existe de nombreuses bibliothèques et outils qui permettent d'améliorer l'expérience utilisateur en proposant des **styles**, des **animations**, des **transitions**, des **effets visuels** préfaits:
- [TailwindCSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Animate.css](https://animate.style/)
- [Framer Motion](https://www.framer.com/motion/)

### Frameworks Frontend

Il existe également de nombreux **frameworks** et **bibliothèques** qui facilitent le développement front-end. Ils permettent notamment de gérer l'**état** de l'application, de créer des **composants réutilisables** et d'**optimiser** les performances.
- [React](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)

Pour les développeurs front-end, il est important de comprendre les principes de base du **design web**, de l'**accessibilité**, de la **performance** et de la **sécurité**.

{% note "<b>Important</b>" %}
- Utilisez un [Linter HTML](https://validator.w3.org/) pour vérifier que votre code HTML est correct et **respecte les normes**.
- Utilisez un [Linter CSS](https://jigsaw.w3.org/css-validator/) pour vérifier que votre code CSS est correct et **respecte les normes**.
- Utilisez un [Linter JavaScript](https://eslint.org/) pour vérifier que votre code JavaScript est correct et **respecte les normes**.
{% endnote %}

### CORS

**CORS** (Cross-Origin Resource Sharing) est un mécanisme qui permet à des ressources web d'être **partagées entre différents domaines**.\
Il est utilisé pour **contrôler l'accès** aux ressources d'un site web depuis un autre site web, en définissant des **politiques de sécurité** qui spécifient quels domaines sont autorisés à accéder aux ressources.

En tant que développeur front-end, il est important de comprendre comment fonctionne CORS et de mettre en place les **en-têtes CORS** appropriés pour garantir la **sécurité** et la **fiabilité** de l'application. *Dans le cas contraire, vous allez passer un temps fou à débugger des erreurs*.

## Backend

Le **développement back-end** concerne la **partie serveur** d'une application web ou d'un site web. Il s'agit de la **logique métier**, de l'**accès aux données** et de la **gestion des requêtes**.

### Serveurs Web

Les serveurs web sont des logiciels qui permettent de **gérer les requêtes HTTP** et de **renvoyer des réponses**. Ils peuvent également exécuter des scripts, accéder à des bases de données, et effectuer d'autres tâches liées au back-end.
- [Nginx](https://www.nginx.com/) (serveur web et reverse proxy)
- [Express.js](https://expressjs.com/) (framework Node.js serveur web)
- [Django](https://www.djangoproject.com/) (framework Python serveur web)
- [Flask](https://flask.palletsprojects.com/) (micro-framework Python serveur web)
- [Spring Boot](https://spring.io/projects/spring-boot) (framework Java serveur web)
- [Chi](https://github.com/go-chi/chi#readme) (routeur Go)

### Bases de Données

Les bases de données sont des systèmes de stockage de données qui permettent de **stocker**, **modifier** et **récupérer** des informations. Elles sont essentielles pour l'intégralité des applications web qui apportent de la **shareholder value**.

Il existe plusieurs types de bases de données, chacune adaptée à des besoins spécifiques :
- **SQL** (Structured Query Language) : bases de données relationnelles, telles que MySQL, PostgreSQL, SQLite.
- **NoSQL** : bases de données non relationnelles, telles que MongoDB, Cassandra, Redis.

{% note %}
Il est important de choisir une base de données adaptée aux besoins de l'application, en tenant compte de la **scalabilité**, de la **performance** et de la **sécurité**.
{% endnote %}

#### Modèle Relationnel

Un modèle relationnel est une représentation des données sous forme de **tables** (ou relations) qui sont liées par des **clés**. Chaque table représente une **entité** (par exemple, un utilisateur, un produit) et chaque ligne de la table représente une **instance** de cette entité.

Les bases de données relationnelles utilisent le langage SQL pour effectuer des **requêtes** et des **opérations** sur les données. Elles sont largement utilisées dans le développement d'applications web pour leur **fiabilité** et leur **robustesse**.

<pre class="mermaid" style="background-color: transparent;">
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly, can swim, can dive, can help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
</pre>

#### ORM

Les **ORM** (Object-Relational Mapping) sont des outils qui permettent de **mapper** des objets de programmation à des **tables de base de données**. Ils facilitent l'accès aux données et permettent de manipuler les données de manière **orientée objet**.

Ils représentent un moyen de **simplifier** et de **sécuriser** les interactions avec la base de données, en évitant les **injections SQL** et en facilitant la **gestion des relations** entre les tables.

{% attention %}
- Utiliser un ORM peut simplifier le développement, mais il est important de comprendre comment fonctionne la base de données sous-jacente pour éviter les **problèmes de performance** et les **erreurs de conception**.
- Un ORM ajoute une **couche d'abstraction** entre l'application et la base de données, cela entraîne souvent une perte (parfois significative) de **performance**.
{% endattention %}

#### Migration de Données

La **migration de données** est le processus de **transfert** des données d'une base de données à une autre. Elle est souvent utilisée lors de la **mise à jour** d'une application ou lors de la **migration** vers une nouvelle base de données.

Les migrations de données peuvent être **automatisées** à l'aide d'outils spécifiques, tels que **Flyway** ou **Liquibase**, qui permettent de gérer les **versions** des schémas de base de données et de **suivre** les changements apportés aux données.\
La plupart des frameworks back-end proposent des outils intégrés pour gérer les migrations de données.

Il est essentiel de penser à la **migration des données** dès le début du développement d'une application, car elle peut avoir un impact significatif sur la **stabilité** et la **performance** de l'application.

### APIs

Les **APIs** (Application Programming Interfaces) sont des interfaces qui permettent à des applications de **communiquer entre elles**. Elles définissent les **méthodes** et les **formats de données** qui peuvent être utilisés pour échanger des informations.

Les APIs sont essentielles pour le développement d'applications web modernes, car elles permettent de **séparer la logique métier** du front-end et du back-end, et de **faciliter l'intégration** avec d'autres services et applications.

<pre class="mermaid" style="background-color: transparent;">
architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db
</pre>

#### RESTful APIs

Les **APIs RESTful** (Representational State Transfer) sont un style d'architecture qui définit des **conventions** pour la création, la lecture, la mise à jour et la suppression de ressources. Elles utilisent les **méthodes HTTP** (GET, POST, PUT, DELETE) pour effectuer des opérations sur les ressources.

Les APIs RESTful sont largement utilisées dans le développement d'applications web, car elles sont **simples**, **flexibles** et **faciles à comprendre**.

##### Routes

Les **routes** sont des **URLs** qui sont associées à des **méthodes** (GET, POST, PUT, DELETE) et des **fonctions** qui définissent le comportement de l'application.\
Elles permettent de **définir des points d'entrée** pour les requêtes HTTP et de **gérer** les interactions avec les ressources de l'application.

Par exemple, une route `/users` peut être associée à une fonction qui renvoie la liste des utilisateurs, tandis qu'une route `/users/:id` peut être associée à une fonction qui renvoie les détails d'un utilisateur spécifique.

Les routes sont essentielles pour organiser le code back-end et définir les **actions** que l'application peut effectuer. Elles permettent de **séparer** la logique métier de l'application et de **faciliter** la gestion des requêtes.

##### Spécifications OpenAPI

**OpenAPI** (anciennement Swagger) est une spécification qui permet de décrire les APIs RESTful de manière **standardisée** et **lisible**. Elle définit les **endpoints**, les **méthodes**, les **paramètres** et les **réponses** des APIs de manière structurée et standardisée.

Cela permet de **documenter** les APIs de manière **automatique** et de faciliter l'intégration avec d'autres services et applications.

#### GraphQL

**GraphQL** est une alternative aux APIs RESTful qui permet de **demander des données spécifiques** à un serveur. Au lieu de récupérer toutes les données d'une ressource, l'application peut demander uniquement les champs dont elle a besoin.

GraphQL est particulièrement utile pour les applications qui nécessitent des **requêtes complexes** ou qui ont besoin de **récupérer des données de plusieurs sources**.

En bonus, les requêtes GraphQL communiquent souvent directement avec la base de données, ce qui peut **améliorer les performances** en évitant les **requêtes multiples** / les **intermédiaires**.

#### RPC

**RPC** (Remote Procedure Call) est un protocole qui permet à un programme de **demander l'exécution d'une procédure** sur un serveur distant. Il est utilisé pour **appeler des fonctions** sur un serveur à distance et récupérer les résultats.

RPC est souvent utilisé pour **intégrer des services** et des applications qui doivent communiquer entre eux. Il est plus **simple** que les APIs RESTful, mais il peut être **moins flexible** en termes de gestion des ressources.
