<template>
  <div class="over">
    <div class="container">
      <div class="page-header">
        <span class="tag">Over mij</span>
        <h1>Wim Geelen</h1>
      </div>

      <div class="content-grid">
        <div class="bio-section">
          <h2>Wie ben ik?</h2>
          <p>Ik ben een programmeerstudent aan PXL Hogeschool in Hasselt. Mijn eerste stappen in de programmeerwereld zette ik op de middelbare school, waar ik al snel merkte dat ik een passie had voor het bouwen van dingen.</p>
          <p>Na mijn middelbare school begon ik aan de hogeschool Howest in Brugge, na een jaar heb ik hier een pauze genomen en heb ik voor een 3 maanden periode lesgegeven in programmeren op LevelX28. Die ervaring leerde me veel niet alleen over de werking van een school, maar ook over mezelf. Ik besloot terug te gaan studeren om mijn kennis verder te verdiepen.</p>
          <p>Ik ben een sociaal persoon die graag boeken leest, diep in onderwerpen duikt en zeer graag klimt. Naast mijn studies ben ik ook actief bij Hexion, de studentenvereniging voor IT-studenten aan PXL.</p>
        </div>

        <div class="timeline-section">
          <h2>Tijdlijn</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="item in timeline" :key="item.year">
              <div class="timeline-year">{{ item.year }}</div>
              <div class="timeline-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-bar">
        <span class="tag">Contact</span>
        <div class="contact-links">
          <a href="mailto:wim.geelen@student.pxl.be" class="contact-link">📧 wim.geelen@student.pxl.be</a>
          <a href="https://github.com/wimgeelen" target="_blank" class="contact-link">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/wim-geelen-8037622b8" target="_blank" class="contact-link">💼 LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeline = [
  { year: '2025-26', title: 'Hogeschool PXL', desc: 'Graduaat Programmeren aan PXL Hogeschool Hasselt.' },
  { year: '2025–25', title: 'Lesgeven op LevelX28', desc: '3 maanden programmeerles gegeven. Kennis doorgeven aan anderen.' },
  { year: '2023–24', title: 'Hogeschool Howest', desc: 'Eerste kennismaking met hoger onderwijs en diepere programmeerconcepten.' },
  { year: '2021–23', title: 'Middelbare school LevelX28', desc: 'Eerste stappen in programmeren. ontdekking van een passie.' },
]
</script>

<style scoped>
.over { padding-top: 120px; padding-bottom: 4rem; }

.page-header { margin-bottom: 3.5rem; display: flex; flex-direction: column; gap: 1rem; }

h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.5rem, 6vw, 4rem);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--text);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3.5rem;
}

h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
}

.bio-section p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.timeline { display: flex; flex-direction: column; }
.timeline-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1rem;
  padding-bottom: 1.5rem;
  position: relative;
}
.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 35px; top: 22px; bottom: 0;
  width: 1px;
  background: var(--border);
}
.timeline-year {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent);
  padding-top: 3px;
  text-align: right;
}
.timeline-content h3 {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
  color: var(--text);
}
.timeline-content p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }

.contact-bar {
  border-top: 1px solid var(--border);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.contact-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  transition: color var(--transition);
}
.contact-link:hover { color: var(--accent); }

@media (max-width: 768px) {
  .content-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
