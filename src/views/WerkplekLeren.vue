<template>
  <div class="werkplek">
    <div class="container">

      <!-- Semester switcher -->
      <div class="semester-switch">
        <button :class="['sem-btn', { active: semester === 1 }]" @click="semester = 1">WPL 1</button>
        <button :class="['sem-btn', { active: semester === 2 }]" @click="semester = 2">WPL 2</button>
      </div>

      <!-- ══════════════════════════════════════════════ -->
      <!-- WPL 1                                          -->
      <!-- ══════════════════════════════════════════════ -->
      <template v-if="semester === 1">
        <div class="page-header">
          <span class="tag">PXL Hogeschool · WPL1</span>
          <h1>Werkplek <em>Leren 1</em></h1>
          <p class="subtitle">Semester 1 — Graduaat Programmeren</p>
        </div>

        <div class="section-nav">
          <button v-for="s in wpl1Sections" :key="s.id" :class="['nav-btn', { active: activeSection1 === s.id }]"
            @click="activeSection1 = s.id">{{ s.label }}</button>
        </div>

        <!-- Rollenlijst -->
        <div v-if="activeSection1 === 'rollenlijst'" class="section">
          <p class="section-intro">De officiële opleidingsresultaten (OLR's) van het graduaat, ingedeeld per rol.</p>
          <div v-for="groep in rollenlijst" :key="groep.rol" class="rol-groep">
            <h3 class="rol-titel">{{ groep.rol }}</h3>
            <div class="olr-list">
              <div class="olr-item" v-for="olr in groep.items" :key="olr.code">
                <span class="olr-code">{{ olr.code }}</span>
                <p>{{ olr.omschrijving }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Logboek -->
        <div v-if="activeSection1 === 'logboek'" class="section">
          <p class="section-intro">Weekoverzicht van activiteiten, evaluaties en opdrachten.</p>
          <div class="logboek-table-wrap">
            <table class="logboek-table">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Periode</th>
                  <th>Inhoud</th>
                  <th>Evaluaties</th>
                  <th>Opdrachten</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entry in logboek" :key="entry.week" :class="{ vakantie: entry.vakantie }">
                  <td class="week-col">{{ entry.week }}</td>
                  <td class="periode-col">{{ entry.periode }}</td>
                  <td><span v-if="entry.vakantie" class="vakantie-label">{{ entry.inhoud }}</span><span v-else>{{
                    entry.inhoud }}</span></td>
                  <td>{{ entry.evaluaties }}</td>
                  <td>{{ entry.opdrachten }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Opdrachten -->
        <div v-if="activeSection1 === 'opdrachten'" class="section">
          <p class="section-intro">Overzicht van uitgevoerde opdrachten met persoonlijke reflectie.</p>
          <div class="opdrachten-list">
            <div class="opdracht-card" v-for="o in opdrachten" :key="o.titel">
              <h3>{{ o.titel }}</h3>
              <div class="opdracht-blokken">
                <div class="blok"><span class="blok-label">Omschrijving</span>
                  <p>{{ o.omschrijving }}</p>
                </div>
                <div class="blok"><span class="blok-label">Uitdaging</span>
                  <p>{{ o.uitdaging }}</p>
                </div>
                <div class="blok"><span class="blok-label">Wat ik geleerd heb</span>
                  <p>{{ o.geleerd }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AIM -->
        <div v-if="activeSection1 === 'aim'" class="section">
          <p class="section-intro">Reflectie op WPL1 aan de hand van het AIM-model.</p>
          <div class="aim-intro card">
            <p>{{ aim.intro }}</p>
          </div>
          <div class="aim-grid">
            <div class="aim-card" v-for="item in aim.elementen" :key="item.titel">
              <span class="aim-label">{{ item.label }}</span>
              <h3>{{ item.titel }}</h3>
              <p>{{ item.inhoud }}</p>
            </div>
          </div>
          <div class="kernkwadrant card">
            <h3>Kernkwadrant</h3>
            <div class="kk-grid">
              <div class="kk-cel kk-kwaliteit"><span class="kk-type">Kernkwaliteit</span>
                <p>Zelfstandigheid</p>
              </div>
              <div class="kk-cel kk-valkuil"><span class="kk-type">Valkuil</span>
                <p>Vraag weinig hulp</p>
              </div>
              <div class="kk-cel kk-allergie"><span class="kk-type">Allergie</span>
                <p>In team werken</p>
              </div>
              <div class="kk-cel kk-uitdaging"><span class="kk-type">Uitdaging</span>
                <p>Weinig hulp nodig</p>
              </div>
            </div>
            <div class="kk-acties">
              <p v-for="actie in aim.acties" :key="actie">{{ actie }}</p>
            </div>
          </div>
        </div>
      </template>

      <!-- ══════════════════════════════════════════════ -->
      <!-- WPL 2                                          -->
      <!-- ══════════════════════════════════════════════ -->
      <template v-if="semester === 2">
        <div class="page-header">
          <span class="tag">PXL Hogeschool · WPL2</span>
          <h1>Werkplek <em>Leren 2</em></h1>
          <p class="subtitle">Semester 2 — Graduaat Programmeren</p>
        </div>

        <div class="section-nav">
          <button v-for="s in wpl2Sections" :key="s.id" :class="['nav-btn', { active: activeSection2 === s.id }]"
            @click="activeSection2 = s.id">{{ s.label }}</button>
        </div>

        <!-- Case beschrijving -->
        <div v-if="activeSection2 === 'case'" class="section">
          <p class="section-intro">Beschrijving van het project van WPL2.</p>
          <div class="wpl2-blokken">
            <div class="wpl2-card">
              <h3>Bedrijf</h3>
              <p>Wij Moesten voor ons project werken aan platform voor <strong>Karting Genk</strong></p>
            </div>
            <div class="wpl2-card">
              <h3>Projectomschrijving</h3>
              <p>
                In ons project werkten we samen aan een digitaal platform voor Karting Genk en hun
                opkomende studentencompetitie. Via het platform kunnen studenten van verschillende scholen
                hun team vertegenwoordigen.
              </p>
              <br>
              <p>
                Ons programmeerteam kreeg als taak een backend te ontwikkelen, samen met een bijhorende
                frontend in de vorm van een dashboard. Via dit dashboard kunnen medewerkers gebruikers
                toevoegen en rollen toekennen, teams en scholen beheren en de verschillende logins op de
                website bekijken. Daarnaast kunnen teamcaptains hun eigen teamracers beheren.
              </p>
              <br>
              <p>
                Binnen het project lag de focus voornamelijk op de backend, al werden ook verschillende
                frontendfunctionaliteiten uitgewerkt. Via de frontend konden gebruikers, teams, scholen,
                logins, evenementen en merchandise beheerd worden. Gebruikers hadden bovendien de mogelijkheid
                om een account te registreren, hun e-mailadres te valideren en hun wachtwoord te wijzigen.
              </p>
              <br>
              <p>
                Veel van deze functionaliteiten werden geïntegreerd in de website die door het designteam
                ontwikkeld werd. Op deze website konden bezoekers merchandise bestellen, deelnemende teams
                bekijken en informatie terugvinden over lopende en toekomstige evenementen.
              </p>
            </div>
          </div>
        </div>

        <!-- Mijn aandeel -->
        <div v-if="activeSection2 === 'aandeel'" class="section">
          <p class="section-intro">Beschrijving van mijn aandeel in WPL2.</p>
          <div class="wpl2-blokken single-card">
            <div class="wpl2-card">
              <h3>Mijn aandeel</h3>
              <p>
                In dit project lag mijn aandeel zowel aan de backend- als frontendkant. We hebben verschillende
                technieken toegepast en geleerd om tot een volledig werkend resultaat te komen.
              </p>
              <br>
              <p>
                Op backendvlak heb ik voornamelijk gewerkt met C# en ASP.NET in Visual Studio 2026. Deze backend bevat
                meerdere endpoints waarmee het dashboard communiceert met de database.
                Ik heb grotendeels de controllers, services en repositories ontwikkeld en werkend gekregen.
              </p>
              <br>
              <p>
                Aan de frontend hebben we gewerkt met Vue en JavaScript.
                Ik heb de basis van de website opgezet, waaronder de algemene structuur, routing en eerste styling.
                Daarnaast heb ik de eerste versie van de dashboardpagina ontwikkeld, waarin gebruikers, teams, scholen
                en logins beheerd kunnen worden.
              </p>
              <br>
              <p>
                Ook heb ik het tokensysteem opgezet, waardoor alleen geautoriseerde gebruikers kunnen inloggen en de
                website kunnen gebruiken. In ons geval mocht de gewone gebruiker niet op het dashboard, maar wel op de
                website. Dit systeem heb ik ook geïntegreerd met de backend, waardoor de beveiliging van de applicatie
                sterk is verbeterd.
              </p>
            </div>
          </div>
        </div>

        <!-- AIM Reflectie WPL2 -->
        <div v-if="activeSection2 === 'aim'" class="section">
          <p class="section-intro">Eindreflectie op WPL2 — officieel ingediend document.</p>
          <div class="pdf-link-wrap">
            <a :href="reflectiePdf" download="Opdracht eindreflectie WPL2_Geelen_Wim.pdf" class="pdf-download-btn">
              ↓ Download eindreflectie WPL2
            </a>
          </div>
        </div>

      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import reflectiePdf from '../assets/Opdracht eindreflectie WPL2_Geelen_Wim.pdf'

const semester = ref(1)

const wpl1Sections = [
  { id: 'rollenlijst', label: 'Rollenlijst' },
  { id: 'logboek', label: 'Logboek' },
  { id: 'opdrachten', label: 'Opdrachten' },
  { id: 'aim', label: 'AIM Reflectie' },
]
const wpl2Sections = [
  { id: 'case', label: 'Case beschrijving' },
  { id: 'aandeel', label: 'Mijn aandeel' },
  { id: 'aim', label: 'AIM Reflectie' },
]

const activeSection1 = ref('rollenlijst')
const activeSection2 = ref('case')

// ── WPL1 DATA ─────────────────────────────────────────────

const rollenlijst = [
  {
    rol: 'Ontwerper',
    items: [
      { code: 'OLR1', omschrijving: 'De gegradueerde bereidt de realisatie van een softwareproject voor.' },
      { code: 'OLR2', omschrijving: 'De gegradueerde maakt op basis van de analyse een onderbouwd voorstel voor het ontwerp, de programmeertaal en de methodiek. De gegradueerde stemt het voorstel af met de softwareontwikkelaar, analist en/of projectleider.' },
    ]
  },
  {
    rol: 'Programmeur',
    items: [
      { code: 'OLR3', omschrijving: 'De gegradueerde realiseert softwareapplicaties en gegevensstructuren planmatig binnen de context van het projectplan, de beschikbare tools en de vooropgestelde methodiek.' },
      { code: 'OLR4', omschrijving: 'De gegradueerde is medeverantwoordelijk voor de eigen digitale werkomgeving en draagt bij tot de gedeelde infrastructuur die nodig is voor het ontwikkelen, testen en in productie brengen van projecten.' },
      { code: 'OLR5', omschrijving: 'De gegradueerde programmeert softwaretoepassingen volgens de standaarden en afspraken binnen de organisatie.' },
      { code: 'OLR6', omschrijving: 'De gegradueerde gaat in overleg na of het opgeleverde product onderhoud en/of aanpassingen nodig heeft en voert dit projectmatig uit.' },
    ]
  },
  {
    rol: 'Tester',
    items: [
      { code: 'OLR7', omschrijving: 'De gegradueerde gaat volgens testscenario\'s de werking en functionaliteit van de gerealiseerde code na en verbetert deze op basis van feedback.' },
    ]
  },
  {
    rol: 'Communicator / Teamspeler',
    items: [
      { code: 'OLR8', omschrijving: 'De gegradueerde werkt constructief en actief samen in een multidisciplinair team en participeert actief tijdens overlegmomenten.' },
      { code: 'OLR9', omschrijving: 'De gegradueerde communiceert en rapporteert efficiënt over het geleverde werk, aangepast aan het doelpubliek en gebruikt hiervoor het gepaste Engelstalige vakjargon.' },
      { code: 'OLR10', omschrijving: 'De gegradueerde documenteert de zelf ontwikkelde applicaties op een adequate en overzichtelijke manier gebruikmakend van een kennisdatabank.' },
    ]
  },
  {
    rol: 'Levenslang lerende IT-professional',
    items: [
      { code: 'OLR11', omschrijving: 'De gegradueerde onderhoudt zijn deskundigheidsniveau door relevante duurzame IT- en maatschappelijke ontwikkelingen actief op te volgen.' },
      { code: 'OLR12', omschrijving: 'De gegradueerde is zelfkritisch, ontwikkelt de nodige zelfkennis en gebruikt deze om zijn persoonlijke en professionele groei te bevorderen.' },
      { code: 'OLR13', omschrijving: 'De gegradueerde handelt deontologisch en duurzaam, en houdt rekening met de veiligheids- en privacyrichtlijnen.' },
    ]
  },
]

const logboek = [
  { week: '1', periode: '22/09 – 26/09', inhoud: 'Introductie werkplekleren · Wat is programmeren · Introductie POP, X-Factor & SDG\'s · Introductie Scratch', evaluaties: '', opdrachten: '' },
  { week: '2', periode: '29/09 – 03/10', inhoud: 'Oriënteringstraject · Installatie Git & GitHub · Introductie Git & GitHub', evaluaties: 'LockDownBrowser', opdrachten: '' },
  { week: '3', periode: '06/10 – 10/10', inhoud: 'POP motivatie, kernkwadranten en reflecteren · Labo: Git & GitHub', evaluaties: '', opdrachten: 'Scratch' },
  { week: '4', periode: '13/10 – 17/10', inhoud: 'POP planning & studieaanpak', evaluaties: 'Git & GitHub', opdrachten: 'Reflecteren' },
  { week: '5', periode: '20/10 – 24/10', inhoud: 'Gastsprekers · EPOS reflectie van oriënteringstraject', evaluaties: 'Gastsprekers', opdrachten: 'Planning' },
  { week: '—', periode: '', inhoud: 'Herfstvakantie', evaluaties: '', opdrachten: '', vakantie: true },
  { week: '6', periode: '03/11 – 07/11', inhoud: 'POP leren analyseren', evaluaties: '', opdrachten: '' },
  { week: '7', periode: '10/11 – 14/11', inhoud: 'POP carrièrekompas · Feedback evaluatie', evaluaties: 'C# Console', opdrachten: 'POP carrièrekompas' },
  { week: '8', periode: '17/11 – 21/11', inhoud: 'POP personal branding · Introductie curriculum vitae · Introductie portfolio', evaluaties: '', opdrachten: 'Feedback evaluatie C# Console' },
  { week: '9', periode: '24/11 – 28/11', inhoud: 'Instroombevraging · Feedback evaluatie', evaluaties: 'HTML & CSS', opdrachten: '' },
  { week: '10', periode: '01/12 – 05/12', inhoud: 'Documenteren en debuggen in C# · Labo: Debugging', evaluaties: 'Debugging', opdrachten: 'Feedback evaluatie debugging' },
  { week: '11', periode: '08/12 – 12/12', inhoud: 'Labo: WPF · Gastsprekers', evaluaties: 'SDG\'s', opdrachten: '' },
  { week: '12', periode: '15/12 – 19/12', inhoud: 'POP kernkwadranten · Afwerken curriculum vitae · Afwerken labo WPF', evaluaties: '', opdrachten: 'Curriculum Vitae' },
  { week: '—', periode: '', inhoud: 'Kerstvakantie', evaluaties: '', opdrachten: '', vakantie: true },
  { week: '13', periode: '05/01 – 09/01', inhoud: 'Infosessie Thalento', evaluaties: 'C# WPF', opdrachten: 'Portfolio' },
  { week: '14', periode: '12/01 – 16/01', inhoud: 'Introductie Corda · Feedback evaluatie C# WPF', evaluaties: 'Inhaalmoment', opdrachten: '' },
]

const opdrachten = [
  { titel: 'Scratch', omschrijving: 'Een Scratch-project maken waarbij je een object een vallend project moest laten ontwijken, met extra\'s naar eigen keuze.', uitdaging: 'Leuke extra\'s bedenken om aan het project toe te voegen.', geleerd: 'Hoe ik onderzoek doe aan de hand van brainstormen over leuke ideeën.' },
  { titel: 'Git & GitHub', omschrijving: 'Een PE om te tonen hoe je Git en GitHub correct gebruikt.', uitdaging: 'Persoonlijk geen grote uitdaging — ik had hier al veel ervaring in.', geleerd: 'Bevestiging van bestaande kennis over versiebeheer.' },
  { titel: 'POP: Planning', omschrijving: 'Een planning maken voor het volledige semester.', uitdaging: 'Op voorhand bedenken wat ik wanneer zou doen.', geleerd: 'Nadenken over mijn weekplanning en studieaanpak.' },
  { titel: 'C# Console', omschrijving: 'Een PE om te zien waar we stonden met C# en of we een stappenplan konden volgen met Git.', uitdaging: 'De stappen in Git correct en in de juiste volgorde volgen.', geleerd: 'In kleine, afgebakende stappen werken.' },
  { titel: 'HTML & CSS', omschrijving: 'Een PE om te zien waar we stonden met HTML en CSS.', uitdaging: 'Geen zware technische uitdaging, al verliep het niet optimaal door een persoonlijke omstandigheid.', geleerd: 'Dat goede voorbereiding vóór een belangrijk moment altijd loont.' },
  { titel: 'Debugging', omschrijving: 'Een PE waarbij we een programma moesten debuggen in beperkte tijd.', uitdaging: 'Persoonlijk geen grote uitdaging — debugging was al een vertrouwd onderdeel.', geleerd: 'Bevestiging van bestaande debuggingskills in C#.' },
  { titel: 'Curriculum Vitae', omschrijving: 'Een CV maken in de vorm van een website.', uitdaging: 'Een mooi en professioneel design uitwerken.', geleerd: 'We kregen geen feedback op deze taak, waardoor het leermoment beperkt bleef.' },
]

const aim = {
  intro: 'In het afgelopen semester van WPL1 heb ik veel bijgeleerd over het veld van IT. Persoonlijk was er veel herhaling, maar je kan nooit te veel leren. Hieronder reflecteer ik op het semester via het AIM-model.',
  elementen: [
    { label: 'Bijzonder positief', titel: 'Gastsprekers', inhoud: 'Ik vond het leuk om veel gastsprekers te hebben gehad die ons konden warmmaken voor een carrière in IT. Dit gaf een goed perspectief en zorgde dat ik meer motivatie heb gekregen om goed door te werken.' },
    { label: 'Minder leuk', titel: 'Onduidelijke verwachtingen', inhoud: 'Ik vond het moeilijk te zien wat de lectoren wilden uit sommige taken. Als je vroeg hadden alle lectoren andere meningen. Het was frustrerend om niet duidelijk te weten wat er verwacht werd.' },
    { label: 'Nieuw inzicht', titel: 'Eén mening volgen', inhoud: 'Ik neem het inzicht mee dat ik bij twijfel best één lector zijn mening vraag en die consequent volg, in plaats van meerdere meningen naast elkaar te leggen.' },
    { label: 'Persoonlijk succes', titel: 'Motivatie herwonnen', inhoud: 'Mijn grootste succes is dat mijn motivatie terug is en dat ik deze kan aanhouden. Dat is voor mij de belangrijkste winst van dit semester.' },
  ],
  acties: [
    'Ik kan zelf opzoeken hoe ik dingen moet doen en kan proberen mijn leerbaarheid meer te gebruiken.',
    'Ik vraag al wat meer hulp als ik het nodig heb.',
    'Ik moet meer de tijd nemen om een vraag goed te begrijpen en vroeger met taken beginnen.',
    'Ik wil leren samenwerken in een team en ga proberen taken niet altijd volledig alleen te doen.',
  ],
}
</script>

<style scoped>
.werkplek {
  padding-top: 110px;
  padding-bottom: 4rem;
}

/* ── Semester switch ── */
.semester-switch {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.sem-btn {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);
}

.sem-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.sem-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.page-header {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--text);
}

h1 em {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--accent);
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ── Tab nav ── */
.section-nav {
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
  overflow-x: auto;
}

.nav-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-muted);
  padding: 0.65rem 1rem;
  white-space: nowrap;
  transition: color var(--transition), border-color var(--transition);
}

.nav-btn:hover {
  color: var(--text);
}

.nav-btn.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.section-intro {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

/* ── WPL2 case blokken ── */
.wpl2-blokken {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}

.single-card {
  grid-template-columns: 1fr;
}

.wpl2-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color var(--transition);
}

.wpl2-card:hover {
  border-color: var(--accent);
}

.wpl2-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text);
  margin-bottom: 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

/* ── Rollenlijst ── */
.rol-groep {
  margin-bottom: 1.75rem;
}

.rol-titel {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border);
}

.olr-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.olr-item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.8rem 1rem;
}

.olr-code {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent);
  padding-top: 1px;
}

.olr-item p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ── Logboek ── */
.logboek-table-wrap {
  overflow-x: auto;
}

.logboek-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.logboek-table th {
  text-align: left;
  padding: 0.6rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.67rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-dim);
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.logboek-table td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
  vertical-align: top;
  line-height: 1.55;
}

.logboek-table tr:last-child td {
  border-bottom: none;
}

.logboek-table tr:not(.vakantie):hover td {
  background: var(--surface);
}

.logboek-table tr.vakantie td {
  background: var(--bg-3);
  color: var(--text-dim);
  font-style: italic;
}

.week-col {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent) !important;
  white-space: nowrap;
}

.periode-col {
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

/* ── Opdrachten ── */
.opdrachten-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.opdracht-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem 1.75rem;
  transition: border-color var(--transition);
}

.opdracht-card:hover {
  border-color: var(--accent);
}

.opdracht-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text);
  margin-bottom: 0.9rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.opdracht-blokken {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.blok-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.blok p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
}

/* ── AIM ── */
.aim-intro {
  margin-bottom: 1.25rem;
  padding: 1.25rem 1.5rem;
}

.aim-intro p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.75;
}

.aim-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.aim-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  border-top: 3px solid var(--accent);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.aim-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.aim-card h3 {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text);
}

.aim-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
}

.kernkwadrant {
  padding: 1.5rem;
}

.kernkwadrant h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text);
  margin-bottom: 1rem;
}

.kk-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.kk-cel {
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.kk-cel:nth-child(1) {
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.kk-cel:nth-child(2) {
  border-bottom: 1px solid var(--border);
}

.kk-cel:nth-child(3) {
  border-right: 1px solid var(--border);
}

.kk-type {
  font-family: var(--font-mono);
  font-size: 0.63rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.kk-kwaliteit .kk-type {
  color: #2e7d32;
}

.kk-valkuil .kk-type {
  color: #b45309;
}

.kk-allergie .kk-type {
  color: #c0392b;
}

.kk-uitdaging .kk-type {
  color: var(--accent);
}

.kk-cel p {
  font-size: 0.85rem;
  color: var(--text);
  font-weight: 600;
}

.kk-acties {
  border-top: 1px solid var(--border);
  padding-top: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.kk-acties p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}

.kk-acties p::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.75rem;
}

.card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

/* ── PDF link ── */
.pdf-link-wrap {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
}

.pdf-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.pdf-download-btn:hover {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .opdracht-blokken {
    grid-template-columns: 1fr;
  }

  .aim-grid {
    grid-template-columns: 1fr;
  }

  .kk-grid {
    grid-template-columns: 1fr;
  }

  .kk-cel {
    border-right: none !important;
  }

  .olr-item {
    grid-template-columns: 42px 1fr;
  }
}
</style>