Online Education Website
README — Project Documentation
By Khaled Elfahl  |  Version 1.0  |  2026

1. Project Overview
EduSpark is a fully static, responsive online education landing page built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. It's designed as a polished prototype for an online learning platform, showcasing courses, instructors, testimonials, and more.

2. Tech Stack
Languages
    • HTML5 — semantic structure and markup
    • CSS3 — layout, animations, responsive design
    • JavaScript (ES6+) — interactivity and scroll behavior
External Resources
    • Font Awesome 6.5 (CDN) — icons throughout the UI
    • Google Fonts — Syne (headings) + DM Sans (body)
    • No npm, no build step, no bundler required

3. File Structure
File / Folder
Description
index.html
Main entry point — full single-page layout
css/style.css
All styles: variables, layout, components, responsive
js/main.js
Navigation toggle, scroll effects, active link tracking
img/
Image assets (illustrations, teachers, courses, students)

4. Page Sections
4.1 Header / Navbar
    • Fixed pill-shaped navbar that floats above content
    • Shrinks and gains shadow on scroll (header-scrolled class)
    • Hamburger menu collapses to drawer on mobile (< 820px)
    • Active link highlights as the user scrolls between sections
4.2 Hero Section  (#home)
    • Full-viewport hero with gradient background and floating illustration
    • Live stats bar: 50K+ students, 200+ courses, 98% satisfaction, 40+ tutors
    • Feature chips: Trending Courses, Free Trial, Certified, Learn Anywhere
    • Two CTA buttons: Explore Courses and Learn More
4.3 About Section  (#about)
    • Two-column layout: animated SVG illustration + text content
    • Floating badges (Top Rated, Trending) overlay the visual card
    • Three feature items with gradient icon tiles
    • Floating animation (keyframe: floatY) on the illustration
4.4 Teachers Section  (#teachers)
    • Glassmorphism cards with avatar, name, role, and social links
    • Hover: card lifts and border glows pink
    • Social icon links: Facebook, Twitter, LinkedIn, GitHub/Instagram
4.5 Courses Section  (#courses)
    • Dark radial-gradient background with 3-column auto-fit grid
    • Each card has a custom SVG thumbnail, badge, star rating, price
    • Hover: image zooms (scale 1.15) and card lifts
    • Enroll button with gradient and glow on hover
4.6 Reviews Section  (#reviews)
    • Dark layered background with decorative quote marks
    • Three testimonial cards with reviewer avatar, quote, name, role
    • Hover: card lifts and border gains purple tint
4.7 Footer  (#contact)
    • 4-column grid: Brand + socials, Quick Links, Courses list, Contact info
    • Social icon circles with gradient hover effect
    • Ambient blur blobs as background decoration

5. Quick Setup
No installation required. Simply open the file in a browser:
open index.html
Or serve locally with any static server:
npx serve .
python -m http.server 8080
Then visit: http://localhost:8080

6. JavaScript Behavior  (js/main.js)
Feature
How It Works
Scroll effect
window.onscroll adds .header-scrolled to <header> after 40px scroll
Hamburger toggle
Click toggles nav.open class; icon swaps fa-bars ↔ fa-xmark
Close on outside click
document click listener removes .open if target is outside nav/hamburger
Close on link click
Each nav <a> fires closeMenu() on click
Active nav link
IntersectionObserver-style scroll listener updates .active class

7. CSS Variables
Variable
Value & Usage
--pink
#e72884 — primary accent, buttons, headings
--violet
#7c3aed — secondary accent, gradients, icons
--accent
#f59e0b — star ratings, highlights
--dark
#0b0b18 — page background
--card-bg
rgba(255,255,255,0.04) — glassmorphism cards
--gray
#94a3b8 — body text, subtitles
--white
#ffffff — primary text on dark backgrounds

8. Responsive Breakpoints
Breakpoint
Changes Applied
≤ 820px
Hamburger replaces navbar; nav becomes full-width dropdown drawer
≤ 768px
About section stacks vertically (image above text); review cards center-align
Auto-fit grids
Teachers, Courses, Reviews use repeat(auto-fit, minmax(...)) for fluid columns

9. Image Assets  (img/)
The project uses SVG-based inline illustrations (no external image files required in the live demo version). For the original template, the following image files are referenced:
File
Used In
mediamodifier-school-supplies-*.jpg
Hero section background
Learning languages-cuate.png
About section illustration
teacher1.png / teacher2.png / teacher3.png
Teacher cards
course1.png / course2.png / course3.png
Course card thumbnails
student1.png / student2.png / student3.png
Review / testimonial cards
Tip: Replace SVG placeholders with real photos by updating the <img> src attributes in index.html.

10. Customization Guide
Change Colors
Edit the :root block in css/style.css:
:root {
  --pink: #e72884;    /* primary */
  --violet: #7c3aed; /* secondary */
}
Add a Course
Duplicate a .course-card block in index.html and update: thumbnail SVG or <img>, course name, rating, description, and price.
Add a Teacher
Duplicate a .teacher-card block and update the avatar SVG initials, name, role, and social links.

11. Credits & License
    • Project built by Khaled Elfahl
    • Icons: Font Awesome 6.5 (fontawesome.com)
    • Fonts: Google Fonts — Syne & DM Sans
    • Illustrations: Custom inline SVGs
© 2026 Khaled Elfahl. All rights reserved.
