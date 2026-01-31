// LOADING
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);
});

// UPDATED DAYS
const updatedDate = new Date("2026-01-01");
const daysAgo = Math.floor((Date.now() - updatedDate) / 86400000);
document.getElementById("updatedDays").textContent =
  daysAgo === 0 ? "today" : `${daysAgo} days ago`;

// WHAT'S NEW
const version = "1.0.0";
const seenVersion = localStorage.getItem("seenVersion");

if (seenVersion !== version) {
  document.getElementById("whatsNewModal").classList.remove("hidden");
  localStorage.setItem("seenVersion", version);
}

function closeWhatsNew() {
  document.getElementById("whatsNewModal").classList.add("hidden");
}

document.getElementById("showWhatsNew").onclick = () => {
  document.getElementById("whatsNewModal").classList.remove("hidden");
};
