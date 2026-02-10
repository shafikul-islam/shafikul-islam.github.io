---
layout: default
title: Publications
permalink: /publications/
nav: true
nav_order: 20
---

<style>
/* =========================
   Publications page styles
   (scoped by .pubs-page)
   ========================= */

.pubs-page { margin-top: 10px; }

/* Overview */
.pubs-overview-title{
  font-size: 22px;
  margin: 10px 0 8px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 10px;
}
.pubs-overview-title::before{
  content: "🧭";
  font-size: 18px;
}
.pubs-lead{
  margin: 0 0 16px;
  color: #4b5563;
  line-height: 1.6;
}

/* Controls */
.pubs-controls{
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  margin: 12px 0 22px;
}
.pubs-search{
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.pubs-search:focus{
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.12);
}
.pubs-filters{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}
.chip{
  border: 1px solid rgba(15,23,42,0.12);
  background: rgba(15,23,42,0.03);
  color: #111827;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
}
.chip:hover{
  transform: translateY(-1px);
  background: #ffffff;
  border-color: #cbd5e1;
}
.chip.is-active{
  background: rgba(37,99,235,0.14);
  border-color: rgba(37,99,235,0.4);
  color: #1e40af;
  font-weight: 700;
}
.pubs-filters .chip:nth-child(2){ background: rgba(245,158,11,0.14); border-color: rgba(245,158,11,0.3); }
.pubs-filters .chip:nth-child(3){ background: rgba(59,130,246,0.12); border-color: rgba(59,130,246,0.3); }
.pubs-filters .chip:nth-child(4){ background: rgba(16,185,129,0.12); border-color: rgba(16,185,129,0.28); }
.pubs-filters .chip:nth-child(5){ background: rgba(139,92,246,0.12); border-color: rgba(139,92,246,0.28); }
.pubs-filters .chip:nth-child(6){ background: rgba(236,72,153,0.12); border-color: rgba(236,72,153,0.28); }
.pubs-filters .chip:nth-child(7){ background: rgba(14,165,233,0.12); border-color: rgba(14,165,233,0.28); }
.pubs-filters .chip:nth-child(8){ background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.28); }
.pubs-filters .chip:nth-child(9){ background: rgba(100,116,139,0.14); border-color: rgba(100,116,139,0.28); }

/* Big section container (tinted by type) */
.pubs-section{
  --section-accent: #2563eb;
  --section-tint: rgba(37,99,235,0.08);
  border-radius: 16px;
  border: 1px solid rgba(15,23,42,0.12);
  background: linear-gradient(180deg, var(--section-tint), rgba(255,255,255,0.92));
  padding: 18px;
  margin: 22px 0;
  position: relative;
}
.pubs-section::before{
  content: "";
  position: absolute;
  left: 0;
  top: 14px;
  bottom: 14px;
  width: 4px;
  border-radius: 10px;
  background: var(--section-accent);
  opacity: 0.9;
}
.pubs-section--journal{
  --section-accent: #2563eb;
  --section-tint: rgba(37,99,235,0.08);
  --card-accent: #2563eb;
  --card-tint: rgba(248,250,252,0.95);
}
.pubs-section--conf{
  --section-accent: #f97316;
  --section-tint: rgba(249,115,22,0.10);
  --card-accent: #f97316;
  --card-tint: rgba(250,250,249,0.95);
}
.pubs-section--poster{
  --section-accent: #16a34a;
  --section-tint: rgba(22,163,74,0.10);
  --card-accent: #16a34a;
  --card-tint: rgba(248,250,252,0.95);
}
.pubs-section--preprint{
  --section-accent: #3b82f6;
  --section-tint: rgba(59,130,246,0.10);
  --card-accent: #3b82f6;
  --card-tint: rgba(250,250,249,0.95);
}
.pubs-section-header{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding-left: 10px;
  margin-bottom: 12px;
}
.pubs-section-header,
.pub-card-top,
.pub-card-footer{
  min-width: 0;
}
.pubs-section-header h2{
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-icon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(37,99,235,0.2);
  font-size: 14px;
}
.pubs-section-sub{
  margin: 2px 0 0;
  padding-left: 10px;
  color: #4b5563;
  font-size: 13px;
}
.pubs-count{
  font-size: 12px;
  color: #1f2937;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(37,99,235,0.22);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

/* Cards */
.pubs-grid{
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 10px;
}
.pub-card{
  position: relative;
  background: linear-gradient(180deg, var(--card-tint), rgba(255,255,255,0.92));
  border: 1px solid rgba(15,23,42,0.10);
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 6px 16px rgba(15,23,42,0.06);
  transition: transform 0.14s ease, box-shadow 0.14s ease, border-color 0.14s ease;
}
.pub-card::before{
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 12px;
  width: 4px;
  border-radius: 10px;
  background: var(--card-accent);
  opacity: 0.9;
}
.pub-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(15,23,42,0.10);
  border-color: rgba(15,23,42,0.22);
}
.pub-card-top{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding-left: 6px;
}
.pub-title{
  margin: 0;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.35;
  color: #111827;
}
.pub-badge{
  flex: 0 0 auto;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(15,23,42,0.10);
  color: #111827;
}
.pub-meta{
  margin: 6px 0 0;
  color: #374151;
  font-size: 13px;
  line-height: 1.5;
  padding-left: 6px;
}
.pub-meta i{ color: #2563eb; font-weight: 600; }
.pub-meta .dot{ color: #9ca3af; padding: 0 6px; }

/* Footer row: tags left, actions right (same line) */
.pub-card-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  padding-left: 6px;
}
.pub-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag-btn{
  border: 1px solid rgba(15,23,42,0.14);
  background: rgba(255,255,255,0.70);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: transform 0.12s ease, filter 0.12s ease, border-color 0.12s ease;
  user-select: none;
}
.tag-btn:hover{
  transform: translateY(-1px);
  filter: brightness(0.98);
  border-color: rgba(0,0,0,0.12);
}

/* Tag colour system (8 tags) */
.tag--manufacturing{ background: rgba(245,158,11,0.10); color: #92400e; border-color: rgba(245,158,11,0.22); } /* amber */
.tag--cv{ background: rgba(59,130,246,0.10); color: #1e40af; border-color: rgba(59,130,246,0.22); }          /* blue */
.tag--gnn{ background: rgba(16,185,129,0.10); color: #065f46; border-color: rgba(16,185,129,0.22); }         /* green */
.tag--dt{ background: rgba(139,92,246,0.10); color: #5b21b6; border-color: rgba(139,92,246,0.22); }          /* violet */
.tag--sc{ background: rgba(236,72,153,0.10); color: #9d174d; border-color: rgba(236,72,153,0.22); }          /* pink */
.tag--ts{ background: rgba(14,165,233,0.10); color: #075985; border-color: rgba(14,165,233,0.22); }          /* sky */
.tag--privacy{ background: rgba(239,68,68,0.10); color: #991b1b; border-color: rgba(239,68,68,0.22); }       /* red */
.tag--opt{ background: rgba(100,116,139,0.10); color: #334155; border-color: rgba(100,116,139,0.22); }         /* slate */

/* Actions */
.pub-actions{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.pub-link{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid rgba(15,23,42,0.14);
  background: rgba(255,255,255,0.85);
  color: #111827;
  text-decoration: none !important;
  font-size: 12px;
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease;
}
.pubs-section-header h2,
.pub-title,
.pub-meta,
.pub-link{
  overflow-wrap: anywhere;
}
.pub-link--doi{ background: rgba(37,99,235,0.08); border-color: rgba(37,99,235,0.28); color: #1e3a8a; }
.pub-link--slides{ background: rgba(124,58,237,0.08); border-color: rgba(124,58,237,0.28); color: #5b21b6; }
.pub-link--site{ background: rgba(15,118,110,0.08); border-color: rgba(15,118,110,0.28); color: #0f766e; }
.pub-link--ieee{ background: rgba(14,165,233,0.08); border-color: rgba(14,165,233,0.28); color: #075985; }
.pub-link--paper{ background: rgba(100,116,139,0.08); border-color: rgba(100,116,139,0.24); color: #334155; }
.pub-link--arxiv{ background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.26); color: #991b1b; }
.pub-link--ssrn{ background: rgba(245,158,11,0.10); border-color: rgba(245,158,11,0.28); color: #92400e; }
.pub-link:hover{
  transform: translateY(-1px);
  border-color: rgba(37,99,235,0.28);
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
}
.pub-link .link-icon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background: #e5e7eb;
  color: #111827;
  font-size: 12px;
}
.pub-link--doi .link-icon{
  background: rgba(37,99,235,0.16);
  color: #1e3a8a;
}
.pub-link--slides .link-icon{
  background: rgba(124,58,237,0.16);
  color: #5b21b6;
}
.pub-link--site .link-icon{
  background: rgba(15,118,110,0.16);
  color: #0f766e;
}
.pub-link--ieee .link-icon{
  background: rgba(14,165,233,0.16);
  color: #075985;
}
.pub-link--paper .link-icon{
  background: rgba(100,116,139,0.18);
  color: #334155;
}
.pub-link--arxiv .link-icon{
  background: rgba(239,68,68,0.16);
  color: #991b1b;
}
.pub-link--ssrn .link-icon{
  background: rgba(245,158,11,0.20);
  color: #92400e;
}

/* Empty message */
.pubs-empty{
  display: none;
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px dashed #cbd5e1;
  color: #374151;
}

@media (max-width: 760px){
  .pubs-overview-title{
    font-size: 20px;
  }

  .pubs-controls{
    padding: 12px;
    margin: 10px 0 18px;
  }

  .pubs-filters{
    gap: 6px;
  }

  .chip{
    padding: 7px 10px;
    font-size: 12px;
  }

  .pubs-section{
    padding: 14px;
    margin: 16px 0;
  }

  .pubs-section::before,
  .pub-card::before{
    display: none;
  }

  .pubs-section-header{
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-left: 0;
  }

  .pubs-section-header h2{
    font-size: 18px;
    line-height: 1.3;
  }

  .pubs-count{
    align-self: flex-start;
  }

  .pubs-section-sub,
  .pubs-grid,
  .pub-card-top,
  .pub-meta,
  .pub-card-footer{
    padding-left: 0;
  }

  .pub-card{
    padding: 14px;
  }

  .pub-card-top{
    flex-direction: column;
    gap: 8px;
  }

  .pub-badge{
    align-self: flex-start;
  }

  .pub-actions{
    width: 100%;
  }

  .pub-link{
    max-width: 100%;
  }
}
</style>

<div class="pubs-page">

  <div class="pubs-overview-title">Overview</div>
  <p class="pubs-lead">
    Use search and topic filters to quickly locate a paper by title, venue, author, or keyword.
  </p>

  <div class="pubs-controls">
    <input id="pubSearch" class="pubs-search" type="text"
      placeholder="Search papers (e.g., YOLOv8, Manufacturing Letters, supply chain, graph attention, TimeGPT)" />

    <div class="pubs-filters" id="pubFilters">
      <button class="chip is-active" data-filter="All">All</button>
      <button class="chip" data-filter="Manufacturing">Manufacturing</button>
      <button class="chip" data-filter="Computer Vision">Computer Vision</button>
      <button class="chip" data-filter="Graph Neural Networks">Graph Neural Networks</button>
      <button class="chip" data-filter="Digital Twins">Digital Twins</button>
      <button class="chip" data-filter="Supply Chain">Supply Chain</button>
      <button class="chip" data-filter="Time Series">Time Series</button>
      <button class="chip" data-filter="Privacy">Privacy</button>
      <button class="chip" data-filter="Optimization">Optimization</button>
    </div>

    <div id="pubEmpty" class="pubs-empty">No matching items. Try removing filters or changing the query.</div>
  </div>

  <!-- ======================
       JOURNAL PAPERS
       ====================== -->
  <section class="pubs-section pubs-section--journal" id="sec-journals">
    <div class="pubs-section-header">
      <h2><span class="section-icon">🧾</span>Peer-Reviewed Journal Papers</h2>
      <div class="pubs-count" data-count-for="journal">0 shown</div>
    </div>
    <p class="pubs-section-sub">Journal articles (published / accepted).</p>

    <div class="pubs-grid">

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Computer Vision,Manufacturing"
        data-search="Fracture Finder Computer-Aided Real-Time Diagnosis Vertebral Fractures Thoracic Spine X-Rays YOLOv8 Weighted Box Fusion Islam Anik Wasi Bappy IISE Transactions on Healthcare Systems Engineering 2026 10.1080/24725579.2025.2598578 J8">
        <div class="pub-card-top">
          <h3 class="pub-title">Fracture Finder: Computer-Aided Real-Time Diagnosis of Vertebral Fractures in Thoracic Spine X-Rays Using YOLOv8 with Weighted Box Fusion and Augmentation Strategies</h3>
          <div class="pub-badge">J8</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Anik, M. A., Wasi, A. T., Bappy, M. M. <span class="dot">·</span> <i>IISE Transactions on Healthcare Systems Engineering</i> (2026)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--cv" data-tag="Computer Vision">Computer Vision</span>
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1080/24725579.2025.2598578" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Time Series"
        data-search="AI-Enabled Modeling Smart Rural Wastewater Treatment Systems Current Practices Remaining Gaps De La Hoz Bappy Islam Marcantel Hayes Applied Water Science 2026 10.1007/s13201-025-02698-6 J7">
        <div class="pub-card-top">
          <h3 class="pub-title">AI-Enabled Modeling for Smart Rural Wastewater Treatment Systems: Current Practices and Remaining Gaps</h3>
          <div class="pub-badge">J7</div>
        </div>
        <p class="pub-meta">De La Hoz, J. L. M., Bappy, M. M., <b>Islam, M. S.</b>, Marcantel, M., Hayes, M. P. <span class="dot">·</span> <i>Applied Water Science</i> (2026)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--ts" data-tag="Time Series">Time Series</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1007/s13201-025-02698-6" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Manufacturing,Optimization"
        data-search="Fuzzy Data-Driven Framework Enhanced Risk Management Decision-Making Manufacturing Case Study Shakibaei Islam Bappy Manufacturing Letters 2025 10.1016/j.mfglet.2025.06.187 J6">
        <div class="pub-card-top">
          <h3 class="pub-title">A Fuzzy Data-Driven Framework for Enhanced Risk Management Decision-Making in Manufacturing: A Case Study</h3>
          <div class="pub-badge">J6</div>
        </div>
        <p class="pub-meta">Shakibaei, H., <b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>Manufacturing Letters</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1016/j.mfglet.2025.06.187" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Manufacturing,Computer Vision"
        data-search="Interpretable CNN models Bearing Fault Diagnosis Learnable Gaussian Sinc Filters Biswas Al Mamun Islam Bappy Manufacturing Letters 2025 10.1016/j.mfglet.2025.06.015 J5">
        <div class="pub-card-top">
          <h3 class="pub-title">Interpretable CNN Models for Computationally Efficient Bearing Fault Diagnosis Using Learnable Gaussian/Sinc Filters</h3>
          <div class="pub-badge">J5</div>
        </div>
        <p class="pub-meta">Biswas, S., Al Mamun, A., <b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>Manufacturing Letters</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--cv" data-tag="Computer Vision">Computer Vision</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1016/j.mfglet.2025.06.015" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Manufacturing"
        data-search="Generative Modeling Smart Manufacturing Applications Challenges Future Directions Ahsan Islam Bappy Manufacturing Letters 2025 10.1016/j.mfglet.2025.06.148 J4">
        <div class="pub-card-top">
          <h3 class="pub-title">Generative Modeling in Smart Manufacturing: Applications, Challenges, and Future Directions</h3>
          <div class="pub-badge">J4</div>
        </div>
        <p class="pub-meta">Ahsan, M. N., <b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>Manufacturing Letters</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1016/j.mfglet.2025.06.148" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Time Series"
        data-search="Interpretable Forecasting Dissolved Oxygen Foundation Model Proactive Aeration Rural Wastewater De La Hoz Bappy Islam Marcantel Hayes Water Research 2025 10.1016/j.watres.2025.124931 J3">
        <div class="pub-card-top">
          <h3 class="pub-title">Interpretable Forecasting of Dissolved Oxygen Leveraging Foundation Model for Proactive Aeration in Rural Wastewater Treatment Systems</h3>
          <div class="pub-badge">J3</div>
        </div>
        <p class="pub-meta">De La Hoz, J. L. M., Bappy, M. M., <b>Islam, M. S.</b>, Marcantel, M., Hayes, M. P. <span class="dot">·</span> <i>Water Research</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--ts" data-tag="Time Series">Time Series</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1016/j.watres.2025.124931" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Manufacturing,Supply Chain"
        data-search="Evaluating Challenges Adoption Smart Textiles Readymade Garment Industries Sustainable Business Development Islam Tushar Bappy Ali Al Nadim Green Technologies and Sustainability 2025 10.1016/j.grets.2025.100225 J2">
        <div class="pub-card-top">
          <h3 class="pub-title">Evaluating Challenges to the Adoption of Smart Textiles in Readymade Garment Industries: Implications for Sustainable Business Development</h3>
          <div class="pub-badge">J2</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Tushar, S. R., Bappy, M. M., Ali, M., Al Nadim, A. <span class="dot">·</span> <i>Green Technologies and Sustainability</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1016/j.grets.2025.100225" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="journal"
        data-tags="Manufacturing"
        data-search="Comprehensive Comparative Characterizations Tensile Properties Fracture Mechanisms 3D Printed Carbon-Fiber Metal-Filled PLA Composite Parts Pan Al Mamun Zhou Bappy Islam Polymer Composites 10.1002/pc.70281 J1">
        <div class="pub-card-top">
          <h3 class="pub-title">Comprehensive and Comparative Characterizations of Tensile Properties and Fracture Mechanisms of 3D Printed Multifunctional Carbon-Fiber and Metal-Filled PLA Composite Parts</h3>
          <div class="pub-badge">J1</div>
        </div>
        <p class="pub-meta">Pan, D., Al Mamun, A., Zhou, R., Bappy, M. M., <b>Islam, M. S.</b> <span class="dot">·</span> <i>Polymer Composites</i></p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link pub-link--doi" href="https://doi.org/10.1002/pc.70281" target="_blank" rel="noopener"><span class="link-icon">🔗</span>DOI</a>
          </div>
        </div>
      </article>

    </div>
  </section>

  <!-- ======================
       CONFERENCE / WORKSHOP
       ====================== -->
  <section class="pubs-section pubs-section--conf" id="sec-conf">
    <div class="pubs-section-header">
      <h2><span class="section-icon">🎤</span>Refereed Conference & Workshop Papers</h2>
      <div class="pubs-count" data-count-for="conf">0 shown</div>
    </div>
    <p class="pubs-section-sub">Conference papers, workshops, and presentations.</p>

    <div class="pubs-grid">

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Supply Chain,Graph Neural Networks"
        data-search="Virtual Node-Augmented Diffusion Recurrent Networks Spatiotemporal Supply Chain Forecasting ACAI 2025 Alshehri Wasi Anik Islam Hadj-Kali C10">
        <div class="pub-card-top">
          <h3 class="pub-title">Virtual Node-Augmented Diffusion Recurrent Networks for Spatiotemporal Supply Chain Forecasting</h3>
          <div class="pub-badge">C10</div>
        </div>
        <p class="pub-meta">Alshehri, A. S., Wasi, A. T., Anik, M. A., <b>Islam, M. S.</b>, Hadj-Kali, M. K. <span class="dot">·</span> <i>ACAI</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
            <span class="tag-btn tag--gnn" data-tag="Graph Neural Networks">Graph Neural Networks</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--site pub-link" href="http://www.acai-conf.net/" target="_blank" rel="noopener"><span class="link-icon">🌐</span>Website</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Manufacturing,Graph Neural Networks,Privacy"
        data-search="Privacy-Aware Porosity Prediction Metal Additive Manufacturing Hierarchical Graph Attention Networks INFORMS Annual Meeting 2025 Islam Bappy C9">
        <div class="pub-card-top">
          <h3 class="pub-title">Privacy-Aware Porosity Prediction in Metal Additive Manufacturing using Hierarchical Graph Attention Networks</h3>
          <div class="pub-badge">C9</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>INFORMS Annual Meeting</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--gnn" data-tag="Graph Neural Networks">Graph Neural Networks</span>
            <span class="tag-btn tag--privacy" data-tag="Privacy">Privacy</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--slides pub-link" href="https://drive.google.com/file/d/1C9_OywNGRFTo3NkrM9h7bl9viEQqztRU/view?usp=drive_link" target="_blank" rel="noopener"><span class="link-icon">🎞️</span>Slides</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Optimization"
        data-search="Inference-Driven Strategy Design Professional Societies Hybrid Machine Learning Scenario Simulation INFORMS Annual Meeting 2025 Islam Bappy C8">
        <div class="pub-card-top">
          <h3 class="pub-title">Inference-Driven Strategy Design for Professional Societies: A Hybrid Machine Learning and Scenario Simulation Framework</h3>
          <div class="pub-badge">C8</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>INFORMS Annual Meeting</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--slides pub-link" href="https://drive.google.com/file/d/1jUvuFSTsbs7Lt55Bv3P4hEjKnYM5DUQn/view?usp=drive_link" target="_blank" rel="noopener"><span class="link-icon">🎞️</span>Slides</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Computer Vision"
        data-search="FRACTURE FINDER Vertebral Fracture Localization Spine X-Ray Analysis IISE Annual Conference Expo 2025 Islam Bappy Wasi Mohammad C7">
        <div class="pub-card-top">
          <h3 class="pub-title">FRACTURE FINDER: Vertebral Fracture Localization for Spine X-Ray Analysis</h3>
          <div class="pub-badge">C7</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, A. M. A., Wasi, A. T., Mohammad, M. <span class="dot">·</span> <i>IISE Annual Conference and Expo</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--cv" data-tag="Computer Vision">Computer Vision</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--slides pub-link" href="https://drive.google.com/file/d/1QemVr53oX3_XeB7nOsWrA18GR_CYipDE/view?usp=drive_link" target="_blank" rel="noopener"><span class="link-icon">🎞️</span>Slides</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Manufacturing,Computer Vision"
        data-search="Explainable Vision Transformer Real-Time Anomaly Detection Fused Deposition Modeling IISE Annual Conference Expo 2025 Islam Bappy C6">
        <div class="pub-card-top">
          <h3 class="pub-title">Explainable Vision Transformer-Based Real-Time Anomaly Detection for Fused Deposition Modeling</h3>
          <div class="pub-badge">C6</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>IISE Annual Conference and Expo</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--cv" data-tag="Computer Vision">Computer Vision</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--slides pub-link" href="https://drive.google.com/file/d/1xNWu-22pGRzdqOanLTqpSoT45uzyt49T/view?usp=drive_link" target="_blank" rel="noopener"><span class="link-icon">🎞️</span>Slides</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Manufacturing,Time Series"
        data-search="Timegpt-driven predictive interpretable modeling critical materials renewable energy applications Louisiana Academy of Sciences 2025 Islam Bappy C5">
        <div class="pub-card-top">
          <h3 class="pub-title">Foundation Model-Driven Predictive and Interpretable Modeling for Critical Materials in Renewable Energy Applications</h3>
          <div class="pub-badge">C5</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, M. M. <span class="dot">·</span> <i>Louisiana Academy of Sciences (LAS)</i> (2025)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--ts" data-tag="Time Series">Time Series</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--slides pub-link" href="https://drive.google.com/file/d/1qcQxOcEd2-hNktuaY4BHjEzvLla-JcKQ/view?usp=drive_link" target="_blank" rel="noopener"><span class="link-icon">🎞️</span>Slides</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Optimization"
        data-search="Predict Students Performance Optimize Preparatory Leave Integrated Deep Learning Dynamic Programming ICCIT 2024 Islam Mukaddes Uddin C4 11021881">
        <div class="pub-card-top">
          <h3 class="pub-title">Predict Students’ Performance and Optimize Preparatory Leave: An Integrated Deep Learning and Dynamic Programming Approach</h3>
          <div class="pub-badge">C4</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Mukaddes, A. M. M., Uddin, M. <span class="dot">·</span> <i>ICCIT</i> (2024)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--ieee pub-link" href="https://ieeexplore.ieee.org/abstract/document/11021881" target="_blank" rel="noopener"><span class="link-icon">📘</span>IEEE</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Supply Chain,Graph Neural Networks"
        data-search="SupplyGraph Benchmark Dataset Supply Chain Planning Graph Neural Networks AAAI 2024 workshop Graphs and more Complex structures for Learning and Reasoning Wasi Islam Akib C3">
        <div class="pub-card-top">
          <h3 class="pub-title">SupplyGraph: A Benchmark Dataset for Supply Chain Planning using Graph Neural Networks</h3>
          <div class="pub-badge">C3</div>
        </div>
        <p class="pub-meta">Wasi, A. T., <b>Islam, M. S.</b>, Akib, A. R. <span class="dot">·</span> <i>AAAI Workshop</i> (2024)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
            <span class="tag-btn tag--gnn" data-tag="Graph Neural Networks">Graph Neural Networks</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--paper pub-link" href="https://github.com/CIOL-SUST/SupplyGraph" target="_blank" rel="noopener"><span class="link-icon">📄</span>Paper</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Supply Chain,Optimization"
        data-search="Optimizing Inventory Routing Decision-Focused Learning Neural Networks NeurIPS 2023 workshop New in Machine Learning Islam Wasi C2 2311.00983">
        <div class="pub-card-top">
          <h3 class="pub-title">Optimizing Inventory Routing: A Decision-Focused Learning Approach using Neural Networks</h3>
          <div class="pub-badge">C2</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Wasi, A. T. <span class="dot">·</span> <i>NeurIPS Workshop</i> (2023)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--arxiv pub-link" href="https://arxiv.org/abs/2311.00983" target="_blank" rel="noopener"><span class="link-icon">🧾</span>arXiv</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="conf"
        data-tags="Time Series"
        data-search="Multivariate Time Series Analysis Forecasting Air Quality Index Industrial Statistics Bangladesh ICERIE 2023 Islam Wasi C1">
        <div class="pub-card-top">
          <h3 class="pub-title">Multivariate Time Series Analysis and Forecasting on Air Quality Index with Industrial Statistics: A Case Study of Bangladesh</h3>
          <div class="pub-badge">C1</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Wasi, A. T. <span class="dot">·</span> <i>ICERIE</i> (2023)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--ts" data-tag="Time Series">Time Series</span>
          </div>
          <div class="pub-actions"></div>
        </div>
      </article>

    </div>
  </section>

  <!-- ======================
       PREPRINTS / WORKING
       ====================== -->
  <section class="pubs-section pubs-section--preprint" id="sec-preprints">
    <div class="pubs-section-header">
      <h2>Preprints / Working Papers</h2>
      <div class="pubs-count" data-count-for="preprint">0 shown</div>
    </div>
    <p class="pubs-section-sub">arXiv / SSRN working papers.</p>

    <div class="pubs-grid">

      <article class="pub-card pub-item"
        data-type="preprint"
        data-tags="Digital Twins,Supply Chain,Graph Neural Networks"
        data-search="Theoretical Framework Graph-based Digital Twins Supply Chain Management Optimization arXiv 2504.03692 Wasi Anik Rahman Hoque Islam Ahsan P4">
        <div class="pub-card-top">
          <h3 class="pub-title">A Theoretical Framework for Graph-based Digital Twins for Supply Chain Management and Optimization</h3>
          <div class="pub-badge">P4</div>
        </div>
        <p class="pub-meta">Wasi, A. T., Anik, M. A., Rahman, A., Hoque, M. I., <b>Islam, M. S.</b>, Ahsan, M. M. <span class="dot">·</span> <i>arXiv</i> (2025) <span class="dot">·</span> arXiv:2504.03692</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--dt" data-tag="Digital Twins">Digital Twins</span>
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
            <span class="tag-btn tag--gnn" data-tag="Graph Neural Networks">Graph Neural Networks</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--arxiv pub-link" href="https://arxiv.org/abs/2504.03692" target="_blank" rel="noopener"><span class="link-icon">🧾</span>arXiv</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="preprint"
        data-tags="Supply Chain,Graph Neural Networks"
        data-search="Graph neural networks supply chain analytics optimization concepts perspectives dataset benchmarks arXiv 2411.08550 Wasi Islam Akib Bappy P3">
        <div class="pub-card-top">
          <h3 class="pub-title">Graph Neural Networks in Supply Chain Analytics and Optimization: Concepts, Perspectives, Dataset and Benchmarks</h3>
          <div class="pub-badge">P3</div>
        </div>
        <p class="pub-meta">Wasi, A. T., <b>Islam, M. S.</b>, Akib, A. R., Bappy, M. M. <span class="dot">·</span> <i>arXiv</i> (2024) <span class="dot">·</span> arXiv:2411.08550</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--sc" data-tag="Supply Chain">Supply Chain</span>
            <span class="tag-btn tag--gnn" data-tag="Graph Neural Networks">Graph Neural Networks</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--arxiv pub-link" href="https://arxiv.org/abs/2411.08550" target="_blank" rel="noopener"><span class="link-icon">🧾</span>arXiv</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="preprint"
        data-tags="Digital Twins,Optimization"
        data-search="Biotwinmine Digital Twin-Based Optimization Biomining Sustainable Rare Earth Element Production SSRN 5258720 Anik Rahman Hoque Wasi Islam Ahsan P2">
        <div class="pub-card-top">
          <h3 class="pub-title">Biotwinmine: Digital Twin-Based Optimization of Biomining for Sustainable Rare Earth Element Production</h3>
          <div class="pub-badge">P2</div>
        </div>
        <p class="pub-meta">Anik, M. A., Rahman, A., Hoque, M. I., Wasi, A. T., <b>Islam, M. S.</b>, Ahsan, M. M. <span class="dot">·</span> <i>SSRN</i> (2025) <span class="dot">·</span> SSRN: 5258720</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--dt" data-tag="Digital Twins">Digital Twins</span>
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--ssrn pub-link" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5258720" target="_blank" rel="noopener"><span class="link-icon">🧾</span>SSRN</a>
          </div>
        </div>
      </article>

      <article class="pub-card pub-item"
        data-type="preprint"
        data-tags="Manufacturing,Time Series"
        data-search="Foundation Model-Driven Predictive Interpretable Modeling Critical Materials Renewable Energy SSRN 5248814 Islam Bappy De La Hoz Martinez Chowdhury P1">
        <div class="pub-card-top">
          <h3 class="pub-title">Foundation Model-Driven Predictive and Interpretable Modeling for Critical Materials in Renewable Energy Applications</h3>
          <div class="pub-badge">P1</div>
        </div>
        <p class="pub-meta"><b>Islam, M. S.</b>, Bappy, M. M., De La Hoz, D., Martinez, J. L., Chowdhury, S. <span class="dot">·</span> <i>SSRN</i> (2025) <span class="dot">·</span> SSRN: 5248814</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--manufacturing" data-tag="Manufacturing">Manufacturing</span>
            <span class="tag-btn tag--ts" data-tag="Time Series">Time Series</span>
          </div>
          <div class="pub-actions">
            <a class="pub-link--ssrn pub-link" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5248814" target="_blank" rel="noopener"><span class="link-icon">🧾</span>SSRN</a>
          </div>
        </div>
      </article>

    </div>
  </section>

  <!-- ======================
       POSTERS
       ====================== -->
  <section class="pubs-section pubs-section--poster" id="sec-posters">
    <div class="pubs-section-header">
      <h2><span class="section-icon">🪧</span>Poster Presentations</h2>
      <div class="pubs-count" data-count-for="poster">0 shown</div>
    </div>
    <p class="pubs-section-sub">Invited / poster presentations.</p>

    <div class="pubs-grid">
      <article class="pub-card pub-item"
        data-type="poster"
        data-tags="Digital Twins,Optimization"
        data-search="Sustainable Management Rare Earth Elements Clean Energy Prescriptive Digital Twins Purdue University 2024 Anik Hoque Islam Wasi Bappy Ahsan PS1">
        <div class="pub-card-top">
          <h3 class="pub-title">Sustainable Management of Rare Earth Elements for Clean Energy Using Prescriptive Digital Twins</h3>
          <div class="pub-badge">PS1</div>
        </div>
        <p class="pub-meta">Anik, M., Hoque, I., <b>Islam, M. S.</b>, Wasi, A. T., Bappy, M. M., Ahsan, M. M. <span class="dot">·</span> <i>Digital Twin for Manufacturing Sustainability, Safety, and Resilience</i>, Purdue University (2024)</p>
        <div class="pub-card-footer">
          <div class="pub-tags">
            <span class="tag-btn tag--dt" data-tag="Digital Twins">Digital Twins</span>
            <span class="tag-btn tag--opt" data-tag="Optimization">Optimization</span>
          </div>
          <div class="pub-actions"></div>
        </div>
      </article>
    </div>
  </section>

</div>

<script>
(function(){
  const searchEl = document.getElementById("pubSearch");
  const filtersEl = document.getElementById("pubFilters");
  const emptyEl = document.getElementById("pubEmpty");
  const cards = Array.from(document.querySelectorAll(".pub-item"));
  const countEls = Array.from(document.querySelectorAll("[data-count-for]"));

  const state = { filter: "All", query: "" };

  function norm(s){ return (s || "").toLowerCase().trim(); }

  function setActiveChip(filter){
    Array.from(filtersEl.querySelectorAll(".chip")).forEach(btn=>{
      btn.classList.toggle("is-active", btn.dataset.filter === filter);
    });
  }

  function matches(card){
    const tags = (card.dataset.tags || "").split(",").map(s=>s.trim()).filter(Boolean);
    const hay = norm(card.dataset.search || "");
    const q = norm(state.query);

    const tagOK = (state.filter === "All") || tags.includes(state.filter);
    const searchOK = !q || hay.includes(q);

    return tagOK && searchOK;
  }

  function updateCounts(){
    const visibleByType = { journal:0, conf:0, preprint:0, poster:0 };
    cards.forEach(c=>{
      if(c.style.display !== "none"){
        visibleByType[c.dataset.type] = (visibleByType[c.dataset.type] || 0) + 1;
      }
    });
    countEls.forEach(el=>{
      const t = el.getAttribute("data-count-for");
      el.textContent = (visibleByType[t] || 0) + " shown";
    });
  }

  function apply(){
    let any = false;
    cards.forEach(card=>{
      const ok = matches(card);
      card.style.display = ok ? "" : "none";
      if(ok) any = true;
    });
    emptyEl.style.display = any ? "none" : "block";
    updateCounts();
  }

  // Filter chip click
  filtersEl.addEventListener("click", (e)=>{
    const btn = e.target.closest(".chip");
    if(!btn) return;
    state.filter = btn.dataset.filter;
    setActiveChip(state.filter);
    apply();
  });

  // Tag click -> apply that filter
  document.addEventListener("click", (e)=>{
    const tag = e.target.closest(".tag-btn");
    if(!tag) return;
    const t = tag.getAttribute("data-tag");
    if(!t) return;
    state.filter = t;
    setActiveChip(state.filter);
    apply();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Search
  searchEl.addEventListener("input", ()=>{
    state.query = searchEl.value;
    apply();
  });

  // Initial counts
  apply();
})();
</script>
