# Personal Component Playground 🎨

A styled showcase of **5 reusable UI components** — a little design toolkit, each with a live preview and a copy-paste usage example.

Built with **plain HTML, CSS, and vanilla JavaScript** — no build step, no dependencies.

## The 5 components
1. **Button** — primary / secondary / ghost / disabled, in three sizes.
2. **Card** — media header, tag, title, body, and footer actions.
3. **Modal** — accessible dialog: backdrop, close button, Esc-to-close, and focus returns to the trigger.
4. **Form input** — labelled field with helper text and live validation.
5. **Navbar** — the page's own sticky nav *is* the component, shown again standalone.

## Extras
- **Consistent styling** via shared CSS custom properties.
- **Light / dark theme toggle** that remembers your choice (`localStorage`).
- **A usage snippet** shown under every component.

## Run locally
No API calls, so you can open `index.html` directly — or serve it:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or: `npx serve .`

## Deploy
No build step, so hosting is drag-and-drop:
- **Netlify** — drag this folder onto <https://app.netlify.com/drop>.
- **Vercel** — run `vercel` in this folder (framework preset: *Other*, no build command).
- **GitHub Pages** — push this folder as a repo and enable Pages on `main`.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Component sections with live demos + usage snippets |
| `styles.css` | Shared design system and all component styles |
| `app.js` | Theme toggle, modal behaviour, input validation |
