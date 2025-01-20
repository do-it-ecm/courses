---
layout: layout/cours.njk

title: "Réseau"
date: 2025-01-20
tags: ["informatique","réseau","internet","communication"]
authors: ["Patrick Girard","Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

## Internet Protocol

Une **adresse IP publique** permet de communiquer avec n'importe quelle autre adresse IP publique à travers le monde pour peu que les deux machines soient connectées à Internet / au même réseau.

### Comment la communication est-elle possible ?

Quand une machine veut communiquer avec une autre, elle doit connaître son adresse IP. Pour cela, elle

### Communication (Commutation)

#### Commutation de circuits

Dans une commutation de circuits, pour communiquer entre 2 machines, le circuit est **établi au préalable** et est **réservé** pour la durée de la communication.

##### Avantages

- Cela permet d'avoir une **bande passante garantie**
- La **latence** est faible
- Il n'y a pas de **perte d'information**
- Toutes les données sont **transmises dans l'ordre**

##### Inconvénients

- Si une machine ne communique pas, le circuit est inutilisé mais reste réservé
- Si trop de machines veulent communiquer en même temps, il n'y a pas assez de circuits disponibles et certaines communications ne peuvent pas être établies

#### Commutation de paquets

Dans une commutation de paquets, les données sont **découpées en paquets** et sont envoyées indépendamment les uns des autres. Ils connaissent tous leur **adresse de destination**. Le circuit n'est pas réservé à l'avance, il est établi à la volée par les routeurs.

##### Avantages

- Les circuits ne sont pas réservés à l'avance
- Les paquets peuvent emprunter des chemins différents pour optimiser le réseau
- Si un paquet est perdu, il est renvoyé
- Les paquets peuvent être envoyés à des vitesses différentes

##### Inconvénients

- La **latence** est plus élevée
- Il peut y avoir des **pertes de paquets**
- Les paquets peuvent arriver dans le désordre
- Peu sensible aux routeurs défectueux

##### Choix

Le réseau informatique moderne utilise uniquement la commutation de paquets. C'est le protocole **IP** (Internet Protocol) qui est utilisé pour cela. Cela s'explique de par la nature particulière du trafic informatique:
- Des rafales de données suivies de longues périodes d'inactivité
- Des données qui ne sont pas toutes de la même importance
- Les données peuvent être perdues sans que cela ne pose de problème, quitte à les renvoyer
- Les tuyaux peuvent être partagés par plusieurs machines pour optimiser l'utilisation / le coût du réseau

##### Transmission de données

La **vitesse** d'un bit circulant dans un lien est d'à peu près la vitesse de la lumière. Cela ne peut pas être accéléré en tant que tel.

Pour accélérer un lien, grâce à la commutation de paquets, on peut soit:
- Augmenter la cadence d'émission des paquets (10Mb/s, 100Mb/s, 1Gb/s, 10Gb/s, 100Gb/s)
- Emettre les paquets sur plusieurs liens en parallèle (technique de **multiplexage**)

Le réseau mondial internet est **surdimensionné** pour pouvoir supporter le trafic mondial. Cela permet de ne pas saturer le réseau et de garantir une certaine qualité de service.\
Cela permet notamment à l'Internet Protocol de transporter des données pour lesquelles il n'est a priori pas fait pour (ex: la téléphonie).

## Routage

Le **routage** est le processus qui permet de déterminer le chemin que les paquets vont emprunter pour aller d'une machine à une autre.

### Routeur

Un **routeur** est un équipement réseau (une sorte d'ordinateur spécialisé) qui reçoit des paquets et les envoie vers leur destination. Il est capable de lire l'adresse de destination des paquets et de déterminer le chemin à emprunter pour les acheminer.

Un routeur assure deux missions essentielles:
- La **commutation de paquets**: Il choisit la meilleure interface de sortie en fonction de la destionation d'un paquet et des informations de la **table de routage**
- La gestion des **protocoles de routage**: Il échange des informations avec d'autres routeurs pour maintenir et faire évoluer sa **table de routage**


### Système Autonome

Un routeur peut être **intérieur** ou en **bordure** d'un réseau. Un routeur en bordure est connecté à plusieurs réseaux et permet de faire transiter des paquets d'un réseau à un autre.

Un **système autonome** est un ensemble de routeurs qui sont sous le contrôle d'une même entité administrative. Ils partagent des informations de routage entre eux.\
Les systèmes autonomes sont identifiés par un **numéro AS** (Autonomous System) qui est unique dans le monde.\
Il s'interconnectent entre eux pour former l'Internet dans des **Meet Me Room** (MMR) des IXPs (Internet Exchange Points).

#### Routes connues

Un routeur connaît les routes vers les réseaux qui lui sont directement connectés.\
Il connaît également les routes vers les réseaux des autres systèmes autonomes grâce à des **protocoles de routage**.

Si la destination d'un paquet est connue dans l'IXP, le paquet est transmis.\
Sinon, le routeur transmet le paquet à un routeur de la **bordure** de son réseau. Si celui-ci ne connaît pas non plus la destination, il transmet la destination à un routeur de la **Default Free Zone** (DFZ), qui connaissent toutes les routes mondiales.

## Modèle en couche: OSI

Le modèle OSI (Open Systems Interconnection) est un modèle de référence qui permet de décomposer les tâches nécessaires à la communication en plusieurs couches.\
Chaque couche a un rôle bien défini et communique avec les couches adjacentes.

Le but est de favoriuser l'évolution technologique en assurant l'interopérabilité sans nuire à la vitalité ni à la performance des réseaux.

| Numéro | Couche | Fonction | Protocoles |
|--------|--------|-----|------------|
| 7 | Application | Accès au service | Telnet, STP, NFS, TFTP, HTTP, FTP |
| 6 | Présentation | Conversion de format | ASCII, EBCDIC, JPEG, AIFF, MPEG, MP3 |
| 5 | Session | Gestion de la session | X-Window System , RPC, NFS, SQL |
| 4 | Transport | Orienté connexion, contrôle de flux & fiabilité | TCP, UDP |
| 3 | Réseau | Adressage, Routage, Commutation, Best Effort Delivery | IP |
| 2 | Liaison | Transmission, Fiabilité, Contrôle de flux, Topologie Réseau | LLC, MAC, CSMA/CD, CSMA/CA |
| 1 | Physique | Transmission bit à bit, spécification physique du lien | EIA, TIA, RJ45 |

## Adresse IP

Une adresse IP est un numéro unique qui identifie une machine ou un équipement sur un réseau.

Une adresse IP est composée de 2 parties:
- **network**: Identifie le réseau sur lequel se trouve la machine
- **host**: Identifie la machine sur le réseau

### Masque

Un **masque** permet de déterminer la partie réseau et la partie machine d'une adresse IP. Il permet de faire la distinction entre la partie network et la partie host.

En pratique, les routeurs ne regardent que la partie network de l'adresse IP pour déterminer le chemin à emprunter. Le travail de détermination de la partie host est fait par les routeurs de bordure.

### Classes

Une classe d'adresse IP est déterminée par les premiers bits de l'adresse IP.\
Ces classes permettent de distinguer la taille du réseau et du nombre de machines qui peuvent être connectées.

| Classe | Plage | Masque | Host | Adresse Privées |
|--------|-------|---------|------| --------------- |
| A | 0 - 127 | 8 bits | 16 777 214 | 10.0.0.0 - 10.255.255.255 |
| B | 128 - 191 | 16 bits | 65 534 | 172.16.0.0 - 172.31.255.255 |
| C | 192 - 223 | 24 bits | 254 | 192.168.0.0 - 192.168.255.255 |

#### Adresses privées

Il existe des plages d'adresses IP "privées" qui ne sont pas routées sur Internet. Elles sont utilisées pour les réseaux locaux. Les routeurs de bordure les filtrent pour éviter qu'elles ne soient routées sur Internet.

#### Adresses de broadcast

L'adresse de broadcast est une adresse spéciale qui permet d'envoyer un message à toutes les machines d'un réseau.\
Elle est utilisée pour envoyer des messages à tous les équipements d'un réseau. Il s'agit de l'adresse se terminant par 255.

Cela veut aussi dire qu'aucune machine ne peut avoir cette adresse.

## Sous réseaux

Le découpage du réseau par classe d'adresse IP pose des problèmes de gaspillage d'adresses IP (dues à un trop grand écart entre le nombre d'adresses disponibles et le nombre d'adresses nécessaires).

De plus, il est parfois nécessaire de séparer les données de différents services sur des réseaux différents au sein d'une même entreprise.

Pour résoudre ces problèmes, on utilise les **sous-réseaux**.\
Un sous-réseau est un découpage d'un réseau en plusieurs réseaux plus petits.\
Chaque sous-réseau a sa propre adresse IP et son propre masque.


## Glossaire

- **Protocole**
- **Codage**
- **Boucle locale**
