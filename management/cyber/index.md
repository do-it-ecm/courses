---
layout: layout/cours.njk

title: "CyberSécurité - En entreprise"
date: 2025-02-26
tags:
    - cyber
    - sécurité
authors:
    - "Mathieu SCHIANO"
    - "Loïck Goupil-Hallay"
---

{% sommaire %}
[[toc]]
{% endsommaire %}

## Définitions

- **Cybersécurité**: Etat d'un système d'information qui résiste aux cyberattaques et aux pannes accidentelles survenant dans le cyberespace.
- **Cyberattaque**: Ensemble coordonné d'actions menées dans le cyberespace qui visent des informations ou les systèmes qui les traitent, en portant atteinte à leur disponibilité, à leur intégrité ou à leur confidentialité. Une cyberattaque peut être ponctuelle ou s'incrire dans la durée.

### Métiers Cyber

|Gestion de la Sécurité<br>Pilotage des projets de sécurité|Conception et maintien d'un SI sécurisé|Gestion des incidents et des crises de sécurité|Conseil, Service, Recherche|
|:---:|:---:|:---:|:---:|
|Responsable de la sécurité des systèmes|Architecte Sécurité|Responsable de SOC|Consultant en Cybersécurité|
|Chef de projets|Expert Sécurité|Analyste SOC|Avant-vente Sécurité|
|Officier de sécurité|Cryptologue|Responsable CSIRT|Formateur en Cybersécurité|
|Risk Manager|DevSecOps|Analyste Forensic & Reverse|Evaluateur sécurité des produits|
|Responsable Gouvernance|Ingénieur Cybersécurité|Gstionnaire de crise|Intégrateur de solutions sécurité|
|Responsable Conformité|Auditeur Technique / Pentester / Hacker éthique|Analyste Threat Intelligence|Chercheur en SSI|
|Responsable Sensibilisation|Auditeur Organisationnel|Vulnerability & Patch Manager|
| Responsable Sécurité Industrielle / Métier|

#### Métiers fonctionnels

|Gouvernance|Risque|Conformité|Sensibilisation|Projets|
|:---:|:---:|:---:|:---:|:---:|
|PSSI|

#### Métier techniques

|Blue Team|Red Team|Purple Team|White Team|
|:---:|:---:|:---:|:---:|
|CERT|Pentest Externe|Detection Test|Outillage|
|SOC|Pentest Interne|
|Vulnerability Management|
|Detection engineer|
|Threat Intelligence|

## Cyberattaque

**Atteinte à la sécurité**:
- **Disponibilité**: Empêcher l'accès aux ressources
- **Intégrité**: Modifier les données
- **Confidentialité**: Divulguer des informations
- **Traçabilité / Auditabilité**: Supprimer les traces

**Exploitation du facteur humain**:
- **Ingénierie sociale**: Manipulation psychologique
- **Phishing**: Hameçonnage
- **Fraude au Président**: Usurpation d'identité
- **Fraude à la facturation**: Usurpation de facture

**Exploitation de vulnérabilités**:
- **Fuite d'information**: Divulgation d'informations
- **Injection de commandes**: Injection et exécution de code / SQL dans une application
- **Inclusion de fichiers**: Inclusion de fichiers dans une application
- **Upload de fichiers**
- **Cross Site Request Forgery (CSRF)**: Demande forgée de requête
- **Cross Site Scripting (XSS)**: Injection de script

### Conséquences

**Impact business**:
- **Perte de production**
- **Vol de données personnelles**
- **Vol de données industrielles** (brevets, documents, secrets)

**Impact environnementaux et humains**:
- **Sabotage**: dégâts corporels, environnementaux

**Impacts nationaux ou internationaux**:
- **Indisponibilité** de services Vitaux / Essentiels au bon fonctionnement de l'état

### Gestion

**Création de cellules de crise**:
- Cellule Executive
- Cellule Technique
- Nomination des rôles: Opération, Communication, Logistique

**Objectifs**:
- Eviter une catastrophe
- Fonctionner en mode dégradé
- Rétablir un état nominal
- Limiter les répercussions

**Les rôles**:
- Détecter les premiers signes
- Activer la cellule
- Définir le plan d'urgence et les mesures
- Communiquer en interne et en externe
- Trouver les bons interlocuteurs
- Définir la sortie de crise

## ANSSI

