# Portfolio — Wim Geelen

Een persoonlijk portfolio gebouwd met **Vue 3** + **Vite**.

## Snel starten

```bash
# 1. Installeer dependencies
npm install

# 2. Start de dev server (http://localhost:5173)
npm run dev

# 3. Build voor productie
npm run build
```

---

## Projectstructuur

```
portfolio-wim/
├── index.html                  # HTML entry point (fonts laden hier)
├── vite.config.js              # Vite configuratie
├── package.json
└── src/
    ├── main.js                 # Vue app bootstrap
    ├── App.vue                 # Root component (NavBar + RouterView + Footer)
    ├── assets/
    │   └── main.css            # Design tokens, reset, utility classes
    ├── router/
    │   └── index.js            # Routes definitie
    ├── components/
    │   ├── NavBar.vue          # Navigatie bovenaan
    │   └── FooterBar.vue       # Footer onderaan
    └── views/
        ├── Home.vue            ← ✏️ Jouw hero + intro aanpassen
        ├── Over.vue            ← ✏️ Bio en tijdlijn aanpassen
        ├── Projecten.vue       ← ✏️ Jouw projecten toevoegen
        └── WerkplekLeren.vue   ← ✏️ Rollenlijst, logboek, opdrachten, AIM
```

---

## Aanpassen

Zoek overal naar het commentaar **`✏️`** — dat zijn de plekken waar je jouw eigen info invult.

### Home.vue
- `info.intro` — je introductietekst
- `info.facts` — opleiding, locatie, focus, hobby's
- `info.skills` — jouw technologieën
- `info.interests` — interesses met icon + beschrijving

### Over.vue
- Bio alinea's (middelste sectie)
- `timeline` — jouw tijdlijn

### Projecten.vue
- `projecten` array — titel, beschrijving, tech-stack, GitHub/live links

### WerkplekLeren.vue
- `rollenlijst` — jouw rollen
- `logboek` — wekelijkse entries
- `opdrachten` — opdrachten met status
- `aimReflecties` — AIM reflectie tekst

---

## Design tokens (kleuren aanpassen)

In `src/assets/main.css` staan alle design tokens bovenaan:

```css
:root {
  --accent: #c8f060;    /* lime-geel — jouw signature kleur */
  --accent-2: #f0a060;  /* oranje accent */
  --bg: #0f0f0f;        /* achtergrond */
  /* ... */
}
```

Verander `--accent` naar jouw favoriete kleur om de hele look te veranderen.

---

## Deployen

```bash
npm run build
# Kopieer de `dist/` map naar je host (GitHub Pages, Netlify, Vercel, ...)
```

Voor GitHub Pages: zet `base: '/jouw-repo-naam/'` in `vite.config.js`.
