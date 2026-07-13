/*
  REPORTS DATA
  ------------
  This is the only file you need to touch when a new race report goes into
  the repo. Copy an entry, fill in your own details, save, commit.

  file   – path to the report HTML file, relative to index.html
           (drop the report file into /reports/ and point to it here)
  image  – banner image for the card, relative to index.html
           (drop new photos into /images/)
  accent – optional hex color for the card's stripe/tag (defaults to the
           site's blue if left out)

  Newest report can go anywhere in the list — they're sorted by date
  automatically, most recent first.
*/

const REPORTS = [
  {
    title: "Spa 24hr presented by Falken Tire",
    track: "Circuit of Spa-Francorchamps",
    date: "2026-07-11",
    result: "P33 in class",
    summary: "Leading 1 lap of the race around the halfway point and despite some major setbacks the team completed the 24hrs of Spa",
    image: "images/spa24kingpinblue.png",
    file: "reports/Spa24h%20Kingpin%20Blue%20Race%20Report%20-%20Jul%2011.html",
    accent: "#35b7e0"
  },
];
