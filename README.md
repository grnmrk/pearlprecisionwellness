# Pearl Precision Wellness — Website

A clean, production-grade rebuild of [pearlprecisionwellness.com](https://www.pearlprecisionwellness.com/), built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open and go.

---

## Project Structure

```
pearl-precision-wellness/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles (CSS variables, responsive, animations)
├── js/
│   └── main.js         # Nav, scroll reveal, form handling
└── README.md
```

---

## Getting Started in VS Code

### 1. Open the project

```bash
code pearl-precision-wellness
```

### 2. Install the Live Server extension

- Open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
- Search for **Live Server** by Ritwick Dey
- Click **Install**

### 3. Launch the site

- Right-click `index.html` in the Explorer panel
- Select **Open with Live Server**
- Your browser opens at `http://127.0.0.1:5500`

The page auto-refreshes whenever you save a file.

---

## Push to GitHub

### First-time setup

```bash
cd pearl-precision-wellness

# Initialize git
git init
git add .
git commit -m "Initial commit: Pearl Precision Wellness site"

# Create a new repo on GitHub (github.com → New repository)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/pearl-precision-wellness.git
git branch -M main
git push -u origin main
```

### Deploy with GitHub Pages (free hosting)

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Under **Source**, select `main` branch, folder `/root`
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/pearl-precision-wellness/`

---

## Customization

| What | Where |
|---|---|
| Colors & fonts | `css/style.css` → `:root` tokens at the top |
| Hero text | `index.html` → `.hero__content` |
| Provider bio | `index.html` → `.provider` section |
| Contact form action | `js/main.js` → swap `setTimeout` for a real fetch to your backend or a service like Formspree |

### Connecting a real contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `js/main.js`, replace the `setTimeout` block with:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Accept': 'application/json' },
  body: new FormData(form)
});
```

---

## Tech

- **HTML5** semantic markup
- **CSS3** — custom properties, grid, clamp(), backdrop-filter, IntersectionObserver-driven reveal animations
- **Vanilla JS** — no dependencies
- **Google Fonts** — Cormorant Garamond + DM Sans

---

*Built with intention and precision.*
