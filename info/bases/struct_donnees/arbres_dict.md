---
layout: layout/cours.njk

title: "Structures de données - Arbres & Dictionnaires"
date: 2025-01-22
tags: ["structures de données", "algorithmique", "informatique", "arbre", "dictionnaire"]
authors: ["Pascal Prea","Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

## Arbre

Un arbre est une structure de données qui permet de stocker des données et d'effectuer des opérations dessus.\
Un arbre est composé de **noeuds** reliés entre eux par des **arêtes**.\
Généralement on représente un arbre par un **schéma** qui montre les relations entre les noeuds.

Un arbre possède une **racine** qui est le noeud de départ de l'arbre.\
Chaque noeud peut avoir un nombre **variable** de fils.\
Un noeud sans fils est appelé **feuille**.

### Arbre binaire

Dans notre cas, nous ne considérerons que les arbres binaires.\
Un arbre binaire est un arbre dont chaque noeud possède **au plus** deux fils.

Dans notre notation d'un arbre binaire, nous considérerons que chaque noeud possède un **sous-arbre gauche** et un **sous-arbre droit**.\
Le sous-arbre gauche contient les noeuds dont la valeur est **inférieure** à celle du noeud courant.\
Le sous-arbre droit contient les noeuds dont la valeur est **supérieure** à celle du noeud courant.

L'arbre binaire est **récursif**.\
Chaque sous-arbre est lui-même un arbre binaire.

Un arbre est représenté par un pointeur vers sa racine.

#### Implémentation

```c
// Définition de la structure d'un noeud
typedef struct Noeud {
    int value;
    struct Noeud *gauche;
    struct Noeud *droite;
} Noeud;

// Définition de la structure d'un arbre
typedef struct Arbre {
    Noeud *racine;
} Arbre;
```

```c
Arbre *creerArbre() {
    Arbre *arbre = (Arbre *)malloc(sizeof(Arbre));
    arbre->racine = (Noeud *)malloc(sizeof(Noeud));
    arbre->racine->value = 0;
    arbre->racine->gauche = NULL;
    arbre->racine->droite = NULL;
    return arbre;
}

Noeud *recherche(Noeud *racine, int valeur) {
  Noeud *explorateur = racine;
  if (racine != NULL) {
    while (explorateur != NULL && valeur != explorateur->valeur) {
      if (valeur < explorateur->valeur) {
        explorateur = explorateur->gauche;
      } else {
        explorateur = explorateur->droite;
      }
    }
  }
  return explorateur
}

void insertion(Noeud *racine, int valeur) {
  Noeud *explorateur = racine;
  Noeud *explorateur_next = NULL;

}
```

## Dictionnaire

Un dictionnaire est une structure de données qui permet de stocker des données et d'effectuer des opérations dessus.\

Les opérations courantes sur un dictionnaire sont:
- **Recherche** d'une valeur
- **Insertion** d'une valeur
- **Suppression** d'une valeur
- **La taille** du dictionnaire
- **Création** d'un dictionnaire vide
