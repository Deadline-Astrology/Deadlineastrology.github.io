document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  // Insert banner and nav HTML
  headerContainer.innerHTML = `
    <a href="index.html">
      <img src="https://raw.githubusercontent.com/deadlineastrology/deadlineastrology.github.io/refs/heads/main/assets/Finalbanner.png"
           alt="Deadline Astrology Banner"
           style="width:100%; display:block; border:2px solid white; border-radius:10px; margin-bottom:20px;" />
    </a>
    <button id="menu-toggle" aria-label="Toggle menu" class="glow-toggle">&#9776;</button>

    <nav id="main-nav" class="menu-transition">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Readings</a>
      <a href="shop.html">Shop</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;

  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  // Add animation class on toggle
  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggleButton.classList.toggle("active-toggle");
  });

  // Highlight active link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Close menu after click on mobile
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
        toggleButton.classList.remove("active-toggle");
      }
    });
  });
});
