---
layout: tldr
title: "TL;DR: Fracture Finder"
permalink: /research/fracture-finder/
kind: Journal article
short_title: Finding spine fractures in a fraction of a second
paper_title: "Fracture Finder: Computer-Aided Real-Time Diagnosis of Vertebral Fractures in Thoracic Spine X-Rays Using YOLOv8 with Weighted Box Fusion and Augmentation Strategies"
authors: Islam, M. S., Anik, M. A., Wasi, A. T., Bappy, M. M.
venue: IISE Transactions on Healthcare Systems Engineering, 2026
description: A plain-language, visual summary of Fracture Finder, a YOLOv8 system for real-time vertebral fracture localization.
tldr: >-
  Vertebral fractures are easy to miss when doctors are busy. Fracture Finder draws a box around a suspected fracture on a
  thoracic spine X-ray and gives a confidence score, in about 126 ms per image on a mid-range GPU, so risky cases can be
  reviewed first.
visual: tldr/xray.html
visual_title: One-pass detection on a spine X-ray
problem: >-
  Acute vertebral fractures can be overlooked under time pressure, which delays treatment. Radiologists need fast
  support that points to where the problem is, not only whether one exists.
idea: >-
  Treat it as <strong>object detection</strong>. A single-stage <strong>YOLOv8</strong> detector finds and boxes suspected
  fractures in one pass over the image, and <strong>weighted box fusion</strong> merges overlapping predictions into one
  clean box.
steps:
  - title: Collect labeled X-rays
    text: 1247 expert-annotated thoracic spine images from the UTMB-1000 dataset.
  - title: Study the data
    text: Exploratory analysis found class imbalance and systematic patterns in box size and position.
  - title: Balance and augment
    text: Targeted oversampling and augmentation address the imbalance.
  - title: Detect in one pass
    text: YOLOv8 predicts boxes and confidence scores for suspected fractures.
  - title: Fuse and flag
    text: Weighted box fusion merges overlapping boxes, and suspicious cases are flagged for review.
stats:
  - { value: "~126", unit: ms, label: Time per X-ray on a mid-range consumer GPU }
  - { value: "1247", unit: "", label: Expert-annotated training and validation images }
findings:
  - On a hold-out set, Fracture Finder achieved strong detection performance.
  - Low latency makes it practical as a triage tool that flags suspicious cases for faster review.
why: >-
  The same real-time detection ideas carry over to manufacturing inspection. In the clinic, they can shorten the time to
  diagnosis and reduce missed fractures.
links:
  - { label: DOI, url: "https://doi.org/10.1080/24725579.2025.2598578" }
  - { label: All publications, url: /publications/ }
---
