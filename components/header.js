(function() {
    const basePath = '';

    const head = document.head;
    if (!document.querySelector('link[rel="icon"]')) {
        head.insertAdjacentHTML('beforeend', `<link rel="icon" type="image/png" href="${basePath}assets/images/global/favicon.png">`);
    }

    document.write(`
    <div id="preloader">
        <div class="preloader-logo" style="display:flex; align-items:center;"><img src="${basePath}assets/images/global/Logo.png" alt="Morningcom" class="logo-preloader"></div>
    </div>
    <div id="cursor"></div>
    <div id="cursor-ring"></div>

    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobileMenu">
        <button class="mobile-close" id="menuClose">✕</button>
        <a href="index.html">Accueil</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="equipe.html">Équipe</a>
        <a href="simulation.html">Simulateur</a>
        <a href="contact.html" style="color:var(--gold)">Contact</a>
    </div>

    <!-- NAV -->
    <nav id="navbar">
        <a href="index.html" class="nav-logo" style="display:flex; align-items:center;">
            <img src="assets/images/global/Logo.png" alt="Morningcom" class="logo-nav">
        </a>
        <ul class="nav-links">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="equipe.html">Équipe</a></li>
            <li><a href="simulation.html">Simulateur</a></li>
        </ul>
        <a href="contact.html" class="nav-cta">Nous contacter</a>
        <button class="burger" id="burgerBtn"><span></span><span></span><span></span></button>
    </nav>
    `);
})();

