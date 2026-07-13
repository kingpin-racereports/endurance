# Kingpin Racing — eSports Division site

A simple static front end for the team's iRacing race reports. No build step,
no framework — just HTML, CSS, and a small JS file. Designed to be hosted
directly on GitHub Pages.

## Structure

```
index.html          the page itself
style.css            styling
script.js             renders the report cards, nothing else
reports-data.js      <- the file you edit to add a new report
images/                banners, photos, logo
reports/                your actual race report HTML files go here
```

## Adding a new race report

1. Drop the report's HTML file into `reports/`.
2. Drop a banner photo for it into `images/` (the wide 16:9-ish crops used
   elsewhere in the site work best).
3. Open `reports-data.js` and copy/paste one entry in the `REPORTS` array,
   then fill in:
   - `title`, `track`, `date` (YYYY-MM-DD sorts correctly), `result`, `summary`
   - `image` — path to the photo you just added
   - `file` — path to the report HTML you just added
   - `accent` — optional hex color for the card's stripe (leave it out to
     use the site's default blue)
4. Commit and push. GitHub Pages picks it up automatically.

Reports are sorted newest-first automatically — no need to reorder the list.

## Publishing on GitHub Pages

Push this folder to a repo, then in the repo's **Settings → Pages**, set the
source to the branch/folder this lives in (root, or `/docs` if you place it
there). The site will be live at `https://<username>.github.io/<repo>/`.

## Notes

- The four report entries already in `reports-data.js` are placeholders
  built around the sample photos — swap in your real reports and details.
- `reports/template-report.html` is just a stand-in target so the sample
  cards have somewhere to link to; replace it with real report files.
