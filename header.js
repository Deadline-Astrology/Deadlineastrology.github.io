document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Insert banner and navigation HTML
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

  // Toggle mobile menu
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Highlight current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("#main-nav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Collapse mobile menu when a link is clicked
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
});
