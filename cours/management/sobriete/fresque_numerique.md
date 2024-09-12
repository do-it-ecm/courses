---
title: "Fresque Numérique"
date: "2024-09-12"
sidebar_label: "Fresque Numérique"
sidebar_position: 2
---

# Fresque Numérique

```mermaid
graph LR
  divertir[Se divertir]
  communiquer[Communiquer et partager]
  commercer[Commercer]
  calculer[Calculer]
  optimiser[Optimiser]

  smartphone[Utiliser un smartphone]
  ordinateur[Utiliser un ordinateur]
  equipement[Utiliser un équipement numérique]

  obstech[Obsolescence technique]
  obspsych[Obsolescence psychologique]

  nonutilisation[Non utilisation du matériel encore fonctionnel]
  dechet[Déchets électroniques]

  recyclage[Recyclage partiel]
  decyclage[Décyclage et autres limites du recyclage]

  exportation[Exportation illégale & décharge sauvage]
  enfouissement[Enfouissement & Incinération]

  sacados[Sac à dos écologique]
  fabricationeq[Fabrication des équipements numériques]
  fabricationres[Fabrication du réseau et des data centers]

  metaux[Métaux]
  extraction[Extraction & Raffinage]
  penurie[Pénurie de ressources]
  consommation[Consommation d'énergies fossiles]

  internet[Internet et réseaux]
  repartition[Répartition du trafic internet]

  infrastructure[Infrastructure réseau]
  datacenter[Data centers]

  consommationelec[Electricité consommée à l'utilisation]

  rupture[Rupture de continuité des services numériques]
  tensions[Tensions géopolitiques]
  pollution[Pollution des sols, de l'eau, de l'air]
  stress[Stress hydrique]
  emission[Émissions de GES]

  mentale[Santé mentale]
  physique[Santé physique]

  sociale[Impact social & éthique]
  destruction[Destruction de la biodiversité]
  dereglement[Dérèglement climatique]

  divertir --> smartphone
  communiquer --> smartphone
  commercer --> smartphone

  divertir --> ordinateur
  communiquer --> ordinateur
  commercer --> ordinateur
  calculer --> ordinateur
  optimiser --> ordinateur

  divertir --> equipement
  communiquer --> equipement
  commercer --> equipement
  calculer --> equipement
  optimiser --> equipement

  smartphone --> obstech
  smartphone --> obspsych
  ordinateur --> obstech
  ordinateur --> obspsych
  equipement --> obstech
  equipement --> obspsych

  obstech --> nonutilisation
  obstech --> dechet
  obspsych --> nonutilisation
  obspsych --> dechet

  dechet --> recyclage
  dechet --> decyclage
  dechet --> exportation
  dechet --> enfouissement

  ordinateur --> sacados
  equipement --> sacados
  smartphone --> sacados

  sacados --> fabricationeq
  sacados --> fabricationres

  fabricationeq --> metaux
  fabricationres --> metaux

  metaux --> extraction

  extraction --> penurie
  extraction --> consommation
  extraction --> pollution
  extraction --> stress

  consommation --> penurie
  consommation --> emission

  smartphone --> internet
  ordinateur --> internet
  equipement --> internet

  internet <--> repartition
  internet --> infrastructure
  internet --> datacenter

  infrastructure --> fabricationres
  datacenter --> fabricationres

  infrastructure --> consommationelec
  datacenter --> consommationelec
  smartphone --> consommationelec
  ordinateur --> consommationelec
  equipement --> consommationelec

  consommationelec --> consommation

  emission --> dereglement

  stress --> destruction
  pollution --> destruction

  mentale --> sociale
  physique --> sociale

  penurie --> tensions
  penurie --> rupture

  rupture --> mentale

  smartphone --> mentale
  ordinateur --> mentale
  equipement --> mentale

  pollution --> physique
```
