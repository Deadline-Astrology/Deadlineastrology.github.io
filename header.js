// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Create and append the banner image
  const bannerImg = document.createElement("img");
  bannerImg.src = "https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png";
  bannerImg.alt = "Deadline Astrology Banner";
  bannerImg.style.width = "100%"; // Optional: make it responsive
  bannerImg.style.display = "block"; // Optional: remove default inline spacing
  headerContainer.appendChild(bannerImg);

  // Create the navigation bar
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Readings</a>
    <a href="shop.html">Shop</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
  `;

  // Append the navigation bar to the header container
  headerContainer.appendChild(nav);

  // Set the active class based on the current page
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page from the URL
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
