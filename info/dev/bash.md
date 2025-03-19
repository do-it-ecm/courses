---
layout: layout/cours.njk

title: "Bash"
date: 2024-10-23
tags: ["informatique", "développement", "bash", "scripting"]
authors: ["Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [Bash](https://fr.wikipedia.org/wiki/Bourne-Again_shell)
- [Exercism: Bash](https://exercism.org/tracks/bash)
- [ShellCheck](https://www.shellcheck.net/)
{% endlien %}

## Introduction

Le **Bourne-Again Shell** (Bash) est un interpréteur de commandes qui permet d'exécuter des scripts shell.\
Il est le shell par défaut sur la plupart des systèmes Unix et Linux.

Ce langage de script est très utilisé pour **automatiser** des tâches, car il permet de manipuler des **fichiers**, des **processus**, des **variables** et d'effectuer des **opérations logiques** et **arithmétiques**. De plus, il est très **extensible** et permet d'utiliser des **commandes système**.

Il s'agit d'un langage **interprété** et **non typé**. Il est **orienté ligne de commande** et **procédural**.

## Variables

### Définition

Les variables en Bash sont déclarées sans type. *Elles ont en réalité un type unique, qui est une chaîne de caractères*.\
Elles sont définies par une affectation de la forme `nom_variable=valeur`. *Il ne doit pas y avoir d'espace avant ou après le signe `=`*.\
Pour supprimer une variable, on utilise la commande `unset nom_variable`.

Par convention, les **noms de variables sont en majuscules**, *mais ce n'est pas une obligation*.

```bash
# Déclaration d'une variable
point_faible="trop fort"

# Suppression d'une variable
unset point_faible
```

### Utilisation

Pour accéder à la valeur d'une variable, on utilise le signe `$` suivi du nom de la variable.\
Une bonne pratique est d'entourer le nom de la variable d'accolades `{}` pour éviter les ambiguïtés.\
Une autre bonne pratique est d'entourer le nom de la variable de guillemets `""` pour éviter les problèmes de résolution de variables avec espace(s).

{% attention %}
Les simples quotes `'` permettent de définir une chaîne de caractères MAIS **ne permettent pas de résoudre les variables**.
{% endattention %}

```bash
# La commande echo affiche la valeur de la variable
echo $point_faible

# Utilisation des accolades
echo ${point_faible}

# Utilisation des guillemets pour éviter les problèmes d'espaces
echo "$point_faible"

# Combinaison des deux bonnes pratiques (on est sur de ne pas avoir de problème)
echo "${point_faible}"
```

### Vérifier l'existence d'une variable

Pour vérifier si une variable est définie, on utilise simplement un test sur la variable.\
On utilise les opérateurs `-v` pour vérifier si la variable est définie, `-z` pour vérifier si la variable est vide, `-n` pour vérifier si la variable est non vide.

```bash
# vérifier si la variable est définie
if [ -v point_faible ]; then
    echo "La variable est définie"
fi

# vérifier si la variable n'est pas définie
if [ ! -v point_faible ]; then
    echo "La variable n'est pas définie"
fi

# vérifier si la variable n'est pas définie ou est vide
if [ -z "${point_faible}" ]; then
    echo "La variable est vide"
fi

# vérifier si la variable est définie et n'est pas vide
if [ -n "${point_faible}" ]; then
    echo "La variable existe et n'est pas vide"
fi
```

### Variables spéciales

Il existe des variables spéciales qui sont automatiquement définies par le shell. *Elles ne peuvent pas être modifiées* manuellement.\
Voici quelques exemples :
| Variable | Description |
|----------|-------------|
| `$0` | Nom du script |
| `$1`, `$2`, ... | Paramètres passés au script |
| `$#` | Nombre de paramètres passés au script |
| `$?` | Code de retour de la dernière commande exécutée (0 si succès, autre valeur sinon) |
| `$@` | Liste des paramètres passés au script |
| `$*` | Liste des paramètres passés au script |
| `$-` | Options du shell |
| `$_` | Dernier argument du dernier processus lancé |
| `$$` | PID du script |
| `$!` | PID du dernier processus lancé en arrière-plan |
```bash

```bash
# Affiche le nom du script
echo $0

# Affiche le premier paramètre passé au script
echo $1

# Affiche le nombre de paramètres passés au script
echo $#

# Affiche le code de retour de la dernière commande exécutée
echo $?
```

### Variables locales / environnement

Les variables en Bash peuvent être **locales** ou **globales**.\
- Une variable **locale** est définie dans un script et n'est accessible que dans ce script.
- Une variable **globale** est définie dans l'environnement du shell et est accessible par tous les scripts.

Pour définir une variable **globale**, on utilise la commande `export nom_variable=valeur`.\
Pour définir une variable **locale**, on utilise simplement une affectation `nom_variable=valeur`.

```bash
# Déclaration d'une variable globale
export point_faible="trop fort"

# Déclaration d'une variable locale
point_faible="trop fort"
```

## Opérations logiques / arithmétiques

### Syntaxe

La syntaxe des tests conditionnels en Bash est simple:
- `test` est une commande qui permet de tester des conditions (renvoie 0 si vrai, 1 sinon)
- `[`CONDITION(s)`]` est un alias de la commande `test`
- `[[`CONDITION(s)`]]` est une version améliorée de `[]` qui permet de faire des tests plus complexes (**généralement le signe `[[]]` est préféré**)

### Opérateurs de test

Voici quelques opérateurs de test courants:
| Description | Syntaxe [ ] | Syntaxe [[ ]] |
|-------------|--------------|---------------|
| Test d'égalité | `-eq` | `==` |
| Test de non égalité | `-ne` | `!=` |
| Test d'infériorité | `-lt` | `<` |
| Test d'infériorité ou égalité | `-le` | `<=` |
| Test de supériorité | `-gt` | `>` |
| Test de supériorité ou égalité | `-ge` | `>=` |
| Test de chaîne vide | `-z` | `== ""` |
| Test de chaîne non vide | `-n` | `!= ""` |
| Test d'existence d'un chemin | `-e` | `-e` |
| Test de fichier | `-f` | `-f` |
| Test de répertoire | `-d` | `-d` |
| Test de lecture | `-r` | `-r` |
| Test d'écriture | `-w` | `-w` |
| Test d'exécution | `-x` | `-x` |
| ET logique | `-a` | `&&` |
| OU logique | `-o` | `||` |
| NON logique | `!` | `!` |
| OU exclusif | `^` | `^` |

```bash
# Test d'égalité
test 1 -eq 1
[ 1 -eq 1 ]
[[ 1 -eq 1 ]]

# Test de variable vide
test -z ""
[ -z "" ]
[[ -z "" ]]

# Test de fichier
test -f fichier.txt
[ -f fichier.txt ]
[[ -f fichier.txt ]]

# test de ET logique
test 1 -eq 1 -a 2 -eq 2
[ 1 -eq 1 -a 2 -eq 2 ]
[[ 1 -eq 1 && 2 -eq 2 ]]
```

### Syntaxe if/elif/else

On peut ensuite utiliser des instructions conditionnelles comme `if`, `elif`, `else`, `fi` pour exécuter des blocs de code en fonction des résultats des tests.
- Un `if`/`elif` est suivi d'une condition (Une condition est une expression qui renvoie 0 si elle est vraie, et 1 sinon)
- Un `if` peut être suivi d'un `elif` ou d'un `else`.
- Un `then` est utilisé pour indiquer le début du bloc de code à exécuter si la condition est vraie. Il vient après la condition `if`/`elif`.
- Un `fi` est utilisé pour indiquer la fin du bloc `if`.
- Les blocs de code peuvent être sur plusieurs lignes.
- On peut combiner plusieurs conditions avec les opérateurs logiques `&&` (ET) et `||` (OU). *uniquement avec `[[ ]]`*.

```bash
# Test d'égalité simple
if [[ "${point_faible}" == "trop fort" ]]; then
    echo "Vous êtes trop fort"
fi

# Test d'égalité avec else
if [[ "${point_faible}" == "trop fort" ]]; then
    echo "Vous êtes trop fort"
else
    echo "Vous n'êtes pas trop fort"
fi

# Test d'égalité avec elif
if [[ "${point_faible}" == "trop fort" ]]; then
    echo "Vous êtes trop fort"
elif [[ "${point_faible}" == "trop faible" ]]; then
    echo "Vous êtes trop faible"
else
    echo "Je ne m'attendais pas à ça"
fi
```

### Opérations arithmétiques

Pour effectuer des opérations arithmétiques en Bash, on utilise l'expansion arithmétique `(( ))`.\
On peut utiliser les opérateurs arithmétiques classiques (`+`, `-`, `*`, `/`, `%`, `**`) et les opérateurs de comparaison (`<`, `<=`, `>`, `>=`, `==`, `!=`).

Il est possible d'utiliser des variables dans les opérations arithmétiques.\
Il est possible de combiner plusieurs opérations arithmétiques dans une même expression.

{% attention %}
- Les opérateurs de comparaison ne sont **pas les mêmes** que ceux utilisés dans les tests conditionnels.
- Les opérations ne s'effectuent **qu'entre des nombres entiers** et renvoient **toujours un nombre entier**.
{% endattention %}

```bash
# Addition
echo $((1 + 1))

# Comparaison
if ((1 < 2)); then
    echo "1 est inférieur à 2"
fi
```

## Redirections

Les redirections en Bash permettent de rediriger la sortie standard, la sortie d'erreur et l'entrée standard d'une commande.\
Il existe plusieurs types de redirections:
| Symbole | Description |
|---------|-------------|
| `>` ou `1>` | Redirige la sortie standard vers un fichier (écrase le fichier s'il existe) |
| `>>` ou `1>>` | Redirige la sortie standard vers un fichier (ajoute à la fin du fichier s'il existe) |
| `2>` | Redirige la sortie d'erreur vers un fichier |
| `2>>` | Redirige la sortie d'erreur vers un fichier (ajoute à la fin du fichier s'il existe) |
| `&>` ou `1>&2` | Redirige la sortie standard et la sortie d'erreur vers un fichier |
| `&>>` ou `1>>&2` | Redirige la sortie standard et la sortie d'erreur vers un fichier (ajoute à la fin du fichier s'il existe) |
| `<` ou `0<` | Redirige l'entrée standard depuis un fichier |
| `<<` ou `0<<` | Redirige l'entrée standard depuis un texte |
| `|` | Redirige la sortie standard d'une commande vers l'entrée standard d'une autre commande |

```bash
# Redirection de la sortie standard
echo "Hello" > fichier.txt

# Redirection de la sortie standard (ajout)
echo "World" >> fichier.txt

# Redirection de la sortie d'erreur
echo "Erreur" 2> erreur.txt

# Redirection de la sortie standard et de la sortie d'erreur
echo "Hello" &> fichier.txt

# Redirection de l'entrée standard
cat < fichier.txt

# Redirection de la sortie standard d'une commande vers l'entrée standard d'une autre commande
cat fichier.txt | grep "Hello"
```

## Boucles

### Arrays

Les tableaux en Bash sont des variables qui peuvent contenir plusieurs valeurs.\
Ils sont déclarés par une affectation de la forme `nom_tableau=(valeur1 valeur2 ...)`.
- Pour accéder à une valeur du tableau, on utilise l'indice de la valeur entre crochets `[]`.
- Pour accéder à toutes les valeurs du tableau, on utilise l'opérateur `*` ou `@`.
- Pour accéder à la taille du tableau, on utilise l'opérateur `#`.
- Pour ajouter une valeur à la fin du tableau, on utilise l'opérateur `+=`.
- Pour supprimer une valeur du tableau, on utilise l'opérateur `unset`

```bash
{% raw %}
# Déclaration d'un tableau
nombres=(un deux trois quatre cinq)

# Accès à une valeur du tableau
echo ${nombres[0]} # affiche "un"

# Accès à toutes les valeurs du tableau
echo ${nombres[*]} # affiche "un deux trois quatre cinq"

# Affiche la taille du tableau
echo ${#nombres[@]} # affiche "5"

# Ajout d'une valeur à la fin du tableau
nombres+=(six)

# Suppression d'une valeur du tableau
unset nombres[0]

# Tester si une valeur est dans le tableau
if [[ " ${nombres[*]} " == *" trois "* ]]; then
    echo "La valeur trois est dans le tableau"
fi

# Tester si une valeur n'est pas dans le tableau
if [[ " ${nombres[*]} " != *" sept "* ]]; then
    echo "La valeur sept n'est pas dans le tableau"
fi

#Tester si le tableau est vide
if [[ ${#nombres[@]} -eq 0 ]]; then
    echo "Le tableau est vide"
fi
{% endraw %}
```

### Boucle for

La boucle `for` permet de répéter un bloc de code pour chaque élément d'un tableau.\
La syntaxe est `for element in tableau; do ...; done`.

```bash
{% raw %}
# Boucle for
for element in "${nombres[@]}"; do
    echo ${element}
done

# Boucle for avec index
for ((i=0; i<${#nombres[@]}; i++)); do
    echo ${nombres[$i]}
done
```

### Boucle while

La boucle `while` permet de répéter un bloc de code tant qu'une condition est vraie.\
La syntaxe est `while condition; do ...; done`.

```bash
# Boucle while
i=0
while [[ $i -lt ${#nombres[@]} ]]; do
    echo ${nombres[$i]}
    ((i++))
done
{% endraw %}
```

### Boucle until

La boucle `until` permet de répéter un bloc de code tant qu'une condition est fausse.\
La syntaxe est `until condition; do ...; done`.

```bash
{% raw %}
# Boucle until
i=0
until [[ $i -ge ${#nombres[@]} ]]; do
    echo ${nombres[$i]}
    ((i++))
done
{% endraw %}
```

## Fonctions

Les fonctions en Bash sont déclarées par une affectation de la forme `nom_fonction() { ... }`.\
Pour appeler une fonction, on utilise simplement son nom *sans parenthèses cette fois*.

On peut passer des paramètres à une fonction en les passant directement après le nom de la fonction.\
Pour accéder aux paramètres passés à une fonction, on utilise les variables `$1`, `$2`, ...\
Pour accéder à tous les paramètres passés à une fonction, on utilise l'opérateur `$@`.

Les fonctions peuvent retourner une valeur en utilisant la commande `return`.

{% attention %}
- La valeur de retour d'une fonction est un **nombre entier** compris entre 0 et 255.
- Il est stocké dans la variable `$?`.
- La valeur de retour par défaut d'une fonction est 0 si la commande `return` n'est pas utilisée.
- La valeur de retour est supposée être un code d'erreur, pas une véritable valeur de retour.
{% endattention %}

- Pour retourner une (ou plusieurs) valeur(s), on utilise la sortie standard de la fonction (avec `echo` par exemple).
- Pour récupérer la sortie standard d'une fonction, on utilise la syntaxe `$(nom_fonction)`.
- Pour récupérer la sortie standard d'une fonction dans une variable, on utilise la syntaxe `variable=$(nom_fonction)`.

```bash
# Déclaration d'une fonction
function dire_bonjour() {
    echo "Bonjour"
    return 0 # optionnel
}

# Appel de la fonction
dire_bonjour

# Déclaration d'une fonction avec paramètres
function dire_bonjour_a() {
    if [[ $# -neq 1 ]]; then
        echo "Usage: dire_bonjour_a nom"
        return 1
    fi
    echo "Bonjour $1"
    return 0 # optionnel
}

# Appel de la fonction avec paramètres
dire_bonjour_a "John Doe"

# Stockage de la sortie standard d'une fonction dans une variable
message=$(dire_bonjour_a "John Doe")
echo $message # affiche "Bonjour John Doe"
```

## Exercices

{% note "<b>Bonnes pratiques</b>" %}
- **Lint**: Utiliser un linter tel que [ShellCheck](https://www.shellcheck.net/) pour vérifier la syntaxe du code.
- **Indentation**: Indenter le code pour le rendre plus lisible.
- **Commentaires**: Ajouter des commentaires pour expliquer le code.
- **Noms de variables**: Utiliser des noms de variables explicites.
- **Guillemets**: Utiliser des guillemets pour éviter les problèmes d'espaces.
{% endnote %}

Pour aller plus loin dans la pratique de Bash, vous pouvez vous exercer sur le track [Exercism: Bash](https://exercism.org/tracks/bash).
