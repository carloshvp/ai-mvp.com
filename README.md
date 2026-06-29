# ai-mvp.com

Static first implementation for Carlos Hernandez's ai-mvp.com landing page.

## Preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Deployment

The folder is ready for a static host such as GitHub Pages. It includes:

- `CNAME` for `ai-mvp.com`
- `robots.txt`
- `sitemap.xml`
- `/chat/` placeholder route for moving the existing profile assistant out of the homepage

The page intentionally uses plain HTML, CSS, and a small JavaScript file so it can deploy without a build step.
