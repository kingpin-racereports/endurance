(function () {
  const grid = document.getElementById("reportGrid");
  const emptyState = document.getElementById("emptyState");

  const list = (typeof REPORTS !== "undefined" ? REPORTS : []).slice();

  if (!list.length) {
    if (emptyState) emptyState.hidden = false;
  } else {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    list.forEach((r) => {
      const card = document.createElement("a");
      card.className = "report-card";
      card.href = r.file;
      card.target = "_blank";
      card.rel = "noopener";
      card.style.setProperty("--accent", r.accent || "#35b7e0");

      const dateLabel = isNaN(new Date(r.date))
        ? r.date || ""
        : formatter.format(new Date(r.date));

      card.innerHTML = `
        <div class="report-media" style="background-image:url('${r.image}')"></div>
        <div class="report-body">
          <div class="report-meta">
            <span class="report-track">${r.track || ""}</span>
            <span class="report-date">${dateLabel}</span>
          </div>
          <h3 class="report-title">${r.title}</h3>
          <p class="report-summary">${r.summary || ""}</p>
          <div class="report-footer">
            <span class="report-result">${r.result || ""}</span>
            <span class="report-link">Read report →</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
