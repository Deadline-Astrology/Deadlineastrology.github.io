document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  headerContainer.innerHTML = `
    <header>
      <a href="index.html">
        <img src="assets/Finalbanner.png" alt="Deadline Astrology Banner" style="width:100%; border-radius:12px;" />
      </a>
      <button id="menu-toggle" aria-label="Toggle menu">☰</button>
      <nav id="main-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Readings</a>
        <a href="shop.html">Shop</a>
        <a href="/blog/">Blog</a>
        <a href="contact.html">Contact</a>
      </nav>
    </header>
  `;

  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
      }
    });
  });
});
