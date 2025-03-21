---
layout: layout/cours.njk

title: "Fondamentaux de l'ordinateur"
date: 2024-10-03
tags: ["informatique","hardware","software","OS","fondamentaux"]
authors: ["François Brucker","Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [Cours Architecture Ordinateur](https://francoisbrucker.github.io/cours_informatique/cours/syst%C3%A8me-et-r%C3%A9seau/architecture-ordinateur/)
{% endlien %}

## Théorème fondamental de l'ingéniérie logicielle

On peut régler tous les problèmes en ajoutant une **couche d'indirection**. Autrement dit,\
Si le passage d'un état A à un état B est complexe, on peut établir un état intermédiaire C, pour lequel la transition de A à C et de C à B est plus simple.

<pre class="mermaid" style="background-color: transparent;">
graph LR
    A[A] -->|Complexe| B[B]

    AA[A] -->|Simple| CC[C]
    CC -->|Simple| BB[B]
</pre>

## Architecture ordinateur

<pre class="mermaid" style="background-color: transparent;">
architecture-beta
    service users(random)[Utilisateurs]

    group computer(server)[Ordinateur]
    service software(cloud)[Logiciel] in computer
    service os(database)[OS] in computer
    service hardware(disk)[Hardware] in computer

    users:B <--> T:software
    software:R <--> L:os
    os:R <--> L:hardware
</pre>

### Hardware

L'Hardware est la partie matérielle de l'ordinateur, c'est-à-dire les composants physiques qui lui permettent de fonctionner.\
Il comprend:
- Le processeur (CPU)
- La mémoire (RAM)
- Le disque dur (HDD/SSD)
- La carte mère
- Les périphériques (clavier, souris, écran, etc.)
- Carte graphique (GPU)
- Carte réseau
- Péripériques de stockage (clé USB, disque dur externe, etc.)

#### CPU

Le processeur (en anglais, **Central Processing Unit** ou **CPU**) est le composant central de l'ordinateur, responsable de l'exécution des instructions et du traitement des données.\
Il est composé de plusieurs unités de calcul appelées **coeurs**, qui peuvent exécuter des instructions en parallèle.\
Le processeur communique avec la mémoire et les périphériques via des **bus** (canaux de communication) et des **registres** (mémoire intégrée au processeur).\
Il effectue des opérations arithmétiques et logiques sur les données, contrôle le flux d'exécution des programmes et gère les interruptions matérielles.

<pre class="mermaid" style="background-color: transparent;">
flowchart LR
    subgraph CPU["CPU"]
        direction TB

        subgraph CP["Central Processing"]
            direction TB
            ArithmeticUnit["Arithmetic & Logic Unit"]
            ControlUnit["Control Unit"]

            ArithmeticUnit<-->ControlUnit
        end

        subgraph MemoryUnit["Memory Unit"]
            direction TB
            Register["Register"]
            Cache["Cache"]
            RAM["RAM"]
            Disk["Disk"]
        end

        MemoryUnit<-->CP
    end

    InputUnit["Input Unit"]-->CPU
    CPU-->OutputUnit["Output Unit"]
</pre>

Le processeur est composé de plusieurs parties:
- **Unité arithmétique et logique (ALU)**: Responsable des opérations arithmétiques (addition, soustraction, multiplication, division) et logiques (ET, OU, NON) sur les données.
- **Unité de contrôle**: Responsable de la gestion du flux d'exécution des instructions, de la récupération des instructions en mémoire, de leur décodage et de leur exécution.
- **Unité de mémoire**: Responsable de la gestion de la mémoire, des registres internes, des caches de données et d'instructions, de la RAM et du disque dur.

#### Mémoire

{% attention %}
**Ne pas confondre mémoire (vive) avec stockage (disque)**
{% endattention %}

La mémoire est un composant essentiel de l'ordinateur qui permet de stocker **temporairement** les données et les instructions nécessaires à l'exécution des programmes. Son rôle est de stocker et restituer **très rapidement** les données pour que le processeur puisse les traiter.\
Sa forme la plus connue est la **RAM** (Random Access Memory). Physiquement, elle est composée de barrettes électroniques qui stockent les données sous forme de bits (0 ou 1).

On différencie plusieurs types de mémoire:
- **Volatile**: La mémoire est effacée lorsque l'ordinateur est éteint (RAM)
    - **Dynamique**: Les données sont stockées sous forme de charges électriques, nécessite un rafraîchissement régulier
    - **Statique**: Les données sont stockées sous forme de circuits, plus rapide et plus cher
- **Non-volatile**: La mémoire conserve les données même lorsque l'ordinateur est éteint (disque dur, SSD)

Il existe plusieurs types de composants de stockage (*classées par ordre de vitesse d'accès*):
|Niveau|Capacité|Vitesse d'accès|Localisation|Quantité / Nombre d'unités|Type|
|---|---|---|---|---|---|
|Registres|~128 bits|~0,3 ns|Intégrés dans le CPU|Variable selon l'architecture|Volatile|Stockage minuscule très rapide, mémoire éphémère|
|Cache L1|~64 KB par cœur|~1 ns|Intégré dans le CPU|1 par cœur|Volatile|Mémoire cache de premier niveau, très rapide, spécifique à chaque cœur|
|Cache L2|~256 KB à 1 MB par cœur|~3-5 ns|Intégré dans le CPU|1 par cœur|Volatile|Mémoire cache de deuxième niveau, plus grande mais légèrement moins rapide que L1|
|Cache L3|~2 à 16 MB partagés|~10-15 ns|Partagé au sein du CPU|1 pour l'ensemble des cœurs|Volatile|Mémoire cache de troisième niveau, partagée entre tous les cœurs du processeur|
|RAM|8 à 64 GB|~50-100 ns|Sur la carte mère|1 module ou plus|Volatile|Mémoire principale de l'ordinateur, stocke les données et programmes en cours d'utilisation|
|SSD (Disque Flash)|200 GB à 1 TB|~0,1 ms|Interne ou externe|1 ou plus|Non-volatile|Disque à semi-conducteurs, offre des temps d'accès rapides et une bonne fiabilité|
|HDD (Disque dur)|1 à 5 TB|~5-10 ms|Interne ou externe|1 ou plus|Non-volatile|Disque mécanique traditionnel, offre une grande capacité de stockage à moindre coût|

En tant que développeur, vous utiliserez **principalement** la RAM pour stocker les données et les instructions nécessaires à l'exécution de vos programmes. Il est important de gérer efficacement la mémoire pour éviter les **fuites de mémoire** et les **problèmes de performance**.\
Vous serez également amené à réaliser des opérations de lecture et d'écriture sur le disque dur pour stocker des données de manière permanente.\
Il est important de comprendre les **différences de vitesse d'accès** entre ces différents types de mémoire pour **optimiser** les performances de vos applications.

#### Disque dur

Le disque dur est un composant de stockage non-volatile qui permet de stocker des données de manière permanente. Il est composé de plateaux magnétiques qui tournent à grande vitesse et d'une tête de lecture/écriture qui se déplace sur ces plateaux pour accéder aux données.\
Les disques durs sont utilisés pour stocker des fichiers, des programmes, des systèmes d'exploitation et d'autres données qui doivent être conservées même lorsque l'ordinateur est éteint.

Pour stocker, lire ou écrire des données, le disque dur utilise des **plateaux magnétiques** (circulaires) qui tournent à grande vitesse (jusqu'à 15 000 tours par minute). Les bits sont stockés sous forme de **charges magnétiques** sur ces plateaux, et la tête de lecture/écriture se déplace sur ces plateaux pour accéder aux données. Pour les écritures, la tête de lecture/écriture modifie les charges magnétiques à l'emplacement souhaité.

Les disques durs sont caractérisés par plusieurs paramètres:
- **Capacité de stockage**: La quantité de données qu'ils peuvent stocker (exprimée en gigaoctets ou téraoctets).
- **Vitesse de rotation**: La vitesse à laquelle les plateaux tournent (exprimée en tours par minute).
- **Temps d'accès**: Le temps nécessaire pour accéder à une donnée spécifique sur le disque (exprimé en millisecondes).
- **Débit de transfert**: La vitesse à laquelle les données peuvent être lues ou écrites sur le disque (exprimée en mégaoctets par seconde).


#### Carte mère

La carte mère est le composant principal de l'ordinateur sur lequel sont connectés tous les autres composants matériels. Elle est composée de circuits imprimés et de connecteurs qui permettent de relier le processeur, la mémoire, le disque dur, les cartes d'extension et les périphériques.\
La carte mère contient également le BIOS (Basic Input/Output System) ou l'UEFI (Unified Extensible Firmware Interface), qui est un logiciel intégré qui permet de démarrer l'ordinateur et de contrôler les composants matériels.

### Software

Le Software est la partie logicielle de l'ordinateur, c'est-à-dire les programmes et les données qui permettent à l'ordinateur de fonctionner.\
D'un point de vue système, les logiciels que l'on peut appeler **process** ont besoin d'accéder:
- Au processeur pour effectuer les différentes opérations (calculs, déplacements de données, ...)
- A la mémoire pour stocker les données et les instructions
- Aux périphériques pour communiquer avec l'utilisateur ou d'autres systèmes

#### Daemon

Un **daemon** est un programme informatique qui s'exécute en **arrière-plan**, sans interaction directe avec l'utilisateur. Les daemons sont souvent utilisés pour des tâches de maintenance, de surveillance ou de gestion des ressources. Ils peuvent être lancés au démarrage du système et s'exécuter en continu, prêts à répondre à des événements spécifiques.\
Les daemons sont des interfaces comme les autres, la plupart du temps exécutés par l'utilisateur root, car ils nécessitent des privilèges élevés pour accéder à certaines ressources système.

#### Shell

Un **shell** est une interface en ligne de commande qui permet à l'utilisateur d'interagir avec le système d'exploitation en saisissant des commandes textuelles. Les shells sont utilisés pour exécuter des programmes, naviguer dans le système de fichiers, gérer les processus et les utilisateurs, etc.\
Il existe plusieurs shells disponibles sur les systèmes Unix et Linux, tels que Bash, Zsh, Ksh, etc. Chaque shell a ses propres fonctionnalités et syntaxe, mais ils partagent des concepts de base tels que les variables, les boucles, les conditions,...

#### GUI

Une **interface graphique** (GUI) est un environnement visuel qui permet à l'utilisateur d'interagir avec le système d'exploitation à l'aide de fenêtres, de menus, de boutons
et d'autres éléments graphiques. Les interfaces graphiques offrent une expérience utilisateur plus conviviale et intuitive que les interfaces en ligne de commande (CLI).\
Les GUI sont utilisées dans de nombreux systèmes d'exploitation modernes, tels que Windows, macOS et les distributions Linux avec des environnements de bureau tels que GNOME, KDE, etc.

### Operating System

Un système d'exploitation est un (ensemble de) programme(s) qui permettent de gérer les ressources matérielles de l'ordinateur et de fournir une interface entre l'utilisateur et le matériel.\
Le but d'un système d'exploitation est double:
- Permettre d'utiliser les périphériques de l'ordinateur grâce à des **pilotes**
- Permettre l'éxécution de programmes grâce à un **kernel**
    - De façon concurrente grâce à des **threads**
    - De façon sécurisée, les programmes ne peuvent pas accéder à la mémoire d'autres programmes

Le système d'exploitation est séparé en plusieurs couches:
- **Kernel** qui gère les appels systèmes, l'ordonnancement des process, la communication entre les process, le matériel et le kernel
- **Interfaces logicielles** permettant d'accéder aux périphériques
- **Daemons** qui sont des programmes qui tournent en arrière-plan

#### Kernel

Un système d'exploitation n'est pas un bloc monolithique, il est composé de plusieurs parties, dont le **kernel**.

Le kernel est la partie centrale du système d'exploitation qui gère les ressources matérielles (processeur, mémoire, périphériques) et les interactions logicielles (processus, threads, fichiers). Il gère également les appels système, qui permettent aux programmes d'interagir avec le matériel. Il est aussi responsable de la gestion des processus.

Le kernel a un accès matériel et un contrôle total sur la machine. Il est par conséquent le plus critique et le plus sensible des composants du système d'exploitation. Il est par principe le plus petit possible pour minimiser les risques de bugs et de failles de sécurité.

#### Interface logicielle

Une **interface logicielle** est un ensemble de fonctions, de procédures ou de méthodes qui permettent à un programme d'interagir avec un périphérique matériel ou un autre logiciel.

Les interfaces logicielles sont utilisées pour abstraire la complexité des interactions matérielles et logicielles, permettant aux développeurs de créer des applications sans avoir à se soucier des détails de bas niveau. Elles fournissent un moyen standardisé et simplifié d'accéder aux fonctionnalités des périphériques, en masquant les spécificités de leur implémentation.

## UEFI

L'UEFI (Unified Extensible Firmware Interface) est un logiciel sur la carte mère qui est lancé dès l'allumage de l'ordinateur.\
Il est en charge de la **vérification**, la **synchronisation**, et éventuellement la **configuration** des composants matériels de l'ordinateur.\
Il est également responsable de déterminer le dispositif de démarrage (disque dur, clé USB, CD-ROM, etc.) et de lancer le système d'exploitation.

Elle remplace l'ancien BIOS (Basic Input/Output System) et offre de nombreuses améliorations en termes de performances, de sécurité et de fonctionnalités.

### UEFI manager

L'UEFI manager est une interface graphique qui permet de lire et de configurer les paramètres de l'UEFI, de gérer les périphériques de démarrage, de mettre à jour le micrologiciel (firmware) de la carte mère, installer des pilotes, etc.\
On y accède généralement en appuyant sur une touche spécifique au démarrage de l'ordinateur (par exemple, F2, F10, F12, ESC).

### Boot

Le processus de démarrage d'un ordinateur consiste à charger le système d'exploitation en mémoire pour permettre à l'utilisateur d'interagir avec l'ordinateur.\
Il consiste en plusieurs étapes:
1. Mise sous tension de l'ordinateur.
2. L'UEFI initialise le matériel (la carte mère, les disques durs, la mémoire, ...) et vérifie que les périphériques connectés sont reconnus et fonctionnels.
3. Pour chaque périphérique de démarrage, l'UEFI recherche un chargeur d'amorçage (bootloader) qui permet de lancer le système d'exploitation, s'il n'y en a pas, il passe au périphérique suivant.

## Lexique

- **BIOS**: Basic Input/Output System, ancien logiciel de démarrage des ordinateurs, remplacé par l'UEFI
- **UEFI**: Unified Extensible Firmware Interface, logiciel de démarrage moderne offrant des fonctionnalités avancées
- **Firmware**: Logiciel intégré dans un composant matériel, comme le micrologiciel de la carte mère
- **Périphérique de démarrage**: Dispositif (disque dur, clé USB, CD-ROM) à partir duquel l'ordinateur démarre
- **Interface graphique**: Environnement visuel permettant d'interagir avec un système informatique
- **Pilote**: Logiciel permettant à un système d'exploitation de communiquer avec un périphérique matériel
- **Micrologiciel**: Logiciel intégré dans un composant matériel, comme le BIOS ou l'UEFI
- **Thread**: Fil d'exécution, unité de base d'un processus permettant l'exécution simultanée de plusieurs tâches
- **Kernel**: Noyau, partie centrale du système d'exploitation gérant les ressources matérielles et les interactions logicielles
- **Shell**: Interface en ligne de commande permettant d'interagir avec le système d'exploitation
- **Bootloader**: Chargeur d'amorçage, logiciel permettant de lancer le système d'exploitation au démarrage de l'ordinateur
- **Concurrent**: Le début d'un process est entre le début et la fin d'un autre process
- **Parallel**: Qui se déroule en même temps que d'autres opérations, mais sur des ressources différentes
