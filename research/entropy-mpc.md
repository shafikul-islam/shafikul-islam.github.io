---
layout: tldr
title: "Summary: Entropy-aware MPC for WAAM restart transients"
permalink: /research/entropy-mpc/
kind: Poster
short_title: Acoustic entropy as a control state for WAAM restarts
paper_title: Entropy-Aware Model Predictive Control for Transient Quality Mitigation in Wire-Arc Additive Manufacturing
authors: Md Shafikul Islam, Mahathir Mohammad Bappy, Safiur Rahman Tushar
venue: LSU Control Systems Symposium, 2026. doi:10.31390/lsucontrol.26.12
status: Simulation and surrogate-model study
description: Research summary of entropy-aware model predictive control for restart transients in wire arc additive manufacturing.
method_image: /assets/images/research/entropy_mpc_method.jpg
method_caption: "Entropy-aware MPC architecture: arc sound, STFT spectrum, spectral entropy H(t), MPC, and heat-input correction q*(t)."
tldr: >-
  Pause-induced cooling creates a restart transient in WAAM that electrical signals often fail to reveal. We show that the
  spectral entropy of the arc sound collapses during this transient and use it as the state of a model predictive
  controller. In a simulation and surrogate-model study, the entropy-aware controller shortens restart recovery by 47% and
  reduces the quality-deviation AUC by 35% relative to a thermal-only baseline.
visual: tldr/entropy.html
visual_title: entropy recovery and heat correction
problem: >-
  When deposition pauses, the part cools and acts as a heat sink. At restart, current and voltage can remain within their
  nominal ranges while bead morphology and quality drift. Controllers that rely on electrical or thermal states alone may
  therefore miss a transient that later appears as a defect.
idea: >-
  Treat the <strong>arc's acoustic signature</strong> as a response-side quality signal. Its <strong>spectral entropy
  H(t)</strong> provides a compact, control-ready state. An <strong>entropy-aware MPC</strong> tracks a reference entropy
  H<sub>ref</sub> while penalizing abrupt changes in heat input, which yields a short, front-loaded correction.
steps:
  - title: Acoustic sensing
    text: A microphone records the arc signal x[n] throughout deposition and restart.
  - title: Time-frequency analysis
    text: A short-time Fourier transform produces the spectrum X(k, t).
  - title: Spectral entropy
    text: "H(t) = -&Sigma; p<sub>k</sub>(t) log p<sub>k</sub>(t) summarizes spectral spread; it drops sharply after a cold restart."
  - title: Surrogate dynamics and MPC
    text: "Learned models (DMDc, SINDy) predict the response; MPC solves q*(t) = argmin [(H - H<sub>ref</sub>)<sup>2</sup> + &lambda;(&Delta;q)<sup>2</sup>]."
  - title: Heat-input correction
    text: The optimal input applies a front-loaded heat pulse and relaxes as entropy re-enters the stable band.
results_note: All results come from simulation with learned surrogate models, not physical experiments.
stats:
  - { value: "47", unit: "%", label: Faster restart recovery }
  - { value: "35", unit: "%", label: Lower quality-deviation AUC }
  - { value: "2.8", unit: s, label: "Settling time, DMDc + entropy-aware MPC (6.7 s thermal-only)" }
  - { value: "0.054", unit: "", label: "Risk AUC, DMDc + entropy-aware MPC (0.222 thermal-only)" }
findings:
  - Adding the entropy objective reduced settling time and entropy-risk AUC for both DMDc and SINDy surrogate models; DMDc with entropy-aware MPC performed best.
  - Across hold-out runs, larger entropy drops were associated with a higher flaw-density proxy, supporting arc sound as an in-situ quality-risk signal.
  - Recovery remained stable under plus or minus 5% drift in the SINDy model parameters.
why: >-
  Acoustic sensing is inexpensive and non-contact, and it responds to process quality rather than to the commanded
  electrical inputs. Using it as a control state is a step toward robotic WAAM cells that detect and correct transients
  during the build instead of relying on post-build inspection.
links:
  - { label: Poster PDF, url: /assets/docs/entropy-mpc-poster.pdf }
  - { label: DOI, url: "https://doi.org/10.31390/lsucontrol.26.12" }
---
