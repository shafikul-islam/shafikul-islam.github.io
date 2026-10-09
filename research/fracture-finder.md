---
layout: tldr
title: "Summary: Fracture Finder"
permalink: /research/fracture-finder/
kind: Journal article
short_title: Real-time localization of vertebral fractures on spine X-rays
paper_title: "Fracture Finder: Computer-Aided Real-Time Diagnosis of Vertebral Fractures in Thoracic Spine X-Rays Using YOLOv8 with Weighted Box Fusion and Augmentation Strategies"
authors: Islam, M. S., Anik, M. A., Wasi, A. T., Bappy, M. M.
venue: IISE Transactions on Healthcare Systems Engineering, 2026
description: Research summary of Fracture Finder, a YOLOv8-based system for real-time vertebral fracture localization.
method_image: /assets/images/research/fracture_finder_method.png
method_caption: "Fracture Finder pipeline: pre-processing of an imbalanced dataset, YOLOv8s training with on-the-fly augmentation, test-time augmentation with weighted box fusion, and evaluation (mAP, F1, latency)."
tldr: >-
  Acute vertebral fractures can be missed under time pressure. Fracture Finder is a single-stage YOLOv8 detector that
  localizes suspected fractures on thoracic spine X-rays with bounding boxes and confidence scores in about 126 ms per
  image on a mid-range consumer GPU, supporting faster triage of high-risk cases.
visual: tldr/xray.html
visual_title: single-pass detection on a spine X-ray
problem: >-
  Delayed or missed detection of vertebral fractures postpones treatment. Clinical decision support is most useful when
  it is fast and indicates where an abnormality is located, not only whether one is present.
idea: >-
  Formulate diagnosis as <strong>object detection</strong>. A single-stage <strong>YOLOv8</strong> detector predicts
  boxes and confidence scores in one pass, <strong>targeted oversampling and augmentation</strong> address data
  imbalance, and <strong>weighted box fusion</strong> consolidates overlapping predictions.
steps:
  - title: Annotated data
    text: 1247 expert-annotated thoracic spine radiographs from the UTMB-1000 dataset.
  - title: Exploratory analysis
    text: Analysis revealed class imbalance and systematic patterns in box size and position.
  - title: Imbalance handling
    text: Targeted oversampling and augmentation rebalance the training distribution.
  - title: Detection
    text: YOLOv8 predicts bounding boxes and confidence scores for suspected fractures.
  - title: Inference and fusion
    text: Test-time augmentation (identity, horizontal flip, scale) and weighted box fusion consolidate predictions, and suspicious cases are flagged for review.
stats:
  - { value: "~126", unit: ms, label: Inference time per X-ray on a mid-range consumer GPU }
  - { value: "1247", unit: "", label: Expert-annotated images for training and validation }
findings:
  - Fracture Finder achieved strong detection performance on a hold-out set.
  - Its low latency makes it suitable as a triage aid that prioritizes suspicious cases for review.
why: >-
  Fast, localized detection can shorten time to diagnosis and reduce missed fractures. The same real-time detection
  design transfers directly to visual inspection in manufacturing.
links:
  - { label: DOI, url: "https://doi.org/10.1080/24725579.2025.2598578" }
  - { label: All publications, url: /publications/ }
---
