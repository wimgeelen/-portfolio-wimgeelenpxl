<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-text">
            <span class="tag">Portfolio 25-26</span>
            <h1>
              Wim Geelen
            </h1>
            <p class="hero-intro">{{ info.intro }}</p>
            <div class="hero-ctas">
              <router-link to="/projecten" class="btn-primary">Bekijk projecten</router-link>
              <router-link to="/over" class="btn-ghost">Over mij →</router-link>
            </div>
          </div>
          <div class="hero-aside">
            <div class="status-card">
              <div class="status-dot"></div>
              <span>Momenteel studerend aan PXL</span>
            </div>
            <div class="quick-facts">
              <div class="fact" v-for="fact in info.facts" :key="fact.label">
                <span class="fact-label">{{ fact.label }}</span>
                <span class="fact-value">{{ fact.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg"></div>
    </section>

    <!-- Skills strip -->
    <section class="skills-strip">
      <div class="container">
        <div class="strip-inner">
          <span class="tag">Skills</span>
          <div class="chips">
            <span class="chip" v-for="s in info.skills" :key="s">{{ s }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Interesses -->
    <section class="interests">
      <div class="container">
        <h2>Wie ik ben</h2>
        <div class="interest-grid">
          <div class="card" v-for="item in info.interests" :key="item.title">
            <span class="interest-icon">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Werkplek -->
    <section class="cta-werkplek">
      <div class="container">
        <div class="cta-box">
          <div>
            <span class="tag">Werkplek Leren</span>
            <h2>Mijn leertraject bij PXL</h2>
            <p>Ontdek mijn rollenlijst, logboek, opdrachten en AIM-reflectie van mijn werkplekleren bij PXL Hogeschool.</p>
          </div>
          <router-link to="/werkplek-leren" class="btn-primary">Bekijk werkplek leren →</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const info = {
  intro: `Ik ben een programmeerstudent aan PXL, ik heb al veel ervaring in het programmeren van projecten.
  Mijn ervaring komt in de vorm van middelbare school en een beetje hogeschool. Ik heb na 3 maanden lesgeven
  in het programmeren besloten om terug te gaan studeren, zodat ik nog meer les kan geven. Ik ben een sociaal
  persoon die graag boeken leest, diep in onderwerpen duikt en zeer graag klimt.`,

  facts: [
    { label: 'Opleiding',  value: 'Graduaat Programmeren, PXL' },
    { label: 'Locatie',    value: 'Genk, België' },
    { label: 'Focus',      value: 'Full-stack development' },
    { label: 'Hobby',      value: 'Klimmen · Lezen · Hexion' },
  ],

  skills: [
    'Vue 3', 'JavaScript', 'TypeScript', 'HTML/CSS',
    'Java', 'Python', 'Git', 'SQL', 'Node.js', 'REST API',
  ],

  interests: [
    {
      icon: '📚',
      title: 'Lezen',
      desc: 'Lezen geeft me ontspanning en zorgt dat mijn algemeen taalgebruik verbetert.',
    },
    {
      icon: '🧗',
      title: 'Klimmen',
      desc: 'Klimmen doe ik om mezelf extra uitdagingen te geven — zo leer ik niet direct op te geven als iets niet lukt.',
    },
    {
      icon: '🎉',
      title: 'Hexion',
      desc: 'Lid van Hexion, de studentenvereniging voor IT-studenten aan PXL Hasselt. Een fijne gemeenschap van mensen met dezelfde interesses.',
    },
    {
      icon: '🎓',
      title: 'Lesgeven',
      desc: 'Ik gaf 3 maanden les in programmeren. Ik hoop dat ik meer mensen kan leren coderen zodat de nieuwe generatie zichzelf kan tonen via technologie.',
    },
  ],
}
</script>

<style scoped>
/* ── Lichtblauw thema tokens (enkel voor deze pagina) ── */
:root {
  --page-bg: #eef3f8;
  --page-card: #ffffff;
  --page-border: #cdd8e3;
  --page-accent: #3a7bd5;
  --page-text: #1a2a3a;
  --page-muted: #5a7080;
}

.home {
  padding-top: 80px;
  background: #eef3f8;
  color: #1a2a3a;
}

/* ── Hero ── */
.hero {
  position: relative;
  padding: 5rem 0 4rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(160deg, #dbeafe 0%, #eef3f8 60%);
}

.container {
  position: relative;
  z-index: 1;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #3a7bd5;
  background: rgba(58, 123, 213, 0.1);
  border: 1px solid rgba(58, 123, 213, 0.25);
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
}

h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #1a2a3a;
}

.hero-intro {
  max-width: 540px;
  color: #4a6070;
  font-size: 1rem;
  line-height: 1.8;
}

.hero-ctas {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.4rem;
  background: #3a7bd5;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: #2d65b8; transform: translateY(-1px); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.4rem;
  border: 1px solid #cdd8e3;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  color: #4a6070;
  background: #fff;
  transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover { border-color: #3a7bd5; color: #3a7bd5; }

/* ── Aside ── */
.hero-aside {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 230px;
  padding-top: 1rem;
}

.status-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(58, 123, 213, 0.08);
  border: 1px solid rgba(58, 123, 213, 0.2);
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 0.78rem;
  color: #3a7bd5;
  font-family: var(--font-mono);
}

.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #3a7bd5;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(58,123,213,0.3); }
  50%       { opacity: 0.8; box-shadow: 0 0 0 6px rgba(58,123,213,0); }
}

.quick-facts {
  background: #fff;
  border: 1px solid #cdd8e3;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.fact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #edf1f5;
  gap: 1rem;
}
.fact:last-child { border-bottom: none; }

.fact-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #8aa0b0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
.fact-value {
  font-size: 0.8rem;
  color: #1a2a3a;
  text-align: right;
}

/* ── Skills strip ── */
.skills-strip {
  border-top: 1px solid #cdd8e3;
  border-bottom: 1px solid #cdd8e3;
  padding: 1.25rem 0;
  background: #fff;
}

.strip-inner {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.chip {
  background: #f0f4f8;
  border: 1px solid #cdd8e3;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #4a6070;
  transition: border-color 0.2s, color 0.2s;
}
.chip:hover { border-color: #3a7bd5; color: #3a7bd5; }

/* ── Interests ── */
.interests { padding: 4rem 0; }

.interests h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  color: #1a2a3a;
}

.interest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff;
  border: 1px solid #cdd8e3;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: default;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.card:hover {
  border-color: #3a7bd5;
  box-shadow: 0 2px 12px rgba(58,123,213,0.1);
}

.interest-icon {
  display: block;
  font-size: 1.75rem;
  margin-bottom: 0.6rem;
}

.card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: #1a2a3a;
}

.card p {
  font-size: 0.85rem;
  color: #4a6070;
  line-height: 1.65;
}

/* ── CTA ── */
.cta-werkplek { padding-bottom: 3rem; }

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: #fff;
  border: 1px solid #cdd8e3;
  border-radius: 12px;
  padding: 2.5rem;
  flex-wrap: wrap;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}

.cta-box h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  margin: 0.5rem 0;
  color: #1a2a3a;
}

.cta-box p {
  color: #4a6070;
  max-width: 420px;
  font-size: 0.9rem;
  line-height: 1.65;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-aside { min-width: unset; }
  .cta-box { flex-direction: column; }
}
</style>
