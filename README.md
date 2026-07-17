# Nilesh Peiris — Cyber Security Portfolio

A modern, premium, dark-themed personal portfolio website for **Mathias Hewage Nilesh Thisun Peiris**, Cyber Security undergraduate at Edith Cowan University.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| react-type-animation | Typing effect |
| react-intersection-observer | Scroll reveal |

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone or copy this project
cd nilesh-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 📁 Project Structure

```
nilesh-portfolio/
├── public/
│   ├── favicon.svg
│   ├── _redirects          # Netlify SPA routing
│   └── Nilesh_Peiris_Resume.pdf   ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Terminal.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── ResumeSection.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ParticleCanvas.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── data/
│   │   └── portfolioData.js    ← ALL CONTENT IS HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

## ✏️ Customisation

**All content is managed in a single file: `src/data/portfolioData.js`**

Update:
- `personal` — name, bio, email, phone, social links
- `education` — academic history
- `experience` — professional experience
- `projects` — featured projects
- `certifications` — credentials
- `stats` — achievement counters
- `terminalContent` — interactive terminal responses

### Adding your resume PDF

Place your resume PDF at:
```
public/Nilesh_Peiris_Resume.pdf
```

The download button links to `/Nilesh_Peiris_Resume.pdf` by default.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Set framework: **Vite**
4. Deploy ✓

### Netlify
1. Push to GitHub
2. Import to [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish dir: `dist`
5. Deploy ✓

### Cloudflare Pages
1. Push to GitHub
2. New project → Connect GitHub
3. Build command: `npm run build`
4. Build output dir: `dist`
5. Deploy ✓

### GitHub Pages
1. Update `vite.config.js`: `base: '/your-repo-name/'`
2. Build: `npm run build`
3. Deploy `dist/` to `gh-pages` branch

## 🎨 Design Features

- **Dark Cyber Security Theme** — Black/navy background with cyan neon accents
- **Glassmorphism Cards** — Frosted glass effect with backdrop blur
- **Particle Network** — Animated canvas particle system
- **Typing Animation** — Cycling professional taglines
- **Animated Skill Bars** — Scroll-triggered with smooth fill
- **Education Timeline** — Alternating animated timeline
- **Experience Timeline** — Left-rail achievement timeline
- **Interactive Terminal** — Fully functional console with tab completion & history
- **Loading Screen** — Cyber boot sequence animation
- **Scroll Progress** — Gradient progress indicator
- **Back to Top** — Clipped cyber button

## 📄 Sections

1. **Hero** — Intro, typing animation, CTAs
2. **Stats** — Animated achievement counters
3. **About** — Bio, values, career objective, contact info
4. **Education** — ECU, ECC, St. Sebastian's timeline
5. **Experience** — Project lead & volunteer timeline
6. **Skills** — Tabbed categories with animated bars
7. **Projects** — Featured cards with expandable details
8. **Terminal** — Interactive `whoami`, `skills`, `experience`, `education`, `projects`
9. **Certifications** — Cisco & Google credential gallery
10. **Resume** — Preview mockup + PDF download
11. **Contact** — Form + contact details

---

**Designed & Developed by Mathias Hewage Nilesh Thisun Peiris**
