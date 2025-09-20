

// // current weather
// const weatherSpan = document.getElementById("currentWeather");

// const apiKey = 'd3ad8f353e76f577851637bea4a737d0'; // Replace with your actual OpenWeatherMap key
// const lat = 38.9072; // Washington, DC latitude
// const lon = -77.0369; // Washington, DC longitude

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const temp = data.main.temp;
//     const description = data.weather[0].description;
//     const city = data.name;
//     document.getElementById('weather').innerHTML = 
//       `🌤️ ${city}: ${temp}°F, ${description}`;
//   })
//   .catch(error => console.error('Error fetching weather:', error));

  // wind chill

// Static values for demonstration (Imperial units)
const temperature = 71.8; // degrees Fahrenheit
const windSpeed = 10.34;    // miles per hour

// Wind Chill Calculation (Imperial formula)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1); // Rounded to one decimal
}

// Display wind chill if conditions are viable
const windChillElement = document.getElementById("windChill");
if (temperature <= 50 && windSpeed > 3) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  windChillElement.textContent = "N/A";
}

// Display current year and last modified date in the footer
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `
  <p>&copy; ${currentYear} 🗽 Bryton Palmer 🗽</p>
  <p> United States of America</p> 
  <p> Last Modified: ${lastModified}</p>
`;
