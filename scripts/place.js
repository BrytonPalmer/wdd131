// Set current year in footer
const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

// Set today's date in MM/DD/YYYY format for last modified
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

// current weather
const weatherSpan = document.getElementById("currentWeather");

const apiKey = 'd3ad8f353e76f577851637bea4a737d0'; // Replace with your actual OpenWeatherMap key
const lat = 38.9072; // Washington, DC latitude
const lon = -77.0369; // Washington, DC longitude

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    document.getElementById('weather').innerHTML = 
      `🌤️ ${city}: ${temp}°F, ${description}`;
  })
  .catch(error => console.error('Error fetching weather:', error));
