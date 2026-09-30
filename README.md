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

- **Name, tagline, bio, skills:** edit the header, hero and About sections in `index.html`.
- **Projects:** each `<li><article class="card">` is one card. Copy a block to add one, delete it to remove one. Replace the CSS-pattern `.thumb` div with an `<img class="thumb-img" loading="lazy" alt="…">` (example in the comment above the grid), or use `alt=""` if the image is purely decorative.
- **Other work, notes, experience:** each `<li>` is an entry; delete the whole section (and its nav link) if unused.
- **Contact:** update the email and profile links. Keep `rel="noopener noreferrer"` on links with `target="_blank"`.
- **Colours and spacing:** change the custom properties at the top of `styles.css`. Light and dark palettes are defined separately. Re-check contrast if you change them.
- **Metadata:** update `<title>`, description and Open Graph tags in `<head>`, and add `assets/og-image.png` (1200×630). Add `cv.pdf` or change that link.

## Theme

The site follows the system light/dark setting. With JavaScript enabled, a header button cycles system → light → dark and remembers the choice in `localStorage`.

## Deploying

Upload the files as-is to any static host:

- **GitHub Pages:** push to a repository, then Settings → Pages → deploy from the branch root. Add a `CNAME` file for a custom domain.
- **Netlify / Cloudflare Pages / Vercel:** connect the repo; leave the build command empty and set the publish directory to `/`.
- **Any web server:** copy the files to the web root.

To preview locally: `python3 -m http.server` and open <http://localhost:8000>.
