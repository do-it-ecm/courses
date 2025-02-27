---
layout: layout/cours.njk

title: "Structures de données - Hash"
date: 2025-01-15
tags: ["structures de données", "algorithmique", "informatique", "hash"]
authors: ["Pascal Prea","Loïck Goupil-Hallay"]
---

## Définition

Les tables de hachage (en anglais hash table) sont des structures de données qui permettent de stocker des données sous forme de clé-valeur. Elles permettent de stocker des données de manière efficace et de les retrouver rapidement. Les tables de hachage sont utilisées dans de nombreux domaines de l'informatique, comme les bases de données, les compilateurs, les systèmes de fichiers, etc.

<pre class="mermaid" style="background-color: transparent;">
graph LR
    subgraph Clés
        A1[Clé 1]
        A2[Clé 2]
        A3[Clé 3]
    end
    subgraph Index
        B1[Indice 1]
        B2[Indice 2]
        B3[Indice 3]
    end
    subgraph Records
        C1[Valeur 1]
        C2[Valeur 2]
        C3[Valeur 3]
    end

    A1 --> B1 --> C1
    A2 --> B2 --> C2
    A3 --> B3 --> C3
</pre>

### Mathématiques

$$
\begin{aligned}
&\text{Soient } K \text{ l'ensemble des clés, } V \text{ l'ensemble des valeurs,}\\\\
&H \text{ une fonction de hachage définie par :}\\\\
&H : K \rightarrow [0, m-1],\quad m \in \mathbb{N}^*\\\\
&\text{Une table de hachage } T \text{ est alors définie par :}\\\\
&T = \{(k, v) \mid k \in K\; v \in V\; v = T[H(k)]\}
\end{aligned}
$$

### Fonctions de base

**Recherche**:

```plaintext
Recherche(x, T):
    i <- h(x)
    Recherche-Liste(x, T[i])
```

**Suppression**:

```plaintext
Suppression(x, T):
    i <- h(x)
    Suppression-Liste(x, T[i])
```

**Insertion**:

```plaintext
Insertion(x, T):
    i <- h(x)
    Insertion-Liste(x, T[i])
```
