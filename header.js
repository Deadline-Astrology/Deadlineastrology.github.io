// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Create and add the banner
  const bannerImg = document.createElement("img");
  bannerImg.src = "https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png";
  bannerImg.alt = "Deadline Astrology Banner";
  bannerImg.style.width = "100%"; 
  bannerImg.style.display = "block"; 

  headerContainer.appendChild(bannerImg);

  // Menu toggle functionality
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
