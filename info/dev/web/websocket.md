---
layout: layout/cours.njk

title: "WebSocket"
date: 2024-10-21
tags: ["informatique", "développement", "web", "websocket"]
authors: ["Loïck Goupil-Hallay"]
---

{% sommaire %}
[[toc]]
{% endsommaire %}

## Introduction

**WebSocket** est un **protocole de communication** qui permet une communication **bidirectionnelle** et en **temps réel** entre un client et un serveur web. Il est conçu pour être implémenté dans les navigateurs et les serveurs web, mais il peut être utilisé par n'importe quelle application client/serveur. Cela permet de créer des fonctionnalités web en temps réel, telles que des jeux multijoueurs, des applications de chat en direct et des tableaux de bord en temps réel.

## Principe

WebSocket établit une **connexion persistante** entre le client et le serveur via le protocole **TCP**. Une fois la connexion établie, les deux parties peuvent envoyer des messages de manière **asynchrone**. Cela permet une communication en temps réel entre le client et le serveur.\
Les ports utilisés par WebSocket sont normalement les ports 80 (HTTP) ou 443 (HTTPS), ce qui facilite leur intégration avec les serveurs web existants.

WebSocket permet le stream de messages s'appuyant sur TCP (qui ne le supporte pas nativement, il ne fait que des streams de bytes sans notion de message).

### Compatibilité HTTP

Le standard RFC 6455 de WebSocket garantit une **compatibilité avec HTTP**. Cela signifie qu'il peut fonctionner sur les mêmes ports que HTTP et qu'il supporte les proxies et intermédiaires (pare-feu, reverse proxy) qui peuvent être configurés pour autoriser le trafic WebSocket.\
Cette compatibilité est assurée par le **handshake** initial qui utilise le **HTTP Upgrade header** pour passer de HTTP à WebSocket.

### Schema de connexion

<pre class="mermaid" style="background-color: transparent;">
sequenceDiagram
    participant Client
    participant Serveur
    Client->>Serveur: Handshake
    Serveur->>Client: Handshake (HTTP upgrade)
    Client<<-->>Serveur: Connexion Persistance (WebSocket)
    Serveur<<-->>Client: Messages
    Serveur<<-->>Client: Fin de connexion
</pre>

## Avantages

- **Communication bidirectionnelle** : Les clients et les serveurs peuvent envoyer des messages de manière asynchrone.
- **Temps réel** : Les messages sont envoyés instantanément, ce qui permet une latence minimale.
- **Compatibilité HTTP** : WebSocket est compatible avec HTTP, ce qui facilite son intégration avec les serveurs web existants. Cela permet également de contourner les restrictions de pare-feu et de proxy qui bloquent souvent les connexions non HTTP avec des serveurs distants.
- **Faible Overhead** : WebSocket utilise une connexion persistante, ce qui réduit la surcharge du protocole de communication.

## Limitations

- **Sécurité** : WebSocket peut être vulnérable aux attaques de type **Cross-Site WebSocket Hijacking (CSWSH)**. Il est important de mettre en place des mesures de sécurité pour protéger les connexions WebSocket.
- **Complexité** : La mise en place de connexions WebSocket peut être plus complexe que les connexions HTTP traditionnelles. Il est important de bien comprendre le fonctionnement de WebSocket pour éviter les erreurs de conception.
