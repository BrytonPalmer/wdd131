// temples.js

// Current year for footer
const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

// Today’s date MM/DD/YYYY
const dateSpan = document.getElementById("currentDate");
(() => {
  const now = new Date();
  const pad2 = n => String(n).padStart(2, "0");
  const mm = pad2(now.getMonth() + 1);
  const dd = pad2(now.getDate());
  const yyyy = now.getFullYear();
  dateSpan.textContent = `${mm}/${dd}/${yyyy}`;
})();

// Last modified date only MM/DD/YYYY
const lastModSpan = document.getElementById("lastModified");
(() => {
  
  let dt = new Date(document.lastModified);
  if (isNaN(dt)) {
    // Fallback to today if header is missing
    dt = new Date();
  }
  const pad2 = n => String(n).padStart(2, "0");
  const mm = pad2(dt.getMonth() + 1);
  const dd = pad2(dt.getDate());
  const yyyy = dt.getFullYear();
  lastModSpan.textContent = `${mm}/${dd}/${yyyy}`;
})();


const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.innerHTML = nav.classList.contains("open") ? "&#10006;" : "&#9776;";
});
