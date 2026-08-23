(function () {
  "use strict";
  window.KF = window.KF || {};

  /* Küçük yardımcılar — DOM kısayolları ve biçimlendirme. */
  KF.Ar = {
    $: function (secici) { return document.querySelector(secici); },
    $$: function (secici) { return Array.prototype.slice.call(document.querySelectorAll(secici)); },
    sayi: function (n) { return (Math.round(n * 100) / 100).toLocaleString("tr-TR"); },
    para: function (n) { return "\u20ba" + (Math.round(n * 100) / 100).toLocaleString("tr-TR"); },
    uid: function () { return Date.now() + "-" + Math.floor(Math.random() * 1e6); }
  };
})();
