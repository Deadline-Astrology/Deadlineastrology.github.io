document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header style="position: relative; display: inline-block; width: 100%;">
      <!-- BitWine Button Floating Over the Banner -->
      <div class="psychic-button" style="
        position: absolute;
        top: 10px;
        left: 10px;
        width: 151px;
        text-align: left;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.85);
        padding: 5px;
        border-radius: 4px;
      ">
        <a href="http://psychic.bitwine.com" style="color:#7897b4;font-size:11px;">Online Psychic Network</a><br>
        <a href="https://psychic.bitwine.com/psychics/497617-timeline_astrology?auid=497617&amp;ctx=button&amp;start_session=true">
          <img src="https://psychic.bitwine.com/presence/2/timeline_astrology.gif" style="padding:0;margin:0;border:0" alt="online psychic reading">
        </a>
      </div>

      <!-- Banner Image -->
      <a href="/index.html">
        <img src="/assets/Deadline-Banner.png" 
             alt="Deadline Astrology Banner" 
             class="site-banner" 
             style="width: 100%; height: auto; display: block;" />
      </a>

      <!-- Menu Toggle and Navigation -->
      <button id="menu-toggle" aria-label="Toggle menu" style="margin-top: 1rem;">☰</button>
      <nav id="main-nav" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 0.5rem;">
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
