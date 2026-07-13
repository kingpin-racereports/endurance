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
    title: "Watkins Glen 6 Hour",
    track: "Watkins Glen International",
    date: "2026-06-14",
    result: "P2 in class",
    summary: "A clean run through the six-hour endurance classic, the No. 21 taking the checkered flag second in class after a steady final stint.",
    image: "images/Watkins6hrKingpinBlueP2.jpg",
    file: "reports/template-report.html",
    accent: "#35b7e0"
  },
  {
    title: "Bathurst 12 Hour — The Chase",
    track: "Mount Panorama Circuit",
    date: "2026-05-24",
    result: "Race report",
    summary: "Down through the Esses and out onto Conrod, the No. 19 Porsche held its line as the field bunched up for the run to the top.",
    image: "images/T4Bathurst-P1_Pass_Taylor.jpg",
    file: "reports/template-report.html",
    accent: "#e0b23c"
  },
  {
    title: "Bathurst 12 Hour — Through the Dipper",
    track: "Mount Panorama Circuit",
    date: "2026-05-24",
    result: "Race report",
    summary: "The No. 19 threads the Dipper on Mount Panorama's downhill plunge, one of the most demanding sequences in sim racing.",
    image: "images/BathurstSagar_Dipper.jpg",
    file: "reports/template-report.html",
    accent: "#e0b23c"
  },
  {
    title: "SVM Sprint Round",
    track: "Sonoma Raceway",
    date: "2026-04-18",
    result: "Race report",
    summary: "The AMG GT3 held the door shut into the final complex, seeing off a GT4 gap challenge for the class result.",
    image: "images/SVMMark-Taylor_4_.jpg",
    file: "reports/template-report.html",
    accent: "#7fd0e8"
  }
];
