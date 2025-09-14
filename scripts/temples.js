// temples.js

// Current year (for ©)
const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

// Current date MM/DD/YYYY
const dateSpan = document.getElementById("currentDate");
const today = new Date();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const yyyy = today.getFullYear();
dateSpan.textContent = `${mm}/${dd}/${yyyy}`;

// Last modified (file timestamp)
const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified.split(",")[0];

// Hamburger toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.innerHTML = nav.classList.contains("open") ? "&#10006;" : "&#9776;";
});
