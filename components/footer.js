window.handleNewsletter = function(form) {
    const btn = form.querySelector('button');
    const input = form.querySelector('input[type=email]');
    
    // 1. Indicateur visuel immédiat (Tick vert)
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    btn.style.background = '#25D366';
    btn.disabled = true;
    
    // 2. Disparition du champ email
    input.style.opacity = '0';
    input.style.transform = 'translateX(-20px)';
    
    // 3. Message de succès final après un court délai
    setTimeout(() => {
        const container = document.getElementById('newsletter-status');
        if (container) {
            container.innerHTML = `
                <div style="display:flex; align-items:center; gap:12px; color:#25D366; font-size:14px; font-weight:500; padding:12px; border:1px solid rgba(37, 211, 102, 0.2); background:rgba(37, 211, 102, 0.05); animation: fadeIn 0.5s ease forwards;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Inscription réussie !
                </div>
            `;
        }
    }, 800);
    
    return true; // Laisse le formulaire partir vers l'iframe
};

(function() {
    const basePath = '';

    document.write(`
    <footer>
        <div class="footer-top">
            <div>
                <div class="footer-brand" style="margin-bottom:12px;"><img src="assets/images/global/Logo.png"
                        alt="Morningcom" class="logo-footer"></div>
                <p class="footer-tagline">Agence de communication basée à Dakar, spécialisée en stratégie de marque,
                    création et marketing digital pour l'Afrique francophone.</p>
                <div class="socials">
                    <a href="https://www.linkedin.com/company/morning-com/" class="social-link" title="LinkedIn" target="_blank">
                        <img src="assets/images/global/linkedin.png" alt="LinkedIn" style="width: 16px; height: 16px; object-fit: contain; filter: brightness(0) invert(1);">
                    </a>
                    <a href="https://www.instagram.com/morningcom1?igsh=cm9kd3dhZnd1ZHIw" class="social-link" title="Instagram" target="_blank">
                        <img src="assets/images/global/instagram.png" alt="Instagram" style="width: 16px; height: 16px; object-fit: contain; filter: brightness(0) invert(1);">
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576414455905" class="social-link" title="Facebook" target="_blank">
                        <img src="assets/images/global/facebook.png" alt="Facebook" style="width: 16px; height: 16px; object-fit: contain; filter: brightness(0) invert(1);">
                    </a>
                </div>
            </div>
            <div class="footer-col">
                <h5>Menu</h5>
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="portfolio.html">Nos Réalisations</a></li>
                    <li><a href="equipe.html">Notre équipe</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h5>Contact</h5>
                <ul>
                    <li><a href="tel:+221774859494">(+221) 77 485 94 94</a></li>
                    <li><a href="mailto:contact@morningcom.agency">contact@morningcom.agency</a></li>
                    <li><a href="#">Dakar — Sénégal</a></li>
                </ul>
                <a href="https://wa.me/221774859494" target="_blank" class="wa-btn"
                    style="display:inline-flex; align-items:center; gap:10px; margin-top:24px; padding:12px 20px; background:#25D366; color:#FFF; text-decoration:none; font-weight:500; font-family:'DM Sans', sans-serif; font-size:13px; border-radius:4px; transition:opacity .3s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.96.55 3.84 1.57 5.48L2.04 22l4.64-1.54c1.58.95 3.4 1.49 5.33 1.49 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.35 14.18c-.23.64-1.28 1.19-1.8 1.25-.41.05-1 .11-2.93-.69-2.31-.96-3.8-3.32-3.92-3.48-.12-.16-.94-1.25-.94-2.39 0-1.14.59-1.7.8-1.92.21-.23.46-.28.61-.28s.32 0 .44.01c.14.01.32-.05.49.36.18.44.61 1.48.67 1.6.05.11.09.24.01.41-.07.16-.16.29-.28.43-.13.15-.28.39.43-.13.13-.27.28-.11.55.15.26.68 1.13 1.48 1.84.99.88 1.82 1.15 2.07 1.28.25.13.39.11.53-.05.15-.17.65-.75.82-1.01.17-.26.34-.22.57-.13.23.09 1.46.69 1.71.81.25.13.41.19.47.29.06.11.06.65-.17 1.29z" />
                    </svg>
                    WhatsApp
                </a>
            </div>
            <div class="footer-col" style="min-width: 280px;">
                <h5>Newsletter</h5>
                <div id="newsletter-status" style="transition: all 0.5s ease;">
                    <p style="font-size:13px; color:var(--cream-2); line-height:1.6; margin-bottom:16px;">Inscrivez-vous
                        pour recevoir de nos nouvelles et nos conseils.</p>
                    <form action="https://c607fb5a.sibforms.com/serve/MUIFAKT5jKCoNFxA2M6n4_Wh1DJU0TgOoKWz8PNka-jbiEUJCvU_STdQg6K3xTXsuPjMs7bsniqFy2o80vgeaWbEzxTjub5eqyDXRaO7fV_Hep6EBAsat934O2fdsGCTodc3SfddmgyoZjsfoqim4dtjtAEXq16uos4sOs_Verz9P28Fx82vlmcKQQTIj3_ejWWaC40p9r4Szj1xBQ==" 
                          method="POST" 
                          target="sib_iframe"
                          onsubmit="return handleNewsletter(this);"
                          style="display:flex; gap:8px; align-items: center;">
                        <input type="email" name="EMAIL" placeholder="Votre email"
                            style="padding:12px 16px; background:var(--dark-3); border:1px solid rgba(0,0,0,.1); color:var(--cream); font-family:'DM Sans'; font-size:13px; outline:none; width:100%; transition: all 0.4s ease;"
                            required>
                        <input type="text" name="email_address_check" value="" style="display:none;">
                        <input type="hidden" name="locale" value="fr">
                        <button type="submit"
                            style="padding:12px 20px; background:#FFF; color:#000; border:none; cursor:none; font-family:'DM Sans'; font-weight:500; transition: all 0.3s ease; min-width: 60px; display:flex; align-items:center; justify-content:center;">OK</button>
                    </form>
                </div>
                <iframe name="sib_iframe" style="display:none;"></iframe>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© <span id="year"></span> Morningcom. Tous droits réservés.</p>
            <a href="politique-confidentialite.html">Politique de confidentialité</a>
        </div>
    </footer>
    `);
})();
