document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Build HTML string for banner and nav
  headerContainer.innerHTML = `
    <a href="index.html">
      <img src="https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png"
           alt="Deadline Astrology Banner" style="width:100%; display:block; border:2px solid white; border-radius:10px; margin-bottom:20px;" />
    </a>
    <button id="menu-toggle" aria-label="Toggle menu">&#9776;</button>

    <nav id="main-nav">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Readings</a>
      <a href="shop.html">Shop</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;

  // Add toggle functionality
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Set up active class functionality for menu links
  const links = document.querySelectorAll("#main-nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      // Remove active class from all links
      links.forEach(l => l.classList.remove("active"));
      
      // Add active class to clicked link
      link.classList.add("active");
    });
  });
});
