// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Create an image element
  const bannerImg = document.createElement("img");
  bannerImg.src = "https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png";
  bannerImg.alt = "Deadline Astrology Banner";
  bannerImg.style.width = "100%"; // Optional: make it responsive
  bannerImg.style.display = "block"; // Optional: remove default inline spacing

  // Append the image to the header container
  headerContainer.appendChild(bannerImg);
});
