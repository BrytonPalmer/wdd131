        
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "McAllen Texas",
    location: "McAllen, Texas",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Layton Utah",
    location: "Layton, Utah",
    dedicated: "2024, June, 16",
    area: 93539,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/layton-utah-temple/layton-utah-temple-45417-main.jpg"
  }
];


function renderTemples(filteredTemples) {
  const gallery = document.getElementById("temple-gallery");
  gallery.innerHTML = "";
  gallery.classList.add("grid-container");

  filteredTemples.forEach((temple, index) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const info = document.createElement("div");
    info.classList.add("temple-info");

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const date = document.createElement("p");
    date.textContent = `Dedication: ${temple.dedicated}`;

    const size = document.createElement("p");
    size.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

    info.appendChild(location);
    info.appendChild(date);
    info.appendChild(size);

    const img = document.createElement("img");
    img.setAttribute("data-src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.classList.add("lazy");

    card.appendChild(name);
    card.appendChild(info);
    card.appendChild(img);
    gallery.appendChild(card);
  });


// ✅ Lazy load AFTER images are added
const lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
}


// Initial render
renderTemples(temples);

// Filtering functions
function filterOld() {
  return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
}

function filterNew() {
  return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
}

function filterLarge() {
  return temples.filter(t => t.area > 90000);
}

function filterSmall() {
  return temples.filter(t => t.area < 10000);
}

// Event listeners
document.getElementById("home").addEventListener("click", () => renderTemples(temples));
document.getElementById("old").addEventListener("click", () => renderTemples(filterOld()));
document.getElementById("new").addEventListener("click", () => renderTemples(filterNew()));
document.getElementById("large").addEventListener("click", () => renderTemples(filterLarge()));
document.getElementById("small").addEventListener("click", () => renderTemples(filterSmall()));



//Current Year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Current Date (formatted as Month Day, Year)
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
document.getElementById("currentDate").textContent = formattedDate;

// Last Modified (from the document metadata)
document.getElementById("lastModified").textContent = document.lastModified;
