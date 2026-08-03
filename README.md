# Krishna Nand Gupta — Portfolio Website

A personal portfolio website built with vanilla HTML5, CSS3, and JavaScript
— no frameworks, no build step. Built as the final project for the
Codomax Digital Solutions Web Development Internship (14-day program).

**Live site:** _add your GitHub Pages URL here_
(e.g. https://another281200-dev.github.io/portfolio/)

**Author:** Krishna Nand Gupta — B.Tech CSE, Ambalika Institute of
Management and Technology, Lucknow (expected 2027)
[GitHub](https://github.com/another281200-dev) ·
[LinkedIn](https://www.linkedin.com/in/krishna-nand-gupta-894629385/)

---

## Features

- Responsive layout built with Flexbox and CSS Grid (mobile, tablet, desktop)
- Semantic, accessible HTML with ARIA-friendly form labeling
- Custom design system: CSS custom properties for color, type, and spacing
- Sections: Home, About, Skills, Projects, Experience, Education, Contact
- Client-side contact form validation (name, email format, message length)
  with inline error messages and a success/error status banner
- Scroll-reveal animations via IntersectionObserver, with a
  `prefers-reduced-motion` fallback for accessibility
- Scroll-to-top button and active-nav-link highlighting, both throttled
  with `requestAnimationFrame` for performance
- Downloadable resume (PDF)

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6+, DOM APIs, IntersectionObserver)
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (labels) via
  Google Fonts
- Deployed with GitHub Pages

## Project Structure

```
portfolio/
├── index.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── Krishna_Nand_Gupta_Resume.pdf
```

## Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/another281200-dev/portfolio.git
   cd portfolio
   ```
2. Open `index.html` directly in your browser, or serve it with a live
   server extension in VS Code for auto-reload during development.

## Deployment

Deployed via **GitHub Pages**:
1. Pushed to the `main` branch on GitHub
2. Enabled under repo **Settings → Pages** → Deploy from branch → `main` / `root`
3. Live at the URL listed at the top of this README

## Design Notes

The visual design follows a "field notes" theme rather than a generic
template look — a warm paper background, a serif display face (Fraunces)
paired with a technical monospace label style (JetBrains Mono), and flat
left-accent index cards instead of boxed dashboard tiles. Each section
carries a small path-style label (e.g. `~/projects`) that mirrors its
real URL anchor.

## Progress Log

| Day | Focus |
|---|---|
| 1 | Environment setup, Git/GitHub init, project skeleton |
| 2 | Home, Hero, About sections (semantic HTML) |
| 3 | Navigation, Skills, Education, Contact form, Footer |
| 4 | CSS styling — typography, color, spacing, buttons |
| 5 | Responsive layout with Flexbox and CSS Grid |
| 6 | Media queries — tablet and mobile breakpoints |
| 7 | JavaScript basics — scroll-to-top, DOM events |
| 8 | Projects section with real project cards |
| 9 | Resume download + Experience section |
| 10 | Contact form validation |
| 11 | Animations, transitions, smooth scrolling |
| 12 | Git workflow + GitHub Pages deployment |
| 13 | Responsiveness testing, bug fixes, performance optimization |
| 14 | Final documentation, demo video, and submission |

## Known Limitations

- The contact form validates and displays a success state client-side
  only — it does not currently send real emails (no backend). A future
  iteration could connect it to a service like Formspree or EmailJS.
- Tested primarily in Chrome and Edge; should be checked in Firefox and
  Safari before wider use.

## License

MIT — free to reference for learning purposes.
