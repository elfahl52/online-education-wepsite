<div align="center">

# 🎓 EduSpark — Online Education Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

A **fully responsive** static landing page for an online education platform.  
Built with pure HTML, CSS & JavaScript — no frameworks, no build tools.

[🌐 Live Demo](https://online-education-wepsite.vercel.app/) • [📁 Browse Files](#) • [🐛 Report Bug](#)

</div>

---

## 📸 Preview

<img width="1920" height="4508" alt="EduSpark Preview" src="https://github.com/user-attachments/assets/a0b35a12-c556-4108-b121-b350c7c65a31" />

---

## ✨ Features

- 🧭 **Fixed floating navbar** with scroll effect & mobile hamburger menu
- 🎯 **Hero section** with stats bar (50K+ students, 200+ courses…)
- 📖 **About section** with animated floating illustration
- 👨‍🏫 **Teachers section** — glassmorphism cards with social links
- 📚 **Courses section** — dark theme cards with ratings & enroll button
- ⭐ **Reviews section** — student testimonials
- 📬 **Footer** with quick links, contact info & social icons
- 📱 **Fully responsive** — works on all screen sizes

---

## 🗂️ Project Structure

```
📦 project/
├── 📄 index.html         # Main page
├── 📁 css/
│   └── style.css         # All styles & animations
├── 📁 js/
│   └── main.js           # Nav toggle, scroll effects
└── 📁 img/
    ├── teacher1.png
    ├── course1.png
    └── ...
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/eduspark.git

# 2. Open in browser
open index.html

# Or serve locally
npx serve .
```

No `npm install` needed. Just open and go. ✅

---

## 🎨 Color Palette

| Variable | Color | Preview |
|----------|-------|---------|
| `--pink` | `#e72884` | ![#e72884](https://img.shields.io/badge/-%23e72884-e72884?style=flat-square) |
| `--violet` | `#7c3aed` | ![#7c3aed](https://img.shields.io/badge/-%237c3aed-7c3aed?style=flat-square) |
| `--accent` | `#f59e0b` | ![#f59e0b](https://img.shields.io/badge/-%23f59e0b-f59e0b?style=flat-square) |
| `--dark` | `#0b0b18` | ![#0b0b18](https://img.shields.io/badge/-%230b0b18-0b0b18?style=flat-square) |

---

## 📐 Sections Overview

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#home` | Full-viewport intro with stats & CTA buttons |
| About | `#about` | Platform info with animated illustration |
| Teachers | `#teachers` | Instructor cards with social links |
| Courses | `#courses` | Course cards with ratings & pricing |
| Reviews | `#reviews` | Student testimonials |
| Footer | `#contact` | Links, contact info & social icons |

---

## 📱 Responsive Breakpoints

```css
/* Mobile nav */
@media (max-width: 820px) { ... }

/* Stacked layout */
@media (max-width: 768px) { ... }

/* Auto-fit grids — no breakpoint needed */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

---

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, Grid, Custom Properties, Animations
- **Vanilla JS** — DOM manipulation, scroll events
- **[Font Awesome 6.5](https://fontawesome.com)** — Icons
- **[Google Fonts](https://fonts.google.com)** — Syne + DM Sans

---

## 📄 License

© 2026 **Khaled Elfahl**. All rights reserved.
