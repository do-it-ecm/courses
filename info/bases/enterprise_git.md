---
layout: layout/cours.njk

title: "Enterprise Git"
date: 2025-06-09
tags: ["git", "bonnes pratiques", "versioning"]
authors: ["Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}

- [Documentation officielle de Git](https://git-scm.com/doc)
- [Cours Git Bases](../git)
- [Cours Git / GitHub](https://francoisbrucker.github.io/cours_informatique/cours/gestion-des-sources/)
{% endlien %}

Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, le créateur de Linux. Il est utilisé pour le suivi des modifications apportées à un ensemble de fichiers. Il permet de travailler à plusieurs sur un même projet, de suivre l'évolution du code, de revenir en arrière, de gérer des branches, etc.

- **Gestion de versions**: Processus de suivi et de gestion des modifications apportées à un ensemble de fichiers au fil du temps, permettant de conserver un historique complet, de revenir à des versions antérieures et de gérer les contributions de plusieurs personnes
- **Décentralisé**: Modèle de gestion de versions dans lequel chaque utilisateur possède une copie complète du dépôt, incluant tout l'historique des modifications, ce qui permet de travailler de manière autonome sans connexion permanente à un serveur central

Ce guide est destiné à vous aider à maîtriser Git dans un contexte **professionnel**, en suivant les **bonnes pratiques** et en utilisant les **fonctionnalités avancées** de Git. Il est important de comprendre que Git est un outil puissant qui peut être utilisé de manière très flexible, mais il est également crucial de suivre certaines **règles** pour éviter les erreurs et garantir la qualité du code.

Par conséquent, ce guide considère que vous avez déjà une connaissance des concepts de base de Git (stages, status, commits, branches, etc.). Si ce n'est pas le cas, nous vous recommandons de lire le [guide de prise en main de Git](https://git-scm.com/book/fr/v2/) avant de continuer.

## Configuration

La [configuration de Git](https://git-scm.com/docs/git-config) est essentielle pour l'utiliser de manière efficace et professionnelle. Elle permet de personnaliser le comportement de Git, de configurer son identité, ses préférences, et d'assurer la sécurité des commits.

- **Liste des configurations**: `git config --list`
- **Fichier de configuration global**: `~/.gitconfig` (ou `%USERPROFILE%\.gitconfig` sous Windows)
- **Fichier de configuration local**: `.git/config` (dans le répertoire du projet)
- **Fichier de configuration système**: `/etc/gitconfig` (pour les configurations système, nécessite des droits d'administrateur)

Git interprète les configurations dans l'ordre suivant (du plus au moins prioritaire):

1. Paramètres de la ligne de commande (par exemple, `git commit --author="John Doe <foo@bar.com>"`)
2. Fichier de configuration du worktree (`$GIT_DIR/config.worktree`) (accessible via `git config --worktree`) (si le worktree est utilisé, accessible via `git config --worktree`)
3. Fichier de configuration local du projet (`.git/config`) (accessible via `git config --local`)
4. Fichier de configuration global de l'utilisateur (`~/.gitconfig`) (accessible via `git config --global`)
5. Fichier de configuration système (`/etc/gitconfig`) (accessible via `git config --system`)

### Configuration "profil"

Pour pouvoir effectuer des commits et des opérations Git, il est nécessaire de configurer son identité (nom et email).

- **Identité** (OBLIGATOIRE): `git config --global user.name "John Doe"`
- **Email** (OBLIGATOIRE): `git config --global user.email "example@email.com"`

### Configuration "préférences"

- **Éditeur de texte** (OPTIONNEL): `git config --global core.editor "vim"`
- **Navigateur web** (OPTIONNEL): `git config --global web.browser "firefox"`
- **Autocorrection des fautes de frappe** (OPTIONNEL): `git config --global help.autocorrect 1`
- **Couleur de l'interface** (OPTIONNEL): `git config --global color.ui auto`
- **Nom de branche par défaut** (OPTIONNEL): `git config --global init.defaultBranch main`
- **.gitignore global** (OPTIONNEL): `git config --global core.excludesfile ~/.gitignore`
- **Message de commit par défaut** (OPTIONNEL): `git config --global commit.template ~/.gitmessage.txt`
- **Alias de commandes** (OPTIONNEL): `git config --global alias.co checkout`

### Configuration "signature"

Afin de garantir de l'intégrité (et de l'auteur) des commits, il est possible de signer ses commits avec une clé GPG.

- **Signature des commits** (OPTIONNEL): `git config --global commit.gpgSign true`
- **Signature des tags** (OPTIONNEL): `git config --global tag.gpgSign true`
- **Clé GPG** (OPTIONNEL): `git config --global user.signingkey "GPG_KEY_ID"`

Cela permet notamment d'ajouter le badge "verified" lors de commits sur GitHub / GitLab (il faut penser à ajouter la clé GPG sur GitHub / GitLab).
![Verified GitHub Commit](https://docs.github.com/assets/cb-17614/mw-1440/images/help/commits/verified-commit.webp)

- [Guide Signature de commits GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- [Guide Signature de commits GitLab](https://docs.gitlab.com/user/project/repository/signed_commits/gpg/)

## Bonnes pratiques

Malgré le nombre important de conventions et de bonnes pratiques qui existent, certaines sont beaucoup plus adoptées que d'autres. Voici les plus importantes à suivre pour garantir la qualité du code et la lisibilité de l'historique git.

### Branches

En entreprise, il est obligatoire d'utiliser des branches pour gérer les modifications du code. Cela permet de modifier le code sans affecter la branche principale. Par principe, le code de la branche principale doit **toujours être fonctionnel** et **prêt à être déployé en production**.

Les branches permettent de travailler sur des fonctionnalités, des corrections de bugs, des améliorations, etc., sans affecter le code de la branche principale tant que le travail n'est pas terminé. Une fois le travail terminé, la branche peut être fusionnée (merge ou rebase) dans la branche principale.

#### Conventional Branches

La convention la plus répandue pour le nommage des branches est la [Conventional Branches](https://conventional-branch.github.io/). Elle permet de structurer les noms de branches de manière cohérente et lisible, facilitant ainsi la compréhension de l'historique des modifications et la gestion des branches.

Les noms de branches doivent être rédigés en utilisant des mots-clés qui indiquent le type de modification apportée, par exemple:

- `feat/<nom-de-la-fonctionnalité>`: pour une nouvelle fonctionnalité
- `bugfix/<nom-du-bug>`: pour la correction d'un bug
- `hotfix/<nom-du-hotfix>`: pour un correctif urgent
- `release/<version>`: pour la préparation d'une nouvelle version de release
- `chore/<tâche>`: pour une tâche qui n'affecte pas le code source (par exemple, mise à jour des dépendances, nettoyage du code, documentation, etc.)

Il y a quelques règles à respecter pour le nommage des branches:

- **Utiliser l'anglais**: Les noms de branches doivent être en anglais, même si le projet est en français. Cela permet de garantir la cohérence et la lisibilité des noms de branches, surtout si le projet est open source ou collaboratif.
- **Utiliser des caractères alphanumériques minuscule et des tirets**: Les noms de branches doivent être en minuscules et ne doivent contenir que des caractères alphanumériques et des tirets. Les espaces et les caractères spéciaux sont à éviter.
- **Pas de tirets consécutifs ni de tirets en début ou fin de nom**: Les noms de branches ne doivent pas contenir de tirets consécutifs ni de tirets en début ou en fin de nom. Par exemple, `feat/my-feature` est valide, mais `feat/my-feature-` et `feat/my--feature` ne le sont pas.
- **Clarté et concision**: Les noms de branches doivent être clairs et concis, en décrivant brièvement la modification apportée. Par exemple, `feat/user-authentication` est préférable à `feat/ajout-de-la-fonctionnalité-d'authentification-utilisateur`.
- **Référencer des tickets**: Si la branche est liée à un ticket, il est recommandé d'inclure le numéro du ticket dans le nom de la branche. Par exemple, `feat/123-user-authentication` pour une nouvelle fonctionnalité liée au ticket #123.

#### Branches de travail

Pour des petits projets, il est recommandé de merge / rebase les branches de développement dans la branche principale (par exemple `main`) une fois que le travail est terminé. Cela permet de garder l'historique git propre et lisible, et de ne pas avoir de branches inutiles qui polluent l'historique.

Pour des projets plus importants ou plus sensibles, il y a souvent des branches de travail / staging qui sont utilisées pour tester les modifications (par exemple une branche `develop`, `latest`, `staging`, `preprod`, etc.). Ces branches permettent de tester les modifications avant de les merger dans la branche principale. Elles sont souvent utilisées pour les tests automatisés, les tests manuels, et la validation des modifications avant de les déployer en production.
Les branches de feature, bugfix,... sont tirées de ces branches de travail, et sont ensuite fusionnées dans ces branches une fois le travail terminé. Quand le travail est terminé, la branche de travail est fusionnée dans la branche principale (par exemple `main`).

#### Rapatriement du code

Il existe plusieurs manières de rapatrier le code d'une branche dans une autre. Nous allons nous concentrer sur 3 méthodes principales: `merge`, `rebase`, et `cherry-pick`. Chacune a ses avantages et inconvénients, et le choix de la méthode dépend du contexte et des préférences de l'équipe.

##### Merge

<pre class="mermaid" style="background-color: transparent;">
gitGraph
  commit id: "ZERO-0"
  commit
  branch "feature/dashboard"
  commit
  checkout main
  branch "feature/user-authentication"
  commit id: "authentication"
  checkout main
  merge feature/user-authentication
  merge feature/dashboard
  commit
</pre>

La méthode `merge` permet de fusionner deux branches en créant un commit de fusion. Cela permet de conserver l'historique des modifications des deux branches et de créer un commit de fusion qui indique que les deux branches ont été fusionnées. On peut ainsi voir clairement l'historique des modifications et les branches qui ont été fusionnées.

##### Rebase

Le méthode `rebase` permet de réappliquer les commits d'une branche sur une autre branche. Cela permet de conserver un historique linéaire et de ne pas créer de commit de fusion. C'est une méthode souvent utilisée pour garder l'historique git propre et lisible, surtout pour les petites modifications.

<pre class="mermaid" style="background-color: transparent;">
gitGraph
  commit id: "ZERO-0"
  commit
  commit
  commit id: "authentication"
</pre>

Ainsi tout l'historique de la branche `feature/user-authentication` est réappliqué sur la branche `feature/dashboard` puis sur main, ce qui permet de conserver un historique linéaire et de ne pas créer de commit de fusion. Sur GitLab, cette fonctionnalité est appelée "Fast-forward merge" et permet de fusionner une branche sans créer de commit de fusion.

##### Cherry-pick

La méthode `cherry-pick` permet de sélectionner un ou plusieurs commits d'une branche et de les appliquer sur une autre branche. Cela permet de récupérer des modifications spécifiques sans fusionner l'ensemble de la branche. C'est une méthode souvent utilisée pour récupérer des correctifs ou des fonctionnalités spécifiques sans affecter l'ensemble de la branche.

<pre class="mermaid" style="background-color: transparent;">
gitGraph
  commit id: "ZERO-0"
  branch "feature/user-authentication"
  commit id: "authentication"
  checkout main
  branch "hotfix/0day"
  commit id: "fix-0day"
  checkout feature/user-authentication
  cherry-pick id: "fix-0day"
  checkout main
  merge feature/user-authentication
</pre>

### Commits

Par principe, en entreprise un commit sur la branche principale est immuable et ne doit pas être modifié. Il est donc important de bien rédiger les messages de commit et de s'assurer que le code est fonctionnel avant de faire un commit sur la branche principale.

#### Conventional Commits

La convention la plus répandue pour les messages de commit est la [Conventional Commits](https://www.conventionalcommits.org/). Elle permet de structurer les messages de commit de manière cohérente et lisible, facilitant ainsi la compréhension de l'historique des modifications.

Pour résumer la convention, les messages de commit doivent s'écrire de la manière suivante:

```plaintext
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

##### header

Le `header` est la première ligne du message de commit, qui doit être concise et informative. Il doit commencer par un `type` suivi d'un `scope` optionnel, puis d'une description courte et claire de la modification apportée. La description doit être rédigée à l'infinitif et ne pas dépasser 72 caractères. Si ce n'est pas assez, il est possible de continuer la description sur plusieurs lignes dans le `body`.

Le `type` est un mot-clé qui indique le type de modification apportée, par exemple:

- `feat`: ajout d'une nouvelle fonctionnalité
- `fix`: correction d'un bug
- `docs`: modification de la documentation
- `style`: modification du style du code qui n'affecte pas le comportement du code (espaces, formatage, etc.)
- `refactor`: modification du code qui n'ajoute pas de fonctionnalité ni ne corrige de bug
- `perf`: amélioration des performances du code
- `test`: ajout ou modification de tests
- `build`: modification des outils de build ou des dépendances
- `ci`: modification des scripts d'intégration continue
- `chore`: modification de tâches de maintenance qui n'affectent pas le code source
- `revert`: annulation d'un commit précédent

Le `scope` est optionnel et permet de préciser la portée de la modification, par exemple le nom du module ou du composant concerné. Par exemple, `feat(auth):` pour une nouvelle fonctionnalité dans le module d'authentification.

##### body

Le `body` est optionnel, doit être rédigé au temps présent et peut contenir des détails supplémentaires sur la modification, comme les raisons de la modification, les impacts, etc. Il doit être rédigé en utilisant des phrases complètes et claires. Il doit être séparé du header par une ligne vide.

##### footer

Le `footer` est également optionnel et peut contenir des informations supplémentaires, comme des références à des tickets, des issues, des pull requests, ou des notes de version. Il peut également contenir des informations sur les changements majeurs (breaking changes) qui nécessitent une attention particulière lors de la mise à jour du code.\
Il doit être séparé du body par une ligne vide.

Les références aux tickets peuvent être ajoutées en utilisant les mots-clés `Closes`, `Fixes`, `Refs`, `Resolves`, ou `See`, suivis du numéro du ticket. Cela permet de **fermer automatiquement** les tickets quand le commit se retrouve sur la default branch (par exemple, `Closes #123` fermera le ticket #123).

Il est recommandé de faire référence à un / des tickets dans le footer, afin de pouvoir suivre de manière agile l'évolution du projet et de l'historique des modifications.

Cette convention va de pair avec l'utilisation de la convention de versionnage sémantique [SemVer](https://semver.org/), qui permet de gérer les versions du logiciel en fonction des modifications apportées.

#### Atomiser les commits

Il est recommandé de faire des commits atomiques, c'est-à-dire de faire des commits qui ne contiennent qu'une seule modification logique. Cela permet de faciliter la compréhension de l'historique des modifications et de revenir en arrière plus facilement si nécessaire.
Un commit atomique doit être cohérent et ne pas contenir de modifications qui ne sont pas liées entre elles. Par exemple, si vous ajoutez une nouvelle fonctionnalité et corrigez un bug dans le même commit, cela rendra l'historique des modifications plus difficile à comprendre.

**Cela ne veut pas dire qu'il faut faire un commit par ligne de code modifiée**, mais plutôt que chaque commit doit être cohérent et contenir une seule modification logique.

### Tags

Les tags sont utilisés pour marquer des points spécifiques dans l'historique des commits, généralement pour indiquer des versions de release ou des jalons importants. Ils permettent de référencer facilement une version spécifique du code et de revenir à cette version si nécessaire.

#### SemVer

L'intégralité du dévelopmment logiciel mondial suit la convention de versionnage sémantique [SemVer](https://semver.org/). Cette convention permet de gérer les versions du logiciel en fonction des modifications apportées. Elle utilise trois nombres séparés par des points, par exemple `1.0.0`, où:

- Chaque nombre est un entier positif, qui ne doit pas être précédenté par des zéros (par exemple, `01.0.0` n'est pas valide).
- Le premier nombre (MAJOR) est incrémenté pour les **changements majeurs** qui introduisent des modifications **incompatibles** avec les versions précédentes.
- Le deuxième nombre (MINOR) est incrémenté pour les **ajouts de fonctionnalités** **compatibles** avec les versions précédentes.
- Le troisième nombre (PATCH) est incrémenté pour les **corrections de bugs** **compatibles** avec les versions précédentes.

Des suffixes optionnels peuvent être ajoutés pour indiquer des pré-releases ou des builds spécifiques, par exemple `1.0.0-alpha.1` ou `1.0.0+build.123`.

- Le `-` indique une pré-release, qui est une version instable ou incomplète du logiciel.
- Le `+` (et ce qui suit) correspond aux métadonnées de build, qui sont des informations supplémentaires sur la version, comme le numéro de build, la date de build, etc.

## Tips

Voici quelques astuces et fonctionnalités avancées de Git qui peuvent vous aider à travailler plus efficacement et à éviter les erreurs courantes. Ainsi vous pourrez tout faire en ligne de commande, et en local pour briller en entreprise.

### Stash

La commande `git stash` permet de sauvegarder temporairement les modifications en cours dans un "stash" (une pile de modifications) pour pouvoir revenir à un état propre du code. Cela est utile lorsque vous devez changer de branche ou effectuer une autre opération sans vouloir commettre les modifications en cours.
Pour utiliser `git stash`, il suffit de taper la commande `git stash`

Cela va sauvegarder les modifications en cours et revenir à l'état du dernier commit. Vous pouvez ensuite changer de branche ou effectuer d'autres opérations sans perdre vos modifications.\
Pour récupérer les modifications sauvegardées dans le stash, vous pouvez utiliser `git stash pop` ou `git stash apply` (la différence est que `pop` supprime le stash après l'avoir appliqué, tandis que `apply` le laisse dans la pile).

Cette commande est très utile pour éviter de faire des commits temporaires ou de devoir annuler des modifications non désirées.

### Fermer automatiquement une issue

Lorsque vous faites un commit qui corrige un bug ou ajoute une fonctionnalité liée à une issue, vous pouvez fermer automatiquement cette issue en utilisant des mots-clés spécifiques dans le message de commit. Par exemple, si vous faites un commit qui corrige l'issue #123, vous pouvez ajouter `Closes #123` ou `Fixes #123` dans le footer du message de commit. Cela fermera automatiquement l'issue lorsque le commit sera fusionné dans la branche principale.

### Rebase interactif

Le `git rebase -i` (rebase interactif) permet de modifier l'historique des commits en réécrivant les commits existants. Cela est utile pour nettoyer l'historique des commits, par exemple en fusionnant plusieurs commits en un seul, en modifiant les messages de commit, ou en supprimant des commits inutiles.
Pour utiliser le rebase interactif, il suffit de taper la commande `git rebase -i HEAD~n`, où `n` est le nombre de commits à réécrire. Cela ouvrira un éditeur de texte avec la liste des commits à réécrire, où vous pourrez choisir les actions à effectuer sur chaque commit (par exemple, `pick`, `squash`, `edit`, `drop`, etc.).\
Ensuite, vous utiliserez votre éditeur de texte favori pour modifier les commits, puis vous enregistrerez et quitterez l'éditeur pour appliquer les modifications.

### Squash

Le `git squash` permet de combiner plusieurs commits en un seul commit. Cela est utile pour nettoyer l'historique des commits avant de fusionner une branche dans la branche principale, en regroupant les modifications liées à une fonctionnalité ou à un bug en un seul commit.

Pour utiliser le squash, vous pouvez utiliser la commande `git rebase -i HEAD~n`, où `n` est le nombre de commits à combiner. Cela ouvrira un éditeur de texte avec la liste des commits, où vous pourrez choisir l'action `squash`(`s`) pour les commits que vous souhaitez combiner.

C'est une pratique courante de faire un squash avant de fusionner une branche dans la branche principale, afin de garder l'historique des commits propre et lisible. Cela permet de regrouper les modifications liées à une fonctionnalité ou à un bug en un seul commit, ce qui facilite la compréhension de l'historique des modifications.

### Alias

Les alias de commandes permettent de créer des raccourcis pour les commandes Git couramment utilisées. Cela permet de gagner du temps et de simplifier l'utilisation de Git en évitant de taper des commandes longues ou complexes.

Pour créer un alias, vous pouvez utiliser la commande `git config --global alias.<nom> <commande>`. Par exemple, pour créer un alias `cap` pour commit toutes les modifications actuelles, vous pouvez utiliser la commande suivante:

```bash
# Commit toutes les modifications actuelles et push
git config --global alias.cap '!git add . && git commit && git push'
```

Vous pouvez ensuite utiliser l'alias `git cap` pour exécuter la commande complète.

## Fichiers spécifiques

Il existe plusieurs fichiers spécifiques à Git qui sont utilisés pour configurer le comportement de Git, stocker des informations sur le repository, et gérer les contributions. Voici une liste des fichiers les plus courants et leur utilisation:

### CONTRIBUTING.md

Le fichier `CONTRIBUTING.md` est un fichier de documentation qui décrit les règles et les bonnes pratiques à suivre pour contribuer à un projet. Il est généralement situé à la racine du repository et est utilisé pour guider les contributeurs sur la manière de soumettre des modifications, de signaler des problèmes, de rédiger des messages de commit, etc.
Il peut contenir des sections sur la configuration de l'environnement de développement, les tests, le style de code, les conventions de nommage, les processus de revue de code, etc. Ce fichier est essentiel pour garantir la cohérence et la qualité des contributions au projet.

### .gitignore

Le fichier `.gitignore` permet d'ignorer certains fichiers ou répertoires lors des opérations de suivi des modifications. Il est utile pour exclure des fichiers temporaires, des fichiers de configuration locaux, des fichiers de build, des fichiers sensibles, etc. **C'est un fichier qu'il est impératif de maîtriser en entreprise**, car il permet de ne pas polluer le repository.

Pour créer un fichier `.gitignore`, il suffit de créer un fichier nommé `.gitignore` à la racine du repository et d'y ajouter les fichiers ou répertoires à ignorer, un par ligne. Les règles de syntaxe permettent d'utiliser des wildcards (*) pour spécifier des motifs de fichiers à ignorer.\
Pour spécifier un directory entier, il suffit de mettre le nom du directory suivi d'un `/`.

Exemple de contenu d'un fichier `.gitignore`:

```plaintext
# IDE
.vscode
.vs
.idea
.idea/
*.iml
.idea_modules
*.ipr
*.iws
*.bak
*.swp
*.swo
*.swn
*.suo
*.workspace

# Compile output
dist/
build/

# Node.js
node_modules/
npm-debug.log
yarn-error.log
yarn-debug.log*
yarn.lock

# Python
__pycache__/
*.pyc
.env/
.venv/
venv/
env/

# Mac
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Keys
*.key
*.pem
*.p12
*.pfx
*.crt
*.csr
*.cer
*.jks
*.pub
*.env

# SonarQube
sonar-project.properties
.scannerwork/

# Logs
*.log
logs/
*.log.*

# Temporary files
*.tmp
*.temp
*.bak
*.swp
*.swo
*.swn
*.suo
*.workspace
*.pid
*.seed
*.pid.lock
*.pid.lock.*
```

### .gitmessage.txt

Le fichier `.gitmessage.txt` est un modèle de message de commit qui peut être utilisé pour standardiser les messages de commit dans un projet. Il est généralement utilisé pour fournir une structure et des instructions sur la façon de rédiger des messages de commit clairs et informatifs.

Il peut contenir des sections pour le titre, la description, les références aux tickets, les auteurs, etc. Ce fichier est utilisé comme modèle lors de la rédaction de messages de commit, ce qui permet de garantir une cohérence dans les messages de commit.

Exemple de contenu d'un fichier `.gitmessage.txt`:

```plaintext
<type>(<scope>): <description> (<=72 chars)

# comment

# BREAKING CHANGE: break
# Closes #EXAMPLE
# Fixes #EXAMPLE
# Refs #EXAMPLE
# Resolves #EXAMPLE
# See #EXAMPLE
```

### .git/

Le répertoire `.git/` est le répertoire caché qui contient l'ensemble des fichiers et répertoires nécessaires au fonctionnement de Git dans un repository. Il stocke les métadonnées, l'historique des commits, les branches, les tags, les configurations, les hooks, etc.

Il est généralement situé à la racine du repository et ne doit pas être modifié manuellement, sauf si vous savez ce que vous faites. Il est essentiel au fonctionnement de Git et permet de conserver l'historique des modifications et les informations nécessaires à la gestion de versions.

### .gitconfig

Le fichier `.gitconfig` est un fichier de configuration global de Git qui stocke les paramètres de configuration spécifiques à l'utilisateur. Il est généralement situé dans le répertoire utilisateur (`~/.gitconfig` == `$HOME/.gitconfig`) et peut contenir des configurations telles que le nom d'utilisateur, l'adresse e-mail, les alias de commandes, les couleurs de l'interface, etc.
