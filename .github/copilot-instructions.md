# Copilot Instructions for Portfolio_Champ_Winai

## Project Overview
A single-page personal portfolio website showcasing Winai Boonyen's education, skills, and project experience. Built with vanilla HTML, CSS, and JavaScript—no frameworks or build tools.

## Architecture & Structure

### Single-Page Design Pattern
- **Navigation**: Hash-based anchors (`#home`, `#portfolio`, `#skill`, etc.)
- **Sections**: Self-contained vertical layout with fixed 900px max-width centered container
- **No routing**: All content loads at once; JavaScript handles smooth scrolling and visual toggles

### Key Components

| File | Purpose | Key Details |
|------|---------|------------|
| [index.html](index.html) | Page structure & content | 378 lines; semantic markup with section IDs for navigation |
| [styles.css](styles.css) | Design & layout | 680 lines; minimalist Poppins font; Flexbox/Grid layouts |
| [script.js](script.js) | Interactivity | Scroll detection, dark mode toggle, scroll-to-top button |

## Design Conventions

### Color Scheme & Typography
- **Background**: `#f3f6fa` (soft light)
- **Accent**: `#b85c5c` (rose/mauve for headers and hover states)
- **Font**: Poppins (Google Fonts), weights: 300/400/600/700
- **Sections**: 95% width, max 900px, centered with 1px border `#e3e7ed`

### Layout Patterns
- **Hero section**: Uses `.hero-flex` with `gap: 48px` for responsive two-column layout
- **Cards**: `.portfolio-card`, `.education-card`, `.skill-card` with consistent styling
- **Progress bars**: CSS-based inside skill cards (`.progress-bar` and `.progress` classes)
- **Grid layouts**: Portfolio (3 columns), certificates (3 columns on desktop)

## Styling Examples from Codebase

### Common Utilities
```css
/* Container centering pattern */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Minimalist card design */
.portfolio-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e3e7ed;
}

/* Soft hover effect (not aggressive animations) */
nav ul li a:hover {
  background: #e9eef3;
  color: #b85c5c;
}
```

## JavaScript Conventions

### Three Core Features
1. **Sticky Header** (`scroll` event listener): Adds `.sticky` class when `window.scrollY > 100`
2. **Dark Mode Toggle** (`#toggleDarkMode` button): Toggles `.dark-mode` class on body; icon switches from 🌙 to ☀️
3. **Scroll-to-Top** (`#scrollToTopBtn`): Shows/hides at `scrollTop > 20`; uses `document.body.scrollTop = 0`

### Pattern: Event-Driven Interactivity
- Vanilla DOM manipulation (no jQuery/frameworks)
- Event listeners directly attached to elements by ID
- Toggle classes on `document.body` or `document.querySelector()` as single source of truth

## Content & Multilingual Notes
- **Primary content**: Thai (สวัสดีครับ...) with English translations
- **Comments in code**: Mixed Thai/English
- Keep both languages in parallel sections
- Image assets stored in `Photo/` directory (profile picture, certificates, social icons)

## Common Modification Points

### Adding New Portfolio Projects
Location: [index.html](index.html#L143) portfolio grid section
```html
<div class="portfolio-card">
  <h3>Project Name</h3>
  <p>Brief description</p>
  <a href="URL" target="_blank">View Project</a>
</div>
```

### Updating Skills Progress
Location: [index.html](index.html#L235) skills-section
- Modify skill name in `<span>`
- Adjust percentage in `<p>` description
- CSS classes: `.progress.html`, `.progress.python`, etc. define bar widths in styles.css

### Dark Mode Styling
Location: [styles.css](styles.css)—search for `body.dark-mode`
- Override background and text colors for dark theme
- Maintain contrast ratio for accessibility

## Development Notes

### No Build Process
- Direct file serving (no npm, webpack, or build tools)
- CSS and JS changes apply immediately on refresh
- Images referenced as relative paths `Photo/`

### Accessibility
- `aria-label="Toggle dark mode"` on button element
- Alt text on all images (profile, certificates, social icons)
- Semantic HTML5 (header, section, nav, footer elements)

### Browser Compatibility
- Modern CSS (Grid, Flexbox, CSS Variables via custom properties)
- Vanilla ES6 JavaScript (supports modern browsers only)
- No polyfills or legacy support

## Quick Links to Key Patterns
- **Navigation structure**: [index.html header](index.html#L15)
- **Section template**: [Portfolio section](index.html#L140)
- **Color palette**: [styles.css](styles.css#L1)
- **Dark mode logic**: [script.js](script.js#L25)

---
*Last updated: February 2026*
