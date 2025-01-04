---
layout: layout/cours.njk

title: "Java"
date: 2024-12-12
tags: ["informatique", "développement", "java", "pattern", "design"]
authors: ["Loïck Goupil-Hallay", "Julien Candela"]
---

{% lien "**Liens utiles**" %}
- [Java](https://www.java.com/)
- [Exercism: Java](https://exercism.org/tracks/java)
{% endlien %}

```java
public class App {
    public static void main( String[] args ) {
        System.out.println( "Hello World!" );
    }
}
```

## Introduction

<pre class="mermaid" style="background-color: transparent;">
graph LR
    A[<b><big>Code java</big></b><br><small>*.java</small>] -- Compilation --> B[<b><big>Bytecode</big></b><br><small>*.class</small>]
    B -- Interprétation --> C[<b><big>JVM</big></b><br><small>JRE</small>]
    C -- Exécution --> D[<b><big>Résultat</big></b>]
</pre>

Java est un langage de **programmation orienté objet** créé par Sun Microsystems en 1995. Il s'agit d'un langage très populaire en entreprise, notamment pour le développement d'applications web et mobiles.

Le code Java est **compilé** en bytecode, qui est ensuite interprété par la **machine virtuelle Java** (JVM) qui se charge d'exécuter le programme.

### Paradigmes de programmation
- `Programmation orientée objet`: Java est un langage de **programmation orienté objet**. Il repose sur les concepts de classe, d'objet, d'encapsulation, d'héritage et de polymorphisme.
- `Programmation impérative`: Java est un **langage impératif**, ce qui signifie que les programmes Java sont composés d'instructions qui décrivent comment les tâches doivent être effectuées.
- `Programmation structurée`: Java prend en charge la **programmation structurée**, qui consiste à diviser un programme en blocs de code logiques et structurés.
- `Programmation fonctionnelle`: Java prend également en charge la **programmation fonctionnelle**, qui consiste à traiter les fonctions comme des objets de première classe.
- `Programmation générique`: Java prend en charge la **programmation générique**, qui permet de créer des classes et des méthodes qui peuvent fonctionner avec différents types de données.

### Points forts
- `Portable`: Les programmes Java sont portables, ce qui signifie qu'ils peuvent être exécutés sur **n'importe quelle plateforme** qui prend en charge la machine virtuelle Java. (Contrairement au C++ par exemple, qui doit être recompilé pour chaque plateforme)
- `Garbage Collector`: Java dispose d'un garbage collector qui **gère automatiquement la mémoire**, ce qui permet d'éviter les fuites de mémoire et les erreurs de segmentation.
- `Type-safe`: Java est un langage de programmation **fortement typé**, ce qui signifie que les types des variables doivent être déclarés explicitement et que les conversions de type sont vérifiées à la compilation.
- `Versatile`: Java est un langage polyvalent qui peut être utilisé pour développer une grande variété d'applications, y compris des applications web, des applications mobiles, des applications de bureau et des applications d'entreprise.
- `Communauté`: Java dispose d'une vaste **communauté de développeurs et de bibliothèques open source** qui facilitent le développement d'applications Java.
- `Performance`: Java est un langage **performant** qui prend en charge la compilation juste-à-temps (JIT) et d'autres optimisations qui améliorent les performances des applications Java.
- `Évolutif`: Java est un langage évolutif qui prend en charge les interfaces, les classes abstraites et d'autres fonctionnalités qui facilitent la création de programmes modulaires et évolutifs.
- `Multi-threading`: Java prend en charge le multi-threading, ce qui permet aux programmes Java d'exécuter **plusieurs tâches simultanément**.
- `Polymorphisme`: Java prend en charge le polymorphisme, qui permet à une classe de se comporter comme une autre classe. Cela permet d'utiliser des concepts tels que l'héritage et l'interface pour créer des programmes flexibles et évolutifs.

### Challenges
- `Complexité`: Java est un langage complexe qui peut être difficile à apprendre pour les débutants,  en particulier en raison de sa syntaxe verbeuse et de ses nombreuses fonctionnalités.
- `Ressources`: Java nécessite une machine virtuelle Java (JVM) pour exécuter les programmes Java, ce qui peut entraîner des problèmes de compatibilité et de performances. La JVM consomme également des ressources système, ce qui peut affecter les performances des applications Java.
- `Performance`: Java est un langage performant, mais il peut être moins performant que d'autres langages de programmation non interprétés, comme le C et le C++, en raison de la surcharge de la machine virtuelle Java et de la gestion automatique de la mémoire.
- `Sécurité`: Java est un langage sécurisé, mais il peut être vulnérable à certaines attaques, comme les attaques par injection de code et les attaques par débordement de tampon. Il est important de prendre des mesures de sécurité pour protéger les applications Java contre ces attaques.
- `Legacy Code`: Java est un langage ancien qui peut être confronté à des problèmes de compatibilité et de maintenance lors de l'utilisation de bibliothèques et de frameworks Java plus anciens. C'est un véritable problème pour les entreprises qui restent parfois sur des versions obsolètes de Java.

## Débuter

## Utilitaires de Build
Afin d'accélérer et d'automatiser le développement, l'analyse de code, le build, le test et le déploiement.\
Ces outils sont très utiles pour les projets de grande envergure, ils permettent de gagner du temps, de l'uniformité, de la répétabilité et de la qualité en automatisant les tâches répétitives, telles que la compilation, les tests, la génération de documentation, l'utilisation de librairies externes, etc.

### Gradle
Gradle est un outil de **build automation** qui permet de gérer les dépendances, de compiler le code, de générer des rapports, de créer des packages et de déployer des applications Java.\
Gradle utilise un fichier de configuration appelé `build.gradle` pour définir les dépendances, les tâches et les plugins du projet.

#### Utilisation
Voici un petit exemple d'utilisation de Gradle pour compiler notre HelloWorld en Java

```bash
# Installation de Gradle (sur Ubuntu)
sudo apt install gradle

# Création d'un projet Gradle
mkdir helloworld
cd helloworld

gradle init --type java-application

# Compilation du projet
gradle build

# Exécution du projet via JVM
gradle run
```

### Autres outils
- `Maven`: Maven est un outil de **gestion de projet** qui permet de gérer les dépendances, de compiler le code, de générer des rapports, de créer des packages et de déployer des applications Java. Maven utilise un fichier de configuration appelé `pom.xml` pour définir les dépendances, les tâches et les plugins du projet.
- `Ant`: Ant est un outil de **build automation** qui permet de compiler le code, de générer des rapports, de créer des packages et de déployer des applications Java. Ant utilise un fichier de configuration appelé `build.xml` pour définir les tâches et les cibles du projet.
- `Jenkins`: Jenkins est un outil de **build automation** qui permet d'automatiser les tâches de build, de test et de déploiement des applications Java. Jenkins peut être intégré à des outils de gestion de versions comme Git pour automatiser le processus de build et de déploiement des applications Java.

## Frameworks
Les frameworks Java sont des bibliothèques de code qui fournissent des fonctionnalités et des composants prêts à l'emploi pour le développement d'applications Java.\
Les frameworks Java permettent de gagner du temps, de réduire la complexité, d'améliorer la qualité et de faciliter la maintenance des applications Java.

### Spring
Spring est un **framework Java** qui fournit une architecture légère et complète pour le développement d'applications Java.\
Spring prend en charge l'inversion de contrôle (IoC), la programmation orientée aspect (AOP), la gestion des transactions, la sécurité, la persistance des données, le développement web, le développement mobile et d'autres fonctionnalités.
