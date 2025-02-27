---
layout: layout/cours.njk

title: "CyberSécurité"
date: 2025-01-15
tags:
    - cyber
    - sécurité
    - RSSI
authors:
    - "Maryse ANBAR"
    - "Loïck Goupil-Hallay"
---

{% sommaire %}
[[toc]]
{% endsommaire %}

{% lien "**Liens utiles**" %}
- [ANSSI](https://cyber.gouv.fr/)
{% endlien %}

## Sécurité des Systèmes d'Information

La sécurité des systèmes d'information est un ensemble de mesures techniques, organisationnelles et humaines qui permettent de protéger les systèmes d'information d'une entreprise.

La sécurité d'un système d'information repose avant tout sur la **confiance** et la **gestion des risques**.

<pre class="mermaid" style="background-color: transparent;">
mindmap
  root((Confiance))
    (Compétitivité)
      )Secret Industriel(
      )Image de marque(
    (Conformité)
      )Lois(
      )Normes(
    (Ecosystème)
      )Salariés(
      )Clients(
      )Fournisseurs(
</pre>

### Objectifs

Les objectifs de la sécurité des systèmes d'information sont les suivants:
- **Confidentialité**: Seuls les utilisateurs autorisés peuvent accéder aux informations
- **Intégrité**: Les informations ne peuvent être modifiées que par des utilisateurs autorisés
- **Disponibilité**: Les informations sont accessibles à tout moment
- **Authentification**: Les utilisateurs sont bien ceux qu'ils prétendent être
- **Traçabilité**: Les actions des utilisateurs sont enregistrées (dans le respect de la vie privée)

### Actif

En SSI, on définit un **actif** comme tout élément avec de la valeur pour l'organisation. Il s'agit de protéger ces actifs contre les **menaces** (risques) qui peuvent les affecter.

On distingue différent types d'actifs selon les normes. Par exemple sur la norme ISO 270001:
- **Bien supports**: ce avec quoi on travaille (ordinateurs, serveurs, machines virtuelles ...) (utilisateurs, administrateurs,...)
- **Valeur métier**: Processus de gestion des incidents de sécurité informatique

### Allocation des ressources

<pre class="mermaid" style="background-color: transparent;">
pie title Budget SSI
  "Protection" : 55
  "Défense" : 20
  "Gestion Risque Conformité" : 20
  "Résilience" : 5
</pre>

D'après les normes ISO 27k, le budget de la sécurité informatique se déploie de la manière suivante (en moyenne)
1. **Protection**: Ensemble des mesures proactives visant à empêcher les cyberattaques ou les incidents de sécurité. Cela inclut le chiffrement, les pare-feu, les systèmes de prévention des intrusions (IPS), les correctifs logiciels et autres outils visant à protéger les systèmes et les données sensibles.
2. **Défense**: Capacités de détection et de réponse aux menaces ou incidents de sécurité. Cela inclut la surveillance continue, les centres d'opérations de sécurité (SOC), les systèmes de détection des intrusions (IDS), et les équipes d'intervention en cas d'incident (CSIRT).
3. **Gestion Risque Conformité**: Activités visant à identifier, évaluer et gérer les risques pour le système d'information, tout en assurant le respect des normes, réglementations et cadres juridiques. Cela comprend les audits de sécurité, les analyses de risques, les certifications, et la mise en œuvre des politiques de conformité.
4. **Résilience**: Capacité d'un système à continuer de fonctionner ou à se rétablir rapidement après un incident. Cela inclut les plans de reprise après sinistre (PRA), les sauvegardes, les tests de continuité d'activité (PCA), et les stratégies pour minimiser l'impact des interruptions.

### Parties prenantes internes

Les parties prenantes internes sont les acteurs de l'entreprise qui sont concernés par la sécurité des systèmes d'information. Il s'agit de personnel que l'on peut **former** et **sensibiliser** à la sécurité informatique. On doit pouvoir faire **confiance** à ces personnes pour qu'elles respectent les règles de sécurité et signalent tout incident ou comportement suspect.\
Il est essentiel de les **impliquer** dans la démarche de sécurité pour garantir l'efficacité des mesures mises en place.
*La première cause de faille de sécurité est l'erreur humaine.*\

<pre class="mermaid" style="background-color: transparent;">
mindmap
  root((Valeurs métiers))
    (Compétitivité)
      )Communication(
      )DSI et experts techniques(
    (Conformité)
      )Juristes(
      )Responsable Conformité(
    (Ecosystème)
      )Salariés(
      )Clients(
      )Fournisseurs(
</pre>

### Parties prenantes externes

Les parties prenantes externes sont les acteurs extérieurs à l'entreprise qui peuvent influencer la sécurité des systèmes d'information. Il s'agit de fournisseurs, clients, partenaires, autorités de régulation, et autres entités qui peuvent avoir un impact sur la sécurité des données et des systèmes de l'entreprise.\
Il est important de **collaborer** avec ces parties prenantes pour garantir la sécurité des échanges d'informations et des transactions commerciales.

<pre class="mermaid" style="background-color: transparent;">
mindmap
  root((Valeurs métiers))
    (Compétitivité)
      )Réseau de confiance(
      )Attractivité des jeunes talents(
    (Conformité)
      )ENISA(
      )ANSSI, CNIL,...(
    (Ecosystème)
      )Intérimaires / Prestataires(
      )Clients(
      )Fournisseurs Cyber / Cloud / IOT,...(
</pre>

### Responsable de la sécurité des systèmes d'information (RSSI)

Le **Responsable de la Sécurité des Systèmes d'Information** (RSSI) est le garant de la sécurité des systèmes d'information de l'entreprise. Il est chargé de définir et de mettre en œuvre la politique de sécurité, de sensibiliser les utilisateurs, de gérer les incidents de sécurité, et de veil### RSSI
ler à la conformité aux normes et réglementations en vigueur.\
Le RSSI est un acteur clé de la sécurité informatique et doit posséder des compétences techniques, organisationnelles et managériales pour remplir ses missions.

## Cadres Légaux

Les Etats ont mis en place de nombreuses réglementations qui s'appliquent à tous les niveaux et tous les secteurs d'activités. Cela assure une exigence plus stricte envers chaque maillon de la **supply chain**.

### Loi de Programmation Militaire

L'Etat français a mis en place la **Loi de Programmation Militaire** (LPM) pour renforcer la sécurité des systèmes d'information et protéger les infrastructures critiques. Cette loi impose aux **opérateurs d'importance vitale** (OIV) et aux **opérateurs de services essentiels** (OSE) de mettre en place des mesures de sécurité (*à leurs propres frais*) adaptées pour protéger leurs systèmes d'information contre les cyberattaques.

Les opérateurs sont identifiés par l'Etat comme ayant des activités *indispensables à la survie de la nation* ou *dangereuses pour la population*.

### SRI & NIS

L'Europe a mis en place la **Directive NIS** (Network and Information Security) pour renforcer la sécurité des réseaux et des systèmes d'information dans l'Union Européenne. Cette directive impose aux **fournisseurs de services numériques** (FSN) et aux **opérateurs d'infrastructures critiques** (OIC) de mettre en place des mesures de sécurité pour protéger leurs systèmes d'information contre les cyberattaques.\
Ceci s'inscrit dans une logique de continuité et de collaboration avec les autres pays européens.

Les acteurs concernés par ces directives doivent notifier les incidents de sécurité aux autorités compétentes et coopérer avec les autres acteurs pour garantir la sécurité des réseaux et des systèmes d'information. Il s'agit de:
- **Opérateur de Service Essentiel** (OSE) qui fournit un service essentiel à la société (banque, énergie, transport, santé, eau, numérique)
- **Fournisseur de Service Numérique** (FSN) qui fournit un service numérique (marché en ligne, moteur de recherche, cloud computing)

### RGPD

Le **Règlement Général sur la Protection des Données** (RGPD) est une réglementation européenne qui vise à protéger les données personnelles des citoyens de l'Union Européenne. Il impose aux entreprises de mettre en place des mesures de sécurité pour protéger les données personnelles contre les cyberattaques et les fuites d'informations.\
Le RGPD définit les **droits des citoyens** en matière de protection des données et les **obligations des entreprises** en matière de traitement des données personnelles.

#### Données personnelles

Le RGPD définit les données personnelles comme toute information permettant d'identifier une personne physique directement ou indirectement. Il s'agit de données telles que:
- Nom
- Prénom
- Adresse
- Numéro de téléphone
- Adresse e-mail
- Numéro de sécurité sociale
- Adresse IP
- Cookies
- Données de localisation
- Données de santé
- Données bancaires
- ...

## Règles d'Hygiène Informatique

Il existe une infinité de règles d'hygiène informatique, mais certaines sont plus importantes que d'autres. Voici une liste non exhaustive des règles d'hygiène informatique à respecter pour maximiser la sécurité des systèmes d'information, ainsi que sa propre sécurité.

### Mise à jour des équipements & logiciels

Plusieurs fois par semaine, des **CVE** (Common Vulnerabilities and Exposures) sont publiées sur des outils que l'on utilise tous les jours. Ces CVE sont des failles de sécurité découvertes par des chercheurs en sécurité.\
Les vendeurs sont **légalement tenus** de corriger ces failles. Il est donc important de mettre à jour régulièrement les équipements pour corriger ces failles.

### Interlocuteur de confiance

Il est important de s'assurer de communiquer avec des interlocuteurs de confiance. Il est facile de se faire passer pour quelqu'un d'autre sur Internet.\
N'hésitez pas à vérifier l'identité de vos interlocuteurs avant de leur transmettre des informations sensibles.

En cas de doute, pensez à interroger une personne responsable / de confiance (votre direction cyber ou votre administrateur réseau par exemple).

### Séparer les usages

Il est important de séparer les usages professionnels et personnels. Les risques de sécurité sont différents et il est important de ne pas mélanger les deux.\
L'entreprise peut mettre en place des **politiques de sécurité** pour encadrer l'utilisation des équipements professionnels.

De plus, toute données présentes sur un équipement professionnel sont la **propriété de l'entreprise**. Il est donc important de ne pas mélanger les données personnelles et professionnelles.
