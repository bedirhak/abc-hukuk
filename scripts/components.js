document.addEventListener("DOMContentLoaded", function () {
  const header = `
   <header class="abc-header">
    <div class="abc-header-logo">
    </div>

    <nav class="abc-header-nav">
      <ul class="abc-header-nav-list">
        <li class="nav-links"><a class="nav-direct" href="./index.html">Anasayfa</a></li>
        <li class="nav-links"><a class="nav-direct" href="./about.html">Hakkımızda</a></li>
        <li class="nav-links"><a class="nav-direct" href="./services.html">Hizmetlerimiz</a></li>
        <li class="nav-links"><a class="nav-direct" href="#">Ekibimiz</a></li>
        <li class="nav-links"><a class="nav-direct" href="#">İletişim</a></li>
      </ul>
    </nav>
    <div class="abc-mobile-menu">
      <i class="fa-solid fa-bars"></i>
    </div>


  </header>
  `;

  const footer = `
     <footer>
    <div class="footer-container">
      <div class="footer-content-container">
        <div class="footer-logo">
        </div>
        <div class="footer-content">
          <h6>İletişim</h6>
          <div class="footer-each">
            <div><i class="fa-solid fa-location-dot"></i></div>
            <p>Merkezefendi Mah. Mevlana Cad. Tercüman Sitesi A-10 Blok Kat: 18 D: 74 Zeytinburnu / İstanbul</p>
          </div>
          <div class="footer-each">
            <div><i class="fa-solid fa-phone"></i></div>
            <p>yunusemre@abclegal.com.tr</p>
          </div>
          <div class="footer-each">
            <div><i class="fa-solid fa-envelope"></i></div>
            <p>+90 542 291 38 83</p>
          </div>
        </div>
      </div>
    </div>
    <div class="parallax-footer"></div>

  </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});
