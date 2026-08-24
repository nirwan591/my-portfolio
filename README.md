# K.M.N.PREMATHILAKA Portfolio

A full-stack developer portfolio built with React 18 + Tailwind CSS.

## File structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Animated hero with typewriter effect
│   │   ├── About.jsx        # About section with values grid
│   │   ├── Stack.jsx        # Tech stack cards
│   │   ├── Projects.jsx     # Featured + grid projects
│   │   ├── Experience.jsx   # Tab-based work history
│   │   ├── Contact.jsx      # Contact form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # All content — edit this file!
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
└── package.json
```

## Quick start

```bash
npm install
npm start
```

## Customize

All content lives in `src/data/portfolioData.js` — update your name, stack, projects, and experience there.

To change colors, edit the theme in `tailwind.config.js`.

## Build for production

```bash
npm run build
```

Deploy the `build/` folder to Vercel, Netlify, or any static host.
