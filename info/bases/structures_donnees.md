---
layout: layout/cours.njk

title: "Structures de données"
date: 2025-01-15
tags: ["structures de données", "algorithmique", "informatique"]
authors: ["Pascal Prea","Loïck Goupil-Hallay"]
---

## Pointeurs

Les pointeurs sont des variables qui contiennent l'adresse d'une autre variable (dans la mémoire). Ils permettent de manipuler des données sans les copier. Il s'agit d'un concept fondamental en programmation **bas niveau**

### Intérêt

1. L'intérêt premier des pointeurs est de pouvoir manipuler des objets potentiellement complexes en **économisant de la mémoire**.
2. Un pointeur permet de **modifier une variable** en dehors de la fonction qui l'a créée. (Au lieu de modifier une copie de la variable)

### Pointeur nul

Il existe un pointeur spécial appelé **pointeur nul** qui ne pointe sur aucune adresse mémoire. Généralement il se nomme `nil`, `null`, `nullptr`, `None`, `NULL` ou bien d'autres valeurs selon le langage de programmation.

### Opérateur new

L'opérateur `new` permet de réserver de la mémoire pour une variable (créer la variable) et de retourner l'adresse mémoire de cette variable. Il est utiliser pour créer un pointeur ainsi que sa variable associée dynamiquement.

### Affectation

L'affectation d'un pointeur se fait en lui donnant l'adresse de la variable à laquelle il doit pointer. L'opérateur `&` permet généralement de récupérer l'adresse d'une variable.

Il est possible de libérer la mémoire d'un pointeur avec un opérateur `delete` ou `free` selon le langage de programmation. Ainsi on peut réaffecter un pointeur à une autre adresse mémoire. Et surtout éviter les **fuites de mémoire**.

## Structure de données

Une structure de données est une manière d'**organiser et de stocker** des données dans un ordinateur pour qu'elles puissent être utilisées efficacement.\
Il s'agit d'un concept fondamental en informatique et en algorithmique. Les structures de données obéissent à des **règles précises** pour garantir une utilisation optimale des ressources. Il est nécessaire d'avoir une approche **mathématique** pour comprendre les structures de données.
Il existe de nombreuses structures de données qui sont adaptées à des usages spécifiques.

## Liste chaînée

Une liste chaînée est une structure de données qui permet de stocker une séquence d'éléments. Chaque élément est stocké dans un **nœud** qui contient une (ou plusieurs) donnée et un pointeur vers le nœud suivant.\
Généralement une liste chaînée est représentée par son premier nœud qui est appelé **head** (tête).

```c
// Définition d'un nœud
typedef struct Node {
    int data;
    struct Node *suivant;
} Node;

// Fonction de création d'un nœud
Node* creerNode(int data) {
    Node *n = (Node*)malloc(sizeof(Node));
    n->data = data;
    n->suivant = NULL;
    return n;
}

// Définition d'une liste chaînée
typedef struct ListeChainee {
    Node *head;
} ListeChainee;
```

### Fonction recherche

La fonction recherche permet de vérifier si un élément est présent dans la structure.

```c
// Fonction de recherche d'un élément dans une liste chaînée (itérative)
bool recherche(int x, Node *debut) {
    // itérateur qui parcourt la liste
    Node *explorer = debut;
    bool present = false;
    while (explorer != NULL && !present) {
        if (explorer->data == x) {
            // Match trouvé
            present = true;
        } else {
            // On passe au nœud suivant
            explorer = explorer->suivant;
        }
    }
    return present;
}

// Fonction de recherche d'un élément dans une liste chaînée (récursive)
bool rechercheRecursive(int x, Node *debut) {
    bool present = false;
    if (debut == NULL) {
        // Fin de la liste
        present = false;
    } else if (debut->data == x) {
        // Match trouvé
        present = true;
    } else {
        // On passe au nœud suivant
        present = rechercheRecursive(x, debut->suivant);
    }
    return present;
}
```

### Fonction supprimer

La fonction supprimer permet de retirer un élément de la structure de données.

```c
// Fonction de suppression d'un élément dans une liste chaînée (itérative)
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void supprimer(int x, Node **debut) {
    // itérateur qui parcourt la liste
    Node *explorer = *debut;
    // itérateur décalé d'un nœud
    Node *precedent = NULL;
    if (explorer != NULL) {
        // Cas particulier où l'élément à supprimer est en tête
        if (explorer->data == x) {
            *debut = explorer->suivant;
            free(explorer);
        } else {
            explorer = debut->suivant;
            precedent = debut;
            while (explorer != NULL) {
                if (explorer->data == x) {
                    // On supprime le nœud courant
                    precedent->suivant = explorer->suivant;
                    free(explorer);
                }
                // On passe au nœud suivant
                precedent = explorer;
                explorer = explorer->suivant;
            }
        }
    }
}

// Fonction de suppression d'un élément dans une liste chaînée (récursive)
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void supprimerRecursive(int x, Node **debut) {
    if (debut != NULL && *debut != NULL) {
        if ((*debut)->data == x) {
            Node *temp = *debut;
            *debut = (*debut)->suivant;
            free(temp);
            supprimerRecursive(x, debut);
        } else {
            supprimerRecursive(x, &(*debut)->suivant);
        }

    }
}
```

### Fonction insérer

La fonction insérer permet d'ajouter un élément dans la structure de données.\
Pour une liste chaînée, on peut insérer un élément en tête ou en queue.

```c
// Fonction d'insertion d'un élément dans une liste chaînée, insère en queue
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void insertionQueue(int x, Node **debut) {
    Node *nouveau = creerNode(x);
    if (*debut == NULL) {
        // Cas particulier où la liste est vide
        *debut = nouveau;
    } else {
        // itérateur qui parcourt la liste
        Node *explorer = *debut;
        while (explorer->suivant != NULL) {
            // On passe au nœud suivant
            explorer = explorer->suivant;
        }
        // On insère le nouveau nœud en queue
        explorer->suivant = nouveau;
    }
}

// Fonction d'insertion d'un élément dans une liste chaînée, insère en tête
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void insertionTete(int x, Node **debut) {
    Node *nouveau = creerNode(x);
    // On insère le nouveau nœud en tête
    nouveau->suivant = *debut;
    *debut = nouveau;
}
```

## Liste doublement chaînée

Une liste doublement chaînée est une liste chaînée où chaque nœud possède un pointeur vers le nœud précédent et le nœud suivant.\
Cela permet de parcourir la liste dans les deux sens.\
Généralement une liste doublement chaînée est représentée par son premier nœud qui est appelé **head** (tête) et son dernier nœud qui est appelé **tail** (queue).

```c
// Définition d'un nœud
typedef struct Node {
    int data;
    struct Node *precedent;
    struct Node *suivant;
} Node;

// Fonction de création d'un nœud
Node* creerNode(int data) {
    Node *n = (Node*)malloc(sizeof(Node));
    n->data = data;
    n->precedent = NULL;
    n->suivant = NULL;
    return n;
}

// Définition d'une liste doublement chaînée
typedef struct ListeDoublementChainee {
    Node *head;
    Node *tail;
} ListeDoublementChainee;
```

### Fonction recherche

La fonction recherche permet de vérifier si un élément est présent dans la structure. Cela ne change pas par rapport à une liste chaînée.

```c
// Fonction de recherche d'un élément dans une liste doublement chaînée (itérative)
bool recherche(int x, Node *debut) {
    // itérateur qui parcourt la liste
    Node *explorer = debut;
    bool present = false;
    while (explorer != NULL && !present) {
        if (explorer->data == x) {
            // Match trouvé
            present = true;
        } else {
            // On passe au nœud suivant
            explorer = explorer->suivant;
        }
    }
    return present;
}

// Fonction de recherche d'un élément dans une liste doublement chaînée (récursive)
bool rechercheRecursive(int x, Node *debut) {
    bool present = false;
    if (debut == NULL) {
        // Fin de la liste
        present = false;
    } else if (debut->data == x) {
        // Match trouvé
        present = true;
    } else {
        // On passe au nœud suivant
        present = rechercheRecursive(x, debut->suivant);
    }
    return present;
}
```

### Fonction supprimer

La fonction supprimer permet de retirer un élément de la structure de données. A la différence d'une liste chaînée, il faut éventuellement mettre à jour plusieurs pointeurs. De plus, on n'a plus besoin de garder un pointeur sur le nœud précédent.

```c
// Fonction de suppression d'un élément dans une liste doublement chaînée (itérative)
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void supprimer(int x, Node **debut) {
    if (*debut != NULL) {
        // itérateur qui parcourt la liste
        Node *explorer = *debut;
        while (explorer != NULL) {
            if (explorer->data == x) {
                // On change le pointeur du nœud précédent
                if (explorer->precedent != NULL) {
                    explorer->precedent->suivant = explorer->suivant;
                }
                // On change le pointeur du nœud suivant
                if (explorer->suivant != NULL) {
                    explorer->suivant->precedent = explorer->precedent;
                }
                // On supprime le nœud courant
                free(explorer);
            }
            // On passe au nœud suivant
            explorer = explorer->suivant;
        }
    }
}
```

### Fonction insérer

La fonction insérer permet d'ajouter un élément dans la structure de données.\
Pour une liste doublement chaînée, on peut insérer un élément en tête ou en queue.

```c
// Fonction d'insertion d'un élément dans une liste doublement chaînée, insère en queue
// On passe un pointeur de pointeur pour pouvoir modifier la fin de la liste
void insertionQueue(int x, Node **fin) {
    Node *nouveau = creerNode(x);
    if (*fin == NULL) {
        // Cas particulier où la liste est vide
        *fin = nouveau;
    } else {
        // On insère le nouveau nœud en queue
        (*fin)->suivant = nouveau;
        nouveau->precedent = *fin;
        *fin = nouveau;
    }
}

// Fonction d'insertion d'un élément dans une liste doublement chaînée, insère en tête
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void insertionTete(int x, Node **debut) {
    Node *nouveau = creerNode(x);
    if (*debut == NULL) {
        // Cas particulier où la liste est vide
        *debut = nouveau;
    } else {
        // On insère le nouveau nœud en tête
        (*debut)->precedent = nouveau;
        nouveau->suivant = *debut;
        *debut = nouveau;
    }
}
```

## Liste circulaire

Une liste circulaire est une liste chaînée où le dernier nœud pointe vers le premier nœud.\
Cela permet de parcourir la liste de manière infinie.\
Il n'y a pas de notion de début ou de fin dans une liste circulaire.

```c
// Définition d'un nœud
typedef struct Node {
    int data;
    struct Node *suivant;
} Node;

// Fonction de création d'un nœud
Node* creerNode(int data) {
    Node *n = (Node*)malloc(sizeof(Node));
    n->data = data;
    n->suivant = NULL;
    return n;
}

// Définition d'une liste circulaire
typedef struct ListeCirculaire {
    Node *head;
} ListeCirculaire;
```

### Fonction recherche

La fonction recherche permet de vérifier si un élément est présent dans la structure. Cette fonction est similaire à celle d'une liste chaînée, sauf pour la condition d'arrêt.

```c
// Fonction de recherche d'un élément dans une liste circulaire (itérative)
bool recherche(int x, Node *debut) {
    // itérateur qui parcourt la liste
    bool present = false;
    if (debut != NULL) {
        Node *explorer = debut;
        do {
            if (explorer->data == x) {
                // Match trouvé
                present = true;
            } else {
                // On passe au nœud suivant
                explorer = explorer->suivant;
            }
        } while (explorer != debut && !present);
    }
    return present;
}
```

### Fonction supprimer

La fonction supprimer permet de retirer un élément de la structure de données. Cette fonction est similaire à celle d'une liste chaînée, sauf pour la condition d'arrêt.

```c
// Fonction de suppression d'un élément dans une liste circulaire (itérative)
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void supprimer(int x, Node **debut) {
    if (*debut != NULL) {
        // itérateur qui parcourt la liste
        Node *explorer = *debut;
        Node *precedent = NULL;
        do {
            if (explorer->data == x) {
                // On supprime le nœud courant
                if (precedent != NULL) {
                    precedent->suivant = explorer->suivant;
                    free(explorer);
                }
            }
            // On passe au nœud suivant
            precedent = explorer;
            explorer = explorer->suivant;
        } while (explorer != *debut);
    }
}
```

### Fonction insérer

La fonction insérer permet d'ajouter un élément dans la structure de données. On insère généralement juste après le nœud courant.

```c
// Fonction d'insertion d'un élément dans une liste circulaire, insère après le nœud courant
// On passe un pointeur de pointeur pour pouvoir modifier le début de la liste
void insertion(int x, Node **debut) {
    Node *nouveau = creerNode(x);
    if (*debut == NULL) {
        // Cas particulier où la liste est vide
        *debut = nouveau;
        (*debut)->suivant = *debut;
    } else {
        // On insère le nouveau nœud après le nœud courant
        nouveau->suivant = (*debut)->suivant;
        (*debut)->suivant = nouveau;
    }
}
```

### Inverser

La fonction inverser permet de renverser l'ordre des nœuds de la liste circulaire.\
On utilise 3 pointeurs qui se suivent pour inverser les pointeurs des nœuds.

```c
// Fonction d'inversion de l'ordre des nœuds dans une liste circulaire
void inverser(Node *debut) {
    if (debut != NULL) {
        // itérateur qui parcourt la liste
        Node *explorer = debut;
        Node *precedent = NULL;
        Node *suivant = NULL;
        do {
            // On sauvegarde le nœud suivant
            suivant = explorer->suivant;
            // On inverse le pointeur du nœud courant
            explorer->suivant = precedent;
            // On passe au nœud suivant
            precedent = explorer;
            explorer = suivant;
        } while (explorer != debut);
    }
}
```
