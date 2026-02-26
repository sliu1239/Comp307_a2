const cards = document.querySelectorAll(".hero-card");
const infoRow = document.getElementById("infoRow");
let activePanelId = null;

function hideAllPanels() {
  document.querySelectorAll(".info-panel").forEach(p => p.classList.add("hidden"));
  cards.forEach(c => c.classList.remove("selected"));
}

cards.forEach(card => {
  card.addEventListener("click", () => {
    const panelId = card.dataset.panel;

    // if clicking the same card again -> hide everything
    if (activePanelId === panelId && !infoRow.classList.contains("hidden")) {
      infoRow.classList.add("hidden");
      hideAllPanels();
      activePanelId = null;
      return;
    }

    // otherwise show row + the correct panel
    infoRow.classList.remove("hidden");
    hideAllPanels();

    document.getElementById(panelId).classList.remove("hidden");
    card.classList.add("selected");
    activePanelId = panelId;
  });
});