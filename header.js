document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header style="padding: 1rem; text-align: center;">
      <a href="/index.html">
        <img src="/assets/Deadline-Banner.png" 
             alt="Deadline Astrology Banner" 
             class="site-banner" 
             style="max-width: 100%; height: auto;" />
      </a>

      <!-- BitWine Psychic Button placed right under the image -->
      <div class="psychic-button" style="margin-top: 0.5rem; width:151px; margin-left: auto; margin-right: auto; text-align:left;">
        <a href="http://psychic.bitwine.com" style="color:#7897b4;font-size:11px;">Online Psychic Network</a><br>
        <a href="https://psychic.bitwine.com/psychics/497617-timeline_astrology?auid=497617&amp;ctx=button&amp;start_session=true">
          <img src="https://psychic.bitwine.com/presence/2/timeline_astrology.gif" style="padding:0;margin:0;border:0" alt="online psychic reading">
        </a>
      </div>

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
