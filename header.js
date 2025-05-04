// header.js
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <div class="banner-container">
      <img src="https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/updatedbanner1.png" alt="Deadline Astrology Banner" class="banner-image" />
    </div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Readings</a>
      <a href="shop.html">Shop</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = headerHTML;
  }
});
