// Simple cookie consent using localStorage.
// Include cookie-consent.css and this script in your pages (index.html already references these).
(function() {
  const key = 'kbs_cookie_consent_v1';

  function hasConsent() { return localStorage.getItem(key) === 'accepted'; }
  function setConsent(value) { localStorage.setItem(key, value ? 'accepted' : 'declined'); }

  if (hasConsent()) return; // already accepted — do nothing

  // Create banner
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>We use a small set of cookies. Necessary cookies are required to run the site. Analytics and optional cookies are only used with your consent.</p>
    <div class="cookie-actions">
      <button class="cookie-accept">Accept</button>
      <button class="cookie-decline">Decline</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Button handlers
  banner.querySelector('.cookie-accept').addEventListener('click', () => {
    setConsent(true);
    // If you later add analytics, load it here (only after consent).
    banner.remove();
  });

  banner.querySelector('.cookie-decline').addEventListener('click', () => {
    setConsent(false);
    banner.remove();
  });
})();