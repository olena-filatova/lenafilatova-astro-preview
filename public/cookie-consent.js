// Cookie banner + consent-gated GA4 — same GA_ID and localStorage keys as the
// old Divhunt site (lf_cookie: "accepted" | "declined"), so returning
// visitors' choices carry over. GA loads ONLY after acceptance.
(function () {
  var GA_ID = 'G-0F8T9VQFQ0';
  window.lfLoadGA = function () {
    try {
      if (window.__lfGA || localStorage.getItem('lf_cookie') !== 'accepted') return;
      window.__lfGA = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', GA_ID);
    } catch (e) {}
  };
  function init() {
    var bar = document.getElementById('cookieBar');
    var choice = null;
    try { choice = localStorage.getItem('lf_cookie'); } catch (e) {}
    if (choice === 'accepted') { window.lfLoadGA(); return; }
    if (choice || !bar) return;
    bar.hidden = false;
    document.getElementById('cookieAccept').addEventListener('click', function () {
      try { localStorage.setItem('lf_cookie', 'accepted'); } catch (e) {}
      bar.hidden = true;
      window.lfLoadGA();
    });
    document.getElementById('cookieDecline').addEventListener('click', function () {
      try { localStorage.setItem('lf_cookie', 'declined'); } catch (e) {}
      bar.hidden = true;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
