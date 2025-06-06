document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header>
      <a href="/index.html">
        <img src="/assets/deadline-banner.gif" 
             alt="Deadline Astrology Banner" 
             style="width:100%; max-height:300px; object-fit:cover; border-radius:12px;" />
      </a>
      <button id="menu-toggle" aria-label="Toggle menu">☰</button>
      <nav id="main-nav">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/services.html">Readings</a>
        <a href="/shop.html">Shop</a>
        <a href="/horoscopes/">Horoscopes</a>
        <a href="/contact.html">Contact</a>
      </nav>
    </header>
  `;

  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggleButton && nav) {
    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
