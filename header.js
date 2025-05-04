// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Create banner image
  const bannerImg = document.createElement("img");
  bannerImg.src = "https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png";
  bannerImg.alt = "Deadline Astrology Banner";
  bannerImg.style.width = "100%";
  bannerImg.style.display = "block";
  headerContainer.appendChild(bannerImg);

  // Create mobile menu toggle button
  const menuToggle = document.createElement("button");
  menuToggle.innerHTML = "☰";
  menuToggle.id = "menu-toggle";
  menuToggle.setAttribute("aria-label", "Toggle menu");
  headerContainer.appendChild(menuToggle);

  // Create nav element
  const nav = document.createElement("nav");
  nav.id = "main-nav";
  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Readings</a>
    <a href="shop.html">Shop</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
  `;
  headerContainer.appendChild(nav);

  // Toggle nav visibility on small screens
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
