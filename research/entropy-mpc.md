---
layout: tldr
title: "TL;DR: Entropy-aware MPC for WAAM restarts"
permalink: /research/entropy-mpc/
kind: Poster
short_title: Listening to the arc to fix restart defects
paper_title: Entropy-Aware Model Predictive Control for Transient Quality Mitigation in Wire-Arc Additive Manufacturing
authors: Md Shafikul Islam, Mahathir Mohammad Bappy, Safiur Rahman Tushar
venue: LSU Control Systems Symposium, 2026. doi:10.31390/lsucontrol.26.12
status: Simulation and surrogate-model study
description: A plain-language, visual summary of entropy-aware model predictive control for restart transients in wire arc additive manufacturing.
tldr: >-
  When a wire-arc 3D printer restarts after a pause, current and voltage can look normal while quality silently drops.
  The sound of the arc reveals the problem: its spectral entropy collapses. We use that entropy as the state of a
  model predictive controller, which answers with a short, front-loaded burst of extra heat. In simulation, recovery
  is 47% faster and quality deviation is 35% lower.
visual: tldr/entropy.html
visual_title: Entropy recovery and heat correction
problem: >-
  During a build the robot sometimes has to pause. While it waits, the part cools down and acts like a heat sink. When
  the arc restarts, the first part of the new bead is too cold, so its shape and quality drift. The usual signals,
  current and voltage, can stay nominal, so the controller does not notice anything is wrong.
idea: >-
  Use the arc's sound as a sensor. We turn the sound into a single number, the <strong>spectral entropy H(t)</strong>,
  which drops sharply at a cold restart. A <strong>model predictive controller (MPC)</strong> then chooses the heat
  input that brings H(t) back to a reference value quickly, while penalizing large jumps in heat.
steps:
  - title: Record the arc sound
    text: A microphone records the welding arc, x[n], during the build.
  - title: Make a spectrum
    text: A short-time Fourier transform (STFT) turns the sound into frequency content over time, X(k, t).
  - title: Compute entropy
    text: "Spectral entropy H(t) = -sum of p_k(t) log p_k(t) summarizes how spread out the sound is. It collapses at a cold restart."
  - title: Predict and decide
    text: "A learned dynamics model (DMDc or SINDy) predicts the response; MPC picks q*(t) = argmin [(H - H_ref)^2 + lambda (delta q)^2]."
  - title: Correct the heat
    text: The controller applies a short, front-loaded heat pulse, then backs off as entropy returns to the stable band.
results_note: All numbers are from simulation with learned surrogate models, not physical experiments.
stats:
  - { value: "47", unit: "%", label: Faster restart recovery }
  - { value: "35", unit: "%", label: Lower quality-deviation AUC }
  - { value: "2.8", unit: s, label: "Settling time, DMDc + entropy-aware MPC (6.7 s for thermal-only)" }
  - { value: "0.054", unit: "", label: "Risk AUC, DMDc + entropy-aware MPC (0.222 for thermal-only)" }
findings:
  - Adding the entropy objective to MPC reduced settling time and entropy-risk AUC for both DMDc and SINDy models.
  - Across hold-out runs, larger entropy drops were associated with a higher flaw-density proxy, so arc sound works as an early quality-risk signal.
  - Recovery stayed stable when the SINDy model parameters drifted by plus or minus 5%.
why: >-
  A microphone is cheap and non-contact. If arc sound can warn about restart defects before post-build inspection,
  robotic WAAM cells can correct themselves in real time instead of scrapping parts later.
links:
  - { label: Poster PDF, url: /assets/docs/entropy-mpc-poster.pdf }
  - { label: DOI, url: "https://doi.org/10.31390/lsucontrol.26.12" }
  - { label: Research page, url: "/research/#poster" }
---
