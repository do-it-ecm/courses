---
layout: layout/cours.njk

title: "Git"
date: 2024-09-05
tags: ["git", "informatique"]
authors: ["François Brucker","Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [Cours Git / GitHub](https://francoisbrucker.github.io/cours_informatique/cours/gestion-des-sources/)
{% endlien %}

<pre class="mermaid" style="background-color: transparent;">
gitGraph
  commit id: "ZERO-0"
  branch "hotfix"
  commit
  branch "develop"
  commit id: "bugfix"
  checkout hotfix
  cherry-pick id:"bugfix"
  checkout main
  merge hotfix
</pre>

Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, le créateur de Linux. Il est utilisé pour le suivi des modifications apportées à un ensemble de fichiers. Il permet de travailler à plusieurs sur un même projet, de suivre l'évolution du code, de revenir en arrière, de gérer des branches, etc.

- **Gestion de versions**: Processus de suivi et de gestion des modifications apportées à un ensemble de fichiers au fil du temps, permettant de conserver un historique complet, de revenir à des versions antérieures et de gérer les contributions de plusieurs personnes
- **Décentralisé**: Modèle de gestion de versions dans lequel chaque utilisateur possède une copie complète du dépôt, incluant tout l'historique des modifications, ce qui permet de travailler de manière autonome sans connexion permanente à un serveur central

## Vocabulaire

### Code source
- **Repository (repo)**: Répertoire ou stockage contenant l'ensemble des fichiers du projet, ainsi que l'historique complet des modifications (commits) et métadonnées associées, permettant de suivre l'évolution du projet
- **Branch**: Ligne de développement indépendante permettant de travailler sur une version spécifique du code sans affecter la branche principale (souvent appelée main ou master). Les branches facilitent le travail collaboratif et l'ajout de nouvelles fonctionnalités ou corrections
- **Tag**: Référence immuable attachée à un commit spécifique, utilisée pour marquer des versions importantes du projet, comme des releases ou des jalons clés
- **Fork**: Copie d'un dépôt existant vers un autre compte utilisateur, permettant de travailler indépendamment sur le projet tout en conservant un lien avec le dépôt original pour éventuellement proposer des modifications
- **Clone**: Reproduction complète d'un dépôt (y compris son historique) sur une machine locale, permettant de travailler hors ligne tout en conservant la possibilité de synchroniser avec le dépôt distant

### Edition du code

#### Enregistrement des modifications
- **Commit**: Action d'enregistrer des modifications locales dans l'historique du projet, créant ainsi un instantané (snapshot) des fichiers à un moment donné, avec un message descriptif pour documenter les changements
- **Push**: Envoi des commits locaux vers un dépôt distant, synchronisant ainsi les modifications effectuées localement avec le repository distant pour les partager avec d'autres collaborateurs
- **Amend**: Modification d'un commit local récent en écrasant son contenu ou son message sans créer un nouveau commit, souvent utilisé pour corriger des erreurs dans le dernier commit
- **Stash**: Sauvegarde temporaire et locale des modifications non commitées, permettant de revenir à un état propre sans perdre ces modifications, afin de pouvoir les restaurer et poursuivre le travail plus tard
- **Revert**: Annulation d'un commit spécifique en créant un nouveau commit qui annule les modifications apportées par le commit ciblé, tout en conservant l'historique complet des modifications
- **Reset**: Réinitialisation de l'état du dépôt à un commit spécifique, permettant de revenir en arrière et d'annuler les modifications apportées depuis ce commit, avec différentes options pour conserver ou supprimer les modifications locales
- **Cherry-pick**: Action de sélectionner et d'appliquer un commit spécifique d'une branche à une autre, permettant de réutiliser des modifications spécifiques sans fusionner l'ensemble des changements d'une branche

#### Gestion des branches
- **Pull request (Merge request)**: Proposition de fusion de deux branches, généralement faite pour permettre la revue de code avant d'intégrer les modifications d'une branche (souvent une branche de fonctionnalité) dans la branche principale. Utilisée principalement dans les workflows collaboratifs
- **Pull**: Action de récupérer les modifications d'un dépôt distant vers un dépôt local, en intégrant à la fois les nouvelles données et l'historique des commits dans la branche active du dépôt local
- **Merge**: Opération qui combine les modifications de deux branches distinctes en une seule, souvent utilisée pour intégrer des nouvelles fonctionnalités ou corrections dans une branche principale après un développement parallèle
- **Conflict**: Situation où Git ne peut pas automatiquement fusionner deux branches, car les modifications apportées à des lignes de code similaires sont incompatibles. Les conflits doivent être résolus manuellement avant de poursuivre la fusion
- **Rebase**: Opération qui réécrit l'historique des commits en déplaçant une branche sur une autre, tout en appliquant les commits de manière linéaire. Souvent utilisée pour conserver un historique propre et éviter les commits de merge

### Alias
- **Remote**: Un dépôt distant hébergé sur un serveur ou une plateforme en ligne (comme GitHub, GitLab, ou Bitbucket) avec lequel le dépôt local peut échanger des données. Les opérations comme fetch, pull, et push permettent de synchroniser les modifications avec ce dépôt distant
- **Origin**: Le nom par défaut donné au dépôt distant lors du clonage d'un projet. Il fait référence à l'emplacement d'où le dépôt a été cloné. C'est l'alias principal utilisé pour interagir avec le dépôt distant original
- **Upstream**: Référence au dépôt ou à la branche d'origine d'un projet (généralement le projet principal ou original). Lorsque vous contribuez à un projet en créant un fork, upstream désigne souvent le dépôt principal avec lequel vous synchronisez vos changements
- **HEAD**: Pointeur symbolique qui représente la branche ou le commit actuel sur lequel vous travaillez, généralement lié au dernier commit enregistré dans la branche active

##  Prise en main

### Installation
- **Linux**: Installation via le gestionnaire de paquets (exemple apt: `sudo apt install git`)
- **MacOS**: Installation via [Homebrew](https://brew.sh) (commande: `brew install git`)
- **Windows**: Installation via [Git for Windows](https://git-scm.com/download/win)

### Configuration
- **Liste des configurations**: `git config --list`
- **Identité** (OBLIGATOIRE): `git config --global user.name "John Doe"`
- **Email** (OBLIGATOIRE): `git config --global user.email "example@email.com"`
- **Éditeur de texte** (OPTIONNEL): `git config --global core.editor "vim"`
- **Couleur de l'interface** (OPTIONNEL): `git config --global color.ui auto`

### Utilisation
- **Initialisation d'un repository**: `git init`
- **Clonage d'un repository existant**: `git clone <url>`
- **Ajout de fichiers modifié**: `git add <fichier>`
- **Enregistrement des modifications**: `git commit -m "Message de commit"`
- **Envoi des modifications (sur le repository distant)**: `git push`
- **Récupération des modifications (sur le repository distant)**: `git pull`

### Exemple

```bash
# Initialisation d'un repository
cd /chemin/vers/mon/projet
git init

# Création d'une branche pour travailler
git checkout -b ma-branche

# ... Travail sur des fichiers

# Ajout des fichiers modifiés
git add fichier1 fichier2

# Enregistrement des modifications
git commit -m "Ajout de fichier1 et fichier2"

# Définition du repository distant
git remote add origin <url>

# Envoi des modifications
git push -u origin ma-branche
```

## .gitignore
Le fichier `.gitignore` permet d'ignorer certains fichiers ou répertoires lors des opérations de suivi des modifications. Il est utile pour exclure des fichiers temporaires, des fichiers de configuration locaux, des fichiers de build, des fichiers sensibles, etc.

Pour créer un fichier `.gitignore`, il suffit de créer un fichier nommé `.gitignore` à la racine du repository et d'y ajouter les fichiers ou répertoires à ignorer, un par ligne. Les règles de syntaxe permettent d'utiliser des wildcards (*) pour spécifier des motifs de fichiers à ignorer.\
Pour spécifier un directory entier, il suffit de mettre le nom du directory suivi d'un `/`.


Exemple de contenu d'un fichier `.gitignore`:

```plaintext
# Fichiers temporaires
*.tmp
*.log

# Répertoires de build
build/
dist/

# Fichiers de configuration locaux
.env
config.json

# Fichiers sensibles
passwords.txt

# Contenu spécifique à un éditeur
.vscode/
.idea/

# Node.js
node_modules/
```

## Guide de debug
Spécialement pour vous, voici un guide de debug pour les erreurs les plus courantes (lorsque l'on veut publier son code)

<pre class="mermaid" style="background-color: transparent;">
flowchart TD
    giterror[\J'ai une erreur avec Git ?/] -->|Erreur repo distant / origin|originerror[git remote -v]

    originerror -->|Pas de remote|gitremoteadd[git remote add origin URL]
    originerror -->|Mauvaise URL|gitremotechange[git remote set-url origin URL]

    gitremoteadd --> problemsolvedquestion[\Problème résolu ?/]
    gitremotechange --> problemsolvedquestion
    problemsolvedquestion -->|Oui|problemsolved([Problème résolu])
    problemsolvedquestion -->|Oui mais nouvelle erreur|giterror
    problemsolvedquestion -->|Non|askforhelp([Chercher sur internet ou demander de l'aide])

    giterror -->|Erreur de branche|brancherror[git branch]
    brancherror -->|Pas de branche|gitcheckout[git checkout -b NOM_BRANCHE]
    brancherror -->|Mauvaise branche|gitcheckout[git checkout NOM_BRANCHE]
    brancherror -->|Pas droit de push|gitpush[git push --set-upstream origin NOM_BRANCHE_AVEC_DROITS]

    gitcheckout --> problemsolvedquestion
    gitpush --> problemsolvedquestion

    giterror -->|Synchronisation|syncerror[synchronisation]

    syncerror -->|Dépassement de commits ahead/behind|syncpullpush[git pull origin NOM_BRANCHE puis git push]
    syncerror -->|Conflits de merge|mergeconflict[Résoudre les conflits puis git add . et git commit]
    syncerror -->|Changements locaux non commités|stagedchanges[git add . puis git commit -m MESSAGE]

    syncpullpush --> problemsolvedquestion
    mergeconflict --> problemsolvedquestion
    stagedchanges --> problemsolvedquestion
</pre>
