const updatedDate = new Date("2026-01-10");
const now = new Date();
const days = Math.floor((now - updatedDate) / 86400000);

document.getElementById("updated").textContent =
  days === 0 ? "Updated today" : `Updated ${days} days ago`;

if (days > 7) {
  document.querySelector(".new")?.remove();
}

// QR Code
import("https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js").then(QR => {
  QR.toCanvas(document.getElementById("qr"), location.href);
});

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  document.getElementById("clock").textContent = `${date} • ${time}`;
}

updateClock();
setInterval(updateClock, 1000);
