---
layout: layout/cours.njk

title: "CyberSécurité - Crises"
date: 2025-01-22
tags:
    - cyber
    - sécurité
    - RSSI
authors:
    - "Gilles Trossevin"
    - "Loïck Goupil-Hallay"
---

{% sommaire %}
[[toc]]
{% endsommaire %}

## Principaux risques cyber

### Phising (hammeçonnage) / Ingénierie sociale / Arnaque au président**

Le Phishing est une technique de fraude utilisée par des cybercriminels pour obtenir des informations personnelles dans le but d'obtenir des informations sensibles. Les attaquants se font passer pour un organisme que vous connaissez ou de réputation pour vous dérober des informations.\
Le message est souvent urgent / stressant ou vous propose des gains. Il engage au clic sur un lien ou à télécharger un fichier.\

*91% des cyberattaques commencent par un email de phishing.*

- **Typosquatting**: Technique de phishing qui consiste à enregistrer un nom de domaine similaire à celui d'une entreprise ou d'une marque connue pour tromper les internautes. Exemple : `g00gle.com` au lieu de `google.com`.
- **Site de phishing**: Site web frauduleux qui imite un site légitime pour voler des informations personnelles (généralement les identifiants de connexion).
- **Spear Phishing**: Technique de phishing ciblée qui consiste à personnaliser les messages pour les rendre plus crédibles. Les attaquants utilisent des informations personnelles pour personnaliser les messages.
- **Whaling**: Technique de phishing ciblée qui consiste à cibler des personnes de haut niveau (dirigeants, cadres, ...).
- **Arnaque au président**: Technique de phishing ciblée qui consiste à se faire passer pour un dirigeant ou un cadre de l'entreprise pour obtenir des informations sensibles ou des virements bancaires.

### Malwares (logiciels malveillants)

Un malware est un logiciel malveillant conçu pour endommager, perturber, voler ou prendre le contrôle d'un système informatique.\
Ils s'installent sur le système par un clic sur un lien / un téléchargement / une faille de sécurité.\
Puis ils s'exécutent en arrière-plan pour voler des informations, perturber le système ou prendre le contrôle du système.

Il existe plusieurs types et catégories de malwares :
    - Virus
    - Vers
    - Chevaux de Troie
    - Infostealers (forte hausse)
    - spywares
    - ransomwares

#### Spyware

Les spywares sont des logiciels malveillants conçus pour collecter des informations sur les utilisateurs sans leur consentement.\
Il existe énormément de spywares commerciaux qui sont utilisés pour collecter des informations sur les utilisateurs à des fins publicitaires.\
Les spywares peuvent collecter des informations personnelles, des mots de passe, des données bancaires, des informations de navigation, des messages, des appels, des photos, des vidéos, des enregistrements audio, des captures d'écran, des données de localisation, ...

#### Ransomware

Les ransomwares sont des logiciels malveillants qui chiffrent les fichiers de l'utilisateur et demandent une rançon pour les déchiffrer.\
Les ransomwares peuvent chiffrer les fichiers locaux, les fichiers réseau, les fichiers sur le cloud, les fichiers sur les serveurs, ...\
Les ransomwares peuvent également voler des données avant de les chiffrer pour les utiliser comme moyen de pression pour obtenir la rançon.

- **Menaces internes**: employés malveillants ou négligents.
- **Attaques**
    - **DDoS**: attaque par déni de service (méthode de cyberattaque qui consiste à rendre un serveur, un service ou une infrastructure indisponible en saturant la bande passante ou les ressources du serveur ciblé).
    - **Intrusions**: attaque par intrusion (méthode de cyberattaque qui consiste à pénétrer un système informatique sans autorisation).
    - **Exploration de vulnérabilités**: attaque par exploration de vulnérabilités (méthode de cyberattaque qui consiste à rechercher des failles de sécurité dans un système informatique).
- **Fuites de données**: Accès non autorisé ou divulgations involontaires de données sensibles (données personnelles, financières, médicales, ...).
- **Ingérence dans la supply chain**: Attaque visant à compromettre la chaîne d'approvisionnement (fournisseurs, sous-traitants, partenaires, logiciels utilisés,...).
- **Défaillances matérielles ou logicielles**: Panne de matériel ou de logiciel pouvant entraîner des pertes de données ou des interruptions de service.
- **Cyberespionnage et espionnage industriel**: Collecte d'informations confidentielles ou stratégiques par des moyens informatiques.
