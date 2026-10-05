# Personal portfolio (static site)

Plain HTML, CSS and a little vanilla JavaScript. No build step, no dependencies. All content is placeholder text: search for `EDIT` comments or "Your Name", `example.com` and `your-username`.

## Files

```
index.html        All content and markup (single page)
styles.css        Design tokens (custom properties), layout, components
script.js         Optional: theme toggle and footer year. Site works without it
assets/favicon.svg  Placeholder favicon
```

## Customising

- **Name and intro:** edit the header, hero and Contact sections in `index.html`.
- **Projects:** each `<li data-kind="…">` is one project. `data-kind` (games, music, tools; space-separate for several; if you rename them, update the filter buttons and the `:has()` rules in `styles.css`) drives the CSS-only filter buttons. Add `class="project-feature"` to make one span the full width. Each diagram is inline SVG so it follows the theme; swap it for an `<img loading="lazy" alt="…">` if you have real photos or screenshots.
- **Side quests and contact:** these are deliberately quieter than the projects. Each `<li>` is an entry; delete a whole section and its nav link if unused. Keep status labels as a symbol plus a word.
- **Contact:** update the email and profile links. Keep `rel="noopener noreferrer"` on links with `target="_blank"`.
- **Colours and spacing:** change the custom properties at the top of `styles.css`. Light and dark palettes are defined separately. Re-check contrast if you change them.
- **Metadata:** update `<title>`, description and Open Graph tags in `<head>`, and add `assets/og-image.png` (1200×630).

## Theme

The site follows the system light/dark setting. With JavaScript enabled, a header button cycles system → light → dark and remembers the choice in `localStorage`. There is also a hidden phosphor theme: enter the Konami code (↑ ↑ ↓ ↓ ← → ← → B A).

## Deploying

Upload the files as-is to any static host:

- **GitHub Pages:** push to a repository, then Settings → Pages → deploy from the branch root. Add a `CNAME` file for a custom domain.
- **Netlify / Cloudflare Pages / Vercel:** connect the repo; leave the build command empty and set the publish directory to `/`.
- **Any web server:** copy the files to the web root.

To preview locally: `python3 -m http.server` and open <http://localhost:8000>.
