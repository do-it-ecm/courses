---
layout: layout/cours.njk

title: "Fondamentaux de l'ordinateur"
date: 2024-10-03
tags: ["informatique","hardware","software","OS","fondamentaux"]
authors: ["François Brucker","Loïck Goupil-Hallay"]
---

{% lien "**Liens utiles**" %}
- [Cours Architecture Ordinateur](https://francoisbrucker.github.io/cours_informatique/cours/syst%C3%A8me/architecture-ordinateur/)
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
    service users(clarity:users-solid)[Utilisateurs]

    group computer(server)[Computer]
    service software(cloud)[Software] in computer
    service os(database)[Operating System] in computer
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
- Carte graphique
- Carte réseau
- Péripériques de stockage (clé USB, disque dur externe, etc.)

### Software
Le Software est la partie logicielle de l'ordinateur, c'est-à-dire les programmes et les données qui permettent à l'ordinateur de fonctionner.\
D'un point de vue système, les logiciels que l'on peut appeler **process** ont besoin d'accéder:
- Au processeur pour effectuer les différentes opérations (calculs, déplacements de données, ...)
- A la mémoire pour stocker les données et les instructions
- Aux périphériques pour communiquer avec l'utilisateur ou d'autres systèmes

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

### Interface logicielle
Une **interface logicielle** est un ensemble de fonctions, de procédures ou de méthodes qui permettent à un programme d'interagir avec un périphérique matériel ou un autre logiciel.

Les interfaces logicielles sont utilisées pour abstraire la complexité des interactions matérielles et logicielles, permettant aux développeurs de créer des applications sans avoir à se soucier des détails de bas niveau. Elles fournissent un moyen standardisé et simplifié d'accéder aux fonctionnalités des périphériques, en masquant les spécificités de leur implémentation.

#### Daemon
Un **daemon** est un programme informatique qui s'exécute en arrière-plan, sans interaction directe avec l'utilisateur. Les daemons sont souvent utilisés pour des tâches de maintenance, de surveillance ou de gestion des ressources. Ils peuvent être lancés au démarrage du système et s'exécuter en continu, prêts à répondre à des événements spécifiques.\
Les daemons sont des interfaces comme les autres, la plupart du temps exécutés par l'utilisateur root, car ils nécessitent des privilèges élevés pour accéder à certaines ressources système.

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
