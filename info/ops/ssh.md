---
layout: layout/cours.njk

title: "SSH"
date: 2024-10-17
tags: ["informatique", "os", "linux","ssh"]
authors: ["François Brucker","Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [Cours Linux](https://francoisbrucker.github.io/cours_informatique/cours/syst%C3%A8me-et-r%C3%A9seau/ssh/)
{% endlien %}

## Introduction
Le SSH(Secure Shell) est un protocole de communication **sécurisé** qui permet de se **connecter à un serveur distant**, de **lancer des commandes** sur ce serveur, de **transférer des fichiers**. Tout cela en assurant la **confidentialité** et l'**intégrité** des données échangées. SSH est massivement utilisé pour administrer des serveurs à distance. C'est un protocole écrit en 1995, qui a été conçu pour remplacer les protocoles non sécurisés comme telnet, rlogin, rsh.

C'est aussi un programme qui permet de se connecter à un serveur distant en utilisant le protocole SSH. Il est disponible par défaut sur la plupart des systèmes d'exploitation (Mais pas forcément activé).

## Fonctionnement

### Protocoles
SSH se base sur les protocoles **TCP/IP** (comme la plupart des services sur internet). La combinaison de ces protocoles est utilisée pour **formatter**, **router** et **délivrer** les packets de données entre deux systèmes. IP (Internet Protocol) est utilisé pour acheminer les packets de données entre les deux systèmes via leur adresse. TCP (Transmission Control Protocol) est utilisé pour s'assurer que les packets de données sont bien envoyés et reçus via un port spécifique.

### Cryptographie
SSH est sécurisé car il oblige les deux systèmes à s'**authentifier mutuellement** par l'usage de **clés cryptographiques**. Ces clés permettent de **chiffrer** et **signer** les données échangées entre les deux systèmes.

Les clés utilisées pour l'authentification sont dites **asymétriques**, cela veut dire qu'il y a une clé publique et une clé privée. La clé publique est partagée entre les deux systèmes, tandis que la clé privée est gardée secrète. La <u>clé privée est utilisée pour signer</u> les données, tandis que la <u>clé publique est utilisée pour vérifier la signature</u>. Il est (pour l'instant) impossible de déduire la clé privée à partir de la clé publique. La clé publique est donc partagée sans risque.\
Pour se connecter à un serveur via SSH, il faut donc que le serveur autorise la connexion de la clé publique de l'utilisateur. L'utilisateur doit quant à lui posséder la clé privée correspondante pour se connecter.

Une fois que l'authentification est faite, les systèmes échangent des **clés symétriques** pour chiffrer les données échangées. Ces clés symétriques sont générées aléatoirement pour chaque session. Cela permet d'assurer la **confidentialité** et l'**intégrité** des données échangées, même si un attaquant intercepte les données.

### Séquence de connexion (simplifiée)
Voici une version simplifiée de la séquence de connexion entre un client et un serveur via SSH. Une [version complète](https://info.support.huawei.com/info-finder/encyclopedia/en/SSH.html) est disponible sur le site de Huawei.

<pre class="mermaid" style="background-color: transparent;">
sequenceDiagram
    participant Client
    participant Serveur
    Client->>Serveur: Demande de connexion
    Client<<-->>Serveur : Liaison TCP/IP
    Serveur->>Client: Clé publique
    Client->>Serveur: Clé publique
    Client->>Serveur: Clé symétrique
    Serveur->>Client: Clé symétrique
    Client<<-->>Serveur: Données chiffrées
</pre>

## Connexion au serveur de Centrale Marseille
Nous allons maintenant voir le cas concret de connexion à Centrale Marseille à distance via SSH.

### Setup SSH
Avant de se connecter à quoi que ce soit, il faut s'assurer que le programme SSH est installé sur votre machine. Vous n'avez pas besoin d'activer le démon SSH sur votre machine, mais vous devez avoir le programme client SSH. Pour cela, vous pouvez taper `ssh -V` dans votre terminal.\
Si vous n'avez pas d'erreur et que vous avez une version de SSH qui s'affiche, c'est que vous avez le programme client SSH installé sur votre machine. Dans le cas contraire, il vous faut l'installer.

### Agents SSH
Ensuite, il faut s'assurer que vous ayiez un agent SSH actif sur votre machine.\
Les agents SSH sont des programmes qui permettent de gérer automatiquement l'authentification SSH. Ils permettent de stocker les clés privées en mémoire et de les utiliser pour se connecter à des serveurs sans avoir à rentrer le mot de passe à chaque fois.

Si vous avez activé le service SSH sur votre machine, il y a des chances que le service SSH-agent soit aussi actif par défaut. Pour vérifier si vous avez un agent SSH actif, vous pouvez taper `ssh-add -l` dans votre terminal.\
Si vous avez un message de type: `could not open a connection to your authentication agent`, c'est que vous n'avez pas d'agent SSH actif. Vous pouvez alors faire au choix:
- Taper `eval "$(ssh-agent)"` pour lancer un nouvel agent SSH. *Le eval est important, ne tentez pas de gagner 0.31ms* (il faudra relancer cette commande avec chaque nouveau terminal depuis lequel on souhaite lancer une connexion SSH)
- Activer l'agent SSH au démarrage de votre terminal en ajoutant la commande `eval "$(ssh-agent)"` dans votre fichier de configuration de shell (`~/.bashrc` OU `~/.zshrc` OU `~/.profile`,...). Il faudra immédiatement relancer le terminal.
- Activer le service SSH-agent au démarrage de votre machine. La commande exacte dépend de votre OS mais devrait ressembler à `systemctl enable ssh-agent.service`

### Clés SSH
Dernière étape avant de se connecter, il faut s'assurer que vous avez une fameuse paire de clés SSH.\
Par défaut, elles se trouvent dans `~/.ssh/`, vous pouvez vous en assurer en tapant `ls ~/.ssh/id_rsa*` dans votre terminal. Si vous voyez bien apparaitre des fichiers `id_rsa` et `id_rsa.pub`, c'est que vous avez une paire de clés SSH.\
Dans le cas contraire, vous pouvez générer une paire de clés SSH en tapant `ssh-keygen` dans votre terminal, puis en suivant les instructions. Pensez à protéger votre clé privée avec un mot de passe sécurisé, sinon je risque de vous pirater.

### Connexion
Maintenant que vous avez tout ce qu'il faut, vous pouvez vous connecter à Centrale Marseille. Pour cela, il vous suffit de taper `ssh <votre_login_ecm>@sas1.ec-m.fr` dans votre terminal et de remplir votre mot de passe. Si vous ne le voyez pas, c'est normal, c'est pour des raisons de sécurité.\
Magie, vous êtes maintenant connecté à Centrale Marseille à distance. Vous pouvez contempler avec joie le message de bienvenue qui vous accueille.

### Gagner du temps
Si vous voulez vous connecter à Centrale Marseille sans avoir à taper votre mot de passe à chaque fois, vous pouvez ajouter votre clé publique à votre compte ECM. Pour cela, vous pouvez taper `ssh-copy-id <votre_login_ecm>@sas1.ec-m.fr` dans votre terminal.

Si vous voulez gagner encore plus de temps, vous pouvez configurer un hôte SSH dans votre fichier de configuration SSH. Pour cela, il faut ajouter les lignes suivantes dans le fichier `/etc/ssh/ssh_config` si vous êtes administrateur et unique utilisateur de votre machine, ou dans le fichier `~/.ssh/config` si vous êtes un utilisateur lambda. (Si le fichier n'existe pas, vous pouvez le créer)
```bash
Host ecm
    HostName sas1.ec-m.fr
    User <votre_login_ecm>
    Port 22
```
Vous pouvez bien sûr choisir un autre nom que `ecm` pour l'hôte.

Maintenant, pour vous connecter à Centrale Marseille, il vous suffit de taper `ssh ecm` dans votre terminal.

## Connexion à aioli
La promo Do-It possède **son propre serveur dédié** nommé `aioli`. Pour vous connecter à aioli, le processus est similaire à celui de Centrale Marseille.

La seule différence est que vous n'avez pas forcément un compte sur aioli, il faudra donc demander à FB, de vous créer un compte. Chaque compte sur aioli possède un nom bien provençal. Et ce compte n'est **pas accessible via mot de passe**, il faut obligatoirement se connecter via clé SSH. Cela veut dire que vous devrez **transmettre votre clé SSH <u>PUBLIQUE</u> à FB** pour qu'il puisse l'ajouter à votre compte.

Pour vous connecter à aioli, vous pouvez taper `ssh <votre_login_aioli>@aioli.ec-m.fr` dans votre terminal. Si vous avez configuré un hôte SSH pour aioli, vous pouvez taper `ssh aioli` dans votre terminal. *S'il vous demande un mot de passe, c'est que vous avez merdé quelque part*.

### Gagner du temps
Si vous voulez gagner du temps, vous pouvez configurer un hôte SSH pour aioli dans votre fichier de configuration SSH. Pour cela, il faut ajouter les lignes suivantes dans le fichier `/etc/ssh/ssh_config` si vous êtes administrateur et unique utilisateur de votre machine, ou dans le fichier `~/.ssh/config` si vous êtes un utilisateur lambda. (Si le fichier n'existe pas, vous pouvez le créer)
```bash
Host aioli
    HostName aioli.ec-m.fr
    User <votre_login_aioli>
    Port 22
```
Vous pouvez bien sûr choisir un autre nom que `aioli` pour l'hôte.
