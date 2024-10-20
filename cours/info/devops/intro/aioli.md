---
title: "aioli"
date: "2024-10-20"
sidebar_label: "SSH"
sidebar_position: 1
tags: ["informatique", "aioli", "serveur"]
authors: ["BoxBoxJason"]
description: "Présentation du serveur dédié à la promotion Do_It de Centrale Marseille: aioli"
keywords: ["informatique", "aioli", "serveur"]
---

import LinksSection from '@site/src/components/LinksSection';

# aioli

<LinksSection
    title="Liens utiles"
    links={[
      {displayName: "Cours SSH connexion aioli", url: "https://boxboxjason.github.io/do_it/cours/info/bases/ssh/#connexion-%C3%A0-aioli"},
      ]}
/>

## Introduction
Aioli est une **machine virtuelle** dédiée à la promotion Do_It de Centrale Marseille. Elle est hébergée sur une machine physique en Angleterre. Elle est accessible par les élèves via SSH. Il s'agit d'un serveur de test, de développement et de déploiement pour les projets de la promotion. La machine tourne sous **Debian 12** (Bookworm).\
Il s'agit d'**une UNIQUE machine virtuelle partagée par tous les élèves de la promotion**. Il est donc important de ne pas interférer avec les projets des autres élèves.

## Accès
Chaque personne possède un compte dédié sur aioli. Les identifiants portent des noms bien provençaux. Pour obtenir vos identifiants, contactez un membre de l'équipe Do_It. Une fois votre identifiant obtenu, vous pouvez vous connecter à aioli via SSH. Nous le noterons `<HERBE>` *Retenez le bien*

### Connexion SSH
Suivez le [cours sur la connexion à aioli](https://boxboxjason.github.io/do_it/cours/info/bases/ssh/#connexion-%C3%A0-aioli) pour vous connecter à aioli.
Une fois que vous êtes connecté, vous pouvez commencer à travailler sur vos projets.

### HTTP(S)
Chaque herbe possède un nom unique qui lui permet de rendre du contenu accessible via un navigateur. Ce contenu est port forwardé par un reverse proxy nginx. Pour accéder à votre contenu, il se trouve à l'adresse `https://<HERBE>.aioli.ec-m.fr`. Par défaut, vous n'aurez RIEN sur cette adresse. C'est à vous de déployer votre contenu sur le serveur.

Le reverse proxy rend disponible les deux services web suivants:
- Votre dossier `~/static` (OU `/home/<HERBE>/static`) est accessible à l'adresse `https://<HERBE>.aioli.ec-m.fr/static/`, servi en statique par nginx.
- N'importe quel service web (HTTP ou HTTPS) que vous démarrez sur le port correspondant à votre UID (par exemple, le port 1105 pour l'herbe cumin (1105)) est proxyfié par nginx à l'adresse `https://cumin.aioli.ec-m.fr/`. Attention, vous DEVEZ utiliser le port de VOTRE UID pour que le reverse proxy fonctionne.

## Services
Aioli est un serveur de test, de développement et de déploiement. Vous pouvez y déployer vos projets web, vos services, vos applications. Vous ne pouvez rien installer au niveau système, mais vous pouvez installer des logiciels dans votre répertoire personnel.

### PostgreSQL
Aioli possède un cluster de base de données postgresql. Chaque herbe est identifiée via le socket unix `/var/run/postgresql/.s.PGSQL.5432` et peut se connecter à la base de données qui porte le même nom que son herbe, le tout sans mot de passe. Vous ne POUVEZ PAS créer de nouvelles bases de données ou d'utilisateurs. Vous ne pouvez que vous connecter à votre base de données, pas celle des autres herbes.

Vous avez accès à la commande `psql` pour interagir avec votre base de données. Vous pouvez également utiliser des outils graphiques comme pgAdmin pour interagir avec votre base de données.

### Node
La version 18.19.0 de Node.js est installée sur aioli. Vous pouvez l'utiliser pour développer des applications web et d'autres projets.\
Vous disposez également de **npm** pour gérer les dépendances de vos projets. Cependant vous n'aurez pas les droits pour installer des paquets globalement.

EsLint est installé globalement sur aioli. Vous pouvez l'utiliser pour vérifier la qualité de votre code JavaScript.

### Python
La version 3.11.2 de Python est installée sur aioli. Vous pouvez l'utiliser pour développer.\
Vous disposez également de **pip** pour gérer les dépendances de vos projets. Cependant vous n'aurez pas les droits pour installer des paquets globalement. Utilisez des environnements virtuels pour installer des paquets spécifiques à vos projets. Vous pouvez égaler utilsier `pip install --user` pour installer des paquets dans votre répertoire personnel.

### Nginx
Un serveur nginx est installé sur aioli. Vous pouvez l'utiliser pour servir des fichiers statiques ou pour reverse proxyfier des services web. Vous ne pouvez pas modifier la configuration globale de nginx mais sachant que vous avez un reverse proxy à votre disposition.

### Git
Git est installé sur aioli. Vous avez accès à toutes les commandes de git pour gérer vos projets.

### Make, GCC, G++
Les outils de compilation sont installés sur aioli. Vous pouvez compiler des projets C/C++.
