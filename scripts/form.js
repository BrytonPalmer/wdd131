const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productSelect");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

document.addEventListener("DOMContentLoaded", () => {
   // Retrieve count from localStorage
  let count = localStorage.getItem("reviewCount");

  // Convert to number and increment
  count = count ? parseInt(count) + 1 : 1;

  // Save updated count
  localStorage.setItem("reviewCount", count);

  // Display it on the page
  document.getElementById("reviewCount").textContent = count;
});
